import React from "react";

function Label({ Fweight, Fsize, lHeight, label, textColor }) {
  const className = {
    container: `font-sans not-italic ${Fweight} ${Fsize} ${lHeight} ${textColor}`,
  };
  return <div className={className.container}>{label}</div>;
}

export default Label;
