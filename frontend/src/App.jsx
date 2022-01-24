import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Container from '@material-ui/core/Container';
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'

import Create from './components/Create';
import List from './components/List';
import Details from './components/Details';
import Delete from './components/Delete';
import Edit from './components/Edit';
import Home from './components/Home';
import Sobre from './components/Sobre';
import Pesquisa from './components/Pesquisa';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
            <Navbar.Brand href="/" >Controle de Funcionários</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                <NavDropdown title="Gerenciamento" id="collasible-nav-dropdown">
                    <NavDropdown.Item href="/list">Lista de Funcionários</NavDropdown.Item>
                    <NavDropdown.Item href="/create">Adcionar Funcionário</NavDropdown.Item>
                    <NavDropdown.Item href="/pesquisa">Pesquisar Funcionário</NavDropdown.Item>
                </NavDropdown>
                </Nav>
                <Nav>
                <Nav.Link href="sobre">Sobre</Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
            <div className="container">
                <br />
                <Route path="/" exact component={Home}></Route>
                <Route path="/sobre" exact component={Sobre}></Route>
                <Route path="/pesquisa" exact component={Pesquisa}></Route>
                <Route path="/list" exact component={List}></Route>
                <Route path="/create" exact component={Create}></Route>
                <Route path="/details/:id" exact component={Details}></Route>
                <Route path="/delete/:id" exact component={Delete}></Route>
                <Route path="/edit/:id" exact component={Edit}></Route>
            </div>
        </BrowserRouter>
    );
}

export default App;