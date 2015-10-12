import Ember from 'ember';

export default Ember.Component.extend({
  sortedItemsProps: ['name'],
  sortedItems: Ember.computed.sort('genres', 'sortedItemsProps')
});
