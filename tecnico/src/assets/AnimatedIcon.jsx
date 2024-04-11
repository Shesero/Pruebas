import React from "react";
import { DiAtom } from "react-icons/di";
import "./AnimatedIcon.css";

function AnimatedIcon() {
  return (
    <div className="icon-container">
      <DiAtom className="icon" size={100} />
    </div>
  );
}

export default AnimatedIcon;