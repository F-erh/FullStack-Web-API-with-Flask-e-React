from flask import Flask, jsonify, request
from flask_sqlalchemy import SQLAlchemy
import datetime
from flask_marshmallow import Marshmallow
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:12345678@localhost/crud-apiflask'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
ma = Marshmallow(app)


class Pessoas(db.Model):
    id_pessoas = db.Column(db.Integer, primary_key=True)
    nome = db.Column(db.String(100))
    rg = db.Column(db.Integer())
    cpf = db.Column(db.Integer())
    data_nascimento = db.Column(db.DateTime)
    data_admissao = db.Column(db.DateTime)
    funcao = db.Column(db.Integer())
    date = db.Column(db.DateTime, default = datetime.datetime.now)


    def __init__(self, nome, rg, cpf, data_nascimento, data_admissao, funcao):
        self.nome = nome
        self.rg = rg
        self.cpf = cpf
        self.data_nascimento = data_nascimento
        self.data_admissao = data_admissao
        self.funcao = funcao


class PessoaSchema(ma.Schema):
    class Meta:
        fields = ('id_pessoas', 'nome', 'rg', 'cpf', 'data_nascimento', 'data_admissao', 'funcao', 'date')


pessoa_schema = PessoaSchema()
pessoas_schema = PessoaSchema(many=True)


@app.route('/get', methods = ['GET'])
def get_pessoas():
    all_pessoas = Pessoas.query.all()
    results = pessoas_schema.dump(all_pessoas)
    return jsonify(results)


@app.route('/get/<id_pessoas>/', methods = ['GET'])
def post_details(id_pessoas):
    pessoa = Pessoas.query.get(id_pessoas)
    return pessoa_schema.jsonify(pessoa)


@app.route('/add', methods = ['POST'])
def add_pessoas():
    nome = request.json['nome']
    rg = request.json['rg']
    cpf = request.json['cpf']
    data_nascimento = request.json['data_nascimento']
    data_admissao = request.json['data_admissao']
    funcao = request.json['funcao']

    pessoas = Pessoas(nome, rg, cpf, data_nascimento, data_admissao, funcao)
    db.session.add(pessoas)
    db.session.commit()
    return pessoa_schema.jsonify(pessoas)



@app.route('/update/<id_pessoas>/', methods = ['PUT'])
def update_pessoa(id_pessoas):
    pessoa = Pessoas.query.get(id_pessoas)

    nome = request.json['nome']
    rg = request.json['rg']
    cpf = request.json['cpf']
    data_nascimento = request.json['data_nascimento']
    data_admissao = request.json['data_admissao']
    funcao = request.json['funcao']

    pessoa.nome = nome
    pessoa.rg = rg
    pessoa.cpf = cpf
    pessoa.data_nascimento = data_nascimento
    pessoa.data_admissao = data_admissao
    pessoa.funcao = funcao
    

    db.session.commit()
    return pessoa_schema.jsonify(pessoa)



@app.route('/delete/<id_pessoas>/', methods = ['DELETE'])
def pessoa_delete(id_pessoas):
    pessoa = Pessoas.query.get(id_pessoas)
    db.session.delete(pessoa)
    db.session.commit()

    return pessoa_schema.jsonify(pessoa)



if __name__ == '__main__':
    app.run()