var React = require('react');
var AppActions = require('../actions/app-actions');

var UnmarkEpisodeListened = React.createClass({
  handler: function() {
    AppActions.unmarkEpisodeListened(this.props.item);
  },
  render: function() {
    return <button onClick={this.handler}>Mark Unlistened</button>
  }
});

module.exports = UnmarkEpisodeListened;