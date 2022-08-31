import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";

const Footer = () => {
  return (
    <div>
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/21/21601.png"
          alt="news-logo"
        />
        <hr />
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est totam
          sed harum ut perferendis enim vitae nisi itaque quae hic.
        </p>
      </div>
      <div>
        <h3>SITE MAP</h3>
        <p>Home</p>
        <p>Leatest</p>
        <p>Sport</p>
        <p>Healt</p>
        <p>More</p>
      </div>
      <div>
        <input type="email" placeholder="Email adress..." />
        <button>Subrscribe</button>
        <div>
          <FacebookOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Footer;
