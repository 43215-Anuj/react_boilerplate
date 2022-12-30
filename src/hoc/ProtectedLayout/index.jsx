import React from "react";
import { Outlet } from "react-router-dom";

const ProtectedLayout = () => {
  return (
    <div>
      {" "}
      <header>
        <p>This is my header</p>
      </header>
      <Outlet />
      <footer>
        <p>This is my footer</p>
      </footer>
    </div>
  );
};

export default ProtectedLayout;
