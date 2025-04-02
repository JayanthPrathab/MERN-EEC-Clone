import "../css/footer.css";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div>
        <br />
      <div className="footerlist">
        <div className="lo">
          <img className="logo" src={logo} alt="" />
        </div>
        <div className="lists">
          <ul>
            <li className="listHead">Company</li>
            <li>Home</li>
            <li>About Us</li>
            <li>Our Services</li>
            <li>My Courses</li>
            <li>Affiliate</li>
          </ul>

          <ul>
            <li className="listHead">Colleges</li>
            <li>Placement Prep</li>
            <li>Higher Studies Prep</li>
            <li>Goverment Jobs</li>
            <li>Aptitude Prep</li>
            <li>Technical Prep</li>
            <li>Aptitude+Technical Prep</li>
            <li>Service Based Company Prep</li>
            <li>Product Based Company Prep</li>
            <li>GRE</li>
            <li>GATE</li>
            <li>GMAT</li>
            <li>CAT/XAT/MAT</li>
          </ul>

          <ul>
            <li className="listHead">Schools</li>
            <li>IIT JEE</li>
            <li>NEET</li>
            <li>Maths Olympiad</li>
            <li>Science Olympiad</li>
            <li>Cyber Olympiad</li>
            <li>Package of All Olympiad</li>
            <li>Aptitude</li>
            <li>Mathematics</li>
            <li>NTSE</li>
            <li>Coding-C</li>
            <li>C++, Python, Java</li>
            <li>General Studies</li>
            <li>Tuition 1st-12th</li>
            <li>Quiz Competitions</li>
          </ul>

          <ul>
            <li className="listHead">Courses</li>
            <li>Placement Prep</li>
            <li>Higher Studies Prep</li>
            <li>Goverment Jobs Prep</li>
            <li>IIT JEE/NEET</li>
            <li>Olympiad Prep</li>
            <li>Coding Prep</li>
            <li>Tuitions 1st-12th</li>
          </ul>

          <ul>
            <li className="listHead">Exams</li>
            <li>CAT/XAT/MAT</li>
            <li>GRE/GMAT</li>
            <li>GATE</li>
            <li>IIT JEE/NEET</li>
            <li>SAP</li>
            <li>SSC/Bank Exams RRB</li>
            <li>TNPSC</li>
          </ul>

          <ul>
            <li className="listHead">Skill Development</li>
            <li>Web Development- FullStack</li>
            <li>Web Development-Frontend</li>
            <li>Web Development Backend</li>
            <li>Mobile Development</li>
            <li>Machine Learning</li>
            <li>Data Science</li>
            <li>Soft Skills</li>
            <li>Leadership Skills</li>
          </ul>
        </div>
        <div className="follow">
          <p className="followUs">Follow Us</p>
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/3d-fluency/94/instagram-logo.png"
            alt="instagram-logo"
          />
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/color/48/facebook-new.png"
            alt="facebook-new"
          />
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/fluency/48/linkedin.png"
            alt="linkedin"
          />
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/color/48/youtube-play.png"
            alt="youtube-play"
          />
          <img
            width="50"
            height="50"
            src="https://img.icons8.com/ios-glyphs/30/twitterx--v1.png"
            alt="twitterx--v1"
          />
        </div>
      </div><br />
      <center><div className="copy">
        <h6>&copy;2025 All Right Reserved By AGH</h6>
        <h6>Privacy Policy Refund & Cancellation Policy Terms & Conditions</h6>
      </div>
      </center>
    </div>
  );
};
export default Footer;
