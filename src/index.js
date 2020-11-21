(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var fs = require('fs');
  var NxAbstractConfiguration = nx.AbstractConfiguration || require('@jswork/next-abstract-configuration');
  var DEFALUT_OPTIONS = { path: null, indent: 2, charset: 'utf8' };

  var NxJsonConfiguration = nx.declare('nx.JsonConfiguration', {
    extends: NxAbstractConfiguration,
    methods: {
      defaults: function () {
        return DEFALUT_OPTIONS;
      },
      load: function () {
        return JSON.parse(fs.readFileSync(this.options.path, this.options.charset));
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
