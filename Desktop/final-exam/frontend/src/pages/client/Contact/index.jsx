import React from 'react'
import "./index.scss"
import {Helmet} from "react-helmet";
const Contact = () => {
  return (
    <div className='body'>Contact
     <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </div>
  )
}

export default Contact