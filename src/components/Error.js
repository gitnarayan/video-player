import React from "react";

function Error() {
  return  (
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
        <a className="dropdown-item" href="login.html">Login</a>
        <a className="dropdown-item" href="register.html">Register</a>
        <a className="dropdown-item" href="forgot-password.html">Forgot Password</a>
        <div className="dropdown-divider" />
        <h6 className="dropdown-header">Other Pages:</h6>
        <a className="dropdown-item" href="404.html">404 Page</a>
        <a className="dropdown-item" href="blank.html">Blank Page</a>
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
        <a className="dropdown-item" href="categories.html">Movie</a>
        <a className="dropdown-item" href="categories.html">Music</a>
        <a className="dropdown-item" href="categories.html">Television</a>
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
            <img className="img-fluid" alt src="img/s2.png" /> Unboxing  <span className="badge badge-warning">2</span>
          </a>
        </li>
        <li>
          <a href="subscriptions.html">
            <img className="img-fluid" alt src="img/s3.png" /> Product / Service  
          </a>
        </li>
        <li>
          <a href="subscriptions.html">
            <img className="img-fluid" alt src="img/s4.png" />  Gaming 
          </a>
        </li>
      </ul>
    </li>
  </ul>
  <div id="content-wrapper">
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-8 mx-auto text-center  pt-4 pb-5">
          <h1><img alt={404} src="img/404.png" className="img-fluid" /></h1>
          <h1>Sorry! Page not found.</h1>
          <p className="land">Unfortunately the page you are looking for has been moved or deleted.</p>
          <div className="mt-5">
            <a className="btn btn-outline-primary" href="index.html"><i className="mdi mdi-home" /> GO TO HOME PAGE</a>
          </div>
        </div>
      </div>
    </div>
    {/* /.container-fluid */}
    {/* Sticky Footer */}
    {/* <footer className="sticky-footer">
      <div className="container">
        <div className="row no-gutters">
          <div className="col-lg-6 col-sm-6">
            <p className="mt-1 mb-0"><strong className="text-dark">Vidoe</strong>. 
              <small className="mt-0 mb-0"><a className="text-primary" target="_blank" href="https://templatespoint.net/">TemplatesPoint</a>
              </small>
            </p>
          </div>
          <div className="col-lg-6 col-sm-6 text-right">
            <div className="app">
              <a href="#"><img alt src="img/google.png" /></a>
              <a href="#"><img alt src="img/apple.png" /></a>
            </div>
          </div>
        </div>
      </div>
    </footer> */}
  </div>
</div>


)
}

export default Error;
