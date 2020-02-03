import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import UserTable from './components/tables/UserTable';
import AddUserForm from './components/forms/AddUserForm';
import EditUserForm from './components/forms/EditUserForm';
import { func } from 'prop-types';

const App = () => {
  const usersdata = [
    {id: 1, name: 'aaaaa', username: 'aaaaaaaaaa'},
    {id: 2, name: 'bbbbb', username: 'bbbbbbbbbb'},
    {id: 3, name: 'ccccc', username: 'cccccccccc'},
  ]

  const [users, setUsers] = useState(usersdata)
  const [editing, setEditing] = useState(false)
  const initialFormState = {id: null, name: '', username: ''}
  const [currentUser, setCurrentUser] = useState(initialFormState)
  const [currentTime, setCurrentTime] = useState(new Date())

  const addUser = (user) => {
    user.id = users.length + 1
    setUsers([...users, user])
  }

  const deleteUser = (user_id) => {
    setUsers(users.filter(user => user.id !== user_id))
  }

  const editUser = (user) => {
    setEditing(true)
    setCurrentUser({id: user.id, name: user.name, username: user.username})
  }

  const updateUser = (user_id, updatedUser) => {
    setEditing(false)
    setUsers(users.map(user => (user.id === user_id ? updatedUser : user )))
  }

  useEffect(() => {
    setInterval(() => tick(), 1000)
  })

  function tick(){
    setCurrentTime(new Date())
  }

  return(
    <div className="container">
      <h3>Time: {currentTime.toLocaleTimeString()} </h3>
     
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          { editing ?  (
            <div>
              <h2>Edit User</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing} 
                currentUser={currentUser} 
                updateUser={updateUser} 
              />
            </div>
            ) : (
            <div>
              <h2>Add User</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editUser={editUser} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  )
}

export default App
