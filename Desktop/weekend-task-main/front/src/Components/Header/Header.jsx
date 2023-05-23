import React from 'react'
import { AiOutlineTwitter,AiFillFacebook,AiOutlineInstagram,AiOutlineYoutube } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import "../../Components/Header/Header.css"
import { Link } from 'react-router-dom';
export const Header = () => {
  return (
    <div className='container'>
      <div className="call">
        <div className='call-text'>
      <h5>Call Us: +1 213 974-5898</h5>
      <h6>Email: toystore@template.com</h6>
        </div>
      <div className="icon">
        <AiOutlineTwitter/>
        <AiFillFacebook/>
        <AiOutlineInstagram/>
        <BsPinterest/>
        <AiOutlineYoutube/>
      </div>
      </div>
      <nav>
        <div className="logo">ToyStore
        <ul>
            <li>Catalog</li>
            <li>Delivery</li>
            <li>About</li>
            <li><Link style={{color:"black"}} to="/add-product">Contacts</Link></li>
        </ul>
        </div>
        <div className="nav-icon">
            Cart
            <MdOutlineLocalGroceryStore/>
            <div className="zero">
                0
            </div>
        </div>
      </nav>
    </div>
  )
}
