import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

const Navbar = () => {
  const [userData, setuserData] = useState({});

  const [currImage, setCurrImage] = useState(null);
  const reference = useRef(null);

  const getData = () => {
    const id = localStorage.getItem("_id");
    const userID = {
      _id: id,
    };
    axios
      .post("http://103.104.74.215:3003/api/view_profile", userID)
      .then((response) => {
        console.log(response.data.data);
        setCurrImage(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    getData();
  }, [0]);

  useEffect(() => {
    let user_id = localStorage.getItem("_id");
    const id = {
      _id: user_id,
    };

    axios
      .post("http://103.104.74.215:3003/api/view_profile", id)
      .then((response) => {
        console.log(response.data.data);
        setuserData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const navigate = useNavigate();
  const logoutHandler = () => {
    localStorage.removeItem("_id");
    navigate("/Home");
  };
  return (
    <nav className="navbar navbar-expand navbar-light bg-white static-top osahan-nav sticky-top">
      &nbsp;&nbsp;
      <button
        className="btn btn-link btn-sm text-secondary order-1 order-sm-0"
        id="sidebarToggle">
        <i className="fas fa-bars" />
      </button>{" "}
      &nbsp;&nbsp;
      <a className="navbar-brand mr-1" href="index.html">
        <img className="img-fluid" alt="" src="img/logo.png" />
      </a>
      {/* Navbar Search */}
      <form className="d-none d-md-inline-block form-inline ml-auto mr-0 mr-md-5 my-2 my-md-0 osahan-navbar-search">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for..."
          />
          <div className="input-group-append">
            <button className="btn btn-light" type="button">
              <i className="fas fa-search" />
            </button>
          </div>
        </div>
      </form>
      {/* Navbar */}
      <ul className="navbar-nav ml-auto ml-md-0 osahan-right-navbar">
        <li className="nav-item mx-1">
          <NavLink to="/UploadVideo" className="nav-link">
            <i className="fas fa-plus-circle fa-fw" />
            Upload Video
          </NavLink>
        </li>

        {/* <div className="dropdown-menu dropdown-menu-right" aria-labelledby="alertsDropdown1">
                <NavLink className="dropdown-item" to="/UploadVideo">
                  <i className="fas fa-fw fa-edit " /> &nbsp; Upload Video
                </NavLink>
                <NavLink className="dropdown-item" to="/UploadMusic">
                  <i className="fas fa-fw fa-headphones-alt " /> &nbsp; Upload Music action
                </NavLink>
              </div> */}

        <li className="nav-item dropdown no-arrow mx-1">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="alertsDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <i className="fas fa-bell fa-fw" />
            <span className="badge badge-danger">9+</span>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="alertsDropdown">
            <a className="dropdown-item" href="#">
              <i className="fas fa-fw fa-edit " /> &nbsp; Action
            </a>
            <a className="dropdown-item" href="#">
              <i className="fas fa-fw fa-headphones-alt " /> &nbsp; Another
              action
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              <i className="fas fa-fw fa-star " /> &nbsp; Something else here
            </a>
          </div>
        </li>
        <li className="nav-item dropdown no-arrow mx-1">
          <a
            className="nav-link dropdown-toggle"
            href="#"
            id="messagesDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <i className="fas fa-envelope fa-fw" />
            <span className="badge badge-success">7</span>
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="messagesDropdown">
            <a className="dropdown-item" href="#">
              <i className="fas fa-fw fa-edit " /> &nbsp; Action
            </a>
            <a className="dropdown-item" href="#">
              <i className="fas fa-fw fa-headphones-alt " /> &nbsp; Another
              action
            </a>
            <div className="dropdown-divider" />
            <a className="dropdown-item" href="#">
              <i className="fas fa-fw fa-star " /> &nbsp; Something else here
            </a>
          </div>
        </li>
        <li className="nav-item dropdown no-arrow osahan-right-navbar-user">
          <a
            className="nav-link dropdown-toggle user-dropdown-link"
            href="#"
            id="userDropdown"
            role="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            <img
              alt="Avatar"
              src={`http://103.104.74.215:3003/uploads/${currImage?.profile_image?.filename}`}
            />
            {userData.username}&nbsp;{" "}
          </a>
          <div
            className="dropdown-menu dropdown-menu-right"
            aria-labelledby="userDropdown">
            <NavLink to="Account" className="dropdown-item" href="account.html">
              <i className="fas fa-fw fa-user-circle" /> &nbsp; My Account
            </NavLink>
            <NavLink
              to="GetMychannel"
              className="dropdown-item"
              href="account.html">
              <i className="fas fa-fw fa-user-circle" /> &nbsp; GetMychannel
            </NavLink>
            {/* <NavLink to="Profile" className="dropdown-item" href="account.html">
              <i className="fas fa-fw fa-user-circle" /> &nbsp; Profile
            </NavLink> */}
            <NavLink
              to="GetProfile"
              className="dropdown-item"
              href="account.html">
              <i className="fas fa-fw fa-user-circle" /> &nbsp; GetProfile
            </NavLink>
            {/* <NavLink to="ProfileUpdate" className="dropdown-item" href="account.html">
              <i className="fas fa-fw fa-user-circle" /> &nbsp; ProfileUpdate
            </NavLink> */}
            <a className="dropdown-item" href="subscriptions.html">
              <i className="fas fa-fw fa-video" /> &nbsp; Subscriptions
            </a>
            <a className="dropdown-item" href="settings.html">
              <i className="fas fa-fw fa-cog" /> &nbsp; Settings
            </a>
            <div className="dropdown-divider" />
            {localStorage.getItem("_id") ? (
              <a
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
                onClick={logoutHandler}>
                <i className="fas fa-fw fa-sign-out-alt" /> &nbsp; Logout
              </a>
            ) : (
              <a
                className="dropdown-item"
                href="#"
                data-toggle="modal"
                data-target="#logoutModal"
                onClick={() => navigate("/Login")}>
                <i className="fas fa-fw fa-sign-out-alt" /> &nbsp; Login
              </a>
            )}
          </div>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
