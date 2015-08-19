var React = require('react');
var AppStore = require('../stores/app-store.js');
var PlayEpisode = require('./app-playepisode.js');
var MarkEpisodeListened = require('./app-markepisodelistened.js');
var UnmarkEpisodeListened = require('./app-unmarkepisodelistened.js');
var UnfollowPodcast = require('./app-unfollowpodcast.js');

function followedPodcasts(){
  return {followed_podcasts: AppStore.getFollows()}
}

var PersonalFeed = React.createClass({
  getInitialState: function(){
    return followedPodcasts()
  },

  componentWillMount:function(){
    AppStore.addChangeListener(this._onChange)
  },

  _onChange: function(){
    this.setState(followedPodcasts())
  },

  render: function(){
    console.log('render')
    var followed_podcasts = this.state.followed_podcasts.map(function(podcast){
      var episodes = podcast.episodes.map(function(episode){
        return (
          <tr key={episode.id}>
            <td>{episode.ep_number}</td>
            <td>{episode.title}</td>
            <td>{episode.link}</td>
            <td><MarkEpisodeListened episode={episode} /></td>
            <td><UnmarkEpisodeListened episode={episode} /></td>
          </tr>
        )
      });

      return (
        <tr key={podcast.id}>
          <td>{podcast.title}</td>
          <td>
            <table>
              <thead>
                <tr>
                  <th>Ep #</th>
                  <th>Title</th>
                  <th>Link</th>
                  <th>Listened</th>
                  <th>Unlisten</th>
                </tr>
              </thead>
              <tbody>
                {episodes}
              </tbody>
            </table>
          </td>
        </tr>
      )
    })
    return (
      <table className="table table-hover">
        <tbody>
          {followed_podcasts}
        </tbody>
      </table>
    )
  }
});

module.exports = PersonalFeed;