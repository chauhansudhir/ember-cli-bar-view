import Ember from 'ember';
import layout from '../templates/components/-ember-cli-bar';

const { computed, get } = Ember;

export default Ember.Component.extend({
  layout,
  item: null,
  labelKey: 'label',
  valueKey: 'value',
  barBgStyle: 'ember-cli-bar-bg',
  classNames: 'ember-cli-bar',
  maxValue: 1,
  clickAction: null,

  barSize: computed('item', 'item.value', function() {
    let value = Number.parseInt(get(this, 'item.value')) || 0;
    let maxValue = this.get('maxValue');
    if (maxValue > 1000) {
      value = value / 100;
    } else if (maxValue > 100) {
      value = value / 10;
    }
    return `width: ${value}%`;
  }),

  click() {
    this.sendAction('clickAction', this.get('item'));
  }
});
