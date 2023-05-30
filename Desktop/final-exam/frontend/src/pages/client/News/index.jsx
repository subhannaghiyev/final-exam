import React from 'react'
import "./index.scss"
import {Helmet} from "react-helmet";
const News = () => {
  return (
    <div className='body'>News
    <Helmet>
        <meta charSet="utf-8" />
        <title>News</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </div>
  )
}

export default News