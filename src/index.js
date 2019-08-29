import React from "react";
import ReactDOM from "react-dom";

import SimpleComponent from "./components/SimpleComponent";
import SimplerComponent from "./components/SimplerComponent";


handleClick = (event) => {
  console.log(event)
}


ReactDOM.render(



  <div>
    <SimpleComponent />
    <SimplerComponent handleClick={(event) => this.handleClick(event)} />
  </div>,
  document.getElementById("root")
);
