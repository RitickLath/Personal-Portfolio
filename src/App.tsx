import Landing from "./component/Landing";
import Navbar from "./component/Navbar";
import Toolbox from "./component/Toolbox";

const App = () => {
  return (
    <div className="bg-[#101010] text-white">
      <Navbar />
      <Landing />
      <Toolbox />
    </div>
  );
};

export default App;
