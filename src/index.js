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
        if (typeof optPath === 'string') return this.__read(optPath);
        var data = optPath.map(this.__read.bind(this)).filter(Boolean);
        return nxDeepAssign.apply(null, data);
      },
      dump: function () {
        return JSON.stringify(this.data, null, this.options.indent);
      },
      __read: function (inFilepath) {
        var charset = this.options.charset;
        if (fs.existsSync(inFilepath)) {
          return JSON.parse(fs.readFileSync(inFilepath, charset));
        }
        return null;
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxJsonConfiguration;
  }
})();
