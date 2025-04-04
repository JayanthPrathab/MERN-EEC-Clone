import "../css/ome.css";
import filler from "../assets/stu.jpg";
const Home = () => {
  return (
    <div>
        <p className="name">Aptitude Guru Hem</p>
        <div className="about">
          <p>
            Where Success Meets Opportunity! Are you ready to embark on a
            transformative journey towards success? At Aptitude Guru Hem, we are
            committed to providing you with the essential skills and knowledge
            to excel in your professional endeavors. Our expert training in
            aptitude and coding equips you to conquer every challenge, from
            company interview assessments to prestigious coding platforms like
            <span className="sp1"> LeetCode</span>,{" "}
            <span className="sp2">GeeksForGeeks</span>,{" "}
            <span className="sp3">HackerRank</span> , and more.
          </p>
        </div> <br />
        <div className="buttons">
          <button className="b1">Start your learning</button>
          <button className="b2">Join Live Demo</button>
        </div> 
        <img className="i1" src={filler} alt="" />
      
    </div>
  );
};
export default Home;
