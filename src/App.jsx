import React, { useState } from "react";
import './App.css';

// 1. Look over the starter code.
let photos = [
"https://ichef.bbci.co.uk/news/976/cpsprodpb/17638/production/_124800859_gettyimages-817514614.jpg",
  "https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_2x1.jpg",
  "https://cf.ltkcdn.net/small-mammals/guinea-pigs/images/orig/326593-2119x1413-sheltie-guinea-pig.jpg"
];

let counter = 0;


export default function App() {
  // 2. Replace the photo variable with a state variable.
  const [currentPhoto, setCurrentPhoto] = useState(photos[counter]);

  function getNextPhoto() {
    counter += 1;
    if (counter >= photos.length) {
      counter = 0;
    }
    // 3. Update state using the setter function. 
    //  - It should update the pic when the button is clicked.
    setCurrentPhoto(photos[counter]);
  }

  // 4. In the button tag, set the value of`onClick` to the `getNextPhoto` function.
  return (
    <div>
      <h1>Pet Photo Album</h1>
      <div className="app">
        <img src={currentPhoto} alt="" />
        <br />
        <button onClick={getNextPhoto}>Click for next photo!</button>
      </div>
    </div>
  );
}