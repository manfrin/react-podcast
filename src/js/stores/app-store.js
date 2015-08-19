var AppDispatcher = require('../dispatchers/app-dispatcher');
var AppConstants = require('../constants/app-constants');
var assign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _podcasts = [];

for (var i = 10 ; i >= 0; i--) {
  var podcast = {}, episodes = [];
  podcast = {
    'id': 'Podcast' + i,
    'title': 'Podcast #' + i,
    'summary': 'Tony goes through some stupid history',
    'description': 'JOIN US THIS WEEK FOR ANOTHER EXCITING EPISODE',
    'link': 'http://example.com/ep.mp3'
  }

  for (var j = 5; j >=0; j--) {
    episodes.push({
      'id': (i * 100) + j,
      'title': 'An Episode',
      'ep_number': j + 1,
      'link': 'http://ep1.html'
    })
  }
  podcast['episodes'] = episodes;
  _podcasts.push(podcast);
}

var _followed = [];
var _listened = [];

function _followPodcast(podcastItem){
  console.log(podcastItem);
  if(!podcastItem.followed){
    podcastItem['followed'] = true
    _followed.push(podcastItem);
  }
}

function _unfollowPodcast(podcastItem){
  if (podcastItem.followed) {
    _followed.forEach(function(followedItem, i){
      if(followedItem.id === podcastItem.id){
        podcastItem.followed = false
        _followed.splice(i, 1)
      }
    })
  }
}

function _playEpisode(episode) {
  console.log('PLAY', episode);
  _markEpisodeListened(episode);
}

function _markEpisodeListened(episode) {
  if(!episode.listened){
    episode['listened'] = true
    _listened.push(episode);
  }
}

function _unmarkEpisodeListened(episode) {
  if (episode.listened) {
    _listened.forEach(function(listenedItem, i){
      if(listenedItem.id === episode.id){
        episode.listened = false
        _listened.splice(i, 1)
      }
    })
  }
}

function _podcastStats() {
  return { 'listens': _listens.length, 'follows': _followed.length }  
}

var AppStore = assign(EventEmitter.prototype, {
  emitChange: function() {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback)
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback)
  },

  getPodcastList: function(){
    return _podcasts;
  },

  getFollows: function(){
    return _followed;
  },

  getListens: function(){
    return _listened;
  },

  getStats: function(){
    return _podcastStats();
  },

  dispatcherIndex: AppDispatcher.register(function(payload){
    var action = payload.action;

    switch(action.actionType){
      case AppConstants.FOLLOW_PODCAST:
        _followPodcast(payload.action.podcast);
        break;

      case AppConstants.UNFOLLOW_PODCAST:
        _unfollowPodcast(payload.action.podcast);
        break;

      case AppConstants.PLAY_EPISODE:
        _playEpisode(payload.action.episode);
        break;

      case AppConstants.MARK_EPISODE_LISTENED:
        _markEpisodeListened(payload.action.episode);
        break;

      case AppConstants.UNMARK_EPISODE_LISTENED:
        _unmarkEpisodeListened(payload.action.episode);
        break;
    }
    AppStore.emitChange();

    return true;
  })
})

module.exports = AppStore;