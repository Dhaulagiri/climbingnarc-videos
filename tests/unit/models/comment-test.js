import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForModel('comment', 'Comment', {
  // Specify the other units that are required for this test.
  needs: ['model:user', 'model:post', 'model:climber', 'model:area', 'model:category', 'model:tag']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});


test('post relationship', function() {
  var Comment = this.store().modelFor('comment');
  var relationship = Ember.get(Comment, 'relationshipsByName').get('parent');

  equal(relationship.key, 'parent');
  equal(relationship.kind, 'belongsTo');

});

test('author relationship', function() {
  var Comment = this.store().modelFor('comment');
  var relationship = Ember.get(Comment, 'relationshipsByName').get('author');

  equal(relationship.key, 'author');
  equal(relationship.kind, 'belongsTo');
});
