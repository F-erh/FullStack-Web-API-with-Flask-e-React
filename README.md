## Sobre

Aplicação web com Flask no backend fazendo a API e React.js no FronEnd fazendo o consumo, além disso é integrado com banco de dados MYSQL.

Nesta aplicação poderá gerenciar os funcionários de um banco de dados, ou seja, todas as funções de CRUD: Criar, Listar, Atualizar e Deletar. 
## Como rodar a aplicação

Antes de tudo, clone o repositório pelo link:
Após execute o arquivo requiriments.txt

A Aplicação utiliza dois servidores um do lado do backend e outro com o frontend.

## Banco de dados
Em seu localhost/phpmyadmin/ crie um banco de dados com o nome que está sendo chamado em app.py. Após isso:
- cd Backend 
- python 
- >> from app import db
- >> db.create_all()

Isto fará as migrações da aplicação para o banco de dados. 
## Backend
Para rodar o backend execute o arquivo app.py. O servidor iniciará na porta http://localhost:5000

### Frontend

- cd FrontEnd
- npm i (para instalar as dependências)
- npm run 

Após isso, a aplicação iniciará na porta http://localhost:3000 e então poderá fazer o gerenciamento. 