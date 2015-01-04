import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForModel('climber', 'Climber', {
  // Specify the other units that are required for this test.
  needs: ['model:post', 'model:category', 'model:area', 'model:tag', 'model:comment', 'model:user']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});

test('post relationship', function() {
  var Climber = this.store().modelFor('climber');
  var relationship = Ember.get(Climber, 'relationshipsByName').get('posts');

  equal(relationship.key, 'posts');
  equal(relationship.kind, 'hasMany');

});
