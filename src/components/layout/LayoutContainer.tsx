import React from "react";
import { Outlet } from "react-router-dom";
import SidebarContainer from "./sidebar/SidebarContainer";
import "./layout.css";

interface LayoutContainerProps {}
const LayoutContainer: React.FC<LayoutContainerProps> = () => {
  return (
    <div className="layout-container">
      <SidebarContainer />
      <div className="content-container">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutContainer;
