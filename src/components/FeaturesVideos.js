import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

const FeaturesVideos = () => {
  const [vedioList, setVedioList] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://103.104.74.215:3003/api/get_top_video")
      .then((response) => {
        console.log(response.data.data);
        setVedioList(response.data.data);
      })
      .catch((error) => console.log("Error: ${error}"));
  }, [0]); 

 useEffect(()=>{

  axios
  .post("http://103.104.74.215:3003/api/get_latest_video")
  .then((response) => {
    console.log(response.data.data);
    setVedioList(response.data.data);
  })
  .catch((error) => console.log("Error: ${error}"));

 } ,[0])
 

  function handlePlayVideo(videoId) {
    localStorage.setItem("videoId", videoId);
    navigate("/VideoPages");
  }

  function getSingleChannelbyId(channel_id){
    localStorage.setItem('singlechannel_id',channel_id)
    navigate('/SingleChannel')
  }

  return (
    <>
      <ToastContainer />
      <div id="wrapper">
        <div id="content-wrapper">
          <div className="container-fluid pb-0">
            <hr />
            <div className="video-block section-padding">
              <div className="row">
                <div className="col-md-12">
                  <div className="main-title">
                    <div className="btn-group float-right right-action">
                      <a
                        href="#"
                        className="right-action-link text-gray"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false">
                        Sort by{" "}
                        <i className="fa fa-caret-down" aria-hidden="true" />
                      </a>
                      <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                          <i className="fas fa-fw fa-star" /> &nbsp; Top Rated
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fas fa-fw fa-signal" /> &nbsp; Viewed
                        </a>
                        <a className="dropdown-item" href="#">
                          <i className="fas fa-fw fa-times-circle" /> &nbsp;
                          Close
                        </a>
                      </div>
                    </div>
                    <h6>Featured Videos</h6>
                  </div>
                </div>
                {/*List of Vedios */}
                {vedioList.map((object) => (
                  <div className="col-xl-3 col-sm-6 mb-3">
                    <div className="video-card history-video shadow rounded">
                      <div
                        className="video-card-image"
                        onClick={() => handlePlayVideo(object?._id)}
                        style={{ height: "135px" }}>
                        <a className="play-icon" href="#">
                          <i className="fas fa-play-circle" />
                        </a>
                        <a href="#">
                          {object?.video[1]?.filename ? (
                            <img
                              className="img-fluid"
                              src={`http://103.104.74.215:3003/uploads/${object?.video[1]?.filename}`}
                              alt
                              style={{
                                width: "100%",
                                height: "10rem",
                                borderRadius: "",
                              }}
                            />
                          ) : (
                            <img
                              className="img-fluid"
                              src="https://www.electronicshub.org/wp-content/uploads/2021/09/YOUTUBE-THUMBNIL-NOT-SHOWING.jpg"
                              alt
                              style={{ width: "100%", height: "10rem" }}
                            />
                          )}
                        </a>
                        <div className="time">3:50</div>
                      </div>
                      <div className="video-card-body">
                        <div className="video-title d-flex align-items-center justify-content-between ">
                          <a href="#" style={{ width: "170px" }}>
                            {object.video_name}
                          </a>

                          <div className="dropdown myDropdown">
                            <a
                              href="#"
                              role="button"
                              id="dropdownMenuLink"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false">
                              <img
                                className="threedot"
                                src="img/threedot.svg"
                                alt=""
                              />
                            </a>
                            <div
                              className="dropdown-menu shadow rounded"
                              aria-labelledby="dropdownMenuLink">
                              <a className="dropdown-item text-dark" href="#">
                                <i className="fa-solid fa-bars-staggered" />
                                &nbsp;&nbsp;Add to queue
                              </a>
                              <a className="dropdown-item text-dark" href="#">
                                <i className="fa-regular fa-clock" />
                                &nbsp;&nbsp;Save to Watch Later
                              </a>
                              <a className="dropdown-item text-dark" href="#">
                                <i className="fa-solid fa-list-ol" />{" "}
                                &nbsp;&nbsp;Save to Playlist
                              </a>
                              <a className="dropdown-item text-dark" href="#">
                                <i className="fa-solid fa-arrow-down" />
                                &nbsp;&nbsp; Download
                              </a>
                              <a className="dropdown-item text-dark" href="#">
                                <i className="fa-solid fa-share" />
                                &nbsp;&nbsp;Share
                              </a>
                              <a className="dropdown-item text-dark" href="#">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                                &nbsp;&nbsp;Delete
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="video-page text-success" style={{}}>
                          <a href="" 
                          onClick={()=> getSingleChannelbyId(object.channel_id)}
                          >
                            {object.channel_name}</a>{" "}
                          <a
                            title
                            data-placement="top"
                            data-toggle="tooltip"
                            href="#"
                            data-original-title="Verified">
                            <i className="fas fa-check-circle text-success" />
                          </a>
                        </div>
                        <div className="video-view" style={{}}>
                          <img
                            style={{ width: "17px" }}
                            src="img/view.png"
                            alt=""
                          />
                          <i className="fas fa-eye" />
                          <span className="">{object.video_views}M</span>
                          &nbsp;
                          <i className="fas fa-calendar-alt" /> 11 Months ago
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default FeaturesVideos;
