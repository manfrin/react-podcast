var React = require('react');
var AppActions = require('../actions/app-actions');

var UnFollowPodcast = React.createClass({
  handler: function() {
    AppActions.unfollowPodcast(this.props.item);
  },
  render: function() {
    return <button onClick={this.handler}>Unollow Podcast</button>
  }
});

module.exports = UnFollowPodcast;