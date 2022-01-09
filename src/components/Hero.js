import React, { useState, useEffect } from "react";
import "../styles/Hero.css";
import { useNavigate } from "react-router-dom";
import Header from "./Header";

const Hero = () => {
  let navigate = useNavigate();

  const goExplore = () => {
    navigate("/explore");
  };

  return (
    <div id="hero">
      {/* <img id='hero-background' src={list[0].src}/> */}

      <Header />

      <h1 id="header-text-first"> studioThirteen </h1>
      <h1 id="header-text-second"> marketplace</h1>
      <h5 id="header-subtext">find, mint, and enjoy your NFTs with us</h5>

      <div id="hero-buttons">
        <button id="explore" onClick={goExplore}>
          explore
        </button>
        <button id="create">mint</button>
      </div>
    </div>
  );
};

export default Hero;
