import React from "react";
import { Link , NavLink} from 'react-router-dom'

function Blank() {
  return (

    <div id="wrapper">
    <ul className="sidebar navbar-nav">
      <li className="nav-item active">
        <a className="nav-link" href="index.html">
          <i className="fas fa-fw fa-home" />
          <span>Home</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="channels.html">
          <i className="fas fa-fw fa-users" />
          <span>Channels</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="single-channel.html">
          <i className="fas fa-fw fa-user-alt" />
          <span>Single Channel</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="video-page.html">
          <i className="fas fa-fw fa-video" />
          <span>Video Page</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="upload-video.html">
          <i className="fas fa-fw fa-cloud-upload-alt" />
          <span>Upload Video</span>
        </a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-fw fa-folder" />
          <span>Pages</span>
        </a>
        <div className="dropdown-menu">
          <h6 className="dropdown-header">Login Screens:</h6>
          <a className="dropdown-item" href="login.html">
            Login
          </a>
          <a className="dropdown-item" href="register.html">
            Register
          </a>
          <a className="dropdown-item" href="forgot-password.html">
            Forgot Password
          </a>
          <div className="dropdown-divider" />
          <h6 className="dropdown-header">Other Pages:</h6>
          <a className="dropdown-item" href="404.html">
            404 Page
          </a>
          <NavLink  to="Blank" className="dropdown-item">
            Blank Page
          </NavLink>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="history-page.html">
          <i className="fas fa-fw fa-history" />
          <span>History Page</span>
        </a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="categories.html" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i className="fas fa-fw fa-list-alt" />
          <span>Categories</span>
        </a>
        <div className="dropdown-menu">
          <a className="dropdown-item" href="categories.html">
            Movie
          </a>
          <a className="dropdown-item" href="categories.html">
            Music
          </a>
          <a className="dropdown-item" href="categories.html">
            Television
          </a>
        </div>
      </li>
      <li className="nav-item channel-sidebar-list">
        <h6>SUBSCRIPTIONS</h6>
        <ul>
          <li>
            <a href="subscriptions.html">
              <img className="img-fluid" alt src="img/s1.png" /> Your Life
            </a>
          </li>
          <li>
            <a href="subscriptions.html">
              <img className="img-fluid" alt src="img/s2.png" /> Unboxing <span className="badge badge-warning">2</span>
            </a>
          </li>
          <li>
            <a href="subscriptions.html">
              <img className="img-fluid" alt src="img/s3.png" /> Product / Service
            </a>
          </li>
          <li>
            <a href="subscriptions.html">
              <img className="img-fluid" alt src="img/s4.png" /> Gaming
            </a>
          </li>
        </ul>
      </li>
    </ul>
    <div id="content-wrapper">
      <div className="container-fluid">
        <div className="video-block section-padding">
          <div className="row">
            <div className="col-md-12">
              <div className="main-title">
                <div className="btn-group float-right right-action">
                  <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Sort by <i className="fa fa-caret-down" aria-hidden="true" />
                  </a>
                  <div className="dropdown-menu dropdown-menu-right">
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-fw fa-star" /> &nbsp; Top Rated
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-fw fa-signal" /> &nbsp; Viewed
                    </a>
                    <a className="dropdown-item" href="#">
                      <i className="fas fa-fw fa-times-circle" /> &nbsp; Close
                    </a>
                  </div>
                </div>
                <h6>Blank Page</h6>
              </div>
            </div>
            <div className="col-md-12">
              <button type="button" className="btn btn-primary border-none">
                Primary
              </button>
              <button type="button" className="btn btn-secondary border-none">
                Secondary
              </button>
              <button type="button" className="btn btn-success border-none">
                Success
              </button>
              <button type="button" className="btn btn-danger border-none">
                Danger
              </button>
              <button type="button" className="btn btn-warning border-none">
                Warning
              </button>
              <button type="button" className="btn btn-info border-none">
                Info
              </button>
              <button type="button" className="btn btn-light border-none">
                Light
              </button>
              <button type="button" className="btn btn-dark border-none">
                Dark
              </button>
              <button type="button" className="btn btn-link border-none">
                Link
              </button>
              <hr />
              <button type="button" className="btn btn-outline-primary">
                Primary
              </button>
              <button type="button" className="btn btn-outline-secondary">
                Secondary
              </button>
              <button type="button" className="btn btn-outline-success">
                Success
              </button>
              <button type="button" className="btn btn-outline-danger">
                Danger
              </button>
              <button type="button" className="btn btn-outline-warning">
                Warning
              </button>
              <button type="button" className="btn btn-outline-info">
                Info
              </button>
              <button type="button" className="btn btn-outline-light">
                Light
              </button>
              <button type="button" className="btn btn-outline-dark">
                Dark
              </button>
              <hr />
              <button type="button" className="btn btn-primary btn-lg border-none">
                Large button
              </button>
              <button type="button" className="btn btn-secondary btn-lg border-none">
                Large button
              </button>
              <hr />
              <button type="button" className="btn btn-primary btn-sm border-none">
                Small button
              </button>
              <button type="button" className="btn btn-secondary btn-sm border-none">
                Small button
              </button>
              <hr />
              <button type="button" className="btn btn-primary btn-lg btn-block border-none">
                Block level button
              </button>
              <button type="button" className="btn btn-secondary btn-lg btn-block border-none">
                Block level button
              </button>
              <hr />
              <div className="alert alert-primary" role="alert">
                A simple primary alert—check it out!
              </div>
              <div className="alert alert-secondary" role="alert">
                A simple secondary alert—check it out!
              </div>
              <div className="alert alert-success" role="alert">
                A simple success alert—check it out!
              </div>
              <div className="alert alert-danger" role="alert">
                A simple danger alert—check it out!
              </div>
              <div className="alert alert-warning" role="alert">
                A simple warning alert—check it out!
              </div>
              <div className="alert alert-info" role="alert">
                A simple info alert—check it out!
              </div>
              <div className="alert alert-light" role="alert">
                A simple light alert—check it out!
              </div>
              <div className="alert alert-dark mb-0" role="alert">
                A simple dark alert—check it out!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    


  )
}

export default Blank;

