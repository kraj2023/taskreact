import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom';


const RegistrationPage = () => {
  const [edit, setEditdata] = useState({
    name: "",
    email: "",
    password: ""
  });



  const navigate = useNavigate();
  const handleClick = () => {
    alert("Register successfully")
  }


  const handleClick1 = () => {
    navigate("/loginpage")
    
  }
  return (
    <>
    
      <div className='Container'>
        <h1 className='register mb-5 mt-5'>Please Register here...</h1>
        <div className="emailpage">
          <input type="text" className="form-control mb-4" name="name" value={edit.name} onChange={(e) =>
            setEditdata({ ...edit, name: e.target.value })
          } style={{ width: "280px", marginLeft: "60px" }} placeholder="Name" />
        </div>

        <div className="emailpage">
          <input type="text" className="form-control mb-4" name="email" value={edit.email} onChange={(e) =>
            setEditdata({ ...edit, email: e.target.value })
          } style={{ width: "280px", marginLeft: "60px" }} placeholder="Email" />
        </div>

        <div className="passwordpage">
          <input type="password" className="form-control mb-4" name="password" value={edit.password}
            onChange={(e) => setEditdata({ ...edit, password: e.target.value })} style={{ width: "280px", marginLeft: "60px" }}
            placeholder="Password" />
        </div>
        <div className='mx-4 mt-5'><button className='btn btn-primary mb-3 mx-5' onClick={handleClick} style={{ width: "250px" }}>Sign Up</button>
        </div>

        <div className='mb-2 mt-2' style={{ marginLeft: "50px" }}>All ready an account? <button className='btn btn-secondary mb-3' style={{ fontSize: "16px", color: "white", textDecoration: "none" }} onClick={handleClick1}>Login</button>
        </div>

     
      </div>
    </>
  )
}

export default RegistrationPage