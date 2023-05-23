import React, { useEffect } from 'react'
import "./Home.css"
import { VscDebugStart } from "react-icons/vsc";
import { useState } from 'react';
import axios from 'axios';
export const Home = () => {
    const [data, setData] = useState([])
    const getData = async () => {
        const res = await axios.get("http://localhost:2003/users")
        setData(res.data)
    }
    useEffect(() => {
        getData()
    }, [])
    const Deleted = async (id) => {
        await axios.delete(`http://localhost:2003/users/${id}`)
        await getData()
    }
    return (
        <div className='container'>
            <section>
                <div className="page-1">
                    <div className="catalog">
                        <div className="catalogs">
                            <div className="hello">Say Hello to ToyStore!</div>
                            <h1>
                                Free Ecommerce Template for Webflow
                            </h1>
                            <button>Open Catalog</button>
                        </div>
                        <div className="scroll">

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="page-2">
                    <div className='left'>
                        <img className='img' src="https://assets.website-files.com/5badda2935e11303a89a461e/5badf21356ac5470c84dfbf4_33903-2-plush-toy-transparent-image-min-p-500.png" alt="" />
                        <h3>Stuffed Animals
                            <button className='shop'>Shop Now</button>
                        </h3>
                    </div>
                    <div className='right'>
                        <h3>Wooden Toys

                            <button className='shop'>Shop Now</button>
                        </h3>
                        <img className='img' src="https://assets.website-files.com/5badda2935e11303a89a461e/5badf2131f2da24c02171c72_33727-9-wooden-toy-transparent-image-min-p-500.png" alt="" />
                    </div>

                </div>
            </section>
            <section>
                <div className="page-3">
                    <div className="text">
                        <h2>Stuffed Animals</h2>
                        <a href="">See All Toys</a>
                    </div>
                    <div style={{ backgroundColor: 'white', display: "flex", width: "100%", height: "500px", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                        {data.map((d) => (

                            <div className="cards" style={{ width: "100%" }}>
                                <img style={{ width: "50%" }} className='back-img' src={d.image} alt="" />
                                <h3 style={{ width: "200px" }}>{d.name}</h3>
                                <h4 >{d.price}</h4>
                                <button onClick={() => Deleted(d._id)}>Delete</button>
                            </div>
                        ))}
                    </div>
                    <div className="line">
                        <div className="line2">
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="page-4">
                    <div className="text">
                        <h2>Wooden Toys</h2>
                        <a href="">See All Toys</a>
                    </div>
                    <div style={{ backgroundColor: 'white', display: "flex", width: "100%", height: "500px", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                        {data.map((d) => (

                            <div className="cards" style={{ width: "100%" }}>
                                <img style={{ width: "50%" }} className='back-img' src={d.image} alt="" />
                                <h3 style={{ width: "200px" }}>{d.name}</h3>
                                <h4 >{d.price}</h4>
                                <button onClick={() => Deleted(d._id)}>Delete</button>
                            </div>
                        ))}
                    </div>
                    <div className="line">
                        <div className="line2">

                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="page-5">
                    <div className="catalog-about">
                        <div className="abouts">
                            <div className="about">About The Shop</div>
                            <h1 className='watch'>
                                Watch Our Story
                            </h1>
                            <p>There is no magic formula to write perfect ad copy. It is based on a number of factors, including ad placement, demographic, even the consumer’s mood.</p>
                            <button><VscDebugStart /></button>
                        </div>
                    </div>

                </div>
            </section>
            <section>
                <div className="page-6">
                    <div className="made">Made for Webflow</div>
                    <h2 className='simple'>Simple & Colorful Ecommerce Template for Your Business</h2>
                </div>
                <div className="page-6-text">
                    <div className="page-6-left">
                        <h2>Available for FREE!</h2>
                        <div className="divider"></div>
                        <p className='p'>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy</p>
                        <button className='get'>GET IT NOW</button>
                    </div>

                    <div className="page-6-right">
                        <img className='pimg' src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77ee73150e2021b0db4_side-image-01-p-1080.jpeg" alt="" />
                    </div>
                </div>

            </section>
            <section>
                <div className="page-7">
                    <div className="page-7-left">
                        <div className="img-icon">


                            <img className='icon-img' src="https://assets.website-files.com/5badda2935e11303a89a461e/5baf56dcace69cfd39b34f7a_paperplane-icon-white.svg" alt="" />
                        </div>
                        <h4>Subscribe to our newsletter
                            & get 10% discount!</h4>
                    </div>
                    <div className="page-7-right">
                        <input type="text" placeholder='Enter your email address' />
                        <button className='sub'>Subscribe</button>
                    </div>
                </div>
            </section>
            <section>
                <div className="page-8">
                    <div className="elastic">@ElasticThemes</div>
                    <h2 className='inst'>We're on Instagram!</h2>
                </div>
                <div className="page-8-img">
                    <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf79395558fbeb88a49_instagram-01.jpg" alt="" /><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf735e113f8679a57e6_instagram-02.jpg" alt="" /><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf735e11327b99a57e7_instagram-03.jpg" alt="" /><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf7939555df08b88a48_instagram-04.jpg" alt="" /><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf7939555514eb88a4a_instagram-05.jpg" alt="" /><img src="https://assets.website-files.com/5badda2935e11303a89a461e/5badecf71f2da2228d17155f_instagram-06.jpg" alt="" />
                </div>
                <button className='see'>See More Photos</button>
            </section>
        </div>
    )
}
