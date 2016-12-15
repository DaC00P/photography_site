'use strict';
export const FetchImageURLs = function(callback = function() {}) {
  $.ajax({
    url: '/images',
    type: 'get',
    success(res) {
      callback(res);
    },
    error(err) {
      console.log(err);
    }
  });
};

export function FetchImageData(callback) {
  return $.ajax({
    url: '/images',
    type: 'get',
    success(res) {
      console.log(res);
      callback(res);
    },
    error(err) {
      console.log(err);
    }
  });
};
