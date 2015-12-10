'use strict';

module.exports = {
  path: 'categories',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/Categories/Categories'));
    });
  }
};
