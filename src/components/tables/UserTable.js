import React from 'react';

const UserTable = (props) => {
    console.log("My props", props)
    let _props = props.users
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>

                {

                    _props.length > 0 ? (
                        _props.map(user => (
                            <tr key={user.id}>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>
                                    <button className="button muted-button">Edit</button>
                                    <button className="button muted-button">Delete</button>
                                </td>
                            </tr>
                        ))

                    ) : (
                            <tr>
                                <td colSpan={3}>No users</td>
                            </tr>
                        )
                }

                <tr>
                    <td>Name data</td>
                    <td>Username data</td>
                    <td>
                        <button className="button muted-button">Edit</button>
                        <button className="button muted-button">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    )

}

export default UserTable