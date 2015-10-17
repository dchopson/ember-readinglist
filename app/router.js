import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('book', { path: '/books/:book_id'});
  this.route('genre', { path: '/genres/:genre_id'});
  this.route('reviews', function() {
    this.route('new');
  });
});

export default Router;
