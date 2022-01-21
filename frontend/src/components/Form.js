import React, {useState, useEffect} from 'react'
import APIService from '../components/APIService';


function Form(props) {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    useEffect(() => {
        setTitle(props.user.title)
        setBody(props.user.body)
    },[props.user])

    const UpdateUser = () => {
        APIService.UpdateUser(props.user.id, {title, body})
        .then(resp => props.updatedData(resp))
        .catch(error=> console.log(error))

    }

    const insertUser = () => {
        APIService.insertUser({title, body})
        .then(resp=> props.insertedUser(resp))
        .catch(error => console.log(error))
    }


    return (
        <div>
            {props.user ? (
                 <div className = "mb-3">

                 <label htmlFor = "title" className = "form-label">Title</label>
                 <input type="text" className = "form-control"
                 value = {title}
                 placeholder = "Please Enter Title"
                 onChange = {(e) => setTitle(e.target.value)}
                 />

                <label htmlFor = "body" className = "form-label">Description</label>
                <textarea
                rows = "5"
                value = {body}
                onChange = {(e) => setBody(e.target.value)}
                className = "form-control"
                placeholder = "Please Enter Description"
                
                />

                {
                    props.user.id ? <button
                    onClick = {UpdateUser}
                    className = "btn btn-success mt-3"
                    >Update</button>
                    :

                    <button
                onClick = {insertUser}
                className = "btn btn-success mt-3"
                >Insert</button>
                    
                }  

                
                </div>

            ):null}
            
               
            
            
            
            
        </div>
    )
}

export default Form
