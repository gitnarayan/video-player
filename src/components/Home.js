import React from "react";
// import Navbar from './Navbar';
// import Sidebar from './Sidebar';
// import Register from './Register';
// import Login from './Login';
// import UploadVideo from './UploadVideo';
// import VideoPages from './VideoPages';
// import MyChannel from './SingleChannel';
// import History from './History';
import ChannelsCategories from "./ChannelsCategories";
import FeaturesVideos from "./FeaturesVideos";
import PopularChannels from "./PopularChannels";

const Home = () => {
  return (
    <>
      <ChannelsCategories />
      <FeaturesVideos />
      {/* <PopularChannels/>  */}
    </>
  );
};
export default Home;
