import React, {useState, useEffect} from 'react'
import APIService from '../components/APIService';


function Form(props) {
    const [nome, setnome] = useState('')
    const [rg, setrg] = useState('')
    const [cpf, setcpf] = useState('')
    const [data_nascimento, setsetdata_nascimento] = useState('')
    const [data_admissao, setdata_admissao] = useState('')
    const [funcao, setfuncao] = useState('')

    useEffect(() => {
        setnome(props.pessoas.nome)
        setrg(props.pessoas.rg)
        setcpf(props.pessoas.cpf)
        setsetdata_nascimento(props.pessoas.data_nascimento)
        setdata_admissao(props.pessoas.data_admissao)
        setfuncao(props.pessoas.funcao)
    },[props.pessoas])

    const UpdatePessoa = () => {
        APIService.UpdatePessoa(props.pessoas.id, {nome, rg, cpf, data_nascimento, data_admissao, funcao})
        .then(resp => props.updatedData(resp))
        .catch(error=> console.log(error))

    }

    const InsertPessoa = () => {
        APIService.InsertPessoa({nome, rg, cpf, data_nascimento, data_admissao, funcao})
        .then(resp=> props.insertedPessoa(resp))
        .catch(error => console.log(error))
    }


    return (
        <div>
            {props.pessoas ? (
                 <div className = "mb-3">

                 <label htmlFor = "title" className = "form-label">Nome</label>
                 <input type="text" className = "form-control"
                 value = {nome}
                 placeholder = "Digite o Nome"
                 onChange = {(e) => setnome(e.target.value)}
                 />

                 <label htmlFor = "title" className = "form-label">RG</label>
                 <input type="text" className = "form-control"
                 value = {rg}
                 placeholder = "Digite o RG"
                 onChange = {(e) => setrg(e.target.value)}
                
                />

                 <label htmlFor = "title" className = "form-label">CPF</label>
                 <input type="text" className = "form-control"
                 value = {cpf}
                 placeholder = "Digite o CPF"
                 onChange = {(e) => setcpf(e.target.value)}
                
                />

<label htmlFor = "title" className = "form-label">Data de Nascimento</label>
                 <input type="text" className = "form-control"
                 value = {data_nascimento}
                 placeholder = "Digite a sua data de nascimento"
                 onChange = {(e) => setsetdata_nascimento(e.target.value)}
                
                />

<label htmlFor = "title" className = "form-label">Data de Admissao</label>
                 <input type="text" className = "form-control"
                 value = {data_admissao}
                 placeholder = "Digite sua data de admissao"
                 onChange = {(e) => setdata_admissao(e.target.value)}
                
                />

<label htmlFor = "title" className = "form-label">Função</label>
                 <input type="text" className = "form-control"
                 value = {funcao}
                 placeholder = "Digite sua função"
                 onChange = {(e) => setfuncao(e.target.value)}
                
                />

                {
                    props.pessoas.id ? <button
                    onClick = {UpdatePessoa}
                    className = "btn btn-success mt-3"
                    >Update</button>
                    :

                    <button
                onClick = {InsertPessoa}
                className = "btn btn-success mt-3"
                >Insert</button>
                    
                }  

                
                </div>

            ):null}
            
               
            
            
            
            
        </div>
    )
}

export default Form
