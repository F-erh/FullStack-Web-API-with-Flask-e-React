import React from 'react'
import APIService from './APIService';

function PessoaList(props) {

    const UpdatePessoa = (pessoa) => {
        props.UpdatePessoa(pessoa)
    }

    const deletePessoa = (pessoa) => {
        APIService.deletePessoa(pessoa.id)
        .then(() => props.deletePessoa(pessoa))

    }

    return (
        <div>
            {props.Pessoa && props.Pessoa.map(pessoa => {
        return (
          <div key = {pessoa.id}>
            <h2>{pessoa.nome}</h2>
            <p>{pessoa.rg}</p>
            <h2>{pessoa.cpf}</h2>
            <p>{pessoa.data_nascimento}</p>
            <h2>{pessoa.data_admissao}</h2>
            <p>{pessoa.funcao}</p>
            <p>{pessoa.date}</p>

            <div className = "row">
                <div className = "col-md-1">
                    <button className = "btn btn-primary"
                    onClick = {() => UpdatePessoa(pessoa)}
                    >Update</button>
                </div>

                <div className = "col">
                    <button className = "btn btn-danger"
                      onClick = {() => deletePessoa(pessoa)}
                    >Delete</button>
                </div>

            </div>

            <hr/>
            
          </div>
        )
      })}
            
        </div>
    )
}

export default PessoaList
