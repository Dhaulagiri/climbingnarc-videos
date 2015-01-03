import Ember from 'ember';

export default Ember.ArrayController.extend({
  page: 1,

  actions: {
    loadVideos: function() {
      var page = this.get('page') + 1;
      this.set('page', page);
      var params = { page: page, type: 'videos' };
      this.store.find('post', params);
    }
  }
});
