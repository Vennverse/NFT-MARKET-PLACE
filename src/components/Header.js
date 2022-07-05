// import react, { useContext } from "react";
import { Link } from "react-router-dom";
import { useEthers } from "@usedapp/core";
import { useState } from "react";

const Header = (props) => {
  const { activateBrowserWallet, account } = useEthers();
  // const etherBalance = useEtherBalance(account);

  const handleWallet = () => {
    activateBrowserWallet();
  };

  const downloadMetamask = () => {
    window.location.href = "https://chrome.google.com/webstore/search/metamask";
  };

  const [isMeta] = useState(() => {
    if (typeof window.ethereum !== "undefined") {
      return true;
    }
    return false;
  });

  return (
    <div id="header">
      <Link to="/" id="logo">
        NFT Room
      </Link>

      <div id="link-containers">
        <a href="!#">Start Hunting</a>
        <a href="!#">Dark NFTs</a>
        <a href="!#">Community</a>
        <a href="!#">Craft NFT</a>

        {isMeta && (
          <button id="connect-wallet" onClick={handleWallet}>
            {!account ? "Connect Wallet" : account}
          </button>
        )}
        {!isMeta && (
          <button id="download-metamask" onClick={downloadMetamask}>
            <div>
              <img
                src="https://docs.metamask.io/metamask-fox.svg"
                height="17px"
                alt="gal"
              />
              <span>&nbsp;&nbsp;Download Metamask</span>
            </div>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
