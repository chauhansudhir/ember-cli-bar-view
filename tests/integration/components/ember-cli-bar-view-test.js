import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

moduleForComponent('ember-cli-bar-view', 'Integration | Component | ember cli bar view', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{ember-cli-bar-view}}`);

  assert.equal(this.$().text().trim(), '');
  this.set('model', Ember.makeArray([
    { label: 'Test 0',  value: 90 },
    { label: 'Test 1',  value: 86 },
    { label: 'Test 2',  value: 77 },
    { label: 'Test 3',  value: 60 },
    { label: 'Test 4',  value: 50 },
    { label: 'Test 5',  value: 40 },
    { label: 'Test 6',  value: 30 },
    { label: 'Test 7',  value: 15 },
    { label: 'Test 8',  value: 1 },
  ]));

  // Template block usage:
  this.render(hbs`
    {{ember-cli-bar-view data=model}}
  `);

  assert.equal(this.$('.ember-cli-bar-view-grid .bar-label:first').html().trim(), 'Test 0');
});
