'use strict';
import React, { Component } from 'react';
import PhotoCheckbox from './PhotoCheckbox'


const URL_BASE = 'https://res.cloudinary.com/clairephotography/image/upload/';
const thumbResize = (imgPath) => `${URL_BASE}h_200/${imgPath}`;
// let thumbResize = 'http://res.cloudinary.com/clairephotography/image/upload/v1481667263/cq2r93bnkvzuxvauk1mf.jpg'

export default (props) => {
  //the public ID is the end of the URL. We interpolate a resize into the url to only pull a 200x200 thumbnail
  let srcUrl = thumbResize(props.photoObject.public_id);

  return (
    <div className='image-checkbox-combo'>
      <PhotoCheckbox id='photo-checkbox'/>
      <img
        src={srcUrl}
        onClick={() => props.selectPhoto(props.photoObject)}>
      </img>
    </div>
  );
}
