
import './App.css';
import {useState, useEffect} from 'react';
import UserList from './components/UserList';
import Form from './components/Form';

function App() {

  const [users, setUsers] = useState([])
  const [editedUsers, seteditedUsers] = useState(null)

  useEffect(() => {
    fetch('http://127.0.0.1:5000/get', {
      'method':'GET',
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then(resp => resp.json())
    .then(resp => setUsers(resp))
    .catch(error => console.log(error))

  },[])

  const editUsers = (user) => {

    seteditedUsers(user)
  }

  const updatedData = (user) => {
    const new_users = users.map(my_users => {
      if(my_users.id === user.id) {
        return user
      } else {
        return my_users
      }
    })
    setUsers(new_users)
  }

  const openForm = () => {
    seteditedUsers({title:'', body:''})
  }

  const insertedUsers  = (user) => {
    const new_users = [...users, user]
    setUsers(new_users)

  }

  const deleteUsers = (user) => {
    const new_users = users.filter(myuser => {
      if(myuser.id === user.id) {
        return false;
      }
      return true
    })

    setUsers(new_users)

  }


  return (
    <div className="App">
      <div className = "row">
        <div className = "col">
        <h1>Usuários</h1>

        </div>
        <div className = "col">
        <button
        className = "btn btn-success"
        onClick = {openForm}
        >Insertuser</button>

        </div>
      </div>
      
      <br/>
      <br/>

        <UserList users = {users} editUsers = {editUsers} deleteUsers = {deleteUsers}/>

        {editedUsers ? <Form user = {editedUsers} updatedData = {updatedData} insertedUsers  = {insertedUsers}/> : null}

        
    </div>
  );
}

export default App;
