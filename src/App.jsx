import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Navtab from "./components/Navtab";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="container-fluid  height-100">
      <div className="row">
        <div className="col-md-2">
          <Navtab />
        </div>
        <div className="col-md-10 ms-auto p-0 position-fixe float-end height-100 text-white">
          <Navbar />
        </div>
      </div>

      <div className="row height-100">
        <div
          className="col-md-2 position-fixed pt-0 pb-5 sidebarcontainer side height-100 sidebar"
          style={{ backgroundColor: "#343A40" }}
        >
          <Sidebar />
        </div>
        <div
          className="col-md-10 ms-auto float-end height-100 text-white"
          style={{ backgroundColor: "#454d55" }}
        >
          <Dashboard />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
