import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.makeArray([
      { label: 'Test 0',  value: 90 },
      { label: 'Test 1',  value: 86 },
      { label: 'Test 2',  value: 77 },
      { label: 'Test 3',  value: 60 },
      { label: 'Test 4',  value: 50 },
      { label: 'Test 5',  value: 40 },
      { label: 'Test 6',  value: 30 },
      { label: 'Test 7',  value: 15 },
      { label: 'Test 8',  value: 1 },
    ]);
  }
});
