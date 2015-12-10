'use strict';

module.exports = {
  path: 'home',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/Home/Home'));
    });
  }
};
