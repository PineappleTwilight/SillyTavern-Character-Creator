import { renderStoryString as Q0, persona_description_positions as ng } from "../../../../power-user.js";
import { parseMesExamples as Z0, baseChatReplace as K0, chat_metadata as pl, getMaxContextSize as J0, name1 as aa, name2 as ja, this_chid as yn, extension_prompt_types as sr, depth_prompt_role_default as W0, depth_prompt_depth_default as $0 } from "../../../../../script.js";
import { createWorldInfoEntry as e2, world_info_include_names as t2, wi_anchor_position as n2, world_names as ag } from "../../../../world-info.js";
import "../../../../slash-commands.js";
import "../../../../personas.js";
import { formatInstructModeExamples as a2, formatInstructModeSystemPrompt as r2 } from "../../../../instruct-mode.js";
import { appendFileContent as i2 } from "../../../../chats.js";
import { setOpenAIMessages as l2, setOpenAIMessageExamples as s2, formatWorldInfo as o2, getPromptPosition as u2, getPromptRole as c2, prepareOpenAIMessages as f2 } from "../../../../openai.js";
import { metadata_keys as ml } from "../../../../authors-note.js";
import { getGroupDepthPrompts as h2, selected_group as hr } from "../../../../group-chats.js";
import { getRegexedString as d2, regex_placement as rg } from "../../../regex/engine.js";
import { removeFromArray as ig, runAfterAnimation as p2 } from "../../../../utils.js";
import "../../../../slash-commands/SlashCommandCommonEnumsProvider.js";
import "../../../../slash-commands/SlashCommandEnumValue.js";
import { Popup as ii, fixToastrForDialogs as sf } from "../../../../popup.js";
import lg from "../../../../../lib/dialog-polyfill.esm.js";
function Bv(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default") ? r.default : r;
}
var of = { exports: {} }, gl = {};
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
  if (sg) return gl;
  sg = 1;
  var r = Symbol.for("react.transitional.element"), a = Symbol.for("react.fragment");
  function l(s, c, u) {
    var b = null;
    if (u !== void 0 && (b = "" + u), c.key !== void 0 && (b = "" + c.key), "key" in c) {
      u = {};
      for (var m in c)
        m !== "key" && (u[m] = c[m]);
    } else u = c;
    return c = u.ref, {
      $$typeof: r,
      type: s,
      key: b,
      ref: c !== void 0 ? c : null,
      props: u
    };
  }
  return gl.Fragment = a, gl.jsx = l, gl.jsxs = l, gl;
}
var og;
function g2() {
  return og || (og = 1, of.exports = m2()), of.exports;
}
var T = g2(), uf = { exports: {} }, Me = {};
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
  if (ug) return Me;
  ug = 1;
  var r = Symbol.for("react.transitional.element"), a = Symbol.for("react.portal"), l = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), u = Symbol.for("react.consumer"), b = Symbol.for("react.context"), m = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), S = Symbol.iterator;
  function g(D) {
    return D === null || typeof D != "object" ? null : (D = S && D[S] || D["@@iterator"], typeof D == "function" ? D : null);
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
  }, d = Object.assign, x = {};
  function C(D, F, te) {
    this.props = D, this.context = F, this.refs = x, this.updater = te || y;
  }
  C.prototype.isReactComponent = {}, C.prototype.setState = function(D, F) {
    if (typeof D != "object" && typeof D != "function" && D != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, D, F, "setState");
  }, C.prototype.forceUpdate = function(D) {
    this.updater.enqueueForceUpdate(this, D, "forceUpdate");
  };
  function O() {
  }
  O.prototype = C.prototype;
  function A(D, F, te) {
    this.props = D, this.context = F, this.refs = x, this.updater = te || y;
  }
  var j = A.prototype = new O();
  j.constructor = A, d(j, C.prototype), j.isPureReactComponent = !0;
  var E = Array.isArray, N = { H: null, A: null, T: null, S: null, V: null }, k = Object.prototype.hasOwnProperty;
  function L(D, F, te, ae, ee, he) {
    return te = he.ref, {
      $$typeof: r,
      type: D,
      key: F,
      ref: te !== void 0 ? te : null,
      props: he
    };
  }
  function V(D, F) {
    return L(
      D.type,
      F,
      void 0,
      void 0,
      void 0,
      D.props
    );
  }
  function W(D) {
    return typeof D == "object" && D !== null && D.$$typeof === r;
  }
  function H(D) {
    var F = { "=": "=0", ":": "=2" };
    return "$" + D.replace(/[=:]/g, function(te) {
      return F[te];
    });
  }
  var X = /\/+/g;
  function Q(D, F) {
    return typeof D == "object" && D !== null && D.key != null ? H("" + D.key) : F.toString(36);
  }
  function le() {
  }
  function oe(D) {
    switch (D.status) {
      case "fulfilled":
        return D.value;
      case "rejected":
        throw D.reason;
      default:
        switch (typeof D.status == "string" ? D.then(le, le) : (D.status = "pending", D.then(
          function(F) {
            D.status === "pending" && (D.status = "fulfilled", D.value = F);
          },
          function(F) {
            D.status === "pending" && (D.status = "rejected", D.reason = F);
          }
        )), D.status) {
          case "fulfilled":
            return D.value;
          case "rejected":
            throw D.reason;
        }
    }
    throw D;
  }
  function de(D, F, te, ae, ee) {
    var he = typeof D;
    (he === "undefined" || he === "boolean") && (D = null);
    var se = !1;
    if (D === null) se = !0;
    else
      switch (he) {
        case "bigint":
        case "string":
        case "number":
          se = !0;
          break;
        case "object":
          switch (D.$$typeof) {
            case r:
            case a:
              se = !0;
              break;
            case v:
              return se = D._init, de(
                se(D._payload),
                F,
                te,
                ae,
                ee
              );
          }
      }
    if (se)
      return ee = ee(D), se = ae === "" ? "." + Q(D, 0) : ae, E(ee) ? (te = "", se != null && (te = se.replace(X, "$&/") + "/"), de(ee, F, te, "", function(Je) {
        return Je;
      })) : ee != null && (W(ee) && (ee = V(
        ee,
        te + (ee.key == null || D && D.key === ee.key ? "" : ("" + ee.key).replace(
          X,
          "$&/"
        ) + "/") + se
      )), F.push(ee)), 1;
    se = 0;
    var Xe = ae === "" ? "." : ae + ":";
    if (E(D))
      for (var Ae = 0; Ae < D.length; Ae++)
        ae = D[Ae], he = Xe + Q(ae, Ae), se += de(
          ae,
          F,
          te,
          he,
          ee
        );
    else if (Ae = g(D), typeof Ae == "function")
      for (D = Ae.call(D), Ae = 0; !(ae = D.next()).done; )
        ae = ae.value, he = Xe + Q(ae, Ae++), se += de(
          ae,
          F,
          te,
          he,
          ee
        );
    else if (he === "object") {
      if (typeof D.then == "function")
        return de(
          oe(D),
          F,
          te,
          ae,
          ee
        );
      throw F = String(D), Error(
        "Objects are not valid as a React child (found: " + (F === "[object Object]" ? "object with keys {" + Object.keys(D).join(", ") + "}" : F) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return se;
  }
  function z(D, F, te) {
    if (D == null) return D;
    var ae = [], ee = 0;
    return de(D, ae, "", "", function(he) {
      return F.call(te, he, ee++);
    }), ae;
  }
  function re(D) {
    if (D._status === -1) {
      var F = D._result;
      F = F(), F.then(
        function(te) {
          (D._status === 0 || D._status === -1) && (D._status = 1, D._result = te);
        },
        function(te) {
          (D._status === 0 || D._status === -1) && (D._status = 2, D._result = te);
        }
      ), D._status === -1 && (D._status = 0, D._result = F);
    }
    if (D._status === 1) return D._result.default;
    throw D._result;
  }
  var ce = typeof reportError == "function" ? reportError : function(D) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var F = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof D == "object" && D !== null && typeof D.message == "string" ? String(D.message) : String(D),
        error: D
      });
      if (!window.dispatchEvent(F)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", D);
      return;
    }
    console.error(D);
  };
  function je() {
  }
  return Me.Children = {
    map: z,
    forEach: function(D, F, te) {
      z(
        D,
        function() {
          F.apply(this, arguments);
        },
        te
      );
    },
    count: function(D) {
      var F = 0;
      return z(D, function() {
        F++;
      }), F;
    },
    toArray: function(D) {
      return z(D, function(F) {
        return F;
      }) || [];
    },
    only: function(D) {
      if (!W(D))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return D;
    }
  }, Me.Component = C, Me.Fragment = l, Me.Profiler = c, Me.PureComponent = A, Me.StrictMode = s, Me.Suspense = h, Me.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = N, Me.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(D) {
      return N.H.useMemoCache(D);
    }
  }, Me.cache = function(D) {
    return function() {
      return D.apply(null, arguments);
    };
  }, Me.cloneElement = function(D, F, te) {
    if (D == null)
      throw Error(
        "The argument must be a React element, but you passed " + D + "."
      );
    var ae = d({}, D.props), ee = D.key, he = void 0;
    if (F != null)
      for (se in F.ref !== void 0 && (he = void 0), F.key !== void 0 && (ee = "" + F.key), F)
        !k.call(F, se) || se === "key" || se === "__self" || se === "__source" || se === "ref" && F.ref === void 0 || (ae[se] = F[se]);
    var se = arguments.length - 2;
    if (se === 1) ae.children = te;
    else if (1 < se) {
      for (var Xe = Array(se), Ae = 0; Ae < se; Ae++)
        Xe[Ae] = arguments[Ae + 2];
      ae.children = Xe;
    }
    return L(D.type, ee, void 0, void 0, he, ae);
  }, Me.createContext = function(D) {
    return D = {
      $$typeof: b,
      _currentValue: D,
      _currentValue2: D,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, D.Provider = D, D.Consumer = {
      $$typeof: u,
      _context: D
    }, D;
  }, Me.createElement = function(D, F, te) {
    var ae, ee = {}, he = null;
    if (F != null)
      for (ae in F.key !== void 0 && (he = "" + F.key), F)
        k.call(F, ae) && ae !== "key" && ae !== "__self" && ae !== "__source" && (ee[ae] = F[ae]);
    var se = arguments.length - 2;
    if (se === 1) ee.children = te;
    else if (1 < se) {
      for (var Xe = Array(se), Ae = 0; Ae < se; Ae++)
        Xe[Ae] = arguments[Ae + 2];
      ee.children = Xe;
    }
    if (D && D.defaultProps)
      for (ae in se = D.defaultProps, se)
        ee[ae] === void 0 && (ee[ae] = se[ae]);
    return L(D, he, void 0, void 0, null, ee);
  }, Me.createRef = function() {
    return { current: null };
  }, Me.forwardRef = function(D) {
    return { $$typeof: m, render: D };
  }, Me.isValidElement = W, Me.lazy = function(D) {
    return {
      $$typeof: v,
      _payload: { _status: -1, _result: D },
      _init: re
    };
  }, Me.memo = function(D, F) {
    return {
      $$typeof: p,
      type: D,
      compare: F === void 0 ? null : F
    };
  }, Me.startTransition = function(D) {
    var F = N.T, te = {};
    N.T = te;
    try {
      var ae = D(), ee = N.S;
      ee !== null && ee(te, ae), typeof ae == "object" && ae !== null && typeof ae.then == "function" && ae.then(je, ce);
    } catch (he) {
      ce(he);
    } finally {
      N.T = F;
    }
  }, Me.unstable_useCacheRefresh = function() {
    return N.H.useCacheRefresh();
  }, Me.use = function(D) {
    return N.H.use(D);
  }, Me.useActionState = function(D, F, te) {
    return N.H.useActionState(D, F, te);
  }, Me.useCallback = function(D, F) {
    return N.H.useCallback(D, F);
  }, Me.useContext = function(D) {
    return N.H.useContext(D);
  }, Me.useDebugValue = function() {
  }, Me.useDeferredValue = function(D, F) {
    return N.H.useDeferredValue(D, F);
  }, Me.useEffect = function(D, F, te) {
    var ae = N.H;
    if (typeof te == "function")
      throw Error(
        "useEffect CRUD overload is not enabled in this build of React."
      );
    return ae.useEffect(D, F);
  }, Me.useId = function() {
    return N.H.useId();
  }, Me.useImperativeHandle = function(D, F, te) {
    return N.H.useImperativeHandle(D, F, te);
  }, Me.useInsertionEffect = function(D, F) {
    return N.H.useInsertionEffect(D, F);
  }, Me.useLayoutEffect = function(D, F) {
    return N.H.useLayoutEffect(D, F);
  }, Me.useMemo = function(D, F) {
    return N.H.useMemo(D, F);
  }, Me.useOptimistic = function(D, F) {
    return N.H.useOptimistic(D, F);
  }, Me.useReducer = function(D, F, te) {
    return N.H.useReducer(D, F, te);
  }, Me.useRef = function(D) {
    return N.H.useRef(D);
  }, Me.useState = function(D) {
    return N.H.useState(D);
  }, Me.useSyncExternalStore = function(D, F, te) {
    return N.H.useSyncExternalStore(
      D,
      F,
      te
    );
  }, Me.useTransition = function() {
    return N.H.useTransition();
  }, Me.version = "19.1.1", Me;
}
var cg;
function rh() {
  return cg || (cg = 1, uf.exports = v2()), uf.exports;
}
var ne = rh();
const Uo = /* @__PURE__ */ Bv(ne);
var cf = { exports: {} }, vl = {}, ff = { exports: {} }, hf = {};
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
    function a(z, re) {
      var ce = z.length;
      z.push(re);
      e: for (; 0 < ce; ) {
        var je = ce - 1 >>> 1, D = z[je];
        if (0 < c(D, re))
          z[je] = re, z[ce] = D, ce = je;
        else break e;
      }
    }
    function l(z) {
      return z.length === 0 ? null : z[0];
    }
    function s(z) {
      if (z.length === 0) return null;
      var re = z[0], ce = z.pop();
      if (ce !== re) {
        z[0] = ce;
        e: for (var je = 0, D = z.length, F = D >>> 1; je < F; ) {
          var te = 2 * (je + 1) - 1, ae = z[te], ee = te + 1, he = z[ee];
          if (0 > c(ae, ce))
            ee < D && 0 > c(he, ae) ? (z[je] = he, z[ee] = ce, je = ee) : (z[je] = ae, z[te] = ce, je = te);
          else if (ee < D && 0 > c(he, ce))
            z[je] = he, z[ee] = ce, je = ee;
          else break e;
        }
      }
      return re;
    }
    function c(z, re) {
      var ce = z.sortIndex - re.sortIndex;
      return ce !== 0 ? ce : z.id - re.id;
    }
    if (r.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var u = performance;
      r.unstable_now = function() {
        return u.now();
      };
    } else {
      var b = Date, m = b.now();
      r.unstable_now = function() {
        return b.now() - m;
      };
    }
    var h = [], p = [], v = 1, S = null, g = 3, y = !1, d = !1, x = !1, C = !1, O = typeof setTimeout == "function" ? setTimeout : null, A = typeof clearTimeout == "function" ? clearTimeout : null, j = typeof setImmediate < "u" ? setImmediate : null;
    function E(z) {
      for (var re = l(p); re !== null; ) {
        if (re.callback === null) s(p);
        else if (re.startTime <= z)
          s(p), re.sortIndex = re.expirationTime, a(h, re);
        else break;
        re = l(p);
      }
    }
    function N(z) {
      if (x = !1, E(z), !d)
        if (l(h) !== null)
          d = !0, k || (k = !0, Q());
        else {
          var re = l(p);
          re !== null && de(N, re.startTime - z);
        }
    }
    var k = !1, L = -1, V = 5, W = -1;
    function H() {
      return C ? !0 : !(r.unstable_now() - W < V);
    }
    function X() {
      if (C = !1, k) {
        var z = r.unstable_now();
        W = z;
        var re = !0;
        try {
          e: {
            d = !1, x && (x = !1, A(L), L = -1), y = !0;
            var ce = g;
            try {
              t: {
                for (E(z), S = l(h); S !== null && !(S.expirationTime > z && H()); ) {
                  var je = S.callback;
                  if (typeof je == "function") {
                    S.callback = null, g = S.priorityLevel;
                    var D = je(
                      S.expirationTime <= z
                    );
                    if (z = r.unstable_now(), typeof D == "function") {
                      S.callback = D, E(z), re = !0;
                      break t;
                    }
                    S === l(h) && s(h), E(z);
                  } else s(h);
                  S = l(h);
                }
                if (S !== null) re = !0;
                else {
                  var F = l(p);
                  F !== null && de(
                    N,
                    F.startTime - z
                  ), re = !1;
                }
              }
              break e;
            } finally {
              S = null, g = ce, y = !1;
            }
            re = void 0;
          }
        } finally {
          re ? Q() : k = !1;
        }
      }
    }
    var Q;
    if (typeof j == "function")
      Q = function() {
        j(X);
      };
    else if (typeof MessageChannel < "u") {
      var le = new MessageChannel(), oe = le.port2;
      le.port1.onmessage = X, Q = function() {
        oe.postMessage(null);
      };
    } else
      Q = function() {
        O(X, 0);
      };
    function de(z, re) {
      L = O(function() {
        z(r.unstable_now());
      }, re);
    }
    r.unstable_IdlePriority = 5, r.unstable_ImmediatePriority = 1, r.unstable_LowPriority = 4, r.unstable_NormalPriority = 3, r.unstable_Profiling = null, r.unstable_UserBlockingPriority = 2, r.unstable_cancelCallback = function(z) {
      z.callback = null;
    }, r.unstable_forceFrameRate = function(z) {
      0 > z || 125 < z ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : V = 0 < z ? Math.floor(1e3 / z) : 5;
    }, r.unstable_getCurrentPriorityLevel = function() {
      return g;
    }, r.unstable_next = function(z) {
      switch (g) {
        case 1:
        case 2:
        case 3:
          var re = 3;
          break;
        default:
          re = g;
      }
      var ce = g;
      g = re;
      try {
        return z();
      } finally {
        g = ce;
      }
    }, r.unstable_requestPaint = function() {
      C = !0;
    }, r.unstable_runWithPriority = function(z, re) {
      switch (z) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          z = 3;
      }
      var ce = g;
      g = z;
      try {
        return re();
      } finally {
        g = ce;
      }
    }, r.unstable_scheduleCallback = function(z, re, ce) {
      var je = r.unstable_now();
      switch (typeof ce == "object" && ce !== null ? (ce = ce.delay, ce = typeof ce == "number" && 0 < ce ? je + ce : je) : ce = je, z) {
        case 1:
          var D = -1;
          break;
        case 2:
          D = 250;
          break;
        case 5:
          D = 1073741823;
          break;
        case 4:
          D = 1e4;
          break;
        default:
          D = 5e3;
      }
      return D = ce + D, z = {
        id: v++,
        callback: re,
        priorityLevel: z,
        startTime: ce,
        expirationTime: D,
        sortIndex: -1
      }, ce > je ? (z.sortIndex = ce, a(p, z), l(h) === null && z === l(p) && (x ? (A(L), L = -1) : x = !0, de(N, ce - je))) : (z.sortIndex = D, a(h, z), d || y || (d = !0, k || (k = !0, Q()))), z;
    }, r.unstable_shouldYield = H, r.unstable_wrapCallback = function(z) {
      var re = g;
      return function() {
        var ce = g;
        g = re;
        try {
          return z.apply(this, arguments);
        } finally {
          g = ce;
        }
      };
    };
  })(hf)), hf;
}
var hg;
function b2() {
  return hg || (hg = 1, ff.exports = y2()), ff.exports;
}
var df = { exports: {} }, Mt = {};
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
  if (dg) return Mt;
  dg = 1;
  var r = rh();
  function a(h) {
    var p = "https://react.dev/errors/" + h;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var v = 2; v < arguments.length; v++)
        p += "&args[]=" + encodeURIComponent(arguments[v]);
    }
    return "Minified React error #" + h + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function u(h, p, v) {
    var S = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: c,
      key: S == null ? null : "" + S,
      children: h,
      containerInfo: p,
      implementation: v
    };
  }
  var b = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function m(h, p) {
    if (h === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return Mt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Mt.createPortal = function(h, p) {
    var v = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(a(299));
    return u(h, p, null, v);
  }, Mt.flushSync = function(h) {
    var p = b.T, v = s.p;
    try {
      if (b.T = null, s.p = 2, h) return h();
    } finally {
      b.T = p, s.p = v, s.d.f();
    }
  }, Mt.preconnect = function(h, p) {
    typeof h == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, s.d.C(h, p));
  }, Mt.prefetchDNS = function(h) {
    typeof h == "string" && s.d.D(h);
  }, Mt.preinit = function(h, p) {
    if (typeof h == "string" && p && typeof p.as == "string") {
      var v = p.as, S = m(v, p.crossOrigin), g = typeof p.integrity == "string" ? p.integrity : void 0, y = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      v === "style" ? s.d.S(
        h,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: S,
          integrity: g,
          fetchPriority: y
        }
      ) : v === "script" && s.d.X(h, {
        crossOrigin: S,
        integrity: g,
        fetchPriority: y,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, Mt.preinitModule = function(h, p) {
    if (typeof h == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var v = m(
            p.as,
            p.crossOrigin
          );
          s.d.M(h, {
            crossOrigin: v,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0
          });
        }
      } else p == null && s.d.M(h);
  }, Mt.preload = function(h, p) {
    if (typeof h == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var v = p.as, S = m(v, p.crossOrigin);
      s.d.L(h, v, {
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
  }, Mt.preloadModule = function(h, p) {
    if (typeof h == "string")
      if (p) {
        var v = m(p.as, p.crossOrigin);
        s.d.m(h, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: v,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0
        });
      } else s.d.m(h);
  }, Mt.requestFormReset = function(h) {
    s.d.r(h);
  }, Mt.unstable_batchedUpdates = function(h, p) {
    return h(p);
  }, Mt.useFormState = function(h, p, v) {
    return b.H.useFormState(h, p, v);
  }, Mt.useFormStatus = function() {
    return b.H.useHostTransitionStatus();
  }, Mt.version = "19.1.1", Mt;
}
var pg;
function Uv() {
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
  if (mg) return vl;
  mg = 1;
  var r = b2(), a = rh(), l = Uv();
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
  function m(e) {
    if (u(e) !== e)
      throw Error(s(188));
  }
  function h(e) {
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
  var v = Object.assign, S = Symbol.for("react.element"), g = Symbol.for("react.transitional.element"), y = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), C = Symbol.for("react.profiler"), O = Symbol.for("react.provider"), A = Symbol.for("react.consumer"), j = Symbol.for("react.context"), E = Symbol.for("react.forward_ref"), N = Symbol.for("react.suspense"), k = Symbol.for("react.suspense_list"), L = Symbol.for("react.memo"), V = Symbol.for("react.lazy"), W = Symbol.for("react.activity"), H = Symbol.for("react.memo_cache_sentinel"), X = Symbol.iterator;
  function Q(e) {
    return e === null || typeof e != "object" ? null : (e = X && e[X] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var le = Symbol.for("react.client.reference");
  function oe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === le ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case d:
        return "Fragment";
      case C:
        return "Profiler";
      case x:
        return "StrictMode";
      case N:
        return "Suspense";
      case k:
        return "SuspenseList";
      case W:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case y:
          return "Portal";
        case j:
          return (e.displayName || "Context") + ".Provider";
        case A:
          return (e._context.displayName || "Context") + ".Consumer";
        case E:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case L:
          return t = e.displayName || null, t !== null ? t : oe(e.type) || "Memo";
        case V:
          t = e._payload, e = e._init;
          try {
            return oe(e(t));
          } catch {
          }
      }
    return null;
  }
  var de = Array.isArray, z = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, re = l.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ce = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, je = [], D = -1;
  function F(e) {
    return { current: e };
  }
  function te(e) {
    0 > D || (e.current = je[D], je[D] = null, D--);
  }
  function ae(e, t) {
    D++, je[D] = e.current, e.current = t;
  }
  var ee = F(null), he = F(null), se = F(null), Xe = F(null);
  function Ae(e, t) {
    switch (ae(se, t), ae(he, e), ae(ee, null), t.nodeType) {
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
    te(ee), ae(ee, e);
  }
  function Je() {
    te(ee), te(he), te(se);
  }
  function ua(e) {
    e.memoizedState !== null && ae(Xe, e);
    var t = ee.current, n = Mm(t, e.type);
    t !== n && (ae(he, e), ae(ee, n));
  }
  function bn(e) {
    he.current === e && (te(ee), te(he)), Xe.current === e && (te(Xe), ul._currentValue = ce);
  }
  var Sn = Object.prototype.hasOwnProperty, ca = r.unstable_scheduleCallback, Ga = r.unstable_cancelCallback, vr = r.unstable_shouldYield, yr = r.unstable_requestPaint, jt = r.unstable_now, yi = r.unstable_getCurrentPriorityLevel, Xt = r.unstable_ImmediatePriority, me = r.unstable_UserBlockingPriority, ge = r.unstable_NormalPriority, Ie = r.unstable_LowPriority, Pe = r.unstable_IdlePriority, We = r.log, Ct = r.unstable_setDisableYieldValue, Qt = null, nt = null;
  function R(e) {
    if (typeof We == "function" && Ct(e), nt && typeof nt.setStrictMode == "function")
      try {
        nt.setStrictMode(Qt, e);
      } catch {
      }
  }
  var Y = Math.clz32 ? Math.clz32 : Oe, J = Math.log, fe = Math.LN2;
  function Oe(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (J(e) / fe | 0) | 0;
  }
  var be = 256, Ge = 4194304;
  function De(e) {
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
  function we(e, t, n) {
    var i = e.pendingLanes;
    if (i === 0) return 0;
    var o = 0, f = e.suspendedLanes, _ = e.pingedLanes;
    e = e.warmLanes;
    var w = i & 134217727;
    return w !== 0 ? (i = w & ~f, i !== 0 ? o = De(i) : (_ &= w, _ !== 0 ? o = De(_) : n || (n = w & ~e, n !== 0 && (o = De(n))))) : (w = i & ~f, w !== 0 ? o = De(w) : _ !== 0 ? o = De(_) : n || (n = i & ~e, n !== 0 && (o = De(n)))), o === 0 ? 0 : t !== 0 && t !== o && (t & f) === 0 && (f = o & -o, n = t & -t, f >= n || f === 32 && (n & 4194048) !== 0) ? t : o;
  }
  function et(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function On(e, t) {
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
  function br() {
    var e = be;
    return be <<= 1, (be & 4194048) === 0 && (be = 256), e;
  }
  function ph() {
    var e = Ge;
    return Ge <<= 1, (Ge & 62914560) === 0 && (Ge = 4194304), e;
  }
  function Zo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function bi(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function By(e, t, n, i, o, f) {
    var _ = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var w = e.entanglements, M = e.expirationTimes, q = e.hiddenUpdates;
    for (n = _ & ~n; 0 < n; ) {
      var Z = 31 - Y(n), $ = 1 << Z;
      w[Z] = 0, M[Z] = -1;
      var I = q[Z];
      if (I !== null)
        for (q[Z] = null, Z = 0; Z < I.length; Z++) {
          var G = I[Z];
          G !== null && (G.lane &= -536870913);
        }
      n &= ~$;
    }
    i !== 0 && mh(e, i, 0), f !== 0 && o === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(_ & ~t));
  }
  function mh(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var i = 31 - Y(t);
    e.entangledLanes |= t, e.entanglements[i] = e.entanglements[i] | 1073741824 | n & 4194090;
  }
  function gh(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var i = 31 - Y(n), o = 1 << i;
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
    var e = re.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Km(e.type));
  }
  function Uy(e, t) {
    var n = re.p;
    try {
      return re.p = e, t();
    } finally {
      re.p = n;
    }
  }
  var fa = Math.random().toString(36).slice(2), Ot = "__reactFiber$" + fa, zt = "__reactProps$" + fa, Sr = "__reactContainer$" + fa, Wo = "__reactEvents$" + fa, zy = "__reactListeners$" + fa, Hy = "__reactHandles$" + fa, yh = "__reactResources$" + fa, Si = "__reactMarker$" + fa;
  function $o(e) {
    delete e[Ot], delete e[zt], delete e[Wo], delete e[zy], delete e[Hy];
  }
  function _r(e) {
    var t = e[Ot];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Sr] || n[Ot]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Lm(e); e !== null; ) {
            if (n = e[Ot]) return n;
            e = Lm(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function xr(e) {
    if (e = e[Ot] || e[Sr]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function _i(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function Er(e) {
    var t = e[yh];
    return t || (t = e[yh] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function St(e) {
    e[Si] = !0;
  }
  var bh = /* @__PURE__ */ new Set(), Sh = {};
  function Va(e, t) {
    Cr(e, t), Cr(e + "Capture", t);
  }
  function Cr(e, t) {
    for (Sh[e] = t, e = 0; e < t.length; e++)
      bh.add(t[e]);
  }
  var Py = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), _h = {}, xh = {};
  function qy(e) {
    return Sn.call(xh, e) ? !0 : Sn.call(_h, e) ? !1 : Py.test(e) ? xh[e] = !0 : (_h[e] = !0, !1);
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
  function Pn(e, t, n, i) {
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
  function Ar(e) {
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
              var $ = function() {
                throw Error();
              };
              if (Object.defineProperty($.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct($, []);
                } catch (G) {
                  var I = G;
                }
                Reflect.construct(e, [], $);
              } else {
                try {
                  $.call();
                } catch (G) {
                  I = G;
                }
                e.call($.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (G) {
                I = G;
              }
              ($ = e()) && typeof $.catch == "function" && $.catch(function() {
              });
            }
          } catch (G) {
            if (G && I && typeof G.stack == "string")
              return [G.stack, I.stack];
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
        var M = _.split(`
`), q = w.split(`
`);
        for (o = i = 0; i < M.length && !M[i].includes("DetermineComponentFrameRoot"); )
          i++;
        for (; o < q.length && !q[o].includes(
          "DetermineComponentFrameRoot"
        ); )
          o++;
        if (i === M.length || o === q.length)
          for (i = M.length - 1, o = q.length - 1; 1 <= i && 0 <= o && M[i] !== q[o]; )
            o--;
        for (; 1 <= i && 0 <= o; i--, o--)
          if (M[i] !== q[o]) {
            if (i !== 1 || o !== 1)
              do
                if (i--, o--, 0 > o || M[i] !== q[o]) {
                  var Z = `
` + M[i].replace(" at new ", " at ");
                  return e.displayName && Z.includes("<anonymous>") && (Z = Z.replace("<anonymous>", e.displayName)), Z;
                }
              while (1 <= i && 0 <= o);
            break;
          }
      }
    } finally {
      tu = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? Ar(n) : "";
  }
  function Iy(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Ar(e.type);
      case 16:
        return Ar("Lazy");
      case 13:
        return Ar("Suspense");
      case 19:
        return Ar("SuspenseList");
      case 0:
      case 15:
        return nu(e.type, !1);
      case 11:
        return nu(e.type.render, !1);
      case 1:
        return nu(e.type, !0);
      case 31:
        return Ar("Activity");
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
  function on(e) {
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
  function un(e) {
    return e.replace(
      Vy,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function au(e, t, n, i, o, f, _, w) {
    e.name = "", _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" ? e.type = _ : e.removeAttribute("type"), t != null ? _ === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + on(t)) : e.value !== "" + on(t) && (e.value = "" + on(t)) : _ !== "submit" && _ !== "reset" || e.removeAttribute("value"), t != null ? ru(e, _, on(t)) : n != null ? ru(e, _, on(n)) : i != null && e.removeAttribute("value"), o == null && f != null && (e.defaultChecked = !!f), o != null && (e.checked = o && typeof o != "function" && typeof o != "symbol"), w != null && typeof w != "function" && typeof w != "symbol" && typeof w != "boolean" ? e.name = "" + on(w) : e.removeAttribute("name");
  }
  function Nh(e, t, n, i, o, f, _, w) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), t != null || n != null) {
      if (!(f !== "submit" && f !== "reset" || t != null))
        return;
      n = n != null ? "" + on(n) : "", t = t != null ? "" + on(t) : n, w || t === e.value || (e.value = t), e.defaultValue = t;
    }
    i = i ?? o, i = typeof i != "function" && typeof i != "symbol" && !!i, e.checked = w ? e.checked : !!i, e.defaultChecked = !!i, _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" && (e.name = _);
  }
  function ru(e, t, n) {
    t === "number" && Gl(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function Tr(e, t, n, i) {
    if (e = e.options, t) {
      t = {};
      for (var o = 0; o < n.length; o++)
        t["$" + n[o]] = !0;
      for (n = 0; n < e.length; n++)
        o = t.hasOwnProperty("$" + e[n].value), e[n].selected !== o && (e[n].selected = o), o && i && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + on(n), t = null, o = 0; o < e.length; o++) {
        if (e[o].value === n) {
          e[o].selected = !0, i && (e[o].defaultSelected = !0);
          return;
        }
        t !== null || e[o].disabled || (t = e[o]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function wh(e, t, n) {
    if (t != null && (t = "" + on(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + on(n) : "";
  }
  function Oh(e, t, n, i) {
    if (t == null) {
      if (i != null) {
        if (n != null) throw Error(s(92));
        if (de(i)) {
          if (1 < i.length) throw Error(s(93));
          i = i[0];
        }
        n = i;
      }
      n == null && (n = ""), t = n;
    }
    n = on(t), e.defaultValue = n, i = e.textContent, i === n && i !== "" && i !== null && (e.value = i);
  }
  function Nr(e, t) {
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
  var wr = null, Or = null;
  function Rh(e) {
    var t = xr(e);
    if (t && (e = t.stateNode)) {
      var n = e[zt] || null;
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
              'input[name="' + un(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var i = n[t];
              if (i !== e && i.form === e.form) {
                var o = i[zt] || null;
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
          wh(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && Tr(e, !!n.multiple, t, !1);
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
      if (ou = !1, (wr !== null || Or !== null) && (Os(), wr && (t = wr, e = Or, Or = wr = null, Rh(t), e)))
        for (t = 0; t < e.length; t++) Rh(e[t]);
    }
  }
  function xi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var i = n[zt] || null;
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
  var qn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), uu = !1;
  if (qn)
    try {
      var Ei = {};
      Object.defineProperty(Ei, "passive", {
        get: function() {
          uu = !0;
        }
      }), window.addEventListener("test", Ei, Ei), window.removeEventListener("test", Ei, Ei);
    } catch {
      uu = !1;
    }
  var ha = null, cu = null, Yl = null;
  function jh() {
    if (Yl) return Yl;
    var e, t = cu, n = t.length, i, o = "value" in ha ? ha.value : ha.textContent, f = o.length;
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
  function Ht(e) {
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
  var Ya = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Ql = Ht(Ya), Ci = v({}, Ya, { view: 0, detail: 0 }), Qy = Ht(Ci), fu, hu, Ai, Zl = v({}, Ci, {
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
      return "movementX" in e ? e.movementX : (e !== Ai && (Ai && e.type === "mousemove" ? (fu = e.screenX - Ai.screenX, hu = e.screenY - Ai.screenY) : hu = fu = 0, Ai = e), fu);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : hu;
    }
  }), Bh = Ht(Zl), Zy = v({}, Zl, { dataTransfer: 0 }), Ky = Ht(Zy), Jy = v({}, Ci, { relatedTarget: 0 }), du = Ht(Jy), Wy = v({}, Ya, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $y = Ht(Wy), e1 = v({}, Ya, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), t1 = Ht(e1), n1 = v({}, Ya, { data: 0 }), Uh = Ht(n1), a1 = {
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
  var s1 = v({}, Ci, {
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
  }), o1 = Ht(s1), u1 = v({}, Zl, {
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
  }), zh = Ht(u1), c1 = v({}, Ci, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: pu
  }), f1 = Ht(c1), h1 = v({}, Ya, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), d1 = Ht(h1), p1 = v({}, Zl, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), m1 = Ht(p1), g1 = v({}, Ya, {
    newState: 0,
    oldState: 0
  }), v1 = Ht(g1), y1 = [9, 13, 27, 32], mu = qn && "CompositionEvent" in window, Ti = null;
  qn && "documentMode" in document && (Ti = document.documentMode);
  var b1 = qn && "TextEvent" in window && !Ti, Hh = qn && (!mu || Ti && 8 < Ti && 11 >= Ti), Ph = " ", qh = !1;
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
  var Dr = !1;
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
    if (Dr)
      return e === "compositionend" || !mu && Ih(e, t) ? (e = jh(), Yl = cu = ha = null, Dr = !1, e) : null;
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
    wr ? Or ? Or.push(i) : Or = [i] : wr = i, t = Ls(t, "onChange"), 0 < t.length && (n = new Ql(
      "onChange",
      "change",
      null,
      n,
      i
    ), e.push({ event: n, listeners: t }));
  }
  var Ni = null, wi = null;
  function E1(e) {
    Am(e, 0);
  }
  function Kl(e) {
    var t = _i(e);
    if (Th(t)) return e;
  }
  function Fh(e, t) {
    if (e === "change") return t;
  }
  var Xh = !1;
  if (qn) {
    var gu;
    if (qn) {
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
    Ni && (Ni.detachEvent("onpropertychange", Kh), wi = Ni = null);
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
    e === "focusin" ? (Zh(), Ni = t, wi = n, Ni.attachEvent("onpropertychange", Kh)) : e === "focusout" && Zh();
  }
  function A1(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Kl(wi);
  }
  function T1(e, t) {
    if (e === "click") return Kl(t);
  }
  function N1(e, t) {
    if (e === "input" || e === "change")
      return Kl(t);
  }
  function w1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Zt = typeof Object.is == "function" ? Object.is : w1;
  function Oi(e, t) {
    if (Zt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), i = Object.keys(t);
    if (n.length !== i.length) return !1;
    for (i = 0; i < n.length; i++) {
      var o = n[i];
      if (!Sn.call(t, o) || !Zt(e[o], t[o]))
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
  var O1 = qn && "documentMode" in document && 11 >= document.documentMode, Mr = null, bu = null, Di = null, Su = !1;
  function td(e, t, n) {
    var i = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Su || Mr == null || Mr !== Gl(i) || (i = Mr, "selectionStart" in i && yu(i) ? i = { start: i.selectionStart, end: i.selectionEnd } : (i = (i.ownerDocument && i.ownerDocument.defaultView || window).getSelection(), i = {
      anchorNode: i.anchorNode,
      anchorOffset: i.anchorOffset,
      focusNode: i.focusNode,
      focusOffset: i.focusOffset
    }), Di && Oi(Di, i) || (Di = i, i = Ls(bu, "onSelect"), 0 < i.length && (t = new Ql(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: i }), t.target = Mr)));
  }
  function Fa(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Rr = {
    animationend: Fa("Animation", "AnimationEnd"),
    animationiteration: Fa("Animation", "AnimationIteration"),
    animationstart: Fa("Animation", "AnimationStart"),
    transitionrun: Fa("Transition", "TransitionRun"),
    transitionstart: Fa("Transition", "TransitionStart"),
    transitioncancel: Fa("Transition", "TransitionCancel"),
    transitionend: Fa("Transition", "TransitionEnd")
  }, _u = {}, nd = {};
  qn && (nd = document.createElement("div").style, "AnimationEvent" in window || (delete Rr.animationend.animation, delete Rr.animationiteration.animation, delete Rr.animationstart.animation), "TransitionEvent" in window || delete Rr.transitionend.transition);
  function Xa(e) {
    if (_u[e]) return _u[e];
    if (!Rr[e]) return e;
    var t = Rr[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in nd)
        return _u[e] = t[n];
    return e;
  }
  var ad = Xa("animationend"), rd = Xa("animationiteration"), id = Xa("animationstart"), D1 = Xa("transitionrun"), M1 = Xa("transitionstart"), R1 = Xa("transitioncancel"), ld = Xa("transitionend"), sd = /* @__PURE__ */ new Map(), xu = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  xu.push("scrollEnd");
  function _n(e, t) {
    sd.set(e, t), Va(t, [e]);
  }
  var od = /* @__PURE__ */ new WeakMap();
  function cn(e, t) {
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
  var fn = [], kr = 0, Eu = 0;
  function Jl() {
    for (var e = kr, t = Eu = kr = 0; t < e; ) {
      var n = fn[t];
      fn[t++] = null;
      var i = fn[t];
      fn[t++] = null;
      var o = fn[t];
      fn[t++] = null;
      var f = fn[t];
      if (fn[t++] = null, i !== null && o !== null) {
        var _ = i.pending;
        _ === null ? o.next = o : (o.next = _.next, _.next = o), i.pending = o;
      }
      f !== 0 && ud(n, o, f);
    }
  }
  function Wl(e, t, n, i) {
    fn[kr++] = e, fn[kr++] = t, fn[kr++] = n, fn[kr++] = i, Eu |= i, e.lanes |= i, e = e.alternate, e !== null && (e.lanes |= i);
  }
  function Cu(e, t, n, i) {
    return Wl(e, t, n, i), $l(e);
  }
  function jr(e, t) {
    return Wl(e, null, null, t), $l(e);
  }
  function ud(e, t, n) {
    e.lanes |= n;
    var i = e.alternate;
    i !== null && (i.lanes |= n);
    for (var o = !1, f = e.return; f !== null; )
      f.childLanes |= n, i = f.alternate, i !== null && (i.childLanes |= n), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (o = !0)), e = f, f = f.return;
    return e.tag === 3 ? (f = e.stateNode, o && t !== null && (o = 31 - Y(n), e = f.hiddenUpdates, i = e[o], i === null ? e[o] = [t] : i.push(t), t.lane = n | 536870912), f) : null;
  }
  function $l(e) {
    if (50 < tl)
      throw tl = 0, Dc = null, Error(s(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var Lr = {};
  function k1(e, t, n, i) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Kt(e, t, n, i) {
    return new k1(e, t, n, i);
  }
  function Au(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function In(e, t) {
    var n = e.alternate;
    return n === null ? (n = Kt(
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
        ee.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case W:
          return e = Kt(31, n, t, o), e.elementType = W, e.lanes = f, e;
        case d:
          return Qa(n.children, o, f, t);
        case x:
          _ = 8, o |= 24;
          break;
        case C:
          return e = Kt(12, n, t, o | 2), e.elementType = C, e.lanes = f, e;
        case N:
          return e = Kt(13, n, t, o), e.elementType = N, e.lanes = f, e;
        case k:
          return e = Kt(19, n, t, o), e.elementType = k, e.lanes = f, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case O:
              case j:
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
              case V:
                _ = 16, i = null;
                break e;
            }
          _ = 29, n = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), i = null;
      }
    return t = Kt(_, n, t, o), t.elementType = e, t.type = i, t.lanes = f, t;
  }
  function Qa(e, t, n, i) {
    return e = Kt(7, e, i, t), e.lanes = n, e;
  }
  function Tu(e, t, n) {
    return e = Kt(6, e, null, t), e.lanes = n, e;
  }
  function Nu(e, t, n) {
    return t = Kt(
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
  var Br = [], Ur = 0, ts = null, ns = 0, hn = [], dn = 0, Za = null, Gn = 1, Vn = "";
  function Ka(e, t) {
    Br[Ur++] = ns, Br[Ur++] = ts, ts = e, ns = t;
  }
  function fd(e, t, n) {
    hn[dn++] = Gn, hn[dn++] = Vn, hn[dn++] = Za, Za = e;
    var i = Gn;
    e = Vn;
    var o = 32 - Y(i) - 1;
    i &= ~(1 << o), n += 1;
    var f = 32 - Y(t) + o;
    if (30 < f) {
      var _ = o - o % 5;
      f = (i & (1 << _) - 1).toString(32), i >>= _, o -= _, Gn = 1 << 32 - Y(t) + o | n << o | i, Vn = f + e;
    } else
      Gn = 1 << f | n << o | i, Vn = e;
  }
  function wu(e) {
    e.return !== null && (Ka(e, 1), fd(e, 1, 0));
  }
  function Ou(e) {
    for (; e === ts; )
      ts = Br[--Ur], Br[Ur] = null, ns = Br[--Ur], Br[Ur] = null;
    for (; e === Za; )
      Za = hn[--dn], hn[dn] = null, Vn = hn[--dn], hn[dn] = null, Gn = hn[--dn], hn[dn] = null;
  }
  var Lt = null, st = null, Ve = !1, Ja = null, Dn = !1, Du = Error(s(519));
  function Wa(e) {
    var t = Error(s(418, ""));
    throw ki(cn(t, e)), Du;
  }
  function hd(e) {
    var t = e.stateNode, n = e.type, i = e.memoizedProps;
    switch (t[Ot] = e, t[zt] = i, n) {
      case "dialog":
        Be("cancel", t), Be("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Be("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < al.length; n++)
          Be(al[n], t);
        break;
      case "source":
        Be("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Be("error", t), Be("load", t);
        break;
      case "details":
        Be("toggle", t);
        break;
      case "input":
        Be("invalid", t), Nh(
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
        Be("invalid", t);
        break;
      case "textarea":
        Be("invalid", t), Oh(t, i.value, i.defaultValue, i.children), Il(t);
    }
    n = i.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || i.suppressHydrationWarning === !0 || Om(t.textContent, n) ? (i.popover != null && (Be("beforetoggle", t), Be("toggle", t)), i.onScroll != null && Be("scroll", t), i.onScrollEnd != null && Be("scrollend", t), i.onClick != null && (t.onclick = Bs), t = !0) : t = !1, t || Wa(e);
  }
  function dd(e) {
    for (Lt = e.return; Lt; )
      switch (Lt.tag) {
        case 5:
        case 13:
          Dn = !1;
          return;
        case 27:
        case 3:
          Dn = !0;
          return;
        default:
          Lt = Lt.return;
      }
  }
  function Mi(e) {
    if (e !== Lt) return !1;
    if (!Ve) return dd(e), Ve = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Fc(e.type, e.memoizedProps)), n = !n), n && st && Wa(e), dd(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (n = e.data, n === "/$") {
              if (t === 0) {
                st = En(e.nextSibling);
                break e;
              }
              t--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || t++;
          e = e.nextSibling;
        }
        st = null;
      }
    } else
      t === 27 ? (t = st, wa(e.type) ? (e = Kc, Kc = null, st = e) : st = t) : st = Lt ? En(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ri() {
    st = Lt = null, Ve = !1;
  }
  function pd() {
    var e = Ja;
    return e !== null && (It === null ? It = e : It.push.apply(
      It,
      e
    ), Ja = null), e;
  }
  function ki(e) {
    Ja === null ? Ja = [e] : Ja.push(e);
  }
  var Mu = F(null), $a = null, Yn = null;
  function da(e, t, n) {
    ae(Mu, t._currentValue), t._currentValue = n;
  }
  function Fn(e) {
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
          for (var M = 0; M < t.length; M++)
            if (w.context === t[M]) {
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
  function ji(e, t, n, i) {
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
          Zt(o.pendingProps.value, _.value) || (e !== null ? e.push(w) : e = [w]);
        }
      } else if (o === Xe.current) {
        if (_ = o.alternate, _ === null) throw Error(s(387));
        _.memoizedState.memoizedState !== o.memoizedState.memoizedState && (e !== null ? e.push(ul) : e = [ul]);
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
      if (!Zt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function er(e) {
    $a = e, Yn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Dt(e) {
    return md($a, e);
  }
  function rs(e, t) {
    return $a === null && er(e), md(e, t);
  }
  function md(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Yn === null) {
      if (e === null) throw Error(s(308));
      Yn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Yn = Yn.next = t;
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
  }, L1 = r.unstable_scheduleCallback, B1 = r.unstable_NormalPriority, yt = {
    $$typeof: j,
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
  function Li(e) {
    e.refCount--, e.refCount === 0 && L1(B1, function() {
      e.controller.abort();
    });
  }
  var Bi = null, Lu = 0, zr = 0, Hr = null;
  function U1(e, t) {
    if (Bi === null) {
      var n = Bi = [];
      Lu = 0, zr = Uc(), Hr = {
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
    if (--Lu === 0 && Bi !== null) {
      Hr !== null && (Hr.status = "fulfilled");
      var e = Bi;
      Bi = null, zr = 0, Hr = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function z1(e, t) {
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
  var vd = z.S;
  z.S = function(e, t) {
    typeof t == "object" && t !== null && typeof t.then == "function" && U1(e, t), vd !== null && vd(e, t);
  };
  var tr = F(null);
  function Bu() {
    var e = tr.current;
    return e !== null ? e : tt.pooledCache;
  }
  function is(e, t) {
    t === null ? ae(tr, tr.current) : ae(tr, t.pool);
  }
  function yd() {
    var e = Bu();
    return e === null ? null : { parent: yt._currentValue, pool: e };
  }
  var Ui = Error(s(460)), bd = Error(s(474)), ls = Error(s(542)), Uu = { then: function() {
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
          if (e = tt, e !== null && 100 < e.shellSuspendCounter)
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
        throw zi = t, Ui;
    }
  }
  var zi = null;
  function xd() {
    if (zi === null) throw Error(s(459));
    var e = zi;
    return zi = null, e;
  }
  function Ed(e) {
    if (e === Ui || e === ls)
      throw Error(s(483));
  }
  var pa = !1;
  function zu(e) {
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
  function ma(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ga(e, t, n) {
    var i = e.updateQueue;
    if (i === null) return null;
    if (i = i.shared, (Ye & 2) !== 0) {
      var o = i.pending;
      return o === null ? t.next = t : (t.next = o.next, o.next = t), i.pending = t, t = $l(e), ud(e, null, n), t;
    }
    return Wl(e, i, t, n), $l(e);
  }
  function Hi(e, t, n) {
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
  function Pi() {
    if (qu) {
      var e = Hr;
      if (e !== null) throw e;
    }
  }
  function qi(e, t, n, i) {
    qu = !1;
    var o = e.updateQueue;
    pa = !1;
    var f = o.firstBaseUpdate, _ = o.lastBaseUpdate, w = o.shared.pending;
    if (w !== null) {
      o.shared.pending = null;
      var M = w, q = M.next;
      M.next = null, _ === null ? f = q : _.next = q, _ = M;
      var Z = e.alternate;
      Z !== null && (Z = Z.updateQueue, w = Z.lastBaseUpdate, w !== _ && (w === null ? Z.firstBaseUpdate = q : w.next = q, Z.lastBaseUpdate = M));
    }
    if (f !== null) {
      var $ = o.baseState;
      _ = 0, Z = q = M = null, w = f;
      do {
        var I = w.lane & -536870913, G = I !== w.lane;
        if (G ? (He & I) === I : (i & I) === I) {
          I !== 0 && I === zr && (qu = !0), Z !== null && (Z = Z.next = {
            lane: 0,
            tag: w.tag,
            payload: w.payload,
            callback: null,
            next: null
          });
          e: {
            var Se = e, ve = w;
            I = t;
            var Ke = n;
            switch (ve.tag) {
              case 1:
                if (Se = ve.payload, typeof Se == "function") {
                  $ = Se.call(Ke, $, I);
                  break e;
                }
                $ = Se;
                break e;
              case 3:
                Se.flags = Se.flags & -65537 | 128;
              case 0:
                if (Se = ve.payload, I = typeof Se == "function" ? Se.call(Ke, $, I) : Se, I == null) break e;
                $ = v({}, $, I);
                break e;
              case 2:
                pa = !0;
            }
          }
          I = w.callback, I !== null && (e.flags |= 64, G && (e.flags |= 8192), G = o.callbacks, G === null ? o.callbacks = [I] : G.push(I));
        } else
          G = {
            lane: I,
            tag: w.tag,
            payload: w.payload,
            callback: w.callback,
            next: null
          }, Z === null ? (q = Z = G, M = $) : Z = Z.next = G, _ |= I;
        if (w = w.next, w === null) {
          if (w = o.shared.pending, w === null)
            break;
          G = w, w = G.next, G.next = null, o.lastBaseUpdate = G, o.shared.pending = null;
        }
      } while (!0);
      Z === null && (M = $), o.baseState = M, o.firstBaseUpdate = q, o.lastBaseUpdate = Z, f === null && (o.shared.lanes = 0), Ca |= _, e.lanes = _, e.memoizedState = $;
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
  var Pr = F(null), os = F(0);
  function Td(e, t) {
    e = $n, ae(os, e), ae(Pr, t), $n = e | t.baseLanes;
  }
  function Iu() {
    ae(os, $n), ae(Pr, Pr.current);
  }
  function Gu() {
    $n = os.current, te(Pr), te(os);
  }
  var va = 0, Re = null, Qe = null, pt = null, us = !1, qr = !1, nr = !1, cs = 0, Ii = 0, Ir = null, H1 = 0;
  function ft() {
    throw Error(s(321));
  }
  function Vu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Zt(e[n], t[n])) return !1;
    return !0;
  }
  function Yu(e, t, n, i, o, f) {
    return va = f, Re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, z.H = e === null || e.memoizedState === null ? up : cp, nr = !1, f = n(i, o), nr = !1, qr && (f = wd(
      t,
      n,
      i,
      o
    )), Nd(e), f;
  }
  function Nd(e) {
    z.H = gs;
    var t = Qe !== null && Qe.next !== null;
    if (va = 0, pt = Qe = Re = null, us = !1, Ii = 0, Ir = null, t) throw Error(s(300));
    e === null || _t || (e = e.dependencies, e !== null && as(e) && (_t = !0));
  }
  function wd(e, t, n, i) {
    Re = e;
    var o = 0;
    do {
      if (qr && (Ir = null), Ii = 0, qr = !1, 25 <= o) throw Error(s(301));
      if (o += 1, pt = Qe = null, e.updateQueue != null) {
        var f = e.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      z.H = F1, f = t(n, i);
    } while (qr);
    return f;
  }
  function P1() {
    var e = z.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Gi(t) : t, e = e.useState()[0], (Qe !== null ? Qe.memoizedState : null) !== e && (Re.flags |= 1024), t;
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
    va = 0, pt = Qe = Re = null, qr = !1, Ii = cs = 0, Ir = null;
  }
  function Pt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return pt === null ? Re.memoizedState = pt = e : pt = pt.next = e, pt;
  }
  function mt() {
    if (Qe === null) {
      var e = Re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Qe.next;
    var t = pt === null ? Re.memoizedState : pt.next;
    if (t !== null)
      pt = t, Qe = e;
    else {
      if (e === null)
        throw Re.alternate === null ? Error(s(467)) : Error(s(310));
      Qe = e, e = {
        memoizedState: Qe.memoizedState,
        baseState: Qe.baseState,
        baseQueue: Qe.baseQueue,
        queue: Qe.queue,
        next: null
      }, pt === null ? Re.memoizedState = pt = e : pt = pt.next = e;
    }
    return pt;
  }
  function Zu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Gi(e) {
    var t = Ii;
    return Ii += 1, Ir === null && (Ir = []), e = _d(Ir, e, t), t = Re, (pt === null ? t.memoizedState : pt.next) === null && (t = t.alternate, z.H = t === null || t.memoizedState === null ? up : cp), e;
  }
  function fs(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Gi(e);
      if (e.$$typeof === j) return Dt(e);
    }
    throw Error(s(438, String(e)));
  }
  function Ku(e) {
    var t = null, n = Re.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var i = Re.alternate;
      i !== null && (i = i.updateQueue, i !== null && (i = i.memoCache, i != null && (t = {
        data: i.data.map(function(o) {
          return o.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Zu(), Re.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), i = 0; i < e; i++)
        n[i] = H;
    return t.index++, n;
  }
  function Xn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function hs(e) {
    var t = mt();
    return Ju(t, Qe, e);
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
      var w = _ = null, M = null, q = t, Z = !1;
      do {
        var $ = q.lane & -536870913;
        if ($ !== q.lane ? (He & $) === $ : (va & $) === $) {
          var I = q.revertLane;
          if (I === 0)
            M !== null && (M = M.next = {
              lane: 0,
              revertLane: 0,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }), $ === zr && (Z = !0);
          else if ((va & I) === I) {
            q = q.next, I === zr && (Z = !0);
            continue;
          } else
            $ = {
              lane: 0,
              revertLane: q.revertLane,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }, M === null ? (w = M = $, _ = f) : M = M.next = $, Re.lanes |= I, Ca |= I;
          $ = q.action, nr && n(f, $), f = q.hasEagerState ? q.eagerState : n(f, $);
        } else
          I = {
            lane: $,
            revertLane: q.revertLane,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          }, M === null ? (w = M = I, _ = f) : M = M.next = I, Re.lanes |= $, Ca |= $;
        q = q.next;
      } while (q !== null && q !== t);
      if (M === null ? _ = f : M.next = w, !Zt(f, e.memoizedState) && (_t = !0, Z && (n = Hr, n !== null)))
        throw n;
      e.memoizedState = f, e.baseState = _, e.baseQueue = M, i.lastRenderedState = f;
    }
    return o === null && (i.lanes = 0), [e.memoizedState, i.dispatch];
  }
  function Wu(e) {
    var t = mt(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var i = n.dispatch, o = n.pending, f = t.memoizedState;
    if (o !== null) {
      n.pending = null;
      var _ = o = o.next;
      do
        f = e(f, _.action), _ = _.next;
      while (_ !== o);
      Zt(f, t.memoizedState) || (_t = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), n.lastRenderedState = f;
    }
    return [f, i];
  }
  function Od(e, t, n) {
    var i = Re, o = mt(), f = Ve;
    if (f) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = t();
    var _ = !Zt(
      (Qe || o).memoizedState,
      n
    );
    _ && (o.memoizedState = n, _t = !0), o = o.queue;
    var w = Rd.bind(null, i, o, e);
    if (Vi(2048, 8, w, [e]), o.getSnapshot !== t || _ || pt !== null && pt.memoizedState.tag & 1) {
      if (i.flags |= 2048, Gr(
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
      ), tt === null) throw Error(s(349));
      f || (va & 124) !== 0 || Dd(i, t, n);
    }
    return n;
  }
  function Dd(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Re.updateQueue, t === null ? (t = Zu(), Re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
      return !Zt(e, n);
    } catch {
      return !0;
    }
  }
  function jd(e) {
    var t = jr(e, 2);
    t !== null && tn(t, e, 2);
  }
  function $u(e) {
    var t = Pt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), nr) {
        R(!0);
        try {
          n();
        } finally {
          R(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xn,
      lastRenderedState: e
    }, t;
  }
  function Ld(e, t, n, i) {
    return e.baseState = n, Ju(
      e,
      Qe,
      typeof i == "function" ? i : Xn
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
      z.T !== null ? n(!0) : f.isTransition = !1, i(f), n = t.pending, n === null ? (f.next = t.pending = f, Bd(t, f)) : (f.next = n.next, t.pending = n.next = f);
    }
  }
  function Bd(e, t) {
    var n = t.action, i = t.payload, o = e.state;
    if (t.isTransition) {
      var f = z.T, _ = {};
      z.T = _;
      try {
        var w = n(o, i), M = z.S;
        M !== null && M(_, w), Ud(e, t, w);
      } catch (q) {
        ec(e, t, q);
      } finally {
        z.T = f;
      }
    } else
      try {
        f = n(o, i), Ud(e, t, f);
      } catch (q) {
        ec(e, t, q);
      }
  }
  function Ud(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(i) {
        zd(e, t, i);
      },
      function(i) {
        return ec(e, t, i);
      }
    ) : zd(e, t, n);
  }
  function zd(e, t, n) {
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
    if (Ve) {
      var n = tt.formState;
      if (n !== null) {
        e: {
          var i = Re;
          if (Ve) {
            if (st) {
              t: {
                for (var o = st, f = Dn; o.nodeType !== 8; ) {
                  if (!f) {
                    o = null;
                    break t;
                  }
                  if (o = En(
                    o.nextSibling
                  ), o === null) {
                    o = null;
                    break t;
                  }
                }
                f = o.data, o = f === "F!" || f === "F" ? o : null;
              }
              if (o) {
                st = En(
                  o.nextSibling
                ), i = o.data === "F!";
                break e;
              }
            }
            Wa(i);
          }
          i = !1;
        }
        i && (t = n[0]);
      }
    }
    return n = Pt(), n.memoizedState = n.baseState = t, i = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Pd,
      lastRenderedState: t
    }, n.queue = i, n = lp.bind(
      null,
      Re,
      i
    ), i.dispatch = n, i = $u(!1), f = ic.bind(
      null,
      Re,
      !1,
      i.queue
    ), i = Pt(), o = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, i.queue = o, n = q1.bind(
      null,
      Re,
      o,
      f,
      n
    ), o.dispatch = n, i.memoizedState = e, [t, n, !1];
  }
  function Id(e) {
    var t = mt();
    return Gd(t, Qe, e);
  }
  function Gd(e, t, n) {
    if (t = Ju(
      e,
      t,
      Pd
    )[0], e = hs(Xn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var i = Gi(t);
      } catch (_) {
        throw _ === Ui ? ls : _;
      }
    else i = t;
    t = mt();
    var o = t.queue, f = o.dispatch;
    return n !== t.memoizedState && (Re.flags |= 2048, Gr(
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
    var t = mt(), n = Qe;
    if (n !== null)
      return Gd(t, n, e);
    mt(), t = t.memoizedState, n = mt();
    var i = n.queue.dispatch;
    return n.memoizedState = e, [t, i, !1];
  }
  function Gr(e, t, n, i) {
    return e = { tag: e, create: n, deps: i, inst: t, next: null }, t = Re.updateQueue, t === null && (t = Zu(), Re.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (i = n.next, n.next = e, e.next = i, t.lastEffect = e), e;
  }
  function ds() {
    return { destroy: void 0, resource: void 0 };
  }
  function Yd() {
    return mt().memoizedState;
  }
  function ps(e, t, n, i) {
    var o = Pt();
    i = i === void 0 ? null : i, Re.flags |= e, o.memoizedState = Gr(
      1 | t,
      ds(),
      n,
      i
    );
  }
  function Vi(e, t, n, i) {
    var o = mt();
    i = i === void 0 ? null : i;
    var f = o.memoizedState.inst;
    Qe !== null && i !== null && Vu(i, Qe.memoizedState.deps) ? o.memoizedState = Gr(t, f, n, i) : (Re.flags |= e, o.memoizedState = Gr(
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
    Vi(2048, 8, e, t);
  }
  function Qd(e, t) {
    return Vi(4, 2, e, t);
  }
  function Zd(e, t) {
    return Vi(4, 4, e, t);
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
    n = n != null ? n.concat([e]) : null, Vi(4, 4, Kd.bind(null, t, e), n);
  }
  function tc() {
  }
  function Wd(e, t) {
    var n = mt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    return t !== null && Vu(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e);
  }
  function $d(e, t) {
    var n = mt();
    t = t === void 0 ? null : t;
    var i = n.memoizedState;
    if (t !== null && Vu(t, i[1]))
      return i[0];
    if (i = e(), nr) {
      R(!0);
      try {
        e();
      } finally {
        R(!1);
      }
    }
    return n.memoizedState = [i, t], i;
  }
  function nc(e, t, n) {
    return n === void 0 || (va & 1073741824) !== 0 ? e.memoizedState = t : (e.memoizedState = n, e = nm(), Re.lanes |= e, Ca |= e, n);
  }
  function ep(e, t, n, i) {
    return Zt(n, t) ? n : Pr.current !== null ? (e = nc(e, n, i), Zt(e, t) || (_t = !0), e) : (va & 42) === 0 ? (_t = !0, e.memoizedState = n) : (e = nm(), Re.lanes |= e, Ca |= e, t);
  }
  function tp(e, t, n, i, o) {
    var f = re.p;
    re.p = f !== 0 && 8 > f ? f : 8;
    var _ = z.T, w = {};
    z.T = w, ic(e, !1, t, n);
    try {
      var M = o(), q = z.S;
      if (q !== null && q(w, M), M !== null && typeof M == "object" && typeof M.then == "function") {
        var Z = z1(
          M,
          i
        );
        Yi(
          e,
          t,
          Z,
          en(e)
        );
      } else
        Yi(
          e,
          t,
          i,
          en(e)
        );
    } catch ($) {
      Yi(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: $ },
        en()
      );
    } finally {
      re.p = f, z.T = _;
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
      ce,
      n === null ? G1 : function() {
        return ap(e), n(i);
      }
    );
  }
  function np(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ce,
      baseState: ce,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xn,
        lastRenderedState: ce
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
        lastRenderedReducer: Xn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function ap(e) {
    var t = np(e).next.queue;
    Yi(e, t, {}, en());
  }
  function rc() {
    return Dt(ul);
  }
  function rp() {
    return mt().memoizedState;
  }
  function ip() {
    return mt().memoizedState;
  }
  function V1(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = en();
          e = ma(n);
          var i = ga(t, e, n);
          i !== null && (tn(i, t, n), Hi(i, t, n)), t = { cache: ju() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Y1(e, t, n) {
    var i = en();
    n = {
      lane: i,
      revertLane: 0,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ms(e) ? sp(t, n) : (n = Cu(e, t, n, i), n !== null && (tn(n, e, i), op(n, t, i)));
  }
  function lp(e, t, n) {
    var i = en();
    Yi(e, t, n, i);
  }
  function Yi(e, t, n, i) {
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
          if (o.hasEagerState = !0, o.eagerState = w, Zt(w, _))
            return Wl(e, t, o, 0), tt === null && Jl(), !1;
        } catch {
        } finally {
        }
      if (n = Cu(e, t, o, i), n !== null)
        return tn(n, e, i), op(n, t, i), !0;
    }
    return !1;
  }
  function ic(e, t, n, i) {
    if (i = {
      lane: 2,
      revertLane: Uc(),
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
      ), t !== null && tn(t, e, 2);
  }
  function ms(e) {
    var t = e.alternate;
    return e === Re || t !== null && t === Re;
  }
  function sp(e, t) {
    qr = us = !0;
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
    readContext: Dt,
    use: fs,
    useCallback: ft,
    useContext: ft,
    useEffect: ft,
    useImperativeHandle: ft,
    useLayoutEffect: ft,
    useInsertionEffect: ft,
    useMemo: ft,
    useReducer: ft,
    useRef: ft,
    useState: ft,
    useDebugValue: ft,
    useDeferredValue: ft,
    useTransition: ft,
    useSyncExternalStore: ft,
    useId: ft,
    useHostTransitionStatus: ft,
    useFormState: ft,
    useActionState: ft,
    useOptimistic: ft,
    useMemoCache: ft,
    useCacheRefresh: ft
  }, up = {
    readContext: Dt,
    use: fs,
    useCallback: function(e, t) {
      return Pt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Dt,
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
      var n = Pt();
      t = t === void 0 ? null : t;
      var i = e();
      if (nr) {
        R(!0);
        try {
          e();
        } finally {
          R(!1);
        }
      }
      return n.memoizedState = [i, t], i;
    },
    useReducer: function(e, t, n) {
      var i = Pt();
      if (n !== void 0) {
        var o = n(t);
        if (nr) {
          R(!0);
          try {
            n(t);
          } finally {
            R(!1);
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
        Re,
        e
      ), [i.memoizedState, e];
    },
    useRef: function(e) {
      var t = Pt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = $u(e);
      var t = e.queue, n = lp.bind(null, Re, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: tc,
    useDeferredValue: function(e, t) {
      var n = Pt();
      return nc(n, e, t);
    },
    useTransition: function() {
      var e = $u(!1);
      return e = tp.bind(
        null,
        Re,
        e.queue,
        !0,
        !1
      ), Pt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var i = Re, o = Pt();
      if (Ve) {
        if (n === void 0)
          throw Error(s(407));
        n = n();
      } else {
        if (n = t(), tt === null)
          throw Error(s(349));
        (He & 124) !== 0 || Dd(i, t, n);
      }
      o.memoizedState = n;
      var f = { value: n, getSnapshot: t };
      return o.queue = f, Fd(Rd.bind(null, i, f, e), [
        e
      ]), i.flags |= 2048, Gr(
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
      var e = Pt(), t = tt.identifierPrefix;
      if (Ve) {
        var n = Vn, i = Gn;
        n = (i & ~(1 << 32 - Y(i) - 1)).toString(32) + n, t = "«" + t + "R" + n, n = cs++, 0 < n && (t += "H" + n.toString(32)), t += "»";
      } else
        n = H1++, t = "«" + t + "r" + n.toString(32) + "»";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: rc,
    useFormState: qd,
    useActionState: qd,
    useOptimistic: function(e) {
      var t = Pt();
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
        Re,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Ku,
    useCacheRefresh: function() {
      return Pt().memoizedState = V1.bind(
        null,
        Re
      );
    }
  }, cp = {
    readContext: Dt,
    use: fs,
    useCallback: Wd,
    useContext: Dt,
    useEffect: Xd,
    useImperativeHandle: Jd,
    useInsertionEffect: Qd,
    useLayoutEffect: Zd,
    useMemo: $d,
    useReducer: hs,
    useRef: Yd,
    useState: function() {
      return hs(Xn);
    },
    useDebugValue: tc,
    useDeferredValue: function(e, t) {
      var n = mt();
      return ep(
        n,
        Qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = hs(Xn)[0], t = mt().memoizedState;
      return [
        typeof e == "boolean" ? e : Gi(e),
        t
      ];
    },
    useSyncExternalStore: Od,
    useId: rp,
    useHostTransitionStatus: rc,
    useFormState: Id,
    useActionState: Id,
    useOptimistic: function(e, t) {
      var n = mt();
      return Ld(n, Qe, e, t);
    },
    useMemoCache: Ku,
    useCacheRefresh: ip
  }, F1 = {
    readContext: Dt,
    use: fs,
    useCallback: Wd,
    useContext: Dt,
    useEffect: Xd,
    useImperativeHandle: Jd,
    useInsertionEffect: Qd,
    useLayoutEffect: Zd,
    useMemo: $d,
    useReducer: Wu,
    useRef: Yd,
    useState: function() {
      return Wu(Xn);
    },
    useDebugValue: tc,
    useDeferredValue: function(e, t) {
      var n = mt();
      return Qe === null ? nc(n, e, t) : ep(
        n,
        Qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Wu(Xn)[0], t = mt().memoizedState;
      return [
        typeof e == "boolean" ? e : Gi(e),
        t
      ];
    },
    useSyncExternalStore: Od,
    useId: rp,
    useHostTransitionStatus: rc,
    useFormState: Vd,
    useActionState: Vd,
    useOptimistic: function(e, t) {
      var n = mt();
      return Qe !== null ? Ld(n, Qe, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Ku,
    useCacheRefresh: ip
  }, Vr = null, Fi = 0;
  function vs(e) {
    var t = Fi;
    return Fi += 1, Vr === null && (Vr = []), _d(Vr, e, t);
  }
  function Xi(e, t) {
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
    function t(U, B) {
      if (e) {
        var P = U.deletions;
        P === null ? (U.deletions = [B], U.flags |= 16) : P.push(B);
      }
    }
    function n(U, B) {
      if (!e) return null;
      for (; B !== null; )
        t(U, B), B = B.sibling;
      return null;
    }
    function i(U) {
      for (var B = /* @__PURE__ */ new Map(); U !== null; )
        U.key !== null ? B.set(U.key, U) : B.set(U.index, U), U = U.sibling;
      return B;
    }
    function o(U, B) {
      return U = In(U, B), U.index = 0, U.sibling = null, U;
    }
    function f(U, B, P) {
      return U.index = P, e ? (P = U.alternate, P !== null ? (P = P.index, P < B ? (U.flags |= 67108866, B) : P) : (U.flags |= 67108866, B)) : (U.flags |= 1048576, B);
    }
    function _(U) {
      return e && U.alternate === null && (U.flags |= 67108866), U;
    }
    function w(U, B, P, K) {
      return B === null || B.tag !== 6 ? (B = Tu(P, U.mode, K), B.return = U, B) : (B = o(B, P), B.return = U, B);
    }
    function M(U, B, P, K) {
      var ue = P.type;
      return ue === d ? Z(
        U,
        B,
        P.props.children,
        K,
        P.key
      ) : B !== null && (B.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === V && fp(ue) === B.type) ? (B = o(B, P.props), Xi(B, P), B.return = U, B) : (B = es(
        P.type,
        P.key,
        P.props,
        null,
        U.mode,
        K
      ), Xi(B, P), B.return = U, B);
    }
    function q(U, B, P, K) {
      return B === null || B.tag !== 4 || B.stateNode.containerInfo !== P.containerInfo || B.stateNode.implementation !== P.implementation ? (B = Nu(P, U.mode, K), B.return = U, B) : (B = o(B, P.children || []), B.return = U, B);
    }
    function Z(U, B, P, K, ue) {
      return B === null || B.tag !== 7 ? (B = Qa(
        P,
        U.mode,
        K,
        ue
      ), B.return = U, B) : (B = o(B, P), B.return = U, B);
    }
    function $(U, B, P) {
      if (typeof B == "string" && B !== "" || typeof B == "number" || typeof B == "bigint")
        return B = Tu(
          "" + B,
          U.mode,
          P
        ), B.return = U, B;
      if (typeof B == "object" && B !== null) {
        switch (B.$$typeof) {
          case g:
            return P = es(
              B.type,
              B.key,
              B.props,
              null,
              U.mode,
              P
            ), Xi(P, B), P.return = U, P;
          case y:
            return B = Nu(
              B,
              U.mode,
              P
            ), B.return = U, B;
          case V:
            var K = B._init;
            return B = K(B._payload), $(U, B, P);
        }
        if (de(B) || Q(B))
          return B = Qa(
            B,
            U.mode,
            P,
            null
          ), B.return = U, B;
        if (typeof B.then == "function")
          return $(U, vs(B), P);
        if (B.$$typeof === j)
          return $(
            U,
            rs(U, B),
            P
          );
        ys(U, B);
      }
      return null;
    }
    function I(U, B, P, K) {
      var ue = B !== null ? B.key : null;
      if (typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint")
        return ue !== null ? null : w(U, B, "" + P, K);
      if (typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case g:
            return P.key === ue ? M(U, B, P, K) : null;
          case y:
            return P.key === ue ? q(U, B, P, K) : null;
          case V:
            return ue = P._init, P = ue(P._payload), I(U, B, P, K);
        }
        if (de(P) || Q(P))
          return ue !== null ? null : Z(U, B, P, K, null);
        if (typeof P.then == "function")
          return I(
            U,
            B,
            vs(P),
            K
          );
        if (P.$$typeof === j)
          return I(
            U,
            B,
            rs(U, P),
            K
          );
        ys(U, P);
      }
      return null;
    }
    function G(U, B, P, K, ue) {
      if (typeof K == "string" && K !== "" || typeof K == "number" || typeof K == "bigint")
        return U = U.get(P) || null, w(B, U, "" + K, ue);
      if (typeof K == "object" && K !== null) {
        switch (K.$$typeof) {
          case g:
            return U = U.get(
              K.key === null ? P : K.key
            ) || null, M(B, U, K, ue);
          case y:
            return U = U.get(
              K.key === null ? P : K.key
            ) || null, q(B, U, K, ue);
          case V:
            var ke = K._init;
            return K = ke(K._payload), G(
              U,
              B,
              P,
              K,
              ue
            );
        }
        if (de(K) || Q(K))
          return U = U.get(P) || null, Z(B, U, K, ue, null);
        if (typeof K.then == "function")
          return G(
            U,
            B,
            P,
            vs(K),
            ue
          );
        if (K.$$typeof === j)
          return G(
            U,
            B,
            P,
            rs(B, K),
            ue
          );
        ys(B, K);
      }
      return null;
    }
    function Se(U, B, P, K) {
      for (var ue = null, ke = null, pe = B, ye = B = 0, Et = null; pe !== null && ye < P.length; ye++) {
        pe.index > ye ? (Et = pe, pe = null) : Et = pe.sibling;
        var qe = I(
          U,
          pe,
          P[ye],
          K
        );
        if (qe === null) {
          pe === null && (pe = Et);
          break;
        }
        e && pe && qe.alternate === null && t(U, pe), B = f(qe, B, ye), ke === null ? ue = qe : ke.sibling = qe, ke = qe, pe = Et;
      }
      if (ye === P.length)
        return n(U, pe), Ve && Ka(U, ye), ue;
      if (pe === null) {
        for (; ye < P.length; ye++)
          pe = $(U, P[ye], K), pe !== null && (B = f(
            pe,
            B,
            ye
          ), ke === null ? ue = pe : ke.sibling = pe, ke = pe);
        return Ve && Ka(U, ye), ue;
      }
      for (pe = i(pe); ye < P.length; ye++)
        Et = G(
          pe,
          U,
          ye,
          P[ye],
          K
        ), Et !== null && (e && Et.alternate !== null && pe.delete(
          Et.key === null ? ye : Et.key
        ), B = f(
          Et,
          B,
          ye
        ), ke === null ? ue = Et : ke.sibling = Et, ke = Et);
      return e && pe.forEach(function(ka) {
        return t(U, ka);
      }), Ve && Ka(U, ye), ue;
    }
    function ve(U, B, P, K) {
      if (P == null) throw Error(s(151));
      for (var ue = null, ke = null, pe = B, ye = B = 0, Et = null, qe = P.next(); pe !== null && !qe.done; ye++, qe = P.next()) {
        pe.index > ye ? (Et = pe, pe = null) : Et = pe.sibling;
        var ka = I(U, pe, qe.value, K);
        if (ka === null) {
          pe === null && (pe = Et);
          break;
        }
        e && pe && ka.alternate === null && t(U, pe), B = f(ka, B, ye), ke === null ? ue = ka : ke.sibling = ka, ke = ka, pe = Et;
      }
      if (qe.done)
        return n(U, pe), Ve && Ka(U, ye), ue;
      if (pe === null) {
        for (; !qe.done; ye++, qe = P.next())
          qe = $(U, qe.value, K), qe !== null && (B = f(qe, B, ye), ke === null ? ue = qe : ke.sibling = qe, ke = qe);
        return Ve && Ka(U, ye), ue;
      }
      for (pe = i(pe); !qe.done; ye++, qe = P.next())
        qe = G(pe, U, ye, qe.value, K), qe !== null && (e && qe.alternate !== null && pe.delete(qe.key === null ? ye : qe.key), B = f(qe, B, ye), ke === null ? ue = qe : ke.sibling = qe, ke = qe);
      return e && pe.forEach(function(X0) {
        return t(U, X0);
      }), Ve && Ka(U, ye), ue;
    }
    function Ke(U, B, P, K) {
      if (typeof P == "object" && P !== null && P.type === d && P.key === null && (P = P.props.children), typeof P == "object" && P !== null) {
        switch (P.$$typeof) {
          case g:
            e: {
              for (var ue = P.key; B !== null; ) {
                if (B.key === ue) {
                  if (ue = P.type, ue === d) {
                    if (B.tag === 7) {
                      n(
                        U,
                        B.sibling
                      ), K = o(
                        B,
                        P.props.children
                      ), K.return = U, U = K;
                      break e;
                    }
                  } else if (B.elementType === ue || typeof ue == "object" && ue !== null && ue.$$typeof === V && fp(ue) === B.type) {
                    n(
                      U,
                      B.sibling
                    ), K = o(B, P.props), Xi(K, P), K.return = U, U = K;
                    break e;
                  }
                  n(U, B);
                  break;
                } else t(U, B);
                B = B.sibling;
              }
              P.type === d ? (K = Qa(
                P.props.children,
                U.mode,
                K,
                P.key
              ), K.return = U, U = K) : (K = es(
                P.type,
                P.key,
                P.props,
                null,
                U.mode,
                K
              ), Xi(K, P), K.return = U, U = K);
            }
            return _(U);
          case y:
            e: {
              for (ue = P.key; B !== null; ) {
                if (B.key === ue)
                  if (B.tag === 4 && B.stateNode.containerInfo === P.containerInfo && B.stateNode.implementation === P.implementation) {
                    n(
                      U,
                      B.sibling
                    ), K = o(B, P.children || []), K.return = U, U = K;
                    break e;
                  } else {
                    n(U, B);
                    break;
                  }
                else t(U, B);
                B = B.sibling;
              }
              K = Nu(P, U.mode, K), K.return = U, U = K;
            }
            return _(U);
          case V:
            return ue = P._init, P = ue(P._payload), Ke(
              U,
              B,
              P,
              K
            );
        }
        if (de(P))
          return Se(
            U,
            B,
            P,
            K
          );
        if (Q(P)) {
          if (ue = Q(P), typeof ue != "function") throw Error(s(150));
          return P = ue.call(P), ve(
            U,
            B,
            P,
            K
          );
        }
        if (typeof P.then == "function")
          return Ke(
            U,
            B,
            vs(P),
            K
          );
        if (P.$$typeof === j)
          return Ke(
            U,
            B,
            rs(U, P),
            K
          );
        ys(U, P);
      }
      return typeof P == "string" && P !== "" || typeof P == "number" || typeof P == "bigint" ? (P = "" + P, B !== null && B.tag === 6 ? (n(U, B.sibling), K = o(B, P), K.return = U, U = K) : (n(U, B), K = Tu(P, U.mode, K), K.return = U, U = K), _(U)) : n(U, B);
    }
    return function(U, B, P, K) {
      try {
        Fi = 0;
        var ue = Ke(
          U,
          B,
          P,
          K
        );
        return Vr = null, ue;
      } catch (pe) {
        if (pe === Ui || pe === ls) throw pe;
        var ke = Kt(29, pe, null, U.mode);
        return ke.lanes = K, ke.return = U, ke;
      } finally {
      }
    };
  }
  var Yr = hp(!0), dp = hp(!1), pn = F(null), Mn = null;
  function ya(e) {
    var t = e.alternate;
    ae(bt, bt.current & 1), ae(pn, e), Mn === null && (t === null || Pr.current !== null || t.memoizedState !== null) && (Mn = e);
  }
  function pp(e) {
    if (e.tag === 22) {
      if (ae(bt, bt.current), ae(pn, e), Mn === null) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Mn = e);
      }
    } else ba();
  }
  function ba() {
    ae(bt, bt.current), ae(pn, pn.current);
  }
  function Qn(e) {
    te(pn), Mn === e && (Mn = null), te(bt);
  }
  var bt = F(0);
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
      var i = en(), o = ma(i);
      o.payload = t, n != null && (o.callback = n), t = ga(e, o, i), t !== null && (tn(t, e, i), Hi(t, e, i));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var i = en(), o = ma(i);
      o.tag = 1, o.payload = t, n != null && (o.callback = n), t = ga(e, o, i), t !== null && (tn(t, e, i), Hi(t, e, i));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = en(), i = ma(n);
      i.tag = 2, t != null && (i.callback = t), t = ga(e, i, n), t !== null && (tn(t, e, n), Hi(t, e, n));
    }
  };
  function mp(e, t, n, i, o, f, _) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(i, f, _) : t.prototype && t.prototype.isPureReactComponent ? !Oi(n, i) || !Oi(o, f) : !0;
  }
  function gp(e, t, n, i) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && sc.enqueueReplaceState(t, t.state, null);
  }
  function ar(e, t) {
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
    return n = ma(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      _s(e, t);
    }, n;
  }
  function _p(e) {
    return e = ma(e), e.tag = 3, e;
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
      Sp(t, n, i), typeof o != "function" && (Aa === null ? Aa = /* @__PURE__ */ new Set([this]) : Aa.add(this));
      var w = i.stack;
      this.componentDidCatch(i.value, {
        componentStack: w !== null ? w : ""
      });
    });
  }
  function X1(e, t, n, i, o) {
    if (n.flags |= 32768, i !== null && typeof i == "object" && typeof i.then == "function") {
      if (t = n.alternate, t !== null && ji(
        t,
        n,
        o,
        !0
      ), n = pn.current, n !== null) {
        switch (n.tag) {
          case 13:
            return Mn === null ? Rc() : n.alternate === null && ot === 0 && (ot = 3), n.flags &= -257, n.flags |= 65536, n.lanes = o, i === Uu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([i]) : t.add(i), jc(e, i, o)), !1;
          case 22:
            return n.flags |= 65536, i === Uu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([i])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([i]) : n.add(i)), jc(e, i, o)), !1;
        }
        throw Error(s(435, n.tag));
      }
      return jc(e, i, o), Rc(), !1;
    }
    if (Ve)
      return t = pn.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = o, i !== Du && (e = Error(s(422), { cause: i }), ki(cn(e, n)))) : (i !== Du && (t = Error(s(423), {
        cause: i
      }), ki(
        cn(t, n)
      )), e = e.current.alternate, e.flags |= 65536, o &= -o, e.lanes |= o, i = cn(i, n), o = oc(
        e.stateNode,
        i,
        o
      ), Pu(e, o), ot !== 4 && (ot = 2)), !1;
    var f = Error(s(520), { cause: i });
    if (f = cn(f, n), el === null ? el = [f] : el.push(f), ot !== 4 && (ot = 2), t === null) return !0;
    i = cn(i, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = o & -o, n.lanes |= e, e = oc(n.stateNode, i, e), Pu(n, e), !1;
        case 1:
          if (t = n.type, f = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (Aa === null || !Aa.has(f))))
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
  var Ep = Error(s(461)), _t = !1;
  function At(e, t, n, i) {
    t.child = e === null ? dp(t, null, n, i) : Yr(
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
    return er(t), i = Yu(
      e,
      t,
      n,
      _,
      f,
      o
    ), w = Fu(), e !== null && !_t ? (Xu(e, t, o), Zn(e, t, o)) : (Ve && w && wu(t), t.flags |= 1, At(e, t, i, o), t.child);
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
      if (n = n.compare, n = n !== null ? n : Oi, n(_, i) && e.ref === t.ref)
        return Zn(e, t, o);
    }
    return t.flags |= 1, e = In(f, i), e.ref = t.ref, e.return = t, t.child = e;
  }
  function Tp(e, t, n, i, o) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (Oi(f, i) && e.ref === t.ref)
        if (_t = !1, t.pendingProps = i = f, gc(e, o))
          (e.flags & 131072) !== 0 && (_t = !0);
        else
          return t.lanes = e.lanes, Zn(e, t, o);
    }
    return uc(
      e,
      t,
      n,
      i,
      o
    );
  }
  function Np(e, t, n) {
    var i = t.pendingProps, o = i.children, f = e !== null ? e.memoizedState : null;
    if (i.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (i = f !== null ? f.baseLanes | n : n, e !== null) {
          for (o = t.child = e.child, f = 0; o !== null; )
            f = f | o.lanes | o.childLanes, o = o.sibling;
          t.childLanes = f & ~i;
        } else t.childLanes = 0, t.child = null;
        return wp(
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
        return t.lanes = t.childLanes = 536870912, wp(
          e,
          t,
          f !== null ? f.baseLanes | n : n,
          n
        );
    } else
      f !== null ? (is(t, f.cachePool), Td(t, f), ba(), t.memoizedState = null) : (e !== null && is(t, null), Iu(), ba());
    return At(e, t, o, n), t.child;
  }
  function wp(e, t, n, i) {
    var o = Bu();
    return o = o === null ? null : { parent: yt._currentValue, pool: o }, t.memoizedState = {
      baseLanes: n,
      cachePool: o
    }, e !== null && is(t, null), Iu(), pp(t), e !== null && ji(e, t, i, !0), null;
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
    return er(t), n = Yu(
      e,
      t,
      n,
      i,
      void 0,
      o
    ), i = Fu(), e !== null && !_t ? (Xu(e, t, o), Zn(e, t, o)) : (Ve && i && wu(t), t.flags |= 1, At(e, t, n, o), t.child);
  }
  function Op(e, t, n, i, o, f) {
    return er(t), t.updateQueue = null, n = wd(
      t,
      i,
      n,
      o
    ), Nd(e), i = Fu(), e !== null && !_t ? (Xu(e, t, f), Zn(e, t, f)) : (Ve && i && wu(t), t.flags |= 1, At(e, t, n, f), t.child);
  }
  function Dp(e, t, n, i, o) {
    if (er(t), t.stateNode === null) {
      var f = Lr, _ = n.contextType;
      typeof _ == "object" && _ !== null && (f = Dt(_)), f = new n(i, f), t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = sc, t.stateNode = f, f._reactInternals = t, f = t.stateNode, f.props = i, f.state = t.memoizedState, f.refs = {}, zu(t), _ = n.contextType, f.context = typeof _ == "object" && _ !== null ? Dt(_) : Lr, f.state = t.memoizedState, _ = n.getDerivedStateFromProps, typeof _ == "function" && (lc(
        t,
        n,
        _,
        i
      ), f.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (_ = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), _ !== f.state && sc.enqueueReplaceState(f, f.state, null), qi(t, i, f, o), Pi(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), i = !0;
    } else if (e === null) {
      f = t.stateNode;
      var w = t.memoizedProps, M = ar(n, w);
      f.props = M;
      var q = f.context, Z = n.contextType;
      _ = Lr, typeof Z == "object" && Z !== null && (_ = Dt(Z));
      var $ = n.getDerivedStateFromProps;
      Z = typeof $ == "function" || typeof f.getSnapshotBeforeUpdate == "function", w = t.pendingProps !== w, Z || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (w || q !== _) && gp(
        t,
        f,
        i,
        _
      ), pa = !1;
      var I = t.memoizedState;
      f.state = I, qi(t, i, f, o), Pi(), q = t.memoizedState, w || I !== q || pa ? (typeof $ == "function" && (lc(
        t,
        n,
        $,
        i
      ), q = t.memoizedState), (M = pa || mp(
        t,
        n,
        M,
        i,
        I,
        q,
        _
      )) ? (Z || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = i, t.memoizedState = q), f.props = i, f.state = q, f.context = _, i = M) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), i = !1);
    } else {
      f = t.stateNode, Hu(e, t), _ = t.memoizedProps, Z = ar(n, _), f.props = Z, $ = t.pendingProps, I = f.context, q = n.contextType, M = Lr, typeof q == "object" && q !== null && (M = Dt(q)), w = n.getDerivedStateFromProps, (q = typeof w == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (_ !== $ || I !== M) && gp(
        t,
        f,
        i,
        M
      ), pa = !1, I = t.memoizedState, f.state = I, qi(t, i, f, o), Pi();
      var G = t.memoizedState;
      _ !== $ || I !== G || pa || e !== null && e.dependencies !== null && as(e.dependencies) ? (typeof w == "function" && (lc(
        t,
        n,
        w,
        i
      ), G = t.memoizedState), (Z = pa || mp(
        t,
        n,
        Z,
        i,
        I,
        G,
        M
      ) || e !== null && e.dependencies !== null && as(e.dependencies)) ? (q || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(i, G, M), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
        i,
        G,
        M
      )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || _ === e.memoizedProps && I === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || _ === e.memoizedProps && I === e.memoizedState || (t.flags |= 1024), t.memoizedProps = i, t.memoizedState = G), f.props = i, f.state = G, f.context = M, i = Z) : (typeof f.componentDidUpdate != "function" || _ === e.memoizedProps && I === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || _ === e.memoizedProps && I === e.memoizedState || (t.flags |= 1024), i = !1);
    }
    return f = i, xs(e, t), i = (t.flags & 128) !== 0, f || i ? (f = t.stateNode, n = i && typeof n.getDerivedStateFromError != "function" ? null : f.render(), t.flags |= 1, e !== null && i ? (t.child = Yr(
      t,
      e.child,
      null,
      o
    ), t.child = Yr(
      t,
      null,
      n,
      o
    )) : At(e, t, n, o), t.memoizedState = f.state, e = t.child) : e = Zn(
      e,
      t,
      o
    ), e;
  }
  function Mp(e, t, n, i) {
    return Ri(), t.flags |= 256, At(e, t, n, i), t.child;
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
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= mn), e;
  }
  function Rp(e, t, n) {
    var i = t.pendingProps, o = !1, f = (t.flags & 128) !== 0, _;
    if ((_ = f) || (_ = e !== null && e.memoizedState === null ? !1 : (bt.current & 2) !== 0), _ && (o = !0, t.flags &= -129), _ = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ve) {
        if (o ? ya(t) : ba(), Ve) {
          var w = st, M;
          if (M = w) {
            e: {
              for (M = w, w = Dn; M.nodeType !== 8; ) {
                if (!w) {
                  w = null;
                  break e;
                }
                if (M = En(
                  M.nextSibling
                ), M === null) {
                  w = null;
                  break e;
                }
              }
              w = M;
            }
            w !== null ? (t.memoizedState = {
              dehydrated: w,
              treeContext: Za !== null ? { id: Gn, overflow: Vn } : null,
              retryLane: 536870912,
              hydrationErrors: null
            }, M = Kt(
              18,
              null,
              null,
              0
            ), M.stateNode = w, M.return = t, t.child = M, Lt = t, st = null, M = !0) : M = !1;
          }
          M || Wa(t);
        }
        if (w = t.memoizedState, w !== null && (w = w.dehydrated, w !== null))
          return Zc(w) ? t.lanes = 32 : t.lanes = 536870912, null;
        Qn(t);
      }
      return w = i.children, i = i.fallback, o ? (ba(), o = t.mode, w = Es(
        { mode: "hidden", children: w },
        o
      ), i = Qa(
        i,
        o,
        n,
        null
      ), w.return = t, i.return = t, w.sibling = i, t.child = w, o = t.child, o.memoizedState = fc(n), o.childLanes = hc(
        e,
        _,
        n
      ), t.memoizedState = cc, i) : (ya(t), dc(t, w));
    }
    if (M = e.memoizedState, M !== null && (w = M.dehydrated, w !== null)) {
      if (f)
        t.flags & 256 ? (ya(t), t.flags &= -257, t = pc(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (ba(), t.child = e.child, t.flags |= 128, t = null) : (ba(), o = i.fallback, w = t.mode, i = Es(
          { mode: "visible", children: i.children },
          w
        ), o = Qa(
          o,
          w,
          n,
          null
        ), o.flags |= 2, i.return = t, o.return = t, i.sibling = o, t.child = i, Yr(
          t,
          e.child,
          null,
          n
        ), i = t.child, i.memoizedState = fc(n), i.childLanes = hc(
          e,
          _,
          n
        ), t.memoizedState = cc, t = o);
      else if (ya(t), Zc(w)) {
        if (_ = w.nextSibling && w.nextSibling.dataset, _) var q = _.dgst;
        _ = q, i = Error(s(419)), i.stack = "", i.digest = _, ki({ value: i, source: null, stack: null }), t = pc(
          e,
          t,
          n
        );
      } else if (_t || ji(e, t, n, !1), _ = (n & e.childLanes) !== 0, _t || _) {
        if (_ = tt, _ !== null && (i = n & -n, i = (i & 42) !== 0 ? 1 : Ko(i), i = (i & (_.suspendedLanes | n)) !== 0 ? 0 : i, i !== 0 && i !== M.retryLane))
          throw M.retryLane = i, jr(e, i), tn(_, e, i), Ep;
        w.data === "$?" || Rc(), t = pc(
          e,
          t,
          n
        );
      } else
        w.data === "$?" ? (t.flags |= 192, t.child = e.child, t = null) : (e = M.treeContext, st = En(
          w.nextSibling
        ), Lt = t, Ve = !0, Ja = null, Dn = !1, e !== null && (hn[dn++] = Gn, hn[dn++] = Vn, hn[dn++] = Za, Gn = e.id, Vn = e.overflow, Za = t), t = dc(
          t,
          i.children
        ), t.flags |= 4096);
      return t;
    }
    return o ? (ba(), o = i.fallback, w = t.mode, M = e.child, q = M.sibling, i = In(M, {
      mode: "hidden",
      children: i.children
    }), i.subtreeFlags = M.subtreeFlags & 65011712, q !== null ? o = In(q, o) : (o = Qa(
      o,
      w,
      n,
      null
    ), o.flags |= 2), o.return = t, i.return = t, i.sibling = o, t.child = i, i = o, o = t.child, w = e.child.memoizedState, w === null ? w = fc(n) : (M = w.cachePool, M !== null ? (q = yt._currentValue, M = M.parent !== q ? { parent: q, pool: q } : M) : M = yd(), w = {
      baseLanes: w.baseLanes | n,
      cachePool: M
    }), o.memoizedState = w, o.childLanes = hc(
      e,
      _,
      n
    ), t.memoizedState = cc, i) : (ya(t), n = e.child, e = n.sibling, n = In(n, {
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
    return e = Kt(22, e, null, t), e.lanes = 0, e.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }, e;
  }
  function pc(e, t, n) {
    return Yr(t, e.child, null, n), e = dc(
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
    if (At(e, t, i.children, n), i = bt.current, (i & 2) !== 0)
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
    switch (ae(bt, i), o) {
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
  function Zn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Ca |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (ji(
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
      for (e = t.child, n = In(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = In(e, e.pendingProps), n.return = t;
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
        Ae(t, t.stateNode.containerInfo), da(t, yt, e.memoizedState.cache), Ri();
        break;
      case 27:
      case 5:
        ua(t);
        break;
      case 4:
        Ae(t, t.stateNode.containerInfo);
        break;
      case 10:
        da(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 13:
        var i = t.memoizedState;
        if (i !== null)
          return i.dehydrated !== null ? (ya(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? Rp(e, t, n) : (ya(t), e = Zn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        ya(t);
        break;
      case 19:
        var o = (e.flags & 128) !== 0;
        if (i = (n & t.childLanes) !== 0, i || (ji(
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
        if (o = t.memoizedState, o !== null && (o.rendering = null, o.tail = null, o.lastEffect = null), ae(bt, bt.current), i) break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, Np(e, t, n);
      case 24:
        da(t, yt, e.memoizedState.cache);
    }
    return Zn(e, t, n);
  }
  function Lp(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        _t = !0;
      else {
        if (!gc(e, n) && (t.flags & 128) === 0)
          return _t = !1, Q1(
            e,
            t,
            n
          );
        _t = (e.flags & 131072) !== 0;
      }
    else
      _t = !1, Ve && (t.flags & 1048576) !== 0 && fd(t, ns, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          e = t.pendingProps;
          var i = t.elementType, o = i._init;
          if (i = o(i._payload), t.type = i, typeof i == "function")
            Au(i) ? (e = ar(i, e), t.tag = 1, t = Dp(
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
        return i = t.type, o = ar(
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
          if (Ae(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          i = t.pendingProps;
          var f = t.memoizedState;
          o = f.element, Hu(e, t), qi(t, i, null, n);
          var _ = t.memoizedState;
          if (i = _.cache, da(t, yt, i), i !== f.cache && ku(
            t,
            [yt],
            n,
            !0
          ), Pi(), i = _.element, f.isDehydrated)
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
              o = cn(
                Error(s(424)),
                t
              ), ki(o), t = Mp(
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
              for (st = En(e.firstChild), Lt = t, Ve = !0, Ja = null, Dn = !0, n = dp(
                t,
                null,
                i,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (Ri(), i === o) {
              t = Zn(
                e,
                t,
                n
              );
              break e;
            }
            At(
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
        )) ? t.memoizedState = n : Ve || (n = t.type, e = t.pendingProps, i = Us(
          se.current
        ).createElement(n), i[Ot] = t, i[zt] = e, Nt(i, n, e), St(i), t.stateNode = i) : t.memoizedState = Hm(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ua(t), e === null && Ve && (i = t.stateNode = Bm(
          t.type,
          t.pendingProps,
          se.current
        ), Lt = t, Dn = !0, o = st, wa(t.type) ? (Kc = o, st = En(
          i.firstChild
        )) : st = o), At(
          e,
          t,
          t.pendingProps.children,
          n
        ), xs(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ve && ((o = i = st) && (i = x0(
          i,
          t.type,
          t.pendingProps,
          Dn
        ), i !== null ? (t.stateNode = i, Lt = t, st = En(
          i.firstChild
        ), Dn = !1, o = !0) : o = !1), o || Wa(t)), ua(t), o = t.type, f = t.pendingProps, _ = e !== null ? e.memoizedProps : null, i = f.children, Fc(o, f) ? i = null : _ !== null && Fc(o, _) && (t.flags |= 32), t.memoizedState !== null && (o = Yu(
          e,
          t,
          P1,
          null,
          null,
          n
        ), ul._currentValue = o), xs(e, t), At(e, t, i, n), t.child;
      case 6:
        return e === null && Ve && ((e = n = st) && (n = E0(
          n,
          t.pendingProps,
          Dn
        ), n !== null ? (t.stateNode = n, Lt = t, st = null, e = !0) : e = !1), e || Wa(t)), null;
      case 13:
        return Rp(e, t, n);
      case 4:
        return Ae(
          t,
          t.stateNode.containerInfo
        ), i = t.pendingProps, e === null ? t.child = Yr(
          t,
          null,
          i,
          n
        ) : At(
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
        return At(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return At(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return At(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return i = t.pendingProps, da(t, t.type, i.value), At(
          e,
          t,
          i.children,
          n
        ), t.child;
      case 9:
        return o = t.type._context, i = t.pendingProps.children, er(t), o = Dt(o), i = i(o), t.flags |= 1, At(e, t, i, n), t.child;
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
        ), n.ref = t.ref, t.child = n, n.return = t, t = n) : (n = In(e.child, i), n.ref = t.ref, t.child = n, n.return = t, t = n), t;
      case 22:
        return Np(e, t, n);
      case 24:
        return er(t), i = Dt(yt), e === null ? (o = Bu(), o === null && (o = tt, f = ju(), o.pooledCache = f, f.refCount++, f !== null && (o.pooledCacheLanes |= n), o = f), t.memoizedState = {
          parent: i,
          cache: o
        }, zu(t), da(t, yt, o)) : ((e.lanes & n) !== 0 && (Hu(e, t), qi(t, null, null, n), Pi()), o = e.memoizedState, f = t.memoizedState, o.parent !== i ? (o = { parent: i, cache: i }, t.memoizedState = o, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = o), da(t, yt, i)) : (i = f.cache, da(t, yt, i), i !== o.cache && ku(
          t,
          [yt],
          n,
          !0
        ))), At(
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
  function Kn(e) {
    e.flags |= 4;
  }
  function Bp(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Vm(t)) {
      if (t = pn.current, t !== null && ((He & 4194048) === He ? Mn !== null : (He & 62914560) !== He && (He & 536870912) === 0 || t !== Mn))
        throw zi = Uu, bd;
      e.flags |= 8192;
    }
  }
  function Cs(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? ph() : 536870912, e.lanes |= t, Zr |= t);
  }
  function Qi(e, t) {
    if (!Ve)
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
  function it(e) {
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
        return it(t), null;
      case 1:
        return it(t), null;
      case 3:
        return n = t.stateNode, i = null, e !== null && (i = e.memoizedState.cache), t.memoizedState.cache !== i && (t.flags |= 2048), Fn(yt), Je(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (Mi(t) ? Kn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, pd())), it(t), null;
      case 26:
        return n = t.memoizedState, e === null ? (Kn(t), n !== null ? (it(t), Bp(t, n)) : (it(t), t.flags &= -16777217)) : n ? n !== e.memoizedState ? (Kn(t), it(t), Bp(t, n)) : (it(t), t.flags &= -16777217) : (e.memoizedProps !== i && Kn(t), it(t), t.flags &= -16777217), null;
      case 27:
        bn(t), n = se.current;
        var o = t.type;
        if (e !== null && t.stateNode != null)
          e.memoizedProps !== i && Kn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(s(166));
            return it(t), null;
          }
          e = ee.current, Mi(t) ? hd(t) : (e = Bm(o, i, n), t.stateNode = e, Kn(t));
        }
        return it(t), null;
      case 5:
        if (bn(t), n = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== i && Kn(t);
        else {
          if (!i) {
            if (t.stateNode === null)
              throw Error(s(166));
            return it(t), null;
          }
          if (e = ee.current, Mi(t))
            hd(t);
          else {
            switch (o = Us(
              se.current
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
            e[Ot] = t, e[zt] = i;
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
            e: switch (Nt(e, n, i), n) {
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
            e && Kn(t);
          }
        }
        return it(t), t.flags &= -16777217, null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== i && Kn(t);
        else {
          if (typeof i != "string" && t.stateNode === null)
            throw Error(s(166));
          if (e = se.current, Mi(t)) {
            if (e = t.stateNode, n = t.memoizedProps, i = null, o = Lt, o !== null)
              switch (o.tag) {
                case 27:
                case 5:
                  i = o.memoizedProps;
              }
            e[Ot] = t, e = !!(e.nodeValue === n || i !== null && i.suppressHydrationWarning === !0 || Om(e.nodeValue, n)), e || Wa(t);
          } else
            e = Us(e).createTextNode(
              i
            ), e[Ot] = t, t.stateNode = e;
        }
        return it(t), null;
      case 13:
        if (i = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (o = Mi(t), i !== null && i.dehydrated !== null) {
            if (e === null) {
              if (!o) throw Error(s(318));
              if (o = t.memoizedState, o = o !== null ? o.dehydrated : null, !o) throw Error(s(317));
              o[Ot] = t;
            } else
              Ri(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            it(t), o = !1;
          } else
            o = pd(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = o), o = !0;
          if (!o)
            return t.flags & 256 ? (Qn(t), t) : (Qn(t), null);
        }
        if (Qn(t), (t.flags & 128) !== 0)
          return t.lanes = n, t;
        if (n = i !== null, e = e !== null && e.memoizedState !== null, n) {
          i = t.child, o = null, i.alternate !== null && i.alternate.memoizedState !== null && i.alternate.memoizedState.cachePool !== null && (o = i.alternate.memoizedState.cachePool.pool);
          var f = null;
          i.memoizedState !== null && i.memoizedState.cachePool !== null && (f = i.memoizedState.cachePool.pool), f !== o && (i.flags |= 2048);
        }
        return n !== e && n && (t.child.flags |= 8192), Cs(t, t.updateQueue), it(t), null;
      case 4:
        return Je(), e === null && qc(t.stateNode.containerInfo), it(t), null;
      case 10:
        return Fn(t.type), it(t), null;
      case 19:
        if (te(bt), o = t.memoizedState, o === null) return it(t), null;
        if (i = (t.flags & 128) !== 0, f = o.rendering, f === null)
          if (i) Qi(o, !1);
          else {
            if (ot !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (f = bs(e), f !== null) {
                  for (t.flags |= 128, Qi(o, !1), e = f.updateQueue, t.updateQueue = e, Cs(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    cd(n, e), n = n.sibling;
                  return ae(
                    bt,
                    bt.current & 1 | 2
                  ), t.child;
                }
                e = e.sibling;
              }
            o.tail !== null && jt() > Ns && (t.flags |= 128, i = !0, Qi(o, !1), t.lanes = 4194304);
          }
        else {
          if (!i)
            if (e = bs(f), e !== null) {
              if (t.flags |= 128, i = !0, e = e.updateQueue, t.updateQueue = e, Cs(t, e), Qi(o, !0), o.tail === null && o.tailMode === "hidden" && !f.alternate && !Ve)
                return it(t), null;
            } else
              2 * jt() - o.renderingStartTime > Ns && n !== 536870912 && (t.flags |= 128, i = !0, Qi(o, !1), t.lanes = 4194304);
          o.isBackwards ? (f.sibling = t.child, t.child = f) : (e = o.last, e !== null ? e.sibling = f : t.child = f, o.last = f);
        }
        return o.tail !== null ? (t = o.tail, o.rendering = t, o.tail = t.sibling, o.renderingStartTime = jt(), t.sibling = null, e = bt.current, ae(bt, i ? e & 1 | 2 : e & 1), t) : (it(t), null);
      case 22:
      case 23:
        return Qn(t), Gu(), i = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== i && (t.flags |= 8192) : i && (t.flags |= 8192), i ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (it(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : it(t), n = t.updateQueue, n !== null && Cs(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), i = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (i = t.memoizedState.cachePool.pool), i !== n && (t.flags |= 2048), e !== null && te(tr), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Fn(yt), it(t), null;
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
        return Fn(yt), Je(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return bn(t), null;
      case 13:
        if (Qn(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          Ri();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return te(bt), null;
      case 4:
        return Je(), null;
      case 10:
        return Fn(t.type), null;
      case 22:
      case 23:
        return Qn(t), Gu(), e !== null && te(tr), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Fn(yt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Up(e, t) {
    switch (Ou(t), t.tag) {
      case 3:
        Fn(yt), Je();
        break;
      case 26:
      case 27:
      case 5:
        bn(t);
        break;
      case 4:
        Je();
        break;
      case 13:
        Qn(t);
        break;
      case 19:
        te(bt);
        break;
      case 10:
        Fn(t.type);
        break;
      case 22:
      case 23:
        Qn(t), Gu(), e !== null && te(tr);
        break;
      case 24:
        Fn(yt);
    }
  }
  function Zi(e, t) {
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
      $e(t, t.return, w);
    }
  }
  function Sa(e, t, n) {
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
              var M = n, q = w;
              try {
                q();
              } catch (Z) {
                $e(
                  o,
                  M,
                  Z
                );
              }
            }
          }
          i = i.next;
        } while (i !== f);
      }
    } catch (Z) {
      $e(t, t.return, Z);
    }
  }
  function zp(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Ad(t, n);
      } catch (i) {
        $e(e, e.return, i);
      }
    }
  }
  function Hp(e, t, n) {
    n.props = ar(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (i) {
      $e(e, t, i);
    }
  }
  function Ki(e, t) {
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
      $e(e, t, o);
    }
  }
  function Rn(e, t) {
    var n = e.ref, i = e.refCleanup;
    if (n !== null)
      if (typeof i == "function")
        try {
          i();
        } catch (o) {
          $e(e, t, o);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (o) {
          $e(e, t, o);
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
      $e(e, e.return, o);
    }
  }
  function vc(e, t, n) {
    try {
      var i = e.stateNode;
      v0(i, e.type, n, t), i[zt] = t;
    } catch (o) {
      $e(e, e.return, o);
    }
  }
  function qp(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && wa(e.type) || e.tag === 4;
  }
  function yc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || qp(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && wa(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function bc(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Bs));
    else if (i !== 4 && (i === 27 && wa(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (bc(e, t, n), e = e.sibling; e !== null; )
        bc(e, t, n), e = e.sibling;
  }
  function As(e, t, n) {
    var i = e.tag;
    if (i === 5 || i === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (i !== 4 && (i === 27 && wa(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (As(e, t, n), e = e.sibling; e !== null; )
        As(e, t, n), e = e.sibling;
  }
  function Ip(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var i = e.type, o = t.attributes; o.length; )
        t.removeAttributeNode(o[0]);
      Nt(t, i, n), t[Ot] = e, t[zt] = n;
    } catch (f) {
      $e(e, e.return, f);
    }
  }
  var Jn = !1, ht = !1, Sc = !1, Gp = typeof WeakSet == "function" ? WeakSet : Set, xt = null;
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
            var _ = 0, w = -1, M = -1, q = 0, Z = 0, $ = e, I = null;
            t: for (; ; ) {
              for (var G; $ !== n || o !== 0 && $.nodeType !== 3 || (w = _ + o), $ !== f || i !== 0 && $.nodeType !== 3 || (M = _ + i), $.nodeType === 3 && (_ += $.nodeValue.length), (G = $.firstChild) !== null; )
                I = $, $ = G;
              for (; ; ) {
                if ($ === e) break t;
                if (I === n && ++q === o && (w = _), I === f && ++Z === i && (M = _), (G = $.nextSibling) !== null) break;
                $ = I, I = $.parentNode;
              }
              $ = G;
            }
            n = w === -1 || M === -1 ? null : { start: w, end: M };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (Yc = { focusedElem: e, selectionRange: n }, Gs = !1, xt = t; xt !== null; )
      if (t = xt, e = t.child, (t.subtreeFlags & 1024) !== 0 && e !== null)
        e.return = t, xt = e;
      else
        for (; xt !== null; ) {
          switch (t = xt, f = t.alternate, e = t.flags, t.tag) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                e = void 0, n = t, o = f.memoizedProps, f = f.memoizedState, i = n.stateNode;
                try {
                  var Se = ar(
                    n.type,
                    o,
                    n.elementType === n.type
                  );
                  e = i.getSnapshotBeforeUpdate(
                    Se,
                    f
                  ), i.__reactInternalSnapshotBeforeUpdate = e;
                } catch (ve) {
                  $e(
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
            e.return = t.return, xt = e;
            break;
          }
          xt = t.return;
        }
  }
  function Vp(e, t, n) {
    var i = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        _a(e, n), i & 4 && Zi(5, n);
        break;
      case 1:
        if (_a(e, n), i & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (_) {
              $e(n, n.return, _);
            }
          else {
            var o = ar(
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
              $e(
                n,
                n.return,
                _
              );
            }
          }
        i & 64 && zp(n), i & 512 && Ki(n, n.return);
        break;
      case 3:
        if (_a(e, n), i & 64 && (e = n.updateQueue, e !== null)) {
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
            $e(n, n.return, _);
          }
        }
        break;
      case 27:
        t === null && i & 4 && Ip(n);
      case 26:
      case 5:
        _a(e, n), t === null && i & 4 && Pp(n), i & 512 && Ki(n, n.return);
        break;
      case 12:
        _a(e, n);
        break;
      case 13:
        _a(e, n), i & 4 && Xp(e, n), i & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = l0.bind(
          null,
          n
        ), C0(e, n))));
        break;
      case 22:
        if (i = n.memoizedState !== null || Jn, !i) {
          t = t !== null && t.memoizedState !== null || ht, o = Jn;
          var f = ht;
          Jn = i, (ht = t) && !f ? xa(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : _a(e, n), Jn = o, ht = f;
        }
        break;
      case 30:
        break;
      default:
        _a(e, n);
    }
  }
  function Yp(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Yp(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && $o(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var at = null, qt = !1;
  function Wn(e, t, n) {
    for (n = n.child; n !== null; )
      Fp(e, t, n), n = n.sibling;
  }
  function Fp(e, t, n) {
    if (nt && typeof nt.onCommitFiberUnmount == "function")
      try {
        nt.onCommitFiberUnmount(Qt, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        ht || Rn(n, t), Wn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        ht || Rn(n, t);
        var i = at, o = qt;
        wa(n.type) && (at = n.stateNode, qt = !1), Wn(
          e,
          t,
          n
        ), il(n.stateNode), at = i, qt = o;
        break;
      case 5:
        ht || Rn(n, t);
      case 6:
        if (i = at, o = qt, at = null, Wn(
          e,
          t,
          n
        ), at = i, qt = o, at !== null)
          if (qt)
            try {
              (at.nodeType === 9 ? at.body : at.nodeName === "HTML" ? at.ownerDocument.body : at).removeChild(n.stateNode);
            } catch (f) {
              $e(
                n,
                t,
                f
              );
            }
          else
            try {
              at.removeChild(n.stateNode);
            } catch (f) {
              $e(
                n,
                t,
                f
              );
            }
        break;
      case 18:
        at !== null && (qt ? (e = at, jm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), dl(e)) : jm(at, n.stateNode));
        break;
      case 4:
        i = at, o = qt, at = n.stateNode.containerInfo, qt = !0, Wn(
          e,
          t,
          n
        ), at = i, qt = o;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ht || Sa(2, n, t), ht || Sa(4, n, t), Wn(
          e,
          t,
          n
        );
        break;
      case 1:
        ht || (Rn(n, t), i = n.stateNode, typeof i.componentWillUnmount == "function" && Hp(
          n,
          t,
          i
        )), Wn(
          e,
          t,
          n
        );
        break;
      case 21:
        Wn(
          e,
          t,
          n
        );
        break;
      case 22:
        ht = (i = ht) || n.memoizedState !== null, Wn(
          e,
          t,
          n
        ), ht = i;
        break;
      default:
        Wn(
          e,
          t,
          n
        );
    }
  }
  function Xp(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        dl(e);
      } catch (n) {
        $e(t, t.return, n);
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
  function Jt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var i = 0; i < n.length; i++) {
        var o = n[i], f = e, _ = t, w = _;
        e: for (; w !== null; ) {
          switch (w.tag) {
            case 27:
              if (wa(w.type)) {
                at = w.stateNode, qt = !1;
                break e;
              }
              break;
            case 5:
              at = w.stateNode, qt = !1;
              break e;
            case 3:
            case 4:
              at = w.stateNode.containerInfo, qt = !0;
              break e;
          }
          w = w.return;
        }
        if (at === null) throw Error(s(160));
        Fp(f, _, o), at = null, qt = !1, f = o.alternate, f !== null && (f.return = null), o.return = null;
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; )
        Qp(t, e), t = t.sibling;
  }
  var xn = null;
  function Qp(e, t) {
    var n = e.alternate, i = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Jt(t, e), Wt(e), i & 4 && (Sa(3, e, e.return), Zi(3, e), Sa(5, e, e.return));
        break;
      case 1:
        Jt(t, e), Wt(e), i & 512 && (ht || n === null || Rn(n, n.return)), i & 64 && Jn && (e = e.updateQueue, e !== null && (i = e.callbacks, i !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? i : n.concat(i))));
        break;
      case 26:
        var o = xn;
        if (Jt(t, e), Wt(e), i & 512 && (ht || n === null || Rn(n, n.return)), i & 4) {
          var f = n !== null ? n.memoizedState : null;
          if (i = e.memoizedState, n === null)
            if (i === null)
              if (e.stateNode === null) {
                e: {
                  i = e.type, n = e.memoizedProps, o = o.ownerDocument || o;
                  t: switch (i) {
                    case "title":
                      f = o.getElementsByTagName("title")[0], (!f || f[Si] || f[Ot] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = o.createElement(i), o.head.insertBefore(
                        f,
                        o.querySelector("head > title")
                      )), Nt(f, i, n), f[Ot] = e, St(f), i = f;
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
                      f = o.createElement(i), Nt(f, i, n), o.head.appendChild(f);
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
                      f = o.createElement(i), Nt(f, i, n), o.head.appendChild(f);
                      break;
                    default:
                      throw Error(s(468, i));
                  }
                  f[Ot] = e, St(f), i = f;
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
        Jt(t, e), Wt(e), i & 512 && (ht || n === null || Rn(n, n.return)), n !== null && i & 4 && vc(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Jt(t, e), Wt(e), i & 512 && (ht || n === null || Rn(n, n.return)), e.flags & 32) {
          o = e.stateNode;
          try {
            Nr(o, "");
          } catch (G) {
            $e(e, e.return, G);
          }
        }
        i & 4 && e.stateNode != null && (o = e.memoizedProps, vc(
          e,
          o,
          n !== null ? n.memoizedProps : o
        )), i & 1024 && (Sc = !0);
        break;
      case 6:
        if (Jt(t, e), Wt(e), i & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          i = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = i;
          } catch (G) {
            $e(e, e.return, G);
          }
        }
        break;
      case 3:
        if (Ps = null, o = xn, xn = zs(t.containerInfo), Jt(t, e), xn = o, Wt(e), i & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            dl(t.containerInfo);
          } catch (G) {
            $e(e, e.return, G);
          }
        Sc && (Sc = !1, Zp(e));
        break;
      case 4:
        i = xn, xn = zs(
          e.stateNode.containerInfo
        ), Jt(t, e), Wt(e), xn = i;
        break;
      case 12:
        Jt(t, e), Wt(e);
        break;
      case 13:
        Jt(t, e), Wt(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (Nc = jt()), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, _c(e, i)));
        break;
      case 22:
        o = e.memoizedState !== null;
        var M = n !== null && n.memoizedState !== null, q = Jn, Z = ht;
        if (Jn = q || o, ht = Z || M, Jt(t, e), ht = Z, Jn = q, Wt(e), i & 8192)
          e: for (t = e.stateNode, t._visibility = o ? t._visibility & -2 : t._visibility | 1, o && (n === null || M || Jn || ht || rr(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                M = n = t;
                try {
                  if (f = M.stateNode, o)
                    _ = f.style, typeof _.setProperty == "function" ? _.setProperty("display", "none", "important") : _.display = "none";
                  else {
                    w = M.stateNode;
                    var $ = M.memoizedProps.style, I = $ != null && $.hasOwnProperty("display") ? $.display : null;
                    w.style.display = I == null || typeof I == "boolean" ? "" : ("" + I).trim();
                  }
                } catch (G) {
                  $e(M, M.return, G);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                M = t;
                try {
                  M.stateNode.nodeValue = o ? "" : M.memoizedProps;
                } catch (G) {
                  $e(M, M.return, G);
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
        Jt(t, e), Wt(e), i & 4 && (i = e.updateQueue, i !== null && (e.updateQueue = null, _c(e, i)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Jt(t, e), Wt(e);
    }
  }
  function Wt(e) {
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
            n.flags & 32 && (Nr(_, ""), n.flags &= -33);
            var w = yc(e);
            As(e, w, _);
            break;
          case 3:
          case 4:
            var M = n.stateNode.containerInfo, q = yc(e);
            bc(
              e,
              q,
              M
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (Z) {
        $e(e, e.return, Z);
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
  function _a(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Vp(e, t.alternate, t), t = t.sibling;
  }
  function rr(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Sa(4, t, t.return), rr(t);
          break;
        case 1:
          Rn(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && Hp(
            t,
            t.return,
            n
          ), rr(t);
          break;
        case 27:
          il(t.stateNode);
        case 26:
        case 5:
          Rn(t, t.return), rr(t);
          break;
        case 22:
          t.memoizedState === null && rr(t);
          break;
        case 30:
          rr(t);
          break;
        default:
          rr(t);
      }
      e = e.sibling;
    }
  }
  function xa(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var i = t.alternate, o = e, f = t, _ = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          xa(
            o,
            f,
            n
          ), Zi(4, f);
          break;
        case 1:
          if (xa(
            o,
            f,
            n
          ), i = f, o = i.stateNode, typeof o.componentDidMount == "function")
            try {
              o.componentDidMount();
            } catch (q) {
              $e(i, i.return, q);
            }
          if (i = f, o = i.updateQueue, o !== null) {
            var w = i.stateNode;
            try {
              var M = o.shared.hiddenCallbacks;
              if (M !== null)
                for (o.shared.hiddenCallbacks = null, o = 0; o < M.length; o++)
                  Cd(M[o], w);
            } catch (q) {
              $e(i, i.return, q);
            }
          }
          n && _ & 64 && zp(f), Ki(f, f.return);
          break;
        case 27:
          Ip(f);
        case 26:
        case 5:
          xa(
            o,
            f,
            n
          ), n && i === null && _ & 4 && Pp(f), Ki(f, f.return);
          break;
        case 12:
          xa(
            o,
            f,
            n
          );
          break;
        case 13:
          xa(
            o,
            f,
            n
          ), n && _ & 4 && Xp(o, f);
          break;
        case 22:
          f.memoizedState === null && xa(
            o,
            f,
            n
          ), Ki(f, f.return);
          break;
        case 30:
          break;
        default:
          xa(
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
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Li(n));
  }
  function Ec(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Li(e));
  }
  function kn(e, t, n, i) {
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
        kn(
          e,
          t,
          n,
          i
        ), o & 2048 && Zi(9, t);
        break;
      case 1:
        kn(
          e,
          t,
          n,
          i
        );
        break;
      case 3:
        kn(
          e,
          t,
          n,
          i
        ), o & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Li(e)));
        break;
      case 12:
        if (o & 2048) {
          kn(
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
          } catch (M) {
            $e(t, t.return, M);
          }
        } else
          kn(
            e,
            t,
            n,
            i
          );
        break;
      case 13:
        kn(
          e,
          t,
          n,
          i
        );
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, _ = t.alternate, t.memoizedState !== null ? f._visibility & 2 ? kn(
          e,
          t,
          n,
          i
        ) : Ji(e, t) : f._visibility & 2 ? kn(
          e,
          t,
          n,
          i
        ) : (f._visibility |= 2, Fr(
          e,
          t,
          n,
          i,
          (t.subtreeFlags & 10256) !== 0
        )), o & 2048 && xc(_, t);
        break;
      case 24:
        kn(
          e,
          t,
          n,
          i
        ), o & 2048 && Ec(t.alternate, t);
        break;
      default:
        kn(
          e,
          t,
          n,
          i
        );
    }
  }
  function Fr(e, t, n, i, o) {
    for (o = o && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var f = e, _ = t, w = n, M = i, q = _.flags;
      switch (_.tag) {
        case 0:
        case 11:
        case 15:
          Fr(
            f,
            _,
            w,
            M,
            o
          ), Zi(8, _);
          break;
        case 23:
          break;
        case 22:
          var Z = _.stateNode;
          _.memoizedState !== null ? Z._visibility & 2 ? Fr(
            f,
            _,
            w,
            M,
            o
          ) : Ji(
            f,
            _
          ) : (Z._visibility |= 2, Fr(
            f,
            _,
            w,
            M,
            o
          )), o && q & 2048 && xc(
            _.alternate,
            _
          );
          break;
        case 24:
          Fr(
            f,
            _,
            w,
            M,
            o
          ), o && q & 2048 && Ec(_.alternate, _);
          break;
        default:
          Fr(
            f,
            _,
            w,
            M,
            o
          );
      }
      t = t.sibling;
    }
  }
  function Ji(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, i = t, o = i.flags;
        switch (i.tag) {
          case 22:
            Ji(n, i), o & 2048 && xc(
              i.alternate,
              i
            );
            break;
          case 24:
            Ji(n, i), o & 2048 && Ec(i.alternate, i);
            break;
          default:
            Ji(n, i);
        }
        t = t.sibling;
      }
  }
  var Wi = 8192;
  function Xr(e) {
    if (e.subtreeFlags & Wi)
      for (e = e.child; e !== null; )
        Jp(e), e = e.sibling;
  }
  function Jp(e) {
    switch (e.tag) {
      case 26:
        Xr(e), e.flags & Wi && e.memoizedState !== null && U0(
          xn,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Xr(e);
        break;
      case 3:
      case 4:
        var t = xn;
        xn = zs(e.stateNode.containerInfo), Xr(e), xn = t;
        break;
      case 22:
        e.memoizedState === null && (t = e.alternate, t !== null && t.memoizedState !== null ? (t = Wi, Wi = 16777216, Xr(e), Wi = t) : Xr(e));
        break;
      default:
        Xr(e);
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
  function $i(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          xt = i, em(
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
        $i(e), e.flags & 2048 && Sa(9, e, e.return);
        break;
      case 3:
        $i(e);
        break;
      case 12:
        $i(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, Ts(e)) : $i(e);
        break;
      default:
        $i(e);
    }
  }
  function Ts(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var i = t[n];
          xt = i, em(
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
          Sa(8, t, t.return), Ts(t);
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
    for (; xt !== null; ) {
      var n = xt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Sa(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var i = n.memoizedState.cachePool.pool;
            i != null && i.refCount++;
          }
          break;
        case 24:
          Li(n.memoizedState.cache);
      }
      if (i = n.child, i !== null) i.return = n, xt = i;
      else
        e: for (n = e; xt !== null; ) {
          i = xt;
          var o = i.sibling, f = i.return;
          if (Yp(i), i === n) {
            xt = null;
            break e;
          }
          if (o !== null) {
            o.return = f, xt = o;
            break e;
          }
          xt = f;
        }
    }
  }
  var $1 = {
    getCacheForType: function(e) {
      var t = Dt(yt), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    }
  }, e0 = typeof WeakMap == "function" ? WeakMap : Map, Ye = 0, tt = null, Le = null, He = 0, Fe = 0, $t = null, Ea = !1, Qr = !1, Cc = !1, $n = 0, ot = 0, Ca = 0, ir = 0, Ac = 0, mn = 0, Zr = 0, el = null, It = null, Tc = !1, Nc = 0, Ns = 1 / 0, ws = null, Aa = null, Tt = 0, Ta = null, Kr = null, Jr = 0, wc = 0, Oc = null, tm = null, tl = 0, Dc = null;
  function en() {
    if ((Ye & 2) !== 0 && He !== 0)
      return He & -He;
    if (z.T !== null) {
      var e = zr;
      return e !== 0 ? e : Uc();
    }
    return vh();
  }
  function nm() {
    mn === 0 && (mn = (He & 536870912) === 0 || Ve ? br() : 536870912);
    var e = pn.current;
    return e !== null && (e.flags |= 32), mn;
  }
  function tn(e, t, n) {
    (e === tt && (Fe === 2 || Fe === 9) || e.cancelPendingCommit !== null) && (Wr(e, 0), Na(
      e,
      He,
      mn,
      !1
    )), bi(e, n), ((Ye & 2) === 0 || e !== tt) && (e === tt && ((Ye & 2) === 0 && (ir |= n), ot === 4 && Na(
      e,
      He,
      mn,
      !1
    )), jn(e));
  }
  function am(e, t, n) {
    if ((Ye & 6) !== 0) throw Error(s(327));
    var i = !n && (t & 124) === 0 && (t & e.expiredLanes) === 0 || et(e, t), o = i ? a0(e, t) : kc(e, t, !0), f = i;
    do {
      if (o === 0) {
        Qr && !i && Na(e, t, 0, !1);
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
              o = el;
              var M = w.current.memoizedState.isDehydrated;
              if (M && (Wr(w, _).flags |= 256), _ = kc(
                w,
                _,
                !1
              ), _ !== 2) {
                if (Cc && !M) {
                  w.errorRecoveryDisabledLanes |= f, ir |= f, o = 4;
                  break e;
                }
                f = It, It = o, f !== null && (It === null ? It = f : It.push.apply(
                  It,
                  f
                ));
              }
              o = _;
            }
            if (f = !1, o !== 2) continue;
          }
        }
        if (o === 1) {
          Wr(e, 0), Na(e, t, 0, !0);
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
              Na(
                i,
                t,
                mn,
                !Ea
              );
              break e;
            case 2:
              It = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && (o = Nc + 300 - jt(), 10 < o)) {
            if (Na(
              i,
              t,
              mn,
              !Ea
            ), we(i, 0, !0) !== 0) break e;
            i.timeoutHandle = Rm(
              rm.bind(
                null,
                i,
                n,
                It,
                ws,
                Tc,
                t,
                mn,
                ir,
                Zr,
                Ea,
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
            It,
            ws,
            Tc,
            t,
            mn,
            ir,
            Zr,
            Ea,
            f,
            0,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    jn(e);
  }
  function rm(e, t, n, i, o, f, _, w, M, q, Z, $, I, G) {
    if (e.timeoutHandle = -1, $ = t.subtreeFlags, ($ & 8192 || ($ & 16785408) === 16785408) && (ol = { stylesheets: null, count: 0, unsuspend: B0 }, Jp(t), $ = z0(), $ !== null)) {
      e.cancelPendingCommit = $(
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
          M,
          Z,
          1,
          I,
          G
        )
      ), Na(e, f, _, !q);
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
      M
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
            if (!Zt(f(), o)) return !1;
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
  function Na(e, t, n, i) {
    t &= ~Ac, t &= ~ir, e.suspendedLanes |= t, e.pingedLanes &= ~t, i && (e.warmLanes |= t), i = e.expirationTimes;
    for (var o = t; 0 < o; ) {
      var f = 31 - Y(o), _ = 1 << f;
      i[f] = -1, o &= ~_;
    }
    n !== 0 && mh(e, n, t);
  }
  function Os() {
    return (Ye & 6) === 0 ? (nl(0), !1) : !0;
  }
  function Mc() {
    if (Le !== null) {
      if (Fe === 0)
        var e = Le.return;
      else
        e = Le, Yn = $a = null, Qu(e), Vr = null, Fi = 0, e = Le;
      for (; e !== null; )
        Up(e.alternate, e), e = e.return;
      Le = null;
    }
  }
  function Wr(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, b0(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Mc(), tt = e, Le = n = In(e.current, null), He = t, Fe = 0, $t = null, Ea = !1, Qr = et(e, t), Cc = !1, Zr = mn = Ac = ir = Ca = ot = 0, It = el = null, Tc = !1, (t & 8) !== 0 && (t |= t & 32);
    var i = e.entangledLanes;
    if (i !== 0)
      for (e = e.entanglements, i &= t; 0 < i; ) {
        var o = 31 - Y(i), f = 1 << o;
        t |= e[o], i &= ~f;
      }
    return $n = t, Jl(), n;
  }
  function im(e, t) {
    Re = null, z.H = gs, t === Ui || t === ls ? (t = xd(), Fe = 3) : t === bd ? (t = xd(), Fe = 4) : Fe = t === Ep ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, $t = t, Le === null && (ot = 1, _s(
      e,
      cn(t, e.current)
    ));
  }
  function lm() {
    var e = z.H;
    return z.H = gs, e === null ? gs : e;
  }
  function sm() {
    var e = z.A;
    return z.A = $1, e;
  }
  function Rc() {
    ot = 4, Ea || (He & 4194048) !== He && pn.current !== null || (Qr = !0), (Ca & 134217727) === 0 && (ir & 134217727) === 0 || tt === null || Na(
      tt,
      He,
      mn,
      !1
    );
  }
  function kc(e, t, n) {
    var i = Ye;
    Ye |= 2;
    var o = lm(), f = sm();
    (tt !== e || He !== t) && (ws = null, Wr(e, t)), t = !1;
    var _ = ot;
    e: do
      try {
        if (Fe !== 0 && Le !== null) {
          var w = Le, M = $t;
          switch (Fe) {
            case 8:
              Mc(), _ = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              pn.current === null && (t = !0);
              var q = Fe;
              if (Fe = 0, $t = null, $r(e, w, M, q), n && Qr) {
                _ = 0;
                break e;
              }
              break;
            default:
              q = Fe, Fe = 0, $t = null, $r(e, w, M, q);
          }
        }
        n0(), _ = ot;
        break;
      } catch (Z) {
        im(e, Z);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Yn = $a = null, Ye = i, z.H = o, z.A = f, Le === null && (tt = null, He = 0, Jl()), _;
  }
  function n0() {
    for (; Le !== null; ) om(Le);
  }
  function a0(e, t) {
    var n = Ye;
    Ye |= 2;
    var i = lm(), o = sm();
    tt !== e || He !== t ? (ws = null, Ns = jt() + 500, Wr(e, t)) : Qr = et(
      e,
      t
    );
    e: do
      try {
        if (Fe !== 0 && Le !== null) {
          t = Le;
          var f = $t;
          t: switch (Fe) {
            case 1:
              Fe = 0, $t = null, $r(e, t, f, 1);
              break;
            case 2:
            case 9:
              if (Sd(f)) {
                Fe = 0, $t = null, um(t);
                break;
              }
              t = function() {
                Fe !== 2 && Fe !== 9 || tt !== e || (Fe = 7), jn(e);
              }, f.then(t, t);
              break e;
            case 3:
              Fe = 7;
              break e;
            case 4:
              Fe = 5;
              break e;
            case 7:
              Sd(f) ? (Fe = 0, $t = null, um(t)) : (Fe = 0, $t = null, $r(e, t, f, 7));
              break;
            case 5:
              var _ = null;
              switch (Le.tag) {
                case 26:
                  _ = Le.memoizedState;
                case 5:
                case 27:
                  var w = Le;
                  if (!_ || Vm(_)) {
                    Fe = 0, $t = null;
                    var M = w.sibling;
                    if (M !== null) Le = M;
                    else {
                      var q = w.return;
                      q !== null ? (Le = q, Ds(q)) : Le = null;
                    }
                    break t;
                  }
              }
              Fe = 0, $t = null, $r(e, t, f, 5);
              break;
            case 6:
              Fe = 0, $t = null, $r(e, t, f, 6);
              break;
            case 8:
              Mc(), ot = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        r0();
        break;
      } catch (Z) {
        im(e, Z);
      }
    while (!0);
    return Yn = $a = null, z.H = i, z.A = o, Ye = n, Le !== null ? 0 : (tt = null, He = 0, Jl(), ot);
  }
  function r0() {
    for (; Le !== null && !vr(); )
      om(Le);
  }
  function om(e) {
    var t = Lp(e.alternate, e, $n);
    e.memoizedProps = e.pendingProps, t === null ? Ds(e) : Le = t;
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
          He
        );
        break;
      case 11:
        t = Op(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          He
        );
        break;
      case 5:
        Qu(t);
      default:
        Up(n, t), t = Le = cd(t, $n), t = Lp(n, t, $n);
    }
    e.memoizedProps = e.pendingProps, t === null ? Ds(e) : Le = t;
  }
  function $r(e, t, n, i) {
    Yn = $a = null, Qu(t), Vr = null, Fi = 0;
    var o = t.return;
    try {
      if (X1(
        e,
        o,
        t,
        n,
        He
      )) {
        ot = 1, _s(
          e,
          cn(n, e.current)
        ), Le = null;
        return;
      }
    } catch (f) {
      if (o !== null) throw Le = o, f;
      ot = 1, _s(
        e,
        cn(n, e.current)
      ), Le = null;
      return;
    }
    t.flags & 32768 ? (Ve || i === 1 ? e = !0 : Qr || (He & 536870912) !== 0 ? e = !1 : (Ea = e = !0, (i === 2 || i === 9 || i === 3 || i === 6) && (i = pn.current, i !== null && i.tag === 13 && (i.flags |= 16384))), cm(t, e)) : Ds(t);
  }
  function Ds(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        cm(
          t,
          Ea
        );
        return;
      }
      e = t.return;
      var n = Z1(
        t.alternate,
        t,
        $n
      );
      if (n !== null) {
        Le = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        Le = t;
        return;
      }
      Le = t = e;
    } while (t !== null);
    ot === 0 && (ot = 5);
  }
  function cm(e, t) {
    do {
      var n = K1(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, Le = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        Le = e;
        return;
      }
      Le = e = n;
    } while (e !== null);
    ot = 6, Le = null;
  }
  function fm(e, t, n, i, o, f, _, w, M) {
    e.cancelPendingCommit = null;
    do
      Ms();
    while (Tt !== 0);
    if ((Ye & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (f = t.lanes | t.childLanes, f |= Eu, By(
        e,
        n,
        f,
        _,
        w,
        M
      ), e === tt && (Le = tt = null, He = 0), Kr = t, Ta = e, Jr = n, wc = f, Oc = o, tm = i, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, o0(ge, function() {
        return gm(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), i = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || i) {
        i = z.T, z.T = null, o = re.p, re.p = 2, _ = Ye, Ye |= 4;
        try {
          J1(e, t, n);
        } finally {
          Ye = _, re.p = o, z.T = i;
        }
      }
      Tt = 1, hm(), dm(), pm();
    }
  }
  function hm() {
    if (Tt === 1) {
      Tt = 0;
      var e = Ta, t = Kr, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = z.T, z.T = null;
        var i = re.p;
        re.p = 2;
        var o = Ye;
        Ye |= 4;
        try {
          Qp(t, e);
          var f = Yc, _ = ed(e.containerInfo), w = f.focusedElem, M = f.selectionRange;
          if (_ !== w && w && w.ownerDocument && $h(
            w.ownerDocument.documentElement,
            w
          )) {
            if (M !== null && yu(w)) {
              var q = M.start, Z = M.end;
              if (Z === void 0 && (Z = q), "selectionStart" in w)
                w.selectionStart = q, w.selectionEnd = Math.min(
                  Z,
                  w.value.length
                );
              else {
                var $ = w.ownerDocument || document, I = $ && $.defaultView || window;
                if (I.getSelection) {
                  var G = I.getSelection(), Se = w.textContent.length, ve = Math.min(M.start, Se), Ke = M.end === void 0 ? ve : Math.min(M.end, Se);
                  !G.extend && ve > Ke && (_ = Ke, Ke = ve, ve = _);
                  var U = Wh(
                    w,
                    ve
                  ), B = Wh(
                    w,
                    Ke
                  );
                  if (U && B && (G.rangeCount !== 1 || G.anchorNode !== U.node || G.anchorOffset !== U.offset || G.focusNode !== B.node || G.focusOffset !== B.offset)) {
                    var P = $.createRange();
                    P.setStart(U.node, U.offset), G.removeAllRanges(), ve > Ke ? (G.addRange(P), G.extend(B.node, B.offset)) : (P.setEnd(B.node, B.offset), G.addRange(P));
                  }
                }
              }
            }
            for ($ = [], G = w; G = G.parentNode; )
              G.nodeType === 1 && $.push({
                element: G,
                left: G.scrollLeft,
                top: G.scrollTop
              });
            for (typeof w.focus == "function" && w.focus(), w = 0; w < $.length; w++) {
              var K = $[w];
              K.element.scrollLeft = K.left, K.element.scrollTop = K.top;
            }
          }
          Gs = !!Vc, Yc = Vc = null;
        } finally {
          Ye = o, re.p = i, z.T = n;
        }
      }
      e.current = t, Tt = 2;
    }
  }
  function dm() {
    if (Tt === 2) {
      Tt = 0;
      var e = Ta, t = Kr, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = z.T, z.T = null;
        var i = re.p;
        re.p = 2;
        var o = Ye;
        Ye |= 4;
        try {
          Vp(e, t.alternate, t);
        } finally {
          Ye = o, re.p = i, z.T = n;
        }
      }
      Tt = 3;
    }
  }
  function pm() {
    if (Tt === 4 || Tt === 3) {
      Tt = 0, yr();
      var e = Ta, t = Kr, n = Jr, i = tm;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? Tt = 5 : (Tt = 0, Kr = Ta = null, mm(e, e.pendingLanes));
      var o = e.pendingLanes;
      if (o === 0 && (Aa = null), Jo(n), t = t.stateNode, nt && typeof nt.onCommitFiberRoot == "function")
        try {
          nt.onCommitFiberRoot(
            Qt,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (i !== null) {
        t = z.T, o = re.p, re.p = 2, z.T = null;
        try {
          for (var f = e.onRecoverableError, _ = 0; _ < i.length; _++) {
            var w = i[_];
            f(w.value, {
              componentStack: w.stack
            });
          }
        } finally {
          z.T = t, re.p = o;
        }
      }
      (Jr & 3) !== 0 && Ms(), jn(e), o = e.pendingLanes, (n & 4194090) !== 0 && (o & 42) !== 0 ? e === Dc ? tl++ : (tl = 0, Dc = e) : tl = 0, nl(0);
    }
  }
  function mm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Li(t)));
  }
  function Ms(e) {
    return hm(), dm(), pm(), gm();
  }
  function gm() {
    if (Tt !== 5) return !1;
    var e = Ta, t = wc;
    wc = 0;
    var n = Jo(Jr), i = z.T, o = re.p;
    try {
      re.p = 32 > n ? 32 : n, z.T = null, n = Oc, Oc = null;
      var f = Ta, _ = Jr;
      if (Tt = 0, Kr = Ta = null, Jr = 0, (Ye & 6) !== 0) throw Error(s(331));
      var w = Ye;
      if (Ye |= 4, $p(f.current), Kp(
        f,
        f.current,
        _,
        n
      ), Ye = w, nl(0, !1), nt && typeof nt.onPostCommitFiberRoot == "function")
        try {
          nt.onPostCommitFiberRoot(Qt, f);
        } catch {
        }
      return !0;
    } finally {
      re.p = o, z.T = i, mm(e, t);
    }
  }
  function vm(e, t, n) {
    t = cn(n, t), t = oc(e.stateNode, t, 2), e = ga(e, t, 2), e !== null && (bi(e, 2), jn(e));
  }
  function $e(e, t, n) {
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof i.componentDidCatch == "function" && (Aa === null || !Aa.has(i))) {
            e = cn(n, e), n = _p(2), i = ga(t, n, 2), i !== null && (xp(
              n,
              i,
              t,
              e
            ), bi(i, 2), jn(i));
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
    i !== null && i.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, tt === e && (He & n) === n && (ot === 4 || ot === 3 && (He & 62914560) === He && 300 > jt() - Nc ? (Ye & 2) === 0 && Wr(e, 0) : Ac |= n, Zr === He && (Zr = 0)), jn(e);
  }
  function ym(e, t) {
    t === 0 && (t = ph()), e = jr(e, t), e !== null && (bi(e, t), jn(e));
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
    return ca(e, t);
  }
  var Rs = null, ei = null, Lc = !1, ks = !1, Bc = !1, lr = 0;
  function jn(e) {
    e !== ei && e.next === null && (ei === null ? Rs = ei = e : ei = ei.next = e), ks = !0, Lc || (Lc = !0, c0());
  }
  function nl(e, t) {
    if (!Bc && ks) {
      Bc = !0;
      do
        for (var n = !1, i = Rs; i !== null; ) {
          if (e !== 0) {
            var o = i.pendingLanes;
            if (o === 0) var f = 0;
            else {
              var _ = i.suspendedLanes, w = i.pingedLanes;
              f = (1 << 31 - Y(42 | e) + 1) - 1, f &= o & ~(_ & ~w), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (n = !0, xm(i, f));
          } else
            f = He, f = we(
              i,
              i === tt ? f : 0,
              i.cancelPendingCommit !== null || i.timeoutHandle !== -1
            ), (f & 3) === 0 || et(i, f) || (n = !0, xm(i, f));
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
    lr !== 0 && (y0() && (e = lr), lr = 0);
    for (var t = jt(), n = null, i = Rs; i !== null; ) {
      var o = i.next, f = Sm(i, t);
      f === 0 ? (i.next = null, n === null ? Rs = o : n.next = o, o === null && (ei = n)) : (n = i, (e !== 0 || (f & 3) !== 0) && (ks = !0)), i = o;
    }
    nl(e);
  }
  function Sm(e, t) {
    for (var n = e.suspendedLanes, i = e.pingedLanes, o = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var _ = 31 - Y(f), w = 1 << _, M = o[_];
      M === -1 ? ((w & n) === 0 || (w & i) !== 0) && (o[_] = On(w, t)) : M <= t && (e.expiredLanes |= w), f &= ~w;
    }
    if (t = tt, n = He, n = we(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i = e.callbackNode, n === 0 || e === t && (Fe === 2 || Fe === 9) || e.cancelPendingCommit !== null)
      return i !== null && i !== null && Ga(i), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || et(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (i !== null && Ga(i), Jo(n)) {
        case 2:
        case 8:
          n = me;
          break;
        case 32:
          n = ge;
          break;
        case 268435456:
          n = Pe;
          break;
        default:
          n = ge;
      }
      return i = _m.bind(null, e), n = ca(n, i), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return i !== null && i !== null && Ga(i), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function _m(e, t) {
    if (Tt !== 0 && Tt !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Ms() && e.callbackNode !== n)
      return null;
    var i = He;
    return i = we(
      e,
      e === tt ? i : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), i === 0 ? null : (am(e, i, t), Sm(e, jt()), e.callbackNode != null && e.callbackNode === n ? _m.bind(null, e) : null);
  }
  function xm(e, t) {
    if (Ms()) return null;
    am(e, t, !0);
  }
  function c0() {
    S0(function() {
      (Ye & 6) !== 0 ? ca(
        Xt,
        u0
      ) : bm();
    });
  }
  function Uc() {
    return lr === 0 && (lr = br()), lr;
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
        (o[zt] || null).action
      ), _ = i.submitter;
      _ && (t = (t = _[zt] || null) ? Em(t.formAction) : _.getAttribute("formAction"), t !== null && (f = t, _ = null));
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
                if (lr !== 0) {
                  var M = _ ? Cm(o, _) : new FormData(o);
                  ac(
                    n,
                    {
                      pending: !0,
                      data: M,
                      method: o.method,
                      action: f
                    },
                    null,
                    M
                  );
                }
              } else
                typeof f == "function" && (w.preventDefault(), M = _ ? Cm(o, _) : new FormData(o), ac(
                  n,
                  {
                    pending: !0,
                    data: M,
                    method: o.method,
                    action: f
                  },
                  f,
                  M
                ));
            },
            currentTarget: o
          }
        ]
      });
    }
  }
  for (var zc = 0; zc < xu.length; zc++) {
    var Hc = xu[zc], h0 = Hc.toLowerCase(), d0 = Hc[0].toUpperCase() + Hc.slice(1);
    _n(
      h0,
      "on" + d0
    );
  }
  _n(ad, "onAnimationEnd"), _n(rd, "onAnimationIteration"), _n(id, "onAnimationStart"), _n("dblclick", "onDoubleClick"), _n("focusin", "onFocus"), _n("focusout", "onBlur"), _n(D1, "onTransitionRun"), _n(M1, "onTransitionStart"), _n(R1, "onTransitionCancel"), _n(ld, "onTransitionEnd"), Cr("onMouseEnter", ["mouseout", "mouseover"]), Cr("onMouseLeave", ["mouseout", "mouseover"]), Cr("onPointerEnter", ["pointerout", "pointerover"]), Cr("onPointerLeave", ["pointerout", "pointerover"]), Va(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Va(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Va("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Va(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Va(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Va(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var al = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), p0 = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(al)
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
            var w = i[_], M = w.instance, q = w.currentTarget;
            if (w = w.listener, M !== f && o.isPropagationStopped())
              break e;
            f = w, o.currentTarget = q;
            try {
              f(o);
            } catch (Z) {
              Ss(Z);
            }
            o.currentTarget = null, f = M;
          }
        else
          for (_ = 0; _ < i.length; _++) {
            if (w = i[_], M = w.instance, q = w.currentTarget, w = w.listener, M !== f && o.isPropagationStopped())
              break e;
            f = w, o.currentTarget = q;
            try {
              f(o);
            } catch (Z) {
              Ss(Z);
            }
            o.currentTarget = null, f = M;
          }
      }
    }
  }
  function Be(e, t) {
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
              var M = _.tag;
              if ((M === 3 || M === 4) && _.stateNode.containerInfo === o)
                return;
              _ = _.return;
            }
          for (; w !== null; ) {
            if (_ = _r(w), _ === null) return;
            if (M = _.tag, M === 5 || M === 6 || M === 26 || M === 27) {
              i = f = _;
              continue e;
            }
            w = w.parentNode;
          }
        }
        i = i.return;
      }
    kh(function() {
      var q = f, Z = su(n), $ = [];
      e: {
        var I = sd.get(e);
        if (I !== void 0) {
          var G = Ql, Se = e;
          switch (e) {
            case "keypress":
              if (Fl(n) === 0) break e;
            case "keydown":
            case "keyup":
              G = o1;
              break;
            case "focusin":
              Se = "focus", G = du;
              break;
            case "focusout":
              Se = "blur", G = du;
              break;
            case "beforeblur":
            case "afterblur":
              G = du;
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
              G = Bh;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              G = Ky;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              G = f1;
              break;
            case ad:
            case rd:
            case id:
              G = $y;
              break;
            case ld:
              G = d1;
              break;
            case "scroll":
            case "scrollend":
              G = Qy;
              break;
            case "wheel":
              G = m1;
              break;
            case "copy":
            case "cut":
            case "paste":
              G = t1;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              G = zh;
              break;
            case "toggle":
            case "beforetoggle":
              G = v1;
          }
          var ve = (t & 4) !== 0, Ke = !ve && (e === "scroll" || e === "scrollend"), U = ve ? I !== null ? I + "Capture" : null : I;
          ve = [];
          for (var B = q, P; B !== null; ) {
            var K = B;
            if (P = K.stateNode, K = K.tag, K !== 5 && K !== 26 && K !== 27 || P === null || U === null || (K = xi(B, U), K != null && ve.push(
              rl(B, K, P)
            )), Ke) break;
            B = B.return;
          }
          0 < ve.length && (I = new G(
            I,
            Se,
            null,
            n,
            Z
          ), $.push({ event: I, listeners: ve }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (I = e === "mouseover" || e === "pointerover", G = e === "mouseout" || e === "pointerout", I && n !== lu && (Se = n.relatedTarget || n.fromElement) && (_r(Se) || Se[Sr]))
            break e;
          if ((G || I) && (I = Z.window === Z ? Z : (I = Z.ownerDocument) ? I.defaultView || I.parentWindow : window, G ? (Se = n.relatedTarget || n.toElement, G = q, Se = Se ? _r(Se) : null, Se !== null && (Ke = u(Se), ve = Se.tag, Se !== Ke || ve !== 5 && ve !== 27 && ve !== 6) && (Se = null)) : (G = null, Se = q), G !== Se)) {
            if (ve = Bh, K = "onMouseLeave", U = "onMouseEnter", B = "mouse", (e === "pointerout" || e === "pointerover") && (ve = zh, K = "onPointerLeave", U = "onPointerEnter", B = "pointer"), Ke = G == null ? I : _i(G), P = Se == null ? I : _i(Se), I = new ve(
              K,
              B + "leave",
              G,
              n,
              Z
            ), I.target = Ke, I.relatedTarget = P, K = null, _r(Z) === q && (ve = new ve(
              U,
              B + "enter",
              Se,
              n,
              Z
            ), ve.target = P, ve.relatedTarget = Ke, K = ve), Ke = K, G && Se)
              t: {
                for (ve = G, U = Se, B = 0, P = ve; P; P = ti(P))
                  B++;
                for (P = 0, K = U; K; K = ti(K))
                  P++;
                for (; 0 < B - P; )
                  ve = ti(ve), B--;
                for (; 0 < P - B; )
                  U = ti(U), P--;
                for (; B--; ) {
                  if (ve === U || U !== null && ve === U.alternate)
                    break t;
                  ve = ti(ve), U = ti(U);
                }
                ve = null;
              }
            else ve = null;
            G !== null && Nm(
              $,
              I,
              G,
              ve,
              !1
            ), Se !== null && Ke !== null && Nm(
              $,
              Ke,
              Se,
              ve,
              !0
            );
          }
        }
        e: {
          if (I = q ? _i(q) : window, G = I.nodeName && I.nodeName.toLowerCase(), G === "select" || G === "input" && I.type === "file")
            var ue = Fh;
          else if (Vh(I))
            if (Xh)
              ue = N1;
            else {
              ue = A1;
              var ke = C1;
            }
          else
            G = I.nodeName, !G || G.toLowerCase() !== "input" || I.type !== "checkbox" && I.type !== "radio" ? q && iu(q.elementType) && (ue = Fh) : ue = T1;
          if (ue && (ue = ue(e, q))) {
            Yh(
              $,
              ue,
              n,
              Z
            );
            break e;
          }
          ke && ke(e, I, q), e === "focusout" && q && I.type === "number" && q.memoizedProps.value != null && ru(I, "number", I.value);
        }
        switch (ke = q ? _i(q) : window, e) {
          case "focusin":
            (Vh(ke) || ke.contentEditable === "true") && (Mr = ke, bu = q, Di = null);
            break;
          case "focusout":
            Di = bu = Mr = null;
            break;
          case "mousedown":
            Su = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Su = !1, td($, n, Z);
            break;
          case "selectionchange":
            if (O1) break;
          case "keydown":
          case "keyup":
            td($, n, Z);
        }
        var pe;
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
          Dr ? Ih(e, n) && (ye = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ye = "onCompositionStart");
        ye && (Hh && n.locale !== "ko" && (Dr || ye !== "onCompositionStart" ? ye === "onCompositionEnd" && Dr && (pe = jh()) : (ha = Z, cu = "value" in ha ? ha.value : ha.textContent, Dr = !0)), ke = Ls(q, ye), 0 < ke.length && (ye = new Uh(
          ye,
          e,
          null,
          n,
          Z
        ), $.push({ event: ye, listeners: ke }), pe ? ye.data = pe : (pe = Gh(n), pe !== null && (ye.data = pe)))), (pe = b1 ? S1(e, n) : _1(e, n)) && (ye = Ls(q, "onBeforeInput"), 0 < ye.length && (ke = new Uh(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          Z
        ), $.push({
          event: ke,
          listeners: ye
        }), ke.data = pe)), f0(
          $,
          e,
          q,
          n,
          Z
        );
      }
      Am($, t);
    });
  }
  function rl(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Ls(e, t) {
    for (var n = t + "Capture", i = []; e !== null; ) {
      var o = e, f = o.stateNode;
      if (o = o.tag, o !== 5 && o !== 26 && o !== 27 || f === null || (o = xi(e, n), o != null && i.unshift(
        rl(e, o, f)
      ), o = xi(e, t), o != null && i.push(
        rl(e, o, f)
      )), e.tag === 3) return i;
      e = e.return;
    }
    return [];
  }
  function ti(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Nm(e, t, n, i, o) {
    for (var f = t._reactName, _ = []; n !== null && n !== i; ) {
      var w = n, M = w.alternate, q = w.stateNode;
      if (w = w.tag, M !== null && M === i) break;
      w !== 5 && w !== 26 && w !== 27 || q === null || (M = q, o ? (q = xi(n, f), q != null && _.unshift(
        rl(n, q, M)
      )) : o || (q = xi(n, f), q != null && _.push(
        rl(n, q, M)
      ))), n = n.return;
    }
    _.length !== 0 && e.push({ event: t, listeners: _ });
  }
  var m0 = /\r\n?/g, g0 = /\u0000|\uFFFD/g;
  function wm(e) {
    return (typeof e == "string" ? e : "" + e).replace(m0, `
`).replace(g0, "");
  }
  function Om(e, t) {
    return t = wm(t), wm(e) === t;
  }
  function Bs() {
  }
  function Ze(e, t, n, i, o, f) {
    switch (n) {
      case "children":
        typeof i == "string" ? t === "body" || t === "textarea" && i === "" || Nr(e, i) : (typeof i == "number" || typeof i == "bigint") && t !== "body" && Nr(e, "" + i);
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
          typeof f == "function" && (n === "formAction" ? (t !== "input" && Ze(e, t, "name", o.name, o, null), Ze(
            e,
            t,
            "formEncType",
            o.formEncType,
            o,
            null
          ), Ze(
            e,
            t,
            "formMethod",
            o.formMethod,
            o,
            null
          ), Ze(
            e,
            t,
            "formTarget",
            o.formTarget,
            o,
            null
          )) : (Ze(e, t, "encType", o.encType, o, null), Ze(e, t, "method", o.method, o, null), Ze(e, t, "target", o.target, o, null)));
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
        i != null && Be("scroll", e);
        break;
      case "onScrollEnd":
        i != null && Be("scrollend", e);
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
        Be("beforetoggle", e), Be("toggle", e), Pl(e, "popover", i);
        break;
      case "xlinkActuate":
        Pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          i
        );
        break;
      case "xlinkArcrole":
        Pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          i
        );
        break;
      case "xlinkRole":
        Pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          i
        );
        break;
      case "xlinkShow":
        Pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          i
        );
        break;
      case "xlinkTitle":
        Pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          i
        );
        break;
      case "xlinkType":
        Pn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          i
        );
        break;
      case "xmlBase":
        Pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          i
        );
        break;
      case "xmlLang":
        Pn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          i
        );
        break;
      case "xmlSpace":
        Pn(
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
        typeof i == "string" ? Nr(e, i) : (typeof i == "number" || typeof i == "bigint") && Nr(e, "" + i);
        break;
      case "onScroll":
        i != null && Be("scroll", e);
        break;
      case "onScrollEnd":
        i != null && Be("scrollend", e);
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
            if (n[0] === "o" && n[1] === "n" && (o = n.endsWith("Capture"), t = n.slice(2, o ? n.length - 7 : void 0), f = e[zt] || null, f = f != null ? f[n] : null, typeof f == "function" && e.removeEventListener(t, f, o), typeof i == "function")) {
              typeof f != "function" && f !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, i, o);
              break e;
            }
            n in e ? e[n] = i : i === !0 ? e.setAttribute(n, "") : Pl(e, n, i);
          }
    }
  }
  function Nt(e, t, n) {
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
        Be("error", e), Be("load", e);
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
                  Ze(e, t, f, _, n, null);
              }
          }
        o && Ze(e, t, "srcSet", n.srcSet, n, null), i && Ze(e, t, "src", n.src, n, null);
        return;
      case "input":
        Be("invalid", e);
        var w = f = _ = o = null, M = null, q = null;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var Z = n[i];
            if (Z != null)
              switch (i) {
                case "name":
                  o = Z;
                  break;
                case "type":
                  _ = Z;
                  break;
                case "checked":
                  M = Z;
                  break;
                case "defaultChecked":
                  q = Z;
                  break;
                case "value":
                  f = Z;
                  break;
                case "defaultValue":
                  w = Z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (Z != null)
                    throw Error(s(137, t));
                  break;
                default:
                  Ze(e, t, i, Z, n, null);
              }
          }
        Nh(
          e,
          f,
          w,
          M,
          q,
          _,
          o,
          !1
        ), Il(e);
        return;
      case "select":
        Be("invalid", e), i = _ = f = null;
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
                Ze(e, t, o, w, n, null);
            }
        t = f, n = _, e.multiple = !!i, t != null ? Tr(e, !!i, t, !1) : n != null && Tr(e, !!i, n, !0);
        return;
      case "textarea":
        Be("invalid", e), f = o = i = null;
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
                Ze(e, t, _, w, n, null);
            }
        Oh(e, i, o, f), Il(e);
        return;
      case "option":
        for (M in n)
          if (n.hasOwnProperty(M) && (i = n[M], i != null))
            switch (M) {
              case "selected":
                e.selected = i && typeof i != "function" && typeof i != "symbol";
                break;
              default:
                Ze(e, t, M, i, n, null);
            }
        return;
      case "dialog":
        Be("beforetoggle", e), Be("toggle", e), Be("cancel", e), Be("close", e);
        break;
      case "iframe":
      case "object":
        Be("load", e);
        break;
      case "video":
      case "audio":
        for (i = 0; i < al.length; i++)
          Be(al[i], e);
        break;
      case "image":
        Be("error", e), Be("load", e);
        break;
      case "details":
        Be("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Be("error", e), Be("load", e);
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
                Ze(e, t, q, i, n, null);
            }
        return;
      default:
        if (iu(t)) {
          for (Z in n)
            n.hasOwnProperty(Z) && (i = n[Z], i !== void 0 && Gc(
              e,
              t,
              Z,
              i,
              n,
              void 0
            ));
          return;
        }
    }
    for (w in n)
      n.hasOwnProperty(w) && (i = n[w], i != null && Ze(e, t, w, i, n, null));
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
        var o = null, f = null, _ = null, w = null, M = null, q = null, Z = null;
        for (G in n) {
          var $ = n[G];
          if (n.hasOwnProperty(G) && $ != null)
            switch (G) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                M = $;
              default:
                i.hasOwnProperty(G) || Ze(e, t, G, null, i, $);
            }
        }
        for (var I in i) {
          var G = i[I];
          if ($ = n[I], i.hasOwnProperty(I) && (G != null || $ != null))
            switch (I) {
              case "type":
                f = G;
                break;
              case "name":
                o = G;
                break;
              case "checked":
                q = G;
                break;
              case "defaultChecked":
                Z = G;
                break;
              case "value":
                _ = G;
                break;
              case "defaultValue":
                w = G;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null)
                  throw Error(s(137, t));
                break;
              default:
                G !== $ && Ze(
                  e,
                  t,
                  I,
                  G,
                  i,
                  $
                );
            }
        }
        au(
          e,
          _,
          w,
          M,
          q,
          Z,
          f,
          o
        );
        return;
      case "select":
        G = _ = w = I = null;
        for (f in n)
          if (M = n[f], n.hasOwnProperty(f) && M != null)
            switch (f) {
              case "value":
                break;
              case "multiple":
                G = M;
              default:
                i.hasOwnProperty(f) || Ze(
                  e,
                  t,
                  f,
                  null,
                  i,
                  M
                );
            }
        for (o in i)
          if (f = i[o], M = n[o], i.hasOwnProperty(o) && (f != null || M != null))
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
                f !== M && Ze(
                  e,
                  t,
                  o,
                  f,
                  i,
                  M
                );
            }
        t = w, n = _, i = G, I != null ? Tr(e, !!n, I, !1) : !!i != !!n && (t != null ? Tr(e, !!n, t, !0) : Tr(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        G = I = null;
        for (w in n)
          if (o = n[w], n.hasOwnProperty(w) && o != null && !i.hasOwnProperty(w))
            switch (w) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ze(e, t, w, null, i, o);
            }
        for (_ in i)
          if (o = i[_], f = n[_], i.hasOwnProperty(_) && (o != null || f != null))
            switch (_) {
              case "value":
                I = o;
                break;
              case "defaultValue":
                G = o;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (o != null) throw Error(s(91));
                break;
              default:
                o !== f && Ze(e, t, _, o, i, f);
            }
        wh(e, I, G);
        return;
      case "option":
        for (var Se in n)
          if (I = n[Se], n.hasOwnProperty(Se) && I != null && !i.hasOwnProperty(Se))
            switch (Se) {
              case "selected":
                e.selected = !1;
                break;
              default:
                Ze(
                  e,
                  t,
                  Se,
                  null,
                  i,
                  I
                );
            }
        for (M in i)
          if (I = i[M], G = n[M], i.hasOwnProperty(M) && I !== G && (I != null || G != null))
            switch (M) {
              case "selected":
                e.selected = I && typeof I != "function" && typeof I != "symbol";
                break;
              default:
                Ze(
                  e,
                  t,
                  M,
                  I,
                  i,
                  G
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
          I = n[ve], n.hasOwnProperty(ve) && I != null && !i.hasOwnProperty(ve) && Ze(e, t, ve, null, i, I);
        for (q in i)
          if (I = i[q], G = n[q], i.hasOwnProperty(q) && I !== G && (I != null || G != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (I != null)
                  throw Error(s(137, t));
                break;
              default:
                Ze(
                  e,
                  t,
                  q,
                  I,
                  i,
                  G
                );
            }
        return;
      default:
        if (iu(t)) {
          for (var Ke in n)
            I = n[Ke], n.hasOwnProperty(Ke) && I !== void 0 && !i.hasOwnProperty(Ke) && Gc(
              e,
              t,
              Ke,
              void 0,
              i,
              I
            );
          for (Z in i)
            I = i[Z], G = n[Z], !i.hasOwnProperty(Z) || I === G || I === void 0 && G === void 0 || Gc(
              e,
              t,
              Z,
              I,
              i,
              G
            );
          return;
        }
    }
    for (var U in n)
      I = n[U], n.hasOwnProperty(U) && I != null && !i.hasOwnProperty(U) && Ze(e, t, U, null, i, I);
    for ($ in i)
      I = i[$], G = n[$], !i.hasOwnProperty($) || I === G || I == null && G == null || Ze(e, t, $, I, i, G);
  }
  var Vc = null, Yc = null;
  function Us(e) {
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
  function wa(e) {
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
            if (n & 1 && il(_.documentElement), n & 2 && il(_.body), n & 4)
              for (n = _.head, il(n), _ = n.firstChild; _; ) {
                var w = _.nextSibling, M = _.nodeName;
                _[Si] || M === "SCRIPT" || M === "STYLE" || M === "LINK" && _.rel.toLowerCase() === "stylesheet" || n.removeChild(_), _ = w;
              }
          }
          if (o === 0) {
            e.removeChild(f), dl(t);
            return;
          }
          o--;
        } else
          n === "$" || n === "$?" || n === "$!" ? o++ : i = n.charCodeAt(0) - 48;
      else i = 0;
      n = f;
    } while (n);
    dl(t);
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
        if (!e[Si])
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
      if (e = En(e.nextSibling), e === null) break;
    }
    return null;
  }
  function E0(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = En(e.nextSibling), e === null)) return null;
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
  function En(e) {
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
    switch (t = Us(n), e) {
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
  function il(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    $o(e);
  }
  var gn = /* @__PURE__ */ new Map(), Um = /* @__PURE__ */ new Set();
  function zs(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ea = re.d;
  re.d = {
    f: A0,
    r: T0,
    D: N0,
    C: w0,
    L: O0,
    m: D0,
    X: R0,
    S: M0,
    M: k0
  };
  function A0() {
    var e = ea.f(), t = Os();
    return e || t;
  }
  function T0(e) {
    var t = xr(e);
    t !== null && t.tag === 5 && t.type === "form" ? ap(t) : ea.r(e);
  }
  var ni = typeof document > "u" ? null : document;
  function zm(e, t, n) {
    var i = ni;
    if (i && typeof t == "string" && t) {
      var o = un(t);
      o = 'link[rel="' + e + '"][href="' + o + '"]', typeof n == "string" && (o += '[crossorigin="' + n + '"]'), Um.has(o) || (Um.add(o), e = { rel: e, crossOrigin: n, href: t }, i.querySelector(o) === null && (t = i.createElement("link"), Nt(t, "link", e), St(t), i.head.appendChild(t)));
    }
  }
  function N0(e) {
    ea.D(e), zm("dns-prefetch", e, null);
  }
  function w0(e, t) {
    ea.C(e, t), zm("preconnect", e, t);
  }
  function O0(e, t, n) {
    ea.L(e, t, n);
    var i = ni;
    if (i && e && t) {
      var o = 'link[rel="preload"][as="' + un(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (o += '[imagesrcset="' + un(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (o += '[imagesizes="' + un(
        n.imageSizes
      ) + '"]')) : o += '[href="' + un(e) + '"]';
      var f = o;
      switch (t) {
        case "style":
          f = ai(e);
          break;
        case "script":
          f = ri(e);
      }
      gn.has(f) || (e = v(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), gn.set(f, e), i.querySelector(o) !== null || t === "style" && i.querySelector(ll(f)) || t === "script" && i.querySelector(sl(f)) || (t = i.createElement("link"), Nt(t, "link", e), St(t), i.head.appendChild(t)));
    }
  }
  function D0(e, t) {
    ea.m(e, t);
    var n = ni;
    if (n && e) {
      var i = t && typeof t.as == "string" ? t.as : "script", o = 'link[rel="modulepreload"][as="' + un(i) + '"][href="' + un(e) + '"]', f = o;
      switch (i) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = ri(e);
      }
      if (!gn.has(f) && (e = v({ rel: "modulepreload", href: e }, t), gn.set(f, e), n.querySelector(o) === null)) {
        switch (i) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(sl(f)))
              return;
        }
        i = n.createElement("link"), Nt(i, "link", e), St(i), n.head.appendChild(i);
      }
    }
  }
  function M0(e, t, n) {
    ea.S(e, t, n);
    var i = ni;
    if (i && e) {
      var o = Er(i).hoistableStyles, f = ai(e);
      t = t || "default";
      var _ = o.get(f);
      if (!_) {
        var w = { loading: 0, preload: null };
        if (_ = i.querySelector(
          ll(f)
        ))
          w.loading = 5;
        else {
          e = v(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = gn.get(f)) && Jc(e, n);
          var M = _ = i.createElement("link");
          St(M), Nt(M, "link", e), M._p = new Promise(function(q, Z) {
            M.onload = q, M.onerror = Z;
          }), M.addEventListener("load", function() {
            w.loading |= 1;
          }), M.addEventListener("error", function() {
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
    ea.X(e, t);
    var n = ni;
    if (n && e) {
      var i = Er(n).hoistableScripts, o = ri(e), f = i.get(o);
      f || (f = n.querySelector(sl(o)), f || (e = v({ src: e, async: !0 }, t), (t = gn.get(o)) && Wc(e, t), f = n.createElement("script"), St(f), Nt(f, "link", e), n.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, i.set(o, f));
    }
  }
  function k0(e, t) {
    ea.M(e, t);
    var n = ni;
    if (n && e) {
      var i = Er(n).hoistableScripts, o = ri(e), f = i.get(o);
      f || (f = n.querySelector(sl(o)), f || (e = v({ src: e, async: !0, type: "module" }, t), (t = gn.get(o)) && Wc(e, t), f = n.createElement("script"), St(f), Nt(f, "link", e), n.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, i.set(o, f));
    }
  }
  function Hm(e, t, n, i) {
    var o = (o = se.current) ? zs(o) : null;
    if (!o) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = ai(n.href), n = Er(
          o
        ).hoistableStyles, i = n.get(t), i || (i = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, i)), i) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = ai(n.href);
          var f = Er(
            o
          ).hoistableStyles, _ = f.get(e);
          if (_ || (o = o.ownerDocument || o, _ = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, f.set(e, _), (f = o.querySelector(
            ll(e)
          )) && !f._p && (_.instance = f, _.state.loading = 5), gn.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, gn.set(e, n), f || j0(
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
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = ri(n), n = Er(
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
  function ai(e) {
    return 'href="' + un(e) + '"';
  }
  function ll(e) {
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
    }), Nt(t, "link", n), St(t), e.head.appendChild(t));
  }
  function ri(e) {
    return '[src="' + un(e) + '"]';
  }
  function sl(e) {
    return "script[async]" + e;
  }
  function qm(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var i = e.querySelector(
            'style[data-href~="' + un(n.href) + '"]'
          );
          if (i)
            return t.instance = i, St(i), i;
          var o = v({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return i = (e.ownerDocument || e).createElement(
            "style"
          ), St(i), Nt(i, "style", o), Hs(i, n.precedence, e), t.instance = i;
        case "stylesheet":
          o = ai(n.href);
          var f = e.querySelector(
            ll(o)
          );
          if (f)
            return t.state.loading |= 4, t.instance = f, St(f), f;
          i = Pm(n), (o = gn.get(o)) && Jc(i, o), f = (e.ownerDocument || e).createElement("link"), St(f);
          var _ = f;
          return _._p = new Promise(function(w, M) {
            _.onload = w, _.onerror = M;
          }), Nt(f, "link", i), t.state.loading |= 4, Hs(f, n.precedence, e), t.instance = f;
        case "script":
          return f = ri(n.src), (o = e.querySelector(
            sl(f)
          )) ? (t.instance = o, St(o), o) : (i = n, (o = gn.get(f)) && (i = v({}, n), Wc(i, o)), e = e.ownerDocument || e, o = e.createElement("script"), St(o), Nt(o, "link", i), e.head.appendChild(o), t.instance = o);
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
      if (!(f[Si] || f[Ot] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  var ol = null;
  function B0() {
  }
  function U0(e, t, n) {
    if (ol === null) throw Error(s(475));
    var i = ol;
    if (t.type === "stylesheet" && (typeof n.media != "string" || matchMedia(n.media).matches !== !1) && (t.state.loading & 4) === 0) {
      if (t.instance === null) {
        var o = ai(n.href), f = e.querySelector(
          ll(o)
        );
        if (f) {
          e = f._p, e !== null && typeof e == "object" && typeof e.then == "function" && (i.count++, i = qs.bind(i), e.then(i, i)), t.state.loading |= 4, t.instance = f, St(f);
          return;
        }
        f = e.ownerDocument || e, n = Pm(n), (o = gn.get(o)) && Jc(n, o), f = f.createElement("link"), St(f);
        var _ = f;
        _._p = new Promise(function(w, M) {
          _.onload = w, _.onerror = M;
        }), Nt(f, "link", n), t.instance = f;
      }
      i.stylesheets === null && (i.stylesheets = /* @__PURE__ */ new Map()), i.stylesheets.set(t, e), (e = t.state.preload) && (t.state.loading & 3) === 0 && (i.count++, t = qs.bind(i), e.addEventListener("load", t), e.addEventListener("error", t));
    }
  }
  function z0() {
    if (ol === null) throw Error(s(475));
    var e = ol;
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
  var ul = {
    $$typeof: j,
    Provider: null,
    Consumer: null,
    _currentValue: ce,
    _currentValue2: ce,
    _threadCount: 0
  };
  function P0(e, t, n, i, o, f, _, w) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Zo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Zo(0), this.hiddenUpdates = Zo(null), this.identifierPrefix = i, this.onUncaughtError = o, this.onCaughtError = f, this.onRecoverableError = _, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = w, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Ym(e, t, n, i, o, f, _, w, M, q, Z, $) {
    return e = new P0(
      e,
      t,
      n,
      _,
      w,
      M,
      q,
      $
    ), t = 1, f === !0 && (t |= 24), f = Kt(3, null, null, t), e.current = f, f.stateNode = e, t = ju(), t.refCount++, e.pooledCache = t, t.refCount++, f.memoizedState = {
      element: i,
      isDehydrated: n,
      cache: t
    }, zu(f), e;
  }
  function Fm(e) {
    return e ? (e = Lr, e) : Lr;
  }
  function Xm(e, t, n, i, o, f) {
    o = Fm(o), i.context === null ? i.context = o : i.pendingContext = o, i = ma(t), i.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (i.callback = f), n = ga(e, i, t), n !== null && (tn(n, e, t), Hi(n, e, t));
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
      var t = jr(e, 67108864);
      t !== null && tn(t, e, 67108864), ef(e, 67108864);
    }
  }
  var Gs = !0;
  function q0(e, t, n, i) {
    var o = z.T;
    z.T = null;
    var f = re.p;
    try {
      re.p = 2, tf(e, t, n, i);
    } finally {
      re.p = f, z.T = o;
    }
  }
  function I0(e, t, n, i) {
    var o = z.T;
    z.T = null;
    var f = re.p;
    try {
      re.p = 8, tf(e, t, n, i);
    } finally {
      re.p = f, z.T = o;
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
          var f = xr(o);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                  var _ = De(f.pendingLanes);
                  if (_ !== 0) {
                    var w = f;
                    for (w.pendingLanes |= 2, w.entangledLanes |= 2; _; ) {
                      var M = 1 << 31 - Y(_);
                      w.entanglements[1] |= M, _ &= ~M;
                    }
                    jn(f), (Ye & 6) === 0 && (Ns = jt() + 500, nl(0));
                  }
                }
                break;
              case 13:
                w = jr(f, 2), w !== null && tn(w, f, 2), Os(), ef(f, 2);
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
    if (Vs = null, e = _r(e), e !== null) {
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
        switch (yi()) {
          case Xt:
            return 2;
          case me:
            return 8;
          case ge:
          case Ie:
            return 32;
          case Pe:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var rf = !1, Oa = null, Da = null, Ma = null, cl = /* @__PURE__ */ new Map(), fl = /* @__PURE__ */ new Map(), Ra = [], G0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Jm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Oa = null;
        break;
      case "dragenter":
      case "dragleave":
        Da = null;
        break;
      case "mouseover":
      case "mouseout":
        Ma = null;
        break;
      case "pointerover":
      case "pointerout":
        cl.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        fl.delete(t.pointerId);
    }
  }
  function hl(e, t, n, i, o, f) {
    return e === null || e.nativeEvent !== f ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: i,
      nativeEvent: f,
      targetContainers: [o]
    }, t !== null && (t = xr(t), t !== null && Zm(t)), e) : (e.eventSystemFlags |= i, t = e.targetContainers, o !== null && t.indexOf(o) === -1 && t.push(o), e);
  }
  function V0(e, t, n, i, o) {
    switch (t) {
      case "focusin":
        return Oa = hl(
          Oa,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "dragenter":
        return Da = hl(
          Da,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "mouseover":
        return Ma = hl(
          Ma,
          e,
          t,
          n,
          i,
          o
        ), !0;
      case "pointerover":
        var f = o.pointerId;
        return cl.set(
          f,
          hl(
            cl.get(f) || null,
            e,
            t,
            n,
            i,
            o
          )
        ), !0;
      case "gotpointercapture":
        return f = o.pointerId, fl.set(
          f,
          hl(
            fl.get(f) || null,
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
    var t = _r(e.target);
    if (t !== null) {
      var n = u(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = b(n), t !== null) {
            e.blockedOn = t, Uy(e.priority, function() {
              if (n.tag === 13) {
                var i = en();
                i = Ko(i);
                var o = jr(n, i);
                o !== null && tn(o, n, i), ef(n, i);
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
        return t = xr(n), t !== null && Zm(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function $m(e, t, n) {
    Ys(e) && n.delete(t);
  }
  function Y0() {
    rf = !1, Oa !== null && Ys(Oa) && (Oa = null), Da !== null && Ys(Da) && (Da = null), Ma !== null && Ys(Ma) && (Ma = null), cl.forEach($m), fl.forEach($m);
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
          var f = xr(n);
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
  function dl(e) {
    function t(M) {
      return Fs(M, e);
    }
    Oa !== null && Fs(Oa, e), Da !== null && Fs(Da, e), Ma !== null && Fs(Ma, e), cl.forEach(t), fl.forEach(t);
    for (var n = 0; n < Ra.length; n++) {
      var i = Ra[n];
      i.blockedOn === e && (i.blockedOn = null);
    }
    for (; 0 < Ra.length && (n = Ra[0], n.blockedOn === null); )
      Wm(n), n.blockedOn === null && Ra.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (i = 0; i < n.length; i += 3) {
        var o = n[i], f = n[i + 1], _ = o[zt] || null;
        if (typeof f == "function")
          _ || eg(n);
        else if (_) {
          var w = null;
          if (f && f.hasAttribute("formAction")) {
            if (o = f, _ = f[zt] || null)
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
    var n = t.current, i = en();
    Xm(n, i, e, t, null, null);
  }, Qs.prototype.unmount = lf.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Xm(e.current, 2, null, e, null, null), Os(), t[Sr] = null;
    }
  };
  function Qs(e) {
    this._internalRoot = e;
  }
  Qs.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = vh();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Ra.length && t !== 0 && t < Ra[n].priority; n++) ;
      Ra.splice(n, 0, e), n === 0 && Wm(e);
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
  re.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = h(t), e = e !== null ? p(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var F0 = {
    bundleType: 0,
    version: "19.1.1",
    rendererPackageName: "react-dom",
    currentDispatcherRef: z,
    reconcilerVersion: "19.1.1"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Zs = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Zs.isDisabled && Zs.supportsFiber)
      try {
        Qt = Zs.inject(
          F0
        ), nt = Zs;
      } catch {
      }
  }
  return vl.createRoot = function(e, t) {
    if (!c(e)) throw Error(s(299));
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
    ), e[Sr] = t.current, qc(e), new lf(t);
  }, vl.hydrateRoot = function(e, t, n) {
    if (!c(e)) throw Error(s(299));
    var i = !1, o = "", f = vp, _ = yp, w = bp, M = null, q = null;
    return n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (o = n.identifierPrefix), n.onUncaughtError !== void 0 && (f = n.onUncaughtError), n.onCaughtError !== void 0 && (_ = n.onCaughtError), n.onRecoverableError !== void 0 && (w = n.onRecoverableError), n.unstable_transitionCallbacks !== void 0 && (M = n.unstable_transitionCallbacks), n.formState !== void 0 && (q = n.formState)), t = Ym(
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
      M,
      q
    ), t.context = Fm(null), n = t.current, i = en(), i = Ko(i), o = ma(i), o.callback = null, ga(n, o, i), n = i, t.current.lanes = n, bi(t, n), jn(t), e[Sr] = t.current, qc(e), new Qs(t);
  }, vl.version = "19.1.1", vl;
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
class zv extends Error {
  constructor(a, l) {
    super(a), T2(this, "data"), this.data = l;
  }
  toString() {
    return this.message;
  }
}
async function N2(r, a) {
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
    throw new zv(u.statusText, u);
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
    throw new zv(b.message || `Request failed with status ${u.status}`, u);
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
    const m = {
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
      let h = function(p, v) {
        let S = !1;
        for (const g of Object.keys(v))
          p[g] === void 0 ? (p[g] = v[g], S = !0) : typeof v[g] == "object" && v[g] !== null && (p[g] = p[g] || {}, h(p[g], v[g]) && (S = !0));
        return S;
      };
      s && u.version !== s && (m.version.changed = !0, m.version.new = s, u.version = s), c && c !== "*" && u.formatVersion !== c && (m.formatVersion.changed = !0, m.formatVersion.new = c, u.formatVersion = c), (h(u, this.defaultSettings) || m.version.changed || m.formatVersion.changed) && this.saveSettings();
    } else if (Array.isArray(l)) {
      s && !u.version && (u.version = s, m.version.changed = !0, m.version.new = s), c && !u.formatVersion && (u.formatVersion = c, m.formatVersion.changed = !0, m.formatVersion.new = c);
      let h = structuredClone(u), p = u.formatVersion;
      try {
        let v;
        do {
          v = !1;
          let S = l.find((g) => g.from === p);
          if (S && S.to > p)
            h = await S.action(h), p = S.to, h.formatVersion = S.to, v = !0;
          else
            for (const g of l)
              if (g.from === "*" && g.to > p && p !== g.to) {
                h = await g.action(h), p = g.to, h.formatVersion = g.to, v = !0;
                break;
              }
        } while (v);
        if (p !== u.formatVersion) {
          m.formatVersion.changed = !0, m.formatVersion.new = p;
          const S = this.defaultSettings.version;
          S && (h.version = S);
        }
        if (m.formatVersion.changed) {
          for (const S of Object.keys(u))
            delete u[S];
          Object.assign(u, h), this.saveSettings();
        }
      } catch (v) {
        throw console.error("Failed to apply version changes:", v), new Error(`Version migration failed: ${v instanceof Error ? v.message : v}`, {
          cause: v
        });
      }
    }
    return m.newSettings = u, m;
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
function la(r) {
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
function Un(r) {
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
function ln(r) {
  return r != null;
}
function pf(r) {
  return !r.trim().length;
}
function qv(r) {
  return r == null ? r === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(r);
}
const B2 = "Incorrect 'index' type", U2 = (r) => `Invalid value for key ${r}`, z2 = (r) => `Pattern length exceeds max of ${r}.`, H2 = (r) => `Missing ${r} property in key`, P2 = (r) => `Property 'weight' in key '${r}' must be a positive integer`, bg = Object.prototype.hasOwnProperty;
class q2 {
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
  if (Un(r) || la(r))
    s = r, a = Sg(r), l = zf(r);
  else {
    if (!bg.call(r, "name"))
      throw new Error(H2("name"));
    const b = r.name;
    if (s = b, bg.call(r, "weight") && (c = r.weight, c <= 0))
      throw new Error(P2(b));
    a = Sg(b), l = zf(b), u = r.getFn;
  }
  return { path: a, id: l, weight: c, src: s, getFn: u };
}
function Sg(r) {
  return la(r) ? r : r.split(".");
}
function zf(r) {
  return la(r) ? r.join(".") : r;
}
function I2(r, a) {
  let l = [], s = !1;
  const c = (u, b, m) => {
    if (ln(u))
      if (!b[m])
        l.push(u);
      else {
        let h = b[m];
        const p = u[h];
        if (!ln(p))
          return;
        if (m === b.length - 1 && (Un(p) || Hv(p) || j2(p)))
          l.push(k2(p));
        else if (la(p)) {
          s = !0;
          for (let v = 0, S = p.length; v < S; v += 1)
            c(p[v], b, m + 1);
        } else b.length && c(p, b, m + 1);
      }
  };
  return c(r, Un(a) ? a.split(".") : a, 0), s ? l : l[0];
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
    get(c) {
      const u = c.match(X2).length;
      if (l.has(u))
        return l.get(u);
      const b = 1 / Math.pow(u, 0.5 * r), m = parseFloat(Math.round(b * s) / s);
      return l.set(u, m), m;
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
    this.isCreated || !this.docs.length || (this.isCreated = !0, Un(this.docs[0]) ? this.docs.forEach((a, l) => {
      this._addString(a, l);
    }) : this.docs.forEach((a, l) => {
      this._addObject(a, l);
    }), this.norm.clear());
  }
  // Adds a doc to the end of the index
  add(a) {
    const l = this.size();
    Un(a) ? this._addString(a, l) : this._addObject(a, l);
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
    if (!ln(a) || pf(a))
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
      if (ln(b)) {
        if (la(b)) {
          let m = [];
          const h = [{ nestedArrIndex: -1, value: b }];
          for (; h.length; ) {
            const { nestedArrIndex: p, value: v } = h.pop();
            if (ln(v))
              if (Un(v) && !pf(v)) {
                let S = {
                  v,
                  i: p,
                  n: this.norm.get(v)
                };
                m.push(S);
              } else la(v) && v.forEach((S, g) => {
                h.push({
                  nestedArrIndex: g,
                  value: S
                });
              });
          }
          s.$[u] = m;
        } else if (Un(b) && !pf(b)) {
          let m = {
            v: b,
            n: this.norm.get(b)
          };
          s.$[u] = m;
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
  const c = new ih({ getFn: l, fieldNormWeight: s });
  return c.setKeys(r.map(Iv)), c.setSources(a), c.create(), c;
}
function Z2(r, { getFn: a = Ee.getFn, fieldNormWeight: l = Ee.fieldNormWeight } = {}) {
  const { keys: s, records: c } = r, u = new ih({ getFn: a, fieldNormWeight: l });
  return u.setKeys(s), u.setIndexRecords(c), u;
}
function Ks(r, {
  errors: a = 0,
  currentLocation: l = 0,
  expectedLocation: s = 0,
  distance: c = Ee.distance,
  ignoreLocation: u = Ee.ignoreLocation
} = {}) {
  const b = a / r.length;
  if (u)
    return b;
  const m = Math.abs(s - l);
  return c ? b + m / c : m ? 1 : b;
}
function K2(r = [], a = Ee.minMatchCharLength) {
  let l = [], s = -1, c = -1, u = 0;
  for (let b = r.length; u < b; u += 1) {
    let m = r[u];
    m && s === -1 ? s = u : !m && s !== -1 && (c = u - 1, c - s + 1 >= a && l.push([s, c]), s = -1);
  }
  return r[u - 1] && u - s >= a && l.push([s, u - 1]), l;
}
const dr = 32;
function J2(r, a, l, {
  location: s = Ee.location,
  distance: c = Ee.distance,
  threshold: u = Ee.threshold,
  findAllMatches: b = Ee.findAllMatches,
  minMatchCharLength: m = Ee.minMatchCharLength,
  includeMatches: h = Ee.includeMatches,
  ignoreLocation: p = Ee.ignoreLocation
} = {}) {
  if (a.length > dr)
    throw new Error(z2(dr));
  const v = a.length, S = r.length, g = Math.max(0, Math.min(s, S));
  let y = u, d = g;
  const x = m > 1 || h, C = x ? Array(S) : [];
  let O;
  for (; (O = r.indexOf(a, d)) > -1; ) {
    let L = Ks(a, {
      currentLocation: O,
      expectedLocation: g,
      distance: c,
      ignoreLocation: p
    });
    if (y = Math.min(L, y), d = O + v, x) {
      let V = 0;
      for (; V < v; )
        C[O + V] = 1, V += 1;
    }
  }
  d = -1;
  let A = [], j = 1, E = v + S;
  const N = 1 << v - 1;
  for (let L = 0; L < v; L += 1) {
    let V = 0, W = E;
    for (; V < W; )
      Ks(a, {
        errors: L,
        currentLocation: g + W,
        expectedLocation: g,
        distance: c,
        ignoreLocation: p
      }) <= y ? V = W : E = W, W = Math.floor((E - V) / 2 + V);
    E = W;
    let H = Math.max(1, g - W + 1), X = b ? S : Math.min(g + W, S) + v, Q = Array(X + 2);
    Q[X + 1] = (1 << L) - 1;
    for (let oe = X; oe >= H; oe -= 1) {
      let de = oe - 1, z = l[r.charAt(de)];
      if (x && (C[de] = +!!z), Q[oe] = (Q[oe + 1] << 1 | 1) & z, L && (Q[oe] |= (A[oe + 1] | A[oe]) << 1 | 1 | A[oe + 1]), Q[oe] & N && (j = Ks(a, {
        errors: L,
        currentLocation: de,
        expectedLocation: g,
        distance: c,
        ignoreLocation: p
      }), j <= y)) {
        if (y = j, d = de, d <= g)
          break;
        H = Math.max(1, 2 * g - d);
      }
    }
    if (Ks(a, {
      errors: L + 1,
      currentLocation: g,
      expectedLocation: g,
      distance: c,
      ignoreLocation: p
    }) > y)
      break;
    A = Q;
  }
  const k = {
    isMatch: d >= 0,
    // Count exact matches (those with a score of 0) to be "almost" exact
    score: Math.max(1e-3, j)
  };
  if (x) {
    const L = K2(C, m);
    L.length ? h && (k.indices = L) : k.isMatch = !1;
  }
  return k;
}
function W2(r) {
  let a = {};
  for (let l = 0, s = r.length; l < s; l += 1) {
    const c = r.charAt(l);
    a[c] = (a[c] || 0) | 1 << s - l - 1;
  }
  return a;
}
const zo = String.prototype.normalize ? ((r) => r.normalize("NFD").replace(/[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D3-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C04\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DF9\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F]/g, "")) : ((r) => r);
class Vv {
  constructor(a, {
    location: l = Ee.location,
    threshold: s = Ee.threshold,
    distance: c = Ee.distance,
    includeMatches: u = Ee.includeMatches,
    findAllMatches: b = Ee.findAllMatches,
    minMatchCharLength: m = Ee.minMatchCharLength,
    isCaseSensitive: h = Ee.isCaseSensitive,
    ignoreDiacritics: p = Ee.ignoreDiacritics,
    ignoreLocation: v = Ee.ignoreLocation
  } = {}) {
    if (this.options = {
      location: l,
      threshold: s,
      distance: c,
      includeMatches: u,
      findAllMatches: b,
      minMatchCharLength: m,
      isCaseSensitive: h,
      ignoreDiacritics: p,
      ignoreLocation: v
    }, a = h ? a : a.toLowerCase(), a = p ? zo(a) : a, this.pattern = a, this.chunks = [], !this.pattern.length)
      return;
    const S = (y, d) => {
      this.chunks.push({
        pattern: y,
        alphabet: W2(y),
        startIndex: d
      });
    }, g = this.pattern.length;
    if (g > dr) {
      let y = 0;
      const d = g % dr, x = g - d;
      for (; y < x; )
        S(this.pattern.substr(y, dr), y), y += dr;
      if (d) {
        const C = g - dr;
        S(this.pattern.substr(C), C);
      }
    } else
      S(this.pattern, 0);
  }
  searchIn(a) {
    const { isCaseSensitive: l, ignoreDiacritics: s, includeMatches: c } = this.options;
    if (a = l ? a : a.toLowerCase(), a = s ? zo(a) : a, this.pattern === a) {
      let x = {
        isMatch: !0,
        score: 0
      };
      return c && (x.indices = [[0, a.length - 1]]), x;
    }
    const {
      location: u,
      distance: b,
      threshold: m,
      findAllMatches: h,
      minMatchCharLength: p,
      ignoreLocation: v
    } = this.options;
    let S = [], g = 0, y = !1;
    this.chunks.forEach(({ pattern: x, alphabet: C, startIndex: O }) => {
      const { isMatch: A, score: j, indices: E } = J2(a, x, C, {
        location: u + O,
        distance: b,
        threshold: m,
        findAllMatches: h,
        minMatchCharLength: p,
        includeMatches: c,
        ignoreLocation: v
      });
      A && (y = !0), g += j, A && E && (S = [...S, ...E]);
    });
    let d = {
      isMatch: y,
      score: y ? g / this.chunks.length : 1
    };
    return y && c && (d.indices = S), d;
  }
}
class qa {
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
class $2 extends qa {
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
class eb extends qa {
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
class tb extends qa {
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
class nb extends qa {
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
class ab extends qa {
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
class rb extends qa {
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
class Yv extends qa {
  constructor(a, {
    location: l = Ee.location,
    threshold: s = Ee.threshold,
    distance: c = Ee.distance,
    includeMatches: u = Ee.includeMatches,
    findAllMatches: b = Ee.findAllMatches,
    minMatchCharLength: m = Ee.minMatchCharLength,
    isCaseSensitive: h = Ee.isCaseSensitive,
    ignoreDiacritics: p = Ee.ignoreDiacritics,
    ignoreLocation: v = Ee.ignoreLocation
  } = {}) {
    super(a), this._bitapSearch = new Vv(a, {
      location: l,
      threshold: s,
      distance: c,
      includeMatches: u,
      findAllMatches: b,
      minMatchCharLength: m,
      isCaseSensitive: h,
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
class Fv extends qa {
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
    let s = l.trim().split(ib).filter((u) => u && !!u.trim()), c = [];
    for (let u = 0, b = s.length; u < b; u += 1) {
      const m = s[u];
      let h = !1, p = -1;
      for (; !h && ++p < xg; ) {
        const v = Hf[p];
        let S = v.isMultiMatch(m);
        S && (c.push(new v(S, a)), h = !0);
      }
      if (!h)
        for (p = -1; ++p < xg; ) {
          const v = Hf[p];
          let S = v.isSingleMatch(m);
          if (S) {
            c.push(new v(S, a));
            break;
          }
        }
    }
    return c;
  });
}
const ob = /* @__PURE__ */ new Set([Yv.type, Fv.type]);
class ub {
  constructor(a, {
    isCaseSensitive: l = Ee.isCaseSensitive,
    ignoreDiacritics: s = Ee.ignoreDiacritics,
    includeMatches: c = Ee.includeMatches,
    minMatchCharLength: u = Ee.minMatchCharLength,
    ignoreLocation: b = Ee.ignoreLocation,
    findAllMatches: m = Ee.findAllMatches,
    location: h = Ee.location,
    threshold: p = Ee.threshold,
    distance: v = Ee.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: l,
      ignoreDiacritics: s,
      includeMatches: c,
      minMatchCharLength: u,
      findAllMatches: m,
      ignoreLocation: b,
      location: h,
      threshold: p,
      distance: v
    }, a = l ? a : a.toLowerCase(), a = s ? zo(a) : a, this.pattern = a, this.query = sb(this.pattern, this.options);
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
    a = c ? a : a.toLowerCase(), a = u ? zo(a) : a;
    let b = 0, m = [], h = 0;
    for (let p = 0, v = l.length; p < v; p += 1) {
      const S = l[p];
      m.length = 0, b = 0;
      for (let g = 0, y = S.length; g < y; g += 1) {
        const d = S[g], { isMatch: x, indices: C, score: O } = d.search(a);
        if (x) {
          if (b += 1, h += O, s) {
            const A = d.constructor.type;
            ob.has(A) ? m = [...m, ...C] : m.push(C);
          }
        } else {
          h = 0, b = 0, m.length = 0;
          break;
        }
      }
      if (b) {
        let g = {
          isMatch: !0,
          score: h / b
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
}, Gf = (r) => !!(r[Ho.AND] || r[Ho.OR]), fb = (r) => !!r[If.PATH], hb = (r) => !la(r) && Pv(r) && !Gf(r), Eg = (r) => ({
  [Ho.AND]: Object.keys(r).map((a) => ({
    [a]: r[a]
  }))
});
function Xv(r, a, { auto: l = !0 } = {}) {
  const s = (c) => {
    let u = Object.keys(c);
    const b = fb(c);
    if (!b && u.length > 1 && !Gf(c))
      return s(Eg(c));
    if (hb(c)) {
      const h = b ? c[If.PATH] : u[0], p = b ? c[If.PATTERN] : c[h];
      if (!Un(p))
        throw new Error(U2(h));
      const v = {
        keyId: zf(h),
        pattern: p
      };
      return l && (v.searcher = qf(p, a)), v;
    }
    let m = {
      children: [],
      operator: u[0]
    };
    return u.forEach((h) => {
      const p = c[h];
      la(p) && p.forEach((v) => {
        m.children.push(s(v));
      });
    }), m;
  };
  return Gf(r) || (r = Eg(r)), s(r);
}
function db(r, { ignoreFieldNorm: a = Ee.ignoreFieldNorm }) {
  r.forEach((l) => {
    let s = 1;
    l.matches.forEach(({ key: c, norm: u, score: b }) => {
      const m = c ? c.weight : null;
      s *= Math.pow(
        b === 0 && m ? Number.EPSILON : b,
        (m || 1) * (a ? 1 : u)
      );
    }), l.score = s;
  });
}
function pb(r, a) {
  const l = r.matches;
  a.matches = [], ln(l) && l.forEach((s) => {
    if (!ln(s.indices) || !s.indices.length)
      return;
    const { indices: c, value: u } = s;
    let b = {
      indices: c,
      value: u
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
  const c = [];
  return l && c.push(pb), s && c.push(mb), r.map((u) => {
    const { idx: b } = u, m = {
      item: a[b],
      refIndex: b
    };
    return c.length && c.forEach((h) => {
      h(u, m);
    }), m;
  });
}
class gi {
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
    ln(a) && (this._docs.push(a), this._myIndex.add(a));
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
      ignoreFieldNorm: m
    } = this.options;
    let h = Un(a) ? Un(this._docs[0]) ? this._searchStringList(a) : this._searchObjectList(a) : this._searchLogical(a);
    return db(h, { ignoreFieldNorm: m }), u && h.sort(b), Hv(l) && l > -1 && (h = h.slice(0, l)), gb(h, this._docs, {
      includeMatches: s,
      includeScore: c
    });
  }
  _searchStringList(a) {
    const l = qf(a, this.options), { records: s } = this._myIndex, c = [];
    return s.forEach(({ v: u, i: b, n: m }) => {
      if (!ln(u))
        return;
      const { isMatch: h, score: p, indices: v } = l.searchIn(u);
      h && c.push({
        item: u,
        idx: b,
        matches: [{ score: p, value: u, norm: m, indices: v }]
      });
    }), c;
  }
  _searchLogical(a) {
    const l = Xv(a, this.options), s = (m, h, p) => {
      if (!m.children) {
        const { keyId: S, searcher: g } = m, y = this._findMatches({
          key: this._keyStore.get(S),
          value: this._myIndex.getValueForItemAtKeyId(h, S),
          searcher: g
        });
        return y && y.length ? [
          {
            idx: p,
            item: h,
            matches: y
          }
        ] : [];
      }
      const v = [];
      for (let S = 0, g = m.children.length; S < g; S += 1) {
        const y = m.children[S], d = s(y, h, p);
        if (d.length)
          v.push(...d);
        else if (m.operator === Ho.AND)
          return [];
      }
      return v;
    }, c = this._myIndex.records, u = {}, b = [];
    return c.forEach(({ $: m, i: h }) => {
      if (ln(m)) {
        let p = s(l, m, h);
        p.length && (u[h] || (u[h] = { idx: h, item: m, matches: [] }, b.push(u[h])), p.forEach(({ matches: v }) => {
          u[h].matches.push(...v);
        }));
      }
    }), b;
  }
  _searchObjectList(a) {
    const l = qf(a, this.options), { keys: s, records: c } = this._myIndex, u = [];
    return c.forEach(({ $: b, i: m }) => {
      if (!ln(b))
        return;
      let h = [];
      s.forEach((p, v) => {
        h.push(
          ...this._findMatches({
            key: p,
            value: b[v],
            searcher: l
          })
        );
      }), h.length && u.push({
        idx: m,
        item: b,
        matches: h
      });
    }), u;
  }
  _findMatches({ key: a, value: l, searcher: s }) {
    if (!ln(l))
      return [];
    let c = [];
    if (la(l))
      l.forEach(({ v: u, i: b, n: m }) => {
        if (!ln(u))
          return;
        const { isMatch: h, score: p, indices: v } = s.searchIn(u);
        h && c.push({
          score: p,
          key: a,
          value: u,
          idx: b,
          norm: m,
          indices: v
        });
      });
    else {
      const { v: u, n: b } = l, { isMatch: m, score: h, indices: p } = s.searchIn(u);
      m && c.push({ score: h, key: a, value: u, norm: b, indices: p });
    }
    return c;
  }
}
gi.version = "7.1.0";
gi.createIndex = Gv;
gi.parseIndex = Z2;
gi.config = Ee;
gi.parseQuery = Xv;
cb(ub);
async function vb(r, ...a) {
  await SillyTavern.getContext().SlashCommandParser.commands[r].callback(...a);
}
async function Te(r, a, { escapeHtml: l = !0 } = {}) {
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
function or(r) {
  return c2(r);
}
function _b() {
  return {
    prompt: pl[ml.prompt],
    interval: pl[ml.interval],
    position: pl[ml.position],
    depth: pl[ml.depth],
    role: pl[ml.role]
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
  worldInfoBefore: c,
  worldInfoAfter: u,
  bias: b,
  type: m,
  quietPrompt: h,
  quietImage: p,
  extensionPrompts: v,
  cyclePrompt: S,
  systemPromptOverride: g,
  jailbreakPromptOverride: y,
  personaDescription: d,
  messages: x,
  messageExamples: C
}, O) {
  return f2(
    {
      name2: r,
      charDescription: a,
      charPersonality: l,
      Scenario: s,
      worldInfoBefore: c,
      worldInfoAfter: u,
      bias: b,
      type: m,
      quietPrompt: h,
      quietImage: p,
      cyclePrompt: S,
      systemPromptOverride: g,
      jailbreakPromptOverride: y,
      personaDescription: d,
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
  isPrompt: c,
  isEdit: u,
  depth: b
}) {
  return d2(r, a, { characterOverride: l, isMarkdown: s, isPrompt: c, isEdit: u, depth: b });
}
async function Nb(r, a) {
  return await i2(r, a);
}
function Ag(r, {
  wiFormat: a
} = {}) {
  return o2(r, { wiFormat: a });
}
function yl(r) {
  return u2(r);
}
function wb(r, a) {
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
    const l = a.filter((m) => m.content), s = l.map((m) => this.getTokenCount(m)), c = s.reduce((m, h) => m + h, 0);
    if (this.currentTokenCount + c <= this.maxContext)
      return this.messages.push(...l), this.currentTokenCount += c, !0;
    let u = 0;
    const b = [];
    for (let m = l.length - 1; m >= 0; m--) {
      const h = l[m], p = s[m];
      if (this.currentTokenCount + u + p <= this.maxContext)
        b.unshift(h), u += p;
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
async function kb(r, {
  targetCharacterId: a,
  presetName: l,
  instructName: s,
  contextName: c,
  syspromptName: u,
  maxContext: b,
  includeNames: m,
  ignoreCharacterFields: h,
  ignoreAuthorNote: p,
  ignoreWorldInfo: v,
  messageIndexesBetween: S
} = {}) {
  var g, y, d, x, C, O, A, j, E, N, k, L, V, W;
  if (!["textgenerationwebui", "openai"].includes(r))
    throw new Error("Unsupported API");
  const H = SillyTavern.getContext();
  let { description: X, personality: Q, persona: le, scenario: oe, mesExamples: de, system: z, jailbreak: re } = h ? {
    description: "",
    personality: "",
    persona: "",
    scenario: "",
    mesExamples: "",
    system: "",
    jailbreak: ""
  } : H.getCharacterCardFields({
    chid: a
  });
  const ce = r === "textgenerationwebui" ? (g = H.getPresetManager("instruct")) == null ? void 0 : g.getCompletionPresetByName(s) : void 0, je = !!(ce != null && ce.enabled);
  let D = Cg(de, je);
  function F() {
    var me, ge;
    if (typeof b == "number")
      return b;
    if (!b || b === "active" || !l)
      return mf();
    if (typeof b == "number")
      return b;
    let Ie;
    if (r === "textgenerationwebui") {
      const Pe = (me = H.getPresetManager("textgenerationwebui")) == null ? void 0 : me.getCompletionPresetByName(l);
      Ie = Pe?.max_length;
    } else {
      const Pe = (ge = H.getPresetManager("openai")) == null ? void 0 : ge.getCompletionPresetByName(l);
      Ie = Pe?.openai_max_context;
    }
    return typeof Ie == "number" ? Ie : mf();
  }
  let te = [];
  const ae = F();
  if (ae <= 0)
    return { result: [], warnings: te };
  const ee = new Rb(ae), he = H.ToolManager.isToolCallingSupported(), se = S?.start ?? 0, Xe = S != null && S.end ? S.end + 1 : void 0;
  let Ae = se === -1 && Xe === 0 ? [] : H.chat.slice(se, Xe).filter((me) => {
    var ge;
    return !me.is_system || he && Array.isArray((ge = me.extra) == null ? void 0 : ge.tool_invocations);
  });
  Ae = await Promise.all(
    Ae.map(async (me, ge) => {
      var Ie, Pe;
      let We = me.mes, Ct = me.is_user ? rg.USER_INPUT : rg.AI_OUTPUT, Qt = { isPrompt: !0, depth: Ae.length - ge - 1 }, nt = Tb(We, Ct, Qt);
      return nt = await Nb(me, nt), (Ie = me?.extra) != null && Ie.append_title && (Pe = me?.extra) != null && Pe.title && (nt = `${nt}

${me.extra.title}`), {
        ...me,
        mes: nt,
        index: ge
      };
    })
  );
  const Je = Ae.map((me) => t2 ? `${me.name}: ${me.mes}` : me.mes).reverse(), { worldInfoString: ua, worldInfoBefore: bn, worldInfoAfter: Sn, worldInfoExamples: ca, worldInfoDepth: Ga, anBefore: vr, anAfter: yr } = v ? {
    worldInfoString: "",
    worldInfoBefore: "",
    worldInfoAfter: "",
    worldInfoExamples: [],
    worldInfoDepth: [],
    anBefore: [],
    anAfter: []
  } : await H.getWorldInfoPrompt(Je, ae, !1);
  for (const me of ca) {
    const ge = me.content;
    if (ge.length === 0)
      continue;
    const Ie = Js(ge, aa, ja), Pe = Cg(Ie, je);
    me.position === n2.before ? D.unshift(...Pe) : D.push(...Pe);
  }
  function jt() {
    const me = [];
    for (let ge = Ae.length - 1; ge >= 0; ge--) {
      const Ie = Ae[ge], Pe = Ie.name === "System" && !Ie.is_user ? "system" : Ie.is_user ? "user" : "assistant";
      me.unshift({
        role: Pe,
        content: m && Pe != "system" ? `${Ie.name}: ${Ie.mes}` : Ie.mes,
        source: Ie
      });
    }
    ee.addMany(me);
  }
  if (r === "textgenerationwebui") {
    const me = [...D];
    D && (D = yb(D, aa, ja));
    const ge = (y = H.getPresetManager("sysprompt")) == null ? void 0 : y.getCompletionPresetByName(u);
    ge && (z = H.powerUserSettings.prefer_character_prompt && z ? z : Js(ge.content, aa, ja), z = je ? bb(
      H.substituteParams(z, aa, ja, ge.content),
      ce
    ) : z);
    const Ie = {
      description: X,
      personality: Q,
      persona: H.powerUserSettings.persona_description_position == ng.IN_PROMPT ? le : "",
      scenario: oe,
      system: z,
      char: ja,
      user: aa,
      wiBefore: bn,
      wiAfter: Sn,
      loreBefore: bn,
      loreAfter: Sn,
      mesExamples: D.join(""),
      mesExamplesRaw: me.join("")
    }, Pe = (d = H.getPresetManager("context")) == null ? void 0 : d.getCompletionPresetByName(c);
    let We = Sb(Ie, {
      customInstructSettings: ce,
      customStoryString: Pe?.story_string
    });
    We && ee.add({ role: "system", content: We, ignoreInstruct: !0 }), jt();
  } else {
    let me = function(we) {
      const et = J.find((br) => br.identifier === we);
      if (et)
        return et;
      const On = We.prompts.find((br) => br.identifier === we);
      if (On)
        return On;
    }, ge = Cb(Ae), Ie = Ab(D);
    async function Pe() {
      let [we, et] = await Eb(
        {
          name2: ja,
          charDescription: X,
          charPersonality: Q,
          Scenario: oe,
          worldInfoBefore: bn,
          worldInfoAfter: Sn,
          extensionPrompts: H.extensionPrompts,
          bias: "",
          type: "normal",
          quietPrompt: void 0,
          quietImage: void 0,
          cyclePrompt: "",
          systemPromptOverride: z,
          jailbreakPromptOverride: re,
          personaDescription: le,
          messages: ge,
          messageExamples: Ie
        },
        !1
      );
      ee.addMany(we);
    }
    if (!l)
      return te.push("No preset name provided. Using default preset."), await Pe(), { result: ee.getMessages(), warnings: te };
    const We = (x = H.getPresetManager("openai")) == null ? void 0 : x.getCompletionPresetByName(l);
    if (!We)
      return console.warn(`Preset not found: ${l}. Using current preset.`), te.push(`Preset not found: ${l}. Using current preset.`), Pe(), { result: ee.getMessages(), warnings: te };
    let Ct = (C = We.prompt_order) == null ? void 0 : C.find((we) => we.character_id === yn);
    if (!Ct && We.prompt_order && We.prompt_order.length > 0 && (Ct = We.prompt_order[We.prompt_order.length - 1]), !Ct)
      return console.warn(`No prompt order found for preset: ${l}. Using current preset.`), te.push(`No prompt order found for preset: ${l}. Using current preset.`), Pe(), { result: ee.getMessages(), warnings: te };
    const Qt = oe && We.scenario_format ? H.substituteParams(We.scenario_format) : "", nt = Q && We.personality_format ? H.substituteParams(We.personality_format) : "", R = H.substituteParams(We.group_nudge_prompt), Y = We.impersonation_prompt ? H.substituteParams(We.impersonation_prompt) : "", J = [];
    v || J.push(
      {
        role: "system",
        content: Ag(bn, { wiFormat: We.wi_format }),
        identifier: "worldInfoBefore"
      },
      {
        role: "system",
        content: Ag(Sn, { wiFormat: We.wi_format }),
        identifier: "worldInfoAfter"
      }
    ), h || J.push(
      { role: "system", content: X, identifier: "charDescription" },
      { role: "system", content: nt, identifier: "charPersonality" },
      { role: "system", content: Qt, identifier: "scenario" }
    ), J.push(
      { role: "system", content: Y, identifier: "impersonate" },
      { role: "system", content: R, identifier: "groupNudge" }
    );
    const fe = H.extensionPrompts["1_memory"];
    fe && fe.value && J.push({
      role: or(fe.role),
      content: fe.value,
      identifier: "summary",
      position: yl(fe.position)
    });
    const Oe = H.extensionPrompts["2_floating_prompt"];
    !p && Oe && Oe.value && J.push({
      role: or(Oe.role),
      content: Oe.value,
      identifier: "authorsNote",
      position: yl(Oe.position)
    });
    const be = H.extensionPrompts["3_vectors"];
    be && be.value && J.push({
      role: "system",
      content: be.value,
      identifier: "vectorsMemory",
      position: yl(be.position)
    });
    const Ge = H.extensionPrompts["4_vectors_data_bank"];
    Ge && Ge.value && J.push({
      role: or(Ge.role),
      content: Ge.value,
      identifier: "vectorsDataBank",
      position: yl(Ge.position)
    });
    const De = H.extensionPrompts.chromadb;
    De && De.value && J.push({
      role: "system",
      content: De.value,
      identifier: "smartContext",
      position: yl(De.position)
    }), !h && H.powerUserSettings.persona_description && H.powerUserSettings.persona_description_position === ng.IN_PROMPT && J.push({
      role: "system",
      content: H.powerUserSettings.persona_description,
      identifier: "personaDescription"
    }), Ct.order.forEach((we) => {
      if (!we.enabled)
        return;
      const et = me(we.identifier);
      if (et && et.content) {
        ee.add({
          role: et.role ?? "system",
          content: H.substituteParams(et.content)
        });
        return;
      }
      we.identifier === "chatHistory" && jt();
    });
  }
  const yi = [
    "1_memory",
    "2_floating_prompt",
    "3_vectors",
    "4_vectors_data_bank",
    "chromadb",
    "PERSONA_DESCRIPTION",
    "QUIET_PROMPT",
    "DEPTH_PROMPT"
  ];
  for (const me in H.extensionPrompts)
    if (Object.hasOwn(H.extensionPrompts, me)) {
      const ge = H.extensionPrompts[me];
      if (yi.includes(me) || !H.extensionPrompts[me].value || ![sr.BEFORE_PROMPT, sr.IN_PROMPT].includes(ge.position) || typeof ge.filter == "function" && !await ge.filter()) continue;
      const Ie = {
        role: or(ge.role) ?? "system",
        content: ge.value
      };
      if (ge.position === sr.BEFORE_PROMPT)
        ee.insert(ge.depth, Ie);
      else if (ge.position === sr.IN_PROMPT) {
        const Pe = ee.getMessages();
        ee.insert(Pe.length - ge.depth, Ie);
      }
    }
  for (const me of Ga) {
    const ge = ee.getMessages();
    ee.insert(ge.length - me.depth, {
      role: or(me.role),
      content: me.entries.join(`
`)
    });
  }
  if (!h) {
    const me = xb(hr, Number(yn));
    if (hr && Array.isArray(me) && me.length > 0)
      me.filter((ge) => ge.text).forEach((ge, Ie) => {
        const Pe = ee.getMessages();
        ee.insert(Pe.length - ge.depth, { role: ge.role, content: ge.text });
      });
    else {
      const ge = Js(
        (N = (E = (j = (A = (O = H.characters[yn]) == null ? void 0 : O.data) == null ? void 0 : A.extensions) == null ? void 0 : j.depth_prompt) == null ? void 0 : E.prompt) == null ? void 0 : N.trim(),
        aa,
        ja
      ) || "";
      if (ge) {
        const Ie = $0, Pe = ((W = (V = (L = (k = H.characters[yn]) == null ? void 0 : k.data) == null ? void 0 : L.extensions) == null ? void 0 : V.depth_prompt) == null ? void 0 : W.role) ?? W0, We = ee.getMessages();
        ee.insert(We.length - Ie, {
          role: or(Pe),
          content: ge
        });
      }
    }
  }
  let Xt = -1;
  if (!p) {
    const me = _b();
    if (me.prompt) {
      me.prompt = Js(me.prompt, aa, ja);
      const ge = { role: or(me.role), content: me.prompt };
      switch (me.position) {
        case sr.IN_PROMPT:
          ee.insert(1, ge), Xt = 1;
          break;
        case sr.IN_CHAT:
          Xt = ee.getMessages().length - me.depth, ee.insert(Xt, ge);
          break;
        case sr.BEFORE_PROMPT:
          ee.addFront(ge), Xt = 0;
          break;
      }
    }
  }
  return Xt >= 0 && (vr.length > 0 && (ee.insert(Xt, { role: "system", content: vr.join(`
`) }), Xt++), yr.length > 0 && ee.insert(Xt + 1, { role: "system", content: yr.join(`
`) })), { result: ee.getMessages(), warnings: te };
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
function Hn(r) {
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
function sa() {
  return sa = Object.assign || function(r) {
    for (var a = 1; a < arguments.length; a++) {
      var l = arguments[a];
      for (var s in l)
        Object.prototype.hasOwnProperty.call(l, s) && (r[s] = l[s]);
    }
    return r;
  }, sa.apply(this, arguments);
}
function Lb(r, a) {
  if (r == null) return {};
  var l = {}, s = Object.keys(r), c, u;
  for (u = 0; u < s.length; u++)
    c = s[u], !(a.indexOf(c) >= 0) && (l[c] = r[c]);
  return l;
}
function Bb(r, a) {
  if (r == null) return {};
  var l = Lb(r, a), s, c;
  if (Object.getOwnPropertySymbols) {
    var u = Object.getOwnPropertySymbols(r);
    for (c = 0; c < u.length; c++)
      s = u[c], !(a.indexOf(s) >= 0) && Object.prototype.propertyIsEnumerable.call(r, s) && (l[s] = r[s]);
  }
  return l;
}
var Ub = "1.15.6";
function ia(r) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(r);
}
var oa = ia(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Bl = ia(/Edge/i), Ng = ia(/firefox/i), Dl = ia(/safari/i) && !ia(/chrome/i) && !ia(/android/i), lh = ia(/iP(ad|od|hone)/i), Qv = ia(/chrome/i) && ia(/android/i), Zv = {
  capture: !1,
  passive: !1
};
function ze(r, a, l) {
  r.addEventListener(a, l, !oa && Zv);
}
function Ue(r, a, l) {
  r.removeEventListener(a, l, !oa && Zv);
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
function Tn(r, a, l, s) {
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
var wg = /\s+/g;
function an(r, a, l) {
  if (r && a)
    if (r.classList)
      r.classList[l ? "add" : "remove"](a);
    else {
      var s = (" " + r.className + " ").replace(wg, " ").replace(" " + a + " ", " ");
      r.className = (s + (l ? " " + a : "")).replace(wg, " ");
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
function pi(r, a) {
  var l = "";
  if (typeof r == "string")
    l = r;
  else
    do {
      var s = _e(r, "transform");
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
function zn() {
  var r = document.scrollingElement;
  return r || document.documentElement;
}
function vt(r, a, l, s, c) {
  if (!(!r.getBoundingClientRect && r !== window)) {
    var u, b, m, h, p, v, S;
    if (r !== window && r.parentNode && r !== zn() ? (u = r.getBoundingClientRect(), b = u.top, m = u.left, h = u.bottom, p = u.right, v = u.height, S = u.width) : (b = 0, m = 0, h = window.innerHeight, p = window.innerWidth, v = window.innerHeight, S = window.innerWidth), (a || l) && r !== window && (c = c || r.parentNode, !oa))
      do
        if (c && c.getBoundingClientRect && (_e(c, "transform") !== "none" || l && _e(c, "position") !== "static")) {
          var g = c.getBoundingClientRect();
          b -= g.top + parseInt(_e(c, "border-top-width")), m -= g.left + parseInt(_e(c, "border-left-width")), h = b + u.height, p = m + u.width;
          break;
        }
      while (c = c.parentNode);
    if (s && r !== window) {
      var y = pi(c || r), d = y && y.a, x = y && y.d;
      y && (b /= x, m /= d, S /= d, v /= x, h = b + v, p = m + S);
    }
    return {
      top: b,
      left: m,
      bottom: h,
      right: p,
      width: S,
      height: v
    };
  }
}
function Og(r, a, l) {
  for (var s = Pa(r, !0), c = vt(r)[a]; s; ) {
    var u = vt(s)[l], b = void 0;
    if (b = c >= u, !b) return s;
    if (s === zn()) break;
    s = Pa(s, !1);
  }
  return !1;
}
function mi(r, a, l, s) {
  for (var c = 0, u = 0, b = r.children; u < b.length; ) {
    if (b[u].style.display !== "none" && b[u] !== xe.ghost && (s || b[u] !== xe.dragged) && Tn(b[u], l.draggable, r, !1)) {
      if (c === a)
        return b[u];
      c++;
    }
    u++;
  }
  return null;
}
function sh(r, a) {
  for (var l = r.lastElementChild; l && (l === xe.ghost || _e(l, "display") === "none" || a && !Po(l, a)); )
    l = l.previousElementSibling;
  return l || null;
}
function vn(r, a) {
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
      var c = pi(r), u = c.a, b = c.d;
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
function Pa(r, a) {
  if (!r || !r.getBoundingClientRect) return zn();
  var l = r, s = !1;
  do
    if (l.clientWidth < l.scrollWidth || l.clientHeight < l.scrollHeight) {
      var c = _e(l);
      if (l.clientWidth < l.scrollWidth && (c.overflowX == "auto" || c.overflowX == "scroll") || l.clientHeight < l.scrollHeight && (c.overflowY == "auto" || c.overflowY == "scroll")) {
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
var Ml;
function Wv(r, a) {
  return function() {
    if (!Ml) {
      var l = arguments, s = this;
      l.length === 1 ? r.call(s, l[0]) : r.apply(s, l), Ml = setTimeout(function() {
        Ml = void 0;
      }, a);
    }
  };
}
function Pb() {
  clearTimeout(Ml), Ml = void 0;
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
  return Array.from(r.children).forEach(function(c) {
    var u, b, m, h;
    if (!(!Tn(c, a.draggable, r, !1) || c.animated || c === l)) {
      var p = vt(c);
      s.left = Math.min((u = s.left) !== null && u !== void 0 ? u : 1 / 0, p.left), s.top = Math.min((b = s.top) !== null && b !== void 0 ? b : 1 / 0, p.top), s.right = Math.max((m = s.right) !== null && m !== void 0 ? m : -1 / 0, p.right), s.bottom = Math.max((h = s.bottom) !== null && h !== void 0 ? h : -1 / 0, p.bottom);
    }
  }), s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
var Yt = "Sortable" + (/* @__PURE__ */ new Date()).getTime();
function qb() {
  var r = [], a;
  return {
    captureAnimationState: function() {
      if (r = [], !!this.options.animation) {
        var s = [].slice.call(this.el.children);
        s.forEach(function(c) {
          if (!(_e(c, "display") === "none" || c === xe.ghost)) {
            r.push({
              target: c,
              rect: vt(c)
            });
            var u = Hn({}, r[r.length - 1].rect);
            if (c.thisAnimationDuration) {
              var b = pi(c, !0);
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
      r.forEach(function(m) {
        var h = 0, p = m.target, v = p.fromRect, S = vt(p), g = p.prevFromRect, y = p.prevToRect, d = m.rect, x = pi(p, !0);
        x && (S.top -= x.f, S.left -= x.e), p.toRect = S, p.thisAnimationDuration && gf(g, S) && !gf(v, S) && // Make sure animatingRect is on line between toRect & fromRect
        (d.top - S.top) / (d.left - S.left) === (v.top - S.top) / (v.left - S.left) && (h = Gb(d, g, y, c.options)), gf(S, v) || (p.prevFromRect = v, p.prevToRect = S, h || (h = c.options.animation), c.animate(p, d, S, h)), h && (u = !0, b = Math.max(b, h), clearTimeout(p.animationResetTimer), p.animationResetTimer = setTimeout(function() {
          p.animationTime = 0, p.prevFromRect = null, p.fromRect = null, p.prevToRect = null, p.thisAnimationDuration = null;
        }, h), p.thisAnimationDuration = h);
      }), clearTimeout(a), u ? a = setTimeout(function() {
        typeof s == "function" && s();
      }, b) : typeof s == "function" && s(), r = [];
    },
    animate: function(s, c, u, b) {
      if (b) {
        _e(s, "transition", ""), _e(s, "transform", "");
        var m = pi(this.el), h = m && m.a, p = m && m.d, v = (c.left - u.left) / (h || 1), S = (c.top - u.top) / (p || 1);
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
var li = [], vf = {
  initializeByDefault: !0
}, Ul = {
  mount: function(a) {
    for (var l in vf)
      vf.hasOwnProperty(l) && !(l in a) && (a[l] = vf[l]);
    li.forEach(function(s) {
      if (s.pluginName === a.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(a.pluginName, " more than once");
    }), li.push(a);
  },
  pluginEvent: function(a, l, s) {
    var c = this;
    this.eventCanceled = !1, s.cancel = function() {
      c.eventCanceled = !0;
    };
    var u = a + "Global";
    li.forEach(function(b) {
      l[b.pluginName] && (l[b.pluginName][u] && l[b.pluginName][u](Hn({
        sortable: l
      }, s)), l.options[b.pluginName] && l[b.pluginName][a] && l[b.pluginName][a](Hn({
        sortable: l
      }, s)));
    });
  },
  initializePlugins: function(a, l, s, c) {
    li.forEach(function(m) {
      var h = m.pluginName;
      if (!(!a.options[h] && !m.initializeByDefault)) {
        var p = new m(a, l, a.options);
        p.sortable = a, p.options = a.options, a[h] = p, sa(s, p.defaults);
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
    return li.forEach(function(c) {
      typeof c.eventProperties == "function" && sa(s, c.eventProperties.call(l[c.pluginName], a));
    }), s;
  },
  modifyOption: function(a, l, s) {
    var c;
    return li.forEach(function(u) {
      a[u.pluginName] && u.optionListeners && typeof u.optionListeners[l] == "function" && (c = u.optionListeners[l].call(a[u.pluginName], s));
    }), c;
  }
};
function Vb(r) {
  var a = r.sortable, l = r.rootEl, s = r.name, c = r.targetEl, u = r.cloneEl, b = r.toEl, m = r.fromEl, h = r.oldIndex, p = r.newIndex, v = r.oldDraggableIndex, S = r.newDraggableIndex, g = r.originalEvent, y = r.putSortable, d = r.extraEventProperties;
  if (a = a || l && l[Yt], !!a) {
    var x, C = a.options, O = "on" + s.charAt(0).toUpperCase() + s.substr(1);
    window.CustomEvent && !oa && !Bl ? x = new CustomEvent(s, {
      bubbles: !0,
      cancelable: !0
    }) : (x = document.createEvent("Event"), x.initEvent(s, !0, !0)), x.to = b || l, x.from = m || l, x.item = c || l, x.clone = u, x.oldIndex = h, x.newIndex = p, x.oldDraggableIndex = v, x.newDraggableIndex = S, x.originalEvent = g, x.pullMode = y ? y.lastPutMode : void 0;
    var A = Hn(Hn({}, d), Ul.getEventProperties(s, a));
    for (var j in A)
      x[j] = A[j];
    l && l.dispatchEvent(x), C[O] && C[O].call(a, x);
  }
}
var Yb = ["evt"], Gt = function(a, l) {
  var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, c = s.evt, u = Bb(s, Yb);
  Ul.pluginEvent.bind(xe)(a, l, Hn({
    dragEl: ie,
    parentEl: ut,
    ghostEl: Ce,
    rootEl: rt,
    nextEl: fr,
    lastDownEl: ko,
    cloneEl: lt,
    cloneHidden: Ha,
    dragStarted: Nl,
    putSortable: wt,
    activeSortable: xe.active,
    originalEvent: c,
    oldIndex: di,
    oldDraggableIndex: Rl,
    newIndex: rn,
    newDraggableIndex: za,
    hideGhostForTarget: iy,
    unhideGhostForTarget: ly,
    cloneNowHidden: function() {
      Ha = !0;
    },
    cloneNowShown: function() {
      Ha = !1;
    },
    dispatchSortableEvent: function(m) {
      Bt({
        sortable: l,
        name: m,
        originalEvent: c
      });
    }
  }, u));
};
function Bt(r) {
  Vb(Hn({
    putSortable: wt,
    cloneEl: lt,
    targetEl: ie,
    rootEl: rt,
    oldIndex: di,
    oldDraggableIndex: Rl,
    newIndex: rn,
    newDraggableIndex: za
  }, r));
}
var ie, ut, Ce, rt, fr, ko, lt, Ha, di, rn, Rl, za, $s, wt, hi = !1, qo = !1, Io = [], ur, Cn, yf, bf, Mg, Rg, Nl, si, kl, jl = !1, eo = !1, jo, Rt, Sf = [], Vf = !1, Go = [], Qo = typeof document < "u", to = lh, kg = Bl || oa ? "cssFloat" : "float", Fb = Qo && !Qv && !lh && "draggable" in document.createElement("div"), ny = (function() {
  if (Qo) {
    if (oa)
      return !1;
    var r = document.createElement("x");
    return r.style.cssText = "pointer-events:auto", r.style.pointerEvents === "auto";
  }
})(), ay = function(a, l) {
  var s = _e(a), c = parseInt(s.width) - parseInt(s.paddingLeft) - parseInt(s.paddingRight) - parseInt(s.borderLeftWidth) - parseInt(s.borderRightWidth), u = mi(a, 0, l), b = mi(a, 1, l), m = u && _e(u), h = b && _e(b), p = m && parseInt(m.marginLeft) + parseInt(m.marginRight) + vt(u).width, v = h && parseInt(h.marginLeft) + parseInt(h.marginRight) + vt(b).width;
  if (s.display === "flex")
    return s.flexDirection === "column" || s.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (s.display === "grid")
    return s.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (u && m.float && m.float !== "none") {
    var S = m.float === "left" ? "left" : "right";
    return b && (h.clear === "both" || h.clear === S) ? "vertical" : "horizontal";
  }
  return u && (m.display === "block" || m.display === "flex" || m.display === "table" || m.display === "grid" || p >= c && s[kg] === "none" || b && s[kg] === "none" && p + v > c) ? "vertical" : "horizontal";
}, Xb = function(a, l, s) {
  var c = s ? a.left : a.top, u = s ? a.right : a.bottom, b = s ? a.width : a.height, m = s ? l.left : l.top, h = s ? l.right : l.bottom, p = s ? l.width : l.height;
  return c === m || u === h || c + b / 2 === m + p / 2;
}, Qb = function(a, l) {
  var s;
  return Io.some(function(c) {
    var u = c[Yt].options.emptyInsertThreshold;
    if (!(!u || sh(c))) {
      var b = vt(c), m = a >= b.left - u && a <= b.right + u, h = l >= b.top - u && l <= b.bottom + u;
      if (m && h)
        return s = c;
    }
  }), s;
}, ry = function(a) {
  function l(u, b) {
    return function(m, h, p, v) {
      var S = m.options.group.name && h.options.group.name && m.options.group.name === h.options.group.name;
      if (u == null && (b || S))
        return !0;
      if (u == null || u === !1)
        return !1;
      if (b && u === "clone")
        return u;
      if (typeof u == "function")
        return l(u(m, h, p, v), b)(m, h, p, v);
      var g = (b ? m : h).options.group.name;
      return u === !0 || typeof u == "string" && u === g || u.join && u.indexOf(g) > -1;
    };
  }
  var s = {}, c = a.group;
  (!c || Ro(c) != "object") && (c = {
    name: c
  }), s.name = c.name, s.checkPull = l(c.pull, !0), s.checkPut = l(c.put), s.revertClone = c.revertClone, a.group = s;
}, iy = function() {
  !ny && Ce && _e(Ce, "display", "none");
}, ly = function() {
  !ny && Ce && _e(Ce, "display", "");
};
Qo && !Qv && document.addEventListener("click", function(r) {
  if (qo)
    return r.preventDefault(), r.stopPropagation && r.stopPropagation(), r.stopImmediatePropagation && r.stopImmediatePropagation(), qo = !1, !1;
}, !0);
var cr = function(a) {
  if (ie) {
    a = a.touches ? a.touches[0] : a;
    var l = Qb(a.clientX, a.clientY);
    if (l) {
      var s = {};
      for (var c in a)
        a.hasOwnProperty(c) && (s[c] = a[c]);
      s.target = s.rootEl = l, s.preventDefault = void 0, s.stopPropagation = void 0, l[Yt]._onDragOver(s);
    }
  }
}, Zb = function(a) {
  ie && ie.parentNode[Yt]._isOutsideThisEl(a.target);
};
function xe(r, a) {
  if (!(r && r.nodeType && r.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(r));
  this.el = r, this.options = a = sa({}, a), r[Yt] = this;
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
    supportPointer: xe.supportPointer !== !1 && "PointerEvent" in window && (!Dl || lh),
    emptyInsertThreshold: 5
  };
  Ul.initializePlugins(this, r, l);
  for (var s in l)
    !(s in a) && (a[s] = l[s]);
  ry(a);
  for (var c in this)
    c.charAt(0) === "_" && typeof this[c] == "function" && (this[c] = this[c].bind(this));
  this.nativeDraggable = a.forceFallback ? !1 : Fb, this.nativeDraggable && (this.options.touchStartThreshold = 1), a.supportPointer ? ze(r, "pointerdown", this._onTapStart) : (ze(r, "mousedown", this._onTapStart), ze(r, "touchstart", this._onTapStart)), this.nativeDraggable && (ze(r, "dragover", this), ze(r, "dragenter", this)), Io.push(this.el), a.store && a.store.get && this.sort(a.store.get(this) || []), sa(this, qb());
}
xe.prototype = /** @lends Sortable.prototype */
{
  constructor: xe,
  _isOutsideThisEl: function(a) {
    !this.el.contains(a) && a !== this.el && (si = null);
  },
  _getDirection: function(a, l) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, a, l, ie) : this.options.direction;
  },
  _onTapStart: function(a) {
    if (a.cancelable) {
      var l = this, s = this.el, c = this.options, u = c.preventOnFilter, b = a.type, m = a.touches && a.touches[0] || a.pointerType && a.pointerType === "touch" && a, h = (m || a).target, p = a.target.shadowRoot && (a.path && a.path[0] || a.composedPath && a.composedPath()[0]) || h, v = c.filter;
      if (aS(s), !ie && !(/mousedown|pointerdown/.test(b) && a.button !== 0 || c.disabled) && !p.isContentEditable && !(!this.nativeDraggable && Dl && h && h.tagName.toUpperCase() === "SELECT") && (h = Tn(h, c.draggable, s, !1), !(h && h.animated) && ko !== h)) {
        if (di = vn(h), Rl = vn(h, c.draggable), typeof v == "function") {
          if (v.call(this, a, h, this)) {
            Bt({
              sortable: l,
              rootEl: p,
              name: "filter",
              targetEl: h,
              toEl: s,
              fromEl: s
            }), Gt("filter", l, {
              evt: a
            }), u && a.preventDefault();
            return;
          }
        } else if (v && (v = v.split(",").some(function(S) {
          if (S = Tn(p, S.trim(), s, !1), S)
            return Bt({
              sortable: l,
              rootEl: S,
              name: "filter",
              targetEl: h,
              fromEl: s,
              toEl: s
            }), Gt("filter", l, {
              evt: a
            }), !0;
        }), v)) {
          u && a.preventDefault();
          return;
        }
        c.handle && !Tn(p, c.handle, s, !1) || this._prepareDragStart(a, m, h);
      }
    }
  },
  _prepareDragStart: function(a, l, s) {
    var c = this, u = c.el, b = c.options, m = u.ownerDocument, h;
    if (s && !ie && s.parentNode === u) {
      var p = vt(s);
      if (rt = u, ie = s, ut = ie.parentNode, fr = ie.nextSibling, ko = s, $s = b.group, xe.dragged = ie, ur = {
        target: ie,
        clientX: (l || a).clientX,
        clientY: (l || a).clientY
      }, Mg = ur.clientX - p.left, Rg = ur.clientY - p.top, this._lastX = (l || a).clientX, this._lastY = (l || a).clientY, ie.style["will-change"] = "all", h = function() {
        if (Gt("delayEnded", c, {
          evt: a
        }), xe.eventCanceled) {
          c._onDrop();
          return;
        }
        c._disableDelayedDragEvents(), !Ng && c.nativeDraggable && (ie.draggable = !0), c._triggerDragStart(a, l), Bt({
          sortable: c,
          name: "choose",
          originalEvent: a
        }), an(ie, b.chosenClass, !0);
      }, b.ignore.split(",").forEach(function(v) {
        Jv(ie, v.trim(), _f);
      }), ze(m, "dragover", cr), ze(m, "mousemove", cr), ze(m, "touchmove", cr), b.supportPointer ? (ze(m, "pointerup", c._onDrop), !this.nativeDraggable && ze(m, "pointercancel", c._onDrop)) : (ze(m, "mouseup", c._onDrop), ze(m, "touchend", c._onDrop), ze(m, "touchcancel", c._onDrop)), Ng && this.nativeDraggable && (this.options.touchStartThreshold = 4, ie.draggable = !0), Gt("delayStart", this, {
        evt: a
      }), b.delay && (!b.delayOnTouchOnly || l) && (!this.nativeDraggable || !(Bl || oa))) {
        if (xe.eventCanceled) {
          this._onDrop();
          return;
        }
        b.supportPointer ? (ze(m, "pointerup", c._disableDelayedDrag), ze(m, "pointercancel", c._disableDelayedDrag)) : (ze(m, "mouseup", c._disableDelayedDrag), ze(m, "touchend", c._disableDelayedDrag), ze(m, "touchcancel", c._disableDelayedDrag)), ze(m, "mousemove", c._delayedDragTouchMoveHandler), ze(m, "touchmove", c._delayedDragTouchMoveHandler), b.supportPointer && ze(m, "pointermove", c._delayedDragTouchMoveHandler), c._dragStartTimer = setTimeout(h, b.delay);
      } else
        h();
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
    Ue(a, "mouseup", this._disableDelayedDrag), Ue(a, "touchend", this._disableDelayedDrag), Ue(a, "touchcancel", this._disableDelayedDrag), Ue(a, "pointerup", this._disableDelayedDrag), Ue(a, "pointercancel", this._disableDelayedDrag), Ue(a, "mousemove", this._delayedDragTouchMoveHandler), Ue(a, "touchmove", this._delayedDragTouchMoveHandler), Ue(a, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(a, l) {
    l = l || a.pointerType == "touch" && a, !this.nativeDraggable || l ? this.options.supportPointer ? ze(document, "pointermove", this._onTouchMove) : l ? ze(document, "touchmove", this._onTouchMove) : ze(document, "mousemove", this._onTouchMove) : (ze(ie, "dragend", this), ze(rt, "dragstart", this._onDragStart));
    try {
      document.selection ? Lo(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(a, l) {
    if (hi = !1, rt && ie) {
      Gt("dragStarted", this, {
        evt: l
      }), this.nativeDraggable && ze(document, "dragover", Zb);
      var s = this.options;
      !a && an(ie, s.dragClass, !1), an(ie, s.ghostClass, !0), xe.active = this, a && this._appendGhost(), Bt({
        sortable: this,
        name: "start",
        originalEvent: l
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (Cn) {
      this._lastX = Cn.clientX, this._lastY = Cn.clientY, iy();
      for (var a = document.elementFromPoint(Cn.clientX, Cn.clientY), l = a; a && a.shadowRoot && (a = a.shadowRoot.elementFromPoint(Cn.clientX, Cn.clientY), a !== l); )
        l = a;
      if (ie.parentNode[Yt]._isOutsideThisEl(a), l)
        do {
          if (l[Yt]) {
            var s = void 0;
            if (s = l[Yt]._onDragOver({
              clientX: Cn.clientX,
              clientY: Cn.clientY,
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
    if (ur) {
      var l = this.options, s = l.fallbackTolerance, c = l.fallbackOffset, u = a.touches ? a.touches[0] : a, b = Ce && pi(Ce, !0), m = Ce && b && b.a, h = Ce && b && b.d, p = to && Rt && Dg(Rt), v = (u.clientX - ur.clientX + c.x) / (m || 1) + (p ? p[0] - Sf[0] : 0) / (m || 1), S = (u.clientY - ur.clientY + c.y) / (h || 1) + (p ? p[1] - Sf[1] : 0) / (h || 1);
      if (!xe.active && !hi) {
        if (s && Math.max(Math.abs(u.clientX - this._lastX), Math.abs(u.clientY - this._lastY)) < s)
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
        _e(Ce, "webkitTransform", g), _e(Ce, "mozTransform", g), _e(Ce, "msTransform", g), _e(Ce, "transform", g), yf = v, bf = S, Cn = u;
      }
      a.cancelable && a.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!Ce) {
      var a = this.options.fallbackOnBody ? document.body : rt, l = vt(ie, !0, to, !0, a), s = this.options;
      if (to) {
        for (Rt = a; _e(Rt, "position") === "static" && _e(Rt, "transform") === "none" && Rt !== document; )
          Rt = Rt.parentNode;
        Rt !== document.body && Rt !== document.documentElement ? (Rt === document && (Rt = zn()), l.top += Rt.scrollTop, l.left += Rt.scrollLeft) : Rt = zn(), Sf = Dg(Rt);
      }
      Ce = ie.cloneNode(!0), an(Ce, s.ghostClass, !1), an(Ce, s.fallbackClass, !0), an(Ce, s.dragClass, !0), _e(Ce, "transition", ""), _e(Ce, "transform", ""), _e(Ce, "box-sizing", "border-box"), _e(Ce, "margin", 0), _e(Ce, "top", l.top), _e(Ce, "left", l.left), _e(Ce, "width", l.width), _e(Ce, "height", l.height), _e(Ce, "opacity", "0.8"), _e(Ce, "position", to ? "absolute" : "fixed"), _e(Ce, "zIndex", "100000"), _e(Ce, "pointerEvents", "none"), xe.ghost = Ce, a.appendChild(Ce), _e(Ce, "transform-origin", Mg / parseInt(Ce.style.width) * 100 + "% " + Rg / parseInt(Ce.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(a, l) {
    var s = this, c = a.dataTransfer, u = s.options;
    if (Gt("dragStart", this, {
      evt: a
    }), xe.eventCanceled) {
      this._onDrop();
      return;
    }
    Gt("setupClone", this), xe.eventCanceled || (lt = ey(ie), lt.removeAttribute("id"), lt.draggable = !1, lt.style["will-change"] = "", this._hideClone(), an(lt, this.options.chosenClass, !1), xe.clone = lt), s.cloneId = Lo(function() {
      Gt("clone", s), !xe.eventCanceled && (s.options.removeCloneOnHide || rt.insertBefore(lt, ie), s._hideClone(), Bt({
        sortable: s,
        name: "clone"
      }));
    }), !l && an(ie, u.dragClass, !0), l ? (qo = !0, s._loopId = setInterval(s._emulateDragOver, 50)) : (Ue(document, "mouseup", s._onDrop), Ue(document, "touchend", s._onDrop), Ue(document, "touchcancel", s._onDrop), c && (c.effectAllowed = "move", u.setData && u.setData.call(s, c, ie)), ze(document, "drop", s), _e(ie, "transform", "translateZ(0)")), hi = !0, s._dragStartId = Lo(s._dragStarted.bind(s, l, a)), ze(document, "selectstart", s), Nl = !0, window.getSelection().removeAllRanges(), Dl && _e(document.body, "user-select", "none");
  },
  // Returns true - if no further action is needed (either inserted or another condition)
  _onDragOver: function(a) {
    var l = this.el, s = a.target, c, u, b, m = this.options, h = m.group, p = xe.active, v = $s === h, S = m.sort, g = wt || p, y, d = this, x = !1;
    if (Vf) return;
    function C(ce, je) {
      Gt(ce, d, Hn({
        evt: a,
        isOwner: v,
        axis: y ? "vertical" : "horizontal",
        revert: b,
        dragRect: c,
        targetRect: u,
        canSort: S,
        fromSortable: g,
        target: s,
        completed: A,
        onMove: function(F, te) {
          return no(rt, l, ie, c, F, vt(F), a, te);
        },
        changed: j
      }, je));
    }
    function O() {
      C("dragOverAnimationCapture"), d.captureAnimationState(), d !== g && g.captureAnimationState();
    }
    function A(ce) {
      return C("dragOverCompleted", {
        insertion: ce
      }), ce && (v ? p._hideClone() : p._showClone(d), d !== g && (an(ie, wt ? wt.options.ghostClass : p.options.ghostClass, !1), an(ie, m.ghostClass, !0)), wt !== d && d !== xe.active ? wt = d : d === xe.active && wt && (wt = null), g === d && (d._ignoreWhileAnimating = s), d.animateAll(function() {
        C("dragOverAnimationComplete"), d._ignoreWhileAnimating = null;
      }), d !== g && (g.animateAll(), g._ignoreWhileAnimating = null)), (s === ie && !ie.animated || s === l && !s.animated) && (si = null), !m.dragoverBubble && !a.rootEl && s !== document && (ie.parentNode[Yt]._isOutsideThisEl(a.target), !ce && cr(a)), !m.dragoverBubble && a.stopPropagation && a.stopPropagation(), x = !0;
    }
    function j() {
      rn = vn(ie), za = vn(ie, m.draggable), Bt({
        sortable: d,
        name: "change",
        toEl: l,
        newIndex: rn,
        newDraggableIndex: za,
        originalEvent: a
      });
    }
    if (a.preventDefault !== void 0 && a.cancelable && a.preventDefault(), s = Tn(s, m.draggable, l, !0), C("dragOver"), xe.eventCanceled) return x;
    if (ie.contains(a.target) || s.animated && s.animatingX && s.animatingY || d._ignoreWhileAnimating === s)
      return A(!1);
    if (qo = !1, p && !m.disabled && (v ? S || (b = ut !== rt) : wt === this || (this.lastPutMode = $s.checkPull(this, p, ie, a)) && h.checkPut(this, p, ie, a))) {
      if (y = this._getDirection(a, s) === "vertical", c = vt(ie), C("dragOverValid"), xe.eventCanceled) return x;
      if (b)
        return ut = rt, O(), this._hideClone(), C("revert"), xe.eventCanceled || (fr ? rt.insertBefore(ie, fr) : rt.appendChild(ie)), A(!0);
      var E = sh(l, m.draggable);
      if (!E || $b(a, y, this) && !E.animated) {
        if (E === ie)
          return A(!1);
        if (E && l === a.target && (s = E), s && (u = vt(s)), no(rt, l, ie, c, s, u, a, !!s) !== !1)
          return O(), E && E.nextSibling ? l.insertBefore(ie, E.nextSibling) : l.appendChild(ie), ut = l, j(), A(!0);
      } else if (E && Wb(a, y, this)) {
        var N = mi(l, 0, m, !0);
        if (N === ie)
          return A(!1);
        if (s = N, u = vt(s), no(rt, l, ie, c, s, u, a, !1) !== !1)
          return O(), l.insertBefore(ie, N), ut = l, j(), A(!0);
      } else if (s.parentNode === l) {
        u = vt(s);
        var k = 0, L, V = ie.parentNode !== l, W = !Xb(ie.animated && ie.toRect || c, s.animated && s.toRect || u, y), H = y ? "top" : "left", X = Og(s, "top", "top") || Og(ie, "top", "top"), Q = X ? X.scrollTop : void 0;
        si !== s && (L = u[H], jl = !1, eo = !W && m.invertSwap || V), k = eS(a, s, u, y, W ? 1 : m.swapThreshold, m.invertedSwapThreshold == null ? m.swapThreshold : m.invertedSwapThreshold, eo, si === s);
        var le;
        if (k !== 0) {
          var oe = vn(ie);
          do
            oe -= k, le = ut.children[oe];
          while (le && (_e(le, "display") === "none" || le === Ce));
        }
        if (k === 0 || le === s)
          return A(!1);
        si = s, kl = k;
        var de = s.nextElementSibling, z = !1;
        z = k === 1;
        var re = no(rt, l, ie, c, s, u, a, z);
        if (re !== !1)
          return (re === 1 || re === -1) && (z = re === 1), Vf = !0, setTimeout(Jb, 30), O(), z && !de ? l.appendChild(ie) : s.parentNode.insertBefore(ie, z ? de : s), X && $v(X, 0, Q - X.scrollTop), ut = ie.parentNode, L !== void 0 && !eo && (jo = Math.abs(L - vt(s)[H])), j(), A(!0);
      }
      if (l.contains(ie))
        return A(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    Ue(document, "mousemove", this._onTouchMove), Ue(document, "touchmove", this._onTouchMove), Ue(document, "pointermove", this._onTouchMove), Ue(document, "dragover", cr), Ue(document, "mousemove", cr), Ue(document, "touchmove", cr);
  },
  _offUpEvents: function() {
    var a = this.el.ownerDocument;
    Ue(a, "mouseup", this._onDrop), Ue(a, "touchend", this._onDrop), Ue(a, "pointerup", this._onDrop), Ue(a, "pointercancel", this._onDrop), Ue(a, "touchcancel", this._onDrop), Ue(document, "selectstart", this);
  },
  _onDrop: function(a) {
    var l = this.el, s = this.options;
    if (rn = vn(ie), za = vn(ie, s.draggable), Gt("drop", this, {
      evt: a
    }), ut = ie && ie.parentNode, rn = vn(ie), za = vn(ie, s.draggable), xe.eventCanceled) {
      this._nulling();
      return;
    }
    hi = !1, eo = !1, jl = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Yf(this.cloneId), Yf(this._dragStartId), this.nativeDraggable && (Ue(document, "drop", this), Ue(l, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), Dl && _e(document.body, "user-select", ""), _e(ie, "transform", ""), a && (Nl && (a.cancelable && a.preventDefault(), !s.dropBubble && a.stopPropagation()), Ce && Ce.parentNode && Ce.parentNode.removeChild(Ce), (rt === ut || wt && wt.lastPutMode !== "clone") && lt && lt.parentNode && lt.parentNode.removeChild(lt), ie && (this.nativeDraggable && Ue(ie, "dragend", this), _f(ie), ie.style["will-change"] = "", Nl && !hi && an(ie, wt ? wt.options.ghostClass : this.options.ghostClass, !1), an(ie, this.options.chosenClass, !1), Bt({
      sortable: this,
      name: "unchoose",
      toEl: ut,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: a
    }), rt !== ut ? (rn >= 0 && (Bt({
      rootEl: ut,
      name: "add",
      toEl: ut,
      fromEl: rt,
      originalEvent: a
    }), Bt({
      sortable: this,
      name: "remove",
      toEl: ut,
      originalEvent: a
    }), Bt({
      rootEl: ut,
      name: "sort",
      toEl: ut,
      fromEl: rt,
      originalEvent: a
    }), Bt({
      sortable: this,
      name: "sort",
      toEl: ut,
      originalEvent: a
    })), wt && wt.save()) : rn !== di && rn >= 0 && (Bt({
      sortable: this,
      name: "update",
      toEl: ut,
      originalEvent: a
    }), Bt({
      sortable: this,
      name: "sort",
      toEl: ut,
      originalEvent: a
    })), xe.active && ((rn == null || rn === -1) && (rn = di, za = Rl), Bt({
      sortable: this,
      name: "end",
      toEl: ut,
      originalEvent: a
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    Gt("nulling", this), rt = ie = ut = Ce = fr = lt = ko = Ha = ur = Cn = Nl = rn = za = di = Rl = si = kl = wt = $s = xe.dragged = xe.ghost = xe.clone = xe.active = null, Go.forEach(function(a) {
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
    for (var a = [], l, s = this.el.children, c = 0, u = s.length, b = this.options; c < u; c++)
      l = s[c], Tn(l, b.draggable, this.el, !1) && a.push(l.getAttribute(b.dataIdAttr) || nS(l));
    return a;
  },
  /**
   * Sorts the elements according to the array.
   * @param  {String[]}  order  order of the items
   */
  sort: function(a, l) {
    var s = {}, c = this.el;
    this.toArray().forEach(function(u, b) {
      var m = c.children[b];
      Tn(m, this.options.draggable, c, !1) && (s[u] = m);
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
    return Tn(a, l || this.options.draggable, this.el, !1);
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
    var c = Ul.modifyOption(this, a, l);
    typeof c < "u" ? s[a] = c : s[a] = l, a === "group" && ry(s);
  },
  /**
   * Destroy
   */
  destroy: function() {
    Gt("destroy", this);
    var a = this.el;
    a[Yt] = null, Ue(a, "mousedown", this._onTapStart), Ue(a, "touchstart", this._onTapStart), Ue(a, "pointerdown", this._onTapStart), this.nativeDraggable && (Ue(a, "dragover", this), Ue(a, "dragenter", this)), Array.prototype.forEach.call(a.querySelectorAll("[draggable]"), function(l) {
      l.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Io.splice(Io.indexOf(this.el), 1), this.el = a = null;
  },
  _hideClone: function() {
    if (!Ha) {
      if (Gt("hideClone", this), xe.eventCanceled) return;
      _e(lt, "display", "none"), this.options.removeCloneOnHide && lt.parentNode && lt.parentNode.removeChild(lt), Ha = !0;
    }
  },
  _showClone: function(a) {
    if (a.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (Ha) {
      if (Gt("showClone", this), xe.eventCanceled) return;
      ie.parentNode == rt && !this.options.group.revertClone ? rt.insertBefore(lt, ie) : fr ? rt.insertBefore(lt, fr) : rt.appendChild(lt), this.options.group.revertClone && this.animate(ie, lt), _e(lt, "display", ""), Ha = !1;
    }
  }
};
function Kb(r) {
  r.dataTransfer && (r.dataTransfer.dropEffect = "move"), r.cancelable && r.preventDefault();
}
function no(r, a, l, s, c, u, b, m) {
  var h, p = r[Yt], v = p.options.onMove, S;
  return window.CustomEvent && !oa && !Bl ? h = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (h = document.createEvent("Event"), h.initEvent("move", !0, !0)), h.to = a, h.from = r, h.dragged = l, h.draggedRect = s, h.related = c || a, h.relatedRect = u || vt(a), h.willInsertAfter = m, h.originalEvent = b, r.dispatchEvent(h), v && (S = v.call(p, h, b)), S;
}
function _f(r) {
  r.draggable = !1;
}
function Jb() {
  Vf = !1;
}
function Wb(r, a, l) {
  var s = vt(mi(l.el, 0, l.options, !0)), c = ty(l.el, l.options, Ce), u = 10;
  return a ? r.clientX < c.left - u || r.clientY < s.top && r.clientX < s.right : r.clientY < c.top - u || r.clientY < s.bottom && r.clientX < s.left;
}
function $b(r, a, l) {
  var s = vt(sh(l.el, l.options.draggable)), c = ty(l.el, l.options, Ce), u = 10;
  return a ? r.clientX > c.right + u || r.clientY > s.bottom && r.clientX > s.left : r.clientY > c.bottom + u || r.clientX > s.right && r.clientY > s.top;
}
function eS(r, a, l, s, c, u, b, m) {
  var h = s ? r.clientY : r.clientX, p = s ? l.height : l.width, v = s ? l.top : l.left, S = s ? l.bottom : l.right, g = !1;
  if (!b) {
    if (m && jo < p * c) {
      if (!jl && (kl === 1 ? h > v + p * u / 2 : h < S - p * u / 2) && (jl = !0), jl)
        g = !0;
      else if (kl === 1 ? h < v + jo : h > S - jo)
        return -kl;
    } else if (h > v + p * (1 - c) / 2 && h < S - p * (1 - c) / 2)
      return tS(a);
  }
  return g = g || b, g && (h < v + p * u / 2 || h > S - p * u / 2) ? h > v + p / 2 ? 1 : -1 : 0;
}
function tS(r) {
  return vn(ie) < vn(r) ? 1 : -1;
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
Qo && ze(document, "touchmove", function(r) {
  (xe.active || hi) && r.cancelable && r.preventDefault();
});
xe.utils = {
  on: ze,
  off: Ue,
  css: _e,
  find: Jv,
  is: function(a, l) {
    return !!Tn(a, l, a, !1);
  },
  extend: Hb,
  throttle: Wv,
  closest: Tn,
  toggleClass: an,
  clone: ey,
  index: vn,
  nextTick: Lo,
  cancelNextTick: Yf,
  detectDirection: ay,
  getChild: mi,
  expando: Yt
};
xe.get = function(r) {
  return r[Yt];
};
xe.mount = function() {
  for (var r = arguments.length, a = new Array(r), l = 0; l < r; l++)
    a[l] = arguments[l];
  a[0].constructor === Array && (a = a[0]), a.forEach(function(s) {
    if (!s.prototype || !s.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(s));
    s.utils && (xe.utils = Hn(Hn({}, xe.utils), s.utils)), Ul.mount(s);
  });
};
xe.create = function(r, a) {
  return new xe(r, a);
};
xe.version = Ub;
var gt = [], wl, Ff, Xf = !1, xf, Ef, Vo, Ol;
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
      this.sortable.nativeDraggable ? ze(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? ze(document, "pointermove", this._handleFallbackAutoScroll) : s.touches ? ze(document, "touchmove", this._handleFallbackAutoScroll) : ze(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(l) {
      var s = l.originalEvent;
      !this.options.dragOverBubble && !s.rootEl && this._handleAutoScroll(s);
    },
    drop: function() {
      this.sortable.nativeDraggable ? Ue(document, "dragover", this._handleAutoScroll) : (Ue(document, "pointermove", this._handleFallbackAutoScroll), Ue(document, "touchmove", this._handleFallbackAutoScroll), Ue(document, "mousemove", this._handleFallbackAutoScroll)), jg(), Bo(), Pb();
    },
    nulling: function() {
      Vo = Ff = wl = Xf = Ol = xf = Ef = null, gt.length = 0;
    },
    _handleFallbackAutoScroll: function(l) {
      this._handleAutoScroll(l, !0);
    },
    _handleAutoScroll: function(l, s) {
      var c = this, u = (l.touches ? l.touches[0] : l).clientX, b = (l.touches ? l.touches[0] : l).clientY, m = document.elementFromPoint(u, b);
      if (Vo = l, s || this.options.forceAutoScrollFallback || Bl || oa || Dl) {
        Cf(l, this.options, m, s);
        var h = Pa(m, !0);
        Xf && (!Ol || u !== xf || b !== Ef) && (Ol && jg(), Ol = setInterval(function() {
          var p = Pa(document.elementFromPoint(u, b), !0);
          p !== h && (h = p, Bo()), Cf(l, c.options, p, s);
        }, 10), xf = u, Ef = b);
      } else {
        if (!this.options.bubbleScroll || Pa(m, !0) === zn()) {
          Bo();
          return;
        }
        Cf(l, this.options, Pa(m, !1), !1);
      }
    }
  }, sa(r, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function Bo() {
  gt.forEach(function(r) {
    clearInterval(r.pid);
  }), gt = [];
}
function jg() {
  clearInterval(Ol);
}
var Cf = Wv(function(r, a, l, s) {
  if (a.scroll) {
    var c = (r.touches ? r.touches[0] : r).clientX, u = (r.touches ? r.touches[0] : r).clientY, b = a.scrollSensitivity, m = a.scrollSpeed, h = zn(), p = !1, v;
    Ff !== l && (Ff = l, Bo(), wl = a.scroll, v = a.scrollFn, wl === !0 && (wl = Pa(l, !0)));
    var S = 0, g = wl;
    do {
      var y = g, d = vt(y), x = d.top, C = d.bottom, O = d.left, A = d.right, j = d.width, E = d.height, N = void 0, k = void 0, L = y.scrollWidth, V = y.scrollHeight, W = _e(y), H = y.scrollLeft, X = y.scrollTop;
      y === h ? (N = j < L && (W.overflowX === "auto" || W.overflowX === "scroll" || W.overflowX === "visible"), k = E < V && (W.overflowY === "auto" || W.overflowY === "scroll" || W.overflowY === "visible")) : (N = j < L && (W.overflowX === "auto" || W.overflowX === "scroll"), k = E < V && (W.overflowY === "auto" || W.overflowY === "scroll"));
      var Q = N && (Math.abs(A - c) <= b && H + j < L) - (Math.abs(O - c) <= b && !!H), le = k && (Math.abs(C - u) <= b && X + E < V) - (Math.abs(x - u) <= b && !!X);
      if (!gt[S])
        for (var oe = 0; oe <= S; oe++)
          gt[oe] || (gt[oe] = {});
      (gt[S].vx != Q || gt[S].vy != le || gt[S].el !== y) && (gt[S].el = y, gt[S].vx = Q, gt[S].vy = le, clearInterval(gt[S].pid), (Q != 0 || le != 0) && (p = !0, gt[S].pid = setInterval((function() {
        s && this.layer === 0 && xe.active._onTouchMove(Vo);
        var de = gt[this.layer].vy ? gt[this.layer].vy * m : 0, z = gt[this.layer].vx ? gt[this.layer].vx * m : 0;
        typeof v == "function" && v.call(xe.dragged.parentNode[Yt], z, de, r, Vo, gt[this.layer].el) !== "continue" || $v(gt[this.layer].el, z, de);
      }).bind({
        layer: S
      }), 24))), S++;
    } while (a.bubbleScroll && g !== h && (g = Pa(g, !1)));
    Xf = p;
  }
}, 30), sy = function(a) {
  var l = a.originalEvent, s = a.putSortable, c = a.dragEl, u = a.activeSortable, b = a.dispatchSortableEvent, m = a.hideGhostForTarget, h = a.unhideGhostForTarget;
  if (l) {
    var p = s || u;
    m();
    var v = l.changedTouches && l.changedTouches.length ? l.changedTouches[0] : l, S = document.elementFromPoint(v.clientX, v.clientY);
    h(), p && !p.el.contains(S) && (b("spill"), this.onSpill({
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
    var c = mi(this.sortable.el, this.startIndex, this.options);
    c ? this.sortable.el.insertBefore(l, c) : this.sortable.el.appendChild(l), this.sortable.animateAll(), s && s.animateAll();
  },
  drop: sy
};
sa(oh, {
  pluginName: "revertOnSpill"
});
function uh() {
}
uh.prototype = {
  onSpill: function(a) {
    var l = a.dragEl, s = a.putSortable, c = s || this.sortable;
    c.captureAnimationState(), l.parentNode && l.parentNode.removeChild(l), c.animateAll();
  },
  drop: sy
};
sa(uh, {
  pluginName: "removeOnSpill"
});
xe.mount(new rS());
xe.mount(uh, oh);
async function iS({
  entry: r,
  selectedWorldName: a,
  skipSave: l = !1,
  skipReload: s = !1,
  operation: c = "auto"
}) {
  const u = SillyTavern.getContext(), b = await u.loadWorldInfo(a);
  if (!b)
    throw new Error("Failed to load world info");
  const m = Object.values(b.entries), h = m.length > 0 ? m[m.length - 1] : void 0;
  let p;
  if (c === "update" || c === "auto") {
    const S = Object.values(b.entries).find((g) => g.uid === r.uid);
    if (S)
      (c === "auto" || c === "update") && (p = S);
    else if (c === "update")
      throw new Error("Entry not found for update operation");
  }
  const v = p ? "update" : "add";
  if (!p) {
    if (p = wb(a, b), !p)
      throw new Error("Failed to create entry");
    if (h) {
      const S = p.uid;
      Object.assign(p, h), p.uid = S;
    }
  }
  return p.key = r.key, p.content = r.content, p.comment = r.comment, l || await u.saveWorldInfo(a, b), s || u.reloadWorldInfoEditor(a, !0), {
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
  {{else}}*Not provided*{{/if}}`, Ll = `{{#is_not_empty fields}}
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
  let s = !1, c = !1;
  r[0] === "\uFEFF" && (r = r.substr(1));
  for (let u = 0; u < r.length; u++)
    if (r[u] === "<" && r[u + 1] === "?") {
      if (u += 2, u = Bg(r, u), u.err) return u;
    } else if (r[u] === "<") {
      let b = u;
      if (u++, r[u] === "!") {
        u = Ug(r, u);
        continue;
      } else {
        let m = !1;
        r[u] === "/" && (m = !0, u++);
        let h = "";
        for (; u < r.length && r[u] !== ">" && r[u] !== " " && r[u] !== "	" && r[u] !== `
` && r[u] !== "\r"; u++)
          h += r[u];
        if (h = h.trim(), h[h.length - 1] === "/" && (h = h.substring(0, h.length - 1), u--), !xS(h)) {
          let S;
          return h.trim().length === 0 ? S = "Invalid space after '<'." : S = "Tag '" + h + "' is an invalid name.", dt("InvalidTag", S, Ut(r, u));
        }
        const p = vS(r, u);
        if (p === !1)
          return dt("InvalidAttr", "Attributes for '" + h + "' have open quote.", Ut(r, u));
        let v = p.value;
        if (u = p.index, v[v.length - 1] === "/") {
          const S = u - v.length;
          v = v.substring(0, v.length - 1);
          const g = zg(v, a);
          if (g === !0)
            s = !0;
          else
            return dt(g.err.code, g.err.msg, Ut(r, S + g.err.line));
        } else if (m)
          if (p.tagClosed) {
            if (v.trim().length > 0)
              return dt("InvalidTag", "Closing tag '" + h + "' can't have attributes or invalid starting.", Ut(r, b));
            if (l.length === 0)
              return dt("InvalidTag", "Closing tag '" + h + "' has not been opened.", Ut(r, b));
            {
              const S = l.pop();
              if (h !== S.tagName) {
                let g = Ut(r, S.tagStartPos);
                return dt(
                  "InvalidTag",
                  "Expected closing tag '" + S.tagName + "' (opened in line " + g.line + ", col " + g.col + ") instead of closing tag '" + h + "'.",
                  Ut(r, b)
                );
              }
              l.length == 0 && (c = !0);
            }
          } else return dt("InvalidTag", "Closing tag '" + h + "' doesn't have proper closing.", Ut(r, u));
        else {
          const S = zg(v, a);
          if (S !== !0)
            return dt(S.err.code, S.err.msg, Ut(r, u - v.length + S.err.line));
          if (c === !0)
            return dt("InvalidXml", "Multiple possible root nodes found.", Ut(r, u));
          a.unpairedTags.indexOf(h) !== -1 || l.push({ tagName: h, tagStartPos: b }), s = !0;
        }
        for (u++; u < r.length; u++)
          if (r[u] === "<")
            if (r[u + 1] === "!") {
              u++, u = Ug(r, u);
              continue;
            } else if (r[u + 1] === "?") {
              if (u = Bg(r, ++u), u.err) return u;
            } else
              break;
          else if (r[u] === "&") {
            const S = SS(r, u);
            if (S == -1)
              return dt("InvalidChar", "char '&' is not expected.", Ut(r, u));
            u = S;
          } else if (c === !0 && !Lg(r[u]))
            return dt("InvalidXml", "Extra text at the end", Ut(r, u));
        r[u] === "<" && u--;
      }
    } else {
      if (Lg(r[u]))
        continue;
      return dt("InvalidChar", "char '" + r[u] + "' is not expected.", Ut(r, u));
    }
  if (s) {
    if (l.length == 1)
      return dt("InvalidTag", "Unclosed tag '" + l[0].tagName + "'.", Ut(r, l[0].tagStartPos));
    if (l.length > 0)
      return dt("InvalidXml", "Invalid '" + JSON.stringify(l.map((u) => u.tagName), null, 4).replace(/\r?\n/g, "") + "' found.", { line: 1, col: 1 });
  } else return dt("InvalidXml", "Start tag expected.", 1);
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
        return dt("InvalidXml", "XML declaration allowed only at the start of the document.", Ut(r, a));
      if (r[a] == "?" && r[a + 1] == ">") {
        a++;
        break;
      } else
        continue;
    }
  return a;
}
function Ug(r, a) {
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
  let l = "", s = "", c = !1;
  for (; a < r.length; a++) {
    if (r[a] === mS || r[a] === gS)
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
const yS = new RegExp(`(\\s*)([^\\s=]+)(\\s*=)?(\\s*(['"])(([\\s\\S])*?)\\5)?`, "g");
function zg(r, a) {
  const l = fy(r, yS), s = {};
  for (let c = 0; c < l.length; c++) {
    if (l[c][1].length === 0)
      return dt("InvalidAttr", "Attribute '" + l[c][2] + "' has no space in starting.", bl(l[c]));
    if (l[c][3] !== void 0 && l[c][4] === void 0)
      return dt("InvalidAttr", "Attribute '" + l[c][2] + "' is without value.", bl(l[c]));
    if (l[c][3] === void 0 && !a.allowBooleanAttributes)
      return dt("InvalidAttr", "boolean attribute '" + l[c][2] + "' is not allowed.", bl(l[c]));
    const u = l[c][2];
    if (!_S(u))
      return dt("InvalidAttr", "Attribute '" + u + "' is an invalid name.", bl(l[c]));
    if (!s.hasOwnProperty(u))
      s[u] = 1;
    else
      return dt("InvalidAttr", "Attribute '" + u + "' is repeated.", bl(l[c]));
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
function dt(r, a, l) {
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
function Ut(r, a) {
  const l = r.substring(0, a).split(/\r?\n/);
  return {
    line: l.length,
    // column number is last line's length + 1, because column numbering starts at 1:
    col: l[l.length - 1].length + 1
  };
}
function bl(r) {
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
class Sl {
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
    let s = 1, c = !1, u = !1, b = "";
    for (; a < r.length; a++)
      if (r[a] === "<" && !u) {
        if (c && wS(r, a)) {
          a += 7;
          let m, h;
          [m, h, a] = TS(r, a + 1), h.indexOf("&") === -1 && (l[RS(m)] = {
            regx: RegExp(`&${m};`, "g"),
            val: h
          });
        } else if (c && OS(r, a)) a += 8;
        else if (c && DS(r, a)) a += 8;
        else if (c && MS(r, a)) a += 9;
        else if (NS) u = !0;
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
function TS(r, a) {
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
function NS(r, a) {
  return r[a + 1] === "!" && r[a + 2] === "-" && r[a + 3] === "-";
}
function wS(r, a) {
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
    const s = jS.exec(l);
    if (s) {
      const c = s[1], u = s[2];
      let b = US(s[3]);
      if (!a.leadingZeros && u.length > 0 && c && l[2] !== ".") return r;
      if (!a.leadingZeros && u.length > 0 && !c && l[1] !== ".") return r;
      if (a.leadingZeros && u === r) return 0;
      {
        const m = Number(l), h = "" + m;
        return h.search(/[eE]/) !== -1 ? a.eNotation ? m : r : l.indexOf(".") !== -1 ? h === "0" && b === "" || h === b || c && h === "-" + b ? m : r : u ? b === h || c + b === h ? m : r : l === h || l === c + h ? m : r;
      }
    } else
      return r;
  }
}
function US(r) {
  return r && r.indexOf(".") !== -1 && (r = r.replace(/0+$/, ""), r === "." ? r = "0" : r[0] === "." ? r = "0" + r : r[r.length - 1] === "." && (r = r.substr(0, r.length - 1))), r;
}
function zS(r, a) {
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
function IS(r, a, l, s, c, u, b) {
  if (r !== void 0 && (this.options.trimValues && !s && (r = r.trim()), r.length > 0)) {
    b || (r = this.replaceEntitiesValue(r));
    const m = this.options.tagValueProcessor(a, r, l, c, u);
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
    const s = fy(r, VS), c = s.length, u = {};
    for (let b = 0; b < c; b++) {
      const m = this.resolveNameSpace(s[b][1]);
      if (this.ignoreAttributesFn(m, a))
        continue;
      let h = s[b][4], p = this.options.attributeNamePrefix + m;
      if (m.length)
        if (this.options.transformAttributeName && (p = this.options.transformAttributeName(p)), p === "__proto__" && (p = "#__proto__"), h !== void 0) {
          this.options.trimValues && (h = h.trim()), h = this.replaceEntitiesValue(h);
          const v = this.options.attributeValueProcessor(m, h, a);
          v == null ? u[p] = h : typeof v != typeof h || v !== h ? u[p] = v : u[p] = Jf(
            h,
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
const FS = function(r) {
  r = r.replace(/\r\n?/g, `
`);
  const a = new Sl("!xml");
  let l = a, s = "", c = "";
  for (let u = 0; u < r.length; u++)
    if (r[u] === "<")
      if (r[u + 1] === "/") {
        const m = mr(r, ">", u, "Closing Tag is not closed.");
        let h = r.substring(u + 2, m).trim();
        if (this.options.removeNSPrefix) {
          const S = h.indexOf(":");
          S !== -1 && (h = h.substr(S + 1));
        }
        this.options.transformTagName && (h = this.options.transformTagName(h)), l && (s = this.saveTextToParentTag(s, l, c));
        const p = c.substring(c.lastIndexOf(".") + 1);
        if (h && this.options.unpairedTags.indexOf(h) !== -1)
          throw new Error(`Unpaired tag can not be used as closing tag: </${h}>`);
        let v = 0;
        p && this.options.unpairedTags.indexOf(p) !== -1 ? (v = c.lastIndexOf(".", c.lastIndexOf(".") - 1), this.tagsNodeStack.pop()) : v = c.lastIndexOf("."), c = c.substring(0, v), l = this.tagsNodeStack.pop(), s = "", u = m;
      } else if (r[u + 1] === "?") {
        let m = Kf(r, u, !1, "?>");
        if (!m) throw new Error("Pi Tag is not closed.");
        if (s = this.saveTextToParentTag(s, l, c), !(this.options.ignoreDeclaration && m.tagName === "?xml" || this.options.ignorePiTags)) {
          const h = new Sl(m.tagName);
          h.add(this.options.textNodeName, ""), m.tagName !== m.tagExp && m.attrExpPresent && (h[":@"] = this.buildAttributesMap(m.tagExp, c, m.tagName)), this.addChild(l, h, c);
        }
        u = m.closeIndex + 1;
      } else if (r.substr(u + 1, 3) === "!--") {
        const m = mr(r, "-->", u + 4, "Comment is not closed.");
        if (this.options.commentPropName) {
          const h = r.substring(u + 4, m - 2);
          s = this.saveTextToParentTag(s, l, c), l.add(this.options.commentPropName, [{ [this.options.textNodeName]: h }]);
        }
        u = m;
      } else if (r.substr(u + 1, 2) === "!D") {
        const m = AS(r, u);
        this.docTypeEntities = m.entities, u = m.i;
      } else if (r.substr(u + 1, 2) === "![") {
        const m = mr(r, "]]>", u, "CDATA is not closed.") - 2, h = r.substring(u + 9, m);
        s = this.saveTextToParentTag(s, l, c);
        let p = this.parseTextData(h, l.tagname, c, !0, !1, !0, !0);
        p == null && (p = ""), this.options.cdataPropName ? l.add(this.options.cdataPropName, [{ [this.options.textNodeName]: h }]) : l.add(this.options.textNodeName, p), u = m + 2;
      } else {
        let m = Kf(r, u, this.options.removeNSPrefix), h = m.tagName;
        const p = m.rawTagName;
        let v = m.tagExp, S = m.attrExpPresent, g = m.closeIndex;
        this.options.transformTagName && (h = this.options.transformTagName(h)), l && s && l.tagname !== "!xml" && (s = this.saveTextToParentTag(s, l, c, !1));
        const y = l;
        if (y && this.options.unpairedTags.indexOf(y.tagname) !== -1 && (l = this.tagsNodeStack.pop(), c = c.substring(0, c.lastIndexOf("."))), h !== a.tagname && (c += c ? "." + h : h), this.isItStopNode(this.options.stopNodes, c, h)) {
          let d = "";
          if (v.length > 0 && v.lastIndexOf("/") === v.length - 1)
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), c = c.substr(0, c.length - 1), v = h) : v = v.substr(0, v.length - 1), u = m.closeIndex;
          else if (this.options.unpairedTags.indexOf(h) !== -1)
            u = m.closeIndex;
          else {
            const C = this.readStopNodeData(r, p, g + 1);
            if (!C) throw new Error(`Unexpected end of ${p}`);
            u = C.i, d = C.tagContent;
          }
          const x = new Sl(h);
          h !== v && S && (x[":@"] = this.buildAttributesMap(v, c, h)), d && (d = this.parseTextData(d, h, c, !0, S, !0, !0)), c = c.substr(0, c.lastIndexOf(".")), x.add(this.options.textNodeName, d), this.addChild(l, x, c);
        } else {
          if (v.length > 0 && v.lastIndexOf("/") === v.length - 1) {
            h[h.length - 1] === "/" ? (h = h.substr(0, h.length - 1), c = c.substr(0, c.length - 1), v = h) : v = v.substr(0, v.length - 1), this.options.transformTagName && (h = this.options.transformTagName(h));
            const d = new Sl(h);
            h !== v && S && (d[":@"] = this.buildAttributesMap(v, c, h)), this.addChild(l, d, c), c = c.substr(0, c.lastIndexOf("."));
          } else {
            const d = new Sl(h);
            this.tagsNodeStack.push(l), h !== v && S && (d[":@"] = this.buildAttributesMap(v, c, h)), this.addChild(l, d, c), l = d;
          }
          s = "", u = g;
        }
      }
    else
      s += r[u];
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
  for (const c in r) {
    const u = r[c];
    if (s === u || a === u) return !0;
  }
  return !1;
}
function JS(r, a, l = ">") {
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
function mr(r, a, l, s) {
  const c = r.indexOf(a, l);
  if (c === -1)
    throw new Error(s);
  return c + a.length - 1;
}
function Kf(r, a, l, s = ">") {
  const c = JS(r, a + 1, s);
  if (!c) return;
  let u = c.data;
  const b = c.index, m = u.search(/\s/);
  let h = u, p = !0;
  m !== -1 && (h = u.substring(0, m), u = u.substring(m + 1).trimStart());
  const v = h;
  if (l) {
    const S = h.indexOf(":");
    S !== -1 && (h = h.substr(S + 1), p = h !== c.data.substr(S + 1));
  }
  return {
    tagName: h,
    tagExp: u,
    closeIndex: b,
    attrExpPresent: p,
    rawTagName: v
  };
}
function WS(r, a, l) {
  const s = l;
  let c = 1;
  for (; l < r.length; l++)
    if (r[l] === "<")
      if (r[l + 1] === "/") {
        const u = mr(r, ">", l, `${a} is not closed`);
        if (r.substring(l + 2, u).trim() === a && (c--, c === 0))
          return {
            tagContent: r.substring(s, l),
            i: u
          };
        l = u;
      } else if (r[l + 1] === "?")
        l = mr(r, "?>", l + 1, "StopNode is not closed.");
      else if (r.substr(l + 1, 3) === "!--")
        l = mr(r, "-->", l + 3, "StopNode is not closed.");
      else if (r.substr(l + 1, 2) === "![")
        l = mr(r, "]]>", l, "StopNode is not closed.") - 2;
      else {
        const u = Kf(r, l, ">");
        u && ((u && u.tagName) === a && u.tagExp[u.tagExp.length - 1] !== "/" && c++, l = u.closeIndex);
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
  const c = {};
  for (let u = 0; u < r.length; u++) {
    const b = r[u], m = e_(b);
    let h = "";
    if (l === void 0 ? h = m : h = l + "." + m, m === a.textNodeName)
      s === void 0 ? s = b[m] : s += "" + b[m];
    else {
      if (m === void 0)
        continue;
      if (b[m]) {
        let p = dy(b[m], a, h);
        const v = n_(p, a);
        b[":@"] ? t_(p, b[":@"], h, a) : Object.keys(p).length === 1 && p[a.textNodeName] !== void 0 && !a.alwaysCreateTextNode ? p = p[a.textNodeName] : Object.keys(p).length === 0 && (a.alwaysCreateTextNode ? p[a.textNodeName] = "" : p = ""), c[m] !== void 0 && c.hasOwnProperty(m) ? (Array.isArray(c[m]) || (c[m] = [c[m]]), c[m].push(p)) : a.isArray(m, h, v) ? c[m] = [p] : c[m] = p;
      }
    }
  }
  return typeof s == "string" ? s.length > 0 && (c[a.textNodeName] = s) : s !== void 0 && (c[a.textNodeName] = s), c;
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
    const c = Object.keys(a), u = c.length;
    for (let b = 0; b < u; b++) {
      const m = c[b];
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
      const u = hy(a, l);
      if (u !== !0)
        throw Error(`${u.err.msg}:${u.err.line}:${u.err.col}`);
    }
    const s = new PS(this.options);
    s.addExternalEntities(this.externalEntities);
    const c = s.parseXml(a);
    return this.options.preserveOrder || c === void 0 ? c : $S(c, this.options);
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
}), py = "START", l_ = /<START>/g, s_ = (r) => r.replace(l_, py), oi = (r) => r.split(py).join("<START>");
function Wf(r, a) {
  if (!(!a || !r || !a.properties))
    for (const l in a.properties) {
      if (!r.hasOwnProperty(l)) continue;
      const s = a.properties[l];
      let c = r[l];
      s.type === "array" && !Array.isArray(c) && (c = [c], r[l] = c), s.type === "object" && typeof c == "object" && c !== null ? Wf(c, s) : s.type === "array" && s.items?.type === "object" && Array.isArray(c) && c.forEach((u) => Wf(u, s.items)), s.type === "string" && typeof c != "string" ? r[l] = String(c) : s.type === "array" && s.items?.type === "string" && Array.isArray(c) && (r[l] = c.map(String));
    }
}
function o_(r) {
  const a = /```(?:\w+\n|\n)?([\s\S]*?)```/g;
  let l, s = null;
  for (; (l = a.exec(r)) !== null; )
    s = l[1].trim();
  return s;
}
function gr(r) {
  if (r == null)
    return "";
  if (typeof r != "object")
    return String(r).trim();
  if ("#text" in r)
    return gr(r["#text"]);
  if ("response" in r)
    return gr(r.response);
  if ("message" in r)
    return gr(r.message);
  const a = Object.values(r)[0];
  return gr(a);
}
function u_(r, a, l = {}) {
  let c = o_(r) ?? r.trim();
  try {
    switch (a) {
      case "xml": {
        const u = s_(c);
        if (l.schema) {
          const m = r_.validate(u);
          if (m !== !0)
            throw new Error(`Model response is not valid XML: ${m.err.msg}`);
        }
        let b = i_.parse(u);
        if (b.root)
          b = b.root;
        else if (b.response)
          return oi(gr(b.response));
        return l.schema ? (Wf(b, l.schema), b) : oi(gr(b));
      }
      case "json": {
        const u = JSON.parse(c), b = l.schema ? u : gr(u);
        return typeof b == "string" ? oi(b) : b;
      }
      case "none":
        return oi(c);
      default:
        throw new Error(`Unsupported format specified: ${a}`);
    }
  } catch (u) {
    if (a !== "none" && !l.schema) {
      const b = c.match(/<response>([\s\S]*)/);
      if (b)
        return l.onRecovery?.(`XML response was malformed; recovered inner text via regex (parse error: ${u?.message ?? "unknown"})`), oi(b[1].replace(/<\/[\s\S]*$/, "").trim());
      const m = c.match(/"response":\s*"([\s\S]*)/);
      if (m)
        return l.onRecovery?.(`JSON response was malformed; recovered inner text via regex (parse error: ${u?.message ?? "unknown"})`), oi(m[1].replace(/"\s*}\s*$/, ""));
    }
    throw console.error(`Error parsing response in format '${a}':`, u), console.error("Raw content received:", r), a === "xml" ? u.message.startsWith("Model response is not valid XML:") ? u : new Error(`Model response is not valid XML: ${u.message}`) : a === "json" ? new Error("Model response is not valid JSON.") : new Error(`Failed to parse response as ${a}: ${u.message}`);
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
const my = {
  name: 128,
  description: 768,
  personality: 768,
  scenario: 512,
  first_mes: 1024,
  mes_example: 2048
};
function f_(r, a, l) {
  const s = l?.[r];
  if (typeof s == "number" && Number.isFinite(s) && s > 0)
    return Math.floor(s);
  const c = my[r];
  return typeof c == "number" && Number.isFinite(c) && c > 0 ? c : a;
}
var ao = { exports: {} }, ro = { exports: {} }, An = {}, Vt = {}, Pg;
function Ft() {
  if (Pg) return Vt;
  Pg = 1, Vt.__esModule = !0, Vt.extend = c, Vt.indexOf = h, Vt.escapeExpression = p, Vt.isEmpty = v, Vt.createFrame = S, Vt.blockParams = g, Vt.appendContextPath = y;
  var r = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;",
    "=": "&#x3D;"
  }, a = /[&<>"'`=]/g, l = /[&<>"'`=]/;
  function s(d) {
    return r[d];
  }
  function c(d) {
    for (var x = 1; x < arguments.length; x++)
      for (var C in arguments[x])
        Object.prototype.hasOwnProperty.call(arguments[x], C) && (d[C] = arguments[x][C]);
    return d;
  }
  var u = Object.prototype.toString;
  Vt.toString = u;
  var b = function(x) {
    return typeof x == "function";
  };
  b(/x/) && (Vt.isFunction = b = function(d) {
    return typeof d == "function" && u.call(d) === "[object Function]";
  }), Vt.isFunction = b;
  var m = Array.isArray || function(d) {
    return d && typeof d == "object" ? u.call(d) === "[object Array]" : !1;
  };
  Vt.isArray = m;
  function h(d, x) {
    for (var C = 0, O = d.length; C < O; C++)
      if (d[C] === x)
        return C;
    return -1;
  }
  function p(d) {
    if (typeof d != "string") {
      if (d && d.toHTML)
        return d.toHTML();
      if (d == null)
        return "";
      if (!d)
        return d + "";
      d = "" + d;
    }
    return l.test(d) ? d.replace(a, s) : d;
  }
  function v(d) {
    return !d && d !== 0 ? !0 : !!(m(d) && d.length === 0);
  }
  function S(d) {
    var x = c({}, d);
    return x._parent = d, x;
  }
  function g(d, x) {
    return d.path = x, d;
  }
  function y(d, x) {
    return (d ? d + "." : "") + x;
  }
  return Vt;
}
var io = { exports: {} }, qg;
function wn() {
  return qg || (qg = 1, (function(r, a) {
    a.__esModule = !0;
    var l = ["description", "fileName", "lineNumber", "endLineNumber", "message", "name", "number", "stack"];
    function s(c, u) {
      var b = u && u.loc, m = void 0, h = void 0, p = void 0, v = void 0;
      b && (m = b.start.line, h = b.end.line, p = b.start.column, v = b.end.column, c += " - " + m + ":" + p);
      for (var S = Error.prototype.constructor.call(this, c), g = 0; g < l.length; g++)
        this[l[g]] = S[l[g]];
      Error.captureStackTrace && Error.captureStackTrace(this, s);
      try {
        b && (this.lineNumber = m, this.endLineNumber = h, Object.defineProperty ? (Object.defineProperty(this, "column", {
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
var _l = {}, lo = { exports: {} }, Ig;
function h_() {
  return Ig || (Ig = 1, (function(r, a) {
    a.__esModule = !0;
    var l = Ft();
    a.default = function(s) {
      s.registerHelper("blockHelperMissing", function(c, u) {
        var b = u.inverse, m = u.fn;
        if (c === !0)
          return m(this);
        if (c === !1 || c == null)
          return b(this);
        if (l.isArray(c))
          return c.length > 0 ? (u.ids && (u.ids = [u.name]), s.helpers.each(c, u)) : b(this);
        if (u.data && u.ids) {
          var h = l.createFrame(u.data);
          h.contextPath = l.appendContextPath(u.data.contextPath, u.name), u = { data: h };
        }
        return m(c, u);
      });
    }, r.exports = a.default;
  })(lo, lo.exports)), lo.exports;
}
var so = { exports: {} }, Gg;
function d_() {
  return Gg || (Gg = 1, (function(r, a) {
    a.__esModule = !0;
    function l(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var s = Ft(), c = wn(), u = l(c);
    a.default = function(b) {
      b.registerHelper("each", function(m, h) {
        if (!h)
          throw new u.default("Must pass iterator to #each");
        var p = h.fn, v = h.inverse, S = 0, g = "", y = void 0, d = void 0;
        h.data && h.ids && (d = s.appendContextPath(h.data.contextPath, h.ids[0]) + "."), s.isFunction(m) && (m = m.call(this)), h.data && (y = s.createFrame(h.data));
        function x(E, N, k) {
          y && (y.key = E, y.index = N, y.first = N === 0, y.last = !!k, d && (y.contextPath = d + E)), g = g + p(m[E], {
            data: y,
            blockParams: s.blockParams([m[E], E], [d + E, null])
          });
        }
        if (m && typeof m == "object")
          if (s.isArray(m))
            for (var C = m.length; S < C; S++)
              S in m && x(S, S, S === m.length - 1);
          else if (typeof Symbol == "function" && m[Symbol.iterator]) {
            for (var O = [], A = m[Symbol.iterator](), j = A.next(); !j.done; j = A.next())
              O.push(j.value);
            m = O;
            for (var C = m.length; S < C; S++)
              x(S, S, S === m.length - 1);
          } else
            (function() {
              var E = void 0;
              Object.keys(m).forEach(function(N) {
                E !== void 0 && x(E, S - 1), E = N, S++;
              }), E !== void 0 && x(E, S - 1, !0);
            })();
        return S === 0 && (g = v(this)), g;
      });
    }, r.exports = a.default;
  })(so, so.exports)), so.exports;
}
var oo = { exports: {} }, Vg;
function p_() {
  return Vg || (Vg = 1, (function(r, a) {
    a.__esModule = !0;
    function l(u) {
      return u && u.__esModule ? u : { default: u };
    }
    var s = wn(), c = l(s);
    a.default = function(u) {
      u.registerHelper("helperMissing", function() {
        if (arguments.length !== 1)
          throw new c.default('Missing helper: "' + arguments[arguments.length - 1].name + '"');
      });
    }, r.exports = a.default;
  })(oo, oo.exports)), oo.exports;
}
var uo = { exports: {} }, Yg;
function m_() {
  return Yg || (Yg = 1, (function(r, a) {
    a.__esModule = !0;
    function l(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var s = Ft(), c = wn(), u = l(c);
    a.default = function(b) {
      b.registerHelper("if", function(m, h) {
        if (arguments.length != 2)
          throw new u.default("#if requires exactly one argument");
        return s.isFunction(m) && (m = m.call(this)), !h.hash.includeZero && !m || s.isEmpty(m) ? h.inverse(this) : h.fn(this);
      }), b.registerHelper("unless", function(m, h) {
        if (arguments.length != 2)
          throw new u.default("#unless requires exactly one argument");
        return b.helpers.if.call(this, m, {
          fn: h.inverse,
          inverse: h.fn,
          hash: h.hash
        });
      });
    }, r.exports = a.default;
  })(uo, uo.exports)), uo.exports;
}
var co = { exports: {} }, Fg;
function g_() {
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
function v_() {
  return Xg || (Xg = 1, (function(r, a) {
    a.__esModule = !0, a.default = function(l) {
      l.registerHelper("lookup", function(s, c, u) {
        return s && u.lookupProperty(s, c);
      });
    }, r.exports = a.default;
  })(fo, fo.exports)), fo.exports;
}
var ho = { exports: {} }, Qg;
function y_() {
  return Qg || (Qg = 1, (function(r, a) {
    a.__esModule = !0;
    function l(b) {
      return b && b.__esModule ? b : { default: b };
    }
    var s = Ft(), c = wn(), u = l(c);
    a.default = function(b) {
      b.registerHelper("with", function(m, h) {
        if (arguments.length != 2)
          throw new u.default("#with requires exactly one argument");
        s.isFunction(m) && (m = m.call(this));
        var p = h.fn;
        if (s.isEmpty(m))
          return h.inverse(this);
        var v = h.data;
        return h.data && h.ids && (v = s.createFrame(h.data), v.contextPath = s.appendContextPath(h.data.contextPath, h.ids[0])), p(m, {
          data: v,
          blockParams: s.blockParams([m], [v && v.contextPath])
        });
      });
    }, r.exports = a.default;
  })(ho, ho.exports)), ho.exports;
}
var Zg;
function gy() {
  if (Zg) return _l;
  Zg = 1, _l.__esModule = !0, _l.registerDefaultHelpers = x, _l.moveHelperToHooks = C;
  function r(O) {
    return O && O.__esModule ? O : { default: O };
  }
  var a = h_(), l = r(a), s = d_(), c = r(s), u = p_(), b = r(u), m = m_(), h = r(m), p = g_(), v = r(p), S = v_(), g = r(S), y = y_(), d = r(y);
  function x(O) {
    l.default(O), c.default(O), b.default(O), h.default(O), v.default(O), g.default(O), d.default(O);
  }
  function C(O, A, j) {
    O.helpers[A] && (O.hooks[A] = O.helpers[A], j || delete O.helpers[A]);
  }
  return _l;
}
var po = {}, mo = { exports: {} }, Kg;
function b_() {
  return Kg || (Kg = 1, (function(r, a) {
    a.__esModule = !0;
    var l = Ft();
    a.default = function(s) {
      s.registerDecorator("inline", function(c, u, b, m) {
        var h = c;
        return u.partials || (u.partials = {}, h = function(p, v) {
          var S = b.partials;
          b.partials = l.extend({}, S, u.partials);
          var g = c(p, v);
          return b.partials = S, g;
        }), u.partials[m.args[0]] = m.fn, h;
      });
    }, r.exports = a.default;
  })(mo, mo.exports)), mo.exports;
}
var Jg;
function S_() {
  if (Jg) return po;
  Jg = 1, po.__esModule = !0, po.registerDefaultDecorators = s;
  function r(c) {
    return c && c.__esModule ? c : { default: c };
  }
  var a = b_(), l = r(a);
  function s(c) {
    l.default(c);
  }
  return po;
}
var go = { exports: {} }, Wg;
function vy() {
  return Wg || (Wg = 1, (function(r, a) {
    a.__esModule = !0;
    var l = Ft(), s = {
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
          for (var m = arguments.length, h = Array(m > 1 ? m - 1 : 0), p = 1; p < m; p++)
            h[p - 1] = arguments[p];
          console[b].apply(console, h);
        }
      }
    };
    a.default = s, r.exports = a.default;
  })(go, go.exports)), go.exports;
}
var ui = {}, vo = {}, $g;
function __() {
  if ($g) return vo;
  $g = 1, vo.__esModule = !0, vo.createNewLookupObject = a;
  var r = Ft();
  function a() {
    for (var l = arguments.length, s = Array(l), c = 0; c < l; c++)
      s[c] = arguments[c];
    return r.extend.apply(void 0, [/* @__PURE__ */ Object.create(null)].concat(s));
  }
  return vo;
}
var ev;
function yy() {
  if (ev) return ui;
  ev = 1, ui.__esModule = !0, ui.createProtoAccessControl = u, ui.resultIsAllowed = b, ui.resetLoggedProperties = p;
  function r(v) {
    return v && v.__esModule ? v : { default: v };
  }
  var a = __(), l = vy(), s = r(l), c = /* @__PURE__ */ Object.create(null);
  function u(v) {
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
    return v.whitelist[S] !== void 0 ? v.whitelist[S] === !0 : v.defaultValue !== void 0 ? v.defaultValue : (h(S), !1);
  }
  function h(v) {
    c[v] !== !0 && (c[v] = !0, s.default.log("error", 'Handlebars: Access has been denied to resolve the property "' + v + `" because it is not an "own property" of its parent.
You can add a runtime option to disable the check or this warning:
See https://handlebarsjs.com/api-reference/runtime-options.html#options-to-control-prototype-access for details`));
  }
  function p() {
    Object.keys(c).forEach(function(v) {
      delete c[v];
    });
  }
  return ui;
}
var tv;
function dh() {
  if (tv) return An;
  tv = 1, An.__esModule = !0, An.HandlebarsEnvironment = d;
  function r(C) {
    return C && C.__esModule ? C : { default: C };
  }
  var a = Ft(), l = wn(), s = r(l), c = gy(), u = S_(), b = vy(), m = r(b), h = yy(), p = "4.7.8";
  An.VERSION = p;
  var v = 8;
  An.COMPILER_REVISION = v;
  var S = 7;
  An.LAST_COMPATIBLE_COMPILER_REVISION = S;
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
  An.REVISION_CHANGES = g;
  var y = "[object Object]";
  function d(C, O, A) {
    this.helpers = C || {}, this.partials = O || {}, this.decorators = A || {}, c.registerDefaultHelpers(this), u.registerDefaultDecorators(this);
  }
  d.prototype = {
    constructor: d,
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
      h.resetLoggedProperties();
    }
  };
  var x = m.default.log;
  return An.log = x, An.createFrame = a.createFrame, An.logger = m.default, An;
}
var yo = { exports: {} }, nv;
function x_() {
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
var ta = {}, bo = {}, av;
function E_() {
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
function C_() {
  if (rv) return ta;
  rv = 1, ta.__esModule = !0, ta.checkRevision = v, ta.template = S, ta.wrapProgram = g, ta.resolvePartial = y, ta.invokePartial = d, ta.noop = x;
  function r(E) {
    return E && E.__esModule ? E : { default: E };
  }
  function a(E) {
    if (E && E.__esModule)
      return E;
    var N = {};
    if (E != null)
      for (var k in E)
        Object.prototype.hasOwnProperty.call(E, k) && (N[k] = E[k]);
    return N.default = E, N;
  }
  var l = Ft(), s = a(l), c = wn(), u = r(c), b = dh(), m = gy(), h = E_(), p = yy();
  function v(E) {
    var N = E && E[0] || 1, k = b.COMPILER_REVISION;
    if (!(N >= b.LAST_COMPATIBLE_COMPILER_REVISION && N <= b.COMPILER_REVISION))
      if (N < b.LAST_COMPATIBLE_COMPILER_REVISION) {
        var L = b.REVISION_CHANGES[k], V = b.REVISION_CHANGES[N];
        throw new u.default("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + L + ") or downgrade your runtime to an older version (" + V + ").");
      } else
        throw new u.default("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + E[1] + ").");
  }
  function S(E, N) {
    if (!N)
      throw new u.default("No environment passed to template");
    if (!E || !E.main)
      throw new u.default("Unknown template object: " + typeof E);
    E.main.decorator = E.main_d, N.VM.checkRevision(E.compiler);
    var k = E.compiler && E.compiler[0] === 7;
    function L(H, X, Q) {
      Q.hash && (X = s.extend({}, X, Q.hash), Q.ids && (Q.ids[0] = !0)), H = N.VM.resolvePartial.call(this, H, X, Q);
      var le = s.extend({}, Q, {
        hooks: this.hooks,
        protoAccessControl: this.protoAccessControl
      }), oe = N.VM.invokePartial.call(this, H, X, le);
      if (oe == null && N.compile && (Q.partials[Q.name] = N.compile(H, E.compilerOptions, N), oe = Q.partials[Q.name](X, le)), oe != null) {
        if (Q.indent) {
          for (var de = oe.split(`
`), z = 0, re = de.length; z < re && !(!de[z] && z + 1 === re); z++)
            de[z] = Q.indent + de[z];
          oe = de.join(`
`);
        }
        return oe;
      } else
        throw new u.default("The partial " + Q.name + " could not be compiled when running in runtime-only mode");
    }
    var V = {
      strict: function(X, Q, le) {
        if (!X || !(Q in X))
          throw new u.default('"' + Q + '" not defined in ' + X, {
            loc: le
          });
        return V.lookupProperty(X, Q);
      },
      lookupProperty: function(X, Q) {
        var le = X[Q];
        if (le == null || Object.prototype.hasOwnProperty.call(X, Q) || p.resultIsAllowed(le, V.protoAccessControl, Q))
          return le;
      },
      lookup: function(X, Q) {
        for (var le = X.length, oe = 0; oe < le; oe++) {
          var de = X[oe] && V.lookupProperty(X[oe], Q);
          if (de != null)
            return X[oe][Q];
        }
      },
      lambda: function(X, Q) {
        return typeof X == "function" ? X.call(Q) : X;
      },
      escapeExpression: s.escapeExpression,
      invokePartial: L,
      fn: function(X) {
        var Q = E[X];
        return Q.decorator = E[X + "_d"], Q;
      },
      programs: [],
      program: function(X, Q, le, oe, de) {
        var z = this.programs[X], re = this.fn(X);
        return Q || de || oe || le ? z = g(this, X, re, Q, le, oe, de) : z || (z = this.programs[X] = g(this, X, re)), z;
      },
      data: function(X, Q) {
        for (; X && Q--; )
          X = X._parent;
        return X;
      },
      mergeIfNeeded: function(X, Q) {
        var le = X || Q;
        return X && Q && X !== Q && (le = s.extend({}, Q, X)), le;
      },
      // An empty object to use as replacement for null-contexts
      nullContext: Object.seal({}),
      noop: N.VM.noop,
      compilerInfo: E.compiler
    };
    function W(H) {
      var X = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], Q = X.data;
      W._setup(X), !X.partial && E.useData && (Q = C(H, Q));
      var le = void 0, oe = E.useBlockParams ? [] : void 0;
      E.useDepths && (X.depths ? le = H != X.depths[0] ? [H].concat(X.depths) : X.depths : le = [H]);
      function de(z) {
        return "" + E.main(V, z, V.helpers, V.partials, Q, oe, le);
      }
      return de = O(E.main, de, V, X.depths || [], Q, oe), de(H, X);
    }
    return W.isTop = !0, W._setup = function(H) {
      if (H.partial)
        V.protoAccessControl = H.protoAccessControl, V.helpers = H.helpers, V.partials = H.partials, V.decorators = H.decorators, V.hooks = H.hooks;
      else {
        var X = s.extend({}, N.helpers, H.helpers);
        A(X, V), V.helpers = X, E.usePartial && (V.partials = V.mergeIfNeeded(H.partials, N.partials)), (E.usePartial || E.useDecorators) && (V.decorators = s.extend({}, N.decorators, H.decorators)), V.hooks = {}, V.protoAccessControl = p.createProtoAccessControl(H);
        var Q = H.allowCallsToHelperMissing || k;
        m.moveHelperToHooks(V, "helperMissing", Q), m.moveHelperToHooks(V, "blockHelperMissing", Q);
      }
    }, W._child = function(H, X, Q, le) {
      if (E.useBlockParams && !Q)
        throw new u.default("must pass block params");
      if (E.useDepths && !le)
        throw new u.default("must pass parent depths");
      return g(V, H, E[H], X, 0, Q, le);
    }, W;
  }
  function g(E, N, k, L, V, W, H) {
    function X(Q) {
      var le = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1], oe = H;
      return H && Q != H[0] && !(Q === E.nullContext && H[0] === null) && (oe = [Q].concat(H)), k(E, Q, E.helpers, E.partials, le.data || L, W && [le.blockParams].concat(W), oe);
    }
    return X = O(k, X, E, H, L, W), X.program = N, X.depth = H ? H.length : 0, X.blockParams = V || 0, X;
  }
  function y(E, N, k) {
    return E ? !E.call && !k.name && (k.name = E, E = k.partials[E]) : k.name === "@partial-block" ? E = k.data["partial-block"] : E = k.partials[k.name], E;
  }
  function d(E, N, k) {
    var L = k.data && k.data["partial-block"];
    k.partial = !0, k.ids && (k.data.contextPath = k.ids[0] || k.data.contextPath);
    var V = void 0;
    if (k.fn && k.fn !== x && (function() {
      k.data = b.createFrame(k.data);
      var W = k.fn;
      V = k.data["partial-block"] = function(X) {
        var Q = arguments.length <= 1 || arguments[1] === void 0 ? {} : arguments[1];
        return Q.data = b.createFrame(Q.data), Q.data["partial-block"] = L, W(X, Q);
      }, W.partials && (k.partials = s.extend({}, k.partials, W.partials));
    })(), E === void 0 && V && (E = V), E === void 0)
      throw new u.default("The partial " + k.name + " could not be found");
    if (E instanceof Function)
      return E(N, k);
  }
  function x() {
    return "";
  }
  function C(E, N) {
    return (!N || !("root" in N)) && (N = N ? b.createFrame(N) : {}, N.root = E), N;
  }
  function O(E, N, k, L, V, W) {
    if (E.decorator) {
      var H = {};
      N = E.decorator(N, H, k, L && L[0], V, W, L), s.extend(N, H);
    }
    return N;
  }
  function A(E, N) {
    Object.keys(E).forEach(function(k) {
      var L = E[k];
      E[k] = j(L, N);
    });
  }
  function j(E, N) {
    var k = N.lookupProperty;
    return h.wrapHelper(E, function(L) {
      return s.extend({ lookupProperty: k }, L);
    });
  }
  return ta;
}
var So = { exports: {} }, iv;
function by() {
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
function A_() {
  return lv || (lv = 1, (function(r, a) {
    a.__esModule = !0;
    function l(A) {
      return A && A.__esModule ? A : { default: A };
    }
    function s(A) {
      if (A && A.__esModule)
        return A;
      var j = {};
      if (A != null)
        for (var E in A)
          Object.prototype.hasOwnProperty.call(A, E) && (j[E] = A[E]);
      return j.default = A, j;
    }
    var c = dh(), u = s(c), b = x_(), m = l(b), h = wn(), p = l(h), v = Ft(), S = s(v), g = C_(), y = s(g), d = by(), x = l(d);
    function C() {
      var A = new u.HandlebarsEnvironment();
      return S.extend(A, u), A.SafeString = m.default, A.Exception = p.default, A.Utils = S, A.escapeExpression = S.escapeExpression, A.VM = y, A.template = function(j) {
        return y.template(j, A);
      }, A;
    }
    var O = C();
    O.create = C, x.default(O), O.default = O, a.default = O, r.exports = a.default;
  })(ro, ro.exports)), ro.exports;
}
var _o = { exports: {} }, sv;
function Sy() {
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
var ci = {}, xo = { exports: {} }, ov;
function T_() {
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
        performAction: function(m, h, p, v, S, g, y) {
          var d = g.length - 1;
          switch (S) {
            case 1:
              return g[d - 1];
            case 2:
              this.$ = v.prepareProgram(g[d]);
              break;
            case 3:
              this.$ = g[d];
              break;
            case 4:
              this.$ = g[d];
              break;
            case 5:
              this.$ = g[d];
              break;
            case 6:
              this.$ = g[d];
              break;
            case 7:
              this.$ = g[d];
              break;
            case 8:
              this.$ = g[d];
              break;
            case 9:
              this.$ = {
                type: "CommentStatement",
                value: v.stripComment(g[d]),
                strip: v.stripFlags(g[d], g[d]),
                loc: v.locInfo(this._$)
              };
              break;
            case 10:
              this.$ = {
                type: "ContentStatement",
                original: g[d],
                value: g[d],
                loc: v.locInfo(this._$)
              };
              break;
            case 11:
              this.$ = v.prepareRawBlock(g[d - 2], g[d - 1], g[d], this._$);
              break;
            case 12:
              this.$ = { path: g[d - 3], params: g[d - 2], hash: g[d - 1] };
              break;
            case 13:
              this.$ = v.prepareBlock(g[d - 3], g[d - 2], g[d - 1], g[d], !1, this._$);
              break;
            case 14:
              this.$ = v.prepareBlock(g[d - 3], g[d - 2], g[d - 1], g[d], !0, this._$);
              break;
            case 15:
              this.$ = { open: g[d - 5], path: g[d - 4], params: g[d - 3], hash: g[d - 2], blockParams: g[d - 1], strip: v.stripFlags(g[d - 5], g[d]) };
              break;
            case 16:
              this.$ = { path: g[d - 4], params: g[d - 3], hash: g[d - 2], blockParams: g[d - 1], strip: v.stripFlags(g[d - 5], g[d]) };
              break;
            case 17:
              this.$ = { path: g[d - 4], params: g[d - 3], hash: g[d - 2], blockParams: g[d - 1], strip: v.stripFlags(g[d - 5], g[d]) };
              break;
            case 18:
              this.$ = { strip: v.stripFlags(g[d - 1], g[d - 1]), program: g[d] };
              break;
            case 19:
              var x = v.prepareBlock(g[d - 2], g[d - 1], g[d], g[d], !1, this._$), C = v.prepareProgram([x], g[d - 1].loc);
              C.chained = !0, this.$ = { strip: g[d - 2].strip, program: C, chain: !0 };
              break;
            case 20:
              this.$ = g[d];
              break;
            case 21:
              this.$ = { path: g[d - 1], strip: v.stripFlags(g[d - 2], g[d]) };
              break;
            case 22:
              this.$ = v.prepareMustache(g[d - 3], g[d - 2], g[d - 1], g[d - 4], v.stripFlags(g[d - 4], g[d]), this._$);
              break;
            case 23:
              this.$ = v.prepareMustache(g[d - 3], g[d - 2], g[d - 1], g[d - 4], v.stripFlags(g[d - 4], g[d]), this._$);
              break;
            case 24:
              this.$ = {
                type: "PartialStatement",
                name: g[d - 3],
                params: g[d - 2],
                hash: g[d - 1],
                indent: "",
                strip: v.stripFlags(g[d - 4], g[d]),
                loc: v.locInfo(this._$)
              };
              break;
            case 25:
              this.$ = v.preparePartialBlock(g[d - 2], g[d - 1], g[d], this._$);
              break;
            case 26:
              this.$ = { path: g[d - 3], params: g[d - 2], hash: g[d - 1], strip: v.stripFlags(g[d - 4], g[d]) };
              break;
            case 27:
              this.$ = g[d];
              break;
            case 28:
              this.$ = g[d];
              break;
            case 29:
              this.$ = {
                type: "SubExpression",
                path: g[d - 3],
                params: g[d - 2],
                hash: g[d - 1],
                loc: v.locInfo(this._$)
              };
              break;
            case 30:
              this.$ = { type: "Hash", pairs: g[d], loc: v.locInfo(this._$) };
              break;
            case 31:
              this.$ = { type: "HashPair", key: v.id(g[d - 2]), value: g[d], loc: v.locInfo(this._$) };
              break;
            case 32:
              this.$ = v.id(g[d - 1]);
              break;
            case 33:
              this.$ = g[d];
              break;
            case 34:
              this.$ = g[d];
              break;
            case 35:
              this.$ = { type: "StringLiteral", value: g[d], original: g[d], loc: v.locInfo(this._$) };
              break;
            case 36:
              this.$ = { type: "NumberLiteral", value: Number(g[d]), original: Number(g[d]), loc: v.locInfo(this._$) };
              break;
            case 37:
              this.$ = { type: "BooleanLiteral", value: g[d] === "true", original: g[d] === "true", loc: v.locInfo(this._$) };
              break;
            case 38:
              this.$ = { type: "UndefinedLiteral", original: void 0, value: void 0, loc: v.locInfo(this._$) };
              break;
            case 39:
              this.$ = { type: "NullLiteral", original: null, value: null, loc: v.locInfo(this._$) };
              break;
            case 40:
              this.$ = g[d];
              break;
            case 41:
              this.$ = g[d];
              break;
            case 42:
              this.$ = v.preparePath(!0, g[d], this._$);
              break;
            case 43:
              this.$ = v.preparePath(!1, g[d], this._$);
              break;
            case 44:
              g[d - 2].push({ part: v.id(g[d]), original: g[d], separator: g[d - 1] }), this.$ = g[d - 2];
              break;
            case 45:
              this.$ = [{ part: v.id(g[d]), original: g[d] }];
              break;
            case 46:
              this.$ = [];
              break;
            case 47:
              g[d - 1].push(g[d]);
              break;
            case 48:
              this.$ = [];
              break;
            case 49:
              g[d - 1].push(g[d]);
              break;
            case 50:
              this.$ = [];
              break;
            case 51:
              g[d - 1].push(g[d]);
              break;
            case 58:
              this.$ = [];
              break;
            case 59:
              g[d - 1].push(g[d]);
              break;
            case 64:
              this.$ = [];
              break;
            case 65:
              g[d - 1].push(g[d]);
              break;
            case 70:
              this.$ = [];
              break;
            case 71:
              g[d - 1].push(g[d]);
              break;
            case 78:
              this.$ = [];
              break;
            case 79:
              g[d - 1].push(g[d]);
              break;
            case 82:
              this.$ = [];
              break;
            case 83:
              g[d - 1].push(g[d]);
              break;
            case 86:
              this.$ = [];
              break;
            case 87:
              g[d - 1].push(g[d]);
              break;
            case 90:
              this.$ = [];
              break;
            case 91:
              g[d - 1].push(g[d]);
              break;
            case 94:
              this.$ = [];
              break;
            case 95:
              g[d - 1].push(g[d]);
              break;
            case 98:
              this.$ = [g[d]];
              break;
            case 99:
              g[d - 1].push(g[d]);
              break;
            case 100:
              this.$ = [g[d]];
              break;
            case 101:
              g[d - 1].push(g[d]);
              break;
          }
        },
        table: [{ 3: 1, 4: 2, 5: [2, 46], 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 1: [3] }, { 5: [1, 4] }, { 5: [2, 2], 7: 5, 8: 6, 9: 7, 10: 8, 11: 9, 12: 10, 13: 11, 14: [1, 12], 15: [1, 20], 16: 17, 19: [1, 23], 24: 15, 27: 16, 29: [1, 21], 34: [1, 22], 39: [2, 2], 44: [2, 2], 47: [2, 2], 48: [1, 13], 51: [1, 14], 55: [1, 18], 59: 19, 60: [1, 24] }, { 1: [2, 1] }, { 5: [2, 47], 14: [2, 47], 15: [2, 47], 19: [2, 47], 29: [2, 47], 34: [2, 47], 39: [2, 47], 44: [2, 47], 47: [2, 47], 48: [2, 47], 51: [2, 47], 55: [2, 47], 60: [2, 47] }, { 5: [2, 3], 14: [2, 3], 15: [2, 3], 19: [2, 3], 29: [2, 3], 34: [2, 3], 39: [2, 3], 44: [2, 3], 47: [2, 3], 48: [2, 3], 51: [2, 3], 55: [2, 3], 60: [2, 3] }, { 5: [2, 4], 14: [2, 4], 15: [2, 4], 19: [2, 4], 29: [2, 4], 34: [2, 4], 39: [2, 4], 44: [2, 4], 47: [2, 4], 48: [2, 4], 51: [2, 4], 55: [2, 4], 60: [2, 4] }, { 5: [2, 5], 14: [2, 5], 15: [2, 5], 19: [2, 5], 29: [2, 5], 34: [2, 5], 39: [2, 5], 44: [2, 5], 47: [2, 5], 48: [2, 5], 51: [2, 5], 55: [2, 5], 60: [2, 5] }, { 5: [2, 6], 14: [2, 6], 15: [2, 6], 19: [2, 6], 29: [2, 6], 34: [2, 6], 39: [2, 6], 44: [2, 6], 47: [2, 6], 48: [2, 6], 51: [2, 6], 55: [2, 6], 60: [2, 6] }, { 5: [2, 7], 14: [2, 7], 15: [2, 7], 19: [2, 7], 29: [2, 7], 34: [2, 7], 39: [2, 7], 44: [2, 7], 47: [2, 7], 48: [2, 7], 51: [2, 7], 55: [2, 7], 60: [2, 7] }, { 5: [2, 8], 14: [2, 8], 15: [2, 8], 19: [2, 8], 29: [2, 8], 34: [2, 8], 39: [2, 8], 44: [2, 8], 47: [2, 8], 48: [2, 8], 51: [2, 8], 55: [2, 8], 60: [2, 8] }, { 5: [2, 9], 14: [2, 9], 15: [2, 9], 19: [2, 9], 29: [2, 9], 34: [2, 9], 39: [2, 9], 44: [2, 9], 47: [2, 9], 48: [2, 9], 51: [2, 9], 55: [2, 9], 60: [2, 9] }, { 20: 25, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 36, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 37, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 4: 38, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 15: [2, 48], 17: 39, 18: [2, 48] }, { 20: 41, 56: 40, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 44, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 5: [2, 10], 14: [2, 10], 15: [2, 10], 18: [2, 10], 19: [2, 10], 29: [2, 10], 34: [2, 10], 39: [2, 10], 44: [2, 10], 47: [2, 10], 48: [2, 10], 51: [2, 10], 55: [2, 10], 60: [2, 10] }, { 20: 45, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 46, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 47, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 41, 56: 48, 64: 42, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [2, 78], 49: 49, 65: [2, 78], 72: [2, 78], 80: [2, 78], 81: [2, 78], 82: [2, 78], 83: [2, 78], 84: [2, 78], 85: [2, 78] }, { 23: [2, 33], 33: [2, 33], 54: [2, 33], 65: [2, 33], 68: [2, 33], 72: [2, 33], 75: [2, 33], 80: [2, 33], 81: [2, 33], 82: [2, 33], 83: [2, 33], 84: [2, 33], 85: [2, 33] }, { 23: [2, 34], 33: [2, 34], 54: [2, 34], 65: [2, 34], 68: [2, 34], 72: [2, 34], 75: [2, 34], 80: [2, 34], 81: [2, 34], 82: [2, 34], 83: [2, 34], 84: [2, 34], 85: [2, 34] }, { 23: [2, 35], 33: [2, 35], 54: [2, 35], 65: [2, 35], 68: [2, 35], 72: [2, 35], 75: [2, 35], 80: [2, 35], 81: [2, 35], 82: [2, 35], 83: [2, 35], 84: [2, 35], 85: [2, 35] }, { 23: [2, 36], 33: [2, 36], 54: [2, 36], 65: [2, 36], 68: [2, 36], 72: [2, 36], 75: [2, 36], 80: [2, 36], 81: [2, 36], 82: [2, 36], 83: [2, 36], 84: [2, 36], 85: [2, 36] }, { 23: [2, 37], 33: [2, 37], 54: [2, 37], 65: [2, 37], 68: [2, 37], 72: [2, 37], 75: [2, 37], 80: [2, 37], 81: [2, 37], 82: [2, 37], 83: [2, 37], 84: [2, 37], 85: [2, 37] }, { 23: [2, 38], 33: [2, 38], 54: [2, 38], 65: [2, 38], 68: [2, 38], 72: [2, 38], 75: [2, 38], 80: [2, 38], 81: [2, 38], 82: [2, 38], 83: [2, 38], 84: [2, 38], 85: [2, 38] }, { 23: [2, 39], 33: [2, 39], 54: [2, 39], 65: [2, 39], 68: [2, 39], 72: [2, 39], 75: [2, 39], 80: [2, 39], 81: [2, 39], 82: [2, 39], 83: [2, 39], 84: [2, 39], 85: [2, 39] }, { 23: [2, 43], 33: [2, 43], 54: [2, 43], 65: [2, 43], 68: [2, 43], 72: [2, 43], 75: [2, 43], 80: [2, 43], 81: [2, 43], 82: [2, 43], 83: [2, 43], 84: [2, 43], 85: [2, 43], 87: [1, 50] }, { 72: [1, 35], 86: 51 }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 52: 52, 54: [2, 82], 65: [2, 82], 72: [2, 82], 80: [2, 82], 81: [2, 82], 82: [2, 82], 83: [2, 82], 84: [2, 82], 85: [2, 82] }, { 25: 53, 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 54, 47: [2, 54] }, { 28: 59, 43: 60, 44: [1, 58], 47: [2, 56] }, { 13: 62, 15: [1, 20], 18: [1, 61] }, { 33: [2, 86], 57: 63, 65: [2, 86], 72: [2, 86], 80: [2, 86], 81: [2, 86], 82: [2, 86], 83: [2, 86], 84: [2, 86], 85: [2, 86] }, { 33: [2, 40], 65: [2, 40], 72: [2, 40], 80: [2, 40], 81: [2, 40], 82: [2, 40], 83: [2, 40], 84: [2, 40], 85: [2, 40] }, { 33: [2, 41], 65: [2, 41], 72: [2, 41], 80: [2, 41], 81: [2, 41], 82: [2, 41], 83: [2, 41], 84: [2, 41], 85: [2, 41] }, { 20: 64, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 65, 47: [1, 66] }, { 30: 67, 33: [2, 58], 65: [2, 58], 72: [2, 58], 75: [2, 58], 80: [2, 58], 81: [2, 58], 82: [2, 58], 83: [2, 58], 84: [2, 58], 85: [2, 58] }, { 33: [2, 64], 35: 68, 65: [2, 64], 72: [2, 64], 75: [2, 64], 80: [2, 64], 81: [2, 64], 82: [2, 64], 83: [2, 64], 84: [2, 64], 85: [2, 64] }, { 21: 69, 23: [2, 50], 65: [2, 50], 72: [2, 50], 80: [2, 50], 81: [2, 50], 82: [2, 50], 83: [2, 50], 84: [2, 50], 85: [2, 50] }, { 33: [2, 90], 61: 70, 65: [2, 90], 72: [2, 90], 80: [2, 90], 81: [2, 90], 82: [2, 90], 83: [2, 90], 84: [2, 90], 85: [2, 90] }, { 20: 74, 33: [2, 80], 50: 71, 63: 72, 64: 75, 65: [1, 43], 69: 73, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 72: [1, 79] }, { 23: [2, 42], 33: [2, 42], 54: [2, 42], 65: [2, 42], 68: [2, 42], 72: [2, 42], 75: [2, 42], 80: [2, 42], 81: [2, 42], 82: [2, 42], 83: [2, 42], 84: [2, 42], 85: [2, 42], 87: [1, 50] }, { 20: 74, 53: 80, 54: [2, 84], 63: 81, 64: 75, 65: [1, 43], 69: 82, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 26: 83, 47: [1, 66] }, { 47: [2, 55] }, { 4: 84, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 39: [2, 46], 44: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 47: [2, 20] }, { 20: 85, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 4: 86, 6: 3, 14: [2, 46], 15: [2, 46], 19: [2, 46], 29: [2, 46], 34: [2, 46], 47: [2, 46], 48: [2, 46], 51: [2, 46], 55: [2, 46], 60: [2, 46] }, { 26: 87, 47: [1, 66] }, { 47: [2, 57] }, { 5: [2, 11], 14: [2, 11], 15: [2, 11], 19: [2, 11], 29: [2, 11], 34: [2, 11], 39: [2, 11], 44: [2, 11], 47: [2, 11], 48: [2, 11], 51: [2, 11], 55: [2, 11], 60: [2, 11] }, { 15: [2, 49], 18: [2, 49] }, { 20: 74, 33: [2, 88], 58: 88, 63: 89, 64: 75, 65: [1, 43], 69: 90, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 65: [2, 94], 66: 91, 68: [2, 94], 72: [2, 94], 80: [2, 94], 81: [2, 94], 82: [2, 94], 83: [2, 94], 84: [2, 94], 85: [2, 94] }, { 5: [2, 25], 14: [2, 25], 15: [2, 25], 19: [2, 25], 29: [2, 25], 34: [2, 25], 39: [2, 25], 44: [2, 25], 47: [2, 25], 48: [2, 25], 51: [2, 25], 55: [2, 25], 60: [2, 25] }, { 20: 92, 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 31: 93, 33: [2, 60], 63: 94, 64: 75, 65: [1, 43], 69: 95, 70: 76, 71: 77, 72: [1, 78], 75: [2, 60], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 66], 36: 96, 63: 97, 64: 75, 65: [1, 43], 69: 98, 70: 76, 71: 77, 72: [1, 78], 75: [2, 66], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 22: 99, 23: [2, 52], 63: 100, 64: 75, 65: [1, 43], 69: 101, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 20: 74, 33: [2, 92], 62: 102, 63: 103, 64: 75, 65: [1, 43], 69: 104, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 105] }, { 33: [2, 79], 65: [2, 79], 72: [2, 79], 80: [2, 79], 81: [2, 79], 82: [2, 79], 83: [2, 79], 84: [2, 79], 85: [2, 79] }, { 33: [2, 81] }, { 23: [2, 27], 33: [2, 27], 54: [2, 27], 65: [2, 27], 68: [2, 27], 72: [2, 27], 75: [2, 27], 80: [2, 27], 81: [2, 27], 82: [2, 27], 83: [2, 27], 84: [2, 27], 85: [2, 27] }, { 23: [2, 28], 33: [2, 28], 54: [2, 28], 65: [2, 28], 68: [2, 28], 72: [2, 28], 75: [2, 28], 80: [2, 28], 81: [2, 28], 82: [2, 28], 83: [2, 28], 84: [2, 28], 85: [2, 28] }, { 23: [2, 30], 33: [2, 30], 54: [2, 30], 68: [2, 30], 71: 106, 72: [1, 107], 75: [2, 30] }, { 23: [2, 98], 33: [2, 98], 54: [2, 98], 68: [2, 98], 72: [2, 98], 75: [2, 98] }, { 23: [2, 45], 33: [2, 45], 54: [2, 45], 65: [2, 45], 68: [2, 45], 72: [2, 45], 73: [1, 108], 75: [2, 45], 80: [2, 45], 81: [2, 45], 82: [2, 45], 83: [2, 45], 84: [2, 45], 85: [2, 45], 87: [2, 45] }, { 23: [2, 44], 33: [2, 44], 54: [2, 44], 65: [2, 44], 68: [2, 44], 72: [2, 44], 75: [2, 44], 80: [2, 44], 81: [2, 44], 82: [2, 44], 83: [2, 44], 84: [2, 44], 85: [2, 44], 87: [2, 44] }, { 54: [1, 109] }, { 54: [2, 83], 65: [2, 83], 72: [2, 83], 80: [2, 83], 81: [2, 83], 82: [2, 83], 83: [2, 83], 84: [2, 83], 85: [2, 83] }, { 54: [2, 85] }, { 5: [2, 13], 14: [2, 13], 15: [2, 13], 19: [2, 13], 29: [2, 13], 34: [2, 13], 39: [2, 13], 44: [2, 13], 47: [2, 13], 48: [2, 13], 51: [2, 13], 55: [2, 13], 60: [2, 13] }, { 38: 55, 39: [1, 57], 43: 56, 44: [1, 58], 45: 111, 46: 110, 47: [2, 76] }, { 33: [2, 70], 40: 112, 65: [2, 70], 72: [2, 70], 75: [2, 70], 80: [2, 70], 81: [2, 70], 82: [2, 70], 83: [2, 70], 84: [2, 70], 85: [2, 70] }, { 47: [2, 18] }, { 5: [2, 14], 14: [2, 14], 15: [2, 14], 19: [2, 14], 29: [2, 14], 34: [2, 14], 39: [2, 14], 44: [2, 14], 47: [2, 14], 48: [2, 14], 51: [2, 14], 55: [2, 14], 60: [2, 14] }, { 33: [1, 113] }, { 33: [2, 87], 65: [2, 87], 72: [2, 87], 80: [2, 87], 81: [2, 87], 82: [2, 87], 83: [2, 87], 84: [2, 87], 85: [2, 87] }, { 33: [2, 89] }, { 20: 74, 63: 115, 64: 75, 65: [1, 43], 67: 114, 68: [2, 96], 69: 116, 70: 76, 71: 77, 72: [1, 78], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 33: [1, 117] }, { 32: 118, 33: [2, 62], 74: 119, 75: [1, 120] }, { 33: [2, 59], 65: [2, 59], 72: [2, 59], 75: [2, 59], 80: [2, 59], 81: [2, 59], 82: [2, 59], 83: [2, 59], 84: [2, 59], 85: [2, 59] }, { 33: [2, 61], 75: [2, 61] }, { 33: [2, 68], 37: 121, 74: 122, 75: [1, 120] }, { 33: [2, 65], 65: [2, 65], 72: [2, 65], 75: [2, 65], 80: [2, 65], 81: [2, 65], 82: [2, 65], 83: [2, 65], 84: [2, 65], 85: [2, 65] }, { 33: [2, 67], 75: [2, 67] }, { 23: [1, 123] }, { 23: [2, 51], 65: [2, 51], 72: [2, 51], 80: [2, 51], 81: [2, 51], 82: [2, 51], 83: [2, 51], 84: [2, 51], 85: [2, 51] }, { 23: [2, 53] }, { 33: [1, 124] }, { 33: [2, 91], 65: [2, 91], 72: [2, 91], 80: [2, 91], 81: [2, 91], 82: [2, 91], 83: [2, 91], 84: [2, 91], 85: [2, 91] }, { 33: [2, 93] }, { 5: [2, 22], 14: [2, 22], 15: [2, 22], 19: [2, 22], 29: [2, 22], 34: [2, 22], 39: [2, 22], 44: [2, 22], 47: [2, 22], 48: [2, 22], 51: [2, 22], 55: [2, 22], 60: [2, 22] }, { 23: [2, 99], 33: [2, 99], 54: [2, 99], 68: [2, 99], 72: [2, 99], 75: [2, 99] }, { 73: [1, 108] }, { 20: 74, 63: 125, 64: 75, 65: [1, 43], 72: [1, 35], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 23], 14: [2, 23], 15: [2, 23], 19: [2, 23], 29: [2, 23], 34: [2, 23], 39: [2, 23], 44: [2, 23], 47: [2, 23], 48: [2, 23], 51: [2, 23], 55: [2, 23], 60: [2, 23] }, { 47: [2, 19] }, { 47: [2, 77] }, { 20: 74, 33: [2, 72], 41: 126, 63: 127, 64: 75, 65: [1, 43], 69: 128, 70: 76, 71: 77, 72: [1, 78], 75: [2, 72], 78: 26, 79: 27, 80: [1, 28], 81: [1, 29], 82: [1, 30], 83: [1, 31], 84: [1, 32], 85: [1, 34], 86: 33 }, { 5: [2, 24], 14: [2, 24], 15: [2, 24], 19: [2, 24], 29: [2, 24], 34: [2, 24], 39: [2, 24], 44: [2, 24], 47: [2, 24], 48: [2, 24], 51: [2, 24], 55: [2, 24], 60: [2, 24] }, { 68: [1, 129] }, { 65: [2, 95], 68: [2, 95], 72: [2, 95], 80: [2, 95], 81: [2, 95], 82: [2, 95], 83: [2, 95], 84: [2, 95], 85: [2, 95] }, { 68: [2, 97] }, { 5: [2, 21], 14: [2, 21], 15: [2, 21], 19: [2, 21], 29: [2, 21], 34: [2, 21], 39: [2, 21], 44: [2, 21], 47: [2, 21], 48: [2, 21], 51: [2, 21], 55: [2, 21], 60: [2, 21] }, { 33: [1, 130] }, { 33: [2, 63] }, { 72: [1, 132], 76: 131 }, { 33: [1, 133] }, { 33: [2, 69] }, { 15: [2, 12], 18: [2, 12] }, { 14: [2, 26], 15: [2, 26], 19: [2, 26], 29: [2, 26], 34: [2, 26], 47: [2, 26], 48: [2, 26], 51: [2, 26], 55: [2, 26], 60: [2, 26] }, { 23: [2, 31], 33: [2, 31], 54: [2, 31], 68: [2, 31], 72: [2, 31], 75: [2, 31] }, { 33: [2, 74], 42: 134, 74: 135, 75: [1, 120] }, { 33: [2, 71], 65: [2, 71], 72: [2, 71], 75: [2, 71], 80: [2, 71], 81: [2, 71], 82: [2, 71], 83: [2, 71], 84: [2, 71], 85: [2, 71] }, { 33: [2, 73], 75: [2, 73] }, { 23: [2, 29], 33: [2, 29], 54: [2, 29], 65: [2, 29], 68: [2, 29], 72: [2, 29], 75: [2, 29], 80: [2, 29], 81: [2, 29], 82: [2, 29], 83: [2, 29], 84: [2, 29], 85: [2, 29] }, { 14: [2, 15], 15: [2, 15], 19: [2, 15], 29: [2, 15], 34: [2, 15], 39: [2, 15], 44: [2, 15], 47: [2, 15], 48: [2, 15], 51: [2, 15], 55: [2, 15], 60: [2, 15] }, { 72: [1, 137], 77: [1, 136] }, { 72: [2, 100], 77: [2, 100] }, { 14: [2, 16], 15: [2, 16], 19: [2, 16], 29: [2, 16], 34: [2, 16], 44: [2, 16], 47: [2, 16], 48: [2, 16], 51: [2, 16], 55: [2, 16], 60: [2, 16] }, { 33: [1, 138] }, { 33: [2, 75] }, { 33: [2, 32] }, { 72: [2, 101], 77: [2, 101] }, { 14: [2, 17], 15: [2, 17], 19: [2, 17], 29: [2, 17], 34: [2, 17], 39: [2, 17], 44: [2, 17], 47: [2, 17], 48: [2, 17], 51: [2, 17], 55: [2, 17], 60: [2, 17] }],
        defaultActions: { 4: [2, 1], 54: [2, 55], 56: [2, 20], 60: [2, 57], 73: [2, 81], 82: [2, 85], 86: [2, 18], 90: [2, 89], 101: [2, 53], 104: [2, 93], 110: [2, 19], 111: [2, 77], 116: [2, 97], 119: [2, 63], 122: [2, 69], 135: [2, 75], 136: [2, 32] },
        parseError: function(m, h) {
          throw new Error(m);
        },
        parse: function(m) {
          var h = this, p = [0], v = [null], S = [], g = this.table, y = "", d = 0, x = 0;
          this.lexer.setInput(m), this.lexer.yy = this.yy, this.yy.lexer = this.lexer, this.yy.parser = this, typeof this.lexer.yylloc > "u" && (this.lexer.yylloc = {});
          var C = this.lexer.yylloc;
          S.push(C);
          var O = this.lexer.options && this.lexer.options.ranges;
          typeof this.yy.parseError == "function" && (this.parseError = this.yy.parseError);
          function A() {
            var le;
            return le = h.lexer.lex() || 1, typeof le != "number" && (le = h.symbols_[le] || le), le;
          }
          for (var j, E, N, k, L = {}, V, W, H, X; ; ) {
            if (E = p[p.length - 1], this.defaultActions[E] ? N = this.defaultActions[E] : ((j === null || typeof j > "u") && (j = A()), N = g[E] && g[E][j]), typeof N > "u" || !N.length || !N[0]) {
              var Q = "";
              {
                X = [];
                for (V in g[E]) this.terminals_[V] && V > 2 && X.push("'" + this.terminals_[V] + "'");
                this.lexer.showPosition ? Q = "Parse error on line " + (d + 1) + `:
` + this.lexer.showPosition() + `
Expecting ` + X.join(", ") + ", got '" + (this.terminals_[j] || j) + "'" : Q = "Parse error on line " + (d + 1) + ": Unexpected " + (j == 1 ? "end of input" : "'" + (this.terminals_[j] || j) + "'"), this.parseError(Q, { text: this.lexer.match, token: this.terminals_[j] || j, line: this.lexer.yylineno, loc: C, expected: X });
              }
            }
            if (N[0] instanceof Array && N.length > 1)
              throw new Error("Parse Error: multiple actions possible at state: " + E + ", token: " + j);
            switch (N[0]) {
              case 1:
                p.push(j), v.push(this.lexer.yytext), S.push(this.lexer.yylloc), p.push(N[1]), j = null, x = this.lexer.yyleng, y = this.lexer.yytext, d = this.lexer.yylineno, C = this.lexer.yylloc;
                break;
              case 2:
                if (W = this.productions_[N[1]][1], L.$ = v[v.length - W], L._$ = { first_line: S[S.length - (W || 1)].first_line, last_line: S[S.length - 1].last_line, first_column: S[S.length - (W || 1)].first_column, last_column: S[S.length - 1].last_column }, O && (L._$.range = [S[S.length - (W || 1)].range[0], S[S.length - 1].range[1]]), k = this.performAction.call(L, y, x, d, this.yy, N[1], v, S), typeof k < "u")
                  return k;
                W && (p = p.slice(0, -1 * W * 2), v = v.slice(0, -1 * W), S = S.slice(0, -1 * W)), p.push(this.productions_[N[1]][0]), v.push(L.$), S.push(L._$), H = g[p[p.length - 2]][p[p.length - 1]], p.push(H);
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
          parseError: function(h, p) {
            if (this.yy.parser)
              this.yy.parser.parseError(h, p);
            else
              throw new Error(h);
          },
          setInput: function(h) {
            return this._input = h, this._more = this._less = this.done = !1, this.yylineno = this.yyleng = 0, this.yytext = this.matched = this.match = "", this.conditionStack = ["INITIAL"], this.yylloc = { first_line: 1, first_column: 0, last_line: 1, last_column: 0 }, this.options.ranges && (this.yylloc.range = [0, 0]), this.offset = 0, this;
          },
          input: function() {
            var h = this._input[0];
            this.yytext += h, this.yyleng++, this.offset++, this.match += h, this.matched += h;
            var p = h.match(/(?:\r\n?|\n).*/g);
            return p ? (this.yylineno++, this.yylloc.last_line++) : this.yylloc.last_column++, this.options.ranges && this.yylloc.range[1]++, this._input = this._input.slice(1), h;
          },
          unput: function(h) {
            var p = h.length, v = h.split(/(?:\r\n?|\n)/g);
            this._input = h + this._input, this.yytext = this.yytext.substr(0, this.yytext.length - p - 1), this.offset -= p;
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
          less: function(h) {
            this.unput(this.match.slice(h));
          },
          pastInput: function() {
            var h = this.matched.substr(0, this.matched.length - this.match.length);
            return (h.length > 20 ? "..." : "") + h.substr(-20).replace(/\n/g, "");
          },
          upcomingInput: function() {
            var h = this.match;
            return h.length < 20 && (h += this._input.substr(0, 20 - h.length)), (h.substr(0, 20) + (h.length > 20 ? "..." : "")).replace(/\n/g, "");
          },
          showPosition: function() {
            var h = this.pastInput(), p = new Array(h.length + 1).join("-");
            return h + this.upcomingInput() + `
` + p + "^";
          },
          next: function() {
            if (this.done)
              return this.EOF;
            this._input || (this.done = !0);
            var h, p, v, S, g;
            this._more || (this.yytext = "", this.match = "");
            for (var y = this._currentRules(), d = 0; d < y.length && (v = this._input.match(this.rules[y[d]]), !(v && (!p || v[0].length > p[0].length) && (p = v, S = d, !this.options.flex))); d++)
              ;
            return p ? (g = p[0].match(/(?:\r\n?|\n).*/g), g && (this.yylineno += g.length), this.yylloc = {
              first_line: this.yylloc.last_line,
              last_line: this.yylineno + 1,
              first_column: this.yylloc.last_column,
              last_column: g ? g[g.length - 1].length - g[g.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + p[0].length
            }, this.yytext += p[0], this.match += p[0], this.matches = p, this.yyleng = this.yytext.length, this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]), this._more = !1, this._input = this._input.slice(p[0].length), this.matched += p[0], h = this.performAction.call(this, this.yy, this, y[S], this.conditionStack[this.conditionStack.length - 1]), this.done && this._input && (this.done = !1), h || void 0) : this._input === "" ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + `. Unrecognized text.
` + this.showPosition(), { text: "", token: null, line: this.yylineno });
          },
          lex: function() {
            var h = this.next();
            return typeof h < "u" ? h : this.lex();
          },
          begin: function(h) {
            this.conditionStack.push(h);
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
          pushState: function(h) {
            this.begin(h);
          }
        };
        return b.options = {}, b.performAction = function(h, p, v, S) {
          function g(y, d) {
            return p.yytext = p.yytext.substring(y, p.yyleng - d + y);
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
function _y() {
  return uv || (uv = 1, (function(r, a) {
    a.__esModule = !0;
    function l(p) {
      return p && p.__esModule ? p : { default: p };
    }
    var s = wn(), c = l(s);
    function u() {
      this.parents = [];
    }
    u.prototype = {
      constructor: u,
      mutating: !1,
      // Visits a given value. If mutating, will replace the value if necessary.
      acceptKey: function(v, S) {
        var g = this.accept(v[S]);
        if (this.mutating) {
          if (g && !u.prototype[g.type])
            throw new c.default('Unexpected node type "' + g.type + '" found when accepting ' + S + " on " + v.type);
          v[S] = g;
        }
      },
      // Performs an accept operation with added sanity check to ensure
      // required keys are not removed.
      acceptRequired: function(v, S) {
        if (this.acceptKey(v, S), !v[S])
          throw new c.default(v.type + " requires " + S);
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
            throw new c.default("Unknown type: " + v.type, v);
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
      PartialStatement: h,
      PartialBlockStatement: function(v) {
        h.call(this, v), this.acceptKey(v, "program");
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
    function h(p) {
      this.acceptRequired(p, "name"), this.acceptArray(p.params), this.acceptKey(p, "hash");
    }
    a.default = u, r.exports = a.default;
  })(Co, Co.exports)), Co.exports;
}
var cv;
function N_() {
  return cv || (cv = 1, (function(r, a) {
    a.__esModule = !0;
    function l(v) {
      return v && v.__esModule ? v : { default: v };
    }
    var s = _y(), c = l(s);
    function u() {
      var v = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0];
      this.options = v;
    }
    u.prototype = new c.default(), u.prototype.Program = function(v) {
      var S = !this.options.ignoreStandalone, g = !this.isRootSeen;
      this.isRootSeen = !0;
      for (var y = v.body, d = 0, x = y.length; d < x; d++) {
        var C = y[d], O = this.accept(C);
        if (O) {
          var A = b(y, d, g), j = m(y, d, g), E = O.openStandalone && A, N = O.closeStandalone && j, k = O.inlineStandalone && A && j;
          O.close && h(y, d, !0), O.open && p(y, d, !0), S && k && (h(y, d), p(y, d) && C.type === "PartialStatement" && (C.indent = /([ \t]+$)/.exec(y[d - 1].original)[1])), S && E && (h((C.program || C.inverse).body), p(y, d)), S && N && (h(y, d), p((C.inverse || C.program).body));
        }
      }
      return v;
    }, u.prototype.BlockStatement = u.prototype.DecoratorBlock = u.prototype.PartialBlockStatement = function(v) {
      this.accept(v.program), this.accept(v.inverse);
      var S = v.program || v.inverse, g = v.program && v.inverse, y = g, d = g;
      if (g && g.chained)
        for (y = g.body[0].program; d.chained; )
          d = d.body[d.body.length - 1].program;
      var x = {
        open: v.openStrip.open,
        close: v.closeStrip.close,
        // Determine the standalone candiacy. Basically flag our content as being possibly standalone
        // so our parent can determine if we actually are standalone
        openStandalone: m(S.body),
        closeStandalone: b((y || S).body)
      };
      if (v.openStrip.close && h(S.body, null, !0), g) {
        var C = v.inverseStrip;
        C.open && p(S.body, null, !0), C.close && h(y.body, null, !0), v.closeStrip.open && p(d.body, null, !0), !this.options.ignoreStandalone && b(S.body) && m(y.body) && (p(S.body), h(y.body));
      } else v.closeStrip.open && p(S.body, null, !0);
      return x;
    }, u.prototype.Decorator = u.prototype.MustacheStatement = function(v) {
      return v.strip;
    }, u.prototype.PartialStatement = u.prototype.CommentStatement = function(v) {
      var S = v.strip || {};
      return {
        inlineStandalone: !0,
        open: S.open,
        close: S.close
      };
    };
    function b(v, S, g) {
      S === void 0 && (S = v.length);
      var y = v[S - 1], d = v[S - 2];
      if (!y)
        return g;
      if (y.type === "ContentStatement")
        return (d || !g ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(y.original);
    }
    function m(v, S, g) {
      S === void 0 && (S = -1);
      var y = v[S + 1], d = v[S + 2];
      if (!y)
        return g;
      if (y.type === "ContentStatement")
        return (d || !g ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(y.original);
    }
    function h(v, S, g) {
      var y = v[S == null ? 0 : S + 1];
      if (!(!y || y.type !== "ContentStatement" || !g && y.rightStripped)) {
        var d = y.value;
        y.value = y.value.replace(g ? /^\s+/ : /^[ \t]*\r?\n?/, ""), y.rightStripped = y.value !== d;
      }
    }
    function p(v, S, g) {
      var y = v[S == null ? v.length - 1 : S - 1];
      if (!(!y || y.type !== "ContentStatement" || !g && y.leftStripped)) {
        var d = y.value;
        return y.value = y.value.replace(g ? /\s+$/ : /[ \t]+$/, ""), y.leftStripped = y.value !== d, y.leftStripped;
      }
    }
    a.default = u, r.exports = a.default;
  })(Eo, Eo.exports)), Eo.exports;
}
var nn = {}, fv;
function w_() {
  if (fv) return nn;
  fv = 1, nn.__esModule = !0, nn.SourceLocation = c, nn.id = u, nn.stripFlags = b, nn.stripComment = m, nn.preparePath = h, nn.prepareMustache = p, nn.prepareRawBlock = v, nn.prepareBlock = S, nn.prepareProgram = g, nn.preparePartialBlock = y;
  function r(d) {
    return d && d.__esModule ? d : { default: d };
  }
  var a = wn(), l = r(a);
  function s(d, x) {
    if (x = x.path ? x.path.original : x, d.path.original !== x) {
      var C = { loc: d.path.loc };
      throw new l.default(d.path.original + " doesn't match " + x, C);
    }
  }
  function c(d, x) {
    this.source = d, this.start = {
      line: x.first_line,
      column: x.first_column
    }, this.end = {
      line: x.last_line,
      column: x.last_column
    };
  }
  function u(d) {
    return /^\[.*\]$/.test(d) ? d.substring(1, d.length - 1) : d;
  }
  function b(d, x) {
    return {
      open: d.charAt(2) === "~",
      close: x.charAt(x.length - 3) === "~"
    };
  }
  function m(d) {
    return d.replace(/^\{\{~?!-?-?/, "").replace(/-?-?~?\}\}$/, "");
  }
  function h(d, x, C) {
    C = this.locInfo(C);
    for (var O = d ? "@" : "", A = [], j = 0, E = 0, N = x.length; E < N; E++) {
      var k = x[E].part, L = x[E].original !== k;
      if (O += (x[E].separator || "") + k, !L && (k === ".." || k === "." || k === "this")) {
        if (A.length > 0)
          throw new l.default("Invalid path: " + O, { loc: C });
        k === ".." && j++;
      } else
        A.push(k);
    }
    return {
      type: "PathExpression",
      data: d,
      depth: j,
      parts: A,
      original: O,
      loc: C
    };
  }
  function p(d, x, C, O, A, j) {
    var E = O.charAt(3) || O.charAt(2), N = E !== "{" && E !== "&", k = /\*/.test(O);
    return {
      type: k ? "Decorator" : "MustacheStatement",
      path: d,
      params: x,
      hash: C,
      escaped: N,
      strip: A,
      loc: this.locInfo(j)
    };
  }
  function v(d, x, C, O) {
    s(d, C), O = this.locInfo(O);
    var A = {
      type: "Program",
      body: x,
      strip: {},
      loc: O
    };
    return {
      type: "BlockStatement",
      path: d.path,
      params: d.params,
      hash: d.hash,
      program: A,
      openStrip: {},
      inverseStrip: {},
      closeStrip: {},
      loc: O
    };
  }
  function S(d, x, C, O, A, j) {
    O && O.path && s(d, O);
    var E = /\*/.test(d.open);
    x.blockParams = d.blockParams;
    var N = void 0, k = void 0;
    if (C) {
      if (E)
        throw new l.default("Unexpected inverse block on decorator", C);
      C.chain && (C.program.body[0].closeStrip = O.strip), k = C.strip, N = C.program;
    }
    return A && (A = N, N = x, x = A), {
      type: E ? "DecoratorBlock" : "BlockStatement",
      path: d.path,
      params: d.params,
      hash: d.hash,
      program: x,
      inverse: N,
      openStrip: d.strip,
      inverseStrip: k,
      closeStrip: O && O.strip,
      loc: this.locInfo(j)
    };
  }
  function g(d, x) {
    if (!x && d.length) {
      var C = d[0].loc, O = d[d.length - 1].loc;
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
      body: d,
      strip: {},
      loc: x
    };
  }
  function y(d, x, C, O) {
    return s(d, C), {
      type: "PartialBlockStatement",
      name: d.path,
      params: d.params,
      hash: d.hash,
      program: x,
      openStrip: d.strip,
      closeStrip: C && C.strip,
      loc: this.locInfo(O)
    };
  }
  return nn;
}
var hv;
function O_() {
  if (hv) return ci;
  hv = 1, ci.__esModule = !0, ci.parseWithoutProcessing = v, ci.parse = S;
  function r(g) {
    if (g && g.__esModule)
      return g;
    var y = {};
    if (g != null)
      for (var d in g)
        Object.prototype.hasOwnProperty.call(g, d) && (y[d] = g[d]);
    return y.default = g, y;
  }
  function a(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var l = T_(), s = a(l), c = N_(), u = a(c), b = w_(), m = r(b), h = Ft();
  ci.parser = s.default;
  var p = {};
  h.extend(p, m);
  function v(g, y) {
    if (g.type === "Program")
      return g;
    s.default.yy = p, p.locInfo = function(x) {
      return new p.SourceLocation(y && y.srcName, x);
    };
    var d = s.default.parse(g);
    return d;
  }
  function S(g, y) {
    var d = v(g, y), x = new u.default(y);
    return x.accept(d);
  }
  return ci;
}
var fi = {}, dv;
function D_() {
  if (dv) return fi;
  dv = 1, fi.__esModule = !0, fi.Compiler = m, fi.precompile = h, fi.compile = p;
  function r(g) {
    return g && g.__esModule ? g : { default: g };
  }
  var a = wn(), l = r(a), s = Ft(), c = Sy(), u = r(c), b = [].slice;
  function m() {
  }
  m.prototype = {
    compiler: m,
    equals: function(y) {
      var d = this.opcodes.length;
      if (y.opcodes.length !== d)
        return !1;
      for (var x = 0; x < d; x++) {
        var C = this.opcodes[x], O = y.opcodes[x];
        if (C.opcode !== O.opcode || !v(C.args, O.args))
          return !1;
      }
      d = this.children.length;
      for (var x = 0; x < d; x++)
        if (!this.children[x].equals(y.children[x]))
          return !1;
      return !0;
    },
    guid: 0,
    compile: function(y, d) {
      return this.sourceNode = [], this.opcodes = [], this.children = [], this.options = d, this.stringParams = d.stringParams, this.trackIds = d.trackIds, d.blockParams = d.blockParams || [], d.knownHelpers = s.extend(/* @__PURE__ */ Object.create(null), {
        helperMissing: !0,
        blockHelperMissing: !0,
        each: !0,
        if: !0,
        unless: !0,
        with: !0,
        log: !0,
        lookup: !0
      }, d.knownHelpers), this.accept(y);
    },
    compileProgram: function(y) {
      var d = new this.compiler(), x = d.compile(y, this.options), C = this.guid++;
      return this.usePartial = this.usePartial || x.usePartial, this.children[C] = x, this.useDepths = this.useDepths || x.useDepths, C;
    },
    accept: function(y) {
      if (!this[y.type])
        throw new l.default("Unknown type: " + y.type, y);
      this.sourceNode.unshift(y);
      var d = this[y.type](y);
      return this.sourceNode.shift(), d;
    },
    Program: function(y) {
      this.options.blockParams.unshift(y.blockParams);
      for (var d = y.body, x = d.length, C = 0; C < x; C++)
        this.accept(d[C]);
      return this.options.blockParams.shift(), this.isSimple = x === 1, this.blockParams = y.blockParams ? y.blockParams.length : 0, this;
    },
    BlockStatement: function(y) {
      S(y);
      var d = y.program, x = y.inverse;
      d = d && this.compileProgram(d), x = x && this.compileProgram(x);
      var C = this.classifySexpr(y);
      C === "helper" ? this.helperSexpr(y, d, x) : C === "simple" ? (this.simpleSexpr(y), this.opcode("pushProgram", d), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("blockValue", y.path.original)) : (this.ambiguousSexpr(y, d, x), this.opcode("pushProgram", d), this.opcode("pushProgram", x), this.opcode("emptyHash"), this.opcode("ambiguousBlockValue")), this.opcode("append");
    },
    DecoratorBlock: function(y) {
      var d = y.program && this.compileProgram(y.program), x = this.setupFullMustacheParams(y, d, void 0), C = y.path;
      this.useDecorators = !0, this.opcode("registerDecorator", x.length, C.original);
    },
    PartialStatement: function(y) {
      this.usePartial = !0;
      var d = y.program;
      d && (d = this.compileProgram(y.program));
      var x = y.params;
      if (x.length > 1)
        throw new l.default("Unsupported number of partial arguments: " + x.length, y);
      x.length || (this.options.explicitPartialContext ? this.opcode("pushLiteral", "undefined") : x.push({ type: "PathExpression", parts: [], depth: 0 }));
      var C = y.name.original, O = y.name.type === "SubExpression";
      O && this.accept(y.name), this.setupFullMustacheParams(y, d, void 0, !0);
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
      var d = this.classifySexpr(y);
      d === "simple" ? this.simpleSexpr(y) : d === "helper" ? this.helperSexpr(y) : this.ambiguousSexpr(y);
    },
    ambiguousSexpr: function(y, d, x) {
      var C = y.path, O = C.parts[0], A = d != null || x != null;
      this.opcode("getContext", C.depth), this.opcode("pushProgram", d), this.opcode("pushProgram", x), C.strict = !0, this.accept(C), this.opcode("invokeAmbiguous", O, A);
    },
    simpleSexpr: function(y) {
      var d = y.path;
      d.strict = !0, this.accept(d), this.opcode("resolvePossibleLambda");
    },
    helperSexpr: function(y, d, x) {
      var C = this.setupFullMustacheParams(y, d, x), O = y.path, A = O.parts[0];
      if (this.options.knownHelpers[A])
        this.opcode("invokeKnownHelper", C.length, A);
      else {
        if (this.options.knownHelpersOnly)
          throw new l.default("You specified knownHelpersOnly, but used the unknown helper " + A, y);
        O.strict = !0, O.falsy = !0, this.accept(O), this.opcode("invokeHelper", C.length, O.original, u.default.helpers.simpleId(O));
      }
    },
    PathExpression: function(y) {
      this.addDepth(y.depth), this.opcode("getContext", y.depth);
      var d = y.parts[0], x = u.default.helpers.scopedId(y), C = !y.depth && !x && this.blockParamIndex(d);
      C ? this.opcode("lookupBlockParam", C, y.parts) : d ? y.data ? (this.options.data = !0, this.opcode("lookupData", y.depth, y.parts, y.strict)) : this.opcode("lookupOnContext", y.parts, y.falsy, y.strict, x) : this.opcode("pushContext");
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
      var d = y.pairs, x = 0, C = d.length;
      for (this.opcode("pushHash"); x < C; x++)
        this.pushParam(d[x].value);
      for (; x--; )
        this.opcode("assignToHash", d[x].key);
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
      var d = u.default.helpers.simpleId(y.path), x = d && !!this.blockParamIndex(y.path.parts[0]), C = !x && u.default.helpers.helperExpression(y), O = !x && (C || d);
      if (O && !C) {
        var A = y.path.parts[0], j = this.options;
        j.knownHelpers[A] ? C = !0 : j.knownHelpersOnly && (O = !1);
      }
      return C ? "helper" : O ? "ambiguous" : "simple";
    },
    pushParams: function(y) {
      for (var d = 0, x = y.length; d < x; d++)
        this.pushParam(y[d]);
    },
    pushParam: function(y) {
      var d = y.value != null ? y.value : y.original || "";
      if (this.stringParams)
        d.replace && (d = d.replace(/^(\.?\.\/)*/g, "").replace(/\//g, ".")), y.depth && this.addDepth(y.depth), this.opcode("getContext", y.depth || 0), this.opcode("pushStringParam", d, y.type), y.type === "SubExpression" && this.accept(y);
      else {
        if (this.trackIds) {
          var x = void 0;
          if (y.parts && !u.default.helpers.scopedId(y) && !y.depth && (x = this.blockParamIndex(y.parts[0])), x) {
            var C = y.parts.slice(1).join(".");
            this.opcode("pushId", "BlockParam", x, C);
          } else
            d = y.original || d, d.replace && (d = d.replace(/^this(?:\.|$)/, "").replace(/^\.\//, "").replace(/^\.$/, "")), this.opcode("pushId", y.type, d);
        }
        this.accept(y);
      }
    },
    setupFullMustacheParams: function(y, d, x, C) {
      var O = y.params;
      return this.pushParams(O), this.opcode("pushProgram", d), this.opcode("pushProgram", x), y.hash ? this.accept(y.hash) : this.opcode("emptyHash", C), O;
    },
    blockParamIndex: function(y) {
      for (var d = 0, x = this.options.blockParams.length; d < x; d++) {
        var C = this.options.blockParams[d], O = C && s.indexOf(C, y);
        if (C && O >= 0)
          return [d, O];
      }
    }
  };
  function h(g, y, d) {
    if (g == null || typeof g != "string" && g.type !== "Program")
      throw new l.default("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + g);
    y = y || {}, "data" in y || (y.data = !0), y.compat && (y.useDepths = !0);
    var x = d.parse(g, y), C = new d.Compiler().compile(x, y);
    return new d.JavaScriptCompiler().compile(C, y);
  }
  function p(g, y, d) {
    if (y === void 0 && (y = {}), g == null || typeof g != "string" && g.type !== "Program")
      throw new l.default("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + g);
    y = s.extend({}, y), "data" in y || (y.data = !0), y.compat && (y.useDepths = !0);
    var x = void 0;
    function C() {
      var A = d.parse(g, y), j = new d.Compiler().compile(A, y), E = new d.JavaScriptCompiler().compile(j, y, void 0, !0);
      return d.template(E);
    }
    function O(A, j) {
      return x || (x = C()), x.call(this, A, j);
    }
    return O._setup = function(A) {
      return x || (x = C()), x._setup(A);
    }, O._child = function(A, j, E, N) {
      return x || (x = C()), x._child(A, j, E, N);
    }, O;
  }
  function v(g, y) {
    if (g === y)
      return !0;
    if (s.isArray(g) && s.isArray(y) && g.length === y.length) {
      for (var d = 0; d < g.length; d++)
        if (!v(g[d], y[d]))
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
  return fi;
}
var Ao = { exports: {} }, To = { exports: {} }, xl = {}, Af = {}, No = {}, wo = {}, pv;
function M_() {
  if (pv) return wo;
  pv = 1;
  var r = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
  return wo.encode = function(a) {
    if (0 <= a && a < r.length)
      return r[a];
    throw new TypeError("Must be between 0 and 63: " + a);
  }, wo.decode = function(a) {
    var l = 65, s = 90, c = 97, u = 122, b = 48, m = 57, h = 43, p = 47, v = 26, S = 52;
    return l <= a && a <= s ? a - l : c <= a && a <= u ? a - c + v : b <= a && a <= m ? a - b + S : a == h ? 62 : a == p ? 63 : -1;
  }, wo;
}
var mv;
function xy() {
  if (mv) return No;
  mv = 1;
  var r = M_(), a = 5, l = 1 << a, s = l - 1, c = l;
  function u(m) {
    return m < 0 ? (-m << 1) + 1 : (m << 1) + 0;
  }
  function b(m) {
    var h = (m & 1) === 1, p = m >> 1;
    return h ? -p : p;
  }
  return No.encode = function(h) {
    var p = "", v, S = u(h);
    do
      v = S & s, S >>>= a, S > 0 && (v |= c), p += r.encode(v);
    while (S > 0);
    return p;
  }, No.decode = function(h, p, v) {
    var S = h.length, g = 0, y = 0, d, x;
    do {
      if (p >= S)
        throw new Error("Expected more digits in base 64 VLQ value.");
      if (x = r.decode(h.charCodeAt(p++)), x === -1)
        throw new Error("Invalid base64 digit: " + h.charAt(p - 1));
      d = !!(x & c), x &= s, g = g + (x << y), y += a;
    } while (d);
    v.value = b(g), v.rest = p;
  }, No;
}
var Tf = {}, gv;
function zl() {
  return gv || (gv = 1, (function(r) {
    function a(E, N, k) {
      if (N in E)
        return E[N];
      if (arguments.length === 3)
        return k;
      throw new Error('"' + N + '" is a required argument.');
    }
    r.getArg = a;
    var l = /^(?:([\w+\-.]+):)?\/\/(?:(\w+:\w+)@)?([\w.-]*)(?::(\d+))?(.*)$/, s = /^data:.+\,.+$/;
    function c(E) {
      var N = E.match(l);
      return N ? {
        scheme: N[1],
        auth: N[2],
        host: N[3],
        port: N[4],
        path: N[5]
      } : null;
    }
    r.urlParse = c;
    function u(E) {
      var N = "";
      return E.scheme && (N += E.scheme + ":"), N += "//", E.auth && (N += E.auth + "@"), E.host && (N += E.host), E.port && (N += ":" + E.port), E.path && (N += E.path), N;
    }
    r.urlGenerate = u;
    function b(E) {
      var N = E, k = c(E);
      if (k) {
        if (!k.path)
          return E;
        N = k.path;
      }
      for (var L = r.isAbsolute(N), V = N.split(/\/+/), W, H = 0, X = V.length - 1; X >= 0; X--)
        W = V[X], W === "." ? V.splice(X, 1) : W === ".." ? H++ : H > 0 && (W === "" ? (V.splice(X + 1, H), H = 0) : (V.splice(X, 2), H--));
      return N = V.join("/"), N === "" && (N = L ? "/" : "."), k ? (k.path = N, u(k)) : N;
    }
    r.normalize = b;
    function m(E, N) {
      E === "" && (E = "."), N === "" && (N = ".");
      var k = c(N), L = c(E);
      if (L && (E = L.path || "/"), k && !k.scheme)
        return L && (k.scheme = L.scheme), u(k);
      if (k || N.match(s))
        return N;
      if (L && !L.host && !L.path)
        return L.host = N, u(L);
      var V = N.charAt(0) === "/" ? N : b(E.replace(/\/+$/, "") + "/" + N);
      return L ? (L.path = V, u(L)) : V;
    }
    r.join = m, r.isAbsolute = function(E) {
      return E.charAt(0) === "/" || l.test(E);
    };
    function h(E, N) {
      E === "" && (E = "."), E = E.replace(/\/$/, "");
      for (var k = 0; N.indexOf(E + "/") !== 0; ) {
        var L = E.lastIndexOf("/");
        if (L < 0 || (E = E.slice(0, L), E.match(/^([^\/]+:\/)?\/*$/)))
          return N;
        ++k;
      }
      return Array(k + 1).join("../") + N.substr(E.length + 1);
    }
    r.relative = h;
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
      var N = E.length;
      if (N < 9 || E.charCodeAt(N - 1) !== 95 || E.charCodeAt(N - 2) !== 95 || E.charCodeAt(N - 3) !== 111 || E.charCodeAt(N - 4) !== 116 || E.charCodeAt(N - 5) !== 111 || E.charCodeAt(N - 6) !== 114 || E.charCodeAt(N - 7) !== 112 || E.charCodeAt(N - 8) !== 95 || E.charCodeAt(N - 9) !== 95)
        return !1;
      for (var k = N - 10; k >= 0; k--)
        if (E.charCodeAt(k) !== 36)
          return !1;
      return !0;
    }
    function d(E, N, k) {
      var L = C(E.source, N.source);
      return L !== 0 || (L = E.originalLine - N.originalLine, L !== 0) || (L = E.originalColumn - N.originalColumn, L !== 0 || k) || (L = E.generatedColumn - N.generatedColumn, L !== 0) || (L = E.generatedLine - N.generatedLine, L !== 0) ? L : C(E.name, N.name);
    }
    r.compareByOriginalPositions = d;
    function x(E, N, k) {
      var L = E.generatedLine - N.generatedLine;
      return L !== 0 || (L = E.generatedColumn - N.generatedColumn, L !== 0 || k) || (L = C(E.source, N.source), L !== 0) || (L = E.originalLine - N.originalLine, L !== 0) || (L = E.originalColumn - N.originalColumn, L !== 0) ? L : C(E.name, N.name);
    }
    r.compareByGeneratedPositionsDeflated = x;
    function C(E, N) {
      return E === N ? 0 : E === null ? 1 : N === null ? -1 : E > N ? 1 : -1;
    }
    function O(E, N) {
      var k = E.generatedLine - N.generatedLine;
      return k !== 0 || (k = E.generatedColumn - N.generatedColumn, k !== 0) || (k = C(E.source, N.source), k !== 0) || (k = E.originalLine - N.originalLine, k !== 0) || (k = E.originalColumn - N.originalColumn, k !== 0) ? k : C(E.name, N.name);
    }
    r.compareByGeneratedPositionsInflated = O;
    function A(E) {
      return JSON.parse(E.replace(/^\)]}'[^\n]*\n/, ""));
    }
    r.parseSourceMapInput = A;
    function j(E, N, k) {
      if (N = N || "", E && (E[E.length - 1] !== "/" && N[0] !== "/" && (E += "/"), N = E + N), k) {
        var L = c(k);
        if (!L)
          throw new Error("sourceMapURL could not be parsed");
        if (L.path) {
          var V = L.path.lastIndexOf("/");
          V >= 0 && (L.path = L.path.substring(0, V + 1));
        }
        N = m(u(L), N);
      }
      return b(N);
    }
    r.computeSourceURL = j;
  })(Tf)), Tf;
}
var Nf = {}, vv;
function Ey() {
  if (vv) return Nf;
  vv = 1;
  var r = zl(), a = Object.prototype.hasOwnProperty, l = typeof Map < "u";
  function s() {
    this._array = [], this._set = l ? /* @__PURE__ */ new Map() : /* @__PURE__ */ Object.create(null);
  }
  return s.fromArray = function(u, b) {
    for (var m = new s(), h = 0, p = u.length; h < p; h++)
      m.add(u[h], b);
    return m;
  }, s.prototype.size = function() {
    return l ? this._set.size : Object.getOwnPropertyNames(this._set).length;
  }, s.prototype.add = function(u, b) {
    var m = l ? u : r.toSetString(u), h = l ? this.has(u) : a.call(this._set, m), p = this._array.length;
    (!h || b) && this._array.push(u), h || (l ? this._set.set(u, p) : this._set[m] = p);
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
      var m = r.toSetString(u);
      if (a.call(this._set, m))
        return this._set[m];
    }
    throw new Error('"' + u + '" is not in the set.');
  }, s.prototype.at = function(u) {
    if (u >= 0 && u < this._array.length)
      return this._array[u];
    throw new Error("No element indexed by " + u);
  }, s.prototype.toArray = function() {
    return this._array.slice();
  }, Nf.ArraySet = s, Nf;
}
var wf = {}, yv;
function R_() {
  if (yv) return wf;
  yv = 1;
  var r = zl();
  function a(s, c) {
    var u = s.generatedLine, b = c.generatedLine, m = s.generatedColumn, h = c.generatedColumn;
    return b > u || b == u && h >= m || r.compareByGeneratedPositionsInflated(s, c) <= 0;
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
  }, wf.MappingList = l, wf;
}
var bv;
function Cy() {
  if (bv) return Af;
  bv = 1;
  var r = xy(), a = zl(), l = Ey().ArraySet, s = R_().MappingList;
  function c(u) {
    u || (u = {}), this._file = a.getArg(u, "file", null), this._sourceRoot = a.getArg(u, "sourceRoot", null), this._skipValidation = a.getArg(u, "skipValidation", !1), this._sources = new l(), this._names = new l(), this._mappings = new s(), this._sourcesContents = null;
  }
  return c.prototype._version = 3, c.fromSourceMap = function(b) {
    var m = b.sourceRoot, h = new c({
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
      }, p.name != null && (v.name = p.name)), h.addMapping(v);
    }), b.sources.forEach(function(p) {
      var v = p;
      m !== null && (v = a.relative(m, p)), h._sources.has(v) || h._sources.add(v);
      var S = b.sourceContentFor(p);
      S != null && h.setSourceContent(p, S);
    }), h;
  }, c.prototype.addMapping = function(b) {
    var m = a.getArg(b, "generated"), h = a.getArg(b, "original", null), p = a.getArg(b, "source", null), v = a.getArg(b, "name", null);
    this._skipValidation || this._validateMapping(m, h, p, v), p != null && (p = String(p), this._sources.has(p) || this._sources.add(p)), v != null && (v = String(v), this._names.has(v) || this._names.add(v)), this._mappings.add({
      generatedLine: m.line,
      generatedColumn: m.column,
      originalLine: h != null && h.line,
      originalColumn: h != null && h.column,
      source: p,
      name: v
    });
  }, c.prototype.setSourceContent = function(b, m) {
    var h = b;
    this._sourceRoot != null && (h = a.relative(this._sourceRoot, h)), m != null ? (this._sourcesContents || (this._sourcesContents = /* @__PURE__ */ Object.create(null)), this._sourcesContents[a.toSetString(h)] = m) : this._sourcesContents && (delete this._sourcesContents[a.toSetString(h)], Object.keys(this._sourcesContents).length === 0 && (this._sourcesContents = null));
  }, c.prototype.applySourceMap = function(b, m, h) {
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
        var d = b.originalPositionFor({
          line: y.originalLine,
          column: y.originalColumn
        });
        d.source != null && (y.source = d.source, h != null && (y.source = a.join(h, y.source)), v != null && (y.source = a.relative(v, y.source)), y.originalLine = d.line, y.originalColumn = d.column, d.name != null && (y.name = d.name));
      }
      var x = y.source;
      x != null && !S.has(x) && S.add(x);
      var C = y.name;
      C != null && !g.has(C) && g.add(C);
    }, this), this._sources = S, this._names = g, b.sources.forEach(function(y) {
      var d = b.sourceContentFor(y);
      d != null && (h != null && (y = a.join(h, y)), v != null && (y = a.relative(v, y)), this.setSourceContent(y, d));
    }, this);
  }, c.prototype._validateMapping = function(b, m, h, p) {
    if (m && typeof m.line != "number" && typeof m.column != "number")
      throw new Error(
        "original.line and original.column are not numbers -- you probably meant to omit the original mapping entirely and only map the generated position. If so, pass null for the original mapping instead of an object with empty or null values."
      );
    if (!(b && "line" in b && "column" in b && b.line > 0 && b.column >= 0 && !m && !h && !p)) {
      if (b && "line" in b && "column" in b && m && "line" in m && "column" in m && b.line > 0 && b.column >= 0 && m.line > 0 && m.column >= 0 && h)
        return;
      throw new Error("Invalid mapping: " + JSON.stringify({
        generated: b,
        source: h,
        original: m,
        name: p
      }));
    }
  }, c.prototype._serializeMappings = function() {
    for (var b = 0, m = 1, h = 0, p = 0, v = 0, S = 0, g = "", y, d, x, C, O = this._mappings.toArray(), A = 0, j = O.length; A < j; A++) {
      if (d = O[A], y = "", d.generatedLine !== m)
        for (b = 0; d.generatedLine !== m; )
          y += ";", m++;
      else if (A > 0) {
        if (!a.compareByGeneratedPositionsInflated(d, O[A - 1]))
          continue;
        y += ",";
      }
      y += r.encode(d.generatedColumn - b), b = d.generatedColumn, d.source != null && (C = this._sources.indexOf(d.source), y += r.encode(C - S), S = C, y += r.encode(d.originalLine - 1 - p), p = d.originalLine - 1, y += r.encode(d.originalColumn - h), h = d.originalColumn, d.name != null && (x = this._names.indexOf(d.name), y += r.encode(x - v), v = x)), g += y;
    }
    return g;
  }, c.prototype._generateSourcesContent = function(b, m) {
    return b.map(function(h) {
      if (!this._sourcesContents)
        return null;
      m != null && (h = a.relative(m, h));
      var p = a.toSetString(h);
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
var El = {}, Of = {}, Sv;
function k_() {
  return Sv || (Sv = 1, (function(r) {
    r.GREATEST_LOWER_BOUND = 1, r.LEAST_UPPER_BOUND = 2;
    function a(l, s, c, u, b, m) {
      var h = Math.floor((s - l) / 2) + l, p = b(c, u[h], !0);
      return p === 0 ? h : p > 0 ? s - h > 1 ? a(h, s, c, u, b, m) : m == r.LEAST_UPPER_BOUND ? s < u.length ? s : -1 : h : h - l > 1 ? a(l, h, c, u, b, m) : m == r.LEAST_UPPER_BOUND ? h : l < 0 ? -1 : l;
    }
    r.search = function(s, c, u, b) {
      if (c.length === 0)
        return -1;
      var m = a(
        -1,
        c.length,
        s,
        c,
        u,
        b || r.GREATEST_LOWER_BOUND
      );
      if (m < 0)
        return -1;
      for (; m - 1 >= 0 && u(c[m], c[m - 1], !0) === 0; )
        --m;
      return m;
    };
  })(Of)), Of;
}
var Df = {}, _v;
function j_() {
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
      var m = a(u, b), h = u - 1;
      r(s, m, b);
      for (var p = s[b], v = u; v < b; v++)
        c(s[v], p) <= 0 && (h += 1, r(s, h, v));
      r(s, h + 1, v);
      var S = h + 1;
      l(s, c, u, S - 1), l(s, c, S + 1, b);
    }
  }
  return Df.quickSort = function(s, c) {
    l(s, c, 0, s.length - 1);
  }, Df;
}
var xv;
function L_() {
  if (xv) return El;
  xv = 1;
  var r = zl(), a = k_(), l = Ey().ArraySet, s = xy(), c = j_().quickSort;
  function u(p, v) {
    var S = p;
    return typeof p == "string" && (S = r.parseSourceMapInput(p)), S.sections != null ? new h(S, v) : new b(S, v);
  }
  u.fromSourceMap = function(p, v) {
    return b.fromSourceMap(p, v);
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
  }), u.prototype._charIsMappingSeparator = function(v, S) {
    var g = v.charAt(S);
    return g === ";" || g === ",";
  }, u.prototype._parseMappings = function(v, S) {
    throw new Error("Subclasses must implement _parseMappings");
  }, u.GENERATED_ORDER = 1, u.ORIGINAL_ORDER = 2, u.GREATEST_LOWER_BOUND = 1, u.LEAST_UPPER_BOUND = 2, u.prototype.eachMapping = function(v, S, g) {
    var y = S || null, d = g || u.GENERATED_ORDER, x;
    switch (d) {
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
    }, this).forEach(v, y);
  }, u.prototype.allGeneratedPositionsFor = function(v) {
    var S = r.getArg(v, "line"), g = {
      source: r.getArg(v, "source"),
      originalLine: S,
      originalColumn: r.getArg(v, "column", 0)
    };
    if (g.source = this._findSourceIndex(g.source), g.source < 0)
      return [];
    var y = [], d = this._findMapping(
      g,
      this._originalMappings,
      "originalLine",
      "originalColumn",
      r.compareByOriginalPositions,
      a.LEAST_UPPER_BOUND
    );
    if (d >= 0) {
      var x = this._originalMappings[d];
      if (v.column === void 0)
        for (var C = x.originalLine; x && x.originalLine === C; )
          y.push({
            line: r.getArg(x, "generatedLine", null),
            column: r.getArg(x, "generatedColumn", null),
            lastColumn: r.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++d];
      else
        for (var O = x.originalColumn; x && x.originalLine === S && x.originalColumn == O; )
          y.push({
            line: r.getArg(x, "generatedLine", null),
            column: r.getArg(x, "generatedColumn", null),
            lastColumn: r.getArg(x, "lastGeneratedColumn", null)
          }), x = this._originalMappings[++d];
    }
    return y;
  }, El.SourceMapConsumer = u;
  function b(p, v) {
    var S = p;
    typeof p == "string" && (S = r.parseSourceMapInput(p));
    var g = r.getArg(S, "version"), y = r.getArg(S, "sources"), d = r.getArg(S, "names", []), x = r.getArg(S, "sourceRoot", null), C = r.getArg(S, "sourcesContent", null), O = r.getArg(S, "mappings"), A = r.getArg(S, "file", null);
    if (g != this._version)
      throw new Error("Unsupported version: " + g);
    x && (x = r.normalize(x)), y = y.map(String).map(r.normalize).map(function(j) {
      return x && r.isAbsolute(x) && r.isAbsolute(j) ? r.relative(x, j) : j;
    }), this._names = l.fromArray(d.map(String), !0), this._sources = l.fromArray(y, !0), this._absoluteSources = this._sources.toArray().map(function(j) {
      return r.computeSourceURL(x, j, v);
    }), this.sourceRoot = x, this.sourcesContent = C, this._mappings = O, this._sourceMapURL = v, this.file = A;
  }
  b.prototype = Object.create(u.prototype), b.prototype.consumer = u, b.prototype._findSourceIndex = function(p) {
    var v = p;
    if (this.sourceRoot != null && (v = r.relative(this.sourceRoot, v)), this._sources.has(v))
      return this._sources.indexOf(v);
    var S;
    for (S = 0; S < this._absoluteSources.length; ++S)
      if (this._absoluteSources[S] == p)
        return S;
    return -1;
  }, b.fromSourceMap = function(v, S) {
    var g = Object.create(b.prototype), y = g._names = l.fromArray(v._names.toArray(), !0), d = g._sources = l.fromArray(v._sources.toArray(), !0);
    g.sourceRoot = v._sourceRoot, g.sourcesContent = v._generateSourcesContent(
      g._sources.toArray(),
      g.sourceRoot
    ), g.file = v._file, g._sourceMapURL = S, g._absoluteSources = g._sources.toArray().map(function(k) {
      return r.computeSourceURL(g.sourceRoot, k, S);
    });
    for (var x = v._mappings.toArray().slice(), C = g.__generatedMappings = [], O = g.__originalMappings = [], A = 0, j = x.length; A < j; A++) {
      var E = x[A], N = new m();
      N.generatedLine = E.generatedLine, N.generatedColumn = E.generatedColumn, E.source && (N.source = d.indexOf(E.source), N.originalLine = E.originalLine, N.originalColumn = E.originalColumn, E.name && (N.name = y.indexOf(E.name)), O.push(N)), C.push(N);
    }
    return c(g.__originalMappings, r.compareByOriginalPositions), g;
  }, b.prototype._version = 3, Object.defineProperty(b.prototype, "sources", {
    get: function() {
      return this._absoluteSources.slice();
    }
  });
  function m() {
    this.generatedLine = 0, this.generatedColumn = 0, this.source = null, this.originalLine = null, this.originalColumn = null, this.name = null;
  }
  b.prototype._parseMappings = function(v, S) {
    for (var g = 1, y = 0, d = 0, x = 0, C = 0, O = 0, A = v.length, j = 0, E = {}, N = {}, k = [], L = [], V, W, H, X, Q; j < A; )
      if (v.charAt(j) === ";")
        g++, j++, y = 0;
      else if (v.charAt(j) === ",")
        j++;
      else {
        for (V = new m(), V.generatedLine = g, X = j; X < A && !this._charIsMappingSeparator(v, X); X++)
          ;
        if (W = v.slice(j, X), H = E[W], H)
          j += W.length;
        else {
          for (H = []; j < X; )
            s.decode(v, j, N), Q = N.value, j = N.rest, H.push(Q);
          if (H.length === 2)
            throw new Error("Found a source, but no line and column");
          if (H.length === 3)
            throw new Error("Found a source and line, but no column");
          E[W] = H;
        }
        V.generatedColumn = y + H[0], y = V.generatedColumn, H.length > 1 && (V.source = C + H[1], C += H[1], V.originalLine = d + H[2], d = V.originalLine, V.originalLine += 1, V.originalColumn = x + H[3], x = V.originalColumn, H.length > 4 && (V.name = O + H[4], O += H[4])), L.push(V), typeof V.originalLine == "number" && k.push(V);
      }
    c(L, r.compareByGeneratedPositionsDeflated), this.__generatedMappings = L, c(k, r.compareByOriginalPositions), this.__originalMappings = k;
  }, b.prototype._findMapping = function(v, S, g, y, d, x) {
    if (v[g] <= 0)
      throw new TypeError("Line must be greater than or equal to 1, got " + v[g]);
    if (v[y] < 0)
      throw new TypeError("Column must be greater than or equal to 0, got " + v[y]);
    return a.search(v, S, d, x);
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
      r.getArg(v, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (g >= 0) {
      var y = this._generatedMappings[g];
      if (y.generatedLine === S.generatedLine) {
        var d = r.getArg(y, "source", null);
        d !== null && (d = this._sources.at(d), d = r.computeSourceURL(this.sourceRoot, d, this._sourceMapURL));
        var x = r.getArg(y, "name", null);
        return x !== null && (x = this._names.at(x)), {
          source: d,
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
    var d;
    if (this.sourceRoot != null && (d = r.urlParse(this.sourceRoot))) {
      var x = y.replace(/^file:\/\//, "");
      if (d.scheme == "file" && this._sources.has(x))
        return this.sourcesContent[this._sources.indexOf(x)];
      if ((!d.path || d.path == "/") && this._sources.has("/" + y))
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
      r.getArg(v, "bias", u.GREATEST_LOWER_BOUND)
    );
    if (y >= 0) {
      var d = this._originalMappings[y];
      if (d.source === g.source)
        return {
          line: r.getArg(d, "generatedLine", null),
          column: r.getArg(d, "generatedColumn", null),
          lastColumn: r.getArg(d, "lastGeneratedColumn", null)
        };
    }
    return {
      line: null,
      column: null,
      lastColumn: null
    };
  }, El.BasicSourceMapConsumer = b;
  function h(p, v) {
    var S = p;
    typeof p == "string" && (S = r.parseSourceMapInput(p));
    var g = r.getArg(S, "version"), y = r.getArg(S, "sections");
    if (g != this._version)
      throw new Error("Unsupported version: " + g);
    this._sources = new l(), this._names = new l();
    var d = {
      line: -1,
      column: 0
    };
    this._sections = y.map(function(x) {
      if (x.url)
        throw new Error("Support for url field in sections not implemented.");
      var C = r.getArg(x, "offset"), O = r.getArg(C, "line"), A = r.getArg(C, "column");
      if (O < d.line || O === d.line && A < d.column)
        throw new Error("Section offsets must be ordered and non-overlapping.");
      return d = C, {
        generatedOffset: {
          // The offset fields are 0-based, but we use 1-based indices when
          // encoding/decoding from VLQ.
          generatedLine: O + 1,
          generatedColumn: A + 1
        },
        consumer: new u(r.getArg(x, "map"), v)
      };
    });
  }
  return h.prototype = Object.create(u.prototype), h.prototype.constructor = u, h.prototype._version = 3, Object.defineProperty(h.prototype, "sources", {
    get: function() {
      for (var p = [], v = 0; v < this._sections.length; v++)
        for (var S = 0; S < this._sections[v].consumer.sources.length; S++)
          p.push(this._sections[v].consumer.sources[S]);
      return p;
    }
  }), h.prototype.originalPositionFor = function(v) {
    var S = {
      generatedLine: r.getArg(v, "line"),
      generatedColumn: r.getArg(v, "column")
    }, g = a.search(
      S,
      this._sections,
      function(d, x) {
        var C = d.generatedLine - x.generatedOffset.generatedLine;
        return C || d.generatedColumn - x.generatedOffset.generatedColumn;
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
  }, h.prototype.hasContentsOfAllSources = function() {
    return this._sections.every(function(v) {
      return v.consumer.hasContentsOfAllSources();
    });
  }, h.prototype.sourceContentFor = function(v, S) {
    for (var g = 0; g < this._sections.length; g++) {
      var y = this._sections[g], d = y.consumer.sourceContentFor(v, !0);
      if (d)
        return d;
    }
    if (S)
      return null;
    throw new Error('"' + v + '" is not in the SourceMap.');
  }, h.prototype.generatedPositionFor = function(v) {
    for (var S = 0; S < this._sections.length; S++) {
      var g = this._sections[S];
      if (g.consumer._findSourceIndex(r.getArg(v, "source")) !== -1) {
        var y = g.consumer.generatedPositionFor(v);
        if (y) {
          var d = {
            line: y.line + (g.generatedOffset.generatedLine - 1),
            column: y.column + (g.generatedOffset.generatedLine === y.line ? g.generatedOffset.generatedColumn - 1 : 0)
          };
          return d;
        }
      }
    }
    return {
      line: null,
      column: null
    };
  }, h.prototype._parseMappings = function(v, S) {
    this.__generatedMappings = [], this.__originalMappings = [];
    for (var g = 0; g < this._sections.length; g++)
      for (var y = this._sections[g], d = y.consumer._generatedMappings, x = 0; x < d.length; x++) {
        var C = d[x], O = y.consumer._sources.at(C.source);
        O = r.computeSourceURL(y.consumer.sourceRoot, O, this._sourceMapURL), this._sources.add(O), O = this._sources.indexOf(O);
        var A = null;
        C.name && (A = y.consumer._names.at(C.name), this._names.add(A), A = this._names.indexOf(A));
        var j = {
          source: O,
          generatedLine: C.generatedLine + (y.generatedOffset.generatedLine - 1),
          generatedColumn: C.generatedColumn + (y.generatedOffset.generatedLine === C.generatedLine ? y.generatedOffset.generatedColumn - 1 : 0),
          originalLine: C.originalLine,
          originalColumn: C.originalColumn,
          name: A
        };
        this.__generatedMappings.push(j), typeof j.originalLine == "number" && this.__originalMappings.push(j);
      }
    c(this.__generatedMappings, r.compareByGeneratedPositionsDeflated), c(this.__originalMappings, r.compareByOriginalPositions);
  }, El.IndexedSourceMapConsumer = h, El;
}
var Mf = {}, Ev;
function B_() {
  if (Ev) return Mf;
  Ev = 1;
  var r = Cy().SourceMapGenerator, a = zl(), l = /(\r?\n)/, s = 10, c = "$$$isSourceNode$$$";
  function u(b, m, h, p, v) {
    this.children = [], this.sourceContents = {}, this.line = b ?? null, this.column = m ?? null, this.source = h ?? null, this.name = v ?? null, this[c] = !0, p != null && this.add(p);
  }
  return u.fromStringWithSourceMap = function(m, h, p) {
    var v = new u(), S = m.split(l), g = 0, y = function() {
      var A = E(), j = E() || "";
      return A + j;
      function E() {
        return g < S.length ? S[g++] : void 0;
      }
    }, d = 1, x = 0, C = null;
    return h.eachMapping(function(A) {
      if (C !== null)
        if (d < A.generatedLine)
          O(C, y()), d++, x = 0;
        else {
          var j = S[g] || "", E = j.substr(0, A.generatedColumn - x);
          S[g] = j.substr(A.generatedColumn - x), x = A.generatedColumn, O(C, E), C = A;
          return;
        }
      for (; d < A.generatedLine; )
        v.add(y()), d++;
      if (x < A.generatedColumn) {
        var j = S[g] || "";
        v.add(j.substr(0, A.generatedColumn)), S[g] = j.substr(A.generatedColumn), x = A.generatedColumn;
      }
      C = A;
    }, this), g < S.length && (C && O(C, y()), v.add(S.splice(g).join(""))), h.sources.forEach(function(A) {
      var j = h.sourceContentFor(A);
      j != null && (p != null && (A = a.join(p, A)), v.setSourceContent(A, j));
    }), v;
    function O(A, j) {
      if (A === null || A.source === void 0)
        v.add(j);
      else {
        var E = p ? a.join(p, A.source) : A.source;
        v.add(new u(
          A.originalLine,
          A.originalColumn,
          E,
          j,
          A.name
        ));
      }
    }
  }, u.prototype.add = function(m) {
    if (Array.isArray(m))
      m.forEach(function(h) {
        this.add(h);
      }, this);
    else if (m[c] || typeof m == "string")
      m && this.children.push(m);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + m
      );
    return this;
  }, u.prototype.prepend = function(m) {
    if (Array.isArray(m))
      for (var h = m.length - 1; h >= 0; h--)
        this.prepend(m[h]);
    else if (m[c] || typeof m == "string")
      this.children.unshift(m);
    else
      throw new TypeError(
        "Expected a SourceNode, string, or an array of SourceNodes and strings. Got " + m
      );
    return this;
  }, u.prototype.walk = function(m) {
    for (var h, p = 0, v = this.children.length; p < v; p++)
      h = this.children[p], h[c] ? h.walk(m) : h !== "" && m(h, {
        source: this.source,
        line: this.line,
        column: this.column,
        name: this.name
      });
  }, u.prototype.join = function(m) {
    var h, p, v = this.children.length;
    if (v > 0) {
      for (h = [], p = 0; p < v - 1; p++)
        h.push(this.children[p]), h.push(m);
      h.push(this.children[p]), this.children = h;
    }
    return this;
  }, u.prototype.replaceRight = function(m, h) {
    var p = this.children[this.children.length - 1];
    return p[c] ? p.replaceRight(m, h) : typeof p == "string" ? this.children[this.children.length - 1] = p.replace(m, h) : this.children.push("".replace(m, h)), this;
  }, u.prototype.setSourceContent = function(m, h) {
    this.sourceContents[a.toSetString(m)] = h;
  }, u.prototype.walkSourceContents = function(m) {
    for (var h = 0, p = this.children.length; h < p; h++)
      this.children[h][c] && this.children[h].walkSourceContents(m);
    for (var v = Object.keys(this.sourceContents), h = 0, p = v.length; h < p; h++)
      m(a.fromSetString(v[h]), this.sourceContents[v[h]]);
  }, u.prototype.toString = function() {
    var m = "";
    return this.walk(function(h) {
      m += h;
    }), m;
  }, u.prototype.toStringWithSourceMap = function(m) {
    var h = {
      code: "",
      line: 1,
      column: 0
    }, p = new r(m), v = !1, S = null, g = null, y = null, d = null;
    return this.walk(function(x, C) {
      h.code += x, C.source !== null && C.line !== null && C.column !== null ? ((S !== C.source || g !== C.line || y !== C.column || d !== C.name) && p.addMapping({
        source: C.source,
        original: {
          line: C.line,
          column: C.column
        },
        generated: {
          line: h.line,
          column: h.column
        },
        name: C.name
      }), S = C.source, g = C.line, y = C.column, d = C.name, v = !0) : v && (p.addMapping({
        generated: {
          line: h.line,
          column: h.column
        }
      }), S = null, v = !1);
      for (var O = 0, A = x.length; O < A; O++)
        x.charCodeAt(O) === s ? (h.line++, h.column = 0, O + 1 === A ? (S = null, v = !1) : v && p.addMapping({
          source: C.source,
          original: {
            line: C.line,
            column: C.column
          },
          generated: {
            line: h.line,
            column: h.column
          },
          name: C.name
        })) : h.column++;
    }), this.walkSourceContents(function(x, C) {
      p.setSourceContent(x, C);
    }), { code: h.code, map: p };
  }, Mf.SourceNode = u, Mf;
}
var Cv;
function U_() {
  return Cv || (Cv = 1, xl.SourceMapGenerator = Cy().SourceMapGenerator, xl.SourceMapConsumer = L_().SourceMapConsumer, xl.SourceNode = B_().SourceNode), xl;
}
var Av;
function z_() {
  return Av || (Av = 1, (function(r, a) {
    a.__esModule = !0;
    var l = Ft(), s = void 0;
    try {
      var c = U_();
      s = c.SourceNode;
    } catch {
    }
    s || (s = function(m, h, p, v) {
      this.src = "", v && this.add(v);
    }, s.prototype = {
      add: function(h) {
        l.isArray(h) && (h = h.join("")), this.src += h;
      },
      prepend: function(h) {
        l.isArray(h) && (h = h.join("")), this.src = h + this.src;
      },
      toStringWithSourceMap: function() {
        return { code: this.toString() };
      },
      toString: function() {
        return this.src;
      }
    });
    function u(m, h, p) {
      if (l.isArray(m)) {
        for (var v = [], S = 0, g = m.length; S < g; S++)
          v.push(h.wrap(m[S], p));
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
      prepend: function(h, p) {
        this.source.unshift(this.wrap(h, p));
      },
      push: function(h, p) {
        this.source.push(this.wrap(h, p));
      },
      merge: function() {
        var h = this.empty();
        return this.each(function(p) {
          h.add(["  ", p, `
`]);
        }), h;
      },
      each: function(h) {
        for (var p = 0, v = this.source.length; p < v; p++)
          h(this.source[p]);
      },
      empty: function() {
        var h = this.currentLocation || { start: {} };
        return new s(h.start.line, h.start.column, this.srcFile);
      },
      wrap: function(h) {
        var p = arguments.length <= 1 || arguments[1] === void 0 ? this.currentLocation || { start: {} } : arguments[1];
        return h instanceof s ? h : (h = u(h, this, p), new s(p.start.line, p.start.column, this.srcFile, h));
      },
      functionCall: function(h, p, v) {
        return v = this.generateList(v), this.wrap([h, p ? "." + p + "(" : "(", v, ")"]);
      },
      quotedString: function(h) {
        return '"' + (h + "").replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"';
      },
      objectLiteral: function(h) {
        var p = this, v = [];
        Object.keys(h).forEach(function(g) {
          var y = u(h[g], p);
          y !== "undefined" && v.push([p.quotedString(g), ":", y]);
        });
        var S = this.generateList(v);
        return S.prepend("{"), S.add("}"), S;
      },
      generateList: function(h) {
        for (var p = this.empty(), v = 0, S = h.length; v < S; v++)
          v && p.add(","), p.add(u(h[v], this));
        return p;
      },
      generateArray: function(h) {
        var p = this.generateList(h);
        return p.prepend("["), p.add("]"), p;
      }
    }, a.default = b, r.exports = a.default;
  })(To, To.exports)), To.exports;
}
var Tv;
function H_() {
  return Tv || (Tv = 1, (function(r, a) {
    a.__esModule = !0;
    function l(g) {
      return g && g.__esModule ? g : { default: g };
    }
    var s = dh(), c = wn(), u = l(c), b = Ft(), m = z_(), h = l(m);
    function p(g) {
      this.value = g;
    }
    function v() {
    }
    v.prototype = {
      // PUBLIC API: You can override these methods in a subclass to provide
      // alternative compiled forms for name lookup and buffering semantics
      nameLookup: function(y, d) {
        return this.internalNameLookup(y, d);
      },
      depthedLookup: function(y) {
        return [this.aliasable("container.lookup"), "(depths, ", JSON.stringify(y), ")"];
      },
      compilerInfo: function() {
        var y = s.COMPILER_REVISION, d = s.REVISION_CHANGES[y];
        return [y, d];
      },
      appendToBuffer: function(y, d, x) {
        return b.isArray(y) || (y = [y]), y = this.source.wrap(y, d), this.environment.isSimple ? ["return ", y, ";"] : x ? ["buffer += ", y, ";"] : (y.appendToBuffer = !0, y);
      },
      initializeBuffer: function() {
        return this.quotedString("");
      },
      // END PUBLIC API
      internalNameLookup: function(y, d) {
        return this.lookupPropertyFunctionIsUsed = !0, ["lookupProperty(", y, ",", JSON.stringify(d), ")"];
      },
      lookupPropertyFunctionIsUsed: !1,
      compile: function(y, d, x, C) {
        this.environment = y, this.options = d, this.stringParams = this.options.stringParams, this.trackIds = this.options.trackIds, this.precompile = !C, this.name = this.environment.name, this.isChild = !!x, this.context = x || {
          decorators: [],
          programs: [],
          environments: []
        }, this.preamble(), this.stackSlot = 0, this.stackVars = [], this.aliases = {}, this.registers = { list: [] }, this.hashes = [], this.compileStack = [], this.inlineStack = [], this.blockParams = [], this.compileChildren(y, d), this.useDepths = this.useDepths || y.useDepths || y.useDecorators || this.options.compat, this.useBlockParams = this.useBlockParams || y.useBlockParams;
        var O = y.opcodes, A = void 0, j = void 0, E = void 0, N = void 0;
        for (E = 0, N = O.length; E < N; E++)
          A = O[E], this.source.currentLocation = A.loc, j = j || A.loc, this[A.opcode].apply(this, A.args);
        if (this.source.currentLocation = j, this.pushSource(""), this.stackSlot || this.inlineStack.length || this.compileStack.length)
          throw new u.default("Compile completed with content left on stack");
        this.decorators.isEmpty() ? this.decorators = void 0 : (this.useDecorators = !0, this.decorators.prepend(["var decorators = container.decorators, ", this.lookupPropertyFunctionVarDeclaration(), `;
`]), this.decorators.push("return fn;"), C ? this.decorators = Function.apply(this, ["fn", "props", "container", "depth0", "data", "blockParams", "depths", this.decorators.merge()]) : (this.decorators.prepend(`function(fn, props, container, depth0, data, blockParams, depths) {
`), this.decorators.push(`}
`), this.decorators = this.decorators.merge()));
        var k = this.createFunctionContext(C);
        if (this.isChild)
          return k;
        var L = {
          compiler: this.compilerInfo(),
          main: k
        };
        this.decorators && (L.main_d = this.decorators, L.useDecorators = !0);
        var V = this.context, W = V.programs, H = V.decorators;
        for (E = 0, N = W.length; E < N; E++)
          W[E] && (L[E] = W[E], H[E] && (L[E + "_d"] = H[E], L.useDecorators = !0));
        return this.environment.usePartial && (L.usePartial = !0), this.options.data && (L.useData = !0), this.useDepths && (L.useDepths = !0), this.useBlockParams && (L.useBlockParams = !0), this.options.compat && (L.compat = !0), C ? L.compilerOptions = this.options : (L.compiler = JSON.stringify(L.compiler), this.source.currentLocation = { start: { line: 1, column: 0 } }, L = this.objectLiteral(L), d.srcName ? (L = L.toStringWithSourceMap({ file: d.destName }), L.map = L.map && L.map.toString()) : L = L.toString()), L;
      },
      preamble: function() {
        this.lastContext = 0, this.source = new h.default(this.options.srcName), this.decorators = new h.default(this.options.srcName);
      },
      createFunctionContext: function(y) {
        var d = this, x = "", C = this.stackVars.concat(this.registers.list);
        C.length > 0 && (x += ", " + C.join(", "));
        var O = 0;
        Object.keys(this.aliases).forEach(function(E) {
          var N = d.aliases[E];
          N.children && N.referenceCount > 1 && (x += ", alias" + ++O + "=" + E, N.children[0] = "alias" + O);
        }), this.lookupPropertyFunctionIsUsed && (x += ", " + this.lookupPropertyFunctionVarDeclaration());
        var A = ["container", "depth0", "helpers", "partials", "data"];
        (this.useBlockParams || this.useDepths) && A.push("blockParams"), this.useDepths && A.push("depths");
        var j = this.mergeSource(x);
        return y ? (A.push(j), Function.apply(this, A)) : this.source.wrap(["function(", A.join(","), `) {
  `, j, "}"]);
      },
      mergeSource: function(y) {
        var d = this.environment.isSimple, x = !this.forceBuffer, C = void 0, O = void 0, A = void 0, j = void 0;
        return this.source.each(function(E) {
          E.appendToBuffer ? (A ? E.prepend("  + ") : A = E, j = E) : (A && (O ? A.prepend("buffer += ") : C = !0, j.add(";"), A = j = void 0), O = !0, d || (x = !1));
        }), x ? A ? (A.prepend("return "), j.add(";")) : O || this.source.push('return "";') : (y += ", buffer = " + (C ? "" : this.initializeBuffer()), A ? (A.prepend("return buffer + "), j.add(";")) : this.source.push("return buffer;")), y && this.source.prepend("var " + y.substring(2) + (C ? "" : `;
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
        var d = this.aliasable("container.hooks.blockHelperMissing"), x = [this.contextName(0)];
        this.setupHelperArgs(y, 0, x);
        var C = this.popStack();
        x.splice(1, 0, C), this.push(this.source.functionCall(d, "call", x));
      },
      // [ambiguousBlockValue]
      //
      // On stack, before: hash, inverse, program, value
      // Compiler value, before: lastHelper=value of last found helper, if any
      // On stack, after, if no lastHelper: same as [blockValue]
      // On stack, after, if lastHelper: value
      ambiguousBlockValue: function() {
        var y = this.aliasable("container.hooks.blockHelperMissing"), d = [this.contextName(0)];
        this.setupHelperArgs("", 0, d, !0), this.flushInline();
        var x = this.topStack();
        d.splice(1, 0, x), this.pushSource(["if (!", this.lastHelper, ") { ", x, " = ", this.source.functionCall(y, "call", d), "}"]);
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
          this.replaceStack(function(d) {
            return [" != null ? ", d, ' : ""'];
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
      lookupOnContext: function(y, d, x, C) {
        var O = 0;
        !C && this.options.compat && !this.lastContext ? this.push(this.depthedLookup(y[O++])) : this.pushContext(), this.resolvePath("context", y, O, d, x);
      },
      // [lookupBlockParam]
      //
      // On stack, before: ...
      // On stack, after: blockParam[name], ...
      //
      // Looks up the value of `parts` on the given block param and pushes
      // it onto the stack.
      lookupBlockParam: function(y, d) {
        this.useBlockParams = !0, this.push(["blockParams[", y[0], "][", y[1], "]"]), this.resolvePath("context", d, 1);
      },
      // [lookupData]
      //
      // On stack, before: ...
      // On stack, after: data, ...
      //
      // Push the data lookup operator
      lookupData: function(y, d, x) {
        y ? this.pushStackLiteral("container.data(data, " + y + ")") : this.pushStackLiteral("data"), this.resolvePath("data", d, 0, !0, x);
      },
      resolvePath: function(y, d, x, C, O) {
        var A = this;
        if (this.options.strict || this.options.assumeObjects) {
          this.push(S(this.options.strict && O, this, d, x, y));
          return;
        }
        for (var j = d.length; x < j; x++)
          this.replaceStack(function(E) {
            var N = A.nameLookup(E, d[x], y);
            return C ? [" && ", N] : [" != null ? ", N, " : ", E];
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
      pushStringParam: function(y, d) {
        this.pushContext(), this.pushString(d), d !== "SubExpression" && (typeof y == "string" ? this.pushString(y) : this.pushStackLiteral(y));
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
      registerDecorator: function(y, d) {
        var x = this.nameLookup("decorators", d, "decorator"), C = this.setupHelperArgs(d, y);
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
      invokeHelper: function(y, d, x) {
        var C = this.popStack(), O = this.setupHelper(y, d), A = [];
        x && A.push(O.name), A.push(C), this.options.strict || A.push(this.aliasable("container.hooks.helperMissing"));
        var j = ["(", this.itemsSeparatedBy(A, "||"), ")"], E = this.source.functionCall(j, "call", O.callParams);
        this.push(E);
      },
      itemsSeparatedBy: function(y, d) {
        var x = [];
        x.push(y[0]);
        for (var C = 1; C < y.length; C++)
          x.push(d, y[C]);
        return x;
      },
      // [invokeKnownHelper]
      //
      // On stack, before: hash, inverse, program, params..., ...
      // On stack, after: result of helper invocation
      //
      // This operation is used when the helper is known to exist,
      // so a `helperMissing` fallback is not required.
      invokeKnownHelper: function(y, d) {
        var x = this.setupHelper(y, d);
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
      invokeAmbiguous: function(y, d) {
        this.useRegister("helper");
        var x = this.popStack();
        this.emptyHash();
        var C = this.setupHelper(0, y, d), O = this.lastHelper = this.nameLookup("helpers", y, "helper"), A = ["(", "(helper = ", O, " || ", x, ")"];
        this.options.strict || (A[0] = "(helper = ", A.push(" != null ? helper : ", this.aliasable("container.hooks.helperMissing"))), this.push(["(", A, C.paramsInit ? ["),(", C.paramsInit] : [], "),", "(typeof helper === ", this.aliasable('"function"'), " ? ", this.source.functionCall("helper", "call", C.callParams), " : helper))"]);
      },
      // [invokePartial]
      //
      // On stack, before: context, ...
      // On stack after: result of partial invocation
      //
      // This operation pops off a context, invokes a partial with that context,
      // and pushes the result of the invocation back.
      invokePartial: function(y, d, x) {
        var C = [], O = this.setupParams(d, 1, C);
        y && (d = this.popStack(), delete O.name), x && (O.indent = JSON.stringify(x)), O.helpers = "helpers", O.partials = "partials", O.decorators = "container.decorators", y ? C.unshift(d) : C.unshift(this.nameLookup("partials", d, "partial")), this.options.compat && (O.depths = "depths"), O = this.objectLiteral(O), C.push(O), this.push(this.source.functionCall("container.invokePartial", "", C));
      },
      // [assignToHash]
      //
      // On stack, before: value, ..., hash, ...
      // On stack, after: ..., hash, ...
      //
      // Pops a value off the stack and assigns it to the current hash
      assignToHash: function(y) {
        var d = this.popStack(), x = void 0, C = void 0, O = void 0;
        this.trackIds && (O = this.popStack()), this.stringParams && (C = this.popStack(), x = this.popStack());
        var A = this.hash;
        x && (A.contexts[y] = x), C && (A.types[y] = C), O && (A.ids[y] = O), A.values[y] = d;
      },
      pushId: function(y, d, x) {
        y === "BlockParam" ? this.pushStackLiteral("blockParams[" + d[0] + "].path[" + d[1] + "]" + (x ? " + " + JSON.stringify("." + x) : "")) : y === "PathExpression" ? this.pushString(d) : y === "SubExpression" ? this.pushStackLiteral("true") : this.pushStackLiteral("null");
      },
      // HELPERS
      compiler: v,
      compileChildren: function(y, d) {
        for (var x = y.children, C = void 0, O = void 0, A = 0, j = x.length; A < j; A++) {
          C = x[A], O = new this.compiler();
          var E = this.matchExistingProgram(C);
          if (E == null) {
            this.context.programs.push("");
            var N = this.context.programs.length;
            C.index = N, C.name = "program" + N, this.context.programs[N] = O.compile(C, d, this.context, !this.precompile), this.context.decorators[N] = O.decorators, this.context.environments[N] = C, this.useDepths = this.useDepths || O.useDepths, this.useBlockParams = this.useBlockParams || O.useBlockParams, C.useDepths = this.useDepths, C.useBlockParams = this.useBlockParams;
          } else
            C.index = E.index, C.name = "program" + E.index, this.useDepths = this.useDepths || E.useDepths, this.useBlockParams = this.useBlockParams || E.useBlockParams;
        }
      },
      matchExistingProgram: function(y) {
        for (var d = 0, x = this.context.environments.length; d < x; d++) {
          var C = this.context.environments[d];
          if (C && C.equals(y))
            return C;
        }
      },
      programExpression: function(y) {
        var d = this.environment.children[y], x = [d.index, "data", d.blockParams];
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
        var d = ["("], x = void 0, C = void 0, O = void 0;
        if (!this.isInline())
          throw new u.default("replaceStack on non-inline");
        var A = this.popStack(!0);
        if (A instanceof p)
          x = [A.value], d = ["(", x], O = !0;
        else {
          C = !0;
          var j = this.incrStack();
          d = ["((", this.push(j), " = ", A, ")"], x = this.topStack();
        }
        var E = y.call(this, x);
        O || this.popStack(), C && this.stackSlot--, this.push(d.concat(E, ")"));
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
        for (var d = 0, x = y.length; d < x; d++) {
          var C = y[d];
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
        var d = this.isInline(), x = (d ? this.inlineStack : this.compileStack).pop();
        if (!y && x instanceof p)
          return x.value;
        if (!d) {
          if (!this.stackSlot)
            throw new u.default("Invalid stack pop");
          this.stackSlot--;
        }
        return x;
      },
      topStack: function() {
        var y = this.isInline() ? this.inlineStack : this.compileStack, d = y[y.length - 1];
        return d instanceof p ? d.value : d;
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
        var d = this.aliases[y];
        return d ? (d.referenceCount++, d) : (d = this.aliases[y] = this.source.wrap(y), d.aliasable = !0, d.referenceCount = 1, d);
      },
      setupHelper: function(y, d, x) {
        var C = [], O = this.setupHelperArgs(d, y, C, x), A = this.nameLookup("helpers", d, "helper"), j = this.aliasable(this.contextName(0) + " != null ? " + this.contextName(0) + " : (container.nullContext || {})");
        return {
          params: C,
          paramsInit: O,
          name: A,
          callParams: [j].concat(C)
        };
      },
      setupParams: function(y, d, x) {
        var C = {}, O = [], A = [], j = [], E = !x, N = void 0;
        E && (x = []), C.name = this.quotedString(y), C.hash = this.popStack(), this.trackIds && (C.hashIds = this.popStack()), this.stringParams && (C.hashTypes = this.popStack(), C.hashContexts = this.popStack());
        var k = this.popStack(), L = this.popStack();
        (L || k) && (C.fn = L || "container.noop", C.inverse = k || "container.noop");
        for (var V = d; V--; )
          N = this.popStack(), x[V] = N, this.trackIds && (j[V] = this.popStack()), this.stringParams && (A[V] = this.popStack(), O[V] = this.popStack());
        return E && (C.args = this.source.generateArray(x)), this.trackIds && (C.ids = this.source.generateArray(j)), this.stringParams && (C.types = this.source.generateArray(A), C.contexts = this.source.generateArray(O)), this.options.data && (C.data = "data"), this.useBlockParams && (C.blockParams = "blockParams"), C;
      },
      setupHelperArgs: function(y, d, x, C) {
        var O = this.setupParams(y, d, x);
        return O.loc = JSON.stringify(this.source.currentLocation), O = this.objectLiteral(O), C ? (this.useRegister("options"), x.push("options"), ["options=", O]) : x ? (x.push(O), "") : O;
      }
    }, (function() {
      for (var g = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield await null true false".split(" "), y = v.RESERVED_WORDS = {}, d = 0, x = g.length; d < x; d++)
        y[g[d]] = !0;
    })(), v.isValidJavaScriptVariableName = function(g) {
      return !v.RESERVED_WORDS[g] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(g);
    };
    function S(g, y, d, x, C) {
      var O = y.popStack(), A = d.length;
      for (g && A--; x < A; x++)
        O = y.nameLookup(O, d[x], C);
      return g ? [y.aliasable("container.strict"), "(", O, ", ", y.quotedString(d[x]), ", ", JSON.stringify(y.source.currentLocation), " )"] : O;
    }
    a.default = v, r.exports = a.default;
  })(Ao, Ao.exports)), Ao.exports;
}
var Nv;
function P_() {
  return Nv || (Nv = 1, (function(r, a) {
    a.__esModule = !0;
    function l(A) {
      return A && A.__esModule ? A : { default: A };
    }
    var s = A_(), c = l(s), u = Sy(), b = l(u), m = O_(), h = D_(), p = H_(), v = l(p), S = _y(), g = l(S), y = by(), d = l(y), x = c.default.create;
    function C() {
      var A = x();
      return A.compile = function(j, E) {
        return h.compile(j, E, A);
      }, A.precompile = function(j, E) {
        return h.precompile(j, E, A);
      }, A.AST = b.default, A.Compiler = h.Compiler, A.JavaScriptCompiler = v.default, A.Parser = m.parser, A.parse = m.parse, A.parseWithoutProcessing = m.parseWithoutProcessing, A;
    }
    var O = C();
    O.create = C, d.default(O), O.Visitor = g.default, O.default = O, a.default = O, r.exports = a.default;
  })(ao, ao.exports)), ao.exports;
}
var ra = P_();
function vi(r, a) {
  ra.helpers[r] || ra.registerHelper(r, a);
}
vi("add", (r, a) => Number(r) + Number(a));
vi("join", (r, a) => Array.isArray(r) ? r.join(typeof a == "string" ? a : ", ") : "");
vi("is_not_empty", function(r, a) {
  return r ? Array.isArray(r) ? r.length > 0 ? a.fn(this) : a.inverse(this) : typeof r == "object" && Object.keys(r).length > 0 ? a.fn(this) : typeof r != "object" && !Array.isArray(r) ? a.fn(this) : a.inverse(this) : a.inverse(this);
});
vi("indent", (r, a) => {
  const l = " ".repeat(Math.max(0, Number(r) || 0));
  return String(a ?? "").split(`
`).join(`
${l}`);
});
vi("json", (r) => JSON.stringify(r));
vi(
  "xmlEscape",
  (r) => String(r ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
);
const Ba = SillyTavern.getContext(), Ln = [
  "name",
  "description",
  "personality",
  "scenario",
  "first_mes",
  "mes_example"
], Nn = {
  name: "Name",
  description: "Description",
  personality: "Personality",
  scenario: "Scenario",
  first_mes: "First Message",
  mes_example: "Example Dialogue"
}, q_ = {
  name: `A short, evocative character name. Aim for 2-6 words. Strong example: "Kaelen, the Whisperwood Scout". Weak example: "Xy'zth'gor" (hard to spell/pronounce).`,
  description: 'A single concise paragraph (~200-350 words / ~300 tokens) blending appearance, demeanor, and one memorable quirk. Strong example: "A tall, graceful woman with bronze hair and startling green eyes, carrying herself with the quiet dignity of a noble and the focused intensity of a warrior. A member of a secretive matriarchal order, she is a master of subtle influence and a formidable political strategist. Though her exterior is composed and serene, she is fiercely protective of those she loves."',
  personality: `Direct, declarative statements about motivations, fears, moral alignment, behavioral traits. No contradictions. ~200-400 words / ~350 tokens. Strong example: "A supreme pragmatist who believes a functioning society is more important than a moral one. Masterfully manipulative, he remains several steps ahead of allies and enemies alike, viewing people as pieces on a chessboard to be positioned for the city's greater good. He abhors chaos and inefficiency above all else, maintaining a calm, detached, and unnervingly still demeanor that forces others to fill the silence. He never raises his voice, preferring to convey threats with quiet, measured words."`,
  scenario: `Sets the scene in ~150-300 words / ~250 tokens: where, when, what is happening, and the initial {{char}}/{{user}} relationship. Strong example: "The setting is a grimy, unsupervised slum in a sprawling metropolis, a place where illegal commerce thrives. The sky is the color of a dead television channel. {{char}} is a 'console cowboy,' a disgraced data thief whose nervous system was damaged as punishment for stealing from an employer. {{user}} is a mysterious mercenary who has tracked {{char}} down to offer a cure in exchange for one last, impossible job."`,
  first_mes: `The character's opening line. ~150-400 words / ~350 tokens. Open with a physical action, include dialogue that reveals personality, end with a hook that prompts {{user}}'s response. Use {{char}} and {{user}}. Strong example: '*{{char}} calmly watches the spinning ceiling fan, the smoke from his cigarette curling into the stagnant air. He doesn't meet {{user}}'s eyes, instead focusing on the condensation on his glass.* "They're just questions. It's a test, designed to provoke an emotional response. Shall we continue?"'`,
  mes_example: 'A 2-3 turn style guide (~300-600 words / ~500 tokens) showing how the character speaks and acts. Separate example chunks with a `<START>` line. Use {{user}} and {{char}}. Mix *asterisk actions* with dialogue. Strong example: `<START>\\n{{user}}: "What makes you think your plan will work?"\\n{{char}}: *A slow, confident smirk spreads across her face as she leans back in her chair, boots resting on the scarred metal desk.* "Because I accounted for every variable. Especially the human one—your greed."\\n\\n{{user}}: "I\'m not sure I can do this."\\n{{char}}: *Her expression softens for a brief moment. She places a reassuring hand on {{user}}\'s shoulder, her calloused fingers a surprising comfort.* "Fear is just a signal. It tells you what you need to protect. Now, let\'s protect it together."`'
};
async function I_({
  profileId: r,
  userPrompt: a,
  buildPromptOptions: l,
  continueFrom: s,
  generationMode: c = "generate",
  existingContent: u,
  session: b,
  allCharacters: m,
  entriesGroupByWorldName: h,
  promptSettings: p,
  formatDescription: v,
  mainContextList: S,
  includeUserMacro: g,
  maxResponseToken: y,
  fieldMaxResponseTokens: d,
  useWorldInfoActivationScan: x,
  targetField: C,
  outputFormat: O
}) {
  if (!r)
    throw new Error("No connection profile selected.");
  const A = Ba.extensionSettings.connectionManager?.profiles?.find((D) => D.id === r);
  if (!A)
    throw new Error(`Connection profile with ID "${r}" not found.`);
  const j = A.api ? Ba.CONNECT_API_MAP[A.api].selected : void 0;
  if (!j)
    throw new Error(`Could not determine API for profile "${A.name}".`);
  const E = f_(
    C,
    y,
    d
  ), N = {};
  N.char = b.fields.name.value ?? "{{char}}", N.user = g && aa ? aa : "{{user}}";
  const k = g ? Ba.power_user?.persona_description : void 0;
  N.persona = k && k.trim() ? k : "{{persona}}", N.targetField = C, N.fieldGuidance = q_[C] ?? "No specific guidance for this field. Use the surrounding context.", N.userInstructions = ra.compile(a.trim(), { noEscape: !0 })(N), N.fieldSpecificInstructions = ra.compile(
    b.draftFields[C]?.prompt ?? b.fields[C]?.prompt,
    { noEscape: !0 }
  )({
    ...N,
    char: C === "mes_example" ? "{{char}}" : N.char,
    user: C === "mes_example" ? "{{user}}" : N.user
  }), N.activeFormatInstructions = ra.compile(v.content, { noEscape: !0 })(
    N
  );
  {
    const D = [];
    b.selectedCharacterIndexes.forEach((F) => {
      const te = parseInt(F), ae = m[te];
      ae && D.push(ae);
    }), N.characters = D;
  }
  {
    const D = {};
    let F = null;
    if (x)
      try {
        const te = Ba.checkWorldInfo;
        if (typeof te == "function") {
          const ae = Ba.chat ?? [], ee = l.maxContext ?? 16384, he = await te(ae, ee, !0), se = he && (he.entries ?? he.value ?? he.activatedEntries ?? he);
          if (se && typeof se == "object") {
            const Xe = [], Ae = (Je) => {
              Je && typeof Je.uid == "number" && Xe.push(Je.uid);
            };
            Array.isArray(se) ? se.forEach(Ae) : typeof se == "object" && (Array.isArray(se.entries) ? se.entries.forEach(Ae) : Object.values(se).forEach((Je) => {
              Array.isArray(Je) ? Je.forEach(Ae) : Ae(Je);
            })), Xe.length > 0 && (F = new Set(Xe));
          }
        } else
          Te(
            "info",
            "[Character Creator] World Info activation scan requested but this SillyTavern version does not expose checkWorldInfo(); sending all enabled entries of selected lorebooks instead."
          );
      } catch (te) {
        console.error("[Character Creator] WI activation scan failed; falling back to all-enabled-entries:", te), F = null;
      }
    Object.entries(h).filter(
      ([te, ae]) => ae.length > 0 && b.selectedWorldNames.includes(te) && ae.some((ee) => !ee.disable)
    ).forEach(([te, ae]) => {
      let ee = ae.filter((he) => !he.disable);
      F !== null && (ee = ee.filter((he) => F.has(he.uid))), ee.length > 0 && (D[te] = ee);
    }), N.lorebooks = D;
  }
  {
    const D = {}, F = {}, te = {}, ae = C.startsWith("alternate_greetings_"), ee = sn.getSettings().contextToSend.dontSendOtherGreetings;
    Object.entries(b.fields).forEach(([se, Xe]) => {
      let Ae = !1;
      if (ee) {
        const Je = se.startsWith("alternate_greetings_");
        ae ? Ae = Je && se !== C || se === "first_mes" : Ae = Je;
      }
      if (!Ae) {
        const Je = ra.compile(Xe.value, { noEscape: !0 })({
          ...N,
          char: se === "mes_example" ? "{{char}}" : N.char,
          user: se === "mes_example" ? "{{user}}" : N.user
        });
        Ln.includes(se) ? D[Xe.label] = Je : se.startsWith("alternate_greetings_") && (F[se] = Je);
      }
    }), Object.entries(b.draftFields || {}).forEach(([se, Xe]) => {
      te[Xe.label] = ra.compile(Xe.value, { noEscape: !0 })(N);
    });
    const he = {};
    Object.keys(D).length > 0 && (he.core = D), Object.keys(F).length > 0 && (he.alternate_greetings = F), Object.keys(te).length > 0 && (he.draft = te), N.fields = he;
  }
  const L = [], V = [], W = u ?? s, H = s && c === "generate" ? "continue" : c, X = H === "continue" && !!W;
  {
    for (const D of S) {
      if (D.promptName === "chatHistory") {
        const he = await kb(j, l);
        if (he.warnings && he.warnings.length > 0)
          for (const se of he.warnings)
            Te("warning", se);
        L.push(...he.result), V.push(...he.result.map((se) => ({ role: se.role, content: se.content })));
        continue;
      }
      const te = D.promptName === "stDescription" ? { ...N, char: "{{char}}", user: "{{user}}" } : N, ae = p[D.promptName];
      if (!ae)
        continue;
      const ee = {
        role: D.role,
        content: ra.compile(ae.content, { noEscape: !0 })(te)
      };
      ee.content = ee.content.replaceAll("{{user}}", "[[[crec_veryUniqueUserPlaceHolder]]]"), ee.content = ee.content.replaceAll("{{char}}", "[[[crec_veryUniqueCharPlaceHolder]]]"), ee.content = Ba.substituteParams(ee.content), ee.content = ee.content.replaceAll("[[[crec_veryUniqueUserPlaceHolder]]]", "{{user}}"), ee.content = ee.content.replaceAll("[[[crec_veryUniqueCharPlaceHolder]]]", "{{char}}"), ee.content && (L.push(ee), V.push({ role: ee.role, content: ee.content }));
    }
    if (X && W) {
      const D = Hg(W, O);
      L.push({
        role: "assistant",
        content: D
      }), V.push({ role: "assistant", content: D });
    } else if ((H === "revise" || H === "improve") && W) {
      const D = H === "revise" ? N.fieldSpecificInstructions?.trim() : "", F = H === "improve" ? "Rewrite the existing content below to improve its quality, clarity, internal consistency, and stylistic polish. Preserve the original intent, facts, and character voice. Do not introduce new facts, traits, or relationships that are not already implied. Return only the rewritten content, in the same output format as the existing content." : `Revise the existing content below per the user's direction. Stay faithful to intent and facts already established; only change what the feedback asks for. Return only the revised content, in the same output format as the existing content.

User's revision direction:
${D || "(no specific direction given — clean up and tighten only)"}`;
      L.push({
        role: "user",
        content: `${F}

--- EXISTING CONTENT ---
${W}
--- END EXISTING CONTENT ---`
      }), V.push({
        role: "user",
        content: `${F}

--- EXISTING CONTENT ---
${W}
--- END EXISTING CONTENT ---`
      });
    }
  }
  const Q = (/* @__PURE__ */ new Date()).toISOString(), le = await Ba.ConnectionManagerRequestService.sendRequest(
    r,
    L,
    E
  ), oe = (/* @__PURE__ */ new Date()).toISOString(), de = X && W ? Hg(W, O) + le.content : le.content, z = u_(de, O, {
    onRecovery: (D) => {
      Te("warning", `[Character Creator] ${D}. Open the Debug View for this field to inspect the raw response.`);
    }
  });
  let re;
  if (typeof z == "string")
    re = z;
  else if (typeof z == "object" && z !== null)
    if ("response" in z && typeof z.response == "string")
      re = z.response;
    else {
      const D = Object.values(z)[0];
      re = D ? String(D) : "";
    }
  else
    re = "";
  const je = sn.getSettings().showDebugView ? {
    targetField: C,
    outputFormat: O,
    continueFrom: s,
    generationMode: H,
    messages: V,
    rawResponse: le.content,
    parsedContent: re,
    startedAt: Q,
    finishedAt: oe,
    profileId: r
  } : null;
  return { content: re, debug: je };
}
const pr = "SillyTavern-Character-Creator", Ay = "0.4.1", G_ = "F_2.1", V_ = {
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
], ct = {
  stDescription: Qf,
  charDefinitions: Zf,
  lorebookDefinitions: oy,
  xmlFormat: lS,
  jsonFormat: sS,
  noneFormat: oS,
  worldInfoCharDefinition: uy,
  existingFieldDefinitions: Ll,
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
      content: ct.stDescription,
      isDefault: !0,
      label: "ST/Char Card Description"
    },
    charDefinitions: {
      content: ct.charDefinitions,
      isDefault: !0,
      label: "Character Definition Template"
    },
    lorebookDefinitions: {
      content: ct.lorebookDefinitions,
      isDefault: !0,
      label: "Lorebook Definition Template"
    },
    xmlFormat: {
      content: ct.xmlFormat,
      isDefault: !0,
      label: "XML Format Description"
    },
    jsonFormat: {
      content: ct.jsonFormat,
      isDefault: !0,
      label: "JSON Format Description"
    },
    noneFormat: {
      content: ct.noneFormat,
      isDefault: !0,
      label: "Plain Text Format Description"
    },
    worldInfoCharDefinition: {
      content: ct.worldInfoCharDefinition,
      isDefault: !0,
      label: "World Info Character Definition Template"
    },
    existingFieldDefinitions: {
      content: Ll,
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
      content: ct.personaDescription,
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
  return l.map((c, u) => {
    const b = c.replace(/^\d+/, "");
    if (b) {
      const m = s ? `${b[0].toUpperCase()}${b.slice(1).toLowerCase()}` : b.toLowerCase();
      return s || (s = !0), m;
    }
    return "";
  }).join("");
}
const sn = new M2(V_.EXTENSION, Ty);
async function Y_() {
  return new Promise((r, a) => {
    sn.initializeSettings({
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
                  content: ct.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: ct.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                lorebookDefinitions: {
                  content: ct.lorebookDefinitions,
                  isDefault: !0,
                  label: "Lorebook Definition Template"
                },
                xmlFormat: {
                  content: ct.xmlFormat,
                  isDefault: !0,
                  label: "XML Format Description"
                },
                jsonFormat: {
                  content: ct.jsonFormat,
                  isDefault: !0,
                  label: "JSON Format Description"
                },
                noneFormat: {
                  content: ct.noneFormat,
                  isDefault: !0,
                  label: "Plain Text Format Description"
                },
                worldInfoCharDefinition: {
                  content: ct.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: Ll,
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
                  content: ct.personaDescription,
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
                  content: ct.personaDescription,
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
            return await Te("info", `[${pr}] Added Alternate Greetings.`), {
              ...l,
              prompts: {
                ...l?.prompts,
                stDescription: {
                  content: ct.stDescription,
                  isDefault: !0,
                  label: "ST/Char Card Description"
                },
                charDefinitions: {
                  content: ct.charDefinitions,
                  isDefault: !0,
                  label: "Character Definition Template"
                },
                worldInfoCharDefinition: {
                  content: ct.worldInfoCharDefinition,
                  isDefault: !0,
                  label: "World Info Character Definition Template"
                },
                existingFieldDefinitions: {
                  content: Ll,
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
            return l.prompts.charDefinitions.isDefault && (s.prompts.charDefinitions.content = Zf), l.prompts.lorebookDefinitions.isDefault && (s.prompts.lorebookDefinitions.content = oy), l.prompts.existingFieldDefinitions.isDefault && (s.prompts.existingFieldDefinitions.content = Ll), s;
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
            const s = { ...l }, c = s.prompts ?? {};
            return delete s.defaultPromptEngineeringMode, delete c.reviseJsonPrompt, delete c.reviseXmlPrompt, delete c.reviseTaskDescription, s.prompts = c, s.showDebugView = !1, s;
          }
        },
        {
          from: "F_2.0",
          to: "F_2.1",
          action(l) {
            const s = { ...l }, c = [
              "stDescription",
              "charDefinitions",
              "lorebookDefinitions",
              "existingFieldDefinitions",
              "personaDescription",
              "chatHistory",
              "outputFormatInstructions",
              "taskDescription"
            ], b = (s.mainContextTemplatePresets?.default ?? { prompts: [] }).prompts ?? [], m = new Map(b.map((p) => [p.promptName, p])), h = c.map((p) => {
              const v = m.get(p);
              return v ? (m.delete(p), v) : {
                enabled: !0,
                promptName: p,
                role: p === "taskDescription" ? "user" : "system"
              };
            });
            for (const p of m.values())
              h.push(p);
            return s.mainContextTemplatePresets = {
              ...s.mainContextTemplatePresets,
              default: { prompts: h }
            }, s.fieldMaxResponseTokens === void 0 && (s.fieldMaxResponseTokens = {}), s.useWorldInfoActivationScan === void 0 && (s.useWorldInfoActivationScan = !1), s;
          }
        }
      ]
    }).then((l) => {
      r();
    }).catch((l) => {
      console.error(`[${pr}] Error initializing settings:`, l), Te("error", `[${pr}] Failed to initialize settings: ${l.message}`), Ba.Popup.show.confirm(
        `[${pr}] Failed to load settings. This might be due to an update. Reset settings to default?`,
        "Extension Error"
      ).then((s) => {
        s && (sn.resetSettings(), Te("success", `[${pr}] Settings reset. Reloading may be required.`), r());
      });
    });
  });
}
const Ne = ({ children: r, className: a, overrideDefaults: l = !1, ...s }) => {
  const c = ne.useMemo(() => {
    const u = [];
    return l || u.push("menu_button", "interactable"), u.push(a), u.filter(Boolean).join(" ");
  }, [l, a]);
  return /* @__PURE__ */ T.jsx("button", { className: c, ...s, children: r });
}, F_ = ({ label: r, className: a, overrideDefaults: l = !1, type: s = "text", ...c }) => {
  const u = ne.useMemo(() => {
    const b = [];
    return l || (s === "text" || s === "number" || s === "password" || s === "email" || s === "search") && b.push("text_pole"), b.push(a), b.filter(Boolean).join(" ");
  }, [l, a, s]);
  if (s === "checkbox") {
    const b = l ? a : `checkbox_label ${a ?? ""}`.trim();
    return /* @__PURE__ */ T.jsxs("label", { className: b, children: [
      /* @__PURE__ */ T.jsx("input", { type: "checkbox", ...c }),
      r && /* @__PURE__ */ T.jsx("span", { children: r })
    ] });
  }
  return /* @__PURE__ */ T.jsx("input", { type: s, className: u, ...c });
}, Yo = ({ children: r, className: a, overrideDefaults: l = !1, ...s }) => {
  const c = ne.useMemo(() => {
    const u = [];
    return l || u.push("text_pole"), u.push(a), u.filter(Boolean).join(" ");
  }, [l, a]);
  return /* @__PURE__ */ T.jsx("select", { className: c, ...s, children: r });
}, Ny = ({ children: r, className: a, overrideDefaults: l = !1, ...s }) => {
  const c = ne.useMemo(() => {
    const u = [];
    return l || u.push("text_pole", "textarea_compact"), u.push(a), u.filter(Boolean).join(" ");
  }, [l, a]);
  return /* @__PURE__ */ T.jsx("textarea", { className: c, ...s, children: r });
};
var X_ = Uv(), Bn = /* @__PURE__ */ ((r) => (r[r.TEXT = 1] = "TEXT", r[r.CONFIRM = 2] = "CONFIRM", r[r.INPUT = 3] = "INPUT", r[r.DISPLAY = 4] = "DISPLAY", r))(Bn || {}), Ua = /* @__PURE__ */ ((r) => (r[r.AFFIRMATIVE = 1] = "AFFIRMATIVE", r[r.NEGATIVE = 0] = "NEGATIVE", r[r.CANCELLED = null] = "CANCELLED", r))(Ua || {});
const Q_ = SillyTavern.getContext(), eh = ({
  content: r,
  type: a,
  inputValue: l = "",
  options: s = {},
  preventEscape: c = !1,
  onComplete: u
}) => {
  var b;
  const m = ne.useRef(null), h = ne.useRef(null), [p, v] = ne.useState(!1), [S, g] = ne.useState(null), y = ne.useRef(Q_.uuidv4()), d = ne.useRef({
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
    const j = (E) => {
      E.preventDefault(), c || x(Ua.CANCELLED);
    };
    return A.addEventListener("cancel", j), d.current.dlg = A, d.current.mainInput = h.current, ii.util.popups.push(d.current), A.showModal || (A.classList.add("poly_dialog"), lg.registerDialog(A), new ResizeObserver((E) => {
      for (const N of E)
        lg.reposition(N.target);
    }).observe(A)), A.showModal(), sf(), () => {
      ig(ii.util.popups, d.current), sf(), A.removeEventListener("cancel", j);
    };
  }, []);
  const x = async (A) => {
    var j, E;
    let N = A;
    if (a === Bn.INPUT && (A >= Ua.AFFIRMATIVE ? N = (j = h.current) == null ? void 0 : j.value : A === Ua.NEGATIVE ? N = !1 : A === Ua.CANCELLED ? N = null : N = !1), (E = s.customInputs) != null && E.length) {
      const L = new Map(
        s.customInputs.map((V) => {
          var W;
          const H = (W = m.current) == null ? void 0 : W.querySelector(`#${V.id}`);
          return [H.id, H.checked];
        })
      );
      d.current.inputResults = L;
    }
    if (d.current.result = A, d.current.value = N, s.onClosing && !await s.onClosing(d.current)) {
      v(!0), d.current.value = void 0, d.current.result = void 0, d.current.inputResults = void 0;
      return;
    }
    v(!1), ii.util.lastResult = {
      value: N,
      result: A,
      inputResults: d.current.inputResults
    };
    const k = m.current;
    k && (k.setAttribute("closing", ""), sf(), p2(k, async () => {
      var L;
      if (k.close(), s.onClose && await s.onClose(d.current), ig(ii.util.popups, d.current), ii.util.popups.length > 0) {
        const V = (L = document.activeElement) == null ? void 0 : L.closest(".popup"), W = V?.getAttribute("data-id"), H = ii.util.popups.find((X) => X.id === W);
        H && H.lastFocus && H.lastFocus.focus();
      }
      u(N);
    }));
  }, C = (A) => {
    A.target instanceof HTMLElement && A.target !== m.current && (g(A.target), d.current.lastFocus = A.target);
  }, O = async (A) => {
  };
  return X_.createPortal(
    /* @__PURE__ */ T.jsx(
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
        children: /* @__PURE__ */ T.jsxs("div", { className: "popup-body", children: [
          /* @__PURE__ */ T.jsx("div", { className: "popup-content", children: r }),
          a === Bn.INPUT && /* @__PURE__ */ T.jsx(
            "textarea",
            {
              ref: h,
              className: "popup-input text_pole result-control auto-select",
              rows: s.rows ?? 1,
              defaultValue: l,
              "data-result": "1",
              "data-result-event": "submit"
            }
          ),
          s.customInputs && /* @__PURE__ */ T.jsx("div", { className: "popup-inputs", children: s.customInputs.map((A) => /* @__PURE__ */ T.jsxs("label", { className: "checkbox_label justifyCenter", htmlFor: A.id, children: [
            /* @__PURE__ */ T.jsx("input", { type: "checkbox", id: A.id, defaultChecked: A.defaultState }),
            /* @__PURE__ */ T.jsx("span", { "data-i18n": A.label, children: A.label }),
            A.tooltip && /* @__PURE__ */ T.jsx(
              "div",
              {
                className: "fa-solid fa-circle-info opacity50p",
                title: A.tooltip,
                "data-i18n": `[title]${A.tooltip}`
              }
            )
          ] }, A.id)) }),
          a !== Bn.DISPLAY && /* @__PURE__ */ T.jsxs("div", { className: "popup-controls", children: [
            (b = s.customButtons) == null ? void 0 : b.map((A, j) => {
              const E = typeof A == "string" ? { text: A, result: j + 2 } : A;
              return /* @__PURE__ */ T.jsx(
                "div",
                {
                  className: `menu_button popup-button-custom result-control ${E.classes ?? ""}`,
                  "data-result": E.result,
                  onClick: () => {
                    var N;
                    (N = E.action) == null || N.call(E), x(E.result ?? j + 2);
                  },
                  "data-i18n": E.text,
                  children: E.text
                },
                j
              );
            }),
            a !== Bn.DISPLAY && s.okButton !== !1 && /* @__PURE__ */ T.jsx(
              "div",
              {
                className: "popup-button-ok menu_button result-control",
                onClick: () => x(Ua.AFFIRMATIVE),
                "data-result": "1",
                children: typeof s.okButton == "string" ? s.okButton : "OK"
              }
            ),
            a !== Bn.DISPLAY && s.cancelButton !== !1 && /* @__PURE__ */ T.jsx(
              "div",
              {
                className: "popup-button-cancel menu_button result-control",
                onClick: () => x(Ua.NEGATIVE),
                "data-result": "0",
                children: typeof s.cancelButton == "string" ? s.cancelButton : "Cancel"
              }
            )
          ] }),
          a === Bn.DISPLAY && /* @__PURE__ */ T.jsx(
            "div",
            {
              className: "popup-button-close right_menu_button fa-solid fa-circle-xmark",
              onClick: () => x(Ua.CANCELLED),
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
}, Cl = (r, a, l) => {
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
}, na = SillyTavern.getContext(), Z_ = ({
  initialSelectedProfileId: r,
  allowedTypes: a = { openai: "Chat Completion", textgenerationwebui: "Text Completion" },
  placeholder: l = "Select a Connection Profile",
  onChange: s,
  onCreate: c,
  onUpdate: u,
  onDelete: b
}) => {
  const [m, h] = ne.useState(r ?? ""), [p, v] = ne.useState(Date.now()), { isEnabled: S, profiles: g, connectApiMap: y } = ne.useMemo(() => {
    var C, O;
    return (C = na.extensionSettings.disabledExtensions) != null && C.includes("connection-manager") ? (console.error("Connection Manager extension is disabled."), { isEnabled: !1, profiles: [], connectApiMap: {} }) : {
      isEnabled: !0,
      profiles: ((O = na.extensionSettings.connectionManager) == null ? void 0 : O.profiles) ?? [],
      connectApiMap: na.CONNECT_API_MAP
    };
  }, [p]);
  ne.useEffect(() => {
    if (!S) return;
    const C = (j) => {
      Cl(j, a, y) && (v(Date.now()), c?.(j));
    }, O = (j, E) => {
      const N = Cl(j, a, y), k = Cl(E, a, y);
      (N || k) && v(Date.now()), u?.(j, E), m === j.id && !k && (h(""), s?.(void 0));
    }, A = (j) => {
      Cl(j, a, y) && (v(Date.now()), b?.(j), m === j.id && (h(""), s?.(void 0)));
    };
    return na.eventSource.on("CONNECTION_PROFILE_CREATED", C), na.eventSource.on("CONNECTION_PROFILE_UPDATED", O), na.eventSource.on("CONNECTION_PROFILE_DELETED", A), () => {
      na.eventSource.removeListener("CONNECTION_PROFILE_CREATED", C), na.eventSource.removeListener("CONNECTION_PROFILE_UPDATED", O), na.eventSource.removeListener("CONNECTION_PROFILE_DELETED", A);
    };
  }, [S, m, a, y, s, c, u, b]);
  const d = ne.useMemo(() => {
    if (!S) return [];
    const C = g.filter((A) => Cl(A, a, y)), O = {};
    for (const [A, j] of Object.entries(a))
      O[A] = { label: j, profiles: [] };
    for (const A of C) {
      const j = y[A.api];
      O[j.selected] && O[j.selected].profiles.push(A);
    }
    for (const A of Object.values(O))
      A.profiles.sort((j, E) => (j.name ?? "").localeCompare(E.name ?? ""));
    return Object.values(O).filter((A) => A.profiles.length > 0);
  }, [S, g, a, y]), x = ne.useCallback(
    (C) => {
      const O = C.target.value;
      h(O);
      const A = g.find((j) => j.id === O);
      s?.(A);
    },
    [g, s]
  );
  return S ? /* @__PURE__ */ T.jsxs(Yo, { value: m, onChange: x, children: [
    /* @__PURE__ */ T.jsx("option", { value: "", children: l }),
    d.map((C) => /* @__PURE__ */ T.jsx("optgroup", { label: C.label, children: C.profiles.map((O) => /* @__PURE__ */ T.jsx("option", { value: O.id, children: O.name }, O.id)) }, C.label))
  ] }) : /* @__PURE__ */ T.jsx(Yo, { disabled: !0, value: "", children: /* @__PURE__ */ T.jsx("option", { children: "Connection Manager disabled" }) });
}, K_ = Uo.memo(
  ({ item: r, showToggleButton: a, showDeleteButton: l, showSelectInput: s, onToggle: c, onDelete: u, onSelectChange: b }) => {
    const {
      id: m,
      label: h,
      enabled: p,
      canDelete: v = !0,
      canToggle: S = !0,
      showSelect: g = !0,
      canSelect: y = !0,
      selectOptions: d = [],
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
    return /* @__PURE__ */ T.jsxs("li", { className: "sortable-list-item", style: C, "data-id": m, children: [
      /* @__PURE__ */ T.jsx(
        "span",
        {
          className: "drag-handle fas fa-bars",
          style: { cursor: "grab", marginRight: "10px", color: "var(--SmartThemeBodyColor, #555)", flexShrink: 0 }
        }
      ),
      /* @__PURE__ */ T.jsx(
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
          children: h
        }
      ),
      s && g && y && /* @__PURE__ */ T.jsx(
        Yo,
        {
          value: x,
          onChange: (j) => b(m, j.target.value),
          disabled: !p,
          style: { marginRight: "10px", flexShrink: 0, width: "unset" },
          children: d.length === 0 ? /* @__PURE__ */ T.jsx("option", { disabled: !0, children: "--" }) : d.map((j) => /* @__PURE__ */ T.jsx("option", { value: j.value, children: j.label }, j.value))
        }
      ),
      s && (!g || !y) && /* @__PURE__ */ T.jsx("span", { style: A }),
      a && S && /* @__PURE__ */ T.jsx(
        Ne,
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
          onClick: () => c(m)
        }
      ),
      a && !S && /* @__PURE__ */ T.jsx("span", { style: A }),
      l && v && /* @__PURE__ */ T.jsx(
        Ne,
        {
          overrideDefaults: !0,
          className: "delete-button fas fa-trash-can",
          style: {
            ...O,
            color: "var(--error-color, #f44336)",
            backgroundColor: "transparent",
            border: "none"
          },
          onClick: () => u(m)
        }
      ),
      l && !v && /* @__PURE__ */ T.jsx("span", { style: { ...A, marginRight: 0 } })
    ] });
  }
), J_ = ({
  items: r,
  onItemsChange: a,
  showToggleButton: l = !1,
  showDeleteButton: s = !1,
  showSelectInput: c = !1,
  sortableJsOptions: u = {}
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
    ...u,
    onEnd: (S) => {
      const { oldIndex: g, newIndex: y } = S;
      if (g === void 0 || y === void 0 || g === y)
        return;
      const d = Array.from(r), [x] = d.splice(g, 1);
      d.splice(y, 0, x), a(d);
    }
  })), () => {
    var S;
    (S = m.current) == null || S.destroy(), m.current = null;
  }), [r, a, u]);
  const h = (S) => {
    a(r.map((g) => g.id === S ? { ...g, enabled: !g.enabled } : g));
  }, p = (S) => {
    a(r.filter((g) => g.id !== S));
  }, v = (S, g) => {
    a(r.map((y) => y.id === S ? { ...y, selectValue: g } : y));
  };
  return /* @__PURE__ */ T.jsx("ul", { ref: b, className: "sortable-list", style: { listStyle: "none", padding: 0, margin: 0 }, children: r.map((S) => /* @__PURE__ */ T.jsx(
    K_,
    {
      item: S,
      showToggleButton: l,
      showDeleteButton: s,
      showSelectInput: c,
      onToggle: h,
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
  closeOnSelect: c = !1,
  multiple: u = !0,
  disabled: b = !1,
  onBeforeSelection: m,
  enableSearch: h = !1,
  searchPlaceholder: p = "Search...",
  searchNoResultsText: v = "No results found",
  searchFuseOptions: S,
  inputClasses: g,
  containerClasses: y
}) => {
  const [d, x] = ne.useState(!1), [C, O] = ne.useState(""), A = ne.useRef(null);
  ne.useEffect(() => {
    const L = (V) => {
      A.current && !A.current.contains(V.target) && x(!1);
    };
    return document.addEventListener("mousedown", L), () => document.removeEventListener("mousedown", L);
  }, []), ne.useEffect(() => {
    d || O("");
  }, [d]);
  const j = ne.useMemo(() => {
    if (!h) return null;
    const L = {
      includeScore: !1,
      threshold: 0.4,
      keys: ["label", "value"],
      ...S
    };
    return new gi(r, L);
  }, [r, h, S]), E = ne.useMemo(() => !h || !C.trim() || !j ? r : j.search(C.trim()).map((L) => L.item), [r, C, h, j]), N = async (L) => {
    let V;
    u ? V = a.includes(L) ? a.filter((W) => W !== L) : [...a, L] : V = a.includes(L) ? [] : [L], !(m && !await Promise.resolve(m(a, V))) && (l(V), c && x(!1));
  }, k = ne.useMemo(() => {
    var L;
    return a.length === 0 ? s : a.length === 1 ? ((L = r.find((V) => V.value === a[0])) == null ? void 0 : L.label) ?? a[0] : `${a.length} items selected`;
  }, [a, r, s]);
  return /* @__PURE__ */ T.jsxs(
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
        /* @__PURE__ */ T.jsxs(
          "div",
          {
            className: "fancy-dropdown-trigger",
            onClick: () => !b && x(!d),
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
              /* @__PURE__ */ T.jsx("span", { className: "fancy-dropdown-trigger-text", children: k }),
              /* @__PURE__ */ T.jsx("i", { className: `fas ${d ? "fa-chevron-up" : "fa-chevron-down"}`, style: { marginLeft: "8px" } })
            ]
          }
        ),
        d && /* @__PURE__ */ T.jsxs(
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
              h && /* @__PURE__ */ T.jsx(
                "div",
                {
                  style: {
                    padding: "8px",
                    borderBottom: "1px solid var(--border-color)",
                    position: "sticky",
                    top: 0,
                    backgroundColor: "inherit"
                  },
                  children: /* @__PURE__ */ T.jsx(
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
              /* @__PURE__ */ T.jsx("ul", { style: { listStyle: "none", margin: 0, padding: 0 }, children: E.length > 0 ? E.map((L) => /* @__PURE__ */ T.jsx(
                W_,
                {
                  item: L,
                  isSelected: a.includes(L.value),
                  onClick: N
                },
                L.value
              )) : /* @__PURE__ */ T.jsx(
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
}, W_ = Uo.memo(({ item: r, isSelected: a, onClick: l }) => {
  const [s, c] = ne.useState(!1);
  return /* @__PURE__ */ T.jsxs(
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
        /* @__PURE__ */ T.jsx("span", { children: r.label }),
        a && /* @__PURE__ */ T.jsx("i", { className: "checkmark fa-solid fa-check", style: { marginLeft: "8px" } })
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
  enableRename: m = !1,
  enableDelete: h = !1,
  onCreate: p,
  onRename: v,
  onDelete: S,
  buttons: g
}) => {
  const y = ne.useMemo(() => a.find((A) => A.value === r), [a, r]), d = ne.useCallback((A) => A ? l.includes(A) : !1, [l]), x = async () => {
    const A = await Rf.Popup.show.input(
      `Create a new ${s}`,
      `Please enter a name for the new ${s}:`,
      ""
    );
    if (!A || A.trim() === "") return;
    const j = A.trim();
    if (a.some((N) => N.value === j)) {
      await Te("warning", `A ${s} with this name already exists.`);
      return;
    }
    let E = { value: j, label: j };
    if (p) {
      const N = await Promise.resolve(p(j));
      if (!N.confirmed) return;
      N.value && (typeof N.value == "string" ? E = { value: N.value, label: N.value } : E = N.value);
    }
    u([...a, E]), c(E.value, r);
  }, C = async () => {
    if (!y) {
      await Te("warning", `Please select a ${s} to rename.`);
      return;
    }
    if (d(y.value)) {
      await Te("warning", `This ${s} cannot be renamed as it is read-only.`);
      return;
    }
    const A = await Rf.Popup.show.input(
      `Rename ${s}`,
      `Please enter a new name for "${y.label}":`,
      y.label
    );
    if (!A || A.trim() === "" || A.trim() === y.value) return;
    const j = A.trim();
    if (a.some((k) => k.value === j)) {
      await Te("warning", `A ${s} with this name already exists.`);
      return;
    }
    let E = { value: j, label: j };
    if (v) {
      const k = await Promise.resolve(v(y.value, j));
      if (!k.confirmed) return;
      k.value && (typeof k.value == "string" ? E = { value: k.value, label: k.value } : E = k.value);
    }
    const N = a.map((k) => k.value === y.value ? E : k);
    u(N), c(E.value, r);
  }, O = async () => {
    var A;
    if (!y) {
      await Te("warning", `Please select a ${s} to delete.`);
      return;
    }
    if (d(y.value)) {
      await Te("warning", `This ${s} cannot be deleted as it is read-only.`);
      return;
    }
    if (!await Rf.Popup.show.confirm(
      `Delete ${s}`,
      `Are you sure you want to delete "${y.label}"?`
    ) || S && !await Promise.resolve(S(y.value)))
      return;
    const j = a.findIndex((k) => k.value === y.value), E = a.filter((k) => k.value !== y.value);
    u(E);
    let N;
    if (E.length > 0) {
      const k = Math.min(j, E.length - 1);
      N = (A = E[k]) == null ? void 0 : A.value;
    }
    c(N, r);
  };
  return /* @__PURE__ */ T.jsxs("div", { className: "preset-select-container", style: { display: "flex", alignItems: "center" }, children: [
    /* @__PURE__ */ T.jsx(Yo, { value: r ?? "", onChange: (A) => c(A.target.value, r), children: a.map((A) => /* @__PURE__ */ T.jsx("option", { value: A.value, children: A.label }, A.value)) }),
    b && /* @__PURE__ */ T.jsx(
      Ne,
      {
        className: "fa-solid fa-file-circle-plus",
        title: `Create a new ${s}`,
        onClick: x,
        "data-i18n": `[title]Create a new ${s}`
      }
    ),
    m && /* @__PURE__ */ T.jsx(
      Ne,
      {
        className: "fa-solid fa-pencil",
        title: `Rename selected ${s}`,
        onClick: C,
        disabled: !y,
        "data-i18n": `[title]Rename selected ${s}`
      }
    ),
    h && /* @__PURE__ */ T.jsx(
      Ne,
      {
        className: "fa-solid fa-trash-can",
        title: `Delete selected ${s}`,
        onClick: O,
        disabled: !y,
        "data-i18n": `[title]Delete selected ${s}`
      }
    ),
    g?.map((A) => /* @__PURE__ */ T.jsx(
      Ne,
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
}, wy = () => {
  const [, r] = ne.useState(0);
  return ne.useCallback(() => {
    r((l) => l + 1);
  }, []);
}, kf = SillyTavern.getContext(), $_ = () => {
  const r = wy(), a = sn.getSettings(), [l, s] = ne.useState(Oo[0]), c = ne.useCallback(
    (E) => {
      const N = sn.getSettings();
      E(N), sn.saveSettings(), r();
    },
    [r]
  ), u = ne.useMemo(
    () => Object.keys(a.mainContextTemplatePresets).map((E) => ({ value: E, label: E })),
    [a.mainContextTemplatePresets]
  ), b = ne.useMemo(
    () => Object.entries(a.prompts).map(([E, N]) => ({
      value: E,
      label: `${N.label} (${E})`
    })),
    [a.prompts]
  ), m = ne.useMemo(() => {
    const E = a.mainContextTemplatePresets[a.mainContextTemplatePreset];
    return E ? E.prompts.map((N) => {
      const k = a.prompts[N.promptName], L = k ? `${k.label} (${N.promptName})` : N.promptName;
      return {
        id: N.promptName,
        label: L,
        enabled: N.enabled,
        selectValue: N.role,
        selectOptions: [
          { value: "user", label: "User" },
          { value: "assistant", label: "Assistant" },
          { value: "system", label: "System" }
        ]
      };
    }) : [];
  }, [a.mainContextTemplatePreset, a.mainContextTemplatePresets, a.prompts]), h = (E) => {
    c((N) => {
      N.mainContextTemplatePreset = E ?? "default";
    });
  }, p = (E) => {
    c((N) => {
      const k = {};
      E.forEach((L) => {
        k[L.value] = N.mainContextTemplatePresets[L.value] ?? structuredClone(
          N.mainContextTemplatePresets[N.mainContextTemplatePreset] ?? N.mainContextTemplatePresets.default
        );
      }), N.mainContextTemplatePresets = k;
    });
  }, v = (E) => {
    c((N) => {
      const k = E.map((W) => ({
        promptName: W.id,
        enabled: W.enabled,
        role: W.selectValue ?? "user"
      })), L = {
        ...N.mainContextTemplatePresets[N.mainContextTemplatePreset],
        prompts: k
      }, V = {
        ...N.mainContextTemplatePresets,
        [N.mainContextTemplatePreset]: L
      };
      N.mainContextTemplatePresets = V;
    });
  }, S = async () => {
    await kf.Popup.show.confirm("Restore default", "Are you sure?") && c((N) => {
      N.mainContextTemplatePresets = {
        ...N.mainContextTemplatePresets,
        default: structuredClone(Ty.mainContextTemplatePresets.default)
      }, N.mainContextTemplatePreset === "default" ? r() : N.mainContextTemplatePreset = "default";
    });
  }, g = (E) => {
    c((N) => {
      const k = E.map((H) => H.value);
      Object.keys(N.prompts).filter((H) => !k.includes(H)).forEach((H) => {
        Object.values(N.mainContextTemplatePresets).forEach((X) => {
          X.prompts = X.prompts.filter((Q) => Q.promptName !== H);
        });
      });
      const W = {};
      E.forEach((H) => {
        W[H.value] = N.prompts[H.value] ?? { content: "", isDefault: !1, label: H.label };
      }), N.prompts = W;
    });
  }, y = (E) => {
    const N = $f(E);
    return N ? a.prompts[N] ? (Te("error", `Prompt name already exists: ${N}`), { confirmed: !1 }) : (c((k) => {
      k.prompts = {
        ...k.prompts,
        [N]: { content: k.prompts[l]?.content ?? "", isDefault: !1, label: E }
      };
      const L = Object.fromEntries(
        Object.entries(k.mainContextTemplatePresets).map(([V, W]) => [
          V,
          {
            ...W,
            prompts: [...W.prompts, { enabled: !0, promptName: N, role: "user" }]
          }
        ])
      );
      k.mainContextTemplatePresets = L;
    }), s(N), { confirmed: !0, value: N }) : (Te("error", `Invalid prompt name: ${E}`), { confirmed: !1 });
  }, d = (E, N) => {
    const k = $f(N);
    return k ? a.prompts[k] ? (Te("error", `Prompt name already exists: ${k}`), { confirmed: !1 }) : (c((L) => {
      const { [E]: V, ...W } = L.prompts;
      L.prompts = {
        ...W,
        [k]: { ...V, label: N }
      };
      const H = Object.fromEntries(
        Object.entries(L.mainContextTemplatePresets).map(([X, Q]) => [
          X,
          {
            ...Q,
            prompts: Q.prompts.map((le) => le.promptName === E ? { ...le, promptName: k } : le)
          }
        ])
      );
      L.mainContextTemplatePresets = H;
    }), s(k), { confirmed: !0, value: k }) : (Te("error", `Invalid prompt name: ${N}`), { confirmed: !1 });
  }, x = (E) => {
    const N = E.target.value;
    c((k) => {
      const L = k.prompts[l];
      L && (k.prompts = {
        ...k.prompts,
        [l]: {
          ...L,
          // Copy existing properties
          content: N,
          isDefault: Oo.includes(l) ? ct[l] === N : !1
        }
      });
    });
  }, C = async () => {
    const E = a.prompts[l];
    if (!E) return Te("warning", "No prompt selected.");
    await kf.Popup.show.confirm("Restore Default", `Restore default for "${E.label}"?`) && c((k) => {
      k.prompts = {
        ...k.prompts,
        [l]: {
          ...k.prompts[l],
          content: ct[l]
        }
      };
    });
  }, O = async () => {
    await kf.Popup.show.confirm("Reset Everything", "Are you sure? This cannot be undone.") && (sn.resetSettings(), r(), Te("success", "Settings have been reset."));
  }, A = a.prompts[l], j = Oo.includes(l);
  return /* @__PURE__ */ T.jsxs("div", { className: "charCreator_settings", children: [
    /* @__PURE__ */ T.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ T.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ T.jsx("span", { children: "Main Context Template" }),
        /* @__PURE__ */ T.jsx(
          Ne,
          {
            className: "fa-solid fa-undo",
            title: "Restore main context template to default",
            onClick: S
          }
        )
      ] }),
      /* @__PURE__ */ T.jsx(
        Fo,
        {
          label: "Template",
          items: u,
          value: a.mainContextTemplatePreset,
          readOnlyValues: ["default"],
          onChange: h,
          onItemsChange: p,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ T.jsx("div", { style: { marginTop: "5px" }, children: /* @__PURE__ */ T.jsx(
        J_,
        {
          items: m,
          onItemsChange: v,
          showSelectInput: !0,
          showToggleButton: !0
        }
      ) })
    ] }),
    /* @__PURE__ */ T.jsx("hr", { style: { margin: "10px 0" } }),
    /* @__PURE__ */ T.jsxs("div", { style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ T.jsxs("div", { className: "title_restorable", children: [
        /* @__PURE__ */ T.jsx("span", { children: "Prompt Templates" }),
        j && /* @__PURE__ */ T.jsx(
          Ne,
          {
            className: "fa-solid fa-undo",
            title: "Restore selected prompt to default",
            onClick: C
          }
        )
      ] }),
      /* @__PURE__ */ T.jsx(
        Fo,
        {
          label: "Prompt",
          items: b,
          value: l,
          readOnlyValues: Oo,
          onChange: (E) => s(E ?? ""),
          onItemsChange: g,
          onCreate: y,
          onRename: d,
          enableCreate: !0,
          enableRename: !0,
          enableDelete: !0
        }
      ),
      /* @__PURE__ */ T.jsx(
        Ny,
        {
          value: A?.content ?? "",
          onChange: x,
          placeholder: "Edit the selected prompt template here...",
          rows: 6,
          style: { marginTop: "5px", width: "100%" }
        }
      )
    ] }),
    /* @__PURE__ */ T.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ T.jsxs("label", { className: "checkbox_label", style: { marginTop: "15px" }, children: [
      /* @__PURE__ */ T.jsx(
        "input",
        {
          type: "checkbox",
          checked: a.showSaveAsWorldInfoEntry.show,
          onChange: (E) => c((N) => {
            N.showSaveAsWorldInfoEntry.show = E.target.checked;
          })
        }
      ),
      'Show "Save as World Info Entry" option in popup'
    ] }),
    /* @__PURE__ */ T.jsxs("label", { className: "checkbox_label", style: { marginTop: "10px" }, children: [
      /* @__PURE__ */ T.jsx(
        "input",
        {
          type: "checkbox",
          checked: a.showDebugView,
          onChange: (E) => c((N) => {
            N.showDebugView = E.target.checked;
          })
        }
      ),
      "Enable per-field debug view (capture last prompt + raw response)"
    ] }),
    /* @__PURE__ */ T.jsx("hr", { style: { margin: "15px 0" } }),
    /* @__PURE__ */ T.jsx("div", { style: { textAlign: "center", marginTop: "15px" }, children: /* @__PURE__ */ T.jsxs(Ne, { className: "danger_button", style: { width: "auto" }, onClick: O, children: [
      /* @__PURE__ */ T.jsx("i", { style: { marginRight: "10px" }, className: "fa-solid fa-triangle-exclamation" }),
      "I messed up, reset everything"
    ] }) })
  ] });
}, Oy = "charCreator", Dy = "charCreatorResizeSizes", Hl = () => SillyTavern.libs.localforage, ex = (r) => {
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
    const c = ex(l.getItem(r));
    return c.value === null ? (c.recovered && l.removeItem(r), { value: null, migrated: !1, recovered: c.recovered, error: c.error }) : (await a.setItem(r, c.value), l.removeItem(r), { value: c.value, migrated: !0, recovered: c.recovered });
  } catch (s) {
    return { value: null, migrated: !1, recovered: !0, error: s };
  }
}, Ry = async (r, a, l = Hl()) => {
  try {
    return await l.setItem(r, a), { persisted: !0 };
  } catch (s) {
    return { persisted: !1, error: s };
  }
}, tx = (r = Hl(), a = localStorage) => My(Oy, r, a), nx = (r, a = Hl()) => Ry(Oy, r, a), wv = (r = Hl(), a = localStorage) => My(Dy, r, a), ax = (r, a = Hl()) => Ry(Dy, r, a), Ov = (r) => {
  const a = ne.useRef(null), [l, s] = ne.useState(null), c = ne.useRef(null), u = ne.useRef(!0);
  ne.useLayoutEffect(() => {
    let m = !1;
    return wv().then((h) => {
      if (m) return;
      const p = h.value?.[r];
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
      c.current && clearTimeout(c.current), c.current = setTimeout(async () => {
        try {
          const p = { ...(await wv()).value ?? {}, [r]: m };
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
    const h = new ResizeObserver((p) => {
      if (u.current) {
        u.current = !1;
        return;
      }
      for (const v of p) {
        const S = v.contentRect.height;
        Number.isFinite(S) && S > 0 && b(Math.round(S));
      }
    });
    return h.observe(m), () => {
      h.disconnect(), c.current && clearTimeout(c.current);
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
  large: c = !1,
  rows: u = 3,
  promptEnabled: b = !0,
  isDraft: m = !1,
  isGenerating: h = !1,
  isDebug: p = !1,
  primary: v = !1,
  canUndo: S = !1,
  onValueChange: g,
  onPromptChange: y,
  onGenerate: d,
  onUndo: x,
  onClear: C,
  onCompare: O,
  onDelete: A,
  onShowDebug: j
}) => {
  const E = ne.useMemo(() => l.length, [l]), N = !h, k = l.trim().length > 0, L = Ov(`value:${r}`), V = Ov(`prompt:${r}`);
  return /* @__PURE__ */ T.jsxs(
    "div",
    {
      className: `character-field ${m ? "draft-field" : "core-field"} ${v ? "character-field-primary" : ""}`,
      children: [
        /* @__PURE__ */ T.jsxs("div", { className: "character-field-label-row", children: [
          /* @__PURE__ */ T.jsxs("label", { children: [
            v && /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-user crec-primary-icon", "aria-hidden": "true" }),
            a
          ] }),
          h ? /* @__PURE__ */ T.jsxs("span", { className: "character-field-status", children: [
            /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-spinner fa-spin" }),
            " generating…"
          ] }) : /* @__PURE__ */ T.jsxs("span", { className: "character-field-char-count", title: "Character count", children: [
            E,
            " ch"
          ] })
        ] }),
        /* @__PURE__ */ T.jsxs("div", { className: `field-container ${c ? "large-field" : ""}`, children: [
          /* @__PURE__ */ T.jsx(
            "textarea",
            {
              ref: L,
              className: "text_pole crec-field-textarea",
              value: l,
              onChange: (W) => g(r, W.target.value),
              rows: u,
              placeholder: `Enter ${a.toLowerCase()}…`
            }
          ),
          /* @__PURE__ */ T.jsxs("div", { className: "field-actions", children: [
            k ? /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
              /* @__PURE__ */ T.jsxs(
                Ne,
                {
                  onClick: () => d(r, "continue", l),
                  disabled: !N,
                  title: "Continue from current content (append)",
                  className: "crec-btn-secondary",
                  children: [
                    /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-arrow-right" }),
                    /* @__PURE__ */ T.jsx("span", { className: "crec-btn-label", children: "Continue" })
                  ]
                }
              ),
              /* @__PURE__ */ T.jsxs(
                Ne,
                {
                  onClick: () => d(r, "revise", l),
                  disabled: !N,
                  title: "Revise using the field-specific prompt below as your feedback direction",
                  className: "crec-btn-secondary",
                  children: [
                    /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-pen" }),
                    /* @__PURE__ */ T.jsx("span", { className: "crec-btn-label", children: "Revise" })
                  ]
                }
              ),
              /* @__PURE__ */ T.jsxs(
                Ne,
                {
                  onClick: () => d(r, "improve", l),
                  disabled: !N,
                  title: "Improve quality, clarity, and consistency without changing intent (no direction needed)",
                  className: "crec-btn-secondary",
                  children: [
                    /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-wand-sparkles" }),
                    /* @__PURE__ */ T.jsx("span", { className: "crec-btn-label", children: "Improve" })
                  ]
                }
              )
            ] }) : /* @__PURE__ */ T.jsx(
              Ne,
              {
                onClick: () => d(r, "generate"),
                disabled: !N,
                title: "Generate field content from scratch",
                className: "crec-btn-generate-primary",
                children: h ? /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
                  /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }),
                  /* @__PURE__ */ T.jsx("span", { className: "crec-btn-label", children: "Generate" })
                ] })
              }
            ),
            S && /* @__PURE__ */ T.jsx(
              Ne,
              {
                onClick: () => x(r),
                disabled: !N,
                title: "Undo last AI generation (restore previous content)",
                className: "crec-btn-undo",
                children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-rotate-left" })
              }
            ),
            /* @__PURE__ */ T.jsx(Ne, { onClick: () => rx(l), disabled: !l, title: "Copy content", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-copy" }) }),
            /* @__PURE__ */ T.jsx(Ne, { onClick: () => C(r), disabled: !l, title: "Clear field content", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-eraser" }) }),
            !m && O && /* @__PURE__ */ T.jsx(Ne, { onClick: () => O(r), title: "Compare with loaded character", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-code-compare" }) }),
            p && j && /* @__PURE__ */ T.jsx(Ne, { onClick: () => j(r), title: "View debug (last prompt + response)", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-bug" }) }),
            m && A && /* @__PURE__ */ T.jsx(Ne, { onClick: () => A(r), title: "Delete Draft Field", className: "danger_button", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-trash-can" }) })
          ] })
        ] }),
        b && /* @__PURE__ */ T.jsxs("div", { className: "field-prompt-container", children: [
          /* @__PURE__ */ T.jsxs("div", { className: "field-prompt-label", children: [
            "Field-specific prompt",
            !k && /* @__PURE__ */ T.jsx("span", { className: "crec-prompt-hint", children: " (used as revise direction once content exists)" })
          ] }),
          /* @__PURE__ */ T.jsx(
            "textarea",
            {
              ref: V,
              className: "text_pole crec-field-textarea crec-field-prompt-textarea",
              value: s,
              onChange: (W) => y(r, W.target.value),
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
  onUndo: s,
  canUndo: c,
  onCompare: u,
  onShowDebug: b,
  isGenerating: m
}) => {
  const [h, p] = ne.useState(0);
  ne.useEffect(() => {
    h >= r.length && r.length > 0 ? p(r.length - 1) : r.length === 0 && p(0);
  }, [r, h]);
  const v = r[h], S = ne.useMemo(() => v?.value.length ?? 0, [v?.value]), g = () => {
    const x = [...r, { value: "", prompt: "" }];
    a(x), p(x.length - 1);
  }, y = async () => {
    if (r.length === 0) return;
    if (await ix.Popup.show.confirm("Delete Greeting", "Are you sure?")) {
      const C = r.filter((O, A) => A !== h);
      a(C);
    }
  }, d = (x, C, O) => {
    const A = [...r];
    A[x][C] = O, a(A);
  };
  return /* @__PURE__ */ T.jsxs("div", { className: "character-field alternate-greetings-field", children: [
    /* @__PURE__ */ T.jsxs("div", { className: "character-field-label-row", children: [
      /* @__PURE__ */ T.jsx("label", { children: "Alternate Greetings" }),
      /* @__PURE__ */ T.jsx("span", { className: "character-field-char-count", title: "Character count", children: r.length > 0 ? `${S} ch` : "" })
    ] }),
    /* @__PURE__ */ T.jsxs("div", { className: "crec-greetings-bar", children: [
      /* @__PURE__ */ T.jsx("div", { className: "alternate-greetings-tabs", children: r.map((x, C) => /* @__PURE__ */ T.jsxs(
        Ne,
        {
          onClick: () => p(C),
          className: `menu_button ${C === h ? "active" : ""}`,
          children: [
            "Greeting ",
            C + 1
          ]
        },
        C
      )) }),
      /* @__PURE__ */ T.jsxs(Ne, { onClick: g, title: "Add a new alternate greeting", children: [
        /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-plus" }),
        " Add"
      ] })
    ] }),
    r.length === 0 ? /* @__PURE__ */ T.jsx("p", { className: "subtle", children: 'No alternate greetings defined. Click "Add" to create one.' }) : /* @__PURE__ */ T.jsxs("div", { className: "field-container crec-greeting-container", children: [
      /* @__PURE__ */ T.jsxs("div", { style: { flexGrow: 1 }, children: [
        /* @__PURE__ */ T.jsx(
          "textarea",
          {
            className: "text_pole crec-field-textarea",
            value: v?.value ?? "",
            onChange: (x) => d(h, "value", x.target.value),
            rows: 8,
            placeholder: "Enter greeting content…"
          }
        ),
        /* @__PURE__ */ T.jsxs("div", { className: "field-prompt-container crec-greeting-prompt", children: [
          /* @__PURE__ */ T.jsx("div", { className: "field-prompt-label", children: "Field-specific prompt" }),
          /* @__PURE__ */ T.jsx(
            "textarea",
            {
              className: "text_pole crec-field-textarea crec-field-prompt-textarea",
              value: v?.prompt ?? "",
              onChange: (x) => d(h, "prompt", x.target.value),
              rows: 2,
              placeholder: "Enter specific prompt for this greeting…"
            }
          )
        ] })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "field-actions", children: [
        !v?.value || v.value.trim().length === 0 ? /* @__PURE__ */ T.jsx(
          Ne,
          {
            onClick: () => l(h, "generate"),
            disabled: m,
            title: "Generate greeting from scratch",
            className: "crec-btn-generate-primary",
            children: m ? /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-spinner fa-spin" }) : /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
              /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-wand-magic-sparkles" }),
              /* @__PURE__ */ T.jsx("span", { className: "crec-btn-label", children: "Generate" })
            ] })
          }
        ) : /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
          /* @__PURE__ */ T.jsxs(
            Ne,
            {
              onClick: () => l(h, "continue", v.value),
              disabled: m,
              title: "Continue from current content (append)",
              className: "crec-btn-secondary",
              children: [
                /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-arrow-right" }),
                /* @__PURE__ */ T.jsx("span", { className: "crec-btn-label", children: "Continue" })
              ]
            }
          ),
          /* @__PURE__ */ T.jsxs(
            Ne,
            {
              onClick: () => l(h, "revise", v.value),
              disabled: m,
              title: "Revise using the field-specific prompt below as your feedback direction",
              className: "crec-btn-secondary",
              children: [
                /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-pen" }),
                /* @__PURE__ */ T.jsx("span", { className: "crec-btn-label", children: "Revise" })
              ]
            }
          ),
          /* @__PURE__ */ T.jsxs(
            Ne,
            {
              onClick: () => l(h, "improve", v.value),
              disabled: m,
              title: "Improve quality, clarity, and consistency without changing intent",
              className: "crec-btn-secondary",
              children: [
                /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-wand-sparkles" }),
                /* @__PURE__ */ T.jsx("span", { className: "crec-btn-label", children: "Improve" })
              ]
            }
          )
        ] }),
        s && c?.(h) && /* @__PURE__ */ T.jsx(
          Ne,
          {
            onClick: () => s(h),
            disabled: m,
            title: "Undo last AI generation (restore previous content)",
            className: "crec-btn-undo",
            children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-rotate-left" })
          }
        ),
        /* @__PURE__ */ T.jsx(
          Ne,
          {
            onClick: () => d(h, "value", ""),
            disabled: m,
            title: "Clear greeting",
            children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-eraser" })
          }
        ),
        /* @__PURE__ */ T.jsx(Ne, { onClick: () => u(h), disabled: m, title: "Compare greeting", children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-code-compare" }) }),
        b && /* @__PURE__ */ T.jsx(
          Ne,
          {
            onClick: () => b(lx(h)),
            disabled: m,
            title: "View debug (last prompt + response)",
            children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-bug" })
          }
        ),
        /* @__PURE__ */ T.jsx(
          Ne,
          {
            onClick: y,
            disabled: m,
            title: "Delete greeting",
            className: "danger_button",
            children: /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-trash-can" })
          }
        )
      ] })
    ] })
  ] });
};
var Ia = (
  /** @class */
  (function() {
    function r() {
    }
    return r.prototype.diff = function(a, l, s) {
      s === void 0 && (s = {});
      var c;
      typeof s == "function" ? (c = s, s = {}) : "callback" in s && (c = s.callback);
      var u = this.castInput(a, s), b = this.castInput(l, s), m = this.removeEmpty(this.tokenize(u, s)), h = this.removeEmpty(this.tokenize(b, s));
      return this.diffWithOptionsObj(m, h, s, c);
    }, r.prototype.diffWithOptionsObj = function(a, l, s, c) {
      var u = this, b, m = function(E) {
        if (E = u.postProcess(E, s), c) {
          setTimeout(function() {
            c(E);
          }, 0);
          return;
        } else
          return E;
      }, h = l.length, p = a.length, v = 1, S = h + p;
      s.maxEditLength != null && (S = Math.min(S, s.maxEditLength));
      var g = (b = s.timeout) !== null && b !== void 0 ? b : 1 / 0, y = Date.now() + g, d = [{ oldPos: -1, lastComponent: void 0 }], x = this.extractCommon(d[0], l, a, 0, s);
      if (d[0].oldPos + 1 >= p && x + 1 >= h)
        return m(this.buildValues(d[0].lastComponent, l, a));
      var C = -1 / 0, O = 1 / 0, A = function() {
        for (var E = Math.max(C, -v); E <= Math.min(O, v); E += 2) {
          var N = void 0, k = d[E - 1], L = d[E + 1];
          k && (d[E - 1] = void 0);
          var V = !1;
          if (L) {
            var W = L.oldPos - E;
            V = L && 0 <= W && W < h;
          }
          var H = k && k.oldPos + 1 < p;
          if (!V && !H) {
            d[E] = void 0;
            continue;
          }
          if (!H || V && k.oldPos < L.oldPos ? N = u.addToPath(L, !0, !1, 0, s) : N = u.addToPath(k, !1, !0, 1, s), x = u.extractCommon(N, l, a, E, s), N.oldPos + 1 >= p && x + 1 >= h)
            return m(u.buildValues(N.lastComponent, l, a)) || !0;
          d[E] = N, N.oldPos + 1 >= p && (O = Math.min(O, E - 1)), x + 1 >= h && (C = Math.max(C, E + 1));
        }
        v++;
      };
      if (c)
        (function E() {
          setTimeout(function() {
            if (v > S || Date.now() > y)
              return c(void 0);
            A() || E();
          }, 0);
        })();
      else
        for (; v <= S && Date.now() <= y; ) {
          var j = A();
          if (j)
            return j;
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
      for (var b = l.length, m = s.length, h = a.oldPos, p = h - c, v = 0; p + 1 < b && h + 1 < m && this.equals(s[h + 1], l[p + 1], u); )
        p++, h++, v++, u.oneChangePerToken && (a.lastComponent = { count: 1, previousComponent: a.lastComponent, added: !1, removed: !1 });
      return v && !u.oneChangePerToken && (a.lastComponent = { count: v, previousComponent: a.lastComponent, added: !1, removed: !1 }), a.oldPos = h, p;
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
      for (var b = c.length, m = 0, h = 0, p = 0; m < b; m++) {
        var v = c[m];
        if (v.removed)
          v.value = this.join(s.slice(p, p + v.count)), p += v.count;
        else {
          if (!v.added && this.useLongestToken) {
            var S = l.slice(h, h + v.count);
            S = S.map(function(g, y) {
              var d = s[p + y];
              return d.length > g.length ? d : g;
            }), v.value = this.join(S);
          } else
            v.value = this.join(l.slice(h, h + v.count));
          h += v.count, v.added || (p += v.count);
        }
      }
      return c;
    }, r;
  })()
), ox = /* @__PURE__ */ (function() {
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
})(), ux = (
  /** @class */
  (function(r) {
    ox(a, r);
    function a() {
      return r !== null && r.apply(this, arguments) || this;
    }
    return a;
  })(Ia)
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
function Al(r, a) {
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
  var c = Array(s), u = 0;
  c[0] = 0;
  for (var b = 1; b < s; b++) {
    for (a[b] == a[u] ? c[b] = c[u] : c[b] = u; u > 0 && a[b] != a[u]; )
      u = c[u];
    a[b] == a[u] && u++;
  }
  u = 0;
  for (var m = l; m < r.length; m++) {
    for (; u > 0 && r[m] != a[u]; )
      u = c[u];
    r[m] == a[u] && u++;
  }
  return u;
}
function Tl(r) {
  var a;
  for (a = r.length - 1; a >= 0 && r[a].match(/\s/); a--)
    ;
  return r.substring(a + 1);
}
function La(r) {
  var a = r.match(/^\s*/);
  return a ? a[0] : "";
}
var ky = /* @__PURE__ */ (function() {
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
})(), Xo = "a-zA-Z0-9_\\u{C0}-\\u{FF}\\u{D8}-\\u{F6}\\u{F8}-\\u{2C6}\\u{2C8}-\\u{2D7}\\u{2DE}-\\u{2FF}\\u{1E00}-\\u{1EFF}", fx = new RegExp("[".concat(Xo, "]+|\\s+|[^").concat(Xo, "]"), "ug"), hx = (
  /** @class */
  (function(r) {
    ky(a, r);
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
        c = Array.from(u.segment(l), function(h) {
          return h.segment;
        });
      } else
        c = l.match(fx) || [];
      var b = [], m = null;
      return c.forEach(function(h) {
        /\s/.test(h) ? m == null ? b.push(h) : b.push(b.pop() + h) : m != null && /\s/.test(m) ? b[b.length - 1] == m ? b.push(b.pop() + h) : b.push(m + h) : b.push(h), m = h;
      }), b;
    }, a.prototype.join = function(l) {
      return l.map(function(s, c) {
        return c == 0 ? s : s.replace(/^\s+/, "");
      }).join("");
    }, a.prototype.postProcess = function(l, s) {
      if (!l || s.oneChangePerToken)
        return l;
      var c = null, u = null, b = null;
      return l.forEach(function(m) {
        m.added ? u = m : m.removed ? b = m : ((u || b) && jv(c, b, u, m), c = m, u = null, b = null);
      }), (u || b) && jv(c, b, u, null), l;
    }, a;
  })(Ia)
), dx = new hx();
function px(r, a, l) {
  return dx.diff(r, a, l);
}
function jv(r, a, l, s) {
  if (a && l) {
    var c = La(a.value), u = Tl(a.value), b = La(l.value), m = Tl(l.value);
    if (r) {
      var h = Mv(c, b);
      r.value = nh(r.value, b, h), a.value = Al(a.value, h), l.value = Al(l.value, h);
    }
    if (s) {
      var p = Rv(u, m);
      s.value = th(s.value, m, p), a.value = Mo(a.value, p), l.value = Mo(l.value, p);
    }
  } else if (l) {
    if (r) {
      var v = La(l.value);
      l.value = l.value.substring(v.length);
    }
    if (s) {
      var v = La(s.value);
      s.value = s.value.substring(v.length);
    }
  } else if (r && s) {
    var S = La(s.value), g = La(a.value), y = Tl(a.value), d = Mv(S, g);
    a.value = Al(a.value, d);
    var x = Rv(Al(S, d), y);
    a.value = Mo(a.value, x), s.value = th(s.value, S, x), r.value = nh(r.value, S, S.slice(0, S.length - x.length));
  } else if (s) {
    var C = La(s.value), O = Tl(a.value), A = kv(O, C);
    a.value = Mo(a.value, A);
  } else if (r) {
    var j = Tl(r.value), E = La(a.value), A = kv(j, E);
    a.value = Al(a.value, A);
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
  })(Ia)
);
new mx();
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
      var l = r !== null && r.apply(this, arguments) || this;
      return l.tokenize = jy, l;
    }
    return a.prototype.equals = function(l, s, c) {
      return c.ignoreWhitespace ? ((!c.newlineIsToken || !l.includes(`
`)) && (l = l.trim()), (!c.newlineIsToken || !s.includes(`
`)) && (s = s.trim())) : c.ignoreNewlineAtEof && !c.newlineIsToken && (l.endsWith(`
`) && (l = l.slice(0, -1)), s.endsWith(`
`) && (s = s.slice(0, -1))), r.prototype.equals.call(this, l, s, c);
    }, a;
  })(Ia)
);
new vx();
function jy(r, a) {
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
      return l.split(new RegExp("(?<=[.!?])(\\s+|$)"));
    }, a;
  })(Ia)
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
      return r !== null && r.apply(this, arguments) || this;
    }
    return a.prototype.tokenize = function(l) {
      return l.split(/([{}:;,]|\s+)/);
    }, a;
  })(Ia)
);
new _x();
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
      var c = s.undefinedReplacement, u = s.stringifyReplacer, b = u === void 0 ? function(m, h) {
        return typeof h > "u" ? c : h;
      } : u;
      return typeof l == "string" ? l : JSON.stringify(ah(l, null, null, b), null, "  ");
    }, a.prototype.equals = function(l, s, c) {
      return r.prototype.equals.call(this, l.replace(/,([\r\n])/g, "$1"), s.replace(/,([\r\n])/g, "$1"), c);
    }, a;
  })(Ia)
);
new Ex();
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
    var m = [], h;
    for (h in r)
      Object.prototype.hasOwnProperty.call(r, h) && m.push(h);
    for (m.sort(), u = 0; u < m.length; u += 1)
      h = m[u], b[h] = ah(r[h], a, l, s, h);
    a.pop(), l.pop();
  } else
    b = r;
  return b;
}
var Cx = /* @__PURE__ */ (function() {
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
  })(Ia)
);
new Ax();
const Tx = ({ originalContent: r, newContent: a, fieldName: l }) => {
  const s = ne.useMemo(() => {
    const c = px(r, a);
    let u = "", b = "";
    return c.forEach((m) => {
      const p = `<span style="${m.added ? "color: green; background-color: #e6ffed;" : m.removed ? "color: red; background-color: #ffebe9;" : "color: grey;"}">${m.value}</span>`;
      m.added || (u += p), m.removed || (b += p);
    }), { originalHtml: u, newHtml: b };
  }, [r, a]);
  return /* @__PURE__ */ T.jsxs("div", { className: "compare-popup", style: { padding: "10px" }, children: [
    /* @__PURE__ */ T.jsxs("h3", { children: [
      "Compare Changes for: ",
      l
    ] }),
    /* @__PURE__ */ T.jsxs("div", { style: { display: "flex", gap: "1rem", marginTop: "1rem" }, children: [
      /* @__PURE__ */ T.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ T.jsx("h4", { children: "Loaded Character Content" }),
        /* @__PURE__ */ T.jsx(
          "div",
          {
            className: "content",
            style: { maxHeight: "400px", overflowY: "auto" },
            dangerouslySetInnerHTML: { __html: s.originalHtml }
          }
        )
      ] }),
      /* @__PURE__ */ T.jsxs("div", { style: { flex: "1" }, children: [
        /* @__PURE__ */ T.jsx("h4", { children: "Current Content" }),
        /* @__PURE__ */ T.jsx(
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
const Nx = ({ capture: r }) => {
  const [a, l] = ne.useState("prompt"), [s, c] = ne.useState({}), u = ne.useMemo(
    () => Lf(r.messages.reduce((g, y) => g + y.content, "")),
    [r.messages]
  ), b = ne.useMemo(() => Lf(r.rawResponse), [r.rawResponse]), m = ne.useMemo(() => {
    const g = new Date(r.startedAt).getTime(), y = new Date(r.finishedAt).getTime();
    return Math.max(0, y - g);
  }, [r.startedAt, r.finishedAt]), h = () => {
    Bf(JSON.stringify(r.messages, null, 2));
  }, p = () => {
    const g = r.messages.map((y) => `=== ${Lv[y.role] || y.role.toUpperCase()} ===
${y.content}`).join(`

`);
    Bf(g);
  }, v = () => {
    Bf(r.rawResponse);
  }, S = (g) => c((y) => ({ ...y, [g]: !y[g] }));
  return /* @__PURE__ */ T.jsxs("div", { className: "crec-debug", children: [
    /* @__PURE__ */ T.jsxs("div", { className: "crec-debug-header", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "crec-debug-meta", children: [
        /* @__PURE__ */ T.jsxs("span", { className: "crec-debug-meta-item", title: "Target field", children: [
          /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-bullseye" }),
          " ",
          r.targetField
        ] }),
        /* @__PURE__ */ T.jsxs("span", { className: "crec-debug-meta-item", title: "Output format", children: [
          /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-code" }),
          " ",
          r.outputFormat
        ] }),
        r.continueFrom && /* @__PURE__ */ T.jsxs("span", { className: "crec-debug-meta-item", title: "Continue from", children: [
          /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-arrow-right" }),
          " continue"
        ] }),
        /* @__PURE__ */ T.jsxs("span", { className: "crec-debug-meta-item", title: "Input tokens (~chars/4)", children: [
          /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-sign-in-alt" }),
          " in ~",
          jf(u)
        ] }),
        /* @__PURE__ */ T.jsxs("span", { className: "crec-debug-meta-item", title: "Output tokens (~chars/4)", children: [
          /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-sign-out-alt" }),
          " out ~",
          jf(b)
        ] }),
        /* @__PURE__ */ T.jsxs("span", { className: "crec-debug-meta-item", title: "Elapsed time", children: [
          /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-stopwatch" }),
          " ",
          m,
          "ms"
        ] })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "crec-debug-tabs", children: [
        /* @__PURE__ */ T.jsxs(
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
        /* @__PURE__ */ T.jsx(
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
    a === "prompt" ? /* @__PURE__ */ T.jsxs("div", { className: "crec-debug-section", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "crec-debug-actions", children: [
        /* @__PURE__ */ T.jsxs(Ne, { onClick: p, title: "Copy prompt as plain text", children: [
          /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-copy" }),
          " Copy (text)"
        ] }),
        /* @__PURE__ */ T.jsxs(Ne, { onClick: h, title: "Copy prompt array as JSON", children: [
          /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-code" }),
          " Copy (JSON)"
        ] })
      ] }),
      /* @__PURE__ */ T.jsx("div", { className: "crec-debug-messages", children: r.messages.length === 0 ? /* @__PURE__ */ T.jsx("p", { className: "subtle", style: { textAlign: "center" }, children: "No prompt messages were sent." }) : r.messages.map((g, y) => {
        const d = s[y] ?? !0, x = g.content.length > 300 ? `${g.content.slice(0, 300)}…` : g.content;
        return /* @__PURE__ */ T.jsxs("div", { className: `crec-debug-message crec-debug-message-${g.role}`, children: [
          /* @__PURE__ */ T.jsxs(
            "div",
            {
              className: "crec-debug-message-head",
              onClick: () => S(y),
              role: "button",
              tabIndex: 0,
              children: [
                /* @__PURE__ */ T.jsx("span", { className: `crec-debug-role crec-debug-role-${g.role}`, children: Lv[g.role] || g.role.toUpperCase() }),
                /* @__PURE__ */ T.jsxs("span", { className: "crec-debug-meta-item", children: [
                  "~",
                  jf(Lf(g.content)),
                  " tok"
                ] }),
                /* @__PURE__ */ T.jsx("i", { className: `fa-solid ${d ? "fa-chevron-up" : "fa-chevron-down"}` })
              ]
            }
          ),
          /* @__PURE__ */ T.jsx("pre", { className: "crec-debug-message-body", children: d ? g.content : x })
        ] }, y);
      }) })
    ] }) : /* @__PURE__ */ T.jsxs("div", { className: "crec-debug-section", children: [
      /* @__PURE__ */ T.jsx("div", { className: "crec-debug-actions", children: /* @__PURE__ */ T.jsxs(Ne, { onClick: v, title: "Copy the raw LLM response", children: [
        /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-copy" }),
        " Copy raw response"
      ] }) }),
      /* @__PURE__ */ T.jsxs("div", { className: "crec-debug-response-grid", children: [
        /* @__PURE__ */ T.jsxs("div", { className: "crec-debug-response-pane", children: [
          /* @__PURE__ */ T.jsxs("h4", { children: [
            "Raw Response ",
            /* @__PURE__ */ T.jsxs("span", { className: "subtle", children: [
              "(",
              r.rawResponse.length,
              " chars)"
            ] })
          ] }),
          /* @__PURE__ */ T.jsx("pre", { className: "crec-debug-message-body", children: r.rawResponse })
        ] }),
        /* @__PURE__ */ T.jsx("div", { className: "crec-debug-response-divider" }),
        /* @__PURE__ */ T.jsxs("div", { className: "crec-debug-response-pane", children: [
          /* @__PURE__ */ T.jsxs("h4", { children: [
            "Parsed Content (",
            r.parsedContent.length,
            " chars)"
          ] }),
          /* @__PURE__ */ T.jsx("pre", { className: "crec-debug-message-body", children: r.parsedContent })
        ] })
      ] })
    ] })
  ] });
};
function wx(r, a) {
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
  const l = new Set(r), s = a.filter((c) => c && !l.has(c));
  return [
    ...r.map((c) => ({ value: c, label: c })),
    ...s.map((c) => ({ value: c, label: `${c} (missing)` }))
  ];
}
function Dx(r, a = {}) {
  const l = r?.entries;
  if (!l)
    return [];
  const s = Array.isArray(l) ? l : Object.values(l);
  return a.includeDisabled ? s : s.filter((c) => !c.disable);
}
const kt = SillyTavern.getContext(), Uf = () => ({
  selectedCharacterIndexes: yn ? [String(yn)] : [],
  selectedWorldNames: [],
  fields: Ln.reduce(
    (r, a) => (r[a] = { value: "", prompt: "", label: Nn[a] }, r),
    {}
  ),
  draftFields: {},
  lastLoadedCharacterId: ""
}), Mx = {
  name: { label: Nn.name, rows: 2, large: !1, promptEnabled: !1, primary: !0 },
  description: { label: Nn.description, rows: 5, large: !0, promptEnabled: !0 },
  personality: { label: Nn.personality, rows: 4, large: !0, promptEnabled: !0 },
  scenario: { label: Nn.scenario, rows: 3, large: !0, promptEnabled: !0 },
  first_mes: { label: Nn.first_mes, rows: 3, large: !0, promptEnabled: !0 },
  mes_example: { label: Nn.mes_example, rows: 6, large: !0, promptEnabled: !0 }
}, Rx = () => {
  const r = wy(), a = sn.getSettings(), [l, s] = ne.useState(Uf()), [c, u] = ne.useState([]), [b, m] = ne.useState(!0), [h, p] = ne.useState("core"), [v, S] = ne.useState([]), [g, y] = ne.useState([]), [d, x] = ne.useState(null), [C, O] = ne.useState(null), [A, j] = ne.useState({}), [E, N] = ne.useState(null), [k, L] = ne.useState(!1), [V, W] = ne.useState({}), [H, X] = ne.useState({
    profile: !1,
    context: !0,
    options: !0,
    instructions: !0
  });
  ne.useEffect(() => {
    (async () => {
      m(!0), S(kt.characters), y(ag);
      const Y = (await tx()).value ?? {}, J = Uf();
      if (Y.fields && (J.fields = { ...J.fields, ...Y.fields }), Y.draftFields && (J.draftFields = Y.draftFields), Y.selectedCharacterIndexes && (J.selectedCharacterIndexes = Y.selectedCharacterIndexes), Y.selectedWorldNames && (J.selectedWorldNames = Y.selectedWorldNames), Y.lastLoadedCharacterId) {
        J.lastLoadedCharacterId = Y.lastLoadedCharacterId;
        const fe = kt.characters.find((Oe) => Oe.avatar === Y.lastLoadedCharacterId);
        fe && x(fe);
      }
      s(J), m(!1);
    })();
  }, []), ne.useEffect(() => {
    b || nx(l).then((R) => {
      R.persisted || (console.warn("Failed to save Character Creator session:", R.error), Te("warning", "Character Creator session could not be saved. Browser storage may be full."));
    });
  }, [l, b]);
  const Q = (R, Y) => {
    sn.getSettings()[R] = Y, sn.saveSettings(), r();
  }, le = (R, Y) => {
    sn.getSettings().contextToSend[R] = Y, sn.saveSettings(), r();
  }, oe = ne.useCallback(
    (R, Y, J, fe) => {
      s((Oe) => {
        const be = fe ? "draftFields" : "fields", Ge = { ...Oe[be] };
        return Ge[R] || (Ge[R] = { value: "", prompt: "", label: R }), Ge[R][J] = Y, { ...Oe, [be]: Ge };
      });
    },
    []
  ), de = ne.useMemo(
    () => Object.keys(l.fields).filter((R) => R.startsWith("alternate_greetings_")).sort((R, Y) => parseInt(R.split("_")[2]) - parseInt(Y.split("_")[2])).map((R) => l.fields[R]),
    [l.fields]
  ), z = ne.useCallback((R) => {
    s((Y) => {
      const J = { ...Y.fields };
      return Object.keys(J).forEach((fe) => {
        fe.startsWith("alternate_greetings_") && delete J[fe];
      }), R.forEach((fe, Oe) => {
        const be = `alternate_greetings_${Oe + 1}`;
        J[be] = { ...fe, label: `Alternate Greeting ${Oe + 1}` };
      }), { ...Y, fields: J };
    });
  }, []), re = ne.useCallback(
    (R, Y) => {
      oe(R, "", "value", Y);
    },
    [oe]
  ), ce = ne.useCallback(
    async (R) => {
      await kt.Popup.show.confirm(
        "Delete Draft Field",
        `Are you sure you want to delete "${l.draftFields[R].label}"?`
      ) && s((J) => {
        const fe = { ...J.draftFields };
        return delete fe[R], { ...J, draftFields: fe };
      });
    },
    [l.draftFields]
  ), je = ne.useCallback(async () => {
    const R = await kt.Popup.show.input("Enter Draft Field Name", "");
    if (!R?.trim()) return;
    const Y = $f(R.trim());
    if (!Y) return Te("error", "Invalid field name.");
    if (l.draftFields[Y] || Ln.includes(Y))
      return Te("warning", "Field name already exists.");
    s((J) => ({
      ...J,
      draftFields: { ...J.draftFields, [Y]: { value: "", prompt: "", label: R } }
    })), p("draft");
  }, [l.draftFields]), D = ne.useCallback(() => {
    const R = {
      presetName: a.profileId ? kt.extensionSettings.connectionManager?.profiles?.find((J) => J.id === a.profileId)?.preset : void 0,
      contextName: a.profileId ? kt.extensionSettings.connectionManager?.profiles?.find((J) => J.id === a.profileId)?.context : void 0,
      instructName: a.profileId ? kt.extensionSettings.connectionManager?.profiles?.find((J) => J.id === a.profileId)?.instruct : void 0,
      targetCharacterId: yn,
      ignoreCharacterFields: !0,
      ignoreWorldInfo: !0,
      ignoreAuthorNote: !0,
      maxContext: a.maxContextType === "custom" ? a.maxContextValue : a.maxContextType === "profile" ? "preset" : "active",
      includeNames: !!hr
    }, Y = a.contextToSend.messages;
    switch (Y.type) {
      case "none":
        R.messageIndexesBetween = { start: -1, end: -1 };
        break;
      case "first":
        R.messageIndexesBetween = { start: 0, end: Y.first ?? 10 };
        break;
      case "last":
        const J = kt.chat?.length ?? 0, fe = Y.last ?? 10;
        R.messageIndexesBetween = {
          end: Math.max(0, J - 1),
          start: Math.max(0, J - fe)
        };
        break;
      case "range":
        R.messageIndexesBetween = {
          start: Y.range?.start ?? 0,
          end: Y.range?.end ?? 10
        };
        break;
    }
    return yn === void 0 && !hr && (R.messageIndexesBetween = { start: -1, end: -1 }), R;
  }, [a]), F = ne.useCallback(async () => {
    const R = {};
    return await Promise.all(
      ag.filter((Y) => !R[Y]).map(async (Y) => {
        const J = await kt.loadWorldInfo(Y);
        J && (R[Y] = Dx(J, { includeDisabled: !0 }));
      })
    ), R;
  }, []), te = ne.useCallback(() => {
    const R = structuredClone(a.prompts);
    return a.contextToSend.stDescription || delete R.stDescription, (!a.contextToSend.charCard || l.selectedCharacterIndexes.length === 0) && delete R.charDefinitions, (!a.contextToSend.worldInfo || l.selectedWorldNames.length === 0) && delete R.lorebookDefinitions, a.contextToSend.existingFields || delete R.existingFieldDefinitions, a.contextToSend.persona || delete R.personaDescription, delete R.worldInfoCharDefinition, R;
  }, [a, l.selectedCharacterIndexes, l.selectedWorldNames]), ae = ne.useCallback(
    async (R, Y = "generate", J) => {
      if (!a.profileId)
        throw new Error("No connection profile selected.");
      if (!kt.extensionSettings.connectionManager?.profiles?.find(
        (we) => we.id === a.profileId
      ))
        throw new Error("Connection profile not found.");
      const Oe = D(), be = await F(), Ge = te(), De = await I_({
        profileId: a.profileId,
        userPrompt: a.promptPresets[a.promptPreset].content,
        buildPromptOptions: Oe,
        continueFrom: Y === "continue" ? J : void 0,
        generationMode: Y,
        existingContent: Y === "revise" || Y === "improve" || Y === "continue" ? J : void 0,
        session: l,
        allCharacters: v,
        entriesGroupByWorldName: be,
        promptSettings: Ge,
        formatDescription: { content: a.prompts[`${a.outputFormat}Format`].content },
        mainContextList: a.mainContextTemplatePresets[a.mainContextTemplatePreset].prompts.filter(
          (we) => we.enabled
        ),
        includeUserMacro: a.contextToSend.persona,
        maxResponseToken: a.maxResponseToken,
        fieldMaxResponseTokens: a.fieldMaxResponseTokens,
        useWorldInfoActivationScan: a.useWorldInfoActivationScan,
        targetField: R,
        outputFormat: a.outputFormat
      });
      return De.debug && j((we) => ({ ...we, [R]: De.debug })), De.content;
    },
    [l, a, v, D, F, te]
  ), ee = ne.useCallback(
    async (R, Y, J) => {
      const fe = typeof Y == "string" && (Y === "generate" || Y === "continue" || Y === "revise" || Y === "improve") ? Y : "generate";
      let Oe = "";
      typeof Y == "string" && fe === "generate" && Y !== "generate" ? Oe = Y : typeof J == "string" && (Oe = J);
      const be = R.startsWith("alternate_greetings_"), Ge = !be && !Ln.includes(R), De = Ge ? "draftFields" : "fields";
      if (fe !== "generate" && !Oe) {
        const we = l.fields[R]?.value ?? l.draftFields[R]?.value;
        if (!we) return;
        Oe = we;
      }
      W((we) => {
        const et = `${De}:${R}`;
        if (we[et] !== void 0) return we;
        const On = l.fields[R]?.value ?? l.draftFields[R]?.value ?? "";
        return { ...we, [et]: On };
      }), u((we) => [...we, R]);
      try {
        const we = await ae(
          R,
          fe,
          fe === "generate" ? void 0 : Oe
        );
        if (be) {
          const et = parseInt(R.split("_")[2]) - 1, On = [...de];
          On[et] && (On[et].value = we), z(On);
        } else
          oe(R, we, "value", Ge);
      } catch (we) {
        console.error(we), Te("error", we.message || String(we));
      } finally {
        u((we) => we.filter((et) => et !== R));
      }
    },
    [ae, de, oe, z, l.fields, l.draftFields]
  ), he = ne.useCallback(
    (R, Y) => {
      const fe = `${Y ? "draftFields" : "fields"}:${R}`, Oe = V[fe];
      if (Oe === void 0) return;
      if (R.startsWith("alternate_greetings_")) {
        const Ge = parseInt(R.split("_")[2]) - 1, De = [...de];
        De[Ge] && (De[Ge].value = Oe), z(De);
      } else
        oe(R, Oe, "value", Y);
      W((Ge) => {
        const De = { ...Ge };
        return delete De[fe], De;
      });
    },
    [V, de, oe, z]
  ), se = ne.useCallback(
    (R, Y) => V[`${Y ? "draftFields" : "fields"}:${R}`] !== void 0,
    [V]
  ), Xe = ne.useCallback(async () => {
    if (!a.profileId) {
      Te("warning", "Please select a connection profile.");
      return;
    }
    const R = ["name", "description", "personality", "scenario", "first_mes", "mes_example"].filter(
      (Y) => !c.includes(Y)
    );
    if (R.length !== 0) {
      L(!0), u((Y) => [...Y, ...R]);
      try {
        const Y = {};
        for (const J of R) {
          const fe = await ae(J);
          Y[J] = fe, s((Oe) => {
            const be = { ...Oe.fields };
            return be[J] && (be[J] = { ...be[J], value: fe }), { ...Oe, fields: be };
          }), u((Oe) => Oe.filter((be) => be !== J));
        }
        Te("success", `Generated ${Object.keys(Y).length} fields.`);
      } catch (Y) {
        console.error(Y), Te("error", `Generate all failed: ${Y.message}`);
      } finally {
        L(!1), u([]);
      }
    }
  }, [a.profileId, ae, c]), Ae = ne.useCallback(async () => {
    await kt.Popup.show.confirm("Reset Fields", "This will clear all fields. Are you sure?") && (s(Uf()), x(null), j({}), W({}));
  }, []), Je = ne.useCallback(
    (R) => {
      if (!d) return Te("warning", "Please load a character to compare against.");
      let Y, J, fe;
      typeof R == "number" ? (Y = de[R]?.value ?? "", J = d.data?.alternate_greetings?.[R] ?? "", fe = `Alternate Greeting ${R + 1}`) : (Y = l.fields[R]?.value ?? "", J = d[R] ?? d.data?.[R] ?? "", fe = Nn[R]), O({ original: J, current: Y, fieldName: fe });
    },
    [d, l.fields, de]
  ), ua = ne.useCallback(
    async (R) => {
      const Y = v[parseInt(R)];
      if (!Y || Ln.some((be) => l.fields[be].value.trim() !== "") && !await kt.Popup.show.confirm("Load Character", "Overwrite current fields?"))
        return;
      const fe = { ...l.fields };
      Ln.forEach((be) => {
        fe[be] = { value: Y[be] ?? Y.data?.[be] ?? "", prompt: "", label: Nn[be] };
      });
      const Oe = (Y.data?.alternate_greetings ?? []).map((be) => ({ value: be, prompt: "" }));
      x(Y), s((be) => ({ ...be, fields: fe, lastLoadedCharacterId: Y.avatar })), z(Oe);
    },
    [v, l.fields, z]
  ), bn = ne.useCallback(async () => {
    if (hr) {
      Te("warning", "Cannot load the current character while a group chat is open.");
      return;
    }
    if (yn === void 0) {
      Te("warning", "No character chat is currently open.");
      return;
    }
    await ua(String(yn));
  }, [ua]), Sn = () => de.map((R) => R.value).filter((R) => R.trim() !== ""), ca = ne.useCallback(() => ({
    name: l.fields.name.value,
    description: l.fields.description.value,
    personality: l.fields.personality.value,
    scenario: l.fields.scenario.value,
    first_mes: l.fields.first_mes.value,
    mes_example: l.fields.mes_example.value,
    data: {
      alternate_greetings: Sn(),
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
  }), [l.fields, de]), Ga = async () => {
    if (!l.fields.name.value) return Te("warning", "Please provide a character name.");
    if (await kt.Popup.show.confirm("Save as New Character", "Are you sure?"))
      try {
        await N2(ca(), !0), Te("success", "Character created.");
      } catch (Y) {
        Te("error", `Failed to create character: ${Y.message}`);
      }
  }, vr = async () => {
    if (!d) return Te("warning", "Please load a character to override.");
    if (!await kt.Popup.show.confirm(
      "Override Character",
      `Override "${d.name}"? This cannot be undone.`
    )) return;
    const Y = {
      ...d,
      name: l.fields.name.value,
      description: l.fields.description.value,
      personality: l.fields.personality.value,
      scenario: l.fields.scenario.value,
      first_mes: l.fields.first_mes.value,
      mes_example: l.fields.mes_example.value,
      data: {
        alternate_greetings: Sn(),
        name: l.fields.name.value,
        description: l.fields.description.value,
        first_mes: l.fields.first_mes.value,
        mes_example: l.fields.mes_example.value,
        personality: l.fields.personality.value,
        scenario: l.fields.scenario.value
      }
    };
    try {
      await w2(Y, !0), Te("success", `Character "${Y.name}" updated!`);
    } catch (J) {
      Te("error", `Failed to override character: ${J.message}`);
    }
  }, yr = () => {
    if (!l.fields.name.value) return Te("warning", "Please provide a character name before exporting.");
    const R = ca(), Y = new Blob([JSON.stringify(R, null, 2)], { type: "application/json" }), J = document.createElement("a");
    J.href = URL.createObjectURL(Y), J.download = `${l.fields.name.value || "character"}-card.json`, J.click(), URL.revokeObjectURL(J.href);
  }, jt = () => {
    const R = document.createElement("input");
    R.type = "file", R.accept = ".json", R.onchange = async () => {
      const Y = R.files?.[0];
      if (Y)
        try {
          const J = await Y.text(), fe = JSON.parse(J);
          if (Ln.some((De) => l.fields[De].value.trim() !== "") && !await kt.Popup.show.confirm("Import Character", "Overwrite current fields?"))
            return;
          const be = { ...l.fields };
          Ln.forEach((De) => {
            be[De] = {
              value: fe[De] ?? fe.data?.[De] ?? "",
              prompt: "",
              label: Nn[De]
            };
          });
          const Ge = (fe.data?.alternate_greetings ?? fe.alternate_greetings ?? []).map(
            (De) => ({ value: De, prompt: "" })
          );
          s((De) => ({ ...De, fields: be })), z(Ge), Te("success", `Imported "${fe.name ?? "character"}".`);
        } catch (J) {
          Te("error", `Import failed: ${J.message}`);
        }
    }, R.click();
  }, yi = () => {
    const R = JSON.stringify({ draftFields: l.draftFields, version: Ay }, null, 2), Y = new Blob([R], { type: "application/json" }), J = document.createElement("a");
    J.href = URL.createObjectURL(Y), J.download = `crec-draft-fields-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`, J.click(), URL.revokeObjectURL(J.href);
  }, Xt = () => {
    const R = document.createElement("input");
    R.type = "file", R.accept = ".json", R.onchange = async () => {
      const Y = R.files?.[0];
      if (Y)
        try {
          const J = await Y.text(), fe = JSON.parse(J);
          if (!fe.draftFields) throw new Error("Invalid file format.");
          (Object.keys(l.draftFields).length > 0 ? await kt.Popup.show.confirm(
            "Import Drafts",
            "This will replace current draft fields. Continue?"
          ) : !0) && (s((be) => ({ ...be, draftFields: fe.draftFields })), Te("success", "Draft fields imported."));
        } catch (J) {
          Te("error", `Import failed: ${J.message}`);
        }
    }, R.click();
  }, me = ne.useMemo(
    () => v.map((R, Y) => ({ value: String(Y), label: R.name })),
    [v]
  ), ge = ne.useMemo(
    () => g.map((R) => ({ value: R, label: R })),
    [g]
  ), Ie = ne.useMemo(
    () => Ox(g, l.selectedWorldNames),
    [g, l.selectedWorldNames]
  ), Pe = ne.useMemo(
    () => Object.keys(a.promptPresets).map((R) => ({ value: R, label: R })),
    [a.promptPresets]
  ), We = ne.useMemo(
    () => Object.keys(a.mainContextTemplatePresets).map((R) => ({ value: R, label: R })),
    [a.mainContextTemplatePresets]
  ), Ct = (R) => X((Y) => ({ ...Y, [R]: !Y[R] })), Qt = a.showDebugView, nt = E ? A[E] : null;
  return b ? /* @__PURE__ */ T.jsx("div", { className: "crec-loading", children: "Loading…" }) : /* @__PURE__ */ T.jsxs("div", { id: "charCreatorPopup", children: [
    /* @__PURE__ */ T.jsxs("div", { className: "crec-popup-head", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "crec-title-row", children: [
        /* @__PURE__ */ T.jsxs("h2", { children: [
          /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-user-astronaut crec-title-icon", "aria-hidden": "true" }),
          "Character Creator"
        ] }),
        /* @__PURE__ */ T.jsx("div", { className: "crec-character-subtitle", title: "Active character for this card", children: d ? /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
          /* @__PURE__ */ T.jsx("span", { className: "crec-character-subtitle-label", children: "Editing:" }),
          " ",
          /* @__PURE__ */ T.jsx("span", { className: "crec-character-subtitle-name", children: l.fields.name.value || d.name })
        ] }) : l.fields.name.value ? /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
          /* @__PURE__ */ T.jsx("span", { className: "crec-character-subtitle-label", children: "New character:" }),
          " ",
          /* @__PURE__ */ T.jsx("span", { className: "crec-character-subtitle-name", children: l.fields.name.value })
        ] }) : /* @__PURE__ */ T.jsx("span", { className: "crec-character-subtitle-placeholder", children: "Untitled character" }) })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "crec-toolbar", children: [
        /* @__PURE__ */ T.jsx(Ne, { onClick: Xe, disabled: k, title: "Generate every core field in sequence", children: k ? /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
          /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-spinner fa-spin" }),
          " Generating…"
        ] }) : /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
          /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-bolt" }),
          " Generate All"
        ] }) }),
        /* @__PURE__ */ T.jsx(Ne, { onClick: Ga, children: "Save as New" }),
        /* @__PURE__ */ T.jsx(Ne, { onClick: vr, disabled: !d, children: "Override Char" }),
        /* @__PURE__ */ T.jsx(Ne, { onClick: yr, children: "Export JSON" }),
        /* @__PURE__ */ T.jsx(Ne, { onClick: jt, children: "Import JSON" }),
        a.showSaveAsWorldInfoEntry.show && /* @__PURE__ */ T.jsx(
          Do,
          {
            items: ge,
            placeholder: "Save as WI Entry",
            closeOnSelect: !0,
            value: [],
            onChange: (R) => {
            },
            onBeforeSelection: async (R, Y) => {
              if (!l.fields.name.value)
                return Te("warning", "Please enter a name first."), !1;
              const J = Y[0], Oe = ra.compile(a.prompts.worldInfoCharDefinition.content)({
                character: wx(l.fields, de)
              }), be = {
                uid: -1,
                key: [l.fields.name.value],
                content: Oe,
                comment: l.fields.name.value,
                disable: !1,
                keysecondary: []
              };
              try {
                await iS({ entry: be, selectedWorldName: J, operation: "add" }), Te("success", `Entry added to ${J}.`);
              } catch (Ge) {
                Te("error", `Failed to add WI Entry: ${Ge.message}`);
              }
              return !1;
            }
          }
        ),
        /* @__PURE__ */ T.jsxs(Ne, { onClick: Ae, title: "Clear all fields", children: [
          /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-rotate-left" }),
          " Reset"
        ] }),
        /* @__PURE__ */ T.jsx(
          Ne,
          {
            onClick: bn,
            title: "Load the character from the currently open chat",
            disabled: !!hr || yn === void 0,
            children: "Current Char"
          }
        ),
        /* @__PURE__ */ T.jsx("div", { style: { width: "220px" }, title: "Load Character Data", children: /* @__PURE__ */ T.jsx(
          Do,
          {
            items: me,
            value: d ? [String(v.indexOf(d))] : [],
            onChange: (R) => ua(R[0]),
            multiple: !1,
            enableSearch: !0,
            placeholder: "Load Character…"
          }
        ) })
      ] })
    ] }),
    /* @__PURE__ */ T.jsxs("div", { className: "container", children: [
      /* @__PURE__ */ T.jsxs("div", { className: "column", children: [
        /* @__PURE__ */ T.jsxs("div", { className: `card crec-collapsible ${H.profile ? "" : "expanded"}`, children: [
          /* @__PURE__ */ T.jsxs(
            "div",
            {
              className: "crec-card-head",
              role: "button",
              tabIndex: 0,
              onClick: () => Ct("profile"),
              onKeyDown: (R) => {
                (R.key === "Enter" || R.key === " ") && (R.preventDefault(), Ct("profile"));
              },
              children: [
                /* @__PURE__ */ T.jsxs("h3", { children: [
                  /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-plug crec-card-section-icon", "aria-hidden": "true" }),
                  " Connection Profile"
                ] }),
                /* @__PURE__ */ T.jsx("i", { className: `fa-solid crec-card-chevron ${H.profile ? "fa-chevron-right" : "fa-chevron-down"}` })
              ]
            }
          ),
          !H.profile && /* @__PURE__ */ T.jsx("div", { className: "crec-card-body", children: /* @__PURE__ */ T.jsx(
            Z_,
            {
              initialSelectedProfileId: a.profileId,
              onChange: (R) => Q("profileId", R?.id ?? "")
            }
          ) })
        ] }),
        /* @__PURE__ */ T.jsxs("div", { className: `card crec-collapsible ${H.context ? "" : "expanded"}`, children: [
          /* @__PURE__ */ T.jsxs(
            "div",
            {
              className: "crec-card-head",
              role: "button",
              tabIndex: 0,
              onClick: () => Ct("context"),
              onKeyDown: (R) => {
                (R.key === "Enter" || R.key === " ") && (R.preventDefault(), Ct("context"));
              },
              children: [
                /* @__PURE__ */ T.jsxs("h3", { children: [
                  /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-circle-info crec-card-section-icon", "aria-hidden": "true" }),
                  " Context to Send"
                ] }),
                /* @__PURE__ */ T.jsx("i", { className: `fa-solid crec-card-chevron ${H.context ? "fa-chevron-right" : "fa-chevron-down"}` })
              ]
            }
          ),
          !H.context && /* @__PURE__ */ T.jsxs("div", { className: "crec-card-body context-options", children: [
            /* @__PURE__ */ T.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ T.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: a.contextToSend.stDescription,
                  onChange: (R) => le("stDescription", R.target.checked)
                }
              ),
              " ",
              "Description of SillyTavern & Char Card"
            ] }),
            /* @__PURE__ */ T.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ T.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: a.contextToSend.persona,
                  onChange: (R) => le("persona", R.target.checked)
                }
              ),
              " ",
              "User's Persona"
            ] }),
            (yn !== void 0 || hr) && /* @__PURE__ */ T.jsxs("div", { className: "message-options", children: [
              /* @__PURE__ */ T.jsx("h4", { children: "Messages to Include" }),
              /* @__PURE__ */ T.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: a.contextToSend.messages.type,
                  onChange: (R) => le("messages", {
                    ...a.contextToSend.messages,
                    type: R.target.value
                  }),
                  children: [
                    /* @__PURE__ */ T.jsx("option", { value: "none", children: "None" }),
                    /* @__PURE__ */ T.jsx("option", { value: "all", children: "All Messages" }),
                    /* @__PURE__ */ T.jsx("option", { value: "first", children: "First X Messages" }),
                    /* @__PURE__ */ T.jsx("option", { value: "last", children: "Last X Messages" }),
                    /* @__PURE__ */ T.jsx("option", { value: "range", children: "Range" })
                  ]
                }
              ),
              a.contextToSend.messages.type === "first" && /* @__PURE__ */ T.jsxs("div", { className: "crec-inline-number", children: [
                "First",
                " ",
                /* @__PURE__ */ T.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    value: a.contextToSend.messages.first ?? 10,
                    onChange: (R) => le("messages", {
                      ...a.contextToSend.messages,
                      first: parseInt(R.target.value) || 10
                    })
                  }
                ),
                " ",
                "Messages"
              ] }),
              a.contextToSend.messages.type === "last" && /* @__PURE__ */ T.jsxs("div", { className: "crec-inline-number", children: [
                "Last",
                " ",
                /* @__PURE__ */ T.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    value: a.contextToSend.messages.last ?? 10,
                    onChange: (R) => le("messages", {
                      ...a.contextToSend.messages,
                      last: parseInt(R.target.value) || 10
                    })
                  }
                ),
                " ",
                "Messages"
              ] }),
              a.contextToSend.messages.type === "range" && /* @__PURE__ */ T.jsxs("div", { className: "crec-inline-number", children: [
                "Range",
                " ",
                /* @__PURE__ */ T.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "0",
                    placeholder: "Start",
                    value: a.contextToSend.messages.range?.start ?? 0,
                    onChange: (R) => le("messages", {
                      ...a.contextToSend.messages,
                      range: {
                        ...a.contextToSend.messages.range,
                        start: parseInt(R.target.value) || 0
                      }
                    })
                  }
                ),
                " ",
                "to",
                " ",
                /* @__PURE__ */ T.jsx(
                  "input",
                  {
                    type: "number",
                    className: "text_pole small message-input",
                    min: "1",
                    placeholder: "End",
                    value: a.contextToSend.messages.range?.end ?? 10,
                    onChange: (R) => le("messages", {
                      ...a.contextToSend.messages,
                      range: {
                        ...a.contextToSend.messages.range,
                        end: parseInt(R.target.value) || 10
                      }
                    })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ T.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ T.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: a.contextToSend.charCard,
                  onChange: (R) => le("charCard", R.target.checked)
                }
              ),
              " ",
              "Selected Characters' Data"
            ] }),
            a.contextToSend.charCard && /* @__PURE__ */ T.jsx(
              Do,
              {
                items: me,
                value: l.selectedCharacterIndexes,
                onChange: (R) => s((Y) => ({ ...Y, selectedCharacterIndexes: R })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ T.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ T.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: a.contextToSend.worldInfo,
                  onChange: (R) => le("worldInfo", R.target.checked)
                }
              ),
              " ",
              "Selected World Info"
            ] }),
            a.contextToSend.worldInfo && /* @__PURE__ */ T.jsx(
              Do,
              {
                items: Ie,
                value: l.selectedWorldNames,
                onChange: (R) => s((Y) => ({ ...Y, selectedWorldNames: R })),
                multiple: !0,
                enableSearch: !0
              }
            ),
            /* @__PURE__ */ T.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ T.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: a.contextToSend.existingFields,
                  onChange: (R) => le("existingFields", R.target.checked)
                }
              ),
              " ",
              "Existing Field Content"
            ] }),
            /* @__PURE__ */ T.jsxs("label", { className: "checkbox_label", children: [
              /* @__PURE__ */ T.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: a.contextToSend.dontSendOtherGreetings,
                  onChange: (R) => le("dontSendOtherGreetings", R.target.checked)
                }
              ),
              " ",
              "Don't send other alternate greetings"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ T.jsxs("div", { className: `card crec-collapsible ${H.options ? "" : "expanded"}`, children: [
          /* @__PURE__ */ T.jsxs(
            "div",
            {
              className: "crec-card-head",
              role: "button",
              tabIndex: 0,
              onClick: () => Ct("options"),
              onKeyDown: (R) => {
                (R.key === "Enter" || R.key === " ") && (R.preventDefault(), Ct("options"));
              },
              children: [
                /* @__PURE__ */ T.jsxs("h3", { children: [
                  /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-sliders crec-card-section-icon", "aria-hidden": "true" }),
                  " Generation Options"
                ] }),
                /* @__PURE__ */ T.jsx("i", { className: `fa-solid crec-card-chevron ${H.options ? "fa-chevron-right" : "fa-chevron-down"}` })
              ]
            }
          ),
          !H.options && /* @__PURE__ */ T.jsxs("div", { className: "crec-card-body", children: [
            /* @__PURE__ */ T.jsxs("label", { title: "You can edit in extension settings", children: [
              "Main Context Template",
              /* @__PURE__ */ T.jsx(
                Fo,
                {
                  onItemsChange: () => {
                  },
                  label: "Main Context Template",
                  items: We,
                  value: a.mainContextTemplatePreset,
                  onChange: (R) => Q("mainContextTemplatePreset", R ?? "default")
                }
              )
            ] }),
            /* @__PURE__ */ T.jsxs("label", { children: [
              "Max Context Tokens",
              /* @__PURE__ */ T.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: a.maxContextType,
                  onChange: (R) => Q("maxContextType", R.target.value),
                  children: [
                    /* @__PURE__ */ T.jsx("option", { value: "profile", children: "Use profile preset" }),
                    /* @__PURE__ */ T.jsx("option", { value: "sampler", children: "Use active preset" }),
                    /* @__PURE__ */ T.jsx("option", { value: "custom", children: "Custom" })
                  ]
                }
              )
            ] }),
            a.maxContextType === "custom" && /* @__PURE__ */ T.jsx(
              "input",
              {
                type: "number",
                className: "text_pole",
                value: a.maxContextValue,
                onChange: (R) => Q("maxContextValue", parseInt(R.target.value) || 16384)
              }
            ),
            /* @__PURE__ */ T.jsxs("label", { children: [
              "Max Response Tokens",
              /* @__PURE__ */ T.jsx(
                "input",
                {
                  type: "number",
                  className: "text_pole",
                  value: a.maxResponseToken,
                  onChange: (R) => Q("maxResponseToken", parseInt(R.target.value) || 1024)
                }
              )
            ] }),
            /* @__PURE__ */ T.jsxs("label", { children: [
              "Output Format",
              /* @__PURE__ */ T.jsxs(
                "select",
                {
                  className: "text_pole",
                  value: a.outputFormat,
                  onChange: (R) => Q("outputFormat", R.target.value),
                  children: [
                    /* @__PURE__ */ T.jsx("option", { value: "none", children: "Plain Text" }),
                    /* @__PURE__ */ T.jsx("option", { value: "xml", children: "XML" }),
                    /* @__PURE__ */ T.jsx("option", { value: "json", children: "JSON" })
                  ]
                }
              )
            ] }),
            /* @__PURE__ */ T.jsxs("label", { className: "checkbox_label crec-debug-toggle", children: [
              /* @__PURE__ */ T.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: a.showDebugView,
                  onChange: (R) => Q("showDebugView", R.target.checked)
                }
              ),
              " ",
              "Show per-field debug view (captured last prompt + response)"
            ] }),
            /* @__PURE__ */ T.jsxs("div", { className: "crec-field-token-grid", children: [
              /* @__PURE__ */ T.jsxs("div", { className: "crec-field-token-grid-header", children: [
                /* @__PURE__ */ T.jsx("span", { children: "Per-field max response tokens" }),
                /* @__PURE__ */ T.jsxs(
                  "button",
                  {
                    type: "button",
                    className: "menu_button crec-field-token-reset",
                    title: "Reset all per-field overrides to built-in defaults (clears overrides, falls back to DEFAULT_FIELD_MAX_RESPONSE_TOKENS)",
                    onClick: () => Q("fieldMaxResponseTokens", {}),
                    children: [
                      /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-arrow-rotate-left", "aria-hidden": "true" }),
                      " Reset"
                    ]
                  }
                )
              ] }),
              Ln.map((R) => {
                const J = (a.fieldMaxResponseTokens ?? {})[R], fe = my[R], Oe = J !== void 0;
                return /* @__PURE__ */ T.jsxs("label", { className: "crec-field-token-row", title: Oe ? `Override (built-in default: ${fe})` : "Built-in default", children: [
                  /* @__PURE__ */ T.jsx("span", { className: "crec-field-token-label", children: Nn[R] }),
                  /* @__PURE__ */ T.jsx(
                    "input",
                    {
                      type: "number",
                      className: "text_pole crec-field-token-input",
                      min: 64,
                      max: 8192,
                      placeholder: String(fe),
                      value: Oe ? String(J) : "",
                      onChange: (be) => {
                        const Ge = be.target.value, De = parseInt(Ge, 10), we = Number.isFinite(De) && De > 0 ? De : void 0, et = { ...a.fieldMaxResponseTokens ?? {} };
                        we === void 0 ? delete et[R] : et[R] = we, Q("fieldMaxResponseTokens", et);
                      }
                    }
                  )
                ] }, R);
              })
            ] }),
            /* @__PURE__ */ T.jsxs("label", { className: "checkbox_label crec-wi-scan-toggle", title: "When enabled, only lorebook entries whose keys activated for the current chat are sent to the LLM. Falls back to sending all enabled entries of selected lorebooks if this SillyTavern version does not expose the World Info scan API.", children: [
              /* @__PURE__ */ T.jsx(
                "input",
                {
                  type: "checkbox",
                  checked: a.useWorldInfoActivationScan,
                  onChange: (R) => Q("useWorldInfoActivationScan", R.target.checked)
                }
              ),
              " ",
              "Use World Info activation scan (only send lorebook entries whose keys triggered for the current chat)"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ T.jsxs("div", { className: `card crec-collapsible ${H.instructions ? "" : "expanded"}`, children: [
          /* @__PURE__ */ T.jsxs(
            "div",
            {
              className: "crec-card-head",
              role: "button",
              tabIndex: 0,
              onClick: () => Ct("instructions"),
              onKeyDown: (R) => {
                (R.key === "Enter" || R.key === " ") && (R.preventDefault(), Ct("instructions"));
              },
              children: [
                /* @__PURE__ */ T.jsxs("h3", { children: [
                  /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-pen crec-card-section-icon", "aria-hidden": "true" }),
                  " Additional Instructions"
                ] }),
                /* @__PURE__ */ T.jsx(
                  "i",
                  {
                    className: `fa-solid crec-card-chevron ${H.instructions ? "fa-chevron-right" : "fa-chevron-down"}`
                  }
                )
              ]
            }
          ),
          !H.instructions && /* @__PURE__ */ T.jsxs("div", { className: "crec-card-body", children: [
            /* @__PURE__ */ T.jsx(
              Fo,
              {
                label: "Prompt Preset",
                items: Pe,
                value: a.promptPreset,
                onChange: (R) => Q("promptPreset", R ?? "default"),
                onItemsChange: (R) => Q(
                  "promptPresets",
                  R.reduce(
                    (Y, J) => ({ ...Y, [J.value]: a.promptPresets[J.value] ?? { content: "" } }),
                    {}
                  )
                ),
                enableCreate: !0,
                enableDelete: !0,
                enableRename: !0,
                readOnlyValues: ["default"]
              }
            ),
            /* @__PURE__ */ T.jsx(
              Ny,
              {
                value: a.promptPresets[a.promptPreset]?.content ?? "",
                onChange: (R) => Q("promptPresets", {
                  ...a.promptPresets,
                  [a.promptPreset]: { content: R.target.value }
                }),
                rows: 4
              }
            )
          ] })
        ] })
      ] }),
      /* @__PURE__ */ T.jsxs("div", { className: "wide-column", children: [
        /* @__PURE__ */ T.jsxs("div", { className: "tab-buttons", children: [
          /* @__PURE__ */ T.jsxs(
            "button",
            {
              type: "button",
              onClick: () => p("core"),
              className: `tab-button ${h === "core" ? "active" : ""}`,
              children: [
                /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-file-lines", "aria-hidden": "true" }),
                " Core Fields"
              ]
            }
          ),
          /* @__PURE__ */ T.jsxs(
            "button",
            {
              type: "button",
              onClick: () => p("draft"),
              className: `tab-button ${h === "draft" ? "active" : ""}`,
              children: [
                /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-pen-to-square", "aria-hidden": "true" }),
                " Draft Fields"
              ]
            }
          ),
          /* @__PURE__ */ T.jsx("div", { className: "right-aligned", children: h === "draft" && /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
            /* @__PURE__ */ T.jsxs(Ne, { onClick: je, children: [
              /* @__PURE__ */ T.jsx("i", { className: "fa-solid fa-plus" }),
              " Add"
            ] }),
            /* @__PURE__ */ T.jsx(Ne, { onClick: yi, children: "Export" }),
            /* @__PURE__ */ T.jsx(Ne, { onClick: Xt, children: "Import" })
          ] }) })
        ] }),
        /* @__PURE__ */ T.jsxs("div", { className: "tab-content-area", children: [
          h === "core" && /* @__PURE__ */ T.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ T.jsx("h3", { className: "crec-tab-section-title", children: "Core Character Fields" }),
            Ln.map((R) => {
              const Y = Mx[R];
              return Y ? /* @__PURE__ */ T.jsx(
                Dv,
                {
                  fieldId: R,
                  label: Y.label,
                  value: l.fields[R]?.value ?? "",
                  prompt: l.fields[R]?.prompt ?? "",
                  large: Y.large,
                  rows: Y.rows,
                  promptEnabled: Y.promptEnabled,
                  primary: Y.primary,
                  isGenerating: c.includes(R),
                  isDebug: Qt,
                  canUndo: se(R, !1),
                  onValueChange: (J, fe) => oe(J, fe, "value", !1),
                  onPromptChange: (J, fe) => oe(J, fe, "prompt", !1),
                  onGenerate: ee,
                  onUndo: (J) => he(J, !1),
                  onClear: (J) => re(J, !1),
                  onCompare: Je,
                  onShowDebug: (J) => N(J)
                },
                R
              ) : null;
            }),
            /* @__PURE__ */ T.jsx(
              sx,
              {
                greetings: de,
                onGreetingsChange: z,
                isGenerating: c.some((R) => R.startsWith("alternate_greetings_")),
                onGenerate: (R, Y, J) => ee(
                  `alternate_greetings_${R + 1}`,
                  Y ?? "generate",
                  J ?? (Y && Y !== "generate" ? de[R]?.value : void 0)
                ),
                onUndo: (R) => he(`alternate_greetings_${R + 1}`, !1),
                canUndo: (R) => se(`alternate_greetings_${R + 1}`, !1),
                onCompare: Je,
                onShowDebug: (R) => N(R)
              }
            )
          ] }),
          h === "draft" && /* @__PURE__ */ T.jsxs("div", { className: "card tab-content active", children: [
            /* @__PURE__ */ T.jsx("h3", { className: "crec-tab-section-title", children: "Draft Fields" }),
            Object.entries(l.draftFields).map(([R, Y]) => /* @__PURE__ */ T.jsx(
              Dv,
              {
                fieldId: R,
                label: Y.label,
                value: Y.value,
                prompt: Y.prompt,
                isDraft: !0,
                rows: 5,
                isGenerating: c.includes(R),
                isDebug: Qt,
                canUndo: se(R, !0),
                onValueChange: (J, fe) => oe(J, fe, "value", !0),
                onPromptChange: (J, fe) => oe(J, fe, "prompt", !0),
                onGenerate: ee,
                onUndo: (J) => he(J, !0),
                onClear: (J) => re(J, !0),
                onDelete: ce,
                onShowDebug: (J) => N(J)
              },
              R
            ))
          ] })
        ] })
      ] })
    ] }),
    C && /* @__PURE__ */ T.jsx(
      eh,
      {
        type: Bn.DISPLAY,
        content: /* @__PURE__ */ T.jsx(
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
    Qt && nt && E && /* @__PURE__ */ T.jsx(
      eh,
      {
        type: Bn.DISPLAY,
        content: /* @__PURE__ */ T.jsx(Nx, { capture: nt }),
        onComplete: () => N(null),
        options: { wide: !0, large: !0 }
      }
    )
  ] });
}, kx = () => {
  const [r, a] = ne.useState(!1), l = () => a(!0), s = () => a(!1);
  return window.openCharacterCreatorPopup = l, r ? /* @__PURE__ */ T.jsx(
    eh,
    {
      content: /* @__PURE__ */ T.jsx(Rx, {}),
      type: Bn.DISPLAY,
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
    `third-party/${pr}`,
    "templates/settings"
  );
  document.querySelector("#extensions_settings").insertAdjacentHTML("beforeend", r);
  const a = document.createElement("div"), l = document.querySelector(".charCreator_settings .inline-drawer-content");
  l && (l.prepend(a), vg.createRoot(a).render(
    /* @__PURE__ */ T.jsx(Uo.StrictMode, { children: /* @__PURE__ */ T.jsx($_, {}) })
  ));
  const s = '<div class="menu_button fa-solid fa-user-astronaut interactable charCreator-icon" title="Character Creator"></div>', c = [
    document.querySelector(".form_create_bottom_buttons_block"),
    document.querySelector("#GroupFavDelOkBack"),
    document.querySelector("#rm_buttons_container") ?? document.querySelector("#form_character_search_form")
  ], u = document.createElement("div");
  document.body.appendChild(u), vg.createRoot(u).render(
    /* @__PURE__ */ T.jsx(Uo.StrictMode, { children: /* @__PURE__ */ T.jsx(kx, {}) })
  ), c.forEach((m) => {
    if (!m) return;
    const h = document.createElement("div");
    h.innerHTML = s.trim();
    const p = h.firstChild;
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
}) : Te("error", `[${pr}] Make sure ST is updated.`);
export {
  jx as init
};
