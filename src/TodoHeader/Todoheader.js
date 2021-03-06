import React from "react";

const Todoheader = ({ children, loading }) => {
  return (
    <header>
      {
      React.Children
        .toArray(children)
        .map((child) => React.cloneElement(child, { loading }))
      }
    </header>
  );
};

export default Todoheader;
