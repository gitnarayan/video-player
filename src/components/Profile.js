// import React from "react";

// function Profile() {
//   return ( <div className="single-channel-page" id="content-wrapper">
//   <div className="single-channel-image">
//     <img className="img-fluid" alt src="img/channel-banner.png" />
//     <div className="channel-profile">
//       <img className="channel-profile-img" alt src="img/s2.png" />
//       <div className="social hidden-xs">
//         Social &nbsp;
//         <a className="fb" href="#">Facebook</a>
//         <a className="tw" href="#">Twitter</a>
//         <a className="gp" href="#">Google</a>
//       </div>
//     </div>
//   </div>
//   <div className="single-channel-nav">
//     <nav className="navbar navbar-expand-lg navbar-light">
//       <a className="channel-brand" href="#">Osahan Channel <span title data-placement="top" data-toggle="tooltip" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></span></a>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon" />
//       </button>
//       <div className="collapse navbar-collapse" id="navbarSupportedContent">
//         <ul className="navbar-nav mr-auto">
//           <li className="nav-item active">
//             <a className="nav-link" href="#">Videos <span className="sr-only">(current)</span></a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Playlist</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Channels</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">Discussion</a>
//           </li>
//           <li className="nav-item">
//             <a className="nav-link" href="#">About</a>
//           </li>
//           <li className="nav-item dropdown">
//             <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//               Donate
//             </a>
//             <div className="dropdown-menu" aria-labelledby="navbarDropdown">
//               <a className="dropdown-item" href="#">Action</a>
//               <a className="dropdown-item" href="#">Another action</a>
//               <div className="dropdown-divider" />
//               <a className="dropdown-item" href="#">Something else here</a>
//             </div>
//           </li>
//         </ul>
//         <form className="form-inline my-2 my-lg-0">
//           <input className="form-control form-control-sm mr-sm-1" type="search" placeholder="Search" aria-label="Search" /><button className="btn btn-outline-success btn-sm my-2 my-sm-0" type="submit"><i className="fas fa-search" /></button> &nbsp;&nbsp;&nbsp; <button className="btn btn-outline-danger btn-sm" type="button">Subscribe
//             <strong>1.4M</strong></button>
//         </form>
//       </div>
//     </nav>
//   </div>
//   <div className="container-fluid">
//     <div className="video-block section-padding">
//       <div className="row">
//         <div className="col-md-12">
//           <div className="main-title">
//             <div className="btn-group float-right right-action">
//               <a href="#" className="right-action-link text-gray" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//                 Sort by <i className="fa fa-caret-down" aria-hidden="true" />
//               </a>
//               <div className="dropdown-menu dropdown-menu-right">
//                 <a className="dropdown-item" href="#"><i className="fas fa-fw fa-star" /> &nbsp; Top
//                   Rated</a>
//                 <a className="dropdown-item" href="#"><i className="fas fa-fw fa-signal" /> &nbsp;
//                   Viewed</a>
//                 <a className="dropdown-item" href="#"><i className="fas fa-fw fa-times-circle" />
//                   &nbsp; Close</a>
//               </div>
//             </div>
//             <h6>Videos</h6>
//           </div>
//         </div>
//         <div className="col-xl-3 col-sm-6 mb-3">
//           <div className="video-card">
//             <div className="video-card-image">
//               <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
//               <a href="#"><img className="img-fluid" src="img/v1.png" alt /></a>
//               <div className="time">3:50</div>
//             </div>
//             <div className="video-card-body">
//               <div className="video-title">
//                 <a href="#">There are many variations of passages of Lorem</a>
//               </div>
//               <div className="video-page text-success">
//                 Education <a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></a>
//               </div>
//               <div className="video-view">
//                 1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-xl-3 col-sm-6 mb-3">
//           <div className="video-card">
//             <div className="video-card-image">
//               <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
//               <a href="#"><img className="img-fluid" src="img/v2.png" alt /></a>
//               <div className="time">3:50</div>
//             </div>
//             <div className="video-card-body">
//               <div className="video-title">
//                 <a href="#">There are many variations of passages of Lorem</a>
//               </div>
//               <div className="video-page text-success">
//                 Education <a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></a>
//               </div>
//               <div className="video-view">
//                 1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-xl-3 col-sm-6 mb-3">
//           <div className="video-card">
//             <div className="video-card-image">
//               <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
//               <a href="#"><img className="img-fluid" src="img/v3.png" alt /></a>
//               <div className="time">3:50</div>
//             </div>
//             <div className="video-card-body">
//               <div className="video-title">
//                 <a href="#">There are many variations of passages of Lorem</a>
//               </div>
//               <div className="video-page text-danger">
//                 Education <a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Unverified"><i className="fas fa-frown text-danger" /></a>
//               </div>
//               <div className="video-view">
//                 1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="col-xl-3 col-sm-6 mb-3">
//           <div className="video-card">
//             <div className="video-card-image">
//               <a className="play-icon" href="#"><i className="fas fa-play-circle" /></a>
//               <a href="#"><img className="img-fluid" src="img/v4.png" alt /></a>
//               <div className="time">3:50</div>
//             </div>
//             <div className="video-card-body">
//               <div className="video-title">
//                 <a href="#">There are many variations of passages of Lorem</a>
//               </div>
//               <div className="video-page text-success">
//                 Education <a title data-placement="top" data-toggle="tooltip" href="#" data-original-title="Verified"><i className="fas fa-check-circle text-success" /></a>
//               </div>
//               <div className="video-view">
//                 1.8M views &nbsp;<i className="fas fa-calendar-alt" /> 11 Months ago
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <nav aria-label="Page navigation example">
//         <ul className="pagination justify-content-center pagination-sm mb-0">
//           <li className="page-item disabled">
//             <a tabIndex={-1} href="#" className="page-link">Previous</a>
//           </li>
//           <li className="page-item active"><a href="#" className="page-link">1</a></li>
//           <li className="page-item"><a href="#" className="page-link">2</a></li>
//           <li className="page-item"><a href="#" className="page-link">3</a></li>
//           <li className="page-item">
//             <a href="#" className="page-link">Next</a>
//           </li>
//         </ul>
//       </nav>
//     </div>
//   </div>
// </div>);
// }

// export default Profile;


import React from 'react'

function Profile() {
  return (
<>

<footer className="sticky-footer">
  <div className="container">
    <div className="row no-gutters">


    <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
    Launch demo modal
  </button>
  <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">
          <p>  Line 310:41:  The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot provide a valid href, but still need the element to resemble a link, use a button and change it with appropriate styles. Learn more: https://github.com/jsx-eslint/eslint-plugin-jsx-a11y/blob/HEAD/docs/rules/anchor-is-valid.md  jsx-a11y/anchor-is-valid
</p>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary">Save changes</button>
        </div>
      </div>
    </div>
  </div>



     
    </div>
  </div>
</footer>


    {/* <div id='wrapper'>
      <div className='content-wrapper'>
         <div className="modal" tabIndex={-1}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Modal title</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body">
                <p>Modal body text goes here.</p>
                <img src="img/favicon.png" className="img-fluid" alt="LOGO" />

                 
               </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Update Profile Picture</button>
              </div>
            </div>
          </div>
        </div> 

<div>


</div>
 </div>  
 </div>  */}
</>

  )
}
export default Profile
