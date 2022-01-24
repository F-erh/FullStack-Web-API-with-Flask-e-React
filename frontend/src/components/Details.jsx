import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table'

const Details = () => {
    const { id } = useParams();
    const [post, set] = useState();

    useEffect(() => {
        axios.get(`http://localhost:5000/get/${id}/`).then(result => {
            set(result.data);
        })
    }, [id]);

    return (
        <div>
        <Table striped bordered hover>
            <thead>
                <tr>
                <th>Nº</th>
                <th>Nome</th>
                <th>RG</th>
                <th>CPF</th>
                <th>Data de Nascimento</th>
                <th>Data de Admissao</th>
                <th>Ação</th>
                </tr>
            </thead>
            <tbody>
                <td>{post?.id}</td>
                <td>{post?.nome}</td>
                <td>{post?.rg}</td>
                <td>{post?.cpf}</td>
                <td>{post?.data_nascimento.split('-').reverse().join('/')}</td>
                <td>{post?.data_admissao}</td>
                <td>            <div className="btn-group">
                <Link to={`/edit/${post?.id}`} className="outline-primary"><i className="fa fa-edit"></i>
                </Link>
                <Link to={`/delete/${post?.id}`} className="outline-danger"><i className="fa fa-trash"></i>
                </Link>
            </div></td>

            </tbody>
        </Table>
        </div>
    );
}

export default Details;