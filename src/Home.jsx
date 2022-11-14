import React from 'react';
import FullList from "./components/FullList";
import NoCatch from "./components/NoCatch";
import OverTheAverage from "./components/OverTheAverage";
import TotalCatching from "./components/TotalCatching";
import Winner from "./components/Winner";

const Home = () => {
  return (
    <div>
      <FullList />
      <TotalCatching />
      <Winner />
      <OverTheAverage />
      <NoCatch />
    </div>
  )
}

export default Home
