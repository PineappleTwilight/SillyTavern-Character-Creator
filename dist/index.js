import { renderStoryString as X0, persona_description_positions as ng } from "../../../../power-user.js";
import { parseMesExamples as Q0, baseChatReplace as Z0, chat_metadata as dl, getMaxContextSize as K0, name1 as ea, name2 as Da, this_chid as mn, extension_prompt_types as ir, depth_prompt_role_default as J0, depth_prompt_depth_default as W0 } from "../../../../../script.js";
import { createWorldInfoEntry as $0, world_info_include_names as e2, wi_anchor_position as t2, world_names as ag } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as n2, formatInstructModeSystemPrompt as a2 } from "../../../../instruct-mode.js";
import { appendFileContent as r2 } from "../../../../chats.js";
import { setOpenAIMessages as i2, setOpenAIMessageExamples as l2, formatWorldInfo as s2, getPromptPosition as o2, getPromptRole as u2, prepareOpenAIMessages as c2 } from "../../../../openai.js";
import { metadata_keys as pl } from "../../../../authors-note.js";
import { getGroupDepthPrompts as f2, selected_group as cr } from "../../../../group-chats.js";
import { getRegexedString as h2, regex_placement as rg } from "../../../regex/engine.js";
import { removeFromArray as ig, runAfterAnimation as d2 } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as ai, fixToastrForDialogs as sf } from "../../../../popup.js";
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
function p2() {
  if (sg) return ml;
  sg = 1;
  var r = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function l(s, c, u) {
    var b = null;
    if (u !== void 0 && (b = "" + u), c.key !== void 0 && (b = "" + c.key), "key" in c) {
      u = {};
      for (var g in c)
        g !== "key" && (u[g] = c[g]);
    } else u = c;
    return c = u.ref, {
      $$typeof: r,
      type: s,
      key: b,
      ref: c !== void 0 ? c : null,
      props: u
    };
  }
  return ml.Fragment = a, ml.jsx = l, ml.jsxs = l, ml;
}
var og;
function m2() {
  return og || (og = 1, of.exports = p2()), of.exports;
}
var N = m2(), uf = { exports: {} }, Te = {};
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
function g2() {
  if (ug) return Te;
  ug = 1;
  var r = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), b = Symbol.for("react.context"), g = Symbol.for("react.forward_ref"), d = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), S = Symbol.iterator;
  function m(j) {
    return j === null || typeof j != "object" ? null : (j = S && j[S] || j["@@iterator"], typeof j == "function" ? j : null);
  }
  var v = {
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
  function C(j, Q, ne) {
    this.props = j, this.context = Q, this.refs = x, this.updater = ne || v;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(j, Q) {
    if (typeof j != "object" && typeof j != "function" && j != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, j, Q, "setState");
  }, C.prototype.forceUpdate = function(j) {
    this.updater.enqueueForceUpdate(this, j, "forceUpdate");
  };
  function O() {
  }
  O.prototype = C.prototype;
  function A(j, Q, ne) {
    this.props = j, this.context = Q, this.refs = x, this.updater = ne || v;
  }
  var M = A.prototype = new O();
  M.constructor = A, h(M, C.prototype), M.isPureReactComponent = !0;
  var E = Array.isArray, w = { H: null, A: null, T: null, S: null, V: null }, R = Object.prototype.hasOwnProperty;
  function L(j, Q, ne, le, se, Oe) {
    return ne = Oe.ref, {
      $$typeof: r,
      type: j,
      key: Q,
      ref: ne !== void 0 ? ne : null,
      props: Oe
    };
  }
  function I(j, Q) {
    return L(
      j.type,
      Q,
      void 0,
      void 0,
      void 0,
      j.props
    );
  }
  function $(j) {
    return typeof j == "object" && j !== null && j.$$typeof === r;
  }
  function q(j) {
    var Q = { "=": "=0", ":": "=2" };
    return "$" + j.replace(/[=:]/g, function(ne) {
      return Q[ne];
    });
  }
  var F = /\/+/g;
  function Y(j, Q) {
    return typeof j == "object" && j !== null && j.key != null ? q("" + j.key) : Q.toString(36);
  }
  function ae() {
  }
  function oe(j) {
    switch (j.status) {
      case "fulfilled":
        return j.value;
      case "rejected":
        throw j.reason;
      default:
        switch (typeof j.status == "string" ? j.then(ae, ae) : (j.status = "pending", j.then(
          function(Q) {
            j.status === "pending" && (j.status = "fulfilled", j.value = Q);
          },
          function(Q) {
            j.status === "pending" && (j.status = "rejected", j.reason = Q);
          }
        )), j.status) {
          case "fulfilled":
            return j.value;
          case "rejected":
            throw j.reason;
        }
    }
    throw j;
  }
  function he(j, Q, ne, le, se) {
    var Oe = typeof j;
    (Oe === "undefined" || Oe === "boolean") && (j = null);
    var me = !1;
    if (j === null) me = !0;
    else
      switch (Oe) {
        case "bigint":
        case "string":
        case "number":
          me = !0;
          break;
        case "object":
          switch (j.$$typeof) {
            case r:
            case a:
              me = !0;
              break;
            case y:
              return me = j._init, he(
                me(j._payload),
                Q,
                ne,
                le,
                se
              );
          }
      }
    if (me)
      return se = se(j), me = le === "" ? "." + Y(j, 0) : le, E(se) ? (ne = "", me != null && (ne = me.replace(F, "$&/") + "/"), he(se, Q, ne, "", function(Gt) {
        return Gt;
      })) : se != null && ($(se) && (se = I(
        se,
        ne + (se.key == null || j && j.key === se.key ? "" : ("" + se.key).replace(
          F,
          "$&/"
        ) + "/") + me
      )), Q.push(se)), 1;
    me = 0;
    var pt = le === "" ? "." : le + ":";
    if (E(j))
      for (var je = 0; je < j.length; je++)
        le = j[je], Oe = pt + Y(le, je), me += he(
          le,
          Q,
          ne,
          Oe,
          se
        );
    else if (je = m(j), typeof je == "function")
      for (j = je.call(j), je = 0; !(le = j.next()).done; )
        le = le.value, Oe = pt + Y(le, je++), me += he(
          le,
          Q,
          ne,
          Oe,
          se
        );
    else if (Oe === "object") {
      if (typeof j.then == "function")
        return he(
          oe(j),
          Q,
          ne,
          le,
          se
        );
      throw Q = String(j), Error(
        "Objects are not valid as a React child (found: " + (Q === "[object Object]" ? "object with keys {" + Object.keys(j).join(", ") + "}" : Q) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return me;
  }
  function U(j, Q, ne) {
    if (j == null) return j;
    var le = [], se = 0;
    return he(j, le, "", "", function(Oe) {
      return Q.call(ne, Oe, se++);
    }), le;
  }
  function ee(j) {
    if (j._status === -1) {
      var Q = j._result;
      Q = Q(), Q.then(
        function(ne) {
          (j._status === 0 || j._status === -1) && (j._status = 1, j._result = ne);
        },
        function(ne) {
          (j._status === 0 || j._status === -1) && (j._status = 2, j._result = ne);
        }
      ), j._status === -1 && (j._status = 0, j._result = Q);
    }
    if (j._status === 1) return j._result.default;
    throw j._result;
  }
  var ie = typeof reportError == "function" ? reportError : function(j) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Q = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof j == "object" && j !== null && typeof j.message == "string" ? String(j.message) : String(j),
        error: j
      });
      if (!window.dispatchEvent(Q)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", j);
      return;
    }
    console.error(j);
  };
  function Ce() {
  }
  return Te.Children = {
    map: U,
    forEach: function(j, Q, ne) {
      U(
        j,
        function() {
          Q.apply(this, arguments);
        },
        ne
      );
    },
    count: function(j) {
      var Q = 0;
      return U(j, function() {
        Q++;
      }), Q;
    },
    toArray: function(j) {
      return U(j, function(Q) {
        return Q;
      }) || [];
    },
    only: function(j) {
      if (!$(j))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return j;
    }
  }, Te.Component = C, Te.Fragment = l, Te.Profiler = c, Te.PureComponent = A, Te.StrictMode = s, Te.Suspense = d, Te.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = w, Te.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(j) {
      return w.H.useMemoCache(j);
    }
  }, Te.cache = function(j) {
    return function() {
      return j.apply(null, arguments);
    };
  }, Te.cloneElement = function(j, Q, ne) {
    if (j == null)
      throw Error(
        "The argument must be a React element, but you passed " + j + "."
      );
    var le = h({}, j.props), se = j.key, Oe = void 0;
    if (Q != null)
      for (me in Q.ref !== void 0 && (Oe = void 0), Q.key !== void 0 && (se = "" + Q.key), Q)
        !R.call(Q, me) || me === "key" || me === "__self" || me === "__source" || me === "ref" && Q.ref === void 0 || (le[me] = Q[me]);
    var me = arguments.length - 2;
    if (me === 1) le.children = ne;
    else if (1 < me) {
      for (var pt = Array(me), je = 0; je < me; je++)
        pt[je] = arguments[je + 2];
      le.children = pt;
    }
    return L(j.type, se, void 0, void 0, Oe, le);
  }, Te.createContext = function(j) {
    return j = {
      $$typeof: b,
      _currentValue: j,
      _currentValue2: j,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, j.Provider = j, j.Consumer = {
      $$typeof: u,
      _context: j
    }, j;
  }, Te.createElement = function(j, Q, ne) {
    var le, se = {}, Oe = null;
    if (Q != null)
      for (le in Q.key !== void 0 && (Oe = "" + Q.key), Q)
        R.call(Q, le) && le !== "key" && le !== "__self" && le !== "__source" && (se[le] = Q[le]);
    var me = arguments.length - 2;
    if (me === 1) se.children = ne;
    else if (1 < me) {
      for (var pt = Array(me), je = 0; je < me; je++)
        pt[je] = arguments[je + 2];
      se.children = pt;
    }
    if (j && j.defaultProps)
      for (le in me = j.defaultProps, me)
        se[le] === void 0 && (se[le] = me[le]);
    return L(j, Oe, void 0, void 0, null, se);
  }, Te.createRef = function() {
    return { current: null };
  }, Te.forwardRef = function(j) {
    return { $$typeof: g, render: j };
  }, Te.isValidElement = $, Te.lazy = function(j) {
    return {
      $$typeof: y,
      _payload: { _status: -1, _result: j },
      _init: ee
    };
  }, Te.memo = function(j, Q) {
    return {
      $$typeof: p,
      type: j,
      compare: Q === void 0 ? null : Q
    };
  }, Te.startTransition = function(j) {
    var Q = w.T, ne = {};
    w.T = ne;
    try {
      var le = j(), se = w.S;
      se !== null && se(ne, le), typeof le == "object" && le !== null && typeof le.then == "function" && le.then(Ce, ie);
    } catch (Oe) {
      ie(Oe);
    } finally {
      w.T = Q;
    }
  }, Te.unstable_useCacheRefresh = function() {
    return w.H.useCacheRefresh();
  }, Te.use = function(j) {
    return w.H.use(j);
  }, Te.useActionState = function(j, Q, ne) {
    return w.H.useActionState(j, Q, ne);
  }, Te.useCallback = function(j, Q) {
    return w.H.useCallback(j, Q);
  }, Te.useContext = function(j) {
    return w.H.useContext(j);
  }, Te.useDebugValue = function() {
  }, Te.useDeferredValue = function(j, Q) {
    return w.H.useDeferredValue(j, Q);
  }, Te.useEffect = function(j, Q, ne) {
    var le = w.H;
    if (typeof ne == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return le.useEffect(j, Q);
  }, Te.useId = function() {
    return w.H.useId();
  }, Te.useImperativeHandle = function(j, Q, ne) {
    return w.H.useImperativeHandle(j, Q, ne);
  }, Te.useInsertionEffect = function(j, Q) {
    return w.H.useInsertionEffect(j, Q);
  }, Te.useLayoutEffect = function(j, Q) {
    return w.H.useLayoutEffect(j, Q);
  }, Te.useMemo = function(j, Q) {
    return w.H.useMemo(j, Q);
  }, Te.useOptimistic = function(j, Q) {
    return w.H.useOptimistic(j, Q);
  }, Te.useReducer = function(j, Q, ne) {
    return w.H.useReducer(j, Q, ne);
  }, Te.useRef = function(j) {
    return w.H.useRef(j);
  }, Te.useState = function(j) {
    return w.H.useState(j);
  }, Te.useSyncExternalStore = function(j, Q, ne) {
    return w.H.useSyncExternalStore(
      j,
      Q,
      ne
    );
  }, Te.useTransition = function() {
    return w.H.useTransition();
  }, Te.version = "19.1.1", Te;
}
var cg;
function rh() {
  return cg || (cg = 1, uf.exports = g2()), uf.exports;
}
var te = rh();
const zo = /* @__PURE__ */ Bv(te);
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
function v2() {
  return fg || (fg = 1, (function(r) {
    function a(U, ee) {
      var ie = U.length;
      U.push(ee);
      e: for (; 0 < ie; ) {
        var Ce = ie - 1 >>> 1, j = U[Ce];
        if (0 < c(j, ee))
          U[Ce] = ee, U[ie] = j, ie = Ce;
        else break e;
      }
    }
    function l(U) {
      return U.length === 0 ? null : U[0];
    }
    function s(U) {
      if (U.length === 0) return null;
      var ee = U[0], ie = U.pop();
      if (ie !== ee) {
        U[0] = ie;
        e: for (var Ce = 0, j = U.length, Q = j >>> 1; Ce < Q; ) {
          var ne = 2 * (Ce + 1) - 1, le = U[ne], se = ne + 1, Oe = U[se];
          if (0 > c(le, ie))
            se < j && 0 > c(Oe, le) ? (U[Ce] = Oe, U[se] = ie, Ce = se) : (U[Ce] = le, U[ne] = ie, Ce = ne);
          else if (se < j && 0 > c(Oe, ie))
            U[Ce] = Oe, U[se] = ie, Ce = se;
          else break e;
        }
      }
      return ee;
    }
    function c(U, ee) {
      var ie = U.sortIndex - ee.sortIndex;
      return ie !== 0 ? ie : U.id - ee.id;
    }
    if (r.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      r.unstable_now = function() {
        return u.now();
      };
    } else {
      var b = Date, g = b.now();
      r.unstable_now = function() {
        return b.now() - g;
      };
    }
    var d = [], p = [], y = 1, S = null, m = 3, v = !1, h = !1, x = !1, C = !1, O = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, M = typeof setImmediate < "u" ? setImmediate : null;
    function E(U) {
      for (var ee = l(p); ee !== null; ) {
        if (ee.callback === null) s(p);
        else if (ee.startTime <= U)
          s(p), ee.sortIndex = ee.expirationTime, a(d, ee);
        else break;
        ee = l(p);
      }
    }
    function w(U) {
      if (x = !1, E(U), !h)
        if (l(d) !== null)
          h = !0, R || (R = !0, Y());
        else {
          var ee = l(p);
          ee !== null && he(w, ee.startTime - U);
        }
    }
    var R = !1, L = -1, I = 5, $ = -1;
    function q() {
      return C ? !0 : !(r.unstable_now() - $ < I);
    }
    function F() {
      if (C = !1, R) {
        var U = r.unstable_now();
        $ = U;
        var ee = !0;
        try {
          e: {
            h = !1, x && (x = !1, A(L), L = -1), v = !0;
            var ie = m;
            try {
              t: {
                for (E(U), S = l(d); S !== null && !(S.expirationTime > U && q()); ) {
                  var Ce = S.callback;
                  if (typeof Ce == "function") {
                    S.callback = null, m = S.priorityLevel;
                    var j = Ce(
                      S.expirationTime <= U
                    );
                    if (U = r.unstable_now(), typeof j == "function") {
                      S.callback = j, E(U), ee = !0;
                      break t;
                    }
                    S === l(d) && s(d), E(U);
                  } else s(d);
                  S = l(d);
                }
                if (S !== null) ee = !0;
                else {
                  var Q = l(p);
                  Q !== null && he(
                    w,
                    Q.startTime - U
                  ), ee = !1;
                }
              }
              break e;
            } finally {
              S = null, m = ie, v = !1;
            }
            ee = void 0;
          }
        } finally {
          ee ? Y() : R = !1;
        }
      }
    }
    var Y;
    if (typeof M == "function")
      Y = function() {
        M(F);
      };
    else if (typeof MessageChannel < "u") {
      var ae = new MessageChannel(), oe = ae.port2;
      ae.port1.onmessage = F, Y = function() {
        oe.postMessage(null);
      };
    } else
      Y = function() {
        O(F, 0);
      };
    function he(U, ee) {
      L = O(function() {
        U(r.unstable_now());
      }, ee);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(U) {
      U.callback = null;
    }, r.unstable_forceFrameRate = function(U) {
      0 > U || 125 < U ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : I = 0 < U ? Math.floor(1e3 / U) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return m;
    }, r.unstable_next = function(U) {
      switch (m) {
        case 1:
        case 2:
        case 3:
          var ee = 3;
          break;
        default:
          ee = m;
      }
      var ie = m;
      m = ee;
      try {
        return U();
      } finally {
        m = ie;
      }
    }, r.unstable_requestPaint = function() {
      C = !0;
    }, r.unstable_runWithPriority = function(U, ee) {
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
      var ie = m;
      m = U;
      try {
        return ee();
      } finally {
        m = ie;
      }
    }, r.unstable_scheduleCallback = function(U, ee, ie) {
      var Ce = r.unstable_now();
      switch (typeof ie == "object" && ie !== null ? (ie = ie.delay, ie = typeof ie == "number" && 0 < ie ? Ce + ie : Ce) : ie = Ce, U) {
        case 1:
          var j = -1;
          break;
        case 2:
          j = 250;
          break;
        case 5:
          j = 1073741823;
          break;
        case 4:
          j = 1e4;
          break;
        default:
          j = 5e3;
      }
      return j = ie + j, U = {
        id: y++,
        callback: ee,
        priorityLevel: U,
        startTime: ie,
        expirationTime: j,
        sortIndex: -1
      }, ie > Ce ? (U.sortIndex = ie, a(p, U), l(d) === null && U === l(p) && (x ? (A(L), L = -1) : x = !0, he(w, ie - Ce))) : (U.sortIndex = j, a(d, U), h || v || (h = !0, R || (R = !0, Y()))), U;
    }, r.unstable_shouldYield = q, r.unstable_wrapCallback = function(U) {
      var ee = m;
      return function() {
        var ie = m;
        m = ee;
        try {
          return U.apply(this, arguments);
        } finally {
          m = ie;
        }
      };
    };
  })(hf)), hf;
}
var hg;
function y2() {
  return hg || (hg = 1, ff.exports = v2()), ff.exports;
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
function b2() {
  if (dg) return At;
  dg = 1;
  var r = rh();
  function a(d) {
    var p = "https://react.dev/errors/" + d;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var y = 2; y < arguments.length; y++)
        p += "&args[]=" + encodeURIComponent(arguments[y]);
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
  }, c = Symbol.for("react.portal");
  function u(d, p, y) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: S == null ? null : "" + S,
      children: d,
      containerInfo: p,
      implementation: y
    };
  }
  var b = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function g(d, p) {
    if (d === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return At.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, At.createPortal = function(d, p) {
    var y = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(a(299));
    return u(d, p, null, y);
  }, At.flushSync = function(d) {
    var p = b.T, y = s.p;
    try {
      if (b.T = null, s.p = 2, d) return d();
    } finally {
      b.T = p, s.p = y, s.d.f();
    }
  }, At.preconnect = function(d, p) {
    typeof d == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, s.d.C(d, p));
  }, At.prefetchDNS = function(d) {
    typeof d == "string" && s.d.D(d);
  }, At.preinit = function(d, p) {
    if (typeof d == "string" && p && typeof p.as == "string") {
      var y = p.as, S = g(y, p.crossOrigin), m = typeof p.integrity == "string" ? p.integrity : void 0, v = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      y === "style" ? s.d.S(
        d,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: S,
          integrity: m,
          fetchPriority: v
        }
      ) : y === "script" && s.d.X(d, {
        crossOrigin: S,
        integrity: m,
        fetchPriority: v,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, At.preinitModule = function(d, p) {
    if (typeof d == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var y = g(
            p.as,
            p.crossOrigin
          );
          s.d.M(d, {
            crossOrigin: y,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && s.d.M(d);
  }, At.preload = function(d, p) {
    if (typeof d == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var y = p.as, S = g(y, p.crossOrigin);
      s.d.L(d, y, {
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
        var y = g(p.as, p.crossOrigin);
        s.d.m(d, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: y,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else s.d.m(d);
  }, At.requestFormReset = function(d) {
    s.d.r(d);
  }, At.unstable_batchedUpdates = function(d, p) {
    return d(p);
  }, At.useFormState = function(d, p, y) {
    return b.H.useFormState(d, p, y);
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
  return r(), df.exports = b2(), df.exports;
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
function S2() {
  if (mg) return gl;
  mg = 1;
  var r = y2(), a = rh(), l = zv();
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function c(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function u(e) {
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
  function g(e) {
    if (u(e) !== e)
      throw Error(s(188));
  }
  function d(e) {
    var t = e.alternate;
    if (!t) {
      if (t = u(e), t === null) throw Error(s(188));
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
          if (f === n) return g(o), e;
          if (f === i) return g(o), t;
          f = f.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== i.return) n = o, i = f;
      else {
        for (var _ = !1, T = o.child; T; ) {
          if (T === n) {
            _ = !0, n = o, i = f;
            break;
          }
          if (T === i) {
            _ = !0, i = o, n = f;
            break;
          }
          T = T.sibling;
        }
        if (!_) {
          for (T = f.child; T; ) {
            if (T === n) {
              _ = !0, n = f, i = o;
              break;
            }
            if (T === i) {
              _ = !0, i = f, n = o;
              break;
            }
            T = T.sibling;
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
  var y = Object.assign, S = Symbol.for("react.element"), m = Symbol.for("react.transitional.element"), v = Symbol.for("react.portal"), h = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), A = Symbol.for("react.consumer"), M = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), R = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), I = Symbol.for("react.lazy"), $ = Symbol.for("react.activity"), q = Symbol.for("react.memo_cache_sentinel"), F = Symbol.iterator;
  function Y(e) {
    return e === null || typeof e != "object" ? null : (e = F && e[F] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ae = Symbol.for("react.client.reference");
  function oe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ae ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case h:
        return "Fragment";
      case C:
        return "Profiler";
      case x:
        return "StrictMode";
      case w:
        return "Suspense";
      case R:
        return "SuspenseList";
      case $:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case v:
          return "Portal";
        case M:
          return (e.displayName || "Context") + ".Provider";
        case A:
          return (e._context.displayName || "Context") + ".Consumer";
        case E:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case L:
          return t = e.displayName || null, t !== null ? t : oe(e.type) || "Memo";
        case I:
          t = e._payload, e = e._init;
          try {
            return oe(e(t));
          } catch {
          }
      }
    return null;
  }
  var he = Array.isArray, U = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ie = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Ce = [], j = -1;
  function Q(e) {
    return { current: e };
  }
  function ne(e) {
    0 > j || (e.current = Ce[j], Ce[j] = null, j--);
  }
  function le(e, t) {
    j++, Ce[j] = e.current, e.current = t;
  }
  var se = Q(null), Oe = Q(null), me = Q(null), pt = Q(null);
  function je(e, t) {
    switch (le(me, t), le(Oe, e), le(se, null), t.nodeType) {
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
    ne(se), le(se, e);
  }
  function Gt() {
    ne(se), ne(Oe), ne(me);
  }
  function mr(e) {
    e.memoizedState !== null && le(pt, e);
    var t = se.current, n = Mm(t, e.type);
    t !== n && (le(Oe, e), le(se, n));
  }
  function gn(e) {
    Oe.current === e && (ne(se), ne(Oe)), pt.current === e && (ne(pt), ol._currentValue = ie);
  }
  var Cn = Object.prototype.hasOwnProperty, Ua = r.unstable_scheduleCallback, Ha = r.unstable_cancelCallback, gr = r.unstable_shouldYield, Pa = r.unstable_requestPaint, Nt = r.unstable_now, vi = r.unstable_getCurrentPriorityLevel, Vt = r.unstable_ImmediatePriority, pe = r.unstable_UserBlockingPriority, fe = r.unstable_NormalPriority, ze = r.unstable_LowPriority, Ue = r.unstable_IdlePriority, k = r.log, K = r.unstable_setDisableYieldValue, J = null, ue = null;
  function He(e) {
    if (typeof k == "function" && K(e), ue && typeof ue.setStrictMode == "function")
      try {
        ue.setStrictMode(J, e);
      } catch {
      }
  }
  var ge = Math.clz32 ? Math.clz32 : qa, Ie = Math.log, Ke = Math.LN2;
  function qa(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ie(e) / Ke | 0) | 0;
  }
  var Bn = 256, An = 4194304;
  function an(e) {
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
    var T = i & 134217727;
    return T !== 0 ? (i = T & ~f, i !== 0 ? o = an(i) : (_ &= T, _ !== 0 ? o = an(_) : n || (n = T & ~e, n !== 0 && (o = an(n))))) : (T = i & ~f, T !== 0 ? o = an(T) : _ !== 0 ? o = an(_) : n || (n = i & ~e, n !== 0 && (o = an(n)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, n = t & -t, f >= n || f === 32 && (n & 4194048) !== 0) ? t : o;
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
  function vr() {
    var e = Bn;
    return Bn <<= 1, (Bn & 4194048) === 0 && (Bn = 256), e;
  }
  function ph() {
    var e = An;
    return An <<= 1, (An & 62914560) === 0 && (An = 4194304), e;
  }
  function Zo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function yi(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function L1(e, t, n, i, o, f) {
    var _ = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var T = e.entanglements, D = e.expirationTimes, P = e.hiddenUpdates;
    for (n = _ & ~n; 0 < n; ) {
      var X = 31 - ge(n), W = 1 << X;
      T[X] = 0, D[X] = -1;
      var G = P[X];
      if (G !== null)
        for (P[X] = null, X = 0; X < G.length; X++) {
          var V = G[X];
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
    var e = ee.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Km(e.type));
  }
  function B1(e, t) {
    var n = ee.p;
    try {
      return ee.p = e, t();
    } finally {
      ee.p = n;
    }
  }
  var sa = Math.random().toString(36).slice(2), Et = "__reactFiber$" + sa, jt = "__reactProps$" + sa, yr = "__reactContainer$" + sa, Wo = "__reactEvents$" + sa, z1 = "__reactListeners$" + sa, U1 = "__reactHandles$" + sa, yh = "__reactResources$" + sa, bi = "__reactMarker$" + sa;
  function $o(e) {
    delete e[Et], delete e[jt], delete e[Wo], delete e[z1], delete e[U1];
  }
  function br(e) {
    var t = e[Et];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[yr] || n[Et]) {
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
  function Sr(e) {
    if (e = e[Et] || e[yr]) {
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
  function _r(e) {
    var t = e[yh];
    return t || (t = e[yh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function mt(e) {
    e[bi] = !0;
  }
  var bh = /* @__PURE__ */ new Set(), Sh = {};
  function Ia(e, t) {
    xr(e, t), xr(e + "Capture", t);
  }
  function xr(e, t) {
    for (Sh[e] = t, e = 0; e < t.length; e++)
      bh.add(t[e]);
  }
  var H1 = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), _h = {}, xh = {};
  function P1(e) {
    return Cn.call(xh, e) ? !0 : Cn.call(_h, e) ? !1 : H1.test(e) ? xh[e] = !0 : (_h[e] = !0, !1);
  }
  function Pl(e, t, n) {
    if (P1(t))
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
  function zn(e, t, n, i) {
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
  function Er(e) {
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
                  var G = V;
                }
                Reflect.construct(e, [], W);
              } else {
                try {
                  W.call();
                } catch (V) {
                  G = V;
                }
                e.call(W.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (V) {
                G = V;
              }
              (W = e()) && typeof W.catch == "function" && W.catch(function() {
              });
            }
          } catch (V) {
            if (V && G && typeof V.stack == "string")
              return [V.stack, G.stack];
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
      var f = i.DetermineComponentFrameRoot(), _ = f[0], T = f[1];
      if (_ && T) {
        var D = _.split(`
`), P = T.split(`
`);
        for (o = i = 0; i < D.length && !D[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; o < P.length && !P[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (i === D.length || o === P.length)
          for (i = D.length - 1, o = P.length - 1; 1 <= i && 0 <= o && D[i] !== P[o]; )
            o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (D[i] !== P[o]) {
            if (i !== 1 || o !== 1)
              do
                if (i--, o--, 0 > o || D[i] !== P[o]) {
                  var X = `
` + D[i].replace(" at new ", " at ");
                  return e.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", e.displayName)), X;
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      tu = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Er(n) : "";
  }
  function q1(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Er(e.type);
      case 16:
        return Er("Lazy");
      case 13:
        return Er("Suspense");
      case 19:
        return Er("SuspenseList");
      case 0:
      case 15:
        return nu(e.type, !1);
      case 11:
        return nu(e.type.render, !1);
      case 1:
        return nu(e.type, !0);
      case 31:
        return Er("Activity");
      default:
        return "";
    }
  }
  function Ch(e) {
    try {
      var t = "";
      do
        t += q1(e), e = e.return;
      while (e);
      return t;
    } catch (n) {
      return `
Error generating stack: ` + n.message + `
` + n.stack;
    }
  }
  function rn(e) {
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
  function I1(e) {
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
    e._valueTracker || (e._valueTracker = I1(e));
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
  var G1 = /[\n"\\]/g;
  function ln(e) {
    return e.replace(
      G1,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function au(e, t, n, i, o, f, _, T) {
    e.name = "", _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" ? e.type = _ : e.removeAttribute("type"), t != null ? _ === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + rn(t)) : e.value !== "" + rn(t) && (e.value = "" + rn(t)) : _ !== "submit" && _ !== "reset" || e.removeAttribute("value"), t != null ? ru(e, _, rn(t)) : n != null ? ru(e, _, rn(n)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), T != null && typeof T != "function" && typeof T != "symbol" && typeof T != "boolean" ? e.name = "" + rn(T) : e.removeAttribute("name");
  }
  function wh(e, t, n, i, o, f, _, T) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), t != null || n != null) {
      if (!(f !== "submit" && f !== "reset" || t != null))
        return;
      n = n != null ? "" + rn(n) : "", t = t != null ? "" + rn(t) : n, T || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = T ? e.checked : !!i, e.defaultChecked = !!i, _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" && (e.name = _);
  }
  function ru(e, t, n) {
    t === "number" && Gl(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Cr(e, t, n, i) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++)
        t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + rn(n), t = null, o = 0; o < e.length; o++) {
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
    if (t != null && (t = "" + rn(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + rn(n) : "";
  }
  function Oh(e, t, n, i) {
    if (t == null) {
      if (i != null) {
        if (n != null) throw Error(s(92));
        if (he(i)) {
          if (1 < i.length) throw Error(s(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), t = n;
    }
    n = rn(t), e.defaultValue = n, i = e.textContent, i === n && i !== "" && i !== null && (e.value = i);
  }
  function Ar(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var V1 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Dh(e, t, n) {
    var i = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? i ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : i ? e.setProperty(t, n) : typeof n != "number" || n === 0 || V1.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
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
  var Y1 = /* @__PURE__ */ new Map([
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
  ]), F1 = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Vl(e) {
    return F1.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  var lu = null;
  function su(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Tr = null, wr = null;
  function Rh(e) {
    var t = Sr(e);
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
              'input[name="' + ln(
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
          t = n.value, t != null && Cr(e, !!n.multiple, t, !1);
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
      if (ou = !1, (Tr !== null || wr !== null) && (Os(), Tr && (t = Tr, e = wr, wr = Tr = null, Rh(t), e)))
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
  var Un = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), uu = !1;
  if (Un)
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
  var oa = null, cu = null, Yl = null;
  function jh() {
    if (Yl) return Yl;
    var e, t = cu, n = t.length, i, o = "value" in oa ? oa.value : oa.textContent, f = o.length;
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
      for (var T in e)
        e.hasOwnProperty(T) && (n = e[T], this[T] = n ? n(f) : f[T]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Xl : Lh, this.isPropagationStopped = Lh, this;
    }
    return y(t.prototype, {
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
  var Ga = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ql = Lt(Ga), Ei = y({}, Ga, { view: 0, detail: 0 }), X1 = Lt(Ei), fu, hu, Ci, Zl = y({}, Ei, {
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
  }), Bh = Lt(Zl), Q1 = y({}, Zl, { dataTransfer: 0 }), Z1 = Lt(Q1), K1 = y({}, Ei, { relatedTarget: 0 }), du = Lt(K1), J1 = y({}, Ga, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), W1 = Lt(J1), $1 = y({}, Ga, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), ey = Lt($1), ty = y({}, Ga, { data: 0 }), zh = Lt(ty), ny = {
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
  }, ay = {
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
  }, ry = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function iy(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ry[e]) ? !!t[e] : !1;
  }
  function pu() {
    return iy;
  }
  var ly = y({}, Ei, {
    key: function(e) {
      if (e.key) {
        var t = ny[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = Fl(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? ay[e.keyCode] || "Unidentified" : "";
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
  }), sy = Lt(ly), oy = y({}, Zl, {
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
  }), Uh = Lt(oy), uy = y({}, Ei, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pu
  }), cy = Lt(uy), fy = y({}, Ga, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), hy = Lt(fy), dy = y({}, Zl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), py = Lt(dy), my = y({}, Ga, {
    newState: 0,
    oldState: 0
  }), gy = Lt(my), vy = [9, 13, 27, 32], mu = Un && "CompositionEvent" in window, Ai = null;
  Un && "documentMode" in document && (Ai = document.documentMode);
  var yy = Un && "TextEvent" in window && !Ai, Hh = Un && (!mu || Ai && 8 < Ai && 11 >= Ai), Ph = " ", qh = !1;
  function Ih(e, t) {
    switch (e) {
      case "keyup":
        return vy.indexOf(t.keyCode) !== -1;
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
  var Nr = !1;
  function by(e, t) {
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
  function Sy(e, t) {
    if (Nr)
      return e === "compositionend" || !mu && Ih(e, t) ? (e = jh(), Yl = cu = oa = null, Nr = !1, e) : null;
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
  var _y = {
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
    return t === "input" ? !!_y[e.type] : t === "textarea";
  }
  function Yh(e, t, n, i) {
    Tr ? wr ? wr.push(i) : wr = [i] : Tr = i, t = Ls(t, "onChange"), 0 < t.length && (n = new Ql(
      "onChange",
      "change",
      null,
      n,
      i
    ), e.push({ event: n, listeners: t }));
  }
  var Ti = null, wi = null;
  function xy(e) {
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
  if (Un) {
    var gu;
    if (Un) {
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
      ), kh(xy, t);
    }
  }
  function Ey(e, t, n) {
    e === "focusin" ? (Zh(), Ti = t, wi = n, Ti.attachEvent("onpropertychange", Kh)) : e === "focusout" && Zh();
  }
  function Cy(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Kl(wi);
  }
  function Ay(e, t) {
    if (e === "click") return Kl(t);
  }
  function Ty(e, t) {
    if (e === "input" || e === "change")
      return Kl(t);
  }
  function wy(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Yt = typeof Object.is == "function" ? Object.is : wy;
  function Ni(e, t) {
    if (Yt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var o = n[i];
      if (!Cn.call(t, o) || !Yt(e[o], t[o]))
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
  var Ny = Un && "documentMode" in document && 11 >= document.documentMode, Or = null, bu = null, Oi = null, Su = !1;
  function td(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Su || Or == null || Or !== Gl(i) || (i = Or, "selectionStart" in i && yu(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
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
    ), e.push({ event: t, listeners: i }), t.target = Or)));
  }
  function Va(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Dr = {
    animationend: Va("Animation", "AnimationEnd"),
    animationiteration: Va("Animation", "AnimationIteration"),
    animationstart: Va("Animation", "AnimationStart"),
    transitionrun: Va("Transition", "TransitionRun"),
    transitionstart: Va("Transition", "TransitionStart"),
    transitioncancel: Va("Transition", "TransitionCancel"),
    transitionend: Va("Transition", "TransitionEnd")
  }, _u = {}, nd = {};
  Un && (nd = document.createElement("div").style, "AnimationEvent" in window || (delete Dr.animationend.animation, delete Dr.animationiteration.animation, delete Dr.animationstart.animation), "TransitionEvent" in window || delete Dr.transitionend.transition);
  function Ya(e) {
    if (_u[e]) return _u[e];
    if (!Dr[e]) return e;
    var t = Dr[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in nd)
        return _u[e] = t[n];
    return e;
  }
  var ad = Ya("animationend"), rd = Ya("animationiteration"), id = Ya("animationstart"), Oy = Ya("transitionrun"), Dy = Ya("transitionstart"), My = Ya("transitioncancel"), ld = Ya("transitionend"), sd = /* @__PURE__ */ new Map(), xu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  xu.push("scrollEnd");
  function vn(e, t) {
    sd.set(e, t), Ia(t, [e]);
  }
  var od = /* @__PURE__ */ new WeakMap();
  function sn(e, t) {
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
  var on = [], Mr = 0, Eu = 0;
  function Jl() {
    for (var e = Mr, t = Eu = Mr = 0; t < e; ) {
      var n = on[t];
      on[t++] = null;
      var i = on[t];
      on[t++] = null;
      var o = on[t];
      on[t++] = null;
      var f = on[t];
      if (on[t++] = null, i !== null && o !== null) {
        var _ = i.pending;
        _ === null ? o.next = o : (o.next = _.next, _.next = o), i.pending = o;
      }
      f !== 0 && ud(n, o, f);
    }
  }
  function Wl(e, t, n, i) {
    on[Mr++] = e, on[Mr++] = t, on[Mr++] = n, on[Mr++] = i, Eu |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
  }
  function Cu(e, t, n, i) {
    return Wl(e, t, n, i), $l(e);
  }
  function Rr(e, t) {
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
  var kr = {};
  function Ry(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ft(e, t, n, i) {
    return new Ry(e, t, n, i);
  }
  function Au(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Hn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ft(
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
      _ = j0(
        e,
        n,
        se.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case $:
          return e = Ft(31, n, t, o), e.elementType = $, e.lanes = f, e;
        case h:
          return Fa(n.children, o, f, t);
        case x:
          _ = 8, o |= 24;
          break;
        case C:
          return e = Ft(12, n, t, o | 2), e.elementType = C, e.lanes = f, e;
        case w:
          return e = Ft(13, n, t, o), e.elementType = w, e.lanes = f, e;
        case R:
          return e = Ft(19, n, t, o), e.elementType = R, e.lanes = f, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case O:
              case M:
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
              case I:
                _ = 16, i = null;
                break e;
            }
          _ = 29, n = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), i = null;
      }
    return t = Ft(_, n, t, o), t.elementType = e, t.type = i, t.lanes = f, t;
  }
  function Fa(e, t, n, i) {
    return e = Ft(7, e, i, t), e.lanes = n, e;
  }
  function Tu(e, t, n) {
    return e = Ft(6, e, null, t), e.lanes = n, e;
  }
  function wu(e, t, n) {
    return t = Ft(
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
  var jr = [], Lr = 0, ts = null, ns = 0, un = [], cn = 0, Xa = null, Pn = 1, qn = "";
  function Qa(e, t) {
    jr[Lr++] = ns, jr[Lr++] = ts, ts = e, ns = t;
  }
  function fd(e, t, n) {
    un[cn++] = Pn, un[cn++] = qn, un[cn++] = Xa, Xa = e;
    var i = Pn;
    e = qn;
    var o = 32 - ge(i) - 1;
    i &= ~(1 << o), n += 1;
    var f = 32 - ge(t) + o;
    if (30 < f) {
      var _ = o - o % 5;
      f = (i & (1 << _) - 1).toString(32), i >>= _, o -= _, Pn = 1 << 32 - ge(t) + o | n << o | i, qn = f + e;
    } else
      Pn = 1 << f | n << o | i, qn = e;
  }
  function Nu(e) {
    e.return !== null && (Qa(e, 1), fd(e, 1, 0));
  }
  function Ou(e) {
    for (; e === ts; )
      ts = jr[--Lr], jr[Lr] = null, ns = jr[--Lr], jr[Lr] = null;
    for (; e === Xa; )
      Xa = un[--cn], un[cn] = null, qn = un[--cn], un[cn] = null, Pn = un[--cn], un[cn] = null;
  }
  var Dt = null, tt = null, qe = !1, Za = null, Tn = !1, Du = Error(s(519));
  function Ka(e) {
    var t = Error(s(418, ""));
    throw Ri(sn(t, e)), Du;
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
    n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || i.suppressHydrationWarning === !0 || Om(t.textContent, n) ? (i.popover != null && (Me("beforetoggle", t), Me("toggle", t)), i.onScroll != null && Me("scroll", t), i.onScrollEnd != null && Me("scrollend", t), i.onClick != null && (t.onclick = Bs), t = !0) : t = !1, t || Ka(e);
  }
  function dd(e) {
    for (Dt = e.return; Dt; )
      switch (Dt.tag) {
        case 5:
        case 13:
          Tn = !1;
          return;
        case 27:
        case 3:
          Tn = !0;
          return;
        default:
          Dt = Dt.return;
      }
  }
  function Di(e) {
    if (e !== Dt) return !1;
    if (!qe) return dd(e), qe = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Fc(e.type, e.memoizedProps)), n = !n), n && tt && Ka(e), dd(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (n = e.data, n === "/$") {
              if (t === 0) {
                tt = bn(e.nextSibling);
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
      t === 27 ? (t = tt, Ca(e.type) ? (e = Kc, Kc = null, tt = e) : tt = t) : tt = Dt ? bn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Mi() {
    tt = Dt = null, qe = !1;
  }
  function pd() {
    var e = Za;
    return e !== null && (Ut === null ? Ut = e : Ut.push.apply(
      Ut,
      e
    ), Za = null), e;
  }
  function Ri(e) {
    Za === null ? Za = [e] : Za.push(e);
  }
  var Mu = Q(null), Ja = null, In = null;
  function ua(e, t, n) {
    le(Mu, t._currentValue), t._currentValue = n;
  }
  function Gn(e) {
    e._currentValue = Mu.current, ne(Mu);
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
          var T = f;
          f = o;
          for (var D = 0; D < t.length; D++)
            if (T.context === t[D]) {
              f.lanes |= n, T = f.alternate, T !== null && (T.lanes |= n), Ru(
                f.return,
                n,
                e
              ), i || (_ = null);
              break e;
            }
          f = T.next;
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
          var T = o.type;
          Yt(o.pendingProps.value, _.value) || (e !== null ? e.push(T) : e = [T]);
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
      if (!Yt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Wa(e) {
    Ja = e, In = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Ct(e) {
    return md(Ja, e);
  }
  function rs(e, t) {
    return Ja === null && Wa(e), md(e, t);
  }
  function md(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, In === null) {
      if (e === null) throw Error(s(308));
      In = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else In = In.next = t;
    return n;
  }
  var ky = typeof AbortController < "u" ? AbortController : function() {
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
  }, jy = r.unstable_scheduleCallback, Ly = r.unstable_NormalPriority, ht = {
    $$typeof: M,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ju() {
    return {
      controller: new ky(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function ji(e) {
    e.refCount--, e.refCount === 0 && jy(Ly, function() {
      e.controller.abort();
    });
  }
  var Li = null, Lu = 0, Br = 0, zr = null;
  function By(e, t) {
    if (Li === null) {
      var n = Li = [];
      Lu = 0, Br = zc(), zr = {
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
      zr !== null && (zr.status = "fulfilled");
      var e = Li;
      Li = null, Br = 0, zr = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function zy(e, t) {
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
    typeof t == "object" && t !== null && typeof t.then == "function" && By(e, t), vd !== null && vd(e, t);
  };
  var $a = Q(null);
  function Bu() {
    var e = $a.current;
    return e !== null ? e : Ze.pooledCache;
  }
  function is(e, t) {
    t === null ? le($a, $a.current) : le($a, t.pool);
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
          if (e = Ze, e !== null && 100 < e.shellSuspendCounter)
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
  var ca = !1;
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
  function fa(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ha(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Ge & 2) !== 0) {
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
      var e = zr;
      if (e !== null) throw e;
    }
  }
  function Pi(e, t, n, i) {
    qu = !1;
    var o = e.updateQueue;
    ca = !1;
    var f = o.firstBaseUpdate, _ = o.lastBaseUpdate, T = o.shared.pending;
    if (T !== null) {
      o.shared.pending = null;
      var D = T, P = D.next;
      D.next = null, _ === null ? f = P : _.next = P, _ = D;
      var X = e.alternate;
      X !== null && (X = X.updateQueue, T = X.lastBaseUpdate, T !== _ && (T === null ? X.firstBaseUpdate = P : T.next = P, X.lastBaseUpdate = D));
    }
    if (f !== null) {
      var W = o.baseState;
      _ = 0, X = P = D = null, T = f;
      do {
        var G = T.lane & -536870913, V = G !== T.lane;
        if (V ? (Be & G) === G : (i & G) === G) {
          G !== 0 && G === Br && (qu = !0), X !== null && (X = X.next = {
            lane: 0,
            tag: T.tag,
            payload: T.payload,
            callback: null,
            next: null
          });
          e: {
            var be = e, ve = T;
            G = t;
            var Xe = n;
            switch (ve.tag) {
              case 1:
                if (be = ve.payload, typeof be == "function") {
                  W = be.call(Xe, W, G);
                  break e;
                }
                W = be;
                break e;
              case 3:
                be.flags = be.flags & -65537 | 128;
              case 0:
                if (be = ve.payload, G = typeof be == "function" ? be.call(Xe, W, G) : be, G == null) break e;
                W = y({}, W, G);
                break e;
              case 2:
                ca = !0;
            }
          }
          G = T.callback, G !== null && (e.flags |= 64, V && (e.flags |= 8192), V = o.callbacks, V === null ? o.callbacks = [G] : V.push(G));
        } else
          V = {
            lane: G,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null
          }, X === null ? (P = X = V, D = W) : X = X.next = V, _ |= G;
        if (T = T.next, T === null) {
          if (T = o.shared.pending, T === null)
            break;
          V = T, T = V.next, V.next = null, o.lastBaseUpdate = V, o.shared.pending = null;
        }
      } while (!0);
      X === null && (D = W), o.baseState = D, o.firstBaseUpdate = P, o.lastBaseUpdate = X, f === null && (o.shared.lanes = 0), Sa |= _, e.lanes = _, e.memoizedState = W;
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
  var Ur = Q(null), os = Q(0);
  function Td(e, t) {
    e = Kn, le(os, e), le(Ur, t), Kn = e | t.baseLanes;
  }
  function Iu() {
    le(os, Kn), le(Ur, Ur.current);
  }
  function Gu() {
    Kn = os.current, ne(Ur), ne(os);
  }
  var da = 0, we = null, Ye = null, ot = null, us = !1, Hr = !1, er = !1, cs = 0, qi = 0, Pr = null, Uy = 0;
  function it() {
    throw Error(s(321));
  }
  function Vu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Yt(e[n], t[n])) return !1;
    return !0;
  }
  function Yu(e, t, n, i, o, f) {
    return da = f, we = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, U.H = e === null || e.memoizedState === null ? up : cp, er = !1, f = n(i, o), er = !1, Hr && (f = Nd(
      t,
      n,
      i,
      o
    )), wd(e), f;
  }
  function wd(e) {
    U.H = gs;
    var t = Ye !== null && Ye.next !== null;
    if (da = 0, ot = Ye = we = null, us = !1, qi = 0, Pr = null, t) throw Error(s(300));
    e === null || gt || (e = e.dependencies, e !== null && as(e) && (gt = !0));
  }
  function Nd(e, t, n, i) {
    we = e;
    var o = 0;
    do {
      if (Hr && (Pr = null), qi = 0, Hr = !1, 25 <= o) throw Error(s(301));
      if (o += 1, ot = Ye = null, e.updateQueue != null) {
        var f = e.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      U.H = Yy, f = t(n, i);
    } while (Hr);
    return f;
  }
  function Hy() {
    var e = U.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ii(t) : t, e = e.useState()[0], (Ye !== null ? Ye.memoizedState : null) !== e && (we.flags |= 1024), t;
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
    da = 0, ot = Ye = we = null, Hr = !1, qi = cs = 0, Pr = null;
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
    if (Ye === null) {
      var e = we.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ye.next;
    var t = ot === null ? we.memoizedState : ot.next;
    if (t !== null)
      ot = t, Ye = e;
    else {
      if (e === null)
        throw we.alternate === null ? Error(s(467)) : Error(s(310));
      Ye = e, e = {
        memoizedState: Ye.memoizedState,
        baseState: Ye.baseState,
        baseQueue: Ye.baseQueue,
        queue: Ye.queue,
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
    return qi += 1, Pr === null && (Pr = []), e = _d(Pr, e, t), t = we, (ot === null ? t.memoizedState : ot.next) === null && (t = t.alternate, U.H = t === null || t.memoizedState === null ? up : cp), e;
  }
  function fs(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ii(e);
      if (e.$$typeof === M) return Ct(e);
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
        n[i] = q;
    return t.index++, n;
  }
  function Vn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function hs(e) {
    var t = ut();
    return Ju(t, Ye, e);
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
      var T = _ = null, D = null, P = t, X = !1;
      do {
        var W = P.lane & -536870913;
        if (W !== P.lane ? (Be & W) === W : (da & W) === W) {
          var G = P.revertLane;
          if (G === 0)
            D !== null && (D = D.next = {
              lane: 0,
              revertLane: 0,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            }), W === Br && (X = !0);
          else if ((da & G) === G) {
            P = P.next, G === Br && (X = !0);
            continue;
          } else
            W = {
              lane: 0,
              revertLane: P.revertLane,
              action: P.action,
              hasEagerState: P.hasEagerState,
              eagerState: P.eagerState,
              next: null
            }, D === null ? (T = D = W, _ = f) : D = D.next = W, we.lanes |= G, Sa |= G;
          W = P.action, er && n(f, W), f = P.hasEagerState ? P.eagerState : n(f, W);
        } else
          G = {
            lane: W,
            revertLane: P.revertLane,
            action: P.action,
            hasEagerState: P.hasEagerState,
            eagerState: P.eagerState,
            next: null
          }, D === null ? (T = D = G, _ = f) : D = D.next = G, we.lanes |= W, Sa |= W;
        P = P.next;
      } while (P !== null && P !== t);
      if (D === null ? _ = f : D.next = T, !Yt(f, e.memoizedState) && (gt = !0, X && (n = zr, n !== null)))
        throw n;
      e.memoizedState = f, e.baseState = _, e.baseQueue = D, i.lastRenderedState = f;
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
      Yt(f, t.memoizedState) || (gt = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), n.lastRenderedState = f;
    }
    return [f, i];
  }
  function Od(e, t, n) {
    var i = we, o = ut(), f = qe;
    if (f) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = t();
    var _ = !Yt(
      (Ye || o).memoizedState,
      n
    );
    _ && (o.memoizedState = n, gt = !0), o = o.queue;
    var T = Rd.bind(null, i, o, e);
    if (Gi(2048, 8, T, [e]), o.getSnapshot !== t || _ || ot !== null && ot.memoizedState.tag & 1) {
      if (i.flags |= 2048, qr(
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
      ), Ze === null) throw Error(s(349));
      f || (da & 124) !== 0 || Dd(i, t, n);
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
      return !Yt(e, n);
    } catch {
      return !0;
    }
  }
  function jd(e) {
    var t = Rr(e, 2);
    t !== null && Jt(t, e, 2);
  }
  function $u(e) {
    var t = Bt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), er) {
        He(!0);
        try {
          n();
        } finally {
          He(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Vn,
      lastRenderedState: e
    }, t;
  }
  function Ld(e, t, n, i) {
    return e.baseState = n, Ju(
      e,
      Ye,
      typeof i == "function" ? i : Vn
    );
  }
  function Py(e, t, n, i, o) {
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
        var T = n(o, i), D = U.S;
        D !== null && D(_, T), zd(e, t, T);
      } catch (P) {
        ec(e, t, P);
      } finally {
        U.T = f;
      }
    } else
      try {
        f = n(o, i), zd(e, t, f);
      } catch (P) {
        ec(e, t, P);
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
    if (qe) {
      var n = Ze.formState;
      if (n !== null) {
        e: {
          var i = we;
          if (qe) {
            if (tt) {
              t: {
                for (var o = tt, f = Tn; o.nodeType !== 8; ) {
                  if (!f) {
                    o = null;
                    break t;
                  }
                  if (o = bn(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break t;
                  }
                }
                f = o.data, o = f === "F!" || f === "F" ? o : null;
              }
              if (o) {
                tt = bn(
                  o.nextSibling
                ), i = o.data === "F!";
                break e;
              }
            }
            Ka(i);
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
    }, i.queue = o, n = Py.bind(
      null,
      we,
      o,
      f,
      n
    ), o.dispatch = n, i.memoizedState = e, [t, n, !1];
  }
  function Id(e) {
    var t = ut();
    return Gd(t, Ye, e);
  }
  function Gd(e, t, n) {
    if (t = Ju(
      e,
      t,
      Pd
    )[0], e = hs(Vn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var i = Ii(t);
      } catch (_) {
        throw _ === Bi ? ls : _;
      }
    else i = t;
    t = ut();
    var o = t.queue, f = o.dispatch;
    return n !== t.memoizedState && (we.flags |= 2048, qr(
      9,
      ds(),
      qy.bind(null, o, n),
      null
    )), [i, f, e];
  }
  function qy(e, t) {
    e.action = t;
  }
  function Vd(e) {
    var t = ut(), n = Ye;
    if (n !== null)
      return Gd(t, n, e);
    ut(), t = t.memoizedState, n = ut();
    var i = n.queue.dispatch;
    return n.memoizedState = e, [t, i, !1];
  }
  function qr(e, t, n, i) {
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
    i = i === void 0 ? null : i, we.flags |= e, o.memoizedState = qr(
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
    Ye !== null && i !== null && Vu(i, Ye.memoizedState.deps) ? o.memoizedState = qr(t, f, n, i) : (we.flags |= e, o.memoizedState = qr(
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
    if (i = e(), er) {
      He(!0);
      try {
        e();
      } finally {
        He(!1);
      }
    }
    return n.memoizedState = [i, t], i;
  }
  function nc(e, t, n) {
    return n === void 0 || (da & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = n, e = nm(), we.lanes |= e, Sa |= e, n);
  }
  function ep(e, t, n, i) {
    return Yt(n, t) ? n : Ur.current !== null ? (e = nc(e, n, i), Yt(e, t) || (gt = !0), e) : (da & 42) === 0 ? (gt = !0, e.memoizedState = n) : (e = nm(), we.lanes |= e, Sa |= e, t);
  }
  function tp(e, t, n, i, o) {
    var f = ee.p;
    ee.p = f !== 0 && 8 > f ? f : 8;
    var _ = U.T, T = {};
    U.T = T, ic(e, !1, t, n);
    try {
      var D = o(), P = U.S;
      if (P !== null && P(T, D), D !== null && typeof D == "object" && typeof D.then == "function") {
        var X = zy(
          D,
          i
        );
        Vi(
          e,
          t,
          X,
          Kt(e)
        );
      } else
        Vi(
          e,
          t,
          i,
          Kt(e)
        );
    } catch (W) {
      Vi(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: W },
        Kt()
      );
    } finally {
      ee.p = f, U.T = _;
    }
  }
  function Iy() {
  }
  function ac(e, t, n, i) {
    if (e.tag !== 5) throw Error(s(476));
    var o = np(e).queue;
    tp(
      e,
      o,
      t,
      ie,
      n === null ? Iy : function() {
        return ap(e), n(i);
      }
    );
  }
  function np(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ie,
      baseState: ie,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Vn,
        lastRenderedState: ie
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
        lastRenderedReducer: Vn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function ap(e) {
    var t = np(e).next.queue;
    Vi(e, t, {}, Kt());
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
  function Gy(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Kt();
          e = fa(n);
          var i = ha(t, e, n);
          i !== null && (Jt(i, t, n), Ui(i, t, n)), t = { cache: ju() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Vy(e, t, n) {
    var i = Kt();
    n = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ms(e) ? sp(t, n) : (n = Cu(e, t, n, i), n !== null && (Jt(n, e, i), op(n, t, i)));
  }
  function lp(e, t, n) {
    var i = Kt();
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
          var _ = t.lastRenderedState, T = f(_, n);
          if (o.hasEagerState = !0, o.eagerState = T, Yt(T, _))
            return Wl(e, t, o, 0), Ze === null && Jl(), !1;
        } catch {
        } finally {
        }
      if (n = Cu(e, t, o, i), n !== null)
        return Jt(n, e, i), op(n, t, i), !0;
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
      ), t !== null && Jt(t, e, 2);
  }
  function ms(e) {
    var t = e.alternate;
    return e === we || t !== null && t === we;
  }
  function sp(e, t) {
    Hr = us = !0;
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
      if (er) {
        He(!0);
        try {
          e();
        } finally {
          He(!1);
        }
      }
      return n.memoizedState = [i, t], i;
    },
    useReducer: function(e, t, n) {
      var i = Bt();
      if (n !== void 0) {
        var o = n(t);
        if (er) {
          He(!0);
          try {
            n(t);
          } finally {
            He(!1);
          }
        }
      } else o = t;
      return i.memoizedState = i.baseState = o, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: o
      }, i.queue = e, e = e.dispatch = Vy.bind(
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
      if (qe) {
        if (n === void 0)
          throw Error(s(407));
        n = n();
      } else {
        if (n = t(), Ze === null)
          throw Error(s(349));
        (Be & 124) !== 0 || Dd(i, t, n);
      }
      o.memoizedState = n;
      var f = { value: n, getSnapshot: t };
      return o.queue = f, Fd(Rd.bind(null, i, f, e), [
        e
      ]), i.flags |= 2048, qr(
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
      var e = Bt(), t = Ze.identifierPrefix;
      if (qe) {
        var n = qn, i = Pn;
        n = (i & ~(1 << 32 - ge(i) - 1)).toString(32) + n, t = "«" + t + "R" + n, n = cs++, 0 < n && (t += "H" + n.toString(32)), t += "»";
      } else
        n = Uy++, t = "«" + t + "r" + n.toString(32) + "»";
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
      return Bt().memoizedState = Gy.bind(
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
      return hs(Vn);
    },
    useDebugValue: tc,
    useDeferredValue: function(e, t) {
      var n = ut();
      return ep(
        n,
        Ye.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = hs(Vn)[0], t = ut().memoizedState;
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
      return Ld(n, Ye, e, t);
    },
    useMemoCache: Ku,
    useCacheRefresh: ip
  }, Yy = {
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
      return Wu(Vn);
    },
    useDebugValue: tc,
    useDeferredValue: function(e, t) {
      var n = ut();
      return Ye === null ? nc(n, e, t) : ep(
        n,
        Ye.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Wu(Vn)[0], t = ut().memoizedState;
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
      return Ye !== null ? Ld(n, Ye, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Ku,
    useCacheRefresh: ip
  }, Ir = null, Yi = 0;
  function vs(e) {
    var t = Yi;
    return Yi += 1, Ir === null && (Ir = []), _d(Ir, e, t);
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
      return z = Hn(z, B), z.index = 0, z.sibling = null, z;
    }
    function f(z, B, H) {
      return z.index = H, e ? (H = z.alternate, H !== null ? (H = H.index, H < B ? (z.flags |= 67108866, B) : H) : (z.flags |= 67108866, B)) : (z.flags |= 1048576, B);
    }
    function _(z) {
      return e && z.alternate === null && (z.flags |= 67108866), z;
    }
    function T(z, B, H, Z) {
      return B === null || B.tag !== 6 ? (B = Tu(H, z.mode, Z), B.return = z, B) : (B = o(B, H), B.return = z, B);
    }
    function D(z, B, H, Z) {
      var ce = H.type;
      return ce === h ? X(
        z,
        B,
        H.props.children,
        Z,
        H.key
      ) : B !== null && (B.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === I && fp(ce) === B.type) ? (B = o(B, H.props), Fi(B, H), B.return = z, B) : (B = es(
        H.type,
        H.key,
        H.props,
        null,
        z.mode,
        Z
      ), Fi(B, H), B.return = z, B);
    }
    function P(z, B, H, Z) {
      return B === null || B.tag !== 4 || B.stateNode.containerInfo !== H.containerInfo || B.stateNode.implementation !== H.implementation ? (B = wu(H, z.mode, Z), B.return = z, B) : (B = o(B, H.children || []), B.return = z, B);
    }
    function X(z, B, H, Z, ce) {
      return B === null || B.tag !== 7 ? (B = Fa(
        H,
        z.mode,
        Z,
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
          case m:
            return H = es(
              B.type,
              B.key,
              B.props,
              null,
              z.mode,
              H
            ), Fi(H, B), H.return = z, H;
          case v:
            return B = wu(
              B,
              z.mode,
              H
            ), B.return = z, B;
          case I:
            var Z = B._init;
            return B = Z(B._payload), W(z, B, H);
        }
        if (he(B) || Y(B))
          return B = Fa(
            B,
            z.mode,
            H,
            null
          ), B.return = z, B;
        if (typeof B.then == "function")
          return W(z, vs(B), H);
        if (B.$$typeof === M)
          return W(
            z,
            rs(z, B),
            H
          );
        ys(z, B);
      }
      return null;
    }
    function G(z, B, H, Z) {
      var ce = B !== null ? B.key : null;
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return ce !== null ? null : T(z, B, "" + H, Z);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case m:
            return H.key === ce ? D(z, B, H, Z) : null;
          case v:
            return H.key === ce ? P(z, B, H, Z) : null;
          case I:
            return ce = H._init, H = ce(H._payload), G(z, B, H, Z);
        }
        if (he(H) || Y(H))
          return ce !== null ? null : X(z, B, H, Z, null);
        if (typeof H.then == "function")
          return G(
            z,
            B,
            vs(H),
            Z
          );
        if (H.$$typeof === M)
          return G(
            z,
            B,
            rs(z, H),
            Z
          );
        ys(z, H);
      }
      return null;
    }
    function V(z, B, H, Z, ce) {
      if (typeof Z == "string" && Z !== "" || typeof Z == "number" || typeof Z == "bigint")
        return z = z.get(H) || null, T(B, z, "" + Z, ce);
      if (typeof Z == "object" && Z !== null) {
        switch (Z.$$typeof) {
          case m:
            return z = z.get(
              Z.key === null ? H : Z.key
            ) || null, D(B, z, Z, ce);
          case v:
            return z = z.get(
              Z.key === null ? H : Z.key
            ) || null, P(B, z, Z, ce);
          case I:
            var Ne = Z._init;
            return Z = Ne(Z._payload), V(
              z,
              B,
              H,
              Z,
              ce
            );
        }
        if (he(Z) || Y(Z))
          return z = z.get(H) || null, X(B, z, Z, ce, null);
        if (typeof Z.then == "function")
          return V(
            z,
            B,
            H,
            vs(Z),
            ce
          );
        if (Z.$$typeof === M)
          return V(
            z,
            B,
            H,
            rs(B, Z),
            ce
          );
        ys(B, Z);
      }
      return null;
    }
    function be(z, B, H, Z) {
      for (var ce = null, Ne = null, de = B, ye = B = 0, yt = null; de !== null && ye < H.length; ye++) {
        de.index > ye ? (yt = de, de = null) : yt = de.sibling;
        var Pe = G(
          z,
          de,
          H[ye],
          Z
        );
        if (Pe === null) {
          de === null && (de = yt);
          break;
        }
        e && de && Pe.alternate === null && t(z, de), B = f(Pe, B, ye), Ne === null ? ce = Pe : Ne.sibling = Pe, Ne = Pe, de = yt;
      }
      if (ye === H.length)
        return n(z, de), qe && Qa(z, ye), ce;
      if (de === null) {
        for (; ye < H.length; ye++)
          de = W(z, H[ye], Z), de !== null && (B = f(
            de,
            B,
            ye
          ), Ne === null ? ce = de : Ne.sibling = de, Ne = de);
        return qe && Qa(z, ye), ce;
      }
      for (de = i(de); ye < H.length; ye++)
        yt = V(
          de,
          z,
          ye,
          H[ye],
          Z
        ), yt !== null && (e && yt.alternate !== null && de.delete(
          yt.key === null ? ye : yt.key
        ), B = f(
          yt,
          B,
          ye
        ), Ne === null ? ce = yt : Ne.sibling = yt, Ne = yt);
      return e && de.forEach(function(Oa) {
        return t(z, Oa);
      }), qe && Qa(z, ye), ce;
    }
    function ve(z, B, H, Z) {
      if (H == null) throw Error(s(151));
      for (var ce = null, Ne = null, de = B, ye = B = 0, yt = null, Pe = H.next(); de !== null && !Pe.done; ye++, Pe = H.next()) {
        de.index > ye ? (yt = de, de = null) : yt = de.sibling;
        var Oa = G(z, de, Pe.value, Z);
        if (Oa === null) {
          de === null && (de = yt);
          break;
        }
        e && de && Oa.alternate === null && t(z, de), B = f(Oa, B, ye), Ne === null ? ce = Oa : Ne.sibling = Oa, Ne = Oa, de = yt;
      }
      if (Pe.done)
        return n(z, de), qe && Qa(z, ye), ce;
      if (de === null) {
        for (; !Pe.done; ye++, Pe = H.next())
          Pe = W(z, Pe.value, Z), Pe !== null && (B = f(Pe, B, ye), Ne === null ? ce = Pe : Ne.sibling = Pe, Ne = Pe);
        return qe && Qa(z, ye), ce;
      }
      for (de = i(de); !Pe.done; ye++, Pe = H.next())
        Pe = V(de, z, ye, Pe.value, Z), Pe !== null && (e && Pe.alternate !== null && de.delete(Pe.key === null ? ye : Pe.key), B = f(Pe, B, ye), Ne === null ? ce = Pe : Ne.sibling = Pe, Ne = Pe);
      return e && de.forEach(function(F0) {
        return t(z, F0);
      }), qe && Qa(z, ye), ce;
    }
    function Xe(z, B, H, Z) {
      if (typeof H == "object" && H !== null && H.type === h && H.key === null && (H = H.props.children), typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case m:
            e: {
              for (var ce = H.key; B !== null; ) {
                if (B.key === ce) {
                  if (ce = H.type, ce === h) {
                    if (B.tag === 7) {
                      n(
                        z,
                        B.sibling
                      ), Z = o(
                        B,
                        H.props.children
                      ), Z.return = z, z = Z;
                      break e;
                    }
                  } else if (B.elementType === ce || typeof ce == "object" && ce !== null && ce.$$typeof === I && fp(ce) === B.type) {
                    n(
                      z,
                      B.sibling
                    ), Z = o(B, H.props), Fi(Z, H), Z.return = z, z = Z;
                    break e;
                  }
                  n(z, B);
                  break;
                } else t(z, B);
                B = B.sibling;
              }
              H.type === h ? (Z = Fa(
                H.props.children,
                z.mode,
                Z,
                H.key
              ), Z.return = z, z = Z) : (Z = es(
                H.type,
                H.key,
                H.props,
                null,
                z.mode,
                Z
              ), Fi(Z, H), Z.return = z, z = Z);
            }
            return _(z);
          case v:
            e: {
              for (ce = H.key; B !== null; ) {
                if (B.key === ce)
                  if (B.tag === 4 && B.stateNode.containerInfo === H.containerInfo && B.stateNode.implementation === H.implementation) {
                    n(
                      z,
                      B.sibling
                    ), Z = o(B, H.children || []), Z.return = z, z = Z;
                    break e;
                  } else {
                    n(z, B);
                    break;
                  }
                else t(z, B);
                B = B.sibling;
              }
              Z = wu(H, z.mode, Z), Z.return = z, z = Z;
            }
            return _(z);
          case I:
            return ce = H._init, H = ce(H._payload), Xe(
              z,
              B,
              H,
              Z
            );
        }
        if (he(H))
          return be(
            z,
            B,
            H,
            Z
          );
        if (Y(H)) {
          if (ce = Y(H), typeof ce != "function") throw Error(s(150));
          return H = ce.call(H), ve(
            z,
            B,
            H,
            Z
          );
        }
        if (typeof H.then == "function")
          return Xe(
            z,
            B,
            vs(H),
            Z
          );
        if (H.$$typeof === M)
          return Xe(
            z,
            B,
            rs(z, H),
            Z
          );
        ys(z, H);
      }
      return typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint" ? (H = "" + H, B !== null && B.tag === 6 ? (n(z, B.sibling), Z = o(B, H), Z.return = z, z = Z) : (n(z, B), Z = Tu(H, z.mode, Z), Z.return = z, z = Z), _(z)) : n(z, B);
    }
    return function(z, B, H, Z) {
      try {
        Yi = 0;
        var ce = Xe(
          z,
          B,
          H,
          Z
        );
        return Ir = null, ce;
      } catch (de) {
        if (de === Bi || de === ls) throw de;
        var Ne = Ft(29, de, null, z.mode);
        return Ne.lanes = Z, Ne.return = z, Ne;
      } finally {
      }
    };
  }
  var Gr = hp(!0), dp = hp(!1), fn = Q(null), wn = null;
  function pa(e) {
    var t = e.alternate;
    le(dt, dt.current & 1), le(fn, e), wn === null && (t === null || Ur.current !== null || t.memoizedState !== null) && (wn = e);
  }
  function pp(e) {
    if (e.tag === 22) {
      if (le(dt, dt.current), le(fn, e), wn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (wn = e);
      }
    } else ma();
  }
  function ma() {
    le(dt, dt.current), le(fn, fn.current);
  }
  function Yn(e) {
    ne(fn), wn === e && (wn = null), ne(dt);
  }
  var dt = Q(0);
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
    t = e.memoizedState, n = n(i, t), n = n == null ? t : y({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var sc = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var i = Kt(), o = fa(i);
      o.payload = t, n != null && (o.callback = n), t = ha(e, o, i), t !== null && (Jt(t, e, i), Ui(t, e, i));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var i = Kt(), o = fa(i);
      o.tag = 1, o.payload = t, n != null && (o.callback = n), t = ha(e, o, i), t !== null && (Jt(t, e, i), Ui(t, e, i));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Kt(), i = fa(n);
      i.tag = 2, t != null && (i.callback = t), t = ha(e, i, n), t !== null && (Jt(t, e, n), Ui(t, e, n));
    }
  };
  function mp(e, t, n, i, o, f, _) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, f, _) : t.prototype && t.prototype.isPureReactComponent ? !Ni(n, i) || !Ni(o, f) : !0;
  }
  function gp(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && sc.enqueueReplaceState(t, t.state, null);
  }
  function tr(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var i in t)
        i !== "ref" && (n[i] = t[i]);
    }
    if (e = e.defaultProps) {
      n === t && (n = y({}, n));
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
    return n = fa(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      _s(e, t);
    }, n;
  }
  function _p(e) {
    return e = fa(e), e.tag = 3, e;
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
      Sp(t, n, i), typeof o != "function" && (_a === null ? _a = /* @__PURE__ */ new Set([this]) : _a.add(this));
      var T = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: T !== null ? T : ""
      });
    });
  }
  function Fy(e, t, n, i, o) {
    if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (t = n.alternate, t !== null && ki(
        t,
        n,
        o,
        !0
      ), n = fn.current, n !== null) {
        switch (n.tag) {
          case 13:
            return wn === null ? Rc() : n.alternate === null && nt === 0 && (nt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = o, i === zu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), jc(e, i, o)), !1;
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
    if (qe)
      return t = fn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== Du && (e = Error(s(422), { cause: i }), Ri(sn(e, n)))) : (i !== Du && (t = Error(s(423), {
        cause: i
      }), Ri(
        sn(t, n)
      )), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = sn(i, n), o = oc(
        e.stateNode,
        i,
        o
      ), Pu(e, o), nt !== 4 && (nt = 2)), !1;
    var f = Error(s(520), { cause: i });
    if (f = sn(f, n), $i === null ? $i = [f] : $i.push(f), nt !== 4 && (nt = 2), t === null) return !0;
    i = sn(i, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = o & -o, n.lanes |= e, e = oc(n.stateNode, i, e), Pu(n, e), !1;
        case 1:
          if (t = n.type, f = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (_a === null || !_a.has(f))))
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
    t.child = e === null ? dp(t, null, n, i) : Gr(
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
      for (var T in i)
        T !== "ref" && (_[T] = i[T]);
    } else _ = i;
    return Wa(t), i = Yu(
      e,
      t,
      n,
      _,
      f,
      o
    ), T = Fu(), e !== null && !gt ? (Xu(e, t, o), Fn(e, t, o)) : (qe && T && Nu(t), t.flags |= 1, bt(e, t, i, o), t.child);
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
        return Fn(e, t, o);
    }
    return t.flags |= 1, e = Hn(f, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Tp(e, t, n, i, o) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Ni(f, i) && e.ref === t.ref)
        if (gt = !1, t.pendingProps = i = f, gc(e, o))
          (e.flags & 131072) !== 0 && (gt = !0);
        else
          return t.lanes = e.lanes, Fn(e, t, o);
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
      f !== null ? (is(t, f.cachePool), Td(t, f), ma(), t.memoizedState = null) : (e !== null && is(t, null), Iu(), ma());
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
    return Wa(t), n = Yu(
      e,
      t,
      n,
      i,
      void 0,
      o
    ), i = Fu(), e !== null && !gt ? (Xu(e, t, o), Fn(e, t, o)) : (qe && i && Nu(t), t.flags |= 1, bt(e, t, n, o), t.child);
  }
  function Op(e, t, n, i, o, f) {
    return Wa(t), t.updateQueue = null, n = Nd(
      t,
      i,
      n,
      o
    ), wd(e), i = Fu(), e !== null && !gt ? (Xu(e, t, f), Fn(e, t, f)) : (qe && i && Nu(t), t.flags |= 1, bt(e, t, n, f), t.child);
  }
  function Dp(e, t, n, i, o) {
    if (Wa(t), t.stateNode === null) {
      var f = kr, _ = n.contextType;
      typeof _ == "object" && _ !== null && (f = Ct(_)), f = new n(i, f), t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = sc, t.stateNode = f, f._reactInternals = t, f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, Uu(t), _ = n.contextType, f.context = typeof _ == "object" && _ !== null ? Ct(_) : kr, f.state = t.memoizedState, _ = n.getDerivedStateFromProps, typeof _ == "function" && (lc(
        t,
        n,
        _,
        i
      ), f.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (_ = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), _ !== f.state && sc.enqueueReplaceState(f, f.state, null), Pi(t, i, f, o), Hi(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), i = !0;
    } else if (e === null) {
      f = t.stateNode;
      var T = t.memoizedProps, D = tr(n, T);
      f.props = D;
      var P = f.context, X = n.contextType;
      _ = kr, typeof X == "object" && X !== null && (_ = Ct(X));
      var W = n.getDerivedStateFromProps;
      X = typeof W == "function" || typeof f.getSnapshotBeforeUpdate == "function", T = t.pendingProps !== T, X || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (T || P !== _) && gp(
        t,
        f,
        i,
        _
      ), ca = !1;
      var G = t.memoizedState;
      f.state = G, Pi(t, i, f, o), Hi(), P = t.memoizedState, T || G !== P || ca ? (typeof W == "function" && (lc(
        t,
        n,
        W,
        i
      ), P = t.memoizedState), (D = ca || mp(
        t,
        n,
        D,
        i,
        G,
        P,
        _
      )) ? (X || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = P), f.props = i, f.state = P, f.context = _, i = D) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      f = t.stateNode, Hu(e, t), _ = t.memoizedProps, X = tr(n, _), f.props = X, W = t.pendingProps, G = f.context, P = n.contextType, D = kr, typeof P == "object" && P !== null && (D = Ct(P)), T = n.getDerivedStateFromProps, (P = typeof T == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (_ !== W || G !== D) && gp(
        t,
        f,
        i,
        D
      ), ca = !1, G = t.memoizedState, f.state = G, Pi(t, i, f, o), Hi();
      var V = t.memoizedState;
      _ !== W || G !== V || ca || e !== null && e.dependencies !== null && as(e.dependencies) ? (typeof T == "function" && (lc(
        t,
        n,
        T,
        i
      ), V = t.memoizedState), (X = ca || mp(
        t,
        n,
        X,
        i,
        G,
        V,
        D
      ) || e !== null && e.dependencies !== null && as(e.dependencies)) ? (P || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, V, D), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
        i,
        V,
        D
      )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || _ === e.memoizedProps && G === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || _ === e.memoizedProps && G === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = V), f.props = i, f.state = V, f.context = D, i = X) : (typeof f.componentDidUpdate != "function" || _ === e.memoizedProps && G === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || _ === e.memoizedProps && G === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return f = i, xs(e, t), i = (t.flags & 128) !== 0, f || i ? (f = t.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : f.render(), t.flags |= 1, e !== null && i ? (t.child = Gr(
      t,
      e.child,
      null,
      o
    ), t.child = Gr(
      t,
      null,
      n,
      o
    )) : bt(e, t, n, o), t.memoizedState = f.state, e = t.child) : e = Fn(
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
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= hn), e;
  }
  function Rp(e, t, n) {
    var i = t.pendingProps, o = !1, f = (t.flags & 128) !== 0, _;
    if ((_ = f) || (_ = e !== null && e.memoizedState === null ? !1 : (dt.current & 2) !== 0), _ && (o = !0, t.flags &= -129), _ = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (qe) {
        if (o ? pa(t) : ma(), qe) {
          var T = tt, D;
          if (D = T) {
            e: {
              for (D = T, T = Tn; D.nodeType !== 8; ) {
                if (!T) {
                  T = null;
                  break e;
                }
                if (D = bn(
                  D.nextSibling
                ), D === null) {
                  T = null;
                  break e;
                }
              }
              T = D;
            }
            T !== null ? (t.memoizedState = {
              dehydrated: T,
              treeContext: Xa !== null ? { id: Pn, overflow: qn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, D = Ft(
              18,
              null,
              null,
              0
            ), D.stateNode = T, D.return = t, t.child = D, Dt = t, tt = null, D = !0) : D = !1;
          }
          D || Ka(t);
        }
        if (T = t.memoizedState, T !== null && (T = T.dehydrated, T !== null))
          return Zc(T) ? t.lanes = 32 : t.lanes = 536870912, null;
        Yn(t);
      }
      return T = i.children, i = i.fallback, o ? (ma(), o = t.mode, T = Es(
        { mode: "hidden", children: T },
        o
      ), i = Fa(
        i,
        o,
        n,
        null
      ), T.return = t, i.return = t, T.sibling = i, t.child = T, o = t.child, o.memoizedState = fc(n), o.childLanes = hc(
        e,
        _,
        n
      ), t.memoizedState = cc, i) : (pa(t), dc(t, T));
    }
    if (D = e.memoizedState, D !== null && (T = D.dehydrated, T !== null)) {
      if (f)
        t.flags & 256 ? (pa(t), t.flags &= -257, t = pc(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (ma(), t.child = e.child, t.flags |= 128, t = null) : (ma(), o = i.fallback, T = t.mode, i = Es(
          { mode: "visible", children: i.children },
          T
        ), o = Fa(
          o,
          T,
          n,
          null
        ), o.flags |= 2, i.return = t, o.return = t, i.sibling = o, t.child = i, Gr(
          t,
          e.child,
          null,
          n
        ), i = t.child, i.memoizedState = fc(n), i.childLanes = hc(
          e,
          _,
          n
        ), t.memoizedState = cc, t = o);
      else if (pa(t), Zc(T)) {
        if (_ = T.nextSibling && T.nextSibling.dataset, _) var P = _.dgst;
        _ = P, i = Error(s(419)), i.stack = "", i.digest = _, Ri({ value: i, source: null, stack: null }), t = pc(
          e,
          t,
          n
        );
      } else if (gt || ki(e, t, n, !1), _ = (n & e.childLanes) !== 0, gt || _) {
        if (_ = Ze, _ !== null && (i = n & -n, i = (i & 42) !== 0 ? 1 : Ko(i), i = (i & (_.suspendedLanes | n)) !== 0 ? 0 : i, i !== 0 && i !== D.retryLane))
          throw D.retryLane = i, Rr(e, i), Jt(_, e, i), Ep;
        T.data === "$?" || Rc(), t = pc(
          e,
          t,
          n
        );
      } else
        T.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = D.treeContext, tt = bn(
          T.nextSibling
        ), Dt = t, qe = !0, Za = null, Tn = !1, e !== null && (un[cn++] = Pn, un[cn++] = qn, un[cn++] = Xa, Pn = e.id, qn = e.overflow, Xa = t), t = dc(
          t,
          i.children
        ), t.flags |= 4096);
      return t;
    }
    return o ? (ma(), o = i.fallback, T = t.mode, D = e.child, P = D.sibling, i = Hn(D, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = D.subtreeFlags & 65011712, P !== null ? o = Hn(P, o) : (o = Fa(
      o,
      T,
      n,
      null
    ), o.flags |= 2), o.return = t, i.return = t, i.sibling = o, t.child = i, i = o, o = t.child, T = e.child.memoizedState, T === null ? T = fc(n) : (D = T.cachePool, D !== null ? (P = ht._currentValue, D = D.parent !== P ? { parent: P, pool: P } : D) : D = yd(), T = {
      baseLanes: T.baseLanes | n,
      cachePool: D
    }), o.memoizedState = T, o.childLanes = hc(
      e,
      _,
      n
    ), t.memoizedState = cc, i) : (pa(t), n = e.child, e = n.sibling, n = Hn(n, {
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
    return e = Ft(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function pc(e, t, n) {
    return Gr(t, e.child, null, n), e = dc(
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
    switch (le(dt, i), o) {
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
  function Fn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Sa |= t.lanes, (n & t.childLanes) === 0)
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
      for (e = t.child, n = Hn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Hn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function gc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && as(e)));
  }
  function Xy(e, t, n) {
    switch (t.tag) {
      case 3:
        je(t, t.stateNode.containerInfo), ua(t, ht, e.memoizedState.cache), Mi();
        break;
      case 27:
      case 5:
        mr(t);
        break;
      case 4:
        je(t, t.stateNode.containerInfo);
        break;
      case 10:
        ua(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (pa(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Rp(e, t, n) : (pa(t), e = Fn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        pa(t);
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
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), le(dt, dt.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, wp(e, t, n);
      case 24:
        ua(t, ht, e.memoizedState.cache);
    }
    return Fn(e, t, n);
  }
  function Lp(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        gt = !0;
      else {
        if (!gc(e, n) && (t.flags & 128) === 0)
          return gt = !1, Xy(
            e,
            t,
            n
          );
        gt = (e.flags & 131072) !== 0;
      }
    else
      gt = !1, qe && (t.flags & 1048576) !== 0 && fd(t, ns, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var i = t.elementType, o = i._init;
          if (i = o(i._payload), t.type = i, typeof i == "function")
            Au(i) ? (e = tr(i, e), t.tag = 1, t = Dp(
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
            throw t = oe(i) || i, Error(s(306, t, ""));
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
        return i = t.type, o = tr(
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
          if (je(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          i = t.pendingProps;
          var f = t.memoizedState;
          o = f.element, Hu(e, t), Pi(t, i, null, n);
          var _ = t.memoizedState;
          if (i = _.cache, ua(t, ht, i), i !== f.cache && ku(
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
              o = sn(
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
              for (tt = bn(e.firstChild), Dt = t, qe = !0, Za = null, Tn = !0, n = dp(
                t,
                null,
                i,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (Mi(), i === o) {
              t = Fn(
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
        )) ? t.memoizedState = n : qe || (n = t.type, e = t.pendingProps, i = zs(
          me.current
        ).createElement(n), i[Et] = t, i[jt] = e, _t(i, n, e), mt(i), t.stateNode = i) : t.memoizedState = Hm(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return mr(t), e === null && qe && (i = t.stateNode = Bm(
          t.type,
          t.pendingProps,
          me.current
        ), Dt = t, Tn = !0, o = tt, Ca(t.type) ? (Kc = o, tt = bn(
          i.firstChild
        )) : tt = o), bt(
          e,
          t,
          t.pendingProps.children,
          n
        ), xs(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && qe && ((o = i = tt) && (i = _0(
          i,
          t.type,
          t.pendingProps,
          Tn
        ), i !== null ? (t.stateNode = i, Dt = t, tt = bn(
          i.firstChild
        ), Tn = !1, o = !0) : o = !1), o || Ka(t)), mr(t), o = t.type, f = t.pendingProps, _ = e !== null ? e.memoizedProps : null, i = f.children, Fc(o, f) ? i = null : _ !== null && Fc(o, _) && (t.flags |= 32), t.memoizedState !== null && (o = Yu(
          e,
          t,
          Hy,
          null,
          null,
          n
        ), ol._currentValue = o), xs(e, t), bt(e, t, i, n), t.child;
      case 6:
        return e === null && qe && ((e = n = tt) && (n = x0(
          n,
          t.pendingProps,
          Tn
        ), n !== null ? (t.stateNode = n, Dt = t, tt = null, e = !0) : e = !1), e || Ka(t)), null;
      case 13:
        return Rp(e, t, n);
      case 4:
        return je(
          t,
          t.stateNode.containerInfo
        ), i = t.pendingProps, e === null ? t.child = Gr(
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
        return i = t.pendingProps, ua(t, t.type, i.value), bt(
          e,
          t,
          i.children,
          n
        ), t.child;
      case 9:
        return o = t.type._context, i = t.pendingProps.children, Wa(t), o = Ct(o), i = i(o), t.flags |= 1, bt(e, t, i, n), t.child;
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
        ), n.ref = t.ref, t.child = n, n.return = t, t = n) : (n = Hn(e.child, i), n.ref = t.ref, t.child = n, n.return = t, t = n), t;
      case 22:
        return wp(e, t, n);
      case 24:
        return Wa(t), i = Ct(ht), e === null ? (o = Bu(), o === null && (o = Ze, f = ju(), o.pooledCache = f, f.refCount++, f !== null && (o.pooledCacheLanes |= n), o = f), t.memoizedState = {
          parent: i,
          cache: o
        }, Uu(t), ua(t, ht, o)) : ((e.lanes & n) !== 0 && (Hu(e, t), Pi(t, null, null, n), Hi()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = { parent: i, cache: i }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), ua(t, ht, i)) : (i = f.cache, ua(t, ht, i), i !== o.cache && ku(
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
  function Xn(e) {
    e.flags |= 4;
  }
  function Bp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Vm(t)) {
      if (t = fn.current, t !== null && ((Be & 4194048) === Be ? wn !== null : (Be & 62914560) !== Be && (Be & 536870912) === 0 || t !== wn))
        throw zi = zu, bd;
      e.flags |= 8192;
    }
  }
  function Cs(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? ph() : 536870912, e.lanes |= t, Xr |= t);
  }
  function Xi(e, t) {
    if (!qe)
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
  function Qy(e, t, n) {
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
        return n = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Gn(ht), Gt(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Di(t) ? Xn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, pd())), $e(t), null;
      case 26:
        return n = t.memoizedState, e === null ? (Xn(t), n !== null ? ($e(t), Bp(t, n)) : ($e(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (Xn(t), $e(t), Bp(t, n)) : ($e(t), t.flags &= -16777217) : (e.memoizedProps !== i && Xn(t), $e(t), t.flags &= -16777217), null;
      case 27:
        gn(t), n = me.current;
        var o = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== i && Xn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(s(166));
            return $e(t), null;
          }
          e = se.current, Di(t) ? hd(t) : (e = Bm(o, i, n), t.stateNode = e, Xn(t));
        }
        return $e(t), null;
      case 5:
        if (gn(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && Xn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(s(166));
            return $e(t), null;
          }
          if (e = se.current, Di(t))
            hd(t);
          else {
            switch (o = zs(
              me.current
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
            e && Xn(t);
          }
        }
        return $e(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== i && Xn(t);
        else {
          if (typeof i != "string" && t.stateNode === null)
            throw Error(s(166));
          if (e = me.current, Di(t)) {
            if (e = t.stateNode, n = t.memoizedProps, i = null, o = Dt, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  i = o.memoizedProps;
              }
            e[Et] = t, e = !!(e.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || Om(e.nodeValue, n)), e || Ka(t);
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
            return t.flags & 256 ? (Yn(t), t) : (Yn(t), null);
        }
        if (Yn(t), (t.flags & 128) !== 0)
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
        return Gn(t.type), $e(t), null;
      case 19:
        if (ne(dt), o = t.memoizedState, o === null) return $e(t), null;
        if (i = (t.flags & 128) !== 0, f = o.rendering, f === null)
          if (i) Xi(o, !1);
          else {
            if (nt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (f = bs(e), f !== null) {
                  for (t.flags |= 128, Xi(o, !1), e = f.updateQueue, t.updateQueue = e, Cs(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    cd(n, e), n = n.sibling;
                  return le(
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
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Cs(t, e), Xi(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !qe)
                return $e(t), null;
            } else
              2 * Nt() - o.renderingStartTime > ws && n !== 536870912 && (t.flags |= 128, i = !0, Xi(o, !1), t.lanes = 4194304);
          o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = Nt(), t.sibling = null, e = dt.current, le(dt, i ? e & 1 | 2 : e & 1), t) : ($e(t), null);
      case 22:
      case 23:
        return Yn(t), Gu(), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && ($e(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : $e(t), n = t.updateQueue, n !== null && Cs(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== n && (t.flags |= 2048), e !== null && ne($a), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Gn(ht), $e(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function Zy(e, t) {
    switch (Ou(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Gn(ht), Gt(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return gn(t), null;
      case 13:
        if (Yn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          Mi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return ne(dt), null;
      case 4:
        return Gt(), null;
      case 10:
        return Gn(t.type), null;
      case 22:
      case 23:
        return Yn(t), Gu(), e !== null && ne($a), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Gn(ht), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function zp(e, t) {
    switch (Ou(t), t.tag) {
      case 3:
        Gn(ht), Gt();
        break;
      case 26:
      case 27:
      case 5:
        gn(t);
        break;
      case 4:
        Gt();
        break;
      case 13:
        Yn(t);
        break;
      case 19:
        ne(dt);
        break;
      case 10:
        Gn(t.type);
        break;
      case 22:
      case 23:
        Yn(t), Gu(), e !== null && ne($a);
        break;
      case 24:
        Gn(ht);
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
    } catch (T) {
      Qe(t, t.return, T);
    }
  }
  function ga(e, t, n) {
    try {
      var i = t.updateQueue, o = i !== null ? i.lastEffect : null;
      if (o !== null) {
        var f = o.next;
        i = f;
        do {
          if ((i.tag & e) === e) {
            var _ = i.inst, T = _.destroy;
            if (T !== void 0) {
              _.destroy = void 0, o = t;
              var D = n, P = T;
              try {
                P();
              } catch (X) {
                Qe(
                  o,
                  D,
                  X
                );
              }
            }
          }
          i = i.next;
        } while (i !== f);
      }
    } catch (X) {
      Qe(t, t.return, X);
    }
  }
  function Up(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Ad(t, n);
      } catch (i) {
        Qe(e, e.return, i);
      }
    }
  }
  function Hp(e, t, n) {
    n.props = tr(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (i) {
      Qe(e, t, i);
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
      Qe(e, t, o);
    }
  }
  function Nn(e, t) {
    var n = e.ref, i = e.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (o) {
          Qe(e, t, o);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          Qe(e, t, o);
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
      Qe(e, e.return, o);
    }
  }
  function vc(e, t, n) {
    try {
      var i = e.stateNode;
      g0(i, e.type, n, t), i[jt] = t;
    } catch (o) {
      Qe(e, e.return, o);
    }
  }
  function qp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ca(e.type) || e.tag === 4;
  }
  function yc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || qp(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Ca(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function bc(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Bs));
    else if (i !== 4 && (i === 27 && Ca(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (bc(e, t, n), e = e.sibling; e !== null; )
        bc(e, t, n), e = e.sibling;
  }
  function As(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (i === 27 && Ca(e.type) && (n = e.stateNode), e = e.child, e !== null))
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
      Qe(e, e.return, f);
    }
  }
  var Qn = !1, lt = !1, Sc = !1, Gp = typeof WeakSet == "function" ? WeakSet : Set, vt = null;
  function Ky(e, t) {
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
            var _ = 0, T = -1, D = -1, P = 0, X = 0, W = e, G = null;
            t: for (; ; ) {
              for (var V; W !== n || o !== 0 && W.nodeType !== 3 || (T = _ + o), W !== f || i !== 0 && W.nodeType !== 3 || (D = _ + i), W.nodeType === 3 && (_ += W.nodeValue.length), (V = W.firstChild) !== null; )
                G = W, W = V;
              for (; ; ) {
                if (W === e) break t;
                if (G === n && ++P === o && (T = _), G === f && ++X === i && (D = _), (V = W.nextSibling) !== null) break;
                W = G, G = W.parentNode;
              }
              W = V;
            }
            n = T === -1 || D === -1 ? null : { start: T, end: D };
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
                  var be = tr(
                    n.type,
                    o,
                    n.elementType === n.type
                  );
                  e = i.getSnapshotBeforeUpdate(
                    be,
                    f
                  ), i.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ve) {
                  Qe(
                    n,
                    n.return,
                    ve
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
        va(e, n), i & 4 && Qi(5, n);
        break;
      case 1:
        if (va(e, n), i & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (_) {
              Qe(n, n.return, _);
            }
          else {
            var o = tr(
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
              Qe(
                n,
                n.return,
                _
              );
            }
          }
        i & 64 && Up(n), i & 512 && Zi(n, n.return);
        break;
      case 3:
        if (va(e, n), i & 64 && (e = n.updateQueue, e !== null)) {
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
            Qe(n, n.return, _);
          }
        }
        break;
      case 27:
        t === null && i & 4 && Ip(n);
      case 26:
      case 5:
        va(e, n), t === null && i & 4 && Pp(n), i & 512 && Zi(n, n.return);
        break;
      case 12:
        va(e, n);
        break;
      case 13:
        va(e, n), i & 4 && Xp(e, n), i & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = i0.bind(
          null,
          n
        ), E0(e, n))));
        break;
      case 22:
        if (i = n.memoizedState !== null || Qn, !i) {
          t = t !== null && t.memoizedState !== null || lt, o = Qn;
          var f = lt;
          Qn = i, (lt = t) && !f ? ya(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : va(e, n), Qn = o, lt = f;
        }
        break;
      case 30:
        break;
      default:
        va(e, n);
    }
  }
  function Yp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Yp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && $o(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Je = null, zt = !1;
  function Zn(e, t, n) {
    for (n = n.child; n !== null; )
      Fp(e, t, n), n = n.sibling;
  }
  function Fp(e, t, n) {
    if (ue && typeof ue.onCommitFiberUnmount == "function")
      try {
        ue.onCommitFiberUnmount(J, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        lt || Nn(n, t), Zn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        lt || Nn(n, t);
        var i = Je, o = zt;
        Ca(n.type) && (Je = n.stateNode, zt = !1), Zn(
          e,
          t,
          n
        ), rl(n.stateNode), Je = i, zt = o;
        break;
      case 5:
        lt || Nn(n, t);
      case 6:
        if (i = Je, o = zt, Je = null, Zn(
          e,
          t,
          n
        ), Je = i, zt = o, Je !== null)
          if (zt)
            try {
              (Je.nodeType === 9 ? Je.body : Je.nodeName === "HTML" ? Je.ownerDocument.body : Je).removeChild(n.stateNode);
            } catch (f) {
              Qe(
                n,
                t,
                f
              );
            }
          else
            try {
              Je.removeChild(n.stateNode);
            } catch (f) {
              Qe(
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
        i = Je, o = zt, Je = n.stateNode.containerInfo, zt = !0, Zn(
          e,
          t,
          n
        ), Je = i, zt = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        lt || ga(2, n, t), lt || ga(4, n, t), Zn(
          e,
          t,
          n
        );
        break;
      case 1:
        lt || (Nn(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function" && Hp(
          n,
          t,
          i
        )), Zn(
          e,
          t,
          n
        );
        break;
      case 21:
        Zn(
          e,
          t,
          n
        );
        break;
      case 22:
        lt = (i = lt) || n.memoizedState !== null, Zn(
          e,
          t,
          n
        ), lt = i;
        break;
      default:
        Zn(
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
        Qe(t, t.return, n);
      }
  }
  function Jy(e) {
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
    var n = Jy(e);
    t.forEach(function(i) {
      var o = l0.bind(null, e, i);
      n.has(i) || (n.add(i), i.then(o, o));
    });
  }
  function Xt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var o = n[i], f = e, _ = t, T = _;
        e: for (; T !== null; ) {
          switch (T.tag) {
            case 27:
              if (Ca(T.type)) {
                Je = T.stateNode, zt = !1;
                break e;
              }
              break;
            case 5:
              Je = T.stateNode, zt = !1;
              break e;
            case 3:
            case 4:
              Je = T.stateNode.containerInfo, zt = !0;
              break e;
          }
          T = T.return;
        }
        if (Je === null) throw Error(s(160));
        Fp(f, _, o), Je = null, zt = !1, f = o.alternate, f !== null && (f.return = null), o.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Qp(t, e), t = t.sibling;
  }
  var yn = null;
  function Qp(e, t) {
    var n = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Xt(t, e), Qt(e), i & 4 && (ga(3, e, e.return), Qi(3, e), ga(5, e, e.return));
        break;
      case 1:
        Xt(t, e), Qt(e), i & 512 && (lt || n === null || Nn(n, n.return)), i & 64 && Qn && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? i : n.concat(i))));
        break;
      case 26:
        var o = yn;
        if (Xt(t, e), Qt(e), i & 512 && (lt || n === null || Nn(n, n.return)), i & 4) {
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
                        for (var T = 0; T < _.length; T++)
                          if (f = _[T], f.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && f.getAttribute("rel") === (n.rel == null ? null : n.rel) && f.getAttribute("title") === (n.title == null ? null : n.title) && f.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            _.splice(T, 1);
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
                        for (T = 0; T < _.length; T++)
                          if (f = _[T], f.getAttribute("content") === (n.content == null ? null : "" + n.content) && f.getAttribute("name") === (n.name == null ? null : n.name) && f.getAttribute("property") === (n.property == null ? null : n.property) && f.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && f.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            _.splice(T, 1);
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
        Xt(t, e), Qt(e), i & 512 && (lt || n === null || Nn(n, n.return)), n !== null && i & 4 && vc(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Xt(t, e), Qt(e), i & 512 && (lt || n === null || Nn(n, n.return)), e.flags & 32) {
          o = e.stateNode;
          try {
            Ar(o, "");
          } catch (V) {
            Qe(e, e.return, V);
          }
        }
        i & 4 && e.stateNode != null && (o = e.memoizedProps, vc(
          e,
          o,
          n !== null ? n.memoizedProps : o
        )), i & 1024 && (Sc = !0);
        break;
      case 6:
        if (Xt(t, e), Qt(e), i & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          i = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = i;
          } catch (V) {
            Qe(e, e.return, V);
          }
        }
        break;
      case 3:
        if (Ps = null, o = yn, yn = Us(t.containerInfo), Xt(t, e), yn = o, Qt(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            hl(t.containerInfo);
          } catch (V) {
            Qe(e, e.return, V);
          }
        Sc && (Sc = !1, Zp(e));
        break;
      case 4:
        i = yn, yn = Us(
          e.stateNode.containerInfo
        ), Xt(t, e), Qt(e), yn = i;
        break;
      case 12:
        Xt(t, e), Qt(e);
        break;
      case 13:
        Xt(t, e), Qt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (wc = Nt()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, _c(e, i)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var D = n !== null && n.memoizedState !== null, P = Qn, X = lt;
        if (Qn = P || o, lt = X || D, Xt(t, e), lt = X, Qn = P, Qt(e), i & 8192)
          e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (n === null || D || Qn || lt || nr(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                D = n = t;
                try {
                  if (f = D.stateNode, o)
                    _ = f.style, typeof _.setProperty == "function" ? _.setProperty("display", "none", "important") : _.display = "none";
                  else {
                    T = D.stateNode;
                    var W = D.memoizedProps.style, G = W != null && W.hasOwnProperty("display") ? W.display : null;
                    T.style.display = G == null || typeof G == "boolean" ? "" : ("" + G).trim();
                  }
                } catch (V) {
                  Qe(D, D.return, V);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                D = t;
                try {
                  D.stateNode.nodeValue = o ? "" : D.memoizedProps;
                } catch (V) {
                  Qe(D, D.return, V);
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
        Xt(t, e), Qt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, _c(e, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Xt(t, e), Qt(e);
    }
  }
  function Qt(e) {
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
            n.flags & 32 && (Ar(_, ""), n.flags &= -33);
            var T = yc(e);
            As(e, T, _);
            break;
          case 3:
          case 4:
            var D = n.stateNode.containerInfo, P = yc(e);
            bc(
              e,
              P,
              D
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (X) {
        Qe(e, e.return, X);
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
  function va(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Vp(e, t.alternate, t), t = t.sibling;
  }
  function nr(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ga(4, t, t.return), nr(t);
          break;
        case 1:
          Nn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Hp(
            t,
            t.return,
            n
          ), nr(t);
          break;
        case 27:
          rl(t.stateNode);
        case 26:
        case 5:
          Nn(t, t.return), nr(t);
          break;
        case 22:
          t.memoizedState === null && nr(t);
          break;
        case 30:
          nr(t);
          break;
        default:
          nr(t);
      }
      e = e.sibling;
    }
  }
  function ya(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var i = t.alternate, o = e, f = t, _ = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          ya(
            o,
            f,
            n
          ), Qi(4, f);
          break;
        case 1:
          if (ya(
            o,
            f,
            n
          ), i = f, o = i.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (P) {
              Qe(i, i.return, P);
            }
          if (i = f, o = i.updateQueue, o !== null) {
            var T = i.stateNode;
            try {
              var D = o.shared.hiddenCallbacks;
              if (D !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < D.length; o++)
                  Cd(D[o], T);
            } catch (P) {
              Qe(i, i.return, P);
            }
          }
          n && _ & 64 && Up(f), Zi(f, f.return);
          break;
        case 27:
          Ip(f);
        case 26:
        case 5:
          ya(
            o,
            f,
            n
          ), n && i === null && _ & 4 && Pp(f), Zi(f, f.return);
          break;
        case 12:
          ya(
            o,
            f,
            n
          );
          break;
        case 13:
          ya(
            o,
            f,
            n
          ), n && _ & 4 && Xp(o, f);
          break;
        case 22:
          f.memoizedState === null && ya(
            o,
            f,
            n
          ), Zi(f, f.return);
          break;
        case 30:
          break;
        default:
          ya(
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
  function On(e, t, n, i) {
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
        On(
          e,
          t,
          n,
          i
        ), o & 2048 && Qi(9, t);
        break;
      case 1:
        On(
          e,
          t,
          n,
          i
        );
        break;
      case 3:
        On(
          e,
          t,
          n,
          i
        ), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && ji(e)));
        break;
      case 12:
        if (o & 2048) {
          On(
            e,
            t,
            n,
            i
          ), e = t.stateNode;
          try {
            var f = t.memoizedProps, _ = f.id, T = f.onPostCommit;
            typeof T == "function" && T(
              _,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (D) {
            Qe(t, t.return, D);
          }
        } else
          On(
            e,
            t,
            n,
            i
          );
        break;
      case 13:
        On(
          e,
          t,
          n,
          i
        );
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, _ = t.alternate, t.memoizedState !== null ? f._visibility & 2 ? On(
          e,
          t,
          n,
          i
        ) : Ki(e, t) : f._visibility & 2 ? On(
          e,
          t,
          n,
          i
        ) : (f._visibility |= 2, Vr(
          e,
          t,
          n,
          i,
          (t.subtreeFlags & 10256) !== 0
        )), o & 2048 && xc(_, t);
        break;
      case 24:
        On(
          e,
          t,
          n,
          i
        ), o & 2048 && Ec(t.alternate, t);
        break;
      default:
        On(
          e,
          t,
          n,
          i
        );
    }
  }
  function Vr(e, t, n, i, o) {
    for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var f = e, _ = t, T = n, D = i, P = _.flags;
      switch (_.tag) {
        case 0:
        case 11:
        case 15:
          Vr(
            f,
            _,
            T,
            D,
            o
          ), Qi(8, _);
          break;
        case 23:
          break;
        case 22:
          var X = _.stateNode;
          _.memoizedState !== null ? X._visibility & 2 ? Vr(
            f,
            _,
            T,
            D,
            o
          ) : Ki(
            f,
            _
          ) : (X._visibility |= 2, Vr(
            f,
            _,
            T,
            D,
            o
          )), o && P & 2048 && xc(
            _.alternate,
            _
          );
          break;
        case 24:
          Vr(
            f,
            _,
            T,
            D,
            o
          ), o && P & 2048 && Ec(_.alternate, _);
          break;
        default:
          Vr(
            f,
            _,
            T,
            D,
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
  function Yr(e) {
    if (e.subtreeFlags & Ji)
      for (e = e.child; e !== null; )
        Jp(e), e = e.sibling;
  }
  function Jp(e) {
    switch (e.tag) {
      case 26:
        Yr(e), e.flags & Ji && e.memoizedState !== null && B0(
          yn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Yr(e);
        break;
      case 3:
      case 4:
        var t = yn;
        yn = Us(e.stateNode.containerInfo), Yr(e), yn = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Ji, Ji = 16777216, Yr(e), Ji = t) : Yr(e));
        break;
      default:
        Yr(e);
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
        Wi(e), e.flags & 2048 && ga(9, e, e.return);
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
          ga(8, t, t.return), Ts(t);
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
          ga(8, n, t);
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
  var Wy = {
    getCacheForType: function(e) {
      var t = Ct(ht), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    }
  }, $y = typeof WeakMap == "function" ? WeakMap : Map, Ge = 0, Ze = null, De = null, Be = 0, Ve = 0, Zt = null, ba = !1, Fr = !1, Cc = !1, Kn = 0, nt = 0, Sa = 0, ar = 0, Ac = 0, hn = 0, Xr = 0, $i = null, Ut = null, Tc = !1, wc = 0, ws = 1 / 0, Ns = null, _a = null, St = 0, xa = null, Qr = null, Zr = 0, Nc = 0, Oc = null, tm = null, el = 0, Dc = null;
  function Kt() {
    if ((Ge & 2) !== 0 && Be !== 0)
      return Be & -Be;
    if (U.T !== null) {
      var e = Br;
      return e !== 0 ? e : zc();
    }
    return vh();
  }
  function nm() {
    hn === 0 && (hn = (Be & 536870912) === 0 || qe ? vr() : 536870912);
    var e = fn.current;
    return e !== null && (e.flags |= 32), hn;
  }
  function Jt(e, t, n) {
    (e === Ze && (Ve === 2 || Ve === 9) || e.cancelPendingCommit !== null) && (Kr(e, 0), Ea(
      e,
      Be,
      hn,
      !1
    )), yi(e, n), ((Ge & 2) === 0 || e !== Ze) && (e === Ze && ((Ge & 2) === 0 && (ar |= n), nt === 4 && Ea(
      e,
      Be,
      hn,
      !1
    )), Dn(e));
  }
  function am(e, t, n) {
    if ((Ge & 6) !== 0) throw Error(s(327));
    var i = !n && (t & 124) === 0 && (t & e.expiredLanes) === 0 || kt(e, t), o = i ? n0(e, t) : kc(e, t, !0), f = i;
    do {
      if (o === 0) {
        Fr && !i && Ea(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, f && !e0(n)) {
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
              var T = e;
              o = $i;
              var D = T.current.memoizedState.isDehydrated;
              if (D && (Kr(T, _).flags |= 256), _ = kc(
                T,
                _,
                !1
              ), _ !== 2) {
                if (Cc && !D) {
                  T.errorRecoveryDisabledLanes |= f, ar |= f, o = 4;
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
          Kr(e, 0), Ea(e, t, 0, !0);
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
              Ea(
                i,
                t,
                hn,
                !ba
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
            if (Ea(
              i,
              t,
              hn,
              !ba
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
                hn,
                ar,
                Xr,
                ba,
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
            hn,
            ar,
            Xr,
            ba,
            f,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Dn(e);
  }
  function rm(e, t, n, i, o, f, _, T, D, P, X, W, G, V) {
    if (e.timeoutHandle = -1, W = t.subtreeFlags, (W & 8192 || (W & 16785408) === 16785408) && (sl = { stylesheets: null, count: 0, unsuspend: L0 }, Jp(t), W = z0(), W !== null)) {
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
          T,
          D,
          X,
          1,
          G,
          V
        )
      ), Ea(e, f, _, !P);
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
      T,
      D
    );
  }
  function e0(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var i = 0; i < n.length; i++) {
          var o = n[i], f = o.getSnapshot;
          o = o.value;
          try {
            if (!Yt(f(), o)) return !1;
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
  function Ea(e, t, n, i) {
    t &= ~Ac, t &= ~ar, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var f = 31 - ge(o), _ = 1 << f;
      i[f] = -1, o &= ~_;
    }
    n !== 0 && mh(e, n, t);
  }
  function Os() {
    return (Ge & 6) === 0 ? (tl(0), !1) : !0;
  }
  function Mc() {
    if (De !== null) {
      if (Ve === 0)
        var e = De.return;
      else
        e = De, In = Ja = null, Qu(e), Ir = null, Yi = 0, e = De;
      for (; e !== null; )
        zp(e.alternate, e), e = e.return;
      De = null;
    }
  }
  function Kr(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, y0(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Mc(), Ze = e, De = n = Hn(e.current, null), Be = t, Ve = 0, Zt = null, ba = !1, Fr = kt(e, t), Cc = !1, Xr = hn = Ac = ar = Sa = nt = 0, Ut = $i = null, Tc = !1, (t & 8) !== 0 && (t |= t & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var o = 31 - ge(i), f = 1 << o;
        t |= e[o], i &= ~f;
      }
    return Kn = t, Jl(), n;
  }
  function im(e, t) {
    we = null, U.H = gs, t === Bi || t === ls ? (t = xd(), Ve = 3) : t === bd ? (t = xd(), Ve = 4) : Ve = t === Ep ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Zt = t, De === null && (nt = 1, _s(
      e,
      sn(t, e.current)
    ));
  }
  function lm() {
    var e = U.H;
    return U.H = gs, e === null ? gs : e;
  }
  function sm() {
    var e = U.A;
    return U.A = Wy, e;
  }
  function Rc() {
    nt = 4, ba || (Be & 4194048) !== Be && fn.current !== null || (Fr = !0), (Sa & 134217727) === 0 && (ar & 134217727) === 0 || Ze === null || Ea(
      Ze,
      Be,
      hn,
      !1
    );
  }
  function kc(e, t, n) {
    var i = Ge;
    Ge |= 2;
    var o = lm(), f = sm();
    (Ze !== e || Be !== t) && (Ns = null, Kr(e, t)), t = !1;
    var _ = nt;
    e: do
      try {
        if (Ve !== 0 && De !== null) {
          var T = De, D = Zt;
          switch (Ve) {
            case 8:
              Mc(), _ = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              fn.current === null && (t = !0);
              var P = Ve;
              if (Ve = 0, Zt = null, Jr(e, T, D, P), n && Fr) {
                _ = 0;
                break e;
              }
              break;
            default:
              P = Ve, Ve = 0, Zt = null, Jr(e, T, D, P);
          }
        }
        t0(), _ = nt;
        break;
      } catch (X) {
        im(e, X);
      }
    while (!0);
    return t && e.shellSuspendCounter++, In = Ja = null, Ge = i, U.H = o, U.A = f, De === null && (Ze = null, Be = 0, Jl()), _;
  }
  function t0() {
    for (; De !== null; ) om(De);
  }
  function n0(e, t) {
    var n = Ge;
    Ge |= 2;
    var i = lm(), o = sm();
    Ze !== e || Be !== t ? (Ns = null, ws = Nt() + 500, Kr(e, t)) : Fr = kt(
      e,
      t
    );
    e: do
      try {
        if (Ve !== 0 && De !== null) {
          t = De;
          var f = Zt;
          t: switch (Ve) {
            case 1:
              Ve = 0, Zt = null, Jr(e, t, f, 1);
              break;
            case 2:
            case 9:
              if (Sd(f)) {
                Ve = 0, Zt = null, um(t);
                break;
              }
              t = function() {
                Ve !== 2 && Ve !== 9 || Ze !== e || (Ve = 7), Dn(e);
              }, f.then(t, t);
              break e;
            case 3:
              Ve = 7;
              break e;
            case 4:
              Ve = 5;
              break e;
            case 7:
              Sd(f) ? (Ve = 0, Zt = null, um(t)) : (Ve = 0, Zt = null, Jr(e, t, f, 7));
              break;
            case 5:
              var _ = null;
              switch (De.tag) {
                case 26:
                  _ = De.memoizedState;
                case 5:
                case 27:
                  var T = De;
                  if (!_ || Vm(_)) {
                    Ve = 0, Zt = null;
                    var D = T.sibling;
                    if (D !== null) De = D;
                    else {
                      var P = T.return;
                      P !== null ? (De = P, Ds(P)) : De = null;
                    }
                    break t;
                  }
              }
              Ve = 0, Zt = null, Jr(e, t, f, 5);
              break;
            case 6:
              Ve = 0, Zt = null, Jr(e, t, f, 6);
              break;
            case 8:
              Mc(), nt = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        a0();
        break;
      } catch (X) {
        im(e, X);
      }
    while (!0);
    return In = Ja = null, U.H = i, U.A = o, Ge = n, De !== null ? 0 : (Ze = null, Be = 0, Jl(), nt);
  }
  function a0() {
    for (; De !== null && !gr(); )
      om(De);
  }
  function om(e) {
    var t = Lp(e.alternate, e, Kn);
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
          Be
        );
        break;
      case 11:
        t = Op(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Be
        );
        break;
      case 5:
        Qu(t);
      default:
        zp(n, t), t = De = cd(t, Kn), t = Lp(n, t, Kn);
    }
    e.memoizedProps = e.pendingProps, t === null ? Ds(e) : De = t;
  }
  function Jr(e, t, n, i) {
    In = Ja = null, Qu(t), Ir = null, Yi = 0;
    var o = t.return;
    try {
      if (Fy(
        e,
        o,
        t,
        n,
        Be
      )) {
        nt = 1, _s(
          e,
          sn(n, e.current)
        ), De = null;
        return;
      }
    } catch (f) {
      if (o !== null) throw De = o, f;
      nt = 1, _s(
        e,
        sn(n, e.current)
      ), De = null;
      return;
    }
    t.flags & 32768 ? (qe || i === 1 ? e = !0 : Fr || (Be & 536870912) !== 0 ? e = !1 : (ba = e = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = fn.current, i !== null && i.tag === 13 && (i.flags |= 16384))), cm(t, e)) : Ds(t);
  }
  function Ds(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        cm(
          t,
          ba
        );
        return;
      }
      e = t.return;
      var n = Qy(
        t.alternate,
        t,
        Kn
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
      var n = Zy(e.alternate, e);
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
  function fm(e, t, n, i, o, f, _, T, D) {
    e.cancelPendingCommit = null;
    do
      Ms();
    while (St !== 0);
    if ((Ge & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (f = t.lanes | t.childLanes, f |= Eu, L1(
        e,
        n,
        f,
        _,
        T,
        D
      ), e === Ze && (De = Ze = null, Be = 0), Qr = t, xa = e, Zr = n, Nc = f, Oc = o, tm = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, s0(fe, function() {
        return gm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
        i = U.T, U.T = null, o = ee.p, ee.p = 2, _ = Ge, Ge |= 4;
        try {
          Ky(e, t, n);
        } finally {
          Ge = _, ee.p = o, U.T = i;
        }
      }
      St = 1, hm(), dm(), pm();
    }
  }
  function hm() {
    if (St === 1) {
      St = 0;
      var e = xa, t = Qr, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = U.T, U.T = null;
        var i = ee.p;
        ee.p = 2;
        var o = Ge;
        Ge |= 4;
        try {
          Qp(t, e);
          var f = Yc, _ = ed(e.containerInfo), T = f.focusedElem, D = f.selectionRange;
          if (_ !== T && T && T.ownerDocument && $h(
            T.ownerDocument.documentElement,
            T
          )) {
            if (D !== null && yu(T)) {
              var P = D.start, X = D.end;
              if (X === void 0 && (X = P), "selectionStart" in T)
                T.selectionStart = P, T.selectionEnd = Math.min(
                  X,
                  T.value.length
                );
              else {
                var W = T.ownerDocument || document, G = W && W.defaultView || window;
                if (G.getSelection) {
                  var V = G.getSelection(), be = T.textContent.length, ve = Math.min(D.start, be), Xe = D.end === void 0 ? ve : Math.min(D.end, be);
                  !V.extend && ve > Xe && (_ = Xe, Xe = ve, ve = _);
                  var z = Wh(
                    T,
                    ve
                  ), B = Wh(
                    T,
                    Xe
                  );
                  if (z && B && (V.rangeCount !== 1 || V.anchorNode !== z.node || V.anchorOffset !== z.offset || V.focusNode !== B.node || V.focusOffset !== B.offset)) {
                    var H = W.createRange();
                    H.setStart(z.node, z.offset), V.removeAllRanges(), ve > Xe ? (V.addRange(H), V.extend(B.node, B.offset)) : (H.setEnd(B.node, B.offset), V.addRange(H));
                  }
                }
              }
            }
            for (W = [], V = T; V = V.parentNode; )
              V.nodeType === 1 && W.push({
                element: V,
                left: V.scrollLeft,
                top: V.scrollTop
              });
            for (typeof T.focus == "function" && T.focus(), T = 0; T < W.length; T++) {
              var Z = W[T];
              Z.element.scrollLeft = Z.left, Z.element.scrollTop = Z.top;
            }
          }
          Gs = !!Vc, Yc = Vc = null;
        } finally {
          Ge = o, ee.p = i, U.T = n;
        }
      }
      e.current = t, St = 2;
    }
  }
  function dm() {
    if (St === 2) {
      St = 0;
      var e = xa, t = Qr, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = U.T, U.T = null;
        var i = ee.p;
        ee.p = 2;
        var o = Ge;
        Ge |= 4;
        try {
          Vp(e, t.alternate, t);
        } finally {
          Ge = o, ee.p = i, U.T = n;
        }
      }
      St = 3;
    }
  }
  function pm() {
    if (St === 4 || St === 3) {
      St = 0, Pa();
      var e = xa, t = Qr, n = Zr, i = tm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? St = 5 : (St = 0, Qr = xa = null, mm(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (o === 0 && (_a = null), Jo(n), t = t.stateNode, ue && typeof ue.onCommitFiberRoot == "function")
        try {
          ue.onCommitFiberRoot(
            J,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (i !== null) {
        t = U.T, o = ee.p, ee.p = 2, U.T = null;
        try {
          for (var f = e.onRecoverableError, _ = 0; _ < i.length; _++) {
            var T = i[_];
            f(T.value, {
              componentStack: T.stack
            });
          }
        } finally {
          U.T = t, ee.p = o;
        }
      }
      (Zr & 3) !== 0 && Ms(), Dn(e), o = e.pendingLanes, (n & 4194090) !== 0 && (o & 42) !== 0 ? e === Dc ? el++ : (el = 0, Dc = e) : el = 0, tl(0);
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
    var e = xa, t = Nc;
    Nc = 0;
    var n = Jo(Zr), i = U.T, o = ee.p;
    try {
      ee.p = 32 > n ? 32 : n, U.T = null, n = Oc, Oc = null;
      var f = xa, _ = Zr;
      if (St = 0, Qr = xa = null, Zr = 0, (Ge & 6) !== 0) throw Error(s(331));
      var T = Ge;
      if (Ge |= 4, $p(f.current), Kp(
        f,
        f.current,
        _,
        n
      ), Ge = T, tl(0, !1), ue && typeof ue.onPostCommitFiberRoot == "function")
        try {
          ue.onPostCommitFiberRoot(J, f);
        } catch {
        }
      return !0;
    } finally {
      ee.p = o, U.T = i, mm(e, t);
    }
  }
  function vm(e, t, n) {
    t = sn(n, t), t = oc(e.stateNode, t, 2), e = ha(e, t, 2), e !== null && (yi(e, 2), Dn(e));
  }
  function Qe(e, t, n) {
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (_a === null || !_a.has(i))) {
            e = sn(n, e), n = _p(2), i = ha(t, n, 2), i !== null && (xp(
              n,
              i,
              t,
              e
            ), yi(i, 2), Dn(i));
            break;
          }
        }
        t = t.return;
      }
  }
  function jc(e, t, n) {
    var i = e.pingCache;
    if (i === null) {
      i = e.pingCache = new $y();
      var o = /* @__PURE__ */ new Set();
      i.set(t, o);
    } else
      o = i.get(t), o === void 0 && (o = /* @__PURE__ */ new Set(), i.set(t, o));
    o.has(n) || (Cc = !0, o.add(n), e = r0.bind(null, e, t, n), t.then(e, e));
  }
  function r0(e, t, n) {
    var i = e.pingCache;
    i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ze === e && (Be & n) === n && (nt === 4 || nt === 3 && (Be & 62914560) === Be && 300 > Nt() - wc ? (Ge & 2) === 0 && Kr(e, 0) : Ac |= n, Xr === Be && (Xr = 0)), Dn(e);
  }
  function ym(e, t) {
    t === 0 && (t = ph()), e = Rr(e, t), e !== null && (yi(e, t), Dn(e));
  }
  function i0(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), ym(e, n);
  }
  function l0(e, t) {
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
  function s0(e, t) {
    return Ua(e, t);
  }
  var Rs = null, Wr = null, Lc = !1, ks = !1, Bc = !1, rr = 0;
  function Dn(e) {
    e !== Wr && e.next === null && (Wr === null ? Rs = Wr = e : Wr = Wr.next = e), ks = !0, Lc || (Lc = !0, u0());
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
              var _ = i.suspendedLanes, T = i.pingedLanes;
              f = (1 << 31 - ge(42 | e) + 1) - 1, f &= o & ~(_ & ~T), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (n = !0, xm(i, f));
          } else
            f = Be, f = Ot(
              i,
              i === Ze ? f : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (f & 3) === 0 || kt(i, f) || (n = !0, xm(i, f));
          i = i.next;
        }
      while (n);
      Bc = !1;
    }
  }
  function o0() {
    bm();
  }
  function bm() {
    ks = Lc = !1;
    var e = 0;
    rr !== 0 && (v0() && (e = rr), rr = 0);
    for (var t = Nt(), n = null, i = Rs; i !== null; ) {
      var o = i.next, f = Sm(i, t);
      f === 0 ? (i.next = null, n === null ? Rs = o : n.next = o, o === null && (Wr = n)) : (n = i, (e !== 0 || (f & 3) !== 0) && (ks = !0)), i = o;
    }
    tl(e);
  }
  function Sm(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var _ = 31 - ge(f), T = 1 << _, D = o[_];
      D === -1 ? ((T & n) === 0 || (T & i) !== 0) && (o[_] = Hl(T, t)) : D <= t && (e.expiredLanes |= T), f &= ~T;
    }
    if (t = Ze, n = Be, n = Ot(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i = e.callbackNode, n === 0 || e === t && (Ve === 2 || Ve === 9) || e.cancelPendingCommit !== null)
      return i !== null && i !== null && Ha(i), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || kt(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (i !== null && Ha(i), Jo(n)) {
        case 2:
        case 8:
          n = pe;
          break;
        case 32:
          n = fe;
          break;
        case 268435456:
          n = Ue;
          break;
        default:
          n = fe;
      }
      return i = _m.bind(null, e), n = Ua(n, i), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return i !== null && i !== null && Ha(i), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function _m(e, t) {
    if (St !== 0 && St !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Ms() && e.callbackNode !== n)
      return null;
    var i = Be;
    return i = Ot(
      e,
      e === Ze ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i === 0 ? null : (am(e, i, t), Sm(e, Nt()), e.callbackNode != null && e.callbackNode === n ? _m.bind(null, e) : null);
  }
  function xm(e, t) {
    if (Ms()) return null;
    am(e, t, !0);
  }
  function u0() {
    b0(function() {
      (Ge & 6) !== 0 ? Ua(
        Vt,
        o0
      ) : bm();
    });
  }
  function zc() {
    return rr === 0 && (rr = vr()), rr;
  }
  function Em(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Vl("" + e);
  }
  function Cm(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function c0(e, t, n, i, o) {
    if (t === "submit" && n && n.stateNode === o) {
      var f = Em(
        (o[jt] || null).action
      ), _ = i.submitter;
      _ && (t = (t = _[jt] || null) ? Em(t.formAction) : _.getAttribute("formAction"), t !== null && (f = t, _ = null));
      var T = new Ql(
        "action",
        "action",
        null,
        i,
        o
      );
      e.push({
        event: T,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (i.defaultPrevented) {
                if (rr !== 0) {
                  var D = _ ? Cm(o, _) : new FormData(o);
                  ac(
                    n,
                    {
                      pending: !0,
                      data: D,
                      method: o.method,
                      action: f
                    },
                    null,
                    D
                  );
                }
              } else
                typeof f == "function" && (T.preventDefault(), D = _ ? Cm(o, _) : new FormData(o), ac(
                  n,
                  {
                    pending: !0,
                    data: D,
                    method: o.method,
                    action: f
                  },
                  f,
                  D
                ));
            },
            currentTarget: o
          }
        ]
      });
    }
  }
  for (var Uc = 0; Uc < xu.length; Uc++) {
    var Hc = xu[Uc], f0 = Hc.toLowerCase(), h0 = Hc[0].toUpperCase() + Hc.slice(1);
    vn(
      f0,
      "on" + h0
    );
  }
  vn(ad, "onAnimationEnd"), vn(rd, "onAnimationIteration"), vn(id, "onAnimationStart"), vn("dblclick", "onDoubleClick"), vn("focusin", "onFocus"), vn("focusout", "onBlur"), vn(Oy, "onTransitionRun"), vn(Dy, "onTransitionStart"), vn(My, "onTransitionCancel"), vn(ld, "onTransitionEnd"), xr("onMouseEnter", ["mouseout", "mouseover"]), xr("onMouseLeave", ["mouseout", "mouseover"]), xr("onPointerEnter", ["pointerout", "pointerover"]), xr("onPointerLeave", ["pointerout", "pointerover"]), Ia(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ia(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ia("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ia(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ia(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ia(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var nl = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), d0 = new Set(
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
            var T = i[_], D = T.instance, P = T.currentTarget;
            if (T = T.listener, D !== f && o.isPropagationStopped())
              break e;
            f = T, o.currentTarget = P;
            try {
              f(o);
            } catch (X) {
              Ss(X);
            }
            o.currentTarget = null, f = D;
          }
        else
          for (_ = 0; _ < i.length; _++) {
            if (T = i[_], D = T.instance, P = T.currentTarget, T = T.listener, D !== f && o.isPropagationStopped())
              break e;
            f = T, o.currentTarget = P;
            try {
              f(o);
            } catch (X) {
              Ss(X);
            }
            o.currentTarget = null, f = D;
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
        n !== "selectionchange" && (d0.has(n) || Pc(n, !1, e), Pc(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[js] || (t[js] = !0, Pc("selectionchange", !1, t));
    }
  }
  function Tm(e, t, n, i) {
    switch (Km(t)) {
      case 2:
        var o = P0;
        break;
      case 8:
        o = q0;
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
          var T = i.stateNode.containerInfo;
          if (T === o) break;
          if (_ === 4)
            for (_ = i.return; _ !== null; ) {
              var D = _.tag;
              if ((D === 3 || D === 4) && _.stateNode.containerInfo === o)
                return;
              _ = _.return;
            }
          for (; T !== null; ) {
            if (_ = br(T), _ === null) return;
            if (D = _.tag, D === 5 || D === 6 || D === 26 || D === 27) {
              i = f = _;
              continue e;
            }
            T = T.parentNode;
          }
        }
        i = i.return;
      }
    kh(function() {
      var P = f, X = su(n), W = [];
      e: {
        var G = sd.get(e);
        if (G !== void 0) {
          var V = Ql, be = e;
          switch (e) {
            case "keypress":
              if (Fl(n) === 0) break e;
            case "keydown":
            case "keyup":
              V = sy;
              break;
            case "focusin":
              be = "focus", V = du;
              break;
            case "focusout":
              be = "blur", V = du;
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
              V = Z1;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              V = cy;
              break;
            case ad:
            case rd:
            case id:
              V = W1;
              break;
            case ld:
              V = hy;
              break;
            case "scroll":
            case "scrollend":
              V = X1;
              break;
            case "wheel":
              V = py;
              break;
            case "copy":
            case "cut":
            case "paste":
              V = ey;
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
              V = gy;
          }
          var ve = (t & 4) !== 0, Xe = !ve && (e === "scroll" || e === "scrollend"), z = ve ? G !== null ? G + "Capture" : null : G;
          ve = [];
          for (var B = P, H; B !== null; ) {
            var Z = B;
            if (H = Z.stateNode, Z = Z.tag, Z !== 5 && Z !== 26 && Z !== 27 || H === null || z === null || (Z = _i(B, z), Z != null && ve.push(
              al(B, Z, H)
            )), Xe) break;
            B = B.return;
          }
          0 < ve.length && (G = new V(
            G,
            be,
            null,
            n,
            X
          ), W.push({ event: G, listeners: ve }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (G = e === "mouseover" || e === "pointerover", V = e === "mouseout" || e === "pointerout", G && n !== lu && (be = n.relatedTarget || n.fromElement) && (br(be) || be[yr]))
            break e;
          if ((V || G) && (G = X.window === X ? X : (G = X.ownerDocument) ? G.defaultView || G.parentWindow : window, V ? (be = n.relatedTarget || n.toElement, V = P, be = be ? br(be) : null, be !== null && (Xe = u(be), ve = be.tag, be !== Xe || ve !== 5 && ve !== 27 && ve !== 6) && (be = null)) : (V = null, be = P), V !== be)) {
            if (ve = Bh, Z = "onMouseLeave", z = "onMouseEnter", B = "mouse", (e === "pointerout" || e === "pointerover") && (ve = Uh, Z = "onPointerLeave", z = "onPointerEnter", B = "pointer"), Xe = V == null ? G : Si(V), H = be == null ? G : Si(be), G = new ve(
              Z,
              B + "leave",
              V,
              n,
              X
            ), G.target = Xe, G.relatedTarget = H, Z = null, br(X) === P && (ve = new ve(
              z,
              B + "enter",
              be,
              n,
              X
            ), ve.target = H, ve.relatedTarget = Xe, Z = ve), Xe = Z, V && be)
              t: {
                for (ve = V, z = be, B = 0, H = ve; H; H = $r(H))
                  B++;
                for (H = 0, Z = z; Z; Z = $r(Z))
                  H++;
                for (; 0 < B - H; )
                  ve = $r(ve), B--;
                for (; 0 < H - B; )
                  z = $r(z), H--;
                for (; B--; ) {
                  if (ve === z || z !== null && ve === z.alternate)
                    break t;
                  ve = $r(ve), z = $r(z);
                }
                ve = null;
              }
            else ve = null;
            V !== null && wm(
              W,
              G,
              V,
              ve,
              !1
            ), be !== null && Xe !== null && wm(
              W,
              Xe,
              be,
              ve,
              !0
            );
          }
        }
        e: {
          if (G = P ? Si(P) : window, V = G.nodeName && G.nodeName.toLowerCase(), V === "select" || V === "input" && G.type === "file")
            var ce = Fh;
          else if (Vh(G))
            if (Xh)
              ce = Ty;
            else {
              ce = Cy;
              var Ne = Ey;
            }
          else
            V = G.nodeName, !V || V.toLowerCase() !== "input" || G.type !== "checkbox" && G.type !== "radio" ? P && iu(P.elementType) && (ce = Fh) : ce = Ay;
          if (ce && (ce = ce(e, P))) {
            Yh(
              W,
              ce,
              n,
              X
            );
            break e;
          }
          Ne && Ne(e, G, P), e === "focusout" && P && G.type === "number" && P.memoizedProps.value != null && ru(G, "number", G.value);
        }
        switch (Ne = P ? Si(P) : window, e) {
          case "focusin":
            (Vh(Ne) || Ne.contentEditable === "true") && (Or = Ne, bu = P, Oi = null);
            break;
          case "focusout":
            Oi = bu = Or = null;
            break;
          case "mousedown":
            Su = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Su = !1, td(W, n, X);
            break;
          case "selectionchange":
            if (Ny) break;
          case "keydown":
          case "keyup":
            td(W, n, X);
        }
        var de;
        if (mu)
          e: {
            switch (e) {
              case "compositionstart":
                var ye = "onCompositionStart";
                break e;
              case "compositionend":
                ye = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ye = "onCompositionUpdate";
                break e;
            }
            ye = void 0;
          }
        else
          Nr ? Ih(e, n) && (ye = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ye = "onCompositionStart");
        ye && (Hh && n.locale !== "ko" && (Nr || ye !== "onCompositionStart" ? ye === "onCompositionEnd" && Nr && (de = jh()) : (oa = X, cu = "value" in oa ? oa.value : oa.textContent, Nr = !0)), Ne = Ls(P, ye), 0 < Ne.length && (ye = new zh(
          ye,
          e,
          null,
          n,
          X
        ), W.push({ event: ye, listeners: Ne }), de ? ye.data = de : (de = Gh(n), de !== null && (ye.data = de)))), (de = yy ? by(e, n) : Sy(e, n)) && (ye = Ls(P, "onBeforeInput"), 0 < ye.length && (Ne = new zh(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          X
        ), W.push({
          event: Ne,
          listeners: ye
        }), Ne.data = de)), c0(
          W,
          e,
          P,
          n,
          X
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
  function $r(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function wm(e, t, n, i, o) {
    for (var f = t._reactName, _ = []; n !== null && n !== i; ) {
      var T = n, D = T.alternate, P = T.stateNode;
      if (T = T.tag, D !== null && D === i) break;
      T !== 5 && T !== 26 && T !== 27 || P === null || (D = P, o ? (P = _i(n, f), P != null && _.unshift(
        al(n, P, D)
      )) : o || (P = _i(n, f), P != null && _.push(
        al(n, P, D)
      ))), n = n.return;
    }
    _.length !== 0 && e.push({ event: t, listeners: _ });
  }
  var p0 = /\r\n?/g, m0 = /\u0000|\uFFFD/g;
  function Nm(e) {
    return (typeof e == "string" ? e : "" + e).replace(p0, `
`).replace(m0, "");
  }
  function Om(e, t) {
    return t = Nm(t), Nm(e) === t;
  }
  function Bs() {
  }
  function Fe(e, t, n, i, o, f) {
    switch (n) {
      case "children":
        typeof i == "string" ? t === "body" || t === "textarea" && i === "" || Ar(e, i) : (typeof i == "number" || typeof i == "bigint") && t !== "body" && Ar(e, "" + i);
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
          typeof f == "function" && (n === "formAction" ? (t !== "input" && Fe(e, t, "name", o.name, o, null), Fe(
            e,
            t,
            "formEncType",
            o.formEncType,
            o,
            null
          ), Fe(
            e,
            t,
            "formMethod",
            o.formMethod,
            o,
            null
          ), Fe(
            e,
            t,
            "formTarget",
            o.formTarget,
            o,
            null
          )) : (Fe(e, t, "encType", o.encType, o, null), Fe(e, t, "method", o.method, o, null), Fe(e, t, "target", o.target, o, null)));
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
        zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        zn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        zn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        zn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        zn(
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
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = Y1.get(n) || n, Pl(e, n, i));
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
        typeof i == "string" ? Ar(e, i) : (typeof i == "number" || typeof i == "bigint") && Ar(e, "" + i);
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
                  Fe(e, t, f, _, n, null);
              }
          }
        o && Fe(e, t, "srcSet", n.srcSet, n, null), i && Fe(e, t, "src", n.src, n, null);
        return;
      case "input":
        Me("invalid", e);
        var T = f = _ = o = null, D = null, P = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var X = n[i];
            if (X != null)
              switch (i) {
                case "name":
                  o = X;
                  break;
                case "type":
                  _ = X;
                  break;
                case "checked":
                  D = X;
                  break;
                case "defaultChecked":
                  P = X;
                  break;
                case "value":
                  f = X;
                  break;
                case "defaultValue":
                  T = X;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (X != null)
                    throw Error(s(137, t));
                  break;
                default:
                  Fe(e, t, i, X, n, null);
              }
          }
        wh(
          e,
          f,
          T,
          D,
          P,
          _,
          o,
          !1
        ), Il(e);
        return;
      case "select":
        Me("invalid", e), i = _ = f = null;
        for (o in n)
          if (n.hasOwnProperty(o) && (T = n[o], T != null))
            switch (o) {
              case "value":
                f = T;
                break;
              case "defaultValue":
                _ = T;
                break;
              case "multiple":
                i = T;
              default:
                Fe(e, t, o, T, n, null);
            }
        t = f, n = _, e.multiple = !!i, t != null ? Cr(e, !!i, t, !1) : n != null && Cr(e, !!i, n, !0);
        return;
      case "textarea":
        Me("invalid", e), f = o = i = null;
        for (_ in n)
          if (n.hasOwnProperty(_) && (T = n[_], T != null))
            switch (_) {
              case "value":
                i = T;
                break;
              case "defaultValue":
                o = T;
                break;
              case "children":
                f = T;
                break;
              case "dangerouslySetInnerHTML":
                if (T != null) throw Error(s(91));
                break;
              default:
                Fe(e, t, _, T, n, null);
            }
        Oh(e, i, o, f), Il(e);
        return;
      case "option":
        for (D in n)
          if (n.hasOwnProperty(D) && (i = n[D], i != null))
            switch (D) {
              case "selected":
                e.selected = i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                Fe(e, t, D, i, n, null);
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
        for (P in n)
          if (n.hasOwnProperty(P) && (i = n[P], i != null))
            switch (P) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                Fe(e, t, P, i, n, null);
            }
        return;
      default:
        if (iu(t)) {
          for (X in n)
            n.hasOwnProperty(X) && (i = n[X], i !== void 0 && Gc(
              e,
              t,
              X,
              i,
              n,
              void 0
            ));
          return;
        }
    }
    for (T in n)
      n.hasOwnProperty(T) && (i = n[T], i != null && Fe(e, t, T, i, n, null));
  }
  function g0(e, t, n, i) {
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
        var o = null, f = null, _ = null, T = null, D = null, P = null, X = null;
        for (V in n) {
          var W = n[V];
          if (n.hasOwnProperty(V) && W != null)
            switch (V) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                D = W;
              default:
                i.hasOwnProperty(V) || Fe(e, t, V, null, i, W);
            }
        }
        for (var G in i) {
          var V = i[G];
          if (W = n[G], i.hasOwnProperty(G) && (V != null || W != null))
            switch (G) {
              case "type":
                f = V;
                break;
              case "name":
                o = V;
                break;
              case "checked":
                P = V;
                break;
              case "defaultChecked":
                X = V;
                break;
              case "value":
                _ = V;
                break;
              case "defaultValue":
                T = V;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (V != null)
                  throw Error(s(137, t));
                break;
              default:
                V !== W && Fe(
                  e,
                  t,
                  G,
                  V,
                  i,
                  W
                );
            }
        }
        au(
          e,
          _,
          T,
          D,
          P,
          X,
          f,
          o
        );
        return;
      case "select":
        V = _ = T = G = null;
        for (f in n)
          if (D = n[f], n.hasOwnProperty(f) && D != null)
            switch (f) {
              case "value":
                break;
              case "multiple":
                V = D;
              default:
                i.hasOwnProperty(f) || Fe(
                  e,
                  t,
                  f,
                  null,
                  i,
                  D
                );
            }
        for (o in i)
          if (f = i[o], D = n[o], i.hasOwnProperty(o) && (f != null || D != null))
            switch (o) {
              case "value":
                G = f;
                break;
              case "defaultValue":
                T = f;
                break;
              case "multiple":
                _ = f;
              default:
                f !== D && Fe(
                  e,
                  t,
                  o,
                  f,
                  i,
                  D
                );
            }
        t = T, n = _, i = V, G != null ? Cr(e, !!n, G, !1) : !!i != !!n && (t != null ? Cr(e, !!n, t, !0) : Cr(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        V = G = null;
        for (T in n)
          if (o = n[T], n.hasOwnProperty(T) && o != null && !i.hasOwnProperty(T))
            switch (T) {
              case "value":
                break;
              case "children":
                break;
              default:
                Fe(e, t, T, null, i, o);
            }
        for (_ in i)
          if (o = i[_], f = n[_], i.hasOwnProperty(_) && (o != null || f != null))
            switch (_) {
              case "value":
                G = o;
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
                o !== f && Fe(e, t, _, o, i, f);
            }
        Nh(e, G, V);
        return;
      case "option":
        for (var be in n)
          if (G = n[be], n.hasOwnProperty(be) && G != null && !i.hasOwnProperty(be))
            switch (be) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Fe(
                  e,
                  t,
                  be,
                  null,
                  i,
                  G
                );
            }
        for (D in i)
          if (G = i[D], V = n[D], i.hasOwnProperty(D) && G !== V && (G != null || V != null))
            switch (D) {
              case "selected":
                e.selected = G && typeof G != "function" && typeof G != "symbol";
                break;
              default:
                Fe(
                  e,
                  t,
                  D,
                  G,
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
        for (var ve in n)
          G = n[ve], n.hasOwnProperty(ve) && G != null && !i.hasOwnProperty(ve) && Fe(e, t, ve, null, i, G);
        for (P in i)
          if (G = i[P], V = n[P], i.hasOwnProperty(P) && G !== V && (G != null || V != null))
            switch (P) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null)
                  throw Error(s(137, t));
                break;
              default:
                Fe(
                  e,
                  t,
                  P,
                  G,
                  i,
                  V
                );
            }
        return;
      default:
        if (iu(t)) {
          for (var Xe in n)
            G = n[Xe], n.hasOwnProperty(Xe) && G !== void 0 && !i.hasOwnProperty(Xe) && Gc(
              e,
              t,
              Xe,
              void 0,
              i,
              G
            );
          for (X in i)
            G = i[X], V = n[X], !i.hasOwnProperty(X) || G === V || G === void 0 && V === void 0 || Gc(
              e,
              t,
              X,
              G,
              i,
              V
            );
          return;
        }
    }
    for (var z in n)
      G = n[z], n.hasOwnProperty(z) && G != null && !i.hasOwnProperty(z) && Fe(e, t, z, null, i, G);
    for (W in i)
      G = i[W], V = n[W], !i.hasOwnProperty(W) || G === V || G == null && V == null || Fe(e, t, W, G, i, V);
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
  function v0() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Xc ? !1 : (Xc = e, !0) : (Xc = null, !1);
  }
  var Rm = typeof setTimeout == "function" ? setTimeout : void 0, y0 = typeof clearTimeout == "function" ? clearTimeout : void 0, km = typeof Promise == "function" ? Promise : void 0, b0 = typeof queueMicrotask == "function" ? queueMicrotask : typeof km < "u" ? function(e) {
    return km.resolve(null).then(e).catch(S0);
  } : Rm;
  function S0(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ca(e) {
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
                var T = _.nextSibling, D = _.nodeName;
                _[bi] || D === "SCRIPT" || D === "STYLE" || D === "LINK" && _.rel.toLowerCase() === "stylesheet" || n.removeChild(_), _ = T;
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
  function _0(e, t, n, i) {
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
      if (e = bn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function x0(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = bn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Zc(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState === "complete";
  }
  function E0(e, t) {
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
  function bn(e) {
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
  var dn = /* @__PURE__ */ new Map(), zm = /* @__PURE__ */ new Set();
  function Us(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Jn = ee.d;
  ee.d = {
    f: C0,
    r: A0,
    D: T0,
    C: w0,
    L: N0,
    m: O0,
    X: M0,
    S: D0,
    M: R0
  };
  function C0() {
    var e = Jn.f(), t = Os();
    return e || t;
  }
  function A0(e) {
    var t = Sr(e);
    t !== null && t.tag === 5 && t.type === "form" ? ap(t) : Jn.r(e);
  }
  var ei = typeof document > "u" ? null : document;
  function Um(e, t, n) {
    var i = ei;
    if (i && typeof t == "string" && t) {
      var o = ln(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), zm.has(o) || (zm.add(o), e = { rel: e, crossOrigin: n, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), _t(t, "link", e), mt(t), i.head.appendChild(t)));
    }
  }
  function T0(e) {
    Jn.D(e), Um("dns-prefetch", e, null);
  }
  function w0(e, t) {
    Jn.C(e, t), Um("preconnect", e, t);
  }
  function N0(e, t, n) {
    Jn.L(e, t, n);
    var i = ei;
    if (i && e && t) {
      var o = 'link[rel="preload"][as="' + ln(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + ln(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + ln(
        n.imageSizes
      ) + '"]')) : o += '[href="' + ln(e) + '"]';
      var f = o;
      switch (t) {
        case "style":
          f = ti(e);
          break;
        case "script":
          f = ni(e);
      }
      dn.has(f) || (e = y(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), dn.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(il(f)) || t === "script" && i.querySelector(ll(f)) || (t = i.createElement("link"), _t(t, "link", e), mt(t), i.head.appendChild(t)));
    }
  }
  function O0(e, t) {
    Jn.m(e, t);
    var n = ei;
    if (n && e) {
      var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + ln(i) + '"][href="' + ln(e) + '"]', f = o;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = ni(e);
      }
      if (!dn.has(f) && (e = y({ rel: "modulepreload", href: e }, t), dn.set(f, e), n.querySelector(o) === null)) {
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
  function D0(e, t, n) {
    Jn.S(e, t, n);
    var i = ei;
    if (i && e) {
      var o = _r(i).hoistableStyles, f = ti(e);
      t = t || "default";
      var _ = o.get(f);
      if (!_) {
        var T = { loading: 0, preload: null };
        if (_ = i.querySelector(
          il(f)
        ))
          T.loading = 5;
        else {
          e = y(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = dn.get(f)) && Jc(e, n);
          var D = _ = i.createElement("link");
          mt(D), _t(D, "link", e), D._p = new Promise(function(P, X) {
            D.onload = P, D.onerror = X;
          }), D.addEventListener("load", function() {
            T.loading |= 1;
          }), D.addEventListener("error", function() {
            T.loading |= 2;
          }), T.loading |= 4, Hs(_, t, i);
        }
        _ = {
          type: "stylesheet",
          instance: _,
          count: 1,
          state: T
        }, o.set(f, _);
      }
    }
  }
  function M0(e, t) {
    Jn.X(e, t);
    var n = ei;
    if (n && e) {
      var i = _r(n).hoistableScripts, o = ni(e), f = i.get(o);
      f || (f = n.querySelector(ll(o)), f || (e = y({ src: e, async: !0 }, t), (t = dn.get(o)) && Wc(e, t), f = n.createElement("script"), mt(f), _t(f, "link", e), n.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, i.set(o, f));
    }
  }
  function R0(e, t) {
    Jn.M(e, t);
    var n = ei;
    if (n && e) {
      var i = _r(n).hoistableScripts, o = ni(e), f = i.get(o);
      f || (f = n.querySelector(ll(o)), f || (e = y({ src: e, async: !0, type: "module" }, t), (t = dn.get(o)) && Wc(e, t), f = n.createElement("script"), mt(f), _t(f, "link", e), n.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, i.set(o, f));
    }
  }
  function Hm(e, t, n, i) {
    var o = (o = me.current) ? Us(o) : null;
    if (!o) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = ti(n.href), n = _r(
          o
        ).hoistableStyles, i = n.get(t), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = ti(n.href);
          var f = _r(
            o
          ).hoistableStyles, _ = f.get(e);
          if (_ || (o = o.ownerDocument || o, _ = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, f.set(e, _), (f = o.querySelector(
            il(e)
          )) && !f._p && (_.instance = f, _.state.loading = 5), dn.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, dn.set(e, n), f || k0(
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
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ni(n), n = _r(
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
  function ti(e) {
    return 'href="' + ln(e) + '"';
  }
  function il(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Pm(e) {
    return y({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function k0(e, t, n, i) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? i.loading = 1 : (t = e.createElement("link"), i.preload = t, t.addEventListener("load", function() {
      return i.loading |= 1;
    }), t.addEventListener("error", function() {
      return i.loading |= 2;
    }), _t(t, "link", n), mt(t), e.head.appendChild(t));
  }
  function ni(e) {
    return '[src="' + ln(e) + '"]';
  }
  function ll(e) {
    return "script[async]" + e;
  }
  function qm(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var i = e.querySelector(
            'style[data-href~="' + ln(n.href) + '"]'
          );
          if (i)
            return t.instance = i, mt(i), i;
          var o = y({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return i = (e.ownerDocument || e).createElement(
            "style"
          ), mt(i), _t(i, "style", o), Hs(i, n.precedence, e), t.instance = i;
        case "stylesheet":
          o = ti(n.href);
          var f = e.querySelector(
            il(o)
          );
          if (f)
            return t.state.loading |= 4, t.instance = f, mt(f), f;
          i = Pm(n), (o = dn.get(o)) && Jc(i, o), f = (e.ownerDocument || e).createElement("link"), mt(f);
          var _ = f;
          return _._p = new Promise(function(T, D) {
            _.onload = T, _.onerror = D;
          }), _t(f, "link", i), t.state.loading |= 4, Hs(f, n.precedence, e), t.instance = f;
        case "script":
          return f = ni(n.src), (o = e.querySelector(
            ll(f)
          )) ? (t.instance = o, mt(o), o) : (i = n, (o = dn.get(f)) && (i = y({}, n), Wc(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), mt(o), _t(o, "link", i), e.head.appendChild(o), t.instance = o);
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
      var T = i[_];
      if (T.dataset.precedence === t) f = T;
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
        var T = i.get(_);
        T ? T.push(f) : i.set(_, [f]);
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
  function j0(e, t, n) {
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
  function L0() {
  }
  function B0(e, t, n) {
    if (sl === null) throw Error(s(475));
    var i = sl;
    if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var o = ti(n.href), f = e.querySelector(
          il(o)
        );
        if (f) {
          e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = qs.bind(i), e.then(i, i)), t.state.loading |= 4, t.instance = f, mt(f);
          return;
        }
        f = e.ownerDocument || e, n = Pm(n), (o = dn.get(o)) && Jc(n, o), f = f.createElement("link"), mt(f);
        var _ = f;
        _._p = new Promise(function(T, D) {
          _.onload = T, _.onerror = D;
        }), _t(f, "link", n), t.instance = f;
      }
      i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (i.count++, t = qs.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function z0() {
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
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Is = /* @__PURE__ */ new Map(), t.forEach(U0, e), Is = null, qs.call(e));
  }
  function U0(e, t) {
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
    $$typeof: M,
    Provider: null,
    Consumer: null,
    _currentValue: ie,
    _currentValue2: ie,
    _threadCount: 0
  };
  function H0(e, t, n, i, o, f, _, T) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Zo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zo(0), this.hiddenUpdates = Zo(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = _, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = T, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ym(e, t, n, i, o, f, _, T, D, P, X, W) {
    return e = new H0(
      e,
      t,
      n,
      _,
      T,
      D,
      P,
      W
    ), t = 1, f === !0 && (t |= 24), f = Ft(3, null, null, t), e.current = f, f.stateNode = e, t = ju(), t.refCount++, e.pooledCache = t, t.refCount++, f.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: t
    }, Uu(f), e;
  }
  function Fm(e) {
    return e ? (e = kr, e) : kr;
  }
  function Xm(e, t, n, i, o, f) {
    o = Fm(o), i.context === null ? i.context = o : i.pendingContext = o, i = fa(t), i.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (i.callback = f), n = ha(e, i, t), n !== null && (Jt(n, e, t), Ui(n, e, t));
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
      var t = Rr(e, 67108864);
      t !== null && Jt(t, e, 67108864), ef(e, 67108864);
    }
  }
  var Gs = !0;
  function P0(e, t, n, i) {
    var o = U.T;
    U.T = null;
    var f = ee.p;
    try {
      ee.p = 2, tf(e, t, n, i);
    } finally {
      ee.p = f, U.T = o;
    }
  }
  function q0(e, t, n, i) {
    var o = U.T;
    U.T = null;
    var f = ee.p;
    try {
      ee.p = 8, tf(e, t, n, i);
    } finally {
      ee.p = f, U.T = o;
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
      else if (G0(
        o,
        e,
        t,
        n,
        i
      ))
        i.stopPropagation();
      else if (Jm(e, i), t & 4 && -1 < I0.indexOf(e)) {
        for (; o !== null; ) {
          var f = Sr(o);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                  var _ = an(f.pendingLanes);
                  if (_ !== 0) {
                    var T = f;
                    for (T.pendingLanes |= 2, T.entangledLanes |= 2; _; ) {
                      var D = 1 << 31 - ge(_);
                      T.entanglements[1] |= D, _ &= ~D;
                    }
                    Dn(f), (Ge & 6) === 0 && (ws = Nt() + 500, tl(0));
                  }
                }
                break;
              case 13:
                T = Rr(f, 2), T !== null && Jt(T, f, 2), Os(), ef(f, 2);
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
    if (Vs = null, e = br(e), e !== null) {
      var t = u(e);
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
          case pe:
            return 8;
          case fe:
          case ze:
            return 32;
          case Ue:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var rf = !1, Aa = null, Ta = null, wa = null, ul = /* @__PURE__ */ new Map(), cl = /* @__PURE__ */ new Map(), Na = [], I0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Jm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Aa = null;
        break;
      case "dragenter":
      case "dragleave":
        Ta = null;
        break;
      case "mouseover":
      case "mouseout":
        wa = null;
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
    }, t !== null && (t = Sr(t), t !== null && Zm(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function G0(e, t, n, i, o) {
    switch (t) {
      case "focusin":
        return Aa = fl(
          Aa,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "dragenter":
        return Ta = fl(
          Ta,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "mouseover":
        return wa = fl(
          wa,
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
    var t = br(e.target);
    if (t !== null) {
      var n = u(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = b(n), t !== null) {
            e.blockedOn = t, B1(e.priority, function() {
              if (n.tag === 13) {
                var i = Kt();
                i = Ko(i);
                var o = Rr(n, i);
                o !== null && Jt(o, n, i), ef(n, i);
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
        return t = Sr(n), t !== null && Zm(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function $m(e, t, n) {
    Ys(e) && n.delete(t);
  }
  function V0() {
    rf = !1, Aa !== null && Ys(Aa) && (Aa = null), Ta !== null && Ys(Ta) && (Ta = null), wa !== null && Ys(wa) && (wa = null), ul.forEach($m), cl.forEach($m);
  }
  function Fs(e, t) {
    e.blockedOn === t && (e.blockedOn = null, rf || (rf = !0, r.unstable_scheduleCallback(
      r.unstable_NormalPriority,
      V0
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
          var f = Sr(n);
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
    function t(D) {
      return Fs(D, e);
    }
    Aa !== null && Fs(Aa, e), Ta !== null && Fs(Ta, e), wa !== null && Fs(wa, e), ul.forEach(t), cl.forEach(t);
    for (var n = 0; n < Na.length; n++) {
      var i = Na[n];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < Na.length && (n = Na[0], n.blockedOn === null); )
      Wm(n), n.blockedOn === null && Na.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (i = 0; i < n.length; i += 3) {
        var o = n[i], f = n[i + 1], _ = o[jt] || null;
        if (typeof f == "function")
          _ || eg(n);
        else if (_) {
          var T = null;
          if (f && f.hasAttribute("formAction")) {
            if (o = f, _ = f[jt] || null)
              T = _.formAction;
            else if (af(o) !== null) continue;
          } else T = _.action;
          typeof T == "function" ? n[i + 1] = T : (n.splice(i, 3), i -= 3), eg(n);
        }
      }
  }
  function lf(e) {
    this._internalRoot = e;
  }
  Qs.prototype.render = lf.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var n = t.current, i = Kt();
    Xm(n, i, e, t, null, null);
  }, Qs.prototype.unmount = lf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Xm(e.current, 2, null, e, null, null), Os(), t[yr] = null;
    }
  };
  function Qs(e) {
    this._internalRoot = e;
  }
  Qs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = vh();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Na.length && t !== 0 && t < Na[n].priority; n++) ;
      Na.splice(n, 0, e), n === 0 && Wm(e);
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
  ee.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = d(t), e = e !== null ? p(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Y0 = {
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
        J = Zs.inject(
          Y0
        ), ue = Zs;
      } catch {
      }
  }
  return gl.createRoot = function(e, t) {
    if (!c(e)) throw Error(s(299));
    var n = !1, i = "", o = vp, f = yp, _ = bp, T = null;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (i = t.identifierPrefix), t.onUncaughtError !== void 0 && (o = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (_ = t.onRecoverableError), t.unstable_transitionCallbacks !== void 0 && (T = t.unstable_transitionCallbacks)), t = Ym(
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
      T,
      null
    ), e[yr] = t.current, qc(e), new lf(t);
  }, gl.hydrateRoot = function(e, t, n) {
    if (!c(e)) throw Error(s(299));
    var i = !1, o = "", f = vp, _ = yp, T = bp, D = null, P = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (f = n.onUncaughtError), n.onCaughtError !== void 0 && (_ = n.onCaughtError), n.onRecoverableError !== void 0 && (T = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (D = n.unstable_transitionCallbacks), n.formState !== void 0 && (P = n.formState)), t = Ym(
      e,
      1,
      !0,
      t,
      n ?? null,
      i,
      o,
      f,
      _,
      T,
      D,
      P
    ), t.context = Fm(null), n = t.current, i = Kt(), i = Ko(i), o = fa(i), o.callback = null, ha(n, o, i), n = i, t.current.lanes = n, yi(t, n), Dn(t), e[yr] = t.current, qc(e), new Qs(t);
  }, gl.version = "19.1.1", gl;
}
var gg;
function _2() {
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
  return r(), cf.exports = S2(), cf.exports;
}
var x2 = _2();
const vg = /* @__PURE__ */ Bv(x2);
var E2 = Object.defineProperty, C2 = (r, a, l) => a in r ? E2(r, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : r[a] = l, A2 = (r, a, l) => C2(r, a + "", l);
class Uv extends Error {
  constructor(a, l) {
    super(a), A2(this, "data"), this.data = l;
  }
  toString() {
    return this.message;
  }
}
async function T2(r, a) {
  const l = SillyTavern.getContext(), s = new FormData();
  s.append("avatar", new Blob([JSON.stringify(r)], { type: "application/json" }), "character.json"), s.append("file_type", "json");
  const c = l.getRequestHeaders();
  delete c["Content-Type"];
  const u = await fetch("/api/characters/import", {
    method: "POST",
    headers: c,
    body: s,
    cache: "no-cache"
  });
  if (!u.ok)
    throw new Uv(u.statusText, u);
  await l.getCharacters();
}
async function w2(r, a) {
  var l;
  const s = SillyTavern.getContext();
  if (!r.avatar)
    throw new Error("`data.avatar` (character filename) is required to save character attributes.");
  r == null || delete r.json_data, (l = r?.data) == null || delete l.json_data;
  const c = s.getRequestHeaders(), u = await fetch("/api/characters/merge-attributes", {
    method: "POST",
    headers: c,
    body: JSON.stringify(r),
    cache: "no-cache"
  });
  if (!u.ok) {
    const b = await u.json().catch(() => ({ message: u.statusText }));
    throw new Uv(b.message || `Request failed with status ${u.status}`, u);
  }
  await s.getCharacters();
}
var N2 = Object.defineProperty, O2 = (r, a, l) => a in r ? N2(r, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : r[a] = l, yg = (r, a, l) => O2(r, typeof a != "symbol" ? a + "" : a, l);
class D2 {
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
    const { strategy: l = "recursive" } = a, s = this.defaultSettings.version, c = this.defaultSettings.formatVersion, u = SillyTavern.getContext().extensionSettings[this.settingsKey], b = {
      version: {
        changed: !1,
        new: s ?? ""
      },
      formatVersion: {
        changed: !1,
        new: c ?? ""
      },
      oldSettings: null,
      newSettings: this.defaultSettings
    };
    if (!u)
      return SillyTavern.getContext().extensionSettings[this.settingsKey] = this.defaultSettings, this.saveSettings(), b;
    const g = {
      ...b,
      oldSettings: structuredClone(u),
      version: {
        changed: !1,
        old: u.version,
        new: u.version
      },
      formatVersion: {
        changed: !1,
        old: u.formatVersion,
        new: u.formatVersion
      }
    };
    if (l === "recursive") {
      let d = function(p, y) {
        let S = !1;
        for (const m of Object.keys(y))
          p[m] === void 0 ? (p[m] = y[m], S = !0) : typeof y[m] == "object" && y[m] !== null && (p[m] = p[m] || {}, d(p[m], y[m]) && (S = !0));
        return S;
      };
      s && u.version !== s && (g.version.changed = !0, g.version.new = s, u.version = s), c && c !== "*" && u.formatVersion !== c && (g.formatVersion.changed = !0, g.formatVersion.new = c, u.formatVersion = c), (d(u, this.defaultSettings) || g.version.changed || g.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(l)) {
      s && !u.version && (u.version = s, g.version.changed = !0, g.version.new = s), c && !u.formatVersion && (u.formatVersion = c, g.formatVersion.changed = !0, g.formatVersion.new = c);
      let d = structuredClone(u), p = u.formatVersion;
      try {
        let y;
        do {
          y = !1;
          let S = l.find((m) => m.from === p);
          if (S && S.to > p)
            d = await S.action(d), p = S.to, d.formatVersion = S.to, y = !0;
          else
            for (const m of l)
              if (m.from === "*" && m.to > p && p !== m.to) {
                d = await m.action(d), p = m.to, d.formatVersion = m.to, y = !0;
                break;
              }
        } while (y);
        if (p !== u.formatVersion) {
          g.formatVersion.changed = !0, g.formatVersion.new = p;
          const S = this.defaultSettings.version;
          S && (d.version = S);
        }
        if (g.formatVersion.changed) {
          for (const S of Object.keys(u))
            delete u[S];
          Object.assign(u, d), this.saveSettings();
        }
      } catch (y) {
        throw console.error("Failed to apply version changes:", y), new Error(`Version migration failed: ${y instanceof Error ? y.message : y}`, {
          cause: y
        });
      }
    }
    return g.newSettings = u, g;
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
function ra(r) {
  return Array.isArray ? Array.isArray(r) : qv(r) === "[object Array]";
}
function M2(r) {
  if (typeof r == "string")
    return r;
  let a = r + "";
  return a == "0" && 1 / r == -1 / 0 ? "-0" : a;
}
function R2(r) {
  return r == null ? "" : M2(r);
}
function kn(r) {
  return typeof r == "string";
}
function Hv(r) {
  return typeof r == "number";
}
function k2(r) {
  return r === !0 || r === !1 || j2(r) && qv(r) == "[object Boolean]";
}
function Pv(r) {
  return typeof r == "object";
}
function j2(r) {
  return Pv(r) && r !== null;
}
function tn(r) {
  return r != null;
}
function pf(r) {
  return !r.trim().length;
}
function qv(r) {
  return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
}
const L2 = "Incorrect 'index' type", B2 = (r) => `Invalid value for key ${r}`, z2 = (r) => `Pattern length exceeds max of ${r}.`, U2 = (r) => `Missing ${r} property in key`, H2 = (r) => `Property 'weight' in key '${r}' must be a positive integer`, bg = Object.prototype.hasOwnProperty;
class P2 {
  constructor(a) {
    this._keys = [], this._keyMap = {};
    let l = 0;
    a.forEach((s) => {
      let c = Iv(s);
      this._keys.push(c), this._keyMap[c.id] = c, l += c.weight;
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
  let a = null, l = null, s = null, c = 1, u = null;
  if (kn(r) || ra(r))
    s = r, a = Sg(r), l = Uf(r);
  else {
    if (!bg.call(r, "name"))
      throw new Error(U2("name"));
    const b = r.name;
    if (s = b, bg.call(r, "weight") && (c = r.weight, c <= 0))
      throw new Error(H2(b));
    a = Sg(b), l = Uf(b), u = r.getFn;
  }
  return { path: a, id: l, weight: c, src: s, getFn: u };
}
function Sg(r) {
  return ra(r) ? r : r.split(".");
}
function Uf(r) {
  return ra(r) ? r.join(".") : r;
}
function q2(r, a) {
  let l = [], s = !1;
  const c = (u, b, g) => {
    if (tn(u))
      if (!b[g])
        l.push(u);
      else {
        let d = b[g];
        const p = u[d];
        if (!tn(p))
          return;
        if (g === b.length - 1 && (kn(p) || Hv(p) || k2(p)))
          l.push(R2(p));
        else if (ra(p)) {
          s = !0;
          for (let y = 0, S = p.length; y < S; y += 1)
            c(p[y], b, g + 1);
        } else b.length && c(p, b, g + 1);
      }
  };
  return c(r, kn(a) ? a.split(".") : a, 0), s ? l : l[0];
}
const I2 = {
  // Whether the matches should be included in the result set. When `true`, each record in the result
  // set will include the indices of the matched characters.
  // These can consequently be used for highlighting purposes.
  includeMatches: !1,
  // When `true`, the matching function will continue to the end of a search pattern even if
  // a perfect match has already been located in the string.
  findAllMatches: !1,
  // Minimum number of characters that must be matched before a result is considered a match
  minMatchCharLength: 1
}, G2 = {
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
}, V2 = {
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
}, Y2 = {
  // When `true`, it enables the use of unix-like search commands
  useExtendedSearch: !1,
  // The get function to use when fetching an object's properties.
  // The default will search nested paths *ie foo.bar.baz*
  getFn: q2,
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
var xe = {
  ...G2,
  ...I2,
  ...V2,
  ...Y2
};
const F2 = /[^ ]+/g;
function X2(r = 1, a = 3) {
  const l = /* @__PURE__ */ new Map(), s = Math.pow(10, a);
  return {
    get(c) {
      const u = c.match(F2).length;
      if (l.has(u))
        return l.get(u);
      const b = 1 / Math.pow(u, 0.5 * r), g = parseFloat(Math.round(b * s) / s);
      return l.set(u, g), g;
    },
    clear() {
      l.clear();
    }
  };
}
class ih {
  constructor({
    getFn: a = xe.getFn,
    fieldNormWeight: l = xe.fieldNormWeight
  } = {}) {
    this.norm = X2(l, 3), this.getFn = a, this.isCreated = !1, this.setIndexRecords();
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
    this.isCreated || !this.docs.length || (this.isCreated = !0, kn(this.docs[0]) ? this.docs.forEach((a, l) => {
      this._addString(a, l);
    }) : this.docs.forEach((a, l) => {
      this._addObject(a, l);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(a) {
    const l = this.size();
    kn(a) ? this._addString(a, l) : this._addObject(a, l);
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
    if (!tn(a) || pf(a))
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
    this.keys.forEach((c, u) => {
      let b = c.getFn ? c.getFn(a) : this.getFn(a, c.path);
      if (tn(b)) {
        if (ra(b)) {
          let g = [];
          const d = [{ nestedArrIndex: -1, value: b }];
          for (; d.length; ) {
            const { nestedArrIndex: p, value: y } = d.pop();
            if (tn(y))
              if (kn(y) && !pf(y)) {
                let S = {
                  v: y,
                  i: p,
                  n: this.norm.get(y)
                };
                g.push(S);
              } else ra(y) && y.forEach((S, m) => {
                d.push({
                  nestedArrIndex: m,
                  value: S
                });
              });
          }
          s.$[u] = g;
        } else if (kn(b) && !pf(b)) {
          let g = {
            v: b,
            n: this.norm.get(b)
          };
          s.$[u] = g;
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
function Gv(r, a, { getFn: l = xe.getFn, fieldNormWeight: s = xe.fieldNormWeight } = {}) {
  const c = new ih({ getFn: l, fieldNormWeight: s });
  return c.setKeys(r.map(Iv)), c.setSources(a), c.create(), c;
}
function Q2(r, { getFn: a = xe.getFn, fieldNormWeight: l = xe.fieldNormWeight } = {}) {
  const { keys: s, records: c } = r, u = new ih({ getFn: a, fieldNormWeight: l });
  return u.setKeys(s), u.setIndexRecords(c), u;
}
function Ks(r, {
  errors: a = 0,
  currentLocation: l = 0,
  expectedLocation: s = 0,
  distance: c = xe.distance,
  ignoreLocation: u = xe.ignoreLocation
} = {}) {
  const b = a / r.length;
  if (u)
    return b;
  const g = Math.abs(s - l);
  return c ? b + g / c : g ? 1 : b;
}
function Z2(r = [], a = xe.minMatchCharLength) {
  let l = [], s = -1, c = -1, u = 0;
  for (let b = r.length; u < b; u += 1) {
    let g = r[u];
    g && s === -1 ? s = u : !g && s !== -1 && (c = u - 1, c - s + 1 >= a && l.push([s, c]), s = -1);
  }
  return r[u - 1] && u - s >= a && l.push([s, u - 1]), l;
}
const fr = 32;
function K2(r, a, l, {
  location: s = xe.location,
  distance: c = xe.distance,
  threshold: u = xe.threshold,
  findAllMatches: b = xe.findAllMatches,
  minMatchCharLength: g = xe.minMatchCharLength,
  includeMatches: d = xe.includeMatches,
  ignoreLocation: p = xe.ignoreLocation
} = {}) {
  if (a.length > fr)
    throw new Error(z2(fr));
  const y = a.length, S = r.length, m = Math.max(0, Math.min(s, S));
  let v = u, h = m;
  const x = g > 1 || d, C = x ? Array(S) : [];
  let O;
  for (; (O = r.indexOf(a, h)) > -1; ) {
    let L = Ks(a, {
      currentLocation: O,
      expectedLocation: m,
      distance: c,
      ignoreLocation: p
    });
    if (v = Math.min(L, v), h = O + y, x) {
      let I = 0;
      for (; I < y; )
        C[O + I] = 1, I += 1;
    }
  }
  h = -1;
  let A = [], M = 1, E = y + S;
  const w = 1 << y - 1;
  for (let L = 0; L < y; L += 1) {
    let I = 0, $ = E;
    for (; I < $; )
      Ks(a, {
        errors: L,
        currentLocation: m + $,
        expectedLocation: m,
        distance: c,
        ignoreLocation: p
      }) <= v ? I = $ : E = $, $ = Math.floor((E - I) / 2 + I);
    E = $;
    let q = Math.max(1, m - $ + 1), F = b ? S : Math.min(m + $, S) + y, Y = Array(F + 2);
    Y[F + 1] = (1 << L) - 1;
    for (let oe = F; oe >= q; oe -= 1) {
      let he = oe - 1, U = l[r.charAt(he)];
      if (x && (C[he] = +!!U), Y[oe] = (Y[oe + 1] << 1 | 1) & U, L && (Y[oe] |= (A[oe + 1] | A[oe]) << 1 | 1 | A[oe + 1]), Y[oe] & w && (M = Ks(a, {
        errors: L,
        currentLocation: he,
        expectedLocation: m,
        distance: c,
        ignoreLocation: p
      }), M <= v)) {
        if (v = M, h = he, h <= m)
          break;
        q = Math.max(1, 2 * m - h);
      }
    }
    if (Ks(a, {
      errors: L + 1,
      currentLocation: m,
      expectedLocation: m,
      distance: c,
      ignoreLocation: p
    }) > v)
      break;
    A = Y;
  }
  const R = {
    isMatch: h >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, M)
  };
  if (x) {
    const L = Z2(C, g);
    L.length ? d && (R.indices = L) : R.isMatch = !1;
  }
  return R;
}
function J2(r) {
  let a = {};
  for (let l = 0, s = r.length; l < s; l += 1) {
    const c = r.charAt(l);
    a[c] = (a[c] || 0) | 1 << s - l - 1;
  }
  return a;
}
const Uo = String.prototype.normalize ? ((r) => r.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((r) => r);
class Vv {
  constructor(a, {
    location: l = xe.location,
    threshold: s = xe.threshold,
    distance: c = xe.distance,
    includeMatches: u = xe.includeMatches,
    findAllMatches: b = xe.findAllMatches,
    minMatchCharLength: g = xe.minMatchCharLength,
    isCaseSensitive: d = xe.isCaseSensitive,
    ignoreDiacritics: p = xe.ignoreDiacritics,
    ignoreLocation: y = xe.ignoreLocation
  } = {}) {
    if (this.options = {
      location: l,
      threshold: s,
      distance: c,
      includeMatches: u,
      findAllMatches: b,
      minMatchCharLength: g,
      isCaseSensitive: d,
      ignoreDiacritics: p,
      ignoreLocation: y
    }, a = d ? a : a.toLowerCase(), a = p ? Uo(a) : a, this.pattern = a, this.chunks = [], !this.pattern.length)
      return;
    const S = (v, h) => {
      this.chunks.push({
        pattern: v,
        alphabet: J2(v),
        startIndex: h
      });
    }, m = this.pattern.length;
    if (m > fr) {
      let v = 0;
      const h = m % fr, x = m - h;
      for (; v < x; )
        S(this.pattern.substr(v, fr), v), v += fr;
      if (h) {
        const C = m - fr;
        S(this.pattern.substr(C), C);
      }
    } else
      S(this.pattern, 0);
  }
  searchIn(a) {
    const { isCaseSensitive: l, ignoreDiacritics: s, includeMatches: c } = this.options;
    if (a = l ? a : a.toLowerCase(), a = s ? Uo(a) : a, this.pattern === a) {
      let x = {
        isMatch: !0,
        score: 0
      };
      return c && (x.indices = [[0, a.length - 1]]), x;
    }
    const {
      location: u,
      distance: b,
      threshold: g,
      findAllMatches: d,
      minMatchCharLength: p,
      ignoreLocation: y
    } = this.options;
    let S = [], m = 0, v = !1;
    this.chunks.forEach(({ pattern: x, alphabet: C, startIndex: O }) => {
      const { isMatch: A, score: M, indices: E } = K2(a, x, C, {
        location: u + O,
        distance: b,
        threshold: g,
        findAllMatches: d,
        minMatchCharLength: p,
        includeMatches: c,
        ignoreLocation: y
      });
      A && (v = !0), m += M, A && E && (S = [...S, ...E]);
    });
    let h = {
      isMatch: v,
      score: v ? m / this.chunks.length : 1
    };
    return v && c && (h.indices = S), h;
  }
}
class Ba {
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
class W2 extends Ba {
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
class $2 extends Ba {
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
class eb extends Ba {
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
class tb extends Ba {
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
class nb extends Ba {
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
class ab extends Ba {
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
class Yv extends Ba {
  constructor(a, {
    location: l = xe.location,
    threshold: s = xe.threshold,
    distance: c = xe.distance,
    includeMatches: u = xe.includeMatches,
    findAllMatches: b = xe.findAllMatches,
    minMatchCharLength: g = xe.minMatchCharLength,
    isCaseSensitive: d = xe.isCaseSensitive,
    ignoreDiacritics: p = xe.ignoreDiacritics,
    ignoreLocation: y = xe.ignoreLocation
  } = {}) {
    super(a), this._bitapSearch = new Vv(a, {
      location: l,
      threshold: s,
      distance: c,
      includeMatches: u,
      findAllMatches: b,
      minMatchCharLength: g,
      isCaseSensitive: d,
      ignoreDiacritics: p,
      ignoreLocation: y
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
class Fv extends Ba {
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
    const c = [], u = this.pattern.length;
    for (; (s = a.indexOf(this.pattern, l)) > -1; )
      l = s + u, c.push([s, l - 1]);
    const b = !!c.length;
    return {
      isMatch: b,
      score: b ? 0 : 1,
      indices: c
    };
  }
}
const Hf = [
  W2,
  Fv,
  eb,
  tb,
  ab,
  nb,
  $2,
  Yv
], xg = Hf.length, rb = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, ib = "|";
function lb(r, a = {}) {
  return r.split(ib).map((l) => {
    let s = l.trim().split(rb).filter((u) => u && !!u.trim()), c = [];
    for (let u = 0, b = s.length; u < b; u += 1) {
      const g = s[u];
      let d = !1, p = -1;
      for (; !d && ++p < xg; ) {
        const y = Hf[p];
        let S = y.isMultiMatch(g);
        S && (c.push(new y(S, a)), d = !0);
      }
      if (!d)
        for (p = -1; ++p < xg; ) {
          const y = Hf[p];
          let S = y.isSingleMatch(g);
          if (S) {
            c.push(new y(S, a));
            break;
          }
        }
    }
    return c;
  });
}
const sb = /* @__PURE__ */ new Set([Yv.type, Fv.type]);
class ob {
  constructor(a, {
    isCaseSensitive: l = xe.isCaseSensitive,
    ignoreDiacritics: s = xe.ignoreDiacritics,
    includeMatches: c = xe.includeMatches,
    minMatchCharLength: u = xe.minMatchCharLength,
    ignoreLocation: b = xe.ignoreLocation,
    findAllMatches: g = xe.findAllMatches,
    location: d = xe.location,
    threshold: p = xe.threshold,
    distance: y = xe.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: l,
      ignoreDiacritics: s,
      includeMatches: c,
      minMatchCharLength: u,
      findAllMatches: g,
      ignoreLocation: b,
      location: d,
      threshold: p,
      distance: y
    }, a = l ? a : a.toLowerCase(), a = s ? Uo(a) : a, this.pattern = a, this.query = lb(this.pattern, this.options);
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
    const { includeMatches: s, isCaseSensitive: c, ignoreDiacritics: u } = this.options;
    a = c ? a : a.toLowerCase(), a = u ? Uo(a) : a;
    let b = 0, g = [], d = 0;
    for (let p = 0, y = l.length; p < y; p += 1) {
      const S = l[p];
      g.length = 0, b = 0;
      for (let m = 0, v = S.length; m < v; m += 1) {
        const h = S[m], { isMatch: x, indices: C, score: O } = h.search(a);
        if (x) {
          if (b += 1, d += O, s) {
            const A = h.constructor.type;
            sb.has(A) ? g = [...g, ...C] : g.push(C);
          }
        } else {
          d = 0, b = 0, g.length = 0;
          break;
        }
      }
      if (b) {
        let m = {
          isMatch: !0,
          score: d / b
        };
        return s && (m.indices = g), m;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const Pf = [];
function ub(...r) {
  Pf.push(...r);
}
function qf(r, a) {
  for (let l = 0, s = Pf.length; l < s; l += 1) {
    let c = Pf[l];
    if (c.condition(r, a))
      return new c(r, a);
  }
  return new Vv(r, a);
}
const Ho = {
  AND: "$and",
  OR: "$or"
}, If = {
  PATH: "$path",
  PATTERN: "$val"
}, Gf = (r) => !!(r[Ho.AND] || r[Ho.OR]), cb = (r) => !!r[If.PATH], fb = (r) => !ra(r) && Pv(r) && !Gf(r), Eg = (r) => ({
  [Ho.AND]: Object.keys(r).map((a) => ({
    [a]: r[a]
  }))
});
function Xv(r, a, { auto: l = !0 } = {}) {
  const s = (c) => {
    let u = Object.keys(c);
    const b = cb(c);
    if (!b && u.length > 1 && !Gf(c))
      return s(Eg(c));
    if (fb(c)) {
      const d = b ? c[If.PATH] : u[0], p = b ? c[If.PATTERN] : c[d];
      if (!kn(p))
        throw new Error(B2(d));
      const y = {
        keyId: Uf(d),
        pattern: p
      };
      return l && (y.searcher = qf(p, a)), y;
    }
    let g = {
      children: [],
      operator: u[0]
    };
    return u.forEach((d) => {
      const p = c[d];
      ra(p) && p.forEach((y) => {
        g.children.push(s(y));
      });
    }), g;
  };
  return Gf(r) || (r = Eg(r)), s(r);
}
function hb(r, { ignoreFieldNorm: a = xe.ignoreFieldNorm }) {
  r.forEach((l) => {
    let s = 1;
    l.matches.forEach(({ key: c, norm: u, score: b }) => {
      const g = c ? c.weight : null;
      s *= Math.pow(
        b === 0 && g ? Number.EPSILON : b,
        (g || 1) * (a ? 1 : u)
      );
    }), l.score = s;
  });
}
function db(r, a) {
  const l = r.matches;
  a.matches = [], tn(l) && l.forEach((s) => {
    if (!tn(s.indices) || !s.indices.length)
      return;
    const { indices: c, value: u } = s;
    let b = {
      indices: c,
      value: u
    };
    s.key && (b.key = s.key.src), s.idx > -1 && (b.refIndex = s.idx), a.matches.push(b);
  });
}
function pb(r, a) {
  a.score = r.score;
}
function mb(r, a, {
  includeMatches: l = xe.includeMatches,
  includeScore: s = xe.includeScore
} = {}) {
  const c = [];
  return l && c.push(db), s && c.push(pb), r.map((u) => {
    const { idx: b } = u, g = {
      item: a[b],
      refIndex: b
    };
    return c.length && c.forEach((d) => {
      d(u, g);
    }), g;
  });
}
class mi {
  constructor(a, l = {}, s) {
    this.options = { ...xe, ...l }, this.options.useExtendedSearch, this._keyStore = new P2(this.options.keys), this.setCollection(a, s);
  }
  setCollection(a, l) {
    if (this._docs = a, l && !(l instanceof ih))
      throw new Error(L2);
    this._myIndex = l || Gv(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(a) {
    tn(a) && (this._docs.push(a), this._myIndex.add(a));
  }
  remove(a = () => !1) {
    const l = [];
    for (let s = 0, c = this._docs.length; s < c; s += 1) {
      const u = this._docs[s];
      a(u, s) && (this.removeAt(s), s -= 1, c -= 1, l.push(u));
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
      includeScore: c,
      shouldSort: u,
      sortFn: b,
      ignoreFieldNorm: g
    } = this.options;
    let d = kn(a) ? kn(this._docs[0]) ? this._searchStringList(a) : this._searchObjectList(a) : this._searchLogical(a);
    return hb(d, { ignoreFieldNorm: g }), u && d.sort(b), Hv(l) && l > -1 && (d = d.slice(0, l)), mb(d, this._docs, {
      includeMatches: s,
      includeScore: c
    });
  }
  _searchStringList(a) {
    const l = qf(a, this.options), { records: s } = this._myIndex, c = [];
    return s.forEach(({ v: u, i: b, n: g }) => {
      if (!tn(u))
        return;
      const { isMatch: d, score: p, indices: y } = l.searchIn(u);
      d && c.push({
        item: u,
        idx: b,
        matches: [{ score: p, value: u, norm: g, indices: y }]
      });
    }), c;
  }
  _searchLogical(a) {
    const l = Xv(a, this.options), s = (g, d, p) => {
      if (!g.children) {
        const { keyId: S, searcher: m } = g, v = this._findMatches({
          key: this._keyStore.get(S),
          value: this._myIndex.getValueForItemAtKeyId(d, S),
          searcher: m
        });
        return v && v.length ? [
          {
            idx: p,
            item: d,
            matches: v
          }
        ] : [];
      }
      const y = [];
      for (let S = 0, m = g.children.length; S < m; S += 1) {
        const v = g.children[S], h = s(v, d, p);
        if (h.length)
          y.push(...h);
        else if (g.operator === Ho.AND)
          return [];
      }
      return y;
    }, c = this._myIndex.records, u = {}, b = [];
    return c.forEach(({ $: g, i: d }) => {
      if (tn(g)) {
        let p = s(l, g, d);
        p.length && (u[d] || (u[d] = { idx: d, item: g, matches: [] }, b.push(u[d])), p.forEach(({ matches: y }) => {
          u[d].matches.push(...y);
        }));
      }
    }), b;
  }
  _searchObjectList(a) {
    const l = qf(a, this.options), { keys: s, records: c } = this._myIndex, u = [];
    return c.forEach(({ $: b, i: g }) => {
      if (!tn(b))
        return;
      let d = [];
      s.forEach((p, y) => {
        d.push(
          ...this._findMatches({
            key: p,
            value: b[y],
            searcher: l
          })
        );
      }), d.length && u.push({
        idx: g,
        item: b,
        matches: d
      });
    }), u;
  }
  _findMatches({ key: a, value: l, searcher: s }) {
    if (!tn(l))
      return [];
    let c = [];
    if (ra(l))
      l.forEach(({ v: u, i: b, n: g }) => {
        if (!tn(u))
          return;
        const { isMatch: d, score: p, indices: y } = s.searchIn(u);
        d && c.push({
          score: p,
          key: a,
          value: u,
          idx: b,
          norm: g,
          indices: y
        });
      });
    else {
      const { v: u, n: b } = l, { isMatch: g, score: d, indices: p } = s.searchIn(u);
      g && c.push({ score: d, key: a, value: u, norm: b, indices: p });
    }
    return c;
  }
}
mi.version = "7.1.0";
mi.createIndex = Gv;
mi.parseIndex = Q2;
mi.config = xe;
mi.parseQuery = Xv;
ub(ob);
async function gb(r, ...a) {
  await SillyTavern.getContext().SlashCommandParser.commands[r].callback(...a);
}
async function Ae(r, a, { escapeHtml: l = !0 } = {}) {
  await gb("echo", { severity: r, escapeHtml: (!!l).toString() }, a);
}
function mf(r) {
  return K0(r);
}
function Cg(r, a) {
  return Q0(r, a);
}
function Js(r, a, l) {
  return Z0(r, a, l);
}
function vb(r, a, l) {
  return n2(r, a, l);
}
function yb(r, a) {
  return a2(r, a);
}
function bb(r, {
  customStoryString: a,
  customInstructSettings: l
} = {}) {
  return X0(r, { customStoryString: a, customInstructSettings: l });
}
function lr(r) {
  return u2(r);
}
function Sb() {
  return {
    prompt: dl[pl.prompt],
    interval: dl[pl.interval],
    position: dl[pl.position],
    depth: dl[pl.depth],
    role: dl[pl.role]
  };
}
function _b(r, a) {
  return f2(r, a);
}
function xb({
  name2: r,
  charDescription: a,
  charPersonality: l,
  Scenario: s,
  worldInfoBefore: c,
  worldInfoAfter: u,
  bias: b,
  type: g,
  quietPrompt: d,
  quietImage: p,
  extensionPrompts: y,
  cyclePrompt: S,
  systemPromptOverride: m,
  jailbreakPromptOverride: v,
  personaDescription: h,
  messages: x,
  messageExamples: C
}, O) {
  return c2(
    {
      name2: r,
      charDescription: a,
      charPersonality: l,
      Scenario: s,
      worldInfoBefore: c,
      worldInfoAfter: u,
      bias: b,
      type: g,
      quietPrompt: d,
      quietImage: p,
      cyclePrompt: S,
      systemPromptOverride: m,
      jailbreakPromptOverride: v,
      personaDescription: h,
      extensionPrompts: y,
      messages: x,
      messageExamples: C
    },
    O
  );
}
function Eb(r) {
  return i2(r);
}
function Cb(r) {
  return l2(r);
}
function Ab(r, a, {
  characterOverride: l,
  isMarkdown: s,
  isPrompt: c,
  isEdit: u,
  depth: b
}) {
  return h2(r, a, { characterOverride: l, isMarkdown: s, isPrompt: c, isEdit: u, depth: b });
}
async function Tb(r, a) {
  return await r2(r, a);
}
function Ag(r, {
  wiFormat: a
} = {}) {
  return s2(r, { wiFormat: a });
}
function vl(r) {
  return o2(r);
}
function wb(r, a) {
  return $0(r, a);
}
class Nb {
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
var Ob = Object.defineProperty, Db = (r, a, l) => a in r ? Ob(r, a, { enumerable: !0, configurable: !0, writable: !0, value: l }) : r[a] = l, Ws = (r, a, l) => Db(r, typeof a != "symbol" ? a + "" : a, l);
class Mb {
  constructor(a) {
    Ws(this, "messages", []), Ws(this, "tokenizer"), Ws(this, "maxContext"), Ws(this, "currentTokenCount", 0), this.tokenizer = new Nb(), this.maxContext = a;
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
    const l = a.filter((g) => g.content), s = l.map((g) => this.getTokenCount(g)), c = s.reduce((g, d) => g + d, 0);
    if (this.currentTokenCount + c <= this.maxContext)
      return this.messages.push(...l), this.currentTokenCount += c, !0;
    let u = 0;
    const b = [];
    for (let g = l.length - 1; g >= 0; g--) {
      const d = l[g], p = s[g];
      if (this.currentTokenCount + u + p <= this.maxContext)
        b.unshift(d), u += p;
      else
        break;
    }
    return b.length > 0 && (this.messages.push(...b), this.currentTokenCount += u), b.length === l.length;
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
async function Rb(r, {
  targetCharacterId: a,
  presetName: l,
  instructName: s,
  contextName: c,
  syspromptName: u,
  maxContext: b,
  includeNames: g,
  ignoreCharacterFields: d,
  ignoreAuthorNote: p,
  ignoreWorldInfo: y,
  messageIndexesBetween: S
} = {}) {
  var m, v, h, x, C, O, A, M, E, w, R, L, I, $;
  if (!["textgenerationwebui", "openai"].includes(r))
    throw new Error("Unsupported API");
  const q = SillyTavern.getContext();
  let { description: F, personality: Y, persona: ae, scenario: oe, mesExamples: he, system: U, jailbreak: ee } = d ? {
    description: "",
    personality: "",
    persona: "",
    scenario: "",
    mesExamples: "",
    system: "",
    jailbreak: ""
  } : q.getCharacterCardFields({
    chid: a
  });
  const ie = r === "textgenerationwebui" ? (m = q.getPresetManager("instruct")) == null ? void 0 : m.getCompletionPresetByName(s) : void 0, Ce = !!(ie != null && ie.enabled);
  let j = Cg(he, Ce);
  function Q() {
    var pe, fe;
    if (typeof b == "number")
      return b;
    if (!b || b === "active" || !l)
      return mf();
    if (typeof b == "number")
      return b;
    let ze;
    if (r === "textgenerationwebui") {
      const Ue = (pe = q.getPresetManager("textgenerationwebui")) == null ? void 0 : pe.getCompletionPresetByName(l);
      ze = Ue?.max_length;
    } else {
      const Ue = (fe = q.getPresetManager("openai")) == null ? void 0 : fe.getCompletionPresetByName(l);
      ze = Ue?.openai_max_context;
    }
    return typeof ze == "number" ? ze : mf();
  }
  let ne = [];
  const le = Q();
  if (le <= 0)
    return { result: [], warnings: ne };
  const se = new Mb(le), Oe = q.ToolManager.isToolCallingSupported(), me = S?.start ?? 0, pt = S != null && S.end ? S.end + 1 : void 0;
  let je = me === -1 && pt === 0 ? [] : q.chat.slice(me, pt).filter((pe) => {
    var fe;
    return !pe.is_system || Oe && Array.isArray((fe = pe.extra) == null ? void 0 : fe.tool_invocations);
  });
  je = await Promise.all(
    je.map(async (pe, fe) => {
      var ze, Ue;
      let k = pe.mes, K = pe.is_user ? rg.USER_INPUT : rg.AI_OUTPUT, J = { isPrompt: !0, depth: je.length - fe - 1 }, ue = Ab(k, K, J);
      return ue = await Tb(pe, ue), (ze = pe?.extra) != null && ze.append_title && (Ue = pe?.extra) != null && Ue.title && (ue = `${ue}

${pe.extra.title}`), {
        ...pe,
        mes: ue,
        index: fe
      };
    })
  );
  const Gt = je.map((pe) => e2 ? `${pe.name}: ${pe.mes}` : pe.mes).reverse(), { worldInfoString: mr, worldInfoBefore: gn, worldInfoAfter: Cn, worldInfoExamples: Ua, worldInfoDepth: Ha, anBefore: gr, anAfter: Pa } = y ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await q.getWorldInfoPrompt(Gt, le, !1);
  for (const pe of Ua) {
    const fe = pe.content;
    if (fe.length === 0)
      continue;
    const ze = Js(fe, ea, Da), Ue = Cg(ze, Ce);
    pe.position === t2.before ? j.unshift(...Ue) : j.push(...Ue);
  }
  function Nt() {
    const pe = [];
    for (let fe = je.length - 1; fe >= 0; fe--) {
      const ze = je[fe], Ue = ze.name === "System" && !ze.is_user ? "system" : ze.is_user ? "user" : "assistant";
      pe.unshift({
        role: Ue,
        content: g && Ue != "system" ? `${ze.name}: ${ze.mes}` : ze.mes,
        source: ze
      });
    }
    se.addMany(pe);
  }
  if (r === "textgenerationwebui") {
    const pe = [...j];
    j && (j = vb(j, ea, Da));
    const fe = (v = q.getPresetManager("sysprompt")) == null ? void 0 : v.getCompletionPresetByName(u);
    fe && (U = q.powerUserSettings.prefer_character_prompt && U ? U : Js(fe.content, ea, Da), U = Ce ? yb(
      q.substituteParams(U, ea, Da, fe.content),
      ie
    ) : U);
    const ze = {
      description: F,
      personality: Y,
      persona: q.powerUserSettings.persona_description_position == ng.IN_PROMPT ? ae : "",
      scenario: oe,
      system: U,
      char: Da,
      user: ea,
      wiBefore: gn,
      wiAfter: Cn,
      loreBefore: gn,
      loreAfter: Cn,
      mesExamples: j.join(""),
      mesExamplesRaw: pe.join("")
    }, Ue = (h = q.getPresetManager("context")) == null ? void 0 : h.getCompletionPresetByName(c);
    let k = bb(ze, {
      customInstructSettings: ie,
      customStoryString: Ue?.story_string
    });
    k && se.add({ role: "system", content: k, ignoreInstruct: !0 }), Nt();
  } else {
    let pe = function(Ot) {
      const kt = Ie.find((vr) => vr.identifier === Ot);
      if (kt)
        return kt;
      const Hl = k.prompts.find((vr) => vr.identifier === Ot);
      if (Hl)
        return Hl;
    }, fe = Eb(je), ze = Cb(j);
    async function Ue() {
      let [Ot, kt] = await xb(
        {
          name2: Da,
          charDescription: F,
          charPersonality: Y,
          Scenario: oe,
          worldInfoBefore: gn,
          worldInfoAfter: Cn,
          extensionPrompts: q.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: U,
          jailbreakPromptOverride: ee,
          personaDescription: ae,
          messages: fe,
          messageExamples: ze
        },
        !1
      );
      se.addMany(Ot);
    }
    if (!l)
      return ne.push("No preset name provided. Using default preset."), await Ue(), { result: se.getMessages(), warnings: ne };
    const k = (x = q.getPresetManager("openai")) == null ? void 0 : x.getCompletionPresetByName(l);
    if (!k)
      return console.warn(`Preset not found: ${l}. Using current preset.`), ne.push(`Preset not found: ${l}. Using current preset.`), Ue(), { result: se.getMessages(), warnings: ne };
    let K = (C = k.prompt_order) == null ? void 0 : C.find((Ot) => Ot.character_id === mn);
    if (!K && k.prompt_order && k.prompt_order.length > 0 && (K = k.prompt_order[k.prompt_order.length - 1]), !K)
      return console.warn(`No prompt order found for preset: ${l}. Using current preset.`), ne.push(`No prompt order found for preset: ${l}. Using current preset.`), Ue(), { result: se.getMessages(), warnings: ne };
    const J = oe && k.scenario_format ? q.substituteParams(k.scenario_format) : "", ue = Y && k.personality_format ? q.substituteParams(k.personality_format) : "", He = q.substituteParams(k.group_nudge_prompt), ge = k.impersonation_prompt ? q.substituteParams(k.impersonation_prompt) : "", Ie = [];
    y || Ie.push(
      {
        role: "system",
        content: Ag(gn, { wiFormat: k.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: Ag(Cn, { wiFormat: k.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), d || Ie.push(
      { role: "system", content: F, identifier: "charDescription" },
      { role: "system", content: ue, identifier: "charPersonality" },
      { role: "system", content: J, identifier: "scenario" }
    ), Ie.push(
      { role: "system", content: ge, identifier: "impersonate" },
      { role: "system", content: He, identifier: "groupNudge" }
    );
    const Ke = q.extensionPrompts["1_memory"];
    Ke && Ke.value && Ie.push({
      role: lr(Ke.role),
      content: Ke.value,
      identifier: "summary",
      position: vl(Ke.position)
    });
    const qa = q.extensionPrompts["2_floating_prompt"];
    !p && qa && qa.value && Ie.push({
      role: lr(qa.role),
      content: qa.value,
      identifier: "authorsNote",
      position: vl(qa.position)
    });
    const Bn = q.extensionPrompts["3_vectors"];
    Bn && Bn.value && Ie.push({
      role: "system",
      content: Bn.value,
      identifier: "vectorsMemory",
      position: vl(Bn.position)
    });
    const An = q.extensionPrompts["4_vectors_data_bank"];
    An && An.value && Ie.push({
      role: lr(An.role),
      content: An.value,
      identifier: "vectorsDataBank",
      position: vl(An.position)
    });
    const an = q.extensionPrompts.chromadb;
    an && an.value && Ie.push({
      role: "system",
      content: an.value,
      identifier: "smartContext",
      position: vl(an.position)
    }), !d && q.powerUserSettings.persona_description && q.powerUserSettings.persona_description_position === ng.IN_PROMPT && Ie.push({
      role: "system",
      content: q.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), K.order.forEach((Ot) => {
      if (!Ot.enabled)
        return;
      const kt = pe(Ot.identifier);
      if (kt && kt.content) {
        se.add({
          role: kt.role ?? "system",
          content: q.substituteParams(kt.content)
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
  for (const pe in q.extensionPrompts)
    if (Object.hasOwn(q.extensionPrompts, pe)) {
      const fe = q.extensionPrompts[pe];
      if (vi.includes(pe) || !q.extensionPrompts[pe].value || ![ir.BEFORE_PROMPT, ir.IN_PROMPT].includes(fe.position) || typeof fe.filter == "function" && !await fe.filter()) continue;
      const ze = {
        role: lr(fe.role) ?? "system",
        content: fe.value
      };
      if (fe.position === ir.BEFORE_PROMPT)
        se.insert(fe.depth, ze);
      else if (fe.position === ir.IN_PROMPT) {
        const Ue = se.getMessages();
        se.insert(Ue.length - fe.depth, ze);
      }
    }
  for (const pe of Ha) {
    const fe = se.getMessages();
    se.insert(fe.length - pe.depth, {
      role: lr(pe.role),
      content: pe.entries.join(`
`)
    });
  }
  if (!d) {
    const pe = _b(cr, Number(mn));
    if (cr && Array.isArray(pe) && pe.length > 0)
      pe.filter((fe) => fe.text).forEach((fe, ze) => {
        const Ue = se.getMessages();
        se.insert(Ue.length - fe.depth, { role: fe.role, content: fe.text });
      });
    else {
      const fe = Js(
        (w = (E = (M = (A = (O = q.characters[mn]) == null ? void 0 : O.data) == null ? void 0 : A.extensions) == null ? void 0 : M.depth_prompt) == null ? void 0 : E.prompt) == null ? void 0 : w.trim(),
        ea,
        Da
      ) || "";
      if (fe) {
        const ze = W0, Ue = (($ = (I = (L = (R = q.characters[mn]) == null ? void 0 : R.data) == null ? void 0 : L.extensions) == null ? void 0 : I.depth_prompt) == null ? void 0 : $.role) ?? J0, k = se.getMessages();
        se.insert(k.length - ze, {
          role: lr(Ue),
          content: fe
        });
      }
    }
  }
  let Vt = -1;
  if (!p) {
    const pe = Sb();
    if (pe.prompt) {
      pe.prompt = Js(pe.prompt, ea, Da);
      const fe = { role: lr(pe.role), content: pe.prompt };
      switch (pe.position) {
        case ir.IN_PROMPT:
          se.insert(1, fe), Vt = 1;
          break;
        case ir.IN_CHAT:
          Vt = se.getMessages().length - pe.depth, se.insert(Vt, fe);
          break;
        case ir.BEFORE_PROMPT:
          se.addFront(fe), Vt = 0;
          break;
      }
    }
  }
  return Vt >= 0 && (gr.length > 0 && (se.insert(Vt, { role: "system", content: gr.join(`
`) }), Vt++), Pa.length > 0 && se.insert(Vt + 1, { role: "system", content: Pa.join(`
`) })), { result: se.getMessages(), warnings: ne };
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
    a && (s = s.filter(function(c) {
      return Object.getOwnPropertyDescriptor(r, c).enumerable;
    })), l.push.apply(l, s);
  }
  return l;
}
function Ln(r) {
  for (var a = 1; a < arguments.length; a++) {
    var l = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Tg(Object(l), !0).forEach(function(s) {
      kb(r, s, l[s]);
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
function kb(r, a, l) {
  return a in r ? Object.defineProperty(r, a, {
    value: l,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : r[a] = l, r;
}
function ia() {
  return ia = Object.assign || function(r) {
    for (var a = 1; a < arguments.length; a++) {
      var l = arguments[a];
      for (var s in l)
        Object.prototype.hasOwnProperty.call(l, s) && (r[s] = l[s]);
    }
    return r;
  }, ia.apply(this, arguments);
}
function jb(r, a) {
  if (r == null) return {};
  var l = {}, s = Object.keys(r), c, u;
  for (u = 0; u < s.length; u++)
    c = s[u], !(a.indexOf(c) >= 0) && (l[c] = r[c]);
  return l;
}
function Lb(r, a) {
  if (r == null) return {};
  var l = jb(r, a), s, c;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(r);
    for (c = 0; c < u.length; c++)
      s = u[c], !(a.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(r, s) && (l[s] = r[s]);
  }
  return l;
}
var Bb = "1.15.6";
function aa(r) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(r);
}
var la = aa(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Ll = aa(/Edge/i), wg = aa(/firefox/i), Ol = aa(/safari/i) && !aa(/chrome/i) && !aa(/android/i), lh = aa(/iP(ad|od|hone)/i), Qv = aa(/chrome/i) && aa(/android/i), Zv = {
  capture: !1,
  passive: !1
};
function Le(r, a, l) {
  r.addEventListener(a, l, !la && Zv);
}
function ke(r, a, l) {
  r.removeEventListener(a, l, !la && Zv);
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
function xn(r, a, l, s) {
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
function $t(r, a, l) {
  if (r && a)
    if (r.classList)
      r.classList[l ? "add" : "remove"](a);
    else {
      var s = (" " + r.className + " ").replace(Ng, " ").replace(" " + a + " ", " ");
      r.className = (s + (l ? " " + a : "")).replace(Ng, " ");
    }
}
function Se(r, a, l) {
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
      var s = Se(r, "transform");
      s && s !== "none" && (l = s + " " + l);
    } while (!a && (r = r.parentNode));
  var c = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return c && new c(l);
}
function Jv(r, a, l) {
  if (r) {
    var s = r.getElementsByTagName(a), c = 0, u = s.length;
    if (l)
      for (; c < u; c++)
        l(s[c], c);
    return s;
  }
  return [];
}
function jn() {
  var r = document.scrollingElement;
  return r || document.documentElement;
}
function ft(r, a, l, s, c) {
  if (!(!r.getBoundingClientRect && r !== window)) {
    var u, b, g, d, p, y, S;
    if (r !== window && r.parentNode && r !== jn() ? (u = r.getBoundingClientRect(), b = u.top, g = u.left, d = u.bottom, p = u.right, y = u.height, S = u.width) : (b = 0, g = 0, d = window.innerHeight, p = window.innerWidth, y = window.innerHeight, S = window.innerWidth), (a || l) && r !== window && (c = c || r.parentNode, !la))
      do
        if (c && c.getBoundingClientRect && (Se(c, "transform") !== "none" || l && Se(c, "position") !== "static")) {
          var m = c.getBoundingClientRect();
          b -= m.top + parseInt(Se(c, "border-top-width")), g -= m.left + parseInt(Se(c, "border-left-width")), d = b + u.height, p = g + u.width;
          break;
        }
      while (c = c.parentNode);
    if (s && r !== window) {
      var v = di(c || r), h = v && v.a, x = v && v.d;
      v && (b /= x, g /= h, S /= h, y /= x, d = b + y, p = g + S);
    }
    return {
      top: b,
      left: g,
      bottom: d,
      right: p,
      width: S,
      height: y
    };
  }
}
function Og(r, a, l) {
  for (var s = La(r, !0), c = ft(r)[a]; s; ) {
    var u = ft(s)[l], b = void 0;
    if (b = c >= u, !b) return s;
    if (s === jn()) break;
    s = La(s, !1);
  }
  return !1;
}
function pi(r, a, l, s) {
  for (var c = 0, u = 0, b = r.children; u < b.length; ) {
    if (b[u].style.display !== "none" && b[u] !== _e.ghost && (s || b[u] !== _e.dragged) && xn(b[u], l.draggable, r, !1)) {
      if (c === a)
        return b[u];
      c++;
    }
    u++;
  }
  return null;
}
function sh(r, a) {
  for (var l = r.lastElementChild; l && (l === _e.ghost || Se(l, "display") === "none" || a && !Po(l, a)); )
    l = l.previousElementSibling;
  return l || null;
}
function pn(r, a) {
  var l = 0;
  if (!r || !r.parentNode)
    return -1;
  for (; r = r.previousElementSibling; )
    r.nodeName.toUpperCase() !== "TEMPLATE" && r !== _e.clone && (!a || Po(r, a)) && l++;
  return l;
}
function Dg(r) {
  var a = 0, l = 0, s = jn();
  if (r)
    do {
      var c = di(r), u = c.a, b = c.d;
      a += r.scrollLeft * u, l += r.scrollTop * b;
    } while (r !== s && (r = r.parentNode));
  return [a, l];
}
function zb(r, a) {
  for (var l in r)
    if (r.hasOwnProperty(l)) {
      for (var s in a)
        if (a.hasOwnProperty(s) && a[s] === r[l][s]) return Number(l);
    }
  return -1;
}
function La(r, a) {
  if (!r || !r.getBoundingClientRect) return jn();
  var l = r, s = !1;
  do
    if (l.clientWidth < l.scrollWidth || l.clientHeight < l.scrollHeight) {
      var c = Se(l);
      if (l.clientWidth < l.scrollWidth && (c.overflowX == "auto" || c.overflowX == "scroll") || l.clientHeight < l.scrollHeight && (c.overflowY == "auto" || c.overflowY == "scroll")) {
        if (!l.getBoundingClientRect || l === document.body) return jn();
        if (s || a) return l;
        s = !0;
      }
    }
  while (l = l.parentNode);
  return jn();
}
function Ub(r, a) {
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
function Hb() {
  clearTimeout(Dl), Dl = void 0;
}
function $v(r, a, l) {
  r.scrollLeft += a, r.scrollTop += l;
}
function e1(r) {
  var a = window.Polymer, l = window.jQuery || window.Zepto;
  return a && a.dom ? a.dom(r).cloneNode(!0) : l ? l(r).clone(!0)[0] : r.cloneNode(!0);
}
function t1(r, a, l) {
  var s = {};
  return Array.from(r.children).forEach(function(c) {
    var u, b, g, d;
    if (!(!xn(c, a.draggable, r, !1) || c.animated || c === l)) {
      var p = ft(c);
      s.left = Math.min((u = s.left) !== null && u !== void 0 ? u : 1 / 0, p.left), s.top = Math.min((b = s.top) !== null && b !== void 0 ? b : 1 / 0, p.top), s.right = Math.max((g = s.right) !== null && g !== void 0 ? g : -1 / 0, p.right), s.bottom = Math.max((d = s.bottom) !== null && d !== void 0 ? d : -1 / 0, p.bottom);
    }
  }), s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
var qt = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function Pb() {
  var r = [], a;
  return {
    captureAnimationState: function() {
      if (r = [], !!this.options.animation) {
        var s = [].slice.call(this.el.children);
        s.forEach(function(c) {
          if (!(Se(c, "display") === "none" || c === _e.ghost)) {
            r.push({
              target: c,
              rect: ft(c)
            });
            var u = Ln({}, r[r.length - 1].rect);
            if (c.thisAnimationDuration) {
              var b = di(c, !0);
              b && (u.top -= b.f, u.left -= b.e);
            }
            c.fromRect = u;
          }
        });
      }
    },
    addAnimationState: function(s) {
      r.push(s);
    },
    removeAnimationState: function(s) {
      r.splice(zb(r, {
        target: s
      }), 1);
    },
    animateAll: function(s) {
      var c = this;
      if (!this.options.animation) {
        clearTimeout(a), typeof s == "function" && s();
        return;
      }
      var u = !1, b = 0;
      r.forEach(function(g) {
        var d = 0, p = g.target, y = p.fromRect, S = ft(p), m = p.prevFromRect, v = p.prevToRect, h = g.rect, x = di(p, !0);
        x && (S.top -= x.f, S.left -= x.e), p.toRect = S, p.thisAnimationDuration && gf(m, S) && !gf(y, S) && // Make sure animatingRect is on line between toRect & fromRect
        (h.top - S.top) / (h.left - S.left) === (y.top - S.top) / (y.left - S.left) && (d = Ib(h, m, v, c.options)), gf(S, y) || (p.prevFromRect = y, p.prevToRect = S, d || (d = c.options.animation), c.animate(p, h, S, d)), d && (u = !0, b = Math.max(b, d), clearTimeout(p.animationResetTimer), p.animationResetTimer = setTimeout(function() {
          p.animationTime = 0, p.prevFromRect = null, p.fromRect = null, p.prevToRect = null, p.thisAnimationDuration = null;
        }, d), p.thisAnimationDuration = d);
      }), clearTimeout(a), u ? a = setTimeout(function() {
        typeof s == "function" && s();
      }, b) : typeof s == "function" && s(), r = [];
    },
    animate: function(s, c, u, b) {
      if (b) {
        Se(s, "transition", ""), Se(s, "transform", "");
        var g = di(this.el), d = g && g.a, p = g && g.d, y = (c.left - u.left) / (d || 1), S = (c.top - u.top) / (p || 1);
        s.animatingX = !!y, s.animatingY = !!S, Se(s, "transform", "translate3d(" + y + "px," + S + "px,0)"), this.forRepaintDummy = qb(s), Se(s, "transition", "transform " + b + "ms" + (this.options.easing ? " " + this.options.easing : "")), Se(s, "transform", "translate3d(0,0,0)"), typeof s.animated == "number" && clearTimeout(s.animated), s.animated = setTimeout(function() {
          Se(s, "transition", ""), Se(s, "transform", ""), s.animated = !1, s.animatingX = !1, s.animatingY = !1;
        }, b);
      }
    }
  };
}
function qb(r) {
  return r.offsetWidth;
}
function Ib(r, a, l, s) {
  return Math.sqrt(Math.pow(a.top - r.top, 2) + Math.pow(a.left - r.left, 2)) / Math.sqrt(Math.pow(a.top - l.top, 2) + Math.pow(a.left - l.left, 2)) * s.animation;
}
var ri = [], vf = {
  initializeByDefault: !0
}, Bl = {
  mount: function(a) {
    for (var l in vf)
      vf.hasOwnProperty(l) && !(l in a) && (a[l] = vf[l]);
    ri.forEach(function(s) {
      if (s.pluginName === a.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(a.pluginName, " more than once");
    }), ri.push(a);
  },
  pluginEvent: function(a, l, s) {
    var c = this;
    this.eventCanceled = !1, s.cancel = function() {
      c.eventCanceled = !0;
    };
    var u = a + "Global";
    ri.forEach(function(b) {
      l[b.pluginName] && (l[b.pluginName][u] && l[b.pluginName][u](Ln({
        sortable: l
      }, s)), l.options[b.pluginName] && l[b.pluginName][a] && l[b.pluginName][a](Ln({
        sortable: l
      }, s)));
    });
  },
  initializePlugins: function(a, l, s, c) {
    ri.forEach(function(g) {
      var d = g.pluginName;
      if (!(!a.options[d] && !g.initializeByDefault)) {
        var p = new g(a, l, a.options);
        p.sortable = a, p.options = a.options, a[d] = p, ia(s, p.defaults);
      }
    });
    for (var u in a.options)
      if (a.options.hasOwnProperty(u)) {
        var b = this.modifyOption(a, u, a.options[u]);
        typeof b < "u" && (a.options[u] = b);
      }
  },
  getEventProperties: function(a, l) {
    var s = {};
    return ri.forEach(function(c) {
      typeof c.eventProperties == "function" && ia(s, c.eventProperties.call(l[c.pluginName], a));
    }), s;
  },
  modifyOption: function(a, l, s) {
    var c;
    return ri.forEach(function(u) {
      a[u.pluginName] && u.optionListeners && typeof u.optionListeners[l] == "function" && (c = u.optionListeners[l].call(a[u.pluginName], s));
    }), c;
  }
};
function Gb(r) {
  var a = r.sortable, l = r.rootEl, s = r.name, c = r.targetEl, u = r.cloneEl, b = r.toEl, g = r.fromEl, d = r.oldIndex, p = r.newIndex, y = r.oldDraggableIndex, S = r.newDraggableIndex, m = r.originalEvent, v = r.putSortable, h = r.extraEventProperties;
  if (a = a || l && l[qt], !!a) {
    var x, C = a.options, O = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !la && !Ll ? x = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (x = document.createEvent("Event"), x.initEvent(s, !0, !0)), x.to = b || l, x.from = g || l, x.item = c || l, x.clone = u, x.oldIndex = d, x.newIndex = p, x.oldDraggableIndex = y, x.newDraggableIndex = S, x.originalEvent = m, x.pullMode = v ? v.lastPutMode : void 0;
    var A = Ln(Ln({}, h), Bl.getEventProperties(s, a));
    for (var M in A)
      x[M] = A[M];
    l && l.dispatchEvent(x), C[O] && C[O].call(a, x);
  }
}
var Vb = ["evt"], Ht = function(a, l) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, c = s.evt, u = Lb(s, Vb);
  Bl.pluginEvent.bind(_e)(a, l, Ln({
    dragEl: re,
    parentEl: at,
    ghostEl: Ee,
    rootEl: We,
    nextEl: ur,
    lastDownEl: ko,
    cloneEl: et,
    cloneHidden: ja,
    dragStarted: Tl,
    putSortable: xt,
    activeSortable: _e.active,
    originalEvent: c,
    oldIndex: hi,
    oldDraggableIndex: Ml,
    newIndex: en,
    newDraggableIndex: ka,
    hideGhostForTarget: i1,
    unhideGhostForTarget: l1,
    cloneNowHidden: function() {
      ja = !0;
    },
    cloneNowShown: function() {
      ja = !1;
    },
    dispatchSortableEvent: function(g) {
      Mt({
        sortable: l,
        name: g,
        originalEvent: c
      });
    }
  }, u));
};
function Mt(r) {
  Gb(Ln({
    putSortable: xt,
    cloneEl: et,
    targetEl: re,
    rootEl: We,
    oldIndex: hi,
    oldDraggableIndex: Ml,
    newIndex: en,
    newDraggableIndex: ka
  }, r));
}
var re, at, Ee, We, ur, ko, et, ja, hi, en, Ml, ka, $s, xt, ci = !1, qo = !1, Io = [], sr, Sn, yf, bf, Mg, Rg, Tl, ii, Rl, kl = !1, eo = !1, jo, Tt, Sf = [], Vf = !1, Go = [], Qo = typeof document < "u", to = lh, kg = Ll || la ? "cssFloat" : "float", Yb = Qo && !Qv && !lh && "draggable" in document.createElement("div"), n1 = (function() {
  if (Qo) {
    if (la)
      return !1;
    var r = document.createElement("x");
    return r.style.cssText = "pointer-events:auto", r.style.pointerEvents === "auto";
  }
})(), a1 = function(a, l) {
  var s = Se(a), c = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), u = pi(a, 0, l), b = pi(a, 1, l), g = u && Se(u), d = b && Se(b), p = g && parseInt(g.marginLeft) + parseInt(g.marginRight) + ft(u).width, y = d && parseInt(d.marginLeft) + parseInt(d.marginRight) + ft(b).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && g.float && g.float !== "none") {
    var S = g.float === "left" ? "left" : "right";
    return b && (d.clear === "both" || d.clear === S) ? "vertical" : "horizontal";
  }
  return u && (g.display === "block" || g.display === "flex" || g.display === "table" || g.display === "grid" || p >= c && s[kg] === "none" || b && s[kg] === "none" && p + y > c) ? "vertical" : "horizontal";
}, Fb = function(a, l, s) {
  var c = s ? a.left : a.top, u = s ? a.right : a.bottom, b = s ? a.width : a.height, g = s ? l.left : l.top, d = s ? l.right : l.bottom, p = s ? l.width : l.height;
  return c === g || u === d || c + b / 2 === g + p / 2;
}, Xb = function(a, l) {
  var s;
  return Io.some(function(c) {
    var u = c[qt].options.emptyInsertThreshold;
    if (!(!u || sh(c))) {
      var b = ft(c), g = a >= b.left - u && a <= b.right + u, d = l >= b.top - u && l <= b.bottom + u;
      if (g && d)
        return s = c;
    }
  }), s;
}, r1 = function(a) {
  function l(u, b) {
    return function(g, d, p, y) {
      var S = g.options.group.name && d.options.group.name && g.options.group.name === d.options.group.name;
      if (u == null && (b || S))
        return !0;
      if (u == null || u === !1)
        return !1;
      if (b && u === "clone")
        return u;
      if (typeof u == "function")
        return l(u(g, d, p, y), b)(g, d, p, y);
      var m = (b ? g : d).options.group.name;
      return u === !0 || typeof u == "string" && u === m || u.join && u.indexOf(m) > -1;
    };
  }
  var s = {}, c = a.group;
  (!c || Ro(c) != "object") && (c = {
    name: c
  }), s.name = c.name, s.checkPull = l(c.pull, !0), s.checkPut = l(c.put), s.revertClone = c.revertClone, a.group = s;
}, i1 = function() {
  !n1 && Ee && Se(Ee, "display", "none");
}, l1 = function() {
  !n1 && Ee && Se(Ee, "display", "");
};
Qo && !Qv && document.addEventListener("click", function(r) {
  if (qo)
    return r.preventDefault(), r.stopPropagation && r.stopPropagation(), r.stopImmediatePropagation && r.stopImmediatePropagation(), qo = !1, !1;
}, !0);
var or = function(a) {
  if (re) {
    a = a.touches ? a.touches[0] : a;
    var l = Xb(a.clientX, a.clientY);
    if (l) {
      var s = {};
      for (var c in a)
        a.hasOwnProperty(c) && (s[c] = a[c]);
      s.target = s.rootEl = l, s.preventDefault = void 0, s.stopPropagation = void 0, l[qt]._onDragOver(s);
    }
  }
}, Qb = function(a) {
  re && re.parentNode[qt]._isOutsideThisEl(a.target);
};
function _e(r, a) {
  if (!(r && r.nodeType && r.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(r));
  this.el = r, this.options = a = ia({}, a), r[qt] = this;
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
      return a1(r, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(b, g) {
      b.setData("Text", g.textContent);
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
    supportPointer: _e.supportPointer !== !1 && "PointerEvent" in window && (!Ol || lh),
    emptyInsertThreshold: 5
  };
  Bl.initializePlugins(this, r, l);
  for (var s in l)
    !(s in a) && (a[s] = l[s]);
  r1(a);
  for (var c in this)
    c.charAt(0) === "_" && typeof this[c] == "function" && (this[c] = this[c].bind(this));
  this.nativeDraggable = a.forceFallback ? !1 : Yb, this.nativeDraggable && (this.options.touchStartThreshold = 1), a.supportPointer ? Le(r, "pointerdown", this._onTapStart) : (Le(r, "mousedown", this._onTapStart), Le(r, "touchstart", this._onTapStart)), this.nativeDraggable && (Le(r, "dragover", this), Le(r, "dragenter", this)), Io.push(this.el), a.store && a.store.get && this.sort(a.store.get(this) || []), ia(this, Pb());
}
_e.prototype = /** @lends Sortable.prototype */
{
  constructor: _e,
  _isOutsideThisEl: function(a) {
    !this.el.contains(a) && a !== this.el && (ii = null);
  },
  _getDirection: function(a, l) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, a, l, re) : this.options.direction;
  },
  _onTapStart: function(a) {
    if (a.cancelable) {
      var l = this, s = this.el, c = this.options, u = c.preventOnFilter, b = a.type, g = a.touches && a.touches[0] || a.pointerType && a.pointerType === "touch" && a, d = (g || a).target, p = a.target.shadowRoot && (a.path && a.path[0] || a.composedPath && a.composedPath()[0]) || d, y = c.filter;
      if (nS(s), !re && !(/mousedown|pointerdown/.test(b) && a.button !== 0 || c.disabled) && !p.isContentEditable && !(!this.nativeDraggable && Ol && d && d.tagName.toUpperCase() === "SELECT") && (d = xn(d, c.draggable, s, !1), !(d && d.animated) && ko !== d)) {
        if (hi = pn(d), Ml = pn(d, c.draggable), typeof y == "function") {
          if (y.call(this, a, d, this)) {
            Mt({
              sortable: l,
              rootEl: p,
              name: "filter",
              targetEl: d,
              toEl: s,
              fromEl: s
            }), Ht("filter", l, {
              evt: a
            }), u && a.preventDefault();
            return;
          }
        } else if (y && (y = y.split(",").some(function(S) {
          if (S = xn(p, S.trim(), s, !1), S)
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
        }), y)) {
          u && a.preventDefault();
          return;
        }
        c.handle && !xn(p, c.handle, s, !1) || this._prepareDragStart(a, g, d);
      }
    }
  },
  _prepareDragStart: function(a, l, s) {
    var c = this, u = c.el, b = c.options, g = u.ownerDocument, d;
    if (s && !re && s.parentNode === u) {
      var p = ft(s);
      if (We = u, re = s, at = re.parentNode, ur = re.nextSibling, ko = s, $s = b.group, _e.dragged = re, sr = {
        target: re,
        clientX: (l || a).clientX,
        clientY: (l || a).clientY
      }, Mg = sr.clientX - p.left, Rg = sr.clientY - p.top, this._lastX = (l || a).clientX, this._lastY = (l || a).clientY, re.style["will-change"] = "all", d = function() {
        if (Ht("delayEnded", c, {
          evt: a
        }), _e.eventCanceled) {
          c._onDrop();
          return;
        }
        c._disableDelayedDragEvents(), !wg && c.nativeDraggable && (re.draggable = !0), c._triggerDragStart(a, l), Mt({
          sortable: c,
          name: "choose",
          originalEvent: a
        }), $t(re, b.chosenClass, !0);
      }, b.ignore.split(",").forEach(function(y) {
        Jv(re, y.trim(), _f);
      }), Le(g, "dragover", or), Le(g, "mousemove", or), Le(g, "touchmove", or), b.supportPointer ? (Le(g, "pointerup", c._onDrop), !this.nativeDraggable && Le(g, "pointercancel", c._onDrop)) : (Le(g, "mouseup", c._onDrop), Le(g, "touchend", c._onDrop), Le(g, "touchcancel", c._onDrop)), wg && this.nativeDraggable && (this.options.touchStartThreshold = 4, re.draggable = !0), Ht("delayStart", this, {
        evt: a
      }), b.delay && (!b.delayOnTouchOnly || l) && (!this.nativeDraggable || !(Ll || la))) {
        if (_e.eventCanceled) {
          this._onDrop();
          return;
        }
        b.supportPointer ? (Le(g, "pointerup", c._disableDelayedDrag), Le(g, "pointercancel", c._disableDelayedDrag)) : (Le(g, "mouseup", c._disableDelayedDrag), Le(g, "touchend", c._disableDelayedDrag), Le(g, "touchcancel", c._disableDelayedDrag)), Le(g, "mousemove", c._delayedDragTouchMoveHandler), Le(g, "touchmove", c._delayedDragTouchMoveHandler), b.supportPointer && Le(g, "pointermove", c._delayedDragTouchMoveHandler), c._dragStartTimer = setTimeout(d, b.delay);
      } else
        d();
    }
  },
  _delayedDragTouchMoveHandler: function(a) {
    var l = a.touches ? a.touches[0] : a;
    Math.max(Math.abs(l.clientX - this._lastX), Math.abs(l.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    re && _f(re), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var a = this.el.ownerDocument;
    ke(a, "mouseup", this._disableDelayedDrag), ke(a, "touchend", this._disableDelayedDrag), ke(a, "touchcancel", this._disableDelayedDrag), ke(a, "pointerup", this._disableDelayedDrag), ke(a, "pointercancel", this._disableDelayedDrag), ke(a, "mousemove", this._delayedDragTouchMoveHandler), ke(a, "touchmove", this._delayedDragTouchMoveHandler), ke(a, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(a, l) {
    l = l || a.pointerType == "touch" && a, !this.nativeDraggable || l ? this.options.supportPointer ? Le(document, "pointermove", this._onTouchMove) : l ? Le(document, "touchmove", this._onTouchMove) : Le(document, "mousemove", this._onTouchMove) : (Le(re, "dragend", this), Le(We, "dragstart", this._onDragStart));
    try {
      document.selection ? Lo(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(a, l) {
    if (ci = !1, We && re) {
      Ht("dragStarted", this, {
        evt: l
      }), this.nativeDraggable && Le(document, "dragover", Qb);
      var s = this.options;
      !a && $t(re, s.dragClass, !1), $t(re, s.ghostClass, !0), _e.active = this, a && this._appendGhost(), Mt({
        sortable: this,
        name: "start",
        originalEvent: l
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Sn) {
      this._lastX = Sn.clientX, this._lastY = Sn.clientY, i1();
      for (var a = document.elementFromPoint(Sn.clientX, Sn.clientY), l = a; a && a.shadowRoot && (a = a.shadowRoot.elementFromPoint(Sn.clientX, Sn.clientY), a !== l); )
        l = a;
      if (re.parentNode[qt]._isOutsideThisEl(a), l)
        do {
          if (l[qt]) {
            var s = void 0;
            if (s = l[qt]._onDragOver({
              clientX: Sn.clientX,
              clientY: Sn.clientY,
              target: a,
              rootEl: l
            }), s && !this.options.dragoverBubble)
              break;
          }
          a = l;
        } while (l = Kv(l));
      l1();
    }
  },
  _onTouchMove: function(a) {
    if (sr) {
      var l = this.options, s = l.fallbackTolerance, c = l.fallbackOffset, u = a.touches ? a.touches[0] : a, b = Ee && di(Ee, !0), g = Ee && b && b.a, d = Ee && b && b.d, p = to && Tt && Dg(Tt), y = (u.clientX - sr.clientX + c.x) / (g || 1) + (p ? p[0] - Sf[0] : 0) / (g || 1), S = (u.clientY - sr.clientY + c.y) / (d || 1) + (p ? p[1] - Sf[1] : 0) / (d || 1);
      if (!_e.active && !ci) {
        if (s && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < s)
          return;
        this._onDragStart(a, !0);
      }
      if (Ee) {
        b ? (b.e += y - (yf || 0), b.f += S - (bf || 0)) : b = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: y,
          f: S
        };
        var m = "matrix(".concat(b.a, ",").concat(b.b, ",").concat(b.c, ",").concat(b.d, ",").concat(b.e, ",").concat(b.f, ")");
        Se(Ee, "webkitTransform", m), Se(Ee, "mozTransform", m), Se(Ee, "msTransform", m), Se(Ee, "transform", m), yf = y, bf = S, Sn = u;
      }
      a.cancelable && a.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Ee) {
      var a = this.options.fallbackOnBody ? document.body : We, l = ft(re, !0, to, !0, a), s = this.options;
      if (to) {
        for (Tt = a; Se(Tt, "position") === "static" && Se(Tt, "transform") === "none" && Tt !== document; )
          Tt = Tt.parentNode;
        Tt !== document.body && Tt !== document.documentElement ? (Tt === document && (Tt = jn()), l.top += Tt.scrollTop, l.left += Tt.scrollLeft) : Tt = jn(), Sf = Dg(Tt);
      }
      Ee = re.cloneNode(!0), $t(Ee, s.ghostClass, !1), $t(Ee, s.fallbackClass, !0), $t(Ee, s.dragClass, !0), Se(Ee, "transition", ""), Se(Ee, "transform", ""), Se(Ee, "box-sizing", "border-box"), Se(Ee, "margin", 0), Se(Ee, "top", l.top), Se(Ee, "left", l.left), Se(Ee, "width", l.width), Se(Ee, "height", l.height), Se(Ee, "opacity", "0.8"), Se(Ee, "position", to ? "absolute" : "fixed"), Se(Ee, "zIndex", "100000"), Se(Ee, "pointerEvents", "none"), _e.ghost = Ee, a.appendChild(Ee), Se(Ee, "transform-origin", Mg / parseInt(Ee.style.width) * 100 + "% " + Rg / parseInt(Ee.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(a, l) {
    var s = this, c = a.dataTransfer, u = s.options;
    if (Ht("dragStart", this, {
      evt: a
    }), _e.eventCanceled) {
      this._onDrop();
      return;
    }
    Ht("setupClone", this), _e.eventCanceled || (et = e1(re), et.removeAttribute("id"), et.draggable = !1, et.style["will-change"] = "", this._hideClone(), $t(et, this.options.chosenClass, !1), _e.clone = et), s.cloneId = Lo(function() {
      Ht("clone", s), !_e.eventCanceled && (s.options.removeCloneOnHide || We.insertBefore(et, re), s._hideClone(), Mt({
        sortable: s,
        name: "clone"
      }));
    }), !l && $t(re, u.dragClass, !0), l ? (qo = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (ke(document, "mouseup", s._onDrop), ke(document, "touchend", s._onDrop), ke(document, "touchcancel", s._onDrop), c && (c.effectAllowed = "move", u.setData && u.setData.call(s, c, re)), Le(document, "drop", s), Se(re, "transform", "translateZ(0)")), ci = !0, s._dragStartId = Lo(s._dragStarted.bind(s, l, a)), Le(document, "selectstart", s), Tl = !0, window.getSelection().removeAllRanges(), Ol && Se(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(a) {
    var l = this.el, s = a.target, c, u, b, g = this.options, d = g.group, p = _e.active, y = $s === d, S = g.sort, m = xt || p, v, h = this, x = !1;
    if (Vf) return;
    function C(ie, Ce) {
      Ht(ie, h, Ln({
        evt: a,
        isOwner: y,
        axis: v ? "vertical" : "horizontal",
        revert: b,
        dragRect: c,
        targetRect: u,
        canSort: S,
        fromSortable: m,
        target: s,
        completed: A,
        onMove: function(Q, ne) {
          return no(We, l, re, c, Q, ft(Q), a, ne);
        },
        changed: M
      }, Ce));
    }
    function O() {
      C("dragOverAnimationCapture"), h.captureAnimationState(), h !== m && m.captureAnimationState();
    }
    function A(ie) {
      return C("dragOverCompleted", {
        insertion: ie
      }), ie && (y ? p._hideClone() : p._showClone(h), h !== m && ($t(re, xt ? xt.options.ghostClass : p.options.ghostClass, !1), $t(re, g.ghostClass, !0)), xt !== h && h !== _e.active ? xt = h : h === _e.active && xt && (xt = null), m === h && (h._ignoreWhileAnimating = s), h.animateAll(function() {
        C("dragOverAnimationComplete"), h._ignoreWhileAnimating = null;
      }), h !== m && (m.animateAll(), m._ignoreWhileAnimating = null)), (s === re && !re.animated || s === l && !s.animated) && (ii = null), !g.dragoverBubble && !a.rootEl && s !== document && (re.parentNode[qt]._isOutsideThisEl(a.target), !ie && or(a)), !g.dragoverBubble && a.stopPropagation && a.stopPropagation(), x = !0;
    }
    function M() {
      en = pn(re), ka = pn(re, g.draggable), Mt({
        sortable: h,
        name: "change",
        toEl: l,
        newIndex: en,
        newDraggableIndex: ka,
        originalEvent: a
      });
    }
    if (a.preventDefault !== void 0 && a.cancelable && a.preventDefault(), s = xn(s, g.draggable, l, !0), C("dragOver"), _e.eventCanceled) return x;
    if (re.contains(a.target) || s.animated && s.animatingX && s.animatingY || h._ignoreWhileAnimating === s)
      return A(!1);
    if (qo = !1, p && !g.disabled && (y ? S || (b = at !== We) : xt === this || (this.lastPutMode = $s.checkPull(this, p, re, a)) && d.checkPut(this, p, re, a))) {
      if (v = this._getDirection(a, s) === "vertical", c = ft(re), C("dragOverValid"), _e.eventCanceled) return x;
      if (b)
        return at = We, O(), this._hideClone(), C("revert"), _e.eventCanceled || (ur ? We.insertBefore(re, ur) : We.appendChild(re)), A(!0);
      var E = sh(l, g.draggable);
      if (!E || Wb(a, v, this) && !E.animated) {
        if (E === re)
          return A(!1);
        if (E && l === a.target && (s = E), s && (u = ft(s)), no(We, l, re, c, s, u, a, !!s) !== !1)
          return O(), E && E.nextSibling ? l.insertBefore(re, E.nextSibling) : l.appendChild(re), at = l, M(), A(!0);
      } else if (E && Jb(a, v, this)) {
        var w = pi(l, 0, g, !0);
        if (w === re)
          return A(!1);
        if (s = w, u = ft(s), no(We, l, re, c, s, u, a, !1) !== !1)
          return O(), l.insertBefore(re, w), at = l, M(), A(!0);
      } else if (s.parentNode === l) {
        u = ft(s);
        var R = 0, L, I = re.parentNode !== l, $ = !Fb(re.animated && re.toRect || c, s.animated && s.toRect || u, v), q = v ? "top" : "left", F = Og(s, "top", "top") || Og(re, "top", "top"), Y = F ? F.scrollTop : void 0;
        ii !== s && (L = u[q], kl = !1, eo = !$ && g.invertSwap || I), R = $b(a, s, u, v, $ ? 1 : g.swapThreshold, g.invertedSwapThreshold == null ? g.swapThreshold : g.invertedSwapThreshold, eo, ii === s);
        var ae;
        if (R !== 0) {
          var oe = pn(re);
          do
            oe -= R, ae = at.children[oe];
          while (ae && (Se(ae, "display") === "none" || ae === Ee));
        }
        if (R === 0 || ae === s)
          return A(!1);
        ii = s, Rl = R;
        var he = s.nextElementSibling, U = !1;
        U = R === 1;
        var ee = no(We, l, re, c, s, u, a, U);
        if (ee !== !1)
          return (ee === 1 || ee === -1) && (U = ee === 1), Vf = !0, setTimeout(Kb, 30), O(), U && !he ? l.appendChild(re) : s.parentNode.insertBefore(re, U ? he : s), F && $v(F, 0, Y - F.scrollTop), at = re.parentNode, L !== void 0 && !eo && (jo = Math.abs(L - ft(s)[q])), M(), A(!0);
      }
      if (l.contains(re))
        return A(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    ke(document, "mousemove", this._onTouchMove), ke(document, "touchmove", this._onTouchMove), ke(document, "pointermove", this._onTouchMove), ke(document, "dragover", or), ke(document, "mousemove", or), ke(document, "touchmove", or);
  },
  _offUpEvents: function() {
    var a = this.el.ownerDocument;
    ke(a, "mouseup", this._onDrop), ke(a, "touchend", this._onDrop), ke(a, "pointerup", this._onDrop), ke(a, "pointercancel", this._onDrop), ke(a, "touchcancel", this._onDrop), ke(document, "selectstart", this);
  },
  _onDrop: function(a) {
    var l = this.el, s = this.options;
    if (en = pn(re), ka = pn(re, s.draggable), Ht("drop", this, {
      evt: a
    }), at = re && re.parentNode, en = pn(re), ka = pn(re, s.draggable), _e.eventCanceled) {
      this._nulling();
      return;
    }
    ci = !1, eo = !1, kl = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Yf(this.cloneId), Yf(this._dragStartId), this.nativeDraggable && (ke(document, "drop", this), ke(l, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Ol && Se(document.body, "user-select", ""), Se(re, "transform", ""), a && (Tl && (a.cancelable && a.preventDefault(), !s.dropBubble && a.stopPropagation()), Ee && Ee.parentNode && Ee.parentNode.removeChild(Ee), (We === at || xt && xt.lastPutMode !== "clone") && et && et.parentNode && et.parentNode.removeChild(et), re && (this.nativeDraggable && ke(re, "dragend", this), _f(re), re.style["will-change"] = "", Tl && !ci && $t(re, xt ? xt.options.ghostClass : this.options.ghostClass, !1), $t(re, this.options.chosenClass, !1), Mt({
      sortable: this,
      name: "unchoose",
      toEl: at,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: a
    }), We !== at ? (en >= 0 && (Mt({
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
    })), xt && xt.save()) : en !== hi && en >= 0 && (Mt({
      sortable: this,
      name: "update",
      toEl: at,
      originalEvent: a
    }), Mt({
      sortable: this,
      name: "sort",
      toEl: at,
      originalEvent: a
    })), _e.active && ((en == null || en === -1) && (en = hi, ka = Ml), Mt({
      sortable: this,
      name: "end",
      toEl: at,
      originalEvent: a
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Ht("nulling", this), We = re = at = Ee = ur = et = ko = ja = sr = Sn = Tl = en = ka = hi = Ml = ii = Rl = xt = $s = _e.dragged = _e.ghost = _e.clone = _e.active = null, Go.forEach(function(a) {
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
        re && (this._onDragOver(a), Zb(a));
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
    for (var a = [], l, s = this.el.children, c = 0, u = s.length, b = this.options; c < u; c++)
      l = s[c], xn(l, b.draggable, this.el, !1) && a.push(l.getAttribute(b.dataIdAttr) || tS(l));
    return a;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(a, l) {
    var s = {}, c = this.el;
    this.toArray().forEach(function(u, b) {
      var g = c.children[b];
      xn(g, this.options.draggable, c, !1) && (s[u] = g);
    }, this), l && this.captureAnimationState(), a.forEach(function(u) {
      s[u] && (c.removeChild(s[u]), c.appendChild(s[u]));
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
    return xn(a, l || this.options.draggable, this.el, !1);
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
    var c = Bl.modifyOption(this, a, l);
    typeof c < "u" ? s[a] = c : s[a] = l, a === "group" && r1(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Ht("destroy", this);
    var a = this.el;
    a[qt] = null, ke(a, "mousedown", this._onTapStart), ke(a, "touchstart", this._onTapStart), ke(a, "pointerdown", this._onTapStart), this.nativeDraggable && (ke(a, "dragover", this), ke(a, "dragenter", this)), Array.prototype.forEach.call(a.querySelectorAll("[draggable]"), function(l) {
      l.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Io.splice(Io.indexOf(this.el), 1), this.el = a = null;
  },
  _hideClone: function() {
    if (!ja) {
      if (Ht("hideClone", this), _e.eventCanceled) return;
      Se(et, "display", "none"), this.options.removeCloneOnHide && et.parentNode && et.parentNode.removeChild(et), ja = !0;
    }
  },
  _showClone: function(a) {
    if (a.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (ja) {
      if (Ht("showClone", this), _e.eventCanceled) return;
      re.parentNode == We && !this.options.group.revertClone ? We.insertBefore(et, re) : ur ? We.insertBefore(et, ur) : We.appendChild(et), this.options.group.revertClone && this.animate(re, et), Se(et, "display", ""), ja = !1;
    }
  }
};
function Zb(r) {
  r.dataTransfer && (r.dataTransfer.dropEffect = "move"), r.cancelable && r.preventDefault();
}
function no(r, a, l, s, c, u, b, g) {
  var d, p = r[qt], y = p.options.onMove, S;
  return window.CustomEvent && !la && !Ll ? d = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (d = document.createEvent("Event"), d.initEvent("move", !0, !0)), d.to = a, d.from = r, d.dragged = l, d.draggedRect = s, d.related = c || a, d.relatedRect = u || ft(a), d.willInsertAfter = g, d.originalEvent = b, r.dispatchEvent(d), y && (S = y.call(p, d, b)), S;
}
function _f(r) {
  r.draggable = !1;
}
function Kb() {
  Vf = !1;
}
function Jb(r, a, l) {
  var s = ft(pi(l.el, 0, l.options, !0)), c = t1(l.el, l.options, Ee), u = 10;
  return a ? r.clientX < c.left - u || r.clientY < s.top && r.clientX < s.right : r.clientY < c.top - u || r.clientY < s.bottom && r.clientX < s.left;
}
function Wb(r, a, l) {
  var s = ft(sh(l.el, l.options.draggable)), c = t1(l.el, l.options, Ee), u = 10;
  return a ? r.clientX > c.right + u || r.clientY > s.bottom && r.clientX > s.left : r.clientY > c.bottom + u || r.clientX > s.right && r.clientY > s.top;
}
function $b(r, a, l, s, c, u, b, g) {
  var d = s ? r.clientY : r.clientX, p = s ? l.height : l.width, y = s ? l.top : l.left, S = s ? l.bottom : l.right, m = !1;
  if (!b) {
    if (g && jo < p * c) {
      if (!kl && (Rl === 1 ? d > y + p * u / 2 : d < S - p * u / 2) && (kl = !0), kl)
        m = !0;
      else if (Rl === 1 ? d < y + jo : d > S - jo)
        return -Rl;
    } else if (d > y + p * (1 - c) / 2 && d < S - p * (1 - c) / 2)
      return eS(a);
  }
  return m = m || b, m && (d < y + p * u / 2 || d > S - p * u / 2) ? d > y + p / 2 ? 1 : -1 : 0;
}
function eS(r) {
  return pn(re) < pn(r) ? 1 : -1;
}
function tS(r) {
  for (var a = r.tagName + r.className + r.src + r.href + r.textContent, l = a.length, s = 0; l--; )
    s += a.charCodeAt(l);
  return s.toString(36);
}
function nS(r) {
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
Qo && Le(document, "touchmove", function(r) {
  (_e.active || ci) && r.cancelable && r.preventDefault();
});
_e.utils = {
  on: Le,
  off: ke,
  css: Se,
  find: Jv,
  is: function(a, l) {
    return !!xn(a, l, a, !1);
  },
  extend: Ub,
  throttle: Wv,
  closest: xn,
  toggleClass: $t,
  clone: e1,
  index: pn,
  nextTick: Lo,
  cancelNextTick: Yf,
  detectDirection: a1,
  getChild: pi,
  expando: qt
};
_e.get = function(r) {
  return r[qt];
};
_e.mount = function() {
  for (var r = arguments.length, a = new Array(r), l = 0; l < r; l++)
    a[l] = arguments[l];
  a[0].constructor === Array && (a = a[0]), a.forEach(function(s) {
    if (!s.prototype || !s.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));
    s.utils && (_e.utils = Ln(Ln({}, _e.utils), s.utils)), Bl.mount(s);
  });
};
_e.create = function(r, a) {
  return new _e(r, a);
};
_e.version = Bb;
var ct = [], wl, Ff, Xf = !1, xf, Ef, Vo, Nl;
function aS() {
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
      this.sortable.nativeDraggable ? Le(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? Le(document, "pointermove", this._handleFallbackAutoScroll) : s.touches ? Le(document, "touchmove", this._handleFallbackAutoScroll) : Le(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(l) {
      var s = l.originalEvent;
      !this.options.dragOverBubble && !s.rootEl && this._handleAutoScroll(s);
    },
    drop: function() {
      this.sortable.nativeDraggable ? ke(document, "dragover", this._handleAutoScroll) : (ke(document, "pointermove", this._handleFallbackAutoScroll), ke(document, "touchmove", this._handleFallbackAutoScroll), ke(document, "mousemove", this._handleFallbackAutoScroll)), jg(), Bo(), Hb();
    },
    nulling: function() {
      Vo = Ff = wl = Xf = Nl = xf = Ef = null, ct.length = 0;
    },
    _handleFallbackAutoScroll: function(l) {
      this._handleAutoScroll(l, !0);
    },
    _handleAutoScroll: function(l, s) {
      var c = this, u = (l.touches ? l.touches[0] : l).clientX, b = (l.touches ? l.touches[0] : l).clientY, g = document.elementFromPoint(u, b);
      if (Vo = l, s || this.options.forceAutoScrollFallback || Ll || la || Ol) {
        Cf(l, this.options, g, s);
        var d = La(g, !0);
        Xf && (!Nl || u !== xf || b !== Ef) && (Nl && jg(), Nl = setInterval(function() {
          var p = La(document.elementFromPoint(u, b), !0);
          p !== d && (d = p, Bo()), Cf(l, c.options, p, s);
        }, 10), xf = u, Ef = b);
      } else {
        if (!this.options.bubbleScroll || La(g, !0) === jn()) {
          Bo();
          return;
        }
        Cf(l, this.options, La(g, !1), !1);
      }
    }
  }, ia(r, {
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
    var c = (r.touches ? r.touches[0] : r).clientX, u = (r.touches ? r.touches[0] : r).clientY, b = a.scrollSensitivity, g = a.scrollSpeed, d = jn(), p = !1, y;
    Ff !== l && (Ff = l, Bo(), wl = a.scroll, y = a.scrollFn, wl === !0 && (wl = La(l, !0)));
    var S = 0, m = wl;
    do {
      var v = m, h = ft(v), x = h.top, C = h.bottom, O = h.left, A = h.right, M = h.width, E = h.height, w = void 0, R = void 0, L = v.scrollWidth, I = v.scrollHeight, $ = Se(v), q = v.scrollLeft, F = v.scrollTop;
      v === d ? (w = M < L && ($.overflowX === "auto" || $.overflowX === "scroll" || $.overflowX === "visible"), R = E < I && ($.overflowY === "auto" || $.overflowY === "scroll" || $.overflowY === "visible")) : (w = M < L && ($.overflowX === "auto" || $.overflowX === "scroll"), R = E < I && ($.overflowY === "auto" || $.overflowY === "scroll"));
      var Y = w && (Math.abs(A - c) <= b && q + M < L) - (Math.abs(O - c) <= b && !!q), ae = R && (Math.abs(C - u) <= b && F + E < I) - (Math.abs(x - u) <= b && !!F);
      if (!ct[S])
        for (var oe = 0; oe <= S; oe++)
          ct[oe] || (ct[oe] = {});
      (ct[S].vx != Y || ct[S].vy != ae || ct[S].el !== v) && (ct[S].el = v, ct[S].vx = Y, ct[S].vy = ae, clearInterval(ct[S].pid), (Y != 0 || ae != 0) && (p = !0, ct[S].pid = setInterval((function() {
        s && this.layer === 0 && _e.active._onTouchMove(Vo);
        var he = ct[this.layer].vy ? ct[this.layer].vy * g : 0, U = ct[this.layer].vx ? ct[this.layer].vx * g : 0;
        typeof y == "function" && y.call(_e.dragged.parentNode[qt], U, he, r, Vo, ct[this.layer].el) !== "continue" || $v(ct[this.layer].el, U, he);
      }).bind({
        layer: S
      }), 24))), S++;
    } while (a.bubbleScroll && m !== d && (m = La(m, !1)));
    Xf = p;
  }
}, 30), s1 = function(a) {
  var l = a.originalEvent, s = a.putSortable, c = a.dragEl, u = a.activeSortable, b = a.dispatchSortableEvent, g = a.hideGhostForTarget, d = a.unhideGhostForTarget;
  if (l) {
    var p = s || u;
    g();
    var y = l.changedTouches && l.changedTouches.length ? l.changedTouches[0] : l, S = document.elementFromPoint(y.clientX, y.clientY);
    d(), p && !p.el.contains(S) && (b("spill"), this.onSpill({
      dragEl: c,
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
    var c = pi(this.sortable.el, this.startIndex, this.options);
    c ? this.sortable.el.insertBefore(l, c) : this.sortable.el.appendChild(l), this.sortable.animateAll(), s && s.animateAll();
  },
  drop: s1
};
ia(oh, {
  pluginName: "revertOnSpill"
});
function uh() {
}
uh.prototype = {
  onSpill: function(a) {
    var l = a.dragEl, s = a.putSortable, c = s || this.sortable;
    c.captureAnimationState(), l.parentNode && l.parentNode.removeChild(l), c.animateAll();
  },
  drop: s1
};
ia(uh, {
  pluginName: "removeOnSpill"
});
_e.mount(new aS());
_e.mount(uh, oh);
async function rS({
  entry: r,
  selectedWorldName: a,
  skipSave: l = !1,
  skipReload: s = !1,
  operation: c = "auto"
}) {
  const u = SillyTavern.getContext(), b = await u.loadWorldInfo(a);
  if (!b)
    throw new Error("Failed to load world info");
  const g = Object.values(b.entries), d = g.length > 0 ? g[g.length - 1] : void 0;
  let p;
  if (c === "update" || c === "auto") {
    const S = Object.values(b.entries).find((m) => m.uid === r.uid);
    if (S)
      (c === "auto" || c === "update") && (p = S);
    else if (c === "update")
      throw new Error("Entry not found for update operation");
  }
  const y = p ? "update" : "add";
  if (!p) {
    if (p = wb(a, b), !p)
      throw new Error("Failed to create entry");
    if (d) {
      const S = p.uid;
      Object.assign(p, d), p.uid = S;
    }
  }
  return p.key = r.key, p.content = r.content, p.comment = r.comment, l || await u.saveWorldInfo(a, b), s || u.reloadWorldInfoEditor(a, !0), {
    entry: p,
    operation: y
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
{{/if}}`, iS = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST respond with ONLY a single \`<response>\` XML tag containing the generated field content.

Rules:
1. Output exactly ONE \`<response>\` tag. No other XML tags.
2. Do NOT wrap the response in markdown code fences (no \`\`\`).
3. Do NOT add any prose, explanation, or commentary outside the tag.
4. The content inside the tag is the final field value — write it directly as it should appear on the character card.

Example of a correct response:
<response>The character's description text goes here.</response>`, lS = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST respond with ONLY a JSON object of the form \`{"response": "..."}\` containing the generated field content as a single string.

Rules:
1. Output exactly ONE JSON object with a single key \`response\`.
2. Do NOT wrap the response in markdown code fences (no \`\`\`).
3. Do NOT add any prose, explanation, or commentary outside the object.
4. The string value is the final field value — write it directly as it should appear on the character card. Escape newlines as \\n and quotes as \\".

Example of a correct response:
{"response":"The character's description text goes here."}`, sS = `=== RESPONSE FORMAT INSTRUCTIONS ===
You MUST respond with ONLY the raw text content for the field — no wrapping tags, no JSON, no code fences, and no explanatory prose.

Rules:
1. Output exactly the final field value, nothing else.
2. Do NOT wrap the response in markdown code fences (no \`\`\`).
3. Write the content exactly as it should appear on the character card.

Example of a correct response:
The character's description text goes here.`, ch = "{{activeFormatInstructions}}", o1 = `{{#is_not_empty lorebooks}}
## Selected Lorebooks for Context
{{#each lorebooks}}
### {{@key}}
  {{#each this as |entry|}}
#### {{#if entry.comment}}{{entry.comment}}{{else}}*No title*{{/if}}
Triggers: {{#if entry.key}}{{join entry.key ', '}}{{else}}*No triggers*{{/if}}
Content: {{#if entry.content}}{{entry.content}}{{else}}*No content*{{/if}}

  {{/each}}


{{/each}}
{{/is_not_empty}}`, u1 = `### {{character.name}}
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
{{/is_not_empty}}`, oS = `## User's Persona Description
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
{{/if}}`, c1 = ":A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", uS = c1 + "\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040", cS = "[" + c1 + "][" + uS + "]*", fS = new RegExp("^" + cS + "$");
function f1(r, a) {
  const l = [];
  let s = a.exec(r);
  for (; s; ) {
    const c = [];
    c.startIndex = a.lastIndex - s[0].length;
    const u = s.length;
    for (let b = 0; b < u; b++)
      c.push(s[b]);
    l.push(c), s = a.exec(r);
  }
  return l;
}
const hh = function(r) {
  const a = fS.exec(r);
  return !(a === null || typeof a > "u");
};
function hS(r) {
  return typeof r < "u";
}
const dS = {
  allowBooleanAttributes: !1,
  //A tag can have attributes without any value
  unpairedTags: []
};
function h1(r, a) {
  a = Object.assign({}, dS, a);
  const l = [];
  let s = !1, c = !1;
  r[0] === "\uFEFF" && (r = r.substr(1));
  for (let u = 0; u < r.length; u++)
    if (r[u] === "<" && r[u + 1] === "?") {
      if (u += 2, u = Bg(r, u), u.err) return u;
    } else if (r[u] === "<") {
      let b = u;
      if (u++, r[u] === "!") {
        u = zg(r, u);
        continue;
      } else {
        let g = !1;
        r[u] === "/" && (g = !0, u++);
        let d = "";
        for (; u < r.length && r[u] !== ">" && r[u] !== " " && r[u] !== "	" && r[u] !== `
` && r[u] !== "\r"; u++)
          d += r[u];
        if (d = d.trim(), d[d.length - 1] === "/" && (d = d.substring(0, d.length - 1), u--), !_S(d)) {
          let S;
          return d.trim().length === 0 ? S = "Invalid space after '<'." : S = "Tag '" + d + "' is an invalid name.", st("InvalidTag", S, Rt(r, u));
        }
        const p = gS(r, u);
        if (p === !1)
          return st("InvalidAttr", "Attributes for '" + d + "' have open quote.", Rt(r, u));
        let y = p.value;
        if (u = p.index, y[y.length - 1] === "/") {
          const S = u - y.length;
          y = y.substring(0, y.length - 1);
          const m = Ug(y, a);
          if (m === !0)
            s = !0;
          else
            return st(m.err.code, m.err.msg, Rt(r, S + m.err.line));
        } else if (g)
          if (p.tagClosed) {
            if (y.trim().length > 0)
              return st("InvalidTag", "Closing tag '" + d + "' can't have attributes or invalid starting.", Rt(r, b));
            if (l.length === 0)
              return st("InvalidTag", "Closing tag '" + d + "' has not been opened.", Rt(r, b));
            {
              const S = l.pop();
              if (d !== S.tagName) {
                let m = Rt(r, S.tagStartPos);
                return st(
                  "InvalidTag",
                  "Expected closing tag '" + S.tagName + "' (opened in line " + m.line + ", col " + m.col + ") instead of closing tag '" + d + "'.",
                  Rt(r, b)
                );
              }
              l.length == 0 && (c = !0);
            }
          } else return st("InvalidTag", "Closing tag '" + d + "' doesn't have proper closing.", Rt(r, u));
        else {
          const S = Ug(y, a);
          if (S !== !0)
            return st(S.err.code, S.err.msg, Rt(r, u - y.length + S.err.line));
          if (c === !0)
            return st("InvalidXml", "Multiple possible root nodes found.", Rt(r, u));
          a.unpairedTags.indexOf(d) !== -1 || l.push({ tagName: d, tagStartPos: b }), s = !0;
        }
        for (u++; u < r.length; u++)
          if (r[u] === "<")
            if (r[u + 1] === "!") {
              u++, u = zg(r, u);
              continue;
            } else if (r[u + 1] === "?") {
              if (u = Bg(r, ++u), u.err) return u;
            } else
              break;
          else if (r[u] === "&") {
            const S = bS(r, u);
            if (S == -1)
              return st("InvalidChar", "char '&' is not expected.", Rt(r, u));
            u = S;
          } else if (c === !0 && !Lg(r[u]))
            return st("InvalidXml", "Extra text at the end", Rt(r, u));
        r[u] === "<" && u--;
      }
    } else {
      if (Lg(r[u]))
        continue;
      return st("InvalidChar", "char '" + r[u] + "' is not expected.", Rt(r, u));
    }
  if (s) {
    if (l.length == 1)
      return st("InvalidTag", "Unclosed tag '" + l[0].tagName + "'.", Rt(r, l[0].tagStartPos));
    if (l.length > 0)
      return st("InvalidXml", "Invalid '" + JSON.stringify(l.map((u) => u.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
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
const pS = '"', mS = "'";
function gS(r, a) {
  let l = "", s = "", c = !1;
  for (; a < r.length; a++) {
    if (r[a] === pS || r[a] === mS)
      s === "" ? s = r[a] : s !== r[a] || (s = "");
    else if (r[a] === ">" && s === "") {
      c = !0;
      break;
    }
    l += r[a];
  }
  return s !== "" ? !1 : {
    value: l,
    index: a,
    tagClosed: c
  };
}
const vS = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function Ug(r, a) {
  const l = f1(r, vS), s = {};
  for (let c = 0; c < l.length; c++) {
    if (l[c][1].length === 0)
      return st("InvalidAttr", "Attribute '" + l[c][2] + "' has no space in starting.", yl(l[c]));
    if (l[c][3] !== void 0 && l[c][4] === void 0)
      return st("InvalidAttr", "Attribute '" + l[c][2] + "' is without value.", yl(l[c]));
    if (l[c][3] === void 0 && !a.allowBooleanAttributes)
      return st("InvalidAttr", "boolean attribute '" + l[c][2] + "' is not allowed.", yl(l[c]));
    const u = l[c][2];
    if (!SS(u))
      return st("InvalidAttr", "Attribute '" + u + "' is an invalid name.", yl(l[c]));
    if (!s.hasOwnProperty(u))
      s[u] = 1;
    else
      return st("InvalidAttr", "Attribute '" + u + "' is repeated.", yl(l[c]));
  }
  return !0;
}
function yS(r, a) {
  let l = /\d/;
  for (r[a] === "x" && (a++, l = /[\da-fA-F]/); a < r.length; a++) {
    if (r[a] === ";")
      return a;
    if (!r[a].match(l))
      break;
  }
  return -1;
}
function bS(r, a) {
  if (a++, r[a] === ";")
    return -1;
  if (r[a] === "#")
    return a++, yS(r, a);
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
function SS(r) {
  return hh(r);
}
function _S(r) {
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
const xS = {
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
}, ES = function(r) {
  return Object.assign({}, xS, r);
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
function CS(r, a) {
  const l = {};
  if (r[a + 3] === "O" && r[a + 4] === "C" && r[a + 5] === "T" && r[a + 6] === "Y" && r[a + 7] === "P" && r[a + 8] === "E") {
    a = a + 9;
    let s = 1, c = !1, u = !1, b = "";
    for (; a < r.length; a++)
      if (r[a] === "<" && !u) {
        if (c && wS(r, a)) {
          a += 7;
          let g, d;
          [g, d, a] = AS(r, a + 1), d.indexOf("&") === -1 && (l[MS(g)] = {
            regx: RegExp(`&${g};`, "g"),
            val: d
          });
        } else if (c && NS(r, a)) a += 8;
        else if (c && OS(r, a)) a += 8;
        else if (c && DS(r, a)) a += 9;
        else if (TS) u = !0;
        else throw new Error("Invalid DOCTYPE");
        s++, b = "";
      } else if (r[a] === ">") {
        if (u ? r[a - 1] === "-" && r[a - 2] === "-" && (u = !1, s--) : s--, s === 0)
          break;
      } else r[a] === "[" ? c = !0 : b += r[a];
    if (s !== 0)
      throw new Error("Unclosed DOCTYPE");
  } else
    throw new Error("Invalid Tag instead of DOCTYPE");
  return { entities: l, i: a };
}
function AS(r, a) {
  let l = "";
  for (; a < r.length && r[a] !== "'" && r[a] !== '"'; a++)
    l += r[a];
  if (l = l.trim(), l.indexOf(" ") !== -1) throw new Error("External entites are not supported");
  const s = r[a++];
  let c = "";
  for (; a < r.length && r[a] !== s; a++)
    c += r[a];
  return [l, c, a];
}
function TS(r, a) {
  return r[a + 1] === "!" && r[a + 2] === "-" && r[a + 3] === "-";
}
function wS(r, a) {
  return r[a + 1] === "!" && r[a + 2] === "E" && r[a + 3] === "N" && r[a + 4] === "T" && r[a + 5] === "I" && r[a + 6] === "T" && r[a + 7] === "Y";
}
function NS(r, a) {
  return r[a + 1] === "!" && r[a + 2] === "E" && r[a + 3] === "L" && r[a + 4] === "E" && r[a + 5] === "M" && r[a + 6] === "E" && r[a + 7] === "N" && r[a + 8] === "T";
}
function OS(r, a) {
  return r[a + 1] === "!" && r[a + 2] === "A" && r[a + 3] === "T" && r[a + 4] === "T" && r[a + 5] === "L" && r[a + 6] === "I" && r[a + 7] === "S" && r[a + 8] === "T";
}
function DS(r, a) {
  return r[a + 1] === "!" && r[a + 2] === "N" && r[a + 3] === "O" && r[a + 4] === "T" && r[a + 5] === "A" && r[a + 6] === "T" && r[a + 7] === "I" && r[a + 8] === "O" && r[a + 9] === "N";
}
function MS(r) {
  if (hh(r))
    return r;
  throw new Error(`Invalid entity name ${r}`);
}
const RS = /^[-+]?0x[a-fA-F0-9]+$/, kS = /^([\-\+])?(0*)([0-9]*(\.[0-9]*)?)$/, jS = {
  hex: !0,
  // oct: false,
  leadingZeros: !0,
  decimalPoint: ".",
  eNotation: !0
  //skipLike: /regex/
};
function LS(r, a = {}) {
  if (a = Object.assign({}, jS, a), !r || typeof r != "string") return r;
  let l = r.trim();
  if (a.skipLike !== void 0 && a.skipLike.test(l)) return r;
  if (r === "0") return 0;
  if (a.hex && RS.test(l))
    return zS(l, 16);
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
    const s = kS.exec(l);
    if (s) {
      const c = s[1], u = s[2];
      let b = BS(s[3]);
      if (!a.leadingZeros && u.length > 0 && c && l[2] !== ".") return r;
      if (!a.leadingZeros && u.length > 0 && !c && l[1] !== ".") return r;
      if (a.leadingZeros && u === r) return 0;
      {
        const g = Number(l), d = "" + g;
        return d.search(/[eE]/) !== -1 ? a.eNotation ? g : r : l.indexOf(".") !== -1 ? d === "0" && b === "" || d === b || c && d === "-" + b ? g : r : u ? b === d || c + b === d ? g : r : l === d || l === c + d ? g : r;
      }
    } else
      return r;
  }
}
function BS(r) {
  return r && r.indexOf(".") !== -1 && (r = r.replace(/0+$/, ""), r === "." ? r = "0" : r[0] === "." ? r = "0" + r : r[r.length - 1] === "." && (r = r.substr(0, r.length - 1))), r;
}
function zS(r, a) {
  if (parseInt) return parseInt(r, a);
  if (Number.parseInt) return Number.parseInt(r, a);
  if (window && window.parseInt) return window.parseInt(r, a);
  throw new Error("parseInt, Number.parseInt, window.parseInt are not supported");
}
function US(r) {
  return typeof r == "function" ? r : Array.isArray(r) ? (a) => {
    for (const l of r)
      if (typeof l == "string" && a === l || l instanceof RegExp && l.test(a))
        return !0;
  } : () => !1;
}
class HS {
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
    }, this.addExternalEntities = PS, this.parseXml = YS, this.parseTextData = qS, this.resolveNameSpace = IS, this.buildAttributesMap = VS, this.isItStopNode = ZS, this.replaceEntitiesValue = XS, this.readStopNodeData = JS, this.saveTextToParentTag = QS, this.addChild = FS, this.ignoreAttributesFn = US(this.options.ignoreAttributes);
  }
}
function PS(r) {
  const a = Object.keys(r);
  for (let l = 0; l < a.length; l++) {
    const s = a[l];
    this.lastEntities[s] = {
      regex: new RegExp("&" + s + ";", "g"),
      val: r[s]
    };
  }
}
function qS(r, a, l, s, c, u, b) {
  if (r !== void 0 && (this.options.trimValues && !s && (r = r.trim()), r.length > 0)) {
    b || (r = this.replaceEntitiesValue(r));
    const g = this.options.tagValueProcessor(a, r, l, c, u);
    return g == null ? r : typeof g != typeof r || g !== r ? g : this.options.trimValues ? Jf(r, this.options.parseTagValue, this.options.numberParseOptions) : r.trim() === r ? Jf(r, this.options.parseTagValue, this.options.numberParseOptions) : r;
  }
}
function IS(r) {
  if (this.options.removeNSPrefix) {
    const a = r.split(":"), l = r.charAt(0) === "/" ? "/" : "";
    if (a[0] === "xmlns")
      return "";
    a.length === 2 && (r = l + a[1]);
  }
  return r;
}
const GS = new RegExp(`([^\\s=]+)\\s*(=\\s*(['"])([\\s\\S]*?)\\3)?`, "gm");
function VS(r, a, l) {
  if (this.options.ignoreAttributes !== !0 && typeof r == "string") {
    const s = f1(r, GS), c = s.length, u = {};
    for (let b = 0; b < c; b++) {
      const g = this.resolveNameSpace(s[b][1]);
      if (this.ignoreAttributesFn(g, a))
        continue;
      let d = s[b][4], p = this.options.attributeNamePrefix + g;
      if (g.length)
        if (this.options.transformAttributeName && (p = this.options.transformAttributeName(p)), p === "__proto__" && (p = "#__proto__"), d !== void 0) {
          this.options.trimValues && (d = d.trim()), d = this.replaceEntitiesValue(d);
          const y = this.options.attributeValueProcessor(g, d, a);
          y == null ? u[p] = d : typeof y != typeof d || y !== d ? u[p] = y : u[p] = Jf(
            d,
            this.options.parseAttributeValue,
            this.options.numberParseOptions
          );
        } else this.options.allowBooleanAttributes && (u[p] = !0);
    }
    if (!Object.keys(u).length)
      return;
    if (this.options.attributesGroupName) {
      const b = {};
      return b[this.options.attributesGroupName] = u, b;
    }
    return u;
  }
}
const YS = function(r) {
  r = r.replace(/\r\n?/g, `
`);
  const a = new bl("!xml");
  let l = a, s = "", c = "";
  for (let u = 0; u < r.length; u++)
    if (r[u] === "<")
      if (r[u + 1] === "/") {
        const g = dr(r, ">", u, "Closing Tag is not closed.");
        let d = r.substring(u + 2, g).trim();
        if (this.options.removeNSPrefix) {
          const S = d.indexOf(":");
          S !== -1 && (d = d.substr(S + 1));
        }
        this.options.transformTagName && (d = this.options.transformTagName(d)), l && (s = this.saveTextToParentTag(s, l, c));
        const p = c.substring(c.lastIndexOf(".") + 1);
        if (d && this.options.unpairedTags.indexOf(d) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${d}>`);
        let y = 0;
        p && this.options.unpairedTags.indexOf(p) !== -1 ? (y = c.lastIndexOf(".", c.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : y = c.lastIndexOf("."), c = c.substring(0, y), l = this.tagsNodeStack.pop(), s = "", u = g;
      } else if (r[u + 1] === "?") {
        let g = Kf(r, u, !1, "?>");
        if (!g) throw new Error("Pi Tag is not closed.");
        if (s = this.saveTextToParentTag(s, l, c), !(this.options.ignoreDeclaration && g.tagName === "?xml" || this.options.ignorePiTags)) {
          const d = new bl(g.tagName);
          d.add(this.options.textNodeName, ""), g.tagName !== g.tagExp && g.attrExpPresent && (d[":@"] = this.buildAttributesMap(g.tagExp, c, g.tagName)), this.addChild(l, d, c);
        }
        u = g.closeIndex + 1;
      } else if (r.substr(u + 1, 3) === "!--") {
        const g = dr(r, "-->", u + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const d = r.substring(u + 4, g - 2);
          s = this.saveTextToParentTag(s, l, c), l.add(this.options.commentPropName, [{ [this.options.textNodeName]: d }]);
        }
        u = g;
      } else if (r.substr(u + 1, 2) === "!D") {
        const g = CS(r, u);
        this.docTypeEntities = g.entities, u = g.i;
      } else if (r.substr(u + 1, 2) === "![") {
        const g = dr(r, "]]>", u, "CDATA is not closed.") - 2, d = r.substring(u + 9, g);
        s = this.saveTextToParentTag(s, l, c);
        let p = this.parseTextData(d, l.tagname, c, !0, !1, !0, !0);
        p == null && (p = ""), this.options.cdataPropName ? l.add(this.options.cdataPropName, [{ [this.options.textNodeName]: d }]) : l.add(this.options.textNodeName, p), u = g + 2;
      } else {
        let g = Kf(r, u, this.options.removeNSPrefix), d = g.tagName;
        const p = g.rawTagName;
        let y = g.tagExp, S = g.attrExpPresent, m = g.closeIndex;
        this.options.transformTagName && (d = this.options.transformTagName(d)), l && s && l.tagname !== "!xml" && (s = this.saveTextToParentTag(s, l, c, !1));
        const v = l;
        if (v && this.options.unpairedTags.indexOf(v.tagname) !== -1 && (l = this.tagsNodeStack.pop(), c = c.substring(0, c.lastIndexOf("."))), d !== a.tagname && (c += c ? "." + d : d), this.isItStopNode(this.options.stopNodes, c, d)) {
          let h = "";
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1)
            d[d.length - 1] === "/" ? (d = d.substr(0, d.length - 1), c = c.substr(0, c.length - 1), y = d) : y = y.substr(0, y.length - 1), u = g.closeIndex;
          else if (this.options.unpairedTags.indexOf(d) !== -1)
            u = g.closeIndex;
          else {
            const C = this.readStopNodeData(r, p, m + 1);
            if (!C) throw new Error(`Unexpected end of ${p}`);
            u = C.i, h = C.tagContent;
          }
          const x = new bl(d);
          d !== y && S && (x[":@"] = this.buildAttributesMap(y, c, d)), h && (h = this.parseTextData(h, d, c, !0, S, !0, !0)), c = c.substr(0, c.lastIndexOf(".")), x.add(this.options.textNodeName, h), this.addChild(l, x, c);
        } else {
          if (y.length > 0 && y.lastIndexOf("/") === y.length - 1) {
            d[d.length - 1] === "/" ? (d = d.substr(0, d.length - 1), c = c.substr(0, c.length - 1), y = d) : y = y.substr(0, y.length - 1), this.options.transformTagName && (d = this.options.transformTagName(d));
            const h = new bl(d);
            d !== y && S && (h[":@"] = this.buildAttributesMap(y, c, d)), this.addChild(l, h, c), c = c.substr(0, c.lastIndexOf("."));
          } else {
            const h = new bl(d);
            this.tagsNodeStack.push(l), d !== y && S && (h[":@"] = this.buildAttributesMap(y, c, d)), this.addChild(l, h, c), l = h;
          }
          s = "", u = m;
        }
      }
    else
      s += r[u];
  return a.child;
};
function FS(r, a, l) {
  const s = this.options.updateTag(a.tagname, l, a[":@"]);
  s === !1 || (typeof s == "string" && (a.tagname = s), r.addChild(a));
}
const XS = function(r) {
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
function QS(r, a, l, s) {
  return r && (s === void 0 && (s = a.child.length === 0), r = this.parseTextData(
    r,
    a.tagname,
    l,
    !1,
    a[":@"] ? Object.keys(a[":@"]).length !== 0 : !1,
    s
  ), r !== void 0 && r !== "" && a.add(this.options.textNodeName, r), r = ""), r;
}
function ZS(r, a, l) {
  const s = "*." + l;
  for (const c in r) {
    const u = r[c];
    if (s === u || a === u) return !0;
  }
  return !1;
}
function KS(r, a, l = ">") {
  let s, c = "";
  for (let u = a; u < r.length; u++) {
    let b = r[u];
    if (s)
      b === s && (s = "");
    else if (b === '"' || b === "'")
      s = b;
    else if (b === l[0])
      if (l[1]) {
        if (r[u + 1] === l[1])
          return {
            data: c,
            index: u
          };
      } else
        return {
          data: c,
          index: u
        };
    else b === "	" && (b = " ");
    c += b;
  }
}
function dr(r, a, l, s) {
  const c = r.indexOf(a, l);
  if (c === -1)
    throw new Error(s);
  return c + a.length - 1;
}
function Kf(r, a, l, s = ">") {
  const c = KS(r, a + 1, s);
  if (!c) return;
  let u = c.data;
  const b = c.index, g = u.search(/\s/);
  let d = u, p = !0;
  g !== -1 && (d = u.substring(0, g), u = u.substring(g + 1).trimStart());
  const y = d;
  if (l) {
    const S = d.indexOf(":");
    S !== -1 && (d = d.substr(S + 1), p = d !== c.data.substr(S + 1));
  }
  return {
    tagName: d,
    tagExp: u,
    closeIndex: b,
    attrExpPresent: p,
    rawTagName: y
  };
}
function JS(r, a, l) {
  const s = l;
  let c = 1;
  for (; l < r.length; l++)
    if (r[l] === "<")
      if (r[l + 1] === "/") {
        const u = dr(r, ">", l, `${a} is not closed`);
        if (r.substring(l + 2, u).trim() === a && (c--, c === 0))
          return {
            tagContent: r.substring(s, l),
            i: u
          };
        l = u;
      } else if (r[l + 1] === "?")
        l = dr(r, "?>", l + 1, "StopNode is not closed.");
      else if (r.substr(l + 1, 3) === "!--")
        l = dr(r, "-->", l + 3, "StopNode is not closed.");
      else if (r.substr(l + 1, 2) === "![")
        l = dr(r, "]]>", l, "StopNode is not closed.") - 2;
      else {
        const u = Kf(r, l, ">");
        u && ((u && u.tagName) === a && u.tagExp[u.tagExp.length - 1] !== "/" && c++, l = u.closeIndex);
      }
}
function Jf(r, a, l) {
  if (a && typeof r == "string") {
    const s = r.trim();
    return s === "true" ? !0 : s === "false" ? !1 : LS(r, l);
  } else
    return hS(r) ? r : "";
}
function WS(r, a) {
  return d1(r, a);
}
function d1(r, a, l) {
  let s;
  const c = {};
  for (let u = 0; u < r.length; u++) {
    const b = r[u], g = $S(b);
    let d = "";
    if (l === void 0 ? d = g : d = l + "." + g, g === a.textNodeName)
      s === void 0 ? s = b[g] : s += "" + b[g];
    else {
      if (g === void 0)
        continue;
      if (b[g]) {
        let p = d1(b[g], a, d);
        const y = t_(p, a);
        b[":@"] ? e_(p, b[":@"], d, a) : Object.keys(p).length === 1 && p[a.textNodeName] !== void 0 && !a.alwaysCreateTextNode ? p = p[a.textNodeName] : Object.keys(p).length === 0 && (a.alwaysCreateTextNode ? p[a.textNodeName] = "" : p = ""), c[g] !== void 0 && c.hasOwnProperty(g) ? (Array.isArray(c[g]) || (c[g] = [c[g]]), c[g].push(p)) : a.isArray(g, d, y) ? c[g] = [p] : c[g] = p;
      }
    }
  }
  return typeof s == "string" ? s.length > 0 && (c[a.textNodeName] = s) : s !== void 0 && (c[a.textNodeName] = s), c;
}
function $S(r) {
  const a = Object.keys(r);
  for (let l = 0; l < a.length; l++) {
    const s = a[l];
    if (s !== ":@") return s;
  }
}
function e_(r, a, l, s) {
  if (a) {
    const c = Object.keys(a), u = c.length;
    for (let b = 0; b < u; b++) {
      const g = c[b];
      s.isArray(g, l + "." + g, !0, !0) ? r[g] = [a[g]] : r[g] = a[g];
    }
  }
}
function t_(r, a) {
  const { textNodeName: l } = a, s = Object.keys(r).length;
  return !!(s === 0 || s === 1 && (r[l] || typeof r[l] == "boolean" || r[l] === 0));
}
class n_ {
  constructor(a) {
    this.externalEntities = {}, this.options = ES(a);
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
      const u = h1(a, l);
      if (u !== !0)
        throw Error(`${u.err.msg}:${u.err.line}:${u.err.col}`);
    }
    const s = new HS(this.options);
    s.addExternalEntities(this.externalEntities);
    const c = s.parseXml(a);
    return this.options.preserveOrder || c === void 0 ? c : WS(c, this.options);
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
const a_ = {
  validate: h1
}, r_ = new n_({
  ignoreAttributes: !0,
  textNodeName: "#text",
  trimValues: !0,
  allowBooleanAttributes: !0
}), p1 = "START", i_ = /<START>/g, l_ = (r) => r.replace(i_, p1), li = (r) => r.split(p1).join("<START>");
function Wf(r, a) {
  if (!(!a || !r || !a.properties))
    for (const l in a.properties) {
      if (!r.hasOwnProperty(l)) continue;
      const s = a.properties[l];
      let c = r[l];
      s.type === "array" && !Array.isArray(c) && (c = [c], r[l] = c), s.type === "object" && typeof c == "object" && c !== null ? Wf(c, s) : s.type === "array" && s.items?.type === "object" && Array.isArray(c) && c.forEach((u) => Wf(u, s.items)), s.type === "string" && typeof c != "string" ? r[l] = String(c) : s.type === "array" && s.items?.type === "string" && Array.isArray(c) && (r[l] = c.map(String));
    }
}
function s_(r) {
  const a = /```(?:\w+\n|\n)?([\s\S]*?)```/g;
  let l, s = null;
  for (; (l = a.exec(r)) !== null; )
    s = l[1].trim();
  return s;
}
function pr(r) {
  if (r == null)
    return "";
  if (typeof r != "object")
    return String(r).trim();
  if ("#text" in r)
    return pr(r["#text"]);
  if ("response" in r)
    return pr(r.response);
  if ("message" in r)
    return pr(r.message);
  const a = Object.values(r)[0];
  return pr(a);
}
function o_(r, a, l = {}) {
  let c = s_(r) ?? r.trim();
  try {
    switch (a) {
      case "xml": {
        const u = l_(c);
        if (l.schema) {
          const g = a_.validate(u);
          if (g !== !0)
            throw new Error(`Model response is not valid XML: ${g.err.msg}`);
        }
        let b = r_.parse(u);
        if (b.root)
          b = b.root;
        else if (b.response)
          return li(pr(b.response));
        return l.schema ? (Wf(b, l.schema), b) : li(pr(b));
      }
      case "json": {
        const u = JSON.parse(c), b = l.schema ? u : pr(u);
        return typeof b == "string" ? li(b) : b;
      }
      case "none":
        return li(c);
      default:
        throw new Error(`Unsupported format specified: ${a}`);
    }
  } catch (u) {
    if (a !== "none" && !l.schema) {
      const b = c.match(/<response>([\s\S]*)/);
      if (b)
        return l.onRecovery?.(`XML response was malformed; recovered inner text via regex (parse error: ${u?.message ?? "unknown"})`), li(b[1].replace(/<\/[\s\S]*$/, "").trim());
      const g = c.match(/"response":\s*"([\s\S]*)/);
      if (g)
        return l.onRecovery?.(`JSON response was malformed; recovered inner text via regex (parse error: ${u?.message ?? "unknown"})`), li(g[1].replace(/"\s*}\s*$/, ""));
    }
    throw console.error(`Error parsing response in format '${a}':`, u), console.error("Raw content received:", r), a === "xml" ? u.message.startsWith("Model response is not valid XML:") ? u : new Error(`Model response is not valid XML: ${u.message}`) : a === "json" ? new Error("Model response is not valid JSON.") : new Error(`Failed to parse response as ${a}: ${u.message}`);
  }
}
function u_(r) {
  return r.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\t/g, "\\t").replace(/[\u0000-\u001F]/g, (a) => `\\u${a.charCodeAt(0).toString(16).padStart(4, "0")}`);
}
function Hg(r, a) {
  const l = r.trim();
  switch (a) {
    case "xml":
      return `<response>${l}`;
    case "json":
      return `{
  "response": "${u_(l)}`;
    case "none":
      return l;
    default:
      throw new Error(`Unsupported format specified: ${a}`);
  }
}
var ao = { exports: {} }, ro = { exports: {} }, _n = {}, Pt = {}, Pg;
function It() {
  if (Pg) return Pt;
  Pg = 1, Pt.__esModule = !0, Pt.extend = c, Pt.indexOf = d, Pt.escapeExpression = p, Pt.isEmpty = y, Pt.createFrame = S, Pt.blockParams = m, Pt.appendContextPath = v;
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
  function c(h) {
    for (var x = 1; x < arguments.length; x++)
      for (var C in arguments[x])
        Object.prototype.hasOwnProperty.call(arguments[x], C) && (h[C] = arguments[x][C]);
    return h;
  }
  var u = Object.prototype.toString;
  Pt.toString = u;
  var b = function(x) {
    return typeof x == "function";
  };
  b(/x/) && (Pt.isFunction = b = function(h) {
    return typeof h == "function" && u.call(h) === "[object Function]";
  }), Pt.isFunction = b;
  var g = Array.isArray || function(h) {
    return h && typeof h == "object" ? u.call(h) === "[object Array]" : !1;
  };
  Pt.isArray = g;
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
  function y(h) {
    return !h && h !== 0 ? !0 : !!(g(h) && h.length === 0);
  }
  function S(h) {
    var x = c({}, h);
    return x._parent = h, x;
  }
  function m(h, x) {
    return h.path = x, h;
  }
  function v(h, x) {
    return (h ? h + "." : "") + x;
  }
  return Pt;
}
var io = { exports: {} }, qg;
function En() {
  return qg || (qg = 1, (function(r, a) {
    a.__esModule = !0;
    var l = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(c, u) {
      var b = u && u.loc, g = void 0, d = void 0, p = void 0, y = void 0;
      b && (g = b.start.line, d = b.end.line, p = b.start.column, y = b.end.column, c += " - " + g + ":" + p);
      for (var S = Error.prototype.constructor.call(this, c), m = 0; m < l.length; m++)
        this[l[m]] = S[l[m]];
      Error.captureStackTrace && Error.captureStackTrace(this, s);
      try {
        b && (this.lineNumber = g, this.endLineNumber = d, Object.defineProperty ? (Object.defineProperty(this, "column", {
          value: p,
          enumerable: !0
        }), Object.defineProperty(this, "endColumn", {
          value: y,
          enumerable: !0
        })) : (this.column = p, this.endColumn = y));
      } catch {
      }
    }
    s.prototype = new Error(), a.default = s, r.exports = a.default;
  })(io, io.exports)), io.exports;
}
var Sl = {}, lo = { exports: {} }, Ig;
function c_() {
  return Ig || (Ig = 1, (function(r, a) {
    a.__esModule = !0;
    var l = It();
    a.default = function(s) {
      s.registerHelper("blockHelperMissing", function(c, u) {
        var b = u.inverse, g = u.fn;
        if (c === !0)
          return g(this);
        if (c === !1 || c == null)
          return b(this);
        if (l.isArray(c))
          return c.length > 0 ? (u.ids && (u.ids = [u.name]), s.helpers.each(c, u)) : b(this);
        if (u.data && u.ids) {
          var d = l.createFrame(u.data);
          d.contextPath = l.appendContextPath(u.data.contextPath, u.name), u = { data: d };
        }
        return g(c, u);
      });
    }, r.exports = a.default;
  })(lo, lo.exports)), lo.exports;
}
var so = { exports: {} }, Gg;
function f_() {
  return Gg || (Gg = 1, (function(r, a) {
    a.__esModule = !0;
    function l(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var s = It(), c = En(), u = l(c);
    a.default = function(b) {
      b.registerHelper("each", function(g, d) {
        if (!d)
          throw new u.default("Must pass iterator to #each");
        var p = d.fn, y = d.inverse, S = 0, m = "", v = void 0, h = void 0;
        d.data && d.ids && (h = s.appendContextPath(d.data.contextPath, d.ids[0]) + "."), s.isFunction(g) && (g = g.call(this)), d.data && (v = s.createFrame(d.data));
        function x(E, w, R) {
          v && (v.key = E, v.index = w, v.first = w === 0, v.last = !!R, h && (v.contextPath = h + E)), m = m + p(g[E], {
            data: v,
            blockParams: s.blockParams([g[E], E], [h + E, null])
          });
        }
        if (g && typeof g == "object")
          if (s.isArray(g))
            for (var C = g.length; S < C; S++)
              S in g && x(S, S, S === g.length - 1);
          else if (typeof Symbol == "function" && g[Symbol.iterator]) {
            for (var O = [], A = g[Symbol.iterator](), M = A.next(); !M.done; M = A.next())
              O.push(M.value);
            g = O;
            for (var C = g.length; S < C; S++)
              x(S, S, S === g.length - 1);
          } else
            (function() {
              var E = void 0;
              Object.keys(g).forEach(function(w) {
                E !== void 0 && x(E, S - 1), E = w, S++;
              }), E !== void 0 && x(E, S - 1, !0);
            })();
        return S === 0 && (m = y(this)), m;
      });
    }, r.exports = a.default;
  })(so, so.exports)), so.exports;
}
var oo = { exports: {} }, Vg;
function h_() {
  return Vg || (Vg = 1, (function(r, a) {
    a.__esModule = !0;
    function l(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var s = En(), c = l(s);
    a.default = function(u) {
      u.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new c.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, r.exports = a.default;
  })(oo, oo.exports)), oo.exports;
}
var uo = { exports: {} }, Yg;
function d_() {
  return Yg || (Yg = 1, (function(r, a) {
    a.__esModule = !0;
    function l(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var s = It(), c = En(), u = l(c);
    a.default = function(b) {
      b.registerHelper("if", function(g, d) {
        if (arguments.length != 2)
          throw new u.default("#if requires exactly one argument");
        return s.isFunction(g) && (g = g.call(this)), !d.hash.includeZero && !g || s.isEmpty(g) ? d.inverse(this) : d.fn(this);
      }), b.registerHelper("unless", function(g, d) {
        if (arguments.length != 2)
          throw new u.default("#unless requires exactly one argument");
        return b.helpers.if.call(this, g, {
          fn: d.inverse,
          inverse: d.fn,
          hash: d.hash
        });
      });
    }, r.exports = a.default;
  })(uo, uo.exports)), uo.exports;
}
var co = { exports: {} }, Fg;
function p_() {
  return Fg || (Fg = 1, (function(r, a) {
    a.__esModule = !0, a.default = function(l) {
      l.registerHelper("log", function() {
        for (var s = [void 0], c = arguments[arguments.length - 1], u = 0; u < arguments.length - 1; u++)
          s.push(arguments[u]);
        var b = 1;
        c.hash.level != null ? b = c.hash.level : c.data && c.data.level != null && (b = c.data.level), s[0] = b, l.log.apply(l, s);
      });
    }, r.exports = a.default;
  })(co, co.exports)), co.exports;
}
var fo = { exports: {} }, Xg;
function m_() {
  return Xg || (Xg = 1, (function(r, a) {
    a.__esModule = !0, a.default = function(l) {
      l.registerHelper("lookup", function(s, c, u) {
        return s && u.lookupProperty(s, c);
      });
    }, r.exports = a.default;
  })(fo, fo.exports)), fo.exports;
}
var ho = { exports: {} }, Qg;
function g_() {
  return Qg || (Qg = 1, (function(r, a) {
    a.__esModule = !0;
    function l(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var s = It(), c = En(), u = l(c);
    a.default = function(b) {
      b.registerHelper("with", function(g, d) {
        if (arguments.length != 2)
          throw new u.default("#with requires exactly one argument");
        s.isFunction(g) && (g = g.call(this));
        var p = d.fn;
        if (s.isEmpty(g))
          return d.inverse(this);
        var y = d.data;
        return d.data && d.ids && (y = s.createFrame(d.data), y.contextPath = s.appendContextPath(d.data.contextPath, d.ids[0])), p(g, {
          data: y,
          blockParams: s.blockParams([g], [y && y.contextPath])
        });
      });
    }, r.exports = a.default;
  })(ho, ho.exports)), ho.exports;
}
var Zg;
function m1() {
  if (Zg) return Sl;
  Zg = 1, Sl.__esModule = !0, Sl.registerDefaultHelpers = x, Sl.moveHelperToHooks = C;
  function r(O) {
    return O && O.__esModule ? O : { default: O };
  }
  var a = c_(), l = r(a), s = f_(), c = r(s), u = h_(), b = r(u), g = d_(), d = r(g), p = p_(), y = r(p), S = m_(), m = r(S), v = g_(), h = r(v);
  function x(O) {
    l.default(O), c.default(O), b.default(O), d.default(O), y.default(O), m.default(O), h.default(O);
  }
  function C(O, A, M) {
    O.helpers[A] && (O.hooks[A] = O.helpers[A], M || delete O.helpers[A]);
  }
  return Sl;
}
var po = {}, mo = { exports: {} }, Kg;
function v_() {
  return Kg || (Kg = 1, (function(r, a) {
    a.__esModule = !0;
    var l = It();
    a.default = function(s) {
      s.registerDecorator("inline", function(c, u, b, g) {
        var d = c;
        return u.partials || (u.partials = {}, d = function(p, y) {
          var S = b.partials;
          b.partials = l.extend({}, S, u.partials);
          var m = c(p, y);
          return b.partials = S, m;
        }), u.partials[g.args[0]] = g.fn, d;
      });
    }, r.exports = a.default;
  })(mo, mo.exports)), mo.exports;
}
var Jg;
function y_() {
  if (Jg) return po;
  Jg = 1, po.__esModule = !0, po.registerDefaultDecorators = s;
  function r(c) {
    return c && c.__esModule ? c : { default: c };
  }
  var a = v_(), l = r(a);
  function s(c) {
    l.default(c);
  }
  return po;
}
var go = { exports: {} }, Wg;
function g1() {
  return Wg || (Wg = 1, (function(r, a) {
    a.__esModule = !0;
    var l = It(), s = {
      methodMap: ["debug", "info", "warn", "error"],
      level: "info",
      // Maps a given level value to the `methodMap` indexes above.
      lookupLevel: function(u) {
        if (typeof u == "string") {
          var b = l.indexOf(s.methodMap, u.toLowerCase());
          b >= 0 ? u = b : u = parseInt(u, 10);
        }
        return u;
      },
      // Can be overridden in the host environment
      log: function(u) {
        if (u = s.lookupLevel(u), typeof console < "u" && s.lookupLevel(s.level) <= u) {
          var b = s.methodMap[u];
          console[b] || (b = "log");
          for (var g = arguments.length, d = Array(g > 1 ? g - 1 : 0), p = 1; p < g; p++)
            d[p - 1] = arguments[p];
          console[b].apply(console, d);
        }
      }
    };
    a.default = s, r.exports = a.default;
  })(go, go.exports)), go.exports;
}
var si = {}, vo = {}, $g;
function b_() {
  if ($g) return vo;
  $g = 1, vo.__esModule = !0, vo.createNewLookupObject = a;
  var r = It();
  function a() {
    for (var l = arguments.length, s = Array(l), c = 0; c < l; c++)
      s[c] = arguments[c];
    return r.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(s));
  }
  return vo;
}
var ev;
function v1() {
  if (ev) return si;
  ev = 1, si.__esModule = !0, si.createProtoAccessControl = u, si.resultIsAllowed = b, si.resetLoggedProperties = p;
  function r(y) {
    return y && y.__esModule ? y : { default: y };
  }
  var a = b_(), l = g1(), s = r(l), c = /* @__PURE__ */ Object.create(null);
  function u(y) {
    var S = /* @__PURE__ */ Object.create(null);
    S.constructor = !1, S.__defineGetter__ = !1, S.__defineSetter__ = !1, S.__lookupGetter__ = !1;
    var m = /* @__PURE__ */ Object.create(null);
    return m.__proto__ = !1, {
      properties: {
        whitelist: a.createNewLookupObject(m, y.allowedProtoProperties),
        defaultValue: y.allowProtoPropertiesByDefault
      },
      methods: {
        whitelist: a.createNewLookupObject(S, y.allowedProtoMethods),
        defaultValue: y.allowProtoMethodsByDefault
      }
    };
  }
  function b(y, S, m) {
    return g(typeof y == "function" ? S.methods : S.properties, m);
  }
  function g(y, S) {
    return y.whitelist[S] !== void 0 ? y.whitelist[S] === !0 : y.defaultValue !== void 0 ? y.defaultValue : (d(S), !1);
  }
  function d(y) {
    c[y] !== !0 && (c[y] = !0, s.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + y + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function p() {
    Object.keys(c).forEach(function(y) {
      delete c[y];
    });
  }
  return si;
}
var tv;
function dh() {
  if (tv) return _n;
  tv = 1, _n.__esModule = !0, _n.HandlebarsEnvironment = h;
  function r(C) {
    return C && C.__esModule ? C : { default: C };
  }
  var a = It(), l = En(), s = r(l), c = m1(), u = y_(), b = g1(), g = r(b), d = v1(), p = "4.7.8";
  _n.VERSION = p;
  var y = 8;
  _n.COMPILER_REVISION = y;
  var S = 7;
  _n.LAST_COMPATIBLE_COMPILER_REVISION = S;
  var m = {
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
  _n.REVISION_CHANGES = m;
  var v = "[object Object]";
  function h(C, O, A) {
    this.helpers = C || {}, this.partials = O || {}, this.decorators = A || {}, c.registerDefaultHelpers(this), u.registerDefaultDecorators(this);
  }
  h.prototype = {
    constructor: h,
    logger: g.default,
    log: g.default.log,
    registerHelper: function(O, A) {
      if (a.toString.call(O) === v) {
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
      if (a.toString.call(O) === v)
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
      if (a.toString.call(O) === v) {
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
  var x = g.default.log;
  return _n.log = x, _n.createFrame = a.createFrame, _n.logger = g.default, _n;
}
var yo = { exports: {} }, nv;
function S_() {
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
var Wn = {}, bo = {}, av;
function __() {
  if (av) return bo;
  av = 1, bo.__esModule = !0, bo.wrapHelper = r;
  function r(a, l) {
    if (typeof a != "function")
      return a;
    var s = function() {
      var u = arguments[arguments.length - 1];
      return arguments[arguments.length - 1] = l(u), a.apply(this, arguments);
    };
    return s;
  }
  return bo;
}
var rv;
function x_() {
  if (rv) return Wn;
  rv = 1, Wn.__esModule = !0, Wn.checkRevision = y, Wn.template = S, Wn.wrapProgram = m, Wn.resolvePartial = v, Wn.invokePartial = h, Wn.noop = x;
  function r(E) {
    return E && E.__esModule ? E : { default: E };
  }
  function a(E) {
    if (E && E.__esModule)
      return E;
    var w = {};
    if (E != null)
      for (var R in E)
        Object.prototype.hasOwnProperty.call(E, R) && (w[R] = E[R]);
    return w.default = E, w;
  }
  var l = It(), s = a(l), c = En(), u = r(c), b = dh(), g = m1(), d = __(), p = v1();
  function y(E) {
    var w = E && E[0] || 1, R = b.COMPILER_REVISION;
    if (!(w >= b.LAST_COMPATIBLE_COMPILER_REVISION && w <= b.COMPILER_REVISION))
      if (w < b.LAST_COMPATIBLE_COMPILER_REVISION) {
        var L = b.REVISION_CHANGES[R], I = b.REVISION_CHANGES[w];
        throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + L + ") or downgrade your runtime to an older version (" + I + ").");
      } else
        throw new u.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + E[1] + ").");
  }
  function S(E, w) {
    if (!w)
      throw new u.default("No environment passed to template");
    if (!E || !E.main)
      throw new u.default("Unknown template object: " + typeof E);
    E.main.decorator = E.main_d, w.VM.checkRevision(E.compiler);
    var R = E.compiler && E.compiler[0] === 7;
    function L(q, F, Y) {
      Y.hash && (F = s.extend({}, F, Y.hash), Y.ids && (Y.ids[0] = !0)), q = w.VM.resolvePartial.call(this, q, F, Y);
      var ae = s.extend({}, Y, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), oe = w.VM.invokePartial.call(this, q, F, ae);
      if (oe == null && w.compile && (Y.partials[Y.name] = w.compile(q, E.compilerOptions, w), oe = Y.partials[Y.name](F, ae)), oe != null) {
        if (Y.indent) {
          for (var he = oe.split(`
`), U = 0, ee = he.length; U < ee && !(!he[U] && U + 1 === ee); U++)
            he[U] = Y.indent + he[U];
          oe = he.join(`
`);
        }
        return oe;
      } else
        throw new u.default("The partial " + Y.name + " could not be compiled when running in runtime-only mode");
    }
    var I = {
      strict: function(F, Y, ae) {
        if (!F || !(Y in F))
          throw new u.default('"' + Y + '" not defined in ' + F, {
            loc: ae
          });
        return I.lookupProperty(F, Y);
      },
      lookupProperty: function(F, Y) {
        var ae = F[Y];
        if (ae == null || Object.prototype.hasOwnProperty.call(F, Y) || p.resultIsAllowed(ae, I.protoAccessControl, Y))
          return ae;
      },
      lookup: function(F, Y) {
        for (var ae = F.length, oe = 0; oe < ae; oe++) {
          var he = F[oe] && I.lookupProperty(F[oe], Y);
          if (he != null)
            return F[oe][Y];
        }
      },
      lambda: function(F, Y) {
        return typeof F == "function" ? F.call(Y) : F;
      },
      escapeExpression: s.escapeExpression,
      invokePartial: L,
      fn: function(F) {
        var Y = E[F];
        return Y.decorator = E[F + "_d"], Y;
      },
      programs: [],
      program: function(F, Y, ae, oe, he) {
        var U = this.programs[F], ee = this.fn(F);
        return Y || he || oe || ae ? U = m(this, F, ee, Y, ae, oe, he) : U || (U = this.programs[F] = m(this, F, ee)), U;
      },
      data: function(F, Y) {
        for (; F && Y--; )
          F = F._parent;
        return F;
      },
      mergeIfNeeded: function(F, Y) {
        var ae = F || Y;
        return F && Y && F !== Y && (ae = s.extend({}, Y, F)), ae;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: w.VM.noop,
      compilerInfo: E.compiler
    };
    function $(q) {
      var F = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], Y = F.data;
      $._setup(F), !F.partial && E.useData && (Y = C(q, Y));
      var ae = void 0, oe = E.useBlockParams ? [] : void 0;
      E.useDepths && (F.depths ? ae = q != F.depths[0] ? [q].concat(F.depths) : F.depths : ae = [q]);
      function he(U) {
        return "" + E.main(I, U, I.helpers, I.partials, Y, oe, ae);
      }
      return he = O(E.main, he, I, F.depths || [], Y, oe), he(q, F);
    }
    return $.isTop = !0, $._setup = function(q) {
      if (q.partial)
        I.protoAccessControl = q.protoAccessControl, I.helpers = q.helpers, I.partials = q.partials, I.decorators = q.decorators, I.hooks = q.hooks;
      else {
        var F = s.extend({}, w.helpers, q.helpers);
        A(F, I), I.helpers = F, E.usePartial && (I.partials = I.mergeIfNeeded(q.partials, w.partials)), (E.usePartial || E.useDecorators) && (I.decorators = s.extend({}, w.decorators, q.decorators)), I.hooks = {}, I.protoAccessControl = p.createProtoAccessControl(q);
        var Y = q.allowCallsToHelperMissing || R;
        g.moveHelperToHooks(I, "helperMissing", Y), g.moveHelperToHooks(I, "blockHelperMissing", Y);
      }
    }, $._child = function(q, F, Y, ae) {
      if (E.useBlockParams && !Y)
        throw new u.default("must pass block params");
      if (E.useDepths && !ae)
        throw new u.default("must pass parent depths");
      return m(I, q, E[q], F, 0, Y, ae);
    }, $;
  }
  function m(E, w, R, L, I, $, q) {
    function F(Y) {
      var ae = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], oe = q;
      return q && Y != q[0] && !(Y === E.nullContext && q[0] === null) && (oe = [Y].concat(q)), R(E, Y, E.helpers, E.partials, ae.data || L, $ && [ae.blockParams].concat($), oe);
    }
    return F = O(R, F, E, q, L, $), F.program = w, F.depth = q ? q.length : 0, F.blockParams = I || 0, F;
  }
  function v(E, w, R) {
    return E ? !E.call && !R.name && (R.name = E, E = R.partials[E]) : R.name === "@partial-block" ? E = R.data["partial-block"] : E = R.partials[R.name], E;
  }
  function h(E, w, R) {
    var L = R.data && R.data["partial-block"];
    R.partial = !0, R.ids && (R.data.contextPath = R.ids[0] || R.data.contextPath);
    var I = void 0;
    if (R.fn && R.fn !== x && (function() {
      R.data = b.createFrame(R.data);
      var $ = R.fn;
      I = R.data["partial-block"] = function(F) {
        var Y = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return Y.data = b.createFrame(Y.data), Y.data["partial-block"] = L, $(F, Y);
      }, $.partials && (R.partials = s.extend({}, R.partials, $.partials));
    })(), E === void 0 && I && (E = I), E === void 0)
      throw new u.default("The partial " + R.name + " could not be found");
    if (E instanceof Function)
      return E(w, R);
  }
  function x() {
    return "";
  }
  function C(E, w) {
    return (!w || !("root" in w)) && (w = w ? b.createFrame(w) : {}, w.root = E), w;
  }
  function O(E, w, R, L, I, $) {
    if (E.decorator) {
      var q = {};
      w = E.decorator(w, q, R, L && L[0], I, $, L), s.extend(w, q);
    }
    return w;
  }
  function A(E, w) {
    Object.keys(E).forEach(function(R) {
      var L = E[R];
      E[R] = M(L, w);
    });
  }
  function M(E, w) {
    var R = w.lookupProperty;
    return d.wrapHelper(E, function(L) {
      return s.extend({ lookupProperty: R }, L);
    });
  }
  return Wn;
}
var So = { exports: {} }, iv;
function y1() {
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
function E_() {
  return lv || (lv = 1, (function(r, a) {
    a.__esModule = !0;
    function l(A) {
      return A && A.__esModule ? A : { default: A };
    }
    function s(A) {
      if (A && A.__esModule)
        return A;
      var M = {};
      if (A != null)
        for (var E in A)
          Object.prototype.hasOwnProperty.call(A, E) && (M[E] = A[E]);
      return M.default = A, M;
    }
    var c = dh(), u = s(c), b = S_(), g = l(b), d = En(), p = l(d), y = It(), S = s(y), m = x_(), v = s(m), h = y1(), x = l(h);
    function C() {
      var A = new u.HandlebarsEnvironment();
      return S.extend(A, u), A.SafeString = g.default, A.Exception = p.default, A.Utils = S, A.escapeExpression = S.escapeExpression, A.VM = v, A.template = function(M) {
        return v.template(M, A);
      }, A;
    }
    var O = C();
    O.create = C, x.default(O), O.default = O, a.default = O, r.exports = a.default;
  })(ro, ro.exports)), ro.exports;
}
var _o = { exports: {} }, sv;
function b1() {
  return sv || (sv = 1, (function(r, a) {
    a.__esModule = !0;
    var l = {
      // Public API used to evaluate derived attributes regarding AST nodes
      helpers: {
        // a mustache is definitely a helper if:
        // * it is an eligible helper, and
        // * it has at least one parameter or hash segment
        helperExpression: function(c) {
          return c.type === "SubExpression" || (c.type === "MustacheStatement" || c.type === "BlockStatement") && !!(c.params && c.params.length || c.hash);
        },
        scopedId: function(c) {
          return /^\.|this\b/.test(c.original);
        },
        // an ID is simple if it only has one part, and that part is not
        // `..` or `this`.
        simpleId: function(c) {
          return c.parts.length === 1 && !l.helpers.scopedId(c) && !c.depth;
        }
      }
    };
    a.default = l, r.exports = a.default;
  })(_o, _o.exports)), _o.exports;
}
var oi = {}, xo = { exports: {} }, ov;
function C_() {
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
        performAction: function(g, d, p, y, S, m, v) {
          var h = m.length - 1;
          switch (S) {
            case 1:
              return m[h - 1];
            case 2:
              this.$ = y.prepareProgram(m[h]);
              break;
            case 3:
              this.$ = m[h];
              break;
            case 4:
              this.$ = m[h];
              break;
            case 5:
              this.$ = m[h];
              break;
            case 6:
              this.$ = m[h];
              break;
            case 7:
              this.$ = m[h];
              break;
            case 8:
              this.$ = m[h];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: y.stripComment(m[h]),
                strip: y.stripFlags(m[h], m[h]),
                loc: y.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: m[h],
                value: m[h],
                loc: y.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = y.prepareRawBlock(m[h - 2], m[h - 1], m[h], this._$);
              break;
            case 12:
              this.$ = { path: m[h - 3], params: m[h - 2], hash: m[h - 1] };
              break;
            case 13:
              this.$ = y.prepareBlock(m[h - 3], m[h - 2], m[h - 1], m[h], !1, this._$);
              break;
            case 14:
              this.$ = y.prepareBlock(m[h - 3], m[h - 2], m[h - 1], m[h], !0, this._$);
              break;
            case 15:
              this.$ = { open: m[h - 5], path: m[h - 4], params: m[h - 3], hash: m[h - 2], blockParams: m[h - 1], strip: y.stripFlags(m[h - 5], m[h]) };
              break;
            case 16:
              this.$ = { path: m[h - 4], params: m[h - 3], hash: m[h - 2], blockParams: m[h - 1], strip: y.stripFlags(m[h - 5], m[h]) };
              break;
            case 17:
              this.$ = { path: m[h - 4], params: m[h - 3], hash: m[h - 2], blockParams: m[h - 1], strip: y.stripFlags(m[h - 5], m[h]) };
              break;
            case 18:
              this.$ = { strip: y.stripFlags(m[h - 1], m[h - 1]), program: m[h] };
              break;
            case 19:
              var x = y.prepareBlock(m[h - 2], m[h - 1], m[h], m[h], !1, this._$), C = y.prepareProgram([x], m[h - 1].loc);
              C.chained = !0, this.$ = { strip: m[h - 2].strip, program: C, chain: !0 };
              break;
            case 20:
              this.$ = m[h];
              break;
            case 21:
              this.$ = { path: m[h - 1], strip: y.stripFlags(m[h - 2], m[h]) };
              break;
            case 22:
              this.$ = y.prepareMustache(m[h - 3], m[h - 2], m[h - 1], m[h - 4], y.stripFlags(m[h - 4], m[h]), this._$);
              break;
            case 23:
              this.$ = y.prepareMustache(m[h - 3], m[h - 2], m[h - 1], m[h - 4], y.stripFlags(m[h - 4], m[h]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: m[h - 3],
                params: m[h - 2],
                hash: m[h - 1],
                indent: "",
                strip: y.stripFlags(m[h - 4], m[h]),
                loc: y.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = y.preparePartialBlock(m[h - 2], m[h - 1], m[h], this._$);
              break;
            case 26:
              this.$ = { path: m[h - 3], params: m[h - 2], hash: m[h - 1], strip: y.stripFlags(m[h - 4], m[h]) };
              break;
            case 27:
              this.$ = m[h];
              break;
            case 28:
              this.$ = m[h];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: m[h - 3],
                params: m[h - 2],
                hash: m[h - 1],
                loc: y.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: m[h], loc: y.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: y.id(m[h - 2]), value: m[h], loc: y.locInfo(this._$) };
              break;
            case 32:
              this.$ = y.id(m[h - 1]);
              break;
            case 33:
              this.$ = m[h];
              break;
            case 34:
              this.$ = m[h];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: m[h], original: m[h], loc: y.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(m[h]), original: Number(m[h]), loc: y.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: m[h] === "true", original: m[h] === "true", loc: y.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: y.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: y.locInfo(this._$) };
              break;
            case 40:
              this.$ = m[h];
              break;
            case 41:
              this.$ = m[h];
              break;
            case 42:
              this.$ = y.preparePath(!0, m[h], this._$);
              break;
            case 43:
              this.$ = y.preparePath(!1, m[h], this._$);
              break;
            case 44:
              m[h - 2].push({ part: y.id(m[h]), original: m[h], separator: m[h - 1] }), this.$ = m[h - 2];
              break;
            case 45:
              this.$ = [{ part: y.id(m[h]), original: m[h] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              m[h - 1].push(m[h]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              m[h - 1].push(m[h]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              m[h - 1].push(m[h]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              m[h - 1].push(m[h]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              m[h - 1].push(m[h]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              m[h - 1].push(m[h]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              m[h - 1].push(m[h]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              m[h - 1].push(m[h]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              m[h - 1].push(m[h]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              m[h - 1].push(m[h]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              m[h - 1].push(m[h]);
              break;
            case 98:
              this.$ = [m[h]];
              break;
            case 99:
              m[h - 1].push(m[h]);
              break;
            case 100:
              this.$ = [m[h]];
              break;
            case 101:
              m[h - 1].push(m[h]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(g, d) {
          throw new Error(g);
        },
        parse: function(g) {
          var d = this, p = [0], y = [null], S = [], m = this.table, v = "", h = 0, x = 0;
          this.lexer.setInput(g), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var C = this.lexer.yylloc;
          S.push(C);
          var O = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function A() {
            var ae;
            return ae = d.lexer.lex() || 1, typeof ae != "number" && (ae = d.symbols_[ae] || ae), ae;
          }
          for (var M, E, w, R, L = {}, I, $, q, F; ; ) {
            if (E = p[p.length - 1], this.defaultActions[E] ? w = this.defaultActions[E] : ((M === null || typeof M > "u") && (M = A()), w = m[E] && m[E][M]), typeof w > "u" || !w.length || !w[0]) {
              var Y = "";
              {
                F = [];
                for (I in m[E]) this.terminals_[I] && I > 2 && F.push("'" + this.terminals_[I] + "'");
                this.lexer.showPosition ? Y = "Parse error on line " + (h + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + F.join(", ") + ", got '" + (this.terminals_[M] || M) + "'" : Y = "Parse error on line " + (h + 1) + ": Unexpected " + (M == 1 ? "end of input" : "'" + (this.terminals_[M] || M) + "'"), this.parseError(Y, { text: this.lexer.match, token: this.terminals_[M] || M, line: this.lexer.yylineno, loc: C, expected: F });
              }
            }
            if (w[0] instanceof Array && w.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + E + ", token: " + M);
            switch (w[0]) {
              case 1:
                p.push(M), y.push(this.lexer.yytext), S.push(this.lexer.yylloc), p.push(w[1]), M = null, x = this.lexer.yyleng, v = this.lexer.yytext, h = this.lexer.yylineno, C = this.lexer.yylloc;
                break;
              case 2:
                if ($ = this.productions_[w[1]][1], L.$ = y[y.length - $], L._$ = { first_line: S[S.length - ($ || 1)].first_line, last_line: S[S.length - 1].last_line, first_column: S[S.length - ($ || 1)].first_column, last_column: S[S.length - 1].last_column }, O && (L._$.range = [S[S.length - ($ || 1)].range[0], S[S.length - 1].range[1]]), R = this.performAction.call(L, v, x, h, this.yy, w[1], y, S), typeof R < "u")
                  return R;
                $ && (p = p.slice(0, -1 * $ * 2), y = y.slice(0, -1 * $), S = S.slice(0, -1 * $)), p.push(this.productions_[w[1]][0]), y.push(L.$), S.push(L._$), q = m[p[p.length - 2]][p[p.length - 1]], p.push(q);
                break;
              case 3:
                return !0;
            }
          }
          return !0;
        }
      }, c = (function() {
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
            var p = d.length, y = d.split(/(?:\r\n?|\n)/g);
            this._input = d + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - p - 1), this.offset -= p;
            var S = this.match.split(/(?:\r\n?|\n)/g);
            this.match = this.match.substr(0, this.match.length - 1), this.matched = this.matched.substr(0, this.matched.length - 1), y.length - 1 && (this.yylineno -= y.length - 1);
            var m = this.yylloc.range;
            return this.yylloc = {
              first_line: this.yylloc.first_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.first_column,
              last_column: y ? (y.length === S.length ? this.yylloc.first_column : 0) + S[S.length - y.length].length - y[0].length : this.yylloc.first_column - p
            }, this.options.ranges && (this.yylloc.range = [m[0], m[0] + this.yyleng - p]), this;
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
            var d, p, y, S, m;
            this._more || (this.yytext = "", this.match = "");
            for (var v = this._currentRules(), h = 0; h < v.length && (y = this._input.match(this.rules[v[h]]), !(y && (!p || y[0].length > p[0].length) && (p = y, S = h, !this.options.flex))); h++)
              ;
            return p ? (m = p[0].match(/(?:\r\n?|\n).*/g), m && (this.yylineno += m.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: m ? m[m.length - 1].length - m[m.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + p[0].length
            }, this.yytext += p[0], this.match += p[0], this.matches = p, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(p[0].length), this.matched += p[0], d = this.performAction.call(this, this.yy, this, v[S], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), d || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
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
        return b.options = {}, b.performAction = function(d, p, y, S) {
          function m(v, h) {
            return p.yytext = p.yytext.substring(v, p.yyleng - h + v);
          }
          switch (y) {
            case 0:
              if (p.yytext.slice(-2) === "\\\\" ? (m(0, 1), this.begin("mu")) : p.yytext.slice(-1) === "\\" ? (m(0, 1), this.begin("emu")) : this.begin("mu"), p.yytext) return 15;
              break;
            case 1:
              return 15;
            case 2:
              return this.popState(), 15;
            case 3:
              return this.begin("raw"), 15;
            case 4:
              return this.popState(), this.conditionStack[this.conditionStack.length - 1] === "raw" ? 15 : (m(5, 9), "END_RAW_BLOCK");
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
              return p.yytext = m(1, 2).replace(/\\"/g, '"'), 80;
            case 32:
              return p.yytext = m(1, 2).replace(/\\'/g, "'"), 80;
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
      s.lexer = c;
      function u() {
        this.yy = {};
      }
      return u.prototype = s, s.Parser = u, new u();
    })();
    a.default = l, r.exports = a.default;
  })(xo, xo.exports)), xo.exports;
}
var Eo = { exports: {} }, Co = { exports: {} }, uv;
function S1() {
  return uv || (uv = 1, (function(r, a) {
    a.__esModule = !0;
    function l(p) {
      return p && p.__esModule ? p : { default: p };
    }
    var s = En(), c = l(s);
    function u() {
      this.parents = [];
    }
    u.prototype = {
      constructor: u,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(y, S) {
        var m = this.accept(y[S]);
        if (this.mutating) {
          if (m && !u.prototype[m.type])
            throw new c.default('Unexpected node type "' + m.type + '" found when accepting ' + S + " on " + y.type);
          y[S] = m;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(y, S) {
        if (this.acceptKey(y, S), !y[S])
          throw new c.default(y.type + " requires " + S);
      },
      // Traverses a given array. If mutating, empty respnses will be removed
      // for child elements.
      acceptArray: function(y) {
        for (var S = 0, m = y.length; S < m; S++)
          this.acceptKey(y, S), y[S] || (y.splice(S, 1), S--, m--);
      },
      accept: function(y) {
        if (y) {
          if (!this[y.type])
            throw new c.default("Unknown type: " + y.type, y);
          this.current && this.parents.unshift(this.current), this.current = y;
          var S = this[y.type](y);
          if (this.current = this.parents.shift(), !this.mutating || S)
            return S;
          if (S !== !1)
            return y;
        }
      },
      Program: function(y) {
        this.acceptArray(y.body);
      },
      MustacheStatement: b,
      Decorator: b,
      BlockStatement: g,
      DecoratorBlock: g,
      PartialStatement: d,
      PartialBlockStatement: function(y) {
        d.call(this, y), this.acceptKey(y, "program");
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
      Hash: function(y) {
        this.acceptArray(y.pairs);
      },
      HashPair: function(y) {
        this.acceptRequired(y, "value");
      }
    };
    function b(p) {
      this.acceptRequired(p, "path"), this.acceptArray(p.params), this.acceptKey(p, "hash");
    }
    function g(p) {
      b.call(this, p), this.acceptKey(p, "program"), this.acceptKey(p, "inverse");
    }
    function d(p) {
      this.acceptRequired(p, "name"), this.acceptArray(p.params), this.acceptKey(p, "hash");
    }
    a.default = u, r.exports = a.default;
  })(Co, Co.exports)), Co.exports;
}
var cv;
function A_() {
  return cv || (cv = 1, (function(r, a) {
    a.__esModule = !0;
    function l(y) {
      return y && y.__esModule ? y : { default: y };
    }
    var s = S1(), c = l(s);
    function u() {
      var y = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = y;
    }
    u.prototype = new c.default(), u.prototype.Program = function(y) {
      var S = !this.options.ignoreStandalone, m = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var v = y.body, h = 0, x = v.length; h < x; h++) {
        var C = v[h], O = this.accept(C);
        if (O) {
          var A = b(v, h, m), M = g(v, h, m), E = O.openStandalone && A, w = O.closeStandalone && M, R = O.inlineStandalone && A && M;
          O.close && d(v, h, !0), O.open && p(v, h, !0), S && R && (d(v, h), p(v, h) && C.type === "PartialStatement" && (C.indent = /([ \t]+$)/.exec(v[h - 1].original)[1])), S && E && (d((C.program || C.inverse).body), p(v, h)), S && w && (d(v, h), p((C.inverse || C.program).body));
        }
      }
      return y;
    }, u.prototype.BlockStatement = u.prototype.DecoratorBlock = u.prototype.PartialBlockStatement = function(y) {
      this.accept(y.program), this.accept(y.inverse);
      var S = y.program || y.inverse, m = y.program && y.inverse, v = m, h = m;
      if (m && m.chained)
        for (v = m.body[0].program; h.chained; )
          h = h.body[h.body.length - 1].program;
      var x = {
        open: y.openStrip.open,
        close: y.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: g(S.body),
        closeStandalone: b((v || S).body)
      };
      if (y.openStrip.close && d(S.body, null, !0), m) {
        var C = y.inverseStrip;
        C.open && p(S.body, null, !0), C.close && d(v.body, null, !0), y.closeStrip.open && p(h.body, null, !0), !this.options.ignoreStandalone && b(S.body) && g(v.body) && (p(S.body), d(v.body));
      } else y.closeStrip.open && p(S.body, null, !0);
      return x;
    }, u.prototype.Decorator = u.prototype.MustacheStatement = function(y) {
      return y.strip;
    }, u.prototype.PartialStatement = u.prototype.CommentStatement = function(y) {
      var S = y.strip || {};
      return {
        inlineStandalone: !0,
        open: S.open,
        close: S.close
      };
    };
    function b(y, S, m) {
      S === void 0 && (S = y.length);
      var v = y[S - 1], h = y[S - 2];
      if (!v)
        return m;
      if (v.type === "ContentStatement")
        return (h || !m ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(v.original);
    }
    function g(y, S, m) {
      S === void 0 && (S = -1);
      var v = y[S + 1], h = y[S + 2];
      if (!v)
        return m;
      if (v.type === "ContentStatement")
        return (h || !m ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(v.original);
    }
    function d(y, S, m) {
      var v = y[S == null ? 0 : S + 1];
      if (!(!v || v.type !== "ContentStatement" || !m && v.rightStripped)) {
        var h = v.value;
        v.value = v.value.replace(m ? /^\s+/ : /^[ \t]*\r?\n?/, ""), v.rightStripped = v.value !== h;
      }
    }
    function p(y, S, m) {
      var v = y[S == null ? y.length - 1 : S - 1];
      if (!(!v || v.type !== "ContentStatement" || !m && v.leftStripped)) {
        var h = v.value;
        return v.value = v.value.replace(m ? /\s+$/ : /[ \t]+$/, ""), v.leftStripped = v.value !== h, v.leftStripped;
      }
    }
    a.default = u, r.exports = a.default;
  })(Eo, Eo.exports)), Eo.exports;
}
var Wt = {}, fv;
function T_() {
  if (fv) return Wt;
  fv = 1, Wt.__esModule = !0, Wt.SourceLocation = c, Wt.id = u, Wt.stripFlags = b, Wt.stripComment = g, Wt.preparePath = d, Wt.prepareMustache = p, Wt.prepareRawBlock = y, Wt.prepareBlock = S, Wt.prepareProgram = m, Wt.preparePartialBlock = v;
  function r(h) {
    return h && h.__esModule ? h : { default: h };
  }
  var a = En(), l = r(a);
  function s(h, x) {
    if (x = x.path ? x.path.original : x, h.path.original !== x) {
      var C = { loc: h.path.loc };
      throw new l.default(h.path.original + " doesn't match " + x, C);
    }
  }
  function c(h, x) {
    this.source = h, this.start = {
      line: x.first_line,
      column: x.first_column
    }, this.end = {
      line: x.last_line,
      column: x.last_column
    };
  }
  function u(h) {
    return /^\[.*\]$/.test(h) ? h.substring(1, h.length - 1) : h;
  }
  function b(h, x) {
    return {
      open: h.charAt(2) === "~",
      close: x.charAt(x.length - 3) === "~"
    };
  }
  function g(h) {
    return h.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function d(h, x, C) {
    C = this.locInfo(C);
    for (var O = h ? "@" : "", A = [], M = 0, E = 0, w = x.length; E < w; E++) {
      var R = x[E].part, L = x[E].original !== R;
      if (O += (x[E].separator || "") + R, !L && (R === ".." || R === "." || R === "this")) {
        if (A.length > 0)
          throw new l.default("Invalid path: " + O, { loc: C });
        R === ".." && M++;
      } else
        A.push(R);
    }
    return {
      type: "PathExpression",
      data: h,
      depth: M,
      parts: A,
      original: O,
      loc: C
    };
  }
  function p(h, x, C, O, A, M) {
    var E = O.charAt(3) || O.charAt(2), w = E !== "{" && E !== "&", R = /\*/.test(O);
    return {
      type: R ? "Decorator" : "MustacheStatement",
      path: h,
      params: x,
      hash: C,
      escaped: w,
      strip: A,
      loc: this.locInfo(M)
    };
  }
  function y(h, x, C, O) {
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
  function S(h, x, C, O, A, M) {
    O && O.path && s(h, O);
    var E = /\*/.test(h.open);
    x.blockParams = h.blockParams;
    var w = void 0, R = void 0;
    if (C) {
      if (E)
        throw new l.default("Unexpected inverse block on decorator", C);
      C.chain && (C.program.body[0].closeStrip = O.strip), R = C.strip, w = C.program;
    }
    return A && (A = w, w = x, x = A), {
      type: E ? "DecoratorBlock" : "BlockStatement",
      path: h.path,
      params: h.params,
      hash: h.hash,
      program: x,
      inverse: w,
      openStrip: h.strip,
      inverseStrip: R,
      closeStrip: O && O.strip,
      loc: this.locInfo(M)
    };
  }
  function m(h, x) {
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
  function v(h, x, C, O) {
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
  return Wt;
}
var hv;
function w_() {
  if (hv) return oi;
  hv = 1, oi.__esModule = !0, oi.parseWithoutProcessing = y, oi.parse = S;
  function r(m) {
    if (m && m.__esModule)
      return m;
    var v = {};
    if (m != null)
      for (var h in m)
        Object.prototype.hasOwnProperty.call(m, h) && (v[h] = m[h]);
    return v.default = m, v;
  }
  function a(m) {
    return m && m.__esModule ? m : { default: m };
  }
  var l = C_(), s = a(l), c = A_(), u = a(c), b = T_(), g = r(b), d = It();
  oi.parser = s.default;
  var p = {};
  d.extend(p, g);
  function y(m, v) {
    if (m.type === "Program")
      return m;
    s.default.yy = p, p.locInfo = function(x) {
      return new p.SourceLocation(v && v.srcName, x);
    };
    var h = s.default.parse(m);
    return h;
  }
  function S(m, v) {
    var h = y(m, v), x = new u.default(v);
    return x.accept(h);
  }
  return oi;
}
var ui = {}, dv;
function N_() {
  if (dv) return ui;
  dv = 1, ui.__esModule = !0, ui.Compiler = g, ui.precompile = d, ui.compile = p;
  function r(m) {
    return m && m.__esModule ? m : { default: m };
  }
  var a = En(), l = r(a), s = It(), c = b1(), u = r(c), b = [].slice;
  function g() {
  }
  g.prototype = {
    compiler: g,
    equals: function(v) {
      var h = this.opcodes.length;
      if (v.opcodes.length !== h)
        return !1;
      for (var x = 0; x < h; x++) {
        var C = this.opcodes[x], O = v.opcodes[x];
        if (C.opcode !== O.opcode || !y(C.args, O.args))
          return !1;
      }
      h = this.children.length;
      for (var x = 0; x < h; x++)
        if (!this.children[x].equals(v.children[x]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(v, h) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = h, this.stringParams = h.stringParams, this.trackIds = h.trackIds, h.blockParams = h.blockParams || [], h.knownHelpers = s.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, h.knownHelpers), this.accept(v);
    },
    compileProgram: function(v) {
      var h = new this.compiler(), x = h.compile(v, this.options), C = this.guid++;
      return this.usePartial = this.usePartial || x.usePartial, this.children[C] = x, this.useDepths = this.useDepths || x.useDepths, C;
    },
    accept: function(v) {
      if (!this[v.type])
        throw new l.default("Unknown type: " + v.type, v);
      this.sourceNode.unshift(v);
      var h = this[v.type](v);
      return this.sourceNode.shift(), h;
    },
    Program: function(v) {
      this.options.blockParams.unshift(v.blockParams);
      for (var h = v.body, x = h.length, C = 0; C < x; C++)
        this.accept(h[C]);
      return this.options.blockParams.shift(), this.isSimple = x === 1, this.blockParams = v.blockParams ? v.blockParams.length : 0, this;
    },
    BlockStatement: function(v) {
      S(v);
      var h = v.program, x = v.inverse;
      h = h && this.compileProgram(h), x = x && this.compileProgram(x);
      var C = this.classifySexpr(v);
      C === "helper" ? this.helperSexpr(v, h, x) : C === "simple" ? (this.simpleSexpr(v), this.opcode("pushProgram", h), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("blockValue", v.path.original)) : (this.ambiguousSexpr(v, h, x), this.opcode("pushProgram", h), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(v) {
      var h = v.program && this.compileProgram(v.program), x = this.setupFullMustacheParams(v, h, void 0), C = v.path;
      this.useDecorators = !0, this.opcode("registerDecorator", x.length, C.original);
    },
    PartialStatement: function(v) {
      this.usePartial = !0;
      var h = v.program;
      h && (h = this.compileProgram(v.program));
      var x = v.params;
      if (x.length > 1)
        throw new l.default("Unsupported number of partial arguments: " + x.length, v);
      x.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : x.push({ type: "PathExpression", parts: [], depth: 0 }));
      var C = v.name.original, O = v.name.type === "SubExpression";
      O && this.accept(v.name), this.setupFullMustacheParams(v, h, void 0, !0);
      var A = v.indent || "";
      this.options.preventIndent && A && (this.opcode("appendContent", A), A = ""), this.opcode("invokePartial", O, C, A), this.opcode("append");
    },
    PartialBlockStatement: function(v) {
      this.PartialStatement(v);
    },
    MustacheStatement: function(v) {
      this.SubExpression(v), v.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append");
    },
    Decorator: function(v) {
      this.DecoratorBlock(v);
    },
    ContentStatement: function(v) {
      v.value && this.opcode("appendContent", v.value);
    },
    CommentStatement: function() {
    },
    SubExpression: function(v) {
      S(v);
      var h = this.classifySexpr(v);
      h === "simple" ? this.simpleSexpr(v) : h === "helper" ? this.helperSexpr(v) : this.ambiguousSexpr(v);
    },
    ambiguousSexpr: function(v, h, x) {
      var C = v.path, O = C.parts[0], A = h != null || x != null;
      this.opcode("getContext", C.depth), this.opcode("pushProgram", h), this.opcode("pushProgram", x), C.strict = !0, this.accept(C), this.opcode("invokeAmbiguous", O, A);
    },
    simpleSexpr: function(v) {
      var h = v.path;
      h.strict = !0, this.accept(h), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(v, h, x) {
      var C = this.setupFullMustacheParams(v, h, x), O = v.path, A = O.parts[0];
      if (this.options.knownHelpers[A])
        this.opcode("invokeKnownHelper", C.length, A);
      else {
        if (this.options.knownHelpersOnly)
          throw new l.default("You specified knownHelpersOnly, but used the unknown helper " + A, v);
        O.strict = !0, O.falsy = !0, this.accept(O), this.opcode("invokeHelper", C.length, O.original, u.default.helpers.simpleId(O));
      }
    },
    PathExpression: function(v) {
      this.addDepth(v.depth), this.opcode("getContext", v.depth);
      var h = v.parts[0], x = u.default.helpers.scopedId(v), C = !v.depth && !x && this.blockParamIndex(h);
      C ? this.opcode("lookupBlockParam", C, v.parts) : h ? v.data ? (this.options.data = !0, this.opcode("lookupData", v.depth, v.parts, v.strict)) : this.opcode("lookupOnContext", v.parts, v.falsy, v.strict, x) : this.opcode("pushContext");
    },
    StringLiteral: function(v) {
      this.opcode("pushString", v.value);
    },
    NumberLiteral: function(v) {
      this.opcode("pushLiteral", v.value);
    },
    BooleanLiteral: function(v) {
      this.opcode("pushLiteral", v.value);
    },
    UndefinedLiteral: function() {
      this.opcode("pushLiteral", "undefined");
    },
    NullLiteral: function() {
      this.opcode("pushLiteral", "null");
    },
    Hash: function(v) {
      var h = v.pairs, x = 0, C = h.length;
      for (this.opcode("pushHash"); x < C; x++)
        this.pushParam(h[x].value);
      for (; x--; )
        this.opcode("assignToHash", h[x].key);
      this.opcode("popHash");
    },
    // HELPERS
    opcode: function(v) {
      this.opcodes.push({
        opcode: v,
        args: b.call(arguments, 1),
        loc: this.sourceNode[0].loc
      });
    },
    addDepth: function(v) {
      v && (this.useDepths = !0);
    },
    classifySexpr: function(v) {
      var h = u.default.helpers.simpleId(v.path), x = h && !!this.blockParamIndex(v.path.parts[0]), C = !x && u.default.helpers.helperExpression(v), O = !x && (C || h);
      if (O && !C) {
        var A = v.path.parts[0], M = this.options;
        M.knownHelpers[A] ? C = !0 : M.knownHelpersOnly && (O = !1);
      }
      return C ? "helper" : O ? "ambiguous" : "simple";
    },
    pushParams: function(v) {
      for (var h = 0, x = v.length; h < x; h++)
        this.pushParam(v[h]);
    },
    pushParam: function(v) {
      var h = v.value != null ? v.value : v.original || "";
      if (this.stringParams)
        h.replace && (h = h.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), v.depth && this.addDepth(v.depth), this.opcode("getContext", v.depth || 0), this.opcode("pushStringParam", h, v.type), v.type === "SubExpression" && this.accept(v);
      else {
        if (this.trackIds) {
          var x = void 0;
          if (v.parts && !u.default.helpers.scopedId(v) && !v.depth && (x = this.blockParamIndex(v.parts[0])), x) {
            var C = v.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", x, C);
          } else
            h = v.original || h, h.replace && (h = h.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", v.type, h);
        }
        this.accept(v);
      }
    },
    setupFullMustacheParams: function(v, h, x, C) {
      var O = v.params;
      return this.pushParams(O), this.opcode("pushProgram", h), this.opcode("pushProgram", x), v.hash ? this.accept(v.hash) : this.opcode("emptyHash", C), O;
    },
    blockParamIndex: function(v) {
      for (var h = 0, x = this.options.blockParams.length; h < x; h++) {
        var C = this.options.blockParams[h], O = C && s.indexOf(C, v);
        if (C && O >= 0)
          return [h, O];
      }
    }
  };
  function d(m, v, h) {
    if (m == null || typeof m != "string" && m.type !== "Program")
      throw new l.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + m);
    v = v || {}, "data" in v || (v.data = !0), v.compat && (v.useDepths = !0);
    var x = h.parse(m, v), C = new h.Compiler().compile(x, v);
    return new h.JavaScriptCompiler().compile(C, v);
  }
  function p(m, v, h) {
    if (v === void 0 && (v = {}), m == null || typeof m != "string" && m.type !== "Program")
      throw new l.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + m);
    v = s.extend({}, v), "data" in v || (v.data = !0), v.compat && (v.useDepths = !0);
    var x = void 0;
    function C() {
      var A = h.parse(m, v), M = new h.Compiler().compile(A, v), E = new h.JavaScriptCompiler().compile(M, v, void 0, !0);
      return h.template(E);
    }
    function O(A, M) {
      return x || (x = C()), x.call(this, A, M);
    }
    return O._setup = function(A) {
      return x || (x = C()), x._setup(A);
    }, O._child = function(A, M, E, w) {
      return x || (x = C()), x._child(A, M, E, w);
    }, O;
  }
  function y(m, v) {
    if (m === v)
      return !0;
    if (s.isArray(m) && s.isArray(v) && m.length === v.length) {
      for (var h = 0; h < m.length; h++)
        if (!y(m[h], v[h]))
          return !1;
      return !0;
    }
  }
  function S(m) {
    if (!m.path.parts) {
      var v = m.path;
      m.path = {
        type: "PathExpression",
        data: !1,
        depth: 0,
        parts: [v.original + ""],
        original: v.original + "",
        loc: v.loc
      };
    }
  }
  return ui;
}
var Ao = { exports: {} }, To = { exports: {} }, _l = {}, Af = {}, wo = {}, No = {}, pv;
function O_() {
  if (pv) return No;
  pv = 1;
  var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return No.encode = function(a) {
    if (0 <= a && a < r.length)
      return r[a];
    throw new TypeError("Must be between 0 and 63: " + a);
  }, No.decode = function(a) {
    var l = 65, s = 90, c = 97, u = 122, b = 48, g = 57, d = 43, p = 47, y = 26, S = 52;
    return l <= a && a <= s ? a - l : c <= a && a <= u ? a - c + y : b <= a && a <= g ? a - b + S : a == d ? 62 : a == p ? 63 : -1;
  }, No;
}
var mv;
function _1() {
  if (mv) return wo;
  mv = 1;
  var r = O_(), a = 5, l = 1 << a, s = l - 1, c = l;
  function u(g) {
    return g < 0 ? (-g << 1) + 1 : (g << 1) + 0;
  }
  function b(g) {
    var d = (g & 1) === 1, p = g >> 1;
    return d ? -p : p;
  }
  return wo.encode = function(d) {
    var p = "", y, S = u(d);
    do
      y = S & s, S >>>= a, S > 0 && (y |= c), p += r.encode(y);
    while (S > 0);
    return p;
  }, wo.decode = function(d, p, y) {
    var S = d.length, m = 0, v = 0, h, x;
    do {
      if (p >= S)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (x = r.decode(d.charCodeAt(p++)), x === -1)
        throw new Error("Invalid base64 digit: " + d.charAt(p - 1));
      h = !!(x & c), x &= s, m = m + (x << v), v += a;
    } while (h);
    y.value = b(m), y.rest = p;
  }, wo;
}
var Tf = {}, gv;
function zl() {
  return gv || (gv = 1, (function(r) {
    function a(E, w, R) {
      if (w in E)
        return E[w];
      if (arguments.length === 3)
        return R;
      throw new Error('"' + w + '" is a required argument.');
    }
    r.getArg = a;
    var l = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, s = /^data:.+\,.+$/;
    function c(E) {
      var w = E.match(l);
      return w ? {
        scheme: w[1],
        auth: w[2],
        host: w[3],
        port: w[4],
        path: w[5]
      } : null;
    }
    r.urlParse = c;
    function u(E) {
      var w = "";
      return E.scheme && (w += E.scheme + ":"), w += "//", E.auth && (w += E.auth + "@"), E.host && (w += E.host), E.port && (w += ":" + E.port), E.path && (w += E.path), w;
    }
    r.urlGenerate = u;
    function b(E) {
      var w = E, R = c(E);
      if (R) {
        if (!R.path)
          return E;
        w = R.path;
      }
      for (var L = r.isAbsolute(w), I = w.split(/\/+/), $, q = 0, F = I.length - 1; F >= 0; F--)
        $ = I[F], $ === "." ? I.splice(F, 1) : $ === ".." ? q++ : q > 0 && ($ === "" ? (I.splice(F + 1, q), q = 0) : (I.splice(F, 2), q--));
      return w = I.join("/"), w === "" && (w = L ? "/" : "."), R ? (R.path = w, u(R)) : w;
    }
    r.normalize = b;
    function g(E, w) {
      E === "" && (E = "."), w === "" && (w = ".");
      var R = c(w), L = c(E);
      if (L && (E = L.path || "/"), R && !R.scheme)
        return L && (R.scheme = L.scheme), u(R);
      if (R || w.match(s))
        return w;
      if (L && !L.host && !L.path)
        return L.host = w, u(L);
      var I = w.charAt(0) === "/" ? w : b(E.replace(/\/+$/, "") + "/" + w);
      return L ? (L.path = I, u(L)) : I;
    }
    r.join = g, r.isAbsolute = function(E) {
      return E.charAt(0) === "/" || l.test(E);
    };
    function d(E, w) {
      E === "" && (E = "."), E = E.replace(/\/$/, "");
      for (var R = 0; w.indexOf(E + "/") !== 0; ) {
        var L = E.lastIndexOf("/");
        if (L < 0 || (E = E.slice(0, L), E.match(/^([^\/]+:\/)?\/*$/)))
          return w;
        ++R;
      }
      return Array(R + 1).join("../") + w.substr(E.length + 1);
    }
    r.relative = d;
    var p = (function() {
      var E = /* @__PURE__ */ Object.create(null);
      return !("__proto__" in E);
    })();
    function y(E) {
      return E;
    }
    function S(E) {
      return v(E) ? "$" + E : E;
    }
    r.toSetString = p ? y : S;
    function m(E) {
      return v(E) ? E.slice(1) : E;
    }
    r.fromSetString = p ? y : m;
    function v(E) {
      if (!E)
        return !1;
      var w = E.length;
      if (w < 9 || E.charCodeAt(w - 1) !== 95 || E.charCodeAt(w - 2) !== 95 || E.charCodeAt(w - 3) !== 111 || E.charCodeAt(w - 4) !== 116 || E.charCodeAt(w - 5) !== 111 || E.charCodeAt(w - 6) !== 114 || E.charCodeAt(w - 7) !== 112 || E.charCodeAt(w - 8) !== 95 || E.charCodeAt(w - 9) !== 95)
        return !1;
      for (var R = w - 10; R >= 0; R--)
        if (E.charCodeAt(R) !== 36)
          return !1;
      return !0;
    }
    function h(E, w, R) {
      var L = C(E.source, w.source);
      return L !== 0 || (L = E.originalLine - w.originalLine, L !== 0) || (L = E.originalColumn - w.originalColumn, L !== 0 || R) || (L = E.generatedColumn - w.generatedColumn, L !== 0) || (L = E.generatedLine - w.generatedLine, L !== 0) ? L : C(E.name, w.name);
    }
    r.compareByOriginalPositions = h;
    function x(E, w, R) {
      var L = E.generatedLine - w.generatedLine;
      return L !== 0 || (L = E.generatedColumn - w.generatedColumn, L !== 0 || R) || (L = C(E.source, w.source), L !== 0) || (L = E.originalLine - w.originalLine, L !== 0) || (L = E.originalColumn - w.originalColumn, L !== 0) ? L : C(E.name, w.name);
    }
    r.compareByGeneratedPositionsDeflated = x;
    function C(E, w) {
      return E === w ? 0 : E === null ? 1 : w === null ? -1 : E > w ? 1 : -1;
    }
    function O(E, w) {
      var R = E.generatedLine - w.generatedLine;
      return R !== 0 || (R = E.generatedColumn - w.generatedColumn, R !== 0) || (R = C(E.source, w.source), R !== 0) || (R = E.originalLine - w.originalLine, R !== 0) || (R = E.originalColumn - w.originalColumn, R !== 0) ? R : C(E.name, w.name);
    }
    r.compareByGeneratedPositionsInflated = O;
    function A(E) {
      return JSON.parse(E.replace(/^\)]}'[^\n]*\n/, ""));
    }
    r.parseSourceMapInput = A;
    function M(E, w, R) {
      if (w = w || "", E && (E[E.length - 1] !== "/" && w[0] !== "/" && (E += "/"), w = E + w), R) {
        var L = c(R);
        if (!L)
          throw new Error("sourceMapURL could not be parsed");
        if (L.path) {
          var I = L.path.lastIndexOf("/");
          I >= 0 && (L.path = L.path.substring(0, I + 1));
        }
        w = g(u(L), w);
      }
      return b(w);
    }
    r.computeSourceURL = M;
  })(Tf)), Tf;
}
var wf = {}, vv;
function x1() {
  if (vv) return wf;
  vv = 1;
  var r = zl(), a = Object.prototype.hasOwnProperty, l = typeof Map < "u";
  function s() {
    this._array = [], this._set = l ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return s.fromArray = function(u, b) {
    for (var g = new s(), d = 0, p = u.length; d < p; d++)
      g.add(u[d], b);
    return g;
  }, s.prototype.size = function() {
    return l ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, s.prototype.add = function(u, b) {
    var g = l ? u : r.toSetString(u), d = l ? this.has(u) : a.call(this._set, g), p = this._array.length;
    (!d || b) && this._array.push(u), d || (l ? this._set.set(u, p) : this._set[g] = p);
  }, s.prototype.has = function(u) {
    if (l)
      return this._set.has(u);
    var b = r.toSetString(u);
    return a.call(this._set, b);
  }, s.prototype.indexOf = function(u) {
    if (l) {
      var b = this._set.get(u);
      if (b >= 0)
        return b;
    } else {
      var g = r.toSetString(u);
      if (a.call(this._set, g))
        return this._set[g];
    }
    throw new Error('"' + u + '" is not in the set.');
  }, s.prototype.at = function(u) {
    if (u >= 0 && u < this._array.length)
      return this._array[u];
    throw new Error("No element indexed by " + u);
  }, s.prototype.toArray = function() {
    return this._array.slice();
  }, wf.ArraySet = s, wf;
}
var Nf = {}, yv;
function D_() {
  if (yv) return Nf;
  yv = 1;
  var r = zl();
  function a(s, c) {
    var u = s.generatedLine, b = c.generatedLine, g = s.generatedColumn, d = c.generatedColumn;
    return b > u || b == u && d >= g || r.compareByGeneratedPositionsInflated(s, c) <= 0;
  }
  function l() {
    this._array = [], this._sorted = !0, this._last = { generatedLine: -1, generatedColumn: 0 };
  }
  return l.prototype.unsortedForEach = function(c, u) {
    this._array.forEach(c, u);
  }, l.prototype.add = function(c) {
    a(this._last, c) ? (this._last = c, this._array.push(c)) : (this._sorted = !1, this._array.push(c));
  }, l.prototype.toArray = function() {
    return this._sorted || (this._array.sort(r.compareByGeneratedPositionsInflated), this._sorted = !0), this._array;
  }, Nf.MappingList = l, Nf;
}
var bv;
function E1() {
  if (bv) return Af;
  bv = 1;
  var r = _1(), a = zl(), l = x1().ArraySet, s = D_().MappingList;
  function c(u) {
    u || (u = {}), this._file = a.getArg(u, "file", null), this._sourceRoot = a.getArg(u, "sourceRoot", null), this._skipValidation = a.getArg(u, "skipValidation", !1), this._sources = new l(), this._names = new l(), this._mappings = new s(), this._sourcesContents = null;
  }
  return c.prototype._version = 3, c.fromSourceMap = function(b) {
    var g = b.sourceRoot, d = new c({
      file: b.file,
      sourceRoot: g
    });
    return b.eachMapping(function(p) {
      var y = {
        generated: {
          line: p.generatedLine,
          column: p.generatedColumn
        }
      };
      p.source != null && (y.source = p.source, g != null && (y.source = a.relative(g, y.source)), y.original = {
        line: p.originalLine,
        column: p.originalColumn
      }, p.name != null && (y.name = p.name)), d.addMapping(y);
    }), b.sources.forEach(function(p) {
      var y = p;
      g !== null && (y = a.relative(g, p)), d._sources.has(y) || d._sources.add(y);
      var S = b.sourceContentFor(p);
      S != null && d.setSourceContent(p, S);
    }), d;
  }, c.prototype.addMapping = function(b) {
    var g = a.getArg(b, "generated"), d = a.getArg(b, "original", null), p = a.getArg(b, "source", null), y = a.getArg(b, "name", null);
    this._skipValidation || this._validateMapping(g, d, p, y), p != null && (p = String(p), this._sources.has(p) || this._sources.add(p)), y != null && (y = String(y), this._names.has(y) || this._names.add(y)), this._mappings.add({
      generatedLine: g.line,
      generatedColumn: g.column,
      originalLine: d != null && d.line,
      originalColumn: d != null && d.column,
      source: p,
      name: y
    });
  }, c.prototype.setSourceContent = function(b, g) {
    var d = b;
    this._sourceRoot != null && (d = a.relative(this._sourceRoot, d)), g != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[a.toSetString(d)] = g) : this._sourcesContents && (delete this._sourcesContents[a.toSetString(d)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, c.prototype.applySourceMap = function(b, g, d) {
    var p = g;
    if (g == null) {
      if (b.file == null)
        throw new Error(
          `SourceMapGenerator.prototype.applySourceMap requires either an explicit source file, or the source map's "file" property. Both were omitted.`
        );
      p = b.file;
    }
    var y = this._sourceRoot;
    y != null && (p = a.relative(y, p));
    var S = new l(), m = new l();
    this._mappings.unsortedForEach(function(v) {
      if (v.source === p && v.originalLine != null) {
        var h = b.originalPositionFor({
          line: v.originalLine,
          column: v.originalColumn
        });
        h.source != null && (v.source = h.source, d != null && (v.source = a.join(d, v.source)), y != null && (v.source = a.relative(y, v.source)), v.originalLine = h.line, v.originalColumn = h.column, h.name != null && (v.name = h.name));
      }
      var x = v.source;
      x != null && !S.has(x) && S.add(x);
      var C = v.name;
      C != null && !m.has(C) && m.add(C);
    }, this), this._sources = S, this._names = m, b.sources.forEach(function(v) {
      var h = b.sourceContentFor(v);
      h != null && (d != null && (v = a.join(d, v)), y != null && (v = a.relative(y, v)), this.setSourceContent(v, h));
    }, this);
  }, c.prototype._validateMapping = function(b, g, d, p) {
    if (g && typeof g.line != "number" && typeof g.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(b && "line" in b && "column" in b && b.line > 0 && b.column >= 0 && !g && !d && !p)) {
      if (b && "line" in b && "column" in b && g && "line" in g && "column" in g && b.line > 0 && b.column >= 0 && g.line > 0 && g.column >= 0 && d)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: b,
        source: d,
        original: g,
        name: p
      }));
    }
  }, c.prototype._serializeMappings = function() {
    for (var b = 0, g = 1, d = 0, p = 0, y = 0, S = 0, m = "", v, h, x, C, O = this._mappings.toArray(), A = 0, M = O.length; A < M; A++) {
      if (h = O[A], v = "", h.generatedLine !== g)
        for (b = 0; h.generatedLine !== g; )
          v += ";", g++;
      else if (A > 0) {
        if (!a.compareByGeneratedPositionsInflated(h, O[A - 1]))
          continue;
        v += ",";
      }
      v += r.encode(h.generatedColumn - b), b = h.generatedColumn, h.source != null && (C = this._sources.indexOf(h.source), v += r.encode(C - S), S = C, v += r.encode(h.originalLine - 1 - p), p = h.originalLine - 1, v += r.encode(h.originalColumn - d), d = h.originalColumn, h.name != null && (x = this._names.indexOf(h.name), v += r.encode(x - y), y = x)), m += v;
    }
    return m;
  }, c.prototype._generateSourcesContent = function(b, g) {
    return b.map(function(d) {
      if (!this._sourcesContents)
        return null;
      g != null && (d = a.relative(g, d));
      var p = a.toSetString(d);
      return Object.prototype.hasOwnProperty.call(this._sourcesContents, p) ? this._sourcesContents[p] : null;
    }, this);
  }, c.prototype.toJSON = function() {
    var b = {
      version: this._version,
      sources: this._sources.toArray(),
      names: this._names.toArray(),
      mappings: this._serializeMappings()
    };
    return this._file != null && (b.file = this._file), this._sourceRoot != null && (b.sourceRoot = this._sourceRoot), this._sourcesContents && (b.sourcesContent = this._generateSourcesContent(b.sources, b.sourceRoot)), b;
  }, c.prototype.toString = function() {
    return JSON.stringify(this.toJSON());
  }, Af.SourceMapGenerator = c, Af;
}
var xl = {}, Of = {}, Sv;
function M_() {
  return Sv || (Sv = 1, (function(r) {
    r.GREATEST_LOWER_BOUND = 1, r.LEAST_UPPER_BOUND = 2;
    function a(l, s, c, u, b, g) {
      var d = Math.floor((s - l) / 2) + l, p = b(c, u[d], !0);
      return p === 0 ? d : p > 0 ? s - d > 1 ? a(d, s, c, u, b, g) : g == r.LEAST_UPPER_BOUND ? s < u.length ? s : -1 : d : d - l > 1 ? a(l, d, c, u, b, g) : g == r.LEAST_UPPER_BOUND ? d : l < 0 ? -1 : l;
    }
    r.search = function(s, c, u, b) {
      if (c.length === 0)
        return -1;
      var g = a(
        -1,
        c.length,
        s,
        c,
        u,
        b || r.GREATEST_LOWER_BOUND
      );
      if (g < 0)
        return -1;
      for (; g - 1 >= 0 && u(c[g], c[g - 1], !0) === 0; )
        --g;
      return g;
    };
  })(Of)), Of;
}
var Df = {}, _v;
function R_() {
  if (_v) return Df;
  _v = 1;
  function r(s, c, u) {
    var b = s[c];
    s[c] = s[u], s[u] = b;
  }
  function a(s, c) {
    return Math.round(s + Math.random() * (c - s));
  }
  function l(s, c, u, b) {
    if (u < b) {
      var g = a(u, b), d = u - 1;
      r(s, g, b);
      for (var p = s[b], y = u; y < b; y++)
        c(s[y], p) <= 0 && (d += 1, r(s, d, y));
      r(s, d + 1, y);
      var S = d + 1;
      l(s, c, u, S - 1), l(s, c, S + 1, b);
    }
  }
  return Df.quickSort = function(s, c) {
    l(s, c, 0, s.length - 1);
  }, Df;
}
var xv;
function k_() {
  if (xv) return xl;
  xv = 1;
  var r = zl(), a = M_(), l = x1().ArraySet, s = _1(), c = R_().quickSort;
  function u(p, y) {
    var S = p;
    return typeof p == "string" && (S = r.parseSourceMapInput(p)), S.sections != null ? new d(S, y) : new b(S, y);
  }
  u.fromSourceMap = function(p, y) {
    return b.fromSourceMap(p, y);
  }, u.prototype._version = 3, u.prototype.__generatedMappings = null, Object.defineProperty(u.prototype, "_generatedMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__generatedMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__generatedMappings;
    }
  }), u.prototype.__originalMappings = null, Object.defineProperty(u.prototype, "_originalMappings", {
    configurable: !0,
    enumerable: !0,
    get: function() {
      return this.__originalMappings || this._parseMappings(this._mappings, this.sourceRoot), this.__originalMappings;
    }
  }), u.prototype._charIsMappingSeparator = function(y, S) {
    var m = y.charAt(S);
    return m === ";" || m === ",";
  }, u.prototype._parseMappings = function(y, S) {
    throw new Error("Subclasses must implement _parseMappings");
  }, u.GENERATED_ORDER = 1, u.ORIGINAL_ORDER = 2, u.GREATEST_LOWER_BOUND = 1, u.LEAST_UPPER_BOUND = 2, u.prototype.eachMapping = function(y, S, m) {
    var v = S || null, h = m || u.GENERATED_ORDER, x;
    switch (h) {
      case u.GENERATED_ORDER:
        x = this._generatedMappings;
        break;
      case u.ORIGINAL_ORDER:
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
    }, this).forEach(y, v);
  }, u.prototype.allGeneratedPositionsFor = function(y) {
    var S = r.getArg(y, "line"), m = {
      source: r.getArg(y, "source"),
      originalLine: S,
      originalColumn: r.getArg(y, "column", 0)
    };
    if (m.source = this._findSourceIndex(m.source), m.source < 0)
      return [];
    var v = [], h = this._findMapping(
      m,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      r.compareByOriginalPositions,
      a.LEAST_UPPER_BOUND
    );
    if (h >= 0) {
      var x = this._originalMappings[h];
      if (y.column === void 0)
        for (var C = x.originalLine; x && x.originalLine === C; )
          v.push({
            line: r.getArg(x, "generatedLine", null),
            column: r.getArg(x, "generatedColumn", null),
            lastColumn: r.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++h];
      else
        for (var O = x.originalColumn; x && x.originalLine === S && x.originalColumn == O; )
          v.push({
            line: r.getArg(x, "generatedLine", null),
            column: r.getArg(x, "generatedColumn", null),
            lastColumn: r.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++h];
    }
    return v;
  }, xl.SourceMapConsumer = u;
  function b(p, y) {
    var S = p;
    typeof p == "string" && (S = r.parseSourceMapInput(p));
    var m = r.getArg(S, "version"), v = r.getArg(S, "sources"), h = r.getArg(S, "names", []), x = r.getArg(S, "sourceRoot", null), C = r.getArg(S, "sourcesContent", null), O = r.getArg(S, "mappings"), A = r.getArg(S, "file", null);
    if (m != this._version)
      throw new Error("Unsupported version: " + m);
    x && (x = r.normalize(x)), v = v.map(String).map(r.normalize).map(function(M) {
      return x && r.isAbsolute(x) && r.isAbsolute(M) ? r.relative(x, M) : M;
    }), this._names = l.fromArray(h.map(String), !0), this._sources = l.fromArray(v, !0), this._absoluteSources = this._sources.toArray().map(function(M) {
      return r.computeSourceURL(x, M, y);
    }), this.sourceRoot = x, this.sourcesContent = C, this._mappings = O, this._sourceMapURL = y, this.file = A;
  }
  b.prototype = Object.create(u.prototype), b.prototype.consumer = u, b.prototype._findSourceIndex = function(p) {
    var y = p;
    if (this.sourceRoot != null && (y = r.relative(this.sourceRoot, y)), this._sources.has(y))
      return this._sources.indexOf(y);
    var S;
    for (S = 0; S < this._absoluteSources.length; ++S)
      if (this._absoluteSources[S] == p)
        return S;
    return -1;
  }, b.fromSourceMap = function(y, S) {
    var m = Object.create(b.prototype), v = m._names = l.fromArray(y._names.toArray(), !0), h = m._sources = l.fromArray(y._sources.toArray(), !0);
    m.sourceRoot = y._sourceRoot, m.sourcesContent = y._generateSourcesContent(
      m._sources.toArray(),
      m.sourceRoot
    ), m.file = y._file, m._sourceMapURL = S, m._absoluteSources = m._sources.toArray().map(function(R) {
      return r.computeSourceURL(m.sourceRoot, R, S);
    });
    for (var x = y._mappings.toArray().slice(), C = m.__generatedMappings = [], O = m.__originalMappings = [], A = 0, M = x.length; A < M; A++) {
      var E = x[A], w = new g();
      w.generatedLine = E.generatedLine, w.generatedColumn = E.generatedColumn, E.source && (w.source = h.indexOf(E.source), w.originalLine = E.originalLine, w.originalColumn = E.originalColumn, E.name && (w.name = v.indexOf(E.name)), O.push(w)), C.push(w);
    }
    return c(m.__originalMappings, r.compareByOriginalPositions), m;
  }, b.prototype._version = 3, Object.defineProperty(b.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function g() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  b.prototype._parseMappings = function(y, S) {
    for (var m = 1, v = 0, h = 0, x = 0, C = 0, O = 0, A = y.length, M = 0, E = {}, w = {}, R = [], L = [], I, $, q, F, Y; M < A; )
      if (y.charAt(M) === ";")
        m++, M++, v = 0;
      else if (y.charAt(M) === ",")
        M++;
      else {
        for (I = new g(), I.generatedLine = m, F = M; F < A && !this._charIsMappingSeparator(y, F); F++)
          ;
        if ($ = y.slice(M, F), q = E[$], q)
          M += $.length;
        else {
          for (q = []; M < F; )
            s.decode(y, M, w), Y = w.value, M = w.rest, q.push(Y);
          if (q.length === 2)
            throw new Error("Found a source, but no line and column");
          if (q.length === 3)
            throw new Error("Found a source and line, but no column");
          E[$] = q;
        }
        I.generatedColumn = v + q[0], v = I.generatedColumn, q.length > 1 && (I.source = C + q[1], C += q[1], I.originalLine = h + q[2], h = I.originalLine, I.originalLine += 1, I.originalColumn = x + q[3], x = I.originalColumn, q.length > 4 && (I.name = O + q[4], O += q[4])), L.push(I), typeof I.originalLine == "number" && R.push(I);
      }
    c(L, r.compareByGeneratedPositionsDeflated), this.__generatedMappings = L, c(R, r.compareByOriginalPositions), this.__originalMappings = R;
  }, b.prototype._findMapping = function(y, S, m, v, h, x) {
    if (y[m] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + y[m]);
    if (y[v] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + y[v]);
    return a.search(y, S, h, x);
  }, b.prototype.computeColumnSpans = function() {
    for (var y = 0; y < this._generatedMappings.length; ++y) {
      var S = this._generatedMappings[y];
      if (y + 1 < this._generatedMappings.length) {
        var m = this._generatedMappings[y + 1];
        if (S.generatedLine === m.generatedLine) {
          S.lastGeneratedColumn = m.generatedColumn - 1;
          continue;
        }
      }
      S.lastGeneratedColumn = 1 / 0;
    }
  }, b.prototype.originalPositionFor = function(y) {
    var S = {
      generatedLine: r.getArg(y, "line"),
      generatedColumn: r.getArg(y, "column")
    }, m = this._findMapping(
      S,
      this._generatedMappings,
      "generatedLine",
      "generatedColumn",
      r.compareByGeneratedPositionsDeflated,
      r.getArg(y, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (m >= 0) {
      var v = this._generatedMappings[m];
      if (v.generatedLine === S.generatedLine) {
        var h = r.getArg(v, "source", null);
        h !== null && (h = this._sources.at(h), h = r.computeSourceURL(this.sourceRoot, h, this._sourceMapURL));
        var x = r.getArg(v, "name", null);
        return x !== null && (x = this._names.at(x)), {
          source: h,
          line: r.getArg(v, "originalLine", null),
          column: r.getArg(v, "originalColumn", null),
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
    return this.sourcesContent ? this.sourcesContent.length >= this._sources.size() && !this.sourcesContent.some(function(y) {
      return y == null;
    }) : !1;
  }, b.prototype.sourceContentFor = function(y, S) {
    if (!this.sourcesContent)
      return null;
    var m = this._findSourceIndex(y);
    if (m >= 0)
      return this.sourcesContent[m];
    var v = y;
    this.sourceRoot != null && (v = r.relative(this.sourceRoot, v));
    var h;
    if (this.sourceRoot != null && (h = r.urlParse(this.sourceRoot))) {
      var x = v.replace(/^file:\/\//, "");
      if (h.scheme == "file" && this._sources.has(x))
        return this.sourcesContent[this._sources.indexOf(x)];
      if ((!h.path || h.path == "/") && this._sources.has("/" + v))
        return this.sourcesContent[this._sources.indexOf("/" + v)];
    }
    if (S)
      return null;
    throw new Error('"' + v + '" is not in the SourceMap.');
  }, b.prototype.generatedPositionFor = function(y) {
    var S = r.getArg(y, "source");
    if (S = this._findSourceIndex(S), S < 0)
      return {
        line: null,
        column: null,
        lastColumn: null
      };
    var m = {
      source: S,
      originalLine: r.getArg(y, "line"),
      originalColumn: r.getArg(y, "column")
    }, v = this._findMapping(
      m,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      r.compareByOriginalPositions,
      r.getArg(y, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (v >= 0) {
      var h = this._originalMappings[v];
      if (h.source === m.source)
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
  function d(p, y) {
    var S = p;
    typeof p == "string" && (S = r.parseSourceMapInput(p));
    var m = r.getArg(S, "version"), v = r.getArg(S, "sections");
    if (m != this._version)
      throw new Error("Unsupported version: " + m);
    this._sources = new l(), this._names = new l();
    var h = {
      line: -1,
      column: 0
    };
    this._sections = v.map(function(x) {
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
        consumer: new u(r.getArg(x, "map"), y)
      };
    });
  }
  return d.prototype = Object.create(u.prototype), d.prototype.constructor = u, d.prototype._version = 3, Object.defineProperty(d.prototype, "sources", {
    get: function() {
      for (var p = [], y = 0; y < this._sections.length; y++)
        for (var S = 0; S < this._sections[y].consumer.sources.length; S++)
          p.push(this._sections[y].consumer.sources[S]);
      return p;
    }
  }), d.prototype.originalPositionFor = function(y) {
    var S = {
      generatedLine: r.getArg(y, "line"),
      generatedColumn: r.getArg(y, "column")
    }, m = a.search(
      S,
      this._sections,
      function(h, x) {
        var C = h.generatedLine - x.generatedOffset.generatedLine;
        return C || h.generatedColumn - x.generatedOffset.generatedColumn;
      }
    ), v = this._sections[m];
    return v ? v.consumer.originalPositionFor({
      line: S.generatedLine - (v.generatedOffset.generatedLine - 1),
      column: S.generatedColumn - (v.generatedOffset.generatedLine === S.generatedLine ? v.generatedOffset.generatedColumn - 1 : 0),
      bias: y.bias
    }) : {
      source: null,
      line: null,
      column: null,
      name: null
    };
  }, d.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(y) {
      return y.consumer.hasContentsOfAllSources();
    });
  }, d.prototype.sourceContentFor = function(y, S) {
    for (var m = 0; m < this._sections.length; m++) {
      var v = this._sections[m], h = v.consumer.sourceContentFor(y, !0);
      if (h)
        return h;
    }
    if (S)
      return null;
    throw new Error('"' + y + '" is not in the SourceMap.');
  }, d.prototype.generatedPositionFor = function(y) {
    for (var S = 0; S < this._sections.length; S++) {
      var m = this._sections[S];
      if (m.consumer._findSourceIndex(r.getArg(y, "source")) !== -1) {
        var v = m.consumer.generatedPositionFor(y);
        if (v) {
          var h = {
            line: v.line + (m.generatedOffset.generatedLine - 1),
            column: v.column + (m.generatedOffset.generatedLine === v.line ? m.generatedOffset.generatedColumn - 1 : 0)
          };
          return h;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, d.prototype._parseMappings = function(y, S) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var m = 0; m < this._sections.length; m++)
      for (var v = this._sections[m], h = v.consumer._generatedMappings, x = 0; x < h.length; x++) {
        var C = h[x], O = v.consumer._sources.at(C.source);
        O = r.computeSourceURL(v.consumer.sourceRoot, O, this._sourceMapURL), this._sources.add(O), O = this._sources.indexOf(O);
        var A = null;
        C.name && (A = v.consumer._names.at(C.name), this._names.add(A), A = this._names.indexOf(A));
        var M = {
          source: O,
          generatedLine: C.generatedLine + (v.generatedOffset.generatedLine - 1),
          generatedColumn: C.generatedColumn + (v.generatedOffset.generatedLine === C.generatedLine ? v.generatedOffset.generatedColumn - 1 : 0),
          originalLine: C.originalLine,
          originalColumn: C.originalColumn,
          name: A
        };
        this.__generatedMappings.push(M), typeof M.originalLine == "number" && this.__originalMappings.push(M);
      }
    c(this.__generatedMappings, r.compareByGeneratedPositionsDeflated), c(this.__originalMappings, r.compareByOriginalPositions);
  }, xl.IndexedSourceMapConsumer = d, xl;
}
var Mf = {}, Ev;
function j_() {
  if (Ev) return Mf;
  Ev = 1;
  var r = E1().SourceMapGenerator, a = zl(), l = /(\r?\n)/, s = 10, c = "$$$isSourceNode$$$";
  function u(b, g, d, p, y) {
    this.children = [], this.sourceContents = {}, this.line = b ?? null, this.column = g ?? null, this.source = d ?? null, this.name = y ?? null, this[c] = !0, p != null && this.add(p);
  }
  return u.fromStringWithSourceMap = function(g, d, p) {
    var y = new u(), S = g.split(l), m = 0, v = function() {
      var A = E(), M = E() || "";
      return A + M;
      function E() {
        return m < S.length ? S[m++] : void 0;
      }
    }, h = 1, x = 0, C = null;
    return d.eachMapping(function(A) {
      if (C !== null)
        if (h < A.generatedLine)
          O(C, v()), h++, x = 0;
        else {
          var M = S[m] || "", E = M.substr(0, A.generatedColumn - x);
          S[m] = M.substr(A.generatedColumn - x), x = A.generatedColumn, O(C, E), C = A;
          return;
        }
      for (; h < A.generatedLine; )
        y.add(v()), h++;
      if (x < A.generatedColumn) {
        var M = S[m] || "";
        y.add(M.substr(0, A.generatedColumn)), S[m] = M.substr(A.generatedColumn), x = A.generatedColumn;
      }
      C = A;
    }, this), m < S.length && (C && O(C, v()), y.add(S.splice(m).join(""))), d.sources.forEach(function(A) {
      var M = d.sourceContentFor(A);
      M != null && (p != null && (A = a.join(p, A)), y.setSourceContent(A, M));
    }), y;
    function O(A, M) {
      if (A === null || A.source === void 0)
        y.add(M);
      else {
        var E = p ? a.join(p, A.source) : A.source;
        y.add(new u(
          A.originalLine,
          A.originalColumn,
          E,
          M,
          A.name
        ));
      }
    }
  }, u.prototype.add = function(g) {
    if (Array.isArray(g))
      g.forEach(function(d) {
        this.add(d);
      }, this);
    else if (g[c] || typeof g == "string")
      g && this.children.push(g);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + g
      );
    return this;
  }, u.prototype.prepend = function(g) {
    if (Array.isArray(g))
      for (var d = g.length - 1; d >= 0; d--)
        this.prepend(g[d]);
    else if (g[c] || typeof g == "string")
      this.children.unshift(g);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + g
      );
    return this;
  }, u.prototype.walk = function(g) {
    for (var d, p = 0, y = this.children.length; p < y; p++)
      d = this.children[p], d[c] ? d.walk(g) : d !== "" && g(d, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, u.prototype.join = function(g) {
    var d, p, y = this.children.length;
    if (y > 0) {
      for (d = [], p = 0; p < y - 1; p++)
        d.push(this.children[p]), d.push(g);
      d.push(this.children[p]), this.children = d;
    }
    return this;
  }, u.prototype.replaceRight = function(g, d) {
    var p = this.children[this.children.length - 1];
    return p[c] ? p.replaceRight(g, d) : typeof p == "string" ? this.children[this.children.length - 1] = p.replace(g, d) : this.children.push("".replace(g, d)), this;
  }, u.prototype.setSourceContent = function(g, d) {
    this.sourceContents[a.toSetString(g)] = d;
  }, u.prototype.walkSourceContents = function(g) {
    for (var d = 0, p = this.children.length; d < p; d++)
      this.children[d][c] && this.children[d].walkSourceContents(g);
    for (var y = Object.keys(this.sourceContents), d = 0, p = y.length; d < p; d++)
      g(a.fromSetString(y[d]), this.sourceContents[y[d]]);
  }, u.prototype.toString = function() {
    var g = "";
    return this.walk(function(d) {
      g += d;
    }), g;
  }, u.prototype.toStringWithSourceMap = function(g) {
    var d = {
      code: "",
      line: 1,
      column: 0
    }, p = new r(g), y = !1, S = null, m = null, v = null, h = null;
    return this.walk(function(x, C) {
      d.code += x, C.source !== null && C.line !== null && C.column !== null ? ((S !== C.source || m !== C.line || v !== C.column || h !== C.name) && p.addMapping({
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
      }), S = C.source, m = C.line, v = C.column, h = C.name, y = !0) : y && (p.addMapping({
        generated: {
          line: d.line,
          column: d.column
        }
      }), S = null, y = !1);
      for (var O = 0, A = x.length; O < A; O++)
        x.charCodeAt(O) === s ? (d.line++, d.column = 0, O + 1 === A ? (S = null, y = !1) : y && p.addMapping({
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
  }, Mf.SourceNode = u, Mf;
}
var Cv;
function L_() {
  return Cv || (Cv = 1, _l.SourceMapGenerator = E1().SourceMapGenerator, _l.SourceMapConsumer = k_().SourceMapConsumer, _l.SourceNode = j_().SourceNode), _l;
}
var Av;
function B_() {
  return Av || (Av = 1, (function(r, a) {
    a.__esModule = !0;
    var l = It(), s = void 0;
    try {
      var c = L_();
      s = c.SourceNode;
    } catch {
    }
    s || (s = function(g, d, p, y) {
      this.src = "", y && this.add(y);
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
    function u(g, d, p) {
      if (l.isArray(g)) {
        for (var y = [], S = 0, m = g.length; S < m; S++)
          y.push(d.wrap(g[S], p));
        return y;
      } else if (typeof g == "boolean" || typeof g == "number")
        return g + "";
      return g;
    }
    function b(g) {
      this.srcFile = g, this.source = [];
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
        for (var p = 0, y = this.source.length; p < y; p++)
          d(this.source[p]);
      },
      empty: function() {
        var d = this.currentLocation || { start: {} };
        return new s(d.start.line, d.start.column, this.srcFile);
      },
      wrap: function(d) {
        var p = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return d instanceof s ? d : (d = u(d, this, p), new s(p.start.line, p.start.column, this.srcFile, d));
      },
      functionCall: function(d, p, y) {
        return y = this.generateList(y), this.wrap([d, p ? "." + p + "(" : "(", y, ")"]);
      },
      quotedString: function(d) {
        return '"' + (d + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(d) {
        var p = this, y = [];
        Object.keys(d).forEach(function(m) {
          var v = u(d[m], p);
          v !== "undefined" && y.push([p.quotedString(m), ":", v]);
        });
        var S = this.generateList(y);
        return S.prepend("{"), S.add("}"), S;
      },
      generateList: function(d) {
        for (var p = this.empty(), y = 0, S = d.length; y < S; y++)
          y && p.add(","), p.add(u(d[y], this));
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
function z_() {
  return Tv || (Tv = 1, (function(r, a) {
    a.__esModule = !0;
    function l(m) {
      return m && m.__esModule ? m : { default: m };
    }
    var s = dh(), c = En(), u = l(c), b = It(), g = B_(), d = l(g);
    function p(m) {
      this.value = m;
    }
    function y() {
    }
    y.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(v, h) {
        return this.internalNameLookup(v, h);
      },
      depthedLookup: function(v) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(v), ")"];
      },
      compilerInfo: function() {
        var v = s.COMPILER_REVISION, h = s.REVISION_CHANGES[v];
        return [v, h];
      },
      appendToBuffer: function(v, h, x) {
        return b.isArray(v) || (v = [v]), v = this.source.wrap(v, h), this.environment.isSimple ? ["return ", v, ";"] : x ? ["buffer += ", v, ";"] : (v.appendToBuffer = !0, v);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(v, h) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", v, ",", JSON.stringify(h), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(v, h, x, C) {
        this.environment = v, this.options = h, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !C, this.name = this.environment.name, this.isChild = !!x, this.context = x || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(v, h), this.useDepths = this.useDepths || v.useDepths || v.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || v.useBlockParams;
        var O = v.opcodes, A = void 0, M = void 0, E = void 0, w = void 0;
        for (E = 0, w = O.length; E < w; E++)
          A = O[E], this.source.currentLocation = A.loc, M = M || A.loc, this[A.opcode].apply(this, A.args);
        if (this.source.currentLocation = M, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new u.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), C ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var R = this.createFunctionContext(C);
        if (this.isChild)
          return R;
        var L = {
          compiler: this.compilerInfo(),
          main: R
        };
        this.decorators && (L.main_d = this.decorators, L.useDecorators = !0);
        var I = this.context, $ = I.programs, q = I.decorators;
        for (E = 0, w = $.length; E < w; E++)
          $[E] && (L[E] = $[E], q[E] && (L[E + "_d"] = q[E], L.useDecorators = !0));
        return this.environment.usePartial && (L.usePartial = !0), this.options.data && (L.useData = !0), this.useDepths && (L.useDepths = !0), this.useBlockParams && (L.useBlockParams = !0), this.options.compat && (L.compat = !0), C ? L.compilerOptions = this.options : (L.compiler = JSON.stringify(L.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, L = this.objectLiteral(L), h.srcName ? (L = L.toStringWithSourceMap({ file: h.destName }), L.map = L.map && L.map.toString()) : L = L.toString()), L;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new d.default(this.options.srcName), this.decorators = new d.default(this.options.srcName);
      },
      createFunctionContext: function(v) {
        var h = this, x = "", C = this.stackVars.concat(this.registers.list);
        C.length > 0 && (x += ", " + C.join(", "));
        var O = 0;
        Object.keys(this.aliases).forEach(function(E) {
          var w = h.aliases[E];
          w.children && w.referenceCount > 1 && (x += ", alias" + ++O + "=" + E, w.children[0] = "alias" + O);
        }), this.lookupPropertyFunctionIsUsed && (x += ", " + this.lookupPropertyFunctionVarDeclaration());
        var A = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && A.push("blockParams"), this.useDepths && A.push("depths");
        var M = this.mergeSource(x);
        return v ? (A.push(M), Function.apply(this, A)) : this.source.wrap(["function(", A.join(","), `) {
  `, M, "}"]);
      },
      mergeSource: function(v) {
        var h = this.environment.isSimple, x = !this.forceBuffer, C = void 0, O = void 0, A = void 0, M = void 0;
        return this.source.each(function(E) {
          E.appendToBuffer ? (A ? E.prepend("  + ") : A = E, M = E) : (A && (O ? A.prepend("buffer += ") : C = !0, M.add(";"), A = M = void 0), O = !0, h || (x = !1));
        }), x ? A ? (A.prepend("return "), M.add(";")) : O || this.source.push('return "";') : (v += ", buffer = " + (C ? "" : this.initializeBuffer()), A ? (A.prepend("return buffer + "), M.add(";")) : this.source.push("return buffer;")), v && this.source.prepend("var " + v.substring(2) + (C ? "" : `;
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
      blockValue: function(v) {
        var h = this.aliasable("container.hooks.blockHelperMissing"), x = [this.contextName(0)];
        this.setupHelperArgs(v, 0, x);
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
        var v = this.aliasable("container.hooks.blockHelperMissing"), h = [this.contextName(0)];
        this.setupHelperArgs("", 0, h, !0), this.flushInline();
        var x = this.topStack();
        h.splice(1, 0, x), this.pushSource(["if (!", this.lastHelper, ") { ", x, " = ", this.source.functionCall(v, "call", h), "}"]);
      },
      // [appendContent]
      //
      // On stack, before: ...
      // On stack, after: ...
      //
      // Appends the string value of `content` to the current buffer
      appendContent: function(v) {
        this.pendingContent ? v = this.pendingContent + v : this.pendingLocation = this.source.currentLocation, this.pendingContent = v;
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
          var v = this.popStack();
          this.pushSource(["if (", v, " != null) { ", this.appendToBuffer(v, void 0, !0), " }"]), this.environment.isSimple && this.pushSource(["else { ", this.appendToBuffer("''", void 0, !0), " }"]);
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
      getContext: function(v) {
        this.lastContext = v;
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
      lookupOnContext: function(v, h, x, C) {
        var O = 0;
        !C && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(v[O++])) : this.pushContext(), this.resolvePath("context", v, O, h, x);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(v, h) {
        this.useBlockParams = !0, this.push(["blockParams[", v[0], "][", v[1], "]"]), this.resolvePath("context", h, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(v, h, x) {
        v ? this.pushStackLiteral("container.data(data, " + v + ")") : this.pushStackLiteral("data"), this.resolvePath("data", h, 0, !0, x);
      },
      resolvePath: function(v, h, x, C, O) {
        var A = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(S(this.options.strict && O, this, h, x, v));
          return;
        }
        for (var M = h.length; x < M; x++)
          this.replaceStack(function(E) {
            var w = A.nameLookup(E, h[x], v);
            return C ? [" && ", w] : [" != null ? ", w, " : ", E];
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
      pushStringParam: function(v, h) {
        this.pushContext(), this.pushString(h), h !== "SubExpression" && (typeof v == "string" ? this.pushString(v) : this.pushStackLiteral(v));
      },
      emptyHash: function(v) {
        this.trackIds && this.push("{}"), this.stringParams && (this.push("{}"), this.push("{}")), this.pushStackLiteral(v ? "undefined" : "{}");
      },
      pushHash: function() {
        this.hash && this.hashes.push(this.hash), this.hash = { values: {}, types: [], contexts: [], ids: [] };
      },
      popHash: function() {
        var v = this.hash;
        this.hash = this.hashes.pop(), this.trackIds && this.push(this.objectLiteral(v.ids)), this.stringParams && (this.push(this.objectLiteral(v.contexts)), this.push(this.objectLiteral(v.types))), this.push(this.objectLiteral(v.values));
      },
      // [pushString]
      //
      // On stack, before: ...
      // On stack, after: quotedString(string), ...
      //
      // Push a quoted version of `string` onto the stack
      pushString: function(v) {
        this.pushStackLiteral(this.quotedString(v));
      },
      // [pushLiteral]
      //
      // On stack, before: ...
      // On stack, after: value, ...
      //
      // Pushes a value onto the stack. This operation prevents
      // the compiler from creating a temporary variable to hold
      // it.
      pushLiteral: function(v) {
        this.pushStackLiteral(v);
      },
      // [pushProgram]
      //
      // On stack, before: ...
      // On stack, after: program(guid), ...
      //
      // Push a program expression onto the stack. This takes
      // a compile-time guid and converts it into a runtime-accessible
      // expression.
      pushProgram: function(v) {
        v != null ? this.pushStackLiteral(this.programExpression(v)) : this.pushStackLiteral(null);
      },
      // [registerDecorator]
      //
      // On stack, before: hash, program, params..., ...
      // On stack, after: ...
      //
      // Pops off the decorator's parameters, invokes the decorator,
      // and inserts the decorator into the decorators list.
      registerDecorator: function(v, h) {
        var x = this.nameLookup("decorators", h, "decorator"), C = this.setupHelperArgs(h, v);
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
      invokeHelper: function(v, h, x) {
        var C = this.popStack(), O = this.setupHelper(v, h), A = [];
        x && A.push(O.name), A.push(C), this.options.strict || A.push(this.aliasable("container.hooks.helperMissing"));
        var M = ["(", this.itemsSeparatedBy(A, "||"), ")"], E = this.source.functionCall(M, "call", O.callParams);
        this.push(E);
      },
      itemsSeparatedBy: function(v, h) {
        var x = [];
        x.push(v[0]);
        for (var C = 1; C < v.length; C++)
          x.push(h, v[C]);
        return x;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(v, h) {
        var x = this.setupHelper(v, h);
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
      invokeAmbiguous: function(v, h) {
        this.useRegister("helper");
        var x = this.popStack();
        this.emptyHash();
        var C = this.setupHelper(0, v, h), O = this.lastHelper = this.nameLookup("helpers", v, "helper"), A = ["(", "(helper = ", O, " || ", x, ")"];
        this.options.strict || (A[0] = "(helper = ", A.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", A, C.paramsInit ? ["),(", C.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", C.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(v, h, x) {
        var C = [], O = this.setupParams(h, 1, C);
        v && (h = this.popStack(), delete O.name), x && (O.indent = JSON.stringify(x)), O.helpers = "helpers", O.partials = "partials", O.decorators = "container.decorators", v ? C.unshift(h) : C.unshift(this.nameLookup("partials", h, "partial")), this.options.compat && (O.depths = "depths"), O = this.objectLiteral(O), C.push(O), this.push(this.source.functionCall("container.invokePartial", "", C));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(v) {
        var h = this.popStack(), x = void 0, C = void 0, O = void 0;
        this.trackIds && (O = this.popStack()), this.stringParams && (C = this.popStack(), x = this.popStack());
        var A = this.hash;
        x && (A.contexts[v] = x), C && (A.types[v] = C), O && (A.ids[v] = O), A.values[v] = h;
      },
      pushId: function(v, h, x) {
        v === "BlockParam" ? this.pushStackLiteral("blockParams[" + h[0] + "].path[" + h[1] + "]" + (x ? " + " + JSON.stringify("." + x) : "")) : v === "PathExpression" ? this.pushString(h) : v === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: y,
      compileChildren: function(v, h) {
        for (var x = v.children, C = void 0, O = void 0, A = 0, M = x.length; A < M; A++) {
          C = x[A], O = new this.compiler();
          var E = this.matchExistingProgram(C);
          if (E == null) {
            this.context.programs.push("");
            var w = this.context.programs.length;
            C.index = w, C.name = "program" + w, this.context.programs[w] = O.compile(C, h, this.context, !this.precompile), this.context.decorators[w] = O.decorators, this.context.environments[w] = C, this.useDepths = this.useDepths || O.useDepths, this.useBlockParams = this.useBlockParams || O.useBlockParams, C.useDepths = this.useDepths, C.useBlockParams = this.useBlockParams;
          } else
            C.index = E.index, C.name = "program" + E.index, this.useDepths = this.useDepths || E.useDepths, this.useBlockParams = this.useBlockParams || E.useBlockParams;
        }
      },
      matchExistingProgram: function(v) {
        for (var h = 0, x = this.context.environments.length; h < x; h++) {
          var C = this.context.environments[h];
          if (C && C.equals(v))
            return C;
        }
      },
      programExpression: function(v) {
        var h = this.environment.children[v], x = [h.index, "data", h.blockParams];
        return (this.useBlockParams || this.useDepths) && x.push("blockParams"), this.useDepths && x.push("depths"), "container.program(" + x.join(", ") + ")";
      },
      useRegister: function(v) {
        this.registers[v] || (this.registers[v] = !0, this.registers.list.push(v));
      },
      push: function(v) {
        return v instanceof p || (v = this.source.wrap(v)), this.inlineStack.push(v), v;
      },
      pushStackLiteral: function(v) {
        this.push(new p(v));
      },
      pushSource: function(v) {
        this.pendingContent && (this.source.push(this.appendToBuffer(this.source.quotedString(this.pendingContent), this.pendingLocation)), this.pendingContent = void 0), v && this.source.push(v);
      },
      replaceStack: function(v) {
        var h = ["("], x = void 0, C = void 0, O = void 0;
        if (!this.isInline())
          throw new u.default("replaceStack on non-inline");
        var A = this.popStack(!0);
        if (A instanceof p)
          x = [A.value], h = ["(", x], O = !0;
        else {
          C = !0;
          var M = this.incrStack();
          h = ["((", this.push(M), " = ", A, ")"], x = this.topStack();
        }
        var E = v.call(this, x);
        O || this.popStack(), C && this.stackSlot--, this.push(h.concat(E, ")"));
      },
      incrStack: function() {
        return this.stackSlot++, this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot), this.topStackName();
      },
      topStackName: function() {
        return "stack" + this.stackSlot;
      },
      flushInline: function() {
        var v = this.inlineStack;
        this.inlineStack = [];
        for (var h = 0, x = v.length; h < x; h++) {
          var C = v[h];
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
      popStack: function(v) {
        var h = this.isInline(), x = (h ? this.inlineStack : this.compileStack).pop();
        if (!v && x instanceof p)
          return x.value;
        if (!h) {
          if (!this.stackSlot)
            throw new u.default("Invalid stack pop");
          this.stackSlot--;
        }
        return x;
      },
      topStack: function() {
        var v = this.isInline() ? this.inlineStack : this.compileStack, h = v[v.length - 1];
        return h instanceof p ? h.value : h;
      },
      contextName: function(v) {
        return this.useDepths && v ? "depths[" + v + "]" : "depth" + v;
      },
      quotedString: function(v) {
        return this.source.quotedString(v);
      },
      objectLiteral: function(v) {
        return this.source.objectLiteral(v);
      },
      aliasable: function(v) {
        var h = this.aliases[v];
        return h ? (h.referenceCount++, h) : (h = this.aliases[v] = this.source.wrap(v), h.aliasable = !0, h.referenceCount = 1, h);
      },
      setupHelper: function(v, h, x) {
        var C = [], O = this.setupHelperArgs(h, v, C, x), A = this.nameLookup("helpers", h, "helper"), M = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: C,
          paramsInit: O,
          name: A,
          callParams: [M].concat(C)
        };
      },
      setupParams: function(v, h, x) {
        var C = {}, O = [], A = [], M = [], E = !x, w = void 0;
        E && (x = []), C.name = this.quotedString(v), C.hash = this.popStack(), this.trackIds && (C.hashIds = this.popStack()), this.stringParams && (C.hashTypes = this.popStack(), C.hashContexts = this.popStack());
        var R = this.popStack(), L = this.popStack();
        (L || R) && (C.fn = L || "container.noop", C.inverse = R || "container.noop");
        for (var I = h; I--; )
          w = this.popStack(), x[I] = w, this.trackIds && (M[I] = this.popStack()), this.stringParams && (A[I] = this.popStack(), O[I] = this.popStack());
        return E && (C.args = this.source.generateArray(x)), this.trackIds && (C.ids = this.source.generateArray(M)), this.stringParams && (C.types = this.source.generateArray(A), C.contexts = this.source.generateArray(O)), this.options.data && (C.data = "data"), this.useBlockParams && (C.blockParams = "blockParams"), C;
      },
      setupHelperArgs: function(v, h, x, C) {
        var O = this.setupParams(v, h, x);
        return O.loc = JSON.stringify(this.source.currentLocation), O = this.objectLiteral(O), C ? (this.useRegister("options"), x.push("options"), ["options=", O]) : x ? (x.push(O), "") : O;
      }
    }, (function() {
      for (var m = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), v = y.RESERVED_WORDS = {}, h = 0, x = m.length; h < x; h++)
        v[m[h]] = !0;
    })(), y.isValidJavaScriptVariableName = function(m) {
      return !y.RESERVED_WORDS[m] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(m);
    };
    function S(m, v, h, x, C) {
      var O = v.popStack(), A = h.length;
      for (m && A--; x < A; x++)
        O = v.nameLookup(O, h[x], C);
      return m ? [v.aliasable("container.strict"), "(", O, ", ", v.quotedString(h[x]), ", ", JSON.stringify(v.source.currentLocation), " )"] : O;
    }
    a.default = y, r.exports = a.default;
  })(Ao, Ao.exports)), Ao.exports;
}
var wv;
function U_() {
  return wv || (wv = 1, (function(r, a) {
    a.__esModule = !0;
    function l(A) {
      return A && A.__esModule ? A : { default: A };
    }
    var s = E_(), c = l(s), u = b1(), b = l(u), g = w_(), d = N_(), p = z_(), y = l(p), S = S1(), m = l(S), v = y1(), h = l(v), x = c.default.create;
    function C() {
      var A = x();
      return A.compile = function(M, E) {
        return d.compile(M, E, A);
      }, A.precompile = function(M, E) {
        return d.precompile(M, E, A);
      }, A.AST = b.default, A.Compiler = d.Compiler, A.JavaScriptCompiler = y.default, A.Parser = g.parser, A.parse = g.parse, A.parseWithoutProcessing = g.parseWithoutProcessing, A;
    }
    var O = C();
    O.create = C, h.default(O), O.Visitor = m.default, O.default = O, a.default = O, r.exports = a.default;
  })(ao, ao.exports)), ao.exports;
}
var na = U_();
function gi(r, a) {
  na.helpers[r] || na.registerHelper(r, a);
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
const fi = SillyTavern.getContext(), ta = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], Mn = {
  name: "Name",
  description: "Description",
  personality: "Personality",
  scenario: "Scenario",
  first_mes: "First Message",
  mes_example: "Example Dialogue"
}, H_ = {
  name: 'A short, evocative character name; e.g. "Kaelen, the Whisperwood Scout".',
  description: "A single concise paragraph blending the most critical physical and personality traits into a snapshot.",
  personality: "Direct, declarative statements about motivations, fears, moral alignment, behavioral traits. Avoid contradictions.",
  scenario: "Sets the scene: location, timing, what is happening, and the initial {{char}}/{{user}} relationship.",
  first_mes: "The character's opening line. Open with action, include dialogue that reveals personality, end with a hook that prompts a response. Use {{char}} and {{user}}.",
  mes_example: "A 2-3 turn style guide showing how the character speaks and acts. Use {{user}} and {{char}}. Mix dialogue with *asterisk actions*."
};
async function P_({
  profileId: r,
  userPrompt: a,
  buildPromptOptions: l,
  continueFrom: s,
  session: c,
  allCharacters: u,
  entriesGroupByWorldName: b,
  promptSettings: g,
  formatDescription: d,
  mainContextList: p,
  includeUserMacro: y,
  maxResponseToken: S,
  targetField: m,
  outputFormat: v
}) {
  if (!r)
    throw new Error("No connection profile selected.");
  const h = fi.extensionSettings.connectionManager?.profiles?.find((Y) => Y.id === r);
  if (!h)
    throw new Error(`Connection profile with ID "${r}" not found.`);
  const x = h.api ? fi.CONNECT_API_MAP[h.api].selected : void 0;
  if (!x)
    throw new Error(`Could not determine API for profile "${h.name}".`);
  const C = {};
  C.char = c.fields.name.value ?? "{{char}}", C.user = y && ea ? ea : "{{user}}";
  const O = y ? fi.power_user?.persona_description : void 0;
  C.persona = O && O.trim() ? O : "{{persona}}", C.targetField = m, C.fieldGuidance = H_[m] ?? "No specific guidance for this field. Use the surrounding context.", C.userInstructions = na.compile(a.trim(), { noEscape: !0 })(C), C.fieldSpecificInstructions = na.compile(
    c.draftFields[m]?.prompt ?? c.fields[m]?.prompt,
    { noEscape: !0 }
  )({
    ...C,
    char: m === "mes_example" ? "{{char}}" : C.char,
    user: m === "mes_example" ? "{{user}}" : C.user
  }), C.activeFormatInstructions = na.compile(d.content, { noEscape: !0 })(
    C
  );
  {
    const Y = [];
    c.selectedCharacterIndexes.forEach((ae) => {
      const oe = parseInt(ae), he = u[oe];
      he && Y.push(he);
    }), C.characters = Y;
  }
  {
    const Y = {};
    Object.entries(b).filter(
      ([ae, oe]) => oe.length > 0 && c.selectedWorldNames.includes(ae) && oe.some((he) => !he.disable)
    ).forEach(([ae, oe]) => {
      Y[ae] = oe.filter((he) => !he.disable);
    }), C.lorebooks = Y;
  }
  {
    const Y = {}, ae = {}, oe = {}, he = m.startsWith("alternate_greetings_"), U = nn.getSettings().contextToSend.dontSendOtherGreetings;
    Object.entries(c.fields).forEach(([ie, Ce]) => {
      let j = !1;
      if (U) {
        const Q = ie.startsWith("alternate_greetings_");
        he ? j = Q && ie !== m || ie === "first_mes" : j = Q;
      }
      if (!j) {
        const Q = na.compile(Ce.value, { noEscape: !0 })({
          ...C,
          char: ie === "mes_example" ? "{{char}}" : C.char,
          user: ie === "mes_example" ? "{{user}}" : C.user
        });
        ta.includes(ie) ? Y[Ce.label] = Q : ie.startsWith("alternate_greetings_") && (ae[ie] = Q);
      }
    }), Object.entries(c.draftFields || {}).forEach(([ie, Ce]) => {
      oe[Ce.label] = na.compile(Ce.value, { noEscape: !0 })(C);
    });
    const ee = {};
    Object.keys(Y).length > 0 && (ee.core = Y), Object.keys(ae).length > 0 && (ee.alternate_greetings = ae), Object.keys(oe).length > 0 && (ee.draft = oe), C.fields = ee;
  }
  const A = [], M = [];
  {
    for (const Y of p) {
      if (Y.promptName === "chatHistory") {
        const ee = await Rb(x, l);
        if (ee.warnings && ee.warnings.length > 0)
          for (const ie of ee.warnings)
            Ae("warning", ie);
        A.push(...ee.result), M.push(...ee.result.map((ie) => ({ role: ie.role, content: ie.content })));
        continue;
      }
      const oe = Y.promptName === "stDescription" ? { ...C, char: "{{char}}", user: "{{user}}" } : C, he = g[Y.promptName];
      if (!he)
        continue;
      const U = {
        role: Y.role,
        content: na.compile(he.content, { noEscape: !0 })(oe)
      };
      U.content = U.content.replaceAll("{{user}}", "[[[crec_veryUniqueUserPlaceHolder]]]"), U.content = U.content.replaceAll("{{char}}", "[[[crec_veryUniqueCharPlaceHolder]]]"), U.content = fi.substituteParams(U.content), U.content = U.content.replaceAll("[[[crec_veryUniqueUserPlaceHolder]]]", "{{user}}"), U.content = U.content.replaceAll("[[[crec_veryUniqueCharPlaceHolder]]]", "{{char}}"), U.content && (A.push(U), M.push({ role: U.role, content: U.content }));
    }
    if (s) {
      const Y = Hg(s, v);
      A.push({
        role: "assistant",
        content: Y
      }), M.push({ role: "assistant", content: Y });
    }
  }
  const E = (/* @__PURE__ */ new Date()).toISOString(), w = await fi.ConnectionManagerRequestService.sendRequest(
    r,
    A,
    S
  ), R = (/* @__PURE__ */ new Date()).toISOString(), L = s ? Hg(s, v) + w.content : w.content, I = o_(L, v, {
    onRecovery: (Y) => {
      Ae("warning", `[Character Creator] ${Y}. Open the Debug View for this field to inspect the raw response.`);
    }
  });
  let $;
  if (typeof I == "string")
    $ = I;
  else if (typeof I == "object" && I !== null)
    if ("response" in I && typeof I.response == "string")
      $ = I.response;
    else {
      const Y = Object.values(I)[0];
      $ = Y ? String(Y) : "";
    }
  else
    $ = "";
  const F = nn.getSettings().showDebugView ? {
    targetField: m,
    outputFormat: v,
    continueFrom: s,
    messages: M,
    rawResponse: w.content,
    parsedContent: $,
    startedAt: E,
    finishedAt: R,
    profileId: r
  } : null;
  return { content: $, debug: F };
}
const hr = "SillyTavern-Character-Creator", C1 = "0.4.0", q_ = "F_2.0", I_ = {
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
  lorebookDefinitions: o1,
  xmlFormat: iS,
  jsonFormat: lS,
  noneFormat: sS,
  worldInfoCharDefinition: u1,
  existingFieldDefinitions: jl,
  taskDescription: fh,
  outputFormatInstructions: ch,
  personaDescription: oS
}, A1 = {
  version: C1,
  formatVersion: q_,
  profileId: "",
  maxContextType: "profile",
  maxContextValue: 16384,
  maxResponseToken: 1024,
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
  showDebugView: !1,
  // World Info
  showSaveAsWorldInfoEntry: {
    show: !1
  }
};
function $f(r) {
  const l = r.replace(/[^\w\s]/g, "").split(/\s+/).filter(Boolean);
  let s = !1;
  return l.map((c, u) => {
    const b = c.replace(/^\d+/, "");
    if (b) {
      const g = s ? `${b[0].toUpperCase()}${b.slice(1).toLowerCase()}` : b.toLowerCase();
      return s || (s = !0), g;
    }
    return "";
  }).join("");
}
const nn = new D2(I_.EXTENSION, A1);
async function G_() {
  return new Promise((r, a) => {
    nn.initializeSettings({
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
              }
            };
          }
        },
        {
          from: "F_1.5",
          to: "F_1.6",
          async action(l) {
            return await Ae("info", `[${hr}] Added Alternate Greetings.`), {
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
            return l.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = Zf), l.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = o1), l.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = jl), s;
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
            return l.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = Zf), l.prompts.worldInfoCharDefinition.isDefault && (s.prompts.worldInfoCharDefinition.content = u1), s;
          }
        },
        {
          from: "F_1.10",
          to: "F_2.0",
          action(l) {
            const s = { ...l }, c = s.prompts ?? {};
            return delete s.defaultPromptEngineeringMode, delete c.reviseJsonPrompt, delete c.reviseXmlPrompt, delete c.reviseTaskDescription, s.prompts = c, s.showDebugView = !1, s;
          }
        }
      ]
    }).then((l) => {
      r();
    }).catch((l) => {
      console.error(`[${hr}] Error initializing settings:`, l), Ae("error", `[${hr}] Failed to initialize settings: ${l.message}`), fi.Popup.show.confirm(
        `[${hr}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s && (nn.resetSettings(), Ae("success", `[${hr}] Settings reset. Reloading may be required.`), r());
      });
    });
  });
}
const Re = ({ children: r, className: a, overrideDefaults: l = !1, ...s }) => {
  const c = te.useMemo(() => {
    const u = [];
    return l || u.push("menu_button", "interactable"), u.push(a), u.filter(Boolean).join(" ");
  }, [l, a]);
  return /* @__PURE__ */ N.jsx("button", { className: c, ...s, children: r });
}, V_ = ({ label: r, className: a, overrideDefaults: l = !1, type: s = "text", ...c }) => {
  const u = te.useMemo(() => {
    const b = [];
    return l || (s === "text" || s === "number" || s === "password" || s === "email" || s === "search") && b.push("text_pole"), b.push(a), b.filter(Boolean).join(" ");
  }, [l, a, s]);
  if (s === "checkbox") {
    const b = l ? a : `checkbox_label ${a ?? ""}`.trim();
    return /* @__PURE__ */ N.jsxs("label", { className: b, children: [
      /* @__PURE__ */ N.jsx("input", { type: "checkbox", ...c }),
      r && /* @__PURE__ */ N.jsx("span", { children: r })
    ] });
  }
  return /* @__PURE__ */ N.jsx("input", { type: s, className: u, ...c });
}, Yo = ({ children: r, className: a, overrideDefaults: l = !1, ...s }) => {
  const c = te.useMemo(() => {
    const u = [];
    return l || u.push("text_pole"), u.push(a), u.filter(Boolean).join(" ");
  }, [l, a]);
  return /* @__PURE__ */ N.jsx("select", { className: c, ...s, children: r });
}, T1 = ({ children: r, className: a, overrideDefaults: l = !1, ...s }) => {
  const c = te.useMemo(() => {
    const u = [];
    return l || u.push("text_pole", "textarea_compact"), u.push(a), u.filter(Boolean).join(" ");
  }, [l, a]);
  return /* @__PURE__ */ N.jsx("textarea", { className: c, ...s, children: r });
};
var Y_ = zv(), Rn = /* @__PURE__ */ ((r) => (r[r.TEXT = 1] = "TEXT", r[r.CONFIRM = 2] = "CONFIRM", r[r.INPUT = 3] = "INPUT", r[r.DISPLAY = 4] = "DISPLAY", r))(Rn || {}), Ra = /* @__PURE__ */ ((r) => (r[r.AFFIRMATIVE = 1] = "AFFIRMATIVE", r[r.NEGATIVE = 0] = "NEGATIVE", r[r.CANCELLED = null] = "CANCELLED", r))(Ra || {});
const F_ = SillyTavern.getContext(), eh = ({
  content: r,
  type: a,
  inputValue: l = "",
  options: s = {},
  preventEscape: c = !1,
  onComplete: u
}) => {
  var b;
  const g = te.useRef(null), d = te.useRef(null), [p, y] = te.useState(!1), [S, m] = te.useState(null), v = te.useRef(F_.uuidv4()), h = te.useRef({
    id: v.current,
    type: a,
    dlg: null,
    mainInput: null,
    lastFocus: null,
    value: void 0,
    result: void 0,
    inputResults: void 0
  });
  te.useEffect(() => {
    const A = g.current;
    if (!A) return;
    const M = (E) => {
      E.preventDefault(), c || x(Ra.CANCELLED);
    };
    return A.addEventListener("cancel", M), h.current.dlg = A, h.current.mainInput = d.current, ai.util.popups.push(h.current), A.showModal || (A.classList.add("poly_dialog"), lg.registerDialog(A), new ResizeObserver((E) => {
      for (const w of E)
        lg.reposition(w.target);
    }).observe(A)), A.showModal(), sf(), () => {
      ig(ai.util.popups, h.current), sf(), A.removeEventListener("cancel", M);
    };
  }, []);
  const x = async (A) => {
    var M, E;
    let w = A;
    if (a === Rn.INPUT && (A >= Ra.AFFIRMATIVE ? w = (M = d.current) == null ? void 0 : M.value : A === Ra.NEGATIVE ? w = !1 : A === Ra.CANCELLED ? w = null : w = !1), (E = s.customInputs) != null && E.length) {
      const L = new Map(
        s.customInputs.map((I) => {
          var $;
          const q = ($ = g.current) == null ? void 0 : $.querySelector(`#${I.id}`);
          return [q.id, q.checked];
        })
      );
      h.current.inputResults = L;
    }
    if (h.current.result = A, h.current.value = w, s.onClosing && !await s.onClosing(h.current)) {
      y(!0), h.current.value = void 0, h.current.result = void 0, h.current.inputResults = void 0;
      return;
    }
    y(!1), ai.util.lastResult = {
      value: w,
      result: A,
      inputResults: h.current.inputResults
    };
    const R = g.current;
    R && (R.setAttribute("closing", ""), sf(), d2(R, async () => {
      var L;
      if (R.close(), s.onClose && await s.onClose(h.current), ig(ai.util.popups, h.current), ai.util.popups.length > 0) {
        const I = (L = document.activeElement) == null ? void 0 : L.closest(".popup"), $ = I?.getAttribute("data-id"), q = ai.util.popups.find((F) => F.id === $);
        q && q.lastFocus && q.lastFocus.focus();
      }
      u(w);
    }));
  }, C = (A) => {
    A.target instanceof HTMLElement && A.target !== g.current && (m(A.target), h.current.lastFocus = A.target);
  }, O = async (A) => {
  };
  return Y_.createPortal(
    /* @__PURE__ */ N.jsx(
      "dialog",
      {
        ref: g,
        className: (() => {
          const A = ["popup"];
          return s.wide && A.push("wide_dialogue_popup"), s.wider && A.push("wider_dialogue_popup"), s.large && A.push("large_dialogue_popup"), s.transparent && A.push("transparent_dialogue_popup"), s.allowHorizontalScrolling && A.push("horizontal_scrolling_dialogue_popup"), s.allowVerticalScrolling && A.push("vertical_scrolling_dialogue_popup"), s.animation && A.push(`popup--animation-${s.animation}`), A.join(" ");
        })(),
        "data-id": v.current,
        onKeyDown: O,
        onFocus: C,
        children: /* @__PURE__ */ N.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ N.jsx("div", { className: "popup-content", children: r }),
          a === Rn.INPUT && /* @__PURE__ */ N.jsx(
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
          a !== Rn.DISPLAY && /* @__PURE__ */ N.jsxs("div", { className: "popup-controls", children: [
            (b = s.customButtons) == null ? void 0 : b.map((A, M) => {
              const E = typeof A == "string" ? { text: A, result: M + 2 } : A;
              return /* @__PURE__ */ N.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${E.classes ?? ""}`,
                  "data-result": E.result,
                  onClick: () => {
                    var w;
                    (w = E.action) == null || w.call(E), x(E.result ?? M + 2);
                  },
                  "data-i18n": E.text,
                  children: E.text
                },
                M
              );
            }),
            a !== Rn.DISPLAY && s.okButton !== !1 && /* @__PURE__ */ N.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => x(Ra.AFFIRMATIVE),
                "data-result": "1",
                children: typeof s.okButton == "string" ? s.okButton : "OK"
              }
            ),
            a !== Rn.DISPLAY && s.cancelButton !== !1 && /* @__PURE__ */ N.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => x(Ra.NEGATIVE),
                "data-result": "0",
                children: typeof s.cancelButton == "string" ? s.cancelButton : "Cancel"
              }
            )
          ] }),
          a === Rn.DISPLAY && /* @__PURE__ */ N.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => x(Ra.CANCELLED),
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
}, $n = SillyTavern.getContext(), X_ = ({
  initialSelectedProfileId: r,
  allowedTypes: a = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: l = "Select a Connection Profile",
  onChange: s,
  onCreate: c,
  onUpdate: u,
  onDelete: b
}) => {
  const [g, d] = te.useState(r ?? ""), [p, y] = te.useState(Date.now()), { isEnabled: S, profiles: m, connectApiMap: v } = te.useMemo(() => {
    var C, O;
    return (C = $n.extensionSettings.disabledExtensions) != null && C.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((O = $n.extensionSettings.connectionManager) == null ? void 0 : O.profiles) ?? [],
      connectApiMap: $n.CONNECT_API_MAP
    };
  }, [p]);
  te.useEffect(() => {
    if (!S) return;
    const C = (M) => {
      El(M, a, v) && (y(Date.now()), c?.(M));
    }, O = (M, E) => {
      const w = El(M, a, v), R = El(E, a, v);
      (w || R) && y(Date.now()), u?.(M, E), g === M.id && !R && (d(""), s?.(void 0));
    }, A = (M) => {
      El(M, a, v) && (y(Date.now()), b?.(M), g === M.id && (d(""), s?.(void 0)));
    };
    return $n.eventSource.on("CONNECTION_PROFILE_CREATED", C), $n.eventSource.on("CONNECTION_PROFILE_UPDATED", O), $n.eventSource.on("CONNECTION_PROFILE_DELETED", A), () => {
      $n.eventSource.removeListener("CONNECTION_PROFILE_CREATED", C), $n.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", O), $n.eventSource.removeListener("CONNECTION_PROFILE_DELETED", A);
    };
  }, [S, g, a, v, s, c, u, b]);
  const h = te.useMemo(() => {
    if (!S) return [];
    const C = m.filter((A) => El(A, a, v)), O = {};
    for (const [A, M] of Object.entries(a))
      O[A] = { label: M, profiles: [] };
    for (const A of C) {
      const M = v[A.api];
      O[M.selected] && O[M.selected].profiles.push(A);
    }
    for (const A of Object.values(O))
      A.profiles.sort((M, E) => (M.name ?? "").localeCompare(E.name ?? ""));
    return Object.values(O).filter((A) => A.profiles.length > 0);
  }, [S, m, a, v]), x = te.useCallback(
    (C) => {
      const O = C.target.value;
      d(O);
      const A = m.find((M) => M.id === O);
      s?.(A);
    },
    [m, s]
  );
  return S ? /* @__PURE__ */ N.jsxs(Yo, { value: g, onChange: x, children: [
    /* @__PURE__ */ N.jsx("option", { value: "", children: l }),
    h.map((C) => /* @__PURE__ */ N.jsx("optgroup", { label: C.label, children: C.profiles.map((O) => /* @__PURE__ */ N.jsx("option", { value: O.id, children: O.name }, O.id)) }, C.label))
  ] }) : /* @__PURE__ */ N.jsx(Yo, { disabled: !0, value: "", children: /* @__PURE__ */ N.jsx("option", { children: "Connection Manager disabled" }) });
}, Q_ = zo.memo(
  ({ item: r, showToggleButton: a, showDeleteButton: l, showSelectInput: s, onToggle: c, onDelete: u, onSelectChange: b }) => {
    const {
      id: g,
      label: d,
      enabled: p,
      canDelete: y = !0,
      canToggle: S = !0,
      showSelect: m = !0,
      canSelect: v = !0,
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
    return /* @__PURE__ */ N.jsxs("li", { className: "sortable-list-item", style: C, "data-id": g, children: [
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
      s && m && v && /* @__PURE__ */ N.jsx(
        Yo,
        {
          value: x,
          onChange: (M) => b(g, M.target.value),
          disabled: !p,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: h.length === 0 ? /* @__PURE__ */ N.jsx("option", { disabled: !0, children: "--" }) : h.map((M) => /* @__PURE__ */ N.jsx("option", { value: M.value, children: M.label }, M.value))
        }
      ),
      s && (!m || !v) && /* @__PURE__ */ N.jsx("span", { style: A }),
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
          onClick: () => c(g)
        }
      ),
      a && !S && /* @__PURE__ */ N.jsx("span", { style: A }),
      l && y && /* @__PURE__ */ N.jsx(
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
          onClick: () => u(g)
        }
      ),
      l && !y && /* @__PURE__ */ N.jsx("span", { style: { ...A, marginRight: 0 } })
    ] });
  }
), Z_ = ({
  items: r,
  onItemsChange: a,
  showToggleButton: l = !1,
  showDeleteButton: s = !1,
  showSelectInput: c = !1,
  sortableJsOptions: u = {}
}) => {
  const b = te.useRef(null), g = te.useRef(null);
  te.useEffect(() => (b.current && (g.current = _e.create(b.current, {
    handle: ".drag-handle",
    animation: 150,
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    filter: "select, button, .toggle-button, .delete-button",
    // Prevent drag on controls
    preventOnFilter: !1,
    ...u,
    onEnd: (S) => {
      const { oldIndex: m, newIndex: v } = S;
      if (m === void 0 || v === void 0 || m === v)
        return;
      const h = Array.from(r), [x] = h.splice(m, 1);
      h.splice(v, 0, x), a(h);
    }
  })), () => {
    var S;
    (S = g.current) == null || S.destroy(), g.current = null;
  }), [r, a, u]);
  const d = (S) => {
    a(r.map((m) => m.id === S ? { ...m, enabled: !m.enabled } : m));
  }, p = (S) => {
    a(r.filter((m) => m.id !== S));
  }, y = (S, m) => {
    a(r.map((v) => v.id === S ? { ...v, selectValue: m } : v));
  };
  return /* @__PURE__ */ N.jsx("ul", { ref: b, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: r.map((S) => /* @__PURE__ */ N.jsx(
    Q_,
    {
      item: S,
      showToggleButton: l,
      showDeleteButton: s,
      showSelectInput: c,
      onToggle: d,
      onDelete: p,
      onSelectChange: y
    },
    S.id
  )) });
}, Do = ({
  items: r,
  value: a,
  onChange: l,
  placeholder: s = "Select items...",
  closeOnSelect: c = !1,
  multiple: u = !0,
  disabled: b = !1,
  onBeforeSelection: g,
  enableSearch: d = !1,
  searchPlaceholder: p = "Search...",
  searchNoResultsText: y = "No results found",
  searchFuseOptions: S,
  inputClasses: m,
  containerClasses: v
}) => {
  const [h, x] = te.useState(!1), [C, O] = te.useState(""), A = te.useRef(null);
  te.useEffect(() => {
    const L = (I) => {
      A.current && !A.current.contains(I.target) && x(!1);
    };
    return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
  }, []), te.useEffect(() => {
    h || O("");
  }, [h]);
  const M = te.useMemo(() => {
    if (!d) return null;
    const L = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...S
    };
    return new mi(r, L);
  }, [r, d, S]), E = te.useMemo(() => !d || !C.trim() || !M ? r : M.search(C.trim()).map((L) => L.item), [r, C, d, M]), w = async (L) => {
    let I;
    u ? I = a.includes(L) ? a.filter(($) => $ !== L) : [...a, L] : I = a.includes(L) ? [] : [L], !(g && !await Promise.resolve(g(a, I))) && (l(I), c && x(!1));
  }, R = te.useMemo(() => {
    var L;
    return a.length === 0 ? s : a.length === 1 ? ((L = r.find((I) => I.value === a[0])) == null ? void 0 : L.label) ?? a[0] : `${a.length} items selected`;
  }, [a, r, s]);
  return /* @__PURE__ */ N.jsxs(
    "div",
    {
      ref: A,
      className: `fancy-dropdown-container ${v ?? ""}`,
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
              /* @__PURE__ */ N.jsx("span", { className: "fancy-dropdown-trigger-text", children: R }),
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
                    V_,
                    {
                      type: "text",
                      placeholder: p,
                      value: C,
                      onChange: (L) => O(L.target.value),
                      autoFocus: !0,
                      className: m
                    }
                  )
                }
              ),
              /* @__PURE__ */ N.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: E.length > 0 ? E.map((L) => /* @__PURE__ */ N.jsx(
                K_,
                {
                  item: L,
                  isSelected: a.includes(L.value),
                  onClick: w
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
                  children: y
                }
              ) })
            ]
          }
        )
      ]
    }
  );
}, K_ = zo.memo(({ item: r, isSelected: a, onClick: l }) => {
  const [s, c] = te.useState(!1);
  return /* @__PURE__ */ N.jsxs(
    "li",
    {
      onClick: () => l(r.value),
      onMouseEnter: () => c(!0),
      onMouseLeave: () => c(!1),
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
  onChange: c,
  onItemsChange: u,
  enableCreate: b = !1,
  enableRename: g = !1,
  enableDelete: d = !1,
  onCreate: p,
  onRename: y,
  onDelete: S,
  buttons: m
}) => {
  const v = te.useMemo(() => a.find((A) => A.value === r), [a, r]), h = te.useCallback((A) => A ? l.includes(A) : !1, [l]), x = async () => {
    const A = await Rf.Popup.show.input(
      `Create a new ${s}`,
      `Please enter a name for the new ${s}:`,
      ""
    );
    if (!A || A.trim() === "") return;
    const M = A.trim();
    if (a.some((w) => w.value === M)) {
      await Ae("warning", `A ${s} with this name already exists.`);
      return;
    }
    let E = { value: M, label: M };
    if (p) {
      const w = await Promise.resolve(p(M));
      if (!w.confirmed) return;
      w.value && (typeof w.value == "string" ? E = { value: w.value, label: w.value } : E = w.value);
    }
    u([...a, E]), c(E.value, r);
  }, C = async () => {
    if (!v) {
      await Ae("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (h(v.value)) {
      await Ae("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const A = await Rf.Popup.show.input(
      `Rename ${s}`,
      `Please enter a new name for "${v.label}":`,
      v.label
    );
    if (!A || A.trim() === "" || A.trim() === v.value) return;
    const M = A.trim();
    if (a.some((R) => R.value === M)) {
      await Ae("warning", `A ${s} with this name already exists.`);
      return;
    }
    let E = { value: M, label: M };
    if (y) {
      const R = await Promise.resolve(y(v.value, M));
      if (!R.confirmed) return;
      R.value && (typeof R.value == "string" ? E = { value: R.value, label: R.value } : E = R.value);
    }
    const w = a.map((R) => R.value === v.value ? E : R);
    u(w), c(E.value, r);
  }, O = async () => {
    var A;
    if (!v) {
      await Ae("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (h(v.value)) {
      await Ae("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await Rf.Popup.show.confirm(
      `Delete ${s}`,
      `Are you sure you want to delete "${v.label}"?`
    ) || S && !await Promise.resolve(S(v.value)))
      return;
    const M = a.findIndex((R) => R.value === v.value), E = a.filter((R) => R.value !== v.value);
    u(E);
    let w;
    if (E.length > 0) {
      const R = Math.min(M, E.length - 1);
      w = (A = E[R]) == null ? void 0 : A.value;
    }
    c(w, r);
  };
  return /* @__PURE__ */ N.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ N.jsx(Yo, { value: r ?? "", onChange: (A) => c(A.target.value, r), children: a.map((A) => /* @__PURE__ */ N.jsx("option", { value: A.value, children: A.label }, A.value)) }),
    b && /* @__PURE__ */ N.jsx(
      Re,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${s}`,
        onClick: x,
        "data-i18n": `[title]Create a new ${s}`
      }
    ),
    g && /* @__PURE__ */ N.jsx(
      Re,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${s}`,
        onClick: C,
        disabled: !v,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    d && /* @__PURE__ */ N.jsx(
      Re,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: O,
        disabled: !v,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    m?.map((A) => /* @__PURE__ */ N.jsx(
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
}, w1 = () => {
  const [, r] = te.useState(0);
  return te.useCallback(() => {
    r((l) => l + 1);
  }, []);
}, kf = SillyTavern.getContext(), J_ = () => {
  const r = w1(), a = nn.getSettings(), [l, s] = te.useState(Oo[0]), c = te.useCallback(
    (E) => {
      const w = nn.getSettings();
      E(w), nn.saveSettings(), r();
    },
    [r]
  ), u = te.useMemo(
    () => Object.keys(a.mainContextTemplatePresets).map((E) => ({ value: E, label: E })),
    [a.mainContextTemplatePresets]
  ), b = te.useMemo(
    () => Object.entries(a.prompts).map(([E, w]) => ({
      value: E,
      label: `${w.label} (${E})`
    })),
    [a.prompts]
  ), g = te.useMemo(() => {
    const E = a.mainContextTemplatePresets[a.mainContextTemplatePreset];
    return E ? E.prompts.map((w) => {
      const R = a.prompts[w.promptName], L = R ? `${R.label} (${w.promptName})` : w.promptName;
      return {
        id: w.promptName,
        label: L,
        enabled: w.enabled,
        selectValue: w.role,
        selectOptions: [
          { value: "user", label: "User" },
          { value: "assistant", label: "Assistant" },
          { value: "system", label: "System" }
        ]
      };
    }) : [];
  }, [a.mainContextTemplatePreset, a.mainContextTemplatePresets, a.prompts]), d = (E) => {
    c((w) => {
      w.mainContextTemplatePreset = E ?? "default";
    });
  }, p = (E) => {
    c((w) => {
      const R = {};
      E.forEach((L) => {
        R[L.value] = w.mainContextTemplatePresets[L.value] ?? structuredClone(
          w.mainContextTemplatePresets[w.mainContextTemplatePreset] ?? w.mainContextTemplatePresets.default
        );
      }), w.mainContextTemplatePresets = R;
    });
  }, y = (E) => {
    c((w) => {
      const R = E.map(($) => ({
        promptName: $.id,
        enabled: $.enabled,
        role: $.selectValue ?? "user"
      })), L = {
        ...w.mainContextTemplatePresets[w.mainContextTemplatePreset],
        prompts: R
      }, I = {
        ...w.mainContextTemplatePresets,
        [w.mainContextTemplatePreset]: L
      };
      w.mainContextTemplatePresets = I;
    });
  }, S = async () => {
    await kf.Popup.show.confirm("Restore default", "Are you sure?") && c((w) => {
      w.mainContextTemplatePresets = {
        ...w.mainContextTemplatePresets,
        default: structuredClone(A1.mainContextTemplatePresets.default)
      }, w.mainContextTemplatePreset === "default" ? r() : w.mainContextTemplatePreset = "default";
    });
  }, m = (E) => {
    c((w) => {
      const R = E.map((q) => q.value);
      Object.keys(w.prompts).filter((q) => !R.includes(q)).forEach((q) => {
        Object.values(w.mainContextTemplatePresets).forEach((F) => {
          F.prompts = F.prompts.filter((Y) => Y.promptName !== q);
        });
      });
      const $ = {};
      E.forEach((q) => {
        $[q.value] = w.prompts[q.value] ?? { content: "", isDefault: !1, label: q.label };
      }), w.prompts = $;
    });
  }, v = (E) => {
    const w = $f(E);
    return w ? a.prompts[w] ? (Ae("error", `Prompt name already exists: ${w}`), { confirmed: !1 }) : (c((R) => {
      R.prompts = {
        ...R.prompts,
        [w]: { content: R.prompts[l]?.content ?? "", isDefault: !1, label: E }
      };
      const L = Object.fromEntries(
        Object.entries(R.mainContextTemplatePresets).map(([I, $]) => [
          I,
          {
            ...$,
            prompts: [...$.prompts, { enabled: !0, promptName: w, role: "user" }]
          }
        ])
      );
      R.mainContextTemplatePresets = L;
    }), s(w), { confirmed: !0, value: w }) : (Ae("error", `Invalid prompt name: ${E}`), { confirmed: !1 });
  }, h = (E, w) => {
    const R = $f(w);
    return R ? a.prompts[R] ? (Ae("error", `Prompt name already exists: ${R}`), { confirmed: !1 }) : (c((L) => {
      const { [E]: I, ...$ } = L.prompts;
      L.prompts = {
        ...$,
        [R]: { ...I, label: w }
      };
      const q = Object.fromEntries(
        Object.entries(L.mainContextTemplatePresets).map(([F, Y]) => [
          F,
          {
            ...Y,
            prompts: Y.prompts.map((ae) => ae.promptName === E ? { ...ae, promptName: R } : ae)
          }
        ])
      );
      L.mainContextTemplatePresets = q;
    }), s(R), { confirmed: !0, value: R }) : (Ae("error", `Invalid prompt name: ${w}`), { confirmed: !1 });
  }, x = (E) => {
    const w = E.target.value;
    c((R) => {
      const L = R.prompts[l];
      L && (R.prompts = {
        ...R.prompts,
        [l]: {
          ...L,
          // Copy existing properties
          content: w,
          isDefault: Oo.includes(l) ? rt[l] === w : !1
        }
      });
    });
  }, C = async () => {
    const E = a.prompts[l];
    if (!E) return Ae("warning", "No prompt selected.");
    await kf.Popup.show.confirm("Restore Default", `Restore default for "${E.label}"?`) && c((R) => {
      R.prompts = {
        ...R.prompts,
        [l]: {
          ...R.prompts[l],
          content: rt[l]
        }
      };
    });
  }, O = async () => {
    await kf.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (nn.resetSettings(), r(), Ae("success", "Settings have been reset."));
  }, A = a.prompts[l], M = Oo.includes(l);
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
          items: u,
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
        Z_,
        {
          items: g,
          onItemsChange: y,
          showSelectInput: !0,
          showToggleButton: !0
        }
      ) })
    ] }),
    /* @__PURE__ */ N.jsx("hr", { style: { margin: "10px 0" } }),
    /* @__PURE__ */ N.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ N.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ N.jsx("span", { children: "Prompt Templates" }),
        M && /* @__PURE__ */ N.jsx(
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
          onItemsChange: m,
          onCreate: v,
          onRename: h,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ N.jsx(
        T1,
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
          onChange: (E) => c((w) => {
            w.showSaveAsWorldInfoEntry.show = E.target.checked;
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
          onChange: (E) => c((w) => {
            w.showDebugView = E.target.checked;
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
}, N1 = "charCreator", O1 = "charCreatorResizeSizes", Ul = () => SillyTavern.libs.localforage, W_ = (r) => {
  if (!r)
    return { value: null, recovered: !1 };
  try {
    return { value: JSON.parse(r), recovered: !1 };
  } catch (a) {
    return { value: null, recovered: !0, error: a };
  }
}, D1 = async (r, a, l) => {
  try {
    const s = await a.getItem(r);
    if (s !== null)
      return { value: s, migrated: !1, recovered: !1 };
    const c = W_(l.getItem(r));
    return c.value === null ? (c.recovered && l.removeItem(r), { value: null, migrated: !1, recovered: c.recovered, error: c.error }) : (await a.setItem(r, c.value), l.removeItem(r), { value: c.value, migrated: !0, recovered: c.recovered });
  } catch (s) {
    return { value: null, migrated: !1, recovered: !0, error: s };
  }
}, M1 = async (r, a, l = Ul()) => {
  try {
    return await l.setItem(r, a), { persisted: !0 };
  } catch (s) {
    return { persisted: !1, error: s };
  }
}, $_ = (r = Ul(), a = localStorage) => D1(N1, r, a), ex = (r, a = Ul()) => M1(N1, r, a), Nv = (r = Ul(), a = localStorage) => D1(O1, r, a), tx = (r, a = Ul()) => M1(O1, r, a), Ov = (r) => {
  const a = te.useRef(null), [l, s] = te.useState(null), c = te.useRef(null), u = te.useRef(!0);
  te.useLayoutEffect(() => {
    let g = !1;
    return Nv().then((d) => {
      if (g) return;
      const p = d.value?.[r];
      typeof p == "number" && p > 0 && s(p);
    }).catch(() => {
    }), () => {
      g = !0;
    };
  }, [r]), te.useLayoutEffect(() => {
    if (l === null) return;
    const g = a.current;
    g && (g.style.height = `${l}px`);
  }, [l]);
  const b = te.useCallback(
    (g) => {
      c.current && clearTimeout(c.current), c.current = setTimeout(async () => {
        try {
          const p = { ...(await Nv()).value ?? {}, [r]: g };
          await tx(p);
        } catch {
        }
      }, 400);
    },
    [r]
  );
  return te.useEffect(() => {
    const g = a.current;
    if (!g) return;
    const d = new ResizeObserver((p) => {
      if (u.current) {
        u.current = !1;
        return;
      }
      for (const y of p) {
        const S = y.contentRect.height;
        Number.isFinite(S) && S > 0 && b(Math.round(S));
      }
    });
    return d.observe(g), () => {
      d.disconnect(), c.current && clearTimeout(c.current);
    };
  }, [b]), a;
}, nx = (r) => {
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
  large: c = !1,
  rows: u = 3,
  promptEnabled: b = !0,
  isDraft: g = !1,
  isGenerating: d = !1,
  isDebug: p = !1,
  primary: y = !1,
  onValueChange: S,
  onPromptChange: m,
  onGenerate: v,
  onContinue: h,
  onClear: x,
  onCompare: C,
  onDelete: O,
  onShowDebug: A
}) => {
  const M = te.useMemo(() => l.length, [l]), E = !d, w = Ov(`value:${r}`), R = Ov(`prompt:${r}`);
  return /* @__PURE__ */ N.jsxs(
    "div",
    {
      className: `character-field ${g ? "draft-field" : "core-field"} ${y ? "character-field-primary" : ""}`,
      children: [
        /* @__PURE__ */ N.jsxs("div", { className: "character-field-label-row", children: [
          /* @__PURE__ */ N.jsxs("label", { children: [
            y && /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-user crec-primary-icon", "aria-hidden": "true" }),
            a
          ] }),
          d ? /* @__PURE__ */ N.jsxs("span", { className: "character-field-status", children: [
            /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-spinner fa-spin" }),
            " generating…"
          ] }) : /* @__PURE__ */ N.jsxs("span", { className: "character-field-char-count", title: "Character count", children: [
            M,
            " ch"
          ] })
        ] }),
        /* @__PURE__ */ N.jsxs("div", { className: `field-container ${c ? "large-field" : ""}`, children: [
          /* @__PURE__ */ N.jsx(
            "textarea",
            {
              ref: w,
              className: "text_pole crec-field-textarea",
              value: l,
              onChange: (L) => S(r, L.target.value),
              rows: u,
              placeholder: `Enter ${a.toLowerCase()}…`
            }
          ),
          /* @__PURE__ */ N.jsxs("div", { className: "field-actions", children: [
            /* @__PURE__ */ N.jsx(Re, { onClick: () => v(r), disabled: !E, title: "Generate field content", children: d ? /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
            /* @__PURE__ */ N.jsx(Re, { onClick: () => h(r), disabled: !E, title: "Continue from current content", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
            /* @__PURE__ */ N.jsx(Re, { onClick: () => nx(l), disabled: !l, title: "Copy content", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-copy" }) }),
            /* @__PURE__ */ N.jsx(Re, { onClick: () => x(r), disabled: !l, title: "Clear field content", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-eraser" }) }),
            !g && C && /* @__PURE__ */ N.jsx(Re, { onClick: () => C(r), title: "Compare with loaded character", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-code-compare" }) }),
            p && A && /* @__PURE__ */ N.jsx(Re, { onClick: () => A(r), title: "View debug (last prompt + response)", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-bug" }) }),
            g && O && /* @__PURE__ */ N.jsx(Re, { onClick: () => O(r), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-trash-can" }) })
          ] })
        ] }),
        b && /* @__PURE__ */ N.jsxs("div", { className: "field-prompt-container", children: [
          /* @__PURE__ */ N.jsx("div", { className: "field-prompt-label", children: "Field-specific prompt" }),
          /* @__PURE__ */ N.jsx(
            "textarea",
            {
              ref: R,
              className: "text_pole crec-field-textarea crec-field-prompt-textarea",
              value: s,
              onChange: (L) => m(r, L.target.value),
              placeholder: `Enter additional prompt for ${a.toLowerCase()}…`,
              rows: 2
            }
          )
        ] })
      ]
    }
  );
}, ax = SillyTavern.getContext(), rx = (r) => `alternate_greetings_${r + 1}`, ix = ({
  greetings: r,
  onGreetingsChange: a,
  onGenerate: l,
  onContinue: s,
  onCompare: c,
  onShowDebug: u,
  isGenerating: b
}) => {
  const [g, d] = te.useState(0);
  te.useEffect(() => {
    g >= r.length && r.length > 0 ? d(r.length - 1) : r.length === 0 && d(0);
  }, [r, g]);
  const p = r[g], y = te.useMemo(() => p?.value.length ?? 0, [p?.value]), S = () => {
    const h = [...r, { value: "", prompt: "" }];
    a(h), d(h.length - 1);
  }, m = async () => {
    if (r.length === 0) return;
    if (await ax.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const x = r.filter((C, O) => O !== g);
      a(x);
    }
  }, v = (h, x, C) => {
    const O = [...r];
    O[h][x] = C, a(O);
  };
  return /* @__PURE__ */ N.jsxs("div", { className: "character-field alternate-greetings-field", children: [
    /* @__PURE__ */ N.jsxs("div", { className: "character-field-label-row", children: [
      /* @__PURE__ */ N.jsx("label", { children: "Alternate Greetings" }),
      /* @__PURE__ */ N.jsx("span", { className: "character-field-char-count", title: "Character count", children: r.length > 0 ? `${y} ch` : "" })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { className: "crec-greetings-bar", children: [
      /* @__PURE__ */ N.jsx("div", { className: "alternate-greetings-tabs", children: r.map((h, x) => /* @__PURE__ */ N.jsxs(
        Re,
        {
          onClick: () => d(x),
          className: `menu_button ${x === g ? "active" : ""}`,
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
            onChange: (h) => v(g, "value", h.target.value),
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
              onChange: (h) => v(g, "prompt", h.target.value),
              rows: 2,
              placeholder: "Enter specific prompt for this greeting…"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ N.jsxs("div", { className: "field-actions", children: [
        /* @__PURE__ */ N.jsx(Re, { onClick: () => l(g), disabled: b, title: "Generate greeting", children: b ? /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }) }),
        /* @__PURE__ */ N.jsx(Re, { onClick: () => s(g), disabled: b, title: "Continue greeting", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-arrow-right" }) }),
        /* @__PURE__ */ N.jsx(
          Re,
          {
            onClick: () => v(g, "value", ""),
            disabled: b,
            title: "Clear greeting",
            children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ N.jsx(Re, { onClick: () => c(g), disabled: b, title: "Compare greeting", children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        u && /* @__PURE__ */ N.jsx(
          Re,
          {
            onClick: () => u(rx(g)),
            disabled: b,
            title: "View debug (last prompt + response)",
            children: /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-bug" })
          }
        ),
        /* @__PURE__ */ N.jsx(
          Re,
          {
            onClick: m,
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
var za = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.diff = function(a, l, s) {
      s === void 0 && (s = {});
      var c;
      typeof s == "function" ? (c = s, s = {}) : "callback" in s && (c = s.callback);
      var u = this.castInput(a, s), b = this.castInput(l, s), g = this.removeEmpty(this.tokenize(u, s)), d = this.removeEmpty(this.tokenize(b, s));
      return this.diffWithOptionsObj(g, d, s, c);
    }, r.prototype.diffWithOptionsObj = function(a, l, s, c) {
      var u = this, b, g = function(E) {
        if (E = u.postProcess(E, s), c) {
          setTimeout(function() {
            c(E);
          }, 0);
          return;
        } else
          return E;
      }, d = l.length, p = a.length, y = 1, S = d + p;
      s.maxEditLength != null && (S = Math.min(S, s.maxEditLength));
      var m = (b = s.timeout) !== null && b !== void 0 ? b : 1 / 0, v = Date.now() + m, h = [{ oldPos: -1, lastComponent: void 0 }], x = this.extractCommon(h[0], l, a, 0, s);
      if (h[0].oldPos + 1 >= p && x + 1 >= d)
        return g(this.buildValues(h[0].lastComponent, l, a));
      var C = -1 / 0, O = 1 / 0, A = function() {
        for (var E = Math.max(C, -y); E <= Math.min(O, y); E += 2) {
          var w = void 0, R = h[E - 1], L = h[E + 1];
          R && (h[E - 1] = void 0);
          var I = !1;
          if (L) {
            var $ = L.oldPos - E;
            I = L && 0 <= $ && $ < d;
          }
          var q = R && R.oldPos + 1 < p;
          if (!I && !q) {
            h[E] = void 0;
            continue;
          }
          if (!q || I && R.oldPos < L.oldPos ? w = u.addToPath(L, !0, !1, 0, s) : w = u.addToPath(R, !1, !0, 1, s), x = u.extractCommon(w, l, a, E, s), w.oldPos + 1 >= p && x + 1 >= d)
            return g(u.buildValues(w.lastComponent, l, a)) || !0;
          h[E] = w, w.oldPos + 1 >= p && (O = Math.min(O, E - 1)), x + 1 >= d && (C = Math.max(C, E + 1));
        }
        y++;
      };
      if (c)
        (function E() {
          setTimeout(function() {
            if (y > S || Date.now() > v)
              return c(void 0);
            A() || E();
          }, 0);
        })();
      else
        for (; y <= S && Date.now() <= v; ) {
          var M = A();
          if (M)
            return M;
        }
    }, r.prototype.addToPath = function(a, l, s, c, u) {
      var b = a.lastComponent;
      return b && !u.oneChangePerToken && b.added === l && b.removed === s ? {
        oldPos: a.oldPos + c,
        lastComponent: { count: b.count + 1, added: l, removed: s, previousComponent: b.previousComponent }
      } : {
        oldPos: a.oldPos + c,
        lastComponent: { count: 1, added: l, removed: s, previousComponent: b }
      };
    }, r.prototype.extractCommon = function(a, l, s, c, u) {
      for (var b = l.length, g = s.length, d = a.oldPos, p = d - c, y = 0; p + 1 < b && d + 1 < g && this.equals(s[d + 1], l[p + 1], u); )
        p++, d++, y++, u.oneChangePerToken && (a.lastComponent = { count: 1, previousComponent: a.lastComponent, added: !1, removed: !1 });
      return y && !u.oneChangePerToken && (a.lastComponent = { count: y, previousComponent: a.lastComponent, added: !1, removed: !1 }), a.oldPos = d, p;
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
      for (var c = [], u; a; )
        c.push(a), u = a.previousComponent, delete a.previousComponent, a = u;
      c.reverse();
      for (var b = c.length, g = 0, d = 0, p = 0; g < b; g++) {
        var y = c[g];
        if (y.removed)
          y.value = this.join(s.slice(p, p + y.count)), p += y.count;
        else {
          if (!y.added && this.useLongestToken) {
            var S = l.slice(d, d + y.count);
            S = S.map(function(m, v) {
              var h = s[p + v];
              return h.length > m.length ? h : m;
            }), y.value = this.join(S);
          } else
            y.value = this.join(l.slice(d, d + y.count));
          d += y.count, y.added || (p += y.count);
        }
      }
      return c;
    }, r;
  })()
), lx = /* @__PURE__ */ (function() {
  var r = function(a, l) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, c) {
      s.__proto__ = c;
    } || function(s, c) {
      for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && (s[u] = c[u]);
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
})(), sx = (
  /** @class */
  (function(r) {
    lx(a, r);
    function a() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return a;
  })(za)
);
new sx();
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
  return a.slice(0, ox(r, a));
}
function ox(r, a) {
  var l = 0;
  r.length > a.length && (l = r.length - a.length);
  var s = a.length;
  r.length < a.length && (s = r.length);
  var c = Array(s), u = 0;
  c[0] = 0;
  for (var b = 1; b < s; b++) {
    for (a[b] == a[u] ? c[b] = c[u] : c[b] = u; u > 0 && a[b] != a[u]; )
      u = c[u];
    a[b] == a[u] && u++;
  }
  u = 0;
  for (var g = l; g < r.length; g++) {
    for (; u > 0 && r[g] != a[u]; )
      u = c[u];
    r[g] == a[u] && u++;
  }
  return u;
}
function Al(r) {
  var a;
  for (a = r.length - 1; a >= 0 && r[a].match(/\s/); a--)
    ;
  return r.substring(a + 1);
}
function Ma(r) {
  var a = r.match(/^\s*/);
  return a ? a[0] : "";
}
var R1 = /* @__PURE__ */ (function() {
  var r = function(a, l) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, c) {
      s.__proto__ = c;
    } || function(s, c) {
      for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && (s[u] = c[u]);
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
})(), Xo = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", ux = new RegExp("[".concat(Xo, "]+|\\s+|[^").concat(Xo, "]"), "ug"), cx = (
  /** @class */
  (function(r) {
    R1(a, r);
    function a() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return a.prototype.equals = function(l, s, c) {
      return c.ignoreCase && (l = l.toLowerCase(), s = s.toLowerCase()), l.trim() === s.trim();
    }, a.prototype.tokenize = function(l, s) {
      s === void 0 && (s = {});
      var c;
      if (s.intlSegmenter) {
        var u = s.intlSegmenter;
        if (u.resolvedOptions().granularity != "word")
          throw new Error('The segmenter passed must have a granularity of "word"');
        c = Array.from(u.segment(l), function(d) {
          return d.segment;
        });
      } else
        c = l.match(ux) || [];
      var b = [], g = null;
      return c.forEach(function(d) {
        /\s/.test(d) ? g == null ? b.push(d) : b.push(b.pop() + d) : g != null && /\s/.test(g) ? b[b.length - 1] == g ? b.push(b.pop() + d) : b.push(g + d) : b.push(d), g = d;
      }), b;
    }, a.prototype.join = function(l) {
      return l.map(function(s, c) {
        return c == 0 ? s : s.replace(/^\s+/, "");
      }).join("");
    }, a.prototype.postProcess = function(l, s) {
      if (!l || s.oneChangePerToken)
        return l;
      var c = null, u = null, b = null;
      return l.forEach(function(g) {
        g.added ? u = g : g.removed ? b = g : ((u || b) && jv(c, b, u, g), c = g, u = null, b = null);
      }), (u || b) && jv(c, b, u, null), l;
    }, a;
  })(za)
), fx = new cx();
function hx(r, a, l) {
  return fx.diff(r, a, l);
}
function jv(r, a, l, s) {
  if (a && l) {
    var c = Ma(a.value), u = Al(a.value), b = Ma(l.value), g = Al(l.value);
    if (r) {
      var d = Mv(c, b);
      r.value = nh(r.value, b, d), a.value = Cl(a.value, d), l.value = Cl(l.value, d);
    }
    if (s) {
      var p = Rv(u, g);
      s.value = th(s.value, g, p), a.value = Mo(a.value, p), l.value = Mo(l.value, p);
    }
  } else if (l) {
    if (r) {
      var y = Ma(l.value);
      l.value = l.value.substring(y.length);
    }
    if (s) {
      var y = Ma(s.value);
      s.value = s.value.substring(y.length);
    }
  } else if (r && s) {
    var S = Ma(s.value), m = Ma(a.value), v = Al(a.value), h = Mv(S, m);
    a.value = Cl(a.value, h);
    var x = Rv(Cl(S, h), v);
    a.value = Mo(a.value, x), s.value = th(s.value, S, x), r.value = nh(r.value, S, S.slice(0, S.length - x.length));
  } else if (s) {
    var C = Ma(s.value), O = Al(a.value), A = kv(O, C);
    a.value = Mo(a.value, A);
  } else if (r) {
    var M = Al(r.value), E = Ma(a.value), A = kv(M, E);
    a.value = Cl(a.value, A);
  }
}
var dx = (
  /** @class */
  (function(r) {
    R1(a, r);
    function a() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return a.prototype.tokenize = function(l) {
      var s = new RegExp("(\\r?\\n)|[".concat(Xo, "]+|[^\\S\\n\\r]+|[^").concat(Xo, "]"), "ug");
      return l.match(s) || [];
    }, a;
  })(za)
);
new dx();
var px = /* @__PURE__ */ (function() {
  var r = function(a, l) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, c) {
      s.__proto__ = c;
    } || function(s, c) {
      for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && (s[u] = c[u]);
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
})(), mx = (
  /** @class */
  (function(r) {
    px(a, r);
    function a() {
      var l = r !== null && r.apply(this, arguments) || this;
      return l.tokenize = k1, l;
    }
    return a.prototype.equals = function(l, s, c) {
      return c.ignoreWhitespace ? ((!c.newlineIsToken || !l.includes(`
`)) && (l = l.trim()), (!c.newlineIsToken || !s.includes(`
`)) && (s = s.trim())) : c.ignoreNewlineAtEof && !c.newlineIsToken && (l.endsWith(`
`) && (l = l.slice(0, -1)), s.endsWith(`
`) && (s = s.slice(0, -1))), r.prototype.equals.call(this, l, s, c);
    }, a;
  })(za)
);
new mx();
function k1(r, a) {
  a.stripTrailingCr && (r = r.replace(/\r\n/g, `
`));
  var l = [], s = r.split(/(\n|\r\n)/);
  s[s.length - 1] || s.pop();
  for (var c = 0; c < s.length; c++) {
    var u = s[c];
    c % 2 && !a.newlineIsToken ? l[l.length - 1] += u : l.push(u);
  }
  return l;
}
var gx = /* @__PURE__ */ (function() {
  var r = function(a, l) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, c) {
      s.__proto__ = c;
    } || function(s, c) {
      for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && (s[u] = c[u]);
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
      return r !== null && r.apply(this, arguments) || this;
    }
    return a.prototype.tokenize = function(l) {
      return l.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, a;
  })(za)
);
new vx();
var yx = /* @__PURE__ */ (function() {
  var r = function(a, l) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, c) {
      s.__proto__ = c;
    } || function(s, c) {
      for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && (s[u] = c[u]);
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
      return l.split(/([{}:;,]|\s+)/);
    }, a;
  })(za)
);
new bx();
var Sx = /* @__PURE__ */ (function() {
  var r = function(a, l) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, c) {
      s.__proto__ = c;
    } || function(s, c) {
      for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && (s[u] = c[u]);
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
      var l = r !== null && r.apply(this, arguments) || this;
      return l.tokenize = k1, l;
    }
    return Object.defineProperty(a.prototype, "useLongestToken", {
      get: function() {
        return !0;
      },
      enumerable: !1,
      configurable: !0
    }), a.prototype.castInput = function(l, s) {
      var c = s.undefinedReplacement, u = s.stringifyReplacer, b = u === void 0 ? function(g, d) {
        return typeof d > "u" ? c : d;
      } : u;
      return typeof l == "string" ? l : JSON.stringify(ah(l, null, null, b), null, "  ");
    }, a.prototype.equals = function(l, s, c) {
      return r.prototype.equals.call(this, l.replace(/,([\r\n])/g, "$1"), s.replace(/,([\r\n])/g, "$1"), c);
    }, a;
  })(za)
);
new _x();
function ah(r, a, l, s, c) {
  a = a || [], l = l || [], s && (r = s(c === void 0 ? "" : c, r));
  var u;
  for (u = 0; u < a.length; u += 1)
    if (a[u] === r)
      return l[u];
  var b;
  if (Object.prototype.toString.call(r) === "[object Array]") {
    for (a.push(r), b = new Array(r.length), l.push(b), u = 0; u < r.length; u += 1)
      b[u] = ah(r[u], a, l, s, String(u));
    return a.pop(), l.pop(), b;
  }
  if (r && r.toJSON && (r = r.toJSON()), typeof r == "object" && r !== null) {
    a.push(r), b = {}, l.push(b);
    var g = [], d;
    for (d in r)
      Object.prototype.hasOwnProperty.call(r, d) && g.push(d);
    for (g.sort(), u = 0; u < g.length; u += 1)
      d = g[u], b[d] = ah(r[d], a, l, s, d);
    a.pop(), l.pop();
  } else
    b = r;
  return b;
}
var xx = /* @__PURE__ */ (function() {
  var r = function(a, l) {
    return r = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(s, c) {
      s.__proto__ = c;
    } || function(s, c) {
      for (var u in c) Object.prototype.hasOwnProperty.call(c, u) && (s[u] = c[u]);
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
      return r !== null && r.apply(this, arguments) || this;
    }
    return a.prototype.tokenize = function(l) {
      return l.slice();
    }, a.prototype.join = function(l) {
      return l;
    }, a.prototype.removeEmpty = function(l) {
      return l;
    }, a;
  })(za)
);
new Ex();
const Cx = ({ originalContent: r, newContent: a, fieldName: l }) => {
  const s = te.useMemo(() => {
    const c = hx(r, a);
    let u = "", b = "";
    return c.forEach((g) => {
      const p = `<span style="${g.added ? "color: green; background-color: #e6ffed;" : g.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${g.value}</span>`;
      g.added || (u += p), g.removed || (b += p);
    }), { originalHtml: u, newHtml: b };
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
const Ax = ({ capture: r }) => {
  const [a, l] = te.useState("prompt"), [s, c] = te.useState({}), u = te.useMemo(
    () => Lf(r.messages.reduce((m, v) => m + v.content, "")),
    [r.messages]
  ), b = te.useMemo(() => Lf(r.rawResponse), [r.rawResponse]), g = te.useMemo(() => {
    const m = new Date(r.startedAt).getTime(), v = new Date(r.finishedAt).getTime();
    return Math.max(0, v - m);
  }, [r.startedAt, r.finishedAt]), d = () => {
    Bf(JSON.stringify(r.messages, null, 2));
  }, p = () => {
    const m = r.messages.map((v) => `=== ${Lv[v.role] || v.role.toUpperCase()} ===
${v.content}`).join(`

`);
    Bf(m);
  }, y = () => {
    Bf(r.rawResponse);
  }, S = (m) => c((v) => ({ ...v, [m]: !v[m] }));
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
          jf(u)
        ] }),
        /* @__PURE__ */ N.jsxs("span", { className: "crec-debug-meta-item", title: "Output tokens (~chars/4)", children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-sign-out-alt" }),
          " out ~",
          jf(b)
        ] }),
        /* @__PURE__ */ N.jsxs("span", { className: "crec-debug-meta-item", title: "Elapsed time", children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-stopwatch" }),
          " ",
          g,
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
      /* @__PURE__ */ N.jsx("div", { className: "crec-debug-messages", children: r.messages.length === 0 ? /* @__PURE__ */ N.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No prompt messages were sent." }) : r.messages.map((m, v) => {
        const h = s[v] ?? !0, x = m.content.length > 300 ? `${m.content.slice(0, 300)}…` : m.content;
        return /* @__PURE__ */ N.jsxs("div", { className: `crec-debug-message crec-debug-message-${m.role}`, children: [
          /* @__PURE__ */ N.jsxs(
            "div",
            {
              className: "crec-debug-message-head",
              onClick: () => S(v),
              role: "button",
              tabIndex: 0,
              children: [
                /* @__PURE__ */ N.jsx("span", { className: `crec-debug-role crec-debug-role-${m.role}`, children: Lv[m.role] || m.role.toUpperCase() }),
                /* @__PURE__ */ N.jsxs("span", { className: "crec-debug-meta-item", children: [
                  "~",
                  jf(Lf(m.content)),
                  " tok"
                ] }),
                /* @__PURE__ */ N.jsx("i", { className: `fa-solid ${h ? "fa-chevron-up" : "fa-chevron-down"}` })
              ]
            }
          ),
          /* @__PURE__ */ N.jsx("pre", { className: "crec-debug-message-body", children: h ? m.content : x })
        ] }, v);
      }) })
    ] }) : /* @__PURE__ */ N.jsxs("div", { className: "crec-debug-section", children: [
      /* @__PURE__ */ N.jsx("div", { className: "crec-debug-actions", children: /* @__PURE__ */ N.jsxs(Re, { onClick: y, title: "Copy the raw LLM response", children: [
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
function Tx(r, a) {
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
function wx(r, a = []) {
  const l = new Set(r), s = a.filter((c) => c && !l.has(c));
  return [
    ...r.map((c) => ({ value: c, label: c })),
    ...s.map((c) => ({ value: c, label: `${c} (missing)` }))
  ];
}
function Nx(r, a = {}) {
  const l = r?.entries;
  if (!l)
    return [];
  const s = Array.isArray(l) ? l : Object.values(l);
  return a.includeDisabled ? s : s.filter((c) => !c.disable);
}
const wt = SillyTavern.getContext(), zf = () => ({
  selectedCharacterIndexes: mn ? [String(mn)] : [],
  selectedWorldNames: [],
  fields: ta.reduce(
    (r, a) => (r[a] = { value: "", prompt: "", label: Mn[a] }, r),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), Ox = {
  name: { label: Mn.name, rows: 2, large: !1, promptEnabled: !1, primary: !0 },
  description: { label: Mn.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: Mn.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: Mn.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: Mn.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: Mn.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, Dx = () => {
  const r = w1(), a = nn.getSettings(), [l, s] = te.useState(zf()), [c, u] = te.useState([]), [b, g] = te.useState(!0), [d, p] = te.useState("core"), [y, S] = te.useState([]), [m, v] = te.useState([]), [h, x] = te.useState(null), [C, O] = te.useState(null), [A, M] = te.useState({}), [E, w] = te.useState(null), [R, L] = te.useState(!1), [I, $] = te.useState({
    profile: !1,
    context: !0,
    options: !0,
    instructions: !0
  });
  te.useEffect(() => {
    (async () => {
      g(!0), S(wt.characters), v(ag);
      const K = (await $_()).value ?? {}, J = zf();
      if (K.fields && (J.fields = { ...J.fields, ...K.fields }), K.draftFields && (J.draftFields = K.draftFields), K.selectedCharacterIndexes && (J.selectedCharacterIndexes = K.selectedCharacterIndexes), K.selectedWorldNames && (J.selectedWorldNames = K.selectedWorldNames), K.lastLoadedCharacterId) {
        J.lastLoadedCharacterId = K.lastLoadedCharacterId;
        const ue = wt.characters.find((He) => He.avatar === K.lastLoadedCharacterId);
        ue && x(ue);
      }
      s(J), g(!1);
    })();
  }, []), te.useEffect(() => {
    b || ex(l).then((k) => {
      k.persisted || (console.warn("Failed to save Character Creator session:", k.error), Ae("warning", "Character Creator session could not be saved. Browser storage may be full."));
    });
  }, [l, b]);
  const q = (k, K) => {
    nn.getSettings()[k] = K, nn.saveSettings(), r();
  }, F = (k, K) => {
    nn.getSettings().contextToSend[k] = K, nn.saveSettings(), r();
  }, Y = te.useCallback(
    (k, K, J, ue) => {
      s((He) => {
        const ge = ue ? "draftFields" : "fields", Ie = { ...He[ge] };
        return Ie[k] || (Ie[k] = { value: "", prompt: "", label: k }), Ie[k][J] = K, { ...He, [ge]: Ie };
      });
    },
    []
  ), ae = te.useMemo(
    () => Object.keys(l.fields).filter((k) => k.startsWith("alternate_greetings_")).sort((k, K) => parseInt(k.split("_")[2]) - parseInt(K.split("_")[2])).map((k) => l.fields[k]),
    [l.fields]
  ), oe = te.useCallback((k) => {
    s((K) => {
      const J = { ...K.fields };
      return Object.keys(J).forEach((ue) => {
        ue.startsWith("alternate_greetings_") && delete J[ue];
      }), k.forEach((ue, He) => {
        const ge = `alternate_greetings_${He + 1}`;
        J[ge] = { ...ue, label: `Alternate Greeting ${He + 1}` };
      }), { ...K, fields: J };
    });
  }, []), he = te.useCallback(
    (k, K) => {
      Y(k, "", "value", K);
    },
    [Y]
  ), U = te.useCallback(
    async (k) => {
      await wt.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${l.draftFields[k].label}"?`
      ) && s((J) => {
        const ue = { ...J.draftFields };
        return delete ue[k], { ...J, draftFields: ue };
      });
    },
    [l.draftFields]
  ), ee = te.useCallback(async () => {
    const k = await wt.Popup.show.input("Enter Draft Field Name", "");
    if (!k?.trim()) return;
    const K = $f(k.trim());
    if (!K) return Ae("error", "Invalid field name.");
    if (l.draftFields[K] || ta.includes(K))
      return Ae("warning", "Field name already exists.");
    s((J) => ({
      ...J,
      draftFields: { ...J.draftFields, [K]: { value: "", prompt: "", label: k } }
    })), p("draft");
  }, [l.draftFields]), ie = te.useCallback(() => {
    const k = {
      presetName: a.profileId ? wt.extensionSettings.connectionManager?.profiles?.find((J) => J.id === a.profileId)?.preset : void 0,
      contextName: a.profileId ? wt.extensionSettings.connectionManager?.profiles?.find((J) => J.id === a.profileId)?.context : void 0,
      instructName: a.profileId ? wt.extensionSettings.connectionManager?.profiles?.find((J) => J.id === a.profileId)?.instruct : void 0,
      targetCharacterId: mn,
      ignoreCharacterFields: !0,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !0,
      maxContext: a.maxContextType === "custom" ? a.maxContextValue : a.maxContextType === "profile" ? "preset" : "active",
      includeNames: !!cr
    }, K = a.contextToSend.messages;
    switch (K.type) {
      case "none":
        k.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case "first":
        k.messageIndexesBetween = { start: 0, end: K.first ?? 10 };
        break;
      case "last":
        const J = wt.chat?.length ?? 0, ue = K.last ?? 10;
        k.messageIndexesBetween = {
          end: Math.max(0, J - 1),
          start: Math.max(0, J - ue)
        };
        break;
      case "range":
        k.messageIndexesBetween = {
          start: K.range?.start ?? 0,
          end: K.range?.end ?? 10
        };
        break;
    }
    return mn === void 0 && !cr && (k.messageIndexesBetween = { start: -1, end: -1 }), k;
  }, [a]), Ce = te.useCallback(async () => {
    const k = {};
    return await Promise.all(
      ag.filter((K) => !k[K]).map(async (K) => {
        const J = await wt.loadWorldInfo(K);
        J && (k[K] = Nx(J, { includeDisabled: !0 }));
      })
    ), k;
  }, []), j = te.useCallback(() => {
    const k = structuredClone(a.prompts);
    return a.contextToSend.stDescription || delete k.stDescription, (!a.contextToSend.charCard || l.selectedCharacterIndexes.length === 0) && delete k.charDefinitions, (!a.contextToSend.worldInfo || l.selectedWorldNames.length === 0) && delete k.lorebookDefinitions, a.contextToSend.existingFields || delete k.existingFieldDefinitions, a.contextToSend.persona || delete k.personaDescription, delete k.worldInfoCharDefinition, k;
  }, [a, l.selectedCharacterIndexes, l.selectedWorldNames]), Q = te.useCallback(
    async (k, K) => {
      if (!a.profileId)
        throw new Error("No connection profile selected.");
      if (!wt.extensionSettings.connectionManager?.profiles?.find(
        (Ke) => Ke.id === a.profileId
      ))
        throw new Error("Connection profile not found.");
      const ue = ie(), He = await Ce(), ge = j(), Ie = await P_({
        profileId: a.profileId,
        userPrompt: a.promptPresets[a.promptPreset].content,
        buildPromptOptions: ue,
        continueFrom: K,
        session: l,
        allCharacters: y,
        entriesGroupByWorldName: He,
        promptSettings: ge,
        formatDescription: { content: a.prompts[`${a.outputFormat}Format`].content },
        mainContextList: a.mainContextTemplatePresets[a.mainContextTemplatePreset].prompts.filter(
          (Ke) => Ke.enabled
        ),
        includeUserMacro: a.contextToSend.persona,
        maxResponseToken: a.maxResponseToken,
        targetField: k,
        outputFormat: a.outputFormat
      });
      return Ie.debug && M((Ke) => ({ ...Ke, [k]: Ie.debug })), Ie.content;
    },
    [l, a, y, ie, Ce, j]
  ), ne = te.useCallback(
    async (k, K) => {
      u((J) => [...J, k]);
      try {
        const J = await Q(k, K), ue = k.startsWith("alternate_greetings_"), He = !ue && !ta.includes(k);
        if (ue) {
          const ge = parseInt(k.split("_")[2]) - 1, Ie = [...ae];
          Ie[ge] && (Ie[ge].value = J), oe(Ie);
        } else
          Y(k, J, "value", He);
      } catch (J) {
        console.error(J), Ae("error", J.message || String(J));
      } finally {
        u((J) => J.filter((ue) => ue !== k));
      }
    },
    [Q, ae, Y, oe]
  ), le = te.useCallback(async () => {
    if (!a.profileId) {
      Ae("warning", "Please select a connection profile.");
      return;
    }
    const k = ["name", "description", "personality", "scenario", "first_mes", "mes_example"].filter(
      (K) => !c.includes(K)
    );
    if (k.length !== 0) {
      L(!0), u((K) => [...K, ...k]);
      try {
        const K = {};
        for (const J of k) {
          const ue = await Q(J);
          K[J] = ue, s((He) => {
            const ge = { ...He.fields };
            return ge[J] && (ge[J] = { ...ge[J], value: ue }), { ...He, fields: ge };
          }), u((He) => He.filter((ge) => ge !== J));
        }
        Ae("success", `Generated ${Object.keys(K).length} fields.`);
      } catch (K) {
        console.error(K), Ae("error", `Generate all failed: ${K.message}`);
      } finally {
        L(!1), u([]);
      }
    }
  }, [a.profileId, Q, c]), se = te.useCallback(async () => {
    await wt.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(zf()), x(null), M({}));
  }, []), Oe = te.useCallback(
    (k) => {
      if (!h) return Ae("warning", "Please load a character to compare against.");
      let K, J, ue;
      typeof k == "number" ? (K = ae[k]?.value ?? "", J = h.data?.alternate_greetings?.[k] ?? "", ue = `Alternate Greeting ${k + 1}`) : (K = l.fields[k]?.value ?? "", J = h[k] ?? h.data?.[k] ?? "", ue = Mn[k]), O({ original: J, current: K, fieldName: ue });
    },
    [h, l.fields, ae]
  ), me = te.useCallback(
    async (k) => {
      const K = y[parseInt(k)];
      if (!K || ta.some((ge) => l.fields[ge].value.trim() !== "") && !await wt.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const ue = { ...l.fields };
      ta.forEach((ge) => {
        ue[ge] = { value: K[ge] ?? K.data?.[ge] ?? "", prompt: "", label: Mn[ge] };
      });
      const He = (K.data?.alternate_greetings ?? []).map((ge) => ({ value: ge, prompt: "" }));
      x(K), s((ge) => ({ ...ge, fields: ue, lastLoadedCharacterId: K.avatar })), oe(He);
    },
    [y, l.fields, oe]
  ), pt = te.useCallback(async () => {
    if (cr) {
      Ae("warning", "Cannot load the current character while a group chat is open.");
      return;
    }
    if (mn === void 0) {
      Ae("warning", "No character chat is currently open.");
      return;
    }
    await me(String(mn));
  }, [me]), je = () => ae.map((k) => k.value).filter((k) => k.trim() !== ""), Gt = te.useCallback(() => ({
    name: l.fields.name.value,
    description: l.fields.description.value,
    personality: l.fields.personality.value,
    scenario: l.fields.scenario.value,
    first_mes: l.fields.first_mes.value,
    mes_example: l.fields.mes_example.value,
    data: {
      alternate_greetings: je(),
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
  }), [l.fields, ae]), mr = async () => {
    if (!l.fields.name.value) return Ae("warning", "Please provide a character name.");
    if (await wt.Popup.show.confirm("Save as New Character", "Are you sure?"))
      try {
        await T2(Gt(), !0), Ae("success", "Character created.");
      } catch (K) {
        Ae("error", `Failed to create character: ${K.message}`);
      }
  }, gn = async () => {
    if (!h) return Ae("warning", "Please load a character to override.");
    if (!await wt.Popup.show.confirm(
      "Override Character",
      `Override "${h.name}"? This cannot be undone.`
    )) return;
    const K = {
      ...h,
      name: l.fields.name.value,
      description: l.fields.description.value,
      personality: l.fields.personality.value,
      scenario: l.fields.scenario.value,
      first_mes: l.fields.first_mes.value,
      mes_example: l.fields.mes_example.value,
      data: {
        alternate_greetings: je(),
        name: l.fields.name.value,
        description: l.fields.description.value,
        first_mes: l.fields.first_mes.value,
        mes_example: l.fields.mes_example.value,
        personality: l.fields.personality.value,
        scenario: l.fields.scenario.value
      }
    };
    try {
      await w2(K, !0), Ae("success", `Character "${K.name}" updated!`);
    } catch (J) {
      Ae("error", `Failed to override character: ${J.message}`);
    }
  }, Cn = () => {
    if (!l.fields.name.value) return Ae("warning", "Please provide a character name before exporting.");
    const k = Gt(), K = new Blob([JSON.stringify(k, null, 2)], { type: "application/json" }), J = document.createElement("a");
    J.href = URL.createObjectURL(K), J.download = `${l.fields.name.value || "character"}-card.json`, J.click(), URL.revokeObjectURL(J.href);
  }, Ua = () => {
    const k = document.createElement("input");
    k.type = "file", k.accept = ".json", k.onchange = async () => {
      const K = k.files?.[0];
      if (K)
        try {
          const J = await K.text(), ue = JSON.parse(J);
          if (ta.some((Ke) => l.fields[Ke].value.trim() !== "") && !await wt.Popup.show.confirm("Import Character", "Overwrite current fields?"))
            return;
          const ge = { ...l.fields };
          ta.forEach((Ke) => {
            ge[Ke] = {
              value: ue[Ke] ?? ue.data?.[Ke] ?? "",
              prompt: "",
              label: Mn[Ke]
            };
          });
          const Ie = (ue.data?.alternate_greetings ?? ue.alternate_greetings ?? []).map(
            (Ke) => ({ value: Ke, prompt: "" })
          );
          s((Ke) => ({ ...Ke, fields: ge })), oe(Ie), Ae("success", `Imported "${ue.name ?? "character"}".`);
        } catch (J) {
          Ae("error", `Import failed: ${J.message}`);
        }
    }, k.click();
  }, Ha = () => {
    const k = JSON.stringify({ draftFields: l.draftFields, version: C1 }, null, 2), K = new Blob([k], { type: "application/json" }), J = document.createElement("a");
    J.href = URL.createObjectURL(K), J.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, J.click(), URL.revokeObjectURL(J.href);
  }, gr = () => {
    const k = document.createElement("input");
    k.type = "file", k.accept = ".json", k.onchange = async () => {
      const K = k.files?.[0];
      if (K)
        try {
          const J = await K.text(), ue = JSON.parse(J);
          if (!ue.draftFields) throw new Error("Invalid file format.");
          (Object.keys(l.draftFields).length > 0 ? await wt.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((ge) => ({ ...ge, draftFields: ue.draftFields })), Ae("success", "Draft fields imported."));
        } catch (J) {
          Ae("error", `Import failed: ${J.message}`);
        }
    }, k.click();
  }, Pa = te.useMemo(
    () => y.map((k, K) => ({ value: String(K), label: k.name })),
    [y]
  ), Nt = te.useMemo(
    () => m.map((k) => ({ value: k, label: k })),
    [m]
  ), vi = te.useMemo(
    () => wx(m, l.selectedWorldNames),
    [m, l.selectedWorldNames]
  ), Vt = te.useMemo(
    () => Object.keys(a.promptPresets).map((k) => ({ value: k, label: k })),
    [a.promptPresets]
  ), pe = te.useMemo(
    () => Object.keys(a.mainContextTemplatePresets).map((k) => ({ value: k, label: k })),
    [a.mainContextTemplatePresets]
  ), fe = (k) => $((K) => ({ ...K, [k]: !K[k] })), ze = a.showDebugView, Ue = E ? A[E] : null;
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
        /* @__PURE__ */ N.jsx(Re, { onClick: le, disabled: R, title: "Generate every core field in sequence", children: R ? /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-spinner fa-spin" }),
          " Generating…"
        ] }) : /* @__PURE__ */ N.jsxs(N.Fragment, { children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-bolt" }),
          " Generate All"
        ] }) }),
        /* @__PURE__ */ N.jsx(Re, { onClick: mr, children: "Save as New" }),
        /* @__PURE__ */ N.jsx(Re, { onClick: gn, disabled: !h, children: "Override Char" }),
        /* @__PURE__ */ N.jsx(Re, { onClick: Cn, children: "Export JSON" }),
        /* @__PURE__ */ N.jsx(Re, { onClick: Ua, children: "Import JSON" }),
        a.showSaveAsWorldInfoEntry.show && /* @__PURE__ */ N.jsx(
          Do,
          {
            items: Nt,
            placeholder: "Save as WI Entry",
            closeOnSelect: !0,
            value: [],
            onChange: (k) => {
            },
            onBeforeSelection: async (k, K) => {
              if (!l.fields.name.value)
                return Ae("warning", "Please enter a name first."), !1;
              const J = K[0], He = na.compile(a.prompts.worldInfoCharDefinition.content)({
                character: Tx(l.fields, ae)
              }), ge = {
                uid: -1,
                key: [l.fields.name.value],
                content: He,
                comment: l.fields.name.value,
                disable: !1,
                keysecondary: []
              };
              try {
                await rS({ entry: ge, selectedWorldName: J, operation: "add" }), Ae("success", `Entry added to ${J}.`);
              } catch (Ie) {
                Ae("error", `Failed to add WI Entry: ${Ie.message}`);
              }
              return !1;
            }
          }
        ),
        /* @__PURE__ */ N.jsxs(Re, { onClick: se, title: "Clear all fields", children: [
          /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-rotate-left" }),
          " Reset"
        ] }),
        /* @__PURE__ */ N.jsx(
          Re,
          {
            onClick: pt,
            title: "Load the character from the currently open chat",
            disabled: !!cr || mn === void 0,
            children: "Current Char"
          }
        ),
        /* @__PURE__ */ N.jsx("div", { style: { width: "220px" }, title: "Load Character Data", children: /* @__PURE__ */ N.jsx(
          Do,
          {
            items: Pa,
            value: h ? [String(y.indexOf(h))] : [],
            onChange: (k) => me(k[0]),
            multiple: !1,
            enableSearch: !0,
            placeholder: "Load Character…"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ N.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ N.jsxs("div", { className: "column", children: [
        /* @__PURE__ */ N.jsxs("div", { className: `card crec-collapsible ${I.profile ? "" : "expanded"}`, children: [
          /* @__PURE__ */ N.jsxs(
            "div",
            {
              className: "crec-card-head",
              role: "button",
              tabIndex: 0,
              onClick: () => fe("profile"),
              onKeyDown: (k) => {
                (k.key === "Enter" || k.key === " ") && (k.preventDefault(), fe("profile"));
              },
              children: [
                /* @__PURE__ */ N.jsxs("h3", { children: [
                  /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-plug crec-card-section-icon", "aria-hidden": "true" }),
                  " Connection Profile"
                ] }),
                /* @__PURE__ */ N.jsx("i", { className: `fa-solid crec-card-chevron ${I.profile ? "fa-chevron-right" : "fa-chevron-down"}` })
              ]
            }
          ),
          !I.profile && /* @__PURE__ */ N.jsx("div", { className: "crec-card-body", children: /* @__PURE__ */ N.jsx(
            X_,
            {
              initialSelectedProfileId: a.profileId,
              onChange: (k) => q("profileId", k?.id ?? "")
            }
          ) })
        ] }),
        /* @__PURE__ */ N.jsxs("div", { className: `card crec-collapsible ${I.context ? "" : "expanded"}`, children: [
          /* @__PURE__ */ N.jsxs(
            "div",
            {
              className: "crec-card-head",
              role: "button",
              tabIndex: 0,
              onClick: () => fe("context"),
              onKeyDown: (k) => {
                (k.key === "Enter" || k.key === " ") && (k.preventDefault(), fe("context"));
              },
              children: [
                /* @__PURE__ */ N.jsxs("h3", { children: [
                  /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-circle-info crec-card-section-icon", "aria-hidden": "true" }),
                  " Context to Send"
                ] }),
                /* @__PURE__ */ N.jsx("i", { className: `fa-solid crec-card-chevron ${I.context ? "fa-chevron-right" : "fa-chevron-down"}` })
              ]
            }
          ),
          !I.context && /* @__PURE__ */ N.jsxs("div", { className: "crec-card-body context-options", children: [
            /* @__PURE__ */ N.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ N.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: a.contextToSend.stDescription,
                  onChange: (k) => F("stDescription", k.target.checked)
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
                  onChange: (k) => F("persona", k.target.checked)
                }
              ),
              " ",
              "User's Persona"
            ] }),
            (mn !== void 0 || cr) && /* @__PURE__ */ N.jsxs("div", { className: "message-options", children: [
              /* @__PURE__ */ N.jsx("h4", { children: "Messages to Include" }),
              /* @__PURE__ */ N.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: a.contextToSend.messages.type,
                  onChange: (k) => F("messages", {
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
                    onChange: (k) => F("messages", {
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
                    onChange: (k) => F("messages", {
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
                    onChange: (k) => F("messages", {
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
                    onChange: (k) => F("messages", {
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
                  onChange: (k) => F("charCard", k.target.checked)
                }
              ),
              " ",
              "Selected Characters' Data"
            ] }),
            a.contextToSend.charCard && /* @__PURE__ */ N.jsx(
              Do,
              {
                items: Pa,
                value: l.selectedCharacterIndexes,
                onChange: (k) => s((K) => ({ ...K, selectedCharacterIndexes: k })),
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
                  onChange: (k) => F("worldInfo", k.target.checked)
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
                onChange: (k) => s((K) => ({ ...K, selectedWorldNames: k })),
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
                  onChange: (k) => F("existingFields", k.target.checked)
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
                  onChange: (k) => F("dontSendOtherGreetings", k.target.checked)
                }
              ),
              " ",
              "Don't send other alternate greetings"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ N.jsxs("div", { className: `card crec-collapsible ${I.options ? "" : "expanded"}`, children: [
          /* @__PURE__ */ N.jsxs(
            "div",
            {
              className: "crec-card-head",
              role: "button",
              tabIndex: 0,
              onClick: () => fe("options"),
              onKeyDown: (k) => {
                (k.key === "Enter" || k.key === " ") && (k.preventDefault(), fe("options"));
              },
              children: [
                /* @__PURE__ */ N.jsxs("h3", { children: [
                  /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-sliders crec-card-section-icon", "aria-hidden": "true" }),
                  " Generation Options"
                ] }),
                /* @__PURE__ */ N.jsx("i", { className: `fa-solid crec-card-chevron ${I.options ? "fa-chevron-right" : "fa-chevron-down"}` })
              ]
            }
          ),
          !I.options && /* @__PURE__ */ N.jsxs("div", { className: "crec-card-body", children: [
            /* @__PURE__ */ N.jsxs("label", { title: "You can edit in extension settings", children: [
              "Main Context Template",
              /* @__PURE__ */ N.jsx(
                Fo,
                {
                  onItemsChange: () => {
                  },
                  label: "Main Context Template",
                  items: pe,
                  value: a.mainContextTemplatePreset,
                  onChange: (k) => q("mainContextTemplatePreset", k ?? "default")
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
                  onChange: (k) => q("maxContextType", k.target.value),
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
                onChange: (k) => q("maxContextValue", parseInt(k.target.value) || 16384)
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
                  onChange: (k) => q("maxResponseToken", parseInt(k.target.value) || 1024)
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
                  onChange: (k) => q("outputFormat", k.target.value),
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
                  onChange: (k) => q("showDebugView", k.target.checked)
                }
              ),
              " ",
              "Show per-field debug view (captured last prompt + response)"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ N.jsxs("div", { className: `card crec-collapsible ${I.instructions ? "" : "expanded"}`, children: [
          /* @__PURE__ */ N.jsxs(
            "div",
            {
              className: "crec-card-head",
              role: "button",
              tabIndex: 0,
              onClick: () => fe("instructions"),
              onKeyDown: (k) => {
                (k.key === "Enter" || k.key === " ") && (k.preventDefault(), fe("instructions"));
              },
              children: [
                /* @__PURE__ */ N.jsxs("h3", { children: [
                  /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-pen crec-card-section-icon", "aria-hidden": "true" }),
                  " Additional Instructions"
                ] }),
                /* @__PURE__ */ N.jsx(
                  "i",
                  {
                    className: `fa-solid crec-card-chevron ${I.instructions ? "fa-chevron-right" : "fa-chevron-down"}`
                  }
                )
              ]
            }
          ),
          !I.instructions && /* @__PURE__ */ N.jsxs("div", { className: "crec-card-body", children: [
            /* @__PURE__ */ N.jsx(
              Fo,
              {
                label: "Prompt Preset",
                items: Vt,
                value: a.promptPreset,
                onChange: (k) => q("promptPreset", k ?? "default"),
                onItemsChange: (k) => q(
                  "promptPresets",
                  k.reduce(
                    (K, J) => ({ ...K, [J.value]: a.promptPresets[J.value] ?? { content: "" } }),
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
              T1,
              {
                value: a.promptPresets[a.promptPreset]?.content ?? "",
                onChange: (k) => q("promptPresets", {
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
            /* @__PURE__ */ N.jsxs(Re, { onClick: ee, children: [
              /* @__PURE__ */ N.jsx("i", { className: "fa-solid fa-plus" }),
              " Add"
            ] }),
            /* @__PURE__ */ N.jsx(Re, { onClick: Ha, children: "Export" }),
            /* @__PURE__ */ N.jsx(Re, { onClick: gr, children: "Import" })
          ] }) })
        ] }),
        /* @__PURE__ */ N.jsxs("div", { className: "tab-content-area", children: [
          d === "core" && /* @__PURE__ */ N.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ N.jsx("h3", { className: "crec-tab-section-title", children: "Core Character Fields" }),
            ta.map((k) => {
              const K = Ox[k];
              return K ? /* @__PURE__ */ N.jsx(
                Dv,
                {
                  fieldId: k,
                  label: K.label,
                  value: l.fields[k]?.value ?? "",
                  prompt: l.fields[k]?.prompt ?? "",
                  large: K.large,
                  rows: K.rows,
                  promptEnabled: K.promptEnabled,
                  primary: K.primary,
                  isGenerating: c.includes(k),
                  isDebug: ze,
                  onValueChange: (J, ue) => Y(J, ue, "value", !1),
                  onPromptChange: (J, ue) => Y(J, ue, "prompt", !1),
                  onGenerate: ne,
                  onContinue: (J) => ne(J, l.fields[J].value),
                  onClear: (J) => he(J, !1),
                  onCompare: Oe,
                  onShowDebug: (J) => w(J)
                },
                k
              ) : null;
            }),
            /* @__PURE__ */ N.jsx(
              ix,
              {
                greetings: ae,
                onGreetingsChange: oe,
                isGenerating: c.some((k) => k.startsWith("alternate_greetings_")),
                onGenerate: (k) => ne(`alternate_greetings_${k + 1}`),
                onContinue: (k) => ne(`alternate_greetings_${k + 1}`, ae[k].value),
                onCompare: Oe,
                onShowDebug: (k) => w(k)
              }
            )
          ] }),
          d === "draft" && /* @__PURE__ */ N.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ N.jsx("h3", { className: "crec-tab-section-title", children: "Draft Fields" }),
            Object.entries(l.draftFields).map(([k, K]) => /* @__PURE__ */ N.jsx(
              Dv,
              {
                fieldId: k,
                label: K.label,
                value: K.value,
                prompt: K.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: c.includes(k),
                isDebug: ze,
                onValueChange: (J, ue) => Y(J, ue, "value", !0),
                onPromptChange: (J, ue) => Y(J, ue, "prompt", !0),
                onGenerate: ne,
                onContinue: (J) => ne(J, l.draftFields[J].value),
                onClear: (J) => he(J, !0),
                onDelete: U,
                onShowDebug: (J) => w(J)
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
        type: Rn.DISPLAY,
        content: /* @__PURE__ */ N.jsx(
          Cx,
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
    ze && Ue && E && /* @__PURE__ */ N.jsx(
      eh,
      {
        type: Rn.DISPLAY,
        content: /* @__PURE__ */ N.jsx(Ax, { capture: Ue }),
        onComplete: () => w(null),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, Mx = () => {
  const [r, a] = te.useState(!1), l = () => a(!0), s = () => a(!1);
  return window.openCharacterCreatorPopup = l, r ? /* @__PURE__ */ N.jsx(
    eh,
    {
      content: /* @__PURE__ */ N.jsx(Dx, {}),
      type: Rn.DISPLAY,
      onComplete: s,
      options: {
        large: !0,
        wide: !0
      }
    }
  ) : null;
}, j1 = SillyTavern.getContext();
async function Rx() {
  const r = await j1.renderExtensionTemplateAsync(
    `third-party/${hr}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", r);
  const a = document.createElement("div"), l = document.querySelector(".charCreator_settings .inline-drawer-content");
  l && (l.prepend(a), vg.createRoot(a).render(
    /* @__PURE__ */ N.jsx(zo.StrictMode, { children: /* @__PURE__ */ N.jsx(J_, {}) })
  ));
  const s = '<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>', c = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], u = document.createElement("div");
  document.body.appendChild(u), vg.createRoot(u).render(
    /* @__PURE__ */ N.jsx(zo.StrictMode, { children: /* @__PURE__ */ N.jsx(Mx, {}) })
  ), c.forEach((g) => {
    if (!g) return;
    const d = document.createElement("div");
    d.innerHTML = s.trim();
    const p = d.firstChild;
    p && (g.prepend(p), p.addEventListener("click", () => {
      window.openCharacterCreatorPopup && window.openCharacterCreatorPopup();
    }));
  });
}
function kx() {
  return !!j1.ConnectionManagerRequestService;
}
kx() ? G_().then(() => {
  Rx();
}) : Ae("error", `[${hr}] Make sure ST is updated.`);
export {
  Rx as init
};
