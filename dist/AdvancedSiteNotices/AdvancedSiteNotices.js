/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-AdvancedSiteNotices.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/AdvancedSiteNotices}
 * @license CC-BY-SA-4.0 {@link https://www.qiuwenbaike.cn/wiki/H:CC-BY-SA-4.0}
 */
/**
 * +------------------------------------------------------------+
 * |            === WARNING: GLOBAL GADGET FILE ===             |
 * +------------------------------------------------------------+
 * |       All changes should be made in the repository,        |
 * |                otherwise they will be lost.                |
 * +------------------------------------------------------------+
 * |        Changes to this page may affect many users.         |
 * | Please discuss changes by opening an issue before editing. |
 * +------------------------------------------------------------+
 */
/* <nowiki> */

(() => {

"use strict";
var __getOwnPropNames = Object.getOwnPropertyNames;
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};

// node_modules/.pnpm/broadcastchannel-polyfill@1.0.1/node_modules/broadcastchannel-polyfill/index.js
var require_broadcastchannel_polyfill = __commonJS({
  "node_modules/.pnpm/broadcastchannel-polyfill@1.0.1/node_modules/broadcastchannel-polyfill/index.js"() {
    (function(global) {
      var channels = [];
      function BroadcastChannel2(channel) {
        var $this = this;
        channel = String(channel);
        var id = "$BroadcastChannel$" + channel + "$";
        channels[id] = channels[id] || [];
        channels[id].push(this);
        this._name = channel;
        this._id = id;
        this._closed = false;
        this._mc = new MessageChannel();
        this._mc.port1.start();
        this._mc.port2.start();
        global.addEventListener("storage", function(e) {
          if (e.storageArea !== global.localStorage) return;
          if (e.newValue == null || e.newValue === "") return;
          if (e.key.substring(0, id.length) !== id) return;
          var data = JSON.parse(e.newValue);
          $this._mc.port2.postMessage(data);
        });
      }
      BroadcastChannel2.prototype = {
        // BroadcastChannel API
        get name() {
          return this._name;
        },
        postMessage: function(message) {
          var $this = this;
          if (this._closed) {
            var e = new Error();
            e.name = "InvalidStateError";
            throw e;
          }
          var value = JSON.stringify(message);
          var key = this._id + String(Date.now()) + "$" + String(Math.random());
          global.localStorage.setItem(key, value);
          setTimeout(function() {
            global.localStorage.removeItem(key);
          }, 500);
          channels[this._id].forEach(function(bc) {
            if (bc === $this) return;
            bc._mc.port2.postMessage(JSON.parse(value));
          });
        },
        close: function() {
          if (this._closed) return;
          this._closed = true;
          this._mc.port1.close();
          this._mc.port2.close();
          var index = channels[this._id].indexOf(this);
          channels[this._id].splice(index, 1);
        },
        // EventTarget API
        get onmessage() {
          return this._mc.port1.onmessage;
        },
        set onmessage(value) {
          this._mc.port1.onmessage = value;
        },
        addEventListener: function() {
          return this._mc.port1.addEventListener.apply(this._mc.port1, arguments);
        },
        removeEventListener: function() {
          return this._mc.port1.removeEventListener.apply(this._mc.port1, arguments);
        },
        dispatchEvent: function() {
          return this._mc.port1.dispatchEvent.apply(this._mc.port1, arguments);
        }
      };
      global.BroadcastChannel = global.BroadcastChannel || BroadcastChannel2;
    })(self);
  }
});

// dist/AdvancedSiteNotices/AdvancedSiteNotices.js
require_broadcastchannel_polyfill();
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c), u = i.value;
  } catch (n2) {
    return void e(n2);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function() {
    var t = this, e = arguments;
    return new Promise(function(r, o) {
      var a = n.apply(t, e);
      function _next(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n2);
      }
      function _throw(n2) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n2);
      }
      _next(void 0);
    });
  };
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) {
      t && (r = t);
      var n = 0, F = function() {
      };
      return { s: F, n: function() {
        return n >= r.length ? { done: true } : { done: false, value: r[n++] };
      }, e: function(r2) {
        throw r2;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o, a = true, u = false;
  return { s: function() {
    t = t.call(r);
  }, n: function() {
    var r2 = t.next();
    return a = r2.done, r2;
  }, e: function(r2) {
    u = true, o = r2;
  }, f: function() {
    try {
      a || null == t.return || t.return();
    } finally {
      if (u) throw o;
    }
  } };
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames2 = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames2(from)), _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done; ) {
        let key = _step.value;
        if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
          get: () => from[key],
          enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
        });
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", {
    value: mod,
    enumerable: true
  }) : target,
  mod
));
//! src/AdvancedSiteNotices/options.json
var ajaxPageTitle = "Template:AdvancedSiteNotices/ajax";
var mountPointSelector = "#siteNotice";
var storageKey = "ext.gadget.AdvancedSiteNotices_dismissASN";
var version = "4.0";
//! src/AdvancedSiteNotices/AdvancedSiteNotices.ts
var import_ext_gadget7 = require("ext.gadget.Util");
//! src/AdvancedSiteNotices/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("AdvancedSiteNotices/".concat(version));
//! src/AdvancedSiteNotices/modules/util/queryApi.ts
var {
  wgUserLanguage
} = mw.config.get();
var parameters = {
  action: "parse",
  format: "json",
  formatversion: "2",
  prop: "text",
  page: ajaxPageTitle,
  uselang: wgUserLanguage,
  variant: wgUserLanguage
};
var queryApi = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* () {
    try {
      return yield api.get(parameters);
    } catch (error) {
      console.error("[AdvancedSiteNotices] Ajax error:", error);
      return {};
    }
  });
  return function queryApi2() {
    return _ref.apply(this, arguments);
  };
}();
//! src/AdvancedSiteNotices/modules/loadRemoteNotices.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
var loadRemoteNotices = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* () {
    const response = yield queryApi();
    const responseParse = response["parse"];
    if (!(responseParse !== null && responseParse !== void 0 && responseParse.text)) {
      return {};
    }
    const remoteNotice = (/* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
      innerHTML: responseParse.text
    })).querySelector("ul.sitents");
    if (!remoteNotice) {
      return {};
    }
    const $remoteNotices = $(remoteNotice);
    const $notices2 = $remoteNotices.find("li");
    const remoteNoticesVersion = $remoteNotices.data("asn-version").toString();
    return {
      $notices: $notices2,
      version: remoteNoticesVersion
    };
  });
  return function loadRemoteNotices2() {
    return _ref2.apply(this, arguments);
  };
}();
//! src/AdvancedSiteNotices/modules/constant.ts
var CLASS_NAME = "gadget-advanced_site_notices";
var CLASS_NAME_DISMISS = "".concat(CLASS_NAME, "__dismiss");
var CLASS_NAME_NOTICE = "".concat(CLASS_NAME, "__notice");
var CLASS_NAME_NOTICE_CONTENT = "".concat(CLASS_NAME_NOTICE, "__content");
var CLASS_NAME_TITLE = "".concat(CLASS_NAME, "__title");
//! src/AdvancedSiteNotices/modules/showNotice.tsx
var import_ext_gadget5 = __toESM(require("ext.gadget.React"), 1);
//! src/AdvancedSiteNotices/modules/util/generateArea.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.React"), 1);
//! src/AdvancedSiteNotices/modules/i18n.ts
var import_ext_gadget3 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Dismiss: (0, import_ext_gadget3.localize)({
      en: "Turn off this notice",
      ja: "ASNをオフにする",
      "zh-hans": "关闭公告",
      "zh-hant": "關閉公告"
    }),
    DismissNotice: (0, import_ext_gadget3.localize)({
      en: "You have chosen to turn off Advanced Site Notices for the next 30 days. <br>If the site-wide announcement is not updated within the next 30 days, it will no longer be displayed; however, if the site-wide announcement is updated, it will be displayed again.",
      ja: "今後30日間、ASNをオフにすることを選択しました。<br>サイト全体の通知が今後30日以内に更新されない場合、表示されなくなります。ただし、サイト全体の通知が更新される場合は、再び表示されます。",
      "zh-hans": "您已选择在接下来30日内关闭“高级站点通告”。<br>若接下来30日内全站公告未有更新，则不再显示；但是，若全站公告内容更新，则将重新显示。",
      "zh-hant": "您已選擇在接下來30日內關閉「高級站點通告」。<br>若接下來30日內全站公告未有更新，則不再顯示；但是，若全站公告內容更新，則將重新顯示。"
    }),
    Title: (0, import_ext_gadget3.localize)({
      en: "Announcement",
      ja: "通知",
      zh: "公告"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/AdvancedSiteNotices/modules/util/generateArea.tsx
var generateArea = () => {
  const area = /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: [CLASS_NAME, "noprint"]
  }, /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: CLASS_NAME_TITLE
  }, getMessage("Title")), /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: CLASS_NAME_NOTICE
  }, /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: [CLASS_NAME_NOTICE_CONTENT, "center"]
  })), /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: CLASS_NAME_DISMISS
  }, /* @__PURE__ */ import_ext_gadget4.default.createElement("a", {
    role: "button",
    "aria-label": getMessage("Dismiss")
  })));
  return $(area);
};
//! src/AdvancedSiteNotices/modules/util/matchCriteria.ts
var {
  wgUserGroups,
  wgGlobalGroups,
  wgUserLanguage: wgUserLanguage2
} = mw.config.get();
var in_group = (group) => {
  return !!(wgUserGroups !== null && wgUserGroups !== void 0 && wgUserGroups.includes(group) || wgGlobalGroups !== null && wgGlobalGroups !== void 0 && wgGlobalGroups.includes(group));
};
var only_for = (userLanguage) => {
  return userLanguage === wgUserLanguage2;
};
var matchCriteria = ($notice) => {
  var _$notice$data;
  const cache = $notice.data("asn-cache");
  if (cache !== void 0) {
    return cache;
  }
  const testCriteria = (criteria) => {
    try {
      return window.eval(criteria);
    } catch {
      return false;
    }
  };
  let result = false;
  const criteriaData = ((_$notice$data = $notice.data("asn-criteria")) !== null && _$notice$data !== void 0 ? _$notice$data : "").trim();
  if (criteriaData) {
    try {
      result = testCriteria(mw.Uri.decode(criteriaData));
    } catch {
      result = true;
    }
  } else if ($notice.attr("class")) {
    let criteria;
    if ($notice.hasClass("only_sysop")) {
      criteria || (criteria = in_group("sysop") || in_group("steward") || in_group("qiuwen"));
    }
    if ($notice.hasClass("only_logged")) {
      criteria || (criteria = in_group("user"));
    }
    if ($notice.hasClass("only_anon")) {
      criteria || (criteria = !in_group("user"));
    }
    if ($notice.hasClass("only_zh_cn")) {
      criteria || (criteria = only_for("zh-cn"));
    }
    if ($notice.hasClass("only_zh_sg")) {
      criteria || (criteria = only_for("zh-sg"));
    }
    if ($notice.hasClass("only_zh_my")) {
      criteria || (criteria = only_for("zh-my"));
    }
    if ($notice.hasClass("only_zh_hk")) {
      criteria || (criteria = only_for("zh-hk"));
    }
    if ($notice.hasClass("only_zh_mo")) {
      criteria || (criteria = only_for("zh-mo"));
    }
    if ($notice.hasClass("only_zh_tw")) {
      criteria || (criteria = only_for("zh-tw"));
    }
    if (criteria === void 0) {
      criteria = true;
    }
    result = criteria;
  } else {
    result = true;
  }
  $notice.data("asn-cache", result);
  return result;
};
//! src/AdvancedSiteNotices/modules/showNotice.tsx
var import_ext_gadget6 = require("ext.gadget.Tippy");
var broadcastChannel = new BroadcastChannel(storageKey);
var currentVersion = "0";
var localVersion = mw.storage.get(storageKey);
var timer;
var $area = generateArea();
var $currentNotice = $area.find(".".concat(CLASS_NAME_NOTICE_CONTENT));
var $dismiss = $area.find(".".concat(CLASS_NAME_DISMISS)).find("a");
var closeNotices = () => {
  broadcastChannel.postMessage("close");
  broadcastChannel.close();
  clearTimeout(timer);
  $area.remove();
  mw.storage.set(storageKey, currentVersion, 60 * 60 * 24 * 30 * 1e3);
};
broadcastChannel.addEventListener("message", closeNotices);
$dismiss.on("click", () => {
  closeNotices();
  void mw.notify($(/* @__PURE__ */ import_ext_gadget5.default.createElement("span", {
    innerHTML: getMessage("DismissNotice")
  })), {
    tag: "AdvancedSiteNotices"
  });
});
(0, import_ext_gadget6.tippy)($dismiss.get(0), {
  arrow: true,
  content: $dismiss.attr("aria-label"),
  placement: "bottom"
});
var $notices;
var noticeStyles = [];
var showNotices = ($mountPoint, index, remoteNotices) => {
  var _remoteNotices$versio;
  currentVersion = (_remoteNotices$versio = remoteNotices === null || remoteNotices === void 0 ? void 0 : remoteNotices.version) !== null && _remoteNotices$versio !== void 0 ? _remoteNotices$versio : currentVersion;
  if (currentVersion === localVersion) {
    return;
  }
  if (remoteNotices !== null && remoteNotices !== void 0 && remoteNotices.$notices) {
    ({
      $notices
    } = remoteNotices);
  }
  const noticesLength = $notices.length;
  const nextNoticeIndex = (index + 1) % noticesLength;
  let $notice = $();
  let i = 0;
  while (i++ < noticesLength) {
    $notice = $notices.eq(index);
    if (!matchCriteria($notice)) {
      showNotices($mountPoint, nextNoticeIndex);
      return;
    }
    index = index++ % noticesLength;
  }
  if (typeof $notice.data("asn-html") === "string") {
    $notice.data("asn-html-raw", mw.Uri.decode($notice.data("asn-html")));
    $notice.data("asn-html", null);
  }
  if (typeof $notice.data("asn-style") === "string") {
    $notice.data("asn-style-id", noticeStyles.length);
    const style = mw.loader.addStyleTag(mw.Uri.decode($notice.data("asn-style")));
    style.disabled = true;
    noticeStyles[noticeStyles.length] = style;
    $notice.data("asn-style", null);
  }
  const noticeHtml = $notice.data("asn-html-raw") || $notice.html();
  const noticeStyleId = $notice.data("asn-style-id");
  const currentNoticeHtml = $currentNotice.html();
  if (currentNoticeHtml && currentNoticeHtml !== noticeHtml) {
    $currentNotice.stop().fadeOut(() => {
      for (var _i = 0, _noticeStyles = noticeStyles; _i < _noticeStyles.length; _i++) {
        const style = _noticeStyles[_i];
        style.disabled = true;
      }
      const noticeStyle = noticeStyles[noticeStyleId];
      if (noticeStyle) {
        noticeStyle.disabled = false;
      }
      $currentNotice.html(noticeHtml);
      try {
        $currentNotice.fadeIn();
      } catch {
      }
    });
  } else if (!currentNoticeHtml) {
    $mountPoint.append($area);
    const noticeStyle = noticeStyles[noticeStyleId];
    if (noticeStyle) {
      noticeStyle.disabled = false;
    }
    $currentNotice.html(noticeHtml).fadeIn();
  }
  timer = setTimeout(() => {
    showNotices($mountPoint, nextNoticeIndex);
  }, 7 * 1e3);
};
//! src/AdvancedSiteNotices/AdvancedSiteNotices.ts
(function() {
  var _advancedSiteNotices = _asyncToGenerator(function* () {
    var _remoteNotices$$notic;
    const $body = yield (0, import_ext_gadget7.getBody)();
    const $mountPoint = $body.find(mountPointSelector);
    if (!$mountPoint.length) {
      return;
    }
    const remoteNotices = yield loadRemoteNotices();
    if (!((_remoteNotices$$notic = remoteNotices.$notices) !== null && _remoteNotices$$notic !== void 0 && _remoteNotices$$notic.length)) {
      return;
    }
    const randomIndex = Math.floor(Math.random() * remoteNotices.$notices.length);
    showNotices($mountPoint, randomIndex, remoteNotices);
  });
  function advancedSiteNotices() {
    return _advancedSiteNotices.apply(this, arguments);
  }
  return advancedSiteNotices;
})()();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvb3B0aW9ucy5qc29uIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL0FkdmFuY2VkU2l0ZU5vdGljZXMudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9hcGkudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy91dGlsL3F1ZXJ5QXBpLnRzIiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL21vZHVsZXMvbG9hZFJlbW90ZU5vdGljZXMudHN4IiwgInNyYy9BZHZhbmNlZFNpdGVOb3RpY2VzL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy9zaG93Tm90aWNlLnRzeCIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVBcmVhLnRzeCIsICJzcmMvQWR2YW5jZWRTaXRlTm90aWNlcy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0FkdmFuY2VkU2l0ZU5vdGljZXMvbW9kdWxlcy91dGlsL21hdGNoQ3JpdGVyaWEudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbIihmdW5jdGlvbihnbG9iYWwpIHtcbiAgICB2YXIgY2hhbm5lbHMgPSBbXTtcblxuICAgIGZ1bmN0aW9uIEJyb2FkY2FzdENoYW5uZWwoY2hhbm5lbCkge1xuICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICBjaGFubmVsID0gU3RyaW5nKGNoYW5uZWwpO1xuXG4gICAgICAgIHZhciBpZCA9ICckQnJvYWRjYXN0Q2hhbm5lbCQnICsgY2hhbm5lbCArICckJztcblxuICAgICAgICBjaGFubmVsc1tpZF0gPSBjaGFubmVsc1tpZF0gfHwgW107XG4gICAgICAgIGNoYW5uZWxzW2lkXS5wdXNoKHRoaXMpO1xuXG4gICAgICAgIHRoaXMuX25hbWUgPSBjaGFubmVsO1xuICAgICAgICB0aGlzLl9pZCA9IGlkO1xuICAgICAgICB0aGlzLl9jbG9zZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fbWMgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDEuc3RhcnQoKTtcbiAgICAgICAgdGhpcy5fbWMucG9ydDIuc3RhcnQoKTtcblxuICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignc3RvcmFnZScsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgICAgIGlmIChlLnN0b3JhZ2VBcmVhICE9PSBnbG9iYWwubG9jYWxTdG9yYWdlKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5uZXdWYWx1ZSA9PSBudWxsIHx8IGUubmV3VmFsdWUgPT09ICcnKSByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS5rZXkuc3Vic3RyaW5nKDAsIGlkLmxlbmd0aCkgIT09IGlkKSByZXR1cm47XG4gICAgICAgICAgICB2YXIgZGF0YSA9IEpTT04ucGFyc2UoZS5uZXdWYWx1ZSk7XG4gICAgICAgICAgICAkdGhpcy5fbWMucG9ydDIucG9zdE1lc3NhZ2UoZGF0YSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIEJyb2FkY2FzdENoYW5uZWwucHJvdG90eXBlID0ge1xuICAgICAgICAvLyBCcm9hZGNhc3RDaGFubmVsIEFQSVxuICAgICAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9uYW1lO1xuICAgICAgICB9LFxuICAgICAgICBwb3N0TWVzc2FnZTogZnVuY3Rpb24obWVzc2FnZSkge1xuICAgICAgICAgICAgdmFyICR0aGlzID0gdGhpcztcbiAgICAgICAgICAgIGlmICh0aGlzLl9jbG9zZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgZSA9IG5ldyBFcnJvcigpO1xuICAgICAgICAgICAgICAgIGUubmFtZSA9ICdJbnZhbGlkU3RhdGVFcnJvcic7XG4gICAgICAgICAgICAgICAgdGhyb3cgZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KG1lc3NhZ2UpO1xuXG4gICAgICAgICAgICAvLyBCcm9hZGNhc3QgdG8gb3RoZXIgY29udGV4dHMgdmlhIHN0b3JhZ2UgZXZlbnRzLi4uXG4gICAgICAgICAgICB2YXIga2V5ID0gdGhpcy5faWQgKyBTdHJpbmcoRGF0ZS5ub3coKSkgKyAnJCcgKyBTdHJpbmcoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICBnbG9iYWwubG9jYWxTdG9yYWdlLnNldEl0ZW0oa2V5LCB2YWx1ZSk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGdsb2JhbC5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xuICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgLy8gQnJvYWRjYXN0IHRvIGN1cnJlbnQgY29udGV4dCB2aWEgcG9ydHNcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5mb3JFYWNoKGZ1bmN0aW9uKGJjKSB7XG4gICAgICAgICAgICAgICAgaWYgKGJjID09PSAkdGhpcykgcmV0dXJuO1xuICAgICAgICAgICAgICAgIGJjLl9tYy5wb3J0Mi5wb3N0TWVzc2FnZShKU09OLnBhcnNlKHZhbHVlKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlZCkgcmV0dXJuO1xuICAgICAgICAgICAgdGhpcy5fY2xvc2VkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQxLmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0Mi5jbG9zZSgpO1xuXG4gICAgICAgICAgICB2YXIgaW5kZXggPSBjaGFubmVsc1t0aGlzLl9pZF0uaW5kZXhPZih0aGlzKTtcbiAgICAgICAgICAgIGNoYW5uZWxzW3RoaXMuX2lkXS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9LFxuXG4gICAgICAgIC8vIEV2ZW50VGFyZ2V0IEFQSVxuICAgICAgICBnZXQgb25tZXNzYWdlKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLm9ubWVzc2FnZTtcbiAgICAgICAgfSxcbiAgICAgICAgc2V0IG9ubWVzc2FnZSh2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDEub25tZXNzYWdlID0gdmFsdWU7XG4gICAgICAgIH0sXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKC8qdHlwZSwgbGlzdGVuZXIgLCB1c2VDYXB0dXJlKi8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5hZGRFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgICAgICByZW1vdmVFdmVudExpc3RlbmVyOiBmdW5jdGlvbigvKnR5cGUsIGxpc3RlbmVyICwgdXNlQ2FwdHVyZSovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEucmVtb3ZlRXZlbnRMaXN0ZW5lci5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICAgICAgZGlzcGF0Y2hFdmVudDogZnVuY3Rpb24oLypldmVudCovKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEuZGlzcGF0Y2hFdmVudC5hcHBseSh0aGlzLl9tYy5wb3J0MSwgYXJndW1lbnRzKTtcbiAgICAgICAgfSxcbiAgICB9O1xuXG4gICAgZ2xvYmFsLkJyb2FkY2FzdENoYW5uZWwgPSBnbG9iYWwuQnJvYWRjYXN0Q2hhbm5lbCB8fCBCcm9hZGNhc3RDaGFubmVsO1xufSkoc2VsZik7XG4iLCAie1xuXHRcImFqYXhQYWdlVGl0bGVcIjogXCJUZW1wbGF0ZTpBZHZhbmNlZFNpdGVOb3RpY2VzL2FqYXhcIixcblx0XCJtb3VudFBvaW50U2VsZWN0b3JcIjogXCIjc2l0ZU5vdGljZVwiLFxuXHRcInN0b3JhZ2VLZXlcIjogXCJleHQuZ2FkZ2V0LkFkdmFuY2VkU2l0ZU5vdGljZXNfZGlzbWlzc0FTTlwiLFxuXHRcInZlcnNpb25cIjogXCI0LjBcIlxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHt0eXBlIFJlbW90ZU5vdGljZXN9IGZyb20gJy4vbW9kdWxlcy91dGlsL3F1ZXJ5QXBpJztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcbmltcG9ydCB7bG9hZFJlbW90ZU5vdGljZXN9IGZyb20gJy4vbW9kdWxlcy9sb2FkUmVtb3RlTm90aWNlcyc7XG5pbXBvcnQge3Nob3dOb3RpY2VzfSBmcm9tICcuL21vZHVsZXMvc2hvd05vdGljZSc7XG5cbihhc3luYyBmdW5jdGlvbiBhZHZhbmNlZFNpdGVOb3RpY2VzKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCAkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4gPSBhd2FpdCBnZXRCb2R5KCk7XG5cblx0Y29uc3QgJG1vdW50UG9pbnQ6IEpRdWVyeSA9ICRib2R5LmZpbmQoT1BUSU9OUy5tb3VudFBvaW50U2VsZWN0b3IpO1xuXHRpZiAoISRtb3VudFBvaW50Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJlbW90ZU5vdGljZXM6IFJlbW90ZU5vdGljZXMgPSBhd2FpdCBsb2FkUmVtb3RlTm90aWNlcygpO1xuXHRpZiAoIXJlbW90ZU5vdGljZXMuJG5vdGljZXM/Lmxlbmd0aCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHJhbmRvbUluZGV4OiBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByZW1vdGVOb3RpY2VzLiRub3RpY2VzLmxlbmd0aCk7XG5cdHNob3dOb3RpY2VzKCRtb3VudFBvaW50LCByYW5kb21JbmRleCwgcmVtb3RlTm90aWNlcyk7XG59KSgpO1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgQWR2YW5jZWRTaXRlTm90aWNlcy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7YXBpfSBmcm9tICcuLi9hcGknO1xuXG5pbnRlcmZhY2UgUmVtb3RlTm90aWNlcyB7XG5cdCRub3RpY2VzPzogSlF1ZXJ5O1xuXHR2ZXJzaW9uPzogc3RyaW5nO1xufVxuXG5jb25zdCB7d2dVc2VyTGFuZ3VhZ2V9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBwYXJhbWV0ZXJzOiBBcGlQYXJzZVBhcmFtcyA9IHtcblx0YWN0aW9uOiAncGFyc2UnLFxuXHRmb3JtYXQ6ICdqc29uJyxcblx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRwcm9wOiAndGV4dCcsXG5cdHBhZ2U6IE9QVElPTlMuYWpheFBhZ2VUaXRsZSxcblx0dXNlbGFuZzogd2dVc2VyTGFuZ3VhZ2UsXG5cdHZhcmlhbnQ6IHdnVXNlckxhbmd1YWdlLFxufTtcblxuY29uc3QgcXVlcnlBcGkgPSBhc3luYyAoKTogUHJvbWlzZTxSZXR1cm5UeXBlPG13LkFwaVsnZ2V0J10+PiA9PiB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGF3YWl0IGFwaS5nZXQocGFyYW1ldGVycyk7XG5cdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0Y29uc29sZS5lcnJvcignW0FkdmFuY2VkU2l0ZU5vdGljZXNdIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHRcdHJldHVybiB7fTtcblx0fVxufTtcblxuZXhwb3J0IHt0eXBlIFJlbW90ZU5vdGljZXMsIHF1ZXJ5QXBpfTtcbiIsICJpbXBvcnQge3R5cGUgUmVtb3RlTm90aWNlcywgcXVlcnlBcGl9IGZyb20gJy4vdXRpbC9xdWVyeUFwaSc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5cbnR5cGUgQXBpUmVzcG9uc2UgPSB7XG5cdHBhcnNlOiB7XG5cdFx0dGV4dD86IHN0cmluZztcblx0fTtcbn07XG5cbmNvbnN0IGxvYWRSZW1vdGVOb3RpY2VzID0gYXN5bmMgKCk6IFByb21pc2U8UmVtb3RlTm90aWNlcz4gPT4ge1xuXHRjb25zdCByZXNwb25zZTogQXdhaXRlZDxSZXR1cm5UeXBlPHR5cGVvZiBxdWVyeUFwaT4+ID0gYXdhaXQgcXVlcnlBcGkoKTtcblx0Y29uc3QgcmVzcG9uc2VQYXJzZSA9IHJlc3BvbnNlWydwYXJzZSddIGFzIEFwaVJlc3BvbnNlWydwYXJzZSddO1xuXG5cdGlmICghcmVzcG9uc2VQYXJzZT8udGV4dCkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGNvbnN0IHJlbW90ZU5vdGljZSA9ICg8ZGl2IGlubmVySFRNTD17cmVzcG9uc2VQYXJzZS50ZXh0fSAvPikucXVlcnlTZWxlY3RvcigndWwuc2l0ZW50cycpO1xuXHRpZiAoIXJlbW90ZU5vdGljZSkge1xuXHRcdHJldHVybiB7fTtcblx0fVxuXG5cdGNvbnN0ICRyZW1vdGVOb3RpY2VzOiBOb25OdWxsYWJsZTxSZW1vdGVOb3RpY2VzWyckbm90aWNlcyddPiA9ICQocmVtb3RlTm90aWNlKSBhcyBKUXVlcnk7XG5cblx0Y29uc3QgJG5vdGljZXM6IEpRdWVyeSA9ICRyZW1vdGVOb3RpY2VzLmZpbmQoJ2xpJyk7XG5cdGNvbnN0IHJlbW90ZU5vdGljZXNWZXJzaW9uOiBOb25OdWxsYWJsZTxSZW1vdGVOb3RpY2VzWyd2ZXJzaW9uJ10+ID0gKFxuXHRcdCRyZW1vdGVOb3RpY2VzLmRhdGEoJ2Fzbi12ZXJzaW9uJykgYXMgbnVtYmVyXG5cdCkudG9TdHJpbmcoKTtcblxuXHRyZXR1cm4ge1xuXHRcdCRub3RpY2VzLFxuXHRcdHZlcnNpb246IHJlbW90ZU5vdGljZXNWZXJzaW9uLFxuXHR9O1xufTtcblxuZXhwb3J0IHtsb2FkUmVtb3RlTm90aWNlc307XG4iLCAiY29uc3QgQ0xBU1NfTkFNRTogc3RyaW5nID0gJ2dhZGdldC1hZHZhbmNlZF9zaXRlX25vdGljZXMnO1xuY29uc3QgQ0xBU1NfTkFNRV9ESVNNSVNTOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FfV9fZGlzbWlzc2A7XG5jb25zdCBDTEFTU19OQU1FX05PVElDRTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX1fX25vdGljZWA7XG5jb25zdCBDTEFTU19OQU1FX05PVElDRV9DT05URU5UOiBzdHJpbmcgPSBgJHtDTEFTU19OQU1FX05PVElDRX1fX2NvbnRlbnRgO1xuY29uc3QgQ0xBU1NfTkFNRV9USVRMRTogc3RyaW5nID0gYCR7Q0xBU1NfTkFNRX1fX3RpdGxlYDtcblxuZXhwb3J0IHtDTEFTU19OQU1FLCBDTEFTU19OQU1FX0RJU01JU1MsIENMQVNTX05BTUVfTk9USUNFLCBDTEFTU19OQU1FX05PVElDRV9DT05URU5ULCBDTEFTU19OQU1FX1RJVExFfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQge0NMQVNTX05BTUVfRElTTUlTUywgQ0xBU1NfTkFNRV9OT1RJQ0VfQ09OVEVOVH0gZnJvbSAnLi9jb25zdGFudCc7XG5pbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge3R5cGUgUmVtb3RlTm90aWNlc30gZnJvbSAnLi91dGlsL3F1ZXJ5QXBpJztcbmltcG9ydCB7Z2VuZXJhdGVBcmVhfSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVBcmVhJztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7bWF0Y2hDcml0ZXJpYX0gZnJvbSAnLi91dGlsL21hdGNoQ3JpdGVyaWEnO1xuaW1wb3J0IHt0aXBweX0gZnJvbSAnZXh0LmdhZGdldC5UaXBweSc7XG5cbmNvbnN0IGJyb2FkY2FzdENoYW5uZWw6IEJyb2FkY2FzdENoYW5uZWwgPSBuZXcgQnJvYWRjYXN0Q2hhbm5lbChPUFRJT05TLnN0b3JhZ2VLZXkpO1xuXG5sZXQgY3VycmVudFZlcnNpb246IHN0cmluZyA9ICcwJztcbmNvbnN0IGxvY2FsVmVyc2lvbiA9IG13LnN0b3JhZ2UuZ2V0KE9QVElPTlMuc3RvcmFnZUtleSkgYXMgc3RyaW5nIHwgbnVsbDtcblxubGV0IHRpbWVyOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRUaW1lb3V0PjtcblxuY29uc3QgJGFyZWE6IEpRdWVyeSA9IGdlbmVyYXRlQXJlYSgpO1xuY29uc3QgJGN1cnJlbnROb3RpY2U6IEpRdWVyeSA9ICRhcmVhLmZpbmQoYC4ke0NMQVNTX05BTUVfTk9USUNFX0NPTlRFTlR9YCk7XG5jb25zdCAkZGlzbWlzczogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICRhcmVhLmZpbmQoYC4ke0NMQVNTX05BTUVfRElTTUlTU31gKS5maW5kKCdhJyk7XG5cbmNvbnN0IGNsb3NlTm90aWNlcyA9ICgpOiB2b2lkID0+IHtcblx0YnJvYWRjYXN0Q2hhbm5lbC5wb3N0TWVzc2FnZSgnY2xvc2UnKTtcblx0YnJvYWRjYXN0Q2hhbm5lbC5jbG9zZSgpO1xuXHRjbGVhclRpbWVvdXQodGltZXIpO1xuXHQkYXJlYS5yZW1vdmUoKTtcblx0bXcuc3RvcmFnZS5zZXQoT1BUSU9OUy5zdG9yYWdlS2V5LCBjdXJyZW50VmVyc2lvbiwgNjAgKiA2MCAqIDI0ICogMzAgKiAxMDAwKTtcbn07XG5cbmJyb2FkY2FzdENoYW5uZWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGNsb3NlTm90aWNlcyk7XG5cbiRkaXNtaXNzLm9uKCdjbGljaycsICgpOiB2b2lkID0+IHtcblx0Y2xvc2VOb3RpY2VzKCk7XG5cdHZvaWQgbXcubm90aWZ5KCQoKDxzcGFuIGlubmVySFRNTD17Z2V0TWVzc2FnZSgnRGlzbWlzc05vdGljZScpfSAvPikgYXMgSFRNTEVsZW1lbnQpLCB7XG5cdFx0dGFnOiAnQWR2YW5jZWRTaXRlTm90aWNlcycsXG5cdH0pO1xufSk7XG50aXBweSgkZGlzbWlzcy5nZXQoMCkgYXMgSFRNTEFuY2hvckVsZW1lbnQsIHtcblx0YXJyb3c6IHRydWUsXG5cdGNvbnRlbnQ6ICRkaXNtaXNzLmF0dHIoJ2FyaWEtbGFiZWwnKSBhcyBzdHJpbmcsXG5cdHBsYWNlbWVudDogJ2JvdHRvbScsXG59KTtcblxubGV0ICRub3RpY2VzOiBKUXVlcnk7XG5jb25zdCBub3RpY2VTdHlsZXM6IEhUTUxTdHlsZUVsZW1lbnRbXSA9IFtdO1xuY29uc3Qgc2hvd05vdGljZXMgPSAoJG1vdW50UG9pbnQ6IEpRdWVyeSwgaW5kZXg6IG51bWJlciwgcmVtb3RlTm90aWNlcz86IFJlbW90ZU5vdGljZXMpOiB2b2lkID0+IHtcblx0Y3VycmVudFZlcnNpb24gPSByZW1vdGVOb3RpY2VzPy52ZXJzaW9uID8/IGN1cnJlbnRWZXJzaW9uO1xuXHRpZiAoY3VycmVudFZlcnNpb24gPT09IGxvY2FsVmVyc2lvbikge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmIChyZW1vdGVOb3RpY2VzPy4kbm90aWNlcykge1xuXHRcdCh7JG5vdGljZXN9ID0gcmVtb3RlTm90aWNlcyk7XG5cdH1cblxuXHRjb25zdCBub3RpY2VzTGVuZ3RoOiBudW1iZXIgPSAkbm90aWNlcy5sZW5ndGg7XG5cdGNvbnN0IG5leHROb3RpY2VJbmRleDogbnVtYmVyID0gKGluZGV4ICsgMSkgJSBub3RpY2VzTGVuZ3RoO1xuXHRsZXQgJG5vdGljZTogSlF1ZXJ5ID0gJCgpO1xuXG5cdGxldCBpOiBudW1iZXIgPSAwO1xuXHR3aGlsZSAoaSsrIDwgbm90aWNlc0xlbmd0aCkge1xuXHRcdCRub3RpY2UgPSAkbm90aWNlcy5lcShpbmRleCk7XG5cdFx0aWYgKCFtYXRjaENyaXRlcmlhKCRub3RpY2UpKSB7XG5cdFx0XHRzaG93Tm90aWNlcygkbW91bnRQb2ludCwgbmV4dE5vdGljZUluZGV4KTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aW5kZXggPSBpbmRleCsrICUgbm90aWNlc0xlbmd0aDtcblx0fVxuXG5cdGlmICh0eXBlb2YgJG5vdGljZS5kYXRhKCdhc24taHRtbCcpID09PSAnc3RyaW5nJykge1xuXHRcdCRub3RpY2UuZGF0YSgnYXNuLWh0bWwtcmF3JywgbXcuVXJpLmRlY29kZSgkbm90aWNlLmRhdGEoJ2Fzbi1odG1sJykgYXMgc3RyaW5nKSk7XG5cdFx0JG5vdGljZS5kYXRhKCdhc24taHRtbCcsIG51bGwpO1xuXHR9XG5cdGlmICh0eXBlb2YgJG5vdGljZS5kYXRhKCdhc24tc3R5bGUnKSA9PT0gJ3N0cmluZycpIHtcblx0XHQkbm90aWNlLmRhdGEoJ2Fzbi1zdHlsZS1pZCcsIG5vdGljZVN0eWxlcy5sZW5ndGgpO1xuXHRcdGNvbnN0IHN0eWxlOiBIVE1MU3R5bGVFbGVtZW50ID0gbXcubG9hZGVyLmFkZFN0eWxlVGFnKG13LlVyaS5kZWNvZGUoJG5vdGljZS5kYXRhKCdhc24tc3R5bGUnKSBhcyBzdHJpbmcpKTtcblx0XHRzdHlsZS5kaXNhYmxlZCA9IHRydWU7XG5cdFx0bm90aWNlU3R5bGVzW25vdGljZVN0eWxlcy5sZW5ndGhdID0gc3R5bGU7IC8vIFJlcGxhY2UgYFtdLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdCRub3RpY2UuZGF0YSgnYXNuLXN0eWxlJywgbnVsbCk7XG5cdH1cblxuXHRjb25zdCBub3RpY2VIdG1sOiBzdHJpbmcgPSAoJG5vdGljZS5kYXRhKCdhc24taHRtbC1yYXcnKSBhcyBzdHJpbmcpIHx8ICRub3RpY2UuaHRtbCgpO1xuXHRjb25zdCBub3RpY2VTdHlsZUlkOiBudW1iZXIgPSAkbm90aWNlLmRhdGEoJ2Fzbi1zdHlsZS1pZCcpIGFzIG51bWJlcjtcblx0Y29uc3QgY3VycmVudE5vdGljZUh0bWw6IHN0cmluZyA9ICRjdXJyZW50Tm90aWNlLmh0bWwoKTtcblx0aWYgKGN1cnJlbnROb3RpY2VIdG1sICYmIGN1cnJlbnROb3RpY2VIdG1sICE9PSBub3RpY2VIdG1sKSB7XG5cdFx0JGN1cnJlbnROb3RpY2Uuc3RvcCgpLmZhZGVPdXQoKCk6IHZvaWQgPT4ge1xuXHRcdFx0Zm9yIChjb25zdCBzdHlsZSBvZiBub3RpY2VTdHlsZXMpIHtcblx0XHRcdFx0c3R5bGUuZGlzYWJsZWQgPSB0cnVlO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgbm90aWNlU3R5bGU6IEhUTUxTdHlsZUVsZW1lbnQgfCB1bmRlZmluZWQgPSBub3RpY2VTdHlsZXNbbm90aWNlU3R5bGVJZF07XG5cdFx0XHRpZiAobm90aWNlU3R5bGUpIHtcblx0XHRcdFx0bm90aWNlU3R5bGUuZGlzYWJsZWQgPSBmYWxzZTtcblx0XHRcdH1cblx0XHRcdCRjdXJyZW50Tm90aWNlLmh0bWwobm90aWNlSHRtbCk7XG5cdFx0XHQvLyBhbmltYXRpb24gdHJ5IC9jYXRjaGVkIHRvIGF2b2lkIFR5cGVFcnJvcjogKEFuaW1hdGlvbi50d2VlbmVyc1twcm9wXXx8W10pLmNvbmNhdCBpcyBub3QgYSBmdW5jdGlvbiBlcnJvciBiZWluZyBzZWVuIGluIHByb2R1Y3Rpb25cblx0XHRcdHRyeSB7XG5cdFx0XHRcdCRjdXJyZW50Tm90aWNlLmZhZGVJbigpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH0pO1xuXHR9IGVsc2UgaWYgKCFjdXJyZW50Tm90aWNlSHRtbCkge1xuXHRcdCRtb3VudFBvaW50LmFwcGVuZCgkYXJlYSk7XG5cdFx0Y29uc3Qgbm90aWNlU3R5bGU6IEhUTUxTdHlsZUVsZW1lbnQgfCB1bmRlZmluZWQgPSBub3RpY2VTdHlsZXNbbm90aWNlU3R5bGVJZF07XG5cdFx0aWYgKG5vdGljZVN0eWxlKSB7XG5cdFx0XHRub3RpY2VTdHlsZS5kaXNhYmxlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHQkY3VycmVudE5vdGljZS5odG1sKG5vdGljZUh0bWwpLmZhZGVJbigpO1xuXHR9XG5cblx0dGltZXIgPSBzZXRUaW1lb3V0KCgpOiB2b2lkID0+IHtcblx0XHRzaG93Tm90aWNlcygkbW91bnRQb2ludCwgbmV4dE5vdGljZUluZGV4KTtcblx0fSwgNyAqIDEwMDApO1xufTtcblxuZXhwb3J0IHtzaG93Tm90aWNlc307XG4iLCAiaW1wb3J0IHtcblx0Q0xBU1NfTkFNRSxcblx0Q0xBU1NfTkFNRV9ESVNNSVNTLFxuXHRDTEFTU19OQU1FX05PVElDRSxcblx0Q0xBU1NfTkFNRV9OT1RJQ0VfQ09OVEVOVCxcblx0Q0xBU1NfTkFNRV9USVRMRSxcbn0gZnJvbSAnLi4vY29uc3RhbnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2VuZXJhdGVBcmVhID0gKCk6IEpRdWVyeSA9PiB7XG5cdGNvbnN0IGFyZWE6IFJlYWN0LlJlYWN0RWxlbWVudCA9IChcblx0XHQ8ZGl2IGNsYXNzTmFtZT17W0NMQVNTX05BTUUsICdub3ByaW50J119PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfVElUTEV9PntnZXRNZXNzYWdlKCdUaXRsZScpfTwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzc05hbWU9e0NMQVNTX05BTUVfTk9USUNFfT5cblx0XHRcdFx0PGRpdiBjbGFzc05hbWU9e1tDTEFTU19OQU1FX05PVElDRV9DT05URU5ULCAnY2VudGVyJ119IC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3NOYW1lPXtDTEFTU19OQU1FX0RJU01JU1N9PlxuXHRcdFx0XHQ8YSByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbD17Z2V0TWVzc2FnZSgnRGlzbWlzcycpfSAvPlxuXHRcdFx0PC9kaXY+XG5cdFx0PC9kaXY+XG5cdCk7XG5cblx0cmV0dXJuICQoYXJlYSkgYXMgSlF1ZXJ5O1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZUFyZWF9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHREaXNtaXNzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1R1cm4gb2ZmIHRoaXMgbm90aWNlJyxcblx0XHRcdGphOiAnQVNO44KS44Kq44OV44Gr44GZ44KLJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WFs+mXreWFrOWRiicsXG5cdFx0XHQnemgtaGFudCc6ICfpl5zplonlhazlkYonLFxuXHRcdH0pLFxuXHRcdERpc21pc3NOb3RpY2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGhhdmUgY2hvc2VuIHRvIHR1cm4gb2ZmIEFkdmFuY2VkIFNpdGUgTm90aWNlcyBmb3IgdGhlIG5leHQgMzAgZGF5cy4gPGJyPklmIHRoZSBzaXRlLXdpZGUgYW5ub3VuY2VtZW50IGlzIG5vdCB1cGRhdGVkIHdpdGhpbiB0aGUgbmV4dCAzMCBkYXlzLCBpdCB3aWxsIG5vIGxvbmdlciBiZSBkaXNwbGF5ZWQ7IGhvd2V2ZXIsIGlmIHRoZSBzaXRlLXdpZGUgYW5ub3VuY2VtZW50IGlzIHVwZGF0ZWQsIGl0IHdpbGwgYmUgZGlzcGxheWVkIGFnYWluLicsXG5cdFx0XHRqYTogJ+S7iuW+jDMw5pel6ZaT44CBQVNO44KS44Kq44OV44Gr44GZ44KL44GT44Go44KS6YG45oqe44GX44G+44GX44Gf44CCPGJyPuOCteOCpOODiOWFqOS9k+OBrumAmuefpeOBjOS7iuW+jDMw5pel5Lul5YaF44Gr5pu05paw44GV44KM44Gq44GE5aC05ZCI44CB6KGo56S644GV44KM44Gq44GP44Gq44KK44G+44GZ44CC44Gf44Gg44GX44CB44K144Kk44OI5YWo5L2T44Gu6YCa55+l44GM5pu05paw44GV44KM44KL5aC05ZCI44Gv44CB5YaN44Gz6KGo56S644GV44KM44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+aCqOW3sumAieaLqeWcqOaOpeS4i+adpTMw5pel5YaF5YWz6Zet4oCc6auY57qn56uZ54K56YCa5ZGK4oCd44CCPGJyPuiLpeaOpeS4i+adpTMw5pel5YaF5YWo56uZ5YWs5ZGK5pyq5pyJ5pu05paw77yM5YiZ5LiN5YaN5pi+56S677yb5L2G5piv77yM6Iul5YWo56uZ5YWs5ZGK5YaF5a655pu05paw77yM5YiZ5bCG6YeN5paw5pi+56S644CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+aCqOW3sumBuOaTh+WcqOaOpeS4i+S+hjMw5pel5YWn6Zec6ZaJ44CM6auY57Sa56uZ6bue6YCa5ZGK44CN44CCPGJyPuiLpeaOpeS4i+S+hjMw5pel5YWn5YWo56uZ5YWs5ZGK5pyq5pyJ5pu05paw77yM5YmH5LiN5YaN6aGv56S677yb5L2G5piv77yM6Iul5YWo56uZ5YWs5ZGK5YWn5a655pu05paw77yM5YmH5bCH6YeN5paw6aGv56S644CCJyxcblx0XHR9KSxcblx0XHRUaXRsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdBbm5vdW5jZW1lbnQnLFxuXHRcdFx0amE6ICfpgJrnn6UnLFxuXHRcdFx0emg6ICflhazlkYonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJjb25zdCB7d2dVc2VyR3JvdXBzLCB3Z0dsb2JhbEdyb3Vwcywgd2dVc2VyTGFuZ3VhZ2V9ID0gbXcuY29uZmlnLmdldCgpO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG5jb25zdCBpbl9ncm91cCA9IChncm91cDogc3RyaW5nKTogYm9vbGVhbiA9PiB7XG5cdHJldHVybiAhISh3Z1VzZXJHcm91cHM/LmluY2x1ZGVzKGdyb3VwKSB8fCAod2dHbG9iYWxHcm91cHMgYXMgc3RyaW5nW10pPy5pbmNsdWRlcyhncm91cCkpO1xufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuY29uc3Qgb25seV9mb3IgPSAodXNlckxhbmd1YWdlOiBzdHJpbmcpOiBib29sZWFuID0+IHtcblx0cmV0dXJuIHVzZXJMYW5ndWFnZSA9PT0gd2dVc2VyTGFuZ3VhZ2U7XG59O1xuXG5jb25zdCBtYXRjaENyaXRlcmlhID0gKCRub3RpY2U6IEpRdWVyeSk6IGJvb2xlYW4gPT4ge1xuXHRjb25zdCBjYWNoZSA9ICRub3RpY2UuZGF0YSgnYXNuLWNhY2hlJykgYXMgYm9vbGVhbiB8IHVuZGVmaW5lZDtcblx0aWYgKGNhY2hlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGU7XG5cdH1cblxuXHRjb25zdCB0ZXN0Q3JpdGVyaWEgPSAoY3JpdGVyaWE6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuXHRcdC8vIEZJWE1FOiBUaGlzIHNob3VsZG4ndCBiZSB1c2luZyBldmFsIG9uIGRhdGEgZW50ZXJlZCBpbiB3aWtpdGV4dC5cblx0XHQvLyBJZiB0aGF0IGRhdGEgaXMgbWFsZm9ybWVkIGl0IHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGUuZy4gY3JpdGVyaWEgPSBcIihmYWxzZSkpXCJcblx0XHR0cnkge1xuXHRcdFx0Ly8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWV2YWxcblx0XHRcdHJldHVybiB3aW5kb3cuZXZhbChjcml0ZXJpYSkgYXMgYm9vbGVhbjtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdH07XG5cblx0bGV0IHJlc3VsdDogYm9vbGVhbiA9IGZhbHNlO1xuXG5cdGNvbnN0IGNyaXRlcmlhRGF0YTogc3RyaW5nID0gKCgkbm90aWNlLmRhdGEoJ2Fzbi1jcml0ZXJpYScpIGFzIHN0cmluZyB8IHVuZGVmaW5lZCkgPz8gJycpLnRyaW0oKTtcblx0aWYgKGNyaXRlcmlhRGF0YSkge1xuXHRcdHRyeSB7XG5cdFx0XHRyZXN1bHQgPSB0ZXN0Q3JpdGVyaWEobXcuVXJpLmRlY29kZShjcml0ZXJpYURhdGEpKTtcblx0XHR9IGNhdGNoIHtcblx0XHRcdHJlc3VsdCA9IHRydWU7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKCRub3RpY2UuYXR0cignY2xhc3MnKSkge1xuXHRcdGxldCBjcml0ZXJpYTogYm9vbGVhbiB8IHVuZGVmaW5lZDtcblxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3N5c29wJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBpbl9ncm91cCgnc3lzb3AnKSB8fCBpbl9ncm91cCgnc3Rld2FyZCcpIHx8IGluX2dyb3VwKCdxaXV3ZW4nKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfbG9nZ2VkJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBpbl9ncm91cCgndXNlcicpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV9hbm9uJykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSAhaW5fZ3JvdXAoJ3VzZXInKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfemhfY24nKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IG9ubHlfZm9yKCd6aC1jbicpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV96aF9zZycpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gb25seV9mb3IoJ3poLXNnJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3poX215JykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBvbmx5X2ZvcignemgtbXknKTtcblx0XHR9XG5cdFx0aWYgKCRub3RpY2UuaGFzQ2xhc3MoJ29ubHlfemhfaGsnKSkge1xuXHRcdFx0Y3JpdGVyaWEgfHw9IG9ubHlfZm9yKCd6aC1oaycpO1xuXHRcdH1cblx0XHRpZiAoJG5vdGljZS5oYXNDbGFzcygnb25seV96aF9tbycpKSB7XG5cdFx0XHRjcml0ZXJpYSB8fD0gb25seV9mb3IoJ3poLW1vJyk7XG5cdFx0fVxuXHRcdGlmICgkbm90aWNlLmhhc0NsYXNzKCdvbmx5X3poX3R3JykpIHtcblx0XHRcdGNyaXRlcmlhIHx8PSBvbmx5X2ZvcignemgtdHcnKTtcblx0XHR9XG5cblx0XHRpZiAoY3JpdGVyaWEgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0Y3JpdGVyaWEgPSB0cnVlO1xuXHRcdH1cblxuXHRcdHJlc3VsdCA9IGNyaXRlcmlhO1xuXHR9IGVsc2Uge1xuXHRcdHJlc3VsdCA9IHRydWU7XG5cdH1cblxuXHQkbm90aWNlLmRhdGEoJ2Fzbi1jYWNoZScsIHJlc3VsdCk7XG5cblx0cmV0dXJuIHJlc3VsdDtcbn07XG5cbmV4cG9ydCB7bWF0Y2hDcml0ZXJpYX07XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUEsS0FBQyxTQUFTLFFBQVE7QUFDZCxVQUFJLFdBQVcsQ0FBQztBQUVoQixlQUFTQSxrQkFBaUIsU0FBUztBQUMvQixZQUFJLFFBQVE7QUFDWixrQkFBVSxPQUFPLE9BQU87QUFFeEIsWUFBSSxLQUFLLHVCQUF1QixVQUFVO0FBRTFDLGlCQUFTLEVBQUUsSUFBSSxTQUFTLEVBQUUsS0FBSyxDQUFDO0FBQ2hDLGlCQUFTLEVBQUUsRUFBRSxLQUFLLElBQUk7QUFFdEIsYUFBSyxRQUFRO0FBQ2IsYUFBSyxNQUFNO0FBQ1gsYUFBSyxVQUFVO0FBQ2YsYUFBSyxNQUFNLElBQUksZUFBZTtBQUM5QixhQUFLLElBQUksTUFBTSxNQUFNO0FBQ3JCLGFBQUssSUFBSSxNQUFNLE1BQU07QUFFckIsZUFBTyxpQkFBaUIsV0FBVyxTQUFTLEdBQUc7QUFDM0MsY0FBSSxFQUFFLGdCQUFnQixPQUFPLGFBQWM7QUFDM0MsY0FBSSxFQUFFLFlBQVksUUFBUSxFQUFFLGFBQWEsR0FBSTtBQUM3QyxjQUFJLEVBQUUsSUFBSSxVQUFVLEdBQUcsR0FBRyxNQUFNLE1BQU0sR0FBSTtBQUMxQyxjQUFJLE9BQU8sS0FBSyxNQUFNLEVBQUUsUUFBUTtBQUNoQyxnQkFBTSxJQUFJLE1BQU0sWUFBWSxJQUFJO0FBQUEsUUFDcEMsQ0FBQztBQUFBLE1BQ0w7QUFFQSxNQUFBQSxrQkFBaUIsWUFBWTtBQUFBO0FBQUEsUUFFekIsSUFBSSxPQUFPO0FBQ1AsaUJBQU8sS0FBSztBQUFBLFFBQ2hCO0FBQUEsUUFDQSxhQUFhLFNBQVMsU0FBUztBQUMzQixjQUFJLFFBQVE7QUFDWixjQUFJLEtBQUssU0FBUztBQUNkLGdCQUFJLElBQUksSUFBSSxNQUFNO0FBQ2xCLGNBQUUsT0FBTztBQUNULGtCQUFNO0FBQUEsVUFDVjtBQUNBLGNBQUksUUFBUSxLQUFLLFVBQVUsT0FBTztBQUdsQyxjQUFJLE1BQU0sS0FBSyxNQUFNLE9BQU8sS0FBSyxJQUFJLENBQUMsSUFBSSxNQUFNLE9BQU8sS0FBSyxPQUFPLENBQUM7QUFDcEUsaUJBQU8sYUFBYSxRQUFRLEtBQUssS0FBSztBQUN0QyxxQkFBVyxXQUFXO0FBQ2xCLG1CQUFPLGFBQWEsV0FBVyxHQUFHO0FBQUEsVUFDdEMsR0FBRyxHQUFHO0FBR04sbUJBQVMsS0FBSyxHQUFHLEVBQUUsUUFBUSxTQUFTLElBQUk7QUFDcEMsZ0JBQUksT0FBTyxNQUFPO0FBQ2xCLGVBQUcsSUFBSSxNQUFNLFlBQVksS0FBSyxNQUFNLEtBQUssQ0FBQztBQUFBLFVBQzlDLENBQUM7QUFBQSxRQUNMO0FBQUEsUUFDQSxPQUFPLFdBQVc7QUFDZCxjQUFJLEtBQUssUUFBUztBQUNsQixlQUFLLFVBQVU7QUFDZixlQUFLLElBQUksTUFBTSxNQUFNO0FBQ3JCLGVBQUssSUFBSSxNQUFNLE1BQU07QUFFckIsY0FBSSxRQUFRLFNBQVMsS0FBSyxHQUFHLEVBQUUsUUFBUSxJQUFJO0FBQzNDLG1CQUFTLEtBQUssR0FBRyxFQUFFLE9BQU8sT0FBTyxDQUFDO0FBQUEsUUFDdEM7QUFBQTtBQUFBLFFBR0EsSUFBSSxZQUFZO0FBQ1osaUJBQU8sS0FBSyxJQUFJLE1BQU07QUFBQSxRQUMxQjtBQUFBLFFBQ0EsSUFBSSxVQUFVLE9BQU87QUFDakIsZUFBSyxJQUFJLE1BQU0sWUFBWTtBQUFBLFFBQy9CO0FBQUEsUUFDQSxrQkFBa0IsV0FBMEM7QUFDeEQsaUJBQU8sS0FBSyxJQUFJLE1BQU0saUJBQWlCLE1BQU0sS0FBSyxJQUFJLE9BQU8sU0FBUztBQUFBLFFBQzFFO0FBQUEsUUFDQSxxQkFBcUIsV0FBMEM7QUFDM0QsaUJBQU8sS0FBSyxJQUFJLE1BQU0sb0JBQW9CLE1BQU0sS0FBSyxJQUFJLE9BQU8sU0FBUztBQUFBLFFBQzdFO0FBQUEsUUFDQSxlQUFlLFdBQW9CO0FBQy9CLGlCQUFPLEtBQUssSUFBSSxNQUFNLGNBQWMsTUFBTSxLQUFLLElBQUksT0FBTyxTQUFTO0FBQUEsUUFDdkU7QUFBQSxNQUNKO0FBRUEsYUFBTyxtQkFBbUIsT0FBTyxvQkFBb0JBO0FBQUEsSUFDekQsR0FBRyxJQUFJO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRk4sSUFBQUMsZ0JBQWlCO0FBQ2pCLElBQUFDLHFCQUFzQjtBQUN0QixJQUFBQyxhQUFjO0FBQ2QsSUFBQUMsVUFBVzs7QUNGWixJQUFBQyxxQkFBc0JDLFFBQUEsaUJBQUE7O0FDRHRCLElBQUFDLG9CQUF3QkQsUUFBQSxpQkFBQTtBQUV4QixJQUFNRSxPQUFBLEdBQWNELGtCQUFBRSxXQUFBLHVCQUFBQyxPQUF5Q04sT0FBTyxDQUFFOztBQ0t0RSxJQUFNO0VBQUNPO0FBQWMsSUFBSUMsR0FBR0MsT0FBT0MsSUFBSTtBQUV2QyxJQUFNQyxhQUE2QjtFQUNsQ0MsUUFBUTtFQUNSQyxRQUFRO0VBQ1JDLGVBQWU7RUFDZkMsTUFBTTtFQUNOQyxNQUFjbkI7RUFDZG9CLFNBQVNWO0VBQ1RXLFNBQVNYO0FBQ1Y7QUFFQSxJQUFNWSxXQUFBLDJCQUFBO0FBQUEsTUFBQUMsT0FBQUMsa0JBQVcsYUFBZ0Q7QUFDaEUsUUFBSTtBQUNILGFBQUEsTUFBYWpCLElBQUlNLElBQUlDLFVBQVU7SUFDaEMsU0FBU1csT0FBTztBQUNmQyxjQUFRRCxNQUFNLHFDQUFxQ0EsS0FBSztBQUN4RCxhQUFPLENBQUM7SUFDVDtFQUNELENBQUE7QUFBQSxTQUFBLFNBUE1ILFlBQUE7QUFBQSxXQUFBQyxLQUFBSSxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLEVBQUE7O0FDbkJOLElBQUFDLHFCQUFrQkMsUUFBQXpCLFFBQUEsa0JBQUEsR0FBQSxDQUFBO0FBUWxCLElBQU0wQixvQkFBQSwyQkFBQTtBQUFBLE1BQUFDLFFBQUFSLGtCQUFvQixhQUFvQztBQUM3RCxVQUFNUyxXQUFBLE1BQXVEWCxTQUFTO0FBQ3RFLFVBQU1ZLGdCQUFnQkQsU0FBUyxPQUFPO0FBRXRDLFFBQUksRUFBQ0Msa0JBQUEsUUFBQUEsa0JBQUEsVUFBQUEsY0FBZUMsT0FBTTtBQUN6QixhQUFPLENBQUM7SUFDVDtBQUVBLFVBQU1DLGdCQUFnQlAsbUNBQUFRLFFBQUFDLGNBQUMsT0FBQTtNQUFJQyxXQUFXTCxjQUFjQztJQUFBLENBQU0sR0FBSUssY0FBYyxZQUFZO0FBQ3hGLFFBQUksQ0FBQ0osY0FBYztBQUNsQixhQUFPLENBQUM7SUFDVDtBQUVBLFVBQU1LLGlCQUF5REMsRUFBRU4sWUFBWTtBQUU3RSxVQUFNTyxZQUFtQkYsZUFBZUcsS0FBSyxJQUFJO0FBQ2pELFVBQU1DLHVCQUNMSixlQUFlSyxLQUFLLGFBQWEsRUFDaENDLFNBQVM7QUFFWCxXQUFPO01BQ05DLFVBQUFMO01BQ0F4QyxTQUFTMEM7SUFDVjtFQUNELENBQUE7QUFBQSxTQUFBLFNBeEJNZCxxQkFBQTtBQUFBLFdBQUFDLE1BQUFMLE1BQUEsTUFBQUMsU0FBQTtFQUFBO0FBQUEsRUFBQTs7QUNUTixJQUFNcUIsYUFBcUI7QUFDM0IsSUFBTUMscUJBQUEsR0FBQXpDLE9BQWdDd0MsWUFBVSxXQUFBO0FBQ2hELElBQU1FLG9CQUFBLEdBQUExQyxPQUErQndDLFlBQVUsVUFBQTtBQUMvQyxJQUFNRyw0QkFBQSxHQUFBM0MsT0FBdUMwQyxtQkFBaUIsV0FBQTtBQUM5RCxJQUFNRSxtQkFBQSxHQUFBNUMsT0FBOEJ3QyxZQUFVLFNBQUE7O0FDRjlDLElBQUFLLHFCQUFrQnhCLFFBQUF6QixRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNLbEIsSUFBQWtELHFCQUFrQnpCLFFBQUF6QixRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNQbEIsSUFBQW1ELHFCQUF1Qm5ELFFBQUEsaUJBQUE7QUFFdkIsSUFBTW9ELGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFVBQUEsR0FBU0YsbUJBQUFHLFVBQVM7TUFDakJDLElBQUk7TUFDSkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNEQyxnQkFBQSxHQUFlTixtQkFBQUcsVUFBUztNQUN2QkMsSUFBSTtNQUNKQyxJQUFJO01BQ0osV0FDQztNQUNELFdBQ0M7SUFDRixDQUFDO0lBQ0RFLFFBQUEsR0FBT1AsbUJBQUFHLFVBQVM7TUFDZkMsSUFBSTtNQUNKQyxJQUFJO01BQ0pHLElBQUk7SUFDTCxDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1DLGVBQWVSLGdCQUFnQjtBQUVyQyxJQUFNUyxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBRHBCQSxJQUFNQyxlQUFlQSxNQUFjO0FBQ2xDLFFBQU1DLE9BQ0xkLG1DQUFBbEIsUUFBQUMsY0FBQyxPQUFBO0lBQUlnQyxXQUFXLENBQUNyQixZQUFZLFNBQVM7RUFBQSxHQUNyQ00sbUNBQUFsQixRQUFBQyxjQUFDLE9BQUE7SUFBSWdDLFdBQVdqQjtFQUFBLEdBQW1CYSxXQUFXLE9BQU8sQ0FBRSxHQUN2RFgsbUNBQUFsQixRQUFBQyxjQUFDLE9BQUE7SUFBSWdDLFdBQVduQjtFQUFBLEdBQ2ZJLG1DQUFBbEIsUUFBQUMsY0FBQyxPQUFBO0lBQUlnQyxXQUFXLENBQUNsQiwyQkFBMkIsUUFBUTtFQUFBLENBQUcsQ0FDeEQsR0FDQUcsbUNBQUFsQixRQUFBQyxjQUFDLE9BQUE7SUFBSWdDLFdBQVdwQjtFQUFBLEdBQ2ZLLG1DQUFBbEIsUUFBQUMsY0FBQyxLQUFBO0lBQUVpQyxNQUFLO0lBQVMsY0FBWUwsV0FBVyxTQUFTO0VBQUEsQ0FBRyxDQUNyRCxDQUNEO0FBR0QsU0FBT3hCLEVBQUUyQixJQUFJO0FBQ2Q7O0FFeEJBLElBQU07RUFBQ0c7RUFBY0M7RUFBZ0IvRCxnQkFBQWdFO0FBQWMsSUFBSS9ELEdBQUdDLE9BQU9DLElBQUk7QUFHckUsSUFBTThELFdBQVlDLFdBQTJCO0FBQzVDLFNBQU8sQ0FBQyxFQUFFSixpQkFBQSxRQUFBQSxpQkFBQSxVQUFBQSxhQUFjSyxTQUFTRCxLQUFLLEtBQU1ILG1CQUFBLFFBQUFBLG1CQUFBLFVBQUFBLGVBQTZCSSxTQUFTRCxLQUFLO0FBQ3hGO0FBR0EsSUFBTUUsV0FBWUMsa0JBQWtDO0FBQ25ELFNBQU9BLGlCQUFpQkw7QUFDekI7QUFFQSxJQUFNTSxnQkFBaUJDLGFBQTZCO0FBQUEsTUFBQUM7QUFDbkQsUUFBTUMsUUFBUUYsUUFBUW5DLEtBQUssV0FBVztBQUN0QyxNQUFJcUMsVUFBVSxRQUFXO0FBQ3hCLFdBQU9BO0VBQ1I7QUFFQSxRQUFNQyxlQUFnQkMsY0FBOEI7QUFHbkQsUUFBSTtBQUVILGFBQU9DLE9BQU9DLEtBQUtGLFFBQVE7SUFDNUIsUUFBUTtBQUNQLGFBQU87SUFDUjtFQUNEO0FBRUEsTUFBSUcsU0FBa0I7QUFFdEIsUUFBTUMsaUJBQUFQLGdCQUF5QkQsUUFBUW5DLEtBQUssY0FBYyxPQUFBLFFBQUFvQyxrQkFBQSxTQUFBQSxnQkFBNEIsSUFBSVEsS0FBSztBQUMvRixNQUFJRCxjQUFjO0FBQ2pCLFFBQUk7QUFDSEQsZUFBU0osYUFBYXpFLEdBQUdnRixJQUFJQyxPQUFPSCxZQUFZLENBQUM7SUFDbEQsUUFBUTtBQUNQRCxlQUFTO0lBQ1Y7RUFDRCxXQUFXUCxRQUFRWSxLQUFLLE9BQU8sR0FBRztBQUNqQyxRQUFJUjtBQUVKLFFBQUlKLFFBQVFhLFNBQVMsWUFBWSxHQUFHO0FBQ25DVCxtQkFBQUEsV0FBYVYsU0FBUyxPQUFPLEtBQUtBLFNBQVMsU0FBUyxLQUFLQSxTQUFTLFFBQVE7SUFDM0U7QUFDQSxRQUFJTSxRQUFRYSxTQUFTLGFBQWEsR0FBRztBQUNwQ1QsbUJBQUFBLFdBQWFWLFNBQVMsTUFBTTtJQUM3QjtBQUNBLFFBQUlNLFFBQVFhLFNBQVMsV0FBVyxHQUFHO0FBQ2xDVCxtQkFBQUEsV0FBYSxDQUFDVixTQUFTLE1BQU07SUFDOUI7QUFDQSxRQUFJTSxRQUFRYSxTQUFTLFlBQVksR0FBRztBQUNuQ1QsbUJBQUFBLFdBQWFQLFNBQVMsT0FBTztJQUM5QjtBQUNBLFFBQUlHLFFBQVFhLFNBQVMsWUFBWSxHQUFHO0FBQ25DVCxtQkFBQUEsV0FBYVAsU0FBUyxPQUFPO0lBQzlCO0FBQ0EsUUFBSUcsUUFBUWEsU0FBUyxZQUFZLEdBQUc7QUFDbkNULG1CQUFBQSxXQUFhUCxTQUFTLE9BQU87SUFDOUI7QUFDQSxRQUFJRyxRQUFRYSxTQUFTLFlBQVksR0FBRztBQUNuQ1QsbUJBQUFBLFdBQWFQLFNBQVMsT0FBTztJQUM5QjtBQUNBLFFBQUlHLFFBQVFhLFNBQVMsWUFBWSxHQUFHO0FBQ25DVCxtQkFBQUEsV0FBYVAsU0FBUyxPQUFPO0lBQzlCO0FBQ0EsUUFBSUcsUUFBUWEsU0FBUyxZQUFZLEdBQUc7QUFDbkNULG1CQUFBQSxXQUFhUCxTQUFTLE9BQU87SUFDOUI7QUFFQSxRQUFJTyxhQUFhLFFBQVc7QUFDM0JBLGlCQUFXO0lBQ1o7QUFFQUcsYUFBU0g7RUFDVixPQUFPO0FBQ05HLGFBQVM7RUFDVjtBQUVBUCxVQUFRbkMsS0FBSyxhQUFhMEMsTUFBTTtBQUVoQyxTQUFPQTtBQUNSOztBSDFFQSxJQUFBTyxxQkFBb0IxRixRQUFBLGtCQUFBO0FBRXBCLElBQU0yRixtQkFBcUMsSUFBSUMsaUJBQXlCL0YsVUFBVTtBQUVsRixJQUFJZ0csaUJBQXlCO0FBQzdCLElBQU1DLGVBQWV4RixHQUFHeUYsUUFBUXZGLElBQVlYLFVBQVU7QUFFdEQsSUFBSW1HO0FBRUosSUFBTUMsUUFBZ0JsQyxhQUFhO0FBQ25DLElBQU1tQyxpQkFBeUJELE1BQU0xRCxLQUFBLElBQUFuQyxPQUFTMkMseUJBQXlCLENBQUU7QUFDekUsSUFBTW9ELFdBQXNDRixNQUFNMUQsS0FBQSxJQUFBbkMsT0FBU3lDLGtCQUFrQixDQUFFLEVBQUVOLEtBQUssR0FBRztBQUV6RixJQUFNNkQsZUFBZUEsTUFBWTtBQUNoQ1QsbUJBQWlCVSxZQUFZLE9BQU87QUFDcENWLG1CQUFpQlcsTUFBTTtBQUN2QkMsZUFBYVAsS0FBSztBQUNsQkMsUUFBTU8sT0FBTztBQUNibEcsS0FBR3lGLFFBQVFVLElBQVk1RyxZQUFZZ0csZ0JBQWdCLEtBQUssS0FBSyxLQUFLLEtBQUssR0FBSTtBQUM1RTtBQUVBRixpQkFBaUJlLGlCQUFpQixXQUFXTixZQUFZO0FBRXpERCxTQUFTUSxHQUFHLFNBQVMsTUFBWTtBQUNoQ1AsZUFBYTtBQUNiLE9BQUs5RixHQUFHc0csT0FBT3ZFLEVBQUdZLG1DQUFBakIsUUFBQUMsY0FBQyxRQUFBO0lBQUtDLFdBQVcyQixXQUFXLGVBQWU7RUFBQSxDQUFHLENBQWtCLEdBQUc7SUFDcEZnRCxLQUFLO0VBQ04sQ0FBQztBQUNGLENBQUM7Q0FBQSxHQUNEbkIsbUJBQUFvQixPQUFNWCxTQUFTM0YsSUFBSSxDQUFDLEdBQXdCO0VBQzNDdUcsT0FBTztFQUNQQyxTQUFTYixTQUFTWCxLQUFLLFlBQVk7RUFDbkN5QixXQUFXO0FBQ1osQ0FBQztBQUVELElBQUl0RTtBQUNKLElBQU11RSxlQUFtQyxDQUFBO0FBQ3pDLElBQU1DLGNBQWNBLENBQUNDLGFBQXFCQyxPQUFlQyxrQkFBd0M7QUFBQSxNQUFBQztBQUNoRzFCLG9CQUFBMEIsd0JBQWlCRCxrQkFBQSxRQUFBQSxrQkFBQSxTQUFBLFNBQUFBLGNBQWV4SCxhQUFBLFFBQUF5SCwwQkFBQSxTQUFBQSx3QkFBVzFCO0FBQzNDLE1BQUlBLG1CQUFtQkMsY0FBYztBQUNwQztFQUNEO0FBRUEsTUFBSXdCLGtCQUFBLFFBQUFBLGtCQUFBLFVBQUFBLGNBQWUzRSxVQUFVO0FBQzVCLEtBQUM7TUFBQ0E7SUFBUSxJQUFJMkU7RUFDZjtBQUVBLFFBQU1FLGdCQUF3QjdFLFNBQVM4RTtBQUN2QyxRQUFNQyxtQkFBMkJMLFFBQVEsS0FBS0c7QUFDOUMsTUFBSTVDLFVBQWtCdkMsRUFBRTtBQUV4QixNQUFJc0YsSUFBWTtBQUNoQixTQUFPQSxNQUFNSCxlQUFlO0FBQzNCNUMsY0FBVWpDLFNBQVNpRixHQUFHUCxLQUFLO0FBQzNCLFFBQUksQ0FBQzFDLGNBQWNDLE9BQU8sR0FBRztBQUM1QnVDLGtCQUFZQyxhQUFhTSxlQUFlO0FBQ3hDO0lBQ0Q7QUFDQUwsWUFBUUEsVUFBVUc7RUFDbkI7QUFFQSxNQUFJLE9BQU81QyxRQUFRbkMsS0FBSyxVQUFVLE1BQU0sVUFBVTtBQUNqRG1DLFlBQVFuQyxLQUFLLGdCQUFnQm5DLEdBQUdnRixJQUFJQyxPQUFPWCxRQUFRbkMsS0FBSyxVQUFVLENBQVcsQ0FBQztBQUM5RW1DLFlBQVFuQyxLQUFLLFlBQVksSUFBSTtFQUM5QjtBQUNBLE1BQUksT0FBT21DLFFBQVFuQyxLQUFLLFdBQVcsTUFBTSxVQUFVO0FBQ2xEbUMsWUFBUW5DLEtBQUssZ0JBQWdCeUUsYUFBYU8sTUFBTTtBQUNoRCxVQUFNSSxRQUEwQnZILEdBQUd3SCxPQUFPQyxZQUFZekgsR0FBR2dGLElBQUlDLE9BQU9YLFFBQVFuQyxLQUFLLFdBQVcsQ0FBVyxDQUFDO0FBQ3hHb0YsVUFBTUcsV0FBVztBQUNqQmQsaUJBQWFBLGFBQWFPLE1BQU0sSUFBSUk7QUFDcENqRCxZQUFRbkMsS0FBSyxhQUFhLElBQUk7RUFDL0I7QUFFQSxRQUFNd0YsYUFBc0JyRCxRQUFRbkMsS0FBSyxjQUFjLEtBQWdCbUMsUUFBUXNELEtBQUs7QUFDcEYsUUFBTUMsZ0JBQXdCdkQsUUFBUW5DLEtBQUssY0FBYztBQUN6RCxRQUFNMkYsb0JBQTRCbEMsZUFBZWdDLEtBQUs7QUFDdEQsTUFBSUUscUJBQXFCQSxzQkFBc0JILFlBQVk7QUFDMUQvQixtQkFBZW1DLEtBQUssRUFBRUMsUUFBUSxNQUFZO0FBQ3pDLGVBQUFDLEtBQUEsR0FBQUMsZ0JBQW9CdEIsY0FBQXFCLEtBQUFDLGNBQUFmLFFBQUFjLE1BQWM7QUFBbEMsY0FBV1YsUUFBQVcsY0FBQUQsRUFBQTtBQUNWVixjQUFNRyxXQUFXO01BQ2xCO0FBQ0EsWUFBTVMsY0FBNEN2QixhQUFhaUIsYUFBYTtBQUM1RSxVQUFJTSxhQUFhO0FBQ2hCQSxvQkFBWVQsV0FBVztNQUN4QjtBQUNBOUIscUJBQWVnQyxLQUFLRCxVQUFVO0FBRTlCLFVBQUk7QUFDSC9CLHVCQUFld0MsT0FBTztNQUN2QixRQUFRO01BQUM7SUFDVixDQUFDO0VBQ0YsV0FBVyxDQUFDTixtQkFBbUI7QUFDOUJoQixnQkFBWXVCLE9BQU8xQyxLQUFLO0FBQ3hCLFVBQU13QyxjQUE0Q3ZCLGFBQWFpQixhQUFhO0FBQzVFLFFBQUlNLGFBQWE7QUFDaEJBLGtCQUFZVCxXQUFXO0lBQ3hCO0FBQ0E5QixtQkFBZWdDLEtBQUtELFVBQVUsRUFBRVMsT0FBTztFQUN4QztBQUVBMUMsVUFBUTRDLFdBQVcsTUFBWTtBQUM5QnpCLGdCQUFZQyxhQUFhTSxlQUFlO0VBQ3pDLEdBQUcsSUFBSSxHQUFJO0FBQ1o7OzsrQ0x4R0MsYUFBb0Q7QUFBQSxRQUFBbUI7QUFDcEQsVUFBTUMsUUFBQSxPQUFpQyxHQUFNL0ksbUJBQUFnSixTQUFRO0FBRXJELFVBQU0zQixjQUFzQjBCLE1BQU12RyxLQUFhM0Msa0JBQWtCO0FBQ2pFLFFBQUksQ0FBQ3dILFlBQVlLLFFBQVE7QUFDeEI7SUFDRDtBQUVBLFVBQU1ILGdCQUFBLE1BQXFDNUYsa0JBQWtCO0FBQzdELFFBQUksR0FBQW1ILHdCQUFDdkIsY0FBYzNFLGNBQUEsUUFBQWtHLDBCQUFBLFVBQWRBLHNCQUF3QnBCLFNBQVE7QUFDcEM7SUFDRDtBQUVBLFVBQU11QixjQUFzQkMsS0FBS0MsTUFBTUQsS0FBS0UsT0FBTyxJQUFJN0IsY0FBYzNFLFNBQVM4RSxNQUFNO0FBQ3BGTixnQkFBWUMsYUFBYTRCLGFBQWExQixhQUFhO0VBQ3BELENBQUE7QUFBQSxXQWZnQjhCLHNCQUFBO0FBQUEsV0FBQUMscUJBQUEvSCxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLFNBQUE2SDtBQUFBLEdBQUEsRUFlYjsiLAogICJuYW1lcyI6IFsiQnJvYWRjYXN0Q2hhbm5lbCIsICJhamF4UGFnZVRpdGxlIiwgIm1vdW50UG9pbnRTZWxlY3RvciIsICJzdG9yYWdlS2V5IiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQ3IiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiYXBpIiwgImluaXRNd0FwaSIsICJjb25jYXQiLCAid2dVc2VyTGFuZ3VhZ2UiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJwYXJhbWV0ZXJzIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgInBhZ2UiLCAidXNlbGFuZyIsICJ2YXJpYW50IiwgInF1ZXJ5QXBpIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAiZXJyb3IiLCAiY29uc29sZSIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgIl9fdG9FU00iLCAibG9hZFJlbW90ZU5vdGljZXMiLCAiX3JlZjIiLCAicmVzcG9uc2UiLCAicmVzcG9uc2VQYXJzZSIsICJ0ZXh0IiwgInJlbW90ZU5vdGljZSIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiaW5uZXJIVE1MIiwgInF1ZXJ5U2VsZWN0b3IiLCAiJHJlbW90ZU5vdGljZXMiLCAiJCIsICIkbm90aWNlczIiLCAiZmluZCIsICJyZW1vdGVOb3RpY2VzVmVyc2lvbiIsICJkYXRhIiwgInRvU3RyaW5nIiwgIiRub3RpY2VzIiwgIkNMQVNTX05BTUUiLCAiQ0xBU1NfTkFNRV9ESVNNSVNTIiwgIkNMQVNTX05BTUVfTk9USUNFIiwgIkNMQVNTX05BTUVfTk9USUNFX0NPTlRFTlQiLCAiQ0xBU1NfTkFNRV9USVRMRSIsICJpbXBvcnRfZXh0X2dhZGdldDUiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJnZXRJMThuTWVzc2FnZXMiLCAiRGlzbWlzcyIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJEaXNtaXNzTm90aWNlIiwgIlRpdGxlIiwgInpoIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJnZW5lcmF0ZUFyZWEiLCAiYXJlYSIsICJjbGFzc05hbWUiLCAicm9sZSIsICJ3Z1VzZXJHcm91cHMiLCAid2dHbG9iYWxHcm91cHMiLCAid2dVc2VyTGFuZ3VhZ2UyIiwgImluX2dyb3VwIiwgImdyb3VwIiwgImluY2x1ZGVzIiwgIm9ubHlfZm9yIiwgInVzZXJMYW5ndWFnZSIsICJtYXRjaENyaXRlcmlhIiwgIiRub3RpY2UiLCAiXyRub3RpY2UkZGF0YSIsICJjYWNoZSIsICJ0ZXN0Q3JpdGVyaWEiLCAiY3JpdGVyaWEiLCAid2luZG93IiwgImV2YWwiLCAicmVzdWx0IiwgImNyaXRlcmlhRGF0YSIsICJ0cmltIiwgIlVyaSIsICJkZWNvZGUiLCAiYXR0ciIsICJoYXNDbGFzcyIsICJpbXBvcnRfZXh0X2dhZGdldDYiLCAiYnJvYWRjYXN0Q2hhbm5lbCIsICJCcm9hZGNhc3RDaGFubmVsIiwgImN1cnJlbnRWZXJzaW9uIiwgImxvY2FsVmVyc2lvbiIsICJzdG9yYWdlIiwgInRpbWVyIiwgIiRhcmVhIiwgIiRjdXJyZW50Tm90aWNlIiwgIiRkaXNtaXNzIiwgImNsb3NlTm90aWNlcyIsICJwb3N0TWVzc2FnZSIsICJjbG9zZSIsICJjbGVhclRpbWVvdXQiLCAicmVtb3ZlIiwgInNldCIsICJhZGRFdmVudExpc3RlbmVyIiwgIm9uIiwgIm5vdGlmeSIsICJ0YWciLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJwbGFjZW1lbnQiLCAibm90aWNlU3R5bGVzIiwgInNob3dOb3RpY2VzIiwgIiRtb3VudFBvaW50IiwgImluZGV4IiwgInJlbW90ZU5vdGljZXMiLCAiX3JlbW90ZU5vdGljZXMkdmVyc2lvIiwgIm5vdGljZXNMZW5ndGgiLCAibGVuZ3RoIiwgIm5leHROb3RpY2VJbmRleCIsICJpIiwgImVxIiwgInN0eWxlIiwgImxvYWRlciIsICJhZGRTdHlsZVRhZyIsICJkaXNhYmxlZCIsICJub3RpY2VIdG1sIiwgImh0bWwiLCAibm90aWNlU3R5bGVJZCIsICJjdXJyZW50Tm90aWNlSHRtbCIsICJzdG9wIiwgImZhZGVPdXQiLCAiX2kiLCAiX25vdGljZVN0eWxlcyIsICJub3RpY2VTdHlsZSIsICJmYWRlSW4iLCAiYXBwZW5kIiwgInNldFRpbWVvdXQiLCAiX3JlbW90ZU5vdGljZXMkJG5vdGljIiwgIiRib2R5IiwgImdldEJvZHkiLCAicmFuZG9tSW5kZXgiLCAiTWF0aCIsICJmbG9vciIsICJyYW5kb20iLCAiYWR2YW5jZWRTaXRlTm90aWNlcyIsICJfYWR2YW5jZWRTaXRlTm90aWNlcyJdCn0K
