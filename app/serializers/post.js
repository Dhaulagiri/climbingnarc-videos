import DS from 'ember-data';
import WordpressSerializerMixin from 'climbingnarc-videos/mixins/wordpress-serializer';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, WordpressSerializerMixin, {

	attrs : {
		climbers: { embedded: 'always' },
		areas: { embedded: 'always' },
		categories: { embedded: 'always' },
	},
	extractArray: function(store, type, payload) {
		var payloadTemp = {};
		payload.forEach(function(post) {

			post.embed_url = post.custom_fields.embed[0];

			post.climbers = [];
			if (typeof post.terms.climbers !== "undefined") {
				post.terms.climbers.forEach(function(climber) {
					post.climbers.push(climber);
				});
			}

			post.areas = [];
			if (typeof post.terms['climbing-areas'] !== "undefined") {
				post.terms['climbing-areas'].forEach(function(area) {
					post.areas.push(area);
				});
			}

			post.categories = [];
			if (typeof post.terms.category !== "undefined") {
				post.terms.category.forEach(function(category) {
					post.categories.push(category);
				});
			}
		});

		payloadTemp[type.typeKey] = payload;
		return this._super(store, type, payloadTemp);
	},
	extractSingle: function (store, type, payload, id) {
		var payloadTemp = {};

		payload.embed_url = payload.custom_fields.embed[0];

		payload.climbers = [];
		if (typeof payload.terms.climbers !== "undefined") {
			payload.terms.climbers.forEach(function(climber) {
				payload.climbers.push(climber);
			});
		}

		payload.areas = [];
		if (typeof payload.terms['climbing-areas'] !== "undefined") {
			payload.terms['climbing-areas'].forEach(function(area) {
				payload.areas.push(area);
			});
		}

		payload.categories = [];
		if (typeof payload.terms.category !== "undefined") {
			payload.terms.category.forEach(function(category) {
				payload.categories.push(category);
			});
		}

		payloadTemp[type.typeKey] = [payload];
		return this._super(store, type, payloadTemp, id);
  },
	extractMeta: function(store, type, payload) {
		// TODO -
		if (payload && payload.pages) {
			store.metaForType(type, { total: payload.count_total, pages: payload.pages, page: 1 });
			delete payload.pages;
		}
	}
});
