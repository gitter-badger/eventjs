(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './EventEmitter'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./EventEmitter'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.EventEmitter);
    global.EventJS = mod.exports;
  }
})(this, function (exports, _EventEmitter) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _EventEmitter2 = _interopRequireDefault(_EventEmitter);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  /**
   * Define the EventJS library.
   *
   * @type {object}
   */
  var EventJS = {
    version: '1.0.0'
  };

  // Register modules.
  EventJS.EventEmitter = _EventEmitter2.default;

  // Export EventJS library.
  exports.default = EventJS;
});