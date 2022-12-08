import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home-image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt="top"
      />
      <div className="home-row">
        <Product
          id="121314"
          title="
          Official Creality Ender 3 Neo 3D Printer"
          price={239.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/61rzBhkXNBL._SL1500_.jpg"
        />
        <Product
          id="121314"
          title="
          BLACK+DECKER Leaf Blower & Leaf Vacuum"
          price={94.92}
          rating={4}
          image="https://m.media-amazon.com/images/I/618vR9O6-BL._AC_SL1500_.jpg"
        />
        <Product
          id="121314"
          title="
          Disney Princess Rapunzel and Maximus Fashion Doll and Horse"
          price={29.23}
          rating={2}
          image="https://m.media-amazon.com/images/I/71sV-HtsHPL._AC_SY450_.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="121314"
          title="
          ROCCBOX by Gozney Portable Outdoor Pizza Oven - Gas Fired"
          price={499}
          rating={4}
          image="https://m.media-amazon.com/images/I/71EIWuLkglL._AC_SX522_.jpg"
        />
        <Product
          id="121314"
          title="Christmas Stockings 4 Pack, 19"
          price={239.0}
          rating={4}
          image="https://m.media-amazon.com/images/I/81XzelEG58L._AC_SY355_.jpg"
        />
        <Product
          id="121314"
          title="Freestanding Punching Bag- Heavy Boxing Bag with Stand"
          price={189.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/712zET2UYRL._AC_SX425_.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="121314"
          title="
          Indoor Stationary Exercise Bike"
          price={1245}
          rating={4}
          image="https://m.media-amazon.com/images/I/71uspbh7eRL._AC_SX425_.jpg"
        />
        <Product
          id="121314"
          title="Vucchini Pepper Salt Grinder Mill"
          price={22.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61jZ4-aVyNL._AC_SY450_.jpg"
        />
        <Product
          id="121314"
          title="17 Inch 1080p Portable IPS Gaming Monitor"
          price={259.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61LFwLG-lVL._AC_SY450_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
