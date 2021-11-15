(function () {
  const NxJsonConfiguration = require('../src');

  describe('NxJsonConfiguration.methods', function () {
    test('set/sets to pkg.json', function () {
      var path = process.cwd() + '/__tests__/pkg.json';
      var store = new NxJsonConfiguration({ path });
      store.update({ name: 'test-name' });
      expect(store.get('name')).toBe('test-name');
    });

    test('load multi json', () => {
      var store = new NxJsonConfiguration({
        path: [
          process.cwd() + '/__tests__/1.json',
          process.cwd() + '/__tests__/2.json'
        ]
      });

      expect(store.gets()).toEqual({ name: 'p2', abc: { item: 123 }, def: { item: 234 } });
    });
  });
})();
