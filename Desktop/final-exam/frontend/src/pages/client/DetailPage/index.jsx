import React from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";
import { Card } from "antd";
import "./index.scss"
import {Helmet} from "react-helmet";
const Detailpage = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const { Meta } = Card;
  const getData = async () => {
    const res = await axios.get(`http://localhost:7070/drimo/${params.id}`);
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
     <Helmet>
        <meta charSet="utf-8" />
        <title>DetailPage</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="div">
      <div className="data">
            <Card
              hoverable
              style={{
                width: 262,
                textAlign: "center",
              }}
              cover={
                <img
                  style={{ width: 60, height: 60, display: "inline-block" }}
                  alt="example"
                  src={data.image}
                />
              }
            >
              <Meta title={data.name} description={data.description} />
            </Card>
      </div>
      </div>
    </>
  );
};

export default Detailpage;
