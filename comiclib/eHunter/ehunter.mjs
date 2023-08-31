function z_(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
function Sk(t) {
  if (t.__esModule)
    return t;
  var e = t.default;
  if (typeof e == "function") {
    var n = function r() {
      return this instanceof r ? Reflect.construct(e, arguments, this.constructor) : e.apply(this, arguments);
    };
    n.prototype = e.prototype;
  } else
    n = {};
  return Object.defineProperty(n, "__esModule", { value: !0 }), Object.keys(t).forEach(function(r) {
    var o = Object.getOwnPropertyDescriptor(t, r);
    Object.defineProperty(n, r, o.get ? o : {
      enumerable: !0,
      get: function() {
        return t[r];
      }
    });
  }), n;
}
var H_ = { exports: {} }, xk = H_.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
typeof __g == "number" && (__g = xk);
var J = H_.exports, $k = {}.hasOwnProperty, ot = function(t, e) {
  return $k.call(t, e);
}, Y = function(t) {
  try {
    return !!t();
  } catch {
    return !0;
  }
}, ve = !Y(function() {
  return Object.defineProperty({}, "a", { get: function() {
    return 7;
  } }).a != 7;
}), V_ = { exports: {} }, Ek = V_.exports = { version: "2.6.9" };
typeof __e == "number" && (__e = Ek);
var ye = V_.exports, pe = {}, X = function(t) {
  return typeof t == "object" ? t !== null : typeof t == "function";
}, Ck = X, Q = function(t) {
  if (!Ck(t))
    throw TypeError(t + " is not an object!");
  return t;
}, _d = X, _u = J.document, Ik = _d(_u) && _d(_u.createElement), Ml = function(t) {
  return Ik ? _u.createElement(t) : {};
}, U_ = !ve && !Y(function() {
  return Object.defineProperty(Ml("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
}), Do = X, ln = function(t, e) {
  if (!Do(t))
    return t;
  var n, r;
  if (e && typeof (n = t.toString) == "function" && !Do(r = n.call(t)) || typeof (n = t.valueOf) == "function" && !Do(r = n.call(t)) || !e && typeof (n = t.toString) == "function" && !Do(r = n.call(t)))
    return r;
  throw TypeError("Can't convert object to primitive value");
}, bd = Q, Tk = U_, Ak = ln, Ok = Object.defineProperty;
pe.f = ve ? Object.defineProperty : function(e, n, r) {
  if (bd(e), n = Ak(n, !0), bd(r), Tk)
    try {
      return Ok(e, n, r);
    } catch {
    }
  if ("get" in r || "set" in r)
    throw TypeError("Accessors not supported!");
  return "value" in r && (e[n] = r.value), e;
};
var qn = function(t, e) {
  return {
    enumerable: !(t & 1),
    configurable: !(t & 2),
    writable: !(t & 4),
    value: e
  };
}, Dk = pe, Pk = qn, it = ve ? function(t, e, n) {
  return Dk.f(t, e, Pk(1, n));
} : function(t, e, n) {
  return t[e] = n, t;
}, G_ = { exports: {} }, Fk = 0, Rk = Math.random(), jn = function(t) {
  return "Symbol(".concat(t === void 0 ? "" : t, ")_", (++Fk + Rk).toString(36));
}, W_ = { exports: {} }, K_ = !1, Nk = ye, yd = J, wd = "__core-js_shared__", kd = yd[wd] || (yd[wd] = {});
(W_.exports = function(t, e) {
  return kd[t] || (kd[t] = e !== void 0 ? e : {});
})("versions", []).push({
  version: Nk.version,
  mode: "global",
  copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
});
var fs = W_.exports, Mk = fs("native-function-to-string", Function.toString), Lk = J, Po = it, Sd = ot, Zs = jn("src"), Ll = Mk, Z_ = "toString", qk = ("" + Ll).split(Z_);
ye.inspectSource = function(t) {
  return Ll.call(t);
};
(G_.exports = function(t, e, n, r) {
  var o = typeof n == "function";
  o && (Sd(n, "name") || Po(n, "name", e)), t[e] !== n && (o && (Sd(n, Zs) || Po(n, Zs, t[e] ? "" + t[e] : qk.join(String(e)))), t === Lk ? t[e] = n : r ? t[e] ? t[e] = n : Po(t, e, n) : (delete t[e], Po(t, e, n)));
})(Function.prototype, Z_, function() {
  return typeof this == "function" && this[Zs] || Ll.call(this);
});
var Ke = G_.exports, kt = function(t) {
  if (typeof t != "function")
    throw TypeError(t + " is not a function!");
  return t;
}, jk = kt, St = function(t, e, n) {
  if (jk(t), e === void 0)
    return t;
  switch (n) {
    case 1:
      return function(r) {
        return t.call(e, r);
      };
    case 2:
      return function(r, o) {
        return t.call(e, r, o);
      };
    case 3:
      return function(r, o, i) {
        return t.call(e, r, o, i);
      };
  }
  return function() {
    return t.apply(e, arguments);
  };
}, tr = J, $i = ye, Bk = it, zk = Ke, xd = St, Js = "prototype", Te = function(t, e, n) {
  var r = t & Te.F, o = t & Te.G, i = t & Te.S, s = t & Te.P, a = t & Te.B, c = o ? tr : i ? tr[e] || (tr[e] = {}) : (tr[e] || {})[Js], u = o ? $i : $i[e] || ($i[e] = {}), l = u[Js] || (u[Js] = {}), f, d, h, b;
  o && (n = e);
  for (f in n)
    d = !r && c && c[f] !== void 0, h = (d ? c : n)[f], b = a && d ? xd(h, tr) : s && typeof h == "function" ? xd(Function.call, h) : h, c && zk(c, f, h, t & Te.U), u[f] != h && Bk(u, f, b), s && l[f] != h && (l[f] = h);
};
tr.core = $i;
Te.F = 1;
Te.G = 2;
Te.S = 4;
Te.P = 8;
Te.B = 16;
Te.W = 32;
Te.U = 64;
Te.R = 128;
var D = Te, J_ = { exports: {} }, On = jn("meta"), Hk = X, ql = ot, Vk = pe.f, Uk = 0, ds = Object.isExtensible || function() {
  return !0;
}, Gk = !Y(function() {
  return ds(Object.preventExtensions({}));
}), jl = function(t) {
  Vk(t, On, { value: {
    i: "O" + ++Uk,
    // object ID
    w: {}
    // weak collections IDs
  } });
}, Wk = function(t, e) {
  if (!Hk(t))
    return typeof t == "symbol" ? t : (typeof t == "string" ? "S" : "P") + t;
  if (!ql(t, On)) {
    if (!ds(t))
      return "F";
    if (!e)
      return "E";
    jl(t);
  }
  return t[On].i;
}, Kk = function(t, e) {
  if (!ql(t, On)) {
    if (!ds(t))
      return !0;
    if (!e)
      return !1;
    jl(t);
  }
  return t[On].w;
}, Zk = function(t) {
  return Gk && Jk.NEED && ds(t) && !ql(t, On) && jl(t), t;
}, Jk = J_.exports = {
  KEY: On,
  NEED: !1,
  fastKey: Wk,
  getWeak: Kk,
  onFreeze: Zk
}, fn = J_.exports, Y_ = { exports: {} }, bu = fs("wks"), Yk = jn, yu = J.Symbol, $d = typeof yu == "function", Xk = Y_.exports = function(t) {
  return bu[t] || (bu[t] = $d && yu[t] || ($d ? yu : Yk)("Symbol." + t));
};
Xk.store = bu;
var ae = Y_.exports, Qk = pe.f, e1 = ot, Ed = ae("toStringTag"), _r = function(t, e, n) {
  t && !e1(t = n ? t : t.prototype, Ed) && Qk(t, Ed, { configurable: !0, value: e });
}, hs = {};
hs.f = ae;
var t1 = J, Cd = ye, n1 = hs, r1 = pe.f, X_ = function(t) {
  var e = Cd.Symbol || (Cd.Symbol = t1.Symbol || {});
  t.charAt(0) != "_" && !(t in e) && r1(e, t, { value: n1.f(t) });
}, o1 = {}.toString, Ht = function(t) {
  return o1.call(t).slice(8, -1);
}, i1 = Ht, bo = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
  return i1(t) == "String" ? t.split("") : Object(t);
}, Vt = function(t) {
  if (t == null)
    throw TypeError("Can't call method on  " + t);
  return t;
}, s1 = bo, a1 = Vt, st = function(t) {
  return s1(a1(t));
}, c1 = Math.ceil, u1 = Math.floor, xt = function(t) {
  return isNaN(t = +t) ? 0 : (t > 0 ? u1 : c1)(t);
}, l1 = xt, f1 = Math.min, le = function(t) {
  return t > 0 ? f1(l1(t), 9007199254740991) : 0;
}, d1 = xt, h1 = Math.max, p1 = Math.min, Bn = function(t, e) {
  return t = d1(t), t < 0 ? h1(t + e, 0) : p1(t, e);
}, v1 = st, g1 = le, m1 = Bn, ps = function(t) {
  return function(e, n, r) {
    var o = v1(e), i = g1(o.length), s = m1(r, i), a;
    if (t && n != n) {
      for (; i > s; )
        if (a = o[s++], a != a)
          return !0;
    } else
      for (; i > s; s++)
        if ((t || s in o) && o[s] === n)
          return t || s || 0;
    return !t && -1;
  };
}, Id = fs("keys"), _1 = jn, Bl = function(t) {
  return Id[t] || (Id[t] = _1(t));
}, Td = ot, b1 = st, y1 = ps(!1), w1 = Bl("IE_PROTO"), Q_ = function(t, e) {
  var n = b1(t), r = 0, o = [], i;
  for (i in n)
    i != w1 && Td(n, i) && o.push(i);
  for (; e.length > r; )
    Td(n, i = e[r++]) && (~y1(o, i) || o.push(i));
  return o;
}, zl = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), k1 = Q_, S1 = zl, zn = Object.keys || function(e) {
  return k1(e, S1);
}, yo = {};
yo.f = Object.getOwnPropertySymbols;
var br = {};
br.f = {}.propertyIsEnumerable;
var x1 = zn, $1 = yo, E1 = br, C1 = function(t) {
  var e = x1(t), n = $1.f;
  if (n)
    for (var r = n(t), o = E1.f, i = 0, s; r.length > i; )
      o.call(t, s = r[i++]) && e.push(s);
  return e;
}, I1 = Ht, vs = Array.isArray || function(e) {
  return I1(e) == "Array";
}, T1 = Vt, De = function(t) {
  return Object(T1(t));
}, A1 = pe, O1 = Q, D1 = zn, eb = ve ? Object.defineProperties : function(e, n) {
  O1(e);
  for (var r = D1(n), o = r.length, i = 0, s; o > i; )
    A1.f(e, s = r[i++], n[s]);
  return e;
}, Ad = J.document, Hl = Ad && Ad.documentElement, P1 = Q, F1 = eb, Od = zl, R1 = Bl("IE_PROTO"), Ys = function() {
}, wu = "prototype", Ei = function() {
  var t = Ml("iframe"), e = Od.length, n = "<", r = ">", o;
  for (t.style.display = "none", Hl.appendChild(t), t.src = "javascript:", o = t.contentWindow.document, o.open(), o.write(n + "script" + r + "document.F=Object" + n + "/script" + r), o.close(), Ei = o.F; e--; )
    delete Ei[wu][Od[e]];
  return Ei();
}, Hn = Object.create || function(e, n) {
  var r;
  return e !== null ? (Ys[wu] = P1(e), r = new Ys(), Ys[wu] = null, r[R1] = e) : r = Ei(), n === void 0 ? r : F1(r, n);
}, Vl = {}, dn = {}, N1 = Q_, M1 = zl.concat("length", "prototype");
dn.f = Object.getOwnPropertyNames || function(e) {
  return N1(e, M1);
};
var L1 = st, tb = dn.f, q1 = {}.toString, nb = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], j1 = function(t) {
  try {
    return tb(t);
  } catch {
    return nb.slice();
  }
};
Vl.f = function(e) {
  return nb && q1.call(e) == "[object Window]" ? j1(e) : tb(L1(e));
};
var lt = {}, B1 = br, z1 = qn, H1 = st, V1 = ln, U1 = ot, G1 = U_, Dd = Object.getOwnPropertyDescriptor;
lt.f = ve ? Dd : function(e, n) {
  if (e = H1(e), n = V1(n, !0), G1)
    try {
      return Dd(e, n);
    } catch {
    }
  if (U1(e, n))
    return z1(!B1.f.call(e, n), e[n]);
};
var gs = J, be = ot, ku = ve, Ee = D, Pd = Ke, W1 = fn.KEY, Ul = Y, Gl = fs, Wl = _r, K1 = jn, wo = ae, Z1 = hs, J1 = X_, Y1 = C1, X1 = vs, Su = Q, Q1 = X, eS = De, ms = st, Kl = ln, xu = qn, ao = Hn, rb = Vl, ob = lt, _s = yo, ib = pe, tS = zn, sb = ob.f, Sn = ib.f, ab = rb.f, Le = gs.Symbol, ji = gs.JSON, Fo = ji && ji.stringify, en = "prototype", Ne = wo("_hidden"), Fd = wo("toPrimitive"), nS = {}.propertyIsEnumerable, Rr = Gl("symbol-registry"), jt = Gl("symbols"), ko = Gl("op-symbols"), Xe = Object[en], yr = typeof Le == "function" && !!_s.f, Xs = gs.QObject, $u = !Xs || !Xs[en] || !Xs[en].findChild, Eu = ku && Ul(function() {
  return ao(Sn({}, "a", {
    get: function() {
      return Sn(this, "a", { value: 7 }).a;
    }
  })).a != 7;
}) ? function(t, e, n) {
  var r = sb(Xe, e);
  r && delete Xe[e], Sn(t, e, n), r && t !== Xe && Sn(Xe, e, r);
} : Sn, Rd = function(t) {
  var e = jt[t] = ao(Le[en]);
  return e._k = t, e;
}, Cu = yr && typeof Le.iterator == "symbol" ? function(t) {
  return typeof t == "symbol";
} : function(t) {
  return t instanceof Le;
}, bs = function(e, n, r) {
  return e === Xe && bs(ko, n, r), Su(e), n = Kl(n, !0), Su(r), be(jt, n) ? (r.enumerable ? (be(e, Ne) && e[Ne][n] && (e[Ne][n] = !1), r = ao(r, { enumerable: xu(0, !1) })) : (be(e, Ne) || Sn(e, Ne, xu(1, {})), e[Ne][n] = !0), Eu(e, n, r)) : Sn(e, n, r);
}, cb = function(e, n) {
  Su(e);
  for (var r = Y1(n = ms(n)), o = 0, i = r.length, s; i > o; )
    bs(e, s = r[o++], n[s]);
  return e;
}, rS = function(e, n) {
  return n === void 0 ? ao(e) : cb(ao(e), n);
}, Nd = function(e) {
  var n = nS.call(this, e = Kl(e, !0));
  return this === Xe && be(jt, e) && !be(ko, e) ? !1 : n || !be(this, e) || !be(jt, e) || be(this, Ne) && this[Ne][e] ? n : !0;
}, ub = function(e, n) {
  if (e = ms(e), n = Kl(n, !0), !(e === Xe && be(jt, n) && !be(ko, n))) {
    var r = sb(e, n);
    return r && be(jt, n) && !(be(e, Ne) && e[Ne][n]) && (r.enumerable = !0), r;
  }
}, lb = function(e) {
  for (var n = ab(ms(e)), r = [], o = 0, i; n.length > o; )
    !be(jt, i = n[o++]) && i != Ne && i != W1 && r.push(i);
  return r;
}, fb = function(e) {
  for (var n = e === Xe, r = ab(n ? ko : ms(e)), o = [], i = 0, s; r.length > i; )
    be(jt, s = r[i++]) && (!n || be(Xe, s)) && o.push(jt[s]);
  return o;
};
yr || (Le = function() {
  if (this instanceof Le)
    throw TypeError("Symbol is not a constructor!");
  var e = K1(arguments.length > 0 ? arguments[0] : void 0), n = function(r) {
    this === Xe && n.call(ko, r), be(this, Ne) && be(this[Ne], e) && (this[Ne][e] = !1), Eu(this, e, xu(1, r));
  };
  return ku && $u && Eu(Xe, e, { configurable: !0, set: n }), Rd(e);
}, Pd(Le[en], "toString", function() {
  return this._k;
}), ob.f = ub, ib.f = bs, dn.f = rb.f = lb, br.f = Nd, _s.f = fb, ku && !K_ && Pd(Xe, "propertyIsEnumerable", Nd, !0), Z1.f = function(t) {
  return Rd(wo(t));
});
Ee(Ee.G + Ee.W + Ee.F * !yr, { Symbol: Le });
for (var Md = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(",")
), Ld = 0; Md.length > Ld; )
  wo(Md[Ld++]);
for (var qd = tS(wo.store), jd = 0; qd.length > jd; )
  J1(qd[jd++]);
Ee(Ee.S + Ee.F * !yr, "Symbol", {
  // 19.4.2.1 Symbol.for(key)
  for: function(t) {
    return be(Rr, t += "") ? Rr[t] : Rr[t] = Le(t);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function(e) {
    if (!Cu(e))
      throw TypeError(e + " is not a symbol!");
    for (var n in Rr)
      if (Rr[n] === e)
        return n;
  },
  useSetter: function() {
    $u = !0;
  },
  useSimple: function() {
    $u = !1;
  }
});
Ee(Ee.S + Ee.F * !yr, "Object", {
  // 19.1.2.2 Object.create(O [, Properties])
  create: rS,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: bs,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: cb,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: ub,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: lb,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: fb
});
var oS = Ul(function() {
  _s.f(1);
});
Ee(Ee.S + Ee.F * oS, "Object", {
  getOwnPropertySymbols: function(e) {
    return _s.f(eS(e));
  }
});
ji && Ee(Ee.S + Ee.F * (!yr || Ul(function() {
  var t = Le();
  return Fo([t]) != "[null]" || Fo({ a: t }) != "{}" || Fo(Object(t)) != "{}";
})), "JSON", {
  stringify: function(e) {
    for (var n = [e], r = 1, o, i; arguments.length > r; )
      n.push(arguments[r++]);
    if (i = o = n[1], !(!Q1(o) && e === void 0 || Cu(e)))
      return X1(o) || (o = function(s, a) {
        if (typeof i == "function" && (a = i.call(this, s, a)), !Cu(a))
          return a;
      }), n[1] = o, Fo.apply(ji, n);
  }
});
Le[en][Fd] || it(Le[en], Fd, Le[en].valueOf);
Wl(Le, "Symbol");
Wl(Math, "Math", !0);
Wl(gs.JSON, "JSON", !0);
var Bd = D;
Bd(Bd.S, "Object", { create: Hn });
var Qs = D;
Qs(Qs.S + Qs.F * !ve, "Object", { defineProperty: pe.f });
var ea = D;
ea(ea.S + ea.F * !ve, "Object", { defineProperties: eb });
var ta = D, iS = ye, sS = Y, $t = function(t, e) {
  var n = (iS.Object || {})[t] || Object[t], r = {};
  r[t] = e(n), ta(ta.S + ta.F * sS(function() {
    n(1);
  }), "Object", r);
}, aS = st, cS = lt.f;
$t("getOwnPropertyDescriptor", function() {
  return function(e, n) {
    return cS(aS(e), n);
  };
});
var uS = ot, lS = De, zd = Bl("IE_PROTO"), fS = Object.prototype, Vn = Object.getPrototypeOf || function(t) {
  return t = lS(t), uS(t, zd) ? t[zd] : typeof t.constructor == "function" && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? fS : null;
}, dS = De, hS = Vn;
$t("getPrototypeOf", function() {
  return function(e) {
    return hS(dS(e));
  };
});
var pS = De, vS = zn;
$t("keys", function() {
  return function(e) {
    return vS(pS(e));
  };
});
$t("getOwnPropertyNames", function() {
  return Vl.f;
});
var gS = X, mS = fn.onFreeze;
$t("freeze", function(t) {
  return function(n) {
    return t && gS(n) ? t(mS(n)) : n;
  };
});
var _S = X, bS = fn.onFreeze;
$t("seal", function(t) {
  return function(n) {
    return t && _S(n) ? t(bS(n)) : n;
  };
});
var yS = X, wS = fn.onFreeze;
$t("preventExtensions", function(t) {
  return function(n) {
    return t && yS(n) ? t(wS(n)) : n;
  };
});
var kS = X;
$t("isFrozen", function(t) {
  return function(n) {
    return kS(n) ? t ? t(n) : !1 : !0;
  };
});
var SS = X;
$t("isSealed", function(t) {
  return function(n) {
    return SS(n) ? t ? t(n) : !1 : !0;
  };
});
var xS = X;
$t("isExtensible", function(t) {
  return function(n) {
    return xS(n) ? t ? t(n) : !0 : !1;
  };
});
var $S = ve, Hd = zn, ES = yo, CS = br, IS = De, TS = bo, Ro = Object.assign, db = !Ro || Y(function() {
  var t = {}, e = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
  return t[n] = 7, r.split("").forEach(function(o) {
    e[o] = o;
  }), Ro({}, t)[n] != 7 || Object.keys(Ro({}, e)).join("") != r;
}) ? function(e, n) {
  for (var r = IS(e), o = arguments.length, i = 1, s = ES.f, a = CS.f; o > i; )
    for (var c = TS(arguments[i++]), u = s ? Hd(c).concat(s(c)) : Hd(c), l = u.length, f = 0, d; l > f; )
      d = u[f++], (!$S || a.call(c, d)) && (r[d] = c[d]);
  return r;
} : Ro, na = D;
na(na.S + na.F, "Object", { assign: db });
var hb = Object.is || function(e, n) {
  return e === n ? e !== 0 || 1 / e === 1 / n : e != e && n != n;
}, Vd = D;
Vd(Vd.S, "Object", { is: hb });
var AS = X, OS = Q, Ud = function(t, e) {
  if (OS(t), !AS(e) && e !== null)
    throw TypeError(e + ": can't set as prototype!");
}, Zl = {
  set: Object.setPrototypeOf || ("__proto__" in {} ? (
    // eslint-disable-line
    function(t, e, n) {
      try {
        n = St(Function.call, lt.f(Object.prototype, "__proto__").set, 2), n(t, []), e = !(t instanceof Array);
      } catch {
        e = !0;
      }
      return function(o, i) {
        return Ud(o, i), e ? o.__proto__ = i : n(o, i), o;
      };
    }({}, !1)
  ) : void 0),
  check: Ud
}, Gd = D;
Gd(Gd.S, "Object", { setPrototypeOf: Zl.set });
var Iu = Ht, DS = ae("toStringTag"), PS = Iu(function() {
  return arguments;
}()) == "Arguments", FS = function(t, e) {
  try {
    return t[e];
  } catch {
  }
}, So = function(t) {
  var e, n, r;
  return t === void 0 ? "Undefined" : t === null ? "Null" : typeof (n = FS(e = Object(t), DS)) == "string" ? n : PS ? Iu(e) : (r = Iu(e)) == "Object" && typeof e.callee == "function" ? "Arguments" : r;
}, RS = So, pb = {};
pb[ae("toStringTag")] = "z";
pb + "" != "[object z]" && Ke(Object.prototype, "toString", function() {
  return "[object " + RS(this) + "]";
}, !0);
var vb = function(t, e, n) {
  var r = n === void 0;
  switch (e.length) {
    case 0:
      return r ? t() : t.call(n);
    case 1:
      return r ? t(e[0]) : t.call(n, e[0]);
    case 2:
      return r ? t(e[0], e[1]) : t.call(n, e[0], e[1]);
    case 3:
      return r ? t(e[0], e[1], e[2]) : t.call(n, e[0], e[1], e[2]);
    case 4:
      return r ? t(e[0], e[1], e[2], e[3]) : t.call(n, e[0], e[1], e[2], e[3]);
  }
  return t.apply(n, e);
}, NS = kt, MS = X, LS = vb, Wd = [].slice, ra = {}, qS = function(t, e, n) {
  if (!(e in ra)) {
    for (var r = [], o = 0; o < e; o++)
      r[o] = "a[" + o + "]";
    ra[e] = Function("F,a", "return new F(" + r.join(",") + ")");
  }
  return ra[e](t, n);
}, gb = Function.bind || function(e) {
  var n = NS(this), r = Wd.call(arguments, 1), o = function() {
    var i = r.concat(Wd.call(arguments));
    return this instanceof o ? qS(n, i.length, i) : LS(n, i, e);
  };
  return MS(n.prototype) && (o.prototype = n.prototype), o;
}, Kd = D;
Kd(Kd.P, "Function", { bind: gb });
var jS = pe.f, Zd = Function.prototype, BS = /^\s*function ([^ (]*)/, Jd = "name";
Jd in Zd || ve && jS(Zd, Jd, {
  configurable: !0,
  get: function() {
    try {
      return ("" + this).match(BS)[1];
    } catch {
      return "";
    }
  }
});
var Yd = X, zS = Vn, Xd = ae("hasInstance"), Qd = Function.prototype;
Xd in Qd || pe.f(Qd, Xd, { value: function(t) {
  if (typeof this != "function" || !Yd(t))
    return !1;
  if (!Yd(this.prototype))
    return t instanceof this;
  for (; t = zS(t); )
    if (this.prototype === t)
      return !0;
  return !1;
} });
var Jl = `	
\v\f\r   ᠎             　\u2028\u2029\uFEFF`, oa = D, HS = Vt, VS = Y, Tu = Jl, Bi = "[" + Tu + "]", eh = "​", US = RegExp("^" + Bi + Bi + "*"), GS = RegExp(Bi + Bi + "*$"), mb = function(t, e, n) {
  var r = {}, o = VS(function() {
    return !!Tu[t]() || eh[t]() != eh;
  }), i = r[t] = o ? e(WS) : Tu[t];
  n && (r[n] = i), oa(oa.P + oa.F * o, "String", r);
}, WS = mb.trim = function(t, e) {
  return t = String(HS(t)), e & 1 && (t = t.replace(US, "")), e & 2 && (t = t.replace(GS, "")), t;
}, wr = mb, No = J.parseInt, KS = wr.trim, th = Jl, ZS = /^[-+]?0[xX]/, _b = No(th + "08") !== 8 || No(th + "0x16") !== 22 ? function(e, n) {
  var r = KS(String(e), 3);
  return No(r, n >>> 0 || (ZS.test(r) ? 16 : 10));
} : No, ia = D, nh = _b;
ia(ia.G + ia.F * (parseInt != nh), { parseInt: nh });
var sa = J.parseFloat, JS = wr.trim, bb = 1 / sa(Jl + "-0") !== -1 / 0 ? function(e) {
  var n = JS(String(e), 3), r = sa(n);
  return r === 0 && n.charAt(0) == "-" ? -0 : r;
} : sa, aa = D, rh = bb;
aa(aa.G + aa.F * (parseFloat != rh), { parseFloat: rh });
var YS = X, oh = Zl.set, Yl = function(t, e, n) {
  var r = e.constructor, o;
  return r !== n && typeof r == "function" && (o = r.prototype) !== n.prototype && YS(o) && oh && oh(t, o), t;
}, yb = J, ih = ot, wb = Ht, XS = Yl, QS = ln, ex = Y, tx = dn.f, nx = lt.f, rx = pe.f, ox = wr.trim, zi = "Number", Be = yb[zi], Mo = Be, Ci = Be.prototype, ix = wb(Hn(Ci)) == zi, sx = "trim" in String.prototype, sh = function(t) {
  var e = QS(t, !1);
  if (typeof e == "string" && e.length > 2) {
    e = sx ? e.trim() : ox(e, 3);
    var n = e.charCodeAt(0), r, o, i;
    if (n === 43 || n === 45) {
      if (r = e.charCodeAt(2), r === 88 || r === 120)
        return NaN;
    } else if (n === 48) {
      switch (e.charCodeAt(1)) {
        case 66:
        case 98:
          o = 2, i = 49;
          break;
        case 79:
        case 111:
          o = 8, i = 55;
          break;
        default:
          return +e;
      }
      for (var s = e.slice(2), a = 0, c = s.length, u; a < c; a++)
        if (u = s.charCodeAt(a), u < 48 || u > i)
          return NaN;
      return parseInt(s, o);
    }
  }
  return +e;
};
if (!Be(" 0o1") || !Be("0b1") || Be("+0x1")) {
  Be = function(e) {
    var n = arguments.length < 1 ? 0 : e, r = this;
    return r instanceof Be && (ix ? ex(function() {
      Ci.valueOf.call(r);
    }) : wb(r) != zi) ? XS(new Mo(sh(n)), r, Be) : sh(n);
  };
  for (var ah = ve ? tx(Mo) : (
    // ES3:
    "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(",")
  ), ca = 0, Lo; ah.length > ca; ca++)
    ih(Mo, Lo = ah[ca]) && !ih(Be, Lo) && rx(Be, Lo, nx(Mo, Lo));
  Be.prototype = Ci, Ci.constructor = Be, Ke(yb, zi, Be);
}
var ax = Ht, kb = function(t, e) {
  if (typeof t != "number" && ax(t) != "Number")
    throw TypeError(e);
  return +t;
}, cx = xt, ux = Vt, Xl = function(e) {
  var n = String(ux(this)), r = "", o = cx(e);
  if (o < 0 || o == 1 / 0)
    throw RangeError("Count can't be negative");
  for (; o > 0; (o >>>= 1) && (n += n))
    o & 1 && (r += n);
  return r;
}, ua = D, lx = xt, fx = kb, Au = Xl, ch = 1 .toFixed, Sb = Math.floor, vr = [0, 0, 0, 0, 0, 0], uh = "Number.toFixed: incorrect invocation!", Ii = "0", Kn = function(t, e) {
  for (var n = -1, r = e; ++n < 6; )
    r += t * vr[n], vr[n] = r % 1e7, r = Sb(r / 1e7);
}, la = function(t) {
  for (var e = 6, n = 0; --e >= 0; )
    n += vr[e], vr[e] = Sb(n / t), n = n % t * 1e7;
}, lh = function() {
  for (var t = 6, e = ""; --t >= 0; )
    if (e !== "" || t === 0 || vr[t] !== 0) {
      var n = String(vr[t]);
      e = e === "" ? n : e + Au.call(Ii, 7 - n.length) + n;
    }
  return e;
}, rr = function(t, e, n) {
  return e === 0 ? n : e % 2 === 1 ? rr(t, e - 1, n * t) : rr(t * t, e / 2, n);
}, dx = function(t) {
  for (var e = 0, n = t; n >= 4096; )
    e += 12, n /= 4096;
  for (; n >= 2; )
    e += 1, n /= 2;
  return e;
};
ua(ua.P + ua.F * (!!ch && (8e-5.toFixed(3) !== "0.000" || 0.9.toFixed(0) !== "1" || 1.255.toFixed(2) !== "1.25" || 1000000000000000100 .toFixed(0) !== "1000000000000000128") || !Y(function() {
  ch.call({});
})), "Number", {
  toFixed: function(e) {
    var n = fx(this, uh), r = lx(e), o = "", i = Ii, s, a, c, u;
    if (r < 0 || r > 20)
      throw RangeError(uh);
    if (n != n)
      return "NaN";
    if (n <= -1e21 || n >= 1e21)
      return String(n);
    if (n < 0 && (o = "-", n = -n), n > 1e-21)
      if (s = dx(n * rr(2, 69, 1)) - 69, a = s < 0 ? n * rr(2, -s, 1) : n / rr(2, s, 1), a *= 4503599627370496, s = 52 - s, s > 0) {
        for (Kn(0, a), c = r; c >= 7; )
          Kn(1e7, 0), c -= 7;
        for (Kn(rr(10, c, 1), 0), c = s - 1; c >= 23; )
          la(1 << 23), c -= 23;
        la(1 << c), Kn(1, 1), la(2), i = lh();
      } else
        Kn(0, a), Kn(1 << -s, 0), i = lh() + Au.call(Ii, r);
    return r > 0 ? (u = i.length, i = o + (u <= r ? "0." + Au.call(Ii, r - u) + i : i.slice(0, u - r) + "." + i.slice(u - r))) : i = o + i, i;
  }
});
var fa = D, fh = Y, hx = kb, qo = 1 .toPrecision;
fa(fa.P + fa.F * (fh(function() {
  return qo.call(1, void 0) !== "1";
}) || !fh(function() {
  qo.call({});
})), "Number", {
  toPrecision: function(e) {
    var n = hx(this, "Number#toPrecision: incorrect invocation!");
    return e === void 0 ? qo.call(n) : qo.call(n, e);
  }
});
var dh = D;
dh(dh.S, "Number", { EPSILON: Math.pow(2, -52) });
var hh = D, px = J.isFinite;
hh(hh.S, "Number", {
  isFinite: function(e) {
    return typeof e == "number" && px(e);
  }
});
var vx = X, gx = Math.floor, xb = function(e) {
  return !vx(e) && isFinite(e) && gx(e) === e;
}, ph = D;
ph(ph.S, "Number", { isInteger: xb });
var vh = D;
vh(vh.S, "Number", {
  isNaN: function(e) {
    return e != e;
  }
});
var gh = D, mx = xb, _x = Math.abs;
gh(gh.S, "Number", {
  isSafeInteger: function(e) {
    return mx(e) && _x(e) <= 9007199254740991;
  }
});
var mh = D;
mh(mh.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
var _h = D;
_h(_h.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 });
var da = D, bh = bb;
da(da.S + da.F * (Number.parseFloat != bh), "Number", { parseFloat: bh });
var ha = D, yh = _b;
ha(ha.S + ha.F * (Number.parseInt != yh), "Number", { parseInt: yh });
var $b = Math.log1p || function(e) {
  return (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : Math.log(1 + e);
}, pa = D, bx = $b, wh = Math.sqrt, va = Math.acosh;
pa(pa.S + pa.F * !(va && Math.floor(va(Number.MAX_VALUE)) == 710 && va(1 / 0) == 1 / 0), "Math", {
  acosh: function(e) {
    return (e = +e) < 1 ? NaN : e > 9490626562425156e-8 ? Math.log(e) + Math.LN2 : bx(e - 1 + wh(e - 1) * wh(e + 1));
  }
});
var ga = D, kh = Math.asinh;
function Eb(t) {
  return !isFinite(t = +t) || t == 0 ? t : t < 0 ? -Eb(-t) : Math.log(t + Math.sqrt(t * t + 1));
}
ga(ga.S + ga.F * !(kh && 1 / kh(0) > 0), "Math", { asinh: Eb });
var ma = D, Sh = Math.atanh;
ma(ma.S + ma.F * !(Sh && 1 / Sh(-0) < 0), "Math", {
  atanh: function(e) {
    return (e = +e) == 0 ? e : Math.log((1 + e) / (1 - e)) / 2;
  }
});
var Ql = Math.sign || function(e) {
  return (e = +e) == 0 || e != e ? e : e < 0 ? -1 : 1;
}, xh = D, yx = Ql;
xh(xh.S, "Math", {
  cbrt: function(e) {
    return yx(e = +e) * Math.pow(Math.abs(e), 1 / 3);
  }
});
var $h = D;
$h($h.S, "Math", {
  clz32: function(e) {
    return (e >>>= 0) ? 31 - Math.floor(Math.log(e + 0.5) * Math.LOG2E) : 32;
  }
});
var Eh = D, Ch = Math.exp;
Eh(Eh.S, "Math", {
  cosh: function(e) {
    return (Ch(e = +e) + Ch(-e)) / 2;
  }
});
var Nr = Math.expm1, ef = !Nr || Nr(10) > 22025.465794806718 || Nr(10) < 22025.465794806718 || Nr(-2e-17) != -2e-17 ? function(e) {
  return (e = +e) == 0 ? e : e > -1e-6 && e < 1e-6 ? e + e * e / 2 : Math.exp(e) - 1;
} : Nr, _a = D, Ih = ef;
_a(_a.S + _a.F * (Ih != Math.expm1), "Math", { expm1: Ih });
var ba, Th;
function wx() {
  if (Th)
    return ba;
  Th = 1;
  var t = Ql, e = Math.pow, n = e(2, -52), r = e(2, -23), o = e(2, 127) * (2 - r), i = e(2, -126), s = function(a) {
    return a + 1 / n - 1 / n;
  };
  return ba = Math.fround || function(c) {
    var u = Math.abs(c), l = t(c), f, d;
    return u < i ? l * s(u / i / r) * i * r : (f = (1 + r / n) * u, d = f - (f - u), d > o || d != d ? l * (1 / 0) : l * d);
  }, ba;
}
var Ah = D;
Ah(Ah.S, "Math", { fround: wx() });
var Oh = D, kx = Math.abs;
Oh(Oh.S, "Math", {
  hypot: function(e, n) {
    for (var r = 0, o = 0, i = arguments.length, s = 0, a, c; o < i; )
      a = kx(arguments[o++]), s < a ? (c = s / a, r = r * c * c + 1, s = a) : a > 0 ? (c = a / s, r += c * c) : r += a;
    return s === 1 / 0 ? 1 / 0 : s * Math.sqrt(r);
  }
});
var ya = D, Dh = Math.imul;
ya(ya.S + ya.F * Y(function() {
  return Dh(4294967295, 5) != -5 || Dh.length != 2;
}), "Math", {
  imul: function(e, n) {
    var r = 65535, o = +e, i = +n, s = r & o, a = r & i;
    return 0 | s * a + ((r & o >>> 16) * a + s * (r & i >>> 16) << 16 >>> 0);
  }
});
var Ph = D;
Ph(Ph.S, "Math", {
  log10: function(e) {
    return Math.log(e) * Math.LOG10E;
  }
});
var Fh = D;
Fh(Fh.S, "Math", { log1p: $b });
var Rh = D;
Rh(Rh.S, "Math", {
  log2: function(e) {
    return Math.log(e) / Math.LN2;
  }
});
var Nh = D;
Nh(Nh.S, "Math", { sign: Ql });
var wa = D, Mh = ef, Lh = Math.exp;
wa(wa.S + wa.F * Y(function() {
  return !Math.sinh(-2e-17) != -2e-17;
}), "Math", {
  sinh: function(e) {
    return Math.abs(e = +e) < 1 ? (Mh(e) - Mh(-e)) / 2 : (Lh(e - 1) - Lh(-e - 1)) * (Math.E / 2);
  }
});
var qh = D, jh = ef, Bh = Math.exp;
qh(qh.S, "Math", {
  tanh: function(e) {
    var n = jh(e = +e), r = jh(-e);
    return n == 1 / 0 ? 1 : r == 1 / 0 ? -1 : (n - r) / (Bh(e) + Bh(-e));
  }
});
var zh = D;
zh(zh.S, "Math", {
  trunc: function(e) {
    return (e > 0 ? Math.floor : Math.ceil)(e);
  }
});
var ka = D, Sx = Bn, Hh = String.fromCharCode, Vh = String.fromCodePoint;
ka(ka.S + ka.F * (!!Vh && Vh.length != 1), "String", {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function(e) {
    for (var n = [], r = arguments.length, o = 0, i; r > o; ) {
      if (i = +arguments[o++], Sx(i, 1114111) !== i)
        throw RangeError(i + " is not a valid code point");
      n.push(
        i < 65536 ? Hh(i) : Hh(((i -= 65536) >> 10) + 55296, i % 1024 + 56320)
      );
    }
    return n.join("");
  }
});
var Uh = D, xx = st, $x = le;
Uh(Uh.S, "String", {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function(e) {
    for (var n = xx(e.raw), r = $x(n.length), o = arguments.length, i = [], s = 0; r > s; )
      i.push(String(n[s++])), s < o && i.push(String(arguments[s]));
    return i.join("");
  }
});
wr("trim", function(t) {
  return function() {
    return t(this, 3);
  };
});
var Ex = xt, Cx = Vt, tf = function(t) {
  return function(e, n) {
    var r = String(Cx(e)), o = Ex(n), i = r.length, s, a;
    return o < 0 || o >= i ? t ? "" : void 0 : (s = r.charCodeAt(o), s < 55296 || s > 56319 || o + 1 === i || (a = r.charCodeAt(o + 1)) < 56320 || a > 57343 ? t ? r.charAt(o) : s : t ? r.slice(o, o + 2) : (s - 55296 << 10) + (a - 56320) + 65536);
  };
}, kr = {}, Ix = Hn, Tx = qn, Ax = _r, Cb = {};
it(Cb, ae("iterator"), function() {
  return this;
});
var Ib = function(t, e, n) {
  t.prototype = Ix(Cb, { next: Tx(1, n) }), Ax(t, e + " Iterator");
}, Sa = D, Ox = Ke, Gh = it, Wh = kr, Dx = Ib, Px = _r, Fx = Vn, Mr = ae("iterator"), xa = !([].keys && "next" in [].keys()), Rx = "@@iterator", Kh = "keys", jo = "values", Zh = function() {
  return this;
}, nf = function(t, e, n, r, o, i, s) {
  Dx(n, e, r);
  var a = function(y) {
    if (!xa && y in f)
      return f[y];
    switch (y) {
      case Kh:
        return function() {
          return new n(this, y);
        };
      case jo:
        return function() {
          return new n(this, y);
        };
    }
    return function() {
      return new n(this, y);
    };
  }, c = e + " Iterator", u = o == jo, l = !1, f = t.prototype, d = f[Mr] || f[Rx] || o && f[o], h = d || a(o), b = o ? u ? a("entries") : h : void 0, m = e == "Array" && f.entries || d, g, v, k;
  if (m && (k = Fx(m.call(new t())), k !== Object.prototype && k.next && (Px(k, c, !0), typeof k[Mr] != "function" && Gh(k, Mr, Zh))), u && d && d.name !== jo && (l = !0, h = function() {
    return d.call(this);
  }), (xa || l || !f[Mr]) && Gh(f, Mr, h), Wh[e] = h, Wh[c] = Zh, o)
    if (g = {
      values: u ? h : a(jo),
      keys: i ? h : a(Kh),
      entries: b
    }, s)
      for (v in g)
        v in f || Ox(f, v, g[v]);
    else
      Sa(Sa.P + Sa.F * (xa || l), e, g);
  return g;
}, Nx = tf(!0);
nf(String, "String", function(t) {
  this._t = String(t), this._i = 0;
}, function() {
  var t = this._t, e = this._i, n;
  return e >= t.length ? { value: void 0, done: !0 } : (n = Nx(t, e), this._i += n.length, { value: n, done: !1 });
});
var Jh = D, Mx = tf(!1);
Jh(Jh.P, "String", {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function(e) {
    return Mx(this, e);
  }
});
var Lx = X, qx = Ht, jx = ae("match"), rf = function(t) {
  var e;
  return Lx(t) && ((e = t[jx]) !== void 0 ? !!e : qx(t) == "RegExp");
}, Bx = rf, zx = Vt, of = function(t, e, n) {
  if (Bx(e))
    throw TypeError("String#" + n + " doesn't accept regex!");
  return String(zx(t));
}, $a, Yh;
function sf() {
  if (Yh)
    return $a;
  Yh = 1;
  var t = ae("match");
  return $a = function(e) {
    var n = /./;
    try {
      "/./"[e](n);
    } catch {
      try {
        return n[t] = !1, !"/./"[e](n);
      } catch {
      }
    }
    return !0;
  }, $a;
}
var Ea = D, Xh = le, Hx = of, Ou = "endsWith", Qh = ""[Ou];
Ea(Ea.P + Ea.F * sf()(Ou), "String", {
  endsWith: function(e) {
    var n = Hx(this, e, Ou), r = arguments.length > 1 ? arguments[1] : void 0, o = Xh(n.length), i = r === void 0 ? o : Math.min(Xh(r), o), s = String(e);
    return Qh ? Qh.call(n, s, i) : n.slice(i - s.length, i) === s;
  }
});
var Ca = D, Vx = of, ep = "includes";
Ca(Ca.P + Ca.F * sf()(ep), "String", {
  includes: function(e) {
    return !!~Vx(this, e, ep).indexOf(e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var tp = D;
tp(tp.P, "String", {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: Xl
});
var Ia = D, Ux = le, Gx = of, Du = "startsWith", np = ""[Du];
Ia(Ia.P + Ia.F * sf()(Du), "String", {
  startsWith: function(e) {
    var n = Gx(this, e, Du), r = Ux(Math.min(arguments.length > 1 ? arguments[1] : void 0, n.length)), o = String(e);
    return np ? np.call(n, o, r) : n.slice(r, r + o.length) === o;
  }
});
var Ta = D, Wx = Y, Kx = Vt, Zx = /"/g, Jx = function(t, e, n, r) {
  var o = String(Kx(t)), i = "<" + e;
  return n !== "" && (i += " " + n + '="' + String(r).replace(Zx, "&quot;") + '"'), i + ">" + o + "</" + e + ">";
}, Ze = function(t, e) {
  var n = {};
  n[t] = e(Jx), Ta(Ta.P + Ta.F * Wx(function() {
    var r = ""[t]('"');
    return r !== r.toLowerCase() || r.split('"').length > 3;
  }), "String", n);
};
Ze("anchor", function(t) {
  return function(n) {
    return t(this, "a", "name", n);
  };
});
Ze("big", function(t) {
  return function() {
    return t(this, "big", "", "");
  };
});
Ze("blink", function(t) {
  return function() {
    return t(this, "blink", "", "");
  };
});
Ze("bold", function(t) {
  return function() {
    return t(this, "b", "", "");
  };
});
Ze("fixed", function(t) {
  return function() {
    return t(this, "tt", "", "");
  };
});
Ze("fontcolor", function(t) {
  return function(n) {
    return t(this, "font", "color", n);
  };
});
Ze("fontsize", function(t) {
  return function(n) {
    return t(this, "font", "size", n);
  };
});
Ze("italics", function(t) {
  return function() {
    return t(this, "i", "", "");
  };
});
Ze("link", function(t) {
  return function(n) {
    return t(this, "a", "href", n);
  };
});
Ze("small", function(t) {
  return function() {
    return t(this, "small", "", "");
  };
});
Ze("strike", function(t) {
  return function() {
    return t(this, "strike", "", "");
  };
});
Ze("sub", function(t) {
  return function() {
    return t(this, "sub", "", "");
  };
});
Ze("sup", function(t) {
  return function() {
    return t(this, "sup", "", "");
  };
});
var rp = D;
rp(rp.S, "Date", { now: function() {
  return (/* @__PURE__ */ new Date()).getTime();
} });
var Aa = D, Yx = De, Xx = ln;
Aa(Aa.P + Aa.F * Y(function() {
  return (/* @__PURE__ */ new Date(NaN)).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function() {
    return 1;
  } }) !== 1;
}), "Date", {
  // eslint-disable-next-line no-unused-vars
  toJSON: function(e) {
    var n = Yx(this), r = Xx(n);
    return typeof r == "number" && !isFinite(r) ? null : n.toISOString();
  }
});
var op = Y, Qx = Date.prototype.getTime, Oa = Date.prototype.toISOString, Zn = function(t) {
  return t > 9 ? t : "0" + t;
}, e$ = op(function() {
  return Oa.call(new Date(-5e13 - 1)) != "0385-07-25T07:06:39.999Z";
}) || !op(function() {
  Oa.call(/* @__PURE__ */ new Date(NaN));
}) ? function() {
  if (!isFinite(Qx.call(this)))
    throw RangeError("Invalid time value");
  var e = this, n = e.getUTCFullYear(), r = e.getUTCMilliseconds(), o = n < 0 ? "-" : n > 9999 ? "+" : "";
  return o + ("00000" + Math.abs(n)).slice(o ? -6 : -4) + "-" + Zn(e.getUTCMonth() + 1) + "-" + Zn(e.getUTCDate()) + "T" + Zn(e.getUTCHours()) + ":" + Zn(e.getUTCMinutes()) + ":" + Zn(e.getUTCSeconds()) + "." + (r > 99 ? r : "0" + Zn(r)) + "Z";
} : Oa, Da = D, ip = e$;
Da(Da.P + Da.F * (Date.prototype.toISOString !== ip), "Date", {
  toISOString: ip
});
var af = Date.prototype, sp = "Invalid Date", Tb = "toString", t$ = af[Tb], n$ = af.getTime;
/* @__PURE__ */ new Date(NaN) + "" != sp && Ke(af, Tb, function() {
  var e = n$.call(this);
  return e === e ? t$.call(this) : sp;
});
var Pa, ap;
function r$() {
  if (ap)
    return Pa;
  ap = 1;
  var t = Q, e = ln, n = "number";
  return Pa = function(r) {
    if (r !== "string" && r !== n && r !== "default")
      throw TypeError("Incorrect hint");
    return e(t(this), r != n);
  }, Pa;
}
var cp = ae("toPrimitive"), up = Date.prototype;
cp in up || it(up, cp, r$());
var lp = D;
lp(lp.S, "Array", { isArray: vs });
var fp = Q, Ab = function(t, e, n, r) {
  try {
    return r ? e(fp(n)[0], n[1]) : e(n);
  } catch (i) {
    var o = t.return;
    throw o !== void 0 && fp(o.call(t)), i;
  }
}, o$ = kr, i$ = ae("iterator"), s$ = Array.prototype, cf = function(t) {
  return t !== void 0 && (o$.Array === t || s$[i$] === t);
}, a$ = pe, c$ = qn, uf = function(t, e, n) {
  e in t ? a$.f(t, e, c$(0, n)) : t[e] = n;
}, u$ = So, l$ = ae("iterator"), f$ = kr, lf = ye.getIteratorMethod = function(t) {
  if (t != null)
    return t[l$] || t["@@iterator"] || f$[u$(t)];
}, Fa, dp;
function ys() {
  if (dp)
    return Fa;
  dp = 1;
  var t = ae("iterator"), e = !1;
  try {
    var n = [7][t]();
    n.return = function() {
      e = !0;
    }, Array.from(n, function() {
      throw 2;
    });
  } catch {
  }
  return Fa = function(r, o) {
    if (!o && !e)
      return !1;
    var i = !1;
    try {
      var s = [7], a = s[t]();
      a.next = function() {
        return { done: i = !0 };
      }, s[t] = function() {
        return a;
      }, r(s);
    } catch {
    }
    return i;
  }, Fa;
}
var d$ = St, Ra = D, h$ = De, p$ = Ab, v$ = cf, g$ = le, hp = uf, m$ = lf;
Ra(Ra.S + Ra.F * !ys()(function(t) {
  Array.from(t);
}), "Array", {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function(e) {
    var n = h$(e), r = typeof this == "function" ? this : Array, o = arguments.length, i = o > 1 ? arguments[1] : void 0, s = i !== void 0, a = 0, c = m$(n), u, l, f, d;
    if (s && (i = d$(i, o > 2 ? arguments[2] : void 0, 2)), c != null && !(r == Array && v$(c)))
      for (d = c.call(n), l = new r(); !(f = d.next()).done; a++)
        hp(l, a, s ? p$(d, i, [f.value, a], !0) : f.value);
    else
      for (u = g$(n.length), l = new r(u); u > a; a++)
        hp(l, a, s ? i(n[a], a) : n[a]);
    return l.length = a, l;
  }
});
var Na = D, _$ = uf;
Na(Na.S + Na.F * Y(function() {
  function t() {
  }
  return !(Array.of.call(t) instanceof t);
}), "Array", {
  // 22.1.2.3 Array.of( ...items)
  of: function() {
    for (var e = 0, n = arguments.length, r = new (typeof this == "function" ? this : Array)(n); n > e; )
      _$(r, e, arguments[e++]);
    return r.length = n, r;
  }
});
var b$ = Y, ft = function(t, e) {
  return !!t && b$(function() {
    e ? t.call(null, function() {
    }, 1) : t.call(null);
  });
}, Ma = D, y$ = st, pp = [].join;
Ma(Ma.P + Ma.F * (bo != Object || !ft(pp)), "Array", {
  join: function(e) {
    return pp.call(y$(this), e === void 0 ? "," : e);
  }
});
var La = D, vp = Hl, w$ = Ht, gp = Bn, mp = le, _p = [].slice;
La(La.P + La.F * Y(function() {
  vp && _p.call(vp);
}), "Array", {
  slice: function(e, n) {
    var r = mp(this.length), o = w$(this);
    if (n = n === void 0 ? r : n, o == "Array")
      return _p.call(this, e, n);
    for (var i = gp(e, r), s = gp(n, r), a = mp(s - i), c = new Array(a), u = 0; u < a; u++)
      c[u] = o == "String" ? this.charAt(i + u) : this[i + u];
    return c;
  }
});
var qa = D, k$ = kt, bp = De, yp = Y, ja = [].sort, wp = [1, 2, 3];
qa(qa.P + qa.F * (yp(function() {
  wp.sort(void 0);
}) || !yp(function() {
  wp.sort(null);
}) || !ft(ja)), "Array", {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function(e) {
    return e === void 0 ? ja.call(bp(this)) : ja.call(bp(this), k$(e));
  }
});
var S$ = X, kp = vs, x$ = ae("species"), $$ = function(t) {
  var e;
  return kp(t) && (e = t.constructor, typeof e == "function" && (e === Array || kp(e.prototype)) && (e = void 0), S$(e) && (e = e[x$], e === null && (e = void 0))), e === void 0 ? Array : e;
}, E$ = $$, Ob = function(t, e) {
  return new (E$(t))(e);
}, C$ = St, I$ = bo, T$ = De, A$ = le, O$ = Ob, Et = function(t, e) {
  var n = t == 1, r = t == 2, o = t == 3, i = t == 4, s = t == 6, a = t == 5 || s, c = e || O$;
  return function(u, l, f) {
    for (var d = T$(u), h = I$(d), b = C$(l, f, 3), m = A$(h.length), g = 0, v = n ? c(u, m) : r ? c(u, 0) : void 0, k, y; m > g; g++)
      if ((a || g in h) && (k = h[g], y = b(k, g, d), t)) {
        if (n)
          v[g] = y;
        else if (y)
          switch (t) {
            case 3:
              return !0;
            case 5:
              return k;
            case 6:
              return g;
            case 2:
              v.push(k);
          }
        else if (i)
          return !1;
      }
    return s ? -1 : o || i ? i : v;
  };
}, Ba = D, D$ = Et(0), P$ = ft([].forEach, !0);
Ba(Ba.P + Ba.F * !P$, "Array", {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function(e) {
    return D$(this, e, arguments[1]);
  }
});
var za = D, F$ = Et(1);
za(za.P + za.F * !ft([].map, !0), "Array", {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function(e) {
    return F$(this, e, arguments[1]);
  }
});
var Ha = D, R$ = Et(2);
Ha(Ha.P + Ha.F * !ft([].filter, !0), "Array", {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function(e) {
    return R$(this, e, arguments[1]);
  }
});
var Va = D, N$ = Et(3);
Va(Va.P + Va.F * !ft([].some, !0), "Array", {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function(e) {
    return N$(this, e, arguments[1]);
  }
});
var Ua = D, M$ = Et(4);
Ua(Ua.P + Ua.F * !ft([].every, !0), "Array", {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function(e) {
    return M$(this, e, arguments[1]);
  }
});
var L$ = kt, q$ = De, j$ = bo, B$ = le, Db = function(t, e, n, r, o) {
  L$(e);
  var i = q$(t), s = j$(i), a = B$(i.length), c = o ? a - 1 : 0, u = o ? -1 : 1;
  if (n < 2)
    for (; ; ) {
      if (c in s) {
        r = s[c], c += u;
        break;
      }
      if (c += u, o ? c < 0 : a <= c)
        throw TypeError("Reduce of empty array with no initial value");
    }
  for (; o ? c >= 0 : a > c; c += u)
    c in s && (r = e(r, s[c], c, i));
  return r;
}, Ga = D, z$ = Db;
Ga(Ga.P + Ga.F * !ft([].reduce, !0), "Array", {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function(e) {
    return z$(this, e, arguments.length, arguments[1], !1);
  }
});
var Wa = D, H$ = Db;
Wa(Wa.P + Wa.F * !ft([].reduceRight, !0), "Array", {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function(e) {
    return H$(this, e, arguments.length, arguments[1], !0);
  }
});
var Ka = D, V$ = ps(!1), Pu = [].indexOf, Sp = !!Pu && 1 / [1].indexOf(1, -0) < 0;
Ka(Ka.P + Ka.F * (Sp || !ft(Pu)), "Array", {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function(e) {
    return Sp ? Pu.apply(this, arguments) || 0 : V$(this, e, arguments[1]);
  }
});
var Za = D, U$ = st, G$ = xt, W$ = le, Fu = [].lastIndexOf, xp = !!Fu && 1 / [1].lastIndexOf(1, -0) < 0;
Za(Za.P + Za.F * (xp || !ft(Fu)), "Array", {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function(e) {
    if (xp)
      return Fu.apply(this, arguments) || 0;
    var n = U$(this), r = W$(n.length), o = r - 1;
    for (arguments.length > 1 && (o = Math.min(o, G$(arguments[1]))), o < 0 && (o = r + o); o >= 0; o--)
      if (o in n && n[o] === e)
        return o || 0;
    return -1;
  }
});
var Ja, $p;
function Pb() {
  if ($p)
    return Ja;
  $p = 1;
  var t = De, e = Bn, n = le;
  return Ja = [].copyWithin || function(o, i) {
    var s = t(this), a = n(s.length), c = e(o, a), u = e(i, a), l = arguments.length > 2 ? arguments[2] : void 0, f = Math.min((l === void 0 ? a : e(l, a)) - u, a - c), d = 1;
    for (u < c && c < u + f && (d = -1, u += f - 1, c += f - 1); f-- > 0; )
      u in s ? s[c] = s[u] : delete s[c], c += d, u += d;
    return s;
  }, Ja;
}
var Ru = ae("unscopables"), Nu = Array.prototype;
Nu[Ru] == null && it(Nu, Ru, {});
var Un = function(t) {
  Nu[Ru][t] = !0;
}, Ep = D;
Ep(Ep.P, "Array", { copyWithin: Pb() });
Un("copyWithin");
var Ya, Cp;
function ff() {
  if (Cp)
    return Ya;
  Cp = 1;
  var t = De, e = Bn, n = le;
  return Ya = function(o) {
    for (var i = t(this), s = n(i.length), a = arguments.length, c = e(a > 1 ? arguments[1] : void 0, s), u = a > 2 ? arguments[2] : void 0, l = u === void 0 ? s : e(u, s); l > c; )
      i[c++] = o;
    return i;
  }, Ya;
}
var Ip = D;
Ip(Ip.P, "Array", { fill: ff() });
Un("fill");
var Xa = D, K$ = Et(5), Mu = "find", Fb = !0;
Mu in [] && Array(1)[Mu](function() {
  Fb = !1;
});
Xa(Xa.P + Xa.F * Fb, "Array", {
  find: function(e) {
    return K$(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
Un(Mu);
var Qa = D, Z$ = Et(6), Lu = "findIndex", Rb = !0;
Lu in [] && Array(1)[Lu](function() {
  Rb = !1;
});
Qa(Qa.P + Qa.F * Rb, "Array", {
  findIndex: function(e) {
    return Z$(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
Un(Lu);
var J$ = J, Y$ = pe, X$ = ve, Tp = ae("species"), Sr = function(t) {
  var e = J$[t];
  X$ && e && !e[Tp] && Y$.f(e, Tp, {
    configurable: !0,
    get: function() {
      return this;
    }
  });
};
Sr("Array");
var Nb = function(t, e) {
  return { value: e, done: !!t };
}, df = Un, Bo = Nb, Ap = kr, Q$ = st, Mb = nf(Array, "Array", function(t, e) {
  this._t = Q$(t), this._i = 0, this._k = e;
}, function() {
  var t = this._t, e = this._k, n = this._i++;
  return !t || n >= t.length ? (this._t = void 0, Bo(1)) : e == "keys" ? Bo(0, n) : e == "values" ? Bo(0, t[n]) : Bo(0, [n, t[n]]);
}, "values");
Ap.Arguments = Ap.Array;
df("keys");
df("values");
df("entries");
var eE = Q, ws = function() {
  var t = eE(this), e = "";
  return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
}, Lb = J, tE = Yl, nE = pe.f, rE = dn.f, oE = rf, iE = ws, xe = Lb.RegExp, Lr = xe, ec = xe.prototype, to = /a/g, tc = /a/g, Op = new xe(to) !== to;
if (ve && (!Op || Y(function() {
  return tc[ae("match")] = !1, xe(to) != to || xe(tc) == tc || xe(to, "i") != "/a/i";
}))) {
  xe = function(e, n) {
    var r = this instanceof xe, o = oE(e), i = n === void 0;
    return !r && o && e.constructor === xe && i ? e : tE(
      Op ? new Lr(o && !i ? e.source : e, n) : Lr((o = e instanceof xe) ? e.source : e, o && i ? iE.call(e) : n),
      r ? this : ec,
      xe
    );
  };
  for (var sE = function(t) {
    t in xe || nE(xe, t, {
      configurable: !0,
      get: function() {
        return Lr[t];
      },
      set: function(e) {
        Lr[t] = e;
      }
    });
  }, Dp = rE(Lr), Pp = 0; Dp.length > Pp; )
    sE(Dp[Pp++]);
  ec.constructor = xe, xe.prototype = ec, Ke(Lb, "RegExp", xe);
}
Sr("RegExp");
var aE = ws, Hi = RegExp.prototype.exec, cE = String.prototype.replace, qb = Hi, Vi = "lastIndex", qu = function() {
  var t = /a/, e = /b*/g;
  return Hi.call(t, "a"), Hi.call(e, "a"), t[Vi] !== 0 || e[Vi] !== 0;
}(), ju = /()??/.exec("")[1] !== void 0, uE = qu || ju;
uE && (qb = function(e) {
  var n = this, r, o, i, s;
  return ju && (o = new RegExp("^" + n.source + "$(?!\\s)", aE.call(n))), qu && (r = n[Vi]), i = Hi.call(n, e), qu && i && (n[Vi] = n.global ? i.index + i[0].length : r), ju && i && i.length > 1 && cE.call(i[0], o, function() {
    for (s = 1; s < arguments.length - 2; s++)
      arguments[s] === void 0 && (i[s] = void 0);
  }), i;
});
var hf = qb, Fp = hf;
D({
  target: "RegExp",
  proto: !0,
  forced: Fp !== /./.exec
}, {
  exec: Fp
});
ve && /./g.flags != "g" && pe.f(RegExp.prototype, "flags", {
  configurable: !0,
  get: ws
});
var lE = Q, fE = ws, dE = ve, pf = "toString", nc = /./[pf], Rp = function(t) {
  Ke(RegExp.prototype, pf, t, !0);
};
Y(function() {
  return nc.call({ source: "a", flags: "b" }) != "/a/b";
}) ? Rp(function() {
  var e = lE(this);
  return "/".concat(
    e.source,
    "/",
    "flags" in e ? e.flags : !dE && e instanceof RegExp ? fE.call(e) : void 0
  );
}) : nc.name != pf && Rp(function() {
  return nc.call(this);
});
var hE = tf(!0), vf = function(t, e, n) {
  return e + (n ? hE(t, e).length : 1);
}, pE = So, vE = RegExp.prototype.exec, ks = function(t, e) {
  var n = t.exec;
  if (typeof n == "function") {
    var r = n.call(t, e);
    if (typeof r != "object")
      throw new TypeError("RegExp exec method returned something other than an Object or null");
    return r;
  }
  if (pE(t) !== "RegExp")
    throw new TypeError("RegExp#exec called on incompatible receiver");
  return vE.call(t, e);
}, gE = Ke, mE = it, Bu = Y, _E = Vt, jb = ae, bE = hf, yE = jb("species"), wE = !Bu(function() {
  var t = /./;
  return t.exec = function() {
    var e = [];
    return e.groups = { a: "7" }, e;
  }, "".replace(t, "$<a>") !== "7";
}), kE = function() {
  var t = /(?:)/, e = t.exec;
  t.exec = function() {
    return e.apply(this, arguments);
  };
  var n = "ab".split(t);
  return n.length === 2 && n[0] === "a" && n[1] === "b";
}(), Ss = function(t, e, n) {
  var r = jb(t), o = !Bu(function() {
    var l = {};
    return l[r] = function() {
      return 7;
    }, ""[t](l) != 7;
  }), i = o ? !Bu(function() {
    var l = !1, f = /a/;
    return f.exec = function() {
      return l = !0, null;
    }, t === "split" && (f.constructor = {}, f.constructor[yE] = function() {
      return f;
    }), f[r](""), !l;
  }) : void 0;
  if (!o || !i || t === "replace" && !wE || t === "split" && !kE) {
    var s = /./[r], a = n(
      _E,
      r,
      ""[t],
      function(f, d, h, b, m) {
        return d.exec === bE ? o && !m ? { done: !0, value: s.call(d, h, b) } : { done: !0, value: f.call(h, d, b) } : { done: !1 };
      }
    ), c = a[0], u = a[1];
    gE(String.prototype, t, c), mE(
      RegExp.prototype,
      r,
      e == 2 ? function(l, f) {
        return u.call(l, this, f);
      } : function(l) {
        return u.call(l, this);
      }
    );
  }
}, SE = Q, xE = le, $E = vf, Np = ks;
Ss("match", 1, function(t, e, n, r) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function(i) {
      var s = t(this), a = i == null ? void 0 : i[e];
      return a !== void 0 ? a.call(i, s) : new RegExp(i)[e](String(s));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function(o) {
      var i = r(n, o, this);
      if (i.done)
        return i.value;
      var s = SE(o), a = String(this);
      if (!s.global)
        return Np(s, a);
      var c = s.unicode;
      s.lastIndex = 0;
      for (var u = [], l = 0, f; (f = Np(s, a)) !== null; ) {
        var d = String(f[0]);
        u[l] = d, d === "" && (s.lastIndex = $E(a, xE(s.lastIndex), c)), l++;
      }
      return l === 0 ? null : u;
    }
  ];
});
var EE = Q, CE = De, IE = le, TE = xt, AE = vf, OE = ks, DE = Math.max, PE = Math.min, FE = Math.floor, RE = /\$([$&`']|\d\d?|<[^>]*>)/g, NE = /\$([$&`']|\d\d?)/g, ME = function(t) {
  return t === void 0 ? t : String(t);
};
Ss("replace", 2, function(t, e, n, r) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function(s, a) {
      var c = t(this), u = s == null ? void 0 : s[e];
      return u !== void 0 ? u.call(s, c, a) : n.call(String(c), s, a);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function(i, s) {
      var a = r(n, i, this, s);
      if (a.done)
        return a.value;
      var c = EE(i), u = String(this), l = typeof s == "function";
      l || (s = String(s));
      var f = c.global;
      if (f) {
        var d = c.unicode;
        c.lastIndex = 0;
      }
      for (var h = []; ; ) {
        var b = OE(c, u);
        if (b === null || (h.push(b), !f))
          break;
        var m = String(b[0]);
        m === "" && (c.lastIndex = AE(u, IE(c.lastIndex), d));
      }
      for (var g = "", v = 0, k = 0; k < h.length; k++) {
        b = h[k];
        for (var y = String(b[0]), x = DE(PE(TE(b.index), u.length), 0), N = [], T = 1; T < b.length; T++)
          N.push(ME(b[T]));
        var C = b.groups;
        if (l) {
          var A = [y].concat(N, x, u);
          C !== void 0 && A.push(C);
          var z = String(s.apply(void 0, A));
        } else
          z = o(y, u, x, N, C, s);
        x >= v && (g += u.slice(v, x) + z, v = x + y.length);
      }
      return g + u.slice(v);
    }
  ];
  function o(i, s, a, c, u, l) {
    var f = a + i.length, d = c.length, h = NE;
    return u !== void 0 && (u = CE(u), h = RE), n.call(l, h, function(b, m) {
      var g;
      switch (m.charAt(0)) {
        case "$":
          return "$";
        case "&":
          return i;
        case "`":
          return s.slice(0, a);
        case "'":
          return s.slice(f);
        case "<":
          g = u[m.slice(1, -1)];
          break;
        default:
          var v = +m;
          if (v === 0)
            return b;
          if (v > d) {
            var k = FE(v / 10);
            return k === 0 ? b : k <= d ? c[k - 1] === void 0 ? m.charAt(1) : c[k - 1] + m.charAt(1) : b;
          }
          g = c[v - 1];
      }
      return g === void 0 ? "" : g;
    });
  }
});
var LE = Q, Mp = hb, qE = ks;
Ss("search", 1, function(t, e, n, r) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function(i) {
      var s = t(this), a = i == null ? void 0 : i[e];
      return a !== void 0 ? a.call(i, s) : new RegExp(i)[e](String(s));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function(o) {
      var i = r(n, o, this);
      if (i.done)
        return i.value;
      var s = LE(o), a = String(this), c = s.lastIndex;
      Mp(c, 0) || (s.lastIndex = 0);
      var u = qE(s, a);
      return Mp(s.lastIndex, c) || (s.lastIndex = c), u === null ? -1 : u.index;
    }
  ];
});
var Lp = Q, jE = kt, BE = ae("species"), xo = function(t, e) {
  var n = Lp(t).constructor, r;
  return n === void 0 || (r = Lp(n)[BE]) == null ? e : jE(r);
}, zE = rf, HE = Q, VE = xo, UE = vf, GE = le, qp = ks, WE = hf, KE = Y, ZE = Math.min, JE = [].push, vn = "split", Ye = "length", rc = "lastIndex", zu = 4294967295, qr = !KE(function() {
  RegExp(zu, "y");
});
Ss("split", 2, function(t, e, n, r) {
  var o;
  return "abbc"[vn](/(b)*/)[1] == "c" || "test"[vn](/(?:)/, -1)[Ye] != 4 || "ab"[vn](/(?:ab)*/)[Ye] != 2 || "."[vn](/(.?)(.?)/)[Ye] != 4 || "."[vn](/()()/)[Ye] > 1 || ""[vn](/.?/)[Ye] ? o = function(i, s) {
    var a = String(this);
    if (i === void 0 && s === 0)
      return [];
    if (!zE(i))
      return n.call(a, i, s);
    for (var c = [], u = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.unicode ? "u" : "") + (i.sticky ? "y" : ""), l = 0, f = s === void 0 ? zu : s >>> 0, d = new RegExp(i.source, u + "g"), h, b, m; (h = WE.call(d, a)) && (b = d[rc], !(b > l && (c.push(a.slice(l, h.index)), h[Ye] > 1 && h.index < a[Ye] && JE.apply(c, h.slice(1)), m = h[0][Ye], l = b, c[Ye] >= f))); )
      d[rc] === h.index && d[rc]++;
    return l === a[Ye] ? (m || !d.test("")) && c.push("") : c.push(a.slice(l)), c[Ye] > f ? c.slice(0, f) : c;
  } : "0"[vn](void 0, 0)[Ye] ? o = function(i, s) {
    return i === void 0 && s === 0 ? [] : n.call(this, i, s);
  } : o = n, [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function(s, a) {
      var c = t(this), u = s == null ? void 0 : s[e];
      return u !== void 0 ? u.call(s, c, a) : o.call(String(c), s, a);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function(i, s) {
      var a = r(o, i, this, s, o !== n);
      if (a.done)
        return a.value;
      var c = HE(i), u = String(this), l = VE(c, RegExp), f = c.unicode, d = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (qr ? "y" : "g"), h = new l(qr ? c : "^(?:" + c.source + ")", d), b = s === void 0 ? zu : s >>> 0;
      if (b === 0)
        return [];
      if (u.length === 0)
        return qp(h, u) === null ? [u] : [];
      for (var m = 0, g = 0, v = []; g < u.length; ) {
        h.lastIndex = qr ? g : 0;
        var k = qp(h, qr ? u : u.slice(g)), y;
        if (k === null || (y = ZE(GE(h.lastIndex + (qr ? 0 : g)), u.length)) === m)
          g = UE(u, g, f);
        else {
          if (v.push(u.slice(m, g)), v.length === b)
            return v;
          for (var x = 1; x <= k.length - 1; x++)
            if (v.push(k[x]), v.length === b)
              return v;
          g = m = y;
        }
      }
      return v.push(u.slice(m)), v;
    }
  ];
});
var xr = function(t, e, n, r) {
  if (!(t instanceof e) || r !== void 0 && r in t)
    throw TypeError(n + ": incorrect invocation!");
  return t;
}, Bb = { exports: {} }, YE = St, XE = Ab, QE = cf, eC = Q, tC = le, nC = lf, Hu = {}, Vu = {}, zb = Bb.exports = function(t, e, n, r, o) {
  var i = o ? function() {
    return t;
  } : nC(t), s = YE(n, r, e ? 2 : 1), a = 0, c, u, l, f;
  if (typeof i != "function")
    throw TypeError(t + " is not iterable!");
  if (QE(i)) {
    for (c = tC(t.length); c > a; a++)
      if (f = e ? s(eC(u = t[a])[0], u[1]) : s(t[a]), f === Hu || f === Vu)
        return f;
  } else
    for (l = i.call(t); !(u = l.next()).done; )
      if (f = XE(l, s, u.value, e), f === Hu || f === Vu)
        return f;
};
zb.BREAK = Hu;
zb.RETURN = Vu;
var xs = Bb.exports, zo = St, rC = vb, jp = Hl, Bp = Ml, Nt = J, zp = Nt.process, Uu = Nt.setImmediate, Gu = Nt.clearImmediate, Hp = Nt.MessageChannel, oc = Nt.Dispatch, ic = 0, no = {}, Vp = "onreadystatechange", gn, sc, ac, Yr = function() {
  var t = +this;
  if (no.hasOwnProperty(t)) {
    var e = no[t];
    delete no[t], e();
  }
}, Up = function(t) {
  Yr.call(t.data);
};
(!Uu || !Gu) && (Uu = function(e) {
  for (var n = [], r = 1; arguments.length > r; )
    n.push(arguments[r++]);
  return no[++ic] = function() {
    rC(typeof e == "function" ? e : Function(e), n);
  }, gn(ic), ic;
}, Gu = function(e) {
  delete no[e];
}, Ht(zp) == "process" ? gn = function(t) {
  zp.nextTick(zo(Yr, t, 1));
} : oc && oc.now ? gn = function(t) {
  oc.now(zo(Yr, t, 1));
} : Hp ? (sc = new Hp(), ac = sc.port2, sc.port1.onmessage = Up, gn = zo(ac.postMessage, ac, 1)) : Nt.addEventListener && typeof postMessage == "function" && !Nt.importScripts ? (gn = function(t) {
  Nt.postMessage(t + "", "*");
}, Nt.addEventListener("message", Up, !1)) : Vp in Bp("script") ? gn = function(t) {
  jp.appendChild(Bp("script"))[Vp] = function() {
    jp.removeChild(this), Yr.call(t);
  };
} : gn = function(t) {
  setTimeout(zo(Yr, t, 1), 0);
});
var gf = {
  set: Uu,
  clear: Gu
}, Cn = J, oC = gf.set, Gp = Cn.MutationObserver || Cn.WebKitMutationObserver, Wu = Cn.process, cc = Cn.Promise, Wp = Ht(Wu) == "process", iC = function() {
  var t, e, n, r = function() {
    var a, c;
    for (Wp && (a = Wu.domain) && a.exit(); t; ) {
      c = t.fn, t = t.next;
      try {
        c();
      } catch (u) {
        throw t ? n() : e = void 0, u;
      }
    }
    e = void 0, a && a.enter();
  };
  if (Wp)
    n = function() {
      Wu.nextTick(r);
    };
  else if (Gp && !(Cn.navigator && Cn.navigator.standalone)) {
    var o = !0, i = document.createTextNode("");
    new Gp(r).observe(i, { characterData: !0 }), n = function() {
      i.data = o = !o;
    };
  } else if (cc && cc.resolve) {
    var s = cc.resolve(void 0);
    n = function() {
      s.then(r);
    };
  } else
    n = function() {
      oC.call(Cn, r);
    };
  return function(a) {
    var c = { fn: a, next: void 0 };
    e && (e.next = c), t || (t = c, n()), e = c;
  };
}, mf = {}, Kp = kt;
function sC(t) {
  var e, n;
  this.promise = new t(function(r, o) {
    if (e !== void 0 || n !== void 0)
      throw TypeError("Bad Promise constructor");
    e = r, n = o;
  }), this.resolve = Kp(e), this.reject = Kp(n);
}
mf.f = function(t) {
  return new sC(t);
};
var aC = function(t) {
  try {
    return { e: !1, v: t() };
  } catch (e) {
    return { e: !0, v: e };
  }
}, cC = J, Zp = cC.navigator, $s = Zp && Zp.userAgent || "", uC = Q, lC = X, fC = mf, Hb = function(t, e) {
  if (uC(t), lC(e) && e.constructor === t)
    return e;
  var n = fC.f(t), r = n.resolve;
  return r(e), n.promise;
}, uc, Jp;
function $r() {
  if (Jp)
    return uc;
  Jp = 1;
  var t = Ke;
  return uc = function(e, n, r) {
    for (var o in n)
      t(e, o, n[o], r);
    return e;
  }, uc;
}
var tn = J, or = St, dC = So, He = D, hC = X, pC = kt, vC = xr, Yp = xs, gC = xo, Vb = gf.set, Ub = iC(), Gb = mf, Ku = aC, mC = $s, _C = Hb, hn = "Promise", Wb = tn.TypeError, gr = tn.process, Xp = gr && gr.versions, bC = Xp && Xp.v8 || "", Pt = tn[hn], co = dC(gr) == "process", Ti = function() {
}, Ho, Kb, Qp, Zb, uo = Kb = Gb.f, $o = !!function() {
  try {
    var t = Pt.resolve(1), e = (t.constructor = {})[ae("species")] = function(n) {
      n(Ti, Ti);
    };
    return (co || typeof PromiseRejectionEvent == "function") && t.then(Ti) instanceof e && bC.indexOf("6.6") !== 0 && mC.indexOf("Chrome/66") === -1;
  } catch {
  }
}(), Jb = function(t) {
  var e;
  return hC(t) && typeof (e = t.then) == "function" ? e : !1;
}, _f = function(t, e) {
  if (!t._n) {
    t._n = !0;
    var n = t._c;
    Ub(function() {
      for (var r = t._v, o = t._s == 1, i = 0, s = function(a) {
        var c = o ? a.ok : a.fail, u = a.resolve, l = a.reject, f = a.domain, d, h, b;
        try {
          c ? (o || (t._h == 2 && wC(t), t._h = 1), c === !0 ? d = r : (f && f.enter(), d = c(r), f && (f.exit(), b = !0)), d === a.promise ? l(Wb("Promise-chain cycle")) : (h = Jb(d)) ? h.call(d, u, l) : u(d)) : l(r);
        } catch (m) {
          f && !b && f.exit(), l(m);
        }
      }; n.length > i; )
        s(n[i++]);
      t._c = [], t._n = !1, e && !t._h && yC(t);
    });
  }
}, yC = function(t) {
  Vb.call(tn, function() {
    var e = t._v, n = ev(t), r, o, i;
    if (n && (r = Ku(function() {
      co ? gr.emit("unhandledRejection", e, t) : (o = tn.onunhandledrejection) ? o({ promise: t, reason: e }) : (i = tn.console) && i.error && i.error("Unhandled promise rejection", e);
    }), t._h = co || ev(t) ? 2 : 1), t._a = void 0, n && r.e)
      throw r.v;
  });
}, ev = function(t) {
  return t._h !== 1 && (t._a || t._c).length === 0;
}, wC = function(t) {
  Vb.call(tn, function() {
    var e;
    co ? gr.emit("rejectionHandled", t) : (e = tn.onrejectionhandled) && e({ promise: t, reason: t._v });
  });
}, ur = function(t) {
  var e = this;
  e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), _f(e, !0));
}, Zu = function(t) {
  var e = this, n;
  if (!e._d) {
    e._d = !0, e = e._w || e;
    try {
      if (e === t)
        throw Wb("Promise can't be resolved itself");
      (n = Jb(t)) ? Ub(function() {
        var r = { _w: e, _d: !1 };
        try {
          n.call(t, or(Zu, r, 1), or(ur, r, 1));
        } catch (o) {
          ur.call(r, o);
        }
      }) : (e._v = t, e._s = 1, _f(e, !1));
    } catch (r) {
      ur.call({ _w: e, _d: !1 }, r);
    }
  }
};
$o || (Pt = function(e) {
  vC(this, Pt, hn, "_h"), pC(e), Ho.call(this);
  try {
    e(or(Zu, this, 1), or(ur, this, 1));
  } catch (n) {
    ur.call(this, n);
  }
}, Ho = function(e) {
  this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
}, Ho.prototype = $r()(Pt.prototype, {
  // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
  then: function(e, n) {
    var r = uo(gC(this, Pt));
    return r.ok = typeof e == "function" ? e : !0, r.fail = typeof n == "function" && n, r.domain = co ? gr.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && _f(this, !1), r.promise;
  },
  // 25.4.5.1 Promise.prototype.catch(onRejected)
  catch: function(t) {
    return this.then(void 0, t);
  }
}), Qp = function() {
  var t = new Ho();
  this.promise = t, this.resolve = or(Zu, t, 1), this.reject = or(ur, t, 1);
}, Gb.f = uo = function(t) {
  return t === Pt || t === Zb ? new Qp(t) : Kb(t);
});
He(He.G + He.W + He.F * !$o, { Promise: Pt });
_r(Pt, hn);
Sr(hn);
Zb = ye[hn];
He(He.S + He.F * !$o, hn, {
  // 25.4.4.5 Promise.reject(r)
  reject: function(e) {
    var n = uo(this), r = n.reject;
    return r(e), n.promise;
  }
});
He(He.S + He.F * !$o, hn, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function(e) {
    return _C(this, e);
  }
});
He(He.S + He.F * !($o && ys()(function(t) {
  Pt.all(t).catch(Ti);
})), hn, {
  // 25.4.4.1 Promise.all(iterable)
  all: function(e) {
    var n = this, r = uo(n), o = r.resolve, i = r.reject, s = Ku(function() {
      var a = [], c = 0, u = 1;
      Yp(e, !1, function(l) {
        var f = c++, d = !1;
        a.push(void 0), u++, n.resolve(l).then(function(h) {
          d || (d = !0, a[f] = h, --u || o(a));
        }, i);
      }), --u || o(a);
    });
    return s.e && i(s.v), r.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function(e) {
    var n = this, r = uo(n), o = r.reject, i = Ku(function() {
      Yp(e, !1, function(s) {
        n.resolve(s).then(r.resolve, o);
      });
    });
    return i.e && o(i.v), r.promise;
  }
});
var kC = X, Gn = function(t, e) {
  if (!kC(t) || t._t !== e)
    throw TypeError("Incompatible receiver, " + e + " required!");
  return t;
}, SC = pe.f, xC = Hn, $C = $r(), EC = St, CC = xr, IC = xs, TC = nf, Vo = Nb, AC = Sr, Yb = ve, Xb = fn.fastKey, Jn = Gn, jr = Yb ? "_s" : "size", Uo = function(t, e) {
  var n = Xb(e), r;
  if (n !== "F")
    return t._i[n];
  for (r = t._f; r; r = r.n)
    if (r.k == e)
      return r;
}, Qb = {
  getConstructor: function(t, e, n, r) {
    var o = t(function(i, s) {
      CC(i, o, e, "_i"), i._t = e, i._i = xC(null), i._f = void 0, i._l = void 0, i[jr] = 0, s != null && IC(s, n, i[r], i);
    });
    return $C(o.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function() {
        for (var s = Jn(this, e), a = s._i, c = s._f; c; c = c.n)
          c.r = !0, c.p && (c.p = c.p.n = void 0), delete a[c.i];
        s._f = s._l = void 0, s[jr] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      delete: function(i) {
        var s = Jn(this, e), a = Uo(s, i);
        if (a) {
          var c = a.n, u = a.p;
          delete s._i[a.i], a.r = !0, u && (u.n = c), c && (c.p = u), s._f == a && (s._f = c), s._l == a && (s._l = u), s[jr]--;
        }
        return !!a;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function(s) {
        Jn(this, e);
        for (var a = EC(s, arguments.length > 1 ? arguments[1] : void 0, 3), c; c = c ? c.n : this._f; )
          for (a(c.v, c.k, this); c && c.r; )
            c = c.p;
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function(s) {
        return !!Uo(Jn(this, e), s);
      }
    }), Yb && SC(o.prototype, "size", {
      get: function() {
        return Jn(this, e)[jr];
      }
    }), o;
  },
  def: function(t, e, n) {
    var r = Uo(t, e), o, i;
    return r ? r.v = n : (t._l = r = {
      i: i = Xb(e, !0),
      // <- index
      k: e,
      // <- key
      v: n,
      // <- value
      p: o = t._l,
      // <- previous entry
      n: void 0,
      // <- next entry
      r: !1
      // <- removed
    }, t._f || (t._f = r), o && (o.n = r), t[jr]++, i !== "F" && (t._i[i] = r)), t;
  },
  getEntry: Uo,
  setStrong: function(t, e, n) {
    TC(t, e, function(r, o) {
      this._t = Jn(r, e), this._k = o, this._l = void 0;
    }, function() {
      for (var r = this, o = r._k, i = r._l; i && i.r; )
        i = i.p;
      return !r._t || !(r._l = i = i ? i.n : r._t._f) ? (r._t = void 0, Vo(1)) : o == "keys" ? Vo(0, i.k) : o == "values" ? Vo(0, i.v) : Vo(0, [i.k, i.v]);
    }, n ? "entries" : "values", !n, !0), AC(e);
  }
}, OC = J, Go = D, DC = Ke, PC = $r(), FC = fn, RC = xs, NC = xr, lc = X, fc = Y, MC = ys(), LC = _r, qC = Yl, Es = function(t, e, n, r, o, i) {
  var s = OC[t], a = s, c = o ? "set" : "add", u = a && a.prototype, l = {}, f = function(v) {
    var k = u[v];
    DC(
      u,
      v,
      v == "delete" ? function(y) {
        return i && !lc(y) ? !1 : k.call(this, y === 0 ? 0 : y);
      } : v == "has" ? function(x) {
        return i && !lc(x) ? !1 : k.call(this, x === 0 ? 0 : x);
      } : v == "get" ? function(x) {
        return i && !lc(x) ? void 0 : k.call(this, x === 0 ? 0 : x);
      } : v == "add" ? function(x) {
        return k.call(this, x === 0 ? 0 : x), this;
      } : function(x, N) {
        return k.call(this, x === 0 ? 0 : x, N), this;
      }
    );
  };
  if (typeof a != "function" || !(i || u.forEach && !fc(function() {
    new a().entries().next();
  })))
    a = r.getConstructor(e, t, o, c), PC(a.prototype, n), FC.NEED = !0;
  else {
    var d = new a(), h = d[c](i ? {} : -0, 1) != d, b = fc(function() {
      d.has(1);
    }), m = MC(function(v) {
      new a(v);
    }), g = !i && fc(function() {
      for (var v = new a(), k = 5; k--; )
        v[c](k, k);
      return !v.has(-0);
    });
    m || (a = e(function(v, k) {
      NC(v, a, t);
      var y = qC(new s(), v, a);
      return k != null && RC(k, o, y[c], y), y;
    }), a.prototype = u, u.constructor = a), (b || g) && (f("delete"), f("has"), o && f("get")), (g || h) && f(c), i && u.clear && delete u.clear;
  }
  return LC(a, t), l[t] = a, Go(Go.G + Go.W + Go.F * (a != s), l), i || r.setStrong(a, t, o), a;
}, dc = Qb, tv = Gn, hc = "Map";
Es(hc, function(t) {
  return function() {
    return t(this, arguments.length > 0 ? arguments[0] : void 0);
  };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function(e) {
    var n = dc.getEntry(tv(this, hc), e);
    return n && n.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function(e, n) {
    return dc.def(tv(this, hc), e === 0 ? 0 : e, n);
  }
}, dc, !0);
var nv = Qb, jC = Gn, rv = "Set";
Es(rv, function(t) {
  return function() {
    return t(this, arguments.length > 0 ? arguments[0] : void 0);
  };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function(e) {
    return nv.def(jC(this, rv), e = e === 0 ? 0 : e, e);
  }
}, nv);
var BC = $r(), pc = fn.getWeak, zC = Q, ov = X, HC = xr, VC = xs, e0 = Et, iv = ot, sv = Gn, UC = e0(5), GC = e0(6), WC = 0, Wo = function(t) {
  return t._l || (t._l = new t0());
}, t0 = function() {
  this.a = [];
}, vc = function(t, e) {
  return UC(t.a, function(n) {
    return n[0] === e;
  });
};
t0.prototype = {
  get: function(t) {
    var e = vc(this, t);
    if (e)
      return e[1];
  },
  has: function(t) {
    return !!vc(this, t);
  },
  set: function(t, e) {
    var n = vc(this, t);
    n ? n[1] = e : this.a.push([t, e]);
  },
  delete: function(t) {
    var e = GC(this.a, function(n) {
      return n[0] === t;
    });
    return ~e && this.a.splice(e, 1), !!~e;
  }
};
var n0 = {
  getConstructor: function(t, e, n, r) {
    var o = t(function(i, s) {
      HC(i, o, e, "_i"), i._t = e, i._i = WC++, i._l = void 0, s != null && VC(s, n, i[r], i);
    });
    return BC(o.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      delete: function(i) {
        if (!ov(i))
          return !1;
        var s = pc(i);
        return s === !0 ? Wo(sv(this, e)).delete(i) : s && iv(s, this._i) && delete s[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function(s) {
        if (!ov(s))
          return !1;
        var a = pc(s);
        return a === !0 ? Wo(sv(this, e)).has(s) : a && iv(a, this._i);
      }
    }), o;
  },
  def: function(t, e, n) {
    var r = pc(zC(e), !0);
    return r === !0 ? Wo(t).set(e, n) : r[t._i] = n, t;
  },
  ufstore: Wo
}, av = J, KC = Et(0), ZC = Ke, r0 = fn, JC = db, Cs = n0, o0 = X, cv = Gn, YC = Gn, XC = !av.ActiveXObject && "ActiveXObject" in av, Ui = "WeakMap", QC = r0.getWeak, e2 = Object.isExtensible, t2 = Cs.ufstore, gc, i0 = function(t) {
  return function() {
    return t(this, arguments.length > 0 ? arguments[0] : void 0);
  };
}, s0 = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function(e) {
    if (o0(e)) {
      var n = QC(e);
      return n === !0 ? t2(cv(this, Ui)).get(e) : n ? n[this._i] : void 0;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function(e, n) {
    return Cs.def(cv(this, Ui), e, n);
  }
}, n2 = Es(Ui, i0, s0, Cs, !0, !0);
YC && XC && (gc = Cs.getConstructor(i0, Ui), JC(gc.prototype, s0), r0.NEED = !0, KC(["delete", "has", "get", "set"], function(t) {
  var e = n2.prototype, n = e[t];
  ZC(e, t, function(r, o) {
    if (o0(r) && !e2(r)) {
      this._f || (this._f = new gc());
      var i = this._f[t](r, o);
      return t == "set" ? this : i;
    }
    return n.call(this, r, o);
  });
}));
var uv = n0, r2 = Gn, lv = "WeakSet";
Es(lv, function(t) {
  return function() {
    return t(this, arguments.length > 0 ? arguments[0] : void 0);
  };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function(e) {
    return uv.def(r2(this, lv), e, !0);
  }
}, uv, !1, !0);
var Ju = J, fv = it, a0 = jn, c0 = a0("typed_array"), u0 = a0("view"), l0 = !!(Ju.ArrayBuffer && Ju.DataView), f0 = l0, dv = 0, o2 = 9, mc, i2 = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");
for (; dv < o2; )
  (mc = Ju[i2[dv++]]) ? (fv(mc.prototype, c0, !0), fv(mc.prototype, u0, !0)) : f0 = !1;
var Is = {
  ABV: l0,
  CONSTR: f0,
  TYPED: c0,
  VIEW: u0
}, Ts = {}, s2 = xt, a2 = le, d0 = function(t) {
  if (t === void 0)
    return 0;
  var e = s2(t), n = a2(e);
  if (e !== n)
    throw RangeError("Wrong length!");
  return n;
};
(function(t) {
  var e = J, n = ve, r = Is, o = it, i = $r(), s = Y, a = xr, c = xt, u = le, l = d0, f = dn.f, d = pe.f, h = ff(), b = _r, m = "ArrayBuffer", g = "DataView", v = "prototype", k = "Wrong length!", y = "Wrong index!", x = e[m], N = e[g], T = e.Math, C = e.RangeError, A = e.Infinity, z = x, M = T.abs, L = T.pow, w = T.floor, _ = T.log, p = T.LN2, O = "buffer", P = "byteLength", E = "byteOffset", S = n ? "_b" : O, I = n ? "_l" : P, F = n ? "_o" : E;
  function R(q, j, U) {
    var we = new Array(U), Ie = U * 8 - j - 1, me = (1 << Ie) - 1, _e = me >> 1, Fe = j === 23 ? L(2, -24) - L(2, -77) : 0, qe = 0, Re = q < 0 || q === 0 && 1 / q < 0 ? 1 : 0, te, je, Wn;
    for (q = M(q), q != q || q === A ? (je = q != q ? 1 : 0, te = me) : (te = w(_(q) / p), q * (Wn = L(2, -te)) < 1 && (te--, Wn *= 2), te + _e >= 1 ? q += Fe / Wn : q += Fe * L(2, 1 - _e), q * Wn >= 2 && (te++, Wn /= 2), te + _e >= me ? (je = 0, te = me) : te + _e >= 1 ? (je = (q * Wn - 1) * L(2, j), te = te + _e) : (je = q * L(2, _e - 1) * L(2, j), te = 0)); j >= 8; we[qe++] = je & 255, je /= 256, j -= 8)
      ;
    for (te = te << j | je, Ie += j; Ie > 0; we[qe++] = te & 255, te /= 256, Ie -= 8)
      ;
    return we[--qe] |= Re * 128, we;
  }
  function B(q, j, U) {
    var we = U * 8 - j - 1, Ie = (1 << we) - 1, me = Ie >> 1, _e = we - 7, Fe = U - 1, qe = q[Fe--], Re = qe & 127, te;
    for (qe >>= 7; _e > 0; Re = Re * 256 + q[Fe], Fe--, _e -= 8)
      ;
    for (te = Re & (1 << -_e) - 1, Re >>= -_e, _e += j; _e > 0; te = te * 256 + q[Fe], Fe--, _e -= 8)
      ;
    if (Re === 0)
      Re = 1 - me;
    else {
      if (Re === Ie)
        return te ? NaN : qe ? -A : A;
      te = te + L(2, j), Re = Re - me;
    }
    return (qe ? -1 : 1) * te * L(2, Re - j);
  }
  function V(q) {
    return q[3] << 24 | q[2] << 16 | q[1] << 8 | q[0];
  }
  function ee(q) {
    return [q & 255];
  }
  function ue(q) {
    return [q & 255, q >> 8 & 255];
  }
  function ie(q) {
    return [q & 255, q >> 8 & 255, q >> 16 & 255, q >> 24 & 255];
  }
  function Se(q) {
    return R(q, 52, 8);
  }
  function Je(q) {
    return R(q, 23, 4);
  }
  function Wt(q, j, U) {
    d(q[v], j, { get: function() {
      return this[U];
    } });
  }
  function Kt(q, j, U, we) {
    var Ie = +U, me = l(Ie);
    if (me + j > q[I])
      throw C(y);
    var _e = q[S]._b, Fe = me + q[F], qe = _e.slice(Fe, Fe + j);
    return we ? qe : qe.reverse();
  }
  function Zt(q, j, U, we, Ie, me) {
    var _e = +U, Fe = l(_e);
    if (Fe + j > q[I])
      throw C(y);
    for (var qe = q[S]._b, Re = Fe + q[F], te = we(+Ie), je = 0; je < j; je++)
      qe[Re + je] = te[me ? je : j - je - 1];
  }
  if (!r.ABV)
    x = function(j) {
      a(this, x, m);
      var U = l(j);
      this._b = h.call(new Array(U), 0), this[I] = U;
    }, N = function(j, U, we) {
      a(this, N, g), a(j, x, g);
      var Ie = j[I], me = c(U);
      if (me < 0 || me > Ie)
        throw C("Wrong offset!");
      if (we = we === void 0 ? Ie - me : u(we), me + we > Ie)
        throw C(k);
      this[S] = j, this[F] = me, this[I] = we;
    }, n && (Wt(x, P, "_l"), Wt(N, O, "_b"), Wt(N, P, "_l"), Wt(N, E, "_o")), i(N[v], {
      getInt8: function(j) {
        return Kt(this, 1, j)[0] << 24 >> 24;
      },
      getUint8: function(j) {
        return Kt(this, 1, j)[0];
      },
      getInt16: function(j) {
        var U = Kt(this, 2, j, arguments[1]);
        return (U[1] << 8 | U[0]) << 16 >> 16;
      },
      getUint16: function(j) {
        var U = Kt(this, 2, j, arguments[1]);
        return U[1] << 8 | U[0];
      },
      getInt32: function(j) {
        return V(Kt(this, 4, j, arguments[1]));
      },
      getUint32: function(j) {
        return V(Kt(this, 4, j, arguments[1])) >>> 0;
      },
      getFloat32: function(j) {
        return B(Kt(this, 4, j, arguments[1]), 23, 4);
      },
      getFloat64: function(j) {
        return B(Kt(this, 8, j, arguments[1]), 52, 8);
      },
      setInt8: function(j, U) {
        Zt(this, 1, j, ee, U);
      },
      setUint8: function(j, U) {
        Zt(this, 1, j, ee, U);
      },
      setInt16: function(j, U) {
        Zt(this, 2, j, ue, U, arguments[2]);
      },
      setUint16: function(j, U) {
        Zt(this, 2, j, ue, U, arguments[2]);
      },
      setInt32: function(j, U) {
        Zt(this, 4, j, ie, U, arguments[2]);
      },
      setUint32: function(j, U) {
        Zt(this, 4, j, ie, U, arguments[2]);
      },
      setFloat32: function(j, U) {
        Zt(this, 4, j, Je, U, arguments[2]);
      },
      setFloat64: function(j, U) {
        Zt(this, 8, j, Se, U, arguments[2]);
      }
    });
  else {
    if (!s(function() {
      x(1);
    }) || !s(function() {
      new x(-1);
    }) || s(function() {
      return new x(), new x(1.5), new x(NaN), x.name != m;
    })) {
      x = function(j) {
        return a(this, x), new z(l(j));
      };
      for (var kk = x[v] = z[v], vd = f(z), gd = 0, Ks; vd.length > gd; )
        (Ks = vd[gd++]) in x || o(x, Ks, z[Ks]);
      kk.constructor = x;
    }
    var Oo = new N(new x(2)), md = N[v].setInt8;
    Oo.setInt8(0, 2147483648), Oo.setInt8(1, 2147483649), (Oo.getInt8(0) || !Oo.getInt8(1)) && i(N[v], {
      setInt8: function(j, U) {
        md.call(this, j, U << 24 >> 24);
      },
      setUint8: function(j, U) {
        md.call(this, j, U << 24 >> 24);
      }
    }, !0);
  }
  b(x, m), b(N, g), o(N[v], r.VIEW, !0), t[m] = x, t[g] = N;
})(Ts);
var ct = D, bf = Is, h0 = Ts, hv = Q, pv = Bn, c2 = le, u2 = X, p0 = J.ArrayBuffer, l2 = xo, lo = h0.ArrayBuffer, vv = h0.DataView, gv = bf.ABV && p0.isView, mv = lo.prototype.slice, f2 = bf.VIEW, yf = "ArrayBuffer";
ct(ct.G + ct.W + ct.F * (p0 !== lo), { ArrayBuffer: lo });
ct(ct.S + ct.F * !bf.CONSTR, yf, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function(e) {
    return gv && gv(e) || u2(e) && f2 in e;
  }
});
ct(ct.P + ct.U + ct.F * Y(function() {
  return !new lo(2).slice(1, void 0).byteLength;
}), yf, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function(e, n) {
    if (mv !== void 0 && n === void 0)
      return mv.call(hv(this), e);
    for (var r = hv(this).byteLength, o = pv(e, r), i = pv(n === void 0 ? r : n, r), s = new (l2(this, lo))(c2(i - o)), a = new vv(this), c = new vv(s), u = 0; o < i; )
      c.setUint8(u++, a.getUint8(o++));
    return s;
  }
});
Sr(yf);
var Ko = D;
Ko(Ko.G + Ko.W + Ko.F * !Is.ABV, {
  DataView: Ts.DataView
});
var Yu = { exports: {} };
if (ve) {
  var _c = K_, Zo = J, vt = Y, ne = D, Jo = Is, _v = Ts, d2 = St, bv = xr, h2 = qn, gt = it, bc = $r(), p2 = xt, Yo = le, yv = d0, wv = Bn, kv = ln, Br = ot, Sv = So, Yn = X, xv = De, v2 = cf, g2 = Hn, m2 = Vn, yc = dn.f, _2 = lf, $v = jn, Ev = ae, mn = Et, Cv = ps, wc = xo, kc = Mb, b2 = kr, y2 = ys(), w2 = Sr, k2 = ff(), S2 = Pb(), Iv = pe, Tv = lt, zr = Iv.f, x2 = Tv.f, Hr = Zo.RangeError, Av = Zo.TypeError, Xn = Zo.Uint8Array, Sc = "ArrayBuffer", Ov = "Shared" + Sc, Dv = "BYTES_PER_ELEMENT", Vr = "prototype", Jt = Array[Vr], xc = _v.ArrayBuffer, $2 = _v.DataView, Pv = mn(0), E2 = mn(2), C2 = mn(3), I2 = mn(4), T2 = mn(5), A2 = mn(6), O2 = Cv(!0), D2 = Cv(!1), P2 = kc.values, F2 = kc.keys, R2 = kc.entries, N2 = Jt.lastIndexOf, M2 = Jt.reduce, L2 = Jt.reduceRight, Fv = Jt.join, q2 = Jt.sort, Rv = Jt.slice, Ur = Jt.toString, $c = Jt.toLocaleString, Ec = Ev("iterator"), Xo = Ev("toStringTag"), Nv = $v("typed_constructor"), Qo = $v("def_constructor"), Mv = Jo.CONSTR, Qn = Jo.TYPED, j2 = Jo.VIEW, ei = "Wrong length!", B2 = mn(1, function(t, e) {
    return ni(wc(t, t[Qo]), e);
  }), Lv = vt(function() {
    return new Xn(new Uint16Array([1]).buffer)[0] === 1;
  }), z2 = !!Xn && !!Xn[Vr].set && vt(function() {
    new Xn(1).set({});
  }), ti = function(t, e) {
    var n = p2(t);
    if (n < 0 || n % e)
      throw Hr("Wrong offset!");
    return n;
  }, oe = function(t) {
    if (Yn(t) && Qn in t)
      return t;
    throw Av(t + " is not a typed array!");
  }, ni = function(t, e) {
    if (!(Yn(t) && Nv in t))
      throw Av("It is not a typed array constructor!");
    return new t(e);
  }, qv = function(t, e) {
    return Cc(wc(t, t[Qo]), e);
  }, Cc = function(t, e) {
    for (var n = 0, r = e.length, o = ni(t, r); r > n; )
      o[n] = e[n++];
    return o;
  }, ri = function(t, e, n) {
    zr(t, e, { get: function() {
      return this._d[n];
    } });
  }, Ic = function(e) {
    var n = xv(e), r = arguments.length, o = r > 1 ? arguments[1] : void 0, i = o !== void 0, s = _2(n), a, c, u, l, f, d;
    if (s != null && !v2(s)) {
      for (d = s.call(n), u = [], a = 0; !(f = d.next()).done; a++)
        u.push(f.value);
      n = u;
    }
    for (i && r > 2 && (o = d2(o, arguments[2], 2)), a = 0, c = Yo(n.length), l = ni(this, c); c > a; a++)
      l[a] = i ? o(n[a], a) : n[a];
    return l;
  }, H2 = function() {
    for (var e = 0, n = arguments.length, r = ni(this, n); n > e; )
      r[e] = arguments[e++];
    return r;
  }, V2 = !!Xn && vt(function() {
    $c.call(new Xn(1));
  }), jv = function() {
    return $c.apply(V2 ? Rv.call(oe(this)) : oe(this), arguments);
  }, Bv = {
    copyWithin: function(e, n) {
      return S2.call(oe(this), e, n, arguments.length > 2 ? arguments[2] : void 0);
    },
    every: function(e) {
      return I2(oe(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    fill: function(e) {
      return k2.apply(oe(this), arguments);
    },
    filter: function(e) {
      return qv(this, E2(
        oe(this),
        e,
        arguments.length > 1 ? arguments[1] : void 0
      ));
    },
    find: function(e) {
      return T2(oe(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    findIndex: function(e) {
      return A2(oe(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    forEach: function(e) {
      Pv(oe(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    indexOf: function(e) {
      return D2(oe(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    includes: function(e) {
      return O2(oe(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    join: function(e) {
      return Fv.apply(oe(this), arguments);
    },
    lastIndexOf: function(e) {
      return N2.apply(oe(this), arguments);
    },
    map: function(e) {
      return B2(oe(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    reduce: function(e) {
      return M2.apply(oe(this), arguments);
    },
    reduceRight: function(e) {
      return L2.apply(oe(this), arguments);
    },
    reverse: function() {
      for (var e = this, n = oe(e).length, r = Math.floor(n / 2), o = 0, i; o < r; )
        i = e[o], e[o++] = e[--n], e[n] = i;
      return e;
    },
    some: function(e) {
      return C2(oe(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    sort: function(e) {
      return q2.call(oe(this), e);
    },
    subarray: function(e, n) {
      var r = oe(this), o = r.length, i = wv(e, o);
      return new (wc(r, r[Qo]))(
        r.buffer,
        r.byteOffset + i * r.BYTES_PER_ELEMENT,
        Yo((n === void 0 ? o : wv(n, o)) - i)
      );
    }
  }, zv = function(e, n) {
    return qv(this, Rv.call(oe(this), e, n));
  }, Hv = function(e) {
    oe(this);
    var n = ti(arguments[1], 1), r = this.length, o = xv(e), i = Yo(o.length), s = 0;
    if (i + n > r)
      throw Hr(ei);
    for (; s < i; )
      this[n + s] = o[s++];
  }, oi = {
    entries: function() {
      return R2.call(oe(this));
    },
    keys: function() {
      return F2.call(oe(this));
    },
    values: function() {
      return P2.call(oe(this));
    }
  }, Vv = function(t, e) {
    return Yn(t) && t[Qn] && typeof e != "symbol" && e in t && String(+e) == String(e);
  }, Uv = function(e, n) {
    return Vv(e, n = kv(n, !0)) ? h2(2, e[n]) : x2(e, n);
  }, Gv = function(e, n, r) {
    return Vv(e, n = kv(n, !0)) && Yn(r) && Br(r, "value") && !Br(r, "get") && !Br(r, "set") && !r.configurable && (!Br(r, "writable") || r.writable) && (!Br(r, "enumerable") || r.enumerable) ? (e[n] = r.value, e) : zr(e, n, r);
  };
  Mv || (Tv.f = Uv, Iv.f = Gv), ne(ne.S + ne.F * !Mv, "Object", {
    getOwnPropertyDescriptor: Uv,
    defineProperty: Gv
  }), vt(function() {
    Ur.call({});
  }) && (Ur = $c = function() {
    return Fv.call(this);
  });
  var At = bc({}, Bv);
  bc(At, oi), gt(At, Ec, oi.values), bc(At, {
    slice: zv,
    set: Hv,
    constructor: function() {
    },
    toString: Ur,
    toLocaleString: jv
  }), ri(At, "buffer", "b"), ri(At, "byteOffset", "o"), ri(At, "byteLength", "l"), ri(At, "length", "e"), zr(At, Xo, {
    get: function() {
      return this[Qn];
    }
  }), Yu.exports = function(t, e, n, r) {
    r = !!r;
    var o = t + (r ? "Clamped" : "") + "Array", i = "get" + t, s = "set" + t, a = Zo[o], c = a || {}, u = a && m2(a), l = !a || !Jo.ABV, f = {}, d = a && a[Vr], h = function(y, x) {
      var N = y._d;
      return N.v[i](x * e + N.o, Lv);
    }, b = function(y, x, N) {
      var T = y._d;
      r && (N = (N = Math.round(N)) < 0 ? 0 : N > 255 ? 255 : N & 255), T.v[s](x * e + T.o, N, Lv);
    }, m = function(y, x) {
      zr(y, x, {
        get: function() {
          return h(this, x);
        },
        set: function(N) {
          return b(this, x, N);
        },
        enumerable: !0
      });
    };
    l ? (a = n(function(y, x, N, T) {
      bv(y, a, o, "_d");
      var C = 0, A = 0, z, M, L, w;
      if (!Yn(x))
        L = yv(x), M = L * e, z = new xc(M);
      else if (x instanceof xc || (w = Sv(x)) == Sc || w == Ov) {
        z = x, A = ti(N, e);
        var _ = x.byteLength;
        if (T === void 0) {
          if (_ % e || (M = _ - A, M < 0))
            throw Hr(ei);
        } else if (M = Yo(T) * e, M + A > _)
          throw Hr(ei);
        L = M / e;
      } else
        return Qn in x ? Cc(a, x) : Ic.call(a, x);
      for (gt(y, "_d", {
        b: z,
        o: A,
        l: M,
        e: L,
        v: new $2(z)
      }); C < L; )
        m(y, C++);
    }), d = a[Vr] = g2(At), gt(d, "constructor", a)) : (!vt(function() {
      a(1);
    }) || !vt(function() {
      new a(-1);
    }) || !y2(function(y) {
      new a(), new a(null), new a(1.5), new a(y);
    }, !0)) && (a = n(function(y, x, N, T) {
      bv(y, a, o);
      var C;
      return Yn(x) ? x instanceof xc || (C = Sv(x)) == Sc || C == Ov ? T !== void 0 ? new c(x, ti(N, e), T) : N !== void 0 ? new c(x, ti(N, e)) : new c(x) : Qn in x ? Cc(a, x) : Ic.call(a, x) : new c(yv(x));
    }), Pv(u !== Function.prototype ? yc(c).concat(yc(u)) : yc(c), function(y) {
      y in a || gt(a, y, c[y]);
    }), a[Vr] = d, _c || (d.constructor = a));
    var g = d[Ec], v = !!g && (g.name == "values" || g.name == null), k = oi.values;
    gt(a, Nv, !0), gt(d, Qn, o), gt(d, j2, !0), gt(d, Qo, a), (r ? new a(1)[Xo] != o : !(Xo in d)) && zr(d, Xo, {
      get: function() {
        return o;
      }
    }), f[o] = a, ne(ne.G + ne.W + ne.F * (a != c), f), ne(ne.S, o, {
      BYTES_PER_ELEMENT: e
    }), ne(ne.S + ne.F * vt(function() {
      c.of.call(a, 1);
    }), o, {
      from: Ic,
      of: H2
    }), Dv in d || gt(d, Dv, e), ne(ne.P, o, Bv), w2(o), ne(ne.P + ne.F * z2, o, { set: Hv }), ne(ne.P + ne.F * !v, o, oi), !_c && d.toString != Ur && (d.toString = Ur), ne(ne.P + ne.F * vt(function() {
      new a(1).slice();
    }), o, { slice: zv }), ne(ne.P + ne.F * (vt(function() {
      return [1, 2].toLocaleString() != new a([1, 2]).toLocaleString();
    }) || !vt(function() {
      d.toLocaleString.call([1, 2]);
    })), o, { toLocaleString: jv }), b2[o] = v ? g : k, !_c && !v && gt(d, Ec, k);
  };
} else
  Yu.exports = function() {
  };
var Ut = Yu.exports;
Ut("Int8", 1, function(t) {
  return function(n, r, o) {
    return t(this, n, r, o);
  };
});
Ut("Uint8", 1, function(t) {
  return function(n, r, o) {
    return t(this, n, r, o);
  };
});
Ut("Uint8", 1, function(t) {
  return function(n, r, o) {
    return t(this, n, r, o);
  };
}, !0);
Ut("Int16", 2, function(t) {
  return function(n, r, o) {
    return t(this, n, r, o);
  };
});
Ut("Uint16", 2, function(t) {
  return function(n, r, o) {
    return t(this, n, r, o);
  };
});
Ut("Int32", 4, function(t) {
  return function(n, r, o) {
    return t(this, n, r, o);
  };
});
Ut("Uint32", 4, function(t) {
  return function(n, r, o) {
    return t(this, n, r, o);
  };
});
Ut("Float32", 4, function(t) {
  return function(n, r, o) {
    return t(this, n, r, o);
  };
});
Ut("Float64", 8, function(t) {
  return function(n, r, o) {
    return t(this, n, r, o);
  };
});
var Tc = D, U2 = kt, G2 = Q, Ac = (J.Reflect || {}).apply, W2 = Function.apply;
Tc(Tc.S + Tc.F * !Y(function() {
  Ac(function() {
  });
}), "Reflect", {
  apply: function(e, n, r) {
    var o = U2(e), i = G2(r);
    return Ac ? Ac(o, n, i) : W2.call(o, n, i);
  }
});
var Oc = D, K2 = Hn, Wv = kt, Z2 = Q, Kv = X, v0 = Y, J2 = gb, wf = (J.Reflect || {}).construct, Zv = v0(function() {
  function t() {
  }
  return !(wf(function() {
  }, [], t) instanceof t);
}), Jv = !v0(function() {
  wf(function() {
  });
});
Oc(Oc.S + Oc.F * (Zv || Jv), "Reflect", {
  construct: function(e, n) {
    Wv(e), Z2(n);
    var r = arguments.length < 3 ? e : Wv(arguments[2]);
    if (Jv && !Zv)
      return wf(e, n, r);
    if (e == r) {
      switch (n.length) {
        case 0:
          return new e();
        case 1:
          return new e(n[0]);
        case 2:
          return new e(n[0], n[1]);
        case 3:
          return new e(n[0], n[1], n[2]);
        case 4:
          return new e(n[0], n[1], n[2], n[3]);
      }
      var o = [null];
      return o.push.apply(o, n), new (J2.apply(e, o))();
    }
    var i = r.prototype, s = K2(Kv(i) ? i : Object.prototype), a = Function.apply.call(e, s, n);
    return Kv(a) ? a : s;
  }
});
var Yv = pe, Dc = D, Xv = Q, Y2 = ln;
Dc(Dc.S + Dc.F * Y(function() {
  Reflect.defineProperty(Yv.f({}, 1, { value: 1 }), 1, { value: 2 });
}), "Reflect", {
  defineProperty: function(e, n, r) {
    Xv(e), n = Y2(n, !0), Xv(r);
    try {
      return Yv.f(e, n, r), !0;
    } catch {
      return !1;
    }
  }
});
var Qv = D, X2 = lt.f, Q2 = Q;
Qv(Qv.S, "Reflect", {
  deleteProperty: function(e, n) {
    var r = X2(Q2(e), n);
    return r && !r.configurable ? !1 : delete e[n];
  }
});
var eg = D, eI = Q, g0 = function(t) {
  this._t = eI(t), this._i = 0;
  var e = this._k = [], n;
  for (n in t)
    e.push(n);
};
Ib(g0, "Object", function() {
  var t = this, e = t._k, n;
  do
    if (t._i >= e.length)
      return { value: void 0, done: !0 };
  while (!((n = e[t._i++]) in t._t));
  return { value: n, done: !1 };
});
eg(eg.S, "Reflect", {
  enumerate: function(e) {
    return new g0(e);
  }
});
var tI = lt, nI = Vn, rI = ot, tg = D, oI = X, iI = Q;
function m0(t, e) {
  var n = arguments.length < 3 ? t : arguments[2], r, o;
  if (iI(t) === n)
    return t[e];
  if (r = tI.f(t, e))
    return rI(r, "value") ? r.value : r.get !== void 0 ? r.get.call(n) : void 0;
  if (oI(o = nI(t)))
    return m0(o, e, n);
}
tg(tg.S, "Reflect", { get: m0 });
var sI = lt, ng = D, aI = Q;
ng(ng.S, "Reflect", {
  getOwnPropertyDescriptor: function(e, n) {
    return sI.f(aI(e), n);
  }
});
var rg = D, cI = Vn, uI = Q;
rg(rg.S, "Reflect", {
  getPrototypeOf: function(e) {
    return cI(uI(e));
  }
});
var og = D;
og(og.S, "Reflect", {
  has: function(e, n) {
    return n in e;
  }
});
var ig = D, lI = Q, sg = Object.isExtensible;
ig(ig.S, "Reflect", {
  isExtensible: function(e) {
    return lI(e), sg ? sg(e) : !0;
  }
});
var fI = dn, dI = yo, hI = Q, ag = J.Reflect, _0 = ag && ag.ownKeys || function(e) {
  var n = fI.f(hI(e)), r = dI.f;
  return r ? n.concat(r(e)) : n;
}, cg = D;
cg(cg.S, "Reflect", { ownKeys: _0 });
var ug = D, pI = Q, lg = Object.preventExtensions;
ug(ug.S, "Reflect", {
  preventExtensions: function(e) {
    pI(e);
    try {
      return lg && lg(e), !0;
    } catch {
      return !1;
    }
  }
});
var fg = pe, dg = lt, vI = Vn, gI = ot, hg = D, pg = qn, mI = Q, vg = X;
function b0(t, e, n) {
  var r = arguments.length < 4 ? t : arguments[3], o = dg.f(mI(t), e), i, s;
  if (!o) {
    if (vg(s = vI(t)))
      return b0(s, e, n, r);
    o = pg(0);
  }
  if (gI(o, "value")) {
    if (o.writable === !1 || !vg(r))
      return !1;
    if (i = dg.f(r, e)) {
      if (i.get || i.set || i.writable === !1)
        return !1;
      i.value = n, fg.f(r, e, i);
    } else
      fg.f(r, e, pg(0, n));
    return !0;
  }
  return o.set === void 0 ? !1 : (o.set.call(r, n), !0);
}
hg(hg.S, "Reflect", { set: b0 });
var gg = D, Pc = Zl;
Pc && gg(gg.S, "Reflect", {
  setPrototypeOf: function(e, n) {
    Pc.check(e, n);
    try {
      return Pc.set(e, n), !0;
    } catch {
      return !1;
    }
  }
});
var mg = D, _I = ps(!0);
mg(mg.P, "Array", {
  includes: function(e) {
    return _I(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
Un("includes");
ye.Array.includes;
var bI = vs, yI = X, wI = le, kI = St, SI = ae("isConcatSpreadable");
function y0(t, e, n, r, o, i, s, a) {
  for (var c = o, u = 0, l = s ? kI(s, a, 3) : !1, f, d; u < r; ) {
    if (u in n) {
      if (f = l ? l(n[u], u, e) : n[u], d = !1, yI(f) && (d = f[SI], d = d !== void 0 ? !!d : bI(f)), d && i > 0)
        c = y0(t, e, f, wI(f.length), c, i - 1) - 1;
      else {
        if (c >= 9007199254740991)
          throw TypeError();
        t[c] = f;
      }
      c++;
    }
    u++;
  }
  return c;
}
var xI = y0, _g = D, $I = xI, EI = De, CI = le, II = kt, TI = Ob;
_g(_g.P, "Array", {
  flatMap: function(e) {
    var n = EI(this), r, o;
    return II(e), r = CI(n.length), o = TI(n, 0), $I(o, n, n, r, 0, 1, e, arguments[1]), o;
  }
});
Un("flatMap");
ye.Array.flatMap;
var AI = le, OI = Xl, DI = Vt, w0 = function(t, e, n, r) {
  var o = String(DI(t)), i = o.length, s = n === void 0 ? " " : String(n), a = AI(e);
  if (a <= i || s == "")
    return o;
  var c = a - i, u = OI.call(s, Math.ceil(c / s.length));
  return u.length > c && (u = u.slice(0, c)), r ? u + o : o + u;
}, Fc = D, PI = w0, FI = $s, RI = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(FI);
Fc(Fc.P + Fc.F * RI, "String", {
  padStart: function(e) {
    return PI(this, e, arguments.length > 1 ? arguments[1] : void 0, !0);
  }
});
ye.String.padStart;
var Rc = D, NI = w0, MI = $s, LI = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(MI);
Rc(Rc.P + Rc.F * LI, "String", {
  padEnd: function(e) {
    return NI(this, e, arguments.length > 1 ? arguments[1] : void 0, !1);
  }
});
ye.String.padEnd;
wr("trimLeft", function(t) {
  return function() {
    return t(this, 1);
  };
}, "trimStart");
ye.String.trimLeft;
wr("trimRight", function(t) {
  return function() {
    return t(this, 2);
  };
}, "trimEnd");
ye.String.trimRight;
X_("asyncIterator");
hs.f("asyncIterator");
var bg = D, qI = _0, jI = st, BI = lt, zI = uf;
bg(bg.S, "Object", {
  getOwnPropertyDescriptors: function(e) {
    for (var n = jI(e), r = BI.f, o = qI(n), i = {}, s = 0, a, c; o.length > s; )
      c = r(n, a = o[s++]), c !== void 0 && zI(i, a, c);
    return i;
  }
});
ye.Object.getOwnPropertyDescriptors;
var HI = ve, VI = zn, UI = st, GI = br.f, k0 = function(t) {
  return function(e) {
    for (var n = UI(e), r = VI(n), o = r.length, i = 0, s = [], a; o > i; )
      a = r[i++], (!HI || GI.call(n, a)) && s.push(t ? [a, n[a]] : n[a]);
    return s;
  };
}, yg = D, WI = k0(!1);
yg(yg.S, "Object", {
  values: function(e) {
    return WI(e);
  }
});
ye.Object.values;
var wg = D, KI = k0(!0);
wg(wg.S, "Object", {
  entries: function(e) {
    return KI(e);
  }
});
ye.Object.entries;
var Nc = D, ZI = ye, JI = J, YI = xo, kg = Hb;
Nc(Nc.P + Nc.R, "Promise", { finally: function(t) {
  var e = YI(this, ZI.Promise || JI.Promise), n = typeof t == "function";
  return this.then(
    n ? function(r) {
      return kg(e, t()).then(function() {
        return r;
      });
    } : t,
    n ? function(r) {
      return kg(e, t()).then(function() {
        throw r;
      });
    } : t
  );
} });
ye.Promise.finally;
var Sg = J, ii = D, XI = $s, QI = [].slice, eT = /MSIE .\./.test(XI), xg = function(t) {
  return function(e, n) {
    var r = arguments.length > 2, o = r ? QI.call(arguments, 2) : !1;
    return t(r ? function() {
      (typeof e == "function" ? e : Function(e)).apply(this, o);
    } : e, n);
  };
};
ii(ii.G + ii.B + ii.F * eT, {
  setTimeout: xg(Sg.setTimeout),
  setInterval: xg(Sg.setInterval)
});
var Mc = D, $g = gf;
Mc(Mc.G + Mc.B, {
  setImmediate: $g.set,
  clearImmediate: $g.clear
});
var Eg = Mb, tT = zn, nT = Ke, rT = J, Cg = it, S0 = kr, x0 = ae, Ig = x0("iterator"), Tg = x0("toStringTag"), Ag = S0.Array, Og = {
  CSSRuleList: !0,
  // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: !1,
  CSSValueList: !1,
  ClientRectList: !1,
  DOMRectList: !1,
  DOMStringList: !1,
  DOMTokenList: !0,
  DataTransferItemList: !1,
  FileList: !1,
  HTMLAllCollection: !1,
  HTMLCollection: !1,
  HTMLFormElement: !1,
  HTMLSelectElement: !1,
  MediaList: !0,
  // TODO: Not spec compliant, should be false.
  MimeTypeArray: !1,
  NamedNodeMap: !1,
  NodeList: !0,
  PaintRequestList: !1,
  Plugin: !1,
  PluginArray: !1,
  SVGLengthList: !1,
  SVGNumberList: !1,
  SVGPathSegList: !1,
  SVGPointList: !1,
  SVGStringList: !1,
  SVGTransformList: !1,
  SourceBufferList: !1,
  StyleSheetList: !0,
  // TODO: Not spec compliant, should be false.
  TextTrackCueList: !1,
  TextTrackList: !1,
  TouchList: !1
};
for (var Dg = tT(Og), Lc = 0; Lc < Dg.length; Lc++) {
  var si = Dg[Lc], oT = Og[si], Pg = rT[si], _n = Pg && Pg.prototype, ai;
  if (_n && (_n[Ig] || Cg(_n, Ig, Ag), _n[Tg] || Cg(_n, Tg, si), S0[si] = Ag, oT))
    for (ai in Eg)
      _n[ai] || nT(_n, ai, Eg[ai], !0);
}
var iT = { exports: {} };
(function(t) {
  var e = function(n) {
    var r = Object.prototype, o = r.hasOwnProperty, i, s = typeof Symbol == "function" ? Symbol : {}, a = s.iterator || "@@iterator", c = s.asyncIterator || "@@asyncIterator", u = s.toStringTag || "@@toStringTag";
    function l(E, S, I, F) {
      var R = S && S.prototype instanceof v ? S : v, B = Object.create(R.prototype), V = new p(F || []);
      return B._invoke = M(E, I, V), B;
    }
    n.wrap = l;
    function f(E, S, I) {
      try {
        return { type: "normal", arg: E.call(S, I) };
      } catch (F) {
        return { type: "throw", arg: F };
      }
    }
    var d = "suspendedStart", h = "suspendedYield", b = "executing", m = "completed", g = {};
    function v() {
    }
    function k() {
    }
    function y() {
    }
    var x = {};
    x[a] = function() {
      return this;
    };
    var N = Object.getPrototypeOf, T = N && N(N(O([])));
    T && T !== r && o.call(T, a) && (x = T);
    var C = y.prototype = v.prototype = Object.create(x);
    k.prototype = C.constructor = y, y.constructor = k, y[u] = k.displayName = "GeneratorFunction";
    function A(E) {
      ["next", "throw", "return"].forEach(function(S) {
        E[S] = function(I) {
          return this._invoke(S, I);
        };
      });
    }
    n.isGeneratorFunction = function(E) {
      var S = typeof E == "function" && E.constructor;
      return S ? S === k || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (S.displayName || S.name) === "GeneratorFunction" : !1;
    }, n.mark = function(E) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(E, y) : (E.__proto__ = y, u in E || (E[u] = "GeneratorFunction")), E.prototype = Object.create(C), E;
    }, n.awrap = function(E) {
      return { __await: E };
    };
    function z(E) {
      function S(R, B, V, ee) {
        var ue = f(E[R], E, B);
        if (ue.type === "throw")
          ee(ue.arg);
        else {
          var ie = ue.arg, Se = ie.value;
          return Se && typeof Se == "object" && o.call(Se, "__await") ? Promise.resolve(Se.__await).then(function(Je) {
            S("next", Je, V, ee);
          }, function(Je) {
            S("throw", Je, V, ee);
          }) : Promise.resolve(Se).then(function(Je) {
            ie.value = Je, V(ie);
          }, function(Je) {
            return S("throw", Je, V, ee);
          });
        }
      }
      var I;
      function F(R, B) {
        function V() {
          return new Promise(function(ee, ue) {
            S(R, B, ee, ue);
          });
        }
        return I = // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        I ? I.then(
          V,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          V
        ) : V();
      }
      this._invoke = F;
    }
    A(z.prototype), z.prototype[c] = function() {
      return this;
    }, n.AsyncIterator = z, n.async = function(E, S, I, F) {
      var R = new z(
        l(E, S, I, F)
      );
      return n.isGeneratorFunction(S) ? R : R.next().then(function(B) {
        return B.done ? B.value : R.next();
      });
    };
    function M(E, S, I) {
      var F = d;
      return function(B, V) {
        if (F === b)
          throw new Error("Generator is already running");
        if (F === m) {
          if (B === "throw")
            throw V;
          return P();
        }
        for (I.method = B, I.arg = V; ; ) {
          var ee = I.delegate;
          if (ee) {
            var ue = L(ee, I);
            if (ue) {
              if (ue === g)
                continue;
              return ue;
            }
          }
          if (I.method === "next")
            I.sent = I._sent = I.arg;
          else if (I.method === "throw") {
            if (F === d)
              throw F = m, I.arg;
            I.dispatchException(I.arg);
          } else
            I.method === "return" && I.abrupt("return", I.arg);
          F = b;
          var ie = f(E, S, I);
          if (ie.type === "normal") {
            if (F = I.done ? m : h, ie.arg === g)
              continue;
            return {
              value: ie.arg,
              done: I.done
            };
          } else
            ie.type === "throw" && (F = m, I.method = "throw", I.arg = ie.arg);
        }
      };
    }
    function L(E, S) {
      var I = E.iterator[S.method];
      if (I === i) {
        if (S.delegate = null, S.method === "throw") {
          if (E.iterator.return && (S.method = "return", S.arg = i, L(E, S), S.method === "throw"))
            return g;
          S.method = "throw", S.arg = new TypeError(
            "The iterator does not provide a 'throw' method"
          );
        }
        return g;
      }
      var F = f(I, E.iterator, S.arg);
      if (F.type === "throw")
        return S.method = "throw", S.arg = F.arg, S.delegate = null, g;
      var R = F.arg;
      if (!R)
        return S.method = "throw", S.arg = new TypeError("iterator result is not an object"), S.delegate = null, g;
      if (R.done)
        S[E.resultName] = R.value, S.next = E.nextLoc, S.method !== "return" && (S.method = "next", S.arg = i);
      else
        return R;
      return S.delegate = null, g;
    }
    A(C), C[u] = "Generator", C[a] = function() {
      return this;
    }, C.toString = function() {
      return "[object Generator]";
    };
    function w(E) {
      var S = { tryLoc: E[0] };
      1 in E && (S.catchLoc = E[1]), 2 in E && (S.finallyLoc = E[2], S.afterLoc = E[3]), this.tryEntries.push(S);
    }
    function _(E) {
      var S = E.completion || {};
      S.type = "normal", delete S.arg, E.completion = S;
    }
    function p(E) {
      this.tryEntries = [{ tryLoc: "root" }], E.forEach(w, this), this.reset(!0);
    }
    n.keys = function(E) {
      var S = [];
      for (var I in E)
        S.push(I);
      return S.reverse(), function F() {
        for (; S.length; ) {
          var R = S.pop();
          if (R in E)
            return F.value = R, F.done = !1, F;
        }
        return F.done = !0, F;
      };
    };
    function O(E) {
      if (E) {
        var S = E[a];
        if (S)
          return S.call(E);
        if (typeof E.next == "function")
          return E;
        if (!isNaN(E.length)) {
          var I = -1, F = function R() {
            for (; ++I < E.length; )
              if (o.call(E, I))
                return R.value = E[I], R.done = !1, R;
            return R.value = i, R.done = !0, R;
          };
          return F.next = F;
        }
      }
      return { next: P };
    }
    n.values = O;
    function P() {
      return { value: i, done: !0 };
    }
    return p.prototype = {
      constructor: p,
      reset: function(E) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = i, this.done = !1, this.delegate = null, this.method = "next", this.arg = i, this.tryEntries.forEach(_), !E)
          for (var S in this)
            S.charAt(0) === "t" && o.call(this, S) && !isNaN(+S.slice(1)) && (this[S] = i);
      },
      stop: function() {
        this.done = !0;
        var E = this.tryEntries[0], S = E.completion;
        if (S.type === "throw")
          throw S.arg;
        return this.rval;
      },
      dispatchException: function(E) {
        if (this.done)
          throw E;
        var S = this;
        function I(ue, ie) {
          return B.type = "throw", B.arg = E, S.next = ue, ie && (S.method = "next", S.arg = i), !!ie;
        }
        for (var F = this.tryEntries.length - 1; F >= 0; --F) {
          var R = this.tryEntries[F], B = R.completion;
          if (R.tryLoc === "root")
            return I("end");
          if (R.tryLoc <= this.prev) {
            var V = o.call(R, "catchLoc"), ee = o.call(R, "finallyLoc");
            if (V && ee) {
              if (this.prev < R.catchLoc)
                return I(R.catchLoc, !0);
              if (this.prev < R.finallyLoc)
                return I(R.finallyLoc);
            } else if (V) {
              if (this.prev < R.catchLoc)
                return I(R.catchLoc, !0);
            } else if (ee) {
              if (this.prev < R.finallyLoc)
                return I(R.finallyLoc);
            } else
              throw new Error("try statement without catch or finally");
          }
        }
      },
      abrupt: function(E, S) {
        for (var I = this.tryEntries.length - 1; I >= 0; --I) {
          var F = this.tryEntries[I];
          if (F.tryLoc <= this.prev && o.call(F, "finallyLoc") && this.prev < F.finallyLoc) {
            var R = F;
            break;
          }
        }
        R && (E === "break" || E === "continue") && R.tryLoc <= S && S <= R.finallyLoc && (R = null);
        var B = R ? R.completion : {};
        return B.type = E, B.arg = S, R ? (this.method = "next", this.next = R.finallyLoc, g) : this.complete(B);
      },
      complete: function(E, S) {
        if (E.type === "throw")
          throw E.arg;
        return E.type === "break" || E.type === "continue" ? this.next = E.arg : E.type === "return" ? (this.rval = this.arg = E.arg, this.method = "return", this.next = "end") : E.type === "normal" && S && (this.next = S), g;
      },
      finish: function(E) {
        for (var S = this.tryEntries.length - 1; S >= 0; --S) {
          var I = this.tryEntries[S];
          if (I.finallyLoc === E)
            return this.complete(I.completion, I.afterLoc), _(I), g;
        }
      },
      catch: function(E) {
        for (var S = this.tryEntries.length - 1; S >= 0; --S) {
          var I = this.tryEntries[S];
          if (I.tryLoc === E) {
            var F = I.completion;
            if (F.type === "throw") {
              var R = F.arg;
              _(I);
            }
            return R;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function(E, S, I) {
        return this.delegate = {
          iterator: O(E),
          resultName: S,
          nextLoc: I
        }, this.method === "next" && (this.arg = i), g;
      }
    }, n;
  }(
    // If this script is executing as a CommonJS module, use module.exports
    // as the regeneratorRuntime namespace. Otherwise create a new empty
    // object. Either way, the resulting object will be used to initialize
    // the regeneratorRuntime variable at the top of this file.
    t.exports
  );
  try {
    regeneratorRuntime = e;
  } catch {
    Function("r", "regeneratorRuntime = r")(e);
  }
})(iT);
var $0 = { exports: {} }, sT = $0.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
typeof __g == "number" && (__g = sT);
var kf = $0.exports, E0 = { exports: {} }, aT = E0.exports = { version: "2.6.9" };
typeof __e == "number" && (__e = aT);
var C0 = E0.exports, cT = function(t) {
  if (typeof t != "function")
    throw TypeError(t + " is not a function!");
  return t;
}, uT = cT, lT = function(t, e, n) {
  if (uT(t), e === void 0)
    return t;
  switch (n) {
    case 1:
      return function(r) {
        return t.call(e, r);
      };
    case 2:
      return function(r, o) {
        return t.call(e, r, o);
      };
    case 3:
      return function(r, o, i) {
        return t.call(e, r, o, i);
      };
  }
  return function() {
    return t.apply(e, arguments);
  };
}, I0 = {}, Sf = function(t) {
  return typeof t == "object" ? t !== null : typeof t == "function";
}, fT = Sf, dT = function(t) {
  if (!fT(t))
    throw TypeError(t + " is not an object!");
  return t;
}, T0 = function(t) {
  try {
    return !!t();
  } catch {
    return !0;
  }
}, xf = !T0(function() {
  return Object.defineProperty({}, "a", { get: function() {
    return 7;
  } }).a != 7;
}), qc, Fg;
function hT() {
  if (Fg)
    return qc;
  Fg = 1;
  var t = Sf, e = kf.document, n = t(e) && t(e.createElement);
  return qc = function(r) {
    return n ? e.createElement(r) : {};
  }, qc;
}
var pT = !xf && !T0(function() {
  return Object.defineProperty(hT()("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
}), ci = Sf, vT = function(t, e) {
  if (!ci(t))
    return t;
  var n, r;
  if (e && typeof (n = t.toString) == "function" && !ci(r = n.call(t)) || typeof (n = t.valueOf) == "function" && !ci(r = n.call(t)) || !e && typeof (n = t.toString) == "function" && !ci(r = n.call(t)))
    return r;
  throw TypeError("Can't convert object to primitive value");
}, Rg = dT, gT = pT, mT = vT, _T = Object.defineProperty;
I0.f = xf ? Object.defineProperty : function(e, n, r) {
  if (Rg(e), n = mT(n, !0), Rg(r), gT)
    try {
      return _T(e, n, r);
    } catch {
    }
  if ("get" in r || "set" in r)
    throw TypeError("Accessors not supported!");
  return "value" in r && (e[n] = r.value), e;
};
var bT = function(t, e) {
  return {
    enumerable: !(t & 1),
    configurable: !(t & 2),
    writable: !(t & 4),
    value: e
  };
}, yT = I0, wT = bT, kT = xf ? function(t, e, n) {
  return yT.f(t, e, wT(1, n));
} : function(t, e, n) {
  return t[e] = n, t;
}, ST = {}.hasOwnProperty, xT = function(t, e) {
  return ST.call(t, e);
}, ui = kf, jc = C0, Ng = lT, $T = kT, ET = xT, li = "prototype", $e = function(t, e, n) {
  var r = t & $e.F, o = t & $e.G, i = t & $e.S, s = t & $e.P, a = t & $e.B, c = t & $e.W, u = o ? jc : jc[e] || (jc[e] = {}), l = u[li], f = o ? ui : i ? ui[e] : (ui[e] || {})[li], d, h, b;
  o && (n = e);
  for (d in n)
    h = !r && f && f[d] !== void 0, !(h && ET(u, d)) && (b = h ? f[d] : n[d], u[d] = o && typeof f[d] != "function" ? n[d] : a && h ? Ng(b, ui) : c && f[d] == b ? function(m) {
      var g = function(v, k, y) {
        if (this instanceof m) {
          switch (arguments.length) {
            case 0:
              return new m();
            case 1:
              return new m(v);
            case 2:
              return new m(v, k);
          }
          return new m(v, k, y);
        }
        return m.apply(this, arguments);
      };
      return g[li] = m[li], g;
    }(b) : s && typeof b == "function" ? Ng(Function.call, b) : b, s && ((u.virtual || (u.virtual = {}))[d] = b, t & $e.R && l && !l[d] && $T(l, d, b)));
};
$e.F = 1;
$e.G = 2;
$e.S = 4;
$e.P = 8;
$e.B = 16;
$e.W = 32;
$e.U = 64;
$e.R = 128;
var CT = $e, Mg = CT;
Mg(Mg.G, { global: kf });
var IT = C0.global, A0 = TT(IT);
function TT(t) {
  return t && t.__esModule ? t : { default: t };
}
A0.default._babelPolyfill && typeof console < "u" && console.warn && console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning.");
A0.default._babelPolyfill = !0;
/*!
 * Vue.js v2.7.14
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
var Ae = Object.freeze({}), G = Array.isArray;
function H(t) {
  return t == null;
}
function $(t) {
  return t != null;
}
function ce(t) {
  return t === !0;
}
function AT(t) {
  return t === !1;
}
function Eo(t) {
  return typeof t == "string" || typeof t == "number" || // $flow-disable-line
  typeof t == "symbol" || typeof t == "boolean";
}
function se(t) {
  return typeof t == "function";
}
function Ce(t) {
  return t !== null && typeof t == "object";
}
var $f = Object.prototype.toString;
function Ge(t) {
  return $f.call(t) === "[object Object]";
}
function OT(t) {
  return $f.call(t) === "[object RegExp]";
}
function O0(t) {
  var e = parseFloat(String(t));
  return e >= 0 && Math.floor(e) === e && isFinite(t);
}
function Xu(t) {
  return $(t) && typeof t.then == "function" && typeof t.catch == "function";
}
function DT(t) {
  return t == null ? "" : Array.isArray(t) || Ge(t) && t.toString === $f ? JSON.stringify(t, null, 2) : String(t);
}
function fo(t) {
  var e = parseFloat(t);
  return isNaN(e) ? t : e;
}
function ke(t, e) {
  for (var n = /* @__PURE__ */ Object.create(null), r = t.split(","), o = 0; o < r.length; o++)
    n[r[o]] = !0;
  return e ? function(i) {
    return n[i.toLowerCase()];
  } : function(i) {
    return n[i];
  };
}
var PT = ke("slot,component", !0), FT = ke("key,ref,slot,slot-scope,is");
function pn(t, e) {
  var n = t.length;
  if (n) {
    if (e === t[n - 1]) {
      t.length = n - 1;
      return;
    }
    var r = t.indexOf(e);
    if (r > -1)
      return t.splice(r, 1);
  }
}
var RT = Object.prototype.hasOwnProperty;
function Oe(t, e) {
  return RT.call(t, e);
}
function dt(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(r) {
    var o = e[r];
    return o || (e[r] = t(r));
  };
}
var NT = /-(\w)/g, Ve = dt(function(t) {
  return t.replace(NT, function(e, n) {
    return n ? n.toUpperCase() : "";
  });
}), D0 = dt(function(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}), MT = /\B([A-Z])/g, Dn = dt(function(t) {
  return t.replace(MT, "-$1").toLowerCase();
});
function LT(t, e) {
  function n(r) {
    var o = arguments.length;
    return o ? o > 1 ? t.apply(e, arguments) : t.call(e, r) : t.call(e);
  }
  return n._length = t.length, n;
}
function qT(t, e) {
  return t.bind(e);
}
var P0 = Function.prototype.bind ? qT : LT;
function Qu(t, e) {
  e = e || 0;
  for (var n = t.length - e, r = new Array(n); n--; )
    r[n] = t[n + e];
  return r;
}
function Z(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function F0(t) {
  for (var e = {}, n = 0; n < t.length; n++)
    t[n] && Z(e, t[n]);
  return e;
}
function he(t, e, n) {
}
var Qe = function(t, e, n) {
  return !1;
}, R0 = function(t) {
  return t;
};
function jT(t) {
  return t.reduce(function(e, n) {
    return e.concat(n.staticKeys || []);
  }, []).join(",");
}
function Pn(t, e) {
  if (t === e)
    return !0;
  var n = Ce(t), r = Ce(e);
  if (n && r)
    try {
      var o = Array.isArray(t), i = Array.isArray(e);
      if (o && i)
        return t.length === e.length && t.every(function(c, u) {
          return Pn(c, e[u]);
        });
      if (t instanceof Date && e instanceof Date)
        return t.getTime() === e.getTime();
      if (!o && !i) {
        var s = Object.keys(t), a = Object.keys(e);
        return s.length === a.length && s.every(function(c) {
          return Pn(t[c], e[c]);
        });
      } else
        return !1;
    } catch {
      return !1;
    }
  else
    return !n && !r ? String(t) === String(e) : !1;
}
function N0(t, e) {
  for (var n = 0; n < t.length; n++)
    if (Pn(t[n], e))
      return n;
  return -1;
}
function Gi(t) {
  var e = !1;
  return function() {
    e || (e = !0, t.apply(this, arguments));
  };
}
function BT(t, e) {
  return t === e ? t === 0 && 1 / t !== 1 / e : t === t || e === e;
}
var Lg = "data-server-rendered", As = ["component", "directive", "filter"], M0 = [
  "beforeCreate",
  "created",
  "beforeMount",
  "mounted",
  "beforeUpdate",
  "updated",
  "beforeDestroy",
  "destroyed",
  "activated",
  "deactivated",
  "errorCaptured",
  "serverPrefetch",
  "renderTracked",
  "renderTriggered"
], Ue = {
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: /* @__PURE__ */ Object.create(null),
  /**
   * Whether to suppress warnings.
   */
  silent: !1,
  /**
   * Show production mode tip message on boot?
   */
  productionTip: !1,
  /**
   * Whether to enable devtools
   */
  devtools: !1,
  /**
   * Whether to record perf
   */
  performance: !1,
  /**
   * Error handler for watcher errors
   */
  errorHandler: null,
  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,
  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],
  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: /* @__PURE__ */ Object.create(null),
  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: Qe,
  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: Qe,
  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: Qe,
  /**
   * Get the namespace of an element
   */
  getTagNamespace: he,
  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: R0,
  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: Qe,
  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: !0,
  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: M0
}, L0 = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
function q0(t) {
  var e = (t + "").charCodeAt(0);
  return e === 36 || e === 95;
}
function nn(t, e, n, r) {
  Object.defineProperty(t, e, {
    value: n,
    enumerable: !!r,
    writable: !0,
    configurable: !0
  });
}
var zT = new RegExp("[^".concat(L0.source, ".$_\\d]"));
function HT(t) {
  if (!zT.test(t)) {
    var e = t.split(".");
    return function(n) {
      for (var r = 0; r < e.length; r++) {
        if (!n)
          return;
        n = n[e[r]];
      }
      return n;
    };
  }
}
var VT = "__proto__" in {}, Pe = typeof window < "u", tt = Pe && window.navigator.userAgent.toLowerCase(), on = tt && /msie|trident/.test(tt), Er = tt && tt.indexOf("msie 9.0") > 0, j0 = tt && tt.indexOf("edge/") > 0;
tt && tt.indexOf("android") > 0;
var UT = tt && /iphone|ipad|ipod|ios/.test(tt), qg = tt && tt.match(/firefox\/(\d+)/), el = {}.watch, B0 = !1;
if (Pe)
  try {
    var jg = {};
    Object.defineProperty(jg, "passive", {
      get: function() {
        B0 = !0;
      }
    }), window.addEventListener("test-passive", null, jg);
  } catch {
  }
var fi, Cr = function() {
  return fi === void 0 && (!Pe && typeof global < "u" ? fi = global.process && global.process.env.VUE_ENV === "server" : fi = !1), fi;
}, Wi = Pe && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function lr(t) {
  return typeof t == "function" && /native code/.test(t.toString());
}
var Co = typeof Symbol < "u" && lr(Symbol) && typeof Reflect < "u" && lr(Reflect.ownKeys), ho;
typeof Set < "u" && lr(Set) ? ho = Set : ho = /** @class */
function() {
  function t() {
    this.set = /* @__PURE__ */ Object.create(null);
  }
  return t.prototype.has = function(e) {
    return this.set[e] === !0;
  }, t.prototype.add = function(e) {
    this.set[e] = !0;
  }, t.prototype.clear = function() {
    this.set = /* @__PURE__ */ Object.create(null);
  }, t;
}();
var ro = null;
function sn(t) {
  t === void 0 && (t = null), t || ro && ro._scope.off(), ro = t, t && t._scope.on();
}
var We = (
  /** @class */
  function() {
    function t(e, n, r, o, i, s, a, c) {
      this.tag = e, this.data = n, this.children = r, this.text = o, this.elm = i, this.ns = void 0, this.context = s, this.fnContext = void 0, this.fnOptions = void 0, this.fnScopeId = void 0, this.key = n && n.key, this.componentOptions = a, this.componentInstance = void 0, this.parent = void 0, this.raw = !1, this.isStatic = !1, this.isRootInsert = !0, this.isComment = !1, this.isCloned = !1, this.isOnce = !1, this.asyncFactory = c, this.asyncMeta = void 0, this.isAsyncPlaceholder = !1;
    }
    return Object.defineProperty(t.prototype, "child", {
      // DEPRECATED: alias for componentInstance for backwards compat.
      /* istanbul ignore next */
      get: function() {
        return this.componentInstance;
      },
      enumerable: !1,
      configurable: !0
    }), t;
  }()
), In = function(t) {
  t === void 0 && (t = "");
  var e = new We();
  return e.text = t, e.isComment = !0, e;
};
function ir(t) {
  return new We(void 0, void 0, void 0, String(t));
}
function tl(t) {
  var e = new We(
    t.tag,
    t.data,
    // #7975
    // clone children array to avoid mutating original in case of cloning
    // a child.
    t.children && t.children.slice(),
    t.text,
    t.elm,
    t.context,
    t.componentOptions,
    t.asyncFactory
  );
  return e.ns = t.ns, e.isStatic = t.isStatic, e.key = t.key, e.isComment = t.isComment, e.fnContext = t.fnContext, e.fnOptions = t.fnOptions, e.fnScopeId = t.fnScopeId, e.asyncMeta = t.asyncMeta, e.isCloned = !0, e;
}
var GT = 0, Ai = [], WT = function() {
  for (var t = 0; t < Ai.length; t++) {
    var e = Ai[t];
    e.subs = e.subs.filter(function(n) {
      return n;
    }), e._pending = !1;
  }
  Ai.length = 0;
}, an = (
  /** @class */
  function() {
    function t() {
      this._pending = !1, this.id = GT++, this.subs = [];
    }
    return t.prototype.addSub = function(e) {
      this.subs.push(e);
    }, t.prototype.removeSub = function(e) {
      this.subs[this.subs.indexOf(e)] = null, this._pending || (this._pending = !0, Ai.push(this));
    }, t.prototype.depend = function(e) {
      t.target && t.target.addDep(this);
    }, t.prototype.notify = function(e) {
      for (var n = this.subs.filter(function(s) {
        return s;
      }), r = 0, o = n.length; r < o; r++) {
        var i = n[r];
        i.update();
      }
    }, t;
  }()
);
an.target = null;
var Oi = [];
function Ir(t) {
  Oi.push(t), an.target = t;
}
function Tr() {
  Oi.pop(), an.target = Oi[Oi.length - 1];
}
var z0 = Array.prototype, Ki = Object.create(z0), KT = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse"
];
KT.forEach(function(t) {
  var e = z0[t];
  nn(Ki, t, function() {
    for (var r = [], o = 0; o < arguments.length; o++)
      r[o] = arguments[o];
    var i = e.apply(this, r), s = this.__ob__, a;
    switch (t) {
      case "push":
      case "unshift":
        a = r;
        break;
      case "splice":
        a = r.slice(2);
        break;
    }
    return a && s.observeArray(a), s.dep.notify(), i;
  });
});
var Bg = Object.getOwnPropertyNames(Ki), H0 = {}, Ef = !0;
function cn(t) {
  Ef = t;
}
var ZT = {
  notify: he,
  depend: he,
  addSub: he,
  removeSub: he
}, zg = (
  /** @class */
  function() {
    function t(e, n, r) {
      if (n === void 0 && (n = !1), r === void 0 && (r = !1), this.value = e, this.shallow = n, this.mock = r, this.dep = r ? ZT : new an(), this.vmCount = 0, nn(e, "__ob__", this), G(e)) {
        if (!r)
          if (VT)
            e.__proto__ = Ki;
          else
            for (var o = 0, i = Bg.length; o < i; o++) {
              var s = Bg[o];
              nn(e, s, Ki[s]);
            }
        n || this.observeArray(e);
      } else
        for (var a = Object.keys(e), o = 0; o < a.length; o++) {
          var s = a[o];
          Fn(e, s, H0, void 0, n, r);
        }
    }
    return t.prototype.observeArray = function(e) {
      for (var n = 0, r = e.length; n < r; n++)
        Bt(e[n], !1, this.mock);
    }, t;
  }()
);
function Bt(t, e, n) {
  if (t && Oe(t, "__ob__") && t.__ob__ instanceof zg)
    return t.__ob__;
  if (Ef && (n || !Cr()) && (G(t) || Ge(t)) && Object.isExtensible(t) && !t.__v_skip && !wt(t) && !(t instanceof We))
    return new zg(t, e, n);
}
function Fn(t, e, n, r, o, i) {
  var s = new an(), a = Object.getOwnPropertyDescriptor(t, e);
  if (!(a && a.configurable === !1)) {
    var c = a && a.get, u = a && a.set;
    (!c || u) && (n === H0 || arguments.length === 2) && (n = t[e]);
    var l = !o && Bt(n, !1, i);
    return Object.defineProperty(t, e, {
      enumerable: !0,
      configurable: !0,
      get: function() {
        var d = c ? c.call(t) : n;
        return an.target && (s.depend(), l && (l.dep.depend(), G(d) && U0(d))), wt(d) && !o ? d.value : d;
      },
      set: function(d) {
        var h = c ? c.call(t) : n;
        if (BT(h, d)) {
          if (u)
            u.call(t, d);
          else {
            if (c)
              return;
            if (!o && wt(h) && !wt(d)) {
              h.value = d;
              return;
            } else
              n = d;
          }
          l = !o && Bt(d, !1, i), s.notify();
        }
      }
    }), s;
  }
}
function Cf(t, e, n) {
  if (!If(t)) {
    var r = t.__ob__;
    return G(t) && O0(e) ? (t.length = Math.max(t.length, e), t.splice(e, 1, n), r && !r.shallow && r.mock && Bt(n, !1, !0), n) : e in t && !(e in Object.prototype) ? (t[e] = n, n) : t._isVue || r && r.vmCount ? n : r ? (Fn(r.value, e, n, void 0, r.shallow, r.mock), r.dep.notify(), n) : (t[e] = n, n);
  }
}
function V0(t, e) {
  if (G(t) && O0(e)) {
    t.splice(e, 1);
    return;
  }
  var n = t.__ob__;
  t._isVue || n && n.vmCount || If(t) || Oe(t, e) && (delete t[e], n && n.dep.notify());
}
function U0(t) {
  for (var e = void 0, n = 0, r = t.length; n < r; n++)
    e = t[n], e && e.__ob__ && e.__ob__.dep.depend(), G(e) && U0(e);
}
function G0(t) {
  return JT(t, !0), nn(t, "__v_isShallow", !0), t;
}
function JT(t, e) {
  If(t) || Bt(
    t,
    e,
    Cr()
    /* ssr mock reactivity */
  );
}
function If(t) {
  return !!(t && t.__v_isReadonly);
}
function wt(t) {
  return !!(t && t.__v_isRef === !0);
}
function nl(t, e, n) {
  Object.defineProperty(t, n, {
    enumerable: !0,
    configurable: !0,
    get: function() {
      var r = e[n];
      if (wt(r))
        return r.value;
      var o = r && r.__ob__;
      return o && o.dep.depend(), r;
    },
    set: function(r) {
      var o = e[n];
      wt(o) && !wt(r) ? o.value = r : e[n] = r;
    }
  });
}
var Hg = dt(function(t) {
  var e = t.charAt(0) === "&";
  t = e ? t.slice(1) : t;
  var n = t.charAt(0) === "~";
  t = n ? t.slice(1) : t;
  var r = t.charAt(0) === "!";
  return t = r ? t.slice(1) : t, {
    name: t,
    once: n,
    capture: r,
    passive: e
  };
});
function rl(t, e) {
  function n() {
    var r = n.fns;
    if (G(r))
      for (var o = r.slice(), i = 0; i < o.length; i++)
        un(o[i], null, arguments, e, "v-on handler");
    else
      return un(r, null, arguments, e, "v-on handler");
  }
  return n.fns = t, n;
}
function W0(t, e, n, r, o, i) {
  var s, a, c, u;
  for (s in t)
    a = t[s], c = e[s], u = Hg(s), H(a) || (H(c) ? (H(a.fns) && (a = t[s] = rl(a, i)), ce(u.once) && (a = t[s] = o(u.name, a, u.capture)), n(u.name, a, u.capture, u.passive, u.params)) : a !== c && (c.fns = a, t[s] = c));
  for (s in e)
    H(t[s]) && (u = Hg(s), r(u.name, e[s], u.capture));
}
function Xt(t, e, n) {
  t instanceof We && (t = t.data.hook || (t.data.hook = {}));
  var r, o = t[e];
  function i() {
    n.apply(this, arguments), pn(r.fns, i);
  }
  H(o) ? r = rl([i]) : $(o.fns) && ce(o.merged) ? (r = o, r.fns.push(i)) : r = rl([o, i]), r.merged = !0, t[e] = r;
}
function YT(t, e, n) {
  var r = e.options.props;
  if (!H(r)) {
    var o = {}, i = t.attrs, s = t.props;
    if ($(i) || $(s))
      for (var a in r) {
        var c = Dn(a);
        Vg(o, s, a, c, !0) || Vg(o, i, a, c, !1);
      }
    return o;
  }
}
function Vg(t, e, n, r, o) {
  if ($(e)) {
    if (Oe(e, n))
      return t[n] = e[n], o || delete e[n], !0;
    if (Oe(e, r))
      return t[n] = e[r], o || delete e[r], !0;
  }
  return !1;
}
function XT(t) {
  for (var e = 0; e < t.length; e++)
    if (G(t[e]))
      return Array.prototype.concat.apply([], t);
  return t;
}
function Tf(t) {
  return Eo(t) ? [ir(t)] : G(t) ? K0(t) : void 0;
}
function Gr(t) {
  return $(t) && $(t.text) && AT(t.isComment);
}
function K0(t, e) {
  var n = [], r, o, i, s;
  for (r = 0; r < t.length; r++)
    o = t[r], !(H(o) || typeof o == "boolean") && (i = n.length - 1, s = n[i], G(o) ? o.length > 0 && (o = K0(o, "".concat(e || "", "_").concat(r)), Gr(o[0]) && Gr(s) && (n[i] = ir(s.text + o[0].text), o.shift()), n.push.apply(n, o)) : Eo(o) ? Gr(s) ? n[i] = ir(s.text + o) : o !== "" && n.push(ir(o)) : Gr(o) && Gr(s) ? n[i] = ir(s.text + o.text) : (ce(t._isVList) && $(o.tag) && H(o.key) && $(e) && (o.key = "__vlist".concat(e, "_").concat(r, "__")), n.push(o)));
  return n;
}
var QT = 1, Z0 = 2;
function Zi(t, e, n, r, o, i) {
  return (G(n) || Eo(n)) && (o = r, r = n, n = void 0), ce(i) && (o = Z0), eA(t, e, n, r, o);
}
function eA(t, e, n, r, o) {
  if ($(n) && $(n.__ob__) || ($(n) && $(n.is) && (e = n.is), !e))
    return In();
  G(r) && se(r[0]) && (n = n || {}, n.scopedSlots = { default: r[0] }, r.length = 0), o === Z0 ? r = Tf(r) : o === QT && (r = XT(r));
  var i, s;
  if (typeof e == "string") {
    var a = void 0;
    s = t.$vnode && t.$vnode.ns || Ue.getTagNamespace(e), Ue.isReservedTag(e) ? i = new We(Ue.parsePlatformTagName(e), n, r, void 0, void 0, t) : (!n || !n.pre) && $(a = es(t.$options, "components", e)) ? i = nm(a, n, t, r, e) : i = new We(e, n, r, void 0, void 0, t);
  } else
    i = nm(e, n, t, r);
  return G(i) ? i : $(i) ? ($(s) && J0(i, s), $(n) && tA(n), i) : In();
}
function J0(t, e, n) {
  if (t.ns = e, t.tag === "foreignObject" && (e = void 0, n = !0), $(t.children))
    for (var r = 0, o = t.children.length; r < o; r++) {
      var i = t.children[r];
      $(i.tag) && (H(i.ns) || ce(n) && i.tag !== "svg") && J0(i, e, n);
    }
}
function tA(t) {
  Ce(t.style) && Xi(t.style), Ce(t.class) && Xi(t.class);
}
function nA(t, e) {
  var n = null, r, o, i, s;
  if (G(t) || typeof t == "string")
    for (n = new Array(t.length), r = 0, o = t.length; r < o; r++)
      n[r] = e(t[r], r);
  else if (typeof t == "number")
    for (n = new Array(t), r = 0; r < t; r++)
      n[r] = e(r + 1, r);
  else if (Ce(t))
    if (Co && t[Symbol.iterator]) {
      n = [];
      for (var a = t[Symbol.iterator](), c = a.next(); !c.done; )
        n.push(e(c.value, n.length)), c = a.next();
    } else
      for (i = Object.keys(t), n = new Array(i.length), r = 0, o = i.length; r < o; r++)
        s = i[r], n[r] = e(t[s], s, r);
  return $(n) || (n = []), n._isVList = !0, n;
}
function rA(t, e, n, r) {
  var o = this.$scopedSlots[t], i;
  o ? (n = n || {}, r && (n = Z(Z({}, r), n)), i = o(n) || (se(e) ? e() : e)) : i = this.$slots[t] || (se(e) ? e() : e);
  var s = n && n.slot;
  return s ? this.$createElement("template", { slot: s }, i) : i;
}
function oA(t) {
  return es(this.$options, "filters", t) || R0;
}
function Ug(t, e) {
  return G(t) ? t.indexOf(e) === -1 : t !== e;
}
function iA(t, e, n, r, o) {
  var i = Ue.keyCodes[e] || n;
  return o && r && !Ue.keyCodes[e] ? Ug(o, r) : i ? Ug(i, t) : r ? Dn(r) !== e : t === void 0;
}
function sA(t, e, n, r, o) {
  if (n && Ce(n)) {
    G(n) && (n = F0(n));
    var i = void 0, s = function(c) {
      if (c === "class" || c === "style" || FT(c))
        i = t;
      else {
        var u = t.attrs && t.attrs.type;
        i = r || Ue.mustUseProp(e, u, c) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
      }
      var l = Ve(c), f = Dn(c);
      if (!(l in i) && !(f in i) && (i[c] = n[c], o)) {
        var d = t.on || (t.on = {});
        d["update:".concat(c)] = function(h) {
          n[c] = h;
        };
      }
    };
    for (var a in n)
      s(a);
  }
  return t;
}
function aA(t, e) {
  var n = this._staticTrees || (this._staticTrees = []), r = n[t];
  return r && !e || (r = n[t] = this.$options.staticRenderFns[t].call(
    this._renderProxy,
    this._c,
    this
    // for render fns generated for functional component templates
  ), Y0(r, "__static__".concat(t), !1)), r;
}
function cA(t, e, n) {
  return Y0(t, "__once__".concat(e).concat(n ? "_".concat(n) : ""), !0), t;
}
function Y0(t, e, n) {
  if (G(t))
    for (var r = 0; r < t.length; r++)
      t[r] && typeof t[r] != "string" && Gg(t[r], "".concat(e, "_").concat(r), n);
  else
    Gg(t, e, n);
}
function Gg(t, e, n) {
  t.isStatic = !0, t.key = e, t.isOnce = n;
}
function uA(t, e) {
  if (e && Ge(e)) {
    var n = t.on = t.on ? Z({}, t.on) : {};
    for (var r in e) {
      var o = n[r], i = e[r];
      n[r] = o ? [].concat(o, i) : i;
    }
  }
  return t;
}
function X0(t, e, n, r) {
  e = e || { $stable: !n };
  for (var o = 0; o < t.length; o++) {
    var i = t[o];
    G(i) ? X0(i, e, n) : i && (i.proxy && (i.fn.proxy = !0), e[i.key] = i.fn);
  }
  return r && (e.$key = r), e;
}
function lA(t, e) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n];
    typeof r == "string" && r && (t[e[n]] = e[n + 1]);
  }
  return t;
}
function fA(t, e) {
  return typeof t == "string" ? e + t : t;
}
function Q0(t) {
  t._o = cA, t._n = fo, t._s = DT, t._l = nA, t._t = rA, t._q = Pn, t._i = N0, t._m = aA, t._f = oA, t._k = iA, t._b = sA, t._v = ir, t._e = In, t._u = X0, t._g = uA, t._d = lA, t._p = fA;
}
function Af(t, e) {
  if (!t || !t.length)
    return {};
  for (var n = {}, r = 0, o = t.length; r < o; r++) {
    var i = t[r], s = i.data;
    if (s && s.attrs && s.attrs.slot && delete s.attrs.slot, (i.context === e || i.fnContext === e) && s && s.slot != null) {
      var a = s.slot, c = n[a] || (n[a] = []);
      i.tag === "template" ? c.push.apply(c, i.children || []) : c.push(i);
    } else
      (n.default || (n.default = [])).push(i);
  }
  for (var u in n)
    n[u].every(dA) && delete n[u];
  return n;
}
function dA(t) {
  return t.isComment && !t.asyncFactory || t.text === " ";
}
function po(t) {
  return t.isComment && t.asyncFactory;
}
function oo(t, e, n, r) {
  var o, i = Object.keys(n).length > 0, s = e ? !!e.$stable : !i, a = e && e.$key;
  if (!e)
    o = {};
  else {
    if (e._normalized)
      return e._normalized;
    if (s && r && r !== Ae && a === r.$key && !i && !r.$hasNormal)
      return r;
    o = {};
    for (var c in e)
      e[c] && c[0] !== "$" && (o[c] = hA(t, n, c, e[c]));
  }
  for (var u in n)
    u in o || (o[u] = pA(n, u));
  return e && Object.isExtensible(e) && (e._normalized = o), nn(o, "$stable", s), nn(o, "$key", a), nn(o, "$hasNormal", i), o;
}
function hA(t, e, n, r) {
  var o = function() {
    var i = ro;
    sn(t);
    var s = arguments.length ? r.apply(null, arguments) : r({});
    s = s && typeof s == "object" && !G(s) ? [s] : Tf(s);
    var a = s && s[0];
    return sn(i), s && (!a || s.length === 1 && a.isComment && !po(a)) ? void 0 : s;
  };
  return r.proxy && Object.defineProperty(e, n, {
    get: o,
    enumerable: !0,
    configurable: !0
  }), o;
}
function pA(t, e) {
  return function() {
    return t[e];
  };
}
function vA(t) {
  var e = t.$options, n = e.setup;
  if (n) {
    var r = t._setupContext = gA(t);
    sn(t), Ir();
    var o = un(n, null, [t._props || G0({}), r], t, "setup");
    if (Tr(), sn(), se(o))
      e.render = o;
    else if (Ce(o))
      if (t._setupState = o, o.__sfc) {
        var s = t._setupProxy = {};
        for (var i in o)
          i !== "__sfc" && nl(s, o, i);
      } else
        for (var i in o)
          q0(i) || nl(t, o, i);
  }
}
function gA(t) {
  return {
    get attrs() {
      if (!t._attrsProxy) {
        var e = t._attrsProxy = {};
        nn(e, "_v_attr_proxy", !0), Ji(e, t.$attrs, Ae, t, "$attrs");
      }
      return t._attrsProxy;
    },
    get listeners() {
      if (!t._listenersProxy) {
        var e = t._listenersProxy = {};
        Ji(e, t.$listeners, Ae, t, "$listeners");
      }
      return t._listenersProxy;
    },
    get slots() {
      return _A(t);
    },
    emit: P0(t.$emit, t),
    expose: function(e) {
      e && Object.keys(e).forEach(function(n) {
        return nl(t, e, n);
      });
    }
  };
}
function Ji(t, e, n, r, o) {
  var i = !1;
  for (var s in e)
    s in t ? e[s] !== n[s] && (i = !0) : (i = !0, mA(t, s, r, o));
  for (var s in t)
    s in e || (i = !0, delete t[s]);
  return i;
}
function mA(t, e, n, r) {
  Object.defineProperty(t, e, {
    enumerable: !0,
    configurable: !0,
    get: function() {
      return n[r][e];
    }
  });
}
function _A(t) {
  return t._slotsProxy || ey(t._slotsProxy = {}, t.$scopedSlots), t._slotsProxy;
}
function ey(t, e) {
  for (var n in e)
    t[n] = e[n];
  for (var n in t)
    n in e || delete t[n];
}
function bA(t) {
  t._vnode = null, t._staticTrees = null;
  var e = t.$options, n = t.$vnode = e._parentVnode, r = n && n.context;
  t.$slots = Af(e._renderChildren, r), t.$scopedSlots = n ? oo(t.$parent, n.data.scopedSlots, t.$slots) : Ae, t._c = function(i, s, a, c) {
    return Zi(t, i, s, a, c, !1);
  }, t.$createElement = function(i, s, a, c) {
    return Zi(t, i, s, a, c, !0);
  };
  var o = n && n.data;
  Fn(t, "$attrs", o && o.attrs || Ae, null, !0), Fn(t, "$listeners", e._parentListeners || Ae, null, !0);
}
var ol = null;
function yA(t) {
  Q0(t.prototype), t.prototype.$nextTick = function(e) {
    return Ff(e, this);
  }, t.prototype._render = function() {
    var e = this, n = e.$options, r = n.render, o = n._parentVnode;
    o && e._isMounted && (e.$scopedSlots = oo(e.$parent, o.data.scopedSlots, e.$slots, e.$scopedSlots), e._slotsProxy && ey(e._slotsProxy, e.$scopedSlots)), e.$vnode = o;
    var i;
    try {
      sn(e), ol = e, i = r.call(e._renderProxy, e.$createElement);
    } catch (s) {
      Rn(s, e, "render"), i = e._vnode;
    } finally {
      ol = null, sn();
    }
    return G(i) && i.length === 1 && (i = i[0]), i instanceof We || (i = In()), i.parent = o, i;
  };
}
function Bc(t, e) {
  return (t.__esModule || Co && t[Symbol.toStringTag] === "Module") && (t = t.default), Ce(t) ? e.extend(t) : t;
}
function wA(t, e, n, r, o) {
  var i = In();
  return i.asyncFactory = t, i.asyncMeta = { data: e, context: n, children: r, tag: o }, i;
}
function kA(t, e) {
  if (ce(t.error) && $(t.errorComp))
    return t.errorComp;
  if ($(t.resolved))
    return t.resolved;
  var n = ol;
  if (n && $(t.owners) && t.owners.indexOf(n) === -1 && t.owners.push(n), ce(t.loading) && $(t.loadingComp))
    return t.loadingComp;
  if (n && !$(t.owners)) {
    var r = t.owners = [n], o = !0, i = null, s = null;
    n.$on("hook:destroyed", function() {
      return pn(r, n);
    });
    var a = function(f) {
      for (var d = 0, h = r.length; d < h; d++)
        r[d].$forceUpdate();
      f && (r.length = 0, i !== null && (clearTimeout(i), i = null), s !== null && (clearTimeout(s), s = null));
    }, c = Gi(function(f) {
      t.resolved = Bc(f, e), o ? r.length = 0 : a(!0);
    }), u = Gi(function(f) {
      $(t.errorComp) && (t.error = !0, a(!0));
    }), l = t(c, u);
    return Ce(l) && (Xu(l) ? H(t.resolved) && l.then(c, u) : Xu(l.component) && (l.component.then(c, u), $(l.error) && (t.errorComp = Bc(l.error, e)), $(l.loading) && (t.loadingComp = Bc(l.loading, e), l.delay === 0 ? t.loading = !0 : i = setTimeout(function() {
      i = null, H(t.resolved) && H(t.error) && (t.loading = !0, a(!1));
    }, l.delay || 200)), $(l.timeout) && (s = setTimeout(function() {
      s = null, H(t.resolved) && u(null);
    }, l.timeout)))), o = !1, t.loading ? t.loadingComp : t.resolved;
  }
}
function ty(t) {
  if (G(t))
    for (var e = 0; e < t.length; e++) {
      var n = t[e];
      if ($(n) && ($(n.componentOptions) || po(n)))
        return n;
    }
}
function SA(t) {
  t._events = /* @__PURE__ */ Object.create(null), t._hasHookEvent = !1;
  var e = t.$options._parentListeners;
  e && ny(t, e);
}
var vo;
function xA(t, e) {
  vo.$on(t, e);
}
function $A(t, e) {
  vo.$off(t, e);
}
function EA(t, e) {
  var n = vo;
  return function r() {
    var o = e.apply(null, arguments);
    o !== null && n.$off(t, r);
  };
}
function ny(t, e, n) {
  vo = t, W0(e, n || {}, xA, $A, EA, t), vo = void 0;
}
function CA(t) {
  var e = /^hook:/;
  t.prototype.$on = function(n, r) {
    var o = this;
    if (G(n))
      for (var i = 0, s = n.length; i < s; i++)
        o.$on(n[i], r);
    else
      (o._events[n] || (o._events[n] = [])).push(r), e.test(n) && (o._hasHookEvent = !0);
    return o;
  }, t.prototype.$once = function(n, r) {
    var o = this;
    function i() {
      o.$off(n, i), r.apply(o, arguments);
    }
    return i.fn = r, o.$on(n, i), o;
  }, t.prototype.$off = function(n, r) {
    var o = this;
    if (!arguments.length)
      return o._events = /* @__PURE__ */ Object.create(null), o;
    if (G(n)) {
      for (var i = 0, s = n.length; i < s; i++)
        o.$off(n[i], r);
      return o;
    }
    var a = o._events[n];
    if (!a)
      return o;
    if (!r)
      return o._events[n] = null, o;
    for (var c, u = a.length; u--; )
      if (c = a[u], c === r || c.fn === r) {
        a.splice(u, 1);
        break;
      }
    return o;
  }, t.prototype.$emit = function(n) {
    var r = this, o = r._events[n];
    if (o) {
      o = o.length > 1 ? Qu(o) : o;
      for (var i = Qu(arguments, 1), s = 'event handler for "'.concat(n, '"'), a = 0, c = o.length; a < c; a++)
        un(o[a], r, i, r, s);
    }
    return r;
  };
}
var Tn = null;
function ry(t) {
  var e = Tn;
  return Tn = t, function() {
    Tn = e;
  };
}
function IA(t) {
  var e = t.$options, n = e.parent;
  if (n && !e.abstract) {
    for (; n.$options.abstract && n.$parent; )
      n = n.$parent;
    n.$children.push(t);
  }
  t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._provided = n ? n._provided : /* @__PURE__ */ Object.create(null), t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1;
}
function TA(t) {
  t.prototype._update = function(e, n) {
    var r = this, o = r.$el, i = r._vnode, s = ry(r);
    r._vnode = e, i ? r.$el = r.__patch__(i, e) : r.$el = r.__patch__(
      r.$el,
      e,
      n,
      !1
      /* removeOnly */
    ), s(), o && (o.__vue__ = null), r.$el && (r.$el.__vue__ = r);
    for (var a = r; a && a.$vnode && a.$parent && a.$vnode === a.$parent._vnode; )
      a.$parent.$el = a.$el, a = a.$parent;
  }, t.prototype.$forceUpdate = function() {
    var e = this;
    e._watcher && e._watcher.update();
  }, t.prototype.$destroy = function() {
    var e = this;
    if (!e._isBeingDestroyed) {
      ut(e, "beforeDestroy"), e._isBeingDestroyed = !0;
      var n = e.$parent;
      n && !n._isBeingDestroyed && !e.$options.abstract && pn(n.$children, e), e._scope.stop(), e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), ut(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
    }
  };
}
function AA(t, e, n) {
  t.$el = e, t.$options.render || (t.$options.render = In), ut(t, "beforeMount");
  var r;
  r = function() {
    t._update(t._render(), n);
  };
  var o = {
    before: function() {
      t._isMounted && !t._isDestroyed && ut(t, "beforeUpdate");
    }
  };
  new Rf(
    t,
    r,
    he,
    o,
    !0
    /* isRenderWatcher */
  ), n = !1;
  var i = t._preWatchers;
  if (i)
    for (var s = 0; s < i.length; s++)
      i[s].run();
  return t.$vnode == null && (t._isMounted = !0, ut(t, "mounted")), t;
}
function OA(t, e, n, r, o) {
  var i = r.data.scopedSlots, s = t.$scopedSlots, a = !!(i && !i.$stable || s !== Ae && !s.$stable || i && t.$scopedSlots.$key !== i.$key || !i && t.$scopedSlots.$key), c = !!(o || // has new static slots
  t.$options._renderChildren || // has old static slots
  a), u = t.$vnode;
  t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r), t.$options._renderChildren = o;
  var l = r.data.attrs || Ae;
  t._attrsProxy && Ji(t._attrsProxy, l, u.data && u.data.attrs || Ae, t, "$attrs") && (c = !0), t.$attrs = l, n = n || Ae;
  var f = t.$options._parentListeners;
  if (t._listenersProxy && Ji(t._listenersProxy, n, f || Ae, t, "$listeners"), t.$listeners = t.$options._parentListeners = n, ny(t, n, f), e && t.$options.props) {
    cn(!1);
    for (var d = t._props, h = t.$options._propKeys || [], b = 0; b < h.length; b++) {
      var m = h[b], g = t.$options.props;
      d[m] = jf(m, g, e, t);
    }
    cn(!0), t.$options.propsData = e;
  }
  c && (t.$slots = Af(o, r.context), t.$forceUpdate());
}
function oy(t) {
  for (; t && (t = t.$parent); )
    if (t._inactive)
      return !0;
  return !1;
}
function Of(t, e) {
  if (e) {
    if (t._directInactive = !1, oy(t))
      return;
  } else if (t._directInactive)
    return;
  if (t._inactive || t._inactive === null) {
    t._inactive = !1;
    for (var n = 0; n < t.$children.length; n++)
      Of(t.$children[n]);
    ut(t, "activated");
  }
}
function iy(t, e) {
  if (!(e && (t._directInactive = !0, oy(t))) && !t._inactive) {
    t._inactive = !0;
    for (var n = 0; n < t.$children.length; n++)
      iy(t.$children[n]);
    ut(t, "deactivated");
  }
}
function ut(t, e, n, r) {
  r === void 0 && (r = !0), Ir();
  var o = ro;
  r && sn(t);
  var i = t.$options[e], s = "".concat(e, " hook");
  if (i)
    for (var a = 0, c = i.length; a < c; a++)
      un(i[a], t, n || null, t, s);
  t._hasHookEvent && t.$emit("hook:" + e), r && sn(o), Tr();
}
var Mt = [], Df = [], Yi = {}, il = !1, Pf = !1, sr = 0;
function DA() {
  sr = Mt.length = Df.length = 0, Yi = {}, il = Pf = !1;
}
var sy = 0, sl = Date.now;
if (Pe && !on) {
  var zc = window.performance;
  zc && typeof zc.now == "function" && sl() > document.createEvent("Event").timeStamp && (sl = function() {
    return zc.now();
  });
}
var PA = function(t, e) {
  if (t.post) {
    if (!e.post)
      return 1;
  } else if (e.post)
    return -1;
  return t.id - e.id;
};
function FA() {
  sy = sl(), Pf = !0;
  var t, e;
  for (Mt.sort(PA), sr = 0; sr < Mt.length; sr++)
    t = Mt[sr], t.before && t.before(), e = t.id, Yi[e] = null, t.run();
  var n = Df.slice(), r = Mt.slice();
  DA(), MA(n), RA(r), WT(), Wi && Ue.devtools && Wi.emit("flush");
}
function RA(t) {
  for (var e = t.length; e--; ) {
    var n = t[e], r = n.vm;
    r && r._watcher === n && r._isMounted && !r._isDestroyed && ut(r, "updated");
  }
}
function NA(t) {
  t._inactive = !1, Df.push(t);
}
function MA(t) {
  for (var e = 0; e < t.length; e++)
    t[e]._inactive = !0, Of(
      t[e],
      !0
      /* true */
    );
}
function LA(t) {
  var e = t.id;
  if (Yi[e] == null && !(t === an.target && t.noRecurse)) {
    if (Yi[e] = !0, !Pf)
      Mt.push(t);
    else {
      for (var n = Mt.length - 1; n > sr && Mt[n].id > t.id; )
        n--;
      Mt.splice(n + 1, 0, t);
    }
    il || (il = !0, Ff(FA));
  }
}
var ze, qA = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = !1), this.detached = e, this.active = !0, this.effects = [], this.cleanups = [], this.parent = ze, !e && ze && (this.index = (ze.scopes || (ze.scopes = [])).push(this) - 1);
    }
    return t.prototype.run = function(e) {
      if (this.active) {
        var n = ze;
        try {
          return ze = this, e();
        } finally {
          ze = n;
        }
      }
    }, t.prototype.on = function() {
      ze = this;
    }, t.prototype.off = function() {
      ze = this.parent;
    }, t.prototype.stop = function(e) {
      if (this.active) {
        var n = void 0, r = void 0;
        for (n = 0, r = this.effects.length; n < r; n++)
          this.effects[n].teardown();
        for (n = 0, r = this.cleanups.length; n < r; n++)
          this.cleanups[n]();
        if (this.scopes)
          for (n = 0, r = this.scopes.length; n < r; n++)
            this.scopes[n].stop(!0);
        if (!this.detached && this.parent && !e) {
          var o = this.parent.scopes.pop();
          o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
        }
        this.parent = void 0, this.active = !1;
      }
    }, t;
  }()
);
function jA(t, e) {
  e === void 0 && (e = ze), e && e.active && e.effects.push(t);
}
function BA(t) {
  var e = t._provided, n = t.$parent && t.$parent._provided;
  return n === e ? t._provided = Object.create(n) : e;
}
function Rn(t, e, n) {
  Ir();
  try {
    if (e)
      for (var r = e; r = r.$parent; ) {
        var o = r.$options.errorCaptured;
        if (o)
          for (var i = 0; i < o.length; i++)
            try {
              var s = o[i].call(r, t, e, n) === !1;
              if (s)
                return;
            } catch (a) {
              Wg(a, r, "errorCaptured hook");
            }
      }
    Wg(t, e, n);
  } finally {
    Tr();
  }
}
function un(t, e, n, r, o) {
  var i;
  try {
    i = n ? t.apply(e, n) : t.call(e), i && !i._isVue && Xu(i) && !i._handled && (i.catch(function(s) {
      return Rn(s, r, o + " (Promise/async)");
    }), i._handled = !0);
  } catch (s) {
    Rn(s, r, o);
  }
  return i;
}
function Wg(t, e, n) {
  if (Ue.errorHandler)
    try {
      return Ue.errorHandler.call(null, t, e, n);
    } catch (r) {
      r !== t && Kg(r);
    }
  Kg(t);
}
function Kg(t, e, n) {
  if (Pe && typeof console < "u")
    console.error(t);
  else
    throw t;
}
var al = !1, cl = [], ul = !1;
function di() {
  ul = !1;
  var t = cl.slice(0);
  cl.length = 0;
  for (var e = 0; e < t.length; e++)
    t[e]();
}
var Xr;
if (typeof Promise < "u" && lr(Promise)) {
  var zA = Promise.resolve();
  Xr = function() {
    zA.then(di), UT && setTimeout(he);
  }, al = !0;
} else if (!on && typeof MutationObserver < "u" && (lr(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === "[object MutationObserverConstructor]")) {
  var hi = 1, HA = new MutationObserver(di), Zg = document.createTextNode(String(hi));
  HA.observe(Zg, {
    characterData: !0
  }), Xr = function() {
    hi = (hi + 1) % 2, Zg.data = String(hi);
  }, al = !0;
} else
  typeof setImmediate < "u" && lr(setImmediate) ? Xr = function() {
    setImmediate(di);
  } : Xr = function() {
    setTimeout(di, 0);
  };
function Ff(t, e) {
  var n;
  if (cl.push(function() {
    if (t)
      try {
        t.call(e);
      } catch (r) {
        Rn(r, e, "nextTick");
      }
    else
      n && n(e);
  }), ul || (ul = !0, Xr()), !t && typeof Promise < "u")
    return new Promise(function(r) {
      n = r;
    });
}
var VA = "2.7.14", Jg = new ho();
function Xi(t) {
  return Di(t, Jg), Jg.clear(), t;
}
function Di(t, e) {
  var n, r, o = G(t);
  if (!(!o && !Ce(t) || t.__v_skip || Object.isFrozen(t) || t instanceof We)) {
    if (t.__ob__) {
      var i = t.__ob__.dep.id;
      if (e.has(i))
        return;
      e.add(i);
    }
    if (o)
      for (n = t.length; n--; )
        Di(t[n], e);
    else if (wt(t))
      Di(t.value, e);
    else
      for (r = Object.keys(t), n = r.length; n--; )
        Di(t[r[n]], e);
  }
}
var UA = 0, Rf = (
  /** @class */
  function() {
    function t(e, n, r, o, i) {
      jA(
        this,
        // if the active effect scope is manually created (not a component scope),
        // prioritize it
        ze && !ze._vm ? ze : e ? e._scope : void 0
      ), (this.vm = e) && i && (e._watcher = this), o ? (this.deep = !!o.deep, this.user = !!o.user, this.lazy = !!o.lazy, this.sync = !!o.sync, this.before = o.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = r, this.id = ++UA, this.active = !0, this.post = !1, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new ho(), this.newDepIds = new ho(), this.expression = "", se(n) ? this.getter = n : (this.getter = HT(n), this.getter || (this.getter = he)), this.value = this.lazy ? void 0 : this.get();
    }
    return t.prototype.get = function() {
      Ir(this);
      var e, n = this.vm;
      try {
        e = this.getter.call(n, n);
      } catch (r) {
        if (this.user)
          Rn(r, n, 'getter for watcher "'.concat(this.expression, '"'));
        else
          throw r;
      } finally {
        this.deep && Xi(e), Tr(), this.cleanupDeps();
      }
      return e;
    }, t.prototype.addDep = function(e) {
      var n = e.id;
      this.newDepIds.has(n) || (this.newDepIds.add(n), this.newDeps.push(e), this.depIds.has(n) || e.addSub(this));
    }, t.prototype.cleanupDeps = function() {
      for (var e = this.deps.length; e--; ) {
        var n = this.deps[e];
        this.newDepIds.has(n.id) || n.removeSub(this);
      }
      var r = this.depIds;
      this.depIds = this.newDepIds, this.newDepIds = r, this.newDepIds.clear(), r = this.deps, this.deps = this.newDeps, this.newDeps = r, this.newDeps.length = 0;
    }, t.prototype.update = function() {
      this.lazy ? this.dirty = !0 : this.sync ? this.run() : LA(this);
    }, t.prototype.run = function() {
      if (this.active) {
        var e = this.get();
        if (e !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        Ce(e) || this.deep) {
          var n = this.value;
          if (this.value = e, this.user) {
            var r = 'callback for watcher "'.concat(this.expression, '"');
            un(this.cb, this.vm, [e, n], this.vm, r);
          } else
            this.cb.call(this.vm, e, n);
        }
      }
    }, t.prototype.evaluate = function() {
      this.value = this.get(), this.dirty = !1;
    }, t.prototype.depend = function() {
      for (var e = this.deps.length; e--; )
        this.deps[e].depend();
    }, t.prototype.teardown = function() {
      if (this.vm && !this.vm._isBeingDestroyed && pn(this.vm._scope.effects, this), this.active) {
        for (var e = this.deps.length; e--; )
          this.deps[e].removeSub(this);
        this.active = !1, this.onStop && this.onStop();
      }
    }, t;
  }()
), Yt = {
  enumerable: !0,
  configurable: !0,
  get: he,
  set: he
};
function Nf(t, e, n) {
  Yt.get = function() {
    return this[e][n];
  }, Yt.set = function(o) {
    this[e][n] = o;
  }, Object.defineProperty(t, n, Yt);
}
function GA(t) {
  var e = t.$options;
  if (e.props && WA(t, e.props), vA(t), e.methods && XA(t, e.methods), e.data)
    KA(t);
  else {
    var n = Bt(t._data = {});
    n && n.vmCount++;
  }
  e.computed && YA(t, e.computed), e.watch && e.watch !== el && QA(t, e.watch);
}
function WA(t, e) {
  var n = t.$options.propsData || {}, r = t._props = G0({}), o = t.$options._propKeys = [], i = !t.$parent;
  i || cn(!1);
  var s = function(c) {
    o.push(c);
    var u = jf(c, e, n, t);
    Fn(r, c, u), c in t || Nf(t, "_props", c);
  };
  for (var a in e)
    s(a);
  cn(!0);
}
function KA(t) {
  var e = t.$options.data;
  e = t._data = se(e) ? ZA(e, t) : e || {}, Ge(e) || (e = {});
  var n = Object.keys(e), r = t.$options.props;
  t.$options.methods;
  for (var o = n.length; o--; ) {
    var i = n[o];
    r && Oe(r, i) || q0(i) || Nf(t, "_data", i);
  }
  var s = Bt(e);
  s && s.vmCount++;
}
function ZA(t, e) {
  Ir();
  try {
    return t.call(e, e);
  } catch (n) {
    return Rn(n, e, "data()"), {};
  } finally {
    Tr();
  }
}
var JA = { lazy: !0 };
function YA(t, e) {
  var n = t._computedWatchers = /* @__PURE__ */ Object.create(null), r = Cr();
  for (var o in e) {
    var i = e[o], s = se(i) ? i : i.get;
    r || (n[o] = new Rf(t, s || he, he, JA)), o in t || ay(t, o, i);
  }
}
function ay(t, e, n) {
  var r = !Cr();
  se(n) ? (Yt.get = r ? Yg(e) : Xg(n), Yt.set = he) : (Yt.get = n.get ? r && n.cache !== !1 ? Yg(e) : Xg(n.get) : he, Yt.set = n.set || he), Object.defineProperty(t, e, Yt);
}
function Yg(t) {
  return function() {
    var n = this._computedWatchers && this._computedWatchers[t];
    if (n)
      return n.dirty && n.evaluate(), an.target && n.depend(), n.value;
  };
}
function Xg(t) {
  return function() {
    return t.call(this, this);
  };
}
function XA(t, e) {
  t.$options.props;
  for (var n in e)
    t[n] = typeof e[n] != "function" ? he : P0(e[n], t);
}
function QA(t, e) {
  for (var n in e) {
    var r = e[n];
    if (G(r))
      for (var o = 0; o < r.length; o++)
        ll(t, n, r[o]);
    else
      ll(t, n, r);
  }
}
function ll(t, e, n, r) {
  return Ge(n) && (r = n, n = n.handler), typeof n == "string" && (n = t[n]), t.$watch(e, n, r);
}
function eO(t) {
  var e = {};
  e.get = function() {
    return this._data;
  };
  var n = {};
  n.get = function() {
    return this._props;
  }, Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), t.prototype.$set = Cf, t.prototype.$delete = V0, t.prototype.$watch = function(r, o, i) {
    var s = this;
    if (Ge(o))
      return ll(s, r, o, i);
    i = i || {}, i.user = !0;
    var a = new Rf(s, r, o, i);
    if (i.immediate) {
      var c = 'callback for immediate watcher "'.concat(a.expression, '"');
      Ir(), un(o, s, [a.value], s, c), Tr();
    }
    return function() {
      a.teardown();
    };
  };
}
function tO(t) {
  var e = t.$options.provide;
  if (e) {
    var n = se(e) ? e.call(t) : e;
    if (!Ce(n))
      return;
    for (var r = BA(t), o = Co ? Reflect.ownKeys(n) : Object.keys(n), i = 0; i < o.length; i++) {
      var s = o[i];
      Object.defineProperty(r, s, Object.getOwnPropertyDescriptor(n, s));
    }
  }
}
function nO(t) {
  var e = cy(t.$options.inject, t);
  e && (cn(!1), Object.keys(e).forEach(function(n) {
    Fn(t, n, e[n]);
  }), cn(!0));
}
function cy(t, e) {
  if (t) {
    for (var n = /* @__PURE__ */ Object.create(null), r = Co ? Reflect.ownKeys(t) : Object.keys(t), o = 0; o < r.length; o++) {
      var i = r[o];
      if (i !== "__ob__") {
        var s = t[i].from;
        if (s in e._provided)
          n[i] = e._provided[s];
        else if ("default" in t[i]) {
          var a = t[i].default;
          n[i] = se(a) ? a.call(e) : a;
        }
      }
    }
    return n;
  }
}
var rO = 0;
function oO(t) {
  t.prototype._init = function(e) {
    var n = this;
    n._uid = rO++, n._isVue = !0, n.__v_skip = !0, n._scope = new qA(
      !0
      /* detached */
    ), n._scope._vm = !0, e && e._isComponent ? iO(n, e) : n.$options = Nn(Mf(n.constructor), e || {}, n), n._renderProxy = n, n._self = n, IA(n), SA(n), bA(n), ut(
      n,
      "beforeCreate",
      void 0,
      !1
      /* setContext */
    ), nO(n), GA(n), tO(n), ut(n, "created"), n.$options.el && n.$mount(n.$options.el);
  };
}
function iO(t, e) {
  var n = t.$options = Object.create(t.constructor.options), r = e._parentVnode;
  n.parent = e.parent, n._parentVnode = r;
  var o = r.componentOptions;
  n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, n._componentTag = o.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns);
}
function Mf(t) {
  var e = t.options;
  if (t.super) {
    var n = Mf(t.super), r = t.superOptions;
    if (n !== r) {
      t.superOptions = n;
      var o = sO(t);
      o && Z(t.extendOptions, o), e = t.options = Nn(n, t.extendOptions), e.name && (e.components[e.name] = t);
    }
  }
  return e;
}
function sO(t) {
  var e, n = t.options, r = t.sealedOptions;
  for (var o in n)
    n[o] !== r[o] && (e || (e = {}), e[o] = n[o]);
  return e;
}
function Lf(t, e, n, r, o) {
  var i = this, s = o.options, a;
  Oe(r, "_uid") ? (a = Object.create(r), a._original = r) : (a = r, r = r._original);
  var c = ce(s._compiled), u = !c;
  this.data = t, this.props = e, this.children = n, this.parent = r, this.listeners = t.on || Ae, this.injections = cy(s.inject, r), this.slots = function() {
    return i.$slots || oo(r, t.scopedSlots, i.$slots = Af(n, r)), i.$slots;
  }, Object.defineProperty(this, "scopedSlots", {
    enumerable: !0,
    get: function() {
      return oo(r, t.scopedSlots, this.slots());
    }
  }), c && (this.$options = s, this.$slots = this.slots(), this.$scopedSlots = oo(r, t.scopedSlots, this.$slots)), s._scopeId ? this._c = function(l, f, d, h) {
    var b = Zi(a, l, f, d, h, u);
    return b && !G(b) && (b.fnScopeId = s._scopeId, b.fnContext = r), b;
  } : this._c = function(l, f, d, h) {
    return Zi(a, l, f, d, h, u);
  };
}
Q0(Lf.prototype);
function aO(t, e, n, r, o) {
  var i = t.options, s = {}, a = i.props;
  if ($(a))
    for (var c in a)
      s[c] = jf(c, a, e || Ae);
  else
    $(n.attrs) && em(s, n.attrs), $(n.props) && em(s, n.props);
  var u = new Lf(n, s, o, r, t), l = i.render.call(null, u._c, u);
  if (l instanceof We)
    return Qg(l, n, u.parent, i);
  if (G(l)) {
    for (var f = Tf(l) || [], d = new Array(f.length), h = 0; h < f.length; h++)
      d[h] = Qg(f[h], n, u.parent, i);
    return d;
  }
}
function Qg(t, e, n, r, o) {
  var i = tl(t);
  return i.fnContext = n, i.fnOptions = r, e.slot && ((i.data || (i.data = {})).slot = e.slot), i;
}
function em(t, e) {
  for (var n in e)
    t[Ve(n)] = e[n];
}
function Qi(t) {
  return t.name || t.__name || t._componentTag;
}
var qf = {
  init: function(t, e) {
    if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
      var n = t;
      qf.prepatch(n, n);
    } else {
      var r = t.componentInstance = cO(t, Tn);
      r.$mount(e ? t.elm : void 0, e);
    }
  },
  prepatch: function(t, e) {
    var n = e.componentOptions, r = e.componentInstance = t.componentInstance;
    OA(
      r,
      n.propsData,
      // updated props
      n.listeners,
      // updated listeners
      e,
      // new parent vnode
      n.children
      // new children
    );
  },
  insert: function(t) {
    var e = t.context, n = t.componentInstance;
    n._isMounted || (n._isMounted = !0, ut(n, "mounted")), t.data.keepAlive && (e._isMounted ? NA(n) : Of(
      n,
      !0
      /* direct */
    ));
  },
  destroy: function(t) {
    var e = t.componentInstance;
    e._isDestroyed || (t.data.keepAlive ? iy(
      e,
      !0
      /* direct */
    ) : e.$destroy());
  }
}, tm = Object.keys(qf);
function nm(t, e, n, r, o) {
  if (!H(t)) {
    var i = n.$options._base;
    if (Ce(t) && (t = i.extend(t)), typeof t == "function") {
      var s;
      if (H(t.cid) && (s = t, t = kA(s, i), t === void 0))
        return wA(s, e, n, r, o);
      e = e || {}, Mf(t), $(e.model) && fO(t.options, e);
      var a = YT(e, t);
      if (ce(t.options.functional))
        return aO(t, a, e, n, r);
      var c = e.on;
      if (e.on = e.nativeOn, ce(t.options.abstract)) {
        var u = e.slot;
        e = {}, u && (e.slot = u);
      }
      uO(e);
      var l = Qi(t.options) || o, f = new We(
        // @ts-expect-error
        "vue-component-".concat(t.cid).concat(l ? "-".concat(l) : ""),
        e,
        void 0,
        void 0,
        void 0,
        n,
        // @ts-expect-error
        { Ctor: t, propsData: a, listeners: c, tag: o, children: r },
        s
      );
      return f;
    }
  }
}
function cO(t, e) {
  var n = {
    _isComponent: !0,
    _parentVnode: t,
    parent: e
  }, r = t.data.inlineTemplate;
  return $(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns), new t.componentOptions.Ctor(n);
}
function uO(t) {
  for (var e = t.hook || (t.hook = {}), n = 0; n < tm.length; n++) {
    var r = tm[n], o = e[r], i = qf[r];
    o !== i && !(o && o._merged) && (e[r] = o ? lO(i, o) : i);
  }
}
function lO(t, e) {
  var n = function(r, o) {
    t(r, o), e(r, o);
  };
  return n._merged = !0, n;
}
function fO(t, e) {
  var n = t.model && t.model.prop || "value", r = t.model && t.model.event || "input";
  (e.attrs || (e.attrs = {}))[n] = e.model.value;
  var o = e.on || (e.on = {}), i = o[r], s = e.model.callback;
  $(i) ? (G(i) ? i.indexOf(s) === -1 : i !== s) && (o[r] = [s].concat(i)) : o[r] = s;
}
var uy = he, _t = Ue.optionMergeStrategies;
function go(t, e, n) {
  if (n === void 0 && (n = !0), !e)
    return t;
  for (var r, o, i, s = Co ? Reflect.ownKeys(e) : Object.keys(e), a = 0; a < s.length; a++)
    r = s[a], r !== "__ob__" && (o = t[r], i = e[r], !n || !Oe(t, r) ? Cf(t, r, i) : o !== i && Ge(o) && Ge(i) && go(o, i));
  return t;
}
function rm(t, e, n) {
  return n ? function() {
    var o = se(e) ? e.call(n, n) : e, i = se(t) ? t.call(n, n) : t;
    return o ? go(o, i) : i;
  } : e ? t ? function() {
    return go(se(e) ? e.call(this, this) : e, se(t) ? t.call(this, this) : t);
  } : e : t;
}
_t.data = function(t, e, n) {
  return n ? rm(t, e, n) : e && typeof e != "function" ? t : rm(t, e);
};
function dO(t, e) {
  var n = e ? t ? t.concat(e) : G(e) ? e : [e] : t;
  return n && hO(n);
}
function hO(t) {
  for (var e = [], n = 0; n < t.length; n++)
    e.indexOf(t[n]) === -1 && e.push(t[n]);
  return e;
}
M0.forEach(function(t) {
  _t[t] = dO;
});
function pO(t, e, n, r) {
  var o = Object.create(t || null);
  return e ? Z(o, e) : o;
}
As.forEach(function(t) {
  _t[t + "s"] = pO;
});
_t.watch = function(t, e, n, r) {
  if (t === el && (t = void 0), e === el && (e = void 0), !e)
    return Object.create(t || null);
  if (!t)
    return e;
  var o = {};
  Z(o, t);
  for (var i in e) {
    var s = o[i], a = e[i];
    s && !G(s) && (s = [s]), o[i] = s ? s.concat(a) : G(a) ? a : [a];
  }
  return o;
};
_t.props = _t.methods = _t.inject = _t.computed = function(t, e, n, r) {
  if (!t)
    return e;
  var o = /* @__PURE__ */ Object.create(null);
  return Z(o, t), e && Z(o, e), o;
};
_t.provide = function(t, e) {
  return t ? function() {
    var n = /* @__PURE__ */ Object.create(null);
    return go(n, se(t) ? t.call(this) : t), e && go(
      n,
      se(e) ? e.call(this) : e,
      !1
      // non-recursive
    ), n;
  } : e;
};
var vO = function(t, e) {
  return e === void 0 ? t : e;
};
function gO(t, e) {
  var n = t.props;
  if (n) {
    var r = {}, o, i, s;
    if (G(n))
      for (o = n.length; o--; )
        i = n[o], typeof i == "string" && (s = Ve(i), r[s] = { type: null });
    else if (Ge(n))
      for (var a in n)
        i = n[a], s = Ve(a), r[s] = Ge(i) ? i : { type: i };
    t.props = r;
  }
}
function mO(t, e) {
  var n = t.inject;
  if (n) {
    var r = t.inject = {};
    if (G(n))
      for (var o = 0; o < n.length; o++)
        r[n[o]] = { from: n[o] };
    else if (Ge(n))
      for (var i in n) {
        var s = n[i];
        r[i] = Ge(s) ? Z({ from: i }, s) : { from: s };
      }
  }
}
function _O(t) {
  var e = t.directives;
  if (e)
    for (var n in e) {
      var r = e[n];
      se(r) && (e[n] = { bind: r, update: r });
    }
}
function Nn(t, e, n) {
  if (se(e) && (e = e.options), gO(e), mO(e), _O(e), !e._base && (e.extends && (t = Nn(t, e.extends, n)), e.mixins))
    for (var r = 0, o = e.mixins.length; r < o; r++)
      t = Nn(t, e.mixins[r], n);
  var i = {}, s;
  for (s in t)
    a(s);
  for (s in e)
    Oe(t, s) || a(s);
  function a(c) {
    var u = _t[c] || vO;
    i[c] = u(t[c], e[c], n, c);
  }
  return i;
}
function es(t, e, n, r) {
  if (typeof n == "string") {
    var o = t[e];
    if (Oe(o, n))
      return o[n];
    var i = Ve(n);
    if (Oe(o, i))
      return o[i];
    var s = D0(i);
    if (Oe(o, s))
      return o[s];
    var a = o[n] || o[i] || o[s];
    return a;
  }
}
function jf(t, e, n, r) {
  var o = e[t], i = !Oe(n, t), s = n[t], a = im(Boolean, o.type);
  if (a > -1) {
    if (i && !Oe(o, "default"))
      s = !1;
    else if (s === "" || s === Dn(t)) {
      var c = im(String, o.type);
      (c < 0 || a < c) && (s = !0);
    }
  }
  if (s === void 0) {
    s = bO(r, o, t);
    var u = Ef;
    cn(!0), Bt(s), cn(u);
  }
  return s;
}
function bO(t, e, n) {
  if (Oe(e, "default")) {
    var r = e.default;
    return t && t.$options.propsData && t.$options.propsData[n] === void 0 && t._props[n] !== void 0 ? t._props[n] : se(r) && fl(e.type) !== "Function" ? r.call(t) : r;
  }
}
var yO = /^\s*function (\w+)/;
function fl(t) {
  var e = t && t.toString().match(yO);
  return e ? e[1] : "";
}
function om(t, e) {
  return fl(t) === fl(e);
}
function im(t, e) {
  if (!G(e))
    return om(e, t) ? 0 : -1;
  for (var n = 0, r = e.length; n < r; n++)
    if (om(e[n], t))
      return n;
  return -1;
}
function re(t) {
  this._init(t);
}
oO(re);
eO(re);
CA(re);
TA(re);
yA(re);
function wO(t) {
  t.use = function(e) {
    var n = this._installedPlugins || (this._installedPlugins = []);
    if (n.indexOf(e) > -1)
      return this;
    var r = Qu(arguments, 1);
    return r.unshift(this), se(e.install) ? e.install.apply(e, r) : se(e) && e.apply(null, r), n.push(e), this;
  };
}
function kO(t) {
  t.mixin = function(e) {
    return this.options = Nn(this.options, e), this;
  };
}
function SO(t) {
  t.cid = 0;
  var e = 1;
  t.extend = function(n) {
    n = n || {};
    var r = this, o = r.cid, i = n._Ctor || (n._Ctor = {});
    if (i[o])
      return i[o];
    var s = Qi(n) || Qi(r.options), a = function(u) {
      this._init(u);
    };
    return a.prototype = Object.create(r.prototype), a.prototype.constructor = a, a.cid = e++, a.options = Nn(r.options, n), a.super = r, a.options.props && xO(a), a.options.computed && $O(a), a.extend = r.extend, a.mixin = r.mixin, a.use = r.use, As.forEach(function(c) {
      a[c] = r[c];
    }), s && (a.options.components[s] = a), a.superOptions = r.options, a.extendOptions = n, a.sealedOptions = Z({}, a.options), i[o] = a, a;
  };
}
function xO(t) {
  var e = t.options.props;
  for (var n in e)
    Nf(t.prototype, "_props", n);
}
function $O(t) {
  var e = t.options.computed;
  for (var n in e)
    ay(t.prototype, n, e[n]);
}
function EO(t) {
  As.forEach(function(e) {
    t[e] = function(n, r) {
      return r ? (e === "component" && Ge(r) && (r.name = r.name || n, r = this.options._base.extend(r)), e === "directive" && se(r) && (r = { bind: r, update: r }), this.options[e + "s"][n] = r, r) : this.options[e + "s"][n];
    };
  });
}
function sm(t) {
  return t && (Qi(t.Ctor.options) || t.tag);
}
function pi(t, e) {
  return G(t) ? t.indexOf(e) > -1 : typeof t == "string" ? t.split(",").indexOf(e) > -1 : OT(t) ? t.test(e) : !1;
}
function am(t, e) {
  var n = t.cache, r = t.keys, o = t._vnode;
  for (var i in n) {
    var s = n[i];
    if (s) {
      var a = s.name;
      a && !e(a) && dl(n, i, r, o);
    }
  }
}
function dl(t, e, n, r) {
  var o = t[e];
  o && (!r || o.tag !== r.tag) && o.componentInstance.$destroy(), t[e] = null, pn(n, e);
}
var cm = [String, RegExp, Array], CO = {
  name: "keep-alive",
  abstract: !0,
  props: {
    include: cm,
    exclude: cm,
    max: [String, Number]
  },
  methods: {
    cacheVNode: function() {
      var t = this, e = t.cache, n = t.keys, r = t.vnodeToCache, o = t.keyToCache;
      if (r) {
        var i = r.tag, s = r.componentInstance, a = r.componentOptions;
        e[o] = {
          name: sm(a),
          tag: i,
          componentInstance: s
        }, n.push(o), this.max && n.length > parseInt(this.max) && dl(e, n[0], n, this._vnode), this.vnodeToCache = null;
      }
    }
  },
  created: function() {
    this.cache = /* @__PURE__ */ Object.create(null), this.keys = [];
  },
  destroyed: function() {
    for (var t in this.cache)
      dl(this.cache, t, this.keys);
  },
  mounted: function() {
    var t = this;
    this.cacheVNode(), this.$watch("include", function(e) {
      am(t, function(n) {
        return pi(e, n);
      });
    }), this.$watch("exclude", function(e) {
      am(t, function(n) {
        return !pi(e, n);
      });
    });
  },
  updated: function() {
    this.cacheVNode();
  },
  render: function() {
    var t = this.$slots.default, e = ty(t), n = e && e.componentOptions;
    if (n) {
      var r = sm(n), o = this, i = o.include, s = o.exclude;
      if (
        // not included
        i && (!r || !pi(i, r)) || // excluded
        s && r && pi(s, r)
      )
        return e;
      var a = this, c = a.cache, u = a.keys, l = e.key == null ? (
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        n.Ctor.cid + (n.tag ? "::".concat(n.tag) : "")
      ) : e.key;
      c[l] ? (e.componentInstance = c[l].componentInstance, pn(u, l), u.push(l)) : (this.vnodeToCache = e, this.keyToCache = l), e.data.keepAlive = !0;
    }
    return e || t && t[0];
  }
}, IO = {
  KeepAlive: CO
};
function TO(t) {
  var e = {};
  e.get = function() {
    return Ue;
  }, Object.defineProperty(t, "config", e), t.util = {
    warn: uy,
    extend: Z,
    mergeOptions: Nn,
    defineReactive: Fn
  }, t.set = Cf, t.delete = V0, t.nextTick = Ff, t.observable = function(n) {
    return Bt(n), n;
  }, t.options = /* @__PURE__ */ Object.create(null), As.forEach(function(n) {
    t.options[n + "s"] = /* @__PURE__ */ Object.create(null);
  }), t.options._base = t, Z(t.options.components, IO), wO(t), kO(t), SO(t), EO(t);
}
TO(re);
Object.defineProperty(re.prototype, "$isServer", {
  get: Cr
});
Object.defineProperty(re.prototype, "$ssrContext", {
  get: function() {
    return this.$vnode && this.$vnode.ssrContext;
  }
});
Object.defineProperty(re, "FunctionalRenderContext", {
  value: Lf
});
re.version = VA;
var AO = ke("style,class"), OO = ke("input,textarea,option,select,progress"), ly = function(t, e, n) {
  return n === "value" && OO(t) && e !== "button" || n === "selected" && t === "option" || n === "checked" && t === "input" || n === "muted" && t === "video";
}, fy = ke("contenteditable,draggable,spellcheck"), DO = ke("events,caret,typing,plaintext-only"), PO = function(t, e) {
  return ts(e) || e === "false" ? "false" : (
    // allow arbitrary string value for contenteditable
    t === "contenteditable" && DO(e) ? e : "true"
  );
}, FO = ke("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"), hl = "http://www.w3.org/1999/xlink", Bf = function(t) {
  return t.charAt(5) === ":" && t.slice(0, 5) === "xlink";
}, dy = function(t) {
  return Bf(t) ? t.slice(6, t.length) : "";
}, ts = function(t) {
  return t == null || t === !1;
};
function RO(t) {
  for (var e = t.data, n = t, r = t; $(r.componentInstance); )
    r = r.componentInstance._vnode, r && r.data && (e = um(r.data, e));
  for (; $(n = n.parent); )
    n && n.data && (e = um(e, n.data));
  return NO(e.staticClass, e.class);
}
function um(t, e) {
  return {
    staticClass: zf(t.staticClass, e.staticClass),
    class: $(t.class) ? [t.class, e.class] : e.class
  };
}
function NO(t, e) {
  return $(t) || $(e) ? zf(t, Hf(e)) : "";
}
function zf(t, e) {
  return t ? e ? t + " " + e : t : e || "";
}
function Hf(t) {
  return Array.isArray(t) ? MO(t) : Ce(t) ? LO(t) : typeof t == "string" ? t : "";
}
function MO(t) {
  for (var e = "", n, r = 0, o = t.length; r < o; r++)
    $(n = Hf(t[r])) && n !== "" && (e && (e += " "), e += n);
  return e;
}
function LO(t) {
  var e = "";
  for (var n in t)
    t[n] && (e && (e += " "), e += n);
  return e;
}
var qO = {
  svg: "http://www.w3.org/2000/svg",
  math: "http://www.w3.org/1998/Math/MathML"
}, jO = ke("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"), Vf = ke("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0), BO = function(t) {
  return t === "pre";
}, Uf = function(t) {
  return jO(t) || Vf(t);
};
function hy(t) {
  if (Vf(t))
    return "svg";
  if (t === "math")
    return "math";
}
var vi = /* @__PURE__ */ Object.create(null);
function zO(t) {
  if (!Pe)
    return !0;
  if (Uf(t))
    return !1;
  if (t = t.toLowerCase(), vi[t] != null)
    return vi[t];
  var e = document.createElement(t);
  return t.indexOf("-") > -1 ? vi[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : vi[t] = /HTMLUnknownElement/.test(e.toString());
}
var pl = ke("text,number,password,search,email,tel,url");
function Gf(t) {
  if (typeof t == "string") {
    var e = document.querySelector(t);
    return e || document.createElement("div");
  } else
    return t;
}
function HO(t, e) {
  var n = document.createElement(t);
  return t !== "select" || e.data && e.data.attrs && e.data.attrs.multiple !== void 0 && n.setAttribute("multiple", "multiple"), n;
}
function VO(t, e) {
  return document.createElementNS(qO[t], e);
}
function UO(t) {
  return document.createTextNode(t);
}
function GO(t) {
  return document.createComment(t);
}
function WO(t, e, n) {
  t.insertBefore(e, n);
}
function KO(t, e) {
  t.removeChild(e);
}
function ZO(t, e) {
  t.appendChild(e);
}
function JO(t) {
  return t.parentNode;
}
function YO(t) {
  return t.nextSibling;
}
function XO(t) {
  return t.tagName;
}
function QO(t, e) {
  t.textContent = e;
}
function eD(t, e) {
  t.setAttribute(e, "");
}
var tD = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  createElement: HO,
  createElementNS: VO,
  createTextNode: UO,
  createComment: GO,
  insertBefore: WO,
  removeChild: KO,
  appendChild: ZO,
  parentNode: JO,
  nextSibling: YO,
  tagName: XO,
  setTextContent: QO,
  setStyleScope: eD
}), nD = {
  create: function(t, e) {
    ar(e);
  },
  update: function(t, e) {
    t.data.ref !== e.data.ref && (ar(t, !0), ar(e));
  },
  destroy: function(t) {
    ar(t, !0);
  }
};
function ar(t, e) {
  var n = t.data.ref;
  if ($(n)) {
    var r = t.context, o = t.componentInstance || t.elm, i = e ? null : o, s = e ? void 0 : o;
    if (se(n)) {
      un(n, r, [i], r, "template ref function");
      return;
    }
    var a = t.data.refInFor, c = typeof n == "string" || typeof n == "number", u = wt(n), l = r.$refs;
    if (c || u) {
      if (a) {
        var f = c ? l[n] : n.value;
        e ? G(f) && pn(f, o) : G(f) ? f.includes(o) || f.push(o) : c ? (l[n] = [o], lm(r, n, l[n])) : n.value = [o];
      } else if (c) {
        if (e && l[n] !== o)
          return;
        l[n] = s, lm(r, n, i);
      } else if (u) {
        if (e && n.value !== o)
          return;
        n.value = i;
      }
    }
  }
}
function lm(t, e, n) {
  var r = t._setupState;
  r && Oe(r, e) && (wt(r[e]) ? r[e].value = n : r[e] = n);
}
var Qt = new We("", {}, []), Wr = ["create", "activate", "update", "remove", "destroy"];
function bn(t, e) {
  return t.key === e.key && t.asyncFactory === e.asyncFactory && (t.tag === e.tag && t.isComment === e.isComment && $(t.data) === $(e.data) && rD(t, e) || ce(t.isAsyncPlaceholder) && H(e.asyncFactory.error));
}
function rD(t, e) {
  if (t.tag !== "input")
    return !0;
  var n, r = $(n = t.data) && $(n = n.attrs) && n.type, o = $(n = e.data) && $(n = n.attrs) && n.type;
  return r === o || pl(r) && pl(o);
}
function oD(t, e, n) {
  var r, o, i = {};
  for (r = e; r <= n; ++r)
    o = t[r].key, $(o) && (i[o] = r);
  return i;
}
function iD(t) {
  var e, n, r = {}, o = t.modules, i = t.nodeOps;
  for (e = 0; e < Wr.length; ++e)
    for (r[Wr[e]] = [], n = 0; n < o.length; ++n)
      $(o[n][Wr[e]]) && r[Wr[e]].push(o[n][Wr[e]]);
  function s(w) {
    return new We(i.tagName(w).toLowerCase(), {}, [], void 0, w);
  }
  function a(w, _) {
    function p() {
      --p.listeners === 0 && c(w);
    }
    return p.listeners = _, p;
  }
  function c(w) {
    var _ = i.parentNode(w);
    $(_) && i.removeChild(_, w);
  }
  function u(w, _, p, O, P, E, S) {
    if ($(w.elm) && $(E) && (w = E[S] = tl(w)), w.isRootInsert = !P, !l(w, _, p, O)) {
      var I = w.data, F = w.children, R = w.tag;
      $(R) ? (w.elm = w.ns ? i.createElementNS(w.ns, R) : i.createElement(R, w), v(w), b(w, F, _), $(I) && g(w, _), h(p, w.elm, O)) : ce(w.isComment) ? (w.elm = i.createComment(w.text), h(p, w.elm, O)) : (w.elm = i.createTextNode(w.text), h(p, w.elm, O));
    }
  }
  function l(w, _, p, O) {
    var P = w.data;
    if ($(P)) {
      var E = $(w.componentInstance) && P.keepAlive;
      if ($(P = P.hook) && $(P = P.init) && P(
        w,
        !1
        /* hydrating */
      ), $(w.componentInstance))
        return f(w, _), h(p, w.elm, O), ce(E) && d(w, _, p, O), !0;
    }
  }
  function f(w, _) {
    $(w.data.pendingInsert) && (_.push.apply(_, w.data.pendingInsert), w.data.pendingInsert = null), w.elm = w.componentInstance.$el, m(w) ? (g(w, _), v(w)) : (ar(w), _.push(w));
  }
  function d(w, _, p, O) {
    for (var P, E = w; E.componentInstance; )
      if (E = E.componentInstance._vnode, $(P = E.data) && $(P = P.transition)) {
        for (P = 0; P < r.activate.length; ++P)
          r.activate[P](Qt, E);
        _.push(E);
        break;
      }
    h(p, w.elm, O);
  }
  function h(w, _, p) {
    $(w) && ($(p) ? i.parentNode(p) === w && i.insertBefore(w, _, p) : i.appendChild(w, _));
  }
  function b(w, _, p) {
    if (G(_))
      for (var O = 0; O < _.length; ++O)
        u(_[O], p, w.elm, null, !0, _, O);
    else
      Eo(w.text) && i.appendChild(w.elm, i.createTextNode(String(w.text)));
  }
  function m(w) {
    for (; w.componentInstance; )
      w = w.componentInstance._vnode;
    return $(w.tag);
  }
  function g(w, _) {
    for (var p = 0; p < r.create.length; ++p)
      r.create[p](Qt, w);
    e = w.data.hook, $(e) && ($(e.create) && e.create(Qt, w), $(e.insert) && _.push(w));
  }
  function v(w) {
    var _;
    if ($(_ = w.fnScopeId))
      i.setStyleScope(w.elm, _);
    else
      for (var p = w; p; )
        $(_ = p.context) && $(_ = _.$options._scopeId) && i.setStyleScope(w.elm, _), p = p.parent;
    $(_ = Tn) && _ !== w.context && _ !== w.fnContext && $(_ = _.$options._scopeId) && i.setStyleScope(w.elm, _);
  }
  function k(w, _, p, O, P, E) {
    for (; O <= P; ++O)
      u(p[O], E, w, _, !1, p, O);
  }
  function y(w) {
    var _, p, O = w.data;
    if ($(O))
      for ($(_ = O.hook) && $(_ = _.destroy) && _(w), _ = 0; _ < r.destroy.length; ++_)
        r.destroy[_](w);
    if ($(_ = w.children))
      for (p = 0; p < w.children.length; ++p)
        y(w.children[p]);
  }
  function x(w, _, p) {
    for (; _ <= p; ++_) {
      var O = w[_];
      $(O) && ($(O.tag) ? (N(O), y(O)) : c(O.elm));
    }
  }
  function N(w, _) {
    if ($(_) || $(w.data)) {
      var p, O = r.remove.length + 1;
      for ($(_) ? _.listeners += O : _ = a(w.elm, O), $(p = w.componentInstance) && $(p = p._vnode) && $(p.data) && N(p, _), p = 0; p < r.remove.length; ++p)
        r.remove[p](w, _);
      $(p = w.data.hook) && $(p = p.remove) ? p(w, _) : _();
    } else
      c(w.elm);
  }
  function T(w, _, p, O, P) {
    for (var E = 0, S = 0, I = _.length - 1, F = _[0], R = _[I], B = p.length - 1, V = p[0], ee = p[B], ue, ie, Se, Je, Wt = !P; E <= I && S <= B; )
      H(F) ? F = _[++E] : H(R) ? R = _[--I] : bn(F, V) ? (A(F, V, O, p, S), F = _[++E], V = p[++S]) : bn(R, ee) ? (A(R, ee, O, p, B), R = _[--I], ee = p[--B]) : bn(F, ee) ? (A(F, ee, O, p, B), Wt && i.insertBefore(w, F.elm, i.nextSibling(R.elm)), F = _[++E], ee = p[--B]) : bn(R, V) ? (A(R, V, O, p, S), Wt && i.insertBefore(w, R.elm, F.elm), R = _[--I], V = p[++S]) : (H(ue) && (ue = oD(_, E, I)), ie = $(V.key) ? ue[V.key] : C(V, _, E, I), H(ie) ? u(V, O, w, F.elm, !1, p, S) : (Se = _[ie], bn(Se, V) ? (A(Se, V, O, p, S), _[ie] = void 0, Wt && i.insertBefore(w, Se.elm, F.elm)) : u(V, O, w, F.elm, !1, p, S)), V = p[++S]);
    E > I ? (Je = H(p[B + 1]) ? null : p[B + 1].elm, k(w, Je, p, S, B, O)) : S > B && x(_, E, I);
  }
  function C(w, _, p, O) {
    for (var P = p; P < O; P++) {
      var E = _[P];
      if ($(E) && bn(w, E))
        return P;
    }
  }
  function A(w, _, p, O, P, E) {
    if (w !== _) {
      $(_.elm) && $(O) && (_ = O[P] = tl(_));
      var S = _.elm = w.elm;
      if (ce(w.isAsyncPlaceholder)) {
        $(_.asyncFactory.resolved) ? L(w.elm, _, p) : _.isAsyncPlaceholder = !0;
        return;
      }
      if (ce(_.isStatic) && ce(w.isStatic) && _.key === w.key && (ce(_.isCloned) || ce(_.isOnce))) {
        _.componentInstance = w.componentInstance;
        return;
      }
      var I, F = _.data;
      $(F) && $(I = F.hook) && $(I = I.prepatch) && I(w, _);
      var R = w.children, B = _.children;
      if ($(F) && m(_)) {
        for (I = 0; I < r.update.length; ++I)
          r.update[I](w, _);
        $(I = F.hook) && $(I = I.update) && I(w, _);
      }
      H(_.text) ? $(R) && $(B) ? R !== B && T(S, R, B, p, E) : $(B) ? ($(w.text) && i.setTextContent(S, ""), k(S, null, B, 0, B.length - 1, p)) : $(R) ? x(R, 0, R.length - 1) : $(w.text) && i.setTextContent(S, "") : w.text !== _.text && i.setTextContent(S, _.text), $(F) && $(I = F.hook) && $(I = I.postpatch) && I(w, _);
    }
  }
  function z(w, _, p) {
    if (ce(p) && $(w.parent))
      w.parent.data.pendingInsert = _;
    else
      for (var O = 0; O < _.length; ++O)
        _[O].data.hook.insert(_[O]);
  }
  var M = ke("attrs,class,staticClass,staticStyle,key");
  function L(w, _, p, O) {
    var P, E = _.tag, S = _.data, I = _.children;
    if (O = O || S && S.pre, _.elm = w, ce(_.isComment) && $(_.asyncFactory))
      return _.isAsyncPlaceholder = !0, !0;
    if ($(S) && ($(P = S.hook) && $(P = P.init) && P(
      _,
      !0
      /* hydrating */
    ), $(P = _.componentInstance)))
      return f(_, p), !0;
    if ($(E)) {
      if ($(I))
        if (!w.hasChildNodes())
          b(_, I, p);
        else if ($(P = S) && $(P = P.domProps) && $(P = P.innerHTML)) {
          if (P !== w.innerHTML)
            return !1;
        } else {
          for (var F = !0, R = w.firstChild, B = 0; B < I.length; B++) {
            if (!R || !L(R, I[B], p, O)) {
              F = !1;
              break;
            }
            R = R.nextSibling;
          }
          if (!F || R)
            return !1;
        }
      if ($(S)) {
        var V = !1;
        for (var ee in S)
          if (!M(ee)) {
            V = !0, g(_, p);
            break;
          }
        !V && S.class && Xi(S.class);
      }
    } else
      w.data !== _.text && (w.data = _.text);
    return !0;
  }
  return function(_, p, O, P) {
    if (H(p)) {
      $(_) && y(_);
      return;
    }
    var E = !1, S = [];
    if (H(_))
      E = !0, u(p, S);
    else {
      var I = $(_.nodeType);
      if (!I && bn(_, p))
        A(_, p, S, null, null, P);
      else {
        if (I) {
          if (_.nodeType === 1 && _.hasAttribute(Lg) && (_.removeAttribute(Lg), O = !0), ce(O) && L(_, p, S))
            return z(p, S, !0), _;
          _ = s(_);
        }
        var F = _.elm, R = i.parentNode(F);
        if (u(
          p,
          S,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          F._leaveCb ? null : R,
          i.nextSibling(F)
        ), $(p.parent))
          for (var B = p.parent, V = m(p); B; ) {
            for (var ee = 0; ee < r.destroy.length; ++ee)
              r.destroy[ee](B);
            if (B.elm = p.elm, V) {
              for (var ue = 0; ue < r.create.length; ++ue)
                r.create[ue](Qt, B);
              var ie = B.data.hook.insert;
              if (ie.merged)
                for (var Se = 1; Se < ie.fns.length; Se++)
                  ie.fns[Se]();
            } else
              ar(B);
            B = B.parent;
          }
        $(R) ? x([_], 0, 0) : $(_.tag) && y(_);
      }
    }
    return z(p, S, E), p.elm;
  };
}
var sD = {
  create: Hc,
  update: Hc,
  destroy: function(e) {
    Hc(e, Qt);
  }
};
function Hc(t, e) {
  (t.data.directives || e.data.directives) && aD(t, e);
}
function aD(t, e) {
  var n = t === Qt, r = e === Qt, o = fm(t.data.directives, t.context), i = fm(e.data.directives, e.context), s = [], a = [], c, u, l;
  for (c in i)
    u = o[c], l = i[c], u ? (l.oldValue = u.value, l.oldArg = u.arg, Kr(l, "update", e, t), l.def && l.def.componentUpdated && a.push(l)) : (Kr(l, "bind", e, t), l.def && l.def.inserted && s.push(l));
  if (s.length) {
    var f = function() {
      for (var d = 0; d < s.length; d++)
        Kr(s[d], "inserted", e, t);
    };
    n ? Xt(e, "insert", f) : f();
  }
  if (a.length && Xt(e, "postpatch", function() {
    for (var d = 0; d < a.length; d++)
      Kr(a[d], "componentUpdated", e, t);
  }), !n)
    for (c in o)
      i[c] || Kr(o[c], "unbind", t, t, r);
}
var cD = /* @__PURE__ */ Object.create(null);
function fm(t, e) {
  var n = /* @__PURE__ */ Object.create(null);
  if (!t)
    return n;
  var r, o;
  for (r = 0; r < t.length; r++) {
    if (o = t[r], o.modifiers || (o.modifiers = cD), n[uD(o)] = o, e._setupState && e._setupState.__sfc) {
      var i = o.def || es(e, "_setupState", "v-" + o.name);
      typeof i == "function" ? o.def = {
        bind: i,
        update: i
      } : o.def = i;
    }
    o.def = o.def || es(e.$options, "directives", o.name);
  }
  return n;
}
function uD(t) {
  return t.rawName || "".concat(t.name, ".").concat(Object.keys(t.modifiers || {}).join("."));
}
function Kr(t, e, n, r, o) {
  var i = t.def && t.def[e];
  if (i)
    try {
      i(n.elm, t, n, r, o);
    } catch (s) {
      Rn(s, n.context, "directive ".concat(t.name, " ").concat(e, " hook"));
    }
}
var lD = [nD, sD];
function dm(t, e) {
  var n = e.componentOptions;
  if (!($(n) && n.Ctor.options.inheritAttrs === !1) && !(H(t.data.attrs) && H(e.data.attrs))) {
    var r, o, i, s = e.elm, a = t.data.attrs || {}, c = e.data.attrs || {};
    ($(c.__ob__) || ce(c._v_attr_proxy)) && (c = e.data.attrs = Z({}, c));
    for (r in c)
      o = c[r], i = a[r], i !== o && hm(s, r, o, e.data.pre);
    (on || j0) && c.value !== a.value && hm(s, "value", c.value);
    for (r in a)
      H(c[r]) && (Bf(r) ? s.removeAttributeNS(hl, dy(r)) : fy(r) || s.removeAttribute(r));
  }
}
function hm(t, e, n, r) {
  r || t.tagName.indexOf("-") > -1 ? pm(t, e, n) : FO(e) ? ts(n) ? t.removeAttribute(e) : (n = e === "allowfullscreen" && t.tagName === "EMBED" ? "true" : e, t.setAttribute(e, n)) : fy(e) ? t.setAttribute(e, PO(e, n)) : Bf(e) ? ts(n) ? t.removeAttributeNS(hl, dy(e)) : t.setAttributeNS(hl, e, n) : pm(t, e, n);
}
function pm(t, e, n) {
  if (ts(n))
    t.removeAttribute(e);
  else {
    if (on && !Er && t.tagName === "TEXTAREA" && e === "placeholder" && n !== "" && !t.__ieph) {
      var r = function(o) {
        o.stopImmediatePropagation(), t.removeEventListener("input", r);
      };
      t.addEventListener("input", r), t.__ieph = !0;
    }
    t.setAttribute(e, n);
  }
}
var fD = {
  create: dm,
  update: dm
};
function vm(t, e) {
  var n = e.elm, r = e.data, o = t.data;
  if (!(H(r.staticClass) && H(r.class) && (H(o) || H(o.staticClass) && H(o.class)))) {
    var i = RO(e), s = n._transitionClasses;
    $(s) && (i = zf(i, Hf(s))), i !== n._prevClass && (n.setAttribute("class", i), n._prevClass = i);
  }
}
var dD = {
  create: vm,
  update: vm
}, hD = /[\w).+\-_$\]]/;
function Wf(t) {
  var e = !1, n = !1, r = !1, o = !1, i = 0, s = 0, a = 0, c = 0, u, l, f, d, h;
  for (f = 0; f < t.length; f++)
    if (l = u, u = t.charCodeAt(f), e)
      u === 39 && l !== 92 && (e = !1);
    else if (n)
      u === 34 && l !== 92 && (n = !1);
    else if (r)
      u === 96 && l !== 92 && (r = !1);
    else if (o)
      u === 47 && l !== 92 && (o = !1);
    else if (u === 124 && // pipe
    t.charCodeAt(f + 1) !== 124 && t.charCodeAt(f - 1) !== 124 && !i && !s && !a)
      d === void 0 ? (c = f + 1, d = t.slice(0, f).trim()) : g();
    else {
      switch (u) {
        case 34:
          n = !0;
          break;
        case 39:
          e = !0;
          break;
        case 96:
          r = !0;
          break;
        case 40:
          a++;
          break;
        case 41:
          a--;
          break;
        case 91:
          s++;
          break;
        case 93:
          s--;
          break;
        case 123:
          i++;
          break;
        case 125:
          i--;
          break;
      }
      if (u === 47) {
        for (var b = f - 1, m = void 0; b >= 0 && (m = t.charAt(b), m === " "); b--)
          ;
        (!m || !hD.test(m)) && (o = !0);
      }
    }
  d === void 0 ? d = t.slice(0, f).trim() : c !== 0 && g();
  function g() {
    (h || (h = [])).push(t.slice(c, f).trim()), c = f + 1;
  }
  if (h)
    for (f = 0; f < h.length; f++)
      d = pD(d, h[f]);
  return d;
}
function pD(t, e) {
  var n = e.indexOf("(");
  if (n < 0)
    return '_f("'.concat(e, '")(').concat(t, ")");
  var r = e.slice(0, n), o = e.slice(n + 1);
  return '_f("'.concat(r, '")(').concat(t).concat(o !== ")" ? "," + o : o);
}
function Os(t, e) {
  console.error("[Vue compiler]: ".concat(t));
}
function io(t, e) {
  return t ? t.map(function(n) {
    return n[e];
  }).filter(function(n) {
    return n;
  }) : [];
}
function Mn(t, e, n, r, o) {
  (t.props || (t.props = [])).push(Io({ name: e, value: n, dynamic: o }, r)), t.plain = !1;
}
function vl(t, e, n, r, o) {
  var i = o ? t.dynamicAttrs || (t.dynamicAttrs = []) : t.attrs || (t.attrs = []);
  i.push(Io({ name: e, value: n, dynamic: o }, r)), t.plain = !1;
}
function Vc(t, e, n, r) {
  t.attrsMap[e] = n, t.attrsList.push(Io({ name: e, value: n }, r));
}
function vD(t, e, n, r, o, i, s, a) {
  (t.directives || (t.directives = [])).push(Io({
    name: e,
    rawName: n,
    value: r,
    arg: o,
    isDynamicArg: i,
    modifiers: s
  }, a)), t.plain = !1;
}
function Uc(t, e, n) {
  return n ? "_p(".concat(e, ',"').concat(t, '")') : t + e;
}
function Lt(t, e, n, r, o, i, s, a) {
  r = r || Ae, r.right ? a ? e = "(".concat(e, ")==='click'?'contextmenu':(").concat(e, ")") : e === "click" && (e = "contextmenu", delete r.right) : r.middle && (a ? e = "(".concat(e, ")==='click'?'mouseup':(").concat(e, ")") : e === "click" && (e = "mouseup")), r.capture && (delete r.capture, e = Uc("!", e, a)), r.once && (delete r.once, e = Uc("~", e, a)), r.passive && (delete r.passive, e = Uc("&", e, a));
  var c;
  r.native ? (delete r.native, c = t.nativeEvents || (t.nativeEvents = {})) : c = t.events || (t.events = {});
  var u = Io({ value: n.trim(), dynamic: a }, s);
  r !== Ae && (u.modifiers = r);
  var l = c[e];
  Array.isArray(l) ? o ? l.unshift(u) : l.push(u) : l ? c[e] = o ? [u, l] : [l, u] : c[e] = u, t.plain = !1;
}
function gD(t, e) {
  return t.rawAttrsMap[":" + e] || t.rawAttrsMap["v-bind:" + e] || t.rawAttrsMap[e];
}
function et(t, e, n) {
  var r = de(t, ":" + e) || de(t, "v-bind:" + e);
  if (r != null)
    return Wf(r);
  if (n !== !1) {
    var o = de(t, e);
    if (o != null)
      return JSON.stringify(o);
  }
}
function de(t, e, n) {
  var r;
  if ((r = t.attrsMap[e]) != null) {
    for (var o = t.attrsList, i = 0, s = o.length; i < s; i++)
      if (o[i].name === e) {
        o.splice(i, 1);
        break;
      }
  }
  return n && delete t.attrsMap[e], r;
}
function gm(t, e) {
  for (var n = t.attrsList, r = 0, o = n.length; r < o; r++) {
    var i = n[r];
    if (e.test(i.name))
      return n.splice(r, 1), i;
  }
}
function Io(t, e) {
  return e && (e.start != null && (t.start = e.start), e.end != null && (t.end = e.end)), t;
}
function mm(t, e, n) {
  var r = n || {}, o = r.number, i = r.trim, s = "$$v", a = s;
  i && (a = "(typeof ".concat(s, " === 'string'") + "? ".concat(s, ".trim()") + ": ".concat(s, ")")), o && (a = "_n(".concat(a, ")"));
  var c = rn(e, a);
  t.model = {
    value: "(".concat(e, ")"),
    expression: JSON.stringify(e),
    callback: "function (".concat(s, ") {").concat(c, "}")
  };
}
function rn(t, e) {
  var n = mD(t);
  return n.key === null ? "".concat(t, "=").concat(e) : "$set(".concat(n.exp, ", ").concat(n.key, ", ").concat(e, ")");
}
var gl, py, Zr, Ft, Pi, ml;
function mD(t) {
  if (t = t.trim(), gl = t.length, t.indexOf("[") < 0 || t.lastIndexOf("]") < gl - 1)
    return Ft = t.lastIndexOf("."), Ft > -1 ? {
      exp: t.slice(0, Ft),
      key: '"' + t.slice(Ft + 1) + '"'
    } : {
      exp: t,
      key: null
    };
  for (py = t, Ft = Pi = ml = 0; !Zf(); )
    Zr = Kf(), vy(Zr) ? gy(Zr) : Zr === 91 && _D(Zr);
  return {
    exp: t.slice(0, Pi),
    key: t.slice(Pi + 1, ml)
  };
}
function Kf() {
  return py.charCodeAt(++Ft);
}
function Zf() {
  return Ft >= gl;
}
function vy(t) {
  return t === 34 || t === 39;
}
function _D(t) {
  var e = 1;
  for (Pi = Ft; !Zf(); ) {
    if (t = Kf(), vy(t)) {
      gy(t);
      continue;
    }
    if (t === 91 && e++, t === 93 && e--, e === 0) {
      ml = Ft;
      break;
    }
  }
}
function gy(t) {
  for (var e = t; !Zf() && (t = Kf(), t !== e); )
    ;
}
var Fi = "__r", Gc = "__c";
function bD(t, e, n) {
  var r = e.value, o = e.modifiers, i = t.tag, s = t.attrsMap.type;
  if (t.component)
    return mm(t, r, o), !1;
  if (i === "select")
    kD(t, r, o);
  else if (i === "input" && s === "checkbox")
    yD(t, r, o);
  else if (i === "input" && s === "radio")
    wD(t, r, o);
  else if (i === "input" || i === "textarea")
    SD(t, r, o);
  else if (!Ue.isReservedTag(i))
    return mm(t, r, o), !1;
  return !0;
}
function yD(t, e, n) {
  var r = n && n.number, o = et(t, "value") || "null", i = et(t, "true-value") || "true", s = et(t, "false-value") || "false";
  Mn(t, "checked", "Array.isArray(".concat(e, ")") + "?_i(".concat(e, ",").concat(o, ")>-1") + (i === "true" ? ":(".concat(e, ")") : ":_q(".concat(e, ",").concat(i, ")"))), Lt(t, "change", "var $$a=".concat(e, ",") + "$$el=$event.target," + "$$c=$$el.checked?(".concat(i, "):(").concat(s, ");") + "if(Array.isArray($$a)){" + "var $$v=".concat(r ? "_n(" + o + ")" : o, ",") + "$$i=_i($$a,$$v);" + "if($$el.checked){$$i<0&&(".concat(rn(e, "$$a.concat([$$v])"), ")}") + "else{$$i>-1&&(".concat(rn(e, "$$a.slice(0,$$i).concat($$a.slice($$i+1))"), ")}") + "}else{".concat(rn(e, "$$c"), "}"), null, !0);
}
function wD(t, e, n) {
  var r = n && n.number, o = et(t, "value") || "null";
  o = r ? "_n(".concat(o, ")") : o, Mn(t, "checked", "_q(".concat(e, ",").concat(o, ")")), Lt(t, "change", rn(e, o), null, !0);
}
function kD(t, e, n) {
  var r = n && n.number, o = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;' + "return ".concat(r ? "_n(val)" : "val", "})"), i = "$event.target.multiple ? $$selectedVal : $$selectedVal[0]", s = "var $$selectedVal = ".concat(o, ";");
  s = "".concat(s, " ").concat(rn(e, i)), Lt(t, "change", s, null, !0);
}
function SD(t, e, n) {
  var r = t.attrsMap.type, o = n || {}, i = o.lazy, s = o.number, a = o.trim, c = !i && r !== "range", u = i ? "change" : r === "range" ? Fi : "input", l = "$event.target.value";
  a && (l = "$event.target.value.trim()"), s && (l = "_n(".concat(l, ")"));
  var f = rn(e, l);
  c && (f = "if($event.target.composing)return;".concat(f)), Mn(t, "value", "(".concat(e, ")")), Lt(t, u, f, null, !0), (a || s) && Lt(t, "blur", "$forceUpdate()");
}
function xD(t) {
  if ($(t[Fi])) {
    var e = on ? "change" : "input";
    t[e] = [].concat(t[Fi], t[e] || []), delete t[Fi];
  }
  $(t[Gc]) && (t.change = [].concat(t[Gc], t.change || []), delete t[Gc]);
}
var mo;
function $D(t, e, n) {
  var r = mo;
  return function o() {
    var i = e.apply(null, arguments);
    i !== null && my(t, o, n, r);
  };
}
var ED = al && !(qg && Number(qg[1]) <= 53);
function CD(t, e, n, r) {
  if (ED) {
    var o = sy, i = e;
    e = i._wrapper = function(s) {
      if (
        // no bubbling, should always fire.
        // this is just a safety net in case event.timeStamp is unreliable in
        // certain weird environments...
        s.target === s.currentTarget || // event is fired after handler attachment
        s.timeStamp >= o || // bail for environments that have buggy event.timeStamp implementations
        // #9462 iOS 9 bug: event.timeStamp is 0 after history.pushState
        // #9681 QtWebEngine event.timeStamp is negative value
        s.timeStamp <= 0 || // #9448 bail if event is fired in another document in a multi-page
        // electron/nw.js app, since event.timeStamp will be using a different
        // starting reference
        s.target.ownerDocument !== document
      )
        return i.apply(this, arguments);
    };
  }
  mo.addEventListener(t, e, B0 ? { capture: n, passive: r } : n);
}
function my(t, e, n, r) {
  (r || mo).removeEventListener(
    t,
    //@ts-expect-error
    e._wrapper || e,
    n
  );
}
function Wc(t, e) {
  if (!(H(t.data.on) && H(e.data.on))) {
    var n = e.data.on || {}, r = t.data.on || {};
    mo = e.elm || t.elm, xD(n), W0(n, r, CD, my, $D, e.context), mo = void 0;
  }
}
var ID = {
  create: Wc,
  update: Wc,
  // @ts-expect-error emptyNode has actually data
  destroy: function(t) {
    return Wc(t, Qt);
  }
}, gi;
function _m(t, e) {
  if (!(H(t.data.domProps) && H(e.data.domProps))) {
    var n, r, o = e.elm, i = t.data.domProps || {}, s = e.data.domProps || {};
    ($(s.__ob__) || ce(s._v_attr_proxy)) && (s = e.data.domProps = Z({}, s));
    for (n in i)
      n in s || (o[n] = "");
    for (n in s) {
      if (r = s[n], n === "textContent" || n === "innerHTML") {
        if (e.children && (e.children.length = 0), r === i[n])
          continue;
        o.childNodes.length === 1 && o.removeChild(o.childNodes[0]);
      }
      if (n === "value" && o.tagName !== "PROGRESS") {
        o._value = r;
        var a = H(r) ? "" : String(r);
        TD(o, a) && (o.value = a);
      } else if (n === "innerHTML" && Vf(o.tagName) && H(o.innerHTML)) {
        gi = gi || document.createElement("div"), gi.innerHTML = "<svg>".concat(r, "</svg>");
        for (var c = gi.firstChild; o.firstChild; )
          o.removeChild(o.firstChild);
        for (; c.firstChild; )
          o.appendChild(c.firstChild);
      } else if (
        // skip the update if old and new VDOM state is the same.
        // `value` is handled separately because the DOM value may be temporarily
        // out of sync with VDOM state due to focus, composition and modifiers.
        // This  #4521 by skipping the unnecessary `checked` update.
        r !== i[n]
      )
        try {
          o[n] = r;
        } catch {
        }
    }
  }
}
function TD(t, e) {
  return (
    //@ts-expect-error
    !t.composing && (t.tagName === "OPTION" || AD(t, e) || OD(t, e))
  );
}
function AD(t, e) {
  var n = !0;
  try {
    n = document.activeElement !== t;
  } catch {
  }
  return n && t.value !== e;
}
function OD(t, e) {
  var n = t.value, r = t._vModifiers;
  if ($(r)) {
    if (r.number)
      return fo(n) !== fo(e);
    if (r.trim)
      return n.trim() !== e.trim();
  }
  return n !== e;
}
var DD = {
  create: _m,
  update: _m
}, _y = dt(function(t) {
  var e = {}, n = /;(?![^(]*\))/g, r = /:(.+)/;
  return t.split(n).forEach(function(o) {
    if (o) {
      var i = o.split(r);
      i.length > 1 && (e[i[0].trim()] = i[1].trim());
    }
  }), e;
});
function Kc(t) {
  var e = by(t.style);
  return t.staticStyle ? Z(t.staticStyle, e) : e;
}
function by(t) {
  return Array.isArray(t) ? F0(t) : typeof t == "string" ? _y(t) : t;
}
function PD(t, e) {
  var n = {}, r;
  if (e)
    for (var o = t; o.componentInstance; )
      o = o.componentInstance._vnode, o && o.data && (r = Kc(o.data)) && Z(n, r);
  (r = Kc(t.data)) && Z(n, r);
  for (var i = t; i = i.parent; )
    i.data && (r = Kc(i.data)) && Z(n, r);
  return n;
}
var FD = /^--/, bm = /\s*!important$/, ym = function(t, e, n) {
  if (FD.test(e))
    t.style.setProperty(e, n);
  else if (bm.test(n))
    t.style.setProperty(Dn(e), n.replace(bm, ""), "important");
  else {
    var r = RD(e);
    if (Array.isArray(n))
      for (var o = 0, i = n.length; o < i; o++)
        t.style[r] = n[o];
    else
      t.style[r] = n;
  }
}, wm = ["Webkit", "Moz", "ms"], mi, RD = dt(function(t) {
  if (mi = mi || document.createElement("div").style, t = Ve(t), t !== "filter" && t in mi)
    return t;
  for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < wm.length; n++) {
    var r = wm[n] + e;
    if (r in mi)
      return r;
  }
});
function km(t, e) {
  var n = e.data, r = t.data;
  if (!(H(n.staticStyle) && H(n.style) && H(r.staticStyle) && H(r.style))) {
    var o, i, s = e.elm, a = r.staticStyle, c = r.normalizedStyle || r.style || {}, u = a || c, l = by(e.data.style) || {};
    e.data.normalizedStyle = $(l.__ob__) ? Z({}, l) : l;
    var f = PD(e, !0);
    for (i in u)
      H(f[i]) && ym(s, i, "");
    for (i in f)
      o = f[i], o !== u[i] && ym(s, i, o ?? "");
  }
}
var ND = {
  create: km,
  update: km
}, yy = /\s+/;
function wy(t, e) {
  if (!(!e || !(e = e.trim())))
    if (t.classList)
      e.indexOf(" ") > -1 ? e.split(yy).forEach(function(r) {
        return t.classList.add(r);
      }) : t.classList.add(e);
    else {
      var n = " ".concat(t.getAttribute("class") || "", " ");
      n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim());
    }
}
function ky(t, e) {
  if (!(!e || !(e = e.trim())))
    if (t.classList)
      e.indexOf(" ") > -1 ? e.split(yy).forEach(function(o) {
        return t.classList.remove(o);
      }) : t.classList.remove(e), t.classList.length || t.removeAttribute("class");
    else {
      for (var n = " ".concat(t.getAttribute("class") || "", " "), r = " " + e + " "; n.indexOf(r) >= 0; )
        n = n.replace(r, " ");
      n = n.trim(), n ? t.setAttribute("class", n) : t.removeAttribute("class");
    }
}
function Sy(t) {
  if (t) {
    if (typeof t == "object") {
      var e = {};
      return t.css !== !1 && Z(e, Sm(t.name || "v")), Z(e, t), e;
    } else if (typeof t == "string")
      return Sm(t);
  }
}
var Sm = dt(function(t) {
  return {
    enterClass: "".concat(t, "-enter"),
    enterToClass: "".concat(t, "-enter-to"),
    enterActiveClass: "".concat(t, "-enter-active"),
    leaveClass: "".concat(t, "-leave"),
    leaveToClass: "".concat(t, "-leave-to"),
    leaveActiveClass: "".concat(t, "-leave-active")
  };
}), xy = Pe && !Er, nr = "transition", Zc = "animation", Ri = "transition", ns = "transitionend", _l = "animation", $y = "animationend";
xy && (window.ontransitionend === void 0 && window.onwebkittransitionend !== void 0 && (Ri = "WebkitTransition", ns = "webkitTransitionEnd"), window.onanimationend === void 0 && window.onwebkitanimationend !== void 0 && (_l = "WebkitAnimation", $y = "webkitAnimationEnd"));
var xm = Pe ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : (
  /* istanbul ignore next */
  function(t) {
    return t();
  }
);
function Ey(t) {
  xm(function() {
    xm(t);
  });
}
function An(t, e) {
  var n = t._transitionClasses || (t._transitionClasses = []);
  n.indexOf(e) < 0 && (n.push(e), wy(t, e));
}
function qt(t, e) {
  t._transitionClasses && pn(t._transitionClasses, e), ky(t, e);
}
function Cy(t, e, n) {
  var r = Iy(t, e), o = r.type, i = r.timeout, s = r.propCount;
  if (!o)
    return n();
  var a = o === nr ? ns : $y, c = 0, u = function() {
    t.removeEventListener(a, l), n();
  }, l = function(f) {
    f.target === t && ++c >= s && u();
  };
  setTimeout(function() {
    c < s && u();
  }, i + 1), t.addEventListener(a, l);
}
var MD = /\b(transform|all)(,|$)/;
function Iy(t, e) {
  var n = window.getComputedStyle(t), r = (n[Ri + "Delay"] || "").split(", "), o = (n[Ri + "Duration"] || "").split(", "), i = $m(r, o), s = (n[_l + "Delay"] || "").split(", "), a = (n[_l + "Duration"] || "").split(", "), c = $m(s, a), u, l = 0, f = 0;
  e === nr ? i > 0 && (u = nr, l = i, f = o.length) : e === Zc ? c > 0 && (u = Zc, l = c, f = a.length) : (l = Math.max(i, c), u = l > 0 ? i > c ? nr : Zc : null, f = u ? u === nr ? o.length : a.length : 0);
  var d = u === nr && MD.test(n[Ri + "Property"]);
  return {
    type: u,
    timeout: l,
    propCount: f,
    hasTransform: d
  };
}
function $m(t, e) {
  for (; t.length < e.length; )
    t = t.concat(t);
  return Math.max.apply(null, e.map(function(n, r) {
    return Em(n) + Em(t[r]);
  }));
}
function Em(t) {
  return Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function bl(t, e) {
  var n = t.elm;
  $(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
  var r = Sy(t.data.transition);
  if (!H(r) && !($(n._enterCb) || n.nodeType !== 1)) {
    for (var o = r.css, i = r.type, s = r.enterClass, a = r.enterToClass, c = r.enterActiveClass, u = r.appearClass, l = r.appearToClass, f = r.appearActiveClass, d = r.beforeEnter, h = r.enter, b = r.afterEnter, m = r.enterCancelled, g = r.beforeAppear, v = r.appear, k = r.afterAppear, y = r.appearCancelled, x = r.duration, N = Tn, T = Tn.$vnode; T && T.parent; )
      N = T.context, T = T.parent;
    var C = !N._isMounted || !t.isRootInsert;
    if (!(C && !v && v !== "")) {
      var A = C && u ? u : s, z = C && f ? f : c, M = C && l ? l : a, L = C && g || d, w = C && se(v) ? v : h, _ = C && k || b, p = C && y || m, O = fo(Ce(x) ? x.enter : x), P = o !== !1 && !Er, E = Jf(w), S = n._enterCb = Gi(function() {
        P && (qt(n, M), qt(n, z)), S.cancelled ? (P && qt(n, A), p && p(n)) : _ && _(n), n._enterCb = null;
      });
      t.data.show || Xt(t, "insert", function() {
        var I = n.parentNode, F = I && I._pending && I._pending[t.key];
        F && F.tag === t.tag && F.elm._leaveCb && F.elm._leaveCb(), w && w(n, S);
      }), L && L(n), P && (An(n, A), An(n, z), Ey(function() {
        qt(n, A), S.cancelled || (An(n, M), E || (Ay(O) ? setTimeout(S, O) : Cy(n, i, S)));
      })), t.data.show && (e && e(), w && w(n, S)), !P && !E && S();
    }
  }
}
function Ty(t, e) {
  var n = t.elm;
  $(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
  var r = Sy(t.data.transition);
  if (H(r) || n.nodeType !== 1)
    return e();
  if ($(n._leaveCb))
    return;
  var o = r.css, i = r.type, s = r.leaveClass, a = r.leaveToClass, c = r.leaveActiveClass, u = r.beforeLeave, l = r.leave, f = r.afterLeave, d = r.leaveCancelled, h = r.delayLeave, b = r.duration, m = o !== !1 && !Er, g = Jf(l), v = fo(Ce(b) ? b.leave : b), k = n._leaveCb = Gi(function() {
    n.parentNode && n.parentNode._pending && (n.parentNode._pending[t.key] = null), m && (qt(n, a), qt(n, c)), k.cancelled ? (m && qt(n, s), d && d(n)) : (e(), f && f(n)), n._leaveCb = null;
  });
  h ? h(y) : y();
  function y() {
    k.cancelled || (!t.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[t.key] = t), u && u(n), m && (An(n, s), An(n, c), Ey(function() {
      qt(n, s), k.cancelled || (An(n, a), g || (Ay(v) ? setTimeout(k, v) : Cy(n, i, k)));
    })), l && l(n, k), !m && !g && k());
  }
}
function Ay(t) {
  return typeof t == "number" && !isNaN(t);
}
function Jf(t) {
  if (H(t))
    return !1;
  var e = t.fns;
  return $(e) ? Jf(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1;
}
function Cm(t, e) {
  e.data.show !== !0 && bl(e);
}
var LD = Pe ? {
  create: Cm,
  activate: Cm,
  remove: function(t, e) {
    t.data.show !== !0 ? Ty(t, e) : e();
  }
} : {}, qD = [fD, dD, ID, DD, ND, LD], jD = qD.concat(lD), BD = iD({ nodeOps: tD, modules: jD });
Er && document.addEventListener("selectionchange", function() {
  var t = document.activeElement;
  t && t.vmodel && Yf(t, "input");
});
var Oy = {
  inserted: function(t, e, n, r) {
    n.tag === "select" ? (r.elm && !r.elm._vOptions ? Xt(n, "postpatch", function() {
      Oy.componentUpdated(t, e, n);
    }) : Im(t, e, n.context), t._vOptions = [].map.call(t.options, rs)) : (n.tag === "textarea" || pl(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("compositionstart", zD), t.addEventListener("compositionend", Om), t.addEventListener("change", Om), Er && (t.vmodel = !0)));
  },
  componentUpdated: function(t, e, n) {
    if (n.tag === "select") {
      Im(t, e, n.context);
      var r = t._vOptions, o = t._vOptions = [].map.call(t.options, rs);
      if (o.some(function(s, a) {
        return !Pn(s, r[a]);
      })) {
        var i = t.multiple ? e.value.some(function(s) {
          return Am(s, o);
        }) : e.value !== e.oldValue && Am(e.value, o);
        i && Yf(t, "change");
      }
    }
  }
};
function Im(t, e, n) {
  Tm(t, e), (on || j0) && setTimeout(function() {
    Tm(t, e);
  }, 0);
}
function Tm(t, e, n) {
  var r = e.value, o = t.multiple;
  if (!(o && !Array.isArray(r))) {
    for (var i, s, a = 0, c = t.options.length; a < c; a++)
      if (s = t.options[a], o)
        i = N0(r, rs(s)) > -1, s.selected !== i && (s.selected = i);
      else if (Pn(rs(s), r)) {
        t.selectedIndex !== a && (t.selectedIndex = a);
        return;
      }
    o || (t.selectedIndex = -1);
  }
}
function Am(t, e) {
  return e.every(function(n) {
    return !Pn(n, t);
  });
}
function rs(t) {
  return "_value" in t ? t._value : t.value;
}
function zD(t) {
  t.target.composing = !0;
}
function Om(t) {
  t.target.composing && (t.target.composing = !1, Yf(t.target, "input"));
}
function Yf(t, e) {
  var n = document.createEvent("HTMLEvents");
  n.initEvent(e, !0, !0), t.dispatchEvent(n);
}
function yl(t) {
  return t.componentInstance && (!t.data || !t.data.transition) ? yl(t.componentInstance._vnode) : t;
}
var HD = {
  bind: function(t, e, n) {
    var r = e.value;
    n = yl(n);
    var o = n.data && n.data.transition, i = t.__vOriginalDisplay = t.style.display === "none" ? "" : t.style.display;
    r && o ? (n.data.show = !0, bl(n, function() {
      t.style.display = i;
    })) : t.style.display = r ? i : "none";
  },
  update: function(t, e, n) {
    var r = e.value, o = e.oldValue;
    if (!r != !o) {
      n = yl(n);
      var i = n.data && n.data.transition;
      i ? (n.data.show = !0, r ? bl(n, function() {
        t.style.display = t.__vOriginalDisplay;
      }) : Ty(n, function() {
        t.style.display = "none";
      })) : t.style.display = r ? t.__vOriginalDisplay : "none";
    }
  },
  unbind: function(t, e, n, r, o) {
    o || (t.style.display = t.__vOriginalDisplay);
  }
}, VD = {
  model: Oy,
  show: HD
}, Dy = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};
function wl(t) {
  var e = t && t.componentOptions;
  return e && e.Ctor.options.abstract ? wl(ty(e.children)) : t;
}
function Py(t) {
  var e = {}, n = t.$options;
  for (var r in n.propsData)
    e[r] = t[r];
  var o = n._parentListeners;
  for (var r in o)
    e[Ve(r)] = o[r];
  return e;
}
function Dm(t, e) {
  if (/\d-keep-alive$/.test(e.tag))
    return t("keep-alive", {
      props: e.componentOptions.propsData
    });
}
function UD(t) {
  for (; t = t.parent; )
    if (t.data.transition)
      return !0;
}
function GD(t, e) {
  return e.key === t.key && e.tag === t.tag;
}
var WD = function(t) {
  return t.tag || po(t);
}, KD = function(t) {
  return t.name === "show";
}, ZD = {
  name: "transition",
  props: Dy,
  abstract: !0,
  render: function(t) {
    var e = this, n = this.$slots.default;
    if (n && (n = n.filter(WD), !!n.length)) {
      var r = this.mode, o = n[0];
      if (UD(this.$vnode))
        return o;
      var i = wl(o);
      if (!i)
        return o;
      if (this._leaving)
        return Dm(t, o);
      var s = "__transition-".concat(this._uid, "-");
      i.key = i.key == null ? i.isComment ? s + "comment" : s + i.tag : Eo(i.key) ? String(i.key).indexOf(s) === 0 ? i.key : s + i.key : i.key;
      var a = (i.data || (i.data = {})).transition = Py(this), c = this._vnode, u = wl(c);
      if (i.data.directives && i.data.directives.some(KD) && (i.data.show = !0), u && u.data && !GD(i, u) && !po(u) && // #6687 component root is a comment node
      !(u.componentInstance && u.componentInstance._vnode.isComment)) {
        var l = u.data.transition = Z({}, a);
        if (r === "out-in")
          return this._leaving = !0, Xt(l, "afterLeave", function() {
            e._leaving = !1, e.$forceUpdate();
          }), Dm(t, o);
        if (r === "in-out") {
          if (po(i))
            return c;
          var f, d = function() {
            f();
          };
          Xt(a, "afterEnter", d), Xt(a, "enterCancelled", d), Xt(l, "delayLeave", function(h) {
            f = h;
          });
        }
      }
      return o;
    }
  }
}, Fy = Z({
  tag: String,
  moveClass: String
}, Dy);
delete Fy.mode;
var JD = {
  props: Fy,
  beforeMount: function() {
    var t = this, e = this._update;
    this._update = function(n, r) {
      var o = ry(t);
      t.__patch__(
        t._vnode,
        t.kept,
        !1,
        // hydrating
        !0
        // removeOnly (!important, avoids unnecessary moves)
      ), t._vnode = t.kept, o(), e.call(t, n, r);
    };
  },
  render: function(t) {
    for (var e = this.tag || this.$vnode.data.tag || "span", n = /* @__PURE__ */ Object.create(null), r = this.prevChildren = this.children, o = this.$slots.default || [], i = this.children = [], s = Py(this), a = 0; a < o.length; a++) {
      var c = o[a];
      c.tag && c.key != null && String(c.key).indexOf("__vlist") !== 0 && (i.push(c), n[c.key] = c, (c.data || (c.data = {})).transition = s);
    }
    if (r) {
      for (var u = [], l = [], a = 0; a < r.length; a++) {
        var c = r[a];
        c.data.transition = s, c.data.pos = c.elm.getBoundingClientRect(), n[c.key] ? u.push(c) : l.push(c);
      }
      this.kept = t(e, null, u), this.removed = l;
    }
    return t(e, null, i);
  },
  updated: function() {
    var t = this.prevChildren, e = this.moveClass || (this.name || "v") + "-move";
    !t.length || !this.hasMove(t[0].elm, e) || (t.forEach(YD), t.forEach(XD), t.forEach(QD), this._reflow = document.body.offsetHeight, t.forEach(function(n) {
      if (n.data.moved) {
        var r = n.elm, o = r.style;
        An(r, e), o.transform = o.WebkitTransform = o.transitionDuration = "", r.addEventListener(ns, r._moveCb = function i(s) {
          s && s.target !== r || (!s || /transform$/.test(s.propertyName)) && (r.removeEventListener(ns, i), r._moveCb = null, qt(r, e));
        });
      }
    }));
  },
  methods: {
    hasMove: function(t, e) {
      if (!xy)
        return !1;
      if (this._hasMove)
        return this._hasMove;
      var n = t.cloneNode();
      t._transitionClasses && t._transitionClasses.forEach(function(o) {
        ky(n, o);
      }), wy(n, e), n.style.display = "none", this.$el.appendChild(n);
      var r = Iy(n);
      return this.$el.removeChild(n), this._hasMove = r.hasTransform;
    }
  }
};
function YD(t) {
  t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
}
function XD(t) {
  t.data.newPos = t.elm.getBoundingClientRect();
}
function QD(t) {
  var e = t.data.pos, n = t.data.newPos, r = e.left - n.left, o = e.top - n.top;
  if (r || o) {
    t.data.moved = !0;
    var i = t.elm.style;
    i.transform = i.WebkitTransform = "translate(".concat(r, "px,").concat(o, "px)"), i.transitionDuration = "0s";
  }
}
var eP = {
  Transition: ZD,
  TransitionGroup: JD
};
re.config.mustUseProp = ly;
re.config.isReservedTag = Uf;
re.config.isReservedAttr = AO;
re.config.getTagNamespace = hy;
re.config.isUnknownElement = zO;
Z(re.options.directives, VD);
Z(re.options.components, eP);
re.prototype.__patch__ = Pe ? BD : he;
re.prototype.$mount = function(t, e) {
  return t = t && Pe ? Gf(t) : void 0, AA(this, t, e);
};
Pe && setTimeout(function() {
  Ue.devtools && Wi && Wi.emit("init", re);
}, 0);
var tP = /\{\{((?:.|\r?\n)+?)\}\}/g, Pm = /[-.*+?^${}()|[\]\/\\]/g, nP = dt(function(t) {
  var e = t[0].replace(Pm, "\\$&"), n = t[1].replace(Pm, "\\$&");
  return new RegExp(e + "((?:.|\\n)+?)" + n, "g");
});
function rP(t, e) {
  var n = e ? nP(e) : tP;
  if (n.test(t)) {
    for (var r = [], o = [], i = n.lastIndex = 0, s, a, c; s = n.exec(t); ) {
      a = s.index, a > i && (o.push(c = t.slice(i, a)), r.push(JSON.stringify(c)));
      var u = Wf(s[1].trim());
      r.push("_s(".concat(u, ")")), o.push({ "@binding": u }), i = a + s[0].length;
    }
    return i < t.length && (o.push(c = t.slice(i)), r.push(JSON.stringify(c))), {
      expression: r.join("+"),
      tokens: o
    };
  }
}
function oP(t, e) {
  e.warn;
  var n = de(t, "class");
  n && (t.staticClass = JSON.stringify(n.replace(/\s+/g, " ").trim()));
  var r = et(
    t,
    "class",
    !1
    /* getStatic */
  );
  r && (t.classBinding = r);
}
function iP(t) {
  var e = "";
  return t.staticClass && (e += "staticClass:".concat(t.staticClass, ",")), t.classBinding && (e += "class:".concat(t.classBinding, ",")), e;
}
var sP = {
  staticKeys: ["staticClass"],
  transformNode: oP,
  genData: iP
};
function aP(t, e) {
  e.warn;
  var n = de(t, "style");
  n && (t.staticStyle = JSON.stringify(_y(n)));
  var r = et(
    t,
    "style",
    !1
    /* getStatic */
  );
  r && (t.styleBinding = r);
}
function cP(t) {
  var e = "";
  return t.staticStyle && (e += "staticStyle:".concat(t.staticStyle, ",")), t.styleBinding && (e += "style:(".concat(t.styleBinding, "),")), e;
}
var uP = {
  staticKeys: ["staticStyle"],
  transformNode: aP,
  genData: cP
}, _i, lP = {
  decode: function(t) {
    return _i = _i || document.createElement("div"), _i.innerHTML = t, _i.textContent;
  }
}, fP = ke("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"), dP = ke("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"), hP = ke("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"), pP = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/, vP = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/, Fm = "[a-zA-Z_][\\-\\.0-9_a-zA-Z".concat(L0.source, "]*"), Ry = "((?:".concat(Fm, "\\:)?").concat(Fm, ")"), Rm = new RegExp("^<".concat(Ry)), gP = /^\s*(\/?)>/, Nm = new RegExp("^<\\/".concat(Ry, "[^>]*>")), mP = /^<!DOCTYPE [^>]+>/i, Mm = /^<!\--/, Lm = /^<!\[/, qm = ke("script,style,textarea", !0), jm = {}, _P = {
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&amp;": "&",
  "&#10;": `
`,
  "&#9;": "	",
  "&#39;": "'"
}, bP = /&(?:lt|gt|quot|amp|#39);/g, yP = /&(?:lt|gt|quot|amp|#39|#10|#9);/g, wP = ke("pre,textarea", !0), Bm = function(t, e) {
  return t && wP(t) && e[0] === `
`;
};
function kP(t, e) {
  var n = e ? yP : bP;
  return t.replace(n, function(r) {
    return _P[r];
  });
}
function SP(t, e) {
  for (var n = [], r = e.expectHTML, o = e.isUnaryTag || Qe, i = e.canBeLeftOpenTag || Qe, s = 0, a, c, u = function() {
    if (a = t, !c || !qm(c)) {
      var m = t.indexOf("<");
      if (m === 0) {
        if (Mm.test(t)) {
          var g = t.indexOf("-->");
          if (g >= 0)
            return e.shouldKeepComment && e.comment && e.comment(t.substring(4, g), s, s + g + 3), f(g + 3), "continue";
        }
        if (Lm.test(t)) {
          var v = t.indexOf("]>");
          if (v >= 0)
            return f(v + 2), "continue";
        }
        var k = t.match(mP);
        if (k)
          return f(k[0].length), "continue";
        var y = t.match(Nm);
        if (y) {
          var x = s;
          return f(y[0].length), b(y[1], x, s), "continue";
        }
        var N = d();
        if (N)
          return h(N), Bm(N.tagName, t) && f(1), "continue";
      }
      var T = void 0, C = void 0, A = void 0;
      if (m >= 0) {
        for (C = t.slice(m); !Nm.test(C) && !Rm.test(C) && !Mm.test(C) && !Lm.test(C) && (A = C.indexOf("<", 1), !(A < 0)); )
          m += A, C = t.slice(m);
        T = t.substring(0, m);
      }
      m < 0 && (T = t), T && f(T.length), e.chars && T && e.chars(T, s - T.length, s);
    } else {
      var z = 0, M = c.toLowerCase(), L = jm[M] || (jm[M] = new RegExp("([\\s\\S]*?)(</" + M + "[^>]*>)", "i")), C = t.replace(L, function(_, p, O) {
        return z = O.length, !qm(M) && M !== "noscript" && (p = p.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), Bm(M, p) && (p = p.slice(1)), e.chars && e.chars(p), "";
      });
      s += t.length - C.length, t = C, b(M, s - z, s);
    }
    if (t === a)
      return e.chars && e.chars(t), "break";
  }; t; ) {
    var l = u();
    if (l === "break")
      break;
  }
  b();
  function f(m) {
    s += m, t = t.substring(m);
  }
  function d() {
    var m = t.match(Rm);
    if (m) {
      var g = {
        tagName: m[1],
        attrs: [],
        start: s
      };
      f(m[0].length);
      for (var v = void 0, k = void 0; !(v = t.match(gP)) && (k = t.match(vP) || t.match(pP)); )
        k.start = s, f(k[0].length), k.end = s, g.attrs.push(k);
      if (v)
        return g.unarySlash = v[1], f(v[0].length), g.end = s, g;
    }
  }
  function h(m) {
    var g = m.tagName, v = m.unarySlash;
    r && (c === "p" && hP(g) && b(c), i(g) && c === g && b(g));
    for (var k = o(g) || !!v, y = m.attrs.length, x = new Array(y), N = 0; N < y; N++) {
      var T = m.attrs[N], C = T[3] || T[4] || T[5] || "", A = g === "a" && T[1] === "href" ? e.shouldDecodeNewlinesForHref : e.shouldDecodeNewlines;
      x[N] = {
        name: T[1],
        value: kP(C, A)
      };
    }
    k || (n.push({
      tag: g,
      lowerCasedTag: g.toLowerCase(),
      attrs: x,
      start: m.start,
      end: m.end
    }), c = g), e.start && e.start(g, x, k, m.start, m.end);
  }
  function b(m, g, v) {
    var k, y;
    if (g == null && (g = s), v == null && (v = s), m)
      for (y = m.toLowerCase(), k = n.length - 1; k >= 0 && n[k].lowerCasedTag !== y; k--)
        ;
    else
      k = 0;
    if (k >= 0) {
      for (var x = n.length - 1; x >= k; x--)
        e.end && e.end(n[x].tag, g, v);
      n.length = k, c = k && n[k - 1].tag;
    } else
      y === "br" ? e.start && e.start(m, [], !0, g, v) : y === "p" && (e.start && e.start(m, [], !1, g, v), e.end && e.end(m, g, v));
  }
}
var zm = /^@|^v-on:/, Jc = /^v-|^@|^:|^#/, xP = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, Hm = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, $P = /^\(|\)$/g, Ni = /^\[.*\]$/, EP = /:(.*)$/, Vm = /^:|^\.|^v-bind:/, Ny = /\.[^.\]]+(?=[^\]]*$)/g, kl = /^v-slot(:|$)|^#/, CP = /[\r\n]/, IP = /[ \f\t\r\n]+/g, TP = dt(lP.decode), os = "_empty_", cr, Um, Sl, Yc, Xc, Qc, xl, Gm;
function Xf(t, e, n) {
  return {
    type: 1,
    tag: t,
    attrsList: e,
    attrsMap: GP(e),
    rawAttrsMap: {},
    parent: n,
    children: []
  };
}
function AP(t, e) {
  cr = e.warn || Os, Qc = e.isPreTag || Qe, xl = e.mustUseProp || Qe, Gm = e.getTagNamespace || Qe, e.isReservedTag, Sl = io(e.modules, "transformNode"), Yc = io(e.modules, "preTransformNode"), Xc = io(e.modules, "postTransformNode"), Um = e.delimiters;
  var n = [], r = e.preserveWhitespace !== !1, o = e.whitespace, i, s, a = !1, c = !1;
  function u(f) {
    if (l(f), !a && !f.processed && (f = Mi(f, e)), !n.length && f !== i && i.if && (f.elseif || f.else) && fr(i, {
      exp: f.elseif,
      block: f
    }), s && !f.forbidden)
      if (f.elseif || f.else)
        MP(f, s);
      else {
        if (f.slotScope) {
          var d = f.slotTarget || '"default"';
          (s.scopedSlots || (s.scopedSlots = {}))[d] = f;
        }
        s.children.push(f), f.parent = s;
      }
    f.children = f.children.filter(function(b) {
      return !b.slotScope;
    }), l(f), f.pre && (a = !1), Qc(f.tag) && (c = !1);
    for (var h = 0; h < Xc.length; h++)
      Xc[h](f, e);
  }
  function l(f) {
    if (!c)
      for (var d = void 0; (d = f.children[f.children.length - 1]) && d.type === 3 && d.text === " "; )
        f.children.pop();
  }
  return SP(t, {
    warn: cr,
    expectHTML: e.expectHTML,
    isUnaryTag: e.isUnaryTag,
    canBeLeftOpenTag: e.canBeLeftOpenTag,
    shouldDecodeNewlines: e.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: e.shouldDecodeNewlinesForHref,
    shouldKeepComment: e.comments,
    outputSourceRange: e.outputSourceRange,
    start: function(f, d, h, b, m) {
      var g = s && s.ns || Gm(f);
      on && g === "svg" && (d = YP(d));
      var v = Xf(f, d, s);
      g && (v.ns = g), KP(v) && !Cr() && (v.forbidden = !0);
      for (var k = 0; k < Yc.length; k++)
        v = Yc[k](v, e) || v;
      a || (OP(v), v.pre && (a = !0)), Qc(v.tag) && (c = !0), a ? DP(v) : v.processed || (My(v), NP(v), qP(v)), i || (i = v), h ? u(v) : (s = v, n.push(v));
    },
    end: function(f, d, h) {
      var b = n[n.length - 1];
      n.length -= 1, s = n[n.length - 1], u(b);
    },
    chars: function(f, d, h) {
      if (s && !(on && s.tag === "textarea" && s.attrsMap.placeholder === f)) {
        var b = s.children;
        if (c || f.trim() ? f = WP(s) ? f : TP(f) : b.length ? o ? o === "condense" ? f = CP.test(f) ? "" : " " : f = " " : f = r ? " " : "" : f = "", f) {
          !c && o === "condense" && (f = f.replace(IP, " "));
          var m = void 0, g = void 0;
          !a && f !== " " && (m = rP(f, Um)) ? g = {
            type: 2,
            expression: m.expression,
            tokens: m.tokens,
            text: f
          } : (f !== " " || !b.length || b[b.length - 1].text !== " ") && (g = {
            type: 3,
            text: f
          }), g && b.push(g);
        }
      }
    },
    comment: function(f, d, h) {
      if (s) {
        var b = {
          type: 3,
          text: f,
          isComment: !0
        };
        s.children.push(b);
      }
    }
  }), i;
}
function OP(t) {
  de(t, "v-pre") != null && (t.pre = !0);
}
function DP(t) {
  var e = t.attrsList, n = e.length;
  if (n)
    for (var r = t.attrs = new Array(n), o = 0; o < n; o++)
      r[o] = {
        name: e[o].name,
        value: JSON.stringify(e[o].value)
      }, e[o].start != null && (r[o].start = e[o].start, r[o].end = e[o].end);
  else
    t.pre || (t.plain = !0);
}
function Mi(t, e) {
  PP(t), t.plain = !t.key && !t.scopedSlots && !t.attrsList.length, FP(t), jP(t), BP(t), zP(t);
  for (var n = 0; n < Sl.length; n++)
    t = Sl[n](t, e) || t;
  return HP(t), t;
}
function PP(t) {
  var e = et(t, "key");
  e && (t.key = e);
}
function FP(t) {
  var e = et(t, "ref");
  e && (t.ref = e, t.refInFor = VP(t));
}
function My(t) {
  var e;
  if (e = de(t, "v-for")) {
    var n = RP(e);
    n && Z(t, n);
  }
}
function RP(t) {
  var e = t.match(xP);
  if (e) {
    var n = {};
    n.for = e[2].trim();
    var r = e[1].trim().replace($P, ""), o = r.match(Hm);
    return o ? (n.alias = r.replace(Hm, "").trim(), n.iterator1 = o[1].trim(), o[2] && (n.iterator2 = o[2].trim())) : n.alias = r, n;
  }
}
function NP(t) {
  var e = de(t, "v-if");
  if (e)
    t.if = e, fr(t, {
      exp: e,
      block: t
    });
  else {
    de(t, "v-else") != null && (t.else = !0);
    var n = de(t, "v-else-if");
    n && (t.elseif = n);
  }
}
function MP(t, e) {
  var n = LP(e.children);
  n && n.if && fr(n, {
    exp: t.elseif,
    block: t
  });
}
function LP(t) {
  for (var e = t.length; e--; ) {
    if (t[e].type === 1)
      return t[e];
    t.pop();
  }
}
function fr(t, e) {
  t.ifConditions || (t.ifConditions = []), t.ifConditions.push(e);
}
function qP(t) {
  var e = de(t, "v-once");
  e != null && (t.once = !0);
}
function jP(t) {
  var e;
  t.tag === "template" ? (e = de(t, "scope"), t.slotScope = e || de(t, "slot-scope")) : (e = de(t, "slot-scope")) && (t.slotScope = e);
  var n = et(t, "slot");
  if (n && (t.slotTarget = n === '""' ? '"default"' : n, t.slotTargetDynamic = !!(t.attrsMap[":slot"] || t.attrsMap["v-bind:slot"]), t.tag !== "template" && !t.slotScope && vl(t, "slot", n, gD(t, "slot"))), t.tag === "template") {
    var r = gm(t, kl);
    if (r) {
      var o = Wm(r), i = o.name, s = o.dynamic;
      t.slotTarget = i, t.slotTargetDynamic = s, t.slotScope = r.value || os;
    }
  } else {
    var r = gm(t, kl);
    if (r) {
      var a = t.scopedSlots || (t.scopedSlots = {}), c = Wm(r), u = c.name, s = c.dynamic, l = a[u] = Xf("template", [], t);
      l.slotTarget = u, l.slotTargetDynamic = s, l.children = t.children.filter(function(h) {
        if (!h.slotScope)
          return h.parent = l, !0;
      }), l.slotScope = r.value || os, t.children = [], t.plain = !1;
    }
  }
}
function Wm(t) {
  var e = t.name.replace(kl, "");
  return e || t.name[0] !== "#" && (e = "default"), Ni.test(e) ? (
    // dynamic [name]
    { name: e.slice(1, -1), dynamic: !0 }
  ) : (
    // static name
    { name: '"'.concat(e, '"'), dynamic: !1 }
  );
}
function BP(t) {
  t.tag === "slot" && (t.slotName = et(t, "name"));
}
function zP(t) {
  var e;
  (e = et(t, "is")) && (t.component = e), de(t, "inline-template") != null && (t.inlineTemplate = !0);
}
function HP(t) {
  var e = t.attrsList, n, r, o, i, s, a, c, u;
  for (n = 0, r = e.length; n < r; n++)
    if (o = i = e[n].name, s = e[n].value, Jc.test(o))
      if (t.hasBindings = !0, a = UP(o.replace(Jc, "")), a && (o = o.replace(Ny, "")), Vm.test(o))
        o = o.replace(Vm, ""), s = Wf(s), u = Ni.test(o), u && (o = o.slice(1, -1)), a && (a.prop && !u && (o = Ve(o), o === "innerHtml" && (o = "innerHTML")), a.camel && !u && (o = Ve(o)), a.sync && (c = rn(s, "$event"), u ? Lt(
          t,
          '"update:"+('.concat(o, ")"),
          c,
          null,
          !1,
          cr,
          e[n],
          !0
          // dynamic
        ) : (Lt(t, "update:".concat(Ve(o)), c, null, !1, cr, e[n]), Dn(o) !== Ve(o) && Lt(t, "update:".concat(Dn(o)), c, null, !1, cr, e[n])))), a && a.prop || !t.component && xl(t.tag, t.attrsMap.type, o) ? Mn(t, o, s, e[n], u) : vl(t, o, s, e[n], u);
      else if (zm.test(o))
        o = o.replace(zm, ""), u = Ni.test(o), u && (o = o.slice(1, -1)), Lt(t, o, s, a, !1, cr, e[n], u);
      else {
        o = o.replace(Jc, "");
        var l = o.match(EP), f = l && l[1];
        u = !1, f && (o = o.slice(0, -(f.length + 1)), Ni.test(f) && (f = f.slice(1, -1), u = !0)), vD(t, o, i, s, f, u, a, e[n]);
      }
    else
      vl(t, o, JSON.stringify(s), e[n]), !t.component && o === "muted" && xl(t.tag, t.attrsMap.type, o) && Mn(t, o, "true", e[n]);
}
function VP(t) {
  for (var e = t; e; ) {
    if (e.for !== void 0)
      return !0;
    e = e.parent;
  }
  return !1;
}
function UP(t) {
  var e = t.match(Ny);
  if (e) {
    var n = {};
    return e.forEach(function(r) {
      n[r.slice(1)] = !0;
    }), n;
  }
}
function GP(t) {
  for (var e = {}, n = 0, r = t.length; n < r; n++)
    e[t[n].name] = t[n].value;
  return e;
}
function WP(t) {
  return t.tag === "script" || t.tag === "style";
}
function KP(t) {
  return t.tag === "style" || t.tag === "script" && (!t.attrsMap.type || t.attrsMap.type === "text/javascript");
}
var ZP = /^xmlns:NS\d+/, JP = /^NS\d+:/;
function YP(t) {
  for (var e = [], n = 0; n < t.length; n++) {
    var r = t[n];
    ZP.test(r.name) || (r.name = r.name.replace(JP, ""), e.push(r));
  }
  return e;
}
function XP(t, e) {
  if (t.tag === "input") {
    var n = t.attrsMap;
    if (!n["v-model"])
      return;
    var r = void 0;
    if ((n[":type"] || n["v-bind:type"]) && (r = et(t, "type")), !n.type && !r && n["v-bind"] && (r = "(".concat(n["v-bind"], ").type")), r) {
      var o = de(t, "v-if", !0), i = o ? "&&(".concat(o, ")") : "", s = de(t, "v-else", !0) != null, a = de(t, "v-else-if", !0), c = eu(t);
      My(c), Vc(c, "type", "checkbox"), Mi(c, e), c.processed = !0, c.if = "(".concat(r, ")==='checkbox'") + i, fr(c, {
        exp: c.if,
        block: c
      });
      var u = eu(t);
      de(u, "v-for", !0), Vc(u, "type", "radio"), Mi(u, e), fr(c, {
        exp: "(".concat(r, ")==='radio'") + i,
        block: u
      });
      var l = eu(t);
      return de(l, "v-for", !0), Vc(l, ":type", r), Mi(l, e), fr(c, {
        exp: o,
        block: l
      }), s ? c.else = !0 : a && (c.elseif = a), c;
    }
  }
}
function eu(t) {
  return Xf(t.tag, t.attrsList.slice(), t.parent);
}
var QP = {
  preTransformNode: XP
}, Km = [sP, uP, QP];
function e3(t, e) {
  e.value && Mn(t, "textContent", "_s(".concat(e.value, ")"), e);
}
function t3(t, e) {
  e.value && Mn(t, "innerHTML", "_s(".concat(e.value, ")"), e);
}
var n3 = {
  model: bD,
  text: e3,
  html: t3
}, r3 = {
  expectHTML: !0,
  modules: Km,
  directives: n3,
  isPreTag: BO,
  isUnaryTag: fP,
  mustUseProp: ly,
  canBeLeftOpenTag: dP,
  isReservedTag: Uf,
  getTagNamespace: hy,
  staticKeys: jT(Km)
}, Ly, Qf, o3 = dt(s3);
function i3(t, e) {
  t && (Ly = o3(e.staticKeys || ""), Qf = e.isReservedTag || Qe, $l(t), El(t, !1));
}
function s3(t) {
  return ke("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (t ? "," + t : ""));
}
function $l(t) {
  if (t.static = a3(t), t.type === 1) {
    if (!Qf(t.tag) && t.tag !== "slot" && t.attrsMap["inline-template"] == null)
      return;
    for (var e = 0, n = t.children.length; e < n; e++) {
      var r = t.children[e];
      $l(r), r.static || (t.static = !1);
    }
    if (t.ifConditions)
      for (var e = 1, n = t.ifConditions.length; e < n; e++) {
        var o = t.ifConditions[e].block;
        $l(o), o.static || (t.static = !1);
      }
  }
}
function El(t, e) {
  if (t.type === 1) {
    if ((t.static || t.once) && (t.staticInFor = e), t.static && t.children.length && !(t.children.length === 1 && t.children[0].type === 3)) {
      t.staticRoot = !0;
      return;
    } else
      t.staticRoot = !1;
    if (t.children)
      for (var n = 0, r = t.children.length; n < r; n++)
        El(t.children[n], e || !!t.for);
    if (t.ifConditions)
      for (var n = 1, r = t.ifConditions.length; n < r; n++)
        El(t.ifConditions[n].block, e);
  }
}
function a3(t) {
  return t.type === 2 ? !1 : t.type === 3 ? !0 : !!(t.pre || !t.hasBindings && // no dynamic bindings
  !t.if && !t.for && // not v-if or v-for or v-else
  !PT(t.tag) && // not a built-in
  Qf(t.tag) && // not a component
  !c3(t) && Object.keys(t).every(Ly));
}
function c3(t) {
  for (; t.parent; ) {
    if (t = t.parent, t.tag !== "template")
      return !1;
    if (t.for)
      return !0;
  }
  return !1;
}
var u3 = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/, l3 = /\([^)]*?\);*$/, Zm = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/, qy = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  delete: [8, 46]
}, f3 = {
  // #7880: IE11 and Edge use `Esc` for Escape key name.
  esc: ["Esc", "Escape"],
  tab: "Tab",
  enter: "Enter",
  // #9112: IE11 uses `Spacebar` for Space key name.
  space: [" ", "Spacebar"],
  // #7806: IE11 uses key names without `Arrow` prefix for arrow keys.
  up: ["Up", "ArrowUp"],
  left: ["Left", "ArrowLeft"],
  right: ["Right", "ArrowRight"],
  down: ["Down", "ArrowDown"],
  // #9112: IE11 uses `Del` for Delete key name.
  delete: ["Backspace", "Delete", "Del"]
}, Ot = function(t) {
  return "if(".concat(t, ")return null;");
}, Jm = {
  stop: "$event.stopPropagation();",
  prevent: "$event.preventDefault();",
  self: Ot("$event.target !== $event.currentTarget"),
  ctrl: Ot("!$event.ctrlKey"),
  shift: Ot("!$event.shiftKey"),
  alt: Ot("!$event.altKey"),
  meta: Ot("!$event.metaKey"),
  left: Ot("'button' in $event && $event.button !== 0"),
  middle: Ot("'button' in $event && $event.button !== 1"),
  right: Ot("'button' in $event && $event.button !== 2")
};
function Ym(t, e) {
  var n = e ? "nativeOn:" : "on:", r = "", o = "";
  for (var i in t) {
    var s = jy(t[i]);
    t[i] && t[i].dynamic ? o += "".concat(i, ",").concat(s, ",") : r += '"'.concat(i, '":').concat(s, ",");
  }
  return r = "{".concat(r.slice(0, -1), "}"), o ? n + "_d(".concat(r, ",[").concat(o.slice(0, -1), "])") : n + r;
}
function jy(t) {
  if (!t)
    return "function(){}";
  if (Array.isArray(t))
    return "[".concat(t.map(function(l) {
      return jy(l);
    }).join(","), "]");
  var e = Zm.test(t.value), n = u3.test(t.value), r = Zm.test(t.value.replace(l3, ""));
  if (t.modifiers) {
    var o = "", i = "", s = [], a = function(l) {
      if (Jm[l])
        i += Jm[l], qy[l] && s.push(l);
      else if (l === "exact") {
        var f = t.modifiers;
        i += Ot(["ctrl", "shift", "alt", "meta"].filter(function(d) {
          return !f[d];
        }).map(function(d) {
          return "$event.".concat(d, "Key");
        }).join("||"));
      } else
        s.push(l);
    };
    for (var c in t.modifiers)
      a(c);
    s.length && (o += d3(s)), i && (o += i);
    var u = e ? "return ".concat(t.value, ".apply(null, arguments)") : n ? "return (".concat(t.value, ").apply(null, arguments)") : r ? "return ".concat(t.value) : t.value;
    return "function($event){".concat(o).concat(u, "}");
  } else
    return e || n ? t.value : "function($event){".concat(r ? "return ".concat(t.value) : t.value, "}");
}
function d3(t) {
  return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" + "".concat(t.map(h3).join("&&"), ")return null;")
  );
}
function h3(t) {
  var e = parseInt(t, 10);
  if (e)
    return "$event.keyCode!==".concat(e);
  var n = qy[t], r = f3[t];
  return "_k($event.keyCode," + "".concat(JSON.stringify(t), ",") + "".concat(JSON.stringify(n), ",") + "$event.key," + "".concat(JSON.stringify(r)) + ")";
}
function p3(t, e) {
  t.wrapListeners = function(n) {
    return "_g(".concat(n, ",").concat(e.value, ")");
  };
}
function v3(t, e) {
  t.wrapData = function(n) {
    return "_b(".concat(n, ",'").concat(t.tag, "',").concat(e.value, ",").concat(e.modifiers && e.modifiers.prop ? "true" : "false").concat(e.modifiers && e.modifiers.sync ? ",true" : "", ")");
  };
}
var g3 = {
  on: p3,
  bind: v3,
  cloak: he
}, m3 = (
  /** @class */
  function() {
    function t(e) {
      this.options = e, this.warn = e.warn || Os, this.transforms = io(e.modules, "transformCode"), this.dataGenFns = io(e.modules, "genData"), this.directives = Z(Z({}, g3), e.directives);
      var n = e.isReservedTag || Qe;
      this.maybeComponent = function(r) {
        return !!r.component || !n(r.tag);
      }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1;
    }
    return t;
  }()
);
function By(t, e) {
  var n = new m3(e), r = t ? t.tag === "script" ? "null" : zt(t, n) : '_c("div")';
  return {
    render: "with(this){return ".concat(r, "}"),
    staticRenderFns: n.staticRenderFns
  };
}
function zt(t, e) {
  if (t.parent && (t.pre = t.pre || t.parent.pre), t.staticRoot && !t.staticProcessed)
    return zy(t, e);
  if (t.once && !t.onceProcessed)
    return Hy(t, e);
  if (t.for && !t.forProcessed)
    return Uy(t, e);
  if (t.if && !t.ifProcessed)
    return ed(t, e);
  if (t.tag === "template" && !t.slotTarget && !e.pre)
    return mr(t, e) || "void 0";
  if (t.tag === "slot")
    return C3(t, e);
  var n = void 0;
  if (t.component)
    n = I3(t.component, t, e);
  else {
    var r = void 0, o = e.maybeComponent(t);
    (!t.plain || t.pre && o) && (r = Gy(t, e));
    var i = void 0, s = e.options.bindings;
    o && s && s.__isScriptSetup !== !1 && (i = _3(s, t.tag)), i || (i = "'".concat(t.tag, "'"));
    var a = t.inlineTemplate ? null : mr(t, e, !0);
    n = "_c(".concat(i).concat(
      r ? ",".concat(r) : ""
      // data
    ).concat(
      a ? ",".concat(a) : "",
      ")"
    );
  }
  for (var c = 0; c < e.transforms.length; c++)
    n = e.transforms[c](t, n);
  return n;
}
function _3(t, e) {
  var n = Ve(e), r = D0(n), o = function(a) {
    if (t[e] === a)
      return e;
    if (t[n] === a)
      return n;
    if (t[r] === a)
      return r;
  }, i = o(
    "setup-const"
    /* BindingTypes.SETUP_CONST */
  ) || o(
    "setup-reactive-const"
    /* BindingTypes.SETUP_REACTIVE_CONST */
  );
  if (i)
    return i;
  var s = o(
    "setup-let"
    /* BindingTypes.SETUP_LET */
  ) || o(
    "setup-ref"
    /* BindingTypes.SETUP_REF */
  ) || o(
    "setup-maybe-ref"
    /* BindingTypes.SETUP_MAYBE_REF */
  );
  if (s)
    return s;
}
function zy(t, e) {
  t.staticProcessed = !0;
  var n = e.pre;
  return t.pre && (e.pre = t.pre), e.staticRenderFns.push("with(this){return ".concat(zt(t, e), "}")), e.pre = n, "_m(".concat(e.staticRenderFns.length - 1).concat(t.staticInFor ? ",true" : "", ")");
}
function Hy(t, e) {
  if (t.onceProcessed = !0, t.if && !t.ifProcessed)
    return ed(t, e);
  if (t.staticInFor) {
    for (var n = "", r = t.parent; r; ) {
      if (r.for) {
        n = r.key;
        break;
      }
      r = r.parent;
    }
    return n ? "_o(".concat(zt(t, e), ",").concat(e.onceId++, ",").concat(n, ")") : zt(t, e);
  } else
    return zy(t, e);
}
function ed(t, e, n, r) {
  return t.ifProcessed = !0, Vy(t.ifConditions.slice(), e, n, r);
}
function Vy(t, e, n, r) {
  if (!t.length)
    return r || "_e()";
  var o = t.shift();
  if (o.exp)
    return "(".concat(o.exp, ")?").concat(i(o.block), ":").concat(Vy(t, e, n, r));
  return "".concat(i(o.block));
  function i(s) {
    return n ? n(s, e) : s.once ? Hy(s, e) : zt(s, e);
  }
}
function Uy(t, e, n, r) {
  var o = t.for, i = t.alias, s = t.iterator1 ? ",".concat(t.iterator1) : "", a = t.iterator2 ? ",".concat(t.iterator2) : "";
  return t.forProcessed = !0, "".concat(r || "_l", "((").concat(o, "),") + "function(".concat(i).concat(s).concat(a, "){") + "return ".concat((n || zt)(t, e)) + "})";
}
function Gy(t, e) {
  var n = "{", r = b3(t, e);
  r && (n += r + ","), t.key && (n += "key:".concat(t.key, ",")), t.ref && (n += "ref:".concat(t.ref, ",")), t.refInFor && (n += "refInFor:true,"), t.pre && (n += "pre:true,"), t.component && (n += 'tag:"'.concat(t.tag, '",'));
  for (var o = 0; o < e.dataGenFns.length; o++)
    n += e.dataGenFns[o](t);
  if (t.attrs && (n += "attrs:".concat(Li(t.attrs), ",")), t.props && (n += "domProps:".concat(Li(t.props), ",")), t.events && (n += "".concat(Ym(t.events, !1), ",")), t.nativeEvents && (n += "".concat(Ym(t.nativeEvents, !0), ",")), t.slotTarget && !t.slotScope && (n += "slot:".concat(t.slotTarget, ",")), t.scopedSlots && (n += "".concat(w3(t, t.scopedSlots, e), ",")), t.model && (n += "model:{value:".concat(t.model.value, ",callback:").concat(t.model.callback, ",expression:").concat(t.model.expression, "},")), t.inlineTemplate) {
    var i = y3(t, e);
    i && (n += "".concat(i, ","));
  }
  return n = n.replace(/,$/, "") + "}", t.dynamicAttrs && (n = "_b(".concat(n, ',"').concat(t.tag, '",').concat(Li(t.dynamicAttrs), ")")), t.wrapData && (n = t.wrapData(n)), t.wrapListeners && (n = t.wrapListeners(n)), n;
}
function b3(t, e) {
  var n = t.directives;
  if (n) {
    var r = "directives:[", o = !1, i, s, a, c;
    for (i = 0, s = n.length; i < s; i++) {
      a = n[i], c = !0;
      var u = e.directives[a.name];
      u && (c = !!u(t, a, e.warn)), c && (o = !0, r += '{name:"'.concat(a.name, '",rawName:"').concat(a.rawName, '"').concat(a.value ? ",value:(".concat(a.value, "),expression:").concat(JSON.stringify(a.value)) : "").concat(a.arg ? ",arg:".concat(a.isDynamicArg ? a.arg : '"'.concat(a.arg, '"')) : "").concat(a.modifiers ? ",modifiers:".concat(JSON.stringify(a.modifiers)) : "", "},"));
    }
    if (o)
      return r.slice(0, -1) + "]";
  }
}
function y3(t, e) {
  var n = t.children[0];
  if (n && n.type === 1) {
    var r = By(n, e.options);
    return "inlineTemplate:{render:function(){".concat(r.render, "},staticRenderFns:[").concat(r.staticRenderFns.map(function(o) {
      return "function(){".concat(o, "}");
    }).join(","), "]}");
  }
}
function w3(t, e, n) {
  var r = t.for || Object.keys(e).some(function(a) {
    var c = e[a];
    return c.slotTargetDynamic || c.if || c.for || Wy(c);
  }), o = !!t.if;
  if (!r)
    for (var i = t.parent; i; ) {
      if (i.slotScope && i.slotScope !== os || i.for) {
        r = !0;
        break;
      }
      i.if && (o = !0), i = i.parent;
    }
  var s = Object.keys(e).map(function(a) {
    return Cl(e[a], n);
  }).join(",");
  return "scopedSlots:_u([".concat(s, "]").concat(r ? ",null,true" : "").concat(!r && o ? ",null,false,".concat(k3(s)) : "", ")");
}
function k3(t) {
  for (var e = 5381, n = t.length; n; )
    e = e * 33 ^ t.charCodeAt(--n);
  return e >>> 0;
}
function Wy(t) {
  return t.type === 1 ? t.tag === "slot" ? !0 : t.children.some(Wy) : !1;
}
function Cl(t, e) {
  var n = t.attrsMap["slot-scope"];
  if (t.if && !t.ifProcessed && !n)
    return ed(t, e, Cl, "null");
  if (t.for && !t.forProcessed)
    return Uy(t, e, Cl);
  var r = t.slotScope === os ? "" : String(t.slotScope), o = "function(".concat(r, "){") + "return ".concat(t.tag === "template" ? t.if && n ? "(".concat(t.if, ")?").concat(mr(t, e) || "undefined", ":undefined") : mr(t, e) || "undefined" : zt(t, e), "}"), i = r ? "" : ",proxy:true";
  return "{key:".concat(t.slotTarget || '"default"', ",fn:").concat(o).concat(i, "}");
}
function mr(t, e, n, r, o) {
  var i = t.children;
  if (i.length) {
    var s = i[0];
    if (i.length === 1 && s.for && s.tag !== "template" && s.tag !== "slot") {
      var a = n ? e.maybeComponent(s) ? ",1" : ",0" : "";
      return "".concat((r || zt)(s, e)).concat(a);
    }
    var c = n ? S3(i, e.maybeComponent) : 0, u = o || x3;
    return "[".concat(i.map(function(l) {
      return u(l, e);
    }).join(","), "]").concat(c ? ",".concat(c) : "");
  }
}
function S3(t, e) {
  for (var n = 0, r = 0; r < t.length; r++) {
    var o = t[r];
    if (o.type === 1) {
      if (Xm(o) || o.ifConditions && o.ifConditions.some(function(i) {
        return Xm(i.block);
      })) {
        n = 2;
        break;
      }
      (e(o) || o.ifConditions && o.ifConditions.some(function(i) {
        return e(i.block);
      })) && (n = 1);
    }
  }
  return n;
}
function Xm(t) {
  return t.for !== void 0 || t.tag === "template" || t.tag === "slot";
}
function x3(t, e) {
  return t.type === 1 ? zt(t, e) : t.type === 3 && t.isComment ? E3(t) : $3(t);
}
function $3(t) {
  return "_v(".concat(t.type === 2 ? t.expression : Ky(JSON.stringify(t.text)), ")");
}
function E3(t) {
  return "_e(".concat(JSON.stringify(t.text), ")");
}
function C3(t, e) {
  var n = t.slotName || '"default"', r = mr(t, e), o = "_t(".concat(n).concat(r ? ",function(){return ".concat(r, "}") : ""), i = t.attrs || t.dynamicAttrs ? Li((t.attrs || []).concat(t.dynamicAttrs || []).map(function(a) {
    return {
      // slot props are camelized
      name: Ve(a.name),
      value: a.value,
      dynamic: a.dynamic
    };
  })) : null, s = t.attrsMap["v-bind"];
  return (i || s) && !r && (o += ",null"), i && (o += ",".concat(i)), s && (o += "".concat(i ? "" : ",null", ",").concat(s)), o + ")";
}
function I3(t, e, n) {
  var r = e.inlineTemplate ? null : mr(e, n, !0);
  return "_c(".concat(t, ",").concat(Gy(e, n)).concat(r ? ",".concat(r) : "", ")");
}
function Li(t) {
  for (var e = "", n = "", r = 0; r < t.length; r++) {
    var o = t[r], i = Ky(o.value);
    o.dynamic ? n += "".concat(o.name, ",").concat(i, ",") : e += '"'.concat(o.name, '":').concat(i, ",");
  }
  return e = "{".concat(e.slice(0, -1), "}"), n ? "_d(".concat(e, ",[").concat(n.slice(0, -1), "])") : e;
}
function Ky(t) {
  return t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}
new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b");
new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
function Qm(t, e) {
  try {
    return new Function(t);
  } catch (n) {
    return e.push({ err: n, code: t }), he;
  }
}
function T3(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(r, o, i) {
    o = Z({}, o), o.warn, delete o.warn;
    var s = o.delimiters ? String(o.delimiters) + r : r;
    if (e[s])
      return e[s];
    var a = t(r, o), c = {}, u = [];
    return c.render = Qm(a.render, u), c.staticRenderFns = a.staticRenderFns.map(function(l) {
      return Qm(l, u);
    }), e[s] = c;
  };
}
function A3(t) {
  return function(n) {
    function r(o, i) {
      var s = Object.create(n), a = [], c = [], u = function(d, h, b) {
        (b ? c : a).push(d);
      };
      if (i) {
        i.modules && (s.modules = (n.modules || []).concat(i.modules)), i.directives && (s.directives = Z(Object.create(n.directives || null), i.directives));
        for (var l in i)
          l !== "modules" && l !== "directives" && (s[l] = i[l]);
      }
      s.warn = u;
      var f = t(o.trim(), s);
      return f.errors = a, f.tips = c, f;
    }
    return {
      compile: r,
      compileToFunctions: T3(r)
    };
  };
}
var O3 = A3(function(e, n) {
  var r = AP(e.trim(), n);
  n.optimize !== !1 && i3(r, n);
  var o = By(r, n);
  return {
    ast: r,
    render: o.render,
    staticRenderFns: o.staticRenderFns
  };
}), D3 = O3(r3), Zy = D3.compileToFunctions, bi;
function Jy(t) {
  return bi = bi || document.createElement("div"), bi.innerHTML = t ? `<a href="
"/>` : `<div a="
"/>`, bi.innerHTML.indexOf("&#10;") > 0;
}
var P3 = Pe ? Jy(!1) : !1, F3 = Pe ? Jy(!0) : !1, R3 = dt(function(t) {
  var e = Gf(t);
  return e && e.innerHTML;
}), N3 = re.prototype.$mount;
re.prototype.$mount = function(t, e) {
  if (t = t && Gf(t), t === document.body || t === document.documentElement)
    return this;
  var n = this.$options;
  if (!n.render) {
    var r = n.template;
    if (r)
      if (typeof r == "string")
        r.charAt(0) === "#" && (r = R3(r));
      else if (r.nodeType)
        r = r.innerHTML;
      else
        return this;
    else
      t && (r = M3(t));
    if (r) {
      var o = Zy(r, {
        outputSourceRange: !1,
        shouldDecodeNewlines: P3,
        shouldDecodeNewlinesForHref: F3,
        delimiters: n.delimiters,
        comments: n.comments
      }, this), i = o.render, s = o.staticRenderFns;
      n.render = i, n.staticRenderFns = s;
    }
  }
  return N3.call(this, t, e);
};
function M3(t) {
  if (t.outerHTML)
    return t.outerHTML;
  var e = document.createElement("div");
  return e.appendChild(t.cloneNode(!0)), e.innerHTML;
}
re.compile = Zy;
/**
 * vuex v3.1.1
 * (c) 2019 Evan You
 * @license MIT
 */
function L3(t) {
  var e = Number(t.version.split(".")[0]);
  if (e >= 2)
    t.mixin({ beforeCreate: r });
  else {
    var n = t.prototype._init;
    t.prototype._init = function(o) {
      o === void 0 && (o = {}), o.init = o.init ? [r].concat(o.init) : r, n.call(this, o);
    };
  }
  function r() {
    var o = this.$options;
    o.store ? this.$store = typeof o.store == "function" ? o.store() : o.store : o.parent && o.parent.$store && (this.$store = o.parent.$store);
  }
}
var q3 = typeof window < "u" ? window : typeof global < "u" ? global : {}, Jr = q3.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function j3(t) {
  Jr && (t._devtoolHook = Jr, Jr.emit("vuex:init", t), Jr.on("vuex:travel-to-state", function(e) {
    t.replaceState(e);
  }), t.subscribe(function(e, n) {
    Jr.emit("vuex:mutation", e, n);
  }));
}
function Ar(t, e) {
  Object.keys(t).forEach(function(n) {
    return e(t[n], n);
  });
}
function B3(t) {
  return t !== null && typeof t == "object";
}
function z3(t) {
  return t && typeof t.then == "function";
}
function H3(t, e) {
  return function() {
    return t(e);
  };
}
var Ct = function(e, n) {
  this.runtime = n, this._children = /* @__PURE__ */ Object.create(null), this._rawModule = e;
  var r = e.state;
  this.state = (typeof r == "function" ? r() : r) || {};
}, Yy = { namespaced: { configurable: !0 } };
Yy.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
Ct.prototype.addChild = function(e, n) {
  this._children[e] = n;
};
Ct.prototype.removeChild = function(e) {
  delete this._children[e];
};
Ct.prototype.getChild = function(e) {
  return this._children[e];
};
Ct.prototype.update = function(e) {
  this._rawModule.namespaced = e.namespaced, e.actions && (this._rawModule.actions = e.actions), e.mutations && (this._rawModule.mutations = e.mutations), e.getters && (this._rawModule.getters = e.getters);
};
Ct.prototype.forEachChild = function(e) {
  Ar(this._children, e);
};
Ct.prototype.forEachGetter = function(e) {
  this._rawModule.getters && Ar(this._rawModule.getters, e);
};
Ct.prototype.forEachAction = function(e) {
  this._rawModule.actions && Ar(this._rawModule.actions, e);
};
Ct.prototype.forEachMutation = function(e) {
  this._rawModule.mutations && Ar(this._rawModule.mutations, e);
};
Object.defineProperties(Ct.prototype, Yy);
var Or = function(e) {
  this.register([], e, !1);
};
Or.prototype.get = function(e) {
  return e.reduce(function(n, r) {
    return n.getChild(r);
  }, this.root);
};
Or.prototype.getNamespace = function(e) {
  var n = this.root;
  return e.reduce(function(r, o) {
    return n = n.getChild(o), r + (n.namespaced ? o + "/" : "");
  }, "");
};
Or.prototype.update = function(e) {
  Xy([], this.root, e);
};
Or.prototype.register = function(e, n, r) {
  var o = this;
  r === void 0 && (r = !0);
  var i = new Ct(n, r);
  if (e.length === 0)
    this.root = i;
  else {
    var s = this.get(e.slice(0, -1));
    s.addChild(e[e.length - 1], i);
  }
  n.modules && Ar(n.modules, function(a, c) {
    o.register(e.concat(c), a, r);
  });
};
Or.prototype.unregister = function(e) {
  var n = this.get(e.slice(0, -1)), r = e[e.length - 1];
  n.getChild(r).runtime && n.removeChild(r);
};
function Xy(t, e, n) {
  if (e.update(n), n.modules)
    for (var r in n.modules) {
      if (!e.getChild(r))
        return;
      Xy(
        t.concat(r),
        e.getChild(r),
        n.modules[r]
      );
    }
}
var Me, at = function(e) {
  var n = this;
  e === void 0 && (e = {}), !Me && typeof window < "u" && window.Vue && tw(window.Vue);
  var r = e.plugins;
  r === void 0 && (r = []);
  var o = e.strict;
  o === void 0 && (o = !1), this._committing = !1, this._actions = /* @__PURE__ */ Object.create(null), this._actionSubscribers = [], this._mutations = /* @__PURE__ */ Object.create(null), this._wrappedGetters = /* @__PURE__ */ Object.create(null), this._modules = new Or(e), this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null), this._subscribers = [], this._watcherVM = new Me();
  var i = this, s = this, a = s.dispatch, c = s.commit;
  this.dispatch = function(d, h) {
    return a.call(i, d, h);
  }, this.commit = function(d, h, b) {
    return c.call(i, d, h, b);
  }, this.strict = o;
  var u = this._modules.root.state;
  Ds(this, u, [], this._modules.root), nd(this, u), r.forEach(function(f) {
    return f(n);
  });
  var l = e.devtools !== void 0 ? e.devtools : Me.config.devtools;
  l && j3(this);
}, td = { state: { configurable: !0 } };
td.state.get = function() {
  return this._vm._data.$$state;
};
td.state.set = function(t) {
};
at.prototype.commit = function(e, n, r) {
  var o = this, i = is(e, n, r), s = i.type, a = i.payload, c = { type: s, payload: a }, u = this._mutations[s];
  u && (this._withCommit(function() {
    u.forEach(function(f) {
      f(a);
    });
  }), this._subscribers.forEach(function(l) {
    return l(c, o.state);
  }));
};
at.prototype.dispatch = function(e, n) {
  var r = this, o = is(e, n), i = o.type, s = o.payload, a = { type: i, payload: s }, c = this._actions[i];
  if (c) {
    try {
      this._actionSubscribers.filter(function(l) {
        return l.before;
      }).forEach(function(l) {
        return l.before(a, r.state);
      });
    } catch {
    }
    var u = c.length > 1 ? Promise.all(c.map(function(l) {
      return l(s);
    })) : c[0](s);
    return u.then(function(l) {
      try {
        r._actionSubscribers.filter(function(f) {
          return f.after;
        }).forEach(function(f) {
          return f.after(a, r.state);
        });
      } catch {
      }
      return l;
    });
  }
};
at.prototype.subscribe = function(e) {
  return Qy(e, this._subscribers);
};
at.prototype.subscribeAction = function(e) {
  var n = typeof e == "function" ? { before: e } : e;
  return Qy(n, this._actionSubscribers);
};
at.prototype.watch = function(e, n, r) {
  var o = this;
  return this._watcherVM.$watch(function() {
    return e(o.state, o.getters);
  }, n, r);
};
at.prototype.replaceState = function(e) {
  var n = this;
  this._withCommit(function() {
    n._vm._data.$$state = e;
  });
};
at.prototype.registerModule = function(e, n, r) {
  r === void 0 && (r = {}), typeof e == "string" && (e = [e]), this._modules.register(e, n), Ds(this, this.state, e, this._modules.get(e), r.preserveState), nd(this, this.state);
};
at.prototype.unregisterModule = function(e) {
  var n = this;
  typeof e == "string" && (e = [e]), this._modules.unregister(e), this._withCommit(function() {
    var r = rd(n.state, e.slice(0, -1));
    Me.delete(r, e[e.length - 1]);
  }), ew(this);
};
at.prototype.hotUpdate = function(e) {
  this._modules.update(e), ew(this, !0);
};
at.prototype._withCommit = function(e) {
  var n = this._committing;
  this._committing = !0, e(), this._committing = n;
};
Object.defineProperties(at.prototype, td);
function Qy(t, e) {
  return e.indexOf(t) < 0 && e.push(t), function() {
    var n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  };
}
function ew(t, e) {
  t._actions = /* @__PURE__ */ Object.create(null), t._mutations = /* @__PURE__ */ Object.create(null), t._wrappedGetters = /* @__PURE__ */ Object.create(null), t._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var n = t.state;
  Ds(t, n, [], t._modules.root, !0), nd(t, n, e);
}
function nd(t, e, n) {
  var r = t._vm;
  t.getters = {};
  var o = t._wrappedGetters, i = {};
  Ar(o, function(a, c) {
    i[c] = H3(a, t), Object.defineProperty(t.getters, c, {
      get: function() {
        return t._vm[c];
      },
      enumerable: !0
      // for local getters
    });
  });
  var s = Me.config.silent;
  Me.config.silent = !0, t._vm = new Me({
    data: {
      $$state: e
    },
    computed: i
  }), Me.config.silent = s, t.strict && Z3(t), r && (n && t._withCommit(function() {
    r._data.$$state = null;
  }), Me.nextTick(function() {
    return r.$destroy();
  }));
}
function Ds(t, e, n, r, o) {
  var i = !n.length, s = t._modules.getNamespace(n);
  if (r.namespaced && (t._modulesNamespaceMap[s] = r), !i && !o) {
    var a = rd(e, n.slice(0, -1)), c = n[n.length - 1];
    t._withCommit(function() {
      Me.set(a, c, r.state);
    });
  }
  var u = r.context = V3(t, s, n);
  r.forEachMutation(function(l, f) {
    var d = s + f;
    G3(t, d, l, u);
  }), r.forEachAction(function(l, f) {
    var d = l.root ? f : s + f, h = l.handler || l;
    W3(t, d, h, u);
  }), r.forEachGetter(function(l, f) {
    var d = s + f;
    K3(t, d, l, u);
  }), r.forEachChild(function(l, f) {
    Ds(t, e, n.concat(f), l, o);
  });
}
function V3(t, e, n) {
  var r = e === "", o = {
    dispatch: r ? t.dispatch : function(i, s, a) {
      var c = is(i, s, a), u = c.payload, l = c.options, f = c.type;
      return (!l || !l.root) && (f = e + f), t.dispatch(f, u);
    },
    commit: r ? t.commit : function(i, s, a) {
      var c = is(i, s, a), u = c.payload, l = c.options, f = c.type;
      (!l || !l.root) && (f = e + f), t.commit(f, u, l);
    }
  };
  return Object.defineProperties(o, {
    getters: {
      get: r ? function() {
        return t.getters;
      } : function() {
        return U3(t, e);
      }
    },
    state: {
      get: function() {
        return rd(t.state, n);
      }
    }
  }), o;
}
function U3(t, e) {
  var n = {}, r = e.length;
  return Object.keys(t.getters).forEach(function(o) {
    if (o.slice(0, r) === e) {
      var i = o.slice(r);
      Object.defineProperty(n, i, {
        get: function() {
          return t.getters[o];
        },
        enumerable: !0
      });
    }
  }), n;
}
function G3(t, e, n, r) {
  var o = t._mutations[e] || (t._mutations[e] = []);
  o.push(function(s) {
    n.call(t, r.state, s);
  });
}
function W3(t, e, n, r) {
  var o = t._actions[e] || (t._actions[e] = []);
  o.push(function(s, a) {
    var c = n.call(t, {
      dispatch: r.dispatch,
      commit: r.commit,
      getters: r.getters,
      state: r.state,
      rootGetters: t.getters,
      rootState: t.state
    }, s, a);
    return z3(c) || (c = Promise.resolve(c)), t._devtoolHook ? c.catch(function(u) {
      throw t._devtoolHook.emit("vuex:error", u), u;
    }) : c;
  });
}
function K3(t, e, n, r) {
  t._wrappedGetters[e] || (t._wrappedGetters[e] = function(i) {
    return n(
      r.state,
      // local state
      r.getters,
      // local getters
      i.state,
      // root state
      i.getters
      // root getters
    );
  });
}
function Z3(t) {
  t._vm.$watch(function() {
    return this._data.$$state;
  }, function() {
  }, { deep: !0, sync: !0 });
}
function rd(t, e) {
  return e.length ? e.reduce(function(n, r) {
    return n[r];
  }, t) : t;
}
function is(t, e, n) {
  return B3(t) && t.type && (n = e, e = t, t = t.type), { type: t, payload: e, options: n };
}
function tw(t) {
  Me && t === Me || (Me = t, L3(Me));
}
var nw = Fs(function(t, e) {
  var n = {};
  return Ps(e).forEach(function(r) {
    var o = r.key, i = r.val;
    n[o] = function() {
      var a = this.$store.state, c = this.$store.getters;
      if (t) {
        var u = Rs(this.$store, "mapState", t);
        if (!u)
          return;
        a = u.context.state, c = u.context.getters;
      }
      return typeof i == "function" ? i.call(this, a, c) : a[i];
    }, n[o].vuex = !0;
  }), n;
}), rw = Fs(function(t, e) {
  var n = {};
  return Ps(e).forEach(function(r) {
    var o = r.key, i = r.val;
    n[o] = function() {
      for (var a = [], c = arguments.length; c--; )
        a[c] = arguments[c];
      var u = this.$store.commit;
      if (t) {
        var l = Rs(this.$store, "mapMutations", t);
        if (!l)
          return;
        u = l.context.commit;
      }
      return typeof i == "function" ? i.apply(this, [u].concat(a)) : u.apply(this.$store, [i].concat(a));
    };
  }), n;
}), ht = Fs(function(t, e) {
  var n = {};
  return Ps(e).forEach(function(r) {
    var o = r.key, i = r.val;
    i = t + i, n[o] = function() {
      if (!(t && !Rs(this.$store, "mapGetters", t)))
        return this.$store.getters[i];
    }, n[o].vuex = !0;
  }), n;
}), Gt = Fs(function(t, e) {
  var n = {};
  return Ps(e).forEach(function(r) {
    var o = r.key, i = r.val;
    n[o] = function() {
      for (var a = [], c = arguments.length; c--; )
        a[c] = arguments[c];
      var u = this.$store.dispatch;
      if (t) {
        var l = Rs(this.$store, "mapActions", t);
        if (!l)
          return;
        u = l.context.dispatch;
      }
      return typeof i == "function" ? i.apply(this, [u].concat(a)) : u.apply(this.$store, [i].concat(a));
    };
  }), n;
}), J3 = function(t) {
  return {
    mapState: nw.bind(null, t),
    mapGetters: ht.bind(null, t),
    mapMutations: rw.bind(null, t),
    mapActions: Gt.bind(null, t)
  };
};
function Ps(t) {
  return Array.isArray(t) ? t.map(function(e) {
    return { key: e, val: e };
  }) : Object.keys(t).map(function(e) {
    return { key: e, val: t[e] };
  });
}
function Fs(t) {
  return function(e, n) {
    return typeof e != "string" ? (n = e, e = "") : e.charAt(e.length - 1) !== "/" && (e += "/"), t(e, n);
  };
}
function Rs(t, e, n) {
  var r = t._modulesNamespaceMap[n];
  return r;
}
var ow = {
  Store: at,
  install: tw,
  version: "3.1.1",
  mapState: nw,
  mapMutations: rw,
  mapGetters: ht,
  mapActions: Gt,
  createNamespacedHelpers: J3
}, Y3 = 4, X3 = 1e-3, Q3 = 1e-7, eF = 10, Qr = 11, yi = 1 / (Qr - 1), tF = typeof Float32Array == "function";
function iw(t, e) {
  return 1 - 3 * e + 3 * t;
}
function sw(t, e) {
  return 3 * e - 6 * t;
}
function aw(t) {
  return 3 * t;
}
function ss(t, e, n) {
  return ((iw(e, n) * t + sw(e, n)) * t + aw(e)) * t;
}
function cw(t, e, n) {
  return 3 * iw(e, n) * t * t + 2 * sw(e, n) * t + aw(e);
}
function nF(t, e, n, r, o) {
  var i, s, a = 0;
  do
    s = e + (n - e) / 2, i = ss(s, r, o) - t, i > 0 ? n = s : e = s;
  while (Math.abs(i) > Q3 && ++a < eF);
  return s;
}
function rF(t, e, n, r) {
  for (var o = 0; o < Y3; ++o) {
    var i = cw(e, n, r);
    if (i === 0)
      return e;
    var s = ss(e, n, r) - t;
    e -= s / i;
  }
  return e;
}
function oF(t, e, n, r) {
  if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
    throw new Error("bezier x values must be in [0, 1] range");
  var o = tF ? new Float32Array(Qr) : new Array(Qr);
  if (t !== e || n !== r)
    for (var i = 0; i < Qr; ++i)
      o[i] = ss(i * yi, t, n);
  function s(a) {
    for (var c = 0, u = 1, l = Qr - 1; u !== l && o[u] <= a; ++u)
      c += yi;
    --u;
    var f = (a - o[u]) / (o[u + 1] - o[u]), d = c + f * yi, h = cw(d, t, n);
    return h >= X3 ? rF(a, d, t, n) : h === 0 ? d : nF(a, c, c + yi, t, n);
  }
  return function(c) {
    return t === e && n === r ? c : c === 0 ? 0 : c === 1 ? 1 : ss(s(c), e, r);
  };
}
function ge(t, e, n, r, o, i, s, a) {
  var c = typeof t == "function" ? t.options : t;
  e && (c.render = e, c.staticRenderFns = n, c._compiled = !0), r && (c.functional = !0), i && (c._scopeId = "data-v-" + i);
  var u;
  if (s ? (u = function(d) {
    d = d || // cached call
    this.$vnode && this.$vnode.ssrContext || // stateful
    this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext, !d && typeof __VUE_SSR_CONTEXT__ < "u" && (d = __VUE_SSR_CONTEXT__), o && o.call(this, d), d && d._registeredComponents && d._registeredComponents.add(s);
  }, c._ssrRegister = u) : o && (u = a ? function() {
    o.call(
      this,
      (c.functional ? this.parent : this).$root.$options.shadowRoot
    );
  } : o), u)
    if (c.functional) {
      c._injectStyles = u;
      var l = c.render;
      c.render = function(h, b) {
        return u.call(b), l(h, b);
      };
    } else {
      var f = c.beforeCreate;
      c.beforeCreate = f ? [].concat(f, u) : [u];
    }
  return {
    exports: t,
    options: c
  };
}
const iF = {
  name: "AwesomeScrollView",
  props: {
    color: {
      type: String,
      default: "rgba(0,0,0,0.4)"
    },
    isHidden: {
      type: Boolean,
      default: !1
    },
    offsetInterval: {
      type: Number,
      default: 150
    },
    onScrollStopped: {
      type: Function,
      default: () => {
      }
    }
  },
  data() {
    return {
      ticking: !1,
      isScrolling: !1,
      lastKnownScrollPosition: 0
    };
  },
  watch: {
    // watch scroll position about top, for showing/hiding topBar
    lastKnownScrollPosition(t, e) {
      t === 0 ? this.$emit("topIn") : e === 0 && this.$emit("topLeave");
    }
  },
  methods: {
    detectScrollStop() {
      window.clearTimeout(this.scrollTimeout), this.scrollTimeout = setTimeout(() => {
        this.isScrolling = !1, this.onScrollStopped(this.lastKnownScrollPosition);
      }, this.offsetInterval);
    },
    onScroll() {
      try {
        this.lastKnownScrollPosition = this.$refs.asv.scrollTop, this.ticking || window.requestAnimationFrame(() => {
          this.detectScrollStop(), this.ticking = !1;
        }), this.ticking = !0, this.isScrolling = !0;
      } catch {
      }
    },
    ScrollTo(t, e) {
      let n = this.$refs.asv.scrollTop, r = t - n, o;
      const i = this, s = oF(0.61, 0.29, 0.3, 0.97);
      window.requestAnimationFrame(function a(c) {
        o || (o = c);
        var u = c - o, l = Math.min(u / e, 1);
        i.$refs.asv.scrollTop = n + r * s(l), u < e && window.requestAnimationFrame(a);
      });
    }
  }
};
var sF = function() {
  var e = this, n = e._self._c;
  return n("div", { ref: "asv", class: ["awesome-scroll-view", "scrollbar", { isHidden: e.isHidden }], on: { scroll: e.onScroll } }, [e._t("default")], 2);
}, aF = [], cF = /* @__PURE__ */ ge(
  iF,
  sF,
  aF,
  !1,
  null,
  "020b3906",
  null,
  null
);
const uw = cF.exports, Il = "SCROLL_VIEW", Tl = "SCROLL_VIEW_VOL", lw = "BOOK_VIEW", Al = "THUMB_VIEW", fw = "READER_VIEW", dw = "TOP_BAR", Ol = "MODE_FAST", uF = "MODE_ORIGIN", lF = "MODE_CHANGE_SOURCE", hw = "ERROR_NO_ORIGIN", pw = "ID_START", vw = "ID_END", gw = "TYPE_NORMAL", mw = "TYPE_START", _w = "TYPE_END", Ns = "LANG_EN", Ms = "LANG_CN", Ls = "LANG_JP", Dl = "STATE_WAITING", eo = "STATE_LOADING", Pl = "STATE_ERROR", Fl = "STATE_LOADED", as = "DIALOG_NORMAL", xn = "DIALOG_COMPULSIVE", Dt = "DIALOG_OPERATION_PLAIN", bw = "DIALOG_OPERATION_TYPE_NEGATIVE", yw = "DIALOG_OPERATION_TYPE_POSITIVE", ww = "DIALOG_OPERATION_TYPE_WARNING", fF = "TYPE_PROXY", Rl = "KEYBOARD", kw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BOOK_VIEW: lw,
  DIALOG_COMPULSIVE: xn,
  DIALOG_NORMAL: as,
  DIALOG_OPERATION_TYPE_NEGATIVE: bw,
  DIALOG_OPERATION_TYPE_PLAIN: Dt,
  DIALOG_OPERATION_TYPE_POSITIVE: yw,
  DIALOG_OPERATION_TYPE_WARNING: ww,
  ERROR_NO_ORIGIN: hw,
  ID_END: vw,
  ID_START: pw,
  KEYBOARD: Rl,
  LANG_CN: Ms,
  LANG_EN: Ns,
  LANG_JP: Ls,
  MODE_CHANGE_SOURCE: lF,
  MODE_FAST: Ol,
  MODE_ORIGIN: uF,
  READER_VIEW: fw,
  SCROLL_VIEW: Il,
  SCROLL_VIEW_VOL: Tl,
  STATE_ERROR: Pl,
  STATE_LOADED: Fl,
  STATE_LOADING: eo,
  STATE_WAITING: Dl,
  THUMB_VIEW: Al,
  TOP_BAR: dw,
  TYPE_END: _w,
  TYPE_NORMAL: gw,
  TYPE_PROXY: fF,
  TYPE_START: mw
}, Symbol.toStringTag, { value: "Module" }));
const dF = {
  name: "ThumbScrollView",
  inject: ["service"],
  props: {
    thumbInfos: {
      type: Array
    },
    pageCount: {
      type: Number
    }
  },
  components: {
    AwesomeScrollView: uw
  },
  computed: {
    ...ht({
      centerIndex: "curIndex",
      volumeSize: "volumeSize",
      _volFirstIndex: "volFirstIndex",
      readingMode: "readingMode",
      showThumbView: "showThumbView",
      showThumbViewInBook: "showThumbViewInBook",
      readingMode: "readingMode"
    }),
    volFirstIndex() {
      if (this.readingMode === 0)
        return this._volFirstIndex;
      if (this.readingMode === 1)
        return 0;
    },
    // the thumbs of current volume
    volThumbs() {
      if (this.readingMode === 0)
        return this.thumbInfos.slice(this.volFirstIndex, this.volFirstIndex + this.volumeSize);
      if (this.readingMode === 1)
        return this.thumbInfos;
    },
    curIndex() {
      return this.service.album.getRealCurIndexInfo(this.pageCount, this.centerIndex);
    }
  },
  watch: {
    centerIndex: {
      handler: function(t, e) {
        if (this.curIndex.updater !== Al)
          if (this.curIndex.val !== this.volFirstIndex && this.$refs.thumbContainers) {
            let n = this.$refs.thumbContainers.sort((r, o) => r.offsetTop - o.offsetTop);
            n[this.volIndex(this.curIndex.val)] && this.$refs.scrollView.ScrollTo(n[this.volIndex(this.curIndex.val)].offsetTop, 1e3);
          } else
            this.$refs.scrollView.ScrollTo(0, 1e3);
      },
      deep: !0
    }
  },
  methods: {
    ...Gt(["setIndex"]),
    select(t) {
      this.setIndex({ val: t, updater: Al });
    },
    // get index of album for index of current volume
    index(t) {
      return this.volFirstIndex + t;
    },
    // get index of current volume for index of album
    volIndex(t) {
      return t - this.volFirstIndex;
    }
  }
};
var hF = function() {
  var e = this, n = e._self._c;
  return n("aside", { staticClass: "thumb-content" }, [n("awesome-scroll-view", { ref: "scrollView", staticClass: "thumb-scroll-view" }, [n("div", { staticClass: "header" }, [n("span", { staticClass: "app-name" }, [e._v("EHUNTER")])]), n("div", { staticClass: "indicator", style: { top: e.px(160 * (e.curIndex.val - e.volFirstIndex)) } }), e._l(e.volThumbs, function(r, o) {
    return n("div", { key: r.id, ref: "thumbContainers", refInFor: !0, staticClass: "thumb-container", on: { click: function(i) {
      e.select(e.index(o));
    } } }, [e.readingMode === 0 && e.showThumbView || e.readingMode === 1 && e.showThumbViewInBook ? [r.mode === 0 ? n("div", { staticClass: "thumb spirit-mode", style: { background: `transparent url(${r.src}) -${r.offset}px 0 no-repeat` } }) : e._e(), r.mode === 1 ? n("div", { staticClass: "thumb img-mode", style: { background: `transparent url(${r.src}) no-repeat`, "background-size": "contain" } }) : e._e()] : e._e(), n("div", { staticClass: "hover-mask" }), n("div", { staticClass: "index" }, [e._v(e._s(e.index(o) + 1))])], 2);
  })], 2)], 1);
}, pF = [], vF = /* @__PURE__ */ ge(
  dF,
  hF,
  pF,
  !1,
  null,
  "e7ef3538",
  null,
  null
);
const gF = vF.exports;
const mF = {
  name: "Popover",
  props: ["active", "customStyle", "close", "canCancel"],
  data() {
    return {
      timer: {}
    };
  },
  watch: {
    active(t, e) {
      this.canCancel || (t && (this.timer = setTimeout(() => {
        document.addEventListener("click", this.handleOuterClick);
      }, 500)), e && (document.removeEventListener("click", this.handleOuterClick), this.timer && clearTimeout(this.timer)));
    }
  },
  methods: {
    handleOuterClick() {
      this.close && this.close();
    },
    handleClick(t) {
      t.stopPropagation();
    }
  }
};
var _F = function() {
  var e = this, n = e._self._c;
  return n("transition", { attrs: { name: "slide-fade" } }, [e.active ? n("div", { staticClass: "popover", style: e.customStyle, on: { click: function(r) {
    return e.handleClick(r);
  } } }, [e._t("default")], 2) : e._e()]);
}, bF = [], yF = /* @__PURE__ */ ge(
  mF,
  _F,
  bF,
  !1,
  null,
  "59db7328",
  null,
  null
);
const Sw = yF.exports;
const wF = {
  name: "DropOption",
  props: ["list", "change", "curVal"],
  data() {
    return {
      active: !1
    };
  },
  components: { Popover: Sw },
  computed: {},
  methods: {
    select() {
      this.active = !this.active;
    },
    onClick(t) {
      this.select(), this.$emit("change", t);
    },
    close() {
      this.active = !1;
    }
  }
};
var kF = function() {
  var e = this, n = e._self._c;
  return n("div", { staticClass: "drop-option" }, [n("div", { staticClass: "text clickable no-select", on: { click: function(r) {
    return e.select();
  } } }, [e._v(e._s(e.curVal))]), n("svg", { staticClass: "icon-drop-down clickable no-select", attrs: { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" }, on: { click: function(r) {
    return e.select();
  } } }, [n("path", { attrs: { d: "M7 10l5 5 5-5z" } }), n("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } })]), n("popover", { attrs: { active: e.active, "custom-style": { "margin-left": "7px", "margin-top": "4px" }, close: e.close } }, [n("div", { staticClass: "options no-select" }, e._l(e.list, function(r, o) {
    return n("div", { key: r.name || r, staticClass: "item", on: { click: function(i) {
      return e.onClick(o);
    } } }, [n("span", [e._v(e._s(r.name || r))])]);
  }), 0)])], 1);
}, SF = [], xF = /* @__PURE__ */ ge(
  wF,
  kF,
  SF,
  !1,
  null,
  "cd2de473",
  null,
  null
);
const $F = xF.exports;
const EF = {
  name: "Slider",
  props: ["min", "max", "step", "init"],
  data() {
    return {
      val: 0,
      isHolding: !1,
      oldMouseX: 0,
      oldVal: 0,
      widthRatio: 0,
      stepPrecision: 0
    };
  },
  created() {
    this.val = this.init, this.stepPrecision = this.getStepPrecision(this.step);
  },
  computed: {
    fillScale() {
      return (this.val - this.min) / ((this.max - this.min) / 100);
    }
  },
  watch: {
    init() {
      this.val = this.init;
    }
  },
  methods: {
    getWidthRatio() {
      return this.$refs.slider.offsetWidth / (this.max - this.min);
    },
    handleMouseDown(t) {
      this.isHolding = !0, this.handleClick(t), this.oldMouseX = t.clientX, this.oldVal = this.val, this.widthRatio = this.getWidthRatio(), document.addEventListener("mousemove", this.handleMouseMove), document.addEventListener("mouseup", this.handleMouseUp), t.preventDefault();
    },
    handleMouseUp(t) {
      this.isHolding = !1, document.removeEventListener("mousemove", this.handleMouseMove), document.removeEventListener("mouseup", this.handleMouseUp), t.preventDefault();
    },
    handleMouseMove(t) {
      if (this.isHolding) {
        const e = this.oldVal + (t.clientX - this.oldMouseX) / this.widthRatio;
        this.onChange(e);
      }
      t.preventDefault();
    },
    handleClick(t) {
      const e = this.min + t.offsetX / this.getWidthRatio();
      this.onChange(e);
    },
    onChange(t) {
      t > this.max ? this.val = this.getValByStep(this.max) : this.val = this.getValByStep(t < this.min ? this.min : t), this.$emit("change", this.val);
    },
    getStepPrecision(t) {
      return String(String(this.step).match(".[0-9]")).length - 1;
    },
    getValByStep(t) {
      for (let e = this.min; e <= this.max; e = e + this.step)
        if (e > t)
          return e === this.min ? Number(e.toFixed(this.stepPrecision)) : Number((e - this.step).toFixed(this.stepPrecision));
      return this.max;
    }
  }
};
var CF = function() {
  var e = this, n = e._self._c;
  return n("div", { ref: "slider", staticClass: "slider", on: { mousedown: e.handleMouseDown, click: e.handleClick } }, [n("div", { staticClass: "track" }), n("div", { staticClass: "fill", style: { width: e.fillScale + "%" } }), n("div", { staticClass: "thumb", style: { left: e.fillScale + "%", width: e.isHolding ? "15px" : void 0, height: e.isHolding ? "15px" : void 0 } })]);
}, IF = [], TF = /* @__PURE__ */ ge(
  EF,
  CF,
  IF,
  !1,
  null,
  "b19d08a7",
  null,
  null
);
const AF = TF.exports;
const OF = {
  name: "FlatButton",
  props: {
    label: {
      type: String
    },
    mode: {
      // mode: [inline, default]
      type: String,
      default: "default"
    },
    type: {
      // mode: [plain, negative, positive, warning]
      type: String,
      default: "plain"
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick(t) {
      this.$emit("click", t);
    }
  }
};
var DF = function() {
  var e = this, n = e._self._c;
  return n("div", { class: ["flat-button", e.mode] }, [n("a", { class: [e.mode, e.type], on: { click: e.handleClick } }, [e._v(e._s(e.label))])]);
}, PF = [], FF = /* @__PURE__ */ ge(
  OF,
  DF,
  PF,
  !1,
  null,
  "49f3eea6",
  null,
  null
);
const od = FF.exports;
class $n {
  constructor(e, n, r, ...o) {
    this.id = (/* @__PURE__ */ new Date()).getTime(), this.type = e, this.title = n, this.text = r, this.operations = o;
  }
}
class wn {
  constructor(e, n, r) {
    this.name = e, this.type = n, this.onClick = r;
  }
}
const RF = {
  name: "PopSlider",
  props: ["active", "min", "max", "step", "init", "isFloat", "close"],
  components: { Popover: Sw, Slider: AF, FlatButton: od },
  data() {
    return {
      value: 0
    };
  },
  created() {
    this.value = this.init;
  },
  watch: {
    init() {
      this.value = this.init;
    }
  },
  computed: {
    ...ht(["string"])
  },
  methods: {
    ...Gt([
      "addDialog"
    ]),
    handleClick() {
      this.handleInput(), this.close();
    },
    change(t) {
      this.$emit("change", t);
    },
    handleInput() {
      if (this.$refs.inputElem.blur(), this.isFloat || (this.value = Math.floor(this.value)), this.value < this.min || this.value > this.max) {
        this.value = this.init;
        let t = new $n(
          xn,
          this.string.tips,
          this.string.numberInputTip.replace("{{min}}", this.min).replace("{{max}}", this.max),
          new wn(this.string.confirm, Dt, () => !0)
        );
        this.addDialog(t);
      } else
        this.$emit("change", this.value);
    },
    watchKeyboard(t) {
      t.key === "Enter" && this.handleInput();
    },
    stopArrowEvent(t) {
      (t.key === "ArrowLeft" || t.key === "ArrowRight") && t.stopPropagation();
    }
  }
};
var NF = function() {
  var e = this, n = e._self._c;
  return n("popover", { staticClass: "PopSlider", attrs: { active: e.active, close: e.close } }, [n("div", { staticClass: "content", on: { keydown: e.stopArrowEvent } }, [n("input", { directives: [{ name: "model", rawName: "v-model", value: e.value, expression: "value" }], ref: "inputElem", staticClass: "value", attrs: { type: "number" }, domProps: { value: e.value }, on: { keydown: e.watchKeyboard, input: function(r) {
    r.target.composing || (e.value = r.target.value);
  } } }), n("slider", { staticClass: "slider", attrs: { min: e.min, max: e.max, step: e.step, init: e.init }, on: { change: e.change } }), n("flat-button", { staticClass: "button", attrs: { label: e.string.confirm, type: "positive" }, on: { click: e.handleClick } })], 1)]);
}, MF = [], LF = /* @__PURE__ */ ge(
  RF,
  NF,
  MF,
  !1,
  null,
  "0feb601e",
  null,
  null
);
const qF = LF.exports;
const jF = {
  name: "SimpleSwitch",
  props: {
    active: {
      type: Boolean
    },
    change: {
      type: Function,
      default: () => {
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    handleClick() {
      this.$emit("change", !this.active);
    }
  }
};
var BF = function() {
  var e = this, n = e._self._c;
  return n("div", { staticClass: "switch", on: { click: e.handleClick } }, [n("div", { class: { track: !0, active: e.active } }), n("div", { class: { thumb: !0, active: e.active } })]);
}, zF = [], HF = /* @__PURE__ */ ge(
  jF,
  BF,
  zF,
  !1,
  null,
  "18b37812",
  null,
  null
);
const VF = HF.exports;
const UF = {
  name: "CircleIconButton",
  props: {
    icon: {
      // [menu, close, expand]
      type: String
    },
    rotate: {
      type: Boolean,
      default: !1
    }
  },
  methods: {
    handleClick(t) {
      this.$emit("click", t);
    }
  }
};
var GF = function() {
  var e = this, n = e._self._c;
  return n("div", { staticClass: "circle-icon-button", on: { click: e.handleClick } }, [n("svg", { class: { rotate: e.rotate }, attrs: { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" } }, [e.icon === "menu" ? [n("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } }), n("path", { attrs: { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" } })] : e._e(), e.icon === "close" ? [n("path", { attrs: { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" } }), n("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } })] : e._e(), e.icon === "expand" ? [n("path", { attrs: { fill: "none", d: "M0 0h24v24H0V0z" } }), n("path", { attrs: { d: "M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z" } })] : e._e()], 2)]);
}, WF = [], KF = /* @__PURE__ */ ge(
  UF,
  GF,
  WF,
  !1,
  null,
  "115df32b",
  null,
  null
);
const ZF = KF.exports;
class e_ {
  constructor(e) {
    this.name = "NotFoundError", this.message = `Not Found! Params: ${e}`, this.stack = new Error().stack;
  }
}
class t_ {
  constructor(e) {
    this.name = "ExpiredError", this.message = `Expired! Params: ${e}`, this.stack = new Error().stack;
  }
}
class JF {
  constructor(e = {}) {
    if (this._SIZE = e.size || 1e3, this.sync = e.sync || {}, this.defaultExpires = e.defaultExpires !== void 0 ? e.defaultExpires : 1e3 * 3600 * 24, this.enableCache = e.enableCache !== !1, this._s = e.storageBackend || null, this._innerVersion = 11, this.cache = {}, this._s && this._s.setItem)
      try {
        var n = this._s.setItem("__react_native_storage_test", "test");
        this.isPromise = !!(n && n.then);
      } catch (r) {
        throw console.warn(r), delete this._s, r;
      }
    else
      console.warn(`Data would be lost after reload cause there is no storageBackend specified!
      
Either use localStorage(for web) or AsyncStorage(for React Native) as a storageBackend.`);
    this._mapPromise = this.getItem("map").then((r) => {
      this._m = this._checkMap(r && JSON.parse(r) || {});
    });
  }
  getItem(e) {
    return this._s ? this.isPromise ? this._s.getItem(e) : Promise.resolve(this._s.getItem(e)) : Promise.resolve();
  }
  setItem(e, n) {
    return this._s ? this.isPromise ? this._s.setItem(e, n) : Promise.resolve(this._s.setItem(e, n)) : Promise.resolve();
  }
  removeItem(e) {
    return this._s ? this.isPromise ? this._s.removeItem(e) : Promise.resolve(this._s.removeItem(e)) : Promise.resolve();
  }
  _initMap() {
    return {
      innerVersion: this._innerVersion,
      index: 0,
      __keys__: {}
    };
  }
  _checkMap(e) {
    return e && e.innerVersion && e.innerVersion === this._innerVersion ? e : this._initMap();
  }
  _getId(e, n) {
    return e + "_" + n;
  }
  _saveToMap(e) {
    let { key: n, id: r, data: o } = e, i = this._getId(n, r), s = this._m;
    if (s[i] !== void 0)
      return this.enableCache && (this.cache[i] = JSON.parse(o)), this.setItem("map_" + s[i], o);
    if (s[s.index] !== void 0) {
      let c = s[s.index], u = c.split("_");
      delete s[c], this._removeIdInKey(u[0], u[1]), this.enableCache && delete this.cache[c];
    }
    if (s[i] = s.index, s[s.index] = i, s.__keys__[n] = s.__keys__[n] || [], s.__keys__[n].push(r), this.enableCache) {
      const c = JSON.parse(o);
      this.cache[i] = c;
    }
    let a = s.index;
    ++s.index === this._SIZE && (s.index = 0), this.setItem("map_" + a, o), this.setItem("map", JSON.stringify(s));
  }
  save(e) {
    const { key: n, id: r, data: o, rawData: i, expires: s = this.defaultExpires } = e;
    n.toString().indexOf("_") !== -1 && console.error('Please do not use "_" in key!');
    let a = { rawData: o };
    if (o === void 0)
      if (i !== void 0)
        console.warn('"rawData" is deprecated, please use "data" instead!'), a.rawData = i;
      else {
        console.error('"data" is required in save()!');
        return;
      }
    let c = (/* @__PURE__ */ new Date()).getTime();
    if (s !== null && (a.expires = c + s), a = JSON.stringify(a), r === void 0) {
      if (this.enableCache) {
        const u = JSON.parse(a);
        this.cache[n] = u;
      }
      return this.setItem(n, a);
    } else
      return r.toString().indexOf("_") !== -1 && console.error('Please do not use "_" in id!'), this._mapPromise.then(() => this._saveToMap({
        key: n,
        id: r,
        data: a
      }));
  }
  getBatchData(e) {
    let n = [];
    for (let r = 0, o; o = e[r]; r++)
      n[r] = this.load(o);
    return Promise.all(n);
  }
  getBatchDataWithIds(e) {
    let { key: n, ids: r, syncInBackground: o } = e;
    return Promise.all(
      r.map((i) => this.load({ key: n, id: i, syncInBackground: o, autoSync: !1, batched: !0 }))
    ).then((i) => new Promise((s, a) => {
      const c = i.filter((u) => u.syncId !== void 0);
      return c.length ? this.sync[n]({
        id: c.map((u) => u.syncId),
        resolve: s,
        reject: a
      }) : s();
    }).then((s) => i.map((a) => a.syncId ? s.shift() : a)));
  }
  _lookupGlobalItem(e) {
    let n, { key: r } = e;
    return this.enableCache && this.cache[r] !== void 0 ? (n = this.cache[r], this._loadGlobalItem({ ret: n, ...e })) : this.getItem(r).then((o) => this._loadGlobalItem({ ret: o, ...e }));
  }
  _loadGlobalItem(e) {
    let { key: n, ret: r, autoSync: o, syncInBackground: i, syncParams: s } = e;
    if (r == null)
      return o && this.sync[n] ? new Promise((c, u) => this.sync[n]({ resolve: c, reject: u, syncParams: s })) : Promise.reject(new e_(JSON.stringify(e)));
    typeof r == "string" && (r = JSON.parse(r), this.enableCache && (this.cache[n] = r));
    let a = (/* @__PURE__ */ new Date()).getTime();
    return r.expires < a ? o && this.sync[n] ? i ? (this.sync[n]({ syncParams: s }), Promise.resolve(r.rawData)) : new Promise((c, u) => this.sync[n]({ resolve: c, reject: u, syncParams: s })) : Promise.reject(new t_(JSON.stringify(e))) : Promise.resolve(r.rawData);
  }
  _noItemFound(e) {
    let { key: n, id: r, autoSync: o, syncParams: i } = e;
    return this.sync[n] ? o ? new Promise((s, a) => this.sync[n]({ id: r, syncParams: i, resolve: s, reject: a })) : Promise.resolve({ syncId: r }) : Promise.reject(new e_(JSON.stringify(e)));
  }
  _loadMapItem(e) {
    let { ret: n, key: r, id: o, autoSync: i, batched: s, syncInBackground: a, syncParams: c } = e;
    if (n == null)
      return this._noItemFound(e);
    if (typeof n == "string") {
      n = JSON.parse(n);
      const { key: l, id: f } = e, d = this._getId(l, f);
      this.enableCache && (this.cache[d] = n);
    }
    let u = (/* @__PURE__ */ new Date()).getTime();
    return n.expires < u ? i && this.sync[r] ? a ? (this.sync[r]({ id: o, syncParams: c }), Promise.resolve(n.rawData)) : new Promise((l, f) => this.sync[r]({ id: o, resolve: l, reject: f, syncParams: c })) : s ? Promise.resolve({ syncId: o }) : Promise.reject(new t_(JSON.stringify(e))) : Promise.resolve(n.rawData);
  }
  _lookUpInMap(e) {
    let n = this._m, r, { key: o, id: i } = e, s = this._getId(o, i);
    return this.enableCache && this.cache[s] ? (r = this.cache[s], this._loadMapItem({ ret: r, ...e })) : n[s] !== void 0 ? this.getItem("map_" + n[s]).then((a) => this._loadMapItem({ ret: a, ...e })) : this._noItemFound({ ret: r, ...e });
  }
  remove(e) {
    return this._mapPromise.then(() => {
      let n = this._m, { key: r, id: o } = e;
      if (o === void 0)
        return this.enableCache && this.cache[r] && delete this.cache[r], this.removeItem(r);
      let i = this._getId(r, o);
      if (n[i] !== void 0) {
        this.enableCache && this.cache[i] && delete this.cache[i], this._removeIdInKey(r, o);
        let s = n[i];
        return delete n[i], this.setItem("map", JSON.stringify(n)), this.removeItem("map_" + s);
      }
    });
  }
  _removeIdInKey(e, n) {
    let r = (this._m.__keys__[e] || []).indexOf(n);
    r !== -1 && this._m.__keys__[e].splice(r, 1);
  }
  load(e) {
    let { key: n, id: r, autoSync: o = !0, syncInBackground: i = !0, syncParams: s } = e;
    return this._mapPromise.then(() => new Promise((a, c) => a(r === void 0 ? this._lookupGlobalItem({
      key: n,
      resolve: a,
      reject: c,
      autoSync: o,
      syncInBackground: i,
      syncParams: s
    }) : this._lookUpInMap({
      key: n,
      id: r,
      resolve: a,
      reject: c,
      autoSync: o,
      syncInBackground: i,
      syncParams: s
    }))));
  }
  clearMap() {
    this.removeItem("map").then(() => {
      this._m = this._initMap();
    });
  }
  clearMapForKey(e) {
    return this._mapPromise.then(() => {
      let n = (this._m.__keys__[e] || []).map((r) => this.remove({ key: e, id: r }));
      return Promise.all(n);
    });
  }
  getIdsForKey(e) {
    return this._mapPromise.then(() => this._m.__keys__[e] || []);
  }
  getAllDataForKey(e, n) {
    return n = Object.assign({ syncInBackground: !0 }, n), this.getIdsForKey(e).then((r) => {
      let o = r.map((i) => ({ key: e, id: i, syncInBackground: n.syncInBackground }));
      return this.getBatchData(o);
    });
  }
}
class YF {
  logText(e, n) {
    console.log(`%c[${e}] %c${n}`, "color:red", "color:black");
  }
  logObj(e, n, r = !1) {
    this.logText(e, ":"), console.log(r ? JSON.parse(JSON.stringify(n)) : n), this.logText(e, "----------");
  }
}
let Rt = new YF();
function XF(t) {
  return {
    async getItem(e) {
      return new Promise((n, r) => {
        Rt.logText("Storage", `get ${e}`), t.get(e, (o) => {
          typeof o[e] < "u" ? n(o[e]) : (Rt.logText("Storage", `This key--${e} doesn't exist`), n(null));
        });
      });
    },
    async setItem(e, n) {
      return new Promise((r, o) => {
        e ? t.set({
          [e]: n
        }, () => {
          Rt.logText("Storage", `chrome saved ${e}`), r();
        }) : Rt.logText("Storage", `ERROR: setItem, key is null, ${n}`);
      });
    },
    async removeItem(e) {
      return new Promise((n, r) => {
        t.remove(e, () => {
          Rt.logText("Storage", `chrome removed ${e}`), n();
        });
      });
    }
  };
}
class QF extends JF {
  constructor(e = {}) {
    e.storageBackend.constructor.name === "StorageArea" && (e.storageBackend = XF(e.storageBackend)), super(e);
  }
}
if (typeof kn > "u")
  var kn = { extension: null };
const xw = {
  storage: {
    get sync() {
      return kn && kn.storage ? kn.storage.sync.QUOTA_BYTES ? kn.storage.sync : kn.storage.local : window.localStorage;
    },
    local: window.localStorage
  },
  getExtension() {
    return kn.extension;
  },
  fetch(t, e) {
    return typeof GM_info < "u" && GM_info.version ? new Promise((n, r) => {
      (typeof GM_xmlhttpRequest > "u" ? GM.xmlHttpRequest : GM_xmlhttpRequest)({
        method: e.method,
        url: t,
        onload: (i) => {
          let s = i.responseText;
          i.text = async function() {
            return s;
          }, n(i);
        },
        onerror: (i) => {
          r(`GM_xhr error, ${i.status}`);
        }
      });
    }) : window.fetch(t, e);
  }
};
let mt = new QF({
  size: 10,
  storageBackend: xw.storage.local,
  defaultExpires: null,
  enableCache: !0,
  sync: {}
});
const wi = {
  lang: {
    cn: "CN",
    en: "EN",
    jp: "JP"
  },
  readingMode: {
    cn: "阅读模式",
    en: "Mode",
    jp: "モード"
  },
  readingModeTip: {
    cn: "设置阅读模式",
    en: "Change reading mode",
    jp: "読むモードを変更する"
  },
  scrollMode: {
    cn: "滚动",
    en: "Scroll",
    jp: "スクロール"
  },
  bookMode: {
    cn: "书页",
    en: "Book",
    jp: "ページ"
  },
  widthScale: {
    cn: "页面比例",
    en: "Page scale",
    jp: "ページの割合"
  },
  widthScaleTip: {
    cn: "设置页面比例",
    en: "Change page scale",
    jp: "ページの割合を設定"
  },
  custom: {
    cn: "自定义",
    en: "Custom",
    jp: "カスタム"
  },
  loadNum: {
    cn: "加载页数",
    en: "Loading quantity",
    jp: "積載量"
  },
  loadNumTip: {
    cn: "越大则对网络质量要求越高",
    en: "The greater quantity, the higher requirement of network quality",
    jp: "数字が大きいほど、ネットワーク品質の要件が高くなります"
  },
  volSize: {
    cn: "分卷页数",
    en: "Volume size",
    jp: "ボリュームサイズ"
  },
  volSizeTip: {
    cn: "设置过大会导致卡顿",
    en: "If too big, the program will be slow",
    jp: "大きすぎると、プログラムは遅くなります"
  },
  thumbView: {
    cn: "缩略图栏",
    en: "Thumbnail",
    jp: "サムネイル"
  },
  thumbViewTip: {
    cn: "开启/关闭缩略图栏",
    en: "Show/hide the column of thumbnail",
    jp: "サムネイルの列を表示または非表示"
  },
  screenSize: {
    cn: "同屏页数",
    en: "Pages/screen",
    jp: "ページ/画面"
  },
  screenSizeTip: {
    cn: "一个屏幕下的页数",
    en: "The number of pages on the screen",
    jp: "画面上のページ数"
  },
  bookDirection: {
    cn: "阅读方向",
    en: "Direction",
    jp: "読み取り方向"
  },
  bookDirectionTip: {
    cn: "阅读方向",
    en: "Reading direction",
    jp: "読み取り方向"
  },
  rtl: {
    cn: "RTL (从右到左)",
    en: "RTL (Right To Left)",
    jp: "RTL (右から左に)"
  },
  ltr: {
    cn: "LTR (从左到右)",
    en: "LTR (Left to Right)",
    jp: "LTR (左から右へ)"
  },
  pagination: {
    cn: "页目录",
    en: "Pagination",
    jp: "ページネーション"
  },
  paginationTip: {
    cn: "显示/隐藏底部悬浮页目录",
    en: "Show/hide the bottom floating pagination",
    jp: "ボトムフローティングページネーションの表示/非表示"
  },
  bookAnimation: {
    cn: "换页动画",
    en: "Sliding animation",
    jp: "アニメーション"
  },
  bookAnimationTip: {
    cn: "开启/关闭换页时的滑动动画(测试中)",
    en: "show/hide the sliding animation when changing location(Beta)",
    jp: "場所を変更するときのスライドアニメーションの表示/非表示(测试中)"
  },
  reverseFlip: {
    cn: "反转翻页",
    en: "Reverse flip",
    jp: "反転フリップ"
  },
  reverseFlipTip: {
    cn: "反转翻页方向",
    en: "Reverse page turning direction",
    jp: "ページめくり方向を逆にする"
  },
  autoFlip: {
    cn: "自动翻页",
    en: "Auto",
    jp: "自動ページめくり"
  },
  autoFlipTip: {
    cn: "自动翻页",
    en: "Automatic page turning",
    jp: "自動ページめくり"
  },
  autoFlipFrequency: {
    cn: "翻页频率",
    en: "Frequency",
    jp: "頻度"
  },
  autoFlipFrequencyTip: {
    cn: "自动翻页的频率",
    en: "Automatic page turning frequency",
    jp: "自動ページめくり頻度"
  },
  refresh: {
    cn: "刷新",
    en: "Refresh",
    jp: "リフレッシュ"
  },
  refreshTip: {
    cn: "再次获取普通图片",
    en: "Refresh to load normal image",
    jp: "リフレッシュ; 通常の画像を読み込みます"
  },
  originImg: {
    cn: "原图",
    en: "Original",
    jp: "元画像"
  },
  originImgTip: {
    cn: "加载原图",
    en: "Load original image",
    jp: "元画像を読み込む"
  },
  refreshByOtherSource: {
    cn: "换源刷新",
    en: "Other source",
    jp: "他のサーバー"
  },
  refreshByOtherSourceTip: {
    cn: "从其他服务器获取普通图片",
    en: "Load normal image from other server",
    jp: "他のサーバーから通常の画像を取得する"
  },
  loadingImg: {
    cn: "加载图片中...",
    en: "Loading image...",
    jp: "画像を読み込む.."
  },
  loadingImgUrl: {
    cn: "加载图片地址中...",
    en: "Loading image url..",
    jp: "画像URLを読み込む.."
  },
  reload: {
    cn: "重载",
    en: "Reload",
    jp: "リロード"
  },
  loadingImgFailed: {
    cn: "加载图片失败, 请刷新",
    en: "Loading failed, please refresh",
    jp: "読み込みに失敗しました。更新してください"
  },
  noOriginalImg: {
    cn: "无原图, 请刷新",
    en: "No original Image, please refresh",
    jp: "オリジナルイメージはありません。リフレッシュしてください"
  },
  loadingFailed: {
    cn: "加载错误",
    en: "Loading failed",
    jp: "読み込み失敗"
  },
  imgLoaded: {
    cn: "图片加载完成",
    en: "Image loaded",
    jp: "画像が読み込まれた"
  },
  waiting: {
    cn: "等待中..",
    en: "Waiting..",
    jp: "待っている.."
  },
  fullScreen: {
    cn: "全屏",
    en: "Full screen",
    jp: "全画面表示"
  },
  closeEHunter: {
    cn: "关闭eHunter",
    en: "Close eHunter",
    jp: "eHunter閉じる"
  },
  toggleTopBar: {
    cn: "显示/隐藏顶栏 [Esc]",
    en: "Show/hide top bar [Esc]",
    jp: "トップバーの表示/非表示 [Esc]"
  },
  toggleMoreSettings: {
    cn: "显示/隐藏更多设置 [Shift]",
    en: "Show/hide more settings [Shift]",
    jp: "他の設定を表示/隠す [Shift]"
  },
  confirm: {
    cn: "确定",
    en: "CONFIRM",
    jp: "確認"
  },
  cancel: {
    cn: "取消",
    en: "CANCEL",
    jp: "取り消し"
  },
  infoTip: {
    cn: "查看说明和关于",
    en: "Look the Instructions and About",
    jp: "指示と情報を見てください"
  },
  resetTip: {
    cn: "重置缓存和数据",
    en: "Reset cache and data",
    jp: "Reset cache and data"
  },
  githubTip: {
    cn: "前往项目主页(Github)",
    en: "Go to the project home page(Github)",
    jp: "プロジェクトのホームページに行く(Github)"
  },
  instructionsAndAbouts: {
    cn: "说明和关于",
    en: "Instructions & About",
    jp: "説明と概要"
  },
  instructions: {
    cn: "说明",
    en: "Instructions",
    jp: "説明"
  },
  later: {
    cn: "以后再说",
    en: "LATER",
    jp: "後で"
  },
  changingToSmallFailed: {
    cn: '无缝切换至`"Normal"`模式失败，可能是网络错误，可刷新重试或者返回前一页将预览图的大小模式切换为`"Normal"`。',
    en: 'Changing to `"Normal"` mode failed, because of poor network. You can reload this page or go back to previous page and change the mode of thumbnails to `"Normal"`',
    jp: "ネットワークが不十分であるため、`「Normal」`モードに変更できませんでした。 このページをリロードするか、前のページに戻ってサムネイルのモードを`「Normal」`に変更することができます"
  },
  loadingTip: {
    cn: "在前页采用Normal模式查看缩略图可加速加载",
    en: 'You can use "Normal" mode of thumbnail in previous page to accelerate the load.',
    jp: "前のページでサムネイルの「Normal」モードを使用して、読み込みを高速化できます。"
  },
  versionUpdate: {
    cn: "版本更新说明",
    en: "The update of this version",
    jp: "このバージョンの更新"
  },
  loadingFailedAndRefresh: {
    cn: "加载错误, 刷新重试",
    en: "Loading failed, please refresh to retry",
    jp: "読み込みに失敗しました。もう一度試してください"
  },
  failedMsg: {
    cn: "错误信息",
    en: "Error message",
    jp: "エラーメッセージ"
  },
  version: {
    cn: "版本",
    en: "Version",
    jp: "Version"
  },
  ContractAuthor: {
    cn: "联系作者",
    en: "Contact author",
    jp: "作者に連絡する"
  },
  wheelSensitivity: {
    cn: "滚轮翻页",
    en: "Wheel flip",
    jp: "ホイール"
  },
  wheelSensitivityTip: {
    cn: "鼠标滚轮翻页灵敏度",
    en: "Wheel sensitivity",
    jp: "ホイール感度"
  },
  wheelDirection: {
    cn: "滚轮方向",
    en: "Wheel Direction",
    jp: "ホイール方向"
  },
  wheelDirectionTip: {
    cn: "反转滚轮翻页方向",
    en: "Reverse Wheel Direction to flip",
    jp: "リバースホイール方向"
  },
  tips: {
    cn: "提示",
    en: "TIPS",
    jp: "ヒント"
  },
  numberInputTip: {
    cn: "最小值为`{{min}}`, 最大值为`{{max}}`",
    en: "The minimum is `{{min}}` and the maximum is `{{max}}`",
    jp: "最小は`{{min}}`, 最大は`{{max}}`です"
  },
  pageMargin: {
    cn: "页间隔",
    en: "Page spacing",
    jp: "ページ間隔"
  },
  pageMarginTip: {
    cn: "页间隔",
    en: "Page spacing",
    jp: "ページ間隔"
  },
  oddEven: {
    cn: "奇偶切换",
    en: "Odd/Even",
    jp: "奇/偶"
  },
  oddEvenTip: {
    cn: "切换奇偶页拼接",
    en: "Switching odd or even page stitching",
    jp: "奇数または偶数ページステッチの切り替え"
  }
}, tu = {
  cn: "\n1.Change language/切换语言/言語を変更\n![image-language](https://raw.githubusercontent.com/hanFengSan/eHunter/master/github_image/language.jpg)\n\n1.显示/隐藏顶栏和关闭eHunter\n![image-topbar_close](https://raw.githubusercontent.com/hanFengSan/eHunter/master/github_image/topbar_close.jpg)\n\n2.在页面右上角点击打开eHunter\n![image-open_ehunter](https://raw.githubusercontent.com/hanFengSan/eHunter/master/github_image/open_ehunter.jpg)\n\n3.`滚动`模式下, 支持`A`. `D`, `Left(左)`和`Right(右)`键翻页. \n\n4.`书页`模式下, 支持`A`. `D`, `Left(左)`, `Right(右)`和`Space(空格)`键翻页. 你也可以用鼠标滚轮翻页.\n\n5.`分卷页数`对性能要求较高,请不要设置过高,可能会导致卡顿.\n\n6.在前页采用`Normal`模式查看缩略图可加速加载, 使用`Large`模式会慢一些.\n",
  en: "\n1.Change language/切换语言/言語を変更\n![image-language](https://raw.githubusercontent.com/hanFengSan/eHunter/master/github_image/language.jpg)\n\n1.Show/hide top bar and close the eHunter\n![image-topbar_close](https://raw.githubusercontent.com/hanFengSan/eHunter/master/github_image/topbar_close.jpg)\n\n2.Click the button at the upper right corner of this page to open the eHunter\n![image-open_ehunter](https://raw.githubusercontent.com/hanFengSan/eHunter/master/github_image/open_ehunter.jpg)\n\n3.When the `Mode` is `Scroll`, you can use the keyboard's `A`, `D`, `Left` and `Right` keys to page.\n\n4.When the `Mode` is `Book`, you can use the keyboard's `A`, `D`, `Left`, `Right` and `Space` keys to page. You also can use mouse wheel to page.\n\n5.This is a high performance requirements on `Volume size`. If too big, the program will be slow.\n\n6.You can use `Normal` mode of thumbnail in previous page to accelerate the load. If it's `Large` mode, the loading will be slow a bit.\n",
  jp: "\n1.Change language/切换语言/言語を変更\n![image-language](https://raw.githubusercontent.com/hanFengSan/eHunter/master/github_image/language.jpg)\n\n1.トップバーを表示/非表示にしてeHunterを閉じる\n![image-topbar_close](https://raw.githubusercontent.com/hanFengSan/eHunter/master/github_image/topbar_close.jpg)\n\n2.このページの右上隅にあるボタンをクリックしてeHunterを開きます\n![image-open_ehunter](https://raw.githubusercontent.com/hanFengSan/eHunter/master/github_image/open_ehunter.jpg)\n\n3.When the `Mode` is `Scroll`, you can use the keyboard's `A`, `D`, `Left` and `Right` keys to page.\n\n4.When the `Mode` is `Book`, you can use the keyboard's `A`, `D`, `Left`, `Right` and `Space` keys to page. マウスホイールを使用してページを移動することもできます。\n\n5.これは`ボリュームサイズ`の高性能要件です。 大きすぎるとプログラムが遅くなります。\n\n6.前のページのサムネイルの「Normal」モードを使用して負荷を高速化することができます。「Large」モードの場合は、読み込みが少し遅くなります。\n"
}, nu = {
  cn: "\n支持`A`. `D`, `Left(左)`, `Right(右)`和`Space(空格)`键或者鼠标滚轮翻页.\n",
  en: "\nYou can use the keyboard's `A`, `D`, `Left`, `Right` and `Space` keys or mouse wheel to page. \n",
  jp: "\nYou can use the keyboard's `A`, `D`, `Left`, `Right` and `Space` keys or mouse wheel to page. \n"
}, ru = {
  cn: `
* 修复exhentai的缩略图显示

### iPad支持
* 目前在iOS 15/iPadOS 15上可以运行油猴脚本了，因此eHunter也能成功在iPad上使用
* 目前没有在UI上做移动端适配，因此比较适合iPad使用，看看大家的需求再决定要不要对iPhone做UI优化
* 使用指南: [链接](https://github.com/hanFengSan/eHunter/blob/master/ipad_cn.md)

### eHunter-local
eHunter-local是eHunter的本地版本, 支持Windows和MacOS. [项目主页](https://github.com/hanFengSan/eHunter_local)

[Github下载](https://github.com/hanFengSan/eHunter_local/releases) [百度网盘](https://pan.baidu.com/s/1wEnBe9uGoBKzNd4DCfbuAg) 提取码: czft

`,
  en: `
* Fixed thumbnail problem in the exhentai

### Use in iPad
* The greasymonkey/tampermonkey script can run on iOS 15/iPadOS 15, so the eHunter also can run on iPad now
* I don't optimize the UX on mobile platform yet, so it may be have a bad UX on iPhone.
* Guide: [Link](https://github.com/hanFengSan/eHunter/blob/master/ipad_en.md)

### eHunter-local
The eHunter-local is local version of eHunter, supporting Windows and MacOS. [Home Page](https://github.com/hanFengSan/eHunter_local)

[Github releases](https://github.com/hanFengSan/eHunter_local/releases)

`,
  jp: `
* Fixed thumbnail problem in the exhentai

### Use in iPad
* The greasymonkey/tampermonkey script can run on iOS 15/iPadOS 15, so the eHunter also can run on iPad now.
* I don't optimize the UX on mobile platform yet, so it may be have a bad UX on iPhone.
* Guide: [Link](https://github.com/hanFengSan/eHunter/blob/master/ipad_en.md)

### eHunter-local
eHunter-localはeHunterのローカル版で、WindowsとMacOSをサポートしています。[Home Page](https://github.com/hanFengSan/eHunter_local)

[Github releases](https://github.com/hanFengSan/eHunter_local/releases)
`
};
class eR {
  constructor() {
    this.cn = {}, this.en = {}, this.jp = {}, this.initString();
  }
  initString() {
    for (let e in wi)
      this.cn[e] = wi[e].cn, this.en[e] = wi[e].en, this.jp[e] = wi[e].jp;
    this.cn.p_instruction = tu.cn, this.en.p_instruction = tu.en, this.jp.p_instruction = tu.jp, this.cn.p_bookInstruction = nu.cn, this.en.p_bookInstruction = nu.en, this.jp.p_bookInstruction = nu.jp, this.cn.p_version = ru.cn, this.en.p_version = ru.en, this.jp.p_version = ru.jp;
  }
}
let qi = new eR();
const $w = "SET_INDEX", Ew = "SET_ALBUM_WIDTH", Cw = "TOGGLE_THUMB_VIEW", Iw = "TOGGLE_SYNC_SCROLL", Tw = "TOGGLE_SHOW_TOP_BAR", Aw = "SET_LOAD_NUM", Ow = "SET_VOLUME_SIZE", Dw = "SET_BOOK_INDEX", Pw = "SET_READING_MODE", Fw = "SET_BOOK_SCREEN_ANIMATION", Rw = "SET_BOOK_PAGINATION", Nw = "SET_BOOK_DIRECTION", Mw = "SET_BOOK_SCREEN_SIZE", Lw = "TOGGLE_MORE_SETTINGS", qw = "SET_REVERSE_FLIP", jw = "SET_AUTO_FLIP", Bw = "SET_AUTO_FLIP_FREQUENCY", zw = "TOGGLE_THUMB_VIEW_IN_BOOK", Hw = "SET_WHEEL_SENSITIVITY", Vw = "SET_WHEEL_DIRECTION", Uw = "SET_SCROLLED_PAGE_MARGIN", Gw = "SET_ODD_EVEN", Ww = "SET_STRING", Kw = "ADD_DIALOG", Zw = "REMOVE_DIALOG", tR = {
  string: qi.en
}, nR = {
  string: (t) => t.string
}, rR = {
  setString({ commit: t }, e) {
    t(Ww, { langCode: e });
  }
}, oR = {
  [Ww](t, { langCode: e }) {
    switch (e) {
      case Ms:
        t.string = qi.cn;
        break;
      case Ns:
        t.string = qi.en;
        break;
      case Ls:
        t.string = qi.jp;
        break;
    }
  }
}, iR = {
  state: tR,
  getters: nR,
  actions: rR,
  mutations: oR
}, sR = {
  curIndex: { val: 0, updater: "" },
  // current index of page
  readingMode: 1,
  // 0: scroll mode, 1: book mode
  volumeSize: 10,
  // the page quantity per volume
  volumePreloadCount: 2,
  // the preload count of page of next volume
  topBarHeight: 40,
  // px, for calc
  thumb: {
    width: 150,
    // px
    thumbView: !0
    // show/hide the column of thumbnail
  },
  album: {
    width: 80,
    // percent, the scale of img
    toggleSyncScroll: !0,
    // unused
    showTopBar: !0,
    loadNum: 3,
    // the sum of pages per loading
    scrolledPageMargin: 70
  },
  book: {
    bookIndex: 0,
    // index of screens
    screenSize: 2,
    // the page quantity per screen
    showBookScreenAnimation: !1,
    // show/hide sliding animation when changing location
    showBookPagination: !0,
    // show/hide bottom floating pagination bar
    direction: 0,
    // 0: RTL, 1: LTR
    reverseFlip: !1,
    // reverse the page flipping direction
    autoFlip: !1,
    autoFlipFrequency: 10,
    showThumbViewInBook: !1,
    wheelSensitivity: 100,
    wheelDirection: !1,
    oddEven: !1
  },
  showMoreSettings: !1
}, Jw = {
  curIndex: (t) => t.curIndex,
  albumWidth: (t) => t.album.width,
  thumbWidth: (t) => t.thumb.width,
  showThumbView: (t) => t.thumb.thumbView,
  toggleSyncScroll: (t) => t.album.toggleSyncScroll,
  showTopBar: (t) => t.album.showTopBar,
  topBarHeight: (t) => t.topBarHeight,
  loadNum: (t) => t.album.loadNum,
  volumeSize: (t) => t.volumeSize,
  curVolume: (t) => {
    let e = t.curIndex.val % t.volumeSize;
    return (t.curIndex.val - e) / t.volumeSize;
  },
  volFirstIndex: (t) => Jw.curVolume(t) * t.volumeSize,
  volumePreloadCount: (t) => t.volumePreloadCount,
  bookScreenSize: (t) => t.book.screenSize,
  bookIndex: (t) => {
    if (t.curIndex.val <= t.book.screenSize - 2)
      return 0;
    {
      let e = t.curIndex.val + 2;
      return e % t.book.screenSize === 0 ? (e - e % t.book.screenSize) / t.book.screenSize - 1 : (e - e % t.book.screenSize) / t.book.screenSize;
    }
  },
  bookLoadNum: (t) => Math.ceil(t.album.loadNum / t.book.screenSize),
  readingMode: (t) => t.readingMode,
  showBookScreenAnimation: (t) => t.book.showBookScreenAnimation,
  showBookPagination: (t) => t.book.showBookPagination,
  bookDirection: (t) => t.book.direction,
  showMoreSettings: (t) => t.showMoreSettings,
  reverseFlip: (t) => t.book.reverseFlip,
  autoFlip: (t) => t.book.autoFlip,
  autoFlipFrequency: (t) => t.book.autoFlipFrequency,
  showThumbViewInBook: (t) => t.book.showThumbViewInBook,
  wheelSensitivity: (t) => t.book.wheelSensitivity,
  wheelDirection: (t) => t.book.wheelDirection,
  scrolledPageMargin: (t) => t.album.scrolledPageMargin,
  oddEven: (t) => t.book.oddEven
}, aR = {
  setIndex: ({ commit: t }, { val: e, updater: n }) => {
    t($w, { val: e, updater: n });
  },
  setAlbumWidth: ({ commit: t }, e) => t(Ew, { width: e }),
  toggleThumbView: ({ commit: t }, e) => t(Cw, { show: e }),
  toggleSyncScroll: ({ commit: t }, e) => t(Iw, { isActive: e }),
  toggleTopBar: ({ commit: t }, e) => t(Tw, { show: e }),
  setLoadNum: ({ commit: t }, e) => t(Aw, { num: e }),
  setVolumeSize: ({ commit: t }, e) => t(Ow, { num: e }),
  setBookIndex: ({ commit: t }, e) => t(Dw, { index: e }),
  setReadingMode: ({ commit: t }, e) => t(Pw, { mode: e }),
  setBookScreenAnimation: ({ commit: t }, e) => t(Fw, { show: e }),
  setBookPagination: ({ commit: t }, e) => t(Rw, { show: e }),
  setBookDirection: ({ commit: t }, e) => t(Nw, { mode: e }),
  setBookScreenSize: ({ commit: t }, e) => t(Mw, { num: e }),
  toggleMoreSettings: ({ commit: t }, e) => t(Lw, { show: e }),
  setReverseFlip: ({ commit: t }, e) => t(qw, { val: e }),
  setAutoFlip: ({ commit: t }, e) => t(jw, { val: e }),
  setAutoFlipFrequency: ({ commit: t }, e) => t(Bw, { val: e }),
  toggleThumbViewInBook: ({ commit: t }, e) => t(zw, { val: e }),
  setWheelSensitivity: ({ commit: t }, e) => t(Hw, { val: e }),
  setWheelDirection: ({ commit: t }, e) => t(Vw, { val: e }),
  setScrolledPageMargin: ({ commit: t }, e) => t(Uw, { val: e }),
  setOddEven: ({ commit: t }, e) => t(Gw, { val: e })
}, cR = {
  [$w](t, { val: e, updater: n }) {
    if (t.curIndex.val = e, t.curIndex.updater = n, t.curIndex.val <= t.book.screenSize - 2)
      t.book.bookIndex = 0;
    else {
      let r = t.curIndex.val + 2;
      r % t.book.screenSize === 0 ? t.book.bookIndex = (r - r % t.book.screenSize) / t.book.screenSize - 1 : t.book.bookIndex = (r - r % t.book.screenSize) / t.book.screenSize;
    }
  },
  [Ew](t, { width: e }) {
    t.album.width = e;
  },
  [Cw](t, { show: e }) {
    t.thumb.thumbView = e;
  },
  [Iw](t, { isActive: e }) {
    t.album.toggleSyncScroll = e;
  },
  [Tw](t, { show: e }) {
    t.album.showTopBar = e;
  },
  [Aw](t, { num: e }) {
    t.album.loadNum = e;
  },
  [Ow](t, { num: e }) {
    t.volumeSize = e, t.curIndex.val = 0, t.curIndex.updater = dw;
  },
  [Dw](t, { index: e }) {
    let n = e * t.book.screenSize - 1;
    t.curIndex.val = n < 0 ? 0 : n, t.curIndex.updater = lw;
  },
  [Pw](t, { mode: e }) {
    t.readingMode = e;
  },
  [Fw](t, { show: e }) {
    t.book.showBookScreenAnimation = e;
  },
  [Rw](t, { show: e }) {
    t.book.showBookPagination = e;
  },
  [Nw](t, { mode: e }) {
    t.book.direction = e;
  },
  [Mw](t, { num: e }) {
    t.book.screenSize = e;
  },
  [Lw](t, { show: e }) {
    t.showMoreSettings = e;
  },
  [qw](t, { val: e }) {
    t.book.reverseFlip = e;
  },
  [jw](t, { val: e }) {
    t.book.autoFlip = e;
  },
  [Bw](t, { val: e }) {
    t.book.autoFlipFrequency = e;
  },
  [zw](t, { val: e }) {
    t.book.showThumbViewInBook = e;
  },
  [Hw](t, { val: e }) {
    t.book.wheelSensitivity = e;
  },
  [Vw](t, { val: e }) {
    t.book.wheelDirection = e;
  },
  [Uw](t, { val: e }) {
    t.album.scrolledPageMargin = e;
  },
  [Gw](t, { val: e }) {
    t.book.oddEven = e;
  }
}, uR = {
  state: sR,
  getters: Jw,
  actions: aR,
  mutations: cR
}, lR = {
  dialogs: []
}, fR = {
  dialogs: (t) => t.dialogs
}, dR = {
  addDialog: ({ commit: t }, e) => t(Kw, { dialogBean: e }),
  removeDialog: ({ commit: t }, e) => t(Zw, { dialogBean: e })
}, hR = {
  [Kw](t, { dialogBean: e }) {
    t.dialogs.push(e);
  },
  [Zw](t, { dialogBean: e }) {
    t.dialogs.splice(t.dialogs.indexOf(e), 1);
  }
}, pR = {
  state: lR,
  getters: fR,
  actions: dR,
  mutations: hR
};
re.use(ow);
const vR = !1, fe = new ow.Store({
  modules: {
    String: iR,
    AlbumView: uR,
    Modal: pR
  },
  strict: vR
});
class gR {
  constructor() {
    this.version = "2.8", this.storageName = "Settings", this.storageVersionName = "SettingsVersion", this._initStorage(), this._migrate();
  }
  _getDefaultSettings() {
    return {
      albumWidth: { eventName: "setAlbumWidth", val: 80 },
      // eventName is action name of vuex
      toggleEHunter: { val: !0 },
      toggleThumbView: { eventName: "toggleThumbView", val: !0 },
      loadNum: { eventName: "setLoadNum", val: 3 },
      volumeSize: { eventName: "setVolumeSize", val: 50 },
      showBookScreenAnimation: { eventName: "setBookScreenAnimation", val: !1 },
      showBookPagination: { eventName: "setBookPagination", val: !0 },
      readingMode: { eventName: "setReadingMode", val: 0 },
      bookDirection: { eventName: "setBookDirection", val: 0 },
      bookScreenSize: { eventName: "setBookScreenSize", val: 2 },
      lang: { eventName: "setString", val: Ns },
      updateTime: { val: 0 },
      // the time stamp of last showing a dialog of update
      firstOpen: { val: !0 },
      // show instructions dialog for the users of first opening the eHunter
      firstOpenBookMode: { val: !0 },
      // show instructions dialog for the users of first opening the book mode
      showTopBar: { eventName: "toggleTopBar", val: !0 },
      isNormalMode: { val: !0 },
      version: { val: "" },
      // for showing infos of update
      showMoreSettings: { eventName: "toggleMoreSettings", val: !1 },
      reverseFlip: { eventName: "setReverseFlip", val: !1 },
      autoFlipFrequency: { eventName: "setAutoFlipFrequency", val: 10 },
      showThumbViewInBook: { eventName: "toggleThumbViewInBook", val: !1 },
      wheelSensitivity: { eventName: "setWheelSensitivity", val: 100 },
      wheelDirection: { eventName: "setWheelDirection", val: !1 },
      scrolledPageMargin: { eventName: "setScrolledPageMargin", val: 70 }
    };
  }
  async _migrate() {
    let e = await mt.load({ key: this.storageVersionName });
    if (await mt.save({ key: this.storageVersionName, data: this.version }), e !== this.version) {
      let n = await mt.load({ key: this.storageName }), r = this._getDefaultSettings();
      for (let o in r)
        n.hasOwnProperty(o) || (n[o] = r[o]);
      await mt.save({ key: this.storageName, data: n });
    }
  }
  _initStorage() {
    mt.sync[this.storageName] = (e) => {
      let { resolve: n } = e;
      n && n(this._getDefaultSettings());
    }, mt.sync[this.storageVersionName] = (e) => {
      let { resolve: n } = e;
      if (n)
        return n(this.version);
    };
  }
  async _setSettingItem(e, n) {
    let r = await mt.load({ key: this.storageName });
    r.hasOwnProperty(e) || (r[e] = this._getDefaultSettings()[e]), r[e].val = n, await mt.save({ key: this.storageName, data: r }), r[e].eventName && fe.dispatch(r[e].eventName, n);
  }
  async _getSettingItem(e) {
    let n = await mt.load({ key: this.storageName });
    return n.hasOwnProperty(e) ? n[e].val : this._getDefaultSettings()[e].val;
  }
  async initSettings() {
    let e = await mt.load({ key: this.storageName });
    for (let n in e)
      e[n].eventName && fe.dispatch(e[n].eventName, e[n].val);
  }
  async setAlbumWidth(e) {
    await this._setSettingItem("albumWidth", e);
  }
  async getAlbumWidth() {
    return await this._getSettingItem("albumWidth");
  }
  async toggleEHunter(e) {
    await this._setSettingItem("toggleEHunter", e);
  }
  async getEHunterStatus() {
    return await this._getSettingItem("toggleEHunter");
  }
  async toggleThumbView(e) {
    await this._setSettingItem("toggleThumbView", e);
  }
  async getThumbViewStatus() {
    return await this._getSettingItem("toggleThumbView");
  }
  async setLoadNum(e) {
    await this._setSettingItem("loadNum", e);
  }
  async getLoadNum() {
    return await this._getSettingItem("loadNum");
  }
  async setVolumeSize(e) {
    await this._setSettingItem("volumeSize", e);
  }
  async getVolumeSize() {
    return await this._getSettingItem("volumeSize");
  }
  async setBookScreenAnimation(e) {
    await this._setSettingItem("showBookScreenAnimation", e);
  }
  async getBookScreenAnimation() {
    return await this._getSettingItem("showBookScreenAnimation");
  }
  async setBookPagination(e) {
    await this._setSettingItem("showBookPagination", e);
  }
  async getBookPagination() {
    return await this._getSettingItem("showBookPagination");
  }
  async setReadingMode(e) {
    await this._setSettingItem("readingMode", e);
  }
  async getReadingMode() {
    return await this._getSettingItem("readingMode");
  }
  async setBookDirection(e) {
    await this._setSettingItem("bookDirection", e);
  }
  async getBookDirection() {
    return await this._getSettingItem("bookDirection");
  }
  async setBookScreenSize(e) {
    await this._setSettingItem("bookScreenSize", e);
  }
  async getBookScreenSize() {
    return await this._getSettingItem("bookScreenSize");
  }
  async setLang(e) {
    await this._setSettingItem("lang", e);
  }
  async getLang() {
    return await this._getSettingItem("lang");
  }
  async setUpdateTime(e) {
    await this._setSettingItem("updateTime", e);
  }
  async getUpdateTime() {
    return await this._getSettingItem("updateTime");
  }
  async setFirstOpen(e) {
    await this._setSettingItem("firstOpen", e);
  }
  async getFirstOpen() {
    return await this._getSettingItem("firstOpen");
  }
  async setFirstOpenBookMode(e) {
    await this._setSettingItem("firstOpenBookMode", e);
  }
  async getFirstOpenBookMode() {
    return await this._getSettingItem("firstOpenBookMode");
  }
  async setShowTopBar(e) {
    await this._setSettingItem("showTopBar", e);
  }
  async getShowTopBar() {
    return await this._getSettingItem("showTopBar");
  }
  async setNormalMode(e) {
    await this._setSettingItem("isNormalMode", e);
  }
  async getNormalMode() {
    return await this._getSettingItem("isNormalMode");
  }
  async setVersion(e) {
    await this._setSettingItem("version", e);
  }
  async getVersion() {
    return await this._getSettingItem("version");
  }
  async getShowMoreSettings() {
    return await this._getSettingItem("showMoreSettings");
  }
  async setShowMoreSettings(e) {
    await this._setSettingItem("showMoreSettings", e);
  }
  async getReverseFlip() {
    return await this._getSettingItem("reverseFlip");
  }
  async setReverseFlip(e) {
    await this._setSettingItem("reverseFlip", e);
  }
  async getAutoFlipFrequency() {
    return await this._getSettingItem("autoFlipFrequency");
  }
  async setAutoFlipFrequency(e) {
    await this._setSettingItem("autoFlipFrequency", e);
  }
  async getShowThumbViewInBook() {
    return await this._getSettingItem("autoFlipFrequency");
  }
  async setShowThumbViewInBook(e) {
    await this._setSettingItem("showThumbViewInBook", e);
  }
  async setWheelSensitivity(e) {
    await this._setSettingItem("wheelSensitivity", e);
  }
  async setWheelDirection(e) {
    await this._setSettingItem("wheelDirection", e);
  }
  async setScrolledPageMargin(e) {
    await this._setSettingItem("scrolledPageMargin", e);
  }
}
let W = new gR();
class n_ {
  constructor(e, n = !1, r = !0) {
    this.method = "GET", this.credentials = "include", this.retryTimes = 3, this.timeoutTime = 15, this.curRetryTimes = 0, this.retryInterval = 3, this.enabledLog = !0, this.fetchSetting = null, this.noCache = !1, this.rejectError = !0, this.url = e, this.noCache = n, this.rejectError = r;
  }
  setMethod(e) {
    return this.method = e, this;
  }
  setCredentials(e) {
    return this.credentials = e, this;
  }
  setFetchSetting(e) {
    return this.fetchSetting = e, this;
  }
  setRetryTimes(e) {
    this.retryTimes = e;
  }
  setRetryInterval(e) {
    this.retryInterval = e;
  }
  setTimeOutTime(e) {
    this.timeoutTime = e;
  }
  request() {
    return new Promise((e, n) => {
      this._request((r) => {
        r.text().then((o) => e(o));
      }, (r) => {
        this.rejectError ? n(r) : console.error(r);
      });
    });
  }
  printErrorLog(e) {
    console.error(`TextReq: request error in ${this.url}, retry:(${this.curRetryTimes}/${this.retryTimes}), error: ${e}`);
  }
  _request(e, n) {
    this.curRetryTimes++;
    let r = this.url.includes("http") ? this.url : `${window.location.protocol}//${window.location.host}${this.url}`;
    this.noCache && (r = `${r}?_t=${(/* @__PURE__ */ new Date()).getTime()}`);
    let o = new Promise((s, a) => {
      setTimeout(a, this.timeoutTime * 1e3 * this.curRetryTimes, "request timed out");
    }), i = xw.fetch(r, this.fetchSetting ? this.fetchSetting : {
      method: this.method,
      credentials: this.credentials
    });
    Promise.race([o, i]).then((s) => {
      if (s.status === 200)
        e(s);
      else
        throw new Error(`${r}: ${s.status}`);
    }).catch((s) => {
      this.printErrorLog(s), this.curRetryTimes < this.retryTimes ? setTimeout(() => {
        this._request(e, n);
      }, this.retryInterval * 1e3) : n(s);
    });
  }
}
class mR {
  constructor(e) {
    let n;
    switch (fe.getters.string.lang) {
      case "CN":
        n = e.cn;
        break;
      case "JP":
        n = e.jp;
        break;
      case "EN":
      default:
        n = e.en;
    }
    this.title = n.title, this.version = n.version, this.text = n.text, this.operations = n.operations, this.time = n.time, this.always = n.always, this.duration = n.duration;
  }
}
const _R = {
  replaceKey(t, e) {
    for (let n in e) {
      let r = new RegExp("\\$\\$" + n + "\\$\\$", "g");
      t = t.replace(r, e[n]);
    }
    return t;
  }
};
class bR {
  async showInstruction(e, n) {
    let r = new $n(
      n ? xn : as,
      fe.getters.string.instructionsAndAbouts,
      _R.replaceKey(fe.getters.string.p_instruction, {
        HOME_PAGE: e.homePage,
        VERSION: e.version
      }),
      new wn(fe.getters.string.confirm, Dt, () => !0)
    );
    fe.dispatch("addDialog", r);
  }
  async showBookInstruction(e) {
    let n = new $n(
      e ? xn : as,
      fe.getters.string.instructions,
      fe.getters.string.p_bookInstruction,
      new wn(fe.getters.string.confirm, Dt, () => !0)
    );
    fe.dispatch("addDialog", n);
  }
  async checkUpdate(e) {
    let n, r = await W.getUpdateTime();
    Promise.race([
      new n_(e.updateServer1, !0, !1).setCredentials("omit").request(),
      new n_(e.updateServer2, !0, !1).setCredentials("omit").request()
    ]).then((o) => {
      n = new mR(JSON.parse(o));
      let i = n.version !== e.version, s = (/* @__PURE__ */ new Date()).getTime() > n.time, a = (/* @__PURE__ */ new Date()).getTime() - r > n.duration;
      i && s && a && (W.setUpdateTime((/* @__PURE__ */ new Date()).getTime()), this.showUpdateInfo(n));
    }).catch((o) => {
      Rt.logObj("InfoService", o);
    });
  }
  showUpdateInfo(e) {
    let n = [];
    n.push(new wn(fe.getters.string.later, Dt, () => !0)), e.operations.forEach((o) => {
      n.push(new wn(o.name, Dt, () => (window.open(o.url, "_blank"), !0)));
    });
    let r = new $n(
      xn,
      e.title,
      e.text,
      ...n
    );
    fe.dispatch("addDialog", r);
  }
  showReloadError(e) {
    let n = new $n(
      xn,
      fe.getters.string.loadingFailed,
      e,
      new wn(fe.getters.string.reload, Dt, () => (window.location.reload(), !0))
    );
    fe.dispatch("addDialog", n);
  }
  // if updated a new version, shows messages
  async checkNewVersion(e) {
    if (await W.getVersion() !== e.version) {
      let n = new $n(
        xn,
        `${fe.getters.string.versionUpdate} v${e.version}`,
        fe.getters.string.p_version,
        new wn(fe.getters.string.confirm, Dt, () => (W.setVersion(e.version), !0))
      );
      fe.dispatch("addDialog", n);
    }
  }
}
let dr = new bR();
const yR = {
  name: "TopBar",
  inject: ["config", "service"],
  components: { DropOption: $F, PopSlider: qF, SimpleSwitch: VF, CircleIconButton: ZF },
  data() {
    return {
      readSettings: !1,
      // language
      langList: [
        { name: "English", val: Ns },
        { name: "简体中文", val: Ms },
        { name: "日本語", val: Ls }
      ],
      configurationBoard: {}
    };
  },
  async created() {
    this.readSettings = !0;
  },
  computed: {
    ...ht([
      "showTopBar",
      "topBarHeight",
      "albumWidth",
      "loadNum",
      "showThumbView",
      "volumeSize",
      "readingMode",
      "showBookScreenAnimation",
      "showBookPagination",
      "bookScreenSize",
      "bookDirection",
      "string",
      "showMoreSettings",
      "reverseFlip",
      "autoFlip",
      "autoFlipFrequency",
      "showThumbViewInBook",
      "wheelSensitivity",
      "wheelDirection",
      "scrolledPageMargin",
      "oddEven"
    ]),
    floatBtnStyle() {
      return {
        height: this.px(this.topBarHeight)
      };
    },
    topBarStyle() {
      return {
        height: this.showMoreSettings ? this.px(this.topBarHeight * 2) : this.px(this.topBarHeight)
      };
    },
    configuration() {
      const t = (y, x) => {
        this.configurationBoard.hasOwnProperty(y) || this.$set(this.configurationBoard, y, x);
      }, e = ({ title: y, tip: x, show: N, curVal: T, list: C, change: A }) => {
        const z = { title: y, tip: x, show: N, type: "SELECT", list: C, change: A }, M = z.list.find((L) => L.val === T);
        return {
          ...z,
          curValTitle: M.sname || M.name,
          select: (L) => {
            A(z.list[L].val);
          }
        };
      }, n = ({ id: y, title: x, tip: N, show: T, curValTitle: C, list: A, sliderMin: z, sliderMax: M, sliderStep: L, isFloat: w, curVal: _, change: p }) => {
        const O = `show${y}Name`;
        t(O, !1);
        const P = {
          title: x,
          tip: N,
          show: T,
          type: "SLIDER_SELECT",
          curValTitle: C,
          list: A,
          slider: {
            active: this.configurationBoard[O],
            min: z,
            max: M,
            step: L,
            init: _,
            isFloat: w,
            close: () => this.configurationBoard[O] = !1,
            change: p
          }
        };
        return {
          ...P,
          select: (E) => {
            const S = P.list[E].val;
            S == -1 ? this.configurationBoard[O] = !0 : p(S);
          }
        };
      }, r = e({
        title: this.string.readingMode,
        tip: this.string.readingModeTip,
        show: !0,
        curVal: this.readingMode,
        list: [{ name: this.string.scrollMode, val: 0 }, { name: this.string.bookMode, val: 1 }],
        change: (y) => W.setReadingMode(y)
      }), o = n({
        id: "LoadNum",
        title: this.string.loadNum,
        tip: this.string.loadNumTip,
        show: !0,
        curValTitle: this.loadNum + "P",
        list: [
          { name: "1P", val: 1 },
          { name: "2P", val: 2 },
          { name: "3P", val: 3 },
          { name: "5P", val: 5 },
          { name: "10P", val: 10 },
          { name: "20P", val: 20 },
          { name: "30P", val: 30 },
          { name: "40P", val: 40 },
          { name: "50P", val: 50 },
          { name: "100P", val: 100 },
          { name: this.string.custom, val: -1 }
        ],
        sliderMin: 1,
        sliderMax: 100,
        sliderStep: 1,
        isFloat: !1,
        curVal: this.loadNum,
        change: (y) => W.setLoadNum(y)
      }), i = n({
        id: "Width",
        title: this.string.widthScale,
        tip: this.string.widthScaleTip,
        show: this.readingMode === 0,
        curValTitle: this.albumWidth + "%",
        list: [
          { name: "40%", val: 40 },
          { name: "50%", val: 50 },
          { name: "55%", val: 55 },
          { name: "60%", val: 60 },
          { name: "65%", val: 65 },
          { name: "70%", val: 70 },
          { name: "75%", val: 75 },
          { name: "80%", val: 80 },
          { name: "85%", val: 85 },
          { name: "90%", val: 90 },
          { name: "95%", val: 95 },
          { name: "100%", val: 100 },
          { name: this.string.custom, val: -1 }
        ],
        sliderMin: 30,
        sliderMax: 100,
        sliderStep: 1,
        isFloat: !0,
        curVal: this.albumWidth,
        change: (y) => W.setAlbumWidth(y)
      }), s = n({
        id: "VolSize",
        title: this.string.volSize,
        tip: this.string.volSizeTip,
        show: this.readingMode === 0,
        curValTitle: this.volumeSize + "P",
        list: [
          { name: "10P", val: 10 },
          { name: "20P", val: 20 },
          { name: "30P", val: 30 },
          { name: "50P", val: 50 },
          { name: "100P", val: 100 },
          { name: this.string.custom, val: -1 }
        ],
        sliderMin: 1,
        sliderMax: 200,
        sliderStep: 1,
        isFloat: !1,
        curVal: this.volumeSize,
        change: (y) => W.setVolumeSize(y)
      }), a = {
        title: this.string.thumbView,
        tip: this.string.thumbViewTip,
        show: this.readingMode === 0 && this.service.album.supportThumbView(),
        type: "SWITCH",
        curVal: this.showThumbView,
        change: (y) => W.toggleThumbView(y)
      }, c = n({
        id: "ScreenSize",
        title: this.string.screenSize,
        tip: this.string.screenSizeTip,
        show: this.readingMode === 1,
        curValTitle: this.bookScreenSize + "P",
        list: [
          { name: "1P", val: 1 },
          { name: "2P", val: 2 },
          { name: "3P", val: 3 },
          { name: "4P", val: 4 },
          { name: "5P", val: 5 }
        ],
        sliderMin: 1,
        sliderMax: 10,
        sliderStep: 1,
        isFloat: !1,
        curVal: this.screenSize,
        change: (y) => W.setBookScreenSize(y)
      }), u = e({
        title: this.string.bookDirection,
        tip: this.string.bookDirectionTip,
        show: this.readingMode === 1,
        curVal: this.bookDirection,
        list: [{ name: this.string.rtl, sname: "RTL", val: 0 }, { name: this.string.ltr, sname: "LTR", val: 1 }],
        change: (y) => W.setBookDirection(y)
      }), l = {
        title: this.string.pagination,
        tip: this.string.paginationTip,
        show: this.readingMode === 1,
        type: "SWITCH",
        curVal: this.showBookPagination,
        change: (y) => W.setBookPagination(y)
      }, f = {
        title: this.string.reverseFlip,
        tip: this.string.reverseFlipTip,
        show: this.readingMode === 1 && this.showMoreSettings,
        type: "SWITCH",
        curVal: this.reverseFlip,
        change: (y) => W.setReverseFlip(y)
      }, d = {
        title: this.string.autoFlip,
        tip: this.string.autoFlipTip,
        show: this.readingMode === 1 && this.showMoreSettings,
        type: "SWITCH",
        curVal: this.autoFlip,
        change: (y) => this.setAutoFlip(y)
      }, h = n({
        id: "AutoFlipFrequency",
        title: this.string.autoFlipFrequency,
        tip: this.string.autoFlipFrequencyTip,
        show: this.readingMode === 1 && this.showMoreSettings,
        curValTitle: this.autoFlipFrequency + "s",
        list: [
          { name: "3 sec", val: 3 },
          { name: "5 sec", val: 5 },
          { name: "8 sec", val: 8 },
          { name: "10 sec", val: 10 },
          { name: "15 sec", val: 15 },
          { name: "20 sec", val: 20 },
          { name: "30 sec", val: 30 },
          { name: "45 sec", val: 45 },
          { name: "1 min", val: 60 },
          { name: "1 min 30s", val: 90 },
          { name: "2 min", val: 120 },
          { name: "3 min", val: 180 },
          { name: "5 min", val: 300 },
          { name: this.string.custom, val: -1 }
        ],
        sliderMin: 1,
        sliderMax: 240,
        sliderStep: 1,
        isFloat: !1,
        curVal: this.autoFlipFrequency,
        change: (y) => W.setAutoFlipFrequency(y)
      }), b = {
        title: this.string.thumbView,
        tip: this.string.thumbViewTip,
        show: this.readingMode === 1 && this.showMoreSettings,
        type: "SWITCH",
        curVal: this.showThumbViewInBook,
        change: (y) => W.setShowThumbViewInBook(y)
      }, m = n({
        id: "WheelSensitivity",
        title: this.string.wheelSensitivity,
        tip: this.string.wheelSensitivityTip,
        show: this.readingMode === 1 && this.showMoreSettings,
        curValTitle: this.wheelSensitivity,
        list: [
          { name: "10", val: 10 },
          { name: "30", val: 30 },
          { name: "50", val: 50 },
          { name: "80", val: 80 },
          { name: "100", val: 100 },
          { name: "120", val: 120 },
          { name: "150", val: 150 },
          { name: "170", val: 170 },
          { name: "200", val: 200 },
          { name: "220", val: 220 },
          { name: "250", val: 250 },
          { name: this.string.custom, val: -1 }
        ],
        sliderMin: 1,
        sliderMax: 240,
        sliderStep: 1,
        isFloat: !1,
        curVal: this.wheelSensitivity,
        change: (y) => W.setWheelSensitivity(y)
      }), g = {
        title: this.string.wheelDirection,
        tip: this.string.wheelDirectionTip,
        show: this.readingMode === 1 && this.showMoreSettings,
        type: "SWITCH",
        curVal: this.wheelDirection,
        change: (y) => W.setWheelDirection(y)
      }, v = n({
        id: "ScrolledPageMargin",
        title: this.string.pageMargin,
        tip: this.string.pageMarginTip,
        show: this.readingMode === 0 && this.showMoreSettings,
        curValTitle: this.scrolledPageMargin + "px",
        list: [
          { name: "0px", val: 0 },
          { name: "30px", val: 30 },
          { name: "70px", val: 70 },
          { name: "100px", val: 100 },
          { name: "150px", val: 150 },
          { name: this.string.custom, val: -1 }
        ],
        sliderMin: 0,
        sliderMax: 300,
        sliderStep: 1,
        isFloat: !0,
        curVal: this.scrolledPageMargin,
        change: (y) => W.setScrolledPageMargin(y)
      }), k = {
        title: this.string.oddEven,
        tip: this.string.oddEvenTip,
        show: this.readingMode === 1 && this.showMoreSettings,
        type: "SWITCH",
        curVal: this.oddEven,
        change: (y) => this.setOddEven(y)
      };
      return [
        r,
        i,
        o,
        s,
        a,
        c,
        u,
        l,
        k,
        f,
        d,
        h,
        b,
        g,
        m,
        v
      ];
    }
  },
  methods: {
    ...Gt(["toggleTopBar", "addDialog", "setAutoFlip", "setOddEven"]),
    async dropOptionChange(t, e) {
      switch (t) {
        case "lang":
          await W.setLang(this.langList[e].val), dr.showInstruction(this.config);
      }
    },
    changeTopBar() {
      W.setShowTopBar(!this.showTopBar);
    },
    closeEHunter() {
      W.toggleEHunter(!1), this.service.eHunter.showEHunterView(!1);
    },
    showInfoDialog() {
      dr.showInstruction(this.config);
    },
    resetCache() {
      localStorage.clear(), window.location.reload();
    },
    toggleMoreSettings(t) {
      W.setShowMoreSettings(!this.showMoreSettings);
    }
  }
};
var wR = function() {
  var e = this, n = e._self._c;
  return n("nav", { staticClass: "top-bar" }, [n("div", { staticClass: "float-content", style: e.floatBtnStyle }, [n("transition", { attrs: { name: "fast-horizontal-fade" } }, [e.showTopBar ? n("circle-icon-button", { ref: "topBarButton", staticClass: "button tips tips-left tips-down", attrs: { icon: "expand", "title-content": e.string.toggleMoreSettings, rotate: e.showMoreSettings }, on: { click: e.toggleMoreSettings } }) : e._e()], 1), n("circle-icon-button", { ref: "topBarButton", staticClass: "button tips tips-left tips-down", attrs: { icon: "menu", "title-content": e.string.toggleTopBar, rotate: e.showTopBar }, on: { click: e.changeTopBar } }), n("circle-icon-button", { staticClass: "button tips tips-left tips-down", attrs: { "title-content": e.string.closeEHunter, icon: "close" }, on: { click: e.closeEHunter } })], 1), n("div", { class: ["inner-content", { hide: !e.showTopBar, "more-settings": e.showMoreSettings }], style: e.topBarStyle }, [e.readSettings ? [e._l(e.configuration, function(r) {
    return [r.show ? n("div", { key: r.title, staticClass: "item" }, [n("span", { staticClass: "label tips tips-down tips-right", attrs: { "title-content": r.tip } }, [e._v(e._s(r.title) + ":")]), r.type === "SELECT" || r.type === "SLIDER_SELECT" ? n("drop-option", { attrs: { list: r.list, "cur-val": r.curValTitle }, on: { change: r.select } }) : e._e(), r.type === "SLIDER_SELECT" ? n("pop-slider", { attrs: { active: r.slider.active, min: r.slider.min, max: r.slider.max, step: r.slider.step, init: r.slider.init, close: r.slider.close, "is-float": r.slider.isFloat }, on: { change: r.slider.change } }) : e._e(), r.type === "SWITCH" ? n("div", { staticClass: "bar-switch" }, [n("simple-switch", { attrs: { active: r.curVal }, on: { change: r.change } })], 1) : e._e()], 1) : e._e()];
  }), n("div", { staticClass: "item less-margin" }, [n("span", { staticClass: "label icon tips tips-down", attrs: { "title-content": "Change language/切换语言/言語を変更" } }, [n("svg", { attrs: { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" } }, [n("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } }), n("path", { attrs: { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" } })]), e._v(" :")]), n("drop-option", { attrs: { list: e.langList, "cur-val": e.string.lang }, on: { change: (r) => e.dropOptionChange("lang", r) } })], 1), n("div", { staticClass: "item icon-margin" }, [n("a", { staticClass: "label icon tips tips-down clickable", attrs: { "title-content": e.string.resetTip }, on: { click: e.resetCache } }, [n("svg", { staticClass: "reset", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" } }, [n("path", { attrs: { d: "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" } }), n("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } })])])]), n("div", { staticClass: "item icon-margin" }, [n("a", { staticClass: "label icon tips tips-down clickable", attrs: { "title-content": e.string.infoTip }, on: { click: e.showInfoDialog } }, [n("svg", { staticClass: "info", attrs: { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" } }, [n("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } }), n("path", { attrs: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" } })])])]), n("div", { staticClass: "item" }, [n("a", { staticClass: "label icon tips tips-down clickable", attrs: { "title-content": e.string.githubTip, target: "_blank", href: "https://github.com/hanFengSan/eHunter" } }, [n("svg", { staticClass: "github", attrs: { version: "1.1", viewBox: "0 0 16 16" } }, [n("path", { attrs: { "fill-rule": "evenodd", d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" } })])])])] : e._e()], 2)]);
}, kR = [], SR = /* @__PURE__ */ ge(
  yR,
  wR,
  kR,
  !1,
  null,
  "c34e8459",
  null,
  null
);
const Yw = SR.exports;
const xR = {
  name: "Pagination",
  props: {
    curIndex: {
      type: Number
    },
    pageSum: {
      type: Number
    }
  },
  data() {
    return {
      pageRange: 3
    };
  },
  computed: {
    // get shown page array
    pages() {
      let t = [];
      for (let e = 1; e <= this.pageRange; e++)
        this.curIndex - e > 0 && t.push(this.curIndex - e);
      for (let e = 1; e <= this.pageRange; e++)
        this.curIndex + e < this.pageSum - 1 && t.push(this.curIndex + e);
      if (t.push(0), t.push(this.curIndex), t.push(this.pageSum - 1), t = [...new Set(t)].sort((e, n) => e - n), t[1] - t[0] > 1) {
        let e = Math.floor((t[1] - t[0]) / 2 + t[0]);
        t.unshift(e);
      }
      if (t[t.length - 1] - t[t.length - 2] > 1) {
        let e = Math.floor((t[t.length - 1] - t[t.length - 2]) / 2 + t[t.length - 2]);
        t.push(e);
      }
      return [...new Set(t)].sort((e, n) => e - n);
    }
  },
  methods: {
    showNum(t) {
      return Math.abs(t - this.curIndex) <= this.pageRange || t === 0 || t === this.pageSum - 1 ? t + 1 : "...";
    },
    selectPage(t) {
      this.$emit("change", t);
    },
    prev() {
      this.curIndex !== 0 && this.$emit("change", this.curIndex - 1);
    },
    next() {
      this.curIndex !== this.pageSum - 1 && this.$emit("change", this.curIndex + 1);
    }
  }
};
var $R = function() {
  var e = this, n = e._self._c;
  return n("section", { staticClass: "pagination" }, [n("div", { class: ["item", { disable: e.curIndex === 0 }], on: { click: function(r) {
    return e.prev();
  } } }, [n("svg", { staticClass: "icon", attrs: { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" } }, [n("path", { attrs: { d: "M15.41 16.09l-4.58-4.59 4.58-4.59L14 5.5l-6 6 6 6z" } }), n("path", { attrs: { d: "M0-.5h24v24H0z", fill: "none" } })])]), e._l(e.pages, function(r) {
    return n("span", { key: r, class: ["item", { active: r === e.curIndex }], on: { click: function(o) {
      return e.selectPage(r);
    } } }, [e._v(e._s(e.showNum(r)))]);
  }), n("div", { class: ["item", { disable: e.curIndex === e.pageSum - 1 }], on: { click: function(r) {
    return e.next();
  } } }, [n("svg", { staticClass: "icon", attrs: { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" } }, [n("path", { attrs: { d: "M8.59 16.34l4.58-4.59-4.58-4.59L10 5.75l6 6-6 6z" } }), n("path", { attrs: { d: "M0-.25h24v24H0z", fill: "none" } })])])], 2);
}, ER = [], CR = /* @__PURE__ */ ge(
  xR,
  $R,
  ER,
  !1,
  null,
  "e982a924",
  null,
  null
);
const Xw = CR.exports, Qw = {
  timeout(t) {
    return new Promise((e) => setTimeout(e, t));
  }
};
const IR = {
  name: "PageView",
  props: {
    data: {
      type: Object
    },
    index: {
      type: Number
    },
    active: {
      type: Boolean
    },
    albumId: {
      type: String
    },
    onClick: {
      type: Function
    }
  },
  inject: ["service"],
  components: { FlatButton: od },
  data() {
    return {
      imgPageInfo: {},
      reloadTimes: 0,
      message: "",
      curLoadStatus: null,
      previewStyle: {}
    };
  },
  async created() {
    this.imgPageInfo = JSON.parse(JSON.stringify(this.data)), this.imgPageInfo.isFirstLoad = !0, this.curLoadStatus = Dl, this.active && this.getImgSrc(), this.service.album.getThumbInfo(this.index).then(async (t) => {
      this.previewStyle = await this.service.album.getPreviewThumbnailStyle(this.index, this.imgPageInfo, t);
    });
  },
  computed: {
    ...ht(["string"]),
    tags: () => kw,
    loadingInfo() {
      let t = this.reloadTimes ? `[${this.string.reload}-${this.reloadTimes}] ` : "";
      if (this.message)
        return t + this.message;
      switch (this.curLoadStatus) {
        case Pl:
          return t + this.string.loadingImgFailed;
        case Fl:
          return t + this.string.imgLoaded;
        case Dl:
          return t + this.string.waiting;
        case eo:
        default:
          return t + this.string.loadingImg;
      }
    }
  },
  watch: {
    active(t, e) {
      t && this.getImgSrc();
    }
  },
  methods: {
    // for lazy load img
    async getImgSrc() {
      if (this.curLoadStatus !== eo) {
        let t = await this.service.album.getImgSrc(this.index, Ol);
        if (t instanceof Error) {
          console.Error("getImgSrc", t);
          return;
        }
        this.imgPageInfo.src !== t.src && (this.imgPageInfo = t, this.$emit("update-img-page-info", this.index, t)), this.curLoadStatus = eo;
      }
    },
    // refresh img
    async getNewImgSrc(t) {
      this.reloadTimes++, this.message = "", this.imgPageInfo.src = "", this.curLoadStatus = eo;
      let e = await this.service.album.getNewImgSrc(this.index, t);
      if (!(e instanceof Error))
        await this.$nextTick(), await Qw.timeout(300), this.imgPageInfo = e, this.$emit("update-img-page-info", this.index, e);
      else
        switch (e.message) {
          case hw:
            this.message = this.string.noOriginalImg;
            break;
          default:
            this.message = this.string.loadingFailed;
        }
    },
    failLoad(t) {
      t.preventDefault(), this.imgPageInfo.src && (this.curLoadStatus = Pl, Rt.logText("LOADING", "loading image failed"), this.imgPageInfo.isFirstLoad && (this.imgPageInfo.isFirstLoad = !1, Rt.logText("LOADING", "reloading image"), this.getNewImgSrc(Ol)));
    },
    loaded() {
      this.curLoadStatus = Fl;
    },
    onClickBg() {
      this.onClick && this.onClick();
    }
  }
};
var TR = function() {
  var e = this, n = e._self._c;
  return n("section", { staticClass: "page-view", on: { click: function(r) {
    return e.onClickBg();
  } } }, [n("div", { staticClass: "layer preview-layer", style: e.previewStyle }), n("div", { staticClass: "layer loading-layer" }, [n("h6", { staticClass: "index" }, [e._v(e._s(e.index + 1))]), e.active ? n("article", { staticClass: "loading-info-panel" }, [n("transition", { attrs: { name: "slide-fade" } }, [e.curLoadStatus != e.tags.STATE_LOADED ? n("p", { staticClass: "loading-info", on: { click: function(r) {
    return r.stopPropagation(), (() => {
    }).apply(null, arguments);
  } } }, [n("span", { staticClass: "text" }, [e._v(e._s(e.loadingInfo))]), n("span", { staticClass: "operation" }, [e.service.album.supportOriginImg() ? n("flat-button", { staticClass: "tips tips-down no-margin", attrs: { "title-content": e.string.originImgTip, label: e.string.originImg, mode: "inline", type: "positive" }, on: { click: function(r) {
    return e.getNewImgSrc(e.tags.MODE_ORIGIN);
  } } }) : e._e(), n("flat-button", { staticClass: "tips tips-down", attrs: { "title-content": e.string.refreshTip, label: e.string.refresh, mode: "inline", type: "positive" }, on: { click: function(r) {
    return e.getNewImgSrc();
  } } }), e.service.album.supportImgChangeSource() ? n("flat-button", { staticClass: "tips tips-down", attrs: { "title-content": e.string.refreshByOtherSourceTip, label: e.string.refreshByOtherSource, mode: "inline", type: "positive" }, on: { click: function(r) {
    return e.getNewImgSrc(e.tags.MODE_CHANGE_SOURCE);
  } } }) : e._e()], 1)]) : e._e()])], 1) : e._e()]), n("div", { staticClass: "layer img-layer" }, [e.active ? n("img", { staticClass: "album-item", attrs: { src: e.imgPageInfo.src }, on: { load: function(r) {
    return e.loaded();
  }, error: function(r) {
    return e.failLoad(r);
  } } }) : e._e()])]);
}, AR = [], OR = /* @__PURE__ */ ge(
  IR,
  TR,
  AR,
  !1,
  null,
  "665013c0",
  null,
  null
);
const ek = OR.exports;
const DR = {
  name: "AlbumScrollView",
  props: {
    pageCount: {
      type: Number
    },
    curPageNum: {
      type: Number
    },
    title: {
      type: String
    },
    imgPageInfos: {
      type: Array
    },
    albumId: {
      type: String
    }
  },
  inject: ["service"],
  data() {
    return {
      scrollTop: 0,
      preloadImgs: []
    };
  },
  components: {
    AwesomeScrollView: uw,
    TopBar: Yw,
    Pagination: Xw,
    PageView: ek
  },
  async created() {
    setTimeout(() => this.setIndex({ val: this.curIndex.val, updater: Tl }), 200), document.addEventListener("keydown", this.watchKeyboard);
  },
  destroyed() {
    document.removeEventListener("keydown", this.watchKeyboard);
  },
  computed: {
    ...ht({
      centerIndex: "curIndex",
      widthScale: "albumWidth",
      loadNum: "loadNum",
      volumeSize: "volumeSize",
      volFirstIndex: "volFirstIndex",
      curVolume: "curVolume",
      volumePreloadCount: "volumePreloadCount",
      showMoreSettings: "showMoreSettings",
      showTopBar: "showTopBar",
      scrolledPageMargin: "scrolledPageMargin"
    }),
    // return a indexes array. the index is index of page, determining the show of pages.
    nearbyArray() {
      let t = this.curIndex.val, e = t - this.loadNum, n = e >= 0 ? e : 0, r = t + this.loadNum, o = r >= this.imgPageInfos.length - 1 ? this.imgPageInfos.length - 1 : r;
      return this.range(n, o - n + 1);
    },
    volImgPageInfos() {
      return this.imgPageInfos.slice(this.volFirstIndex, this.volFirstIndex + this.volumeSize);
    },
    volumeSum() {
      return Math.ceil(this.pageCount / this.volumeSize);
    },
    curIndex() {
      return this.service.album.getRealCurIndexInfo(this.pageCount, this.centerIndex);
    }
  },
  watch: {
    centerIndex: {
      handler: async function(t, e) {
        this.curIndex.updater !== Il && this.$refs.pageContainers && (this.curIndex.val === this.volFirstIndex ? this.$refs.scrollView.ScrollTo(0, 1e3) : (await this.$nextTick(), this.$refs.scrollView.ScrollTo(
          this.$refs.pageContainers[this.volIndex(this.curIndex.val)].offsetTop - 100,
          1e3
        ))), t === this.volFirstIndex + this.volumeSize - 1 && this.preloadVolume();
      },
      deep: !0
    },
    // watch scrollTop to calculate curIndex
    scrollTop() {
      let t = this.$refs.pageContainers.sort((n, r) => n.offsetTop - r.offsetTop), e;
      if (t) {
        if (this.scrollTop !== 0) {
          const n = t.concat().reverse();
          let r = t.indexOf(
            n.find((i) => i.offsetTop <= this.scrollTop + window.innerHeight)
          );
          e = (r === -1 ? this.$refs.pageContainers.length - 1 : r) + this.volFirstIndex;
        } else
          e = this.volFirstIndex;
        e !== this.curIndex.val && this.setIndex({ val: e, updater: Il });
      }
    }
  },
  methods: {
    ...Gt(["setIndex", "toggleTopBar"]),
    range(t, e) {
      return Array.apply(0, Array(e)).map(function(n, r) {
        return r + t;
      });
    },
    onScrollStopped(t) {
      this.scrollTop = t;
    },
    // get index of album for index of current volume
    index(t) {
      return this.volFirstIndex + t;
    },
    // get index of current volume for index of album
    volIndex(t) {
      return t - this.volFirstIndex;
    },
    selectVol(t) {
      let e = t * this.volumeSize;
      this.setIndex({ val: e, updater: Tl });
    },
    // preload image
    async preload(t) {
      this.preloadImgs.length === this.volumePreloadCount && (this.preloadImgs = []), this.preloadImgs.push(await this.service.album.getImgSrc(t));
    },
    // preload next volume
    preloadVolume() {
      if (this.volumeSum > this.curVolume + 1) {
        let t = this.volFirstIndex + this.volumeSize - 1;
        for (let e = 1; e <= this.volumePreloadCount; e++)
          this.pageCount - 1 >= t + e && this.preload(t + e);
        Rt.logText("Album", "preload volume");
      }
    },
    async changeTopBar(t) {
      await W.getShowTopBar() && this.toggleTopBar(t);
    },
    watchKeyboard(t) {
      if (!(t.metaKey || t.ctrlKey))
        switch (t.key) {
          case "ArrowLeft":
          case "a":
            this.centerIndex.val !== 0 && this.setIndex({ val: this.centerIndex.val - 1, updater: Rl });
            break;
          case "ArrowRight":
          case "d":
            this.centerIndex.val !== this.pageCount - 1 && this.setIndex({ val: this.centerIndex.val + 1, updater: Rl });
            break;
          case "Shift":
            W.setShowMoreSettings(!this.showMoreSettings);
            break;
          case "Escape":
            this.toggleTopBar(!this.showTopBar);
            break;
        }
    },
    updateImgPageInfo(t, e) {
      this.$set(this.imgPageInfos, t, e);
    }
  }
};
var PR = function() {
  var e = this, n = e._self._c;
  return n("div", { staticClass: "album-scroll-view" }, [n("div", { staticClass: "preload" }, e._l(e.preloadImgs, function(r) {
    return n("img", { key: r, attrs: { src: r, width: "100", height: "144" } });
  }), 0), e.imgPageInfos.length > 0 ? n("awesome-scroll-view", { ref: "scrollView", staticClass: "scroll-view", attrs: { "on-scroll-stopped": e.onScrollStopped }, on: { topIn: function(r) {
    return e.changeTopBar(!0);
  }, topLeave: function(r) {
    return e.changeTopBar(!1);
  } } }, [n("h1", [e._v(e._s(e.title))]), e.volumeSum != 1 ? n("pagination", { staticClass: "top-pagination", attrs: { "cur-index": e.curVolume, "page-sum": e.volumeSum }, on: { change: e.selectVol } }) : e._e(), e._l(e.volImgPageInfos, function(r, o) {
    return n("div", { key: r.id, ref: "pageContainers", refInFor: !0, staticClass: "page-container", style: { width: `${e.widthScale}%`, "padding-bottom": `${e.widthScale * (r.preciseHeightOfWidth ? r.preciseHeightOfWidth : r.heightOfWidth)}%`, margin: `${e.scrolledPageMargin}px auto` } }, [n("page-view", { attrs: { index: r.index, active: e.nearbyArray.indexOf(e.index(o)) > -1, albumId: e.albumId, data: r }, on: { "update-img-page-info": e.updateImgPageInfo } })], 1);
  }), e.volumeSum != 1 ? n("pagination", { staticClass: "bottom-pagination", attrs: { curIndex: e.curVolume, pageSum: e.volumeSum }, on: { change: e.selectVol } }) : e._e()], 2) : e._e()], 1);
}, FR = [], RR = /* @__PURE__ */ ge(
  DR,
  PR,
  FR,
  !1,
  null,
  "93207152",
  null,
  null
);
const NR = RR.exports;
const MR = {
  name: "AlbumBookView",
  props: {
    pageCount: {
      type: Number
    },
    curPageNum: {
      type: Number
    },
    title: {
      type: String
    },
    imgPageInfos: {
      type: Array
    },
    albumId: {
      type: String
    }
  },
  inject: ["service"],
  components: { PageView: ek, Pagination: Xw },
  data() {
    return {
      appSize: { height: 0, width: 0 },
      autoFlipTimer: void 0
    };
  },
  async created() {
    this.appSize = this.getAppSize(), window.addEventListener("resize", this.watchResize), document.addEventListener("keydown", this.watchKeyboard), document.addEventListener("wheel", this.watchWheel), this.checkInstructions();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.watchResize), document.removeEventListener("keydown", this.watchKeyboard), document.removeEventListener("wheel", this.watchWheel), this.autoFlip && (this.stopAutoFlip(), this.setAutoFlip(!1));
  },
  computed: {
    ...ht({
      bookScreenSize: "bookScreenSize",
      bookIndex: "bookIndex",
      showTopBar: "showTopBar",
      topBarHeight: "topBarHeight",
      bookLoadNum: "bookLoadNum",
      showBookScreenAnimation: "showBookScreenAnimation",
      bookDirection: "bookDirection",
      showBookPagination: "showBookPagination",
      reverseFlip: "reverseFlip",
      autoFlip: "autoFlip",
      autoFlipFrequency: "autoFlipFrequency",
      showMoreSettings: "showMoreSettings",
      showThumbViewInBook: "showThumbViewInBook",
      thumbWidth: "thumbWidth",
      wheelDirection: "wheelDirection",
      wheelSensitivity: "wheelSensitivity",
      oddEven: "oddEven"
    }),
    tags: () => kw,
    screenSize() {
      let t = this.appSize.height - (this.showTopBar ? this.topBarHeight : 0), e = this.appSize.width - (this.showThumbViewInBook ? this.thumbWidth : 0);
      return {
        height: t,
        width: e,
        screenRatio: t / e
      };
    },
    pages() {
      let t = [
        ...this.imgPageInfos.map((e) => ({
          id: e.id,
          type: gw,
          imgPageInfo: e
        })),
        { id: vw, type: _w, imgPageInfo: { heightOfWidth: 1.45 } }
      ];
      return this.oddEven || t.unshift({ id: pw, type: mw, imgPageInfo: { heightOfWidth: 1.45 } }), t;
    },
    screens() {
      let t = this.pages.concat(), e = [];
      for (; t.length > 0; )
        e.push(t.splice(0, this.bookScreenSize));
      return e;
    },
    activeScreens() {
      let t = this.bookIndex - this.bookLoadNum;
      return this.screens.slice(t >= 0 ? t : 0, this.bookIndex + this.bookLoadNum);
    },
    // calc each size of page
    pageSizes() {
      let t = [];
      for (let e of this.screens) {
        let n = e.reduce((i, s) => {
          let a = s.imgPageInfo.preciseHeightOfWidth ? s.imgPageInfo.preciseHeightOfWidth : s.imgPageInfo.heightOfWidth;
          return i = a > i ? a : i, i;
        }, 0), r = n / e.length, o;
        r >= this.screenSize.screenRatio ? o = this.screenSize.height / n : o = this.screenSize.width / e.length, e.forEach((i) => {
          let s = i.imgPageInfo.preciseHeightOfWidth ? i.imgPageInfo.preciseHeightOfWidth : i.imgPageInfo.heightOfWidth;
          t.push({
            id: i.id,
            height: o * s,
            width: o
          });
        });
      }
      return t;
    }
  },
  watch: {
    autoFlip() {
      this.autoFlip ? this.restartAutoFlip() : this.stopAutoFlip();
    },
    autoFlipFrequency() {
      this.autoFlip && this.restartAutoFlip();
    }
  },
  methods: {
    ...Gt(["setBookIndex", "setAutoFlip"]),
    // get index of album for index of current volume
    index(t) {
      return this.volFirstIndex + t;
    },
    getScreenIndexByPageIndex(t) {
      if (t === 0 || t === 1)
        return 0;
      {
        let e = t + 2, n = e % this.bookScreenSize;
        return (e - n) / this.bookScreenSize;
      }
    },
    getScreenStyle(t) {
      let e = {}, n = this.screens.indexOf(t);
      return n < this.bookIndex ? e.left = "-100%" : n > this.bookIndex && (e.left = "100%"), e["padding-top"] = this.showTopBar ? this.px(this.topBarHeight) : "initial", e;
    },
    getPageStyle(t) {
      let e = this.pageSizes.find((n) => n.id === t.id);
      return { height: this.px(e.height), width: this.px(e.width) };
    },
    watchKeyboard(t) {
      if (!(t.metaKey || t.ctrlKey))
        switch (t.key) {
          case "ArrowLeft":
          case "a":
            this.prevPage();
            break;
          case "ArrowRight":
          case "d":
          case " ":
            this.nextPage();
            break;
          case "Shift":
            W.setShowMoreSettings(!this.showMoreSettings);
            break;
          case "Escape":
            W.setShowTopBar(!this.showTopBar);
            break;
        }
    },
    watchWheel(t) {
      if (typeof t.wheelDeltaY > "u" && (t.wheelDeltaY = t.deltaY), t.metaKey || t.ctrlKey || t.wheelDeltaY === 0)
        return;
      const e = t.wheelDeltaY > 0 ? "_wheelDeltaYUp" : "_wheelDeltaYDown", n = t.wheelDeltaY > 0 ? "_wheelDeltaYUpTimer" : "_wheelDeltaYDownTimer";
      let r = t.wheelDeltaY > 0 ? this.prevPage : this.nextPage;
      this.wheelDirection && (r = t.wheelDeltaY > 0 ? this.nextPage : this.prevPage), this[e] += Math.abs(t.wheelDeltaY), window.clearTimeout(this[n]), this[n] = window.setTimeout(() => {
        this[e] = 0;
      }, 100), this[e] > this.wheelSensitivity && (this[e] = 0, r());
    },
    prevPage() {
      this.bookIndex > 0 && this.setBookIndex(this.bookIndex - 1);
    },
    nextPage(t = !1) {
      this.bookIndex < this.screens.length - 1 && this.setBookIndex(this.bookIndex + 1), !t && this.autoFlip && this.restartAutoFlip();
    },
    getPageClickAction(t) {
      return this.bookScreenSize === 1 ? this.nextPage.bind(this) : t === 0 ? this.reverseFlip ? this.nextPage.bind(this) : this.prevPage.bind(this) : t === this.bookScreenSize - 1 ? this.reverseFlip ? this.prevPage.bind(this) : this.nextPage.bind(this) : () => {
      };
    },
    getAppSize() {
      return this.vueContainer || (this.vueContainer = document.querySelector(".vue-container")), {
        height: this.vueContainer.offsetHeight,
        width: this.vueContainer.offsetWidth
      };
    },
    watchResize(t) {
      window.clearTimeout(this.resizeTimeoutId), this.resizeTimeoutId = window.setTimeout(() => {
        this.appSize = this.getAppSize();
      }, 250);
    },
    selectBookIndex(t) {
      this.setBookIndex(t), this.autoFlip && this.restartAutoFlip();
    },
    async checkInstructions() {
      await W.getFirstOpenBookMode() && (dr.showBookInstruction(!0), W.setFirstOpenBookMode(!1));
    },
    screenKey(t) {
      return t.reduce((e, n) => e + n.id, "");
    },
    // auto page turning
    restartAutoFlip() {
      this.autoFlipTimer && this.stopAutoFlip(), this.autoFlipTimer = window.setInterval(() => {
        this.nextPage(!0);
      }, this.autoFlipFrequency * 1e3);
    },
    // stop auto page turning
    stopAutoFlip() {
      this.autoFlipTimer && window.clearInterval(this.autoFlipTimer);
    },
    updateImgPageInfo(t, e) {
      this.$set(this.imgPageInfos, t, e);
    }
  }
};
var LR = function() {
  var e = this, n = e._self._c;
  return n("section", { staticClass: "album-book-view" }, [e._l(e.activeScreens, function(r) {
    return n("div", { key: e.screenKey(r), class: ["screen", { animation: e.showBookScreenAnimation, rtl: e.bookDirection === 0 }], style: e.getScreenStyle(r) }, e._l(r, function(o, i) {
      return n("div", { key: o.id, staticClass: "page-container", style: e.getPageStyle(o) }, [o.type === e.tags.TYPE_NORMAL ? n("page-view", { attrs: { index: o.imgPageInfo.index, active: !0, albumId: e.albumId, onClick: e.getPageClickAction(i), data: o.imgPageInfo }, on: { "update-img-page-info": e.updateImgPageInfo } }) : e._e(), o.type === e.tags.TYPE_START ? n("div", { staticClass: "page start-page", on: { click: function(s) {
        e.getPageClickAction(i)();
      } } }, [n("div", { class: ["ehunter-tag", { left: e.bookDirection === 1 }] }, [e._v(" EHUNTER ")]), n("h1", [e._v(" " + e._s(e.title) + " ")])]) : e._e(), o.type === e.tags.TYPE_END ? n("div", { staticClass: "page end-page", on: { click: function(s) {
        e.getPageClickAction(i)();
      } } }, [n("div", { class: ["ehunter-tag", { left: e.bookDirection === 0 }] }, [e._v(" EHUNTER ")]), n("h1", [e._v("END")])]) : e._e()], 1);
    }), 0);
  }), n("transition", { attrs: { name: "center-horizontal-fade" } }, [e.showBookPagination ? n("pagination", { staticClass: "bottom-pagination", attrs: { "cur-index": e.bookIndex, "page-sum": e.screens.length }, on: { change: e.selectBookIndex } }) : e._e()], 1)], 2);
}, qR = [], jR = /* @__PURE__ */ ge(
  MR,
  LR,
  qR,
  !1,
  null,
  "fa12adfc",
  null,
  null
);
const BR = jR.exports;
const zR = {
  name: "reader-view",
  inject: ["service"],
  props: {
    pageCount: {
      type: Number
    },
    curPageNum: {
      type: Number
    },
    title: {
      type: String
    },
    imgPageInfos: {
      type: Array
    },
    albumId: {
      type: String
    }
  },
  components: { AlbumScrollView: NR, AlbumBookView: BR, TopBar: Yw },
  async created() {
    this.setIndex({ val: this.curPageNum - 1, updater: fw });
  },
  computed: {
    ...ht({
      curIndex: "curIndex",
      readingMode: "readingMode",
      bookIndex: "bookIndex",
      bookScreenSize: "bookScreenSize",
      string: "string"
    }),
    location() {
      let t = this.service.album.getBookScreenCount(this.pageCount, this.bookScreenSize);
      switch (this.readingMode) {
        case 0:
          return `${this.curIndex.val + 1} / ${this.pageCount}`;
        case 1:
          return `${this.bookIndex + 1} / 
                    ${t}`;
      }
    }
  },
  methods: {
    ...Gt(["setIndex"]),
    fullscreen() {
      const t = document.querySelector(".vue-container");
      document.webkitCurrentFullScreenElement || document.mozFullScreenElement ? (document.webkitExitFullscreen && document.webkitExitFullscreen(), document.mozCancelFullScreen && document.mozCancelFullScreen()) : (t.mozRequestFullScreen && t.mozRequestFullScreen(), t.webkitRequestFullScreen && t.webkitRequestFullScreen());
    }
  }
};
var HR = function() {
  var e = this, n = e._self._c;
  return n("div", { staticClass: "reader-view" }, [e._e(), n("top-bar", { staticClass: "top-bar" }), n("div", { staticClass: "panel" }, [n("h4", { staticClass: "location" }, [e._v(e._s(e.location))]), n("div", { staticClass: "full-screen tips tips-left", attrs: { "title-content": e.string.fullScreen }, on: { click: e.fullscreen } }, [n("svg", { attrs: { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" } }, [n("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } }), n("path", { attrs: { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" } })])])]), n("transition", { attrs: { name: "slow-horizontal-fade" } }, [e.readingMode === 0 ? n("album-scroll-view", { staticClass: "content scroll-mode", attrs: { pageCount: e.pageCount, curPageNum: e.curPageNum, title: e.title, imgPageInfos: e.imgPageInfos, albumId: e.albumId } }) : e._e()], 1), n("transition", { attrs: { name: "slow-vertical-fade" } }, [e.readingMode === 1 ? n("album-book-view", { staticClass: "content book-mode", attrs: { pageCount: e.pageCount, curPageNum: e.curPageNum, title: e.title, imgPageInfos: e.imgPageInfos, albumId: e.albumId } }) : e._e()], 1)], 1);
}, VR = [], UR = /* @__PURE__ */ ge(
  zR,
  HR,
  VR,
  !1,
  null,
  "c0c43852",
  null,
  null
);
const GR = UR.exports;
const WR = {
  name: "LoadingView",
  data() {
    return {};
  }
};
var KR = function() {
  var e = this;
  return e._self._c, e._m(0);
}, ZR = [function() {
  var t = this, e = t._self._c;
  return e("div", { staticClass: "loading-view" }, [e("div", { staticClass: "loading-animation" }, [e("div", { staticClass: "book" }, [e("div", { staticClass: "book__page" }), e("div", { staticClass: "book__page" }), e("div", { staticClass: "book__page" })]), e("h4", [t._v("Reading")])])]);
}], JR = /* @__PURE__ */ ge(
  WR,
  KR,
  ZR,
  !1,
  null,
  "8a38a277",
  null,
  null
);
const YR = JR.exports;
var K = {};
const XR = "Á", QR = "á", eN = "Ă", tN = "ă", nN = "∾", rN = "∿", oN = "∾̳", iN = "Â", sN = "â", aN = "´", cN = "А", uN = "а", lN = "Æ", fN = "æ", dN = "⁡", hN = "𝔄", pN = "𝔞", vN = "À", gN = "à", mN = "ℵ", _N = "ℵ", bN = "Α", yN = "α", wN = "Ā", kN = "ā", SN = "⨿", xN = "&", $N = "&", EN = "⩕", CN = "⩓", IN = "∧", TN = "⩜", AN = "⩘", ON = "⩚", DN = "∠", PN = "⦤", FN = "∠", RN = "⦨", NN = "⦩", MN = "⦪", LN = "⦫", qN = "⦬", jN = "⦭", BN = "⦮", zN = "⦯", HN = "∡", VN = "∟", UN = "⊾", GN = "⦝", WN = "∢", KN = "Å", ZN = "⍼", JN = "Ą", YN = "ą", XN = "𝔸", QN = "𝕒", eM = "⩯", tM = "≈", nM = "⩰", rM = "≊", oM = "≋", iM = "'", sM = "⁡", aM = "≈", cM = "≊", uM = "Å", lM = "å", fM = "𝒜", dM = "𝒶", hM = "≔", pM = "*", vM = "≈", gM = "≍", mM = "Ã", _M = "ã", bM = "Ä", yM = "ä", wM = "∳", kM = "⨑", SM = "≌", xM = "϶", $M = "‵", EM = "∽", CM = "⋍", IM = "∖", TM = "⫧", AM = "⊽", OM = "⌅", DM = "⌆", PM = "⌅", FM = "⎵", RM = "⎶", NM = "≌", MM = "Б", LM = "б", qM = "„", jM = "∵", BM = "∵", zM = "∵", HM = "⦰", VM = "϶", UM = "ℬ", WM = "ℬ", KM = "Β", ZM = "β", JM = "ℶ", YM = "≬", XM = "𝔅", QM = "𝔟", e8 = "⋂", t8 = "◯", n8 = "⋃", r8 = "⨀", o8 = "⨁", i8 = "⨂", s8 = "⨆", a8 = "★", c8 = "▽", u8 = "△", l8 = "⨄", f8 = "⋁", d8 = "⋀", h8 = "⤍", p8 = "⧫", v8 = "▪", g8 = "▴", m8 = "▾", _8 = "◂", b8 = "▸", y8 = "␣", w8 = "▒", k8 = "░", S8 = "▓", x8 = "█", $8 = "=⃥", E8 = "≡⃥", C8 = "⫭", I8 = "⌐", T8 = "𝔹", A8 = "𝕓", O8 = "⊥", D8 = "⊥", P8 = "⋈", F8 = "⧉", R8 = "┐", N8 = "╕", M8 = "╖", L8 = "╗", q8 = "┌", j8 = "╒", B8 = "╓", z8 = "╔", H8 = "─", V8 = "═", U8 = "┬", G8 = "╤", W8 = "╥", K8 = "╦", Z8 = "┴", J8 = "╧", Y8 = "╨", X8 = "╩", Q8 = "⊟", eL = "⊞", tL = "⊠", nL = "┘", rL = "╛", oL = "╜", iL = "╝", sL = "└", aL = "╘", cL = "╙", uL = "╚", lL = "│", fL = "║", dL = "┼", hL = "╪", pL = "╫", vL = "╬", gL = "┤", mL = "╡", _L = "╢", bL = "╣", yL = "├", wL = "╞", kL = "╟", SL = "╠", xL = "‵", $L = "˘", EL = "˘", CL = "¦", IL = "𝒷", TL = "ℬ", AL = "⁏", OL = "∽", DL = "⋍", PL = "⧅", FL = "\\", RL = "⟈", NL = "•", ML = "•", LL = "≎", qL = "⪮", jL = "≏", BL = "≎", zL = "≏", HL = "Ć", VL = "ć", UL = "⩄", GL = "⩉", WL = "⩋", KL = "∩", ZL = "⋒", JL = "⩇", YL = "⩀", XL = "ⅅ", QL = "∩︀", e6 = "⁁", t6 = "ˇ", n6 = "ℭ", r6 = "⩍", o6 = "Č", i6 = "č", s6 = "Ç", a6 = "ç", c6 = "Ĉ", u6 = "ĉ", l6 = "∰", f6 = "⩌", d6 = "⩐", h6 = "Ċ", p6 = "ċ", v6 = "¸", g6 = "¸", m6 = "⦲", _6 = "¢", b6 = "·", y6 = "·", w6 = "𝔠", k6 = "ℭ", S6 = "Ч", x6 = "ч", $6 = "✓", E6 = "✓", C6 = "Χ", I6 = "χ", T6 = "ˆ", A6 = "≗", O6 = "↺", D6 = "↻", P6 = "⊛", F6 = "⊚", R6 = "⊝", N6 = "⊙", M6 = "®", L6 = "Ⓢ", q6 = "⊖", j6 = "⊕", B6 = "⊗", z6 = "○", H6 = "⧃", V6 = "≗", U6 = "⨐", G6 = "⫯", W6 = "⧂", K6 = "∲", Z6 = "”", J6 = "’", Y6 = "♣", X6 = "♣", Q6 = ":", eq = "∷", tq = "⩴", nq = "≔", rq = "≔", oq = ",", iq = "@", sq = "∁", aq = "∘", cq = "∁", uq = "ℂ", lq = "≅", fq = "⩭", dq = "≡", hq = "∮", pq = "∯", vq = "∮", gq = "𝕔", mq = "ℂ", _q = "∐", bq = "∐", yq = "©", wq = "©", kq = "℗", Sq = "∳", xq = "↵", $q = "✗", Eq = "⨯", Cq = "𝒞", Iq = "𝒸", Tq = "⫏", Aq = "⫑", Oq = "⫐", Dq = "⫒", Pq = "⋯", Fq = "⤸", Rq = "⤵", Nq = "⋞", Mq = "⋟", Lq = "↶", qq = "⤽", jq = "⩈", Bq = "⩆", zq = "≍", Hq = "∪", Vq = "⋓", Uq = "⩊", Gq = "⊍", Wq = "⩅", Kq = "∪︀", Zq = "↷", Jq = "⤼", Yq = "⋞", Xq = "⋟", Qq = "⋎", ej = "⋏", tj = "¤", nj = "↶", rj = "↷", oj = "⋎", ij = "⋏", sj = "∲", aj = "∱", cj = "⌭", uj = "†", lj = "‡", fj = "ℸ", dj = "↓", hj = "↡", pj = "⇓", vj = "‐", gj = "⫤", mj = "⊣", _j = "⤏", bj = "˝", yj = "Ď", wj = "ď", kj = "Д", Sj = "д", xj = "‡", $j = "⇊", Ej = "ⅅ", Cj = "ⅆ", Ij = "⤑", Tj = "⩷", Aj = "°", Oj = "∇", Dj = "Δ", Pj = "δ", Fj = "⦱", Rj = "⥿", Nj = "𝔇", Mj = "𝔡", Lj = "⥥", qj = "⇃", jj = "⇂", Bj = "´", zj = "˙", Hj = "˝", Vj = "`", Uj = "˜", Gj = "⋄", Wj = "⋄", Kj = "⋄", Zj = "♦", Jj = "♦", Yj = "¨", Xj = "ⅆ", Qj = "ϝ", e4 = "⋲", t4 = "÷", n4 = "÷", r4 = "⋇", o4 = "⋇", i4 = "Ђ", s4 = "ђ", a4 = "⌞", c4 = "⌍", u4 = "$", l4 = "𝔻", f4 = "𝕕", d4 = "¨", h4 = "˙", p4 = "⃜", v4 = "≐", g4 = "≑", m4 = "≐", _4 = "∸", b4 = "∔", y4 = "⊡", w4 = "⌆", k4 = "∯", S4 = "¨", x4 = "⇓", $4 = "⇐", E4 = "⇔", C4 = "⫤", I4 = "⟸", T4 = "⟺", A4 = "⟹", O4 = "⇒", D4 = "⊨", P4 = "⇑", F4 = "⇕", R4 = "∥", N4 = "⤓", M4 = "↓", L4 = "↓", q4 = "⇓", j4 = "⇵", B4 = "̑", z4 = "⇊", H4 = "⇃", V4 = "⇂", U4 = "⥐", G4 = "⥞", W4 = "⥖", K4 = "↽", Z4 = "⥟", J4 = "⥗", Y4 = "⇁", X4 = "↧", Q4 = "⊤", eB = "⤐", tB = "⌟", nB = "⌌", rB = "𝒟", oB = "𝒹", iB = "Ѕ", sB = "ѕ", aB = "⧶", cB = "Đ", uB = "đ", lB = "⋱", fB = "▿", dB = "▾", hB = "⇵", pB = "⥯", vB = "⦦", gB = "Џ", mB = "џ", _B = "⟿", bB = "É", yB = "é", wB = "⩮", kB = "Ě", SB = "ě", xB = "Ê", $B = "ê", EB = "≖", CB = "≕", IB = "Э", TB = "э", AB = "⩷", OB = "Ė", DB = "ė", PB = "≑", FB = "ⅇ", RB = "≒", NB = "𝔈", MB = "𝔢", LB = "⪚", qB = "È", jB = "è", BB = "⪖", zB = "⪘", HB = "⪙", VB = "∈", UB = "⏧", GB = "ℓ", WB = "⪕", KB = "⪗", ZB = "Ē", JB = "ē", YB = "∅", XB = "∅", QB = "◻", ez = "∅", tz = "▫", nz = " ", rz = " ", oz = " ", iz = "Ŋ", sz = "ŋ", az = " ", cz = "Ę", uz = "ę", lz = "𝔼", fz = "𝕖", dz = "⋕", hz = "⧣", pz = "⩱", vz = "ε", gz = "Ε", mz = "ε", _z = "ϵ", bz = "≖", yz = "≕", wz = "≂", kz = "⪖", Sz = "⪕", xz = "⩵", $z = "=", Ez = "≂", Cz = "≟", Iz = "⇌", Tz = "≡", Az = "⩸", Oz = "⧥", Dz = "⥱", Pz = "≓", Fz = "ℯ", Rz = "ℰ", Nz = "≐", Mz = "⩳", Lz = "≂", qz = "Η", jz = "η", Bz = "Ð", zz = "ð", Hz = "Ë", Vz = "ë", Uz = "€", Gz = "!", Wz = "∃", Kz = "∃", Zz = "ℰ", Jz = "ⅇ", Yz = "ⅇ", Xz = "≒", Qz = "Ф", e5 = "ф", t5 = "♀", n5 = "ﬃ", r5 = "ﬀ", o5 = "ﬄ", i5 = "𝔉", s5 = "𝔣", a5 = "ﬁ", c5 = "◼", u5 = "▪", l5 = "fj", f5 = "♭", d5 = "ﬂ", h5 = "▱", p5 = "ƒ", v5 = "𝔽", g5 = "𝕗", m5 = "∀", _5 = "∀", b5 = "⋔", y5 = "⫙", w5 = "ℱ", k5 = "⨍", S5 = "½", x5 = "⅓", $5 = "¼", E5 = "⅕", C5 = "⅙", I5 = "⅛", T5 = "⅔", A5 = "⅖", O5 = "¾", D5 = "⅗", P5 = "⅜", F5 = "⅘", R5 = "⅚", N5 = "⅝", M5 = "⅞", L5 = "⁄", q5 = "⌢", j5 = "𝒻", B5 = "ℱ", z5 = "ǵ", H5 = "Γ", V5 = "γ", U5 = "Ϝ", G5 = "ϝ", W5 = "⪆", K5 = "Ğ", Z5 = "ğ", J5 = "Ģ", Y5 = "Ĝ", X5 = "ĝ", Q5 = "Г", e7 = "г", t7 = "Ġ", n7 = "ġ", r7 = "≥", o7 = "≧", i7 = "⪌", s7 = "⋛", a7 = "≥", c7 = "≧", u7 = "⩾", l7 = "⪩", f7 = "⩾", d7 = "⪀", h7 = "⪂", p7 = "⪄", v7 = "⋛︀", g7 = "⪔", m7 = "𝔊", _7 = "𝔤", b7 = "≫", y7 = "⋙", w7 = "⋙", k7 = "ℷ", S7 = "Ѓ", x7 = "ѓ", $7 = "⪥", E7 = "≷", C7 = "⪒", I7 = "⪤", T7 = "⪊", A7 = "⪊", O7 = "⪈", D7 = "≩", P7 = "⪈", F7 = "≩", R7 = "⋧", N7 = "𝔾", M7 = "𝕘", L7 = "`", q7 = "≥", j7 = "⋛", B7 = "≧", z7 = "⪢", H7 = "≷", V7 = "⩾", U7 = "≳", G7 = "𝒢", W7 = "ℊ", K7 = "≳", Z7 = "⪎", J7 = "⪐", Y7 = "⪧", X7 = "⩺", Q7 = ">", e9 = ">", t9 = "≫", n9 = "⋗", r9 = "⦕", o9 = "⩼", i9 = "⪆", s9 = "⥸", a9 = "⋗", c9 = "⋛", u9 = "⪌", l9 = "≷", f9 = "≳", d9 = "≩︀", h9 = "≩︀", p9 = "ˇ", v9 = " ", g9 = "½", m9 = "ℋ", _9 = "Ъ", b9 = "ъ", y9 = "⥈", w9 = "↔", k9 = "⇔", S9 = "↭", x9 = "^", $9 = "ℏ", E9 = "Ĥ", C9 = "ĥ", I9 = "♥", T9 = "♥", A9 = "…", O9 = "⊹", D9 = "𝔥", P9 = "ℌ", F9 = "ℋ", R9 = "⤥", N9 = "⤦", M9 = "⇿", L9 = "∻", q9 = "↩", j9 = "↪", B9 = "𝕙", z9 = "ℍ", H9 = "―", V9 = "─", U9 = "𝒽", G9 = "ℋ", W9 = "ℏ", K9 = "Ħ", Z9 = "ħ", J9 = "≎", Y9 = "≏", X9 = "⁃", Q9 = "‐", eH = "Í", tH = "í", nH = "⁣", rH = "Î", oH = "î", iH = "И", sH = "и", aH = "İ", cH = "Е", uH = "е", lH = "¡", fH = "⇔", dH = "𝔦", hH = "ℑ", pH = "Ì", vH = "ì", gH = "ⅈ", mH = "⨌", _H = "∭", bH = "⧜", yH = "℩", wH = "Ĳ", kH = "ĳ", SH = "Ī", xH = "ī", $H = "ℑ", EH = "ⅈ", CH = "ℐ", IH = "ℑ", TH = "ı", AH = "ℑ", OH = "⊷", DH = "Ƶ", PH = "⇒", FH = "℅", RH = "∞", NH = "⧝", MH = "ı", LH = "⊺", qH = "∫", jH = "∬", BH = "ℤ", zH = "∫", HH = "⊺", VH = "⋂", UH = "⨗", GH = "⨼", WH = "⁣", KH = "⁢", ZH = "Ё", JH = "ё", YH = "Į", XH = "į", QH = "𝕀", eV = "𝕚", tV = "Ι", nV = "ι", rV = "⨼", oV = "¿", iV = "𝒾", sV = "ℐ", aV = "∈", cV = "⋵", uV = "⋹", lV = "⋴", fV = "⋳", dV = "∈", hV = "⁢", pV = "Ĩ", vV = "ĩ", gV = "І", mV = "і", _V = "Ï", bV = "ï", yV = "Ĵ", wV = "ĵ", kV = "Й", SV = "й", xV = "𝔍", $V = "𝔧", EV = "ȷ", CV = "𝕁", IV = "𝕛", TV = "𝒥", AV = "𝒿", OV = "Ј", DV = "ј", PV = "Є", FV = "є", RV = "Κ", NV = "κ", MV = "ϰ", LV = "Ķ", qV = "ķ", jV = "К", BV = "к", zV = "𝔎", HV = "𝔨", VV = "ĸ", UV = "Х", GV = "х", WV = "Ќ", KV = "ќ", ZV = "𝕂", JV = "𝕜", YV = "𝒦", XV = "𝓀", QV = "⇚", eU = "Ĺ", tU = "ĺ", nU = "⦴", rU = "ℒ", oU = "Λ", iU = "λ", sU = "⟨", aU = "⟪", cU = "⦑", uU = "⟨", lU = "⪅", fU = "ℒ", dU = "«", hU = "⇤", pU = "⤟", vU = "←", gU = "↞", mU = "⇐", _U = "⤝", bU = "↩", yU = "↫", wU = "⤹", kU = "⥳", SU = "↢", xU = "⤙", $U = "⤛", EU = "⪫", CU = "⪭", IU = "⪭︀", TU = "⤌", AU = "⤎", OU = "❲", DU = "{", PU = "[", FU = "⦋", RU = "⦏", NU = "⦍", MU = "Ľ", LU = "ľ", qU = "Ļ", jU = "ļ", BU = "⌈", zU = "{", HU = "Л", VU = "л", UU = "⤶", GU = "“", WU = "„", KU = "⥧", ZU = "⥋", JU = "↲", YU = "≤", XU = "≦", QU = "⟨", eG = "⇤", tG = "←", nG = "←", rG = "⇐", oG = "⇆", iG = "↢", sG = "⌈", aG = "⟦", cG = "⥡", uG = "⥙", lG = "⇃", fG = "⌊", dG = "↽", hG = "↼", pG = "⇇", vG = "↔", gG = "↔", mG = "⇔", _G = "⇆", bG = "⇋", yG = "↭", wG = "⥎", kG = "↤", SG = "⊣", xG = "⥚", $G = "⋋", EG = "⧏", CG = "⊲", IG = "⊴", TG = "⥑", AG = "⥠", OG = "⥘", DG = "↿", PG = "⥒", FG = "↼", RG = "⪋", NG = "⋚", MG = "≤", LG = "≦", qG = "⩽", jG = "⪨", BG = "⩽", zG = "⩿", HG = "⪁", VG = "⪃", UG = "⋚︀", GG = "⪓", WG = "⪅", KG = "⋖", ZG = "⋚", JG = "⪋", YG = "⋚", XG = "≦", QG = "≶", eW = "≶", tW = "⪡", nW = "≲", rW = "⩽", oW = "≲", iW = "⥼", sW = "⌊", aW = "𝔏", cW = "𝔩", uW = "≶", lW = "⪑", fW = "⥢", dW = "↽", hW = "↼", pW = "⥪", vW = "▄", gW = "Љ", mW = "љ", _W = "⇇", bW = "≪", yW = "⋘", wW = "⌞", kW = "⇚", SW = "⥫", xW = "◺", $W = "Ŀ", EW = "ŀ", CW = "⎰", IW = "⎰", TW = "⪉", AW = "⪉", OW = "⪇", DW = "≨", PW = "⪇", FW = "≨", RW = "⋦", NW = "⟬", MW = "⇽", LW = "⟦", qW = "⟵", jW = "⟵", BW = "⟸", zW = "⟷", HW = "⟷", VW = "⟺", UW = "⟼", GW = "⟶", WW = "⟶", KW = "⟹", ZW = "↫", JW = "↬", YW = "⦅", XW = "𝕃", QW = "𝕝", eK = "⨭", tK = "⨴", nK = "∗", rK = "_", oK = "↙", iK = "↘", sK = "◊", aK = "◊", cK = "⧫", uK = "(", lK = "⦓", fK = "⇆", dK = "⌟", hK = "⇋", pK = "⥭", vK = "‎", gK = "⊿", mK = "‹", _K = "𝓁", bK = "ℒ", yK = "↰", wK = "↰", kK = "≲", SK = "⪍", xK = "⪏", $K = "[", EK = "‘", CK = "‚", IK = "Ł", TK = "ł", AK = "⪦", OK = "⩹", DK = "<", PK = "<", FK = "≪", RK = "⋖", NK = "⋋", MK = "⋉", LK = "⥶", qK = "⩻", jK = "◃", BK = "⊴", zK = "◂", HK = "⦖", VK = "⥊", UK = "⥦", GK = "≨︀", WK = "≨︀", KK = "¯", ZK = "♂", JK = "✠", YK = "✠", XK = "↦", QK = "↦", eZ = "↧", tZ = "↤", nZ = "↥", rZ = "▮", oZ = "⨩", iZ = "М", sZ = "м", aZ = "—", cZ = "∺", uZ = "∡", lZ = " ", fZ = "ℳ", dZ = "𝔐", hZ = "𝔪", pZ = "℧", vZ = "µ", gZ = "*", mZ = "⫰", _Z = "∣", bZ = "·", yZ = "⊟", wZ = "−", kZ = "∸", SZ = "⨪", xZ = "∓", $Z = "⫛", EZ = "…", CZ = "∓", IZ = "⊧", TZ = "𝕄", AZ = "𝕞", OZ = "∓", DZ = "𝓂", PZ = "ℳ", FZ = "∾", RZ = "Μ", NZ = "μ", MZ = "⊸", LZ = "⊸", qZ = "∇", jZ = "Ń", BZ = "ń", zZ = "∠⃒", HZ = "≉", VZ = "⩰̸", UZ = "≋̸", GZ = "ŉ", WZ = "≉", KZ = "♮", ZZ = "ℕ", JZ = "♮", YZ = " ", XZ = "≎̸", QZ = "≏̸", eJ = "⩃", tJ = "Ň", nJ = "ň", rJ = "Ņ", oJ = "ņ", iJ = "≇", sJ = "⩭̸", aJ = "⩂", cJ = "Н", uJ = "н", lJ = "–", fJ = "⤤", dJ = "↗", hJ = "⇗", pJ = "↗", vJ = "≠", gJ = "≐̸", mJ = "​", _J = "​", bJ = "​", yJ = "​", wJ = "≢", kJ = "⤨", SJ = "≂̸", xJ = "≫", $J = "≪", EJ = `
`, CJ = "∄", IJ = "∄", TJ = "𝔑", AJ = "𝔫", OJ = "≧̸", DJ = "≱", PJ = "≱", FJ = "≧̸", RJ = "⩾̸", NJ = "⩾̸", MJ = "⋙̸", LJ = "≵", qJ = "≫⃒", jJ = "≯", BJ = "≯", zJ = "≫̸", HJ = "↮", VJ = "⇎", UJ = "⫲", GJ = "∋", WJ = "⋼", KJ = "⋺", ZJ = "∋", JJ = "Њ", YJ = "њ", XJ = "↚", QJ = "⇍", eY = "‥", tY = "≦̸", nY = "≰", rY = "↚", oY = "⇍", iY = "↮", sY = "⇎", aY = "≰", cY = "≦̸", uY = "⩽̸", lY = "⩽̸", fY = "≮", dY = "⋘̸", hY = "≴", pY = "≪⃒", vY = "≮", gY = "⋪", mY = "⋬", _Y = "≪̸", bY = "∤", yY = "⁠", wY = " ", kY = "𝕟", SY = "ℕ", xY = "⫬", $Y = "¬", EY = "≢", CY = "≭", IY = "∦", TY = "∉", AY = "≠", OY = "≂̸", DY = "∄", PY = "≯", FY = "≱", RY = "≧̸", NY = "≫̸", MY = "≹", LY = "⩾̸", qY = "≵", jY = "≎̸", BY = "≏̸", zY = "∉", HY = "⋵̸", VY = "⋹̸", UY = "∉", GY = "⋷", WY = "⋶", KY = "⧏̸", ZY = "⋪", JY = "⋬", YY = "≮", XY = "≰", QY = "≸", eX = "≪̸", tX = "⩽̸", nX = "≴", rX = "⪢̸", oX = "⪡̸", iX = "∌", sX = "∌", aX = "⋾", cX = "⋽", uX = "⊀", lX = "⪯̸", fX = "⋠", dX = "∌", hX = "⧐̸", pX = "⋫", vX = "⋭", gX = "⊏̸", mX = "⋢", _X = "⊐̸", bX = "⋣", yX = "⊂⃒", wX = "⊈", kX = "⊁", SX = "⪰̸", xX = "⋡", $X = "≿̸", EX = "⊃⃒", CX = "⊉", IX = "≁", TX = "≄", AX = "≇", OX = "≉", DX = "∤", PX = "∦", FX = "∦", RX = "⫽⃥", NX = "∂̸", MX = "⨔", LX = "⊀", qX = "⋠", jX = "⊀", BX = "⪯̸", zX = "⪯̸", HX = "⤳̸", VX = "↛", UX = "⇏", GX = "↝̸", WX = "↛", KX = "⇏", ZX = "⋫", JX = "⋭", YX = "⊁", XX = "⋡", QX = "⪰̸", eQ = "𝒩", tQ = "𝓃", nQ = "∤", rQ = "∦", oQ = "≁", iQ = "≄", sQ = "≄", aQ = "∤", cQ = "∦", uQ = "⋢", lQ = "⋣", fQ = "⊄", dQ = "⫅̸", hQ = "⊈", pQ = "⊂⃒", vQ = "⊈", gQ = "⫅̸", mQ = "⊁", _Q = "⪰̸", bQ = "⊅", yQ = "⫆̸", wQ = "⊉", kQ = "⊃⃒", SQ = "⊉", xQ = "⫆̸", $Q = "≹", EQ = "Ñ", CQ = "ñ", IQ = "≸", TQ = "⋪", AQ = "⋬", OQ = "⋫", DQ = "⋭", PQ = "Ν", FQ = "ν", RQ = "#", NQ = "№", MQ = " ", LQ = "≍⃒", qQ = "⊬", jQ = "⊭", BQ = "⊮", zQ = "⊯", HQ = "≥⃒", VQ = ">⃒", UQ = "⤄", GQ = "⧞", WQ = "⤂", KQ = "≤⃒", ZQ = "<⃒", JQ = "⊴⃒", YQ = "⤃", XQ = "⊵⃒", QQ = "∼⃒", eee = "⤣", tee = "↖", nee = "⇖", ree = "↖", oee = "⤧", iee = "Ó", see = "ó", aee = "⊛", cee = "Ô", uee = "ô", lee = "⊚", fee = "О", dee = "о", hee = "⊝", pee = "Ő", vee = "ő", gee = "⨸", mee = "⊙", _ee = "⦼", bee = "Œ", yee = "œ", wee = "⦿", kee = "𝔒", See = "𝔬", xee = "˛", $ee = "Ò", Eee = "ò", Cee = "⧁", Iee = "⦵", Tee = "Ω", Aee = "∮", Oee = "↺", Dee = "⦾", Pee = "⦻", Fee = "‾", Ree = "⧀", Nee = "Ō", Mee = "ō", Lee = "Ω", qee = "ω", jee = "Ο", Bee = "ο", zee = "⦶", Hee = "⊖", Vee = "𝕆", Uee = "𝕠", Gee = "⦷", Wee = "“", Kee = "‘", Zee = "⦹", Jee = "⊕", Yee = "↻", Xee = "⩔", Qee = "∨", ete = "⩝", tte = "ℴ", nte = "ℴ", rte = "ª", ote = "º", ite = "⊶", ste = "⩖", ate = "⩗", cte = "⩛", ute = "Ⓢ", lte = "𝒪", fte = "ℴ", dte = "Ø", hte = "ø", pte = "⊘", vte = "Õ", gte = "õ", mte = "⨶", _te = "⨷", bte = "⊗", yte = "Ö", wte = "ö", kte = "⌽", Ste = "‾", xte = "⏞", $te = "⎴", Ete = "⏜", Cte = "¶", Ite = "∥", Tte = "∥", Ate = "⫳", Ote = "⫽", Dte = "∂", Pte = "∂", Fte = "П", Rte = "п", Nte = "%", Mte = ".", Lte = "‰", qte = "⊥", jte = "‱", Bte = "𝔓", zte = "𝔭", Hte = "Φ", Vte = "φ", Ute = "ϕ", Gte = "ℳ", Wte = "☎", Kte = "Π", Zte = "π", Jte = "⋔", Yte = "ϖ", Xte = "ℏ", Qte = "ℎ", ene = "ℏ", tne = "⨣", nne = "⊞", rne = "⨢", one = "+", ine = "∔", sne = "⨥", ane = "⩲", cne = "±", une = "±", lne = "⨦", fne = "⨧", dne = "±", hne = "ℌ", pne = "⨕", vne = "𝕡", gne = "ℙ", mne = "£", _ne = "⪷", bne = "⪻", yne = "≺", wne = "≼", kne = "⪷", Sne = "≺", xne = "≼", $ne = "≺", Ene = "⪯", Cne = "≼", Ine = "≾", Tne = "⪯", Ane = "⪹", One = "⪵", Dne = "⋨", Pne = "⪯", Fne = "⪳", Rne = "≾", Nne = "′", Mne = "″", Lne = "ℙ", qne = "⪹", jne = "⪵", Bne = "⋨", zne = "∏", Hne = "∏", Vne = "⌮", Une = "⌒", Gne = "⌓", Wne = "∝", Kne = "∝", Zne = "∷", Jne = "∝", Yne = "≾", Xne = "⊰", Qne = "𝒫", ere = "𝓅", tre = "Ψ", nre = "ψ", rre = " ", ore = "𝔔", ire = "𝔮", sre = "⨌", are = "𝕢", cre = "ℚ", ure = "⁗", lre = "𝒬", fre = "𝓆", dre = "ℍ", hre = "⨖", pre = "?", vre = "≟", gre = '"', mre = '"', _re = "⇛", bre = "∽̱", yre = "Ŕ", wre = "ŕ", kre = "√", Sre = "⦳", xre = "⟩", $re = "⟫", Ere = "⦒", Cre = "⦥", Ire = "⟩", Tre = "»", Are = "⥵", Ore = "⇥", Dre = "⤠", Pre = "⤳", Fre = "→", Rre = "↠", Nre = "⇒", Mre = "⤞", Lre = "↪", qre = "↬", jre = "⥅", Bre = "⥴", zre = "⤖", Hre = "↣", Vre = "↝", Ure = "⤚", Gre = "⤜", Wre = "∶", Kre = "ℚ", Zre = "⤍", Jre = "⤏", Yre = "⤐", Xre = "❳", Qre = "}", eoe = "]", toe = "⦌", noe = "⦎", roe = "⦐", ooe = "Ř", ioe = "ř", soe = "Ŗ", aoe = "ŗ", coe = "⌉", uoe = "}", loe = "Р", foe = "р", doe = "⤷", hoe = "⥩", poe = "”", voe = "”", goe = "↳", moe = "ℜ", _oe = "ℛ", boe = "ℜ", yoe = "ℝ", woe = "ℜ", koe = "▭", Soe = "®", xoe = "®", $oe = "∋", Eoe = "⇋", Coe = "⥯", Ioe = "⥽", Toe = "⌋", Aoe = "𝔯", Ooe = "ℜ", Doe = "⥤", Poe = "⇁", Foe = "⇀", Roe = "⥬", Noe = "Ρ", Moe = "ρ", Loe = "ϱ", qoe = "⟩", joe = "⇥", Boe = "→", zoe = "→", Hoe = "⇒", Voe = "⇄", Uoe = "↣", Goe = "⌉", Woe = "⟧", Koe = "⥝", Zoe = "⥕", Joe = "⇂", Yoe = "⌋", Xoe = "⇁", Qoe = "⇀", eie = "⇄", tie = "⇌", nie = "⇉", rie = "↝", oie = "↦", iie = "⊢", sie = "⥛", aie = "⋌", cie = "⧐", uie = "⊳", lie = "⊵", fie = "⥏", die = "⥜", hie = "⥔", pie = "↾", vie = "⥓", gie = "⇀", mie = "˚", _ie = "≓", bie = "⇄", yie = "⇌", wie = "‏", kie = "⎱", Sie = "⎱", xie = "⫮", $ie = "⟭", Eie = "⇾", Cie = "⟧", Iie = "⦆", Tie = "𝕣", Aie = "ℝ", Oie = "⨮", Die = "⨵", Pie = "⥰", Fie = ")", Rie = "⦔", Nie = "⨒", Mie = "⇉", Lie = "⇛", qie = "›", jie = "𝓇", Bie = "ℛ", zie = "↱", Hie = "↱", Vie = "]", Uie = "’", Gie = "’", Wie = "⋌", Kie = "⋊", Zie = "▹", Jie = "⊵", Yie = "▸", Xie = "⧎", Qie = "⧴", ese = "⥨", tse = "℞", nse = "Ś", rse = "ś", ose = "‚", ise = "⪸", sse = "Š", ase = "š", cse = "⪼", use = "≻", lse = "≽", fse = "⪰", dse = "⪴", hse = "Ş", pse = "ş", vse = "Ŝ", gse = "ŝ", mse = "⪺", _se = "⪶", bse = "⋩", yse = "⨓", wse = "≿", kse = "С", Sse = "с", xse = "⊡", $se = "⋅", Ese = "⩦", Cse = "⤥", Ise = "↘", Tse = "⇘", Ase = "↘", Ose = "§", Dse = ";", Pse = "⤩", Fse = "∖", Rse = "∖", Nse = "✶", Mse = "𝔖", Lse = "𝔰", qse = "⌢", jse = "♯", Bse = "Щ", zse = "щ", Hse = "Ш", Vse = "ш", Use = "↓", Gse = "←", Wse = "∣", Kse = "∥", Zse = "→", Jse = "↑", Yse = "­", Xse = "Σ", Qse = "σ", eae = "ς", tae = "ς", nae = "∼", rae = "⩪", oae = "≃", iae = "≃", sae = "⪞", aae = "⪠", cae = "⪝", uae = "⪟", lae = "≆", fae = "⨤", dae = "⥲", hae = "←", pae = "∘", vae = "∖", gae = "⨳", mae = "⧤", _ae = "∣", bae = "⌣", yae = "⪪", wae = "⪬", kae = "⪬︀", Sae = "Ь", xae = "ь", $ae = "⌿", Eae = "⧄", Cae = "/", Iae = "𝕊", Tae = "𝕤", Aae = "♠", Oae = "♠", Dae = "∥", Pae = "⊓", Fae = "⊓︀", Rae = "⊔", Nae = "⊔︀", Mae = "√", Lae = "⊏", qae = "⊑", jae = "⊏", Bae = "⊑", zae = "⊐", Hae = "⊒", Vae = "⊐", Uae = "⊒", Gae = "□", Wae = "□", Kae = "⊓", Zae = "⊏", Jae = "⊑", Yae = "⊐", Xae = "⊒", Qae = "⊔", ece = "▪", tce = "□", nce = "▪", rce = "→", oce = "𝒮", ice = "𝓈", sce = "∖", ace = "⌣", cce = "⋆", uce = "⋆", lce = "☆", fce = "★", dce = "ϵ", hce = "ϕ", pce = "¯", vce = "⊂", gce = "⋐", mce = "⪽", _ce = "⫅", bce = "⊆", yce = "⫃", wce = "⫁", kce = "⫋", Sce = "⊊", xce = "⪿", $ce = "⥹", Ece = "⊂", Cce = "⋐", Ice = "⊆", Tce = "⫅", Ace = "⊆", Oce = "⊊", Dce = "⫋", Pce = "⫇", Fce = "⫕", Rce = "⫓", Nce = "⪸", Mce = "≻", Lce = "≽", qce = "≻", jce = "⪰", Bce = "≽", zce = "≿", Hce = "⪰", Vce = "⪺", Uce = "⪶", Gce = "⋩", Wce = "≿", Kce = "∋", Zce = "∑", Jce = "∑", Yce = "♪", Xce = "¹", Qce = "²", eue = "³", tue = "⊃", nue = "⋑", rue = "⪾", oue = "⫘", iue = "⫆", sue = "⊇", aue = "⫄", cue = "⊃", uue = "⊇", lue = "⟉", fue = "⫗", due = "⥻", hue = "⫂", pue = "⫌", vue = "⊋", gue = "⫀", mue = "⊃", _ue = "⋑", bue = "⊇", yue = "⫆", wue = "⊋", kue = "⫌", Sue = "⫈", xue = "⫔", $ue = "⫖", Eue = "⤦", Cue = "↙", Iue = "⇙", Tue = "↙", Aue = "⤪", Oue = "ß", Due = "	", Pue = "⌖", Fue = "Τ", Rue = "τ", Nue = "⎴", Mue = "Ť", Lue = "ť", que = "Ţ", jue = "ţ", Bue = "Т", zue = "т", Hue = "⃛", Vue = "⌕", Uue = "𝔗", Gue = "𝔱", Wue = "∴", Kue = "∴", Zue = "∴", Jue = "Θ", Yue = "θ", Xue = "ϑ", Que = "ϑ", ele = "≈", tle = "∼", nle = "  ", rle = " ", ole = " ", ile = "≈", sle = "∼", ale = "Þ", cle = "þ", ule = "˜", lle = "∼", fle = "≃", dle = "≅", hle = "≈", ple = "⨱", vle = "⊠", gle = "×", mle = "⨰", _le = "∭", ble = "⤨", yle = "⌶", wle = "⫱", kle = "⊤", Sle = "𝕋", xle = "𝕥", $le = "⫚", Ele = "⤩", Cle = "‴", Ile = "™", Tle = "™", Ale = "▵", Ole = "▿", Dle = "◃", Ple = "⊴", Fle = "≜", Rle = "▹", Nle = "⊵", Mle = "◬", Lle = "≜", qle = "⨺", jle = "⃛", Ble = "⨹", zle = "⧍", Hle = "⨻", Vle = "⏢", Ule = "𝒯", Gle = "𝓉", Wle = "Ц", Kle = "ц", Zle = "Ћ", Jle = "ћ", Yle = "Ŧ", Xle = "ŧ", Qle = "≬", efe = "↞", tfe = "↠", nfe = "Ú", rfe = "ú", ofe = "↑", ife = "↟", sfe = "⇑", afe = "⥉", cfe = "Ў", ufe = "ў", lfe = "Ŭ", ffe = "ŭ", dfe = "Û", hfe = "û", pfe = "У", vfe = "у", gfe = "⇅", mfe = "Ű", _fe = "ű", bfe = "⥮", yfe = "⥾", wfe = "𝔘", kfe = "𝔲", Sfe = "Ù", xfe = "ù", $fe = "⥣", Efe = "↿", Cfe = "↾", Ife = "▀", Tfe = "⌜", Afe = "⌜", Ofe = "⌏", Dfe = "◸", Pfe = "Ū", Ffe = "ū", Rfe = "¨", Nfe = "_", Mfe = "⏟", Lfe = "⎵", qfe = "⏝", jfe = "⋃", Bfe = "⊎", zfe = "Ų", Hfe = "ų", Vfe = "𝕌", Ufe = "𝕦", Gfe = "⤒", Wfe = "↑", Kfe = "↑", Zfe = "⇑", Jfe = "⇅", Yfe = "↕", Xfe = "↕", Qfe = "⇕", ede = "⥮", tde = "↿", nde = "↾", rde = "⊎", ode = "↖", ide = "↗", sde = "υ", ade = "ϒ", cde = "ϒ", ude = "Υ", lde = "υ", fde = "↥", dde = "⊥", hde = "⇈", pde = "⌝", vde = "⌝", gde = "⌎", mde = "Ů", _de = "ů", bde = "◹", yde = "𝒰", wde = "𝓊", kde = "⋰", Sde = "Ũ", xde = "ũ", $de = "▵", Ede = "▴", Cde = "⇈", Ide = "Ü", Tde = "ü", Ade = "⦧", Ode = "⦜", Dde = "ϵ", Pde = "ϰ", Fde = "∅", Rde = "ϕ", Nde = "ϖ", Mde = "∝", Lde = "↕", qde = "⇕", jde = "ϱ", Bde = "ς", zde = "⊊︀", Hde = "⫋︀", Vde = "⊋︀", Ude = "⫌︀", Gde = "ϑ", Wde = "⊲", Kde = "⊳", Zde = "⫨", Jde = "⫫", Yde = "⫩", Xde = "В", Qde = "в", ehe = "⊢", the = "⊨", nhe = "⊩", rhe = "⊫", ohe = "⫦", ihe = "⊻", she = "∨", ahe = "⋁", che = "≚", uhe = "⋮", lhe = "|", fhe = "‖", dhe = "|", hhe = "‖", phe = "∣", vhe = "|", ghe = "❘", mhe = "≀", _he = " ", bhe = "𝔙", yhe = "𝔳", whe = "⊲", khe = "⊂⃒", She = "⊃⃒", xhe = "𝕍", $he = "𝕧", Ehe = "∝", Che = "⊳", Ihe = "𝒱", The = "𝓋", Ahe = "⫋︀", Ohe = "⊊︀", Dhe = "⫌︀", Phe = "⊋︀", Fhe = "⊪", Rhe = "⦚", Nhe = "Ŵ", Mhe = "ŵ", Lhe = "⩟", qhe = "∧", jhe = "⋀", Bhe = "≙", zhe = "℘", Hhe = "𝔚", Vhe = "𝔴", Uhe = "𝕎", Ghe = "𝕨", Whe = "℘", Khe = "≀", Zhe = "≀", Jhe = "𝒲", Yhe = "𝓌", Xhe = "⋂", Qhe = "◯", epe = "⋃", tpe = "▽", npe = "𝔛", rpe = "𝔵", ope = "⟷", ipe = "⟺", spe = "Ξ", ape = "ξ", cpe = "⟵", upe = "⟸", lpe = "⟼", fpe = "⋻", dpe = "⨀", hpe = "𝕏", ppe = "𝕩", vpe = "⨁", gpe = "⨂", mpe = "⟶", _pe = "⟹", bpe = "𝒳", ype = "𝓍", wpe = "⨆", kpe = "⨄", Spe = "△", xpe = "⋁", $pe = "⋀", Epe = "Ý", Cpe = "ý", Ipe = "Я", Tpe = "я", Ape = "Ŷ", Ope = "ŷ", Dpe = "Ы", Ppe = "ы", Fpe = "¥", Rpe = "𝔜", Npe = "𝔶", Mpe = "Ї", Lpe = "ї", qpe = "𝕐", jpe = "𝕪", Bpe = "𝒴", zpe = "𝓎", Hpe = "Ю", Vpe = "ю", Upe = "ÿ", Gpe = "Ÿ", Wpe = "Ź", Kpe = "ź", Zpe = "Ž", Jpe = "ž", Ype = "З", Xpe = "з", Qpe = "Ż", eve = "ż", tve = "ℨ", nve = "​", rve = "Ζ", ove = "ζ", ive = "𝔷", sve = "ℨ", ave = "Ж", cve = "ж", uve = "⇝", lve = "𝕫", fve = "ℤ", dve = "𝒵", hve = "𝓏", pve = "‍", vve = "‌", gve = {
  Aacute: XR,
  aacute: QR,
  Abreve: eN,
  abreve: tN,
  ac: nN,
  acd: rN,
  acE: oN,
  Acirc: iN,
  acirc: sN,
  acute: aN,
  Acy: cN,
  acy: uN,
  AElig: lN,
  aelig: fN,
  af: dN,
  Afr: hN,
  afr: pN,
  Agrave: vN,
  agrave: gN,
  alefsym: mN,
  aleph: _N,
  Alpha: bN,
  alpha: yN,
  Amacr: wN,
  amacr: kN,
  amalg: SN,
  amp: xN,
  AMP: $N,
  andand: EN,
  And: CN,
  and: IN,
  andd: TN,
  andslope: AN,
  andv: ON,
  ang: DN,
  ange: PN,
  angle: FN,
  angmsdaa: RN,
  angmsdab: NN,
  angmsdac: MN,
  angmsdad: LN,
  angmsdae: qN,
  angmsdaf: jN,
  angmsdag: BN,
  angmsdah: zN,
  angmsd: HN,
  angrt: VN,
  angrtvb: UN,
  angrtvbd: GN,
  angsph: WN,
  angst: KN,
  angzarr: ZN,
  Aogon: JN,
  aogon: YN,
  Aopf: XN,
  aopf: QN,
  apacir: eM,
  ap: tM,
  apE: nM,
  ape: rM,
  apid: oM,
  apos: iM,
  ApplyFunction: sM,
  approx: aM,
  approxeq: cM,
  Aring: uM,
  aring: lM,
  Ascr: fM,
  ascr: dM,
  Assign: hM,
  ast: pM,
  asymp: vM,
  asympeq: gM,
  Atilde: mM,
  atilde: _M,
  Auml: bM,
  auml: yM,
  awconint: wM,
  awint: kM,
  backcong: SM,
  backepsilon: xM,
  backprime: $M,
  backsim: EM,
  backsimeq: CM,
  Backslash: IM,
  Barv: TM,
  barvee: AM,
  barwed: OM,
  Barwed: DM,
  barwedge: PM,
  bbrk: FM,
  bbrktbrk: RM,
  bcong: NM,
  Bcy: MM,
  bcy: LM,
  bdquo: qM,
  becaus: jM,
  because: BM,
  Because: zM,
  bemptyv: HM,
  bepsi: VM,
  bernou: UM,
  Bernoullis: WM,
  Beta: KM,
  beta: ZM,
  beth: JM,
  between: YM,
  Bfr: XM,
  bfr: QM,
  bigcap: e8,
  bigcirc: t8,
  bigcup: n8,
  bigodot: r8,
  bigoplus: o8,
  bigotimes: i8,
  bigsqcup: s8,
  bigstar: a8,
  bigtriangledown: c8,
  bigtriangleup: u8,
  biguplus: l8,
  bigvee: f8,
  bigwedge: d8,
  bkarow: h8,
  blacklozenge: p8,
  blacksquare: v8,
  blacktriangle: g8,
  blacktriangledown: m8,
  blacktriangleleft: _8,
  blacktriangleright: b8,
  blank: y8,
  blk12: w8,
  blk14: k8,
  blk34: S8,
  block: x8,
  bne: $8,
  bnequiv: E8,
  bNot: C8,
  bnot: I8,
  Bopf: T8,
  bopf: A8,
  bot: O8,
  bottom: D8,
  bowtie: P8,
  boxbox: F8,
  boxdl: R8,
  boxdL: N8,
  boxDl: M8,
  boxDL: L8,
  boxdr: q8,
  boxdR: j8,
  boxDr: B8,
  boxDR: z8,
  boxh: H8,
  boxH: V8,
  boxhd: U8,
  boxHd: G8,
  boxhD: W8,
  boxHD: K8,
  boxhu: Z8,
  boxHu: J8,
  boxhU: Y8,
  boxHU: X8,
  boxminus: Q8,
  boxplus: eL,
  boxtimes: tL,
  boxul: nL,
  boxuL: rL,
  boxUl: oL,
  boxUL: iL,
  boxur: sL,
  boxuR: aL,
  boxUr: cL,
  boxUR: uL,
  boxv: lL,
  boxV: fL,
  boxvh: dL,
  boxvH: hL,
  boxVh: pL,
  boxVH: vL,
  boxvl: gL,
  boxvL: mL,
  boxVl: _L,
  boxVL: bL,
  boxvr: yL,
  boxvR: wL,
  boxVr: kL,
  boxVR: SL,
  bprime: xL,
  breve: $L,
  Breve: EL,
  brvbar: CL,
  bscr: IL,
  Bscr: TL,
  bsemi: AL,
  bsim: OL,
  bsime: DL,
  bsolb: PL,
  bsol: FL,
  bsolhsub: RL,
  bull: NL,
  bullet: ML,
  bump: LL,
  bumpE: qL,
  bumpe: jL,
  Bumpeq: BL,
  bumpeq: zL,
  Cacute: HL,
  cacute: VL,
  capand: UL,
  capbrcup: GL,
  capcap: WL,
  cap: KL,
  Cap: ZL,
  capcup: JL,
  capdot: YL,
  CapitalDifferentialD: XL,
  caps: QL,
  caret: e6,
  caron: t6,
  Cayleys: n6,
  ccaps: r6,
  Ccaron: o6,
  ccaron: i6,
  Ccedil: s6,
  ccedil: a6,
  Ccirc: c6,
  ccirc: u6,
  Cconint: l6,
  ccups: f6,
  ccupssm: d6,
  Cdot: h6,
  cdot: p6,
  cedil: v6,
  Cedilla: g6,
  cemptyv: m6,
  cent: _6,
  centerdot: b6,
  CenterDot: y6,
  cfr: w6,
  Cfr: k6,
  CHcy: S6,
  chcy: x6,
  check: $6,
  checkmark: E6,
  Chi: C6,
  chi: I6,
  circ: T6,
  circeq: A6,
  circlearrowleft: O6,
  circlearrowright: D6,
  circledast: P6,
  circledcirc: F6,
  circleddash: R6,
  CircleDot: N6,
  circledR: M6,
  circledS: L6,
  CircleMinus: q6,
  CirclePlus: j6,
  CircleTimes: B6,
  cir: z6,
  cirE: H6,
  cire: V6,
  cirfnint: U6,
  cirmid: G6,
  cirscir: W6,
  ClockwiseContourIntegral: K6,
  CloseCurlyDoubleQuote: Z6,
  CloseCurlyQuote: J6,
  clubs: Y6,
  clubsuit: X6,
  colon: Q6,
  Colon: eq,
  Colone: tq,
  colone: nq,
  coloneq: rq,
  comma: oq,
  commat: iq,
  comp: sq,
  compfn: aq,
  complement: cq,
  complexes: uq,
  cong: lq,
  congdot: fq,
  Congruent: dq,
  conint: hq,
  Conint: pq,
  ContourIntegral: vq,
  copf: gq,
  Copf: mq,
  coprod: _q,
  Coproduct: bq,
  copy: yq,
  COPY: wq,
  copysr: kq,
  CounterClockwiseContourIntegral: Sq,
  crarr: xq,
  cross: $q,
  Cross: Eq,
  Cscr: Cq,
  cscr: Iq,
  csub: Tq,
  csube: Aq,
  csup: Oq,
  csupe: Dq,
  ctdot: Pq,
  cudarrl: Fq,
  cudarrr: Rq,
  cuepr: Nq,
  cuesc: Mq,
  cularr: Lq,
  cularrp: qq,
  cupbrcap: jq,
  cupcap: Bq,
  CupCap: zq,
  cup: Hq,
  Cup: Vq,
  cupcup: Uq,
  cupdot: Gq,
  cupor: Wq,
  cups: Kq,
  curarr: Zq,
  curarrm: Jq,
  curlyeqprec: Yq,
  curlyeqsucc: Xq,
  curlyvee: Qq,
  curlywedge: ej,
  curren: tj,
  curvearrowleft: nj,
  curvearrowright: rj,
  cuvee: oj,
  cuwed: ij,
  cwconint: sj,
  cwint: aj,
  cylcty: cj,
  dagger: uj,
  Dagger: lj,
  daleth: fj,
  darr: dj,
  Darr: hj,
  dArr: pj,
  dash: vj,
  Dashv: gj,
  dashv: mj,
  dbkarow: _j,
  dblac: bj,
  Dcaron: yj,
  dcaron: wj,
  Dcy: kj,
  dcy: Sj,
  ddagger: xj,
  ddarr: $j,
  DD: Ej,
  dd: Cj,
  DDotrahd: Ij,
  ddotseq: Tj,
  deg: Aj,
  Del: Oj,
  Delta: Dj,
  delta: Pj,
  demptyv: Fj,
  dfisht: Rj,
  Dfr: Nj,
  dfr: Mj,
  dHar: Lj,
  dharl: qj,
  dharr: jj,
  DiacriticalAcute: Bj,
  DiacriticalDot: zj,
  DiacriticalDoubleAcute: Hj,
  DiacriticalGrave: Vj,
  DiacriticalTilde: Uj,
  diam: Gj,
  diamond: Wj,
  Diamond: Kj,
  diamondsuit: Zj,
  diams: Jj,
  die: Yj,
  DifferentialD: Xj,
  digamma: Qj,
  disin: e4,
  div: t4,
  divide: n4,
  divideontimes: r4,
  divonx: o4,
  DJcy: i4,
  djcy: s4,
  dlcorn: a4,
  dlcrop: c4,
  dollar: u4,
  Dopf: l4,
  dopf: f4,
  Dot: d4,
  dot: h4,
  DotDot: p4,
  doteq: v4,
  doteqdot: g4,
  DotEqual: m4,
  dotminus: _4,
  dotplus: b4,
  dotsquare: y4,
  doublebarwedge: w4,
  DoubleContourIntegral: k4,
  DoubleDot: S4,
  DoubleDownArrow: x4,
  DoubleLeftArrow: $4,
  DoubleLeftRightArrow: E4,
  DoubleLeftTee: C4,
  DoubleLongLeftArrow: I4,
  DoubleLongLeftRightArrow: T4,
  DoubleLongRightArrow: A4,
  DoubleRightArrow: O4,
  DoubleRightTee: D4,
  DoubleUpArrow: P4,
  DoubleUpDownArrow: F4,
  DoubleVerticalBar: R4,
  DownArrowBar: N4,
  downarrow: M4,
  DownArrow: L4,
  Downarrow: q4,
  DownArrowUpArrow: j4,
  DownBreve: B4,
  downdownarrows: z4,
  downharpoonleft: H4,
  downharpoonright: V4,
  DownLeftRightVector: U4,
  DownLeftTeeVector: G4,
  DownLeftVectorBar: W4,
  DownLeftVector: K4,
  DownRightTeeVector: Z4,
  DownRightVectorBar: J4,
  DownRightVector: Y4,
  DownTeeArrow: X4,
  DownTee: Q4,
  drbkarow: eB,
  drcorn: tB,
  drcrop: nB,
  Dscr: rB,
  dscr: oB,
  DScy: iB,
  dscy: sB,
  dsol: aB,
  Dstrok: cB,
  dstrok: uB,
  dtdot: lB,
  dtri: fB,
  dtrif: dB,
  duarr: hB,
  duhar: pB,
  dwangle: vB,
  DZcy: gB,
  dzcy: mB,
  dzigrarr: _B,
  Eacute: bB,
  eacute: yB,
  easter: wB,
  Ecaron: kB,
  ecaron: SB,
  Ecirc: xB,
  ecirc: $B,
  ecir: EB,
  ecolon: CB,
  Ecy: IB,
  ecy: TB,
  eDDot: AB,
  Edot: OB,
  edot: DB,
  eDot: PB,
  ee: FB,
  efDot: RB,
  Efr: NB,
  efr: MB,
  eg: LB,
  Egrave: qB,
  egrave: jB,
  egs: BB,
  egsdot: zB,
  el: HB,
  Element: VB,
  elinters: UB,
  ell: GB,
  els: WB,
  elsdot: KB,
  Emacr: ZB,
  emacr: JB,
  empty: YB,
  emptyset: XB,
  EmptySmallSquare: QB,
  emptyv: ez,
  EmptyVerySmallSquare: tz,
  emsp13: nz,
  emsp14: rz,
  emsp: oz,
  ENG: iz,
  eng: sz,
  ensp: az,
  Eogon: cz,
  eogon: uz,
  Eopf: lz,
  eopf: fz,
  epar: dz,
  eparsl: hz,
  eplus: pz,
  epsi: vz,
  Epsilon: gz,
  epsilon: mz,
  epsiv: _z,
  eqcirc: bz,
  eqcolon: yz,
  eqsim: wz,
  eqslantgtr: kz,
  eqslantless: Sz,
  Equal: xz,
  equals: $z,
  EqualTilde: Ez,
  equest: Cz,
  Equilibrium: Iz,
  equiv: Tz,
  equivDD: Az,
  eqvparsl: Oz,
  erarr: Dz,
  erDot: Pz,
  escr: Fz,
  Escr: Rz,
  esdot: Nz,
  Esim: Mz,
  esim: Lz,
  Eta: qz,
  eta: jz,
  ETH: Bz,
  eth: zz,
  Euml: Hz,
  euml: Vz,
  euro: Uz,
  excl: Gz,
  exist: Wz,
  Exists: Kz,
  expectation: Zz,
  exponentiale: Jz,
  ExponentialE: Yz,
  fallingdotseq: Xz,
  Fcy: Qz,
  fcy: e5,
  female: t5,
  ffilig: n5,
  fflig: r5,
  ffllig: o5,
  Ffr: i5,
  ffr: s5,
  filig: a5,
  FilledSmallSquare: c5,
  FilledVerySmallSquare: u5,
  fjlig: l5,
  flat: f5,
  fllig: d5,
  fltns: h5,
  fnof: p5,
  Fopf: v5,
  fopf: g5,
  forall: m5,
  ForAll: _5,
  fork: b5,
  forkv: y5,
  Fouriertrf: w5,
  fpartint: k5,
  frac12: S5,
  frac13: x5,
  frac14: $5,
  frac15: E5,
  frac16: C5,
  frac18: I5,
  frac23: T5,
  frac25: A5,
  frac34: O5,
  frac35: D5,
  frac38: P5,
  frac45: F5,
  frac56: R5,
  frac58: N5,
  frac78: M5,
  frasl: L5,
  frown: q5,
  fscr: j5,
  Fscr: B5,
  gacute: z5,
  Gamma: H5,
  gamma: V5,
  Gammad: U5,
  gammad: G5,
  gap: W5,
  Gbreve: K5,
  gbreve: Z5,
  Gcedil: J5,
  Gcirc: Y5,
  gcirc: X5,
  Gcy: Q5,
  gcy: e7,
  Gdot: t7,
  gdot: n7,
  ge: r7,
  gE: o7,
  gEl: i7,
  gel: s7,
  geq: a7,
  geqq: c7,
  geqslant: u7,
  gescc: l7,
  ges: f7,
  gesdot: d7,
  gesdoto: h7,
  gesdotol: p7,
  gesl: v7,
  gesles: g7,
  Gfr: m7,
  gfr: _7,
  gg: b7,
  Gg: y7,
  ggg: w7,
  gimel: k7,
  GJcy: S7,
  gjcy: x7,
  gla: $7,
  gl: E7,
  glE: C7,
  glj: I7,
  gnap: T7,
  gnapprox: A7,
  gne: O7,
  gnE: D7,
  gneq: P7,
  gneqq: F7,
  gnsim: R7,
  Gopf: N7,
  gopf: M7,
  grave: L7,
  GreaterEqual: q7,
  GreaterEqualLess: j7,
  GreaterFullEqual: B7,
  GreaterGreater: z7,
  GreaterLess: H7,
  GreaterSlantEqual: V7,
  GreaterTilde: U7,
  Gscr: G7,
  gscr: W7,
  gsim: K7,
  gsime: Z7,
  gsiml: J7,
  gtcc: Y7,
  gtcir: X7,
  gt: Q7,
  GT: e9,
  Gt: t9,
  gtdot: n9,
  gtlPar: r9,
  gtquest: o9,
  gtrapprox: i9,
  gtrarr: s9,
  gtrdot: a9,
  gtreqless: c9,
  gtreqqless: u9,
  gtrless: l9,
  gtrsim: f9,
  gvertneqq: d9,
  gvnE: h9,
  Hacek: p9,
  hairsp: v9,
  half: g9,
  hamilt: m9,
  HARDcy: _9,
  hardcy: b9,
  harrcir: y9,
  harr: w9,
  hArr: k9,
  harrw: S9,
  Hat: x9,
  hbar: $9,
  Hcirc: E9,
  hcirc: C9,
  hearts: I9,
  heartsuit: T9,
  hellip: A9,
  hercon: O9,
  hfr: D9,
  Hfr: P9,
  HilbertSpace: F9,
  hksearow: R9,
  hkswarow: N9,
  hoarr: M9,
  homtht: L9,
  hookleftarrow: q9,
  hookrightarrow: j9,
  hopf: B9,
  Hopf: z9,
  horbar: H9,
  HorizontalLine: V9,
  hscr: U9,
  Hscr: G9,
  hslash: W9,
  Hstrok: K9,
  hstrok: Z9,
  HumpDownHump: J9,
  HumpEqual: Y9,
  hybull: X9,
  hyphen: Q9,
  Iacute: eH,
  iacute: tH,
  ic: nH,
  Icirc: rH,
  icirc: oH,
  Icy: iH,
  icy: sH,
  Idot: aH,
  IEcy: cH,
  iecy: uH,
  iexcl: lH,
  iff: fH,
  ifr: dH,
  Ifr: hH,
  Igrave: pH,
  igrave: vH,
  ii: gH,
  iiiint: mH,
  iiint: _H,
  iinfin: bH,
  iiota: yH,
  IJlig: wH,
  ijlig: kH,
  Imacr: SH,
  imacr: xH,
  image: $H,
  ImaginaryI: EH,
  imagline: CH,
  imagpart: IH,
  imath: TH,
  Im: AH,
  imof: OH,
  imped: DH,
  Implies: PH,
  incare: FH,
  in: "∈",
  infin: RH,
  infintie: NH,
  inodot: MH,
  intcal: LH,
  int: qH,
  Int: jH,
  integers: BH,
  Integral: zH,
  intercal: HH,
  Intersection: VH,
  intlarhk: UH,
  intprod: GH,
  InvisibleComma: WH,
  InvisibleTimes: KH,
  IOcy: ZH,
  iocy: JH,
  Iogon: YH,
  iogon: XH,
  Iopf: QH,
  iopf: eV,
  Iota: tV,
  iota: nV,
  iprod: rV,
  iquest: oV,
  iscr: iV,
  Iscr: sV,
  isin: aV,
  isindot: cV,
  isinE: uV,
  isins: lV,
  isinsv: fV,
  isinv: dV,
  it: hV,
  Itilde: pV,
  itilde: vV,
  Iukcy: gV,
  iukcy: mV,
  Iuml: _V,
  iuml: bV,
  Jcirc: yV,
  jcirc: wV,
  Jcy: kV,
  jcy: SV,
  Jfr: xV,
  jfr: $V,
  jmath: EV,
  Jopf: CV,
  jopf: IV,
  Jscr: TV,
  jscr: AV,
  Jsercy: OV,
  jsercy: DV,
  Jukcy: PV,
  jukcy: FV,
  Kappa: RV,
  kappa: NV,
  kappav: MV,
  Kcedil: LV,
  kcedil: qV,
  Kcy: jV,
  kcy: BV,
  Kfr: zV,
  kfr: HV,
  kgreen: VV,
  KHcy: UV,
  khcy: GV,
  KJcy: WV,
  kjcy: KV,
  Kopf: ZV,
  kopf: JV,
  Kscr: YV,
  kscr: XV,
  lAarr: QV,
  Lacute: eU,
  lacute: tU,
  laemptyv: nU,
  lagran: rU,
  Lambda: oU,
  lambda: iU,
  lang: sU,
  Lang: aU,
  langd: cU,
  langle: uU,
  lap: lU,
  Laplacetrf: fU,
  laquo: dU,
  larrb: hU,
  larrbfs: pU,
  larr: vU,
  Larr: gU,
  lArr: mU,
  larrfs: _U,
  larrhk: bU,
  larrlp: yU,
  larrpl: wU,
  larrsim: kU,
  larrtl: SU,
  latail: xU,
  lAtail: $U,
  lat: EU,
  late: CU,
  lates: IU,
  lbarr: TU,
  lBarr: AU,
  lbbrk: OU,
  lbrace: DU,
  lbrack: PU,
  lbrke: FU,
  lbrksld: RU,
  lbrkslu: NU,
  Lcaron: MU,
  lcaron: LU,
  Lcedil: qU,
  lcedil: jU,
  lceil: BU,
  lcub: zU,
  Lcy: HU,
  lcy: VU,
  ldca: UU,
  ldquo: GU,
  ldquor: WU,
  ldrdhar: KU,
  ldrushar: ZU,
  ldsh: JU,
  le: YU,
  lE: XU,
  LeftAngleBracket: QU,
  LeftArrowBar: eG,
  leftarrow: tG,
  LeftArrow: nG,
  Leftarrow: rG,
  LeftArrowRightArrow: oG,
  leftarrowtail: iG,
  LeftCeiling: sG,
  LeftDoubleBracket: aG,
  LeftDownTeeVector: cG,
  LeftDownVectorBar: uG,
  LeftDownVector: lG,
  LeftFloor: fG,
  leftharpoondown: dG,
  leftharpoonup: hG,
  leftleftarrows: pG,
  leftrightarrow: vG,
  LeftRightArrow: gG,
  Leftrightarrow: mG,
  leftrightarrows: _G,
  leftrightharpoons: bG,
  leftrightsquigarrow: yG,
  LeftRightVector: wG,
  LeftTeeArrow: kG,
  LeftTee: SG,
  LeftTeeVector: xG,
  leftthreetimes: $G,
  LeftTriangleBar: EG,
  LeftTriangle: CG,
  LeftTriangleEqual: IG,
  LeftUpDownVector: TG,
  LeftUpTeeVector: AG,
  LeftUpVectorBar: OG,
  LeftUpVector: DG,
  LeftVectorBar: PG,
  LeftVector: FG,
  lEg: RG,
  leg: NG,
  leq: MG,
  leqq: LG,
  leqslant: qG,
  lescc: jG,
  les: BG,
  lesdot: zG,
  lesdoto: HG,
  lesdotor: VG,
  lesg: UG,
  lesges: GG,
  lessapprox: WG,
  lessdot: KG,
  lesseqgtr: ZG,
  lesseqqgtr: JG,
  LessEqualGreater: YG,
  LessFullEqual: XG,
  LessGreater: QG,
  lessgtr: eW,
  LessLess: tW,
  lesssim: nW,
  LessSlantEqual: rW,
  LessTilde: oW,
  lfisht: iW,
  lfloor: sW,
  Lfr: aW,
  lfr: cW,
  lg: uW,
  lgE: lW,
  lHar: fW,
  lhard: dW,
  lharu: hW,
  lharul: pW,
  lhblk: vW,
  LJcy: gW,
  ljcy: mW,
  llarr: _W,
  ll: bW,
  Ll: yW,
  llcorner: wW,
  Lleftarrow: kW,
  llhard: SW,
  lltri: xW,
  Lmidot: $W,
  lmidot: EW,
  lmoustache: CW,
  lmoust: IW,
  lnap: TW,
  lnapprox: AW,
  lne: OW,
  lnE: DW,
  lneq: PW,
  lneqq: FW,
  lnsim: RW,
  loang: NW,
  loarr: MW,
  lobrk: LW,
  longleftarrow: qW,
  LongLeftArrow: jW,
  Longleftarrow: BW,
  longleftrightarrow: zW,
  LongLeftRightArrow: HW,
  Longleftrightarrow: VW,
  longmapsto: UW,
  longrightarrow: GW,
  LongRightArrow: WW,
  Longrightarrow: KW,
  looparrowleft: ZW,
  looparrowright: JW,
  lopar: YW,
  Lopf: XW,
  lopf: QW,
  loplus: eK,
  lotimes: tK,
  lowast: nK,
  lowbar: rK,
  LowerLeftArrow: oK,
  LowerRightArrow: iK,
  loz: sK,
  lozenge: aK,
  lozf: cK,
  lpar: uK,
  lparlt: lK,
  lrarr: fK,
  lrcorner: dK,
  lrhar: hK,
  lrhard: pK,
  lrm: vK,
  lrtri: gK,
  lsaquo: mK,
  lscr: _K,
  Lscr: bK,
  lsh: yK,
  Lsh: wK,
  lsim: kK,
  lsime: SK,
  lsimg: xK,
  lsqb: $K,
  lsquo: EK,
  lsquor: CK,
  Lstrok: IK,
  lstrok: TK,
  ltcc: AK,
  ltcir: OK,
  lt: DK,
  LT: PK,
  Lt: FK,
  ltdot: RK,
  lthree: NK,
  ltimes: MK,
  ltlarr: LK,
  ltquest: qK,
  ltri: jK,
  ltrie: BK,
  ltrif: zK,
  ltrPar: HK,
  lurdshar: VK,
  luruhar: UK,
  lvertneqq: GK,
  lvnE: WK,
  macr: KK,
  male: ZK,
  malt: JK,
  maltese: YK,
  Map: "⤅",
  map: XK,
  mapsto: QK,
  mapstodown: eZ,
  mapstoleft: tZ,
  mapstoup: nZ,
  marker: rZ,
  mcomma: oZ,
  Mcy: iZ,
  mcy: sZ,
  mdash: aZ,
  mDDot: cZ,
  measuredangle: uZ,
  MediumSpace: lZ,
  Mellintrf: fZ,
  Mfr: dZ,
  mfr: hZ,
  mho: pZ,
  micro: vZ,
  midast: gZ,
  midcir: mZ,
  mid: _Z,
  middot: bZ,
  minusb: yZ,
  minus: wZ,
  minusd: kZ,
  minusdu: SZ,
  MinusPlus: xZ,
  mlcp: $Z,
  mldr: EZ,
  mnplus: CZ,
  models: IZ,
  Mopf: TZ,
  mopf: AZ,
  mp: OZ,
  mscr: DZ,
  Mscr: PZ,
  mstpos: FZ,
  Mu: RZ,
  mu: NZ,
  multimap: MZ,
  mumap: LZ,
  nabla: qZ,
  Nacute: jZ,
  nacute: BZ,
  nang: zZ,
  nap: HZ,
  napE: VZ,
  napid: UZ,
  napos: GZ,
  napprox: WZ,
  natural: KZ,
  naturals: ZZ,
  natur: JZ,
  nbsp: YZ,
  nbump: XZ,
  nbumpe: QZ,
  ncap: eJ,
  Ncaron: tJ,
  ncaron: nJ,
  Ncedil: rJ,
  ncedil: oJ,
  ncong: iJ,
  ncongdot: sJ,
  ncup: aJ,
  Ncy: cJ,
  ncy: uJ,
  ndash: lJ,
  nearhk: fJ,
  nearr: dJ,
  neArr: hJ,
  nearrow: pJ,
  ne: vJ,
  nedot: gJ,
  NegativeMediumSpace: mJ,
  NegativeThickSpace: _J,
  NegativeThinSpace: bJ,
  NegativeVeryThinSpace: yJ,
  nequiv: wJ,
  nesear: kJ,
  nesim: SJ,
  NestedGreaterGreater: xJ,
  NestedLessLess: $J,
  NewLine: EJ,
  nexist: CJ,
  nexists: IJ,
  Nfr: TJ,
  nfr: AJ,
  ngE: OJ,
  nge: DJ,
  ngeq: PJ,
  ngeqq: FJ,
  ngeqslant: RJ,
  nges: NJ,
  nGg: MJ,
  ngsim: LJ,
  nGt: qJ,
  ngt: jJ,
  ngtr: BJ,
  nGtv: zJ,
  nharr: HJ,
  nhArr: VJ,
  nhpar: UJ,
  ni: GJ,
  nis: WJ,
  nisd: KJ,
  niv: ZJ,
  NJcy: JJ,
  njcy: YJ,
  nlarr: XJ,
  nlArr: QJ,
  nldr: eY,
  nlE: tY,
  nle: nY,
  nleftarrow: rY,
  nLeftarrow: oY,
  nleftrightarrow: iY,
  nLeftrightarrow: sY,
  nleq: aY,
  nleqq: cY,
  nleqslant: uY,
  nles: lY,
  nless: fY,
  nLl: dY,
  nlsim: hY,
  nLt: pY,
  nlt: vY,
  nltri: gY,
  nltrie: mY,
  nLtv: _Y,
  nmid: bY,
  NoBreak: yY,
  NonBreakingSpace: wY,
  nopf: kY,
  Nopf: SY,
  Not: xY,
  not: $Y,
  NotCongruent: EY,
  NotCupCap: CY,
  NotDoubleVerticalBar: IY,
  NotElement: TY,
  NotEqual: AY,
  NotEqualTilde: OY,
  NotExists: DY,
  NotGreater: PY,
  NotGreaterEqual: FY,
  NotGreaterFullEqual: RY,
  NotGreaterGreater: NY,
  NotGreaterLess: MY,
  NotGreaterSlantEqual: LY,
  NotGreaterTilde: qY,
  NotHumpDownHump: jY,
  NotHumpEqual: BY,
  notin: zY,
  notindot: HY,
  notinE: VY,
  notinva: UY,
  notinvb: GY,
  notinvc: WY,
  NotLeftTriangleBar: KY,
  NotLeftTriangle: ZY,
  NotLeftTriangleEqual: JY,
  NotLess: YY,
  NotLessEqual: XY,
  NotLessGreater: QY,
  NotLessLess: eX,
  NotLessSlantEqual: tX,
  NotLessTilde: nX,
  NotNestedGreaterGreater: rX,
  NotNestedLessLess: oX,
  notni: iX,
  notniva: sX,
  notnivb: aX,
  notnivc: cX,
  NotPrecedes: uX,
  NotPrecedesEqual: lX,
  NotPrecedesSlantEqual: fX,
  NotReverseElement: dX,
  NotRightTriangleBar: hX,
  NotRightTriangle: pX,
  NotRightTriangleEqual: vX,
  NotSquareSubset: gX,
  NotSquareSubsetEqual: mX,
  NotSquareSuperset: _X,
  NotSquareSupersetEqual: bX,
  NotSubset: yX,
  NotSubsetEqual: wX,
  NotSucceeds: kX,
  NotSucceedsEqual: SX,
  NotSucceedsSlantEqual: xX,
  NotSucceedsTilde: $X,
  NotSuperset: EX,
  NotSupersetEqual: CX,
  NotTilde: IX,
  NotTildeEqual: TX,
  NotTildeFullEqual: AX,
  NotTildeTilde: OX,
  NotVerticalBar: DX,
  nparallel: PX,
  npar: FX,
  nparsl: RX,
  npart: NX,
  npolint: MX,
  npr: LX,
  nprcue: qX,
  nprec: jX,
  npreceq: BX,
  npre: zX,
  nrarrc: HX,
  nrarr: VX,
  nrArr: UX,
  nrarrw: GX,
  nrightarrow: WX,
  nRightarrow: KX,
  nrtri: ZX,
  nrtrie: JX,
  nsc: YX,
  nsccue: XX,
  nsce: QX,
  Nscr: eQ,
  nscr: tQ,
  nshortmid: nQ,
  nshortparallel: rQ,
  nsim: oQ,
  nsime: iQ,
  nsimeq: sQ,
  nsmid: aQ,
  nspar: cQ,
  nsqsube: uQ,
  nsqsupe: lQ,
  nsub: fQ,
  nsubE: dQ,
  nsube: hQ,
  nsubset: pQ,
  nsubseteq: vQ,
  nsubseteqq: gQ,
  nsucc: mQ,
  nsucceq: _Q,
  nsup: bQ,
  nsupE: yQ,
  nsupe: wQ,
  nsupset: kQ,
  nsupseteq: SQ,
  nsupseteqq: xQ,
  ntgl: $Q,
  Ntilde: EQ,
  ntilde: CQ,
  ntlg: IQ,
  ntriangleleft: TQ,
  ntrianglelefteq: AQ,
  ntriangleright: OQ,
  ntrianglerighteq: DQ,
  Nu: PQ,
  nu: FQ,
  num: RQ,
  numero: NQ,
  numsp: MQ,
  nvap: LQ,
  nvdash: qQ,
  nvDash: jQ,
  nVdash: BQ,
  nVDash: zQ,
  nvge: HQ,
  nvgt: VQ,
  nvHarr: UQ,
  nvinfin: GQ,
  nvlArr: WQ,
  nvle: KQ,
  nvlt: ZQ,
  nvltrie: JQ,
  nvrArr: YQ,
  nvrtrie: XQ,
  nvsim: QQ,
  nwarhk: eee,
  nwarr: tee,
  nwArr: nee,
  nwarrow: ree,
  nwnear: oee,
  Oacute: iee,
  oacute: see,
  oast: aee,
  Ocirc: cee,
  ocirc: uee,
  ocir: lee,
  Ocy: fee,
  ocy: dee,
  odash: hee,
  Odblac: pee,
  odblac: vee,
  odiv: gee,
  odot: mee,
  odsold: _ee,
  OElig: bee,
  oelig: yee,
  ofcir: wee,
  Ofr: kee,
  ofr: See,
  ogon: xee,
  Ograve: $ee,
  ograve: Eee,
  ogt: Cee,
  ohbar: Iee,
  ohm: Tee,
  oint: Aee,
  olarr: Oee,
  olcir: Dee,
  olcross: Pee,
  oline: Fee,
  olt: Ree,
  Omacr: Nee,
  omacr: Mee,
  Omega: Lee,
  omega: qee,
  Omicron: jee,
  omicron: Bee,
  omid: zee,
  ominus: Hee,
  Oopf: Vee,
  oopf: Uee,
  opar: Gee,
  OpenCurlyDoubleQuote: Wee,
  OpenCurlyQuote: Kee,
  operp: Zee,
  oplus: Jee,
  orarr: Yee,
  Or: Xee,
  or: Qee,
  ord: ete,
  order: tte,
  orderof: nte,
  ordf: rte,
  ordm: ote,
  origof: ite,
  oror: ste,
  orslope: ate,
  orv: cte,
  oS: ute,
  Oscr: lte,
  oscr: fte,
  Oslash: dte,
  oslash: hte,
  osol: pte,
  Otilde: vte,
  otilde: gte,
  otimesas: mte,
  Otimes: _te,
  otimes: bte,
  Ouml: yte,
  ouml: wte,
  ovbar: kte,
  OverBar: Ste,
  OverBrace: xte,
  OverBracket: $te,
  OverParenthesis: Ete,
  para: Cte,
  parallel: Ite,
  par: Tte,
  parsim: Ate,
  parsl: Ote,
  part: Dte,
  PartialD: Pte,
  Pcy: Fte,
  pcy: Rte,
  percnt: Nte,
  period: Mte,
  permil: Lte,
  perp: qte,
  pertenk: jte,
  Pfr: Bte,
  pfr: zte,
  Phi: Hte,
  phi: Vte,
  phiv: Ute,
  phmmat: Gte,
  phone: Wte,
  Pi: Kte,
  pi: Zte,
  pitchfork: Jte,
  piv: Yte,
  planck: Xte,
  planckh: Qte,
  plankv: ene,
  plusacir: tne,
  plusb: nne,
  pluscir: rne,
  plus: one,
  plusdo: ine,
  plusdu: sne,
  pluse: ane,
  PlusMinus: cne,
  plusmn: une,
  plussim: lne,
  plustwo: fne,
  pm: dne,
  Poincareplane: hne,
  pointint: pne,
  popf: vne,
  Popf: gne,
  pound: mne,
  prap: _ne,
  Pr: bne,
  pr: yne,
  prcue: wne,
  precapprox: kne,
  prec: Sne,
  preccurlyeq: xne,
  Precedes: $ne,
  PrecedesEqual: Ene,
  PrecedesSlantEqual: Cne,
  PrecedesTilde: Ine,
  preceq: Tne,
  precnapprox: Ane,
  precneqq: One,
  precnsim: Dne,
  pre: Pne,
  prE: Fne,
  precsim: Rne,
  prime: Nne,
  Prime: Mne,
  primes: Lne,
  prnap: qne,
  prnE: jne,
  prnsim: Bne,
  prod: zne,
  Product: Hne,
  profalar: Vne,
  profline: Une,
  profsurf: Gne,
  prop: Wne,
  Proportional: Kne,
  Proportion: Zne,
  propto: Jne,
  prsim: Yne,
  prurel: Xne,
  Pscr: Qne,
  pscr: ere,
  Psi: tre,
  psi: nre,
  puncsp: rre,
  Qfr: ore,
  qfr: ire,
  qint: sre,
  qopf: are,
  Qopf: cre,
  qprime: ure,
  Qscr: lre,
  qscr: fre,
  quaternions: dre,
  quatint: hre,
  quest: pre,
  questeq: vre,
  quot: gre,
  QUOT: mre,
  rAarr: _re,
  race: bre,
  Racute: yre,
  racute: wre,
  radic: kre,
  raemptyv: Sre,
  rang: xre,
  Rang: $re,
  rangd: Ere,
  range: Cre,
  rangle: Ire,
  raquo: Tre,
  rarrap: Are,
  rarrb: Ore,
  rarrbfs: Dre,
  rarrc: Pre,
  rarr: Fre,
  Rarr: Rre,
  rArr: Nre,
  rarrfs: Mre,
  rarrhk: Lre,
  rarrlp: qre,
  rarrpl: jre,
  rarrsim: Bre,
  Rarrtl: zre,
  rarrtl: Hre,
  rarrw: Vre,
  ratail: Ure,
  rAtail: Gre,
  ratio: Wre,
  rationals: Kre,
  rbarr: Zre,
  rBarr: Jre,
  RBarr: Yre,
  rbbrk: Xre,
  rbrace: Qre,
  rbrack: eoe,
  rbrke: toe,
  rbrksld: noe,
  rbrkslu: roe,
  Rcaron: ooe,
  rcaron: ioe,
  Rcedil: soe,
  rcedil: aoe,
  rceil: coe,
  rcub: uoe,
  Rcy: loe,
  rcy: foe,
  rdca: doe,
  rdldhar: hoe,
  rdquo: poe,
  rdquor: voe,
  rdsh: goe,
  real: moe,
  realine: _oe,
  realpart: boe,
  reals: yoe,
  Re: woe,
  rect: koe,
  reg: Soe,
  REG: xoe,
  ReverseElement: $oe,
  ReverseEquilibrium: Eoe,
  ReverseUpEquilibrium: Coe,
  rfisht: Ioe,
  rfloor: Toe,
  rfr: Aoe,
  Rfr: Ooe,
  rHar: Doe,
  rhard: Poe,
  rharu: Foe,
  rharul: Roe,
  Rho: Noe,
  rho: Moe,
  rhov: Loe,
  RightAngleBracket: qoe,
  RightArrowBar: joe,
  rightarrow: Boe,
  RightArrow: zoe,
  Rightarrow: Hoe,
  RightArrowLeftArrow: Voe,
  rightarrowtail: Uoe,
  RightCeiling: Goe,
  RightDoubleBracket: Woe,
  RightDownTeeVector: Koe,
  RightDownVectorBar: Zoe,
  RightDownVector: Joe,
  RightFloor: Yoe,
  rightharpoondown: Xoe,
  rightharpoonup: Qoe,
  rightleftarrows: eie,
  rightleftharpoons: tie,
  rightrightarrows: nie,
  rightsquigarrow: rie,
  RightTeeArrow: oie,
  RightTee: iie,
  RightTeeVector: sie,
  rightthreetimes: aie,
  RightTriangleBar: cie,
  RightTriangle: uie,
  RightTriangleEqual: lie,
  RightUpDownVector: fie,
  RightUpTeeVector: die,
  RightUpVectorBar: hie,
  RightUpVector: pie,
  RightVectorBar: vie,
  RightVector: gie,
  ring: mie,
  risingdotseq: _ie,
  rlarr: bie,
  rlhar: yie,
  rlm: wie,
  rmoustache: kie,
  rmoust: Sie,
  rnmid: xie,
  roang: $ie,
  roarr: Eie,
  robrk: Cie,
  ropar: Iie,
  ropf: Tie,
  Ropf: Aie,
  roplus: Oie,
  rotimes: Die,
  RoundImplies: Pie,
  rpar: Fie,
  rpargt: Rie,
  rppolint: Nie,
  rrarr: Mie,
  Rrightarrow: Lie,
  rsaquo: qie,
  rscr: jie,
  Rscr: Bie,
  rsh: zie,
  Rsh: Hie,
  rsqb: Vie,
  rsquo: Uie,
  rsquor: Gie,
  rthree: Wie,
  rtimes: Kie,
  rtri: Zie,
  rtrie: Jie,
  rtrif: Yie,
  rtriltri: Xie,
  RuleDelayed: Qie,
  ruluhar: ese,
  rx: tse,
  Sacute: nse,
  sacute: rse,
  sbquo: ose,
  scap: ise,
  Scaron: sse,
  scaron: ase,
  Sc: cse,
  sc: use,
  sccue: lse,
  sce: fse,
  scE: dse,
  Scedil: hse,
  scedil: pse,
  Scirc: vse,
  scirc: gse,
  scnap: mse,
  scnE: _se,
  scnsim: bse,
  scpolint: yse,
  scsim: wse,
  Scy: kse,
  scy: Sse,
  sdotb: xse,
  sdot: $se,
  sdote: Ese,
  searhk: Cse,
  searr: Ise,
  seArr: Tse,
  searrow: Ase,
  sect: Ose,
  semi: Dse,
  seswar: Pse,
  setminus: Fse,
  setmn: Rse,
  sext: Nse,
  Sfr: Mse,
  sfr: Lse,
  sfrown: qse,
  sharp: jse,
  SHCHcy: Bse,
  shchcy: zse,
  SHcy: Hse,
  shcy: Vse,
  ShortDownArrow: Use,
  ShortLeftArrow: Gse,
  shortmid: Wse,
  shortparallel: Kse,
  ShortRightArrow: Zse,
  ShortUpArrow: Jse,
  shy: Yse,
  Sigma: Xse,
  sigma: Qse,
  sigmaf: eae,
  sigmav: tae,
  sim: nae,
  simdot: rae,
  sime: oae,
  simeq: iae,
  simg: sae,
  simgE: aae,
  siml: cae,
  simlE: uae,
  simne: lae,
  simplus: fae,
  simrarr: dae,
  slarr: hae,
  SmallCircle: pae,
  smallsetminus: vae,
  smashp: gae,
  smeparsl: mae,
  smid: _ae,
  smile: bae,
  smt: yae,
  smte: wae,
  smtes: kae,
  SOFTcy: Sae,
  softcy: xae,
  solbar: $ae,
  solb: Eae,
  sol: Cae,
  Sopf: Iae,
  sopf: Tae,
  spades: Aae,
  spadesuit: Oae,
  spar: Dae,
  sqcap: Pae,
  sqcaps: Fae,
  sqcup: Rae,
  sqcups: Nae,
  Sqrt: Mae,
  sqsub: Lae,
  sqsube: qae,
  sqsubset: jae,
  sqsubseteq: Bae,
  sqsup: zae,
  sqsupe: Hae,
  sqsupset: Vae,
  sqsupseteq: Uae,
  square: Gae,
  Square: Wae,
  SquareIntersection: Kae,
  SquareSubset: Zae,
  SquareSubsetEqual: Jae,
  SquareSuperset: Yae,
  SquareSupersetEqual: Xae,
  SquareUnion: Qae,
  squarf: ece,
  squ: tce,
  squf: nce,
  srarr: rce,
  Sscr: oce,
  sscr: ice,
  ssetmn: sce,
  ssmile: ace,
  sstarf: cce,
  Star: uce,
  star: lce,
  starf: fce,
  straightepsilon: dce,
  straightphi: hce,
  strns: pce,
  sub: vce,
  Sub: gce,
  subdot: mce,
  subE: _ce,
  sube: bce,
  subedot: yce,
  submult: wce,
  subnE: kce,
  subne: Sce,
  subplus: xce,
  subrarr: $ce,
  subset: Ece,
  Subset: Cce,
  subseteq: Ice,
  subseteqq: Tce,
  SubsetEqual: Ace,
  subsetneq: Oce,
  subsetneqq: Dce,
  subsim: Pce,
  subsub: Fce,
  subsup: Rce,
  succapprox: Nce,
  succ: Mce,
  succcurlyeq: Lce,
  Succeeds: qce,
  SucceedsEqual: jce,
  SucceedsSlantEqual: Bce,
  SucceedsTilde: zce,
  succeq: Hce,
  succnapprox: Vce,
  succneqq: Uce,
  succnsim: Gce,
  succsim: Wce,
  SuchThat: Kce,
  sum: Zce,
  Sum: Jce,
  sung: Yce,
  sup1: Xce,
  sup2: Qce,
  sup3: eue,
  sup: tue,
  Sup: nue,
  supdot: rue,
  supdsub: oue,
  supE: iue,
  supe: sue,
  supedot: aue,
  Superset: cue,
  SupersetEqual: uue,
  suphsol: lue,
  suphsub: fue,
  suplarr: due,
  supmult: hue,
  supnE: pue,
  supne: vue,
  supplus: gue,
  supset: mue,
  Supset: _ue,
  supseteq: bue,
  supseteqq: yue,
  supsetneq: wue,
  supsetneqq: kue,
  supsim: Sue,
  supsub: xue,
  supsup: $ue,
  swarhk: Eue,
  swarr: Cue,
  swArr: Iue,
  swarrow: Tue,
  swnwar: Aue,
  szlig: Oue,
  Tab: Due,
  target: Pue,
  Tau: Fue,
  tau: Rue,
  tbrk: Nue,
  Tcaron: Mue,
  tcaron: Lue,
  Tcedil: que,
  tcedil: jue,
  Tcy: Bue,
  tcy: zue,
  tdot: Hue,
  telrec: Vue,
  Tfr: Uue,
  tfr: Gue,
  there4: Wue,
  therefore: Kue,
  Therefore: Zue,
  Theta: Jue,
  theta: Yue,
  thetasym: Xue,
  thetav: Que,
  thickapprox: ele,
  thicksim: tle,
  ThickSpace: nle,
  ThinSpace: rle,
  thinsp: ole,
  thkap: ile,
  thksim: sle,
  THORN: ale,
  thorn: cle,
  tilde: ule,
  Tilde: lle,
  TildeEqual: fle,
  TildeFullEqual: dle,
  TildeTilde: hle,
  timesbar: ple,
  timesb: vle,
  times: gle,
  timesd: mle,
  tint: _le,
  toea: ble,
  topbot: yle,
  topcir: wle,
  top: kle,
  Topf: Sle,
  topf: xle,
  topfork: $le,
  tosa: Ele,
  tprime: Cle,
  trade: Ile,
  TRADE: Tle,
  triangle: Ale,
  triangledown: Ole,
  triangleleft: Dle,
  trianglelefteq: Ple,
  triangleq: Fle,
  triangleright: Rle,
  trianglerighteq: Nle,
  tridot: Mle,
  trie: Lle,
  triminus: qle,
  TripleDot: jle,
  triplus: Ble,
  trisb: zle,
  tritime: Hle,
  trpezium: Vle,
  Tscr: Ule,
  tscr: Gle,
  TScy: Wle,
  tscy: Kle,
  TSHcy: Zle,
  tshcy: Jle,
  Tstrok: Yle,
  tstrok: Xle,
  twixt: Qle,
  twoheadleftarrow: efe,
  twoheadrightarrow: tfe,
  Uacute: nfe,
  uacute: rfe,
  uarr: ofe,
  Uarr: ife,
  uArr: sfe,
  Uarrocir: afe,
  Ubrcy: cfe,
  ubrcy: ufe,
  Ubreve: lfe,
  ubreve: ffe,
  Ucirc: dfe,
  ucirc: hfe,
  Ucy: pfe,
  ucy: vfe,
  udarr: gfe,
  Udblac: mfe,
  udblac: _fe,
  udhar: bfe,
  ufisht: yfe,
  Ufr: wfe,
  ufr: kfe,
  Ugrave: Sfe,
  ugrave: xfe,
  uHar: $fe,
  uharl: Efe,
  uharr: Cfe,
  uhblk: Ife,
  ulcorn: Tfe,
  ulcorner: Afe,
  ulcrop: Ofe,
  ultri: Dfe,
  Umacr: Pfe,
  umacr: Ffe,
  uml: Rfe,
  UnderBar: Nfe,
  UnderBrace: Mfe,
  UnderBracket: Lfe,
  UnderParenthesis: qfe,
  Union: jfe,
  UnionPlus: Bfe,
  Uogon: zfe,
  uogon: Hfe,
  Uopf: Vfe,
  uopf: Ufe,
  UpArrowBar: Gfe,
  uparrow: Wfe,
  UpArrow: Kfe,
  Uparrow: Zfe,
  UpArrowDownArrow: Jfe,
  updownarrow: Yfe,
  UpDownArrow: Xfe,
  Updownarrow: Qfe,
  UpEquilibrium: ede,
  upharpoonleft: tde,
  upharpoonright: nde,
  uplus: rde,
  UpperLeftArrow: ode,
  UpperRightArrow: ide,
  upsi: sde,
  Upsi: ade,
  upsih: cde,
  Upsilon: ude,
  upsilon: lde,
  UpTeeArrow: fde,
  UpTee: dde,
  upuparrows: hde,
  urcorn: pde,
  urcorner: vde,
  urcrop: gde,
  Uring: mde,
  uring: _de,
  urtri: bde,
  Uscr: yde,
  uscr: wde,
  utdot: kde,
  Utilde: Sde,
  utilde: xde,
  utri: $de,
  utrif: Ede,
  uuarr: Cde,
  Uuml: Ide,
  uuml: Tde,
  uwangle: Ade,
  vangrt: Ode,
  varepsilon: Dde,
  varkappa: Pde,
  varnothing: Fde,
  varphi: Rde,
  varpi: Nde,
  varpropto: Mde,
  varr: Lde,
  vArr: qde,
  varrho: jde,
  varsigma: Bde,
  varsubsetneq: zde,
  varsubsetneqq: Hde,
  varsupsetneq: Vde,
  varsupsetneqq: Ude,
  vartheta: Gde,
  vartriangleleft: Wde,
  vartriangleright: Kde,
  vBar: Zde,
  Vbar: Jde,
  vBarv: Yde,
  Vcy: Xde,
  vcy: Qde,
  vdash: ehe,
  vDash: the,
  Vdash: nhe,
  VDash: rhe,
  Vdashl: ohe,
  veebar: ihe,
  vee: she,
  Vee: ahe,
  veeeq: che,
  vellip: uhe,
  verbar: lhe,
  Verbar: fhe,
  vert: dhe,
  Vert: hhe,
  VerticalBar: phe,
  VerticalLine: vhe,
  VerticalSeparator: ghe,
  VerticalTilde: mhe,
  VeryThinSpace: _he,
  Vfr: bhe,
  vfr: yhe,
  vltri: whe,
  vnsub: khe,
  vnsup: She,
  Vopf: xhe,
  vopf: $he,
  vprop: Ehe,
  vrtri: Che,
  Vscr: Ihe,
  vscr: The,
  vsubnE: Ahe,
  vsubne: Ohe,
  vsupnE: Dhe,
  vsupne: Phe,
  Vvdash: Fhe,
  vzigzag: Rhe,
  Wcirc: Nhe,
  wcirc: Mhe,
  wedbar: Lhe,
  wedge: qhe,
  Wedge: jhe,
  wedgeq: Bhe,
  weierp: zhe,
  Wfr: Hhe,
  wfr: Vhe,
  Wopf: Uhe,
  wopf: Ghe,
  wp: Whe,
  wr: Khe,
  wreath: Zhe,
  Wscr: Jhe,
  wscr: Yhe,
  xcap: Xhe,
  xcirc: Qhe,
  xcup: epe,
  xdtri: tpe,
  Xfr: npe,
  xfr: rpe,
  xharr: ope,
  xhArr: ipe,
  Xi: spe,
  xi: ape,
  xlarr: cpe,
  xlArr: upe,
  xmap: lpe,
  xnis: fpe,
  xodot: dpe,
  Xopf: hpe,
  xopf: ppe,
  xoplus: vpe,
  xotime: gpe,
  xrarr: mpe,
  xrArr: _pe,
  Xscr: bpe,
  xscr: ype,
  xsqcup: wpe,
  xuplus: kpe,
  xutri: Spe,
  xvee: xpe,
  xwedge: $pe,
  Yacute: Epe,
  yacute: Cpe,
  YAcy: Ipe,
  yacy: Tpe,
  Ycirc: Ape,
  ycirc: Ope,
  Ycy: Dpe,
  ycy: Ppe,
  yen: Fpe,
  Yfr: Rpe,
  yfr: Npe,
  YIcy: Mpe,
  yicy: Lpe,
  Yopf: qpe,
  yopf: jpe,
  Yscr: Bpe,
  yscr: zpe,
  YUcy: Hpe,
  yucy: Vpe,
  yuml: Upe,
  Yuml: Gpe,
  Zacute: Wpe,
  zacute: Kpe,
  Zcaron: Zpe,
  zcaron: Jpe,
  Zcy: Ype,
  zcy: Xpe,
  Zdot: Qpe,
  zdot: eve,
  zeetrf: tve,
  ZeroWidthSpace: nve,
  Zeta: rve,
  zeta: ove,
  zfr: ive,
  Zfr: sve,
  ZHcy: ave,
  zhcy: cve,
  zigrarr: uve,
  zopf: lve,
  Zopf: fve,
  Zscr: dve,
  zscr: hve,
  zwj: pve,
  zwnj: vve
};
var tk = gve, id = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, Dr = {}, r_ = {};
function mve(t) {
  var e, n, r = r_[t];
  if (r)
    return r;
  for (r = r_[t] = [], e = 0; e < 128; e++)
    n = String.fromCharCode(e), /^[0-9a-z]$/i.test(n) ? r.push(n) : r.push("%" + ("0" + e.toString(16).toUpperCase()).slice(-2));
  for (e = 0; e < t.length; e++)
    r[t.charCodeAt(e)] = t[e];
  return r;
}
function qs(t, e, n) {
  var r, o, i, s, a, c = "";
  for (typeof e != "string" && (n = e, e = qs.defaultChars), typeof n > "u" && (n = !0), a = mve(e), r = 0, o = t.length; r < o; r++) {
    if (i = t.charCodeAt(r), n && i === 37 && r + 2 < o && /^[0-9a-f]{2}$/i.test(t.slice(r + 1, r + 3))) {
      c += t.slice(r, r + 3), r += 2;
      continue;
    }
    if (i < 128) {
      c += a[i];
      continue;
    }
    if (i >= 55296 && i <= 57343) {
      if (i >= 55296 && i <= 56319 && r + 1 < o && (s = t.charCodeAt(r + 1), s >= 56320 && s <= 57343)) {
        c += encodeURIComponent(t[r] + t[r + 1]), r++;
        continue;
      }
      c += "%EF%BF%BD";
      continue;
    }
    c += encodeURIComponent(t[r]);
  }
  return c;
}
qs.defaultChars = ";/?:@&=+$,-_.!~*'()#";
qs.componentChars = "-_.!~*'()";
var _ve = qs, o_ = {};
function bve(t) {
  var e, n, r = o_[t];
  if (r)
    return r;
  for (r = o_[t] = [], e = 0; e < 128; e++)
    n = String.fromCharCode(e), r.push(n);
  for (e = 0; e < t.length; e++)
    n = t.charCodeAt(e), r[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
  return r;
}
function js(t, e) {
  var n;
  return typeof e != "string" && (e = js.defaultChars), n = bve(e), t.replace(/(%[a-f0-9]{2})+/gi, function(r) {
    var o, i, s, a, c, u, l, f = "";
    for (o = 0, i = r.length; o < i; o += 3) {
      if (s = parseInt(r.slice(o + 1, o + 3), 16), s < 128) {
        f += n[s];
        continue;
      }
      if ((s & 224) === 192 && o + 3 < i && (a = parseInt(r.slice(o + 4, o + 6), 16), (a & 192) === 128)) {
        l = s << 6 & 1984 | a & 63, l < 128 ? f += "��" : f += String.fromCharCode(l), o += 3;
        continue;
      }
      if ((s & 240) === 224 && o + 6 < i && (a = parseInt(r.slice(o + 4, o + 6), 16), c = parseInt(r.slice(o + 7, o + 9), 16), (a & 192) === 128 && (c & 192) === 128)) {
        l = s << 12 & 61440 | a << 6 & 4032 | c & 63, l < 2048 || l >= 55296 && l <= 57343 ? f += "���" : f += String.fromCharCode(l), o += 6;
        continue;
      }
      if ((s & 248) === 240 && o + 9 < i && (a = parseInt(r.slice(o + 4, o + 6), 16), c = parseInt(r.slice(o + 7, o + 9), 16), u = parseInt(r.slice(o + 10, o + 12), 16), (a & 192) === 128 && (c & 192) === 128 && (u & 192) === 128)) {
        l = s << 18 & 1835008 | a << 12 & 258048 | c << 6 & 4032 | u & 63, l < 65536 || l > 1114111 ? f += "����" : (l -= 65536, f += String.fromCharCode(55296 + (l >> 10), 56320 + (l & 1023))), o += 9;
        continue;
      }
      f += "�";
    }
    return f;
  });
}
js.defaultChars = ";/?:@&=+$,#";
js.componentChars = "";
var yve = js, wve = function(e) {
  var n = "";
  return n += e.protocol || "", n += e.slashes ? "//" : "", n += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? n += "[" + e.hostname + "]" : n += e.hostname || "", n += e.port ? ":" + e.port : "", n += e.pathname || "", n += e.search || "", n += e.hash || "", n;
};
function cs() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
var kve = /^([a-z0-9.+-]+:)/i, Sve = /:[0-9]*$/, xve = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, $ve = ["<", ">", '"', "`", " ", "\r", `
`, "	"], Eve = ["{", "}", "|", "\\", "^", "`"].concat($ve), Cve = ["'"].concat(Eve), i_ = ["%", "/", "?", ";", "#"].concat(Cve), s_ = ["/", "?", "#"], Ive = 255, a_ = /^[+a-z0-9A-Z_-]{0,63}$/, Tve = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, c_ = {
  javascript: !0,
  "javascript:": !0
}, u_ = {
  http: !0,
  https: !0,
  ftp: !0,
  gopher: !0,
  file: !0,
  "http:": !0,
  "https:": !0,
  "ftp:": !0,
  "gopher:": !0,
  "file:": !0
};
function Ave(t, e) {
  if (t && t instanceof cs)
    return t;
  var n = new cs();
  return n.parse(t, e), n;
}
cs.prototype.parse = function(t, e) {
  var n, r, o, i, s, a = t;
  if (a = a.trim(), !e && t.split("#").length === 1) {
    var c = xve.exec(a);
    if (c)
      return this.pathname = c[1], c[2] && (this.search = c[2]), this;
  }
  var u = kve.exec(a);
  if (u && (u = u[0], o = u.toLowerCase(), this.protocol = u, a = a.substr(u.length)), (e || u || a.match(/^\/\/[^@\/]+@[^@\/]+/)) && (s = a.substr(0, 2) === "//", s && !(u && c_[u]) && (a = a.substr(2), this.slashes = !0)), !c_[u] && (s || u && !u_[u])) {
    var l = -1;
    for (n = 0; n < s_.length; n++)
      i = a.indexOf(s_[n]), i !== -1 && (l === -1 || i < l) && (l = i);
    var f, d;
    for (l === -1 ? d = a.lastIndexOf("@") : d = a.lastIndexOf("@", l), d !== -1 && (f = a.slice(0, d), a = a.slice(d + 1), this.auth = f), l = -1, n = 0; n < i_.length; n++)
      i = a.indexOf(i_[n]), i !== -1 && (l === -1 || i < l) && (l = i);
    l === -1 && (l = a.length), a[l - 1] === ":" && l--;
    var h = a.slice(0, l);
    a = a.slice(l), this.parseHost(h), this.hostname = this.hostname || "";
    var b = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!b) {
      var m = this.hostname.split(/\./);
      for (n = 0, r = m.length; n < r; n++) {
        var g = m[n];
        if (g && !g.match(a_)) {
          for (var v = "", k = 0, y = g.length; k < y; k++)
            g.charCodeAt(k) > 127 ? v += "x" : v += g[k];
          if (!v.match(a_)) {
            var x = m.slice(0, n), N = m.slice(n + 1), T = g.match(Tve);
            T && (x.push(T[1]), N.unshift(T[2])), N.length && (a = N.join(".") + a), this.hostname = x.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > Ive && (this.hostname = ""), b && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  var C = a.indexOf("#");
  C !== -1 && (this.hash = a.substr(C), a = a.slice(0, C));
  var A = a.indexOf("?");
  return A !== -1 && (this.search = a.substr(A), a = a.slice(0, A)), a && (this.pathname = a), u_[o] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
cs.prototype.parseHost = function(t) {
  var e = Sve.exec(t);
  e && (e = e[0], e !== ":" && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t);
};
var Ove = Ave;
Dr.encode = _ve;
Dr.decode = yve;
Dr.format = wve;
Dr.parse = Ove;
var yn = {}, ou, l_;
function nk() {
  return l_ || (l_ = 1, ou = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), ou;
}
var iu, f_;
function rk() {
  return f_ || (f_ = 1, iu = /[\0-\x1F\x7F-\x9F]/), iu;
}
var su, d_;
function Dve() {
  return d_ || (d_ = 1, su = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/), su;
}
var au, h_;
function ok() {
  return h_ || (h_ = 1, au = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/), au;
}
var p_;
function Pve() {
  return p_ || (p_ = 1, yn.Any = nk(), yn.Cc = rk(), yn.Cf = Dve(), yn.P = id, yn.Z = ok()), yn;
}
(function(t) {
  function e(p) {
    return Object.prototype.toString.call(p);
  }
  function n(p) {
    return e(p) === "[object String]";
  }
  var r = Object.prototype.hasOwnProperty;
  function o(p, O) {
    return r.call(p, O);
  }
  function i(p) {
    var O = Array.prototype.slice.call(arguments, 1);
    return O.forEach(function(P) {
      if (P) {
        if (typeof P != "object")
          throw new TypeError(P + "must be object");
        Object.keys(P).forEach(function(E) {
          p[E] = P[E];
        });
      }
    }), p;
  }
  function s(p, O, P) {
    return [].concat(p.slice(0, O), P, p.slice(O + 1));
  }
  function a(p) {
    return !(p >= 55296 && p <= 57343 || p >= 64976 && p <= 65007 || (p & 65535) === 65535 || (p & 65535) === 65534 || p >= 0 && p <= 8 || p === 11 || p >= 14 && p <= 31 || p >= 127 && p <= 159 || p > 1114111);
  }
  function c(p) {
    if (p > 65535) {
      p -= 65536;
      var O = 55296 + (p >> 10), P = 56320 + (p & 1023);
      return String.fromCharCode(O, P);
    }
    return String.fromCharCode(p);
  }
  var u = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, l = /&([a-z#][a-z0-9]{1,31});/gi, f = new RegExp(u.source + "|" + l.source, "gi"), d = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i, h = tk;
  function b(p, O) {
    var P = 0;
    return o(h, O) ? h[O] : O.charCodeAt(0) === 35 && d.test(O) && (P = O[1].toLowerCase() === "x" ? parseInt(O.slice(2), 16) : parseInt(O.slice(1), 10), a(P)) ? c(P) : p;
  }
  function m(p) {
    return p.indexOf("\\") < 0 ? p : p.replace(u, "$1");
  }
  function g(p) {
    return p.indexOf("\\") < 0 && p.indexOf("&") < 0 ? p : p.replace(f, function(O, P, E) {
      return P || b(O, E);
    });
  }
  var v = /[&<>"]/, k = /[&<>"]/g, y = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;"
  };
  function x(p) {
    return y[p];
  }
  function N(p) {
    return v.test(p) ? p.replace(k, x) : p;
  }
  var T = /[.?*+^$[\]\\(){}|-]/g;
  function C(p) {
    return p.replace(T, "\\$&");
  }
  function A(p) {
    switch (p) {
      case 9:
      case 32:
        return !0;
    }
    return !1;
  }
  function z(p) {
    if (p >= 8192 && p <= 8202)
      return !0;
    switch (p) {
      case 9:
      case 10:
      case 11:
      case 12:
      case 13:
      case 32:
      case 160:
      case 5760:
      case 8239:
      case 8287:
      case 12288:
        return !0;
    }
    return !1;
  }
  var M = id;
  function L(p) {
    return M.test(p);
  }
  function w(p) {
    switch (p) {
      case 33:
      case 34:
      case 35:
      case 36:
      case 37:
      case 38:
      case 39:
      case 40:
      case 41:
      case 42:
      case 43:
      case 44:
      case 45:
      case 46:
      case 47:
      case 58:
      case 59:
      case 60:
      case 61:
      case 62:
      case 63:
      case 64:
      case 91:
      case 92:
      case 93:
      case 94:
      case 95:
      case 96:
      case 123:
      case 124:
      case 125:
      case 126:
        return !0;
      default:
        return !1;
    }
  }
  function _(p) {
    return p.trim().replace(/\s+/g, " ").toUpperCase();
  }
  t.lib = {}, t.lib.mdurl = Dr, t.lib.ucmicro = Pve(), t.assign = i, t.isString = n, t.has = o, t.unescapeMd = m, t.unescapeAll = g, t.isValidEntityCode = a, t.fromCodePoint = c, t.escapeHtml = N, t.arrayReplaceAt = s, t.isSpace = A, t.isWhiteSpace = z, t.isMdAsciiPunct = w, t.isPunctChar = L, t.escapeRE = C, t.normalizeReference = _;
})(K);
var Bs = {}, Fve = function(e, n, r) {
  var o, i, s, a, c = -1, u = e.posMax, l = e.pos;
  for (e.pos = n + 1, o = 1; e.pos < u; ) {
    if (s = e.src.charCodeAt(e.pos), s === 93 && (o--, o === 0)) {
      i = !0;
      break;
    }
    if (a = e.pos, e.md.inline.skipToken(e), s === 91) {
      if (a === e.pos - 1)
        o++;
      else if (r)
        return e.pos = l, -1;
    }
  }
  return i && (c = e.pos), e.pos = l, c;
}, Rve = K.isSpace, v_ = K.unescapeAll, Nve = function(e, n, r) {
  var o, i, s = 0, a = n, c = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (e.charCodeAt(n) === 60) {
    for (n++; n < r; ) {
      if (o = e.charCodeAt(n), o === 10 || Rve(o))
        return c;
      if (o === 62)
        return c.pos = n + 1, c.str = v_(e.slice(a + 1, n)), c.ok = !0, c;
      if (o === 92 && n + 1 < r) {
        n += 2;
        continue;
      }
      n++;
    }
    return c;
  }
  for (i = 0; n < r && (o = e.charCodeAt(n), !(o === 32 || o < 32 || o === 127)); ) {
    if (o === 92 && n + 1 < r) {
      n += 2;
      continue;
    }
    if (o === 40 && i++, o === 41) {
      if (i === 0)
        break;
      i--;
    }
    n++;
  }
  return a === n || i !== 0 || (c.str = v_(e.slice(a, n)), c.lines = s, c.pos = n, c.ok = !0), c;
}, Mve = K.unescapeAll, Lve = function(e, n, r) {
  var o, i, s = 0, a = n, c = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (n >= r || (i = e.charCodeAt(n), i !== 34 && i !== 39 && i !== 40))
    return c;
  for (n++, i === 40 && (i = 41); n < r; ) {
    if (o = e.charCodeAt(n), o === i)
      return c.pos = n + 1, c.lines = s, c.str = Mve(e.slice(a + 1, n)), c.ok = !0, c;
    o === 10 ? s++ : o === 92 && n + 1 < r && (n++, e.charCodeAt(n) === 10 && s++), n++;
  }
  return c;
};
Bs.parseLinkLabel = Fve;
Bs.parseLinkDestination = Nve;
Bs.parseLinkTitle = Lve;
var qve = K.assign, jve = K.unescapeAll, Ln = K.escapeHtml, It = {};
It.code_inline = function(t, e, n, r, o) {
  var i = t[e];
  return "<code" + o.renderAttrs(i) + ">" + Ln(t[e].content) + "</code>";
};
It.code_block = function(t, e, n, r, o) {
  var i = t[e];
  return "<pre" + o.renderAttrs(i) + "><code>" + Ln(t[e].content) + `</code></pre>
`;
};
It.fence = function(t, e, n, r, o) {
  var i = t[e], s = i.info ? jve(i.info).trim() : "", a = "", c, u, l, f;
  return s && (a = s.split(/\s+/g)[0]), n.highlight ? c = n.highlight(i.content, a) || Ln(i.content) : c = Ln(i.content), c.indexOf("<pre") === 0 ? c + `
` : s ? (u = i.attrIndex("class"), l = i.attrs ? i.attrs.slice() : [], u < 0 ? l.push(["class", n.langPrefix + a]) : l[u][1] += " " + n.langPrefix + a, f = {
    attrs: l
  }, "<pre><code" + o.renderAttrs(f) + ">" + c + `</code></pre>
`) : "<pre><code" + o.renderAttrs(i) + ">" + c + `</code></pre>
`;
};
It.image = function(t, e, n, r, o) {
  var i = t[e];
  return i.attrs[i.attrIndex("alt")][1] = o.renderInlineAsText(i.children, n, r), o.renderToken(t, e, n);
};
It.hardbreak = function(t, e, n) {
  return n.xhtmlOut ? `<br />
` : `<br>
`;
};
It.softbreak = function(t, e, n) {
  return n.breaks ? n.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
It.text = function(t, e) {
  return Ln(t[e].content);
};
It.html_block = function(t, e) {
  return t[e].content;
};
It.html_inline = function(t, e) {
  return t[e].content;
};
function Pr() {
  this.rules = qve({}, It);
}
Pr.prototype.renderAttrs = function(e) {
  var n, r, o;
  if (!e.attrs)
    return "";
  for (o = "", n = 0, r = e.attrs.length; n < r; n++)
    o += " " + Ln(e.attrs[n][0]) + '="' + Ln(e.attrs[n][1]) + '"';
  return o;
};
Pr.prototype.renderToken = function(e, n, r) {
  var o, i = "", s = !1, a = e[n];
  return a.hidden ? "" : (a.block && a.nesting !== -1 && n && e[n - 1].hidden && (i += `
`), i += (a.nesting === -1 ? "</" : "<") + a.tag, i += this.renderAttrs(a), a.nesting === 0 && r.xhtmlOut && (i += " /"), a.block && (s = !0, a.nesting === 1 && n + 1 < e.length && (o = e[n + 1], (o.type === "inline" || o.hidden || o.nesting === -1 && o.tag === a.tag) && (s = !1))), i += s ? `>
` : ">", i);
};
Pr.prototype.renderInline = function(t, e, n) {
  for (var r, o = "", i = this.rules, s = 0, a = t.length; s < a; s++)
    r = t[s].type, typeof i[r] < "u" ? o += i[r](t, s, e, n, this) : o += this.renderToken(t, s, e);
  return o;
};
Pr.prototype.renderInlineAsText = function(t, e, n) {
  for (var r = "", o = 0, i = t.length; o < i; o++)
    t[o].type === "text" ? r += t[o].content : t[o].type === "image" && (r += this.renderInlineAsText(t[o].children, e, n));
  return r;
};
Pr.prototype.render = function(t, e, n) {
  var r, o, i, s = "", a = this.rules;
  for (r = 0, o = t.length; r < o; r++)
    i = t[r].type, i === "inline" ? s += this.renderInline(t[r].children, e, n) : typeof a[i] < "u" ? s += a[t[r].type](t, r, e, n, this) : s += this.renderToken(t, r, e, n);
  return s;
};
var Bve = Pr;
function pt() {
  this.__rules__ = [], this.__cache__ = null;
}
pt.prototype.__find__ = function(t) {
  for (var e = 0; e < this.__rules__.length; e++)
    if (this.__rules__[e].name === t)
      return e;
  return -1;
};
pt.prototype.__compile__ = function() {
  var t = this, e = [""];
  t.__rules__.forEach(function(n) {
    n.enabled && n.alt.forEach(function(r) {
      e.indexOf(r) < 0 && e.push(r);
    });
  }), t.__cache__ = {}, e.forEach(function(n) {
    t.__cache__[n] = [], t.__rules__.forEach(function(r) {
      r.enabled && (n && r.alt.indexOf(n) < 0 || t.__cache__[n].push(r.fn));
    });
  });
};
pt.prototype.at = function(t, e, n) {
  var r = this.__find__(t), o = n || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + t);
  this.__rules__[r].fn = e, this.__rules__[r].alt = o.alt || [], this.__cache__ = null;
};
pt.prototype.before = function(t, e, n, r) {
  var o = this.__find__(t), i = r || {};
  if (o === -1)
    throw new Error("Parser rule not found: " + t);
  this.__rules__.splice(o, 0, {
    name: e,
    enabled: !0,
    fn: n,
    alt: i.alt || []
  }), this.__cache__ = null;
};
pt.prototype.after = function(t, e, n, r) {
  var o = this.__find__(t), i = r || {};
  if (o === -1)
    throw new Error("Parser rule not found: " + t);
  this.__rules__.splice(o + 1, 0, {
    name: e,
    enabled: !0,
    fn: n,
    alt: i.alt || []
  }), this.__cache__ = null;
};
pt.prototype.push = function(t, e, n) {
  var r = n || {};
  this.__rules__.push({
    name: t,
    enabled: !0,
    fn: e,
    alt: r.alt || []
  }), this.__cache__ = null;
};
pt.prototype.enable = function(t, e) {
  Array.isArray(t) || (t = [t]);
  var n = [];
  return t.forEach(function(r) {
    var o = this.__find__(r);
    if (o < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + r);
    }
    this.__rules__[o].enabled = !0, n.push(r);
  }, this), this.__cache__ = null, n;
};
pt.prototype.enableOnly = function(t, e) {
  Array.isArray(t) || (t = [t]), this.__rules__.forEach(function(n) {
    n.enabled = !1;
  }), this.enable(t, e);
};
pt.prototype.disable = function(t, e) {
  Array.isArray(t) || (t = [t]);
  var n = [];
  return t.forEach(function(r) {
    var o = this.__find__(r);
    if (o < 0) {
      if (e)
        return;
      throw new Error("Rules manager: invalid rule name " + r);
    }
    this.__rules__[o].enabled = !1, n.push(r);
  }, this), this.__cache__ = null, n;
};
pt.prototype.getRules = function(t) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[t] || [];
};
var sd = pt, zve = /\r[\n\u0085]?|[\u2424\u2028\u0085]/g, Hve = /\u0000/g, Vve = function(e) {
  var n;
  n = e.src.replace(zve, `
`), n = n.replace(Hve, "�"), e.src = n;
}, Uve = function(e) {
  var n;
  e.inlineMode ? (n = new e.Token("inline", "", 0), n.content = e.src, n.map = [0, 1], n.children = [], e.tokens.push(n)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}, Gve = function(e) {
  var n = e.tokens, r, o, i;
  for (o = 0, i = n.length; o < i; o++)
    r = n[o], r.type === "inline" && e.md.inline.parse(r.content, e.md, e.env, r.children);
}, Wve = K.arrayReplaceAt;
function Kve(t) {
  return /^<a[>\s]/i.test(t);
}
function Zve(t) {
  return /^<\/a\s*>/i.test(t);
}
var Jve = function(e) {
  var n, r, o, i, s, a, c, u, l, f, d, h, b, m, g, v, k = e.tokens, y;
  if (e.md.options.linkify) {
    for (r = 0, o = k.length; r < o; r++)
      if (!(k[r].type !== "inline" || !e.md.linkify.pretest(k[r].content)))
        for (i = k[r].children, b = 0, n = i.length - 1; n >= 0; n--) {
          if (a = i[n], a.type === "link_close") {
            for (n--; i[n].level !== a.level && i[n].type !== "link_open"; )
              n--;
            continue;
          }
          if (a.type === "html_inline" && (Kve(a.content) && b > 0 && b--, Zve(a.content) && b++), !(b > 0) && a.type === "text" && e.md.linkify.test(a.content)) {
            for (l = a.content, y = e.md.linkify.match(l), c = [], h = a.level, d = 0, u = 0; u < y.length; u++)
              m = y[u].url, g = e.md.normalizeLink(m), e.md.validateLink(g) && (v = y[u].text, y[u].schema ? y[u].schema === "mailto:" && !/^mailto:/i.test(v) ? v = e.md.normalizeLinkText("mailto:" + v).replace(/^mailto:/, "") : v = e.md.normalizeLinkText(v) : v = e.md.normalizeLinkText("http://" + v).replace(/^http:\/\//, ""), f = y[u].index, f > d && (s = new e.Token("text", "", 0), s.content = l.slice(d, f), s.level = h, c.push(s)), s = new e.Token("link_open", "a", 1), s.attrs = [["href", g]], s.level = h++, s.markup = "linkify", s.info = "auto", c.push(s), s = new e.Token("text", "", 0), s.content = v, s.level = h, c.push(s), s = new e.Token("link_close", "a", -1), s.level = --h, s.markup = "linkify", s.info = "auto", c.push(s), d = y[u].lastIndex);
            d < l.length && (s = new e.Token("text", "", 0), s.content = l.slice(d), s.level = h, c.push(s)), k[r].children = i = Wve(i, n, c);
          }
        }
  }
}, ik = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Yve = /\((c|tm|r|p)\)/i, Xve = /\((c|tm|r|p)\)/ig, Qve = {
  c: "©",
  r: "®",
  p: "§",
  tm: "™"
};
function ege(t, e) {
  return Qve[e.toLowerCase()];
}
function tge(t) {
  var e, n, r = 0;
  for (e = t.length - 1; e >= 0; e--)
    n = t[e], n.type === "text" && !r && (n.content = n.content.replace(Xve, ege)), n.type === "link_open" && n.info === "auto" && r--, n.type === "link_close" && n.info === "auto" && r++;
}
function nge(t) {
  var e, n, r = 0;
  for (e = t.length - 1; e >= 0; e--)
    n = t[e], n.type === "text" && !r && ik.test(n.content) && (n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/mg, "$1—$2").replace(/(^|\s)--(\s|$)/mg, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/mg, "$1–$2")), n.type === "link_open" && n.info === "auto" && r--, n.type === "link_close" && n.info === "auto" && r++;
}
var rge = function(e) {
  var n;
  if (e.md.options.typographer)
    for (n = e.tokens.length - 1; n >= 0; n--)
      e.tokens[n].type === "inline" && (Yve.test(e.tokens[n].content) && tge(e.tokens[n].children), ik.test(e.tokens[n].content) && nge(e.tokens[n].children));
}, g_ = K.isWhiteSpace, m_ = K.isPunctChar, __ = K.isMdAsciiPunct, oge = /['"]/, b_ = /['"]/g, y_ = "’";
function ki(t, e, n) {
  return t.substr(0, e) + n + t.substr(e + 1);
}
function ige(t, e) {
  var n, r, o, i, s, a, c, u, l, f, d, h, b, m, g, v, k, y, x, N, T;
  for (x = [], n = 0; n < t.length; n++) {
    for (r = t[n], c = t[n].level, k = x.length - 1; k >= 0 && !(x[k].level <= c); k--)
      ;
    if (x.length = k + 1, r.type === "text") {
      o = r.content, s = 0, a = o.length;
      e:
        for (; s < a && (b_.lastIndex = s, i = b_.exec(o), !!i); ) {
          if (g = v = !0, s = i.index + 1, y = i[0] === "'", l = 32, i.index - 1 >= 0)
            l = o.charCodeAt(i.index - 1);
          else
            for (k = n - 1; k >= 0 && !(t[k].type === "softbreak" || t[k].type === "hardbreak"); k--)
              if (t[k].type === "text") {
                l = t[k].content.charCodeAt(t[k].content.length - 1);
                break;
              }
          if (f = 32, s < a)
            f = o.charCodeAt(s);
          else
            for (k = n + 1; k < t.length && !(t[k].type === "softbreak" || t[k].type === "hardbreak"); k++)
              if (t[k].type === "text") {
                f = t[k].content.charCodeAt(0);
                break;
              }
          if (d = __(l) || m_(String.fromCharCode(l)), h = __(f) || m_(String.fromCharCode(f)), b = g_(l), m = g_(f), m ? g = !1 : h && (b || d || (g = !1)), b ? v = !1 : d && (m || h || (v = !1)), f === 34 && i[0] === '"' && l >= 48 && l <= 57 && (v = g = !1), g && v && (g = !1, v = h), !g && !v) {
            y && (r.content = ki(r.content, i.index, y_));
            continue;
          }
          if (v) {
            for (k = x.length - 1; k >= 0 && (u = x[k], !(x[k].level < c)); k--)
              if (u.single === y && x[k].level === c) {
                u = x[k], y ? (N = e.md.options.quotes[2], T = e.md.options.quotes[3]) : (N = e.md.options.quotes[0], T = e.md.options.quotes[1]), r.content = ki(r.content, i.index, T), t[u.token].content = ki(
                  t[u.token].content,
                  u.pos,
                  N
                ), s += T.length - 1, u.token === n && (s += N.length - 1), o = r.content, a = o.length, x.length = k;
                continue e;
              }
          }
          g ? x.push({
            token: n,
            pos: i.index,
            single: y,
            level: c
          }) : v && y && (r.content = ki(r.content, i.index, y_));
        }
    }
  }
}
var sge = function(e) {
  var n;
  if (e.md.options.typographer)
    for (n = e.tokens.length - 1; n >= 0; n--)
      e.tokens[n].type !== "inline" || !oge.test(e.tokens[n].content) || ige(e.tokens[n].children, e);
};
function Fr(t, e, n) {
  this.type = t, this.tag = e, this.attrs = null, this.map = null, this.nesting = n, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
Fr.prototype.attrIndex = function(e) {
  var n, r, o;
  if (!this.attrs)
    return -1;
  for (n = this.attrs, r = 0, o = n.length; r < o; r++)
    if (n[r][0] === e)
      return r;
  return -1;
};
Fr.prototype.attrPush = function(e) {
  this.attrs ? this.attrs.push(e) : this.attrs = [e];
};
Fr.prototype.attrSet = function(e, n) {
  var r = this.attrIndex(e), o = [e, n];
  r < 0 ? this.attrPush(o) : this.attrs[r] = o;
};
Fr.prototype.attrGet = function(e) {
  var n = this.attrIndex(e), r = null;
  return n >= 0 && (r = this.attrs[n][1]), r;
};
Fr.prototype.attrJoin = function(e, n) {
  var r = this.attrIndex(e);
  r < 0 ? this.attrPush([e, n]) : this.attrs[r][1] = this.attrs[r][1] + " " + n;
};
var ad = Fr, age = ad;
function sk(t, e, n) {
  this.src = t, this.env = n, this.tokens = [], this.inlineMode = !1, this.md = e;
}
sk.prototype.Token = age;
var cge = sk, uge = sd, cu = [
  ["normalize", Vve],
  ["block", Uve],
  ["inline", Gve],
  ["linkify", Jve],
  ["replacements", rge],
  ["smartquotes", sge]
];
function cd() {
  this.ruler = new uge();
  for (var t = 0; t < cu.length; t++)
    this.ruler.push(cu[t][0], cu[t][1]);
}
cd.prototype.process = function(t) {
  var e, n, r;
  for (r = this.ruler.getRules(""), e = 0, n = r.length; e < n; e++)
    r[e](t);
};
cd.prototype.State = cge;
var lge = cd, fge = K.isSpace;
function uu(t, e) {
  var n = t.bMarks[e] + t.blkIndent, r = t.eMarks[e];
  return t.src.substr(n, r - n);
}
function w_(t) {
  var e = [], n = 0, r = t.length, o, i = 0, s = 0, a = !1, c = 0;
  for (o = t.charCodeAt(n); n < r; )
    o === 96 ? a ? (a = !1, c = n) : i % 2 === 0 && (a = !0, c = n) : o === 124 && i % 2 === 0 && !a && (e.push(t.substring(s, n)), s = n + 1), o === 92 ? i++ : i = 0, n++, n === r && a && (a = !1, n = c + 1), o = t.charCodeAt(n);
  return e.push(t.substring(s)), e;
}
var dge = function(e, n, r, o) {
  var i, s, a, c, u, l, f, d, h, b, m, g;
  if (n + 2 > r || (u = n + 1, e.sCount[u] < e.blkIndent) || e.sCount[u] - e.blkIndent >= 4 || (a = e.bMarks[u] + e.tShift[u], a >= e.eMarks[u]) || (i = e.src.charCodeAt(a++), i !== 124 && i !== 45 && i !== 58))
    return !1;
  for (; a < e.eMarks[u]; ) {
    if (i = e.src.charCodeAt(a), i !== 124 && i !== 45 && i !== 58 && !fge(i))
      return !1;
    a++;
  }
  for (s = uu(e, n + 1), l = s.split("|"), h = [], c = 0; c < l.length; c++) {
    if (b = l[c].trim(), !b) {
      if (c === 0 || c === l.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(b))
      return !1;
    b.charCodeAt(b.length - 1) === 58 ? h.push(b.charCodeAt(0) === 58 ? "center" : "right") : b.charCodeAt(0) === 58 ? h.push("left") : h.push("");
  }
  if (s = uu(e, n).trim(), s.indexOf("|") === -1 || e.sCount[n] - e.blkIndent >= 4 || (l = w_(s.replace(/^\||\|$/g, "")), f = l.length, f > h.length))
    return !1;
  if (o)
    return !0;
  for (d = e.push("table_open", "table", 1), d.map = m = [n, 0], d = e.push("thead_open", "thead", 1), d.map = [n, n + 1], d = e.push("tr_open", "tr", 1), d.map = [n, n + 1], c = 0; c < l.length; c++)
    d = e.push("th_open", "th", 1), d.map = [n, n + 1], h[c] && (d.attrs = [["style", "text-align:" + h[c]]]), d = e.push("inline", "", 0), d.content = l[c].trim(), d.map = [n, n + 1], d.children = [], d = e.push("th_close", "th", -1);
  for (d = e.push("tr_close", "tr", -1), d = e.push("thead_close", "thead", -1), d = e.push("tbody_open", "tbody", 1), d.map = g = [n + 2, 0], u = n + 2; u < r && !(e.sCount[u] < e.blkIndent || (s = uu(e, u).trim(), s.indexOf("|") === -1) || e.sCount[u] - e.blkIndent >= 4); u++) {
    for (l = w_(s.replace(/^\||\|$/g, "")), d = e.push("tr_open", "tr", 1), c = 0; c < f; c++)
      d = e.push("td_open", "td", 1), h[c] && (d.attrs = [["style", "text-align:" + h[c]]]), d = e.push("inline", "", 0), d.content = l[c] ? l[c].trim() : "", d.children = [], d = e.push("td_close", "td", -1);
    d = e.push("tr_close", "tr", -1);
  }
  return d = e.push("tbody_close", "tbody", -1), d = e.push("table_close", "table", -1), m[1] = g[1] = u, e.line = u, !0;
}, hge = function(e, n, r) {
  var o, i, s;
  if (e.sCount[n] - e.blkIndent < 4)
    return !1;
  for (i = o = n + 1; o < r; ) {
    if (e.isEmpty(o)) {
      o++;
      continue;
    }
    if (e.sCount[o] - e.blkIndent >= 4) {
      o++, i = o;
      continue;
    }
    break;
  }
  return e.line = i, s = e.push("code_block", "code", 0), s.content = e.getLines(n, i, 4 + e.blkIndent, !0), s.map = [n, e.line], !0;
}, pge = function(e, n, r, o) {
  var i, s, a, c, u, l, f, d = !1, h = e.bMarks[n] + e.tShift[n], b = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || h + 3 > b || (i = e.src.charCodeAt(h), i !== 126 && i !== 96) || (u = h, h = e.skipChars(h, i), s = h - u, s < 3) || (f = e.src.slice(u, h), a = e.src.slice(h, b), a.indexOf(String.fromCharCode(i)) >= 0))
    return !1;
  if (o)
    return !0;
  for (c = n; c++, !(c >= r || (h = u = e.bMarks[c] + e.tShift[c], b = e.eMarks[c], h < b && e.sCount[c] < e.blkIndent)); )
    if (e.src.charCodeAt(h) === i && !(e.sCount[c] - e.blkIndent >= 4) && (h = e.skipChars(h, i), !(h - u < s) && (h = e.skipSpaces(h), !(h < b)))) {
      d = !0;
      break;
    }
  return s = e.sCount[n], e.line = c + (d ? 1 : 0), l = e.push("fence", "code", 0), l.info = a, l.content = e.getLines(n + 1, c, s, !0), l.markup = f, l.map = [n, e.line], !0;
}, k_ = K.isSpace, vge = function(e, n, r, o) {
  var i, s, a, c, u, l, f, d, h, b, m, g, v, k, y, x, N, T, C, A, z = e.lineMax, M = e.bMarks[n] + e.tShift[n], L = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || e.src.charCodeAt(M++) !== 62)
    return !1;
  if (o)
    return !0;
  for (c = h = e.sCount[n] + M - (e.bMarks[n] + e.tShift[n]), e.src.charCodeAt(M) === 32 ? (M++, c++, h++, i = !1, x = !0) : e.src.charCodeAt(M) === 9 ? (x = !0, (e.bsCount[n] + h) % 4 === 3 ? (M++, c++, h++, i = !1) : i = !0) : x = !1, b = [e.bMarks[n]], e.bMarks[n] = M; M < L && (s = e.src.charCodeAt(M), k_(s)); ) {
    s === 9 ? h += 4 - (h + e.bsCount[n] + (i ? 1 : 0)) % 4 : h++;
    M++;
  }
  for (m = [e.bsCount[n]], e.bsCount[n] = e.sCount[n] + 1 + (x ? 1 : 0), l = M >= L, k = [e.sCount[n]], e.sCount[n] = h - c, y = [e.tShift[n]], e.tShift[n] = M - e.bMarks[n], T = e.md.block.ruler.getRules("blockquote"), v = e.parentType, e.parentType = "blockquote", A = !1, d = n + 1; d < r && (e.sCount[d] < e.blkIndent && (A = !0), M = e.bMarks[d] + e.tShift[d], L = e.eMarks[d], !(M >= L)); d++) {
    if (e.src.charCodeAt(M++) === 62 && !A) {
      for (c = h = e.sCount[d] + M - (e.bMarks[d] + e.tShift[d]), e.src.charCodeAt(M) === 32 ? (M++, c++, h++, i = !1, x = !0) : e.src.charCodeAt(M) === 9 ? (x = !0, (e.bsCount[d] + h) % 4 === 3 ? (M++, c++, h++, i = !1) : i = !0) : x = !1, b.push(e.bMarks[d]), e.bMarks[d] = M; M < L && (s = e.src.charCodeAt(M), k_(s)); ) {
        s === 9 ? h += 4 - (h + e.bsCount[d] + (i ? 1 : 0)) % 4 : h++;
        M++;
      }
      l = M >= L, m.push(e.bsCount[d]), e.bsCount[d] = e.sCount[d] + 1 + (x ? 1 : 0), k.push(e.sCount[d]), e.sCount[d] = h - c, y.push(e.tShift[d]), e.tShift[d] = M - e.bMarks[d];
      continue;
    }
    if (l)
      break;
    for (N = !1, a = 0, u = T.length; a < u; a++)
      if (T[a](e, d, r, !0)) {
        N = !0;
        break;
      }
    if (N) {
      e.lineMax = d, e.blkIndent !== 0 && (b.push(e.bMarks[d]), m.push(e.bsCount[d]), y.push(e.tShift[d]), k.push(e.sCount[d]), e.sCount[d] -= e.blkIndent);
      break;
    }
    b.push(e.bMarks[d]), m.push(e.bsCount[d]), y.push(e.tShift[d]), k.push(e.sCount[d]), e.sCount[d] = -1;
  }
  for (g = e.blkIndent, e.blkIndent = 0, C = e.push("blockquote_open", "blockquote", 1), C.markup = ">", C.map = f = [n, 0], e.md.block.tokenize(e, n, d), C = e.push("blockquote_close", "blockquote", -1), C.markup = ">", e.lineMax = z, e.parentType = v, f[1] = e.line, a = 0; a < y.length; a++)
    e.bMarks[a + n] = b[a], e.tShift[a + n] = y[a], e.sCount[a + n] = k[a], e.bsCount[a + n] = m[a];
  return e.blkIndent = g, !0;
}, gge = K.isSpace, mge = function(e, n, r, o) {
  var i, s, a, c, u = e.bMarks[n] + e.tShift[n], l = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || (i = e.src.charCodeAt(u++), i !== 42 && i !== 45 && i !== 95))
    return !1;
  for (s = 1; u < l; ) {
    if (a = e.src.charCodeAt(u++), a !== i && !gge(a))
      return !1;
    a === i && s++;
  }
  return s < 3 ? !1 : (o || (e.line = n + 1, c = e.push("hr", "hr", 0), c.map = [n, e.line], c.markup = Array(s + 1).join(String.fromCharCode(i))), !0);
}, ak = K.isSpace;
function S_(t, e) {
  var n, r, o, i;
  return r = t.bMarks[e] + t.tShift[e], o = t.eMarks[e], n = t.src.charCodeAt(r++), n !== 42 && n !== 45 && n !== 43 || r < o && (i = t.src.charCodeAt(r), !ak(i)) ? -1 : r;
}
function x_(t, e) {
  var n, r = t.bMarks[e] + t.tShift[e], o = r, i = t.eMarks[e];
  if (o + 1 >= i || (n = t.src.charCodeAt(o++), n < 48 || n > 57))
    return -1;
  for (; ; ) {
    if (o >= i)
      return -1;
    if (n = t.src.charCodeAt(o++), n >= 48 && n <= 57) {
      if (o - r >= 10)
        return -1;
      continue;
    }
    if (n === 41 || n === 46)
      break;
    return -1;
  }
  return o < i && (n = t.src.charCodeAt(o), !ak(n)) ? -1 : o;
}
function _ge(t, e) {
  var n, r, o = t.level + 2;
  for (n = e + 2, r = t.tokens.length - 2; n < r; n++)
    t.tokens[n].level === o && t.tokens[n].type === "paragraph_open" && (t.tokens[n + 2].hidden = !0, t.tokens[n].hidden = !0, n += 2);
}
var bge = function(e, n, r, o) {
  var i, s, a, c, u, l, f, d, h, b, m, g, v, k, y, x, N, T, C, A, z, M, L, w, _, p, O, P, E = !1, S = !0;
  if (e.sCount[n] - e.blkIndent >= 4)
    return !1;
  if (o && e.parentType === "paragraph" && e.tShift[n] >= e.blkIndent && (E = !0), (L = x_(e, n)) >= 0) {
    if (f = !0, _ = e.bMarks[n] + e.tShift[n], v = Number(e.src.substr(_, L - _ - 1)), E && v !== 1)
      return !1;
  } else if ((L = S_(e, n)) >= 0)
    f = !1;
  else
    return !1;
  if (E && e.skipSpaces(L) >= e.eMarks[n])
    return !1;
  if (g = e.src.charCodeAt(L - 1), o)
    return !0;
  for (m = e.tokens.length, f ? (P = e.push("ordered_list_open", "ol", 1), v !== 1 && (P.attrs = [["start", v]])) : P = e.push("bullet_list_open", "ul", 1), P.map = b = [n, 0], P.markup = String.fromCharCode(g), y = n, w = !1, O = e.md.block.ruler.getRules("list"), C = e.parentType, e.parentType = "list"; y < r; ) {
    for (M = L, k = e.eMarks[y], l = x = e.sCount[y] + L - (e.bMarks[n] + e.tShift[n]); M < k; ) {
      if (i = e.src.charCodeAt(M), i === 9)
        x += 4 - (x + e.bsCount[y]) % 4;
      else if (i === 32)
        x++;
      else
        break;
      M++;
    }
    if (s = M, s >= k ? u = 1 : u = x - l, u > 4 && (u = 1), c = l + u, P = e.push("list_item_open", "li", 1), P.markup = String.fromCharCode(g), P.map = d = [n, 0], N = e.blkIndent, z = e.tight, A = e.tShift[n], T = e.sCount[n], e.blkIndent = c, e.tight = !0, e.tShift[n] = s - e.bMarks[n], e.sCount[n] = x, s >= k && e.isEmpty(n + 1) ? e.line = Math.min(e.line + 2, r) : e.md.block.tokenize(e, n, r, !0), (!e.tight || w) && (S = !1), w = e.line - n > 1 && e.isEmpty(e.line - 1), e.blkIndent = N, e.tShift[n] = A, e.sCount[n] = T, e.tight = z, P = e.push("list_item_close", "li", -1), P.markup = String.fromCharCode(g), y = n = e.line, d[1] = y, s = e.bMarks[n], y >= r || e.sCount[y] < e.blkIndent)
      break;
    for (p = !1, a = 0, h = O.length; a < h; a++)
      if (O[a](e, y, r, !0)) {
        p = !0;
        break;
      }
    if (p)
      break;
    if (f) {
      if (L = x_(e, y), L < 0)
        break;
    } else if (L = S_(e, y), L < 0)
      break;
    if (g !== e.src.charCodeAt(L - 1))
      break;
  }
  return f ? P = e.push("ordered_list_close", "ol", -1) : P = e.push("bullet_list_close", "ul", -1), P.markup = String.fromCharCode(g), b[1] = y, e.line = y, e.parentType = C, S && _ge(e, m), !0;
}, yge = K.normalizeReference, Si = K.isSpace, wge = function(e, n, r, o) {
  var i, s, a, c, u, l, f, d, h, b, m, g, v, k, y, x, N = 0, T = e.bMarks[n] + e.tShift[n], C = e.eMarks[n], A = n + 1;
  if (e.sCount[n] - e.blkIndent >= 4 || e.src.charCodeAt(T) !== 91)
    return !1;
  for (; ++T < C; )
    if (e.src.charCodeAt(T) === 93 && e.src.charCodeAt(T - 1) !== 92) {
      if (T + 1 === C || e.src.charCodeAt(T + 1) !== 58)
        return !1;
      break;
    }
  for (c = e.lineMax, y = e.md.block.ruler.getRules("reference"), b = e.parentType, e.parentType = "reference"; A < c && !e.isEmpty(A); A++)
    if (!(e.sCount[A] - e.blkIndent > 3) && !(e.sCount[A] < 0)) {
      for (k = !1, l = 0, f = y.length; l < f; l++)
        if (y[l](e, A, c, !0)) {
          k = !0;
          break;
        }
      if (k)
        break;
    }
  for (v = e.getLines(n, A, e.blkIndent, !1).trim(), C = v.length, T = 1; T < C; T++) {
    if (i = v.charCodeAt(T), i === 91)
      return !1;
    if (i === 93) {
      h = T;
      break;
    } else
      i === 10 ? N++ : i === 92 && (T++, T < C && v.charCodeAt(T) === 10 && N++);
  }
  if (h < 0 || v.charCodeAt(h + 1) !== 58)
    return !1;
  for (T = h + 2; T < C; T++)
    if (i = v.charCodeAt(T), i === 10)
      N++;
    else if (!Si(i))
      break;
  if (m = e.md.helpers.parseLinkDestination(v, T, C), !m.ok || (u = e.md.normalizeLink(m.str), !e.md.validateLink(u)))
    return !1;
  for (T = m.pos, N += m.lines, s = T, a = N, g = T; T < C; T++)
    if (i = v.charCodeAt(T), i === 10)
      N++;
    else if (!Si(i))
      break;
  for (m = e.md.helpers.parseLinkTitle(v, T, C), T < C && g !== T && m.ok ? (x = m.str, T = m.pos, N += m.lines) : (x = "", T = s, N = a); T < C && (i = v.charCodeAt(T), !!Si(i)); )
    T++;
  if (T < C && v.charCodeAt(T) !== 10 && x)
    for (x = "", T = s, N = a; T < C && (i = v.charCodeAt(T), !!Si(i)); )
      T++;
  return T < C && v.charCodeAt(T) !== 10 || (d = yge(v.slice(1, h)), !d) ? !1 : (o || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[d] > "u" && (e.env.references[d] = { title: x, href: u }), e.parentType = b, e.line = n + N + 1), !0);
}, $_ = K.isSpace, kge = function(e, n, r, o) {
  var i, s, a, c, u = e.bMarks[n] + e.tShift[n], l = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || (i = e.src.charCodeAt(u), i !== 35 || u >= l))
    return !1;
  for (s = 1, i = e.src.charCodeAt(++u); i === 35 && u < l && s <= 6; )
    s++, i = e.src.charCodeAt(++u);
  return s > 6 || u < l && !$_(i) ? !1 : (o || (l = e.skipSpacesBack(l, u), a = e.skipCharsBack(l, 35, u), a > u && $_(e.src.charCodeAt(a - 1)) && (l = a), e.line = n + 1, c = e.push("heading_open", "h" + String(s), 1), c.markup = "########".slice(0, s), c.map = [n, e.line], c = e.push("inline", "", 0), c.content = e.src.slice(u, l).trim(), c.map = [n, e.line], c.children = [], c = e.push("heading_close", "h" + String(s), -1), c.markup = "########".slice(0, s)), !0);
}, Sge = function(e, n, r) {
  var o, i, s, a, c, u, l, f, d, h = n + 1, b, m = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[n] - e.blkIndent >= 4)
    return !1;
  for (b = e.parentType, e.parentType = "paragraph"; h < r && !e.isEmpty(h); h++)
    if (!(e.sCount[h] - e.blkIndent > 3)) {
      if (e.sCount[h] >= e.blkIndent && (u = e.bMarks[h] + e.tShift[h], l = e.eMarks[h], u < l && (d = e.src.charCodeAt(u), (d === 45 || d === 61) && (u = e.skipChars(u, d), u = e.skipSpaces(u), u >= l)))) {
        f = d === 61 ? 1 : 2;
        break;
      }
      if (!(e.sCount[h] < 0)) {
        for (i = !1, s = 0, a = m.length; s < a; s++)
          if (m[s](e, h, r, !0)) {
            i = !0;
            break;
          }
        if (i)
          break;
      }
    }
  return f ? (o = e.getLines(n, h, e.blkIndent, !1).trim(), e.line = h + 1, c = e.push("heading_open", "h" + String(f), 1), c.markup = String.fromCharCode(d), c.map = [n, e.line], c = e.push("inline", "", 0), c.content = o, c.map = [n, e.line - 1], c.children = [], c = e.push("heading_close", "h" + String(f), -1), c.markup = String.fromCharCode(d), e.parentType = b, !0) : !1;
}, xge = [
  "address",
  "article",
  "aside",
  "base",
  "basefont",
  "blockquote",
  "body",
  "caption",
  "center",
  "col",
  "colgroup",
  "dd",
  "details",
  "dialog",
  "dir",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "frame",
  "frameset",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hr",
  "html",
  "iframe",
  "legend",
  "li",
  "link",
  "main",
  "menu",
  "menuitem",
  "meta",
  "nav",
  "noframes",
  "ol",
  "optgroup",
  "option",
  "p",
  "param",
  "section",
  "source",
  "summary",
  "table",
  "tbody",
  "td",
  "tfoot",
  "th",
  "thead",
  "title",
  "tr",
  "track",
  "ul"
], zs = {}, $ge = "[a-zA-Z_:][a-zA-Z0-9:._-]*", Ege = "[^\"'=<>`\\x00-\\x20]+", Cge = "'[^']*'", Ige = '"[^"]*"', Tge = "(?:" + Ege + "|" + Cge + "|" + Ige + ")", Age = "(?:\\s+" + $ge + "(?:\\s*=\\s*" + Tge + ")?)", ck = "<[A-Za-z][A-Za-z0-9\\-]*" + Age + "*\\s*\\/?>", uk = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", Oge = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", Dge = "<[?].*?[?]>", Pge = "<![A-Z]+\\s+[^>]*>", Fge = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", Rge = new RegExp("^(?:" + ck + "|" + uk + "|" + Oge + "|" + Dge + "|" + Pge + "|" + Fge + ")"), Nge = new RegExp("^(?:" + ck + "|" + uk + ")");
zs.HTML_TAG_RE = Rge;
zs.HTML_OPEN_CLOSE_TAG_RE = Nge;
var Mge = xge, Lge = zs.HTML_OPEN_CLOSE_TAG_RE, er = [
  [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + Mge.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(Lge.source + "\\s*$"), /^$/, !1]
], qge = function(e, n, r, o) {
  var i, s, a, c, u = e.bMarks[n] + e.tShift[n], l = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(u) !== 60)
    return !1;
  for (c = e.src.slice(u, l), i = 0; i < er.length && !er[i][0].test(c); i++)
    ;
  if (i === er.length)
    return !1;
  if (o)
    return er[i][2];
  if (s = n + 1, !er[i][1].test(c)) {
    for (; s < r && !(e.sCount[s] < e.blkIndent); s++)
      if (u = e.bMarks[s] + e.tShift[s], l = e.eMarks[s], c = e.src.slice(u, l), er[i][1].test(c)) {
        c.length !== 0 && s++;
        break;
      }
  }
  return e.line = s, a = e.push("html_block", "", 0), a.map = [n, s], a.content = e.getLines(n, s, e.blkIndent, !0), !0;
}, jge = function(e, n) {
  var r, o, i, s, a, c, u = n + 1, l = e.md.block.ruler.getRules("paragraph"), f = e.lineMax;
  for (c = e.parentType, e.parentType = "paragraph"; u < f && !e.isEmpty(u); u++)
    if (!(e.sCount[u] - e.blkIndent > 3) && !(e.sCount[u] < 0)) {
      for (o = !1, i = 0, s = l.length; i < s; i++)
        if (l[i](e, u, f, !0)) {
          o = !0;
          break;
        }
      if (o)
        break;
    }
  return r = e.getLines(n, u, e.blkIndent, !1).trim(), e.line = u, a = e.push("paragraph_open", "p", 1), a.map = [n, e.line], a = e.push("inline", "", 0), a.content = r, a.map = [n, e.line], a.children = [], a = e.push("paragraph_close", "p", -1), e.parentType = c, !0;
}, lk = ad, Hs = K.isSpace;
function Tt(t, e, n, r) {
  var o, i, s, a, c, u, l, f;
  for (this.src = t, this.md = e, this.env = n, this.tokens = r, this.bMarks = [], this.eMarks = [], this.tShift = [], this.sCount = [], this.bsCount = [], this.blkIndent = 0, this.line = 0, this.lineMax = 0, this.tight = !1, this.ddIndent = -1, this.parentType = "root", this.level = 0, this.result = "", i = this.src, f = !1, s = a = u = l = 0, c = i.length; a < c; a++) {
    if (o = i.charCodeAt(a), !f)
      if (Hs(o)) {
        u++, o === 9 ? l += 4 - l % 4 : l++;
        continue;
      } else
        f = !0;
    (o === 10 || a === c - 1) && (o !== 10 && a++, this.bMarks.push(s), this.eMarks.push(a), this.tShift.push(u), this.sCount.push(l), this.bsCount.push(0), f = !1, u = 0, l = 0, s = a + 1);
  }
  this.bMarks.push(i.length), this.eMarks.push(i.length), this.tShift.push(0), this.sCount.push(0), this.bsCount.push(0), this.lineMax = this.bMarks.length - 1;
}
Tt.prototype.push = function(t, e, n) {
  var r = new lk(t, e, n);
  return r.block = !0, n < 0 && this.level--, r.level = this.level, n > 0 && this.level++, this.tokens.push(r), r;
};
Tt.prototype.isEmpty = function(e) {
  return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
};
Tt.prototype.skipEmptyLines = function(e) {
  for (var n = this.lineMax; e < n && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++)
    ;
  return e;
};
Tt.prototype.skipSpaces = function(e) {
  for (var n, r = this.src.length; e < r && (n = this.src.charCodeAt(e), !!Hs(n)); e++)
    ;
  return e;
};
Tt.prototype.skipSpacesBack = function(e, n) {
  if (e <= n)
    return e;
  for (; e > n; )
    if (!Hs(this.src.charCodeAt(--e)))
      return e + 1;
  return e;
};
Tt.prototype.skipChars = function(e, n) {
  for (var r = this.src.length; e < r && this.src.charCodeAt(e) === n; e++)
    ;
  return e;
};
Tt.prototype.skipCharsBack = function(e, n, r) {
  if (e <= r)
    return e;
  for (; e > r; )
    if (n !== this.src.charCodeAt(--e))
      return e + 1;
  return e;
};
Tt.prototype.getLines = function(e, n, r, o) {
  var i, s, a, c, u, l, f, d = e;
  if (e >= n)
    return "";
  for (l = new Array(n - e), i = 0; d < n; d++, i++) {
    for (s = 0, f = c = this.bMarks[d], d + 1 < n || o ? u = this.eMarks[d] + 1 : u = this.eMarks[d]; c < u && s < r; ) {
      if (a = this.src.charCodeAt(c), Hs(a))
        a === 9 ? s += 4 - (s + this.bsCount[d]) % 4 : s++;
      else if (c - f < this.tShift[d])
        s++;
      else
        break;
      c++;
    }
    s > r ? l[i] = new Array(s - r + 1).join(" ") + this.src.slice(c, u) : l[i] = this.src.slice(c, u);
  }
  return l.join("");
};
Tt.prototype.Token = lk;
var Bge = Tt, zge = sd, xi = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", dge, ["paragraph", "reference"]],
  ["code", hge],
  ["fence", pge, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", vge, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", mge, ["paragraph", "reference", "blockquote", "list"]],
  ["list", bge, ["paragraph", "reference", "blockquote"]],
  ["reference", wge],
  ["heading", kge, ["paragraph", "reference", "blockquote"]],
  ["lheading", Sge],
  ["html_block", qge, ["paragraph", "reference", "blockquote"]],
  ["paragraph", jge]
];
function Vs() {
  this.ruler = new zge();
  for (var t = 0; t < xi.length; t++)
    this.ruler.push(xi[t][0], xi[t][1], { alt: (xi[t][2] || []).slice() });
}
Vs.prototype.tokenize = function(t, e, n) {
  for (var r, o, i = this.ruler.getRules(""), s = i.length, a = e, c = !1, u = t.md.options.maxNesting; a < n && (t.line = a = t.skipEmptyLines(a), !(a >= n || t.sCount[a] < t.blkIndent)); ) {
    if (t.level >= u) {
      t.line = n;
      break;
    }
    for (o = 0; o < s && (r = i[o](t, a, n, !1), !r); o++)
      ;
    t.tight = !c, t.isEmpty(t.line - 1) && (c = !0), a = t.line, a < n && t.isEmpty(a) && (c = !0, a++, t.line = a);
  }
};
Vs.prototype.parse = function(t, e, n, r) {
  var o;
  t && (o = new this.State(t, e, n, r), this.tokenize(o, o.line, o.lineMax));
};
Vs.prototype.State = Bge;
var Hge = Vs;
function Vge(t) {
  switch (t) {
    case 10:
    case 33:
    case 35:
    case 36:
    case 37:
    case 38:
    case 42:
    case 43:
    case 45:
    case 58:
    case 60:
    case 61:
    case 62:
    case 64:
    case 91:
    case 92:
    case 93:
    case 94:
    case 95:
    case 96:
    case 123:
    case 125:
    case 126:
      return !0;
    default:
      return !1;
  }
}
var Uge = function(e, n) {
  for (var r = e.pos; r < e.posMax && !Vge(e.src.charCodeAt(r)); )
    r++;
  return r === e.pos ? !1 : (n || (e.pending += e.src.slice(e.pos, r)), e.pos = r, !0);
}, Gge = K.isSpace, Wge = function(e, n) {
  var r, o, i = e.pos;
  if (e.src.charCodeAt(i) !== 10)
    return !1;
  for (r = e.pending.length - 1, o = e.posMax, n || (r >= 0 && e.pending.charCodeAt(r) === 32 ? r >= 1 && e.pending.charCodeAt(r - 1) === 32 ? (e.pending = e.pending.replace(/ +$/, ""), e.push("hardbreak", "br", 0)) : (e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0)) : e.push("softbreak", "br", 0)), i++; i < o && Gge(e.src.charCodeAt(i)); )
    i++;
  return e.pos = i, !0;
}, Kge = K.isSpace, ud = [];
for (var E_ = 0; E_ < 256; E_++)
  ud.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t) {
  ud[t.charCodeAt(0)] = 1;
});
var Zge = function(e, n) {
  var r, o = e.pos, i = e.posMax;
  if (e.src.charCodeAt(o) !== 92)
    return !1;
  if (o++, o < i) {
    if (r = e.src.charCodeAt(o), r < 256 && ud[r] !== 0)
      return n || (e.pending += e.src[o]), e.pos += 2, !0;
    if (r === 10) {
      for (n || e.push("hardbreak", "br", 0), o++; o < i && (r = e.src.charCodeAt(o), !!Kge(r)); )
        o++;
      return e.pos = o, !0;
    }
  }
  return n || (e.pending += "\\"), e.pos++, !0;
}, Jge = function(e, n) {
  var r, o, i, s, a, c, u = e.pos, l = e.src.charCodeAt(u);
  if (l !== 96)
    return !1;
  for (r = u, u++, o = e.posMax; u < o && e.src.charCodeAt(u) === 96; )
    u++;
  for (i = e.src.slice(r, u), s = a = u; (s = e.src.indexOf("`", a)) !== -1; ) {
    for (a = s + 1; a < o && e.src.charCodeAt(a) === 96; )
      a++;
    if (a - s === i.length)
      return n || (c = e.push("code_inline", "code", 0), c.markup = i, c.content = e.src.slice(u, s).replace(/[ \n]+/g, " ").trim()), e.pos = a, !0;
  }
  return n || (e.pending += i), e.pos += i.length, !0;
}, Us = {};
Us.tokenize = function(e, n) {
  var r, o, i, s, a, c = e.pos, u = e.src.charCodeAt(c);
  if (n || u !== 126 || (o = e.scanDelims(e.pos, !0), s = o.length, a = String.fromCharCode(u), s < 2))
    return !1;
  for (s % 2 && (i = e.push("text", "", 0), i.content = a, s--), r = 0; r < s; r += 2)
    i = e.push("text", "", 0), i.content = a + a, e.delimiters.push({
      marker: u,
      jump: r,
      token: e.tokens.length - 1,
      level: e.level,
      end: -1,
      open: o.can_open,
      close: o.can_close
    });
  return e.pos += o.length, !0;
};
Us.postProcess = function(e) {
  var n, r, o, i, s, a = [], c = e.delimiters, u = e.delimiters.length;
  for (n = 0; n < u; n++)
    o = c[n], o.marker === 126 && o.end !== -1 && (i = c[o.end], s = e.tokens[o.token], s.type = "s_open", s.tag = "s", s.nesting = 1, s.markup = "~~", s.content = "", s = e.tokens[i.token], s.type = "s_close", s.tag = "s", s.nesting = -1, s.markup = "~~", s.content = "", e.tokens[i.token - 1].type === "text" && e.tokens[i.token - 1].content === "~" && a.push(i.token - 1));
  for (; a.length; ) {
    for (n = a.pop(), r = n + 1; r < e.tokens.length && e.tokens[r].type === "s_close"; )
      r++;
    r--, n !== r && (s = e.tokens[r], e.tokens[r] = e.tokens[n], e.tokens[n] = s);
  }
};
var Gs = {};
Gs.tokenize = function(e, n) {
  var r, o, i, s = e.pos, a = e.src.charCodeAt(s);
  if (n || a !== 95 && a !== 42)
    return !1;
  for (o = e.scanDelims(e.pos, a === 42), r = 0; r < o.length; r++)
    i = e.push("text", "", 0), i.content = String.fromCharCode(a), e.delimiters.push({
      // Char code of the starting marker (number).
      //
      marker: a,
      // Total length of these series of delimiters.
      //
      length: o.length,
      // An amount of characters before this one that's equivalent to
      // current one. In plain English: if this delimiter does not open
      // an emphasis, neither do previous `jump` characters.
      //
      // Used to skip sequences like "*****" in one step, for 1st asterisk
      // value will be 0, for 2nd it's 1 and so on.
      //
      jump: r,
      // A position of the token this delimiter corresponds to.
      //
      token: e.tokens.length - 1,
      // Token level.
      //
      level: e.level,
      // If this delimiter is matched as a valid opener, `end` will be
      // equal to its position, otherwise it's `-1`.
      //
      end: -1,
      // Boolean flags that determine if this delimiter could open or close
      // an emphasis.
      //
      open: o.can_open,
      close: o.can_close
    });
  return e.pos += o.length, !0;
};
Gs.postProcess = function(e) {
  var n, r, o, i, s, a, c = e.delimiters, u = e.delimiters.length;
  for (n = u - 1; n >= 0; n--)
    r = c[n], !(r.marker !== 95 && r.marker !== 42) && r.end !== -1 && (o = c[r.end], a = n > 0 && c[n - 1].end === r.end + 1 && c[n - 1].token === r.token - 1 && c[r.end + 1].token === o.token + 1 && c[n - 1].marker === r.marker, s = String.fromCharCode(r.marker), i = e.tokens[r.token], i.type = a ? "strong_open" : "em_open", i.tag = a ? "strong" : "em", i.nesting = 1, i.markup = a ? s + s : s, i.content = "", i = e.tokens[o.token], i.type = a ? "strong_close" : "em_close", i.tag = a ? "strong" : "em", i.nesting = -1, i.markup = a ? s + s : s, i.content = "", a && (e.tokens[c[n - 1].token].content = "", e.tokens[c[r.end + 1].token].content = "", n--));
};
var Yge = K.normalizeReference, lu = K.isSpace, Xge = function(e, n) {
  var r, o, i, s, a, c, u, l, f, d, h = "", b = e.pos, m = e.posMax, g = e.pos, v = !0;
  if (e.src.charCodeAt(e.pos) !== 91 || (a = e.pos + 1, s = e.md.helpers.parseLinkLabel(e, e.pos, !0), s < 0))
    return !1;
  if (c = s + 1, c < m && e.src.charCodeAt(c) === 40) {
    for (v = !1, c++; c < m && (o = e.src.charCodeAt(c), !(!lu(o) && o !== 10)); c++)
      ;
    if (c >= m)
      return !1;
    for (g = c, u = e.md.helpers.parseLinkDestination(e.src, c, e.posMax), u.ok && (h = e.md.normalizeLink(u.str), e.md.validateLink(h) ? c = u.pos : h = ""), g = c; c < m && (o = e.src.charCodeAt(c), !(!lu(o) && o !== 10)); c++)
      ;
    if (u = e.md.helpers.parseLinkTitle(e.src, c, e.posMax), c < m && g !== c && u.ok)
      for (f = u.str, c = u.pos; c < m && (o = e.src.charCodeAt(c), !(!lu(o) && o !== 10)); c++)
        ;
    else
      f = "";
    (c >= m || e.src.charCodeAt(c) !== 41) && (v = !0), c++;
  }
  if (v) {
    if (typeof e.env.references > "u")
      return !1;
    if (c < m && e.src.charCodeAt(c) === 91 ? (g = c + 1, c = e.md.helpers.parseLinkLabel(e, c), c >= 0 ? i = e.src.slice(g, c++) : c = s + 1) : c = s + 1, i || (i = e.src.slice(a, s)), l = e.env.references[Yge(i)], !l)
      return e.pos = b, !1;
    h = l.href, f = l.title;
  }
  return n || (e.pos = a, e.posMax = s, d = e.push("link_open", "a", 1), d.attrs = r = [["href", h]], f && r.push(["title", f]), e.md.inline.tokenize(e), d = e.push("link_close", "a", -1)), e.pos = c, e.posMax = m, !0;
}, Qge = K.normalizeReference, fu = K.isSpace, eme = function(e, n) {
  var r, o, i, s, a, c, u, l, f, d, h, b, m, g = "", v = e.pos, k = e.posMax;
  if (e.src.charCodeAt(e.pos) !== 33 || e.src.charCodeAt(e.pos + 1) !== 91 || (c = e.pos + 2, a = e.md.helpers.parseLinkLabel(e, e.pos + 1, !1), a < 0))
    return !1;
  if (u = a + 1, u < k && e.src.charCodeAt(u) === 40) {
    for (u++; u < k && (o = e.src.charCodeAt(u), !(!fu(o) && o !== 10)); u++)
      ;
    if (u >= k)
      return !1;
    for (m = u, f = e.md.helpers.parseLinkDestination(e.src, u, e.posMax), f.ok && (g = e.md.normalizeLink(f.str), e.md.validateLink(g) ? u = f.pos : g = ""), m = u; u < k && (o = e.src.charCodeAt(u), !(!fu(o) && o !== 10)); u++)
      ;
    if (f = e.md.helpers.parseLinkTitle(e.src, u, e.posMax), u < k && m !== u && f.ok)
      for (d = f.str, u = f.pos; u < k && (o = e.src.charCodeAt(u), !(!fu(o) && o !== 10)); u++)
        ;
    else
      d = "";
    if (u >= k || e.src.charCodeAt(u) !== 41)
      return e.pos = v, !1;
    u++;
  } else {
    if (typeof e.env.references > "u")
      return !1;
    if (u < k && e.src.charCodeAt(u) === 91 ? (m = u + 1, u = e.md.helpers.parseLinkLabel(e, u), u >= 0 ? s = e.src.slice(m, u++) : u = a + 1) : u = a + 1, s || (s = e.src.slice(c, a)), l = e.env.references[Qge(s)], !l)
      return e.pos = v, !1;
    g = l.href, d = l.title;
  }
  return n || (i = e.src.slice(c, a), e.md.inline.parse(
    i,
    e.md,
    e.env,
    b = []
  ), h = e.push("image", "img", 0), h.attrs = r = [["src", g], ["alt", ""]], h.children = b, h.content = i, d && r.push(["title", d])), e.pos = u, e.posMax = k, !0;
}, C_ = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/, I_ = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/, tme = function(e, n) {
  var r, o, i, s, a, c, u = e.pos;
  return e.src.charCodeAt(u) !== 60 || (r = e.src.slice(u), r.indexOf(">") < 0) ? !1 : I_.test(r) ? (o = r.match(I_), s = o[0].slice(1, -1), a = e.md.normalizeLink(s), e.md.validateLink(a) ? (n || (c = e.push("link_open", "a", 1), c.attrs = [["href", a]], c.markup = "autolink", c.info = "auto", c = e.push("text", "", 0), c.content = e.md.normalizeLinkText(s), c = e.push("link_close", "a", -1), c.markup = "autolink", c.info = "auto"), e.pos += o[0].length, !0) : !1) : C_.test(r) ? (i = r.match(C_), s = i[0].slice(1, -1), a = e.md.normalizeLink("mailto:" + s), e.md.validateLink(a) ? (n || (c = e.push("link_open", "a", 1), c.attrs = [["href", a]], c.markup = "autolink", c.info = "auto", c = e.push("text", "", 0), c.content = e.md.normalizeLinkText(s), c = e.push("link_close", "a", -1), c.markup = "autolink", c.info = "auto"), e.pos += i[0].length, !0) : !1) : !1;
}, nme = zs.HTML_TAG_RE;
function rme(t) {
  var e = t | 32;
  return e >= 97 && e <= 122;
}
var ome = function(e, n) {
  var r, o, i, s, a = e.pos;
  return !e.md.options.html || (i = e.posMax, e.src.charCodeAt(a) !== 60 || a + 2 >= i) || (r = e.src.charCodeAt(a + 1), r !== 33 && r !== 63 && r !== 47 && !rme(r)) || (o = e.src.slice(a).match(nme), !o) ? !1 : (n || (s = e.push("html_inline", "", 0), s.content = e.src.slice(a, a + o[0].length)), e.pos += o[0].length, !0);
}, T_ = tk, ime = K.has, sme = K.isValidEntityCode, A_ = K.fromCodePoint, ame = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i, cme = /^&([a-z][a-z0-9]{1,31});/i, ume = function(e, n) {
  var r, o, i, s = e.pos, a = e.posMax;
  if (e.src.charCodeAt(s) !== 38)
    return !1;
  if (s + 1 < a) {
    if (r = e.src.charCodeAt(s + 1), r === 35) {
      if (i = e.src.slice(s).match(ame), i)
        return n || (o = i[1][0].toLowerCase() === "x" ? parseInt(i[1].slice(1), 16) : parseInt(i[1], 10), e.pending += sme(o) ? A_(o) : A_(65533)), e.pos += i[0].length, !0;
    } else if (i = e.src.slice(s).match(cme), i && ime(T_, i[1]))
      return n || (e.pending += T_[i[1]]), e.pos += i[0].length, !0;
  }
  return n || (e.pending += "&"), e.pos++, !0;
}, lme = function(e) {
  var n, r, o, i, s = e.delimiters, a = e.delimiters.length;
  for (n = 0; n < a; n++)
    if (o = s[n], !!o.close)
      for (r = n - o.jump - 1; r >= 0; ) {
        if (i = s[r], i.open && i.marker === o.marker && i.end < 0 && i.level === o.level) {
          var c = (i.close || o.open) && typeof i.length < "u" && typeof o.length < "u" && (i.length + o.length) % 3 === 0;
          if (!c) {
            o.jump = n - r, o.open = !1, i.end = n, i.jump = 0;
            break;
          }
        }
        r -= i.jump + 1;
      }
}, fme = function(e) {
  var n, r, o = 0, i = e.tokens, s = e.tokens.length;
  for (n = r = 0; n < s; n++)
    o += i[n].nesting, i[n].level = o, i[n].type === "text" && n + 1 < s && i[n + 1].type === "text" ? i[n + 1].content = i[n].content + i[n + 1].content : (n !== r && (i[r] = i[n]), r++);
  n !== r && (i.length = r);
}, ld = ad, O_ = K.isWhiteSpace, D_ = K.isPunctChar, P_ = K.isMdAsciiPunct;
function To(t, e, n, r) {
  this.src = t, this.env = n, this.md = e, this.tokens = r, this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [];
}
To.prototype.pushPending = function() {
  var t = new ld("text", "", 0);
  return t.content = this.pending, t.level = this.pendingLevel, this.tokens.push(t), this.pending = "", t;
};
To.prototype.push = function(t, e, n) {
  this.pending && this.pushPending();
  var r = new ld(t, e, n);
  return n < 0 && this.level--, r.level = this.level, n > 0 && this.level++, this.pendingLevel = this.level, this.tokens.push(r), r;
};
To.prototype.scanDelims = function(t, e) {
  var n = t, r, o, i, s, a, c, u, l, f, d = !0, h = !0, b = this.posMax, m = this.src.charCodeAt(t);
  for (r = t > 0 ? this.src.charCodeAt(t - 1) : 32; n < b && this.src.charCodeAt(n) === m; )
    n++;
  return i = n - t, o = n < b ? this.src.charCodeAt(n) : 32, u = P_(r) || D_(String.fromCharCode(r)), f = P_(o) || D_(String.fromCharCode(o)), c = O_(r), l = O_(o), l ? d = !1 : f && (c || u || (d = !1)), c ? h = !1 : u && (l || f || (h = !1)), e ? (s = d, a = h) : (s = d && (!h || u), a = h && (!d || f)), {
    can_open: s,
    can_close: a,
    length: i
  };
};
To.prototype.Token = ld;
var dme = To, F_ = sd, du = [
  ["text", Uge],
  ["newline", Wge],
  ["escape", Zge],
  ["backticks", Jge],
  ["strikethrough", Us.tokenize],
  ["emphasis", Gs.tokenize],
  ["link", Xge],
  ["image", eme],
  ["autolink", tme],
  ["html_inline", ome],
  ["entity", ume]
], hu = [
  ["balance_pairs", lme],
  ["strikethrough", Us.postProcess],
  ["emphasis", Gs.postProcess],
  ["text_collapse", fme]
];
function Ao() {
  var t;
  for (this.ruler = new F_(), t = 0; t < du.length; t++)
    this.ruler.push(du[t][0], du[t][1]);
  for (this.ruler2 = new F_(), t = 0; t < hu.length; t++)
    this.ruler2.push(hu[t][0], hu[t][1]);
}
Ao.prototype.skipToken = function(t) {
  var e, n, r = t.pos, o = this.ruler.getRules(""), i = o.length, s = t.md.options.maxNesting, a = t.cache;
  if (typeof a[r] < "u") {
    t.pos = a[r];
    return;
  }
  if (t.level < s)
    for (n = 0; n < i && (t.level++, e = o[n](t, !0), t.level--, !e); n++)
      ;
  else
    t.pos = t.posMax;
  e || t.pos++, a[r] = t.pos;
};
Ao.prototype.tokenize = function(t) {
  for (var e, n, r = this.ruler.getRules(""), o = r.length, i = t.posMax, s = t.md.options.maxNesting; t.pos < i; ) {
    if (t.level < s)
      for (n = 0; n < o && (e = r[n](t, !1), !e); n++)
        ;
    if (e) {
      if (t.pos >= i)
        break;
      continue;
    }
    t.pending += t.src[t.pos++];
  }
  t.pending && t.pushPending();
};
Ao.prototype.parse = function(t, e, n, r) {
  var o, i, s, a = new this.State(t, e, n, r);
  for (this.tokenize(a), i = this.ruler2.getRules(""), s = i.length, o = 0; o < s; o++)
    i[o](a);
};
Ao.prototype.State = dme;
var hme = Ao, pu, R_;
function pme() {
  return R_ || (R_ = 1, pu = function(t) {
    var e = {};
    e.src_Any = nk().source, e.src_Cc = rk().source, e.src_Z = ok().source, e.src_P = id.source, e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|"), e.src_ZCc = [e.src_Z, e.src_Cc].join("|");
    var n = "[><｜]";
    return e.src_pseudo_letter = "(?:(?!" + n + "|" + e.src_ZPCc + ")" + e.src_Any + ")", e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?", e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", e.src_host_terminator = "(?=$|" + n + "|" + e.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + e.src_ZPCc + "))", e.src_path = "(?:[/?#](?:(?!" + e.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-]).|\\[(?:(?!` + e.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + e.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + e.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + e.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + e.src_ZCc + "|[']).)+\\'|\\'(?=" + e.src_pseudo_letter + "|[-]).|\\.{2,4}[a-zA-Z0-9%/]|\\.(?!" + e.src_ZCc + "|[.]).|" + (t && t["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + e.src_ZCc + ").|\\!(?!" + e.src_ZCc + "|[!]).|\\?(?!" + e.src_ZCc + "|[?]).)+|\\/)?", e.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', e.src_xn = "xn--[a-z0-9\\-]{1,59}", e.src_domain_root = // Allow letters & digits (http://test1)
    "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})", e.src_domain = "(?:" + e.src_xn + "|(?:" + e.src_pseudo_letter + ")|(?:" + e.src_pseudo_letter + "(?:-|" + e.src_pseudo_letter + "){0,61}" + e.src_pseudo_letter + "))", e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))", e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))", e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))", e.src_host_strict = e.src_host + e.src_host_terminator, e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator, e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator, e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))", e.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")", e.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_fuzzy_strict + e.src_path + ")", e.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_no_ip_fuzzy_strict + e.src_path + ")", e;
  }), pu;
}
function Nl(t) {
  var e = Array.prototype.slice.call(arguments, 1);
  return e.forEach(function(n) {
    n && Object.keys(n).forEach(function(r) {
      t[r] = n[r];
    });
  }), t;
}
function Ws(t) {
  return Object.prototype.toString.call(t);
}
function vme(t) {
  return Ws(t) === "[object String]";
}
function gme(t) {
  return Ws(t) === "[object Object]";
}
function mme(t) {
  return Ws(t) === "[object RegExp]";
}
function N_(t) {
  return Ws(t) === "[object Function]";
}
function _me(t) {
  return t.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
var fk = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function bme(t) {
  return Object.keys(t || {}).reduce(function(e, n) {
    return e || fk.hasOwnProperty(n);
  }, !1);
}
var yme = {
  "http:": {
    validate: function(t, e, n) {
      var r = t.slice(e);
      return n.re.http || (n.re.http = new RegExp(
        "^\\/\\/" + n.re.src_auth + n.re.src_host_port_strict + n.re.src_path,
        "i"
      )), n.re.http.test(r) ? r.match(n.re.http)[0].length : 0;
    }
  },
  "https:": "http:",
  "ftp:": "http:",
  "//": {
    validate: function(t, e, n) {
      var r = t.slice(e);
      return n.re.no_http || (n.re.no_http = new RegExp(
        "^" + n.re.src_auth + // Don't allow single-level domains, because of false positives like '//test'
        // with code comments
        "(?:localhost|(?:(?:" + n.re.src_domain + ")\\.)+" + n.re.src_domain_root + ")" + n.re.src_port + n.re.src_host_terminator + n.re.src_path,
        "i"
      )), n.re.no_http.test(r) ? e >= 3 && t[e - 3] === ":" || e >= 3 && t[e - 3] === "/" ? 0 : r.match(n.re.no_http)[0].length : 0;
    }
  },
  "mailto:": {
    validate: function(t, e, n) {
      var r = t.slice(e);
      return n.re.mailto || (n.re.mailto = new RegExp(
        "^" + n.re.src_email_name + "@" + n.re.src_host_strict,
        "i"
      )), n.re.mailto.test(r) ? r.match(n.re.mailto)[0].length : 0;
    }
  }
}, wme = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", kme = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function Sme(t) {
  t.__index__ = -1, t.__text_cache__ = "";
}
function xme(t) {
  return function(e, n) {
    var r = e.slice(n);
    return t.test(r) ? r.match(t)[0].length : 0;
  };
}
function M_() {
  return function(t, e) {
    e.normalize(t);
  };
}
function us(t) {
  var e = t.re = pme()(t.__opts__), n = t.__tlds__.slice();
  t.onCompile(), t.__tlds_replaced__ || n.push(wme), n.push(e.src_xn), e.src_tlds = n.join("|");
  function r(a) {
    return a.replace("%TLDS%", e.src_tlds);
  }
  e.email_fuzzy = RegExp(r(e.tpl_email_fuzzy), "i"), e.link_fuzzy = RegExp(r(e.tpl_link_fuzzy), "i"), e.link_no_ip_fuzzy = RegExp(r(e.tpl_link_no_ip_fuzzy), "i"), e.host_fuzzy_test = RegExp(r(e.tpl_host_fuzzy_test), "i");
  var o = [];
  t.__compiled__ = {};
  function i(a, c) {
    throw new Error('(LinkifyIt) Invalid schema "' + a + '": ' + c);
  }
  Object.keys(t.__schemas__).forEach(function(a) {
    var c = t.__schemas__[a];
    if (c !== null) {
      var u = { validate: null, link: null };
      if (t.__compiled__[a] = u, gme(c)) {
        mme(c.validate) ? u.validate = xme(c.validate) : N_(c.validate) ? u.validate = c.validate : i(a, c), N_(c.normalize) ? u.normalize = c.normalize : c.normalize ? i(a, c) : u.normalize = M_();
        return;
      }
      if (vme(c)) {
        o.push(a);
        return;
      }
      i(a, c);
    }
  }), o.forEach(function(a) {
    t.__compiled__[t.__schemas__[a]] && (t.__compiled__[a].validate = t.__compiled__[t.__schemas__[a]].validate, t.__compiled__[a].normalize = t.__compiled__[t.__schemas__[a]].normalize);
  }), t.__compiled__[""] = { validate: null, normalize: M_() };
  var s = Object.keys(t.__compiled__).filter(function(a) {
    return a.length > 0 && t.__compiled__[a];
  }).map(_me).join("|");
  t.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + s + ")", "i"), t.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + s + ")", "ig"), t.re.pretest = RegExp(
    "(" + t.re.schema_test.source + ")|(" + t.re.host_fuzzy_test.source + ")|@",
    "i"
  ), Sme(t);
}
function $me(t, e) {
  var n = t.__index__, r = t.__last_index__, o = t.__text_cache__.slice(n, r);
  this.schema = t.__schema__.toLowerCase(), this.index = n + e, this.lastIndex = r + e, this.raw = o, this.text = o, this.url = o;
}
function L_(t, e) {
  var n = new $me(t, e);
  return t.__compiled__[n.schema].normalize(n, t), n;
}
function nt(t, e) {
  if (!(this instanceof nt))
    return new nt(t, e);
  e || bme(t) && (e = t, t = {}), this.__opts__ = Nl({}, fk, e), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = Nl({}, yme, t), this.__compiled__ = {}, this.__tlds__ = kme, this.__tlds_replaced__ = !1, this.re = {}, us(this);
}
nt.prototype.add = function(e, n) {
  return this.__schemas__[e] = n, us(this), this;
};
nt.prototype.set = function(e) {
  return this.__opts__ = Nl(this.__opts__, e), this;
};
nt.prototype.test = function(e) {
  if (this.__text_cache__ = e, this.__index__ = -1, !e.length)
    return !1;
  var n, r, o, i, s, a, c, u, l;
  if (this.re.schema_test.test(e)) {
    for (c = this.re.schema_search, c.lastIndex = 0; (n = c.exec(e)) !== null; )
      if (i = this.testSchemaAt(e, n[2], c.lastIndex), i) {
        this.__schema__ = n[2], this.__index__ = n.index + n[1].length, this.__last_index__ = n.index + n[0].length + i;
        break;
      }
  }
  return this.__opts__.fuzzyLink && this.__compiled__["http:"] && (u = e.search(this.re.host_fuzzy_test), u >= 0 && (this.__index__ < 0 || u < this.__index__) && (r = e.match(this.__opts__.fuzzyIP ? this.re.link_fuzzy : this.re.link_no_ip_fuzzy)) !== null && (s = r.index + r[1].length, (this.__index__ < 0 || s < this.__index__) && (this.__schema__ = "", this.__index__ = s, this.__last_index__ = r.index + r[0].length))), this.__opts__.fuzzyEmail && this.__compiled__["mailto:"] && (l = e.indexOf("@"), l >= 0 && (o = e.match(this.re.email_fuzzy)) !== null && (s = o.index + o[1].length, a = o.index + o[0].length, (this.__index__ < 0 || s < this.__index__ || s === this.__index__ && a > this.__last_index__) && (this.__schema__ = "mailto:", this.__index__ = s, this.__last_index__ = a))), this.__index__ >= 0;
};
nt.prototype.pretest = function(e) {
  return this.re.pretest.test(e);
};
nt.prototype.testSchemaAt = function(e, n, r) {
  return this.__compiled__[n.toLowerCase()] ? this.__compiled__[n.toLowerCase()].validate(e, r, this) : 0;
};
nt.prototype.match = function(e) {
  var n = 0, r = [];
  this.__index__ >= 0 && this.__text_cache__ === e && (r.push(L_(this, n)), n = this.__last_index__);
  for (var o = n ? e.slice(n) : e; this.test(o); )
    r.push(L_(this, n)), o = o.slice(this.__last_index__), n += this.__last_index__;
  return r.length ? r : null;
};
nt.prototype.tlds = function(e, n) {
  return e = Array.isArray(e) ? e : [e], n ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(r, o, i) {
    return r !== i[o - 1];
  }).reverse(), us(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, us(this), this);
};
nt.prototype.normalize = function(e) {
  e.schema || (e.url = "http://" + e.url), e.schema === "mailto:" && !/^mailto:/i.test(e.url) && (e.url = "mailto:" + e.url);
};
nt.prototype.onCompile = function() {
};
var Eme = nt;
const hr = 2147483647, bt = 36, fd = 1, _o = 26, Cme = 38, Ime = 700, dk = 72, hk = 128, pk = "-", Tme = /^xn--/, Ame = /[^\0-\x7E]/, Ome = /[\x2E\u3002\uFF0E\uFF61]/g, Dme = {
  overflow: "Overflow: input needs wider integers to process",
  "not-basic": "Illegal input >= 0x80 (not a basic code point)",
  "invalid-input": "Invalid input"
}, vu = bt - fd, yt = Math.floor, gu = String.fromCharCode;
function En(t) {
  throw new RangeError(Dme[t]);
}
function Pme(t, e) {
  const n = [];
  let r = t.length;
  for (; r--; )
    n[r] = e(t[r]);
  return n;
}
function vk(t, e) {
  const n = t.split("@");
  let r = "";
  n.length > 1 && (r = n[0] + "@", t = n[1]), t = t.replace(Ome, ".");
  const o = t.split("."), i = Pme(o, e).join(".");
  return r + i;
}
function dd(t) {
  const e = [];
  let n = 0;
  const r = t.length;
  for (; n < r; ) {
    const o = t.charCodeAt(n++);
    if (o >= 55296 && o <= 56319 && n < r) {
      const i = t.charCodeAt(n++);
      (i & 64512) == 56320 ? e.push(((o & 1023) << 10) + (i & 1023) + 65536) : (e.push(o), n--);
    } else
      e.push(o);
  }
  return e;
}
const gk = (t) => String.fromCodePoint(...t), Fme = function(t) {
  return t - 48 < 10 ? t - 22 : t - 65 < 26 ? t - 65 : t - 97 < 26 ? t - 97 : bt;
}, q_ = function(t, e) {
  return t + 22 + 75 * (t < 26) - ((e != 0) << 5);
}, mk = function(t, e, n) {
  let r = 0;
  for (t = n ? yt(t / Ime) : t >> 1, t += yt(t / e); t > vu * _o >> 1; r += bt)
    t = yt(t / vu);
  return yt(r + (vu + 1) * t / (t + Cme));
}, hd = function(t) {
  const e = [], n = t.length;
  let r = 0, o = hk, i = dk, s = t.lastIndexOf(pk);
  s < 0 && (s = 0);
  for (let a = 0; a < s; ++a)
    t.charCodeAt(a) >= 128 && En("not-basic"), e.push(t.charCodeAt(a));
  for (let a = s > 0 ? s + 1 : 0; a < n; ) {
    let c = r;
    for (let l = 1, f = bt; ; f += bt) {
      a >= n && En("invalid-input");
      const d = Fme(t.charCodeAt(a++));
      (d >= bt || d > yt((hr - r) / l)) && En("overflow"), r += d * l;
      const h = f <= i ? fd : f >= i + _o ? _o : f - i;
      if (d < h)
        break;
      const b = bt - h;
      l > yt(hr / b) && En("overflow"), l *= b;
    }
    const u = e.length + 1;
    i = mk(r - c, u, c == 0), yt(r / u) > hr - o && En("overflow"), o += yt(r / u), r %= u, e.splice(r++, 0, o);
  }
  return String.fromCodePoint(...e);
}, pd = function(t) {
  const e = [];
  t = dd(t);
  let n = t.length, r = hk, o = 0, i = dk;
  for (const c of t)
    c < 128 && e.push(gu(c));
  let s = e.length, a = s;
  for (s && e.push(pk); a < n; ) {
    let c = hr;
    for (const l of t)
      l >= r && l < c && (c = l);
    const u = a + 1;
    c - r > yt((hr - o) / u) && En("overflow"), o += (c - r) * u, r = c;
    for (const l of t)
      if (l < r && ++o > hr && En("overflow"), l == r) {
        let f = o;
        for (let d = bt; ; d += bt) {
          const h = d <= i ? fd : d >= i + _o ? _o : d - i;
          if (f < h)
            break;
          const b = f - h, m = bt - h;
          e.push(
            gu(q_(h + b % m, 0))
          ), f = yt(b / m);
        }
        e.push(gu(q_(f, 0))), i = mk(o, u, a == s), o = 0, ++a;
      }
    ++o, ++r;
  }
  return e.join("");
}, _k = function(t) {
  return vk(t, function(e) {
    return Tme.test(e) ? hd(e.slice(4).toLowerCase()) : e;
  });
}, bk = function(t) {
  return vk(t, function(e) {
    return Ame.test(e) ? "xn--" + pd(e) : e;
  });
}, Rme = {
  /**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
  version: "2.1.0",
  /**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
  ucs2: {
    decode: dd,
    encode: gk
  },
  decode: hd,
  encode: pd,
  toASCII: bk,
  toUnicode: _k
}, Nme = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  decode: hd,
  default: Rme,
  encode: pd,
  toASCII: bk,
  toUnicode: _k,
  ucs2decode: dd,
  ucs2encode: gk
}, Symbol.toStringTag, { value: "Module" })), Mme = /* @__PURE__ */ Sk(Nme);
var Lme = {
  options: {
    html: !1,
    // Enable HTML tags in source
    xhtmlOut: !1,
    // Use '/' to close single tags (<br />)
    breaks: !1,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkify: !1,
    // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 100
    // Internal protection, recursion limit
  },
  components: {
    core: {},
    block: {},
    inline: {}
  }
}, qme = {
  options: {
    html: !1,
    // Enable HTML tags in source
    xhtmlOut: !1,
    // Use '/' to close single tags (<br />)
    breaks: !1,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkify: !1,
    // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline"
      ]
    },
    block: {
      rules: [
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "text"
      ],
      rules2: [
        "balance_pairs",
        "text_collapse"
      ]
    }
  }
}, jme = {
  options: {
    html: !0,
    // Enable HTML tags in source
    xhtmlOut: !0,
    // Use '/' to close single tags (<br />)
    breaks: !1,
    // Convert '\n' in paragraphs into <br>
    langPrefix: "language-",
    // CSS language prefix for fenced blocks
    linkify: !1,
    // autoconvert URL-like texts to links
    // Enable some language-neutral replacements + quotes beautification
    typographer: !1,
    // Double + single quotes replacement pairs, when typographer enabled,
    // and smartquotes on. Could be either a String or an Array.
    //
    // For example, you can use '«»„“' for Russian, '„“‚‘' for German,
    // and ['«\xA0', '\xA0»', '‹\xA0', '\xA0›'] for French (including nbsp).
    quotes: "“”‘’",
    /* “”‘’ */
    // Highlighter function. Should return escaped HTML,
    // or '' if the source string is not changed and should be escaped externaly.
    // If result starts with <pre... internal wrapper is skipped.
    //
    // function (/*str, lang*/) { return ''; }
    //
    highlight: null,
    maxNesting: 20
    // Internal protection, recursion limit
  },
  components: {
    core: {
      rules: [
        "normalize",
        "block",
        "inline"
      ]
    },
    block: {
      rules: [
        "blockquote",
        "code",
        "fence",
        "heading",
        "hr",
        "html_block",
        "lheading",
        "list",
        "reference",
        "paragraph"
      ]
    },
    inline: {
      rules: [
        "autolink",
        "backticks",
        "emphasis",
        "entity",
        "escape",
        "html_inline",
        "image",
        "link",
        "newline",
        "text"
      ],
      rules2: [
        "balance_pairs",
        "emphasis",
        "text_collapse"
      ]
    }
  }
}, so = K, Bme = Bs, zme = Bve, Hme = lge, Vme = Hge, Ume = hme, Gme = Eme, pr = Dr, yk = Mme, Wme = {
  default: Lme,
  zero: qme,
  commonmark: jme
}, Kme = /^(vbscript|javascript|file|data):/, Zme = /^data:image\/(gif|png|jpeg|webp);/;
function Jme(t) {
  var e = t.trim().toLowerCase();
  return Kme.test(e) ? !!Zme.test(e) : !0;
}
var wk = ["http:", "https:", "mailto:"];
function Yme(t) {
  var e = pr.parse(t, !0);
  if (e.hostname && (!e.protocol || wk.indexOf(e.protocol) >= 0))
    try {
      e.hostname = yk.toASCII(e.hostname);
    } catch {
    }
  return pr.encode(pr.format(e));
}
function Xme(t) {
  var e = pr.parse(t, !0);
  if (e.hostname && (!e.protocol || wk.indexOf(e.protocol) >= 0))
    try {
      e.hostname = yk.toUnicode(e.hostname);
    } catch {
    }
  return pr.decode(pr.format(e));
}
function rt(t, e) {
  if (!(this instanceof rt))
    return new rt(t, e);
  e || so.isString(t) || (e = t || {}, t = "default"), this.inline = new Ume(), this.block = new Vme(), this.core = new Hme(), this.renderer = new zme(), this.linkify = new Gme(), this.validateLink = Jme, this.normalizeLink = Yme, this.normalizeLinkText = Xme, this.utils = so, this.helpers = so.assign({}, Bme), this.options = {}, this.configure(t), e && this.set(e);
}
rt.prototype.set = function(t) {
  return so.assign(this.options, t), this;
};
rt.prototype.configure = function(t) {
  var e = this, n;
  if (so.isString(t) && (n = t, t = Wme[n], !t))
    throw new Error('Wrong `markdown-it` preset "' + n + '", check name');
  if (!t)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return t.options && e.set(t.options), t.components && Object.keys(t.components).forEach(function(r) {
    t.components[r].rules && e[r].ruler.enableOnly(t.components[r].rules), t.components[r].rules2 && e[r].ruler2.enableOnly(t.components[r].rules2);
  }), this;
};
rt.prototype.enable = function(t, e) {
  var n = [];
  Array.isArray(t) || (t = [t]), ["core", "block", "inline"].forEach(function(o) {
    n = n.concat(this[o].ruler.enable(t, !0));
  }, this), n = n.concat(this.inline.ruler2.enable(t, !0));
  var r = t.filter(function(o) {
    return n.indexOf(o) < 0;
  });
  if (r.length && !e)
    throw new Error("MarkdownIt. Failed to enable unknown rule(s): " + r);
  return this;
};
rt.prototype.disable = function(t, e) {
  var n = [];
  Array.isArray(t) || (t = [t]), ["core", "block", "inline"].forEach(function(o) {
    n = n.concat(this[o].ruler.disable(t, !0));
  }, this), n = n.concat(this.inline.ruler2.disable(t, !0));
  var r = t.filter(function(o) {
    return n.indexOf(o) < 0;
  });
  if (r.length && !e)
    throw new Error("MarkdownIt. Failed to disable unknown rule(s): " + r);
  return this;
};
rt.prototype.use = function(t) {
  var e = [this].concat(Array.prototype.slice.call(arguments, 1));
  return t.apply(t, e), this;
};
rt.prototype.parse = function(t, e) {
  if (typeof t != "string")
    throw new Error("Input data should be a String");
  var n = new this.core.State(t, this, e);
  return this.core.process(n), n.tokens;
};
rt.prototype.render = function(t, e) {
  return e = e || {}, this.renderer.render(this.parse(t, e), this.options, e);
};
rt.prototype.parseInline = function(t, e) {
  var n = new this.core.State(t, this, e);
  return n.inlineMode = !0, this.core.process(n), n.tokens;
};
rt.prototype.renderInline = function(t, e) {
  return e = e || {}, this.renderer.render(this.parseInline(t, e), this.options, e);
};
var Qme = rt, e_e = Qme;
const t_e = /* @__PURE__ */ z_(e_e), n_e = "😀", r_e = "😃", o_e = "😄", i_e = "😁", s_e = "😆", a_e = "😆", c_e = "😅", u_e = "😂", l_e = "🤣", f_e = "☺️", d_e = "😊", h_e = "😇", p_e = "🙂", v_e = "🙃", g_e = "😉", m_e = "😌", b_e = "😍", y_e = "😘", w_e = "😗", k_e = "😙", S_e = "😚", x_e = "😋", $_e = "😜", E_e = "😝", C_e = "😛", I_e = "🤑", T_e = "🤗", A_e = "🤓", O_e = "😎", D_e = "🤡", P_e = "🤠", F_e = "😏", R_e = "😒", N_e = "😞", M_e = "😔", L_e = "😟", q_e = "😕", j_e = "🙁", B_e = "☹️", z_e = "😣", H_e = "😖", V_e = "😫", U_e = "😩", G_e = "😤", W_e = "😠", K_e = "😡", Z_e = "😡", J_e = "😶", Y_e = "😐", X_e = "😑", Q_e = "😯", ebe = "😦", tbe = "😧", nbe = "😮", rbe = "😲", obe = "😵", ibe = "😳", sbe = "😱", abe = "😨", cbe = "😰", ube = "😢", lbe = "😥", fbe = "🤤", dbe = "😭", hbe = "😓", pbe = "😪", vbe = "😴", gbe = "🙄", mbe = "🤔", _be = "🤥", bbe = "😬", ybe = "🤐", wbe = "🤢", kbe = "🤧", Sbe = "😷", xbe = "🤒", $be = "🤕", Ebe = "😈", Cbe = "👿", Ibe = "👹", Tbe = "👺", Abe = "💩", Obe = "💩", Dbe = "💩", Pbe = "👻", Fbe = "💀", Rbe = "☠️", Nbe = "👽", Mbe = "👾", Lbe = "🤖", qbe = "🎃", jbe = "😺", Bbe = "😸", zbe = "😹", Hbe = "😻", Vbe = "😼", Ube = "😽", Gbe = "🙀", Wbe = "😿", Kbe = "😾", Zbe = "👐", Jbe = "🙌", Ybe = "👏", Xbe = "🙏", Qbe = "🤝", e0e = "👍", t0e = "👎", n0e = "👊", r0e = "👊", o0e = "👊", i0e = "✊", s0e = "✊", a0e = "🤛", c0e = "🤜", u0e = "🤞", l0e = "✌️", f0e = "🤘", d0e = "👌", h0e = "👈", p0e = "👉", v0e = "👆", g0e = "👇", m0e = "☝️", _0e = "✋", b0e = "✋", y0e = "🤚", w0e = "🖐", k0e = "🖖", S0e = "👋", x0e = "🤙", $0e = "💪", E0e = "🖕", C0e = "🖕", I0e = "✍️", T0e = "🤳", A0e = "💅", O0e = "💍", D0e = "💄", P0e = "💋", F0e = "👄", R0e = "👅", N0e = "👂", M0e = "👃", L0e = "👣", q0e = "👁", j0e = "👀", B0e = "🗣", z0e = "👤", H0e = "👥", V0e = "👶", U0e = "👦", G0e = "👧", W0e = "👨", K0e = "👩", Z0e = "👱‍♀", J0e = "👱", Y0e = "👱", X0e = "👴", Q0e = "👵", eye = "👲", tye = "👳‍♀", nye = "👳", rye = "👮‍♀", oye = "👮", iye = "👮", sye = "👷‍♀", aye = "👷", cye = "👷", uye = "💂‍♀", lye = "💂", fye = "🕵️‍♀️", dye = "🕵", hye = "🕵", pye = "👩‍⚕", vye = "👨‍⚕", gye = "👩‍🌾", mye = "👨‍🌾", _ye = "👩‍🍳", bye = "👨‍🍳", yye = "👩‍🎓", wye = "👨‍🎓", kye = "👩‍🎤", Sye = "👨‍🎤", xye = "👩‍🏫", $ye = "👨‍🏫", Eye = "👩‍🏭", Cye = "👨‍🏭", Iye = "👩‍💻", Tye = "👨‍💻", Aye = "👩‍💼", Oye = "👨‍💼", Dye = "👩‍🔧", Pye = "👨‍🔧", Fye = "👩‍🔬", Rye = "👨‍🔬", Nye = "👩‍🎨", Mye = "👨‍🎨", Lye = "👩‍🚒", qye = "👨‍🚒", jye = "👩‍✈", Bye = "👨‍✈", zye = "👩‍🚀", Hye = "👨‍🚀", Vye = "👩‍⚖", Uye = "👨‍⚖", Gye = "🤶", Wye = "🎅", Kye = "👸", Zye = "🤴", Jye = "👰", Yye = "🤵", Xye = "👼", Qye = "🤰", ewe = "🙇‍♀", twe = "🙇", nwe = "🙇", rwe = "💁", owe = "💁", iwe = "💁", swe = "💁‍♂", awe = "💁‍♂", cwe = "🙅", uwe = "🙅", lwe = "🙅", fwe = "🙅‍♂", dwe = "🙅‍♂", hwe = "🙆", pwe = "🙆‍♂", vwe = "🙋", gwe = "🙋", mwe = "🙋‍♂", _we = "🤦‍♀", bwe = "🤦‍♂", ywe = "🤷‍♀", wwe = "🤷‍♂", kwe = "🙎", Swe = "🙎", xwe = "🙎‍♂", $we = "🙍", Ewe = "🙍", Cwe = "🙍‍♂", Iwe = "💇", Twe = "💇", Awe = "💇‍♂", Owe = "💆", Dwe = "💆", Pwe = "💆‍♂", Fwe = "🕴", Rwe = "💃", Nwe = "🕺", Mwe = "👯", Lwe = "👯", qwe = "👯‍♂", jwe = "🚶‍♀", Bwe = "🚶", zwe = "🚶", Hwe = "🏃‍♀", Vwe = "🏃", Uwe = "🏃", Gwe = "🏃", Wwe = "👫", Kwe = "👭", Zwe = "👬", Jwe = "💑", Ywe = "💑", Xwe = "👩‍❤️‍👩", Qwe = "👨‍❤️‍👨", eke = "💏", tke = "👩‍❤️‍💋‍👩", nke = "👨‍❤️‍💋‍👨", rke = "👪", oke = "👪", ike = "👨‍👩‍👧", ske = "👨‍👩‍👧‍👦", ake = "👨‍👩‍👦‍👦", cke = "👨‍👩‍👧‍👧", uke = "👩‍👩‍👦", lke = "👩‍👩‍👧", fke = "👩‍👩‍👧‍👦", dke = "👩‍👩‍👦‍👦", hke = "👩‍👩‍👧‍👧", pke = "👨‍👨‍👦", vke = "👨‍👨‍👧", gke = "👨‍👨‍👧‍👦", mke = "👨‍👨‍👦‍👦", _ke = "👨‍👨‍👧‍👧", bke = "👩‍👦", yke = "👩‍👧", wke = "👩‍👧‍👦", kke = "👩‍👦‍👦", Ske = "👩‍👧‍👧", xke = "👨‍👦", $ke = "👨‍👧", Eke = "👨‍👧‍👦", Cke = "👨‍👦‍👦", Ike = "👨‍👧‍👧", Tke = "👚", Ake = "👕", Oke = "👕", Dke = "👖", Pke = "👔", Fke = "👗", Rke = "👙", Nke = "👘", Mke = "👠", Lke = "👡", qke = "👢", jke = "👞", Bke = "👞", zke = "👟", Hke = "👒", Vke = "🎩", Uke = "🎓", Gke = "👑", Wke = "⛑", Kke = "🎒", Zke = "👝", Jke = "👛", Yke = "👜", Xke = "💼", Qke = "👓", e1e = "🕶", t1e = "🌂", n1e = "☂️", r1e = "🐶", o1e = "🐱", i1e = "🐭", s1e = "🐹", a1e = "🐰", c1e = "🦊", u1e = "🐻", l1e = "🐼", f1e = "🐨", d1e = "🐯", h1e = "🦁", p1e = "🐮", v1e = "🐷", g1e = "🐽", m1e = "🐸", _1e = "🐵", b1e = "🙈", y1e = "🙉", w1e = "🙊", k1e = "🐒", S1e = "🐔", x1e = "🐧", $1e = "🐦", E1e = "🐤", C1e = "🐣", I1e = "🐥", T1e = "🦆", A1e = "🦅", O1e = "🦉", D1e = "🦇", P1e = "🐺", F1e = "🐗", R1e = "🐴", N1e = "🦄", M1e = "🐝", L1e = "🐝", q1e = "🐛", j1e = "🦋", B1e = "🐌", z1e = "🐚", H1e = "🐞", V1e = "🐜", U1e = "🕷", G1e = "🕸", W1e = "🐢", K1e = "🐍", Z1e = "🦎", J1e = "🦂", Y1e = "🦀", X1e = "🦑", Q1e = "🐙", eSe = "🦐", tSe = "🐠", nSe = "🐟", rSe = "🐡", oSe = "🐬", iSe = "🐬", sSe = "🦈", aSe = "🐳", cSe = "🐋", uSe = "🐊", lSe = "🐆", fSe = "🐅", dSe = "🐃", hSe = "🐂", pSe = "🐄", vSe = "🦌", gSe = "🐪", mSe = "🐫", _Se = "🐘", bSe = "🦏", ySe = "🦍", wSe = "🐎", kSe = "🐖", SSe = "🐐", xSe = "🐏", $Se = "🐑", ESe = "🐕", CSe = "🐩", ISe = "🐈", TSe = "🐓", ASe = "🦃", OSe = "🕊", DSe = "🐇", PSe = "🐁", FSe = "🐀", RSe = "🐿", NSe = "🐾", MSe = "🐾", LSe = "🐉", qSe = "🐲", jSe = "🌵", BSe = "🎄", zSe = "🌲", HSe = "🌳", VSe = "🌴", USe = "🌱", GSe = "🌿", WSe = "☘️", KSe = "🍀", ZSe = "🎍", JSe = "🎋", YSe = "🍃", XSe = "🍂", QSe = "🍁", exe = "🍄", txe = "🌾", nxe = "💐", rxe = "🌷", oxe = "🌹", ixe = "🥀", sxe = "🌻", axe = "🌼", cxe = "🌸", uxe = "🌺", lxe = "🌎", fxe = "🌍", dxe = "🌏", hxe = "🌕", pxe = "🌖", vxe = "🌗", gxe = "🌘", mxe = "🌑", _xe = "🌒", bxe = "🌓", yxe = "🌔", wxe = "🌔", kxe = "🌚", Sxe = "🌝", xxe = "🌞", $xe = "🌛", Exe = "🌜", Cxe = "🌙", Ixe = "💫", Txe = "⭐️", Axe = "🌟", Oxe = "✨", Dxe = "⚡️", Pxe = "🔥", Fxe = "💥", Rxe = "💥", Nxe = "☄", Mxe = "☀️", Lxe = "🌤", qxe = "⛅️", jxe = "🌥", Bxe = "🌦", zxe = "🌈", Hxe = "☁️", Vxe = "🌧", Uxe = "⛈", Gxe = "🌩", Wxe = "🌨", Kxe = "☃️", Zxe = "⛄️", Jxe = "❄️", Yxe = "🌬", Xxe = "💨", Qxe = "🌪", e$e = "🌫", t$e = "🌊", n$e = "💧", r$e = "💦", o$e = "☔️", i$e = "🍏", s$e = "🍎", a$e = "🍐", c$e = "🍊", u$e = "🍊", l$e = "🍊", f$e = "🍋", d$e = "🍌", h$e = "🍉", p$e = "🍇", v$e = "🍓", g$e = "🍈", m$e = "🍒", _$e = "🍑", b$e = "🍍", y$e = "🥝", w$e = "🥑", k$e = "🍅", S$e = "🍆", x$e = "🥒", $$e = "🥕", E$e = "🌽", C$e = "🌶", I$e = "🥔", T$e = "🍠", A$e = "🌰", O$e = "🥜", D$e = "🍯", P$e = "🥐", F$e = "🍞", R$e = "🥖", N$e = "🧀", M$e = "🥚", L$e = "🍳", q$e = "🥓", j$e = "🥞", B$e = "🍤", z$e = "🍗", H$e = "🍖", V$e = "🍕", U$e = "🌭", G$e = "🍔", W$e = "🍟", K$e = "🥙", Z$e = "🌮", J$e = "🌯", Y$e = "🥗", X$e = "🥘", Q$e = "🍝", eEe = "🍜", tEe = "🍲", nEe = "🍥", rEe = "🍣", oEe = "🍱", iEe = "🍛", sEe = "🍚", aEe = "🍙", cEe = "🍘", uEe = "🍢", lEe = "🍡", fEe = "🍧", dEe = "🍨", hEe = "🍦", pEe = "🍰", vEe = "🎂", gEe = "🍮", mEe = "🍭", _Ee = "🍬", bEe = "🍫", yEe = "🍿", wEe = "🍩", kEe = "🍪", SEe = "🥛", xEe = "🍼", $Ee = "☕️", EEe = "🍵", CEe = "🍶", IEe = "🍺", TEe = "🍻", AEe = "🥂", OEe = "🍷", DEe = "🥃", PEe = "🍸", FEe = "🍹", REe = "🍾", NEe = "🥄", MEe = "🍴", LEe = "🍽", qEe = "⚽️", jEe = "🏀", BEe = "🏈", zEe = "⚾️", HEe = "🎾", VEe = "🏐", UEe = "🏉", GEe = "🏓", WEe = "🏸", KEe = "🥅", ZEe = "🏒", JEe = "🏑", YEe = "🏏", XEe = "⛳️", QEe = "🏹", eCe = "🎣", tCe = "🥊", nCe = "🥋", rCe = "⛸", oCe = "🎿", iCe = "⛷", sCe = "🏂", aCe = "🏋️‍♀️", cCe = "🏋", uCe = "🤺", lCe = "🤼‍♀", fCe = "🤼‍♂", dCe = "🤸‍♀", hCe = "🤸‍♂", pCe = "⛹️‍♀️", vCe = "⛹", gCe = "🤾‍♀", mCe = "🤾‍♂", _Ce = "🏌️‍♀️", bCe = "🏌", yCe = "🏄‍♀", wCe = "🏄", kCe = "🏄", SCe = "🏊‍♀", xCe = "🏊", $Ce = "🏊", ECe = "🤽‍♀", CCe = "🤽‍♂", ICe = "🚣‍♀", TCe = "🚣", ACe = "🚣", OCe = "🏇", DCe = "🚴‍♀", PCe = "🚴", FCe = "🚴", RCe = "🚵‍♀", NCe = "🚵", MCe = "🚵", LCe = "🎽", qCe = "🏅", jCe = "🎖", BCe = "🏆", zCe = "🏵", HCe = "🎗", VCe = "🎫", UCe = "🎟", GCe = "🎪", WCe = "🤹‍♀", KCe = "🤹‍♂", ZCe = "🎭", JCe = "🎨", YCe = "🎬", XCe = "🎤", QCe = "🎧", e2e = "🎼", t2e = "🎹", n2e = "🥁", r2e = "🎷", o2e = "🎺", i2e = "🎸", s2e = "🎻", a2e = "🎲", c2e = "🎯", u2e = "🎳", l2e = "🎮", f2e = "🎰", d2e = "🚗", h2e = "🚗", p2e = "🚕", v2e = "🚙", g2e = "🚌", m2e = "🚎", _2e = "🏎", b2e = "🚓", y2e = "🚑", w2e = "🚒", k2e = "🚐", S2e = "🚚", x2e = "🚛", $2e = "🚜", E2e = "🛴", C2e = "🚲", I2e = "🛵", T2e = "🏍", A2e = "🚨", O2e = "🚔", D2e = "🚍", P2e = "🚘", F2e = "🚖", R2e = "🚡", N2e = "🚠", M2e = "🚟", L2e = "🚃", q2e = "🚋", j2e = "🚞", B2e = "🚝", z2e = "🚄", H2e = "🚅", V2e = "🚈", U2e = "🚂", G2e = "🚆", W2e = "🚇", K2e = "🚊", Z2e = "🚉", J2e = "🚁", Y2e = "🛩", X2e = "✈️", Q2e = "🛫", eIe = "🛬", tIe = "🚀", nIe = "🛰", rIe = "💺", oIe = "🛶", iIe = "⛵️", sIe = "⛵️", aIe = "🛥", cIe = "🚤", uIe = "🛳", lIe = "⛴", fIe = "🚢", dIe = "⚓️", hIe = "🚧", pIe = "⛽️", vIe = "🚏", gIe = "🚦", mIe = "🚥", _Ie = "🗺", bIe = "🗿", yIe = "🗽", wIe = "⛲️", kIe = "🗼", SIe = "🏰", xIe = "🏯", $Ie = "🏟", EIe = "🎡", CIe = "🎢", IIe = "🎠", TIe = "⛱", AIe = "🏖", OIe = "🏝", DIe = "⛰", PIe = "🏔", FIe = "🗻", RIe = "🌋", NIe = "🏜", MIe = "🏕", LIe = "⛺️", qIe = "🛤", jIe = "🛣", BIe = "🏗", zIe = "🏭", HIe = "🏠", VIe = "🏡", UIe = "🏘", GIe = "🏚", WIe = "🏢", KIe = "🏬", ZIe = "🏣", JIe = "🏤", YIe = "🏥", XIe = "🏦", QIe = "🏨", eTe = "🏪", tTe = "🏫", nTe = "🏩", rTe = "💒", oTe = "🏛", iTe = "⛪️", sTe = "🕌", aTe = "🕍", cTe = "🕋", uTe = "⛩", lTe = "🗾", fTe = "🎑", dTe = "🏞", hTe = "🌅", pTe = "🌄", vTe = "🌠", gTe = "🎇", mTe = "🎆", _Te = "🌇", bTe = "🌆", yTe = "🏙", wTe = "🌃", kTe = "🌌", STe = "🌉", xTe = "🌁", $Te = "⌚️", ETe = "📱", CTe = "📲", ITe = "💻", TTe = "⌨️", ATe = "🖥", OTe = "🖨", DTe = "🖱", PTe = "🖲", FTe = "🕹", RTe = "🗜", NTe = "💽", MTe = "💾", LTe = "💿", qTe = "📀", jTe = "📼", BTe = "📷", zTe = "📸", HTe = "📹", VTe = "🎥", UTe = "📽", GTe = "🎞", WTe = "📞", KTe = "☎️", ZTe = "☎️", JTe = "📟", YTe = "📠", XTe = "📺", QTe = "📻", eAe = "🎙", tAe = "🎚", nAe = "🎛", rAe = "⏱", oAe = "⏲", iAe = "⏰", sAe = "🕰", aAe = "⌛️", cAe = "⏳", uAe = "📡", lAe = "🔋", fAe = "🔌", dAe = "💡", hAe = "🔦", pAe = "🕯", vAe = "🗑", gAe = "🛢", mAe = "💸", _Ae = "💵", bAe = "💴", yAe = "💶", wAe = "💷", kAe = "💰", SAe = "💳", xAe = "💎", $Ae = "⚖️", EAe = "🔧", CAe = "🔨", IAe = "⚒", TAe = "🛠", AAe = "⛏", OAe = "🔩", DAe = "⚙️", PAe = "⛓", FAe = "🔫", RAe = "💣", NAe = "🔪", MAe = "🔪", LAe = "🗡", qAe = "⚔️", jAe = "🛡", BAe = "🚬", zAe = "⚰️", HAe = "⚱️", VAe = "🏺", UAe = "🔮", GAe = "📿", WAe = "💈", KAe = "⚗️", ZAe = "🔭", JAe = "🔬", YAe = "🕳", XAe = "💊", QAe = "💉", eOe = "🌡", tOe = "🚽", nOe = "🚰", rOe = "🚿", oOe = "🛁", iOe = "🛀", sOe = "🛎", aOe = "🔑", cOe = "🗝", uOe = "🚪", lOe = "🛋", fOe = "🛏", dOe = "🛌", hOe = "🖼", pOe = "🛍", vOe = "🛒", gOe = "🎁", mOe = "🎈", _Oe = "🎏", bOe = "🎀", yOe = "🎊", wOe = "🎉", kOe = "🎎", SOe = "🏮", xOe = "🏮", $Oe = "🎐", EOe = "✉️", COe = "✉️", IOe = "📩", TOe = "📨", AOe = "💌", OOe = "📥", DOe = "📤", POe = "🏷", FOe = "📪", ROe = "📫", NOe = "📬", MOe = "📭", LOe = "📮", qOe = "📯", jOe = "📜", BOe = "📃", zOe = "📄", HOe = "📑", VOe = "📊", UOe = "📈", GOe = "📉", WOe = "🗒", KOe = "🗓", ZOe = "📆", JOe = "📅", YOe = "📇", XOe = "🗃", QOe = "🗳", eDe = "🗄", tDe = "📋", nDe = "📁", rDe = "📂", oDe = "🗂", iDe = "🗞", sDe = "📰", aDe = "📓", cDe = "📔", uDe = "📒", lDe = "📕", fDe = "📗", dDe = "📘", hDe = "📙", pDe = "📚", vDe = "📖", gDe = "📖", mDe = "🔖", _De = "🔗", bDe = "📎", yDe = "🖇", wDe = "📐", kDe = "📏", SDe = "📌", xDe = "📍", $De = "✂️", EDe = "🖊", CDe = "🖋", IDe = "✒️", TDe = "🖌", ADe = "🖍", ODe = "📝", DDe = "📝", PDe = "✏️", FDe = "🔍", RDe = "🔎", NDe = "🔏", MDe = "🔐", LDe = "🔒", qDe = "🔓", jDe = "❤️", BDe = "💛", zDe = "💚", HDe = "💙", VDe = "💜", UDe = "🖤", GDe = "💔", WDe = "❣️", KDe = "💕", ZDe = "💞", JDe = "💓", YDe = "💗", XDe = "💖", QDe = "💘", ePe = "💝", tPe = "💟", nPe = "☮️", rPe = "✝️", oPe = "☪️", iPe = "🕉", sPe = "☸️", aPe = "✡️", cPe = "🔯", uPe = "🕎", lPe = "☯️", fPe = "☦️", dPe = "🛐", hPe = "⛎", pPe = "♈️", vPe = "♉️", gPe = "♊️", mPe = "♋️", _Pe = "♌️", bPe = "♍️", yPe = "♎️", wPe = "♏️", kPe = "♐️", SPe = "♑️", xPe = "♒️", $Pe = "♓️", EPe = "🆔", CPe = "⚛️", IPe = "🉑", TPe = "☢️", APe = "☣️", OPe = "📴", DPe = "📳", PPe = "✴️", FPe = "🆚", RPe = "💮", NPe = "🉐", MPe = "㊙️", LPe = "㊗️", qPe = "🈵", jPe = "🅰️", BPe = "🅱️", zPe = "🆎", HPe = "🆑", VPe = "🅾️", UPe = "🆘", GPe = "❌", WPe = "⭕️", KPe = "🛑", ZPe = "⛔️", JPe = "📛", YPe = "🚫", XPe = "💢", QPe = "♨️", e3e = "🚷", t3e = "🚯", n3e = "🚳", r3e = "🔞", o3e = "📵", i3e = "🚭", s3e = "❗️", a3e = "❗️", c3e = "❕", u3e = "❓", l3e = "❔", f3e = "‼️", d3e = "⁉️", h3e = "🔅", p3e = "🔆", v3e = "〽️", g3e = "⚠️", m3e = "🚸", _3e = "🔱", b3e = "⚜️", y3e = "🔰", w3e = "♻️", k3e = "✅", S3e = "💹", x3e = "❇️", $3e = "✳️", E3e = "❎", C3e = "🌐", I3e = "💠", T3e = "Ⓜ️", A3e = "🌀", O3e = "💤", D3e = "🏧", P3e = "🚾", F3e = "♿️", R3e = "🅿️", N3e = "🈂️", M3e = "🛂", L3e = "🛃", q3e = "🛄", j3e = "🛅", B3e = "🚹", z3e = "🚺", H3e = "🚼", V3e = "🚻", U3e = "🚮", G3e = "🎦", W3e = "📶", K3e = "🈁", Z3e = "🔣", J3e = "ℹ️", Y3e = "🔤", X3e = "🔡", Q3e = "🔠", eFe = "🆖", tFe = "🆗", nFe = "🆙", rFe = "🆒", oFe = "🆓", iFe = "0️⃣", sFe = "1️⃣", aFe = "2️⃣", cFe = "3️⃣", uFe = "4️⃣", lFe = "5️⃣", fFe = "6️⃣", dFe = "7️⃣", hFe = "8️⃣", pFe = "9️⃣", vFe = "🔟", gFe = "#️⃣", mFe = "*️⃣", _Fe = "▶️", bFe = "⏸", yFe = "⏯", wFe = "⏹", kFe = "⏺", SFe = "⏭", xFe = "⏮", $Fe = "⏩", EFe = "⏪", CFe = "⏫", IFe = "⏬", TFe = "◀️", AFe = "🔼", OFe = "🔽", DFe = "➡️", PFe = "⬅️", FFe = "⬆️", RFe = "⬇️", NFe = "↗️", MFe = "↘️", LFe = "↙️", qFe = "↖️", jFe = "↕️", BFe = "↔️", zFe = "↪️", HFe = "↩️", VFe = "⤴️", UFe = "⤵️", GFe = "🔀", WFe = "🔁", KFe = "🔂", ZFe = "🔄", JFe = "🔃", YFe = "🎵", XFe = "🎶", QFe = "➕", eRe = "➖", tRe = "➗", nRe = "✖️", rRe = "💲", oRe = "💱", iRe = "™️", sRe = "©️", aRe = "®️", cRe = "〰️", uRe = "➰", lRe = "➿", fRe = "🔚", dRe = "🔙", hRe = "🔛", pRe = "🔝", vRe = "🔜", gRe = "✔️", mRe = "☑️", _Re = "🔘", bRe = "⚪️", yRe = "⚫️", wRe = "🔴", kRe = "🔵", SRe = "🔺", xRe = "🔻", $Re = "🔸", ERe = "🔹", CRe = "🔶", IRe = "🔷", TRe = "🔳", ARe = "🔲", ORe = "▪️", DRe = "▫️", PRe = "◾️", FRe = "◽️", RRe = "◼️", NRe = "◻️", MRe = "⬛️", LRe = "⬜️", qRe = "🔈", jRe = "🔇", BRe = "🔉", zRe = "🔊", HRe = "🔔", VRe = "🔕", URe = "📣", GRe = "📢", WRe = "👁‍🗨", KRe = "💬", ZRe = "💭", JRe = "🗯", YRe = "♠️", XRe = "♣️", QRe = "♥️", eNe = "♦️", tNe = "🃏", nNe = "🎴", rNe = "🀄️", oNe = "🕐", iNe = "🕑", sNe = "🕒", aNe = "🕓", cNe = "🕔", uNe = "🕕", lNe = "🕖", fNe = "🕗", dNe = "🕘", hNe = "🕙", pNe = "🕚", vNe = "🕛", gNe = "🕜", mNe = "🕝", _Ne = "🕞", bNe = "🕟", yNe = "🕠", wNe = "🕡", kNe = "🕢", SNe = "🕣", xNe = "🕤", $Ne = "🕥", ENe = "🕦", CNe = "🕧", INe = "🏳️", TNe = "🏴", ANe = "🏁", ONe = "🚩", DNe = "🏳️‍🌈", PNe = "🇦🇫", FNe = "🇦🇽", RNe = "🇦🇱", NNe = "🇩🇿", MNe = "🇦🇸", LNe = "🇦🇩", qNe = "🇦🇴", jNe = "🇦🇮", BNe = "🇦🇶", zNe = "🇦🇬", HNe = "🇦🇷", VNe = "🇦🇲", UNe = "🇦🇼", GNe = "🇦🇺", WNe = "🇦🇹", KNe = "🇦🇿", ZNe = "🇧🇸", JNe = "🇧🇭", YNe = "🇧🇩", XNe = "🇧🇧", QNe = "🇧🇾", eMe = "🇧🇪", tMe = "🇧🇿", nMe = "🇧🇯", rMe = "🇧🇲", oMe = "🇧🇹", iMe = "🇧🇴", sMe = "🇧🇶", aMe = "🇧🇦", cMe = "🇧🇼", uMe = "🇧🇷", lMe = "🇮🇴", fMe = "🇻🇬", dMe = "🇧🇳", hMe = "🇧🇬", pMe = "🇧🇫", vMe = "🇧🇮", gMe = "🇨🇻", mMe = "🇰🇭", _Me = "🇨🇲", bMe = "🇨🇦", yMe = "🇮🇨", wMe = "🇰🇾", kMe = "🇨🇫", SMe = "🇹🇩", xMe = "🇨🇱", $Me = "🇨🇳", EMe = "🇨🇽", CMe = "🇨🇨", IMe = "🇨🇴", TMe = "🇰🇲", AMe = "🇨🇬", OMe = "🇨🇩", DMe = "🇨🇰", PMe = "🇨🇷", FMe = "🇨🇮", RMe = "🇭🇷", NMe = "🇨🇺", MMe = "🇨🇼", LMe = "🇨🇾", qMe = "🇨🇿", jMe = "🇩🇰", BMe = "🇩🇯", zMe = "🇩🇲", HMe = "🇩🇴", VMe = "🇪🇨", UMe = "🇪🇬", GMe = "🇸🇻", WMe = "🇬🇶", KMe = "🇪🇷", ZMe = "🇪🇪", JMe = "🇪🇹", YMe = "🇪🇺", XMe = "🇪🇺", QMe = "🇫🇰", e8e = "🇫🇴", t8e = "🇫🇯", n8e = "🇫🇮", r8e = "🇫🇷", o8e = "🇬🇫", i8e = "🇵🇫", s8e = "🇹🇫", a8e = "🇬🇦", c8e = "🇬🇲", u8e = "🇬🇪", l8e = "🇩🇪", f8e = "🇬🇭", d8e = "🇬🇮", h8e = "🇬🇷", p8e = "🇬🇱", v8e = "🇬🇩", g8e = "🇬🇵", m8e = "🇬🇺", _8e = "🇬🇹", b8e = "🇬🇬", y8e = "🇬🇳", w8e = "🇬🇼", k8e = "🇬🇾", S8e = "🇭🇹", x8e = "🇭🇳", $8e = "🇭🇰", E8e = "🇭🇺", C8e = "🇮🇸", I8e = "🇮🇳", T8e = "🇮🇩", A8e = "🇮🇷", O8e = "🇮🇶", D8e = "🇮🇪", P8e = "🇮🇲", F8e = "🇮🇱", R8e = "🇮🇹", N8e = "🇯🇲", M8e = "🇯🇵", L8e = "🎌", q8e = "🇯🇪", j8e = "🇯🇴", B8e = "🇰🇿", z8e = "🇰🇪", H8e = "🇰🇮", V8e = "🇽🇰", U8e = "🇰🇼", G8e = "🇰🇬", W8e = "🇱🇦", K8e = "🇱🇻", Z8e = "🇱🇧", J8e = "🇱🇸", Y8e = "🇱🇷", X8e = "🇱🇾", Q8e = "🇱🇮", eLe = "🇱🇹", tLe = "🇱🇺", nLe = "🇲🇴", rLe = "🇲🇰", oLe = "🇲🇬", iLe = "🇲🇼", sLe = "🇲🇾", aLe = "🇲🇻", cLe = "🇲🇱", uLe = "🇲🇹", lLe = "🇲🇭", fLe = "🇲🇶", dLe = "🇲🇷", hLe = "🇲🇺", pLe = "🇾🇹", vLe = "🇲🇽", gLe = "🇫🇲", mLe = "🇲🇩", _Le = "🇲🇨", bLe = "🇲🇳", yLe = "🇲🇪", wLe = "🇲🇸", kLe = "🇲🇦", SLe = "🇲🇿", xLe = "🇲🇲", $Le = "🇳🇦", ELe = "🇳🇷", CLe = "🇳🇵", ILe = "🇳🇱", TLe = "🇳🇨", ALe = "🇳🇿", OLe = "🇳🇮", DLe = "🇳🇪", PLe = "🇳🇬", FLe = "🇳🇺", RLe = "🇳🇫", NLe = "🇲🇵", MLe = "🇰🇵", LLe = "🇳🇴", qLe = "🇴🇲", jLe = "🇵🇰", BLe = "🇵🇼", zLe = "🇵🇸", HLe = "🇵🇦", VLe = "🇵🇬", ULe = "🇵🇾", GLe = "🇵🇪", WLe = "🇵🇭", KLe = "🇵🇳", ZLe = "🇵🇱", JLe = "🇵🇹", YLe = "🇵🇷", XLe = "🇶🇦", QLe = "🇷🇪", e6e = "🇷🇴", t6e = "🇷🇺", n6e = "🇷🇼", r6e = "🇧🇱", o6e = "🇸🇭", i6e = "🇰🇳", s6e = "🇱🇨", a6e = "🇵🇲", c6e = "🇻🇨", u6e = "🇼🇸", l6e = "🇸🇲", f6e = "🇸🇹", d6e = "🇸🇦", h6e = "🇸🇳", p6e = "🇷🇸", v6e = "🇸🇨", g6e = "🇸🇱", m6e = "🇸🇬", _6e = "🇸🇽", b6e = "🇸🇰", y6e = "🇸🇮", w6e = "🇸🇧", k6e = "🇸🇴", S6e = "🇿🇦", x6e = "🇬🇸", $6e = "🇰🇷", E6e = "🇸🇸", C6e = "🇪🇸", I6e = "🇱🇰", T6e = "🇸🇩", A6e = "🇸🇷", O6e = "🇸🇿", D6e = "🇸🇪", P6e = "🇨🇭", F6e = "🇸🇾", R6e = "🇹🇼", N6e = "🇹🇯", M6e = "🇹🇿", L6e = "🇹🇭", q6e = "🇹🇱", j6e = "🇹🇬", B6e = "🇹🇰", z6e = "🇹🇴", H6e = "🇹🇹", V6e = "🇹🇳", U6e = "🇹🇷", G6e = "🇹🇲", W6e = "🇹🇨", K6e = "🇹🇻", Z6e = "🇺🇬", J6e = "🇺🇦", Y6e = "🇦🇪", X6e = "🇬🇧", Q6e = "🇬🇧", eqe = "🇺🇸", tqe = "🇻🇮", nqe = "🇺🇾", rqe = "🇺🇿", oqe = "🇻🇺", iqe = "🇻🇦", sqe = "🇻🇪", aqe = "🇻🇳", cqe = "🇼🇫", uqe = "🇪🇭", lqe = "🇾🇪", fqe = "🇿🇲", dqe = "🇿🇼", hqe = {
  100: "💯",
  1234: "🔢",
  grinning: n_e,
  smiley: r_e,
  smile: o_e,
  grin: i_e,
  laughing: s_e,
  satisfied: a_e,
  sweat_smile: c_e,
  joy: u_e,
  rofl: l_e,
  relaxed: f_e,
  blush: d_e,
  innocent: h_e,
  slightly_smiling_face: p_e,
  upside_down_face: v_e,
  wink: g_e,
  relieved: m_e,
  heart_eyes: b_e,
  kissing_heart: y_e,
  kissing: w_e,
  kissing_smiling_eyes: k_e,
  kissing_closed_eyes: S_e,
  yum: x_e,
  stuck_out_tongue_winking_eye: $_e,
  stuck_out_tongue_closed_eyes: E_e,
  stuck_out_tongue: C_e,
  money_mouth_face: I_e,
  hugs: T_e,
  nerd_face: A_e,
  sunglasses: O_e,
  clown_face: D_e,
  cowboy_hat_face: P_e,
  smirk: F_e,
  unamused: R_e,
  disappointed: N_e,
  pensive: M_e,
  worried: L_e,
  confused: q_e,
  slightly_frowning_face: j_e,
  frowning_face: B_e,
  persevere: z_e,
  confounded: H_e,
  tired_face: V_e,
  weary: U_e,
  triumph: G_e,
  angry: W_e,
  rage: K_e,
  pout: Z_e,
  no_mouth: J_e,
  neutral_face: Y_e,
  expressionless: X_e,
  hushed: Q_e,
  frowning: ebe,
  anguished: tbe,
  open_mouth: nbe,
  astonished: rbe,
  dizzy_face: obe,
  flushed: ibe,
  scream: sbe,
  fearful: abe,
  cold_sweat: cbe,
  cry: ube,
  disappointed_relieved: lbe,
  drooling_face: fbe,
  sob: dbe,
  sweat: hbe,
  sleepy: pbe,
  sleeping: vbe,
  roll_eyes: gbe,
  thinking: mbe,
  lying_face: _be,
  grimacing: bbe,
  zipper_mouth_face: ybe,
  nauseated_face: wbe,
  sneezing_face: kbe,
  mask: Sbe,
  face_with_thermometer: xbe,
  face_with_head_bandage: $be,
  smiling_imp: Ebe,
  imp: Cbe,
  japanese_ogre: Ibe,
  japanese_goblin: Tbe,
  hankey: Abe,
  poop: Obe,
  shit: Dbe,
  ghost: Pbe,
  skull: Fbe,
  skull_and_crossbones: Rbe,
  alien: Nbe,
  space_invader: Mbe,
  robot: Lbe,
  jack_o_lantern: qbe,
  smiley_cat: jbe,
  smile_cat: Bbe,
  joy_cat: zbe,
  heart_eyes_cat: Hbe,
  smirk_cat: Vbe,
  kissing_cat: Ube,
  scream_cat: Gbe,
  crying_cat_face: Wbe,
  pouting_cat: Kbe,
  open_hands: Zbe,
  raised_hands: Jbe,
  clap: Ybe,
  pray: Xbe,
  handshake: Qbe,
  "+1": "👍",
  thumbsup: e0e,
  "-1": "👎",
  thumbsdown: t0e,
  fist_oncoming: n0e,
  facepunch: r0e,
  punch: o0e,
  fist_raised: i0e,
  fist: s0e,
  fist_left: a0e,
  fist_right: c0e,
  crossed_fingers: u0e,
  v: l0e,
  metal: f0e,
  ok_hand: d0e,
  point_left: h0e,
  point_right: p0e,
  point_up_2: v0e,
  point_down: g0e,
  point_up: m0e,
  hand: _0e,
  raised_hand: b0e,
  raised_back_of_hand: y0e,
  raised_hand_with_fingers_splayed: w0e,
  vulcan_salute: k0e,
  wave: S0e,
  call_me_hand: x0e,
  muscle: $0e,
  middle_finger: E0e,
  fu: C0e,
  writing_hand: I0e,
  selfie: T0e,
  nail_care: A0e,
  ring: O0e,
  lipstick: D0e,
  kiss: P0e,
  lips: F0e,
  tongue: R0e,
  ear: N0e,
  nose: M0e,
  footprints: L0e,
  eye: q0e,
  eyes: j0e,
  speaking_head: B0e,
  bust_in_silhouette: z0e,
  busts_in_silhouette: H0e,
  baby: V0e,
  boy: U0e,
  girl: G0e,
  man: W0e,
  woman: K0e,
  blonde_woman: Z0e,
  blonde_man: J0e,
  person_with_blond_hair: Y0e,
  older_man: X0e,
  older_woman: Q0e,
  man_with_gua_pi_mao: eye,
  woman_with_turban: tye,
  man_with_turban: nye,
  policewoman: rye,
  policeman: oye,
  cop: iye,
  construction_worker_woman: sye,
  construction_worker_man: aye,
  construction_worker: cye,
  guardswoman: uye,
  guardsman: lye,
  female_detective: fye,
  male_detective: dye,
  detective: hye,
  woman_health_worker: pye,
  man_health_worker: vye,
  woman_farmer: gye,
  man_farmer: mye,
  woman_cook: _ye,
  man_cook: bye,
  woman_student: yye,
  man_student: wye,
  woman_singer: kye,
  man_singer: Sye,
  woman_teacher: xye,
  man_teacher: $ye,
  woman_factory_worker: Eye,
  man_factory_worker: Cye,
  woman_technologist: Iye,
  man_technologist: Tye,
  woman_office_worker: Aye,
  man_office_worker: Oye,
  woman_mechanic: Dye,
  man_mechanic: Pye,
  woman_scientist: Fye,
  man_scientist: Rye,
  woman_artist: Nye,
  man_artist: Mye,
  woman_firefighter: Lye,
  man_firefighter: qye,
  woman_pilot: jye,
  man_pilot: Bye,
  woman_astronaut: zye,
  man_astronaut: Hye,
  woman_judge: Vye,
  man_judge: Uye,
  mrs_claus: Gye,
  santa: Wye,
  princess: Kye,
  prince: Zye,
  bride_with_veil: Jye,
  man_in_tuxedo: Yye,
  angel: Xye,
  pregnant_woman: Qye,
  bowing_woman: ewe,
  bowing_man: twe,
  bow: nwe,
  tipping_hand_woman: rwe,
  information_desk_person: owe,
  sassy_woman: iwe,
  tipping_hand_man: swe,
  sassy_man: awe,
  no_good_woman: cwe,
  no_good: uwe,
  ng_woman: lwe,
  no_good_man: fwe,
  ng_man: dwe,
  ok_woman: hwe,
  ok_man: pwe,
  raising_hand_woman: vwe,
  raising_hand: gwe,
  raising_hand_man: mwe,
  woman_facepalming: _we,
  man_facepalming: bwe,
  woman_shrugging: ywe,
  man_shrugging: wwe,
  pouting_woman: kwe,
  person_with_pouting_face: Swe,
  pouting_man: xwe,
  frowning_woman: $we,
  person_frowning: Ewe,
  frowning_man: Cwe,
  haircut_woman: Iwe,
  haircut: Twe,
  haircut_man: Awe,
  massage_woman: Owe,
  massage: Dwe,
  massage_man: Pwe,
  business_suit_levitating: Fwe,
  dancer: Rwe,
  man_dancing: Nwe,
  dancing_women: Mwe,
  dancers: Lwe,
  dancing_men: qwe,
  walking_woman: jwe,
  walking_man: Bwe,
  walking: zwe,
  running_woman: Hwe,
  running_man: Vwe,
  runner: Uwe,
  running: Gwe,
  couple: Wwe,
  two_women_holding_hands: Kwe,
  two_men_holding_hands: Zwe,
  couple_with_heart_woman_man: Jwe,
  couple_with_heart: Ywe,
  couple_with_heart_woman_woman: Xwe,
  couple_with_heart_man_man: Qwe,
  couplekiss_man_woman: eke,
  couplekiss_woman_woman: tke,
  couplekiss_man_man: nke,
  family_man_woman_boy: rke,
  family: oke,
  family_man_woman_girl: ike,
  family_man_woman_girl_boy: ske,
  family_man_woman_boy_boy: ake,
  family_man_woman_girl_girl: cke,
  family_woman_woman_boy: uke,
  family_woman_woman_girl: lke,
  family_woman_woman_girl_boy: fke,
  family_woman_woman_boy_boy: dke,
  family_woman_woman_girl_girl: hke,
  family_man_man_boy: pke,
  family_man_man_girl: vke,
  family_man_man_girl_boy: gke,
  family_man_man_boy_boy: mke,
  family_man_man_girl_girl: _ke,
  family_woman_boy: bke,
  family_woman_girl: yke,
  family_woman_girl_boy: wke,
  family_woman_boy_boy: kke,
  family_woman_girl_girl: Ske,
  family_man_boy: xke,
  family_man_girl: $ke,
  family_man_girl_boy: Eke,
  family_man_boy_boy: Cke,
  family_man_girl_girl: Ike,
  womans_clothes: Tke,
  shirt: Ake,
  tshirt: Oke,
  jeans: Dke,
  necktie: Pke,
  dress: Fke,
  bikini: Rke,
  kimono: Nke,
  high_heel: Mke,
  sandal: Lke,
  boot: qke,
  mans_shoe: jke,
  shoe: Bke,
  athletic_shoe: zke,
  womans_hat: Hke,
  tophat: Vke,
  mortar_board: Uke,
  crown: Gke,
  rescue_worker_helmet: Wke,
  school_satchel: Kke,
  pouch: Zke,
  purse: Jke,
  handbag: Yke,
  briefcase: Xke,
  eyeglasses: Qke,
  dark_sunglasses: e1e,
  closed_umbrella: t1e,
  open_umbrella: n1e,
  dog: r1e,
  cat: o1e,
  mouse: i1e,
  hamster: s1e,
  rabbit: a1e,
  fox_face: c1e,
  bear: u1e,
  panda_face: l1e,
  koala: f1e,
  tiger: d1e,
  lion: h1e,
  cow: p1e,
  pig: v1e,
  pig_nose: g1e,
  frog: m1e,
  monkey_face: _1e,
  see_no_evil: b1e,
  hear_no_evil: y1e,
  speak_no_evil: w1e,
  monkey: k1e,
  chicken: S1e,
  penguin: x1e,
  bird: $1e,
  baby_chick: E1e,
  hatching_chick: C1e,
  hatched_chick: I1e,
  duck: T1e,
  eagle: A1e,
  owl: O1e,
  bat: D1e,
  wolf: P1e,
  boar: F1e,
  horse: R1e,
  unicorn: N1e,
  bee: M1e,
  honeybee: L1e,
  bug: q1e,
  butterfly: j1e,
  snail: B1e,
  shell: z1e,
  beetle: H1e,
  ant: V1e,
  spider: U1e,
  spider_web: G1e,
  turtle: W1e,
  snake: K1e,
  lizard: Z1e,
  scorpion: J1e,
  crab: Y1e,
  squid: X1e,
  octopus: Q1e,
  shrimp: eSe,
  tropical_fish: tSe,
  fish: nSe,
  blowfish: rSe,
  dolphin: oSe,
  flipper: iSe,
  shark: sSe,
  whale: aSe,
  whale2: cSe,
  crocodile: uSe,
  leopard: lSe,
  tiger2: fSe,
  water_buffalo: dSe,
  ox: hSe,
  cow2: pSe,
  deer: vSe,
  dromedary_camel: gSe,
  camel: mSe,
  elephant: _Se,
  rhinoceros: bSe,
  gorilla: ySe,
  racehorse: wSe,
  pig2: kSe,
  goat: SSe,
  ram: xSe,
  sheep: $Se,
  dog2: ESe,
  poodle: CSe,
  cat2: ISe,
  rooster: TSe,
  turkey: ASe,
  dove: OSe,
  rabbit2: DSe,
  mouse2: PSe,
  rat: FSe,
  chipmunk: RSe,
  feet: NSe,
  paw_prints: MSe,
  dragon: LSe,
  dragon_face: qSe,
  cactus: jSe,
  christmas_tree: BSe,
  evergreen_tree: zSe,
  deciduous_tree: HSe,
  palm_tree: VSe,
  seedling: USe,
  herb: GSe,
  shamrock: WSe,
  four_leaf_clover: KSe,
  bamboo: ZSe,
  tanabata_tree: JSe,
  leaves: YSe,
  fallen_leaf: XSe,
  maple_leaf: QSe,
  mushroom: exe,
  ear_of_rice: txe,
  bouquet: nxe,
  tulip: rxe,
  rose: oxe,
  wilted_flower: ixe,
  sunflower: sxe,
  blossom: axe,
  cherry_blossom: cxe,
  hibiscus: uxe,
  earth_americas: lxe,
  earth_africa: fxe,
  earth_asia: dxe,
  full_moon: hxe,
  waning_gibbous_moon: pxe,
  last_quarter_moon: vxe,
  waning_crescent_moon: gxe,
  new_moon: mxe,
  waxing_crescent_moon: _xe,
  first_quarter_moon: bxe,
  moon: yxe,
  waxing_gibbous_moon: wxe,
  new_moon_with_face: kxe,
  full_moon_with_face: Sxe,
  sun_with_face: xxe,
  first_quarter_moon_with_face: $xe,
  last_quarter_moon_with_face: Exe,
  crescent_moon: Cxe,
  dizzy: Ixe,
  star: Txe,
  star2: Axe,
  sparkles: Oxe,
  zap: Dxe,
  fire: Pxe,
  boom: Fxe,
  collision: Rxe,
  comet: Nxe,
  sunny: Mxe,
  sun_behind_small_cloud: Lxe,
  partly_sunny: qxe,
  sun_behind_large_cloud: jxe,
  sun_behind_rain_cloud: Bxe,
  rainbow: zxe,
  cloud: Hxe,
  cloud_with_rain: Vxe,
  cloud_with_lightning_and_rain: Uxe,
  cloud_with_lightning: Gxe,
  cloud_with_snow: Wxe,
  snowman_with_snow: Kxe,
  snowman: Zxe,
  snowflake: Jxe,
  wind_face: Yxe,
  dash: Xxe,
  tornado: Qxe,
  fog: e$e,
  ocean: t$e,
  droplet: n$e,
  sweat_drops: r$e,
  umbrella: o$e,
  green_apple: i$e,
  apple: s$e,
  pear: a$e,
  tangerine: c$e,
  orange: u$e,
  mandarin: l$e,
  lemon: f$e,
  banana: d$e,
  watermelon: h$e,
  grapes: p$e,
  strawberry: v$e,
  melon: g$e,
  cherries: m$e,
  peach: _$e,
  pineapple: b$e,
  kiwi_fruit: y$e,
  avocado: w$e,
  tomato: k$e,
  eggplant: S$e,
  cucumber: x$e,
  carrot: $$e,
  corn: E$e,
  hot_pepper: C$e,
  potato: I$e,
  sweet_potato: T$e,
  chestnut: A$e,
  peanuts: O$e,
  honey_pot: D$e,
  croissant: P$e,
  bread: F$e,
  baguette_bread: R$e,
  cheese: N$e,
  egg: M$e,
  fried_egg: L$e,
  bacon: q$e,
  pancakes: j$e,
  fried_shrimp: B$e,
  poultry_leg: z$e,
  meat_on_bone: H$e,
  pizza: V$e,
  hotdog: U$e,
  hamburger: G$e,
  fries: W$e,
  stuffed_flatbread: K$e,
  taco: Z$e,
  burrito: J$e,
  green_salad: Y$e,
  shallow_pan_of_food: X$e,
  spaghetti: Q$e,
  ramen: eEe,
  stew: tEe,
  fish_cake: nEe,
  sushi: rEe,
  bento: oEe,
  curry: iEe,
  rice: sEe,
  rice_ball: aEe,
  rice_cracker: cEe,
  oden: uEe,
  dango: lEe,
  shaved_ice: fEe,
  ice_cream: dEe,
  icecream: hEe,
  cake: pEe,
  birthday: vEe,
  custard: gEe,
  lollipop: mEe,
  candy: _Ee,
  chocolate_bar: bEe,
  popcorn: yEe,
  doughnut: wEe,
  cookie: kEe,
  milk_glass: SEe,
  baby_bottle: xEe,
  coffee: $Ee,
  tea: EEe,
  sake: CEe,
  beer: IEe,
  beers: TEe,
  clinking_glasses: AEe,
  wine_glass: OEe,
  tumbler_glass: DEe,
  cocktail: PEe,
  tropical_drink: FEe,
  champagne: REe,
  spoon: NEe,
  fork_and_knife: MEe,
  plate_with_cutlery: LEe,
  soccer: qEe,
  basketball: jEe,
  football: BEe,
  baseball: zEe,
  tennis: HEe,
  volleyball: VEe,
  rugby_football: UEe,
  "8ball": "🎱",
  ping_pong: GEe,
  badminton: WEe,
  goal_net: KEe,
  ice_hockey: ZEe,
  field_hockey: JEe,
  cricket: YEe,
  golf: XEe,
  bow_and_arrow: QEe,
  fishing_pole_and_fish: eCe,
  boxing_glove: tCe,
  martial_arts_uniform: nCe,
  ice_skate: rCe,
  ski: oCe,
  skier: iCe,
  snowboarder: sCe,
  weight_lifting_woman: aCe,
  weight_lifting_man: cCe,
  person_fencing: uCe,
  women_wrestling: lCe,
  men_wrestling: fCe,
  woman_cartwheeling: dCe,
  man_cartwheeling: hCe,
  basketball_woman: pCe,
  basketball_man: vCe,
  woman_playing_handball: gCe,
  man_playing_handball: mCe,
  golfing_woman: _Ce,
  golfing_man: bCe,
  surfing_woman: yCe,
  surfing_man: wCe,
  surfer: kCe,
  swimming_woman: SCe,
  swimming_man: xCe,
  swimmer: $Ce,
  woman_playing_water_polo: ECe,
  man_playing_water_polo: CCe,
  rowing_woman: ICe,
  rowing_man: TCe,
  rowboat: ACe,
  horse_racing: OCe,
  biking_woman: DCe,
  biking_man: PCe,
  bicyclist: FCe,
  mountain_biking_woman: RCe,
  mountain_biking_man: NCe,
  mountain_bicyclist: MCe,
  running_shirt_with_sash: LCe,
  medal_sports: qCe,
  medal_military: jCe,
  "1st_place_medal": "🥇",
  "2nd_place_medal": "🥈",
  "3rd_place_medal": "🥉",
  trophy: BCe,
  rosette: zCe,
  reminder_ribbon: HCe,
  ticket: VCe,
  tickets: UCe,
  circus_tent: GCe,
  woman_juggling: WCe,
  man_juggling: KCe,
  performing_arts: ZCe,
  art: JCe,
  clapper: YCe,
  microphone: XCe,
  headphones: QCe,
  musical_score: e2e,
  musical_keyboard: t2e,
  drum: n2e,
  saxophone: r2e,
  trumpet: o2e,
  guitar: i2e,
  violin: s2e,
  game_die: a2e,
  dart: c2e,
  bowling: u2e,
  video_game: l2e,
  slot_machine: f2e,
  car: d2e,
  red_car: h2e,
  taxi: p2e,
  blue_car: v2e,
  bus: g2e,
  trolleybus: m2e,
  racing_car: _2e,
  police_car: b2e,
  ambulance: y2e,
  fire_engine: w2e,
  minibus: k2e,
  truck: S2e,
  articulated_lorry: x2e,
  tractor: $2e,
  kick_scooter: E2e,
  bike: C2e,
  motor_scooter: I2e,
  motorcycle: T2e,
  rotating_light: A2e,
  oncoming_police_car: O2e,
  oncoming_bus: D2e,
  oncoming_automobile: P2e,
  oncoming_taxi: F2e,
  aerial_tramway: R2e,
  mountain_cableway: N2e,
  suspension_railway: M2e,
  railway_car: L2e,
  train: q2e,
  mountain_railway: j2e,
  monorail: B2e,
  bullettrain_side: z2e,
  bullettrain_front: H2e,
  light_rail: V2e,
  steam_locomotive: U2e,
  train2: G2e,
  metro: W2e,
  tram: K2e,
  station: Z2e,
  helicopter: J2e,
  small_airplane: Y2e,
  airplane: X2e,
  flight_departure: Q2e,
  flight_arrival: eIe,
  rocket: tIe,
  artificial_satellite: nIe,
  seat: rIe,
  canoe: oIe,
  boat: iIe,
  sailboat: sIe,
  motor_boat: aIe,
  speedboat: cIe,
  passenger_ship: uIe,
  ferry: lIe,
  ship: fIe,
  anchor: dIe,
  construction: hIe,
  fuelpump: pIe,
  busstop: vIe,
  vertical_traffic_light: gIe,
  traffic_light: mIe,
  world_map: _Ie,
  moyai: bIe,
  statue_of_liberty: yIe,
  fountain: wIe,
  tokyo_tower: kIe,
  european_castle: SIe,
  japanese_castle: xIe,
  stadium: $Ie,
  ferris_wheel: EIe,
  roller_coaster: CIe,
  carousel_horse: IIe,
  parasol_on_ground: TIe,
  beach_umbrella: AIe,
  desert_island: OIe,
  mountain: DIe,
  mountain_snow: PIe,
  mount_fuji: FIe,
  volcano: RIe,
  desert: NIe,
  camping: MIe,
  tent: LIe,
  railway_track: qIe,
  motorway: jIe,
  building_construction: BIe,
  factory: zIe,
  house: HIe,
  house_with_garden: VIe,
  houses: UIe,
  derelict_house: GIe,
  office: WIe,
  department_store: KIe,
  post_office: ZIe,
  european_post_office: JIe,
  hospital: YIe,
  bank: XIe,
  hotel: QIe,
  convenience_store: eTe,
  school: tTe,
  love_hotel: nTe,
  wedding: rTe,
  classical_building: oTe,
  church: iTe,
  mosque: sTe,
  synagogue: aTe,
  kaaba: cTe,
  shinto_shrine: uTe,
  japan: lTe,
  rice_scene: fTe,
  national_park: dTe,
  sunrise: hTe,
  sunrise_over_mountains: pTe,
  stars: vTe,
  sparkler: gTe,
  fireworks: mTe,
  city_sunrise: _Te,
  city_sunset: bTe,
  cityscape: yTe,
  night_with_stars: wTe,
  milky_way: kTe,
  bridge_at_night: STe,
  foggy: xTe,
  watch: $Te,
  iphone: ETe,
  calling: CTe,
  computer: ITe,
  keyboard: TTe,
  desktop_computer: ATe,
  printer: OTe,
  computer_mouse: DTe,
  trackball: PTe,
  joystick: FTe,
  clamp: RTe,
  minidisc: NTe,
  floppy_disk: MTe,
  cd: LTe,
  dvd: qTe,
  vhs: jTe,
  camera: BTe,
  camera_flash: zTe,
  video_camera: HTe,
  movie_camera: VTe,
  film_projector: UTe,
  film_strip: GTe,
  telephone_receiver: WTe,
  phone: KTe,
  telephone: ZTe,
  pager: JTe,
  fax: YTe,
  tv: XTe,
  radio: QTe,
  studio_microphone: eAe,
  level_slider: tAe,
  control_knobs: nAe,
  stopwatch: rAe,
  timer_clock: oAe,
  alarm_clock: iAe,
  mantelpiece_clock: sAe,
  hourglass: aAe,
  hourglass_flowing_sand: cAe,
  satellite: uAe,
  battery: lAe,
  electric_plug: fAe,
  bulb: dAe,
  flashlight: hAe,
  candle: pAe,
  wastebasket: vAe,
  oil_drum: gAe,
  money_with_wings: mAe,
  dollar: _Ae,
  yen: bAe,
  euro: yAe,
  pound: wAe,
  moneybag: kAe,
  credit_card: SAe,
  gem: xAe,
  balance_scale: $Ae,
  wrench: EAe,
  hammer: CAe,
  hammer_and_pick: IAe,
  hammer_and_wrench: TAe,
  pick: AAe,
  nut_and_bolt: OAe,
  gear: DAe,
  chains: PAe,
  gun: FAe,
  bomb: RAe,
  hocho: NAe,
  knife: MAe,
  dagger: LAe,
  crossed_swords: qAe,
  shield: jAe,
  smoking: BAe,
  coffin: zAe,
  funeral_urn: HAe,
  amphora: VAe,
  crystal_ball: UAe,
  prayer_beads: GAe,
  barber: WAe,
  alembic: KAe,
  telescope: ZAe,
  microscope: JAe,
  hole: YAe,
  pill: XAe,
  syringe: QAe,
  thermometer: eOe,
  toilet: tOe,
  potable_water: nOe,
  shower: rOe,
  bathtub: oOe,
  bath: iOe,
  bellhop_bell: sOe,
  key: aOe,
  old_key: cOe,
  door: uOe,
  couch_and_lamp: lOe,
  bed: fOe,
  sleeping_bed: dOe,
  framed_picture: hOe,
  shopping: pOe,
  shopping_cart: vOe,
  gift: gOe,
  balloon: mOe,
  flags: _Oe,
  ribbon: bOe,
  confetti_ball: yOe,
  tada: wOe,
  dolls: kOe,
  izakaya_lantern: SOe,
  lantern: xOe,
  wind_chime: $Oe,
  email: EOe,
  envelope: COe,
  envelope_with_arrow: IOe,
  incoming_envelope: TOe,
  "e-mail": "📧",
  love_letter: AOe,
  inbox_tray: OOe,
  outbox_tray: DOe,
  package: "📦",
  label: POe,
  mailbox_closed: FOe,
  mailbox: ROe,
  mailbox_with_mail: NOe,
  mailbox_with_no_mail: MOe,
  postbox: LOe,
  postal_horn: qOe,
  scroll: jOe,
  page_with_curl: BOe,
  page_facing_up: zOe,
  bookmark_tabs: HOe,
  bar_chart: VOe,
  chart_with_upwards_trend: UOe,
  chart_with_downwards_trend: GOe,
  spiral_notepad: WOe,
  spiral_calendar: KOe,
  calendar: ZOe,
  date: JOe,
  card_index: YOe,
  card_file_box: XOe,
  ballot_box: QOe,
  file_cabinet: eDe,
  clipboard: tDe,
  file_folder: nDe,
  open_file_folder: rDe,
  card_index_dividers: oDe,
  newspaper_roll: iDe,
  newspaper: sDe,
  notebook: aDe,
  notebook_with_decorative_cover: cDe,
  ledger: uDe,
  closed_book: lDe,
  green_book: fDe,
  blue_book: dDe,
  orange_book: hDe,
  books: pDe,
  book: vDe,
  open_book: gDe,
  bookmark: mDe,
  link: _De,
  paperclip: bDe,
  paperclips: yDe,
  triangular_ruler: wDe,
  straight_ruler: kDe,
  pushpin: SDe,
  round_pushpin: xDe,
  scissors: $De,
  pen: EDe,
  fountain_pen: CDe,
  black_nib: IDe,
  paintbrush: TDe,
  crayon: ADe,
  memo: ODe,
  pencil: DDe,
  pencil2: PDe,
  mag: FDe,
  mag_right: RDe,
  lock_with_ink_pen: NDe,
  closed_lock_with_key: MDe,
  lock: LDe,
  unlock: qDe,
  heart: jDe,
  yellow_heart: BDe,
  green_heart: zDe,
  blue_heart: HDe,
  purple_heart: VDe,
  black_heart: UDe,
  broken_heart: GDe,
  heavy_heart_exclamation: WDe,
  two_hearts: KDe,
  revolving_hearts: ZDe,
  heartbeat: JDe,
  heartpulse: YDe,
  sparkling_heart: XDe,
  cupid: QDe,
  gift_heart: ePe,
  heart_decoration: tPe,
  peace_symbol: nPe,
  latin_cross: rPe,
  star_and_crescent: oPe,
  om: iPe,
  wheel_of_dharma: sPe,
  star_of_david: aPe,
  six_pointed_star: cPe,
  menorah: uPe,
  yin_yang: lPe,
  orthodox_cross: fPe,
  place_of_worship: dPe,
  ophiuchus: hPe,
  aries: pPe,
  taurus: vPe,
  gemini: gPe,
  cancer: mPe,
  leo: _Pe,
  virgo: bPe,
  libra: yPe,
  scorpius: wPe,
  sagittarius: kPe,
  capricorn: SPe,
  aquarius: xPe,
  pisces: $Pe,
  id: EPe,
  atom_symbol: CPe,
  accept: IPe,
  radioactive: TPe,
  biohazard: APe,
  mobile_phone_off: OPe,
  vibration_mode: DPe,
  eight_pointed_black_star: PPe,
  vs: FPe,
  white_flower: RPe,
  ideograph_advantage: NPe,
  secret: MPe,
  congratulations: LPe,
  u6e80: qPe,
  a: jPe,
  b: BPe,
  ab: zPe,
  cl: HPe,
  o2: VPe,
  sos: UPe,
  x: GPe,
  o: WPe,
  stop_sign: KPe,
  no_entry: ZPe,
  name_badge: JPe,
  no_entry_sign: YPe,
  anger: XPe,
  hotsprings: QPe,
  no_pedestrians: e3e,
  do_not_litter: t3e,
  no_bicycles: n3e,
  "non-potable_water": "🚱",
  underage: r3e,
  no_mobile_phones: o3e,
  no_smoking: i3e,
  exclamation: s3e,
  heavy_exclamation_mark: a3e,
  grey_exclamation: c3e,
  question: u3e,
  grey_question: l3e,
  bangbang: f3e,
  interrobang: d3e,
  low_brightness: h3e,
  high_brightness: p3e,
  part_alternation_mark: v3e,
  warning: g3e,
  children_crossing: m3e,
  trident: _3e,
  fleur_de_lis: b3e,
  beginner: y3e,
  recycle: w3e,
  white_check_mark: k3e,
  chart: S3e,
  sparkle: x3e,
  eight_spoked_asterisk: $3e,
  negative_squared_cross_mark: E3e,
  globe_with_meridians: C3e,
  diamond_shape_with_a_dot_inside: I3e,
  m: T3e,
  cyclone: A3e,
  zzz: O3e,
  atm: D3e,
  wc: P3e,
  wheelchair: F3e,
  parking: R3e,
  sa: N3e,
  passport_control: M3e,
  customs: L3e,
  baggage_claim: q3e,
  left_luggage: j3e,
  mens: B3e,
  womens: z3e,
  baby_symbol: H3e,
  restroom: V3e,
  put_litter_in_its_place: U3e,
  cinema: G3e,
  signal_strength: W3e,
  koko: K3e,
  symbols: Z3e,
  information_source: J3e,
  abc: Y3e,
  abcd: X3e,
  capital_abcd: Q3e,
  ng: eFe,
  ok: tFe,
  up: nFe,
  cool: rFe,
  new: "🆕",
  free: oFe,
  zero: iFe,
  one: sFe,
  two: aFe,
  three: cFe,
  four: uFe,
  five: lFe,
  six: fFe,
  seven: dFe,
  eight: hFe,
  nine: pFe,
  keycap_ten: vFe,
  hash: gFe,
  asterisk: mFe,
  arrow_forward: _Fe,
  pause_button: bFe,
  play_or_pause_button: yFe,
  stop_button: wFe,
  record_button: kFe,
  next_track_button: SFe,
  previous_track_button: xFe,
  fast_forward: $Fe,
  rewind: EFe,
  arrow_double_up: CFe,
  arrow_double_down: IFe,
  arrow_backward: TFe,
  arrow_up_small: AFe,
  arrow_down_small: OFe,
  arrow_right: DFe,
  arrow_left: PFe,
  arrow_up: FFe,
  arrow_down: RFe,
  arrow_upper_right: NFe,
  arrow_lower_right: MFe,
  arrow_lower_left: LFe,
  arrow_upper_left: qFe,
  arrow_up_down: jFe,
  left_right_arrow: BFe,
  arrow_right_hook: zFe,
  leftwards_arrow_with_hook: HFe,
  arrow_heading_up: VFe,
  arrow_heading_down: UFe,
  twisted_rightwards_arrows: GFe,
  repeat: WFe,
  repeat_one: KFe,
  arrows_counterclockwise: ZFe,
  arrows_clockwise: JFe,
  musical_note: YFe,
  notes: XFe,
  heavy_plus_sign: QFe,
  heavy_minus_sign: eRe,
  heavy_division_sign: tRe,
  heavy_multiplication_x: nRe,
  heavy_dollar_sign: rRe,
  currency_exchange: oRe,
  tm: iRe,
  copyright: sRe,
  registered: aRe,
  wavy_dash: cRe,
  curly_loop: uRe,
  loop: lRe,
  end: fRe,
  back: dRe,
  on: hRe,
  top: pRe,
  soon: vRe,
  heavy_check_mark: gRe,
  ballot_box_with_check: mRe,
  radio_button: _Re,
  white_circle: bRe,
  black_circle: yRe,
  red_circle: wRe,
  large_blue_circle: kRe,
  small_red_triangle: SRe,
  small_red_triangle_down: xRe,
  small_orange_diamond: $Re,
  small_blue_diamond: ERe,
  large_orange_diamond: CRe,
  large_blue_diamond: IRe,
  white_square_button: TRe,
  black_square_button: ARe,
  black_small_square: ORe,
  white_small_square: DRe,
  black_medium_small_square: PRe,
  white_medium_small_square: FRe,
  black_medium_square: RRe,
  white_medium_square: NRe,
  black_large_square: MRe,
  white_large_square: LRe,
  speaker: qRe,
  mute: jRe,
  sound: BRe,
  loud_sound: zRe,
  bell: HRe,
  no_bell: VRe,
  mega: URe,
  loudspeaker: GRe,
  eye_speech_bubble: WRe,
  speech_balloon: KRe,
  thought_balloon: ZRe,
  right_anger_bubble: JRe,
  spades: YRe,
  clubs: XRe,
  hearts: QRe,
  diamonds: eNe,
  black_joker: tNe,
  flower_playing_cards: nNe,
  mahjong: rNe,
  clock1: oNe,
  clock2: iNe,
  clock3: sNe,
  clock4: aNe,
  clock5: cNe,
  clock6: uNe,
  clock7: lNe,
  clock8: fNe,
  clock9: dNe,
  clock10: hNe,
  clock11: pNe,
  clock12: vNe,
  clock130: gNe,
  clock230: mNe,
  clock330: _Ne,
  clock430: bNe,
  clock530: yNe,
  clock630: wNe,
  clock730: kNe,
  clock830: SNe,
  clock930: xNe,
  clock1030: $Ne,
  clock1130: ENe,
  clock1230: CNe,
  white_flag: INe,
  black_flag: TNe,
  checkered_flag: ANe,
  triangular_flag_on_post: ONe,
  rainbow_flag: DNe,
  afghanistan: PNe,
  aland_islands: FNe,
  albania: RNe,
  algeria: NNe,
  american_samoa: MNe,
  andorra: LNe,
  angola: qNe,
  anguilla: jNe,
  antarctica: BNe,
  antigua_barbuda: zNe,
  argentina: HNe,
  armenia: VNe,
  aruba: UNe,
  australia: GNe,
  austria: WNe,
  azerbaijan: KNe,
  bahamas: ZNe,
  bahrain: JNe,
  bangladesh: YNe,
  barbados: XNe,
  belarus: QNe,
  belgium: eMe,
  belize: tMe,
  benin: nMe,
  bermuda: rMe,
  bhutan: oMe,
  bolivia: iMe,
  caribbean_netherlands: sMe,
  bosnia_herzegovina: aMe,
  botswana: cMe,
  brazil: uMe,
  british_indian_ocean_territory: lMe,
  british_virgin_islands: fMe,
  brunei: dMe,
  bulgaria: hMe,
  burkina_faso: pMe,
  burundi: vMe,
  cape_verde: gMe,
  cambodia: mMe,
  cameroon: _Me,
  canada: bMe,
  canary_islands: yMe,
  cayman_islands: wMe,
  central_african_republic: kMe,
  chad: SMe,
  chile: xMe,
  cn: $Me,
  christmas_island: EMe,
  cocos_islands: CMe,
  colombia: IMe,
  comoros: TMe,
  congo_brazzaville: AMe,
  congo_kinshasa: OMe,
  cook_islands: DMe,
  costa_rica: PMe,
  cote_divoire: FMe,
  croatia: RMe,
  cuba: NMe,
  curacao: MMe,
  cyprus: LMe,
  czech_republic: qMe,
  denmark: jMe,
  djibouti: BMe,
  dominica: zMe,
  dominican_republic: HMe,
  ecuador: VMe,
  egypt: UMe,
  el_salvador: GMe,
  equatorial_guinea: WMe,
  eritrea: KMe,
  estonia: ZMe,
  ethiopia: JMe,
  eu: YMe,
  european_union: XMe,
  falkland_islands: QMe,
  faroe_islands: e8e,
  fiji: t8e,
  finland: n8e,
  fr: r8e,
  french_guiana: o8e,
  french_polynesia: i8e,
  french_southern_territories: s8e,
  gabon: a8e,
  gambia: c8e,
  georgia: u8e,
  de: l8e,
  ghana: f8e,
  gibraltar: d8e,
  greece: h8e,
  greenland: p8e,
  grenada: v8e,
  guadeloupe: g8e,
  guam: m8e,
  guatemala: _8e,
  guernsey: b8e,
  guinea: y8e,
  guinea_bissau: w8e,
  guyana: k8e,
  haiti: S8e,
  honduras: x8e,
  hong_kong: $8e,
  hungary: E8e,
  iceland: C8e,
  india: I8e,
  indonesia: T8e,
  iran: A8e,
  iraq: O8e,
  ireland: D8e,
  isle_of_man: P8e,
  israel: F8e,
  it: R8e,
  jamaica: N8e,
  jp: M8e,
  crossed_flags: L8e,
  jersey: q8e,
  jordan: j8e,
  kazakhstan: B8e,
  kenya: z8e,
  kiribati: H8e,
  kosovo: V8e,
  kuwait: U8e,
  kyrgyzstan: G8e,
  laos: W8e,
  latvia: K8e,
  lebanon: Z8e,
  lesotho: J8e,
  liberia: Y8e,
  libya: X8e,
  liechtenstein: Q8e,
  lithuania: eLe,
  luxembourg: tLe,
  macau: nLe,
  macedonia: rLe,
  madagascar: oLe,
  malawi: iLe,
  malaysia: sLe,
  maldives: aLe,
  mali: cLe,
  malta: uLe,
  marshall_islands: lLe,
  martinique: fLe,
  mauritania: dLe,
  mauritius: hLe,
  mayotte: pLe,
  mexico: vLe,
  micronesia: gLe,
  moldova: mLe,
  monaco: _Le,
  mongolia: bLe,
  montenegro: yLe,
  montserrat: wLe,
  morocco: kLe,
  mozambique: SLe,
  myanmar: xLe,
  namibia: $Le,
  nauru: ELe,
  nepal: CLe,
  netherlands: ILe,
  new_caledonia: TLe,
  new_zealand: ALe,
  nicaragua: OLe,
  niger: DLe,
  nigeria: PLe,
  niue: FLe,
  norfolk_island: RLe,
  northern_mariana_islands: NLe,
  north_korea: MLe,
  norway: LLe,
  oman: qLe,
  pakistan: jLe,
  palau: BLe,
  palestinian_territories: zLe,
  panama: HLe,
  papua_new_guinea: VLe,
  paraguay: ULe,
  peru: GLe,
  philippines: WLe,
  pitcairn_islands: KLe,
  poland: ZLe,
  portugal: JLe,
  puerto_rico: YLe,
  qatar: XLe,
  reunion: QLe,
  romania: e6e,
  ru: t6e,
  rwanda: n6e,
  st_barthelemy: r6e,
  st_helena: o6e,
  st_kitts_nevis: i6e,
  st_lucia: s6e,
  st_pierre_miquelon: a6e,
  st_vincent_grenadines: c6e,
  samoa: u6e,
  san_marino: l6e,
  sao_tome_principe: f6e,
  saudi_arabia: d6e,
  senegal: h6e,
  serbia: p6e,
  seychelles: v6e,
  sierra_leone: g6e,
  singapore: m6e,
  sint_maarten: _6e,
  slovakia: b6e,
  slovenia: y6e,
  solomon_islands: w6e,
  somalia: k6e,
  south_africa: S6e,
  south_georgia_south_sandwich_islands: x6e,
  kr: $6e,
  south_sudan: E6e,
  es: C6e,
  sri_lanka: I6e,
  sudan: T6e,
  suriname: A6e,
  swaziland: O6e,
  sweden: D6e,
  switzerland: P6e,
  syria: F6e,
  taiwan: R6e,
  tajikistan: N6e,
  tanzania: M6e,
  thailand: L6e,
  timor_leste: q6e,
  togo: j6e,
  tokelau: B6e,
  tonga: z6e,
  trinidad_tobago: H6e,
  tunisia: V6e,
  tr: U6e,
  turkmenistan: G6e,
  turks_caicos_islands: W6e,
  tuvalu: K6e,
  uganda: Z6e,
  ukraine: J6e,
  united_arab_emirates: Y6e,
  gb: X6e,
  uk: Q6e,
  us: eqe,
  us_virgin_islands: tqe,
  uruguay: nqe,
  uzbekistan: rqe,
  vanuatu: oqe,
  vatican_city: iqe,
  venezuela: sqe,
  vietnam: aqe,
  wallis_futuna: cqe,
  western_sahara: uqe,
  yemen: lqe,
  zambia: fqe,
  zimbabwe: dqe
};
var pqe = {
  angry: [">:(", ">:-("],
  blush: [':")', ':-")'],
  broken_heart: ["</3", "<\\3"],
  // :\ and :-\ not used because of conflict with markdown escaping
  confused: [":/", ":-/"],
  // twemoji shows question
  cry: [":'(", ":'-(", ":,(", ":,-("],
  frowning: [":(", ":-("],
  heart: ["<3"],
  imp: ["]:(", "]:-("],
  innocent: ["o:)", "O:)", "o:-)", "O:-)", "0:)", "0:-)"],
  joy: [":')", ":'-)", ":,)", ":,-)", ":'D", ":'-D", ":,D", ":,-D"],
  kissing: [":*", ":-*"],
  laughing: ["x-)", "X-)"],
  neutral_face: [":|", ":-|"],
  open_mouth: [":o", ":-o", ":O", ":-O"],
  rage: [":@", ":-@"],
  smile: [":D", ":-D"],
  smiley: [":)", ":-)"],
  smiling_imp: ["]:)", "]:-)"],
  sob: [":,'(", ":,'-(", ";(", ";-("],
  stuck_out_tongue: [":P", ":-P"],
  sunglasses: ["8-)", "B-)"],
  sweat: [",:(", ",:-("],
  sweat_smile: [",:)", ",:-)"],
  unamused: [":s", ":-S", ":z", ":-Z", ":$", ":-$"],
  wink: [";)", ";-)"]
}, vqe = function(e, n) {
  return e[n].content;
}, gqe = function(e, n, r, o, i) {
  var s = e.utils.arrayReplaceAt, a = e.utils.lib.ucmicro, c = new RegExp([a.Z.source, a.P.source, a.Cc.source].join("|"));
  function u(l, f, d) {
    var h, b = 0, m = [];
    return l.replace(i, function(g, v, k) {
      var y;
      if (r.hasOwnProperty(g)) {
        if (y = r[g], v > 0 && !c.test(k[v - 1]) || v + g.length < k.length && !c.test(k[v + g.length]))
          return;
      } else
        y = g.slice(1, -1);
      v > b && (h = new d("text", "", 0), h.content = l.slice(b, v), m.push(h)), h = new d("emoji", "", 0), h.markup = y, h.content = n[y], m.push(h), b = v + g.length;
    }), b < l.length && (h = new d("text", "", 0), h.content = l.slice(b), m.push(h)), m;
  }
  return function(f) {
    var d, h, b, m, g, v = f.tokens, k = 0;
    for (h = 0, b = v.length; h < b; h++)
      if (v[h].type === "inline")
        for (m = v[h].children, d = m.length - 1; d >= 0; d--)
          g = m[d], (g.type === "link_open" || g.type === "link_close") && g.info === "auto" && (k -= g.nesting), g.type === "text" && k === 0 && o.test(g.content) && (v[h].children = m = s(
            m,
            d,
            u(g.content, g.level, f.Token)
          ));
  };
};
function mqe(t) {
  return t.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
var _qe = function(e) {
  var n = e.defs, r;
  e.enabled.length && (n = Object.keys(n).reduce(function(a, c) {
    return e.enabled.indexOf(c) >= 0 && (a[c] = n[c]), a;
  }, {})), r = Object.keys(e.shortcuts).reduce(function(a, c) {
    return n[c] ? Array.isArray(e.shortcuts[c]) ? (e.shortcuts[c].forEach(function(u) {
      a[u] = c;
    }), a) : (a[e.shortcuts[c]] = c, a) : a;
  }, {});
  var o = Object.keys(n).map(function(a) {
    return ":" + a + ":";
  }).concat(Object.keys(r)).sort().reverse().map(function(a) {
    return mqe(a);
  }).join("|"), i = RegExp(o), s = RegExp(o, "g");
  return {
    defs: n,
    shortcuts: r,
    scanRE: i,
    replaceRE: s
  };
}, bqe = hqe, yqe = pqe, wqe = vqe, kqe = gqe, Sqe = _qe, xqe = function(e, n) {
  var r = {
    defs: bqe,
    shortcuts: yqe,
    enabled: []
  }, o = Sqe(e.utils.assign({}, r, n || {}));
  e.renderer.rules.emoji = wqe, e.core.ruler.push("emoji", kqe(e, o.defs, o.shortcuts, o.scanRE, o.replaceRE));
};
const $qe = /* @__PURE__ */ z_(xqe);
/*! Copyright Twitter Inc. and other contributors. Licensed under MIT */
var Eqe = function() {
  var t = { base: "https://twemoji.maxcdn.com/v/12.1.3/", ext: ".png", size: "72x72", className: "emoji", convert: { fromCodePoint: k, toCodePoint: T }, onerror: function() {
    this.parentNode && this.parentNode.replaceChild(c(this.alt, !1), this);
  }, parse: y, replace: x, test: N }, e = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }, n = /(?:\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffb|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c\udffb|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffb|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb\udffc]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udffd]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69])(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5\udeeb\udeec\udef4-\udefa\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd71\udd73-\udd76\udd7a-\udda2\udda5-\uddaa\uddae-\uddb4\uddb7\uddba\uddbc-\uddca\uddd0\uddde-\uddff\ude70-\ude73\ude78-\ude7a\ude80-\ude82\ude90-\ude95]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g, r = /\uFE0F/g, o = String.fromCharCode(8205), i = /[&<>'"]/g, s = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/, a = String.fromCharCode;
  return t;
  function c(C, A) {
    return document.createTextNode(A ? C.replace(r, "") : C);
  }
  function u(C) {
    return C.replace(i, m);
  }
  function l(C, A) {
    return "".concat(A.base, A.size, "/", C, A.ext);
  }
  function f(C, A) {
    for (var z = C.childNodes, M = z.length, L, w; M--; )
      L = z[M], w = L.nodeType, w === 3 ? A.push(L) : w === 1 && !("ownerSVGElement" in L) && !s.test(L.nodeName.toLowerCase()) && f(L, A);
    return A;
  }
  function d(C) {
    return T(C.indexOf(o) < 0 ? C.replace(r, "") : C);
  }
  function h(C, A) {
    for (var z = f(C, []), M = z.length, L, w, _, p, O, P, E, S, I, F, R, B, V; M--; ) {
      for (_ = !1, p = document.createDocumentFragment(), O = z[M], P = O.nodeValue, S = 0; E = n.exec(P); ) {
        if (I = E.index, I !== S && p.appendChild(c(P.slice(S, I), !0)), R = E[0], B = d(R), S = I + R.length, V = A.callback(B, A), B && V) {
          F = new Image(), F.onerror = A.onerror, F.setAttribute("draggable", "false"), L = A.attributes(R, B);
          for (w in L)
            L.hasOwnProperty(w) && w.indexOf("on") !== 0 && !F.hasAttribute(w) && F.setAttribute(w, L[w]);
          F.className = A.className, F.alt = R, F.src = V, _ = !0, p.appendChild(F);
        }
        F || p.appendChild(c(R, !1)), F = null;
      }
      _ && (S < P.length && p.appendChild(c(P.slice(S), !0)), O.parentNode.replaceChild(p, O));
    }
    return C;
  }
  function b(C, A) {
    return x(C, function(z) {
      var M = z, L = d(z), w = A.callback(L, A), _, p;
      if (L && w) {
        M = "<img ".concat('class="', A.className, '" ', 'draggable="false" ', 'alt="', z, '"', ' src="', w, '"'), _ = A.attributes(z, L);
        for (p in _)
          _.hasOwnProperty(p) && p.indexOf("on") !== 0 && M.indexOf(" " + p + "=") === -1 && (M = M.concat(" ", p, '="', u(_[p]), '"'));
        M = M.concat("/>");
      }
      return M;
    });
  }
  function m(C) {
    return e[C];
  }
  function g() {
    return null;
  }
  function v(C) {
    return typeof C == "number" ? C + "x" + C : C;
  }
  function k(C) {
    var A = typeof C == "string" ? parseInt(C, 16) : C;
    return A < 65536 ? a(A) : (A -= 65536, a(55296 + (A >> 10), 56320 + (A & 1023)));
  }
  function y(C, A) {
    return (!A || typeof A == "function") && (A = { callback: A }), (typeof C == "string" ? b : h)(C, { callback: A.callback || l, attributes: typeof A.attributes == "function" ? A.attributes : g, base: typeof A.base == "string" ? A.base : t.base, ext: A.ext || t.ext, size: A.folder || v(A.size || t.size), className: A.className || t.className, onerror: A.onerror || t.onerror });
  }
  function x(C, A) {
    return String(C).replace(n, A);
  }
  function N(C) {
    n.lastIndex = 0;
    var A = n.test(C);
    return n.lastIndex = 0, A;
  }
  function T(C, A) {
    for (var z = [], M = 0, L = 0, w = 0; w < C.length; )
      M = C.charCodeAt(w++), L ? (z.push((65536 + (L - 55296 << 10) + (M - 56320)).toString(16)), L = 0) : 55296 <= M && M <= 56319 ? L = M : z.push(M.toString(16));
    return z.join(A || "-");
  }
}();
class Cqe {
  constructor() {
    this.md = new t_e(), this.md.use($qe, []);
    let e = this.md.renderer.rules.link_open || function(n, r, o, i, s) {
      return s.renderToken(n, r, o);
    };
    this.md.renderer.rules.link_open = (n, r, o, i, s) => {
      var a = n[r].attrIndex("target");
      return a < 0 ? n[r].attrPush(["target", "_blank"]) : n[r].attrs[a][1] = "_blank", e(n, r, o, i, s);
    }, this.md.renderer.rules.emoji = (n, r) => Eqe.parse(n[r].content);
  }
  render(e) {
    return this.md.render(e);
  }
}
let Iqe = new Cqe();
const Tqe = {
  name: "SimpleDialog",
  props: {
    data: {
      type: $n
    }
  },
  mounted() {
    setTimeout(() => {
      document.addEventListener("keydown", this.enter);
    }, 500);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.enter);
  },
  components: { FlatButton: od },
  data() {
    return {
      MdRenderer: Iqe
    };
  },
  methods: {
    getType(t) {
      switch (t) {
        case Dt:
          return "plain";
        case yw:
          return "positive";
        case bw:
          return "negative";
        case ww:
          return "warning";
      }
    },
    onClick(t) {
      t.onClick() && this.$emit("close");
    },
    close(t) {
      this.data.type === as && this.$emit("close");
    },
    enter(t) {
      t.key === "Enter" && this.data.operations.length === 1 && (this.data.operations[0].onClick(), this.$emit("close"));
    }
  }
};
var Aqe = function() {
  var e = this, n = e._self._c;
  return n("div", { ref: "dialog", staticClass: "simple-dialog", on: { click: function(r) {
    r.stopPropagation();
  }, wheel: function(r) {
    r.stopPropagation();
  } } }, [n("div", { staticClass: "background", on: { click: e.close } }), n("article", [n("h4", [e._v(e._s(e.data.title))]), n("p", { staticClass: "markdown", domProps: { innerHTML: e._s(e.MdRenderer.render(e.data.text)) } }), n("div", { staticClass: "operation-bar" }, e._l(e.data.operations, function(r) {
    return n("flat-button", { key: r.name, staticClass: "operation", attrs: { label: r.name, type: e.getType(r.type), mode: "inline" }, on: { click: function(o) {
      return e.onClick(r);
    } } });
  }), 1)])]);
}, Oqe = [], Dqe = /* @__PURE__ */ ge(
  Tqe,
  Aqe,
  Oqe,
  !1,
  null,
  "9dd17801",
  null,
  null
);
const Pqe = Dqe.exports;
const Fqe = {
  name: "ModalManager",
  components: { SimpleDialog: Pqe },
  data() {
    return {};
  },
  computed: {
    ...ht(["string", "dialogs"])
  },
  methods: {
    ...Gt(["addDialog", "removeDialog"]),
    getDialogStyle(t) {
      return { "z-index": t + 100 };
    }
  }
};
var Rqe = function() {
  var e = this, n = e._self._c;
  return n("transition", { attrs: { name: "slow-opacity-fade" } }, [e.dialogs.length ? n("section", { staticClass: "modal-manager" }, [n("transition-group", { attrs: { name: "vertical-list", tag: "p" } }, e._l(e.dialogs, function(r, o) {
    return n("simple-dialog", { key: r.id, staticClass: "dialog", style: e.getDialogStyle(o), attrs: { data: r }, on: { close: function(i) {
      return e.removeDialog(r);
    } } });
  }), 1)], 1) : e._e()]);
}, Nqe = [], Mqe = /* @__PURE__ */ ge(
  Fqe,
  Rqe,
  Nqe,
  !1,
  null,
  "dc16b416",
  null,
  null
);
const Lqe = Mqe.exports;
const qqe = {
  name: "InjectedApp",
  inject: ["config", "service", "disableLoading"],
  components: {
    ThumbScrollView: gF,
    ReaderView: GR,
    ModalManager: Lqe,
    LoadingView: YR
  },
  data() {
    return {
      pageCount: 0,
      curPageNum: 0,
      title: "",
      imgPageInfos: [],
      thumbInfos: [],
      albumId: "",
      isDone: !1,
      isFailed: !1,
      failedMsg: "",
      supportThumbView: !1
    };
  },
  async created() {
    Promise.all([
      this.service.album.getPageCount(),
      this.service.album.getCurPageNum(),
      this.service.album.getTitle(),
      this.service.album.getImgPageInfos(),
      this.service.album.getThumbInfos(),
      this.service.album.getAlbumId()
    ]).then(
      async (t) => {
        this.pageCount = t[0], this.curPageNum = t[1], this.title = t[2], this.imgPageInfos = t[3], this.thumbInfos = t[4], this.albumId = t[5], this.supportThumbView = this.service.album.supportThumbView(), this.isDone = !0;
      },
      (t) => {
        console.error("[Ehunter init error]", t), this.failedMsg = t, this.isFailed = !0;
      }
    ), await this.checkInstructions();
  },
  computed: {
    ...ht(["showThumbView", "thumbWidth", "readingMode", "showThumbViewInBook", "string"]),
    thumbStyle() {
      if (this.supportThumbView) {
        if (this.readingMode === 0 && this.showThumbView)
          return "";
        if (this.readingMode === 1 && this.showThumbViewInBook)
          return "";
      }
      return { "margin-left": this.px(-this.thumbWidth) };
    }
  },
  methods: {
    async checkInstructions() {
      if (await W.getFirstOpen()) {
        let t = navigator.language.toLowerCase();
        t.includes("zh") ? await W.setLang(Ms) : t.includes("jp") && await W.setLang(Ls), dr.showInstruction(this.config, !0), setTimeout(() => W.setFirstOpen(!1), 2e3);
      }
    },
    async checkVersion() {
      await Qw.timeout(5e3), dr.checkUpdate(this.config), dr.checkNewVersion(this.config);
    }
  }
};
var jqe = function() {
  var e = this, n = e._self._c;
  return n("div", { staticClass: "app normalize" }, [e.disableLoading ? e._e() : n("transition", { attrs: { name: "loading-horizontal-fade" } }, [!e.isDone && !e.isFailed ? n("loading-view", { staticClass: "loading-view" }) : e._e()], 1), n("transition", { attrs: { name: "slow-horizontal-fade" } }, [e.isFailed ? n("div", { staticClass: "failed-view" }, [n("h4", [e._v(e._s(e.string.loadingFailedAndRefresh))]), n("article", [n("p", [e._v(e._s(e.string.failedMsg) + ": " + e._s(e.failedMsg))]), n("p", [e._v(e._s(e.string.version) + ": " + e._s(e.config.version))]), n("p", [e._v(e._s(e.string.ContractAuthor) + ": Create issue on " + e._s(e.config.homePage) + " or email " + e._s(e.config.email))])])]) : e._e()]), e.isDone ? [n("transition", { attrs: { name: "slow-horizontal-fade" } }, [e.supportThumbView ? n("thumb-scroll-view", { staticClass: "thumb-column", style: e.thumbStyle, attrs: { thumbInfos: e.thumbInfos, pageCount: e.pageCount } }) : e._e()], 1), n("transition", { attrs: { name: "slow-horizontal-fade" } }, [n("reader-view", { staticClass: "reader-column", attrs: { pageCount: e.pageCount, curPageNum: e.curPageNum, title: e.title, imgPageInfos: e.imgPageInfos, albumId: e.albumId } })], 1)] : e._e(), n("modal-manager", { staticClass: "modal" })], 2);
}, Bqe = [], zqe = /* @__PURE__ */ ge(
  qqe,
  jqe,
  Bqe,
  !1,
  null,
  null,
  null,
  null
);
const Hqe = zqe.exports;
let mu = {}, j_ = {}, B_ = !1;
const Vqe = {
  setAlbumService(t) {
    return mu.album = t, this;
  },
  setEHunterService(t) {
    return mu.eHunter = t, this;
  },
  setConfig(t) {
    return j_ = t, this;
  },
  disableLoading(t) {
    return B_ = t, this;
  },
  instance() {
    return {
      components: { app: Hqe },
      provide: {
        service: mu,
        config: j_,
        disableLoading: B_
      },
      data() {
        return {};
      },
      template: "<app></app>"
    };
  }
}, Uqe = {
  methods: {
    px(t) {
      return `${t}px`;
    },
    range(t, e) {
      return Array.apply(0, Array(e)).map(function(n, r) {
        return r + t;
      });
    }
  }
};
re.mixin(Uqe);
function Gqe(t, e, n) {
  if (document.getElementsByClassName(t).length > 0) {
    let r = new re({
      store: fe,
      render: (o) => o(n)
    }).$mount(e);
    return W.initSettings(), r;
  }
}
const ls = {
  launcher: Vqe,
  createAppView: Gqe,
  SettingService: W
};
class Wqe {
  // add ehunter switch etc.
  async init() {
    this.isAlbumViewPage() && (this.createEhunterSwitch(), await ls.SettingService.getEHunterStatus() && this.toggleEHunterView(!0));
  }
  createEhunterSwitch() {
    let e = document.createElement("div");
    e.style.display = "flex", e.style.flexDirection = "column", e.style.justifyContent = "center", e.style.alignItems = "center", e.style.position = "absolute", e.style.right = "100px", e.style.top = "-150px", e.style.zIndex = "10", e.style.cursor = "pointer", e.style.transition = "all 0.2s cubic-bezier(.46,-0.23,.37,2.38)", e.setAttribute("title", "open eHunter"), e.setAttribute("id", "switch"), e.addEventListener("click", this.openEhunterBySwitch.bind(this));
    let n = document.createElement("span");
    n.style.width = "2px", n.style.height = "200px", n.style.background = "#2ecc71", n.style.boxShadow = "0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647)", e.appendChild(n);
    let r = document.createElement("span");
    r.style.border = "2px solid #2ecc71", r.style.borderRadius = "50%", r.style.width = "15px", r.style.height = "15px", r.style.boxShadow = "0 1px 6px rgba(0,0,0,.117647), 0 1px 4px rgba(0,0,0,.117647)", e.appendChild(r), document.body.appendChild(e);
  }
  // when user click the ehunter switch
  openEhunterBySwitch() {
    var e = document.querySelector("#switch");
    e && (e.style.top = "-50px", window.setTimeout(() => {
      e && (e.style.top = "-150px");
    }, 2e3), ls.SettingService.toggleEHunter(!0), window.setTimeout(() => {
      this.toggleEHunterView(!0);
    }, 300));
  }
  createEHunterContainer() {
    document.body.style.overflow = "hidden";
    let e = document.createElement("div");
    e.style.position = "fixed", e.style.height = "100%", e.style.width = "100%", e.style.transition = "all 1s ease", e.style.background = "#333333", e.style.zIndex = "10", e.style.top = "-100%", e.style.left = "0px", e.classList.add("vue-container");
    let n = document.createElement("div");
    n.setAttribute("id", "app"), e.appendChild(n), document.body.appendChild(e), setTimeout(() => {
      e.style.top = "0";
    }, 0);
  }
  toggleEHunterView(e) {
    document.getElementsByClassName("vue-container").length > 0 ? this.showEHunterView(e) : this.initEHunter();
  }
  showEHunterView(e) {
    document.body.style.overflow = e ? "hidden" : "", document.getElementsByClassName("vue-container")[0].style.top = e ? "0" : "-100%";
  }
  blockHostActions() {
  }
  initEHunter() {
    this.blockHostActions(), this.createEHunterContainer();
  }
}
class Kqe {
  getBookScreenCount(e, n) {
    return Math.ceil((e + 2) / n);
  }
  getRealCurIndexInfo(e, n) {
    let r = n.val;
    return r = r >= e ? e - 1 : r, { val: r, updater: n.updater };
  }
}
class Zqe extends Kqe {
  constructor() {
    super(), console.log("AlbumServiceImpl初始化");
  }
  async getAlbumId() {
    return this.albumId || (this.albumId = new URLSearchParams(location.search).get("id")), this.albumId;
  }
  async getMetadata() {
    return await (await fetch(`/api/archives/${await this.getAlbumId()}/metadata`)).json();
  }
  async getPageCount() {
    return this.metadata || (this.metadata = await this.getMetadata()), this.metadata.pagecount;
  }
  async getCurPageNum() {
    return 0;
  }
  async getTitle() {
    return this.metadata || (this.metadata = await this.getMetadata()), this.metadata.title;
  }
  async getImgPageInfos() {
    let e = (await (await fetch(`/api/archives/${await this.getAlbumId()}/files?force=false`)).json()).pages;
    const n = (o) => new Promise((i, s) => {
      const a = new Image();
      a.onload = () => i(a), a.onerror = s, a.src = o.src;
    });
    let r = await Promise.all((await this.getThumbInfos()).map(n));
    return Array.from(Array(await this.getPageCount()).keys(), (o) => ({
      id: o,
      index: o,
      src: e[o],
      heightOfWidth: r[o].height / r[o].width
    }));
  }
  async getImgPageInfo(e) {
    return (await this.getImgPageInfos())[e];
  }
  async getImgSrc(e, n) {
    return (await this.getImgPageInfos())[e];
  }
  async getNewImgSrc(e, n) {
    return await this.getImgSrc(e, n);
  }
  async getThumbInfos(e = !0) {
    return this.albumId = await this.getAlbumId(), Array.from(Array(await this.getPageCount()).keys(), (n) => ({
      id: n,
      src: `/api/archives/${this.albumId}/thumbnail?page=${n + 1}`,
      mode: 1
    }));
  }
  async getThumbInfo(e) {
    return (await this.getThumbInfos())[e];
  }
  async getPreviewThumbnailStyle(e, n, r) {
    return {
      "background-image": `url(${r.src})`,
      "background-position": "0% 0%",
      "background-size": "cover"
    };
  }
  supportOriginImg() {
    return !1;
  }
  supportImgChangeSource() {
    return !1;
  }
  supportThumbView() {
    return !0;
  }
}
class Jqe extends Wqe {
  isAlbumViewPage() {
    return !0;
  }
  initEHunter() {
    super.initEHunter(), ls.createAppView(
      "vue-container",
      "#app",
      ls.launcher.setAlbumService(new Zqe()).setEHunterService({
        showEHunterView: this.showEHunterView
      }).instance()
    );
  }
}
new Jqe().init();
//# sourceMappingURL=ehunter.mjs.map
