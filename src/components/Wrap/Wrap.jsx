'use strict';
const Wrap = React.createClass({
  render: function() {
    return (
      <div className="wrap">
        {this.props.children}
      </div>
    );
  }
});
module.exports = Wrap;
