import React, { useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [data, setData] = useState(false)
  const [password, setwpassword] = useState(false);
  const [edit, setEditdata] = useState({ email: '', password: '' });

  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setData(false)
    setwpassword(false);
    if (edit.email == "") {
      setData(true);
    } 
    else if (edit.password == "")
      setwpassword(true);
    else {
      alert("Form Submit Successfully");
    }
  }

  const handleClick1 = () => {
    navigate("/registrationpage")
  }
  console.log(edit)
  return (
    <>
    
      <div className='wraps'>
        <div className='Container'>

          <h1 className='logins mb-5 mt-5'>Login</h1>
          <div className="col-sm-6">
            <input type="text" className="form-control mb-4" name="email" value={edit.email} onChange={(e) =>
              setEditdata({ ...edit, email: e.target.value })
            } style={{ width: "280px", marginLeft: "60px" }} placeholder="Email" />
          </div>

          <div className="passwordpage">
            <input type="password" className="form-control mb-4" name="password" value={edit.password}
              onChange={(e) => setEditdata({ ...edit, password: e.target.value })} style={{ width: "280px", marginLeft: "60px" }}
              placeholder="Password" />
          </div>
          <div className='mx-4 mt-5'>  <button className='btn btn-primary mb-3 mx-5' onClick={handleClick} style={{ width: "250px" }}>Login</button>
          </div>

          <div className='mb-2 mt-5' style={{ marginLeft: "120px" }}>Forgot <span style={{ color: "blue" }}>Password?</span></div>
          <div className='mb-2 mt-2' style={{ marginLeft: "50px" }}> Don't have an account? <button to='/registraionpage' className='mb-3' style={{ fontSize: "16px", color: "blue", textDecoration: "none", border: "none", backgroundColor: "rgb(217, 217, 228)" }} onClick={handleClick1}>SignUp</button>
          </div>

        </div>
<ToastContainer />
      </div>
    </>
  )
}

export default LoginPage; 