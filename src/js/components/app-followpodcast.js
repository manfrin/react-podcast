var React = require('react');
var AppActions = require('../actions/app-actions');

var FollowPodcast = React.createClass({
  handler: function() {
    AppActions.followPodcast(this.props.podcast);
  },
  render: function() {
    return <button onClick={this.handler}>Follow Podcast</button>
  }
});

module.exports = FollowPodcast;