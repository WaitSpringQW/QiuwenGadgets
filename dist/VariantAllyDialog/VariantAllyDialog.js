/**
 * SPDX-License-Identifier: GPL-2.0-only
 * _addText: '{{Gadget Header|license=GPL-2.0-only}}'
 *
 * @base {@link https://github.com/wikimedia-gadgets/VariantAlly}
 * @source {@link https://git.qiuwen.net.cn/InterfaceAdmin/QiuwenGadgets/src/branch/master/src/VariantAllyDialog}
 * @license GPL-2.0-only {@link https://www.qiuwenbaike.cn/wiki/H:GPLV2}
 */

/**
 * VariantAlly
 * Copyright (C) 2023-2024 Diskdance
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation, version 2.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program; if not, write to the Free Software
 * Foundation, Inc., 51 Franklin Street, Fifth Floor, Boston, MA  02110-1301, USA.
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

// dist/VariantAllyDialog/VariantAllyDialog.js
var _mw$config$get;
//! src/VariantAllyDialog/VariantAllyDialog.ts
var import_vue22 = require("vue");
var import_vue19 = require("vue");
var import_vue20 = require("vue");
var import_ext_gadget = require("ext.gadget.VariantAlly");
var import_vue11 = require("vue");
var import_vue12 = require("vue");
var import_vue3 = require("vue");
var import_vue = require("vue");
var VAIcon_default = /* @__PURE__ */ (0, import_vue.defineComponent)({
  __name: "VAIcon",
  props: {
    icon: {
      type: String,
      required: true
    },
    size: {
      type: Number,
      required: true
    }
  },
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const __returned__ = {};
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue2 = require("vue");
var _hoisted_1 = ["width", "height"];
var _hoisted_2 = {
  key: 0
};
var _hoisted_3 = /* @__PURE__ */ (0, import_vue2.createElementVNode)(
  "path",
  {
    d: "M20 18h-1.44a.61.61 0 01-.4-.12.81.81 0 01-.23-.31L17 15h-5l-1 2.54a.77.77 0 01-.22.3.59.59 0 01-.4.14H9l4.55-11.47h1.89zm-3.53-4.31L14.89 9.5a11.62 11.62 0 01-.39-1.24q-.09.37-.19.69l-.19.56-1.58 4.19zm-6.3-1.58a13.43 13.43 0 01-2.91-1.41 11.46 11.46 0 002.81-5.37H12V4H7.31a4 4 0 00-.2-.56C6.87 2.79 6.6 2 6.6 2l-1.47.5s.4.89.6 1.5H0v1.33h2.15A11.23 11.23 0 005 10.7a17.19 17.19 0 01-5 2.1q.56.82.87 1.38a23.28 23.28 0 005.22-2.51 15.64 15.64 0 003.56 1.77zM3.63 5.33h4.91a8.11 8.11 0 01-2.45 4.45 9.11 9.11 0 01-2.46-4.45z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_4 = {
  key: 1
};
var _hoisted_5 = /* @__PURE__ */ (0, import_vue2.createElementVNode)(
  "path",
  {
    d: "m4.34 2.93 12.73 12.73-1.41 1.41L2.93 4.35z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_6 = /* @__PURE__ */ (0, import_vue2.createElementVNode)(
  "path",
  {
    d: "M17.07 4.34 4.34 17.07l-1.41-1.41L15.66 2.93z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_7 = [_hoisted_5, _hoisted_6];
var _hoisted_8 = {
  key: 2
};
var _hoisted_9 = /* @__PURE__ */ (0, import_vue2.createElementVNode)(
  "path",
  {
    d: "M8.59 3.42 14.17 9H2v2h12.17l-5.58 5.59L10 18l8-8-8-8z"
  },
  null,
  -1
  /* HOISTED */
);
var _hoisted_10 = [_hoisted_9];
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("svg", {
    class: "va-icon-button__icon",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    width: $props.size,
    height: $props.size,
    viewBox: "0 0 20 20",
    "aria-hidden": "true"
  }, [$props.icon === "lang" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_2, [(0, import_vue2.createCommentVNode)(" eslint-disable "), _hoisted_3, (0, import_vue2.createCommentVNode)(" eslint-enable ")])) : $props.icon === "close" ? ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_4, [..._hoisted_7])) : ((0, import_vue2.openBlock)(), (0, import_vue2.createElementBlock)("g", _hoisted_8, [..._hoisted_10]))], 8, _hoisted_1);
}
//! src/VariantAllyDialog/components/VAIcon.vue
VAIcon_default.render = render;
VAIcon_default.__file = "src\\VariantAllyDialog\\components\\VAIcon.vue";
var VAIcon_default2 = VAIcon_default;
var VAButton_default = /* @__PURE__ */ (0, import_vue3.defineComponent)({
  __name: "VAButton",
  props: {
    icon: {
      type: String,
      required: false
    },
    indicator: {
      type: String,
      required: false
    },
    action: {
      type: String,
      required: false
    },
    weight: {
      type: String,
      required: false
    }
  },
  emits: ["click"],
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const __returned__ = {
      VAIcon: VAIcon_default2
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue4 = require("vue");
var _hoisted_12 = {
  key: 1,
  class: "va-button__text"
};
function render2(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)(
    "button",
    {
      class: (0, import_vue4.normalizeClass)(["va-button", {
        "va-button--action-progressive": $props.action === "progressive",
        "va-button--weight-quiet": $props.weight === "quiet"
      }]),
      onClick: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("click"))
    },
    [$props.icon !== void 0 ? ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)($setup["VAIcon"], {
      key: 0,
      class: "va-button__icon",
      icon: $props.icon,
      size: 20
    }, null, 8, ["icon"])) : (0, import_vue4.createCommentVNode)("v-if", true), _ctx.$slots["default"] ? ((0, import_vue4.openBlock)(), (0, import_vue4.createElementBlock)("span", _hoisted_12, [(0, import_vue4.renderSlot)(_ctx.$slots, "default", {}, void 0, true)])) : (0, import_vue4.createCommentVNode)("v-if", true), $props.indicator !== void 0 ? ((0, import_vue4.openBlock)(), (0, import_vue4.createBlock)($setup["VAIcon"], {
      key: 2,
      class: "va-button__indicator",
      icon: $props.indicator,
      size: 16
    }, null, 8, ["icon"])) : (0, import_vue4.createCommentVNode)("v-if", true)],
    2
    /* CLASS */
  );
}
//! src/VariantAllyDialog/components/VAButton.vue
VAButton_default.render = render2;
VAButton_default.__file = "src\\VariantAllyDialog\\components\\VAButton.vue";
VAButton_default.__scopeId = "data-v-bb7734b1";
var VAButton_default2 = VAButton_default;
var import_vue5 = require("vue");
function render3(_ctx, _cache) {
  return (0, import_vue5.openBlock)(), (0, import_vue5.createBlock)(import_vue5.Transition, {
    name: "va-fade",
    mode: "out-in"
  }, {
    default: (0, import_vue5.withCtx)(() => [(0, import_vue5.renderSlot)(_ctx.$slots, "default", {}, void 0, true)]),
    _: 3
    /* FORWARDED */
  });
}
//! src/VariantAllyDialog/components/VAFadeTransition.vue
var script = {};
script.render = render3;
script.__file = "src\\VariantAllyDialog\\components\\VAFadeTransition.vue";
script.__scopeId = "data-v-bb9c5751";
var VAFadeTransition_default = script;
//! src/VariantAllyDialog/composables/useI18n.ts
var import_vue7 = require("vue");
//! src/VariantAllyDialog/messages.json
var messages_default = {
  variants: {
    "zh-cn": "中国大陆简体",
    "zh-sg": "新加坡简体",
    "zh-my": "马来西亚简体",
    "zh-hk": "中國香港繁體",
    "zh-mo": "中國澳門繁體",
    "zh-tw": "中國臺灣繁體"
  },
  hans: {
    space: "",
    close: "关闭",
    "vp.header": "我们支持",
    "vp.header.alt": "记住此变体？",
    "vp.main": "选取内容的语言变体",
    "vp.main.alt": "以后都使用此变体呈现内容",
    "vp.main.ext": "保存您偏好的中文语言变体，以避免显示简繁混杂的内容，提供最佳的阅读体验。",
    "vp.button.ok": "确定",
    "vp.button.other": "其他"
  },
  hant: {
    space: "",
    close: "關閉",
    "vp.header": "我們支援",
    "vp.header.alt": "記住此變體？",
    "vp.main": "選取內容的語言變體",
    "vp.main.alt": "以後都使用此變體呈現內容",
    "vp.main.ext": "儲存您偏好的中文語言變體，以避免顯示簡繁混雜的內容，提供最佳的閱讀體驗。",
    "vp.button.ok": "確定",
    "vp.button.other": "其他"
  }
};
//! src/VariantAllyDialog/modules/utils.ts
var import_vue6 = require("vue");
var VALID_VARIANTS = ["zh-cn", "zh-sg", "zh-my", "zh-tw", "zh-hk", "zh-mo"];
var wgUserVariant = (0, import_vue6.ref)((_mw$config$get = mw.config.get("wgUserVariant")) !== null && _mw$config$get !== void 0 ? _mw$config$get : "");
function isMobileDevice() {
  return matchMedia("(hover: none), (pointer: coarse)").matches;
}
function getMountPoint() {
  var _document$querySelect, _document$querySelect2;
  switch (mw.config.get("skin")) {
    case "vector-2022":
      return (_document$querySelect = document.querySelectorAll(".mw-page-container")[0]) !== null && _document$querySelect !== void 0 ? _document$querySelect : document.body;
    case "gongbi":
      return (_document$querySelect2 = document.querySelector("#mw-content-block")) !== null && _document$querySelect2 !== void 0 ? _document$querySelect2 : document.body;
    default:
      return document.body;
  }
}
var inferredVariant = (0, import_vue6.computed)(() => {
  if (VALID_VARIANTS.includes(wgUserVariant.value)) {
    return wgUserVariant.value;
  }
  return null;
});
function shuffleVariant(last) {
  const targetArray = [...VALID_VARIANTS].filter((i) => {
    return i !== last;
  });
  const randomIndex = Math.floor(Math.random() * targetArray.length);
  return targetArray[randomIndex];
}
//! src/VariantAllyDialog/composables/useI18n.ts
var i18nVariant = (0, import_vue7.computed)(() => {
  if (wgUserVariant.value === "zh") {
    return Math.random() > 0.5 ? "hans" : "hant";
  }
  if (["zh-hant", "zh-tw", "zh-hk", "zh-mo"].includes(wgUserVariant.value)) {
    return "hant";
  }
  return "hans";
});
function useI18n(key) {
  var _currentMsgsGroup$key;
  const currentMsgsGroup = messages_default[i18nVariant.value];
  return (_currentMsgsGroup$key = currentMsgsGroup[key]) !== null && _currentMsgsGroup$key !== void 0 ? _currentMsgsGroup$key : key;
}
//! src/VariantAllyDialog/composables/useUniqueId.ts
var counter = 0;
function useUniqueId() {
  return "va-".concat(counter++);
}
var useUniqueId_default = useUniqueId;
//! src/VariantAllyDialog/composables/useShuffledVariant.ts
var import_vue8 = require("vue");
var INTERVAL = 3 * 1e3;
function useShuffledVariant(isFreezed) {
  const result = (0, import_vue8.ref)(shuffleVariant());
  let id;
  (0, import_vue8.watch)(isFreezed, (newValue) => {
    if (newValue) {
      var _inferredVariant$valu;
      clearInterval(id);
      result.value = (_inferredVariant$valu = inferredVariant.value) !== null && _inferredVariant$valu !== void 0 ? _inferredVariant$valu : shuffleVariant();
    } else {
      id = window.setInterval(() => {
        result.value = shuffleVariant(result.value);
      }, INTERVAL);
    }
  }, {
    immediate: true
  });
  return result;
}
var useShuffledVariant_default = useShuffledVariant;
//! src/VariantAllyDialog/composables/useModelWrapper.ts
var import_vue9 = require("vue");
function useModelWrapper(props, emit, name = "modelValue") {
  return (0, import_vue9.computed)({
    get() {
      return props[name];
    },
    set(value) {
      emit("update:".concat(name), value);
    }
  });
}
var useModelWrapper_default = useModelWrapper;
//! src/VariantAllyDialog/composables/useDefault.ts
var import_vue10 = require("vue");
function useDefault(defaultValue) {
  const realRef = (0, import_vue10.shallowRef)(typeof defaultValue === "function" ? defaultValue() : defaultValue.value);
  (0, import_vue10.watch)(defaultValue, (newValue) => {
    realRef.value = newValue;
  }, {
    deep: true
  });
  return (0, import_vue10.computed)({
    get() {
      return realRef.value;
    },
    set(newValue) {
      realRef.value = newValue;
    }
  });
}
var useDefault_default = useDefault;
var VAVariantPrompt_default = /* @__PURE__ */ (0, import_vue11.defineComponent)({
  __name: "VAVariantPrompt",
  props: {
    open: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    },
    autoClose: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:open", "update:disabled", "select", "optout"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const prompt = (0, import_vue12.ref)(null);
    const titleId = useUniqueId_default();
    const descId = useUniqueId_default();
    const isOpen = useModelWrapper_default(props, emit, "open");
    const isDisabled = useModelWrapper_default(props, emit, "disabled");
    const isVariantNarrowed = useDefault_default(() => inferredVariant.value !== null);
    const shuffledVariant = useShuffledVariant_default(isVariantNarrowed);
    function optOutAndClose() {
      emit("optout");
      isOpen.value = false;
    }
    function select(variant) {
      isDisabled.value = true;
      emit("select", variant);
    }
    (0, import_vue12.watch)(prompt, () => {
      const element = prompt.value;
      if (element !== null) {
        element.addEventListener("mouseleave", (ev) => {
          if (ev.buttons === 0 && props.autoClose && !props.disabled) {
            isOpen.value = false;
          }
        });
      }
    });
    const __returned__ = {
      props,
      emit,
      prompt,
      titleId,
      descId,
      isOpen,
      isDisabled,
      isVariantNarrowed,
      shuffledVariant,
      optOutAndClose,
      select,
      VAButton: VAButton_default2,
      VAFadeTransition: VAFadeTransition_default,
      get useI18n() {
        return useI18n;
      },
      get i18nVariant() {
        return i18nVariant;
      },
      get VALID_VARIANTS() {
        return VALID_VARIANTS;
      },
      get inferredVariant() {
        return inferredVariant;
      },
      get messages() {
        return messages_default;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue13 = require("vue");
var _withScopeId = (n) => ((0, import_vue13.pushScopeId)("data-v-5a44cc75"), n = n(), (0, import_vue13.popScopeId)(), n);
var _hoisted_13 = ["lang", "aria-labelledby", "aria-describedby"];
var _hoisted_22 = ["id"];
var _hoisted_32 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ (0, import_vue13.createElementVNode)(
  "br",
  null,
  null,
  -1
  /* HOISTED */
));
var _hoisted_42 = ["lang"];
var _hoisted_52 = ["id"];
var _hoisted_62 = {
  class: "va-variant-prompt__options"
};
var _hoisted_72 = {
  class: "va-variant-prompt__footer"
};
var _hoisted_82 = {
  class: "va-para va-para--subtle"
};
function render4(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue13.openBlock)(), (0, import_vue13.createBlock)(import_vue13.Transition, {
    name: "va-variant-prompt",
    appear: ""
  }, {
    default: (0, import_vue13.withCtx)(() => [$props.open ? ((0, import_vue13.openBlock)(), (0, import_vue13.createElementBlock)("div", {
      key: 0,
      ref: "prompt",
      lang: "zh-".concat($setup.i18nVariant),
      class: "va-variant-prompt",
      role: "dialog",
      "aria-modal": "false",
      "aria-labelledby": $setup.titleId,
      "aria-describedby": $setup.descId
    }, [(0, import_vue13.createVNode)($setup["VAButton"], {
      class: "va-variant-prompt__close",
      weight: "quiet",
      icon: "close",
      title: $setup.useI18n("close"),
      "aria-label": $setup.useI18n("close"),
      disabled: $props.disabled,
      onClick: $setup.optOutAndClose
    }, null, 8, ["title", "aria-label", "disabled"]), (0, import_vue13.createElementVNode)("h2", {
      id: $setup.titleId,
      class: "va-variant-prompt__title va-title"
    }, [(0, import_vue13.createTextVNode)(
      (0, import_vue13.toDisplayString)($setup.useI18n($setup.isVariantNarrowed ? "vp.header.alt" : "vp.header")),
      1
      /* TEXT */
    ), _hoisted_32, (0, import_vue13.createVNode)($setup["VAFadeTransition"], null, {
      default: (0, import_vue13.withCtx)(() => [!$setup.isVariantNarrowed ? ((0, import_vue13.openBlock)(), (0, import_vue13.createElementBlock)("span", {
        key: $setup.shuffledVariant,
        lang: "zh-".concat($setup.shuffledVariant),
        class: "va-variant-prompt__title__variant"
      }, (0, import_vue13.toDisplayString)($setup.messages.variants[$setup.shuffledVariant]), 9, _hoisted_42)) : (0, import_vue13.createCommentVNode)("v-if", true)]),
      _: 1
      /* STABLE */
    })], 8, _hoisted_22), (0, import_vue13.createElementVNode)("p", {
      id: $setup.descId,
      class: "va-variant-prompt__desc va-para"
    }, (0, import_vue13.toDisplayString)($setup.useI18n($setup.isVariantNarrowed ? "vp.main.alt" : "vp.main")), 9, _hoisted_52), (0, import_vue13.createElementVNode)("div", _hoisted_62, [(0, import_vue13.createCommentVNode)(" inferredVariant is non-null, guarded by isVariantNarrowed "), ((0, import_vue13.openBlock)(true), (0, import_vue13.createElementBlock)(
      import_vue13.Fragment,
      null,
      (0, import_vue13.renderList)($setup.isVariantNarrowed && $setup.inferredVariant !== null ? [$setup.inferredVariant] : $setup.VALID_VARIANTS, (variant) => {
        return (0, import_vue13.openBlock)(), (0, import_vue13.createBlock)($setup["VAButton"], {
          key: variant,
          class: (0, import_vue13.normalizeClass)(["va-variant-prompt__options__button", {
            "va-variant-prompt__options__button--primary": $setup.isVariantNarrowed
          }]),
          indicator: "arrowNext",
          weight: "quiet",
          action: "progressive",
          lang: variant,
          disabled: $props.disabled,
          onClick: ($event) => $setup.select(variant)
        }, {
          default: (0, import_vue13.withCtx)(() => [(0, import_vue13.createTextVNode)(
            (0, import_vue13.toDisplayString)($setup.messages.variants[variant]),
            1
            /* TEXT */
          )]),
          _: 2
          /* DYNAMIC */
        }, 1032, ["class", "lang", "disabled", "onClick"]);
      }),
      128
      /* KEYED_FRAGMENT */
    )), $setup.isVariantNarrowed ? ((0, import_vue13.openBlock)(), (0, import_vue13.createBlock)($setup["VAButton"], {
      key: 0,
      class: "va-variant-prompt__options__button",
      indicator: "arrowNext",
      weight: "quiet",
      action: "progressive",
      disabled: $props.disabled,
      onClick: _cache[0] || (_cache[0] = ($event) => $setup.isVariantNarrowed = false)
    }, {
      default: (0, import_vue13.withCtx)(() => [(0, import_vue13.createTextVNode)(
        (0, import_vue13.toDisplayString)($setup.useI18n("vp.button.other")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"])) : (0, import_vue13.createCommentVNode)("v-if", true)]), (0, import_vue13.createElementVNode)("footer", _hoisted_72, [(0, import_vue13.createElementVNode)(
      "p",
      _hoisted_82,
      (0, import_vue13.toDisplayString)($setup.useI18n("vp.main.ext")),
      1
      /* TEXT */
    )])], 8, _hoisted_13)) : (0, import_vue13.createCommentVNode)("v-if", true)]),
    _: 1
    /* STABLE */
  });
}
//! src/VariantAllyDialog/components/VAVariantPrompt.vue
VAVariantPrompt_default.render = render4;
VAVariantPrompt_default.__file = "src\\VariantAllyDialog\\components\\VAVariantPrompt.vue";
VAVariantPrompt_default.__scopeId = "data-v-5a44cc75";
var VAVariantPrompt_default2 = VAVariantPrompt_default;
var import_vue16 = require("vue");
var import_vue17 = require("vue");
var import_vue14 = require("vue");
var VASelect_default = /* @__PURE__ */ (0, import_vue14.defineComponent)({
  __name: "VASelect",
  props: {
    modelValue: {
      type: String,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const modelValue = useModelWrapper_default(props, emit);
    const __returned__ = {
      props,
      emit,
      modelValue
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue15 = require("vue");
function render5(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue15.withDirectives)(((0, import_vue15.openBlock)(), (0, import_vue15.createElementBlock)(
    "select",
    {
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.modelValue = $event),
      class: "va-select"
    },
    [(0, import_vue15.renderSlot)(_ctx.$slots, "default", {}, void 0, true)],
    512
    /* NEED_PATCH */
  )), [[import_vue15.vModelSelect, $setup.modelValue]]);
}
//! src/VariantAllyDialog/components/VASelect.vue
VASelect_default.render = render5;
VASelect_default.__file = "src\\VariantAllyDialog\\components\\VASelect.vue";
VASelect_default.__scopeId = "data-v-c9b46460";
var VASelect_default2 = VASelect_default;
var VAVariantPromptMobile_default = /* @__PURE__ */ (0, import_vue16.defineComponent)({
  __name: "VAVariantPromptMobile",
  props: {
    open: {
      type: Boolean,
      required: true
    },
    disabled: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  emits: ["update:open", "update:disabled", "select", "optout"],
  setup(__props, {
    expose: __expose,
    emit: __emit
  }) {
    __expose();
    const props = __props;
    const emit = __emit;
    const prompt = (0, import_vue17.ref)(null);
    const titleId = useUniqueId_default();
    const selectedVariant = useDefault_default(() => {
      var _inferredVariant$valu2;
      return (_inferredVariant$valu2 = inferredVariant.value) !== null && _inferredVariant$valu2 !== void 0 ? _inferredVariant$valu2 : shuffleVariant();
    });
    const isOpen = useModelWrapper_default(props, emit, "open");
    const isDisabled = useModelWrapper_default(props, emit, "disabled");
    function optOutAndClose() {
      emit("optout");
      isOpen.value = false;
    }
    function select(variant) {
      isDisabled.value = true;
      emit("select", variant);
    }
    const __returned__ = {
      props,
      emit,
      prompt,
      titleId,
      selectedVariant,
      isOpen,
      isDisabled,
      optOutAndClose,
      select,
      VAButton: VAButton_default2,
      VASelect: VASelect_default2,
      get useI18n() {
        return useI18n;
      },
      get i18nVariant() {
        return i18nVariant;
      },
      get VALID_VARIANTS() {
        return VALID_VARIANTS;
      },
      get messages() {
        return messages_default;
      }
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue18 = require("vue");
var _hoisted_14 = ["lang", "aria-labelledby"];
var _hoisted_23 = {
  class: "va-variant-prompt-mobile__header"
};
var _hoisted_33 = ["id"];
var _hoisted_43 = {
  class: "va-variant-prompt-mobile__main"
};
var _hoisted_53 = ["value", "lang"];
var _hoisted_63 = {
  class: "va-variant-prompt-mobile__footer"
};
var _hoisted_73 = {
  class: "va-para va-para--subtle"
};
function render6(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue18.openBlock)(), (0, import_vue18.createBlock)(import_vue18.Transition, {
    name: "va-variant-prompt-mobile",
    appear: ""
  }, {
    default: (0, import_vue18.withCtx)(() => [$props.open ? ((0, import_vue18.openBlock)(), (0, import_vue18.createElementBlock)("div", {
      key: 0,
      ref: "prompt",
      lang: "zh-".concat($setup.i18nVariant),
      class: "va-variant-prompt-mobile",
      role: "dialog",
      "aria-modal": "false",
      "aria-labelledby": $setup.titleId
    }, [(0, import_vue18.createElementVNode)("div", _hoisted_23, [(0, import_vue18.createElementVNode)("h2", {
      id: $setup.titleId,
      class: "va-variant-prompt-mobile__header__title va-title"
    }, (0, import_vue18.toDisplayString)($setup.useI18n("vp.main")), 9, _hoisted_33), (0, import_vue18.createVNode)($setup["VAButton"], {
      class: "va-variant-prompt-mobile__header__close",
      weight: "quiet",
      icon: "close",
      title: $setup.useI18n("close"),
      "aria-label": $setup.useI18n("close"),
      disabled: $props.disabled,
      onClick: $setup.optOutAndClose
    }, null, 8, ["title", "aria-label", "disabled"])]), (0, import_vue18.createElementVNode)("div", _hoisted_43, [(0, import_vue18.createVNode)($setup["VASelect"], {
      modelValue: $setup.selectedVariant,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $setup.selectedVariant = $event),
      class: "va-variant-prompt-mobile__main__select",
      lang: $setup.selectedVariant,
      disabled: $props.disabled,
      "aria-labelledby": $setup.titleId
    }, {
      default: (0, import_vue18.withCtx)(() => [((0, import_vue18.openBlock)(true), (0, import_vue18.createElementBlock)(
        import_vue18.Fragment,
        null,
        (0, import_vue18.renderList)($setup.VALID_VARIANTS, (variant) => {
          return (0, import_vue18.openBlock)(), (0, import_vue18.createElementBlock)("option", {
            key: variant,
            value: variant,
            lang: variant
          }, (0, import_vue18.toDisplayString)($setup.messages.variants[variant]), 9, _hoisted_53);
        }),
        128
        /* KEYED_FRAGMENT */
      ))]),
      _: 1
      /* STABLE */
    }, 8, ["modelValue", "lang", "disabled", "aria-labelledby"]), (0, import_vue18.createVNode)($setup["VAButton"], {
      class: "va-variant-prompt-mobile__main__action",
      action: "progressive",
      icon: "arrowNext",
      disabled: $props.disabled,
      onClick: _cache[1] || (_cache[1] = ($event) => $setup.select($setup.selectedVariant))
    }, {
      default: (0, import_vue18.withCtx)(() => [(0, import_vue18.createTextVNode)(
        (0, import_vue18.toDisplayString)($setup.useI18n("vp.button.ok")),
        1
        /* TEXT */
      )]),
      _: 1
      /* STABLE */
    }, 8, ["disabled"])]), (0, import_vue18.createElementVNode)("footer", _hoisted_63, [(0, import_vue18.createElementVNode)(
      "p",
      _hoisted_73,
      (0, import_vue18.toDisplayString)($setup.useI18n("vp.main.ext")),
      1
      /* TEXT */
    )])], 8, _hoisted_14)) : (0, import_vue18.createCommentVNode)("v-if", true)]),
    _: 1
    /* STABLE */
  });
}
//! src/VariantAllyDialog/components/VAVariantPromptMobile.vue
VAVariantPromptMobile_default.render = render6;
VAVariantPromptMobile_default.__file = "src\\VariantAllyDialog\\components\\VAVariantPromptMobile.vue";
VAVariantPromptMobile_default.__scopeId = "data-v-5cc7865b";
var VAVariantPromptMobile_default2 = VAVariantPromptMobile_default;
var App_default = /* @__PURE__ */ (0, import_vue19.defineComponent)({
  __name: "App",
  setup(__props, {
    expose: __expose
  }) {
    __expose();
    const isOpen = (0, import_vue20.ref)(true);
    const isDisabled = (0, import_vue20.ref)(false);
    const isMobile = isMobileDevice();
    const desktopMountPoint = getMountPoint();
    function setVariant(variant) {
      (0, import_ext_gadget.setLocalVariant)(variant);
      (0, import_ext_gadget.redirect)(variant, {
        forced: true
      });
    }
    addEventListener(isMobile ? "touchmove" : "scroll", () => {
      if (!isDisabled.value) {
        isOpen.value = false;
      }
    });
    function onOptOut() {
      (0, import_ext_gadget.setOptOut)();
    }
    const __returned__ = {
      isOpen,
      isDisabled,
      isMobile,
      desktopMountPoint,
      setVariant,
      onOptOut,
      VAVariantPrompt: VAVariantPrompt_default2,
      VAVariantPromptMobile: VAVariantPromptMobile_default2
    };
    Object.defineProperty(__returned__, "__isScriptSetup", {
      enumerable: false,
      value: true
    });
    return __returned__;
  }
});
var import_vue21 = require("vue");
function render7(_ctx, _cache, $props, $setup, $data, $options) {
  return (0, import_vue21.openBlock)(), (0, import_vue21.createElementBlock)(
    import_vue21.Fragment,
    null,
    [((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)(import_vue21.Teleport, {
      to: $setup.desktopMountPoint
    }, [!$setup.isMobile ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["VAVariantPrompt"], {
      key: 0,
      open: $setup.isOpen,
      "onUpdate:open": _cache[0] || (_cache[0] = ($event) => $setup.isOpen = $event),
      disabled: $setup.isDisabled,
      "onUpdate:disabled": _cache[1] || (_cache[1] = ($event) => $setup.isDisabled = $event),
      "auto-close": false,
      onOptout: $setup.onOptOut,
      onSelect: $setup.setVariant
    }, null, 8, ["open", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true)], 8, ["to"])), (0, import_vue21.createCommentVNode)(" Teleport to body because they are always floated at bottom "), ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)(import_vue21.Teleport, {
      to: "body"
    }, [$setup.isMobile ? ((0, import_vue21.openBlock)(), (0, import_vue21.createBlock)($setup["VAVariantPromptMobile"], {
      key: 0,
      open: $setup.isOpen,
      "onUpdate:open": _cache[2] || (_cache[2] = ($event) => $setup.isOpen = $event),
      disabled: $setup.isDisabled,
      "onUpdate:disabled": _cache[3] || (_cache[3] = ($event) => $setup.isDisabled = $event),
      onOptout: $setup.onOptOut,
      onSelect: $setup.setVariant
    }, null, 8, ["open", "disabled"])) : (0, import_vue21.createCommentVNode)("v-if", true)]))],
    64
    /* STABLE_FRAGMENT */
  );
}
//! src/VariantAllyDialog/App.vue
App_default.render = render7;
App_default.__file = "src\\VariantAllyDialog\\App.vue";
var App_default2 = App_default;
//! src/VariantAllyDialog/VariantAllyDialog.ts
var root = document.createElement("div");
document.body.append(root);
(0, import_vue22.createApp)(App_default2).mount(root);

})();

/* </nowiki> */

//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL1ZhcmlhbnRBbGx5RGlhbG9nLnRzIiwgImRpc3QvVmFyaWFudEFsbHlEaWFsb2cvc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL0FwcC52dWUiLCAiZGlzdC9WYXJpYW50QWxseURpYWxvZy9zcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHQudnVlIiwgInNmYy10ZW1wbGF0ZTpFOlxcZ2hSZXBvXFxRaXV3ZW5HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQUljb24udnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFJY29uLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RTpcXGdoUmVwb1xcUWl1d2VuR2FkZ2V0c1xcc3JjXFxWYXJpYW50QWxseURpYWxvZ1xcY29tcG9uZW50c1xcVkFCdXR0b24udnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFCdXR0b24udnVlIiwgInNmYy10ZW1wbGF0ZTpFOlxcZ2hSZXBvXFxRaXV3ZW5HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQUZhZGVUcmFuc2l0aW9uLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBRmFkZVRyYW5zaXRpb24udnVlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VJMThuLnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9tZXNzYWdlcy5qc29uIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9tb2R1bGVzL3V0aWxzLnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VVbmlxdWVJZC50cyIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9zYWJsZXMvdXNlU2h1ZmZsZWRWYXJpYW50LnRzIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb3NhYmxlcy91c2VNb2RlbFdyYXBwZXIudHMiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvc2FibGVzL3VzZURlZmF1bHQudHMiLCAic2ZjLXRlbXBsYXRlOkU6XFxnaFJlcG9cXFFpdXdlbkdhZGdldHNcXHNyY1xcVmFyaWFudEFsbHlEaWFsb2dcXGNvbXBvbmVudHNcXFZBVmFyaWFudFByb21wdC52dWU/dHlwZT10ZW1wbGF0ZSIsICJzcmMvVmFyaWFudEFsbHlEaWFsb2cvY29tcG9uZW50cy9WQVZhcmlhbnRQcm9tcHQudnVlIiwgImRpc3QvVmFyaWFudEFsbHlEaWFsb2cvc3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZSIsICJkaXN0L1ZhcmlhbnRBbGx5RGlhbG9nL3NyYy9WYXJpYW50QWxseURpYWxvZy9jb21wb25lbnRzL1ZBU2VsZWN0LnZ1ZSIsICJzZmMtdGVtcGxhdGU6RTpcXGdoUmVwb1xcUWl1d2VuR2FkZ2V0c1xcc3JjXFxWYXJpYW50QWxseURpYWxvZ1xcY29tcG9uZW50c1xcVkFTZWxlY3QudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFTZWxlY3QudnVlIiwgInNmYy10ZW1wbGF0ZTpFOlxcZ2hSZXBvXFxRaXV3ZW5HYWRnZXRzXFxzcmNcXFZhcmlhbnRBbGx5RGlhbG9nXFxjb21wb25lbnRzXFxWQVZhcmlhbnRQcm9tcHRNb2JpbGUudnVlP3R5cGU9dGVtcGxhdGUiLCAic3JjL1ZhcmlhbnRBbGx5RGlhbG9nL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZSIsICJzZmMtdGVtcGxhdGU6RTpcXGdoUmVwb1xcUWl1d2VuR2FkZ2V0c1xcc3JjXFxWYXJpYW50QWxseURpYWxvZ1xcQXBwLnZ1ZT90eXBlPXRlbXBsYXRlIiwgInNyYy9WYXJpYW50QWxseURpYWxvZy9BcHAudnVlIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJpbXBvcnQge2NyZWF0ZUFwcH0gZnJvbSAndnVlJztcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAudnVlJztcblxuY29uc3Qgcm9vdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuZG9jdW1lbnQuYm9keS5hcHBlbmQocm9vdCk7XG5jcmVhdGVBcHAoQXBwKS5tb3VudChyb290KTtcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtyZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge3NldExvY2FsVmFyaWFudCwgcmVkaXJlY3QsIFZhbGlkVmFyaWFudCwgc2V0T3B0T3V0fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcbmltcG9ydCBWQVZhcmlhbnRQcm9tcHQgZnJvbSAnLi9jb21wb25lbnRzL1ZBVmFyaWFudFByb21wdC52dWUnO1xuaW1wb3J0IFZBVmFyaWFudFByb21wdE1vYmlsZSBmcm9tICcuL2NvbXBvbmVudHMvVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZSc7XG5pbXBvcnQge2dldE1vdW50UG9pbnQsIGlzTW9iaWxlRGV2aWNlfSBmcm9tICcuL21vZHVsZXMvdXRpbHMnO1xuXG5jb25zdCBpc09wZW4gPSByZWYodHJ1ZSk7XG5jb25zdCBpc0Rpc2FibGVkID0gcmVmKGZhbHNlKTtcbmNvbnN0IGlzTW9iaWxlID0gaXNNb2JpbGVEZXZpY2UoKTtcbmNvbnN0IGRlc2t0b3BNb3VudFBvaW50ID0gZ2V0TW91bnRQb2ludCgpO1xuXG5mdW5jdGlvbiBzZXRWYXJpYW50KHZhcmlhbnQ6IFZhbGlkVmFyaWFudCkge1xuXHRzZXRMb2NhbFZhcmlhbnQodmFyaWFudCk7XG5cdHJlZGlyZWN0KHZhcmlhbnQsIHtmb3JjZWQ6IHRydWV9KTtcbn1cblxuLy8gQnJvd3NlciBzdXBwb3J0OiBpT1MgU2FmYXJpIDwgMTVcbi8vIFdvcmsgYXJvdW5kIFNhZmFyaSBmaXJpbmcgc2Nyb2xsIGV2ZW50IGF0IHVuZXhwZWN0ZWQgY29uZGl0aW9ucyAoZS5nLiBwb3BwaW5nIHVwIFNlbGVjdClcbmFkZEV2ZW50TGlzdGVuZXIoaXNNb2JpbGUgPyAndG91Y2htb3ZlJyA6ICdzY3JvbGwnLCAoKSA9PiB7XG5cdGlmICghaXNEaXNhYmxlZC52YWx1ZSkge1xuXHRcdGlzT3Blbi52YWx1ZSA9IGZhbHNlO1xuXHR9XG59KTtcblxuZnVuY3Rpb24gb25PcHRPdXQoKSB7XG5cdHNldE9wdE91dCgpO1xufVxuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PFRlbGVwb3J0IDp0bz1cImRlc2t0b3BNb3VudFBvaW50XCI+XG5cdFx0PFZBVmFyaWFudFByb21wdFxuXHRcdFx0di1pZj1cIiFpc01vYmlsZVwiXG5cdFx0XHR2LW1vZGVsOm9wZW49XCJpc09wZW5cIlxuXHRcdFx0di1tb2RlbDpkaXNhYmxlZD1cImlzRGlzYWJsZWRcIlxuXHRcdFx0OmF1dG8tY2xvc2U9XCJmYWxzZVwiXG5cdFx0XHRAb3B0b3V0PVwib25PcHRPdXRcIlxuXHRcdFx0QHNlbGVjdD1cInNldFZhcmlhbnRcIlxuXHRcdC8+XG5cdDwvVGVsZXBvcnQ+XG5cblx0PCEtLSBUZWxlcG9ydCB0byBib2R5IGJlY2F1c2UgdGhleSBhcmUgYWx3YXlzIGZsb2F0ZWQgYXQgYm90dG9tIC0tPlxuXHQ8VGVsZXBvcnQgdG89XCJib2R5XCI+XG5cdFx0PFZBVmFyaWFudFByb21wdE1vYmlsZVxuXHRcdFx0di1pZj1cImlzTW9iaWxlXCJcblx0XHRcdHYtbW9kZWw6b3Blbj1cImlzT3BlblwiXG5cdFx0XHR2LW1vZGVsOmRpc2FibGVkPVwiaXNEaXNhYmxlZFwiXG5cdFx0XHRAb3B0b3V0PVwib25PcHRPdXRcIlxuXHRcdFx0QHNlbGVjdD1cInNldFZhcmlhbnRcIlxuXHRcdC8+XG5cdDwvVGVsZXBvcnQ+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4vc3R5bGVzL3Rva2Vucy5sZXNzJztcblxuLnZhLXZhcmlhbnQtcHJvbXB0IHtcblx0Ly8gVmVjdG9yIDIwMjIgc3BlY2lmaWMgYWRqdXN0bWVudHNcblx0LnNraW4tdmVjdG9yLTIwMjIgJiB7XG5cdFx0Ly8gQ2FsY3VsYXRlZCBmcm9tIFZlY3RvciAyMDIyIHNvdXJjZSBjb2RlXG5cdFx0QHZlY3Rvci0yMDIyLWhlYWRlci1oZWlnaHQ6IDUwcHggKyAyICogOHB4O1xuXHRcdG1heC1oZWlnaHQ6IGNhbGMoMTAwJSAtIEBzcGFjaW5nLXZlcnRpY2FsLWRpYWxvZyAtIEB2ZWN0b3ItMjAyMi1oZWFkZXItaGVpZ2h0KTtcblxuXHRcdC52ZWN0b3ItdG9jLWF2YWlsYWJsZS52ZWN0b3ItZmVhdHVyZS10b2MtcGlubmVkLWNsaWVudHByZWYtMSAmLFxuXHRcdC52ZWN0b3ItZmVhdHVyZS1tYWluLW1lbnUtcGlubmVkLWVuYWJsZWQgJiB7XG5cdFx0XHRAbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDAwcHgpIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcblx0XHRcdFx0bGVmdDogdW5zZXQ7XG5cblx0XHRcdFx0Ly8gQ2FsY3VsYXRlZCBmcm9tIFZlY3RvciAyMDIyIHNvdXJjZSBjb2RlXG5cdFx0XHRcdC8vIEluIHRoaXMgd2lkdGggdGhpcyBwcm9tcHQgd2lsbCBub3Qgb2JzY3VyZSBhcnRpY2xlIGNvbnRlbnRcblx0XHRcdFx0QHZlY3Rvci0yMDIyLWxlZnQtcGFkZGluZzogMi43NWVtO1xuXHRcdFx0XHRtYXJnaW4tbGVmdDogLShAdmVjdG9yLTIwMjItbGVmdC1wYWRkaW5nIC8gMyAqIDIpO1xuXHRcdFx0XHRtYXgtd2lkdGg6IGNhbGMoMTIuMjVlbSArIDM2cHgpO1xuXHRcdFx0XHRwYWRkaW5nOiBAc3BhY2luZy0xMDA7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KSB7XG5cdFx0XHRAdmVjdG9yLTIwMjItbGVmdC1wYWRkaW5nOiAzLjI1ZW07XG5cdFx0XHRsZWZ0OiB1bnNldDtcblx0XHRcdG1hcmdpbi1sZWZ0OiAtKEB2ZWN0b3ItMjAyMi1sZWZ0LXBhZGRpbmcgLyAzICogMik7XG5cdFx0XHRtYXgtd2lkdGg6IGNhbGMoMTUuNzVlbSArIDM2cHgpO1xuXHRcdH1cblx0fVxufVxuPC9zdHlsZT5cbi4vbW9kdWxlcy91dGlsc1xuIiwgIjxzY3JpcHQgc2V0dXAgbGFuZz1cInRzXCI+XG5pbXBvcnQge3JlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge3R5cGUgVmFsaWRWYXJpYW50fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcbmltcG9ydCBWQUJ1dHRvbiBmcm9tICcuL1ZBQnV0dG9uLnZ1ZSc7XG5pbXBvcnQgVkFGYWRlVHJhbnNpdGlvbiBmcm9tICcuL1ZBRmFkZVRyYW5zaXRpb24udnVlJztcbmltcG9ydCB1c2VJMThuLCB7aTE4blZhcmlhbnR9IGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZUkxOG4nO1xuaW1wb3J0IHVzZVVuaXF1ZUlkIGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZVVuaXF1ZUlkJztcbmltcG9ydCB1c2VTaHVmZmxlZFZhcmlhbnQgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlU2h1ZmZsZWRWYXJpYW50JztcbmltcG9ydCB7VkFMSURfVkFSSUFOVFMsIGluZmVycmVkVmFyaWFudH0gZnJvbSAnLi4vbW9kdWxlcy91dGlscyc7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vbWVzc2FnZXMuanNvbic7XG5pbXBvcnQgdXNlTW9kZWxXcmFwcGVyIGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZU1vZGVsV3JhcHBlcic7XG5pbXBvcnQgdXNlRGVmYXVsdCBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VEZWZhdWx0JztcblxuY29uc3QgcHJvcHMgPSB3aXRoRGVmYXVsdHMoXG5cdGRlZmluZVByb3BzPHtcblx0XHRvcGVuOiBib29sZWFuO1xuXHRcdGRpc2FibGVkPzogYm9vbGVhbjtcblx0XHRhdXRvQ2xvc2U/OiBib29sZWFuO1xuXHR9PigpLFxuXHR7XG5cdFx0ZGlzYWJsZWQ6IGZhbHNlLFxuXHRcdGF1dG9DbG9zZTogZmFsc2UsXG5cdH1cbik7XG5jb25zdCBlbWl0ID0gZGVmaW5lRW1pdHM8e1xuXHQoZTogJ3VwZGF0ZTpvcGVuJywgdmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xuXHQoZTogJ3VwZGF0ZTpkaXNhYmxlZCcsIHZhbHVlOiBib29sZWFuKTogdm9pZDtcblx0KGU6ICdzZWxlY3QnLCB2YXJpYW50OiBWYWxpZFZhcmlhbnQpOiB2b2lkO1xuXHQoZTogJ29wdG91dCcpOiB2b2lkO1xufT4oKTtcblxuY29uc3QgcHJvbXB0ID0gcmVmPEhUTUxFbGVtZW50IHwgbnVsbD4obnVsbCk7XG5jb25zdCB0aXRsZUlkID0gdXNlVW5pcXVlSWQoKTtcbmNvbnN0IGRlc2NJZCA9IHVzZVVuaXF1ZUlkKCk7XG5jb25zdCBpc09wZW4gPSB1c2VNb2RlbFdyYXBwZXIocHJvcHMsIGVtaXQsICdvcGVuJyk7XG5jb25zdCBpc0Rpc2FibGVkID0gdXNlTW9kZWxXcmFwcGVyKHByb3BzLCBlbWl0LCAnZGlzYWJsZWQnKTtcbmNvbnN0IGlzVmFyaWFudE5hcnJvd2VkID0gdXNlRGVmYXVsdCgoKSA9PiBpbmZlcnJlZFZhcmlhbnQudmFsdWUgIT09IG51bGwpO1xuY29uc3Qgc2h1ZmZsZWRWYXJpYW50ID0gdXNlU2h1ZmZsZWRWYXJpYW50KGlzVmFyaWFudE5hcnJvd2VkKTtcblxuZnVuY3Rpb24gb3B0T3V0QW5kQ2xvc2UoKSB7XG5cdGVtaXQoJ29wdG91dCcpO1xuXHRpc09wZW4udmFsdWUgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KHZhcmlhbnQ6IFZhbGlkVmFyaWFudCkge1xuXHRpc0Rpc2FibGVkLnZhbHVlID0gdHJ1ZTtcblx0ZW1pdCgnc2VsZWN0JywgdmFyaWFudCk7XG59XG5cbndhdGNoKHByb21wdCwgKCkgPT4ge1xuXHRjb25zdCBlbGVtZW50ID0gcHJvbXB0LnZhbHVlO1xuXHRpZiAoZWxlbWVudCAhPT0gbnVsbCkge1xuXHRcdGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIChldikgPT4ge1xuXHRcdFx0Ly8gRG8gbm90IGRpc21pc3MgaWYgYW55IGJ1dHRvbiBpcyBwcmVzc2VkIG9yIHRoZSBwcm9tcHQgaXMgZGlzYWJsZWRcblx0XHRcdGlmIChldi5idXR0b25zID09PSAwICYmIHByb3BzLmF1dG9DbG9zZSAmJiAhcHJvcHMuZGlzYWJsZWQpIHtcblx0XHRcdFx0aXNPcGVuLnZhbHVlID0gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0pO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PFRyYW5zaXRpb24gbmFtZT1cInZhLXZhcmlhbnQtcHJvbXB0XCIgYXBwZWFyPlxuXHRcdDxkaXZcblx0XHRcdHYtaWY9XCJvcGVuXCJcblx0XHRcdHJlZj1cInByb21wdFwiXG5cdFx0XHQ6bGFuZz1cImB6aC0ke2kxOG5WYXJpYW50fWBcIlxuXHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdFwiXG5cdFx0XHRyb2xlPVwiZGlhbG9nXCJcblx0XHRcdGFyaWEtbW9kYWw9XCJmYWxzZVwiXG5cdFx0XHQ6YXJpYS1sYWJlbGxlZGJ5PVwidGl0bGVJZFwiXG5cdFx0XHQ6YXJpYS1kZXNjcmliZWRieT1cImRlc2NJZFwiXG5cdFx0PlxuXHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX2Nsb3NlXCJcblx0XHRcdFx0d2VpZ2h0PVwicXVpZXRcIlxuXHRcdFx0XHRpY29uPVwiY2xvc2VcIlxuXHRcdFx0XHQ6dGl0bGU9XCJ1c2VJMThuKCdjbG9zZScpXCJcblx0XHRcdFx0OmFyaWEtbGFiZWw9XCJ1c2VJMThuKCdjbG9zZScpXCJcblx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRAY2xpY2s9XCJvcHRPdXRBbmRDbG9zZVwiXG5cdFx0XHQvPlxuXHRcdFx0PGgyIDppZD1cInRpdGxlSWRcIiBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X190aXRsZSB2YS10aXRsZVwiPlxuXHRcdFx0XHR7eyB1c2VJMThuKGlzVmFyaWFudE5hcnJvd2VkID8gJ3ZwLmhlYWRlci5hbHQnIDogJ3ZwLmhlYWRlcicpIH19PGJyIC8+XG5cdFx0XHRcdDxWQUZhZGVUcmFuc2l0aW9uPlxuXHRcdFx0XHRcdDxzcGFuXG5cdFx0XHRcdFx0XHR2LWlmPVwiIWlzVmFyaWFudE5hcnJvd2VkXCJcblx0XHRcdFx0XHRcdDprZXk9XCJzaHVmZmxlZFZhcmlhbnRcIlxuXHRcdFx0XHRcdFx0Omxhbmc9XCJgemgtJHtzaHVmZmxlZFZhcmlhbnR9YFwiXG5cdFx0XHRcdFx0XHRjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X190aXRsZV9fdmFyaWFudFwiXG5cdFx0XHRcdFx0XHQ+e3sgbWVzc2FnZXMudmFyaWFudHNbc2h1ZmZsZWRWYXJpYW50XSB9fTwvc3BhblxuXHRcdFx0XHRcdD5cblx0XHRcdFx0PC9WQUZhZGVUcmFuc2l0aW9uPlxuXHRcdFx0PC9oMj5cblx0XHRcdDxwIDppZD1cImRlc2NJZFwiIGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX2Rlc2MgdmEtcGFyYVwiPlxuXHRcdFx0XHR7eyB1c2VJMThuKGlzVmFyaWFudE5hcnJvd2VkID8gJ3ZwLm1haW4uYWx0JyA6ICd2cC5tYWluJykgfX1cblx0XHRcdDwvcD5cblx0XHRcdDxkaXYgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc1wiPlxuXHRcdFx0XHQ8IS0tIGluZmVycmVkVmFyaWFudCBpcyBub24tbnVsbCwgZ3VhcmRlZCBieSBpc1ZhcmlhbnROYXJyb3dlZCAtLT5cblx0XHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdFx0di1mb3I9XCJ2YXJpYW50IGluIGlzVmFyaWFudE5hcnJvd2VkICYmIGluZmVycmVkVmFyaWFudCAhPT0gbnVsbFxuXHRcdFx0XHRcdFx0PyBbaW5mZXJyZWRWYXJpYW50XVxuXHRcdFx0XHRcdFx0OiBWQUxJRF9WQVJJQU5UU1wiXG5cdFx0XHRcdFx0OmtleT1cInZhcmlhbnRcIlxuXHRcdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNfX2J1dHRvblwiXG5cdFx0XHRcdFx0OmNsYXNzPVwieyd2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uLS1wcmltYXJ5JzogaXNWYXJpYW50TmFycm93ZWR9XCJcblx0XHRcdFx0XHRpbmRpY2F0b3I9XCJhcnJvd05leHRcIlxuXHRcdFx0XHRcdHdlaWdodD1cInF1aWV0XCJcblx0XHRcdFx0XHRhY3Rpb249XCJwcm9ncmVzc2l2ZVwiXG5cdFx0XHRcdFx0Omxhbmc9XCJ2YXJpYW50XCJcblx0XHRcdFx0XHQ6ZGlzYWJsZWQ9XCJkaXNhYmxlZFwiXG5cdFx0XHRcdFx0QGNsaWNrPVwic2VsZWN0KHZhcmlhbnQpXCJcblx0XHRcdFx0PlxuXHRcdFx0XHRcdHt7IG1lc3NhZ2VzLnZhcmlhbnRzW3ZhcmlhbnRdIH19XG5cdFx0XHRcdDwvVkFCdXR0b24+XG5cdFx0XHRcdDxWQUJ1dHRvblxuXHRcdFx0XHRcdHYtaWY9XCJpc1ZhcmlhbnROYXJyb3dlZFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uXCJcblx0XHRcdFx0XHRpbmRpY2F0b3I9XCJhcnJvd05leHRcIlxuXHRcdFx0XHRcdHdlaWdodD1cInF1aWV0XCJcblx0XHRcdFx0XHRhY3Rpb249XCJwcm9ncmVzc2l2ZVwiXG5cdFx0XHRcdFx0OmRpc2FibGVkPVwiZGlzYWJsZWRcIlxuXHRcdFx0XHRcdEBjbGljaz1cImlzVmFyaWFudE5hcnJvd2VkID0gZmFsc2VcIlxuXHRcdFx0XHQ+XG5cdFx0XHRcdFx0e3sgdXNlSTE4bigndnAuYnV0dG9uLm90aGVyJykgfX1cblx0XHRcdFx0PC9WQUJ1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGZvb3RlciBjbGFzcz1cInZhLXZhcmlhbnQtcHJvbXB0X19mb290ZXJcIj5cblx0XHRcdFx0PHAgY2xhc3M9XCJ2YS1wYXJhIHZhLXBhcmEtLXN1YnRsZVwiPlxuXHRcdFx0XHRcdHt7IHVzZUkxOG4oJ3ZwLm1haW4uZXh0JykgfX1cblx0XHRcdFx0PC9wPlxuXHRcdFx0PC9mb290ZXI+XG5cdFx0PC9kaXY+XG5cdDwvVHJhbnNpdGlvbj5cbjwvdGVtcGxhdGU+XG5cbjxzdHlsZSBzY29wZWQgbGFuZz1cImxlc3NcIj5cbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uL3N0eWxlcy9taXhpbnMubGVzcyc7XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9zdHlsZXMvdG9rZW5zLmxlc3MnO1xuXG4udmEtdGl0bGUge1xuXHRib3JkZXI6IDA7IC8vIFJlc2V0XG5cdHBhZGRpbmc6IDA7IC8vIFJlc2V0XG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cblx0Zm9udC1zaXplOiBAZm9udC1zaXplLXh4LWxhcmdlO1xuXHRmb250LXdlaWdodDogQGZvbnQtd2VpZ2h0LWJvbGQ7XG5cdG1hcmdpbjogQHNwYWNpbmctNTAgQHNwYWNpbmctMDtcblx0Y29sb3I6IEBjb2xvci1iYXNlO1xufVxuXG4udmEtcGFyYSB7XG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XG5cdG1hcmdpbi10b3A6IEBzcGFjaW5nLTUwO1xuXHRtYXJnaW4tYm90dG9tOiBAc3BhY2luZy01MDtcblx0Y29sb3I6IEBjb2xvci1iYXNlO1xuXG5cdCYtLXN1YnRsZSB7XG5cdFx0Y29sb3I6IEBjb2xvci1zdWJ0bGU7XG5cdFx0Zm9udC1zaXplOiBAZm9udC1zaXplLXgtc21hbGw7XG5cdFx0bWFyZ2luLWJvdHRvbTogQHNwYWNpbmctMzU7XG5cdH1cbn1cblxuLnZhLXZhcmlhbnQtcHJvbXB0IHtcblx0Ym94LXNpemluZzogQGJveC1zaXppbmctYmFzZTtcblx0ei1pbmRleDogQHotaW5kZXgtb3ZlcmxheTtcblx0cGFkZGluZzogQHNwYWNpbmctMTAwIEBzcGFjaW5nLTE1MDtcblx0cG9zaXRpb246IGZpeGVkO1xuXHRsZWZ0OiBAc3BhY2luZy1ob3Jpem9udGFsLWRpYWxvZztcblx0Ym90dG9tOiBAc3BhY2luZy12ZXJ0aWNhbC1kaWFsb2c7XG5cdHdpZHRoOiBjYWxjKDEwMCUgLSBAc3BhY2luZy1ob3Jpem9udGFsLWRpYWxvZyAqIDIpO1xuXHRtYXgtd2lkdGg6IDE4ZW07XG5cdG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAyZW0pO1xuXG5cdG92ZXJmbG93OiBhdXRvO1xuXHRvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZC1jb2xvci1iYXNlO1xuXHRib3JkZXI6IEBib3JkZXItYmFzZTtcblx0Ym9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtYmFzZTtcblx0Ym94LXNoYWRvdzogQGJveC1zaGFkb3ctZHJvcC1tZWRpdW07XG5cdGZvbnQtZmFtaWx5OiBAZm9udC1mYW1pbHktc3lzdGVtLXNhbnM7XG5cdGZvbnQtc2l6ZTogMXJlbTsgLy8gUmVzZXRcblx0bGluZS1oZWlnaHQ6IG5vcm1hbDsgLy8gUmVzZXRcblxuXHQmX19jbG9zZSB7XG5cdFx0cGFkZGluZzogQHNwYWNpbmctc2hvcnRoYW5kLWJ1dHRvbi1pY29uLW9ubHk7XG5cdFx0ZmxvYXQ6IHJpZ2h0O1xuXHRcdG1hcmdpbi10b3A6IEBzcGFjaW5nLTUwO1xuXHRcdG1hcmdpbi1yaWdodDogLShAc3BhY2luZy1ob3Jpem9udGFsLWJ1dHRvbi1pY29uLW9ubHkgKyAxcHgpO1xuXHR9XG5cblx0Jl9fdGl0bGUge1xuXHRcdCZfX3ZhcmlhbnQge1xuXHRcdFx0Y29sb3I6IEBjb2xvci1wcm9ncmVzc2l2ZTtcblx0XHR9XG5cdH1cblxuXHQmX19vcHRpb25zIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cdFx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0XHRtYXJnaW46IEBzcGFjaW5nLTc1IEBzcGFjaW5nLTA7XG5cblx0XHRib3JkZXI6IDFweCBzb2xpZCBAYm9yZGVyLWNvbG9yLWJhc2U7XG5cdFx0Ym9yZGVyLXJhZGl1czogQGJvcmRlci1yYWRpdXMtYmFzZTtcblxuXHRcdCZfX2J1dHRvbiB7XG5cdFx0XHRmb250LXNpemU6IEBmb250LXNpemUtc21hbGw7XG5cdFx0XHRjb2xvcjogQGNvbG9yLWJhc2U7XG5cdFx0XHRiYWNrZ3JvdW5kLWNvbG9yOiBAYmFja2dyb3VuZC1jb2xvci1pbnRlcmFjdGl2ZS1zdWJ0bGU7XG5cdFx0XHRib3JkZXItcmFkaXVzOiAwO1xuXG5cdFx0XHQmLS1wcmltYXJ5IHtcblx0XHRcdFx0Y29sb3I6IEBjb2xvci1wcm9ncmVzc2l2ZTtcblx0XHRcdH1cblxuXHRcdFx0Jjpob3Zlcixcblx0XHRcdCY6YWN0aXZlIHtcblx0XHRcdFx0Ym9yZGVyLWNvbG9yOiBAYm9yZGVyLWNvbG9yLXRyYW5zcGFyZW50O1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufVxuXG4vKiBQcm9tcHQgdHJhbnNpdGlvbiBlZmZlY3QgKi9cbi52YS12YXJpYW50LXByb21wdC1lbnRlci1hY3RpdmUsXG4udmEtdmFyaWFudC1wcm9tcHQtbGVhdmUtYWN0aXZlIHtcblx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogQHRyYW5zaXRpb24tcHJvcGVydHktZmFkZTtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogQHRyYW5zaXRpb24tZHVyYXRpb24tbWVkaXVtO1xuXHR0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogQHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uLXN5c3RlbTtcbn1cblxuLnZhLXZhcmlhbnQtcHJvbXB0LWVudGVyLWZyb20sXG4udmEtdmFyaWFudC1wcm9tcHQtbGVhdmUtdG8ge1xuXHRvcGFjaXR5OiAwO1xufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQgeyBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVFbGVtZW50QmxvY2sgYXMgX2NyZWF0ZUVsZW1lbnRCbG9jayB9IGZyb20gXCJ2dWVcIlxuXG5jb25zdCBfaG9pc3RlZF8xID0gW1wid2lkdGhcIiwgXCJoZWlnaHRcIl1cbmNvbnN0IF9ob2lzdGVkXzIgPSB7IGtleTogMCB9XG5jb25zdCBfaG9pc3RlZF8zID0gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJwYXRoXCIsIHsgZDogXCJNMjAgMThoLTEuNDRhLjYxLjYxIDAgMDEtLjQtLjEyLjgxLjgxIDAgMDEtLjIzLS4zMUwxNyAxNWgtNWwtMSAyLjU0YS43Ny43NyAwIDAxLS4yMi4zLjU5LjU5IDAgMDEtLjQuMTRIOWw0LjU1LTExLjQ3aDEuODl6bS0zLjUzLTQuMzFMMTQuODkgOS41YTExLjYyIDExLjYyIDAgMDEtLjM5LTEuMjRxLS4wOS4zNy0uMTkuNjlsLS4xOS41Ni0xLjU4IDQuMTl6bS02LjMtMS41OGExMy40MyAxMy40MyAwIDAxLTIuOTEtMS40MSAxMS40NiAxMS40NiAwIDAwMi44MS01LjM3SDEyVjRINy4zMWE0IDQgMCAwMC0uMi0uNTZDNi44NyAyLjc5IDYuNiAyIDYuNiAybC0xLjQ3LjVzLjQuODkuNiAxLjVIMHYxLjMzaDIuMTVBMTEuMjMgMTEuMjMgMCAwMDUgMTAuN2ExNy4xOSAxNy4xOSAwIDAxLTUgMi4xcS41Ni44Mi44NyAxLjM4YTIzLjI4IDIzLjI4IDAgMDA1LjIyLTIuNTEgMTUuNjQgMTUuNjQgMCAwMDMuNTYgMS43N3pNMy42MyA1LjMzaDQuOTFhOC4xMSA4LjExIDAgMDEtMi40NSA0LjQ1IDkuMTEgOS4xMSAwIDAxLTIuNDYtNC40NXpcIiB9LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKVxuY29uc3QgX2hvaXN0ZWRfNCA9IHsga2V5OiAxIH1cbmNvbnN0IF9ob2lzdGVkXzUgPSAvKiNfX1BVUkVfXyovX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBhdGhcIiwgeyBkOiBcIm00LjM0IDIuOTMgMTIuNzMgMTIuNzMtMS40MSAxLjQxTDIuOTMgNC4zNXpcIiB9LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKVxuY29uc3QgX2hvaXN0ZWRfNiA9IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwicGF0aFwiLCB7IGQ6IFwiTTE3LjA3IDQuMzQgNC4zNCAxNy4wN2wtMS40MS0xLjQxTDE1LjY2IDIuOTN6XCIgfSwgbnVsbCwgLTEgLyogSE9JU1RFRCAqLylcbmNvbnN0IF9ob2lzdGVkXzcgPSBbXG4gIF9ob2lzdGVkXzUsXG4gIF9ob2lzdGVkXzZcbl1cbmNvbnN0IF9ob2lzdGVkXzggPSB7IGtleTogMiB9XG5jb25zdCBfaG9pc3RlZF85ID0gLyojX19QVVJFX18qL19jcmVhdGVFbGVtZW50Vk5vZGUoXCJwYXRoXCIsIHsgZDogXCJNOC41OSAzLjQyIDE0LjE3IDlIMnYyaDEyLjE3bC01LjU4IDUuNTlMMTAgMThsOC04LTgtOHpcIiB9LCBudWxsLCAtMSAvKiBIT0lTVEVEICovKVxuY29uc3QgX2hvaXN0ZWRfMTAgPSBbXG4gIF9ob2lzdGVkXzlcbl1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJzdmdcIiwge1xuICAgIGNsYXNzOiBcInZhLWljb24tYnV0dG9uX19pY29uXCIsXG4gICAgeG1sbnM6IFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICBcInhtbG5zOnhsaW5rXCI6IFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGlua1wiLFxuICAgIHdpZHRoOiAkcHJvcHMuc2l6ZSxcbiAgICBoZWlnaHQ6ICRwcm9wcy5zaXplLFxuICAgIHZpZXdCb3g6IFwiMCAwIDIwIDIwXCIsXG4gICAgXCJhcmlhLWhpZGRlblwiOiBcInRydWVcIlxuICB9LCBbXG4gICAgKCRwcm9wcy5pY29uID09PSAnbGFuZycpXG4gICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJnXCIsIF9ob2lzdGVkXzIsIFtcbiAgICAgICAgICBfY3JlYXRlQ29tbWVudFZOb2RlKFwiIGVzbGludC1kaXNhYmxlIFwiKSxcbiAgICAgICAgICBfaG9pc3RlZF8zLFxuICAgICAgICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgZXNsaW50LWVuYWJsZSBcIilcbiAgICAgICAgXSkpXG4gICAgICA6ICgkcHJvcHMuaWNvbiA9PT0gJ2Nsb3NlJylcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZ1wiLCBfaG9pc3RlZF80LCBbLi4uX2hvaXN0ZWRfN10pKVxuICAgICAgICA6IChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soXCJnXCIsIF9ob2lzdGVkXzgsIFsuLi5faG9pc3RlZF8xMF0pKVxuICBdLCA4IC8qIFBST1BTICovLCBfaG9pc3RlZF8xKSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFJY29uLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUljb24udnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUljb24udnVlXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgeyBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgcmVuZGVyU2xvdCBhcyBfcmVuZGVyU2xvdCwgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIG5vcm1hbGl6ZUNsYXNzIGFzIF9ub3JtYWxpemVDbGFzcywgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi1iYjc3MzRiMVwiKSxuPW4oKSxfcG9wU2NvcGVJZCgpLG4pXG5jb25zdCBfaG9pc3RlZF8xID0ge1xuICBrZXk6IDEsXG4gIGNsYXNzOiBcInZhLWJ1dHRvbl9fdGV4dFwiXG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlLCAkcHJvcHMsICRzZXR1cCwgJGRhdGEsICRvcHRpb25zKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiYnV0dG9uXCIsIHtcbiAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcInZhLWJ1dHRvblwiLCB7XG5cdFx0XHQndmEtYnV0dG9uLS1hY3Rpb24tcHJvZ3Jlc3NpdmUnOiAkcHJvcHMuYWN0aW9uID09PSAncHJvZ3Jlc3NpdmUnLFxuXHRcdFx0J3ZhLWJ1dHRvbi0td2VpZ2h0LXF1aWV0JzogJHByb3BzLndlaWdodCA9PT0gJ3F1aWV0Jyxcblx0XHR9XSksXG4gICAgb25DbGljazogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKF9jdHguJGVtaXQoJ2NsaWNrJykpKVxuICB9LCBbXG4gICAgKCRwcm9wcy5pY29uICE9PSB1bmRlZmluZWQpXG4gICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQUljb25cIl0sIHtcbiAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgY2xhc3M6IFwidmEtYnV0dG9uX19pY29uXCIsXG4gICAgICAgICAgaWNvbjogJHByb3BzLmljb24sXG4gICAgICAgICAgc2l6ZTogMjBcbiAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wiaWNvblwiXSkpXG4gICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpLFxuICAgIChfY3R4LiRzbG90c1snZGVmYXVsdCddKVxuICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic3BhblwiLCBfaG9pc3RlZF8xLCBbXG4gICAgICAgICAgX3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiZGVmYXVsdFwiLCB7fSwgdW5kZWZpbmVkLCB0cnVlKVxuICAgICAgICBdKSlcbiAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSksXG4gICAgKCRwcm9wcy5pbmRpY2F0b3IgIT09IHVuZGVmaW5lZClcbiAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBSWNvblwiXSwge1xuICAgICAgICAgIGtleTogMixcbiAgICAgICAgICBjbGFzczogXCJ2YS1idXR0b25fX2luZGljYXRvclwiLFxuICAgICAgICAgIGljb246ICRwcm9wcy5pbmRpY2F0b3IsXG4gICAgICAgICAgc2l6ZTogMTZcbiAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1wiaWNvblwiXSkpXG4gICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gIF0sIDIgLyogQ0xBU1MgKi8pKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUJ1dHRvbi52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJFOlxcXFxnaFJlcG9cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUJ1dHRvbi52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBQnV0dG9uLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFCdXR0b24udnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWJiNzczNGIxXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgeyByZW5kZXJTbG90IGFzIF9yZW5kZXJTbG90LCBUcmFuc2l0aW9uIGFzIF9UcmFuc2l0aW9uLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrIH0gZnJvbSBcInZ1ZVwiXG5cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXIoX2N0eCwgX2NhY2hlKSB7XG4gIHJldHVybiAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soX1RyYW5zaXRpb24sIHtcbiAgICBuYW1lOiBcInZhLWZhZGVcIixcbiAgICBtb2RlOiBcIm91dC1pblwiXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICBfcmVuZGVyU2xvdChfY3R4LiRzbG90cywgXCJkZWZhdWx0XCIsIHt9LCB1bmRlZmluZWQsIHRydWUpXG4gICAgXSksXG4gICAgXzogMyAvKiBGT1JXQVJERUQgKi9cbiAgfSkpXG59IiwgImNvbnN0IHNjcmlwdCA9IHt9O2ltcG9ydCBcIkU6XFxcXGdoUmVwb1xcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBRmFkZVRyYW5zaXRpb24udnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQUZhZGVUcmFuc2l0aW9uLnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFGYWRlVHJhbnNpdGlvbi52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtYmI5YzU3NTFcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7Y29tcHV0ZWR9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vbWVzc2FnZXMuanNvbic7XG5pbXBvcnQge3dnVXNlclZhcmlhbnR9IGZyb20gJy4uL21vZHVsZXMvdXRpbHMnO1xuXG4vLyBJbnRlcmZhY2UgdmFyaWFudCBvZiB2YXJpYW50IHByb21wdFxuY29uc3QgaTE4blZhcmlhbnQgPSBjb21wdXRlZCgoKSA9PiB7XG5cdGlmICh3Z1VzZXJWYXJpYW50LnZhbHVlID09PSAnemgnKSB7XG5cdFx0Ly8gTm8gY29udmVyc2lvbjogdXNlIHJhbmRvbWx5IHNlbGVjdGVkIHZhcmlhbnRcblx0XHRyZXR1cm4gTWF0aC5yYW5kb20oKSA+IDAuNSA/ICdoYW5zJyA6ICdoYW50Jztcblx0fVxuXHRpZiAoWyd6aC1oYW50JywgJ3poLXR3JywgJ3poLWhrJywgJ3poLW1vJ10uaW5jbHVkZXMod2dVc2VyVmFyaWFudC52YWx1ZSkpIHtcblx0XHRyZXR1cm4gJ2hhbnQnO1xuXHR9XG5cblx0cmV0dXJuICdoYW5zJztcbn0pO1xuXG5mdW5jdGlvbiB1c2VJMThuKGtleTogc3RyaW5nKTogc3RyaW5nIHtcblx0Y29uc3QgY3VycmVudE1zZ3NHcm91cDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IG1lc3NhZ2VzW2kxOG5WYXJpYW50LnZhbHVlXTtcblx0cmV0dXJuIGN1cnJlbnRNc2dzR3JvdXBba2V5XSA/PyBrZXk7XG59XG5cbmV4cG9ydCB7dXNlSTE4biBhcyBkZWZhdWx0LCBpMThuVmFyaWFudH07XG4iLCAie1xuXHRcInZhcmlhbnRzXCI6IHtcblx0XHRcInpoLWNuXCI6IFwi5Lit5Zu95aSn6ZmG566A5L2TXCIsXG5cdFx0XCJ6aC1zZ1wiOiBcIuaWsOWKoOWdoeeugOS9k1wiLFxuXHRcdFwiemgtbXlcIjogXCLpqazmnaXopb/kuprnroDkvZNcIixcblx0XHRcInpoLWhrXCI6IFwi5Lit5ZyL6aaZ5riv57mB6auUXCIsXG5cdFx0XCJ6aC1tb1wiOiBcIuS4reWci+a+s+mWgOe5gemrlFwiLFxuXHRcdFwiemgtdHdcIjogXCLkuK3lnIvoh7rngaPnuYHpq5RcIlxuXHR9LFxuXHRcImhhbnNcIjoge1xuXHRcdFwic3BhY2VcIjogXCJcIixcblx0XHRcImNsb3NlXCI6IFwi5YWz6ZetXCIsXG5cdFx0XCJ2cC5oZWFkZXJcIjogXCLmiJHku6zmlK/mjIFcIixcblx0XHRcInZwLmhlYWRlci5hbHRcIjogXCLorrDkvY/mraTlj5jkvZPvvJ9cIixcblx0XHRcInZwLm1haW5cIjogXCLpgInlj5blhoXlrrnnmoTor63oqIDlj5jkvZNcIixcblx0XHRcInZwLm1haW4uYWx0XCI6IFwi5Lul5ZCO6YO95L2/55So5q2k5Y+Y5L2T5ZGI546w5YaF5a65XCIsXG5cdFx0XCJ2cC5tYWluLmV4dFwiOiBcIuS/neWtmOaCqOWBj+WlveeahOS4reaWh+ivreiogOWPmOS9k++8jOS7pemBv+WFjeaYvuekuueugOe5gea3t+adgueahOWGheWuue+8jOaPkOS+m+acgOS9s+eahOmYheivu+S9k+mqjOOAglwiLFxuXHRcdFwidnAuYnV0dG9uLm9rXCI6IFwi56Gu5a6aXCIsXG5cdFx0XCJ2cC5idXR0b24ub3RoZXJcIjogXCLlhbbku5ZcIlxuXHR9LFxuXHRcImhhbnRcIjoge1xuXHRcdFwic3BhY2VcIjogXCJcIixcblx0XHRcImNsb3NlXCI6IFwi6Zec6ZaJXCIsXG5cdFx0XCJ2cC5oZWFkZXJcIjogXCLmiJHlgJHmlK/mj7RcIixcblx0XHRcInZwLmhlYWRlci5hbHRcIjogXCLoqJjkvY/mraTororpq5TvvJ9cIixcblx0XHRcInZwLm1haW5cIjogXCLpgbjlj5blhaflrrnnmoToqp7oqIDororpq5RcIixcblx0XHRcInZwLm1haW4uYWx0XCI6IFwi5Lul5b6M6YO95L2/55So5q2k6K6K6auU5ZGI54++5YWn5a65XCIsXG5cdFx0XCJ2cC5tYWluLmV4dFwiOiBcIuWEsuWtmOaCqOWBj+WlveeahOS4reaWh+iqnuiogOiuiumrlO+8jOS7pemBv+WFjemhr+ekuuewoee5gea3t+mbnOeahOWFp+Wuue+8jOaPkOS+m+acgOS9s+eahOmWseiugOmrlOmpl+OAglwiLFxuXHRcdFwidnAuYnV0dG9uLm9rXCI6IFwi56K65a6aXCIsXG5cdFx0XCJ2cC5idXR0b24ub3RoZXJcIjogXCLlhbbku5ZcIlxuXHR9XG59XG4iLCAiaW1wb3J0IHt0eXBlIFZhbGlkVmFyaWFudH0gZnJvbSAnZXh0LmdhZGdldC5WYXJpYW50QWxseSc7XG5pbXBvcnQge2NvbXB1dGVkLCByZWZ9IGZyb20gJ3Z1ZSc7XG5cbmNvbnN0IFZBTElEX1ZBUklBTlRTID0gWyd6aC1jbicsICd6aC1zZycsICd6aC1teScsICd6aC10dycsICd6aC1oaycsICd6aC1tbyddIGFzIGNvbnN0O1xuXG4vLyBXcmFwIHdnVXNlclZhcmlhbnQgaW4gYSByZWYgZm9yIGRlYnVnZ2luZyBwdXJwb3Nlcy5cbi8vIEl0IGhhcyBubyByZWFjdGl2aXR5IGluIHByb2R1Y3Rpb24uIChjaGFuZ2VzIHRvIHdnVXNlclZhcmlhbnQgd2lsbCBub3QgYmUgcmVmbGVjdGVkKVxuLy8gd2dVc2VyVmFyaWFudCBjYW4gYmUgbnVsbCwgc28gZmFsbHMgYmFjayB0byBhbiBlbXB0eSBzdHJpbmcuXG5jb25zdCB3Z1VzZXJWYXJpYW50ID0gcmVmKG13LmNvbmZpZy5nZXQoJ3dnVXNlclZhcmlhbnQnKSA/PyAnJyk7XG5cbmZ1bmN0aW9uIGlzTW9iaWxlRGV2aWNlKCk6IGJvb2xlYW4ge1xuXHQvLyBCcm93c2VyIHN1cHBvcnQ6XG5cdC8vIENocm9taXVtIG9uIHNvbWUgQW5kcm9pZCBkZXZpY2UgKGUuZy4gU2Ftc3VuZykgaGFzIFwiKGhvdmVyOiBob3ZlcilcIiBzZXRcblx0Ly8gU28gY2hlY2sgcG9pbnRlciB0b2dldGhlclxuXHRyZXR1cm4gbWF0Y2hNZWRpYSgnKGhvdmVyOiBub25lKSwgKHBvaW50ZXI6IGNvYXJzZSknKS5tYXRjaGVzO1xufVxuXG5mdW5jdGlvbiBnZXRNb3VudFBvaW50KCk6IEVsZW1lbnQge1xuXHRzd2l0Y2ggKG13LmNvbmZpZy5nZXQoJ3NraW4nKSkge1xuXHRcdGNhc2UgJ3ZlY3Rvci0yMDIyJzpcblx0XHRcdHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubXctcGFnZS1jb250YWluZXInKVswXSA/PyBkb2N1bWVudC5ib2R5O1xuXHRcdGNhc2UgJ2dvbmdiaSc6XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI213LWNvbnRlbnQtYmxvY2snKSA/PyBkb2N1bWVudC5ib2R5O1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gZG9jdW1lbnQuYm9keTtcblx0fVxufVxuXG5jb25zdCBpbmZlcnJlZFZhcmlhbnQgPSBjb21wdXRlZCgoKSA9PiB7XG5cdGlmICgoVkFMSURfVkFSSUFOVFMgYXMgUmVhZG9ubHlBcnJheTxzdHJpbmc+KS5pbmNsdWRlcyh3Z1VzZXJWYXJpYW50LnZhbHVlKSkge1xuXHRcdHJldHVybiB3Z1VzZXJWYXJpYW50LnZhbHVlIGFzIFZhbGlkVmFyaWFudDtcblx0fVxuXHRyZXR1cm4gbnVsbDtcbn0pO1xuXG4vKipcbiAqIFNodWZmbGUgYmV0d2VlbiBhbGwgdmFsaWQgdmFyaWFudHMuXG4gKlxuICogQHBhcmFtIGxhc3QgbGFzdCBzaHVmZmxlZCB2YXJpYW50LCB1c2VkIHRvIHByZXZlbnQgZHVwbGljYXRpb25zXG4gKiBAcmV0dXJucyBzaHVmZmxlZCB2YXJpYW50XG4gKi9cbmZ1bmN0aW9uIHNodWZmbGVWYXJpYW50KGxhc3Q/OiBWYWxpZFZhcmlhbnQpOiBWYWxpZFZhcmlhbnQge1xuXHRjb25zdCB0YXJnZXRBcnJheSA9IFsuLi5WQUxJRF9WQVJJQU5UU10uZmlsdGVyKChpKSA9PiB7XG5cdFx0cmV0dXJuIGkgIT09IGxhc3Q7XG5cdH0pO1xuXHRjb25zdCByYW5kb21JbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHRhcmdldEFycmF5Lmxlbmd0aCk7XG5cdHJldHVybiB0YXJnZXRBcnJheVtyYW5kb21JbmRleF0hO1xufVxuXG5leHBvcnQge1ZBTElEX1ZBUklBTlRTLCB3Z1VzZXJWYXJpYW50LCBpc01vYmlsZURldmljZSwgZ2V0TW91bnRQb2ludCwgaW5mZXJyZWRWYXJpYW50LCBzaHVmZmxlVmFyaWFudH07XG4iLCAibGV0IGNvdW50ZXIgPSAwO1xuXG4vKipcbiAqIFJldHVybiBhIHVuaXF1ZSBlbGVtZW50IElEIG9uIGVhY2ggY2FsbC5cbiAqXG4gKiBAcmV0dXJucyBpZFxuICovXG5mdW5jdGlvbiB1c2VVbmlxdWVJZCgpOiBzdHJpbmcge1xuXHRyZXR1cm4gYHZhLSR7Y291bnRlcisrfWA7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVVuaXF1ZUlkO1xuIiwgImltcG9ydCB7UmVmLCByZWYsIHdhdGNofSBmcm9tICd2dWUnO1xuaW1wb3J0IHt0eXBlIFZhbGlkVmFyaWFudH0gZnJvbSAnZXh0LmdhZGdldC5WYXJpYW50QWxseSc7XG5pbXBvcnQge2luZmVycmVkVmFyaWFudCwgc2h1ZmZsZVZhcmlhbnR9IGZyb20gJy4uL21vZHVsZXMvdXRpbHMnO1xuXG5jb25zdCBJTlRFUlZBTCA9IDMgKiAxMDAwO1xuXG4vKipcbiAqIFJldHVybiBhIHJlZiB3aGljaCBzaHVmZmxlIGJldHdlZW4gYWxsIHBvc3NpYmxlIHZhcmlhbnRzLlxuICpcbiAqIEBwYXJhbSBpc0ZyZWV6ZWQgc2hvdWxkIHNodWZmbGluZyBwYXVzZSBvciBub3RcbiAqL1xuZnVuY3Rpb24gdXNlU2h1ZmZsZWRWYXJpYW50KGlzRnJlZXplZDogUmVmPGJvb2xlYW4+KTogUmVmPFZhbGlkVmFyaWFudD4ge1xuXHRjb25zdCByZXN1bHQgPSByZWY8VmFsaWRWYXJpYW50PihzaHVmZmxlVmFyaWFudCgpKTtcblx0bGV0IGlkOiBudW1iZXI7XG5cblx0d2F0Y2goXG5cdFx0aXNGcmVlemVkLFxuXHRcdChuZXdWYWx1ZSkgPT4ge1xuXHRcdFx0aWYgKG5ld1ZhbHVlKSB7XG5cdFx0XHRcdGNsZWFySW50ZXJ2YWwoaWQpO1xuXHRcdFx0XHQvLyBBdHRlbXB0IHRvIGZyZWV6ZSBhdCBpbmZlcnJlZCB2YXJpYW50IGF0IGEgYmVzdCBlZmZvcnRcblx0XHRcdFx0Ly8gVGhpcyBzaG91bGQgYmUgbW9zdCBjYXNlc1xuXHRcdFx0XHRyZXN1bHQudmFsdWUgPSBpbmZlcnJlZFZhcmlhbnQudmFsdWUgPz8gc2h1ZmZsZVZhcmlhbnQoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGlkID0gd2luZG93LnNldEludGVydmFsKCgpID0+IHtcblx0XHRcdFx0XHRyZXN1bHQudmFsdWUgPSBzaHVmZmxlVmFyaWFudChyZXN1bHQudmFsdWUpO1xuXHRcdFx0XHR9LCBJTlRFUlZBTCk7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHR7aW1tZWRpYXRlOiB0cnVlfVxuXHQpO1xuXG5cdHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHVzZVNodWZmbGVkVmFyaWFudDtcbiIsICJpbXBvcnQge1dyaXRhYmxlQ29tcHV0ZWRSZWYsIGNvbXB1dGVkfSBmcm9tICd2dWUnO1xuXG4vKipcbiAqIFJldHVybiBhIGNvbXB1dGVkIHByb3BlcnR5IHRoYXQgcmV0dXJucyB0aGUgY29ycmVzcG9uZGluZyBwcm9wIHZhbHVlIHdoZW4gaXMgYWNjZXNzZWRcbiAqIGFuZCBmaXJlcyBhbiBldmVudCB3aGVuIGlzIHNldC4gVXNlZCB3aXRoIHYtbW9kZWwuXG4gKlxuICogQHBhcmFtIHByb3BzIHByb3BzIGZpZWxkIG9mIGEgY29tcG9uZW50XG4gKiBAcGFyYW0gZW1pdCBlbWl0IGZ1bmN0aW9uIG9mIGEgY29tcG9uZW50XG4gKiBAcGFyYW0gbmFtZSBuYW1lIG9mIHRoZSBwcm9wXG4gKiBAcmV0dXJuIHdyYXBwZWQgY29tcHV0ZXIgcHJvcGVydHlcbiAqL1xuZnVuY3Rpb24gdXNlTW9kZWxXcmFwcGVyPFQgZXh0ZW5kcyBzdHJpbmcsIFAgZXh0ZW5kcyBSZWNvcmQ8VCwgdW5rbm93bj4+KFxuXHRwcm9wczogUCxcblx0ZW1pdDogKGV2ZW50OiBgdXBkYXRlOiR7VH1gLCB2YWx1ZTogUFtUXSkgPT4gdm9pZCxcblx0bmFtZTogVCA9ICdtb2RlbFZhbHVlJyBhcyBUXG4pOiBXcml0YWJsZUNvbXB1dGVkUmVmPFBbVF0+IHtcblx0cmV0dXJuIGNvbXB1dGVkKHtcblx0XHRnZXQoKSB7XG5cdFx0XHRyZXR1cm4gcHJvcHNbbmFtZV07XG5cdFx0fSxcblx0XHRzZXQodmFsdWUpIHtcblx0XHRcdGVtaXQoYHVwZGF0ZToke25hbWV9YCwgdmFsdWUpO1xuXHRcdH0sXG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VNb2RlbFdyYXBwZXI7XG4iLCAiaW1wb3J0IHtSZWYsIFdhdGNoU291cmNlLCBjb21wdXRlZCwgc2hhbGxvd1JlZiwgd2F0Y2h9IGZyb20gJ3Z1ZSc7XG5cbi8qKlxuICogQ3JlYXRlIGEgcmVmIHRoYXQsIGNhbiBiZSBpbmRlcGVuZGVudGx5IHVwZGF0ZWQsIGJ1dCB3aGVuIGl0cyBkZWZhdWx0XG4gKiB2YWx1ZSBjaGFuZ2VzLCBpdCBpcyByZXN0b3JlZCB0byBpdHMgKG5ldykgZGVmYXVsdCB2YWx1ZS5cbiAqXG4gKiBVc2VkIGZvciBkZWJ1Z2dpbmcuXG4gKi9cbmZ1bmN0aW9uIHVzZURlZmF1bHQ8VD4oZGVmYXVsdFZhbHVlOiBXYXRjaFNvdXJjZTxUPik6IFJlZjxUPiB7XG5cdGNvbnN0IHJlYWxSZWYgPSBzaGFsbG93UmVmPFQ+KHR5cGVvZiBkZWZhdWx0VmFsdWUgPT09ICdmdW5jdGlvbicgPyBkZWZhdWx0VmFsdWUoKSA6IGRlZmF1bHRWYWx1ZS52YWx1ZSk7XG5cblx0d2F0Y2goXG5cdFx0ZGVmYXVsdFZhbHVlLFxuXHRcdChuZXdWYWx1ZSkgPT4ge1xuXHRcdFx0cmVhbFJlZi52YWx1ZSA9IG5ld1ZhbHVlO1xuXHRcdH0sXG5cdFx0e2RlZXA6IHRydWV9XG5cdCk7XG5cblx0cmV0dXJuIGNvbXB1dGVkKHtcblx0XHRnZXQoKSB7XG5cdFx0XHRyZXR1cm4gcmVhbFJlZi52YWx1ZTtcblx0XHR9LFxuXHRcdHNldChuZXdWYWx1ZSkge1xuXHRcdFx0cmVhbFJlZi52YWx1ZSA9IG5ld1ZhbHVlO1xuXHRcdH0sXG5cdH0pO1xufVxuXG5leHBvcnQgZGVmYXVsdCB1c2VEZWZhdWx0O1xuIiwgImltcG9ydCB7IGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgdG9EaXNwbGF5U3RyaW5nIGFzIF90b0Rpc3BsYXlTdHJpbmcsIGNyZWF0ZUVsZW1lbnRWTm9kZSBhcyBfY3JlYXRlRWxlbWVudFZOb2RlLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCB3aXRoQ3R4IGFzIF93aXRoQ3R4LCBjcmVhdGVUZXh0Vk5vZGUgYXMgX2NyZWF0ZVRleHRWTm9kZSwgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBub3JtYWxpemVDbGFzcyBhcyBfbm9ybWFsaXplQ2xhc3MsIGNyZWF0ZUJsb2NrIGFzIF9jcmVhdGVCbG9jaywgVHJhbnNpdGlvbiBhcyBfVHJhbnNpdGlvbiwgcHVzaFNjb3BlSWQgYXMgX3B1c2hTY29wZUlkLCBwb3BTY29wZUlkIGFzIF9wb3BTY29wZUlkIH0gZnJvbSBcInZ1ZVwiXG5cbmNvbnN0IF93aXRoU2NvcGVJZCA9IG4gPT4gKF9wdXNoU2NvcGVJZChcImRhdGEtdi01YTQ0Y2M3NVwiKSxuPW4oKSxfcG9wU2NvcGVJZCgpLG4pXG5jb25zdCBfaG9pc3RlZF8xID0gW1wibGFuZ1wiLCBcImFyaWEtbGFiZWxsZWRieVwiLCBcImFyaWEtZGVzY3JpYmVkYnlcIl1cbmNvbnN0IF9ob2lzdGVkXzIgPSBbXCJpZFwiXVxuY29uc3QgX2hvaXN0ZWRfMyA9IC8qI19fUFVSRV9fKi8gX3dpdGhTY29wZUlkKCgpID0+IC8qI19fUFVSRV9fKi9fY3JlYXRlRWxlbWVudFZOb2RlKFwiYnJcIiwgbnVsbCwgbnVsbCwgLTEgLyogSE9JU1RFRCAqLykpXG5jb25zdCBfaG9pc3RlZF80ID0gW1wibGFuZ1wiXVxuY29uc3QgX2hvaXN0ZWRfNSA9IFtcImlkXCJdXG5jb25zdCBfaG9pc3RlZF82ID0geyBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc1wiIH1cbmNvbnN0IF9ob2lzdGVkXzcgPSB7IGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0X19mb290ZXJcIiB9XG5jb25zdCBfaG9pc3RlZF84ID0geyBjbGFzczogXCJ2YS1wYXJhIHZhLXBhcmEtLXN1YnRsZVwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfVHJhbnNpdGlvbiwge1xuICAgIG5hbWU6IFwidmEtdmFyaWFudC1wcm9tcHRcIixcbiAgICBhcHBlYXI6IFwiXCJcbiAgfSwge1xuICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICgkcHJvcHMub3BlbilcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwiZGl2XCIsIHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIHJlZjogXCJwcm9tcHRcIixcbiAgICAgICAgICAgIGxhbmc6IGB6aC0keyRzZXR1cC5pMThuVmFyaWFudH1gLFxuICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRcIixcbiAgICAgICAgICAgIHJvbGU6IFwiZGlhbG9nXCIsXG4gICAgICAgICAgICBcImFyaWEtbW9kYWxcIjogXCJmYWxzZVwiLFxuICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogJHNldHVwLnRpdGxlSWQsXG4gICAgICAgICAgICBcImFyaWEtZGVzY3JpYmVkYnlcIjogJHNldHVwLmRlc2NJZFxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIF9jcmVhdGVWTm9kZSgkc2V0dXBbXCJWQUJ1dHRvblwiXSwge1xuICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fY2xvc2VcIixcbiAgICAgICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgICAgIGljb246IFwiY2xvc2VcIixcbiAgICAgICAgICAgICAgdGl0bGU6ICRzZXR1cC51c2VJMThuKCdjbG9zZScpLFxuICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogJHNldHVwLnVzZUkxOG4oJ2Nsb3NlJyksXG4gICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgIG9uQ2xpY2s6ICRzZXR1cC5vcHRPdXRBbmRDbG9zZVxuICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1widGl0bGVcIiwgXCJhcmlhLWxhYmVsXCIsIFwiZGlzYWJsZWRcIl0pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImgyXCIsIHtcbiAgICAgICAgICAgICAgaWQ6ICRzZXR1cC50aXRsZUlkLFxuICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fdGl0bGUgdmEtdGl0bGVcIlxuICAgICAgICAgICAgfSwgW1xuICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkID8gJ3ZwLmhlYWRlci5hbHQnIDogJ3ZwLmhlYWRlcicpKSwgMSAvKiBURVhUICovKSxcbiAgICAgICAgICAgICAgX2hvaXN0ZWRfMyxcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIlZBRmFkZVRyYW5zaXRpb25cIl0sIG51bGwsIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICAoISRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZClcbiAgICAgICAgICAgICAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic3BhblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk6ICRzZXR1cC5zaHVmZmxlZFZhcmlhbnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsYW5nOiBgemgtJHskc2V0dXAuc2h1ZmZsZWRWYXJpYW50fWAsXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fdGl0bGVfX3ZhcmlhbnRcIlxuICAgICAgICAgICAgICAgICAgICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLm1lc3NhZ2VzLnZhcmlhbnRzWyRzZXR1cC5zaHVmZmxlZFZhcmlhbnRdKSwgOSAvKiBURVhULCBQUk9QUyAqLywgX2hvaXN0ZWRfNCkpXG4gICAgICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICAgICAgICAgICAgICBdKSxcbiAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMiksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwicFwiLCB7XG4gICAgICAgICAgICAgIGlkOiAkc2V0dXAuZGVzY0lkLFxuICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdF9fZGVzYyB2YS1wYXJhXCJcbiAgICAgICAgICAgIH0sIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkID8gJ3ZwLm1haW4uYWx0JyA6ICd2cC5tYWluJykpLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF81KSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNiwgW1xuICAgICAgICAgICAgICBfY3JlYXRlQ29tbWVudFZOb2RlKFwiIGluZmVycmVkVmFyaWFudCBpcyBub24tbnVsbCwgZ3VhcmRlZCBieSBpc1ZhcmlhbnROYXJyb3dlZCBcIiksXG4gICAgICAgICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkICYmICRzZXR1cC5pbmZlcnJlZFZhcmlhbnQgIT09IG51bGxcblx0XHRcdFx0XHRcdD8gWyRzZXR1cC5pbmZlcnJlZFZhcmlhbnRdXG5cdFx0XHRcdFx0XHQ6ICRzZXR1cC5WQUxJRF9WQVJJQU5UUywgKHZhcmlhbnQpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBQnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgICAgICBrZXk6IHZhcmlhbnQsXG4gICAgICAgICAgICAgICAgICBjbGFzczogX25vcm1hbGl6ZUNsYXNzKFtcInZhLXZhcmlhbnQtcHJvbXB0X19vcHRpb25zX19idXR0b25cIiwgeyd2YS12YXJpYW50LXByb21wdF9fb3B0aW9uc19fYnV0dG9uLS1wcmltYXJ5JzogJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkfV0pLFxuICAgICAgICAgICAgICAgICAgaW5kaWNhdG9yOiBcImFycm93TmV4dFwiLFxuICAgICAgICAgICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgICAgICAgICBhY3Rpb246IFwicHJvZ3Jlc3NpdmVcIixcbiAgICAgICAgICAgICAgICAgIGxhbmc6IHZhcmlhbnQsXG4gICAgICAgICAgICAgICAgICBkaXNhYmxlZDogJHByb3BzLmRpc2FibGVkLFxuICAgICAgICAgICAgICAgICAgb25DbGljazogJGV2ZW50ID0+ICgkc2V0dXAuc2VsZWN0KHZhcmlhbnQpKVxuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgICAgX2NyZWF0ZVRleHRWTm9kZShfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC5tZXNzYWdlcy52YXJpYW50c1t2YXJpYW50XSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgXzogMiAvKiBEWU5BTUlDICovXG4gICAgICAgICAgICAgICAgfSwgMTAzMiAvKiBQUk9QUywgRFlOQU1JQ19TTE9UUyAqLywgW1wiY2xhc3NcIiwgXCJsYW5nXCIsIFwiZGlzYWJsZWRcIiwgXCJvbkNsaWNrXCJdKSlcbiAgICAgICAgICAgICAgfSksIDEyOCAvKiBLRVlFRF9GUkFHTUVOVCAqLykpLFxuICAgICAgICAgICAgICAoJHNldHVwLmlzVmFyaWFudE5hcnJvd2VkKVxuICAgICAgICAgICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKCRzZXR1cFtcIlZBQnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHRfX29wdGlvbnNfX2J1dHRvblwiLFxuICAgICAgICAgICAgICAgICAgICBpbmRpY2F0b3I6IFwiYXJyb3dOZXh0XCIsXG4gICAgICAgICAgICAgICAgICAgIHdlaWdodDogXCJxdWlldFwiLFxuICAgICAgICAgICAgICAgICAgICBhY3Rpb246IFwicHJvZ3Jlc3NpdmVcIixcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICAgICAgb25DbGljazogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCRzZXR1cC5pc1ZhcmlhbnROYXJyb3dlZCA9IGZhbHNlKSlcbiAgICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDogX3dpdGhDdHgoKCkgPT4gW1xuICAgICAgICAgICAgICAgICAgICAgIF9jcmVhdGVUZXh0Vk5vZGUoX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigndnAuYnV0dG9uLm90aGVyJykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgICAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICAgICAgICAgICAgICAgICAgfSwgOCAvKiBQUk9QUyAqLywgW1wiZGlzYWJsZWRcIl0pKVxuICAgICAgICAgICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcImZvb3RlclwiLCBfaG9pc3RlZF83LCBbXG4gICAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJwXCIsIF9ob2lzdGVkXzgsIF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJ3ZwLm1haW4uZXh0JykpLCAxIC8qIFRFWFQgKi8pXG4gICAgICAgICAgICBdKVxuICAgICAgICAgIF0sIDggLyogUFJPUFMgKi8sIF9ob2lzdGVkXzEpKVxuICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgXSksXG4gICAgXzogMSAvKiBTVEFCTEUgKi9cbiAgfSkpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJFOlxcXFxnaFJlcG9cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHQudnVlP3R5cGU9c3R5bGUmaW5kZXg9MFwiO2ltcG9ydCB7IHJlbmRlciB9IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHQudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVZhcmlhbnRQcm9tcHQudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LTVhNDRjYzc1XCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHtyZWZ9IGZyb20gJ3Z1ZSc7XG5pbXBvcnQge3R5cGUgVmFsaWRWYXJpYW50fSBmcm9tICdleHQuZ2FkZ2V0LlZhcmlhbnRBbGx5JztcbmltcG9ydCBWQUJ1dHRvbiBmcm9tICcuL1ZBQnV0dG9uLnZ1ZSc7XG5pbXBvcnQgVkFTZWxlY3QgZnJvbSAnLi9WQVNlbGVjdC52dWUnO1xuaW1wb3J0IHVzZUkxOG4sIHtpMThuVmFyaWFudH0gZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlSTE4bic7XG5pbXBvcnQgdXNlVW5pcXVlSWQgZnJvbSAnLi4vY29tcG9zYWJsZXMvdXNlVW5pcXVlSWQnO1xuaW1wb3J0IHtWQUxJRF9WQVJJQU5UUywgaW5mZXJyZWRWYXJpYW50LCBzaHVmZmxlVmFyaWFudH0gZnJvbSAnLi4vbW9kdWxlcy91dGlscyc7XG5pbXBvcnQgbWVzc2FnZXMgZnJvbSAnLi4vbWVzc2FnZXMuanNvbic7XG5pbXBvcnQgdXNlTW9kZWxXcmFwcGVyIGZyb20gJy4uL2NvbXBvc2FibGVzL3VzZU1vZGVsV3JhcHBlcic7XG5pbXBvcnQgdXNlRGVmYXVsdCBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VEZWZhdWx0JztcblxuY29uc3QgcHJvcHMgPSB3aXRoRGVmYXVsdHMoXG5cdGRlZmluZVByb3BzPHtcblx0XHRvcGVuOiBib29sZWFuO1xuXHRcdGRpc2FibGVkPzogYm9vbGVhbjtcblx0fT4oKSxcblx0e1xuXHRcdGRpc2FibGVkOiBmYWxzZSxcblx0fVxuKTtcbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0czx7XG5cdChlOiAndXBkYXRlOm9wZW4nLCB2YWx1ZTogYm9vbGVhbik6IHZvaWQ7XG5cdChlOiAndXBkYXRlOmRpc2FibGVkJywgdmFsdWU6IGJvb2xlYW4pOiB2b2lkO1xuXHQoZTogJ3NlbGVjdCcsIHZhcmlhbnQ6IFZhbGlkVmFyaWFudCk6IHZvaWQ7XG5cdChlOiAnb3B0b3V0Jyk6IHZvaWQ7XG59PigpO1xuXG5jb25zdCBwcm9tcHQgPSByZWY8SFRNTEVsZW1lbnQgfCBudWxsPihudWxsKTtcbmNvbnN0IHRpdGxlSWQgPSB1c2VVbmlxdWVJZCgpO1xuY29uc3Qgc2VsZWN0ZWRWYXJpYW50ID0gdXNlRGVmYXVsdCgoKSA9PiBpbmZlcnJlZFZhcmlhbnQudmFsdWUgPz8gc2h1ZmZsZVZhcmlhbnQoKSk7XG5jb25zdCBpc09wZW4gPSB1c2VNb2RlbFdyYXBwZXIocHJvcHMsIGVtaXQsICdvcGVuJyk7XG5jb25zdCBpc0Rpc2FibGVkID0gdXNlTW9kZWxXcmFwcGVyKHByb3BzLCBlbWl0LCAnZGlzYWJsZWQnKTtcblxuZnVuY3Rpb24gb3B0T3V0QW5kQ2xvc2UoKSB7XG5cdGVtaXQoJ29wdG91dCcpO1xuXHRpc09wZW4udmFsdWUgPSBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2VsZWN0KHZhcmlhbnQ6IFZhbGlkVmFyaWFudCkge1xuXHRpc0Rpc2FibGVkLnZhbHVlID0gdHJ1ZTtcblx0ZW1pdCgnc2VsZWN0JywgdmFyaWFudCk7XG59XG48L3NjcmlwdD5cblxuPHRlbXBsYXRlPlxuXHQ8VHJhbnNpdGlvbiBuYW1lPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlXCIgYXBwZWFyPlxuXHRcdDxkaXZcblx0XHRcdHYtaWY9XCJvcGVuXCJcblx0XHRcdHJlZj1cInByb21wdFwiXG5cdFx0XHQ6bGFuZz1cImB6aC0ke2kxOG5WYXJpYW50fWBcIlxuXHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVcIlxuXHRcdFx0cm9sZT1cImRpYWxvZ1wiXG5cdFx0XHRhcmlhLW1vZGFsPVwiZmFsc2VcIlxuXHRcdFx0OmFyaWEtbGFiZWxsZWRieT1cInRpdGxlSWRcIlxuXHRcdD5cblx0XHRcdDxkaXYgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlclwiPlxuXHRcdFx0XHQ8aDIgOmlkPVwidGl0bGVJZFwiIGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19oZWFkZXJfX3RpdGxlIHZhLXRpdGxlXCI+XG5cdFx0XHRcdFx0e3sgdXNlSTE4bigndnAubWFpbicpIH19XG5cdFx0XHRcdDwvaDI+XG5cdFx0XHRcdDxWQUJ1dHRvblxuXHRcdFx0XHRcdGNsYXNzPVwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19oZWFkZXJfX2Nsb3NlXCJcblx0XHRcdFx0XHR3ZWlnaHQ9XCJxdWlldFwiXG5cdFx0XHRcdFx0aWNvbj1cImNsb3NlXCJcblx0XHRcdFx0XHQ6dGl0bGU9XCJ1c2VJMThuKCdjbG9zZScpXCJcblx0XHRcdFx0XHQ6YXJpYS1sYWJlbD1cInVzZUkxOG4oJ2Nsb3NlJylcIlxuXHRcdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0XHRAY2xpY2s9XCJvcHRPdXRBbmRDbG9zZVwiXG5cdFx0XHRcdC8+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxkaXYgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5cIj5cblx0XHRcdFx0PFZBU2VsZWN0XG5cdFx0XHRcdFx0di1tb2RlbD1cInNlbGVjdGVkVmFyaWFudFwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5fX3NlbGVjdFwiXG5cdFx0XHRcdFx0Omxhbmc9XCJzZWxlY3RlZFZhcmlhbnRcIlxuXHRcdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0XHQ6YXJpYS1sYWJlbGxlZGJ5PVwidGl0bGVJZFwiXG5cdFx0XHRcdD5cblx0XHRcdFx0XHQ8b3B0aW9uIHYtZm9yPVwidmFyaWFudCBpbiBWQUxJRF9WQVJJQU5UU1wiIDprZXk9XCJ2YXJpYW50XCIgOnZhbHVlPVwidmFyaWFudFwiIDpsYW5nPVwidmFyaWFudFwiPlxuXHRcdFx0XHRcdFx0e3sgbWVzc2FnZXMudmFyaWFudHNbdmFyaWFudF0gfX1cblx0XHRcdFx0XHQ8L29wdGlvbj5cblx0XHRcdFx0PC9WQVNlbGVjdD5cblx0XHRcdFx0PFZBQnV0dG9uXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5fX2FjdGlvblwiXG5cdFx0XHRcdFx0YWN0aW9uPVwicHJvZ3Jlc3NpdmVcIlxuXHRcdFx0XHRcdGljb249XCJhcnJvd05leHRcIlxuXHRcdFx0XHRcdDpkaXNhYmxlZD1cImRpc2FibGVkXCJcblx0XHRcdFx0XHRAY2xpY2s9XCJzZWxlY3Qoc2VsZWN0ZWRWYXJpYW50KVwiXG5cdFx0XHRcdFx0Pnt7IHVzZUkxOG4oJ3ZwLmJ1dHRvbi5vaycpIH19PC9WQUJ1dHRvblxuXHRcdFx0XHQ+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdDxmb290ZXIgY2xhc3M9XCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2Zvb3RlclwiPlxuXHRcdFx0XHQ8cCBjbGFzcz1cInZhLXBhcmEgdmEtcGFyYS0tc3VidGxlXCI+XG5cdFx0XHRcdFx0e3sgdXNlSTE4bigndnAubWFpbi5leHQnKSB9fVxuXHRcdFx0XHQ8L3A+XG5cdFx0XHQ8L2Zvb3Rlcj5cblx0XHQ8L2Rpdj5cblx0PC9UcmFuc2l0aW9uPlxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIHNjb3BlZCBsYW5nPVwibGVzc1wiPlxuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vc3R5bGVzL21peGlucy5sZXNzJztcbkBpbXBvcnQgKHJlZmVyZW5jZSkgJy4uL3N0eWxlcy90b2tlbnMubGVzcyc7XG5cbi52YS10aXRsZSB7XG5cdGJvcmRlcjogMDsgLy8gUmVzZXRcblx0cGFkZGluZzogMDsgLy8gUmVzZXRcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcblxuXHRmb250LXNpemU6IEBmb250LXNpemUteHgtbGFyZ2U7XG5cdGZvbnQtd2VpZ2h0OiBAZm9udC13ZWlnaHQtYm9sZDtcblx0bWFyZ2luOiBAc3BhY2luZy01MCBAc3BhY2luZy0wO1xuXHRjb2xvcjogQGNvbG9yLWJhc2U7XG59XG5cbi52YS1wYXJhIHtcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcblx0bWFyZ2luLXRvcDogQHNwYWNpbmctNTA7XG5cdGNvbG9yOiBAY29sb3ItYmFzZTtcblxuXHQmLS1zdWJ0bGUge1xuXHRcdGNvbG9yOiBAY29sb3Itc3VidGxlO1xuXHRcdGZvbnQtc2l6ZTogQGZvbnQtc2l6ZS14LXNtYWxsO1xuXHRcdG1hcmdpbi1ib3R0b206IEBzcGFjaW5nLTM1O1xuXHR9XG59XG5cbi52YS12YXJpYW50LXByb21wdC1tb2JpbGUge1xuXHRib3gtc2l6aW5nOiBAYm94LXNpemluZy1iYXNlO1xuXHR6LWluZGV4OiBAei1pbmRleC1vdmVybGF5O1xuXHRwYWRkaW5nOiBAc3BhY2luZy01MCBAc3BhY2luZy0xMDA7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0bGVmdDogQHNwYWNpbmctMDtcblx0cmlnaHQ6IEBzcGFjaW5nLTA7XG5cdGJvdHRvbTogQHNwYWNpbmctMDtcblx0bWFyZ2luOiBAc3BhY2luZy0wIGF1dG87XG5cdHdpZHRoOiAxMDAlO1xuXHRtYXgtd2lkdGg6IDYwMHB4O1xuXHRtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMmVtKTtcblxuXHRvdmVyZmxvdzogYXV0bztcblx0b3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcblx0YmFja2dyb3VuZC1jb2xvcjogQGJhY2tncm91bmQtY29sb3ItYmFzZTtcblx0Ym9yZGVyOiBAYm9yZGVyLWJhc2U7XG5cdGJvcmRlci1yYWRpdXM6IEBib3JkZXItcmFkaXVzLWJhc2U7XG5cdGJveC1zaGFkb3c6IEBib3gtc2hhZG93LWRyb3AtbWVkaXVtO1xuXHRmb250LWZhbWlseTogQGZvbnQtZmFtaWx5LXN5c3RlbS1zYW5zO1xuXHRmb250LXNpemU6IDFyZW07IC8vIFJlc2V0XG5cdGxpbmUtaGVpZ2h0OiBub3JtYWw7IC8vIFJlc2V0XG5cblx0Jl9faGVhZGVyIHtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cblx0XHQmX190aXRsZSB7XG5cdFx0XHRmbGV4OiAxO1xuXHRcdFx0Zm9udC1zaXplOiBAZm9udC1zaXplLW1lZGl1bTtcblx0XHR9XG5cblx0XHQmX19jbG9zZSB7XG5cdFx0XHRwYWRkaW5nOiBAc3BhY2luZy1zaG9ydGhhbmQtYnV0dG9uLWljb24tb25seTtcblx0XHRcdG1hcmdpbi1yaWdodDogLShAc3BhY2luZy1ob3Jpem9udGFsLWJ1dHRvbi1pY29uLW9ubHkgKyAxcHgpO1xuXHRcdH1cblx0fVxuXG5cdCZfX21haW4ge1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0bWFyZ2luLXRvcDogQHNwYWNpbmctMjU7XG5cblx0XHQmX19zZWxlY3Qge1xuXHRcdFx0bWFyZ2luLXJpZ2h0OiBAc3BhY2luZy03NTtcblx0XHRcdGZsZXg6IDE7XG5cdFx0fVxuXG5cdFx0Jl9fYWN0aW9uIHtcblx0XHRcdGZsZXgtc2hyaW5rOiAwO1xuXHRcdH1cblx0fVxuXG5cdCZfX2Nsb3NlIHtcblx0XHRwYWRkaW5nOiBAc3BhY2luZy1zaG9ydGhhbmQtYnV0dG9uLWljb24tb25seTtcblx0XHRmbG9hdDogcmlnaHQ7XG5cdFx0bWFyZ2luLXJpZ2h0OiAtKEBzcGFjaW5nLWhvcml6b250YWwtYnV0dG9uLWljb24tb25seSArIDFweCk7XG5cdH1cbn1cblxuLyogUHJvbXB0IHRyYW5zaXRpb24gZWZmZWN0ICovXG4udmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlLWVudGVyLWFjdGl2ZSxcbi52YS12YXJpYW50LXByb21wdC1tb2JpbGUtbGVhdmUtYWN0aXZlIHtcblx0dHJhbnNpdGlvbi1wcm9wZXJ0eTogQHRyYW5zaXRpb24tcHJvcGVydHktbGF5b3V0O1xuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiBAdHJhbnNpdGlvbi1kdXJhdGlvbi1tZWRpdW07XG5cdHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBAdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb24tc3lzdGVtO1xufVxuXG4udmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlLWVudGVyLWZyb20sXG4udmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlLWxlYXZlLXRvIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMCUpO1xufVxuPC9zdHlsZT5cbi4uL21vZHVsZXMvdXRpbHNcbiIsICI8c2NyaXB0IHNldHVwIGxhbmc9XCJ0c1wiPlxuaW1wb3J0IHVzZU1vZGVsV3JhcHBlciBmcm9tICcuLi9jb21wb3NhYmxlcy91c2VNb2RlbFdyYXBwZXInO1xuXG5jb25zdCBwcm9wcyA9IGRlZmluZVByb3BzPHtcblx0bW9kZWxWYWx1ZTogc3RyaW5nO1xufT4oKTtcbmNvbnN0IGVtaXQgPSBkZWZpbmVFbWl0czx7XG5cdChlOiAndXBkYXRlOm1vZGVsVmFsdWUnLCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcbn0+KCk7XG5cbmNvbnN0IG1vZGVsVmFsdWUgPSB1c2VNb2RlbFdyYXBwZXIocHJvcHMsIGVtaXQpO1xuPC9zY3JpcHQ+XG5cbjx0ZW1wbGF0ZT5cblx0PHNlbGVjdCB2LW1vZGVsPVwibW9kZWxWYWx1ZVwiIGNsYXNzPVwidmEtc2VsZWN0XCI+XG5cdFx0PHNsb3QgLz5cblx0PC9zZWxlY3Q+XG48L3RlbXBsYXRlPlxuXG48c3R5bGUgc2NvcGVkIGxhbmc9XCJsZXNzXCI+XG5AaW1wb3J0IChyZWZlcmVuY2UpICcuLi9zdHlsZXMvbWl4aW5zLmxlc3MnO1xuQGltcG9ydCAocmVmZXJlbmNlKSAnLi4vc3R5bGVzL3Rva2Vucy5sZXNzJztcblxuLnZhLXNlbGVjdCB7XG5cdC5zZWxlY3RfX2hhbmRsZSgpO1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHRiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgcmlnaHQgQHNwYWNpbmctNzU7XG5cdGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG5cdGJhY2tncm91bmQtaW1hZ2U6IEBpY29uLWV4cGFuZDtcblx0YmFja2dyb3VuZC1zaXplOiBAc2l6ZS1pY29uLXgtc21hbGw7XG5cblx0JjpkaXNhYmxlZCB7XG5cdFx0LnNlbGVjdF9faGFuZGxlLS1kaXNhYmxlZCgpO1xuXHRcdGJhY2tncm91bmQtaW1hZ2U6IEBpY29uLWV4cGFuZC1kaXNhYmxlZDtcblx0XHQvLyBTdXBwb3J0OiBDaHJvbWUsIHdoaWNoIHNldHMgYW4gb3BhY2l0eSBsZXNzIHRoYW4gMSBmb3IgZGlzYWJsZWQgc2VsZWN0IGVsZW1lbnRzLlxuXHRcdG9wYWNpdHk6IEBvcGFjaXR5LWJhc2U7XG5cdFx0Y3Vyc29yOiBAY3Vyc29yLW5vdC1hbGxvd2VkO1xuXHR9XG5cblx0JjplbmFibGVkIHtcblx0XHQuc2VsZWN0X19oYW5kbGUtLWVuYWJsZWQoKTtcblx0fVxufVxuPC9zdHlsZT5cbiIsICJpbXBvcnQgeyByZW5kZXJTbG90IGFzIF9yZW5kZXJTbG90LCB2TW9kZWxTZWxlY3QgYXMgX3ZNb2RlbFNlbGVjdCwgd2l0aERpcmVjdGl2ZXMgYXMgX3dpdGhEaXJlY3RpdmVzLCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIF93aXRoRGlyZWN0aXZlcygoX29wZW5CbG9jaygpLCBfY3JlYXRlRWxlbWVudEJsb2NrKFwic2VsZWN0XCIsIHtcbiAgICBcIm9uVXBkYXRlOm1vZGVsVmFsdWVcIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAubW9kZWxWYWx1ZSkgPSAkZXZlbnQpKSxcbiAgICBjbGFzczogXCJ2YS1zZWxlY3RcIlxuICB9LCBbXG4gICAgX3JlbmRlclNsb3QoX2N0eC4kc2xvdHMsIFwiZGVmYXVsdFwiLCB7fSwgdW5kZWZpbmVkLCB0cnVlKVxuICBdLCA1MTIgLyogTkVFRF9QQVRDSCAqLykpLCBbXG4gICAgW192TW9kZWxTZWxlY3QsICRzZXR1cC5tb2RlbFZhbHVlXVxuICBdKVxufSIsICJpbXBvcnQgc2NyaXB0IGZyb20gXCJFOlxcXFxnaFJlcG9cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVNlbGVjdC52dWU/dHlwZT1zY3JpcHRcIjtpbXBvcnQgXCJFOlxcXFxnaFJlcG9cXFxcUWl1d2VuR2FkZ2V0c1xcXFxzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcY29tcG9uZW50c1xcXFxWQVNlbGVjdC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBU2VsZWN0LnZ1ZT90eXBlPXRlbXBsYXRlXCI7IHNjcmlwdC5yZW5kZXIgPSByZW5kZXI7c2NyaXB0Ll9fZmlsZSA9IFwic3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFTZWxlY3QudnVlXCI7c2NyaXB0Ll9fc2NvcGVJZCA9IFwiZGF0YS12LWM5YjQ2NDYwXCI7ZXhwb3J0IGRlZmF1bHQgc2NyaXB0OyIsICJpbXBvcnQgeyB0b0Rpc3BsYXlTdHJpbmcgYXMgX3RvRGlzcGxheVN0cmluZywgY3JlYXRlRWxlbWVudFZOb2RlIGFzIF9jcmVhdGVFbGVtZW50Vk5vZGUsIGNyZWF0ZVZOb2RlIGFzIF9jcmVhdGVWTm9kZSwgcmVuZGVyTGlzdCBhcyBfcmVuZGVyTGlzdCwgRnJhZ21lbnQgYXMgX0ZyYWdtZW50LCBvcGVuQmxvY2sgYXMgX29wZW5CbG9jaywgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2ssIHdpdGhDdHggYXMgX3dpdGhDdHgsIGNyZWF0ZVRleHRWTm9kZSBhcyBfY3JlYXRlVGV4dFZOb2RlLCBjcmVhdGVDb21tZW50Vk5vZGUgYXMgX2NyZWF0ZUNvbW1lbnRWTm9kZSwgVHJhbnNpdGlvbiBhcyBfVHJhbnNpdGlvbiwgY3JlYXRlQmxvY2sgYXMgX2NyZWF0ZUJsb2NrLCBwdXNoU2NvcGVJZCBhcyBfcHVzaFNjb3BlSWQsIHBvcFNjb3BlSWQgYXMgX3BvcFNjb3BlSWQgfSBmcm9tIFwidnVlXCJcblxuY29uc3QgX3dpdGhTY29wZUlkID0gbiA9PiAoX3B1c2hTY29wZUlkKFwiZGF0YS12LTVjYzc4NjViXCIpLG49bigpLF9wb3BTY29wZUlkKCksbilcbmNvbnN0IF9ob2lzdGVkXzEgPSBbXCJsYW5nXCIsIFwiYXJpYS1sYWJlbGxlZGJ5XCJdXG5jb25zdCBfaG9pc3RlZF8yID0geyBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlclwiIH1cbmNvbnN0IF9ob2lzdGVkXzMgPSBbXCJpZFwiXVxuY29uc3QgX2hvaXN0ZWRfNCA9IHsgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19tYWluXCIgfVxuY29uc3QgX2hvaXN0ZWRfNSA9IFtcInZhbHVlXCIsIFwibGFuZ1wiXVxuY29uc3QgX2hvaXN0ZWRfNiA9IHsgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19mb290ZXJcIiB9XG5jb25zdCBfaG9pc3RlZF83ID0geyBjbGFzczogXCJ2YS1wYXJhIHZhLXBhcmEtLXN1YnRsZVwiIH1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jayhfVHJhbnNpdGlvbiwge1xuICAgIG5hbWU6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlXCIsXG4gICAgYXBwZWFyOiBcIlwiXG4gIH0sIHtcbiAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAoJHByb3BzLm9wZW4pXG4gICAgICAgID8gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcImRpdlwiLCB7XG4gICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICByZWY6IFwicHJvbXB0XCIsXG4gICAgICAgICAgICBsYW5nOiBgemgtJHskc2V0dXAuaTE4blZhcmlhbnR9YCxcbiAgICAgICAgICAgIGNsYXNzOiBcInZhLXZhcmlhbnQtcHJvbXB0LW1vYmlsZVwiLFxuICAgICAgICAgICAgcm9sZTogXCJkaWFsb2dcIixcbiAgICAgICAgICAgIFwiYXJpYS1tb2RhbFwiOiBcImZhbHNlXCIsXG4gICAgICAgICAgICBcImFyaWEtbGFiZWxsZWRieVwiOiAkc2V0dXAudGl0bGVJZFxuICAgICAgICAgIH0sIFtcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfMiwgW1xuICAgICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiaDJcIiwge1xuICAgICAgICAgICAgICAgIGlkOiAkc2V0dXAudGl0bGVJZCxcbiAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX2hlYWRlcl9fdGl0bGUgdmEtdGl0bGVcIlxuICAgICAgICAgICAgICB9LCBfdG9EaXNwbGF5U3RyaW5nKCRzZXR1cC51c2VJMThuKCd2cC5tYWluJykpLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF8zKSxcbiAgICAgICAgICAgICAgX2NyZWF0ZVZOb2RlKCRzZXR1cFtcIlZBQnV0dG9uXCJdLCB7XG4gICAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19oZWFkZXJfX2Nsb3NlXCIsXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiBcInF1aWV0XCIsXG4gICAgICAgICAgICAgICAgaWNvbjogXCJjbG9zZVwiLFxuICAgICAgICAgICAgICAgIHRpdGxlOiAkc2V0dXAudXNlSTE4bignY2xvc2UnKSxcbiAgICAgICAgICAgICAgICBcImFyaWEtbGFiZWxcIjogJHNldHVwLnVzZUkxOG4oJ2Nsb3NlJyksXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiAkc2V0dXAub3B0T3V0QW5kQ2xvc2VcbiAgICAgICAgICAgICAgfSwgbnVsbCwgOCAvKiBQUk9QUyAqLywgW1widGl0bGVcIiwgXCJhcmlhLWxhYmVsXCIsIFwiZGlzYWJsZWRcIl0pXG4gICAgICAgICAgICBdKSxcbiAgICAgICAgICAgIF9jcmVhdGVFbGVtZW50Vk5vZGUoXCJkaXZcIiwgX2hvaXN0ZWRfNCwgW1xuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiVkFTZWxlY3RcIl0sIHtcbiAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiAkc2V0dXAuc2VsZWN0ZWRWYXJpYW50LFxuICAgICAgICAgICAgICAgIFwib25VcGRhdGU6bW9kZWxWYWx1ZVwiOiBfY2FjaGVbMF0gfHwgKF9jYWNoZVswXSA9ICRldmVudCA9PiAoKCRzZXR1cC5zZWxlY3RlZFZhcmlhbnQpID0gJGV2ZW50KSksXG4gICAgICAgICAgICAgICAgY2xhc3M6IFwidmEtdmFyaWFudC1wcm9tcHQtbW9iaWxlX19tYWluX19zZWxlY3RcIixcbiAgICAgICAgICAgICAgICBsYW5nOiAkc2V0dXAuc2VsZWN0ZWRWYXJpYW50LFxuICAgICAgICAgICAgICAgIGRpc2FibGVkOiAkcHJvcHMuZGlzYWJsZWQsXG4gICAgICAgICAgICAgICAgXCJhcmlhLWxhYmVsbGVkYnlcIjogJHNldHVwLnRpdGxlSWRcbiAgICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IF93aXRoQ3R4KCgpID0+IFtcbiAgICAgICAgICAgICAgICAgIChfb3BlbkJsb2NrKHRydWUpLCBfY3JlYXRlRWxlbWVudEJsb2NrKF9GcmFnbWVudCwgbnVsbCwgX3JlbmRlckxpc3QoJHNldHVwLlZBTElEX1ZBUklBTlRTLCAodmFyaWFudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUVsZW1lbnRCbG9jayhcIm9wdGlvblwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAga2V5OiB2YXJpYW50LFxuICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB2YXJpYW50LFxuICAgICAgICAgICAgICAgICAgICAgIGxhbmc6IHZhcmlhbnRcbiAgICAgICAgICAgICAgICAgICAgfSwgX3RvRGlzcGxheVN0cmluZygkc2V0dXAubWVzc2FnZXMudmFyaWFudHNbdmFyaWFudF0pLCA5IC8qIFRFWFQsIFBST1BTICovLCBfaG9pc3RlZF81KSlcbiAgICAgICAgICAgICAgICAgIH0pLCAxMjggLyogS0VZRURfRlJBR01FTlQgKi8pKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcIm1vZGVsVmFsdWVcIiwgXCJsYW5nXCIsIFwiZGlzYWJsZWRcIiwgXCJhcmlhLWxhYmVsbGVkYnlcIl0pLFxuICAgICAgICAgICAgICBfY3JlYXRlVk5vZGUoJHNldHVwW1wiVkFCdXR0b25cIl0sIHtcbiAgICAgICAgICAgICAgICBjbGFzczogXCJ2YS12YXJpYW50LXByb21wdC1tb2JpbGVfX21haW5fX2FjdGlvblwiLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogXCJwcm9ncmVzc2l2ZVwiLFxuICAgICAgICAgICAgICAgIGljb246IFwiYXJyb3dOZXh0XCIsXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ6ICRwcm9wcy5kaXNhYmxlZCxcbiAgICAgICAgICAgICAgICBvbkNsaWNrOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICRldmVudCA9PiAoJHNldHVwLnNlbGVjdCgkc2V0dXAuc2VsZWN0ZWRWYXJpYW50KSkpXG4gICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OiBfd2l0aEN0eCgoKSA9PiBbXG4gICAgICAgICAgICAgICAgICBfY3JlYXRlVGV4dFZOb2RlKF90b0Rpc3BsYXlTdHJpbmcoJHNldHVwLnVzZUkxOG4oJ3ZwLmJ1dHRvbi5vaycpKSwgMSAvKiBURVhUICovKVxuICAgICAgICAgICAgICAgIF0pLFxuICAgICAgICAgICAgICAgIF86IDEgLyogU1RBQkxFICovXG4gICAgICAgICAgICAgIH0sIDggLyogUFJPUFMgKi8sIFtcImRpc2FibGVkXCJdKVxuICAgICAgICAgICAgXSksXG4gICAgICAgICAgICBfY3JlYXRlRWxlbWVudFZOb2RlKFwiZm9vdGVyXCIsIF9ob2lzdGVkXzYsIFtcbiAgICAgICAgICAgICAgX2NyZWF0ZUVsZW1lbnRWTm9kZShcInBcIiwgX2hvaXN0ZWRfNywgX3RvRGlzcGxheVN0cmluZygkc2V0dXAudXNlSTE4bigndnAubWFpbi5leHQnKSksIDEgLyogVEVYVCAqLylcbiAgICAgICAgICAgIF0pXG4gICAgICAgICAgXSwgOCAvKiBQUk9QUyAqLywgX2hvaXN0ZWRfMSkpXG4gICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICBdKSxcbiAgICBfOiAxIC8qIFNUQUJMRSAqL1xuICB9KSlcbn0iLCAiaW1wb3J0IHNjcmlwdCBmcm9tIFwiRTpcXFxcZ2hSZXBvXFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXGNvbXBvbmVudHNcXFxcVkFWYXJpYW50UHJvbXB0TW9iaWxlLnZ1ZT90eXBlPXNjcmlwdFwiO2ltcG9ydCBcIkU6XFxcXGdoUmVwb1xcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdE1vYmlsZS52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdE1vYmlsZS52dWU/dHlwZT10ZW1wbGF0ZVwiOyBzY3JpcHQucmVuZGVyID0gcmVuZGVyO3NjcmlwdC5fX2ZpbGUgPSBcInNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxjb21wb25lbnRzXFxcXFZBVmFyaWFudFByb21wdE1vYmlsZS52dWVcIjtzY3JpcHQuX19zY29wZUlkID0gXCJkYXRhLXYtNWNjNzg2NWJcIjtleHBvcnQgZGVmYXVsdCBzY3JpcHQ7IiwgImltcG9ydCB7IG9wZW5CbG9jayBhcyBfb3BlbkJsb2NrLCBjcmVhdGVCbG9jayBhcyBfY3JlYXRlQmxvY2ssIGNyZWF0ZUNvbW1lbnRWTm9kZSBhcyBfY3JlYXRlQ29tbWVudFZOb2RlLCBUZWxlcG9ydCBhcyBfVGVsZXBvcnQsIEZyYWdtZW50IGFzIF9GcmFnbWVudCwgY3JlYXRlRWxlbWVudEJsb2NrIGFzIF9jcmVhdGVFbGVtZW50QmxvY2sgfSBmcm9tIFwidnVlXCJcblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlcihfY3R4LCBfY2FjaGUsICRwcm9wcywgJHNldHVwLCAkZGF0YSwgJG9wdGlvbnMpIHtcbiAgcmV0dXJuIChfb3BlbkJsb2NrKCksIF9jcmVhdGVFbGVtZW50QmxvY2soX0ZyYWdtZW50LCBudWxsLCBbXG4gICAgKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9UZWxlcG9ydCwgeyB0bzogJHNldHVwLmRlc2t0b3BNb3VudFBvaW50IH0sIFtcbiAgICAgICghJHNldHVwLmlzTW9iaWxlKVxuICAgICAgICA/IChfb3BlbkJsb2NrKCksIF9jcmVhdGVCbG9jaygkc2V0dXBbXCJWQVZhcmlhbnRQcm9tcHRcIl0sIHtcbiAgICAgICAgICAgIGtleTogMCxcbiAgICAgICAgICAgIG9wZW46ICRzZXR1cC5pc09wZW4sXG4gICAgICAgICAgICBcIm9uVXBkYXRlOm9wZW5cIjogX2NhY2hlWzBdIHx8IChfY2FjaGVbMF0gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaXNPcGVuKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgZGlzYWJsZWQ6ICRzZXR1cC5pc0Rpc2FibGVkLFxuICAgICAgICAgICAgXCJvblVwZGF0ZTpkaXNhYmxlZFwiOiBfY2FjaGVbMV0gfHwgKF9jYWNoZVsxXSA9ICRldmVudCA9PiAoKCRzZXR1cC5pc0Rpc2FibGVkKSA9ICRldmVudCkpLFxuICAgICAgICAgICAgXCJhdXRvLWNsb3NlXCI6IGZhbHNlLFxuICAgICAgICAgICAgb25PcHRvdXQ6ICRzZXR1cC5vbk9wdE91dCxcbiAgICAgICAgICAgIG9uU2VsZWN0OiAkc2V0dXAuc2V0VmFyaWFudFxuICAgICAgICAgIH0sIG51bGwsIDggLyogUFJPUFMgKi8sIFtcIm9wZW5cIiwgXCJkaXNhYmxlZFwiXSkpXG4gICAgICAgIDogX2NyZWF0ZUNvbW1lbnRWTm9kZShcInYtaWZcIiwgdHJ1ZSlcbiAgICBdLCA4IC8qIFBST1BTICovLCBbXCJ0b1wiXSkpLFxuICAgIF9jcmVhdGVDb21tZW50Vk5vZGUoXCIgVGVsZXBvcnQgdG8gYm9keSBiZWNhdXNlIHRoZXkgYXJlIGFsd2F5cyBmbG9hdGVkIGF0IGJvdHRvbSBcIiksXG4gICAgKF9vcGVuQmxvY2soKSwgX2NyZWF0ZUJsb2NrKF9UZWxlcG9ydCwgeyB0bzogXCJib2R5XCIgfSwgW1xuICAgICAgKCRzZXR1cC5pc01vYmlsZSlcbiAgICAgICAgPyAoX29wZW5CbG9jaygpLCBfY3JlYXRlQmxvY2soJHNldHVwW1wiVkFWYXJpYW50UHJvbXB0TW9iaWxlXCJdLCB7XG4gICAgICAgICAgICBrZXk6IDAsXG4gICAgICAgICAgICBvcGVuOiAkc2V0dXAuaXNPcGVuLFxuICAgICAgICAgICAgXCJvblVwZGF0ZTpvcGVuXCI6IF9jYWNoZVsyXSB8fCAoX2NhY2hlWzJdID0gJGV2ZW50ID0+ICgoJHNldHVwLmlzT3BlbikgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgIGRpc2FibGVkOiAkc2V0dXAuaXNEaXNhYmxlZCxcbiAgICAgICAgICAgIFwib25VcGRhdGU6ZGlzYWJsZWRcIjogX2NhY2hlWzNdIHx8IChfY2FjaGVbM10gPSAkZXZlbnQgPT4gKCgkc2V0dXAuaXNEaXNhYmxlZCkgPSAkZXZlbnQpKSxcbiAgICAgICAgICAgIG9uT3B0b3V0OiAkc2V0dXAub25PcHRPdXQsXG4gICAgICAgICAgICBvblNlbGVjdDogJHNldHVwLnNldFZhcmlhbnRcbiAgICAgICAgICB9LCBudWxsLCA4IC8qIFBST1BTICovLCBbXCJvcGVuXCIsIFwiZGlzYWJsZWRcIl0pKVxuICAgICAgICA6IF9jcmVhdGVDb21tZW50Vk5vZGUoXCJ2LWlmXCIsIHRydWUpXG4gICAgXSkpXG4gIF0sIDY0IC8qIFNUQUJMRV9GUkFHTUVOVCAqLykpXG59IiwgImltcG9ydCBzY3JpcHQgZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxBcHAudnVlP3R5cGU9c2NyaXB0XCI7aW1wb3J0IFwiRTpcXFxcZ2hSZXBvXFxcXFFpdXdlbkdhZGdldHNcXFxcc3JjXFxcXFZhcmlhbnRBbGx5RGlhbG9nXFxcXEFwcC52dWU/dHlwZT1zdHlsZSZpbmRleD0wXCI7aW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIkU6XFxcXGdoUmVwb1xcXFxRaXV3ZW5HYWRnZXRzXFxcXHNyY1xcXFxWYXJpYW50QWxseURpYWxvZ1xcXFxBcHAudnVlP3R5cGU9dGVtcGxhdGVcIjsgc2NyaXB0LnJlbmRlciA9IHJlbmRlcjtzY3JpcHQuX19maWxlID0gXCJzcmNcXFxcVmFyaWFudEFsbHlEaWFsb2dcXFxcQXBwLnZ1ZVwiO2V4cG9ydCBkZWZhdWx0IHNjcmlwdDsiXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBQUEsZUFBd0JDLFFBQUEsS0FBQTs7QUNDeEIsSUFBQUMsZUFBa0JELFFBQUEsS0FBQTtBQUNsQixJQUFBRSxvQkFBaUVGLFFBQUEsd0JBQUE7O0FDRGpFLElBQUFHLGVBQXlCSCxRQUFBLEtBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0R6QixJQUFBSSxjQUF5S0osUUFBQSxLQUFBO0FBRXpLLElBQU1LLGFBQWEsQ0FBQyxTQUFTLFFBQVE7QUFDckMsSUFBTUMsYUFBYTtFQUFFQyxLQUFLO0FBQUU7QUFDNUIsSUFBTUMsYUFBMEIsb0JBQUFKLFlBQUFLO0VBQW9CO0VBQVE7SUFBRUMsR0FBRztFQUFnaEI7RUFBRztFQUFNOztBQUFnQjtBQUMxbUIsSUFBTUMsYUFBYTtFQUFFSixLQUFLO0FBQUU7QUFDNUIsSUFBTUssYUFBMEIsb0JBQUFSLFlBQUFLO0VBQW9CO0VBQVE7SUFBRUMsR0FBRztFQUE4QztFQUFHO0VBQU07O0FBQWdCO0FBQ3hJLElBQU1HLGFBQTBCLG9CQUFBVCxZQUFBSztFQUFvQjtFQUFRO0lBQUVDLEdBQUc7RUFBZ0Q7RUFBRztFQUFNOztBQUFnQjtBQUMxSSxJQUFNSSxhQUFhLENBQ2pCRixZQUNBQyxVQUFBO0FBRUYsSUFBTUUsYUFBYTtF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QUFTbU07QUFBT0ssWUFBT3RMLFNBQVM7QUFBa0MsSUFBT3VMLGVBQVFEOztBekJHOVcsSUFBTUUsT0FBT3ZJLFNBQVN3SSxjQUFjLEtBQUs7QUFDekN4SSxTQUFTRSxLQUFLdUksT0FBT0YsSUFBSTtDQUFBLEdBQ3pCN04sYUFBQWdPLFdBQVVKLFlBQUcsRUFBRUssTUFBTUosSUFBSTsiLAogICJuYW1lcyI6IFsiaW1wb3J0X3Z1ZTIyIiwgInJlcXVpcmUiLCAiaW1wb3J0X3Z1ZTIwIiwgImltcG9ydF9leHRfZ2FkZ2V0IiwgImltcG9ydF92dWUxMiIsICJpbXBvcnRfdnVlMiIsICJfaG9pc3RlZF8xIiwgIl9ob2lzdGVkXzIiLCAia2V5IiwgIl9ob2lzdGVkXzMiLCAiY3JlYXRlRWxlbWVudFZOb2RlIiwgImQiLCAiX2hvaXN0ZWRfNCIsICJfaG9pc3RlZF81IiwgIl9ob2lzdGVkXzYiLCAiX2hvaXN0ZWRfNyIsICJfaG9pc3RlZF84IiwgIl9ob2lzdGVkXzkiLCAiX2hvaXN0ZWRfMTAiLCAicmVuZGVyIiwgIl9jdHgiLCAiX2NhY2hlIiwgIiRwcm9wcyIsICIkc2V0dXAiLCAiJGRhdGEiLCAiJG9wdGlvbnMiLCAib3BlbkJsb2NrIiwgImNyZWF0ZUVsZW1lbnRCbG9jayIsICJjbGFzcyIsICJ4bWxucyIsICJ3aWR0aCIsICJzaXplIiwgImhlaWdodCIsICJ2aWV3Qm94IiwgImljb24iLCAiY3JlYXRlQ29tbWVudFZOb2RlIiwgIlZBSWNvbl9kZWZhdWx0IiwgIl9fZmlsZSIsICJWQUljb25fZGVmYXVsdDIiLCAiaW1wb3J0X3Z1ZTQiLCAiX2hvaXN0ZWRfMTIiLCAicmVuZGVyMiIsICJub3JtYWxpemVDbGFzcyIsICJhY3Rpb24iLCAid2VpZ2h0IiwgIm9uQ2xpY2siLCAiJGV2ZW50IiwgIiRlbWl0IiwgImNyZWF0ZUJsb2NrIiwgIiRzbG90cyIsICJyZW5kZXJTbG90IiwgImluZGljYXRvciIsICJWQUJ1dHRvbl9kZWZhdWx0IiwgIl9fc2NvcGVJZCIsICJWQUJ1dHRvbl9kZWZhdWx0MiIsICJpbXBvcnRfdnVlNSIsICJyZW5kZXIzIiwgIlRyYW5zaXRpb24iLCAibmFtZSIsICJtb2RlIiwgImRlZmF1bHQiLCAid2l0aEN0eCIsICJfIiwgInNjcmlwdCIsICJWQUZhZGVUcmFuc2l0aW9uX2RlZmF1bHQiLCAiaW1wb3J0X3Z1ZTciLCAibWVzc2FnZXNfZGVmYXVsdCIsICJ2YXJpYW50cyIsICJoYW5zIiwgInNwYWNlIiwgImNsb3NlIiwgImhhbnQiLCAiaW1wb3J0X3Z1ZTYiLCAiVkFMSURfVkFSSUFOVFMiLCAid2dVc2VyVmFyaWFudCIsICJyZWYiLCAiX213JGNvbmZpZyRnZXQiLCAibXciLCAiY29uZmlnIiwgImdldCIsICJpc01vYmlsZURldmljZSIsICJtYXRjaE1lZGlhIiwgIm1hdGNoZXMiLCAiZ2V0TW91bnRQb2ludCIsICJfZG9jdW1lbnQkcXVlcnlTZWxlY3QiLCAiX2RvY3VtZW50JHF1ZXJ5U2VsZWN0MiIsICJkb2N1bWVudCIsICJxdWVyeVNlbGVjdG9yQWxsIiwgImJvZHkiLCAicXVlcnlTZWxlY3RvciIsICJpbmZlcnJlZFZhcmlhbnQiLCAiY29tcHV0ZWQiLCAiaW5jbHVkZXMiLCAidmFsdWUiLCAic2h1ZmZsZVZhcmlhbnQiLCAibGFzdCIsICJ0YXJnZXRBcnJheSIsICJmaWx0ZXIiLCAiaSIsICJyYW5kb21JbmRleCIsICJNYXRoIiwgImZsb29yIiwgInJhbmRvbSIsICJsZW5ndGgiLCAiaTE4blZhcmlhbnQiLCAidXNlSTE4biIsICJfY3VycmVudE1zZ3NHcm91cCRrZXkiLCAiY3VycmVudE1zZ3NHcm91cCIsICJjb3VudGVyIiwgInVzZVVuaXF1ZUlkIiwgImNvbmNhdCIsICJ1c2VVbmlxdWVJZF9kZWZhdWx0IiwgImltcG9ydF92dWU4IiwgIklOVEVSVkFMIiwgInVzZVNodWZmbGVkVmFyaWFudCIsICJpc0ZyZWV6ZWQiLCAicmVzdWx0IiwgImlkIiwgIndhdGNoIiwgIm5ld1ZhbHVlIiwgIl9pbmZlcnJlZFZhcmlhbnQkdmFsdSIsICJjbGVhckludGVydmFsIiwgIndpbmRvdyIsICJzZXRJbnRlcnZhbCIsICJpbW1lZGlhdGUiLCAidXNlU2h1ZmZsZWRWYXJpYW50X2RlZmF1bHQiLCAiaW1wb3J0X3Z1ZTkiLCAidXNlTW9kZWxXcmFwcGVyIiwgInByb3BzIiwgImVtaXQiLCAic2V0IiwgInVzZU1vZGVsV3JhcHBlcl9kZWZhdWx0IiwgImltcG9ydF92dWUxMCIsICJ1c2VEZWZhdWx0IiwgImRlZmF1bHRWYWx1ZSIsICJyZWFsUmVmIiwgInNoYWxsb3dSZWYiLCAiZGVlcCIsICJ1c2VEZWZhdWx0X2RlZmF1bHQiLCAiX19wcm9wcyIsICJfX2VtaXQiLCAicHJvbXB0IiwgInRpdGxlSWQiLCAiZGVzY0lkIiwgImlzT3BlbiIsICJpc0Rpc2FibGVkIiwgImlzVmFyaWFudE5hcnJvd2VkIiwgInNodWZmbGVkVmFyaWFudCIsICJvcHRPdXRBbmRDbG9zZSIsICJzZWxlY3QiLCAidmFyaWFudCIsICJlbGVtZW50IiwgImFkZEV2ZW50TGlzdGVuZXIiLCAiZXYiLCAiYnV0dG9ucyIsICJhdXRvQ2xvc2UiLCAiZGlzYWJsZWQiLCAiaW1wb3J0X3Z1ZTEzIiwgIl93aXRoU2NvcGVJZCIsICJuIiwgInB1c2hTY29wZUlkIiwgInBvcFNjb3BlSWQiLCAiX2hvaXN0ZWRfMTMiLCAiX2hvaXN0ZWRfMjIiLCAiX2hvaXN0ZWRfMzIiLCAiX2hvaXN0ZWRfNDIiLCAiX2hvaXN0ZWRfNTIiLCAiX2hvaXN0ZWRfNjIiLCAiX2hvaXN0ZWRfNzIiLCAiX2hvaXN0ZWRfODIiLCAicmVuZGVyNCIsICJhcHBlYXIiLCAib3BlbiIsICJsYW5nIiwgInJvbGUiLCAiY3JlYXRlVk5vZGUiLCAidGl0bGUiLCAiY3JlYXRlVGV4dFZOb2RlIiwgInRvRGlzcGxheVN0cmluZyIsICJtZXNzYWdlcyIsICJGcmFnbWVudCIsICJyZW5kZXJMaXN0IiwgIlZBVmFyaWFudFByb21wdF9kZWZhdWx0IiwgIlZBVmFyaWFudFByb21wdF9kZWZhdWx0MiIsICJpbXBvcnRfdnVlMTciLCAibW9kZWxWYWx1ZSIsICJpbXBvcnRfdnVlMTUiLCAicmVuZGVyNSIsICJ3aXRoRGlyZWN0aXZlcyIsICJ2TW9kZWxTZWxlY3QiLCAiVkFTZWxlY3RfZGVmYXVsdCIsICJWQVNlbGVjdF9kZWZhdWx0MiIsICJzZWxlY3RlZFZhcmlhbnQiLCAiX2luZmVycmVkVmFyaWFudCR2YWx1MiIsICJpbXBvcnRfdnVlMTgiLCAiX2hvaXN0ZWRfMTQiLCAiX2hvaXN0ZWRfMjMiLCAiX2hvaXN0ZWRfMzMiLCAiX2hvaXN0ZWRfNDMiLCAiX2hvaXN0ZWRfNTMiLCAiX2hvaXN0ZWRfNjMiLCAiX2hvaXN0ZWRfNzMiLCAicmVuZGVyNiIsICJWQVZhcmlhbnRQcm9tcHRNb2JpbGVfZGVmYXVsdCIsICJWQVZhcmlhbnRQcm9tcHRNb2JpbGVfZGVmYXVsdDIiLCAiaXNNb2JpbGUiLCAiZGVza3RvcE1vdW50UG9pbnQiLCAic2V0VmFyaWFudCIsICJzZXRMb2NhbFZhcmlhbnQiLCAicmVkaXJlY3QiLCAiZm9yY2VkIiwgIm9uT3B0T3V0IiwgInNldE9wdE91dCIsICJpbXBvcnRfdnVlMjEiLCAicmVuZGVyNyIsICJUZWxlcG9ydCIsICJ0byIsICJvbk9wdG91dCIsICJvblNlbGVjdCIsICJBcHBfZGVmYXVsdCIsICJBcHBfZGVmYXVsdDIiLCAicm9vdCIsICJjcmVhdGVFbGVtZW50IiwgImFwcGVuZCIsICJjcmVhdGVBcHAiLCAibW91bnQiXQp9Cg==
