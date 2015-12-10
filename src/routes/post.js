'use strict';

module.exports = {
  path: 'post/:postId',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/Post/Post'));
    });
  }
};
