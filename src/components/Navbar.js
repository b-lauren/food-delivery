import React from "react";

function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="navbar-container container">
          <Link to="/" className="navbar-logo">
            EAT UP
          </Link>
          <div className="menu-icon"></div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
