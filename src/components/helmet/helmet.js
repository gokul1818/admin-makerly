import React from "react";
const Helmet=(props)=>{
document.title ='3d shape-'+ props.title
    return(
<div>{props.children}</div>
)
}
export default Helmet