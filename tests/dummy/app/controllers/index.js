import Ember from 'ember';

export default Ember.Controller.extend({
  clickedItem: null,
  actions: {
    clickAction(item) {
      this.set('clickedItem', item);
    }
  }
});
