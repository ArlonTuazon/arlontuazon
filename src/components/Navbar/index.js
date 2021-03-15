import React, {useState} from "react";


function Navbar(props) {
    const [open, setOpen] = useState(false)
   
  return (
    <div>
      <nav>
        <div className="logo"><a>Arlon Tuazon</a></div>
        <ul className="nav-links" style={{transform: open ? "translateX(0px)" : ""  }}>
        <li>
          <a >About</a>
        </li>
        <li>
          <a>Portfolio</a>
        </li>
        <li>
          <a>Contact</a>
        </li>
        <li>
          <a>Resume</a>
        </li>
        </ul>
        <i onClick={() => setOpen(!open)} className= "fas fa-bars burger"></i>
      </nav>
    </div>
  );
}

export default Navbar;
