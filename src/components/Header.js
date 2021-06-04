import "../assets/css/Header.css";
import videoheader from "../assets/images/video-soldadura.mp4";
const Header = () => {
  return (
    <video loop autoPlay muted>
      <source src={videoheader} type="video/mp4" />
    </video>
  );
};

export default Header;
