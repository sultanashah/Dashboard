import React from "react";
import Logo from "../images/logo.png";
import Logo1 from "../images/home.png";

function Sidebar() {
  return (
    <>

      <div className="flex gap-4 text-black">
        <img className="flex  w-8 h-8" src={Logo} alt="" />
        <span>
          Sh<span>o</span>ps
        </span>
        </div>
        <div className=" flex flex-col">
          <span className="flex items-center gap-2">
            <img className="flex  w-8 h-8" src={Logo1} alt="" />
            <h2 className="mt-6 text-lg">Dashboard</h2>
          </span>
          <span className="flex items-center gap-2">
            <img className="flex w-8 h-8" src={Logo1} alt="" />
            <h2 className="mt-6 text-lg">Order</h2>
          </span>
          <span className="flex items-center gap-2">
            <img className="flex w-8 h-8" src={Logo1} alt="" />
            <h2 className="mt-6 text-lg">Customer</h2>
          </span>
          <span className="flex items-center gap-2">
            <img className="flex w-8 h-8" src={Logo1} alt="" />
            <h2 className="mt-6 text-lg">Analysis</h2>
          </span>
        </div>
    </>
  );
}

export default Sidebar;

// import React, { useState } from "react";
// // import "./Sidebar.css";
// import Logo from "../imgs/logo.png";
// import { UilSignOutAlt } from "@iconscout/react-unicons";
// import { SidebarData } from "../Data/Data";
// import { UilBars } from "@iconscout/react-unicons";
// import { motion } from "framer-motion";

// const Sidebar = () => {
//   const [selected, setSelected] = useState(0);

//   const [expanded, setExpaned] = useState(true);

//   const sidebarVariants = {
//     true: {
//       left: "0",
//     },
//     false: {
//       left: "-60%",
//     },
//   };
//   console.log(window.innerWidth);
//   return (
//     <>
//       <div
//         className="bars"
//         style={expanded ? { left: "60%" } : { left: "5%" }}
//         onClick={() => setExpaned(!expanded)}
//       >
//         <UilBars />
//       </div>
//       <motion.div
//         className="sidebar"
//         variants={sidebarVariants}
//         animate={window.innerWidth <= 768 ? `${expanded}` : ""}
//       >
//         {/* logo */}
//         <div className="logo">
//           <img src={Logo} alt="logo" />
//           <span>
//             Sh<span>o</span>ps
//           </span>
//         </div>

//         <div className="menu">
//           {SidebarData.map((item, index) => {
//             return (
//               <div
//                 className={selected === index ? "menuItem active" : "menuItem"}
//                 key={index}
//                 onClick={() => setSelected(index)}
//               >
//                 <item.icon />
//                 <span>{item.heading}</span>
//               </div>
//             );
//           })}
//           {/* signoutIcon */}
//           <div className="menuItem">
//             <UilSignOutAlt />
//           </div>
//         </div>
//       </motion.div>
//     </>
//   );
// };

// export default Sidebar;
