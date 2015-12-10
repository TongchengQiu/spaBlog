'use strict';

module.exports = {
  path: 'archives',
  getComponent(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('../components/Archives/Archives'));
    });
  }
};
