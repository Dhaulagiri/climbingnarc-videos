import DS from 'ember-data';
import ajax from 'ic-ajax';

export default DS.Model.extend({
  slug: DS.attr('string'),
  url: DS.attr('string'),
  title: DS.attr('string'),
  title_plain: DS.attr('string'),
  date: DS.attr('date'),
  embed_url: DS.attr('string'),  

  climbers: DS.hasMany('climber'),
  areas: DS.hasMany('area'),
  categories: DS.hasMany('category'),

  embed_html: function() {
  	var embed = this.get('embed_url');
  	if (embed.indexOf('vimeo') === -1) {
			return embed;
		}

		//var url = endpoint + '?url=' + encodeURIComponent(input) + '&callback=' + callback + '&width=640';
		var url = 'http://vimeo.com/api/oembed.json?url=' + embed;
		return "<strong>foo</strong>";
		
		ajax(url).then(function(result) {
			debugger
			// return Ember.Handlebars.SafeString(result.html);
			return result.html;
		});
  }.property('embed_url')
});
