/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://en.wikipedia.org/wiki/MediaWiki:Gadget-markblocked.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/MarkBlocked}
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

// dist/MarkBlocked/MarkBlocked.js
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
//! src/MarkBlocked/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    infinity: (0, import_ext_gadget.localize)({
      en: "infinity",
      "zh-hans": "无限期",
      "zh-hant": "無限期"
    }),
    Blocked: (0, import_ext_gadget.localize)({
      en: "; $5blocked ($1) by $2: $3 ($4 ago)",
      "zh-hans": "；由$2$5封禁$1：$3（$4前）",
      "zh-hant": "；由$2$5封鎖$1：$3（$4前）"
    }),
    partial: (0, import_ext_gadget.localize)({
      en: "partial ",
      zh: "部分"
    }),
    d: (0, import_ext_gadget.localize)({
      en: "day",
      zh: "天"
    }),
    s: (0, import_ext_gadget.localize)({
      en: "second",
      zh: "秒"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/MarkBlocked/modules/util/parseTime.ts
var addZero = (v) => {
  return v <= 9 ? "0".concat(v) : "".concat(v);
};
var inHours = (ms) => {
  let mm = Math.floor(ms / 6e4);
  if (!mm) {
    return "".concat(Math.floor(ms / 1e3)).concat(getMessage("s"));
  }
  let hh = Math.floor(mm / 60);
  mm %= 60;
  const dd = Math.floor(hh / 24);
  hh %= 24;
  if (dd) {
    return "".concat(dd + (dd < 10 ? ".".concat(addZero(hh)) : "")).concat(getMessage("d"));
  }
  return "".concat(hh, ":").concat(addZero(mm));
};
var parseTS = (string) => {
  const m = string.replace(/\D/g, "").match(/(\d\d\d\d)(\d\d)(\d\d)(\d\d)(\d\d)(\d\d)/);
  return new Date(Date.UTC(+m[1], +m[2] - 1, +m[3], +m[4], +m[5], +m[6])).getTime();
};
//! src/MarkBlocked/modules/MarkBlocked.module.less
var loading = "MarkBlocked-module__loading_xtAfOG";
var userlink = "MarkBlocked-module__userlink_xtAfOG";
var userlinkIndef = "MarkBlocked-module__userlinkIndef_xtAfOG";
var userlinkPartial = "MarkBlocked-module__userlinkPartial_xtAfOG";
var userlinkTemp = "MarkBlocked-module__userlinkTemp_xtAfOG";
//! src/MarkBlocked/options.json
var contributionsPageAlias = "Special:Contributions";
var userNamespaceNumbers = [2, 3];
var version = "2.0";
//! src/MarkBlocked/modules/api.ts
var import_ext_gadget2 = require("ext.gadget.Util");
var api = (0, import_ext_gadget2.initMwApi)("MarkBlocked/".concat(version));
//! src/MarkBlocked/modules/util/generateUserNamespaceTitles.ts
var generateUserNamespaceTitles = () => {
  const {
    wgNamespaceIds
  } = mw.config.get();
  const userNamespaceTitles2 = [];
  for (var _i = 0, _Object$entries = Object.entries(wgNamespaceIds); _i < _Object$entries.length; _i++) {
    const [namespace, id] = _Object$entries[_i];
    if (!userNamespaceNumbers.includes(id)) {
      continue;
    }
    userNamespaceTitles2[userNamespaceTitles2.length] = "".concat(mw.util.escapeRegExp(namespace.replace(/_/g, " ")), ":");
  }
  return userNamespaceTitles2;
};
//! src/MarkBlocked/modules/util/generateUserLinks.ts
var userNamespaceTitles = generateUserNamespaceTitles();
var userTitleRegex = new RegExp("^(".concat(userNamespaceTitles.join("|"), "|").concat(contributionsPageAlias, "\\/)+([^\\/#]+)$"), "i");
var {
  wgArticlePath,
  wgScript
} = mw.config.get();
var articleRegex = new RegExp("".concat(wgArticlePath.replace("$1", ""), "([^#]+)"));
var scriptRegex = new RegExp("^".concat(wgScript, "\\?title=([^#&]+)"));
var generateUserLinks = ($content) => {
  const userLinks = {};
  var _iterator = _createForOfIteratorHelper($content.find("a")), _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done; ) {
      var _user, _userLinks$_user;
      const element = _step.value;
      const $element = $(element);
      if ($element.hasClass("mw-changeslist-date") || $element.parent("span").hasClass("mw-history-undo") || $element.parent("span").hasClass("mw-rollback-link")) {
        continue;
      }
      const href = $element.attr("href");
      if (!href) {
        continue;
      }
      if (mw.util.isIPv6Address(href.replace(/^(?:https?:\/\/)/i, ""))) {
        continue;
      }
      try {
        if (new mw.Uri(href).host !== location.host) {
          continue;
        }
      } catch {
        try {
          if (new mw.Uri(location.href + href).host !== location.host) {
            continue;
          }
        } catch {
          continue;
        }
      }
      let pageTitle;
      if (articleRegex.test(href)) {
        const match = articleRegex.exec(href);
        pageTitle = match[1];
      } else if (scriptRegex.test(href)) {
        const match = scriptRegex.exec(href);
        pageTitle = match[1];
      } else {
        continue;
      }
      pageTitle = decodeURIComponent(pageTitle).replace(/_/g, " ");
      const userExecArray = userTitleRegex.exec(pageTitle);
      if (!userExecArray || typeof userExecArray[2] !== "string") {
        continue;
      }
      let user = userExecArray[2].slice(0, 1).toUpperCase() + userExecArray[2].slice(1);
      if (mw.util.isIPv6Address(user)) {
        user = user.toUpperCase();
      }
      $element.addClass("".concat(userlink));
      (_userLinks$_user = userLinks[_user = user]) !== null && _userLinks$_user !== void 0 ? _userLinks$_user : userLinks[_user] = [];
      userLinks[user][userLinks[user].length] = $element;
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  return userLinks;
};
//! src/MarkBlocked/modules/markBlockedUser.ts
var markBlockedUser = ($content) => {
  const userLinks = generateUserLinks($content);
  const users = Object.keys(userLinks);
  if (!users.length) {
    return;
  }
  $content.addClass("".concat(loading));
  const markLinks = (response) => {
    var _response$query;
    if (!((_response$query = response["query"]) !== null && _response$query !== void 0 && _response$query.blocks)) {
      return;
    }
    var _iterator2 = _createForOfIteratorHelper(response["query"].blocks), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const block = _step2.value;
        const isPartialBlcok = typeof block.restrictions === "string" && block.restrictions !== "";
        let className = "".concat(userlinkPartial);
        let blockTime = "";
        if (block.expiry.startsWith("in")) {
          if (!isPartialBlcok) {
            className = "".concat(userlinkIndef);
          }
          blockTime = getMessage("infinity");
        } else {
          if (!isPartialBlcok) {
            className = "".concat(userlinkTemp);
          }
          blockTime = inHours(parseTS(block.expiry) - parseTS(block.timestamp));
        }
        let tip = getMessage("Blocked").replace("$1", blockTime).replace("$2", block.by).replace("$3", block.reason).replace("$4", inHours(Date.now() - parseTS(block.timestamp)));
        tip = isPartialBlcok ? tip.replace("$5", getMessage("partial")) : tip.replace("$5", "");
        const $links = userLinks[block.user];
        if (!$links) {
          continue;
        }
        var _iterator3 = _createForOfIteratorHelper($links), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const $link = _step3.value;
            $link.addClass(className).attr("title", $link.attr("title") + tip);
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
  };
  const promises = [];
  for (let i = 0; i < users.length; i++) {
    const bkusers = users.splice(0, 50);
    if (!bkusers.length) {
      continue;
    }
    promises[promises.length] = /* @__PURE__ */ _asyncToGenerator(function* () {
      const params = {
        bkusers,
        action: "query",
        format: "json",
        formatversion: "2",
        list: "blocks",
        bklimit: 100,
        bkprop: ["by", "expiry", "reason", "restrictions", "timestamp", "user"]
      };
      try {
        const response = yield api.post(params);
        markLinks(response);
      } catch (error) {
        console.error("[MarkBlocked] Ajax error:", error);
      }
    });
  }
  void _asyncToGenerator(function* () {
    for (var _i2 = 0, _promises = promises; _i2 < _promises.length; _i2++) {
      const promise = _promises[_i2];
      try {
        yield promise();
      } catch {
      }
    }
  })().then(() => {
    $content.removeClass("".concat(loading));
  });
};
//! src/MarkBlocked/modules/addHook.ts
var {
  wgAction,
  wgNamespaceNumber
} = mw.config.get();
var addHook = () => {
  let isInit = false;
  mw.hook("wikipage.content").add(function markBlocked($content) {
    if (isInit) {
      return;
    }
    isInit = true;
    if (wgAction === "view" && wgNamespaceNumber === 0) {
      $content = $content.find(".diff-title");
    }
    $content = $content.add("#ca-nstab-user");
    markBlockedUser($content);
  });
};
//! src/MarkBlocked/MarkBlocked.ts
if (!["edit", "submit"].includes(mw.config.get("wgAction"))) {
  addHook();
}

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtCbG9ja2VkL21vZHVsZXMvaTE4bi50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL3BhcnNlVGltZS50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9NYXJrQmxvY2tlZC5tb2R1bGUubGVzcyIsICJzcmMvTWFya0Jsb2NrZWQvb3B0aW9ucy5qc29uIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL2FwaS50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcy50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy91dGlsL2dlbmVyYXRlVXNlckxpbmtzLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9tb2R1bGVzL21hcmtCbG9ja2VkVXNlci50cyIsICJzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9hZGRIb29rLnRzIiwgInNyYy9NYXJrQmxvY2tlZC9NYXJrQmxvY2tlZC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdGluZmluaXR5OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2luZmluaXR5Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+aXoOmZkOacnycsXG5cdFx0XHQnemgtaGFudCc6ICfnhKHpmZDmnJ8nLFxuXHRcdH0pLFxuXHRcdEJsb2NrZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnOyAkNWJsb2NrZWQgKCQxKSBieSAkMjogJDMgKCQ0IGFnbyknLFxuXHRcdFx0J3poLWhhbnMnOiAn77yb55SxJDIkNeWwgeemgSQx77yaJDPvvIgkNOWJje+8iScsXG5cdFx0XHQnemgtaGFudCc6ICfvvJvnlLEkMiQ15bCB6Y6WJDHvvJokM++8iCQ05YmN77yJJyxcblx0XHR9KSxcblx0XHRwYXJ0aWFsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ3BhcnRpYWwgJyxcblx0XHRcdHpoOiAn6YOo5YiGJyxcblx0XHR9KSxcblx0XHRkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2RheScsXG5cdFx0XHR6aDogJ+WkqScsXG5cdFx0fSksXG5cdFx0czogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdzZWNvbmQnLFxuXHRcdFx0emg6ICfnp5InLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4uL2kxOG4nO1xuXG5jb25zdCBhZGRaZXJvID0gKHY6IG51bWJlcik6IHN0cmluZyA9PiB7XG5cdHJldHVybiB2IDw9IDkgPyBgMCR7dn1gIDogYCR7dn1gO1xufTtcblxuY29uc3QgaW5Ib3VycyA9IChtczogbnVtYmVyKTogc3RyaW5nID0+IHtcblx0bGV0IG1tOiBudW1iZXIgPSBNYXRoLmZsb29yKG1zIC8gNmU0KTtcblx0aWYgKCFtbSkge1xuXHRcdHJldHVybiBgJHtNYXRoLmZsb29yKG1zIC8gMWUzKX0ke2dldE1lc3NhZ2UoJ3MnKX1gO1xuXHR9XG5cblx0bGV0IGhoOiBudW1iZXIgPSBNYXRoLmZsb29yKG1tIC8gNjApO1xuXHRtbSAlPSA2MDtcblxuXHRjb25zdCBkZDogbnVtYmVyID0gTWF0aC5mbG9vcihoaCAvIDI0KTtcblx0aGggJT0gMjQ7XG5cblx0aWYgKGRkKSB7XG5cdFx0cmV0dXJuIGAke2RkICsgKGRkIDwgMTAgPyBgLiR7YWRkWmVybyhoaCl9YCA6ICcnKX0ke2dldE1lc3NhZ2UoJ2QnKX1gO1xuXHR9XG5cblx0cmV0dXJuIGAke2hofToke2FkZFplcm8obW0pfWA7XG59O1xuXG4vLyAyMDA4MTIyNjIyMDYwNSBvciAyMDA4LTAxLTI2VDA2OjM0OjE5WiAtPiBudW1iZXJcbmNvbnN0IHBhcnNlVFMgPSAoc3RyaW5nOiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuXHRjb25zdCBtOiBSZWdFeHBNYXRjaEFycmF5ID0gc3RyaW5nXG5cdFx0LnJlcGxhY2UoL1xcRC9nLCAnJylcblx0XHQubWF0Y2goLyhcXGRcXGRcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKShcXGRcXGQpKFxcZFxcZCkoXFxkXFxkKS8pIGFzIFJlZ0V4cE1hdGNoQXJyYXk7XG5cblx0cmV0dXJuIG5ldyBEYXRlKFxuXHRcdERhdGUuVVRDKFxuXHRcdFx0KyhtWzFdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bMl0gYXMgc3RyaW5nKSAtIDEsXG5cdFx0XHQrKG1bM10gYXMgc3RyaW5nKSxcblx0XHRcdCsobVs0XSBhcyBzdHJpbmcpLFxuXHRcdFx0KyhtWzVdIGFzIHN0cmluZyksXG5cdFx0XHQrKG1bNl0gYXMgc3RyaW5nKVxuXHRcdClcblx0KS5nZXRUaW1lKCk7XG59O1xuXG5leHBvcnQge2luSG91cnMsIHBhcnNlVFN9O1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvTWFya0Jsb2NrZWQvbW9kdWxlcy9NYXJrQmxvY2tlZC5tb2R1bGUubGVzc1wiO1xuZXhwb3J0IGNvbnN0IGxvYWRpbmcgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fbG9hZGluZ194dEFmT0dcIjtcbmV4cG9ydCBjb25zdCB1c2VybGluayA9IFwiTWFya0Jsb2NrZWQtbW9kdWxlX191c2VybGlua194dEFmT0dcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua0luZGVmID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rSW5kZWZfeHRBZk9HXCI7XG5leHBvcnQgY29uc3QgdXNlcmxpbmtQYXJ0aWFsID0gXCJNYXJrQmxvY2tlZC1tb2R1bGVfX3VzZXJsaW5rUGFydGlhbF94dEFmT0dcIjtcbmV4cG9ydCBjb25zdCB1c2VybGlua1RlbXAgPSBcIk1hcmtCbG9ja2VkLW1vZHVsZV9fdXNlcmxpbmtUZW1wX3h0QWZPR1wiO1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gIFwibG9hZGluZ1wiOiBsb2FkaW5nLFxuICBcInVzZXJsaW5rXCI6IHVzZXJsaW5rLFxuICBcInVzZXJsaW5rSW5kZWZcIjogdXNlcmxpbmtJbmRlZixcbiAgXCJ1c2VybGlua1BhcnRpYWxcIjogdXNlcmxpbmtQYXJ0aWFsLFxuICBcInVzZXJsaW5rVGVtcFwiOiB1c2VybGlua1RlbXBcbn07XG4gICAgICAiLCAie1xuXHRcImNvbnRyaWJ1dGlvbnNQYWdlQWxpYXNcIjogXCJTcGVjaWFsOkNvbnRyaWJ1dGlvbnNcIixcblx0XCJ1c2VyTmFtZXNwYWNlTnVtYmVyc1wiOiBbMiwgM10sXG5cdFwidmVyc2lvblwiOiBcIjIuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBNYXJrQmxvY2tlZC8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcblxuY29uc3QgZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzID0gKCk6IHN0cmluZ1tdID0+IHtcblx0Y29uc3Qge3dnTmFtZXNwYWNlSWRzfSA9IG13LmNvbmZpZy5nZXQoKTtcblxuXHRjb25zdCB1c2VyTmFtZXNwYWNlVGl0bGVzOiBzdHJpbmdbXSA9IFtdO1xuXG5cdGZvciAoY29uc3QgW25hbWVzcGFjZSwgaWRdIG9mIE9iamVjdC5lbnRyaWVzKHdnTmFtZXNwYWNlSWRzKSkge1xuXHRcdGlmICghT1BUSU9OUy51c2VyTmFtZXNwYWNlTnVtYmVycy5pbmNsdWRlcyhpZCkpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHVzZXJOYW1lc3BhY2VUaXRsZXNbdXNlck5hbWVzcGFjZVRpdGxlcy5sZW5ndGhdID0gYCR7bXcudXRpbC5lc2NhcGVSZWdFeHAobmFtZXNwYWNlLnJlcGxhY2UoL18vZywgJyAnKSl9OmA7IC8vIFJlcGxhY2UgYFtdLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHR9XG5cblx0cmV0dXJuIHVzZXJOYW1lc3BhY2VUaXRsZXM7XG59O1xuXG5leHBvcnQge2dlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlc307XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi8uLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtnZW5lcmF0ZVVzZXJOYW1lc3BhY2VUaXRsZXN9IGZyb20gJy4vZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzJztcbmltcG9ydCB7dXNlcmxpbmt9IGZyb20gJy4uL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzJztcblxuLy8gR2V0IGFsbCBhbGlhc2VzIGZvciB1c2VyOiAmIHVzZXJfdGFsazpcbmNvbnN0IHVzZXJOYW1lc3BhY2VUaXRsZXM6IHN0cmluZ1tdID0gZ2VuZXJhdGVVc2VyTmFtZXNwYWNlVGl0bGVzKCk7XG4vLyBSZWdFeHAgZm9yIGFsbCB0aXRsZXMgdGhhdCBhcmUgIFVzZXI6fCBVc2VyX3RhbGs6IHwgU3BlY2lhbDpDb250cmlidXRpb25zLyAoZm9yIHVzZXJzY3JpcHRzKVxuY29uc3QgdXNlclRpdGxlUmVnZXg6IFJlZ0V4cCA9IG5ldyBSZWdFeHAoXG5cdGBeKCR7dXNlck5hbWVzcGFjZVRpdGxlcy5qb2luKCd8Jyl9fCR7T1BUSU9OUy5jb250cmlidXRpb25zUGFnZUFsaWFzfVxcXFwvKSsoW15cXFxcLyNdKykkYCxcblx0J2knXG4pO1xuXG4vLyBSZWdFeHAgZm9yIGxpbmtzXG4vLyBhcnRpY2xlUmVnZXggYWxzbyBtYXRjaGVzIGV4dGVybmFsIGxpbmtzIGluIG9yZGVyIHRvIHN1cHBvcnQgdGhlIG5vcGluZyB0ZW1wbGF0ZVxuY29uc3Qge3dnQXJ0aWNsZVBhdGgsIHdnU2NyaXB0fSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IGFydGljbGVSZWdleDogUmVnRXhwID0gbmV3IFJlZ0V4cChgJHt3Z0FydGljbGVQYXRoLnJlcGxhY2UoJyQxJywgJycpfShbXiNdKylgKTtcbmNvbnN0IHNjcmlwdFJlZ2V4OiBSZWdFeHAgPSBuZXcgUmVnRXhwKGBeJHt3Z1NjcmlwdH1cXFxcP3RpdGxlPShbXiMmXSspYCk7XG5cbmNvbnN0IGdlbmVyYXRlVXNlckxpbmtzID0gKCRjb250ZW50OiBKUXVlcnkpOiBSZWNvcmQ8c3RyaW5nLCBKUXVlcnlbXT4gPT4ge1xuXHQvLyBGaW5kIGFsbCBcInVzZXJcIiBsaW5rcyBhbmQgc2F2ZSB0aGVtIGluIHVzZXJMaW5rcyA6IHsgJ3VzZXJzJzogWzxsaW5rMT4sIDxsaW5rMj4sIC4uLl0sICd1c2VyMic6IFs8bGluazM+LCA8bGluazM+LCAuLi5dLCAuLi4gfVxuXHRjb25zdCB1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPiA9IHt9O1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkY29udGVudC5maW5kKCdhJykpIHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5PEhUTUxBbmNob3JFbGVtZW50PiA9ICQoZWxlbWVudCk7XG5cdFx0aWYgKFxuXHRcdFx0JGVsZW1lbnQuaGFzQ2xhc3MoJ213LWNoYW5nZXNsaXN0LWRhdGUnKSB8fFxuXHRcdFx0JGVsZW1lbnQucGFyZW50KCdzcGFuJykuaGFzQ2xhc3MoJ213LWhpc3RvcnktdW5kbycpIHx8XG5cdFx0XHQkZWxlbWVudC5wYXJlbnQoJ3NwYW4nKS5oYXNDbGFzcygnbXctcm9sbGJhY2stbGluaycpXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRjb25zdCBocmVmOiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdocmVmJyk7XG5cdFx0aWYgKCFocmVmKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKG13LnV0aWwuaXNJUHY2QWRkcmVzcyhocmVmLnJlcGxhY2UoL14oPzpodHRwcz86XFwvXFwvKS9pLCAnJykpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0dHJ5IHtcblx0XHRcdGlmIChuZXcgbXcuVXJpKGhyZWYpLmhvc3QgIT09IGxvY2F0aW9uLmhvc3QpIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRpZiAobmV3IG13LlVyaShsb2NhdGlvbi5ocmVmICsgaHJlZikuaG9zdCAhPT0gbG9jYXRpb24uaG9zdCkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0bGV0IHBhZ2VUaXRsZTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuXHRcdGlmIChhcnRpY2xlUmVnZXgudGVzdChocmVmKSkge1xuXHRcdFx0Y29uc3QgbWF0Y2g6IFJlZ0V4cEV4ZWNBcnJheSA9IGFydGljbGVSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdHBhZ2VUaXRsZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2UgaWYgKHNjcmlwdFJlZ2V4LnRlc3QoaHJlZikpIHtcblx0XHRcdGNvbnN0IG1hdGNoOiBSZWdFeHBFeGVjQXJyYXkgPSBzY3JpcHRSZWdleC5leGVjKGhyZWYpIGFzIFJlZ0V4cEV4ZWNBcnJheTtcblx0XHRcdHBhZ2VUaXRsZSA9IG1hdGNoWzFdIGFzIHN0cmluZztcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0cGFnZVRpdGxlID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhZ2VUaXRsZSkucmVwbGFjZSgvXy9nLCAnICcpO1xuXG5cdFx0Y29uc3QgdXNlckV4ZWNBcnJheTogUmVnRXhwRXhlY0FycmF5IHwgbnVsbCA9IHVzZXJUaXRsZVJlZ2V4LmV4ZWMocGFnZVRpdGxlKTtcblx0XHRpZiAoIXVzZXJFeGVjQXJyYXkgfHwgdHlwZW9mIHVzZXJFeGVjQXJyYXlbMl0gIT09ICdzdHJpbmcnKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHRsZXQgdXNlcjogc3RyaW5nID0gdXNlckV4ZWNBcnJheVsyXS5zbGljZSgwLCAxKS50b1VwcGVyQ2FzZSgpICsgdXNlckV4ZWNBcnJheVsyXS5zbGljZSgxKTtcblx0XHRpZiAobXcudXRpbC5pc0lQdjZBZGRyZXNzKHVzZXIpKSB7XG5cdFx0XHR1c2VyID0gdXNlci50b1VwcGVyQ2FzZSgpO1xuXHRcdH1cblxuXHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdC8vICogc2VlIC4uL01hcmtibG9ja2VkLm1vZHVsZS5sZXNzXG5cdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdCRlbGVtZW50LmFkZENsYXNzKGAke3VzZXJsaW5rfWApO1xuXG5cdFx0dXNlckxpbmtzW3VzZXJdID8/PSBbXTtcblxuXHRcdCh1c2VyTGlua3NbdXNlcl0gYXMgKHR5cGVvZiB1c2VyTGlua3MpW2tleW9mIHR5cGVvZiB1c2VyTGlua3NdKVtcblx0XHRcdCh1c2VyTGlua3NbdXNlcl0gYXMgKHR5cGVvZiB1c2VyTGlua3MpW2tleW9mIHR5cGVvZiB1c2VyTGlua3NdKS5sZW5ndGhcblx0XHRdID0gJGVsZW1lbnQ7IC8vIFJlcGxhY2UgYFtdLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHR9XG5cblx0cmV0dXJuIHVzZXJMaW5rcztcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVVc2VyTGlua3N9O1xuIiwgImltcG9ydCB7aW5Ib3VycywgcGFyc2VUU30gZnJvbSAnLi91dGlsL3BhcnNlVGltZSc7XG5pbXBvcnQge2xvYWRpbmcsIHVzZXJsaW5rSW5kZWYsIHVzZXJsaW5rUGFydGlhbCwgdXNlcmxpbmtUZW1wfSBmcm9tICcuL01hcmtCbG9ja2VkLm1vZHVsZS5sZXNzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dlbmVyYXRlVXNlckxpbmtzfSBmcm9tICcuL3V0aWwvZ2VuZXJhdGVVc2VyTGlua3MnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuXG5jb25zdCBtYXJrQmxvY2tlZFVzZXIgPSAoJGNvbnRlbnQ6IEpRdWVyeSk6IHZvaWQgPT4ge1xuXHQvLyBGaW5kIGFsbCBcInVzZXJcIiBsaW5rcyBhbmQgc2F2ZSB0aGVtIGluIHVzZXJMaW5rcyA6IHsgJ3VzZXJzJzogWzxsaW5rMT4sIDxsaW5rMj4sIC4uLl0sICd1c2VyMic6IFs8bGluazM+LCA8bGluazM+LCAuLi5dLCAuLi4gfVxuXHRjb25zdCB1c2VyTGlua3M6IFJlY29yZDxzdHJpbmcsIEpRdWVyeVtdPiA9IGdlbmVyYXRlVXNlckxpbmtzKCRjb250ZW50KTtcblxuXHQvLyBDb252ZXJ0IHVzZXJzIGludG8gYXJyYXlcblx0Y29uc3QgdXNlcnM6IHN0cmluZ1tdID0gT2JqZWN0LmtleXModXNlckxpbmtzKTtcblx0aWYgKCF1c2Vycy5sZW5ndGgpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0Ly8gKiBzZWUgLi9NYXJrYmxvY2tlZC5tb2R1bGUubGVzc1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdCRjb250ZW50LmFkZENsYXNzKGAke2xvYWRpbmd9YCk7XG5cblx0Ly8gQVBJIHJlcXVlc3Rcblx0dHlwZSBSZXNwb25zZSA9IHtcblx0XHRxdWVyeToge1xuXHRcdFx0YmxvY2tzPzogQXJyYXk8e1xuXHRcdFx0XHRieTogc3RyaW5nO1xuXHRcdFx0XHRleHBpcnk6IHN0cmluZztcblx0XHRcdFx0cmVhc29uOiBzdHJpbmc7XG5cdFx0XHRcdHJlc3RyaWN0aW9uczogc3RyaW5nIHwgc3RyaW5nW107XG5cdFx0XHRcdHRpbWVzdGFtcDogc3RyaW5nO1xuXHRcdFx0XHR1c2VyOiBzdHJpbmc7XG5cdFx0XHR9Pjtcblx0XHR9O1xuXHR9O1xuXG5cdC8vIENhbGxiYWNrOiByZWNlaXZlIGRhdGEgYW5kIG1hcmsgbGlua3Ncblx0Y29uc3QgbWFya0xpbmtzID0gKHJlc3BvbnNlOiBSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdGlmICghcmVzcG9uc2VbJ3F1ZXJ5J10/LmJsb2Nrcykge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGZvciAoY29uc3QgYmxvY2sgb2YgcmVzcG9uc2VbJ3F1ZXJ5J10uYmxvY2tzKSB7XG5cdFx0XHRjb25zdCBpc1BhcnRpYWxCbGNvazogYm9vbGVhbiA9IHR5cGVvZiBibG9jay5yZXN0cmljdGlvbnMgPT09ICdzdHJpbmcnICYmIGJsb2NrLnJlc3RyaWN0aW9ucyAhPT0gJyc7IC8vIFBhcnRpYWwgYmxvY2tcblxuXHRcdFx0bGV0IGNsYXNzTmFtZTogc3RyaW5nID0gYCR7dXNlcmxpbmtQYXJ0aWFsfWA7XG5cdFx0XHRsZXQgYmxvY2tUaW1lOiBzdHJpbmcgPSAnJztcblx0XHRcdGlmIChibG9jay5leHBpcnkuc3RhcnRzV2l0aCgnaW4nKSkge1xuXHRcdFx0XHRpZiAoIWlzUGFydGlhbEJsY29rKSB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lID0gYCR7dXNlcmxpbmtJbmRlZn1gO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGJsb2NrVGltZSA9IGdldE1lc3NhZ2UoJ2luZmluaXR5Jyk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZiAoIWlzUGFydGlhbEJsY29rKSB7XG5cdFx0XHRcdFx0Y2xhc3NOYW1lID0gYCR7dXNlcmxpbmtUZW1wfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0YmxvY2tUaW1lID0gaW5Ib3VycyhwYXJzZVRTKGJsb2NrLmV4cGlyeSkgLSBwYXJzZVRTKGJsb2NrLnRpbWVzdGFtcCkpO1xuXHRcdFx0fVxuXG5cdFx0XHRsZXQgdGlwOiBzdHJpbmcgPSBnZXRNZXNzYWdlKCdCbG9ja2VkJylcblx0XHRcdFx0LnJlcGxhY2UoJyQxJywgYmxvY2tUaW1lKVxuXHRcdFx0XHQucmVwbGFjZSgnJDInLCBibG9jay5ieSlcblx0XHRcdFx0LnJlcGxhY2UoJyQzJywgYmxvY2sucmVhc29uKVxuXHRcdFx0XHQucmVwbGFjZSgnJDQnLCBpbkhvdXJzKERhdGUubm93KCkgLSBwYXJzZVRTKGJsb2NrLnRpbWVzdGFtcCkpKTtcblx0XHRcdHRpcCA9IGlzUGFydGlhbEJsY29rID8gdGlwLnJlcGxhY2UoJyQ1JywgZ2V0TWVzc2FnZSgncGFydGlhbCcpKSA6IHRpcC5yZXBsYWNlKCckNScsICcnKTtcblxuXHRcdFx0Y29uc3QgJGxpbmtzOiBKUXVlcnlbXSB8IHVuZGVmaW5lZCA9IHVzZXJMaW5rc1tibG9jay51c2VyXTtcblx0XHRcdGlmICghJGxpbmtzKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IgKGNvbnN0ICRsaW5rIG9mICRsaW5rcykge1xuXHRcdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdFx0Ly8gKiBzZWUgLi9NYXJrYmxvY2tlZC5tb2R1bGUubGVzc1xuXHRcdFx0XHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdFx0XHRcdCRsaW5rLmFkZENsYXNzKGNsYXNzTmFtZSkuYXR0cigndGl0bGUnLCAkbGluay5hdHRyKCd0aXRsZScpICsgdGlwKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cblx0Y29uc3QgcHJvbWlzZXM6ICgoKSA9PiBQcm9taXNlPHZvaWQ+KVtdID0gW107XG5cblx0Zm9yIChsZXQgaSA9IDA7IGkgPCB1c2Vycy5sZW5ndGg7IGkrKykge1xuXHRcdGNvbnN0IGJrdXNlcnMgPSB1c2Vycy5zcGxpY2UoMCwgNTApO1xuXHRcdGlmICghYmt1c2Vycy5sZW5ndGgpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHByb21pc2VzW3Byb21pc2VzLmxlbmd0aF0gPSBhc3luYyAoKTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0XHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5QmxvY2tzUGFyYW1zID0ge1xuXHRcdFx0XHRia3VzZXJzLFxuXHRcdFx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0XHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdGxpc3Q6ICdibG9ja3MnLFxuXHRcdFx0XHRia2xpbWl0OiAxMDAsXG5cdFx0XHRcdGJrcHJvcDogWydieScsICdleHBpcnknLCAncmVhc29uJywgJ3Jlc3RyaWN0aW9ucycsICd0aW1lc3RhbXAnLCAndXNlciddLFxuXHRcdFx0fTtcblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdChwYXJhbXMpO1xuXHRcdFx0XHRtYXJrTGlua3MocmVzcG9uc2UgYXMgUmVzcG9uc2UpO1xuXHRcdFx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRcdFx0Y29uc29sZS5lcnJvcignW01hcmtCbG9ja2VkXSBBamF4IGVycm9yOicsIGVycm9yKTtcblx0XHRcdH1cblx0XHR9O1xuXHR9XG5cblx0dm9pZCAoYXN5bmMgKCkgPT4ge1xuXHRcdGZvciAoY29uc3QgcHJvbWlzZSBvZiBwcm9taXNlcykge1xuXHRcdFx0dHJ5IHtcblx0XHRcdFx0YXdhaXQgcHJvbWlzZSgpO1xuXHRcdFx0fSBjYXRjaCB7fVxuXHRcdH1cblx0fSkoKS50aGVuKCgpID0+IHtcblx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHQvLyAqIHNlZSAuL01hcmtibG9ja2VkLm1vZHVsZS5sZXNzXG5cdFx0Ly8gKiBmb3IgbW9yZSBpbmZvcm1hdGlvblxuXHRcdCRjb250ZW50LnJlbW92ZUNsYXNzKGAke2xvYWRpbmd9YCk7XG5cdH0pO1xufTtcblxuZXhwb3J0IHttYXJrQmxvY2tlZFVzZXJ9O1xuIiwgImltcG9ydCB7bWFya0Jsb2NrZWRVc2VyfSBmcm9tICcuL21hcmtCbG9ja2VkVXNlcic7XG5cbmNvbnN0IHt3Z0FjdGlvbiwgd2dOYW1lc3BhY2VOdW1iZXJ9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5jb25zdCBhZGRIb29rID0gKCk6IHZvaWQgPT4ge1xuXHRsZXQgaXNJbml0OiBib29sZWFuID0gZmFsc2U7XG5cblx0bXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChmdW5jdGlvbiBtYXJrQmxvY2tlZCgkY29udGVudCk6IHZvaWQge1xuXHRcdGlmIChpc0luaXQpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0aXNJbml0ID0gdHJ1ZTtcblxuXHRcdC8vIE9uIHRoZSBmaXJzdCBjYWxsIGFmdGVyIGluaXRpYWwgcGFnZSBsb2FkLCBjb250YWluZXIgaXMgbXcudXRpbC4kY29udGVudFxuXHRcdC8vIFVzZWQgdG8gbGltaXQgbWFpbnNwYWNlIGFjdGl2aXR5IHRvIGp1c3QgdGhlIGRpZmYgZGVmaW5pdGlvbnNcblx0XHRpZiAod2dBY3Rpb24gPT09ICd2aWV3JyAmJiB3Z05hbWVzcGFjZU51bWJlciA9PT0gMCkge1xuXHRcdFx0JGNvbnRlbnQgPSAkY29udGVudC5maW5kKCcuZGlmZi10aXRsZScpO1xuXHRcdH1cblx0XHQvLyBPbiBwYWdlIGxvYWQsIGFsc28gdXBkYXRlIHRoZSBuYW1lc3BhY2UgdGFiXG5cdFx0JGNvbnRlbnQgPSAkY29udGVudC5hZGQoJyNjYS1uc3RhYi11c2VyJyk7XG5cblx0XHRtYXJrQmxvY2tlZFVzZXIoJGNvbnRlbnQpO1xuXHR9KTtcbn07XG5cbmV4cG9ydCB7YWRkSG9va307XG4iLCAiaW1wb3J0IHthZGRIb29rfSBmcm9tICcuL21vZHVsZXMvYWRkSG9vayc7XG5cbmlmICghWydlZGl0JywgJ3N1Ym1pdCddLmluY2x1ZGVzKG13LmNvbmZpZy5nZXQoJ3dnQWN0aW9uJykpKSB7XG5cdGFkZEhv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QixJQUFJdkcsR0FBR0MsT0FBT0MsSUFBSTtBQUVwRCxJQUFNc0csVUFBVUEsTUFBWTtBQUMzQixNQUFJQyxTQUFrQjtBQUV0QnpHLEtBQUcwRyxLQUFLLGtCQUFrQixFQUFFQyxJQUFJLFNBQVNDLFlBQVlyRixVQUFnQjtBQUNwRSxRQUFJa0YsUUFBUTtBQUNYO0lBQ0Q7QUFDQUEsYUFBUztBQUlULFFBQUlILGFBQWEsVUFBVUMsc0JBQXNCLEdBQUc7QUFDbkRoRixpQkFBV0EsU0FBU0ksS0FBSyxhQUFhO0lBQ3ZDO0FBRUFKLGVBQVdBLFNBQVNvRixJQUFJLGdCQUFnQjtBQUV4Q2xELG9CQUFnQmxDLFFBQVE7RUFDekIsQ0FBQztBQUNGOztBQ3JCQSxJQUFJLENBQUMsQ0FBQyxRQUFRLFFBQVEsRUFBRVosU0FBU1gsR0FBR0MsT0FBT0MsSUFBSSxVQUFVLENBQUMsR0FBRztBQUM1RHNHLFVBQVE7QUFDVDsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJnZXRJMThuTWVzc2FnZXMiLCAiaW5maW5pdHkiLCAibG9jYWxpemUiLCAiZW4iLCAiQmxvY2tlZCIsICJwYXJ0aWFsIiwgInpoIiwgImQiLCAicyIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiYWRkWmVybyIsICJ2IiwgImNvbmNhdCIsICJpbkhvdXJzIiwgIm1zIiwgIm1tIiwgIk1hdGgiLCAiZmxvb3IiLCAiaGgiLCAiZGQiLCAicGFyc2VUUyIsICJzdHJpbmciLCAibSIsICJyZXBsYWNlIiwgIm1hdGNoIiwgIkRhdGUiLCAiVVRDIiwgImdldFRpbWUiLCAibG9hZGluZyIsICJ1c2VybGluayIsICJ1c2VybGlua0luZGVmIiwgInVzZXJsaW5rUGFydGlhbCIsICJ1c2VybGlua1RlbXAiLCAiY29udHJpYnV0aW9uc1BhZ2VBbGlhcyIsICJ1c2VyTmFtZXNwYWNlTnVtYmVycyIsICJ2ZXJzaW9uIiwgImltcG9ydF9leHRfZ2FkZ2V0MiIsICJhcGkiLCAiaW5pdE13QXBpIiwgImdlbmVyYXRlVXNlck5hbWVzcGFjZVRpdGxlcyIsICJ3Z05hbWVzcGFjZUlkcyIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInVzZXJOYW1lc3BhY2VUaXRsZXMyIiwgIl9pIiwgIl9PYmplY3QkZW50cmllcyIsICJPYmplY3QiLCAiZW50cmllcyIsICJsZW5ndGgiLCAibmFtZXNwYWNlIiwgImlkIiwgImluY2x1ZGVzIiwgInV0aWwiLCAiZXNjYXBlUmVnRXhwIiwgInVzZXJOYW1lc3BhY2VUaXRsZXMiLCAidXNlclRpdGxlUmVnZXgiLCAiUmVnRXhwIiwgImpvaW4iLCAid2dBcnRpY2xlUGF0aCIsICJ3Z1NjcmlwdCIsICJhcnRpY2xlUmVnZXgiLCAic2NyaXB0UmVnZXgiLCAiZ2VuZXJhdGVVc2VyTGlua3MiLCAiJGNvbnRlbnQiLCAidXNlckxpbmtzIiwgIl9pdGVyYXRvciIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJmaW5kIiwgIl9zdGVwIiwgIm4iLCAiZG9uZSIsICJfdXNlciIsICJfdXNlckxpbmtzJF91c2VyIiwgImVsZW1lbnQiLCAidmFsdWUiLCAiJGVsZW1lbnQiLCAiJCIsICJoYXNDbGFzcyIsICJwYXJlbnQiLCAiaHJlZiIsICJhdHRyIiwgImlzSVB2NkFkZHJlc3MiLCAiVXJpIiwgImhvc3QiLCAibG9jYXRpb24iLCAicGFnZVRpdGxlIiwgInRlc3QiLCAiZXhlYyIsICJkZWNvZGVVUklDb21wb25lbnQiLCAidXNlckV4ZWNBcnJheSIsICJ1c2VyIiwgInNsaWNlIiwgInRvVXBwZXJDYXNlIiwgImFkZENsYXNzIiwgImVyciIsICJlIiwgImYiLCAibWFya0Jsb2NrZWRVc2VyIiwgInVzZXJzIiwgImtleXMiLCAibWFya0xpbmtzIiwgInJlc3BvbnNlIiwgIl9yZXNwb25zZSRxdWVyeSIsICJibG9ja3MiLCAiX2l0ZXJhdG9yMiIsICJfc3RlcDIiLCAiYmxvY2siLCAiaXNQYXJ0aWFsQmxjb2siLCAicmVzdHJpY3Rpb25zIiwgImNsYXNzTmFtZSIsICJibG9ja1RpbWUiLCAiZXhwaXJ5IiwgInN0YXJ0c1dpdGgiLCAidGltZXN0YW1wIiwgInRpcCIsICJieSIsICJyZWFzb24iLCAibm93IiwgIiRsaW5rcyIsICJfaXRlcmF0b3IzIiwgIl9zdGVwMyIsICIkbGluayIsICJwcm9taXNlcyIsICJpIiwgImJrdXNlcnMiLCAic3BsaWNlIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInBhcmFtcyIsICJhY3Rpb24iLCAiZm9ybWF0IiwgImZvcm1hdHZlcnNpb24iLCAibGlzdCIsICJia2xpbWl0IiwgImJrcHJvcCIsICJwb3N0IiwgImVycm9yIiwgImNvbnNvbGUiLCAiX2kyIiwgIl9wcm9taXNlcyIsICJwcm9taXNlIiwgInRoZW4iLCAicmVtb3ZlQ2xhc3MiLCAid2dBY3Rpb24iLCAid2dOYW1lc3BhY2VOdW1iZXIiLCAiYWRkSG9vayIsICJpc0luaXQiLCAiaG9vayIsICJhZGQiLCAibWFya0Jsb2NrZWQiXQp9Cg==
