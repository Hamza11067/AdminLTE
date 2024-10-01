import AdminLTELogo from "../assets/AdminLTELogo.webp";
import AlexanderPierce from "../assets/Alexander-Pierce.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faTachometerAlt,
  faTh,
  faCopy,
  faChartPie,
  faTree,
  faEdit,
  faTable,
  faCalendarAlt,
  // faImage,
  // faColumns,
  // faEnvelope,
  // faBook,
  // faPlusSquare,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <>
      <div className="container-fluid p-0 shadow-lg ">
        <div className="row p-1 border-bottom border-light-subtle bg-dark text-white">
          <div className="gap-2 d-flex align-items-center">
            <img style={{ width: "35px" }} src={AdminLTELogo} alt="logo" />
            <p className="fs-6 mt-2 ">AdminLTE 3</p>
          </div>
        </div>
        {/* Slider in Siderbar Starts here */}
        <div className="row p-2 border-bottom border-light bg-dark text-white">
          <div className="gap-2 d-flex align-items-center">
            <img
              className="rounded-circle"
              style={{ width: "35px" }}
              src={AlexanderPierce}
              alt="pic"
            />
            <p className="fs-6 mt-2 ">Alexander Pierce</p>
          </div>
        </div>
        {/* Input box starts here */}
        <div className="row px-1 py-2 bg-dark text-white">
          <div className="mt-2  d-flex align-items-center p-0 rounded border border-light-subtle">
            <input
              className="form-control bg-dark text-white placeholder-white"
              style={{
                outline: "none",
                boxShadow: "none",
              }}
              type="text"
              placeholder="Search"
            />
            <div className="p-2 d-flex align-items-center justify-content-center ">
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
        </div>

        {/* Dropdowns Start Here -----------------------------------------------------*/}

        {/* dashboard */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link px-3 py-2 rounded bg-primary text-white d-flex justify-content-between align-items-center"
            href="#"
            role="button"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faTachometerAlt} className="fa-lg" />
              <span className="ms-2 fw-semibold">Dashboard</span>
            </div>
          </a>
        </div>
        {/* widgets */}
        <div className="row px-2 py-1 bg-dark">
          <div
            className="px-3 py-2 rounded bg-dark-subtle text-white d-flex justify-content-between align-items-center"
            href="#"
            role="button"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faTh} className="fa-lg" />
              <span className="ms-2 fw-semibold">Widgets</span>
            </div>
            <p
              className="m-0 px-1 fw-bold rounded bg-danger text-white"
              style={{ fontSize: "12px" }}
            >
              New
            </p>
          </div>
        </div>
        {/* layout options */}

        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link dropdown-toggle px-3 py-2 rounded bg-dark-subtle text-white d-flex justify-content-between align-items-center collapsed"
            href="#"
            id="dashboardDropdown2"
            role="button"
            data-bs-toggle="collapse"
            data-bs-target="#dashboardMenu2"
            aria-expanded="false"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCopy} className="fa-lg" />
              <span className="ms-2 fw-semibold">Layout Options</span>
            </div>
          </a>
          <ul className="list-group p-0 mt-2 collapse" id="dashboardMenu2">
            <li className="list-group-item">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="layoutRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Top Navigation
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="layoutRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Fixed Sidebar
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="layoutRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label className="form-check-label m-0" htmlFor="inlineRadio3">
                  Boxed
                </label>
              </div>
            </li>
          </ul>
        </div>
        {/* charts */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link dropdown-toggle px-3 py-2 rounded bg-dark-subtle text-white d-flex justify-content-between align-items-center collapsed"
            href="#"
            id="chartDropdown"
            role="button"
            data-bs-toggle="collapse"
            data-bs-target="#chartMenu"
            aria-expanded="false"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faChartPie} className="fa-lg" />
              <span className="ms-2 fw-semibold">Charts</span>
            </div>
          </a>
          <ul className="list-group p-0 mt-2 collapse" id="chartMenu">
            <li className="list-group-item">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="chartRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  ChartJS
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="chartRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Flot
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="chartRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label className="form-check-label m-0" htmlFor="inlineRadio3">
                  Inline
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="chartRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label className="form-check-label m-0" htmlFor="inlineRadio3">
                  uPlot
                </label>
              </div>
            </li>
          </ul>
        </div>
        {/* UI elements */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link dropdown-toggle px-3 py-2 rounded bg-dark-subtle text-white d-flex justify-content-between align-items-center collapsed"
            href="#"
            id="chartDropdown"
            role="button"
            data-bs-toggle="collapse"
            data-bs-target="#uiMenu"
            aria-expanded="false"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faTree} className="fa-lg" />
              <span className="ms-2 fw-semibold">UI Elements</span>
            </div>
          </a>
          <ul className="list-group p-0 mt-2 collapse" id="uiMenu">
            <li className="list-group-item">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="uiRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  General
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="uiRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Icons
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="chartRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label className="form-check-label m-0" htmlFor="inlineRadio3">
                  Buttons
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="chartRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label className="form-check-label m-0" htmlFor="inlineRadio3">
                  Sliders
                </label>
              </div>
            </li>
          </ul>
        </div>
        {/* forms */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link dropdown-toggle px-3 py-2 rounded bg-dark-subtle text-white d-flex justify-content-between align-items-center collapsed"
            href="#"
            id="chartDropdown"
            role="button"
            data-bs-toggle="collapse"
            data-bs-target="#formMenu"
            aria-expanded="false"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faEdit} className="fa-lg" />
              <span className="ms-2 fw-semibold">Forms</span>
            </div>
          </a>
          <ul className="list-group p-0 mt-2 collapse" id="formMenu">
            <li className="list-group-item">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="formRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  General
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="formRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Icons
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="formRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label className="form-check-label m-0" htmlFor="inlineRadio3">
                  Buttons
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="formRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label className="form-check-label m-0" htmlFor="inlineRadio3">
                  Sliders
                </label>
              </div>
            </li>
          </ul>
        </div>
        {/* tables */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link dropdown-toggle px-3 py-2 rounded bg-dark-subtle text-white d-flex justify-content-between align-items-center collapsed"
            href="#"
            id="chartDropdown"
            role="button"
            data-bs-toggle="collapse"
            data-bs-target="#tableMenu"
            aria-expanded="false"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faTable} className="fa-lg" />
              <span className="ms-2 fw-semibold">Tables</span>
            </div>
          </a>
          <ul className="list-group p-0 mt-2 collapse" id="tableMenu">
            <li className="list-group-item">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="tableRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  SimpleTables
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="tableRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  DataTables
                </label>
              </div>
            </li>
            <li className="list-group-item">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input"
                  type="radio"
                  name="tableRadioOptions"
                  id="inlineRadio3"
                  value="option3"
                />
                <label className="form-check-label m-0" htmlFor="inlineRadio3">
                  jsGrid
                </label>
              </div>
            </li>
          </ul>
        </div>
        {/* --------------------------------EXAMPLES-------------------------------------- */}

        <div className="row px-3 py-2 bg-dark text-white fw-semibold ">
          EXAMPLES
        </div>

        {/* calender */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link px-3 py-2 rounded bg-dark-subtle text-white d-flex justify-content-between align-items-center"
            href="#"
            role="button"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCalendarAlt} className="fa-lg" />
              <span className="ms-2 fw-semibold">Calender</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
