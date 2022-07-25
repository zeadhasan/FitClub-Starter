import React from "react";
import "./Programs.css";
import { programsData } from "../../data/programsData.js";
import rightArrow from "../../assets/rightArrow.png";

const Programs = () => {
  return (
    <div id="programs" className="Programs">
      {/* Programs Header start*/}
      <div className="programs-header">
        <span className="stroke-text">EXPLORE OUR</span>
        <span>PROGRAMS</span>
        <span className="stroke-text">TO SHAPE YOU</span>
      </div>
      {/* Programs Header end*/}
      <div className="programs-categories">
        {programsData.map((program) => (
          <div className="category">
            {program.image}
            <span>{program.heading}</span>
            <span>{program.details}</span>
            <div className="join-now">
              {" "}
              <span>Join Now</span> <img src={rightArrow} alt="" />{" "}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
