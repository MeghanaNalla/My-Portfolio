import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Meghana Reddy </span>
            from <span className="purple"> New Jersey, USA.</span>
            <br /> I am a student pursuing Masters at Rowan University, New Jersey.
            <br />
            Additionally, I have worked as a Systems Engineer at Infosys Limited for 1.5 years.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Hiking 🏞️
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling ✈
            </li>
            <li className="about-activity">
              <ImPointRight /> listening music ♫
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
