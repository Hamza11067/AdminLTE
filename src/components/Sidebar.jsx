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
  faImage,
  faColumns,
  faEnvelope,
  faBook,
  faPlusSquare,
  faSearch,
  faEllipsisH,
  faFile,
  faCircle,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <>
      <div className="container-fluid p-0 shadow-lg">
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
            className="px-3 py-2 rounded bg-dark-body text-white d-flex justify-content-between align-items-center"
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
            className="nav-link dropdown-toggle px-3 py-2 rounded bg-dark-body text-white d-flex justify-content-between align-items-center collapsed"
            href="#"
            id="layoutDropdown"
            role="button"
            data-bs-toggle="collapse"
            data-bs-target="#layoutMenu"
            aria-expanded="false"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCopy} className="fa-lg" />
              <span className="ms-2 fw-semibold">Layout Options</span>
            </div>
          </a>
          <ul
            className="list-group list-group-flush p-0 mt-2 collapse"
            id="layoutMenu"
          >
            <li className="list-group-item bg-transparent text-white border-0">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
            <li className="list-group-item bg-transparent text-white border-0">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
            <li className="list-group-item bg-transparent text-white">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
            className="nav-link dropdown-toggle px-3 py-2 rounded bg-dark-body text-white d-flex justify-content-between align-items-center collapsed"
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
          <ul
            className="list-group list-group-flush p-0 mt-2 collapse"
            id="chartMenu"
          >
            <li className="list-group-item bg-transparent text-white border-0">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
            <li className="list-group-item bg-transparent text-white border-0">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
            <li className="list-group-item bg-transparent text-white">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
        {/* UI elements */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link dropdown-toggle px-3 py-2 rounded bg-dark-body text-white d-flex justify-content-between align-items-center collapsed"
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
          <ul
            className="list-group list-group-flush p-0 mt-2 collapse"
            id="uiMenu"
          >
            <li className="list-group-item bg-transparent text-white border-0">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
            <li className="list-group-item bg-transparent text-white border-0">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
            <li className="list-group-item bg-transparent text-white">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
        {/* forms */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link dropdown-toggle px-3 py-2 rounded bg-dark-body text-white d-flex justify-content-between align-items-center collapsed"
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
          <ul
            className="list-group list-group-flush p-0 mt-2 collapse"
            id="formMenu"
          >
            <li className="list-group-item bg-transparent text-white border-0">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
            <li className="list-group-item bg-transparent text-white border-0">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
            <li className="list-group-item bg-transparent text-white">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
        {/* tables */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link dropdown-toggle px-3 py-2 rounded bg-dark-body text-white d-flex justify-content-between align-items-center collapsed"
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
          <ul
            className="list-group list-group-flush p-0 mt-2 collapse"
            id="tableMenu"
          >
            <li className="list-group-item bg-transparent text-white border-0">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
                  type="radio"
                  name="layoutRadioOptions"
                  id="inlineRadio1"
                  value="option1"
                />
                <label className="form-check-label" htmlFor="inlineRadio1">
                  Simple Tables
                </label>
              </div>
            </li>
            <li className="list-group-item bg-transparent text-white border-0">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
                  type="radio"
                  name="layoutRadioOptions"
                  id="inlineRadio2"
                  value="option2"
                />
                <label className="form-check-label" htmlFor="inlineRadio2">
                  Data Tables
                </label>
              </div>
            </li>
            <li className="list-group-item bg-transparent text-white">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
                  type="radio"
                  name="layoutRadioOptions"
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
            className="nav-link px-3 py-2 rounded bg-dark-body text-white d-flex justify-content-between align-items-center"
            href="#"
            role="button"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCalendarAlt} className="fa-lg" />
              <span className="ms-2 fw-semibold">Calender</span>
            </div>
          </a>
        </div>
        {/* gallery */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link px-3 py-2 rounded bg-dark-body text-white d-flex justify-content-between align-items-center"
            href="#"
            role="button"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faImage} className="fa-lg" />
              <span className="ms-2 fw-semibold">Gallery</span>
            </div>
          </a>
        </div>
        {/* kanban board */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link px-3 py-2 rounded bg-dark-body text-white d-flex justify-content-between align-items-center"
            href="#"
            role="button"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faColumns} className="fa-lg" />
              <span className="ms-2 fw-semibold">Kanban Board</span>
            </div>
          </a>
        </div>
        {/* mailbox */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link dropdown-toggle px-3 py-2 rounded bg-dark-body text-white d-flex justify-content-between align-items-center collapsed"
            href="#"
            id="mailDropdown"
            role="button"
            data-bs-toggle="collapse"
            data-bs-target="#mailMenu"
            aria-expanded="false"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faEnvelope} className="fa-lg" />
              <span className="ms-2 fw-semibold">Mailbox</span>
            </div>
          </a>
          <ul
            className="list-group list-group-flush p-0 mt-2 collapse"
            id="mailMenu"
          >
            <li className="list-group-item bg-transparent text-white border-0">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
            <li className="list-group-item bg-transparent text-white border-0">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
            <li className="list-group-item bg-transparent text-white">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
        {/* pages */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link dropdown-toggle px-3 py-2 rounded bg-dark-body text-white d-flex justify-content-between align-items-center collapsed"
            href="#"
            id="pagesDropdown"
            role="button"
            data-bs-toggle="collapse"
            data-bs-target="#pagesMenu"
            aria-expanded="false"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faBook} className="fa-lg" />
              <span className="ms-2 fw-semibold">Pages</span>
            </div>
          </a>
          <ul
            className="list-group list-group-flush p-0 mt-2 collapse"
            id="pagesMenu"
          >
            <li className="list-group-item bg-transparent text-white border-0">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
            <li className="list-group-item bg-transparent text-white border-0">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
            <li className="list-group-item bg-transparent text-white">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
        {/* extras */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link dropdown-toggle px-3 py-2 rounded bg-dark-body text-white d-flex justify-content-between align-items-center collapsed"
            href="#"
            id="extrasDropdown"
            role="button"
            data-bs-toggle="collapse"
            data-bs-target="#extrasMenu"
            aria-expanded="false"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faPlusSquare} className="fa-lg" />
              <span className="ms-2 fw-semibold">Extras</span>
            </div>
          </a>
          <ul
            className="list-group list-group-flush p-0 mt-2 collapse"
            id="extrasMenu"
          >
            <li className="list-group-item bg-transparent text-white border-0">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
            <li className="list-group-item bg-transparent text-white border-0">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
            <li className="list-group-item bg-transparent text-white">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
        {/* search */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link dropdown-toggle px-3 py-2 rounded bg-dark-body text-white d-flex justify-content-between align-items-center collapsed"
            href="#"
            id="searchDropdown"
            role="button"
            data-bs-toggle="collapse"
            data-bs-target="#searchMenu"
            aria-expanded="false"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faSearch} className="fa-lg" />
              <span className="ms-2 fw-semibold">Search</span>
            </div>
          </a>
          <ul
            className="list-group list-group-flush p-0 mt-2 collapse"
            id="searchMenu"
          >
            <li className="list-group-item bg-transparent text-white border-0">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
            <li className="list-group-item bg-transparent text-white border-0">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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
            <li className="list-group-item bg-transparent text-white">
              <div className="form-check form-check-inline">
                <input
                  className="form-check-input bg-transparent"
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

        {/* --------------------------------MISCELLANEOUS-------------------------------------- */}

        <div className="row px-3 py-2 bg-dark text-white fw-semibold ">
          MISCELLANEOUS
        </div>

        {/* iframe */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link px-3 py-2 rounded bg-dark-body text-white d-flex justify-content-between align-items-center"
            href="#"
            role="button"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faEllipsisH} className="fa-lg" />
              <span className="ms-2 fw-semibold">IFrame Plugin</span>
            </div>
          </a>
        </div>
        {/* documentation */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link px-3 py-2 rounded bg-dark-body text-white d-flex justify-content-between align-items-center"
            href="#"
            role="button"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faFile} className="fa-lg" />
              <span className="ms-2 fw-semibold">Documentation</span>
            </div>
          </a>
        </div>

        {/* --------------------------------Multi Level Example-------------------------------------- */}

        <div className="row px-3 py-2 bg-dark text-white fw-semibold ">
          MULTI LEVEL EXAMPLE
        </div>
        {/* level 1 */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link px-3 py-2 rounded bg-dark-body text-white d-flex justify-content-between align-items-center"
            href="#"
            role="button"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCircle} className="fa-lg" />
              <span className="ms-2 fw-semibold">Level 1</span>
            </div>
          </a>
        </div>
        {/* level 2 */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link px-3 py-2 rounded bg-dark-body text-white d-flex justify-content-between align-items-center"
            href="#"
            role="button"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCircle} className="fa-lg" />
              <span className="ms-2 fw-semibold">Level 2</span>
            </div>
          </a>
        </div>
        {/* level 3 */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link px-3 py-2 rounded bg-dark-body text-white d-flex justify-content-between align-items-center"
            href="#"
            role="button"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCircle} className="fa-lg" />
              <span className="ms-2 fw-semibold">Level 3</span>
            </div>
          </a>
        </div>

        {/* --------------------------------Multi Level Example-------------------------------------- */}

        <div className="row px-3 py-2 bg-dark text-white fw-semibold ">
          LABELS
        </div>
        {/* important */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link px-3 py-2 rounded bg-dark-body text-white d-flex justify-content-between align-items-center"
            href="#"
            role="button"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCircle} className="fa-lg text-danger" />
              <span className="ms-2 fw-semibold">Impotant</span>
            </div>
          </a>
        </div>
        {/* warning */}
        <div className="row px-2 py-1 bg-dark">
          <a
            className="nav-link px-3 py-2 rounded bg-dark-body text-white d-flex justify-content-between align-items-center"
            href="#"
            role="button"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCircle} className="fa-lg text-warning" />
              <span className="ms-2 fw-semibold">Warning</span>
            </div>
          </a>
        </div>
        {/* informational */}
        <div className="row px-2 py-1 pb-4 bg-dark">
          <a
            className="nav-link px-3 py-2 rounded bg-dark-body text-white d-flex justify-content-between align-items-center"
            href="#"
            role="button"
          >
            <div className="d-flex align-items-center">
              <FontAwesomeIcon icon={faCircle} className="fa-lg text-primary" />
              <span className="ms-2 fw-semibold">Informantional</span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
