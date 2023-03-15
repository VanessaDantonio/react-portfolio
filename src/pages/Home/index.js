import React from "react";
import Hero from "../../components/Hero/index";
//import "./style.css";

function Home() {
  return (
    <div className="home-page">
      <Hero>
        <h1>Hi, I'm Vanessa D'Antonio</h1>
        <h2>
          <a class="typewrite" data-period="2000" data-type='["Web Developer","Mobile Developer","Learner"]' />
        </h2>
      </Hero>
    </div>
  );
}

export default Home;