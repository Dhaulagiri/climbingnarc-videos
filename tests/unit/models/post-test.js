import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForModel('post', 'Post', {
  // Specify the other units that are required for this test.
  needs: ['model:climber', 'model:area', 'model:category']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});

test('climber relationship', function() {
  var Post = this.store().modelFor('post');
  var relationship = Ember.get(Post, 'relationshipsByName').get('climbers');

  equal(relationship.key, 'climbers');
  equal(relationship.kind, 'hasMany');
});

test('area relationship', function() {
  var Post = this.store().modelFor('post');
  var relationship = Ember.get(Post, 'relationshipsByName').get('areas');

  equal(relationship.key, 'areas');
  equal(relationship.kind, 'hasMany');
});

test('category relationship', function() {
  var Post = this.store().modelFor('post');
  var relationship = Ember.get(Post, 'relationshipsByName').get('categories');

  equal(relationship.key, 'categories');
  equal(relationship.kind, 'hasMany');
});