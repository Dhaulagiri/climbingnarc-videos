import {
  moduleForModel,
  test
} from 'ember-qunit';

moduleForModel('term', 'Term', {
  // Specify the other units that are required for this test.
  needs: ['model:post', 'model:climber', 'model:area', 'model:category', 'model:tag', 'model:comment']
});

test('it exists', function() {
  var model = this.subject();
  // var store = this.store();
  ok(!!model);
});
