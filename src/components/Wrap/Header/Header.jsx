'use strict';

require('./Header.scss');

import { Link } from 'react-router';

let Nav = require('./Nav/Nav');
let Brand = require('./Brand/Brand');

const Header = React.createClass({
  render: function() {
    return (
      <header className="header">
        <Nav />
        <Brand />
      </header>
    );
  }
});

module.exports = Header;
