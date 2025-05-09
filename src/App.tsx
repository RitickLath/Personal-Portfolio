import Landing from "./component/Landing";
import Navbar from "./component/Navbar";
import Project from "./component/Project";

const App = () => {
  return (
    <div className="bg-[#101010] text-white">
      <Navbar />
      <Landing />
      <Project />
    </div>
  );
};

export default App;
