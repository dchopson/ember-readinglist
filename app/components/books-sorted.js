import Ember from 'ember';

export default Ember.Component.extend({
  sortedItemsProps: ['title'],
  sortedItems: Ember.computed.sort('books', 'sortedItemsProps')
});
