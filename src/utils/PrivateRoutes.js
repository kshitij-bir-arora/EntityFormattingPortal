import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const loggedIn = false;
  if (loggedIn) {
    return (
      <>
        <div>This is private route</div>
        <Outlet />
      </>
    );
  } else {
    <Navigate to={"/"} />;
  }
};

export default PrivateRoutes;
