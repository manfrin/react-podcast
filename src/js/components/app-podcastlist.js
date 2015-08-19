var React = require('react');
var AppStore = require('../stores/app-store.js');
var FollowPodcast = require('./app-followpodcast.js');

function getPodcastList(){
  return {items: AppStore.getPodcastList()}
}

var PodcastList = React.createClass({
  getInitialState: function(){
    return getPodcastList();
  },

  render: function(){
    var items = this.state.items.map(function(item){
      return (
        <tr key={item.id}>
          <td>{item.title}</td>
          <td>{item.summary}</td>
          <td>{item.description}</td>
          <td><FollowPodcast podcast={item} /></td>
        </tr>
      )
    })
    return (
      <table className="table table-hover">
        {items}
      </table>
    )
  }
});

module.exports = PodcastList;