import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Link } from 'react-router-dom';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'

const Delete = (props) => {
    const { id } = useParams();
    const [post, setPost] = useState();

    useEffect(() => {
        axios.get(`http://localhost:5000/get/${id}`).then(result => {
            setPost(result.data);
        })
    }, [id]);

    const handleRemovePost = () => {
        axios.delete(`http://localhost:5000/delete/${id}/`).then(result => {
            props.history.push("/");
        })
    }

    return (
                <><Alert variant="danger">
            <Alert.Heading>Deseja excluir o Funcionário <strong>{post?.nome}</strong></Alert.Heading>
            <p>
                Com essa ação excluirá o funcionário da base de dados e essa ação não poderá ser revertida. 
            </p>
            <hr />
            <p className="mb-0"> <center>
            <Link to="/list" className="btn btn-primary">
                    <i className="fa fa-arrow-left"></i> Cancelar
                </Link>
                <button onClick={handleRemovePost} className="btn btn-danger">
                    Excluir <i className="fa fa-trash"></i>
                </button>
                </center>
            </p>
        </Alert></>
    );
}

export default Delete;