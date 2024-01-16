/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/CookieWarning}
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
          if (e.storageArea !== global.localStorage)
            return;
          if (e.newValue == null || e.newValue === "")
            return;
          if (e.key.substring(0, id.length) !== id)
            return;
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
            if (bc === $this)
              return;
            bc._mc.port2.postMessage(JSON.parse(value));
          });
        },
        close: function() {
          if (this._closed)
            return;
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

// dist/CookieWarning/CookieWarning.js
require_broadcastchannel_polyfill();
function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (!it) {
    if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it)
        o = it;
      var i = 0;
      var F = function() {
      };
      return { s: F, n: function() {
        if (i >= o.length)
          return { done: true };
        return { done: false, value: o[i++] };
      }, e: function(e) {
        throw e;
      }, f: F };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var normalCompletion = true, didErr = false, err;
  return { s: function() {
    it = it.call(o);
  }, n: function() {
    var step = it.next();
    normalCompletion = step.done;
    return step;
  }, e: function(e) {
    didErr = true;
    err = e;
  }, f: function() {
    try {
      if (!normalCompletion && it.return != null)
        it.return();
    } finally {
      if (didErr)
        throw err;
    }
  } };
}
function _unsupportedIterableToArray(o, minLen) {
  if (!o)
    return;
  if (typeof o === "string")
    return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor)
    n = o.constructor.name;
  if (n === "Map" || n === "Set")
    return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
    return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length)
    len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++)
    arr2[i] = arr[i];
  return arr2;
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
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, {
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
//! src/CookieWarning/modules/constant.ts
var CLASS_NAME = "gadget-cookie_warning";
var STORAGE_KEY = "ext.gadget.CookieWarning_cookieConsent";
var LAST_STORAGE_VALUE = mw.storage.get(STORAGE_KEY);
var URL_CONSENT_READ = mw.util.getParamValue("consentRead");
var WG_USER_NAME = mw.config.get("wgUserName");
//! src/CookieWarning/components/AgreeButton.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/CookieWarning/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Agree: (0, import_ext_gadget.localize)({
      en: "I agree",
      ja: "すべて許可する",
      zh: "同意"
    }),
    CookieNotice: (0, import_ext_gadget.localize)({
      en: 'To provide better experience, we utilize cookies and other technologies to provide services. You can refer to our <a rel="noopener" target="_blank" href="/wiki/QW:PIPP?consentRead=1" title="Personal Information Protection Policy"><em>Personal Information Protection Policy</em></a> to learn how we handle your personal information.',
      ja: 'より良いサービスを提供するために、クッキーやその他の技術を利用しています。個人情報の取り扱い方法については、<a rel="noopener" target="_blank" href="/wiki/QW:PIPP?consentRead=1" title="個人情報保護方針">個人情報保護方針</a>をご参照ください。',
      "zh-hans": '为了提供最佳体验，我们利用Cookie及其他技术提供服务；您可以查阅我们的<a rel="noopener" target="_blank" href="/wiki/QW:PIPP?consentRead=1" title="个人信息保护方针">个人信息保护方针</a>，了解我们如何处理您的个人信息。',
      "zh-hant": '為了提供最佳體驗，我们利用Cookie及其他技術提供服務；您可以查閱我們的<a rel="noopener" target="_blank" href="/wiki/QW:PIPP?consentRead=1" title="個人信息保護方針">個人信息保護方針</a>，了解我們如何處理您的個人信息'
    }),
    TOSNotice: (0, import_ext_gadget.localize)({
      en: 'By using this site, you agree to our <a rel="noopener" target="_blank" href="/wiki/QW:TOS?consentRead=1" title="Terms of Use"><em>Terms of Use</em></a>, <a rel="noopener" target="_blank" href="/wiki/QW:PIPP?consentRead=1" title="Personal Information Protection Policy"><em>Personal Information Protection Policy</em></a>, and other <a rel="noopener" target="_blank" href="/wiki/QW:LAW?consentRead=1" title="Legal policies">legal policies</a>.',
      ja: 'このサイトを利用することで、<a rel="noopener" target="_blank" href="/wiki/QW:TOS?consentRead=1" title="利用規約">利用規約</a>、<a rel="noopener" target="_blank" href="/wiki/QW:PIPP?consentRead=1" title="個人情報保護方針">個人情報保護方針</a>、その他の<a rel="noopener" target="_blank" href="/wiki/QW:LAW?consentRead=1" title="法的ポリシー">法的ポリシー</a>について十分に理解し、遵守することに同意したものとみなされます。',
      "zh-hans": '访问本网站，或以任何方式使用本网站，均代表您已仔细阅读、充分了解并同意遵守本网站的<a rel="noopener" target="_blank" href="/wiki/QW:TOS?consentRead=1" title="用户协议">用户协议</a>、<a rel="noopener" target="_blank" href="/wiki/QW:PIPP?consentRead=1" title="个人信息保护方针">个人信息保护方针</a>及其他各项<a rel="noopener" target="_blank" href="/wiki/QW:LAW?consentRead=1" title="法律方针">法律方针</a>的规定。',
      "zh-hant": '存取本網站，或以任何方式使用本網站，均代表您已仔細閱讀、充分了解並同意遵守本網站的<a rel="noopener" target="_blank" href="/wiki/QW:TOS?consentRead=1" title="用戶協議">用戶協議</a>、<a rel="noopener" target="_blank" href="/wiki/QW:PIPP?consentRead=1" title="個人信息保護方針">個人信息保護方針</a>及其他各項<a rel="noopener" target="_blank" href="/wiki/QW:LAW?consentRead=1" title="法律方針">法律方針</a>的規定。'
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/CookieWarning/components/AgreeButton.tsx
var AgreeButton = ({
  onClick
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("span", {
  className: ["mw-ui-button", "mw-ui-progressive"],
  role: "button",
  onClick
}, getMessage("Agree"));
var AgreeButton_default = AgreeButton;
//! src/CookieWarning/components/ConsentNotice.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
var ConsentNotice = () => /* @__PURE__ */ import_ext_gadget3.default.createElement(import_ext_gadget3.default.Fragment, null, /* @__PURE__ */ import_ext_gadget3.default.createElement("p", {
  innerHTML: getMessage("TOSNotice")
}), /* @__PURE__ */ import_ext_gadget3.default.createElement("p", {
  innerHTML: getMessage("CookieNotice")
}));
var ConsentNotice_default = ConsentNotice;
//! src/CookieWarning/CookieWarning.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.React"), 1);
var import_ext_gadget5 = require("ext.gadget.Util");
void (0, import_ext_gadget5.getBody)().then(function cookieWarning($body) {
  if (WG_USER_NAME || LAST_STORAGE_VALUE === "1" || URL_CONSENT_READ) {
    return;
  }
  const closeWarning = () => {
    broadcastChannel.postMessage("close");
    broadcastChannel.close();
    rootElement.remove();
    mw.storage.set(STORAGE_KEY, "1", 60 * 60 * 1e3 * 24 * 30);
  };
  const broadcastChannel = new BroadcastChannel(STORAGE_KEY);
  broadcastChannel.addEventListener("message", closeWarning);
  const rootElement = /* @__PURE__ */ import_ext_gadget4.default.createElement("div", {
    className: [CLASS_NAME, "noprint"]
  }, /* @__PURE__ */ import_ext_gadget4.default.createElement(ConsentNotice_default, null), /* @__PURE__ */ import_ext_gadget4.default.createElement(AgreeButton_default, {
    onClick: closeWarning
  }));
  $body.append(rootElement);
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibm9kZV9tb2R1bGVzLy5wbnBtL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGxAMS4wLjEvbm9kZV9tb2R1bGVzL2Jyb2FkY2FzdGNoYW5uZWwtcG9seWZpbGwvaW5kZXguanMiLCAic3JjL0Nvb2tpZVdhcm5pbmcvbW9kdWxlcy9jb25zdGFudC50cyIsICJzcmMvQ29va2llV2FybmluZy9jb21wb25lbnRzL0FncmVlQnV0dG9uLnRzeCIsICJzcmMvQ29va2llV2FybmluZy9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0Nvb2tpZVdhcm5pbmcvY29tcG9uZW50cy9Db25zZW50Tm90aWNlLnRzeCIsICJzcmMvQ29va2llV2FybmluZy9Db29raWVXYXJuaW5nLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiKGZ1bmN0aW9uKGdsb2JhbCkge1xuICAgIHZhciBjaGFubmVscyA9IFtdO1xuXG4gICAgZnVuY3Rpb24gQnJvYWRjYXN0Q2hhbm5lbChjaGFubmVsKSB7XG4gICAgICAgIHZhciAkdGhpcyA9IHRoaXM7XG4gICAgICAgIGNoYW5uZWwgPSBTdHJpbmcoY2hhbm5lbCk7XG5cbiAgICAgICAgdmFyIGlkID0gJyRCcm9hZGNhc3RDaGFubmVsJCcgKyBjaGFubmVsICsgJyQnO1xuXG4gICAgICAgIGNoYW5uZWxzW2lkXSA9IGNoYW5uZWxzW2lkXSB8fCBbXTtcbiAgICAgICAgY2hhbm5lbHNbaWRdLnB1c2godGhpcyk7XG5cbiAgICAgICAgdGhpcy5fbmFtZSA9IGNoYW5uZWw7XG4gICAgICAgIHRoaXMuX2lkID0gaWQ7XG4gICAgICAgIHRoaXMuX2Nsb3NlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9tYyA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgICAgICB0aGlzLl9tYy5wb3J0MS5zdGFydCgpO1xuICAgICAgICB0aGlzLl9tYy5wb3J0Mi5zdGFydCgpO1xuXG4gICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdzdG9yYWdlJywgZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgaWYgKGUuc3RvcmFnZUFyZWEgIT09IGdsb2JhbC5sb2NhbFN0b3JhZ2UpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChlLm5ld1ZhbHVlID09IG51bGwgfHwgZS5uZXdWYWx1ZSA9PT0gJycpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChlLmtleS5zdWJzdHJpbmcoMCwgaWQubGVuZ3RoKSAhPT0gaWQpIHJldHVybjtcbiAgICAgICAgICAgIHZhciBkYXRhID0gSlNPTi5wYXJzZShlLm5ld1ZhbHVlKTtcbiAgICAgICAgICAgICR0aGlzLl9tYy5wb3J0Mi5wb3N0TWVzc2FnZShkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgQnJvYWRjYXN0Q2hhbm5lbC5wcm90b3R5cGUgPSB7XG4gICAgICAgIC8vIEJyb2FkY2FzdENoYW5uZWwgQVBJXG4gICAgICAgIGdldCBuYW1lKCkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XG4gICAgICAgIH0sXG4gICAgICAgIHBvc3RNZXNzYWdlOiBmdW5jdGlvbihtZXNzYWdlKSB7XG4gICAgICAgICAgICB2YXIgJHRoaXMgPSB0aGlzO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Nsb3NlZCkge1xuICAgICAgICAgICAgICAgIHZhciBlID0gbmV3IEVycm9yKCk7XG4gICAgICAgICAgICAgICAgZS5uYW1lID0gJ0ludmFsaWRTdGF0ZUVycm9yJztcbiAgICAgICAgICAgICAgICB0aHJvdyBlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHZhbHVlID0gSlNPTi5zdHJpbmdpZnkobWVzc2FnZSk7XG5cbiAgICAgICAgICAgIC8vIEJyb2FkY2FzdCB0byBvdGhlciBjb250ZXh0cyB2aWEgc3RvcmFnZSBldmVudHMuLi5cbiAgICAgICAgICAgIHZhciBrZXkgPSB0aGlzLl9pZCArIFN0cmluZyhEYXRlLm5vdygpKSArICckJyArIFN0cmluZyhNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgIGdsb2JhbC5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShrZXksIHZhbHVlKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgZ2xvYmFsLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XG4gICAgICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgICAgICAvLyBCcm9hZGNhc3QgdG8gY3VycmVudCBjb250ZXh0IHZpYSBwb3J0c1xuICAgICAgICAgICAgY2hhbm5lbHNbdGhpcy5faWRdLmZvckVhY2goZnVuY3Rpb24oYmMpIHtcbiAgICAgICAgICAgICAgICBpZiAoYmMgPT09ICR0aGlzKSByZXR1cm47XG4gICAgICAgICAgICAgICAgYmMuX21jLnBvcnQyLnBvc3RNZXNzYWdlKEpTT04ucGFyc2UodmFsdWUpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LFxuICAgICAgICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fY2xvc2VkKSByZXR1cm47XG4gICAgICAgICAgICB0aGlzLl9jbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fbWMucG9ydDEuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuX21jLnBvcnQyLmNsb3NlKCk7XG5cbiAgICAgICAgICAgIHZhciBpbmRleCA9IGNoYW5uZWxzW3RoaXMuX2lkXS5pbmRleE9mKHRoaXMpO1xuICAgICAgICAgICAgY2hhbm5lbHNbdGhpcy5faWRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gRXZlbnRUYXJnZXQgQVBJXG4gICAgICAgIGdldCBvbm1lc3NhZ2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWMucG9ydDEub25tZXNzYWdlO1xuICAgICAgICB9LFxuICAgICAgICBzZXQgb25tZXNzYWdlKHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLl9tYy5wb3J0MS5vbm1lc3NhZ2UgPSB2YWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcjogZnVuY3Rpb24oLyp0eXBlLCBsaXN0ZW5lciAsIHVzZUNhcHR1cmUqLykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21jLnBvcnQxLmFkZEV2ZW50TGlzdGVuZXIuYXBwbHkodGhpcy5fbWMucG9ydDEsIGFyZ3VtZW50cyk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlbW92ZUV2ZW50TGlzdGVuZXI6IGZ1bmN0aW9uKC8qdHlwZSwgbGlzdGVuZXIgLCB1c2VDYXB0dXJlKi8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5yZW1vdmVFdmVudExpc3RlbmVyLmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgICAgICBkaXNwYXRjaEV2ZW50OiBmdW5jdGlvbigvKmV2ZW50Ki8pIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYy5wb3J0MS5kaXNwYXRjaEV2ZW50LmFwcGx5KHRoaXMuX21jLnBvcnQxLCBhcmd1bWVudHMpO1xuICAgICAgICB9LFxuICAgIH07XG5cbiAgICBnbG9iYWwuQnJvYWRjYXN0Q2hhbm5lbCA9IGdsb2JhbC5Ccm9hZGNhc3RDaGFubmVsIHx8IEJyb2FkY2FzdENoYW5uZWw7XG59KShzZWxmKTtcbiIsICJjb25zdCBDTEFTU19OQU1FOiBzdHJpbmcgPSAnZ2FkZ2V0LWNvb2tpZV93YXJuaW5nJztcblxuY29uc3QgU1RPUkFHRV9LRVk6IHN0cmluZyA9ICdleHQuZ2FkZ2V0LkNvb2tpZVdhcm5pbmdfY29va2llQ29uc2VudCc7XG5cbmNvbnN0IExBU1RfU1RPUkFHRV9WQUxVRTogc3RyaW5nIHwgbnVsbCA9IG13LnN0b3JhZ2UuZ2V0KFNUT1JBR0VfS0VZKSBhcyBzdHJpbmcgfCBudWxsO1xuXG5jb25zdCBVUkxfQ09OU0VOVF9SRUFEOiBzdHJpbmcgfCBudWxsID0gbXcudXRpbC5nZXRQYXJhbVZhbHVlKCdjb25zZW50UmVhZCcpO1xuXG5jb25zdCBXR19VU0VSX05BTUU6IHN0cmluZyB8IG51bGwgPSBtdy5jb25maWcuZ2V0KCd3Z1VzZXJOYW1lJyk7XG5cbmV4cG9ydCB7Q0xBU1NfTkFNRSwgTEFTVF9TVE9SQUdFX1ZBTFVFLCBTVE9SQUdFX0tFWSwgVVJMX0NPTlNFTlRfUkVBRCwgV0dfVVNFUl9OQU1FfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5cbmludGVyZmFjZSBQcm9wcyB7XG5cdG9uQ2xpY2soKTogdm9pZDtcbn1cblxuY29uc3QgQWdyZWVCdXR0b24gPSAoe29uQ2xpY2t9OiBQcm9wcykgPT4gKFxuXHQ8c3BhbiBjbGFzc05hbWU9e1snbXctdWktYnV0dG9uJywgJ213LXVpLXByb2dyZXNzaXZlJ119IHJvbGU9XCJidXR0b25cIiBvbkNsaWNrPXtvbkNsaWNrfT5cblx0XHR7Z2V0TWVzc2FnZSgnQWdyZWUnKX1cblx0PC9zcGFuPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQWdyZWVCdXR0b247XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdEFncmVlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0kgYWdyZWUnLFxuXHRcdFx0amE6ICfjgZnjgbnjgaboqLHlj6/jgZnjgosnLFxuXHRcdFx0emg6ICflkIzmhI8nLFxuXHRcdH0pLFxuXHRcdENvb2tpZU5vdGljZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdUbyBwcm92aWRlIGJldHRlciBleHBlcmllbmNlLCB3ZSB1dGlsaXplIGNvb2tpZXMgYW5kIG90aGVyIHRlY2hub2xvZ2llcyB0byBwcm92aWRlIHNlcnZpY2VzLiBZb3UgY2FuIHJlZmVyIHRvIG91ciA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5XCI+PGVtPlBlcnNvbmFsIEluZm9ybWF0aW9uIFByb3RlY3Rpb24gUG9saWN5PC9lbT48L2E+IHRvIGxlYXJuIGhvdyB3ZSBoYW5kbGUgeW91ciBwZXJzb25hbCBpbmZvcm1hdGlvbi4nLFxuXHRcdFx0amE6ICfjgojjgoroia/jgYTjgrXjg7zjg5PjgrnjgpLmj5DkvpvjgZnjgovjgZ/jgoHjgavjgIHjgq/jg4Pjgq3jg7zjgoTjgZ3jga7ku5bjga7mioDooZPjgpLliKnnlKjjgZfjgabjgYTjgb7jgZnjgILlgIvkurrmg4XloLHjga7lj5bjgormibHjgYTmlrnms5XjgavjgaTjgYTjgabjga/jgIE8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIuWAi+S6uuaDheWgseS/neitt+aWuemHnVwiPuWAi+S6uuaDheWgseS/neitt+aWuemHnTwvYT7jgpLjgZTlj4LnhafjgY/jgaDjgZXjgYTjgIInLFxuXHRcdFx0J3poLWhhbnMnOlxuXHRcdFx0XHQn5Li65LqG5o+Q5L6b5pyA5L2z5L2T6aqM77yM5oiR5Lus5Yip55SoQ29va2ll5Y+K5YW25LuW5oqA5pyv5o+Q5L6b5pyN5Yqh77yb5oKo5Y+v5Lul5p+l6ZiF5oiR5Lus55qEPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUD9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLkuKrkurrkv6Hmga/kv53miqTmlrnpkohcIj7kuKrkurrkv6Hmga/kv53miqTmlrnpkog8L2E+77yM5LqG6Kej5oiR5Lus5aaC5L2V5aSE55CG5oKo55qE5Liq5Lq65L+h5oGv44CCJyxcblx0XHRcdCd6aC1oYW50Jzpcblx0XHRcdFx0J+eCuuS6huaPkOS+m+acgOS9s+mrlOmpl++8jOaIkeS7rOWIqeeUqENvb2tpZeWPiuWFtuS7luaKgOihk+aPkOS+m+acjeWLme+8m+aCqOWPr+S7peafpemWseaIkeWAkeeahDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFA/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi5YCL5Lq65L+h5oGv5L+d6K235pa56YedXCI+5YCL5Lq65L+h5oGv5L+d6K235pa56YedPC9hPu+8jOS6huino+aIkeWAkeWmguS9leiZleeQhuaCqOeahOWAi+S6uuS/oeaBrycsXG5cdFx0fSksXG5cdFx0VE9TTm90aWNlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0J5IHVzaW5nIHRoaXMgc2l0ZSwgeW91IGFncmVlIHRvIG91ciA8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpUT1M/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwiVGVybXMgb2YgVXNlXCI+PGVtPlRlcm1zIG9mIFVzZTwvZW0+PC9hPiwgPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUD9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCJQZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeVwiPjxlbT5QZXJzb25hbCBJbmZvcm1hdGlvbiBQcm90ZWN0aW9uIFBvbGljeTwvZW0+PC9hPiwgYW5kIG90aGVyIDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOkxBVz9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCJMZWdhbCBwb2xpY2llc1wiPmxlZ2FsIHBvbGljaWVzPC9hPi4nLFxuXHRcdFx0amE6ICfjgZPjga7jgrXjgqTjg4jjgpLliKnnlKjjgZnjgovjgZPjgajjgafjgIE8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpUT1M/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi5Yip55So6KaP57SEXCI+5Yip55So6KaP57SEPC9hPuOAgTxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlBJUFA/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi5YCL5Lq65oOF5aCx5L+d6K235pa56YedXCI+5YCL5Lq65oOF5aCx5L+d6K235pa56YedPC9hPuOAgeOBneOBruS7luOBrjxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOkxBVz9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLms5XnmoTjg53jg6rjgrfjg7xcIj7ms5XnmoTjg53jg6rjgrfjg7w8L2E+44Gr44Gk44GE44Gm5Y2B5YiG44Gr55CG6Kej44GX44CB6YG15a6I44GZ44KL44GT44Go44Gr5ZCM5oSP44GX44Gf44KC44Gu44Go44G/44Gq44GV44KM44G+44GZ44CCJyxcblx0XHRcdCd6aC1oYW5zJzpcblx0XHRcdFx0J+iuv+mXruacrOe9keerme+8jOaIluS7peS7u+S9leaWueW8j+S9v+eUqOacrOe9keerme+8jOWdh+S7o+ihqOaCqOW3suS7lOe7humYheivu+OAgeWFheWIhuS6huino+W5tuWQjOaEj+mBteWuiOacrOe9keermeeahDxhIHJlbD1cIm5vb3BlbmVyXCIgdGFyZ2V0PVwiX2JsYW5rXCIgaHJlZj1cIi93aWtpL1FXOlRPUz9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLnlKjmiLfljY/orq5cIj7nlKjmiLfljY/orq48L2E+44CBPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6UElQUD9jb25zZW50UmVhZD0xXCIgdGl0bGU9XCLkuKrkurrkv6Hmga/kv53miqTmlrnpkohcIj7kuKrkurrkv6Hmga/kv53miqTmlrnpkog8L2E+5Y+K5YW25LuW5ZCE6aG5PGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6TEFXP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIuazleW+i+aWuemSiFwiPuazleW+i+aWuemSiDwvYT7nmoTop4TlrprjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5a2Y5Y+W5pys57ay56uZ77yM5oiW5Lul5Lu75L2V5pa55byP5L2/55So5pys57ay56uZ77yM5Z2H5Luj6KGo5oKo5bey5LuU57Sw6Zax6K6A44CB5YWF5YiG5LqG6Kej5Lim5ZCM5oSP6YG15a6I5pys57ay56uZ55qEPGEgcmVsPVwibm9vcGVuZXJcIiB0YXJnZXQ9XCJfYmxhbmtcIiBocmVmPVwiL3dpa2kvUVc6VE9TP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIueUqOaItuWNlOitsFwiPueUqOaItuWNlOitsDwvYT7jgIE8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpQSVBQP2NvbnNlbnRSZWFkPTFcIiB0aXRsZT1cIuWAi+S6uuS/oeaBr+S/neitt+aWuemHnVwiPuWAi+S6uuS/oeaBr+S/neitt+aWuemHnTwvYT7lj4rlhbbku5blkITpoIU8YSByZWw9XCJub29wZW5lclwiIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCIvd2lraS9RVzpMQVc/Y29uc2VudFJlYWQ9MVwiIHRpdGxlPVwi5rOV5b6L5pa56YedXCI+5rOV5b6L5pa56YedPC9hPueahOimj+WumuOAgicsXG5cdFx0fSksXG5cdH07XG59O1xuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSAnZXh0LmdhZGdldC5SZWFjdCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL21vZHVsZXMvaTE4bic7XG5cbmNvbnN0IENvbnNlbnROb3RpY2UgPSAoKSA9PiAoXG5cdDw+XG5cdFx0PHAgaW5uZXJIVE1MPXtnZXRNZXNzYWdlKCdUT1NOb3RpY2UnKX0gLz5cblx0XHQ8cCBpbm5lckhUTUw9e2dldE1lc3NhZ2UoJ0Nvb2tpZU5vdGljZScpfSAvPlxuXHQ8Lz5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IENvbnNlbnROb3RpY2U7XG4iLCAiaW1wb3J0IHtDTEFTU19OQU1FLCBMQVNUX1NUT1JBR0VfVkFMVUUsIFNUT1JBR0VfS0VZLCBVUkxfQ09OU0VOVF9SRUFELCBXR19VU0VSX05BTUV9IGZyb20gJy4vbW9kdWxlcy9jb25zdGFudCc7XG5pbXBvcnQgQWdyZWVCdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL0FncmVlQnV0dG9uJztcbmltcG9ydCBDb25zZW50Tm90aWNlIGZyb20gJy4vY29tcG9uZW50cy9Db25zZW50Tm90aWNlJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7Z2V0Qm9keX0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBjb29raWVXYXJuaW5nKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQge1xuXHRpZiAoV0dfVVNFUl9OQU1FIHx8IExBU1RfU1RPUkFHRV9WQUxVRSA9PT0gJzEnIHx8IFVSTF9DT05TRU5UX1JFQUQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBjbG9zZVdhcm5pbmcgPSAoKTogdm9pZCA9PiB7XG5cdFx0YnJvYWRjYXN0Q2hhbm5lbC5wb3N0TWVzc2FnZSgnY2xvc2UnKTtcblx0XHRicm9hZGNhc3RDaGFubmVsLmNsb3NlKCk7XG5cdFx0cm9vdEVsZW1lbnQucmVtb3ZlKCk7XG5cdFx0bXcuc3RvcmFnZS5zZXQoU1RPUkFHRV9LRVksICcxJywgNjAgKiA2MCAqIDEwMDAgKiAyNCAqIDMwKTtcblx0fTtcblxuXHRjb25zdCBicm9hZGNhc3RDaGFubmVsOiBCcm9hZGNhc3RDaGFubmVsID0gbmV3IEJyb2FkY2FzdENoYW5uZWwoU1RPUkFHRV9LRVkpO1xuXHRicm9hZGNhc3RDaGFubmVsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBjbG9zZVdhcm5pbmcpO1xuXG5cdGNvbnN0IHJvb3RFbGVtZW50ID0gKFxuXHRcdDxkaXYgY2xhc3NOYW1lPXtbQ0xBU1NfTkFNRSwgJ25vcHJpbnQnXX0+XG5cdFx0XHQ8Q29uc2VudE5vdGljZSAvPlxuXHRcdFx0PEFncmVlQnV0dG9uIG9uQ2xpY2s9e2Nsb3NlV2FybmluZ30gLz5cblx0XHQ8L2Rpdj5cblx0KTtcblxuXHQkYm9keS5hcHBlbmQocm9vdEVsZW1lbnQpO1xufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7O0FBQUE7QUFBQTtBQUFBLEtBQUMsU0FBUyxRQUFRO0FBQ2QsVUFBSSxXQUFXLENBQUM7QUFFaEIsZUFBU0Esa0JBQWlCLFNBQVM7QUFDL0IsWUFBSSxRQUFRO0FBQ1osa0JBQVUsT0FBTyxPQUFPO0FBRXhCLFlBQUksS0FBSyx1QkFBdUIsVUFBVTtBQUUxQyxpQkFBUyxFQUFFLElBQUksU0FBUyxFQUFFLEtBQUssQ0FBQztBQUNoQyxpQkFBUyxFQUFFLEVBQUUsS0FBSyxJQUFJO0FBRXRCLGFBQUssUUFBUTtBQUNiLGFBQUssTUFBTTtBQUNYLGFBQUssVUFBVTtBQUNmLGFBQUssTUFBTSxJQUFJLGVBQWU7QUFDOUIsYUFBSyxJQUFJLE1BQU0sTUFBTTtBQUNyQixhQUFLLElBQUksTUFBTSxNQUFNO0FBRXJCLGVBQU8saUJBQWlCLFdBQVcsU0FBUyxHQUFHO0FBQzNDLGNBQUksRUFBRSxnQkFBZ0IsT0FBTztBQUFjO0FBQzNDLGNBQUksRUFBRSxZQUFZLFFBQVEsRUFBRSxhQUFhO0FBQUk7QUFDN0MsY0FBSSxFQUFFLElBQUksVUFBVSxHQUFHLEdBQUcsTUFBTSxNQUFNO0FBQUk7QUFDMUMsY0FBSSxPQUFPLEtBQUssTUFBTSxFQUFFLFFBQVE7QUFDaEMsZ0JBQU0sSUFBSSxN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QUssS0FBSyxNQUFPLEtBQUssRUFBRTtFQUMxRDtBQUVBLFFBQU00QyxtQkFBcUMsSUFBSU0saUJBQWlCbEQsV0FBVztBQUMzRTRDLG1CQUFpQk8saUJBQWlCLFdBQVdSLFlBQVk7QUFFekQsUUFBTUksY0FDTFYsbUNBQUFWLFFBQUFDLGNBQUMsT0FBQTtJQUFJQyxXQUFXLENBQUM5QixZQUFZLFNBQVM7RUFBQSxHQUNyQ3NDLG1DQUFBVixRQUFBQyxjQUFDUSx1QkFBQSxJQUFjLEdBQ2ZDLG1DQUFBVixRQUFBQyxjQUFDRyxxQkFBQTtJQUFZTCxTQUFTaUI7RUFBQSxDQUFjLENBQ3JDO0FBR0RELFFBQU1VLE9BQU9MLFdBQVc7QUFDekIsQ0FBQzsiLAogICJuYW1lcyI6IFsiQnJvYWRjYXN0Q2hhbm5lbCIsICJDTEFTU19OQU1FIiwgIlNUT1JBR0VfS0VZIiwgIkxBU1RfU1RPUkFHRV9WQUxVRSIsICJtdyIsICJzdG9yYWdlIiwgImdldCIsICJVUkxfQ09OU0VOVF9SRUFEIiwgInV0aWwiLCAiZ2V0UGFyYW1WYWx1ZSIsICJXR19VU0VSX05BTUUiLCAiY29uZmlnIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJfX3RvRVNNIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkFncmVlIiwgImxvY2FsaXplIiwgImVuIiwgImphIiwgInpoIiwgIkNvb2tpZU5vdGljZSIsICJUT1NOb3RpY2UiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgIkFncmVlQnV0dG9uIiwgIm9uQ2xpY2siLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJyb2xlIiwgIkFncmVlQnV0dG9uX2RlZmF1bHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgIkNvbnNlbnROb3RpY2UiLCAiRnJhZ21lbnQiLCAiaW5uZXJIVE1MIiwgIkNvbnNlbnROb3RpY2VfZGVmYXVsdCIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ1IiwgImdldEJvZHkiLCAidGhlbiIsICJjb29raWVXYXJuaW5nIiwgIiRib2R5IiwgImNsb3NlV2FybmluZyIsICJicm9hZGNhc3RDaGFubmVsIiwgInBvc3RNZXNzYWdlIiwgImNsb3NlIiwgInJvb3RFbGVtZW50IiwgInJlbW92ZSIsICJzZXQiLCAiQnJvYWRjYXN0Q2hhbm5lbCIsICJhZGRFdmVudExpc3RlbmVyIiwgImFwcGVuZCJdCn0K

})();

/* </nowiki> */