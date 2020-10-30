import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Fuji/2020/May/Hero/Fuji_TallHero_Home_v2_en_US_1x._CB429090084_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="4903850"
            title="HP VH240a 23.8-inch Full HD 1080p IPS LED Monitor with Built-in Speakers and VESA Mounting, Rotating Portrait & Landscape, Tilt, and HDMI & VGA"
            price={100.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71trhuzbhML._AC_SL1500_.jpg"
            rating={5}
          />
          <Product
            id="29945930"
            title="Kitchen Stand for iPad, Stouch Kitchen Desktop Tablet Wall Mount iPad Holder for iPad Air/Mini, iPad 2nd-4th Generation, Kindle Fire, Other 7-10-Inch Screen Tablets Between 4.7-7.5 Inches Wide Black"
            price={21.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/81vDXXu19GL._AC_SL1500_.jpg"
          />
          
        </div>
        <div className="home__row">
          <Product
            id="23445930"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={359.0}
            rating={2}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23545930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={559.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="22287650"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={299.99}
            rating={1}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="23446650"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440."
            price={1094.98}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
