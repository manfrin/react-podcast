var AppConstants = require('../constants/app-constants');
var AppDispatcher = require('../dispatchers/app-dispatcher');

var AppActions = {
  followPodcast: function(podcast) {
    console.log(podcast)
    AppDispatcher.handleViewAction({
      actionType: AppConstants.FOLLOW_PODCAST,
      podcast: podcast
    })
  },
  unfollowPodcast: function(podcast) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.UNFOLLOW_PODCAST,
      podcast: podcast
    })
  },
  playEpisode: function(episode) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.PLAY_EPISODE,
      episode: episode
    })
  },
  markEpisodeListened: function(episode) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.MARK_EPISODE_LISTENED,
      episode: episode
    })
  },
  unmarkEpisodeListened: function(episode) {
    AppDispatcher.handleViewAction({
      actionType: AppConstants.UNMARK_EPISODE_LISTENED,
      episode: episode
    })
  }
}

module.exports = AppActions;