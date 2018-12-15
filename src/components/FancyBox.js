import React from "react";

const FancyBox = ({ children }) => {
  return (
    <div style={{ border: '1px solid blue' }}>
      {children}
    </div>
  );
}

export default FancyBox;