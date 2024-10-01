import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faThumbsUp,
  faShoppingCart,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div
      className="container-fluid p-2"
      style={{
        backgroundColor: "#454D55",
      }}
    >
      <div className="row p-2">
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
      <div className="row px-2 col">
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
    </div>
  );
};

export default Dashboard;
