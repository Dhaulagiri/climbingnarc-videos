import DS from 'ember-data';

export default DS.Model.extend({
  slug: DS.attr('string'),
  link: DS.attr('string'),
  title: DS.attr('string'),

  date: DS.attr('date'),
  embed_url: DS.attr('string'),
  previous_url: DS.attr('string'),
  next_url: DS.attr('string'),

  climbers: DS.hasMany('climber'),
  areas: DS.hasMany('area'),
  categories: DS.hasMany('category')
});
