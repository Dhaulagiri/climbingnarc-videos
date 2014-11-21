import DS from 'ember-data';

export default DS.Model.extend({
  slug: DS.attr('string'),
  url: DS.attr('string'),
  title: DS.attr('string'),
  title_plain: DS.attr('string'),
  date: DS.attr('date'),

  climbers: DS.hasMany('climber'),
  areas: DS.hasMany('area'),
  categories: DS.hasMany('category')
});
