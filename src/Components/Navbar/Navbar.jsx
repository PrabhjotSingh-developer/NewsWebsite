import React, { useState } from "react";
import { CgOverflow } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const Navbar = ({menubar,setMenubar,setCategory}) => {
//   const [menubar, setMenubar] = useState(false);
function handleToggle()
{
    setMenubar(!menubar)
         
}
function handleCategory(v){
  setCategory(v)
  console.log(v)
}
console.log(menubar,setMenubar)
  return (
    <div
      className={`w-[100%] py-5 bg-slate-900 lg:px-20 md:px-10 text-white  md:h-auto ${menubar?"":""}  `}
    >
      <nav
        className={`flex items-center  gap-16 w-full relative md:static px-6 py-4 md:py-0`}
      >
        <div className="absolute md:static z-10">
          <h3 className="text-[1.4rem]">
            Quick<span className="bg-red-950 text-white ">News</span>
          </h3>
        </div>
        <ul
          className={`flex md:items-center gap-4 md:flex-row flex-col absolute md:static top-[60%] w-[100%] mt-2 pl-10 pt-7 items-start md:pt-0 md:pl-0 md:mt-0 z-[5]  bg-slate-900 h-[95vh] md:h-auto   ${
            menubar ? "right-[0%] " : "right-[100%]  md:translate-x-0"
          }`}
          style={{ transition: ".2s linear all" }}
        >
          <li>
            <button onClick={()=>handleCategory("General")}>Home</button>
          </li>
          <li>
            <button  onClick={()=>handleCategory("sports")}>Sports</button>
          </li>
          <li>
            <button  onClick={()=>handleCategory("business")}>business</button>
          </li>
          <li>
            <button  onClick={()=>handleCategory("entertainment")} >Entertainment</button>
          </li>
          <li>
            <button onClick={()=>handleCategory("science")} >Science</button>
          </li>
          <li>
            <button  onClick={()=>handleCategory("technology")}>Technology</button>
          </li>
          <li>
            <button  onClick={()=>handleCategory("health")} >Health</button>
          </li>
        </ul>
        {menubar ? (
          <ImCross
            className="absolute right-[5%] md:hidden"
            onClick={()=>handleToggle()}
            style={{ transition: ".2s liner all" }}
          />
        ) : (
          <FaBars
            className="absolute right-[5%] md:hidden"
            onClick={()=>handleToggle()}
            style={{ transition: ".2s liner all" }}
          />
        )}
      </nav>
    </div>
  );
};

export default Navbar;
