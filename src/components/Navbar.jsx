import logo from "../assets/logo.png";
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
          <span className="cart">🛒</span>
          <button>LogIn</button>
          <button className="signupbut">Signup</button>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
