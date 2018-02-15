import Ember from 'ember';
const { computed } = Ember;

export default Ember.Controller.extend({
  clickedItem: null,
  selectedRow: computed('model.[]', function() {
    return this.get('model')[0];
  }),
  actions: {
    clickAction(item) {
      this.set('clickedItem', item);
    }
  }
});
