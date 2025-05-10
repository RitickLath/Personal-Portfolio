import Contact from "./component/Contact";
import Landing from "./component/Landing";
import Navbar from "./component/Navbar";
import Project from "./component/Project";
import Toolbox from "./component/Toolbox";

const App = () => {
  return (
    <div className="bg-[#101010] text-white">
      <Navbar />
      <Landing />
      <Project />
      <Toolbox />
      <Contact />
    </div>
  );
};

export default App;
