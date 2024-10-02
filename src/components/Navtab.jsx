import AdminLTELogo from "../assets/AdminLTELogo.webp";

const Navtab = () => {
  return (
    <div className="row p-1 border-bottom border-light-subtle bg-dark text-white">
      <div className="gap-2 d-flex align-items-center">
        <img style={{ width: "35px" }} src={AdminLTELogo} alt="logo" />
        <p className="fs-6 mt-2 ">AdminLTE 3</p>
      </div>
    </div>
  );
};

export default Navtab;
