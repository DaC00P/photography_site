'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Photo from './photo';
import {addToShoppingCart, getPhotos} from '../actions/index';

//Whoever wrote all the ternaries in here,  I hate you. :( TODO refactor the ternaries.
class ThumbnailsMap extends Component {
  constructor(props) {
    super(props);
    this.applyButtonStyle = this.applyButtonStyle.bind(this);
    this.setActive = this.setActive.bind(this);
    this.setToActive = this.setToActive.bind(this);
    this.photos = [];
  }

  // Handles delegation of the appropriate `className` values of jobs such that the currently
  //  active job (`activeJob`) has an additional class of `.active`:
  setActive() {
    return Object.keys(this.props.shoppingCart).length
      ? 'active'
      : 'inactive';
  }

  applyButtonStyle() {
    return Object.keys(this.props.shoppingCart).length
      ? 'active'
      : '';
  }

  setToActive(photo) {
    return 'perfect-grid__item ' + (photo['public_id'] in (this.props.shoppingCart)
      ? 'activateMe'
      : 'nah');
  } //FIXME WHAT THE FUCK, nah...


  componentWillMount() {
    getPhotos();
  }

  renderGrid() {
    let PhotoGrid;
    if(this.photos.length){
      console.log('length')
      return this.photos.map((photo) => {
        return (
          <Photo className='photo'
            key={Math.random()}
            url={photo}
            setToActive={ this.setToActive }
            selectPhoto={ this.props.selFote }
            order={ false }
            />
        );
      });
    }else {
      console.log('NO LENGTH')
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
    addToShoppingCart,
    getPhotos
   }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ThumbnailsMap);
