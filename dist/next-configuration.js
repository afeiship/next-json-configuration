/*!
 * name: @feizheng/next-configuration
 * description: Json configuration for next.
 * homepage: https://github.com/afeiship/next-configuration
 * version: 1.0.1
 * date: 2020-04-24T07:24:15.886Z
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@feizheng/next-js-core2');
  var fs = require('fs');
  var DEFALUT_OPTIONS = { path: null, indent: 2 };

  var NxConfiguration = nx.declare('nx.Configuration', {
    methods: {
      init: function (inOptions) {
        this.options = nx.mix(null, DEFALUT_OPTIONS, inOptions);
        this.data = require(this.options.path);
      },
      set: function (inPath, inValue) {
        nx.set(this.data, inPath, inValue);
      },
      sets: function (inObject) {
        nx.forIn(
          inObject,
          function (key, value) {
            nx.set(this.data, key, value);
          },
          this
        );
      },
      get: function (inPath) {
        return nx.get(this.data, inPath);
      },
      gets: function () {
        return this.data;
      },
      update: function (inObject) {
        this.sets(inObject);
        this.save();
      },
      save: function () {
        var str = JSON.stringify(this.data, null, this.options.indent);
        fs.writeFileSync(this.options.path, str);
      }
    }
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = NxConfiguration;
  }
})();

//# sourceMappingURL=next-configuration.js.map
