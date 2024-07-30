import React, { useState } from "react";
import AppSwitchIcon from "../Icons/AppSwitchIcon";
import AppLogo from "../Icons/AppLogo";
import Drawer from "@mui/joy/Drawer";

const LeftHeader = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="left-header">
      <div className="app-switch-box" onClick={() => setOpen(true)}>
        <AppSwitchIcon />
      </div>
      <div className="app-brand-box">
        <div className="app-logo">
          <AppLogo />
        </div>
        <div className="app-name">Zinghub</div>
      </div>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        sx={{
          "& .MuiDrawer-content": {
            width: 232, // Set your custom width here
          },
        }}
      ></Drawer>
    </div>
  );
};

export default LeftHeader;
