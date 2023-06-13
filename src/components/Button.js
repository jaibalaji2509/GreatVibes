import React from "react";

function Button({
  bgprimary,
  textprimary,
  borderprimary,
  bgsecondary,
  FWeight,
  FSize,
  label,
  onClick,
}) {
  const className = {
    container: `${bgprimary} py-0.5 px-3 rounded text-white ${FWeight} ${FSize} border-2 ${borderprimary} hover:${bgsecondary} hover:${textprimary} cursor-pointer duration-300`,
  };
  return (
    <div>
      <button onClick={(e) => onClick(e)} className={className.container}>
        {label}
      </button>
    </div>
  );
}

export default Button;
