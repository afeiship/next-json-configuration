/*!
 * name: @feizheng/next-json-configuration
 * description: Json configuration for next.
 * homepage: https://github.com/afeiship/next-json-configuration
 * version: 1.1.1
 * date: 2020-06-06T04:00:39.873Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var NxAbstractConfiguration = nx.AbstractConfiguration || require('@feizheng/next-abstract-configuration');
  var DEFALUT_OPTIONS = { path: null, indent: 2, charset: 'utf8' };

  var NxJsonConfiguration = nx.declare('nx.JsonConfiguration', {
    extends: NxAbstractConfiguration,
    methods: {
      initOptions: function (inOptions) {
        this.options = nx.mix(null, DEFALUT_OPTIONS, inOptions);
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

//# sourceMappingURL=next-json-configuration.js.map
