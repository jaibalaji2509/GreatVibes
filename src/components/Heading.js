import React from "react";

function Heading({ FWeight, FSize, LHieght, label }) {
  const className = {
    headingContainer: `font-sans not-italic ${FWeight} ${FSize} ${LHieght}`,
  };
  return <div className={className.headingContainer}>{label}</div>;
}

export default Heading;
