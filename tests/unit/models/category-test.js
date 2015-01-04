import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForModel('category', 'Category', {
  // Specify the other units that are required for this test.
  needs: ['model:post', 'model:climber', 'model:area', 'model:tag', 'model:comment', 'model:user']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});

test('post relationship', function() {
  var Category = this.store().modelFor('category');
  var relationship = Ember.get(Category, 'relationshipsByName').get('posts');

  equal(relationship.key, 'posts');
  equal(relationship.kind, 'hasMany');

});
