import React, { useState } from "react";
import "@fontsource/inter";
import logo from "./logo.svg";
import "./App.css";
import AppHeader from "./AppHeader";
import AppNavigation from "./AppNavigation";
import AppWorkspace from "./AppWorkspace";

function App() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  return (
    <div>
      <AppHeader />
      <div className="body-layout">
        <AppNavigation
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
        <AppWorkspace
          isCollapsed={isCollapsed}
          setIsCollapsed={setIsCollapsed}
        />
      </div>
    </div>
  );
}

export default App;
