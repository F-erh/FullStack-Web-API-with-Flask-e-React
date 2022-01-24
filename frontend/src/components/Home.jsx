/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';

export default function App() {
return (
    <box>
	<div style={{ display: 'block', width: 800, padding: 30 }}>
        <center><Card border="light" style={{ display: 'block', width: 800, padding: 30 }}>
            <Card.Header>	<h1 style={{ color: "black",
				textAlign: "center",
				marginTop: "-0px" }}>
		Gerenciamento e Controle de Funcionários
	</h1></Card.Header>
        </Card>
        <br />
        <h4 style={{ color: "black",
				textAlign: "center",
				marginTop: "-0px" }}>
		Funcionalidades da aplicação
	</h4>
        <Carousel style={{ display: 'block', width: 800, padding: 30 }} variant="dark">
        <Carousel.Item interval={1500}><img
                    className="d-block w-100"
                    src="https://s3.amazonaws.com/ibc-portal/wp-content/uploads/2017/11/14162250/quadro-de-funcionarios-expansao-diminuicao.jpg"
                   />
                <Carousel.Caption>
                <h3 style={{ color: "Black"}}>Pesquisa</h3>
                    <h6 style={{ color: "LightGrey"}}>Encontre o Funcionário pelo nome ou sobrenome</h6>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                    className="d-block w-100"
                    src="https://pontomais.com.br/blog/wp-content/uploads/2019/05/monitorar-funcionarios-scaled.jpg"
                    alt="Image One" />
                <Carousel.Caption>
                    <h3 style={{ color: "LightGrey"}}>Listagem</h3>
                    <h6 style={{ color: "Black"}}>Veja todos os funcionários disponíveis na base de dados</h6>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={500}>
                <img
                    className="d-block w-100"
                    src="https://www.novida.com.br/wp-content/uploads/2020/03/Monitorar-funcionarios.jpg"
                    alt="Image Two" />
                <Carousel.Caption>
                <h3 style={{ color: "black"}}>Gerenciamento</h3>
                    <h6 style={{ color: "Black"}}>Adcione um novo funcionário ou apague um existente</h6>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
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
