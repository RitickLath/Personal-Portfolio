import type { FC } from "react";

const items = ["Home", "Project", "About", "Contact"];

const Navbar: FC = () => {
  const handleClick = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="top-4 z-60 sticky w-full flex justify-end pr-12">
      <div className="w-fit bg-[#292C34] border-[1px] border-[#00AAFF] rounded-full">
        {items.map((el) => (
          <button
            key={el}
            onClick={() => handleClick(el.toLowerCase())}
            className="px-4 hover:bg-[#202227] cursor-pointer font-semibold text-white py-2 rounded-full"
          >
            {el}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Navbar;
