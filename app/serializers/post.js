import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
	attrs : {
		climbers: { embedded: 'always' },
		areas: { embedded: 'always' },
		categories: { embedded: 'always' },
	},

	extractArray: function (store, type, payload) {
		var posts = payload.posts;
		posts.forEach(function(post) {
			// Extract fields that are not formatted nicely in the JSON payload
	    post.embed_url = post.custom_fields.embed;
	  });

		payload = { posts: posts };
		return this._super(store, type, payload);
  },
	extractSingle: function () {
  },
	extractMeta: function(store, type, payload) {
		// TODO -
		if (payload && payload.pages) {
			store.metaForType(type, { total: payload.count_total, pages: payload.pages, page: 1 });
			delete payload.pages;
		}
	}
});
