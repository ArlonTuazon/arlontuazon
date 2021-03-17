import React from "react";
import Mypic from "../../assets/images/arlon_pic.png"

function About() {
  return (
    <section className="title">
      <h1 class="name">Maria Arlonnica J. Tuazon</h1>
      <hr></hr>

      <div className="row justify-content-center">
        <div className="col-10 text-center" id="about-section">
          <img class="mb-5 img-rounded" src={Mypic} alt="Arlon" width="304" height="236"/>
        </div>
        <div class="col-md-9 ">
          <p>
            Arlon is outgoing, dedicated, and fiercely loyal. I work for the
            non-profit organization TRUST South LA that assists low-income
            communities with housing issues. I manage the company website and all our social media.  
            I am also in charge of our data management using Salesforce.
          </p>
          
          <p>
            {" "}
            I believe that a person should work on developing their
            professional skills and learning new things all the time.{" "}
          </p>
          <p>
            I enjoy traveling and is the go-to person for organizing family
            trips. I likes pasta, Korean food, and movie nights at home.
          </p>
          <br></br>
          <br></br>
          
        </div>
      </div>
    </section>
  );
}

export default About;
