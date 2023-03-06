import React, { useState } from "react";
import "./Tooltip.css"

function Tooltip(props) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div class="tooltip-container">
      <div
      className="tooltip"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {props.children}
      {isHovering && (
        <div style={{color:props.color, backgroundColor:props.backgroundColor}}className={`text cloud ${props.position}`}>{props.text}</div>
      )}
    </div>
    </div>
    
  );
}
export default Tooltip;
