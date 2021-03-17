import React from 'react';
import Mypic from "../../assets/images/arlon_pic.png"

function Resume() {
    return (

 
  <div class="container">
    <div class="row">
      <div class="col-md-3 text-left text-md-center mb-3">
        <img class="rounded-circle img-fluid" src={Mypic} alt="Arlon" />
      </div>
      <div class="col-md-9">
        <h1>Arlon Tuazon</h1>
        
        <h5>Full Stack Coding Student</h5>
        <p class="border-top pt-10">Front End Experience: HTML, CSS (Bootstrap, Bulma), JavaScript, jQuery, React.js, IndexedDB <br></br>
        Back End Experience: Node.js, Express.js, SQL (sqlite, mySQL), Sequelize, NoSQL (MongoDB, Mongoose) API's (third-party, RESTful, server-side), Templating (Handlebars)

        </p>
      </div>    
      <div class="col-md-9">
       
        <h5>Work Experience</h5>
        <p class="border-top pt-3">Office Manager: TRUST South LA (2019 to Present) <br></br> Marketing Consultant:  Yucatan Foods (2014-2020)</p>
      </div>    

      <div class="col-md-9">
       
        <h5>Education</h5>
        <p class="border-top pt-3">UCLA Bootcamp </p>
      </div>  
      
   </div>  
  </div>
  

);
}

export default Resume
