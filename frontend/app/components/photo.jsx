'use strict';
import React, { Component } from 'react';


const API_BASE = 'https://res.cloudinary.com/clairephotography/image/upload/';
const constructURL = (imgPath) => `${API_BASE}${imgPath}`;
// const thumbResize = (imgPath) => `${API_BASE}h_200/${imgPath}`;
let thumbResize = 'http://res.cloudinary.com/clairephotography/image/upload/v1481667263/cq2r93bnkvzuxvauk1mf.jpg'

function handlePhotoClick(event) {
  event.preventDefault();
  console.log('clck')
}

export default (props) => {
  console.log(props);
  return (
    <div>
      <img
        src={thumbResize}
        onClick={handlePhotoClick}
        />
    </div>
  );
}
