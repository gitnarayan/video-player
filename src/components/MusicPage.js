import React, { useEffect, useState } from "react";
import axios from "axios";
import ReactPlayer from "react-player";

function MusicPage() {
  const [currAudioData, setCurrAudioData] = useState(null);
  const [upComingAudio, setUpComingAudio] = useState([]);
  const [audioData, setAudioData] = useState([]);

  let musicID = localStorage.getItem("musicId");

  useEffect(() => {
    handleMusicID(musicID);
    axios
      .get("http://103.104.74.215:3003/api/get_music")
      .then((response) => {
        // console.log("second api data", response.data.data);
        setUpComingAudio(response.data.data);
      })
      .catch((error) => console.log(`Error: ${error}`));
  }, [musicID]);

  const handleMusicID = (id) => {
    let data = {
      _id: id,
    };
    axios
      .post("http://103.104.74.215:3003/api/get_single_music", data)
      .then((response) => {
        // console.log("resteee",response);
        setCurrAudioData(response.data.data);
      })
      .catch((error) => console.log("RequestedVideoNotFound", error));
  };

  useEffect(() => {
    musicview();
  }, [0]);

  const musicview = () => {
    let musicId = localStorage.getItem("musicId");
    let userid = localStorage.getItem("_id");
    let viewdata = {
      audio_id: musicId,
      user_id: userid,
    };
    console.log("ressss", viewdata);
    axios
      .post("http://103.104.74.215:3003/api/audio_views", viewdata)
      .then((response) => {
        setAudioData(response.data.data);
      })
      .catch((error) => {});
  };

  return (
    <div id="wrapper">
      <div id="content-wrapper">
        <div className="container-fluid pb-0">
          <div className="video-block section-padding">
            <div className="row">
              <div className="col-md-8">
                <div className="single-video-left">
                  <div className="single-video">
                    <img
                      height={300}
                      width={700}
                      src={`http://103.104.74.215:3003/uploads/${currAudioData?.music[1]?.filename}`}
                    />
                    <ReactPlayer
                      url={`http://103.104.74.215:3003/uploads/${currAudioData?.music[0]?.filename}`}
                      width="100%"
                      height={30}
                      controls={true}
                      playing={true}
                    />
                  </div>

                  <div className="single-video-title box mb-3">
                    <h2>
                      <a href="#">{currAudioData?.audio_name}</a>
                    </h2>
                    <p className="mb-0">
                      <i className="fas fa-eye" />
                      {/* {currAudioData?.audio_views
                        ? {currAudioData?.audio_views}M
                        : "Maaa"}{" "}  */}
                      {currAudioData?.audio_views} views
                    </p>
                  </div>
                  <div className="single-video-author box mb-3">
                    <div className="float-right">
                      <button className="btn btn-danger" type="button">
                        Subscribe <strong>1.4M</strong>
                      </button>{" "}
                      <button
                        className="btn btn btn-outline-danger"
                        type="button">
                        <i className="fas fa-bell" />
                      </button>
                    </div>
                    <img
                      className="img-fluid"
                      style={{
                        width: "2rem",
                        height: "2rem",
                        borderRadius: "30px",
                      }}
                      // src={
                      //   currAudioData?.channel_data[0]?.image[1]?.filename
                      //     ? `http://103.104.74.215:3003/uploads/${currAudioData?.channel_data[0]?.image[1]?.filename}`
                      //     : "img/s4.png"
                      // }
                      alt
                    />
                    <p>
                      <a href="#">
                        {" "}
                        <strong>
                          {currAudioData?.channel_name
                            ? `${currAudioData?.channel_name}`
                            : "My Channel"}
                        </strong>
                      </a>{" "}
                      <span
                        title
                        data-placement="top"
                        data-toggle="tooltip"
                        data-original-title="Verified">
                        <i className="fas fa-check-circle text-success" />
                      </span>
                    </p>
                    <small>
                      {" "}
                      Published on{" "}
                      {currAudioData?.current_date
                        ? `${currAudioData?.current_date}`
                        : "Aug 10, 2020"}
                    </small>
                  </div>
                  <div className="single-video-info-content box mb-3">
                    <h6>Cast:</h6>
                    <p>
                      Nathan Drake , Victor Sullivan , Sam Drake , Elena Fisher
                    </p>

                    <h6>Category :</h6>
                    <p>Gaming , PS4 Exclusive , Gameplay , 1080p</p>
                    <h6>About :</h6>
                    <p>
                      It is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout. The point of using Lorem Ipsum is that it
                      has a more-or-less normal distribution of letters, as
                      opposed to using 'Content here, content here', making it
                      look like readable English. Many desktop publishing
                      packages and web page editors now use Lorem Ipsum as their
                      default model text, and a search for 'lorem ipsum' will
                      uncover many web sites still in their infancy. Various
                      versions have evolved overVarious versions have evolved
                      over the years, sometimes{" "}
                    </p>
                    <h6>Tags :</h6>
                    <p className="tags mb-0">
                      <span>
                        <a href="#">Uncharted 4</a>
                      </span>
                      <span>
                        <a href="#">Playstation 4</a>
                      </span>
                      <span>
                        <a href="#">Gameplay</a>
                      </span>
                      <span>
                        <a href="#">1080P</a>
                      </span>
                      <span>
                        <a href="#">ps4Share</a>
                      </span>
                      <span>
                        <a href="#">+ 6</a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="col-md-4">
                <div className="single-video-right">
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
                              <i className="fas fa-fw fa-times-circle" /> &nbsp;
                              Close
                            </a>
                          </div>
                        </div>

                        <h6>Up Next</h6>
                      </div>
                    </div>

                    {/* List of music  */}
                    <div
                      className="col-md-12"
                      style={{
                        maxHeight: "50rem",
                        overflowY: "auto",
                        scrollbarWidth: "thin",
                      }}>
                      {upComingAudio.map((data, index) =>
                        data?.music ? (
                          <div
                            className="video-card video-card-list"
                            key={index}>
                            <div
                              className="video-card-image"
                              onClick={() => handleMusicID(data._id)}>
                              <a className="play-icon" href="#">
                                <i className="fas fa-play-circle" />
                              </a>
                              <a href="#">
                                <img
                                  className="img-fluid"
                                  src={`http://103.104.74.215:3003/uploads/${data?.music[1]?.filename}`}
                                  alt=""
                                />
                              </a>
                              <div className="time">3:50</div>
                            </div>

                            <div className="video-card-body">
                              <div className="btn-group float-right right-action">
                                <a
                                  href="#"
                                  className="right-action-link text-gray"
                                  data-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false">
                                  <i
                                    className="fa fa-ellipsis-v"
                                    aria-hidden="true"
                                  />
                                </a>
                                <div className="dropdown-menu dropdown-menu-right">
                                  <a className="dropdown-item" href="#">
                                    <i className="fas fa-fw fa-star" /> &nbsp;
                                    Top Rated
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="fas fa-fw fa-signal" /> &nbsp;
                                    Viewed
                                  </a>
                                  <a className="dropdown-item" href="#">
                                    <i className="fas fa-fw fa-times-circle" />{" "}
                                    &nbsp; Close
                                  </a>
                                </div>
                              </div>
                              <div className="video-title">
                                <a href="#">{data?.music_title}</a>
                              </div>
                              <div className="video-page text-success">
                                {data?.data[1]?.channel_name}
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
                                {data?.audio_views}M &nbsp;
                                <i className="fas fa-calendar-alt" />{" "}
                                {data?.data[0]?.current_date
                                  ? `${data?.data[0]?.current_date}`
                                  : "Aug 10, 2020"}
                              </div>
                            </div>
                          </div>
                        ) : (
                          ""
                        )
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MusicPage;
