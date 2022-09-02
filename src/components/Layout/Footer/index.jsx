import React from "react";
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <div className="FooterSection">
      <div className="description">
        <img
          src="https://cdn-icons-png.flaticon.com/512/21/21601.png"
          alt="news-logo"
        />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est totam
          sed harum ut perferendis enim vitae nisi itaque quae hic.
        </p>
      </div>
      <div className="FooterLinks">
        <h3>SITE MAP</h3>
        <p>Home</p>
        <p>Leatest</p>
        <p>Sport</p>
        <p>Healt</p>
        <p>More</p>
      </div>
      <div className="SubscribeSection">
        <input type="email" placeholder="Email adress..." />
        <button>Subrscribe</button>
        <div className="footerIcons">
          <FacebookOutlinedIcon />
          <TwitterIcon />
          <EmailIcon />
          <YouTubeIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
