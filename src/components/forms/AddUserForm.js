import React, {useState} from 'react';

const AddUserForm = ({addUser}) => {
  const initialFormState = {id: null, name: '', username: ''}
  const [user, setUsers] = useState(initialFormState)

  const handleInputChange = (event) => {
    const {name, value} = event.target
    setUsers({...user, [name]: value})
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    addUser(user)
    setUsers(initialFormState)
  }

  return(
    <form onSubmit={handleFormSubmit}>
      <label>Name</label>
      <input 
        type="text"
        name="name"
        id="name"
        value={user.name}
        onChange={handleInputChange}
      />
      <label>UserName</label>
      <input 
        type="text"
        name="username"
        id="username"
        value={user.username}
        onChange={handleInputChange}
      />
      <button>Add New User</button>
    </form>
  )
}

export default AddUserForm;