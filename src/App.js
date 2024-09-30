import React from 'react';
import Header from './Header';
import FeatureCards from './FeatureCards';
import FAQ from './FAQ';
import Footer from './Footer';
import InputPage from './InputPage.js';
import './App.css';
import './style.css';
import TrendingNow from './TrendingNow'
const App = () => {
  return (
    <div className="outter-container">
      <Header/>

<TrendingNow/>
   <FeatureCards/>
   <InputPage/>

      <FAQ />
      <Footer />
    </div>
  );
};

export default App;
