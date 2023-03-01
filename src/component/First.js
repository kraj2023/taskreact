import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';

const First = () => {
  const [data, setData] = useState([]);
  const [editdata, setEditdata] = useState({});
  const [toggle, setToggle] = useState(false);
  
  const fetch1 = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setData(res.data)
      console.log(res.data);
    }).catch(() => { console.log("error") })
  }

  useEffect(() => {
    fetch1()
  }, [])
  
  

  const handleDelete = (id) => {
    const val = data.filter((e) => e.id !== id)
    setData(val);
  }

  const handleEdit = (id) => {
    const val = data.find((e) => e.id === id)
    setEditdata(val)
    setToggle(true)
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setEditdata({ ...editdata, [value]: name })
  }

  const handleUpdate = () => {
    setData(
      data.map((e) => {
        if (e.id === editdata.id) {
          return ({ ...e, name: editdata.name, email: editdata.email })
        } else {
          return e;
        }
      })
    )
    setToggle(false)
  }

  return (
    <>
      {toggle && (
        <div className='m-2 d-flex align-items-center justify-content-between'>
          <input className='form-control mx-2' placeholder='edit' name='name' value={editdata.name} onChange={(e) => { handleChange(e) }}></input>
          <input className='form-control mx-2' placeholder='edit' name='email' value={editdata.email} onChange={(e) => { handleChange(e) }}></input>
          <button className='btn btn-success' onClick={handleUpdate}>Update</button>
        </div>
      )}
      <Table border={1} style={{ color: "black", backgroundColor: "white" }}>
        <thead>
          <tr>
            <th>S.no</th>
            <th>Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        {data.map((item, index) => (
          <tbody key={index}>
            <tr>
              <td>{index + 1}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>
                <button className='btn btn-danger mx-2' onClick={() => { handleDelete(item.id) }}>Delete</button>
                <button className='btn btn-warning' onClick={() => { handleEdit(item.id) }}>Edit</button>
              </td>
            </tr>
          </tbody>
        ))}

      </Table>
    </>
  )
}

export default First