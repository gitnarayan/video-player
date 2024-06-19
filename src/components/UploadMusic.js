import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function UploadMusic() {
  const [musicTitle, setMusicTitle] = useState("");
  const [musicThumbnail, setMusicThumbnail] = useState("");
  const [musicFile, setMusicFile] = useState("");
  const [timeZone, setTimeZone] = useState("");
  const navigate = useNavigate();
  console.log("musicThumbnail", musicThumbnail, musicFile);
  useEffect(() => {
    const currentTime = new Date();
    const formattedTime = currentTime.toISOString();
    setTimeZone(formattedTime);
  }, [0]);

  const handleMusicSubmit = (event) => {
    event.preventDefault();
    let id = localStorage.getItem("_id");
    let channelID = localStorage.getItem("channel_id");
    const formMusicData = new FormData();

    formMusicData.append("user_id", id);
    formMusicData.append("channel_id", channelID);
    formMusicData.append("music_title", musicTitle);
    formMusicData.append("music_file", musicFile);
    formMusicData.append("music_thumbnail", musicThumbnail);
    formMusicData.append("time_zone", timeZone);

    axios
      .post("http://103.104.74.215:3003/api/upload_music", formMusicData)
      .then((response) => {
        console.log(response);
        if (response.data.result === "false") {
          toast.error(response.data.msg);
        } else {
          toast.success(response.data.msg);
          navigate("/MusicPlay");
        }
      })
      .catch((error) => {
        console.error("Error uploading music:", error);
        // Handle error if needed
      });

    setMusicTitle("");
    setMusicThumbnail("");
    setMusicFile("");
    setTimeZone("");
  };

  return (
    <>
      <ToastContainer />
      <div id="wrapper">
        <div id="content-wrapper">
          <div className="container-fluid upload-details">
            <form onSubmit={handleMusicSubmit}>
              <div className="row">
                <div className="col-lg-12">
                  <div className="main-title">
                    <h6>Music Upload</h6>
                  </div>
                </div>
                <div className="col-lg-2">
                  <div className="imgplace" />
                </div>
                <div className="col-lg-10">
                  <div className="osahan-title">Contrary to popular belief, Lorem Ipsum (2020) is not.</div>
                  <div className="osahan-size">102.6 MB . 2:13 MIN Remaining</div>
                  <div className="osahan-progress">
                    <div className="progress">
                      <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100} style={{ width: "75%" }} />
                    </div>
                    <div className="osahan-close">
                      <a href="#">
                        <i className="fas fa-times-circle" />
                      </a>
                    </div>
                  </div>
                  <div className="osahan-desc">Your Video is still uploading, please keep this page open until it's done.</div>
                </div>
              </div>
              <hr />
              <div className="row">
                <div className="col-lg-12">
                  <div className="osahan-form">
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="e3">Music File</label>
                          <input type="file" placeholder="music file" className="form-control" accept=".mp3, audio/*" required onChange={(event) => setMusicFile(event.target.files[0])} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="e5">Title</label>
                          <input type="text" placeholder="Title" className="form-control" required value={musicTitle} onChange={(event) => setMusicTitle(event.target.value)} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <label htmlFor="e1">Thumbnail</label>
                          <input type="file" placeholder="Choose File Here..." id="e1" required className="form-control" onChange={(event) => setMusicThumbnail(event.target.files[0])} />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <label htmlFor="timeZone">Current Timezone</label>
                        <div className="custom-file">
                          <input type="text" id="timeZone" placeholder="2024-03-12T13:59:51.183Z" required className="form-control" value={timeZone} readOnly />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="osahan-area text-center mt-3">
                    <button className="btn btn-primary" type="submit" style={{ background: "#000080", borderRadius: 4 }}>
                      Upload{" "}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
