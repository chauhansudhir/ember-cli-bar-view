import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return Ember.makeArray([
      { label: 'Test 1',  value: 199 },
      { label: 'Test 2',  value: 115 },
      { label: 'Test 3',  value: 112 },
      { label: 'Test 4',  value: 112 },
      { label: 'Test 5',  value: 110 },
      { label: 'Test 6',  value: 91 },
      { label: 'Test 7',  value: 17 },
      { label: 'Test 8',  value: 41 },
      { label: 'Test 9',  value: 21 },
    ]);
  }
});
