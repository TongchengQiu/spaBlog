'use strict';
const Post = React.createClass({
  render: function() {
    return (
      <div className="post">
        Post{this.props.params.postId}
      </div>
    );
  }
});

module.exports = Post;
