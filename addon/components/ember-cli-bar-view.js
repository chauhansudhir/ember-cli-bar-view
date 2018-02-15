import Ember from 'ember';
import layout from '../templates/components/ember-cli-bar-view';

const { computed, defineProperty, get } = Ember;

export default Ember.Component.extend({
  layout,
  data: null,
  selectedRow: null,
  labelKey: 'label',
  valueKey: 'value',
  barBgStyle: 'ember-cli-bar-bg',
  clickAction: null,
  init() {
    this._super(...arguments);
    defineProperty(this, 'maxValue', computed(`data.@each.${this.get('valueKey')}`, `${this.get('valueKey')}`, function() {
      let max = 0;
      let valKey = this.get('valueKey');
      this.get('data').forEach((item) => {
        if (get(item, valKey) > max) {
          max = get(item, valKey);
        }
      });
      return max;
    }));
  }

});
