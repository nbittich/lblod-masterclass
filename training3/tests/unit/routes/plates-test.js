import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | plates', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:plates');
    assert.ok(route);
  });
});
