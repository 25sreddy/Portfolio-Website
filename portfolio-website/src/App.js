import "./App.css";
import React, { useEffect } from "react";
import Tech from "./Tech";
import Project from "./Project";
import photo from "./Capture3.PNG";
import photo1 from "./Screenshot 2021-09-11 223858.png";
import photo3 from "./6.PNG";
import photo4 from "./IMG_0221.JPG";
import AOS from "aos";
import "aos/dist/aos.css";
import ContactForm from "./ContactForm";
function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light nav-custom fixed-top">
        <div className="container-fluid">
          <a className="navbar-brand" href="#aboutme">
            <img
              id="img"
              src="https://api.freelogodesign.org/files/9ac12218f54f4f118e02638ae9340dc8/thumb/logo_200x200.png?v=0"
              alt=""
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" aria-current="page" href="#aboutme">
                  About Me
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#skills">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#projects">
                  Projects
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact Me
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="sectioncontainer" id="aboutme">
        <section id="about" data-aos="fade-right">
          <p className="invis">HI</p>
          <div className="mepage">
            <img src={photo4} alt="" className="pic" />
            <div className="aboutme">
              <div className="bigtext">
                <h1 id="aboutme">About Me</h1>

                <h1 id="desc">Web Designer · Graphic Designer · Student</h1>
              </div>
              <p id="me">
                Hi, I'm Sahil Reddy, a 9th Grade Student with a passion for
                Computer Science. Outside of coding, some of my hobbies are
                soccer, volleyball, and hanging out with friends. If you want to
                have a chat please send me an email in the form submission down
                below!
              </p>
            </div>
          </div>
        </section>
        <section id="skills">
          <p className="invis">HI</p>
          <p className="invis">HI</p>

          <h1 className="skill" data-aos="zoom-out">
            Skills
          </h1>
          <div data-aos="fade-right">
            <h2 className="frontend smalltext">Front-End Technologies</h2>
            <div className="frontend Tech">
              <Tech title={"HTML"}></Tech>
              <Tech title={"CSS"}></Tech>
              <Tech title={"Javascript"}></Tech>
              <Tech title={"Bootstrap"}></Tech>
              <Tech title={"React"}></Tech>
            </div>

            <h2 className="backend smalltext">Back-End Technologies</h2>
            <div className="backend Tech">
              <Tech title={"Python"}></Tech>
              <Tech title={"C++"}></Tech>
              <Tech title={"Django"}></Tech>
            </div>
          </div>
        </section>

        <section id="projects">
          <h1 id="projhead" data-aos="flip-up">
            Projects
          </h1>
          <div className="projects" data-aos="zoom-in">
            <Project
              title={"Weather App"}
              image={photo1}
              link={"https://github.com/25sreddy/Weather-Website"}
              text={
                "This project was built using React. It is able to track weather from any city using a weather API. This project taught me a lot about React and using the backend."
              }
            ></Project>
            <Project
              title={"Portfolio Website"}
              image={photo3}
              text={
                "This very website is one of my biggest projects. From the HTML to the CSS it was challenging but in the end I came out as a much better programmer and learned a lot from this project."
              }
            ></Project>
            <Project
              title={"Recipe App"}
              image={photo}
              link={
                "https://github.com/25sreddy/Recipe-App/tree/main/recipeapp"
              }
              text={
                "This project once again was built with React. This recipe app is able to generate a list of recipes simply based upon the name of the food. It displays the name of the food, the calorie count, what meal type it is, and the its recipe."
              }
            ></Project>
          </div>
        </section>
        <section id="contact">
          <h1 className="contactheader" data-aos="flip-up">
            Contact Me
          </h1>
          <ContactForm />
        </section>
      </div>
    </div>
  );
}

export default App;
