import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import DashboardPNG from "../assets/dashboard.png";
import {
  faGear,
  faThumbsUp,
  faShoppingCart,
  faUsers,
  faMinus,
  faWrench,
  faTimes,
  faCaretDown,
  faCaretLeft,
  faCaretUp,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div
      className="container-fluid py-4 px-2 flaot-end"
      style={{
        backgroundColor: "#454D55",
      }}
    >
      <div className="row">
        <div className="d-flex align-items-center justify-content-between">
          <div className="text-white">
            <h3>Dashboard</h3>
          </div>
          <div className="d-flex ">
            <p className="text-primary">Home</p>
            <p className="text-secondary">/ Dashboard</p>
          </div>
        </div>
      </div>
      {/* four cards are here */}
      <div className="row col">
        <div className="col-md-3 p-2">
          <div className="bg-dark p-2 text-white rounded d-flex align-items-center justify-content-start">
            <FontAwesomeIcon
              icon={faGear}
              className="p-3 rounded"
              style={{
                backgroundColor: "#128293",
                fontSize: "2rem",
              }}
            />
            <div className="px-2 d-flex flex-column gap-2">
              <p className="m-0">CPU Traffic</p>
              <p className="m-0 text-white fw-bold">10%</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 p-2">
          <div className="bg-dark p-2 text-white rounded d-flex align-items-center justify-content-start">
            <FontAwesomeIcon
              icon={faThumbsUp}
              className="p-3 rounded"
              style={{
                backgroundColor: "#A51D2A",
                fontSize: "2rem",
              }}
            />
            <div className="px-2 d-flex flex-column gap-2">
              <p className="m-0">CPU Traffic</p>
              <p className="m-0 text-white fw-bold">10%</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 p-2">
          <div className="bg-dark p-2 text-white rounded d-flex align-items-center justify-content-start">
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="p-3 rounded"
              style={{
                backgroundColor: "#28A745",
                fontSize: "2rem",
              }}
            />
            <div className="px-2 d-flex flex-column gap-2">
              <p className="m-0">CPU Traffic</p>
              <p className="m-0 text-white fw-bold">10%</p>
            </div>
          </div>
        </div>
        <div className="col-md-3 p-2">
          <div className="bg-dark p-2 text-white rounded d-flex align-items-center justify-content-start">
            <FontAwesomeIcon
              icon={faUsers}
              className="p-3 rounded"
              style={{
                backgroundColor: "#FFC107",
                fontSize: "2rem",
              }}
            />
            <div className="px-2 d-flex flex-column gap-2">
              <p className="m-0">CPU Traffic</p>
              <p className="m-0 text-white fw-bold">10%</p>
            </div>
          </div>
        </div>
      </div>
      {/* monthly recap report */}
      <div className="row p-2 rounded">
        <div className="bg-dark py-2 border-bottom border-dark-body d-flex align-items-center justify-content-between">
          <p className="m-0">Monthly Recap report</p>
          <div className="">
            <FontAwesomeIcon icon={faMinus} className="px-2 cursor-pointer" />
            <FontAwesomeIcon icon={faWrench} className="px-2" />
            <FontAwesomeIcon icon={faTimes} className="px-2" />
          </div>
        </div>
        {/* chart */}
        <div className="container-fluid">
          <div className="row p-2 py-4 bg-dark">
            <div className="col-md-8">
              <p className="text-center fs-6 m-0 fw-semibold py-2">
                Sales: 1 Jan, 2014 - 30 Jul, 2014
              </p>
              <img src={DashboardPNG} alt="dashboard chart" />
            </div>
            <div className="col-md-4  pe-4">
              <p className="text-center fs-6 m-0 fw-semibold py-2">
                Goal Completion
              </p>
              <div className="row py-1">
                <div className="p-0 d-flex align-items-center justify-content-between">
                  <p className="m-0">Add products to cart</p>
                  <p className="m-0">
                    <span className="fw-semibold">160</span>/200
                  </p>
                </div>
                <div
                  className="progress p-0 rounded-0"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: "10px", backgroundColor: "#454D55" }}
                >
                  <div className="progress-bar" style={{ width: "80%" }}></div>
                </div>
              </div>
              <div className="row py-1">
                <div className="p-0 d-flex align-items-center justify-content-between">
                  <p className="m-0">Complete Purchase</p>
                  <p className="m-0">
                    <span className="fw-semibold">310</span>/400
                  </p>
                </div>
                <div
                  className="progress p-0 rounded-0"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: "10px", backgroundColor: "#454D55" }}
                >
                  <div className="progress-bar bg-danger w-75"></div>
                </div>
              </div>
              <div className="row py-1">
                <div className="p-0 d-flex align-items-center justify-content-between">
                  <p className="m-0">Visit Premium Page</p>
                  <p className="m-0">
                    <span className="fw-semibold">480</span>/800
                  </p>
                </div>
                <div
                  className="progress p-0 rounded-0"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="60"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: "10px", backgroundColor: "#454D55" }}
                >
                  <div
                    className="progress-bar bg-success"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div>
              <div className="row py-1">
                <div className="p-0 d-flex align-items-center justify-content-between">
                  <p className="m-0">Send Inquiries</p>
                  <p className="m-0">
                    <span className="fw-semibold">250</span>/500
                  </p>
                </div>
                <div
                  className="progress p-0 rounded-0"
                  role="progressbar"
                  aria-label="Basic example"
                  aria-valuenow="50"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ height: "10px", backgroundColor: "#454D55" }}
                >
                  <div className="progress-bar bg-warning w-50"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* numbers */}
        <div className="container-fluid">
          <div className="row bg-dark p-2">
            <div className="col-md-3 text-center border-end border-white">
              <p className="text-success m-0">
                <FontAwesomeIcon icon={faCaretUp} />
                17%
              </p>
              <p className="fw-semibold m-0">$35,210.43</p>
              <p>TOTAL REVENUE</p>
            </div>
            <div className="col-md-3 text-center border-end border-white">
              <p className="text-warning m-0">
                <FontAwesomeIcon icon={faCaretLeft} />
                0%
              </p>
              <p className="fw-semibold m-0">$10,390.90</p>
              <p>TOTAL COST</p>
            </div>
            <div className="col-md-3 text-center border-end border-white">
              <p className="text-success m-0">
                <FontAwesomeIcon icon={faCaretUp} />
                20%
              </p>
              <p className="fw-semibold m-0">$24,813.53</p>
              <p>TOTAL PROFIT</p>
            </div>
            <div className="col-md-3 text-center">
              <p className="text-danger m-0">
                <FontAwesomeIcon icon={faCaretDown} />
                18%
              </p>
              <p className="fw-semibold m-0">1200</p>
              <p>GOAL COMPLETIONS</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
