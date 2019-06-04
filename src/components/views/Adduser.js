import React, { useState } from 'react'

const AddUserForm = props => {

    const initFormState = {
        id: null, name: '', username: ""
    }
    const [user, setUser] = useState(initFormState)
    return (
        <form>
            <label>Name</label>
            <input type="text" name="name" value="" />
            <label>Username</label>
            <input type="text" name="username" value="" />
            <button>Add new user</button>
        </form>
    )
}

export default AddUserForm