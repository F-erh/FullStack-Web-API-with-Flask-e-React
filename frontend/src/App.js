import './App.css';
import {useState, useEffect} from 'react';
import PessoaList from './components/PessoaList';
import Form from './components/Form';

function App() {

  const [Pessoa, setPessoa] = useState([])
  const [editedPessoa, seteditedPessoa] = useState(null)

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then(resp => resp.json())
    .then(resp => setPessoa(resp))
    .catch(error => console.log(error))

  },[])

  const UpdatePessoa = (pessoa) => {

    seteditedPessoa(pessoa)
  }

  const updatedData = (pessoa) => {
    const new_Pessoa = Pessoa.map(my_Pessoa => {
      if(my_Pessoa.id === pessoa.id) {
        return pessoa
      } else {
        return my_Pessoa
      }
    })
    setPessoa(new_Pessoa)
  }

  const openForm = () => {
    seteditedPessoa({nome:'', rg:'', cpf:'', data_nascimento:'', data_admissao:'', funcao:''})
  }

  const insertedPessoa  = (pessoa) => {
    const new_Pessoa = [...Pessoa, pessoa]
    setPessoa(new_Pessoa)

  }

  const deletePessoa = (pessoa) => {
    const new_Pessoa = Pessoa.filter(mypessoa => {
      if(mypessoa.id === pessoa.id) {
        return false;
      }
      return true
    })

    setPessoa(new_Pessoa)

  }


  return (
    <div className="App">
      <div className = "row">
        <div className = "col">
        <h1>Lista de Funcionários</h1>

        </div>
        <div className = "col">
        <button
        className = "btn btn-success"
        onClick = {openForm}
        >Insira Funcionário</button>

        </div>
      </div>
      
      <br/>
      <br/>

        <PessoaList Pessoa = {Pessoa} UpdatePessoa = {UpdatePessoa} deletePessoa = {deletePessoa}/>

        {editedPessoa ? <Form pessoa = {editedPessoa} updatedData = {updatedData} insertedPessoa  = {insertedPessoa}/> : null}

        
    </div>
  );
}

export default App;
