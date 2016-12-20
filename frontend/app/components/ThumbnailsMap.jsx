'use strict';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import path from 'path';

import Photo from './photo';
import { addToShoppingCart, getPhotos, setAjaxSpinner } from '../actions/index';

//Whoever wrote all the ternaries in here,  I hate you. :( TODO refactor the ternaries.
class ThumbnailsMap extends Component {
  constructor(props) {
    super(props);
    this.applyButtonStyle = this.applyButtonStyle.bind(this);
    this.setActive = this.setActive.bind(this);
    this.setToActive = this.setToActive.bind(this);
  }

  //TODO AND FIXME This needs to be refactored to just be a flex column thing

  // renderGrid() {
  //   let PhotoGrid;
  //   console.log('###PROPS###')
  //   console.log(this.props)
  //   if (true) {
  //     return (
  //       Photo
  //     )};
  //   };

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

  render() {
    // let photos = this.renderGrid();

    return (
      <main id="photo-gallery">
        <div className="photo-thumbnail-grid">
          <Photo className='testphoto'
            setToActive={ this.setToActive }
            selectPhoto={ this.props.selFote }
            order={ false }
          />
        </div>
      </main>
    );
  }
};


let mapStateToProps = (state) => ({
  imgObj: state.imageObject,
  shoppingCart: state.shoppingCart
});

let mapDispatchToProps = (dispatch) => bindActionCreators({
  addToShoppingCart,
  getPhotos
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ThumbnailsMap);
