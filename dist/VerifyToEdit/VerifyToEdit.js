/**
 * SPDX-License-Identifier: CC-BY-SA-4.0
 * _addText: '{{Gadget Header|license=CC-BY-SA-4.0}}'
 *
 * @base {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/LoginToEdit}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/VerifyToEdit}
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

// dist/VerifyToEdit/VerifyToEdit.js
//! src/VerifyToEdit/VerifyToEdit.ts
var import_ext_gadget2 = require("ext.gadget.Util");
//! src/VerifyToEdit/modules/i18n.ts
var import_ext_gadget = require("ext.gadget.i18n");
var getI18nMessages = () => {
  return {
    Cancel: (0, import_ext_gadget.localize)({
      en: "Remind me later",
      "zh-hans": "暂不认证",
      "zh-hant": "暫不認證"
    }),
    Edit: (0, import_ext_gadget.localize)({
      en: "Edit",
      "zh-hans": "编辑",
      "zh-hant": "編輯"
    }),
    Help: (0, import_ext_gadget.localize)({
      en: "Get help",
      "zh-hans": "了解详情",
      "zh-hant": "了解詳情"
    }),
    Verify: (0, import_ext_gadget.localize)({
      en: "Verify your mobile phone number",
      "zh-hans": "认证手机号码",
      "zh-hant": "認證行動電話號碼"
    }),
    DialogTitle: (0, import_ext_gadget.localize)({
      en: "Verify your mobile phone number",
      "zh-hans": "完成手机号码认证",
      "zh-hant": "完成行動電話號碼認證"
    }),
    DialogMessage: (0, import_ext_gadget.localize)({
      en: "You have logged in, but your mobile phone number has not been verified yet. In order to prevent vandalism, you must complete phone number verification before starting editing.",
      "zh-hans": "您已登录求闻百科，但您暂未完成手机号码认证。基于减少破坏的目的，在开始编辑前，您必须完成手机号码认证。",
      "zh-hant": "您已登錄求聞百科，但您暫未完成行動電話號碼認證。基於減少破壞的目的，在開始編輯前，您必須完成行動電話號碼認證。"
    })
  };
};
var i18nMessages = getI18nMessages();
var getMessage = (key) => {
  return i18nMessages[key] || key;
};
//! src/VerifyToEdit/modules/util/generateMessageDialogProperty.ts
var generateMessageDialogProperty = () => {
  const $title = $("<b>").addClass("oo-ui-window-head").text(getMessage("DialogTitle"));
  const $message = $("<span>").addClass("oo-ui-window-foot").text(getMessage("DialogMessage"));
  const messageDialogProperty = {
    title: $title,
    message: $message,
    actions: [{
      action: "help",
      flags: "progressive",
      label: $("<b>").text(getMessage("Help"))
    }, {
      action: "verify",
      flags: ["primary", "progressive"],
      label: $("<b>").text(getMessage("Verify"))
    }, {
      action: "cancel",
      flags: ["safe", "close"],
      label: $("<b>").text(getMessage("Cancel"))
    }]
  };
  return messageDialogProperty;
};
//! src/VerifyToEdit/modules/initWindowManager.ts
var initWindowManager = () => {
  const windowManager = new OO.ui.WindowManager();
  return windowManager;
};
//! src/VerifyToEdit/modules/initDialog.ts
var {
  skin,
  wgAction
} = mw.config.get();
var isCitizen = skin === "citizen";
var helpURL = "https://www.qiuwenbaike.cn/wiki/H:RNRS";
var verifyURL = "".concat(mw.util.getUrl("Special:Preferences"), "#mw-input-wprnrshook-module");
var messageDialog;
var initDialog = ($body) => {
  const windowManager = initWindowManager();
  windowManager.$element.appendTo($body);
  const messageDialogProperty = generateMessageDialogProperty();
  const openDialog = () => {
    if (messageDialog) {
      if (messageDialog.isOpened()) {
        messageDialog.close();
      } else {
        messageDialog.open(messageDialogProperty);
      }
      return;
    }
    messageDialog = new OO.ui.MessageDialog();
    messageDialog.getActionProcess = (action) => {
      if (action === "help") {
        location.href = helpURL;
      } else if (action === "verify") {
        location.href = verifyURL;
      }
      return new OO.ui.Process(() => {
        void windowManager.closeWindow(messageDialog);
      });
    };
    windowManager.addWindows([messageDialog]);
    void windowManager.openWindow(messageDialog, messageDialogProperty);
  };
  const $caViewsource = $body.find("#ca-viewsource");
  if ($caViewsource.length) {
    const editIcon = isCitizen ? '<span class="citizen-ui-icon mw-ui-icon-wikimedia-edit"></span>' : "";
    $caViewsource.attr("id", "ca-edit").find("a").attr("aria-label", getMessage("DialogMessage")).html(editIcon + getMessage("Edit")).on("click", (event) => {
      event.preventDefault();
      openDialog();
    });
  }
  if (["edit", "submit"].includes(wgAction)) {
    openDialog();
  }
};
//! src/VerifyToEdit/VerifyToEdit.ts
void (0, import_ext_gadget2.getBody)().then(function loginToEdit($body) {
  const {
    wgUserName
  } = mw.config.get();
  if (!wgUserName) {
    return;
  }
  if ((0, import_ext_gadget2.userIsInGroup)(["bot", "qiuwen", "rnrsverify-confirmed", "rnrsverify-exempt", "steward"])) {
    return;
  }
  initDialog($body);
});

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vc3JjL1ZlcmlmeVRvRWRpdC9WZXJpZnlUb0VkaXQudHMiLCAiLi4vLi4vc3JjL1ZlcmlmeVRvRWRpdC9tb2R1bGVzL2kxOG4udHMiLCAiLi4vLi4vc3JjL1ZlcmlmeVRvRWRpdC9tb2R1bGVzL3V0aWwvZ2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHkudHMiLCAiLi4vLi4vc3JjL1ZlcmlmeVRvRWRpdC9tb2R1bGVzL2luaXRXaW5kb3dNYW5hZ2VyLnRzIiwgIi4uLy4uL3NyYy9WZXJpZnlUb0VkaXQvbW9kdWxlcy9pbml0RGlhbG9nLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2dldEJvZHksIHVzZXJJc0luR3JvdXB9IGZyb20gJ2V4dC5nYWRnZXQuVXRpbCc7XG5pbXBvcnQge2luaXREaWFsb2d9IGZyb20gJy4vbW9kdWxlcy9pbml0RGlhbG9nJztcblxudm9pZCBnZXRCb2R5KCkudGhlbihmdW5jdGlvbiBsb2dpblRvRWRpdCgkYm9keTogSlF1ZXJ5PEhUTUxCb2R5RWxlbWVudD4pOiB2b2lkIHtcblx0Y29uc3Qge3dnVXNlck5hbWV9ID0gbXcuY29uZmlnLmdldCgpO1xuXG5cdGlmICghd2dVc2VyTmFtZSkge1xuXHRcdHJldHVybjtcblx0fVxuXG5cdGlmICh1c2VySXNJbkdyb3VwKFsnYm90JywgJ3FpdXdlbicsICdybnJzdmVyaWZ5LWNvbmZpcm1lZCcsICdybnJzdmVyaWZ5LWV4ZW1wdCcsICdzdGV3YXJkJ10pKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0aW5pdERpYWxvZygkYm9keSk7XG59KTtcbiIsICJpbXBvcnQge2xvY2FsaXplfSBmcm9tICdleHQuZ2FkZ2V0LmkxOG4nO1xuXG5jb25zdCBnZXRJMThuTWVzc2FnZXMgPSAoKSA9PiB7XG5cdHJldHVybiB7XG5cdFx0Q2FuY2VsOiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ1JlbWluZCBtZSBsYXRlcicsXG5cdFx0XHQnemgtaGFucyc6ICfmmoLkuI3orqTor4EnLFxuXHRcdFx0J3poLWhhbnQnOiAn5pqr5LiN6KqN6K2JJyxcblx0XHR9KSxcblx0XHRFZGl0OiBsb2NhbGl6ZSh7XG5cdFx0XHRlbjogJ0VkaXQnLFxuXHRcdFx0J3poLWhhbnMnOiAn57yW6L6RJyxcblx0XHRcdCd6aC1oYW50JzogJ+e3qOi8rycsXG5cdFx0fSksXG5cdFx0SGVscDogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdHZXQgaGVscCcsXG5cdFx0XHQnemgtaGFucyc6ICfkuobop6Por6bmg4UnLFxuXHRcdFx0J3poLWhhbnQnOiAn5LqG6Kej6Kmz5oOFJyxcblx0XHR9KSxcblx0XHRWZXJpZnk6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnVmVyaWZ5IHlvdXIgbW9iaWxlIHBob25lIG51bWJlcicsXG5cdFx0XHQnemgtaGFucyc6ICforqTor4HmiYvmnLrlj7fnoIEnLFxuXHRcdFx0J3poLWhhbnQnOiAn6KqN6K2J6KGM5YuV6Zu76Kmx6Jmf56K8Jyxcblx0XHR9KSxcblx0XHREaWFsb2dUaXRsZTogbG9jYWxpemUoe1xuXHRcdFx0ZW46ICdWZXJpZnkgeW91ciBtb2JpbGUgcGhvbmUgbnVtYmVyJyxcblx0XHRcdCd6aC1oYW5zJzogJ+WujOaIkOaJi+acuuWPt+eggeiupOivgScsXG5cdFx0XHQnemgtaGFudCc6ICflrozmiJDooYzli5Xpm7voqbHomZ/norzoqo3orYknLFxuXHRcdH0pLFxuXHRcdERpYWxvZ01lc3NhZ2U6IGxvY2FsaXplKHtcblx0XHRcdGVuOiAnWW91IGhhdmUgbG9nZ2VkIGluLCBidXQgeW91ciBtb2JpbGUgcGhvbmUgbnVtYmVyIGhhcyBub3QgYmVlbiB2ZXJpZmllZCB5ZXQuIEluIG9yZGVyIHRvIHByZXZlbnQgdmFuZGFsaXNtLCB5b3UgbXVzdCBjb21wbGV0ZSBwaG9uZSBudW1iZXIgdmVyaWZpY2F0aW9uIGJlZm9yZSBzdGFydGluZyBlZGl0aW5nLicsXG5cdFx0XHQnemgtaGFucyc6XG5cdFx0XHRcdCfmgqjlt7LnmbvlvZXmsYLpl7vnmb7np5HvvIzkvYbmgqjmmoLmnKrlrozmiJDmiYvmnLrlj7fnoIHorqTor4HjgILln7rkuo7lh4/lsJHnoLTlnY/nmoTnm67nmoTvvIzlnKjlvIDlp4vnvJbovpHliY3vvIzmgqjlv4XpobvlrozmiJDmiYvmnLrlj7fnoIHorqTor4HjgIInLFxuXHRcdFx0J3poLWhhbnQnOlxuXHRcdFx0XHQn5oKo5bey55m76YyE5rGC6IGe55m+56eR77yM5L2G5oKo5pqr5pyq5a6M5oiQ6KGM5YuV6Zu76Kmx6Jmf56K86KqN6K2J44CC5Z+65pa85rib5bCR56C05aOe55qE55uu55qE77yM5Zyo6ZaL5aeL57eo6Lyv5YmN77yM5oKo5b+F6aCI5a6M5oiQ6KGM5YuV6Zu76Kmx6Jmf56K86KqN6K2J44CCJyxcblx0XHR9KSxcblx0fTtcbn07XG5cbmNvbnN0IGkxOG5NZXNzYWdlcyA9IGdldEkxOG5NZXNzYWdlcygpO1xuXG5jb25zdCBnZXRNZXNzYWdlOiBHZXRNZXNzYWdlczx0eXBlb2YgaTE4bk1lc3NhZ2VzPiA9IChrZXkpID0+IHtcblx0cmV0dXJuIGkxOG5NZXNzYWdlc1trZXldIHx8IGtleTtcbn07XG5cbmV4cG9ydCB7Z2V0TWVzc2FnZX07XG4iLCAiaW1wb3J0IHtnZXRNZXNzYWdlfSBmcm9tICcuLi9pMThuJztcblxuY29uc3QgZ2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHkgPSAoKTogT08udWkuV2luZG93TWFuYWdlci5XaW5kb3dPcGVuaW5nRGF0YSA9PiB7XG5cdGNvbnN0ICR0aXRsZTogSlF1ZXJ5ID0gJCgnPGI+JykuYWRkQ2xhc3MoJ29vLXVpLXdpbmRvdy1oZWFkJykudGV4dChnZXRNZXNzYWdlKCdEaWFsb2dUaXRsZScpKTtcblx0Y29uc3QgJG1lc3NhZ2U6IEpRdWVyeSA9ICQoJzxzcGFuPicpLmFkZENsYXNzKCdvby11aS13aW5kb3ctZm9vdCcpLnRleHQoZ2V0TWVzc2FnZSgnRGlhbG9nTWVzc2FnZScpKTtcblxuXHRjb25zdCBtZXNzYWdlRGlhbG9nUHJvcGVydHk6IE9PLnVpLldpbmRvd01hbmFnZXIuV2luZG93T3BlbmluZ0RhdGEgPSB7XG5cdFx0dGl0bGU6ICR0aXRsZSxcblx0XHRtZXNzYWdlOiAkbWVzc2FnZSxcblx0XHRhY3Rpb25zOiBbXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ2hlbHAnLFxuXHRcdFx0XHRmbGFnczogJ3Byb2dyZXNzaXZlJyxcblx0XHRcdFx0bGFiZWw6ICQoJzxiPicpLnRleHQoZ2V0TWVzc2FnZSgnSGVscCcpKSxcblx0XHRcdH0sXG5cdFx0XHR7XG5cdFx0XHRcdGFjdGlvbjogJ3ZlcmlmeScsXG5cdFx0XHRcdGZsYWdzOiBbJ3ByaW1hcnknLCAncHJvZ3Jlc3NpdmUnXSxcblx0XHRcdFx0bGFiZWw6ICQoJzxiPicpLnRleHQoZ2V0TWVzc2FnZSgnVmVyaWZ5JykpLFxuXHRcdFx0fSxcblx0XHRcdHtcblx0XHRcdFx0YWN0aW9uOiAnY2FuY2VsJyxcblx0XHRcdFx0ZmxhZ3M6IFsnc2FmZScsICdjbG9zZSddLFxuXHRcdFx0XHRsYWJlbDogJCgnPGI+JykudGV4dChnZXRNZXNzYWdlKCdDYW5jZWwnKSksXG5cdFx0XHR9LFxuXHRcdF0sXG5cdH07XG5cblx0cmV0dXJuIG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eTtcbn07XG5cbmV4cG9ydCB7Z2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHl9O1xuIiwgImNvbnN0IGluaXRXaW5kb3dNYW5hZ2VyID0gKCk6IE9PLnVpLldpbmRvd01hbmFnZXIgPT4ge1xuXHRjb25zdCB3aW5kb3dNYW5hZ2VyOiBPTy51aS5XaW5kb3dNYW5hZ2VyID0gbmV3IE9PLnVpLldpbmRvd01hbmFnZXIoKTtcblxuXHRyZXR1cm4gd2luZG93TWFuYWdlcjtcbn07XG5cbmV4cG9ydCB7aW5pdFdpbmRvd01hbmFnZXJ9O1xuIiwgImltcG9ydCB7Z2VuZXJhdGVNZXNzYWdlRGlhbG9nUHJvcGVydHl9IGZyb20gJy4vdXRpbC9nZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSc7XG5pbXBvcnQge2dldE1lc3NhZ2V9IGZyb20gJy4vaTE4bic7XG5pbXBvcnQge2luaXRXaW5kb3dNYW5hZ2VyfSBmcm9tICcuL2luaXRXaW5kb3dNYW5hZ2VyJztcblxuY29uc3Qge3NraW4sIHdnQWN0aW9ufSA9IG13LmNvbmZpZy5nZXQoKTtcbmNvbnN0IGlzQ2l0aXplbjogYm9vbGVhbiA9IHNraW4gPT09ICdjaXRpemVuJztcbmNvbnN0IGhlbHBVUkw6IHN0cmluZyA9ICdodHRwczovL3d3dy5xaXV3ZW5iYWlrZS5jbi93aWtpL0g6Uk5SUyc7XG5jb25zdCB2ZXJpZnlVUkw6IHN0cmluZyA9IGAke213LnV0aWwuZ2V0VXJsKCdTcGVjaWFsOlByZWZlcmVuY2VzJyl9I213LWlucHV0LXdwcm5yc2hvb2stbW9kdWxlYDtcblxubGV0IG1lc3NhZ2VEaWFsb2c6IE9PLnVpLk1lc3NhZ2VEaWFsb2c7XG5cbmNvbnN0IGluaXREaWFsb2cgPSAoJGJvZHk6IEpRdWVyeTxIVE1MQm9keUVsZW1lbnQ+KTogdm9pZCA9PiB7XG5cdGNvbnN0IHdpbmRvd01hbmFnZXI6IE9PLnVpLldpbmRvd01hbmFnZXIgPSBpbml0V2luZG93TWFuYWdlcigpO1xuXHR3aW5kb3dNYW5hZ2VyLiRlbGVtZW50LmFwcGVuZFRvKCRib2R5KTtcblxuXHRjb25zdCBtZXNzYWdlRGlhbG9nUHJvcGVydHk6IE9PLnVpLldpbmRvd01hbmFnZXIuV2luZG93T3BlbmluZ0RhdGEgPSBnZW5lcmF0ZU1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSgpO1xuXG5cdGNvbnN0IG9wZW5EaWFsb2cgPSAoKTogdm9pZCA9PiB7XG5cdFx0aWYgKG1lc3NhZ2VEaWFsb2cpIHtcblx0XHRcdGlmIChtZXNzYWdlRGlhbG9nLmlzT3BlbmVkKCkpIHtcblx0XHRcdFx0bWVzc2FnZURpYWxvZy5jbG9zZSgpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWVzc2FnZURpYWxvZy5vcGVuKG1lc3NhZ2VEaWFsb2dQcm9wZXJ0eSk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bWVzc2FnZURpYWxvZyA9IG5ldyBPTy51aS5NZXNzYWdlRGlhbG9nKCk7XG5cdFx0bWVzc2FnZURpYWxvZy5nZXRBY3Rpb25Qcm9jZXNzID0gKGFjdGlvbjogc3RyaW5nKTogT08udWkuUHJvY2VzcyA9PiB7XG5cdFx0XHRpZiAoYWN0aW9uID09PSAnaGVscCcpIHtcblx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IGhlbHBVUkw7XG5cdFx0XHR9IGVsc2UgaWYgKGFjdGlvbiA9PT0gJ3ZlcmlmeScpIHtcblx0XHRcdFx0bG9jYXRpb24uaHJlZiA9IHZlcmlmeVVSTDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBuZXcgT08udWkuUHJvY2VzcygoKTogdm9pZCA9PiB7XG5cdFx0XHRcdHZvaWQgd2luZG93TWFuYWdlci5jbG9zZVdpbmRvdyhtZXNzYWdlRGlhbG9nKTtcblx0XHRcdH0pO1xuXHRcdH07XG5cblx0XHR3aW5kb3dNYW5hZ2VyLmFkZFdpbmRvd3MoW21lc3NhZ2VEaWFsb2ddKTtcblx0XHR2b2lkIHdpbmRvd01hbmFnZXIub3BlbldpbmRvdyhtZXNzYWdlRGlhbG9nLCBtZXNzYWdlRGlhbG9nUHJvcGVydHkpO1xuXHR9O1xuXG5cdGNvbnN0ICRjYVZpZXdzb3VyY2U6IEpRdWVyeSA9ICRib2R5LmZpbmQoJyNjYS12aWV3c291cmNlJyk7XG5cdGlmICgkY2FWaWV3c291cmNlLmxlbmd0aCkge1xuXHRcdGNvbnN0IGVkaXRJY29uOiBzdHJpbmcgPSBpc0NpdGl6ZW4gPyAnPHNwYW4gY2xhc3M9XCJjaXRpemVuLXVpLWljb24gbXctdWktaWNvbi13aWtpbWVkaWEtZWRpdFwiPjwvc3Bhbj4nIDogJyc7XG5cdFx0JGNhVmlld3NvdXJjZVxuXHRcdFx0LmF0dHIoJ2lkJywgJ2NhLWVkaXQnKVxuXHRcdFx0LmZpbmQoJ2EnKVxuXHRcdFx0LmF0dHIoJ2FyaWEtbGFiZWwnLCBnZXRNZXNzYWdlKCdEaWFsb2dNZXNzYWdlJykpXG5cdFx0XHQuaHRtbChlZGl0SWNvbiArIGdldE1lc3NhZ2UoJ0VkaXQnKSlcblx0XHRcdC5vbignY2xpY2snLCAoZXZlbnQ6IEpRdWVyeS5DbGlja0V2ZW50KTogdm9pZCA9PiB7XG5cdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdG9wZW5EaWFsb2coKTtcblx0XHRcdH0pO1xuXHR9XG5cblx0aWYgKFsnZWRpdCcsICdzdWJtaXQnXS5pbmNsdWRlcyh3Z0FjdGlvbikpIHtcblx0XHRvcGVuRGlhbG9nKCk7XG5cdH1cbn07XG5cbmV4cG9ydCB7aW5pdERpYWxvZ307XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBcUNDLFFBQUEsaUJBQUE7O0FDQXJDLElBQUFDLG9CQUF1QkQsUUFBQSxpQkFBQTtBQUV2QixJQUFNRSxrQkFBa0JBLE1BQU07QUFDN0IsU0FBTztJQUNOQyxTQUFBLEdBQVFGLGtCQUFBRyxVQUFTO01BQ2hCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RDLE9BQUEsR0FBTUwsa0JBQUFHLFVBQVM7TUFDZEMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNERSxPQUFBLEdBQU1OLGtCQUFBRyxVQUFTO01BQ2RDLElBQUk7TUFDSixXQUFXO01BQ1gsV0FBVztJQUNaLENBQUM7SUFDREcsU0FBQSxHQUFRUCxrQkFBQUcsVUFBUztNQUNoQkMsSUFBSTtNQUNKLFdBQVc7TUFDWCxXQUFXO0lBQ1osQ0FBQztJQUNESSxjQUFBLEdBQWFSLGtCQUFBRyxVQUFTO01BQ3JCQyxJQUFJO01BQ0osV0FBVztNQUNYLFdBQVc7SUFDWixDQUFDO0lBQ0RLLGdCQUFBLEdBQWVULGtCQUFBRyxVQUFTO01BQ3ZCQyxJQUFJO01BQ0osV0FDQztNQUNELFdBQ0M7SUFDRixDQUFDO0VBQ0Y7QUFDRDtBQUVBLElBQU1NLGVBQWVULGdCQUFnQjtBQUVyQyxJQUFNVSxhQUFnREMsU0FBUTtBQUM3RCxTQUFPRixhQUFhRSxHQUFHLEtBQUtBO0FBQzdCOztBQ3pD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QUFVLElBQUl2QyxHQUFHQyxPQUFPQyxJQUFJO0FBRW5DLE1BQUksQ0FBQ3FDLFlBQVk7QUFDaEI7RUFDRDtBQUVBLE9BQUEsR0FBSTFFLG1CQUFBMkUsZUFBYyxDQUFDLE9BQU8sVUFBVSx3QkFBd0IscUJBQXFCLFNBQVMsQ0FBQyxHQUFHO0FBQzdGO0VBQ0Q7QUFFQTlCLGFBQVdDLEtBQUs7QUFDakIsQ0FBQzsiLAogICJuYW1lcyI6IFsiaW1wb3J0X2V4dF9nYWRnZXQyIiwgInJlcXVpcmUiLCAiaW1wb3J0X2V4dF9nYWRnZXQiLCAiZ2V0STE4bk1lc3NhZ2VzIiwgIkNhbmNlbCIsICJsb2NhbGl6ZSIsICJlbiIsICJFZGl0IiwgIkhlbHAiLCAiVmVyaWZ5IiwgIkRpYWxvZ1RpdGxlIiwgIkRpYWxvZ01lc3NhZ2UiLCAiaTE4bk1lc3NhZ2VzIiwgImdldE1lc3NhZ2UiLCAia2V5IiwgImdlbmVyYXRlTWVzc2FnZURpYWxvZ1Byb3BlcnR5IiwgIiR0aXRsZSIsICIkIiwgImFkZENsYXNzIiwgInRleHQiLCAiJG1lc3NhZ2UiLCAibWVzc2FnZURpYWxvZ1Byb3BlcnR5IiwgInRpdGxlIiwgIm1lc3NhZ2UiLCAiYWN0aW9ucyIsICJhY3Rpb24iLCAiZmxhZ3MiLCAibGFiZWwiLCAiaW5pdFdpbmRvd01hbmFnZXIiLCAid2luZG93TWFuYWdlciIsICJPTyIsICJ1aSIsICJXaW5kb3dNYW5hZ2VyIiwgInNraW4iLCAid2dBY3Rpb24iLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpc0NpdGl6ZW4iLCAiaGVscFVSTCIsICJ2ZXJpZnlVUkwiLCAiY29uY2F0IiwgInV0aWwiLCAiZ2V0VXJsIiwgIm1lc3NhZ2VEaWFsb2ciLCAiaW5pdERpYWxvZyIsICIkYm9keSIsICIkZWxlbWVudCIsICJhcHBlbmRUbyIsICJvcGVuRGlhbG9nIiwgImlzT3BlbmVkIiwgImNsb3NlIiwgIm9wZW4iLCAiTWVzc2FnZURpYWxvZyIsICJnZXRBY3Rpb25Qcm9jZXNzIiwgImxvY2F0aW9uIiwgImhyZWYiLCAiUHJvY2VzcyIsICJjbG9zZVdpbmRvdyIsICJhZGRXaW5kb3dzIiwgIm9wZW5XaW5kb3ciLCAiJGNhVmlld3NvdXJjZSIsICJmaW5kIiwgImxlbmd0aCIsICJlZGl0SWNvbiIsICJhdHRyIiwgImh0bWwiLCAib24iLCAiZXZlbnQiLCAicHJldmVudERlZmF1bHQiLCAiaW5jbHVkZXMiLCAiZ2V0Qm9keSIsICJ0aGVuIiwgImxvZ2luVG9FZGl0IiwgIndnVXNlck5hbWUiLCAidXNlcklzSW5Hcm91cCJdCn0K
