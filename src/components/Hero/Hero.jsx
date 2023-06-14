import React from 'react';
import "./Hero.scss";
import Display from "../../assets/images/image-hero-desktop.png";
import Client1 from "../../assets/images/client-audiophile.svg";
import Client2 from "../../assets/images/client-databiz.svg";
import Client3 from "../../assets/images/client-maker.svg";
import Client4 from "../../assets/images/client-meet.svg";

const Hero = () => {
  const clients = [Client1, Client2, Client3, Client4];
  return (
    <div className='hero-container'>
      <div className='hero-body'>
        <div className='hero-content'>
          <h1>Make <br /> remote work</h1>
          <p>Get your team in sync, no matter your location. Streamline processes,
            create team rituals, and watch productivity soar.</p>
          <button className='btn'>Learn More</button>
        </div>
        <div className='client-container'>
          {clients.map((client, key) => (
            <img src={client} key={key} />
          ))}
        </div>
      </div>
      <div className='img-container'>
        <img src={Display} alt="Hero Image" />
      </div>
    </div>
  )
}

export default Hero