(function () {
  var nx = require('@feizheng/next-js-core2');
  var NxConfiguration = require('../src/next-configuration');

  describe('NxConfiguration.methods', function () {
    test('set/sets', function () {
      var path = '/Users/feizheng/github/next-configuration/__tests__/pkg.json';
      var store = new NxConfiguration({ path });
      store.update({ name: 'test-name' });
      console.log(store);
    });
  });
})();
