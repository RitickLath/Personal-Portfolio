import { useState, type FC } from "react";

const items = ["Home", "Project", "Tech Stack", "Contact"];

const Navbar: FC = () => {
  const [nowId, setNowId] = useState("home");
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    //console.log(element?.id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setNowId(element?.id || "home");
    }
  };

  return (
    <div className="top-4 z-60 sticky w-full flex justify-end pr-12">
      <div className="w-fit bg-[#292C34] border-[1px] border-[#00AAFF] rounded-full">
        {items.map((el) => (
          <button
            key={el}
            onClick={() => handleClick(el.toLowerCase())}
            className={`${
              nowId == el.toLowerCase() ? "bg-[#B67432]" : ""
            } px-3 py-1 sm:px-4 sm:py-2 hover:bg-[#202227] cursor-pointer font-semibold text-white rounded-full`}
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
