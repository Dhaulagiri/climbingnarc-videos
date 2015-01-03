import Ember from 'ember';
import WordpressSerializerMixin from 'climbingnarc-videos/mixins/wordpress-serializer';

module('WordpressSerializerMixin');

// Replace this with your real tests.
test('it works', function() {
  var WordpressSerializerObject = Ember.Object.extend(WordpressSerializerMixin);
  var subject = WordpressSerializerObject.create();
  ok(subject);
});
