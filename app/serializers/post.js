import DS from 'ember-data';

export default DS.RESTSerializer.extend(DS.EmbeddedRecordsMixin, {
	primaryKey: 'ID',
	attrs : {
		climbers: { embedded: 'always' },
		areas: { embedded: 'always' },
		categories: { embedded: 'always' },
	},
	extractArray: function(store, type, payload) {
		var payloadTemp = {};
		// payload.forEach(function(post) {
		// 	post.climbers = [];
		//
		// 	if (typeof post.terms.climbers !== "undefined") {
		// 		post.terms.climbers.forEach(function(climber) {
		// 			//post.climbers.push(climber);
		// 		});
		// 	}
		// });
		payloadTemp[type.typeKey] = payload;
		return this._super(store, type, payloadTemp);
	},
	extractSingle: function (store, type, payload, id) {
		var payloadTemp = {};
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
