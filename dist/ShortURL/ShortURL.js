/**
 * SPDX-License-Identifier: GPL-3.0
 * _addText: '{{Gadget Header|license=GPL-3.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/ShortURL}
 * @author 安忆 <i@anyi.in>; WaitSpring <me@waitspring.com>
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

// dist/ShortURL/ShortURL.js
//! src/ShortURL/modules/core.ts
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function() {
    var self = this, args = arguments;
    return new Promise(function(resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(void 0);
    });
  };
}
var import_ext_gadget2 = require("ext.gadget.Clipboard");
//! src/ShortURL/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    "Short URL": (0, import_ext_gadget.localize)({
      en: "Short URL",
      "zh-hans": "短链接",
      "zh-hant": "短網址"
    }),
    "Short URL copied to clipboard": (0, import_ext_gadget.localize)({
      en: "The short URL has been copied to clipboard:",
      "zh-hans": "已复制本页短链接：",
      "zh-hant": "已復製本頁短網址："
    }),
    "Show short URL": (0, import_ext_gadget.localize)({
      en: "Show short URL",
      "zh-hans": "显示该页短链接",
      "zh-hant": "顯示該頁短網址"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/ShortURL/modules/core.ts
var import_ext_gadget3 = require("ext.gadget.Util");
var import_ext_gadget4 = require("ext.gadget.Tippy");
var shortURL = () => {
  let isInit = false;
  let clipboardInstance;
  const doIns = (link) => {
    var _clipboardInstance;
    const isCitizen = mw.config.get("skin") === "citizen";
    const portletId = document.querySelector("#p-cactions") ? "p-cactions" : "p-tb";
    let element = document.querySelector("#t-shortlink");
    if (!element) {
      element = mw.util.addPortletLink(portletId, "#", getMessage("Short URL"), "t-shortlink", getMessage("Show short URL"));
    }
    if (element) {
      var _element$firstElement;
      ((_element$firstElement = element.firstElementChild) !== null && _element$firstElement !== void 0 ? _element$firstElement : element).onclick = (event) => {
        event.preventDefault();
        const $element = $("<div>");
        for (var _i = 0, _arr = ["qwbk.cc", "qwbk.org", "bkwz.cn"]; _i < _arr.length; _i++) {
          const domain = _arr[_i];
          $element.append(
            // eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
            new mw.widgets.CopyTextLayout({
              align: "top",
              copyText: "https://".concat(domain).concat(link)
              // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            }).$element
          );
        }
        void OO.ui.alert($element, {
          title: getMessage("Short URL copied to clipboard"),
          size: "medium"
        });
      };
      if (isCitizen && !isInit) {
        isInit = true;
        $(element).find("a").prepend('<span class="citizen-ui-icon mw-ui-icon-wikimedia-shortlink"></span>');
      }
    }
    let headerElement = document.querySelector("#mw-indicator-shortURL a");
    if (!headerElement) {
      const $headerElement = $("<div>").addClass("mw-indicator").attr("id", "mw-indicator-shortURL").append($("<a>").attr({
        href: "#",
        "aria-label": getMessage("Short URL")
      }).append($("<span>").addClass("gadget-short-link__icon").text(getMessage("Short URL"))));
      $headerElement.prependTo(".mw-indicators");
      headerElement = $headerElement.find("a").get(0);
      (0, import_ext_gadget4.tippy)(headerElement, {
        arrow: true,
        content: getMessage("Short URL"),
        placement: "bottom"
      });
    }
    const shorturl = "https://qwbk.cc".concat(link);
    headerElement.onclick = (event) => {
      event.preventDefault();
      void mw.notify($("<span>").text(getMessage("Short URL copied to clipboard")).append($("<br>"), $("<a>").attr("href", "#").text(shorturl).on("click", (_event) => {
        _event.preventDefault();
        _event.stopPropagation();
      })), {
        tag: "shortURL",
        type: "info"
      });
    };
    (_clipboardInstance = clipboardInstance) === null || _clipboardInstance === void 0 || _clipboardInstance.destroy();
    clipboardInstance = new import_ext_gadget2.Clipboard(headerElement, {
      text: () => {
        return shorturl;
      }
    });
  };
  const init = /* @__PURE__ */ function() {
    var _ref = _asyncToGenerator(function* ({
      articleId,
      diffId,
      oldId,
      revisionId
    }) {
      const $body = $("body");
      if (diffId) {
        const buildLink = (_oldId, link = "/d") => {
          if (_oldId) {
            link += "/".concat(_oldId);
          }
          link += "/".concat(diffId);
          doIns(link);
        };
        buildLink(oldId);
        if (oldId) {
          const api = (0, import_ext_gadget3.initMwApi)("Qiuwen/1.1 (ShortURL/1.1; ".concat(mw.config.get("wgWikiID"), ")"));
          try {
            const params = {
              action: "compare",
              format: "json",
              formatversion: "2",
              prop: "ids",
              fromrev: diffId,
              torelative: "prev"
            };
            const {
              compare
            } = yield api.get(params);
            if (diffId === mw.config.get("wgDiffNewId") && // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
            (compare === null || compare === void 0 ? void 0 : compare.fromrevid) === mw.config.get("wgDiffOldId")) {
              buildLink(false);
            }
          } catch {
          }
        }
      } else if (revisionId && ($body.find("#contentSub").find("#mw-revision-nav").length || $body.find("main#content>.pre-content #mw-revision-nav").length) > 0) {
        doIns("/p/".concat(revisionId));
      } else if (articleId) {
        doIns("/c/".concat(articleId));
      }
    });
    return function init2(_x) {
      return _ref.apply(this, arguments);
    };
  }();
  mw.hook("wikipage.content").add(($content) => {
    if ($content.attr("id") !== "mw-content-text") {
      return;
    }
    void init({
      articleId: mw.config.get("wgArticleId"),
      diffId: mw.config.get("wgDiffNewId"),
      oldId: mw.config.get("wgDiffOldId"),
      revisionId: mw.config.get("wgRevisionId")
    });
  });
};
//! src/ShortURL/ShortURL.ts
if (mw.config.get("wgNamespaceNumber") >= 0 || !document.querySelectorAll(".noarticletext").length || mw.config.get("wgAction") === "view") {
  $(shortURL);
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1Nob3J0VVJML21vZHVsZXMvY29yZS50cyIsICJzcmMvU2hvcnRVUkwvbW9kdWxlcy9pMThuLnRzIiwgInNyYy9TaG9ydFVSTC9TaG9ydFVSTC50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiLyogZXNsaW50LWRpc2FibGUgdW5pY29ybi9wcmVmZXItYWRkLWV2ZW50LWxpc3RlbmVyICovXG5pbXBvcnQge0NsaXBib2FyZH0gZnJvbSAnZXh0LmdhZGdldC5DbGlwYm9hcmQnO1xuaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuL2kxOG4nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge3RpcHB5fSBmcm9tICdleHQuZ2FkZ2V0LlRpcHB5JztcblxuZXhwb3J0IGNvbnN0IHNob3J0VVJMID0gKCk6IHZvaWQgPT4ge1xuXHRsZXQgaXNJbml0OiBib29sZWFuID0gZmFsc2U7XG5cdGxldCBjbGlwYm9hcmRJbnN0YW5jZTogQ2xpcGJvYXJkSlMgfCB1bmRlZmluZWQ7XG5cdGNvbnN0IGRvSW5zID0gKGxpbms6IHN0cmluZyk6IHZvaWQgPT4ge1xuXHRcdGNvbnN0IGlzQ2l0aXplbjogYm9vbGVhbiA9IG13LmNvbmZpZy5nZXQoJ3NraW4nKSA9PT0gJ2NpdGl6ZW4nO1xuXHRcdGNvbnN0IHBvcnRsZXRJZDogJ3AtY2FjdGlvbnMnIHwgJ3AtdGInID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3AtY2FjdGlvbnMnKSA/ICdwLWNhY3Rpb25zJyA6ICdwLXRiJztcblx0XHRsZXQgZWxlbWVudDogSFRNTExJRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdC1zaG9ydGxpbmsnKTtcblx0XHRpZiAoIWVsZW1lbnQpIHtcblx0XHRcdGVsZW1lbnQgPSBtdy51dGlsLmFkZFBvcnRsZXRMaW5rKFxuXHRcdFx0XHRwb3J0bGV0SWQsXG5cdFx0XHRcdCcjJyxcblx0XHRcdFx0Z2V0TWVzc2FnZSgnU2hvcnQgVVJMJyksXG5cdFx0XHRcdCd0LXNob3J0bGluaycsXG5cdFx0XHRcdGdldE1lc3NhZ2UoJ1Nob3cgc2hvcnQgVVJMJylcblx0XHRcdCk7XG5cdFx0fVxuXHRcdGlmIChlbGVtZW50KSB7XG5cdFx0XHQoKGVsZW1lbnQuZmlyc3RFbGVtZW50Q2hpbGQgPz8gZWxlbWVudCkgYXMgSFRNTEVsZW1lbnQpLm9uY2xpY2sgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0Y29uc3QgJGVsZW1lbnQ6IEpRdWVyeSA9ICQoJzxkaXY+Jyk7XG5cdFx0XHRcdGZvciAoY29uc3QgZG9tYWluIG9mIFsncXdiay5jYycsICdxd2JrLm9yZycsICdia3d6LmNuJ10pIHtcblx0XHRcdFx0XHQkZWxlbWVudC5hcHBlbmQoXG5cdFx0XHRcdFx0XHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXVuc2FmZS1jYWxsLCBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3Ncblx0XHRcdFx0XHRcdG5ldyBtdy53aWRnZXRzLkNvcHlUZXh0TGF5b3V0KHtcblx0XHRcdFx0XHRcdFx0YWxpZ246ICd0b3AnLFxuXHRcdFx0XHRcdFx0XHRjb3B5VGV4dDogYGh0dHBzOi8vJHtkb21haW59JHtsaW5rfWAsXG5cdFx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3Ncblx0XHRcdFx0XHRcdH0pLiRlbGVtZW50IGFzIEpRdWVyeVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdH1cblx0XHRcdFx0dm9pZCBPTy51aS5hbGVydCgkZWxlbWVudCwge3RpdGxlOiBnZXRNZXNzYWdlKCdTaG9ydCBVUkwgY29waWVkIHRvIGNsaXBib2FyZCcpLCBzaXplOiAnbWVkaXVtJ30pO1xuXHRcdFx0fTtcblx0XHRcdGlmIChpc0NpdGl6ZW4gJiYgIWlzSW5pdCkge1xuXHRcdFx0XHRpc0luaXQgPSB0cnVlO1xuXHRcdFx0XHQkKGVsZW1lbnQpLmZpbmQoJ2EnKS5wcmVwZW5kKCc8c3BhbiBjbGFzcz1cImNpdGl6ZW4tdWktaWNvbiBtdy11aS1pY29uLXdpa2ltZWRpYS1zaG9ydGxpbmtcIj48L3NwYW4+Jyk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGxldCBoZWFkZXJFbGVtZW50OiBIVE1MQW5jaG9yRWxlbWVudCB8IG51bGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXctaW5kaWNhdG9yLXNob3J0VVJMIGEnKTtcblx0XHRpZiAoIWhlYWRlckVsZW1lbnQpIHtcblx0XHRcdGNvbnN0ICRoZWFkZXJFbGVtZW50OiBKUXVlcnkgPSAkKCc8ZGl2PicpXG5cdFx0XHRcdC5hZGRDbGFzcygnbXctaW5kaWNhdG9yJylcblx0XHRcdFx0LmF0dHIoJ2lkJywgJ213LWluZGljYXRvci1zaG9ydFVSTCcpXG5cdFx0XHRcdC5hcHBlbmQoXG5cdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdC5hdHRyKHtcblx0XHRcdFx0XHRcdFx0aHJlZjogJyMnLFxuXHRcdFx0XHRcdFx0XHQnYXJpYS1sYWJlbCc6IGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpLFxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdC5hcHBlbmQoJCgnPHNwYW4+JykuYWRkQ2xhc3MoJ2dhZGdldC1zaG9ydC1saW5rX19pY29uJykudGV4dChnZXRNZXNzYWdlKCdTaG9ydCBVUkwnKSkpXG5cdFx0XHRcdCk7XG5cdFx0XHQkaGVhZGVyRWxlbWVudC5wcmVwZW5kVG8oJy5tdy1pbmRpY2F0b3JzJyk7XG5cdFx0XHRoZWFkZXJFbGVtZW50ID0gJGhlYWRlckVsZW1lbnQuZmluZCgnYScpLmdldCgwKSBhcyBIVE1MQW5jaG9yRWxlbWVudDtcblx0XHRcdHRpcHB5KGhlYWRlckVsZW1lbnQsIHtcblx0XHRcdFx0YXJyb3c6IHRydWUsXG5cdFx0XHRcdGNvbnRlbnQ6IGdldE1lc3NhZ2UoJ1Nob3J0IFVSTCcpLFxuXHRcdFx0XHRwbGFjZW1lbnQ6ICdib3R0b20nLFxuXHRcdFx0fSk7XG5cdFx0fVxuXHRcdGNvbnN0IHNob3J0dXJsOiBzdHJpbmcgPSBgaHR0cHM6Ly9xd2JrLmNjJHtsaW5rfWA7XG5cdFx0aGVhZGVyRWxlbWVudC5vbmNsaWNrID0gKGV2ZW50OiBNb3VzZUV2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdFx0dm9pZCBtdy5ub3RpZnkoXG5cdFx0XHRcdCQoJzxzcGFuPicpXG5cdFx0XHRcdFx0LnRleHQoZ2V0TWVzc2FnZSgnU2hvcnQgVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnKSlcblx0XHRcdFx0XHQuYXBwZW5kKFxuXHRcdFx0XHRcdFx0JCgnPGJyPicpLFxuXHRcdFx0XHRcdFx0JCgnPGE+Jylcblx0XHRcdFx0XHRcdFx0LmF0dHIoJ2hyZWYnLCAnIycpXG5cdFx0XHRcdFx0XHRcdC50ZXh0KHNob3J0dXJsKVxuXHRcdFx0XHRcdFx0XHQub24oJ2NsaWNrJywgKF9ldmVudDogSlF1ZXJ5LkNsaWNrRXZlbnQpOiB2b2lkID0+IHtcblx0XHRcdFx0XHRcdFx0XHRfZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0XHRfZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0e3RhZzogJ3Nob3J0VVJMJywgdHlwZTogJ2luZm8nfVxuXHRcdFx0KTtcblx0XHR9O1xuXHRcdGNsaXBib2FyZEluc3RhbmNlPy5kZXN0cm95KCk7XG5cdFx0Y2xpcGJvYXJkSW5zdGFuY2UgPSBuZXcgQ2xpcGJvYXJkKGhlYWRlckVsZW1lbnQsIHtcblx0XHRcdHRleHQ6ICgpOiBzdHJpbmcgPT4ge1xuXHRcdFx0XHRyZXR1cm4gc2hvcnR1cmw7XG5cdFx0XHR9LFxuXHRcdH0pO1xuXHR9O1xuXHRjb25zdCBpbml0ID0gYXN5bmMgKHtcblx0XHRhcnRpY2xlSWQsXG5cdFx0ZGlmZklkLFxuXHRcdG9sZElkLFxuXHRcdHJldmlzaW9uSWQsXG5cdH06IHtcblx0XHRhcnRpY2xlSWQ6IG51bWJlcjtcblx0XHRkaWZmSWQ6IG51bWJlcjtcblx0XHRvbGRJZDogbnVtYmVyIHwgZmFsc2U7XG5cdFx0cmV2aXNpb25JZDogbnVtYmVyO1xuXHR9KTogUHJvbWlzZTx2b2lkPiA9PiB7XG5cdFx0Y29uc3QgJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+ID0gJCgnYm9keScpO1xuXHRcdGlmIChkaWZmSWQpIHtcblx0XHRcdGNvbnN0IGJ1aWxkTGluayA9IChfb2xkSWQ6IG51bWJlciB8IGZhbHNlLCBsaW5rID0gJy9kJyk6IHZvaWQgPT4ge1xuXHRcdFx0XHRpZiAoX29sZElkKSB7XG5cdFx0XHRcdFx0bGluayArPSBgLyR7X29sZElkfWA7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGluayArPSBgLyR7ZGlmZklkfWA7XG5cdFx0XHRcdGRvSW5zKGxpbmspO1xuXHRcdFx0fTtcblx0XHRcdGJ1aWxkTGluayhvbGRJZCk7XG5cdFx0XHRpZiAob2xkSWQpIHtcblx0XHRcdFx0Y29uc3QgYXBpOiBtdy5BcGkgPSBpbml0TXdBcGkoYFFpdXdlbi8xLjEgKFNob3J0VVJMLzEuMTsgJHttdy5jb25maWcuZ2V0KCd3Z1dpa2lJRCcpfSlgKTtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRjb25zdCBwYXJhbXM6IEFwaUNvbXBhcmVQYWdlc1BhcmFtcyA9IHtcblx0XHRcdFx0XHRcdGFjdGlvbjogJ2NvbXBhcmUnLFxuXHRcdFx0XHRcdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0XHRcdFx0XHRmb3JtYXR2ZXJzaW9uOiAnMicsXG5cdFx0XHRcdFx0XHRwcm9wOiAnaWRzJyxcblx0XHRcdFx0XHRcdGZyb21yZXY6IGRpZmZJZCxcblx0XHRcdFx0XHRcdHRvcmVsYXRpdmU6ICdwcmV2Jyxcblx0XHRcdFx0XHR9O1xuXHRcdFx0XHRcdGNvbnN0IHtjb21wYXJlfSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblx0XHRcdFx0XHRpZiAoXG5cdFx0XHRcdFx0XHRkaWZmSWQgPT09IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk5ld0lkJykgJiZcblx0XHRcdFx0XHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLW1lbWJlci1hY2Nlc3Ncblx0XHRcdFx0XHRcdGNvbXBhcmU/LmZyb21yZXZpZCA9PT0gbXcuY29uZmlnLmdldCgnd2dEaWZmT2xkSWQnKVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0YnVpbGRMaW5rKGZhbHNlKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gY2F0Y2gge31cblx0XHRcdH1cblx0XHR9IGVsc2UgaWYgKFxuXHRcdFx0cmV2aXNpb25JZCAmJlxuXHRcdFx0KCRib2R5LmZpbmQoJyNjb250ZW50U3ViJykuZmluZCgnI213LXJldmlzaW9uLW5hdicpLmxlbmd0aCB8fFxuXHRcdFx0XHQkYm9keS5maW5kKCdtYWluI2NvbnRlbnQ+LnByZS1jb250ZW50ICNtdy1yZXZpc2lvbi1uYXYnKS5sZW5ndGgpID4gMFxuXHRcdCkge1xuXHRcdFx0ZG9JbnMoYC9wLyR7cmV2aXNpb25JZH1gKTtcblx0XHR9IGVsc2UgaWYgKGFydGljbGVJZCkge1xuXHRcdFx0ZG9JbnMoYC9jLyR7YXJ0aWNsZUlkfWApO1xuXHRcdH1cblx0fTtcblx0bXcuaG9vazxKUXVlcnlbXT4oJ3dpa2lwYWdlLmNvbnRlbnQnKS5hZGQoKCRjb250ZW50KTogdm9pZCA9PiB7XG5cdFx0aWYgKCRjb250ZW50LmF0dHIoJ2lkJykgIT09ICdtdy1jb250ZW50LXRleHQnKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHRcdHZvaWQgaW5pdCh7XG5cdFx0XHRhcnRpY2xlSWQ6IG13LmNvbmZpZy5nZXQoJ3dnQXJ0aWNsZUlkJyksXG5cdFx0XHRkaWZmSWQ6IG13LmNvbmZpZy5nZXQoJ3dnRGlmZk5ld0lkJyksXG5cdFx0XHRvbGRJZDogbXcuY29uZmlnLmdldCgnd2dEaWZmT2xkSWQnKSxcblx0XHRcdHJldmlzaW9uSWQ6IG13LmNvbmZpZy5nZXQoJ3dnUmV2aXNpb25JZCcpLFxuXHRcdH0pO1xuXHR9KTtcbn07XG4iLCAiaW1wb3J0IHtsb2NhbGl6ZX0gZnJvbSAnZXh0LmdhZGdldC5pMThuJztcblxuY29uc3QgZ2V0STE4bk1lc3NhZ2VzID0gKCkgPT4ge1xuXHRyZXR1cm4ge1xuXHRcdCdTaG9ydCBVUkwnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1Nob3J0IFVSTCcsXG5cdFx0XHQnemgtaGFucyc6ICfnn63pk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn55+t57ay5Z2AJyxcblx0XHR9KSxcblx0XHQnU2hvcnQgVVJMIGNvcGllZCB0byBjbGlwYm9hcmQnOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1RoZSBzaG9ydCBVUkwgaGFzIGJlZW4gY29waWVkIHRvIGNsaXBib2FyZDonLFxuXHRcdFx0J3poLWhhbnMnOiAn5bey5aSN5Yi25pys6aG155+t6ZO+5o6l77yaJyxcblx0XHRcdCd6aC1oYW50JzogJ+W3suW+qeijveacrOmggeefree2suWdgO+8micsXG5cdFx0fSksXG5cdFx0J1Nob3cgc2hvcnQgVVJMJzogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdTaG93IHNob3J0IFVSTCcsXG5cdFx0XHQnemgtaGFucyc6ICfmmL7npLror6XpobXnn63pk77mjqUnLFxuXHRcdFx0J3poLWhhbnQnOiAn6aGv56S66Kmy6aCB55+t57ay5Z2AJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtzaG9ydFVSTH0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5pZiAoXG5cdG13LmNvbmZpZy5nZXQoJ3dnTmFtZXNwYWNlTnVtYmVyJykgPj0gMCB8fFxuXHQhZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLm5vYXJ0aWNsZXRleHQnKS5sZW5ndGggfHxcblx0bXcuY29uZmlnLmdldCgnd2dBY3Rpb24nKSA9PT0gJ3ZpZXcnXG4pIHtcblx0JChzaG9ydFVSTCk7XG59XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSxJQUFBQSxxQkFBd0JDLFFBQUEsc0JBQUE7O0FDRHhCLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOLGNBQUEsR0FBYUQsa0JBQUFFLFVBQVM7TUFDckJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxrQ0FBQSxHQUFpQ0gsa0JBQUFFLFVBQVM7TUFDekNDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDRCxtQkFBQSxHQUFrQkgsa0JBQUFFLFVBQVM7TUFDMUJDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7RUFDRjtBQUNEO0FBRUEsSUFBTUMsZUFBZUgsZ0JBQWdCO0FBRXJDLElBQU1JLGFBQWdEQyxTQUFRO0FBQzdELFNBQU9GLGFBQWFFLEdBQUcsS0FBS0E7QUFDN0I7O0FEdkJBLElBQUFDLHFCQUF3QlIsUUFBQSxpQkFBQTtBQUN4QixJQUFBUyxxQkFBb0JULFFBQUEsa0JBQUE7QUFFYixJQUFNVSxXQUFXQSxNQUFZO0FBQ25DLE1BQUlDLFNBQWtCO0FBQ3RCLE1BQUlDO0FBQ0osUUFBTUMsUUFBU0MsVUFBdUI7QUFBQSxRQUFBQztBQUNyQyxVQUFNQyxZQUFxQkMsR0FBR0MsT0FBT0MsSUFBSSxNQUFNLE1BQU07QUFDckQsVUFBTUMsWUFBbUNDLFNB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QUFBcUIsTUFBQSxNQUFBQyxTQUFBO0lBQUE7RUFBQSxFQUFBO0FBb0RONUUsS0FBRzZFLEtBQWUsa0JBQWtCLEVBQUVDLElBQUtDLGNBQW1CO0FBQzdELFFBQUlBLFNBQVMzQyxLQUFLLElBQUksTUFBTSxtQkFBbUI7QUFDOUM7SUFDRDtBQUNBLFNBQUtpQixLQUFLO01BQ1RHLFdBQVd4RCxHQUFHQyxPQUFPQyxJQUFJLGFBQWE7TUFDdEN1RCxRQUFRekQsR0FBR0MsT0FBT0MsSUFBSSxhQUFhO01BQ25Dd0QsT0FBTzFELEdBQUdDLE9BQU9DLElBQUksYUFBYTtNQUNsQ3lELFlBQVkzRCxHQUFHQyxPQUFPQyxJQUFJLGNBQWM7SUFDekMsQ0FBQztFQUNGLENBQUM7QUFDRjs7QUV2SkEsSUFDQ0YsR0FBR0MsT0FBT0MsSUFBSSxtQkFBbUIsS0FBSyxLQUN0QyxDQUFDRSxTQUFTNEUsaUJBQWlCLGdCQUFnQixFQUFFOUQsVUFDN0NsQixHQUFHQyxPQUFPQyxJQUFJLFVBQVUsTUFBTSxRQUM3QjtBQUNEYSxJQUFFdEIsUUFBUTtBQUNYOyIsCiAgIm5hbWVzIjogWyJpbXBvcnRfZXh0X2dhZGdldDIiLCAicmVxdWlyZSIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJnZXRJMThuTWVzc2FnZXMiLCAibG9jYWxpemUiLCAiZW4iLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImltcG9ydF9leHRfZ2FkZ2V0MyIsICJpbXBvcnRfZXh0X2dhZGdldDQiLCAic2hvcnRVUkwiLCAiaXNJbml0IiwgImNsaXBib2FyZEluc3RhbmNlIiwgImRvSW5zIiwgImxpbmsiLCAiX2NsaXBib2FyZEluc3RhbmNlIiwgImlzQ2l0aXplbiIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgInBvcnRsZXRJZCIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yIiwgImVsZW1lbnQiLCAidXRpbCIsICJhZGRQb3J0bGV0TGluayIsICJfZWxlbWVudCRmaXJzdEVsZW1lbnQiLCAiZmlyc3RFbGVtZW50Q2hpbGQiLCAib25jbGljayIsICJldmVudCIsICJwcmV2ZW50RGVmYXVsdCIsICIkZWxlbWVudCIsICIkIiwgIl9pIiwgIl9hcnIiLCAibGVuZ3RoIiwgImRvbWFpbiIsICJhcHBlbmQiLCAid2lkZ2V0cyIsICJDb3B5VGV4dExheW91dCIsICJhbGlnbiIsICJjb3B5VGV4dCIsICJjb25jYXQiLCAiT08iLCAidWkiLCAiYWxlcnQiLCAidGl0bGUiLCAic2l6ZSIsICJmaW5kIiwgInByZXBlbmQiLCAiaGVhZGVyRWxlbWVudCIsICIkaGVhZGVyRWxlbWVudCIsICJhZGRDbGFzcyIsICJhdHRyIiwgImhyZWYiLCAidGV4dCIsICJwcmVwZW5kVG8iLCAidGlwcHkiLCAiYXJyb3ciLCAiY29udGVudCIsICJwbGFjZW1lbnQiLCAic2hvcnR1cmwiLCAibm90aWZ5IiwgIm9uIiwgIl9ldmVudCIsICJzdG9wUHJvcGFnYXRpb24iLCAidGFnIiwgInR5cGUiLCAiZGVzdHJveSIsICJDbGlwYm9hcmQiLCAiaW5pdCIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgImFydGljbGVJZCIsICJkaWZmSWQiLCAib2xkSWQiLCAicmV2aXNpb25JZCIsICIkYm9keSIsICJidWlsZExpbmsiLCAiX29sZElkIiwgImFwaSIsICJpbml0TXdBcGkiLCAicGFyYW1zIiwgImFjdGlvbiIsICJmb3JtYXQiLCAiZm9ybWF0dmVyc2lvbiIsICJwcm9wIiwgImZyb21yZXYiLCAidG9yZWxhdGl2ZSIsICJjb21wYXJlIiwgImZyb21yZXZpZCIsICJfeCIsICJhcHBseSIsICJhcmd1bWVudHMiLCAiaG9vayIsICJhZGQiLCAiJGNvbnRlbnQiLCAicXVlcnlTZWxlY3RvckFsbCJdCn0K

})();

/* </nowiki> */
