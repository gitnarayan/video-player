import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavLink } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const reguser = (event) => {
    event.preventDefault();

    const data = {
      email: email,
      password: password,
    };

    axios
      .post("http://103.104.74.215:3003/api/login", data)
      .then((response) => {
        // console.log(response);
        if (response.data.result === "false") {
          toast(response.data.msg, {
            position: "top-right",
          });
        } else {
          localStorage.setItem("_id", response.data.data._id);
          toast(response.data.msg, {
            position: "top-center",
          });
          setTimeout(()=>{
            navigate("/Home");
          },3000)
        }
      })
      .catch((error) => {
        alert("error.message");
        console.log("Error: ", error);
        // toast.error("An error occurred . please try again later.");
      });
  
  };
  return (
    <>
      <ToastContainer />
      <section className="login-main-wrapper">
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
                <form action="https://askbootstrap.com/preview/vidoe-v1-1/index.html">
                  <div className="form-group">
                    <label>Email</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      required
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
                      required
                      value={password}
                      onChange={(event) => setPassword(event.target.value)}
                    />
                  </div>
                  <div className="mt-4">
                    <div className="row">
                      <div className="col-12">
                        <button
                          type="submit"
                          className="btn btn-outline-primary btn-block btn-lg"
                          onClick={reguser}>
                          Sign In
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                <div className="text-center mt-5">
                  <p className="light-gray">
                    Don’t have an account?{" "}
                    <NavLink to="/Register">
                      <strong>Sign Up</strong>
                    </NavLink>
                  </p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
