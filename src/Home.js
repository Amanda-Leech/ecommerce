import React from "react";
import Product from "./Product";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <img
        className="home-image"
        src="https://www.galleriacrystalrun.com/wp-content/uploads/sites/10/2022/02/scout-cookies-1-2-color.jpg"
        alt="top"
      />
      <div className="home-row">
        <Product
          id="121314"
          title="Raspberry Rally™"
          price={5}
          description="Thin, crispy cookies infused with raspberry flavor, dipped in chocolaty coating"
          image="https://www.gsutah.org/content/dam/girlscouts-shared/images/cookies/lbb/LBB_23_MarComm_MeetTheCookies_Graphics_LBB-RaspberryRally_255x255_white.jpg"
        />
        <Product
          id="121314"
          title="Adventurefuls™"
          price={5}
          description="Indulgent brownie-inspired cookies topped with caramel flavored crème with a hint of sea sal"
          image="https://www.gsutah.org/content/dam/girlscouts-shared/images/2022/cookie/adventurefuls/lbb/LBB_Adventurefuls.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="121314"
          title="Thin Mints®"
          price={5}
          description="Crisp wafers covered in chocolaty coating. Made with natural oil of peppermint."
          image="https://www.gsutah.org/content/dam/girlscouts-shared/images/cookies/lbb/LBB_thinmints.jpg"
        />
        <Product
          id="121314"
          title="Samoas®"
          price={5}
          description="Crisp cookies, coated in caramel, sprinkled with toasted coconut, and striped with dark chocolaty coating."
          image="https://www.gsutah.org/content/dam/girlscouts-shared/images/cookies/lbb/LBB_samoa.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="121314"
          title="Trefoils®"
          price={5}
          description="Delicate-tasting shortbread that is delightfully simple and satisfying."
          image="https://www.gsutah.org/content/dam/girlscouts-shared/images/cookies/lbb/LBB_trefoil.jpg"
        />
        <Product
          id="121314"
          title="Tagalongs®"
          price={5}
          description="Crispy cookies layered with peanut butter and covered with a chocolaty coating."
          image="https://www.gsutah.org/content/dam/girlscouts-shared/images/cookies/lbb/LBB_tagalongs.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="121314"
          title="Do-si-dos®"
          price={5}
          description="Crunchy oatmeal sandwich cookie with creamy peanut butter filling."
          image="https://www.gsutah.org/content/dam/girlscouts-shared/images/cookies/lbb/LBB_dosido.jpg"
        />
        <Product
          id="121314"
          title="Lemon-Ups® "
          price={5}
          description="Crispy lemon cookies baked with motivational messages.
          NATURALLY FLAVORED WITH OTHER NATURAL FLAVORS"
          image="https://www.gsutah.org/content/dam/girlscouts-shared/template/images/cookies/20_MarComm_MeetTheCookies_Council_LemonUps.jpg"
        />
      </div>
      <div className="home-row">
        <Product
          id="121314"
          title="Girl Scout S'mores®"
          price={5}
          description="Crunchy graham sandwich cookies with creamy chocolate and marshmallowy filling."
          image="https://www.gsutah.org/content/dam/girlscouts-shared/images/cookies/lbb/LBB_GirlScoutSmores.jpg"
        />
        <Product
          id="121314"
          title="Toffee-tastic®"
          price={5}
          description="Rich, buttery cookies packed with golden toffee bits bursting with flavor. Gluten free."
          image="https://www.gsutah.org/content/dam/girlscouts-shared/images/cookies/lbb/Toffee_Cookie_Round.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
