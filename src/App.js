import React, { useState } from "react";
import UserTable from './components/tables/UserTable'
import AddUserForm from './components/views/Adduser'

const App = () => {

  const usersData = [
    { id: 1, name: 'Tania', username: 'floppydiskette' },
    { id: 2, name: 'Craig', username: 'siliconeidolon' },
    { id: 3, name: 'Ben', username: 'benisphere' },
  ]

  const [users, setUsers] = useState(usersData)

  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user])
  }

  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  }

  return (
    <React.Fragment>
      <div className="container">
        <h1>CRUD App with Hooks</h1>
        <div className="flex-row">
          <div className="flex-large">
            <h2>Add user</h2>
            <AddUserForm addUser={addUser} />
          </div>
          <div className="flex-large">
            <h2>View users</h2>
            <UserTable users={users} deleteUser={deleteUser} />
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default App;
