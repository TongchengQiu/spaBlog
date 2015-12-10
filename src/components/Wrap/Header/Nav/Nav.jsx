'use strict';

require('./Nav.scss');

import { Link, IndexLink } from 'react-router';

const Nav = React.createClass({
  render: function() {
    return (
      <nav className="nav">
        <ul>
          <li><IndexLink to="/" activeClassName="active" >首页</IndexLink></li>
          <li><Link to="/categories" activeClassName="active" >分类</Link></li>
          <li><Link to="/archives" activeClassName="active" >归档</Link></li>
          <li><Link to="/tags" activeClassName="active" >标签</Link></li>
          <li><Link to="/about" activeClassName="active" >关于</Link></li>
        </ul>
      </nav>
    );
  }
});

module.exports = Nav;
