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
    })({"./src/index.js":{"dependencies":{"./const.js":"./src\\const.js","./utils.js":"./src\\utils.js"},"code":"\"use strict\";\n\nvar _const = _interopRequireDefault(require(\"./const.js\"));\nvar _utils = require(\"./utils.js\");\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nvar sum = (0, _utils.add)(_const[\"default\"].a, _const[\"default\"].b, _const[\"default\"].c) + (0, _utils.add)(_const[\"default\"].a, _const[\"default\"].b, _const[\"default\"].c) + (0, _utils.add)(_const[\"default\"].a, _const[\"default\"].b, _const[\"default\"].c);\nconsole.log('sum', sum);"},"./src\\const.js":{"dependencies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = void 0;\nvar _default = exports[\"default\"] = {\n  a: 1,\n  b: 2,\n  c: 3\n};"},"./src\\utils.js":{"dependencies":{"./log.js":"./src\\log.js"},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.add = add;\nvar _log = _interopRequireDefault(require(\"./log.js\"));\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\nvar num = 0;\nfunction add() {\n  num += 1;\n  (0, _log[\"default\"])('add', num);\n  for (var _len = arguments.length, arg = new Array(_len), _key = 0; _key < _len; _key++) {\n    arg[_key] = arguments[_key];\n  }\n  return arg.reduce(function (prev, curr) {\n    return prev + curr;\n  }, 0);\n}"},"./src\\log.js":{"dependencies":{},"code":"\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports[\"default\"] = log;\n// import { add } from \"./utils.js\";\nfunction log(funcName, number) {\n  console.log(funcName + \" run \" + number + \" times.\");\n  //   console.log(add(1,2))\n}"}})