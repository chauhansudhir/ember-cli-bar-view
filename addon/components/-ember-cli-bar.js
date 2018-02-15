import Ember from 'ember';
import layout from '../templates/components/-ember-cli-bar';
import { htmlSafe } from '@ember/string';
const { computed, get, isBlank } = Ember;

export default Ember.Component.extend({
  layout,
  classNameBindings: ['selectedRowCss'],
  classNames: ['ember-cli-bar'],
  item: null,
  labelKey: 'label',
  valueKey: 'value',
  barBgStyle: 'ember-cli-bar-bg',
  maxValue: 1,
  clickAction: null,
  selectedRow: null,

  barBgStyles: computed('barBgStyle', function() {
    return `${this.get('barBgStyle')} bar`;
  }),

  barSize: computed('item', 'item.value', function() {
    let value = Number.parseInt(get(this, 'item.value')) || 0;
    let maxValue = this.get('maxValue');
    value = (value / maxValue) * 100;
    return htmlSafe(`width: ${value}%`);
  }),

  selectedRowCss: computed('selectedRow', 'item', function() {
    let selectedRow = this.get('selectedRow');
    let item = this.get('item');
    return isBlank(selectedRow) ? '' : (selectedRow === item) ? 'selected' : 'not-selected';
  }),

  click() {
    this.sendAction('clickAction', this.get('item'));
  }
});
