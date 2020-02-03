import React, {useState} from 'react'

const EditUserForm = ({editing, setEditing, currentUser, updateUser }) => {
  const initialFormState = {id: null, name: '', username: ''}
  const [user, setUser] = useState(currentUser)

  const handleInputChange = (event) => {
    const {name, value} = event.target
    setUser({...user, [name]: value})
  }

  const handleFormSubmit = (event) => {
    event.preventDefault()
    updateUser(user.id, user)
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
      <button>Update user</button>
      <button onClick={() => setEditing(false)}  className="button muted-button">Cancel</button>
    </form>
  )
}

export default EditUserForm;