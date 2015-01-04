import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  status: DS.attr(),
  type: DS.attr(),
  content: DS.attr(),
  parent: DS.attr(),
  link: DS.attr(),
  date: DS.attr('date'),
  modified: DS.attr('date'),
  format: DS.attr(),
  slug: DS.attr(),
  guid: DS.attr(),
  excerpt: DS.attr(),
  menu_order: DS.attr('number'),
  comment_status: DS.attr(),
  ping_status: DS.attr(),
  sticky: DS.attr('boolean'),
  date_tz: DS.attr(),
  date_gmt: DS.attr('date'),
  modified_tz: DS.attr(),
  modified_gmt: DS.attr('date'),
  featured_image: DS.attr(),

  embed_url: DS.attr('string'),
  previous_url: DS.attr('string'),
  next_url: DS.attr('string'),

  climbers: DS.hasMany('climber'),
  areas: DS.hasMany('area'),
  categories: DS.hasMany('category'),
  tags: DS.hasMany('tag'),

  provider: DS.attr(),
  videoId: DS.attr(),

  parsedVideoUrl: function () {   // adapted from http://stackoverflow.com/questions/9552883
    function getParm(url, base) {
      var re = new RegExp("(\\?|&)" + base + "\\=([^&]*)(&|$)");
      var matches = url.match(re);
      if (matches) {
        return(matches[2]);
      } else {
        return("");
      }
    }

    var matches;
    var url = this.get('embed_url');
    if (url.indexOf("youtube.com/watch") !== -1) {
      this.set('provider', 'youtube');
      this.set('videoId', getParm(url, "v"));
    } else if (matches = url.match(/vimeo.com\/(\d+)/)) {
      this.set('provider', 'vimeo');
      this.set('videoId', matches[1]);
    }
  }.observes('embed_url').on('didLoad')
});
