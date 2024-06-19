import axios from "axios";
import { useEffect, useRef, useState } from "react";

export default function ProfilePage() {
  const reference = useRef(null);
  const [currImage, setCurrImage] = useState(null);
  function handleUpdateImage() {
    reference.current.click();
  }
  const handleInputFile = (event) => {
    const id = localStorage.getItem("_id");
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("_id", id);
    formData.append("profile_image", file);
    if (id && file) {
      axios
        .post("http://103.104.74.215:3003/api/upload_user_image", formData)
        .then((response) => getData())
        .catch((error) => console.log(`Error: ${error}`));
    } else {
      alert("error in uploading");
    }
  };
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    const id = localStorage.getItem("_id");
    const userID = {
      _id: id,
    };
    axios
      .post("http://103.104.74.215:3003/api/view_profile", userID)
      .then((response) => {
        console.log(response);
        setCurrImage(response.data.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div id="wrapper">
      <div id="content-wrapper">
        <div className="container-fluid pb-0">
          <section style={{ backgroundColor: "#f4f5f7" }}>
            <div className="container py-5 h-100">
              <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col col-lg-6 mb-4 mb-lg-0">
                  <div className="card mb-3" style={{ borderRadius: ".5rem" }}>
                    <div className="row g-0">
                      <div
                        className="col-md-4 bg-dark text-center text-white gradient-custom"
                        style={{
                          borderTopLeftRadius: ".5rem",
                          borderBottomLeftRadius: ".5rem",
                          backgroundColor: "red",
                        }}
                      >
                        <input
                          type="file"
                          className="form-control-file"
                          id="exampleFormControlFile1"
                          style={{ display: "none" }}
                          ref={reference}
                          onChange={handleInputFile}
                        />

                        <div className="myDivColMd4">
                          <i
                            class="fa-solid fa-camera Profile"
                            onClick={handleUpdateImage}
                          ></i>
                          <img
                            src={`http://103.104.74.215:3003/uploads/${currImage?.profile_image?.filename}`}
                            alt="Avatar"
                            className="img-fluid my-5 rounded-circle"
                            style={{ width: 85, cursor: "pointer" }}
                          />
                        </div>
                        <h5 className="text-white">
                          {currImage?.username}
                        </h5>
                        <p>Web Designer</p>
                        <i className="far fa-edit mb-5" />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body p-4">
                          <h6>Information</h6>
                          <hr className="mt-0 mb-4" />
                          <div className="row pt-1">
                            <div className="col-6 mb-3">
                              <h6>Email</h6>
                              <p className="text-muted">{currImage?.email}</p>
                            </div>
                            <div className="col-6 mb-3">
                              <h6>Phone</h6>
                              <p className="text-muted">8087328841</p>
                            </div>
                          </div>
                          <h6>Projects</h6>
                          <hr className="mt-0 mb-4" />
                          <div className="row pt-1">
                            <div className="col-6 mb-3">
                              <h6>Recent</h6>
                              <p className="text-muted">Lorem ipsum</p>
                            </div>
                            <div className="col-6 mb-3">
                              <h6>Most Viewed</h6>
                              <p className="text-muted">Dolor sit amet</p>
                            </div>
                          </div>
                          <div className="d-flex justify-content-start">
                            <a href="#!">
                              <i className="fab fa-facebook-f fa-lg mr-3" />
                            </a>
                            <a href="#!">
                              <i className="fab fa-twitter fa-lg mr-3" />
                            </a>
                            <a href="#!">
                              <i className="fab fa-instagram fa-lg" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}