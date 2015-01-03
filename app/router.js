import Ember from "ember";
import config from "./config/environment";

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route("video", {
    path: "videos/:id"
  });

  this.route("videos");
});

export default Router;