import * as React from "react";
// import { Link } from "react-router-dom";

function NavigationLink({ text, url }) {
  return (
    <>
    {/* <Link to={url}> */}
    <button 
      className="self-stretch my-auto"
      tabIndex={0}
      role="link"
      >
      {text}
    </button>
        {/* </Link> */}
      </>
  );
}

export default NavigationLink;
