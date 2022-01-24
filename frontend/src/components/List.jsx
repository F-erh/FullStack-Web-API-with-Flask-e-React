import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Table from 'react-bootstrap/Table'

const List = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/get').then(result => {
            setPosts(result.data);
        })
    }, []);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                <th><center>Nome</center></th>
                <th><center>Data de Admissão</center></th>
                <th><center>Ação</center></th>
                </tr>
            </thead>
            <tbody>
            {
                    posts.map(post => (
                        <tr key={post.id}>
                            <td><center>{post.nome.split(' ').slice(0, -1).join(' ')}</center></td>
                            <td><center>{post.data_admissao.split('-').reverse().join('/')}</center></td>
                            <td className="text-center">
                                <div className="btn-group">
                                    <Link to={`/edit/${post.id}`} className="outline-primary">
                                        <i className="fa fa-edit"></i>
                                    </Link>
                                    <Link to={`/details/${post.id}`} className="outline-secondary">
                                        <i className="fa fa-eye"></i>
                                    </Link>
                                    <Link to={`/delete/${post.id}`} className="outline-danger">
                                        <i className="fa fa-trash"></i>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
</Table>
    );
}

export default List;