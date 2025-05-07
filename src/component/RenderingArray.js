import React from "react";

const RenderingArray = ({ arr }) => {
  return (
    <div>
      {arr.map((arrr,index) => (
        <span key={index}>{arrr}</span>
      ))}
    </div>
  );
};

export default RenderingArray;
