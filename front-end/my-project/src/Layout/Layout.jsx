import React, { useEffect } from "react";

import { Outlet, useLocation } from "react-router-dom";

function Layout() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  
  return (
    <div>
      <Outlet />
    </div>
  );
}

export default Layout;
