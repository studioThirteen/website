import React, { useState } from "react";
import "../styles/NFTCard.css";
import { FaEthereum } from "react-icons/fa";
import { ColorExtractor } from 'react-color-extractor'
import Card from "./base/Card";
import Button from "./base/Button";
import { Colors } from "../constants/Colors";

const NFTCard = ({ username, nftName, price, nftSrc, likeCount, gradient }) => {
  const [colors, setColors] = useState([]);

  const getColors = colors => {
    setColors(c => [...c, ...colors]);
    //console.log(colors);
  }

  return (
    <Card
      blurColor={colors[0]}
      child={<>
        <ColorExtractor getColors={getColors}>
          <img className="nft-image" src={nftSrc} alt="nft" />
        </ColorExtractor>
        <div className="wrapper">
          <div className="info-container">
            <p className="title">Hello, Mask!</p>
            <p className="collection">'Woman' #01</p>
            <p className="creator">by Tatyana Bogdanova</p>
          </div>
          <div className="price-container">
            <p className="price-label">price</p>
            <p className="price">
              <FaEthereum />1.5
            </p>
          </div>
        </div>
        <div className="buttons">
          <Button color={Colors.buttons.primary} textContent="buyNow" />
        </div>
      </>}>
    </Card>
  );
};

export default NFTCard;

