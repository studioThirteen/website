import react from "react";
import { Link } from "react-router-dom";
import { useEthers, useEtherBalance } from "@usedapp/core";

const Header = () => {

    const {activateBrowserWallet, account} = useEthers();
    const etherBalance = useEtherBalance(account);

    const handleWallet = () => {
      activateBrowserWallet();
    }

    return (
        <div id="header">
        <Link to='/' id='logo'>studioThirteen</Link>

        <div id="link-containers">
          <a>ourNFTs</a>
          <a>theTeam</a>
          <a>community</a>
          <a>mintYourReading</a>

          <button id="connect-wallet" onClick={handleWallet} >{!account ? 'connectWallet' : account}</button>
        </div>
      </div>
    );
}

export default Header;