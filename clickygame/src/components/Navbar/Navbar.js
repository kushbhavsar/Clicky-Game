import React from "react";
import "./Navbar.css";

const navbar = props => (
  <div>
    <ul className="nav nav-bar nav-justified">
      
      <li>{props.message}</li>
      <li>
        Score: <span style={{ color: "yellow" }}>{props.curScore}</span> | Top
        Score: {props.topScore}
      </li>
    </ul>
  </div>
);

export default navbar;