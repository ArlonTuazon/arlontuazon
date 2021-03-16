import React, { useState } from "react";


function Navbar(props) {
  const [open, setOpen] = useState(false);
  const links = ['Arlon Tuazon', 'About', 'Contact', 'Portfolio', 'Resume'];
  
  return (
    
    <ul className="nav nav-links">
    {links.map(link => (
      <li key={link}>
        <a
          href={'#' + link.toLowerCase()}
          onClick={() => props.handlePageChange(link)}
          className={
            props.currentPage === link ? 'nav-link active' : 'nav-link'
          }
        >
          {link}
        </a>
      </li>
        
    ))}

  </ul>
     
);
}
     
     

export default Navbar;
