import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CreatePost = () => {
    const history = useHistory()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const header = {"Access-Control-Allow-Origin" : "*"}

    function handleSubmit(e) {
        e.preventDefault()
        axios.post("https://643bdfc144779455736244ba.mockapi.io/crud-youtubes", {
            name: name,
            email: email,
            header
        })
        .then(() => {
          history.push("/readpost")
        })
    }
  return (
    <div className='create__post mt-3'>
      <h2 className='mb-3'>Create Post</h2>
    <form>
         <div className="mb-3">
            <label className="form-label">Name</label>
            <input type="text" 
            className="form-control" 
            onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="mb-3">
            <label className="form-label">Email address</label>
            <input type="email"
             className="form-control" 
             id="exampleInputEmail1" 
             onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
    </form>
    </div>
  )
}

export default CreatePost