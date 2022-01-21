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


class Users(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(100))
    body = db.Column(db.Text())
    date = db.Column(db.DateTime, default = datetime.datetime.now)


    def __init__(self, title, body):
        self.title = title
        self.body = body


class Userschema(ma.Schema):
    class Meta:
        fields = ('id', 'title', 'body', 'date')


users_schema = Userschema()
users_schema = Userschema(many=True)


@app.route('/get', methods = ['GET'])
def get_users():
    all_users = Users.query.all()
    results = users_schema.dump(all_users)
    return jsonify(results)


@app.route('/get/<id>/', methods = ['GET'])
def post_details(id):
    user = Users.query.get(id)
    return users_schema.jsonify(user)


@app.route('/add', methods = ['POST'])
def add_user():
    title = request.json['title']
    body = request.json['body']

    users = Users(title, body)
    db.session.add(users)
    db.session.commit()
    return users_schema.jsonify(users)



@app.route('/update/<id>/', methods = ['PUT'])
def update_user(id):
    user = Users.query.get(id)

    title = request.json['title']
    body = request.json['body']

    user.title = title
    user.body = body

    db.session.commit()
    return users_schema.jsonify(user)



@app.route('/delete/<id>/', methods = ['DELETE'])
def user_delete(id):
    user = Users.query.get(id)
    db.session.delete(user)
    db.session.commit()

    return users_schema.jsonify(user)



if __name__ == "__main__":
    app.run()