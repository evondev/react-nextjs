import React, { Fragment } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

interface ILayoutMainProps {
  children: React.ReactNode;
}
const LayoutMain = ({ children }: ILayoutMainProps) => {
  return (
    <Fragment>
      <Topbar></Topbar>
      <div className="grid grid-cols-[250px_minmax(0,1fr)] min-h-screen">
        <Sidebar></Sidebar>
        <div>{children}</div>
      </div>
    </Fragment>
  );
};

export default LayoutMain;
