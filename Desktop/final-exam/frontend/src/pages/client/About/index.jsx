import React from "react";
import "./index.scss";
import { Helmet } from "react-helmet";
const About = () => {
  return (
    <div className="body">
      About
      <Helmet>
        <meta charSet="utf-8" />
        <title>About</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
    </div>
  );
};

export default About;
