import DS from 'ember-data';

export default DS.RESTAdapter.extend({
	host: 'http://climbingnarc.com',
	namespace: 'wp-json'
});
