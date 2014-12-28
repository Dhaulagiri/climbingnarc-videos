import Ember from 'ember';

export default Ember.ArrayController.extend({
  page: 1,

  actions: {
    loadVideos: function(params) {
      var page = this.get('page') + 1;
      this.set('page', page)
      var params = { page: page };
      this.store.find('post', params);
    }
  }
});
