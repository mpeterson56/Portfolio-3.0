import React from "react";

function Projects(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <p className="card-title">{props.name}</p>
        <div className="Links">
          <div className="Links_1">
          <p className="card-title">{props.name}<a href={props.github}>Github</a></p> 
          </div>
          <div className="Links_1">
          <p className="card-title">{props.name}<a href={props.deploy}>Deployed</a></p> 
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
