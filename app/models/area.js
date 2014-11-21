import DS from 'ember-data';

export default DS.Model.extend({
  slug: DS.attr('string'),
  title: DS.attr('string'),
  post_count: DS.attr('string'),

  post: DS.belongsTo('post')
});
