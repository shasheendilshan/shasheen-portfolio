import React from "react";
import { BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <BsLinkedin
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/shasheen-dilshan-8441a6173",
              "_blank"
            )
          }
        />
      </div>
      <div>
        <FaFacebookF
          onClick={() =>
            window.open("https://www.facebook.com/shasheen.dilshan.9", "_blank")
          }
        />
      </div>
      <div>
        <BsInstagram
          onClick={() =>
            window.open("https://www.instagram.com/shasheendilshan/", "_blank")
          }
        />
      </div>
    </div>
  );
};

export default SocialMedia;
