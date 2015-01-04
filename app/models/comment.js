import DS from 'ember-data';

export default DS.Model.extend({
  content: DS.attr(),
  status: DS.attr(),
  date: DS.attr(),
  date_tz: DS.attr(),
  date_gmt: DS.attr('date'),

  author: DS.belongsTo('user'),
  parent: DS.belongsTo('post')
});
