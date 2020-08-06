import React from 'react';

import './App.css';
import Nav from './Components/nav'
import Video from './Components/logo'
import About from './Components/about'
import Episodes from './Components/episodes'
import Footer from './Components/footer'
import episodeData from './episodeData'

function App() {
  return (
    <>
    <Nav />
    <Video/>  
    <About />
    <Episodes episodeData={episodeData}/>
    <Footer />
  
  </>
  );
}

export default App;
