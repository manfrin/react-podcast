var React = require('react');
var AppActions = require('../actions/app-actions');

var PlayEpisode = React.createClass({
  handler: function() {
    AppActions.PlayEpisode(this.props.item);
  },
  render: function() {
    return <button onClick={this.handler}>Play</button>
  }
});

module.exports = PlayEpisode;