import React, { useEffect, useState } from "react";
import "../layout.css";
import { SIDEBAR_ITEMS } from "../../../utils/constants";
import { TSidebarItem } from "../../../utils/types";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { useWindowDims } from "../../../utils/hooks/useWindowDims";

interface SidebarContainerProps {}
const SidebarContainer: React.FC<SidebarContainerProps> = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { width } = useWindowDims();

  useEffect(() => {
    if (width < 750) setOpenSidebar(false);
  }, [width]);

  return (
    <div
      className={"sidebar-container"}
      style={{
        width: openSidebar ? 220 : 50,
      }}
    >
      <IconButton
        color="inherit"
        aria-label="open drawer"
        onClick={() => setOpenSidebar((prev) => !prev)}
        sx={{ height: 25, width: 25, pl: "1em" }}
      >
        <MenuIcon />
      </IconButton>
      <div className="items-container">
        {SIDEBAR_ITEMS.map((item: TSidebarItem, index: number) => (
          <div key={index} className="item-container">
            <item.icon />
            {openSidebar && <span>{item.title}</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarContainer;
