import { Link } from "react-router-dom";
import { useEthers, useEtherBalance } from "@usedapp/core";

const Header = () => {

  const { activateBrowserWallet, account } = useEthers();
  const etherBalance = useEtherBalance(account);

  const handleWallet = () => {
    activateBrowserWallet();
  }

  return (
    <header class="text-gray-600 body-font">
      <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link to='/Home' id='logo'>
          <img
            src="../assets/web/headerLogo-1x.png"
            alt="studioThirteen"
          />
        </Link>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="btn btn-ghost btn-sm rounded-full">
            mint
          </a>
          <a className="btn btn-ghost btn-sm rounded-btn">
            ourNFTs
          </a>
          <a className="btn btn-ghost btn-sm rounded-btn">
            theTeam
          </a>
          <a className="btn btn-ghost btn-sm rounded-btn">
            FAQs
          </a>
        </nav>
        <button class="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0" id="connect-wallet" onClick={handleWallet}>
          {!account ? 'connectWallet' : account}
        </button>
      </div>
    </header>
  );
}

export default Header;