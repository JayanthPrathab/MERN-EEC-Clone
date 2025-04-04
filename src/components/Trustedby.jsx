import "../css/trustedby.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBuildingColumns,
  faChalkboardUser,
  faBook,
  faUserGraduate,
} from "@fortawesome/free-solid-svg-icons";
const Trustedby = () => {
  const trustData = [
    {
      count: "70",
      description: "COLLEGES",
      icon: faBuildingColumns,
    },
    {
      count: "27",
      description: "PROFESSIONAL TRAINERS",
      icon: faChalkboardUser,
    },
    {
      count: "1000+",
      description: "STUDY MATERIALS",
      icon: faBook,
    },
    {
      count: "50000+",
      description: "STUDENTS",
      icon: faUserGraduate,
    },
  ];
  return (
    <div className="trcont">
      <p className="theading">Trusted By</p>
      <div className="tcont bl">
        <div className="tgrid">
          <div className="c1">
            <center>
              <div className="c4">
                <i class="fa-solid fa-building-columns"></i>
              </div>
            </center>
          </div>
          <div className="c2">
            <h3>70</h3>
            <h5>COLLEGES</h5>
          </div>
          <div className="c3"></div>
        </div>
        <div className="tgrid">
          <div className="ct1"></div>
          <div className="ct2">
            <h3>27</h3>
            <h5 className="prof">PROFESSIONAL TRAINERS</h5>
          </div>
          <div className="ct3">
            <center>
              <div className="ct4">
                <i class="fa-solid fa-chalkboard-user"></i>
              </div>
            </center>
          </div>
        </div>
        <div className="tgrid">
          <div className="cp1">
            <center>
              <div className="cp4">
                <i class="fa-solid fa-book"></i>
              </div>
            </center>
          </div>
          <div className="cp2">
            <h3>1000+</h3>
            <h5>STUDY MATERIALS</h5>
            <h6 className="he6y">AGH LMS</h6>
          </div>
          <div className="cp3"></div>
        </div>
        <div className="tgrid">
          <div className="cx1"></div>
          <div className="cx2">
            <h3>50000+</h3>
            <h5>STUDENTS</h5>
            <h6 className="he6r">B2B: Placement Training</h6>
          </div>
          <div className="cx3">
            <center>
              <div className="cx4">
                <i class="fa-solid fa-user-graduate"></i>
              </div>
            </center>
          </div>
        </div>
      </div>{" "}
      <br />
      <br />
    </div>
  );
};
export default Trustedby;
