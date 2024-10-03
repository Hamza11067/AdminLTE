import "bootstrap-icons/font/bootstrap-icons.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg position-fixed col-10 bg-black text-white border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="#">
          <i className="bi bi-list" />
        </a>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a
                className="nav-link active text-white"
                aria-current="page"
                href="#"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contact
              </a>
            </li>
          </ul>
          <div className="d-flex gap-4">
            <i className="bi bi-search"></i>
            <i className="bi bi-wechat"></i>
            <i className="bi bi-bell"></i>
            <i className="bi bi-arrows-angle-expand"></i>
            <i className="bi bi-grid-fill"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
