(function() {
  const NxJsonConfiguration = require('../src');

  describe('NxJsonConfiguration.methods', function() {
    test('set/sets', function () {
      var path = '/Users/feizheng/github/next-json-configuration/__tests__/pkg.json';
      var store = new NxJsonConfiguration({ path });
      store.update({ name: 'test-name' });
      console.log(store);
    });
  });
})();
