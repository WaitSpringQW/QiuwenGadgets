/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://zh.wikipedia.org/wiki/MediaWiki:Gadget-noteTA.js}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/NoteTA}
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

// dist/NoteTA/NoteTA.js
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
//! src/NoteTA/options.json
var version = "1.0";
var portletClass = "x-noteTA-viewer";
//! src/NoteTA/modules/util/ApiRetryFailError.tsx
var import_ext_gadget2 = __toESM(require("ext.gadget.React"), 1);
//! src/NoteTA/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    ApiRetryFailError: (0, import_ext_gadget.localize)({
      en: "Api calls failed $1 time(s) in a row. Errors: ",
      "zh-hans": "Api 调用连续失败 $1 次，$1 次调用的错误分别为：",
      "zh-hant": "Api 調用連續失敗 $1 次，$1 次調用的錯誤分別為："
    }),
    Loading: (0, import_ext_gadget.localize)({
      en: "Loading...",
      "zh-hans": "正在加载……",
      "zh-hant": "正在載入……"
    }),
    Title: (0, import_ext_gadget.localize)({
      en: "NoteTA",
      "zh-hans": "字词转换",
      "zh-hant": "字詞轉換"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/NoteTA/modules/util/ApiRetryFailError.tsx
var ApiRetryFailError = class extends Error {
  errors;
  constructor(errors) {
    super("Api calls failed ".concat(errors.length, " time(s) in a row."));
    this.name = "ApiRetryFailError";
    this.errors = errors;
  }
  toJQuery() {
    const errorCount = this.errors.length;
    const element = /* @__PURE__ */ import_ext_gadget2.default.createElement("div", {
      className: "error"
    }, /* @__PURE__ */ import_ext_gadget2.default.createElement("p", null, getMessage("ApiRetryFailError").replace(/\$1/g, errorCount.toString())), /* @__PURE__ */ import_ext_gadget2.default.createElement("ol", null, this.errors.map((error, index) => /* @__PURE__ */ import_ext_gadget2.default.createElement("li", {
      key: index
    }, error.split("\n").map((line, number) => /* @__PURE__ */ import_ext_gadget2.default.createElement("p", {
      key: number
    }, line))))));
    const $element = $(element);
    return $element;
  }
};
//! src/NoteTA/modules/api.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var api = (0, import_ext_gadget3.initMwApi)("NoteTA/".concat(version));
//! src/NoteTA/modules/parseWikitext.ts
var parseWithRetry = (args, count = 3, previousErrors = []) => {
  if (!count) {
    return $.Deferred().reject(new ApiRetryFailError(previousErrors));
  }
  const deferred = $.Deferred();
  void api.parse(...args).then((response) => {
    void deferred.resolve(response);
  }).catch((error) => {
    console.error(error);
    if (error && typeof error === "object" && "stack" in error) {
      previousErrors[previousErrors.length] = error.stack;
    } else {
      previousErrors[previousErrors.length] = String(error);
    }
    parseWithRetry(args, --count, previousErrors).then((newResponse) => {
      void deferred.resolve(newResponse);
    }).catch((newError) => {
      void deferred.reject(newError);
    });
  });
  return deferred;
};
var parseWikitext = (...args) => {
  return parseWithRetry(args);
};
//! src/NoteTA/modules/viewer.tsx
var import_ext_gadget4 = __toESM(require("ext.gadget.React"), 1);
//! src/NoteTA/modules/util/assert.ts
function assert(value, valueName) {
  if (!value) {
    throw new Error("Assert Fail, ".concat(valueName, " == false."));
  }
}
//! src/NoteTA/modules/initViewMap.ts
var viewerMap = /* @__PURE__ */ new Map();
//! src/NoteTA/modules/initWindowManager.ts
var initWindowManager = () => {
  return new OO.ui.WindowManager();
};
var windowManager = initWindowManager();
//! src/NoteTA/modules/viewer.tsx
var getViewer = ($body, hash) => {
  if (viewerMap.has(hash)) {
    const storedViewer = viewerMap.get(hash);
    assert(storedViewer, "viewer");
    return storedViewer;
  }
  const $targetElement = $body.find("#noteTA-".concat(hash));
  if (!$targetElement.length) {
    throw new Error(`Can't get Element "#noteTA-`.concat(hash, '".'));
  }
  const {
    wgPageName,
    wgUserVariant
  } = mw.config.get();
  class NoteTAViewer extends OO.ui.ProcessDialog {
    dataIsLoaded;
    executePromise;
    mutationObserver;
    $realContent;
    $body;
    static lastError;
    static noteTAParseText;
    constructor() {
      super({
        size: "larger"
      });
      this.dataIsLoaded = false;
      this.$realContent = $(/* @__PURE__ */ import_ext_gadget4.default.createElement("div", null));
      this.mutationObserver = new MutationObserver(this.updateSize.bind(this));
      this.mutationObserver.observe(this.$realContent.get(0), {
        childList: true,
        subtree: true
      });
    }
    initialize() {
      super.initialize();
      const panelLayout = new OO.ui.PanelLayout({
        expanded: false,
        padded: true
      });
      this.$realContent.appendTo(panelLayout.$element);
      panelLayout.$element.appendTo(this.$body);
      return this;
    }
    getSetupProcess(data) {
      return super.getSetupProcess(data).next(() => {
        void this.doExecuteWrap();
        void this.executeAction("main");
      });
    }
    getActionProcess(action) {
      const isMainAction = action === "main";
      return super.getActionProcess(action).next(() => {
        if (isMainAction) {
          return this.doExecuteWrap();
        }
      }).next(() => {
        if (isMainAction && NoteTAViewer.lastError) {
          return NoteTAViewer.lastError;
        }
        return super.getActionProcess(action).execute();
      });
    }
    destroy() {
      this.mutationObserver.disconnect();
    }
    static getNoteTAParseText() {
      if (NoteTAViewer.noteTAParseText) {
        return $.Deferred().resolve(NoteTAViewer.noteTAParseText);
      }
      const $noteTAtitle = $targetElement.find(".noteTA-title");
      const actualTitle = wgPageName.replace(/_/g, " ");
      let wikitext = "";
      const titleDeferred = $.Deferred();
      if ($noteTAtitle.length) {
        const titleConv = $noteTAtitle.attr("data-noteta-code");
        assert(titleConv, "titleConv");
        let titleDesc = $noteTAtitle.attr("data-noteta-desc");
        if (titleDesc) {
          titleDesc = "（".concat(titleDesc, "）");
        } else {
          titleDesc = "";
        }
        wikitext += '<span style="float:right">{{edit|'.concat(actualTitle, "|section=0}}</span>\n");
        wikitext += "; 本文使用[[Help:字词转换处理|标题手工转换]]\n";
        wikitext += "* 转换标题为：-{D|".concat(titleConv, "}-").concat(titleDesc, "\n");
        wikitext += "* 实际标题为：-{R|".concat(actualTitle, "}-；当前显示为：-{|").concat(titleConv, "}-\n");
        void titleDeferred.resolve();
      } else {
        parseWikitext("{{noteTA/multititle|".concat(actualTitle, "}}"), {
          title: actualTitle,
          variant: "zh"
        }).then((resultHtml) => {
          const $multiTitle = $($.parseHTML(resultHtml)).find(".noteTA-multititle");
          if ($multiTitle.length) {
            wikitext += "; 本文[[Help:字词转换处理|标题可能经过转换]]\n* 转换标题为：";
            const textVariant = {};
            const variantText = {};
            var _iterator2 = _createForOfIteratorHelper($multiTitle.children()), _step2;
            try {
              for (_iterator2.s(); !(_step2 = _iterator2.n()).done; ) {
                const element = _step2.value;
                const $element = $(element);
                const variant = $element.attr("data-noteta-multititle-variant");
                assert(variant, "variant");
                const text = $element.text().trim();
                variantText[variant] = text;
                const textVariantArray = textVariant[text];
                if (textVariantArray) {
                  textVariantArray[textVariantArray.length] = variant;
                } else {
                  textVariant[text] = [variant];
                }
              }
            } catch (err) {
              _iterator2.e(err);
            } finally {
              _iterator2.f();
            }
            const titleConverted = variantText[wgUserVariant];
            const multiTitle = [];
            for (const key in variantText) {
              if (!Object.hasOwn(variantText, key)) {
                continue;
              }
              const text = variantText[key];
              if (text === null || text === void 0) {
                continue;
              }
              const variants = textVariant[text];
              if (!variants) {
                continue;
              }
              var _iterator3 = _createForOfIteratorHelper(variants), _step3;
              try {
                for (_iterator3.s(); !(_step3 = _iterator3.n()).done; ) {
                  const variant = _step3.value;
                  variantText[variant] = null;
                }
              } catch (err) {
                _iterator3.e(err);
              } finally {
                _iterator3.f();
              }
              const variantsName = variants.map((variant) => "-{R|{{MediaWiki:Variantname-".concat(variant, "}}}-")).join("、");
              multiTitle[multiTitle.length] = "".concat(variantsName, "：-{R|").concat(text, "}-");
            }
            const subItemSeparator = "\n** ";
            wikitext += "".concat(subItemSeparator).concat(multiTitle.join(subItemSeparator));
            wikitext += "\n* 实际标题为：-{R|".concat(actualTitle, "}-；当前显示为：-{R|").concat(titleConverted, "}-\n");
          }
          void titleDeferred.resolve();
        }).catch((error) => {
          void titleDeferred.reject(error);
        });
      }
      const deferred = $.Deferred();
      titleDeferred.then(() => {
        const $noteTAgroups = $targetElement.find(".noteTA-group > *[data-noteta-group]");
        var _iterator4 = _createForOfIteratorHelper($noteTAgroups), _step4;
        try {
          for (_iterator4.s(); !(_step4 = _iterator4.n()).done; ) {
            const element = _step4.value;
            const $element = $(element);
            switch ($element.attr("data-noteta-group-source")) {
              case "template":
                wikitext += "{{CGroup/".concat($element.attr("data-noteta-group"), "}}\n");
                break;
              case "module":
                wikitext += "{{#invoke:CGroupViewer|dialog|".concat($element.attr("data-noteta-group"), "}}\n");
                break;
              case "none":
                wikitext += "; 本文使用的公共转换组“".concat($element.attr("data-noteta-group"), "”尚未创建\n");
                wikitext += "* {{edit|Module:CGroup/".concat($element.attr("data-noteta-group"), "|创建公共转换组“").concat($element.attr("data-noteta-group"), "”}}\n");
                break;
              default:
                wikitext += "; 未知公共转换组“".concat($element.attr("data-noteta-group"), "”来源“").concat($element.attr("data-noteta-group-source"), "”\n");
            }
          }
        } catch (err) {
          _iterator4.e(err);
        } finally {
          _iterator4.f();
        }
        const $noteTAlocal = $targetElement.find(".noteTA-local");
        if ($noteTAlocal.length) {
          wikitext += '<span style="float:right">{{edit|'.concat(actualTitle, "|section=0}}</span>\n");
          wikitext += "; 本文使用[[Help:字词转换处理|全文手工转换]]\n";
          const $noteTAlocals = $noteTAlocal.children("*[data-noteta-code]");
          var _iterator5 = _createForOfIteratorHelper($noteTAlocals), _step5;
          try {
            for (_iterator5.s(); !(_step5 = _iterator5.n()).done; ) {
              const element = _step5.value;
              const $element = $(element);
              let localDesc = $element.attr("data-noteta-desc");
              if (localDesc) {
                localDesc = "（".concat(localDesc, "）");
              } else {
                localDesc = "";
              }
              const localConv = $element.attr("data-noteta-code");
              wikitext += "* -{D|".concat(localConv, "}-").concat(localDesc, "当前显示为：-{").concat(localConv, "}-\n");
            }
          } catch (err) {
            _iterator5.e(err);
          } finally {
            _iterator5.f();
          }
        }
        wikitext += "{{noteTA/footer}}\n";
        NoteTAViewer.noteTAParseText = wikitext;
        void deferred.resolve(wikitext);
      }).catch((error) => {
        void deferred.reject(error);
      });
      return deferred;
    }
    doExecute() {
      if (this.dataIsLoaded) {
        return $.Deferred().resolve();
      }
      this.$realContent.empty().append(/* @__PURE__ */ import_ext_gadget4.default.createElement("p", null, getMessage("Loading")));
      return NoteTAViewer.getNoteTAParseText().then((wikitext) => parseWikitext(wikitext, {
        title: "Template:CGroup/-",
        variant: wgUserVariant
      })).then((parsedHtml) => {
        this.$realContent.empty().html(parsedHtml).addClass("".concat(portletClass, "-output"));
        this.$realContent.find(".mw-collapsible").makeCollapsible();
        this.updateSize();
        this.dataIsLoaded = true;
      }).catch((error) => {
        if (error instanceof ApiRetryFailError) {
          throw new OO.ui.Error(error.toJQuery(), {
            recoverable: true
          });
        } else {
          throw new OO.ui.Error(String(error), {
            recoverable: false
          });
        }
      });
    }
    doExecuteWrap() {
      if (this.executePromise === void 0) {
        this.executePromise = this.doExecute();
        delete NoteTAViewer.lastError;
        const executeDeferred = $.Deferred();
        void this.executePromise.then((response) => {
          void executeDeferred.resolve(response);
        }).catch((error) => {
          if (error instanceof OO.ui.Error) {
            NoteTAViewer.lastError = error;
          } else {
            void executeDeferred.reject(error);
          }
        }).always(() => {
          delete this.executePromise;
        });
        return executeDeferred;
      }
      const deferred = $.Deferred();
      void this.executePromise.then((response) => {
        void deferred.resolve(response);
      }).catch((error) => {
        if (error instanceof OO.ui.Error) {
          NoteTAViewer.lastError = error;
        } else {
          void deferred.reject(error);
        }
      }).always(() => {
        delete this.executePromise;
      });
      return deferred;
    }
  }
  NoteTAViewer.static = {
    ...OO.ui.ProcessDialog.static
  };
  NoteTAViewer.static.name = "NoteTAViewer-".concat(hash);
  NoteTAViewer.static.title = getMessage("Title");
  NoteTAViewer.static.actions = [{
    label: mw.msg("ooui-dialog-process-dismiss"),
    flags: "safe"
  }];
  const viewer = new NoteTAViewer();
  windowManager.addWindows([viewer]);
  viewerMap.set(hash, viewer);
  return viewer;
};
var resetAllViewer = () => {
  var _iterator6 = _createForOfIteratorHelper(viewerMap.values()), _step6;
  try {
    for (_iterator6.s(); !(_step6 = _iterator6.n()).done; ) {
      const viewer = _step6.value;
      viewer.destroy();
    }
  } catch (err) {
    _iterator6.e(err);
  } finally {
    _iterator6.f();
  }
  viewerMap.clear();
  void windowManager.clearWindows();
};
//! src/NoteTA/modules/initGlobalMethods.ts
var portletId;
var initGlobalMethods = ($body) => {
  const globalMethods = {
    init() {
    },
    deInit() {
    }
  };
  const {
    skin
  } = mw.config.get();
  if (skin === "vector") {
    portletId = "p-noteTA";
    let $noteTATab;
    globalMethods.init = () => {
      if ($noteTATab || !portletId) {
        return;
      }
      const noteTATab = mw.util.addPortlet(portletId);
      if (!noteTATab) {
        return;
      }
      $noteTATab = $(noteTATab);
      $noteTATab.removeClass("mw-portlet-".concat(portletId)).addClass(["mw-portlet-".concat(portletId.replace("p-", "")), "vector-menu-tabs", "vector-menu-tabs-legacy"]);
      $body.find("#p-variants").after($noteTATab);
    };
    globalMethods.deInit = () => {
      if (!$noteTATab) {
        return;
      }
      $noteTATab.find("ul").empty();
      if (portletId) {
        mw.util.hidePortlet(portletId);
      }
    };
  } else if (skin === "vector-2022") {
    portletId = "p-associated-pages";
    globalMethods.deInit = () => {
      $body.find(".".concat(portletClass)).remove();
    };
  }
  return globalMethods;
};
//! src/NoteTA/NoteTA.ts
var import_ext_gadget6 = require("ext.gadget.Util");
//! src/NoteTA/modules/util/generatePortletLink.tsx
var import_ext_gadget5 = __toESM(require("ext.gadget.React"), 1);
var generatePortletLink = (hash) => {
  if (!portletId) {
    return;
  }
  const portletLink = mw.util.addPortletLink(portletId, "#", "汉/漢", "ca-noteTA-".concat(hash));
  if (!portletLink) {
    return;
  }
  portletLink.classList.add("ca-noteTA");
  const $portletLink = $(portletLink).addClass("".concat(portletClass));
  $portletLink.find("a").empty().append(/* @__PURE__ */ import_ext_gadget5.default.createElement("div", null, /* @__PURE__ */ import_ext_gadget5.default.createElement("span", {
    className: ["".concat(portletClass, "__label"), "".concat(portletClass, "__label-hans")]
  }, "汉"), /* @__PURE__ */ import_ext_gadget5.default.createElement("span", {
    className: ["".concat(portletClass, "__label"), "".concat(portletClass, "__label-hant")]
  }, "漢")));
  return $portletLink;
};
//! src/NoteTA/NoteTA.ts
var isInit = false;
mw.hook("wikipage.content").add(function noteTA($content) {
  const $body = $content.parents("body");
  if (!isInit) {
    isInit = true;
    windowManager.$element.appendTo($body);
  }
  resetAllViewer();
  const globalMethods = initGlobalMethods($body);
  globalMethods.deInit();
  globalMethods.init();
  var _iterator7 = _createForOfIteratorHelper($body.find(".mw-indicator[id^=mw-indicator-noteTA-]")), _step7;
  try {
    for (_iterator7.s(); !(_step7 = _iterator7.n()).done; ) {
      const element = _step7.value;
      const hash = element.id.replace(/^mw-indicator-noteTA-/, "");
      let $element = $(element);
      if (portletId) {
        $element.hide();
        const $portletLink = generatePortletLink(hash);
        if (!$portletLink) {
          continue;
        }
        $element = $portletLink;
      }
      const openerListener = (event) => {
        if (!(0, import_ext_gadget6.checkA11yConfirmKey)(event)) {
          return;
        }
        event.preventDefault();
        getViewer($body, hash).open();
      };
      $element.on("click", openerListener);
      $element.on("keydown", openerListener);
    }
  } catch (err) {
    _iterator7.e(err);
  } finally {
    _iterator7.f();
  }
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL05vdGVUQS9vcHRpb25zLmpzb24iLCAic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3IudHN4IiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9hcGkudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3BhcnNlV2lraXRleHQudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL3ZpZXdlci50c3giLCAic3JjL05vdGVUQS9tb2R1bGVzL3V0aWwvYXNzZXJ0LnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy9pbml0Vmlld01hcC50cyIsICJzcmMvTm90ZVRBL21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXIudHMiLCAic3JjL05vdGVUQS9tb2R1bGVzL2luaXRHbG9iYWxNZXRob2RzLnRzIiwgInNyYy9Ob3RlVEEvTm90ZVRBLnRzIiwgInNyYy9Ob3RlVEEvbW9kdWxlcy91dGlsL2dlbmVyYXRlUG9ydGxldExpbmsudHN4Il0sCiAgInNvdXJjZXNDb250ZW50IjogWyJ7XG5cdFwidmVyc2lvblwiOiBcIjEuMFwiLFxuXHRcInBvcnRsZXRDbGFzc1wiOiBcIngtbm90ZVRBLXZpZXdlclwiXG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gJ2V4dC5nYWRnZXQuUmVhY3QnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY2xhc3MgQXBpUmV0cnlGYWlsRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG5cdHByaXZhdGUgZXJyb3JzOiBzdHJpbmdbXTtcblxuXHRwdWJsaWMgY29uc3RydWN0b3IoZXJyb3JzOiBzdHJpbmdbXSkge1xuXHRcdHN1cGVyKGBBcGkgY2FsbHMgZmFpbGVkICR7ZXJyb3JzLmxlbmd0aH0gdGltZShzKSBpbiBhIHJvdy5gKTtcblx0XHR0aGlzLm5hbWUgPSAnQXBpUmV0cnlGYWlsRXJyb3InO1xuXHRcdHRoaXMuZXJyb3JzID0gZXJyb3JzO1xuXHR9XG5cblx0cHVibGljIHRvSlF1ZXJ5KCk6IEpRdWVyeSB7XG5cdFx0Y29uc3QgZXJyb3JDb3VudDogbnVtYmVyID0gdGhpcy5lcnJvcnMubGVuZ3RoO1xuXG5cdFx0Y29uc3QgZWxlbWVudCA9IChcblx0XHRcdDxkaXYgY2xhc3NOYW1lPVwiZXJyb3JcIj5cblx0XHRcdFx0PHA+e2dldE1lc3NhZ2UoJ0FwaVJldHJ5RmFpbEVycm9yJykucmVwbGFjZSgvXFwkMS9nLCBlcnJvckNvdW50LnRvU3RyaW5nKCkpfTwvcD5cblx0XHRcdFx0PG9sPlxuXHRcdFx0XHRcdHt0aGlzLmVycm9ycy5tYXA8UmVhY3QuUmVhY3RFbGVtZW50PigoZXJyb3IsIGluZGV4KSA9PiAoXG5cdFx0XHRcdFx0XHQ8bGkga2V5PXtpbmRleH0+XG5cdFx0XHRcdFx0XHRcdHtlcnJvci5zcGxpdCgnXFxuJykubWFwPFJlYWN0LlJlYWN0RWxlbWVudD4oKGxpbmUsIG51bWJlcikgPT4gKFxuXHRcdFx0XHRcdFx0XHRcdDxwIGtleT17bnVtYmVyfT57bGluZX08L3A+XG5cdFx0XHRcdFx0XHRcdCkpfVxuXHRcdFx0XHRcdFx0PC9saT5cblx0XHRcdFx0XHQpKX1cblx0XHRcdFx0PC9vbD5cblx0XHRcdDwvZGl2PlxuXHRcdCk7XG5cdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpIGFzIEpRdWVyeTtcblxuXHRcdHJldHVybiAkZWxlbWVudDtcblx0fVxufVxuXG5leHBvcnQge0FwaVJldHJ5RmFpbEVycm9yfTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0QXBpUmV0cnlGYWlsRXJyb3I6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnQXBpIGNhbGxzIGZhaWxlZCAkMSB0aW1lKHMpIGluIGEgcm93LiBFcnJvcnM6ICcsXG5cdFx0XHQnemgtaGFucyc6ICdBcGkg6LCD55So6L+e57ut5aSx6LSlICQxIOasoe+8jCQxIOasoeiwg+eUqOeahOmUmeivr+WIhuWIq+S4uu+8micsXG5cdFx0XHQnemgtaGFudCc6ICdBcGkg6Kq/55So6YCj57qM5aSx5pWXICQxIOasoe+8jCQxIOasoeiqv+eUqOeahOmMr+iqpOWIhuWIpeeCuu+8micsXG5cdFx0fSksXG5cdFx0TG9hZGluZzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdMb2FkaW5nLi4uJyxcblx0XHRcdCd6aC1oYW5zJzogJ+ato+WcqOWKoOi9veKApuKApicsXG5cdFx0XHQnemgtaGFudCc6ICfmraPlnKjovInlhaXigKbigKYnLFxuXHRcdH0pLFxuXHRcdFRpdGxlOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ05vdGVUQScsXG5cdFx0XHQnemgtaGFucyc6ICflrZfor43ovazmjaInLFxuXHRcdFx0J3poLWhhbnQnOiAn5a2X6Kme6L2J5o+bJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBOb3RlVEEvJHtPUFRJT05TLnZlcnNpb259YCk7XG5cbmV4cG9ydCB7YXBpfTtcbiIsICJpbXBvcnQge0FwaVJldHJ5RmFpbEVycm9yfSBmcm9tICcuL3V0aWwvQXBpUmV0cnlGYWlsRXJyb3InO1xuaW1wb3J0IHthcGl9IGZyb20gJy4vYXBpJztcblxudHlwZSBBcGlQYXJzZSA9IG13LkFwaVsncGFyc2UnXTtcbnR5cGUgQXBpUGFyc2VQYXJhbWV0ZXJzID0gUGFyYW1ldGVyczxBcGlQYXJzZT47XG50eXBlIEFwaVBhcnNlUmVzcG9uc2UgPSBBd2FpdGVkPFJldHVyblR5cGU8QXBpUGFyc2U+PjtcbnR5cGUgQXBpUmVzcG9uc2UgPSBBcGlQYXJzZVJlc3BvbnNlIHwgQXBpUmV0cnlGYWlsRXJyb3I7XG5cbmNvbnN0IHBhcnNlV2l0aFJldHJ5ID0gKFxuXHRhcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMsXG5cdGNvdW50OiBudW1iZXIgPSAzLFxuXHRwcmV2aW91c0Vycm9yczogc3RyaW5nW10gPSBbXVxuKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiA9PiB7XG5cdGlmICghY291bnQpIHtcblx0XHRyZXR1cm4gJC5EZWZlcnJlZDxBcGlSZXRyeUZhaWxFcnJvcj4oKS5yZWplY3QobmV3IEFwaVJldHJ5RmFpbEVycm9yKHByZXZpb3VzRXJyb3JzKSk7XG5cdH1cblxuXHRjb25zdCBkZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cblx0dm9pZCBhcGlcblx0XHQucGFyc2UoLi4uYXJncylcblx0XHQudGhlbigocmVzcG9uc2U6IEFwaVBhcnNlUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShyZXNwb25zZSk7XG5cdFx0fSlcblx0XHQuY2F0Y2goKGVycm9yPzogRXJyb3IgfCBzdHJpbmcpOiB2b2lkID0+IHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuXG5cdFx0XHRpZiAoZXJyb3IgJiYgdHlwZW9mIGVycm9yID09PSAnb2JqZWN0JyAmJiAnc3RhY2snIGluIGVycm9yKSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBlcnJvci5zdGFjaztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHByZXZpb3VzRXJyb3JzW3ByZXZpb3VzRXJyb3JzLmxlbmd0aF0gPSBTdHJpbmcoZXJyb3IpO1xuXHRcdFx0fVxuXG5cdFx0XHRwYXJzZVdpdGhSZXRyeShhcmdzLCAtLWNvdW50LCBwcmV2aW91c0Vycm9ycylcblx0XHRcdFx0LnRoZW4oKG5ld1Jlc3BvbnNlOiBBcGlSZXNwb25zZSk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVzb2x2ZShuZXdSZXNwb25zZSk7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5jYXRjaCgobmV3RXJyb3I/OiBFcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KG5ld0Vycm9yKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cblx0cmV0dXJuIGRlZmVycmVkO1xufTtcblxuY29uc3QgcGFyc2VXaWtpdGV4dCA9ICguLi5hcmdzOiBBcGlQYXJzZVBhcmFtZXRlcnMpOiBKUXVlcnkuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+ID0+IHtcblx0cmV0dXJuIHBhcnNlV2l0aFJldHJ5KGFyZ3MpO1xufTtcblxuZXhwb3J0IHt0eXBlIEFwaVBhcnNlUmVzcG9uc2UsIHR5cGUgQXBpUmVzcG9uc2UsIHBhcnNlV2lraXRleHR9O1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCB7dHlwZSBBcGlQYXJzZVJlc3BvbnNlLCB0eXBlIEFwaVJlc3BvbnNlLCBwYXJzZVdpa2l0ZXh0fSBmcm9tICcuL3BhcnNlV2lraXRleHQnO1xuaW1wb3J0IHtBcGlSZXRyeUZhaWxFcnJvcn0gZnJvbSAnLi91dGlsL0FwaVJldHJ5RmFpbEVycm9yJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7YXNzZXJ0fSBmcm9tICcuL3V0aWwvYXNzZXJ0JztcbmltcG9ydCB7Z2V0TWVzc2FnZX0gZnJvbSAnLi9pMThuJztcbmltcG9ydCB7dmlld2VyTWFwfSBmcm9tICcuL2luaXRWaWV3TWFwJztcbmltcG9ydCB7d2luZG93TWFuYWdlcn0gZnJvbSAnLi9pbml0V2luZG93TWFuYWdlcic7XG5cbmNvbnN0IGdldFZpZXdlciA9ICgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4sIGhhc2g6IHN0cmluZyk6IHR5cGVvZiB2aWV3ZXIgPT4ge1xuXHRpZiAodmlld2VyTWFwLmhhcyhoYXNoKSkge1xuXHRcdGNvbnN0IHN0b3JlZFZpZXdlciA9IHZpZXdlck1hcC5nZXQoaGFzaCk7XG5cdFx0YXNzZXJ0KHN0b3JlZFZpZXdlciwgJ3ZpZXdlcicpO1xuXG5cdFx0cmV0dXJuIHN0b3JlZFZpZXdlcjtcblx0fVxuXG5cdGNvbnN0ICR0YXJnZXRFbGVtZW50OiBKUXVlcnkgPSAkYm9keS5maW5kKGAjbm90ZVRBLSR7aGFzaH1gKTtcblx0aWYgKCEkdGFyZ2V0RWxlbWVudC5sZW5ndGgpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoYENhbid0IGdldCBFbGVtZW50IFwiI25vdGVUQS0ke2hhc2h9XCIuYCk7XG5cdH1cblxuXHRjb25zdCB7d2dQYWdlTmFtZSwgd2dVc2VyVmFyaWFudH0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0Y2xhc3MgTm90ZVRBVmlld2VyIGV4dGVuZHMgT08udWkuUHJvY2Vzc0RpYWxvZyB7XG5cdFx0cHJpdmF0ZSBkYXRhSXNMb2FkZWQ6IGJvb2xlYW47XG5cdFx0cHJpdmF0ZSBleGVjdXRlUHJvbWlzZT86IFJldHVyblR5cGU8dHlwZW9mIHRoaXMuZG9FeGVjdXRlPjtcblx0XHRwcml2YXRlIG11dGF0aW9uT2JzZXJ2ZXI6IE11dGF0aW9uT2JzZXJ2ZXI7XG5cdFx0cHJpdmF0ZSAkcmVhbENvbnRlbnQ6IEpRdWVyeTtcblx0XHRwcml2YXRlICRib2R5OiBKUXVlcnkgfCB1bmRlZmluZWQ7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbGFzdEVycm9yPzogT08udWkuRXJyb3I7XG5cdFx0cHJpdmF0ZSBzdGF0aWMgbm90ZVRBUGFyc2VUZXh0OiBzdHJpbmc7XG5cblx0XHRwdWJsaWMgY29uc3RydWN0b3IoKSB7XG5cdFx0XHRzdXBlcih7XG5cdFx0XHRcdHNpemU6ICdsYXJnZXInLFxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuZGF0YUlzTG9hZGVkID0gZmFsc2U7XG5cdFx0XHR0aGlzLiRyZWFsQ29udGVudCA9ICQoPGRpdiAvPikgYXMgSlF1ZXJ5O1xuXG5cdFx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLnVwZGF0ZVNpemUuYmluZCh0aGlzKSk7XG5cdFx0XHR0aGlzLm11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLiRyZWFsQ29udGVudC5nZXQoMCkgYXMgSFRNTEVsZW1lbnQsIHtcblx0XHRcdFx0Y2hpbGRMaXN0OiB0cnVlLFxuXHRcdFx0XHRzdWJ0cmVlOiB0cnVlLFxuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGluaXRpYWxpemUoKTogdGhpcyB7XG5cdFx0XHRzdXBlci5pbml0aWFsaXplKCk7XG5cblx0XHRcdGNvbnN0IHBhbmVsTGF5b3V0OiBPTy51aS5QYW5lbExheW91dCA9IG5ldyBPTy51aS5QYW5lbExheW91dCh7XG5cdFx0XHRcdGV4cGFuZGVkOiBmYWxzZSxcblx0XHRcdFx0cGFkZGVkOiB0cnVlLFxuXHRcdFx0fSk7XG5cblx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmFwcGVuZFRvKHBhbmVsTGF5b3V0LiRlbGVtZW50KTtcblx0XHRcdHBhbmVsTGF5b3V0LiRlbGVtZW50LmFwcGVuZFRvKHRoaXMuJGJvZHkgYXMgSlF1ZXJ5KTtcblxuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGdldFNldHVwUHJvY2VzcyhkYXRhOiBPTy51aS5EaWFsb2cuU2V0dXBEYXRhTWFwKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRyZXR1cm4gc3VwZXIuZ2V0U2V0dXBQcm9jZXNzKGRhdGEpLm5leHQoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHR2b2lkIHRoaXMuZG9FeGVjdXRlV3JhcCgpO1xuXHRcdFx0XHR2b2lkIHRoaXMuZXhlY3V0ZUFjdGlvbignbWFpbicpO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cHVibGljIG92ZXJyaWRlIGdldEFjdGlvblByb2Nlc3MoYWN0aW9uPzogc3RyaW5nKTogT08udWkuUHJvY2VzcyB7XG5cdFx0XHRjb25zdCBpc01haW5BY3Rpb246IGJvb2xlYW4gPSBhY3Rpb24gPT09ICdtYWluJztcblxuXHRcdFx0cmV0dXJuIChcblx0XHRcdFx0c3VwZXJcblx0XHRcdFx0XHQuZ2V0QWN0aW9uUHJvY2VzcyhhY3Rpb24pXG5cdFx0XHRcdFx0Ly8gQHRzLWV4cGVjdC1lcnJvciBUUzcwMzBcblx0XHRcdFx0XHQubmV4dCgoKSA9PiB7XG5cdFx0XHRcdFx0XHRpZiAoaXNNYWluQWN0aW9uKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0aGlzLmRvRXhlY3V0ZVdyYXAoKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5uZXh0KCgpID0+IHtcblx0XHRcdFx0XHRcdGlmIChpc01haW5BY3Rpb24gJiYgTm90ZVRBVmlld2VyLmxhc3RFcnJvcikge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gTm90ZVRBVmlld2VyLmxhc3RFcnJvcjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBzdXBlci5nZXRBY3Rpb25Qcm9jZXNzKGFjdGlvbikuZXhlY3V0ZSgpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdHB1YmxpYyBkZXN0cm95KCk6IHZvaWQge1xuXHRcdFx0dGhpcy5tdXRhdGlvbk9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcblx0XHR9XG5cblx0XHRwcml2YXRlIHN0YXRpYyBnZXROb3RlVEFQYXJzZVRleHQoKTogSlF1ZXJ5LkRlZmVycmVkPEFwaVJlc3BvbnNlPiB7XG5cdFx0XHRpZiAoTm90ZVRBVmlld2VyLm5vdGVUQVBhcnNlVGV4dCkge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZDxzdHJpbmc+KCkucmVzb2x2ZShOb3RlVEFWaWV3ZXIubm90ZVRBUGFyc2VUZXh0KTtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgJG5vdGVUQXRpdGxlOiBKUXVlcnkgPSAkdGFyZ2V0RWxlbWVudC5maW5kKCcubm90ZVRBLXRpdGxlJyk7XG5cdFx0XHRjb25zdCBhY3R1YWxUaXRsZTogc3RyaW5nID0gd2dQYWdlTmFtZS5yZXBsYWNlKC9fL2csICcgJyk7XG5cdFx0XHRsZXQgd2lraXRleHQ6IHN0cmluZyA9ICcnO1xuXG5cdFx0XHRjb25zdCB0aXRsZURlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblxuXHRcdFx0aWYgKCRub3RlVEF0aXRsZS5sZW5ndGgpIHtcblx0XHRcdFx0Y29uc3QgdGl0bGVDb252OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkbm90ZVRBdGl0bGUuYXR0cignZGF0YS1ub3RldGEtY29kZScpO1xuXHRcdFx0XHRhc3NlcnQodGl0bGVDb252LCAndGl0bGVDb252Jyk7XG5cblx0XHRcdFx0bGV0IHRpdGxlRGVzYzogc3RyaW5nIHwgdW5kZWZpbmVkID0gJG5vdGVUQXRpdGxlLmF0dHIoJ2RhdGEtbm90ZXRhLWRlc2MnKTtcblx0XHRcdFx0aWYgKHRpdGxlRGVzYykge1xuXHRcdFx0XHRcdHRpdGxlRGVzYyA9IGDvvIgke3RpdGxlRGVzY33vvIlgO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRpdGxlRGVzYyA9ICcnO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0d2lraXRleHQgKz0gYDxzcGFuIHN0eWxlPVwiZmxvYXQ6cmlnaHRcIj57e2VkaXR8JHthY3R1YWxUaXRsZX18c2VjdGlvbj0wfX08L3NwYW4+XFxuYDtcblx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paH5L2/55SoW1tIZWxwOuWtl+ivjei9rOaNouWkhOeQhnzmoIfpopjmiYvlt6XovazmjaJdXVxcbic7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIOi9rOaNouagh+mimOS4uu+8mi17RHwke3RpdGxlQ29udn19LSR7dGl0bGVEZXNjfVxcbmA7XG5cdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIOWunumZheagh+mimOS4uu+8mi17Unwke2FjdHVhbFRpdGxlfX0t77yb5b2T5YmN5pi+56S65Li677yaLXt8JHt0aXRsZUNvbnZ9fS1cXG5gO1xuXG5cdFx0XHRcdHZvaWQgdGl0bGVEZWZlcnJlZC5yZXNvbHZlKCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYXJzZVdpa2l0ZXh0KGB7e25vdGVUQS9tdWx0aXRpdGxlfCR7YWN0dWFsVGl0bGV9fX1gLCB7XG5cdFx0XHRcdFx0dGl0bGU6IGFjdHVhbFRpdGxlLFxuXHRcdFx0XHRcdHZhcmlhbnQ6ICd6aCcsXG5cdFx0XHRcdH0pXG5cdFx0XHRcdFx0LnRoZW4oKHJlc3VsdEh0bWw6IEFwaVJlc3BvbnNlKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0XHRjb25zdCAkbXVsdGlUaXRsZTogSlF1ZXJ5ID0gJCgkLnBhcnNlSFRNTChyZXN1bHRIdG1sIGFzIEFwaVBhcnNlUmVzcG9uc2UpKS5maW5kKFxuXHRcdFx0XHRcdFx0XHQnLm5vdGVUQS1tdWx0aXRpdGxlJ1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRcdGlmICgkbXVsdGlUaXRsZS5sZW5ndGgpIHtcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paHW1tIZWxwOuWtl+ivjei9rOaNouWkhOeQhnzmoIfpopjlj6/og73nu4/ov4fovazmjaJdXVxcbiog6L2s5o2i5qCH6aKY5Li677yaJztcblxuXHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0VmFyaWFudDogUmVjb3JkPHN0cmluZywgc3RyaW5nW10+ID0ge307XG5cdFx0XHRcdFx0XHRcdGNvbnN0IHZhcmlhbnRUZXh0OiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmcgfCBudWxsPiA9IHt9O1xuXG5cdFx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbXVsdGlUaXRsZS5jaGlsZHJlbigpKSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudDogc3RyaW5nIHwgdW5kZWZpbmVkID0gJGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtbXVsdGl0aXRsZS12YXJpYW50Jyk7XG5cdFx0XHRcdFx0XHRcdFx0YXNzZXJ0KHZhcmlhbnQsICd2YXJpYW50Jyk7XG5cblx0XHRcdFx0XHRcdFx0XHRjb25zdCB0ZXh0OiBzdHJpbmcgPSAkZWxlbWVudC50ZXh0KCkudHJpbSgpO1xuXHRcdFx0XHRcdFx0XHRcdHZhcmlhbnRUZXh0W3ZhcmlhbnRdID0gdGV4dDtcblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRleHRWYXJpYW50QXJyYXk6IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0gdGV4dFZhcmlhbnRbdGV4dF07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHRleHRWYXJpYW50QXJyYXkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRleHRWYXJpYW50QXJyYXlbdGV4dFZhcmlhbnRBcnJheS5sZW5ndGhdID0gdmFyaWFudDtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dFZhcmlhbnRbdGV4dF0gPSBbdmFyaWFudF07XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgdGl0bGVDb252ZXJ0ZWQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgPSB2YXJpYW50VGV4dFt3Z1VzZXJWYXJpYW50IGFzIHN0cmluZ107XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgbXVsdGlUaXRsZTogc3RyaW5nW10gPSBbXTtcblx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCBrZXkgaW4gdmFyaWFudFRleHQpIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIU9iamVjdC5oYXNPd24odmFyaWFudFRleHQsIGtleSkpIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdGNvbnN0IHRleHQ6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQgPSB2YXJpYW50VGV4dFtrZXldO1xuXHRcdFx0XHRcdFx0XHRcdGlmICh0ZXh0ID09PSBudWxsIHx8IHRleHQgPT09IHVuZGVmaW5lZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudHM6IHN0cmluZ1tdIHwgdW5kZWZpbmVkID0gdGV4dFZhcmlhbnRbdGV4dF07XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCF2YXJpYW50cykge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChjb25zdCB2YXJpYW50IG9mIHZhcmlhbnRzKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHR2YXJpYW50VGV4dFt2YXJpYW50XSA9IG51bGw7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0Y29uc3QgdmFyaWFudHNOYW1lOiBzdHJpbmcgPSB2YXJpYW50c1xuXHRcdFx0XHRcdFx0XHRcdFx0Lm1hcCgodmFyaWFudDogc3RyaW5nKTogc3RyaW5nID0+IGAte1J8e3tNZWRpYVdpa2k6VmFyaWFudG5hbWUtJHt2YXJpYW50fX19fS1gKVxuXHRcdFx0XHRcdFx0XHRcdFx0LmpvaW4oJ+OAgScpO1xuXHRcdFx0XHRcdFx0XHRcdG11bHRpVGl0bGVbbXVsdGlUaXRsZS5sZW5ndGhdID0gYCR7dmFyaWFudHNOYW1lfe+8mi17Unwke3RleHR9fS1gO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3Qgc3ViSXRlbVNlcGFyYXRvcjogc3RyaW5nID0gJ1xcbioqICc7XG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGAke3N1Ykl0ZW1TZXBhcmF0b3J9JHttdWx0aVRpdGxlLmpvaW4oc3ViSXRlbVNlcGFyYXRvcil9YDtcblx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYFxcbiog5a6e6ZmF5qCH6aKY5Li677yaLXtSfCR7YWN0dWFsVGl0bGV9fS3vvJvlvZPliY3mmL7npLrkuLrvvJote1J8JHt0aXRsZUNvbnZlcnRlZH19LVxcbmA7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdHZvaWQgdGl0bGVEZWZlcnJlZC5yZXNvbHZlKCk7XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQuY2F0Y2goKGVycm9yOiBBcGlSZXRyeUZhaWxFcnJvcik6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0dm9pZCB0aXRsZURlZmVycmVkLnJlamVjdChlcnJvcik7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGNvbnN0IGRlZmVycmVkID0gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKTtcblxuXHRcdFx0dGl0bGVEZWZlcnJlZFxuXHRcdFx0XHQudGhlbigoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0Y29uc3QgJG5vdGVUQWdyb3VwczogSlF1ZXJ5ID0gJHRhcmdldEVsZW1lbnQuZmluZCgnLm5vdGVUQS1ncm91cCA+ICpbZGF0YS1ub3RldGEtZ3JvdXBdJyk7XG5cdFx0XHRcdFx0Zm9yIChjb25zdCBlbGVtZW50IG9mICRub3RlVEFncm91cHMpIHtcblx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdFx0XHRcdFx0c3dpdGNoICgkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cC1zb3VyY2UnKSkge1xuXHRcdFx0XHRcdFx0XHRjYXNlICd0ZW1wbGF0ZSc6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYHt7Q0dyb3VwLyR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX19fVxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ21vZHVsZSc6XG5cdFx0XHRcdFx0XHRcdFx0d2lraXRleHQgKz0gYHt7I2ludm9rZTpDR3JvdXBWaWV3ZXJ8ZGlhbG9nfCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX19fVxcbmA7XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdGNhc2UgJ25vbmUnOlxuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGA7IOacrOaWh+S9v+eUqOeahOWFrOWFsei9rOaNoue7hOKAnCR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX3igJ3lsJrmnKrliJvlu7pcXG5gO1xuXHRcdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIHt7ZWRpdHxNb2R1bGU6Q0dyb3VwLyR7JGVsZW1lbnQuYXR0cignZGF0YS1ub3RldGEtZ3JvdXAnKX185Yib5bu65YWs5YWx6L2s5o2i57uE4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cCcpfeKAnX19XFxuYDtcblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgOyDmnKrnn6XlhazlhbHovazmjaLnu4TigJwkeyRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWdyb3VwJyl94oCd5p2l5rqQ4oCcJHskZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1ncm91cC1zb3VyY2UnKX3igJ1cXG5gO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNvbnN0ICRub3RlVEFsb2NhbDogSlF1ZXJ5ID0gJHRhcmdldEVsZW1lbnQuZmluZCgnLm5vdGVUQS1sb2NhbCcpO1xuXHRcdFx0XHRcdGlmICgkbm90ZVRBbG9jYWwubGVuZ3RoKSB7XG5cdFx0XHRcdFx0XHR3aWtpdGV4dCArPSBgPHNwYW4gc3R5bGU9XCJmbG9hdDpyaWdodFwiPnt7ZWRpdHwke2FjdHVhbFRpdGxlfXxzZWN0aW9uPTB9fTwvc3Bhbj5cXG5gO1xuXHRcdFx0XHRcdFx0d2lraXRleHQgKz0gJzsg5pys5paH5L2/55SoW1tIZWxwOuWtl+ivjei9rOaNouWkhOeQhnzlhajmlofmiYvlt6XovazmjaJdXVxcbic7XG5cblx0XHRcdFx0XHRcdGNvbnN0ICRub3RlVEFsb2NhbHMgPSAkbm90ZVRBbG9jYWwuY2hpbGRyZW4oJypbZGF0YS1ub3RldGEtY29kZV0nKTtcblx0XHRcdFx0XHRcdGZvciAoY29uc3QgZWxlbWVudCBvZiAkbm90ZVRBbG9jYWxzKSB7XG5cdFx0XHRcdFx0XHRcdGNvbnN0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXG5cdFx0XHRcdFx0XHRcdGxldCBsb2NhbERlc2M6IHN0cmluZyB8IHVuZGVmaW5lZCA9ICRlbGVtZW50LmF0dHIoJ2RhdGEtbm90ZXRhLWRlc2MnKTtcblx0XHRcdFx0XHRcdFx0aWYgKGxvY2FsRGVzYykge1xuXHRcdFx0XHRcdFx0XHRcdGxvY2FsRGVzYyA9IGDvvIgke2xvY2FsRGVzY33vvIlgO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGxvY2FsRGVzYyA9ICcnO1xuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdFx0Y29uc3QgbG9jYWxDb252OiBzdHJpbmcgfCB1bmRlZmluZWQgPSAkZWxlbWVudC5hdHRyKCdkYXRhLW5vdGV0YS1jb2RlJyk7XG5cdFx0XHRcdFx0XHRcdHdpa2l0ZXh0ICs9IGAqIC17RHwke2xvY2FsQ29udn19LSR7bG9jYWxEZXNjfeW9k+WJjeaYvuekuuS4uu+8mi17JHtsb2NhbENvbnZ9fS1cXG5gO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHdpa2l0ZXh0ICs9ICd7e25vdGVUQS9mb290ZXJ9fVxcbic7XG5cblx0XHRcdFx0XHROb3RlVEFWaWV3ZXIubm90ZVRBUGFyc2VUZXh0ID0gd2lraXRleHQ7XG5cblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmUod2lraXRleHQpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycm9yOiBBcGlSZXRyeUZhaWxFcnJvcik6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdHZvaWQgZGVmZXJyZWQucmVqZWN0KGVycm9yKTtcblx0XHRcdFx0fSk7XG5cblx0XHRcdHJldHVybiBkZWZlcnJlZDtcblx0XHR9XG5cblx0XHRwcml2YXRlIGRvRXhlY3V0ZSgpIHtcblx0XHRcdGlmICh0aGlzLmRhdGFJc0xvYWRlZCkge1xuXHRcdFx0XHRyZXR1cm4gJC5EZWZlcnJlZDxBcGlSZXNwb25zZT4oKS5yZXNvbHZlKCk7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuJHJlYWxDb250ZW50LmVtcHR5KCkuYXBwZW5kKDxwPntnZXRNZXNzYWdlKCdMb2FkaW5nJyl9PC9wPik7XG5cblx0XHRcdHJldHVybiBOb3RlVEFWaWV3ZXIuZ2V0Tm90ZVRBUGFyc2VUZXh0KClcblx0XHRcdFx0LnRoZW4oKHdpa2l0ZXh0OiBBcGlSZXNwb25zZSkgPT5cblx0XHRcdFx0XHRwYXJzZVdpa2l0ZXh0KHdpa2l0ZXh0IGFzIEFwaVBhcnNlUmVzcG9uc2UsIHtcblx0XHRcdFx0XHRcdHRpdGxlOiAnVGVtcGxhdGU6Q0dyb3VwLy0nLFxuXHRcdFx0XHRcdFx0dmFyaWFudDogd2dVc2VyVmFyaWFudCBhcyBzdHJpbmcsXG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0KVxuXHRcdFx0XHQudGhlbigocGFyc2VkSHRtbDogQXBpUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdFx0XHQvLyBUaGUgZm9sbG93aW5nIGNsYXNzZXMgYXJlIHVzZWQgaGVyZTpcblx0XHRcdFx0XHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHRcdFx0XHRcdC8vICogZm9yIG1vcmUgaW5mb3JtYXRpb25cblx0XHRcdFx0XHR0aGlzLiRyZWFsQ29udGVudFxuXHRcdFx0XHRcdFx0LmVtcHR5KClcblx0XHRcdFx0XHRcdC5odG1sKHBhcnNlZEh0bWwgYXMgQXBpUGFyc2VSZXNwb25zZSlcblx0XHRcdFx0XHRcdC5hZGRDbGFzcyhgJHtPUFRJT05TLnBvcnRsZXRDbGFzc30tb3V0cHV0YCk7XG5cblx0XHRcdFx0XHQoXG5cdFx0XHRcdFx0XHR0aGlzLiRyZWFsQ29udGVudC5maW5kKCcubXctY29sbGFwc2libGUnKSBhcyBKUXVlcnkgJiB7bWFrZUNvbGxhcHNpYmxlOiAoKSA9PiBKUXVlcnl9XG5cdFx0XHRcdFx0KS5tYWtlQ29sbGFwc2libGUoKTtcblxuXHRcdFx0XHRcdHRoaXMudXBkYXRlU2l6ZSgpO1xuXHRcdFx0XHRcdHRoaXMuZGF0YUlzTG9hZGVkID0gdHJ1ZTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKChlcnJvcjogQXBpUmV0cnlGYWlsRXJyb3IgfCBFcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdGlmIChlcnJvciBpbnN0YW5jZW9mIEFwaVJldHJ5RmFpbEVycm9yKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgT08udWkuRXJyb3IoZXJyb3IudG9KUXVlcnkoKSwge1xuXHRcdFx0XHRcdFx0XHRyZWNvdmVyYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBuZXcgT08udWkuRXJyb3IoU3RyaW5nKGVycm9yKSwge1xuXHRcdFx0XHRcdFx0XHRyZWNvdmVyYWJsZTogZmFsc2UsXG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHByaXZhdGUgZG9FeGVjdXRlV3JhcCgpIHtcblx0XHRcdGlmICh0aGlzLmV4ZWN1dGVQcm9taXNlID09PSB1bmRlZmluZWQpIHtcblx0XHRcdFx0dGhpcy5leGVjdXRlUHJvbWlzZSA9IHRoaXMuZG9FeGVjdXRlKCk7XG5cdFx0XHRcdGRlbGV0ZSBOb3RlVEFWaWV3ZXIubGFzdEVycm9yO1xuXG5cdFx0XHRcdGNvbnN0IGV4ZWN1dGVEZWZlcnJlZCA9ICQuRGVmZXJyZWQ8QXBpUmVzcG9uc2U+KCk7XG5cdFx0XHRcdHZvaWQgKHRoaXMuZXhlY3V0ZVByb21pc2UgYXMgSlF1ZXJ5LlByb21pc2U8QXBpUmVzcG9uc2U+KVxuXHRcdFx0XHRcdC50aGVuKChyZXNwb25zZTogQXBpUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdHZvaWQgZXhlY3V0ZURlZmVycmVkLnJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0LmNhdGNoKChlcnJvcjogRXJyb3IgfCBPTy51aS5FcnJvciB8IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgT08udWkuRXJyb3IpIHtcblx0XHRcdFx0XHRcdFx0Tm90ZVRBVmlld2VyLmxhc3RFcnJvciA9IGVycm9yO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0dm9pZCBleGVjdXRlRGVmZXJyZWQucmVqZWN0KGVycm9yKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdC5hbHdheXMoKCk6IHZvaWQgPT4ge1xuXHRcdFx0XHRcdFx0ZGVsZXRlIHRoaXMuZXhlY3V0ZVByb21pc2U7XG5cdFx0XHRcdFx0fSk7XG5cblx0XHRcdFx0cmV0dXJuIGV4ZWN1dGVEZWZlcnJlZDtcblx0XHRcdH1cblxuXHRcdFx0Y29uc3QgZGVmZXJyZWQgPSAkLkRlZmVycmVkPEFwaVJlc3BvbnNlPigpO1xuXHRcdFx0dm9pZCAodGhpcy5leGVjdXRlUHJvbWlzZSBhcyBKUXVlcnkuUHJvbWlzZTxBcGlSZXNwb25zZT4pXG5cdFx0XHRcdC50aGVuKChyZXNwb25zZTogQXBpUmVzcG9uc2UpOiB2b2lkID0+IHtcblx0XHRcdFx0XHR2b2lkIGRlZmVycmVkLnJlc29sdmUocmVzcG9uc2UpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQuY2F0Y2goKGVycm9yOiBFcnJvciB8IE9PLnVpLkVycm9yIHwgc3RyaW5nKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0aWYgKGVycm9yIGluc3RhbmNlb2YgT08udWkuRXJyb3IpIHtcblx0XHRcdFx0XHRcdE5vdGVUQVZpZXdlci5sYXN0RXJyb3IgPSBlcnJvcjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dm9pZCBkZWZlcnJlZC5yZWplY3QoZXJyb3IpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdFx0LmFsd2F5cygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdFx0ZGVsZXRlIHRoaXMuZXhlY3V0ZVByb21pc2U7XG5cdFx0XHRcdH0pO1xuXG5cdFx0XHRyZXR1cm4gZGVmZXJyZWQ7XG5cdFx0fVxuXHR9XG5cblx0Tm90ZVRBVmlld2VyLnN0YXRpYyA9IHtcblx0XHQuLi5PTy51aS5Qcm9jZXNzRGlhbG9nLnN0YXRpYyxcblx0fTtcblx0Tm90ZVRBVmlld2VyLnN0YXRpYy5uYW1lID0gYE5vdGVUQVZpZXdlci0ke2hhc2h9YDtcblx0Tm90ZVRBVmlld2VyLnN0YXRpYy50aXRsZSA9IGdldE1lc3NhZ2UoJ1RpdGxlJyk7XG5cdE5vdGVUQVZpZXdlci5zdGF0aWMuYWN0aW9ucyA9IFtcblx0XHR7XG5cdFx0XHRsYWJlbDogbXcubXNnKCdvb3VpLWRpYWxvZy1wcm9jZXNzLWRpc21pc3MnKSxcblx0XHRcdGZsYWdzOiAnc2FmZScsXG5cdFx0fSxcblx0XTtcblxuXHRjb25zdCB2aWV3ZXI6IE5vdGVUQVZpZXdlciA9IG5ldyBOb3RlVEFWaWV3ZXIoKTtcblx0d2luZG93TWFuYWdlci5hZGRXaW5kb3dzKFt2aWV3ZXJdKTtcblx0dmlld2VyTWFwLnNldChoYXNoLCB2aWV3ZXIpO1xuXG5cdHJldHVybiB2aWV3ZXI7XG59O1xuXG5jb25zdCByZXNldEFsbFZpZXdlciA9ICgpOiB2b2lkID0+IHtcblx0Zm9yIChjb25zdCB2aWV3ZXIgb2Ygdmlld2VyTWFwLnZhbHVlcygpKSB7XG5cdFx0dmlld2VyLmRlc3Ryb3koKTtcblx0fVxuXHR2aWV3ZXJNYXAuY2xlYXIoKTtcblx0dm9pZCB3aW5kb3dNYW5hZ2VyLmNsZWFyV2luZG93cygpO1xufTtcblxuZXhwb3J0IHtnZXRWaWV3ZXIsIHJlc2V0QWxsVmlld2VyfTtcbiIsICIvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1zdHlsZVxuZnVuY3Rpb24gYXNzZXJ0PFQ+KHZhbHVlOiBUIHwgdW5kZWZpbmVkLCB2YWx1ZU5hbWU6IHN0cmluZyk6IGFzc2VydHMgdmFsdWUge1xuXHRpZiAoIXZhbHVlKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKGBBc3NlcnQgRmFpbCwgJHt2YWx1ZU5hbWV9ID09IGZhbHNlLmApO1xuXHR9XG59XG5cbmV4cG9ydCB7YXNzZXJ0fTtcbiIsICJpbXBvcnQge3R5cGUgZ2V0Vmlld2VyfSBmcm9tICcuL3ZpZXdlcic7XG5cbmNvbnN0IHZpZXdlck1hcCA9IG5ldyBNYXA8c3RyaW5nLCBSZXR1cm5UeXBlPHR5cGVvZiBnZXRWaWV3ZXI+PigpO1xuXG5leHBvcnQge3ZpZXdlck1hcH07XG4iLCAiY29uc3QgaW5pdFdpbmRvd01hbmFnZXIgPSAoKTogT08udWkuV2luZG93TWFuYWdlciA9PiB7XG5cdHJldHVybiBuZXcgT08udWkuV2luZG93TWFuYWdlcigpO1xufTtcblxuY29uc3Qgd2luZG93TWFuYWdlcjogT08udWkuV2luZG93TWFuYWdlciA9IGluaXRXaW5kb3dNYW5hZ2VyKCk7XG5cbmV4cG9ydCB7d2luZG93TWFuYWdlcn07XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuXG5sZXQgcG9ydGxldElkOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG5cbmNvbnN0IGluaXRHbG9iYWxNZXRob2RzID0gKCRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50Pik6IHR5cGVvZiBnbG9iYWxNZXRob2RzID0+IHtcblx0Y29uc3QgZ2xvYmFsTWV0aG9kczoge1xuXHRcdGluaXQoKTogdm9pZDtcblx0XHRkZUluaXQoKTogdm9pZDtcblx0fSA9IHtcblx0XHRpbml0KCkge1xuXHRcdFx0LyogZmFrZSAqL1xuXHRcdH0sXG5cdFx0ZGVJbml0KCkge1xuXHRcdFx0LyogZmFrZSAqL1xuXHRcdH0sXG5cdH07XG5cblx0Y29uc3Qge3NraW59ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmIChza2luID09PSAndmVjdG9yJykge1xuXHRcdHBvcnRsZXRJZCA9ICdwLW5vdGVUQSc7XG5cblx0XHRsZXQgJG5vdGVUQVRhYjogSlF1ZXJ5IHwgdW5kZWZpbmVkO1xuXHRcdGdsb2JhbE1ldGhvZHMuaW5pdCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGlmICgkbm90ZVRBVGFiIHx8ICFwb3J0bGV0SWQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXHRcdFx0Y29uc3Qgbm90ZVRBVGFiOiBIVE1MRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXQocG9ydGxldElkKTtcblx0XHRcdGlmICghbm90ZVRBVGFiKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdCRub3RlVEFUYWIgPSAkKG5vdGVUQVRhYik7XG5cdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWVkaWF3aWtpL2NsYXNzLWRvY1xuXHRcdFx0JG5vdGVUQVRhYlxuXHRcdFx0XHQucmVtb3ZlQ2xhc3MoYG13LXBvcnRsZXQtJHtwb3J0bGV0SWR9YClcblx0XHRcdFx0LmFkZENsYXNzKFtgbXctcG9ydGxldC0ke3BvcnRsZXRJZC5yZXBsYWNlKCdwLScsICcnKX1gLCAndmVjdG9yLW1lbnUtdGFicycsICd2ZWN0b3ItbWVudS10YWJzLWxlZ2FjeSddKTtcblx0XHRcdCRib2R5LmZpbmQoJyNwLXZhcmlhbnRzJykuYWZ0ZXIoJG5vdGVUQVRhYik7XG5cdFx0fTtcblx0XHRnbG9iYWxNZXRob2RzLmRlSW5pdCA9ICgpOiB2b2lkID0+IHtcblx0XHRcdGlmICghJG5vdGVUQVRhYikge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0XHQkbm90ZVRBVGFiLmZpbmQoJ3VsJykuZW1wdHkoKTtcblx0XHRcdGlmIChwb3J0bGV0SWQpIHtcblx0XHRcdFx0bXcudXRpbC5oaWRlUG9ydGxldChwb3J0bGV0SWQpO1xuXHRcdFx0fVxuXHRcdH07XG5cdH0gZWxzZSBpZiAoc2tpbiA9PT0gJ3ZlY3Rvci0yMDIyJykge1xuXHRcdHBvcnRsZXRJZCA9ICdwLWFzc29jaWF0ZWQtcGFnZXMnO1xuXG5cdFx0Z2xvYmFsTWV0aG9kcy5kZUluaXQgPSAoKTogdm9pZCA9PiB7XG5cdFx0XHQkYm9keS5maW5kKGAuJHtPUFRJT05TLnBvcnRsZXRDbGFzc31gKS5yZW1vdmUoKTtcblx0XHR9O1xuXHR9XG5cblx0cmV0dXJuIGdsb2JhbE1ldGhvZHM7XG59O1xuXG5leHBvcnQge3BvcnRsZXRJZCwgaW5pdEdsb2JhbE1ldGhvZHN9O1xuIiwgImltcG9ydCB7Z2V0Vmlld2VyLCByZXNldEFsbFZpZXdlcn0gZnJvbSAnLi9tb2R1bGVzL3ZpZXdlcic7XG5pbXBvcnQge2luaXRHbG9iYWxNZXRob2RzLCBwb3J0bGV0SWR9IGZyb20gJy4vbW9kdWxlcy9pbml0R2xvYmFsTWV0aG9kcyc7XG5pbXBvcnQge2NoZWNrQTExeUNvbmZpcm1LZXl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2dlbmVyYXRlUG9ydGxldExpbmt9IGZyb20gJy4vbW9kdWxlcy91dGlsL2dlbmVyYXRlUG9ydGxldExpbmsnO1xuaW1wb3J0IHt3aW5kb3dNYW5hZ2VyfSBmcm9tICcuL21vZHVsZXMvaW5pdFdpbmRvd01hbmFnZXInO1xuXG5sZXQgaXNJbml0OiBib29sZWFuID0gZmFsc2U7XG5cbm13Lmhvb2soJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoZnVuY3Rpb24gbm90ZVRBKCRjb250ZW50KTogdm9pZCB7XG5cdGNvbnN0ICRib2R5OiBKUXVlcnk8SFRNTEJvZHlFbGVtZW50PiA9ICRjb250ZW50LnBhcmVudHMoJ2JvZHknKTtcblxuXHRpZiAoIWlzSW5pdCkge1xuXHRcdGlzSW5pdCA9IHRydWU7XG5cdFx0d2luZG93TWFuYWdlci4kZWxlbWVudC5hcHBlbmRUbygkYm9keSk7XG5cdH1cblxuXHRyZXNldEFsbFZpZXdlcigpO1xuXG5cdGNvbnN0IGdsb2JhbE1ldGhvZHMgPSBpbml0R2xvYmFsTWV0aG9kcygkYm9keSk7XG5cdGdsb2JhbE1ldGhvZHMuZGVJbml0KCk7XG5cdGdsb2JhbE1ldGhvZHMuaW5pdCgpO1xuXG5cdGZvciAoY29uc3QgZWxlbWVudCBvZiAkYm9keS5maW5kKCcubXctaW5kaWNhdG9yW2lkXj1tdy1pbmRpY2F0b3Itbm90ZVRBLV0nKSkge1xuXHRcdGNvbnN0IGhhc2g6IHN0cmluZyA9IGVsZW1lbnQuaWQucmVwbGFjZSgvXm13LWluZGljYXRvci1ub3RlVEEtLywgJycpO1xuXG5cdFx0bGV0ICRlbGVtZW50OiBKUXVlcnkgPSAkKGVsZW1lbnQpO1xuXHRcdGlmIChwb3J0bGV0SWQpIHtcblx0XHRcdCRlbGVtZW50LmhpZGUoKTtcblxuXHRcdFx0Y29uc3QgJHBvcnRsZXRMaW5rOiBKUXVlcnkgfCB1bmRlZmluZWQgPSBnZW5lcmF0ZVBvcnRsZXRMaW5rKGhhc2gpO1xuXHRcdFx0aWYgKCEkcG9ydGxldExpbmspIHtcblx0XHRcdFx0Y29udGludWU7XG5cdFx0XHR9XG5cblx0XHRcdCRlbGVtZW50ID0gJHBvcnRsZXRMaW5rO1xuXHRcdH1cblxuXHRcdGNvbnN0IG9wZW5lckxpc3RlbmVyID0gKGV2ZW50OiBKUXVlcnkuQ2xpY2tFdmVudCB8IEpRdWVyeS5LZXlEb3duRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdGlmICghY2hlY2tBMTF5Q29uZmlybUtleShldmVudCkpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0Z2V0Vmlld2VyKCRib2R5LCBoYXNoKS5vcGVuKCk7XG5cdFx0fTtcblx0XHQkZWxlbWVudC5vbignY2xpY2snLCBvcGVuZXJMaXN0ZW5lcik7XG5cdFx0JGVsZW1lbnQub24oJ2tleWRvd24nLCBvcGVuZXJMaXN0ZW5lcik7XG5cdH1cbn0pO1xuIiwgImltcG9ydCAqIGFzIE9QVElPTlMgZnJvbSAnLi4vLi4vb3B0aW9ucy5qc29uJztcbmltcG9ydCBSZWFjdCBmcm9tICdleHQuZ2FkZ2V0LlJlYWN0JztcbmltcG9ydCB7cG9ydGxldElkfSBmcm9tICcuLi9pbml0R2xvYmFsTWV0aG9kcyc7XG5cbmNvbnN0IGdlbmVyYXRlUG9ydGxldExpbmsgPSAoaGFzaDogc3RyaW5nKTogSlF1ZXJ5IHwgdW5kZWZpbmVkID0+IHtcblx0aWYgKCFwb3J0bGV0SWQpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHRjb25zdCBwb3J0bGV0TGluazogSFRNTExJRWxlbWVudCB8IG51bGwgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKHBvcnRsZXRJZCwgJyMnLCAn5rGJL+a8oicsIGBjYS1ub3RlVEEtJHtoYXNofWApO1xuXHRpZiAoIXBvcnRsZXRMaW5rKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHBvcnRsZXRMaW5rLmNsYXNzTGlzdC5hZGQoJ2NhLW5vdGVUQScpO1xuXG5cdC8vIFRoZSBmb2xsb3dpbmcgY2xhc3NlcyBhcmUgdXNlZCBoZXJlOlxuXHQvLyAqIHNlZSBjb25zdGFudC50c1xuXHQvLyAqIGZvciBtb3JlIGluZm9ybWF0aW9uXG5cdGNvbnN0ICRwb3J0bGV0TGluazogSlF1ZXJ5ID0gJChwb3J0bGV0TGluaykuYWRkQ2xhc3MoYCR7T1BUSU9OUy5wb3J0bGV0Q2xhc3N9YCk7XG5cdCRwb3J0bGV0TGlua1xuXHRcdC5maW5kKCdhJylcblx0XHQuZW1wdHkoKVxuXHRcdC5hcHBlbmQoXG5cdFx0XHQ8ZGl2PlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1tgJHtPUFRJT05TLnBvcnRsZXRDbGFzc31fX2xhYmVsYCwgYCR7T1BUSU9OUy5wb3J0bGV0Q2xhc3N9X19sYWJlbC1oYW5zYF19PlxuXHRcdFx0XHRcdHsn5rGJJ31cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0XHQ8c3BhbiBjbGFzc05hbWU9e1tgJHtPUFRJT05TLnBvcnRsZXRDbGFzc31fX2xhYmVsYCwgYCR7T1BUSU9OUy5wb3J0bGV0Q2xhc3N9X19sYWJlbC1oYW50YF19PlxuXHRcdFx0XHRcdHsn5ryiJ31cblx0XHRcdFx0PC9zcGFuPlxuXHRcdFx0PC9kaXY+XG5cdFx0KTtcblxuXHRyZXR1cm4gJHBvcnRsZXRMaW5rO1xufTtcblxuZXhwb3J0IHtnZW5lcmF0ZVBvcnRsZXRMaW5rfTtcbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQyxJQUFBQSxVQUFXO0FBQ1gsSUFBQUMsZUFBZ0I7O0FDRmpCLElBQUFDLHFCQUFrQkMsUUFBQUMsUUFBQSxrQkFBQSxHQUFBLENBQUE7O0FDQWxCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxvQkFBQSxHQUFtQkYsa0JBQUFHLFVBQVM7TUFDM0JDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREMsVUFBQSxHQUFTTCxrQkFBQUcsVUFBUztNQUNqQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxRQUFBLEdBQU9OLGtCQUFBRyxVQUFTO01BQ2ZDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUcsZUFBZU4sZ0JBQWdCO0FBRXJDLElBQU1PLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEdkJBLElBQU1QLG9CQUFOLGNBQWdDUSxNQUFNO0VBQzdCQztFQUVEQyxZQUFZRCxRQUFrQjtBQUNwQyxVQUFBLG9CQUFBRSxPQUEwQkYsT0FBT0csUUFBTSxvQkFBQSxDQUFvQjtBQUMzRCxTQUFLQyxPQUFPO0FBQ1osU0FBS0osU0FBU0E7RUFDZjtFQUVPSyxXQUFtQjtBQUN6QixVQUFNQyxhQUFxQixLQUFLTixPQUFPRztBQUV2QyxVQUFNSSxVQUNMckIsbUNBQUFzQixRQUFBQyxjQUFDLE9BQUE7TUFBSUMsV0FBVTtJQUFBLEdBQ2R4QixtQ0FBQXNCLFFBQUFDLGNBQUMsS0FBQSxNQUFHWixXQUFXLG1CQUFtQixFQUFFYyxRQUFRLFFBQVFMLFdBQVdNLFNBQVMsQ0FBQyxDQUFFLEdBQzNFMUIsbUNBQUFzQixRQUFBQyxjQUFDLE1BQUEsTUFDQyxLQUFLVCxPQUFPYSxJQUF3QixDQUFDQyxPQUFPQyxVQUM1QzdCLG1DQUFBc0IsUUFBQUMsY0FBQyxNQUFBO01BQUdYLEtBQUtpQjtJQUFBLEdBQ1BELE1BQU1FLE1BQU0sSUFBSSxFQUFFSCxJQUF3QixDQUFDSSxNQUFNQyxXQUNqRGhDLG1DQUFBc0IsUUFBQUMsY0FBQyxLQUFBO01BQUVYLEtBQUtvQjtJQUFBLEdBQVNELElBQUssQ0FDdEIsQ0FDRixDQUNBLENBQ0YsQ0FDRDtBQUVELFVBQU1FLFdBQVdDLEVBQUViLE9BQU87QUFFMUIsV0FBT1k7RUFDUjtBQUNEOztBRWhDQSxJQUFBRSxxQkFBd0JqQyxRQUFBLGlCQUFBO0FBRXhCLElBQU1rQyxPQUFBLEdBQWNELG1CQUFBRSxXQUFBLFVBQUFyQixPQUE0QmxCLE9BQU8sQ0FBRTs7QUNLekQsSUFBTXdDLGlCQUFpQkEsQ0FDdEJDLE1BQ0FDLFFBQWdCLEdBQ2hCQyxpQkFBMkIsQ0FBQSxNQUNPO0FBQ2xDLE1BQUksQ0FBQ0QsT0FBTztBQUNYLFdBQU9OLEVBQUVRLFNBQTRCLEVBQUVDLE9BQU8sSUFBSXRDLGtCQUFrQm9DLGNBQWMsQ0FBQztFQUNwRjtBQUVBLFFBQU1HLFdBQVdWLEVBQUVRLFNBQXNCO0FBRXpDLE9BQUtOLElBQ0hTLE1BQU0sR0FBR04sSUFBSSxFQUNiTyxLQUFNQyxjQUFxQztBQUMzQyxTQUFLSCxTQUFTSSxRQUFRRCxRQUFRO0VBQy9CLENBQUMsRUFDQUUsTUFBT3JCLFdBQWlDO0FBQ3hDc0IsWUFBUXRCLE1BQU1BLEtBQUs7QUFFbkIsUUFBSUEsU0FBUyxPQUFPQSxVQUFVLFlBQVksV0FBV0EsT0FBTztBQUMzRGEscUJBQWVBLGVBQWV4QixNQUFNLElBQUlXLE1BQU11QjtJQUMvQyxPQUFPO0FBQ05WLHFCQUFlQSxlQUFleEIsTUFBTSxJQUFJbUMsT0FBT3hCLEtBQUs7SUFDckQ7QUFFQVUsbUJBQWVDLE1BQU0sRUFBRUMsT0FBT0MsY0FBYyxFQUMxQ0ssS0FBTU8saUJBQW1DO0FBQ3pDLFdBQUtULFNBQVNJLFFBQVFLLFdBQVc7SUFDbEMsQ0FBQyxFQUNBSixNQUFPSyxjQUFvQztBQUMzQyxXQUFLVixTQUFTRCxPQUFPVyxRQUFRO0lBQzlCLENBQUM7RUFDSCxDQUFDO0FBRUYsU0FBT1Y7QUFDUjtBQUVBLElBQU1XLGdCQUFnQkEsSUFBSWhCLFNBQTJEO0FBQ3BGLFNBQU9ELGVBQWVDLElBQUk7QUFDM0I7O0FDNUNBLElBQUFpQixxQkFBa0J2RCxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTs7QUNGbEIsU0FBU3VELE9BQVVDLE9BQXNCQyxXQUFrQztBQUMxRSxNQUFJLENBQUNELE9BQU87QUFDWCxVQUFNLElBQUk3QyxNQUFBLGdCQUFBRyxPQUFzQjJDLFdBQVMsWUFBQSxDQUFZO0VBQ3REO0FBQ0Q7O0FDSEEsSUFBTUMsWUFBWSxvQkFBSUMsSUFBMEM7O0FDRmhFLElBQU1DLG9CQUFvQkEsTUFBMkI7QUFDcEQsU0FBTyxJQUFJQyxHQUFHQyxHQUFHQyxjQUFjO0FBQ2hDO0FBRUEsSUFBTUMsZ0JBQXFDSixrQkFBa0I7O0FISzdELElBQU1LLFlBQVlBLENBQUNDLE9BQWdDQyxTQUFnQztBQUNsRixNQUFJVCxVQUFVVSxJQUFJRCxJQUFJLEdBQUc7QUFDeEIsVUFBTUUsZUFBZVgsVUFBVVksSUFBSUgsSUFBSTtBQUN2Q1osV0FBT2MsY0FBYyxRQUFRO0FBRTdCLFdBQU9BO0VBQ1I7QUFFQSxRQUFNRSxpQkFBeUJMLE1BQU1NLEtBQUEsV0FBQTFELE9BQWdCcUQsSUFBSSxDQUFFO0FBQzNELE1BQUksQ0FBQ0ksZUFBZXhELFFBQVE7QUFDM0IsVUFBTSxJQUFJSixNQUFBLDhCQUFBRyxPQUFvQ3FELE1BQUksSUFBQSxDQUFJO0VBQ3ZEO0FBRUEsUUFBTTtJQUFDTTtJQUFZQztFQUFhLElBQUlDLEdBQUdDLE9BQU9OLElBQUk7RUFFbEQsTUFBTU8scUJBQXFCaEIsR0FBR0MsR0FBR2dCLGNBQWM7SUFDdENDO0lBQ0FDO0lBQ0FDO0lBQ0FDO0lBQ0FoQjtJQUNSLE9BQWVpQjtJQUNmLE9BQWVDO0lBRVJ2RSxjQUFjO0FBQ3BCLFlBQU07UUFDTHdFLE1BQU07TUFDUCxDQUFDO0FBRUQsV0FBS04sZUFBZTtBQUNwQixXQUFLRyxlQUFlbEQsRUFBRXNCLG1DQUFBbEMsUUFBQUMsY0FBQyxPQUFBLElBQUksQ0FBRTtBQUU3QixXQUFLNEQsbUJBQW1CLElBQUlLLGlCQUFpQixLQUFLQyxXQUFXQyxLQUFLLElBQUksQ0FBQztBQUN2RSxXQUFLUCxpQkFBaUJRLFFBQVEsS0FBS1AsYUFBYVosSUFBSSxDQUFDLEdBQWtCO1FBQ3RFb0IsV0FBVztRQUNYQyxTQUFTO01BQ1YsQ0FBQztJQUNGO0lBRWdCQyxhQUFtQjtBQUNsQyxZQUFNQSxXQUFXO0FBRWpCLFlBQU1DLGNBQWlDLElBQUloQyxHQUFHQyxHQUFHZ0MsWUFBWTtRQUM1REMsVUFBVTtRQUNWQyxRQUFRO01BQ1QsQ0FBQztBQUVELFdBQUtkLGFBQWFlLFNBQVNKLFlBQVk5RCxRQUFRO0FBQy9DOEQsa0JBQVk5RCxTQUFTa0UsU0FBUyxLQUFLL0IsS0FBZTtBQUVsRCxhQUFPO0lBQ1I7SUFFZ0JnQyxnQkFBZ0JDLE1BQWdEO0FBQy9FLGFBQU8sTUFBTUQsZ0JBQWdCQyxJQUFJLEVBQUVDLEtBQUssTUFBWTtBQUNuRCxhQUFLLEtBQUtDLGNBQWM7QUFDeEIsYUFBSyxLQUFLQyxjQUFjLE1BQU07TUFDL0IsQ0FBQztJQUNGO0lBRWdCQyxpQkFBaUJDLFFBQWdDO0FBQ2hFLFlBQU1DLGVBQXdCRCxXQUFXO0FBRXpDLGFBQ0MsTUFDRUQsaUJBQWlCQyxNQUFNLEVBRXZCSixLQUFLLE1BQU07QUFDWCxZQUFJSyxjQUFjO0FBQ2pCLGlCQUFPLEtBQUtKLGNBQWM7UUFDM0I7TUFDRCxDQUFDLEVBQ0FELEtBQUssTUFBTTtBQUNYLFlBQUlLLGdCQUFnQjVCLGFBQWFNLFdBQVc7QUFDM0MsaUJBQU9OLGFBQWFNO1FBQ3JCO0FBQ0EsZUFBTyxNQUFNb0IsaUJBQWlCQyxNQUFNLEVBQUVFLFFBQVE7TUFDL0MsQ0FBQztJQUVKO0lBRU9DLFVBQWdCO0FBQ3RCLFdBQUsxQixpQkFBaUIyQixXQUFXO0lBQ2xDO0lBRUEsT0FBZUMscUJBQW1EO0FBQ2pFLFVBQUloQyxhQUFhTyxpQkFBaUI7QUFDakMsZUFBT3BELEVBQUVRLFNBQWlCLEVBQUVNLFFBQVErQixhQUFhTyxlQUFlO01BQ2pFO0FBRUEsWUFBTTBCLGVBQXVCdkMsZUFBZUMsS0FBSyxlQUFlO0FBQ2hFLFlBQU11QyxjQUFzQnRDLFdBQVdsRCxRQUFRLE1BQU0sR0FBRztBQUN4RCxVQUFJeUYsV0FBbUI7QUFFdkIsWUFBTUMsZ0JBQWdCakYsRUFBRVEsU0FBc0I7QUFFOUMsVUFBSXNFLGFBQWEvRixRQUFRO0FBQ3hCLGNBQU1tRyxZQUFnQ0osYUFBYUssS0FBSyxrQkFBa0I7QUFDMUU1RCxlQUFPMkQsV0FBVyxXQUFXO0FBRTdCLFlBQUlFLFlBQWdDTixhQUFhSyxLQUFLLGtCQUFrQjtBQUN4RSxZQUFJQyxXQUFXO0FBQ2RBLHNCQUFBLElBQUF0RyxPQUFnQnNHLFdBQVMsR0FBQTtRQUMxQixPQUFPO0FBQ05BLHNCQUFZO1FBQ2I7QUFFQUosb0JBQUEsb0NBQUFsRyxPQUFnRGlHLGFBQVcsdUJBQUE7QUFDM0RDLG9CQUFZO0FBQ1pBLG9CQUFBLGVBQUFsRyxPQUEyQm9HLFdBQVMsSUFBQSxFQUFBcEcsT0FBS3NHLFdBQVMsSUFBQTtBQUNsREosb0JBQUEsZUFBQWxHLE9BQTJCaUcsYUFBVyxjQUFBLEVBQUFqRyxPQUFlb0csV0FBUyxNQUFBO0FBRTlELGFBQUtELGNBQWNuRSxRQUFRO01BQzVCLE9BQU87QUFDTk8sc0JBQUEsdUJBQUF2QyxPQUFxQ2lHLGFBQVcsSUFBQSxHQUFNO1VBQ3JETSxPQUFPTjtVQUNQTyxTQUFTO1FBQ1YsQ0FBQyxFQUNDMUUsS0FBTTJFLGdCQUFrQztBQUN4QyxnQkFBTUMsY0FBc0J4RixFQUFFQSxFQUFFeUYsVUFBVUYsVUFBOEIsQ0FBQyxFQUFFL0MsS0FDMUUsb0JBQ0Q7QUFDQSxjQUFJZ0QsWUFBWXpHLFFBQVE7QUFDdkJpRyx3QkFBWTtBQUVaLGtCQUFNVSxjQUF3QyxDQUFDO0FBQy9DLGtCQUFNQyxjQUE2QyxDQUFDO0FBQUEsZ0JBQUFDLGFBQUFDLDJCQUU5QkwsWUFBWU0sU0FBUyxDQUFBLEdBQUFDO0FBQUEsZ0JBQUE7QUFBM0MsbUJBQUFILFdBQUFJLEVBQUEsR0FBQSxFQUFBRCxTQUFBSCxXQUFBSyxFQUFBLEdBQUFDLFFBQThDO0FBQUEsc0JBQW5DL0csVUFBQTRHLE9BQUF2RTtBQUNWLHNCQUFNekIsV0FBV0MsRUFBRWIsT0FBTztBQUUxQixzQkFBTW1HLFVBQThCdkYsU0FBU29GLEtBQUssZ0NBQWdDO0FBQ2xGNUQsdUJBQU8rRCxTQUFTLFNBQVM7QUFFekIsc0JBQU1hLE9BQWVwRyxTQUFTb0csS0FBSyxFQUFFQyxLQUFLO0FBQzFDVCw0QkFBWUwsT0FBTyxJQUFJYTtBQUV2QixzQkFBTUUsbUJBQXlDWCxZQUFZUyxJQUFJO0FBQy9ELG9CQUFJRSxrQkFBa0I7QUFDckJBLG1DQUFpQkEsaUJBQWlCdEgsTUFBTSxJQUFJdUc7Z0JBQzdDLE9BQU87QUFDTkksOEJBQVlTLElBQUksSUFBSSxDQUFDYixPQUFPO2dCQUM3QjtjQUNEO1lBQUEsU0FBQWdCLEtBQUE7QUFBQVYseUJBQUFXLEVBQUFELEdBQUE7WUFBQSxVQUFBO0FBQUFWLHlCQUFBWSxFQUFBO1lBQUE7QUFFQSxrQkFBTUMsaUJBQTRDZCxZQUFZakQsYUFBdUI7QUFFckYsa0JBQU1nRSxhQUF1QixDQUFBO0FBQzdCLHVCQUFXaEksT0FBT2lILGFBQWE7QUFDOUIsa0JBQUksQ0FBQ2dCLE9BQU9DLE9BQU9qQixhQUFhakgsR0FBRyxHQUFHO0FBQ3JDO2NBQ0Q7QUFFQSxvQkFBTXlILE9BQWtDUixZQUFZakgsR0FBRztBQUN2RCxrQkFBSXlILFNBQVMsUUFBUUEsU0FBUyxRQUFXO0FBQ3hDO2NBQ0Q7QUFFQSxvQkFBTVUsV0FBaUNuQixZQUFZUyxJQUFJO0FBQ3ZELGtCQUFJLENBQUNVLFVBQVU7QUFDZDtjQUNEO0FBQUEsa0JBQUFDLGFBQUFqQiwyQkFFc0JnQixRQUFBLEdBQUFFO0FBQUEsa0JBQUE7QUFBdEIscUJBQUFELFdBQUFkLEVBQUEsR0FBQSxFQUFBZSxTQUFBRCxXQUFBYixFQUFBLEdBQUFDLFFBQWdDO0FBQUEsd0JBQXJCWixVQUFBeUIsT0FBQXZGO0FBQ1ZtRSw4QkFBWUwsT0FBTyxJQUFJO2dCQUN4QjtjQUFBLFNBQUFnQixLQUFBO0FBQUFRLDJCQUFBUCxFQUFBRCxHQUFBO2NBQUEsVUFBQTtBQUFBUSwyQkFBQU4sRUFBQTtjQUFBO0FBRUEsb0JBQU1RLGVBQXVCSCxTQUMzQnBILElBQUs2RixhQUFBLCtCQUFBeEcsT0FBMkR3RyxTQUFPLE1BQUEsQ0FBTSxFQUM3RTJCLEtBQUssR0FBRztBQUNWUCx5QkFBV0EsV0FBVzNILE1BQU0sSUFBQSxHQUFBRCxPQUFPa0ksY0FBWSxPQUFBLEVBQUFsSSxPQUFRcUgsTUFBSSxJQUFBO1lBQzVEO0FBRUEsa0JBQU1lLG1CQUEyQjtBQUNqQ2xDLHdCQUFBLEdBQUFsRyxPQUFlb0ksZ0JBQWdCLEVBQUFwSSxPQUFHNEgsV0FBV08sS0FBS0MsZ0JBQWdCLENBQUM7QUFDbkVsQyx3QkFBQSxpQkFBQWxHLE9BQTZCaUcsYUFBVyxlQUFBLEVBQUFqRyxPQUFnQjJILGdCQUFjLE1BQUE7VUFDdkU7QUFFQSxlQUFLeEIsY0FBY25FLFFBQVE7UUFDNUIsQ0FBQyxFQUNBQyxNQUFPckIsV0FBbUM7QUFDMUMsZUFBS3VGLGNBQWN4RSxPQUFPZixLQUFLO1FBQ2hDLENBQUM7TUFDSDtBQUVBLFlBQU1nQixXQUFXVixFQUFFUSxTQUFzQjtBQUV6Q3lFLG9CQUNFckUsS0FBSyxNQUFZO0FBQ2pCLGNBQU11RyxnQkFBd0I1RSxlQUFlQyxLQUFLLHNDQUFzQztBQUFBLFlBQUE0RSxhQUFBdkIsMkJBQ2xFc0IsYUFBQSxHQUFBRTtBQUFBLFlBQUE7QUFBdEIsZUFBQUQsV0FBQXBCLEVBQUEsR0FBQSxFQUFBcUIsU0FBQUQsV0FBQW5CLEVBQUEsR0FBQUMsUUFBcUM7QUFBQSxrQkFBMUIvRyxVQUFBa0ksT0FBQTdGO0FBQ1Ysa0JBQU16QixXQUFtQkMsRUFBRWIsT0FBTztBQUNsQyxvQkFBUVksU0FBU29GLEtBQUssMEJBQTBCLEdBQUE7Y0FDL0MsS0FBSztBQUNKSCw0QkFBQSxZQUFBbEcsT0FBd0JpQixTQUFTb0YsS0FBSyxtQkFBbUIsR0FBQyxNQUFBO0FBQzFEO2NBQ0QsS0FBSztBQUNKSCw0QkFBQSxpQ0FBQWxHLE9BQTZDaUIsU0FBU29GLEtBQUssbUJBQW1CLEdBQUMsTUFBQTtBQUMvRTtjQUNELEtBQUs7QUFDSkgsNEJBQUEsZ0JBQUFsRyxPQUE0QmlCLFNBQVNvRixLQUFLLG1CQUFtQixHQUFDLFNBQUE7QUFDOURILDRCQUFBLDBCQUFBbEcsT0FBc0NpQixTQUFTb0YsS0FBSyxtQkFBbUIsR0FBQyxXQUFBLEVBQUFyRyxPQUFZaUIsU0FBU29GLEtBQUssbUJBQW1CLEdBQUMsT0FBQTtBQUN0SDtjQUNEO0FBQ0NILDRCQUFBLGFBQUFsRyxPQUF5QmlCLFNBQVNvRixLQUFLLG1CQUFtQixHQUFDLE1BQUEsRUFBQXJHLE9BQU9pQixTQUFTb0YsS0FBSywwQkFBMEIsR0FBQyxLQUFBO1lBQzdHO1VBQ0Q7UUFBQSxTQUFBbUIsS0FBQTtBQUFBYyxxQkFBQWIsRUFBQUQsR0FBQTtRQUFBLFVBQUE7QUFBQWMscUJBQUFaLEVBQUE7UUFBQTtBQUVBLGNBQU1jLGVBQXVCL0UsZUFBZUMsS0FBSyxlQUFlO0FBQ2hFLFlBQUk4RSxhQUFhdkksUUFBUTtBQUN4QmlHLHNCQUFBLG9DQUFBbEcsT0FBZ0RpRyxhQUFXLHVCQUFBO0FBQzNEQyxzQkFBWTtBQUVaLGdCQUFNdUMsZ0JBQWdCRCxhQUFheEIsU0FBUyxxQkFBcUI7QUFBQSxjQUFBMEIsYUFBQTNCLDJCQUMzQzBCLGFBQUEsR0FBQUU7QUFBQSxjQUFBO0FBQXRCLGlCQUFBRCxXQUFBeEIsRUFBQSxHQUFBLEVBQUF5QixTQUFBRCxXQUFBdkIsRUFBQSxHQUFBQyxRQUFxQztBQUFBLG9CQUExQi9HLFVBQUFzSSxPQUFBakc7QUFDVixvQkFBTXpCLFdBQW1CQyxFQUFFYixPQUFPO0FBRWxDLGtCQUFJdUksWUFBZ0MzSCxTQUFTb0YsS0FBSyxrQkFBa0I7QUFDcEUsa0JBQUl1QyxXQUFXO0FBQ2RBLDRCQUFBLElBQUE1SSxPQUFnQjRJLFdBQVMsR0FBQTtjQUMxQixPQUFPO0FBQ05BLDRCQUFZO2NBQ2I7QUFFQSxvQkFBTUMsWUFBZ0M1SCxTQUFTb0YsS0FBSyxrQkFBa0I7QUFDdEVILDBCQUFBLFNBQUFsRyxPQUFxQjZJLFdBQVMsSUFBQSxFQUFBN0ksT0FBSzRJLFdBQVMsVUFBQSxFQUFBNUksT0FBVzZJLFdBQVMsTUFBQTtZQUNqRTtVQUFBLFNBQUFyQixLQUFBO0FBQUFrQix1QkFBQWpCLEVBQUFELEdBQUE7VUFBQSxVQUFBO0FBQUFrQix1QkFBQWhCLEVBQUE7VUFBQTtRQUNEO0FBRUF4QixvQkFBWTtBQUVabkMscUJBQWFPLGtCQUFrQjRCO0FBRS9CLGFBQUt0RSxTQUFTSSxRQUFRa0UsUUFBUTtNQUMvQixDQUFDLEVBQ0FqRSxNQUFPckIsV0FBbUM7QUFDMUMsYUFBS2dCLFNBQVNELE9BQU9mLEtBQUs7TUFDM0IsQ0FBQztBQUVGLGFBQU9nQjtJQUNSO0lBRVFrSCxZQUFZO0FBQ25CLFVBQUksS0FBSzdFLGNBQWM7QUFDdEIsZUFBTy9DLEVBQUVRLFNBQXNCLEVBQUVNLFFBQVE7TUFDMUM7QUFFQSxXQUFLb0MsYUFBYTJFLE1BQU0sRUFBRUMsT0FBT3hHLG1DQUFBbEMsUUFBQUMsY0FBQyxLQUFBLE1BQUdaLFdBQVcsU0FBUyxDQUFFLENBQUk7QUFFL0QsYUFBT29FLGFBQWFnQyxtQkFBbUIsRUFDckNqRSxLQUFNb0UsY0FDTjNELGNBQWMyRCxVQUE4QjtRQUMzQ0ssT0FBTztRQUNQQyxTQUFTNUM7TUFDVixDQUFDLENBQ0YsRUFDQzlCLEtBQU1tSCxnQkFBa0M7QUFJeEMsYUFBSzdFLGFBQ0gyRSxNQUFNLEVBQ05HLEtBQUtELFVBQThCLEVBQ25DRSxTQUFBLEdBQUFuSixPQUFvQmpCLGNBQVksU0FBQSxDQUFTO0FBRzFDLGFBQUtxRixhQUFhVixLQUFLLGlCQUFpQixFQUN2QzBGLGdCQUFnQjtBQUVsQixhQUFLM0UsV0FBVztBQUNoQixhQUFLUixlQUFlO01BQ3JCLENBQUMsRUFDQWhDLE1BQU9yQixXQUFvRDtBQUMzRCxZQUFJQSxpQkFBaUJ2QixtQkFBbUI7QUFDdkMsZ0JBQU0sSUFBSTBELEdBQUdDLEdBQUduRCxNQUFNZSxNQUFNVCxTQUFTLEdBQUc7WUFDdkNrSixhQUFhO1VBQ2QsQ0FBQztRQUNGLE9BQU87QUFDTixnQkFBTSxJQUFJdEcsR0FBR0MsR0FBR25ELE1BQU11QyxPQUFPeEIsS0FBSyxHQUFHO1lBQ3BDeUksYUFBYTtVQUNkLENBQUM7UUFDRjtNQUNELENBQUM7SUFDSDtJQUVROUQsZ0JBQWdCO0FBQ3ZCLFVBQUksS0FBS3JCLG1CQUFtQixRQUFXO0FBQ3RDLGFBQUtBLGlCQUFpQixLQUFLNEUsVUFBVTtBQUNyQyxlQUFPL0UsYUFBYU07QUFFcEIsY0FBTWlGLGtCQUFrQnBJLEVBQUVRLFNBQXNCO0FBQ2hELGFBQU0sS0FBS3dDLGVBQ1RwQyxLQUFNQyxjQUFnQztBQUN0QyxlQUFLdUgsZ0JBQWdCdEgsUUFBUUQsUUFBUTtRQUN0QyxDQUFDLEVBQ0FFLE1BQU9yQixXQUE4QztBQUNyRCxjQUFJQSxpQkFBaUJtQyxHQUFHQyxHQUFHbkQsT0FBTztBQUNqQ2tFLHlCQUFhTSxZQUFZekQ7VUFDMUIsT0FBTztBQUNOLGlCQUFLMEksZ0JBQWdCM0gsT0FBT2YsS0FBSztVQUNsQztRQUNELENBQUMsRUFDQTJJLE9BQU8sTUFBWTtBQUNuQixpQkFBTyxLQUFLckY7UUFDYixDQUFDO0FBRUYsZUFBT29GO01BQ1I7QUFFQSxZQUFNMUgsV0FBV1YsRUFBRVEsU0FBc0I7QUFDekMsV0FBTSxLQUFLd0MsZUFDVHBDLEtBQU1DLGNBQWdDO0FBQ3RDLGFBQUtILFNBQVNJLFFBQVFELFFBQVE7TUFDL0IsQ0FBQyxFQUNBRSxNQUFPckIsV0FBOEM7QUFDckQsWUFBSUEsaUJBQWlCbUMsR0FBR0MsR0FBR25ELE9BQU87QUFDakNrRSx1QkFBYU0sWUFBWXpEO1FBQzFCLE9BQU87QUFDTixlQUFLZ0IsU0FBU0QsT0FBT2YsS0FBSztRQUMzQjtNQUNELENBQUMsRUFDQTJJLE9BQU8sTUFBWTtBQUNuQixlQUFPLEtBQUtyRjtNQUNiLENBQUM7QUFFRixhQUFPdEM7SUFDUjtFQUNEO0FBRUFtQyxlQUFheUYsU0FBUztJQUNyQixHQUFHekcsR0FBR0MsR0FBR2dCLGNBQWN3RjtFQUN4QjtBQUNBekYsZUFBYXlGLE9BQU90SixPQUFBLGdCQUFBRixPQUF1QnFELElBQUk7QUFDL0NVLGVBQWF5RixPQUFPakQsUUFBUTVHLFdBQVcsT0FBTztBQUM5Q29FLGVBQWF5RixPQUFPQyxVQUFVLENBQzdCO0lBQ0NDLE9BQU83RixHQUFHOEYsSUFBSSw2QkFBNkI7SUFDM0NDLE9BQU87RUFDUixDQUFBO0FBR0QsUUFBTUMsU0FBdUIsSUFBSTlGLGFBQWE7QUFDOUNiLGdCQUFjNEcsV0FBVyxDQUFDRCxNQUFNLENBQUM7QUFDakNqSCxZQUFVbUgsSUFBSTFHLE1BQU13RyxNQUFNO0FBRTFCLFNBQU9BO0FBQ1I7QUFFQSxJQUFNRyxpQkFBaUJBLE1BQVk7QUFBQSxNQUFBQyxhQUFBbEQsMkJBQ2JuRSxVQUFVc0gsT0FBTyxDQUFBLEdBQUFDO0FBQUEsTUFBQTtBQUF0QyxTQUFBRixXQUFBL0MsRUFBQSxHQUFBLEVBQUFpRCxTQUFBRixXQUFBOUMsRUFBQSxHQUFBQyxRQUF5QztBQUFBLFlBQTlCeUMsU0FBQU0sT0FBQXpIO0FBQ1ZtSCxhQUFPaEUsUUFBUTtJQUNoQjtFQUFBLFNBQUEyQixLQUFBO0FBQUF5QyxlQUFBeEMsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQXlDLGVBQUF2QyxFQUFBO0VBQUE7QUFDQTlFLFlBQVV3SCxNQUFNO0FBQ2hCLE9BQUtsSCxjQUFjbUgsYUFBYTtBQUNqQzs7QUl6V0EsSUFBSUM7QUFFSixJQUFNQyxvQkFBcUJuSCxXQUF5RDtBQUNuRixRQUFNb0gsZ0JBR0Y7SUFDSEMsT0FBTztJQUVQO0lBQ0FDLFNBQVM7SUFFVDtFQUNEO0FBRUEsUUFBTTtJQUFDQztFQUFJLElBQUk5RyxHQUFHQyxPQUFPTixJQUFJO0FBRTdCLE1BQUltSCxTQUFTLFVBQVU7QUFDdEJMLGdCQUFZO0FBRVosUUFBSU07QUFDSkosa0JBQWNDLE9BQU8sTUFBWTtBQUNoQyxVQUFJRyxjQUFjLENBQUNOLFdBQVc7QUFDN0I7TUFDRDtBQUNBLFlBQU1PLFlBQWdDaEgsR0FBR2lILEtBQUtDLFdBQVdULFNBQVM7QUFDbEUsVUFBSSxDQUFDTyxXQUFXO0FBQ2Y7TUFDRDtBQUNBRCxtQkFBYTFKLEVBQUUySixTQUFTO0FBRXhCRCxpQkFDRUksWUFBQSxjQUFBaEwsT0FBMEJzSyxTQUFTLENBQUUsRUFDckNuQixTQUFTLENBQUEsY0FBQW5KLE9BQWVzSyxVQUFVN0osUUFBUSxNQUFNLEVBQUUsQ0FBQyxHQUFJLG9CQUFvQix5QkFBeUIsQ0FBQztBQUN2RzJDLFlBQU1NLEtBQUssYUFBYSxFQUFFdUgsTUFBTUwsVUFBVTtJQUMzQztBQUNBSixrQkFBY0UsU0FBUyxNQUFZO0FBQ2xDLFVBQUksQ0FBQ0UsWUFBWTtBQUNoQjtNQUNEO0FBQ0FBLGlCQUFXbEgsS0FBSyxJQUFJLEVBQUVxRixNQUFNO0FBQzVCLFVBQUl1QixXQUFXO0FBQ2R6RyxXQUFHaUgsS0FBS0ksWUFBWVosU0FBUztNQUM5QjtJQUNEO0VBQ0QsV0FBV0ssU0FBUyxlQUFlO0FBQ2xDTCxnQkFBWTtBQUVaRSxrQkFBY0UsU0FBUyxNQUFZO0FBQ2xDdEgsWUFBTU0sS0FBQSxJQUFBMUQsT0FBaUJqQixZQUFZLENBQUUsRUFBRW9NLE9BQU87SUFDL0M7RUFDRDtBQUVBLFNBQU9YO0FBQ1I7O0FDdERBLElBQUFZLHFCQUFrQ2xNLFFBQUEsaUJBQUE7O0FDRGxDLElBQUFtTSxxQkFBa0JwTSxRQUFBQyxRQUFBLGtCQUFBLEdBQUEsQ0FBQTtBQUdsQixJQUFNb00sc0JBQXVCakksVUFBcUM7QUFDakUsTUFBSSxDQUFDaUgsV0FBVztBQUNmO0VBQ0Q7QUFFQSxRQUFNaUIsY0FBb0MxSCxHQUFHaUgsS0FBS1UsZUFBZWxCLFdBQVcsS0FBSyxPQUFBLGFBQUF0SyxPQUFvQnFELElBQUksQ0FBRTtBQUMzRyxNQUFJLENBQUNrSSxhQUFhO0FBQ2pCO0VBQ0Q7QUFDQUEsY0FBWUUsVUFBVUMsSUFBSSxXQUFXO0FBS3JDLFFBQU1DLGVBQXVCekssRUFBRXFLLFdBQVcsRUFBRXBDLFNBQUEsR0FBQW5KLE9BQW9CakIsWUFBWSxDQUFFO0FBQzlFNE0sZUFDRWpJLEtBQUssR0FBRyxFQUNScUYsTUFBTSxFQUNOQyxPQUNBcUMsbUNBQUEvSyxRQUFBQyxjQUFDLE9BQUEsTUFDQThLLG1DQUFBL0ssUUFBQUMsY0FBQyxRQUFBO0lBQUtDLFdBQVcsQ0FBQSxHQUFBUixPQUFZakIsY0FBWSxTQUFBLEdBQUEsR0FBQWlCLE9BQXNCakIsY0FBWSxjQUFBLENBQUE7RUFBYyxHQUN2RixHQUNGLEdBQ0FzTSxtQ0FBQS9LLFFBQUFDLGNBQUMsUUFBQTtJQUFLQyxXQUFXLENBQUEsR0FBQVIsT0FBWWpCLGNBQVksU0FBQSxHQUFBLEdBQUFpQixPQUFzQmpCLGNBQVksY0FBQSxDQUFBO0VBQWMsR0FDdkYsR0FDRixDQUNELENBQ0Q7QUFFRCxTQUFPNE07QUFDUjs7QUQ1QkEsSUFBSUMsU0FBa0I7QUFFdEIvSCxHQUFHZ0ksS0FBSyxrQkFBa0IsRUFBRUgsSUFBSSxTQUFTSSxPQUFPQyxVQUFnQjtBQUMvRCxRQUFNM0ksUUFBaUMySSxTQUFTQyxRQUFRLE1BQU07QUFFOUQsTUFBSSxDQUFDSixRQUFRO0FBQ1pBLGFBQVM7QUFDVDFJLGtCQUFjakMsU0FBU2tFLFNBQVMvQixLQUFLO0VBQ3RDO0FBRUE0RyxpQkFBZTtBQUVmLFFBQU1RLGdCQUFnQkQsa0JBQWtCbkgsS0FBSztBQUM3Q29ILGdCQUFjRSxPQUFPO0FBQ3JCRixnQkFBY0MsS0FBSztBQUFBLE1BQUF3QixhQUFBbEYsMkJBRUczRCxNQUFNTSxLQUFLLHlDQUF5QyxDQUFBLEdBQUF3STtBQUFBLE1BQUE7QUFBMUUsU0FBQUQsV0FBQS9FLEVBQUEsR0FBQSxFQUFBZ0YsU0FBQUQsV0FBQTlFLEVBQUEsR0FBQUMsUUFBNkU7QUFBQSxZQUFsRS9HLFVBQUE2TCxPQUFBeEo7QUFDVixZQUFNVyxPQUFlaEQsUUFBUThMLEdBQUcxTCxRQUFRLHlCQUF5QixFQUFFO0FBRW5FLFVBQUlRLFdBQW1CQyxFQUFFYixPQUFPO0FBQ2hDLFVBQUlpSyxXQUFXO0FBQ2RySixpQkFBU21MLEtBQUs7QUFFZCxjQUFNVCxlQUFtQ0wsb0JBQW9CakksSUFBSTtBQUNqRSxZQUFJLENBQUNzSSxjQUFjO0FBQ2xCO1FBQ0Q7QUFFQTFLLG1CQUFXMEs7TUFDWjtBQUVBLFlBQU1VLGlCQUFrQkMsV0FBeUQ7QUFDaEYsWUFBSSxFQUFBLEdBQUNsQixtQkFBQW1CLHFCQUFvQkQsS0FBSyxHQUFHO0FBQ2hDO1FBQ0Q7QUFFQUEsY0FBTUUsZUFBZTtBQUNyQnJKLGtCQUFVQyxPQUFPQyxJQUFJLEVBQUVvSixLQUFLO01BQzdCO0FBQ0F4TCxlQUFTeUwsR0FBRyxTQUFTTCxjQUFjO0FBQ25DcEwsZUFBU3lMLEdBQUcsV0FBV0wsY0FBYztJQUN0QztFQUFBLFNBQUE3RSxLQUFBO0FBQUF5RSxlQUFBeEUsRUFBQUQsR0FBQTtFQUFBLFVBQUE7QUFBQXlFLGVBQUF2RSxFQUFBO0VBQUE7QUFDRCxDQUFDOyIsCiAgIm5hbWVzIjogWyJ2ZXJzaW9uIiwgInBvcnRsZXRDbGFzcyIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiX190b0VTTSIsICJyZXF1aXJlIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImdldEkxOG5NZXNzYWdlcyIsICJBcGlSZXRyeUZhaWxFcnJvciIsICJsb2NhbGl6ZSIsICJlbiIsICJMb2FkaW5nIiwgIlRpdGxlIiwgImkxOG5NZXNzYWdlcyIsICJnZXRNZXNzYWdlIiwgImtleSIsICJFcnJvciIsICJlcnJvcnMiLCAiY29uc3RydWN0b3IiLCAiY29uY2F0IiwgImxlbmd0aCIsICJuYW1lIiwgInRvSlF1ZXJ5IiwgImVycm9yQ291bnQiLCAiZWxlbWVudCIsICJkZWZhdWx0IiwgImNyZWF0ZUVsZW1lbnQiLCAiY2xhc3NOYW1lIiwgInJlcGxhY2UiLCAidG9TdHJpbmciLCAibWFwIiwgImVycm9yIiwgImluZGV4IiwgInNwbGl0IiwgImxpbmUiLCAibnVtYmVyIiwgIiRlbGVtZW50IiwgIiQiLCAiaW1wb3J0X2V4dF9nYWRnZXQzIiwgImFwaSIsICJpbml0TXdBcGkiLCAicGFyc2VXaXRoUmV0cnkiLCAiYXJncyIsICJjb3VudCIsICJwcmV2aW91c0Vycm9ycyIsICJEZWZlcnJlZCIsICJyZWplY3QiLCAiZGVmZXJyZWQiLCAicGFyc2UiLCAidGhlbiIsICJyZXNwb25zZSIsICJyZXNvbHZlIiwgImNhdGNoIiwgImNvbnNvbGUiLCAic3RhY2siLCAiU3RyaW5nIiwgIm5ld1Jlc3BvbnNlIiwgIm5ld0Vycm9yIiwgInBhcnNlV2lraXRleHQiLCAiaW1wb3J0X2V4dF9nYWRnZXQ0IiwgImFzc2VydCIsICJ2YWx1ZSIsICJ2YWx1ZU5hbWUiLCAidmlld2VyTWFwIiwgIk1hcCIsICJpbml0V2luZG93TWFuYWdlciIsICJPTyIsICJ1aSIsICJXaW5kb3dNYW5hZ2VyIiwgIndpbmRvd01hbmFnZXIiLCAiZ2V0Vmlld2VyIiwgIiRib2R5IiwgImhhc2giLCAiaGFzIiwgInN0b3JlZFZpZXdlciIsICJnZXQiLCAiJHRhcmdldEVsZW1lbnQiLCAiZmluZCIsICJ3Z1BhZ2VOYW1lIiwgIndnVXNlclZhcmlhbnQiLCAibXciLCAiY29uZmlnIiwgIk5vdGVUQVZpZXdlciIsICJQcm9jZXNzRGlhbG9nIiwgImRhdGFJc0xvYWRlZCIsICJleGVjdXRlUHJvbWlzZSIsICJtdXRhdGlvbk9ic2VydmVyIiwgIiRyZWFsQ29udGVudCIsICJsYXN0RXJyb3IiLCAibm90ZVRBUGFyc2VUZXh0IiwgInNpemUiLCAiTXV0YXRpb25PYnNlcnZlciIsICJ1cGRhdGVTaXplIiwgImJpbmQiLCAib2JzZXJ2ZSIsICJjaGlsZExpc3QiLCAic3VidHJlZSIsICJpbml0aWFsaXplIiwgInBhbmVsTGF5b3V0IiwgIlBhbmVsTGF5b3V0IiwgImV4cGFuZGVkIiwgInBhZGRlZCIsICJhcHBlbmRUbyIsICJnZXRTZXR1cFByb2Nlc3MiLCAiZGF0YSIsICJuZXh0IiwgImRvRXhlY3V0ZVdyYXAiLCAiZXhlY3V0ZUFjdGlvbiIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgImFjdGlvbiIsICJpc01haW5BY3Rpb24iLCAiZXhlY3V0ZSIsICJkZXN0cm95IiwgImRpc2Nvbm5lY3QiLCAiZ2V0Tm90ZVRBUGFyc2VUZXh0IiwgIiRub3RlVEF0aXRsZSIsICJhY3R1YWxUaXRsZSIsICJ3aWtpdGV4dCIsICJ0aXRsZURlZmVycmVkIiwgInRpdGxlQ29udiIsICJhdHRyIiwgInRpdGxlRGVzYyIsICJ0aXRsZSIsICJ2YXJpYW50IiwgInJlc3VsdEh0bWwiLCAiJG11bHRpVGl0bGUiLCAicGFyc2VIVE1MIiwgInRleHRWYXJpYW50IiwgInZhcmlhbnRUZXh0IiwgIl9pdGVyYXRvcjIiLCAiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCAiY2hpbGRyZW4iLCAiX3N0ZXAyIiwgInMiLCAibiIsICJkb25lIiwgInRleHQiLCAidHJpbSIsICJ0ZXh0VmFyaWFudEFycmF5IiwgImVyciIsICJlIiwgImYiLCAidGl0bGVDb252ZXJ0ZWQiLCAibXVsdGlUaXRsZSIsICJPYmplY3QiLCAiaGFzT3duIiwgInZhcmlhbnRzIiwgIl9pdGVyYXRvcjMiLCAiX3N0ZXAzIiwgInZhcmlhbnRzTmFtZSIsICJqb2luIiwgInN1Ykl0ZW1TZXBhcmF0b3IiLCAiJG5vdGVUQWdyb3VwcyIsICJfaXRlcmF0b3I0IiwgIl9zdGVwNCIsICIkbm90ZVRBbG9jYWwiLCAiJG5vdGVUQWxvY2FscyIsICJfaXRlcmF0b3I1IiwgIl9zdGVwNSIsICJsb2NhbERlc2MiLCAibG9jYWxDb252IiwgImRvRXhlY3V0ZSIsICJlbXB0eSIsICJhcHBlbmQiLCAicGFyc2VkSHRtbCIsICJodG1sIiwgImFkZENsYXNzIiwgIm1ha2VDb2xsYXBzaWJsZSIsICJyZWNvdmVyYWJsZSIsICJleGVjdXRlRGVmZXJyZWQiLCAiYWx3YXlzIiwgInN0YXRpYyIsICJhY3Rpb25zIiwgImxhYmVsIiwgIm1zZyIsICJmbGFncyIsICJ2aWV3ZXIiLCAiYWRkV2luZG93cyIsICJzZXQiLCAicmVzZXRBbGxWaWV3ZXIiLCAiX2l0ZXJhdG9yNiIsICJ2YWx1ZXMiLCAiX3N0ZXA2IiwgImNsZWFyIiwgImNsZWFyV2luZG93cyIsICJwb3J0bGV0SWQiLCAiaW5pdEdsb2JhbE1ldGhvZHMiLCAiZ2xvYmFsTWV0aG9kcyIsICJpbml0IiwgImRlSW5pdCIsICJza2luIiwgIiRub3RlVEFUYWIiLCAibm90ZVRBVGFiIiwgInV0aWwiLCAiYWRkUG9ydGxldCIsICJyZW1vdmVDbGFzcyIsICJhZnRlciIsICJoaWRlUG9ydGxldCIsICJyZW1vdmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQ2IiwgImltcG9ydF9leHRfZ2FkZ2V0NSIsICJnZW5lcmF0ZVBvcnRsZXRMaW5rIiwgInBvcnRsZXRMaW5rIiwgImFkZFBvcnRsZXRMaW5rIiwgImNsYXNzTGlzdCIsICJhZGQiLCAiJHBvcnRsZXRMaW5rIiwgImlzSW5pdCIsICJob29rIiwgIm5vdGVUQSIsICIkY29udGVudCIsICJwYXJlbnRzIiwgIl9pdGVyYXRvcjciLCAiX3N0ZXA3IiwgImlkIiwgImhpZGUiLCAib3BlbmVyTGlzdGVuZXIiLCAiZXZlbnQiLCAiY2hlY2tBMTF5Q29uZmlybUtleSIsICJwcmV2ZW50RGVmYXVsdCIsICJvcGVuIiwgIm9uIl0KfQo=
