import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink} from "react-router-dom"

function Register() {
  const navigate = useNavigate();
 
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [genders, setGenders] = useState("");

  const handleSubmit = (event) =>{
    event.preventDefault();

    const dataobj = {
      username: name,
      email: email,
      password: password,
      confirm_password : confirmPassword,
      gender : genders
  }
  console.log(dataobj)
  axios
  .post('http://103.104.74.215:3003/api/signup', dataobj)
  .then((response)=>{
    console.log(response)
    alert(response.data.msg)
    if(response.data.result === false){
      // alert(response.data.msg)
    }
    else{
      alert("success")
      navigate("/Login")
    }

  })
  }

  return (
    <div className="container-fluid pl-0 pr-0">
      <div className="row no-gutters">
        <div className="col-md-12  bg-white full-height">
          <div className="login-main-left">
            <div className="text-center mb-5 login-main-left-header pt-4">
              <img src="img/favicon.png" className="img-fluid" alt="LOGO" />
              <h5 className="mt-3 mb-3">Welcome to Vidoe</h5>
              <p>
                It is a long established fact that a reader <br /> will be
                distracted by the readable.
              </p>
            </div>
            <form action="#">
              <div className="form-group">
                <label>Username</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Username"
                  value={name}
                  onChange={(event) => setName(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>
              <div className="form-group">
                <label>confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="confirm Password"
                  value={confirmPassword}
                  onChange={(event) => setConfirmPassword(event.target.value)}
                />
              </div>

              <div className="form-group mt-4">
                <select
                  required
                  className="form-control"
                  value={genders}
                  onChange={(event) => setGenders(event.target.value)}>
                  <option className="text-center">--Select Gender--</option>
                  <option value="male">Male</option>
                  <option value="female">FeMale</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="mt-4">
                <button
                  type="submit"
                  className="btn btn-outline-primary btn-block btn-lg"
                  onClick={(event)=>{handleSubmit(event)}}>
                  Sign Up
                </button>
              </div>
            </form>
            <div className="text-center mt-5">
              <p className="light-gray">
                Already have an Account? <NavLink to="/Login">Sign In</NavLink>
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  );
}

export default Register;
