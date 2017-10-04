# ember-cli-bar-view

This README outlines the details of collaborating on this Ember addon.

```
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

clickedItem: null,
actions: {
  clickAction(item) {
    this.set('clickedItem', item);
  }
}

{{ember-cli-bar-view data=model clickAction=(action 'clickAction')}}

```
## Installation

* `git clone <repository-url>` this repository
* `cd ember-cli-bar-view`
* `npm install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
