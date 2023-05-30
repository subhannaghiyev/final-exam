import React, { useState } from "react";
import "./index.scss";
import { Card } from "antd";
import axios from "axios";
import { useEffect } from "react";
import { BsEmojiSmile } from "react-icons/bs";
import { FaBriefcase } from "react-icons/fa";
import { MdBusinessCenter } from "react-icons/md";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { RxCheckCircled } from "react-icons/rx";
import { Helmet } from "react-helmet";
const Home = () => {
  const { Meta } = Card;
  const [data, setData] = useState([]);
  const [sorted, setSorted] = useState(true);
  const [value, setValue] = useState("");
  const navigate = useNavigate();

  const getData = async () => {
    const res = await axios.get("http://localhost:7070/drimo");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);

  const sortedData = () => {
    if (sorted) {
      setData(data.sort((a, b) => a.name.localeCompare(b.name)));
      setSorted(false);
    } else {
      setData(data.sort((a, b) => b.name.localeCompare(a.name)));
      setSorted(true);
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const deleteData = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Deleted!",
          "Your file has been deleted.",
          "success",
          axios.delete(`http://localhost:7070/drimo/${id}`),
          setData(data.filter((item) => item._id !== id))
        );
      }
    });
  };

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="section1">
        <div className="relative">
          <p>Special Offer Now $10</p>
          <div className="triangle">Trinagle</div>
        </div>
        <div className="flex-text">
          <div className="text">
            <h1 className="h1">BEST WEB HOSTING SERVER</h1>
            <h1 className="h1-1">CREATE YOUR DOMAIN STARTED</h1>
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters.
            </p>
            <div className="flex-p">
              <div className="icon-display">
                <RxCheckCircled style={{ fontSize: 46, color: "white" }} />
                <p>Summo tamquam.</p>
              </div>
              <div className="icon-display">
                <RxCheckCircled style={{ fontSize: 46, color: "white" }} />
                <p>Summo tamquam.</p>
              </div>
            </div>
            <div className="flex-p">
              <div className="icon-display">
                <RxCheckCircled style={{ fontSize: 46, color: "white" }} />
                <p>Summo tamquam.</p>
              </div>
              <div className="icon-display">
                <RxCheckCircled style={{ fontSize: 46, color: "white" }} />
                <p>Summo tamquam.</p>
              </div>
            </div>
            <button>Started Now</button>
          </div>
          <div className="image">
            <img
              src="https://preview.colorlib.com/theme/drimo/drimo/img/banner/server-shap.png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="section2">
        <div className="column-sect">
          <h1 className="section2-h1">OUR SERVICE</h1>
          <div className="clip-path"></div>
        </div>
        <p className="section2-p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
        </p>
        <div className="function">
          <input
            onChange={handleChange}
            className="inp"
            type="text"
            name=""
            id=""
            placeholder="Search"
          />
          <button onClick={sortedData} className="btn">
            Filter By Name
          </button>
        </div>
      </div>

      <div className="data">
        {data
          .filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
          )
          .map((d) => (
            <div className="column-data">
              <div>
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
                      src={d.image}
                    />
                  }
                >
                  <Meta title={d.name} description={d.description} />
                </Card>
              </div>
              <div className="buttons">
                <button onClick={() => navigate(d._id)} className="btn">
                  Detail Page
                </button>
                <button onClick={() => deleteData(d._id)} className="btn1">
                  Delete
                </button>
              </div>
            </div>
          ))}
      </div>

      <div className="section3">
        <div className="section2-3">
          <div className="column-sect-3">
            <h1 className="section2-h1-3">HAPPY CLIENT</h1>
            <div className="clip-path-3"></div>
          </div>
          <p className="section2-p-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
          </p>
        </div>
        <div className="icons">
          <div className="icon">
            <FaBriefcase style={{ fontSize: 56 }} />
            <div className="text-icon">
              <p className="icon-p">1172</p>
              <p className="p-icon">Project Complete</p>
            </div>
          </div>
          <div className="icon">
            <BsEmojiSmile style={{ fontSize: 56 }} />
            <div className="text-icon">
              <p className="icon-p">1000</p>
              <p className="p-icon">Happy Client</p>
            </div>
          </div>
          <div className="icon">
            <MdBusinessCenter style={{ fontSize: 56 }} />
            <div className="text-icon">
              <p className="icon-p">1200</p>
              <p className="p-icon">Toatal Client's</p>
            </div>
          </div>
          <div className="icon">
            <RiMoneyDollarCircleFill style={{ fontSize: 56 }} />
            <div className="text-icon">
              <p className="icon-p">1172</p>
              <p className="p-icon">Wing Award</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section4">
        <div className="section4-4">
          <div className="column-sect-4">
            <h1 className="section2-h1-4">Latest News</h1>
            <div className="clip-path-4"></div>
          </div>
          <p className="section4-p-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim.
          </p>
        </div>

        <div className="static-card">
          <Card
            hoverable
            style={{
              width: 360,
            }}
            cover={
              <img
                alt="example"
                src="https://preview.colorlib.com/theme/drimo/drimo/img/blog/standard-blog/st-blog-1.jpg"
              />
            }
          >
            <Meta
              title="Professional Website Hosting"
              description="I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born."
            />
          </Card>
          <Card
            hoverable
            style={{
              width: 360,
            }}
            cover={
              <img
                alt="example"
                src="https://preview.colorlib.com/theme/drimo/drimo/img/blog/standard-blog/st-blog-2.jpg"
              />
            }
          >
            <Meta
              title="Professional Website Hosting"
              description="I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born."
            />
          </Card>
          <Card
            hoverable
            style={{
              width: 360,
              height: 360,
            }}
            cover={
              <img
                alt="example"
                src="https://preview.colorlib.com/theme/drimo/drimo/img/blog/standard-blog/st-blog-3.jpg"
              />
            }
          >
            <Meta
              title="Professional Website Hosting"
              description="I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born."
            />
          </Card>
        </div>
      </div>
    </>
  );
};

export default Home;
