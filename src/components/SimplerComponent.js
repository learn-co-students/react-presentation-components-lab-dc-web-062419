// Code SimplerComponent Here

import React from "react";

// handleClick = () =>{
//     console.log(event)
//   }

 const SimplerComponent = (props) => {
    
    return (
    <div onClick={(event) => props.handleClick(event)}>
        I am just happy
    </div>
    )
}


export default SimplerComponent