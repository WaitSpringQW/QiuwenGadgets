/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-Wordcount.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/WordCount}
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

// dist/WordCount/WordCount.js
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
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
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
//! src/WordCount/modules/wordCount.tsx
var import_ext_gadget3 = __toESM(require("ext.gadget.React"), 1);
//! src/WordCount/modules/util/countLength.ts
var countLength = (text) => {
  return text.length;
};
//! src/WordCount/modules/util/countByte.ts
var countByte = (text) => {
  return countLength(text.replace(/[\u0000-\u007F]/g, ".").replace(/[\u0080-\u07FF\uD800-\uDFFF]/g, "..").replace(/[\u0800-\uD7FF\uE000-\uFFFF]/g, "..."));
};
//! src/WordCount/modules/util/countCJK.ts
var countCJK = (text) => {
  return countLength(text.replace(/\./g, "").replace(/[\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u3005\u3007\u3021-\u3029\u3038-\u303B\u3400-\u4DB5\u4E00-\u9FCC\uF900-\uFA6D\uFA70-\uFAD9]|[\uD840-\uD868][\uDC00-\uDFFF]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|[\uD86A-\uD86C][\uDC00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D]|\uD87E[\uDC00-\uDE1D]/g, ".").replace(/[^.]/g, ""));
};
//! src/WordCount/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "character(s)": (0, import_ext_gadget.localize)({
      en: " character(s)",
      "zh-hans": "字符",
      "zh-hant": "字元"
    }),
    "(": (0, import_ext_gadget.localize)({
      en: " (",
      zh: "（"
    }),
    ")": (0, import_ext_gadget.localize)({
      en: ") ",
      zh: "）"
    }),
    CJK: (0, import_ext_gadget.localize)({
      en: " CJK",
      "zh-hans": "个CJK字符",
      "zh-hant": "个CJK字元"
    }),
    "byte(s) in UTF-8 encoding": (0, import_ext_gadget.localize)({
      en: "byte(s) in UTF-8 encoding",
      "zh-hans": "字节（UTF-8编码）",
      "zh-hant": "位元組（UTF-8編碼）"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/WordCount/modules/getCount.ts
var getCountByTextLength = (text) => {
  return "".concat(countLength(text)).concat(getMessage("character(s)"));
};
var getCJKCountByTextLength = (text) => {
  return "".concat(getMessage("(")).concat(countCJK(text)).concat(getMessage("CJK")).concat(getMessage(")"));
};
var getUTF8CountByTextLength = (text) => {
  return "".concat(countByte(text)).concat(getMessage("byte(s) in UTF-8 encoding"));
};
//! src/WordCount/components/WordCount.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/WordCount/components/WordCount.module.less
var tip = "WordCount-module__tip_HBDn5a";
//! src/WordCount/components/WordCount.tsx
var WordCount = ({
  text
}) => /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
  className: [tip, "noprint", "ui-state-highlight", "ui-corner-all"],
  id: "gadget-word_count-tip"
}, getCountByTextLength(text), getCJKCountByTextLength(text), /* @__PURE__ */ import_ext_gadget2.default.createElement("br", null), getUTF8CountByTextLength(text));
var WordCount_default = WordCount;
//! src/WordCount/modules/wordCount.tsx
var wordCount = ($body) => {
  var _window$getSelection;
  $body.find(".".concat(tip)).remove();
  const text = (_window$getSelection = window.getSelection()) === null || _window$getSelection === void 0 ? void 0 : _window$getSelection.toString();
  if (!text) {
    return;
  }
  const $element = $(/* @__PURE__ */ import_ext_gadget3.default.createElement(WordCount_default, {
    text
  }));
  $element.appendTo($body);
  setTimeout(() => {
    $element.fadeOut("slow", () => {
      $element.remove();
    });
  }, 5 * 1e3);
};
//! src/WordCount/modules/addListener.ts
var addListener = ($body) => {
  if ("ontouchstart" in document) {
    $body.on("touchstart touchend", {
      passive: true
    }, () => {
      wordCount($body);
    });
  } else {
    $body.on("mouseup keyup", () => {
      wordCount($body);
    });
  }
};
//! src/WordCount/WordCount.ts
var import_ext_gadget4 = require("ext.gadget.Util");
void (0, import_ext_gadget4.getBody)().then(addListener);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1dvcmRDb3VudC9tb2R1bGVzL3dvcmRDb3VudC50c3giLCAic3JjL1dvcmRDb3VudC9tb2R1bGVzL3V0aWwvY291bnRMZW5ndGgudHMiLCAic3JjL1dvcmRDb3VudC9tb2R1bGVzL3V0aWwvY291bnRCeXRlLnRzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy91dGlsL2NvdW50Q0pLLnRzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy9nZXRDb3VudC50cyIsICJzcmMvV29yZENvdW50L2NvbXBvbmVudHMvV29yZENvdW50LnRzeCIsICJzcmMvV29yZENvdW50L2NvbXBvbmVudHMvV29yZENvdW50Lm1vZHVsZS5sZXNzIiwgInNyYy9Xb3JkQ291bnQvbW9kdWxlcy9hZGRMaXN0ZW5lci50cyIsICJzcmMvV29yZENvdW50L1dvcmRDb3VudC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IFdvcmRDb3VudCBmcm9tICcuLi9jb21wb25lbnRzL1dvcmRDb3VudCc7XG5pbXBvcnQge3RpcH0gZnJvbSAnLi4vY29tcG9uZW50cy9Xb3JkQ291bnQubW9kdWxlLmxlc3MnO1xuXG5jb25zdCB3b3JkQ291bnQgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdCRib2R5LmZpbmQoYC4ke3RpcH1gKS5yZW1vdmUoKTtcblxuXHRjb25zdCB0ZXh0OiBzdHJpbmcgfCB1bmRlZmluZWQgPSB3aW5kb3cuZ2V0U2VsZWN0aW9uKCk/LnRvU3RyaW5nKCk7XG5cdGlmICghdGV4dCkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0ICRlbGVtZW50ID0gJCg8V29yZENvdW50IHRleHQ9e3RleHR9IC8+KTtcblxuXHQkZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cblx0c2V0VGltZW91dCgoKTogdm9pZCA9PiB7XG5cdFx0JGVsZW1lbnQuZmFkZU91dCgnc2xvdycsICgpOiB2b2lkID0+IHtcblx0XHRcdCRlbGVtZW50LnJlbW92ZSgpO1xuXHRcdH0pO1xuXHR9LCA1ICogMTAwMCk7XG59O1xuXG5leHBvcnQge3dvcmRDb3VudH07XG4iLCAiY29uc3QgY291bnRMZW5ndGggPSAodGV4dDogc3RyaW5nKTogbnVtYmVyID0+IHtcblx0cmV0dXJuIHRleHQubGVuZ3RoO1xufTtcblxuZXhwb3J0IHtjb3VudExlbmd0aH07XG4iLCAiaW1wb3J0IHtjb3VudExlbmd0aH0gZnJvbSAnLi9jb3VudExlbmd0aCc7XG5cbmNvbnN0IGNvdW50Qnl0ZSA9ICh0ZXh0OiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuXHRyZXR1cm4gY291bnRMZW5ndGgoXG5cdFx0dGV4dFxuXHRcdFx0LnJlcGxhY2UoL1tcXHUwMDAwLVxcdTAwN0ZdL2csICcuJylcblx0XHRcdC5yZXBsYWNlKC9bXFx1MDA4MC1cXHUwN0ZGXFx1RDgwMC1cXHVERkZGXS9nLCAnLi4nKVxuXHRcdFx0LnJlcGxhY2UoL1tcXHUwODAwLVxcdUQ3RkZcXHVFMDAwLVxcdUZGRkZdL2csICcuLi4nKVxuXHQpO1xufTtcblxuZXhwb3J0IHtjb3VudEJ5dGV9O1xuIiwgImltcG9ydCB7Y291bnRMZW5ndGh9IGZyb20gJy4vY291bnRMZW5ndGgnO1xuXG5jb25zdCBjb3VudENKSyA9ICh0ZXh0OiBzdHJpbmcpOiBudW1iZXIgPT4ge1xuXHRyZXR1cm4gY291bnRMZW5ndGgoXG5cdFx0dGV4dFxuXHRcdFx0LnJlcGxhY2UoL1xcLi9nLCAnJylcblx0XHRcdC5yZXBsYWNlKFxuXHRcdFx0XHQvW1xcdTJFODAtXFx1MkU5OVxcdTJFOUItXFx1MkVGM1xcdTJGMDAtXFx1MkZENVxcdTMwMDVcXHUzMDA3XFx1MzAyMS1cXHUzMDI5XFx1MzAzOC1cXHUzMDNCXFx1MzQwMC1cXHU0REI1XFx1NEUwMC1cXHU5RkNDXFx1RjkwMC1cXHVGQTZEXFx1RkE3MC1cXHVGQUQ5XXxbXFx1RDg0MC1cXHVEODY4XVtcXHVEQzAwLVxcdURGRkZdfFxcdUQ4NjlbXFx1REMwMC1cXHVERUQ2XFx1REYwMC1cXHVERkZGXXxbXFx1RDg2QS1cXHVEODZDXVtcXHVEQzAwLVxcdURGRkZdfFxcdUQ4NkRbXFx1REMwMC1cXHVERjM0XFx1REY0MC1cXHVERkZGXXxcXHVEODZFW1xcdURDMDAtXFx1REMxRF18XFx1RDg3RVtcXHVEQzAwLVxcdURFMURdL2csXG5cdFx0XHRcdCcuJ1xuXHRcdFx0KVxuXHRcdFx0LnJlcGxhY2UoL1teLl0vZywgJycpXG5cdCk7XG59O1xuXG5leHBvcnQge2NvdW50Q0pLfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0J2NoYXJhY3RlcihzKSc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnIGNoYXJhY3RlcihzKScsXG5cdFx0XHQnemgtaGFucyc6ICflrZfnrKYnLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2X5YWDJyxcblx0XHR9KSxcblx0XHQnKCc6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnICgnLFxuXHRcdFx0emg6ICfvvIgnLFxuXHRcdH0pLFxuXHRcdCcpJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICcpICcsXG5cdFx0XHR6aDogJ++8iScsXG5cdFx0fSksXG5cdFx0Q0pLOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJyBDSksnLFxuXHRcdFx0J3poLWhhbnMnOiAn5LiqQ0pL5a2X56ymJyxcblx0XHRcdCd6aC1oYW50JzogJ+S4qkNKS+Wtl+WFgycsXG5cdFx0fSksXG5cdFx0J2J5dGUocykgaW4gVVRGLTggZW5jb2RpbmcnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ2J5dGUocykgaW4gVVRGLTggZW5jb2RpbmcnLFxuXHRcdFx0J3poLWhhbnMnOiAn5a2X6IqC77yIVVRGLTjnvJbnoIHvvIknLFxuXHRcdFx0J3poLWhhbnQnOiAn5L2N5YWD57WE77yIVVRGLTjnt6jnorzvvIknLFxuXHRcdH0pLFxuXHR9O1xufTtcbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtjb3VudEJ5dGV9IGZyb20gJy4vdXRpbC9jb3VudEJ5dGUnO1xuaW1wb3J0IHtjb3VudENKS30gZnJvbSAnLi91dGlsL2NvdW50Q0pLJztcbmltcG9ydCB7Y291bnRMZW5ndGh9IGZyb20gJy4vdXRpbC9jb3VudExlbmd0aCc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IGdldENvdW50QnlUZXh0TGVuZ3RoID0gKHRleHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdHJldHVybiBgJHtjb3VudExlbmd0aCh0ZXh0KX0ke2dldE1lc3NhZ2UoJ2NoYXJhY3RlcihzKScpfWA7XG59O1xuXG5jb25zdCBnZXRDSktDb3VudEJ5VGV4dExlbmd0aCA9ICh0ZXh0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuXHRyZXR1cm4gYCR7Z2V0TWVzc2FnZSgnKCcpfSR7Y291bnRDSksodGV4dCl9JHtnZXRNZXNzYWdlKCdDSksnKX0ke2dldE1lc3NhZ2UoJyknKX1gO1xufTtcblxuY29uc3QgZ2V0VVRGOENvdW50QnlUZXh0TGVuZ3RoID0gKHRleHQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG5cdHJldHVybiBgJHtjb3VudEJ5dGUodGV4dCl9JHtnZXRNZXNzYWdlKCdieXRlKHMpIGluIFVURi04IGVuY29kaW5nJyl9YDtcbn07XG5cbmV4cG9ydCB7Z2V0Q291bnRCeVRleHRMZW5ndGgsIGdldENKS0NvdW50QnlUZXh0TGVuZ3RoLCBnZXRVVEY4Q291bnRCeVRleHRMZW5ndGh9O1xuIiwgImltcG9ydCB7Z2V0Q0pLQ291bnRCeVRleHRMZW5ndGgsIGdldENvdW50QnlUZXh0TGVuZ3RoLCBnZXRVVEY4Q291bnRCeVRleHRMZW5ndGh9IGZyb20gJy4uL21vZHVsZXMvZ2V0Q291bnQnO1xuaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHt0aXB9IGZyb20gJy4vV29yZENvdW50Lm1vZHVsZS5sZXNzJztcblxuaW50ZXJmYWNlIFByb3BzIHtcblx0dGV4dDogc3RyaW5nO1xufVxuXG5jb25zdCBXb3JkQ291bnQgPSAoe3RleHR9OiBQcm9wcykgPT4gKFxuXHQ8ZGl2IGNsYXNzTmFtZT17W3RpcCwgJ25vcHJpbnQnLCAndWktc3RhdGUtaGlnaGxpZ2h0JywgJ3VpLWNvcm5lci1hbGwnXX0gaWQ9XCJnYWRnZXQtd29yZF9jb3VudC10aXBcIj5cblx0XHR7Z2V0Q291bnRCeVRleHRMZW5ndGgodGV4dCl9XG5cdFx0e2dldENKS0NvdW50QnlUZXh0TGVuZ3RoKHRleHQpfVxuXHRcdDxiciAvPlxuXHRcdHtnZXRVVEY4Q291bnRCeVRleHRMZW5ndGgodGV4dCl9XG5cdDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgV29yZENvdW50O1xuIiwgImltcG9ydCBcImVzYnVpbGQtY3NzLW1vZHVsZXMtcGx1Z2luLW5zLWNzczpzcmMvV29yZENvdW50L2NvbXBvbmVudHMvV29yZENvdW50Lm1vZHVsZS5sZXNzXCI7XG5leHBvcnQgY29uc3QgdGlwID0gXCJXb3JkQ291bnQtbW9kdWxlX190aXBfSEJEbjVhXCI7XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgXCJ0aXBcIjogdGlwXG59O1xuICAgICAgIiwgImltcG9ydCB7d29yZENvdW50fSBmcm9tICcuL3dvcmRDb3VudCc7XG5cbmNvbnN0IGFkZExpc3RlbmVyID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHZvaWQgPT4ge1xuXHRpZiAoJ29udG91Y2hzdGFydCcgaW4gZG9jdW1lbnQpIHtcblx0XHQkYm9keS5vbigndG91Y2hzdGFydCB0b3VjaGVuZCcsIHtwYXNzaXZlOiB0cnVlfSwgKCk6IHZvaWQgPT4ge1xuXHRcdFx0d29yZENvdW50KCRib2R5KTtcblx0XHR9KTtcblx0fSBlbHNlIHtcblx0XHQkYm9keS5vbignbW91c2V1cCBrZXl1cCcsICgpOiB2b2lkID0+IHtcblx0XHRcdHdvcmRDb3VudCgkYm9keSk7XG5cdFx0fSk7XG5cdH1cbn07XG5cbmV4cG9ydCB7YWRkTGlzdGVuZXJ9O1xuIiwgImltcG9ydCB7YWRkTGlzdGVuZXJ9IGZyb20gJy4vbW9kdWxlcy9hZGRMaXN0ZW5lcic7XG5pbXBvcnQge2dldEJvZHl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbnZvaWQgZ2V0Qm9keSgpLnRoZW4oYWRkTGlzdGVuZXIpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUFBLHFCQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDQWxCLElBQU1DLGNBQWVDLFVBQXlCO0FBQzdDLFNBQU9BLEtBQUtDO0FBQ2I7O0FDQUEsSUFBTUMsWUFBYUYsVUFBeUI7QUFDM0MsU0FBT0QsWUFDTkMsS0FDRUcsUUFBUSxvQkFBb0IsR0FBRyxFQUMvQkEsUUFBUSxpQ0FBaUMsSUFBSSxFQUM3Q0EsUUFBUSxpQ0FBaUMsS0FBSyxDQUNqRDtBQUNEOztBQ1BBLElBQU1DLFdBQVlKLFVBQXlCO0FBQzFDLFNBQU9ELFlBQ05DLEtBQ0VHLFFBQVEsT0FBTyxFQUFFLEVBQ2pCQSxRQUNBLHdUQUNBLEdBQ0QsRUFDQ0EsUUFBUSxTQUFTLEVBQUUsQ0FDdEI7QUFDRDs7QUNaQSxJQUFBRSxvQkFBdUJQLFFBQUEsaUJBQUE7QUFFdkIsSUFBTVEsa0JBQWtCQSxNQUFNO0FBQzdCLFNBQU87SUFDTixpQkFBQSxHQUFnQkQsa0JBQUFFLFVBQVM7TUFDeEJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxNQUFBLEdBQUtILGtCQUFBRSxVQUFTO01BQ2JDLElBQUk7TUFDSkMsSUFBSTtJQUNMLENBQUM7SUFDRCxNQUFBLEdBQUtKLGtCQUFBRSxVQUFTO01BQ2JDLElBQUk7TUFDSkMsSUFBSTtJQUNMLENBQUM7SUFDREMsTUFBQSxHQUFLTCxrQkFBQUUsVUFBUztNQUNiQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0QsOEJBQUEsR0FBNkJILGtCQUFBRSxVQUFTO01BQ3JDQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0VBQ0Y7QUFDRDtBQUNBLElBQU1HLGVBQWVMLGdCQUFnQjtBQUVyQyxJQUFNTSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQzVCQSxJQUFNQyx1QkFBd0JkLFVBQXlCO0FBQ3RELFNBQUEsR0FBQWUsT0FBVWhCLFlBQVlDLElBQUksQ0FBQyxFQUFBZSxPQUFHSCxXQUFXLGNBQWMsQ0FBQztBQUN6RDtBQUVBLElBQU1JLDBCQUEyQmhCLFVBQXlCO0FBQ3pELFNBQUEsR0FBQWUsT0FBVUgsV0FBVyxHQUFHLENBQUMsRUFBQUcsT0FBR1gsU0FBU0osSUFBSSxDQUFDLEVBQUFlLE9BQUdILFdBQVcsS0FBSyxDQUFDLEVBQUFHLE9BQUdILFdBQVcsR0FBRyxDQUFDO0FBQ2pGO0FBRUEsSUFBTUssMkJBQTRCakIsVUFBeUI7QUFDMUQsU0FBQSxHQUFBZSxPQUFVYixVQUFVRixJQUFJLENBQUMsRUFBQWUsT0FBR0gsV0FBVywyQkFBMkIsQ0FBQztBQUNwRTs7QUNkQSxJQUFBTSxxQkFBa0JyQixRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNBWCxJQUFNcUIsTUFBTTs7QURPbkIsSUFBTUMsWUFBWUEsQ0FBQztFQUFDcEI7QUFBSSxNQUN2QmtCLG1DQUFBRyxRQUFBQyxjQUFDLE9BQUE7RUFBSUMsV0FBVyxDQUFDSixLQUFLLFdBQVcsc0JBQXNCLGVBQWU7RUFBR0ssSUFBRztBQUFBLEdBQzFFVixxQkFBcUJkLElBQUksR0FDekJnQix3QkFBd0JoQixJQUFJLEdBQzdCa0IsbUNBQUFHLFFBQUFDLGNBQUMsTUFBQSxJQUFHLEdBQ0hMLHlCQUF5QmpCLElBQUksQ0FDL0I7QUFHRCxJQUFPeUIsb0JBQVFMOztBTmJmLElBQU1NLFlBQWFDLFdBQXlDO0FBQUEsTUFBQUM7QUFDM0RELFFBQU1FLEtBQUEsSUFBQWQsT0FBU0ksR0FBRyxDQUFFLEVBQUVXLE9BQU87QUFFN0IsUUFBTTlCLFFBQUE0Qix1QkFBMkJHLE9BQU9DLGFBQWEsT0FBQSxRQUFBSix5QkFBQSxTQUFBLFNBQXBCQSxxQkFBdUJLLFNBQVM7QUFDakUsTUFBSSxDQUFDakMsTUFBTTtBQUNWO0VBQ0Q7QUFFQSxRQUFNa0MsV0FBV0MsRUFBRXZDLG1DQUFBeUIsUUFBQUMsY0FBQ0csbUJBQUE7SUFBVXpCO0VBQUEsQ0FBWSxDQUFFO0FBRTVDa0MsV0FBU0UsU0FBU1QsS0FBSztBQUV2QlUsYUFBVyxNQUFZO0FBQ3RCSCxhQUFTSSxRQUFRLFFBQVEsTUFBWTtBQUNwQ0osZUFBU0osT0FBTztJQUNqQixDQUFDO0VBQ0YsR0FBRyxJQUFJLEdBQUk7QUFDWjs7QVFuQkEsSUFBTVMsY0FBZVosV0FBeUM7QUFDN0QsTUFBSSxrQkFBa0JhLFVBQVU7QUFDL0JiLFVBQU1jLEdBQUcsdUJBQXVCO01BQUNDLFNBQVM7SUFBSSxHQUFHLE1BQVk7QUFDNURoQixnQkFBVUMsS0FBSztJQUNoQixDQUFDO0VBQ0YsT0FBTztBQUNOQSxVQUFNYyxHQUFHLGlCQUFpQixNQUFZO0FBQ3JDZixnQkFBVUMsS0FBSztJQUNoQixDQUFDO0VBQ0Y7QUFDRDs7QUNYQSxJQUFBZ0IscUJBQXNCN0MsUUFBQSxpQkFBQTtBQUV0QixNQUFBLEdBQUs2QyxtQkFBQUMsU0FBUSxFQUFFQyxLQUFLTixXQUFXOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDMiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImNvdW50TGVuZ3RoIiwgInRleHQiLCAibGVuZ3RoIiwgImNvdW50Qnl0ZSIsICJyZXBsYWNlIiwgImNvdW50Q0pLIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJsb2NhbGl6ZSIsICJlbiIsICJ6aCIsICJDSksiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdldENvdW50QnlUZXh0TGVuZ3RoIiwgImNvbmNhdCIsICJnZXRDSktDb3VudEJ5VGV4dExlbmd0aCIsICJnZXRVVEY4Q291bnRCeVRleHRMZW5ndGgiLCAiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInRpcCIsICJXb3JkQ291bnQiLCAiZGVmYXVsdCIsICJjcmVhdGVFbGVtZW50IiwgImNsYXNzTmFtZSIsICJpZCIsICJXb3JkQ291bnRfZGVmYXVsdCIsICJ3b3JkQ291bnQiLCAiJGJvZHkiLCAiX3dpbmRvdyRnZXRTZWxlY3Rpb24iLCAiZmluZCIsICJyZW1vdmUiLCAid2luZG93IiwgImdldFNlbGVjdGlvbiIsICJ0b1N0cmluZyIsICIkZWxlbWVudCIsICIkIiwgImFwcGVuZFRvIiwgInNldFRpbWVvdXQiLCAiZmFkZU91dCIsICJhZGRMaXN0ZW5lciIsICJkb2N1bWVudCIsICJvbiIsICJwYXNzaXZlIiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJnZXRCb2R5IiwgInRoZW4iXQp9Cg==
