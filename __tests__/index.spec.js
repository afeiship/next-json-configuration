(function () {
  const NxJsonConfiguration = require('../src');

  describe('NxJsonConfiguration.methods', function () {
    test('set/sets to pkg.json', function () {
      var path = process.cwd() + '/__tests__/pkg.json';
      var store = new NxJsonConfiguration({ path });
      store.update({ name: 'test-name' });
      expect(store.get('name')).toBe('test-name');
    });
  });
})();
