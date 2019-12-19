import React from "react";

// This Jumbotron component allows us to use a bootstrap Jumbotron without worrying about class names
function Jumbotron({ children }) {
  return (
    <div
      style={{ height: 400, clear: "both", paddingTop: 120, textAlign: "center" }}
      className="jumbotron"
    >
      {children}
    </div>
  );
}

export default Jumbotron;
