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

  barBgStyles: computed('barBgStyle', function() {
    return `${this.get('barBgStyle')} bar`;
  }),

  barSize: computed('item', 'item.value', function() {
    let value = Number.parseInt(get(this, 'item.value')) || 0;
    let maxValue = this.get('maxValue');
    value = (value / maxValue) * 100;
    return `width: ${value}%`;
  }),

  click() {
    this.sendAction('clickAction', this.get('item'));
  }
});
