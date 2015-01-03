import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForModel('area', 'Area', {
  // Specify the other units that are required for this test.
  needs: ['model:post', 'model:climber', 'model:category']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});

test('post relationship', function() {
  var Area = this.store().modelFor('area');
  var relationship = Ember.get(Area, 'relationshipsByName').get('post');

  equal(relationship.key, 'post');
  equal(relationship.kind, 'hasMany');

});
