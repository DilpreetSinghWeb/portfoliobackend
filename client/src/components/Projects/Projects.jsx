import "./projects.css";
// import "./../../main.css";
import LaunchIcon from "@mui/icons-material/Launch";
import projects_Photo from "../../images/octavian-dan-b21Ty33CqVs-unsplash.jpg";
import portfolio from "../../images/portfolio.png";
import speed_wheels from "../../images/speedWheels.png";
import ramen_shop from "../../images/ramenShop.png";
import blogoSphere from "../../images/blogosphere.png";

const Projects = () => {
  return (
    <div className="projects ">
      <div className="projects_container" id="projects">
        <div className="heading">
          <h1>
            <span style={{ color: "#FE3838" }}>proj</span>{" "}
            <span style={{ color: "#1a1a1a" }}>ects</span>
          </h1>
        </div>
        <div className="projects_container_boxes">
          <div className="projects_container_box projects_image_box">
            <img src={projects_Photo} alt="All_Projects_img" />
          </div>
          <div className="projects_container_box content-box">
            <div className="projects_container_box_img">
              <img src={portfolio} alt="Portfolio" />
            </div>
            <div className="projects_container_box_text">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3>My Portfolio </h3>
                <p className="fw_500" style={{ textDecoration: "underline" }}>
                  Full Stack Project
                </p>
              </div>
              <p>
              I've crafted my portfolio website highlighting my web development projects and personal info, integrating both frontend and backend expertise.
              </p>
              <div className="projects_container_box_text_lng ">
                <div className="language">
                  <div className="circle"></div>
                  <p>
                    <b>REACT</b>
                  </p>
                </div>
                <div className="language ">
                  <div className="circle"></div>
                  <p>
                    <b>NODEJS</b>
                  </p>
                </div>
                <div className="language ">
                  <div className="circle"></div>
                  <p>
                    <b>MONGODB</b>
                  </p>
                </div>
              </div>
              <div>
                <button className="button">
                  Preview
                  <LaunchIcon style={{ fontSize: "1rem" }} />
                </button>
              </div>
            </div>
          </div>
          <div className="projects_container_box content-box">
            <div className="projects_container_box_img">
              <img src={speed_wheels} alt="Speed_wheels_second_project_img" />
            </div>
            <div className="projects_container_box_text">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3>Speed Wheels</h3>
                <p className="fw_500" style={{ textDecoration: "underline" }}>Frontend Project</p>
              </div>
              <p>
              I've built 'Speed Wheels,' a React-based car collection website with a unique, eye-catching user interface for an exceptional browsing experience.
              </p>
              <div className="projects_container_box_text_lng ">
                <div className="language">
                  <div className="circle"></div>
                  <p>
                    <b>HTML | CSS | JS </b>
                  </p>
                </div>
                <div className="language ">
                  <div className="circle"></div>
                  <p>
                    <b>REACT</b>
                  </p>
                </div>
              </div>
              <div>
                <button className="button">
                  Preview
                  <LaunchIcon style={{ fontSize: "1rem" }} />
                </button>
              </div>
            </div>
          </div>
          <div className="projects_container_box content-box">
            <div className="projects_container_box_img">
              <img src={ramen_shop} alt="" />
            </div>
            <div className="projects_container_box_text">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3>Ramen Shop</h3>
                <p className="fw_500" style={{ textDecoration: "underline" }}>Frontend Project</p>
              </div>
              <p>
              I've created "The Ramen Shop" website using HTML, CSS, and JS, showcasing dishes, services, and interactive maps for an engaging experience.
              </p>
              <div className="projects_container_box_text_lng ">
                <div className="language">
                  <div className="circle"></div>
                  <p>
                    <b>HTML | CSS | JS</b>
                  </p>
                </div>
              </div>
              <div>
                <button className="button">
                  Preview
                  <LaunchIcon style={{ fontSize: "1rem" }} />
                </button>
              </div>
            </div>
          </div>
          <div className="projects_container_box content-box">
            <div className="projects_container_box_img">
              <img src={blogoSphere} alt="" />
            </div>
            <div className="projects_container_box_text">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3>BlogoSphere</h3>
                <p className="fw_500" style={{ textDecoration: "underline" }}>
                  Full Stack Project
                </p>
              </div>
              <p>
              I've built "Blogosphere," a secure website with MongoDB integration for user data storage, featuring validated login/registration and a user-friendly blog interface.
              </p>
              <div className="projects_container_box_text_lng ">
                <div className="language">
                  <div className="circle"></div>
                  <p>
                    <b>HTML | CSS | JS</b>
                  </p>
                </div>
                <div className="language ">
                  <div className="circle"></div>
                  <p>
                    <b>EXPRESSJS (Nodejs)</b>
                  </p>
                </div>
                <div className="language ">
                  <div className="circle"></div>
                  <p>
                    <b>MONGODB</b>
                  </p>
                </div>
                <div className="language ">
                  <div className="circle"></div>
                  <p>
                    <b>EJS</b>
                  </p>
                </div>
              </div>
              <div>
                <button className="button">
                 <a href="https://blogosphere-uiag.onrender.com" target="_blank" >Preview</a> 
                  <LaunchIcon style={{ fontSize: "1rem" }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
