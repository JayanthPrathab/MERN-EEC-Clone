import logo from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import "../css/navbar.css";
const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <ul className="logoelem">
          <li>
            <img className="logo1" src={logo} alt="" />
          </li>
          <li className="elem">Home</li>
          <li className="elem">About Us</li>
          <li className="elem">Our Services</li>
          <li className="elem">My Courses</li>
        </ul>
        <div className="signinbut">
        <FontAwesomeIcon className="cart1" icon={faCartShopping} />
          <button>LogIn</button>
          <button className="signupbut">Signup</button>
        </div>
      </div>
      <div className="menubar">
        <div>
          <img className="logo1" src={logo} alt="" />
        </div>
        <div className="cart">
          <FontAwesomeIcon icon={faCartShopping} />
          <FontAwesomeIcon icon={faBars} />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
