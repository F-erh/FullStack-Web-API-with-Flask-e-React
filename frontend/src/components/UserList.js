import React from 'react'
import APIService from '../components/APIService';

function UserList(props) {

    const editUser = (user) => {
        props.editUser(user)
    }

    const deleteUser = (user) => {
        APIService.DeleteUser(user.id)
        .then(() => props.deleteUser(user))

    }

    return (
        <div>
            {props.users && props.users.map(user => {
        return (
          <div key = {user.id}>
            <h2>{user.title}</h2>
            <p>{user.body}</p>
            <p>{user.date}</p>

            <div className = "row">
                <div className = "col-md-1">
                    <button className = "btn btn-primary"
                    onClick = {() => editUser(user)}
                    >Update</button>
                </div>

                <div className = "col">
                    <button className = "btn btn-danger"
                      onClick = {() => deleteUser(user)}
                    >Delete</button>
                </div>

            </div>

            <hr/>
            
          </div>
        )
      })}
            
        </div>
    )
}

export default UserList
