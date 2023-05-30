import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import "./index.scss"
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-text">
        <p className="p-footer">
          {" "}
          Copyright ©2023 All rights reserved | This template is made with{" "}
          <AiOutlineHeart /> by
        </p>
        <p className="color">Colorlib</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
