import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainDash from "./components/Sidebar";
import RightSide from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="App h-[100vh]">
        Heloo
        <div className="AppGlass">
          hello world
          <Sidebar />
          <MainDash />
          <RightSide />
        </div>
      </div>
    </>
  );
}

export default App;
