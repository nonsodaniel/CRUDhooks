import React, { useState } from 'react'

const AddUserForm = props => {
    const initFormState = {
        id: null, name: '', username: ""
    }
    const [user, setUser] = useState(initFormState)

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value)
        setUser({ ...user, [name]: value });
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!user.name || !user.username) return
        props.addUser(user)
        setUser(initFormState)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Name</label>
            <input type="text" name="name" value={user.name} onChange={handleChange} />
            <label>Username</label>
            <input type="text" name="username" value={user.username} onChange={handleChange} />
            <button type="submit">Add new user</button>
        </form>
    )
}

export default AddUserForm