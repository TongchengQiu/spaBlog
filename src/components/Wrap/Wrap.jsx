'use strict';

require('./Wrap.scss');

let Header = require('./Header/Header');
let Footer = require('./Footer/Footer');

const Wrap = React.createClass({
  render: function() {
    return (
      <div className="wrap">
        <Header />
        <div className="main">{this.props.children}</div>
        <Footer />
      </div>
    );
  }
});

module.exports = Wrap;
