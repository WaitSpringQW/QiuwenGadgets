/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/GeoLocation}
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

// dist/GeoLocation/GeoLocation.js
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
//! src/GeoLocation/modules/constant.ts
var SYSTEM_SCRIPT_LIST = ["滥用过滤器", "求闻编者", "求闻百科社区", "Example", "External contributors", "Maintenance script", "MediaWiki default", "MediaWiki message delivery", "New user page"];
var WEBMASTER_LIST = ["QiuWen", "QiuWen for Accounts", "QiuwenSocialMedia"];
//! src/GeoLocation/GeoLocation.ts
var import_ext_gadget3 = require("ext.gadget.Geo");
//! src/GeoLocation/options.json
var apiTag = "GeoLocation";
var version = "3.0";
//! src/GeoLocation/modules/api.ts
var import_ext_gadget = require("ext.gadget.Util");
var api = (0, import_ext_gadget.initMwApi)("GeoLocation/".concat(version));
//! src/GeoLocation/modules/i18n.ts
var import_ext_gadget2 = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Update: (0, import_ext_gadget2.localize)({
      en: "Update IP location information",
      ja: "IP地域の情報を更新",
      "zh-hans": "更新IP属地信息",
      "zh-hant": "更新IP屬地資訊"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/GeoLocation/modules/storeLocation.ts
var queryRevisons = /* @__PURE__ */ function() {
  var _ref = _asyncToGenerator(function* (titles) {
    const params = {
      titles,
      action: "query",
      format: "json",
      formatversion: "2",
      prop: ["revisions"],
      rvprop: ["content"],
      rvslots: "main",
      smaxage: 600,
      maxage: 600
    };
    const response = yield api.get(params);
    return response;
  });
  return function queryRevisons2(_x) {
    return _ref.apply(this, arguments);
  };
}();
var edit = /* @__PURE__ */ function() {
  var _ref2 = _asyncToGenerator(function* (title, text, summary) {
    const params = {
      title,
      text,
      action: "edit",
      format: "json",
      formatversion: "2",
      contentformat: "application/json",
      contentmodel: "json",
      minor: true,
      recreate: true,
      watchlist: "unwatch",
      tags: apiTag
    };
    if (summary) {
      params.summary = summary;
    }
    const response = yield api.postWithEditToken(params);
    return response;
  });
  return function edit2(_x2, _x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var storeLocation = /* @__PURE__ */ function() {
  var _ref3 = _asyncToGenerator(function* ({
    countryOrArea,
    region
  }) {
    const {
      wgUserName
    } = mw.config.get();
    const storePageTitle = "User:".concat(wgUserName, "/GeoIP.json");
    try {
      const data = yield queryRevisons(storePageTitle);
      const response = JSON.parse(data["query"].pages[0].revisions[0].slots.main.content);
      if (response.countryOrArea === countryOrArea && (response.region === region || response.region && !region)) {
        return;
      }
    } catch {
    }
    const geoInfo = {
      countryOrArea,
      region
    };
    try {
      yield edit(storePageTitle, JSON.stringify(geoInfo), getMessage("Update"));
    } catch (error) {
      console.error("[GeoLocation] Ajax error:", error);
    }
  });
  return function storeLocation2(_x5) {
    return _ref3.apply(this, arguments);
  };
}();
//! src/GeoLocation/GeoLocation.ts
var import_ext_gadget4 = require("ext.gadget.Util");
(function() {
  var _geoLocation = _asyncToGenerator(function* () {
    const {
      wgUserName
    } = mw.config.get();
    if (!wgUserName || SYSTEM_SCRIPT_LIST.includes(wgUserName) || WEBMASTER_LIST.includes(wgUserName)) {
      return;
    }
    if ((0, import_ext_gadget4.userIsInGroup)(["qiuwen", "steward", "bot"])) {
      return;
    }
    const {
      countryOrArea,
      region
    } = yield (0, import_ext_gadget3.getGeoInfo)();
    if (!countryOrArea) {
      return;
    }
    void storeLocation({
      countryOrArea,
      region
    });
  });
  function geoLocation() {
    return _geoLocation.apply(this, arguments);
  }
  return geoLocation;
})()();

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvY29uc3RhbnQudHMiLCAic3JjL0dlb0xvY2F0aW9uL0dlb0xvY2F0aW9uLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9vcHRpb25zLmpzb24iLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvYXBpLnRzIiwgInNyYy9HZW9Mb2NhdGlvbi9tb2R1bGVzL2kxOG4udHMiLCAic3JjL0dlb0xvY2F0aW9uL21vZHVsZXMvc3RvcmVMb2NhdGlvbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgU1lTVEVNX1NDUklQVF9MSVNUOiBzdHJpbmdbXSA9IFtcblx0J+a7peeUqOi/h+a7pOWZqCcsXG5cdCfmsYLpl7vnvJbogIUnLFxuXHQn5rGC6Ze755m+56eR56S+5Yy6Jyxcblx0J0V4YW1wbGUnLFxuXHQnRXh0ZXJuYWwgY29udHJpYnV0b3JzJyxcblx0J01haW50ZW5hbmNlIHNjcmlwdCcsXG5cdCdNZWRpYVdpa2kgZGVmYXVsdCcsXG5cdCdNZWRpYVdpa2kgbWVzc2FnZSBkZWxpdmVyeScsXG5cdCdOZXcgdXNlciBwYWdlJyxcbl07XG5jb25zdCBXRUJNQVNURVJfTElTVDogc3RyaW5nW10gPSBbJ1FpdVdlbicsICdRaXVXZW4gZm9yIEFjY291bnRzJywgJ1FpdXdlblNvY2lhbE1lZGlhJ107XG5cbmV4cG9ydCB7U1lTVEVNX1NDUklQVF9MSVNULCBXRUJNQVNURVJfTElTVH07XG4iLCAiaW1wb3J0IHtTWVNURU1fU0NSSVBUX0xJU1QsIFdFQk1BU1RFUl9MSVNUfSBmcm9tICcuL21vZHVsZXMvY29uc3RhbnQnO1xuaW1wb3J0IHtnZXRHZW9JbmZvfSBmcm9tICdleHQuZ2FkZ2V0Lkdlbyc7XG5pbXBvcnQge3N0b3JlTG9jYXRpb259IGZyb20gJy4vbW9kdWxlcy9zdG9yZUxvY2F0aW9uJztcbmltcG9ydCB7dXNlcklzSW5Hcm91cH0gZnJvbSAnZXh0LmdhZGdldC5VdGlsJztcblxuKGFzeW5jIGZ1bmN0aW9uIGdlb0xvY2F0aW9uKCk6IFByb21pc2U8dm9pZD4ge1xuXHRjb25zdCB7d2dVc2VyTmFtZX0gPSBtdy5jb25maWcuZ2V0KCk7XG5cblx0aWYgKCF3Z1VzZXJOYW1lIHx8IFNZU1RFTV9TQ1JJUFRfTElTVC5pbmNsdWRlcyh3Z1VzZXJOYW1lKSB8fCBXRUJNQVNURVJfTElTVC5pbmNsdWRlcyh3Z1VzZXJOYW1lKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdC8vIERpc2FibGVkIGZvciBvZmZpY2lhbCB1c2Vyc1xuXHRpZiAodXNlcklzSW5Hcm91cChbJ3FpdXdlbicsICdzdGV3YXJkJywgJ2JvdCddKSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGNvbnN0IHtjb3VudHJ5T3JBcmVhLCByZWdpb259ID0gYXdhaXQgZ2V0R2VvSW5mbygpO1xuXHRpZiAoIWNvdW50cnlPckFyZWEpIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHR2b2lkIHN0b3JlTG9jYXRpb24oe1xuXHRcdGNvdW50cnlPckFyZWEsXG5cdFx0cmVnaW9uLFxuXHR9KTtcbn0pKCk7XG4iLCAie1xuXHRcImFwaVRhZ1wiOiBcIkdlb0xvY2F0aW9uXCIsXG5cdFwidmVyc2lvblwiOiBcIjMuMFwiXG59XG4iLCAiaW1wb3J0ICogYXMgT1BUSU9OUyBmcm9tICcuLi9vcHRpb25zLmpzb24nO1xuaW1wb3J0IHtpbml0TXdBcGl9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5cbmNvbnN0IGFwaTogbXcuQXBpID0gaW5pdE13QXBpKGBHZW9Mb2NhdGlvbi8ke09QVElPTlMudmVyc2lvbn1gKTtcblxuZXhwb3J0IHthcGl9O1xuIiwgImltcG9ydCB7bG9jYWxpemV9IGZyb20gJ2V4dC5nYWRnZXQuaTE4bic7XG5cbmNvbnN0IGdldEkxOG5NZXNzYWdlcyA9ICgpID0+IHtcblx0cmV0dXJuIHtcblx0XHRVcGRhdGU6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVXBkYXRlIElQIGxvY2F0aW9uIGluZm9ybWF0aW9uJyxcblx0XHRcdGphOiAnSVDlnLDln5/jga7mg4XloLHjgpLmm7TmlrAnLFxuXHRcdFx0J3poLWhhbnMnOiAn5pu05pawSVDlsZ7lnLDkv6Hmga8nLFxuXHRcdFx0J3poLWhhbnQnOiAn5pu05pawSVDlsazlnLDos4foqIonLFxuXHRcdH0pLFxuXHR9O1xufTtcblxuY29uc3QgaTE4bk1lc3NhZ2VzID0gZ2V0STE4bk1lc3NhZ2VzKCk7XG5cbmNvbnN0IGdldE1lc3NhZ2U6IEdldE1lc3NhZ2VzPHR5cGVvZiBpMThuTWVzc2FnZXM+ID0gKGtleSkgPT4ge1xuXHRyZXR1cm4gaTE4bk1lc3NhZ2VzW2tleV0gfHwga2V5O1xufTtcblxuZXhwb3J0IHtnZXRNZXNzYWdlfTtcbiIsICJpbXBvcnQgKiBhcyBPUFRJT05TIGZyb20gJy4uL29wdGlvbnMuanNvbic7XG5pbXBvcnQgdHlwZSB7U3RvcmVHZW9JbmZvfSBmcm9tICcuL3R5cGVzJztcbmltcG9ydCB7YXBpfSBmcm9tICcuL2FwaSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5cbmNvbnN0IHF1ZXJ5UmV2aXNvbnMgPSBhc3luYyAodGl0bGVzOiBzdHJpbmcgfCBzdHJpbmdbXSkgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaVF1ZXJ5UmV2aXNpb25zUGFyYW1zID0ge1xuXHRcdHRpdGxlcyxcblx0XHRhY3Rpb246ICdxdWVyeScsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdHByb3A6IFsncmV2aXNpb25zJ10sXG5cdFx0cnZwcm9wOiBbJ2NvbnRlbnQnXSxcblx0XHRydnNsb3RzOiAnbWFpbicsXG5cdFx0c21heGFnZTogNjAwLFxuXHRcdG1heGFnZTogNjAwLFxuXHR9O1xuXHRjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwaS5nZXQocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBlZGl0ID0gYXN5bmMgKHRpdGxlOiBzdHJpbmcsIHRleHQ6IHN0cmluZywgc3VtbWFyeT86IHN0cmluZykgPT4ge1xuXHRjb25zdCBwYXJhbXM6IEFwaUVkaXRQYWdlUGFyYW1zID0ge1xuXHRcdHRpdGxlLFxuXHRcdHRleHQsXG5cdFx0YWN0aW9uOiAnZWRpdCcsXG5cdFx0Zm9ybWF0OiAnanNvbicsXG5cdFx0Zm9ybWF0dmVyc2lvbjogJzInLFxuXHRcdGNvbnRlbnRmb3JtYXQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcblx0XHRjb250ZW50bW9kZWw6ICdqc29uJyxcblx0XHRtaW5vcjogdHJ1ZSxcblx0XHRyZWNyZWF0ZTogdHJ1ZSxcblx0XHR3YXRjaGxpc3Q6ICd1bndhdGNoJyxcblx0XHR0YWdzOiBPUFRJT05TLmFwaVRhZyxcblx0fTtcblx0aWYgKHN1bW1hcnkpIHtcblx0XHRwYXJhbXMuc3VtbWFyeSA9IHN1bW1hcnk7XG5cdH1cblx0Y29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhcGkucG9zdFdpdGhFZGl0VG9rZW4ocGFyYW1zKTtcblxuXHRyZXR1cm4gcmVzcG9uc2U7XG59O1xuXG5jb25zdCBzdG9yZUxvY2F0aW9uID0gYXN5bmMgKHtjb3VudHJ5T3JBcmVhLCByZWdpb259OiBTdG9yZUdlb0luZm8pOiBQcm9taXNlPHZvaWQ+ID0+IHtcblx0Y29uc3Qge3dnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXHRjb25zdCBzdG9yZVBhZ2VUaXRsZTogc3RyaW5nID0gYFVzZXI6JHt3Z1VzZXJOYW1lfS9HZW9JUC5qc29uYDtcblxuXHR0cnkge1xuXHRcdGNvbnN0IGRhdGEgPSBhd2FpdCBxdWVyeVJldmlzb25zKHN0b3JlUGFnZVRpdGxlKTtcblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW5zYWZlLWFyZ3VtZW50XG5cdFx0Y29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKGRhdGFbJ3F1ZXJ5J10ucGFnZXNbMF0ucmV2aXNpb25zWzBdLnNsb3RzLm1haW4uY29udGVudCkgYXMgUGFydGlhbDxTdG9yZUdlb0luZm8+O1xuXG5cdFx0aWYgKHJlc3BvbnNlLmNvdW50cnlPckFyZWEgPT09IGNvdW50cnlPckFyZWEgJiYgKHJlc3BvbnNlLnJlZ2lvbiA9PT0gcmVnaW9uIHx8IChyZXNwb25zZS5yZWdpb24gJiYgIXJlZ2lvbikpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9IGNhdGNoIHt9XG5cblx0Y29uc3QgZ2VvSW5mbzogU3RvcmVHZW9JbmZvID0ge1xuXHRcdGNvdW50cnlPckFyZWEsXG5cdFx0cmVnaW9uLFxuXHR9O1xuXG5cdHRyeSB7XG5cdFx0YXdhaXQgZWRpdChzdG9yZVBhZ2VUaXRsZSwgSlNPTi5zdHJpbmdpZnkoZ2VvSW5mbyksIGdldE1lc3NhZ2UoJ1VwZGF0ZScpKTtcblx0fSBjYXRjaCAoZXJyb3I6IHVua25vd24pIHtcblx0XHRjb25zb2xlLmVycm9yKCdbR2VvTG9jYXRpb25dIEFqYXggZXJyb3I6JywgZXJyb3IpO1xuXHR9XG59O1xuXG5leHBvcnQge3N0b3JlTG9jYXRpb259O1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLHFCQUErQixDQUNwQyxTQUNBLFFBQ0EsVUFDQSxXQUNBLHlCQUNBLHNCQUNBLHFCQUNBLDhCQUNBLGVBQUE7QUFFRCxJQUFNQyxpQkFBMkIsQ0FBQyxVQUFVLHVCQUF1QixtQkFBbUI7O0FDVnRGLElBQUFDLHFCQUF5QkMsUUFBQSxnQkFBQTs7QUNBeEIsSUFBQUMsU0FBVTtBQUNWLElBQUFDLFVBQVc7O0FDRFosSUFBQUMsb0JBQXdCSCxRQUFBLGlCQUFBO0FBRXhCLElBQU1JLE9BQUEsR0FBY0Qsa0JBQUFFLFdBQUEsZUFBQUMsT0FBaUNKLE9BQU8sQ0FBRTs7QUNIOUQsSUFBQUsscUJBQXVCUCxRQUFBLGlCQUFBO0FBRXZCLElBQU1RLGtCQUFrQkEsTUFBTTtBQUM3QixTQUFPO0lBQ05DLFNBQUEsR0FBUUYsbUJBQUFHLFVBQVM7TUFDaEJDLElBQUk7TUFD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LFVBQVUsV0FBVyxLQUFLLENBQUMsR0FBRztBQUNoRDtJQUNEO0FBRUEsVUFBTTtNQUFDdEI7TUFBZUM7SUFBTSxJQUFBLE9BQUksR0FBTXJELG1CQUFBMkUsWUFBVztBQUNqRCxRQUFJLENBQUN2QixlQUFlO0FBQ25CO0lBQ0Q7QUFFQSxTQUFLRixjQUFjO01BQ2xCRTtNQUNBQztJQUNELENBQUM7RUFDRixDQUFBO0FBQUEsV0FyQmdCdUIsY0FBQTtBQUFBLFdBQUFKLGFBQUF2QyxNQUFBLE1BQUFDLFNBQUE7RUFBQTtBQUFBLFNBQUEwQztBQUFBLEdBQUEsRUFxQmI7IiwKICAibmFtZXMiOiBbIlNZU1RFTV9TQ1JJUFRfTElTVCIsICJXRUJNQVNURVJfTElTVCIsICJpbXBvcnRfZXh0X2dhZGdldDMiLCAicmVxdWlyZSIsICJhcGlUYWciLCAidmVyc2lvbiIsICJpbXBvcnRfZXh0X2dhZGdldCIsICJhcGkiLCAiaW5pdE13QXBpIiwgImNvbmNhdCIsICJpbXBvcnRfZXh0X2dhZGdldDIiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIlVwZGF0ZSIsICJsb2NhbGl6ZSIsICJlbiIsICJqYSIsICJpMThuTWVzc2FnZXMiLCAiZ2V0TWVzc2FnZSIsICJrZXkiLCAicXVlcnlSZXZpc29ucyIsICJfcmVmIiwgIl9hc3luY1RvR2VuZXJhdG9yIiwgInRpdGxlcyIsICJwYXJhbXMiLCAiYWN0aW9uIiwgImZvcm1hdCIsICJmb3JtYXR2ZXJzaW9uIiwgInByb3AiLCAicnZwcm9wIiwgInJ2c2xvdHMiLCAic21heGFnZSIsICJtYXhhZ2UiLCAicmVzcG9uc2UiLCAiZ2V0IiwgIl94IiwgImFwcGx5IiwgImFyZ3VtZW50cyIsICJlZGl0IiwgIl9yZWYyIiwgInRpdGxlIiwgInRleHQiLCAic3VtbWFyeSIsICJjb250ZW50Zm9ybWF0IiwgImNvbnRlbnRtb2RlbCIsICJtaW5vciIsICJyZWNyZWF0ZSIsICJ3YXRjaGxpc3QiLCAidGFncyIsICJwb3N0V2l0aEVkaXRUb2tlbiIsICJfeDIiLCAiX3gzIiwgIl94NCIsICJzdG9yZUxvY2F0aW9uIiwgIl9yZWYzIiwgImNvdW50cnlPckFyZWEiLCAicmVnaW9uIiwgIndnVXNlck5hbWUiLCAibXciLCAiY29uZmlnIiwgInN0b3JlUGFnZVRpdGxlIiwgImRhdGEiLCAiSlNPTiIsICJwYXJzZSIsICJwYWdlcyIsICJyZXZpc2lvbnMiLCAic2xvdHMiLCAibWFpbiIsICJjb250ZW50IiwgImdlb0luZm8iLCAic3RyaW5naWZ5IiwgImVycm9yIiwgImNvbnNvbGUiLCAiX3g1IiwgImltcG9ydF9leHRfZ2FkZ2V0NCIsICJfZ2VvTG9jYXRpb24iLCAiaW5jbHVkZXMiLCAidXNlcklzSW5Hcm91cCIsICJnZXRHZW9JbmZvIiwgImdlb0xvY2F0aW9uIl0KfQo=
