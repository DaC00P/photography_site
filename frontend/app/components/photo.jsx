'use strict';
import React, { Component } from 'react';
import PhotoCheckbox from './PhotoCheckbox'


const API_BASE = 'https://res.cloudinary.com/clairephotography/image/upload/';
const constructURL = (imgPath) => `${API_BASE}${imgPath}`;
// const thumbResize = (imgPath) => `${API_BASE}h_200/${imgPath}`;
let thumbResize = 'http://res.cloudinary.com/clairephotography/image/upload/v1481667263/cq2r93bnkvzuxvauk1mf.jpg'

function handlePhotoClick(event) {
  event.preventDefault();
  console.log('photo click - implement prop-passed method here')
}

export default (props) => {
  return (
    <div className='image-checkbox-combo'>
      <PhotoCheckbox className='photo-checkbox'/>
      <img
        src={thumbResize}
        onClick={handlePhotoClick}>
      </img>
    </div>
  );
}
