import "../css/promise.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faTabletScreenButton,
  faPeopleGroup,
  faDiamondTurnRight,
  faLifeRing,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

const Promise = () => {
  const promiseData = [
    {
      title: "Top Code Quality",
      description:
        "Our commitment goes beyond mere code - it encompasses providing solutions. You receive W3C fully compliant markup, without any compromise on quality.",
      icon: faLaptopCode,
      color: "rgb(68, 178, 179)",
    },
    {
      title: "Responsive",
      description:
        "We understand the value of a positive attitude, timely responsiveness, and adaptability. We're dedicated to attentively listening and leveraging our utmost capabilities to serve you.",
      icon: faTabletScreenButton,
      color: "rgb(239, 175, 75)",
    },
    {
      title: "Rockstar Team",
      description:
        "Our commitment goes beyond mere code - it encompasses providing solutions. You receive W3C fully compliant markup, without any compromise on quality.",
      icon: faPeopleGroup,
      color: "rgb(0, 189, 235)",
    },
    {
      title: "Fast turn-arounds",
      description:
        "Our commitment goes beyond mere code - it encompasses providing solutions. You receive W3C fully compliant markup, without any compromise on quality.",
      icon: faDiamondTurnRight,
      color: "rgb(134, 74, 249)",
    },
    {
      title: "Life-time Support",
      description:
        "Our commitment goes beyond mere code - it encompasses providing solutions. You receive W3C fully compliant markup, without any compromise on quality.",
      icon: faLifeRing,
      color: "rgb(252, 41, 71)",
    },
    {
      title: "Secured Agreement",
      description:
        "Our commitment goes beyond mere code - it encompasses providing solutions. You receive W3C fully compliant markup, without any compromise on quality.",
      icon: faShieldHalved,
      color: "rgb(50, 199, 102)",
    },
  ];
  return (
    <div className="promcont">
      <center>
        <p className="promheading">Our Promise</p>
        <p className="bo">
          As part of our high quality service, we'd like to offer something
          extra too.
        </p>
      </center>
      
      <div className="container">
      {promiseData.map((item, index) => (
        <div className="gridit" key={index} style={{borderTop:` 3px solid ${item.color}`}}>
          <div className="head" key={index}>
            <FontAwesomeIcon icon={item.icon} style={{color:`${item.color}`}} /> {item.title}
          </div>
          <div className="body">{item.description}</div>
        </div>
      ))}</div>
    </div>
  );
};
export default Promise;
