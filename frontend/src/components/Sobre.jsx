/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Card from 'react-bootstrap/Card';

export default function App() {
return (
    <box>
	<div style={{ display: 'block', width: 800, padding: 30 }}>
        <center><Card border="light" style={{ display: 'block', width: 800, padding: 30 }}>
            <Card.Header>	<h5 style={{ color: "black",
				textAlign: "center",
				marginTop: "-0px" }}>
		Sobre a aplicação
	</h5></Card.Header>
            <Card.Body>
            <p className="mb-0">
            <Card.Text>
                Aplicação web para o gerenciamento e controle de funcionários. Backend foi desenvolvido 
                com Flask com integração ao banco de dados MYSQL e o consumo da API foi desenvolvido com React.js.
            </Card.Text>
            </p>
            </Card.Body>
        </Card>

        <b></b>
        <Card.Body>
            <p className="mb-0">
            <Card.Text>
            <p className="copyright text-center">
              © {new Date().getFullYear()}{" "}
              Desenvolvido por Fernanda Gaspar <a href="https://github.com/F-erh">GitHub</a>
            </p>
            </Card.Text>
            </p>
            </Card.Body>
        </center>
    </div>
    </box>
    
);
}
