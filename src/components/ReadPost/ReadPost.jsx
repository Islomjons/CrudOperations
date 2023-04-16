import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const ReadPost = () => {
    const [data, setData] = useState([])
    function  getItem() {
        axios.get("https://643bdfc144779455736244ba.mockapi.io/crud-youtubes")
            .then(response => {
                setData(response.data)
            })
    }

    const handleDelete = (id) => {
        axios.delete(
            `https://643bdfc144779455736244ba.mockapi.io/crud-youtubes/${id}`
        ).then(() => {
            alert("Do you want to delete")
        })
        .then(() => {
            getItem()
        })
    }

    const setToLocalStarage = (id, name, email) => {
        localStorage.setItem("id", id);
        localStorage.setItem("name", name);
        localStorage.setItem("email", email);
    }

    useEffect(() => {
        getItem()
    }, [])
  return (
<div className='read__post mt-3'>
    <h2 className='mb-3'>Read Operation</h2>
<table className="table">
    <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col"></th>
            <th scope="col"></th>
        </tr>
    </thead>
    <tbody>
        {
            data.map((eachItem, id) => {
                return (
                    <>
                        <tr>
                            <th scope="row">{eachItem.id}</th>
                            <td>{eachItem.name}</td>
                            <td>{eachItem.email}</td>
                            <td>
                                <Link to="/updatepost">
                                    <button type="button" className="btn btn-success" onClick={() => setToLocalStarage(
                                        eachItem.id,
                                        eachItem.name,
                                        eachItem.email
                                    )}>Edit</button>
                                </Link>
                            </td>
                            <td>
                                <button type="button" className="btn btn-danger" onClick={() => handleDelete(eachItem.id)}>Delete</button>
                            </td>
                        </tr>
                    </>
                )
            })
        }
    </tbody>
</table>
    </div>
  )
}

export default ReadPost