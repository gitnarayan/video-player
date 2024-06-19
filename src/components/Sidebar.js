import React from "react";
import { Link , NavLink} from 'react-router-dom'

const Sidebar = ()=>{
  return (
    <div id="wrapper"> 

  <ul className="sidebar navbar-nav">
    <li className="nav-item active">
      <NavLink to="/" className="nav-link" >
        <i className="fas fa-fw fa-home" />
        <span>Home</span>
      </NavLink>
    </li>
    <li className="nav-item ">
      <NavLink to="/FeaturesAudio" className="nav-link" >
        <i className="fas fa-fw fa-home" />
        <span>FeaturesAudio</span>
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink  to="/Channels" className="nav-link">
        <i className="fas fa-fw fa-users" />
        <span>Channels</span>
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink  to="/SingleChannel" className="nav-link" >
        <i className="fas fa-fw fa-user-alt" />
        <span>Single Channel</span>
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/VideoPages" className="nav-link" >
        <i className="fas fa-fw fa-video" />
        <span>Video Page</span>
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/MusicPage" className="nav-link" >
        <i className="fas fa-fw fa-music" />
        <span>Music Page</span>
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/UploadVideo" className="nav-link">
        <i className="fas fa-fw fa-cloud-upload-alt" />
        <span>Upload Video</span>
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/UploadMusic" className="nav-link">
        <i className="fas fa-fw fa-cloud-upload-alt" />
        <span>Upload Music</span>
      </NavLink>
    </li>
    <li className="nav-item">
      <NavLink to="/CreateChannel" className="nav-link">
        <i className="fas fa-fw fa-cloud-upload-alt" />
        <span>CreateChannel</span>
      </NavLink>
    </li>
    <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-fw fa-folder" />
        <span>Pages</span>
      </a>
      <div className="dropdown-menu">
        <h6 className="dropdown-header">Login Screens:</h6>
        <NavLink to="Login" className="dropdown-item">Login</NavLink>
        <NavLink  to="Register"className="dropdown-item">Register</NavLink>
        <NavLink  to="ForgotPassword" className="dropdown-item">Forgot Password</NavLink>
        <div className="dropdown-divider" />
        <h6 className="dropdown-header">Other Pages:</h6>
        <NavLink to="Error" className="dropdown-item" >Error</NavLink>
        <NavLink to="Blank" className="dropdown-item" >Blank Page</NavLink>
      </div>
    </li>
    <li className="nav-item">
      <NavLink  to="History" className="nav-link" >
        <i className="fas fa-fw fa-history" />
        <span>History Page</span>
      </NavLink>
    </li>
    <li className="nav-item dropdown">
      <NavLink to="category" className="nav-link dropdown-toggle"  role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-fw fa-list-alt" />
        <span>Categories</span>
      </NavLink>
      <div className="dropdown-menu">
        <NavLink to="Movies"className="dropdown-item" href="categories.html">Movie</NavLink>
        <NavLink to="Movies"className="dropdown-item" href="categories.html">Music</NavLink>
        <NavLink to="Movies" className="dropdown-item" href="categories.html">Television</NavLink>
      </div>
    </li>
    <li className="nav-item channel-sidebar-list">
      <h6>SUBSCRIPTIONS</h6>
      <ul>
        <li>
          <NavLink to="YourLife ">
            <img className="img-fluid" alt src="img/s1.png" /> YourLife 
          </NavLink>
        </li>
        <li>
          <NavLink to="YourLife">
            <img className="img-fluid" alt src="img/s2.png" /> Unboxing  <span className="badge badge-warning">2</span>
          </NavLink>
        </li>
        <li>
          <NavLink to="YourLife">
            <img className="img-fluid" alt src="img/s3.png" /> Product / Service  
          </NavLink>
        </li>
        <li>
          <NavLink to="YourLife">
            <img className="img-fluid" alt src="img/s4.png" />  Gaming 
          </NavLink>
        </li>
      </ul>
    </li>
  </ul>     
</div>
  )

}
export default Sidebar;



