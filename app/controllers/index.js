import Ember from 'ember';

export default Ember.ArrayController.extend({
  page: 1,

  // TODO - move query params here to DRY the requests up

  isFiltering: false,
  query: '',

  updateQuery: function (value) {
    this.set('isFiltering', false);
    this.set('query', value || '');
  },

  // read in search input and set a debounce to prevent constant searching
  searchInput: function(key, value) {
    if (arguments.length > 1) {
      this.set('isFiltering', true);
      Ember.run.debounce(this, this.updateQuery, value, 350);
    } else {
      value = this.get('query');
    }
    return value;
  }.property('query'),

  // actually filter from the store based on the search query
  searchResults: function() {
    this.set('isFiltering', false);

    var searchTerm = this.get('query');
    if (searchTerm) {
      return this.store.find('post', {'type' : 'videos', 'filter[s]': searchTerm});
    } else {
      return this.store.find('post', {'type' : 'videos', 'filter[posts_per_page]': 24});
    }
  }.property('query'),

  actions: {
    loadVideos: function() {
      var page = this.get('page') + 1;
      this.set('page', page);
      var params = { page: page, type: 'videos' };
      this.store.find('post', params);
    }
  }
});
