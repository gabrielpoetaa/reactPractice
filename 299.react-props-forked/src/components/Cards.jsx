import React from "react";

function Cards(props){
  return(
    <div>
      <h2 className="my-style">{props.name}</h2>
      <img src={props.img} alt="avatar_img"></img>
      <p>{props.tel}</p>
      <p>{props.email}</p>
    </div>
  )

}

export default Cards