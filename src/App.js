import React from 'react';
import './App.css';
import PortfolioContainer from "./components/PortfolioContainer";
import Footer from "./components/Footer"

function App() {
  return (
    <div className ="page-container">
      <div className = "content-wrap">
      
      <PortfolioContainer />
      </div>
      <Footer />
      
    </div>
  );
}

export default App;
