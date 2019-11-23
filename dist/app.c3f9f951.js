// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"css/loader.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/style.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"css/navbar.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"js/fetchSheetsLength.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function getSheetsLength(callback) {
  document.querySelector('.loader').style.display = 'block';
  var appUrl = 'https://script.google.com/macros/s/AKfycbzyqLGZTdZSFlGtghA2wQRpPb8yMs88uWBB92iYnAga_OhSJ9c/exec';
  fetch(appUrl).then(function (res) {
    return res.json();
  }).then(callback);
}

var _default = getSheetsLength;
exports.default = _default;
},{}],"js/scrollAlarm.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function scrollAlarm(e) {
  var res = this.scrollHeight - this.scrollTop === this.clientHeight;

  if (!this.scrollTop) {
    document.querySelector('.scroll-top').style.visibility = 'visible';
  } else if (res) {
    document.querySelector('.scroll-bottom').style.visibility = 'visible';
  } else {
    document.querySelector('.scroll-top').style.visibility = 'hidden';
    document.querySelector('.scroll-bottom').style.visibility = 'hidden';
  }
}

var _default = scrollAlarm;
exports.default = _default;
},{}],"js/app.js":[function(require,module,exports) {
"use strict";

require("../css/loader.css");

require("../css/style.css");

require("../css/navbar.css");

var _fetchSheetsLength = _interopRequireDefault(require("./fetchSheetsLength"));

var _scrollAlarm = _interopRequireDefault(require("./scrollAlarm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var myData = [];
var posts = {
  postPerpage: 10,
  currentPage: 0,
  results: null,
  currentDay: 0
}; // let firstLoad = true;

var prev = document.querySelector('.previous');
var next = document.querySelector('.next');
window.addEventListener('load', init);
wrapper.addEventListener('scroll', _scrollAlarm.default);

function init(e) {
  // Grid wrapper displaying message
  var div = document.createElement('div');
  div.setAttribute('class', 'message wrapper'); // div.innerText = 'Press start button';

  wrapper.appendChild(div); // Start button

  var button = document.createElement('button');
  button.type = button;
  button.setAttribute('class', 'start');
  button.textContent = "Start Study";
  button.addEventListener('click', function () {
    return (0, _fetchSheetsLength.default)(loadJSON);
  });
  wrapper.appendChild(button); // Game element

  var game = document.createElement('div');
  game.classList.add('game');
  wrapper.insertBefore(game, document.querySelector('.index'));
}

function loadJSON(sheetLength) {
  var urls = [];
  var sheetID = '1mgbYLvqlZ9FIRFbiIhg6C4SQZtHihCOME7f5m49Ze84';

  for (var sheetNum = 1; sheetNum <= sheetLength; sheetNum++) {
    var jsonURL = "https://spreadsheets.google.com/feeds/list/".concat(sheetID, "/").concat(sheetNum, "/public/values?alt=json");
    urls = [].concat(_toConsumableArray(urls), [jsonURL]);
  }

  Promise.all(urls.map(function (url) {
    return fetch(url).then(function (res) {
      return res.json();
    }).then(function (data) {
      var tempArr = [];
      var sheetName = data.feed.title.$t;
      data.feed.entry.forEach(function (item) {
        var holder = {};

        for (var key in item) {
          if (key.substring(4) === 'english') {
            holder.en = item[key].$t;
          } else if (key.substring(4) === 'korean') {
            holder.ko = item[key].$t;
          }
        }

        tempArr = [].concat(_toConsumableArray(tempArr), [holder]);
      });
      return tempArr;
    });
  })).then(function (result) {
    posts.results = result;
    loadPage(0);
    document.querySelector('.loader').style.display = 'none';
  });
}

function loadPage(page) {
  document.querySelector('.game').innerHTML = '';
  posts.currentPage = page;
  document.querySelector('.numday').innerHTML = parseInt(posts.currentPage) + 1; // if (firstLoad) {
  //     document.querySelector('.numday').innerHTML = parseInt(posts.currentPage) + 1;
  //     firstLoad = false;
  // } else {
  //     document.querySelector('.numday').innerHTML = parseInt(posts.currentPage);
  // }

  document.querySelector('.index').classList.remove('hidden');
  document.querySelector('.start').style.display = 'none';
  loadNav();
  loadNumbers();
  var myWords = shuffle(posts.results[page]);
  var game = document.querySelector('.game');
  myWords.forEach(function (word) {
    var box = document.createElement('div');
    box.classList.add('box');
    box.classList.add('tooltip-message');
    box.setAttribute('data-tooltip-message', word.en);
    box.innerText = word.en;
    box.addEventListener('mouseenter', function (e) {
      box.style.backgroundColor = "#4CAF50";
      box.innerText = word.ko;
      loadTooltips(e);
    });
    box.addEventListener('mouseleave', function (e) {
      box.style.backgroundColor = '#3b5998';
      box.innerText = word.en;
      var tooltipOutput = document.querySelector('.tooltip-output');
      tooltipOutput.style.display = 'none';
    });
    game.appendChild(box);
  });

  function add(a) {
    return a + 10;
  }

  function loadTooltips(event) {
    var tooltips = document.querySelectorAll('.tooltip-message');
    var tooltipOutput = document.querySelector('.tooltip-output');
    var myInterval; // clearInterval(myInterval);

    tooltipOutput.style.display = 'block';
    tooltipOutput.style.top = event.clientY + 5 + "px";
    tooltipOutput.style.left = event.clientX + 5 + "px";
    tooltipOutput.innerHTML = event.target.getAttribute("data-tooltip-message");
  }
}

function loadNumbers() {
  var numbers = document.querySelector('.numbers');
  numbers.innerHTML = '';
  posts.results.forEach(function (item, i) {
    var span = document.createElement('span');
    span.classList.add('number');
    span.textContent = i + 1;
    span.addEventListener('click', function (e) {
      numbers.innerHTML = '';
      document.querySelector('.game').innerHTML = '';
      loadPage(parseInt(this.textContent) - 1);
      posts.currentDay = this.textContent;
    });

    if (i + 1 == posts.currentPage + 1) {
      span.classList.add('active');
    }

    numbers.appendChild(span); // if ((parseInt(this.textContent) - 1) == posts.currentPage) {
    //     this.classList.add('isActive');
    // }
  });
}

function loadNav() {
  document.querySelector('.navbar').classList.remove('hidden');
  document.querySelector('.day').innerHTML = "<span class=\"day\">DAY-".concat(parseInt(posts.currentPage) + 1, "</spanclass> in ").concat(posts.results.length);
  document.querySelector('.openbtn').addEventListener('click', function (e) {
    document.getElementById('mySidenav').style.width = '300px';
  });
  document.querySelector('.closebtn').addEventListener('click', function (e) {
    document.getElementById('mySidenav').style.width = '0';
  }, false);
  document.body.addEventListener('mouseleave', function (e) {
    document.getElementById('mySidenav').style.width = '0';
  });
  document.querySelector('.shuffleWords').addEventListener('click', function (e) {
    document.querySelector('.game').innerHTML = '';
    loadPage(posts.currentPage);
    document.getElementById('mySidenav').style.width = '0';
  });
}

prev.addEventListener('click', function (e) {
  if (posts.currentPage - 1 <= 0) {
    alert('Hey, No Negative Pages!');
    return;
  } else {
    document.querySelector('.game').innerHTML = '';
    posts.currentPage--;
    loadPage(posts.currentPage);
  }
});
next.addEventListener('click', function (e) {
  if (posts.currentPage + 1 >= posts.results.length) {
    alert('No More Pages!');
    return;
  } else {
    document.querySelector('.game').innerHTML = '';
    posts.currentPage++;
    loadPage(posts.currentPage);
    console.log(posts.currentPage);
  }
});

function shuffle(arr) {
  var n = arr.length;

  for (var i = n - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  }

  return arr;
} // let myWords = [
//     { en: "measure", ko: "법안" },
//     { en: "disease", ko: "질병" },
//     { en: "vehicle", ko: "차량" },
//     { en: "warn", ko: "경고하다" },
//     { en: "persuade", ko: "설득하다" },
//     { en: "freezing", ko: "동결" },
//     { en: "wipe", ko: "닦다" },
//     { en: "severe", ko: "심한" },
//     { en: "muscle", ko: "근육" },
//     { en: "crop", ko: "곡물" },
//     { en: "amazing", ko: "놀라운" },
//     { en: "agriculture", ko: "농업" },
//     { en: "long", ko: "갈망하다" },
//     { en: "leak", ko: "새다" },
//     { en: "pulse", ko: "맥박" },
//     { en: "military", ko: "군" },
//     { en: "approach", ko: "접근" },
//     { en: "pity", ko: "불쌍한" },
//     { en: "aware", ko: "알고 있는" },
//     { en: "guilty", ko: "죄 있는" },
//     { en: "innocent", ko: "순진한" },
//     { en: "pot", ko: "냄비" },
//     { en: "port", ko: "항구" },
//     { en: "porter", ko: "짐꾼" },
//     { en: "import", ko: "수입하다" },
//     { en: "transport", ko: "운송하다" },
//     { en: "support", ko: "지원하다" },
//     { en: "portable", ko: "휴대 가능한" },
//     { en: "potable", ko: "마실 수 있는" },
//     { en: "leap", ko: "뛰다" },
//     { en: "reap", ko: "수확하다" },
// ]
},{"../css/loader.css":"css/loader.css","../css/style.css":"css/style.css","../css/navbar.css":"css/navbar.css","./fetchSheetsLength":"js/fetchSheetsLength.js","./scrollAlarm":"js/scrollAlarm.js"}],"../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "54795" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../../AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","js/app.js"], null)
//# sourceMappingURL=/app.c3f9f951.js.map