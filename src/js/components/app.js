var React = require('react');
var PodcastList = require('../components/app-podcastlist');
var PersonalFeed = require('../components/app-personalfeed');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <h1> Podcasts </h1>
        <PodcastList />
        <h1> Feed </h1>
        <PersonalFeed />
      </div>
    )
  }
});

module.exports = App;