/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-MarkRights.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/MarkRights}
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

// dist/MarkRights/MarkRights.js
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
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all) __defProp(target, name, {
    get: all[name],
    enumerable: true
  });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    var _iterator = _createForOfIteratorHelper(__getOwnPropNames(from)), _step;
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
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", {
  value: true
}), mod);
//! src/MarkRights/MarkRights.ts
var MarkRights_exports = {};
__export(MarkRights_exports, {
  queryGlobalUserGroups: () => queryGlobalUserGroups,
  queryUserGroups: () => queryUserGroups
});
module.exports = __toCommonJS(MarkRights_exports);
//! src/MarkRights/options.json
var version = 2;
//! src/MarkRights/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("MarkRights/".concat(version));
//! src/MarkRights/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    qiuwen: (0, import_ext_gadget2.localize)({
      en: "Webmaster",
      "zh-hans": "站长",
      "zh-hant": "站長"
    }),
    steward: (0, import_ext_gadget2.localize)({
      en: "Steward",
      "zh-hans": "裁决委员",
      "zh-hant": "裁決委員"
    }),
    checkuser: (0, import_ext_gadget2.localize)({
      en: "CheckUser",
      "zh-hans": "用户查核",
      "zh-hant": "用戶查核"
    }),
    suppress: (0, import_ext_gadget2.localize)({
      en: "Oversighter",
      "zh-hans": "监督员",
      "zh-hant": "監督員"
    }),
    sysop: (0, import_ext_gadget2.localize)({
      en: "SysOp",
      "zh-hans": "管理员",
      "zh-hant": "管理員"
    }),
    "interface-admin": (0, import_ext_gadget2.localize)({
      en: "Interface Administrator",
      "zh-hans": "界面管理员",
      "zh-hant": "介面管理員"
    }),
    templateeditor: (0, import_ext_gadget2.localize)({
      en: "Template Editor",
      "zh-hans": "模板编辑员",
      "zh-hant": "模板編輯員"
    }),
    transwiki: (0, import_ext_gadget2.localize)({
      en: "Importer",
      "zh-hans": "导入者",
      "zh-hant": "匯入者"
    }),
    patroller: (0, import_ext_gadget2.localize)({
      en: "Patroller",
      "zh-hans": "巡查员",
      "zh-hant": "巡查員"
    }),
    autoreviewer: (0, import_ext_gadget2.localize)({
      en: "Exempted from page patrol",
      "zh-hans": "巡查豁免",
      "zh-hant": "巡查豁免"
    }),
    senioreditor: (0, import_ext_gadget2.localize)({
      en: "Senior Editor",
      "zh-hans": "资深编者",
      "zh-hant": "資深編者"
    }),
    eventsponsor: (0, import_ext_gadget2.localize)({
      en: "Event Sponsor",
      "zh-hans": "活动组织者",
      "zh-hant": "活動組織者"
    }),
    "massmessage-sender": (0, import_ext_gadget2.localize)({
      en: "MassMessage sender",
      "zh-hans": "大量消息发送者",
      "zh-hant": "大量訊息傳送者"
    }),
    confirmed: (0, import_ext_gadget2.localize)({
      en: "Confirmed user",
      "zh-hans": "确认用户",
      "zh-hant": "確認用戶"
    }),
    autoconfirmed: (0, import_ext_gadget2.localize)({
      en: "Auto-confirmed user",
      "zh-hans": "自动确认用户",
      "zh-hant": "自動確認用戶"
    }),
    bot: (0, import_ext_gadget2.localize)({
      en: "Bot",
      "zh-hans": "机器人",
      "zh-hant": "機械人"
    }),
    flood: (0, import_ext_gadget2.localize)({
      en: "Flooder",
      "zh-hans": "机器用户",
      "zh-hant": "機械用戶"
    }),
    "rnrsverify-exempt": (0, import_ext_gadget2.localize)({
      en: "Exempted from real-name verification",
      "zh-hans": "实名制验证豁免",
      "zh-hant": "實名制驗證豁免"
    }),
    "ipblock-exempt": (0, import_ext_gadget2.localize)({
      en: "Exempted from IP blocks",
      "zh-hans": "IP封禁豁免",
      "zh-hant": "IP封鎖豁免"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/MarkRights/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var userGroupMap = /* @__PURE__ */ new Map();
var globalUserGroupMap = /* @__PURE__ */ new Map();
var getUsername = (url) => {
  if (!url) {
    return "";
  }
  const username = mw.util.getParamValue("title", url);
  const decode = (string, replace) => {
    return decodeURIComponent((() => {
      try {
        return decodeURIComponent(replace(string));
      } catch {
        return replace(string).replace(/%(?!\d+)/g, "%25");
      }
    })());
  };
  if (username) {
    return decode(username, (string) => {
      return string.replace("User:", "").replace(/_/g, " ");
    });
  }
  const usernameMatch = url.match(/\/wiki\/User:(.+?)$/);
  if (usernameMatch !== null && usernameMatch !== void 0 && usernameMatch[1]) {
    return decode(usernameMatch[1], (string) => {
      return string.replace(/_/g, " ");
    });
  }
  return "";
};
var queryUserGroups = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (ususers) {
    const params = {
      ususers,
      action: "query",
      format: "json",
      formatversion: "2",
      list: "users",
      usprop: "groups",
      smaxage: 600,
      maxage: 600
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryUserGroups2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var queryGlobalUserGroups = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (user) {
    const params = {
      action: "query",
      format: "json",
      formatversion: "2",
      meta: "globaluserinfo",
      guiuser: user,
      guiprop: "groups",
      smaxage: 600,
      maxage: 600
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryGlobalUserGroups2(_x2) {
    return _ref2.apply(this, arguments);
  };
}();
var done = ($userLinks) => {
  $userLinks.each((_index, element) => {
    var _$element$attr, _userGroupMap$get, _globalUserGroupMap$g;
    const $element = $(element);
    if ($element.parents("li").find(".gadgets-markrights").length) {
      return;
    }
    const username = getUsername((_$element$attr = $element.attr("href")) !== null && _$element$attr !== void 0 ? _$element$attr : "");
    if (!username) {
      return;
    }
    const groups = (_userGroupMap$get = userGroupMap.get(username)) !== null && _userGroupMap$get !== void 0 ? _userGroupMap$get : [];
    const globalGroups = (_globalUserGroupMap$g = globalUserGroupMap.get(username)) !== null && _globalUserGroupMap$g !== void 0 ? _globalUserGroupMap$g : [];
    if (!groups) {
      return;
    }
    const $sups = $("<span>").addClass("gadgets-markrights");
    var _iterator2 = _createForOfIteratorHelper((0, import_ext_gadget3.uniqueArray)([...groups, ...globalGroups])), _step2;
    try {
      for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
        const group = _step2.value;
        const className = "gadgets-markrights__".concat(group);
        if ($sups.find("sup").hasClass(className)) {
          return;
        }
        $sups.append(
          // The following classes are used here:
          // * gadget-markrights__qiuwen
          // * gadget-markrights__steward
          // * gadget-markrights__checkuser
          // * gadget-markrights__suppress
          // * gadget-markrights__sysop
          // * gadget-markrights__interface-admin
          // * gadget-markrights__templateeditor
          // * gadget-markrights__transwiki
          // * gadget-markrights__patroller
          // * gadget-markrights__autoreviewer
          // * gadget-markrights__senioreditor
          // * gadget-markrights__eventsponsor
          // * gadget-markrights__massmessage-sender
          // * gadget-markrights__confirmed
          // * gadget-markrights__autoconfirmed
          // * gadget-markrights__bot
          // * gadget-markrights__flood
          // * gadget-markrights__ipblock-exempt
          // * gadget-markrights__rnrsverify-exempt
          $("<sup>").addClass(className).attr({
            alt: getMessage(group),
            title: getMessage(group)
          })
        );
      }
    } catch (err) {
      _iterator2.e(err);
    } finally {
      _iterator2.f();
    }
    $element.after($sups);
  });
};
var markUserRights = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* ($content) {
    const $userLinks = $content.find("a.mw-userlink:not(.mw-anonuserlink)");
    let users = [];
    const queue = [];
    $userLinks.each((_index, {
      textContent
    }) => {
      const userLinkText = textContent === null || textContent === void 0 ? void 0 : textContent.toString();
      if (userLinkText) {
        users[users.length] = userLinkText;
      }
      users = (0, import_ext_gadget3.uniqueArray)(users);
      if (users.length === 25) {
        queue[queue.length] = users;
        users = [];
      }
    });
    if (users.length > 0) {
      queue[queue.length] = users;
    }
    for (var _i = 0, _queue = queue; _i < _queue.length; _i++) {
      const ususers = _queue[_i];
      try {
        const queryUserResponse = yield queryUserGroups(ususers);
        const {
          users: queryUsers
        } = queryUserResponse["query"];
        var _iterator3 = _createForOfIteratorHelper(queryUsers), _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
            const user = _step3.value;
            if (!user || !user.groups) {
              continue;
            }
            userGroupMap.set(user.name, user.groups.filter((element) => {
              return element !== "*";
            }));
          }
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        var _iterator4 = _createForOfIteratorHelper(ususers), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            const user = _step4.value;
            const queryGlobalUserInfoResponse = yield queryGlobalUserGroups(user);
            if (queryGlobalUserInfoResponse["query"] && queryGlobalUserInfoResponse["query"].globaluserinfo) {
              const {
                groups: globalgroups
              } = queryGlobalUserInfoResponse["query"].globaluserinfo;
              globalUserGroupMap.set(user, globalgroups);
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        done($userLinks);
      } catch {
      }
    }
  });
  return function markUserRights2(_x3) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/MarkRights/MarkRights.ts
mw.hook("wikipage.content").add(function markRights($content) {
  if ($content.attr("id") === "mw-content-text" || $content.hasClass("mw-changeslist")) {
    void markUserRights($content);
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01hcmtSaWdodHMvTWFya1JpZ2h0cy50cyIsICJzcmMvTWFya1JpZ2h0cy9vcHRpb25zLmpzb24iLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy9hcGkudHMiLCAic3JjL01hcmtSaWdodHMvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9NYXJrUmlnaHRzL21vZHVsZXMvY29yZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyoqXG4gKiBAZGVzY3JpcHRpb24g5Zyo5pyA6L+R5L+u5pS544CB55uR6KeG5YiX6KGo44CB5p2h55uu5Y6G5Y+y6K6w5b2V562J5L2N572u5Lul54m55q6K5qC85byP5pi+56S65pyJ54m55q6K5p2D6ZmQ55qE55So5oi3XG4gKi9cbmltcG9ydCB7bWFya1VzZXJSaWdodHN9IGZyb20gJy4vbW9kdWxlcy9jb3JlJztcblxubXcuaG9vaygnd2lraXBhZ2UuY29udGVudCcpLmFkZChmdW5jdGlvbiBtYXJrUmlnaHRzKCRjb250ZW50KTogdm9pZCB7XG5cdGlmICgkY29udGVudC5hdHRyKCdpZCcpID09PSAnbXctY29udGVudC10ZXh0JyB8fCAkY29udGVudC5oYXNDbGFzcygnbXctY2hhbmdlc2xpc3QnKSkge1xuXHRcdHZvaWQgbWFya1VzZXJSaWdodHMoJGNvbnRlbnQpO1xuXHR9XG59KTtcblxuZXhwb3J0IHtxdWVyeUdsb2JhbFVzZXJHcm91cHMsIHF1ZXJ5VXNlckdyb3Vwc30gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuIiwgIntcblx0XCJ2ZXJzaW9uXCI6IDIuMFxufVxuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7aW5pdE13QXBpfSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCBhcGk6IG13LkFwaSA9IGluaXRNd0FwaShgTWFya1JpZ2h0cy8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRxaXV3ZW46IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnV2VibWFzdGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ermemVvycsXG5cdFx0XHQnemgtaGFudCc6ICfnq5nplbcnLFxuXHRcdH0pLFxuXHRcdHN0ZXdhcmQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU3Rld2FyZCcsXG5cdFx0XHQnemgtaGFucyc6ICfoo4HlhrPlp5TlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KOB5rG65aeU5ZOhJyxcblx0XHR9KSxcblx0XHRjaGVja3VzZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQ2hlY2tVc2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eUqOaIt+afpeaguCcsXG5cdFx0XHQnemgtaGFudCc6ICfnlKjmiLbmn6XmoLgnLFxuXHRcdH0pLFxuXHRcdHN1cHByZXNzOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ092ZXJzaWdodGVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ebkeedo+WRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnm6PnnaPlk6EnLFxuXHRcdH0pLFxuXHRcdHN5c29wOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1N5c09wJyxcblx0XHRcdCd6aC1oYW5zJzogJ+euoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdCdpbnRlcmZhY2UtYWRtaW4nOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0ludGVyZmFjZSBBZG1pbmlzdHJhdG9yJyxcblx0XHRcdCd6aC1oYW5zJzogJ+eVjOmdoueuoeeQhuWRmCcsXG5cdFx0XHQnemgtaGFudCc6ICfku4vpnaLnrqHnkIblk6EnLFxuXHRcdH0pLFxuXHRcdHRlbXBsYXRlZWRpdG9yOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RlbXBsYXRlIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmqKHmnb/nvJbovpHlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5qih5p2/57eo6Lyv5ZOhJyxcblx0XHR9KSxcblx0XHR0cmFuc3dpa2k6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnSW1wb3J0ZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5a+85YWl6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+WMr+WFpeiAhScsXG5cdFx0fSksXG5cdFx0cGF0cm9sbGVyOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1BhdHJvbGxlcicsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XlkZgnLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l5ZOhJyxcblx0XHR9KSxcblx0XHRhdXRvcmV2aWV3ZXI6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXhlbXB0ZWQgZnJvbSBwYWdlIHBhdHJvbCcsXG5cdFx0XHQnemgtaGFucyc6ICflt6Hmn6XosYHlhY0nLFxuXHRcdFx0J3poLWhhbnQnOiAn5beh5p+l6LGB5YWNJyxcblx0XHR9KSxcblx0XHRzZW5pb3JlZGl0b3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnU2VuaW9yIEVkaXRvcicsXG5cdFx0XHQnemgtaGFucyc6ICfotYTmt7HnvJbogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn6LOH5rex57eo6ICFJyxcblx0XHR9KSxcblx0XHRldmVudHNwb25zb3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnRXZlbnQgU3BvbnNvcicsXG5cdFx0XHQnemgtaGFucyc6ICfmtLvliqjnu4Tnu4fogIUnLFxuXHRcdFx0J3poLWhhbnQnOiAn5rS75YuV57WE57mU6ICFJyxcblx0XHR9KSxcblx0XHQnbWFzc21lc3NhZ2Utc2VuZGVyJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdNYXNzTWVzc2FnZSBzZW5kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5aSn6YeP5raI5oGv5Y+R6YCB6ICFJyxcblx0XHRcdCd6aC1oYW50JzogJ+Wkp+mHj+ioiuaBr+WCs+mAgeiAhScsXG5cdFx0fSksXG5cdFx0Y29uZmlybWVkOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0NvbmZpcm1lZCB1c2VyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ehruiupOeUqOaItycsXG5cdFx0XHQnemgtaGFudCc6ICfnorroqo3nlKjmiLYnLFxuXHRcdH0pLFxuXHRcdGF1dG9jb25maXJtZWQ6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXV0by1jb25maXJtZWQgdXNlcicsXG5cdFx0XHQnemgtaGFucyc6ICfoh6rliqjnoa7orqTnlKjmiLcnLFxuXHRcdFx0J3poLWhhbnQnOiAn6Ieq5YuV56K66KqN55So5oi2Jyxcblx0XHR9KSxcblx0XHRib3Q6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQm90Jyxcblx0XHRcdCd6aC1oYW5zJzogJ+acuuWZqOS6uicsXG5cdFx0XHQnemgtaGFudCc6ICfmqZ/morDkuronLFxuXHRcdH0pLFxuXHRcdGZsb29kOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0Zsb29kZXInLFxuXHRcdFx0J3poLWhhbnMnOiAn5py65Zmo55So5oi3Jyxcblx0XHRcdCd6aC1oYW50JzogJ+apn+aisOeUqOaIticsXG5cdFx0fSksXG5cdFx0J3JucnN2ZXJpZnktZXhlbXB0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIHJlYWwtbmFtZSB2ZXJpZmljYXRpb24nLFxuXHRcdFx0J3poLWhhbnMnOiAn5a6e5ZCN5Yi26aqM6K+B6LGB5YWNJyxcblx0XHRcdCd6aC1oYW50JzogJ+WvpuWQjeWItumpl+itieixgeWFjScsXG5cdFx0fSksXG5cdFx0J2lwYmxvY2stZXhlbXB0JzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdFeGVtcHRlZCBmcm9tIElQIGJsb2NrcycsXG5cdFx0XHQnemgtaGFucyc6ICdJUOWwgeemgeixgeWFjScsXG5cdFx0XHQnemgtaGFudCc6ICdJUOWwgemOluixgeWFjScsXG5cdFx0fSksXG5cdH07XG59O1xuXG5jb25zdCBpMThuTWVzc2FnZXMgPSBnZXRJMThuTWVzc2FnZXMoKTtcblxuY29uc3QgZ2V0TWVzc2FnZTogR2V0TWVzc2FnZXM8dHlwZW9mIGkxOG5NZXNzYWdlcz4gPSAoa2V5KSA9PiB7XG5cdHJldHVybiBpMThuTWVzc2FnZXNba2V5XSB8fCBrZXk7XG59O1xuXG5leHBvcnQge2dldE1lc3NhZ2V9O1xuIiwgImltcG9ydCB0eXBlIHtVc2VyUmlnaHRzfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge3VuaXF1ZUFycmF5fSBmcm9tICdleHQuZ2FkZ2V0LlV0aWwnO1xuXG5jb25zdCB1c2VyR3JvdXBNYXAgPSBuZXcgTWFwKCk7XG5jb25zdCBnbG9iYWxVc2VyR3JvdXBNYXAgPSBuZXcgTWFwKCk7XG5cbmNvbnN0IGdldFVzZXJuYW1lID0gKHVybDogc3RyaW5nKTogc3RyaW5nID0+IHtcblx0aWYgKCF1cmwpIHtcblx0XHRyZXR1cm4gJyc7XG5cdH1cblxuXHRjb25zdCB1c2VybmFtZTogc3RyaW5nIHwgbnVsbCA9IG13LnV0aWwuZ2V0UGFyYW1WYWx1ZSgndGl0bGUnLCB1cmwpO1xuXG5cdGNvbnN0IGRlY29kZSA9IChzdHJpbmc6IHN0cmluZywgcmVwbGFjZTogKF9zdHJpbmc6IHN0cmluZykgPT4gc3RyaW5nKTogc3RyaW5nID0+IHtcblx0XHRyZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KFxuXHRcdFx0KCgpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdHJldHVybiBkZWNvZGVVUklDb21wb25lbnQocmVwbGFjZShzdHJpbmcpKTtcblx0XHRcdFx0fSBjYXRjaCB7XG5cdFx0XHRcdFx0cmV0dXJuIHJlcGxhY2Uoc3RyaW5nKS5yZXBsYWNlKC8lKD8hXFxkKykvZywgJyUyNScpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KSgpXG5cdFx0KTtcblx0fTtcblxuXHRpZiAodXNlcm5hbWUpIHtcblx0XHRyZXR1cm4gZGVjb2RlKHVzZXJuYW1lLCAoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKCdVc2VyOicsICcnKS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0fSk7XG5cdH1cblx0Y29uc3QgdXNlcm5hbWVNYXRjaDogUmVnRXhwTWF0Y2hBcnJheSB8IG51bGwgPSB1cmwubWF0Y2goL1xcL3dpa2lcXC9Vc2VyOiguKz8pJC8pO1xuXHRpZiAodXNlcm5hbWVNYXRjaD8uWzFdKSB7XG5cdFx0cmV0dXJuIGRlY29kZSh1c2VybmFtZU1hdGNoWzFdLCAoc3RyaW5nOiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRcdFx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuICcnO1xufTtcblxuY29uc3QgcXVlcnlVc2VyR3JvdXBzID0gYXN5bmMgKHVzdXNlcnM6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG5cdGNvbnN0IHBhcmFtczogQXBpUXVlcnlVc2Vyc1BhcmFtcyA9IHtcblx0XHR1c3VzZXJzLFxuXHRcdGFjdGlvbjogJ3F1ZXJ5Jyxcblx0XHRmb3JtYXQ6ICdqc29uJyxcblx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0bGlzdDogJ3VzZXJzJyxcblx0XHR1c3Byb3A6ICdncm91cHMnLFxuXHRcdHNtYXhhZ2U6IDYwMCxcblx0XHRtYXhhZ2U6IDYwMCxcblx0fTtcblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkuZ2V0KHBhcmFtcyk7XG5cblx0cmV0dXJuIHJlc3BvbnNlO1xufTtcblxuY29uc3QgcXVlcnlHbG9iYWxVc2VyR3JvdXBzID0gYXN5bmMgKHVzZXI6IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXMgPSB7XG5cdFx0YWN0aW9uOiAncXVlcnknLFxuXHRcdGZvcm1hdDogJ2pzb24nLFxuXHRcdGZvcm1hdHZlcnNpb246ICcyJyxcblx0XHRtZXRhOiAnZ2xvYmFsdXNlcmluZm8nLFxuXHRcdGd1aXVzZXI6IHVzZXIsXG5cdFx0Z3VpcHJvcDogJ2dyb3VwcycsXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBkb25lID0gKCR1c2VyTGlua3M6IEpRdWVyeTxIVE1MRWxlbWVudD4pOiB2b2lkID0+IHtcblx0JHVzZXJMaW5rcy5lYWNoKChfaW5kZXg6IG51bWJlciwgZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkID0+IHtcblx0XHRjb25zdCAkZWxlbWVudDogSlF1ZXJ5ID0gJChlbGVtZW50KTtcblx0XHRpZiAoJGVsZW1lbnQucGFyZW50cygnbGknKS5maW5kKCcuZ2FkZ2V0cy1tYXJrcmlnaHRzJykubGVuZ3RoKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0IHVzZXJuYW1lOiBzdHJpbmcgPSBnZXRVc2VybmFtZSgkZWxlbWVudC5hdHRyKCdocmVmJykgPz8gJycpO1xuXHRcdGlmICghdXNlcm5hbWUpIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0Y29uc3QgZ3JvdXBzID0gKHVzZXJHcm91cE1hcC5nZXQodXNlcm5hbWUpIGFzIHN0cmluZ1tdIHwgdW5kZWZpbmVkKSA/PyBbXTtcblx0XHRjb25zdCBnbG9iYWxHcm91cHMgPSAoZ2xvYmFsVXNlckdyb3VwTWFwLmdldCh1c2VybmFtZSkgYXMgc3RyaW5nW10gfCB1bmRlZmluZWQpID8/IFtdO1xuXHRcdGlmICghZ3JvdXBzKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdGNvbnN0ICRzdXBzOiBKUXVlcnkgPSAkKCc8c3Bhbj4nKS5hZGRDbGFzcygnZ2FkZ2V0cy1tYXJrcmlnaHRzJyk7XG5cdFx0Zm9yIChjb25zdCBncm91cCBvZiB1bmlxdWVBcnJheShbLi4uZ3JvdXBzLCAuLi5nbG9iYWxHcm91cHNdKSkge1xuXHRcdFx0Y29uc3QgY2xhc3NOYW1lOiBzdHJpbmcgPSBgZ2FkZ2V0cy1tYXJrcmlnaHRzX18ke2dyb3VwfWA7XG5cdFx0XHRpZiAoJHN1cHMuZmluZCgnc3VwJykuaGFzQ2xhc3MoY2xhc3NOYW1lKSkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQkc3Vwcy5hcHBlbmQoXG5cdFx0XHRcdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19xaXV3ZW5cblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fc3Rld2FyZFxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19jaGVja3VzZXJcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fc3VwcHJlc3Ncblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fc3lzb3Bcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19faW50ZXJmYWNlLWFkbWluXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX3RlbXBsYXRlZWRpdG9yXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX3RyYW5zd2lraVxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19wYXRyb2xsZXJcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fYXV0b3Jldmlld2VyXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX3NlbmlvcmVkaXRvclxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19ldmVudHNwb25zb3Jcblx0XHRcdFx0Ly8gKiBnYWRnZXQtbWFya3JpZ2h0c19fbWFzc21lc3NhZ2Utc2VuZGVyXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX2NvbmZpcm1lZFxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19hdXRvY29uZmlybWVkXG5cdFx0XHRcdC8vICogZ2FkZ2V0LW1hcmtyaWdodHNfX2JvdFxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19mbG9vZFxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19pcGJsb2NrLWV4ZW1wdFxuXHRcdFx0XHQvLyAqIGdhZGdldC1tYXJrcmlnaHRzX19ybnJzdmVyaWZ5LWV4ZW1wdFxuXHRcdFx0XHQkKCc8c3VwPicpXG5cdFx0XHRcdFx0LmFkZENsYXNzKGNsYXNzTmFtZSlcblx0XHRcdFx0XHQuYXR0cih7XG5cdFx0XHRcdFx0XHRhbHQ6IGdldE1lc3NhZ2UoZ3JvdXAgYXMgVXNlclJpZ2h0cyksXG5cdFx0XHRcdFx0XHR0aXRsZTogZ2V0TWVzc2FnZShncm91cCBhcyBVc2VyUmlnaHRzKSxcblx0XHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9XG5cdFx0JGVsZW1lbnQuYWZ0ZXIoJHN1cHMpO1xuXHR9KTtcbn07XG5cbmNvbnN0IG1hcmtVc2VyUmlnaHRzID0gYXN5bmMgKCRjb250ZW50OiBKUXVlcnkpOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3QgJHVzZXJMaW5rczogSlF1ZXJ5ID0gJGNvbnRlbnQuZmluZCgnYS5tdy11c2VybGluazpub3QoLm13LWFub251c2VybGluayknKTtcblx0bGV0IHVzZXJzOiBzdHJpbmdbXSA9IFtdO1xuXHRjb25zdCBxdWV1ZTogQXJyYXk8dHlwZW9mIHVzZXJzPiA9IFtdO1xuXG5cdCR1c2VyTGlua3MuZWFjaCgoX2luZGV4OiBudW1iZXIsIHt0ZXh0Q29udGVudH06IHt0ZXh0Q29udGVudDogc3RyaW5nIHwgbnVsbH0pOiB2b2lkID0+IHtcblx0XHRjb25zdCB1c2VyTGlua1RleHQ6IHN0cmluZyB8IHVuZGVmaW5lZCA9IHRleHRDb250ZW50Py50b1N0cmluZygpO1xuXHRcdGlmICh1c2VyTGlua1RleHQpIHtcblx0XHRcdHVzZXJzW3VzZXJzLmxlbmd0aF0gPSB1c2VyTGlua1RleHQ7IC8vIFJlcGxhY2UgYFtdLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHRcdH1cblxuXHRcdC8vIOeUqOaIt+WQjeWIl+ihqOWOu+mHjVxuXHRcdHVzZXJzID0gdW5pcXVlQXJyYXkodXNlcnMpOyAvLyBSZXBsYWNlIGBbLi4ubmV3IFNldCgpXWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXG5cdFx0aWYgKHVzZXJzLmxlbmd0aCA9PT0gMjUpIHtcblx0XHRcdHF1ZXVlW3F1ZXVlLmxlbmd0aF0gPSB1c2VyczsgLy8gUmVwbGFjZSBgW10ucHVzaCgpYCB0byBhdm9pZCBwb2x5ZmlsbGluZyBjb3JlLWpzXG5cdFx0XHR1c2VycyA9IFtdO1xuXHRcdH1cblx0fSk7XG5cblx0aWYgKHVzZXJzLmxlbmd0aCA+IDApIHtcblx0XHRxdWV1ZVtxdWV1ZS5sZW5ndGhdID0gdXNlcnM7IC8vIFJlcGxhY2UgYFtdLnB1c2goKWAgdG8gYXZvaWQgcG9seWZpbGxpbmcgY29yZS1qc1xuXHR9XG5cblx0Zm9yIChjb25zdCB1c3VzZXJzIG9mIHF1ZXVlKSB7XG5cdFx0dHJ5IHtcblx0XHRcdGNvbnN0IHF1ZXJ5VXNlclJlc3BvbnNlID0gYXdhaXQgcXVlcnlVc2VyR3JvdXBzKHVzdXNlcnMpO1xuXHRcdFx0Y29uc3Qge3VzZXJzOiBxdWVyeVVzZXJzfSA9IHF1ZXJ5VXNlclJlc3BvbnNlWydxdWVyeSddIGFzIHtcblx0XHRcdFx0dXNlcnM6IHtncm91cHM6IHN0cmluZ1tdOyBuYW1lOiBzdHJpbmd9W107XG5cdFx0XHR9O1xuXG5cdFx0XHRmb3IgKGNvbnN0IHVzZXIgb2YgcXVlcnlVc2Vycykge1xuXHRcdFx0XHRpZiAoIXVzZXIgfHwgIXVzZXIuZ3JvdXBzKSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0dXNlckdyb3VwTWFwLnNldChcblx0XHRcdFx0XHR1c2VyLm5hbWUsXG5cdFx0XHRcdFx0dXNlci5ncm91cHMuZmlsdGVyKChlbGVtZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbWVudCAhPT0gJyonO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoY29uc3QgdXNlciBvZiB1c3VzZXJzKSB7XG5cdFx0XHRcdGNvbnN0IHF1ZXJ5R2xvYmFsVXNlckluZm9SZXNwb25zZSA9IGF3YWl0IHF1ZXJ5R2xvYmFsVXNlckdyb3Vwcyh1c2VyKTtcblx0XHRcdFx0aWYgKHF1ZXJ5R2xvYmFsVXNlckluZm9SZXNwb25zZVsncXVlcnknXSAmJiBxdWVyeUdsb2JhbFVzZXJJbmZvUmVzcG9uc2VbJ3F1ZXJ5J10uZ2xvYmFsdXNlcmluZm8pIHtcblx0XHRcdFx0XHRjb25zdCB7Z3JvdXBzOiBnbG9iYWxncm91cHN9OiB7Z3JvdXBzOiBzdHJpbmdbXX0gPSBxdWVyeUdsb2JhbFVzZXJJbmZvUmVzcG9uc2VbJ3F1ZXJ5J11cblx0XHRcdFx0XHRcdC5nbG9iYWx1c2VyaW5mbyBhcyB7Z3JvdXBzOiBzdHJpbmdbXX07XG5cdFx0XHRcdFx0Z2xvYmFsVXNlckdyb3VwTWFwLnNldCh1c2VyLCBnbG9iYWxncm91cHMpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGRvbmUoJHVzZXJMaW5rcyk7XG5cdFx0fSBjYXRjaCB7fVxuXHR9XG59O1xuXG5leHBvcnQge3F1ZXJ5VXNlckdyb3VwcywgcXVlcnlHbG9iYWxVc2VyR3JvdXBzLCBtYXJrVXNlclJpZ2h0c307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFBLENBQUE7QUFBQUMsU0FBQUQsb0JBQUE7RUFBQUUsdUJBQUFBLE1BQUFBO0VBQUFDLGlCQUFBQSxNQUFBQTtBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQU4sa0JBQUE7O0FDQ0MsSUFBQU8sVUFBVzs7QUNB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aUNBQW1Cb0YsSUFBSXRELE1BQU02RCxZQUFZO1lBQzFDO1VBQ0Q7UUFBQSxTQUFBekIsS0FBQTtBQUFBcUIscUJBQUFwQixFQUFBRCxHQUFBO1FBQUEsVUFBQTtBQUFBcUIscUJBQUFuQixFQUFBO1FBQUE7QUFFQWpDLGFBQUtDLFVBQVU7TUFDaEIsUUFBUTtNQUFDO0lBQ1Y7RUFDRCxDQUFBO0FBQUEsU0FBQSxTQXZETWtDLGdCQUFBc0IsS0FBQTtBQUFBLFdBQUFyQixNQUFBNUMsTUFBQSxNQUFBQyxTQUFBO0VBQUE7QUFBQSxFQUFBOztBSjFITnhCLEdBQUd5RixLQUFLLGtCQUFrQixFQUFFQyxJQUFJLFNBQVNDLFdBQVd2QixVQUFnQjtBQUNuRSxNQUFJQSxTQUFTeEIsS0FBSyxJQUFJLE1BQU0scUJBQXFCd0IsU0FBU1YsU0FBUyxnQkFBZ0IsR0FBRztBQUNyRixTQUFLUSxlQUFlRSxRQUFRO0VBQzdCO0FBQ0QsQ0FBQzsiLAogICJuYW1lcyI6IFsiTWFya1JpZ2h0c19leHBvcnRzIiwgIl9fZXhwb3J0IiwgInF1ZXJ5R2xvYmFsVXNlckdyb3VwcyIsICJxdWVyeVVzZXJHcm91cHMiLCAibW9kdWxlIiwgImV4cG9ydHMiLCAiX190b0NvbW1vbkpTIiwgInZlcnNpb24iLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAicmVxdWlyZSIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgInFpdXdlbiIsICJsb2NhbGl6ZSIsICJlbiIsICJzdGV3YXJkIiwgImNoZWNrdXNlciIsICJzdXBwcmVzcyIsICJzeXNvcCIsICJ0ZW1wbGF0ZWVkaXRvciIsICJ0cmFuc3dpa2kiLCAicGF0cm9sbGVyIiwgImF1dG9yZXZpZXdlciIsICJzZW5pb3JlZGl0b3IiLCAiZXZlbnRzcG9uc29yIiwgImNvbmZpcm1lZCIsICJhdXRvY29uZmlybWVkIiwgImJvdCIsICJmbG9vZCIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgInVzZXJHcm91cE1hcCIsICJNYXAiLCAiZ2xvYmFsVXNlckdyb3VwTWFwIiwgImdldFVzZXJuYW1lIiwgInVybCIsICJ1c2VybmFtZSIsICJtdyIsICJ1dGlsIiwgImdldFBhcmFtVmFsdWUiLCAiZGVjb2RlIiwgInN0cmluZyIsICJyZXBsYWNlIiwgImRlY29kZVVSSUNvbXBvbmVudCIsICJ1c2VybmFtZU1hdGNoIiwgIm1hdGNoIiwgIl9yZWYiLCAiX2FzeW5jVG9HZW5lcmF0b3IiLCAidXN1c2VycyIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgImxpc3QiLCAidXNwcm9wIiwgInNtYXhhZ2UiLCAibWF4YWdlIiwgInJlc3BvbnNlIiwgImdldCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiX3JlZjIiLCAidXNlciIsICJtZXRhIiwgImd1aXVzZXIiLCAiZ3VpcHJvcCIsICJfeDIiLCAiZG9uZSIsICIkdXNlckxpbmtzIiwgImVhY2giLCAiX2luZGV4IiwgImVsZW1lbnQiLCAiXyRlbGVtZW50JGF0dHIiLCAiX3VzZXJHcm91cE1hcCRnZXQiLCAiX2dsb2JhbFVzZXJHcm91cE1hcCRnIiwgIiRlbGVtZW50IiwgIiQiLCAicGFyZW50cyIsICJmaW5kIiwgImxlbmd0aCIsICJhdHRyIiwgImdyb3VwcyIsICJnbG9iYWxHcm91cHMiLCAiJHN1cHMiLCAiYWRkQ2xhc3MiLCAiX2l0ZXJhdG9yMiIsICJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsICJ1bmlxdWVBcnJheSIsICJfc3RlcDIiLCAicyIsICJuIiwgImdyb3VwIiwgInZhbHVlIiwgImNsYXNzTmFtZSIsICJoYXNDbGFzcyIsICJhcHBlbmQiLCAiYWx0IiwgInRpdGxlIiwgImVyciIsICJlIiwgImYiLCAiYWZ0ZXIiLCAibWFya1VzZXJSaWdodHMiLCAiX3JlZjMiLCAiJGNvbnRlbnQiLCAidXNlcnMiLCAicXVldWUiLCAidGV4dENvbnRlbnQiLCAidXNlckxpbmtUZXh0IiwgInRvU3RyaW5nIiwgIl9pIiwgIl9xdWV1ZSIsICJxdWVyeVVzZXJSZXNwb25zZSIsICJxdWVyeVVzZXJzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInNldCIsICJuYW1lIiwgImZpbHRlciIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICJxdWVyeUdsb2JhbFVzZXJJbmZvUmVzcG9uc2UiLCAiZ2xvYmFsdXNlcmluZm8iLCAiZ2xvYmFsZ3JvdXBzIiwgIl94MyIsICJob29rIiwgImFkZCIsICJtYXJrUmlnaHRzIl0KfQo=
