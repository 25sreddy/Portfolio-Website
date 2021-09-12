import React, { useEffect } from "react";
import "./project.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Project = (props) => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);
  return (
    <div className="card">
      <img className="card-img-top" id="proj" src={props.image} alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.text}</p>
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer noopener"
          className="btn btn-primary"
        >
          Check It Out!
        </a>
      </div>
    </div>
  );
};

export default Project;
