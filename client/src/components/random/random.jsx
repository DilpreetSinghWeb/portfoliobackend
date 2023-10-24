import "./random.css";
// import "../Projects/projects.css";
import portfolio from "../../images/portfolio.png";
import speed_wheels from "../../images/speedWheels.png";
import ramen_shop from "../../images/ramenShop.png";
import blogoSphere from "../../images/blogosphere.png";

const random = () => {
  return (
    <div class="projects_container ">
      <div className="heading">
        <h1>
          <span style={{ color: "#FE3838" }}>proj</span>{" "}
          <span style={{ color: "#1a1a1a" }}>ects</span>
        </h1>
      </div>
      <div className="projects_container_boxes">
        <div class="projects_container_box image-projects_image_box">
          <img src={blogoSphere} alt="1" />
        </div>
        <div class="projects_container_box ">
          <img src={speed_wheels} alt="2" />
          <div className="projects_container_box_text">
            <h3>Project 1</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              delectus perspiciatis.
            </p>
            <div className="projects_container_box_text_lng ">
              <div className="language">
                <div className="circle"></div>
                <p>
                  <b>HTML</b>
                </p>
              </div>
              <div className="language ">
                <div className="circle"></div>
                <p>
                  <b>HTML</b>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="projects_container_box ">
          <img src={portfolio} alt="3" />
          <h2>Heading 3</h2>
          <p>This is a description with 30 words or less.</p>
          <button>Button</button>
        </div>
        <div class="projects_container_box ">
          <img src={ramen_shop} alt="4" />
          <h2>Heading 4</h2>
          <p>This is a description with 30 words or less.</p>
          <button>Button</button>
        </div>
        <div class="projects_container_box ">
          <img src={blogoSphere} alt="5" />
          <h2>Heading 5</h2>
          <p>This is a description with 30 words or less.</p>
          <button>Button</button>
        </div>
      </div>
    </div>
  );
};

export default random;
