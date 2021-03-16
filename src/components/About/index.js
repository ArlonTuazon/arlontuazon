import React from "react";
import Mypic from "../../assets/images/arlon_pic.png"

function About() {
  return (
    <section className="title">
      <h1 class="name">about: Arlon Tuazon</h1>
      <hr></hr>

      <div className="row justify-content-center">
        <div className="col-10" id="about-section">
          <img class="mb-5" src={Mypic} alt="Arlon" />
          <p>
            Arlon is outgoing, dedicated, and fiercely loyal. She works for the
            non-profit organization TRUST South LA that assists low-income
            communities with housing issues.
          </p>
          
          <p>
            {" "}
            She believes that a person should work on developing their
            professional skills and learning new things all the time.{" "}
          </p>
          <p>
            She enjoys traveling and is the go-to person for organizing family
            trips. She likes pasta, Korean food, and movie nights at home.
          </p>
          <br></br>
          <br></br>
          <p>
            View full{" "}
            <a href="#/resume" class="link">
              resume
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
