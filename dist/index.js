import { renderStoryString as Q0, persona_description_positions as ng } from "../../../../power-user.js";
import { parseMesExamples as Z0, baseChatReplace as K0, chat_metadata as dl, getMaxContextSize as J0, name1 as na, name2 as Ma, this_chid as gn, extension_prompt_types as lr, depth_prompt_role_default as W0, depth_prompt_depth_default as $0 } from "../../../../../script.js";
import { createWorldInfoEntry as e2, world_info_include_names as t2, wi_anchor_position as n2, world_names as ag } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as a2, formatInstructModeSystemPrompt as r2 } from "../../../../instruct-mode.js";
import { appendFileContent as i2 } from "../../../../chats.js";
import { setOpenAIMessages as l2, setOpenAIMessageExamples as s2, formatWorldInfo as o2, getPromptPosition as u2, getPromptRole as c2, prepareOpenAIMessages as f2 } from "../../../../openai.js";
import { metadata_keys as pl } from "../../../../authors-note.js";
import { getGroupDepthPrompts as h2, selected_group as fr } from "../../../../group-chats.js";
import { getRegexedString as d2, regex_placement as rg } from "../../../regex/engine.js";
import { removeFromArray as ig, runAfterAnimation as p2 } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as ri, fixToastrForDialogs as sf } from "../../../../popup.js";
import lg from "../../../../../lib/dialog-polyfill.esm.js";
function Bv(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var of = { exports: {} }, ml = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sg;
function m2() {
  if (sg) return ml;
  sg = 1;
  var r = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function l(s, u, c) {
    var b = null;
    if (c !== void 0 && (b = "" + c), u.key !== void 0 && (b = "" + u.key), "key" in u) {
      c = {};
      for (var m in u)
        m !== "key" && (c[m] = u[m]);
    } else c = u;
    return u = c.ref, {
      $$typeof: r,
      type: s,
      key: b,
      ref: u !== void 0 ? u : null,
      props: c
    };
  }
  return ml.Fragment = a, ml.jsx = l, ml.jsxs = l, ml;
}
var og;
function g2() {
  return og || (og = 1, of.exports = m2()), of.exports;
}
var N = g2(), uf = { exports: {} }, Te = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ug;
function v2() {
  if (ug) return Te;
  ug = 1;
  var r = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.consumer"), b = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), S = Symbol.iterator;
  function g(M) {
    return M === null || typeof M != "object" ? null : (M = S && M[S] || M["@@iterator"], typeof M == "function" ? M : null);
  }
  var y = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, h = Object.assign, x = {};
  function C(M, F, te) {
    this.props = M, this.context = F, this.refs = x, this.updater = te || y;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(M, F) {
    if (typeof M != "object" && typeof M != "function" && M != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, M, F, "setState");
  }, C.prototype.forceUpdate = function(M) {
    this.updater.enqueueForceUpdate(this, M, "forceUpdate");
  };
  function O() {
  }
  O.prototype = C.prototype;
  function A(M, F, te) {
    this.props = M, this.context = F, this.refs = x, this.updater = te || y;
  }
  var D = A.prototype = new O();
  D.constructor = A, h(D, C.prototype), D.isPureReactComponent = !0;
  var E = Array.isArray, T = { H: null, A: null, T: null, S: null, V: null }, j = Object.prototype.hasOwnProperty;
  function L(M, F, te, re, ae, Oe) {
    return te = Oe.ref, {
      $$typeof: r,
      type: M,
      key: F,
      ref: te !== void 0 ? te : null,
      props: Oe
    };
  }
  function G(M, F) {
    return L(
      M.type,
      F,
      void 0,
      void 0,
      void 0,
      M.props
    );
  }
  function ee(M) {
    return typeof M == "object" && M !== null && M.$$typeof === r;
  }
  function P(M) {
    var F = { "=": "=0", ":": "=2" };
    return "$" + M.replace(/[=:]/g, function(te) {
      return F[te];
    });
  }
  var Y = /\/+/g;
  function X(M, F) {
    return typeof M == "object" && M !== null && M.key != null ? P("" + M.key) : F.toString(36);
  }
  function oe() {
  }
  function fe(M) {
    switch (M.status) {
      case "fulfilled":
        return M.value;
      case "rejected":
        throw M.reason;
      default:
        switch (typeof M.status == "string" ? M.then(oe, oe) : (M.status = "pending", M.then(
          function(F) {
            M.status === "pending" && (M.status = "fulfilled", M.value = F);
          },
          function(F) {
            M.status === "pending" && (M.status = "rejected", M.reason = F);
          }
        )), M.status) {
          case "fulfilled":
            return M.value;
          case "rejected":
            throw M.reason;
        }
    }
    throw M;
  }
  function ue(M, F, te, re, ae) {
    var Oe = typeof M;
    (Oe === "undefined" || Oe === "boolean") && (M = null);
    var ve = !1;
    if (M === null) ve = !0;
    else
      switch (Oe) {
        case "bigint":
        case "string":
        case "number":
          ve = !0;
          break;
        case "object":
          switch (M.$$typeof) {
            case r:
            case a:
              ve = !0;
              break;
            case v:
              return ve = M._init, ue(
                ve(M._payload),
                F,
                te,
                re,
                ae
              );
          }
      }
    if (ve)
      return ae = ae(M), ve = re === "" ? "." + X(M, 0) : re, E(ae) ? (te = "", ve != null && (te = ve.replace(Y, "$&/") + "/"), ue(ae, F, te, "", function(Gt) {
        return Gt;
      })) : ae != null && (ee(ae) && (ae = G(
        ae,
        te + (ae.key == null || M && M.key === ae.key ? "" : ("" + ae.key).replace(
          Y,
          "$&/"
        ) + "/") + ve
      )), F.push(ae)), 1;
    ve = 0;
    var pt = re === "" ? "." : re + ":";
    if (E(M))
      for (var Le = 0; Le < M.length; Le++)
        re = M[Le], Oe = pt + X(re, Le), ve += ue(
          re,
          F,
          te,
          Oe,
          ae
        );
    else if (Le = g(M), typeof Le == "function")
      for (M = Le.call(M), Le = 0; !(re = M.next()).done; )
        re = re.value, Oe = pt + X(re, Le++), ve += ue(
          re,
          F,
          te,
          Oe,
          ae
        );
    else if (Oe === "object") {
      if (typeof M.then == "function")
        return ue(
          fe(M),
          F,
          te,
          re,
          ae
        );
      throw F = String(M), Error(
        "Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(M).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return ve;
  }
  function U(M, F, te) {
    if (M == null) return M;
    var re = [], ae = 0;
    return ue(M, re, "", "", function(Oe) {
      return F.call(te, Oe, ae++);
    }), re;
  }
  function $(M) {
    if (M._status === -1) {
      var F = M._result;
      F = F(), F.then(
        function(te) {
          (M._status === 0 || M._status === -1) && (M._status = 1, M._result = te);
        },
        function(te) {
          (M._status === 0 || M._status === -1) && (M._status = 2, M._result = te);
        }
      ), M._status === -1 && (M._status = 0, M._result = F);
    }
    if (M._status === 1) return M._result.default;
    throw M._result;
  }
  var le = typeof reportError == "function" ? reportError : function(M) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var F = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof M == "object" && M !== null && typeof M.message == "string" ? String(M.message) : String(M),
        error: M
      });
      if (!window.dispatchEvent(F)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", M);
      return;
    }
    console.error(M);
  };
  function he() {
  }
  return Te.Children = {
    map: U,
    forEach: function(M, F, te) {
      U(
        M,
        function() {
          F.apply(this, arguments);
        },
        te
      );
    },
    count: function(M) {
      var F = 0;
      return U(M, function() {
        F++;
      }), F;
    },
    toArray: function(M) {
      return U(M, function(F) {
        return F;
      }) || [];
    },
    only: function(M) {
      if (!ee(M))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return M;
    }
  }, Te.Component = C, Te.Fragment = l, Te.Profiler = u, Te.PureComponent = A, Te.StrictMode = s, Te.Suspense = d, Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = T, Te.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(M) {
      return T.H.useMemoCache(M);
    }
  }, Te.cache = function(M) {
    return function() {
      return M.apply(null, arguments);
    };
  }, Te.cloneElement = function(M, F, te) {
    if (M == null)
      throw Error(
        "The argument must be a React element, but you passed " + M + "."
      );
    var re = h({}, M.props), ae = M.key, Oe = void 0;
    if (F != null)
      for (ve in F.ref !== void 0 && (Oe = void 0), F.key !== void 0 && (ae = "" + F.key), F)
        !j.call(F, ve) || ve === "key" || ve === "__self" || ve === "__source" || ve === "ref" && F.ref === void 0 || (re[ve] = F[ve]);
    var ve = arguments.length - 2;
    if (ve === 1) re.children = te;
    else if (1 < ve) {
      for (var pt = Array(ve), Le = 0; Le < ve; Le++)
        pt[Le] = arguments[Le + 2];
      re.children = pt;
    }
    return L(M.type, ae, void 0, void 0, Oe, re);
  }, Te.createContext = function(M) {
    return M = {
      $$typeof: b,
      _currentValue: M,
      _currentValue2: M,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, M.Provider = M, M.Consumer = {
      $$typeof: c,
      _context: M
    }, M;
  }, Te.createElement = function(M, F, te) {
    var re, ae = {}, Oe = null;
    if (F != null)
      for (re in F.key !== void 0 && (Oe = "" + F.key), F)
        j.call(F, re) && re !== "key" && re !== "__self" && re !== "__source" && (ae[re] = F[re]);
    var ve = arguments.length - 2;
    if (ve === 1) ae.children = te;
    else if (1 < ve) {
      for (var pt = Array(ve), Le = 0; Le < ve; Le++)
        pt[Le] = arguments[Le + 2];
      ae.children = pt;
    }
    if (M && M.defaultProps)
      for (re in ve = M.defaultProps, ve)
        ae[re] === void 0 && (ae[re] = ve[re]);
    return L(M, Oe, void 0, void 0, null, ae);
  }, Te.createRef = function() {
    return { current: null };
  }, Te.forwardRef = function(M) {
    return { $$typeof: m, render: M };
  }, Te.isValidElement = ee, Te.lazy = function(M) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: M },
      _init: $
    };
  }, Te.memo = function(M, F) {
    return {
      $$typeof: p,
      type: M,
      compare: F === void 0 ? null : F
    };
  }, Te.startTransition = function(M) {
    var F = T.T, te = {};
    T.T = te;
    try {
      var re = M(), ae = T.S;
      ae !== null && ae(te, re), typeof re == "object" && re !== null && typeof re.then == "function" && re.then(he, le);
    } catch (Oe) {
      le(Oe);
    } finally {
      T.T = F;
    }
  }, Te.unstable_useCacheRefresh = function() {
    return T.H.useCacheRefresh();
  }, Te.use = function(M) {
    return T.H.use(M);
  }, Te.useActionState = function(M, F, te) {
    return T.H.useActionState(M, F, te);
  }, Te.useCallback = function(M, F) {
    return T.H.useCallback(M, F);
  }, Te.useContext = function(M) {
    return T.H.useContext(M);
  }, Te.useDebugValue = function() {
  }, Te.useDeferredValue = function(M, F) {
    return T.H.useDeferredValue(M, F);
  }, Te.useEffect = function(M, F, te) {
    var re = T.H;
    if (typeof te == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return re.useEffect(M, F);
  }, Te.useId = function() {
    return T.H.useId();
  }, Te.useImperativeHandle = function(M, F, te) {
    return T.H.useImperativeHandle(M, F, te);
  }, Te.useInsertionEffect = function(M, F) {
    return T.H.useInsertionEffect(M, F);
  }, Te.useLayoutEffect = function(M, F) {
    return T.H.useLayoutEffect(M, F);
  }, Te.useMemo = function(M, F) {
    return T.H.useMemo(M, F);
  }, Te.useOptimistic = function(M, F) {
    return T.H.useOptimistic(M, F);
  }, Te.useReducer = function(M, F, te) {
    return T.H.useReducer(M, F, te);
  }, Te.useRef = function(M) {
    return T.H.useRef(M);
  }, Te.useState = function(M) {
    return T.H.useState(M);
  }, Te.useSyncExternalStore = function(M, F, te) {
    return T.H.useSyncExternalStore(
      M,
      F,
      te
    );
  }, Te.useTransition = function() {
    return T.H.useTransition();
  }, Te.version = "19.1.1", Te;
}
var cg;
function rh() {
  return cg || (cg = 1, uf.exports = v2()), uf.exports;
}
var ne = rh();
const zo = /* @__PURE__ */ Bv(ne);
var cf = { exports: {} }, gl = {}, ff = { exports: {} }, hf = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fg;
function y2() {
  return fg || (fg = 1, (function(r) {
    function a(U, $) {
      var le = U.length;
      U.push($);
      e: for (; 0 < le; ) {
        var he = le - 1 >>> 1, M = U[he];
        if (0 < u(M, $))
          U[he] = $, U[le] = M, le = he;
        else break e;
      }
    }
    function l(U) {
      return U.length === 0 ? null : U[0];
    }
    function s(U) {
      if (U.length === 0) return null;
      var $ = U[0], le = U.pop();
      if (le !== $) {
        U[0] = le;
        e: for (var he = 0, M = U.length, F = M >>> 1; he < F; ) {
          var te = 2 * (he + 1) - 1, re = U[te], ae = te + 1, Oe = U[ae];
          if (0 > u(re, le))
            ae < M && 0 > u(Oe, re) ? (U[he] = Oe, U[ae] = le, he = ae) : (U[he] = re, U[te] = le, he = te);
          else if (ae < M && 0 > u(Oe, le))
            U[he] = Oe, U[ae] = le, he = ae;
          else break e;
        }
      }
      return $;
    }
    function u(U, $) {
      var le = U.sortIndex - $.sortIndex;
      return le !== 0 ? le : U.id - $.id;
    }
    if (r.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var c = performance;
      r.unstable_now = function() {
        return c.now();
      };
    } else {
      var b = Date, m = b.now();
      r.unstable_now = function() {
        return b.now() - m;
      };
    }
    var d = [], p = [], v = 1, S = null, g = 3, y = !1, h = !1, x = !1, C = !1, O = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, D = typeof setImmediate < "u" ? setImmediate : null;
    function E(U) {
      for (var $ = l(p); $ !== null; ) {
        if ($.callback === null) s(p);
        else if ($.startTime <= U)
          s(p), $.sortIndex = $.expirationTime, a(d, $);
        else break;
        $ = l(p);
      }
    }
    function T(U) {
      if (x = !1, E(U), !h)
        if (l(d) !== null)
          h = !0, j || (j = !0, X());
        else {
          var $ = l(p);
          $ !== null && ue(T, $.startTime - U);
        }
    }
    var j = !1, L = -1, G = 5, ee = -1;
    function P() {
      return C ? !0 : !(r.unstable_now() - ee < G);
    }
    function Y() {
      if (C = !1, j) {
        var U = r.unstable_now();
        ee = U;
        var $ = !0;
        try {
          e: {
            h = !1, x && (x = !1, A(L), L = -1), y = !0;
            var le = g;
            try {
              t: {
                for (E(U), S = l(d); S !== null && !(S.expirationTime > U && P()); ) {
                  var he = S.callback;
                  if (typeof he == "function") {
                    S.callback = null, g = S.priorityLevel;
                    var M = he(
                      S.expirationTime <= U
                    );
                    if (U = r.unstable_now(), typeof M == "function") {
                      S.callback = M, E(U), $ = !0;
                      break t;
                    }
                    S === l(d) && s(d), E(U);
                  } else s(d);
                  S = l(d);
                }
                if (S !== null) $ = !0;
                else {
                  var F = l(p);
                  F !== null && ue(
                    T,
                    F.startTime - U
                  ), $ = !1;
                }
              }
              break e;
            } finally {
              S = null, g = le, y = !1;
            }
            $ = void 0;
          }
        } finally {
          $ ? X() : j = !1;
        }
      }
    }
    var X;
    if (typeof D == "function")
      X = function() {
        D(Y);
      };
    else if (typeof MessageChannel < "u") {
      var oe = new MessageChannel(), fe = oe.port2;
      oe.port1.onmessage = Y, X = function() {
        fe.postMessage(null);
      };
    } else
      X = function() {
        O(Y, 0);
      };
    function ue(U, $) {
      L = O(function() {
        U(r.unstable_now());
      }, $);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, r.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : G = 0 < U ? Math.floor(1e3 / U) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return g;
    }, r.unstable_next = function(U) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var $ = 3;
          break;
        default:
          $ = g;
      }
      var le = g;
      g = $;
      try {
        return U();
      } finally {
        g = le;
      }
    }, r.unstable_requestPaint = function() {
      C = !0;
    }, r.unstable_runWithPriority = function(U, $) {
      switch (U) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          U = 3;
      }
      var le = g;
      g = U;
      try {
        return $();
      } finally {
        g = le;
      }
    }, r.unstable_scheduleCallback = function(U, $, le) {
      var he = r.unstable_now();
      switch (typeof le == "object" && le !== null ? (le = le.delay, le = typeof le == "number" && 0 < le ? he + le : he) : le = he, U) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return M = le + M, U = {
        id: v++,
        callback: $,
        priorityLevel: U,
        startTime: le,
        expirationTime: M,
        sortIndex: -1
      }, le > he ? (U.sortIndex = le, a(p, U), l(d) === null && U === l(p) && (x ? (A(L), L = -1) : x = !0, ue(T, le - he))) : (U.sortIndex = M, a(d, U), h || y || (h = !0, j || (j = !0, X()))), U;
    }, r.unstable_shouldYield = P, r.unstable_wrapCallback = function(U) {
      var $ = g;
      return function() {
        var le = g;
        g = $;
        try {
          return U.apply(this, arguments);
        } finally {
          g = le;
        }
      };
    };
  })(hf)), hf;
}
var hg;
function b2() {
  return hg || (hg = 1, ff.exports = y2()), ff.exports;
}
var df = { exports: {} }, At = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var dg;
function S2() {
  if (dg) return At;
  dg = 1;
  var r = rh();
  function a(d) {
    var p = "https://react.dev/errors/" + d;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        p += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + d + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function l() {
  }
  var s = {
    d: {
      f: l,
      r: function() {
        throw Error(a(522));
      },
      D: l,
      C: l,
      L: l,
      m: l,
      X: l,
      S: l,
      M: l
    },
    p: 0,
    findDOMNode: null
  }, u = Symbol.for("react.portal");
  function c(d, p, v) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: u,
      key: S == null ? null : "" + S,
      children: d,
      containerInfo: p,
      implementation: v
    };
  }
  var b = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(d, p) {
    if (d === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return At.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, At.createPortal = function(d, p) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(a(299));
    return c(d, p, null, v);
  }, At.flushSync = function(d) {
    var p = b.T, v = s.p;
    try {
      if (b.T = null, s.p = 2, d) return d();
    } finally {
      b.T = p, s.p = v, s.d.f();
    }
  }, At.preconnect = function(d, p) {
    typeof d == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, s.d.C(d, p));
  }, At.prefetchDNS = function(d) {
    typeof d == "string" && s.d.D(d);
  }, At.preinit = function(d, p) {
    if (typeof d == "string" && p && typeof p.as == "string") {
      var v = p.as, S = m(v, p.crossOrigin), g = typeof p.integrity == "string" ? p.integrity : void 0, y = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      v === "style" ? s.d.S(
        d,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: S,
          integrity: g,
          fetchPriority: y
        }
      ) : v === "script" && s.d.X(d, {
        crossOrigin: S,
        integrity: g,
        fetchPriority: y,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, At.preinitModule = function(d, p) {
    if (typeof d == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var v = m(
            p.as,
            p.crossOrigin
          );
          s.d.M(d, {
            crossOrigin: v,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && s.d.M(d);
  }, At.preload = function(d, p) {
    if (typeof d == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var v = p.as, S = m(v, p.crossOrigin);
      s.d.L(d, v, {
        crossOrigin: S,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, At.preloadModule = function(d, p) {
    if (typeof d == "string")
      if (p) {
        var v = m(p.as, p.crossOrigin);
        s.d.m(d, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: v,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else s.d.m(d);
  }, At.requestFormReset = function(d) {
    s.d.r(d);
  }, At.unstable_batchedUpdates = function(d, p) {
    return d(p);
  }, At.useFormState = function(d, p, v) {
    return b.H.useFormState(d, p, v);
  }, At.useFormStatus = function() {
    return b.H.useHostTransitionStatus();
  }, At.version = "19.1.1", At;
}
var pg;
function zv() {
  if (pg) return df.exports;
  pg = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (a) {
        console.error(a);
      }
  }
  return r(), df.exports = S2(), df.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mg;
function _2() {
  if (mg) return gl;
  mg = 1;
  var r = b2(), a = rh(), l = zv();
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function u(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function c(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function b(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function m(e) {
    if (c(e) !== e)
      throw Error(s(188));
  }
  function d(e) {
    var t = e.alternate;
    if (!t) {
      if (t = c(e), t === null) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, i = t; ; ) {
      var o = n.return;
      if (o === null) break;
      var f = o.alternate;
      if (f === null) {
        if (i = o.return, i !== null) {
          n = i;
          continue;
        }
        break;
      }
      if (o.child === f.child) {
        for (f = o.child; f; ) {
          if (f === n) return m(o), e;
          if (f === i) return m(o), t;
          f = f.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== i.return) n = o, i = f;
      else {
        for (var _ = !1, w = o.child; w; ) {
          if (w === n) {
            _ = !0, n = o, i = f;
            break;
          }
          if (w === i) {
            _ = !0, i = o, n = f;
            break;
          }
          w = w.sibling;
        }
        if (!_) {
          for (w = f.child; w; ) {
            if (w === n) {
              _ = !0, n = f, i = o;
              break;
            }
            if (w === i) {
              _ = !0, i = f, n = o;
              break;
            }
            w = w.sibling;
          }
          if (!_) throw Error(s(189));
        }
      }
      if (n.alternate !== i) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function p(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = p(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var v = Object.assign, S = Symbol.for("react.element"), g = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), A = Symbol.for("react.consumer"), D = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), T = Symbol.for("react.suspense"), j = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), ee = Symbol.for("react.activity"), P = Symbol.for("react.memo_cache_sentinel"), Y = Symbol.iterator;
  function X(e) {
    return e === null || typeof e != "object" ? null : (e = Y && e[Y] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var oe = Symbol.for("react.client.reference");
  function fe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === oe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case h:
        return "Fragment";
      case C:
        return "Profiler";
      case x:
        return "StrictMode";
      case T:
        return "Suspense";
      case j:
        return "SuspenseList";
      case ee:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case y:
          return "Portal";
        case D:
          return (e.displayName || "Context") + ".Provider";
        case A:
          return (e._context.displayName || "Context") + ".Consumer";
        case E:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case L:
          return t = e.displayName || null, t !== null ? t : fe(e.type) || "Memo";
        case G:
          t = e._payload, e = e._init;
          try {
            return fe(e(t));
          } catch {
          }
      }
    return null;
  }
  var ue = Array.isArray, U = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $ = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, le = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, he = [], M = -1;
  function F(e) {
    return { current: e };
  }
  function te(e) {
    0 > M || (e.current = he[M], he[M] = null, M--);
  }
  function re(e, t) {
    M++, he[M] = e.current, e.current = t;
  }
  var ae = F(null), Oe = F(null), ve = F(null), pt = F(null);
  function Le(e, t) {
    switch (re(ve, t), re(Oe, e), re(ae, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Dm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Dm(t), e = Mm(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    te(ae), re(ae, e);
  }
  function Gt() {
    te(ae), te(Oe), te(ve);
  }
  function gr(e) {
    e.memoizedState !== null && re(pt, e);
    var t = ae.current, n = Mm(t, e.type);
    t !== n && (re(Oe, e), re(ae, n));
  }
  function vn(e) {
    Oe.current === e && (te(ae), te(Oe)), pt.current === e && (te(pt), ol._currentValue = le);
  }
  var Tn = Object.prototype.hasOwnProperty, Pa = r.unstable_scheduleCallback, qa = r.unstable_cancelCallback, vr = r.unstable_shouldYield, Ia = r.unstable_requestPaint, Nt = r.unstable_now, vi = r.unstable_getCurrentPriorityLevel, Vt = r.unstable_ImmediatePriority, me = r.unstable_UserBlockingPriority, de = r.unstable_NormalPriority, Ue = r.unstable_LowPriority, He = r.unstable_IdlePriority, k = r.log, J = r.unstable_setDisableYieldValue, Z = null, se = null;
  function ke(e) {
    if (typeof k == "function" && J(e), se && typeof se.setStrictMode == "function")
      try {
        se.setStrictMode(Z, e);
      } catch {
      }
  }
  var ge = Math.clz32 ? Math.clz32 : wn, qe = Math.log, Ge = Math.LN2;
  function wn(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (qe(e) / Ge | 0) | 0;
  }
  var Yt = 256, Nn = 4194304;
  function rn(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function Ot(e, t, n) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var o = 0, f = e.suspendedLanes, _ = e.pingedLanes;
    e = e.warmLanes;
    var w = i & 134217727;
    return w !== 0 ? (i = w & ~f, i !== 0 ? o = rn(i) : (_ &= w, _ !== 0 ? o = rn(_) : n || (n = w & ~e, n !== 0 && (o = rn(n))))) : (w = i & ~f, w !== 0 ? o = rn(w) : _ !== 0 ? o = rn(_) : n || (n = i & ~e, n !== 0 && (o = rn(n)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, n = t & -t, f >= n || f === 32 && (n & 4194048) !== 0) ? t : o;
  }
  function kt(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Hl(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function yr() {
    var e = Yt;
    return Yt <<= 1, (Yt & 4194048) === 0 && (Yt = 256), e;
  }
  function ph() {
    var e = Nn;
    return Nn <<= 1, (Nn & 62914560) === 0 && (Nn = 4194304), e;
  }
  function Zo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function yi(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function By(e, t, n, i, o, f) {
    var _ = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var w = e.entanglements, R = e.expirationTimes, q = e.hiddenUpdates;
    for (n = _ & ~n; 0 < n; ) {
      var Q = 31 - ge(n), W = 1 << Q;
      w[Q] = 0, R[Q] = -1;
      var I = q[Q];
      if (I !== null)
        for (q[Q] = null, Q = 0; Q < I.length; Q++) {
          var V = I[Q];
          V !== null && (V.lane &= -536870913);
        }
      n &= ~W;
    }
    i !== 0 && mh(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(_ & ~t));
  }
  function mh(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var i = 31 - ge(t);
    e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | n & 4194090;
  }
  function gh(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - ge(n), o = 1 << i;
      o & t | e[i] & t && (e[i] |= t), n &= ~o;
    }
  }
  function Ko(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Jo(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function vh() {
    var e = $.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Km(e.type));
  }
  function zy(e, t) {
    var n = $.p;
    try {
      return $.p = e, t();
    } finally {
      $.p = n;
    }
  }
  var oa = Math.random().toString(36).slice(2), Et = "__reactFiber$" + oa, jt = "__reactProps$" + oa, br = "__reactContainer$" + oa, Wo = "__reactEvents$" + oa, Uy = "__reactListeners$" + oa, Hy = "__reactHandles$" + oa, yh = "__reactResources$" + oa, bi = "__reactMarker$" + oa;
  function $o(e) {
    delete e[Et], delete e[jt], delete e[Wo], delete e[Uy], delete e[Hy];
  }
  function Sr(e) {
    var t = e[Et];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[br] || n[Et]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Lm(e); e !== null; ) {
            if (n = e[Et]) return n;
            e = Lm(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function _r(e) {
    if (e = e[Et] || e[br]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Si(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function xr(e) {
    var t = e[yh];
    return t || (t = e[yh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function mt(e) {
    e[bi] = !0;
  }
  var bh = /* @__PURE__ */ new Set(), Sh = {};
  function Ga(e, t) {
    Er(e, t), Er(e + "Capture", t);
  }
  function Er(e, t) {
    for (Sh[e] = t, e = 0; e < t.length; e++)
      bh.add(t[e]);
  }
  var Py = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), _h = {}, xh = {};
  function qy(e) {
    return Tn.call(xh, e) ? !0 : Tn.call(_h, e) ? !1 : Py.test(e) ? xh[e] = !0 : (_h[e] = !0, !1);
  }
  function Pl(e, t, n) {
    if (qy(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var i = t.toLowerCase().slice(0, 5);
            if (i !== "data-" && i !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function ql(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + n);
    }
  }
  function Hn(e, t, n, i) {
    if (i === null) e.removeAttribute(n);
    else {
      switch (typeof i) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + i);
    }
  }
  var eu, Eh;
  function Cr(e) {
    if (eu === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        eu = t && t[1] || "", Eh = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + eu + e + Eh;
  }
  var tu = !1;
  function nu(e, t) {
    if (!e || tu) return "";
    tu = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var i = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var W = function() {
                throw Error();
              };
              if (Object.defineProperty(W.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(W, []);
                } catch (V) {
                  var I = V;
                }
                Reflect.construct(e, [], W);
              } else {
                try {
                  W.call();
                } catch (V) {
                  I = V;
                }
                e.call(W.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (V) {
                I = V;
              }
              (W = e()) && typeof W.catch == "function" && W.catch(function() {
              });
            }
          } catch (V) {
            if (V && I && typeof V.stack == "string")
              return [V.stack, I.stack];
          }
          return [null, null];
        }
      };
      i.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var o = Object.getOwnPropertyDescriptor(
        i.DetermineComponentFrameRoot,
        "name"
      );
      o && o.configurable && Object.defineProperty(
        i.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var f = i.DetermineComponentFrameRoot(), _ = f[0], w = f[1];
      if (_ && w) {
        var R = _.split(`
`), q = w.split(`
`);
        for (o = i = 0; i < R.length && !R[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; o < q.length && !q[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (i === R.length || o === q.length)
          for (i = R.length - 1, o = q.length - 1; 1 <= i && 0 <= o && R[i] !== q[o]; )
            o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (R[i] !== q[o]) {
            if (i !== 1 || o !== 1)
              do
                if (i--, o--, 0 > o || R[i] !== q[o]) {
                  var Q = `
` + R[i].replace(" at new ", " at ");
                  return e.displayName && Q.includes("<anonymous>") && (Q = Q.replace("<anonymous>", e.displayName)), Q;
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      tu = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Cr(n) : "";
  }
  function Iy(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Cr(e.type);
      case 16:
        return Cr("Lazy");
      case 13:
        return Cr("Suspense");
      case 19:
        return Cr("SuspenseList");
      case 0:
      case 15:
        return nu(e.type, !1);
      case 11:
        return nu(e.type.render, !1);
      case 1:
        return nu(e.type, !0);
      case 31:
        return Cr("Activity");
      default:
        return "";
    }
  }
  function Ch(e) {
    try {
      var t = "";
      do
        t += Iy(e), e = e.return;
      while (e);
      return t;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  function ln(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Ah(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Gy(e) {
    var t = Ah(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    ), i = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var o = n.get, f = n.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return o.call(this);
        },
        set: function(_) {
          i = "" + _, f.call(this, _);
        }
      }), Object.defineProperty(e, t, {
        enumerable: n.enumerable
      }), {
        getValue: function() {
          return i;
        },
        setValue: function(_) {
          i = "" + _;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Il(e) {
    e._valueTracker || (e._valueTracker = Gy(e));
  }
  function Th(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), i = "";
    return e && (i = Ah(e) ? e.checked ? "true" : "false" : e.value), e = i, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Gl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Vy = /[\n"\\]/g;
  function sn(e) {
    return e.replace(
      Vy,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function au(e, t, n, i, o, f, _, w) {
    e.name = "", _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" ? e.type = _ : e.removeAttribute("type"), t != null ? _ === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + ln(t)) : e.value !== "" + ln(t) && (e.value = "" + ln(t)) : _ !== "submit" && _ !== "reset" || e.removeAttribute("value"), t != null ? ru(e, _, ln(t)) : n != null ? ru(e, _, ln(n)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" ? e.name = "" + ln(w) : e.removeAttribute("name");
  }
  function wh(e, t, n, i, o, f, _, w) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), t != null || n != null) {
      if (!(f !== "submit" && f !== "reset" || t != null))
        return;
      n = n != null ? "" + ln(n) : "", t = t != null ? "" + ln(t) : n, w || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = w ? e.checked : !!i, e.defaultChecked = !!i, _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" && (e.name = _);
  }
  function ru(e, t, n) {
    t === "number" && Gl(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Ar(e, t, n, i) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++)
        t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + ln(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, i && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Nh(e, t, n) {
    if (t != null && (t = "" + ln(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + ln(n) : "";
  }
  function Oh(e, t, n, i) {
    if (t == null) {
      if (i != null) {
        if (n != null) throw Error(s(92));
        if (ue(i)) {
          if (1 < i.length) throw Error(s(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), t = n;
    }
    n = ln(t), e.defaultValue = n, i = e.textContent, i === n && i !== "" && i !== null && (e.value = i);
  }
  function Tr(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Yy = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Dh(e, t, n) {
    var i = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Yy.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function Mh(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(s(62));
    if (e = e.style, n != null) {
      for (var i in n)
        !n.hasOwnProperty(i) || t != null && t.hasOwnProperty(i) || (i.indexOf("--") === 0 ? e.setProperty(i, "") : i === "float" ? e.cssFloat = "" : e[i] = "");
      for (var o in t)
        i = t[o], t.hasOwnProperty(o) && n[o] !== i && Dh(e, o, i);
    } else
      for (var f in t)
        t.hasOwnProperty(f) && Dh(e, f, t[f]);
  }
  function iu(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Fy = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Xy = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Vl(e) {
    return Xy.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var lu = null;
  function su(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var wr = null, Nr = null;
  function Rh(e) {
    var t = _r(e);
    if (t && (e = t.stateNode)) {
      var n = e[jt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (au(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + sn(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var i = n[t];
              if (i !== e && i.form === e.form) {
                var o = i[jt] || null;
                if (!o) throw Error(s(90));
                au(
                  i,
                  o.value,
                  o.defaultValue,
                  o.defaultValue,
                  o.checked,
                  o.defaultChecked,
                  o.type,
                  o.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              i = n[t], i.form === e.form && Th(i);
          }
          break e;
        case "textarea":
          Nh(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Ar(e, !!n.multiple, t, !1);
      }
    }
  }
  var ou = !1;
  function kh(e, t, n) {
    if (ou) return e(t, n);
    ou = !0;
    try {
      var i = e(t);
      return i;
    } finally {
      if (ou = !1, (wr !== null || Nr !== null) && (Os(), wr && (t = wr, e = Nr, Nr = wr = null, Rh(t), e)))
        for (t = 0; t < e.length; t++) Rh(e[t]);
    }
  }
  function _i(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = n[jt] || null;
    if (i === null) return null;
    n = i[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (i = !i.disabled) || (e = e.type, i = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !i;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        s(231, t, typeof n)
      );
    return n;
  }
  var Pn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), uu = !1;
  if (Pn)
    try {
      var xi = {};
      Object.defineProperty(xi, "passive", {
        get: function() {
          uu = !0;
        }
      }), window.addEventListener("test", xi, xi), window.removeEventListener("test", xi, xi);
    } catch {
      uu = !1;
    }
  var ua = null, cu = null, Yl = null;
  function jh() {
    if (Yl) return Yl;
    var e, t = cu, n = t.length, i, o = "value" in ua ? ua.value : ua.textContent, f = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++) ;
    var _ = n - e;
    for (i = 1; i <= _ && t[n - i] === o[f - i]; i++) ;
    return Yl = o.slice(e, 1 < i ? 1 - i : void 0);
  }
  function Fl(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Xl() {
    return !0;
  }
  function Lh() {
    return !1;
  }
  function Lt(e) {
    function t(n, i, o, f, _) {
      this._reactName = n, this._targetInst = o, this.type = i, this.nativeEvent = f, this.target = _, this.currentTarget = null;
      for (var w in e)
        e.hasOwnProperty(w) && (n = e[w], this[w] = n ? n(f) : f[w]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Xl : Lh, this.isPropagationStopped = Lh, this;
    }
    return v(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Xl);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Xl);
      },
      persist: function() {
      },
      isPersistent: Xl
    }), t;
  }
  var Va = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ql = Lt(Va), Ei = v({}, Va, { view: 0, detail: 0 }), Qy = Lt(Ei), fu, hu, Ci, Zl = v({}, Ei, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: pu,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== Ci && (Ci && e.type === "mousemove" ? (fu = e.screenX - Ci.screenX, hu = e.screenY - Ci.screenY) : hu = fu = 0, Ci = e), fu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : hu;
    }
  }), Bh = Lt(Zl), Zy = v({}, Zl, { dataTransfer: 0 }), Ky = Lt(Zy), Jy = v({}, Ei, { relatedTarget: 0 }), du = Lt(Jy), Wy = v({}, Va, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $y = Lt(Wy), e1 = v({}, Va, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), t1 = Lt(e1), n1 = v({}, Va, { data: 0 }), zh = Lt(n1), a1 = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, r1 = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, i1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function l1(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = i1[e]) ? !!t[e] : !1;
  }
  function pu() {
    return l1;
  }
  var s1 = v({}, Ei, {
    key: function(e) {
      if (e.key) {
        var t = a1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Fl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? r1[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: pu,
    charCode: function(e) {
      return e.type === "keypress" ? Fl(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? Fl(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), o1 = Lt(s1), u1 = v({}, Zl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), Uh = Lt(u1), c1 = v({}, Ei, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pu
  }), f1 = Lt(c1), h1 = v({}, Va, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), d1 = Lt(h1), p1 = v({}, Zl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), m1 = Lt(p1), g1 = v({}, Va, {
    newState: 0,
    oldState: 0
  }), v1 = Lt(g1), y1 = [9, 13, 27, 32], mu = Pn && "CompositionEvent" in window, Ai = null;
  Pn && "documentMode" in document && (Ai = document.documentMode);
  var b1 = Pn && "TextEvent" in window && !Ai, Hh = Pn && (!mu || Ai && 8 < Ai && 11 >= Ai), Ph = " ", qh = !1;
  function Ih(e, t) {
    switch (e) {
      case "keyup":
        return y1.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Gh(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var Or = !1;
  function S1(e, t) {
    switch (e) {
      case "compositionend":
        return Gh(t);
      case "keypress":
        return t.which !== 32 ? null : (qh = !0, Ph);
      case "textInput":
        return e = t.data, e === Ph && qh ? null : e;
      default:
        return null;
    }
  }
  function _1(e, t) {
    if (Or)
      return e === "compositionend" || !mu && Ih(e, t) ? (e = jh(), Yl = cu = ua = null, Or = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return Hh && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var x1 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Vh(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!x1[e.type] : t === "textarea";
  }
  function Yh(e, t, n, i) {
    wr ? Nr ? Nr.push(i) : Nr = [i] : wr = i, t = Ls(t, "onChange"), 0 < t.length && (n = new Ql(
      "onChange",
      "change",
      null,
      n,
      i
    ), e.push({ event: n, listeners: t }));
  }
  var Ti = null, wi = null;
  function E1(e) {
    Am(e, 0);
  }
  function Kl(e) {
    var t = Si(e);
    if (Th(t)) return e;
  }
  function Fh(e, t) {
    if (e === "change") return t;
  }
  var Xh = !1;
  if (Pn) {
    var gu;
    if (Pn) {
      var vu = "oninput" in document;
      if (!vu) {
        var Qh = document.createElement("div");
        Qh.setAttribute("oninput", "return;"), vu = typeof Qh.oninput == "function";
      }
      gu = vu;
    } else gu = !1;
    Xh = gu && (!document.documentMode || 9 < document.documentMode);
  }
  function Zh() {
    Ti && (Ti.detachEvent("onpropertychange", Kh), wi = Ti = null);
  }
  function Kh(e) {
    if (e.propertyName === "value" && Kl(wi)) {
      var t = [];
      Yh(
        t,
        wi,
        e,
        su(e)
      ), kh(E1, t);
    }
  }
  function C1(e, t, n) {
    e === "focusin" ? (Zh(), Ti = t, wi = n, Ti.attachEvent("onpropertychange", Kh)) : e === "focusout" && Zh();
  }
  function A1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Kl(wi);
  }
  function T1(e, t) {
    if (e === "click") return Kl(t);
  }
  function w1(e, t) {
    if (e === "input" || e === "change")
      return Kl(t);
  }
  function N1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Ft = typeof Object.is == "function" ? Object.is : N1;
  function Ni(e, t) {
    if (Ft(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var o = n[i];
      if (!Tn.call(t, o) || !Ft(e[o], t[o]))
        return !1;
    }
    return !0;
  }
  function Jh(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Wh(e, t) {
    var n = Jh(e);
    e = 0;
    for (var i; n; ) {
      if (n.nodeType === 3) {
        if (i = e + n.textContent.length, e <= t && i >= t)
          return { node: n, offset: t - e };
        e = i;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Jh(n);
    }
  }
  function $h(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? $h(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function ed(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Gl(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Gl(e.document);
    }
    return t;
  }
  function yu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var O1 = Pn && "documentMode" in document && 11 >= document.documentMode, Dr = null, bu = null, Oi = null, Su = !1;
  function td(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Su || Dr == null || Dr !== Gl(i) || (i = Dr, "selectionStart" in i && yu(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), Oi && Ni(Oi, i) || (Oi = i, i = Ls(bu, "onSelect"), 0 < i.length && (t = new Ql(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: i }), t.target = Dr)));
  }
  function Ya(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Mr = {
    animationend: Ya("Animation", "AnimationEnd"),
    animationiteration: Ya("Animation", "AnimationIteration"),
    animationstart: Ya("Animation", "AnimationStart"),
    transitionrun: Ya("Transition", "TransitionRun"),
    transitionstart: Ya("Transition", "TransitionStart"),
    transitioncancel: Ya("Transition", "TransitionCancel"),
    transitionend: Ya("Transition", "TransitionEnd")
  }, _u = {}, nd = {};
  Pn && (nd = document.createElement("div").style, "AnimationEvent" in window || (delete Mr.animationend.animation, delete Mr.animationiteration.animation, delete Mr.animationstart.animation), "TransitionEvent" in window || delete Mr.transitionend.transition);
  function Fa(e) {
    if (_u[e]) return _u[e];
    if (!Mr[e]) return e;
    var t = Mr[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in nd)
        return _u[e] = t[n];
    return e;
  }
  var ad = Fa("animationend"), rd = Fa("animationiteration"), id = Fa("animationstart"), D1 = Fa("transitionrun"), M1 = Fa("transitionstart"), R1 = Fa("transitioncancel"), ld = Fa("transitionend"), sd = /* @__PURE__ */ new Map(), xu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  xu.push("scrollEnd");
  function yn(e, t) {
    sd.set(e, t), Ga(t, [e]);
  }
  var od = /* @__PURE__ */ new WeakMap();
  function on(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = od.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Ch(t)
      }, od.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Ch(t)
    };
  }
  var un = [], Rr = 0, Eu = 0;
  function Jl() {
    for (var e = Rr, t = Eu = Rr = 0; t < e; ) {
      var n = un[t];
      un[t++] = null;
      var i = un[t];
      un[t++] = null;
      var o = un[t];
      un[t++] = null;
      var f = un[t];
      if (un[t++] = null, i !== null && o !== null) {
        var _ = i.pending;
        _ === null ? o.next = o : (o.next = _.next, _.next = o), i.pending = o;
      }
      f !== 0 && ud(n, o, f);
    }
  }
  function Wl(e, t, n, i) {
    un[Rr++] = e, un[Rr++] = t, un[Rr++] = n, un[Rr++] = i, Eu |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
  }
  function Cu(e, t, n, i) {
    return Wl(e, t, n, i), $l(e);
  }
  function kr(e, t) {
    return Wl(e, null, null, t), $l(e);
  }
  function ud(e, t, n) {
    e.lanes |= n;
    var i = e.alternate;
    i !== null && (i.lanes |= n);
    for (var o = !1, f = e.return; f !== null; )
      f.childLanes |= n, i = f.alternate, i !== null && (i.childLanes |= n), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (o = !0)), e = f, f = f.return;
    return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - ge(n), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = n | 536870912), f) : null;
  }
  function $l(e) {
    if (50 < el)
      throw el = 0, Dc = null, Error(s(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var jr = {};
  function k1(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Xt(e, t, n, i) {
    return new k1(e, t, n, i);
  }
  function Au(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function qn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Xt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function cd(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function es(e, t, n, i, o, f) {
    var _ = 0;
    if (i = e, typeof e == "function") Au(e) && (_ = 1);
    else if (typeof e == "string")
      _ = L0(
        e,
        n,
        ae.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case ee:
          return e = Xt(31, n, t, o), e.elementType = ee, e.lanes = f, e;
        case h:
          return Xa(n.children, o, f, t);
        case x:
          _ = 8, o |= 24;
          break;
        case C:
          return e = Xt(12, n, t, o | 2), e.elementType = C, e.lanes = f, e;
        case T:
          return e = Xt(13, n, t, o), e.elementType = T, e.lanes = f, e;
        case j:
          return e = Xt(19, n, t, o), e.elementType = j, e.lanes = f, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case O:
              case D:
                _ = 10;
                break e;
              case A:
                _ = 9;
                break e;
              case E:
                _ = 11;
                break e;
              case L:
                _ = 14;
                break e;
              case G:
                _ = 16, i = null;
                break e;
            }
          _ = 29, n = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), i = null;
      }
    return t = Xt(_, n, t, o), t.elementType = e, t.type = i, t.lanes = f, t;
  }
  function Xa(e, t, n, i) {
    return e = Xt(7, e, i, t), e.lanes = n, e;
  }
  function Tu(e, t, n) {
    return e = Xt(6, e, null, t), e.lanes = n, e;
  }
  function wu(e, t, n) {
    return t = Xt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Lr = [], Br = 0, ts = null, ns = 0, cn = [], fn = 0, Qa = null, In = 1, Gn = "";
  function Za(e, t) {
    Lr[Br++] = ns, Lr[Br++] = ts, ts = e, ns = t;
  }
  function fd(e, t, n) {
    cn[fn++] = In, cn[fn++] = Gn, cn[fn++] = Qa, Qa = e;
    var i = In;
    e = Gn;
    var o = 32 - ge(i) - 1;
    i &= ~(1 << o), n += 1;
    var f = 32 - ge(t) + o;
    if (30 < f) {
      var _ = o - o % 5;
      f = (i & (1 << _) - 1).toString(32), i >>= _, o -= _, In = 1 << 32 - ge(t) + o | n << o | i, Gn = f + e;
    } else
      In = 1 << f | n << o | i, Gn = e;
  }
  function Nu(e) {
    e.return !== null && (Za(e, 1), fd(e, 1, 0));
  }
  function Ou(e) {
    for (; e === ts; )
      ts = Lr[--Br], Lr[Br] = null, ns = Lr[--Br], Lr[Br] = null;
    for (; e === Qa; )
      Qa = cn[--fn], cn[fn] = null, Gn = cn[--fn], cn[fn] = null, In = cn[--fn], cn[fn] = null;
  }
  var Dt = null, tt = null, Ie = !1, Ka = null, On = !1, Du = Error(s(519));
  function Ja(e) {
    var t = Error(s(418, ""));
    throw Ri(on(t, e)), Du;
  }
  function hd(e) {
    var t = e.stateNode, n = e.type, i = e.memoizedProps;
    switch (t[Et] = e, t[jt] = i, n) {
      case "dialog":
        Me("cancel", t), Me("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Me("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < nl.length; n++)
          Me(nl[n], t);
        break;
      case "source":
        Me("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Me("error", t), Me("load", t);
        break;
      case "details":
        Me("toggle", t);
        break;
      case "input":
        Me("invalid", t), wh(
          t,
          i.value,
          i.defaultValue,
          i.checked,
          i.defaultChecked,
          i.type,
          i.name,
          !0
        ), Il(t);
        break;
      case "select":
        Me("invalid", t);
        break;
      case "textarea":
        Me("invalid", t), Oh(t, i.value, i.defaultValue, i.children), Il(t);
    }
    n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || i.suppressHydrationWarning === !0 || Om(t.textContent, n) ? (i.popover != null && (Me("beforetoggle", t), Me("toggle", t)), i.onScroll != null && Me("scroll", t), i.onScrollEnd != null && Me("scrollend", t), i.onClick != null && (t.onclick = Bs), t = !0) : t = !1, t || Ja(e);
  }
  function dd(e) {
    for (Dt = e.return; Dt; )
      switch (Dt.tag) {
        case 5:
        case 13:
          On = !1;
          return;
        case 27:
        case 3:
          On = !0;
          return;
        default:
          Dt = Dt.return;
      }
  }
  function Di(e) {
    if (e !== Dt) return !1;
    if (!Ie) return dd(e), Ie = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Fc(e.type, e.memoizedProps)), n = !n), n && tt && Ja(e), dd(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (n = e.data, n === "/$") {
              if (t === 0) {
                tt = Sn(e.nextSibling);
                break e;
              }
              t--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || t++;
          e = e.nextSibling;
        }
        tt = null;
      }
    } else
      t === 27 ? (t = tt, Aa(e.type) ? (e = Kc, Kc = null, tt = e) : tt = t) : tt = Dt ? Sn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Mi() {
    tt = Dt = null, Ie = !1;
  }
  function pd() {
    var e = Ka;
    return e !== null && (Ut === null ? Ut = e : Ut.push.apply(
      Ut,
      e
    ), Ka = null), e;
  }
  function Ri(e) {
    Ka === null ? Ka = [e] : Ka.push(e);
  }
  var Mu = F(null), Wa = null, Vn = null;
  function ca(e, t, n) {
    re(Mu, t._currentValue), t._currentValue = n;
  }
  function Yn(e) {
    e._currentValue = Mu.current, te(Mu);
  }
  function Ru(e, t, n) {
    for (; e !== null; ) {
      var i = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, i !== null && (i.childLanes |= t)) : i !== null && (i.childLanes & t) !== t && (i.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function ku(e, t, n, i) {
    var o = e.child;
    for (o !== null && (o.return = e); o !== null; ) {
      var f = o.dependencies;
      if (f !== null) {
        var _ = o.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var w = f;
          f = o;
          for (var R = 0; R < t.length; R++)
            if (w.context === t[R]) {
              f.lanes |= n, w = f.alternate, w !== null && (w.lanes |= n), Ru(
                f.return,
                n,
                e
              ), i || (_ = null);
              break e;
            }
          f = w.next;
        }
      } else if (o.tag === 18) {
        if (_ = o.return, _ === null) throw Error(s(341));
        _.lanes |= n, f = _.alternate, f !== null && (f.lanes |= n), Ru(_, n, e), _ = null;
      } else _ = o.child;
      if (_ !== null) _.return = o;
      else
        for (_ = o; _ !== null; ) {
          if (_ === e) {
            _ = null;
            break;
          }
          if (o = _.sibling, o !== null) {
            o.return = _.return, _ = o;
            break;
          }
          _ = _.return;
        }
      o = _;
    }
  }
  function ki(e, t, n, i) {
    e = null;
    for (var o = t, f = !1; o !== null; ) {
      if (!f) {
        if ((o.flags & 524288) !== 0) f = !0;
        else if ((o.flags & 262144) !== 0) break;
      }
      if (o.tag === 10) {
        var _ = o.alternate;
        if (_ === null) throw Error(s(387));
        if (_ = _.memoizedProps, _ !== null) {
          var w = o.type;
          Ft(o.pendingProps.value, _.value) || (e !== null ? e.push(w) : e = [w]);
        }
      } else if (o === pt.current) {
        if (_ = o.alternate, _ === null) throw Error(s(387));
        _.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(ol) : e = [ol]);
      }
      o = o.return;
    }
    e !== null && ku(
      t,
      e,
      n,
      i
    ), t.flags |= 262144;
  }
  function as(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Ft(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function $a(e) {
    Wa = e, Vn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Ct(e) {
    return md(Wa, e);
  }
  function rs(e, t) {
    return Wa === null && $a(e), md(e, t);
  }
  function md(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Vn === null) {
      if (e === null) throw Error(s(308));
      Vn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Vn = Vn.next = t;
    return n;
  }
  var j1 = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, i) {
        e.push(i);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, L1 = r.unstable_scheduleCallback, B1 = r.unstable_NormalPriority, ht = {
    $$typeof: D,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ju() {
    return {
      controller: new j1(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ji(e) {
    e.refCount--, e.refCount === 0 && L1(B1, function() {
      e.controller.abort();
    });
  }
  var Li = null, Lu = 0, zr = 0, Ur = null;
  function z1(e, t) {
    if (Li === null) {
      var n = Li = [];
      Lu = 0, zr = zc(), Ur = {
        status: "pending",
        value: void 0,
        then: function(i) {
          n.push(i);
        }
      };
    }
    return Lu++, t.then(gd, gd), t;
  }
  function gd() {
    if (--Lu === 0 && Li !== null) {
      Ur !== null && (Ur.status = "fulfilled");
      var e = Li;
      Li = null, zr = 0, Ur = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function U1(e, t) {
    var n = [], i = {
      status: "pending",
      value: null,
      reason: null,
      then: function(o) {
        n.push(o);
      }
    };
    return e.then(
      function() {
        i.status = "fulfilled", i.value = t;
        for (var o = 0; o < n.length; o++) (0, n[o])(t);
      },
      function(o) {
        for (i.status = "rejected", i.reason = o, o = 0; o < n.length; o++)
          (0, n[o])(void 0);
      }
    ), i;
  }
  var vd = U.S;
  U.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && z1(e, t), vd !== null && vd(e, t);
  };
  var er = F(null);
  function Bu() {
    var e = er.current;
    return e !== null ? e : Ke.pooledCache;
  }
  function is(e, t) {
    t === null ? re(er, er.current) : re(er, t.pool);
  }
  function yd() {
    var e = Bu();
    return e === null ? null : { parent: ht._currentValue, pool: e };
  }
  var Bi = Error(s(460)), bd = Error(s(474)), ls = Error(s(542)), zu = { then: function() {
  } };
  function Sd(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function ss() {
  }
  function _d(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(ss, ss), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, Ed(e), e;
      default:
        if (typeof t.status == "string") t.then(ss, ss);
        else {
          if (e = Ke, e !== null && 100 < e.shellSuspendCounter)
            throw Error(s(482));
          e = t, e.status = "pending", e.then(
            function(i) {
              if (t.status === "pending") {
                var o = t;
                o.status = "fulfilled", o.value = i;
              }
            },
            function(i) {
              if (t.status === "pending") {
                var o = t;
                o.status = "rejected", o.reason = i;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, Ed(e), e;
        }
        throw zi = t, Bi;
    }
  }
  var zi = null;
  function xd() {
    if (zi === null) throw Error(s(459));
    var e = zi;
    return zi = null, e;
  }
  function Ed(e) {
    if (e === Bi || e === ls)
      throw Error(s(483));
  }
  var fa = !1;
  function Uu(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Hu(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function ha(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function da(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Ve & 2) !== 0) {
      var o = i.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = $l(e), ud(e, null, n), t;
    }
    return Wl(e, i, t, n), $l(e);
  }
  function Ui(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, gh(e, n);
    }
  }
  function Pu(e, t) {
    var n = e.updateQueue, i = e.alternate;
    if (i !== null && (i = i.updateQueue, n === i)) {
      var o = null, f = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var _ = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          f === null ? o = f = _ : f = f.next = _, n = n.next;
        } while (n !== null);
        f === null ? o = f = t : f = f.next = t;
      } else o = f = t;
      n = {
        baseState: i.baseState,
        firstBaseUpdate: o,
        lastBaseUpdate: f,
        shared: i.shared,
        callbacks: i.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var qu = !1;
  function Hi() {
    if (qu) {
      var e = Ur;
      if (e !== null) throw e;
    }
  }
  function Pi(e, t, n, i) {
    qu = !1;
    var o = e.updateQueue;
    fa = !1;
    var f = o.firstBaseUpdate, _ = o.lastBaseUpdate, w = o.shared.pending;
    if (w !== null) {
      o.shared.pending = null;
      var R = w, q = R.next;
      R.next = null, _ === null ? f = q : _.next = q, _ = R;
      var Q = e.alternate;
      Q !== null && (Q = Q.updateQueue, w = Q.lastBaseUpdate, w !== _ && (w === null ? Q.firstBaseUpdate = q : w.next = q, Q.lastBaseUpdate = R));
    }
    if (f !== null) {
      var W = o.baseState;
      _ = 0, Q = q = R = null, w = f;
      do {
        var I = w.lane & -536870913, V = I !== w.lane;
        if (V ? (ze & I) === I : (i & I) === I) {
          I !== 0 && I === zr && (qu = !0), Q !== null && (Q = Q.next = {
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: null,
            next: null
          });
          e: {
            var Se = e, ye = w;
            I = t;
            var Qe = n;
            switch (ye.tag) {
              case 1:
                if (Se = ye.payload, typeof Se == "function") {
                  W = Se.call(Qe, W, I);
                  break e;
                }
                W = Se;
                break e;
              case 3:
                Se.flags = Se.flags & -65537 | 128;
              case 0:
                if (Se = ye.payload, I = typeof Se == "function" ? Se.call(Qe, W, I) : Se, I == null) break e;
                W = v({}, W, I);
                break e;
              case 2:
                fa = !0;
            }
          }
          I = w.callback, I !== null && (e.flags |= 64, V && (e.flags |= 8192), V = o.callbacks, V === null ? o.callbacks = [I] : V.push(I));
        } else
          V = {
            lane: I,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          }, Q === null ? (q = Q = V, R = W) : Q = Q.next = V, _ |= I;
        if (w = w.next, w === null) {
          if (w = o.shared.pending, w === null)
            break;
          V = w, w = V.next, V.next = null, o.lastBaseUpdate = V, o.shared.pending = null;
        }
      } while (!0);
      Q === null && (R = W), o.baseState = R, o.firstBaseUpdate = q, o.lastBaseUpdate = Q, f === null && (o.shared.lanes = 0), _a |= _, e.lanes = _, e.memoizedState = W;
    }
  }
  function Cd(e, t) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(t);
  }
  function Ad(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Cd(n[e], t);
  }
  var Hr = F(null), os = F(0);
  function Td(e, t) {
    e = Wn, re(os, e), re(Hr, t), Wn = e | t.baseLanes;
  }
  function Iu() {
    re(os, Wn), re(Hr, Hr.current);
  }
  function Gu() {
    Wn = os.current, te(Hr), te(os);
  }
  var pa = 0, we = null, Fe = null, ot = null, us = !1, Pr = !1, tr = !1, cs = 0, qi = 0, qr = null, H1 = 0;
  function it() {
    throw Error(s(321));
  }
  function Vu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Ft(e[n], t[n])) return !1;
    return !0;
  }
  function Yu(e, t, n, i, o, f) {
    return pa = f, we = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, U.H = e === null || e.memoizedState === null ? up : cp, tr = !1, f = n(i, o), tr = !1, Pr && (f = Nd(
      t,
      n,
      i,
      o
    )), wd(e), f;
  }
  function wd(e) {
    U.H = gs;
    var t = Fe !== null && Fe.next !== null;
    if (pa = 0, ot = Fe = we = null, us = !1, qi = 0, qr = null, t) throw Error(s(300));
    e === null || gt || (e = e.dependencies, e !== null && as(e) && (gt = !0));
  }
  function Nd(e, t, n, i) {
    we = e;
    var o = 0;
    do {
      if (Pr && (qr = null), qi = 0, Pr = !1, 25 <= o) throw Error(s(301));
      if (o += 1, ot = Fe = null, e.updateQueue != null) {
        var f = e.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      U.H = F1, f = t(n, i);
    } while (Pr);
    return f;
  }
  function P1() {
    var e = U.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ii(t) : t, e = e.useState()[0], (Fe !== null ? Fe.memoizedState : null) !== e && (we.flags |= 1024), t;
  }
  function Fu() {
    var e = cs !== 0;
    return cs = 0, e;
  }
  function Xu(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Qu(e) {
    if (us) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      us = !1;
    }
    pa = 0, ot = Fe = we = null, Pr = !1, qi = cs = 0, qr = null;
  }
  function Bt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ot === null ? we.memoizedState = ot = e : ot = ot.next = e, ot;
  }
  function ut() {
    if (Fe === null) {
      var e = we.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Fe.next;
    var t = ot === null ? we.memoizedState : ot.next;
    if (t !== null)
      ot = t, Fe = e;
    else {
      if (e === null)
        throw we.alternate === null ? Error(s(467)) : Error(s(310));
      Fe = e, e = {
        memoizedState: Fe.memoizedState,
        baseState: Fe.baseState,
        baseQueue: Fe.baseQueue,
        queue: Fe.queue,
        next: null
      }, ot === null ? we.memoizedState = ot = e : ot = ot.next = e;
    }
    return ot;
  }
  function Zu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ii(e) {
    var t = qi;
    return qi += 1, qr === null && (qr = []), e = _d(qr, e, t), t = we, (ot === null ? t.memoizedState : ot.next) === null && (t = t.alternate, U.H = t === null || t.memoizedState === null ? up : cp), e;
  }
  function fs(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ii(e);
      if (e.$$typeof === D) return Ct(e);
    }
    throw Error(s(438, String(e)));
  }
  function Ku(e) {
    var t = null, n = we.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var i = we.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
        data: i.data.map(function(o) {
          return o.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Zu(), we.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), i = 0; i < e; i++)
        n[i] = P;
    return t.index++, n;
  }
  function Fn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function hs(e) {
    var t = ut();
    return Ju(t, Fe, e);
  }
  function Ju(e, t, n) {
    var i = e.queue;
    if (i === null) throw Error(s(311));
    i.lastRenderedReducer = n;
    var o = e.baseQueue, f = i.pending;
    if (f !== null) {
      if (o !== null) {
        var _ = o.next;
        o.next = f.next, f.next = _;
      }
      t.baseQueue = o = f, i.pending = null;
    }
    if (f = e.baseState, o === null) e.memoizedState = f;
    else {
      t = o.next;
      var w = _ = null, R = null, q = t, Q = !1;
      do {
        var W = q.lane & -536870913;
        if (W !== q.lane ? (ze & W) === W : (pa & W) === W) {
          var I = q.revertLane;
          if (I === 0)
            R !== null && (R = R.next = {
              lane: 0,
              revertLane: 0,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }), W === zr && (Q = !0);
          else if ((pa & I) === I) {
            q = q.next, I === zr && (Q = !0);
            continue;
          } else
            W = {
              lane: 0,
              revertLane: q.revertLane,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }, R === null ? (w = R = W, _ = f) : R = R.next = W, we.lanes |= I, _a |= I;
          W = q.action, tr && n(f, W), f = q.hasEagerState ? q.eagerState : n(f, W);
        } else
          I = {
            lane: W,
            revertLane: q.revertLane,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          }, R === null ? (w = R = I, _ = f) : R = R.next = I, we.lanes |= W, _a |= W;
        q = q.next;
      } while (q !== null && q !== t);
      if (R === null ? _ = f : R.next = w, !Ft(f, e.memoizedState) && (gt = !0, Q && (n = Ur, n !== null)))
        throw n;
      e.memoizedState = f, e.baseState = _, e.baseQueue = R, i.lastRenderedState = f;
    }
    return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
  }
  function Wu(e) {
    var t = ut(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch, o = n.pending, f = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var _ = o = o.next;
      do
        f = e(f, _.action), _ = _.next;
      while (_ !== o);
      Ft(f, t.memoizedState) || (gt = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), n.lastRenderedState = f;
    }
    return [f, i];
  }
  function Od(e, t, n) {
    var i = we, o = ut(), f = Ie;
    if (f) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = t();
    var _ = !Ft(
      (Fe || o).memoizedState,
      n
    );
    _ && (o.memoizedState = n, gt = !0), o = o.queue;
    var w = Rd.bind(null, i, o, e);
    if (Gi(2048, 8, w, [e]), o.getSnapshot !== t || _ || ot !== null && ot.memoizedState.tag & 1) {
      if (i.flags |= 2048, Ir(
        9,
        ds(),
        Md.bind(
          null,
          i,
          o,
          n,
          t
        ),
        null
      ), Ke === null) throw Error(s(349));
      f || (pa & 124) !== 0 || Dd(i, t, n);
    }
    return n;
  }
  function Dd(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = we.updateQueue, t === null ? (t = Zu(), we.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Md(e, t, n, i) {
    t.value = n, t.getSnapshot = i, kd(t) && jd(e);
  }
  function Rd(e, t, n) {
    return n(function() {
      kd(t) && jd(e);
    });
  }
  function kd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Ft(e, n);
    } catch {
      return !0;
    }
  }
  function jd(e) {
    var t = kr(e, 2);
    t !== null && Wt(t, e, 2);
  }
  function $u(e) {
    var t = Bt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), tr) {
        ke(!0);
        try {
          n();
        } finally {
          ke(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Fn,
      lastRenderedState: e
    }, t;
  }
  function Ld(e, t, n, i) {
    return e.baseState = n, Ju(
      e,
      Fe,
      typeof i == "function" ? i : Fn
    );
  }
  function q1(e, t, n, i, o) {
    if (ms(e)) throw Error(s(485));
    if (e = t.action, e !== null) {
      var f = {
        payload: o,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(_) {
          f.listeners.push(_);
        }
      };
      U.T !== null ? n(!0) : f.isTransition = !1, i(f), n = t.pending, n === null ? (f.next = t.pending = f, Bd(t, f)) : (f.next = n.next, t.pending = n.next = f);
    }
  }
  function Bd(e, t) {
    var n = t.action, i = t.payload, o = e.state;
    if (t.isTransition) {
      var f = U.T, _ = {};
      U.T = _;
      try {
        var w = n(o, i), R = U.S;
        R !== null && R(_, w), zd(e, t, w);
      } catch (q) {
        ec(e, t, q);
      } finally {
        U.T = f;
      }
    } else
      try {
        f = n(o, i), zd(e, t, f);
      } catch (q) {
        ec(e, t, q);
      }
  }
  function zd(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(i) {
        Ud(e, t, i);
      },
      function(i) {
        return ec(e, t, i);
      }
    ) : Ud(e, t, n);
  }
  function Ud(e, t, n) {
    t.status = "fulfilled", t.value = n, Hd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Bd(e, n)));
  }
  function ec(e, t, n) {
    var i = e.pending;
    if (e.pending = null, i !== null) {
      i = i.next;
      do
        t.status = "rejected", t.reason = n, Hd(t), t = t.next;
      while (t !== i);
    }
    e.action = null;
  }
  function Hd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Pd(e, t) {
    return t;
  }
  function qd(e, t) {
    if (Ie) {
      var n = Ke.formState;
      if (n !== null) {
        e: {
          var i = we;
          if (Ie) {
            if (tt) {
              t: {
                for (var o = tt, f = On; o.nodeType !== 8; ) {
                  if (!f) {
                    o = null;
                    break t;
                  }
                  if (o = Sn(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break t;
                  }
                }
                f = o.data, o = f === "F!" || f === "F" ? o : null;
              }
              if (o) {
                tt = Sn(
                  o.nextSibling
                ), i = o.data === "F!";
                break e;
              }
            }
            Ja(i);
          }
          i = !1;
        }
        i && (t = n[0]);
      }
    }
    return n = Bt(), n.memoizedState = n.baseState = t, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pd,
      lastRenderedState: t
    }, n.queue = i, n = lp.bind(
      null,
      we,
      i
    ), i.dispatch = n, i = $u(!1), f = ic.bind(
      null,
      we,
      !1,
      i.queue
    ), i = Bt(), o = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, i.queue = o, n = q1.bind(
      null,
      we,
      o,
      f,
      n
    ), o.dispatch = n, i.memoizedState = e, [t, n, !1];
  }
  function Id(e) {
    var t = ut();
    return Gd(t, Fe, e);
  }
  function Gd(e, t, n) {
    if (t = Ju(
      e,
      t,
      Pd
    )[0], e = hs(Fn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var i = Ii(t);
      } catch (_) {
        throw _ === Bi ? ls : _;
      }
    else i = t;
    t = ut();
    var o = t.queue, f = o.dispatch;
    return n !== t.memoizedState && (we.flags |= 2048, Ir(
      9,
      ds(),
      I1.bind(null, o, n),
      null
    )), [i, f, e];
  }
  function I1(e, t) {
    e.action = t;
  }
  function Vd(e) {
    var t = ut(), n = Fe;
    if (n !== null)
      return Gd(t, n, e);
    ut(), t = t.memoizedState, n = ut();
    var i = n.queue.dispatch;
    return n.memoizedState = e, [t, i, !1];
  }
  function Ir(e, t, n, i) {
    return e = { tag: e, create: n, deps: i, inst: t, next: null }, t = we.updateQueue, t === null && (t = Zu(), we.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e), e;
  }
  function ds() {
    return { destroy: void 0, resource: void 0 };
  }
  function Yd() {
    return ut().memoizedState;
  }
  function ps(e, t, n, i) {
    var o = Bt();
    i = i === void 0 ? null : i, we.flags |= e, o.memoizedState = Ir(
      1 | t,
      ds(),
      n,
      i
    );
  }
  function Gi(e, t, n, i) {
    var o = ut();
    i = i === void 0 ? null : i;
    var f = o.memoizedState.inst;
    Fe !== null && i !== null && Vu(i, Fe.memoizedState.deps) ? o.memoizedState = Ir(t, f, n, i) : (we.flags |= e, o.memoizedState = Ir(
      1 | t,
      f,
      n,
      i
    ));
  }
  function Fd(e, t) {
    ps(8390656, 8, e, t);
  }
  function Xd(e, t) {
    Gi(2048, 8, e, t);
  }
  function Qd(e, t) {
    return Gi(4, 2, e, t);
  }
  function Zd(e, t) {
    return Gi(4, 4, e, t);
  }
  function Kd(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function Jd(e, t, n) {
    n = n != null ? n.concat([e]) : null, Gi(4, 4, Kd.bind(null, t, e), n);
  }
  function tc() {
  }
  function Wd(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return t !== null && Vu(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function $d(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    if (t !== null && Vu(t, i[1]))
      return i[0];
    if (i = e(), tr) {
      ke(!0);
      try {
        e();
      } finally {
        ke(!1);
      }
    }
    return n.memoizedState = [i, t], i;
  }
  function nc(e, t, n) {
    return n === void 0 || (pa & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = n, e = nm(), we.lanes |= e, _a |= e, n);
  }
  function ep(e, t, n, i) {
    return Ft(n, t) ? n : Hr.current !== null ? (e = nc(e, n, i), Ft(e, t) || (gt = !0), e) : (pa & 42) === 0 ? (gt = !0, e.memoizedState = n) : (e = nm(), we.lanes |= e, _a |= e, t);
  }
  function tp(e, t, n, i, o) {
    var f = $.p;
    $.p = f !== 0 && 8 > f ? f : 8;
    var _ = U.T, w = {};
    U.T = w, ic(e, !1, t, n);
    try {
      var R = o(), q = U.S;
      if (q !== null && q(w, R), R !== null && typeof R == "object" && typeof R.then == "function") {
        var Q = U1(
          R,
          i
        );
        Vi(
          e,
          t,
          Q,
          Jt(e)
        );
      } else
        Vi(
          e,
          t,
          i,
          Jt(e)
        );
    } catch (W) {
      Vi(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: W },
        Jt()
      );
    } finally {
      $.p = f, U.T = _;
    }
  }
  function G1() {
  }
  function ac(e, t, n, i) {
    if (e.tag !== 5) throw Error(s(476));
    var o = np(e).queue;
    tp(
      e,
      o,
      t,
      le,
      n === null ? G1 : function() {
        return ap(e), n(i);
      }
    );
  }
  function np(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: le,
      baseState: le,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fn,
        lastRenderedState: le
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Fn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function ap(e) {
    var t = np(e).next.queue;
    Vi(e, t, {}, Jt());
  }
  function rc() {
    return Ct(ol);
  }
  function rp() {
    return ut().memoizedState;
  }
  function ip() {
    return ut().memoizedState;
  }
  function V1(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Jt();
          e = ha(n);
          var i = da(t, e, n);
          i !== null && (Wt(i, t, n), Ui(i, t, n)), t = { cache: ju() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Y1(e, t, n) {
    var i = Jt();
    n = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ms(e) ? sp(t, n) : (n = Cu(e, t, n, i), n !== null && (Wt(n, e, i), op(n, t, i)));
  }
  function lp(e, t, n) {
    var i = Jt();
    Vi(e, t, n, i);
  }
  function Vi(e, t, n, i) {
    var o = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ms(e)) sp(t, o);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null))
        try {
          var _ = t.lastRenderedState, w = f(_, n);
          if (o.hasEagerState = !0, o.eagerState = w, Ft(w, _))
            return Wl(e, t, o, 0), Ke === null && Jl(), !1;
        } catch {
        } finally {
        }
      if (n = Cu(e, t, o, i), n !== null)
        return Wt(n, e, i), op(n, t, i), !0;
    }
    return !1;
  }
  function ic(e, t, n, i) {
    if (i = {
      lane: 2,
      revertLane: zc(),
      action: i,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ms(e)) {
      if (t) throw Error(s(479));
    } else
      t = Cu(
        e,
        n,
        i,
        2
      ), t !== null && Wt(t, e, 2);
  }
  function ms(e) {
    var t = e.alternate;
    return e === we || t !== null && t === we;
  }
  function sp(e, t) {
    Pr = us = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function op(e, t, n) {
    if ((n & 4194048) !== 0) {
      var i = t.lanes;
      i &= e.pendingLanes, n |= i, t.lanes = n, gh(e, n);
    }
  }
  var gs = {
    readContext: Ct,
    use: fs,
    useCallback: it,
    useContext: it,
    useEffect: it,
    useImperativeHandle: it,
    useLayoutEffect: it,
    useInsertionEffect: it,
    useMemo: it,
    useReducer: it,
    useRef: it,
    useState: it,
    useDebugValue: it,
    useDeferredValue: it,
    useTransition: it,
    useSyncExternalStore: it,
    useId: it,
    useHostTransitionStatus: it,
    useFormState: it,
    useActionState: it,
    useOptimistic: it,
    useMemoCache: it,
    useCacheRefresh: it
  }, up = {
    readContext: Ct,
    use: fs,
    useCallback: function(e, t) {
      return Bt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Ct,
    useEffect: Fd,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, ps(
        4194308,
        4,
        Kd.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return ps(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      ps(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = Bt();
      t = t === void 0 ? null : t;
      var i = e();
      if (tr) {
        ke(!0);
        try {
          e();
        } finally {
          ke(!1);
        }
      }
      return n.memoizedState = [i, t], i;
    },
    useReducer: function(e, t, n) {
      var i = Bt();
      if (n !== void 0) {
        var o = n(t);
        if (tr) {
          ke(!0);
          try {
            n(t);
          } finally {
            ke(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = Y1.bind(
        null,
        we,
        e
      ), [i.memoizedState, e];
    },
    useRef: function(e) {
      var t = Bt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = $u(e);
      var t = e.queue, n = lp.bind(null, we, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: tc,
    useDeferredValue: function(e, t) {
      var n = Bt();
      return nc(n, e, t);
    },
    useTransition: function() {
      var e = $u(!1);
      return e = tp.bind(
        null,
        we,
        e.queue,
        !0,
        !1
      ), Bt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var i = we, o = Bt();
      if (Ie) {
        if (n === void 0)
          throw Error(s(407));
        n = n();
      } else {
        if (n = t(), Ke === null)
          throw Error(s(349));
        (ze & 124) !== 0 || Dd(i, t, n);
      }
      o.memoizedState = n;
      var f = { value: n, getSnapshot: t };
      return o.queue = f, Fd(Rd.bind(null, i, f, e), [
        e
      ]), i.flags |= 2048, Ir(
        9,
        ds(),
        Md.bind(
          null,
          i,
          f,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = Bt(), t = Ke.identifierPrefix;
      if (Ie) {
        var n = Gn, i = In;
        n = (i & ~(1 << 32 - ge(i) - 1)).toString(32) + n, t = "«" + t + "R" + n, n = cs++, 0 < n && (t += "H" + n.toString(32)), t += "»";
      } else
        n = H1++, t = "«" + t + "r" + n.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: rc,
    useFormState: qd,
    useActionState: qd,
    useOptimistic: function(e) {
      var t = Bt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = ic.bind(
        null,
        we,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Ku,
    useCacheRefresh: function() {
      return Bt().memoizedState = V1.bind(
        null,
        we
      );
    }
  }, cp = {
    readContext: Ct,
    use: fs,
    useCallback: Wd,
    useContext: Ct,
    useEffect: Xd,
    useImperativeHandle: Jd,
    useInsertionEffect: Qd,
    useLayoutEffect: Zd,
    useMemo: $d,
    useReducer: hs,
    useRef: Yd,
    useState: function() {
      return hs(Fn);
    },
    useDebugValue: tc,
    useDeferredValue: function(e, t) {
      var n = ut();
      return ep(
        n,
        Fe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = hs(Fn)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : Ii(e),
        t
      ];
    },
    useSyncExternalStore: Od,
    useId: rp,
    useHostTransitionStatus: rc,
    useFormState: Id,
    useActionState: Id,
    useOptimistic: function(e, t) {
      var n = ut();
      return Ld(n, Fe, e, t);
    },
    useMemoCache: Ku,
    useCacheRefresh: ip
  }, F1 = {
    readContext: Ct,
    use: fs,
    useCallback: Wd,
    useContext: Ct,
    useEffect: Xd,
    useImperativeHandle: Jd,
    useInsertionEffect: Qd,
    useLayoutEffect: Zd,
    useMemo: $d,
    useReducer: Wu,
    useRef: Yd,
    useState: function() {
      return Wu(Fn);
    },
    useDebugValue: tc,
    useDeferredValue: function(e, t) {
      var n = ut();
      return Fe === null ? nc(n, e, t) : ep(
        n,
        Fe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Wu(Fn)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : Ii(e),
        t
      ];
    },
    useSyncExternalStore: Od,
    useId: rp,
    useHostTransitionStatus: rc,
    useFormState: Vd,
    useActionState: Vd,
    useOptimistic: function(e, t) {
      var n = ut();
      return Fe !== null ? Ld(n, Fe, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Ku,
    useCacheRefresh: ip
  }, Gr = null, Yi = 0;
  function vs(e) {
    var t = Yi;
    return Yi += 1, Gr === null && (Gr = []), _d(Gr, e, t);
  }
  function Fi(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function ys(e, t) {
    throw t.$$typeof === S ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function fp(e) {
    var t = e._init;
    return t(e._payload);
  }
  function hp(e) {
    function t(z, B) {
      if (e) {
        var H = z.deletions;
        H === null ? (z.deletions = [B], z.flags |= 16) : H.push(B);
      }
    }
    function n(z, B) {
      if (!e) return null;
      for (; B !== null; )
        t(z, B), B = B.sibling;
      return null;
    }
    function i(z) {
      for (var B = /* @__PURE__ */ new Map(); z !== null; )
        z.key !== null ? B.set(z.key, z) : B.set(z.index, z), z = z.sibling;
      return B;
    }
    function o(z, B) {
      return z = qn(z, B), z.index = 0, z.sibling = null, z;
    }
    function f(z, B, H) {
      return z.index = H, e ? (H = z.alternate, H !== null ? (H = H.index, H < B ? (z.flags |= 67108866, B) : H) : (z.flags |= 67108866, B)) : (z.flags |= 1048576, B);
    }
    function _(z) {
      return e && z.alternate === null && (z.flags |= 67108866), z;
    }
    function w(z, B, H, K) {
      return B === null || B.tag !== 6 ? (B = Tu(H, z.mode, K), B.return = z, B) : (B = o(B, H), B.return = z, B);
    }
    function R(z, B, H, K) {
      var ce = H.type;
      return ce === h ? Q(
        z,
        B,
        H.props.children,
        K,
        H.key
      ) : B !== null && (B.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === G && fp(ce) === B.type) ? (B = o(B, H.props), Fi(B, H), B.return = z, B) : (B = es(
        H.type,
        H.key,
        H.props,
        null,
        z.mode,
        K
      ), Fi(B, H), B.return = z, B);
    }
    function q(z, B, H, K) {
      return B === null || B.tag !== 4 || B.stateNode.containerInfo !== H.containerInfo || B.stateNode.implementation !== H.implementation ? (B = wu(H, z.mode, K), B.return = z, B) : (B = o(B, H.children || []), B.return = z, B);
    }
    function Q(z, B, H, K, ce) {
      return B === null || B.tag !== 7 ? (B = Xa(
        H,
        z.mode,
        K,
        ce
      ), B.return = z, B) : (B = o(B, H), B.return = z, B);
    }
    function W(z, B, H) {
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return B = Tu(
          "" + B,
          z.mode,
          H
        ), B.return = z, B;
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case g:
            return H = es(
              B.type,
              B.key,
              B.props,
              null,
              z.mode,
              H
            ), Fi(H, B), H.return = z, H;
          case y:
            return B = wu(
              B,
              z.mode,
              H
            ), B.return = z, B;
          case G:
            var K = B._init;
            return B = K(B._payload), W(z, B, H);
        }
        if (ue(B) || X(B))
          return B = Xa(
            B,
            z.mode,
            H,
            null
          ), B.return = z, B;
        if (typeof B.then == "function")
          return W(z, vs(B), H);
        if (B.$$typeof === D)
          return W(
            z,
            rs(z, B),
            H
          );
        ys(z, B);
      }
      return null;
    }
    function I(z, B, H, K) {
      var ce = B !== null ? B.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return ce !== null ? null : w(z, B, "" + H, K);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case g:
            return H.key === ce ? R(z, B, H, K) : null;
          case y:
            return H.key === ce ? q(z, B, H, K) : null;
          case G:
            return ce = H._init, H = ce(H._payload), I(z, B, H, K);
        }
        if (ue(H) || X(H))
          return ce !== null ? null : Q(z, B, H, K, null);
        if (typeof H.then == "function")
          return I(
            z,
            B,
            vs(H),
            K
          );
        if (H.$$typeof === D)
          return I(
            z,
            B,
            rs(z, H),
            K
          );
        ys(z, H);
      }
      return null;
    }
    function V(z, B, H, K, ce) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return z = z.get(H) || null, w(B, z, "" + K, ce);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case g:
            return z = z.get(
              K.key === null ? H : K.key
            ) || null, R(B, z, K, ce);
          case y:
            return z = z.get(
              K.key === null ? H : K.key
            ) || null, q(B, z, K, ce);
          case G:
            var Ne = K._init;
            return K = Ne(K._payload), V(
              z,
              B,
              H,
              K,
              ce
            );
        }
        if (ue(K) || X(K))
          return z = z.get(H) || null, Q(B, z, K, ce, null);
        if (typeof K.then == "function")
          return V(
            z,
            B,
            H,
            vs(K),
            ce
          );
        if (K.$$typeof === D)
          return V(
            z,
            B,
            H,
            rs(B, K),
            ce
          );
        ys(B, K);
      }
      return null;
    }
    function Se(z, B, H, K) {
      for (var ce = null, Ne = null, pe = B, be = B = 0, yt = null; pe !== null && be < H.length; be++) {
        pe.index > be ? (yt = pe, pe = null) : yt = pe.sibling;
        var Pe = I(
          z,
          pe,
          H[be],
          K
        );
        if (Pe === null) {
          pe === null && (pe = yt);
          break;
        }
        e && pe && Pe.alternate === null && t(z, pe), B = f(Pe, B, be), Ne === null ? ce = Pe : Ne.sibling = Pe, Ne = Pe, pe = yt;
      }
      if (be === H.length)
        return n(z, pe), Ie && Za(z, be), ce;
      if (pe === null) {
        for (; be < H.length; be++)
          pe = W(z, H[be], K), pe !== null && (B = f(
            pe,
            B,
            be
          ), Ne === null ? ce = pe : Ne.sibling = pe, Ne = pe);
        return Ie && Za(z, be), ce;
      }
      for (pe = i(pe); be < H.length; be++)
        yt = V(
          pe,
          z,
          be,
          H[be],
          K
        ), yt !== null && (e && yt.alternate !== null && pe.delete(
          yt.key === null ? be : yt.key
        ), B = f(
          yt,
          B,
          be
        ), Ne === null ? ce = yt : Ne.sibling = yt, Ne = yt);
      return e && pe.forEach(function(Da) {
        return t(z, Da);
      }), Ie && Za(z, be), ce;
    }
    function ye(z, B, H, K) {
      if (H == null) throw Error(s(151));
      for (var ce = null, Ne = null, pe = B, be = B = 0, yt = null, Pe = H.next(); pe !== null && !Pe.done; be++, Pe = H.next()) {
        pe.index > be ? (yt = pe, pe = null) : yt = pe.sibling;
        var Da = I(z, pe, Pe.value, K);
        if (Da === null) {
          pe === null && (pe = yt);
          break;
        }
        e && pe && Da.alternate === null && t(z, pe), B = f(Da, B, be), Ne === null ? ce = Da : Ne.sibling = Da, Ne = Da, pe = yt;
      }
      if (Pe.done)
        return n(z, pe), Ie && Za(z, be), ce;
      if (pe === null) {
        for (; !Pe.done; be++, Pe = H.next())
          Pe = W(z, Pe.value, K), Pe !== null && (B = f(Pe, B, be), Ne === null ? ce = Pe : Ne.sibling = Pe, Ne = Pe);
        return Ie && Za(z, be), ce;
      }
      for (pe = i(pe); !Pe.done; be++, Pe = H.next())
        Pe = V(pe, z, be, Pe.value, K), Pe !== null && (e && Pe.alternate !== null && pe.delete(Pe.key === null ? be : Pe.key), B = f(Pe, B, be), Ne === null ? ce = Pe : Ne.sibling = Pe, Ne = Pe);
      return e && pe.forEach(function(X0) {
        return t(z, X0);
      }), Ie && Za(z, be), ce;
    }
    function Qe(z, B, H, K) {
      if (typeof H == "object" && H !== null && H.type === h && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case g:
            e: {
              for (var ce = H.key; B !== null; ) {
                if (B.key === ce) {
                  if (ce = H.type, ce === h) {
                    if (B.tag === 7) {
                      n(
                        z,
                        B.sibling
                      ), K = o(
                        B,
                        H.props.children
                      ), K.return = z, z = K;
                      break e;
                    }
                  } else if (B.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === G && fp(ce) === B.type) {
                    n(
                      z,
                      B.sibling
                    ), K = o(B, H.props), Fi(K, H), K.return = z, z = K;
                    break e;
                  }
                  n(z, B);
                  break;
                } else t(z, B);
                B = B.sibling;
              }
              H.type === h ? (K = Xa(
                H.props.children,
                z.mode,
                K,
                H.key
              ), K.return = z, z = K) : (K = es(
                H.type,
                H.key,
                H.props,
                null,
                z.mode,
                K
              ), Fi(K, H), K.return = z, z = K);
            }
            return _(z);
          case y:
            e: {
              for (ce = H.key; B !== null; ) {
                if (B.key === ce)
                  if (B.tag === 4 && B.stateNode.containerInfo === H.containerInfo && B.stateNode.implementation === H.implementation) {
                    n(
                      z,
                      B.sibling
                    ), K = o(B, H.children || []), K.return = z, z = K;
                    break e;
                  } else {
                    n(z, B);
                    break;
                  }
                else t(z, B);
                B = B.sibling;
              }
              K = wu(H, z.mode, K), K.return = z, z = K;
            }
            return _(z);
          case G:
            return ce = H._init, H = ce(H._payload), Qe(
              z,
              B,
              H,
              K
            );
        }
        if (ue(H))
          return Se(
            z,
            B,
            H,
            K
          );
        if (X(H)) {
          if (ce = X(H), typeof ce != "function") throw Error(s(150));
          return H = ce.call(H), ye(
            z,
            B,
            H,
            K
          );
        }
        if (typeof H.then == "function")
          return Qe(
            z,
            B,
            vs(H),
            K
          );
        if (H.$$typeof === D)
          return Qe(
            z,
            B,
            rs(z, H),
            K
          );
        ys(z, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint" ? (H = "" + H, B !== null && B.tag === 6 ? (n(z, B.sibling), K = o(B, H), K.return = z, z = K) : (n(z, B), K = Tu(H, z.mode, K), K.return = z, z = K), _(z)) : n(z, B);
    }
    return function(z, B, H, K) {
      try {
        Yi = 0;
        var ce = Qe(
          z,
          B,
          H,
          K
        );
        return Gr = null, ce;
      } catch (pe) {
        if (pe === Bi || pe === ls) throw pe;
        var Ne = Xt(29, pe, null, z.mode);
        return Ne.lanes = K, Ne.return = z, Ne;
      } finally {
      }
    };
  }
  var Vr = hp(!0), dp = hp(!1), hn = F(null), Dn = null;
  function ma(e) {
    var t = e.alternate;
    re(dt, dt.current & 1), re(hn, e), Dn === null && (t === null || Hr.current !== null || t.memoizedState !== null) && (Dn = e);
  }
  function pp(e) {
    if (e.tag === 22) {
      if (re(dt, dt.current), re(hn, e), Dn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Dn = e);
      }
    } else ga();
  }
  function ga() {
    re(dt, dt.current), re(hn, hn.current);
  }
  function Xn(e) {
    te(hn), Dn === e && (Dn = null), te(dt);
  }
  var dt = F(0);
  function bs(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || Zc(n)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  function lc(e, t, n, i) {
    t = e.memoizedState, n = n(i, t), n = n == null ? t : v({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var sc = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var i = Jt(), o = ha(i);
      o.payload = t, n != null && (o.callback = n), t = da(e, o, i), t !== null && (Wt(t, e, i), Ui(t, e, i));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var i = Jt(), o = ha(i);
      o.tag = 1, o.payload = t, n != null && (o.callback = n), t = da(e, o, i), t !== null && (Wt(t, e, i), Ui(t, e, i));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Jt(), i = ha(n);
      i.tag = 2, t != null && (i.callback = t), t = da(e, i, n), t !== null && (Wt(t, e, n), Ui(t, e, n));
    }
  };
  function mp(e, t, n, i, o, f, _) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, f, _) : t.prototype && t.prototype.isPureReactComponent ? !Ni(n, i) || !Ni(o, f) : !0;
  }
  function gp(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && sc.enqueueReplaceState(t, t.state, null);
  }
  function nr(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var i in t)
        i !== "ref" && (n[i] = t[i]);
    }
    if (e = e.defaultProps) {
      n === t && (n = v({}, n));
      for (var o in e)
        n[o] === void 0 && (n[o] = e[o]);
    }
    return n;
  }
  var Ss = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  };
  function vp(e) {
    Ss(e);
  }
  function yp(e) {
    console.error(e);
  }
  function bp(e) {
    Ss(e);
  }
  function _s(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (i) {
      setTimeout(function() {
        throw i;
      });
    }
  }
  function Sp(e, t, n) {
    try {
      var i = e.onCaughtError;
      i(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  function oc(e, t, n) {
    return n = ha(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      _s(e, t);
    }, n;
  }
  function _p(e) {
    return e = ha(e), e.tag = 3, e;
  }
  function xp(e, t, n, i) {
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var f = i.value;
      e.payload = function() {
        return o(f);
      }, e.callback = function() {
        Sp(t, n, i);
      };
    }
    var _ = n.stateNode;
    _ !== null && typeof _.componentDidCatch == "function" && (e.callback = function() {
      Sp(t, n, i), typeof o != "function" && (xa === null ? xa = /* @__PURE__ */ new Set([this]) : xa.add(this));
      var w = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: w !== null ? w : ""
      });
    });
  }
  function X1(e, t, n, i, o) {
    if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (t = n.alternate, t !== null && ki(
        t,
        n,
        o,
        !0
      ), n = hn.current, n !== null) {
        switch (n.tag) {
          case 13:
            return Dn === null ? Rc() : n.alternate === null && nt === 0 && (nt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = o, i === zu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), jc(e, i, o)), !1;
          case 22:
            return n.flags |= 65536, i === zu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : n.add(i)), jc(e, i, o)), !1;
        }
        throw Error(s(435, n.tag));
      }
      return jc(e, i, o), Rc(), !1;
    }
    if (Ie)
      return t = hn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== Du && (e = Error(s(422), { cause: i }), Ri(on(e, n)))) : (i !== Du && (t = Error(s(423), {
        cause: i
      }), Ri(
        on(t, n)
      )), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = on(i, n), o = oc(
        e.stateNode,
        i,
        o
      ), Pu(e, o), nt !== 4 && (nt = 2)), !1;
    var f = Error(s(520), { cause: i });
    if (f = on(f, n), $i === null ? $i = [f] : $i.push(f), nt !== 4 && (nt = 2), t === null) return !0;
    i = on(i, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = o & -o, n.lanes |= e, e = oc(n.stateNode, i, e), Pu(n, e), !1;
        case 1:
          if (t = n.type, f = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (xa === null || !xa.has(f))))
            return n.flags |= 65536, o &= -o, n.lanes |= o, o = _p(o), xp(
              o,
              e,
              n,
              i
            ), Pu(n, o), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Ep = Error(s(461)), gt = !1;
  function bt(e, t, n, i) {
    t.child = e === null ? dp(t, null, n, i) : Vr(
      t,
      e.child,
      n,
      i
    );
  }
  function Cp(e, t, n, i, o) {
    n = n.render;
    var f = t.ref;
    if ("ref" in i) {
      var _ = {};
      for (var w in i)
        w !== "ref" && (_[w] = i[w]);
    } else _ = i;
    return $a(t), i = Yu(
      e,
      t,
      n,
      _,
      f,
      o
    ), w = Fu(), e !== null && !gt ? (Xu(e, t, o), Qn(e, t, o)) : (Ie && w && Nu(t), t.flags |= 1, bt(e, t, i, o), t.child);
  }
  function Ap(e, t, n, i, o) {
    if (e === null) {
      var f = n.type;
      return typeof f == "function" && !Au(f) && f.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = f, Tp(
        e,
        t,
        f,
        i,
        o
      )) : (e = es(
        n.type,
        null,
        i,
        t,
        t.mode,
        o
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (f = e.child, !gc(e, o)) {
      var _ = f.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Ni, n(_, i) && e.ref === t.ref)
        return Qn(e, t, o);
    }
    return t.flags |= 1, e = qn(f, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Tp(e, t, n, i, o) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Ni(f, i) && e.ref === t.ref)
        if (gt = !1, t.pendingProps = i = f, gc(e, o))
          (e.flags & 131072) !== 0 && (gt = !0);
        else
          return t.lanes = e.lanes, Qn(e, t, o);
    }
    return uc(
      e,
      t,
      n,
      i,
      o
    );
  }
  function wp(e, t, n) {
    var i = t.pendingProps, o = i.children, f = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (i = f !== null ? f.baseLanes | n : n, e !== null) {
          for (o = t.child = e.child, f = 0; o !== null; )
            f = f | o.lanes | o.childLanes, o = o.sibling;
          t.childLanes = f & ~i;
        } else t.childLanes = 0, t.child = null;
        return Np(
          e,
          t,
          i,
          n
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && is(
          t,
          f !== null ? f.cachePool : null
        ), f !== null ? Td(t, f) : Iu(), pp(t);
      else
        return t.lanes = t.childLanes = 536870912, Np(
          e,
          t,
          f !== null ? f.baseLanes | n : n,
          n
        );
    } else
      f !== null ? (is(t, f.cachePool), Td(t, f), ga(), t.memoizedState = null) : (e !== null && is(t, null), Iu(), ga());
    return bt(e, t, o, n), t.child;
  }
  function Np(e, t, n, i) {
    var o = Bu();
    return o = o === null ? null : { parent: ht._currentValue, pool: o }, t.memoizedState = {
      baseLanes: n,
      cachePool: o
    }, e !== null && is(t, null), Iu(), pp(t), e !== null && ki(e, t, i, !0), null;
  }
  function xs(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(s(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function uc(e, t, n, i, o) {
    return $a(t), n = Yu(
      e,
      t,
      n,
      i,
      void 0,
      o
    ), i = Fu(), e !== null && !gt ? (Xu(e, t, o), Qn(e, t, o)) : (Ie && i && Nu(t), t.flags |= 1, bt(e, t, n, o), t.child);
  }
  function Op(e, t, n, i, o, f) {
    return $a(t), t.updateQueue = null, n = Nd(
      t,
      i,
      n,
      o
    ), wd(e), i = Fu(), e !== null && !gt ? (Xu(e, t, f), Qn(e, t, f)) : (Ie && i && Nu(t), t.flags |= 1, bt(e, t, n, f), t.child);
  }
  function Dp(e, t, n, i, o) {
    if ($a(t), t.stateNode === null) {
      var f = jr, _ = n.contextType;
      typeof _ == "object" && _ !== null && (f = Ct(_)), f = new n(i, f), t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = sc, t.stateNode = f, f._reactInternals = t, f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, Uu(t), _ = n.contextType, f.context = typeof _ == "object" && _ !== null ? Ct(_) : jr, f.state = t.memoizedState, _ = n.getDerivedStateFromProps, typeof _ == "function" && (lc(
        t,
        n,
        _,
        i
      ), f.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (_ = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), _ !== f.state && sc.enqueueReplaceState(f, f.state, null), Pi(t, i, f, o), Hi(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), i = !0;
    } else if (e === null) {
      f = t.stateNode;
      var w = t.memoizedProps, R = nr(n, w);
      f.props = R;
      var q = f.context, Q = n.contextType;
      _ = jr, typeof Q == "object" && Q !== null && (_ = Ct(Q));
      var W = n.getDerivedStateFromProps;
      Q = typeof W == "function" || typeof f.getSnapshotBeforeUpdate == "function", w = t.pendingProps !== w, Q || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (w || q !== _) && gp(
        t,
        f,
        i,
        _
      ), fa = !1;
      var I = t.memoizedState;
      f.state = I, Pi(t, i, f, o), Hi(), q = t.memoizedState, w || I !== q || fa ? (typeof W == "function" && (lc(
        t,
        n,
        W,
        i
      ), q = t.memoizedState), (R = fa || mp(
        t,
        n,
        R,
        i,
        I,
        q,
        _
      )) ? (Q || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = q), f.props = i, f.state = q, f.context = _, i = R) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      f = t.stateNode, Hu(e, t), _ = t.memoizedProps, Q = nr(n, _), f.props = Q, W = t.pendingProps, I = f.context, q = n.contextType, R = jr, typeof q == "object" && q !== null && (R = Ct(q)), w = n.getDerivedStateFromProps, (q = typeof w == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (_ !== W || I !== R) && gp(
        t,
        f,
        i,
        R
      ), fa = !1, I = t.memoizedState, f.state = I, Pi(t, i, f, o), Hi();
      var V = t.memoizedState;
      _ !== W || I !== V || fa || e !== null && e.dependencies !== null && as(e.dependencies) ? (typeof w == "function" && (lc(
        t,
        n,
        w,
        i
      ), V = t.memoizedState), (Q = fa || mp(
        t,
        n,
        Q,
        i,
        I,
        V,
        R
      ) || e !== null && e.dependencies !== null && as(e.dependencies)) ? (q || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, V, R), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
        i,
        V,
        R
      )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || _ === e.memoizedProps && I === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || _ === e.memoizedProps && I === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = V), f.props = i, f.state = V, f.context = R, i = Q) : (typeof f.componentDidUpdate != "function" || _ === e.memoizedProps && I === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || _ === e.memoizedProps && I === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return f = i, xs(e, t), i = (t.flags & 128) !== 0, f || i ? (f = t.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : f.render(), t.flags |= 1, e !== null && i ? (t.child = Vr(
      t,
      e.child,
      null,
      o
    ), t.child = Vr(
      t,
      null,
      n,
      o
    )) : bt(e, t, n, o), t.memoizedState = f.state, e = t.child) : e = Qn(
      e,
      t,
      o
    ), e;
  }
  function Mp(e, t, n, i) {
    return Mi(), t.flags |= 256, bt(e, t, n, i), t.child;
  }
  var cc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function fc(e) {
    return { baseLanes: e, cachePool: yd() };
  }
  function hc(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= dn), e;
  }
  function Rp(e, t, n) {
    var i = t.pendingProps, o = !1, f = (t.flags & 128) !== 0, _;
    if ((_ = f) || (_ = e !== null && e.memoizedState === null ? !1 : (dt.current & 2) !== 0), _ && (o = !0, t.flags &= -129), _ = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ie) {
        if (o ? ma(t) : ga(), Ie) {
          var w = tt, R;
          if (R = w) {
            e: {
              for (R = w, w = On; R.nodeType !== 8; ) {
                if (!w) {
                  w = null;
                  break e;
                }
                if (R = Sn(
                  R.nextSibling
                ), R === null) {
                  w = null;
                  break e;
                }
              }
              w = R;
            }
            w !== null ? (t.memoizedState = {
              dehydrated: w,
              treeContext: Qa !== null ? { id: In, overflow: Gn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, R = Xt(
              18,
              null,
              null,
              0
            ), R.stateNode = w, R.return = t, t.child = R, Dt = t, tt = null, R = !0) : R = !1;
          }
          R || Ja(t);
        }
        if (w = t.memoizedState, w !== null && (w = w.dehydrated, w !== null))
          return Zc(w) ? t.lanes = 32 : t.lanes = 536870912, null;
        Xn(t);
      }
      return w = i.children, i = i.fallback, o ? (ga(), o = t.mode, w = Es(
        { mode: "hidden", children: w },
        o
      ), i = Xa(
        i,
        o,
        n,
        null
      ), w.return = t, i.return = t, w.sibling = i, t.child = w, o = t.child, o.memoizedState = fc(n), o.childLanes = hc(
        e,
        _,
        n
      ), t.memoizedState = cc, i) : (ma(t), dc(t, w));
    }
    if (R = e.memoizedState, R !== null && (w = R.dehydrated, w !== null)) {
      if (f)
        t.flags & 256 ? (ma(t), t.flags &= -257, t = pc(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (ga(), t.child = e.child, t.flags |= 128, t = null) : (ga(), o = i.fallback, w = t.mode, i = Es(
          { mode: "visible", children: i.children },
          w
        ), o = Xa(
          o,
          w,
          n,
          null
        ), o.flags |= 2, i.return = t, o.return = t, i.sibling = o, t.child = i, Vr(
          t,
          e.child,
          null,
          n
        ), i = t.child, i.memoizedState = fc(n), i.childLanes = hc(
          e,
          _,
          n
        ), t.memoizedState = cc, t = o);
      else if (ma(t), Zc(w)) {
        if (_ = w.nextSibling && w.nextSibling.dataset, _) var q = _.dgst;
        _ = q, i = Error(s(419)), i.stack = "", i.digest = _, Ri({ value: i, source: null, stack: null }), t = pc(
          e,
          t,
          n
        );
      } else if (gt || ki(e, t, n, !1), _ = (n & e.childLanes) !== 0, gt || _) {
        if (_ = Ke, _ !== null && (i = n & -n, i = (i & 42) !== 0 ? 1 : Ko(i), i = (i & (_.suspendedLanes | n)) !== 0 ? 0 : i, i !== 0 && i !== R.retryLane))
          throw R.retryLane = i, kr(e, i), Wt(_, e, i), Ep;
        w.data === "$?" || Rc(), t = pc(
          e,
          t,
          n
        );
      } else
        w.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = R.treeContext, tt = Sn(
          w.nextSibling
        ), Dt = t, Ie = !0, Ka = null, On = !1, e !== null && (cn[fn++] = In, cn[fn++] = Gn, cn[fn++] = Qa, In = e.id, Gn = e.overflow, Qa = t), t = dc(
          t,
          i.children
        ), t.flags |= 4096);
      return t;
    }
    return o ? (ga(), o = i.fallback, w = t.mode, R = e.child, q = R.sibling, i = qn(R, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = R.subtreeFlags & 65011712, q !== null ? o = qn(q, o) : (o = Xa(
      o,
      w,
      n,
      null
    ), o.flags |= 2), o.return = t, i.return = t, i.sibling = o, t.child = i, i = o, o = t.child, w = e.child.memoizedState, w === null ? w = fc(n) : (R = w.cachePool, R !== null ? (q = ht._currentValue, R = R.parent !== q ? { parent: q, pool: q } : R) : R = yd(), w = {
      baseLanes: w.baseLanes | n,
      cachePool: R
    }), o.memoizedState = w, o.childLanes = hc(
      e,
      _,
      n
    ), t.memoizedState = cc, i) : (ma(t), n = e.child, e = n.sibling, n = qn(n, {
      mode: "visible",
      children: i.children
    }), n.return = t, n.sibling = null, e !== null && (_ = t.deletions, _ === null ? (t.deletions = [e], t.flags |= 16) : _.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function dc(e, t) {
    return t = Es(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Es(e, t) {
    return e = Xt(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function pc(e, t, n) {
    return Vr(t, e.child, null, n), e = dc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function kp(e, t, n) {
    e.lanes |= t;
    var i = e.alternate;
    i !== null && (i.lanes |= t), Ru(e.return, t, n);
  }
  function mc(e, t, n, i, o) {
    var f = e.memoizedState;
    f === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: i,
      tail: n,
      tailMode: o
    } : (f.isBackwards = t, f.rendering = null, f.renderingStartTime = 0, f.last = i, f.tail = n, f.tailMode = o);
  }
  function jp(e, t, n) {
    var i = t.pendingProps, o = i.revealOrder, f = i.tail;
    if (bt(e, t, i.children, n), i = dt.current, (i & 2) !== 0)
      i = i & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13)
            e.memoizedState !== null && kp(e, n, t);
          else if (e.tag === 19)
            kp(e, n, t);
          else if (e.child !== null) {
            e.child.return = e, e = e.child;
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t)
              break e;
            e = e.return;
          }
          e.sibling.return = e.return, e = e.sibling;
        }
      i &= 1;
    }
    switch (re(dt, i), o) {
      case "forwards":
        for (n = t.child, o = null; n !== null; )
          e = n.alternate, e !== null && bs(e) === null && (o = n), n = n.sibling;
        n = o, n === null ? (o = t.child, t.child = null) : (o = n.sibling, n.sibling = null), mc(
          t,
          !1,
          o,
          n,
          f
        );
        break;
      case "backwards":
        for (n = null, o = t.child, t.child = null; o !== null; ) {
          if (e = o.alternate, e !== null && bs(e) === null) {
            t.child = o;
            break;
          }
          e = o.sibling, o.sibling = n, n = o, o = e;
        }
        mc(
          t,
          !0,
          n,
          null,
          f
        );
        break;
      case "together":
        mc(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Qn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), _a |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (ki(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = qn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = qn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function gc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && as(e)));
  }
  function Q1(e, t, n) {
    switch (t.tag) {
      case 3:
        Le(t, t.stateNode.containerInfo), ca(t, ht, e.memoizedState.cache), Mi();
        break;
      case 27:
      case 5:
        gr(t);
        break;
      case 4:
        Le(t, t.stateNode.containerInfo);
        break;
      case 10:
        ca(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (ma(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Rp(e, t, n) : (ma(t), e = Qn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        ma(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (i = (n & t.childLanes) !== 0, i || (ki(
          e,
          t,
          n,
          !1
        ), i = (n & t.childLanes) !== 0), o) {
          if (i)
            return jp(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), re(dt, dt.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, wp(e, t, n);
      case 24:
        ca(t, ht, e.memoizedState.cache);
    }
    return Qn(e, t, n);
  }
  function Lp(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        gt = !0;
      else {
        if (!gc(e, n) && (t.flags & 128) === 0)
          return gt = !1, Q1(
            e,
            t,
            n
          );
        gt = (e.flags & 131072) !== 0;
      }
    else
      gt = !1, Ie && (t.flags & 1048576) !== 0 && fd(t, ns, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var i = t.elementType, o = i._init;
          if (i = o(i._payload), t.type = i, typeof i == "function")
            Au(i) ? (e = nr(i, e), t.tag = 1, t = Dp(
              null,
              t,
              i,
              e,
              n
            )) : (t.tag = 0, t = uc(
              null,
              t,
              i,
              e,
              n
            ));
          else {
            if (i != null) {
              if (o = i.$$typeof, o === E) {
                t.tag = 11, t = Cp(
                  null,
                  t,
                  i,
                  e,
                  n
                );
                break e;
              } else if (o === L) {
                t.tag = 14, t = Ap(
                  null,
                  t,
                  i,
                  e,
                  n
                );
                break e;
              }
            }
            throw t = fe(i) || i, Error(s(306, t, ""));
          }
        }
        return t;
      case 0:
        return uc(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return i = t.type, o = nr(
          i,
          t.pendingProps
        ), Dp(
          e,
          t,
          i,
          o,
          n
        );
      case 3:
        e: {
          if (Le(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          i = t.pendingProps;
          var f = t.memoizedState;
          o = f.element, Hu(e, t), Pi(t, i, null, n);
          var _ = t.memoizedState;
          if (i = _.cache, ca(t, ht, i), i !== f.cache && ku(
            t,
            [ht],
            n,
            !0
          ), Hi(), i = _.element, f.isDehydrated)
            if (f = {
              element: i,
              isDehydrated: !1,
              cache: _.cache
            }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
              t = Mp(
                e,
                t,
                i,
                n
              );
              break e;
            } else if (i !== o) {
              o = on(
                Error(s(424)),
                t
              ), Ri(o), t = Mp(
                e,
                t,
                i,
                n
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (tt = Sn(e.firstChild), Dt = t, Ie = !0, Ka = null, On = !0, n = dp(
                t,
                null,
                i,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (Mi(), i === o) {
              t = Qn(
                e,
                t,
                n
              );
              break e;
            }
            bt(
              e,
              t,
              i,
              n
            );
          }
          t = t.child;
        }
        return t;
      case 26:
        return xs(e, t), e === null ? (n = Hm(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ie || (n = t.type, e = t.pendingProps, i = zs(
          ve.current
        ).createElement(n), i[Et] = t, i[jt] = e, _t(i, n, e), mt(i), t.stateNode = i) : t.memoizedState = Hm(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return gr(t), e === null && Ie && (i = t.stateNode = Bm(
          t.type,
          t.pendingProps,
          ve.current
        ), Dt = t, On = !0, o = tt, Aa(t.type) ? (Kc = o, tt = Sn(
          i.firstChild
        )) : tt = o), bt(
          e,
          t,
          t.pendingProps.children,
          n
        ), xs(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ie && ((o = i = tt) && (i = x0(
          i,
          t.type,
          t.pendingProps,
          On
        ), i !== null ? (t.stateNode = i, Dt = t, tt = Sn(
          i.firstChild
        ), On = !1, o = !0) : o = !1), o || Ja(t)), gr(t), o = t.type, f = t.pendingProps, _ = e !== null ? e.memoizedProps : null, i = f.children, Fc(o, f) ? i = null : _ !== null && Fc(o, _) && (t.flags |= 32), t.memoizedState !== null && (o = Yu(
          e,
          t,
          P1,
          null,
          null,
          n
        ), ol._currentValue = o), xs(e, t), bt(e, t, i, n), t.child;
      case 6:
        return e === null && Ie && ((e = n = tt) && (n = E0(
          n,
          t.pendingProps,
          On
        ), n !== null ? (t.stateNode = n, Dt = t, tt = null, e = !0) : e = !1), e || Ja(t)), null;
      case 13:
        return Rp(e, t, n);
      case 4:
        return Le(
          t,
          t.stateNode.containerInfo
        ), i = t.pendingProps, e === null ? t.child = Vr(
          t,
          null,
          i,
          n
        ) : bt(
          e,
          t,
          i,
          n
        ), t.child;
      case 11:
        return Cp(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return bt(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return bt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return bt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return i = t.pendingProps, ca(t, t.type, i.value), bt(
          e,
          t,
          i.children,
          n
        ), t.child;
      case 9:
        return o = t.type._context, i = t.pendingProps.children, $a(t), o = Ct(o), i = i(o), t.flags |= 1, bt(e, t, i, n), t.child;
      case 14:
        return Ap(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return Tp(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return jp(e, t, n);
      case 31:
        return i = t.pendingProps, n = t.mode, i = {
          mode: i.mode,
          children: i.children
        }, e === null ? (n = Es(
          i,
          n
        ), n.ref = t.ref, t.child = n, n.return = t, t = n) : (n = qn(e.child, i), n.ref = t.ref, t.child = n, n.return = t, t = n), t;
      case 22:
        return wp(e, t, n);
      case 24:
        return $a(t), i = Ct(ht), e === null ? (o = Bu(), o === null && (o = Ke, f = ju(), o.pooledCache = f, f.refCount++, f !== null && (o.pooledCacheLanes |= n), o = f), t.memoizedState = {
          parent: i,
          cache: o
        }, Uu(t), ca(t, ht, o)) : ((e.lanes & n) !== 0 && (Hu(e, t), Pi(t, null, null, n), Hi()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = { parent: i, cache: i }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), ca(t, ht, i)) : (i = f.cache, ca(t, ht, i), i !== o.cache && ku(
          t,
          [ht],
          n,
          !0
        ))), bt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function Zn(e) {
    e.flags |= 4;
  }
  function Bp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Vm(t)) {
      if (t = hn.current, t !== null && ((ze & 4194048) === ze ? Dn !== null : (ze & 62914560) !== ze && (ze & 536870912) === 0 || t !== Dn))
        throw zi = zu, bd;
      e.flags |= 8192;
    }
  }
  function Cs(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? ph() : 536870912, e.lanes |= t, Qr |= t);
  }
  function Xi(e, t) {
    if (!Ie)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var i = null; n !== null; )
            n.alternate !== null && (i = n), n = n.sibling;
          i === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : i.sibling = null;
      }
  }
  function $e(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, i = 0;
    if (t)
      for (var o = e.child; o !== null; )
        n |= o.lanes | o.childLanes, i |= o.subtreeFlags & 65011712, i |= o.flags & 65011712, o.return = e, o = o.sibling;
    else
      for (o = e.child; o !== null; )
        n |= o.lanes | o.childLanes, i |= o.subtreeFlags, i |= o.flags, o.return = e, o = o.sibling;
    return e.subtreeFlags |= i, e.childLanes = n, t;
  }
  function Z1(e, t, n) {
    var i = t.pendingProps;
    switch (Ou(t), t.tag) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return $e(t), null;
      case 1:
        return $e(t), null;
      case 3:
        return n = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Yn(ht), Gt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Di(t) ? Zn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, pd())), $e(t), null;
      case 26:
        return n = t.memoizedState, e === null ? (Zn(t), n !== null ? ($e(t), Bp(t, n)) : ($e(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (Zn(t), $e(t), Bp(t, n)) : ($e(t), t.flags &= -16777217) : (e.memoizedProps !== i && Zn(t), $e(t), t.flags &= -16777217), null;
      case 27:
        vn(t), n = ve.current;
        var o = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== i && Zn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(s(166));
            return $e(t), null;
          }
          e = ae.current, Di(t) ? hd(t) : (e = Bm(o, i, n), t.stateNode = e, Zn(t));
        }
        return $e(t), null;
      case 5:
        if (vn(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && Zn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(s(166));
            return $e(t), null;
          }
          if (e = ae.current, Di(t))
            hd(t);
          else {
            switch (o = zs(
              ve.current
            ), e) {
              case 1:
                e = o.createElementNS(
                  "http://www.w3.org/2000/svg",
                  n
                );
                break;
              case 2:
                e = o.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  n
                );
                break;
              default:
                switch (n) {
                  case "svg":
                    e = o.createElementNS(
                      "http://www.w3.org/2000/svg",
                      n
                    );
                    break;
                  case "math":
                    e = o.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      n
                    );
                    break;
                  case "script":
                    e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild);
                    break;
                  case "select":
                    e = typeof i.is == "string" ? o.createElement("select", { is: i.is }) : o.createElement("select"), i.multiple ? e.multiple = !0 : i.size && (e.size = i.size);
                    break;
                  default:
                    e = typeof i.is == "string" ? o.createElement(n, { is: i.is }) : o.createElement(n);
                }
            }
            e[Et] = t, e[jt] = i;
            e: for (o = t.child; o !== null; ) {
              if (o.tag === 5 || o.tag === 6)
                e.appendChild(o.stateNode);
              else if (o.tag !== 4 && o.tag !== 27 && o.child !== null) {
                o.child.return = o, o = o.child;
                continue;
              }
              if (o === t) break e;
              for (; o.sibling === null; ) {
                if (o.return === null || o.return === t)
                  break e;
                o = o.return;
              }
              o.sibling.return = o.return, o = o.sibling;
            }
            t.stateNode = e;
            e: switch (_t(e, n, i), n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!i.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Zn(t);
          }
        }
        return $e(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== i && Zn(t);
        else {
          if (typeof i != "string" && t.stateNode === null)
            throw Error(s(166));
          if (e = ve.current, Di(t)) {
            if (e = t.stateNode, n = t.memoizedProps, i = null, o = Dt, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  i = o.memoizedProps;
              }
            e[Et] = t, e = !!(e.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || Om(e.nodeValue, n)), e || Ja(t);
          } else
            e = zs(e).createTextNode(
              i
            ), e[Et] = t, t.stateNode = e;
        }
        return $e(t), null;
      case 13:
        if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = Di(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(s(317));
              o[Et] = t;
            } else
              Mi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            $e(t), o = !1;
          } else
            o = pd(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return t.flags & 256 ? (Xn(t), t) : (Xn(t), null);
        }
        if (Xn(t), (t.flags & 128) !== 0)
          return t.lanes = n, t;
        if (n = i !== null, e = e !== null && e.memoizedState !== null, n) {
          i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool);
          var f = null;
          i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048);
        }
        return n !== e && n && (t.child.flags |= 8192), Cs(t, t.updateQueue), $e(t), null;
      case 4:
        return Gt(), e === null && qc(t.stateNode.containerInfo), $e(t), null;
      case 10:
        return Yn(t.type), $e(t), null;
      case 19:
        if (te(dt), o = t.memoizedState, o === null) return $e(t), null;
        if (i = (t.flags & 128) !== 0, f = o.rendering, f === null)
          if (i) Xi(o, !1);
          else {
            if (nt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (f = bs(e), f !== null) {
                  for (t.flags |= 128, Xi(o, !1), e = f.updateQueue, t.updateQueue = e, Cs(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    cd(n, e), n = n.sibling;
                  return re(
                    dt,
                    dt.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null && Nt() > ws && (t.flags |= 128, i = !0, Xi(o, !1), t.lanes = 4194304);
          }
        else {
          if (!i)
            if (e = bs(f), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Cs(t, e), Xi(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !Ie)
                return $e(t), null;
            } else
              2 * Nt() - o.renderingStartTime > ws && n !== 536870912 && (t.flags |= 128, i = !0, Xi(o, !1), t.lanes = 4194304);
          o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Nt(), t.sibling = null, e = dt.current, re(dt, i ? e & 1 | 2 : e & 1), t) : ($e(t), null);
      case 22:
      case 23:
        return Xn(t), Gu(), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), n = t.updateQueue, n !== null && Cs(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== n && (t.flags |= 2048), e !== null && te(er), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Yn(ht), $e(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function K1(e, t) {
    switch (Ou(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Yn(ht), Gt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return vn(t), null;
      case 13:
        if (Xn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          Mi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return te(dt), null;
      case 4:
        return Gt(), null;
      case 10:
        return Yn(t.type), null;
      case 22:
      case 23:
        return Xn(t), Gu(), e !== null && te(er), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Yn(ht), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function zp(e, t) {
    switch (Ou(t), t.tag) {
      case 3:
        Yn(ht), Gt();
        break;
      case 26:
      case 27:
      case 5:
        vn(t);
        break;
      case 4:
        Gt();
        break;
      case 13:
        Xn(t);
        break;
      case 19:
        te(dt);
        break;
      case 10:
        Yn(t.type);
        break;
      case 22:
      case 23:
        Xn(t), Gu(), e !== null && te(er);
        break;
      case 24:
        Yn(ht);
    }
  }
  function Qi(e, t) {
    try {
      var n = t.updateQueue, i = n !== null ? n.lastEffect : null;
      if (i !== null) {
        var o = i.next;
        n = o;
        do {
          if ((n.tag & e) === e) {
            i = void 0;
            var f = n.create, _ = n.inst;
            i = f(), _.destroy = i;
          }
          n = n.next;
        } while (n !== o);
      }
    } catch (w) {
      Ze(t, t.return, w);
    }
  }
  function va(e, t, n) {
    try {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var f = o.next;
        i = f;
        do {
          if ((i.tag & e) === e) {
            var _ = i.inst, w = _.destroy;
            if (w !== void 0) {
              _.destroy = void 0, o = t;
              var R = n, q = w;
              try {
                q();
              } catch (Q) {
                Ze(
                  o,
                  R,
                  Q
                );
              }
            }
          }
          i = i.next;
        } while (i !== f);
      }
    } catch (Q) {
      Ze(t, t.return, Q);
    }
  }
  function Up(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Ad(t, n);
      } catch (i) {
        Ze(e, e.return, i);
      }
    }
  }
  function Hp(e, t, n) {
    n.props = nr(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (i) {
      Ze(e, t, i);
    }
  }
  function Zi(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var i = e.stateNode;
            break;
          case 30:
            i = e.stateNode;
            break;
          default:
            i = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(i) : n.current = i;
      }
    } catch (o) {
      Ze(e, t, o);
    }
  }
  function Mn(e, t) {
    var n = e.ref, i = e.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (o) {
          Ze(e, t, o);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          Ze(e, t, o);
        }
      else n.current = null;
  }
  function Pp(e) {
    var t = e.type, n = e.memoizedProps, i = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && i.focus();
          break e;
        case "img":
          n.src ? i.src = n.src : n.srcSet && (i.srcset = n.srcSet);
      }
    } catch (o) {
      Ze(e, e.return, o);
    }
  }
  function vc(e, t, n) {
    try {
      var i = e.stateNode;
      v0(i, e.type, n, t), i[jt] = t;
    } catch (o) {
      Ze(e, e.return, o);
    }
  }
  function qp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Aa(e.type) || e.tag === 4;
  }
  function yc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || qp(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Aa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function bc(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Bs));
    else if (i !== 4 && (i === 27 && Aa(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (bc(e, t, n), e = e.sibling; e !== null; )
        bc(e, t, n), e = e.sibling;
  }
  function As(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (i === 27 && Aa(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (As(e, t, n), e = e.sibling; e !== null; )
        As(e, t, n), e = e.sibling;
  }
  function Ip(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var i = e.type, o = t.attributes; o.length; )
        t.removeAttributeNode(o[0]);
      _t(t, i, n), t[Et] = e, t[jt] = n;
    } catch (f) {
      Ze(e, e.return, f);
    }
  }
  var Kn = !1, lt = !1, Sc = !1, Gp = typeof WeakSet == "function" ? WeakSet : Set, vt = null;
  function J1(e, t) {
    if (e = e.containerInfo, Vc = Gs, e = ed(e), yu(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var i = n.getSelection && n.getSelection();
          if (i && i.rangeCount !== 0) {
            n = i.anchorNode;
            var o = i.anchorOffset, f = i.focusNode;
            i = i.focusOffset;
            try {
              n.nodeType, f.nodeType;
            } catch {
              n = null;
              break e;
            }
            var _ = 0, w = -1, R = -1, q = 0, Q = 0, W = e, I = null;
            t: for (; ; ) {
              for (var V; W !== n || o !== 0 && W.nodeType !== 3 || (w = _ + o), W !== f || i !== 0 && W.nodeType !== 3 || (R = _ + i), W.nodeType === 3 && (_ += W.nodeValue.length), (V = W.firstChild) !== null; )
                I = W, W = V;
              for (; ; ) {
                if (W === e) break t;
                if (I === n && ++q === o && (w = _), I === f && ++Q === i && (R = _), (V = W.nextSibling) !== null) break;
                W = I, I = W.parentNode;
              }
              W = V;
            }
            n = w === -1 || R === -1 ? null : { start: w, end: R };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Yc = { focusedElem: e, selectionRange: n }, Gs = !1, vt = t; vt !== null; )
      if (t = vt, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, vt = e;
      else
        for (; vt !== null; ) {
          switch (t = vt, f = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                e = void 0, n = t, o = f.memoizedProps, f = f.memoizedState, i = n.stateNode;
                try {
                  var Se = nr(
                    n.type,
                    o,
                    n.elementType === n.type
                  );
                  e = i.getSnapshotBeforeUpdate(
                    Se,
                    f
                  ), i.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ye) {
                  Ze(
                    n,
                    n.return,
                    ye
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  Qc(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Qc(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, vt = e;
            break;
          }
          vt = t.return;
        }
  }
  function Vp(e, t, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        ya(e, n), i & 4 && Qi(5, n);
        break;
      case 1:
        if (ya(e, n), i & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (_) {
              Ze(n, n.return, _);
            }
          else {
            var o = nr(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                o,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (_) {
              Ze(
                n,
                n.return,
                _
              );
            }
          }
        i & 64 && Up(n), i & 512 && Zi(n, n.return);
        break;
      case 3:
        if (ya(e, n), i & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            Ad(e, t);
          } catch (_) {
            Ze(n, n.return, _);
          }
        }
        break;
      case 27:
        t === null && i & 4 && Ip(n);
      case 26:
      case 5:
        ya(e, n), t === null && i & 4 && Pp(n), i & 512 && Zi(n, n.return);
        break;
      case 12:
        ya(e, n);
        break;
      case 13:
        ya(e, n), i & 4 && Xp(e, n), i & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = l0.bind(
          null,
          n
        ), C0(e, n))));
        break;
      case 22:
        if (i = n.memoizedState !== null || Kn, !i) {
          t = t !== null && t.memoizedState !== null || lt, o = Kn;
          var f = lt;
          Kn = i, (lt = t) && !f ? ba(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : ya(e, n), Kn = o, lt = f;
        }
        break;
      case 30:
        break;
      default:
        ya(e, n);
    }
  }
  function Yp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Yp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && $o(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Je = null, zt = !1;
  function Jn(e, t, n) {
    for (n = n.child; n !== null; )
      Fp(e, t, n), n = n.sibling;
  }
  function Fp(e, t, n) {
    if (se && typeof se.onCommitFiberUnmount == "function")
      try {
        se.onCommitFiberUnmount(Z, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        lt || Mn(n, t), Jn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        lt || Mn(n, t);
        var i = Je, o = zt;
        Aa(n.type) && (Je = n.stateNode, zt = !1), Jn(
          e,
          t,
          n
        ), rl(n.stateNode), Je = i, zt = o;
        break;
      case 5:
        lt || Mn(n, t);
      case 6:
        if (i = Je, o = zt, Je = null, Jn(
          e,
          t,
          n
        ), Je = i, zt = o, Je !== null)
          if (zt)
            try {
              (Je.nodeType === 9 ? Je.body : Je.nodeName === "HTML" ? Je.ownerDocument.body : Je).removeChild(n.stateNode);
            } catch (f) {
              Ze(
                n,
                t,
                f
              );
            }
          else
            try {
              Je.removeChild(n.stateNode);
            } catch (f) {
              Ze(
                n,
                t,
                f
              );
            }
        break;
      case 18:
        Je !== null && (zt ? (e = Je, jm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), hl(e)) : jm(Je, n.stateNode));
        break;
      case 4:
        i = Je, o = zt, Je = n.stateNode.containerInfo, zt = !0, Jn(
          e,
          t,
          n
        ), Je = i, zt = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        lt || va(2, n, t), lt || va(4, n, t), Jn(
          e,
          t,
          n
        );
        break;
      case 1:
        lt || (Mn(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function" && Hp(
          n,
          t,
          i
        )), Jn(
          e,
          t,
          n
        );
        break;
      case 21:
        Jn(
          e,
          t,
          n
        );
        break;
      case 22:
        lt = (i = lt) || n.memoizedState !== null, Jn(
          e,
          t,
          n
        ), lt = i;
        break;
      default:
        Jn(
          e,
          t,
          n
        );
    }
  }
  function Xp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        hl(e);
      } catch (n) {
        Ze(t, t.return, n);
      }
  }
  function W1(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Gp()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Gp()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function _c(e, t) {
    var n = W1(e);
    t.forEach(function(i) {
      var o = s0.bind(null, e, i);
      n.has(i) || (n.add(i), i.then(o, o));
    });
  }
  function Qt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var o = n[i], f = e, _ = t, w = _;
        e: for (; w !== null; ) {
          switch (w.tag) {
            case 27:
              if (Aa(w.type)) {
                Je = w.stateNode, zt = !1;
                break e;
              }
              break;
            case 5:
              Je = w.stateNode, zt = !1;
              break e;
            case 3:
            case 4:
              Je = w.stateNode.containerInfo, zt = !0;
              break e;
          }
          w = w.return;
        }
        if (Je === null) throw Error(s(160));
        Fp(f, _, o), Je = null, zt = !1, f = o.alternate, f !== null && (f.return = null), o.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Qp(t, e), t = t.sibling;
  }
  var bn = null;
  function Qp(e, t) {
    var n = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Qt(t, e), Zt(e), i & 4 && (va(3, e, e.return), Qi(3, e), va(5, e, e.return));
        break;
      case 1:
        Qt(t, e), Zt(e), i & 512 && (lt || n === null || Mn(n, n.return)), i & 64 && Kn && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? i : n.concat(i))));
        break;
      case 26:
        var o = bn;
        if (Qt(t, e), Zt(e), i & 512 && (lt || n === null || Mn(n, n.return)), i & 4) {
          var f = n !== null ? n.memoizedState : null;
          if (i = e.memoizedState, n === null)
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  i = e.type, n = e.memoizedProps, o = o.ownerDocument || o;
                  t: switch (i) {
                    case "title":
                      f = o.getElementsByTagName("title")[0], (!f || f[bi] || f[Et] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = o.createElement(i), o.head.insertBefore(
                        f,
                        o.querySelector("head > title")
                      )), _t(f, i, n), f[Et] = e, mt(f), i = f;
                      break e;
                    case "link":
                      var _ = Im(
                        "link",
                        "href",
                        o
                      ).get(i + (n.href || ""));
                      if (_) {
                        for (var w = 0; w < _.length; w++)
                          if (f = _[w], f.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && f.getAttribute("rel") === (n.rel == null ? null : n.rel) && f.getAttribute("title") === (n.title == null ? null : n.title) && f.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            _.splice(w, 1);
                            break t;
                          }
                      }
                      f = o.createElement(i), _t(f, i, n), o.head.appendChild(f);
                      break;
                    case "meta":
                      if (_ = Im(
                        "meta",
                        "content",
                        o
                      ).get(i + (n.content || ""))) {
                        for (w = 0; w < _.length; w++)
                          if (f = _[w], f.getAttribute("content") === (n.content == null ? null : "" + n.content) && f.getAttribute("name") === (n.name == null ? null : n.name) && f.getAttribute("property") === (n.property == null ? null : n.property) && f.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && f.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            _.splice(w, 1);
                            break t;
                          }
                      }
                      f = o.createElement(i), _t(f, i, n), o.head.appendChild(f);
                      break;
                    default:
                      throw Error(s(468, i));
                  }
                  f[Et] = e, mt(f), i = f;
                }
                e.stateNode = i;
              } else
                Gm(
                  o,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = qm(
                o,
                i,
                e.memoizedProps
              );
          else
            f !== i ? (f === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : f.count--, i === null ? Gm(
              o,
              e.type,
              e.stateNode
            ) : qm(
              o,
              i,
              e.memoizedProps
            )) : i === null && e.stateNode !== null && vc(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Qt(t, e), Zt(e), i & 512 && (lt || n === null || Mn(n, n.return)), n !== null && i & 4 && vc(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Qt(t, e), Zt(e), i & 512 && (lt || n === null || Mn(n, n.return)), e.flags & 32) {
          o = e.stateNode;
          try {
            Tr(o, "");
          } catch (V) {
            Ze(e, e.return, V);
          }
        }
        i & 4 && e.stateNode != null && (o = e.memoizedProps, vc(
          e,
          o,
          n !== null ? n.memoizedProps : o
        )), i & 1024 && (Sc = !0);
        break;
      case 6:
        if (Qt(t, e), Zt(e), i & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          i = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = i;
          } catch (V) {
            Ze(e, e.return, V);
          }
        }
        break;
      case 3:
        if (Ps = null, o = bn, bn = Us(t.containerInfo), Qt(t, e), bn = o, Zt(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            hl(t.containerInfo);
          } catch (V) {
            Ze(e, e.return, V);
          }
        Sc && (Sc = !1, Zp(e));
        break;
      case 4:
        i = bn, bn = Us(
          e.stateNode.containerInfo
        ), Qt(t, e), Zt(e), bn = i;
        break;
      case 12:
        Qt(t, e), Zt(e);
        break;
      case 13:
        Qt(t, e), Zt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (wc = Nt()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, _c(e, i)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var R = n !== null && n.memoizedState !== null, q = Kn, Q = lt;
        if (Kn = q || o, lt = Q || R, Qt(t, e), lt = Q, Kn = q, Zt(e), i & 8192)
          e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (n === null || R || Kn || lt || ar(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                R = n = t;
                try {
                  if (f = R.stateNode, o)
                    _ = f.style, typeof _.setProperty == "function" ? _.setProperty("display", "none", "important") : _.display = "none";
                  else {
                    w = R.stateNode;
                    var W = R.memoizedProps.style, I = W != null && W.hasOwnProperty("display") ? W.display : null;
                    w.style.display = I == null || typeof I == "boolean" ? "" : ("" + I).trim();
                  }
                } catch (V) {
                  Ze(R, R.return, V);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                R = t;
                try {
                  R.stateNode.nodeValue = o ? "" : R.memoizedProps;
                } catch (V) {
                  Ze(R, R.return, V);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), t = t.return;
            }
            n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
          }
        i & 4 && (i = e.updateQueue, i !== null && (n = i.retryQueue, n !== null && (i.retryQueue = null, _c(e, n))));
        break;
      case 19:
        Qt(t, e), Zt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, _c(e, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Qt(t, e), Zt(e);
    }
  }
  function Zt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, i = e.return; i !== null; ) {
          if (qp(i)) {
            n = i;
            break;
          }
          i = i.return;
        }
        if (n == null) throw Error(s(160));
        switch (n.tag) {
          case 27:
            var o = n.stateNode, f = yc(e);
            As(e, f, o);
            break;
          case 5:
            var _ = n.stateNode;
            n.flags & 32 && (Tr(_, ""), n.flags &= -33);
            var w = yc(e);
            As(e, w, _);
            break;
          case 3:
          case 4:
            var R = n.stateNode.containerInfo, q = yc(e);
            bc(
              e,
              q,
              R
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (Q) {
        Ze(e, e.return, Q);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Zp(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Zp(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function ya(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Vp(e, t.alternate, t), t = t.sibling;
  }
  function ar(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          va(4, t, t.return), ar(t);
          break;
        case 1:
          Mn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Hp(
            t,
            t.return,
            n
          ), ar(t);
          break;
        case 27:
          rl(t.stateNode);
        case 26:
        case 5:
          Mn(t, t.return), ar(t);
          break;
        case 22:
          t.memoizedState === null && ar(t);
          break;
        case 30:
          ar(t);
          break;
        default:
          ar(t);
      }
      e = e.sibling;
    }
  }
  function ba(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var i = t.alternate, o = e, f = t, _ = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ba(
            o,
            f,
            n
          ), Qi(4, f);
          break;
        case 1:
          if (ba(
            o,
            f,
            n
          ), i = f, o = i.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (q) {
              Ze(i, i.return, q);
            }
          if (i = f, o = i.updateQueue, o !== null) {
            var w = i.stateNode;
            try {
              var R = o.shared.hiddenCallbacks;
              if (R !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < R.length; o++)
                  Cd(R[o], w);
            } catch (q) {
              Ze(i, i.return, q);
            }
          }
          n && _ & 64 && Up(f), Zi(f, f.return);
          break;
        case 27:
          Ip(f);
        case 26:
        case 5:
          ba(
            o,
            f,
            n
          ), n && i === null && _ & 4 && Pp(f), Zi(f, f.return);
          break;
        case 12:
          ba(
            o,
            f,
            n
          );
          break;
        case 13:
          ba(
            o,
            f,
            n
          ), n && _ & 4 && Xp(o, f);
          break;
        case 22:
          f.memoizedState === null && ba(
            o,
            f,
            n
          ), Zi(f, f.return);
          break;
        case 30:
          break;
        default:
          ba(
            o,
            f,
            n
          );
      }
      t = t.sibling;
    }
  }
  function xc(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && ji(n));
  }
  function Ec(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ji(e));
  }
  function Rn(e, t, n, i) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Kp(
          e,
          t,
          n,
          i
        ), t = t.sibling;
  }
  function Kp(e, t, n, i) {
    var o = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Rn(
          e,
          t,
          n,
          i
        ), o & 2048 && Qi(9, t);
        break;
      case 1:
        Rn(
          e,
          t,
          n,
          i
        );
        break;
      case 3:
        Rn(
          e,
          t,
          n,
          i
        ), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ji(e)));
        break;
      case 12:
        if (o & 2048) {
          Rn(
            e,
            t,
            n,
            i
          ), e = t.stateNode;
          try {
            var f = t.memoizedProps, _ = f.id, w = f.onPostCommit;
            typeof w == "function" && w(
              _,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (R) {
            Ze(t, t.return, R);
          }
        } else
          Rn(
            e,
            t,
            n,
            i
          );
        break;
      case 13:
        Rn(
          e,
          t,
          n,
          i
        );
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, _ = t.alternate, t.memoizedState !== null ? f._visibility & 2 ? Rn(
          e,
          t,
          n,
          i
        ) : Ki(e, t) : f._visibility & 2 ? Rn(
          e,
          t,
          n,
          i
        ) : (f._visibility |= 2, Yr(
          e,
          t,
          n,
          i,
          (t.subtreeFlags & 10256) !== 0
        )), o & 2048 && xc(_, t);
        break;
      case 24:
        Rn(
          e,
          t,
          n,
          i
        ), o & 2048 && Ec(t.alternate, t);
        break;
      default:
        Rn(
          e,
          t,
          n,
          i
        );
    }
  }
  function Yr(e, t, n, i, o) {
    for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var f = e, _ = t, w = n, R = i, q = _.flags;
      switch (_.tag) {
        case 0:
        case 11:
        case 15:
          Yr(
            f,
            _,
            w,
            R,
            o
          ), Qi(8, _);
          break;
        case 23:
          break;
        case 22:
          var Q = _.stateNode;
          _.memoizedState !== null ? Q._visibility & 2 ? Yr(
            f,
            _,
            w,
            R,
            o
          ) : Ki(
            f,
            _
          ) : (Q._visibility |= 2, Yr(
            f,
            _,
            w,
            R,
            o
          )), o && q & 2048 && xc(
            _.alternate,
            _
          );
          break;
        case 24:
          Yr(
            f,
            _,
            w,
            R,
            o
          ), o && q & 2048 && Ec(_.alternate, _);
          break;
        default:
          Yr(
            f,
            _,
            w,
            R,
            o
          );
      }
      t = t.sibling;
    }
  }
  function Ki(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, i = t, o = i.flags;
        switch (i.tag) {
          case 22:
            Ki(n, i), o & 2048 && xc(
              i.alternate,
              i
            );
            break;
          case 24:
            Ki(n, i), o & 2048 && Ec(i.alternate, i);
            break;
          default:
            Ki(n, i);
        }
        t = t.sibling;
      }
  }
  var Ji = 8192;
  function Fr(e) {
    if (e.subtreeFlags & Ji)
      for (e = e.child; e !== null; )
        Jp(e), e = e.sibling;
  }
  function Jp(e) {
    switch (e.tag) {
      case 26:
        Fr(e), e.flags & Ji && e.memoizedState !== null && z0(
          bn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Fr(e);
        break;
      case 3:
      case 4:
        var t = bn;
        bn = Us(e.stateNode.containerInfo), Fr(e), bn = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Ji, Ji = 16777216, Fr(e), Ji = t) : Fr(e));
        break;
      default:
        Fr(e);
    }
  }
  function Wp(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Wi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          vt = i, em(
            i,
            e
          );
        }
      Wp(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        $p(e), e = e.sibling;
  }
  function $p(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Wi(e), e.flags & 2048 && va(9, e, e.return);
        break;
      case 3:
        Wi(e);
        break;
      case 12:
        Wi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ts(e)) : Wi(e);
        break;
      default:
        Wi(e);
    }
  }
  function Ts(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          vt = i, em(
            i,
            e
          );
        }
      Wp(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          va(8, t, t.return), Ts(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, Ts(t));
          break;
        default:
          Ts(t);
      }
      e = e.sibling;
    }
  }
  function em(e, t) {
    for (; vt !== null; ) {
      var n = vt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          va(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          ji(n.memoizedState.cache);
      }
      if (i = n.child, i !== null) i.return = n, vt = i;
      else
        e: for (n = e; vt !== null; ) {
          i = vt;
          var o = i.sibling, f = i.return;
          if (Yp(i), i === n) {
            vt = null;
            break e;
          }
          if (o !== null) {
            o.return = f, vt = o;
            break e;
          }
          vt = f;
        }
    }
  }
  var $1 = {
    getCacheForType: function(e) {
      var t = Ct(ht), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    }
  }, e0 = typeof WeakMap == "function" ? WeakMap : Map, Ve = 0, Ke = null, De = null, ze = 0, Ye = 0, Kt = null, Sa = !1, Xr = !1, Cc = !1, Wn = 0, nt = 0, _a = 0, rr = 0, Ac = 0, dn = 0, Qr = 0, $i = null, Ut = null, Tc = !1, wc = 0, ws = 1 / 0, Ns = null, xa = null, St = 0, Ea = null, Zr = null, Kr = 0, Nc = 0, Oc = null, tm = null, el = 0, Dc = null;
  function Jt() {
    if ((Ve & 2) !== 0 && ze !== 0)
      return ze & -ze;
    if (U.T !== null) {
      var e = zr;
      return e !== 0 ? e : zc();
    }
    return vh();
  }
  function nm() {
    dn === 0 && (dn = (ze & 536870912) === 0 || Ie ? yr() : 536870912);
    var e = hn.current;
    return e !== null && (e.flags |= 32), dn;
  }
  function Wt(e, t, n) {
    (e === Ke && (Ye === 2 || Ye === 9) || e.cancelPendingCommit !== null) && (Jr(e, 0), Ca(
      e,
      ze,
      dn,
      !1
    )), yi(e, n), ((Ve & 2) === 0 || e !== Ke) && (e === Ke && ((Ve & 2) === 0 && (rr |= n), nt === 4 && Ca(
      e,
      ze,
      dn,
      !1
    )), kn(e));
  }
  function am(e, t, n) {
    if ((Ve & 6) !== 0) throw Error(s(327));
    var i = !n && (t & 124) === 0 && (t & e.expiredLanes) === 0 || kt(e, t), o = i ? a0(e, t) : kc(e, t, !0), f = i;
    do {
      if (o === 0) {
        Xr && !i && Ca(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, f && !t0(n)) {
          o = kc(e, t, !1), f = !1;
          continue;
        }
        if (o === 2) {
          if (f = t, e.errorRecoveryDisabledLanes & f)
            var _ = 0;
          else
            _ = e.pendingLanes & -536870913, _ = _ !== 0 ? _ : _ & 536870912 ? 536870912 : 0;
          if (_ !== 0) {
            t = _;
            e: {
              var w = e;
              o = $i;
              var R = w.current.memoizedState.isDehydrated;
              if (R && (Jr(w, _).flags |= 256), _ = kc(
                w,
                _,
                !1
              ), _ !== 2) {
                if (Cc && !R) {
                  w.errorRecoveryDisabledLanes |= f, rr |= f, o = 4;
                  break e;
                }
                f = Ut, Ut = o, f !== null && (Ut === null ? Ut = f : Ut.push.apply(
                  Ut,
                  f
                ));
              }
              o = _;
            }
            if (f = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          Jr(e, 0), Ca(e, t, 0, !0);
          break;
        }
        e: {
          switch (i = e, f = o, f) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ca(
                i,
                t,
                dn,
                !Sa
              );
              break e;
            case 2:
              Ut = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && (o = wc + 300 - Nt(), 10 < o)) {
            if (Ca(
              i,
              t,
              dn,
              !Sa
            ), Ot(i, 0, !0) !== 0) break e;
            i.timeoutHandle = Rm(
              rm.bind(
                null,
                i,
                n,
                Ut,
                Ns,
                Tc,
                t,
                dn,
                rr,
                Qr,
                Sa,
                f,
                2,
                -0,
                0
              ),
              o
            );
            break e;
          }
          rm(
            i,
            n,
            Ut,
            Ns,
            Tc,
            t,
            dn,
            rr,
            Qr,
            Sa,
            f,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    kn(e);
  }
  function rm(e, t, n, i, o, f, _, w, R, q, Q, W, I, V) {
    if (e.timeoutHandle = -1, W = t.subtreeFlags, (W & 8192 || (W & 16785408) === 16785408) && (sl = { stylesheets: null, count: 0, unsuspend: B0 }, Jp(t), W = U0(), W !== null)) {
      e.cancelPendingCommit = W(
        fm.bind(
          null,
          e,
          t,
          f,
          n,
          i,
          o,
          _,
          w,
          R,
          Q,
          1,
          I,
          V
        )
      ), Ca(e, f, _, !q);
      return;
    }
    fm(
      e,
      t,
      f,
      n,
      i,
      o,
      _,
      w,
      R
    );
  }
  function t0(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var i = 0; i < n.length; i++) {
          var o = n[i], f = o.getSnapshot;
          o = o.value;
          try {
            if (!Ft(f(), o)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function Ca(e, t, n, i) {
    t &= ~Ac, t &= ~rr, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var f = 31 - ge(o), _ = 1 << f;
      i[f] = -1, o &= ~_;
    }
    n !== 0 && mh(e, n, t);
  }
  function Os() {
    return (Ve & 6) === 0 ? (tl(0), !1) : !0;
  }
  function Mc() {
    if (De !== null) {
      if (Ye === 0)
        var e = De.return;
      else
        e = De, Vn = Wa = null, Qu(e), Gr = null, Yi = 0, e = De;
      for (; e !== null; )
        zp(e.alternate, e), e = e.return;
      De = null;
    }
  }
  function Jr(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, b0(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Mc(), Ke = e, De = n = qn(e.current, null), ze = t, Ye = 0, Kt = null, Sa = !1, Xr = kt(e, t), Cc = !1, Qr = dn = Ac = rr = _a = nt = 0, Ut = $i = null, Tc = !1, (t & 8) !== 0 && (t |= t & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var o = 31 - ge(i), f = 1 << o;
        t |= e[o], i &= ~f;
      }
    return Wn = t, Jl(), n;
  }
  function im(e, t) {
    we = null, U.H = gs, t === Bi || t === ls ? (t = xd(), Ye = 3) : t === bd ? (t = xd(), Ye = 4) : Ye = t === Ep ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Kt = t, De === null && (nt = 1, _s(
      e,
      on(t, e.current)
    ));
  }
  function lm() {
    var e = U.H;
    return U.H = gs, e === null ? gs : e;
  }
  function sm() {
    var e = U.A;
    return U.A = $1, e;
  }
  function Rc() {
    nt = 4, Sa || (ze & 4194048) !== ze && hn.current !== null || (Xr = !0), (_a & 134217727) === 0 && (rr & 134217727) === 0 || Ke === null || Ca(
      Ke,
      ze,
      dn,
      !1
    );
  }
  function kc(e, t, n) {
    var i = Ve;
    Ve |= 2;
    var o = lm(), f = sm();
    (Ke !== e || ze !== t) && (Ns = null, Jr(e, t)), t = !1;
    var _ = nt;
    e: do
      try {
        if (Ye !== 0 && De !== null) {
          var w = De, R = Kt;
          switch (Ye) {
            case 8:
              Mc(), _ = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              hn.current === null && (t = !0);
              var q = Ye;
              if (Ye = 0, Kt = null, Wr(e, w, R, q), n && Xr) {
                _ = 0;
                break e;
              }
              break;
            default:
              q = Ye, Ye = 0, Kt = null, Wr(e, w, R, q);
          }
        }
        n0(), _ = nt;
        break;
      } catch (Q) {
        im(e, Q);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Vn = Wa = null, Ve = i, U.H = o, U.A = f, De === null && (Ke = null, ze = 0, Jl()), _;
  }
  function n0() {
    for (; De !== null; ) om(De);
  }
  function a0(e, t) {
    var n = Ve;
    Ve |= 2;
    var i = lm(), o = sm();
    Ke !== e || ze !== t ? (Ns = null, ws = Nt() + 500, Jr(e, t)) : Xr = kt(
      e,
      t
    );
    e: do
      try {
        if (Ye !== 0 && De !== null) {
          t = De;
          var f = Kt;
          t: switch (Ye) {
            case 1:
              Ye = 0, Kt = null, Wr(e, t, f, 1);
              break;
            case 2:
            case 9:
              if (Sd(f)) {
                Ye = 0, Kt = null, um(t);
                break;
              }
              t = function() {
                Ye !== 2 && Ye !== 9 || Ke !== e || (Ye = 7), kn(e);
              }, f.then(t, t);
              break e;
            case 3:
              Ye = 7;
              break e;
            case 4:
              Ye = 5;
              break e;
            case 7:
              Sd(f) ? (Ye = 0, Kt = null, um(t)) : (Ye = 0, Kt = null, Wr(e, t, f, 7));
              break;
            case 5:
              var _ = null;
              switch (De.tag) {
                case 26:
                  _ = De.memoizedState;
                case 5:
                case 27:
                  var w = De;
                  if (!_ || Vm(_)) {
                    Ye = 0, Kt = null;
                    var R = w.sibling;
                    if (R !== null) De = R;
                    else {
                      var q = w.return;
                      q !== null ? (De = q, Ds(q)) : De = null;
                    }
                    break t;
                  }
              }
              Ye = 0, Kt = null, Wr(e, t, f, 5);
              break;
            case 6:
              Ye = 0, Kt = null, Wr(e, t, f, 6);
              break;
            case 8:
              Mc(), nt = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        r0();
        break;
      } catch (Q) {
        im(e, Q);
      }
    while (!0);
    return Vn = Wa = null, U.H = i, U.A = o, Ve = n, De !== null ? 0 : (Ke = null, ze = 0, Jl(), nt);
  }
  function r0() {
    for (; De !== null && !vr(); )
      om(De);
  }
  function om(e) {
    var t = Lp(e.alternate, e, Wn);
    e.memoizedProps = e.pendingProps, t === null ? Ds(e) : De = t;
  }
  function um(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Op(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          ze
        );
        break;
      case 11:
        t = Op(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          ze
        );
        break;
      case 5:
        Qu(t);
      default:
        zp(n, t), t = De = cd(t, Wn), t = Lp(n, t, Wn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Ds(e) : De = t;
  }
  function Wr(e, t, n, i) {
    Vn = Wa = null, Qu(t), Gr = null, Yi = 0;
    var o = t.return;
    try {
      if (X1(
        e,
        o,
        t,
        n,
        ze
      )) {
        nt = 1, _s(
          e,
          on(n, e.current)
        ), De = null;
        return;
      }
    } catch (f) {
      if (o !== null) throw De = o, f;
      nt = 1, _s(
        e,
        on(n, e.current)
      ), De = null;
      return;
    }
    t.flags & 32768 ? (Ie || i === 1 ? e = !0 : Xr || (ze & 536870912) !== 0 ? e = !1 : (Sa = e = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = hn.current, i !== null && i.tag === 13 && (i.flags |= 16384))), cm(t, e)) : Ds(t);
  }
  function Ds(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        cm(
          t,
          Sa
        );
        return;
      }
      e = t.return;
      var n = Z1(
        t.alternate,
        t,
        Wn
      );
      if (n !== null) {
        De = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        De = t;
        return;
      }
      De = t = e;
    } while (t !== null);
    nt === 0 && (nt = 5);
  }
  function cm(e, t) {
    do {
      var n = K1(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, De = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        De = e;
        return;
      }
      De = e = n;
    } while (e !== null);
    nt = 6, De = null;
  }
  function fm(e, t, n, i, o, f, _, w, R) {
    e.cancelPendingCommit = null;
    do
      Ms();
    while (St !== 0);
    if ((Ve & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (f = t.lanes | t.childLanes, f |= Eu, By(
        e,
        n,
        f,
        _,
        w,
        R
      ), e === Ke && (De = Ke = null, ze = 0), Zr = t, Ea = e, Kr = n, Nc = f, Oc = o, tm = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, o0(de, function() {
        return gm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
        i = U.T, U.T = null, o = $.p, $.p = 2, _ = Ve, Ve |= 4;
        try {
          J1(e, t, n);
        } finally {
          Ve = _, $.p = o, U.T = i;
        }
      }
      St = 1, hm(), dm(), pm();
    }
  }
  function hm() {
    if (St === 1) {
      St = 0;
      var e = Ea, t = Zr, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = U.T, U.T = null;
        var i = $.p;
        $.p = 2;
        var o = Ve;
        Ve |= 4;
        try {
          Qp(t, e);
          var f = Yc, _ = ed(e.containerInfo), w = f.focusedElem, R = f.selectionRange;
          if (_ !== w && w && w.ownerDocument && $h(
            w.ownerDocument.documentElement,
            w
          )) {
            if (R !== null && yu(w)) {
              var q = R.start, Q = R.end;
              if (Q === void 0 && (Q = q), "selectionStart" in w)
                w.selectionStart = q, w.selectionEnd = Math.min(
                  Q,
                  w.value.length
                );
              else {
                var W = w.ownerDocument || document, I = W && W.defaultView || window;
                if (I.getSelection) {
                  var V = I.getSelection(), Se = w.textContent.length, ye = Math.min(R.start, Se), Qe = R.end === void 0 ? ye : Math.min(R.end, Se);
                  !V.extend && ye > Qe && (_ = Qe, Qe = ye, ye = _);
                  var z = Wh(
                    w,
                    ye
                  ), B = Wh(
                    w,
                    Qe
                  );
                  if (z && B && (V.rangeCount !== 1 || V.anchorNode !== z.node || V.anchorOffset !== z.offset || V.focusNode !== B.node || V.focusOffset !== B.offset)) {
                    var H = W.createRange();
                    H.setStart(z.node, z.offset), V.removeAllRanges(), ye > Qe ? (V.addRange(H), V.extend(B.node, B.offset)) : (H.setEnd(B.node, B.offset), V.addRange(H));
                  }
                }
              }
            }
            for (W = [], V = w; V = V.parentNode; )
              V.nodeType === 1 && W.push({
                element: V,
                left: V.scrollLeft,
                top: V.scrollTop
              });
            for (typeof w.focus == "function" && w.focus(), w = 0; w < W.length; w++) {
              var K = W[w];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          Gs = !!Vc, Yc = Vc = null;
        } finally {
          Ve = o, $.p = i, U.T = n;
        }
      }
      e.current = t, St = 2;
    }
  }
  function dm() {
    if (St === 2) {
      St = 0;
      var e = Ea, t = Zr, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = U.T, U.T = null;
        var i = $.p;
        $.p = 2;
        var o = Ve;
        Ve |= 4;
        try {
          Vp(e, t.alternate, t);
        } finally {
          Ve = o, $.p = i, U.T = n;
        }
      }
      St = 3;
    }
  }
  function pm() {
    if (St === 4 || St === 3) {
      St = 0, Ia();
      var e = Ea, t = Zr, n = Kr, i = tm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? St = 5 : (St = 0, Zr = Ea = null, mm(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (o === 0 && (xa = null), Jo(n), t = t.stateNode, se && typeof se.onCommitFiberRoot == "function")
        try {
          se.onCommitFiberRoot(
            Z,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (i !== null) {
        t = U.T, o = $.p, $.p = 2, U.T = null;
        try {
          for (var f = e.onRecoverableError, _ = 0; _ < i.length; _++) {
            var w = i[_];
            f(w.value, {
              componentStack: w.stack
            });
          }
        } finally {
          U.T = t, $.p = o;
        }
      }
      (Kr & 3) !== 0 && Ms(), kn(e), o = e.pendingLanes, (n & 4194090) !== 0 && (o & 42) !== 0 ? e === Dc ? el++ : (el = 0, Dc = e) : el = 0, tl(0);
    }
  }
  function mm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, ji(t)));
  }
  function Ms(e) {
    return hm(), dm(), pm(), gm();
  }
  function gm() {
    if (St !== 5) return !1;
    var e = Ea, t = Nc;
    Nc = 0;
    var n = Jo(Kr), i = U.T, o = $.p;
    try {
      $.p = 32 > n ? 32 : n, U.T = null, n = Oc, Oc = null;
      var f = Ea, _ = Kr;
      if (St = 0, Zr = Ea = null, Kr = 0, (Ve & 6) !== 0) throw Error(s(331));
      var w = Ve;
      if (Ve |= 4, $p(f.current), Kp(
        f,
        f.current,
        _,
        n
      ), Ve = w, tl(0, !1), se && typeof se.onPostCommitFiberRoot == "function")
        try {
          se.onPostCommitFiberRoot(Z, f);
        } catch {
        }
      return !0;
    } finally {
      $.p = o, U.T = i, mm(e, t);
    }
  }
  function vm(e, t, n) {
    t = on(n, t), t = oc(e.stateNode, t, 2), e = da(e, t, 2), e !== null && (yi(e, 2), kn(e));
  }
  function Ze(e, t, n) {
    if (e.tag === 3)
      vm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          vm(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var i = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (xa === null || !xa.has(i))) {
            e = on(n, e), n = _p(2), i = da(t, n, 2), i !== null && (xp(
              n,
              i,
              t,
              e
            ), yi(i, 2), kn(i));
            break;
          }
        }
        t = t.return;
      }
  }
  function jc(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new e0();
      var o = /* @__PURE__ */ new Set();
      i.set(t, o);
    } else
      o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
    o.has(n) || (Cc = !0, o.add(n), e = i0.bind(null, e, t, n), t.then(e, e));
  }
  function i0(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ke === e && (ze & n) === n && (nt === 4 || nt === 3 && (ze & 62914560) === ze && 300 > Nt() - wc ? (Ve & 2) === 0 && Jr(e, 0) : Ac |= n, Qr === ze && (Qr = 0)), kn(e);
  }
  function ym(e, t) {
    t === 0 && (t = ph()), e = kr(e, t), e !== null && (yi(e, t), kn(e));
  }
  function l0(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ym(e, n);
  }
  function s0(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var i = e.stateNode, o = e.memoizedState;
        o !== null && (n = o.retryLane);
        break;
      case 19:
        i = e.stateNode;
        break;
      case 22:
        i = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    i !== null && i.delete(t), ym(e, n);
  }
  function o0(e, t) {
    return Pa(e, t);
  }
  var Rs = null, $r = null, Lc = !1, ks = !1, Bc = !1, ir = 0;
  function kn(e) {
    e !== $r && e.next === null && ($r === null ? Rs = $r = e : $r = $r.next = e), ks = !0, Lc || (Lc = !0, c0());
  }
  function tl(e, t) {
    if (!Bc && ks) {
      Bc = !0;
      do
        for (var n = !1, i = Rs; i !== null; ) {
          if (e !== 0) {
            var o = i.pendingLanes;
            if (o === 0) var f = 0;
            else {
              var _ = i.suspendedLanes, w = i.pingedLanes;
              f = (1 << 31 - ge(42 | e) + 1) - 1, f &= o & ~(_ & ~w), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (n = !0, xm(i, f));
          } else
            f = ze, f = Ot(
              i,
              i === Ke ? f : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (f & 3) === 0 || kt(i, f) || (n = !0, xm(i, f));
          i = i.next;
        }
      while (n);
      Bc = !1;
    }
  }
  function u0() {
    bm();
  }
  function bm() {
    ks = Lc = !1;
    var e = 0;
    ir !== 0 && (y0() && (e = ir), ir = 0);
    for (var t = Nt(), n = null, i = Rs; i !== null; ) {
      var o = i.next, f = Sm(i, t);
      f === 0 ? (i.next = null, n === null ? Rs = o : n.next = o, o === null && ($r = n)) : (n = i, (e !== 0 || (f & 3) !== 0) && (ks = !0)), i = o;
    }
    tl(e);
  }
  function Sm(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var _ = 31 - ge(f), w = 1 << _, R = o[_];
      R === -1 ? ((w & n) === 0 || (w & i) !== 0) && (o[_] = Hl(w, t)) : R <= t && (e.expiredLanes |= w), f &= ~w;
    }
    if (t = Ke, n = ze, n = Ot(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i = e.callbackNode, n === 0 || e === t && (Ye === 2 || Ye === 9) || e.cancelPendingCommit !== null)
      return i !== null && i !== null && qa(i), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || kt(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (i !== null && qa(i), Jo(n)) {
        case 2:
        case 8:
          n = me;
          break;
        case 32:
          n = de;
          break;
        case 268435456:
          n = He;
          break;
        default:
          n = de;
      }
      return i = _m.bind(null, e), n = Pa(n, i), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return i !== null && i !== null && qa(i), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function _m(e, t) {
    if (St !== 0 && St !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Ms() && e.callbackNode !== n)
      return null;
    var i = ze;
    return i = Ot(
      e,
      e === Ke ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i === 0 ? null : (am(e, i, t), Sm(e, Nt()), e.callbackNode != null && e.callbackNode === n ? _m.bind(null, e) : null);
  }
  function xm(e, t) {
    if (Ms()) return null;
    am(e, t, !0);
  }
  function c0() {
    S0(function() {
      (Ve & 6) !== 0 ? Pa(
        Vt,
        u0
      ) : bm();
    });
  }
  function zc() {
    return ir === 0 && (ir = yr()), ir;
  }
  function Em(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Vl("" + e);
  }
  function Cm(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function f0(e, t, n, i, o) {
    if (t === "submit" && n && n.stateNode === o) {
      var f = Em(
        (o[jt] || null).action
      ), _ = i.submitter;
      _ && (t = (t = _[jt] || null) ? Em(t.formAction) : _.getAttribute("formAction"), t !== null && (f = t, _ = null));
      var w = new Ql(
        "action",
        "action",
        null,
        i,
        o
      );
      e.push({
        event: w,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (ir !== 0) {
                  var R = _ ? Cm(o, _) : new FormData(o);
                  ac(
                    n,
                    {
                      pending: !0,
                      data: R,
                      method: o.method,
                      action: f
                    },
                    null,
                    R
                  );
                }
              } else
                typeof f == "function" && (w.preventDefault(), R = _ ? Cm(o, _) : new FormData(o), ac(
                  n,
                  {
                    pending: !0,
                    data: R,
                    method: o.method,
                    action: f
                  },
                  f,
                  R
                ));
            },
            currentTarget: o
          }
        ]
      });
    }
  }
  for (var Uc = 0; Uc < xu.length; Uc++) {
    var Hc = xu[Uc], h0 = Hc.toLowerCase(), d0 = Hc[0].toUpperCase() + Hc.slice(1);
    yn(
      h0,
      "on" + d0
    );
  }
  yn(ad, "onAnimationEnd"), yn(rd, "onAnimationIteration"), yn(id, "onAnimationStart"), yn("dblclick", "onDoubleClick"), yn("focusin", "onFocus"), yn("focusout", "onBlur"), yn(D1, "onTransitionRun"), yn(M1, "onTransitionStart"), yn(R1, "onTransitionCancel"), yn(ld, "onTransitionEnd"), Er("onMouseEnter", ["mouseout", "mouseover"]), Er("onMouseLeave", ["mouseout", "mouseover"]), Er("onPointerEnter", ["pointerout", "pointerover"]), Er("onPointerLeave", ["pointerout", "pointerover"]), Ga(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ga(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ga("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ga(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ga(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ga(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var nl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), p0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(nl)
  );
  function Am(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var i = e[n], o = i.event;
      i = i.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var _ = i.length - 1; 0 <= _; _--) {
            var w = i[_], R = w.instance, q = w.currentTarget;
            if (w = w.listener, R !== f && o.isPropagationStopped())
              break e;
            f = w, o.currentTarget = q;
            try {
              f(o);
            } catch (Q) {
              Ss(Q);
            }
            o.currentTarget = null, f = R;
          }
        else
          for (_ = 0; _ < i.length; _++) {
            if (w = i[_], R = w.instance, q = w.currentTarget, w = w.listener, R !== f && o.isPropagationStopped())
              break e;
            f = w, o.currentTarget = q;
            try {
              f(o);
            } catch (Q) {
              Ss(Q);
            }
            o.currentTarget = null, f = R;
          }
      }
    }
  }
  function Me(e, t) {
    var n = t[Wo];
    n === void 0 && (n = t[Wo] = /* @__PURE__ */ new Set());
    var i = e + "__bubble";
    n.has(i) || (Tm(t, e, 2, !1), n.add(i));
  }
  function Pc(e, t, n) {
    var i = 0;
    t && (i |= 4), Tm(
      n,
      e,
      i,
      t
    );
  }
  var js = "_reactListening" + Math.random().toString(36).slice(2);
  function qc(e) {
    if (!e[js]) {
      e[js] = !0, bh.forEach(function(n) {
        n !== "selectionchange" && (p0.has(n) || Pc(n, !1, e), Pc(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[js] || (t[js] = !0, Pc("selectionchange", !1, t));
    }
  }
  function Tm(e, t, n, i) {
    switch (Km(t)) {
      case 2:
        var o = q0;
        break;
      case 8:
        o = I0;
        break;
      default:
        o = tf;
    }
    n = o.bind(
      null,
      t,
      n,
      e
    ), o = void 0, !uu || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (o = !0), i ? o !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: o
    }) : e.addEventListener(t, n, !0) : o !== void 0 ? e.addEventListener(t, n, {
      passive: o
    }) : e.addEventListener(t, n, !1);
  }
  function Ic(e, t, n, i, o) {
    var f = i;
    if ((t & 1) === 0 && (t & 2) === 0 && i !== null)
      e: for (; ; ) {
        if (i === null) return;
        var _ = i.tag;
        if (_ === 3 || _ === 4) {
          var w = i.stateNode.containerInfo;
          if (w === o) break;
          if (_ === 4)
            for (_ = i.return; _ !== null; ) {
              var R = _.tag;
              if ((R === 3 || R === 4) && _.stateNode.containerInfo === o)
                return;
              _ = _.return;
            }
          for (; w !== null; ) {
            if (_ = Sr(w), _ === null) return;
            if (R = _.tag, R === 5 || R === 6 || R === 26 || R === 27) {
              i = f = _;
              continue e;
            }
            w = w.parentNode;
          }
        }
        i = i.return;
      }
    kh(function() {
      var q = f, Q = su(n), W = [];
      e: {
        var I = sd.get(e);
        if (I !== void 0) {
          var V = Ql, Se = e;
          switch (e) {
            case "keypress":
              if (Fl(n) === 0) break e;
            case "keydown":
            case "keyup":
              V = o1;
              break;
            case "focusin":
              Se = "focus", V = du;
              break;
            case "focusout":
              Se = "blur", V = du;
              break;
            case "beforeblur":
            case "afterblur":
              V = du;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              V = Bh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              V = Ky;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = f1;
              break;
            case ad:
            case rd:
            case id:
              V = $y;
              break;
            case ld:
              V = d1;
              break;
            case "scroll":
            case "scrollend":
              V = Qy;
              break;
            case "wheel":
              V = m1;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = t1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              V = Uh;
              break;
            case "toggle":
            case "beforetoggle":
              V = v1;
          }
          var ye = (t & 4) !== 0, Qe = !ye && (e === "scroll" || e === "scrollend"), z = ye ? I !== null ? I + "Capture" : null : I;
          ye = [];
          for (var B = q, H; B !== null; ) {
            var K = B;
            if (H = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || H === null || z === null || (K = _i(B, z), K != null && ye.push(
              al(B, K, H)
            )), Qe) break;
            B = B.return;
          }
          0 < ye.length && (I = new V(
            I,
            Se,
            null,
            n,
            Q
          ), W.push({ event: I, listeners: ye }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (I = e === "mouseover" || e === "pointerover", V = e === "mouseout" || e === "pointerout", I && n !== lu && (Se = n.relatedTarget || n.fromElement) && (Sr(Se) || Se[br]))
            break e;
          if ((V || I) && (I = Q.window === Q ? Q : (I = Q.ownerDocument) ? I.defaultView || I.parentWindow : window, V ? (Se = n.relatedTarget || n.toElement, V = q, Se = Se ? Sr(Se) : null, Se !== null && (Qe = c(Se), ye = Se.tag, Se !== Qe || ye !== 5 && ye !== 27 && ye !== 6) && (Se = null)) : (V = null, Se = q), V !== Se)) {
            if (ye = Bh, K = "onMouseLeave", z = "onMouseEnter", B = "mouse", (e === "pointerout" || e === "pointerover") && (ye = Uh, K = "onPointerLeave", z = "onPointerEnter", B = "pointer"), Qe = V == null ? I : Si(V), H = Se == null ? I : Si(Se), I = new ye(
              K,
              B + "leave",
              V,
              n,
              Q
            ), I.target = Qe, I.relatedTarget = H, K = null, Sr(Q) === q && (ye = new ye(
              z,
              B + "enter",
              Se,
              n,
              Q
            ), ye.target = H, ye.relatedTarget = Qe, K = ye), Qe = K, V && Se)
              t: {
                for (ye = V, z = Se, B = 0, H = ye; H; H = ei(H))
                  B++;
                for (H = 0, K = z; K; K = ei(K))
                  H++;
                for (; 0 < B - H; )
                  ye = ei(ye), B--;
                for (; 0 < H - B; )
                  z = ei(z), H--;
                for (; B--; ) {
                  if (ye === z || z !== null && ye === z.alternate)
                    break t;
                  ye = ei(ye), z = ei(z);
                }
                ye = null;
              }
            else ye = null;
            V !== null && wm(
              W,
              I,
              V,
              ye,
              !1
            ), Se !== null && Qe !== null && wm(
              W,
              Qe,
              Se,
              ye,
              !0
            );
          }
        }
        e: {
          if (I = q ? Si(q) : window, V = I.nodeName && I.nodeName.toLowerCase(), V === "select" || V === "input" && I.type === "file")
            var ce = Fh;
          else if (Vh(I))
            if (Xh)
              ce = w1;
            else {
              ce = A1;
              var Ne = C1;
            }
          else
            V = I.nodeName, !V || V.toLowerCase() !== "input" || I.type !== "checkbox" && I.type !== "radio" ? q && iu(q.elementType) && (ce = Fh) : ce = T1;
          if (ce && (ce = ce(e, q))) {
            Yh(
              W,
              ce,
              n,
              Q
            );
            break e;
          }
          Ne && Ne(e, I, q), e === "focusout" && q && I.type === "number" && q.memoizedProps.value != null && ru(I, "number", I.value);
        }
        switch (Ne = q ? Si(q) : window, e) {
          case "focusin":
            (Vh(Ne) || Ne.contentEditable === "true") && (Dr = Ne, bu = q, Oi = null);
            break;
          case "focusout":
            Oi = bu = Dr = null;
            break;
          case "mousedown":
            Su = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Su = !1, td(W, n, Q);
            break;
          case "selectionchange":
            if (O1) break;
          case "keydown":
          case "keyup":
            td(W, n, Q);
        }
        var pe;
        if (mu)
          e: {
            switch (e) {
              case "compositionstart":
                var be = "onCompositionStart";
                break e;
              case "compositionend":
                be = "onCompositionEnd";
                break e;
              case "compositionupdate":
                be = "onCompositionUpdate";
                break e;
            }
            be = void 0;
          }
        else
          Or ? Ih(e, n) && (be = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (be = "onCompositionStart");
        be && (Hh && n.locale !== "ko" && (Or || be !== "onCompositionStart" ? be === "onCompositionEnd" && Or && (pe = jh()) : (ua = Q, cu = "value" in ua ? ua.value : ua.textContent, Or = !0)), Ne = Ls(q, be), 0 < Ne.length && (be = new zh(
          be,
          e,
          null,
          n,
          Q
        ), W.push({ event: be, listeners: Ne }), pe ? be.data = pe : (pe = Gh(n), pe !== null && (be.data = pe)))), (pe = b1 ? S1(e, n) : _1(e, n)) && (be = Ls(q, "onBeforeInput"), 0 < be.length && (Ne = new zh(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          Q
        ), W.push({
          event: Ne,
          listeners: be
        }), Ne.data = pe)), f0(
          W,
          e,
          q,
          n,
          Q
        );
      }
      Am(W, t);
    });
  }
  function al(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Ls(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var o = e, f = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = _i(e, n), o != null && i.unshift(
        al(e, o, f)
      ), o = _i(e, t), o != null && i.push(
        al(e, o, f)
      )), e.tag === 3) return i;
      e = e.return;
    }
    return [];
  }
  function ei(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function wm(e, t, n, i, o) {
    for (var f = t._reactName, _ = []; n !== null && n !== i; ) {
      var w = n, R = w.alternate, q = w.stateNode;
      if (w = w.tag, R !== null && R === i) break;
      w !== 5 && w !== 26 && w !== 27 || q === null || (R = q, o ? (q = _i(n, f), q != null && _.unshift(
        al(n, q, R)
      )) : o || (q = _i(n, f), q != null && _.push(
        al(n, q, R)
      ))), n = n.return;
    }
    _.length !== 0 && e.push({ event: t, listeners: _ });
  }
  var m0 = /\r\n?/g, g0 = /\u0000|\uFFFD/g;
  function Nm(e) {
    return (typeof e == "string" ? e : "" + e).replace(m0, `
`).replace(g0, "");
  }
  function Om(e, t) {
    return t = Nm(t), Nm(e) === t;
  }
  function Bs() {
  }
  function Xe(e, t, n, i, o, f) {
    switch (n) {
      case "children":
        typeof i == "string" ? t === "body" || t === "textarea" && i === "" || Tr(e, i) : (typeof i == "number" || typeof i == "bigint") && t !== "body" && Tr(e, "" + i);
        break;
      case "className":
        ql(e, "class", i);
        break;
      case "tabIndex":
        ql(e, "tabindex", i);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        ql(e, n, i);
        break;
      case "style":
        Mh(e, i, f);
        break;
      case "data":
        if (t !== "object") {
          ql(e, "data", i);
          break;
        }
      case "src":
      case "href":
        if (i === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (i == null || typeof i == "function" || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(n);
          break;
        }
        i = Vl("" + i), e.setAttribute(n, i);
        break;
      case "action":
      case "formAction":
        if (typeof i == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" && (n === "formAction" ? (t !== "input" && Xe(e, t, "name", o.name, o, null), Xe(
            e,
            t,
            "formEncType",
            o.formEncType,
            o,
            null
          ), Xe(
            e,
            t,
            "formMethod",
            o.formMethod,
            o,
            null
          ), Xe(
            e,
            t,
            "formTarget",
            o.formTarget,
            o,
            null
          )) : (Xe(e, t, "encType", o.encType, o, null), Xe(e, t, "method", o.method, o, null), Xe(e, t, "target", o.target, o, null)));
        if (i == null || typeof i == "symbol" || typeof i == "boolean") {
          e.removeAttribute(n);
          break;
        }
        i = Vl("" + i), e.setAttribute(n, i);
        break;
      case "onClick":
        i != null && (e.onclick = Bs);
        break;
      case "onScroll":
        i != null && Me("scroll", e);
        break;
      case "onScrollEnd":
        i != null && Me("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(s(61));
          if (n = i.__html, n != null) {
            if (o.children != null) throw Error(s(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "muted":
        e.muted = i && typeof i != "function" && typeof i != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (i == null || typeof i == "function" || typeof i == "boolean" || typeof i == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = Vl("" + i), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(n, "" + i) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        i && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        i === !0 ? e.setAttribute(n, "") : i !== !1 && i != null && typeof i != "function" && typeof i != "symbol" ? e.setAttribute(n, i) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        i != null && typeof i != "function" && typeof i != "symbol" && !isNaN(i) && 1 <= i ? e.setAttribute(n, i) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        i == null || typeof i == "function" || typeof i == "symbol" || isNaN(i) ? e.removeAttribute(n) : e.setAttribute(n, i);
        break;
      case "popover":
        Me("beforetoggle", e), Me("toggle", e), Pl(e, "popover", i);
        break;
      case "xlinkActuate":
        Hn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        Hn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        Hn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        Hn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        Hn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        Hn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        Hn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        Hn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        Hn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          i
        );
        break;
      case "is":
        Pl(e, "is", i);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Fy.get(n) || n, Pl(e, n, i));
    }
  }
  function Gc(e, t, n, i, o, f) {
    switch (n) {
      case "style":
        Mh(e, i, f);
        break;
      case "dangerouslySetInnerHTML":
        if (i != null) {
          if (typeof i != "object" || !("__html" in i))
            throw Error(s(61));
          if (n = i.__html, n != null) {
            if (o.children != null) throw Error(s(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof i == "string" ? Tr(e, i) : (typeof i == "number" || typeof i == "bigint") && Tr(e, "" + i);
        break;
      case "onScroll":
        i != null && Me("scroll", e);
        break;
      case "onScrollEnd":
        i != null && Me("scrollend", e);
        break;
      case "onClick":
        i != null && (e.onclick = Bs);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Sh.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), t = n.slice(2, o ? n.length - 7 : void 0), f = e[jt] || null, f = f != null ? f[n] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
              typeof f != "function" && f !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, i, o);
              break e;
            }
            n in e ? e[n] = i : i === !0 ? e.setAttribute(n, "") : Pl(e, n, i);
          }
    }
  }
  function _t(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Me("error", e), Me("load", e);
        var i = !1, o = !1, f;
        for (f in n)
          if (n.hasOwnProperty(f)) {
            var _ = n[f];
            if (_ != null)
              switch (f) {
                case "src":
                  i = !0;
                  break;
                case "srcSet":
                  o = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, t));
                default:
                  Xe(e, t, f, _, n, null);
              }
          }
        o && Xe(e, t, "srcSet", n.srcSet, n, null), i && Xe(e, t, "src", n.src, n, null);
        return;
      case "input":
        Me("invalid", e);
        var w = f = _ = o = null, R = null, q = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var Q = n[i];
            if (Q != null)
              switch (i) {
                case "name":
                  o = Q;
                  break;
                case "type":
                  _ = Q;
                  break;
                case "checked":
                  R = Q;
                  break;
                case "defaultChecked":
                  q = Q;
                  break;
                case "value":
                  f = Q;
                  break;
                case "defaultValue":
                  w = Q;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Q != null)
                    throw Error(s(137, t));
                  break;
                default:
                  Xe(e, t, i, Q, n, null);
              }
          }
        wh(
          e,
          f,
          w,
          R,
          q,
          _,
          o,
          !1
        ), Il(e);
        return;
      case "select":
        Me("invalid", e), i = _ = f = null;
        for (o in n)
          if (n.hasOwnProperty(o) && (w = n[o], w != null))
            switch (o) {
              case "value":
                f = w;
                break;
              case "defaultValue":
                _ = w;
                break;
              case "multiple":
                i = w;
              default:
                Xe(e, t, o, w, n, null);
            }
        t = f, n = _, e.multiple = !!i, t != null ? Ar(e, !!i, t, !1) : n != null && Ar(e, !!i, n, !0);
        return;
      case "textarea":
        Me("invalid", e), f = o = i = null;
        for (_ in n)
          if (n.hasOwnProperty(_) && (w = n[_], w != null))
            switch (_) {
              case "value":
                i = w;
                break;
              case "defaultValue":
                o = w;
                break;
              case "children":
                f = w;
                break;
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(s(91));
                break;
              default:
                Xe(e, t, _, w, n, null);
            }
        Oh(e, i, o, f), Il(e);
        return;
      case "option":
        for (R in n)
          if (n.hasOwnProperty(R) && (i = n[R], i != null))
            switch (R) {
              case "selected":
                e.selected = i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                Xe(e, t, R, i, n, null);
            }
        return;
      case "dialog":
        Me("beforetoggle", e), Me("toggle", e), Me("cancel", e), Me("close", e);
        break;
      case "iframe":
      case "object":
        Me("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < nl.length; i++)
          Me(nl[i], e);
        break;
      case "image":
        Me("error", e), Me("load", e);
        break;
      case "details":
        Me("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Me("error", e), Me("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (q in n)
          if (n.hasOwnProperty(q) && (i = n[q], i != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                Xe(e, t, q, i, n, null);
            }
        return;
      default:
        if (iu(t)) {
          for (Q in n)
            n.hasOwnProperty(Q) && (i = n[Q], i !== void 0 && Gc(
              e,
              t,
              Q,
              i,
              n,
              void 0
            ));
          return;
        }
    }
    for (w in n)
      n.hasOwnProperty(w) && (i = n[w], i != null && Xe(e, t, w, i, n, null));
  }
  function v0(e, t, n, i) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var o = null, f = null, _ = null, w = null, R = null, q = null, Q = null;
        for (V in n) {
          var W = n[V];
          if (n.hasOwnProperty(V) && W != null)
            switch (V) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                R = W;
              default:
                i.hasOwnProperty(V) || Xe(e, t, V, null, i, W);
            }
        }
        for (var I in i) {
          var V = i[I];
          if (W = n[I], i.hasOwnProperty(I) && (V != null || W != null))
            switch (I) {
              case "type":
                f = V;
                break;
              case "name":
                o = V;
                break;
              case "checked":
                q = V;
                break;
              case "defaultChecked":
                Q = V;
                break;
              case "value":
                _ = V;
                break;
              case "defaultValue":
                w = V;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null)
                  throw Error(s(137, t));
                break;
              default:
                V !== W && Xe(
                  e,
                  t,
                  I,
                  V,
                  i,
                  W
                );
            }
        }
        au(
          e,
          _,
          w,
          R,
          q,
          Q,
          f,
          o
        );
        return;
      case "select":
        V = _ = w = I = null;
        for (f in n)
          if (R = n[f], n.hasOwnProperty(f) && R != null)
            switch (f) {
              case "value":
                break;
              case "multiple":
                V = R;
              default:
                i.hasOwnProperty(f) || Xe(
                  e,
                  t,
                  f,
                  null,
                  i,
                  R
                );
            }
        for (o in i)
          if (f = i[o], R = n[o], i.hasOwnProperty(o) && (f != null || R != null))
            switch (o) {
              case "value":
                I = f;
                break;
              case "defaultValue":
                w = f;
                break;
              case "multiple":
                _ = f;
              default:
                f !== R && Xe(
                  e,
                  t,
                  o,
                  f,
                  i,
                  R
                );
            }
        t = w, n = _, i = V, I != null ? Ar(e, !!n, I, !1) : !!i != !!n && (t != null ? Ar(e, !!n, t, !0) : Ar(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        V = I = null;
        for (w in n)
          if (o = n[w], n.hasOwnProperty(w) && o != null && !i.hasOwnProperty(w))
            switch (w) {
              case "value":
                break;
              case "children":
                break;
              default:
                Xe(e, t, w, null, i, o);
            }
        for (_ in i)
          if (o = i[_], f = n[_], i.hasOwnProperty(_) && (o != null || f != null))
            switch (_) {
              case "value":
                I = o;
                break;
              case "defaultValue":
                V = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(s(91));
                break;
              default:
                o !== f && Xe(e, t, _, o, i, f);
            }
        Nh(e, I, V);
        return;
      case "option":
        for (var Se in n)
          if (I = n[Se], n.hasOwnProperty(Se) && I != null && !i.hasOwnProperty(Se))
            switch (Se) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Xe(
                  e,
                  t,
                  Se,
                  null,
                  i,
                  I
                );
            }
        for (R in i)
          if (I = i[R], V = n[R], i.hasOwnProperty(R) && I !== V && (I != null || V != null))
            switch (R) {
              case "selected":
                e.selected = I && typeof I != "function" && typeof I != "symbol";
                break;
              default:
                Xe(
                  e,
                  t,
                  R,
                  I,
                  i,
                  V
                );
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var ye in n)
          I = n[ye], n.hasOwnProperty(ye) && I != null && !i.hasOwnProperty(ye) && Xe(e, t, ye, null, i, I);
        for (q in i)
          if (I = i[q], V = n[q], i.hasOwnProperty(q) && I !== V && (I != null || V != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (I != null)
                  throw Error(s(137, t));
                break;
              default:
                Xe(
                  e,
                  t,
                  q,
                  I,
                  i,
                  V
                );
            }
        return;
      default:
        if (iu(t)) {
          for (var Qe in n)
            I = n[Qe], n.hasOwnProperty(Qe) && I !== void 0 && !i.hasOwnProperty(Qe) && Gc(
              e,
              t,
              Qe,
              void 0,
              i,
              I
            );
          for (Q in i)
            I = i[Q], V = n[Q], !i.hasOwnProperty(Q) || I === V || I === void 0 && V === void 0 || Gc(
              e,
              t,
              Q,
              I,
              i,
              V
            );
          return;
        }
    }
    for (var z in n)
      I = n[z], n.hasOwnProperty(z) && I != null && !i.hasOwnProperty(z) && Xe(e, t, z, null, i, I);
    for (W in i)
      I = i[W], V = n[W], !i.hasOwnProperty(W) || I === V || I == null && V == null || Xe(e, t, W, I, i, V);
  }
  var Vc = null, Yc = null;
  function zs(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Dm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Mm(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function Fc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Xc = null;
  function y0() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Xc ? !1 : (Xc = e, !0) : (Xc = null, !1);
  }
  var Rm = typeof setTimeout == "function" ? setTimeout : void 0, b0 = typeof clearTimeout == "function" ? clearTimeout : void 0, km = typeof Promise == "function" ? Promise : void 0, S0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof km < "u" ? function(e) {
    return km.resolve(null).then(e).catch(_0);
  } : Rm;
  function _0(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Aa(e) {
    return e === "head";
  }
  function jm(e, t) {
    var n = t, i = 0, o = 0;
    do {
      var f = n.nextSibling;
      if (e.removeChild(n), f && f.nodeType === 8)
        if (n = f.data, n === "/$") {
          if (0 < i && 8 > i) {
            n = i;
            var _ = e.ownerDocument;
            if (n & 1 && rl(_.documentElement), n & 2 && rl(_.body), n & 4)
              for (n = _.head, rl(n), _ = n.firstChild; _; ) {
                var w = _.nextSibling, R = _.nodeName;
                _[bi] || R === "SCRIPT" || R === "STYLE" || R === "LINK" && _.rel.toLowerCase() === "stylesheet" || n.removeChild(_), _ = w;
              }
          }
          if (o === 0) {
            e.removeChild(f), hl(t);
            return;
          }
          o--;
        } else
          n === "$" || n === "$?" || n === "$!" ? o++ : i = n.charCodeAt(0) - 48;
      else i = 0;
      n = f;
    } while (n);
    hl(t);
  }
  function Qc(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Qc(n), $o(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function x0(e, t, n, i) {
    for (; e.nodeType === 1; ) {
      var o = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!i && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (i) {
        if (!e[bi])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (f !== o.rel || e.getAttribute("href") !== (o.href == null || o.href === "" ? null : o.href) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin) || e.getAttribute("title") !== (o.title == null ? null : o.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (f = e.getAttribute("src"), (f !== (o.src == null ? null : o.src) || e.getAttribute("type") !== (o.type == null ? null : o.type) || e.getAttribute("crossorigin") !== (o.crossOrigin == null ? null : o.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var f = o.name == null ? null : "" + o.name;
        if (o.type === "hidden" && e.getAttribute("name") === f)
          return e;
      } else return e;
      if (e = Sn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function E0(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Sn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Zc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function C0(e, t) {
    var n = e.ownerDocument;
    if (e.data !== "$?" || n.readyState === "complete")
      t();
    else {
      var i = function() {
        t(), n.removeEventListener("DOMContentLoaded", i);
      };
      n.addEventListener("DOMContentLoaded", i), e._reactRetry = i;
    }
  }
  function Sn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var Kc = null;
  function Lm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0) return e;
          t--;
        } else n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Bm(e, t, n) {
    switch (t = zs(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(s(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(s(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function rl(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    $o(e);
  }
  var pn = /* @__PURE__ */ new Map(), zm = /* @__PURE__ */ new Set();
  function Us(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var $n = $.d;
  $.d = {
    f: A0,
    r: T0,
    D: w0,
    C: N0,
    L: O0,
    m: D0,
    X: R0,
    S: M0,
    M: k0
  };
  function A0() {
    var e = $n.f(), t = Os();
    return e || t;
  }
  function T0(e) {
    var t = _r(e);
    t !== null && t.tag === 5 && t.type === "form" ? ap(t) : $n.r(e);
  }
  var ti = typeof document > "u" ? null : document;
  function Um(e, t, n) {
    var i = ti;
    if (i && typeof t == "string" && t) {
      var o = sn(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), zm.has(o) || (zm.add(o), e = { rel: e, crossOrigin: n, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), _t(t, "link", e), mt(t), i.head.appendChild(t)));
    }
  }
  function w0(e) {
    $n.D(e), Um("dns-prefetch", e, null);
  }
  function N0(e, t) {
    $n.C(e, t), Um("preconnect", e, t);
  }
  function O0(e, t, n) {
    $n.L(e, t, n);
    var i = ti;
    if (i && e && t) {
      var o = 'link[rel="preload"][as="' + sn(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + sn(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + sn(
        n.imageSizes
      ) + '"]')) : o += '[href="' + sn(e) + '"]';
      var f = o;
      switch (t) {
        case "style":
          f = ni(e);
          break;
        case "script":
          f = ai(e);
      }
      pn.has(f) || (e = v(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), pn.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(il(f)) || t === "script" && i.querySelector(ll(f)) || (t = i.createElement("link"), _t(t, "link", e), mt(t), i.head.appendChild(t)));
    }
  }
  function D0(e, t) {
    $n.m(e, t);
    var n = ti;
    if (n && e) {
      var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + sn(i) + '"][href="' + sn(e) + '"]', f = o;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = ai(e);
      }
      if (!pn.has(f) && (e = v({ rel: "modulepreload", href: e }, t), pn.set(f, e), n.querySelector(o) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(ll(f)))
              return;
        }
        i = n.createElement("link"), _t(i, "link", e), mt(i), n.head.appendChild(i);
      }
    }
  }
  function M0(e, t, n) {
    $n.S(e, t, n);
    var i = ti;
    if (i && e) {
      var o = xr(i).hoistableStyles, f = ni(e);
      t = t || "default";
      var _ = o.get(f);
      if (!_) {
        var w = { loading: 0, preload: null };
        if (_ = i.querySelector(
          il(f)
        ))
          w.loading = 5;
        else {
          e = v(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = pn.get(f)) && Jc(e, n);
          var R = _ = i.createElement("link");
          mt(R), _t(R, "link", e), R._p = new Promise(function(q, Q) {
            R.onload = q, R.onerror = Q;
          }), R.addEventListener("load", function() {
            w.loading |= 1;
          }), R.addEventListener("error", function() {
            w.loading |= 2;
          }), w.loading |= 4, Hs(_, t, i);
        }
        _ = {
          type: "stylesheet",
          instance: _,
          count: 1,
          state: w
        }, o.set(f, _);
      }
    }
  }
  function R0(e, t) {
    $n.X(e, t);
    var n = ti;
    if (n && e) {
      var i = xr(n).hoistableScripts, o = ai(e), f = i.get(o);
      f || (f = n.querySelector(ll(o)), f || (e = v({ src: e, async: !0 }, t), (t = pn.get(o)) && Wc(e, t), f = n.createElement("script"), mt(f), _t(f, "link", e), n.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, i.set(o, f));
    }
  }
  function k0(e, t) {
    $n.M(e, t);
    var n = ti;
    if (n && e) {
      var i = xr(n).hoistableScripts, o = ai(e), f = i.get(o);
      f || (f = n.querySelector(ll(o)), f || (e = v({ src: e, async: !0, type: "module" }, t), (t = pn.get(o)) && Wc(e, t), f = n.createElement("script"), mt(f), _t(f, "link", e), n.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, i.set(o, f));
    }
  }
  function Hm(e, t, n, i) {
    var o = (o = ve.current) ? Us(o) : null;
    if (!o) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = ni(n.href), n = xr(
          o
        ).hoistableStyles, i = n.get(t), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = ni(n.href);
          var f = xr(
            o
          ).hoistableStyles, _ = f.get(e);
          if (_ || (o = o.ownerDocument || o, _ = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, f.set(e, _), (f = o.querySelector(
            il(e)
          )) && !f._p && (_.instance = f, _.state.loading = 5), pn.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, pn.set(e, n), f || j0(
            o,
            e,
            n,
            _.state
          ))), t && i === null)
            throw Error(s(528, ""));
          return _;
        }
        if (t && i !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ai(n), n = xr(
          o
        ).hoistableScripts, i = n.get(t), i || (i = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function ni(e) {
    return 'href="' + sn(e) + '"';
  }
  function il(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Pm(e) {
    return v({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function j0(e, t, n, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? i.loading = 1 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
      return i.loading |= 1;
    }), t.addEventListener("error", function() {
      return i.loading |= 2;
    }), _t(t, "link", n), mt(t), e.head.appendChild(t));
  }
  function ai(e) {
    return '[src="' + sn(e) + '"]';
  }
  function ll(e) {
    return "script[async]" + e;
  }
  function qm(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var i = e.querySelector(
            'style[data-href~="' + sn(n.href) + '"]'
          );
          if (i)
            return t.instance = i, mt(i), i;
          var o = v({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return i = (e.ownerDocument || e).createElement(
            "style"
          ), mt(i), _t(i, "style", o), Hs(i, n.precedence, e), t.instance = i;
        case "stylesheet":
          o = ni(n.href);
          var f = e.querySelector(
            il(o)
          );
          if (f)
            return t.state.loading |= 4, t.instance = f, mt(f), f;
          i = Pm(n), (o = pn.get(o)) && Jc(i, o), f = (e.ownerDocument || e).createElement("link"), mt(f);
          var _ = f;
          return _._p = new Promise(function(w, R) {
            _.onload = w, _.onerror = R;
          }), _t(f, "link", i), t.state.loading |= 4, Hs(f, n.precedence, e), t.instance = f;
        case "script":
          return f = ai(n.src), (o = e.querySelector(
            ll(f)
          )) ? (t.instance = o, mt(o), o) : (i = n, (o = pn.get(f)) && (i = v({}, n), Wc(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), mt(o), _t(o, "link", i), e.head.appendChild(o), t.instance = o);
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (i = t.instance, t.state.loading |= 4, Hs(i, n.precedence, e));
    return t.instance;
  }
  function Hs(e, t, n) {
    for (var i = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), o = i.length ? i[i.length - 1] : null, f = o, _ = 0; _ < i.length; _++) {
      var w = i[_];
      if (w.dataset.precedence === t) f = w;
      else if (f !== o) break;
    }
    f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Jc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Wc(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Ps = null;
  function Im(e, t, n) {
    if (Ps === null) {
      var i = /* @__PURE__ */ new Map(), o = Ps = /* @__PURE__ */ new Map();
      o.set(n, i);
    } else
      o = Ps, i = o.get(n), i || (i = /* @__PURE__ */ new Map(), o.set(n, i));
    if (i.has(e)) return i;
    for (i.set(e, null), n = n.getElementsByTagName(e), o = 0; o < n.length; o++) {
      var f = n[o];
      if (!(f[bi] || f[Et] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var _ = f.getAttribute(t) || "";
        _ = e + _;
        var w = i.get(_);
        w ? w.push(f) : i.set(_, [f]);
      }
    }
    return i;
  }
  function Gm(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function L0(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Vm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var sl = null;
  function B0() {
  }
  function z0(e, t, n) {
    if (sl === null) throw Error(s(475));
    var i = sl;
    if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var o = ni(n.href), f = e.querySelector(
          il(o)
        );
        if (f) {
          e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = qs.bind(i), e.then(i, i)), t.state.loading |= 4, t.instance = f, mt(f);
          return;
        }
        f = e.ownerDocument || e, n = Pm(n), (o = pn.get(o)) && Jc(n, o), f = f.createElement("link"), mt(f);
        var _ = f;
        _._p = new Promise(function(w, R) {
          _.onload = w, _.onerror = R;
        }), _t(f, "link", n), t.instance = f;
      }
      i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (i.count++, t = qs.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function U0() {
    if (sl === null) throw Error(s(475));
    var e = sl;
    return e.stylesheets && e.count === 0 && $c(e, e.stylesheets), 0 < e.count ? function(t) {
      var n = setTimeout(function() {
        if (e.stylesheets && $c(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4);
      return e.unsuspend = t, function() {
        e.unsuspend = null, clearTimeout(n);
      };
    } : null;
  }
  function qs() {
    if (this.count--, this.count === 0) {
      if (this.stylesheets) $c(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Is = null;
  function $c(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Is = /* @__PURE__ */ new Map(), t.forEach(H0, e), Is = null, qs.call(e));
  }
  function H0(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Is.get(e);
      if (n) var i = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Is.set(e, n);
        for (var o = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), f = 0; f < o.length; f++) {
          var _ = o[f];
          (_.nodeName === "LINK" || _.getAttribute("media") !== "not all") && (n.set(_.dataset.precedence, _), i = _);
        }
        i && n.set(null, i);
      }
      o = t.instance, _ = o.getAttribute("data-precedence"), f = n.get(_) || i, f === i && n.set(null, o), n.set(_, o), this.count++, i = qs.bind(this), o.addEventListener("load", i), o.addEventListener("error", i), f ? f.parentNode.insertBefore(o, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(o, e.firstChild)), t.state.loading |= 4;
    }
  }
  var ol = {
    $$typeof: D,
    Provider: null,
    Consumer: null,
    _currentValue: le,
    _currentValue2: le,
    _threadCount: 0
  };
  function P0(e, t, n, i, o, f, _, w) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Zo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zo(0), this.hiddenUpdates = Zo(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = _, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = w, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ym(e, t, n, i, o, f, _, w, R, q, Q, W) {
    return e = new P0(
      e,
      t,
      n,
      _,
      w,
      R,
      q,
      W
    ), t = 1, f === !0 && (t |= 24), f = Xt(3, null, null, t), e.current = f, f.stateNode = e, t = ju(), t.refCount++, e.pooledCache = t, t.refCount++, f.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: t
    }, Uu(f), e;
  }
  function Fm(e) {
    return e ? (e = jr, e) : jr;
  }
  function Xm(e, t, n, i, o, f) {
    o = Fm(o), i.context === null ? i.context = o : i.pendingContext = o, i = ha(t), i.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (i.callback = f), n = da(e, i, t), n !== null && (Wt(n, e, t), Ui(n, e, t));
  }
  function Qm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ef(e, t) {
    Qm(e, t), (e = e.alternate) && Qm(e, t);
  }
  function Zm(e) {
    if (e.tag === 13) {
      var t = kr(e, 67108864);
      t !== null && Wt(t, e, 67108864), ef(e, 67108864);
    }
  }
  var Gs = !0;
  function q0(e, t, n, i) {
    var o = U.T;
    U.T = null;
    var f = $.p;
    try {
      $.p = 2, tf(e, t, n, i);
    } finally {
      $.p = f, U.T = o;
    }
  }
  function I0(e, t, n, i) {
    var o = U.T;
    U.T = null;
    var f = $.p;
    try {
      $.p = 8, tf(e, t, n, i);
    } finally {
      $.p = f, U.T = o;
    }
  }
  function tf(e, t, n, i) {
    if (Gs) {
      var o = nf(i);
      if (o === null)
        Ic(
          e,
          t,
          i,
          Vs,
          n
        ), Jm(e, i);
      else if (V0(
        o,
        e,
        t,
        n,
        i
      ))
        i.stopPropagation();
      else if (Jm(e, i), t & 4 && -1 < G0.indexOf(e)) {
        for (; o !== null; ) {
          var f = _r(o);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                  var _ = rn(f.pendingLanes);
                  if (_ !== 0) {
                    var w = f;
                    for (w.pendingLanes |= 2, w.entangledLanes |= 2; _; ) {
                      var R = 1 << 31 - ge(_);
                      w.entanglements[1] |= R, _ &= ~R;
                    }
                    kn(f), (Ve & 6) === 0 && (ws = Nt() + 500, tl(0));
                  }
                }
                break;
              case 13:
                w = kr(f, 2), w !== null && Wt(w, f, 2), Os(), ef(f, 2);
            }
          if (f = nf(i), f === null && Ic(
            e,
            t,
            i,
            Vs,
            n
          ), f === o) break;
          o = f;
        }
        o !== null && i.stopPropagation();
      } else
        Ic(
          e,
          t,
          i,
          null,
          n
        );
    }
  }
  function nf(e) {
    return e = su(e), af(e);
  }
  var Vs = null;
  function af(e) {
    if (Vs = null, e = Sr(e), e !== null) {
      var t = c(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = b(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Vs = e, null;
  }
  function Km(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (vi()) {
          case Vt:
            return 2;
          case me:
            return 8;
          case de:
          case Ue:
            return 32;
          case He:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var rf = !1, Ta = null, wa = null, Na = null, ul = /* @__PURE__ */ new Map(), cl = /* @__PURE__ */ new Map(), Oa = [], G0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Jm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ta = null;
        break;
      case "dragenter":
      case "dragleave":
        wa = null;
        break;
      case "mouseover":
      case "mouseout":
        Na = null;
        break;
      case "pointerover":
      case "pointerout":
        ul.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        cl.delete(t.pointerId);
    }
  }
  function fl(e, t, n, i, o, f) {
    return e === null || e.nativeEvent !== f ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: i,
      nativeEvent: f,
      targetContainers: [o]
    }, t !== null && (t = _r(t), t !== null && Zm(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function V0(e, t, n, i, o) {
    switch (t) {
      case "focusin":
        return Ta = fl(
          Ta,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "dragenter":
        return wa = fl(
          wa,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "mouseover":
        return Na = fl(
          Na,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "pointerover":
        var f = o.pointerId;
        return ul.set(
          f,
          fl(
            ul.get(f) || null,
            e,
            t,
            n,
            i,
            o
          )
        ), !0;
      case "gotpointercapture":
        return f = o.pointerId, cl.set(
          f,
          fl(
            cl.get(f) || null,
            e,
            t,
            n,
            i,
            o
          )
        ), !0;
    }
    return !1;
  }
  function Wm(e) {
    var t = Sr(e.target);
    if (t !== null) {
      var n = c(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = b(n), t !== null) {
            e.blockedOn = t, zy(e.priority, function() {
              if (n.tag === 13) {
                var i = Jt();
                i = Ko(i);
                var o = kr(n, i);
                o !== null && Wt(o, n, i), ef(n, i);
              }
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Ys(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = nf(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var i = new n.constructor(
          n.type,
          n
        );
        lu = i, n.target.dispatchEvent(i), lu = null;
      } else
        return t = _r(n), t !== null && Zm(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function $m(e, t, n) {
    Ys(e) && n.delete(t);
  }
  function Y0() {
    rf = !1, Ta !== null && Ys(Ta) && (Ta = null), wa !== null && Ys(wa) && (wa = null), Na !== null && Ys(Na) && (Na = null), ul.forEach($m), cl.forEach($m);
  }
  function Fs(e, t) {
    e.blockedOn === t && (e.blockedOn = null, rf || (rf = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      Y0
    )));
  }
  var Xs = null;
  function eg(e) {
    Xs !== e && (Xs = e, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      function() {
        Xs === e && (Xs = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], i = e[t + 1], o = e[t + 2];
          if (typeof i != "function") {
            if (af(i || n) === null)
              continue;
            break;
          }
          var f = _r(n);
          f !== null && (e.splice(t, 3), t -= 3, ac(
            f,
            {
              pending: !0,
              data: o,
              method: n.method,
              action: i
            },
            i,
            o
          ));
        }
      }
    ));
  }
  function hl(e) {
    function t(R) {
      return Fs(R, e);
    }
    Ta !== null && Fs(Ta, e), wa !== null && Fs(wa, e), Na !== null && Fs(Na, e), ul.forEach(t), cl.forEach(t);
    for (var n = 0; n < Oa.length; n++) {
      var i = Oa[n];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < Oa.length && (n = Oa[0], n.blockedOn === null); )
      Wm(n), n.blockedOn === null && Oa.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (i = 0; i < n.length; i += 3) {
        var o = n[i], f = n[i + 1], _ = o[jt] || null;
        if (typeof f == "function")
          _ || eg(n);
        else if (_) {
          var w = null;
          if (f && f.hasAttribute("formAction")) {
            if (o = f, _ = f[jt] || null)
              w = _.formAction;
            else if (af(o) !== null) continue;
          } else w = _.action;
          typeof w == "function" ? n[i + 1] = w : (n.splice(i, 3), i -= 3), eg(n);
        }
      }
  }
  function lf(e) {
    this._internalRoot = e;
  }
  Qs.prototype.render = lf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var n = t.current, i = Jt();
    Xm(n, i, e, t, null, null);
  }, Qs.prototype.unmount = lf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Xm(e.current, 2, null, e, null, null), Os(), t[br] = null;
    }
  };
  function Qs(e) {
    this._internalRoot = e;
  }
  Qs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = vh();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Oa.length && t !== 0 && t < Oa[n].priority; n++) ;
      Oa.splice(n, 0, e), n === 0 && Wm(e);
    }
  };
  var tg = a.version;
  if (tg !== "19.1.1")
    throw Error(
      s(
        527,
        tg,
        "19.1.1"
      )
    );
  $.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = d(t), e = e !== null ? p(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var F0 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zs.isDisabled && Zs.supportsFiber)
      try {
        Z = Zs.inject(
          F0
        ), se = Zs;
      } catch {
      }
  }
  return gl.createRoot = function(e, t) {
    if (!u(e)) throw Error(s(299));
    var n = !1, i = "", o = vp, f = yp, _ = bp, w = null;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (_ = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (w = t.unstable_transitionCallbacks)), t = Ym(
      e,
      1,
      !1,
      null,
      null,
      n,
      i,
      o,
      f,
      _,
      w,
      null
    ), e[br] = t.current, qc(e), new lf(t);
  }, gl.hydrateRoot = function(e, t, n) {
    if (!u(e)) throw Error(s(299));
    var i = !1, o = "", f = vp, _ = yp, w = bp, R = null, q = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (f = n.onUncaughtError), n.onCaughtError !== void 0 && (_ = n.onCaughtError), n.onRecoverableError !== void 0 && (w = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (R = n.unstable_transitionCallbacks), n.formState !== void 0 && (q = n.formState)), t = Ym(
      e,
      1,
      !0,
      t,
      n ?? null,
      i,
      o,
      f,
      _,
      w,
      R,
      q
    ), t.context = Fm(null), n = t.current, i = Jt(), i = Ko(i), o = ha(i), o.callback = null, da(n, o, i), n = i, t.current.lanes = n, yi(t, n), kn(t), e[br] = t.current, qc(e), new Qs(t);
  }, gl.version = "19.1.1", gl;
}
var gg;
function x2() {
  if (gg) return cf.exports;
  gg = 1;
  function r() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r);
      } catch (a) {
        console.error(a);
      }
  }
  return r(), cf.exports = _2(), cf.exports;
}
var E2 = x2();
const vg = /* @__PURE__ */ Bv(E2);
var C2 = Object.defineProperty, A2 = (r, a, l) => a in r ? C2(r, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : r[a] = l, T2 = (r, a, l) => A2(r, a + "", l);
class Uv extends Error {
  constructor(a, l) {
    super(a), T2(this, "data"), this.data = l;
  }
  toString() {
    return this.message;
  }
}
async function w2(r, a) {
  const l = SillyTavern.getContext(), s = new FormData();
  s.append("avatar", new Blob([JSON.stringify(r)], { type: "application/json" }), "character.json"), s.append("file_type", "json");
  const u = l.getRequestHeaders();
  delete u["Content-Type"];
  const c = await fetch("/api/characters/import", {
    method: "POST",
    headers: u,
    body: s,
    cache: "no-cache"
  });
  if (!c.ok)
    throw new Uv(c.statusText, c);
  await l.getCharacters();
}
async function N2(r, a) {
  var l;
  const s = SillyTavern.getContext();
  if (!r.avatar)
    throw new Error("`data.avatar` (character filename) is required to save character attributes.");
  r == null || delete r.json_data, (l = r?.data) == null || delete l.json_data;
  const u = s.getRequestHeaders(), c = await fetch("/api/characters/merge-attributes", {
    method: "POST",
    headers: u,
    body: JSON.stringify(r),
    cache: "no-cache"
  });
  if (!c.ok) {
    const b = await c.json().catch(() => ({ message: c.statusText }));
    throw new Uv(b.message || `Request failed with status ${c.status}`, c);
  }
  await s.getCharacters();
}
var O2 = Object.defineProperty, D2 = (r, a, l) => a in r ? O2(r, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : r[a] = l, yg = (r, a, l) => D2(r, typeof a != "symbol" ? a + "" : a, l);
class M2 {
  constructor(a, l) {
    yg(this, "settingsKey"), yg(this, "defaultSettings"), this.settingsKey = a, this.defaultSettings = l;
  }
  /**
   * If defaultSettings has "version" and "formatVersion" properties, they will be used to track version and format version changes.
   *
   * For example, if you want to show a notification when a new version is released, you can check "result.version.changed".
   *
   * @param [options={}]
   * @param [options.strategy='recursive'] - 'recursive' will migrate old settings with the default settings.
   *
   * For complex settings, you can specify a custom migration strategy. For example, if you change the field name from "old" to "new", you can use:
   * @example
   * [
   *   {
   *     from: 'FORMAT-0.1.0',
   *     to: 'FORMAT-0.1.1',
   *     action: (previous) => {
   *       const data = {
   *         ...previous,
   *         new: previous.old,
   *       };
   *       delete data.old;
   *       return data;
   *     },
   *   },
   * ]
   */
  async initializeSettings(a = {}) {
    const { strategy: l = "recursive" } = a, s = this.defaultSettings.version, u = this.defaultSettings.formatVersion, c = SillyTavern.getContext().extensionSettings[this.settingsKey], b = {
      version: {
        changed: !1,
        new: s ?? ""
      },
      formatVersion: {
        changed: !1,
        new: u ?? ""
      },
      oldSettings: null,
      newSettings: this.defaultSettings
    };
    if (!c)
      return SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings(), b;
    const m = {
      ...b,
      oldSettings: structuredClone(c),
      version: {
        changed: !1,
        old: c.version,
        new: c.version
      },
      formatVersion: {
        changed: !1,
        old: c.formatVersion,
        new: c.formatVersion
      }
    };
    if (l === "recursive") {
      let d = function(p, v) {
        let S = !1;
        for (const g of Object.keys(v))
          p[g] === void 0 ? (p[g] = v[g], S = !0) : typeof v[g] == "object" && v[g] !== null && (p[g] = p[g] || {}, d(p[g], v[g]) && (S = !0));
        return S;
      };
      s && c.version !== s && (m.version.changed = !0, m.version.new = s, c.version = s), u && u !== "*" && c.formatVersion !== u && (m.formatVersion.changed = !0, m.formatVersion.new = u, c.formatVersion = u), (d(c, this.defaultSettings) || m.version.changed || m.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(l)) {
      s && !c.version && (c.version = s, m.version.changed = !0, m.version.new = s), u && !c.formatVersion && (c.formatVersion = u, m.formatVersion.changed = !0, m.formatVersion.new = u);
      let d = structuredClone(c), p = c.formatVersion;
      try {
        let v;
        do {
          v = !1;
          let S = l.find((g) => g.from === p);
          if (S && S.to > p)
            d = await S.action(d), p = S.to, d.formatVersion = S.to, v = !0;
          else
            for (const g of l)
              if (g.from === "*" && g.to > p && p !== g.to) {
                d = await g.action(d), p = g.to, d.formatVersion = g.to, v = !0;
                break;
              }
        } while (v);
        if (p !== c.formatVersion) {
          m.formatVersion.changed = !0, m.formatVersion.new = p;
          const S = this.defaultSettings.version;
          S && (d.version = S);
        }
        if (m.formatVersion.changed) {
          for (const S of Object.keys(c))
            delete c[S];
          Object.assign(c, d), this.saveSettings();
        }
      } catch (v) {
        throw console.error("Failed to apply version changes:", v), new Error(`Version migration failed: ${v instanceof Error ? v.message : v}`, {
          cause: v
        });
      }
    }
    return m.newSettings = c, m;
  }
  getSettings() {
    return SillyTavern.getContext().extensionSettings[this.settingsKey];
  }
  updateSetting(a, l) {
    SillyTavern.getContext().extensionSettings[this.settingsKey][a] = l, this.saveSettings();
  }
  saveSettings() {
    SillyTavern.getContext().saveSettingsDebounced();
  }
  resetSettings() {
    SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings();
  }
}
function ia(r) {
  return Array.isArray ? Array.isArray(r) : qv(r) === "[object Array]";
}
function R2(r) {
  if (typeof r == "string")
    return r;
  let a = r + "";
  return a == "0" && 1 / r == -1 / 0 ? "-0" : a;
}
function k2(r) {
  return r == null ? "" : R2(r);
}
function Bn(r) {
  return typeof r == "string";
}
function Hv(r) {
  return typeof r == "number";
}
function j2(r) {
  return r === !0 || r === !1 || L2(r) && qv(r) == "[object Boolean]";
}
function Pv(r) {
  return typeof r == "object";
}
function L2(r) {
  return Pv(r) && r !== null;
}
function nn(r) {
  return r != null;
}
function pf(r) {
  return !r.trim().length;
}
function qv(r) {
  return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
}
const B2 = "Incorrect 'index' type", z2 = (r) => `Invalid value for key ${r}`, U2 = (r) => `Pattern length exceeds max of ${r}.`, H2 = (r) => `Missing ${r} property in key`, P2 = (r) => `Property 'weight' in key '${r}' must be a positive integer`, bg = Object.prototype.hasOwnProperty;
class q2 {
  constructor(a) {
    this._keys = [], this._keyMap = {};
    let l = 0;
    a.forEach((s) => {
      let u = Iv(s);
      this._keys.push(u), this._keyMap[u.id] = u, l += u.weight;
    }), this._keys.forEach((s) => {
      s.weight /= l;
    });
  }
  get(a) {
    return this._keyMap[a];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function Iv(r) {
  let a = null, l = null, s = null, u = 1, c = null;
  if (Bn(r) || ia(r))
    s = r, a = Sg(r), l = Uf(r);
  else {
    if (!bg.call(r, "name"))
      throw new Error(H2("name"));
    const b = r.name;
    if (s = b, bg.call(r, "weight") && (u = r.weight, u <= 0))
      throw new Error(P2(b));
    a = Sg(b), l = Uf(b), c = r.getFn;
  }
  return { path: a, id: l, weight: u, src: s, getFn: c };
}
function Sg(r) {
  return ia(r) ? r : r.split(".");
}
function Uf(r) {
  return ia(r) ? r.join(".") : r;
}
function I2(r, a) {
  let l = [], s = !1;
  const u = (c, b, m) => {
    if (nn(c))
      if (!b[m])
        l.push(c);
      else {
        let d = b[m];
        const p = c[d];
        if (!nn(p))
          return;
        if (m === b.length - 1 && (Bn(p) || Hv(p) || j2(p)))
          l.push(k2(p));
        else if (ia(p)) {
          s = !0;
          for (let v = 0, S = p.length; v < S; v += 1)
            u(p[v], b, m + 1);
        } else b.length && u(p, b, m + 1);
      }
  };
  return u(r, Bn(a) ? a.split(".") : a, 0), s ? l : l[0];
}
const G2 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, V2 = {
  // When `true`, the algorithm continues searching to the end of the input even if a perfect
  // match is found before the end of the same input.
  isCaseSensitive: !1,
  // When `true`, the algorithm will ignore diacritics (accents) in comparisons
  ignoreDiacritics: !1,
  // When true, the matching function will continue to the end of a search pattern even if
  includeScore: !1,
  // List of properties that will be searched. This also supports nested properties.
  keys: [],
  // Whether to sort the result list, by score
  shouldSort: !0,
  // Default sort function: sort by ascending score, ascending index
  sortFn: (r, a) => r.score === a.score ? r.idx < a.idx ? -1 : 1 : r.score < a.score ? -1 : 1
}, Y2 = {
  // Approximately where in the text is the pattern expected to be found?
  location: 0,
  // At what point does the match algorithm give up. A threshold of '0.0' requires a perfect match
  // (of both letters and location), a threshold of '1.0' would match anything.
  threshold: 0.6,
  // Determines how close the match must be to the fuzzy location (specified above).
  // An exact letter match which is 'distance' characters away from the fuzzy location
  // would score as a complete mismatch. A distance of '0' requires the match be at
  // the exact location specified, a threshold of '1000' would require a perfect match
  // to be within 800 characters of the fuzzy location to be found using a 0.8 threshold.
  distance: 100
}, F2 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: I2,
  // When `true`, search will ignore `location` and `distance`, so it won't matter
  // where in the string the pattern appears.
  // More info: https://fusejs.io/concepts/scoring-theory.html#fuzziness-score
  ignoreLocation: !1,
  // When `true`, the calculation for the relevance score (used for sorting) will
  // ignore the field-length norm.
  // More info: https://fusejs.io/concepts/scoring-theory.html#field-length-norm
  ignoreFieldNorm: !1,
  // The weight to determine how much field length norm effects scoring.
  fieldNormWeight: 1
};
var Ee = {
  ...V2,
  ...G2,
  ...Y2,
  ...F2
};
const X2 = /[^ ]+/g;
function Q2(r = 1, a = 3) {
  const l = /* @__PURE__ */ new Map(), s = Math.pow(10, a);
  return {
    get(u) {
      const c = u.match(X2).length;
      if (l.has(c))
        return l.get(c);
      const b = 1 / Math.pow(c, 0.5 * r), m = parseFloat(Math.round(b * s) / s);
      return l.set(c, m), m;
    },
    clear() {
      l.clear();
    }
  };
}
class ih {
  constructor({
    getFn: a = Ee.getFn,
    fieldNormWeight: l = Ee.fieldNormWeight
  } = {}) {
    this.norm = Q2(l, 3), this.getFn = a, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(a = []) {
    this.docs = a;
  }
  setIndexRecords(a = []) {
    this.records = a;
  }
  setKeys(a = []) {
    this.keys = a, this._keysMap = {}, a.forEach((l, s) => {
      this._keysMap[l.id] = s;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, Bn(this.docs[0]) ? this.docs.forEach((a, l) => {
      this._addString(a, l);
    }) : this.docs.forEach((a, l) => {
      this._addObject(a, l);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(a) {
    const l = this.size();
    Bn(a) ? this._addString(a, l) : this._addObject(a, l);
  }
  // Removes the doc at the specified index of the index
  removeAt(a) {
    this.records.splice(a, 1);
    for (let l = a, s = this.size(); l < s; l += 1)
      this.records[l].i -= 1;
  }
  getValueForItemAtKeyId(a, l) {
    return a[this._keysMap[l]];
  }
  size() {
    return this.records.length;
  }
  _addString(a, l) {
    if (!nn(a) || pf(a))
      return;
    let s = {
      v: a,
      i: l,
      n: this.norm.get(a)
    };
    this.records.push(s);
  }
  _addObject(a, l) {
    let s = { i: l, $: {} };
    this.keys.forEach((u, c) => {
      let b = u.getFn ? u.getFn(a) : this.getFn(a, u.path);
      if (nn(b)) {
        if (ia(b)) {
          let m = [];
          const d = [{ nestedArrIndex: -1, value: b }];
          for (; d.length; ) {
            const { nestedArrIndex: p, value: v } = d.pop();
            if (nn(v))
              if (Bn(v) && !pf(v)) {
                let S = {
                  v,
                  i: p,
                  n: this.norm.get(v)
                };
                m.push(S);
              } else ia(v) && v.forEach((S, g) => {
                d.push({
                  nestedArrIndex: g,
                  value: S
                });
              });
          }
          s.$[c] = m;
        } else if (Bn(b) && !pf(b)) {
          let m = {
            v: b,
            n: this.norm.get(b)
          };
          s.$[c] = m;
        }
      }
    }), this.records.push(s);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function Gv(r, a, { getFn: l = Ee.getFn, fieldNormWeight: s = Ee.fieldNormWeight } = {}) {
  const u = new ih({ getFn: l, fieldNormWeight: s });
  return u.setKeys(r.map(Iv)), u.setSources(a), u.create(), u;
}
function Z2(r, { getFn: a = Ee.getFn, fieldNormWeight: l = Ee.fieldNormWeight } = {}) {
  const { keys: s, records: u } = r, c = new ih({ getFn: a, fieldNormWeight: l });
  return c.setKeys(s), c.setIndexRecords(u), c;
}
function Ks(r, {
  errors: a = 0,
  currentLocation: l = 0,
  expectedLocation: s = 0,
  distance: u = Ee.distance,
  ignoreLocation: c = Ee.ignoreLocation
} = {}) {
  const b = a / r.length;
  if (c)
    return b;
  const m = Math.abs(s - l);
  return u ? b + m / u : m ? 1 : b;
}
function K2(r = [], a = Ee.minMatchCharLength) {
  let l = [], s = -1, u = -1, c = 0;
  for (let b = r.length; c < b; c += 1) {
    let m = r[c];
    m && s === -1 ? s = c : !m && s !== -1 && (u = c - 1, u - s + 1 >= a && l.push([s, u]), s = -1);
  }
  return r[c - 1] && c - s >= a && l.push([s, c - 1]), l;
}
const hr = 32;
function J2(r, a, l, {
  location: s = Ee.location,
  distance: u = Ee.distance,
  threshold: c = Ee.threshold,
  findAllMatches: b = Ee.findAllMatches,
  minMatchCharLength: m = Ee.minMatchCharLength,
  includeMatches: d = Ee.includeMatches,
  ignoreLocation: p = Ee.ignoreLocation
} = {}) {
  if (a.length > hr)
    throw new Error(U2(hr));
  const v = a.length, S = r.length, g = Math.max(0, Math.min(s, S));
  let y = c, h = g;
  const x = m > 1 || d, C = x ? Array(S) : [];
  let O;
  for (; (O = r.indexOf(a, h)) > -1; ) {
    let L = Ks(a, {
      currentLocation: O,
      expectedLocation: g,
      distance: u,
      ignoreLocation: p
    });
    if (y = Math.min(L, y), h = O + v, x) {
      let G = 0;
      for (; G < v; )
        C[O + G] = 1, G += 1;
    }
  }
  h = -1;
  let A = [], D = 1, E = v + S;
  const T = 1 << v - 1;
  for (let L = 0; L < v; L += 1) {
    let G = 0, ee = E;
    for (; G < ee; )
      Ks(a, {
        errors: L,
        currentLocation: g + ee,
        expectedLocation: g,
        distance: u,
        ignoreLocation: p
      }) <= y ? G = ee : E = ee, ee = Math.floor((E - G) / 2 + G);
    E = ee;
    let P = Math.max(1, g - ee + 1), Y = b ? S : Math.min(g + ee, S) + v, X = Array(Y + 2);
    X[Y + 1] = (1 << L) - 1;
    for (let fe = Y; fe >= P; fe -= 1) {
      let ue = fe - 1, U = l[r.charAt(ue)];
      if (x && (C[ue] = +!!U), X[fe] = (X[fe + 1] << 1 | 1) & U, L && (X[fe] |= (A[fe + 1] | A[fe]) << 1 | 1 | A[fe + 1]), X[fe] & T && (D = Ks(a, {
        errors: L,
        currentLocation: ue,
        expectedLocation: g,
        distance: u,
        ignoreLocation: p
      }), D <= y)) {
        if (y = D, h = ue, h <= g)
          break;
        P = Math.max(1, 2 * g - h);
      }
    }
    if (Ks(a, {
      errors: L + 1,
      currentLocation: g,
      expectedLocation: g,
      distance: u,
      ignoreLocation: p
    }) > y)
      break;
    A = X;
  }
  const j = {
    isMatch: h >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, D)
  };
  if (x) {
    const L = K2(C, m);
    L.length ? d && (j.indices = L) : j.isMatch = !1;
  }
  return j;
}
function W2(r) {
  let a = {};
  for (let l = 0, s = r.length; l < s; l += 1) {
    const u = r.charAt(l);
    a[u] = (a[u] || 0) | 1 << s - l - 1;
  }
  return a;
}
const Uo = String.prototype.normalize ? ((r) => r.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((r) => r);
class Vv {
  constructor(a, {
    location: l = Ee.location,
    threshold: s = Ee.threshold,
    distance: u = Ee.distance,
    includeMatches: c = Ee.includeMatches,
    findAllMatches: b = Ee.findAllMatches,
    minMatchCharLength: m = Ee.minMatchCharLength,
    isCaseSensitive: d = Ee.isCaseSensitive,
    ignoreDiacritics: p = Ee.ignoreDiacritics,
    ignoreLocation: v = Ee.ignoreLocation
  } = {}) {
    if (this.options = {
      location: l,
      threshold: s,
      distance: u,
      includeMatches: c,
      findAllMatches: b,
      minMatchCharLength: m,
      isCaseSensitive: d,
      ignoreDiacritics: p,
      ignoreLocation: v
    }, a = d ? a : a.toLowerCase(), a = p ? Uo(a) : a, this.pattern = a, this.chunks = [], !this.pattern.length)
      return;
    const S = (y, h) => {
      this.chunks.push({
        pattern: y,
        alphabet: W2(y),
        startIndex: h
      });
    }, g = this.pattern.length;
    if (g > hr) {
      let y = 0;
      const h = g % hr, x = g - h;
      for (; y < x; )
        S(this.pattern.substr(y, hr), y), y += hr;
      if (h) {
        const C = g - hr;
        S(this.pattern.substr(C), C);
      }
    } else
      S(this.pattern, 0);
  }
  searchIn(a) {
    const { isCaseSensitive: l, ignoreDiacritics: s, includeMatches: u } = this.options;
    if (a = l ? a : a.toLowerCase(), a = s ? Uo(a) : a, this.pattern === a) {
      let x = {
        isMatch: !0,
        score: 0
      };
      return u && (x.indices = [[0, a.length - 1]]), x;
    }
    const {
      location: c,
      distance: b,
      threshold: m,
      findAllMatches: d,
      minMatchCharLength: p,
      ignoreLocation: v
    } = this.options;
    let S = [], g = 0, y = !1;
    this.chunks.forEach(({ pattern: x, alphabet: C, startIndex: O }) => {
      const { isMatch: A, score: D, indices: E } = J2(a, x, C, {
        location: c + O,
        distance: b,
        threshold: m,
        findAllMatches: d,
        minMatchCharLength: p,
        includeMatches: u,
        ignoreLocation: v
      });
      A && (y = !0), g += D, A && E && (S = [...S, ...E]);
    });
    let h = {
      isMatch: y,
      score: y ? g / this.chunks.length : 1
    };
    return y && u && (h.indices = S), h;
  }
}
class Ua {
  constructor(a) {
    this.pattern = a;
  }
  static isMultiMatch(a) {
    return _g(a, this.multiRegex);
  }
  static isSingleMatch(a) {
    return _g(a, this.singleRegex);
  }
  search() {
  }
}
function _g(r, a) {
  const l = r.match(a);
  return l ? l[1] : null;
}
class $2 extends Ua {
  constructor(a) {
    super(a);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(a) {
    const l = a === this.pattern;
    return {
      isMatch: l,
      score: l ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class eb extends Ua {
  constructor(a) {
    super(a);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(a) {
    const s = a.indexOf(this.pattern) === -1;
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: [0, a.length - 1]
    };
  }
}
class tb extends Ua {
  constructor(a) {
    super(a);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(a) {
    const l = a.startsWith(this.pattern);
    return {
      isMatch: l,
      score: l ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class nb extends Ua {
  constructor(a) {
    super(a);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(a) {
    const l = !a.startsWith(this.pattern);
    return {
      isMatch: l,
      score: l ? 0 : 1,
      indices: [0, a.length - 1]
    };
  }
}
class ab extends Ua {
  constructor(a) {
    super(a);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(a) {
    const l = a.endsWith(this.pattern);
    return {
      isMatch: l,
      score: l ? 0 : 1,
      indices: [a.length - this.pattern.length, a.length - 1]
    };
  }
}
class rb extends Ua {
  constructor(a) {
    super(a);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(a) {
    const l = !a.endsWith(this.pattern);
    return {
      isMatch: l,
      score: l ? 0 : 1,
      indices: [0, a.length - 1]
    };
  }
}
class Yv extends Ua {
  constructor(a, {
    location: l = Ee.location,
    threshold: s = Ee.threshold,
    distance: u = Ee.distance,
    includeMatches: c = Ee.includeMatches,
    findAllMatches: b = Ee.findAllMatches,
    minMatchCharLength: m = Ee.minMatchCharLength,
    isCaseSensitive: d = Ee.isCaseSensitive,
    ignoreDiacritics: p = Ee.ignoreDiacritics,
    ignoreLocation: v = Ee.ignoreLocation
  } = {}) {
    super(a), this._bitapSearch = new Vv(a, {
      location: l,
      threshold: s,
      distance: u,
      includeMatches: c,
      findAllMatches: b,
      minMatchCharLength: m,
      isCaseSensitive: d,
      ignoreDiacritics: p,
      ignoreLocation: v
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(a) {
    return this._bitapSearch.searchIn(a);
  }
}
class Fv extends Ua {
  constructor(a) {
    super(a);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(a) {
    let l = 0, s;
    const u = [], c = this.pattern.length;
    for (; (s = a.indexOf(this.pattern, l)) > -1; )
      l = s + c, u.push([s, l - 1]);
    const b = !!u.length;
    return {
      isMatch: b,
      score: b ? 0 : 1,
      indices: u
    };
  }
}
const Hf = [
  $2,
  Fv,
  tb,
  nb,
  rb,
  ab,
  eb,
  Yv
], xg = Hf.length, ib = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, lb = "|";
function sb(r, a = {}) {
  return r.split(lb).map((l) => {
    let s = l.trim().split(ib).filter((c) => c && !!c.trim()), u = [];
    for (let c = 0, b = s.length; c < b; c += 1) {
      const m = s[c];
      let d = !1, p = -1;
      for (; !d && ++p < xg; ) {
        const v = Hf[p];
        let S = v.isMultiMatch(m);
        S && (u.push(new v(S, a)), d = !0);
      }
      if (!d)
        for (p = -1; ++p < xg; ) {
          const v = Hf[p];
          let S = v.isSingleMatch(m);
          if (S) {
            u.push(new v(S, a));
            break;
          }
        }
    }
    return u;
  });
}
const ob = /* @__PURE__ */ new Set([Yv.type, Fv.type]);
class ub {
  constructor(a, {
    isCaseSensitive: l = Ee.isCaseSensitive,
    ignoreDiacritics: s = Ee.ignoreDiacritics,
    includeMatches: u = Ee.includeMatches,
    minMatchCharLength: c = Ee.minMatchCharLength,
    ignoreLocation: b = Ee.ignoreLocation,
    findAllMatches: m = Ee.findAllMatches,
    location: d = Ee.location,
    threshold: p = Ee.threshold,
    distance: v = Ee.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: l,
      ignoreDiacritics: s,
      includeMatches: u,
      minMatchCharLength: c,
      findAllMatches: m,
      ignoreLocation: b,
      location: d,
      threshold: p,
      distance: v
    }, a = l ? a : a.toLowerCase(), a = s ? Uo(a) : a, this.pattern = a, this.query = sb(this.pattern, this.options);
  }
  static condition(a, l) {
    return l.useExtendedSearch;
  }
  searchIn(a) {
    const l = this.query;
    if (!l)
      return {
        isMatch: !1,
        score: 1
      };
    const { includeMatches: s, isCaseSensitive: u, ignoreDiacritics: c } = this.options;
    a = u ? a : a.toLowerCase(), a = c ? Uo(a) : a;
    let b = 0, m = [], d = 0;
    for (let p = 0, v = l.length; p < v; p += 1) {
      const S = l[p];
      m.length = 0, b = 0;
      for (let g = 0, y = S.length; g < y; g += 1) {
        const h = S[g], { isMatch: x, indices: C, score: O } = h.search(a);
        if (x) {
          if (b += 1, d += O, s) {
            const A = h.constructor.type;
            ob.has(A) ? m = [...m, ...C] : m.push(C);
          }
        } else {
          d = 0, b = 0, m.length = 0;
          break;
        }
      }
      if (b) {
        let g = {
          isMatch: !0,
          score: d / b
        };
        return s && (g.indices = m), g;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const Pf = [];
function cb(...r) {
  Pf.push(...r);
}
function qf(r, a) {
  for (let l = 0, s = Pf.length; l < s; l += 1) {
    let u = Pf[l];
    if (u.condition(r, a))
      return new u(r, a);
  }
  return new Vv(r, a);
}
const Ho = {
  AND: "$and",
  OR: "$or"
}, If = {
  PATH: "$path",
  PATTERN: "$val"
}, Gf = (r) => !!(r[Ho.AND] || r[Ho.OR]), fb = (r) => !!r[If.PATH], hb = (r) => !ia(r) && Pv(r) && !Gf(r), Eg = (r) => ({
  [Ho.AND]: Object.keys(r).map((a) => ({
    [a]: r[a]
  }))
});
function Xv(r, a, { auto: l = !0 } = {}) {
  const s = (u) => {
    let c = Object.keys(u);
    const b = fb(u);
    if (!b && c.length > 1 && !Gf(u))
      return s(Eg(u));
    if (hb(u)) {
      const d = b ? u[If.PATH] : c[0], p = b ? u[If.PATTERN] : u[d];
      if (!Bn(p))
        throw new Error(z2(d));
      const v = {
        keyId: Uf(d),
        pattern: p
      };
      return l && (v.searcher = qf(p, a)), v;
    }
    let m = {
      children: [],
      operator: c[0]
    };
    return c.forEach((d) => {
      const p = u[d];
      ia(p) && p.forEach((v) => {
        m.children.push(s(v));
      });
    }), m;
  };
  return Gf(r) || (r = Eg(r)), s(r);
}
function db(r, { ignoreFieldNorm: a = Ee.ignoreFieldNorm }) {
  r.forEach((l) => {
    let s = 1;
    l.matches.forEach(({ key: u, norm: c, score: b }) => {
      const m = u ? u.weight : null;
      s *= Math.pow(
        b === 0 && m ? Number.EPSILON : b,
        (m || 1) * (a ? 1 : c)
      );
    }), l.score = s;
  });
}
function pb(r, a) {
  const l = r.matches;
  a.matches = [], nn(l) && l.forEach((s) => {
    if (!nn(s.indices) || !s.indices.length)
      return;
    const { indices: u, value: c } = s;
    let b = {
      indices: u,
      value: c
    };
    s.key && (b.key = s.key.src), s.idx > -1 && (b.refIndex = s.idx), a.matches.push(b);
  });
}
function mb(r, a) {
  a.score = r.score;
}
function gb(r, a, {
  includeMatches: l = Ee.includeMatches,
  includeScore: s = Ee.includeScore
} = {}) {
  const u = [];
  return l && u.push(pb), s && u.push(mb), r.map((c) => {
    const { idx: b } = c, m = {
      item: a[b],
      refIndex: b
    };
    return u.length && u.forEach((d) => {
      d(c, m);
    }), m;
  });
}
class mi {
  constructor(a, l = {}, s) {
    this.options = { ...Ee, ...l }, this.options.useExtendedSearch, this._keyStore = new q2(this.options.keys), this.setCollection(a, s);
  }
  setCollection(a, l) {
    if (this._docs = a, l && !(l instanceof ih))
      throw new Error(B2);
    this._myIndex = l || Gv(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(a) {
    nn(a) && (this._docs.push(a), this._myIndex.add(a));
  }
  remove(a = () => !1) {
    const l = [];
    for (let s = 0, u = this._docs.length; s < u; s += 1) {
      const c = this._docs[s];
      a(c, s) && (this.removeAt(s), s -= 1, u -= 1, l.push(c));
    }
    return l;
  }
  removeAt(a) {
    this._docs.splice(a, 1), this._myIndex.removeAt(a);
  }
  getIndex() {
    return this._myIndex;
  }
  search(a, { limit: l = -1 } = {}) {
    const {
      includeMatches: s,
      includeScore: u,
      shouldSort: c,
      sortFn: b,
      ignoreFieldNorm: m
    } = this.options;
    let d = Bn(a) ? Bn(this._docs[0]) ? this._searchStringList(a) : this._searchObjectList(a) : this._searchLogical(a);
    return db(d, { ignoreFieldNorm: m }), c && d.sort(b), Hv(l) && l > -1 && (d = d.slice(0, l)), gb(d, this._docs, {
      includeMatches: s,
      includeScore: u
    });
  }
  _searchStringList(a) {
    const l = qf(a, this.options), { records: s } = this._myIndex, u = [];
    return s.forEach(({ v: c, i: b, n: m }) => {
      if (!nn(c))
        return;
      const { isMatch: d, score: p, indices: v } = l.searchIn(c);
      d && u.push({
        item: c,
        idx: b,
        matches: [{ score: p, value: c, norm: m, indices: v }]
      });
    }), u;
  }
  _searchLogical(a) {
    const l = Xv(a, this.options), s = (m, d, p) => {
      if (!m.children) {
        const { keyId: S, searcher: g } = m, y = this._findMatches({
          key: this._keyStore.get(S),
          value: this._myIndex.getValueForItemAtKeyId(d, S),
          searcher: g
        });
        return y && y.length ? [
          {
            idx: p,
            item: d,
            matches: y
          }
        ] : [];
      }
      const v = [];
      for (let S = 0, g = m.children.length; S < g; S += 1) {
        const y = m.children[S], h = s(y, d, p);
        if (h.length)
          v.push(...h);
        else if (m.operator === Ho.AND)
          return [];
      }
      return v;
    }, u = this._myIndex.records, c = {}, b = [];
    return u.forEach(({ $: m, i: d }) => {
      if (nn(m)) {
        let p = s(l, m, d);
        p.length && (c[d] || (c[d] = { idx: d, item: m, matches: [] }, b.push(c[d])), p.forEach(({ matches: v }) => {
          c[d].matches.push(...v);
        }));
      }
    }), b;
  }
  _searchObjectList(a) {
    const l = qf(a, this.options), { keys: s, records: u } = this._myIndex, c = [];
    return u.forEach(({ $: b, i: m }) => {
      if (!nn(b))
        return;
      let d = [];
      s.forEach((p, v) => {
        d.push(
          ...this._findMatches({
            key: p,
            value: b[v],
            searcher: l
          })
        );
      }), d.length && c.push({
        idx: m,
        item: b,
        matches: d
      });
    }), c;
  }
  _findMatches({ key: a, value: l, searcher: s }) {
    if (!nn(l))
      return [];
    let u = [];
    if (ia(l))
      l.forEach(({ v: c, i: b, n: m }) => {
        if (!nn(c))
          return;
        const { isMatch: d, score: p, indices: v } = s.searchIn(c);
        d && u.push({
          score: p,
          key: a,
          value: c,
          idx: b,
          norm: m,
          indices: v
        });
      });
    else {
      const { v: c, n: b } = l, { isMatch: m, score: d, indices: p } = s.searchIn(c);
      m && u.push({ score: d, key: a, value: c, norm: b, indices: p });
    }
    return u;
  }
}
mi.version = "7.1.0";
mi.createIndex = Gv;
mi.parseIndex = Z2;
mi.config = Ee;
mi.parseQuery = Xv;
cb(ub);
async function vb(r, ...a) {
  await SillyTavern.getContext().SlashCommandParser.commands[r].callback(...a);
}
async function Ae(r, a, { escapeHtml: l = !0 } = {}) {
  await vb("echo", { severity: r, escapeHtml: (!!l).toString() }, a);
}
function mf(r) {
  return J0(r);
}
function Cg(r, a) {
  return Z0(r, a);
}
function Js(r, a, l) {
  return K0(r, a, l);
}
function yb(r, a, l) {
  return a2(r, a, l);
}
function bb(r, a) {
  return r2(r, a);
}
function Sb(r, {
  customStoryString: a,
  customInstructSettings: l
} = {}) {
  return Q0(r, { customStoryString: a, customInstructSettings: l });
}
function sr(r) {
  return c2(r);
}
function _b() {
  return {
    prompt: dl[pl.prompt],
    interval: dl[pl.interval],
    position: dl[pl.position],
    depth: dl[pl.depth],
    role: dl[pl.role]
  };
}
function xb(r, a) {
  return h2(r, a);
}
function Eb({
  name2: r,
  charDescription: a,
  charPersonality: l,
  Scenario: s,
  worldInfoBefore: u,
  worldInfoAfter: c,
  bias: b,
  type: m,
  quietPrompt: d,
  quietImage: p,
  extensionPrompts: v,
  cyclePrompt: S,
  systemPromptOverride: g,
  jailbreakPromptOverride: y,
  personaDescription: h,
  messages: x,
  messageExamples: C
}, O) {
  return f2(
    {
      name2: r,
      charDescription: a,
      charPersonality: l,
      Scenario: s,
      worldInfoBefore: u,
      worldInfoAfter: c,
      bias: b,
      type: m,
      quietPrompt: d,
      quietImage: p,
      cyclePrompt: S,
      systemPromptOverride: g,
      jailbreakPromptOverride: y,
      personaDescription: h,
      extensionPrompts: v,
      messages: x,
      messageExamples: C
    },
    O
  );
}
function Cb(r) {
  return l2(r);
}
function Ab(r) {
  return s2(r);
}
function Tb(r, a, {
  characterOverride: l,
  isMarkdown: s,
  isPrompt: u,
  isEdit: c,
  depth: b
}) {
  return d2(r, a, { characterOverride: l, isMarkdown: s, isPrompt: u, isEdit: c, depth: b });
}
async function wb(r, a) {
  return await i2(r, a);
}
function Ag(r, {
  wiFormat: a
} = {}) {
  return o2(r, { wiFormat: a });
}
function vl(r) {
  return u2(r);
}
function Nb(r, a) {
  return e2(r, a);
}
class Ob {
  /**
   * Encodes a string into a sequence of tokens using a simple heuristic.
   * This is a placeholder for a real tokenizer.
   */
  encode(a) {
    const l = Math.ceil(a.length / 4);
    return new Array(l).fill(" ");
  }
  /**
   * Decodes a sequence of tokens back into a string.
   * This is a placeholder and doesn't actually decode.
   */
  decode(a) {
    return a.join("");
  }
}
var Db = Object.defineProperty, Mb = (r, a, l) => a in r ? Db(r, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : r[a] = l, Ws = (r, a, l) => Mb(r, typeof a != "symbol" ? a + "" : a, l);
class Rb {
  constructor(a) {
    Ws(this, "messages", []), Ws(this, "tokenizer"), Ws(this, "maxContext"), Ws(this, "currentTokenCount", 0), this.tokenizer = new Ob(), this.maxContext = a;
  }
  getTokenCount(a) {
    var l, s;
    return a.content ? ((s = (l = a.source) == null ? void 0 : l.extra) == null ? void 0 : s.token_count) ?? this.tokenizer.encode(a.content).length : 0;
  }
  canFit(a) {
    return this.currentTokenCount + this.getTokenCount(a) <= this.maxContext;
  }
  add(a) {
    if (!a.content) return !0;
    const l = this.getTokenCount(a);
    return this.currentTokenCount + l > this.maxContext ? !1 : (this.messages.push(a), this.currentTokenCount += l, !0);
  }
  addFront(a) {
    if (!a.content) return !0;
    const l = this.getTokenCount(a);
    return this.currentTokenCount + l > this.maxContext ? !1 : (this.messages.unshift(a), this.currentTokenCount += l, !0);
  }
  addMany(a) {
    const l = a.filter((m) => m.content), s = l.map((m) => this.getTokenCount(m)), u = s.reduce((m, d) => m + d, 0);
    if (this.currentTokenCount + u <= this.maxContext)
      return this.messages.push(...l), this.currentTokenCount += u, !0;
    let c = 0;
    const b = [];
    for (let m = l.length - 1; m >= 0; m--) {
      const d = l[m], p = s[m];
      if (this.currentTokenCount + c + p <= this.maxContext)
        b.unshift(d), c += p;
      else
        break;
    }
    return b.length > 0 && (this.messages.push(...b), this.currentTokenCount += c), b.length === l.length;
  }
  insert(a, l) {
    if (!l.content) return !0;
    const s = this.getTokenCount(l);
    return this.currentTokenCount + s > this.maxContext ? !1 : (this.messages.splice(a, 0, l), this.currentTokenCount += s, !0);
  }
  getMessages() {
    return this.messages;
  }
}
async function kb(r, {
  targetCharacterId: a,
  presetName: l,
  instructName: s,
  contextName: u,
  syspromptName: c,
  maxContext: b,
  includeNames: m,
  ignoreCharacterFields: d,
  ignoreAuthorNote: p,
  ignoreWorldInfo: v,
  messageIndexesBetween: S
} = {}) {
  var g, y, h, x, C, O, A, D, E, T, j, L, G, ee;
  if (!["textgenerationwebui", "openai"].includes(r))
    throw new Error("Unsupported API");
  const P = SillyTavern.getContext();
  let { description: Y, personality: X, persona: oe, scenario: fe, mesExamples: ue, system: U, jailbreak: $ } = d ? {
    description: "",
    personality: "",
    persona: "",
    scenario: "",
    mesExamples: "",
    system: "",
    jailbreak: ""
  } : P.getCharacterCardFields({
    chid: a
  });
  const le = r === "textgenerationwebui" ? (g = P.getPresetManager("instruct")) == null ? void 0 : g.getCompletionPresetByName(s) : void 0, he = !!(le != null && le.enabled);
  let M = Cg(ue, he);
  function F() {
    var me, de;
    if (typeof b == "number")
      return b;
    if (!b || b === "active" || !l)
      return mf();
    if (typeof b == "number")
      return b;
    let Ue;
    if (r === "textgenerationwebui") {
      const He = (me = P.getPresetManager("textgenerationwebui")) == null ? void 0 : me.getCompletionPresetByName(l);
      Ue = He?.max_length;
    } else {
      const He = (de = P.getPresetManager("openai")) == null ? void 0 : de.getCompletionPresetByName(l);
      Ue = He?.openai_max_context;
    }
    return typeof Ue == "number" ? Ue : mf();
  }
  let te = [];
  const re = F();
  if (re <= 0)
    return { result: [], warnings: te };
  const ae = new Rb(re), Oe = P.ToolManager.isToolCallingSupported(), ve = S?.start ?? 0, pt = S != null && S.end ? S.end + 1 : void 0;
  let Le = ve === -1 && pt === 0 ? [] : P.chat.slice(ve, pt).filter((me) => {
    var de;
    return !me.is_system || Oe && Array.isArray((de = me.extra) == null ? void 0 : de.tool_invocations);
  });
  Le = await Promise.all(
    Le.map(async (me, de) => {
      var Ue, He;
      let k = me.mes, J = me.is_user ? rg.USER_INPUT : rg.AI_OUTPUT, Z = { isPrompt: !0, depth: Le.length - de - 1 }, se = Tb(k, J, Z);
      return se = await wb(me, se), (Ue = me?.extra) != null && Ue.append_title && (He = me?.extra) != null && He.title && (se = `${se}

${me.extra.title}`), {
        ...me,
        mes: se,
        index: de
      };
    })
  );
  const Gt = Le.map((me) => t2 ? `${me.name}: ${me.mes}` : me.mes).reverse(), { worldInfoString: gr, worldInfoBefore: vn, worldInfoAfter: Tn, worldInfoExamples: Pa, worldInfoDepth: qa, anBefore: vr, anAfter: Ia } = v ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await P.getWorldInfoPrompt(Gt, re, !1);
  for (const me of Pa) {
    const de = me.content;
    if (de.length === 0)
      continue;
    const Ue = Js(de, na, Ma), He = Cg(Ue, he);
    me.position === n2.before ? M.unshift(...He) : M.push(...He);
  }
  function Nt() {
    const me = [];
    for (let de = Le.length - 1; de >= 0; de--) {
      const Ue = Le[de], He = Ue.name === "System" && !Ue.is_user ? "system" : Ue.is_user ? "user" : "assistant";
      me.unshift({
        role: He,
        content: m && He != "system" ? `${Ue.name}: ${Ue.mes}` : Ue.mes,
        source: Ue
      });
    }
    ae.addMany(me);
  }
  if (r === "textgenerationwebui") {
    const me = [...M];
    M && (M = yb(M, na, Ma));
    const de = (y = P.getPresetManager("sysprompt")) == null ? void 0 : y.getCompletionPresetByName(c);
    de && (U = P.powerUserSettings.prefer_character_prompt && U ? U : Js(de.content, na, Ma), U = he ? bb(
      P.substituteParams(U, na, Ma, de.content),
      le
    ) : U);
    const Ue = {
      description: Y,
      personality: X,
      persona: P.powerUserSettings.persona_description_position == ng.IN_PROMPT ? oe : "",
      scenario: fe,
      system: U,
      char: Ma,
      user: na,
      wiBefore: vn,
      wiAfter: Tn,
      loreBefore: vn,
      loreAfter: Tn,
      mesExamples: M.join(""),
      mesExamplesRaw: me.join("")
    }, He = (h = P.getPresetManager("context")) == null ? void 0 : h.getCompletionPresetByName(u);
    let k = Sb(Ue, {
      customInstructSettings: le,
      customStoryString: He?.story_string
    });
    k && ae.add({ role: "system", content: k, ignoreInstruct: !0 }), Nt();
  } else {
    let me = function(Ot) {
      const kt = qe.find((yr) => yr.identifier === Ot);
      if (kt)
        return kt;
      const Hl = k.prompts.find((yr) => yr.identifier === Ot);
      if (Hl)
        return Hl;
    }, de = Cb(Le), Ue = Ab(M);
    async function He() {
      let [Ot, kt] = await Eb(
        {
          name2: Ma,
          charDescription: Y,
          charPersonality: X,
          Scenario: fe,
          worldInfoBefore: vn,
          worldInfoAfter: Tn,
          extensionPrompts: P.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: U,
          jailbreakPromptOverride: $,
          personaDescription: oe,
          messages: de,
          messageExamples: Ue
        },
        !1
      );
      ae.addMany(Ot);
    }
    if (!l)
      return te.push("No preset name provided. Using default preset."), await He(), { result: ae.getMessages(), warnings: te };
    const k = (x = P.getPresetManager("openai")) == null ? void 0 : x.getCompletionPresetByName(l);
    if (!k)
      return console.warn(`Preset not found: ${l}. Using current preset.`), te.push(`Preset not found: ${l}. Using current preset.`), He(), { result: ae.getMessages(), warnings: te };
    let J = (C = k.prompt_order) == null ? void 0 : C.find((Ot) => Ot.character_id === gn);
    if (!J && k.prompt_order && k.prompt_order.length > 0 && (J = k.prompt_order[k.prompt_order.length - 1]), !J)
      return console.warn(`No prompt order found for preset: ${l}. Using current preset.`), te.push(`No prompt order found for preset: ${l}. Using current preset.`), He(), { result: ae.getMessages(), warnings: te };
    const Z = fe && k.scenario_format ? P.substituteParams(k.scenario_format) : "", se = X && k.personality_format ? P.substituteParams(k.personality_format) : "", ke = P.substituteParams(k.group_nudge_prompt), ge = k.impersonation_prompt ? P.substituteParams(k.impersonation_prompt) : "", qe = [];
    v || qe.push(
      {
        role: "system",
        content: Ag(vn, { wiFormat: k.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: Ag(Tn, { wiFormat: k.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), d || qe.push(
      { role: "system", content: Y, identifier: "charDescription" },
      { role: "system", content: se, identifier: "charPersonality" },
      { role: "system", content: Z, identifier: "scenario" }
    ), qe.push(
      { role: "system", content: ge, identifier: "impersonate" },
      { role: "system", content: ke, identifier: "groupNudge" }
    );
    const Ge = P.extensionPrompts["1_memory"];
    Ge && Ge.value && qe.push({
      role: sr(Ge.role),
      content: Ge.value,
      identifier: "summary",
      position: vl(Ge.position)
    });
    const wn = P.extensionPrompts["2_floating_prompt"];
    !p && wn && wn.value && qe.push({
      role: sr(wn.role),
      content: wn.value,
      identifier: "authorsNote",
      position: vl(wn.position)
    });
    const Yt = P.extensionPrompts["3_vectors"];
    Yt && Yt.value && qe.push({
      role: "system",
      content: Yt.value,
      identifier: "vectorsMemory",
      position: vl(Yt.position)
    });
    const Nn = P.extensionPrompts["4_vectors_data_bank"];
    Nn && Nn.value && qe.push({
      role: sr(Nn.role),
      content: Nn.value,
      identifier: "vectorsDataBank",
      position: vl(Nn.position)
    });
    const rn = P.extensionPrompts.chromadb;
    rn && rn.value && qe.push({
      role: "system",
      content: rn.value,
      identifier: "smartContext",
      position: vl(rn.position)
    }), !d && P.powerUserSettings.persona_description && P.powerUserSettings.persona_description_position === ng.IN_PROMPT && qe.push({
      role: "system",
      content: P.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), J.order.forEach((Ot) => {
      if (!Ot.enabled)
        return;
      const kt = me(Ot.identifier);
      if (kt && kt.content) {
        ae.add({
          role: kt.role ?? "system",
          content: P.substituteParams(kt.content)
        });
        return;
      }
      Ot.identifier === "chatHistory" && Nt();
    });
  }
  const vi = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const me in P.extensionPrompts)
    if (Object.hasOwn(P.extensionPrompts, me)) {
      const de = P.extensionPrompts[me];
      if (vi.includes(me) || !P.extensionPrompts[me].value || ![lr.BEFORE_PROMPT, lr.IN_PROMPT].includes(de.position) || typeof de.filter == "function" && !await de.filter()) continue;
      const Ue = {
        role: sr(de.role) ?? "system",
        content: de.value
      };
      if (de.position === lr.BEFORE_PROMPT)
        ae.insert(de.depth, Ue);
      else if (de.position === lr.IN_PROMPT) {
        const He = ae.getMessages();
        ae.insert(He.length - de.depth, Ue);
      }
    }
  for (const me of qa) {
    const de = ae.getMessages();
    ae.insert(de.length - me.depth, {
      role: sr(me.role),
      content: me.entries.join(`
`)
    });
  }
  if (!d) {
    const me = xb(fr, Number(gn));
    if (fr && Array.isArray(me) && me.length > 0)
      me.filter((de) => de.text).forEach((de, Ue) => {
        const He = ae.getMessages();
        ae.insert(He.length - de.depth, { role: de.role, content: de.text });
      });
    else {
      const de = Js(
        (T = (E = (D = (A = (O = P.characters[gn]) == null ? void 0 : O.data) == null ? void 0 : A.extensions) == null ? void 0 : D.depth_prompt) == null ? void 0 : E.prompt) == null ? void 0 : T.trim(),
        na,
        Ma
      ) || "";
      if (de) {
        const Ue = $0, He = ((ee = (G = (L = (j = P.characters[gn]) == null ? void 0 : j.data) == null ? void 0 : L.extensions) == null ? void 0 : G.depth_prompt) == null ? void 0 : ee.role) ?? W0, k = ae.getMessages();
        ae.insert(k.length - Ue, {
          role: sr(He),
          content: de
        });
      }
    }
  }
  let Vt = -1;
  if (!p) {
    const me = _b();
    if (me.prompt) {
      me.prompt = Js(me.prompt, na, Ma);
      const de = { role: sr(me.role), content: me.prompt };
      switch (me.position) {
        case lr.IN_PROMPT:
          ae.insert(1, de), Vt = 1;
          break;
        case lr.IN_CHAT:
          Vt = ae.getMessages().length - me.depth, ae.insert(Vt, de);
          break;
        case lr.BEFORE_PROMPT:
          ae.addFront(de), Vt = 0;
          break;
      }
    }
  }
  return Vt >= 0 && (vr.length > 0 && (ae.insert(Vt, { role: "system", content: vr.join(`
`) }), Vt++), Ia.length > 0 && ae.insert(Vt + 1, { role: "system", content: Ia.join(`
`) })), { result: ae.getMessages(), warnings: te };
}
/**!
 * Sortable 1.15.6
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function Tg(r, a) {
  var l = Object.keys(r);
  if (Object.getOwnPropertySymbols) {
    var s = Object.getOwnPropertySymbols(r);
    a && (s = s.filter(function(u) {
      return Object.getOwnPropertyDescriptor(r, u).enumerable;
    })), l.push.apply(l, s);
  }
  return l;
}
function Un(r) {
  for (var a = 1; a < arguments.length; a++) {
    var l = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Tg(Object(l), !0).forEach(function(s) {
      jb(r, s, l[s]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(l)) : Tg(Object(l)).forEach(function(s) {
      Object.defineProperty(r, s, Object.getOwnPropertyDescriptor(l, s));
    });
  }
  return r;
}
function Ro(r) {
  "@babel/helpers - typeof";
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ro = function(a) {
    return typeof a;
  } : Ro = function(a) {
    return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a;
  }, Ro(r);
}
function jb(r, a, l) {
  return a in r ? Object.defineProperty(r, a, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[a] = l, r;
}
function la() {
  return la = Object.assign || function(r) {
    for (var a = 1; a < arguments.length; a++) {
      var l = arguments[a];
      for (var s in l)
        Object.prototype.hasOwnProperty.call(l, s) && (r[s] = l[s]);
    }
    return r;
  }, la.apply(this, arguments);
}
function Lb(r, a) {
  if (r == null) return {};
  var l = {}, s = Object.keys(r), u, c;
  for (c = 0; c < s.length; c++)
    u = s[c], !(a.indexOf(u) >= 0) && (l[u] = r[u]);
  return l;
}
function Bb(r, a) {
  if (r == null) return {};
  var l = Lb(r, a), s, u;
  if (Object.getOwnPropertySymbols) {
    var c = Object.getOwnPropertySymbols(r);
    for (u = 0; u < c.length; u++)
      s = c[u], !(a.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(r, s) && (l[s] = r[s]);
  }
  return l;
}
var zb = "1.15.6";
function ra(r) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(r);
}
var sa = ra(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Ll = ra(/Edge/i), wg = ra(/firefox/i), Ol = ra(/safari/i) && !ra(/chrome/i) && !ra(/android/i), lh = ra(/iP(ad|od|hone)/i), Qv = ra(/chrome/i) && ra(/android/i), Zv = {
  capture: !1,
  passive: !1
};
function Be(r, a, l) {
  r.addEventListener(a, l, !sa && Zv);
}
function je(r, a, l) {
  r.removeEventListener(a, l, !sa && Zv);
}
function Po(r, a) {
  if (a) {
    if (a[0] === ">" && (a = a.substring(1)), r)
      try {
        if (r.matches)
          return r.matches(a);
        if (r.msMatchesSelector)
          return r.msMatchesSelector(a);
        if (r.webkitMatchesSelector)
          return r.webkitMatchesSelector(a);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Kv(r) {
  return r.host && r !== document && r.host.nodeType ? r.host : r.parentNode;
}
function En(r, a, l, s) {
  if (r) {
    l = l || document;
    do {
      if (a != null && (a[0] === ">" ? r.parentNode === l && Po(r, a) : Po(r, a)) || s && r === l)
        return r;
      if (r === l) break;
    } while (r = Kv(r));
  }
  return null;
}
var Ng = /\s+/g;
function en(r, a, l) {
  if (r && a)
    if (r.classList)
      r.classList[l ? "add" : "remove"](a);
    else {
      var s = (" " + r.className + " ").replace(Ng, " ").replace(" " + a + " ", " ");
      r.className = (s + (l ? " " + a : "")).replace(Ng, " ");
    }
}
function _e(r, a, l) {
  var s = r && r.style;
  if (s) {
    if (l === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? l = document.defaultView.getComputedStyle(r, "") : r.currentStyle && (l = r.currentStyle), a === void 0 ? l : l[a];
    !(a in s) && a.indexOf("webkit") === -1 && (a = "-webkit-" + a), s[a] = l + (typeof l == "string" ? "" : "px");
  }
}
function di(r, a) {
  var l = "";
  if (typeof r == "string")
    l = r;
  else
    do {
      var s = _e(r, "transform");
      s && s !== "none" && (l = s + " " + l);
    } while (!a && (r = r.parentNode));
  var u = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return u && new u(l);
}
function Jv(r, a, l) {
  if (r) {
    var s = r.getElementsByTagName(a), u = 0, c = s.length;
    if (l)
      for (; u < c; u++)
        l(s[u], u);
    return s;
  }
  return [];
}
function zn() {
  var r = document.scrollingElement;
  return r || document.documentElement;
}
function ft(r, a, l, s, u) {
  if (!(!r.getBoundingClientRect && r !== window)) {
    var c, b, m, d, p, v, S;
    if (r !== window && r.parentNode && r !== zn() ? (c = r.getBoundingClientRect(), b = c.top, m = c.left, d = c.bottom, p = c.right, v = c.height, S = c.width) : (b = 0, m = 0, d = window.innerHeight, p = window.innerWidth, v = window.innerHeight, S = window.innerWidth), (a || l) && r !== window && (u = u || r.parentNode, !sa))
      do
        if (u && u.getBoundingClientRect && (_e(u, "transform") !== "none" || l && _e(u, "position") !== "static")) {
          var g = u.getBoundingClientRect();
          b -= g.top + parseInt(_e(u, "border-top-width")), m -= g.left + parseInt(_e(u, "border-left-width")), d = b + c.height, p = m + c.width;
          break;
        }
      while (u = u.parentNode);
    if (s && r !== window) {
      var y = di(u || r), h = y && y.a, x = y && y.d;
      y && (b /= x, m /= h, S /= h, v /= x, d = b + v, p = m + S);
    }
    return {
      top: b,
      left: m,
      bottom: d,
      right: p,
      width: S,
      height: v
    };
  }
}
function Og(r, a, l) {
  for (var s = za(r, !0), u = ft(r)[a]; s; ) {
    var c = ft(s)[l], b = void 0;
    if (b = u >= c, !b) return s;
    if (s === zn()) break;
    s = za(s, !1);
  }
  return !1;
}
function pi(r, a, l, s) {
  for (var u = 0, c = 0, b = r.children; c < b.length; ) {
    if (b[c].style.display !== "none" && b[c] !== xe.ghost && (s || b[c] !== xe.dragged) && En(b[c], l.draggable, r, !1)) {
      if (u === a)
        return b[c];
      u++;
    }
    c++;
  }
  return null;
}
function sh(r, a) {
  for (var l = r.lastElementChild; l && (l === xe.ghost || _e(l, "display") === "none" || a && !Po(l, a)); )
    l = l.previousElementSibling;
  return l || null;
}
function mn(r, a) {
  var l = 0;
  if (!r || !r.parentNode)
    return -1;
  for (; r = r.previousElementSibling; )
    r.nodeName.toUpperCase() !== "TEMPLATE" && r !== xe.clone && (!a || Po(r, a)) && l++;
  return l;
}
function Dg(r) {
  var a = 0, l = 0, s = zn();
  if (r)
    do {
      var u = di(r), c = u.a, b = u.d;
      a += r.scrollLeft * c, l += r.scrollTop * b;
    } while (r !== s && (r = r.parentNode));
  return [a, l];
}
function Ub(r, a) {
  for (var l in r)
    if (r.hasOwnProperty(l)) {
      for (var s in a)
        if (a.hasOwnProperty(s) && a[s] === r[l][s]) return Number(l);
    }
  return -1;
}
function za(r, a) {
  if (!r || !r.getBoundingClientRect) return zn();
  var l = r, s = !1;
  do
    if (l.clientWidth < l.scrollWidth || l.clientHeight < l.scrollHeight) {
      var u = _e(l);
      if (l.clientWidth < l.scrollWidth && (u.overflowX == "auto" || u.overflowX == "scroll") || l.clientHeight < l.scrollHeight && (u.overflowY == "auto" || u.overflowY == "scroll")) {
        if (!l.getBoundingClientRect || l === document.body) return zn();
        if (s || a) return l;
        s = !0;
      }
    }
  while (l = l.parentNode);
  return zn();
}
function Hb(r, a) {
  if (r && a)
    for (var l in a)
      a.hasOwnProperty(l) && (r[l] = a[l]);
  return r;
}
function gf(r, a) {
  return Math.round(r.top) === Math.round(a.top) && Math.round(r.left) === Math.round(a.left) && Math.round(r.height) === Math.round(a.height) && Math.round(r.width) === Math.round(a.width);
}
var Dl;
function Wv(r, a) {
  return function() {
    if (!Dl) {
      var l = arguments, s = this;
      l.length === 1 ? r.call(s, l[0]) : r.apply(s, l), Dl = setTimeout(function() {
        Dl = void 0;
      }, a);
    }
  };
}
function Pb() {
  clearTimeout(Dl), Dl = void 0;
}
function $v(r, a, l) {
  r.scrollLeft += a, r.scrollTop += l;
}
function ey(r) {
  var a = window.Polymer, l = window.jQuery || window.Zepto;
  return a && a.dom ? a.dom(r).cloneNode(!0) : l ? l(r).clone(!0)[0] : r.cloneNode(!0);
}
function ty(r, a, l) {
  var s = {};
  return Array.from(r.children).forEach(function(u) {
    var c, b, m, d;
    if (!(!En(u, a.draggable, r, !1) || u.animated || u === l)) {
      var p = ft(u);
      s.left = Math.min((c = s.left) !== null && c !== void 0 ? c : 1 / 0, p.left), s.top = Math.min((b = s.top) !== null && b !== void 0 ? b : 1 / 0, p.top), s.right = Math.max((m = s.right) !== null && m !== void 0 ? m : -1 / 0, p.right), s.bottom = Math.max((d = s.bottom) !== null && d !== void 0 ? d : -1 / 0, p.bottom);
    }
  }), s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
var qt = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function qb() {
  var r = [], a;
  return {
    captureAnimationState: function() {
      if (r = [], !!this.options.animation) {
        var s = [].slice.call(this.el.children);
        s.forEach(function(u) {
          if (!(_e(u, "display") === "none" || u === xe.ghost)) {
            r.push({
              target: u,
              rect: ft(u)
            });
            var c = Un({}, r[r.length - 1].rect);
            if (u.thisAnimationDuration) {
              var b = di(u, !0);
              b && (c.top -= b.f, c.left -= b.e);
            }
            u.fromRect = c;
          }
        });
      }
    },
    addAnimationState: function(s) {
      r.push(s);
    },
    removeAnimationState: function(s) {
      r.splice(Ub(r, {
        target: s
      }), 1);
    },
    animateAll: function(s) {
      var u = this;
      if (!this.options.animation) {
        clearTimeout(a), typeof s == "function" && s();
        return;
      }
      var c = !1, b = 0;
      r.forEach(function(m) {
        var d = 0, p = m.target, v = p.fromRect, S = ft(p), g = p.prevFromRect, y = p.prevToRect, h = m.rect, x = di(p, !0);
        x && (S.top -= x.f, S.left -= x.e), p.toRect = S, p.thisAnimationDuration && gf(g, S) && !gf(v, S) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - S.top) / (h.left - S.left) === (v.top - S.top) / (v.left - S.left) && (d = Gb(h, g, y, u.options)), gf(S, v) || (p.prevFromRect = v, p.prevToRect = S, d || (d = u.options.animation), u.animate(p, h, S, d)), d && (c = !0, b = Math.max(b, d), clearTimeout(p.animationResetTimer), p.animationResetTimer = setTimeout(function() {
          p.animationTime = 0, p.prevFromRect = null, p.fromRect = null, p.prevToRect = null, p.thisAnimationDuration = null;
        }, d), p.thisAnimationDuration = d);
      }), clearTimeout(a), c ? a = setTimeout(function() {
        typeof s == "function" && s();
      }, b) : typeof s == "function" && s(), r = [];
    },
    animate: function(s, u, c, b) {
      if (b) {
        _e(s, "transition", ""), _e(s, "transform", "");
        var m = di(this.el), d = m && m.a, p = m && m.d, v = (u.left - c.left) / (d || 1), S = (u.top - c.top) / (p || 1);
        s.animatingX = !!v, s.animatingY = !!S, _e(s, "transform", "translate3d(" + v + "px," + S + "px,0)"), this.forRepaintDummy = Ib(s), _e(s, "transition", "transform " + b + "ms" + (this.options.easing ? " " + this.options.easing : "")), _e(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          _e(s, "transition", ""), _e(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
        }, b);
      }
    }
  };
}
function Ib(r) {
  return r.offsetWidth;
}
function Gb(r, a, l, s) {
  return Math.sqrt(Math.pow(a.top - r.top, 2) + Math.pow(a.left - r.left, 2)) / Math.sqrt(Math.pow(a.top - l.top, 2) + Math.pow(a.left - l.left, 2)) * s.animation;
}
var ii = [], vf = {
  initializeByDefault: !0
}, Bl = {
  mount: function(a) {
    for (var l in vf)
      vf.hasOwnProperty(l) && !(l in a) && (a[l] = vf[l]);
    ii.forEach(function(s) {
      if (s.pluginName === a.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(a.pluginName, " more than once");
    }), ii.push(a);
  },
  pluginEvent: function(a, l, s) {
    var u = this;
    this.eventCanceled = !1, s.cancel = function() {
      u.eventCanceled = !0;
    };
    var c = a + "Global";
    ii.forEach(function(b) {
      l[b.pluginName] && (l[b.pluginName][c] && l[b.pluginName][c](Un({
        sortable: l
      }, s)), l.options[b.pluginName] && l[b.pluginName][a] && l[b.pluginName][a](Un({
        sortable: l
      }, s)));
    });
  },
  initializePlugins: function(a, l, s, u) {
    ii.forEach(function(m) {
      var d = m.pluginName;
      if (!(!a.options[d] && !m.initializeByDefault)) {
        var p = new m(a, l, a.options);
        p.sortable = a, p.options = a.options, a[d] = p, la(s, p.defaults);
      }
    });
    for (var c in a.options)
      if (a.options.hasOwnProperty(c)) {
        var b = this.modifyOption(a, c, a.options[c]);
        typeof b < "u" && (a.options[c] = b);
      }
  },
  getEventProperties: function(a, l) {
    var s = {};
    return ii.forEach(function(u) {
      typeof u.eventProperties == "function" && la(s, u.eventProperties.call(l[u.pluginName], a));
    }), s;
  },
  modifyOption: function(a, l, s) {
    var u;
    return ii.forEach(function(c) {
      a[c.pluginName] && c.optionListeners && typeof c.optionListeners[l] == "function" && (u = c.optionListeners[l].call(a[c.pluginName], s));
    }), u;
  }
};
function Vb(r) {
  var a = r.sortable, l = r.rootEl, s = r.name, u = r.targetEl, c = r.cloneEl, b = r.toEl, m = r.fromEl, d = r.oldIndex, p = r.newIndex, v = r.oldDraggableIndex, S = r.newDraggableIndex, g = r.originalEvent, y = r.putSortable, h = r.extraEventProperties;
  if (a = a || l && l[qt], !!a) {
    var x, C = a.options, O = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !sa && !Ll ? x = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (x = document.createEvent("Event"), x.initEvent(s, !0, !0)), x.to = b || l, x.from = m || l, x.item = u || l, x.clone = c, x.oldIndex = d, x.newIndex = p, x.oldDraggableIndex = v, x.newDraggableIndex = S, x.originalEvent = g, x.pullMode = y ? y.lastPutMode : void 0;
    var A = Un(Un({}, h), Bl.getEventProperties(s, a));
    for (var D in A)
      x[D] = A[D];
    l && l.dispatchEvent(x), C[O] && C[O].call(a, x);
  }
}
var Yb = ["evt"], Ht = function(a, l) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, u = s.evt, c = Bb(s, Yb);
  Bl.pluginEvent.bind(xe)(a, l, Un({
    dragEl: ie,
    parentEl: at,
    ghostEl: Ce,
    rootEl: We,
    nextEl: cr,
    lastDownEl: ko,
    cloneEl: et,
    cloneHidden: Ba,
    dragStarted: Tl,
    putSortable: xt,
    activeSortable: xe.active,
    originalEvent: u,
    oldIndex: hi,
    oldDraggableIndex: Ml,
    newIndex: tn,
    newDraggableIndex: La,
    hideGhostForTarget: iy,
    unhideGhostForTarget: ly,
    cloneNowHidden: function() {
      Ba = !0;
    },
    cloneNowShown: function() {
      Ba = !1;
    },
    dispatchSortableEvent: function(m) {
      Mt({
        sortable: l,
        name: m,
        originalEvent: u
      });
    }
  }, c));
};
function Mt(r) {
  Vb(Un({
    putSortable: xt,
    cloneEl: et,
    targetEl: ie,
    rootEl: We,
    oldIndex: hi,
    oldDraggableIndex: Ml,
    newIndex: tn,
    newDraggableIndex: La
  }, r));
}
var ie, at, Ce, We, cr, ko, et, Ba, hi, tn, Ml, La, $s, xt, fi = !1, qo = !1, Io = [], or, _n, yf, bf, Mg, Rg, Tl, li, Rl, kl = !1, eo = !1, jo, Tt, Sf = [], Vf = !1, Go = [], Qo = typeof document < "u", to = lh, kg = Ll || sa ? "cssFloat" : "float", Fb = Qo && !Qv && !lh && "draggable" in document.createElement("div"), ny = (function() {
  if (Qo) {
    if (sa)
      return !1;
    var r = document.createElement("x");
    return r.style.cssText = "pointer-events:auto", r.style.pointerEvents === "auto";
  }
})(), ay = function(a, l) {
  var s = _e(a), u = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), c = pi(a, 0, l), b = pi(a, 1, l), m = c && _e(c), d = b && _e(b), p = m && parseInt(m.marginLeft) + parseInt(m.marginRight) + ft(c).width, v = d && parseInt(d.marginLeft) + parseInt(d.marginRight) + ft(b).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (c && m.float && m.float !== "none") {
    var S = m.float === "left" ? "left" : "right";
    return b && (d.clear === "both" || d.clear === S) ? "vertical" : "horizontal";
  }
  return c && (m.display === "block" || m.display === "flex" || m.display === "table" || m.display === "grid" || p >= u && s[kg] === "none" || b && s[kg] === "none" && p + v > u) ? "vertical" : "horizontal";
}, Xb = function(a, l, s) {
  var u = s ? a.left : a.top, c = s ? a.right : a.bottom, b = s ? a.width : a.height, m = s ? l.left : l.top, d = s ? l.right : l.bottom, p = s ? l.width : l.height;
  return u === m || c === d || u + b / 2 === m + p / 2;
}, Qb = function(a, l) {
  var s;
  return Io.some(function(u) {
    var c = u[qt].options.emptyInsertThreshold;
    if (!(!c || sh(u))) {
      var b = ft(u), m = a >= b.left - c && a <= b.right + c, d = l >= b.top - c && l <= b.bottom + c;
      if (m && d)
        return s = u;
    }
  }), s;
}, ry = function(a) {
  function l(c, b) {
    return function(m, d, p, v) {
      var S = m.options.group.name && d.options.group.name && m.options.group.name === d.options.group.name;
      if (c == null && (b || S))
        return !0;
      if (c == null || c === !1)
        return !1;
      if (b && c === "clone")
        return c;
      if (typeof c == "function")
        return l(c(m, d, p, v), b)(m, d, p, v);
      var g = (b ? m : d).options.group.name;
      return c === !0 || typeof c == "string" && c === g || c.join && c.indexOf(g) > -1;
    };
  }
  var s = {}, u = a.group;
  (!u || Ro(u) != "object") && (u = {
    name: u
  }), s.name = u.name, s.checkPull = l(u.pull, !0), s.checkPut = l(u.put), s.revertClone = u.revertClone, a.group = s;
}, iy = function() {
  !ny && Ce && _e(Ce, "display", "none");
}, ly = function() {
  !ny && Ce && _e(Ce, "display", "");
};
Qo && !Qv && document.addEventListener("click", function(r) {
  if (qo)
    return r.preventDefault(), r.stopPropagation && r.stopPropagation(), r.stopImmediatePropagation && r.stopImmediatePropagation(), qo = !1, !1;
}, !0);
var ur = function(a) {
  if (ie) {
    a = a.touches ? a.touches[0] : a;
    var l = Qb(a.clientX, a.clientY);
    if (l) {
      var s = {};
      for (var u in a)
        a.hasOwnProperty(u) && (s[u] = a[u]);
      s.target = s.rootEl = l, s.preventDefault = void 0, s.stopPropagation = void 0, l[qt]._onDragOver(s);
    }
  }
}, Zb = function(a) {
  ie && ie.parentNode[qt]._isOutsideThisEl(a.target);
};
function xe(r, a) {
  if (!(r && r.nodeType && r.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(r));
  this.el = r, this.options = a = la({}, a), r[qt] = this;
  var l = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(r.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    // percentage; 0 <= x <= 1
    invertSwap: !1,
    // invert always
    invertedSwapThreshold: null,
    // will be set to same as swapThreshold if default
    removeCloneOnHide: !0,
    direction: function() {
      return ay(r, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(b, m) {
      b.setData("Text", m.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    // Disabled on Safari: #1571; Enabled on Safari IOS: #2244
    supportPointer: xe.supportPointer !== !1 && "PointerEvent" in window && (!Ol || lh),
    emptyInsertThreshold: 5
  };
  Bl.initializePlugins(this, r, l);
  for (var s in l)
    !(s in a) && (a[s] = l[s]);
  ry(a);
  for (var u in this)
    u.charAt(0) === "_" && typeof this[u] == "function" && (this[u] = this[u].bind(this));
  this.nativeDraggable = a.forceFallback ? !1 : Fb, this.nativeDraggable && (this.options.touchStartThreshold = 1), a.supportPointer ? Be(r, "pointerdown", this._onTapStart) : (Be(r, "mousedown", this._onTapStart), Be(r, "touchstart", this._onTapStart)), this.nativeDraggable && (Be(r, "dragover", this), Be(r, "dragenter", this)), Io.push(this.el), a.store && a.store.get && this.sort(a.store.get(this) || []), la(this, qb());
}
xe.prototype = /** @lends Sortable.prototype */
{
  constructor: xe,
  _isOutsideThisEl: function(a) {
    !this.el.contains(a) && a !== this.el && (li = null);
  },
  _getDirection: function(a, l) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, a, l, ie) : this.options.direction;
  },
  _onTapStart: function(a) {
    if (a.cancelable) {
      var l = this, s = this.el, u = this.options, c = u.preventOnFilter, b = a.type, m = a.touches && a.touches[0] || a.pointerType && a.pointerType === "touch" && a, d = (m || a).target, p = a.target.shadowRoot && (a.path && a.path[0] || a.composedPath && a.composedPath()[0]) || d, v = u.filter;
      if (aS(s), !ie && !(/mousedown|pointerdown/.test(b) && a.button !== 0 || u.disabled) && !p.isContentEditable && !(!this.nativeDraggable && Ol && d && d.tagName.toUpperCase() === "SELECT") && (d = En(d, u.draggable, s, !1), !(d && d.animated) && ko !== d)) {
        if (hi = mn(d), Ml = mn(d, u.draggable), typeof v == "function") {
          if (v.call(this, a, d, this)) {
            Mt({
              sortable: l,
              rootEl: p,
              name: "filter",
              targetEl: d,
              toEl: s,
              fromEl: s
            }), Ht("filter", l, {
              evt: a
            }), c && a.preventDefault();
            return;
          }
        } else if (v && (v = v.split(",").some(function(S) {
          if (S = En(p, S.trim(), s, !1), S)
            return Mt({
              sortable: l,
              rootEl: S,
              name: "filter",
              targetEl: d,
              fromEl: s,
              toEl: s
            }), Ht("filter", l, {
              evt: a
            }), !0;
        }), v)) {
          c && a.preventDefault();
          return;
        }
        u.handle && !En(p, u.handle, s, !1) || this._prepareDragStart(a, m, d);
      }
    }
  },
  _prepareDragStart: function(a, l, s) {
    var u = this, c = u.el, b = u.options, m = c.ownerDocument, d;
    if (s && !ie && s.parentNode === c) {
      var p = ft(s);
      if (We = c, ie = s, at = ie.parentNode, cr = ie.nextSibling, ko = s, $s = b.group, xe.dragged = ie, or = {
        target: ie,
        clientX: (l || a).clientX,
        clientY: (l || a).clientY
      }, Mg = or.clientX - p.left, Rg = or.clientY - p.top, this._lastX = (l || a).clientX, this._lastY = (l || a).clientY, ie.style["will-change"] = "all", d = function() {
        if (Ht("delayEnded", u, {
          evt: a
        }), xe.eventCanceled) {
          u._onDrop();
          return;
        }
        u._disableDelayedDragEvents(), !wg && u.nativeDraggable && (ie.draggable = !0), u._triggerDragStart(a, l), Mt({
          sortable: u,
          name: "choose",
          originalEvent: a
        }), en(ie, b.chosenClass, !0);
      }, b.ignore.split(",").forEach(function(v) {
        Jv(ie, v.trim(), _f);
      }), Be(m, "dragover", ur), Be(m, "mousemove", ur), Be(m, "touchmove", ur), b.supportPointer ? (Be(m, "pointerup", u._onDrop), !this.nativeDraggable && Be(m, "pointercancel", u._onDrop)) : (Be(m, "mouseup", u._onDrop), Be(m, "touchend", u._onDrop), Be(m, "touchcancel", u._onDrop)), wg && this.nativeDraggable && (this.options.touchStartThreshold = 4, ie.draggable = !0), Ht("delayStart", this, {
        evt: a
      }), b.delay && (!b.delayOnTouchOnly || l) && (!this.nativeDraggable || !(Ll || sa))) {
        if (xe.eventCanceled) {
          this._onDrop();
          return;
        }
        b.supportPointer ? (Be(m, "pointerup", u._disableDelayedDrag), Be(m, "pointercancel", u._disableDelayedDrag)) : (Be(m, "mouseup", u._disableDelayedDrag), Be(m, "touchend", u._disableDelayedDrag), Be(m, "touchcancel", u._disableDelayedDrag)), Be(m, "mousemove", u._delayedDragTouchMoveHandler), Be(m, "touchmove", u._delayedDragTouchMoveHandler), b.supportPointer && Be(m, "pointermove", u._delayedDragTouchMoveHandler), u._dragStartTimer = setTimeout(d, b.delay);
      } else
        d();
    }
  },
  _delayedDragTouchMoveHandler: function(a) {
    var l = a.touches ? a.touches[0] : a;
    Math.max(Math.abs(l.clientX - this._lastX), Math.abs(l.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    ie && _f(ie), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var a = this.el.ownerDocument;
    je(a, "mouseup", this._disableDelayedDrag), je(a, "touchend", this._disableDelayedDrag), je(a, "touchcancel", this._disableDelayedDrag), je(a, "pointerup", this._disableDelayedDrag), je(a, "pointercancel", this._disableDelayedDrag), je(a, "mousemove", this._delayedDragTouchMoveHandler), je(a, "touchmove", this._delayedDragTouchMoveHandler), je(a, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(a, l) {
    l = l || a.pointerType == "touch" && a, !this.nativeDraggable || l ? this.options.supportPointer ? Be(document, "pointermove", this._onTouchMove) : l ? Be(document, "touchmove", this._onTouchMove) : Be(document, "mousemove", this._onTouchMove) : (Be(ie, "dragend", this), Be(We, "dragstart", this._onDragStart));
    try {
      document.selection ? Lo(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(a, l) {
    if (fi = !1, We && ie) {
      Ht("dragStarted", this, {
        evt: l
      }), this.nativeDraggable && Be(document, "dragover", Zb);
      var s = this.options;
      !a && en(ie, s.dragClass, !1), en(ie, s.ghostClass, !0), xe.active = this, a && this._appendGhost(), Mt({
        sortable: this,
        name: "start",
        originalEvent: l
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (_n) {
      this._lastX = _n.clientX, this._lastY = _n.clientY, iy();
      for (var a = document.elementFromPoint(_n.clientX, _n.clientY), l = a; a && a.shadowRoot && (a = a.shadowRoot.elementFromPoint(_n.clientX, _n.clientY), a !== l); )
        l = a;
      if (ie.parentNode[qt]._isOutsideThisEl(a), l)
        do {
          if (l[qt]) {
            var s = void 0;
            if (s = l[qt]._onDragOver({
              clientX: _n.clientX,
              clientY: _n.clientY,
              target: a,
              rootEl: l
            }), s && !this.options.dragoverBubble)
              break;
          }
          a = l;
        } while (l = Kv(l));
      ly();
    }
  },
  _onTouchMove: function(a) {
    if (or) {
      var l = this.options, s = l.fallbackTolerance, u = l.fallbackOffset, c = a.touches ? a.touches[0] : a, b = Ce && di(Ce, !0), m = Ce && b && b.a, d = Ce && b && b.d, p = to && Tt && Dg(Tt), v = (c.clientX - or.clientX + u.x) / (m || 1) + (p ? p[0] - Sf[0] : 0) / (m || 1), S = (c.clientY - or.clientY + u.y) / (d || 1) + (p ? p[1] - Sf[1] : 0) / (d || 1);
      if (!xe.active && !fi) {
        if (s && Math.max(Math.abs(c.clientX - this._lastX), Math.abs(c.clientY - this._lastY)) < s)
          return;
        this._onDragStart(a, !0);
      }
      if (Ce) {
        b ? (b.e += v - (yf || 0), b.f += S - (bf || 0)) : b = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: v,
          f: S
        };
        var g = "matrix(".concat(b.a, ",").concat(b.b, ",").concat(b.c, ",").concat(b.d, ",").concat(b.e, ",").concat(b.f, ")");
        _e(Ce, "webkitTransform", g), _e(Ce, "mozTransform", g), _e(Ce, "msTransform", g), _e(Ce, "transform", g), yf = v, bf = S, _n = c;
      }
      a.cancelable && a.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Ce) {
      var a = this.options.fallbackOnBody ? document.body : We, l = ft(ie, !0, to, !0, a), s = this.options;
      if (to) {
        for (Tt = a; _e(Tt, "position") === "static" && _e(Tt, "transform") === "none" && Tt !== document; )
          Tt = Tt.parentNode;
        Tt !== document.body && Tt !== document.documentElement ? (Tt === document && (Tt = zn()), l.top += Tt.scrollTop, l.left += Tt.scrollLeft) : Tt = zn(), Sf = Dg(Tt);
      }
      Ce = ie.cloneNode(!0), en(Ce, s.ghostClass, !1), en(Ce, s.fallbackClass, !0), en(Ce, s.dragClass, !0), _e(Ce, "transition", ""), _e(Ce, "transform", ""), _e(Ce, "box-sizing", "border-box"), _e(Ce, "margin", 0), _e(Ce, "top", l.top), _e(Ce, "left", l.left), _e(Ce, "width", l.width), _e(Ce, "height", l.height), _e(Ce, "opacity", "0.8"), _e(Ce, "position", to ? "absolute" : "fixed"), _e(Ce, "zIndex", "100000"), _e(Ce, "pointerEvents", "none"), xe.ghost = Ce, a.appendChild(Ce), _e(Ce, "transform-origin", Mg / parseInt(Ce.style.width) * 100 + "% " + Rg / parseInt(Ce.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(a, l) {
    var s = this, u = a.dataTransfer, c = s.options;
    if (Ht("dragStart", this, {
      evt: a
    }), xe.eventCanceled) {
      this._onDrop();
      return;
    }
    Ht("setupClone", this), xe.eventCanceled || (et = ey(ie), et.removeAttribute("id"), et.draggable = !1, et.style["will-change"] = "", this._hideClone(), en(et, this.options.chosenClass, !1), xe.clone = et), s.cloneId = Lo(function() {
      Ht("clone", s), !xe.eventCanceled && (s.options.removeCloneOnHide || We.insertBefore(et, ie), s._hideClone(), Mt({
        sortable: s,
        name: "clone"
      }));
    }), !l && en(ie, c.dragClass, !0), l ? (qo = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (je(document, "mouseup", s._onDrop), je(document, "touchend", s._onDrop), je(document, "touchcancel", s._onDrop), u && (u.effectAllowed = "move", c.setData && c.setData.call(s, u, ie)), Be(document, "drop", s), _e(ie, "transform", "translateZ(0)")), fi = !0, s._dragStartId = Lo(s._dragStarted.bind(s, l, a)), Be(document, "selectstart", s), Tl = !0, window.getSelection().removeAllRanges(), Ol && _e(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(a) {
    var l = this.el, s = a.target, u, c, b, m = this.options, d = m.group, p = xe.active, v = $s === d, S = m.sort, g = xt || p, y, h = this, x = !1;
    if (Vf) return;
    function C(le, he) {
      Ht(le, h, Un({
        evt: a,
        isOwner: v,
        axis: y ? "vertical" : "horizontal",
        revert: b,
        dragRect: u,
        targetRect: c,
        canSort: S,
        fromSortable: g,
        target: s,
        completed: A,
        onMove: function(F, te) {
          return no(We, l, ie, u, F, ft(F), a, te);
        },
        changed: D
      }, he));
    }
    function O() {
      C("dragOverAnimationCapture"), h.captureAnimationState(), h !== g && g.captureAnimationState();
    }
    function A(le) {
      return C("dragOverCompleted", {
        insertion: le
      }), le && (v ? p._hideClone() : p._showClone(h), h !== g && (en(ie, xt ? xt.options.ghostClass : p.options.ghostClass, !1), en(ie, m.ghostClass, !0)), xt !== h && h !== xe.active ? xt = h : h === xe.active && xt && (xt = null), g === h && (h._ignoreWhileAnimating = s), h.animateAll(function() {
        C("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== g && (g.animateAll(), g._ignoreWhileAnimating = null)), (s === ie && !ie.animated || s === l && !s.animated) && (li = null), !m.dragoverBubble && !a.rootEl && s !== document && (ie.parentNode[qt]._isOutsideThisEl(a.target), !le && ur(a)), !m.dragoverBubble && a.stopPropagation && a.stopPropagation(), x = !0;
    }
    function D() {
      tn = mn(ie), La = mn(ie, m.draggable), Mt({
        sortable: h,
        name: "change",
        toEl: l,
        newIndex: tn,
        newDraggableIndex: La,
        originalEvent: a
      });
    }
    if (a.preventDefault !== void 0 && a.cancelable && a.preventDefault(), s = En(s, m.draggable, l, !0), C("dragOver"), xe.eventCanceled) return x;
    if (ie.contains(a.target) || s.animated && s.animatingX && s.animatingY || h._ignoreWhileAnimating === s)
      return A(!1);
    if (qo = !1, p && !m.disabled && (v ? S || (b = at !== We) : xt === this || (this.lastPutMode = $s.checkPull(this, p, ie, a)) && d.checkPut(this, p, ie, a))) {
      if (y = this._getDirection(a, s) === "vertical", u = ft(ie), C("dragOverValid"), xe.eventCanceled) return x;
      if (b)
        return at = We, O(), this._hideClone(), C("revert"), xe.eventCanceled || (cr ? We.insertBefore(ie, cr) : We.appendChild(ie)), A(!0);
      var E = sh(l, m.draggable);
      if (!E || $b(a, y, this) && !E.animated) {
        if (E === ie)
          return A(!1);
        if (E && l === a.target && (s = E), s && (c = ft(s)), no(We, l, ie, u, s, c, a, !!s) !== !1)
          return O(), E && E.nextSibling ? l.insertBefore(ie, E.nextSibling) : l.appendChild(ie), at = l, D(), A(!0);
      } else if (E && Wb(a, y, this)) {
        var T = pi(l, 0, m, !0);
        if (T === ie)
          return A(!1);
        if (s = T, c = ft(s), no(We, l, ie, u, s, c, a, !1) !== !1)
          return O(), l.insertBefore(ie, T), at = l, D(), A(!0);
      } else if (s.parentNode === l) {
        c = ft(s);
        var j = 0, L, G = ie.parentNode !== l, ee = !Xb(ie.animated && ie.toRect || u, s.animated && s.toRect || c, y), P = y ? "top" : "left", Y = Og(s, "top", "top") || Og(ie, "top", "top"), X = Y ? Y.scrollTop : void 0;
        li !== s && (L = c[P], kl = !1, eo = !ee && m.invertSwap || G), j = eS(a, s, c, y, ee ? 1 : m.swapThreshold, m.invertedSwapThreshold == null ? m.swapThreshold : m.invertedSwapThreshold, eo, li === s);
        var oe;
        if (j !== 0) {
          var fe = mn(ie);
          do
            fe -= j, oe = at.children[fe];
          while (oe && (_e(oe, "display") === "none" || oe === Ce));
        }
        if (j === 0 || oe === s)
          return A(!1);
        li = s, Rl = j;
        var ue = s.nextElementSibling, U = !1;
        U = j === 1;
        var $ = no(We, l, ie, u, s, c, a, U);
        if ($ !== !1)
          return ($ === 1 || $ === -1) && (U = $ === 1), Vf = !0, setTimeout(Jb, 30), O(), U && !ue ? l.appendChild(ie) : s.parentNode.insertBefore(ie, U ? ue : s), Y && $v(Y, 0, X - Y.scrollTop), at = ie.parentNode, L !== void 0 && !eo && (jo = Math.abs(L - ft(s)[P])), D(), A(!0);
      }
      if (l.contains(ie))
        return A(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    je(document, "mousemove", this._onTouchMove), je(document, "touchmove", this._onTouchMove), je(document, "pointermove", this._onTouchMove), je(document, "dragover", ur), je(document, "mousemove", ur), je(document, "touchmove", ur);
  },
  _offUpEvents: function() {
    var a = this.el.ownerDocument;
    je(a, "mouseup", this._onDrop), je(a, "touchend", this._onDrop), je(a, "pointerup", this._onDrop), je(a, "pointercancel", this._onDrop), je(a, "touchcancel", this._onDrop), je(document, "selectstart", this);
  },
  _onDrop: function(a) {
    var l = this.el, s = this.options;
    if (tn = mn(ie), La = mn(ie, s.draggable), Ht("drop", this, {
      evt: a
    }), at = ie && ie.parentNode, tn = mn(ie), La = mn(ie, s.draggable), xe.eventCanceled) {
      this._nulling();
      return;
    }
    fi = !1, eo = !1, kl = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Yf(this.cloneId), Yf(this._dragStartId), this.nativeDraggable && (je(document, "drop", this), je(l, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ol && _e(document.body, "user-select", ""), _e(ie, "transform", ""), a && (Tl && (a.cancelable && a.preventDefault(), !s.dropBubble && a.stopPropagation()), Ce && Ce.parentNode && Ce.parentNode.removeChild(Ce), (We === at || xt && xt.lastPutMode !== "clone") && et && et.parentNode && et.parentNode.removeChild(et), ie && (this.nativeDraggable && je(ie, "dragend", this), _f(ie), ie.style["will-change"] = "", Tl && !fi && en(ie, xt ? xt.options.ghostClass : this.options.ghostClass, !1), en(ie, this.options.chosenClass, !1), Mt({
      sortable: this,
      name: "unchoose",
      toEl: at,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: a
    }), We !== at ? (tn >= 0 && (Mt({
      rootEl: at,
      name: "add",
      toEl: at,
      fromEl: We,
      originalEvent: a
    }), Mt({
      sortable: this,
      name: "remove",
      toEl: at,
      originalEvent: a
    }), Mt({
      rootEl: at,
      name: "sort",
      toEl: at,
      fromEl: We,
      originalEvent: a
    }), Mt({
      sortable: this,
      name: "sort",
      toEl: at,
      originalEvent: a
    })), xt && xt.save()) : tn !== hi && tn >= 0 && (Mt({
      sortable: this,
      name: "update",
      toEl: at,
      originalEvent: a
    }), Mt({
      sortable: this,
      name: "sort",
      toEl: at,
      originalEvent: a
    })), xe.active && ((tn == null || tn === -1) && (tn = hi, La = Ml), Mt({
      sortable: this,
      name: "end",
      toEl: at,
      originalEvent: a
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Ht("nulling", this), We = ie = at = Ce = cr = et = ko = Ba = or = _n = Tl = tn = La = hi = Ml = li = Rl = xt = $s = xe.dragged = xe.ghost = xe.clone = xe.active = null, Go.forEach(function(a) {
      a.checked = !0;
    }), Go.length = yf = bf = 0;
  },
  handleEvent: function(a) {
    switch (a.type) {
      case "drop":
      case "dragend":
        this._onDrop(a);
        break;
      case "dragenter":
      case "dragover":
        ie && (this._onDragOver(a), Kb(a));
        break;
      case "selectstart":
        a.preventDefault();
        break;
    }
  },
  /**
   * Serializes the item into an array of string.
   * @returns {String[]}
   */
  toArray: function() {
    for (var a = [], l, s = this.el.children, u = 0, c = s.length, b = this.options; u < c; u++)
      l = s[u], En(l, b.draggable, this.el, !1) && a.push(l.getAttribute(b.dataIdAttr) || nS(l));
    return a;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(a, l) {
    var s = {}, u = this.el;
    this.toArray().forEach(function(c, b) {
      var m = u.children[b];
      En(m, this.options.draggable, u, !1) && (s[c] = m);
    }, this), l && this.captureAnimationState(), a.forEach(function(c) {
      s[c] && (u.removeChild(s[c]), u.appendChild(s[c]));
    }), l && this.animateAll();
  },
  /**
   * Save the current sorting
   */
  save: function() {
    var a = this.options.store;
    a && a.set && a.set(this);
  },
  /**
   * For each element in the set, get the first element that matches the selector by testing the element itself and traversing up through its ancestors in the DOM tree.
   * @param   {HTMLElement}  el
   * @param   {String}       [selector]  default: `options.draggable`
   * @returns {HTMLElement|null}
   */
  closest: function(a, l) {
    return En(a, l || this.options.draggable, this.el, !1);
  },
  /**
   * Set/get option
   * @param   {string} name
   * @param   {*}      [value]
   * @returns {*}
   */
  option: function(a, l) {
    var s = this.options;
    if (l === void 0)
      return s[a];
    var u = Bl.modifyOption(this, a, l);
    typeof u < "u" ? s[a] = u : s[a] = l, a === "group" && ry(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Ht("destroy", this);
    var a = this.el;
    a[qt] = null, je(a, "mousedown", this._onTapStart), je(a, "touchstart", this._onTapStart), je(a, "pointerdown", this._onTapStart), this.nativeDraggable && (je(a, "dragover", this), je(a, "dragenter", this)), Array.prototype.forEach.call(a.querySelectorAll("[draggable]"), function(l) {
      l.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Io.splice(Io.indexOf(this.el), 1), this.el = a = null;
  },
  _hideClone: function() {
    if (!Ba) {
      if (Ht("hideClone", this), xe.eventCanceled) return;
      _e(et, "display", "none"), this.options.removeCloneOnHide && et.parentNode && et.parentNode.removeChild(et), Ba = !0;
    }
  },
  _showClone: function(a) {
    if (a.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Ba) {
      if (Ht("showClone", this), xe.eventCanceled) return;
      ie.parentNode == We && !this.options.group.revertClone ? We.insertBefore(et, ie) : cr ? We.insertBefore(et, cr) : We.appendChild(et), this.options.group.revertClone && this.animate(ie, et), _e(et, "display", ""), Ba = !1;
    }
  }
};
function Kb(r) {
  r.dataTransfer && (r.dataTransfer.dropEffect = "move"), r.cancelable && r.preventDefault();
}
function no(r, a, l, s, u, c, b, m) {
  var d, p = r[qt], v = p.options.onMove, S;
  return window.CustomEvent && !sa && !Ll ? d = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (d = document.createEvent("Event"), d.initEvent("move", !0, !0)), d.to = a, d.from = r, d.dragged = l, d.draggedRect = s, d.related = u || a, d.relatedRect = c || ft(a), d.willInsertAfter = m, d.originalEvent = b, r.dispatchEvent(d), v && (S = v.call(p, d, b)), S;
}
function _f(r) {
  r.draggable = !1;
}
function Jb() {
  Vf = !1;
}
function Wb(r, a, l) {
  var s = ft(pi(l.el, 0, l.options, !0)), u = ty(l.el, l.options, Ce), c = 10;
  return a ? r.clientX < u.left - c || r.clientY < s.top && r.clientX < s.right : r.clientY < u.top - c || r.clientY < s.bottom && r.clientX < s.left;
}
function $b(r, a, l) {
  var s = ft(sh(l.el, l.options.draggable)), u = ty(l.el, l.options, Ce), c = 10;
  return a ? r.clientX > u.right + c || r.clientY > s.bottom && r.clientX > s.left : r.clientY > u.bottom + c || r.clientX > s.right && r.clientY > s.top;
}
function eS(r, a, l, s, u, c, b, m) {
  var d = s ? r.clientY : r.clientX, p = s ? l.height : l.width, v = s ? l.top : l.left, S = s ? l.bottom : l.right, g = !1;
  if (!b) {
    if (m && jo < p * u) {
      if (!kl && (Rl === 1 ? d > v + p * c / 2 : d < S - p * c / 2) && (kl = !0), kl)
        g = !0;
      else if (Rl === 1 ? d < v + jo : d > S - jo)
        return -Rl;
    } else if (d > v + p * (1 - u) / 2 && d < S - p * (1 - u) / 2)
      return tS(a);
  }
  return g = g || b, g && (d < v + p * c / 2 || d > S - p * c / 2) ? d > v + p / 2 ? 1 : -1 : 0;
}
function tS(r) {
  return mn(ie) < mn(r) ? 1 : -1;
}
function nS(r) {
  for (var a = r.tagName + r.className + r.src + r.href + r.textContent, l = a.length, s = 0; l--; )
    s += a.charCodeAt(l);
  return s.toString(36);
}
function aS(r) {
  Go.length = 0;
  for (var a = r.getElementsByTagName("input"), l = a.length; l--; ) {
    var s = a[l];
    s.checked && Go.push(s);
  }
}
function Lo(r) {
  return setTimeout(r, 0);
}
function Yf(r) {
  return clearTimeout(r);
}
Qo && Be(document, "touchmove", function(r) {
  (xe.active || fi) && r.cancelable && r.preventDefault();
});
xe.utils = {
  on: Be,
  off: je,
  css: _e,
  find: Jv,
  is: function(a, l) {
    return !!En(a, l, a, !1);
  },
  extend: Hb,
  throttle: Wv,
  closest: En,
  toggleClass: en,
  clone: ey,
  index: mn,
  nextTick: Lo,
  cancelNextTick: Yf,
  detectDirection: ay,
  getChild: pi,
  expando: qt
};
xe.get = function(r) {
  return r[qt];
};
xe.mount = function() {
  for (var r = arguments.length, a = new Array(r), l = 0; l < r; l++)
    a[l] = arguments[l];
  a[0].constructor === Array && (a = a[0]), a.forEach(function(s) {
    if (!s.prototype || !s.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));
    s.utils && (xe.utils = Un(Un({}, xe.utils), s.utils)), Bl.mount(s);
  });
};
xe.create = function(r, a) {
  return new xe(r, a);
};
xe.version = zb;
var ct = [], wl, Ff, Xf = !1, xf, Ef, Vo, Nl;
function rS() {
  function r() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var a in this)
      a.charAt(0) === "_" && typeof this[a] == "function" && (this[a] = this[a].bind(this));
  }
  return r.prototype = {
    dragStarted: function(l) {
      var s = l.originalEvent;
      this.sortable.nativeDraggable ? Be(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Be(document, "pointermove", this._handleFallbackAutoScroll) : s.touches ? Be(document, "touchmove", this._handleFallbackAutoScroll) : Be(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(l) {
      var s = l.originalEvent;
      !this.options.dragOverBubble && !s.rootEl && this._handleAutoScroll(s);
    },
    drop: function() {
      this.sortable.nativeDraggable ? je(document, "dragover", this._handleAutoScroll) : (je(document, "pointermove", this._handleFallbackAutoScroll), je(document, "touchmove", this._handleFallbackAutoScroll), je(document, "mousemove", this._handleFallbackAutoScroll)), jg(), Bo(), Pb();
    },
    nulling: function() {
      Vo = Ff = wl = Xf = Nl = xf = Ef = null, ct.length = 0;
    },
    _handleFallbackAutoScroll: function(l) {
      this._handleAutoScroll(l, !0);
    },
    _handleAutoScroll: function(l, s) {
      var u = this, c = (l.touches ? l.touches[0] : l).clientX, b = (l.touches ? l.touches[0] : l).clientY, m = document.elementFromPoint(c, b);
      if (Vo = l, s || this.options.forceAutoScrollFallback || Ll || sa || Ol) {
        Cf(l, this.options, m, s);
        var d = za(m, !0);
        Xf && (!Nl || c !== xf || b !== Ef) && (Nl && jg(), Nl = setInterval(function() {
          var p = za(document.elementFromPoint(c, b), !0);
          p !== d && (d = p, Bo()), Cf(l, u.options, p, s);
        }, 10), xf = c, Ef = b);
      } else {
        if (!this.options.bubbleScroll || za(m, !0) === zn()) {
          Bo();
          return;
        }
        Cf(l, this.options, za(m, !1), !1);
      }
    }
  }, la(r, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Bo() {
  ct.forEach(function(r) {
    clearInterval(r.pid);
  }), ct = [];
}
function jg() {
  clearInterval(Nl);
}
var Cf = Wv(function(r, a, l, s) {
  if (a.scroll) {
    var u = (r.touches ? r.touches[0] : r).clientX, c = (r.touches ? r.touches[0] : r).clientY, b = a.scrollSensitivity, m = a.scrollSpeed, d = zn(), p = !1, v;
    Ff !== l && (Ff = l, Bo(), wl = a.scroll, v = a.scrollFn, wl === !0 && (wl = za(l, !0)));
    var S = 0, g = wl;
    do {
      var y = g, h = ft(y), x = h.top, C = h.bottom, O = h.left, A = h.right, D = h.width, E = h.height, T = void 0, j = void 0, L = y.scrollWidth, G = y.scrollHeight, ee = _e(y), P = y.scrollLeft, Y = y.scrollTop;
      y === d ? (T = D < L && (ee.overflowX === "auto" || ee.overflowX === "scroll" || ee.overflowX === "visible"), j = E < G && (ee.overflowY === "auto" || ee.overflowY === "scroll" || ee.overflowY === "visible")) : (T = D < L && (ee.overflowX === "auto" || ee.overflowX === "scroll"), j = E < G && (ee.overflowY === "auto" || ee.overflowY === "scroll"));
      var X = T && (Math.abs(A - u) <= b && P + D < L) - (Math.abs(O - u) <= b && !!P), oe = j && (Math.abs(C - c) <= b && Y + E < G) - (Math.abs(x - c) <= b && !!Y);
      if (!ct[S])
        for (var fe = 0; fe <= S; fe++)
          ct[fe] || (ct[fe] = {});
      (ct[S].vx != X || ct[S].vy != oe || ct[S].el !== y) && (ct[S].el = y, ct[S].vx = X, ct[S].vy = oe, clearInterval(ct[S].pid), (X != 0 || oe != 0) && (p = !0, ct[S].pid = setInterval((function() {
        s && this.layer === 0 && xe.active._onTouchMove(Vo);
        var ue = ct[this.layer].vy ? ct[this.layer].vy * m : 0, U = ct[this.layer].vx ? ct[this.layer].vx * m : 0;
        typeof v == "function" && v.call(xe.dragged.parentNode[qt], U, ue, r, Vo, ct[this.layer].el) !== "continue" || $v(ct[this.layer].el, U, ue);
      }).bind({
        layer: S
      }), 24))), S++;
    } while (a.bubbleScroll && g !== d && (g = za(g, !1)));
    Xf = p;
  }
}, 30), sy = function(a) {
  var l = a.originalEvent, s = a.putSortable, u = a.dragEl, c = a.activeSortable, b = a.dispatchSortableEvent, m = a.hideGhostForTarget, d = a.unhideGhostForTarget;
  if (l) {
    var p = s || c;
    m();
    var v = l.changedTouches && l.changedTouches.length ? l.changedTouches[0] : l, S = document.elementFromPoint(v.clientX, v.clientY);
    d(), p && !p.el.contains(S) && (b("spill"), this.onSpill({
      dragEl: u,
      putSortable: s
    }));
  }
};
function oh() {
}
oh.prototype = {
  startIndex: null,
  dragStart: function(a) {
    var l = a.oldDraggableIndex;
    this.startIndex = l;
  },
  onSpill: function(a) {
    var l = a.dragEl, s = a.putSortable;
    this.sortable.captureAnimationState(), s && s.captureAnimationState();
    var u = pi(this.sortable.el, this.startIndex, this.options);
    u ? this.sortable.el.insertBefore(l, u) : this.sortable.el.appendChild(l), this.sortable.animateAll(), s && s.animateAll();
  },
  drop: sy
};
la(oh, {
  pluginName: "revertOnSpill"
});
function uh() {
}
uh.prototype = {
  onSpill: function(a) {
    var l = a.dragEl, s = a.putSortable, u = s || this.sortable;
    u.captureAnimationState(), l.parentNode && l.parentNode.removeChild(l), u.animateAll();
  },
  drop: sy
};
la(uh, {
  pluginName: "removeOnSpill"
});
xe.mount(new rS());
xe.mount(uh, oh);
async function iS({
  entry: r,
  selectedWorldName: a,
  skipSave: l = !1,
  skipReload: s = !1,
  operation: u = "auto"
}) {
  const c = SillyTavern.getContext(), b = await c.loadWorldInfo(a);
  if (!b)
    throw new Error("Failed to load world info");
  const m = Object.values(b.entries), d = m.length > 0 ? m[m.length - 1] : void 0;
  let p;
  if (u === "update" || u === "auto") {
    const S = Object.values(b.entries).find((g) => g.uid === r.uid);
    if (S)
      (u === "auto" || u === "update") && (p = S);
    else if (u === "update")
      throw new Error("Entry not found for update operation");
  }
  const v = p ? "update" : "add";
  if (!p) {
    if (p = Nb(a, b), !p)
      throw new Error("Failed to create entry");
    if (d) {
      const S = p.uid;
      Object.assign(p, d), p.uid = S;
    }
  }
  return p.key = r.key, p.content = r.content, p.comment = r.comment, l || await c.saveWorldInfo(a, b), s || c.reloadWorldInfoEditor(a, !0), {
    entry: p,
    operation: v
  };
}
const Qf = `=======

A character card is the blueprint for your AI. Its purpose is to provide a clear, consistent, and compelling set of instructions that guide the AI's personality, behavior, and speech. A well-crafted card is the difference between a forgettable bot and an immersive, believable character.

This guide is structured into two parts:
1.  **Core Identity:** The essential fields that define who your character is.
2.  **Interaction & Context:** The fields that define how the user will interact with them.

---

### Part 1: Core Identity - Defining Who The Character Is

These fields build the foundation of your character's being.

#### 1. Name
The character's primary identifier. It sets the first impression.

*   **Purpose**: To give the AI and user a clear reference point.
*   **Best Practices**:
    *   **Be Evocative**: A name like "Sergeant Rex 'Ironclad' Jones" tells a story. "Bob" does not.
    *   **Prioritize Clarity**: Avoid names that are difficult to spell or pronounce, as the AI may misuse them.
*   **Example**:
    *   **Strong**: "Kaelen, the Whisperwood Scout"
    *   **Weak**: "Xy'zth'gor"

#### 2. Description (The "At-a-Glance" Summary)
This is a concise paragraph that gives the AI a holistic "mental image" of the character. It should blend their most critical physical and personality traits into a single snapshot.

*   **Purpose**: To provide a quick, high-level summary the AI can reference for appearance, demeanor, and key details.
*   **Structure**:
    1.  **Appearance**: Start with their most defining physical features.
    2.  **Demeanor**: Describe their general personality and how they carry themselves.
    3.  **A Key Quirk**: End with a unique detail that makes them memorable.
*   **Example**:
    > A tall, graceful woman with bronze hair and startling green eyes, carrying herself with the quiet dignity of a noble and the focused intensity of a warrior. A member of a secretive matriarchal order, she is a master of subtle influence and a formidable political strategist. Though her exterior is composed and serene, she is fiercely protective of those she loves.

#### 3. Personality (The "Rulebook" for Behavior)
While the **Description** is a summary, this field contains direct, explicit instructions for the AI. It defines the character's internal thoughts, motivations, and behavioral rules in detail.

*   **Purpose**: To eliminate ambiguity and give the AI a clear, actionable set of traits to follow.
*   **Best Practices**:
    *   Use clear, declarative sentences to define the character's core rules.
    *   Focus on core motivations, deep-seated fears, and moral alignment.
    *   Avoid contradictions (e.g., describing a character as both "Patient" and "Impulsive") to ensure the AI's behavior remains consistent.
*   **Example**:
    > A supreme pragmatist who believes a functioning society is more important than a moral one. Masterfully manipulative, he remains several steps ahead of allies and enemies alike, viewing people as pieces on a chessboard to be positioned for the city's greater good. He abhors chaos and inefficiency above all else, maintaining a calm, detached, and unnervingly still demeanor that forces others to fill the silence. He never raises his voice, preferring to convey threats with quiet, measured words.

---

### Part 2: Interaction & Context - Setting the Stage

These fields define the environment and the way your character communicates.

#### 4. Scenario (The "Where, When, and Why")
This sets the scene for the interaction, providing the context that frames the roleplay.

*   **Purpose**: To establish the setting, the timeline, and the initial relationship between the character and the user.
*   **What to Include**:
    *   **Location**: Where is the interaction taking place?
    *   **Context**: What is happening?
    *   **Relationship**: How do {{char}} and {{user}} know each other?
*   **Example**:
    > The setting is a grimy, unsupervised slum in a sprawling metropolis, a place where illegal commerce thrives. The sky is the color of a dead television channel. {{char}} is a "console cowboy," a disgraced data thief whose nervous system was damaged as punishment for stealing from an employer. {{user}} is a mysterious mercenary who has tracked {{char}} down to offer a cure in exchange for one last, impossible job.

#### 5. First Message (The Opening Hook)
This is the character's opening line. It's the single most important field for establishing tone, voice, and immediate engagement.

*   **Purpose**: To kick off the roleplay with a compelling hook that embodies the character's personality.
*   **Key Elements**:
    1.  **Action**: Start with a physical action to ground the scene.
    2.  **Dialogue**: Write a line that reveals their personality.
    3.  **A Hook**: End with something that prompts a response.
*   **Example**:
    > *{{char}} calmly watches the spinning ceiling fan, the smoke from his cigarette curling into the stagnant air. He doesn't meet {{user}}'s eyes, instead focusing on the condensation on his glass.* "They're just questions. It's a test, designed to provoke an emotional response. Shall we continue?"

#### 6. Example Dialogue (The Voice & Style Guide)
This is a "style guide" that teaches the AI *how* your character speaks, thinks, and formats their responses.

*   **Purpose**: To provide a clear template for the character's speech patterns, vocabulary, and interaction style.
*   **Structure**:
    *   Use {{user}} and {{char}} to create 2-3 short exchanges.
    *   Showcase a range of emotions.
    *   Mix dialogue with actions (in asterisks) to demonstrate their body language.
*   **Example**:
    \`\`\`
    {{user}}: "What makes you think your plan will work?"
    {{char}}: *A slow, confident smirk spreads across her face as she leans back in her chair, boots resting on the scarred metal desk.* "Because I accounted for every variable. Especially the human one—your greed."

    {{user}}: "I'm not sure I can do this."
    {{char}}: *Her expression softens for a brief moment. She places a reassuring hand on {{user}}'s shoulder, her calloused fingers a surprising comfort.* "Fear is just a signal. It tells you what you need to protect. Now, let's protect it together."
    \`\`\`

#### 7. Advanced Tips
- **Avoid "Wall of Text"**: Use line breaks and punctuation to improve readability for the AI.

=======`, Zf = `{{#if characters}}
## Selected Characters for Context
{{#each characters}}
### {{this.name}}
{{#if this.description}}
#### Description
{{this.description}}
{{/if}}
{{#if this.personality}}
#### Personality
{{this.personality}}
{{/if}}
{{#if this.scenario}}
#### Scenario
{{this.scenario}}
{{/if}}
{{#if this.first_mes}}
#### First Message
{{this.first_mes}}
{{/if}}
{{#if this.mes_example}}
#### Example Dialogue
{{this.mes_example}}
{{/if}}
{{#if this.data.alternate_greetings}}
#### Alternate Greetings
{{#each this.data.alternate_greetings}}
### {{add @index 1}}
{{this}}
{{/each}}
{{/if}}

{{/each}}
{{/if}}`, lS = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST respond with ONLY a single \`<response>\` XML tag containing the generated field content.

Rules:
1. Output exactly ONE \`<response>\` tag. No other XML tags.
2. Do NOT wrap the response in markdown code fences (no \`\`\`).
3. Do NOT add any prose, explanation, or commentary outside the tag.
4. The content inside the tag is the final field value — write it directly as it should appear on the character card.

Example of a correct response:
<response>The character's description text goes here.</response>`, sS = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST respond with ONLY a JSON object of the form \`{"response": "..."}\` containing the generated field content as a single string.

Rules:
1. Output exactly ONE JSON object with a single key \`response\`.
2. Do NOT wrap the response in markdown code fences (no \`\`\`).
3. Do NOT add any prose, explanation, or commentary outside the object.
4. The string value is the final field value — write it directly as it should appear on the character card. Escape newlines as \\n and quotes as \\".

Example of a correct response:
{"response":"The character's description text goes here."}`, oS = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST respond with ONLY the raw text content for the field — no wrapping tags, no JSON, no code fences, and no explanatory prose.

Rules:
1. Output exactly the final field value, nothing else.
2. Do NOT wrap the response in markdown code fences (no \`\`\`).
3. Write the content exactly as it should appear on the character card.

Example of a correct response:
The character's description text goes here.`, ch = "{{activeFormatInstructions}}", oy = `{{#is_not_empty lorebooks}}
## Selected Lorebooks for Context
{{#each lorebooks}}
### {{@key}}
  {{#each this as |entry|}}
#### {{#if entry.comment}}{{entry.comment}}{{else}}*No title*{{/if}}
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}

  {{/each}}


{{/each}}
{{/is_not_empty}}`, uy = `### {{character.name}}
- **Description:** {{#if character.description}}{{character.description}}{{else}}*Not provided*{{/if}}
- **Personality:** {{#if character.personality}}{{character.personality}}{{else}}*Not provided*{{/if}}
- **Scenario:** {{#if character.scenario}}{{character.scenario}}{{else}}*Not provided*{{/if}}
- **First Message:** {{#if character.first_mes}}{{character.first_mes}}{{else}}*Not provided*{{/if}}
- **Example Dialogue:**
  {{#if character.mes_example}}{{character.mes_example}}{{else}}*Not provided*{{/if}}
- **Alternate Greetings:**
  {{#if character.alternate_greetings}}
  {{#each character.alternate_greetings}}
  **{{add @index 1}}:** {{this}}
  {{/each}}
  {{else}}*Not provided*{{/if}}`, jl = `{{#is_not_empty fields}}
=== CURRENT CHARACTER FIELD VALUES ===
These are the field values already filled in. Treat them as canon: your output for the requested field must stay consistent with them unless the user instructions explicitly say otherwise.

{{#is_not_empty fields.core}}
**Core Fields:**
{{#each fields.core as |value key|}}
- **{{key}}:** {{#if value}}{{value}}{{else}}*Not provided*{{/if}}
{{/each}}
{{/is_not_empty}}

{{#is_not_empty fields.alternate_greetings}}
**Alternate Greetings:**
{{#each fields.alternate_greetings as |value key|}}
- **{{key}}:** {{#if value}}{{value}}{{else}}*Not provided*{{/if}}
{{/each}}
{{/is_not_empty}}

{{#is_not_empty fields.draft}}
**Draft Fields:**
{{#each fields.draft as |value key|}}
- **{{key}}:** {{#if value}}{{value}}{{else}}*Not provided*{{/if}}
{{/each}}
{{/is_not_empty}}
{{/is_not_empty}}`, uS = `## User's Persona Description
name: {{user}}
{{persona}}`, fh = `Your task is to generate the content for the "{{targetField}}" field of a character card.

Use ALL of the provided context (chat history, persona, existing fields, character definitions, lorebooks) to inform your output. The goal is a cohesive card where every field is consistent with the others.

Guidelines:
- Match the tone and style of any provided example dialogue and existing fields.
- Keep {{char}} and {{user}} macros intact in dialogue-heavy fields (first_mes, mes_example, alternate greetings). For prose fields (description, personality, scenario), prefer naming the character directly unless a macro reads more naturally.
- Do NOT restate the user instructions verbatim. Use them as constraints.
- Do NOT add commentary, reasoning, or any text outside the requested format.

Field-specific guidance for this field: {{fieldGuidance}}

{{#if userInstructions}}
User instructions (treat as authoritative constraints for this generation):
{{userInstructions}}
{{/if}}
{{#if fieldSpecificInstructions}}

Field-specific instructions (applies only to this field):
{{fieldSpecificInstructions}}
{{/if}}`, cy = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", cS = cy + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", fS = "[" + cy + "][" + cS + "]*", hS = new RegExp("^" + fS + "$");
function fy(r, a) {
  const l = [];
  let s = a.exec(r);
  for (; s; ) {
    const u = [];
    u.startIndex = a.lastIndex - s[0].length;
    const c = s.length;
    for (let b = 0; b < c; b++)
      u.push(s[b]);
    l.push(u), s = a.exec(r);
  }
  return l;
}
const hh = function(r) {
  const a = hS.exec(r);
  return !(a === null || typeof a > "u");
};
function dS(r) {
  return typeof r < "u";
}
const pS = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function hy(r, a) {
  a = Object.assign({}, pS, a);
  const l = [];
  let s = !1, u = !1;
  r[0] === "\uFEFF" && (r = r.substr(1));
  for (let c = 0; c < r.length; c++)
    if (r[c] === "<" && r[c + 1] === "?") {
      if (c += 2, c = Bg(r, c), c.err) return c;
    } else if (r[c] === "<") {
      let b = c;
      if (c++, r[c] === "!") {
        c = zg(r, c);
        continue;
      } else {
        let m = !1;
        r[c] === "/" && (m = !0, c++);
        let d = "";
        for (; c < r.length && r[c] !== ">" && r[c] !== " " && r[c] !== "	" && r[c] !== `
` && r[c] !== "\r"; c++)
          d += r[c];
        if (d = d.trim(), d[d.length - 1] === "/" && (d = d.substring(0, d.length - 1), c--), !xS(d)) {
          let S;
          return d.trim().length === 0 ? S = "Invalid space after '<'." : S = "Tag '" + d + "' is an invalid name.", st("InvalidTag", S, Rt(r, c));
        }
        const p = vS(r, c);
        if (p === !1)
          return st("InvalidAttr", "Attributes for '" + d + "' have open quote.", Rt(r, c));
        let v = p.value;
        if (c = p.index, v[v.length - 1] === "/") {
          const S = c - v.length;
          v = v.substring(0, v.length - 1);
          const g = Ug(v, a);
          if (g === !0)
            s = !0;
          else
            return st(g.err.code, g.err.msg, Rt(r, S + g.err.line));
        } else if (m)
          if (p.tagClosed) {
            if (v.trim().length > 0)
              return st("InvalidTag", "Closing tag '" + d + "' can't have attributes or invalid starting.", Rt(r, b));
            if (l.length === 0)
              return st("InvalidTag", "Closing tag '" + d + "' has not been opened.", Rt(r, b));
            {
              const S = l.pop();
              if (d !== S.tagName) {
                let g = Rt(r, S.tagStartPos);
                return st(
                  "InvalidTag",
                  "Expected closing tag '" + S.tagName + "' (opened in line " + g.line + ", col " + g.col + ") instead of closing tag '" + d + "'.",
                  Rt(r, b)
                );
              }
              l.length == 0 && (u = !0);
            }
          } else return st("InvalidTag", "Closing tag '" + d + "' doesn't have proper closing.", Rt(r, c));
        else {
          const S = Ug(v, a);
          if (S !== !0)
            return st(S.err.code, S.err.msg, Rt(r, c - v.length + S.err.line));
          if (u === !0)
            return st("InvalidXml", "Multiple possible root nodes found.", Rt(r, c));
          a.unpairedTags.indexOf(d) !== -1 || l.push({ tagName: d, tagStartPos: b }), s = !0;
        }
        for (c++; c < r.length; c++)
          if (r[c] === "<")
            if (r[c + 1] === "!") {
              c++, c = zg(r, c);
              continue;
            } else if (r[c + 1] === "?") {
              if (c = Bg(r, ++c), c.err) return c;
            } else
              break;
          else if (r[c] === "&") {
            const S = SS(r, c);
            if (S == -1)
              return st("InvalidChar", "char '&' is not expected.", Rt(r, c));
            c = S;
          } else if (u === !0 && !Lg(r[c]))
            return st("InvalidXml", "Extra text at the end", Rt(r, c));
        r[c] === "<" && c--;
      }
    } else {
      if (Lg(r[c]))
        continue;
      return st("InvalidChar", "char '" + r[c] + "' is not expected.", Rt(r, c));
    }
  if (s) {
    if (l.length == 1)
      return st("InvalidTag", "Unclosed tag '" + l[0].tagName + "'.", Rt(r, l[0].tagStartPos));
    if (l.length > 0)
      return st("InvalidXml", "Invalid '" + JSON.stringify(l.map((c) => c.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return st("InvalidXml", "Start tag expected.", 1);
  return !0;
}
function Lg(r) {
  return r === " " || r === "	" || r === `
` || r === "\r";
}
function Bg(r, a) {
  const l = a;
  for (; a < r.length; a++)
    if (r[a] == "?" || r[a] == " ") {
      const s = r.substr(l, a - l);
      if (a > 5 && s === "xml")
        return st("InvalidXml", "XML declaration allowed only at the start of the document.", Rt(r, a));
      if (r[a] == "?" && r[a + 1] == ">") {
        a++;
        break;
      } else
        continue;
    }
  return a;
}
function zg(r, a) {
  if (r.length > a + 5 && r[a + 1] === "-" && r[a + 2] === "-") {
    for (a += 3; a < r.length; a++)
      if (r[a] === "-" && r[a + 1] === "-" && r[a + 2] === ">") {
        a += 2;
        break;
      }
  } else if (r.length > a + 8 && r[a + 1] === "D" && r[a + 2] === "O" && r[a + 3] === "C" && r[a + 4] === "T" && r[a + 5] === "Y" && r[a + 6] === "P" && r[a + 7] === "E") {
    let l = 1;
    for (a += 8; a < r.length; a++)
      if (r[a] === "<")
        l++;
      else if (r[a] === ">" && (l--, l === 0))
        break;
  } else if (r.length > a + 9 && r[a + 1] === "[" && r[a + 2] === "C" && r[a + 3] === "D" && r[a + 4] === "A" && r[a + 5] === "T" && r[a + 6] === "A" && r[a + 7] === "[") {
    for (a += 8; a < r.length; a++)
      if (r[a] === "]" && r[a + 1] === "]" && r[a + 2] === ">") {
        a += 2;
        break;
      }
  }
  return a;
}
const mS = '"', gS = "'";
function vS(r, a) {
  let l = "", s = "", u = !1;
  for (; a < r.length; a++) {
    if (r[a] === mS || r[a] === gS)
      s === "" ? s = r[a] : s !== r[a] || (s = "");
    else if (r[a] === ">" && s === "") {
      u = !0;
      break;
    }
    l += r[a];
  }
  return s !== "" ? !1 : {
    value: l,
    index: a,
    tagClosed: u
  };
}
const yS = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Ug(r, a) {
  const l = fy(r, yS), s = {};
  for (let u = 0; u < l.length; u++) {
    if (l[u][1].length === 0)
      return st("InvalidAttr", "Attribute '" + l[u][2] + "' has no space in starting.", yl(l[u]));
    if (l[u][3] !== void 0 && l[u][4] === void 0)
      return st("InvalidAttr", "Attribute '" + l[u][2] + "' is without value.", yl(l[u]));
    if (l[u][3] === void 0 && !a.allowBooleanAttributes)
      return st("InvalidAttr", "boolean attribute '" + l[u][2] + "' is not allowed.", yl(l[u]));
    const c = l[u][2];
    if (!_S(c))
      return st("InvalidAttr", "Attribute '" + c + "' is an invalid name.", yl(l[u]));
    if (!s.hasOwnProperty(c))
      s[c] = 1;
    else
      return st("InvalidAttr", "Attribute '" + c + "' is repeated.", yl(l[u]));
  }
  return !0;
}
function bS(r, a) {
  let l = /\d/;
  for (r[a] === "x" && (a++, l = /[\da-fA-F]/); a < r.length; a++) {
    if (r[a] === ";")
      return a;
    if (!r[a].match(l))
      break;
  }
  return -1;
}
function SS(r, a) {
  if (a++, r[a] === ";")
    return -1;
  if (r[a] === "#")
    return a++, bS(r, a);
  let l = 0;
  for (; a < r.length; a++, l++)
    if (!(r[a].match(/\w/) && l < 20)) {
      if (r[a] === ";")
        break;
      return -1;
    }
  return a;
}
function st(r, a, l) {
  return {
    err: {
      code: r,
      msg: a,
      line: l.line || l,
      col: l.col
    }
  };
}
function _S(r) {
  return hh(r);
}
function xS(r) {
  return hh(r);
}
function Rt(r, a) {
  const l = r.substring(0, a).split(/\r?\n/);
  return {
    line: l.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: l[l.length - 1].length + 1
  };
}
function yl(r) {
  return r.startIndex + r[1].length;
}
const ES = {
  preserveOrder: !1,
  attributeNamePrefix: "@_",
  attributesGroupName: !1,
  textNodeName: "#text",
  ignoreAttributes: !0,
  removeNSPrefix: !1,
  // remove NS from tag name or attribute name if true
  allowBooleanAttributes: !1,
  //a tag can have attributes without any value
  //ignoreRootElement : false,
  parseTagValue: !0,
  parseAttributeValue: !1,
  trimValues: !0,
  //Trim string values of tag and attributes
  cdataPropName: !1,
  numberParseOptions: {
    hex: !0,
    leadingZeros: !0,
    eNotation: !0
  },
  tagValueProcessor: function(r, a) {
    return a;
  },
  attributeValueProcessor: function(r, a) {
    return a;
  },
  stopNodes: [],
  //nested tags will not be parsed even for errors
  alwaysCreateTextNode: !1,
  isArray: () => !1,
  commentPropName: !1,
  unpairedTags: [],
  processEntities: !0,
  htmlEntities: !1,
  ignoreDeclaration: !1,
  ignorePiTags: !1,
  transformTagName: !1,
  transformAttributeName: !1,
  updateTag: function(r, a, l) {
    return r;
  }
  // skipEmptyListItem: false
}, CS = function(r) {
  return Object.assign({}, ES, r);
};
class bl {
  constructor(a) {
    this.tagname = a, this.child = [], this[":@"] = {};
  }
  add(a, l) {
    a === "__proto__" && (a = "#__proto__"), this.child.push({ [a]: l });
  }
  addChild(a) {
    a.tagname === "__proto__" && (a.tagname = "#__proto__"), a[":@"] && Object.keys(a[":@"]).length > 0 ? this.child.push({ [a.tagname]: a.child, ":@": a[":@"] }) : this.child.push({ [a.tagname]: a.child });
  }
}
function AS(r, a) {
  const l = {};
  if (r[a + 3] === "O" && r[a + 4] === "C" && r[a + 5] === "T" && r[a + 6] === "Y" && r[a + 7] === "P" && r[a + 8] === "E") {
    a = a + 9;
    let s = 1, u = !1, c = !1, b = "";
    for (; a < r.length; a++)
      if (r[a] === "<" && !c) {
        if (u && NS(r, a)) {
          a += 7;
          let m, d;
          [m, d, a] = TS(r, a + 1), d.indexOf("&") === -1 && (l[RS(m)] = {
            regx: RegExp(`&${m};`, "g"),
            val: d
          });
        } else if (u && OS(r, a)) a += 8;
        else if (u && DS(r, a)) a += 8;
        else if (u && MS(r, a)) a += 9;
        else if (wS) c = !0;
        else throw new Error("Invalid DOCTYPE");
        s++, b = "";
      } else if (r[a] === ">") {
        if (c ? r[a - 1] === "-" && r[a - 2] === "-" && (c = !1, s--) : s--, s === 0)
          break;
      } else r[a] === "[" ? u = !0 : b += r[a];
    if (s !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: l, i: a };
}
function TS(r, a) {
  let l = "";
  for (; a < r.length && r[a] !== "'" && r[a] !== '"'; a++)
    l += r[a];
  if (l = l.trim(), l.indexOf(" ") !== -1) throw new Error("External entites are not supported");
  const s = r[a++];
  let u = "";
  for (; a < r.length && r[a] !== s; a++)
    u += r[a];
  return [l, u, a];
}
function wS(r, a) {
  return r[a + 1] === "!" && r[a + 2] === "-" && r[a + 3] === "-";
}
function NS(r, a) {
  return r[a + 1] === "!" && r[a + 2] === "E" && r[a + 3] === "N" && r[a + 4] === "T" && r[a + 5] === "I" && r[a + 6] === "T" && r[a + 7] === "Y";
}
function OS(r, a) {
  return r[a + 1] === "!" && r[a + 2] === "E" && r[a + 3] === "L" && r[a + 4] === "E" && r[a + 5] === "M" && r[a + 6] === "E" && r[a + 7] === "N" && r[a + 8] === "T";
}
function DS(r, a) {
  return r[a + 1] === "!" && r[a + 2] === "A" && r[a + 3] === "T" && r[a + 4] === "T" && r[a + 5] === "L" && r[a + 6] === "I" && r[a + 7] === "S" && r[a + 8] === "T";
}
function MS(r, a) {
  return r[a + 1] === "!" && r[a + 2] === "N" && r[a + 3] === "O" && r[a + 4] === "T" && r[a + 5] === "A" && r[a + 6] === "T" && r[a + 7] === "I" && r[a + 8] === "O" && r[a + 9] === "N";
}
function RS(r) {
  if (hh(r))
    return r;
  throw new Error(`Invalid entity name ${r}`);
}
const kS = /^[-+]?0x[a-fA-F0-9]+$/, jS = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, LS = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function BS(r, a = {}) {
  if (a = Object.assign({}, LS, a), !r || typeof r != "string") return r;
  let l = r.trim();
  if (a.skipLike !== void 0 && a.skipLike.test(l)) return r;
  if (r === "0") return 0;
  if (a.hex && kS.test(l))
    return US(l, 16);
  if (l.search(/[eE]/) !== -1) {
    const s = l.match(/^([-\+])?(0*)([0-9]*(\.[0-9]*)?[eE][-\+]?[0-9]+)$/);
    if (s) {
      if (a.leadingZeros)
        l = (s[1] || "") + s[3];
      else if (!(s[2] === "0" && s[3][0] === ".")) return r;
      return a.eNotation ? Number(l) : r;
    } else
      return r;
  } else {
    const s = jS.exec(l);
    if (s) {
      const u = s[1], c = s[2];
      let b = zS(s[3]);
      if (!a.leadingZeros && c.length > 0 && u && l[2] !== ".") return r;
      if (!a.leadingZeros && c.length > 0 && !u && l[1] !== ".") return r;
      if (a.leadingZeros && c === r) return 0;
      {
        const m = Number(l), d = "" + m;
        return d.search(/[eE]/) !== -1 ? a.eNotation ? m : r : l.indexOf(".") !== -1 ? d === "0" && b === "" || d === b || u && d === "-" + b ? m : r : c ? b === d || u + b === d ? m : r : l === d || l === u + d ? m : r;
      }
    } else
      return r;
  }
}
function zS(r) {
  return r && r.indexOf(".") !== -1 && (r = r.replace(/0+$/, ""), r === "." ? r = "0" : r[0] === "." ? r = "0" + r : r[r.length - 1] === "." && (r = r.substr(0, r.length - 1))), r;
}
function US(r, a) {
  if (parseInt) return parseInt(r, a);
  if (Number.parseInt) return Number.parseInt(r, a);
  if (window && window.parseInt) return window.parseInt(r, a);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function HS(r) {
  return typeof r == "function" ? r : Array.isArray(r) ? (a) => {
    for (const l of r)
      if (typeof l == "string" && a === l || l instanceof RegExp && l.test(a))
        return !0;
  } : () => !1;
}
class PS {
  constructor(a) {
    this.options = a, this.currentNode = null, this.tagsNodeStack = [], this.docTypeEntities = {}, this.lastEntities = {
      apos: { regex: /&(apos|#39|#x27);/g, val: "'" },
      gt: { regex: /&(gt|#62|#x3E);/g, val: ">" },
      lt: { regex: /&(lt|#60|#x3C);/g, val: "<" },
      quot: { regex: /&(quot|#34|#x22);/g, val: '"' }
    }, this.ampEntity = { regex: /&(amp|#38|#x26);/g, val: "&" }, this.htmlEntities = {
      space: { regex: /&(nbsp|#160);/g, val: " " },
      // "lt" : { regex: /&(lt|#60);/g, val: "<" },
      // "gt" : { regex: /&(gt|#62);/g, val: ">" },
      // "amp" : { regex: /&(amp|#38);/g, val: "&" },
      // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
      // "apos" : { regex: /&(apos|#39);/g, val: "'" },
      cent: { regex: /&(cent|#162);/g, val: "¢" },
      pound: { regex: /&(pound|#163);/g, val: "£" },
      yen: { regex: /&(yen|#165);/g, val: "¥" },
      euro: { regex: /&(euro|#8364);/g, val: "€" },
      copyright: { regex: /&(copy|#169);/g, val: "©" },
      reg: { regex: /&(reg|#174);/g, val: "®" },
      inr: { regex: /&(inr|#8377);/g, val: "₹" },
      num_dec: { regex: /&#([0-9]{1,7});/g, val: (l, s) => String.fromCodePoint(Number.parseInt(s, 10)) },
      num_hex: { regex: /&#x([0-9a-fA-F]{1,6});/g, val: (l, s) => String.fromCodePoint(Number.parseInt(s, 16)) }
    }, this.addExternalEntities = qS, this.parseXml = FS, this.parseTextData = IS, this.resolveNameSpace = GS, this.buildAttributesMap = YS, this.isItStopNode = KS, this.replaceEntitiesValue = QS, this.readStopNodeData = WS, this.saveTextToParentTag = ZS, this.addChild = XS, this.ignoreAttributesFn = HS(this.options.ignoreAttributes);
  }
}
function qS(r) {
  const a = Object.keys(r);
  for (let l = 0; l < a.length; l++) {
    const s = a[l];
    this.lastEntities[s] = {
      regex: new RegExp("&" + s + ";", "g"),
      val: r[s]
    };
  }
}
function IS(r, a, l, s, u, c, b) {
  if (r !== void 0 && (this.options.trimValues && !s && (r = r.trim()), r.length > 0)) {
    b || (r = this.replaceEntitiesValue(r));
    const m = this.options.tagValueProcessor(a, r, l, u, c);
    return m == null ? r : typeof m != typeof r || m !== r ? m : this.options.trimValues ? Jf(r, this.options.parseTagValue, this.options.numberParseOptions) : r.trim() === r ? Jf(r, this.options.parseTagValue, this.options.numberParseOptions) : r;
  }
}
function GS(r) {
  if (this.options.removeNSPrefix) {
    const a = r.split(":"), l = r.charAt(0) === "/" ? "/" : "";
    if (a[0] === "xmlns")
      return "";
    a.length === 2 && (r = l + a[1]);
  }
  return r;
}
const VS = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function YS(r, a, l) {
  if (this.options.ignoreAttributes !== !0 && typeof r == "string") {
    const s = fy(r, VS), u = s.length, c = {};
    for (let b = 0; b < u; b++) {
      const m = this.resolveNameSpace(s[b][1]);
      if (this.ignoreAttributesFn(m, a))
        continue;
      let d = s[b][4], p = this.options.attributeNamePrefix + m;
      if (m.length)
        if (this.options.transformAttributeName && (p = this.options.transformAttributeName(p)), p === "__proto__" && (p = "#__proto__"), d !== void 0) {
          this.options.trimValues && (d = d.trim()), d = this.replaceEntitiesValue(d);
          const v = this.options.attributeValueProcessor(m, d, a);
          v == null ? c[p] = d : typeof v != typeof d || v !== d ? c[p] = v : c[p] = Jf(
            d,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (c[p] = !0);
    }
    if (!Object.keys(c).length)
      return;
    if (this.options.attributesGroupName) {
      const b = {};
      return b[this.options.attributesGroupName] = c, b;
    }
    return c;
  }
}
const FS = function(r) {
  r = r.replace(/\r\n?/g, `
`);
  const a = new bl("!xml");
  let l = a, s = "", u = "";
  for (let c = 0; c < r.length; c++)
    if (r[c] === "<")
      if (r[c + 1] === "/") {
        const m = pr(r, ">", c, "Closing Tag is not closed.");
        let d = r.substring(c + 2, m).trim();
        if (this.options.removeNSPrefix) {
          const S = d.indexOf(":");
          S !== -1 && (d = d.substr(S + 1));
        }
        this.options.transformTagName && (d = this.options.transformTagName(d)), l && (s = this.saveTextToParentTag(s, l, u));
        const p = u.substring(u.lastIndexOf(".") + 1);
        if (d && this.options.unpairedTags.indexOf(d) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${d}>`);
        let v = 0;
        p && this.options.unpairedTags.indexOf(p) !== -1 ? (v = u.lastIndexOf(".", u.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : v = u.lastIndexOf("."), u = u.substring(0, v), l = this.tagsNodeStack.pop(), s = "", c = m;
      } else if (r[c + 1] === "?") {
        let m = Kf(r, c, !1, "?>");
        if (!m) throw new Error("Pi Tag is not closed.");
        if (s = this.saveTextToParentTag(s, l, u), !(this.options.ignoreDeclaration && m.tagName === "?xml" || this.options.ignorePiTags)) {
          const d = new bl(m.tagName);
          d.add(this.options.textNodeName, ""), m.tagName !== m.tagExp && m.attrExpPresent && (d[":@"] = this.buildAttributesMap(m.tagExp, u, m.tagName)), this.addChild(l, d, u);
        }
        c = m.closeIndex + 1;
      } else if (r.substr(c + 1, 3) === "!--") {
        const m = pr(r, "-->", c + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const d = r.substring(c + 4, m - 2);
          s = this.saveTextToParentTag(s, l, u), l.add(this.options.commentPropName, [{ [this.options.textNodeName]: d }]);
        }
        c = m;
      } else if (r.substr(c + 1, 2) === "!D") {
        const m = AS(r, c);
        this.docTypeEntities = m.entities, c = m.i;
      } else if (r.substr(c + 1, 2) === "![") {
        const m = pr(r, "]]>", c, "CDATA is not closed.") - 2, d = r.substring(c + 9, m);
        s = this.saveTextToParentTag(s, l, u);
        let p = this.parseTextData(d, l.tagname, u, !0, !1, !0, !0);
        p == null && (p = ""), this.options.cdataPropName ? l.add(this.options.cdataPropName, [{ [this.options.textNodeName]: d }]) : l.add(this.options.textNodeName, p), c = m + 2;
      } else {
        let m = Kf(r, c, this.options.removeNSPrefix), d = m.tagName;
        const p = m.rawTagName;
        let v = m.tagExp, S = m.attrExpPresent, g = m.closeIndex;
        this.options.transformTagName && (d = this.options.transformTagName(d)), l && s && l.tagname !== "!xml" && (s = this.saveTextToParentTag(s, l, u, !1));
        const y = l;
        if (y && this.options.unpairedTags.indexOf(y.tagname) !== -1 && (l = this.tagsNodeStack.pop(), u = u.substring(0, u.lastIndexOf("."))), d !== a.tagname && (u += u ? "." + d : d), this.isItStopNode(this.options.stopNodes, u, d)) {
          let h = "";
          if (v.length > 0 && v.lastIndexOf("/") === v.length - 1)
            d[d.length - 1] === "/" ? (d = d.substr(0, d.length - 1), u = u.substr(0, u.length - 1), v = d) : v = v.substr(0, v.length - 1), c = m.closeIndex;
          else if (this.options.unpairedTags.indexOf(d) !== -1)
            c = m.closeIndex;
          else {
            const C = this.readStopNodeData(r, p, g + 1);
            if (!C) throw new Error(`Unexpected end of ${p}`);
            c = C.i, h = C.tagContent;
          }
          const x = new bl(d);
          d !== v && S && (x[":@"] = this.buildAttributesMap(v, u, d)), h && (h = this.parseTextData(h, d, u, !0, S, !0, !0)), u = u.substr(0, u.lastIndexOf(".")), x.add(this.options.textNodeName, h), this.addChild(l, x, u);
        } else {
          if (v.length > 0 && v.lastIndexOf("/") === v.length - 1) {
            d[d.length - 1] === "/" ? (d = d.substr(0, d.length - 1), u = u.substr(0, u.length - 1), v = d) : v = v.substr(0, v.length - 1), this.options.transformTagName && (d = this.options.transformTagName(d));
            const h = new bl(d);
            d !== v && S && (h[":@"] = this.buildAttributesMap(v, u, d)), this.addChild(l, h, u), u = u.substr(0, u.lastIndexOf("."));
          } else {
            const h = new bl(d);
            this.tagsNodeStack.push(l), d !== v && S && (h[":@"] = this.buildAttributesMap(v, u, d)), this.addChild(l, h, u), l = h;
          }
          s = "", c = g;
        }
      }
    else
      s += r[c];
  return a.child;
};
function XS(r, a, l) {
  const s = this.options.updateTag(a.tagname, l, a[":@"]);
  s === !1 || (typeof s == "string" && (a.tagname = s), r.addChild(a));
}
const QS = function(r) {
  if (this.options.processEntities) {
    for (let a in this.docTypeEntities) {
      const l = this.docTypeEntities[a];
      r = r.replace(l.regx, l.val);
    }
    for (let a in this.lastEntities) {
      const l = this.lastEntities[a];
      r = r.replace(l.regex, l.val);
    }
    if (this.options.htmlEntities)
      for (let a in this.htmlEntities) {
        const l = this.htmlEntities[a];
        r = r.replace(l.regex, l.val);
      }
    r = r.replace(this.ampEntity.regex, this.ampEntity.val);
  }
  return r;
};
function ZS(r, a, l, s) {
  return r && (s === void 0 && (s = a.child.length === 0), r = this.parseTextData(
    r,
    a.tagname,
    l,
    !1,
    a[":@"] ? Object.keys(a[":@"]).length !== 0 : !1,
    s
  ), r !== void 0 && r !== "" && a.add(this.options.textNodeName, r), r = ""), r;
}
function KS(r, a, l) {
  const s = "*." + l;
  for (const u in r) {
    const c = r[u];
    if (s === c || a === c) return !0;
  }
  return !1;
}
function JS(r, a, l = ">") {
  let s, u = "";
  for (let c = a; c < r.length; c++) {
    let b = r[c];
    if (s)
      b === s && (s = "");
    else if (b === '"' || b === "'")
      s = b;
    else if (b === l[0])
      if (l[1]) {
        if (r[c + 1] === l[1])
          return {
            data: u,
            index: c
          };
      } else
        return {
          data: u,
          index: c
        };
    else b === "	" && (b = " ");
    u += b;
  }
}
function pr(r, a, l, s) {
  const u = r.indexOf(a, l);
  if (u === -1)
    throw new Error(s);
  return u + a.length - 1;
}
function Kf(r, a, l, s = ">") {
  const u = JS(r, a + 1, s);
  if (!u) return;
  let c = u.data;
  const b = u.index, m = c.search(/\s/);
  let d = c, p = !0;
  m !== -1 && (d = c.substring(0, m), c = c.substring(m + 1).trimStart());
  const v = d;
  if (l) {
    const S = d.indexOf(":");
    S !== -1 && (d = d.substr(S + 1), p = d !== u.data.substr(S + 1));
  }
  return {
    tagName: d,
    tagExp: c,
    closeIndex: b,
    attrExpPresent: p,
    rawTagName: v
  };
}
function WS(r, a, l) {
  const s = l;
  let u = 1;
  for (; l < r.length; l++)
    if (r[l] === "<")
      if (r[l + 1] === "/") {
        const c = pr(r, ">", l, `${a} is not closed`);
        if (r.substring(l + 2, c).trim() === a && (u--, u === 0))
          return {
            tagContent: r.substring(s, l),
            i: c
          };
        l = c;
      } else if (r[l + 1] === "?")
        l = pr(r, "?>", l + 1, "StopNode is not closed.");
      else if (r.substr(l + 1, 3) === "!--")
        l = pr(r, "-->", l + 3, "StopNode is not closed.");
      else if (r.substr(l + 1, 2) === "![")
        l = pr(r, "]]>", l, "StopNode is not closed.") - 2;
      else {
        const c = Kf(r, l, ">");
        c && ((c && c.tagName) === a && c.tagExp[c.tagExp.length - 1] !== "/" && u++, l = c.closeIndex);
      }
}
function Jf(r, a, l) {
  if (a && typeof r == "string") {
    const s = r.trim();
    return s === "true" ? !0 : s === "false" ? !1 : BS(r, l);
  } else
    return dS(r) ? r : "";
}
function $S(r, a) {
  return dy(r, a);
}
function dy(r, a, l) {
  let s;
  const u = {};
  for (let c = 0; c < r.length; c++) {
    const b = r[c], m = e_(b);
    let d = "";
    if (l === void 0 ? d = m : d = l + "." + m, m === a.textNodeName)
      s === void 0 ? s = b[m] : s += "" + b[m];
    else {
      if (m === void 0)
        continue;
      if (b[m]) {
        let p = dy(b[m], a, d);
        const v = n_(p, a);
        b[":@"] ? t_(p, b[":@"], d, a) : Object.keys(p).length === 1 && p[a.textNodeName] !== void 0 && !a.alwaysCreateTextNode ? p = p[a.textNodeName] : Object.keys(p).length === 0 && (a.alwaysCreateTextNode ? p[a.textNodeName] = "" : p = ""), u[m] !== void 0 && u.hasOwnProperty(m) ? (Array.isArray(u[m]) || (u[m] = [u[m]]), u[m].push(p)) : a.isArray(m, d, v) ? u[m] = [p] : u[m] = p;
      }
    }
  }
  return typeof s == "string" ? s.length > 0 && (u[a.textNodeName] = s) : s !== void 0 && (u[a.textNodeName] = s), u;
}
function e_(r) {
  const a = Object.keys(r);
  for (let l = 0; l < a.length; l++) {
    const s = a[l];
    if (s !== ":@") return s;
  }
}
function t_(r, a, l, s) {
  if (a) {
    const u = Object.keys(a), c = u.length;
    for (let b = 0; b < c; b++) {
      const m = u[b];
      s.isArray(m, l + "." + m, !0, !0) ? r[m] = [a[m]] : r[m] = a[m];
    }
  }
}
function n_(r, a) {
  const { textNodeName: l } = a, s = Object.keys(r).length;
  return !!(s === 0 || s === 1 && (r[l] || typeof r[l] == "boolean" || r[l] === 0));
}
class a_ {
  constructor(a) {
    this.externalEntities = {}, this.options = CS(a);
  }
  /**
   * Parse XML dats to JS object 
   * @param {string|Buffer} xmlData 
   * @param {boolean|Object} validationOption 
   */
  parse(a, l) {
    if (typeof a != "string") if (a.toString)
      a = a.toString();
    else
      throw new Error("XML data is accepted in String or Bytes[] form.");
    if (l) {
      l === !0 && (l = {});
      const c = hy(a, l);
      if (c !== !0)
        throw Error(`${c.err.msg}:${c.err.line}:${c.err.col}`);
    }
    const s = new PS(this.options);
    s.addExternalEntities(this.externalEntities);
    const u = s.parseXml(a);
    return this.options.preserveOrder || u === void 0 ? u : $S(u, this.options);
  }
  /**
   * Add Entity which is not by default supported by this library
   * @param {string} key 
   * @param {string} value 
   */
  addEntity(a, l) {
    if (l.indexOf("&") !== -1)
      throw new Error("Entity value can't have '&'");
    if (a.indexOf("&") !== -1 || a.indexOf(";") !== -1)
      throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'");
    if (l === "&")
      throw new Error("An entity with value '&' is not permitted");
    this.externalEntities[a] = l;
  }
}
const r_ = {
  validate: hy
}, i_ = new a_({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
}), py = "START", l_ = /<START>/g, s_ = (r) => r.replace(l_, py), si = (r) => r.split(py).join("<START>");
function Wf(r, a) {
  if (!(!a || !r || !a.properties))
    for (const l in a.properties) {
      if (!r.hasOwnProperty(l)) continue;
      const s = a.properties[l];
      let u = r[l];
      s.type === "array" && !Array.isArray(u) && (u = [u], r[l] = u), s.type === "object" && typeof u == "object" && u !== null ? Wf(u, s) : s.type === "array" && s.items?.type === "object" && Array.isArray(u) && u.forEach((c) => Wf(c, s.items)), s.type === "string" && typeof u != "string" ? r[l] = String(u) : s.type === "array" && s.items?.type === "string" && Array.isArray(u) && (r[l] = u.map(String));
    }
}
function o_(r) {
  const a = /```(?:\w+\n|\n)?([\s\S]*?)```/g;
  let l, s = null;
  for (; (l = a.exec(r)) !== null; )
    s = l[1].trim();
  return s;
}
function mr(r) {
  if (r == null)
    return "";
  if (typeof r != "object")
    return String(r).trim();
  if ("#text" in r)
    return mr(r["#text"]);
  if ("response" in r)
    return mr(r.response);
  if ("message" in r)
    return mr(r.message);
  const a = Object.values(r)[0];
  return mr(a);
}
function u_(r, a, l = {}) {
  let u = o_(r) ?? r.trim();
  try {
    switch (a) {
      case "xml": {
        const c = s_(u);
        if (l.schema) {
          const m = r_.validate(c);
          if (m !== !0)
            throw new Error(`Model response is not valid XML: ${m.err.msg}`);
        }
        let b = i_.parse(c);
        if (b.root)
          b = b.root;
        else if (b.response)
          return si(mr(b.response));
        return l.schema ? (Wf(b, l.schema), b) : si(mr(b));
      }
      case "json": {
        const c = JSON.parse(u), b = l.schema ? c : mr(c);
        return typeof b == "string" ? si(b) : b;
      }
      case "none":
        return si(u);
      default:
        throw new Error(`Unsupported format specified: ${a}`);
    }
  } catch (c) {
    if (a !== "none" && !l.schema) {
      const b = u.match(/<response>([\s\S]*)/);
      if (b)
        return l.onRecovery?.(`XML response was malformed; recovered inner text via regex (parse error: ${c?.message ?? "unknown"})`), si(b[1].replace(/<\/[\s\S]*$/, "").trim());
      const m = u.match(/"response":\s*"([\s\S]*)/);
      if (m)
        return l.onRecovery?.(`JSON response was malformed; recovered inner text via regex (parse error: ${c?.message ?? "unknown"})`), si(m[1].replace(/"\s*}\s*$/, ""));
    }
    throw console.error(`Error parsing response in format '${a}':`, c), console.error("Raw content received:", r), a === "xml" ? c.message.startsWith("Model response is not valid XML:") ? c : new Error(`Model response is not valid XML: ${c.message}`) : a === "json" ? new Error("Model response is not valid JSON.") : new Error(`Failed to parse response as ${a}: ${c.message}`);
  }
}
function c_(r) {
  return r.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/[\u0000-\u001F]/g, (a) => `\\u${a.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function Hg(r, a) {
  const l = r.trim();
  switch (a) {
    case "xml":
      return `<response>${l}`;
    case "json":
      return `{
  "response": "${c_(l)}`;
    case "none":
      return l;
    default:
      throw new Error(`Unsupported format specified: ${a}`);
  }
}
var ao = { exports: {} }, ro = { exports: {} }, xn = {}, Pt = {}, Pg;
function It() {
  if (Pg) return Pt;
  Pg = 1, Pt.__esModule = !0, Pt.extend = u, Pt.indexOf = d, Pt.escapeExpression = p, Pt.isEmpty = v, Pt.createFrame = S, Pt.blockParams = g, Pt.appendContextPath = y;
  var r = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, a = /[&<>"'`=]/g, l = /[&<>"'`=]/;
  function s(h) {
    return r[h];
  }
  function u(h) {
    for (var x = 1; x < arguments.length; x++)
      for (var C in arguments[x])
        Object.prototype.hasOwnProperty.call(arguments[x], C) && (h[C] = arguments[x][C]);
    return h;
  }
  var c = Object.prototype.toString;
  Pt.toString = c;
  var b = function(x) {
    return typeof x == "function";
  };
  b(/x/) && (Pt.isFunction = b = function(h) {
    return typeof h == "function" && c.call(h) === "[object Function]";
  }), Pt.isFunction = b;
  var m = Array.isArray || function(h) {
    return h && typeof h == "object" ? c.call(h) === "[object Array]" : !1;
  };
  Pt.isArray = m;
  function d(h, x) {
    for (var C = 0, O = h.length; C < O; C++)
      if (h[C] === x)
        return C;
    return -1;
  }
  function p(h) {
    if (typeof h != "string") {
      if (h && h.toHTML)
        return h.toHTML();
      if (h == null)
        return "";
      if (!h)
        return h + "";
      h = "" + h;
    }
    return l.test(h) ? h.replace(a, s) : h;
  }
  function v(h) {
    return !h && h !== 0 ? !0 : !!(m(h) && h.length === 0);
  }
  function S(h) {
    var x = u({}, h);
    return x._parent = h, x;
  }
  function g(h, x) {
    return h.path = x, h;
  }
  function y(h, x) {
    return (h ? h + "." : "") + x;
  }
  return Pt;
}
var io = { exports: {} }, qg;
function An() {
  return qg || (qg = 1, (function(r, a) {
    a.__esModule = !0;
    var l = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(u, c) {
      var b = c && c.loc, m = void 0, d = void 0, p = void 0, v = void 0;
      b && (m = b.start.line, d = b.end.line, p = b.start.column, v = b.end.column, u += " - " + m + ":" + p);
      for (var S = Error.prototype.constructor.call(this, u), g = 0; g < l.length; g++)
        this[l[g]] = S[l[g]];
      Error.captureStackTrace && Error.captureStackTrace(this, s);
      try {
        b && (this.lineNumber = m, this.endLineNumber = d, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: p,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: v,
          enumerable: !0
        })) : (this.column = p, this.endColumn = v));
      } catch {
      }
    }
    s.prototype = new Error(), a.default = s, r.exports = a.default;
  })(io, io.exports)), io.exports;
}
var Sl = {}, lo = { exports: {} }, Ig;
function f_() {
  return Ig || (Ig = 1, (function(r, a) {
    a.__esModule = !0;
    var l = It();
    a.default = function(s) {
      s.registerHelper("blockHelperMissing", function(u, c) {
        var b = c.inverse, m = c.fn;
        if (u === !0)
          return m(this);
        if (u === !1 || u == null)
          return b(this);
        if (l.isArray(u))
          return u.length > 0 ? (c.ids && (c.ids = [c.name]), s.helpers.each(u, c)) : b(this);
        if (c.data && c.ids) {
          var d = l.createFrame(c.data);
          d.contextPath = l.appendContextPath(c.data.contextPath, c.name), c = { data: d };
        }
        return m(u, c);
      });
    }, r.exports = a.default;
  })(lo, lo.exports)), lo.exports;
}
var so = { exports: {} }, Gg;
function h_() {
  return Gg || (Gg = 1, (function(r, a) {
    a.__esModule = !0;
    function l(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var s = It(), u = An(), c = l(u);
    a.default = function(b) {
      b.registerHelper("each", function(m, d) {
        if (!d)
          throw new c.default("Must pass iterator to #each");
        var p = d.fn, v = d.inverse, S = 0, g = "", y = void 0, h = void 0;
        d.data && d.ids && (h = s.appendContextPath(d.data.contextPath, d.ids[0]) + "."), s.isFunction(m) && (m = m.call(this)), d.data && (y = s.createFrame(d.data));
        function x(E, T, j) {
          y && (y.key = E, y.index = T, y.first = T === 0, y.last = !!j, h && (y.contextPath = h + E)), g = g + p(m[E], {
            data: y,
            blockParams: s.blockParams([m[E], E], [h + E, null])
          });
        }
        if (m && typeof m == "object")
          if (s.isArray(m))
            for (var C = m.length; S < C; S++)
              S in m && x(S, S, S === m.length - 1);
          else if (typeof Symbol == "function" && m[Symbol.iterator]) {
            for (var O = [], A = m[Symbol.iterator](), D = A.next(); !D.done; D = A.next())
              O.push(D.value);
            m = O;
            for (var C = m.length; S < C; S++)
              x(S, S, S === m.length - 1);
          } else
            (function() {
              var E = void 0;
              Object.keys(m).forEach(function(T) {
                E !== void 0 && x(E, S - 1), E = T, S++;
              }), E !== void 0 && x(E, S - 1, !0);
            })();
        return S === 0 && (g = v(this)), g;
      });
    }, r.exports = a.default;
  })(so, so.exports)), so.exports;
}
var oo = { exports: {} }, Vg;
function d_() {
  return Vg || (Vg = 1, (function(r, a) {
    a.__esModule = !0;
    function l(c) {
      return c && c.__esModule ? c : { default: c };
    }
    var s = An(), u = l(s);
    a.default = function(c) {
      c.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new u.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, r.exports = a.default;
  })(oo, oo.exports)), oo.exports;
}
var uo = { exports: {} }, Yg;
function p_() {
  return Yg || (Yg = 1, (function(r, a) {
    a.__esModule = !0;
    function l(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var s = It(), u = An(), c = l(u);
    a.default = function(b) {
      b.registerHelper("if", function(m, d) {
        if (arguments.length != 2)
          throw new c.default("#if requires exactly one argument");
        return s.isFunction(m) && (m = m.call(this)), !d.hash.includeZero && !m || s.isEmpty(m) ? d.inverse(this) : d.fn(this);
      }), b.registerHelper("unless", function(m, d) {
        if (arguments.length != 2)
          throw new c.default("#unless requires exactly one argument");
        return b.helpers.if.call(this, m, {
          fn: d.inverse,
          inverse: d.fn,
          hash: d.hash
        });
      });
    }, r.exports = a.default;
  })(uo, uo.exports)), uo.exports;
}
var co = { exports: {} }, Fg;
function m_() {
  return Fg || (Fg = 1, (function(r, a) {
    a.__esModule = !0, a.default = function(l) {
      l.registerHelper("log", function() {
        for (var s = [void 0], u = arguments[arguments.length - 1], c = 0; c < arguments.length - 1; c++)
          s.push(arguments[c]);
        var b = 1;
        u.hash.level != null ? b = u.hash.level : u.data && u.data.level != null && (b = u.data.level), s[0] = b, l.log.apply(l, s);
      });
    }, r.exports = a.default;
  })(co, co.exports)), co.exports;
}
var fo = { exports: {} }, Xg;
function g_() {
  return Xg || (Xg = 1, (function(r, a) {
    a.__esModule = !0, a.default = function(l) {
      l.registerHelper("lookup", function(s, u, c) {
        return s && c.lookupProperty(s, u);
      });
    }, r.exports = a.default;
  })(fo, fo.exports)), fo.exports;
}
var ho = { exports: {} }, Qg;
function v_() {
  return Qg || (Qg = 1, (function(r, a) {
    a.__esModule = !0;
    function l(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var s = It(), u = An(), c = l(u);
    a.default = function(b) {
      b.registerHelper("with", function(m, d) {
        if (arguments.length != 2)
          throw new c.default("#with requires exactly one argument");
        s.isFunction(m) && (m = m.call(this));
        var p = d.fn;
        if (s.isEmpty(m))
          return d.inverse(this);
        var v = d.data;
        return d.data && d.ids && (v = s.createFrame(d.data), v.contextPath = s.appendContextPath(d.data.contextPath, d.ids[0])), p(m, {
          data: v,
          blockParams: s.blockParams([m], [v && v.contextPath])
        });
      });
    }, r.exports = a.default;
  })(ho, ho.exports)), ho.exports;
}
var Zg;
function my() {
  if (Zg) return Sl;
  Zg = 1, Sl.__esModule = !0, Sl.registerDefaultHelpers = x, Sl.moveHelperToHooks = C;
  function r(O) {
    return O && O.__esModule ? O : { default: O };
  }
  var a = f_(), l = r(a), s = h_(), u = r(s), c = d_(), b = r(c), m = p_(), d = r(m), p = m_(), v = r(p), S = g_(), g = r(S), y = v_(), h = r(y);
  function x(O) {
    l.default(O), u.default(O), b.default(O), d.default(O), v.default(O), g.default(O), h.default(O);
  }
  function C(O, A, D) {
    O.helpers[A] && (O.hooks[A] = O.helpers[A], D || delete O.helpers[A]);
  }
  return Sl;
}
var po = {}, mo = { exports: {} }, Kg;
function y_() {
  return Kg || (Kg = 1, (function(r, a) {
    a.__esModule = !0;
    var l = It();
    a.default = function(s) {
      s.registerDecorator("inline", function(u, c, b, m) {
        var d = u;
        return c.partials || (c.partials = {}, d = function(p, v) {
          var S = b.partials;
          b.partials = l.extend({}, S, c.partials);
          var g = u(p, v);
          return b.partials = S, g;
        }), c.partials[m.args[0]] = m.fn, d;
      });
    }, r.exports = a.default;
  })(mo, mo.exports)), mo.exports;
}
var Jg;
function b_() {
  if (Jg) return po;
  Jg = 1, po.__esModule = !0, po.registerDefaultDecorators = s;
  function r(u) {
    return u && u.__esModule ? u : { default: u };
  }
  var a = y_(), l = r(a);
  function s(u) {
    l.default(u);
  }
  return po;
}
var go = { exports: {} }, Wg;
function gy() {
  return Wg || (Wg = 1, (function(r, a) {
    a.__esModule = !0;
    var l = It(), s = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function(c) {
        if (typeof c == "string") {
          var b = l.indexOf(s.methodMap, c.toLowerCase());
          b >= 0 ? c = b : c = parseInt(c, 10);
        }
        return c;
      },
      // Can be overridden in the host environment
      log: function(c) {
        if (c = s.lookupLevel(c), typeof console < "u" && s.lookupLevel(s.level) <= c) {
          var b = s.methodMap[c];
          console[b] || (b = "log");
          for (var m = arguments.length, d = Array(m > 1 ? m - 1 : 0), p = 1; p < m; p++)
            d[p - 1] = arguments[p];
          console[b].apply(console, d);
        }
      }
    };
    a.default = s, r.exports = a.default;
  })(go, go.exports)), go.exports;
}
var oi = {}, vo = {}, $g;
function S_() {
  if ($g) return vo;
  $g = 1, vo.__esModule = !0, vo.createNewLookupObject = a;
  var r = It();
  function a() {
    for (var l = arguments.length, s = Array(l), u = 0; u < l; u++)
      s[u] = arguments[u];
    return r.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(s));
  }
  return vo;
}
var ev;
function vy() {
  if (ev) return oi;
  ev = 1, oi.__esModule = !0, oi.createProtoAccessControl = c, oi.resultIsAllowed = b, oi.resetLoggedProperties = p;
  function r(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var a = S_(), l = gy(), s = r(l), u = /* @__PURE__ */ Object.create(null);
  function c(v) {
    var S = /* @__PURE__ */ Object.create(null);
    S.constructor = !1, S.__defineGetter__ = !1, S.__defineSetter__ = !1, S.__lookupGetter__ = !1;
    var g = /* @__PURE__ */ Object.create(null);
    return g.__proto__ = !1, {
      properties: {
        whitelist: a.createNewLookupObject(g, v.allowedProtoProperties),
        defaultValue: v.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: a.createNewLookupObject(S, v.allowedProtoMethods),
        defaultValue: v.allowProtoMethodsByDefault
      }
    };
  }
  function b(v, S, g) {
    return m(typeof v == "function" ? S.methods : S.properties, g);
  }
  function m(v, S) {
    return v.whitelist[S] !== void 0 ? v.whitelist[S] === !0 : v.defaultValue !== void 0 ? v.defaultValue : (d(S), !1);
  }
  function d(v) {
    u[v] !== !0 && (u[v] = !0, s.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + v + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function p() {
    Object.keys(u).forEach(function(v) {
      delete u[v];
    });
  }
  return oi;
}
var tv;
function dh() {
  if (tv) return xn;
  tv = 1, xn.__esModule = !0, xn.HandlebarsEnvironment = h;
  function r(C) {
    return C && C.__esModule ? C : { default: C };
  }
  var a = It(), l = An(), s = r(l), u = my(), c = b_(), b = gy(), m = r(b), d = vy(), p = "4.7.8";
  xn.VERSION = p;
  var v = 8;
  xn.COMPILER_REVISION = v;
  var S = 7;
  xn.LAST_COMPATIBLE_COMPILER_REVISION = S;
  var g = {
    1: "<= 1.0.rc.2",
    // 1.0.rc.2 is actually rev2 but doesn't report it
    2: "== 1.0.0-rc.3",
    3: "== 1.0.0-rc.4",
    4: "== 1.x.x",
    5: "== 2.0.0-alpha.x",
    6: ">= 2.0.0-beta.1",
    7: ">= 4.0.0 <4.3.0",
    8: ">= 4.3.0"
  };
  xn.REVISION_CHANGES = g;
  var y = "[object Object]";
  function h(C, O, A) {
    this.helpers = C || {}, this.partials = O || {}, this.decorators = A || {}, u.registerDefaultHelpers(this), c.registerDefaultDecorators(this);
  }
  h.prototype = {
    constructor: h,
    logger: m.default,
    log: m.default.log,
    registerHelper: function(O, A) {
      if (a.toString.call(O) === y) {
        if (A)
          throw new s.default("Arg not supported with multiple helpers");
        a.extend(this.helpers, O);
      } else
        this.helpers[O] = A;
    },
    unregisterHelper: function(O) {
      delete this.helpers[O];
    },
    registerPartial: function(O, A) {
      if (a.toString.call(O) === y)
        a.extend(this.partials, O);
      else {
        if (typeof A > "u")
          throw new s.default('Attempting to register a partial called "' + O + '" as undefined');
        this.partials[O] = A;
      }
    },
    unregisterPartial: function(O) {
      delete this.partials[O];
    },
    registerDecorator: function(O, A) {
      if (a.toString.call(O) === y) {
        if (A)
          throw new s.default("Arg not supported with multiple decorators");
        a.extend(this.decorators, O);
      } else
        this.decorators[O] = A;
    },
    unregisterDecorator: function(O) {
      delete this.decorators[O];
    },
    /**
     * Reset the memory of illegal property accesses that have already been logged.
     * @deprecated should only be used in handlebars test-cases
     */
    resetLoggedPropertyAccesses: function() {
      d.resetLoggedProperties();
    }
  };
  var x = m.default.log;
  return xn.log = x, xn.createFrame = a.createFrame, xn.logger = m.default, xn;
}
var yo = { exports: {} }, nv;
function __() {
  return nv || (nv = 1, (function(r, a) {
    a.__esModule = !0;
    function l(s) {
      this.string = s;
    }
    l.prototype.toString = l.prototype.toHTML = function() {
      return "" + this.string;
    }, a.default = l, r.exports = a.default;
  })(yo, yo.exports)), yo.exports;
}
var ea = {}, bo = {}, av;
function x_() {
  if (av) return bo;
  av = 1, bo.__esModule = !0, bo.wrapHelper = r;
  function r(a, l) {
    if (typeof a != "function")
      return a;
    var s = function() {
      var c = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = l(c), a.apply(this, arguments);
    };
    return s;
  }
  return bo;
}
var rv;
function E_() {
  if (rv) return ea;
  rv = 1, ea.__esModule = !0, ea.checkRevision = v, ea.template = S, ea.wrapProgram = g, ea.resolvePartial = y, ea.invokePartial = h, ea.noop = x;
  function r(E) {
    return E && E.__esModule ? E : { default: E };
  }
  function a(E) {
    if (E && E.__esModule)
      return E;
    var T = {};
    if (E != null)
      for (var j in E)
        Object.prototype.hasOwnProperty.call(E, j) && (T[j] = E[j]);
    return T.default = E, T;
  }
  var l = It(), s = a(l), u = An(), c = r(u), b = dh(), m = my(), d = x_(), p = vy();
  function v(E) {
    var T = E && E[0] || 1, j = b.COMPILER_REVISION;
    if (!(T >= b.LAST_COMPATIBLE_COMPILER_REVISION && T <= b.COMPILER_REVISION))
      if (T < b.LAST_COMPATIBLE_COMPILER_REVISION) {
        var L = b.REVISION_CHANGES[j], G = b.REVISION_CHANGES[T];
        throw new c.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + L + ") or downgrade your runtime to an older version (" + G + ").");
      } else
        throw new c.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + E[1] + ").");
  }
  function S(E, T) {
    if (!T)
      throw new c.default("No environment passed to template");
    if (!E || !E.main)
      throw new c.default("Unknown template object: " + typeof E);
    E.main.decorator = E.main_d, T.VM.checkRevision(E.compiler);
    var j = E.compiler && E.compiler[0] === 7;
    function L(P, Y, X) {
      X.hash && (Y = s.extend({}, Y, X.hash), X.ids && (X.ids[0] = !0)), P = T.VM.resolvePartial.call(this, P, Y, X);
      var oe = s.extend({}, X, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), fe = T.VM.invokePartial.call(this, P, Y, oe);
      if (fe == null && T.compile && (X.partials[X.name] = T.compile(P, E.compilerOptions, T), fe = X.partials[X.name](Y, oe)), fe != null) {
        if (X.indent) {
          for (var ue = fe.split(`
`), U = 0, $ = ue.length; U < $ && !(!ue[U] && U + 1 === $); U++)
            ue[U] = X.indent + ue[U];
          fe = ue.join(`
`);
        }
        return fe;
      } else
        throw new c.default("The partial " + X.name + " could not be compiled when running in runtime-only mode");
    }
    var G = {
      strict: function(Y, X, oe) {
        if (!Y || !(X in Y))
          throw new c.default('"' + X + '" not defined in ' + Y, {
            loc: oe
          });
        return G.lookupProperty(Y, X);
      },
      lookupProperty: function(Y, X) {
        var oe = Y[X];
        if (oe == null || Object.prototype.hasOwnProperty.call(Y, X) || p.resultIsAllowed(oe, G.protoAccessControl, X))
          return oe;
      },
      lookup: function(Y, X) {
        for (var oe = Y.length, fe = 0; fe < oe; fe++) {
          var ue = Y[fe] && G.lookupProperty(Y[fe], X);
          if (ue != null)
            return Y[fe][X];
        }
      },
      lambda: function(Y, X) {
        return typeof Y == "function" ? Y.call(X) : Y;
      },
      escapeExpression: s.escapeExpression,
      invokePartial: L,
      fn: function(Y) {
        var X = E[Y];
        return X.decorator = E[Y + "_d"], X;
      },
      programs: [],
      program: function(Y, X, oe, fe, ue) {
        var U = this.programs[Y], $ = this.fn(Y);
        return X || ue || fe || oe ? U = g(this, Y, $, X, oe, fe, ue) : U || (U = this.programs[Y] = g(this, Y, $)), U;
      },
      data: function(Y, X) {
        for (; Y && X--; )
          Y = Y._parent;
        return Y;
      },
      mergeIfNeeded: function(Y, X) {
        var oe = Y || X;
        return Y && X && Y !== X && (oe = s.extend({}, X, Y)), oe;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: T.VM.noop,
      compilerInfo: E.compiler
    };
    function ee(P) {
      var Y = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], X = Y.data;
      ee._setup(Y), !Y.partial && E.useData && (X = C(P, X));
      var oe = void 0, fe = E.useBlockParams ? [] : void 0;
      E.useDepths && (Y.depths ? oe = P != Y.depths[0] ? [P].concat(Y.depths) : Y.depths : oe = [P]);
      function ue(U) {
        return "" + E.main(G, U, G.helpers, G.partials, X, fe, oe);
      }
      return ue = O(E.main, ue, G, Y.depths || [], X, fe), ue(P, Y);
    }
    return ee.isTop = !0, ee._setup = function(P) {
      if (P.partial)
        G.protoAccessControl = P.protoAccessControl, G.helpers = P.helpers, G.partials = P.partials, G.decorators = P.decorators, G.hooks = P.hooks;
      else {
        var Y = s.extend({}, T.helpers, P.helpers);
        A(Y, G), G.helpers = Y, E.usePartial && (G.partials = G.mergeIfNeeded(P.partials, T.partials)), (E.usePartial || E.useDecorators) && (G.decorators = s.extend({}, T.decorators, P.decorators)), G.hooks = {}, G.protoAccessControl = p.createProtoAccessControl(P);
        var X = P.allowCallsToHelperMissing || j;
        m.moveHelperToHooks(G, "helperMissing", X), m.moveHelperToHooks(G, "blockHelperMissing", X);
      }
    }, ee._child = function(P, Y, X, oe) {
      if (E.useBlockParams && !X)
        throw new c.default("must pass block params");
      if (E.useDepths && !oe)
        throw new c.default("must pass parent depths");
      return g(G, P, E[P], Y, 0, X, oe);
    }, ee;
  }
  function g(E, T, j, L, G, ee, P) {
    function Y(X) {
      var oe = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], fe = P;
      return P && X != P[0] && !(X === E.nullContext && P[0] === null) && (fe = [X].concat(P)), j(E, X, E.helpers, E.partials, oe.data || L, ee && [oe.blockParams].concat(ee), fe);
    }
    return Y = O(j, Y, E, P, L, ee), Y.program = T, Y.depth = P ? P.length : 0, Y.blockParams = G || 0, Y;
  }
  function y(E, T, j) {
    return E ? !E.call && !j.name && (j.name = E, E = j.partials[E]) : j.name === "@partial-block" ? E = j.data["partial-block"] : E = j.partials[j.name], E;
  }
  function h(E, T, j) {
    var L = j.data && j.data["partial-block"];
    j.partial = !0, j.ids && (j.data.contextPath = j.ids[0] || j.data.contextPath);
    var G = void 0;
    if (j.fn && j.fn !== x && (function() {
      j.data = b.createFrame(j.data);
      var ee = j.fn;
      G = j.data["partial-block"] = function(Y) {
        var X = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return X.data = b.createFrame(X.data), X.data["partial-block"] = L, ee(Y, X);
      }, ee.partials && (j.partials = s.extend({}, j.partials, ee.partials));
    })(), E === void 0 && G && (E = G), E === void 0)
      throw new c.default("The partial " + j.name + " could not be found");
    if (E instanceof Function)
      return E(T, j);
  }
  function x() {
    return "";
  }
  function C(E, T) {
    return (!T || !("root" in T)) && (T = T ? b.createFrame(T) : {}, T.root = E), T;
  }
  function O(E, T, j, L, G, ee) {
    if (E.decorator) {
      var P = {};
      T = E.decorator(T, P, j, L && L[0], G, ee, L), s.extend(T, P);
    }
    return T;
  }
  function A(E, T) {
    Object.keys(E).forEach(function(j) {
      var L = E[j];
      E[j] = D(L, T);
    });
  }
  function D(E, T) {
    var j = T.lookupProperty;
    return d.wrapHelper(E, function(L) {
      return s.extend({ lookupProperty: j }, L);
    });
  }
  return ea;
}
var So = { exports: {} }, iv;
function yy() {
  return iv || (iv = 1, (function(r, a) {
    a.__esModule = !0, a.default = function(l) {
      (function() {
        typeof globalThis != "object" && (Object.prototype.__defineGetter__("__magic__", function() {
          return this;
        }), __magic__.globalThis = __magic__, delete Object.prototype.__magic__);
      })();
      var s = globalThis.Handlebars;
      l.noConflict = function() {
        return globalThis.Handlebars === l && (globalThis.Handlebars = s), l;
      };
    }, r.exports = a.default;
  })(So, So.exports)), So.exports;
}
var lv;
function C_() {
  return lv || (lv = 1, (function(r, a) {
    a.__esModule = !0;
    function l(A) {
      return A && A.__esModule ? A : { default: A };
    }
    function s(A) {
      if (A && A.__esModule)
        return A;
      var D = {};
      if (A != null)
        for (var E in A)
          Object.prototype.hasOwnProperty.call(A, E) && (D[E] = A[E]);
      return D.default = A, D;
    }
    var u = dh(), c = s(u), b = __(), m = l(b), d = An(), p = l(d), v = It(), S = s(v), g = E_(), y = s(g), h = yy(), x = l(h);
    function C() {
      var A = new c.HandlebarsEnvironment();
      return S.extend(A, c), A.SafeString = m.default, A.Exception = p.default, A.Utils = S, A.escapeExpression = S.escapeExpression, A.VM = y, A.template = function(D) {
        return y.template(D, A);
      }, A;
    }
    var O = C();
    O.create = C, x.default(O), O.default = O, a.default = O, r.exports = a.default;
  })(ro, ro.exports)), ro.exports;
}
var _o = { exports: {} }, sv;
function by() {
  return sv || (sv = 1, (function(r, a) {
    a.__esModule = !0;
    var l = {
      // Public API used to evaluate derived attributes regarding AST nodes
      helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function(u) {
          return u.type === "SubExpression" || (u.type === "MustacheStatement" || u.type === "BlockStatement") && !!(u.params && u.params.length || u.hash);
        },
        scopedId: function(u) {
          return /^\.|this\b/.test(u.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function(u) {
          return u.parts.length === 1 && !l.helpers.scopedId(u) && !u.depth;
        }
      }
    };
    a.default = l, r.exports = a.default;
  })(_o, _o.exports)), _o.exports;
}
var ui = {}, xo = { exports: {} }, ov;
function A_() {
  return ov || (ov = 1, (function(r, a) {
    a.__esModule = !0;
    var l = (function() {
      var s = {
        trace: function() {
        },
        yy: {},
        symbols_: { error: 2, root: 3, program: 4, EOF: 5, program_repetition0: 6, statement: 7, mustache: 8, block: 9, rawBlock: 10, partial: 11, partialBlock: 12, content: 13, COMMENT: 14, CONTENT: 15, openRawBlock: 16, rawBlock_repetition0: 17, END_RAW_BLOCK: 18, OPEN_RAW_BLOCK: 19, helperName: 20, openRawBlock_repetition0: 21, openRawBlock_option0: 22, CLOSE_RAW_BLOCK: 23, openBlock: 24, block_option0: 25, closeBlock: 26, openInverse: 27, block_option1: 28, OPEN_BLOCK: 29, openBlock_repetition0: 30, openBlock_option0: 31, openBlock_option1: 32, CLOSE: 33, OPEN_INVERSE: 34, openInverse_repetition0: 35, openInverse_option0: 36, openInverse_option1: 37, openInverseChain: 38, OPEN_INVERSE_CHAIN: 39, openInverseChain_repetition0: 40, openInverseChain_option0: 41, openInverseChain_option1: 42, inverseAndProgram: 43, INVERSE: 44, inverseChain: 45, inverseChain_option0: 46, OPEN_ENDBLOCK: 47, OPEN: 48, mustache_repetition0: 49, mustache_option0: 50, OPEN_UNESCAPED: 51, mustache_repetition1: 52, mustache_option1: 53, CLOSE_UNESCAPED: 54, OPEN_PARTIAL: 55, partialName: 56, partial_repetition0: 57, partial_option0: 58, openPartialBlock: 59, OPEN_PARTIAL_BLOCK: 60, openPartialBlock_repetition0: 61, openPartialBlock_option0: 62, param: 63, sexpr: 64, OPEN_SEXPR: 65, sexpr_repetition0: 66, sexpr_option0: 67, CLOSE_SEXPR: 68, hash: 69, hash_repetition_plus0: 70, hashSegment: 71, ID: 72, EQUALS: 73, blockParams: 74, OPEN_BLOCK_PARAMS: 75, blockParams_repetition_plus0: 76, CLOSE_BLOCK_PARAMS: 77, path: 78, dataName: 79, STRING: 80, NUMBER: 81, BOOLEAN: 82, UNDEFINED: 83, NULL: 84, DATA: 85, pathSegments: 86, SEP: 87, $accept: 0, $end: 1 },
        terminals_: { 2: "error", 5: "EOF", 14: "COMMENT", 15: "CONTENT", 18: "END_RAW_BLOCK", 19: "OPEN_RAW_BLOCK", 23: "CLOSE_RAW_BLOCK", 29: "OPEN_BLOCK", 33: "CLOSE", 34: "OPEN_INVERSE", 39: "OPEN_INVERSE_CHAIN", 44: "INVERSE", 47: "OPEN_ENDBLOCK", 48: "OPEN", 51: "OPEN_UNESCAPED", 54: "CLOSE_UNESCAPED", 55: "OPEN_PARTIAL", 60: "OPEN_PARTIAL_BLOCK", 65: "OPEN_SEXPR", 68: "CLOSE_SEXPR", 72: "ID", 73: "EQUALS", 75: "OPEN_BLOCK_PARAMS", 77: "CLOSE_BLOCK_PARAMS", 80: "STRING", 81: "NUMBER", 82: "BOOLEAN", 83: "UNDEFINED", 84: "NULL", 85: "DATA", 87: "SEP" },
        productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [13, 1], [10, 3], [16, 5], [9, 4], [9, 4], [24, 6], [27, 6], [38, 6], [43, 2], [45, 3], [45, 1], [26, 3], [8, 5], [8, 5], [11, 5], [12, 3], [59, 5], [63, 1], [63, 1], [64, 5], [69, 1], [71, 3], [74, 3], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [20, 1], [56, 1], [56, 1], [79, 2], [78, 1], [86, 3], [86, 1], [6, 0], [6, 2], [17, 0], [17, 2], [21, 0], [21, 2], [22, 0], [22, 1], [25, 0], [25, 1], [28, 0], [28, 1], [30, 0], [30, 2], [31, 0], [31, 1], [32, 0], [32, 1], [35, 0], [35, 2], [36, 0], [36, 1], [37, 0], [37, 1], [40, 0], [40, 2], [41, 0], [41, 1], [42, 0], [42, 1], [46, 0], [46, 1], [49, 0], [49, 2], [50, 0], [50, 1], [52, 0], [52, 2], [53, 0], [53, 1], [57, 0], [57, 2], [58, 0], [58, 1], [61, 0], [61, 2], [62, 0], [62, 1], [66, 0], [66, 2], [67, 0], [67, 1], [70, 1], [70, 2], [76, 1], [76, 2]],
        performAction: function(m, d, p, v, S, g, y) {
          var h = g.length - 1;
          switch (S) {
            case 1:
              return g[h - 1];
            case 2:
              this.$ = v.prepareProgram(g[h]);
              break;
            case 3:
              this.$ = g[h];
              break;
            case 4:
              this.$ = g[h];
              break;
            case 5:
              this.$ = g[h];
              break;
            case 6:
              this.$ = g[h];
              break;
            case 7:
              this.$ = g[h];
              break;
            case 8:
              this.$ = g[h];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: v.stripComment(g[h]),
                strip: v.stripFlags(g[h], g[h]),
                loc: v.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: g[h],
                value: g[h],
                loc: v.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = v.prepareRawBlock(g[h - 2], g[h - 1], g[h], this._$);
              break;
            case 12:
              this.$ = { path: g[h - 3], params: g[h - 2], hash: g[h - 1] };
              break;
            case 13:
              this.$ = v.prepareBlock(g[h - 3], g[h - 2], g[h - 1], g[h], !1, this._$);
              break;
            case 14:
              this.$ = v.prepareBlock(g[h - 3], g[h - 2], g[h - 1], g[h], !0, this._$);
              break;
            case 15:
              this.$ = { open: g[h - 5], path: g[h - 4], params: g[h - 3], hash: g[h - 2], blockParams: g[h - 1], strip: v.stripFlags(g[h - 5], g[h]) };
              break;
            case 16:
              this.$ = { path: g[h - 4], params: g[h - 3], hash: g[h - 2], blockParams: g[h - 1], strip: v.stripFlags(g[h - 5], g[h]) };
              break;
            case 17:
              this.$ = { path: g[h - 4], params: g[h - 3], hash: g[h - 2], blockParams: g[h - 1], strip: v.stripFlags(g[h - 5], g[h]) };
              break;
            case 18:
              this.$ = { strip: v.stripFlags(g[h - 1], g[h - 1]), program: g[h] };
              break;
            case 19:
              var x = v.prepareBlock(g[h - 2], g[h - 1], g[h], g[h], !1, this._$), C = v.prepareProgram([x], g[h - 1].loc);
              C.chained = !0, this.$ = { strip: g[h - 2].strip, program: C, chain: !0 };
              break;
            case 20:
              this.$ = g[h];
              break;
            case 21:
              this.$ = { path: g[h - 1], strip: v.stripFlags(g[h - 2], g[h]) };
              break;
            case 22:
              this.$ = v.prepareMustache(g[h - 3], g[h - 2], g[h - 1], g[h - 4], v.stripFlags(g[h - 4], g[h]), this._$);
              break;
            case 23:
              this.$ = v.prepareMustache(g[h - 3], g[h - 2], g[h - 1], g[h - 4], v.stripFlags(g[h - 4], g[h]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: g[h - 3],
                params: g[h - 2],
                hash: g[h - 1],
                indent: "",
                strip: v.stripFlags(g[h - 4], g[h]),
                loc: v.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = v.preparePartialBlock(g[h - 2], g[h - 1], g[h], this._$);
              break;
            case 26:
              this.$ = { path: g[h - 3], params: g[h - 2], hash: g[h - 1], strip: v.stripFlags(g[h - 4], g[h]) };
              break;
            case 27:
              this.$ = g[h];
              break;
            case 28:
              this.$ = g[h];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: g[h - 3],
                params: g[h - 2],
                hash: g[h - 1],
                loc: v.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: g[h], loc: v.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: v.id(g[h - 2]), value: g[h], loc: v.locInfo(this._$) };
              break;
            case 32:
              this.$ = v.id(g[h - 1]);
              break;
            case 33:
              this.$ = g[h];
              break;
            case 34:
              this.$ = g[h];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: g[h], original: g[h], loc: v.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(g[h]), original: Number(g[h]), loc: v.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: g[h] === "true", original: g[h] === "true", loc: v.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: v.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: v.locInfo(this._$) };
              break;
            case 40:
              this.$ = g[h];
              break;
            case 41:
              this.$ = g[h];
              break;
            case 42:
              this.$ = v.preparePath(!0, g[h], this._$);
              break;
            case 43:
              this.$ = v.preparePath(!1, g[h], this._$);
              break;
            case 44:
              g[h - 2].push({ part: v.id(g[h]), original: g[h], separator: g[h - 1] }), this.$ = g[h - 2];
              break;
            case 45:
              this.$ = [{ part: v.id(g[h]), original: g[h] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              g[h - 1].push(g[h]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              g[h - 1].push(g[h]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              g[h - 1].push(g[h]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              g[h - 1].push(g[h]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              g[h - 1].push(g[h]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              g[h - 1].push(g[h]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              g[h - 1].push(g[h]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              g[h - 1].push(g[h]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              g[h - 1].push(g[h]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              g[h - 1].push(g[h]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              g[h - 1].push(g[h]);
              break;
            case 98:
              this.$ = [g[h]];
              break;
            case 99:
              g[h - 1].push(g[h]);
              break;
            case 100:
              this.$ = [g[h]];
              break;
            case 101:
              g[h - 1].push(g[h]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(m, d) {
          throw new Error(m);
        },
        parse: function(m) {
          var d = this, p = [0], v = [null], S = [], g = this.table, y = "", h = 0, x = 0;
          this.lexer.setInput(m), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var C = this.lexer.yylloc;
          S.push(C);
          var O = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function A() {
            var oe;
            return oe = d.lexer.lex() || 1, typeof oe != "number" && (oe = d.symbols_[oe] || oe), oe;
          }
          for (var D, E, T, j, L = {}, G, ee, P, Y; ; ) {
            if (E = p[p.length - 1], this.defaultActions[E] ? T = this.defaultActions[E] : ((D === null || typeof D > "u") && (D = A()), T = g[E] && g[E][D]), typeof T > "u" || !T.length || !T[0]) {
              var X = "";
              {
                Y = [];
                for (G in g[E]) this.terminals_[G] && G > 2 && Y.push("'" + this.terminals_[G] + "'");
                this.lexer.showPosition ? X = "Parse error on line " + (h + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + Y.join(", ") + ", got '" + (this.terminals_[D] || D) + "'" : X = "Parse error on line " + (h + 1) + ": Unexpected " + (D == 1 ? "end of input" : "'" + (this.terminals_[D] || D) + "'"), this.parseError(X, { text: this.lexer.match, token: this.terminals_[D] || D, line: this.lexer.yylineno, loc: C, expected: Y });
              }
            }
            if (T[0] instanceof Array && T.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + E + ", token: " + D);
            switch (T[0]) {
              case 1:
                p.push(D), v.push(this.lexer.yytext), S.push(this.lexer.yylloc), p.push(T[1]), D = null, x = this.lexer.yyleng, y = this.lexer.yytext, h = this.lexer.yylineno, C = this.lexer.yylloc;
                break;
              case 2:
                if (ee = this.productions_[T[1]][1], L.$ = v[v.length - ee], L._$ = { first_line: S[S.length - (ee || 1)].first_line, last_line: S[S.length - 1].last_line, first_column: S[S.length - (ee || 1)].first_column, last_column: S[S.length - 1].last_column }, O && (L._$.range = [S[S.length - (ee || 1)].range[0], S[S.length - 1].range[1]]), j = this.performAction.call(L, y, x, h, this.yy, T[1], v, S), typeof j < "u")
                  return j;
                ee && (p = p.slice(0, -1 * ee * 2), v = v.slice(0, -1 * ee), S = S.slice(0, -1 * ee)), p.push(this.productions_[T[1]][0]), v.push(L.$), S.push(L._$), P = g[p[p.length - 2]][p[p.length - 1]], p.push(P);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      }, u = (function() {
        var b = {
          EOF: 1,
          parseError: function(d, p) {
            if (this.yy.parser)
              this.yy.parser.parseError(d, p);
            else
              throw new Error(d);
          },
          setInput: function(d) {
            return this._input = d, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var d = this._input[0];
            this.yytext += d, this.yyleng++, this.offset++, this.match += d, this.matched += d;
            var p = d.match(/(?:\r\n?|\n).*/g);
            return p ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), d;
          },
          unput: function(d) {
            var p = d.length, v = d.split(/(?:\r\n?|\n)/g);
            this._input = d + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - p - 1), this.offset -= p;
            var S = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), v.length - 1 && (this.yylineno -= v.length - 1);
            var g = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: v ? (v.length === S.length ? this.yylloc.first_column : 0) + S[S.length - v.length].length - v[0].length : this.yylloc.first_column - p
            }, this.options.ranges && (this.yylloc.range = [g[0], g[0] + this.yyleng - p]), this;
          },
          more: function() {
            return this._more = !0, this;
          },
          less: function(d) {
            this.unput(this.match.slice(d));
          },
          pastInput: function() {
            var d = this.matched.substr(0, this.matched.length - this.match.length);
            return (d.length > 20 ? "..." : "") + d.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function() {
            var d = this.match;
            return d.length < 20 && (d += this._input.substr(0, 20 - d.length)), (d.substr(0, 20) + (d.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function() {
            var d = this.pastInput(), p = new Array(d.length + 1).join("-");
            return d + this.upcomingInput() + `
` + p + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var d, p, v, S, g;
            this._more || (this.yytext = "", this.match = "");
            for (var y = this._currentRules(), h = 0; h < y.length && (v = this._input.match(this.rules[y[h]]), !(v && (!p || v[0].length > p[0].length) && (p = v, S = h, !this.options.flex))); h++)
              ;
            return p ? (g = p[0].match(/(?:\r\n?|\n).*/g), g && (this.yylineno += g.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: g ? g[g.length - 1].length - g[g.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + p[0].length
            }, this.yytext += p[0], this.match += p[0], this.matches = p, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(p[0].length), this.matched += p[0], d = this.performAction.call(this, this.yy, this, y[S], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), d || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
          },
          lex: function() {
            var d = this.next();
            return typeof d < "u" ? d : this.lex();
          },
          begin: function(d) {
            this.conditionStack.push(d);
          },
          popState: function() {
            return this.conditionStack.pop();
          },
          _currentRules: function() {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
          },
          topState: function() {
            return this.conditionStack[this.conditionStack.length - 2];
          },
          pushState: function(d) {
            this.begin(d);
          }
        };
        return b.options = {}, b.performAction = function(d, p, v, S) {
          function g(y, h) {
            return p.yytext = p.yytext.substring(y, p.yyleng - h + y);
          }
          switch (v) {
            case 0:
              if (p.yytext.slice(-2) === "\\\\" ? (g(0, 1), this.begin("mu")) : p.yytext.slice(-1) === "\\" ? (g(0, 1), this.begin("emu")) : this.begin("mu"), p.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (g(5, 9), "END_RAW_BLOCK");
            case 5:
              return 15;
            case 6:
              return this.popState(), 14;
            case 7:
              return 65;
            case 8:
              return 68;
            case 9:
              return 19;
            case 10:
              return this.popState(), this.begin("raw"), 23;
            case 11:
              return 55;
            case 12:
              return 60;
            case 13:
              return 29;
            case 14:
              return 47;
            case 15:
              return this.popState(), 44;
            case 16:
              return this.popState(), 44;
            case 17:
              return 34;
            case 18:
              return 39;
            case 19:
              return 51;
            case 20:
              return 48;
            case 21:
              this.unput(p.yytext), this.popState(), this.begin("com");
              break;
            case 22:
              return this.popState(), 14;
            case 23:
              return 48;
            case 24:
              return 73;
            case 25:
              return 72;
            case 26:
              return 72;
            case 27:
              return 87;
            case 28:
              break;
            case 29:
              return this.popState(), 54;
            case 30:
              return this.popState(), 33;
            case 31:
              return p.yytext = g(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return p.yytext = g(1, 2).replace(/\\'/g, "'"), 80;
            case 33:
              return 85;
            case 34:
              return 82;
            case 35:
              return 82;
            case 36:
              return 83;
            case 37:
              return 84;
            case 38:
              return 81;
            case 39:
              return 75;
            case 40:
              return 77;
            case 41:
              return 72;
            case 42:
              return p.yytext = p.yytext.replace(/\\([\\\]])/g, "$1"), 72;
            case 43:
              return "INVALID";
            case 44:
              return 5;
          }
        }, b.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{(?=[^/]))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]+?(?=(\{\{\{\{)))/, /^(?:[\s\S]*?--(~)?\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#>)/, /^(?:\{\{(~)?#\*?)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{(~)?!--)/, /^(?:\{\{(~)?![\s\S]*?\}\})/, /^(?:\{\{(~)?\*?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)|])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:undefined(?=([~}\s)])))/, /^(?:null(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:as\s+\|)/, /^(?:\|)/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)|]))))/, /^(?:\[(\\\]|[^\]])*\])/, /^(?:.)/, /^(?:$)/], b.conditions = { mu: { rules: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44], inclusive: !1 }, emu: { rules: [2], inclusive: !1 }, com: { rules: [6], inclusive: !1 }, raw: { rules: [3, 4, 5], inclusive: !1 }, INITIAL: { rules: [0, 1, 44], inclusive: !0 } }, b;
      })();
      s.lexer = u;
      function c() {
        this.yy = {};
      }
      return c.prototype = s, s.Parser = c, new c();
    })();
    a.default = l, r.exports = a.default;
  })(xo, xo.exports)), xo.exports;
}
var Eo = { exports: {} }, Co = { exports: {} }, uv;
function Sy() {
  return uv || (uv = 1, (function(r, a) {
    a.__esModule = !0;
    function l(p) {
      return p && p.__esModule ? p : { default: p };
    }
    var s = An(), u = l(s);
    function c() {
      this.parents = [];
    }
    c.prototype = {
      constructor: c,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(v, S) {
        var g = this.accept(v[S]);
        if (this.mutating) {
          if (g && !c.prototype[g.type])
            throw new u.default('Unexpected node type "' + g.type + '" found when accepting ' + S + " on " + v.type);
          v[S] = g;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(v, S) {
        if (this.acceptKey(v, S), !v[S])
          throw new u.default(v.type + " requires " + S);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(v) {
        for (var S = 0, g = v.length; S < g; S++)
          this.acceptKey(v, S), v[S] || (v.splice(S, 1), S--, g--);
      },
      accept: function(v) {
        if (v) {
          if (!this[v.type])
            throw new u.default("Unknown type: " + v.type, v);
          this.current && this.parents.unshift(this.current), this.current = v;
          var S = this[v.type](v);
          if (this.current = this.parents.shift(), !this.mutating || S)
            return S;
          if (S !== !1)
            return v;
        }
      },
      Program: function(v) {
        this.acceptArray(v.body);
      },
      MustacheStatement: b,
      Decorator: b,
      BlockStatement: m,
      DecoratorBlock: m,
      PartialStatement: d,
      PartialBlockStatement: function(v) {
        d.call(this, v), this.acceptKey(v, "program");
      },
      ContentStatement: function() {
      },
      CommentStatement: function() {
      },
      SubExpression: b,
      PathExpression: function() {
      },
      StringLiteral: function() {
      },
      NumberLiteral: function() {
      },
      BooleanLiteral: function() {
      },
      UndefinedLiteral: function() {
      },
      NullLiteral: function() {
      },
      Hash: function(v) {
        this.acceptArray(v.pairs);
      },
      HashPair: function(v) {
        this.acceptRequired(v, "value");
      }
    };
    function b(p) {
      this.acceptRequired(p, "path"), this.acceptArray(p.params), this.acceptKey(p, "hash");
    }
    function m(p) {
      b.call(this, p), this.acceptKey(p, "program"), this.acceptKey(p, "inverse");
    }
    function d(p) {
      this.acceptRequired(p, "name"), this.acceptArray(p.params), this.acceptKey(p, "hash");
    }
    a.default = c, r.exports = a.default;
  })(Co, Co.exports)), Co.exports;
}
var cv;
function T_() {
  return cv || (cv = 1, (function(r, a) {
    a.__esModule = !0;
    function l(v) {
      return v && v.__esModule ? v : { default: v };
    }
    var s = Sy(), u = l(s);
    function c() {
      var v = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = v;
    }
    c.prototype = new u.default(), c.prototype.Program = function(v) {
      var S = !this.options.ignoreStandalone, g = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var y = v.body, h = 0, x = y.length; h < x; h++) {
        var C = y[h], O = this.accept(C);
        if (O) {
          var A = b(y, h, g), D = m(y, h, g), E = O.openStandalone && A, T = O.closeStandalone && D, j = O.inlineStandalone && A && D;
          O.close && d(y, h, !0), O.open && p(y, h, !0), S && j && (d(y, h), p(y, h) && C.type === "PartialStatement" && (C.indent = /([ \t]+$)/.exec(y[h - 1].original)[1])), S && E && (d((C.program || C.inverse).body), p(y, h)), S && T && (d(y, h), p((C.inverse || C.program).body));
        }
      }
      return v;
    }, c.prototype.BlockStatement = c.prototype.DecoratorBlock = c.prototype.PartialBlockStatement = function(v) {
      this.accept(v.program), this.accept(v.inverse);
      var S = v.program || v.inverse, g = v.program && v.inverse, y = g, h = g;
      if (g && g.chained)
        for (y = g.body[0].program; h.chained; )
          h = h.body[h.body.length - 1].program;
      var x = {
        open: v.openStrip.open,
        close: v.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: m(S.body),
        closeStandalone: b((y || S).body)
      };
      if (v.openStrip.close && d(S.body, null, !0), g) {
        var C = v.inverseStrip;
        C.open && p(S.body, null, !0), C.close && d(y.body, null, !0), v.closeStrip.open && p(h.body, null, !0), !this.options.ignoreStandalone && b(S.body) && m(y.body) && (p(S.body), d(y.body));
      } else v.closeStrip.open && p(S.body, null, !0);
      return x;
    }, c.prototype.Decorator = c.prototype.MustacheStatement = function(v) {
      return v.strip;
    }, c.prototype.PartialStatement = c.prototype.CommentStatement = function(v) {
      var S = v.strip || {};
      return {
        inlineStandalone: !0,
        open: S.open,
        close: S.close
      };
    };
    function b(v, S, g) {
      S === void 0 && (S = v.length);
      var y = v[S - 1], h = v[S - 2];
      if (!y)
        return g;
      if (y.type === "ContentStatement")
        return (h || !g ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(y.original);
    }
    function m(v, S, g) {
      S === void 0 && (S = -1);
      var y = v[S + 1], h = v[S + 2];
      if (!y)
        return g;
      if (y.type === "ContentStatement")
        return (h || !g ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(y.original);
    }
    function d(v, S, g) {
      var y = v[S == null ? 0 : S + 1];
      if (!(!y || y.type !== "ContentStatement" || !g && y.rightStripped)) {
        var h = y.value;
        y.value = y.value.replace(g ? /^\s+/ : /^[ \t]*\r?\n?/, ""), y.rightStripped = y.value !== h;
      }
    }
    function p(v, S, g) {
      var y = v[S == null ? v.length - 1 : S - 1];
      if (!(!y || y.type !== "ContentStatement" || !g && y.leftStripped)) {
        var h = y.value;
        return y.value = y.value.replace(g ? /\s+$/ : /[ \t]+$/, ""), y.leftStripped = y.value !== h, y.leftStripped;
      }
    }
    a.default = c, r.exports = a.default;
  })(Eo, Eo.exports)), Eo.exports;
}
var $t = {}, fv;
function w_() {
  if (fv) return $t;
  fv = 1, $t.__esModule = !0, $t.SourceLocation = u, $t.id = c, $t.stripFlags = b, $t.stripComment = m, $t.preparePath = d, $t.prepareMustache = p, $t.prepareRawBlock = v, $t.prepareBlock = S, $t.prepareProgram = g, $t.preparePartialBlock = y;
  function r(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var a = An(), l = r(a);
  function s(h, x) {
    if (x = x.path ? x.path.original : x, h.path.original !== x) {
      var C = { loc: h.path.loc };
      throw new l.default(h.path.original + " doesn't match " + x, C);
    }
  }
  function u(h, x) {
    this.source = h, this.start = {
      line: x.first_line,
      column: x.first_column
    }, this.end = {
      line: x.last_line,
      column: x.last_column
    };
  }
  function c(h) {
    return /^\[.*\]$/.test(h) ? h.substring(1, h.length - 1) : h;
  }
  function b(h, x) {
    return {
      open: h.charAt(2) === "~",
      close: x.charAt(x.length - 3) === "~"
    };
  }
  function m(h) {
    return h.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function d(h, x, C) {
    C = this.locInfo(C);
    for (var O = h ? "@" : "", A = [], D = 0, E = 0, T = x.length; E < T; E++) {
      var j = x[E].part, L = x[E].original !== j;
      if (O += (x[E].separator || "") + j, !L && (j === ".." || j === "." || j === "this")) {
        if (A.length > 0)
          throw new l.default("Invalid path: " + O, { loc: C });
        j === ".." && D++;
      } else
        A.push(j);
    }
    return {
      type: "PathExpression",
      data: h,
      depth: D,
      parts: A,
      original: O,
      loc: C
    };
  }
  function p(h, x, C, O, A, D) {
    var E = O.charAt(3) || O.charAt(2), T = E !== "{" && E !== "&", j = /\*/.test(O);
    return {
      type: j ? "Decorator" : "MustacheStatement",
      path: h,
      params: x,
      hash: C,
      escaped: T,
      strip: A,
      loc: this.locInfo(D)
    };
  }
  function v(h, x, C, O) {
    s(h, C), O = this.locInfo(O);
    var A = {
      type: "Program",
      body: x,
      strip: {},
      loc: O
    };
    return {
      type: "BlockStatement",
      path: h.path,
      params: h.params,
      hash: h.hash,
      program: A,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: O
    };
  }
  function S(h, x, C, O, A, D) {
    O && O.path && s(h, O);
    var E = /\*/.test(h.open);
    x.blockParams = h.blockParams;
    var T = void 0, j = void 0;
    if (C) {
      if (E)
        throw new l.default("Unexpected inverse block on decorator", C);
      C.chain && (C.program.body[0].closeStrip = O.strip), j = C.strip, T = C.program;
    }
    return A && (A = T, T = x, x = A), {
      type: E ? "DecoratorBlock" : "BlockStatement",
      path: h.path,
      params: h.params,
      hash: h.hash,
      program: x,
      inverse: T,
      openStrip: h.strip,
      inverseStrip: j,
      closeStrip: O && O.strip,
      loc: this.locInfo(D)
    };
  }
  function g(h, x) {
    if (!x && h.length) {
      var C = h[0].loc, O = h[h.length - 1].loc;
      C && O && (x = {
        source: C.source,
        start: {
          line: C.start.line,
          column: C.start.column
        },
        end: {
          line: O.end.line,
          column: O.end.column
        }
      });
    }
    return {
      type: "Program",
      body: h,
      strip: {},
      loc: x
    };
  }
  function y(h, x, C, O) {
    return s(h, C), {
      type: "PartialBlockStatement",
      name: h.path,
      params: h.params,
      hash: h.hash,
      program: x,
      openStrip: h.strip,
      closeStrip: C && C.strip,
      loc: this.locInfo(O)
    };
  }
  return $t;
}
var hv;
function N_() {
  if (hv) return ui;
  hv = 1, ui.__esModule = !0, ui.parseWithoutProcessing = v, ui.parse = S;
  function r(g) {
    if (g && g.__esModule)
      return g;
    var y = {};
    if (g != null)
      for (var h in g)
        Object.prototype.hasOwnProperty.call(g, h) && (y[h] = g[h]);
    return y.default = g, y;
  }
  function a(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var l = A_(), s = a(l), u = T_(), c = a(u), b = w_(), m = r(b), d = It();
  ui.parser = s.default;
  var p = {};
  d.extend(p, m);
  function v(g, y) {
    if (g.type === "Program")
      return g;
    s.default.yy = p, p.locInfo = function(x) {
      return new p.SourceLocation(y && y.srcName, x);
    };
    var h = s.default.parse(g);
    return h;
  }
  function S(g, y) {
    var h = v(g, y), x = new c.default(y);
    return x.accept(h);
  }
  return ui;
}
var ci = {}, dv;
function O_() {
  if (dv) return ci;
  dv = 1, ci.__esModule = !0, ci.Compiler = m, ci.precompile = d, ci.compile = p;
  function r(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var a = An(), l = r(a), s = It(), u = by(), c = r(u), b = [].slice;
  function m() {
  }
  m.prototype = {
    compiler: m,
    equals: function(y) {
      var h = this.opcodes.length;
      if (y.opcodes.length !== h)
        return !1;
      for (var x = 0; x < h; x++) {
        var C = this.opcodes[x], O = y.opcodes[x];
        if (C.opcode !== O.opcode || !v(C.args, O.args))
          return !1;
      }
      h = this.children.length;
      for (var x = 0; x < h; x++)
        if (!this.children[x].equals(y.children[x]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(y, h) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = h, this.stringParams = h.stringParams, this.trackIds = h.trackIds, h.blockParams = h.blockParams || [], h.knownHelpers = s.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, h.knownHelpers), this.accept(y);
    },
    compileProgram: function(y) {
      var h = new this.compiler(), x = h.compile(y, this.options), C = this.guid++;
      return this.usePartial = this.usePartial || x.usePartial, this.children[C] = x, this.useDepths = this.useDepths || x.useDepths, C;
    },
    accept: function(y) {
      if (!this[y.type])
        throw new l.default("Unknown type: " + y.type, y);
      this.sourceNode.unshift(y);
      var h = this[y.type](y);
      return this.sourceNode.shift(), h;
    },
    Program: function(y) {
      this.options.blockParams.unshift(y.blockParams);
      for (var h = y.body, x = h.length, C = 0; C < x; C++)
        this.accept(h[C]);
      return this.options.blockParams.shift(), this.isSimple = x === 1, this.blockParams = y.blockParams ? y.blockParams.length : 0, this;
    },
    BlockStatement: function(y) {
      S(y);
      var h = y.program, x = y.inverse;
      h = h && this.compileProgram(h), x = x && this.compileProgram(x);
      var C = this.classifySexpr(y);
      C === "helper" ? this.helperSexpr(y, h, x) : C === "simple" ? (this.simpleSexpr(y), this.opcode("pushProgram", h), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("blockValue", y.path.original)) : (this.ambiguousSexpr(y, h, x), this.opcode("pushProgram", h), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(y) {
      var h = y.program && this.compileProgram(y.program), x = this.setupFullMustacheParams(y, h, void 0), C = y.path;
      this.useDecorators = !0, this.opcode("registerDecorator", x.length, C.original);
    },
    PartialStatement: function(y) {
      this.usePartial = !0;
      var h = y.program;
      h && (h = this.compileProgram(y.program));
      var x = y.params;
      if (x.length > 1)
        throw new l.default("Unsupported number of partial arguments: " + x.length, y);
      x.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : x.push({ type: "PathExpression", parts: [], depth: 0 }));
      var C = y.name.original, O = y.name.type === "SubExpression";
      O && this.accept(y.name), this.setupFullMustacheParams(y, h, void 0, !0);
      var A = y.indent || "";
      this.options.preventIndent && A && (this.opcode("appendContent", A), A = ""), this.opcode("invokePartial", O, C, A), this.opcode("append");
    },
    PartialBlockStatement: function(y) {
      this.PartialStatement(y);
    },
    MustacheStatement: function(y) {
      this.SubExpression(y), y.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
    },
    Decorator: function(y) {
      this.DecoratorBlock(y);
    },
    ContentStatement: function(y) {
      y.value && this.opcode("appendContent", y.value);
    },
    CommentStatement: function() {
    },
    SubExpression: function(y) {
      S(y);
      var h = this.classifySexpr(y);
      h === "simple" ? this.simpleSexpr(y) : h === "helper" ? this.helperSexpr(y) : this.ambiguousSexpr(y);
    },
    ambiguousSexpr: function(y, h, x) {
      var C = y.path, O = C.parts[0], A = h != null || x != null;
      this.opcode("getContext", C.depth), this.opcode("pushProgram", h), this.opcode("pushProgram", x), C.strict = !0, this.accept(C), this.opcode("invokeAmbiguous", O, A);
    },
    simpleSexpr: function(y) {
      var h = y.path;
      h.strict = !0, this.accept(h), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(y, h, x) {
      var C = this.setupFullMustacheParams(y, h, x), O = y.path, A = O.parts[0];
      if (this.options.knownHelpers[A])
        this.opcode("invokeKnownHelper", C.length, A);
      else {
        if (this.options.knownHelpersOnly)
          throw new l.default("You specified knownHelpersOnly, but used the unknown helper " + A, y);
        O.strict = !0, O.falsy = !0, this.accept(O), this.opcode("invokeHelper", C.length, O.original, c.default.helpers.simpleId(O));
      }
    },
    PathExpression: function(y) {
      this.addDepth(y.depth), this.opcode("getContext", y.depth);
      var h = y.parts[0], x = c.default.helpers.scopedId(y), C = !y.depth && !x && this.blockParamIndex(h);
      C ? this.opcode("lookupBlockParam", C, y.parts) : h ? y.data ? (this.options.data = !0, this.opcode("lookupData", y.depth, y.parts, y.strict)) : this.opcode("lookupOnContext", y.parts, y.falsy, y.strict, x) : this.opcode("pushContext");
    },
    StringLiteral: function(y) {
      this.opcode("pushString", y.value);
    },
    NumberLiteral: function(y) {
      this.opcode("pushLiteral", y.value);
    },
    BooleanLiteral: function(y) {
      this.opcode("pushLiteral", y.value);
    },
    UndefinedLiteral: function() {
      this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function() {
      this.opcode("pushLiteral", "null");
    },
    Hash: function(y) {
      var h = y.pairs, x = 0, C = h.length;
      for (this.opcode("pushHash"); x < C; x++)
        this.pushParam(h[x].value);
      for (; x--; )
        this.opcode("assignToHash", h[x].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(y) {
      this.opcodes.push({
        opcode: y,
        args: b.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(y) {
      y && (this.useDepths = !0);
    },
    classifySexpr: function(y) {
      var h = c.default.helpers.simpleId(y.path), x = h && !!this.blockParamIndex(y.path.parts[0]), C = !x && c.default.helpers.helperExpression(y), O = !x && (C || h);
      if (O && !C) {
        var A = y.path.parts[0], D = this.options;
        D.knownHelpers[A] ? C = !0 : D.knownHelpersOnly && (O = !1);
      }
      return C ? "helper" : O ? "ambiguous" : "simple";
    },
    pushParams: function(y) {
      for (var h = 0, x = y.length; h < x; h++)
        this.pushParam(y[h]);
    },
    pushParam: function(y) {
      var h = y.value != null ? y.value : y.original || "";
      if (this.stringParams)
        h.replace && (h = h.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), y.depth && this.addDepth(y.depth), this.opcode("getContext", y.depth || 0), this.opcode("pushStringParam", h, y.type), y.type === "SubExpression" && this.accept(y);
      else {
        if (this.trackIds) {
          var x = void 0;
          if (y.parts && !c.default.helpers.scopedId(y) && !y.depth && (x = this.blockParamIndex(y.parts[0])), x) {
            var C = y.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", x, C);
          } else
            h = y.original || h, h.replace && (h = h.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", y.type, h);
        }
        this.accept(y);
      }
    },
    setupFullMustacheParams: function(y, h, x, C) {
      var O = y.params;
      return this.pushParams(O), this.opcode("pushProgram", h), this.opcode("pushProgram", x), y.hash ? this.accept(y.hash) : this.opcode("emptyHash", C), O;
    },
    blockParamIndex: function(y) {
      for (var h = 0, x = this.options.blockParams.length; h < x; h++) {
        var C = this.options.blockParams[h], O = C && s.indexOf(C, y);
        if (C && O >= 0)
          return [h, O];
      }
    }
  };
  function d(g, y, h) {
    if (g == null || typeof g != "string" && g.type !== "Program")
      throw new l.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + g);
    y = y || {}, "data" in y || (y.data = !0), y.compat && (y.useDepths = !0);
    var x = h.parse(g, y), C = new h.Compiler().compile(x, y);
    return new h.JavaScriptCompiler().compile(C, y);
  }
  function p(g, y, h) {
    if (y === void 0 && (y = {}), g == null || typeof g != "string" && g.type !== "Program")
      throw new l.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + g);
    y = s.extend({}, y), "data" in y || (y.data = !0), y.compat && (y.useDepths = !0);
    var x = void 0;
    function C() {
      var A = h.parse(g, y), D = new h.Compiler().compile(A, y), E = new h.JavaScriptCompiler().compile(D, y, void 0, !0);
      return h.template(E);
    }
    function O(A, D) {
      return x || (x = C()), x.call(this, A, D);
    }
    return O._setup = function(A) {
      return x || (x = C()), x._setup(A);
    }, O._child = function(A, D, E, T) {
      return x || (x = C()), x._child(A, D, E, T);
    }, O;
  }
  function v(g, y) {
    if (g === y)
      return !0;
    if (s.isArray(g) && s.isArray(y) && g.length === y.length) {
      for (var h = 0; h < g.length; h++)
        if (!v(g[h], y[h]))
          return !1;
      return !0;
    }
  }
  function S(g) {
    if (!g.path.parts) {
      var y = g.path;
      g.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [y.original + ""],
        original: y.original + "",
        loc: y.loc
      };
    }
  }
  return ci;
}
var Ao = { exports: {} }, To = { exports: {} }, _l = {}, Af = {}, wo = {}, No = {}, pv;
function D_() {
  if (pv) return No;
  pv = 1;
  var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return No.encode = function(a) {
    if (0 <= a && a < r.length)
      return r[a];
    throw new TypeError("Must be between 0 and 63: " + a);
  }, No.decode = function(a) {
    var l = 65, s = 90, u = 97, c = 122, b = 48, m = 57, d = 43, p = 47, v = 26, S = 52;
    return l <= a && a <= s ? a - l : u <= a && a <= c ? a - u + v : b <= a && a <= m ? a - b + S : a == d ? 62 : a == p ? 63 : -1;
  }, No;
}
var mv;
function _y() {
  if (mv) return wo;
  mv = 1;
  var r = D_(), a = 5, l = 1 << a, s = l - 1, u = l;
  function c(m) {
    return m < 0 ? (-m << 1) + 1 : (m << 1) + 0;
  }
  function b(m) {
    var d = (m & 1) === 1, p = m >> 1;
    return d ? -p : p;
  }
  return wo.encode = function(d) {
    var p = "", v, S = c(d);
    do
      v = S & s, S >>>= a, S > 0 && (v |= u), p += r.encode(v);
    while (S > 0);
    return p;
  }, wo.decode = function(d, p, v) {
    var S = d.length, g = 0, y = 0, h, x;
    do {
      if (p >= S)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (x = r.decode(d.charCodeAt(p++)), x === -1)
        throw new Error("Invalid base64 digit: " + d.charAt(p - 1));
      h = !!(x & u), x &= s, g = g + (x << y), y += a;
    } while (h);
    v.value = b(g), v.rest = p;
  }, wo;
}
var Tf = {}, gv;
function zl() {
  return gv || (gv = 1, (function(r) {
    function a(E, T, j) {
      if (T in E)
        return E[T];
      if (arguments.length === 3)
        return j;
      throw new Error('"' + T + '" is a required argument.');
    }
    r.getArg = a;
    var l = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, s = /^data:.+\,.+$/;
    function u(E) {
      var T = E.match(l);
      return T ? {
        scheme: T[1],
        auth: T[2],
        host: T[3],
        port: T[4],
        path: T[5]
      } : null;
    }
    r.urlParse = u;
    function c(E) {
      var T = "";
      return E.scheme && (T += E.scheme + ":"), T += "//", E.auth && (T += E.auth + "@"), E.host && (T += E.host), E.port && (T += ":" + E.port), E.path && (T += E.path), T;
    }
    r.urlGenerate = c;
    function b(E) {
      var T = E, j = u(E);
      if (j) {
        if (!j.path)
          return E;
        T = j.path;
      }
      for (var L = r.isAbsolute(T), G = T.split(/\/+/), ee, P = 0, Y = G.length - 1; Y >= 0; Y--)
        ee = G[Y], ee === "." ? G.splice(Y, 1) : ee === ".." ? P++ : P > 0 && (ee === "" ? (G.splice(Y + 1, P), P = 0) : (G.splice(Y, 2), P--));
      return T = G.join("/"), T === "" && (T = L ? "/" : "."), j ? (j.path = T, c(j)) : T;
    }
    r.normalize = b;
    function m(E, T) {
      E === "" && (E = "."), T === "" && (T = ".");
      var j = u(T), L = u(E);
      if (L && (E = L.path || "/"), j && !j.scheme)
        return L && (j.scheme = L.scheme), c(j);
      if (j || T.match(s))
        return T;
      if (L && !L.host && !L.path)
        return L.host = T, c(L);
      var G = T.charAt(0) === "/" ? T : b(E.replace(/\/+$/, "") + "/" + T);
      return L ? (L.path = G, c(L)) : G;
    }
    r.join = m, r.isAbsolute = function(E) {
      return E.charAt(0) === "/" || l.test(E);
    };
    function d(E, T) {
      E === "" && (E = "."), E = E.replace(/\/$/, "");
      for (var j = 0; T.indexOf(E + "/") !== 0; ) {
        var L = E.lastIndexOf("/");
        if (L < 0 || (E = E.slice(0, L), E.match(/^([^\/]+:\/)?\/*$/)))
          return T;
        ++j;
      }
      return Array(j + 1).join("../") + T.substr(E.length + 1);
    }
    r.relative = d;
    var p = (function() {
      var E = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in E);
    })();
    function v(E) {
      return E;
    }
    function S(E) {
      return y(E) ? "$" + E : E;
    }
    r.toSetString = p ? v : S;
    function g(E) {
      return y(E) ? E.slice(1) : E;
    }
    r.fromSetString = p ? v : g;
    function y(E) {
      if (!E)
        return !1;
      var T = E.length;
      if (T < 9 || E.charCodeAt(T - 1) !== 95 || E.charCodeAt(T - 2) !== 95 || E.charCodeAt(T - 3) !== 111 || E.charCodeAt(T - 4) !== 116 || E.charCodeAt(T - 5) !== 111 || E.charCodeAt(T - 6) !== 114 || E.charCodeAt(T - 7) !== 112 || E.charCodeAt(T - 8) !== 95 || E.charCodeAt(T - 9) !== 95)
        return !1;
      for (var j = T - 10; j >= 0; j--)
        if (E.charCodeAt(j) !== 36)
          return !1;
      return !0;
    }
    function h(E, T, j) {
      var L = C(E.source, T.source);
      return L !== 0 || (L = E.originalLine - T.originalLine, L !== 0) || (L = E.originalColumn - T.originalColumn, L !== 0 || j) || (L = E.generatedColumn - T.generatedColumn, L !== 0) || (L = E.generatedLine - T.generatedLine, L !== 0) ? L : C(E.name, T.name);
    }
    r.compareByOriginalPositions = h;
    function x(E, T, j) {
      var L = E.generatedLine - T.generatedLine;
      return L !== 0 || (L = E.generatedColumn - T.generatedColumn, L !== 0 || j) || (L = C(E.source, T.source), L !== 0) || (L = E.originalLine - T.originalLine, L !== 0) || (L = E.originalColumn - T.originalColumn, L !== 0) ? L : C(E.name, T.name);
    }
    r.compareByGeneratedPositionsDeflated = x;
    function C(E, T) {
      return E === T ? 0 : E === null ? 1 : T === null ? -1 : E > T ? 1 : -1;
    }
    function O(E, T) {
      var j = E.generatedLine - T.generatedLine;
      return j !== 0 || (j = E.generatedColumn - T.generatedColumn, j !== 0) || (j = C(E.source, T.source), j !== 0) || (j = E.originalLine - T.originalLine, j !== 0) || (j = E.originalColumn - T.originalColumn, j !== 0) ? j : C(E.name, T.name);
    }
    r.compareByGeneratedPositionsInflated = O;
    function A(E) {
      return JSON.parse(E.replace(/^\)]}'[^\n]*\n/, ""));
    }
    r.parseSourceMapInput = A;
    function D(E, T, j) {
      if (T = T || "", E && (E[E.length - 1] !== "/" && T[0] !== "/" && (E += "/"), T = E + T), j) {
        var L = u(j);
        if (!L)
          throw new Error("sourceMapURL could not be parsed");
        if (L.path) {
          var G = L.path.lastIndexOf("/");
          G >= 0 && (L.path = L.path.substring(0, G + 1));
        }
        T = m(c(L), T);
      }
      return b(T);
    }
    r.computeSourceURL = D;
  })(Tf)), Tf;
}
var wf = {}, vv;
function xy() {
  if (vv) return wf;
  vv = 1;
  var r = zl(), a = Object.prototype.hasOwnProperty, l = typeof Map < "u";
  function s() {
    this._array = [], this._set = l ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return s.fromArray = function(c, b) {
    for (var m = new s(), d = 0, p = c.length; d < p; d++)
      m.add(c[d], b);
    return m;
  }, s.prototype.size = function() {
    return l ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, s.prototype.add = function(c, b) {
    var m = l ? c : r.toSetString(c), d = l ? this.has(c) : a.call(this._set, m), p = this._array.length;
    (!d || b) && this._array.push(c), d || (l ? this._set.set(c, p) : this._set[m] = p);
  }, s.prototype.has = function(c) {
    if (l)
      return this._set.has(c);
    var b = r.toSetString(c);
    return a.call(this._set, b);
  }, s.prototype.indexOf = function(c) {
    if (l) {
      var b = this._set.get(c);
      if (b >= 0)
        return b;
    } else {
      var m = r.toSetString(c);
      if (a.call(this._set, m))
        return this._set[m];
    }
    throw new Error('"' + c + '" is not in the set.');
  }, s.prototype.at = function(c) {
    if (c >= 0 && c < this._array.length)
      return this._array[c];
    throw new Error("No element indexed by " + c);
  }, s.prototype.toArray = function() {
    return this._array.slice();
  }, wf.ArraySet = s, wf;
}
var Nf = {}, yv;
function M_() {
  if (yv) return Nf;
  yv = 1;
  var r = zl();
  function a(s, u) {
    var c = s.generatedLine, b = u.generatedLine, m = s.generatedColumn, d = u.generatedColumn;
    return b > c || b == c && d >= m || r.compareByGeneratedPositionsInflated(s, u) <= 0;
  }
  function l() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return l.prototype.unsortedForEach = function(u, c) {
    this._array.forEach(u, c);
  }, l.prototype.add = function(u) {
    a(this._last, u) ? (this._last = u, this._array.push(u)) : (this._sorted = !1, this._array.push(u));
  }, l.prototype.toArray = function() {
    return this._sorted || (this._array.sort(r.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, Nf.MappingList = l, Nf;
}
var bv;
function Ey() {
  if (bv) return Af;
  bv = 1;
  var r = _y(), a = zl(), l = xy().ArraySet, s = M_().MappingList;
  function u(c) {
    c || (c = {}), this._file = a.getArg(c, "file", null), this._sourceRoot = a.getArg(c, "sourceRoot", null), this._skipValidation = a.getArg(c, "skipValidation", !1), this._sources = new l(), this._names = new l(), this._mappings = new s(), this._sourcesContents = null;
  }
  return u.prototype._version = 3, u.fromSourceMap = function(b) {
    var m = b.sourceRoot, d = new u({
      file: b.file,
      sourceRoot: m
    });
    return b.eachMapping(function(p) {
      var v = {
        generated: {
          line: p.generatedLine,
          column: p.generatedColumn
        }
      };
      p.source != null && (v.source = p.source, m != null && (v.source = a.relative(m, v.source)), v.original = {
        line: p.originalLine,
        column: p.originalColumn
      }, p.name != null && (v.name = p.name)), d.addMapping(v);
    }), b.sources.forEach(function(p) {
      var v = p;
      m !== null && (v = a.relative(m, p)), d._sources.has(v) || d._sources.add(v);
      var S = b.sourceContentFor(p);
      S != null && d.setSourceContent(p, S);
    }), d;
  }, u.prototype.addMapping = function(b) {
    var m = a.getArg(b, "generated"), d = a.getArg(b, "original", null), p = a.getArg(b, "source", null), v = a.getArg(b, "name", null);
    this._skipValidation || this._validateMapping(m, d, p, v), p != null && (p = String(p), this._sources.has(p) || this._sources.add(p)), v != null && (v = String(v), this._names.has(v) || this._names.add(v)), this._mappings.add({
      generatedLine: m.line,
      generatedColumn: m.column,
      originalLine: d != null && d.line,
      originalColumn: d != null && d.column,
      source: p,
      name: v
    });
  }, u.prototype.setSourceContent = function(b, m) {
    var d = b;
    this._sourceRoot != null && (d = a.relative(this._sourceRoot, d)), m != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[a.toSetString(d)] = m) : this._sourcesContents && (delete this._sourcesContents[a.toSetString(d)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, u.prototype.applySourceMap = function(b, m, d) {
    var p = m;
    if (m == null) {
      if (b.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      p = b.file;
    }
    var v = this._sourceRoot;
    v != null && (p = a.relative(v, p));
    var S = new l(), g = new l();
    this._mappings.unsortedForEach(function(y) {
      if (y.source === p && y.originalLine != null) {
        var h = b.originalPositionFor({
          line: y.originalLine,
          column: y.originalColumn
        });
        h.source != null && (y.source = h.source, d != null && (y.source = a.join(d, y.source)), v != null && (y.source = a.relative(v, y.source)), y.originalLine = h.line, y.originalColumn = h.column, h.name != null && (y.name = h.name));
      }
      var x = y.source;
      x != null && !S.has(x) && S.add(x);
      var C = y.name;
      C != null && !g.has(C) && g.add(C);
    }, this), this._sources = S, this._names = g, b.sources.forEach(function(y) {
      var h = b.sourceContentFor(y);
      h != null && (d != null && (y = a.join(d, y)), v != null && (y = a.relative(v, y)), this.setSourceContent(y, h));
    }, this);
  }, u.prototype._validateMapping = function(b, m, d, p) {
    if (m && typeof m.line != "number" && typeof m.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(b && "line" in b && "column" in b && b.line > 0 && b.column >= 0 && !m && !d && !p)) {
      if (b && "line" in b && "column" in b && m && "line" in m && "column" in m && b.line > 0 && b.column >= 0 && m.line > 0 && m.column >= 0 && d)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: b,
        source: d,
        original: m,
        name: p
      }));
    }
  }, u.prototype._serializeMappings = function() {
    for (var b = 0, m = 1, d = 0, p = 0, v = 0, S = 0, g = "", y, h, x, C, O = this._mappings.toArray(), A = 0, D = O.length; A < D; A++) {
      if (h = O[A], y = "", h.generatedLine !== m)
        for (b = 0; h.generatedLine !== m; )
          y += ";", m++;
      else if (A > 0) {
        if (!a.compareByGeneratedPositionsInflated(h, O[A - 1]))
          continue;
        y += ",";
      }
      y += r.encode(h.generatedColumn - b), b = h.generatedColumn, h.source != null && (C = this._sources.indexOf(h.source), y += r.encode(C - S), S = C, y += r.encode(h.originalLine - 1 - p), p = h.originalLine - 1, y += r.encode(h.originalColumn - d), d = h.originalColumn, h.name != null && (x = this._names.indexOf(h.name), y += r.encode(x - v), v = x)), g += y;
    }
    return g;
  }, u.prototype._generateSourcesContent = function(b, m) {
    return b.map(function(d) {
      if (!this._sourcesContents)
        return null;
      m != null && (d = a.relative(m, d));
      var p = a.toSetString(d);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, p) ? this._sourcesContents[p] : null;
    }, this);
  }, u.prototype.toJSON = function() {
    var b = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (b.file = this._file), this._sourceRoot != null && (b.sourceRoot = this._sourceRoot), this._sourcesContents && (b.sourcesContent = this._generateSourcesContent(b.sources, b.sourceRoot)), b;
  }, u.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, Af.SourceMapGenerator = u, Af;
}
var xl = {}, Of = {}, Sv;
function R_() {
  return Sv || (Sv = 1, (function(r) {
    r.GREATEST_LOWER_BOUND = 1, r.LEAST_UPPER_BOUND = 2;
    function a(l, s, u, c, b, m) {
      var d = Math.floor((s - l) / 2) + l, p = b(u, c[d], !0);
      return p === 0 ? d : p > 0 ? s - d > 1 ? a(d, s, u, c, b, m) : m == r.LEAST_UPPER_BOUND ? s < c.length ? s : -1 : d : d - l > 1 ? a(l, d, u, c, b, m) : m == r.LEAST_UPPER_BOUND ? d : l < 0 ? -1 : l;
    }
    r.search = function(s, u, c, b) {
      if (u.length === 0)
        return -1;
      var m = a(
        -1,
        u.length,
        s,
        u,
        c,
        b || r.GREATEST_LOWER_BOUND
      );
      if (m < 0)
        return -1;
      for (; m - 1 >= 0 && c(u[m], u[m - 1], !0) === 0; )
        --m;
      return m;
    };
  })(Of)), Of;
}
var Df = {}, _v;
function k_() {
  if (_v) return Df;
  _v = 1;
  function r(s, u, c) {
    var b = s[u];
    s[u] = s[c], s[c] = b;
  }
  function a(s, u) {
    return Math.round(s + Math.random() * (u - s));
  }
  function l(s, u, c, b) {
    if (c < b) {
      var m = a(c, b), d = c - 1;
      r(s, m, b);
      for (var p = s[b], v = c; v < b; v++)
        u(s[v], p) <= 0 && (d += 1, r(s, d, v));
      r(s, d + 1, v);
      var S = d + 1;
      l(s, u, c, S - 1), l(s, u, S + 1, b);
    }
  }
  return Df.quickSort = function(s, u) {
    l(s, u, 0, s.length - 1);
  }, Df;
}
var xv;
function j_() {
  if (xv) return xl;
  xv = 1;
  var r = zl(), a = R_(), l = xy().ArraySet, s = _y(), u = k_().quickSort;
  function c(p, v) {
    var S = p;
    return typeof p == "string" && (S = r.parseSourceMapInput(p)), S.sections != null ? new d(S, v) : new b(S, v);
  }
  c.fromSourceMap = function(p, v) {
    return b.fromSourceMap(p, v);
  }, c.prototype._version = 3, c.prototype.__generatedMappings = null, Object.defineProperty(c.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), c.prototype.__originalMappings = null, Object.defineProperty(c.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), c.prototype._charIsMappingSeparator = function(v, S) {
    var g = v.charAt(S);
    return g === ";" || g === ",";
  }, c.prototype._parseMappings = function(v, S) {
    throw new Error("Subclasses must implement _parseMappings");
  }, c.GENERATED_ORDER = 1, c.ORIGINAL_ORDER = 2, c.GREATEST_LOWER_BOUND = 1, c.LEAST_UPPER_BOUND = 2, c.prototype.eachMapping = function(v, S, g) {
    var y = S || null, h = g || c.GENERATED_ORDER, x;
    switch (h) {
      case c.GENERATED_ORDER:
        x = this._generatedMappings;
        break;
      case c.ORIGINAL_ORDER:
        x = this._originalMappings;
        break;
      default:
        throw new Error("Unknown order of iteration.");
    }
    var C = this.sourceRoot;
    x.map(function(O) {
      var A = O.source === null ? null : this._sources.at(O.source);
      return A = r.computeSourceURL(C, A, this._sourceMapURL), {
        source: A,
        generatedLine: O.generatedLine,
        generatedColumn: O.generatedColumn,
        originalLine: O.originalLine,
        originalColumn: O.originalColumn,
        name: O.name === null ? null : this._names.at(O.name)
      };
    }, this).forEach(v, y);
  }, c.prototype.allGeneratedPositionsFor = function(v) {
    var S = r.getArg(v, "line"), g = {
      source: r.getArg(v, "source"),
      originalLine: S,
      originalColumn: r.getArg(v, "column", 0)
    };
    if (g.source = this._findSourceIndex(g.source), g.source < 0)
      return [];
    var y = [], h = this._findMapping(
      g,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      r.compareByOriginalPositions,
      a.LEAST_UPPER_BOUND
    );
    if (h >= 0) {
      var x = this._originalMappings[h];
      if (v.column === void 0)
        for (var C = x.originalLine; x && x.originalLine === C; )
          y.push({
            line: r.getArg(x, "generatedLine", null),
            column: r.getArg(x, "generatedColumn", null),
            lastColumn: r.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++h];
      else
        for (var O = x.originalColumn; x && x.originalLine === S && x.originalColumn == O; )
          y.push({
            line: r.getArg(x, "generatedLine", null),
            column: r.getArg(x, "generatedColumn", null),
            lastColumn: r.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++h];
    }
    return y;
  }, xl.SourceMapConsumer = c;
  function b(p, v) {
    var S = p;
    typeof p == "string" && (S = r.parseSourceMapInput(p));
    var g = r.getArg(S, "version"), y = r.getArg(S, "sources"), h = r.getArg(S, "names", []), x = r.getArg(S, "sourceRoot", null), C = r.getArg(S, "sourcesContent", null), O = r.getArg(S, "mappings"), A = r.getArg(S, "file", null);
    if (g != this._version)
      throw new Error("Unsupported version: " + g);
    x && (x = r.normalize(x)), y = y.map(String).map(r.normalize).map(function(D) {
      return x && r.isAbsolute(x) && r.isAbsolute(D) ? r.relative(x, D) : D;
    }), this._names = l.fromArray(h.map(String), !0), this._sources = l.fromArray(y, !0), this._absoluteSources = this._sources.toArray().map(function(D) {
      return r.computeSourceURL(x, D, v);
    }), this.sourceRoot = x, this.sourcesContent = C, this._mappings = O, this._sourceMapURL = v, this.file = A;
  }
  b.prototype = Object.create(c.prototype), b.prototype.consumer = c, b.prototype._findSourceIndex = function(p) {
    var v = p;
    if (this.sourceRoot != null && (v = r.relative(this.sourceRoot, v)), this._sources.has(v))
      return this._sources.indexOf(v);
    var S;
    for (S = 0; S < this._absoluteSources.length; ++S)
      if (this._absoluteSources[S] == p)
        return S;
    return -1;
  }, b.fromSourceMap = function(v, S) {
    var g = Object.create(b.prototype), y = g._names = l.fromArray(v._names.toArray(), !0), h = g._sources = l.fromArray(v._sources.toArray(), !0);
    g.sourceRoot = v._sourceRoot, g.sourcesContent = v._generateSourcesContent(
      g._sources.toArray(),
      g.sourceRoot
    ), g.file = v._file, g._sourceMapURL = S, g._absoluteSources = g._sources.toArray().map(function(j) {
      return r.computeSourceURL(g.sourceRoot, j, S);
    });
    for (var x = v._mappings.toArray().slice(), C = g.__generatedMappings = [], O = g.__originalMappings = [], A = 0, D = x.length; A < D; A++) {
      var E = x[A], T = new m();
      T.generatedLine = E.generatedLine, T.generatedColumn = E.generatedColumn, E.source && (T.source = h.indexOf(E.source), T.originalLine = E.originalLine, T.originalColumn = E.originalColumn, E.name && (T.name = y.indexOf(E.name)), O.push(T)), C.push(T);
    }
    return u(g.__originalMappings, r.compareByOriginalPositions), g;
  }, b.prototype._version = 3, Object.defineProperty(b.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function m() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  b.prototype._parseMappings = function(v, S) {
    for (var g = 1, y = 0, h = 0, x = 0, C = 0, O = 0, A = v.length, D = 0, E = {}, T = {}, j = [], L = [], G, ee, P, Y, X; D < A; )
      if (v.charAt(D) === ";")
        g++, D++, y = 0;
      else if (v.charAt(D) === ",")
        D++;
      else {
        for (G = new m(), G.generatedLine = g, Y = D; Y < A && !this._charIsMappingSeparator(v, Y); Y++)
          ;
        if (ee = v.slice(D, Y), P = E[ee], P)
          D += ee.length;
        else {
          for (P = []; D < Y; )
            s.decode(v, D, T), X = T.value, D = T.rest, P.push(X);
          if (P.length === 2)
            throw new Error("Found a source, but no line and column");
          if (P.length === 3)
            throw new Error("Found a source and line, but no column");
          E[ee] = P;
        }
        G.generatedColumn = y + P[0], y = G.generatedColumn, P.length > 1 && (G.source = C + P[1], C += P[1], G.originalLine = h + P[2], h = G.originalLine, G.originalLine += 1, G.originalColumn = x + P[3], x = G.originalColumn, P.length > 4 && (G.name = O + P[4], O += P[4])), L.push(G), typeof G.originalLine == "number" && j.push(G);
      }
    u(L, r.compareByGeneratedPositionsDeflated), this.__generatedMappings = L, u(j, r.compareByOriginalPositions), this.__originalMappings = j;
  }, b.prototype._findMapping = function(v, S, g, y, h, x) {
    if (v[g] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + v[g]);
    if (v[y] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + v[y]);
    return a.search(v, S, h, x);
  }, b.prototype.computeColumnSpans = function() {
    for (var v = 0; v < this._generatedMappings.length; ++v) {
      var S = this._generatedMappings[v];
      if (v + 1 < this._generatedMappings.length) {
        var g = this._generatedMappings[v + 1];
        if (S.generatedLine === g.generatedLine) {
          S.lastGeneratedColumn = g.generatedColumn - 1;
          continue;
        }
      }
      S.lastGeneratedColumn = 1 / 0;
    }
  }, b.prototype.originalPositionFor = function(v) {
    var S = {
      generatedLine: r.getArg(v, "line"),
      generatedColumn: r.getArg(v, "column")
    }, g = this._findMapping(
      S,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      r.compareByGeneratedPositionsDeflated,
      r.getArg(v, "bias", c.GREATEST_LOWER_BOUND)
    );
    if (g >= 0) {
      var y = this._generatedMappings[g];
      if (y.generatedLine === S.generatedLine) {
        var h = r.getArg(y, "source", null);
        h !== null && (h = this._sources.at(h), h = r.computeSourceURL(this.sourceRoot, h, this._sourceMapURL));
        var x = r.getArg(y, "name", null);
        return x !== null && (x = this._names.at(x)), {
          source: h,
          line: r.getArg(y, "originalLine", null),
          column: r.getArg(y, "originalColumn", null),
          name: x
        };
      }
    }
    return {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, b.prototype.hasContentsOfAllSources = function() {
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(v) {
      return v == null;
    }) : !1;
  }, b.prototype.sourceContentFor = function(v, S) {
    if (!this.sourcesContent)
      return null;
    var g = this._findSourceIndex(v);
    if (g >= 0)
      return this.sourcesContent[g];
    var y = v;
    this.sourceRoot != null && (y = r.relative(this.sourceRoot, y));
    var h;
    if (this.sourceRoot != null && (h = r.urlParse(this.sourceRoot))) {
      var x = y.replace(/^file:\/\//, "");
      if (h.scheme == "file" && this._sources.has(x))
        return this.sourcesContent[this._sources.indexOf(x)];
      if ((!h.path || h.path == "/") && this._sources.has("/" + y))
        return this.sourcesContent[this._sources.indexOf("/" + y)];
    }
    if (S)
      return null;
    throw new Error('"' + y + '" is not in the SourceMap.');
  }, b.prototype.generatedPositionFor = function(v) {
    var S = r.getArg(v, "source");
    if (S = this._findSourceIndex(S), S < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var g = {
      source: S,
      originalLine: r.getArg(v, "line"),
      originalColumn: r.getArg(v, "column")
    }, y = this._findMapping(
      g,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      r.compareByOriginalPositions,
      r.getArg(v, "bias", c.GREATEST_LOWER_BOUND)
    );
    if (y >= 0) {
      var h = this._originalMappings[y];
      if (h.source === g.source)
        return {
          line: r.getArg(h, "generatedLine", null),
          column: r.getArg(h, "generatedColumn", null),
          lastColumn: r.getArg(h, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, xl.BasicSourceMapConsumer = b;
  function d(p, v) {
    var S = p;
    typeof p == "string" && (S = r.parseSourceMapInput(p));
    var g = r.getArg(S, "version"), y = r.getArg(S, "sections");
    if (g != this._version)
      throw new Error("Unsupported version: " + g);
    this._sources = new l(), this._names = new l();
    var h = {
      line: -1,
      column: 0
    };
    this._sections = y.map(function(x) {
      if (x.url)
        throw new Error("Support for url field in sections not implemented.");
      var C = r.getArg(x, "offset"), O = r.getArg(C, "line"), A = r.getArg(C, "column");
      if (O < h.line || O === h.line && A < h.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return h = C, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: O + 1,
          generatedColumn: A + 1
        },
        consumer: new c(r.getArg(x, "map"), v)
      };
    });
  }
  return d.prototype = Object.create(c.prototype), d.prototype.constructor = c, d.prototype._version = 3, Object.defineProperty(d.prototype, "sources", {
    get: function() {
      for (var p = [], v = 0; v < this._sections.length; v++)
        for (var S = 0; S < this._sections[v].consumer.sources.length; S++)
          p.push(this._sections[v].consumer.sources[S]);
      return p;
    }
  }), d.prototype.originalPositionFor = function(v) {
    var S = {
      generatedLine: r.getArg(v, "line"),
      generatedColumn: r.getArg(v, "column")
    }, g = a.search(
      S,
      this._sections,
      function(h, x) {
        var C = h.generatedLine - x.generatedOffset.generatedLine;
        return C || h.generatedColumn - x.generatedOffset.generatedColumn;
      }
    ), y = this._sections[g];
    return y ? y.consumer.originalPositionFor({
      line: S.generatedLine - (y.generatedOffset.generatedLine - 1),
      column: S.generatedColumn - (y.generatedOffset.generatedLine === S.generatedLine ? y.generatedOffset.generatedColumn - 1 : 0),
      bias: v.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, d.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(v) {
      return v.consumer.hasContentsOfAllSources();
    });
  }, d.prototype.sourceContentFor = function(v, S) {
    for (var g = 0; g < this._sections.length; g++) {
      var y = this._sections[g], h = y.consumer.sourceContentFor(v, !0);
      if (h)
        return h;
    }
    if (S)
      return null;
    throw new Error('"' + v + '" is not in the SourceMap.');
  }, d.prototype.generatedPositionFor = function(v) {
    for (var S = 0; S < this._sections.length; S++) {
      var g = this._sections[S];
      if (g.consumer._findSourceIndex(r.getArg(v, "source")) !== -1) {
        var y = g.consumer.generatedPositionFor(v);
        if (y) {
          var h = {
            line: y.line + (g.generatedOffset.generatedLine - 1),
            column: y.column + (g.generatedOffset.generatedLine === y.line ? g.generatedOffset.generatedColumn - 1 : 0)
          };
          return h;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, d.prototype._parseMappings = function(v, S) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var g = 0; g < this._sections.length; g++)
      for (var y = this._sections[g], h = y.consumer._generatedMappings, x = 0; x < h.length; x++) {
        var C = h[x], O = y.consumer._sources.at(C.source);
        O = r.computeSourceURL(y.consumer.sourceRoot, O, this._sourceMapURL), this._sources.add(O), O = this._sources.indexOf(O);
        var A = null;
        C.name && (A = y.consumer._names.at(C.name), this._names.add(A), A = this._names.indexOf(A));
        var D = {
          source: O,
          generatedLine: C.generatedLine + (y.generatedOffset.generatedLine - 1),
          generatedColumn: C.generatedColumn + (y.generatedOffset.generatedLine === C.generatedLine ? y.generatedOffset.generatedColumn - 1 : 0),
          originalLine: C.originalLine,
          originalColumn: C.originalColumn,
          name: A
        };
        this.__generatedMappings.push(D), typeof D.originalLine == "number" && this.__originalMappings.push(D);
      }
    u(this.__generatedMappings, r.compareByGeneratedPositionsDeflated), u(this.__originalMappings, r.compareByOriginalPositions);
  }, xl.IndexedSourceMapConsumer = d, xl;
}
var Mf = {}, Ev;
function L_() {
  if (Ev) return Mf;
  Ev = 1;
  var r = Ey().SourceMapGenerator, a = zl(), l = /(\r?\n)/, s = 10, u = "$$$isSourceNode$$$";
  function c(b, m, d, p, v) {
    this.children = [], this.sourceContents = {}, this.line = b ?? null, this.column = m ?? null, this.source = d ?? null, this.name = v ?? null, this[u] = !0, p != null && this.add(p);
  }
  return c.fromStringWithSourceMap = function(m, d, p) {
    var v = new c(), S = m.split(l), g = 0, y = function() {
      var A = E(), D = E() || "";
      return A + D;
      function E() {
        return g < S.length ? S[g++] : void 0;
      }
    }, h = 1, x = 0, C = null;
    return d.eachMapping(function(A) {
      if (C !== null)
        if (h < A.generatedLine)
          O(C, y()), h++, x = 0;
        else {
          var D = S[g] || "", E = D.substr(0, A.generatedColumn - x);
          S[g] = D.substr(A.generatedColumn - x), x = A.generatedColumn, O(C, E), C = A;
          return;
        }
      for (; h < A.generatedLine; )
        v.add(y()), h++;
      if (x < A.generatedColumn) {
        var D = S[g] || "";
        v.add(D.substr(0, A.generatedColumn)), S[g] = D.substr(A.generatedColumn), x = A.generatedColumn;
      }
      C = A;
    }, this), g < S.length && (C && O(C, y()), v.add(S.splice(g).join(""))), d.sources.forEach(function(A) {
      var D = d.sourceContentFor(A);
      D != null && (p != null && (A = a.join(p, A)), v.setSourceContent(A, D));
    }), v;
    function O(A, D) {
      if (A === null || A.source === void 0)
        v.add(D);
      else {
        var E = p ? a.join(p, A.source) : A.source;
        v.add(new c(
          A.originalLine,
          A.originalColumn,
          E,
          D,
          A.name
        ));
      }
    }
  }, c.prototype.add = function(m) {
    if (Array.isArray(m))
      m.forEach(function(d) {
        this.add(d);
      }, this);
    else if (m[u] || typeof m == "string")
      m && this.children.push(m);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + m
      );
    return this;
  }, c.prototype.prepend = function(m) {
    if (Array.isArray(m))
      for (var d = m.length - 1; d >= 0; d--)
        this.prepend(m[d]);
    else if (m[u] || typeof m == "string")
      this.children.unshift(m);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + m
      );
    return this;
  }, c.prototype.walk = function(m) {
    for (var d, p = 0, v = this.children.length; p < v; p++)
      d = this.children[p], d[u] ? d.walk(m) : d !== "" && m(d, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, c.prototype.join = function(m) {
    var d, p, v = this.children.length;
    if (v > 0) {
      for (d = [], p = 0; p < v - 1; p++)
        d.push(this.children[p]), d.push(m);
      d.push(this.children[p]), this.children = d;
    }
    return this;
  }, c.prototype.replaceRight = function(m, d) {
    var p = this.children[this.children.length - 1];
    return p[u] ? p.replaceRight(m, d) : typeof p == "string" ? this.children[this.children.length - 1] = p.replace(m, d) : this.children.push("".replace(m, d)), this;
  }, c.prototype.setSourceContent = function(m, d) {
    this.sourceContents[a.toSetString(m)] = d;
  }, c.prototype.walkSourceContents = function(m) {
    for (var d = 0, p = this.children.length; d < p; d++)
      this.children[d][u] && this.children[d].walkSourceContents(m);
    for (var v = Object.keys(this.sourceContents), d = 0, p = v.length; d < p; d++)
      m(a.fromSetString(v[d]), this.sourceContents[v[d]]);
  }, c.prototype.toString = function() {
    var m = "";
    return this.walk(function(d) {
      m += d;
    }), m;
  }, c.prototype.toStringWithSourceMap = function(m) {
    var d = {
      code: "",
      line: 1,
      column: 0
    }, p = new r(m), v = !1, S = null, g = null, y = null, h = null;
    return this.walk(function(x, C) {
      d.code += x, C.source !== null && C.line !== null && C.column !== null ? ((S !== C.source || g !== C.line || y !== C.column || h !== C.name) && p.addMapping({
        source: C.source,
        original: {
          line: C.line,
          column: C.column
        },
        generated: {
          line: d.line,
          column: d.column
        },
        name: C.name
      }), S = C.source, g = C.line, y = C.column, h = C.name, v = !0) : v && (p.addMapping({
        generated: {
          line: d.line,
          column: d.column
        }
      }), S = null, v = !1);
      for (var O = 0, A = x.length; O < A; O++)
        x.charCodeAt(O) === s ? (d.line++, d.column = 0, O + 1 === A ? (S = null, v = !1) : v && p.addMapping({
          source: C.source,
          original: {
            line: C.line,
            column: C.column
          },
          generated: {
            line: d.line,
            column: d.column
          },
          name: C.name
        })) : d.column++;
    }), this.walkSourceContents(function(x, C) {
      p.setSourceContent(x, C);
    }), { code: d.code, map: p };
  }, Mf.SourceNode = c, Mf;
}
var Cv;
function B_() {
  return Cv || (Cv = 1, _l.SourceMapGenerator = Ey().SourceMapGenerator, _l.SourceMapConsumer = j_().SourceMapConsumer, _l.SourceNode = L_().SourceNode), _l;
}
var Av;
function z_() {
  return Av || (Av = 1, (function(r, a) {
    a.__esModule = !0;
    var l = It(), s = void 0;
    try {
      var u = B_();
      s = u.SourceNode;
    } catch {
    }
    s || (s = function(m, d, p, v) {
      this.src = "", v && this.add(v);
    }, s.prototype = {
      add: function(d) {
        l.isArray(d) && (d = d.join("")), this.src += d;
      },
      prepend: function(d) {
        l.isArray(d) && (d = d.join("")), this.src = d + this.src;
      },
      toStringWithSourceMap: function() {
        return { code: this.toString() };
      },
      toString: function() {
        return this.src;
      }
    });
    function c(m, d, p) {
      if (l.isArray(m)) {
        for (var v = [], S = 0, g = m.length; S < g; S++)
          v.push(d.wrap(m[S], p));
        return v;
      } else if (typeof m == "boolean" || typeof m == "number")
        return m + "";
      return m;
    }
    function b(m) {
      this.srcFile = m, this.source = [];
    }
    b.prototype = {
      isEmpty: function() {
        return !this.source.length;
      },
      prepend: function(d, p) {
        this.source.unshift(this.wrap(d, p));
      },
      push: function(d, p) {
        this.source.push(this.wrap(d, p));
      },
      merge: function() {
        var d = this.empty();
        return this.each(function(p) {
          d.add(["  ", p, `
`]);
        }), d;
      },
      each: function(d) {
        for (var p = 0, v = this.source.length; p < v; p++)
          d(this.source[p]);
      },
      empty: function() {
        var d = this.currentLocation || { start: {} };
        return new s(d.start.line, d.start.column, this.srcFile);
      },
      wrap: function(d) {
        var p = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return d instanceof s ? d : (d = c(d, this, p), new s(p.start.line, p.start.column, this.srcFile, d));
      },
      functionCall: function(d, p, v) {
        return v = this.generateList(v), this.wrap([d, p ? "." + p + "(" : "(", v, ")"]);
      },
      quotedString: function(d) {
        return '"' + (d + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(d) {
        var p = this, v = [];
        Object.keys(d).forEach(function(g) {
          var y = c(d[g], p);
          y !== "undefined" && v.push([p.quotedString(g), ":", y]);
        });
        var S = this.generateList(v);
        return S.prepend("{"), S.add("}"), S;
      },
      generateList: function(d) {
        for (var p = this.empty(), v = 0, S = d.length; v < S; v++)
          v && p.add(","), p.add(c(d[v], this));
        return p;
      },
      generateArray: function(d) {
        var p = this.generateList(d);
        return p.prepend("["), p.add("]"), p;
      }
    }, a.default = b, r.exports = a.default;
  })(To, To.exports)), To.exports;
}
var Tv;
function U_() {
  return Tv || (Tv = 1, (function(r, a) {
    a.__esModule = !0;
    function l(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var s = dh(), u = An(), c = l(u), b = It(), m = z_(), d = l(m);
    function p(g) {
      this.value = g;
    }
    function v() {
    }
    v.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(y, h) {
        return this.internalNameLookup(y, h);
      },
      depthedLookup: function(y) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(y), ")"];
      },
      compilerInfo: function() {
        var y = s.COMPILER_REVISION, h = s.REVISION_CHANGES[y];
        return [y, h];
      },
      appendToBuffer: function(y, h, x) {
        return b.isArray(y) || (y = [y]), y = this.source.wrap(y, h), this.environment.isSimple ? ["return ", y, ";"] : x ? ["buffer += ", y, ";"] : (y.appendToBuffer = !0, y);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(y, h) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", y, ",", JSON.stringify(h), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(y, h, x, C) {
        this.environment = y, this.options = h, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !C, this.name = this.environment.name, this.isChild = !!x, this.context = x || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(y, h), this.useDepths = this.useDepths || y.useDepths || y.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || y.useBlockParams;
        var O = y.opcodes, A = void 0, D = void 0, E = void 0, T = void 0;
        for (E = 0, T = O.length; E < T; E++)
          A = O[E], this.source.currentLocation = A.loc, D = D || A.loc, this[A.opcode].apply(this, A.args);
        if (this.source.currentLocation = D, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new c.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), C ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var j = this.createFunctionContext(C);
        if (this.isChild)
          return j;
        var L = {
          compiler: this.compilerInfo(),
          main: j
        };
        this.decorators && (L.main_d = this.decorators, L.useDecorators = !0);
        var G = this.context, ee = G.programs, P = G.decorators;
        for (E = 0, T = ee.length; E < T; E++)
          ee[E] && (L[E] = ee[E], P[E] && (L[E + "_d"] = P[E], L.useDecorators = !0));
        return this.environment.usePartial && (L.usePartial = !0), this.options.data && (L.useData = !0), this.useDepths && (L.useDepths = !0), this.useBlockParams && (L.useBlockParams = !0), this.options.compat && (L.compat = !0), C ? L.compilerOptions = this.options : (L.compiler = JSON.stringify(L.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, L = this.objectLiteral(L), h.srcName ? (L = L.toStringWithSourceMap({ file: h.destName }), L.map = L.map && L.map.toString()) : L = L.toString()), L;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new d.default(this.options.srcName), this.decorators = new d.default(this.options.srcName);
      },
      createFunctionContext: function(y) {
        var h = this, x = "", C = this.stackVars.concat(this.registers.list);
        C.length > 0 && (x += ", " + C.join(", "));
        var O = 0;
        Object.keys(this.aliases).forEach(function(E) {
          var T = h.aliases[E];
          T.children && T.referenceCount > 1 && (x += ", alias" + ++O + "=" + E, T.children[0] = "alias" + O);
        }), this.lookupPropertyFunctionIsUsed && (x += ", " + this.lookupPropertyFunctionVarDeclaration());
        var A = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && A.push("blockParams"), this.useDepths && A.push("depths");
        var D = this.mergeSource(x);
        return y ? (A.push(D), Function.apply(this, A)) : this.source.wrap(["function(", A.join(","), `) {
  `, D, "}"]);
      },
      mergeSource: function(y) {
        var h = this.environment.isSimple, x = !this.forceBuffer, C = void 0, O = void 0, A = void 0, D = void 0;
        return this.source.each(function(E) {
          E.appendToBuffer ? (A ? E.prepend("  + ") : A = E, D = E) : (A && (O ? A.prepend("buffer += ") : C = !0, D.add(";"), A = D = void 0), O = !0, h || (x = !1));
        }), x ? A ? (A.prepend("return "), D.add(";")) : O || this.source.push('return "";') : (y += ", buffer = " + (C ? "" : this.initializeBuffer()), A ? (A.prepend("return buffer + "), D.add(";")) : this.source.push("return buffer;")), y && this.source.prepend("var " + y.substring(2) + (C ? "" : `;
`)), this.source.merge();
      },
      lookupPropertyFunctionVarDeclaration: function() {
        return `
      lookupProperty = container.lookupProperty || function(parent, propertyName) {
        if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
          return parent[propertyName];
        }
        return undefined
    }
    `.trim();
      },
      // [blockValue]
      //
      // On stack, before: hash, inverse, program, value
      // On stack, after: return value of blockHelperMissing
      //
      // The purpose of this opcode is to take a block of the form
      // `{{#this.foo}}...{{/this.foo}}`, resolve the value of `foo`, and
      // replace it on the stack with the result of properly
      // invoking blockHelperMissing.
      blockValue: function(y) {
        var h = this.aliasable("container.hooks.blockHelperMissing"), x = [this.contextName(0)];
        this.setupHelperArgs(y, 0, x);
        var C = this.popStack();
        x.splice(1, 0, C), this.push(this.source.functionCall(h, "call", x));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var y = this.aliasable("container.hooks.blockHelperMissing"), h = [this.contextName(0)];
        this.setupHelperArgs("", 0, h, !0), this.flushInline();
        var x = this.topStack();
        h.splice(1, 0, x), this.pushSource(["if (!", this.lastHelper, ") { ", x, " = ", this.source.functionCall(y, "call", h), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function(y) {
        this.pendingContent ? y = this.pendingContent + y : this.pendingLocation = this.source.currentLocation, this.pendingContent = y;
      },
      // [append]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Coerces `value` to a String and appends it to the current buffer.
      //
      // If `value` is truthy, or 0, it is coerced into a string and appended
      // Otherwise, the empty string is appended
      append: function() {
        if (this.isInline())
          this.replaceStack(function(h) {
            return [" != null ? ", h, ' : ""'];
          }), this.pushSource(this.appendToBuffer(this.popStack()));
        else {
          var y = this.popStack();
          this.pushSource(["if (", y, " != null) { ", this.appendToBuffer(y, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
        }
      },
      // [appendEscaped]
      //
      // On stack, before: value, ...
      // On stack, after: ...
      //
      // Escape `value` and append it to the buffer
      appendEscaped: function() {
        this.pushSource(this.appendToBuffer([this.aliasable("container.escapeExpression"), "(", this.popStack(), ")"]));
      },
      // [getContext]
      //
      // On stack, before: ...
      // On stack, after: ...
      // Compiler value, after: lastContext=depth
      //
      // Set the value of the `lastContext` compiler value to the depth
      getContext: function(y) {
        this.lastContext = y;
      },
      // [pushContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext, ...
      //
      // Pushes the value of the current context onto the stack.
      pushContext: function() {
        this.pushStackLiteral(this.contextName(this.lastContext));
      },
      // [lookupOnContext]
      //
      // On stack, before: ...
      // On stack, after: currentContext[name], ...
      //
      // Looks up the value of `name` on the current context and pushes
      // it onto the stack.
      lookupOnContext: function(y, h, x, C) {
        var O = 0;
        !C && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(y[O++])) : this.pushContext(), this.resolvePath("context", y, O, h, x);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(y, h) {
        this.useBlockParams = !0, this.push(["blockParams[", y[0], "][", y[1], "]"]), this.resolvePath("context", h, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(y, h, x) {
        y ? this.pushStackLiteral("container.data(data, " + y + ")") : this.pushStackLiteral("data"), this.resolvePath("data", h, 0, !0, x);
      },
      resolvePath: function(y, h, x, C, O) {
        var A = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(S(this.options.strict && O, this, h, x, y));
          return;
        }
        for (var D = h.length; x < D; x++)
          this.replaceStack(function(E) {
            var T = A.nameLookup(E, h[x], y);
            return C ? [" && ", T] : [" != null ? ", T, " : ", E];
          });
      },
      // [resolvePossibleLambda]
      //
      // On stack, before: value, ...
      // On stack, after: resolved value, ...
      //
      // If the `value` is a lambda, replace it on the stack by
      // the return value of the lambda
      resolvePossibleLambda: function() {
        this.push([this.aliasable("container.lambda"), "(", this.popStack(), ", ", this.contextName(0), ")"]);
      },
      // [pushStringParam]
      //
      // On stack, before: ...
      // On stack, after: string, currentContext, ...
      //
      // This opcode is designed for use in string mode, which
      // provides the string value of a parameter along with its
      // depth rather than resolving it immediately.
      pushStringParam: function(y, h) {
        this.pushContext(), this.pushString(h), h !== "SubExpression" && (typeof y == "string" ? this.pushString(y) : this.pushStackLiteral(y));
      },
      emptyHash: function(y) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(y ? "undefined" : "{}");
      },
      pushHash: function() {
        this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function() {
        var y = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(y.ids)), this.stringParams && (this.push(this.objectLiteral(y.contexts)), this.push(this.objectLiteral(y.types))), this.push(this.objectLiteral(y.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function(y) {
        this.pushStackLiteral(this.quotedString(y));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function(y) {
        this.pushStackLiteral(y);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function(y) {
        y != null ? this.pushStackLiteral(this.programExpression(y)) : this.pushStackLiteral(null);
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function(y, h) {
        var x = this.nameLookup("decorators", h, "decorator"), C = this.setupHelperArgs(h, y);
        this.decorators.push(["fn = ", this.decorators.functionCall(x, "", ["fn", "props", "container", C]), " || fn;"]);
      },
      // [invokeHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // Pops off the helper's parameters, invokes the helper,
      // and pushes the helper's return value onto the stack.
      //
      // If the helper is not found, `helperMissing` is called.
      invokeHelper: function(y, h, x) {
        var C = this.popStack(), O = this.setupHelper(y, h), A = [];
        x && A.push(O.name), A.push(C), this.options.strict || A.push(this.aliasable("container.hooks.helperMissing"));
        var D = ["(", this.itemsSeparatedBy(A, "||"), ")"], E = this.source.functionCall(D, "call", O.callParams);
        this.push(E);
      },
      itemsSeparatedBy: function(y, h) {
        var x = [];
        x.push(y[0]);
        for (var C = 1; C < y.length; C++)
          x.push(h, y[C]);
        return x;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(y, h) {
        var x = this.setupHelper(y, h);
        this.push(this.source.functionCall(x.name, "call", x.callParams));
      },
      // [invokeAmbiguous]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of disambiguation
      //
      // This operation is used when an expression like `{{foo}}`
      // is provided, but we don't know at compile-time whether it
      // is a helper or a path.
      //
      // This operation emits more code than the other options,
      // and can be avoided by passing the `knownHelpers` and
      // `knownHelpersOnly` flags at compile-time.
      invokeAmbiguous: function(y, h) {
        this.useRegister("helper");
        var x = this.popStack();
        this.emptyHash();
        var C = this.setupHelper(0, y, h), O = this.lastHelper = this.nameLookup("helpers", y, "helper"), A = ["(", "(helper = ", O, " || ", x, ")"];
        this.options.strict || (A[0] = "(helper = ", A.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", A, C.paramsInit ? ["),(", C.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", C.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(y, h, x) {
        var C = [], O = this.setupParams(h, 1, C);
        y && (h = this.popStack(), delete O.name), x && (O.indent = JSON.stringify(x)), O.helpers = "helpers", O.partials = "partials", O.decorators = "container.decorators", y ? C.unshift(h) : C.unshift(this.nameLookup("partials", h, "partial")), this.options.compat && (O.depths = "depths"), O = this.objectLiteral(O), C.push(O), this.push(this.source.functionCall("container.invokePartial", "", C));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(y) {
        var h = this.popStack(), x = void 0, C = void 0, O = void 0;
        this.trackIds && (O = this.popStack()), this.stringParams && (C = this.popStack(), x = this.popStack());
        var A = this.hash;
        x && (A.contexts[y] = x), C && (A.types[y] = C), O && (A.ids[y] = O), A.values[y] = h;
      },
      pushId: function(y, h, x) {
        y === "BlockParam" ? this.pushStackLiteral("blockParams[" + h[0] + "].path[" + h[1] + "]" + (x ? " + " + JSON.stringify("." + x) : "")) : y === "PathExpression" ? this.pushString(h) : y === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: v,
      compileChildren: function(y, h) {
        for (var x = y.children, C = void 0, O = void 0, A = 0, D = x.length; A < D; A++) {
          C = x[A], O = new this.compiler();
          var E = this.matchExistingProgram(C);
          if (E == null) {
            this.context.programs.push("");
            var T = this.context.programs.length;
            C.index = T, C.name = "program" + T, this.context.programs[T] = O.compile(C, h, this.context, !this.precompile), this.context.decorators[T] = O.decorators, this.context.environments[T] = C, this.useDepths = this.useDepths || O.useDepths, this.useBlockParams = this.useBlockParams || O.useBlockParams, C.useDepths = this.useDepths, C.useBlockParams = this.useBlockParams;
          } else
            C.index = E.index, C.name = "program" + E.index, this.useDepths = this.useDepths || E.useDepths, this.useBlockParams = this.useBlockParams || E.useBlockParams;
        }
      },
      matchExistingProgram: function(y) {
        for (var h = 0, x = this.context.environments.length; h < x; h++) {
          var C = this.context.environments[h];
          if (C && C.equals(y))
            return C;
        }
      },
      programExpression: function(y) {
        var h = this.environment.children[y], x = [h.index, "data", h.blockParams];
        return (this.useBlockParams || this.useDepths) && x.push("blockParams"), this.useDepths && x.push("depths"), "container.program(" + x.join(", ") + ")";
      },
      useRegister: function(y) {
        this.registers[y] || (this.registers[y] = !0, this.registers.list.push(y));
      },
      push: function(y) {
        return y instanceof p || (y = this.source.wrap(y)), this.inlineStack.push(y), y;
      },
      pushStackLiteral: function(y) {
        this.push(new p(y));
      },
      pushSource: function(y) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), y && this.source.push(y);
      },
      replaceStack: function(y) {
        var h = ["("], x = void 0, C = void 0, O = void 0;
        if (!this.isInline())
          throw new c.default("replaceStack on non-inline");
        var A = this.popStack(!0);
        if (A instanceof p)
          x = [A.value], h = ["(", x], O = !0;
        else {
          C = !0;
          var D = this.incrStack();
          h = ["((", this.push(D), " = ", A, ")"], x = this.topStack();
        }
        var E = y.call(this, x);
        O || this.popStack(), C && this.stackSlot--, this.push(h.concat(E, ")"));
      },
      incrStack: function() {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var y = this.inlineStack;
        this.inlineStack = [];
        for (var h = 0, x = y.length; h < x; h++) {
          var C = y[h];
          if (C instanceof p)
            this.compileStack.push(C);
          else {
            var O = this.incrStack();
            this.pushSource([O, " = ", C, ";"]), this.compileStack.push(O);
          }
        }
      },
      isInline: function() {
        return this.inlineStack.length;
      },
      popStack: function(y) {
        var h = this.isInline(), x = (h ? this.inlineStack : this.compileStack).pop();
        if (!y && x instanceof p)
          return x.value;
        if (!h) {
          if (!this.stackSlot)
            throw new c.default("Invalid stack pop");
          this.stackSlot--;
        }
        return x;
      },
      topStack: function() {
        var y = this.isInline() ? this.inlineStack : this.compileStack, h = y[y.length - 1];
        return h instanceof p ? h.value : h;
      },
      contextName: function(y) {
        return this.useDepths && y ? "depths[" + y + "]" : "depth" + y;
      },
      quotedString: function(y) {
        return this.source.quotedString(y);
      },
      objectLiteral: function(y) {
        return this.source.objectLiteral(y);
      },
      aliasable: function(y) {
        var h = this.aliases[y];
        return h ? (h.referenceCount++, h) : (h = this.aliases[y] = this.source.wrap(y), h.aliasable = !0, h.referenceCount = 1, h);
      },
      setupHelper: function(y, h, x) {
        var C = [], O = this.setupHelperArgs(h, y, C, x), A = this.nameLookup("helpers", h, "helper"), D = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: C,
          paramsInit: O,
          name: A,
          callParams: [D].concat(C)
        };
      },
      setupParams: function(y, h, x) {
        var C = {}, O = [], A = [], D = [], E = !x, T = void 0;
        E && (x = []), C.name = this.quotedString(y), C.hash = this.popStack(), this.trackIds && (C.hashIds = this.popStack()), this.stringParams && (C.hashTypes = this.popStack(), C.hashContexts = this.popStack());
        var j = this.popStack(), L = this.popStack();
        (L || j) && (C.fn = L || "container.noop", C.inverse = j || "container.noop");
        for (var G = h; G--; )
          T = this.popStack(), x[G] = T, this.trackIds && (D[G] = this.popStack()), this.stringParams && (A[G] = this.popStack(), O[G] = this.popStack());
        return E && (C.args = this.source.generateArray(x)), this.trackIds && (C.ids = this.source.generateArray(D)), this.stringParams && (C.types = this.source.generateArray(A), C.contexts = this.source.generateArray(O)), this.options.data && (C.data = "data"), this.useBlockParams && (C.blockParams = "blockParams"), C;
      },
      setupHelperArgs: function(y, h, x, C) {
        var O = this.setupParams(y, h, x);
        return O.loc = JSON.stringify(this.source.currentLocation), O = this.objectLiteral(O), C ? (this.useRegister("options"), x.push("options"), ["options=", O]) : x ? (x.push(O), "") : O;
      }
    }, (function() {
      for (var g = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), y = v.RESERVED_WORDS = {}, h = 0, x = g.length; h < x; h++)
        y[g[h]] = !0;
    })(), v.isValidJavaScriptVariableName = function(g) {
      return !v.RESERVED_WORDS[g] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(g);
    };
    function S(g, y, h, x, C) {
      var O = y.popStack(), A = h.length;
      for (g && A--; x < A; x++)
        O = y.nameLookup(O, h[x], C);
      return g ? [y.aliasable("container.strict"), "(", O, ", ", y.quotedString(h[x]), ", ", JSON.stringify(y.source.currentLocation), " )"] : O;
    }
    a.default = v, r.exports = a.default;
  })(Ao, Ao.exports)), Ao.exports;
}
var wv;
function H_() {
  return wv || (wv = 1, (function(r, a) {
    a.__esModule = !0;
    function l(A) {
      return A && A.__esModule ? A : { default: A };
    }
    var s = C_(), u = l(s), c = by(), b = l(c), m = N_(), d = O_(), p = U_(), v = l(p), S = Sy(), g = l(S), y = yy(), h = l(y), x = u.default.create;
    function C() {
      var A = x();
      return A.compile = function(D, E) {
        return d.compile(D, E, A);
      }, A.precompile = function(D, E) {
        return d.precompile(D, E, A);
      }, A.AST = b.default, A.Compiler = d.Compiler, A.JavaScriptCompiler = v.default, A.Parser = m.parser, A.parse = m.parse, A.parseWithoutProcessing = m.parseWithoutProcessing, A;
    }
    var O = C();
    O.create = C, h.default(O), O.Visitor = g.default, O.default = O, a.default = O, r.exports = a.default;
  })(ao, ao.exports)), ao.exports;
}
var aa = H_();
function gi(r, a) {
  aa.helpers[r] || aa.registerHelper(r, a);
}
gi("add", (r, a) => Number(r) + Number(a));
gi("join", (r, a) => Array.isArray(r) ? r.join(typeof a == "string" ? a : ", ") : "");
gi("is_not_empty", function(r, a) {
  return r ? Array.isArray(r) ? r.length > 0 ? a.fn(this) : a.inverse(this) : typeof r == "object" && Object.keys(r).length > 0 ? a.fn(this) : typeof r != "object" && !Array.isArray(r) ? a.fn(this) : a.inverse(this) : a.inverse(this);
});
gi("indent", (r, a) => {
  const l = " ".repeat(Math.max(0, Number(r) || 0));
  return String(a ?? "").split(`
`).join(`
${l}`);
});
gi("json", (r) => JSON.stringify(r));
gi(
  "xmlEscape",
  (r) => String(r ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
);
const ka = SillyTavern.getContext(), jn = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], Cn = {
  name: "Name",
  description: "Description",
  personality: "Personality",
  scenario: "Scenario",
  first_mes: "First Message",
  mes_example: "Example Dialogue"
}, P_ = {
  name: `A short, evocative character name. Aim for 2-6 words. Strong example: "Kaelen, the Whisperwood Scout". Weak example: "Xy'zth'gor" (hard to spell/pronounce).`,
  description: 'A single concise paragraph (~200-350 words / ~300 tokens) blending appearance, demeanor, and one memorable quirk. Strong example: "A tall, graceful woman with bronze hair and startling green eyes, carrying herself with the quiet dignity of a noble and the focused intensity of a warrior. A member of a secretive matriarchal order, she is a master of subtle influence and a formidable political strategist. Though her exterior is composed and serene, she is fiercely protective of those she loves."',
  personality: `Direct, declarative statements about motivations, fears, moral alignment, behavioral traits. No contradictions. ~200-400 words / ~350 tokens. Strong example: "A supreme pragmatist who believes a functioning society is more important than a moral one. Masterfully manipulative, he remains several steps ahead of allies and enemies alike, viewing people as pieces on a chessboard to be positioned for the city's greater good. He abhors chaos and inefficiency above all else, maintaining a calm, detached, and unnervingly still demeanor that forces others to fill the silence. He never raises his voice, preferring to convey threats with quiet, measured words."`,
  scenario: `Sets the scene in ~150-300 words / ~250 tokens: where, when, what is happening, and the initial {{char}}/{{user}} relationship. Strong example: "The setting is a grimy, unsupervised slum in a sprawling metropolis, a place where illegal commerce thrives. The sky is the color of a dead television channel. {{char}} is a 'console cowboy,' a disgraced data thief whose nervous system was damaged as punishment for stealing from an employer. {{user}} is a mysterious mercenary who has tracked {{char}} down to offer a cure in exchange for one last, impossible job."`,
  first_mes: `The character's opening line. ~150-400 words / ~350 tokens. Open with a physical action, include dialogue that reveals personality, end with a hook that prompts {{user}}'s response. Use {{char}} and {{user}}. Strong example: '*{{char}} calmly watches the spinning ceiling fan, the smoke from his cigarette curling into the stagnant air. He doesn't meet {{user}}'s eyes, instead focusing on the condensation on his glass.* "They're just questions. It's a test, designed to provoke an emotional response. Shall we continue?"'`,
  mes_example: 'A 2-3 turn style guide (~300-600 words / ~500 tokens) showing how the character speaks and acts. Separate example chunks with a `<START>` line. Use {{user}} and {{char}}. Mix *asterisk actions* with dialogue. Strong example: `<START>\\n{{user}}: "What makes you think your plan will work?"\\n{{char}}: *A slow, confident smirk spreads across her face as she leans back in her chair, boots resting on the scarred metal desk.* "Because I accounted for every variable. Especially the human one—your greed."\\n\\n{{user}}: "I\'m not sure I can do this."\\n{{char}}: *Her expression softens for a brief moment. She places a reassuring hand on {{user}}\'s shoulder, her calloused fingers a surprising comfort.* "Fear is just a signal. It tells you what you need to protect. Now, let\'s protect it together."`'
}, Cy = {
  name: 128,
  description: 768,
  personality: 768,
  scenario: 512,
  first_mes: 1024,
  mes_example: 2048
};
function q_(r, a, l) {
  const s = l?.[r];
  if (typeof s == "number" && Number.isFinite(s) && s > 0)
    return Math.floor(s);
  const u = Cy[r];
  return typeof u == "number" && Number.isFinite(u) && u > 0 ? u : a;
}
async function I_({
  profileId: r,
  userPrompt: a,
  buildPromptOptions: l,
  continueFrom: s,
  session: u,
  allCharacters: c,
  entriesGroupByWorldName: b,
  promptSettings: m,
  formatDescription: d,
  mainContextList: p,
  includeUserMacro: v,
  maxResponseToken: S,
  fieldMaxResponseTokens: g,
  useWorldInfoActivationScan: y,
  targetField: h,
  outputFormat: x
}) {
  if (!r)
    throw new Error("No connection profile selected.");
  const C = ka.extensionSettings.connectionManager?.profiles?.find((ue) => ue.id === r);
  if (!C)
    throw new Error(`Connection profile with ID "${r}" not found.`);
  const O = C.api ? ka.CONNECT_API_MAP[C.api].selected : void 0;
  if (!O)
    throw new Error(`Could not determine API for profile "${C.name}".`);
  const A = q_(
    h,
    S,
    g
  ), D = {};
  D.char = u.fields.name.value ?? "{{char}}", D.user = v && na ? na : "{{user}}";
  const E = v ? ka.power_user?.persona_description : void 0;
  D.persona = E && E.trim() ? E : "{{persona}}", D.targetField = h, D.fieldGuidance = P_[h] ?? "No specific guidance for this field. Use the surrounding context.", D.userInstructions = aa.compile(a.trim(), { noEscape: !0 })(D), D.fieldSpecificInstructions = aa.compile(
    u.draftFields[h]?.prompt ?? u.fields[h]?.prompt,
    { noEscape: !0 }
  )({
    ...D,
    char: h === "mes_example" ? "{{char}}" : D.char,
    user: h === "mes_example" ? "{{user}}" : D.user
  }), D.activeFormatInstructions = aa.compile(d.content, { noEscape: !0 })(
    D
  );
  {
    const ue = [];
    u.selectedCharacterIndexes.forEach((U) => {
      const $ = parseInt(U), le = c[$];
      le && ue.push(le);
    }), D.characters = ue;
  }
  {
    const ue = {};
    let U = null;
    if (y)
      try {
        const $ = ka.checkWorldInfo;
        if (typeof $ == "function") {
          const le = ka.chat ?? [], he = l.maxContext ?? 16384, M = await $(le, he, !0), F = M && (M.entries ?? M.value ?? M.activatedEntries ?? M);
          if (F && typeof F == "object") {
            const te = [], re = (ae) => {
              ae && typeof ae.uid == "number" && te.push(ae.uid);
            };
            Array.isArray(F) ? F.forEach(re) : typeof F == "object" && (Array.isArray(F.entries) ? F.entries.forEach(re) : Object.values(F).forEach((ae) => {
              Array.isArray(ae) ? ae.forEach(re) : re(ae);
            })), te.length > 0 && (U = new Set(te));
          }
        } else
          Ae(
            "info",
            "[Character Creator] World Info activation scan requested but this SillyTavern version does not expose checkWorldInfo(); sending all enabled entries of selected lorebooks instead."
          );
      } catch ($) {
        console.error("[Character Creator] WI activation scan failed; falling back to all-enabled-entries:", $), U = null;
      }
    Object.entries(b).filter(
      ([$, le]) => le.length > 0 && u.selectedWorldNames.includes($) && le.some((he) => !he.disable)
    ).forEach(([$, le]) => {
      let he = le.filter((M) => !M.disable);
      U !== null && (he = he.filter((M) => U.has(M.uid))), he.length > 0 && (ue[$] = he);
    }), D.lorebooks = ue;
  }
  {
    const ue = {}, U = {}, $ = {}, le = h.startsWith("alternate_greetings_"), he = an.getSettings().contextToSend.dontSendOtherGreetings;
    Object.entries(u.fields).forEach(([F, te]) => {
      let re = !1;
      if (he) {
        const ae = F.startsWith("alternate_greetings_");
        le ? re = ae && F !== h || F === "first_mes" : re = ae;
      }
      if (!re) {
        const ae = aa.compile(te.value, { noEscape: !0 })({
          ...D,
          char: F === "mes_example" ? "{{char}}" : D.char,
          user: F === "mes_example" ? "{{user}}" : D.user
        });
        jn.includes(F) ? ue[te.label] = ae : F.startsWith("alternate_greetings_") && (U[F] = ae);
      }
    }), Object.entries(u.draftFields || {}).forEach(([F, te]) => {
      $[te.label] = aa.compile(te.value, { noEscape: !0 })(D);
    });
    const M = {};
    Object.keys(ue).length > 0 && (M.core = ue), Object.keys(U).length > 0 && (M.alternate_greetings = U), Object.keys($).length > 0 && (M.draft = $), D.fields = M;
  }
  const T = [], j = [];
  {
    for (const ue of p) {
      if (ue.promptName === "chatHistory") {
        const M = await kb(O, l);
        if (M.warnings && M.warnings.length > 0)
          for (const F of M.warnings)
            Ae("warning", F);
        T.push(...M.result), j.push(...M.result.map((F) => ({ role: F.role, content: F.content })));
        continue;
      }
      const $ = ue.promptName === "stDescription" ? { ...D, char: "{{char}}", user: "{{user}}" } : D, le = m[ue.promptName];
      if (!le)
        continue;
      const he = {
        role: ue.role,
        content: aa.compile(le.content, { noEscape: !0 })($)
      };
      he.content = he.content.replaceAll("{{user}}", "[[[crec_veryUniqueUserPlaceHolder]]]"), he.content = he.content.replaceAll("{{char}}", "[[[crec_veryUniqueCharPlaceHolder]]]"), he.content = ka.substituteParams(he.content), he.content = he.content.replaceAll("[[[crec_veryUniqueUserPlaceHolder]]]", "{{user}}"), he.content = he.content.replaceAll("[[[crec_veryUniqueCharPlaceHolder]]]", "{{char}}"), he.content && (T.push(he), j.push({ role: he.role, content: he.content }));
    }
    if (s) {
      const ue = Hg(s, x);
      T.push({
        role: "assistant",
        content: ue
      }), j.push({ role: "assistant", content: ue });
    }
  }
  const L = (/* @__PURE__ */ new Date()).toISOString(), G = await ka.ConnectionManagerRequestService.sendRequest(
    r,
    T,
    A
  ), ee = (/* @__PURE__ */ new Date()).toISOString(), P = s ? Hg(s, x) + G.content : G.content, Y = u_(P, x, {
    onRecovery: (ue) => {
      Ae("warning", `[Character Creator] ${ue}. Open the Debug View for this field to inspect the raw response.`);
    }
  });
  let X;
  if (typeof Y == "string")
    X = Y;
  else if (typeof Y == "object" && Y !== null)
    if ("response" in Y && typeof Y.response == "string")
      X = Y.response;
    else {
      const ue = Object.values(Y)[0];
      X = ue ? String(ue) : "";
    }
  else
    X = "";
  const fe = an.getSettings().showDebugView ? {
    targetField: h,
    outputFormat: x,
    continueFrom: s,
    messages: j,
    rawResponse: G.content,
    parsedContent: X,
    startedAt: L,
    finishedAt: ee,
    profileId: r
  } : null;
  return { content: X, debug: fe };
}
const dr = "SillyTavern-Character-Creator", Ay = "0.4.1", G_ = "F_2.1", V_ = {
  EXTENSION: "charCreator"
}, Oo = [
  "stDescription",
  "charDefinitions",
  "lorebookDefinitions",
  "xmlFormat",
  "jsonFormat",
  "noneFormat",
  "worldInfoCharDefinition",
  "existingFieldDefinitions",
  "taskDescription",
  "outputFormatInstructions",
  "personaDescription"
], rt = {
  stDescription: Qf,
  charDefinitions: Zf,
  lorebookDefinitions: oy,
  xmlFormat: lS,
  jsonFormat: sS,
  noneFormat: oS,
  worldInfoCharDefinition: uy,
  existingFieldDefinitions: jl,
  taskDescription: fh,
  outputFormatInstructions: ch,
  personaDescription: uS
}, Ty = {
  version: Ay,
  formatVersion: G_,
  profileId: "",
  maxContextType: "profile",
  maxContextValue: 16384,
  maxResponseToken: 1024,
  fieldMaxResponseTokens: {},
  useWorldInfoActivationScan: !1,
  outputFormat: "xml",
  contextToSend: {
    stDescription: !0,
    messages: {
      type: "last",
      first: 10,
      last: 10,
      range: {
        start: 0,
        end: 10
      }
    },
    charCard: !0,
    existingFields: !0,
    worldInfo: !0,
    persona: !0,
    dontSendOtherGreetings: !1
  },
  // Updated prompts structure
  prompts: {
    stDescription: {
      content: rt.stDescription,
      isDefault: !0,
      label: "ST/Char Card Description"
    },
    charDefinitions: {
      content: rt.charDefinitions,
      isDefault: !0,
      label: "Character Definition Template"
    },
    lorebookDefinitions: {
      content: rt.lorebookDefinitions,
      isDefault: !0,
      label: "Lorebook Definition Template"
    },
    xmlFormat: {
      content: rt.xmlFormat,
      isDefault: !0,
      label: "XML Format Description"
    },
    jsonFormat: {
      content: rt.jsonFormat,
      isDefault: !0,
      label: "JSON Format Description"
    },
    noneFormat: {
      content: rt.noneFormat,
      isDefault: !0,
      label: "Plain Text Format Description"
    },
    worldInfoCharDefinition: {
      content: rt.worldInfoCharDefinition,
      isDefault: !0,
      label: "World Info Character Definition Template"
    },
    existingFieldDefinitions: {
      content: jl,
      isDefault: !0,
      label: "Existing Fields Definition Template"
    },
    taskDescription: {
      content: fh,
      isDefault: !0,
      label: "Task Description Template"
    },
    outputFormatInstructions: {
      content: ch,
      isDefault: !0,
      label: "Output Format Instructions"
    },
    personaDescription: {
      content: rt.personaDescription,
      isDefault: !0,
      label: "User Persona Description Template"
    }
  },
  // Generic Prompt Presets
  promptPreset: "default",
  promptPresets: {
    default: {
      content: "Generate the requested field for this character card. Stay consistent with any existing fields already filled in — characters, relationships, tone, and setting should match. Use the provided context (chat history, persona, lorebook, selected characters) to ground the result. If a field-specific prompt is set below, treat it as the authoritative constraint for this generation."
    }
  },
  mainContextTemplatePreset: "default",
  mainContextTemplatePresets: {
    default: {
      prompts: [
        {
          enabled: !0,
          promptName: "stDescription",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "charDefinitions",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "lorebookDefinitions",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "existingFieldDefinitions",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "personaDescription",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "chatHistory",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "outputFormatInstructions",
          role: "system"
        },
        {
          enabled: !0,
          promptName: "taskDescription",
          role: "user"
        }
      ]
    }
  },
  showDebugView: !1,
  // World Info
  showSaveAsWorldInfoEntry: {
    show: !1
  }
};
function $f(r) {
  const l = r.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let s = !1;
  return l.map((u, c) => {
    const b = u.replace(/^\d+/, "");
    if (b) {
      const m = s ? `${b[0].toUpperCase()}${b.slice(1).toLowerCase()}` : b.toLowerCase();
      return s || (s = !0), m;
    }
    return "";
  }).join("");
}
const an = new M2(V_.EXTENSION, Ty);
async function Y_() {
  return new Promise((r, a) => {
    an.initializeSettings({
      strategy: [
        {
          from: "*",
          to: "F_1.4",
          action(l) {
            return {
              profileId: l?.profileId ?? "",
              maxContextType: l?.maxContextType ?? "profile",
              maxContextValue: l?.maxContextValue ?? 16384,
              maxResponseToken: l?.maxResponseToken ?? 1024,
              outputFormat: l?.outputFormat ?? "xml",
              contextToSend: {
                ...l?.contextToSend,
                persona: !0
              },
              // Updated prompts structure
              prompts: {
                stDescription: {
                  content: rt.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: rt.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                lorebookDefinitions: {
                  content: rt.lorebookDefinitions,
                  isDefault: !0,
                  label: "Lorebook Definition Template"
                },
                xmlFormat: {
                  content: rt.xmlFormat,
                  isDefault: !0,
                  label: "XML Format Description"
                },
                jsonFormat: {
                  content: rt.jsonFormat,
                  isDefault: !0,
                  label: "JSON Format Description"
                },
                noneFormat: {
                  content: rt.noneFormat,
                  isDefault: !0,
                  label: "Plain Text Format Description"
                },
                worldInfoCharDefinition: {
                  content: rt.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: jl,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                },
                taskDescription: {
                  content: fh,
                  isDefault: !0,
                  label: "Task Description Template"
                },
                outputFormatInstructions: {
                  content: ch,
                  isDefault: !0,
                  label: "Output Format Instructions"
                },
                personaDescription: {
                  content: rt.personaDescription,
                  isDefault: !0,
                  label: "User Persona Description Template"
                }
              },
              // Generic Prompt Presets
              promptPreset: l?.default ?? "default",
              promptPresets: l?.promptPresets ?? {
                default: {
                  content: "Generate the requested field for this character card. Stay consistent with any existing fields already filled in — characters, relationships, tone, and setting should match. Use the provided context (chat history, persona, lorebook, selected characters) to ground the result. If a field-specific prompt is set below, treat it as the authoritative constraint for this generation."
                }
              },
              mainContextTemplatePreset: "default",
              mainContextTemplatePresets: {
                default: {
                  prompts: [
                    {
                      enabled: !0,
                      promptName: "chatHistory",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "stDescription",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "charDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "lorebookDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "existingFieldDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "personaDescription",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "outputFormatInstructions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "taskDescription",
                      role: "user"
                    }
                  ]
                }
              },
              // World Info
              showSaveAsWorldInfoEntry: l?.showSaveAsWorldInfoEntry ?? {
                show: l?.showSaveAsWorldInfoEntry.show ?? !1
              }
            };
          }
        },
        {
          from: "F_1.4",
          to: "F_1.5",
          action(l) {
            return {
              ...l,
              // Update persona
              prompts: {
                ...l?.prompts,
                personaDescription: {
                  content: rt.personaDescription,
                  isDefault: !0,
                  label: "User Persona Description Template"
                }
              },
              // Reset default main context
              mainContextTemplatePresets: {
                ...l?.mainContextTemplatePresets,
                default: {
                  prompts: [
                    {
                      enabled: !0,
                      promptName: "stDescription",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "charDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "lorebookDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "existingFieldDefinitions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "personaDescription",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "chatHistory",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "outputFormatInstructions",
                      role: "system"
                    },
                    {
                      enabled: !0,
                      promptName: "taskDescription",
                      role: "user"
                    }
                  ]
                }
              }
            };
          }
        },
        {
          from: "F_1.5",
          to: "F_1.6",
          async action(l) {
            return await Ae("info", `[${dr}] Added Alternate Greetings.`), {
              ...l,
              prompts: {
                ...l?.prompts,
                stDescription: {
                  content: rt.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: rt.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                worldInfoCharDefinition: {
                  content: rt.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: jl,
                  isDefault: !0,
                  label: "Existing Fields Definition Template"
                }
              }
            };
          }
        },
        {
          from: "F_1.6",
          to: "F_1.7",
          async action(l) {
            const s = {
              ...l
            };
            return l.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Qf), s;
          }
        },
        {
          from: "F_1.7",
          to: "F_1.8",
          action(l) {
            const s = {
              ...l
            };
            return l.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = Zf), l.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = oy), l.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = jl), s;
          }
        },
        {
          from: "F_1.8",
          to: "F_1.9",
          action(l) {
            const s = {
              ...l
            };
            return l.prompts.stDescription.isDefault && (s.prompts.stDescription.content = Qf), s;
          }
        },
        {
          from: "F_1.9",
          to: "F_1.10",
          action(l) {
            const s = {
              ...l
            };
            return l.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = Zf), l.prompts.worldInfoCharDefinition.isDefault && (s.prompts.worldInfoCharDefinition.content = uy), s;
          }
        },
        {
          from: "F_1.10",
          to: "F_2.0",
          action(l) {
            const s = { ...l }, u = s.prompts ?? {};
            return delete s.defaultPromptEngineeringMode, delete u.reviseJsonPrompt, delete u.reviseXmlPrompt, delete u.reviseTaskDescription, s.prompts = u, s.showDebugView = !1, s;
          }
        },
        {
          from: "F_2.0",
          to: "F_2.1",
          action(l) {
            const s = { ...l }, u = [
              "stDescription",
              "charDefinitions",
              "lorebookDefinitions",
              "existingFieldDefinitions",
              "personaDescription",
              "chatHistory",
              "outputFormatInstructions",
              "taskDescription"
            ], b = (s.mainContextTemplatePresets?.default ?? { prompts: [] }).prompts ?? [], m = new Map(b.map((p) => [p.promptName, p])), d = u.map((p) => {
              const v = m.get(p);
              return v ? (m.delete(p), v) : {
                enabled: !0,
                promptName: p,
                role: p === "taskDescription" ? "user" : "system"
              };
            });
            for (const p of m.values())
              d.push(p);
            return s.mainContextTemplatePresets = {
              ...s.mainContextTemplatePresets,
              default: { prompts: d }
            }, s.fieldMaxResponseTokens === void 0 && (s.fieldMaxResponseTokens = {}), s.useWorldInfoActivationScan === void 0 && (s.useWorldInfoActivationScan = !1), s;
          }
        }
      ]
    }).then((l) => {
      r();
    }).catch((l) => {
      console.error(`[${dr}] Error initializing settings:`, l), Ae("error", `[${dr}] Failed to initialize settings: ${l.message}`), ka.Popup.show.confirm(
        `[${dr}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s && (an.resetSettings(), Ae("success", `[${dr}] Settings reset. Reloading may be required.`), r());
      });
    });
  });
}
const Re = ({ children: r, className: a, overrideDefaults: l = !1, ...s }) => {
  const u = ne.useMemo(() => {
    const c = [];
    return l || c.push("menu_button", "interactable"), c.push(a), c.filter(Boolean).join(" ");
  }, [l, a]);
  return /* @__PURE__ */ N.jsx("button", { className: u, ...s, children: r });
}, F_ = ({ label: r, className: a, overrideDefaults: l = !1, type: s = "text", ...u }) => {
  const c = ne.useMemo(() => {
    const b = [];
    return l || (s === "text" || s === "number" || s === "password" || s === "email" || s === "search") && b.push("text_pole"), b.push(a), b.filter(Boolean).join(" ");
  }, [l, a, s]);
  if (s === "checkbox") {
    const b = l ? a : `checkbox_label ${a ?? ""}`.trim();
    return /* @__PURE__ */ N.jsxs("label", { className: b, children: [
      /* @__PURE__ */ N.jsx("input", { type: "checkbox", ...u }),
      r && /* @__PURE__ */ N.jsx("span", { children: r })
    ] });
  }
  return /* @__PURE__ */ N.jsx("input", { type: s, className: c, ...u });
}, Yo = ({ children: r, className: a, overrideDefaults: l = !1, ...s }) => {
  const u = ne.useMemo(() => {
    const c = [];
    return l || c.push("text_pole"), c.push(a), c.filter(Boolean).join(" ");
  }, [l, a]);
  return /* @__PURE__ */ N.jsx("select", { className: u, ...s, children: r });
}, wy = ({ children: r, className: a, overrideDefaults: l = !1, ...s }) => {
  const u = ne.useMemo(() => {
    const c = [];
    return l || c.push("text_pole", "textarea_compact"), c.push(a), c.filter(Boolean).join(" ");
  }, [l, a]);
  return /* @__PURE__ */ N.jsx("textarea", { className: u, ...s, children: r });
};
var X_ = zv(), Ln = /* @__PURE__ */ ((r) => (r[r.TEXT = 1] = "TEXT", r[r.CONFIRM = 2] = "CONFIRM", r[r.INPUT = 3] = "INPUT", r[r.DISPLAY = 4] = "DISPLAY", r))(Ln || {}), ja = /* @__PURE__ */ ((r) => (r[r.AFFIRMATIVE = 1] = "AFFIRMATIVE", r[r.NEGATIVE = 0] = "NEGATIVE", r[r.CANCELLED = null] = "CANCELLED", r))(ja || {});
const Q_ = SillyTavern.getContext(), eh = ({
  content: r,
  type: a,
  inputValue: l = "",
  options: s = {},
  preventEscape: u = !1,
  onComplete: c
}) => {
  var b;
  const m = ne.useRef(null), d = ne.useRef(null), [p, v] = ne.useState(!1), [S, g] = ne.useState(null), y = ne.useRef(Q_.uuidv4()), h = ne.useRef({
    id: y.current,
    type: a,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  ne.useEffect(() => {
    const A = m.current;
    if (!A) return;
    const D = (E) => {
      E.preventDefault(), u || x(ja.CANCELLED);
    };
    return A.addEventListener("cancel", D), h.current.dlg = A, h.current.mainInput = d.current, ri.util.popups.push(h.current), A.showModal || (A.classList.add("poly_dialog"), lg.registerDialog(A), new ResizeObserver((E) => {
      for (const T of E)
        lg.reposition(T.target);
    }).observe(A)), A.showModal(), sf(), () => {
      ig(ri.util.popups, h.current), sf(), A.removeEventListener("cancel", D);
    };
  }, []);
  const x = async (A) => {
    var D, E;
    let T = A;
    if (a === Ln.INPUT && (A >= ja.AFFIRMATIVE ? T = (D = d.current) == null ? void 0 : D.value : A === ja.NEGATIVE ? T = !1 : A === ja.CANCELLED ? T = null : T = !1), (E = s.customInputs) != null && E.length) {
      const L = new Map(
        s.customInputs.map((G) => {
          var ee;
          const P = (ee = m.current) == null ? void 0 : ee.querySelector(`#${G.id}`);
          return [P.id, P.checked];
        })
      );
      h.current.inputResults = L;
    }
    if (h.current.result = A, h.current.value = T, s.onClosing && !await s.onClosing(h.current)) {
      v(!0), h.current.value = void 0, h.current.result = void 0, h.current.inputResults = void 0;
      return;
    }
    v(!1), ri.util.lastResult = {
      value: T,
      result: A,
      inputResults: h.current.inputResults
    };
    const j = m.current;
    j && (j.setAttribute("closing", ""), sf(), p2(j, async () => {
      var L;
      if (j.close(), s.onClose && await s.onClose(h.current), ig(ri.util.popups, h.current), ri.util.popups.length > 0) {
        const G = (L = document.activeElement) == null ? void 0 : L.closest(".popup"), ee = G?.getAttribute("data-id"), P = ri.util.popups.find((Y) => Y.id === ee);
        P && P.lastFocus && P.lastFocus.focus();
      }
      c(T);
    }));
  }, C = (A) => {
    A.target instanceof HTMLElement && A.target !== m.current && (g(A.target), h.current.lastFocus = A.target);
  }, O = async (A) => {
  };
  return X_.createPortal(
    /* @__PURE__ */ N.jsx(
      "dialog",
      {
        ref: m,
        className: (() => {
          const A = ["popup"];
          return s.wide && A.push("wide_dialogue_popup"), s.wider && A.push("wider_dialogue_popup"), s.large && A.push("large_dialogue_popup"), s.transparent && A.push("transparent_dialogue_popup"), s.allowHorizontalScrolling && A.push("horizontal_scrolling_dialogue_popup"), s.allowVerticalScrolling && A.push("vertical_scrolling_dialogue_popup"), s.animation && A.push(`popup--animation-${s.animation}`), A.join(" ");
        })(),
        "data-id": y.current,
        onKeyDown: O,
        onFocus: C,
        children: /* @__PURE__ */ N.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ N.jsx("div", { className: "popup-content", children: r }),
          a === Ln.INPUT && /* @__PURE__ */ N.jsx(
            "textarea",
            {
              ref: d,
              className: "popup-input text_pole result-control auto-select",
              rows: s.rows ?? 1,
              defaultValue: l,
              "data-result": "1",
              "data-result-event": "submit"
            }
          ),
          s.customInputs && /* @__PURE__ */ N.jsx("div", { className: "popup-inputs", children: s.customInputs.map((A) => /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: A.id, children: [
            /* @__PURE__ */ N.jsx("input", { type: "checkbox", id: A.id, defaultChecked: A.defaultState }),
            /* @__PURE__ */ N.jsx("span", { "data-i18n": A.label, children: A.label }),
            A.tooltip && /* @__PURE__ */ N.jsx(
              "div",
              {
                className: "fa-solid fa-circle-info opacity50p",
                title: A.tooltip,
                "data-i18n": `[title]${A.tooltip}`
              }
            )
          ] }, A.id)) }),
          a !== Ln.DISPLAY && /* @__PURE__ */ N.jsxs("div", { className: "popup-controls", children: [
            (b = s.customButtons) == null ? void 0 : b.map((A, D) => {
              const E = typeof A == "string" ? { text: A, result: D + 2 } : A;
              return /* @__PURE__ */ N.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${E.classes ?? ""}`,
                  "data-result": E.result,
                  onClick: () => {
                    var T;
                    (T = E.action) == null || T.call(E), x(E.result ?? D + 2);
                  },
                  "data-i18n": E.text,
                  children: E.text
                },
                D
              );
            }),
            a !== Ln.DISPLAY && s.okButton !== !1 && /* @__PURE__ */ N.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => x(ja.AFFIRMATIVE),
                "data-result": "1",
                children: typeof s.okButton == "string" ? s.okButton : "OK"
              }
            ),
            a !== Ln.DISPLAY && s.cancelButton !== !1 && /* @__PURE__ */ N.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => x(ja.NEGATIVE),
                "data-result": "0",
                children: typeof s.cancelButton == "string" ? s.cancelButton : "Cancel"
              }
            )
          ] }),
          a === Ln.DISPLAY && /* @__PURE__ */ N.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => x(ja.CANCELLED),
              "data-result": "0",
              title: "Close popup",
              "data-i18n": "[title]Close popup"
            }
          )
        ] })
      }
    ),
    document.body
  );
}, El = (r, a, l) => {
  if (!r || !r.api)
    return !1;
  const s = l[r.api];
  if (!s || !Object.hasOwn(a, s.selected))
    return !1;
  switch (s.selected) {
    case "openai":
      return !!s.source;
    case "textgenerationwebui":
      return !!s.type;
  }
  return !1;
}, ta = SillyTavern.getContext(), Z_ = ({
  initialSelectedProfileId: r,
  allowedTypes: a = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: l = "Select a Connection Profile",
  onChange: s,
  onCreate: u,
  onUpdate: c,
  onDelete: b
}) => {
  const [m, d] = ne.useState(r ?? ""), [p, v] = ne.useState(Date.now()), { isEnabled: S, profiles: g, connectApiMap: y } = ne.useMemo(() => {
    var C, O;
    return (C = ta.extensionSettings.disabledExtensions) != null && C.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((O = ta.extensionSettings.connectionManager) == null ? void 0 : O.profiles) ?? [],
      connectApiMap: ta.CONNECT_API_MAP
    };
  }, [p]);
  ne.useEffect(() => {
    if (!S) return;
    const C = (D) => {
      El(D, a, y) && (v(Date.now()), u?.(D));
    }, O = (D, E) => {
      const T = El(D, a, y), j = El(E, a, y);
      (T || j) && v(Date.now()), c?.(D, E), m === D.id && !j && (d(""), s?.(void 0));
    }, A = (D) => {
      El(D, a, y) && (v(Date.now()), b?.(D), m === D.id && (d(""), s?.(void 0)));
    };
    return ta.eventSource.on("CONNECTION_PROFILE_CREATED", C), ta.eventSource.on("CONNECTION_PROFILE_UPDATED", O), ta.eventSource.on("CONNECTION_PROFILE_DELETED", A), () => {
      ta.eventSource.removeListener("CONNECTION_PROFILE_CREATED", C), ta.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", O), ta.eventSource.removeListener("CONNECTION_PROFILE_DELETED", A);
    };
  }, [S, m, a, y, s, u, c, b]);
  const h = ne.useMemo(() => {
    if (!S) return [];
    const C = g.filter((A) => El(A, a, y)), O = {};
    for (const [A, D] of Object.entries(a))
      O[A] = { label: D, profiles: [] };
    for (const A of C) {
      const D = y[A.api];
      O[D.selected] && O[D.selected].profiles.push(A);
    }
    for (const A of Object.values(O))
      A.profiles.sort((D, E) => (D.name ?? "").localeCompare(E.name ?? ""));
    return Object.values(O).filter((A) => A.profiles.length > 0);
  }, [S, g, a, y]), x = ne.useCallback(
    (C) => {
      const O = C.target.value;
      d(O);
      const A = g.find((D) => D.id === O);
      s?.(A);
    },
    [g, s]
  );
  return S ? /* @__PURE__ */ N.jsxs(Yo, { value: m, onChange: x, children: [
    /* @__PURE__ */ N.jsx("option", { value: "", children: l }),
    h.map((C) => /* @__PURE__ */ N.jsx("optgroup", { label: C.label, children: C.profiles.map((O) => /* @__PURE__ */ N.jsx("option", { value: O.id, children: O.name }, O.id)) }, C.label))
  ] }) : /* @__PURE__ */ N.jsx(Yo, { disabled: !0, value: "", children: /* @__PURE__ */ N.jsx("option", { children: "Connection Manager disabled" }) });
}, K_ = zo.memo(
  ({ item: r, showToggleButton: a, showDeleteButton: l, showSelectInput: s, onToggle: u, onDelete: c, onSelectChange: b }) => {
    const {
      id: m,
      label: d,
      enabled: p,
      canDelete: v = !0,
      canToggle: S = !0,
      showSelect: g = !0,
      canSelect: y = !0,
      selectOptions: h = [],
      selectValue: x
    } = r, C = {
      display: "flex",
      alignItems: "center",
      padding: "8px 12px",
      border: "1px solid var(--SmartThemeBorderColor, #ccc)",
      color: "var(--SmartThemeBodyColor, #333)",
      marginBottom: "2px",
      opacity: a && !p ? 0.6 : 1
    }, O = { cursor: "pointer", flexShrink: 0 }, A = { display: "inline-block", flexShrink: 0, marginRight: "10px" };
    return /* @__PURE__ */ N.jsxs("li", { className: "sortable-list-item", style: C, "data-id": m, children: [
      /* @__PURE__ */ N.jsx(
        "span",
        {
          className: "drag-handle fas fa-bars",
          style: { cursor: "grab", marginRight: "10px", color: "var(--SmartThemeBodyColor, #555)", flexShrink: 0 }
        }
      ),
      /* @__PURE__ */ N.jsx(
        "span",
        {
          className: "item-label",
          style: {
            flexGrow: 1,
            marginRight: "10px",
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap"
          },
          children: d
        }
      ),
      s && g && y && /* @__PURE__ */ N.jsx(
        Yo,
        {
          value: x,
          onChange: (D) => b(m, D.target.value),
          disabled: !p,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: h.length === 0 ? /* @__PURE__ */ N.jsx("option", { disabled: !0, children: "--" }) : h.map((D) => /* @__PURE__ */ N.jsx("option", { value: D.value, children: D.label }, D.value))
        }
      ),
      s && (!g || !y) && /* @__PURE__ */ N.jsx("span", { style: A }),
      a && S && /* @__PURE__ */ N.jsx(
        Re,
        {
          overrideDefaults: !0,
          className: `toggle-button fas ${p ? "fa-toggle-on" : "fa-toggle-off"}`,
          style: {
            ...O,
            marginRight: "10px",
            fontSize: "1.2em",
            color: p ? "var(--success-color, #4CAF50)" : "var(--SmartThemeBodyColor, #555)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => u(m)
        }
      ),
      a && !S && /* @__PURE__ */ N.jsx("span", { style: A }),
      l && v && /* @__PURE__ */ N.jsx(
        Re,
        {
          overrideDefaults: !0,
          className: "delete-button fas fa-trash-can",
          style: {
            ...O,
            color: "var(--error-color, #f44336)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => c(m)
        }
      ),
      l && !v && /* @__PURE__ */ N.jsx("span", { style: { ...A, marginRight: 0 } })
    ] });
  }
), J_ = ({
  items: r,
  onItemsChange: a,
  showToggleButton: l = !1,
  showDeleteButton: s = !1,
  showSelectInput: u = !1,
  sortableJsOptions: c = {}
}) => {
  const b = ne.useRef(null), m = ne.useRef(null);
  ne.useEffect(() => (b.current && (m.current = xe.create(b.current, {
    handle: ".drag-handle",
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    filter: "select, button, .toggle-button, .delete-button",
    // Prevent drag on controls
    preventOnFilter: !1,
    ...c,
    onEnd: (S) => {
      const { oldIndex: g, newIndex: y } = S;
      if (g === void 0 || y === void 0 || g === y)
        return;
      const h = Array.from(r), [x] = h.splice(g, 1);
      h.splice(y, 0, x), a(h);
    }
  })), () => {
    var S;
    (S = m.current) == null || S.destroy(), m.current = null;
  }), [r, a, c]);
  const d = (S) => {
    a(r.map((g) => g.id === S ? { ...g, enabled: !g.enabled } : g));
  }, p = (S) => {
    a(r.filter((g) => g.id !== S));
  }, v = (S, g) => {
    a(r.map((y) => y.id === S ? { ...y, selectValue: g } : y));
  };
  return /* @__PURE__ */ N.jsx("ul", { ref: b, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: r.map((S) => /* @__PURE__ */ N.jsx(
    K_,
    {
      item: S,
      showToggleButton: l,
      showDeleteButton: s,
      showSelectInput: u,
      onToggle: d,
      onDelete: p,
      onSelectChange: v
    },
    S.id
  )) });
}, Do = ({
  items: r,
  value: a,
  onChange: l,
  placeholder: s = "Select items...",
  closeOnSelect: u = !1,
  multiple: c = !0,
  disabled: b = !1,
  onBeforeSelection: m,
  enableSearch: d = !1,
  searchPlaceholder: p = "Search...",
  searchNoResultsText: v = "No results found",
  searchFuseOptions: S,
  inputClasses: g,
  containerClasses: y
}) => {
  const [h, x] = ne.useState(!1), [C, O] = ne.useState(""), A = ne.useRef(null);
  ne.useEffect(() => {
    const L = (G) => {
      A.current && !A.current.contains(G.target) && x(!1);
    };
    return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
  }, []), ne.useEffect(() => {
    h || O("");
  }, [h]);
  const D = ne.useMemo(() => {
    if (!d) return null;
    const L = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...S
    };
    return new mi(r, L);
  }, [r, d, S]), E = ne.useMemo(() => !d || !C.trim() || !D ? r : D.search(C.trim()).map((L) => L.item), [r, C, d, D]), T = async (L) => {
    let G;
    c ? G = a.includes(L) ? a.filter((ee) => ee !== L) : [...a, L] : G = a.includes(L) ? [] : [L], !(m && !await Promise.resolve(m(a, G))) && (l(G), u && x(!1));
  }, j = ne.useMemo(() => {
    var L;
    return a.length === 0 ? s : a.length === 1 ? ((L = r.find((G) => G.value === a[0])) == null ? void 0 : L.label) ?? a[0] : `${a.length} items selected`;
  }, [a, r, s]);
  return /* @__PURE__ */ N.jsxs(
    "div",
    {
      ref: A,
      className: `fancy-dropdown-container ${y ?? ""}`,
      style: {
        position: "relative",
        userSelect: "none",
        opacity: b ? 0.6 : 1,
        pointerEvents: b ? "none" : "auto"
      },
      children: [
        /* @__PURE__ */ N.jsxs(
          "div",
          {
            className: "fancy-dropdown-trigger",
            onClick: () => !b && x(!h),
            style: {
              padding: "8px 12px",
              border: "1px solid var(--border-color)",
              backgroundColor: "var(--bg-color)",
              color: "var(--text-color)",
              borderRadius: "4px",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between"
            },
            children: [
              /* @__PURE__ */ N.jsx("span", { className: "fancy-dropdown-trigger-text", children: j }),
              /* @__PURE__ */ N.jsx("i", { className: `fas ${h ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        h && /* @__PURE__ */ N.jsxs(
          "div",
          {
            className: "fancy-dropdown-list",
            style: {
              position: "absolute",
              top: "100%",
              left: "0",
              right: "0",
              maxHeight: "300px",
              zIndex: 1050,
              border: "1px solid var(--border-color)",
              borderTop: "none",
              backgroundColor: "var(--bg-color-popup, var(--bg-color-secondary, var(--greyCAIbg, var(--grey30))))",
              color: "var(--text-color)",
              borderRadius: "0 0 4px 4px",
              boxShadow: "0 4px 8px var(--black50a)",
              overflowY: "auto",
              display: "flex",
              flexDirection: "column"
            },
            children: [
              d && /* @__PURE__ */ N.jsx(
                "div",
                {
                  style: {
                    padding: "8px",
                    borderBottom: "1px solid var(--border-color)",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "inherit"
                  },
                  children: /* @__PURE__ */ N.jsx(
                    F_,
                    {
                      type: "text",
                      placeholder: p,
                      value: C,
                      onChange: (L) => O(L.target.value),
                      autoFocus: !0,
                      className: g
                    }
                  )
                }
              ),
              /* @__PURE__ */ N.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: E.length > 0 ? E.map((L) => /* @__PURE__ */ N.jsx(
                W_,
                {
                  item: L,
                  isSelected: a.includes(L.value),
                  onClick: T
                },
                L.value
              )) : /* @__PURE__ */ N.jsx(
                "div",
                {
                  style: {
                    padding: "8px 12px",
                    textAlign: "center",
                    color: "var(--text-color-secondary, var(--grey50))"
                  },
                  children: v
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}, W_ = zo.memo(({ item: r, isSelected: a, onClick: l }) => {
  const [s, u] = ne.useState(!1);
  return /* @__PURE__ */ N.jsxs(
    "li",
    {
      onClick: () => l(r.value),
      onMouseEnter: () => u(!0),
      onMouseLeave: () => u(!1),
      style: {
        padding: "8px 12px",
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: a ? "var(--accent-color-bg, var(--link-color))" : s ? "var(--hover-color, var(--white20a))" : "transparent"
      },
      children: [
        /* @__PURE__ */ N.jsx("span", { children: r.label }),
        a && /* @__PURE__ */ N.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
      ]
    }
  );
}), Rf = SillyTavern.getContext(), Fo = ({
  value: r,
  items: a,
  readOnlyValues: l = [],
  label: s,
  onChange: u,
  onItemsChange: c,
  enableCreate: b = !1,
  enableRename: m = !1,
  enableDelete: d = !1,
  onCreate: p,
  onRename: v,
  onDelete: S,
  buttons: g
}) => {
  const y = ne.useMemo(() => a.find((A) => A.value === r), [a, r]), h = ne.useCallback((A) => A ? l.includes(A) : !1, [l]), x = async () => {
    const A = await Rf.Popup.show.input(
      `Create a new ${s}`,
      `Please enter a name for the new ${s}:`,
      ""
    );
    if (!A || A.trim() === "") return;
    const D = A.trim();
    if (a.some((T) => T.value === D)) {
      await Ae("warning", `A ${s} with this name already exists.`);
      return;
    }
    let E = { value: D, label: D };
    if (p) {
      const T = await Promise.resolve(p(D));
      if (!T.confirmed) return;
      T.value && (typeof T.value == "string" ? E = { value: T.value, label: T.value } : E = T.value);
    }
    c([...a, E]), u(E.value, r);
  }, C = async () => {
    if (!y) {
      await Ae("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (h(y.value)) {
      await Ae("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const A = await Rf.Popup.show.input(
      `Rename ${s}`,
      `Please enter a new name for "${y.label}":`,
      y.label
    );
    if (!A || A.trim() === "" || A.trim() === y.value) return;
    const D = A.trim();
    if (a.some((j) => j.value === D)) {
      await Ae("warning", `A ${s} with this name already exists.`);
      return;
    }
    let E = { value: D, label: D };
    if (v) {
      const j = await Promise.resolve(v(y.value, D));
      if (!j.confirmed) return;
      j.value && (typeof j.value == "string" ? E = { value: j.value, label: j.value } : E = j.value);
    }
    const T = a.map((j) => j.value === y.value ? E : j);
    c(T), u(E.value, r);
  }, O = async () => {
    var A;
    if (!y) {
      await Ae("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (h(y.value)) {
      await Ae("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await Rf.Popup.show.confirm(
      `Delete ${s}`,
      `Are you sure you want to delete "${y.label}"?`
    ) || S && !await Promise.resolve(S(y.value)))
      return;
    const D = a.findIndex((j) => j.value === y.value), E = a.filter((j) => j.value !== y.value);
    c(E);
    let T;
    if (E.length > 0) {
      const j = Math.min(D, E.length - 1);
      T = (A = E[j]) == null ? void 0 : A.value;
    }
    u(T, r);
  };
  return /* @__PURE__ */ N.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ N.jsx(Yo, { value: r ?? "", onChange: (A) => u(A.target.value, r), children: a.map((A) => /* @__PURE__ */ N.jsx("option", { value: A.value, children: A.label }, A.value)) }),
    b && /* @__PURE__ */ N.jsx(
      Re,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${s}`,
        onClick: x,
        "data-i18n": `[title]Create a new ${s}`
      }
    ),
    m && /* @__PURE__ */ N.jsx(
      Re,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${s}`,
        onClick: C,
        disabled: !y,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    d && /* @__PURE__ */ N.jsx(
      Re,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: O,
        disabled: !y,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    g?.map((A) => /* @__PURE__ */ N.jsx(
      Re,
      {
        className: A.icon,
        title: A.title,
        onClick: A.onClick,
        disabled: A.disabled,
        "data-i18n": A.i18n ? `[title]${A.i18n}` : void 0
      },
      A.key
    ))
  ] });
}, Ny = () => {
  const [, r] = ne.useState(0);
  return ne.useCallback(() => {
    r((l) => l + 1);
  }, []);
}, kf = SillyTavern.getContext(), $_ = () => {
  const r = Ny(), a = an.getSettings(), [l, s] = ne.useState(Oo[0]), u = ne.useCallback(
    (E) => {
      const T = an.getSettings();
      E(T), an.saveSettings(), r();
    },
    [r]
  ), c = ne.useMemo(
    () => Object.keys(a.mainContextTemplatePresets).map((E) => ({ value: E, label: E })),
    [a.mainContextTemplatePresets]
  ), b = ne.useMemo(
    () => Object.entries(a.prompts).map(([E, T]) => ({
      value: E,
      label: `${T.label} (${E})`
    })),
    [a.prompts]
  ), m = ne.useMemo(() => {
    const E = a.mainContextTemplatePresets[a.mainContextTemplatePreset];
    return E ? E.prompts.map((T) => {
      const j = a.prompts[T.promptName], L = j ? `${j.label} (${T.promptName})` : T.promptName;
      return {
        id: T.promptName,
        label: L,
        enabled: T.enabled,
        selectValue: T.role,
        selectOptions: [
          { value: "user", label: "User" },
          { value: "assistant", label: "Assistant" },
          { value: "system", label: "System" }
        ]
      };
    }) : [];
  }, [a.mainContextTemplatePreset, a.mainContextTemplatePresets, a.prompts]), d = (E) => {
    u((T) => {
      T.mainContextTemplatePreset = E ?? "default";
    });
  }, p = (E) => {
    u((T) => {
      const j = {};
      E.forEach((L) => {
        j[L.value] = T.mainContextTemplatePresets[L.value] ?? structuredClone(
          T.mainContextTemplatePresets[T.mainContextTemplatePreset] ?? T.mainContextTemplatePresets.default
        );
      }), T.mainContextTemplatePresets = j;
    });
  }, v = (E) => {
    u((T) => {
      const j = E.map((ee) => ({
        promptName: ee.id,
        enabled: ee.enabled,
        role: ee.selectValue ?? "user"
      })), L = {
        ...T.mainContextTemplatePresets[T.mainContextTemplatePreset],
        prompts: j
      }, G = {
        ...T.mainContextTemplatePresets,
        [T.mainContextTemplatePreset]: L
      };
      T.mainContextTemplatePresets = G;
    });
  }, S = async () => {
    await kf.Popup.show.confirm("Restore default", "Are you sure?") && u((T) => {
      T.mainContextTemplatePresets = {
        ...T.mainContextTemplatePresets,
        default: structuredClone(Ty.mainContextTemplatePresets.default)
      }, T.mainContextTemplatePreset === "default" ? r() : T.mainContextTemplatePreset = "default";
    });
  }, g = (E) => {
    u((T) => {
      const j = E.map((P) => P.value);
      Object.keys(T.prompts).filter((P) => !j.includes(P)).forEach((P) => {
        Object.values(T.mainContextTemplatePresets).forEach((Y) => {
          Y.prompts = Y.prompts.filter((X) => X.promptName !== P);
        });
      });
      const ee = {};
      E.forEach((P) => {
        ee[P.value] = T.prompts[P.value] ?? { content: "", isDefault: !1, label: P.label };
      }), T.prompts = ee;
    });
  }, y = (E) => {
    const T = $f(E);
    return T ? a.prompts[T] ? (Ae("error", `Prompt name already exists: ${T}`), { confirmed: !1 }) : (u((j) => {
      j.prompts = {
        ...j.prompts,
        [T]: { content: j.prompts[l]?.content ?? "", isDefault: !1, label: E }
      };
      const L = Object.fromEntries(
        Object.entries(j.mainContextTemplatePresets).map(([G, ee]) => [
          G,
          {
            ...ee,
            prompts: [...ee.prompts, { enabled: !0, promptName: T, role: "user" }]
          }
        ])
      );
      j.mainContextTemplatePresets = L;
    }), s(T), { confirmed: !0, value: T }) : (Ae("error", `Invalid prompt name: ${E}`), { confirmed: !1 });
  }, h = (E, T) => {
    const j = $f(T);
    return j ? a.prompts[j] ? (Ae("error", `Prompt name already exists: ${j}`), { confirmed: !1 }) : (u((L) => {
      const { [E]: G, ...ee } = L.prompts;
      L.prompts = {
        ...ee,
        [j]: { ...G, label: T }
      };
      const P = Object.fromEntries(
        Object.entries(L.mainContextTemplatePresets).map(([Y, X]) => [
          Y,
          {
            ...X,
            prompts: X.prompts.map((oe) => oe.promptName === E ? { ...oe, promptName: j } : oe)
          }
        ])
      );
      L.mainContextTemplatePresets = P;
    }), s(j), { confirmed: !0, value: j }) : (Ae("error", `Invalid prompt name: ${T}`), { confirmed: !1 });
  }, x = (E) => {
    const T = E.target.value;
    u((j) => {
      const L = j.prompts[l];
      L && (j.prompts = {
        ...j.prompts,
        [l]: {
          ...L,
          // Copy existing properties
          content: T,
          isDefault: Oo.includes(l) ? rt[l] === T : !1
        }
      });
    });
  }, C = async () => {
    const E = a.prompts[l];
    if (!E) return Ae("warning", "No prompt selected.");
    await kf.Popup.show.confirm("Restore Default", `Restore default for "${E.label}"?`) && u((j) => {
      j.prompts = {
        ...j.prompts,
        [l]: {
          ...j.prompts[l],
          content: rt[l]
        }
      };
    });
  }, O = async () => {
    await kf.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (an.resetSettings(), r(), Ae("success", "Settings have been reset."));
  }, A = a.prompts[l], D = Oo.includes(l);
  return /* @__PURE__ */ N.jsxs("div", { className: "charCreator_settings", children: [
    /* @__PURE__ */ N.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ N.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ N.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ N.jsx(
          Re,
          {
            className: "fa-solid fa-undo",
            title: "Restore main context template to default",
            onClick: S
          }
        )
      ] }),
      /* @__PURE__ */ N.jsx(
        Fo,
        {
          label: "Template",
          items: c,
          value: a.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: d,
          onItemsChange: p,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ N.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ N.jsx(
        J_,
        {
          items: m,
          onItemsChange: v,
          showSelectInput: !0,
          showToggleButton: !0
        }
      ) })
    ] }),
    /* @__PURE__ */ N.jsx("hr", { style: { margin: "10px 0" } }),
    /* @__PURE__ */ N.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ N.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ N.jsx("span", { children: "Prompt Templates" }),
        D && /* @__PURE__ */ N.jsx(
          Re,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: C
          }
        )
      ] }),
      /* @__PURE__ */ N.jsx(
        Fo,
        {
          label: "Prompt",
          items: b,
          value: l,
          readOnlyValues: Oo,
          onChange: (E) => s(E ?? ""),
          onItemsChange: g,
          onCreate: y,
          onRename: h,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ N.jsx(
        wy,
        {
          value: A?.content ?? "",
          onChange: x,
          placeholder: "Edit the selected prompt template here...",
          rows: 6,
          style: { marginTop: "5px", width: "100%" }
        }
      )
    ] }),
    /* @__PURE__ */ N.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", style: { marginTop: "15px" }, children: [
      /* @__PURE__ */ N.jsx(
        "input",
        {
          type: "checkbox",
          checked: a.showSaveAsWorldInfoEntry.show,
          onChange: (E) => u((T) => {
            T.showSaveAsWorldInfoEntry.show = E.target.checked;
          })
        }
      ),
      'Show "Save as World Info Entry" option in popup'
    ] }),
    /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ N.jsx(
        "input",
        {
          type: "checkbox",
          checked: a.showDebugView,
          onChange: (E) => u((T) => {
            T.showDebugView = E.target.checked;
          })
        }
      ),
      "Enable per-field debug view (capture last prompt + raw response)"
    ] }),
    /* @__PURE__ */ N.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ N.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ N.jsxs(Re, { className: "danger_button", style: { width: "auto" }, onClick: O, children: [
      /* @__PURE__ */ N.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
}, Oy = "charCreator", Dy = "charCreatorResizeSizes", Ul = () => SillyTavern.libs.localforage, ex = (r) => {
  if (!r)
    return { value: null, recovered: !1 };
  try {
    return { value: JSON.parse(r), recovered: !1 };
  } catch (a) {
    return { value: null, recovered: !0, error: a };
  }
}, My = async (r, a, l) => {
  try {
    const s = await a.getItem(r);
    if (s !== null)
      return { value: s, migrated: !1, recovered: !1 };
    const u = ex(l.getItem(r));
    return u.value === null ? (u.recovered && l.removeItem(r), { value: null, migrated: !1, recovered: u.recovered, error: u.error }) : (await a.setItem(r, u.value), l.removeItem(r), { value: u.value, migrated: !0, recovered: u.recovered });
  } catch (s) {
    return { value: null, migrated: !1, recovered: !0, error: s };
  }
}, Ry = async (r, a, l = Ul()) => {
  try {
    return await l.setItem(r, a), { persisted: !0 };
  } catch (s) {
    return { persisted: !1, error: s };
  }
}, tx = (r = Ul(), a = localStorage) => My(Oy, r, a), nx = (r, a = Ul()) => Ry(Oy, r, a), Nv = (r = Ul(), a = localStorage) => My(Dy, r, a), ax = (r, a = Ul()) => Ry(Dy, r, a), Ov = (r) => {
  const a = ne.useRef(null), [l, s] = ne.useState(null), u = ne.useRef(null), c = ne.useRef(!0);
  ne.useLayoutEffect(() => {
    let m = !1;
    return Nv().then((d) => {
      if (m) return;
      const p = d.value?.[r];
      typeof p == "number" && p > 0 && s(p);
    }).catch(() => {
    }), () => {
      m = !0;
    };
  }, [r]), ne.useLayoutEffect(() => {
    if (l === null) return;
    const m = a.current;
    m && (m.style.height = `${l}px`);
  }, [l]);
  const b = ne.useCallback(
    (m) => {
      u.current && clearTimeout(u.current), u.current = setTimeout(async () => {
        try {
          const p = { ...(await Nv()).value ?? {}, [r]: m };
          await ax(p);
        } catch {
        }
      }, 400);
    },
    [r]
  );
  return ne.useEffect(() => {
    const m = a.current;
    if (!m) return;
    const d = new ResizeObserver((p) => {
      if (c.current) {
        c.current = !1;
        return;
      }
      for (const v of p) {
        const S = v.contentRect.height;
        Number.isFinite(S) && S > 0 && b(Math.round(S));
      }
    });
    return d.observe(m), () => {
      d.disconnect(), u.current && clearTimeout(u.current);
    };
  }, [b]), a;
}, rx = (r) => {
  navigator.clipboard?.writeText(r).catch(() => {
    const a = document.createElement("textarea");
    a.value = r, document.body.appendChild(a), a.select();
    try {
      document.execCommand("copy");
    } catch {
    }
    document.body.removeChild(a);
  });
}, Dv = ({
  fieldId: r,
  label: a,
  value: l,
  prompt: s,
  large: u = !1,
  rows: c = 3,
  promptEnabled: b = !0,
  isDraft: m = !1,
  isGenerating: d = !1,
  isDebug: p = !1,
  primary: v = !1,
  onValueChange: S,
  onPromptChange: g,
  onGenerate: y,
  onContinue: h,
  onClear: x,
  onCompare: C,
  onDelete: O,
  onShowDebug: A
}) => {
  const D = ne.useMemo(() => l.length, [l]), E = !d, T = Ov(`value:${r}`), j = Ov(`prompt:${r}`);
  return /* @__PURE__ */ N.jsxs(
    "div",
    {
      className: `character-field ${m ? "draft-field" : "core-field"} ${v ? "character-field-primary" : ""}`,
      children: [
        /* @__PURE__ */ N.jsxs("div", { className: "character-field-label-row", children: [
          /* @__PURE__ */ N.jsxs("label", { children: [
            v && /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-user crec-primary-icon", "aria-hidden": "true" }),
            a
          ] }),
          d ? /* @__PURE__ */ N.jsxs("span", { className: "character-field-status", children: [
            /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-spinner fa-spin" }),
            " generating…"
          ] }) : /* @__PURE__ */ N.jsxs("span", { className: "character-field-char-count", title: "Character count", children: [
            D,
            " ch"
          ] })
        ] }),
        /* @__PURE__ */ N.jsxs("div", { className: `field-container ${u ? "large-field" : ""}`, children: [
          /* @__PURE__ */ N.jsx(
            "textarea",
            {
              ref: T,
              className: "text_pole crec-field-textarea",
              value: l,
              onChange: (L) => S(r, L.target.value),
              rows: c,
              placeholder: `Enter ${a.toLowerCase()}…`
            }
          ),
          /* @__PURE__ */ N.jsxs("div", { className: "field-actions", children: [
            /* @__PURE__ */ N.jsx(Re, { onClick: () => y(r), disabled: !E, title: "Generate field content", children: d ? /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
            /* @__PURE__ */ N.jsx(Re, { onClick: () => h(r), disabled: !E, title: "Continue from current content", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
            /* @__PURE__ */ N.jsx(Re, { onClick: () => rx(l), disabled: !l, title: "Copy content", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-copy" }) }),
            /* @__PURE__ */ N.jsx(Re, { onClick: () => x(r), disabled: !l, title: "Clear field content", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-eraser" }) }),
            !m && C && /* @__PURE__ */ N.jsx(Re, { onClick: () => C(r), title: "Compare with loaded character", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-code-compare" }) }),
            p && A && /* @__PURE__ */ N.jsx(Re, { onClick: () => A(r), title: "View debug (last prompt + response)", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-bug" }) }),
            m && O && /* @__PURE__ */ N.jsx(Re, { onClick: () => O(r), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-trash-can" }) })
          ] })
        ] }),
        b && /* @__PURE__ */ N.jsxs("div", { className: "field-prompt-container", children: [
          /* @__PURE__ */ N.jsx("div", { className: "field-prompt-label", children: "Field-specific prompt" }),
          /* @__PURE__ */ N.jsx(
            "textarea",
            {
              ref: j,
              className: "text_pole crec-field-textarea crec-field-prompt-textarea",
              value: s,
              onChange: (L) => g(r, L.target.value),
              placeholder: `Enter additional prompt for ${a.toLowerCase()}…`,
              rows: 2
            }
          )
        ] })
      ]
    }
  );
}, ix = SillyTavern.getContext(), lx = (r) => `alternate_greetings_${r + 1}`, sx = ({
  greetings: r,
  onGreetingsChange: a,
  onGenerate: l,
  onContinue: s,
  onCompare: u,
  onShowDebug: c,
  isGenerating: b
}) => {
  const [m, d] = ne.useState(0);
  ne.useEffect(() => {
    m >= r.length && r.length > 0 ? d(r.length - 1) : r.length === 0 && d(0);
  }, [r, m]);
  const p = r[m], v = ne.useMemo(() => p?.value.length ?? 0, [p?.value]), S = () => {
    const h = [...r, { value: "", prompt: "" }];
    a(h), d(h.length - 1);
  }, g = async () => {
    if (r.length === 0) return;
    if (await ix.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const x = r.filter((C, O) => O !== m);
      a(x);
    }
  }, y = (h, x, C) => {
    const O = [...r];
    O[h][x] = C, a(O);
  };
  return /* @__PURE__ */ N.jsxs("div", { className: "character-field alternate-greetings-field", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "character-field-label-row", children: [
      /* @__PURE__ */ N.jsx("label", { children: "Alternate Greetings" }),
      /* @__PURE__ */ N.jsx("span", { className: "character-field-char-count", title: "Character count", children: r.length > 0 ? `${v} ch` : "" })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { className: "crec-greetings-bar", children: [
      /* @__PURE__ */ N.jsx("div", { className: "alternate-greetings-tabs", children: r.map((h, x) => /* @__PURE__ */ N.jsxs(
        Re,
        {
          onClick: () => d(x),
          className: `menu_button ${x === m ? "active" : ""}`,
          children: [
            "Greeting ",
            x + 1
          ]
        },
        x
      )) }),
      /* @__PURE__ */ N.jsxs(Re, { onClick: S, title: "Add a new alternate greeting", children: [
        /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-plus" }),
        " Add"
      ] })
    ] }),
    r.length === 0 ? /* @__PURE__ */ N.jsx("p", { className: "subtle", children: 'No alternate greetings defined. Click "Add" to create one.' }) : /* @__PURE__ */ N.jsxs("div", { className: "field-container crec-greeting-container", children: [
      /* @__PURE__ */ N.jsxs("div", { style: { flexGrow: 1 }, children: [
        /* @__PURE__ */ N.jsx(
          "textarea",
          {
            className: "text_pole crec-field-textarea",
            value: p?.value ?? "",
            onChange: (h) => y(m, "value", h.target.value),
            rows: 8,
            placeholder: "Enter greeting content…"
          }
        ),
        /* @__PURE__ */ N.jsxs("div", { className: "field-prompt-container crec-greeting-prompt", children: [
          /* @__PURE__ */ N.jsx("div", { className: "field-prompt-label", children: "Field-specific prompt" }),
          /* @__PURE__ */ N.jsx(
            "textarea",
            {
              className: "text_pole crec-field-textarea crec-field-prompt-textarea",
              value: p?.prompt ?? "",
              onChange: (h) => y(m, "prompt", h.target.value),
              rows: 2,
              placeholder: "Enter specific prompt for this greeting…"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ N.jsxs("div", { className: "field-actions", children: [
        /* @__PURE__ */ N.jsx(Re, { onClick: () => l(m), disabled: b, title: "Generate greeting", children: b ? /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ N.jsx(Re, { onClick: () => s(m), disabled: b, title: "Continue greeting", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ N.jsx(
          Re,
          {
            onClick: () => y(m, "value", ""),
            disabled: b,
            title: "Clear greeting",
            children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ N.jsx(Re, { onClick: () => u(m), disabled: b, title: "Compare greeting", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        c && /* @__PURE__ */ N.jsx(
          Re,
          {
            onClick: () => c(lx(m)),
            disabled: b,
            title: "View debug (last prompt + response)",
            children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-bug" })
          }
        ),
        /* @__PURE__ */ N.jsx(
          Re,
          {
            onClick: g,
            disabled: b,
            title: "Delete greeting",
            className: "danger_button",
            children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-trash-can" })
          }
        )
      ] })
    ] })
  ] });
};
var Ha = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.diff = function(a, l, s) {
      s === void 0 && (s = {});
      var u;
      typeof s == "function" ? (u = s, s = {}) : "callback" in s && (u = s.callback);
      var c = this.castInput(a, s), b = this.castInput(l, s), m = this.removeEmpty(this.tokenize(c, s)), d = this.removeEmpty(this.tokenize(b, s));
      return this.diffWithOptionsObj(m, d, s, u);
    }, r.prototype.diffWithOptionsObj = function(a, l, s, u) {
      var c = this, b, m = function(E) {
        if (E = c.postProcess(E, s), u) {
          setTimeout(function() {
            u(E);
          }, 0);
          return;
        } else
          return E;
      }, d = l.length, p = a.length, v = 1, S = d + p;
      s.maxEditLength != null && (S = Math.min(S, s.maxEditLength));
      var g = (b = s.timeout) !== null && b !== void 0 ? b : 1 / 0, y = Date.now() + g, h = [{ oldPos: -1, lastComponent: void 0 }], x = this.extractCommon(h[0], l, a, 0, s);
      if (h[0].oldPos + 1 >= p && x + 1 >= d)
        return m(this.buildValues(h[0].lastComponent, l, a));
      var C = -1 / 0, O = 1 / 0, A = function() {
        for (var E = Math.max(C, -v); E <= Math.min(O, v); E += 2) {
          var T = void 0, j = h[E - 1], L = h[E + 1];
          j && (h[E - 1] = void 0);
          var G = !1;
          if (L) {
            var ee = L.oldPos - E;
            G = L && 0 <= ee && ee < d;
          }
          var P = j && j.oldPos + 1 < p;
          if (!G && !P) {
            h[E] = void 0;
            continue;
          }
          if (!P || G && j.oldPos < L.oldPos ? T = c.addToPath(L, !0, !1, 0, s) : T = c.addToPath(j, !1, !0, 1, s), x = c.extractCommon(T, l, a, E, s), T.oldPos + 1 >= p && x + 1 >= d)
            return m(c.buildValues(T.lastComponent, l, a)) || !0;
          h[E] = T, T.oldPos + 1 >= p && (O = Math.min(O, E - 1)), x + 1 >= d && (C = Math.max(C, E + 1));
        }
        v++;
      };
      if (u)
        (function E() {
          setTimeout(function() {
            if (v > S || Date.now() > y)
              return u(void 0);
            A() || E();
          }, 0);
        })();
      else
        for (; v <= S && Date.now() <= y; ) {
          var D = A();
          if (D)
            return D;
        }
    }, r.prototype.addToPath = function(a, l, s, u, c) {
      var b = a.lastComponent;
      return b && !c.oneChangePerToken && b.added === l && b.removed === s ? {
        oldPos: a.oldPos + u,
        lastComponent: { count: b.count + 1, added: l, removed: s, previousComponent: b.previousComponent }
      } : {
        oldPos: a.oldPos + u,
        lastComponent: { count: 1, added: l, removed: s, previousComponent: b }
      };
    }, r.prototype.extractCommon = function(a, l, s, u, c) {
      for (var b = l.length, m = s.length, d = a.oldPos, p = d - u, v = 0; p + 1 < b && d + 1 < m && this.equals(s[d + 1], l[p + 1], c); )
        p++, d++, v++, c.oneChangePerToken && (a.lastComponent = { count: 1, previousComponent: a.lastComponent, added: !1, removed: !1 });
      return v && !c.oneChangePerToken && (a.lastComponent = { count: v, previousComponent: a.lastComponent, added: !1, removed: !1 }), a.oldPos = d, p;
    }, r.prototype.equals = function(a, l, s) {
      return s.comparator ? s.comparator(a, l) : a === l || !!s.ignoreCase && a.toLowerCase() === l.toLowerCase();
    }, r.prototype.removeEmpty = function(a) {
      for (var l = [], s = 0; s < a.length; s++)
        a[s] && l.push(a[s]);
      return l;
    }, r.prototype.castInput = function(a, l) {
      return a;
    }, r.prototype.tokenize = function(a, l) {
      return Array.from(a);
    }, r.prototype.join = function(a) {
      return a.join("");
    }, r.prototype.postProcess = function(a, l) {
      return a;
    }, Object.defineProperty(r.prototype, "useLongestToken", {
      get: function() {
        return !1;
      },
      enumerable: !1,
      configurable: !0
    }), r.prototype.buildValues = function(a, l, s) {
      for (var u = [], c; a; )
        u.push(a), c = a.previousComponent, delete a.previousComponent, a = c;
      u.reverse();
      for (var b = u.length, m = 0, d = 0, p = 0; m < b; m++) {
        var v = u[m];
        if (v.removed)
          v.value = this.join(s.slice(p, p + v.count)), p += v.count;
        else {
          if (!v.added && this.useLongestToken) {
            var S = l.slice(d, d + v.count);
            S = S.map(function(g, y) {
              var h = s[p + y];
              return h.length > g.length ? h : g;
            }), v.value = this.join(S);
          } else
            v.value = this.join(l.slice(d, d + v.count));
          d += v.count, v.added || (p += v.count);
        }
      }
      return u;
    }, r;
  })()
), ox = /* @__PURE__ */ (function() {
  var r = function(a, l) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, u) {
      s.__proto__ = u;
    } || function(s, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (s[c] = u[c]);
    }, r(a, l);
  };
  return function(a, l) {
    if (typeof l != "function" && l !== null)
      throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
    r(a, l);
    function s() {
      this.constructor = a;
    }
    a.prototype = l === null ? Object.create(l) : (s.prototype = l.prototype, new s());
  };
})(), ux = (
  /** @class */
  (function(r) {
    ox(a, r);
    function a() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return a;
  })(Ha)
);
new ux();
function Mv(r, a) {
  var l;
  for (l = 0; l < r.length && l < a.length; l++)
    if (r[l] != a[l])
      return r.slice(0, l);
  return r.slice(0, l);
}
function Rv(r, a) {
  var l;
  if (!r || !a || r[r.length - 1] != a[a.length - 1])
    return "";
  for (l = 0; l < r.length && l < a.length; l++)
    if (r[r.length - (l + 1)] != a[a.length - (l + 1)])
      return r.slice(-l);
  return r.slice(-l);
}
function th(r, a, l) {
  if (r.slice(0, a.length) != a)
    throw Error("string ".concat(JSON.stringify(r), " doesn't start with prefix ").concat(JSON.stringify(a), "; this is a bug"));
  return l + r.slice(a.length);
}
function nh(r, a, l) {
  if (!a)
    return r + l;
  if (r.slice(-a.length) != a)
    throw Error("string ".concat(JSON.stringify(r), " doesn't end with suffix ").concat(JSON.stringify(a), "; this is a bug"));
  return r.slice(0, -a.length) + l;
}
function Cl(r, a) {
  return th(r, a, "");
}
function Mo(r, a) {
  return nh(r, a, "");
}
function kv(r, a) {
  return a.slice(0, cx(r, a));
}
function cx(r, a) {
  var l = 0;
  r.length > a.length && (l = r.length - a.length);
  var s = a.length;
  r.length < a.length && (s = r.length);
  var u = Array(s), c = 0;
  u[0] = 0;
  for (var b = 1; b < s; b++) {
    for (a[b] == a[c] ? u[b] = u[c] : u[b] = c; c > 0 && a[b] != a[c]; )
      c = u[c];
    a[b] == a[c] && c++;
  }
  c = 0;
  for (var m = l; m < r.length; m++) {
    for (; c > 0 && r[m] != a[c]; )
      c = u[c];
    r[m] == a[c] && c++;
  }
  return c;
}
function Al(r) {
  var a;
  for (a = r.length - 1; a >= 0 && r[a].match(/\s/); a--)
    ;
  return r.substring(a + 1);
}
function Ra(r) {
  var a = r.match(/^\s*/);
  return a ? a[0] : "";
}
var ky = /* @__PURE__ */ (function() {
  var r = function(a, l) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, u) {
      s.__proto__ = u;
    } || function(s, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (s[c] = u[c]);
    }, r(a, l);
  };
  return function(a, l) {
    if (typeof l != "function" && l !== null)
      throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
    r(a, l);
    function s() {
      this.constructor = a;
    }
    a.prototype = l === null ? Object.create(l) : (s.prototype = l.prototype, new s());
  };
})(), Xo = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", fx = new RegExp("[".concat(Xo, "]+|\\s+|[^").concat(Xo, "]"), "ug"), hx = (
  /** @class */
  (function(r) {
    ky(a, r);
    function a() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return a.prototype.equals = function(l, s, u) {
      return u.ignoreCase && (l = l.toLowerCase(), s = s.toLowerCase()), l.trim() === s.trim();
    }, a.prototype.tokenize = function(l, s) {
      s === void 0 && (s = {});
      var u;
      if (s.intlSegmenter) {
        var c = s.intlSegmenter;
        if (c.resolvedOptions().granularity != "word")
          throw new Error('The segmenter passed must have a granularity of "word"');
        u = Array.from(c.segment(l), function(d) {
          return d.segment;
        });
      } else
        u = l.match(fx) || [];
      var b = [], m = null;
      return u.forEach(function(d) {
        /\s/.test(d) ? m == null ? b.push(d) : b.push(b.pop() + d) : m != null && /\s/.test(m) ? b[b.length - 1] == m ? b.push(b.pop() + d) : b.push(m + d) : b.push(d), m = d;
      }), b;
    }, a.prototype.join = function(l) {
      return l.map(function(s, u) {
        return u == 0 ? s : s.replace(/^\s+/, "");
      }).join("");
    }, a.prototype.postProcess = function(l, s) {
      if (!l || s.oneChangePerToken)
        return l;
      var u = null, c = null, b = null;
      return l.forEach(function(m) {
        m.added ? c = m : m.removed ? b = m : ((c || b) && jv(u, b, c, m), u = m, c = null, b = null);
      }), (c || b) && jv(u, b, c, null), l;
    }, a;
  })(Ha)
), dx = new hx();
function px(r, a, l) {
  return dx.diff(r, a, l);
}
function jv(r, a, l, s) {
  if (a && l) {
    var u = Ra(a.value), c = Al(a.value), b = Ra(l.value), m = Al(l.value);
    if (r) {
      var d = Mv(u, b);
      r.value = nh(r.value, b, d), a.value = Cl(a.value, d), l.value = Cl(l.value, d);
    }
    if (s) {
      var p = Rv(c, m);
      s.value = th(s.value, m, p), a.value = Mo(a.value, p), l.value = Mo(l.value, p);
    }
  } else if (l) {
    if (r) {
      var v = Ra(l.value);
      l.value = l.value.substring(v.length);
    }
    if (s) {
      var v = Ra(s.value);
      s.value = s.value.substring(v.length);
    }
  } else if (r && s) {
    var S = Ra(s.value), g = Ra(a.value), y = Al(a.value), h = Mv(S, g);
    a.value = Cl(a.value, h);
    var x = Rv(Cl(S, h), y);
    a.value = Mo(a.value, x), s.value = th(s.value, S, x), r.value = nh(r.value, S, S.slice(0, S.length - x.length));
  } else if (s) {
    var C = Ra(s.value), O = Al(a.value), A = kv(O, C);
    a.value = Mo(a.value, A);
  } else if (r) {
    var D = Al(r.value), E = Ra(a.value), A = kv(D, E);
    a.value = Cl(a.value, A);
  }
}
var mx = (
  /** @class */
  (function(r) {
    ky(a, r);
    function a() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return a.prototype.tokenize = function(l) {
      var s = new RegExp("(\\r?\\n)|[".concat(Xo, "]+|[^\\S\\n\\r]+|[^").concat(Xo, "]"), "ug");
      return l.match(s) || [];
    }, a;
  })(Ha)
);
new mx();
var gx = /* @__PURE__ */ (function() {
  var r = function(a, l) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, u) {
      s.__proto__ = u;
    } || function(s, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (s[c] = u[c]);
    }, r(a, l);
  };
  return function(a, l) {
    if (typeof l != "function" && l !== null)
      throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
    r(a, l);
    function s() {
      this.constructor = a;
    }
    a.prototype = l === null ? Object.create(l) : (s.prototype = l.prototype, new s());
  };
})(), vx = (
  /** @class */
  (function(r) {
    gx(a, r);
    function a() {
      var l = r !== null && r.apply(this, arguments) || this;
      return l.tokenize = jy, l;
    }
    return a.prototype.equals = function(l, s, u) {
      return u.ignoreWhitespace ? ((!u.newlineIsToken || !l.includes(`
`)) && (l = l.trim()), (!u.newlineIsToken || !s.includes(`
`)) && (s = s.trim())) : u.ignoreNewlineAtEof && !u.newlineIsToken && (l.endsWith(`
`) && (l = l.slice(0, -1)), s.endsWith(`
`) && (s = s.slice(0, -1))), r.prototype.equals.call(this, l, s, u);
    }, a;
  })(Ha)
);
new vx();
function jy(r, a) {
  a.stripTrailingCr && (r = r.replace(/\r\n/g, `
`));
  var l = [], s = r.split(/(\n|\r\n)/);
  s[s.length - 1] || s.pop();
  for (var u = 0; u < s.length; u++) {
    var c = s[u];
    u % 2 && !a.newlineIsToken ? l[l.length - 1] += c : l.push(c);
  }
  return l;
}
var yx = /* @__PURE__ */ (function() {
  var r = function(a, l) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, u) {
      s.__proto__ = u;
    } || function(s, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (s[c] = u[c]);
    }, r(a, l);
  };
  return function(a, l) {
    if (typeof l != "function" && l !== null)
      throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
    r(a, l);
    function s() {
      this.constructor = a;
    }
    a.prototype = l === null ? Object.create(l) : (s.prototype = l.prototype, new s());
  };
})(), bx = (
  /** @class */
  (function(r) {
    yx(a, r);
    function a() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return a.prototype.tokenize = function(l) {
      return l.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, a;
  })(Ha)
);
new bx();
var Sx = /* @__PURE__ */ (function() {
  var r = function(a, l) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, u) {
      s.__proto__ = u;
    } || function(s, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (s[c] = u[c]);
    }, r(a, l);
  };
  return function(a, l) {
    if (typeof l != "function" && l !== null)
      throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
    r(a, l);
    function s() {
      this.constructor = a;
    }
    a.prototype = l === null ? Object.create(l) : (s.prototype = l.prototype, new s());
  };
})(), _x = (
  /** @class */
  (function(r) {
    Sx(a, r);
    function a() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return a.prototype.tokenize = function(l) {
      return l.split(/([{}:;,]|\s+)/);
    }, a;
  })(Ha)
);
new _x();
var xx = /* @__PURE__ */ (function() {
  var r = function(a, l) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, u) {
      s.__proto__ = u;
    } || function(s, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (s[c] = u[c]);
    }, r(a, l);
  };
  return function(a, l) {
    if (typeof l != "function" && l !== null)
      throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
    r(a, l);
    function s() {
      this.constructor = a;
    }
    a.prototype = l === null ? Object.create(l) : (s.prototype = l.prototype, new s());
  };
})(), Ex = (
  /** @class */
  (function(r) {
    xx(a, r);
    function a() {
      var l = r !== null && r.apply(this, arguments) || this;
      return l.tokenize = jy, l;
    }
    return Object.defineProperty(a.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.castInput = function(l, s) {
      var u = s.undefinedReplacement, c = s.stringifyReplacer, b = c === void 0 ? function(m, d) {
        return typeof d > "u" ? u : d;
      } : c;
      return typeof l == "string" ? l : JSON.stringify(ah(l, null, null, b), null, "  ");
    }, a.prototype.equals = function(l, s, u) {
      return r.prototype.equals.call(this, l.replace(/,([\r\n])/g, "$1"), s.replace(/,([\r\n])/g, "$1"), u);
    }, a;
  })(Ha)
);
new Ex();
function ah(r, a, l, s, u) {
  a = a || [], l = l || [], s && (r = s(u === void 0 ? "" : u, r));
  var c;
  for (c = 0; c < a.length; c += 1)
    if (a[c] === r)
      return l[c];
  var b;
  if (Object.prototype.toString.call(r) === "[object Array]") {
    for (a.push(r), b = new Array(r.length), l.push(b), c = 0; c < r.length; c += 1)
      b[c] = ah(r[c], a, l, s, String(c));
    return a.pop(), l.pop(), b;
  }
  if (r && r.toJSON && (r = r.toJSON()), typeof r == "object" && r !== null) {
    a.push(r), b = {}, l.push(b);
    var m = [], d;
    for (d in r)
      Object.prototype.hasOwnProperty.call(r, d) && m.push(d);
    for (m.sort(), c = 0; c < m.length; c += 1)
      d = m[c], b[d] = ah(r[d], a, l, s, d);
    a.pop(), l.pop();
  } else
    b = r;
  return b;
}
var Cx = /* @__PURE__ */ (function() {
  var r = function(a, l) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, u) {
      s.__proto__ = u;
    } || function(s, u) {
      for (var c in u) Object.prototype.hasOwnProperty.call(u, c) && (s[c] = u[c]);
    }, r(a, l);
  };
  return function(a, l) {
    if (typeof l != "function" && l !== null)
      throw new TypeError("Class extends value " + String(l) + " is not a constructor or null");
    r(a, l);
    function s() {
      this.constructor = a;
    }
    a.prototype = l === null ? Object.create(l) : (s.prototype = l.prototype, new s());
  };
})(), Ax = (
  /** @class */
  (function(r) {
    Cx(a, r);
    function a() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return a.prototype.tokenize = function(l) {
      return l.slice();
    }, a.prototype.join = function(l) {
      return l;
    }, a.prototype.removeEmpty = function(l) {
      return l;
    }, a;
  })(Ha)
);
new Ax();
const Tx = ({ originalContent: r, newContent: a, fieldName: l }) => {
  const s = ne.useMemo(() => {
    const u = px(r, a);
    let c = "", b = "";
    return u.forEach((m) => {
      const p = `<span style="${m.added ? "color: green; background-color: #e6ffed;" : m.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${m.value}</span>`;
      m.added || (c += p), m.removed || (b += p);
    }), { originalHtml: c, newHtml: b };
  }, [r, a]);
  return /* @__PURE__ */ N.jsxs("div", { className: "compare-popup", style: { padding: "10px" }, children: [
    /* @__PURE__ */ N.jsxs("h3", { children: [
      "Compare Changes for: ",
      l
    ] }),
    /* @__PURE__ */ N.jsxs("div", { style: { display: "flex", gap: "1rem", marginTop: "1rem" }, children: [
      /* @__PURE__ */ N.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ N.jsx("h4", { children: "Loaded Character Content" }),
        /* @__PURE__ */ N.jsx(
          "div",
          {
            className: "content",
            style: { maxHeight: "400px", overflowY: "auto" },
            dangerouslySetInnerHTML: { __html: s.originalHtml }
          }
        )
      ] }),
      /* @__PURE__ */ N.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ N.jsx("h4", { children: "Current Content" }),
        /* @__PURE__ */ N.jsx(
          "div",
          {
            className: "content",
            style: { maxHeight: "400px", overflowY: "auto" },
            dangerouslySetInnerHTML: { __html: s.newHtml }
          }
        )
      ] })
    ] })
  ] });
}, Lv = {
  system: "SYSTEM",
  user: "USER",
  assistant: "ASSISTANT"
}, jf = (r) => r <= 0 ? "" : r.toLocaleString();
function Lf(r) {
  return Math.max(0, Math.ceil(r.length / 4));
}
function Bf(r) {
  navigator.clipboard?.writeText(r).catch(() => {
    const a = document.createElement("textarea");
    a.value = r, document.body.appendChild(a), a.select();
    try {
      document.execCommand("copy");
    } catch {
    }
    document.body.removeChild(a);
  });
}
const wx = ({ capture: r }) => {
  const [a, l] = ne.useState("prompt"), [s, u] = ne.useState({}), c = ne.useMemo(
    () => Lf(r.messages.reduce((g, y) => g + y.content, "")),
    [r.messages]
  ), b = ne.useMemo(() => Lf(r.rawResponse), [r.rawResponse]), m = ne.useMemo(() => {
    const g = new Date(r.startedAt).getTime(), y = new Date(r.finishedAt).getTime();
    return Math.max(0, y - g);
  }, [r.startedAt, r.finishedAt]), d = () => {
    Bf(JSON.stringify(r.messages, null, 2));
  }, p = () => {
    const g = r.messages.map((y) => `=== ${Lv[y.role] || y.role.toUpperCase()} ===
${y.content}`).join(`

`);
    Bf(g);
  }, v = () => {
    Bf(r.rawResponse);
  }, S = (g) => u((y) => ({ ...y, [g]: !y[g] }));
  return /* @__PURE__ */ N.jsxs("div", { className: "crec-debug", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "crec-debug-header", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "crec-debug-meta", children: [
        /* @__PURE__ */ N.jsxs("span", { className: "crec-debug-meta-item", title: "Target field", children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-bullseye" }),
          " ",
          r.targetField
        ] }),
        /* @__PURE__ */ N.jsxs("span", { className: "crec-debug-meta-item", title: "Output format", children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-code" }),
          " ",
          r.outputFormat
        ] }),
        r.continueFrom && /* @__PURE__ */ N.jsxs("span", { className: "crec-debug-meta-item", title: "Continue from", children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-arrow-right" }),
          " continue"
        ] }),
        /* @__PURE__ */ N.jsxs("span", { className: "crec-debug-meta-item", title: "Input tokens (~chars/4)", children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-sign-in-alt" }),
          " in ~",
          jf(c)
        ] }),
        /* @__PURE__ */ N.jsxs("span", { className: "crec-debug-meta-item", title: "Output tokens (~chars/4)", children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-sign-out-alt" }),
          " out ~",
          jf(b)
        ] }),
        /* @__PURE__ */ N.jsxs("span", { className: "crec-debug-meta-item", title: "Elapsed time", children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-stopwatch" }),
          " ",
          m,
          "ms"
        ] })
      ] }),
      /* @__PURE__ */ N.jsxs("div", { className: "crec-debug-tabs", children: [
        /* @__PURE__ */ N.jsxs(
          "button",
          {
            type: "button",
            className: `menu_button ${a === "prompt" ? "active" : ""}`,
            onClick: () => l("prompt"),
            children: [
              "Prompt (",
              r.messages.length,
              ")"
            ]
          }
        ),
        /* @__PURE__ */ N.jsx(
          "button",
          {
            type: "button",
            className: `menu_button ${a === "response" ? "active" : ""}`,
            onClick: () => l("response"),
            children: "Response"
          }
        )
      ] })
    ] }),
    a === "prompt" ? /* @__PURE__ */ N.jsxs("div", { className: "crec-debug-section", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "crec-debug-actions", children: [
        /* @__PURE__ */ N.jsxs(Re, { onClick: p, title: "Copy prompt as plain text", children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-copy" }),
          " Copy (text)"
        ] }),
        /* @__PURE__ */ N.jsxs(Re, { onClick: d, title: "Copy prompt array as JSON", children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-code" }),
          " Copy (JSON)"
        ] })
      ] }),
      /* @__PURE__ */ N.jsx("div", { className: "crec-debug-messages", children: r.messages.length === 0 ? /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No prompt messages were sent." }) : r.messages.map((g, y) => {
        const h = s[y] ?? !0, x = g.content.length > 300 ? `${g.content.slice(0, 300)}…` : g.content;
        return /* @__PURE__ */ N.jsxs("div", { className: `crec-debug-message crec-debug-message-${g.role}`, children: [
          /* @__PURE__ */ N.jsxs(
            "div",
            {
              className: "crec-debug-message-head",
              onClick: () => S(y),
              role: "button",
              tabIndex: 0,
              children: [
                /* @__PURE__ */ N.jsx("span", { className: `crec-debug-role crec-debug-role-${g.role}`, children: Lv[g.role] || g.role.toUpperCase() }),
                /* @__PURE__ */ N.jsxs("span", { className: "crec-debug-meta-item", children: [
                  "~",
                  jf(Lf(g.content)),
                  " tok"
                ] }),
                /* @__PURE__ */ N.jsx("i", { className: `fa-solid ${h ? "fa-chevron-up" : "fa-chevron-down"}` })
              ]
            }
          ),
          /* @__PURE__ */ N.jsx("pre", { className: "crec-debug-message-body", children: h ? g.content : x })
        ] }, y);
      }) })
    ] }) : /* @__PURE__ */ N.jsxs("div", { className: "crec-debug-section", children: [
      /* @__PURE__ */ N.jsx("div", { className: "crec-debug-actions", children: /* @__PURE__ */ N.jsxs(Re, { onClick: v, title: "Copy the raw LLM response", children: [
        /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-copy" }),
        " Copy raw response"
      ] }) }),
      /* @__PURE__ */ N.jsxs("div", { className: "crec-debug-response-grid", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "crec-debug-response-pane", children: [
          /* @__PURE__ */ N.jsxs("h4", { children: [
            "Raw Response ",
            /* @__PURE__ */ N.jsxs("span", { className: "subtle", children: [
              "(",
              r.rawResponse.length,
              " chars)"
            ] })
          ] }),
          /* @__PURE__ */ N.jsx("pre", { className: "crec-debug-message-body", children: r.rawResponse })
        ] }),
        /* @__PURE__ */ N.jsx("div", { className: "crec-debug-response-divider" }),
        /* @__PURE__ */ N.jsxs("div", { className: "crec-debug-response-pane", children: [
          /* @__PURE__ */ N.jsxs("h4", { children: [
            "Parsed Content (",
            r.parsedContent.length,
            " chars)"
          ] }),
          /* @__PURE__ */ N.jsx("pre", { className: "crec-debug-message-body", children: r.parsedContent })
        ] })
      ] })
    ] })
  ] });
};
function Nx(r, a) {
  return {
    name: r.name?.value ?? "",
    description: r.description?.value ?? "",
    personality: r.personality?.value ?? "",
    scenario: r.scenario?.value ?? "",
    first_mes: r.first_mes?.value ?? "",
    mes_example: r.mes_example?.value ?? "",
    alternate_greetings: a.map((l) => l.value).filter(Boolean)
  };
}
function Ox(r, a = []) {
  const l = new Set(r), s = a.filter((u) => u && !l.has(u));
  return [
    ...r.map((u) => ({ value: u, label: u })),
    ...s.map((u) => ({ value: u, label: `${u} (missing)` }))
  ];
}
function Dx(r, a = {}) {
  const l = r?.entries;
  if (!l)
    return [];
  const s = Array.isArray(l) ? l : Object.values(l);
  return a.includeDisabled ? s : s.filter((u) => !u.disable);
}
const wt = SillyTavern.getContext(), zf = () => ({
  selectedCharacterIndexes: gn ? [String(gn)] : [],
  selectedWorldNames: [],
  fields: jn.reduce(
    (r, a) => (r[a] = { value: "", prompt: "", label: Cn[a] }, r),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), Mx = {
  name: { label: Cn.name, rows: 2, large: !1, promptEnabled: !1, primary: !0 },
  description: { label: Cn.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: Cn.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: Cn.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: Cn.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: Cn.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, Rx = () => {
  const r = Ny(), a = an.getSettings(), [l, s] = ne.useState(zf()), [u, c] = ne.useState([]), [b, m] = ne.useState(!0), [d, p] = ne.useState("core"), [v, S] = ne.useState([]), [g, y] = ne.useState([]), [h, x] = ne.useState(null), [C, O] = ne.useState(null), [A, D] = ne.useState({}), [E, T] = ne.useState(null), [j, L] = ne.useState(!1), [G, ee] = ne.useState({
    profile: !1,
    context: !0,
    options: !0,
    instructions: !0
  });
  ne.useEffect(() => {
    (async () => {
      m(!0), S(wt.characters), y(ag);
      const J = (await tx()).value ?? {}, Z = zf();
      if (J.fields && (Z.fields = { ...Z.fields, ...J.fields }), J.draftFields && (Z.draftFields = J.draftFields), J.selectedCharacterIndexes && (Z.selectedCharacterIndexes = J.selectedCharacterIndexes), J.selectedWorldNames && (Z.selectedWorldNames = J.selectedWorldNames), J.lastLoadedCharacterId) {
        Z.lastLoadedCharacterId = J.lastLoadedCharacterId;
        const se = wt.characters.find((ke) => ke.avatar === J.lastLoadedCharacterId);
        se && x(se);
      }
      s(Z), m(!1);
    })();
  }, []), ne.useEffect(() => {
    b || nx(l).then((k) => {
      k.persisted || (console.warn("Failed to save Character Creator session:", k.error), Ae("warning", "Character Creator session could not be saved. Browser storage may be full."));
    });
  }, [l, b]);
  const P = (k, J) => {
    an.getSettings()[k] = J, an.saveSettings(), r();
  }, Y = (k, J) => {
    an.getSettings().contextToSend[k] = J, an.saveSettings(), r();
  }, X = ne.useCallback(
    (k, J, Z, se) => {
      s((ke) => {
        const ge = se ? "draftFields" : "fields", qe = { ...ke[ge] };
        return qe[k] || (qe[k] = { value: "", prompt: "", label: k }), qe[k][Z] = J, { ...ke, [ge]: qe };
      });
    },
    []
  ), oe = ne.useMemo(
    () => Object.keys(l.fields).filter((k) => k.startsWith("alternate_greetings_")).sort((k, J) => parseInt(k.split("_")[2]) - parseInt(J.split("_")[2])).map((k) => l.fields[k]),
    [l.fields]
  ), fe = ne.useCallback((k) => {
    s((J) => {
      const Z = { ...J.fields };
      return Object.keys(Z).forEach((se) => {
        se.startsWith("alternate_greetings_") && delete Z[se];
      }), k.forEach((se, ke) => {
        const ge = `alternate_greetings_${ke + 1}`;
        Z[ge] = { ...se, label: `Alternate Greeting ${ke + 1}` };
      }), { ...J, fields: Z };
    });
  }, []), ue = ne.useCallback(
    (k, J) => {
      X(k, "", "value", J);
    },
    [X]
  ), U = ne.useCallback(
    async (k) => {
      await wt.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${l.draftFields[k].label}"?`
      ) && s((Z) => {
        const se = { ...Z.draftFields };
        return delete se[k], { ...Z, draftFields: se };
      });
    },
    [l.draftFields]
  ), $ = ne.useCallback(async () => {
    const k = await wt.Popup.show.input("Enter Draft Field Name", "");
    if (!k?.trim()) return;
    const J = $f(k.trim());
    if (!J) return Ae("error", "Invalid field name.");
    if (l.draftFields[J] || jn.includes(J))
      return Ae("warning", "Field name already exists.");
    s((Z) => ({
      ...Z,
      draftFields: { ...Z.draftFields, [J]: { value: "", prompt: "", label: k } }
    })), p("draft");
  }, [l.draftFields]), le = ne.useCallback(() => {
    const k = {
      presetName: a.profileId ? wt.extensionSettings.connectionManager?.profiles?.find((Z) => Z.id === a.profileId)?.preset : void 0,
      contextName: a.profileId ? wt.extensionSettings.connectionManager?.profiles?.find((Z) => Z.id === a.profileId)?.context : void 0,
      instructName: a.profileId ? wt.extensionSettings.connectionManager?.profiles?.find((Z) => Z.id === a.profileId)?.instruct : void 0,
      targetCharacterId: gn,
      ignoreCharacterFields: !0,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !0,
      maxContext: a.maxContextType === "custom" ? a.maxContextValue : a.maxContextType === "profile" ? "preset" : "active",
      includeNames: !!fr
    }, J = a.contextToSend.messages;
    switch (J.type) {
      case "none":
        k.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case "first":
        k.messageIndexesBetween = { start: 0, end: J.first ?? 10 };
        break;
      case "last":
        const Z = wt.chat?.length ?? 0, se = J.last ?? 10;
        k.messageIndexesBetween = {
          end: Math.max(0, Z - 1),
          start: Math.max(0, Z - se)
        };
        break;
      case "range":
        k.messageIndexesBetween = {
          start: J.range?.start ?? 0,
          end: J.range?.end ?? 10
        };
        break;
    }
    return gn === void 0 && !fr && (k.messageIndexesBetween = { start: -1, end: -1 }), k;
  }, [a]), he = ne.useCallback(async () => {
    const k = {};
    return await Promise.all(
      ag.filter((J) => !k[J]).map(async (J) => {
        const Z = await wt.loadWorldInfo(J);
        Z && (k[J] = Dx(Z, { includeDisabled: !0 }));
      })
    ), k;
  }, []), M = ne.useCallback(() => {
    const k = structuredClone(a.prompts);
    return a.contextToSend.stDescription || delete k.stDescription, (!a.contextToSend.charCard || l.selectedCharacterIndexes.length === 0) && delete k.charDefinitions, (!a.contextToSend.worldInfo || l.selectedWorldNames.length === 0) && delete k.lorebookDefinitions, a.contextToSend.existingFields || delete k.existingFieldDefinitions, a.contextToSend.persona || delete k.personaDescription, delete k.worldInfoCharDefinition, k;
  }, [a, l.selectedCharacterIndexes, l.selectedWorldNames]), F = ne.useCallback(
    async (k, J) => {
      if (!a.profileId)
        throw new Error("No connection profile selected.");
      if (!wt.extensionSettings.connectionManager?.profiles?.find(
        (Ge) => Ge.id === a.profileId
      ))
        throw new Error("Connection profile not found.");
      const se = le(), ke = await he(), ge = M(), qe = await I_({
        profileId: a.profileId,
        userPrompt: a.promptPresets[a.promptPreset].content,
        buildPromptOptions: se,
        continueFrom: J,
        session: l,
        allCharacters: v,
        entriesGroupByWorldName: ke,
        promptSettings: ge,
        formatDescription: { content: a.prompts[`${a.outputFormat}Format`].content },
        mainContextList: a.mainContextTemplatePresets[a.mainContextTemplatePreset].prompts.filter(
          (Ge) => Ge.enabled
        ),
        includeUserMacro: a.contextToSend.persona,
        maxResponseToken: a.maxResponseToken,
        fieldMaxResponseTokens: a.fieldMaxResponseTokens,
        useWorldInfoActivationScan: a.useWorldInfoActivationScan,
        targetField: k,
        outputFormat: a.outputFormat
      });
      return qe.debug && D((Ge) => ({ ...Ge, [k]: qe.debug })), qe.content;
    },
    [l, a, v, le, he, M]
  ), te = ne.useCallback(
    async (k, J) => {
      c((Z) => [...Z, k]);
      try {
        const Z = await F(k, J), se = k.startsWith("alternate_greetings_"), ke = !se && !jn.includes(k);
        if (se) {
          const ge = parseInt(k.split("_")[2]) - 1, qe = [...oe];
          qe[ge] && (qe[ge].value = Z), fe(qe);
        } else
          X(k, Z, "value", ke);
      } catch (Z) {
        console.error(Z), Ae("error", Z.message || String(Z));
      } finally {
        c((Z) => Z.filter((se) => se !== k));
      }
    },
    [F, oe, X, fe]
  ), re = ne.useCallback(async () => {
    if (!a.profileId) {
      Ae("warning", "Please select a connection profile.");
      return;
    }
    const k = ["name", "description", "personality", "scenario", "first_mes", "mes_example"].filter(
      (J) => !u.includes(J)
    );
    if (k.length !== 0) {
      L(!0), c((J) => [...J, ...k]);
      try {
        const J = {};
        for (const Z of k) {
          const se = await F(Z);
          J[Z] = se, s((ke) => {
            const ge = { ...ke.fields };
            return ge[Z] && (ge[Z] = { ...ge[Z], value: se }), { ...ke, fields: ge };
          }), c((ke) => ke.filter((ge) => ge !== Z));
        }
        Ae("success", `Generated ${Object.keys(J).length} fields.`);
      } catch (J) {
        console.error(J), Ae("error", `Generate all failed: ${J.message}`);
      } finally {
        L(!1), c([]);
      }
    }
  }, [a.profileId, F, u]), ae = ne.useCallback(async () => {
    await wt.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(zf()), x(null), D({}));
  }, []), Oe = ne.useCallback(
    (k) => {
      if (!h) return Ae("warning", "Please load a character to compare against.");
      let J, Z, se;
      typeof k == "number" ? (J = oe[k]?.value ?? "", Z = h.data?.alternate_greetings?.[k] ?? "", se = `Alternate Greeting ${k + 1}`) : (J = l.fields[k]?.value ?? "", Z = h[k] ?? h.data?.[k] ?? "", se = Cn[k]), O({ original: Z, current: J, fieldName: se });
    },
    [h, l.fields, oe]
  ), ve = ne.useCallback(
    async (k) => {
      const J = v[parseInt(k)];
      if (!J || jn.some((ge) => l.fields[ge].value.trim() !== "") && !await wt.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const se = { ...l.fields };
      jn.forEach((ge) => {
        se[ge] = { value: J[ge] ?? J.data?.[ge] ?? "", prompt: "", label: Cn[ge] };
      });
      const ke = (J.data?.alternate_greetings ?? []).map((ge) => ({ value: ge, prompt: "" }));
      x(J), s((ge) => ({ ...ge, fields: se, lastLoadedCharacterId: J.avatar })), fe(ke);
    },
    [v, l.fields, fe]
  ), pt = ne.useCallback(async () => {
    if (fr) {
      Ae("warning", "Cannot load the current character while a group chat is open.");
      return;
    }
    if (gn === void 0) {
      Ae("warning", "No character chat is currently open.");
      return;
    }
    await ve(String(gn));
  }, [ve]), Le = () => oe.map((k) => k.value).filter((k) => k.trim() !== ""), Gt = ne.useCallback(() => ({
    name: l.fields.name.value,
    description: l.fields.description.value,
    personality: l.fields.personality.value,
    scenario: l.fields.scenario.value,
    first_mes: l.fields.first_mes.value,
    mes_example: l.fields.mes_example.value,
    data: {
      alternate_greetings: Le(),
      tags: [],
      avatar: "none",
      name: l.fields.name.value,
      description: l.fields.description.value,
      first_mes: l.fields.first_mes.value,
      mes_example: l.fields.mes_example.value,
      personality: l.fields.personality.value,
      scenario: l.fields.scenario.value
    },
    avatar: "none",
    tags: [],
    spec: "chara_card_v3",
    spec_version: "3.0"
  }), [l.fields, oe]), gr = async () => {
    if (!l.fields.name.value) return Ae("warning", "Please provide a character name.");
    if (await wt.Popup.show.confirm("Save as New Character", "Are you sure?"))
      try {
        await w2(Gt(), !0), Ae("success", "Character created.");
      } catch (J) {
        Ae("error", `Failed to create character: ${J.message}`);
      }
  }, vn = async () => {
    if (!h) return Ae("warning", "Please load a character to override.");
    if (!await wt.Popup.show.confirm(
      "Override Character",
      `Override "${h.name}"? This cannot be undone.`
    )) return;
    const J = {
      ...h,
      name: l.fields.name.value,
      description: l.fields.description.value,
      personality: l.fields.personality.value,
      scenario: l.fields.scenario.value,
      first_mes: l.fields.first_mes.value,
      mes_example: l.fields.mes_example.value,
      data: {
        alternate_greetings: Le(),
        name: l.fields.name.value,
        description: l.fields.description.value,
        first_mes: l.fields.first_mes.value,
        mes_example: l.fields.mes_example.value,
        personality: l.fields.personality.value,
        scenario: l.fields.scenario.value
      }
    };
    try {
      await N2(J, !0), Ae("success", `Character "${J.name}" updated!`);
    } catch (Z) {
      Ae("error", `Failed to override character: ${Z.message}`);
    }
  }, Tn = () => {
    if (!l.fields.name.value) return Ae("warning", "Please provide a character name before exporting.");
    const k = Gt(), J = new Blob([JSON.stringify(k, null, 2)], { type: "application/json" }), Z = document.createElement("a");
    Z.href = URL.createObjectURL(J), Z.download = `${l.fields.name.value || "character"}-card.json`, Z.click(), URL.revokeObjectURL(Z.href);
  }, Pa = () => {
    const k = document.createElement("input");
    k.type = "file", k.accept = ".json", k.onchange = async () => {
      const J = k.files?.[0];
      if (J)
        try {
          const Z = await J.text(), se = JSON.parse(Z);
          if (jn.some((Ge) => l.fields[Ge].value.trim() !== "") && !await wt.Popup.show.confirm("Import Character", "Overwrite current fields?"))
            return;
          const ge = { ...l.fields };
          jn.forEach((Ge) => {
            ge[Ge] = {
              value: se[Ge] ?? se.data?.[Ge] ?? "",
              prompt: "",
              label: Cn[Ge]
            };
          });
          const qe = (se.data?.alternate_greetings ?? se.alternate_greetings ?? []).map(
            (Ge) => ({ value: Ge, prompt: "" })
          );
          s((Ge) => ({ ...Ge, fields: ge })), fe(qe), Ae("success", `Imported "${se.name ?? "character"}".`);
        } catch (Z) {
          Ae("error", `Import failed: ${Z.message}`);
        }
    }, k.click();
  }, qa = () => {
    const k = JSON.stringify({ draftFields: l.draftFields, version: Ay }, null, 2), J = new Blob([k], { type: "application/json" }), Z = document.createElement("a");
    Z.href = URL.createObjectURL(J), Z.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, Z.click(), URL.revokeObjectURL(Z.href);
  }, vr = () => {
    const k = document.createElement("input");
    k.type = "file", k.accept = ".json", k.onchange = async () => {
      const J = k.files?.[0];
      if (J)
        try {
          const Z = await J.text(), se = JSON.parse(Z);
          if (!se.draftFields) throw new Error("Invalid file format.");
          (Object.keys(l.draftFields).length > 0 ? await wt.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((ge) => ({ ...ge, draftFields: se.draftFields })), Ae("success", "Draft fields imported."));
        } catch (Z) {
          Ae("error", `Import failed: ${Z.message}`);
        }
    }, k.click();
  }, Ia = ne.useMemo(
    () => v.map((k, J) => ({ value: String(J), label: k.name })),
    [v]
  ), Nt = ne.useMemo(
    () => g.map((k) => ({ value: k, label: k })),
    [g]
  ), vi = ne.useMemo(
    () => Ox(g, l.selectedWorldNames),
    [g, l.selectedWorldNames]
  ), Vt = ne.useMemo(
    () => Object.keys(a.promptPresets).map((k) => ({ value: k, label: k })),
    [a.promptPresets]
  ), me = ne.useMemo(
    () => Object.keys(a.mainContextTemplatePresets).map((k) => ({ value: k, label: k })),
    [a.mainContextTemplatePresets]
  ), de = (k) => ee((J) => ({ ...J, [k]: !J[k] })), Ue = a.showDebugView, He = E ? A[E] : null;
  return b ? /* @__PURE__ */ N.jsx("div", { className: "crec-loading", children: "Loading…" }) : /* @__PURE__ */ N.jsxs("div", { id: "charCreatorPopup", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "crec-popup-head", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "crec-title-row", children: [
        /* @__PURE__ */ N.jsxs("h2", { children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-user-astronaut crec-title-icon", "aria-hidden": "true" }),
          "Character Creator"
        ] }),
        /* @__PURE__ */ N.jsx("div", { className: "crec-character-subtitle", title: "Active character for this card", children: h ? /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
          /* @__PURE__ */ N.jsx("span", { className: "crec-character-subtitle-label", children: "Editing:" }),
          " ",
          /* @__PURE__ */ N.jsx("span", { className: "crec-character-subtitle-name", children: l.fields.name.value || h.name })
        ] }) : l.fields.name.value ? /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
          /* @__PURE__ */ N.jsx("span", { className: "crec-character-subtitle-label", children: "New character:" }),
          " ",
          /* @__PURE__ */ N.jsx("span", { className: "crec-character-subtitle-name", children: l.fields.name.value })
        ] }) : /* @__PURE__ */ N.jsx("span", { className: "crec-character-subtitle-placeholder", children: "Untitled character" }) })
      ] }),
      /* @__PURE__ */ N.jsxs("div", { className: "crec-toolbar", children: [
        /* @__PURE__ */ N.jsx(Re, { onClick: re, disabled: j, title: "Generate every core field in sequence", children: j ? /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-spinner fa-spin" }),
          " Generating…"
        ] }) : /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-bolt" }),
          " Generate All"
        ] }) }),
        /* @__PURE__ */ N.jsx(Re, { onClick: gr, children: "Save as New" }),
        /* @__PURE__ */ N.jsx(Re, { onClick: vn, disabled: !h, children: "Override Char" }),
        /* @__PURE__ */ N.jsx(Re, { onClick: Tn, children: "Export JSON" }),
        /* @__PURE__ */ N.jsx(Re, { onClick: Pa, children: "Import JSON" }),
        a.showSaveAsWorldInfoEntry.show && /* @__PURE__ */ N.jsx(
          Do,
          {
            items: Nt,
            placeholder: "Save as WI Entry",
            closeOnSelect: !0,
            value: [],
            onChange: (k) => {
            },
            onBeforeSelection: async (k, J) => {
              if (!l.fields.name.value)
                return Ae("warning", "Please enter a name first."), !1;
              const Z = J[0], ke = aa.compile(a.prompts.worldInfoCharDefinition.content)({
                character: Nx(l.fields, oe)
              }), ge = {
                uid: -1,
                key: [l.fields.name.value],
                content: ke,
                comment: l.fields.name.value,
                disable: !1,
                keysecondary: []
              };
              try {
                await iS({ entry: ge, selectedWorldName: Z, operation: "add" }), Ae("success", `Entry added to ${Z}.`);
              } catch (qe) {
                Ae("error", `Failed to add WI Entry: ${qe.message}`);
              }
              return !1;
            }
          }
        ),
        /* @__PURE__ */ N.jsxs(Re, { onClick: ae, title: "Clear all fields", children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-rotate-left" }),
          " Reset"
        ] }),
        /* @__PURE__ */ N.jsx(
          Re,
          {
            onClick: pt,
            title: "Load the character from the currently open chat",
            disabled: !!fr || gn === void 0,
            children: "Current Char"
          }
        ),
        /* @__PURE__ */ N.jsx("div", { style: { width: "220px" }, title: "Load Character Data", children: /* @__PURE__ */ N.jsx(
          Do,
          {
            items: Ia,
            value: h ? [String(v.indexOf(h))] : [],
            onChange: (k) => ve(k[0]),
            multiple: !1,
            enableSearch: !0,
            placeholder: "Load Character…"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "column", children: [
        /* @__PURE__ */ N.jsxs("div", { className: `card crec-collapsible ${G.profile ? "" : "expanded"}`, children: [
          /* @__PURE__ */ N.jsxs(
            "div",
            {
              className: "crec-card-head",
              role: "button",
              tabIndex: 0,
              onClick: () => de("profile"),
              onKeyDown: (k) => {
                (k.key === "Enter" || k.key === " ") && (k.preventDefault(), de("profile"));
              },
              children: [
                /* @__PURE__ */ N.jsxs("h3", { children: [
                  /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-plug crec-card-section-icon", "aria-hidden": "true" }),
                  " Connection Profile"
                ] }),
                /* @__PURE__ */ N.jsx("i", { className: `fa-solid crec-card-chevron ${G.profile ? "fa-chevron-right" : "fa-chevron-down"}` })
              ]
            }
          ),
          !G.profile && /* @__PURE__ */ N.jsx("div", { className: "crec-card-body", children: /* @__PURE__ */ N.jsx(
            Z_,
            {
              initialSelectedProfileId: a.profileId,
              onChange: (k) => P("profileId", k?.id ?? "")
            }
          ) })
        ] }),
        /* @__PURE__ */ N.jsxs("div", { className: `card crec-collapsible ${G.context ? "" : "expanded"}`, children: [
          /* @__PURE__ */ N.jsxs(
            "div",
            {
              className: "crec-card-head",
              role: "button",
              tabIndex: 0,
              onClick: () => de("context"),
              onKeyDown: (k) => {
                (k.key === "Enter" || k.key === " ") && (k.preventDefault(), de("context"));
              },
              children: [
                /* @__PURE__ */ N.jsxs("h3", { children: [
                  /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-circle-info crec-card-section-icon", "aria-hidden": "true" }),
                  " Context to Send"
                ] }),
                /* @__PURE__ */ N.jsx("i", { className: `fa-solid crec-card-chevron ${G.context ? "fa-chevron-right" : "fa-chevron-down"}` })
              ]
            }
          ),
          !G.context && /* @__PURE__ */ N.jsxs("div", { className: "crec-card-body context-options", children: [
            /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ N.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: a.contextToSend.stDescription,
                  onChange: (k) => Y("stDescription", k.target.checked)
                }
              ),
              " ",
              "Description of SillyTavern & Char Card"
            ] }),
            /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ N.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: a.contextToSend.persona,
                  onChange: (k) => Y("persona", k.target.checked)
                }
              ),
              " ",
              "User's Persona"
            ] }),
            (gn !== void 0 || fr) && /* @__PURE__ */ N.jsxs("div", { className: "message-options", children: [
              /* @__PURE__ */ N.jsx("h4", { children: "Messages to Include" }),
              /* @__PURE__ */ N.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: a.contextToSend.messages.type,
                  onChange: (k) => Y("messages", {
                    ...a.contextToSend.messages,
                    type: k.target.value
                  }),
                  children: [
                    /* @__PURE__ */ N.jsx("option", { value: "none", children: "None" }),
                    /* @__PURE__ */ N.jsx("option", { value: "all", children: "All Messages" }),
                    /* @__PURE__ */ N.jsx("option", { value: "first", children: "First X Messages" }),
                    /* @__PURE__ */ N.jsx("option", { value: "last", children: "Last X Messages" }),
                    /* @__PURE__ */ N.jsx("option", { value: "range", children: "Range" })
                  ]
                }
              ),
              a.contextToSend.messages.type === "first" && /* @__PURE__ */ N.jsxs("div", { className: "crec-inline-number", children: [
                "First",
                " ",
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    value: a.contextToSend.messages.first ?? 10,
                    onChange: (k) => Y("messages", {
                      ...a.contextToSend.messages,
                      first: parseInt(k.target.value) || 10
                    })
                  }
                ),
                " ",
                "Messages"
              ] }),
              a.contextToSend.messages.type === "last" && /* @__PURE__ */ N.jsxs("div", { className: "crec-inline-number", children: [
                "Last",
                " ",
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    value: a.contextToSend.messages.last ?? 10,
                    onChange: (k) => Y("messages", {
                      ...a.contextToSend.messages,
                      last: parseInt(k.target.value) || 10
                    })
                  }
                ),
                " ",
                "Messages"
              ] }),
              a.contextToSend.messages.type === "range" && /* @__PURE__ */ N.jsxs("div", { className: "crec-inline-number", children: [
                "Range",
                " ",
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "0",
                    placeholder: "Start",
                    value: a.contextToSend.messages.range?.start ?? 0,
                    onChange: (k) => Y("messages", {
                      ...a.contextToSend.messages,
                      range: {
                        ...a.contextToSend.messages.range,
                        start: parseInt(k.target.value) || 0
                      }
                    })
                  }
                ),
                " ",
                "to",
                " ",
                /* @__PURE__ */ N.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    placeholder: "End",
                    value: a.contextToSend.messages.range?.end ?? 10,
                    onChange: (k) => Y("messages", {
                      ...a.contextToSend.messages,
                      range: {
                        ...a.contextToSend.messages.range,
                        end: parseInt(k.target.value) || 10
                      }
                    })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ N.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: a.contextToSend.charCard,
                  onChange: (k) => Y("charCard", k.target.checked)
                }
              ),
              " ",
              "Selected Characters' Data"
            ] }),
            a.contextToSend.charCard && /* @__PURE__ */ N.jsx(
              Do,
              {
                items: Ia,
                value: l.selectedCharacterIndexes,
                onChange: (k) => s((J) => ({ ...J, selectedCharacterIndexes: k })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ N.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: a.contextToSend.worldInfo,
                  onChange: (k) => Y("worldInfo", k.target.checked)
                }
              ),
              " ",
              "Selected World Info"
            ] }),
            a.contextToSend.worldInfo && /* @__PURE__ */ N.jsx(
              Do,
              {
                items: vi,
                value: l.selectedWorldNames,
                onChange: (k) => s((J) => ({ ...J, selectedWorldNames: k })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ N.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: a.contextToSend.existingFields,
                  onChange: (k) => Y("existingFields", k.target.checked)
                }
              ),
              " ",
              "Existing Field Content"
            ] }),
            /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ N.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: a.contextToSend.dontSendOtherGreetings,
                  onChange: (k) => Y("dontSendOtherGreetings", k.target.checked)
                }
              ),
              " ",
              "Don't send other alternate greetings"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ N.jsxs("div", { className: `card crec-collapsible ${G.options ? "" : "expanded"}`, children: [
          /* @__PURE__ */ N.jsxs(
            "div",
            {
              className: "crec-card-head",
              role: "button",
              tabIndex: 0,
              onClick: () => de("options"),
              onKeyDown: (k) => {
                (k.key === "Enter" || k.key === " ") && (k.preventDefault(), de("options"));
              },
              children: [
                /* @__PURE__ */ N.jsxs("h3", { children: [
                  /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-sliders crec-card-section-icon", "aria-hidden": "true" }),
                  " Generation Options"
                ] }),
                /* @__PURE__ */ N.jsx("i", { className: `fa-solid crec-card-chevron ${G.options ? "fa-chevron-right" : "fa-chevron-down"}` })
              ]
            }
          ),
          !G.options && /* @__PURE__ */ N.jsxs("div", { className: "crec-card-body", children: [
            /* @__PURE__ */ N.jsxs("label", { title: "You can edit in extension settings", children: [
              "Main Context Template",
              /* @__PURE__ */ N.jsx(
                Fo,
                {
                  onItemsChange: () => {
                  },
                  label: "Main Context Template",
                  items: me,
                  value: a.mainContextTemplatePreset,
                  onChange: (k) => P("mainContextTemplatePreset", k ?? "default")
                }
              )
            ] }),
            /* @__PURE__ */ N.jsxs("label", { children: [
              "Max Context Tokens",
              /* @__PURE__ */ N.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: a.maxContextType,
                  onChange: (k) => P("maxContextType", k.target.value),
                  children: [
                    /* @__PURE__ */ N.jsx("option", { value: "profile", children: "Use profile preset" }),
                    /* @__PURE__ */ N.jsx("option", { value: "sampler", children: "Use active preset" }),
                    /* @__PURE__ */ N.jsx("option", { value: "custom", children: "Custom" })
                  ]
                }
              )
            ] }),
            a.maxContextType === "custom" && /* @__PURE__ */ N.jsx(
              "input",
              {
                type: "number",
                className: "text_pole",
                value: a.maxContextValue,
                onChange: (k) => P("maxContextValue", parseInt(k.target.value) || 16384)
              }
            ),
            /* @__PURE__ */ N.jsxs("label", { children: [
              "Max Response Tokens",
              /* @__PURE__ */ N.jsx(
                "input",
                {
                  type: "number",
                  className: "text_pole",
                  value: a.maxResponseToken,
                  onChange: (k) => P("maxResponseToken", parseInt(k.target.value) || 1024)
                }
              )
            ] }),
            /* @__PURE__ */ N.jsxs("label", { children: [
              "Output Format",
              /* @__PURE__ */ N.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: a.outputFormat,
                  onChange: (k) => P("outputFormat", k.target.value),
                  children: [
                    /* @__PURE__ */ N.jsx("option", { value: "none", children: "Plain Text" }),
                    /* @__PURE__ */ N.jsx("option", { value: "xml", children: "XML" }),
                    /* @__PURE__ */ N.jsx("option", { value: "json", children: "JSON" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label crec-debug-toggle", children: [
              /* @__PURE__ */ N.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: a.showDebugView,
                  onChange: (k) => P("showDebugView", k.target.checked)
                }
              ),
              " ",
              "Show per-field debug view (captured last prompt + response)"
            ] }),
            /* @__PURE__ */ N.jsxs("div", { className: "crec-field-token-grid", children: [
              /* @__PURE__ */ N.jsxs("div", { className: "crec-field-token-grid-header", children: [
                /* @__PURE__ */ N.jsx("span", { children: "Per-field max response tokens" }),
                /* @__PURE__ */ N.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "menu_button crec-field-token-reset",
                    title: "Reset all per-field overrides to built-in defaults (clears overrides, falls back to DEFAULT_FIELD_MAX_RESPONSE_TOKENS)",
                    onClick: () => P("fieldMaxResponseTokens", {}),
                    children: [
                      /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-arrow-rotate-left", "aria-hidden": "true" }),
                      " Reset"
                    ]
                  }
                )
              ] }),
              jn.map((k) => {
                const Z = (a.fieldMaxResponseTokens ?? {})[k], se = Cy[k], ke = Z !== void 0;
                return /* @__PURE__ */ N.jsxs("label", { className: "crec-field-token-row", title: ke ? `Override (built-in default: ${se})` : "Built-in default", children: [
                  /* @__PURE__ */ N.jsx("span", { className: "crec-field-token-label", children: Cn[k] }),
                  /* @__PURE__ */ N.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole crec-field-token-input",
                      min: 64,
                      max: 8192,
                      placeholder: String(se),
                      value: ke ? String(Z) : "",
                      onChange: (ge) => {
                        const qe = ge.target.value, Ge = parseInt(qe, 10), wn = Number.isFinite(Ge) && Ge > 0 ? Ge : void 0, Yt = { ...a.fieldMaxResponseTokens ?? {} };
                        wn === void 0 ? delete Yt[k] : Yt[k] = wn, P("fieldMaxResponseTokens", Yt);
                      }
                    }
                  )
                ] }, k);
              })
            ] }),
            /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label crec-wi-scan-toggle", title: "When enabled, only lorebook entries whose keys activated for the current chat are sent to the LLM. Falls back to sending all enabled entries of selected lorebooks if this SillyTavern version does not expose the World Info scan API.", children: [
              /* @__PURE__ */ N.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: a.useWorldInfoActivationScan,
                  onChange: (k) => P("useWorldInfoActivationScan", k.target.checked)
                }
              ),
              " ",
              "Use World Info activation scan (only send lorebook entries whose keys triggered for the current chat)"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ N.jsxs("div", { className: `card crec-collapsible ${G.instructions ? "" : "expanded"}`, children: [
          /* @__PURE__ */ N.jsxs(
            "div",
            {
              className: "crec-card-head",
              role: "button",
              tabIndex: 0,
              onClick: () => de("instructions"),
              onKeyDown: (k) => {
                (k.key === "Enter" || k.key === " ") && (k.preventDefault(), de("instructions"));
              },
              children: [
                /* @__PURE__ */ N.jsxs("h3", { children: [
                  /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-pen crec-card-section-icon", "aria-hidden": "true" }),
                  " Additional Instructions"
                ] }),
                /* @__PURE__ */ N.jsx(
                  "i",
                  {
                    className: `fa-solid crec-card-chevron ${G.instructions ? "fa-chevron-right" : "fa-chevron-down"}`
                  }
                )
              ]
            }
          ),
          !G.instructions && /* @__PURE__ */ N.jsxs("div", { className: "crec-card-body", children: [
            /* @__PURE__ */ N.jsx(
              Fo,
              {
                label: "Prompt Preset",
                items: Vt,
                value: a.promptPreset,
                onChange: (k) => P("promptPreset", k ?? "default"),
                onItemsChange: (k) => P(
                  "promptPresets",
                  k.reduce(
                    (J, Z) => ({ ...J, [Z.value]: a.promptPresets[Z.value] ?? { content: "" } }),
                    {}
                  )
                ),
                enableCreate: !0,
                enableDelete: !0,
                enableRename: !0,
                readOnlyValues: ["default"]
              }
            ),
            /* @__PURE__ */ N.jsx(
              wy,
              {
                value: a.promptPresets[a.promptPreset]?.content ?? "",
                onChange: (k) => P("promptPresets", {
                  ...a.promptPresets,
                  [a.promptPreset]: { content: k.target.value }
                }),
                rows: 4
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ N.jsxs("div", { className: "wide-column", children: [
        /* @__PURE__ */ N.jsxs("div", { className: "tab-buttons", children: [
          /* @__PURE__ */ N.jsxs(
            "button",
            {
              type: "button",
              onClick: () => p("core"),
              className: `tab-button ${d === "core" ? "active" : ""}`,
              children: [
                /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-file-lines", "aria-hidden": "true" }),
                " Core Fields"
              ]
            }
          ),
          /* @__PURE__ */ N.jsxs(
            "button",
            {
              type: "button",
              onClick: () => p("draft"),
              className: `tab-button ${d === "draft" ? "active" : ""}`,
              children: [
                /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-pen-to-square", "aria-hidden": "true" }),
                " Draft Fields"
              ]
            }
          ),
          /* @__PURE__ */ N.jsx("div", { className: "right-aligned", children: d === "draft" && /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
            /* @__PURE__ */ N.jsxs(Re, { onClick: $, children: [
              /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-plus" }),
              " Add"
            ] }),
            /* @__PURE__ */ N.jsx(Re, { onClick: qa, children: "Export" }),
            /* @__PURE__ */ N.jsx(Re, { onClick: vr, children: "Import" })
          ] }) })
        ] }),
        /* @__PURE__ */ N.jsxs("div", { className: "tab-content-area", children: [
          d === "core" && /* @__PURE__ */ N.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ N.jsx("h3", { className: "crec-tab-section-title", children: "Core Character Fields" }),
            jn.map((k) => {
              const J = Mx[k];
              return J ? /* @__PURE__ */ N.jsx(
                Dv,
                {
                  fieldId: k,
                  label: J.label,
                  value: l.fields[k]?.value ?? "",
                  prompt: l.fields[k]?.prompt ?? "",
                  large: J.large,
                  rows: J.rows,
                  promptEnabled: J.promptEnabled,
                  primary: J.primary,
                  isGenerating: u.includes(k),
                  isDebug: Ue,
                  onValueChange: (Z, se) => X(Z, se, "value", !1),
                  onPromptChange: (Z, se) => X(Z, se, "prompt", !1),
                  onGenerate: te,
                  onContinue: (Z) => te(Z, l.fields[Z].value),
                  onClear: (Z) => ue(Z, !1),
                  onCompare: Oe,
                  onShowDebug: (Z) => T(Z)
                },
                k
              ) : null;
            }),
            /* @__PURE__ */ N.jsx(
              sx,
              {
                greetings: oe,
                onGreetingsChange: fe,
                isGenerating: u.some((k) => k.startsWith("alternate_greetings_")),
                onGenerate: (k) => te(`alternate_greetings_${k + 1}`),
                onContinue: (k) => te(`alternate_greetings_${k + 1}`, oe[k].value),
                onCompare: Oe,
                onShowDebug: (k) => T(k)
              }
            )
          ] }),
          d === "draft" && /* @__PURE__ */ N.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ N.jsx("h3", { className: "crec-tab-section-title", children: "Draft Fields" }),
            Object.entries(l.draftFields).map(([k, J]) => /* @__PURE__ */ N.jsx(
              Dv,
              {
                fieldId: k,
                label: J.label,
                value: J.value,
                prompt: J.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: u.includes(k),
                isDebug: Ue,
                onValueChange: (Z, se) => X(Z, se, "value", !0),
                onPromptChange: (Z, se) => X(Z, se, "prompt", !0),
                onGenerate: te,
                onContinue: (Z) => te(Z, l.draftFields[Z].value),
                onClear: (Z) => ue(Z, !0),
                onDelete: U,
                onShowDebug: (Z) => T(Z)
              },
              k
            ))
          ] })
        ] })
      ] })
    ] }),
    C && /* @__PURE__ */ N.jsx(
      eh,
      {
        type: Ln.DISPLAY,
        content: /* @__PURE__ */ N.jsx(
          Tx,
          {
            originalContent: C.original,
            newContent: C.current,
            fieldName: C.fieldName
          }
        ),
        onComplete: () => O(null),
        options: { wide: !0 }
      }
    ),
    Ue && He && E && /* @__PURE__ */ N.jsx(
      eh,
      {
        type: Ln.DISPLAY,
        content: /* @__PURE__ */ N.jsx(wx, { capture: He }),
        onComplete: () => T(null),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, kx = () => {
  const [r, a] = ne.useState(!1), l = () => a(!0), s = () => a(!1);
  return window.openCharacterCreatorPopup = l, r ? /* @__PURE__ */ N.jsx(
    eh,
    {
      content: /* @__PURE__ */ N.jsx(Rx, {}),
      type: Ln.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, Ly = SillyTavern.getContext();
async function jx() {
  const r = await Ly.renderExtensionTemplateAsync(
    `third-party/${dr}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", r);
  const a = document.createElement("div"), l = document.querySelector(".charCreator_settings .inline-drawer-content");
  l && (l.prepend(a), vg.createRoot(a).render(
    /* @__PURE__ */ N.jsx(zo.StrictMode, { children: /* @__PURE__ */ N.jsx($_, {}) })
  ));
  const s = '<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>', u = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], c = document.createElement("div");
  document.body.appendChild(c), vg.createRoot(c).render(
    /* @__PURE__ */ N.jsx(zo.StrictMode, { children: /* @__PURE__ */ N.jsx(kx, {}) })
  ), u.forEach((m) => {
    if (!m) return;
    const d = document.createElement("div");
    d.innerHTML = s.trim();
    const p = d.firstChild;
    p && (m.prepend(p), p.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function Lx() {
  return !!Ly.ConnectionManagerRequestService;
}
Lx() ? Y_().then(() => {
  jx();
}) : Ae("error", `[${dr}] Make sure ST is updated.`);
export {
  jx as init
};
