import {
  moduleForModel,
  test
} from 'ember-qunit';
import Ember from 'ember';

moduleForModel('user', 'User', {
  // Specify the other units that are required for this test.
  needs: ['model:comment', 'model:post']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
