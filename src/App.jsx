import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10 p-0">
          <div className="row">
            <div className="col-md-12">
              <Navbar />
            </div>
          </div>

          <div className="row">
            <div className="col-md-12">
              <Dashboard />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
