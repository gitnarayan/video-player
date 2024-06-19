import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Register from "./components/Register";
import Login from "./components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useLocation } from "react-router-dom";
import UploadVideo from "./components/UploadVideo";
import UploadMusic from "./components/UploadMusic";
import Channels from "./components/Channels";
import VideoPages from "./components/VideoPages";
import MusicPage from "./components/MusicPage";
// import MyChannel from './components/SingleChannel';
import History from "./components/History";
import ChannelsCategories from "./components/ChannelsCategories";
import FeaturesVideos from "./components/FeaturesVideos";
import PopularChannels from "./components/PopularChannels";
import Footer from "./components/Footer";
import SingleChannel from "./components/SingleChannel";
import Blank from "./components/Blank";
// import Section from "./components/Section";
import Error from "./components/Error";
import Movies from "./components/Movies";
import Yourlife from "./components/Yourlife";
import ForgotPassword from "./components/ForgotPassword";
import Protect from "./components/Protect";
import Profile from "./components/Profile";
import CreateChannel from "./components/CreateChannel";
import Account from "./components/Account";
import ProfileUpdate from "./components/ProfileUpdate";
import GetProfile from "./components/GetProfile";
import GetMychannel from "./components/GetMychannel";
import FeaturesAudio from "./components/FeaturesAudio";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname !== "/Login" && location.pathname !== "/Register" && (
        <Navbar />
      )}
      {location.pathname !== "/Login" && location.pathname !== "/Register" && (
        <Sidebar />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/UploadVideo" element={<UploadVideo />} />
        <Route path="/UploadMusic" element={<UploadMusic />} />
        <Route path="/Channels" element={<Channels />} />
        <Route path="/VideoPages" element={<VideoPages />} />
        <Route path="/MusicPage" element={<MusicPage />} />
        <Route path="/SingleChannel" element={<SingleChannel />} />
        <Route path="/History" element={<History />} />
        <Route path="/Blank" element={<Blank />} />
        <Route path="/PopularChannels" element={<PopularChannels />} />
        <Route path="/Error" element={<Error />} />
        <Route path="/Movies" element={<Movies />} />
        <Route path="/Yourlife" element={<Yourlife />} />
        <Route path="/ForgotPassword" element={<ForgotPassword />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/CreateChannel" element={<CreateChannel />} />
        <Route path="/ProfileUpdate" element={<ProfileUpdate />} />
        <Route path="/GetProfile" element={<GetProfile />} />
        <Route path="/GetMychannel" element={<GetMychannel />} />
        <Route path="/FeaturesAudio" element={<FeaturesAudio />} />

        {/* <Route path="/UploadVideo" element={<ProtectRoute Component={UploadVideo} />} /> */}
      </Routes>
      {location.pathname !== "/Login" && location.pathname !== "/Register" && (
        <Footer />
      )}
    </>
  );
}

export default App;
