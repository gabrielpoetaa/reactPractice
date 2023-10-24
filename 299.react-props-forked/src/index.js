import React from "react";
import ReactDOM from "react-dom";
import Cards from "./components/Cards"
import Example from "./components/Example";


ReactDOM.render(
  <div>
<Cards
name="Beyonce"
img="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
tel="+123 456 789"
email="b@beyonce.com"
/>

<Cards
name="Jack Bauer"
img="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
tel="+987 654 321"
email="jack@nowhere.com"
 />
<Cards
name="Chuck Norris"
img="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
tel="+918 372 574"
email="gmail@chucknorris.com"
 />

 <Example />

  </div>,
  document.getElementById("root")
);