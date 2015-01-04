import Ember from 'ember';

export default Ember.ArrayController.extend({
  page: 1,

  // TODO - move query params here to DRY the requests up

  isFiltering: false,
  query: '',
  climberQuery: '',

  updateQuery: function (value) {
    this.set('isFiltering', false);
    this.set('query', value || '');
  },
  updateClimberQuery: function (value) {
    this.set('isFiltering', false);
    this.set('climberQuery', value || '');
  },
  updateAreaQuery: function (value) {
    this.set('isFiltering', false);
    this.set('areaQuery', value || '');
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

  climberSearchInput: function(key, value) {
    if (arguments.length > 1) {
      this.set('isFiltering', true);
      Ember.run.debounce(this, this.updateClimberQuery, value, 350);
    } else {
      value = this.get('climberQuery');
    }
    return value;
  }.property('climberQuery'),

  areaSearchInput: function(key, value) {
    if (arguments.length > 1) {
      this.set('isFiltering', true);
      Ember.run.debounce(this, this.updateAreaQuery, value, 350);
    } else {
      value = this.get('areaQuery');
    }
    return value;
  }.property('areaQuery'),

  // actually filter from the store based on the search query
  searchResults: function() {
    this.set('isFiltering', false);

    var searchTerm = this.get('query');
    var climberSearchTerm = this.get('climberQuery');
    var areaSearchTerm = this.get('areaQuery');

    if (searchTerm || climberSearchTerm || areaSearchTerm) {
      return this.store.find('post',
        {
          'type' : 'videos',
          'filter[s]' : searchTerm,
          'filter[climbers]' : climberSearchTerm,
          'filter[climbing-areas]' : areaSearchTerm
        }
      );
    } else {
      return this.store.find('post', {'type' : 'videos', 'filter[posts_per_page]': 24});
    }
  }.property('query', 'climberQuery', 'areaQuery'),

  actions: {
    loadVideos: function() {
      var page = this.get('page') + 1;
      this.set('page', page);
      var params = { page: page, type: 'videos' };
      this.store.find('post', params);
    }
  }
});
