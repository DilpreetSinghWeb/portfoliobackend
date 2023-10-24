import React, { useState } from "react";
import "./info.css";
import {
  Check,
  KeyboardArrowDown,
  KeyboardArrowUp,
  TagFaces,
} from "@mui/icons-material";
const accordionData = [
  {
    index: 0,
    question: "Website Developer | UI/UX Designer !!",
    answer:
      "Combining web development expertise with UI/UX design skills to create visually stunning, user-friendly websites.",
  },
  {
    index: 1,
    question: "Responsive Design!!",
    answer:
      "Ensuring your website looks and works beautifully on all devices, delivering a consistent user experience.",
  },
  {
    index: 2,
    question: "Website Optimization!!",
    answer:
      "Speeding up loading times and enhancing search engine visibility for improved online performance.",
  },
];
const Info = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);
  const handleAccordionClick = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };
  return (
    <div className="info" id="info">
      <div className="heading">
        <h1>
          <span style={{ color: "#FE3838" }}>info ab</span>{" "}
          <span style={{ color: "#1a1a1a" }}>out us</span>
        </h1>
      </div>
      <div className="info_bg">
        <div className="info_container ">
          <div className="info_container_accordion">
            {accordionData.map((item, index) => (
              <div
                key={index}
                className={`accordion ${
                  expandedIndex === index ? "active" : ""
                }`}
                onClick={() => handleAccordionClick(index)}
              >
                <div className="accordion-question">
                  <h3>{item.question}</h3>
                  <i>
                    {expandedIndex === index ? (
                      <KeyboardArrowUp
                        className="icon"
                        style={{ transition: "transform .4s" }}
                      />
                    ) : (
                      <KeyboardArrowDown
                        className="icon"
                        style={{ transition: "transform .4s" }}
                      />
                    )}
                  </i>
                </div>
                <div
                  className="accordion-answer"
                  style={{
                    height: expandedIndex === index ? "110px" : "0px",
                    transition: "height .4s ",
                  }}
                >
                  <p className="fontWeight_300">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="info_container_boxes">
            <div className="info_container_box">
              <div className="icon">
                <Check />
              </div>
              <h4>Modern Design</h4>

              <p style={{fontWeight:"500"}}>
              Creating attractive, user-centric digital experiences with a modern approach.
              </p>
            </div>
            <div className="info_container_box">
              <div className="icon">
                <TagFaces />
              </div>
              <h4>Client Satisfaction</h4>
              <p style={{fontWeight:"500"}}>
              Enhancing client satisfaction with effective and  customized web designs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
