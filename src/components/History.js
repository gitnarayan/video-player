import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function History() {
  const [videoList, setVideoList] = useState([]);
  const navigate = useNavigate();

  let userId = localStorage.getItem("_id");

  let data = {
    user_id: userId,
  };

  useEffect(() => {
    axios
      .post("http://103.104.74.215:3003/api/get_history", data)
      .then((response) => {
        setVideoList(response.data.data);
      })
      .catch((error) => {
        console.log(`Error: ${error}`);
      });
  }, [0]);
  console.log(videoList);

  function handlePlayVedio(videoId) {
    localStorage.setItem("videoId", videoId);
    navigate("/VideoPages");
  }

  function handleDeleteVideo(VideoId) {
    const videoDelete = {
      user_id: userId,
      video_id: VideoId,
    };

    axios
      .post("http://103.104.74.215:3003/api/delete_history", videoDelete)
      .then((response) => {
        console.log(response);
        toast.success(response.data.msg);
      })
      .catch((error) => {
        console.log(`Error History video is not deleted ${error}`);
        toast.error("your video not delete");
      });
  }

  return (
    <div id="wrapper">
      <div>
        <div id="content-wrapper">
          <div className="container-fluid">
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
                    <h6>Watch History</h6>
                  </div>
                </div>

                {/* list of History videos */}

                {videoList.map((object, index) => {
                  return (
                    <div className="col-xl-3 col-sm-6 mb-3">
                      <div className="video-card history-video">
                        <div
                          className="video-card-image"
                          onClick={() => handlePlayVedio(object?.video_id)}
                          style={{ height: "135px" }}>
                          <a className="video-close" href="#">
                            <i className="fas fa-times-circle" />
                          </a>
                          <a
                            className="play-icon"
                            href="#">
                            <i className="fas fa-play-circle" />
                          </a>

                          <a href="#">
                            {object?.data[0]?.video[1]?.filename ?(
                            <img
                            
                              className="img-fluid"
                              src={`http://103.104.74.215:3003/uploads/${object?.data[0]?.video[1]?.filename}`}
                              alt=""
                              style={{
                                width: "100%",
                                height: "10rem",
                                borderRadius: "",
                              }}
                              />

                            ):( <img
                              className="img-fluid"
                              src="https://www.electronicshub.org/wp-content/uploads/2021/09/YOUTUBE-THUMBNIL-NOT-SHOWING.jpg"
                              alt
                              style={{ width: "100%", height: "10rem" }}
                            />
                            )}
                            
                          </a>
                          {/* <div className="time">3:50</div> */}
                        </div>
                        {/* <div className="progress">
                          <div
                            className="progress-bar"
                            role="progressbar"
                            style={{ width: "50%" }}
                            aria-valuenow={50}
                            aria-valuemin={0}
                            aria-valuemax={100}>
                            1:40
                          </div>
                        </div> */}
                        <div className="video-card-body">
                          <div className="video-title d-flex align-items-center justify-content-between ">
                            <a href="#" style={{ width: "170px" }}>
                              {object?.data[0]?.video_name}
                            </a>
                            <div className="dropdown myDropdown ">
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
                                <a
                                  className="dropdown-item text-dark"
                                  href="#"
                                  onClick={() =>
                                    handleDeleteVideo(object?.video_id)
                                  }>
                                  <i class="fa fa-trash" aria-hidden="true"></i>
                                  &nbsp;&nbsp;Delete
                                </a>
                              </div>
                            </div>
                          </div>

                          <div className="video-page text-success">
                            {object?.data[0]?.channel_name}
                            <a
                              title
                              data-placement="top"
                              data-toggle="tooltip"
                              href="#"
                              data-original-title="Verified">
                              <i className="fas fa-check-circle text-success" />
                            </a>
                          </div>
                          <div className="video-view">
                          <i className="fas fa-eye" />
                            {object.data[0].video_views}M &nbsp;
                            <i className="fas fa-calendar-alt" /> 11 Months ago
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center pagination-sm mb-0">
                  <li className="page-item disabled">
                    <a className="page-link" href="#" tabIndex={-1}>
                      Previous
                    </a>
                  </li>
                  <li className="page-item active">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      Next
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default History;
