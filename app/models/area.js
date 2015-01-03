import DS from 'ember-data';

export default DS.Model.extend({
  slug: DS.attr('string'),
  name: DS.attr('string'),
  count: DS.attr('string'),
  link: DS.attr('string'),

  post: DS.hasMany('post')
});
