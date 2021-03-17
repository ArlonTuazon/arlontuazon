import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';

// Individual Card build-out using props
function ProjectCards(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={props.image}/>
        </div>
        <div className="content">
              <p className="project-title" id="card-title">{props.name}</p>
              <p>
              <a href={props.github}><img src="https://img.icons8.com/clouds/100/000000/github.png" alt="Repository" id="project-icon"/></a> 
              <a href={props.deploy}><img src= "https://img.icons8.com/officel/16/000000/download--v2.png"alt="Deployed Site" id="project-icon"/></a> 
              </p>
              <p id="topics">
                    ({props.topics})
                </p>
        </div>
      </div>
    );
}
  
  export default ProjectCards;