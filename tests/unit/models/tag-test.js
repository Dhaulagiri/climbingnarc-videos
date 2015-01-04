import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('tag', 'Tag', {
  // Specify the other units that are required for this test.
  needs: ['model:post', 'model:climber', 'model:category', 'model:area', 'model:comment', 'model:user']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
