import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import FeaturesAudio from "./FeaturesAudio";

function GetMychannel() {
  const [channelData, setchannelData] = useState([]);
  const [channelVideoData, setchannelVideoData] = useState([]);
  const [channelMusicData, setchannelMusicData] = useState([]);
  const [clickedVideoOption, isclickedVideoOption] = useState([]);

  const navigation = useNavigate();
  let id = localStorage.getItem("_id");
  const userID = {
    user_id: id,
  };

  useEffect(() => {
    axios
      .post("http://103.104.74.215:3003/api/get_my_channel", userID)
      .then((response) => {
        console.log(response.data.data);
        localStorage.setItem("channel_id", response.data.data[0]._id);
        localStorage.setItem( "channel_name", response.data.data[0].channel_name);
        setchannelData(response.data.data);
      })

      .catch((error) => console.log("Error in fetching the data"));
    getChannelVideoData();
    //  getChannelMusicData(userID);
  }, [0]);

  const getChannelVideoData = () => {
    let channelID = localStorage.getItem("channel_id");
    let channelVideoData = {
      user_id: localStorage.getItem("_id"),
      channel_id: channelID,
    };
    axios
      .post(
        "http://103.104.74.215:3003/api/get_my_channel_video",
        channelVideoData
      )
      .then((response) => {
        console.log(response.data.data);
        setchannelVideoData(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  // const handleClicked = () => {
  //   isclickedVideoOption(!clickedVideoOption);
  // };

  const handleVideoPlay = (videoId) => {
    localStorage.setItem("videoId", videoId);
    navigation("/VideoPages");
  };

  const handleVideoDelete = (videoId) => {
    const videoObject = {
      video_id: videoId,
      user_id: id,
    };

    axios
      .post("http://103.104.74.215:3003/api/delete_my_video", videoObject)
      .then((response) => {
        console.log(response);
        getChannelVideoData();
      })
      .catch((error) => console.log("error in delete try again: ", error));
  };

  return (
    <div>
      <div className="single-channel-page" id="content-wrapper">
        {/* banner, profileImage, socialMedia */}
        <div className="single-channel-image">
          <img
            className="img-fluid"
            alt
            src={`http://103.104.74.215:3003/${channelData[0]?.image[0]?.path}`}
            style={{ height: "20rem", cursor: "pointer" }}
          />
          <div className="channel-profile">
            <img
              className="channel-profile-img"
              alt
              src={`http://103.104.74.215:3003/uploads/${channelData[0]?.image[1]?.filename}`}
              style={{ cursor: "pointer" }}
            />
            <div className="social hidden-xs">
              Social &nbsp;
              <a className="fb" href="#">
                Facebook
              </a>
              <a className="tw" href="#">
                Twitter
              </a>
              <a className="gp" href="#">
                Google
              </a>
            </div>
          </div>
        </div>

        {/* channelName, vedios, music, etc */}
        <div className="single-channel-nav">
          <a className="channel-brand" href="#">
            {channelData[0]?.channel_name
              ? channelData[0].channel_name
              : "My Channel"}
            {""}
            <span
              title
              data-placement="top"
              data-toggle="tooltip"
              data-original-title="Verified">
              <i className="fas fa-check-circle text-success" />
            </span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>

          <Tabs className={"mt-2"}>
            <form className="form-inline my-2 my-lg-0">
              <input
                className="form-control form-control-sm mr-sm-1"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success btn-sm my-2 my-sm-0"
                type="submit">
                <i className="fas fa-search" />
              </button>{" "}
              &nbsp;&nbsp;&nbsp;{" "}
              <button className="btn btn-outline-danger btn-sm" type="button">
                Subscribe
                <strong>1.4M</strong>
              </button>
            </form>
            <TabList>
              <Tab>Videos </Tab>
              <Tab>Playlist</Tab>
              <Tab>Channels</Tab>
              <Tab>Music</Tab>
              <Tab>About</Tab>
            </TabList>

            <TabPanel>
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
                            <i
                              className="fa fa-caret-down"
                              aria-hidden="true"
                            />
                          </a>
                          <div className="dropdown-menu dropdown-menu-right">
                            <a className="dropdown-item" href="#">
                              <i className="fas fa-fw fa-star" /> &nbsp; Top
                              Rated
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fas fa-fw fa-signal" /> &nbsp;
                              Viewed
                            </a>
                            <a className="dropdown-item" href="#">
                              <i className="fas fa-fw fa-times-circle" />
                              &nbsp; Close
                            </a>
                          </div>
                        </div>
                        <h6>Videos</h6>
                      </div>
                    </div>
                    {/* this is vedio category */}

                    {channelVideoData &&
                      channelVideoData.map((data, index) => (
                        <div className="col-xl-3 col-sm-6 mb-3">
                          <div className="video-card">
                            <div
                              className="video-card-image"
                              onClick={() => handleVideoPlay(data._id)}>
                              <a className="play-icon" href="#">
                                <i className="fas fa-play-circle" />
                              </a>
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src={`http://103.104.74.215:3003/uploads/${data?.video[1]?.filename}`}
                                  alt
                                />
                              </a>
                              <div className="time">3:50</div>
                            </div>
                            <div className="video-card-body">
                              <div className="video-title">
                                <a href="#">{data?.video_name}</a>
                              </div>
                              <div className="video-page text-success">
                                Education{" "}
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
                                1.8M views &nbsp;
                                <i className="fas fa-calendar-alt" /> 11 Months
                                ago
                              </div>
                              <div className="d-flex justify-content-between">
                                <div>
                                  <button
                                    type="button"
                                    className="btn btn-danger mt-2 btn-sm"
                                    onClick={() => handleVideoDelete(data._id)}>
                                    delete
                                  </button>
                                </div>
                                <div className="mt-3">
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
                                      <a
                                        className="dropdown-item text-dark"
                                        href="#">
                                        <i className="fa-solid fa-bars-staggered" />
                                        &nbsp;&nbsp;Add to queue
                                      </a>
                                      <a
                                        className="dropdown-item text-dark"
                                        href="#">
                                        <i className="fa-regular fa-clock" />
                                        &nbsp;&nbsp;Save to Watch Later
                                      </a>
                                      <a
                                        className="dropdown-item text-dark"
                                        href="#">
                                        <i className="fa-solid fa-list-ol" />{" "}
                                        &nbsp;&nbsp;Save to Playlist
                                      </a>
                                      <a
                                        className="dropdown-item text-dark"
                                        href="#">
                                        <i className="fa-solid fa-arrow-down" />
                                        &nbsp;&nbsp; Download
                                      </a>
                                      <a
                                        className="dropdown-item text-dark"
                                        href="#">
                                        <i className="fa-solid fa-share" />
                                        &nbsp;&nbsp;Share
                                      </a>
                                    </div>
                                  </div>
                                  {/* <BsThreeDotsVertical /> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                  <nav aria-label="Page navigation example">
                    <ul className="pagination justify-content-center pagination-sm mb-0">
                      <li className="page-item disabled">
                        <a tabIndex={-1} href="#" className="page-link">
                          Previous
                        </a>
                      </li>
                      <li className="page-item active">
                        <a href="#" className="page-link">
                          1
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          2
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          3
                        </a>
                      </li>
                      <li className="page-item">
                        <a href="#" className="page-link">
                          Next
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <FeaturesAudio />
            </TabPanel>
            <TabPanel>{/* <Channels />  */}</TabPanel>
            <TabPanel>
              <h2>PlayLists</h2>
            </TabPanel>
            <TabPanel>
              <h2>About</h2>
            </TabPanel>
          </Tabs>
         
        </div>
      </div>
    </div>
  );
}

export default GetMychannel;
