'use strict';

require('./Footer.scss');

import { Link } from 'react-router';

let utils = require('../../../lib/utils/utils');
let timeDiff = utils.timeDiff;

const Footer = React.createClass({
  getInitialState: function() {
    return {
      day: " ",
    };
  },
  componentDidMount: function() {
    let dat = timeDiff('2014-11-20');
    this.setState({day: dat});
  },
  render: function() {
    return (
      <footer className="footer">
        <div className="copyright">
          © &nbsp; 2015
          <span className="heart">&nbsp;&nbsp;♡&nbsp;&nbsp;</span>
          <span className="name">阿城</span>
        </div>
        <div className="showDays">
          本站已运行 <span>{this.state.day}</span> 天 --- 总访问量<span>{window.pv}</span>次
        </div>
      </footer>
    );
  }
});

module.exports = Footer;
