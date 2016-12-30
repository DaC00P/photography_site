'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Photo from './photo';
import { getPhotos } from '../actions/index';

//Whoever wrote all the ternaries in here,  I hate you. :( TODO refactor the ternaries.
class ThumbnailsMap extends Component {
  constructor(props) {
    super(props);
    this.setToActive = this.setToActive.bind(this);
  }

  // Handles delegation of the appropriate `className` values of photos currently in shoppingCart
  applyButtonStyle() {
    return Object.keys(this.props.shoppingCart).length
      ? 'active'
      : '';
  }

  setToActive(photo) {
    let className = 'photo';
    console.log('#######');
    console.log(Object.keys(this.props.shoppingCart).includes(photo.public_id));

    if(this.props.shoppingCart.length > 0 && (Object.keys(this.props.shoppingCart).includes(photo.public_id))) {
      className += ' activePhoto';
    }
    return className
  }


  componentWillMount() {
    this.props.getPhotos();
  }

  renderGrid() {
    if(this.props.imageObject){
      return this.props.imageObject.map((photo) => {
        return (
          <Photo active={(photo) => this.setToActive(photo)}
            key={photo.public_id}
            photoObject={photo}
            setToActive={this.setToActive}
            selectPhoto={this.props.selectPhoto}
            order={false}
            selected={false}
            />
        );
      });
    }else {
      return (<h2 className="no-search-results">Apologies, no matching search results</h2>);
    };
  };


  render() {
    let photos = this.renderGrid();

    return (
      <main id="photo-gallery">
        <div className="photo-thumbnail-grid">
          {photos}
        </div>
      </main>
    );
  }
};


let mapStateToProps = (state) => ({
  imageObject: state.imageObject,
  shoppingCart: state.shoppingCart
});


function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getPhotos
   }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ThumbnailsMap);
