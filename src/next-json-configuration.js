(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var NxAbstractConfiguration = nx.AbstractConfiguration || require('@feizheng/next-abstract-configuration');
  var DEFALUT_OPTIONS = { path: null, indent: 2, charset: 'utf8' };

  var NxJsonConfiguration = nx.declare('nx.JsonConfiguration', {
    extends: NxAbstractConfiguration,
    methods: {
      defauts: function () {
        return DEFALUT_OPTIONS;
      },
      load: function () {
        return require(this.options.path);
      },
      dump: function () {
        return JSON.stringify(this.data, null, this.options.indent);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxJsonConfiguration;
  }
})();
