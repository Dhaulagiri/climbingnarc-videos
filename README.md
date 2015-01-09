# Climbingnarc-videos

This application provides an Ember.js frontend for the [ClimbingNarc.com videos section](http://climbingnarc.com/videos).  It leverages a RESTful API exposed via the [WP-API plugin](https://github.com/WP-API/WP-API) to provide data to the Ember app.

The overarching goal of this project is to build a much more responsive and interactive video browsing experience.  Key items I would like to implement include:

- [ ] Index list of current videos that either has inifinite scrolling to load additional videos or some sort of user directed action that can load additional videos.
- [ ] Video detail page that includes the video, commments, ratings and related videos.  The most difficult of these is the ratings function which will require customization of the Wordpress API.
- [ ] Video search to let users search generically as well as by specific climbers or climbing areas (each video is tagged through Wordpress's custom taxonomies with the climber(s) and climbing area(s) featured).  A basic version of this is implemented, but it would be much more powerful if we could filter on specific climbers/areas.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://www.ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`
* `bower install`

## Running / Development

* `ember server`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Code Generators

Make use of the many generators for code, try `ember help generate` for more details

### Running Tests

* `ember test`
* `ember test --server`

### Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://www.ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

