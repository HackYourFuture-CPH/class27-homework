import React from "react";

const BorderComponent = ({ children }) => {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "5px",
        marginBottom: "10px",
        padding: "15px",
      }}
    >
      {children}
    </div>
  );
};

export default BorderComponent;
