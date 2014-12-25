import ApplicationAdapter from './application';

export default ApplicationAdapter.extend({
	pathForType: function() {
		return 'get_recent_posts/?post_type=videos';
	}
});
