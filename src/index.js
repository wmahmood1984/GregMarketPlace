import React from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";
import App from "./App";
import { TravelCoinProvider } from "./context/TravelCoinContext";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import {store} from './state/store'
import {Provider} from 'react-redux'

function getLibrary(provider) {
  const library = new Web3Provider(provider);
  library.pollingInterval = 12000;
  return library;
}


ReactDOM.render(
  <React.StrictMode>
    {/* <MoralisProvider
      appId={process.env.REACT_APP_PUBLIC_APP_ID}
      serverUrl={process.env.REACT_APP_PUBLIC_MORALIS_SERVER}> */}
      {/* <TravelCoinProvider> */}
      <Provider store={store}>
      <Web3ReactProvider getLibrary={getLibrary}>
      <App />
      </Web3ReactProvider>
      </Provider>

      {/* </TravelCoinProvider> */}
    {/* </MoralisProvider> */}
  </React.StrictMode>,
  document.getElementById("root")
);
