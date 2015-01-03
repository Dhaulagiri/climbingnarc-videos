import DS from 'ember-data';
import WordpressSerializerMixin from 'climbingnarc-videos/mixins/wordpress-serializer';

export default DS.RESTSerializer.extend(WordpressSerializerMixin, {
});
