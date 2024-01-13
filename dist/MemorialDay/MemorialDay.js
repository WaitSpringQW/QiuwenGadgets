/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/MemorialDay}
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

// dist/MemorialDay/MemorialDay.js
//! src/MemorialDay/modules/pageList.ts
var pageList = [{
  title: "Qiuwen:首页",
  date: 1213
}, {
  title: "南京大屠杀死难者国家公祭日",
  date: 1213
}, {
  title: "侵华日军南京大屠杀遇难同胞纪念馆",
  date: 1213
}];
//! src/MemorialDay/modules/core.ts
var DATENOW = /* @__PURE__ */ new Date();
var MONTH = DATENOW.getMonth() + 1;
var DAY = DATENOW.getDate();
var WG_PAGE_NAME = mw.config.get("wgPageName");
var memorialDay = () => {
  for (var _i = 0, _pageList = pageList; _i < _pageList.length; _i++) {
    const {
      title,
      date
    } = _pageList[_i];
    if (!((MONTH * 100 + DAY === date || !date) && WG_PAGE_NAME === title)) {
      continue;
    }
    mw.loader.addStyleTag(".mw-body{-webkit-filter:grayscale(1)!important;-moz-filter:grayscale(1)!important;-ms-filter:grayscale(1)!important;-o-filter:grayscale(1)!important;filter:grayscale(1)!important}");
  }
};
//! src/MemorialDay/MemorialDay.ts
memorialDay();
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL01lbW9yaWFsRGF5L21vZHVsZXMvcGFnZUxpc3QudHMiLCAic3JjL01lbW9yaWFsRGF5L21vZHVsZXMvY29yZS50cyIsICJzcmMvTWVtb3JpYWxEYXkvTWVtb3JpYWxEYXkudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImV4cG9ydCBjb25zdCBwYWdlTGlzdDoge1xuXHR0aXRsZTogc3RyaW5nO1xuXHRkYXRlPzogbnVtYmVyO1xufVtdID0gW1xuXHR7XG5cdFx0dGl0bGU6ICdRaXV3ZW466aaW6aG1Jyxcblx0XHRkYXRlOiAxMjEzLFxuXHR9LFxuXHR7XG5cdFx0dGl0bGU6ICfljZfkuqzlpKflsaDmnYDmrbvpmr7ogIXlm73lrrblhaznpa3ml6UnLFxuXHRcdGRhdGU6IDEyMTMsXG5cdH0sXG5cdHtcblx0XHR0aXRsZTogJ+S+teWNjuaXpeWGm+WNl+S6rOWkp+WxoOadgOmBh+mavuWQjOiDnue6quW/temmhicsXG5cdFx0ZGF0ZTogMTIxMyxcblx0fSxcbl07XG4iLCAiaW1wb3J0IHtwYWdlTGlzdH0gZnJvbSAnLi9wYWdlTGlzdCc7XG5cbmNvbnN0IERBVEVOT1c6IERhdGUgPSBuZXcgRGF0ZSgpO1xuY29uc3QgTU9OVEg6IG51bWJlciA9IERBVEVOT1cuZ2V0TW9udGgoKSArIDE7XG5jb25zdCBEQVk6IG51bWJlciA9IERBVEVOT1cuZ2V0RGF0ZSgpO1xuXG5jb25zdCBXR19QQUdFX05BTUU6IHN0cmluZyA9IG13LmNvbmZpZy5nZXQoJ3dnUGFnZU5hbWUnKTtcblxuZXhwb3J0IGNvbnN0IG1lbW9yaWFsRGF5ID0gKCk6IHZvaWQgPT4ge1xuXHRmb3IgKGNvbnN0IHt0aXRsZSwgZGF0ZX0gb2YgcGFnZUxpc3QpIHtcblx0XHRpZiAoISgoTU9OVEggKiAxMDAgKyBEQVkgPT09IGRhdGUgfHwgIWRhdGUpICYmIFdHX1BBR0VfTkFNRSA9PT0gdGl0bGUpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0bXcubG9hZGVyLmFkZFN0eWxlVGFnKFxuXHRcdFx0Jy5tdy1ib2R5ey13ZWJraXQtZmlsdGVyOmdyYXlzY2FsZSgxKSFpbXBvcnRhbnQ7LW1vei1maWx0ZXI6Z3JheXNjYWxlKDEpIWltcG9ydGFudDstbXMtZmlsdGVyOmdyYXlzY2FsZSgxKSFpbXBvcnRhbnQ7LW8tZmlsdGVyOmdyYXlzY2FsZSgxKSFpbXBvcnRhbnQ7ZmlsdGVyOmdyYXlzY2FsZSgxKSFpbXBvcnRhbnR9J1xuXHRcdCk7XG5cdH1cbn07XG4iLCAiaW1wb3J0IHttZW1vcmlhbERheX0gZnJvbSAnLi9tb2R1bGVzL2NvcmUnO1xuXG5tZW1vcmlhbERheSgpO1xuIl0sCiAgIm1hcHBpbmdzIjogIjs7OztBQUFPLElBQU1BLFdBR1AsQ0FDTDtFQUNDQyxPQUFPO0VBQ1BDLE1BQU07QUFDUCxHQUNBO0VBQ0NELE9BQU87RUFDUEMsTUFBTTtBQUNQLEdBQ0E7RUFDQ0QsT0FBTztFQUNQQyxNQUFNO0FBQ1AsQ0FBQTs7QUNiRCxJQUFNQyxVQUFnQixvQkFBSUMsS0FBSztBQUMvQixJQUFNQyxRQUFnQkYsUUFBUUcsU0FBUyxJQUFJO0FBQzNDLElBQU1DLE1BQWNKLFFBQVFLLFFBQVE7QUFFcEMsSUFBTUMsZUFBdUJDLEdBQUdDLE9BQU9DLElBQUksWUFBWTtBQUVoRCxJQUFNQyxjQUFjQSxNQUFZO0FBQ3RDLFdBQUFDLEtBQUEsR0FBQUMsWUFBNEJmLFVBQUFjLEtBQUFDLFVBQUFDLFFBQUFGLE1BQVU7QUFBdEMsVUFBVztNQUFDYjtNQUFPQztJQUFJLElBQUFhLFVBQUFELEVBQUE7QUFDdEIsUUFBSSxHQUFHVCxRQUFRLE1BQU1FLFFBQVFMLFFBQVEsQ0FBQ0EsU0FBU08saUJBQWlCUixRQUFRO0FBQ3ZFO0lBQ0Q7QUFDQVMsT0FBR08sT0FBT0MsWUFDVCxxTEFDRDtFQUNEO0FBQ0Q7O0FDZkFMLFlBQVk7IiwKICAibmFtZXMiOiBbInBhZ2VMaXN0IiwgInRpdGxlIiwgImRhdGUiLCAiREFURU5PVyIsICJEYXRlIiwgIk1PTlRIIiwgImdldE1vbnRoIiwgIkRBWSIsICJnZXREYXRlIiwgIldHX1BBR0VfTkFNRSIsICJtdyIsICJjb25maWciLCAiZ2V0IiwgIm1lbW9yaWFsRGF5IiwgIl9pIiwgIl9wYWdlTGlzdCIsICJsZW5ndGgiLCAibG9hZGVyIiwgImFkZFN0eWxlVGFnIl0KfQo=

})();

/* </nowiki> */
