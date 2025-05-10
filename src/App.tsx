import About from "./component/About";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
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
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
