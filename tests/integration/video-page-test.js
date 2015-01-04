import startApp from 'climbingnarc-videos/tests/helpers/start-app';
import Ember from 'ember';
import Pretender from 'pretender';

var App, server;

module('Integration - Videos Page', {
  setup: function() {
    App = startApp();
    var posts = {
      "24015" : {
        "ID": 24015,
        "title": "The Dawn Wall Push: Day 3",
        "type": "videos"
        }
    };

    server = new Pretender(function() {
      this.get('/wp-json/posts', function(request) {
        return [200, {"Content-Type": "application/json"}, JSON.stringify({posts: posts})];
      });
    });
    server.unhandledRequest = function(verb, path, request) {
      console.log("what is this I don't even...");
      console.log(verb);
      console.log(path);
      console.log(request);
    };

  },
  teardown: function() {
    Ember.run(App, 'destroy');
    server.shutdown();
  }
});

test('Index should list recent videos', function() {
  visit('/').then(function() {
    equal(find('a:contains("The Dawn Wall Push: Day 3")').length, 1);
  });
});

test('Should be able to navigate to a video page', function() {
  expect(1);
  visit('/').then(function() {
    click('a:contains("The Dawn Wall Push: Day 3")').then(function() {
      ok(true);
    });
  });
});
