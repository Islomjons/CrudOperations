import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

const UpdatePost = () => {
  const history = useHistory()
  const [id, setId] = useState(0)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")

  useEffect(() => {
    setId(localStorage.getItem("id"));
    setName(localStorage.getItem("name"));
    setEmail(localStorage.getItem("email"))
  }, [])

  function handleUpdate(e) {
      e.preventDefault()
      axios.put(
        `https://643bdfc144779455736244ba.mockapi.io/crud-youtubes/${id}`,
        {
            name: name,
            email: email
        }
      ).then(() => {
        history.push("/readpost")
      })
  }

  return (
    <div className='update__post mt-3'>
      <h2 className='mb-3'>Update Post</h2>
      <form>
         <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" 
            className="form-control" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email"
             className="form-control" 
             id="exampleInputEmail1" 
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             />
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleUpdate}>Submit</button>
    </form>
    </div>
  )
}

export default UpdatePost