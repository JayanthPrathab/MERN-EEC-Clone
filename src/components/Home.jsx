import "../css/ome.css";
import filler from "../assets/stu.jpg";
const Home = () => {
  return (
    <div>
      <center>
        <p className="name">Aptitude Guru Hem</p>
        <div className="about">
          <p>
            Where Success Meets Opportunity! Are you ready to embark on a
            transformative journey towards success? At Aptitude Guru Hem, we are
            committed to providing you with the essential skills and knowledge
            to excel in your professional endeavors. Our expert training in
            aptitude and coding equips you to conquer every challenge, from
            company interview assessments to prestigious coding platforms like{" "}
            <span className="sp1">LeetCode</span>,{" "}
            <span className="sp2">GeeksForGeeks</span>,{" "}
            <span className="sp3">HackerRank</span> , and more.
          </p>
        </div> <br />
        <div className="buttons">
          <button className="b1">Start your learning</button>
          <button className="b2">Join Live Demo</button>
        </div>
      </center> 
        <img className="i1" src={filler} alt="" />
      <center>
        <h1>A Symbol of Excellence in Placement Training</h1>
        <div className="aim">
          Aptitude Guru Hem was born from the aspiration to create a learning
          environment that inspires greatness. Our founder, driven by personal
          experiences and a desire to make a difference, established the company
          with a mission to empower students with the right skills and mindset
          for success.
        </div>
      </center><br />
      <div className="container">
        <div className="vision">
          <h2 className="vistit">Our Vision</h2>
          <div className="viscont">
            Our vision is to empower individuals from diverse backgrounds to
            become accomplished professionals. At Aptitude Guru Hem, we believe
            that knowledge has the power to transcend boundaries.
          </div>
        </div>
        <div></div>
        <div className="mission">
          <h2 className="mistit">Our Mission</h2>
          <div className="miscont">
            Our mission is to revolutionize education by providing comprehensive
            training in aptitude, coding, and web/mobile development. We foster
            a culture of inclusivity and personal growth.
          </div>
        </div>
      </div>
      <div className="reg">
        <div className="regcont">
            <div className="regcont2">Learners Today, Leaders Tomorrow</div>
            <div className="regcont1">With our continuous research and development, we provide you with an excellent Aptitude training.</div>
        </div>
        <div className="regbut">
            <button className="regnow">REGISTER NOW</button>
        </div>
      </div>
    </div>
  );
};
export default Home;
