'use strict';

require('./Brand.scss');

import { IndexLink } from 'react-router';

const Brand = React.createClass({
  render: function() {
    return (
      <h1 className="brand">
        <IndexLink to='/'>BLOG</IndexLink>
      </h1>
    );
  }
});

module.exports = Brand;
