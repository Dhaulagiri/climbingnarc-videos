import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
	attrs : {
		climbers: { embedded: 'always' },
		areas: { embedded: 'always' },
		categories: { embedded: 'always' },
	},

	extractArray: function (store, type, payload) {
		var posts = payload.posts;

		payload = { posts: posts };	
		return this._super(store, type, payload);
  	},
	extractSingle: function () {
  	}
});
