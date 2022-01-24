import React, { useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axios from 'axios';


const Edit = (props) => {
    const { id } = useParams();
    const { register, handleSubmit, errors, setValue } = useForm();

    useEffect(() => {
        axios.get(`http://localhost:5000/get/${id}`).then(result => {
            setValue("id", result.data.id);
            setValue("nome", result.data.nome);
            setValue("rg", result.data.rg);
            setValue("cpf", result.data.cpf);
            setValue("data_nascimento", result.data.data_nascimento);
            setValue("data_admissao", result.data.data_admissao);
        })
    }, [id, setValue]);

    const onSubmit = data => {
        axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
        axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
        axios.put(`http://localhost:5000//update/${id}/`, data).then(result => {
            props.history.push("/list");
        })
    };

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Editar Informações</h5>
                <div className="card-text">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="form-group">
                            <label>Número do Funcionário</label>
                            <input type="text" readOnly className="form-control" name="id" ref={register({ required: true })} />
                        </div>
                        <div className="form-group">
                            <label>Nome</label>
                            <input type="text" className="form-control" name="nome" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.nome && 'Nome Inválido'}</small>
                        </div>
                        <div className="form-group">
                            <label>RG</label>
                            <input type="text" className="form-control" name="rg" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.rg && 'RG Inválido'}</small>
                        </div>
                        <div className="form-group">
                            <label>CPF</label>
                            <input type="text" className="form-control" name="cpf" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.cpf && 'CPF Inválido'}</small>
                        </div>
                        <div className="form-group">
                            <label>Data de Nascimento</label>
                            <input type="date" className="form-control" name="data_nascimento" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.data_nascimento && 'Data Inválida'}</small>
                        </div>
                        <div className="form-group">
                            <label>Data de Admissao</label>
                            <input type="date" className="form-control" name="data_admissao" ref={register({ required: true })} />
                            <small className="form-text text-danger">{errors.data_admissao && 'Data Inválida'}</small>
                        </div>

                        <Link to="/" className="btn btn-primary">
                            <i className="fa fa-arrow-left"></i> Cancelar
                        </Link>
                        &nbsp;
                        <button type="submit" className="btn btn-primary">Salvar <i className="fa fa-save"></i></button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Edit;