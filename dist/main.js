(function(graph){
      function require(module){
        function localRequire(relativePath){
          return require(graph[module].dependencies[relativePath])
        }
        var exports = {};
        (function(require,exports,code){
          eval(code)
        })(localRequire,exports,graph[module].code);
        return exports;
      }
      require('./src/index.js')
    })({"./src/index.js":{"dependencies":{"./const.js":"./src/const.js","./utils.js":"./src/utils.js"},"code":"\"use strict\";\n\nvar _const = _interopRequireDefault(require(\"./const.js\"));\n\nvar _utils = require(\"./utils.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nconsole.log(_const[\"default\"].a + _const[\"default\"].b + (0, _utils.add)(_const[\"default\"].a, _const[\"default\"].b));"},"./src/const.js":{"dependencies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = {\n  a: 1,\n  b: 2\n};\nexports[\"default\"] = _default;"},"./src/utils.js":{"dependencies":{"./const.js":"./src/const.js"},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.add = add;\n\nvar _const = _interopRequireDefault(require(\"./const.js\"));\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\nconsole.log('obj', _const[\"default\"]);\n\nfunction add(a, b) {\n  return a + b;\n}"}})