import React from "react";
import "./About.scss";

function About() {
  return (
    <div className="privacyPolicy">
      <p>Explain your capstone:</p>I started off building a website, then I went
      through the assignment and adjusted it to match the requirements. I learn
      a lot more going section by section and fixing things. I am not very good
      at sass so I wrote the website in css and then converted it to scss. I
      have a few unfinished items. I plan on adding a loading animation. I am
      about halfway finished with my log in page and I want to have a page
      showing order history. My search bar is also not yet active. It's coming
      along though. Given I needed a home and a product page my home page is
      just an image. My products page will render all products and you also have
      the option to click on catagories. I am in the middle of the click on the
      product and it takes it to a page but I have not yet figured out how to
      return the id when clicking on the item since I am running a .map. I
      downloaded axion to return the products to the .json as my fetch was not
      working how I wanted it to. I am still working on how to truncate text. I
      took out the discription because I need to figure out how to truncate it
      and the image was coving the words. I have add and remove from cart
      working, but I have not started on the quantity and the item is repeated,
      but I just havent had time to add the feature yet. I used Link over
      NavLink mostly because none of my code cares if the link is active or not.
      It is coming along but I still have a lot I want to do with it.
      <p>Explain what you learned throughout your time here:</p>I think the most
      important think I have learned is to break things down into steps and you
      can only learn through repetition. My attention span is around 30 min so I
      spent a lot of short spurts researching and how to videos. There is SO
      much info and I am not sure why when they update things like router-dom
      they change names for switch and history. I also learned using "helpers"
      likes to break your computer as different versions don't play well
      together. This is a field you can neve know everything in.
      <p>Explain your favorite languages and why:</p>
      My favorite languase is react because you don't really use HTML. I hade a
      really hard time with having js, html, and css/scss in one application. I
      can do two but trying to get three applications to run at once and what
      you use html vs js for is confusing. All I could get on that capstone is
      the styling. I love react because it works well with my brain in breaking
      big things down into smaller components. I break my life and days down
      into hours and tasks so I can get everything done so react works well with
      my mindset.
    </div>
  );
}
export default About;
