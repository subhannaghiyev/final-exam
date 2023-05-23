import React from 'react'
import "../Footer/Footer.css"
import { AiOutlineTwitter,AiFillFacebook,AiOutlineInstagram,AiOutlineYoutube } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
export const Footer = () => {
  return (
    <div className='container'>
        <footer>
        <div className="logo">ToyStore
        <ul>
            <li>Catalog</li>
            <li>Delivery</li>
            <li>About</li>
            <li>Contacts</li>
        </ul>
        </div>
        <div className="icon">
        <AiOutlineTwitter/>
        <AiFillFacebook/>
        <AiOutlineInstagram/>
        <BsPinterest/>
        <AiOutlineYoutube/>
      </div>
      <div className="footer-line"></div>
       <div className="footer">

      <div className="footer-left">Created with love by </div>
      <div className="footer-right">Powered by :
      <a href="">Webflow</a><a href="">Style Guide</a><a href="">Licensing</a></div>
       </div>
        </footer>
    </div>
  )
}
