var React = require('react');
var AppActions = require('../actions/app-actions');

var MarkEpisodeListened = React.createClass({
  handler: function() {
    AppActions.markEpisodeListened(this.props.item);
  },
  render: function() {
    return <button onClick={this.handler}>Mark Listened</button>
  }
});

module.exports = MarkEpisodeListened;