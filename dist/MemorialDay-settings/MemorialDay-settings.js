/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/MemorialDay-settings}
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

// dist/MemorialDay-settings/MemorialDay-settings.js
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
//! src/MemorialDay-settings/MemorialDay-settings.ts
var MemorialDay_settings_exports = {};
__export(MemorialDay_settings_exports, {
  pageList: () => pageList_default
});
module.exports = __toCommonJS(MemorialDay_settings_exports);
//! src/MemorialDay-settings/pageList.json
var pageList_default = [{
  titles: ["Qiuwen:首页", "南京大屠杀", "南京大屠杀死难者国家公祭日", "侵华日军南京大屠杀遇难同胞纪念馆", "File:National_Memorial_Day_for_Nanjing_massacre_victims.jpg", "File:The_monument_in_the_front_of_Nanjing_Massacre_Memorial_Hall_(20090614_9921).jpg", "File:Entrance_of_Nanjing_massacre_memorial.jpg", "File:Victims_300000,_Nanjing_massacre_memorial.jpg", "File:侵华日军南京大屠杀遇难同胞纪念馆墓地广场.JPG", "File:Nanking_Massacre_victim_30000.jpg", "File:Victims_in_Nanjing_massacre.jpg", "File:灾难之墙、和平大钟.jpg", "File:侵华日军南京大屠杀遇难同胞纪念馆江东门丛葬地万人坑的一部分.jpg", "File:Nanjing_massacre_memorial.jpg", "File:Chinese_people_being_buried_alive_by_Japanese_soldiers,_Nanking_Massacre.gif", "File:Nanking_bodies_1937.jpg", "File:Attacking_the_Gate_of_China01.jpg", "File:Memorial_Hall_to_the_Victims_in_Nanjing_Massacre.jpg", "File:NanjingMassacre_Yanziji_stone.jpg", "File:Japanese_looting_near_a_gate,_Nanking_massacre.JPG", "File:Chinese_to_be_beheaded_in_Nanking_Massacre.jpg", "File:Japanese_photos_NOT_ALLOWED,_Nanjing_Massacre.jpg"],
  dates: [1213]
}, {
  titles: ["吴邦国", "File:Wu_Bangguo_Beijing2011.jpg"],
  dates: [20241008, 20241009, 20241010, 20241014]
}, {
  titles: ["Qiuwen:首页", "NEA:公告/2024年/讣告（2024年3月3日）"],
  dates: [228]
}];

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01lbW9yaWFsRGF5LXNldHRpbmdzL01lbW9yaWFsRGF5LXNldHRpbmdzLnRzIiwgInNyYy9NZW1vcmlhbERheS1zZXR0aW5ncy9wYWdlTGlzdC5qc29uIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJleHBvcnQge2RlZmF1bHQgYXMgcGFnZUxpc3R9IGZyb20gJy4vcGFnZUxpc3QuanNvbic7XG4iLCAiW1xuXHR7XG5cdFx0XCJ0aXRsZXNcIjogW1xuXHRcdFx0XCJRaXV3ZW466aaW6aG1XCIsXG5cdFx0XHRcIuWNl+S6rOWkp+WxoOadgFwiLFxuXHRcdFx0XCLljZfkuqzlpKflsaDmnYDmrbvpmr7ogIXlm73lrrblhaznpa3ml6VcIixcblx0XHRcdFwi5L615Y2O5pel5Yab5Y2X5Lqs5aSn5bGg5p2A6YGH6Zq+5ZCM6IOe57qq5b+16aaGXCIsXG5cdFx0XHRcIkZpbGU6TmF0aW9uYWxfTWVtb3JpYWxfRGF5X2Zvcl9OYW5qaW5nX21hc3NhY3JlX3ZpY3RpbXMuanBnXCIsXG5cdFx0XHRcIkZpbGU6VGhlX21vbnVtZW50X2luX3RoZV9mcm9udF9vZl9OYW5qaW5nX01hc3NhY3JlX01lbW9yaWFsX0hhbGxfKDIwMDkwNjE0Xzk5MjEpLmpwZ1wiLFxuXHRcdFx0XCJGaWxlOkVudHJhbmNlX29mX05hbmppbmdfbWFzc2FjcmVfbWVtb3JpYWwuanBnXCIsXG5cdFx0XHRcIkZpbGU6VmljdGltc18zMDAwMDAsX05hbmppbmdfbWFzc2FjcmVfbWVtb3JpYWwuanBnXCIsXG5cdFx0XHRcIkZpbGU65L615Y2O5pel5Yab5Y2X5Lqs5aSn5bGg5p2A6YGH6Zq+5ZCM6IOe57qq5b+16aaG5aKT5Zyw5bm/5Zy6LkpQR1wiLFxuXHRcdFx0XCJGaWxlOk5hbmtpbmdfTWFzc2FjcmVfdmljdGltXzMwMDAwLmpwZ1wiLFxuXHRcdFx0XCJGaWxlOlZpY3RpbXNfaW5fTmFuamluZ19tYXNzYWNyZS5qcGdcIixcblx0XHRcdFwiRmlsZTrngb7pmr7kuYvlopnjgIHlkozlubPlpKfpkp8uanBnXCIsXG5cdFx0XHRcIkZpbGU65L615Y2O5pel5Yab5Y2X5Lqs5aSn5bGg5p2A6YGH6Zq+5ZCM6IOe57qq5b+16aaG5rGf5Lic6Zeo5Lib6JGs5Zyw5LiH5Lq65Z2R55qE5LiA6YOo5YiGLmpwZ1wiLFxuXHRcdFx0XCJGaWxlOk5hbmppbmdfbWFzc2FjcmVfbWVtb3JpYWwuanBnXCIsXG5cdFx0XHRcIkZpbGU6Q2hpbmVzZV9wZW9wbGVfYmVpbmdfYnVyaWVkX2FsaXZlX2J5X0phcGFuZXNlX3NvbGRpZXJzLF9OYW5raW5nX01hc3NhY3JlLmdpZlwiLFxuXHRcdFx0XCJGaWxlOk5hbmtpbmdfYm9kaWVzXzE5MzcuanBnXCIsXG5cdFx0XHRcIkZpbGU6QXR0YWNraW5nX3RoZV9HYXRlX29mX0NoaW5hMDEuanBnXCIsXG5cdFx0XHRcIkZpbGU6TWVtb3JpYWxfSGFsbF90b190aGVfVmljdGltc19pbl9OYW5qaW5nX01hc3NhY3JlLmpwZ1wiLFxuXHRcdFx0XCJGaWxlOk5hbmppbmdNYXNzYWNyZV9ZYW56aWppX3N0b25lLmpwZ1wiLFxuXHRcdFx0XCJGaWxlOkphcGFuZXNlX2xvb3RpbmdfbmVhcl9hX2dhdGUsX05hbmtpbmdfbWFzc2FjcmUuSlBHXCIsXG5cdFx0XHRcIkZpbGU6Q2hpbmVzZV90b19iZV9iZWhlYWRlZF9pbl9OYW5raW5nX01hc3NhY3JlLmpwZ1wiLFxuXHRcdFx0XCJGaWxlOkphcGFuZXNlX3Bob3Rvc19OT1RfQUxMT1dFRCxfTmFuamluZ19NYXNzYWNyZS5qcGdcIlxuXHRcdF0sXG5cdFx0XCJkYXRlc1wiOiBbMTIxM11cblx0fSxcblx0e1xuXHRcdFwidGl0bGVzXCI6IFtcIuWQtOmCpuWbvVwiLCBcIkZpbGU6V3VfQmFuZ2d1b19CZWlqaW5nMjAxMS5qcGdcIl0sXG5cdFx0XCJkYXRlc1wiOiBbMjAyNDEwMDgsIDIwMjQxMDA5LCAyMDI0MTAxMCwgMjAyNDEwMTRdXG5cdH0sXG5cdHtcblx0XHRcInRpdGxlc1wiOiBbXCJRaXV3ZW466aaW6aG1XCIsIFwiTkVBOuWFrOWRii8yMDI05bm0L+iuo+WRiu+8iDIwMjTlubQz5pyIM+aXpe+8iVwiXSxcblx0XHRcImRhdGVzXCI6IFsyMjhdXG5cdH1cbl1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsK0JBQUEsQ0FBQTtBQUFBQyxTQUFBRCw4QkFBQTtFQUFBRSxVQUFBQSxNQUFBQztBQUFBLENBQUE7QUFBQUMsT0FBQUMsVUFBQUMsYUFBQU4sNEJBQUE7O0FDQUEsSUFBQUcsbUJBQUEsQ0FDQztFQUNDSSxRQUFVLENBQ1QsYUFDQSxTQUNBLGlCQUNBLG9CQUNBLCtEQUNBLHdGQUNBLGtEQUNBLHNEQUNBLGlDQUNBLDBDQUNBLHdDQUNBLHNCQUNBLDBDQUNBLHNDQUNBLHFGQUNBLGdDQUNBLDBDQUNBLDZEQUNBLDBDQUNBLDJEQUNBLHVEQUNBLHdEQUFBO0VBRURDLE9BQVMsQ0FBQyxJQUFJO0FBQ2YsR0FDQTtFQUNDRCxRQUFVLENBQUMsT0FBTyxpQ0FBaUM7RUFDbkRDLE9BQVMsQ0FBQyxVQUFVLFVBQVUsVUFBVSxRQUFRO0FBQ2pELEdBQ0E7RUFDQ0QsUUFBVSxDQUFDLGFBQWEsNEJBQTRCO0VBQ3BEQyxPQUFTLENBQUMsR0FBRztBQUNkLENBQUE7IiwKICAibmFtZXMiOiBbIk1lbW9yaWFsRGF5X3NldHRpbmdzX2V4cG9ydHMiLCAiX19leHBvcnQiLCAicGFnZUxpc3QiLCAicGFnZUxpc3RfZGVmYXVsdCIsICJtb2R1bGUiLCAiZXhwb3J0cyIsICJfX3RvQ29tbW9uSlMiLCAidGl0bGVzIiwgImRhdGVzIl0KfQo=
