export default Ember.Route.extend({
  model() {
    return Ember.RSVP.hash({
      books: this.store.findAll('book'),
      genres: this.store.findAll('genre')
    });
  }
});
