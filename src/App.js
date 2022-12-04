
import React, { useState, useEffect } from "react";
import Header from "./components/Header"
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import Popular from "./components/Popular";
import WatchList from "./components/WatchList";
import Recommended from "./components/Recommended";
import Favorites from "./components/Favorites";
import { Link } from "react-router-dom";



function App() {
  const [watchlist, setwatchlist] = useState([]);
  const [faves, setFaves] = useState([]);

  useEffect(() => {
    getLocal();
    getLocalFaves();
  }, [])

  useEffect(() => {
    saveToLocal()
  }, [watchlist, faves])

  // useEffect(() => {
  //   localStorage.setItem('watchlist', JSON.stringify(watchlist));
  // }, [watchlist]);

  // //figure out how to keep localstorage after page reload//
  // useEffect(() => {
  //   const list = JSON.parse(localStorage.getItem('watchlist'));
  //   if (list) {
  //     setwatchlist(list)
  //     console.log('hello')
  //   }
  // }, []);

  const saveToLocal = () => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist));
    localStorage.setItem('favorites', JSON.stringify(faves));
  }

  const getLocal = () => {
    const list = JSON.parse(localStorage.getItem('watchlist'));
    if (list) {
      setwatchlist(list)
    }
  }

  const getLocalFaves = () => {
    const favesList = JSON.parse(localStorage.getItem('favorites'));
    if (favesList) {
      setFaves(favesList)
    }
  }


  return (
    <div>
      <Header />
      <Recommended faves={faves} setFaves={setFaves} watchlist={watchlist} setwatchlist={setwatchlist} />
      <Popular faves={faves} setFaves={setFaves} watchlist={watchlist} setwatchlist={setwatchlist} />
      <WatchList watchlist={watchlist} setwatchlist={setwatchlist} faves={faves} setFaves={setFaves} />
      <Favorites faves={faves} setFaves={setFaves} watchlist={watchlist} setwatchlist={setwatchlist} />
    </div>

  )
}

export default App;
