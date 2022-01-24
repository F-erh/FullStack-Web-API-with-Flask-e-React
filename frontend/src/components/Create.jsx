import React from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Create = (props) => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = data => {
        axios.pSost('http://localhost:5000/add', data).then(result => {
            props.history.push("/list");
        })
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title"><center>Cadastro de Novo Funcionário</center></h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" placeholder="Insira o nome do funcionário" name="nome" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.nome && 'Nome Inválido'}</small>
                        </div>
                        <div className="form-group">
                            <label>RG</label>
                            <input type="number" className="form-control" placeholder="Insira o RG do funcionário" name="rg" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.rg && 'RG inválido'}</small>
                        </div>
                        <div className="form-group">
                            <label>CPF</label>
                            <input type="number" className="form-control" placeholder="Insira o CPF do funcionário" name="cpf" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.cpf && 'CPF inválido'}</small>
                        </div>
                        <div className="form-group">
                            <label>Data de Nascimento</label>
                            <input type="date" className="form-control" name="data_nascimento" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.data_nascimento && 'data Inválida'}</small>
                        </div>
                        <div className="form-group">
                            <label>Data de Admissao</label>
                            <input type="date" className="form-control" name="data_admissao" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.data_admissao && 'Data Inválida'}</small>
                        </div>
                        <button type="submit" className="btn btn-primary">Salvar</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Create;