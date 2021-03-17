import React from 'react';
import Github from '../../assets/images/github_logo_133x130.png';
import "../../App.css";

function Footer() {   
    return (
    <div class="footerBottom" id="footer">
        <a href="https://github.com/ArlonTuazon"><img src={Github} alt="Github" class="icon"/></a>
        <a href="https://www.linkedin.com/in/maria-arlonnica-tuazon-72b84550"><img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" class="icon"/></a>
        
              
        &copy; arlonTuazon  |  <a href="https://github.com/arlontuazom" class="link">download resume</a>  |   <a href="https://icons8.com/icon/uEPeFRqfMJL6/download">Download icon by Icons8</a>  |  made with <img id="react-icon" src="https://img.icons8.com/color/48/000000/react-native.png" alt="React"/>
       

    </div>
    )
}

export default Footer;