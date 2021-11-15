(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var fs = require('fs');
  var NxAbstractConfiguration = nx.AbstractConfiguration || require('@jswork/next-abstract-configuration');
  var nxDeepAssign = nx.deepAssign || require('@jswork/next-deep-assign');
  var DEFALUT_OPTIONS = { path: null, indent: 2, charset: 'utf8' };

  var NxJsonConfiguration = nx.declare('nx.JsonConfiguration', {
    extends: NxAbstractConfiguration,
    methods: {
      defaults: function () {
        return DEFALUT_OPTIONS;
      },
      load: function () {
        var optPath = this.options.path;
        var charset = this.options.charset;
        if (typeof optPath === 'string') return JSON.parse(fs.readFileSync(optPath, charset));
        var data = optPath.map(function (path) {
          return JSON.parse(fs.readFileSync(path, charset));
        });
        return nxDeepAssign.apply(null, data);
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
