import DS from 'ember-data';
import Ember from 'ember';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin,{
  primaryKey: 'ID',

  attrs: {
    categories: { embedded: 'always' },
    climbers: { embedded: 'always' },
    areas: { embedded: 'always' },
    tags: { embedded: 'always' }
  },

  extractArray: function(store, type, payload) {

    var data = {},
    extracted = [],
    root = Ember.String.pluralize(type.typeKey);

    payload.forEach(function(e){

      e.embed_url = e.custom_fields.embed[0];

      if ( typeof e.terms.post_tag !== 'undefined' ) {
        e.tags = e.terms.post_tag;
      }

      if ( typeof e.terms.category !== 'undefined' ) {
        e.categories = e.terms.category;
      }

      if ( typeof e.terms.climbers !== 'undefined' ) {
        e.climbers = e.terms.climbers;
      }

      if ( typeof e.terms['climbing-areas'] !== 'undefined' ) {
        e.areas = e.terms['climbing-areas'];
      }

      delete e.terms;
      extracted.push(e);
    });

    data[root] = extracted;

    return this._super(store, type, data);
  },
  extractSingle: function (store, type, payload, id) {

    var data = {},
    root = Ember.String.pluralize(type.typeKey);

    payload.embed_url = payload.custom_fields.embed[0];

    if ( typeof payload.terms.post_tag !== 'undefined' ) {
      payload.tags = payload.terms.post_tag;
    }

    if ( typeof payload.terms.category !== 'undefined' ) {
      payload.categories = payload.terms.category;
    }

    if ( typeof payload.terms.climbers !== 'undefined' ) {
      payload.climbers = payload.terms.climbers;
    }

    if ( typeof payload.terms['climbing-areas'] !== 'undefined' ) {
      payload.areas = payload.terms['climbing-areas'];
    }

    delete payload.terms;

    data[root] = payload;

    return this._super(store, type, data, id);
  }
});
