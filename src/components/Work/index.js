import React from "react";
import Projects from "../../components/Projects";
import Work from "../../components/Work/work.json";

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function work() {
  return (
    <section className="container">
      <div className="project">
        <h2 className="top-title">Projects</h2>
        <hr></hr>
      </div>

      <Wrapper id="card-data">
        {Work.map((project) => (
          <Projects
            key={project.id}
            image={project.image}
            name={project.name}
            github={project.github}
            deploy={project.deploy}
          />
        ))}
      </Wrapper>
    </section>
  );
}

export default work;
