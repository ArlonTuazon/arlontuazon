import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Portfolio from '../components/Portfolio';
import About from '../components/About';
import Resume from '../components/Resume';
import Contact from '../components/Contact';
import "../App.css"

function PersonalPortfolio() {
  const [currentPage, handlePageChange] = useState('Portfolio');

  const renderPage = () => {
    // Add a switch statement that will return the appropriate component of the 'currentPage'
    switch (currentPage) {
      case 'Arlon Tuazon':
          return <About />;
      case 'About':
        return <About />;
      case 'Portfolio':
        return <Portfolio />;
      case 'Contact':
        return <Contact />;
        case 'Resume':
            return <Resume />;
      default:
        return <Portfolio />;
    }
  };

  return (
    <div>
      
      <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
    
      <div>{renderPage(currentPage)}</div>
    </div>
  );
}

export default PersonalPortfolio;