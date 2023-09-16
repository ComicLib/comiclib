var Ks = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function P_(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var F_ = { exports: {} }, ik = F_.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
typeof __g == "number" && (__g = ik);
var ee = F_.exports, sk = {}.hasOwnProperty, ut = function(t, e) {
  return sk.call(t, e);
}, te = function(t) {
  try {
    return !!t();
  } catch {
    return !0;
  }
}, be = !te(function() {
  return Object.defineProperty({}, "a", { get: function() {
    return 7;
  } }).a != 7;
}), R_ = { exports: {} }, ak = R_.exports = { version: "2.6.9" };
typeof __e == "number" && (__e = ak);
var Ee = R_.exports, me = {}, ne = function(t) {
  return typeof t == "object" ? t !== null : typeof t == "function";
}, ck = ne, re = function(t) {
  if (!ck(t))
    throw TypeError(t + " is not an object!");
  return t;
}, ld = ne, gu = ee.document, uk = ld(gu) && ld(gu.createElement), Rl = function(t) {
  return uk ? gu.createElement(t) : {};
}, N_ = !be && !te(function() {
  return Object.defineProperty(Rl("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
}), Oo = ne, hn = function(t, e) {
  if (!Oo(t))
    return t;
  var n, r;
  if (e && typeof (n = t.toString) == "function" && !Oo(r = n.call(t)) || typeof (n = t.valueOf) == "function" && !Oo(r = n.call(t)) || !e && typeof (n = t.toString) == "function" && !Oo(r = n.call(t)))
    return r;
  throw TypeError("Can't convert object to primitive value");
}, fd = re, lk = N_, fk = hn, dk = Object.defineProperty;
me.f = be ? Object.defineProperty : function(e, n, r) {
  if (fd(e), n = fk(n, !0), fd(r), lk)
    try {
      return dk(e, n, r);
    } catch {
    }
  if ("get" in r || "set" in r)
    throw TypeError("Accessors not supported!");
  return "value" in r && (e[n] = r.value), e;
};
var Bn = function(t, e) {
  return {
    enumerable: !(t & 1),
    configurable: !(t & 2),
    writable: !(t & 4),
    value: e
  };
}, hk = me, pk = Bn, lt = be ? function(t, e, n) {
  return hk.f(t, e, pk(1, n));
} : function(t, e, n) {
  return t[e] = n, t;
}, M_ = { exports: {} }, vk = 0, gk = Math.random(), zn = function(t) {
  return "Symbol(".concat(t === void 0 ? "" : t, ")_", (++vk + gk).toString(36));
}, L_ = { exports: {} }, q_ = !1, mk = Ee, dd = ee, hd = "__core-js_shared__", pd = dd[hd] || (dd[hd] = {});
(L_.exports = function(t, e) {
  return pd[t] || (pd[t] = e !== void 0 ? e : {});
})("versions", []).push({
  version: mk.version,
  mode: "global",
  copyright: "© 2019 Denis Pushkarev (zloirock.ru)"
});
var fs = L_.exports, _k = fs("native-function-to-string", Function.toString), bk = ee, Do = lt, vd = ut, Zs = zn("src"), Nl = _k, j_ = "toString", yk = ("" + Nl).split(j_);
Ee.inspectSource = function(t) {
  return Nl.call(t);
};
(M_.exports = function(t, e, n, r) {
  var o = typeof n == "function";
  o && (vd(n, "name") || Do(n, "name", e)), t[e] !== n && (o && (vd(n, Zs) || Do(n, Zs, t[e] ? "" + t[e] : yk.join(String(e)))), t === bk ? t[e] = n : r ? t[e] ? t[e] = n : Do(t, e, n) : (delete t[e], Do(t, e, n)));
})(Function.prototype, j_, function() {
  return typeof this == "function" && this[Zs] || Nl.call(this);
});
var et = M_.exports, Ct = function(t) {
  if (typeof t != "function")
    throw TypeError(t + " is not a function!");
  return t;
}, wk = Ct, It = function(t, e, n) {
  if (wk(t), e === void 0)
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
}, rr = ee, xi = Ee, kk = lt, Sk = et, gd = It, Js = "prototype", Pe = function(t, e, n) {
  var r = t & Pe.F, o = t & Pe.G, i = t & Pe.S, s = t & Pe.P, a = t & Pe.B, c = o ? rr : i ? rr[e] || (rr[e] = {}) : (rr[e] || {})[Js], u = o ? xi : xi[e] || (xi[e] = {}), l = u[Js] || (u[Js] = {}), f, d, h, w;
  o && (n = e);
  for (f in n)
    d = !r && c && c[f] !== void 0, h = (d ? c : n)[f], w = a && d ? gd(h, rr) : s && typeof h == "function" ? gd(Function.call, h) : h, c && Sk(c, f, h, t & Pe.U), u[f] != h && kk(u, f, w), s && l[f] != h && (l[f] = h);
};
rr.core = xi;
Pe.F = 1;
Pe.G = 2;
Pe.S = 4;
Pe.P = 8;
Pe.B = 16;
Pe.W = 32;
Pe.U = 64;
Pe.R = 128;
var R = Pe, B_ = { exports: {} }, Pn = zn("meta"), xk = ne, Ml = ut, Ek = me.f, $k = 0, ds = Object.isExtensible || function() {
  return !0;
}, Ck = !te(function() {
  return ds(Object.preventExtensions({}));
}), Ll = function(t) {
  Ek(t, Pn, { value: {
    i: "O" + ++$k,
    // object ID
    w: {}
    // weak collections IDs
  } });
}, Ik = function(t, e) {
  if (!xk(t))
    return typeof t == "symbol" ? t : (typeof t == "string" ? "S" : "P") + t;
  if (!Ml(t, Pn)) {
    if (!ds(t))
      return "F";
    if (!e)
      return "E";
    Ll(t);
  }
  return t[Pn].i;
}, Tk = function(t, e) {
  if (!Ml(t, Pn)) {
    if (!ds(t))
      return !0;
    if (!e)
      return !1;
    Ll(t);
  }
  return t[Pn].w;
}, Ak = function(t) {
  return Ck && Ok.NEED && ds(t) && !Ml(t, Pn) && Ll(t), t;
}, Ok = B_.exports = {
  KEY: Pn,
  NEED: !1,
  fastKey: Ik,
  getWeak: Tk,
  onFreeze: Ak
}, pn = B_.exports, z_ = { exports: {} }, mu = fs("wks"), Dk = zn, _u = ee.Symbol, md = typeof _u == "function", Pk = z_.exports = function(t) {
  return mu[t] || (mu[t] = md && _u[t] || (md ? _u : Dk)("Symbol." + t));
};
Pk.store = mu;
var fe = z_.exports, Fk = me.f, Rk = ut, _d = fe("toStringTag"), br = function(t, e, n) {
  t && !Rk(t = n ? t : t.prototype, _d) && Fk(t, _d, { configurable: !0, value: e });
}, hs = {};
hs.f = fe;
var Nk = ee, bd = Ee, Mk = hs, Lk = me.f, H_ = function(t) {
  var e = bd.Symbol || (bd.Symbol = Nk.Symbol || {});
  t.charAt(0) != "_" && !(t in e) && Lk(e, t, { value: Mk.f(t) });
}, qk = {}.toString, Kt = function(t) {
  return qk.call(t).slice(8, -1);
}, jk = Kt, bo = Object("z").propertyIsEnumerable(0) ? Object : function(t) {
  return jk(t) == "String" ? t.split("") : Object(t);
}, Zt = function(t) {
  if (t == null)
    throw TypeError("Can't call method on  " + t);
  return t;
}, Bk = bo, zk = Zt, ft = function(t) {
  return Bk(zk(t));
}, Hk = Math.ceil, Vk = Math.floor, Tt = function(t) {
  return isNaN(t = +t) ? 0 : (t > 0 ? Vk : Hk)(t);
}, Uk = Tt, Gk = Math.min, he = function(t) {
  return t > 0 ? Gk(Uk(t), 9007199254740991) : 0;
}, Wk = Tt, Kk = Math.max, Zk = Math.min, Hn = function(t, e) {
  return t = Wk(t), t < 0 ? Kk(t + e, 0) : Zk(t, e);
}, Jk = ft, Yk = he, Xk = Hn, ps = function(t) {
  return function(e, n, r) {
    var o = Jk(e), i = Yk(o.length), s = Xk(r, i), a;
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
}, yd = fs("keys"), Qk = zn, ql = function(t) {
  return yd[t] || (yd[t] = Qk(t));
}, wd = ut, e1 = ft, t1 = ps(!1), n1 = ql("IE_PROTO"), V_ = function(t, e) {
  var n = e1(t), r = 0, o = [], i;
  for (i in n)
    i != n1 && wd(n, i) && o.push(i);
  for (; e.length > r; )
    wd(n, i = e[r++]) && (~t1(o, i) || o.push(i));
  return o;
}, jl = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(","), r1 = V_, o1 = jl, Vn = Object.keys || function(e) {
  return r1(e, o1);
}, yo = {};
yo.f = Object.getOwnPropertySymbols;
var yr = {};
yr.f = {}.propertyIsEnumerable;
var i1 = Vn, s1 = yo, a1 = yr, c1 = function(t) {
  var e = i1(t), n = s1.f;
  if (n)
    for (var r = n(t), o = a1.f, i = 0, s; r.length > i; )
      o.call(t, s = r[i++]) && e.push(s);
  return e;
}, u1 = Kt, vs = Array.isArray || function(e) {
  return u1(e) == "Array";
}, l1 = Zt, Ne = function(t) {
  return Object(l1(t));
}, f1 = me, d1 = re, h1 = Vn, U_ = be ? Object.defineProperties : function(e, n) {
  d1(e);
  for (var r = h1(n), o = r.length, i = 0, s; o > i; )
    f1.f(e, s = r[i++], n[s]);
  return e;
}, kd = ee.document, Bl = kd && kd.documentElement, p1 = re, v1 = U_, Sd = jl, g1 = ql("IE_PROTO"), Ys = function() {
}, bu = "prototype", Ei = function() {
  var t = Rl("iframe"), e = Sd.length, n = "<", r = ">", o;
  for (t.style.display = "none", Bl.appendChild(t), t.src = "javascript:", o = t.contentWindow.document, o.open(), o.write(n + "script" + r + "document.F=Object" + n + "/script" + r), o.close(), Ei = o.F; e--; )
    delete Ei[bu][Sd[e]];
  return Ei();
}, Un = Object.create || function(e, n) {
  var r;
  return e !== null ? (Ys[bu] = p1(e), r = new Ys(), Ys[bu] = null, r[g1] = e) : r = Ei(), n === void 0 ? r : v1(r, n);
}, zl = {}, vn = {}, m1 = V_, _1 = jl.concat("length", "prototype");
vn.f = Object.getOwnPropertyNames || function(e) {
  return m1(e, _1);
};
var b1 = ft, G_ = vn.f, y1 = {}.toString, W_ = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [], w1 = function(t) {
  try {
    return G_(t);
  } catch {
    return W_.slice();
  }
};
zl.f = function(e) {
  return W_ && y1.call(e) == "[object Window]" ? w1(e) : G_(b1(e));
};
var mt = {}, k1 = yr, S1 = Bn, x1 = ft, E1 = hn, $1 = ut, C1 = N_, xd = Object.getOwnPropertyDescriptor;
mt.f = be ? xd : function(e, n) {
  if (e = x1(e), n = E1(n, !0), C1)
    try {
      return xd(e, n);
    } catch {
    }
  if ($1(e, n))
    return S1(!k1.f.call(e, n), e[n]);
};
var gs = ee, xe = ut, yu = be, Ae = R, Ed = et, I1 = pn.KEY, Hl = te, Vl = fs, Ul = br, T1 = zn, wo = fe, A1 = hs, O1 = H_, D1 = c1, P1 = vs, wu = re, F1 = ne, R1 = Ne, ms = ft, Gl = hn, ku = Bn, co = Un, K_ = zl, Z_ = mt, _s = yo, J_ = me, N1 = Vn, Y_ = Z_.f, $n = J_.f, X_ = K_.f, Ve = gs.Symbol, qi = gs.JSON, Po = qi && qi.stringify, rn = "prototype", ze = wo("_hidden"), $d = wo("toPrimitive"), M1 = {}.propertyIsEnumerable, Nr = Vl("symbol-registry"), Ut = Vl("symbols"), ko = Vl("op-symbols"), rt = Object[rn], wr = typeof Ve == "function" && !!_s.f, Xs = gs.QObject, Su = !Xs || !Xs[rn] || !Xs[rn].findChild, xu = yu && Hl(function() {
  return co($n({}, "a", {
    get: function() {
      return $n(this, "a", { value: 7 }).a;
    }
  })).a != 7;
}) ? function(t, e, n) {
  var r = Y_(rt, e);
  r && delete rt[e], $n(t, e, n), r && t !== rt && $n(rt, e, r);
} : $n, Cd = function(t) {
  var e = Ut[t] = co(Ve[rn]);
  return e._k = t, e;
}, Eu = wr && typeof Ve.iterator == "symbol" ? function(t) {
  return typeof t == "symbol";
} : function(t) {
  return t instanceof Ve;
}, bs = function(e, n, r) {
  return e === rt && bs(ko, n, r), wu(e), n = Gl(n, !0), wu(r), xe(Ut, n) ? (r.enumerable ? (xe(e, ze) && e[ze][n] && (e[ze][n] = !1), r = co(r, { enumerable: ku(0, !1) })) : (xe(e, ze) || $n(e, ze, ku(1, {})), e[ze][n] = !0), xu(e, n, r)) : $n(e, n, r);
}, Q_ = function(e, n) {
  wu(e);
  for (var r = D1(n = ms(n)), o = 0, i = r.length, s; i > o; )
    bs(e, s = r[o++], n[s]);
  return e;
}, L1 = function(e, n) {
  return n === void 0 ? co(e) : Q_(co(e), n);
}, Id = function(e) {
  var n = M1.call(this, e = Gl(e, !0));
  return this === rt && xe(Ut, e) && !xe(ko, e) ? !1 : n || !xe(this, e) || !xe(Ut, e) || xe(this, ze) && this[ze][e] ? n : !0;
}, eb = function(e, n) {
  if (e = ms(e), n = Gl(n, !0), !(e === rt && xe(Ut, n) && !xe(ko, n))) {
    var r = Y_(e, n);
    return r && xe(Ut, n) && !(xe(e, ze) && e[ze][n]) && (r.enumerable = !0), r;
  }
}, tb = function(e) {
  for (var n = X_(ms(e)), r = [], o = 0, i; n.length > o; )
    !xe(Ut, i = n[o++]) && i != ze && i != I1 && r.push(i);
  return r;
}, nb = function(e) {
  for (var n = e === rt, r = X_(n ? ko : ms(e)), o = [], i = 0, s; r.length > i; )
    xe(Ut, s = r[i++]) && (!n || xe(rt, s)) && o.push(Ut[s]);
  return o;
};
wr || (Ve = function() {
  if (this instanceof Ve)
    throw TypeError("Symbol is not a constructor!");
  var e = T1(arguments.length > 0 ? arguments[0] : void 0), n = function(r) {
    this === rt && n.call(ko, r), xe(this, ze) && xe(this[ze], e) && (this[ze][e] = !1), xu(this, e, ku(1, r));
  };
  return yu && Su && xu(rt, e, { configurable: !0, set: n }), Cd(e);
}, Ed(Ve[rn], "toString", function() {
  return this._k;
}), Z_.f = eb, J_.f = bs, vn.f = K_.f = tb, yr.f = Id, _s.f = nb, yu && !q_ && Ed(rt, "propertyIsEnumerable", Id, !0), A1.f = function(t) {
  return Cd(wo(t));
});
Ae(Ae.G + Ae.W + Ae.F * !wr, { Symbol: Ve });
for (var Td = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(",")
), Ad = 0; Td.length > Ad; )
  wo(Td[Ad++]);
for (var Od = N1(wo.store), Dd = 0; Od.length > Dd; )
  O1(Od[Dd++]);
Ae(Ae.S + Ae.F * !wr, "Symbol", {
  // 19.4.2.1 Symbol.for(key)
  for: function(t) {
    return xe(Nr, t += "") ? Nr[t] : Nr[t] = Ve(t);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function(e) {
    if (!Eu(e))
      throw TypeError(e + " is not a symbol!");
    for (var n in Nr)
      if (Nr[n] === e)
        return n;
  },
  useSetter: function() {
    Su = !0;
  },
  useSimple: function() {
    Su = !1;
  }
});
Ae(Ae.S + Ae.F * !wr, "Object", {
  // 19.1.2.2 Object.create(O [, Properties])
  create: L1,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: bs,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: Q_,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: eb,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: tb,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: nb
});
var q1 = Hl(function() {
  _s.f(1);
});
Ae(Ae.S + Ae.F * q1, "Object", {
  getOwnPropertySymbols: function(e) {
    return _s.f(R1(e));
  }
});
qi && Ae(Ae.S + Ae.F * (!wr || Hl(function() {
  var t = Ve();
  return Po([t]) != "[null]" || Po({ a: t }) != "{}" || Po(Object(t)) != "{}";
})), "JSON", {
  stringify: function(e) {
    for (var n = [e], r = 1, o, i; arguments.length > r; )
      n.push(arguments[r++]);
    if (i = o = n[1], !(!F1(o) && e === void 0 || Eu(e)))
      return P1(o) || (o = function(s, a) {
        if (typeof i == "function" && (a = i.call(this, s, a)), !Eu(a))
          return a;
      }), n[1] = o, Po.apply(qi, n);
  }
});
Ve[rn][$d] || lt(Ve[rn], $d, Ve[rn].valueOf);
Ul(Ve, "Symbol");
Ul(Math, "Math", !0);
Ul(gs.JSON, "JSON", !0);
var Pd = R;
Pd(Pd.S, "Object", { create: Un });
var Qs = R;
Qs(Qs.S + Qs.F * !be, "Object", { defineProperty: me.f });
var ea = R;
ea(ea.S + ea.F * !be, "Object", { defineProperties: U_ });
var ta = R, j1 = Ee, B1 = te, At = function(t, e) {
  var n = (j1.Object || {})[t] || Object[t], r = {};
  r[t] = e(n), ta(ta.S + ta.F * B1(function() {
    n(1);
  }), "Object", r);
}, z1 = ft, H1 = mt.f;
At("getOwnPropertyDescriptor", function() {
  return function(e, n) {
    return H1(z1(e), n);
  };
});
var V1 = ut, U1 = Ne, Fd = ql("IE_PROTO"), G1 = Object.prototype, Gn = Object.getPrototypeOf || function(t) {
  return t = U1(t), V1(t, Fd) ? t[Fd] : typeof t.constructor == "function" && t instanceof t.constructor ? t.constructor.prototype : t instanceof Object ? G1 : null;
}, W1 = Ne, K1 = Gn;
At("getPrototypeOf", function() {
  return function(e) {
    return K1(W1(e));
  };
});
var Z1 = Ne, J1 = Vn;
At("keys", function() {
  return function(e) {
    return J1(Z1(e));
  };
});
At("getOwnPropertyNames", function() {
  return zl.f;
});
var Y1 = ne, X1 = pn.onFreeze;
At("freeze", function(t) {
  return function(n) {
    return t && Y1(n) ? t(X1(n)) : n;
  };
});
var Q1 = ne, eS = pn.onFreeze;
At("seal", function(t) {
  return function(n) {
    return t && Q1(n) ? t(eS(n)) : n;
  };
});
var tS = ne, nS = pn.onFreeze;
At("preventExtensions", function(t) {
  return function(n) {
    return t && tS(n) ? t(nS(n)) : n;
  };
});
var rS = ne;
At("isFrozen", function(t) {
  return function(n) {
    return rS(n) ? t ? t(n) : !1 : !0;
  };
});
var oS = ne;
At("isSealed", function(t) {
  return function(n) {
    return oS(n) ? t ? t(n) : !1 : !0;
  };
});
var iS = ne;
At("isExtensible", function(t) {
  return function(n) {
    return iS(n) ? t ? t(n) : !0 : !1;
  };
});
var sS = be, Rd = Vn, aS = yo, cS = yr, uS = Ne, lS = bo, Fo = Object.assign, rb = !Fo || te(function() {
  var t = {}, e = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
  return t[n] = 7, r.split("").forEach(function(o) {
    e[o] = o;
  }), Fo({}, t)[n] != 7 || Object.keys(Fo({}, e)).join("") != r;
}) ? function(e, n) {
  for (var r = uS(e), o = arguments.length, i = 1, s = aS.f, a = cS.f; o > i; )
    for (var c = lS(arguments[i++]), u = s ? Rd(c).concat(s(c)) : Rd(c), l = u.length, f = 0, d; l > f; )
      d = u[f++], (!sS || a.call(c, d)) && (r[d] = c[d]);
  return r;
} : Fo, na = R;
na(na.S + na.F, "Object", { assign: rb });
var ob = Object.is || function(e, n) {
  return e === n ? e !== 0 || 1 / e === 1 / n : e != e && n != n;
}, Nd = R;
Nd(Nd.S, "Object", { is: ob });
var fS = ne, dS = re, Md = function(t, e) {
  if (dS(t), !fS(e) && e !== null)
    throw TypeError(e + ": can't set as prototype!");
}, Wl = {
  set: Object.setPrototypeOf || ("__proto__" in {} ? (
    // eslint-disable-line
    function(t, e, n) {
      try {
        n = It(Function.call, mt.f(Object.prototype, "__proto__").set, 2), n(t, []), e = !(t instanceof Array);
      } catch {
        e = !0;
      }
      return function(o, i) {
        return Md(o, i), e ? o.__proto__ = i : n(o, i), o;
      };
    }({}, !1)
  ) : void 0),
  check: Md
}, Ld = R;
Ld(Ld.S, "Object", { setPrototypeOf: Wl.set });
var $u = Kt, hS = fe("toStringTag"), pS = $u(function() {
  return arguments;
}()) == "Arguments", vS = function(t, e) {
  try {
    return t[e];
  } catch {
  }
}, So = function(t) {
  var e, n, r;
  return t === void 0 ? "Undefined" : t === null ? "Null" : typeof (n = vS(e = Object(t), hS)) == "string" ? n : pS ? $u(e) : (r = $u(e)) == "Object" && typeof e.callee == "function" ? "Arguments" : r;
}, gS = So, ib = {};
ib[fe("toStringTag")] = "z";
ib + "" != "[object z]" && et(Object.prototype, "toString", function() {
  return "[object " + gS(this) + "]";
}, !0);
var sb = function(t, e, n) {
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
}, mS = Ct, _S = ne, bS = sb, qd = [].slice, ra = {}, yS = function(t, e, n) {
  if (!(e in ra)) {
    for (var r = [], o = 0; o < e; o++)
      r[o] = "a[" + o + "]";
    ra[e] = Function("F,a", "return new F(" + r.join(",") + ")");
  }
  return ra[e](t, n);
}, ab = Function.bind || function(e) {
  var n = mS(this), r = qd.call(arguments, 1), o = function() {
    var i = r.concat(qd.call(arguments));
    return this instanceof o ? yS(n, i.length, i) : bS(n, i, e);
  };
  return _S(n.prototype) && (o.prototype = n.prototype), o;
}, jd = R;
jd(jd.P, "Function", { bind: ab });
var wS = me.f, Bd = Function.prototype, kS = /^\s*function ([^ (]*)/, zd = "name";
zd in Bd || be && wS(Bd, zd, {
  configurable: !0,
  get: function() {
    try {
      return ("" + this).match(kS)[1];
    } catch {
      return "";
    }
  }
});
var Hd = ne, SS = Gn, Vd = fe("hasInstance"), Ud = Function.prototype;
Vd in Ud || me.f(Ud, Vd, { value: function(t) {
  if (typeof this != "function" || !Hd(t))
    return !1;
  if (!Hd(this.prototype))
    return t instanceof this;
  for (; t = SS(t); )
    if (this.prototype === t)
      return !0;
  return !1;
} });
var Kl = `	
\v\f\r   ᠎             　\u2028\u2029\uFEFF`, oa = R, xS = Zt, ES = te, Cu = Kl, ji = "[" + Cu + "]", Gd = "​", $S = RegExp("^" + ji + ji + "*"), CS = RegExp(ji + ji + "*$"), cb = function(t, e, n) {
  var r = {}, o = ES(function() {
    return !!Cu[t]() || Gd[t]() != Gd;
  }), i = r[t] = o ? e(IS) : Cu[t];
  n && (r[n] = i), oa(oa.P + oa.F * o, "String", r);
}, IS = cb.trim = function(t, e) {
  return t = String(xS(t)), e & 1 && (t = t.replace($S, "")), e & 2 && (t = t.replace(CS, "")), t;
}, kr = cb, Ro = ee.parseInt, TS = kr.trim, Wd = Kl, AS = /^[-+]?0[xX]/, ub = Ro(Wd + "08") !== 8 || Ro(Wd + "0x16") !== 22 ? function(e, n) {
  var r = TS(String(e), 3);
  return Ro(r, n >>> 0 || (AS.test(r) ? 16 : 10));
} : Ro, ia = R, Kd = ub;
ia(ia.G + ia.F * (parseInt != Kd), { parseInt: Kd });
var sa = ee.parseFloat, OS = kr.trim, lb = 1 / sa(Kl + "-0") !== -1 / 0 ? function(e) {
  var n = OS(String(e), 3), r = sa(n);
  return r === 0 && n.charAt(0) == "-" ? -0 : r;
} : sa, aa = R, Zd = lb;
aa(aa.G + aa.F * (parseFloat != Zd), { parseFloat: Zd });
var DS = ne, Jd = Wl.set, Zl = function(t, e, n) {
  var r = e.constructor, o;
  return r !== n && typeof r == "function" && (o = r.prototype) !== n.prototype && DS(o) && Jd && Jd(t, o), t;
}, fb = ee, Yd = ut, db = Kt, PS = Zl, FS = hn, RS = te, NS = vn.f, MS = mt.f, LS = me.f, qS = kr.trim, Bi = "Number", We = fb[Bi], No = We, $i = We.prototype, jS = db(Un($i)) == Bi, BS = "trim" in String.prototype, Xd = function(t) {
  var e = FS(t, !1);
  if (typeof e == "string" && e.length > 2) {
    e = BS ? e.trim() : qS(e, 3);
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
if (!We(" 0o1") || !We("0b1") || We("+0x1")) {
  We = function(e) {
    var n = arguments.length < 1 ? 0 : e, r = this;
    return r instanceof We && (jS ? RS(function() {
      $i.valueOf.call(r);
    }) : db(r) != Bi) ? PS(new No(Xd(n)), r, We) : Xd(n);
  };
  for (var Qd = be ? NS(No) : (
    // ES3:
    "MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(",")
  ), ca = 0, Mo; Qd.length > ca; ca++)
    Yd(No, Mo = Qd[ca]) && !Yd(We, Mo) && LS(We, Mo, MS(No, Mo));
  We.prototype = $i, $i.constructor = We, et(fb, Bi, We);
}
var zS = Kt, hb = function(t, e) {
  if (typeof t != "number" && zS(t) != "Number")
    throw TypeError(e);
  return +t;
}, HS = Tt, VS = Zt, Jl = function(e) {
  var n = String(VS(this)), r = "", o = HS(e);
  if (o < 0 || o == 1 / 0)
    throw RangeError("Count can't be negative");
  for (; o > 0; (o >>>= 1) && (n += n))
    o & 1 && (r += n);
  return r;
}, ua = R, US = Tt, GS = hb, Iu = Jl, eh = 1 .toFixed, pb = Math.floor, gr = [0, 0, 0, 0, 0, 0], th = "Number.toFixed: incorrect invocation!", Ci = "0", Jn = function(t, e) {
  for (var n = -1, r = e; ++n < 6; )
    r += t * gr[n], gr[n] = r % 1e7, r = pb(r / 1e7);
}, la = function(t) {
  for (var e = 6, n = 0; --e >= 0; )
    n += gr[e], gr[e] = pb(n / t), n = n % t * 1e7;
}, nh = function() {
  for (var t = 6, e = ""; --t >= 0; )
    if (e !== "" || t === 0 || gr[t] !== 0) {
      var n = String(gr[t]);
      e = e === "" ? n : e + Iu.call(Ci, 7 - n.length) + n;
    }
  return e;
}, ir = function(t, e, n) {
  return e === 0 ? n : e % 2 === 1 ? ir(t, e - 1, n * t) : ir(t * t, e / 2, n);
}, WS = function(t) {
  for (var e = 0, n = t; n >= 4096; )
    e += 12, n /= 4096;
  for (; n >= 2; )
    e += 1, n /= 2;
  return e;
};
ua(ua.P + ua.F * (!!eh && (8e-5.toFixed(3) !== "0.000" || 0.9.toFixed(0) !== "1" || 1.255.toFixed(2) !== "1.25" || 1000000000000000100 .toFixed(0) !== "1000000000000000128") || !te(function() {
  eh.call({});
})), "Number", {
  toFixed: function(e) {
    var n = GS(this, th), r = US(e), o = "", i = Ci, s, a, c, u;
    if (r < 0 || r > 20)
      throw RangeError(th);
    if (n != n)
      return "NaN";
    if (n <= -1e21 || n >= 1e21)
      return String(n);
    if (n < 0 && (o = "-", n = -n), n > 1e-21)
      if (s = WS(n * ir(2, 69, 1)) - 69, a = s < 0 ? n * ir(2, -s, 1) : n / ir(2, s, 1), a *= 4503599627370496, s = 52 - s, s > 0) {
        for (Jn(0, a), c = r; c >= 7; )
          Jn(1e7, 0), c -= 7;
        for (Jn(ir(10, c, 1), 0), c = s - 1; c >= 23; )
          la(1 << 23), c -= 23;
        la(1 << c), Jn(1, 1), la(2), i = nh();
      } else
        Jn(0, a), Jn(1 << -s, 0), i = nh() + Iu.call(Ci, r);
    return r > 0 ? (u = i.length, i = o + (u <= r ? "0." + Iu.call(Ci, r - u) + i : i.slice(0, u - r) + "." + i.slice(u - r))) : i = o + i, i;
  }
});
var fa = R, rh = te, KS = hb, Lo = 1 .toPrecision;
fa(fa.P + fa.F * (rh(function() {
  return Lo.call(1, void 0) !== "1";
}) || !rh(function() {
  Lo.call({});
})), "Number", {
  toPrecision: function(e) {
    var n = KS(this, "Number#toPrecision: incorrect invocation!");
    return e === void 0 ? Lo.call(n) : Lo.call(n, e);
  }
});
var oh = R;
oh(oh.S, "Number", { EPSILON: Math.pow(2, -52) });
var ih = R, ZS = ee.isFinite;
ih(ih.S, "Number", {
  isFinite: function(e) {
    return typeof e == "number" && ZS(e);
  }
});
var JS = ne, YS = Math.floor, vb = function(e) {
  return !JS(e) && isFinite(e) && YS(e) === e;
}, sh = R;
sh(sh.S, "Number", { isInteger: vb });
var ah = R;
ah(ah.S, "Number", {
  isNaN: function(e) {
    return e != e;
  }
});
var ch = R, XS = vb, QS = Math.abs;
ch(ch.S, "Number", {
  isSafeInteger: function(e) {
    return XS(e) && QS(e) <= 9007199254740991;
  }
});
var uh = R;
uh(uh.S, "Number", { MAX_SAFE_INTEGER: 9007199254740991 });
var lh = R;
lh(lh.S, "Number", { MIN_SAFE_INTEGER: -9007199254740991 });
var da = R, fh = lb;
da(da.S + da.F * (Number.parseFloat != fh), "Number", { parseFloat: fh });
var ha = R, dh = ub;
ha(ha.S + ha.F * (Number.parseInt != dh), "Number", { parseInt: dh });
var gb = Math.log1p || function(e) {
  return (e = +e) > -1e-8 && e < 1e-8 ? e - e * e / 2 : Math.log(1 + e);
}, pa = R, ex = gb, hh = Math.sqrt, va = Math.acosh;
pa(pa.S + pa.F * !(va && Math.floor(va(Number.MAX_VALUE)) == 710 && va(1 / 0) == 1 / 0), "Math", {
  acosh: function(e) {
    return (e = +e) < 1 ? NaN : e > 9490626562425156e-8 ? Math.log(e) + Math.LN2 : ex(e - 1 + hh(e - 1) * hh(e + 1));
  }
});
var ga = R, ph = Math.asinh;
function mb(t) {
  return !isFinite(t = +t) || t == 0 ? t : t < 0 ? -mb(-t) : Math.log(t + Math.sqrt(t * t + 1));
}
ga(ga.S + ga.F * !(ph && 1 / ph(0) > 0), "Math", { asinh: mb });
var ma = R, vh = Math.atanh;
ma(ma.S + ma.F * !(vh && 1 / vh(-0) < 0), "Math", {
  atanh: function(e) {
    return (e = +e) == 0 ? e : Math.log((1 + e) / (1 - e)) / 2;
  }
});
var Yl = Math.sign || function(e) {
  return (e = +e) == 0 || e != e ? e : e < 0 ? -1 : 1;
}, gh = R, tx = Yl;
gh(gh.S, "Math", {
  cbrt: function(e) {
    return tx(e = +e) * Math.pow(Math.abs(e), 1 / 3);
  }
});
var mh = R;
mh(mh.S, "Math", {
  clz32: function(e) {
    return (e >>>= 0) ? 31 - Math.floor(Math.log(e + 0.5) * Math.LOG2E) : 32;
  }
});
var _h = R, bh = Math.exp;
_h(_h.S, "Math", {
  cosh: function(e) {
    return (bh(e = +e) + bh(-e)) / 2;
  }
});
var Mr = Math.expm1, Xl = !Mr || Mr(10) > 22025.465794806718 || Mr(10) < 22025.465794806718 || Mr(-2e-17) != -2e-17 ? function(e) {
  return (e = +e) == 0 ? e : e > -1e-6 && e < 1e-6 ? e + e * e / 2 : Math.exp(e) - 1;
} : Mr, _a = R, yh = Xl;
_a(_a.S + _a.F * (yh != Math.expm1), "Math", { expm1: yh });
var ba, wh;
function nx() {
  if (wh)
    return ba;
  wh = 1;
  var t = Yl, e = Math.pow, n = e(2, -52), r = e(2, -23), o = e(2, 127) * (2 - r), i = e(2, -126), s = function(a) {
    return a + 1 / n - 1 / n;
  };
  return ba = Math.fround || function(c) {
    var u = Math.abs(c), l = t(c), f, d;
    return u < i ? l * s(u / i / r) * i * r : (f = (1 + r / n) * u, d = f - (f - u), d > o || d != d ? l * (1 / 0) : l * d);
  }, ba;
}
var kh = R;
kh(kh.S, "Math", { fround: nx() });
var Sh = R, rx = Math.abs;
Sh(Sh.S, "Math", {
  hypot: function(e, n) {
    for (var r = 0, o = 0, i = arguments.length, s = 0, a, c; o < i; )
      a = rx(arguments[o++]), s < a ? (c = s / a, r = r * c * c + 1, s = a) : a > 0 ? (c = a / s, r += c * c) : r += a;
    return s === 1 / 0 ? 1 / 0 : s * Math.sqrt(r);
  }
});
var ya = R, xh = Math.imul;
ya(ya.S + ya.F * te(function() {
  return xh(4294967295, 5) != -5 || xh.length != 2;
}), "Math", {
  imul: function(e, n) {
    var r = 65535, o = +e, i = +n, s = r & o, a = r & i;
    return 0 | s * a + ((r & o >>> 16) * a + s * (r & i >>> 16) << 16 >>> 0);
  }
});
var Eh = R;
Eh(Eh.S, "Math", {
  log10: function(e) {
    return Math.log(e) * Math.LOG10E;
  }
});
var $h = R;
$h($h.S, "Math", { log1p: gb });
var Ch = R;
Ch(Ch.S, "Math", {
  log2: function(e) {
    return Math.log(e) / Math.LN2;
  }
});
var Ih = R;
Ih(Ih.S, "Math", { sign: Yl });
var wa = R, Th = Xl, Ah = Math.exp;
wa(wa.S + wa.F * te(function() {
  return !Math.sinh(-2e-17) != -2e-17;
}), "Math", {
  sinh: function(e) {
    return Math.abs(e = +e) < 1 ? (Th(e) - Th(-e)) / 2 : (Ah(e - 1) - Ah(-e - 1)) * (Math.E / 2);
  }
});
var Oh = R, Dh = Xl, Ph = Math.exp;
Oh(Oh.S, "Math", {
  tanh: function(e) {
    var n = Dh(e = +e), r = Dh(-e);
    return n == 1 / 0 ? 1 : r == 1 / 0 ? -1 : (n - r) / (Ph(e) + Ph(-e));
  }
});
var Fh = R;
Fh(Fh.S, "Math", {
  trunc: function(e) {
    return (e > 0 ? Math.floor : Math.ceil)(e);
  }
});
var ka = R, ox = Hn, Rh = String.fromCharCode, Nh = String.fromCodePoint;
ka(ka.S + ka.F * (!!Nh && Nh.length != 1), "String", {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function(e) {
    for (var n = [], r = arguments.length, o = 0, i; r > o; ) {
      if (i = +arguments[o++], ox(i, 1114111) !== i)
        throw RangeError(i + " is not a valid code point");
      n.push(
        i < 65536 ? Rh(i) : Rh(((i -= 65536) >> 10) + 55296, i % 1024 + 56320)
      );
    }
    return n.join("");
  }
});
var Mh = R, ix = ft, sx = he;
Mh(Mh.S, "String", {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function(e) {
    for (var n = ix(e.raw), r = sx(n.length), o = arguments.length, i = [], s = 0; r > s; )
      i.push(String(n[s++])), s < o && i.push(String(arguments[s]));
    return i.join("");
  }
});
kr("trim", function(t) {
  return function() {
    return t(this, 3);
  };
});
var ax = Tt, cx = Zt, Ql = function(t) {
  return function(e, n) {
    var r = String(cx(e)), o = ax(n), i = r.length, s, a;
    return o < 0 || o >= i ? t ? "" : void 0 : (s = r.charCodeAt(o), s < 55296 || s > 56319 || o + 1 === i || (a = r.charCodeAt(o + 1)) < 56320 || a > 57343 ? t ? r.charAt(o) : s : t ? r.slice(o, o + 2) : (s - 55296 << 10) + (a - 56320) + 65536);
  };
}, Sr = {}, ux = Un, lx = Bn, fx = br, _b = {};
lt(_b, fe("iterator"), function() {
  return this;
});
var bb = function(t, e, n) {
  t.prototype = ux(_b, { next: lx(1, n) }), fx(t, e + " Iterator");
}, Sa = R, dx = et, Lh = lt, qh = Sr, hx = bb, px = br, vx = Gn, Lr = fe("iterator"), xa = !([].keys && "next" in [].keys()), gx = "@@iterator", jh = "keys", qo = "values", Bh = function() {
  return this;
}, ef = function(t, e, n, r, o, i, s) {
  hx(n, e, r);
  var a = function(y) {
    if (!xa && y in f)
      return f[y];
    switch (y) {
      case jh:
        return function() {
          return new n(this, y);
        };
      case qo:
        return function() {
          return new n(this, y);
        };
    }
    return function() {
      return new n(this, y);
    };
  }, c = e + " Iterator", u = o == qo, l = !1, f = t.prototype, d = f[Lr] || f[gx] || o && f[o], h = d || a(o), w = o ? u ? a("entries") : h : void 0, m = e == "Array" && f.entries || d, g, v, k;
  if (m && (k = vx(m.call(new t())), k !== Object.prototype && k.next && (px(k, c, !0), typeof k[Lr] != "function" && Lh(k, Lr, Bh))), u && d && d.name !== qo && (l = !0, h = function() {
    return d.call(this);
  }), (xa || l || !f[Lr]) && Lh(f, Lr, h), qh[e] = h, qh[c] = Bh, o)
    if (g = {
      values: u ? h : a(qo),
      keys: i ? h : a(jh),
      entries: w
    }, s)
      for (v in g)
        v in f || dx(f, v, g[v]);
    else
      Sa(Sa.P + Sa.F * (xa || l), e, g);
  return g;
}, mx = Ql(!0);
ef(String, "String", function(t) {
  this._t = String(t), this._i = 0;
}, function() {
  var t = this._t, e = this._i, n;
  return e >= t.length ? { value: void 0, done: !0 } : (n = mx(t, e), this._i += n.length, { value: n, done: !1 });
});
var zh = R, _x = Ql(!1);
zh(zh.P, "String", {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function(e) {
    return _x(this, e);
  }
});
var bx = ne, yx = Kt, wx = fe("match"), tf = function(t) {
  var e;
  return bx(t) && ((e = t[wx]) !== void 0 ? !!e : yx(t) == "RegExp");
}, kx = tf, Sx = Zt, nf = function(t, e, n) {
  if (kx(e))
    throw TypeError("String#" + n + " doesn't accept regex!");
  return String(Sx(t));
}, Ea, Hh;
function rf() {
  if (Hh)
    return Ea;
  Hh = 1;
  var t = fe("match");
  return Ea = function(e) {
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
  }, Ea;
}
var $a = R, Vh = he, xx = nf, Tu = "endsWith", Uh = ""[Tu];
$a($a.P + $a.F * rf()(Tu), "String", {
  endsWith: function(e) {
    var n = xx(this, e, Tu), r = arguments.length > 1 ? arguments[1] : void 0, o = Vh(n.length), i = r === void 0 ? o : Math.min(Vh(r), o), s = String(e);
    return Uh ? Uh.call(n, s, i) : n.slice(i - s.length, i) === s;
  }
});
var Ca = R, Ex = nf, Gh = "includes";
Ca(Ca.P + Ca.F * rf()(Gh), "String", {
  includes: function(e) {
    return !!~Ex(this, e, Gh).indexOf(e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
var Wh = R;
Wh(Wh.P, "String", {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: Jl
});
var Ia = R, $x = he, Cx = nf, Au = "startsWith", Kh = ""[Au];
Ia(Ia.P + Ia.F * rf()(Au), "String", {
  startsWith: function(e) {
    var n = Cx(this, e, Au), r = $x(Math.min(arguments.length > 1 ? arguments[1] : void 0, n.length)), o = String(e);
    return Kh ? Kh.call(n, o, r) : n.slice(r, r + o.length) === o;
  }
});
var Ta = R, Ix = te, Tx = Zt, Ax = /"/g, Ox = function(t, e, n, r) {
  var o = String(Tx(t)), i = "<" + e;
  return n !== "" && (i += " " + n + '="' + String(r).replace(Ax, "&quot;") + '"'), i + ">" + o + "</" + e + ">";
}, tt = function(t, e) {
  var n = {};
  n[t] = e(Ox), Ta(Ta.P + Ta.F * Ix(function() {
    var r = ""[t]('"');
    return r !== r.toLowerCase() || r.split('"').length > 3;
  }), "String", n);
};
tt("anchor", function(t) {
  return function(n) {
    return t(this, "a", "name", n);
  };
});
tt("big", function(t) {
  return function() {
    return t(this, "big", "", "");
  };
});
tt("blink", function(t) {
  return function() {
    return t(this, "blink", "", "");
  };
});
tt("bold", function(t) {
  return function() {
    return t(this, "b", "", "");
  };
});
tt("fixed", function(t) {
  return function() {
    return t(this, "tt", "", "");
  };
});
tt("fontcolor", function(t) {
  return function(n) {
    return t(this, "font", "color", n);
  };
});
tt("fontsize", function(t) {
  return function(n) {
    return t(this, "font", "size", n);
  };
});
tt("italics", function(t) {
  return function() {
    return t(this, "i", "", "");
  };
});
tt("link", function(t) {
  return function(n) {
    return t(this, "a", "href", n);
  };
});
tt("small", function(t) {
  return function() {
    return t(this, "small", "", "");
  };
});
tt("strike", function(t) {
  return function() {
    return t(this, "strike", "", "");
  };
});
tt("sub", function(t) {
  return function() {
    return t(this, "sub", "", "");
  };
});
tt("sup", function(t) {
  return function() {
    return t(this, "sup", "", "");
  };
});
var Zh = R;
Zh(Zh.S, "Date", { now: function() {
  return (/* @__PURE__ */ new Date()).getTime();
} });
var Aa = R, Dx = Ne, Px = hn;
Aa(Aa.P + Aa.F * te(function() {
  return (/* @__PURE__ */ new Date(NaN)).toJSON() !== null || Date.prototype.toJSON.call({ toISOString: function() {
    return 1;
  } }) !== 1;
}), "Date", {
  // eslint-disable-next-line no-unused-vars
  toJSON: function(e) {
    var n = Dx(this), r = Px(n);
    return typeof r == "number" && !isFinite(r) ? null : n.toISOString();
  }
});
var Jh = te, Fx = Date.prototype.getTime, Oa = Date.prototype.toISOString, Yn = function(t) {
  return t > 9 ? t : "0" + t;
}, Rx = Jh(function() {
  return Oa.call(new Date(-5e13 - 1)) != "0385-07-25T07:06:39.999Z";
}) || !Jh(function() {
  Oa.call(/* @__PURE__ */ new Date(NaN));
}) ? function() {
  if (!isFinite(Fx.call(this)))
    throw RangeError("Invalid time value");
  var e = this, n = e.getUTCFullYear(), r = e.getUTCMilliseconds(), o = n < 0 ? "-" : n > 9999 ? "+" : "";
  return o + ("00000" + Math.abs(n)).slice(o ? -6 : -4) + "-" + Yn(e.getUTCMonth() + 1) + "-" + Yn(e.getUTCDate()) + "T" + Yn(e.getUTCHours()) + ":" + Yn(e.getUTCMinutes()) + ":" + Yn(e.getUTCSeconds()) + "." + (r > 99 ? r : "0" + Yn(r)) + "Z";
} : Oa, Da = R, Yh = Rx;
Da(Da.P + Da.F * (Date.prototype.toISOString !== Yh), "Date", {
  toISOString: Yh
});
var of = Date.prototype, Xh = "Invalid Date", yb = "toString", Nx = of[yb], Mx = of.getTime;
/* @__PURE__ */ new Date(NaN) + "" != Xh && et(of, yb, function() {
  var e = Mx.call(this);
  return e === e ? Nx.call(this) : Xh;
});
var Pa, Qh;
function Lx() {
  if (Qh)
    return Pa;
  Qh = 1;
  var t = re, e = hn, n = "number";
  return Pa = function(r) {
    if (r !== "string" && r !== n && r !== "default")
      throw TypeError("Incorrect hint");
    return e(t(this), r != n);
  }, Pa;
}
var ep = fe("toPrimitive"), tp = Date.prototype;
ep in tp || lt(tp, ep, Lx());
var np = R;
np(np.S, "Array", { isArray: vs });
var rp = re, wb = function(t, e, n, r) {
  try {
    return r ? e(rp(n)[0], n[1]) : e(n);
  } catch (i) {
    var o = t.return;
    throw o !== void 0 && rp(o.call(t)), i;
  }
}, qx = Sr, jx = fe("iterator"), Bx = Array.prototype, sf = function(t) {
  return t !== void 0 && (qx.Array === t || Bx[jx] === t);
}, zx = me, Hx = Bn, af = function(t, e, n) {
  e in t ? zx.f(t, e, Hx(0, n)) : t[e] = n;
}, Vx = So, Ux = fe("iterator"), Gx = Sr, cf = Ee.getIteratorMethod = function(t) {
  if (t != null)
    return t[Ux] || t["@@iterator"] || Gx[Vx(t)];
}, Fa, op;
function ys() {
  if (op)
    return Fa;
  op = 1;
  var t = fe("iterator"), e = !1;
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
var Wx = It, Ra = R, Kx = Ne, Zx = wb, Jx = sf, Yx = he, ip = af, Xx = cf;
Ra(Ra.S + Ra.F * !ys()(function(t) {
  Array.from(t);
}), "Array", {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function(e) {
    var n = Kx(e), r = typeof this == "function" ? this : Array, o = arguments.length, i = o > 1 ? arguments[1] : void 0, s = i !== void 0, a = 0, c = Xx(n), u, l, f, d;
    if (s && (i = Wx(i, o > 2 ? arguments[2] : void 0, 2)), c != null && !(r == Array && Jx(c)))
      for (d = c.call(n), l = new r(); !(f = d.next()).done; a++)
        ip(l, a, s ? Zx(d, i, [f.value, a], !0) : f.value);
    else
      for (u = Yx(n.length), l = new r(u); u > a; a++)
        ip(l, a, s ? i(n[a], a) : n[a]);
    return l.length = a, l;
  }
});
var Na = R, Qx = af;
Na(Na.S + Na.F * te(function() {
  function t() {
  }
  return !(Array.of.call(t) instanceof t);
}), "Array", {
  // 22.1.2.3 Array.of( ...items)
  of: function() {
    for (var e = 0, n = arguments.length, r = new (typeof this == "function" ? this : Array)(n); n > e; )
      Qx(r, e, arguments[e++]);
    return r.length = n, r;
  }
});
var eE = te, _t = function(t, e) {
  return !!t && eE(function() {
    e ? t.call(null, function() {
    }, 1) : t.call(null);
  });
}, Ma = R, tE = ft, sp = [].join;
Ma(Ma.P + Ma.F * (bo != Object || !_t(sp)), "Array", {
  join: function(e) {
    return sp.call(tE(this), e === void 0 ? "," : e);
  }
});
var La = R, ap = Bl, nE = Kt, cp = Hn, up = he, lp = [].slice;
La(La.P + La.F * te(function() {
  ap && lp.call(ap);
}), "Array", {
  slice: function(e, n) {
    var r = up(this.length), o = nE(this);
    if (n = n === void 0 ? r : n, o == "Array")
      return lp.call(this, e, n);
    for (var i = cp(e, r), s = cp(n, r), a = up(s - i), c = new Array(a), u = 0; u < a; u++)
      c[u] = o == "String" ? this.charAt(i + u) : this[i + u];
    return c;
  }
});
var qa = R, rE = Ct, fp = Ne, dp = te, ja = [].sort, hp = [1, 2, 3];
qa(qa.P + qa.F * (dp(function() {
  hp.sort(void 0);
}) || !dp(function() {
  hp.sort(null);
}) || !_t(ja)), "Array", {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function(e) {
    return e === void 0 ? ja.call(fp(this)) : ja.call(fp(this), rE(e));
  }
});
var oE = ne, pp = vs, iE = fe("species"), sE = function(t) {
  var e;
  return pp(t) && (e = t.constructor, typeof e == "function" && (e === Array || pp(e.prototype)) && (e = void 0), oE(e) && (e = e[iE], e === null && (e = void 0))), e === void 0 ? Array : e;
}, aE = sE, kb = function(t, e) {
  return new (aE(t))(e);
}, cE = It, uE = bo, lE = Ne, fE = he, dE = kb, Ot = function(t, e) {
  var n = t == 1, r = t == 2, o = t == 3, i = t == 4, s = t == 6, a = t == 5 || s, c = e || dE;
  return function(u, l, f) {
    for (var d = lE(u), h = uE(d), w = cE(l, f, 3), m = fE(h.length), g = 0, v = n ? c(u, m) : r ? c(u, 0) : void 0, k, y; m > g; g++)
      if ((a || g in h) && (k = h[g], y = w(k, g, d), t)) {
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
}, Ba = R, hE = Ot(0), pE = _t([].forEach, !0);
Ba(Ba.P + Ba.F * !pE, "Array", {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function(e) {
    return hE(this, e, arguments[1]);
  }
});
var za = R, vE = Ot(1);
za(za.P + za.F * !_t([].map, !0), "Array", {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function(e) {
    return vE(this, e, arguments[1]);
  }
});
var Ha = R, gE = Ot(2);
Ha(Ha.P + Ha.F * !_t([].filter, !0), "Array", {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function(e) {
    return gE(this, e, arguments[1]);
  }
});
var Va = R, mE = Ot(3);
Va(Va.P + Va.F * !_t([].some, !0), "Array", {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function(e) {
    return mE(this, e, arguments[1]);
  }
});
var Ua = R, _E = Ot(4);
Ua(Ua.P + Ua.F * !_t([].every, !0), "Array", {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function(e) {
    return _E(this, e, arguments[1]);
  }
});
var bE = Ct, yE = Ne, wE = bo, kE = he, Sb = function(t, e, n, r, o) {
  bE(e);
  var i = yE(t), s = wE(i), a = kE(i.length), c = o ? a - 1 : 0, u = o ? -1 : 1;
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
}, Ga = R, SE = Sb;
Ga(Ga.P + Ga.F * !_t([].reduce, !0), "Array", {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function(e) {
    return SE(this, e, arguments.length, arguments[1], !1);
  }
});
var Wa = R, xE = Sb;
Wa(Wa.P + Wa.F * !_t([].reduceRight, !0), "Array", {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function(e) {
    return xE(this, e, arguments.length, arguments[1], !0);
  }
});
var Ka = R, EE = ps(!1), Ou = [].indexOf, vp = !!Ou && 1 / [1].indexOf(1, -0) < 0;
Ka(Ka.P + Ka.F * (vp || !_t(Ou)), "Array", {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function(e) {
    return vp ? Ou.apply(this, arguments) || 0 : EE(this, e, arguments[1]);
  }
});
var Za = R, $E = ft, CE = Tt, IE = he, Du = [].lastIndexOf, gp = !!Du && 1 / [1].lastIndexOf(1, -0) < 0;
Za(Za.P + Za.F * (gp || !_t(Du)), "Array", {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function(e) {
    if (gp)
      return Du.apply(this, arguments) || 0;
    var n = $E(this), r = IE(n.length), o = r - 1;
    for (arguments.length > 1 && (o = Math.min(o, CE(arguments[1]))), o < 0 && (o = r + o); o >= 0; o--)
      if (o in n && n[o] === e)
        return o || 0;
    return -1;
  }
});
var Ja, mp;
function xb() {
  if (mp)
    return Ja;
  mp = 1;
  var t = Ne, e = Hn, n = he;
  return Ja = [].copyWithin || function(o, i) {
    var s = t(this), a = n(s.length), c = e(o, a), u = e(i, a), l = arguments.length > 2 ? arguments[2] : void 0, f = Math.min((l === void 0 ? a : e(l, a)) - u, a - c), d = 1;
    for (u < c && c < u + f && (d = -1, u += f - 1, c += f - 1); f-- > 0; )
      u in s ? s[c] = s[u] : delete s[c], c += d, u += d;
    return s;
  }, Ja;
}
var Pu = fe("unscopables"), Fu = Array.prototype;
Fu[Pu] == null && lt(Fu, Pu, {});
var Wn = function(t) {
  Fu[Pu][t] = !0;
}, _p = R;
_p(_p.P, "Array", { copyWithin: xb() });
Wn("copyWithin");
var Ya, bp;
function uf() {
  if (bp)
    return Ya;
  bp = 1;
  var t = Ne, e = Hn, n = he;
  return Ya = function(o) {
    for (var i = t(this), s = n(i.length), a = arguments.length, c = e(a > 1 ? arguments[1] : void 0, s), u = a > 2 ? arguments[2] : void 0, l = u === void 0 ? s : e(u, s); l > c; )
      i[c++] = o;
    return i;
  }, Ya;
}
var yp = R;
yp(yp.P, "Array", { fill: uf() });
Wn("fill");
var Xa = R, TE = Ot(5), Ru = "find", Eb = !0;
Ru in [] && Array(1)[Ru](function() {
  Eb = !1;
});
Xa(Xa.P + Xa.F * Eb, "Array", {
  find: function(e) {
    return TE(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
Wn(Ru);
var Qa = R, AE = Ot(6), Nu = "findIndex", $b = !0;
Nu in [] && Array(1)[Nu](function() {
  $b = !1;
});
Qa(Qa.P + Qa.F * $b, "Array", {
  findIndex: function(e) {
    return AE(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
Wn(Nu);
var OE = ee, DE = me, PE = be, wp = fe("species"), xr = function(t) {
  var e = OE[t];
  PE && e && !e[wp] && DE.f(e, wp, {
    configurable: !0,
    get: function() {
      return this;
    }
  });
};
xr("Array");
var Cb = function(t, e) {
  return { value: e, done: !!t };
}, lf = Wn, jo = Cb, kp = Sr, FE = ft, Ib = ef(Array, "Array", function(t, e) {
  this._t = FE(t), this._i = 0, this._k = e;
}, function() {
  var t = this._t, e = this._k, n = this._i++;
  return !t || n >= t.length ? (this._t = void 0, jo(1)) : e == "keys" ? jo(0, n) : e == "values" ? jo(0, t[n]) : jo(0, [n, t[n]]);
}, "values");
kp.Arguments = kp.Array;
lf("keys");
lf("values");
lf("entries");
var RE = re, ws = function() {
  var t = RE(this), e = "";
  return t.global && (e += "g"), t.ignoreCase && (e += "i"), t.multiline && (e += "m"), t.unicode && (e += "u"), t.sticky && (e += "y"), e;
}, Tb = ee, NE = Zl, ME = me.f, LE = vn.f, qE = tf, jE = ws, Ie = Tb.RegExp, qr = Ie, ec = Ie.prototype, no = /a/g, tc = /a/g, Sp = new Ie(no) !== no;
if (be && (!Sp || te(function() {
  return tc[fe("match")] = !1, Ie(no) != no || Ie(tc) == tc || Ie(no, "i") != "/a/i";
}))) {
  Ie = function(e, n) {
    var r = this instanceof Ie, o = qE(e), i = n === void 0;
    return !r && o && e.constructor === Ie && i ? e : NE(
      Sp ? new qr(o && !i ? e.source : e, n) : qr((o = e instanceof Ie) ? e.source : e, o && i ? jE.call(e) : n),
      r ? this : ec,
      Ie
    );
  };
  for (var BE = function(t) {
    t in Ie || ME(Ie, t, {
      configurable: !0,
      get: function() {
        return qr[t];
      },
      set: function(e) {
        qr[t] = e;
      }
    });
  }, xp = LE(qr), Ep = 0; xp.length > Ep; )
    BE(xp[Ep++]);
  ec.constructor = Ie, Ie.prototype = ec, et(Tb, "RegExp", Ie);
}
xr("RegExp");
var zE = ws, zi = RegExp.prototype.exec, HE = String.prototype.replace, Ab = zi, Hi = "lastIndex", Mu = function() {
  var t = /a/, e = /b*/g;
  return zi.call(t, "a"), zi.call(e, "a"), t[Hi] !== 0 || e[Hi] !== 0;
}(), Lu = /()??/.exec("")[1] !== void 0, VE = Mu || Lu;
VE && (Ab = function(e) {
  var n = this, r, o, i, s;
  return Lu && (o = new RegExp("^" + n.source + "$(?!\\s)", zE.call(n))), Mu && (r = n[Hi]), i = zi.call(n, e), Mu && i && (n[Hi] = n.global ? i.index + i[0].length : r), Lu && i && i.length > 1 && HE.call(i[0], o, function() {
    for (s = 1; s < arguments.length - 2; s++)
      arguments[s] === void 0 && (i[s] = void 0);
  }), i;
});
var ff = Ab, $p = ff;
R({
  target: "RegExp",
  proto: !0,
  forced: $p !== /./.exec
}, {
  exec: $p
});
be && /./g.flags != "g" && me.f(RegExp.prototype, "flags", {
  configurable: !0,
  get: ws
});
var UE = re, GE = ws, WE = be, df = "toString", nc = /./[df], Cp = function(t) {
  et(RegExp.prototype, df, t, !0);
};
te(function() {
  return nc.call({ source: "a", flags: "b" }) != "/a/b";
}) ? Cp(function() {
  var e = UE(this);
  return "/".concat(
    e.source,
    "/",
    "flags" in e ? e.flags : !WE && e instanceof RegExp ? GE.call(e) : void 0
  );
}) : nc.name != df && Cp(function() {
  return nc.call(this);
});
var KE = Ql(!0), hf = function(t, e, n) {
  return e + (n ? KE(t, e).length : 1);
}, ZE = So, JE = RegExp.prototype.exec, ks = function(t, e) {
  var n = t.exec;
  if (typeof n == "function") {
    var r = n.call(t, e);
    if (typeof r != "object")
      throw new TypeError("RegExp exec method returned something other than an Object or null");
    return r;
  }
  if (ZE(t) !== "RegExp")
    throw new TypeError("RegExp#exec called on incompatible receiver");
  return JE.call(t, e);
}, YE = et, XE = lt, qu = te, QE = Zt, Ob = fe, e$ = ff, t$ = Ob("species"), n$ = !qu(function() {
  var t = /./;
  return t.exec = function() {
    var e = [];
    return e.groups = { a: "7" }, e;
  }, "".replace(t, "$<a>") !== "7";
}), r$ = function() {
  var t = /(?:)/, e = t.exec;
  t.exec = function() {
    return e.apply(this, arguments);
  };
  var n = "ab".split(t);
  return n.length === 2 && n[0] === "a" && n[1] === "b";
}(), Ss = function(t, e, n) {
  var r = Ob(t), o = !qu(function() {
    var l = {};
    return l[r] = function() {
      return 7;
    }, ""[t](l) != 7;
  }), i = o ? !qu(function() {
    var l = !1, f = /a/;
    return f.exec = function() {
      return l = !0, null;
    }, t === "split" && (f.constructor = {}, f.constructor[t$] = function() {
      return f;
    }), f[r](""), !l;
  }) : void 0;
  if (!o || !i || t === "replace" && !n$ || t === "split" && !r$) {
    var s = /./[r], a = n(
      QE,
      r,
      ""[t],
      function(f, d, h, w, m) {
        return d.exec === e$ ? o && !m ? { done: !0, value: s.call(d, h, w) } : { done: !0, value: f.call(h, d, w) } : { done: !1 };
      }
    ), c = a[0], u = a[1];
    YE(String.prototype, t, c), XE(
      RegExp.prototype,
      r,
      e == 2 ? function(l, f) {
        return u.call(l, this, f);
      } : function(l) {
        return u.call(l, this);
      }
    );
  }
}, o$ = re, i$ = he, s$ = hf, Ip = ks;
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
      var s = o$(o), a = String(this);
      if (!s.global)
        return Ip(s, a);
      var c = s.unicode;
      s.lastIndex = 0;
      for (var u = [], l = 0, f; (f = Ip(s, a)) !== null; ) {
        var d = String(f[0]);
        u[l] = d, d === "" && (s.lastIndex = s$(a, i$(s.lastIndex), c)), l++;
      }
      return l === 0 ? null : u;
    }
  ];
});
var a$ = re, c$ = Ne, u$ = he, l$ = Tt, f$ = hf, d$ = ks, h$ = Math.max, p$ = Math.min, v$ = Math.floor, g$ = /\$([$&`']|\d\d?|<[^>]*>)/g, m$ = /\$([$&`']|\d\d?)/g, _$ = function(t) {
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
      var c = a$(i), u = String(this), l = typeof s == "function";
      l || (s = String(s));
      var f = c.global;
      if (f) {
        var d = c.unicode;
        c.lastIndex = 0;
      }
      for (var h = []; ; ) {
        var w = d$(c, u);
        if (w === null || (h.push(w), !f))
          break;
        var m = String(w[0]);
        m === "" && (c.lastIndex = f$(u, u$(c.lastIndex), d));
      }
      for (var g = "", v = 0, k = 0; k < h.length; k++) {
        w = h[k];
        for (var y = String(w[0]), x = h$(p$(l$(w.index), u.length), 0), F = [], A = 1; A < w.length; A++)
          F.push(_$(w[A]));
        var T = w.groups;
        if (l) {
          var D = [y].concat(F, x, u);
          T !== void 0 && D.push(T);
          var H = String(s.apply(void 0, D));
        } else
          H = o(y, u, x, F, T, s);
        x >= v && (g += u.slice(v, x) + H, v = x + y.length);
      }
      return g + u.slice(v);
    }
  ];
  function o(i, s, a, c, u, l) {
    var f = a + i.length, d = c.length, h = m$;
    return u !== void 0 && (u = c$(u), h = g$), n.call(l, h, function(w, m) {
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
            return w;
          if (v > d) {
            var k = v$(v / 10);
            return k === 0 ? w : k <= d ? c[k - 1] === void 0 ? m.charAt(1) : c[k - 1] + m.charAt(1) : w;
          }
          g = c[v - 1];
      }
      return g === void 0 ? "" : g;
    });
  }
});
var b$ = re, Tp = ob, y$ = ks;
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
      var s = b$(o), a = String(this), c = s.lastIndex;
      Tp(c, 0) || (s.lastIndex = 0);
      var u = y$(s, a);
      return Tp(s.lastIndex, c) || (s.lastIndex = c), u === null ? -1 : u.index;
    }
  ];
});
var Ap = re, w$ = Ct, k$ = fe("species"), xo = function(t, e) {
  var n = Ap(t).constructor, r;
  return n === void 0 || (r = Ap(n)[k$]) == null ? e : w$(r);
}, S$ = tf, x$ = re, E$ = xo, $$ = hf, C$ = he, Op = ks, I$ = ff, T$ = te, A$ = Math.min, O$ = [].push, _n = "split", nt = "length", rc = "lastIndex", ju = 4294967295, jr = !T$(function() {
  RegExp(ju, "y");
});
Ss("split", 2, function(t, e, n, r) {
  var o;
  return "abbc"[_n](/(b)*/)[1] == "c" || "test"[_n](/(?:)/, -1)[nt] != 4 || "ab"[_n](/(?:ab)*/)[nt] != 2 || "."[_n](/(.?)(.?)/)[nt] != 4 || "."[_n](/()()/)[nt] > 1 || ""[_n](/.?/)[nt] ? o = function(i, s) {
    var a = String(this);
    if (i === void 0 && s === 0)
      return [];
    if (!S$(i))
      return n.call(a, i, s);
    for (var c = [], u = (i.ignoreCase ? "i" : "") + (i.multiline ? "m" : "") + (i.unicode ? "u" : "") + (i.sticky ? "y" : ""), l = 0, f = s === void 0 ? ju : s >>> 0, d = new RegExp(i.source, u + "g"), h, w, m; (h = I$.call(d, a)) && (w = d[rc], !(w > l && (c.push(a.slice(l, h.index)), h[nt] > 1 && h.index < a[nt] && O$.apply(c, h.slice(1)), m = h[0][nt], l = w, c[nt] >= f))); )
      d[rc] === h.index && d[rc]++;
    return l === a[nt] ? (m || !d.test("")) && c.push("") : c.push(a.slice(l)), c[nt] > f ? c.slice(0, f) : c;
  } : "0"[_n](void 0, 0)[nt] ? o = function(i, s) {
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
      var c = x$(i), u = String(this), l = E$(c, RegExp), f = c.unicode, d = (c.ignoreCase ? "i" : "") + (c.multiline ? "m" : "") + (c.unicode ? "u" : "") + (jr ? "y" : "g"), h = new l(jr ? c : "^(?:" + c.source + ")", d), w = s === void 0 ? ju : s >>> 0;
      if (w === 0)
        return [];
      if (u.length === 0)
        return Op(h, u) === null ? [u] : [];
      for (var m = 0, g = 0, v = []; g < u.length; ) {
        h.lastIndex = jr ? g : 0;
        var k = Op(h, jr ? u : u.slice(g)), y;
        if (k === null || (y = A$(C$(h.lastIndex + (jr ? 0 : g)), u.length)) === m)
          g = $$(u, g, f);
        else {
          if (v.push(u.slice(m, g)), v.length === w)
            return v;
          for (var x = 1; x <= k.length - 1; x++)
            if (v.push(k[x]), v.length === w)
              return v;
          g = m = y;
        }
      }
      return v.push(u.slice(m)), v;
    }
  ];
});
var Er = function(t, e, n, r) {
  if (!(t instanceof e) || r !== void 0 && r in t)
    throw TypeError(n + ": incorrect invocation!");
  return t;
}, Db = { exports: {} }, D$ = It, P$ = wb, F$ = sf, R$ = re, N$ = he, M$ = cf, Bu = {}, zu = {}, Pb = Db.exports = function(t, e, n, r, o) {
  var i = o ? function() {
    return t;
  } : M$(t), s = D$(n, r, e ? 2 : 1), a = 0, c, u, l, f;
  if (typeof i != "function")
    throw TypeError(t + " is not iterable!");
  if (F$(i)) {
    for (c = N$(t.length); c > a; a++)
      if (f = e ? s(R$(u = t[a])[0], u[1]) : s(t[a]), f === Bu || f === zu)
        return f;
  } else
    for (l = i.call(t); !(u = l.next()).done; )
      if (f = P$(l, s, u.value, e), f === Bu || f === zu)
        return f;
};
Pb.BREAK = Bu;
Pb.RETURN = zu;
var xs = Db.exports, Bo = It, L$ = sb, Dp = Bl, Pp = Rl, Bt = ee, Fp = Bt.process, Hu = Bt.setImmediate, Vu = Bt.clearImmediate, Rp = Bt.MessageChannel, oc = Bt.Dispatch, ic = 0, ro = {}, Np = "onreadystatechange", bn, sc, ac, Xr = function() {
  var t = +this;
  if (ro.hasOwnProperty(t)) {
    var e = ro[t];
    delete ro[t], e();
  }
}, Mp = function(t) {
  Xr.call(t.data);
};
(!Hu || !Vu) && (Hu = function(e) {
  for (var n = [], r = 1; arguments.length > r; )
    n.push(arguments[r++]);
  return ro[++ic] = function() {
    L$(typeof e == "function" ? e : Function(e), n);
  }, bn(ic), ic;
}, Vu = function(e) {
  delete ro[e];
}, Kt(Fp) == "process" ? bn = function(t) {
  Fp.nextTick(Bo(Xr, t, 1));
} : oc && oc.now ? bn = function(t) {
  oc.now(Bo(Xr, t, 1));
} : Rp ? (sc = new Rp(), ac = sc.port2, sc.port1.onmessage = Mp, bn = Bo(ac.postMessage, ac, 1)) : Bt.addEventListener && typeof postMessage == "function" && !Bt.importScripts ? (bn = function(t) {
  Bt.postMessage(t + "", "*");
}, Bt.addEventListener("message", Mp, !1)) : Np in Pp("script") ? bn = function(t) {
  Dp.appendChild(Pp("script"))[Np] = function() {
    Dp.removeChild(this), Xr.call(t);
  };
} : bn = function(t) {
  setTimeout(Bo(Xr, t, 1), 0);
});
var pf = {
  set: Hu,
  clear: Vu
}, Tn = ee, q$ = pf.set, Lp = Tn.MutationObserver || Tn.WebKitMutationObserver, Uu = Tn.process, cc = Tn.Promise, qp = Kt(Uu) == "process", j$ = function() {
  var t, e, n, r = function() {
    var a, c;
    for (qp && (a = Uu.domain) && a.exit(); t; ) {
      c = t.fn, t = t.next;
      try {
        c();
      } catch (u) {
        throw t ? n() : e = void 0, u;
      }
    }
    e = void 0, a && a.enter();
  };
  if (qp)
    n = function() {
      Uu.nextTick(r);
    };
  else if (Lp && !(Tn.navigator && Tn.navigator.standalone)) {
    var o = !0, i = document.createTextNode("");
    new Lp(r).observe(i, { characterData: !0 }), n = function() {
      i.data = o = !o;
    };
  } else if (cc && cc.resolve) {
    var s = cc.resolve(void 0);
    n = function() {
      s.then(r);
    };
  } else
    n = function() {
      q$.call(Tn, r);
    };
  return function(a) {
    var c = { fn: a, next: void 0 };
    e && (e.next = c), t || (t = c, n()), e = c;
  };
}, vf = {}, jp = Ct;
function B$(t) {
  var e, n;
  this.promise = new t(function(r, o) {
    if (e !== void 0 || n !== void 0)
      throw TypeError("Bad Promise constructor");
    e = r, n = o;
  }), this.resolve = jp(e), this.reject = jp(n);
}
vf.f = function(t) {
  return new B$(t);
};
var z$ = function(t) {
  try {
    return { e: !1, v: t() };
  } catch (e) {
    return { e: !0, v: e };
  }
}, H$ = ee, Bp = H$.navigator, Es = Bp && Bp.userAgent || "", V$ = re, U$ = ne, G$ = vf, Fb = function(t, e) {
  if (V$(t), U$(e) && e.constructor === t)
    return e;
  var n = G$.f(t), r = n.resolve;
  return r(e), n.promise;
}, uc, zp;
function $r() {
  if (zp)
    return uc;
  zp = 1;
  var t = et;
  return uc = function(e, n, r) {
    for (var o in n)
      t(e, o, n[o], r);
    return e;
  }, uc;
}
var on = ee, sr = It, W$ = So, Ze = R, K$ = ne, Z$ = Ct, J$ = Er, Hp = xs, Y$ = xo, Rb = pf.set, Nb = j$(), Mb = vf, Gu = z$, X$ = Es, Q$ = Fb, gn = "Promise", Lb = on.TypeError, mr = on.process, Vp = mr && mr.versions, eC = Vp && Vp.v8 || "", Lt = on[gn], uo = W$(mr) == "process", Ii = function() {
}, zo, qb, Up, jb, lo = qb = Mb.f, Eo = !!function() {
  try {
    var t = Lt.resolve(1), e = (t.constructor = {})[fe("species")] = function(n) {
      n(Ii, Ii);
    };
    return (uo || typeof PromiseRejectionEvent == "function") && t.then(Ii) instanceof e && eC.indexOf("6.6") !== 0 && X$.indexOf("Chrome/66") === -1;
  } catch {
  }
}(), Bb = function(t) {
  var e;
  return K$(t) && typeof (e = t.then) == "function" ? e : !1;
}, gf = function(t, e) {
  if (!t._n) {
    t._n = !0;
    var n = t._c;
    Nb(function() {
      for (var r = t._v, o = t._s == 1, i = 0, s = function(a) {
        var c = o ? a.ok : a.fail, u = a.resolve, l = a.reject, f = a.domain, d, h, w;
        try {
          c ? (o || (t._h == 2 && nC(t), t._h = 1), c === !0 ? d = r : (f && f.enter(), d = c(r), f && (f.exit(), w = !0)), d === a.promise ? l(Lb("Promise-chain cycle")) : (h = Bb(d)) ? h.call(d, u, l) : u(d)) : l(r);
        } catch (m) {
          f && !w && f.exit(), l(m);
        }
      }; n.length > i; )
        s(n[i++]);
      t._c = [], t._n = !1, e && !t._h && tC(t);
    });
  }
}, tC = function(t) {
  Rb.call(on, function() {
    var e = t._v, n = Gp(t), r, o, i;
    if (n && (r = Gu(function() {
      uo ? mr.emit("unhandledRejection", e, t) : (o = on.onunhandledrejection) ? o({ promise: t, reason: e }) : (i = on.console) && i.error && i.error("Unhandled promise rejection", e);
    }), t._h = uo || Gp(t) ? 2 : 1), t._a = void 0, n && r.e)
      throw r.v;
  });
}, Gp = function(t) {
  return t._h !== 1 && (t._a || t._c).length === 0;
}, nC = function(t) {
  Rb.call(on, function() {
    var e;
    uo ? mr.emit("rejectionHandled", t) : (e = on.onrejectionhandled) && e({ promise: t, reason: t._v });
  });
}, fr = function(t) {
  var e = this;
  e._d || (e._d = !0, e = e._w || e, e._v = t, e._s = 2, e._a || (e._a = e._c.slice()), gf(e, !0));
}, Wu = function(t) {
  var e = this, n;
  if (!e._d) {
    e._d = !0, e = e._w || e;
    try {
      if (e === t)
        throw Lb("Promise can't be resolved itself");
      (n = Bb(t)) ? Nb(function() {
        var r = { _w: e, _d: !1 };
        try {
          n.call(t, sr(Wu, r, 1), sr(fr, r, 1));
        } catch (o) {
          fr.call(r, o);
        }
      }) : (e._v = t, e._s = 1, gf(e, !1));
    } catch (r) {
      fr.call({ _w: e, _d: !1 }, r);
    }
  }
};
Eo || (Lt = function(e) {
  J$(this, Lt, gn, "_h"), Z$(e), zo.call(this);
  try {
    e(sr(Wu, this, 1), sr(fr, this, 1));
  } catch (n) {
    fr.call(this, n);
  }
}, zo = function(e) {
  this._c = [], this._a = void 0, this._s = 0, this._d = !1, this._v = void 0, this._h = 0, this._n = !1;
}, zo.prototype = $r()(Lt.prototype, {
  // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
  then: function(e, n) {
    var r = lo(Y$(this, Lt));
    return r.ok = typeof e == "function" ? e : !0, r.fail = typeof n == "function" && n, r.domain = uo ? mr.domain : void 0, this._c.push(r), this._a && this._a.push(r), this._s && gf(this, !1), r.promise;
  },
  // 25.4.5.1 Promise.prototype.catch(onRejected)
  catch: function(t) {
    return this.then(void 0, t);
  }
}), Up = function() {
  var t = new zo();
  this.promise = t, this.resolve = sr(Wu, t, 1), this.reject = sr(fr, t, 1);
}, Mb.f = lo = function(t) {
  return t === Lt || t === jb ? new Up(t) : qb(t);
});
Ze(Ze.G + Ze.W + Ze.F * !Eo, { Promise: Lt });
br(Lt, gn);
xr(gn);
jb = Ee[gn];
Ze(Ze.S + Ze.F * !Eo, gn, {
  // 25.4.4.5 Promise.reject(r)
  reject: function(e) {
    var n = lo(this), r = n.reject;
    return r(e), n.promise;
  }
});
Ze(Ze.S + Ze.F * !Eo, gn, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function(e) {
    return Q$(this, e);
  }
});
Ze(Ze.S + Ze.F * !(Eo && ys()(function(t) {
  Lt.all(t).catch(Ii);
})), gn, {
  // 25.4.4.1 Promise.all(iterable)
  all: function(e) {
    var n = this, r = lo(n), o = r.resolve, i = r.reject, s = Gu(function() {
      var a = [], c = 0, u = 1;
      Hp(e, !1, function(l) {
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
    var n = this, r = lo(n), o = r.reject, i = Gu(function() {
      Hp(e, !1, function(s) {
        n.resolve(s).then(r.resolve, o);
      });
    });
    return i.e && o(i.v), r.promise;
  }
});
var rC = ne, Kn = function(t, e) {
  if (!rC(t) || t._t !== e)
    throw TypeError("Incompatible receiver, " + e + " required!");
  return t;
}, oC = me.f, iC = Un, sC = $r(), aC = It, cC = Er, uC = xs, lC = ef, Ho = Cb, fC = xr, zb = be, Hb = pn.fastKey, Xn = Kn, Br = zb ? "_s" : "size", Vo = function(t, e) {
  var n = Hb(e), r;
  if (n !== "F")
    return t._i[n];
  for (r = t._f; r; r = r.n)
    if (r.k == e)
      return r;
}, Vb = {
  getConstructor: function(t, e, n, r) {
    var o = t(function(i, s) {
      cC(i, o, e, "_i"), i._t = e, i._i = iC(null), i._f = void 0, i._l = void 0, i[Br] = 0, s != null && uC(s, n, i[r], i);
    });
    return sC(o.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function() {
        for (var s = Xn(this, e), a = s._i, c = s._f; c; c = c.n)
          c.r = !0, c.p && (c.p = c.p.n = void 0), delete a[c.i];
        s._f = s._l = void 0, s[Br] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      delete: function(i) {
        var s = Xn(this, e), a = Vo(s, i);
        if (a) {
          var c = a.n, u = a.p;
          delete s._i[a.i], a.r = !0, u && (u.n = c), c && (c.p = u), s._f == a && (s._f = c), s._l == a && (s._l = u), s[Br]--;
        }
        return !!a;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function(s) {
        Xn(this, e);
        for (var a = aC(s, arguments.length > 1 ? arguments[1] : void 0, 3), c; c = c ? c.n : this._f; )
          for (a(c.v, c.k, this); c && c.r; )
            c = c.p;
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function(s) {
        return !!Vo(Xn(this, e), s);
      }
    }), zb && oC(o.prototype, "size", {
      get: function() {
        return Xn(this, e)[Br];
      }
    }), o;
  },
  def: function(t, e, n) {
    var r = Vo(t, e), o, i;
    return r ? r.v = n : (t._l = r = {
      i: i = Hb(e, !0),
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
    }, t._f || (t._f = r), o && (o.n = r), t[Br]++, i !== "F" && (t._i[i] = r)), t;
  },
  getEntry: Vo,
  setStrong: function(t, e, n) {
    lC(t, e, function(r, o) {
      this._t = Xn(r, e), this._k = o, this._l = void 0;
    }, function() {
      for (var r = this, o = r._k, i = r._l; i && i.r; )
        i = i.p;
      return !r._t || !(r._l = i = i ? i.n : r._t._f) ? (r._t = void 0, Ho(1)) : o == "keys" ? Ho(0, i.k) : o == "values" ? Ho(0, i.v) : Ho(0, [i.k, i.v]);
    }, n ? "entries" : "values", !n, !0), fC(e);
  }
}, dC = ee, Uo = R, hC = et, pC = $r(), vC = pn, gC = xs, mC = Er, lc = ne, fc = te, _C = ys(), bC = br, yC = Zl, $s = function(t, e, n, r, o, i) {
  var s = dC[t], a = s, c = o ? "set" : "add", u = a && a.prototype, l = {}, f = function(v) {
    var k = u[v];
    hC(
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
      } : function(x, F) {
        return k.call(this, x === 0 ? 0 : x, F), this;
      }
    );
  };
  if (typeof a != "function" || !(i || u.forEach && !fc(function() {
    new a().entries().next();
  })))
    a = r.getConstructor(e, t, o, c), pC(a.prototype, n), vC.NEED = !0;
  else {
    var d = new a(), h = d[c](i ? {} : -0, 1) != d, w = fc(function() {
      d.has(1);
    }), m = _C(function(v) {
      new a(v);
    }), g = !i && fc(function() {
      for (var v = new a(), k = 5; k--; )
        v[c](k, k);
      return !v.has(-0);
    });
    m || (a = e(function(v, k) {
      mC(v, a, t);
      var y = yC(new s(), v, a);
      return k != null && gC(k, o, y[c], y), y;
    }), a.prototype = u, u.constructor = a), (w || g) && (f("delete"), f("has"), o && f("get")), (g || h) && f(c), i && u.clear && delete u.clear;
  }
  return bC(a, t), l[t] = a, Uo(Uo.G + Uo.W + Uo.F * (a != s), l), i || r.setStrong(a, t, o), a;
}, dc = Vb, Wp = Kn, hc = "Map";
$s(hc, function(t) {
  return function() {
    return t(this, arguments.length > 0 ? arguments[0] : void 0);
  };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function(e) {
    var n = dc.getEntry(Wp(this, hc), e);
    return n && n.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function(e, n) {
    return dc.def(Wp(this, hc), e === 0 ? 0 : e, n);
  }
}, dc, !0);
var Kp = Vb, wC = Kn, Zp = "Set";
$s(Zp, function(t) {
  return function() {
    return t(this, arguments.length > 0 ? arguments[0] : void 0);
  };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function(e) {
    return Kp.def(wC(this, Zp), e = e === 0 ? 0 : e, e);
  }
}, Kp);
var kC = $r(), pc = pn.getWeak, SC = re, Jp = ne, xC = Er, EC = xs, Ub = Ot, Yp = ut, Xp = Kn, $C = Ub(5), CC = Ub(6), IC = 0, Go = function(t) {
  return t._l || (t._l = new Gb());
}, Gb = function() {
  this.a = [];
}, vc = function(t, e) {
  return $C(t.a, function(n) {
    return n[0] === e;
  });
};
Gb.prototype = {
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
    var e = CC(this.a, function(n) {
      return n[0] === t;
    });
    return ~e && this.a.splice(e, 1), !!~e;
  }
};
var Wb = {
  getConstructor: function(t, e, n, r) {
    var o = t(function(i, s) {
      xC(i, o, e, "_i"), i._t = e, i._i = IC++, i._l = void 0, s != null && EC(s, n, i[r], i);
    });
    return kC(o.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      delete: function(i) {
        if (!Jp(i))
          return !1;
        var s = pc(i);
        return s === !0 ? Go(Xp(this, e)).delete(i) : s && Yp(s, this._i) && delete s[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function(s) {
        if (!Jp(s))
          return !1;
        var a = pc(s);
        return a === !0 ? Go(Xp(this, e)).has(s) : a && Yp(a, this._i);
      }
    }), o;
  },
  def: function(t, e, n) {
    var r = pc(SC(e), !0);
    return r === !0 ? Go(t).set(e, n) : r[t._i] = n, t;
  },
  ufstore: Go
}, Qp = ee, TC = Ot(0), AC = et, Kb = pn, OC = rb, Cs = Wb, Zb = ne, ev = Kn, DC = Kn, PC = !Qp.ActiveXObject && "ActiveXObject" in Qp, Vi = "WeakMap", FC = Kb.getWeak, RC = Object.isExtensible, NC = Cs.ufstore, gc, Jb = function(t) {
  return function() {
    return t(this, arguments.length > 0 ? arguments[0] : void 0);
  };
}, Yb = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function(e) {
    if (Zb(e)) {
      var n = FC(e);
      return n === !0 ? NC(ev(this, Vi)).get(e) : n ? n[this._i] : void 0;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function(e, n) {
    return Cs.def(ev(this, Vi), e, n);
  }
}, MC = $s(Vi, Jb, Yb, Cs, !0, !0);
DC && PC && (gc = Cs.getConstructor(Jb, Vi), OC(gc.prototype, Yb), Kb.NEED = !0, TC(["delete", "has", "get", "set"], function(t) {
  var e = MC.prototype, n = e[t];
  AC(e, t, function(r, o) {
    if (Zb(r) && !RC(r)) {
      this._f || (this._f = new gc());
      var i = this._f[t](r, o);
      return t == "set" ? this : i;
    }
    return n.call(this, r, o);
  });
}));
var tv = Wb, LC = Kn, nv = "WeakSet";
$s(nv, function(t) {
  return function() {
    return t(this, arguments.length > 0 ? arguments[0] : void 0);
  };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function(e) {
    return tv.def(LC(this, nv), e, !0);
  }
}, tv, !1, !0);
var Ku = ee, rv = lt, Xb = zn, Qb = Xb("typed_array"), e0 = Xb("view"), t0 = !!(Ku.ArrayBuffer && Ku.DataView), n0 = t0, ov = 0, qC = 9, mc, jC = "Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");
for (; ov < qC; )
  (mc = Ku[jC[ov++]]) ? (rv(mc.prototype, Qb, !0), rv(mc.prototype, e0, !0)) : n0 = !1;
var Is = {
  ABV: t0,
  CONSTR: n0,
  TYPED: Qb,
  VIEW: e0
}, Ts = {}, BC = Tt, zC = he, r0 = function(t) {
  if (t === void 0)
    return 0;
  var e = BC(t), n = zC(e);
  if (e !== n)
    throw RangeError("Wrong length!");
  return n;
};
(function(t) {
  var e = ee, n = be, r = Is, o = lt, i = $r(), s = te, a = Er, c = Tt, u = he, l = r0, f = vn.f, d = me.f, h = uf(), w = br, m = "ArrayBuffer", g = "DataView", v = "prototype", k = "Wrong length!", y = "Wrong index!", x = e[m], F = e[g], A = e.Math, T = e.RangeError, D = e.Infinity, H = x, L = A.abs, q = A.pow, b = A.floor, _ = A.log, p = A.LN2, P = "buffer", N = "byteLength", C = "byteOffset", S = n ? "_b" : P, O = n ? "_l" : N, E = n ? "_o" : C;
  function I(j, z, W) {
    var $e = new Array(W), De = W * 8 - z - 1, ke = (1 << De) - 1, Se = ke >> 1, je = z === 23 ? q(2, -24) - q(2, -77) : 0, Ue = 0, Be = j < 0 || j === 0 && 1 / j < 0 ? 1 : 0, oe, Ge, Zn;
    for (j = L(j), j != j || j === D ? (Ge = j != j ? 1 : 0, oe = ke) : (oe = b(_(j) / p), j * (Zn = q(2, -oe)) < 1 && (oe--, Zn *= 2), oe + Se >= 1 ? j += je / Zn : j += je * q(2, 1 - Se), j * Zn >= 2 && (oe++, Zn /= 2), oe + Se >= ke ? (Ge = 0, oe = ke) : oe + Se >= 1 ? (Ge = (j * Zn - 1) * q(2, z), oe = oe + Se) : (Ge = j * q(2, Se - 1) * q(2, z), oe = 0)); z >= 8; $e[Ue++] = Ge & 255, Ge /= 256, z -= 8)
      ;
    for (oe = oe << z | Ge, De += z; De > 0; $e[Ue++] = oe & 255, oe /= 256, De -= 8)
      ;
    return $e[--Ue] |= Be * 128, $e;
  }
  function M(j, z, W) {
    var $e = W * 8 - z - 1, De = (1 << $e) - 1, ke = De >> 1, Se = $e - 7, je = W - 1, Ue = j[je--], Be = Ue & 127, oe;
    for (Ue >>= 7; Se > 0; Be = Be * 256 + j[je], je--, Se -= 8)
      ;
    for (oe = Be & (1 << -Se) - 1, Be >>= -Se, Se += z; Se > 0; oe = oe * 256 + j[je], je--, Se -= 8)
      ;
    if (Be === 0)
      Be = 1 - ke;
    else {
      if (Be === De)
        return oe ? NaN : Ue ? -D : D;
      oe = oe + q(2, z), Be = Be - ke;
    }
    return (Ue ? -1 : 1) * oe * q(2, Be - z);
  }
  function B(j) {
    return j[3] << 24 | j[2] << 16 | j[1] << 8 | j[0];
  }
  function V(j) {
    return [j & 255];
  }
  function K(j) {
    return [j & 255, j >> 8 & 255];
  }
  function G(j) {
    return [j & 255, j >> 8 & 255, j >> 16 & 255, j >> 24 & 255];
  }
  function Q(j) {
    return I(j, 52, 8);
  }
  function ue(j) {
    return I(j, 23, 4);
  }
  function _e(j, z, W) {
    d(j[v], z, { get: function() {
      return this[W];
    } });
  }
  function we(j, z, W, $e) {
    var De = +W, ke = l(De);
    if (ke + z > j[O])
      throw T(y);
    var Se = j[S]._b, je = ke + j[E], Ue = Se.slice(je, je + z);
    return $e ? Ue : Ue.reverse();
  }
  function ae(j, z, W, $e, De, ke) {
    var Se = +W, je = l(Se);
    if (je + z > j[O])
      throw T(y);
    for (var Ue = j[S]._b, Be = je + j[E], oe = $e(+De), Ge = 0; Ge < z; Ge++)
      Ue[Be + Ge] = oe[ke ? Ge : z - Ge - 1];
  }
  if (!r.ABV)
    x = function(z) {
      a(this, x, m);
      var W = l(z);
      this._b = h.call(new Array(W), 0), this[O] = W;
    }, F = function(z, W, $e) {
      a(this, F, g), a(z, x, g);
      var De = z[O], ke = c(W);
      if (ke < 0 || ke > De)
        throw T("Wrong offset!");
      if ($e = $e === void 0 ? De - ke : u($e), ke + $e > De)
        throw T(k);
      this[S] = z, this[E] = ke, this[O] = $e;
    }, n && (_e(x, N, "_l"), _e(F, P, "_b"), _e(F, N, "_l"), _e(F, C, "_o")), i(F[v], {
      getInt8: function(z) {
        return we(this, 1, z)[0] << 24 >> 24;
      },
      getUint8: function(z) {
        return we(this, 1, z)[0];
      },
      getInt16: function(z) {
        var W = we(this, 2, z, arguments[1]);
        return (W[1] << 8 | W[0]) << 16 >> 16;
      },
      getUint16: function(z) {
        var W = we(this, 2, z, arguments[1]);
        return W[1] << 8 | W[0];
      },
      getInt32: function(z) {
        return B(we(this, 4, z, arguments[1]));
      },
      getUint32: function(z) {
        return B(we(this, 4, z, arguments[1])) >>> 0;
      },
      getFloat32: function(z) {
        return M(we(this, 4, z, arguments[1]), 23, 4);
      },
      getFloat64: function(z) {
        return M(we(this, 8, z, arguments[1]), 52, 8);
      },
      setInt8: function(z, W) {
        ae(this, 1, z, V, W);
      },
      setUint8: function(z, W) {
        ae(this, 1, z, V, W);
      },
      setInt16: function(z, W) {
        ae(this, 2, z, K, W, arguments[2]);
      },
      setUint16: function(z, W) {
        ae(this, 2, z, K, W, arguments[2]);
      },
      setInt32: function(z, W) {
        ae(this, 4, z, G, W, arguments[2]);
      },
      setUint32: function(z, W) {
        ae(this, 4, z, G, W, arguments[2]);
      },
      setFloat32: function(z, W) {
        ae(this, 4, z, ue, W, arguments[2]);
      },
      setFloat64: function(z, W) {
        ae(this, 8, z, Q, W, arguments[2]);
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
      x = function(z) {
        return a(this, x), new H(l(z));
      };
      for (var Le = x[v] = H[v], qe = f(H), ht = 0, pt; qe.length > ht; )
        (pt = qe[ht++]) in x || o(x, pt, H[pt]);
      Le.constructor = x;
    }
    var Xt = new F(new x(2)), ud = F[v].setInt8;
    Xt.setInt8(0, 2147483648), Xt.setInt8(1, 2147483649), (Xt.getInt8(0) || !Xt.getInt8(1)) && i(F[v], {
      setInt8: function(z, W) {
        ud.call(this, z, W << 24 >> 24);
      },
      setUint8: function(z, W) {
        ud.call(this, z, W << 24 >> 24);
      }
    }, !0);
  }
  w(x, m), w(F, g), o(F[v], r.VIEW, !0), t[m] = x, t[g] = F;
})(Ts);
var vt = R, mf = Is, o0 = Ts, iv = re, sv = Hn, HC = he, VC = ne, i0 = ee.ArrayBuffer, UC = xo, fo = o0.ArrayBuffer, av = o0.DataView, cv = mf.ABV && i0.isView, uv = fo.prototype.slice, GC = mf.VIEW, _f = "ArrayBuffer";
vt(vt.G + vt.W + vt.F * (i0 !== fo), { ArrayBuffer: fo });
vt(vt.S + vt.F * !mf.CONSTR, _f, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function(e) {
    return cv && cv(e) || VC(e) && GC in e;
  }
});
vt(vt.P + vt.U + vt.F * te(function() {
  return !new fo(2).slice(1, void 0).byteLength;
}), _f, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function(e, n) {
    if (uv !== void 0 && n === void 0)
      return uv.call(iv(this), e);
    for (var r = iv(this).byteLength, o = sv(e, r), i = sv(n === void 0 ? r : n, r), s = new (UC(this, fo))(HC(i - o)), a = new av(this), c = new av(s), u = 0; o < i; )
      c.setUint8(u++, a.getUint8(o++));
    return s;
  }
});
xr(_f);
var Wo = R;
Wo(Wo.G + Wo.W + Wo.F * !Is.ABV, {
  DataView: Ts.DataView
});
var Zu = { exports: {} };
if (be) {
  var _c = q_, Ko = ee, kt = te, ie = R, Zo = Is, lv = Ts, WC = It, fv = Er, KC = Bn, St = lt, bc = $r(), ZC = Tt, Jo = he, dv = r0, hv = Hn, pv = hn, zr = ut, vv = So, Qn = ne, gv = Ne, JC = sf, YC = Un, XC = Gn, yc = vn.f, QC = cf, mv = zn, _v = fe, yn = Ot, bv = ps, wc = xo, kc = Ib, e2 = Sr, t2 = ys(), n2 = xr, r2 = uf(), o2 = xb(), yv = me, wv = mt, Hr = yv.f, i2 = wv.f, Vr = Ko.RangeError, kv = Ko.TypeError, er = Ko.Uint8Array, Sc = "ArrayBuffer", Sv = "Shared" + Sc, xv = "BYTES_PER_ELEMENT", Ur = "prototype", Qt = Array[Ur], xc = lv.ArrayBuffer, s2 = lv.DataView, Ev = yn(0), a2 = yn(2), c2 = yn(3), u2 = yn(4), l2 = yn(5), f2 = yn(6), d2 = bv(!0), h2 = bv(!1), p2 = kc.values, v2 = kc.keys, g2 = kc.entries, m2 = Qt.lastIndexOf, _2 = Qt.reduce, b2 = Qt.reduceRight, $v = Qt.join, y2 = Qt.sort, Cv = Qt.slice, Gr = Qt.toString, Ec = Qt.toLocaleString, $c = _v("iterator"), Yo = _v("toStringTag"), Iv = mv("typed_constructor"), Xo = mv("def_constructor"), Tv = Zo.CONSTR, tr = Zo.TYPED, w2 = Zo.VIEW, Qo = "Wrong length!", k2 = yn(1, function(t, e) {
    return ti(wc(t, t[Xo]), e);
  }), Av = kt(function() {
    return new er(new Uint16Array([1]).buffer)[0] === 1;
  }), S2 = !!er && !!er[Ur].set && kt(function() {
    new er(1).set({});
  }), ei = function(t, e) {
    var n = ZC(t);
    if (n < 0 || n % e)
      throw Vr("Wrong offset!");
    return n;
  }, ce = function(t) {
    if (Qn(t) && tr in t)
      return t;
    throw kv(t + " is not a typed array!");
  }, ti = function(t, e) {
    if (!(Qn(t) && Iv in t))
      throw kv("It is not a typed array constructor!");
    return new t(e);
  }, Ov = function(t, e) {
    return Cc(wc(t, t[Xo]), e);
  }, Cc = function(t, e) {
    for (var n = 0, r = e.length, o = ti(t, r); r > n; )
      o[n] = e[n++];
    return o;
  }, ni = function(t, e, n) {
    Hr(t, e, { get: function() {
      return this._d[n];
    } });
  }, Ic = function(e) {
    var n = gv(e), r = arguments.length, o = r > 1 ? arguments[1] : void 0, i = o !== void 0, s = QC(n), a, c, u, l, f, d;
    if (s != null && !JC(s)) {
      for (d = s.call(n), u = [], a = 0; !(f = d.next()).done; a++)
        u.push(f.value);
      n = u;
    }
    for (i && r > 2 && (o = WC(o, arguments[2], 2)), a = 0, c = Jo(n.length), l = ti(this, c); c > a; a++)
      l[a] = i ? o(n[a], a) : n[a];
    return l;
  }, x2 = function() {
    for (var e = 0, n = arguments.length, r = ti(this, n); n > e; )
      r[e] = arguments[e++];
    return r;
  }, E2 = !!er && kt(function() {
    Ec.call(new er(1));
  }), Dv = function() {
    return Ec.apply(E2 ? Cv.call(ce(this)) : ce(this), arguments);
  }, Pv = {
    copyWithin: function(e, n) {
      return o2.call(ce(this), e, n, arguments.length > 2 ? arguments[2] : void 0);
    },
    every: function(e) {
      return u2(ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    fill: function(e) {
      return r2.apply(ce(this), arguments);
    },
    filter: function(e) {
      return Ov(this, a2(
        ce(this),
        e,
        arguments.length > 1 ? arguments[1] : void 0
      ));
    },
    find: function(e) {
      return l2(ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    findIndex: function(e) {
      return f2(ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    forEach: function(e) {
      Ev(ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    indexOf: function(e) {
      return h2(ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    includes: function(e) {
      return d2(ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    join: function(e) {
      return $v.apply(ce(this), arguments);
    },
    lastIndexOf: function(e) {
      return m2.apply(ce(this), arguments);
    },
    map: function(e) {
      return k2(ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    reduce: function(e) {
      return _2.apply(ce(this), arguments);
    },
    reduceRight: function(e) {
      return b2.apply(ce(this), arguments);
    },
    reverse: function() {
      for (var e = this, n = ce(e).length, r = Math.floor(n / 2), o = 0, i; o < r; )
        i = e[o], e[o++] = e[--n], e[n] = i;
      return e;
    },
    some: function(e) {
      return c2(ce(this), e, arguments.length > 1 ? arguments[1] : void 0);
    },
    sort: function(e) {
      return y2.call(ce(this), e);
    },
    subarray: function(e, n) {
      var r = ce(this), o = r.length, i = hv(e, o);
      return new (wc(r, r[Xo]))(
        r.buffer,
        r.byteOffset + i * r.BYTES_PER_ELEMENT,
        Jo((n === void 0 ? o : hv(n, o)) - i)
      );
    }
  }, Fv = function(e, n) {
    return Ov(this, Cv.call(ce(this), e, n));
  }, Rv = function(e) {
    ce(this);
    var n = ei(arguments[1], 1), r = this.length, o = gv(e), i = Jo(o.length), s = 0;
    if (i + n > r)
      throw Vr(Qo);
    for (; s < i; )
      this[n + s] = o[s++];
  }, ri = {
    entries: function() {
      return g2.call(ce(this));
    },
    keys: function() {
      return v2.call(ce(this));
    },
    values: function() {
      return p2.call(ce(this));
    }
  }, Nv = function(t, e) {
    return Qn(t) && t[tr] && typeof e != "symbol" && e in t && String(+e) == String(e);
  }, Mv = function(e, n) {
    return Nv(e, n = pv(n, !0)) ? KC(2, e[n]) : i2(e, n);
  }, Lv = function(e, n, r) {
    return Nv(e, n = pv(n, !0)) && Qn(r) && zr(r, "value") && !zr(r, "get") && !zr(r, "set") && !r.configurable && (!zr(r, "writable") || r.writable) && (!zr(r, "enumerable") || r.enumerable) ? (e[n] = r.value, e) : Hr(e, n, r);
  };
  Tv || (wv.f = Mv, yv.f = Lv), ie(ie.S + ie.F * !Tv, "Object", {
    getOwnPropertyDescriptor: Mv,
    defineProperty: Lv
  }), kt(function() {
    Gr.call({});
  }) && (Gr = Ec = function() {
    return $v.call(this);
  });
  var Rt = bc({}, Pv);
  bc(Rt, ri), St(Rt, $c, ri.values), bc(Rt, {
    slice: Fv,
    set: Rv,
    constructor: function() {
    },
    toString: Gr,
    toLocaleString: Dv
  }), ni(Rt, "buffer", "b"), ni(Rt, "byteOffset", "o"), ni(Rt, "byteLength", "l"), ni(Rt, "length", "e"), Hr(Rt, Yo, {
    get: function() {
      return this[tr];
    }
  }), Zu.exports = function(t, e, n, r) {
    r = !!r;
    var o = t + (r ? "Clamped" : "") + "Array", i = "get" + t, s = "set" + t, a = Ko[o], c = a || {}, u = a && XC(a), l = !a || !Zo.ABV, f = {}, d = a && a[Ur], h = function(y, x) {
      var F = y._d;
      return F.v[i](x * e + F.o, Av);
    }, w = function(y, x, F) {
      var A = y._d;
      r && (F = (F = Math.round(F)) < 0 ? 0 : F > 255 ? 255 : F & 255), A.v[s](x * e + A.o, F, Av);
    }, m = function(y, x) {
      Hr(y, x, {
        get: function() {
          return h(this, x);
        },
        set: function(F) {
          return w(this, x, F);
        },
        enumerable: !0
      });
    };
    l ? (a = n(function(y, x, F, A) {
      fv(y, a, o, "_d");
      var T = 0, D = 0, H, L, q, b;
      if (!Qn(x))
        q = dv(x), L = q * e, H = new xc(L);
      else if (x instanceof xc || (b = vv(x)) == Sc || b == Sv) {
        H = x, D = ei(F, e);
        var _ = x.byteLength;
        if (A === void 0) {
          if (_ % e || (L = _ - D, L < 0))
            throw Vr(Qo);
        } else if (L = Jo(A) * e, L + D > _)
          throw Vr(Qo);
        q = L / e;
      } else
        return tr in x ? Cc(a, x) : Ic.call(a, x);
      for (St(y, "_d", {
        b: H,
        o: D,
        l: L,
        e: q,
        v: new s2(H)
      }); T < q; )
        m(y, T++);
    }), d = a[Ur] = YC(Rt), St(d, "constructor", a)) : (!kt(function() {
      a(1);
    }) || !kt(function() {
      new a(-1);
    }) || !t2(function(y) {
      new a(), new a(null), new a(1.5), new a(y);
    }, !0)) && (a = n(function(y, x, F, A) {
      fv(y, a, o);
      var T;
      return Qn(x) ? x instanceof xc || (T = vv(x)) == Sc || T == Sv ? A !== void 0 ? new c(x, ei(F, e), A) : F !== void 0 ? new c(x, ei(F, e)) : new c(x) : tr in x ? Cc(a, x) : Ic.call(a, x) : new c(dv(x));
    }), Ev(u !== Function.prototype ? yc(c).concat(yc(u)) : yc(c), function(y) {
      y in a || St(a, y, c[y]);
    }), a[Ur] = d, _c || (d.constructor = a));
    var g = d[$c], v = !!g && (g.name == "values" || g.name == null), k = ri.values;
    St(a, Iv, !0), St(d, tr, o), St(d, w2, !0), St(d, Xo, a), (r ? new a(1)[Yo] != o : !(Yo in d)) && Hr(d, Yo, {
      get: function() {
        return o;
      }
    }), f[o] = a, ie(ie.G + ie.W + ie.F * (a != c), f), ie(ie.S, o, {
      BYTES_PER_ELEMENT: e
    }), ie(ie.S + ie.F * kt(function() {
      c.of.call(a, 1);
    }), o, {
      from: Ic,
      of: x2
    }), xv in d || St(d, xv, e), ie(ie.P, o, Pv), n2(o), ie(ie.P + ie.F * S2, o, { set: Rv }), ie(ie.P + ie.F * !v, o, ri), !_c && d.toString != Gr && (d.toString = Gr), ie(ie.P + ie.F * kt(function() {
      new a(1).slice();
    }), o, { slice: Fv }), ie(ie.P + ie.F * (kt(function() {
      return [1, 2].toLocaleString() != new a([1, 2]).toLocaleString();
    }) || !kt(function() {
      d.toLocaleString.call([1, 2]);
    })), o, { toLocaleString: Dv }), e2[o] = v ? g : k, !_c && !v && St(d, $c, k);
  };
} else
  Zu.exports = function() {
  };
var Jt = Zu.exports;
Jt("Int8", 1, function(t) {
  return function(n, r, o) {
    return t(this, n, r, o);
  };
});
Jt("Uint8", 1, function(t) {
  return function(n, r, o) {
    return t(this, n, r, o);
  };
});
Jt("Uint8", 1, function(t) {
  return function(n, r, o) {
    return t(this, n, r, o);
  };
}, !0);
Jt("Int16", 2, function(t) {
  return function(n, r, o) {
    return t(this, n, r, o);
  };
});
Jt("Uint16", 2, function(t) {
  return function(n, r, o) {
    return t(this, n, r, o);
  };
});
Jt("Int32", 4, function(t) {
  return function(n, r, o) {
    return t(this, n, r, o);
  };
});
Jt("Uint32", 4, function(t) {
  return function(n, r, o) {
    return t(this, n, r, o);
  };
});
Jt("Float32", 4, function(t) {
  return function(n, r, o) {
    return t(this, n, r, o);
  };
});
Jt("Float64", 8, function(t) {
  return function(n, r, o) {
    return t(this, n, r, o);
  };
});
var Tc = R, $2 = Ct, C2 = re, Ac = (ee.Reflect || {}).apply, I2 = Function.apply;
Tc(Tc.S + Tc.F * !te(function() {
  Ac(function() {
  });
}), "Reflect", {
  apply: function(e, n, r) {
    var o = $2(e), i = C2(r);
    return Ac ? Ac(o, n, i) : I2.call(o, n, i);
  }
});
var Oc = R, T2 = Un, qv = Ct, A2 = re, jv = ne, s0 = te, O2 = ab, bf = (ee.Reflect || {}).construct, Bv = s0(function() {
  function t() {
  }
  return !(bf(function() {
  }, [], t) instanceof t);
}), zv = !s0(function() {
  bf(function() {
  });
});
Oc(Oc.S + Oc.F * (Bv || zv), "Reflect", {
  construct: function(e, n) {
    qv(e), A2(n);
    var r = arguments.length < 3 ? e : qv(arguments[2]);
    if (zv && !Bv)
      return bf(e, n, r);
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
      return o.push.apply(o, n), new (O2.apply(e, o))();
    }
    var i = r.prototype, s = T2(jv(i) ? i : Object.prototype), a = Function.apply.call(e, s, n);
    return jv(a) ? a : s;
  }
});
var Hv = me, Dc = R, Vv = re, D2 = hn;
Dc(Dc.S + Dc.F * te(function() {
  Reflect.defineProperty(Hv.f({}, 1, { value: 1 }), 1, { value: 2 });
}), "Reflect", {
  defineProperty: function(e, n, r) {
    Vv(e), n = D2(n, !0), Vv(r);
    try {
      return Hv.f(e, n, r), !0;
    } catch {
      return !1;
    }
  }
});
var Uv = R, P2 = mt.f, F2 = re;
Uv(Uv.S, "Reflect", {
  deleteProperty: function(e, n) {
    var r = P2(F2(e), n);
    return r && !r.configurable ? !1 : delete e[n];
  }
});
var Gv = R, R2 = re, a0 = function(t) {
  this._t = R2(t), this._i = 0;
  var e = this._k = [], n;
  for (n in t)
    e.push(n);
};
bb(a0, "Object", function() {
  var t = this, e = t._k, n;
  do
    if (t._i >= e.length)
      return { value: void 0, done: !0 };
  while (!((n = e[t._i++]) in t._t));
  return { value: n, done: !1 };
});
Gv(Gv.S, "Reflect", {
  enumerate: function(e) {
    return new a0(e);
  }
});
var N2 = mt, M2 = Gn, L2 = ut, Wv = R, q2 = ne, j2 = re;
function c0(t, e) {
  var n = arguments.length < 3 ? t : arguments[2], r, o;
  if (j2(t) === n)
    return t[e];
  if (r = N2.f(t, e))
    return L2(r, "value") ? r.value : r.get !== void 0 ? r.get.call(n) : void 0;
  if (q2(o = M2(t)))
    return c0(o, e, n);
}
Wv(Wv.S, "Reflect", { get: c0 });
var B2 = mt, Kv = R, z2 = re;
Kv(Kv.S, "Reflect", {
  getOwnPropertyDescriptor: function(e, n) {
    return B2.f(z2(e), n);
  }
});
var Zv = R, H2 = Gn, V2 = re;
Zv(Zv.S, "Reflect", {
  getPrototypeOf: function(e) {
    return H2(V2(e));
  }
});
var Jv = R;
Jv(Jv.S, "Reflect", {
  has: function(e, n) {
    return n in e;
  }
});
var Yv = R, U2 = re, Xv = Object.isExtensible;
Yv(Yv.S, "Reflect", {
  isExtensible: function(e) {
    return U2(e), Xv ? Xv(e) : !0;
  }
});
var G2 = vn, W2 = yo, K2 = re, Qv = ee.Reflect, u0 = Qv && Qv.ownKeys || function(e) {
  var n = G2.f(K2(e)), r = W2.f;
  return r ? n.concat(r(e)) : n;
}, eg = R;
eg(eg.S, "Reflect", { ownKeys: u0 });
var tg = R, Z2 = re, ng = Object.preventExtensions;
tg(tg.S, "Reflect", {
  preventExtensions: function(e) {
    Z2(e);
    try {
      return ng && ng(e), !0;
    } catch {
      return !1;
    }
  }
});
var rg = me, og = mt, J2 = Gn, Y2 = ut, ig = R, sg = Bn, X2 = re, ag = ne;
function l0(t, e, n) {
  var r = arguments.length < 4 ? t : arguments[3], o = og.f(X2(t), e), i, s;
  if (!o) {
    if (ag(s = J2(t)))
      return l0(s, e, n, r);
    o = sg(0);
  }
  if (Y2(o, "value")) {
    if (o.writable === !1 || !ag(r))
      return !1;
    if (i = og.f(r, e)) {
      if (i.get || i.set || i.writable === !1)
        return !1;
      i.value = n, rg.f(r, e, i);
    } else
      rg.f(r, e, sg(0, n));
    return !0;
  }
  return o.set === void 0 ? !1 : (o.set.call(r, n), !0);
}
ig(ig.S, "Reflect", { set: l0 });
var cg = R, Pc = Wl;
Pc && cg(cg.S, "Reflect", {
  setPrototypeOf: function(e, n) {
    Pc.check(e, n);
    try {
      return Pc.set(e, n), !0;
    } catch {
      return !1;
    }
  }
});
var ug = R, Q2 = ps(!0);
ug(ug.P, "Array", {
  includes: function(e) {
    return Q2(this, e, arguments.length > 1 ? arguments[1] : void 0);
  }
});
Wn("includes");
Ee.Array.includes;
var eI = vs, tI = ne, nI = he, rI = It, oI = fe("isConcatSpreadable");
function f0(t, e, n, r, o, i, s, a) {
  for (var c = o, u = 0, l = s ? rI(s, a, 3) : !1, f, d; u < r; ) {
    if (u in n) {
      if (f = l ? l(n[u], u, e) : n[u], d = !1, tI(f) && (d = f[oI], d = d !== void 0 ? !!d : eI(f)), d && i > 0)
        c = f0(t, e, f, nI(f.length), c, i - 1) - 1;
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
var iI = f0, lg = R, sI = iI, aI = Ne, cI = he, uI = Ct, lI = kb;
lg(lg.P, "Array", {
  flatMap: function(e) {
    var n = aI(this), r, o;
    return uI(e), r = cI(n.length), o = lI(n, 0), sI(o, n, n, r, 0, 1, e, arguments[1]), o;
  }
});
Wn("flatMap");
Ee.Array.flatMap;
var fI = he, dI = Jl, hI = Zt, d0 = function(t, e, n, r) {
  var o = String(hI(t)), i = o.length, s = n === void 0 ? " " : String(n), a = fI(e);
  if (a <= i || s == "")
    return o;
  var c = a - i, u = dI.call(s, Math.ceil(c / s.length));
  return u.length > c && (u = u.slice(0, c)), r ? u + o : o + u;
}, Fc = R, pI = d0, vI = Es, gI = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(vI);
Fc(Fc.P + Fc.F * gI, "String", {
  padStart: function(e) {
    return pI(this, e, arguments.length > 1 ? arguments[1] : void 0, !0);
  }
});
Ee.String.padStart;
var Rc = R, mI = d0, _I = Es, bI = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(_I);
Rc(Rc.P + Rc.F * bI, "String", {
  padEnd: function(e) {
    return mI(this, e, arguments.length > 1 ? arguments[1] : void 0, !1);
  }
});
Ee.String.padEnd;
kr("trimLeft", function(t) {
  return function() {
    return t(this, 1);
  };
}, "trimStart");
Ee.String.trimLeft;
kr("trimRight", function(t) {
  return function() {
    return t(this, 2);
  };
}, "trimEnd");
Ee.String.trimRight;
H_("asyncIterator");
hs.f("asyncIterator");
var fg = R, yI = u0, wI = ft, kI = mt, SI = af;
fg(fg.S, "Object", {
  getOwnPropertyDescriptors: function(e) {
    for (var n = wI(e), r = kI.f, o = yI(n), i = {}, s = 0, a, c; o.length > s; )
      c = r(n, a = o[s++]), c !== void 0 && SI(i, a, c);
    return i;
  }
});
Ee.Object.getOwnPropertyDescriptors;
var xI = be, EI = Vn, $I = ft, CI = yr.f, h0 = function(t) {
  return function(e) {
    for (var n = $I(e), r = EI(n), o = r.length, i = 0, s = [], a; o > i; )
      a = r[i++], (!xI || CI.call(n, a)) && s.push(t ? [a, n[a]] : n[a]);
    return s;
  };
}, dg = R, II = h0(!1);
dg(dg.S, "Object", {
  values: function(e) {
    return II(e);
  }
});
Ee.Object.values;
var hg = R, TI = h0(!0);
hg(hg.S, "Object", {
  entries: function(e) {
    return TI(e);
  }
});
Ee.Object.entries;
var Nc = R, AI = Ee, OI = ee, DI = xo, pg = Fb;
Nc(Nc.P + Nc.R, "Promise", { finally: function(t) {
  var e = DI(this, AI.Promise || OI.Promise), n = typeof t == "function";
  return this.then(
    n ? function(r) {
      return pg(e, t()).then(function() {
        return r;
      });
    } : t,
    n ? function(r) {
      return pg(e, t()).then(function() {
        throw r;
      });
    } : t
  );
} });
Ee.Promise.finally;
var vg = ee, oi = R, PI = Es, FI = [].slice, RI = /MSIE .\./.test(PI), gg = function(t) {
  return function(e, n) {
    var r = arguments.length > 2, o = r ? FI.call(arguments, 2) : !1;
    return t(r ? function() {
      (typeof e == "function" ? e : Function(e)).apply(this, o);
    } : e, n);
  };
};
oi(oi.G + oi.B + oi.F * RI, {
  setTimeout: gg(vg.setTimeout),
  setInterval: gg(vg.setInterval)
});
var Mc = R, mg = pf;
Mc(Mc.G + Mc.B, {
  setImmediate: mg.set,
  clearImmediate: mg.clear
});
var _g = Ib, NI = Vn, MI = et, LI = ee, bg = lt, p0 = Sr, v0 = fe, yg = v0("iterator"), wg = v0("toStringTag"), kg = p0.Array, Sg = {
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
for (var xg = NI(Sg), Lc = 0; Lc < xg.length; Lc++) {
  var ii = xg[Lc], qI = Sg[ii], Eg = LI[ii], wn = Eg && Eg.prototype, si;
  if (wn && (wn[yg] || bg(wn, yg, kg), wn[wg] || bg(wn, wg, ii), p0[ii] = kg, qI))
    for (si in _g)
      wn[si] || MI(wn, si, _g[si], !0);
}
var jI = { exports: {} };
(function(t) {
  var e = function(n) {
    var r = Object.prototype, o = r.hasOwnProperty, i, s = typeof Symbol == "function" ? Symbol : {}, a = s.iterator || "@@iterator", c = s.asyncIterator || "@@asyncIterator", u = s.toStringTag || "@@toStringTag";
    function l(C, S, O, E) {
      var I = S && S.prototype instanceof v ? S : v, M = Object.create(I.prototype), B = new p(E || []);
      return M._invoke = L(C, O, B), M;
    }
    n.wrap = l;
    function f(C, S, O) {
      try {
        return { type: "normal", arg: C.call(S, O) };
      } catch (E) {
        return { type: "throw", arg: E };
      }
    }
    var d = "suspendedStart", h = "suspendedYield", w = "executing", m = "completed", g = {};
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
    var F = Object.getPrototypeOf, A = F && F(F(P([])));
    A && A !== r && o.call(A, a) && (x = A);
    var T = y.prototype = v.prototype = Object.create(x);
    k.prototype = T.constructor = y, y.constructor = k, y[u] = k.displayName = "GeneratorFunction";
    function D(C) {
      ["next", "throw", "return"].forEach(function(S) {
        C[S] = function(O) {
          return this._invoke(S, O);
        };
      });
    }
    n.isGeneratorFunction = function(C) {
      var S = typeof C == "function" && C.constructor;
      return S ? S === k || // For the native GeneratorFunction constructor, the best we can
      // do is to check its .name property.
      (S.displayName || S.name) === "GeneratorFunction" : !1;
    }, n.mark = function(C) {
      return Object.setPrototypeOf ? Object.setPrototypeOf(C, y) : (C.__proto__ = y, u in C || (C[u] = "GeneratorFunction")), C.prototype = Object.create(T), C;
    }, n.awrap = function(C) {
      return { __await: C };
    };
    function H(C) {
      function S(I, M, B, V) {
        var K = f(C[I], C, M);
        if (K.type === "throw")
          V(K.arg);
        else {
          var G = K.arg, Q = G.value;
          return Q && typeof Q == "object" && o.call(Q, "__await") ? Promise.resolve(Q.__await).then(function(ue) {
            S("next", ue, B, V);
          }, function(ue) {
            S("throw", ue, B, V);
          }) : Promise.resolve(Q).then(function(ue) {
            G.value = ue, B(G);
          }, function(ue) {
            return S("throw", ue, B, V);
          });
        }
      }
      var O;
      function E(I, M) {
        function B() {
          return new Promise(function(V, K) {
            S(I, M, V, K);
          });
        }
        return O = // If enqueue has been called before, then we want to wait until
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
        O ? O.then(
          B,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          B
        ) : B();
      }
      this._invoke = E;
    }
    D(H.prototype), H.prototype[c] = function() {
      return this;
    }, n.AsyncIterator = H, n.async = function(C, S, O, E) {
      var I = new H(
        l(C, S, O, E)
      );
      return n.isGeneratorFunction(S) ? I : I.next().then(function(M) {
        return M.done ? M.value : I.next();
      });
    };
    function L(C, S, O) {
      var E = d;
      return function(M, B) {
        if (E === w)
          throw new Error("Generator is already running");
        if (E === m) {
          if (M === "throw")
            throw B;
          return N();
        }
        for (O.method = M, O.arg = B; ; ) {
          var V = O.delegate;
          if (V) {
            var K = q(V, O);
            if (K) {
              if (K === g)
                continue;
              return K;
            }
          }
          if (O.method === "next")
            O.sent = O._sent = O.arg;
          else if (O.method === "throw") {
            if (E === d)
              throw E = m, O.arg;
            O.dispatchException(O.arg);
          } else
            O.method === "return" && O.abrupt("return", O.arg);
          E = w;
          var G = f(C, S, O);
          if (G.type === "normal") {
            if (E = O.done ? m : h, G.arg === g)
              continue;
            return {
              value: G.arg,
              done: O.done
            };
          } else
            G.type === "throw" && (E = m, O.method = "throw", O.arg = G.arg);
        }
      };
    }
    function q(C, S) {
      var O = C.iterator[S.method];
      if (O === i) {
        if (S.delegate = null, S.method === "throw") {
          if (C.iterator.return && (S.method = "return", S.arg = i, q(C, S), S.method === "throw"))
            return g;
          S.method = "throw", S.arg = new TypeError(
            "The iterator does not provide a 'throw' method"
          );
        }
        return g;
      }
      var E = f(O, C.iterator, S.arg);
      if (E.type === "throw")
        return S.method = "throw", S.arg = E.arg, S.delegate = null, g;
      var I = E.arg;
      if (!I)
        return S.method = "throw", S.arg = new TypeError("iterator result is not an object"), S.delegate = null, g;
      if (I.done)
        S[C.resultName] = I.value, S.next = C.nextLoc, S.method !== "return" && (S.method = "next", S.arg = i);
      else
        return I;
      return S.delegate = null, g;
    }
    D(T), T[u] = "Generator", T[a] = function() {
      return this;
    }, T.toString = function() {
      return "[object Generator]";
    };
    function b(C) {
      var S = { tryLoc: C[0] };
      1 in C && (S.catchLoc = C[1]), 2 in C && (S.finallyLoc = C[2], S.afterLoc = C[3]), this.tryEntries.push(S);
    }
    function _(C) {
      var S = C.completion || {};
      S.type = "normal", delete S.arg, C.completion = S;
    }
    function p(C) {
      this.tryEntries = [{ tryLoc: "root" }], C.forEach(b, this), this.reset(!0);
    }
    n.keys = function(C) {
      var S = [];
      for (var O in C)
        S.push(O);
      return S.reverse(), function E() {
        for (; S.length; ) {
          var I = S.pop();
          if (I in C)
            return E.value = I, E.done = !1, E;
        }
        return E.done = !0, E;
      };
    };
    function P(C) {
      if (C) {
        var S = C[a];
        if (S)
          return S.call(C);
        if (typeof C.next == "function")
          return C;
        if (!isNaN(C.length)) {
          var O = -1, E = function I() {
            for (; ++O < C.length; )
              if (o.call(C, O))
                return I.value = C[O], I.done = !1, I;
            return I.value = i, I.done = !0, I;
          };
          return E.next = E;
        }
      }
      return { next: N };
    }
    n.values = P;
    function N() {
      return { value: i, done: !0 };
    }
    return p.prototype = {
      constructor: p,
      reset: function(C) {
        if (this.prev = 0, this.next = 0, this.sent = this._sent = i, this.done = !1, this.delegate = null, this.method = "next", this.arg = i, this.tryEntries.forEach(_), !C)
          for (var S in this)
            S.charAt(0) === "t" && o.call(this, S) && !isNaN(+S.slice(1)) && (this[S] = i);
      },
      stop: function() {
        this.done = !0;
        var C = this.tryEntries[0], S = C.completion;
        if (S.type === "throw")
          throw S.arg;
        return this.rval;
      },
      dispatchException: function(C) {
        if (this.done)
          throw C;
        var S = this;
        function O(K, G) {
          return M.type = "throw", M.arg = C, S.next = K, G && (S.method = "next", S.arg = i), !!G;
        }
        for (var E = this.tryEntries.length - 1; E >= 0; --E) {
          var I = this.tryEntries[E], M = I.completion;
          if (I.tryLoc === "root")
            return O("end");
          if (I.tryLoc <= this.prev) {
            var B = o.call(I, "catchLoc"), V = o.call(I, "finallyLoc");
            if (B && V) {
              if (this.prev < I.catchLoc)
                return O(I.catchLoc, !0);
              if (this.prev < I.finallyLoc)
                return O(I.finallyLoc);
            } else if (B) {
              if (this.prev < I.catchLoc)
                return O(I.catchLoc, !0);
            } else if (V) {
              if (this.prev < I.finallyLoc)
                return O(I.finallyLoc);
            } else
              throw new Error("try statement without catch or finally");
          }
        }
      },
      abrupt: function(C, S) {
        for (var O = this.tryEntries.length - 1; O >= 0; --O) {
          var E = this.tryEntries[O];
          if (E.tryLoc <= this.prev && o.call(E, "finallyLoc") && this.prev < E.finallyLoc) {
            var I = E;
            break;
          }
        }
        I && (C === "break" || C === "continue") && I.tryLoc <= S && S <= I.finallyLoc && (I = null);
        var M = I ? I.completion : {};
        return M.type = C, M.arg = S, I ? (this.method = "next", this.next = I.finallyLoc, g) : this.complete(M);
      },
      complete: function(C, S) {
        if (C.type === "throw")
          throw C.arg;
        return C.type === "break" || C.type === "continue" ? this.next = C.arg : C.type === "return" ? (this.rval = this.arg = C.arg, this.method = "return", this.next = "end") : C.type === "normal" && S && (this.next = S), g;
      },
      finish: function(C) {
        for (var S = this.tryEntries.length - 1; S >= 0; --S) {
          var O = this.tryEntries[S];
          if (O.finallyLoc === C)
            return this.complete(O.completion, O.afterLoc), _(O), g;
        }
      },
      catch: function(C) {
        for (var S = this.tryEntries.length - 1; S >= 0; --S) {
          var O = this.tryEntries[S];
          if (O.tryLoc === C) {
            var E = O.completion;
            if (E.type === "throw") {
              var I = E.arg;
              _(O);
            }
            return I;
          }
        }
        throw new Error("illegal catch attempt");
      },
      delegateYield: function(C, S, O) {
        return this.delegate = {
          iterator: P(C),
          resultName: S,
          nextLoc: O
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
})(jI);
var g0 = { exports: {} }, BI = g0.exports = typeof window < "u" && window.Math == Math ? window : typeof self < "u" && self.Math == Math ? self : Function("return this")();
typeof __g == "number" && (__g = BI);
var yf = g0.exports, m0 = { exports: {} }, zI = m0.exports = { version: "2.6.9" };
typeof __e == "number" && (__e = zI);
var _0 = m0.exports, HI = function(t) {
  if (typeof t != "function")
    throw TypeError(t + " is not a function!");
  return t;
}, VI = HI, UI = function(t, e, n) {
  if (VI(t), e === void 0)
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
}, b0 = {}, wf = function(t) {
  return typeof t == "object" ? t !== null : typeof t == "function";
}, GI = wf, WI = function(t) {
  if (!GI(t))
    throw TypeError(t + " is not an object!");
  return t;
}, y0 = function(t) {
  try {
    return !!t();
  } catch {
    return !0;
  }
}, kf = !y0(function() {
  return Object.defineProperty({}, "a", { get: function() {
    return 7;
  } }).a != 7;
}), qc, $g;
function KI() {
  if ($g)
    return qc;
  $g = 1;
  var t = wf, e = yf.document, n = t(e) && t(e.createElement);
  return qc = function(r) {
    return n ? e.createElement(r) : {};
  }, qc;
}
var ZI = !kf && !y0(function() {
  return Object.defineProperty(KI()("div"), "a", { get: function() {
    return 7;
  } }).a != 7;
}), ai = wf, JI = function(t, e) {
  if (!ai(t))
    return t;
  var n, r;
  if (e && typeof (n = t.toString) == "function" && !ai(r = n.call(t)) || typeof (n = t.valueOf) == "function" && !ai(r = n.call(t)) || !e && typeof (n = t.toString) == "function" && !ai(r = n.call(t)))
    return r;
  throw TypeError("Can't convert object to primitive value");
}, Cg = WI, YI = ZI, XI = JI, QI = Object.defineProperty;
b0.f = kf ? Object.defineProperty : function(e, n, r) {
  if (Cg(e), n = XI(n, !0), Cg(r), YI)
    try {
      return QI(e, n, r);
    } catch {
    }
  if ("get" in r || "set" in r)
    throw TypeError("Accessors not supported!");
  return "value" in r && (e[n] = r.value), e;
};
var eT = function(t, e) {
  return {
    enumerable: !(t & 1),
    configurable: !(t & 2),
    writable: !(t & 4),
    value: e
  };
}, tT = b0, nT = eT, rT = kf ? function(t, e, n) {
  return tT.f(t, e, nT(1, n));
} : function(t, e, n) {
  return t[e] = n, t;
}, oT = {}.hasOwnProperty, iT = function(t, e) {
  return oT.call(t, e);
}, ci = yf, jc = _0, Ig = UI, sT = rT, aT = iT, ui = "prototype", Te = function(t, e, n) {
  var r = t & Te.F, o = t & Te.G, i = t & Te.S, s = t & Te.P, a = t & Te.B, c = t & Te.W, u = o ? jc : jc[e] || (jc[e] = {}), l = u[ui], f = o ? ci : i ? ci[e] : (ci[e] || {})[ui], d, h, w;
  o && (n = e);
  for (d in n)
    h = !r && f && f[d] !== void 0, !(h && aT(u, d)) && (w = h ? f[d] : n[d], u[d] = o && typeof f[d] != "function" ? n[d] : a && h ? Ig(w, ci) : c && f[d] == w ? function(m) {
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
      return g[ui] = m[ui], g;
    }(w) : s && typeof w == "function" ? Ig(Function.call, w) : w, s && ((u.virtual || (u.virtual = {}))[d] = w, t & Te.R && l && !l[d] && sT(l, d, w)));
};
Te.F = 1;
Te.G = 2;
Te.S = 4;
Te.P = 8;
Te.B = 16;
Te.W = 32;
Te.U = 64;
Te.R = 128;
var cT = Te, Tg = cT;
Tg(Tg.G, { global: yf });
var uT = _0.global, w0 = lT(uT);
function lT(t) {
  return t && t.__esModule ? t : { default: t };
}
w0.default._babelPolyfill && typeof console < "u" && console.warn && console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended and may have consequences if different versions of the polyfills are applied sequentially. If you do need to load the polyfill more than once, use @babel/polyfill/noConflict instead to bypass the warning.");
w0.default._babelPolyfill = !0;
/*!
 * Vue.js v2.7.14
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
var Fe = Object.freeze({}), Z = Array.isArray;
function U(t) {
  return t == null;
}
function $(t) {
  return t != null;
}
function de(t) {
  return t === !0;
}
function fT(t) {
  return t === !1;
}
function $o(t) {
  return typeof t == "string" || typeof t == "number" || // $flow-disable-line
  typeof t == "symbol" || typeof t == "boolean";
}
function le(t) {
  return typeof t == "function";
}
function Oe(t) {
  return t !== null && typeof t == "object";
}
var Sf = Object.prototype.toString;
function Xe(t) {
  return Sf.call(t) === "[object Object]";
}
function dT(t) {
  return Sf.call(t) === "[object RegExp]";
}
function k0(t) {
  var e = parseFloat(String(t));
  return e >= 0 && Math.floor(e) === e && isFinite(t);
}
function Ju(t) {
  return $(t) && typeof t.then == "function" && typeof t.catch == "function";
}
function hT(t) {
  return t == null ? "" : Array.isArray(t) || Xe(t) && t.toString === Sf ? JSON.stringify(t, null, 2) : String(t);
}
function ho(t) {
  var e = parseFloat(t);
  return isNaN(e) ? t : e;
}
function Ce(t, e) {
  for (var n = /* @__PURE__ */ Object.create(null), r = t.split(","), o = 0; o < r.length; o++)
    n[r[o]] = !0;
  return e ? function(i) {
    return n[i.toLowerCase()];
  } : function(i) {
    return n[i];
  };
}
var pT = Ce("slot,component", !0), vT = Ce("key,ref,slot,slot-scope,is");
function mn(t, e) {
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
var gT = Object.prototype.hasOwnProperty;
function Re(t, e) {
  return gT.call(t, e);
}
function bt(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(r) {
    var o = e[r];
    return o || (e[r] = t(r));
  };
}
var mT = /-(\w)/g, Je = bt(function(t) {
  return t.replace(mT, function(e, n) {
    return n ? n.toUpperCase() : "";
  });
}), S0 = bt(function(t) {
  return t.charAt(0).toUpperCase() + t.slice(1);
}), _T = /\B([A-Z])/g, Fn = bt(function(t) {
  return t.replace(_T, "-$1").toLowerCase();
});
function bT(t, e) {
  function n(r) {
    var o = arguments.length;
    return o ? o > 1 ? t.apply(e, arguments) : t.call(e, r) : t.call(e);
  }
  return n._length = t.length, n;
}
function yT(t, e) {
  return t.bind(e);
}
var x0 = Function.prototype.bind ? yT : bT;
function Yu(t, e) {
  e = e || 0;
  for (var n = t.length - e, r = new Array(n); n--; )
    r[n] = t[n + e];
  return r;
}
function X(t, e) {
  for (var n in e)
    t[n] = e[n];
  return t;
}
function E0(t) {
  for (var e = {}, n = 0; n < t.length; n++)
    t[n] && X(e, t[n]);
  return e;
}
function ge(t, e, n) {
}
var ot = function(t, e, n) {
  return !1;
}, $0 = function(t) {
  return t;
};
function wT(t) {
  return t.reduce(function(e, n) {
    return e.concat(n.staticKeys || []);
  }, []).join(",");
}
function Rn(t, e) {
  if (t === e)
    return !0;
  var n = Oe(t), r = Oe(e);
  if (n && r)
    try {
      var o = Array.isArray(t), i = Array.isArray(e);
      if (o && i)
        return t.length === e.length && t.every(function(c, u) {
          return Rn(c, e[u]);
        });
      if (t instanceof Date && e instanceof Date)
        return t.getTime() === e.getTime();
      if (!o && !i) {
        var s = Object.keys(t), a = Object.keys(e);
        return s.length === a.length && s.every(function(c) {
          return Rn(t[c], e[c]);
        });
      } else
        return !1;
    } catch {
      return !1;
    }
  else
    return !n && !r ? String(t) === String(e) : !1;
}
function C0(t, e) {
  for (var n = 0; n < t.length; n++)
    if (Rn(t[n], e))
      return n;
  return -1;
}
function Ui(t) {
  var e = !1;
  return function() {
    e || (e = !0, t.apply(this, arguments));
  };
}
function kT(t, e) {
  return t === e ? t === 0 && 1 / t !== 1 / e : t === t || e === e;
}
var Ag = "data-server-rendered", As = ["component", "directive", "filter"], I0 = [
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
], Ye = {
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
  isReservedTag: ot,
  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: ot,
  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: ot,
  /**
   * Get the namespace of an element
   */
  getTagNamespace: ge,
  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: $0,
  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: ot,
  /**
   * Perform updates asynchronously. Intended to be used by Vue Test Utils
   * This will significantly reduce performance if set to false.
   */
  async: !0,
  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: I0
}, T0 = /a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;
function A0(t) {
  var e = (t + "").charCodeAt(0);
  return e === 36 || e === 95;
}
function sn(t, e, n, r) {
  Object.defineProperty(t, e, {
    value: n,
    enumerable: !!r,
    writable: !0,
    configurable: !0
  });
}
var ST = new RegExp("[^".concat(T0.source, ".$_\\d]"));
function xT(t) {
  if (!ST.test(t)) {
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
var ET = "__proto__" in {}, Me = typeof window < "u", st = Me && window.navigator.userAgent.toLowerCase(), cn = st && /msie|trident/.test(st), Cr = st && st.indexOf("msie 9.0") > 0, O0 = st && st.indexOf("edge/") > 0;
st && st.indexOf("android") > 0;
var $T = st && /iphone|ipad|ipod|ios/.test(st), Og = st && st.match(/firefox\/(\d+)/), Xu = {}.watch, D0 = !1;
if (Me)
  try {
    var Dg = {};
    Object.defineProperty(Dg, "passive", {
      get: function() {
        D0 = !0;
      }
    }), window.addEventListener("test-passive", null, Dg);
  } catch {
  }
var li, Ir = function() {
  return li === void 0 && (!Me && typeof global < "u" ? li = global.process && global.process.env.VUE_ENV === "server" : li = !1), li;
}, Gi = Me && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function dr(t) {
  return typeof t == "function" && /native code/.test(t.toString());
}
var Co = typeof Symbol < "u" && dr(Symbol) && typeof Reflect < "u" && dr(Reflect.ownKeys), po;
typeof Set < "u" && dr(Set) ? po = Set : po = /** @class */
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
var oo = null;
function un(t) {
  t === void 0 && (t = null), t || oo && oo._scope.off(), oo = t, t && t._scope.on();
}
var Qe = (
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
), An = function(t) {
  t === void 0 && (t = "");
  var e = new Qe();
  return e.text = t, e.isComment = !0, e;
};
function ar(t) {
  return new Qe(void 0, void 0, void 0, String(t));
}
function Qu(t) {
  var e = new Qe(
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
var CT = 0, Ti = [], IT = function() {
  for (var t = 0; t < Ti.length; t++) {
    var e = Ti[t];
    e.subs = e.subs.filter(function(n) {
      return n;
    }), e._pending = !1;
  }
  Ti.length = 0;
}, ln = (
  /** @class */
  function() {
    function t() {
      this._pending = !1, this.id = CT++, this.subs = [];
    }
    return t.prototype.addSub = function(e) {
      this.subs.push(e);
    }, t.prototype.removeSub = function(e) {
      this.subs[this.subs.indexOf(e)] = null, this._pending || (this._pending = !0, Ti.push(this));
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
ln.target = null;
var Ai = [];
function Tr(t) {
  Ai.push(t), ln.target = t;
}
function Ar() {
  Ai.pop(), ln.target = Ai[Ai.length - 1];
}
var P0 = Array.prototype, Wi = Object.create(P0), TT = [
  "push",
  "pop",
  "shift",
  "unshift",
  "splice",
  "sort",
  "reverse"
];
TT.forEach(function(t) {
  var e = P0[t];
  sn(Wi, t, function() {
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
var Pg = Object.getOwnPropertyNames(Wi), F0 = {}, xf = !0;
function fn(t) {
  xf = t;
}
var AT = {
  notify: ge,
  depend: ge,
  addSub: ge,
  removeSub: ge
}, Fg = (
  /** @class */
  function() {
    function t(e, n, r) {
      if (n === void 0 && (n = !1), r === void 0 && (r = !1), this.value = e, this.shallow = n, this.mock = r, this.dep = r ? AT : new ln(), this.vmCount = 0, sn(e, "__ob__", this), Z(e)) {
        if (!r)
          if (ET)
            e.__proto__ = Wi;
          else
            for (var o = 0, i = Pg.length; o < i; o++) {
              var s = Pg[o];
              sn(e, s, Wi[s]);
            }
        n || this.observeArray(e);
      } else
        for (var a = Object.keys(e), o = 0; o < a.length; o++) {
          var s = a[o];
          Nn(e, s, F0, void 0, n, r);
        }
    }
    return t.prototype.observeArray = function(e) {
      for (var n = 0, r = e.length; n < r; n++)
        Gt(e[n], !1, this.mock);
    }, t;
  }()
);
function Gt(t, e, n) {
  if (t && Re(t, "__ob__") && t.__ob__ instanceof Fg)
    return t.__ob__;
  if (xf && (n || !Ir()) && (Z(t) || Xe(t)) && Object.isExtensible(t) && !t.__v_skip && !$t(t) && !(t instanceof Qe))
    return new Fg(t, e, n);
}
function Nn(t, e, n, r, o, i) {
  var s = new ln(), a = Object.getOwnPropertyDescriptor(t, e);
  if (!(a && a.configurable === !1)) {
    var c = a && a.get, u = a && a.set;
    (!c || u) && (n === F0 || arguments.length === 2) && (n = t[e]);
    var l = !o && Gt(n, !1, i);
    return Object.defineProperty(t, e, {
      enumerable: !0,
      configurable: !0,
      get: function() {
        var d = c ? c.call(t) : n;
        return ln.target && (s.depend(), l && (l.dep.depend(), Z(d) && N0(d))), $t(d) && !o ? d.value : d;
      },
      set: function(d) {
        var h = c ? c.call(t) : n;
        if (kT(h, d)) {
          if (u)
            u.call(t, d);
          else {
            if (c)
              return;
            if (!o && $t(h) && !$t(d)) {
              h.value = d;
              return;
            } else
              n = d;
          }
          l = !o && Gt(d, !1, i), s.notify();
        }
      }
    }), s;
  }
}
function Ef(t, e, n) {
  if (!$f(t)) {
    var r = t.__ob__;
    return Z(t) && k0(e) ? (t.length = Math.max(t.length, e), t.splice(e, 1, n), r && !r.shallow && r.mock && Gt(n, !1, !0), n) : e in t && !(e in Object.prototype) ? (t[e] = n, n) : t._isVue || r && r.vmCount ? n : r ? (Nn(r.value, e, n, void 0, r.shallow, r.mock), r.dep.notify(), n) : (t[e] = n, n);
  }
}
function R0(t, e) {
  if (Z(t) && k0(e)) {
    t.splice(e, 1);
    return;
  }
  var n = t.__ob__;
  t._isVue || n && n.vmCount || $f(t) || Re(t, e) && (delete t[e], n && n.dep.notify());
}
function N0(t) {
  for (var e = void 0, n = 0, r = t.length; n < r; n++)
    e = t[n], e && e.__ob__ && e.__ob__.dep.depend(), Z(e) && N0(e);
}
function M0(t) {
  return OT(t, !0), sn(t, "__v_isShallow", !0), t;
}
function OT(t, e) {
  $f(t) || Gt(
    t,
    e,
    Ir()
    /* ssr mock reactivity */
  );
}
function $f(t) {
  return !!(t && t.__v_isReadonly);
}
function $t(t) {
  return !!(t && t.__v_isRef === !0);
}
function el(t, e, n) {
  Object.defineProperty(t, n, {
    enumerable: !0,
    configurable: !0,
    get: function() {
      var r = e[n];
      if ($t(r))
        return r.value;
      var o = r && r.__ob__;
      return o && o.dep.depend(), r;
    },
    set: function(r) {
      var o = e[n];
      $t(o) && !$t(r) ? o.value = r : e[n] = r;
    }
  });
}
var Rg = bt(function(t) {
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
function tl(t, e) {
  function n() {
    var r = n.fns;
    if (Z(r))
      for (var o = r.slice(), i = 0; i < o.length; i++)
        dn(o[i], null, arguments, e, "v-on handler");
    else
      return dn(r, null, arguments, e, "v-on handler");
  }
  return n.fns = t, n;
}
function L0(t, e, n, r, o, i) {
  var s, a, c, u;
  for (s in t)
    a = t[s], c = e[s], u = Rg(s), U(a) || (U(c) ? (U(a.fns) && (a = t[s] = tl(a, i)), de(u.once) && (a = t[s] = o(u.name, a, u.capture)), n(u.name, a, u.capture, u.passive, u.params)) : a !== c && (c.fns = a, t[s] = c));
  for (s in e)
    U(t[s]) && (u = Rg(s), r(u.name, e[s], u.capture));
}
function tn(t, e, n) {
  t instanceof Qe && (t = t.data.hook || (t.data.hook = {}));
  var r, o = t[e];
  function i() {
    n.apply(this, arguments), mn(r.fns, i);
  }
  U(o) ? r = tl([i]) : $(o.fns) && de(o.merged) ? (r = o, r.fns.push(i)) : r = tl([o, i]), r.merged = !0, t[e] = r;
}
function DT(t, e, n) {
  var r = e.options.props;
  if (!U(r)) {
    var o = {}, i = t.attrs, s = t.props;
    if ($(i) || $(s))
      for (var a in r) {
        var c = Fn(a);
        Ng(o, s, a, c, !0) || Ng(o, i, a, c, !1);
      }
    return o;
  }
}
function Ng(t, e, n, r, o) {
  if ($(e)) {
    if (Re(e, n))
      return t[n] = e[n], o || delete e[n], !0;
    if (Re(e, r))
      return t[n] = e[r], o || delete e[r], !0;
  }
  return !1;
}
function PT(t) {
  for (var e = 0; e < t.length; e++)
    if (Z(t[e]))
      return Array.prototype.concat.apply([], t);
  return t;
}
function Cf(t) {
  return $o(t) ? [ar(t)] : Z(t) ? q0(t) : void 0;
}
function Wr(t) {
  return $(t) && $(t.text) && fT(t.isComment);
}
function q0(t, e) {
  var n = [], r, o, i, s;
  for (r = 0; r < t.length; r++)
    o = t[r], !(U(o) || typeof o == "boolean") && (i = n.length - 1, s = n[i], Z(o) ? o.length > 0 && (o = q0(o, "".concat(e || "", "_").concat(r)), Wr(o[0]) && Wr(s) && (n[i] = ar(s.text + o[0].text), o.shift()), n.push.apply(n, o)) : $o(o) ? Wr(s) ? n[i] = ar(s.text + o) : o !== "" && n.push(ar(o)) : Wr(o) && Wr(s) ? n[i] = ar(s.text + o.text) : (de(t._isVList) && $(o.tag) && U(o.key) && $(e) && (o.key = "__vlist".concat(e, "_").concat(r, "__")), n.push(o)));
  return n;
}
var FT = 1, j0 = 2;
function Ki(t, e, n, r, o, i) {
  return (Z(n) || $o(n)) && (o = r, r = n, n = void 0), de(i) && (o = j0), RT(t, e, n, r, o);
}
function RT(t, e, n, r, o) {
  if ($(n) && $(n.__ob__) || ($(n) && $(n.is) && (e = n.is), !e))
    return An();
  Z(r) && le(r[0]) && (n = n || {}, n.scopedSlots = { default: r[0] }, r.length = 0), o === j0 ? r = Cf(r) : o === FT && (r = PT(r));
  var i, s;
  if (typeof e == "string") {
    var a = void 0;
    s = t.$vnode && t.$vnode.ns || Ye.getTagNamespace(e), Ye.isReservedTag(e) ? i = new Qe(Ye.parsePlatformTagName(e), n, r, void 0, void 0, t) : (!n || !n.pre) && $(a = Qi(t.$options, "components", e)) ? i = Kg(a, n, t, r, e) : i = new Qe(e, n, r, void 0, void 0, t);
  } else
    i = Kg(e, n, t, r);
  return Z(i) ? i : $(i) ? ($(s) && B0(i, s), $(n) && NT(n), i) : An();
}
function B0(t, e, n) {
  if (t.ns = e, t.tag === "foreignObject" && (e = void 0, n = !0), $(t.children))
    for (var r = 0, o = t.children.length; r < o; r++) {
      var i = t.children[r];
      $(i.tag) && (U(i.ns) || de(n) && i.tag !== "svg") && B0(i, e, n);
    }
}
function NT(t) {
  Oe(t.style) && Yi(t.style), Oe(t.class) && Yi(t.class);
}
function MT(t, e) {
  var n = null, r, o, i, s;
  if (Z(t) || typeof t == "string")
    for (n = new Array(t.length), r = 0, o = t.length; r < o; r++)
      n[r] = e(t[r], r);
  else if (typeof t == "number")
    for (n = new Array(t), r = 0; r < t; r++)
      n[r] = e(r + 1, r);
  else if (Oe(t))
    if (Co && t[Symbol.iterator]) {
      n = [];
      for (var a = t[Symbol.iterator](), c = a.next(); !c.done; )
        n.push(e(c.value, n.length)), c = a.next();
    } else
      for (i = Object.keys(t), n = new Array(i.length), r = 0, o = i.length; r < o; r++)
        s = i[r], n[r] = e(t[s], s, r);
  return $(n) || (n = []), n._isVList = !0, n;
}
function LT(t, e, n, r) {
  var o = this.$scopedSlots[t], i;
  o ? (n = n || {}, r && (n = X(X({}, r), n)), i = o(n) || (le(e) ? e() : e)) : i = this.$slots[t] || (le(e) ? e() : e);
  var s = n && n.slot;
  return s ? this.$createElement("template", { slot: s }, i) : i;
}
function qT(t) {
  return Qi(this.$options, "filters", t) || $0;
}
function Mg(t, e) {
  return Z(t) ? t.indexOf(e) === -1 : t !== e;
}
function jT(t, e, n, r, o) {
  var i = Ye.keyCodes[e] || n;
  return o && r && !Ye.keyCodes[e] ? Mg(o, r) : i ? Mg(i, t) : r ? Fn(r) !== e : t === void 0;
}
function BT(t, e, n, r, o) {
  if (n && Oe(n)) {
    Z(n) && (n = E0(n));
    var i = void 0, s = function(c) {
      if (c === "class" || c === "style" || vT(c))
        i = t;
      else {
        var u = t.attrs && t.attrs.type;
        i = r || Ye.mustUseProp(e, u, c) ? t.domProps || (t.domProps = {}) : t.attrs || (t.attrs = {});
      }
      var l = Je(c), f = Fn(c);
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
function zT(t, e) {
  var n = this._staticTrees || (this._staticTrees = []), r = n[t];
  return r && !e || (r = n[t] = this.$options.staticRenderFns[t].call(
    this._renderProxy,
    this._c,
    this
    // for render fns generated for functional component templates
  ), z0(r, "__static__".concat(t), !1)), r;
}
function HT(t, e, n) {
  return z0(t, "__once__".concat(e).concat(n ? "_".concat(n) : ""), !0), t;
}
function z0(t, e, n) {
  if (Z(t))
    for (var r = 0; r < t.length; r++)
      t[r] && typeof t[r] != "string" && Lg(t[r], "".concat(e, "_").concat(r), n);
  else
    Lg(t, e, n);
}
function Lg(t, e, n) {
  t.isStatic = !0, t.key = e, t.isOnce = n;
}
function VT(t, e) {
  if (e && Xe(e)) {
    var n = t.on = t.on ? X({}, t.on) : {};
    for (var r in e) {
      var o = n[r], i = e[r];
      n[r] = o ? [].concat(o, i) : i;
    }
  }
  return t;
}
function H0(t, e, n, r) {
  e = e || { $stable: !n };
  for (var o = 0; o < t.length; o++) {
    var i = t[o];
    Z(i) ? H0(i, e, n) : i && (i.proxy && (i.fn.proxy = !0), e[i.key] = i.fn);
  }
  return r && (e.$key = r), e;
}
function UT(t, e) {
  for (var n = 0; n < e.length; n += 2) {
    var r = e[n];
    typeof r == "string" && r && (t[e[n]] = e[n + 1]);
  }
  return t;
}
function GT(t, e) {
  return typeof t == "string" ? e + t : t;
}
function V0(t) {
  t._o = HT, t._n = ho, t._s = hT, t._l = MT, t._t = LT, t._q = Rn, t._i = C0, t._m = zT, t._f = qT, t._k = jT, t._b = BT, t._v = ar, t._e = An, t._u = H0, t._g = VT, t._d = UT, t._p = GT;
}
function If(t, e) {
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
    n[u].every(WT) && delete n[u];
  return n;
}
function WT(t) {
  return t.isComment && !t.asyncFactory || t.text === " ";
}
function vo(t) {
  return t.isComment && t.asyncFactory;
}
function io(t, e, n, r) {
  var o, i = Object.keys(n).length > 0, s = e ? !!e.$stable : !i, a = e && e.$key;
  if (!e)
    o = {};
  else {
    if (e._normalized)
      return e._normalized;
    if (s && r && r !== Fe && a === r.$key && !i && !r.$hasNormal)
      return r;
    o = {};
    for (var c in e)
      e[c] && c[0] !== "$" && (o[c] = KT(t, n, c, e[c]));
  }
  for (var u in n)
    u in o || (o[u] = ZT(n, u));
  return e && Object.isExtensible(e) && (e._normalized = o), sn(o, "$stable", s), sn(o, "$key", a), sn(o, "$hasNormal", i), o;
}
function KT(t, e, n, r) {
  var o = function() {
    var i = oo;
    un(t);
    var s = arguments.length ? r.apply(null, arguments) : r({});
    s = s && typeof s == "object" && !Z(s) ? [s] : Cf(s);
    var a = s && s[0];
    return un(i), s && (!a || s.length === 1 && a.isComment && !vo(a)) ? void 0 : s;
  };
  return r.proxy && Object.defineProperty(e, n, {
    get: o,
    enumerable: !0,
    configurable: !0
  }), o;
}
function ZT(t, e) {
  return function() {
    return t[e];
  };
}
function JT(t) {
  var e = t.$options, n = e.setup;
  if (n) {
    var r = t._setupContext = YT(t);
    un(t), Tr();
    var o = dn(n, null, [t._props || M0({}), r], t, "setup");
    if (Ar(), un(), le(o))
      e.render = o;
    else if (Oe(o))
      if (t._setupState = o, o.__sfc) {
        var s = t._setupProxy = {};
        for (var i in o)
          i !== "__sfc" && el(s, o, i);
      } else
        for (var i in o)
          A0(i) || el(t, o, i);
  }
}
function YT(t) {
  return {
    get attrs() {
      if (!t._attrsProxy) {
        var e = t._attrsProxy = {};
        sn(e, "_v_attr_proxy", !0), Zi(e, t.$attrs, Fe, t, "$attrs");
      }
      return t._attrsProxy;
    },
    get listeners() {
      if (!t._listenersProxy) {
        var e = t._listenersProxy = {};
        Zi(e, t.$listeners, Fe, t, "$listeners");
      }
      return t._listenersProxy;
    },
    get slots() {
      return QT(t);
    },
    emit: x0(t.$emit, t),
    expose: function(e) {
      e && Object.keys(e).forEach(function(n) {
        return el(t, e, n);
      });
    }
  };
}
function Zi(t, e, n, r, o) {
  var i = !1;
  for (var s in e)
    s in t ? e[s] !== n[s] && (i = !0) : (i = !0, XT(t, s, r, o));
  for (var s in t)
    s in e || (i = !0, delete t[s]);
  return i;
}
function XT(t, e, n, r) {
  Object.defineProperty(t, e, {
    enumerable: !0,
    configurable: !0,
    get: function() {
      return n[r][e];
    }
  });
}
function QT(t) {
  return t._slotsProxy || U0(t._slotsProxy = {}, t.$scopedSlots), t._slotsProxy;
}
function U0(t, e) {
  for (var n in e)
    t[n] = e[n];
  for (var n in t)
    n in e || delete t[n];
}
function eA(t) {
  t._vnode = null, t._staticTrees = null;
  var e = t.$options, n = t.$vnode = e._parentVnode, r = n && n.context;
  t.$slots = If(e._renderChildren, r), t.$scopedSlots = n ? io(t.$parent, n.data.scopedSlots, t.$slots) : Fe, t._c = function(i, s, a, c) {
    return Ki(t, i, s, a, c, !1);
  }, t.$createElement = function(i, s, a, c) {
    return Ki(t, i, s, a, c, !0);
  };
  var o = n && n.data;
  Nn(t, "$attrs", o && o.attrs || Fe, null, !0), Nn(t, "$listeners", e._parentListeners || Fe, null, !0);
}
var nl = null;
function tA(t) {
  V0(t.prototype), t.prototype.$nextTick = function(e) {
    return Df(e, this);
  }, t.prototype._render = function() {
    var e = this, n = e.$options, r = n.render, o = n._parentVnode;
    o && e._isMounted && (e.$scopedSlots = io(e.$parent, o.data.scopedSlots, e.$slots, e.$scopedSlots), e._slotsProxy && U0(e._slotsProxy, e.$scopedSlots)), e.$vnode = o;
    var i;
    try {
      un(e), nl = e, i = r.call(e._renderProxy, e.$createElement);
    } catch (s) {
      Mn(s, e, "render"), i = e._vnode;
    } finally {
      nl = null, un();
    }
    return Z(i) && i.length === 1 && (i = i[0]), i instanceof Qe || (i = An()), i.parent = o, i;
  };
}
function Bc(t, e) {
  return (t.__esModule || Co && t[Symbol.toStringTag] === "Module") && (t = t.default), Oe(t) ? e.extend(t) : t;
}
function nA(t, e, n, r, o) {
  var i = An();
  return i.asyncFactory = t, i.asyncMeta = { data: e, context: n, children: r, tag: o }, i;
}
function rA(t, e) {
  if (de(t.error) && $(t.errorComp))
    return t.errorComp;
  if ($(t.resolved))
    return t.resolved;
  var n = nl;
  if (n && $(t.owners) && t.owners.indexOf(n) === -1 && t.owners.push(n), de(t.loading) && $(t.loadingComp))
    return t.loadingComp;
  if (n && !$(t.owners)) {
    var r = t.owners = [n], o = !0, i = null, s = null;
    n.$on("hook:destroyed", function() {
      return mn(r, n);
    });
    var a = function(f) {
      for (var d = 0, h = r.length; d < h; d++)
        r[d].$forceUpdate();
      f && (r.length = 0, i !== null && (clearTimeout(i), i = null), s !== null && (clearTimeout(s), s = null));
    }, c = Ui(function(f) {
      t.resolved = Bc(f, e), o ? r.length = 0 : a(!0);
    }), u = Ui(function(f) {
      $(t.errorComp) && (t.error = !0, a(!0));
    }), l = t(c, u);
    return Oe(l) && (Ju(l) ? U(t.resolved) && l.then(c, u) : Ju(l.component) && (l.component.then(c, u), $(l.error) && (t.errorComp = Bc(l.error, e)), $(l.loading) && (t.loadingComp = Bc(l.loading, e), l.delay === 0 ? t.loading = !0 : i = setTimeout(function() {
      i = null, U(t.resolved) && U(t.error) && (t.loading = !0, a(!1));
    }, l.delay || 200)), $(l.timeout) && (s = setTimeout(function() {
      s = null, U(t.resolved) && u(null);
    }, l.timeout)))), o = !1, t.loading ? t.loadingComp : t.resolved;
  }
}
function G0(t) {
  if (Z(t))
    for (var e = 0; e < t.length; e++) {
      var n = t[e];
      if ($(n) && ($(n.componentOptions) || vo(n)))
        return n;
    }
}
function oA(t) {
  t._events = /* @__PURE__ */ Object.create(null), t._hasHookEvent = !1;
  var e = t.$options._parentListeners;
  e && W0(t, e);
}
var go;
function iA(t, e) {
  go.$on(t, e);
}
function sA(t, e) {
  go.$off(t, e);
}
function aA(t, e) {
  var n = go;
  return function r() {
    var o = e.apply(null, arguments);
    o !== null && n.$off(t, r);
  };
}
function W0(t, e, n) {
  go = t, L0(e, n || {}, iA, sA, aA, t), go = void 0;
}
function cA(t) {
  var e = /^hook:/;
  t.prototype.$on = function(n, r) {
    var o = this;
    if (Z(n))
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
    if (Z(n)) {
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
      o = o.length > 1 ? Yu(o) : o;
      for (var i = Yu(arguments, 1), s = 'event handler for "'.concat(n, '"'), a = 0, c = o.length; a < c; a++)
        dn(o[a], r, i, r, s);
    }
    return r;
  };
}
var On = null;
function K0(t) {
  var e = On;
  return On = t, function() {
    On = e;
  };
}
function uA(t) {
  var e = t.$options, n = e.parent;
  if (n && !e.abstract) {
    for (; n.$options.abstract && n.$parent; )
      n = n.$parent;
    n.$children.push(t);
  }
  t.$parent = n, t.$root = n ? n.$root : t, t.$children = [], t.$refs = {}, t._provided = n ? n._provided : /* @__PURE__ */ Object.create(null), t._watcher = null, t._inactive = null, t._directInactive = !1, t._isMounted = !1, t._isDestroyed = !1, t._isBeingDestroyed = !1;
}
function lA(t) {
  t.prototype._update = function(e, n) {
    var r = this, o = r.$el, i = r._vnode, s = K0(r);
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
      gt(e, "beforeDestroy"), e._isBeingDestroyed = !0;
      var n = e.$parent;
      n && !n._isBeingDestroyed && !e.$options.abstract && mn(n.$children, e), e._scope.stop(), e._data.__ob__ && e._data.__ob__.vmCount--, e._isDestroyed = !0, e.__patch__(e._vnode, null), gt(e, "destroyed"), e.$off(), e.$el && (e.$el.__vue__ = null), e.$vnode && (e.$vnode.parent = null);
    }
  };
}
function fA(t, e, n) {
  t.$el = e, t.$options.render || (t.$options.render = An), gt(t, "beforeMount");
  var r;
  r = function() {
    t._update(t._render(), n);
  };
  var o = {
    before: function() {
      t._isMounted && !t._isDestroyed && gt(t, "beforeUpdate");
    }
  };
  new Pf(
    t,
    r,
    ge,
    o,
    !0
    /* isRenderWatcher */
  ), n = !1;
  var i = t._preWatchers;
  if (i)
    for (var s = 0; s < i.length; s++)
      i[s].run();
  return t.$vnode == null && (t._isMounted = !0, gt(t, "mounted")), t;
}
function dA(t, e, n, r, o) {
  var i = r.data.scopedSlots, s = t.$scopedSlots, a = !!(i && !i.$stable || s !== Fe && !s.$stable || i && t.$scopedSlots.$key !== i.$key || !i && t.$scopedSlots.$key), c = !!(o || // has new static slots
  t.$options._renderChildren || // has old static slots
  a), u = t.$vnode;
  t.$options._parentVnode = r, t.$vnode = r, t._vnode && (t._vnode.parent = r), t.$options._renderChildren = o;
  var l = r.data.attrs || Fe;
  t._attrsProxy && Zi(t._attrsProxy, l, u.data && u.data.attrs || Fe, t, "$attrs") && (c = !0), t.$attrs = l, n = n || Fe;
  var f = t.$options._parentListeners;
  if (t._listenersProxy && Zi(t._listenersProxy, n, f || Fe, t, "$listeners"), t.$listeners = t.$options._parentListeners = n, W0(t, n, f), e && t.$options.props) {
    fn(!1);
    for (var d = t._props, h = t.$options._propKeys || [], w = 0; w < h.length; w++) {
      var m = h[w], g = t.$options.props;
      d[m] = Lf(m, g, e, t);
    }
    fn(!0), t.$options.propsData = e;
  }
  c && (t.$slots = If(o, r.context), t.$forceUpdate());
}
function Z0(t) {
  for (; t && (t = t.$parent); )
    if (t._inactive)
      return !0;
  return !1;
}
function Tf(t, e) {
  if (e) {
    if (t._directInactive = !1, Z0(t))
      return;
  } else if (t._directInactive)
    return;
  if (t._inactive || t._inactive === null) {
    t._inactive = !1;
    for (var n = 0; n < t.$children.length; n++)
      Tf(t.$children[n]);
    gt(t, "activated");
  }
}
function J0(t, e) {
  if (!(e && (t._directInactive = !0, Z0(t))) && !t._inactive) {
    t._inactive = !0;
    for (var n = 0; n < t.$children.length; n++)
      J0(t.$children[n]);
    gt(t, "deactivated");
  }
}
function gt(t, e, n, r) {
  r === void 0 && (r = !0), Tr();
  var o = oo;
  r && un(t);
  var i = t.$options[e], s = "".concat(e, " hook");
  if (i)
    for (var a = 0, c = i.length; a < c; a++)
      dn(i[a], t, n || null, t, s);
  t._hasHookEvent && t.$emit("hook:" + e), r && un(o), Ar();
}
var zt = [], Af = [], Ji = {}, rl = !1, Of = !1, cr = 0;
function hA() {
  cr = zt.length = Af.length = 0, Ji = {}, rl = Of = !1;
}
var Y0 = 0, ol = Date.now;
if (Me && !cn) {
  var zc = window.performance;
  zc && typeof zc.now == "function" && ol() > document.createEvent("Event").timeStamp && (ol = function() {
    return zc.now();
  });
}
var pA = function(t, e) {
  if (t.post) {
    if (!e.post)
      return 1;
  } else if (e.post)
    return -1;
  return t.id - e.id;
};
function vA() {
  Y0 = ol(), Of = !0;
  var t, e;
  for (zt.sort(pA), cr = 0; cr < zt.length; cr++)
    t = zt[cr], t.before && t.before(), e = t.id, Ji[e] = null, t.run();
  var n = Af.slice(), r = zt.slice();
  hA(), _A(n), gA(r), IT(), Gi && Ye.devtools && Gi.emit("flush");
}
function gA(t) {
  for (var e = t.length; e--; ) {
    var n = t[e], r = n.vm;
    r && r._watcher === n && r._isMounted && !r._isDestroyed && gt(r, "updated");
  }
}
function mA(t) {
  t._inactive = !1, Af.push(t);
}
function _A(t) {
  for (var e = 0; e < t.length; e++)
    t[e]._inactive = !0, Tf(
      t[e],
      !0
      /* true */
    );
}
function bA(t) {
  var e = t.id;
  if (Ji[e] == null && !(t === ln.target && t.noRecurse)) {
    if (Ji[e] = !0, !Of)
      zt.push(t);
    else {
      for (var n = zt.length - 1; n > cr && zt[n].id > t.id; )
        n--;
      zt.splice(n + 1, 0, t);
    }
    rl || (rl = !0, Df(vA));
  }
}
var Ke, yA = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = !1), this.detached = e, this.active = !0, this.effects = [], this.cleanups = [], this.parent = Ke, !e && Ke && (this.index = (Ke.scopes || (Ke.scopes = [])).push(this) - 1);
    }
    return t.prototype.run = function(e) {
      if (this.active) {
        var n = Ke;
        try {
          return Ke = this, e();
        } finally {
          Ke = n;
        }
      }
    }, t.prototype.on = function() {
      Ke = this;
    }, t.prototype.off = function() {
      Ke = this.parent;
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
function wA(t, e) {
  e === void 0 && (e = Ke), e && e.active && e.effects.push(t);
}
function kA(t) {
  var e = t._provided, n = t.$parent && t.$parent._provided;
  return n === e ? t._provided = Object.create(n) : e;
}
function Mn(t, e, n) {
  Tr();
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
              qg(a, r, "errorCaptured hook");
            }
      }
    qg(t, e, n);
  } finally {
    Ar();
  }
}
function dn(t, e, n, r, o) {
  var i;
  try {
    i = n ? t.apply(e, n) : t.call(e), i && !i._isVue && Ju(i) && !i._handled && (i.catch(function(s) {
      return Mn(s, r, o + " (Promise/async)");
    }), i._handled = !0);
  } catch (s) {
    Mn(s, r, o);
  }
  return i;
}
function qg(t, e, n) {
  if (Ye.errorHandler)
    try {
      return Ye.errorHandler.call(null, t, e, n);
    } catch (r) {
      r !== t && jg(r);
    }
  jg(t);
}
function jg(t, e, n) {
  if (Me && typeof console < "u")
    console.error(t);
  else
    throw t;
}
var il = !1, sl = [], al = !1;
function fi() {
  al = !1;
  var t = sl.slice(0);
  sl.length = 0;
  for (var e = 0; e < t.length; e++)
    t[e]();
}
var Qr;
if (typeof Promise < "u" && dr(Promise)) {
  var SA = Promise.resolve();
  Qr = function() {
    SA.then(fi), $T && setTimeout(ge);
  }, il = !0;
} else if (!cn && typeof MutationObserver < "u" && (dr(MutationObserver) || // PhantomJS and iOS 7.x
MutationObserver.toString() === "[object MutationObserverConstructor]")) {
  var di = 1, xA = new MutationObserver(fi), Bg = document.createTextNode(String(di));
  xA.observe(Bg, {
    characterData: !0
  }), Qr = function() {
    di = (di + 1) % 2, Bg.data = String(di);
  }, il = !0;
} else
  typeof setImmediate < "u" && dr(setImmediate) ? Qr = function() {
    setImmediate(fi);
  } : Qr = function() {
    setTimeout(fi, 0);
  };
function Df(t, e) {
  var n;
  if (sl.push(function() {
    if (t)
      try {
        t.call(e);
      } catch (r) {
        Mn(r, e, "nextTick");
      }
    else
      n && n(e);
  }), al || (al = !0, Qr()), !t && typeof Promise < "u")
    return new Promise(function(r) {
      n = r;
    });
}
var EA = "2.7.14", zg = new po();
function Yi(t) {
  return Oi(t, zg), zg.clear(), t;
}
function Oi(t, e) {
  var n, r, o = Z(t);
  if (!(!o && !Oe(t) || t.__v_skip || Object.isFrozen(t) || t instanceof Qe)) {
    if (t.__ob__) {
      var i = t.__ob__.dep.id;
      if (e.has(i))
        return;
      e.add(i);
    }
    if (o)
      for (n = t.length; n--; )
        Oi(t[n], e);
    else if ($t(t))
      Oi(t.value, e);
    else
      for (r = Object.keys(t), n = r.length; n--; )
        Oi(t[r[n]], e);
  }
}
var $A = 0, Pf = (
  /** @class */
  function() {
    function t(e, n, r, o, i) {
      wA(
        this,
        // if the active effect scope is manually created (not a component scope),
        // prioritize it
        Ke && !Ke._vm ? Ke : e ? e._scope : void 0
      ), (this.vm = e) && i && (e._watcher = this), o ? (this.deep = !!o.deep, this.user = !!o.user, this.lazy = !!o.lazy, this.sync = !!o.sync, this.before = o.before) : this.deep = this.user = this.lazy = this.sync = !1, this.cb = r, this.id = ++$A, this.active = !0, this.post = !1, this.dirty = this.lazy, this.deps = [], this.newDeps = [], this.depIds = new po(), this.newDepIds = new po(), this.expression = "", le(n) ? this.getter = n : (this.getter = xT(n), this.getter || (this.getter = ge)), this.value = this.lazy ? void 0 : this.get();
    }
    return t.prototype.get = function() {
      Tr(this);
      var e, n = this.vm;
      try {
        e = this.getter.call(n, n);
      } catch (r) {
        if (this.user)
          Mn(r, n, 'getter for watcher "'.concat(this.expression, '"'));
        else
          throw r;
      } finally {
        this.deep && Yi(e), Ar(), this.cleanupDeps();
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
      this.lazy ? this.dirty = !0 : this.sync ? this.run() : bA(this);
    }, t.prototype.run = function() {
      if (this.active) {
        var e = this.get();
        if (e !== this.value || // Deep watchers and watchers on Object/Arrays should fire even
        // when the value is the same, because the value may
        // have mutated.
        Oe(e) || this.deep) {
          var n = this.value;
          if (this.value = e, this.user) {
            var r = 'callback for watcher "'.concat(this.expression, '"');
            dn(this.cb, this.vm, [e, n], this.vm, r);
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
      if (this.vm && !this.vm._isBeingDestroyed && mn(this.vm._scope.effects, this), this.active) {
        for (var e = this.deps.length; e--; )
          this.deps[e].removeSub(this);
        this.active = !1, this.onStop && this.onStop();
      }
    }, t;
  }()
), en = {
  enumerable: !0,
  configurable: !0,
  get: ge,
  set: ge
};
function Ff(t, e, n) {
  en.get = function() {
    return this[e][n];
  }, en.set = function(o) {
    this[e][n] = o;
  }, Object.defineProperty(t, n, en);
}
function CA(t) {
  var e = t.$options;
  if (e.props && IA(t, e.props), JT(t), e.methods && PA(t, e.methods), e.data)
    TA(t);
  else {
    var n = Gt(t._data = {});
    n && n.vmCount++;
  }
  e.computed && DA(t, e.computed), e.watch && e.watch !== Xu && FA(t, e.watch);
}
function IA(t, e) {
  var n = t.$options.propsData || {}, r = t._props = M0({}), o = t.$options._propKeys = [], i = !t.$parent;
  i || fn(!1);
  var s = function(c) {
    o.push(c);
    var u = Lf(c, e, n, t);
    Nn(r, c, u), c in t || Ff(t, "_props", c);
  };
  for (var a in e)
    s(a);
  fn(!0);
}
function TA(t) {
  var e = t.$options.data;
  e = t._data = le(e) ? AA(e, t) : e || {}, Xe(e) || (e = {});
  var n = Object.keys(e), r = t.$options.props;
  t.$options.methods;
  for (var o = n.length; o--; ) {
    var i = n[o];
    r && Re(r, i) || A0(i) || Ff(t, "_data", i);
  }
  var s = Gt(e);
  s && s.vmCount++;
}
function AA(t, e) {
  Tr();
  try {
    return t.call(e, e);
  } catch (n) {
    return Mn(n, e, "data()"), {};
  } finally {
    Ar();
  }
}
var OA = { lazy: !0 };
function DA(t, e) {
  var n = t._computedWatchers = /* @__PURE__ */ Object.create(null), r = Ir();
  for (var o in e) {
    var i = e[o], s = le(i) ? i : i.get;
    r || (n[o] = new Pf(t, s || ge, ge, OA)), o in t || X0(t, o, i);
  }
}
function X0(t, e, n) {
  var r = !Ir();
  le(n) ? (en.get = r ? Hg(e) : Vg(n), en.set = ge) : (en.get = n.get ? r && n.cache !== !1 ? Hg(e) : Vg(n.get) : ge, en.set = n.set || ge), Object.defineProperty(t, e, en);
}
function Hg(t) {
  return function() {
    var n = this._computedWatchers && this._computedWatchers[t];
    if (n)
      return n.dirty && n.evaluate(), ln.target && n.depend(), n.value;
  };
}
function Vg(t) {
  return function() {
    return t.call(this, this);
  };
}
function PA(t, e) {
  t.$options.props;
  for (var n in e)
    t[n] = typeof e[n] != "function" ? ge : x0(e[n], t);
}
function FA(t, e) {
  for (var n in e) {
    var r = e[n];
    if (Z(r))
      for (var o = 0; o < r.length; o++)
        cl(t, n, r[o]);
    else
      cl(t, n, r);
  }
}
function cl(t, e, n, r) {
  return Xe(n) && (r = n, n = n.handler), typeof n == "string" && (n = t[n]), t.$watch(e, n, r);
}
function RA(t) {
  var e = {};
  e.get = function() {
    return this._data;
  };
  var n = {};
  n.get = function() {
    return this._props;
  }, Object.defineProperty(t.prototype, "$data", e), Object.defineProperty(t.prototype, "$props", n), t.prototype.$set = Ef, t.prototype.$delete = R0, t.prototype.$watch = function(r, o, i) {
    var s = this;
    if (Xe(o))
      return cl(s, r, o, i);
    i = i || {}, i.user = !0;
    var a = new Pf(s, r, o, i);
    if (i.immediate) {
      var c = 'callback for immediate watcher "'.concat(a.expression, '"');
      Tr(), dn(o, s, [a.value], s, c), Ar();
    }
    return function() {
      a.teardown();
    };
  };
}
function NA(t) {
  var e = t.$options.provide;
  if (e) {
    var n = le(e) ? e.call(t) : e;
    if (!Oe(n))
      return;
    for (var r = kA(t), o = Co ? Reflect.ownKeys(n) : Object.keys(n), i = 0; i < o.length; i++) {
      var s = o[i];
      Object.defineProperty(r, s, Object.getOwnPropertyDescriptor(n, s));
    }
  }
}
function MA(t) {
  var e = Q0(t.$options.inject, t);
  e && (fn(!1), Object.keys(e).forEach(function(n) {
    Nn(t, n, e[n]);
  }), fn(!0));
}
function Q0(t, e) {
  if (t) {
    for (var n = /* @__PURE__ */ Object.create(null), r = Co ? Reflect.ownKeys(t) : Object.keys(t), o = 0; o < r.length; o++) {
      var i = r[o];
      if (i !== "__ob__") {
        var s = t[i].from;
        if (s in e._provided)
          n[i] = e._provided[s];
        else if ("default" in t[i]) {
          var a = t[i].default;
          n[i] = le(a) ? a.call(e) : a;
        }
      }
    }
    return n;
  }
}
var LA = 0;
function qA(t) {
  t.prototype._init = function(e) {
    var n = this;
    n._uid = LA++, n._isVue = !0, n.__v_skip = !0, n._scope = new yA(
      !0
      /* detached */
    ), n._scope._vm = !0, e && e._isComponent ? jA(n, e) : n.$options = Ln(Rf(n.constructor), e || {}, n), n._renderProxy = n, n._self = n, uA(n), oA(n), eA(n), gt(
      n,
      "beforeCreate",
      void 0,
      !1
      /* setContext */
    ), MA(n), CA(n), NA(n), gt(n, "created"), n.$options.el && n.$mount(n.$options.el);
  };
}
function jA(t, e) {
  var n = t.$options = Object.create(t.constructor.options), r = e._parentVnode;
  n.parent = e.parent, n._parentVnode = r;
  var o = r.componentOptions;
  n.propsData = o.propsData, n._parentListeners = o.listeners, n._renderChildren = o.children, n._componentTag = o.tag, e.render && (n.render = e.render, n.staticRenderFns = e.staticRenderFns);
}
function Rf(t) {
  var e = t.options;
  if (t.super) {
    var n = Rf(t.super), r = t.superOptions;
    if (n !== r) {
      t.superOptions = n;
      var o = BA(t);
      o && X(t.extendOptions, o), e = t.options = Ln(n, t.extendOptions), e.name && (e.components[e.name] = t);
    }
  }
  return e;
}
function BA(t) {
  var e, n = t.options, r = t.sealedOptions;
  for (var o in n)
    n[o] !== r[o] && (e || (e = {}), e[o] = n[o]);
  return e;
}
function Nf(t, e, n, r, o) {
  var i = this, s = o.options, a;
  Re(r, "_uid") ? (a = Object.create(r), a._original = r) : (a = r, r = r._original);
  var c = de(s._compiled), u = !c;
  this.data = t, this.props = e, this.children = n, this.parent = r, this.listeners = t.on || Fe, this.injections = Q0(s.inject, r), this.slots = function() {
    return i.$slots || io(r, t.scopedSlots, i.$slots = If(n, r)), i.$slots;
  }, Object.defineProperty(this, "scopedSlots", {
    enumerable: !0,
    get: function() {
      return io(r, t.scopedSlots, this.slots());
    }
  }), c && (this.$options = s, this.$slots = this.slots(), this.$scopedSlots = io(r, t.scopedSlots, this.$slots)), s._scopeId ? this._c = function(l, f, d, h) {
    var w = Ki(a, l, f, d, h, u);
    return w && !Z(w) && (w.fnScopeId = s._scopeId, w.fnContext = r), w;
  } : this._c = function(l, f, d, h) {
    return Ki(a, l, f, d, h, u);
  };
}
V0(Nf.prototype);
function zA(t, e, n, r, o) {
  var i = t.options, s = {}, a = i.props;
  if ($(a))
    for (var c in a)
      s[c] = Lf(c, a, e || Fe);
  else
    $(n.attrs) && Gg(s, n.attrs), $(n.props) && Gg(s, n.props);
  var u = new Nf(n, s, o, r, t), l = i.render.call(null, u._c, u);
  if (l instanceof Qe)
    return Ug(l, n, u.parent, i);
  if (Z(l)) {
    for (var f = Cf(l) || [], d = new Array(f.length), h = 0; h < f.length; h++)
      d[h] = Ug(f[h], n, u.parent, i);
    return d;
  }
}
function Ug(t, e, n, r, o) {
  var i = Qu(t);
  return i.fnContext = n, i.fnOptions = r, e.slot && ((i.data || (i.data = {})).slot = e.slot), i;
}
function Gg(t, e) {
  for (var n in e)
    t[Je(n)] = e[n];
}
function Xi(t) {
  return t.name || t.__name || t._componentTag;
}
var Mf = {
  init: function(t, e) {
    if (t.componentInstance && !t.componentInstance._isDestroyed && t.data.keepAlive) {
      var n = t;
      Mf.prepatch(n, n);
    } else {
      var r = t.componentInstance = HA(t, On);
      r.$mount(e ? t.elm : void 0, e);
    }
  },
  prepatch: function(t, e) {
    var n = e.componentOptions, r = e.componentInstance = t.componentInstance;
    dA(
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
    n._isMounted || (n._isMounted = !0, gt(n, "mounted")), t.data.keepAlive && (e._isMounted ? mA(n) : Tf(
      n,
      !0
      /* direct */
    ));
  },
  destroy: function(t) {
    var e = t.componentInstance;
    e._isDestroyed || (t.data.keepAlive ? J0(
      e,
      !0
      /* direct */
    ) : e.$destroy());
  }
}, Wg = Object.keys(Mf);
function Kg(t, e, n, r, o) {
  if (!U(t)) {
    var i = n.$options._base;
    if (Oe(t) && (t = i.extend(t)), typeof t == "function") {
      var s;
      if (U(t.cid) && (s = t, t = rA(s, i), t === void 0))
        return nA(s, e, n, r, o);
      e = e || {}, Rf(t), $(e.model) && GA(t.options, e);
      var a = DT(e, t);
      if (de(t.options.functional))
        return zA(t, a, e, n, r);
      var c = e.on;
      if (e.on = e.nativeOn, de(t.options.abstract)) {
        var u = e.slot;
        e = {}, u && (e.slot = u);
      }
      VA(e);
      var l = Xi(t.options) || o, f = new Qe(
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
function HA(t, e) {
  var n = {
    _isComponent: !0,
    _parentVnode: t,
    parent: e
  }, r = t.data.inlineTemplate;
  return $(r) && (n.render = r.render, n.staticRenderFns = r.staticRenderFns), new t.componentOptions.Ctor(n);
}
function VA(t) {
  for (var e = t.hook || (t.hook = {}), n = 0; n < Wg.length; n++) {
    var r = Wg[n], o = e[r], i = Mf[r];
    o !== i && !(o && o._merged) && (e[r] = o ? UA(i, o) : i);
  }
}
function UA(t, e) {
  var n = function(r, o) {
    t(r, o), e(r, o);
  };
  return n._merged = !0, n;
}
function GA(t, e) {
  var n = t.model && t.model.prop || "value", r = t.model && t.model.event || "input";
  (e.attrs || (e.attrs = {}))[n] = e.model.value;
  var o = e.on || (e.on = {}), i = o[r], s = e.model.callback;
  $(i) ? (Z(i) ? i.indexOf(s) === -1 : i !== s) && (o[r] = [s].concat(i)) : o[r] = s;
}
var ey = ge, Et = Ye.optionMergeStrategies;
function mo(t, e, n) {
  if (n === void 0 && (n = !0), !e)
    return t;
  for (var r, o, i, s = Co ? Reflect.ownKeys(e) : Object.keys(e), a = 0; a < s.length; a++)
    r = s[a], r !== "__ob__" && (o = t[r], i = e[r], !n || !Re(t, r) ? Ef(t, r, i) : o !== i && Xe(o) && Xe(i) && mo(o, i));
  return t;
}
function Zg(t, e, n) {
  return n ? function() {
    var o = le(e) ? e.call(n, n) : e, i = le(t) ? t.call(n, n) : t;
    return o ? mo(o, i) : i;
  } : e ? t ? function() {
    return mo(le(e) ? e.call(this, this) : e, le(t) ? t.call(this, this) : t);
  } : e : t;
}
Et.data = function(t, e, n) {
  return n ? Zg(t, e, n) : e && typeof e != "function" ? t : Zg(t, e);
};
function WA(t, e) {
  var n = e ? t ? t.concat(e) : Z(e) ? e : [e] : t;
  return n && KA(n);
}
function KA(t) {
  for (var e = [], n = 0; n < t.length; n++)
    e.indexOf(t[n]) === -1 && e.push(t[n]);
  return e;
}
I0.forEach(function(t) {
  Et[t] = WA;
});
function ZA(t, e, n, r) {
  var o = Object.create(t || null);
  return e ? X(o, e) : o;
}
As.forEach(function(t) {
  Et[t + "s"] = ZA;
});
Et.watch = function(t, e, n, r) {
  if (t === Xu && (t = void 0), e === Xu && (e = void 0), !e)
    return Object.create(t || null);
  if (!t)
    return e;
  var o = {};
  X(o, t);
  for (var i in e) {
    var s = o[i], a = e[i];
    s && !Z(s) && (s = [s]), o[i] = s ? s.concat(a) : Z(a) ? a : [a];
  }
  return o;
};
Et.props = Et.methods = Et.inject = Et.computed = function(t, e, n, r) {
  if (!t)
    return e;
  var o = /* @__PURE__ */ Object.create(null);
  return X(o, t), e && X(o, e), o;
};
Et.provide = function(t, e) {
  return t ? function() {
    var n = /* @__PURE__ */ Object.create(null);
    return mo(n, le(t) ? t.call(this) : t), e && mo(
      n,
      le(e) ? e.call(this) : e,
      !1
      // non-recursive
    ), n;
  } : e;
};
var JA = function(t, e) {
  return e === void 0 ? t : e;
};
function YA(t, e) {
  var n = t.props;
  if (n) {
    var r = {}, o, i, s;
    if (Z(n))
      for (o = n.length; o--; )
        i = n[o], typeof i == "string" && (s = Je(i), r[s] = { type: null });
    else if (Xe(n))
      for (var a in n)
        i = n[a], s = Je(a), r[s] = Xe(i) ? i : { type: i };
    t.props = r;
  }
}
function XA(t, e) {
  var n = t.inject;
  if (n) {
    var r = t.inject = {};
    if (Z(n))
      for (var o = 0; o < n.length; o++)
        r[n[o]] = { from: n[o] };
    else if (Xe(n))
      for (var i in n) {
        var s = n[i];
        r[i] = Xe(s) ? X({ from: i }, s) : { from: s };
      }
  }
}
function QA(t) {
  var e = t.directives;
  if (e)
    for (var n in e) {
      var r = e[n];
      le(r) && (e[n] = { bind: r, update: r });
    }
}
function Ln(t, e, n) {
  if (le(e) && (e = e.options), YA(e), XA(e), QA(e), !e._base && (e.extends && (t = Ln(t, e.extends, n)), e.mixins))
    for (var r = 0, o = e.mixins.length; r < o; r++)
      t = Ln(t, e.mixins[r], n);
  var i = {}, s;
  for (s in t)
    a(s);
  for (s in e)
    Re(t, s) || a(s);
  function a(c) {
    var u = Et[c] || JA;
    i[c] = u(t[c], e[c], n, c);
  }
  return i;
}
function Qi(t, e, n, r) {
  if (typeof n == "string") {
    var o = t[e];
    if (Re(o, n))
      return o[n];
    var i = Je(n);
    if (Re(o, i))
      return o[i];
    var s = S0(i);
    if (Re(o, s))
      return o[s];
    var a = o[n] || o[i] || o[s];
    return a;
  }
}
function Lf(t, e, n, r) {
  var o = e[t], i = !Re(n, t), s = n[t], a = Yg(Boolean, o.type);
  if (a > -1) {
    if (i && !Re(o, "default"))
      s = !1;
    else if (s === "" || s === Fn(t)) {
      var c = Yg(String, o.type);
      (c < 0 || a < c) && (s = !0);
    }
  }
  if (s === void 0) {
    s = eO(r, o, t);
    var u = xf;
    fn(!0), Gt(s), fn(u);
  }
  return s;
}
function eO(t, e, n) {
  if (Re(e, "default")) {
    var r = e.default;
    return t && t.$options.propsData && t.$options.propsData[n] === void 0 && t._props[n] !== void 0 ? t._props[n] : le(r) && ul(e.type) !== "Function" ? r.call(t) : r;
  }
}
var tO = /^\s*function (\w+)/;
function ul(t) {
  var e = t && t.toString().match(tO);
  return e ? e[1] : "";
}
function Jg(t, e) {
  return ul(t) === ul(e);
}
function Yg(t, e) {
  if (!Z(e))
    return Jg(e, t) ? 0 : -1;
  for (var n = 0, r = e.length; n < r; n++)
    if (Jg(e[n], t))
      return n;
  return -1;
}
function se(t) {
  this._init(t);
}
qA(se);
RA(se);
cA(se);
lA(se);
tA(se);
function nO(t) {
  t.use = function(e) {
    var n = this._installedPlugins || (this._installedPlugins = []);
    if (n.indexOf(e) > -1)
      return this;
    var r = Yu(arguments, 1);
    return r.unshift(this), le(e.install) ? e.install.apply(e, r) : le(e) && e.apply(null, r), n.push(e), this;
  };
}
function rO(t) {
  t.mixin = function(e) {
    return this.options = Ln(this.options, e), this;
  };
}
function oO(t) {
  t.cid = 0;
  var e = 1;
  t.extend = function(n) {
    n = n || {};
    var r = this, o = r.cid, i = n._Ctor || (n._Ctor = {});
    if (i[o])
      return i[o];
    var s = Xi(n) || Xi(r.options), a = function(u) {
      this._init(u);
    };
    return a.prototype = Object.create(r.prototype), a.prototype.constructor = a, a.cid = e++, a.options = Ln(r.options, n), a.super = r, a.options.props && iO(a), a.options.computed && sO(a), a.extend = r.extend, a.mixin = r.mixin, a.use = r.use, As.forEach(function(c) {
      a[c] = r[c];
    }), s && (a.options.components[s] = a), a.superOptions = r.options, a.extendOptions = n, a.sealedOptions = X({}, a.options), i[o] = a, a;
  };
}
function iO(t) {
  var e = t.options.props;
  for (var n in e)
    Ff(t.prototype, "_props", n);
}
function sO(t) {
  var e = t.options.computed;
  for (var n in e)
    X0(t.prototype, n, e[n]);
}
function aO(t) {
  As.forEach(function(e) {
    t[e] = function(n, r) {
      return r ? (e === "component" && Xe(r) && (r.name = r.name || n, r = this.options._base.extend(r)), e === "directive" && le(r) && (r = { bind: r, update: r }), this.options[e + "s"][n] = r, r) : this.options[e + "s"][n];
    };
  });
}
function Xg(t) {
  return t && (Xi(t.Ctor.options) || t.tag);
}
function hi(t, e) {
  return Z(t) ? t.indexOf(e) > -1 : typeof t == "string" ? t.split(",").indexOf(e) > -1 : dT(t) ? t.test(e) : !1;
}
function Qg(t, e) {
  var n = t.cache, r = t.keys, o = t._vnode;
  for (var i in n) {
    var s = n[i];
    if (s) {
      var a = s.name;
      a && !e(a) && ll(n, i, r, o);
    }
  }
}
function ll(t, e, n, r) {
  var o = t[e];
  o && (!r || o.tag !== r.tag) && o.componentInstance.$destroy(), t[e] = null, mn(n, e);
}
var em = [String, RegExp, Array], cO = {
  name: "keep-alive",
  abstract: !0,
  props: {
    include: em,
    exclude: em,
    max: [String, Number]
  },
  methods: {
    cacheVNode: function() {
      var t = this, e = t.cache, n = t.keys, r = t.vnodeToCache, o = t.keyToCache;
      if (r) {
        var i = r.tag, s = r.componentInstance, a = r.componentOptions;
        e[o] = {
          name: Xg(a),
          tag: i,
          componentInstance: s
        }, n.push(o), this.max && n.length > parseInt(this.max) && ll(e, n[0], n, this._vnode), this.vnodeToCache = null;
      }
    }
  },
  created: function() {
    this.cache = /* @__PURE__ */ Object.create(null), this.keys = [];
  },
  destroyed: function() {
    for (var t in this.cache)
      ll(this.cache, t, this.keys);
  },
  mounted: function() {
    var t = this;
    this.cacheVNode(), this.$watch("include", function(e) {
      Qg(t, function(n) {
        return hi(e, n);
      });
    }), this.$watch("exclude", function(e) {
      Qg(t, function(n) {
        return !hi(e, n);
      });
    });
  },
  updated: function() {
    this.cacheVNode();
  },
  render: function() {
    var t = this.$slots.default, e = G0(t), n = e && e.componentOptions;
    if (n) {
      var r = Xg(n), o = this, i = o.include, s = o.exclude;
      if (
        // not included
        i && (!r || !hi(i, r)) || // excluded
        s && r && hi(s, r)
      )
        return e;
      var a = this, c = a.cache, u = a.keys, l = e.key == null ? (
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        n.Ctor.cid + (n.tag ? "::".concat(n.tag) : "")
      ) : e.key;
      c[l] ? (e.componentInstance = c[l].componentInstance, mn(u, l), u.push(l)) : (this.vnodeToCache = e, this.keyToCache = l), e.data.keepAlive = !0;
    }
    return e || t && t[0];
  }
}, uO = {
  KeepAlive: cO
};
function lO(t) {
  var e = {};
  e.get = function() {
    return Ye;
  }, Object.defineProperty(t, "config", e), t.util = {
    warn: ey,
    extend: X,
    mergeOptions: Ln,
    defineReactive: Nn
  }, t.set = Ef, t.delete = R0, t.nextTick = Df, t.observable = function(n) {
    return Gt(n), n;
  }, t.options = /* @__PURE__ */ Object.create(null), As.forEach(function(n) {
    t.options[n + "s"] = /* @__PURE__ */ Object.create(null);
  }), t.options._base = t, X(t.options.components, uO), nO(t), rO(t), oO(t), aO(t);
}
lO(se);
Object.defineProperty(se.prototype, "$isServer", {
  get: Ir
});
Object.defineProperty(se.prototype, "$ssrContext", {
  get: function() {
    return this.$vnode && this.$vnode.ssrContext;
  }
});
Object.defineProperty(se, "FunctionalRenderContext", {
  value: Nf
});
se.version = EA;
var fO = Ce("style,class"), dO = Ce("input,textarea,option,select,progress"), ty = function(t, e, n) {
  return n === "value" && dO(t) && e !== "button" || n === "selected" && t === "option" || n === "checked" && t === "input" || n === "muted" && t === "video";
}, ny = Ce("contenteditable,draggable,spellcheck"), hO = Ce("events,caret,typing,plaintext-only"), pO = function(t, e) {
  return es(e) || e === "false" ? "false" : (
    // allow arbitrary string value for contenteditable
    t === "contenteditable" && hO(e) ? e : "true"
  );
}, vO = Ce("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"), fl = "http://www.w3.org/1999/xlink", qf = function(t) {
  return t.charAt(5) === ":" && t.slice(0, 5) === "xlink";
}, ry = function(t) {
  return qf(t) ? t.slice(6, t.length) : "";
}, es = function(t) {
  return t == null || t === !1;
};
function gO(t) {
  for (var e = t.data, n = t, r = t; $(r.componentInstance); )
    r = r.componentInstance._vnode, r && r.data && (e = tm(r.data, e));
  for (; $(n = n.parent); )
    n && n.data && (e = tm(e, n.data));
  return mO(e.staticClass, e.class);
}
function tm(t, e) {
  return {
    staticClass: jf(t.staticClass, e.staticClass),
    class: $(t.class) ? [t.class, e.class] : e.class
  };
}
function mO(t, e) {
  return $(t) || $(e) ? jf(t, Bf(e)) : "";
}
function jf(t, e) {
  return t ? e ? t + " " + e : t : e || "";
}
function Bf(t) {
  return Array.isArray(t) ? _O(t) : Oe(t) ? bO(t) : typeof t == "string" ? t : "";
}
function _O(t) {
  for (var e = "", n, r = 0, o = t.length; r < o; r++)
    $(n = Bf(t[r])) && n !== "" && (e && (e += " "), e += n);
  return e;
}
function bO(t) {
  var e = "";
  for (var n in t)
    t[n] && (e && (e += " "), e += n);
  return e;
}
var yO = {
  svg: "http://www.w3.org/2000/svg",
  math: "http://www.w3.org/1998/Math/MathML"
}, wO = Ce("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"), zf = Ce("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view", !0), kO = function(t) {
  return t === "pre";
}, Hf = function(t) {
  return wO(t) || zf(t);
};
function oy(t) {
  if (zf(t))
    return "svg";
  if (t === "math")
    return "math";
}
var pi = /* @__PURE__ */ Object.create(null);
function SO(t) {
  if (!Me)
    return !0;
  if (Hf(t))
    return !1;
  if (t = t.toLowerCase(), pi[t] != null)
    return pi[t];
  var e = document.createElement(t);
  return t.indexOf("-") > -1 ? pi[t] = e.constructor === window.HTMLUnknownElement || e.constructor === window.HTMLElement : pi[t] = /HTMLUnknownElement/.test(e.toString());
}
var dl = Ce("text,number,password,search,email,tel,url");
function Vf(t) {
  if (typeof t == "string") {
    var e = document.querySelector(t);
    return e || document.createElement("div");
  } else
    return t;
}
function xO(t, e) {
  var n = document.createElement(t);
  return t !== "select" || e.data && e.data.attrs && e.data.attrs.multiple !== void 0 && n.setAttribute("multiple", "multiple"), n;
}
function EO(t, e) {
  return document.createElementNS(yO[t], e);
}
function $O(t) {
  return document.createTextNode(t);
}
function CO(t) {
  return document.createComment(t);
}
function IO(t, e, n) {
  t.insertBefore(e, n);
}
function TO(t, e) {
  t.removeChild(e);
}
function AO(t, e) {
  t.appendChild(e);
}
function OO(t) {
  return t.parentNode;
}
function DO(t) {
  return t.nextSibling;
}
function PO(t) {
  return t.tagName;
}
function FO(t, e) {
  t.textContent = e;
}
function RO(t, e) {
  t.setAttribute(e, "");
}
var NO = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  createElement: xO,
  createElementNS: EO,
  createTextNode: $O,
  createComment: CO,
  insertBefore: IO,
  removeChild: TO,
  appendChild: AO,
  parentNode: OO,
  nextSibling: DO,
  tagName: PO,
  setTextContent: FO,
  setStyleScope: RO
}), MO = {
  create: function(t, e) {
    ur(e);
  },
  update: function(t, e) {
    t.data.ref !== e.data.ref && (ur(t, !0), ur(e));
  },
  destroy: function(t) {
    ur(t, !0);
  }
};
function ur(t, e) {
  var n = t.data.ref;
  if ($(n)) {
    var r = t.context, o = t.componentInstance || t.elm, i = e ? null : o, s = e ? void 0 : o;
    if (le(n)) {
      dn(n, r, [i], r, "template ref function");
      return;
    }
    var a = t.data.refInFor, c = typeof n == "string" || typeof n == "number", u = $t(n), l = r.$refs;
    if (c || u) {
      if (a) {
        var f = c ? l[n] : n.value;
        e ? Z(f) && mn(f, o) : Z(f) ? f.includes(o) || f.push(o) : c ? (l[n] = [o], nm(r, n, l[n])) : n.value = [o];
      } else if (c) {
        if (e && l[n] !== o)
          return;
        l[n] = s, nm(r, n, i);
      } else if (u) {
        if (e && n.value !== o)
          return;
        n.value = i;
      }
    }
  }
}
function nm(t, e, n) {
  var r = t._setupState;
  r && Re(r, e) && ($t(r[e]) ? r[e].value = n : r[e] = n);
}
var nn = new Qe("", {}, []), Kr = ["create", "activate", "update", "remove", "destroy"];
function kn(t, e) {
  return t.key === e.key && t.asyncFactory === e.asyncFactory && (t.tag === e.tag && t.isComment === e.isComment && $(t.data) === $(e.data) && LO(t, e) || de(t.isAsyncPlaceholder) && U(e.asyncFactory.error));
}
function LO(t, e) {
  if (t.tag !== "input")
    return !0;
  var n, r = $(n = t.data) && $(n = n.attrs) && n.type, o = $(n = e.data) && $(n = n.attrs) && n.type;
  return r === o || dl(r) && dl(o);
}
function qO(t, e, n) {
  var r, o, i = {};
  for (r = e; r <= n; ++r)
    o = t[r].key, $(o) && (i[o] = r);
  return i;
}
function jO(t) {
  var e, n, r = {}, o = t.modules, i = t.nodeOps;
  for (e = 0; e < Kr.length; ++e)
    for (r[Kr[e]] = [], n = 0; n < o.length; ++n)
      $(o[n][Kr[e]]) && r[Kr[e]].push(o[n][Kr[e]]);
  function s(b) {
    return new Qe(i.tagName(b).toLowerCase(), {}, [], void 0, b);
  }
  function a(b, _) {
    function p() {
      --p.listeners === 0 && c(b);
    }
    return p.listeners = _, p;
  }
  function c(b) {
    var _ = i.parentNode(b);
    $(_) && i.removeChild(_, b);
  }
  function u(b, _, p, P, N, C, S) {
    if ($(b.elm) && $(C) && (b = C[S] = Qu(b)), b.isRootInsert = !N, !l(b, _, p, P)) {
      var O = b.data, E = b.children, I = b.tag;
      $(I) ? (b.elm = b.ns ? i.createElementNS(b.ns, I) : i.createElement(I, b), v(b), w(b, E, _), $(O) && g(b, _), h(p, b.elm, P)) : de(b.isComment) ? (b.elm = i.createComment(b.text), h(p, b.elm, P)) : (b.elm = i.createTextNode(b.text), h(p, b.elm, P));
    }
  }
  function l(b, _, p, P) {
    var N = b.data;
    if ($(N)) {
      var C = $(b.componentInstance) && N.keepAlive;
      if ($(N = N.hook) && $(N = N.init) && N(
        b,
        !1
        /* hydrating */
      ), $(b.componentInstance))
        return f(b, _), h(p, b.elm, P), de(C) && d(b, _, p, P), !0;
    }
  }
  function f(b, _) {
    $(b.data.pendingInsert) && (_.push.apply(_, b.data.pendingInsert), b.data.pendingInsert = null), b.elm = b.componentInstance.$el, m(b) ? (g(b, _), v(b)) : (ur(b), _.push(b));
  }
  function d(b, _, p, P) {
    for (var N, C = b; C.componentInstance; )
      if (C = C.componentInstance._vnode, $(N = C.data) && $(N = N.transition)) {
        for (N = 0; N < r.activate.length; ++N)
          r.activate[N](nn, C);
        _.push(C);
        break;
      }
    h(p, b.elm, P);
  }
  function h(b, _, p) {
    $(b) && ($(p) ? i.parentNode(p) === b && i.insertBefore(b, _, p) : i.appendChild(b, _));
  }
  function w(b, _, p) {
    if (Z(_))
      for (var P = 0; P < _.length; ++P)
        u(_[P], p, b.elm, null, !0, _, P);
    else
      $o(b.text) && i.appendChild(b.elm, i.createTextNode(String(b.text)));
  }
  function m(b) {
    for (; b.componentInstance; )
      b = b.componentInstance._vnode;
    return $(b.tag);
  }
  function g(b, _) {
    for (var p = 0; p < r.create.length; ++p)
      r.create[p](nn, b);
    e = b.data.hook, $(e) && ($(e.create) && e.create(nn, b), $(e.insert) && _.push(b));
  }
  function v(b) {
    var _;
    if ($(_ = b.fnScopeId))
      i.setStyleScope(b.elm, _);
    else
      for (var p = b; p; )
        $(_ = p.context) && $(_ = _.$options._scopeId) && i.setStyleScope(b.elm, _), p = p.parent;
    $(_ = On) && _ !== b.context && _ !== b.fnContext && $(_ = _.$options._scopeId) && i.setStyleScope(b.elm, _);
  }
  function k(b, _, p, P, N, C) {
    for (; P <= N; ++P)
      u(p[P], C, b, _, !1, p, P);
  }
  function y(b) {
    var _, p, P = b.data;
    if ($(P))
      for ($(_ = P.hook) && $(_ = _.destroy) && _(b), _ = 0; _ < r.destroy.length; ++_)
        r.destroy[_](b);
    if ($(_ = b.children))
      for (p = 0; p < b.children.length; ++p)
        y(b.children[p]);
  }
  function x(b, _, p) {
    for (; _ <= p; ++_) {
      var P = b[_];
      $(P) && ($(P.tag) ? (F(P), y(P)) : c(P.elm));
    }
  }
  function F(b, _) {
    if ($(_) || $(b.data)) {
      var p, P = r.remove.length + 1;
      for ($(_) ? _.listeners += P : _ = a(b.elm, P), $(p = b.componentInstance) && $(p = p._vnode) && $(p.data) && F(p, _), p = 0; p < r.remove.length; ++p)
        r.remove[p](b, _);
      $(p = b.data.hook) && $(p = p.remove) ? p(b, _) : _();
    } else
      c(b.elm);
  }
  function A(b, _, p, P, N) {
    for (var C = 0, S = 0, O = _.length - 1, E = _[0], I = _[O], M = p.length - 1, B = p[0], V = p[M], K, G, Q, ue, _e = !N; C <= O && S <= M; )
      U(E) ? E = _[++C] : U(I) ? I = _[--O] : kn(E, B) ? (D(E, B, P, p, S), E = _[++C], B = p[++S]) : kn(I, V) ? (D(I, V, P, p, M), I = _[--O], V = p[--M]) : kn(E, V) ? (D(E, V, P, p, M), _e && i.insertBefore(b, E.elm, i.nextSibling(I.elm)), E = _[++C], V = p[--M]) : kn(I, B) ? (D(I, B, P, p, S), _e && i.insertBefore(b, I.elm, E.elm), I = _[--O], B = p[++S]) : (U(K) && (K = qO(_, C, O)), G = $(B.key) ? K[B.key] : T(B, _, C, O), U(G) ? u(B, P, b, E.elm, !1, p, S) : (Q = _[G], kn(Q, B) ? (D(Q, B, P, p, S), _[G] = void 0, _e && i.insertBefore(b, Q.elm, E.elm)) : u(B, P, b, E.elm, !1, p, S)), B = p[++S]);
    C > O ? (ue = U(p[M + 1]) ? null : p[M + 1].elm, k(b, ue, p, S, M, P)) : S > M && x(_, C, O);
  }
  function T(b, _, p, P) {
    for (var N = p; N < P; N++) {
      var C = _[N];
      if ($(C) && kn(b, C))
        return N;
    }
  }
  function D(b, _, p, P, N, C) {
    if (b !== _) {
      $(_.elm) && $(P) && (_ = P[N] = Qu(_));
      var S = _.elm = b.elm;
      if (de(b.isAsyncPlaceholder)) {
        $(_.asyncFactory.resolved) ? q(b.elm, _, p) : _.isAsyncPlaceholder = !0;
        return;
      }
      if (de(_.isStatic) && de(b.isStatic) && _.key === b.key && (de(_.isCloned) || de(_.isOnce))) {
        _.componentInstance = b.componentInstance;
        return;
      }
      var O, E = _.data;
      $(E) && $(O = E.hook) && $(O = O.prepatch) && O(b, _);
      var I = b.children, M = _.children;
      if ($(E) && m(_)) {
        for (O = 0; O < r.update.length; ++O)
          r.update[O](b, _);
        $(O = E.hook) && $(O = O.update) && O(b, _);
      }
      U(_.text) ? $(I) && $(M) ? I !== M && A(S, I, M, p, C) : $(M) ? ($(b.text) && i.setTextContent(S, ""), k(S, null, M, 0, M.length - 1, p)) : $(I) ? x(I, 0, I.length - 1) : $(b.text) && i.setTextContent(S, "") : b.text !== _.text && i.setTextContent(S, _.text), $(E) && $(O = E.hook) && $(O = O.postpatch) && O(b, _);
    }
  }
  function H(b, _, p) {
    if (de(p) && $(b.parent))
      b.parent.data.pendingInsert = _;
    else
      for (var P = 0; P < _.length; ++P)
        _[P].data.hook.insert(_[P]);
  }
  var L = Ce("attrs,class,staticClass,staticStyle,key");
  function q(b, _, p, P) {
    var N, C = _.tag, S = _.data, O = _.children;
    if (P = P || S && S.pre, _.elm = b, de(_.isComment) && $(_.asyncFactory))
      return _.isAsyncPlaceholder = !0, !0;
    if ($(S) && ($(N = S.hook) && $(N = N.init) && N(
      _,
      !0
      /* hydrating */
    ), $(N = _.componentInstance)))
      return f(_, p), !0;
    if ($(C)) {
      if ($(O))
        if (!b.hasChildNodes())
          w(_, O, p);
        else if ($(N = S) && $(N = N.domProps) && $(N = N.innerHTML)) {
          if (N !== b.innerHTML)
            return !1;
        } else {
          for (var E = !0, I = b.firstChild, M = 0; M < O.length; M++) {
            if (!I || !q(I, O[M], p, P)) {
              E = !1;
              break;
            }
            I = I.nextSibling;
          }
          if (!E || I)
            return !1;
        }
      if ($(S)) {
        var B = !1;
        for (var V in S)
          if (!L(V)) {
            B = !0, g(_, p);
            break;
          }
        !B && S.class && Yi(S.class);
      }
    } else
      b.data !== _.text && (b.data = _.text);
    return !0;
  }
  return function(_, p, P, N) {
    if (U(p)) {
      $(_) && y(_);
      return;
    }
    var C = !1, S = [];
    if (U(_))
      C = !0, u(p, S);
    else {
      var O = $(_.nodeType);
      if (!O && kn(_, p))
        D(_, p, S, null, null, N);
      else {
        if (O) {
          if (_.nodeType === 1 && _.hasAttribute(Ag) && (_.removeAttribute(Ag), P = !0), de(P) && q(_, p, S))
            return H(p, S, !0), _;
          _ = s(_);
        }
        var E = _.elm, I = i.parentNode(E);
        if (u(
          p,
          S,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          E._leaveCb ? null : I,
          i.nextSibling(E)
        ), $(p.parent))
          for (var M = p.parent, B = m(p); M; ) {
            for (var V = 0; V < r.destroy.length; ++V)
              r.destroy[V](M);
            if (M.elm = p.elm, B) {
              for (var K = 0; K < r.create.length; ++K)
                r.create[K](nn, M);
              var G = M.data.hook.insert;
              if (G.merged)
                for (var Q = 1; Q < G.fns.length; Q++)
                  G.fns[Q]();
            } else
              ur(M);
            M = M.parent;
          }
        $(I) ? x([_], 0, 0) : $(_.tag) && y(_);
      }
    }
    return H(p, S, C), p.elm;
  };
}
var BO = {
  create: Hc,
  update: Hc,
  destroy: function(e) {
    Hc(e, nn);
  }
};
function Hc(t, e) {
  (t.data.directives || e.data.directives) && zO(t, e);
}
function zO(t, e) {
  var n = t === nn, r = e === nn, o = rm(t.data.directives, t.context), i = rm(e.data.directives, e.context), s = [], a = [], c, u, l;
  for (c in i)
    u = o[c], l = i[c], u ? (l.oldValue = u.value, l.oldArg = u.arg, Zr(l, "update", e, t), l.def && l.def.componentUpdated && a.push(l)) : (Zr(l, "bind", e, t), l.def && l.def.inserted && s.push(l));
  if (s.length) {
    var f = function() {
      for (var d = 0; d < s.length; d++)
        Zr(s[d], "inserted", e, t);
    };
    n ? tn(e, "insert", f) : f();
  }
  if (a.length && tn(e, "postpatch", function() {
    for (var d = 0; d < a.length; d++)
      Zr(a[d], "componentUpdated", e, t);
  }), !n)
    for (c in o)
      i[c] || Zr(o[c], "unbind", t, t, r);
}
var HO = /* @__PURE__ */ Object.create(null);
function rm(t, e) {
  var n = /* @__PURE__ */ Object.create(null);
  if (!t)
    return n;
  var r, o;
  for (r = 0; r < t.length; r++) {
    if (o = t[r], o.modifiers || (o.modifiers = HO), n[VO(o)] = o, e._setupState && e._setupState.__sfc) {
      var i = o.def || Qi(e, "_setupState", "v-" + o.name);
      typeof i == "function" ? o.def = {
        bind: i,
        update: i
      } : o.def = i;
    }
    o.def = o.def || Qi(e.$options, "directives", o.name);
  }
  return n;
}
function VO(t) {
  return t.rawName || "".concat(t.name, ".").concat(Object.keys(t.modifiers || {}).join("."));
}
function Zr(t, e, n, r, o) {
  var i = t.def && t.def[e];
  if (i)
    try {
      i(n.elm, t, n, r, o);
    } catch (s) {
      Mn(s, n.context, "directive ".concat(t.name, " ").concat(e, " hook"));
    }
}
var UO = [MO, BO];
function om(t, e) {
  var n = e.componentOptions;
  if (!($(n) && n.Ctor.options.inheritAttrs === !1) && !(U(t.data.attrs) && U(e.data.attrs))) {
    var r, o, i, s = e.elm, a = t.data.attrs || {}, c = e.data.attrs || {};
    ($(c.__ob__) || de(c._v_attr_proxy)) && (c = e.data.attrs = X({}, c));
    for (r in c)
      o = c[r], i = a[r], i !== o && im(s, r, o, e.data.pre);
    (cn || O0) && c.value !== a.value && im(s, "value", c.value);
    for (r in a)
      U(c[r]) && (qf(r) ? s.removeAttributeNS(fl, ry(r)) : ny(r) || s.removeAttribute(r));
  }
}
function im(t, e, n, r) {
  r || t.tagName.indexOf("-") > -1 ? sm(t, e, n) : vO(e) ? es(n) ? t.removeAttribute(e) : (n = e === "allowfullscreen" && t.tagName === "EMBED" ? "true" : e, t.setAttribute(e, n)) : ny(e) ? t.setAttribute(e, pO(e, n)) : qf(e) ? es(n) ? t.removeAttributeNS(fl, ry(e)) : t.setAttributeNS(fl, e, n) : sm(t, e, n);
}
function sm(t, e, n) {
  if (es(n))
    t.removeAttribute(e);
  else {
    if (cn && !Cr && t.tagName === "TEXTAREA" && e === "placeholder" && n !== "" && !t.__ieph) {
      var r = function(o) {
        o.stopImmediatePropagation(), t.removeEventListener("input", r);
      };
      t.addEventListener("input", r), t.__ieph = !0;
    }
    t.setAttribute(e, n);
  }
}
var GO = {
  create: om,
  update: om
};
function am(t, e) {
  var n = e.elm, r = e.data, o = t.data;
  if (!(U(r.staticClass) && U(r.class) && (U(o) || U(o.staticClass) && U(o.class)))) {
    var i = gO(e), s = n._transitionClasses;
    $(s) && (i = jf(i, Bf(s))), i !== n._prevClass && (n.setAttribute("class", i), n._prevClass = i);
  }
}
var WO = {
  create: am,
  update: am
}, KO = /[\w).+\-_$\]]/;
function Uf(t) {
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
        for (var w = f - 1, m = void 0; w >= 0 && (m = t.charAt(w), m === " "); w--)
          ;
        (!m || !KO.test(m)) && (o = !0);
      }
    }
  d === void 0 ? d = t.slice(0, f).trim() : c !== 0 && g();
  function g() {
    (h || (h = [])).push(t.slice(c, f).trim()), c = f + 1;
  }
  if (h)
    for (f = 0; f < h.length; f++)
      d = ZO(d, h[f]);
  return d;
}
function ZO(t, e) {
  var n = e.indexOf("(");
  if (n < 0)
    return '_f("'.concat(e, '")(').concat(t, ")");
  var r = e.slice(0, n), o = e.slice(n + 1);
  return '_f("'.concat(r, '")(').concat(t).concat(o !== ")" ? "," + o : o);
}
function Os(t, e) {
  console.error("[Vue compiler]: ".concat(t));
}
function so(t, e) {
  return t ? t.map(function(n) {
    return n[e];
  }).filter(function(n) {
    return n;
  }) : [];
}
function qn(t, e, n, r, o) {
  (t.props || (t.props = [])).push(Io({ name: e, value: n, dynamic: o }, r)), t.plain = !1;
}
function hl(t, e, n, r, o) {
  var i = o ? t.dynamicAttrs || (t.dynamicAttrs = []) : t.attrs || (t.attrs = []);
  i.push(Io({ name: e, value: n, dynamic: o }, r)), t.plain = !1;
}
function Vc(t, e, n, r) {
  t.attrsMap[e] = n, t.attrsList.push(Io({ name: e, value: n }, r));
}
function JO(t, e, n, r, o, i, s, a) {
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
function Ht(t, e, n, r, o, i, s, a) {
  r = r || Fe, r.right ? a ? e = "(".concat(e, ")==='click'?'contextmenu':(").concat(e, ")") : e === "click" && (e = "contextmenu", delete r.right) : r.middle && (a ? e = "(".concat(e, ")==='click'?'mouseup':(").concat(e, ")") : e === "click" && (e = "mouseup")), r.capture && (delete r.capture, e = Uc("!", e, a)), r.once && (delete r.once, e = Uc("~", e, a)), r.passive && (delete r.passive, e = Uc("&", e, a));
  var c;
  r.native ? (delete r.native, c = t.nativeEvents || (t.nativeEvents = {})) : c = t.events || (t.events = {});
  var u = Io({ value: n.trim(), dynamic: a }, s);
  r !== Fe && (u.modifiers = r);
  var l = c[e];
  Array.isArray(l) ? o ? l.unshift(u) : l.push(u) : l ? c[e] = o ? [u, l] : [l, u] : c[e] = u, t.plain = !1;
}
function YO(t, e) {
  return t.rawAttrsMap[":" + e] || t.rawAttrsMap["v-bind:" + e] || t.rawAttrsMap[e];
}
function it(t, e, n) {
  var r = ve(t, ":" + e) || ve(t, "v-bind:" + e);
  if (r != null)
    return Uf(r);
  if (n !== !1) {
    var o = ve(t, e);
    if (o != null)
      return JSON.stringify(o);
  }
}
function ve(t, e, n) {
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
function cm(t, e) {
  for (var n = t.attrsList, r = 0, o = n.length; r < o; r++) {
    var i = n[r];
    if (e.test(i.name))
      return n.splice(r, 1), i;
  }
}
function Io(t, e) {
  return e && (e.start != null && (t.start = e.start), e.end != null && (t.end = e.end)), t;
}
function um(t, e, n) {
  var r = n || {}, o = r.number, i = r.trim, s = "$$v", a = s;
  i && (a = "(typeof ".concat(s, " === 'string'") + "? ".concat(s, ".trim()") + ": ".concat(s, ")")), o && (a = "_n(".concat(a, ")"));
  var c = an(e, a);
  t.model = {
    value: "(".concat(e, ")"),
    expression: JSON.stringify(e),
    callback: "function (".concat(s, ") {").concat(c, "}")
  };
}
function an(t, e) {
  var n = XO(t);
  return n.key === null ? "".concat(t, "=").concat(e) : "$set(".concat(n.exp, ", ").concat(n.key, ", ").concat(e, ")");
}
var pl, iy, Jr, qt, Di, vl;
function XO(t) {
  if (t = t.trim(), pl = t.length, t.indexOf("[") < 0 || t.lastIndexOf("]") < pl - 1)
    return qt = t.lastIndexOf("."), qt > -1 ? {
      exp: t.slice(0, qt),
      key: '"' + t.slice(qt + 1) + '"'
    } : {
      exp: t,
      key: null
    };
  for (iy = t, qt = Di = vl = 0; !Wf(); )
    Jr = Gf(), sy(Jr) ? ay(Jr) : Jr === 91 && QO(Jr);
  return {
    exp: t.slice(0, Di),
    key: t.slice(Di + 1, vl)
  };
}
function Gf() {
  return iy.charCodeAt(++qt);
}
function Wf() {
  return qt >= pl;
}
function sy(t) {
  return t === 34 || t === 39;
}
function QO(t) {
  var e = 1;
  for (Di = qt; !Wf(); ) {
    if (t = Gf(), sy(t)) {
      ay(t);
      continue;
    }
    if (t === 91 && e++, t === 93 && e--, e === 0) {
      vl = qt;
      break;
    }
  }
}
function ay(t) {
  for (var e = t; !Wf() && (t = Gf(), t !== e); )
    ;
}
var Pi = "__r", Gc = "__c";
function eD(t, e, n) {
  var r = e.value, o = e.modifiers, i = t.tag, s = t.attrsMap.type;
  if (t.component)
    return um(t, r, o), !1;
  if (i === "select")
    rD(t, r, o);
  else if (i === "input" && s === "checkbox")
    tD(t, r, o);
  else if (i === "input" && s === "radio")
    nD(t, r, o);
  else if (i === "input" || i === "textarea")
    oD(t, r, o);
  else if (!Ye.isReservedTag(i))
    return um(t, r, o), !1;
  return !0;
}
function tD(t, e, n) {
  var r = n && n.number, o = it(t, "value") || "null", i = it(t, "true-value") || "true", s = it(t, "false-value") || "false";
  qn(t, "checked", "Array.isArray(".concat(e, ")") + "?_i(".concat(e, ",").concat(o, ")>-1") + (i === "true" ? ":(".concat(e, ")") : ":_q(".concat(e, ",").concat(i, ")"))), Ht(t, "change", "var $$a=".concat(e, ",") + "$$el=$event.target," + "$$c=$$el.checked?(".concat(i, "):(").concat(s, ");") + "if(Array.isArray($$a)){" + "var $$v=".concat(r ? "_n(" + o + ")" : o, ",") + "$$i=_i($$a,$$v);" + "if($$el.checked){$$i<0&&(".concat(an(e, "$$a.concat([$$v])"), ")}") + "else{$$i>-1&&(".concat(an(e, "$$a.slice(0,$$i).concat($$a.slice($$i+1))"), ")}") + "}else{".concat(an(e, "$$c"), "}"), null, !0);
}
function nD(t, e, n) {
  var r = n && n.number, o = it(t, "value") || "null";
  o = r ? "_n(".concat(o, ")") : o, qn(t, "checked", "_q(".concat(e, ",").concat(o, ")")), Ht(t, "change", an(e, o), null, !0);
}
function rD(t, e, n) {
  var r = n && n.number, o = 'Array.prototype.filter.call($event.target.options,function(o){return o.selected}).map(function(o){var val = "_value" in o ? o._value : o.value;' + "return ".concat(r ? "_n(val)" : "val", "})"), i = "$event.target.multiple ? $$selectedVal : $$selectedVal[0]", s = "var $$selectedVal = ".concat(o, ";");
  s = "".concat(s, " ").concat(an(e, i)), Ht(t, "change", s, null, !0);
}
function oD(t, e, n) {
  var r = t.attrsMap.type, o = n || {}, i = o.lazy, s = o.number, a = o.trim, c = !i && r !== "range", u = i ? "change" : r === "range" ? Pi : "input", l = "$event.target.value";
  a && (l = "$event.target.value.trim()"), s && (l = "_n(".concat(l, ")"));
  var f = an(e, l);
  c && (f = "if($event.target.composing)return;".concat(f)), qn(t, "value", "(".concat(e, ")")), Ht(t, u, f, null, !0), (a || s) && Ht(t, "blur", "$forceUpdate()");
}
function iD(t) {
  if ($(t[Pi])) {
    var e = cn ? "change" : "input";
    t[e] = [].concat(t[Pi], t[e] || []), delete t[Pi];
  }
  $(t[Gc]) && (t.change = [].concat(t[Gc], t.change || []), delete t[Gc]);
}
var _o;
function sD(t, e, n) {
  var r = _o;
  return function o() {
    var i = e.apply(null, arguments);
    i !== null && cy(t, o, n, r);
  };
}
var aD = il && !(Og && Number(Og[1]) <= 53);
function cD(t, e, n, r) {
  if (aD) {
    var o = Y0, i = e;
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
  _o.addEventListener(t, e, D0 ? { capture: n, passive: r } : n);
}
function cy(t, e, n, r) {
  (r || _o).removeEventListener(
    t,
    //@ts-expect-error
    e._wrapper || e,
    n
  );
}
function Wc(t, e) {
  if (!(U(t.data.on) && U(e.data.on))) {
    var n = e.data.on || {}, r = t.data.on || {};
    _o = e.elm || t.elm, iD(n), L0(n, r, cD, cy, sD, e.context), _o = void 0;
  }
}
var uD = {
  create: Wc,
  update: Wc,
  // @ts-expect-error emptyNode has actually data
  destroy: function(t) {
    return Wc(t, nn);
  }
}, vi;
function lm(t, e) {
  if (!(U(t.data.domProps) && U(e.data.domProps))) {
    var n, r, o = e.elm, i = t.data.domProps || {}, s = e.data.domProps || {};
    ($(s.__ob__) || de(s._v_attr_proxy)) && (s = e.data.domProps = X({}, s));
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
        var a = U(r) ? "" : String(r);
        lD(o, a) && (o.value = a);
      } else if (n === "innerHTML" && zf(o.tagName) && U(o.innerHTML)) {
        vi = vi || document.createElement("div"), vi.innerHTML = "<svg>".concat(r, "</svg>");
        for (var c = vi.firstChild; o.firstChild; )
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
function lD(t, e) {
  return (
    //@ts-expect-error
    !t.composing && (t.tagName === "OPTION" || fD(t, e) || dD(t, e))
  );
}
function fD(t, e) {
  var n = !0;
  try {
    n = document.activeElement !== t;
  } catch {
  }
  return n && t.value !== e;
}
function dD(t, e) {
  var n = t.value, r = t._vModifiers;
  if ($(r)) {
    if (r.number)
      return ho(n) !== ho(e);
    if (r.trim)
      return n.trim() !== e.trim();
  }
  return n !== e;
}
var hD = {
  create: lm,
  update: lm
}, uy = bt(function(t) {
  var e = {}, n = /;(?![^(]*\))/g, r = /:(.+)/;
  return t.split(n).forEach(function(o) {
    if (o) {
      var i = o.split(r);
      i.length > 1 && (e[i[0].trim()] = i[1].trim());
    }
  }), e;
});
function Kc(t) {
  var e = ly(t.style);
  return t.staticStyle ? X(t.staticStyle, e) : e;
}
function ly(t) {
  return Array.isArray(t) ? E0(t) : typeof t == "string" ? uy(t) : t;
}
function pD(t, e) {
  var n = {}, r;
  if (e)
    for (var o = t; o.componentInstance; )
      o = o.componentInstance._vnode, o && o.data && (r = Kc(o.data)) && X(n, r);
  (r = Kc(t.data)) && X(n, r);
  for (var i = t; i = i.parent; )
    i.data && (r = Kc(i.data)) && X(n, r);
  return n;
}
var vD = /^--/, fm = /\s*!important$/, dm = function(t, e, n) {
  if (vD.test(e))
    t.style.setProperty(e, n);
  else if (fm.test(n))
    t.style.setProperty(Fn(e), n.replace(fm, ""), "important");
  else {
    var r = gD(e);
    if (Array.isArray(n))
      for (var o = 0, i = n.length; o < i; o++)
        t.style[r] = n[o];
    else
      t.style[r] = n;
  }
}, hm = ["Webkit", "Moz", "ms"], gi, gD = bt(function(t) {
  if (gi = gi || document.createElement("div").style, t = Je(t), t !== "filter" && t in gi)
    return t;
  for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = 0; n < hm.length; n++) {
    var r = hm[n] + e;
    if (r in gi)
      return r;
  }
});
function pm(t, e) {
  var n = e.data, r = t.data;
  if (!(U(n.staticStyle) && U(n.style) && U(r.staticStyle) && U(r.style))) {
    var o, i, s = e.elm, a = r.staticStyle, c = r.normalizedStyle || r.style || {}, u = a || c, l = ly(e.data.style) || {};
    e.data.normalizedStyle = $(l.__ob__) ? X({}, l) : l;
    var f = pD(e, !0);
    for (i in u)
      U(f[i]) && dm(s, i, "");
    for (i in f)
      o = f[i], o !== u[i] && dm(s, i, o ?? "");
  }
}
var mD = {
  create: pm,
  update: pm
}, fy = /\s+/;
function dy(t, e) {
  if (!(!e || !(e = e.trim())))
    if (t.classList)
      e.indexOf(" ") > -1 ? e.split(fy).forEach(function(r) {
        return t.classList.add(r);
      }) : t.classList.add(e);
    else {
      var n = " ".concat(t.getAttribute("class") || "", " ");
      n.indexOf(" " + e + " ") < 0 && t.setAttribute("class", (n + e).trim());
    }
}
function hy(t, e) {
  if (!(!e || !(e = e.trim())))
    if (t.classList)
      e.indexOf(" ") > -1 ? e.split(fy).forEach(function(o) {
        return t.classList.remove(o);
      }) : t.classList.remove(e), t.classList.length || t.removeAttribute("class");
    else {
      for (var n = " ".concat(t.getAttribute("class") || "", " "), r = " " + e + " "; n.indexOf(r) >= 0; )
        n = n.replace(r, " ");
      n = n.trim(), n ? t.setAttribute("class", n) : t.removeAttribute("class");
    }
}
function py(t) {
  if (t) {
    if (typeof t == "object") {
      var e = {};
      return t.css !== !1 && X(e, vm(t.name || "v")), X(e, t), e;
    } else if (typeof t == "string")
      return vm(t);
  }
}
var vm = bt(function(t) {
  return {
    enterClass: "".concat(t, "-enter"),
    enterToClass: "".concat(t, "-enter-to"),
    enterActiveClass: "".concat(t, "-enter-active"),
    leaveClass: "".concat(t, "-leave"),
    leaveToClass: "".concat(t, "-leave-to"),
    leaveActiveClass: "".concat(t, "-leave-active")
  };
}), vy = Me && !Cr, or = "transition", Zc = "animation", Fi = "transition", ts = "transitionend", gl = "animation", gy = "animationend";
vy && (window.ontransitionend === void 0 && window.onwebkittransitionend !== void 0 && (Fi = "WebkitTransition", ts = "webkitTransitionEnd"), window.onanimationend === void 0 && window.onwebkitanimationend !== void 0 && (gl = "WebkitAnimation", gy = "webkitAnimationEnd"));
var gm = Me ? window.requestAnimationFrame ? window.requestAnimationFrame.bind(window) : setTimeout : (
  /* istanbul ignore next */
  function(t) {
    return t();
  }
);
function my(t) {
  gm(function() {
    gm(t);
  });
}
function Dn(t, e) {
  var n = t._transitionClasses || (t._transitionClasses = []);
  n.indexOf(e) < 0 && (n.push(e), dy(t, e));
}
function Vt(t, e) {
  t._transitionClasses && mn(t._transitionClasses, e), hy(t, e);
}
function _y(t, e, n) {
  var r = by(t, e), o = r.type, i = r.timeout, s = r.propCount;
  if (!o)
    return n();
  var a = o === or ? ts : gy, c = 0, u = function() {
    t.removeEventListener(a, l), n();
  }, l = function(f) {
    f.target === t && ++c >= s && u();
  };
  setTimeout(function() {
    c < s && u();
  }, i + 1), t.addEventListener(a, l);
}
var _D = /\b(transform|all)(,|$)/;
function by(t, e) {
  var n = window.getComputedStyle(t), r = (n[Fi + "Delay"] || "").split(", "), o = (n[Fi + "Duration"] || "").split(", "), i = mm(r, o), s = (n[gl + "Delay"] || "").split(", "), a = (n[gl + "Duration"] || "").split(", "), c = mm(s, a), u, l = 0, f = 0;
  e === or ? i > 0 && (u = or, l = i, f = o.length) : e === Zc ? c > 0 && (u = Zc, l = c, f = a.length) : (l = Math.max(i, c), u = l > 0 ? i > c ? or : Zc : null, f = u ? u === or ? o.length : a.length : 0);
  var d = u === or && _D.test(n[Fi + "Property"]);
  return {
    type: u,
    timeout: l,
    propCount: f,
    hasTransform: d
  };
}
function mm(t, e) {
  for (; t.length < e.length; )
    t = t.concat(t);
  return Math.max.apply(null, e.map(function(n, r) {
    return _m(n) + _m(t[r]);
  }));
}
function _m(t) {
  return Number(t.slice(0, -1).replace(",", ".")) * 1e3;
}
function ml(t, e) {
  var n = t.elm;
  $(n._leaveCb) && (n._leaveCb.cancelled = !0, n._leaveCb());
  var r = py(t.data.transition);
  if (!U(r) && !($(n._enterCb) || n.nodeType !== 1)) {
    for (var o = r.css, i = r.type, s = r.enterClass, a = r.enterToClass, c = r.enterActiveClass, u = r.appearClass, l = r.appearToClass, f = r.appearActiveClass, d = r.beforeEnter, h = r.enter, w = r.afterEnter, m = r.enterCancelled, g = r.beforeAppear, v = r.appear, k = r.afterAppear, y = r.appearCancelled, x = r.duration, F = On, A = On.$vnode; A && A.parent; )
      F = A.context, A = A.parent;
    var T = !F._isMounted || !t.isRootInsert;
    if (!(T && !v && v !== "")) {
      var D = T && u ? u : s, H = T && f ? f : c, L = T && l ? l : a, q = T && g || d, b = T && le(v) ? v : h, _ = T && k || w, p = T && y || m, P = ho(Oe(x) ? x.enter : x), N = o !== !1 && !Cr, C = Kf(b), S = n._enterCb = Ui(function() {
        N && (Vt(n, L), Vt(n, H)), S.cancelled ? (N && Vt(n, D), p && p(n)) : _ && _(n), n._enterCb = null;
      });
      t.data.show || tn(t, "insert", function() {
        var O = n.parentNode, E = O && O._pending && O._pending[t.key];
        E && E.tag === t.tag && E.elm._leaveCb && E.elm._leaveCb(), b && b(n, S);
      }), q && q(n), N && (Dn(n, D), Dn(n, H), my(function() {
        Vt(n, D), S.cancelled || (Dn(n, L), C || (wy(P) ? setTimeout(S, P) : _y(n, i, S)));
      })), t.data.show && (e && e(), b && b(n, S)), !N && !C && S();
    }
  }
}
function yy(t, e) {
  var n = t.elm;
  $(n._enterCb) && (n._enterCb.cancelled = !0, n._enterCb());
  var r = py(t.data.transition);
  if (U(r) || n.nodeType !== 1)
    return e();
  if ($(n._leaveCb))
    return;
  var o = r.css, i = r.type, s = r.leaveClass, a = r.leaveToClass, c = r.leaveActiveClass, u = r.beforeLeave, l = r.leave, f = r.afterLeave, d = r.leaveCancelled, h = r.delayLeave, w = r.duration, m = o !== !1 && !Cr, g = Kf(l), v = ho(Oe(w) ? w.leave : w), k = n._leaveCb = Ui(function() {
    n.parentNode && n.parentNode._pending && (n.parentNode._pending[t.key] = null), m && (Vt(n, a), Vt(n, c)), k.cancelled ? (m && Vt(n, s), d && d(n)) : (e(), f && f(n)), n._leaveCb = null;
  });
  h ? h(y) : y();
  function y() {
    k.cancelled || (!t.data.show && n.parentNode && ((n.parentNode._pending || (n.parentNode._pending = {}))[t.key] = t), u && u(n), m && (Dn(n, s), Dn(n, c), my(function() {
      Vt(n, s), k.cancelled || (Dn(n, a), g || (wy(v) ? setTimeout(k, v) : _y(n, i, k)));
    })), l && l(n, k), !m && !g && k());
  }
}
function wy(t) {
  return typeof t == "number" && !isNaN(t);
}
function Kf(t) {
  if (U(t))
    return !1;
  var e = t.fns;
  return $(e) ? Kf(Array.isArray(e) ? e[0] : e) : (t._length || t.length) > 1;
}
function bm(t, e) {
  e.data.show !== !0 && ml(e);
}
var bD = Me ? {
  create: bm,
  activate: bm,
  remove: function(t, e) {
    t.data.show !== !0 ? yy(t, e) : e();
  }
} : {}, yD = [GO, WO, uD, hD, mD, bD], wD = yD.concat(UO), kD = jO({ nodeOps: NO, modules: wD });
Cr && document.addEventListener("selectionchange", function() {
  var t = document.activeElement;
  t && t.vmodel && Zf(t, "input");
});
var ky = {
  inserted: function(t, e, n, r) {
    n.tag === "select" ? (r.elm && !r.elm._vOptions ? tn(n, "postpatch", function() {
      ky.componentUpdated(t, e, n);
    }) : ym(t, e, n.context), t._vOptions = [].map.call(t.options, ns)) : (n.tag === "textarea" || dl(t.type)) && (t._vModifiers = e.modifiers, e.modifiers.lazy || (t.addEventListener("compositionstart", SD), t.addEventListener("compositionend", Sm), t.addEventListener("change", Sm), Cr && (t.vmodel = !0)));
  },
  componentUpdated: function(t, e, n) {
    if (n.tag === "select") {
      ym(t, e, n.context);
      var r = t._vOptions, o = t._vOptions = [].map.call(t.options, ns);
      if (o.some(function(s, a) {
        return !Rn(s, r[a]);
      })) {
        var i = t.multiple ? e.value.some(function(s) {
          return km(s, o);
        }) : e.value !== e.oldValue && km(e.value, o);
        i && Zf(t, "change");
      }
    }
  }
};
function ym(t, e, n) {
  wm(t, e), (cn || O0) && setTimeout(function() {
    wm(t, e);
  }, 0);
}
function wm(t, e, n) {
  var r = e.value, o = t.multiple;
  if (!(o && !Array.isArray(r))) {
    for (var i, s, a = 0, c = t.options.length; a < c; a++)
      if (s = t.options[a], o)
        i = C0(r, ns(s)) > -1, s.selected !== i && (s.selected = i);
      else if (Rn(ns(s), r)) {
        t.selectedIndex !== a && (t.selectedIndex = a);
        return;
      }
    o || (t.selectedIndex = -1);
  }
}
function km(t, e) {
  return e.every(function(n) {
    return !Rn(n, t);
  });
}
function ns(t) {
  return "_value" in t ? t._value : t.value;
}
function SD(t) {
  t.target.composing = !0;
}
function Sm(t) {
  t.target.composing && (t.target.composing = !1, Zf(t.target, "input"));
}
function Zf(t, e) {
  var n = document.createEvent("HTMLEvents");
  n.initEvent(e, !0, !0), t.dispatchEvent(n);
}
function _l(t) {
  return t.componentInstance && (!t.data || !t.data.transition) ? _l(t.componentInstance._vnode) : t;
}
var xD = {
  bind: function(t, e, n) {
    var r = e.value;
    n = _l(n);
    var o = n.data && n.data.transition, i = t.__vOriginalDisplay = t.style.display === "none" ? "" : t.style.display;
    r && o ? (n.data.show = !0, ml(n, function() {
      t.style.display = i;
    })) : t.style.display = r ? i : "none";
  },
  update: function(t, e, n) {
    var r = e.value, o = e.oldValue;
    if (!r != !o) {
      n = _l(n);
      var i = n.data && n.data.transition;
      i ? (n.data.show = !0, r ? ml(n, function() {
        t.style.display = t.__vOriginalDisplay;
      }) : yy(n, function() {
        t.style.display = "none";
      })) : t.style.display = r ? t.__vOriginalDisplay : "none";
    }
  },
  unbind: function(t, e, n, r, o) {
    o || (t.style.display = t.__vOriginalDisplay);
  }
}, ED = {
  model: ky,
  show: xD
}, Sy = {
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
function bl(t) {
  var e = t && t.componentOptions;
  return e && e.Ctor.options.abstract ? bl(G0(e.children)) : t;
}
function xy(t) {
  var e = {}, n = t.$options;
  for (var r in n.propsData)
    e[r] = t[r];
  var o = n._parentListeners;
  for (var r in o)
    e[Je(r)] = o[r];
  return e;
}
function xm(t, e) {
  if (/\d-keep-alive$/.test(e.tag))
    return t("keep-alive", {
      props: e.componentOptions.propsData
    });
}
function $D(t) {
  for (; t = t.parent; )
    if (t.data.transition)
      return !0;
}
function CD(t, e) {
  return e.key === t.key && e.tag === t.tag;
}
var ID = function(t) {
  return t.tag || vo(t);
}, TD = function(t) {
  return t.name === "show";
}, AD = {
  name: "transition",
  props: Sy,
  abstract: !0,
  render: function(t) {
    var e = this, n = this.$slots.default;
    if (n && (n = n.filter(ID), !!n.length)) {
      var r = this.mode, o = n[0];
      if ($D(this.$vnode))
        return o;
      var i = bl(o);
      if (!i)
        return o;
      if (this._leaving)
        return xm(t, o);
      var s = "__transition-".concat(this._uid, "-");
      i.key = i.key == null ? i.isComment ? s + "comment" : s + i.tag : $o(i.key) ? String(i.key).indexOf(s) === 0 ? i.key : s + i.key : i.key;
      var a = (i.data || (i.data = {})).transition = xy(this), c = this._vnode, u = bl(c);
      if (i.data.directives && i.data.directives.some(TD) && (i.data.show = !0), u && u.data && !CD(i, u) && !vo(u) && // #6687 component root is a comment node
      !(u.componentInstance && u.componentInstance._vnode.isComment)) {
        var l = u.data.transition = X({}, a);
        if (r === "out-in")
          return this._leaving = !0, tn(l, "afterLeave", function() {
            e._leaving = !1, e.$forceUpdate();
          }), xm(t, o);
        if (r === "in-out") {
          if (vo(i))
            return c;
          var f, d = function() {
            f();
          };
          tn(a, "afterEnter", d), tn(a, "enterCancelled", d), tn(l, "delayLeave", function(h) {
            f = h;
          });
        }
      }
      return o;
    }
  }
}, Ey = X({
  tag: String,
  moveClass: String
}, Sy);
delete Ey.mode;
var OD = {
  props: Ey,
  beforeMount: function() {
    var t = this, e = this._update;
    this._update = function(n, r) {
      var o = K0(t);
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
    for (var e = this.tag || this.$vnode.data.tag || "span", n = /* @__PURE__ */ Object.create(null), r = this.prevChildren = this.children, o = this.$slots.default || [], i = this.children = [], s = xy(this), a = 0; a < o.length; a++) {
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
    !t.length || !this.hasMove(t[0].elm, e) || (t.forEach(DD), t.forEach(PD), t.forEach(FD), this._reflow = document.body.offsetHeight, t.forEach(function(n) {
      if (n.data.moved) {
        var r = n.elm, o = r.style;
        Dn(r, e), o.transform = o.WebkitTransform = o.transitionDuration = "", r.addEventListener(ts, r._moveCb = function i(s) {
          s && s.target !== r || (!s || /transform$/.test(s.propertyName)) && (r.removeEventListener(ts, i), r._moveCb = null, Vt(r, e));
        });
      }
    }));
  },
  methods: {
    hasMove: function(t, e) {
      if (!vy)
        return !1;
      if (this._hasMove)
        return this._hasMove;
      var n = t.cloneNode();
      t._transitionClasses && t._transitionClasses.forEach(function(o) {
        hy(n, o);
      }), dy(n, e), n.style.display = "none", this.$el.appendChild(n);
      var r = by(n);
      return this.$el.removeChild(n), this._hasMove = r.hasTransform;
    }
  }
};
function DD(t) {
  t.elm._moveCb && t.elm._moveCb(), t.elm._enterCb && t.elm._enterCb();
}
function PD(t) {
  t.data.newPos = t.elm.getBoundingClientRect();
}
function FD(t) {
  var e = t.data.pos, n = t.data.newPos, r = e.left - n.left, o = e.top - n.top;
  if (r || o) {
    t.data.moved = !0;
    var i = t.elm.style;
    i.transform = i.WebkitTransform = "translate(".concat(r, "px,").concat(o, "px)"), i.transitionDuration = "0s";
  }
}
var RD = {
  Transition: AD,
  TransitionGroup: OD
};
se.config.mustUseProp = ty;
se.config.isReservedTag = Hf;
se.config.isReservedAttr = fO;
se.config.getTagNamespace = oy;
se.config.isUnknownElement = SO;
X(se.options.directives, ED);
X(se.options.components, RD);
se.prototype.__patch__ = Me ? kD : ge;
se.prototype.$mount = function(t, e) {
  return t = t && Me ? Vf(t) : void 0, fA(this, t, e);
};
Me && setTimeout(function() {
  Ye.devtools && Gi && Gi.emit("init", se);
}, 0);
var ND = /\{\{((?:.|\r?\n)+?)\}\}/g, Em = /[-.*+?^${}()|[\]\/\\]/g, MD = bt(function(t) {
  var e = t[0].replace(Em, "\\$&"), n = t[1].replace(Em, "\\$&");
  return new RegExp(e + "((?:.|\\n)+?)" + n, "g");
});
function LD(t, e) {
  var n = e ? MD(e) : ND;
  if (n.test(t)) {
    for (var r = [], o = [], i = n.lastIndex = 0, s, a, c; s = n.exec(t); ) {
      a = s.index, a > i && (o.push(c = t.slice(i, a)), r.push(JSON.stringify(c)));
      var u = Uf(s[1].trim());
      r.push("_s(".concat(u, ")")), o.push({ "@binding": u }), i = a + s[0].length;
    }
    return i < t.length && (o.push(c = t.slice(i)), r.push(JSON.stringify(c))), {
      expression: r.join("+"),
      tokens: o
    };
  }
}
function qD(t, e) {
  e.warn;
  var n = ve(t, "class");
  n && (t.staticClass = JSON.stringify(n.replace(/\s+/g, " ").trim()));
  var r = it(
    t,
    "class",
    !1
    /* getStatic */
  );
  r && (t.classBinding = r);
}
function jD(t) {
  var e = "";
  return t.staticClass && (e += "staticClass:".concat(t.staticClass, ",")), t.classBinding && (e += "class:".concat(t.classBinding, ",")), e;
}
var BD = {
  staticKeys: ["staticClass"],
  transformNode: qD,
  genData: jD
};
function zD(t, e) {
  e.warn;
  var n = ve(t, "style");
  n && (t.staticStyle = JSON.stringify(uy(n)));
  var r = it(
    t,
    "style",
    !1
    /* getStatic */
  );
  r && (t.styleBinding = r);
}
function HD(t) {
  var e = "";
  return t.staticStyle && (e += "staticStyle:".concat(t.staticStyle, ",")), t.styleBinding && (e += "style:(".concat(t.styleBinding, "),")), e;
}
var VD = {
  staticKeys: ["staticStyle"],
  transformNode: zD,
  genData: HD
}, mi, UD = {
  decode: function(t) {
    return mi = mi || document.createElement("div"), mi.innerHTML = t, mi.textContent;
  }
}, GD = Ce("area,base,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr"), WD = Ce("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr,source"), KD = Ce("address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track"), ZD = /^\s*([^\s"'<>\/=]+)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/, JD = /^\s*((?:v-[\w-]+:|@|:|#)\[[^=]+?\][^\s"'<>\/=]*)(?:\s*(=)\s*(?:"([^"]*)"+|'([^']*)'+|([^\s"'=<>`]+)))?/, $m = "[a-zA-Z_][\\-\\.0-9_a-zA-Z".concat(T0.source, "]*"), $y = "((?:".concat($m, "\\:)?").concat($m, ")"), Cm = new RegExp("^<".concat($y)), YD = /^\s*(\/?)>/, Im = new RegExp("^<\\/".concat($y, "[^>]*>")), XD = /^<!DOCTYPE [^>]+>/i, Tm = /^<!\--/, Am = /^<!\[/, Om = Ce("script,style,textarea", !0), Dm = {}, QD = {
  "&lt;": "<",
  "&gt;": ">",
  "&quot;": '"',
  "&amp;": "&",
  "&#10;": `
`,
  "&#9;": "	",
  "&#39;": "'"
}, eP = /&(?:lt|gt|quot|amp|#39);/g, tP = /&(?:lt|gt|quot|amp|#39|#10|#9);/g, nP = Ce("pre,textarea", !0), Pm = function(t, e) {
  return t && nP(t) && e[0] === `
`;
};
function rP(t, e) {
  var n = e ? tP : eP;
  return t.replace(n, function(r) {
    return QD[r];
  });
}
function oP(t, e) {
  for (var n = [], r = e.expectHTML, o = e.isUnaryTag || ot, i = e.canBeLeftOpenTag || ot, s = 0, a, c, u = function() {
    if (a = t, !c || !Om(c)) {
      var m = t.indexOf("<");
      if (m === 0) {
        if (Tm.test(t)) {
          var g = t.indexOf("-->");
          if (g >= 0)
            return e.shouldKeepComment && e.comment && e.comment(t.substring(4, g), s, s + g + 3), f(g + 3), "continue";
        }
        if (Am.test(t)) {
          var v = t.indexOf("]>");
          if (v >= 0)
            return f(v + 2), "continue";
        }
        var k = t.match(XD);
        if (k)
          return f(k[0].length), "continue";
        var y = t.match(Im);
        if (y) {
          var x = s;
          return f(y[0].length), w(y[1], x, s), "continue";
        }
        var F = d();
        if (F)
          return h(F), Pm(F.tagName, t) && f(1), "continue";
      }
      var A = void 0, T = void 0, D = void 0;
      if (m >= 0) {
        for (T = t.slice(m); !Im.test(T) && !Cm.test(T) && !Tm.test(T) && !Am.test(T) && (D = T.indexOf("<", 1), !(D < 0)); )
          m += D, T = t.slice(m);
        A = t.substring(0, m);
      }
      m < 0 && (A = t), A && f(A.length), e.chars && A && e.chars(A, s - A.length, s);
    } else {
      var H = 0, L = c.toLowerCase(), q = Dm[L] || (Dm[L] = new RegExp("([\\s\\S]*?)(</" + L + "[^>]*>)", "i")), T = t.replace(q, function(_, p, P) {
        return H = P.length, !Om(L) && L !== "noscript" && (p = p.replace(/<!\--([\s\S]*?)-->/g, "$1").replace(/<!\[CDATA\[([\s\S]*?)]]>/g, "$1")), Pm(L, p) && (p = p.slice(1)), e.chars && e.chars(p), "";
      });
      s += t.length - T.length, t = T, w(L, s - H, s);
    }
    if (t === a)
      return e.chars && e.chars(t), "break";
  }; t; ) {
    var l = u();
    if (l === "break")
      break;
  }
  w();
  function f(m) {
    s += m, t = t.substring(m);
  }
  function d() {
    var m = t.match(Cm);
    if (m) {
      var g = {
        tagName: m[1],
        attrs: [],
        start: s
      };
      f(m[0].length);
      for (var v = void 0, k = void 0; !(v = t.match(YD)) && (k = t.match(JD) || t.match(ZD)); )
        k.start = s, f(k[0].length), k.end = s, g.attrs.push(k);
      if (v)
        return g.unarySlash = v[1], f(v[0].length), g.end = s, g;
    }
  }
  function h(m) {
    var g = m.tagName, v = m.unarySlash;
    r && (c === "p" && KD(g) && w(c), i(g) && c === g && w(g));
    for (var k = o(g) || !!v, y = m.attrs.length, x = new Array(y), F = 0; F < y; F++) {
      var A = m.attrs[F], T = A[3] || A[4] || A[5] || "", D = g === "a" && A[1] === "href" ? e.shouldDecodeNewlinesForHref : e.shouldDecodeNewlines;
      x[F] = {
        name: A[1],
        value: rP(T, D)
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
  function w(m, g, v) {
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
var Fm = /^@|^v-on:/, Jc = /^v-|^@|^:|^#/, iP = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/, Rm = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/, sP = /^\(|\)$/g, Ri = /^\[.*\]$/, aP = /:(.*)$/, Nm = /^:|^\.|^v-bind:/, Cy = /\.[^.\]]+(?=[^\]]*$)/g, yl = /^v-slot(:|$)|^#/, cP = /[\r\n]/, uP = /[ \f\t\r\n]+/g, lP = bt(UD.decode), rs = "_empty_", lr, Mm, wl, Yc, Xc, Qc, kl, Lm;
function Jf(t, e, n) {
  return {
    type: 1,
    tag: t,
    attrsList: e,
    attrsMap: CP(e),
    rawAttrsMap: {},
    parent: n,
    children: []
  };
}
function fP(t, e) {
  lr = e.warn || Os, Qc = e.isPreTag || ot, kl = e.mustUseProp || ot, Lm = e.getTagNamespace || ot, e.isReservedTag, wl = so(e.modules, "transformNode"), Yc = so(e.modules, "preTransformNode"), Xc = so(e.modules, "postTransformNode"), Mm = e.delimiters;
  var n = [], r = e.preserveWhitespace !== !1, o = e.whitespace, i, s, a = !1, c = !1;
  function u(f) {
    if (l(f), !a && !f.processed && (f = Ni(f, e)), !n.length && f !== i && i.if && (f.elseif || f.else) && hr(i, {
      exp: f.elseif,
      block: f
    }), s && !f.forbidden)
      if (f.elseif || f.else)
        _P(f, s);
      else {
        if (f.slotScope) {
          var d = f.slotTarget || '"default"';
          (s.scopedSlots || (s.scopedSlots = {}))[d] = f;
        }
        s.children.push(f), f.parent = s;
      }
    f.children = f.children.filter(function(w) {
      return !w.slotScope;
    }), l(f), f.pre && (a = !1), Qc(f.tag) && (c = !1);
    for (var h = 0; h < Xc.length; h++)
      Xc[h](f, e);
  }
  function l(f) {
    if (!c)
      for (var d = void 0; (d = f.children[f.children.length - 1]) && d.type === 3 && d.text === " "; )
        f.children.pop();
  }
  return oP(t, {
    warn: lr,
    expectHTML: e.expectHTML,
    isUnaryTag: e.isUnaryTag,
    canBeLeftOpenTag: e.canBeLeftOpenTag,
    shouldDecodeNewlines: e.shouldDecodeNewlines,
    shouldDecodeNewlinesForHref: e.shouldDecodeNewlinesForHref,
    shouldKeepComment: e.comments,
    outputSourceRange: e.outputSourceRange,
    start: function(f, d, h, w, m) {
      var g = s && s.ns || Lm(f);
      cn && g === "svg" && (d = DP(d));
      var v = Jf(f, d, s);
      g && (v.ns = g), TP(v) && !Ir() && (v.forbidden = !0);
      for (var k = 0; k < Yc.length; k++)
        v = Yc[k](v, e) || v;
      a || (dP(v), v.pre && (a = !0)), Qc(v.tag) && (c = !0), a ? hP(v) : v.processed || (Iy(v), mP(v), yP(v)), i || (i = v), h ? u(v) : (s = v, n.push(v));
    },
    end: function(f, d, h) {
      var w = n[n.length - 1];
      n.length -= 1, s = n[n.length - 1], u(w);
    },
    chars: function(f, d, h) {
      if (s && !(cn && s.tag === "textarea" && s.attrsMap.placeholder === f)) {
        var w = s.children;
        if (c || f.trim() ? f = IP(s) ? f : lP(f) : w.length ? o ? o === "condense" ? f = cP.test(f) ? "" : " " : f = " " : f = r ? " " : "" : f = "", f) {
          !c && o === "condense" && (f = f.replace(uP, " "));
          var m = void 0, g = void 0;
          !a && f !== " " && (m = LD(f, Mm)) ? g = {
            type: 2,
            expression: m.expression,
            tokens: m.tokens,
            text: f
          } : (f !== " " || !w.length || w[w.length - 1].text !== " ") && (g = {
            type: 3,
            text: f
          }), g && w.push(g);
        }
      }
    },
    comment: function(f, d, h) {
      if (s) {
        var w = {
          type: 3,
          text: f,
          isComment: !0
        };
        s.children.push(w);
      }
    }
  }), i;
}
function dP(t) {
  ve(t, "v-pre") != null && (t.pre = !0);
}
function hP(t) {
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
function Ni(t, e) {
  pP(t), t.plain = !t.key && !t.scopedSlots && !t.attrsList.length, vP(t), wP(t), kP(t), SP(t);
  for (var n = 0; n < wl.length; n++)
    t = wl[n](t, e) || t;
  return xP(t), t;
}
function pP(t) {
  var e = it(t, "key");
  e && (t.key = e);
}
function vP(t) {
  var e = it(t, "ref");
  e && (t.ref = e, t.refInFor = EP(t));
}
function Iy(t) {
  var e;
  if (e = ve(t, "v-for")) {
    var n = gP(e);
    n && X(t, n);
  }
}
function gP(t) {
  var e = t.match(iP);
  if (e) {
    var n = {};
    n.for = e[2].trim();
    var r = e[1].trim().replace(sP, ""), o = r.match(Rm);
    return o ? (n.alias = r.replace(Rm, "").trim(), n.iterator1 = o[1].trim(), o[2] && (n.iterator2 = o[2].trim())) : n.alias = r, n;
  }
}
function mP(t) {
  var e = ve(t, "v-if");
  if (e)
    t.if = e, hr(t, {
      exp: e,
      block: t
    });
  else {
    ve(t, "v-else") != null && (t.else = !0);
    var n = ve(t, "v-else-if");
    n && (t.elseif = n);
  }
}
function _P(t, e) {
  var n = bP(e.children);
  n && n.if && hr(n, {
    exp: t.elseif,
    block: t
  });
}
function bP(t) {
  for (var e = t.length; e--; ) {
    if (t[e].type === 1)
      return t[e];
    t.pop();
  }
}
function hr(t, e) {
  t.ifConditions || (t.ifConditions = []), t.ifConditions.push(e);
}
function yP(t) {
  var e = ve(t, "v-once");
  e != null && (t.once = !0);
}
function wP(t) {
  var e;
  t.tag === "template" ? (e = ve(t, "scope"), t.slotScope = e || ve(t, "slot-scope")) : (e = ve(t, "slot-scope")) && (t.slotScope = e);
  var n = it(t, "slot");
  if (n && (t.slotTarget = n === '""' ? '"default"' : n, t.slotTargetDynamic = !!(t.attrsMap[":slot"] || t.attrsMap["v-bind:slot"]), t.tag !== "template" && !t.slotScope && hl(t, "slot", n, YO(t, "slot"))), t.tag === "template") {
    var r = cm(t, yl);
    if (r) {
      var o = qm(r), i = o.name, s = o.dynamic;
      t.slotTarget = i, t.slotTargetDynamic = s, t.slotScope = r.value || rs;
    }
  } else {
    var r = cm(t, yl);
    if (r) {
      var a = t.scopedSlots || (t.scopedSlots = {}), c = qm(r), u = c.name, s = c.dynamic, l = a[u] = Jf("template", [], t);
      l.slotTarget = u, l.slotTargetDynamic = s, l.children = t.children.filter(function(h) {
        if (!h.slotScope)
          return h.parent = l, !0;
      }), l.slotScope = r.value || rs, t.children = [], t.plain = !1;
    }
  }
}
function qm(t) {
  var e = t.name.replace(yl, "");
  return e || t.name[0] !== "#" && (e = "default"), Ri.test(e) ? (
    // dynamic [name]
    { name: e.slice(1, -1), dynamic: !0 }
  ) : (
    // static name
    { name: '"'.concat(e, '"'), dynamic: !1 }
  );
}
function kP(t) {
  t.tag === "slot" && (t.slotName = it(t, "name"));
}
function SP(t) {
  var e;
  (e = it(t, "is")) && (t.component = e), ve(t, "inline-template") != null && (t.inlineTemplate = !0);
}
function xP(t) {
  var e = t.attrsList, n, r, o, i, s, a, c, u;
  for (n = 0, r = e.length; n < r; n++)
    if (o = i = e[n].name, s = e[n].value, Jc.test(o))
      if (t.hasBindings = !0, a = $P(o.replace(Jc, "")), a && (o = o.replace(Cy, "")), Nm.test(o))
        o = o.replace(Nm, ""), s = Uf(s), u = Ri.test(o), u && (o = o.slice(1, -1)), a && (a.prop && !u && (o = Je(o), o === "innerHtml" && (o = "innerHTML")), a.camel && !u && (o = Je(o)), a.sync && (c = an(s, "$event"), u ? Ht(
          t,
          '"update:"+('.concat(o, ")"),
          c,
          null,
          !1,
          lr,
          e[n],
          !0
          // dynamic
        ) : (Ht(t, "update:".concat(Je(o)), c, null, !1, lr, e[n]), Fn(o) !== Je(o) && Ht(t, "update:".concat(Fn(o)), c, null, !1, lr, e[n])))), a && a.prop || !t.component && kl(t.tag, t.attrsMap.type, o) ? qn(t, o, s, e[n], u) : hl(t, o, s, e[n], u);
      else if (Fm.test(o))
        o = o.replace(Fm, ""), u = Ri.test(o), u && (o = o.slice(1, -1)), Ht(t, o, s, a, !1, lr, e[n], u);
      else {
        o = o.replace(Jc, "");
        var l = o.match(aP), f = l && l[1];
        u = !1, f && (o = o.slice(0, -(f.length + 1)), Ri.test(f) && (f = f.slice(1, -1), u = !0)), JO(t, o, i, s, f, u, a, e[n]);
      }
    else
      hl(t, o, JSON.stringify(s), e[n]), !t.component && o === "muted" && kl(t.tag, t.attrsMap.type, o) && qn(t, o, "true", e[n]);
}
function EP(t) {
  for (var e = t; e; ) {
    if (e.for !== void 0)
      return !0;
    e = e.parent;
  }
  return !1;
}
function $P(t) {
  var e = t.match(Cy);
  if (e) {
    var n = {};
    return e.forEach(function(r) {
      n[r.slice(1)] = !0;
    }), n;
  }
}
function CP(t) {
  for (var e = {}, n = 0, r = t.length; n < r; n++)
    e[t[n].name] = t[n].value;
  return e;
}
function IP(t) {
  return t.tag === "script" || t.tag === "style";
}
function TP(t) {
  return t.tag === "style" || t.tag === "script" && (!t.attrsMap.type || t.attrsMap.type === "text/javascript");
}
var AP = /^xmlns:NS\d+/, OP = /^NS\d+:/;
function DP(t) {
  for (var e = [], n = 0; n < t.length; n++) {
    var r = t[n];
    AP.test(r.name) || (r.name = r.name.replace(OP, ""), e.push(r));
  }
  return e;
}
function PP(t, e) {
  if (t.tag === "input") {
    var n = t.attrsMap;
    if (!n["v-model"])
      return;
    var r = void 0;
    if ((n[":type"] || n["v-bind:type"]) && (r = it(t, "type")), !n.type && !r && n["v-bind"] && (r = "(".concat(n["v-bind"], ").type")), r) {
      var o = ve(t, "v-if", !0), i = o ? "&&(".concat(o, ")") : "", s = ve(t, "v-else", !0) != null, a = ve(t, "v-else-if", !0), c = eu(t);
      Iy(c), Vc(c, "type", "checkbox"), Ni(c, e), c.processed = !0, c.if = "(".concat(r, ")==='checkbox'") + i, hr(c, {
        exp: c.if,
        block: c
      });
      var u = eu(t);
      ve(u, "v-for", !0), Vc(u, "type", "radio"), Ni(u, e), hr(c, {
        exp: "(".concat(r, ")==='radio'") + i,
        block: u
      });
      var l = eu(t);
      return ve(l, "v-for", !0), Vc(l, ":type", r), Ni(l, e), hr(c, {
        exp: o,
        block: l
      }), s ? c.else = !0 : a && (c.elseif = a), c;
    }
  }
}
function eu(t) {
  return Jf(t.tag, t.attrsList.slice(), t.parent);
}
var FP = {
  preTransformNode: PP
}, jm = [BD, VD, FP];
function RP(t, e) {
  e.value && qn(t, "textContent", "_s(".concat(e.value, ")"), e);
}
function NP(t, e) {
  e.value && qn(t, "innerHTML", "_s(".concat(e.value, ")"), e);
}
var MP = {
  model: eD,
  text: RP,
  html: NP
}, LP = {
  expectHTML: !0,
  modules: jm,
  directives: MP,
  isPreTag: kO,
  isUnaryTag: GD,
  mustUseProp: ty,
  canBeLeftOpenTag: WD,
  isReservedTag: Hf,
  getTagNamespace: oy,
  staticKeys: wT(jm)
}, Ty, Yf, qP = bt(BP);
function jP(t, e) {
  t && (Ty = qP(e.staticKeys || ""), Yf = e.isReservedTag || ot, Sl(t), xl(t, !1));
}
function BP(t) {
  return Ce("type,tag,attrsList,attrsMap,plain,parent,children,attrs,start,end,rawAttrsMap" + (t ? "," + t : ""));
}
function Sl(t) {
  if (t.static = zP(t), t.type === 1) {
    if (!Yf(t.tag) && t.tag !== "slot" && t.attrsMap["inline-template"] == null)
      return;
    for (var e = 0, n = t.children.length; e < n; e++) {
      var r = t.children[e];
      Sl(r), r.static || (t.static = !1);
    }
    if (t.ifConditions)
      for (var e = 1, n = t.ifConditions.length; e < n; e++) {
        var o = t.ifConditions[e].block;
        Sl(o), o.static || (t.static = !1);
      }
  }
}
function xl(t, e) {
  if (t.type === 1) {
    if ((t.static || t.once) && (t.staticInFor = e), t.static && t.children.length && !(t.children.length === 1 && t.children[0].type === 3)) {
      t.staticRoot = !0;
      return;
    } else
      t.staticRoot = !1;
    if (t.children)
      for (var n = 0, r = t.children.length; n < r; n++)
        xl(t.children[n], e || !!t.for);
    if (t.ifConditions)
      for (var n = 1, r = t.ifConditions.length; n < r; n++)
        xl(t.ifConditions[n].block, e);
  }
}
function zP(t) {
  return t.type === 2 ? !1 : t.type === 3 ? !0 : !!(t.pre || !t.hasBindings && // no dynamic bindings
  !t.if && !t.for && // not v-if or v-for or v-else
  !pT(t.tag) && // not a built-in
  Yf(t.tag) && // not a component
  !HP(t) && Object.keys(t).every(Ty));
}
function HP(t) {
  for (; t.parent; ) {
    if (t = t.parent, t.tag !== "template")
      return !1;
    if (t.for)
      return !0;
  }
  return !1;
}
var VP = /^([\w$_]+|\([^)]*?\))\s*=>|^function(?:\s+[\w$]+)?\s*\(/, UP = /\([^)]*?\);*$/, Bm = /^[A-Za-z_$][\w$]*(?:\.[A-Za-z_$][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[A-Za-z_$][\w$]*])*$/, Ay = {
  esc: 27,
  tab: 9,
  enter: 13,
  space: 32,
  up: 38,
  left: 37,
  right: 39,
  down: 40,
  delete: [8, 46]
}, GP = {
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
}, Nt = function(t) {
  return "if(".concat(t, ")return null;");
}, zm = {
  stop: "$event.stopPropagation();",
  prevent: "$event.preventDefault();",
  self: Nt("$event.target !== $event.currentTarget"),
  ctrl: Nt("!$event.ctrlKey"),
  shift: Nt("!$event.shiftKey"),
  alt: Nt("!$event.altKey"),
  meta: Nt("!$event.metaKey"),
  left: Nt("'button' in $event && $event.button !== 0"),
  middle: Nt("'button' in $event && $event.button !== 1"),
  right: Nt("'button' in $event && $event.button !== 2")
};
function Hm(t, e) {
  var n = e ? "nativeOn:" : "on:", r = "", o = "";
  for (var i in t) {
    var s = Oy(t[i]);
    t[i] && t[i].dynamic ? o += "".concat(i, ",").concat(s, ",") : r += '"'.concat(i, '":').concat(s, ",");
  }
  return r = "{".concat(r.slice(0, -1), "}"), o ? n + "_d(".concat(r, ",[").concat(o.slice(0, -1), "])") : n + r;
}
function Oy(t) {
  if (!t)
    return "function(){}";
  if (Array.isArray(t))
    return "[".concat(t.map(function(l) {
      return Oy(l);
    }).join(","), "]");
  var e = Bm.test(t.value), n = VP.test(t.value), r = Bm.test(t.value.replace(UP, ""));
  if (t.modifiers) {
    var o = "", i = "", s = [], a = function(l) {
      if (zm[l])
        i += zm[l], Ay[l] && s.push(l);
      else if (l === "exact") {
        var f = t.modifiers;
        i += Nt(["ctrl", "shift", "alt", "meta"].filter(function(d) {
          return !f[d];
        }).map(function(d) {
          return "$event.".concat(d, "Key");
        }).join("||"));
      } else
        s.push(l);
    };
    for (var c in t.modifiers)
      a(c);
    s.length && (o += WP(s)), i && (o += i);
    var u = e ? "return ".concat(t.value, ".apply(null, arguments)") : n ? "return (".concat(t.value, ").apply(null, arguments)") : r ? "return ".concat(t.value) : t.value;
    return "function($event){".concat(o).concat(u, "}");
  } else
    return e || n ? t.value : "function($event){".concat(r ? "return ".concat(t.value) : t.value, "}");
}
function WP(t) {
  return (
    // make sure the key filters only apply to KeyboardEvents
    // #9441: can't use 'keyCode' in $event because Chrome autofill fires fake
    // key events that do not have keyCode property...
    "if(!$event.type.indexOf('key')&&" + "".concat(t.map(KP).join("&&"), ")return null;")
  );
}
function KP(t) {
  var e = parseInt(t, 10);
  if (e)
    return "$event.keyCode!==".concat(e);
  var n = Ay[t], r = GP[t];
  return "_k($event.keyCode," + "".concat(JSON.stringify(t), ",") + "".concat(JSON.stringify(n), ",") + "$event.key," + "".concat(JSON.stringify(r)) + ")";
}
function ZP(t, e) {
  t.wrapListeners = function(n) {
    return "_g(".concat(n, ",").concat(e.value, ")");
  };
}
function JP(t, e) {
  t.wrapData = function(n) {
    return "_b(".concat(n, ",'").concat(t.tag, "',").concat(e.value, ",").concat(e.modifiers && e.modifiers.prop ? "true" : "false").concat(e.modifiers && e.modifiers.sync ? ",true" : "", ")");
  };
}
var YP = {
  on: ZP,
  bind: JP,
  cloak: ge
}, XP = (
  /** @class */
  function() {
    function t(e) {
      this.options = e, this.warn = e.warn || Os, this.transforms = so(e.modules, "transformCode"), this.dataGenFns = so(e.modules, "genData"), this.directives = X(X({}, YP), e.directives);
      var n = e.isReservedTag || ot;
      this.maybeComponent = function(r) {
        return !!r.component || !n(r.tag);
      }, this.onceId = 0, this.staticRenderFns = [], this.pre = !1;
    }
    return t;
  }()
);
function Dy(t, e) {
  var n = new XP(e), r = t ? t.tag === "script" ? "null" : Wt(t, n) : '_c("div")';
  return {
    render: "with(this){return ".concat(r, "}"),
    staticRenderFns: n.staticRenderFns
  };
}
function Wt(t, e) {
  if (t.parent && (t.pre = t.pre || t.parent.pre), t.staticRoot && !t.staticProcessed)
    return Py(t, e);
  if (t.once && !t.onceProcessed)
    return Fy(t, e);
  if (t.for && !t.forProcessed)
    return Ny(t, e);
  if (t.if && !t.ifProcessed)
    return Xf(t, e);
  if (t.tag === "template" && !t.slotTarget && !e.pre)
    return _r(t, e) || "void 0";
  if (t.tag === "slot")
    return c3(t, e);
  var n = void 0;
  if (t.component)
    n = u3(t.component, t, e);
  else {
    var r = void 0, o = e.maybeComponent(t);
    (!t.plain || t.pre && o) && (r = My(t, e));
    var i = void 0, s = e.options.bindings;
    o && s && s.__isScriptSetup !== !1 && (i = QP(s, t.tag)), i || (i = "'".concat(t.tag, "'"));
    var a = t.inlineTemplate ? null : _r(t, e, !0);
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
function QP(t, e) {
  var n = Je(e), r = S0(n), o = function(a) {
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
function Py(t, e) {
  t.staticProcessed = !0;
  var n = e.pre;
  return t.pre && (e.pre = t.pre), e.staticRenderFns.push("with(this){return ".concat(Wt(t, e), "}")), e.pre = n, "_m(".concat(e.staticRenderFns.length - 1).concat(t.staticInFor ? ",true" : "", ")");
}
function Fy(t, e) {
  if (t.onceProcessed = !0, t.if && !t.ifProcessed)
    return Xf(t, e);
  if (t.staticInFor) {
    for (var n = "", r = t.parent; r; ) {
      if (r.for) {
        n = r.key;
        break;
      }
      r = r.parent;
    }
    return n ? "_o(".concat(Wt(t, e), ",").concat(e.onceId++, ",").concat(n, ")") : Wt(t, e);
  } else
    return Py(t, e);
}
function Xf(t, e, n, r) {
  return t.ifProcessed = !0, Ry(t.ifConditions.slice(), e, n, r);
}
function Ry(t, e, n, r) {
  if (!t.length)
    return r || "_e()";
  var o = t.shift();
  if (o.exp)
    return "(".concat(o.exp, ")?").concat(i(o.block), ":").concat(Ry(t, e, n, r));
  return "".concat(i(o.block));
  function i(s) {
    return n ? n(s, e) : s.once ? Fy(s, e) : Wt(s, e);
  }
}
function Ny(t, e, n, r) {
  var o = t.for, i = t.alias, s = t.iterator1 ? ",".concat(t.iterator1) : "", a = t.iterator2 ? ",".concat(t.iterator2) : "";
  return t.forProcessed = !0, "".concat(r || "_l", "((").concat(o, "),") + "function(".concat(i).concat(s).concat(a, "){") + "return ".concat((n || Wt)(t, e)) + "})";
}
function My(t, e) {
  var n = "{", r = e3(t, e);
  r && (n += r + ","), t.key && (n += "key:".concat(t.key, ",")), t.ref && (n += "ref:".concat(t.ref, ",")), t.refInFor && (n += "refInFor:true,"), t.pre && (n += "pre:true,"), t.component && (n += 'tag:"'.concat(t.tag, '",'));
  for (var o = 0; o < e.dataGenFns.length; o++)
    n += e.dataGenFns[o](t);
  if (t.attrs && (n += "attrs:".concat(Mi(t.attrs), ",")), t.props && (n += "domProps:".concat(Mi(t.props), ",")), t.events && (n += "".concat(Hm(t.events, !1), ",")), t.nativeEvents && (n += "".concat(Hm(t.nativeEvents, !0), ",")), t.slotTarget && !t.slotScope && (n += "slot:".concat(t.slotTarget, ",")), t.scopedSlots && (n += "".concat(n3(t, t.scopedSlots, e), ",")), t.model && (n += "model:{value:".concat(t.model.value, ",callback:").concat(t.model.callback, ",expression:").concat(t.model.expression, "},")), t.inlineTemplate) {
    var i = t3(t, e);
    i && (n += "".concat(i, ","));
  }
  return n = n.replace(/,$/, "") + "}", t.dynamicAttrs && (n = "_b(".concat(n, ',"').concat(t.tag, '",').concat(Mi(t.dynamicAttrs), ")")), t.wrapData && (n = t.wrapData(n)), t.wrapListeners && (n = t.wrapListeners(n)), n;
}
function e3(t, e) {
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
function t3(t, e) {
  var n = t.children[0];
  if (n && n.type === 1) {
    var r = Dy(n, e.options);
    return "inlineTemplate:{render:function(){".concat(r.render, "},staticRenderFns:[").concat(r.staticRenderFns.map(function(o) {
      return "function(){".concat(o, "}");
    }).join(","), "]}");
  }
}
function n3(t, e, n) {
  var r = t.for || Object.keys(e).some(function(a) {
    var c = e[a];
    return c.slotTargetDynamic || c.if || c.for || Ly(c);
  }), o = !!t.if;
  if (!r)
    for (var i = t.parent; i; ) {
      if (i.slotScope && i.slotScope !== rs || i.for) {
        r = !0;
        break;
      }
      i.if && (o = !0), i = i.parent;
    }
  var s = Object.keys(e).map(function(a) {
    return El(e[a], n);
  }).join(",");
  return "scopedSlots:_u([".concat(s, "]").concat(r ? ",null,true" : "").concat(!r && o ? ",null,false,".concat(r3(s)) : "", ")");
}
function r3(t) {
  for (var e = 5381, n = t.length; n; )
    e = e * 33 ^ t.charCodeAt(--n);
  return e >>> 0;
}
function Ly(t) {
  return t.type === 1 ? t.tag === "slot" ? !0 : t.children.some(Ly) : !1;
}
function El(t, e) {
  var n = t.attrsMap["slot-scope"];
  if (t.if && !t.ifProcessed && !n)
    return Xf(t, e, El, "null");
  if (t.for && !t.forProcessed)
    return Ny(t, e, El);
  var r = t.slotScope === rs ? "" : String(t.slotScope), o = "function(".concat(r, "){") + "return ".concat(t.tag === "template" ? t.if && n ? "(".concat(t.if, ")?").concat(_r(t, e) || "undefined", ":undefined") : _r(t, e) || "undefined" : Wt(t, e), "}"), i = r ? "" : ",proxy:true";
  return "{key:".concat(t.slotTarget || '"default"', ",fn:").concat(o).concat(i, "}");
}
function _r(t, e, n, r, o) {
  var i = t.children;
  if (i.length) {
    var s = i[0];
    if (i.length === 1 && s.for && s.tag !== "template" && s.tag !== "slot") {
      var a = n ? e.maybeComponent(s) ? ",1" : ",0" : "";
      return "".concat((r || Wt)(s, e)).concat(a);
    }
    var c = n ? o3(i, e.maybeComponent) : 0, u = o || i3;
    return "[".concat(i.map(function(l) {
      return u(l, e);
    }).join(","), "]").concat(c ? ",".concat(c) : "");
  }
}
function o3(t, e) {
  for (var n = 0, r = 0; r < t.length; r++) {
    var o = t[r];
    if (o.type === 1) {
      if (Vm(o) || o.ifConditions && o.ifConditions.some(function(i) {
        return Vm(i.block);
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
function Vm(t) {
  return t.for !== void 0 || t.tag === "template" || t.tag === "slot";
}
function i3(t, e) {
  return t.type === 1 ? Wt(t, e) : t.type === 3 && t.isComment ? a3(t) : s3(t);
}
function s3(t) {
  return "_v(".concat(t.type === 2 ? t.expression : qy(JSON.stringify(t.text)), ")");
}
function a3(t) {
  return "_e(".concat(JSON.stringify(t.text), ")");
}
function c3(t, e) {
  var n = t.slotName || '"default"', r = _r(t, e), o = "_t(".concat(n).concat(r ? ",function(){return ".concat(r, "}") : ""), i = t.attrs || t.dynamicAttrs ? Mi((t.attrs || []).concat(t.dynamicAttrs || []).map(function(a) {
    return {
      // slot props are camelized
      name: Je(a.name),
      value: a.value,
      dynamic: a.dynamic
    };
  })) : null, s = t.attrsMap["v-bind"];
  return (i || s) && !r && (o += ",null"), i && (o += ",".concat(i)), s && (o += "".concat(i ? "" : ",null", ",").concat(s)), o + ")";
}
function u3(t, e, n) {
  var r = e.inlineTemplate ? null : _r(e, n, !0);
  return "_c(".concat(t, ",").concat(My(e, n)).concat(r ? ",".concat(r) : "", ")");
}
function Mi(t) {
  for (var e = "", n = "", r = 0; r < t.length; r++) {
    var o = t[r], i = qy(o.value);
    o.dynamic ? n += "".concat(o.name, ",").concat(i, ",") : e += '"'.concat(o.name, '":').concat(i, ",");
  }
  return e = "{".concat(e.slice(0, -1), "}"), n ? "_d(".concat(e, ",[").concat(n.slice(0, -1), "])") : e;
}
function qy(t) {
  return t.replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029");
}
new RegExp("\\b" + "do,if,for,let,new,try,var,case,else,with,await,break,catch,class,const,super,throw,while,yield,delete,export,import,return,switch,default,extends,finally,continue,debugger,function,arguments".split(",").join("\\b|\\b") + "\\b");
new RegExp("\\b" + "delete,typeof,void".split(",").join("\\s*\\([^\\)]*\\)|\\b") + "\\s*\\([^\\)]*\\)");
function Um(t, e) {
  try {
    return new Function(t);
  } catch (n) {
    return e.push({ err: n, code: t }), ge;
  }
}
function l3(t) {
  var e = /* @__PURE__ */ Object.create(null);
  return function(r, o, i) {
    o = X({}, o), o.warn, delete o.warn;
    var s = o.delimiters ? String(o.delimiters) + r : r;
    if (e[s])
      return e[s];
    var a = t(r, o), c = {}, u = [];
    return c.render = Um(a.render, u), c.staticRenderFns = a.staticRenderFns.map(function(l) {
      return Um(l, u);
    }), e[s] = c;
  };
}
function f3(t) {
  return function(n) {
    function r(o, i) {
      var s = Object.create(n), a = [], c = [], u = function(d, h, w) {
        (w ? c : a).push(d);
      };
      if (i) {
        i.modules && (s.modules = (n.modules || []).concat(i.modules)), i.directives && (s.directives = X(Object.create(n.directives || null), i.directives));
        for (var l in i)
          l !== "modules" && l !== "directives" && (s[l] = i[l]);
      }
      s.warn = u;
      var f = t(o.trim(), s);
      return f.errors = a, f.tips = c, f;
    }
    return {
      compile: r,
      compileToFunctions: l3(r)
    };
  };
}
var d3 = f3(function(e, n) {
  var r = fP(e.trim(), n);
  n.optimize !== !1 && jP(r, n);
  var o = Dy(r, n);
  return {
    ast: r,
    render: o.render,
    staticRenderFns: o.staticRenderFns
  };
}), h3 = d3(LP), jy = h3.compileToFunctions, _i;
function By(t) {
  return _i = _i || document.createElement("div"), _i.innerHTML = t ? `<a href="
"/>` : `<div a="
"/>`, _i.innerHTML.indexOf("&#10;") > 0;
}
var p3 = Me ? By(!1) : !1, v3 = Me ? By(!0) : !1, g3 = bt(function(t) {
  var e = Vf(t);
  return e && e.innerHTML;
}), m3 = se.prototype.$mount;
se.prototype.$mount = function(t, e) {
  if (t = t && Vf(t), t === document.body || t === document.documentElement)
    return this;
  var n = this.$options;
  if (!n.render) {
    var r = n.template;
    if (r)
      if (typeof r == "string")
        r.charAt(0) === "#" && (r = g3(r));
      else if (r.nodeType)
        r = r.innerHTML;
      else
        return this;
    else
      t && (r = _3(t));
    if (r) {
      var o = jy(r, {
        outputSourceRange: !1,
        shouldDecodeNewlines: p3,
        shouldDecodeNewlinesForHref: v3,
        delimiters: n.delimiters,
        comments: n.comments
      }, this), i = o.render, s = o.staticRenderFns;
      n.render = i, n.staticRenderFns = s;
    }
  }
  return m3.call(this, t, e);
};
function _3(t) {
  if (t.outerHTML)
    return t.outerHTML;
  var e = document.createElement("div");
  return e.appendChild(t.cloneNode(!0)), e.innerHTML;
}
se.compile = jy;
/**
 * vuex v3.1.1
 * (c) 2019 Evan You
 * @license MIT
 */
function b3(t) {
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
var y3 = typeof window < "u" ? window : typeof global < "u" ? global : {}, Yr = y3.__VUE_DEVTOOLS_GLOBAL_HOOK__;
function w3(t) {
  Yr && (t._devtoolHook = Yr, Yr.emit("vuex:init", t), Yr.on("vuex:travel-to-state", function(e) {
    t.replaceState(e);
  }), t.subscribe(function(e, n) {
    Yr.emit("vuex:mutation", e, n);
  }));
}
function Or(t, e) {
  Object.keys(t).forEach(function(n) {
    return e(t[n], n);
  });
}
function k3(t) {
  return t !== null && typeof t == "object";
}
function S3(t) {
  return t && typeof t.then == "function";
}
function x3(t, e) {
  return function() {
    return t(e);
  };
}
var Dt = function(e, n) {
  this.runtime = n, this._children = /* @__PURE__ */ Object.create(null), this._rawModule = e;
  var r = e.state;
  this.state = (typeof r == "function" ? r() : r) || {};
}, zy = { namespaced: { configurable: !0 } };
zy.namespaced.get = function() {
  return !!this._rawModule.namespaced;
};
Dt.prototype.addChild = function(e, n) {
  this._children[e] = n;
};
Dt.prototype.removeChild = function(e) {
  delete this._children[e];
};
Dt.prototype.getChild = function(e) {
  return this._children[e];
};
Dt.prototype.update = function(e) {
  this._rawModule.namespaced = e.namespaced, e.actions && (this._rawModule.actions = e.actions), e.mutations && (this._rawModule.mutations = e.mutations), e.getters && (this._rawModule.getters = e.getters);
};
Dt.prototype.forEachChild = function(e) {
  Or(this._children, e);
};
Dt.prototype.forEachGetter = function(e) {
  this._rawModule.getters && Or(this._rawModule.getters, e);
};
Dt.prototype.forEachAction = function(e) {
  this._rawModule.actions && Or(this._rawModule.actions, e);
};
Dt.prototype.forEachMutation = function(e) {
  this._rawModule.mutations && Or(this._rawModule.mutations, e);
};
Object.defineProperties(Dt.prototype, zy);
var Dr = function(e) {
  this.register([], e, !1);
};
Dr.prototype.get = function(e) {
  return e.reduce(function(n, r) {
    return n.getChild(r);
  }, this.root);
};
Dr.prototype.getNamespace = function(e) {
  var n = this.root;
  return e.reduce(function(r, o) {
    return n = n.getChild(o), r + (n.namespaced ? o + "/" : "");
  }, "");
};
Dr.prototype.update = function(e) {
  Hy([], this.root, e);
};
Dr.prototype.register = function(e, n, r) {
  var o = this;
  r === void 0 && (r = !0);
  var i = new Dt(n, r);
  if (e.length === 0)
    this.root = i;
  else {
    var s = this.get(e.slice(0, -1));
    s.addChild(e[e.length - 1], i);
  }
  n.modules && Or(n.modules, function(a, c) {
    o.register(e.concat(c), a, r);
  });
};
Dr.prototype.unregister = function(e) {
  var n = this.get(e.slice(0, -1)), r = e[e.length - 1];
  n.getChild(r).runtime && n.removeChild(r);
};
function Hy(t, e, n) {
  if (e.update(n), n.modules)
    for (var r in n.modules) {
      if (!e.getChild(r))
        return;
      Hy(
        t.concat(r),
        e.getChild(r),
        n.modules[r]
      );
    }
}
var He, dt = function(e) {
  var n = this;
  e === void 0 && (e = {}), !He && typeof window < "u" && window.Vue && Gy(window.Vue);
  var r = e.plugins;
  r === void 0 && (r = []);
  var o = e.strict;
  o === void 0 && (o = !1), this._committing = !1, this._actions = /* @__PURE__ */ Object.create(null), this._actionSubscribers = [], this._mutations = /* @__PURE__ */ Object.create(null), this._wrappedGetters = /* @__PURE__ */ Object.create(null), this._modules = new Dr(e), this._modulesNamespaceMap = /* @__PURE__ */ Object.create(null), this._subscribers = [], this._watcherVM = new He();
  var i = this, s = this, a = s.dispatch, c = s.commit;
  this.dispatch = function(d, h) {
    return a.call(i, d, h);
  }, this.commit = function(d, h, w) {
    return c.call(i, d, h, w);
  }, this.strict = o;
  var u = this._modules.root.state;
  Ds(this, u, [], this._modules.root), ed(this, u), r.forEach(function(f) {
    return f(n);
  });
  var l = e.devtools !== void 0 ? e.devtools : He.config.devtools;
  l && w3(this);
}, Qf = { state: { configurable: !0 } };
Qf.state.get = function() {
  return this._vm._data.$$state;
};
Qf.state.set = function(t) {
};
dt.prototype.commit = function(e, n, r) {
  var o = this, i = os(e, n, r), s = i.type, a = i.payload, c = { type: s, payload: a }, u = this._mutations[s];
  u && (this._withCommit(function() {
    u.forEach(function(f) {
      f(a);
    });
  }), this._subscribers.forEach(function(l) {
    return l(c, o.state);
  }));
};
dt.prototype.dispatch = function(e, n) {
  var r = this, o = os(e, n), i = o.type, s = o.payload, a = { type: i, payload: s }, c = this._actions[i];
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
dt.prototype.subscribe = function(e) {
  return Vy(e, this._subscribers);
};
dt.prototype.subscribeAction = function(e) {
  var n = typeof e == "function" ? { before: e } : e;
  return Vy(n, this._actionSubscribers);
};
dt.prototype.watch = function(e, n, r) {
  var o = this;
  return this._watcherVM.$watch(function() {
    return e(o.state, o.getters);
  }, n, r);
};
dt.prototype.replaceState = function(e) {
  var n = this;
  this._withCommit(function() {
    n._vm._data.$$state = e;
  });
};
dt.prototype.registerModule = function(e, n, r) {
  r === void 0 && (r = {}), typeof e == "string" && (e = [e]), this._modules.register(e, n), Ds(this, this.state, e, this._modules.get(e), r.preserveState), ed(this, this.state);
};
dt.prototype.unregisterModule = function(e) {
  var n = this;
  typeof e == "string" && (e = [e]), this._modules.unregister(e), this._withCommit(function() {
    var r = td(n.state, e.slice(0, -1));
    He.delete(r, e[e.length - 1]);
  }), Uy(this);
};
dt.prototype.hotUpdate = function(e) {
  this._modules.update(e), Uy(this, !0);
};
dt.prototype._withCommit = function(e) {
  var n = this._committing;
  this._committing = !0, e(), this._committing = n;
};
Object.defineProperties(dt.prototype, Qf);
function Vy(t, e) {
  return e.indexOf(t) < 0 && e.push(t), function() {
    var n = e.indexOf(t);
    n > -1 && e.splice(n, 1);
  };
}
function Uy(t, e) {
  t._actions = /* @__PURE__ */ Object.create(null), t._mutations = /* @__PURE__ */ Object.create(null), t._wrappedGetters = /* @__PURE__ */ Object.create(null), t._modulesNamespaceMap = /* @__PURE__ */ Object.create(null);
  var n = t.state;
  Ds(t, n, [], t._modules.root, !0), ed(t, n, e);
}
function ed(t, e, n) {
  var r = t._vm;
  t.getters = {};
  var o = t._wrappedGetters, i = {};
  Or(o, function(a, c) {
    i[c] = x3(a, t), Object.defineProperty(t.getters, c, {
      get: function() {
        return t._vm[c];
      },
      enumerable: !0
      // for local getters
    });
  });
  var s = He.config.silent;
  He.config.silent = !0, t._vm = new He({
    data: {
      $$state: e
    },
    computed: i
  }), He.config.silent = s, t.strict && A3(t), r && (n && t._withCommit(function() {
    r._data.$$state = null;
  }), He.nextTick(function() {
    return r.$destroy();
  }));
}
function Ds(t, e, n, r, o) {
  var i = !n.length, s = t._modules.getNamespace(n);
  if (r.namespaced && (t._modulesNamespaceMap[s] = r), !i && !o) {
    var a = td(e, n.slice(0, -1)), c = n[n.length - 1];
    t._withCommit(function() {
      He.set(a, c, r.state);
    });
  }
  var u = r.context = E3(t, s, n);
  r.forEachMutation(function(l, f) {
    var d = s + f;
    C3(t, d, l, u);
  }), r.forEachAction(function(l, f) {
    var d = l.root ? f : s + f, h = l.handler || l;
    I3(t, d, h, u);
  }), r.forEachGetter(function(l, f) {
    var d = s + f;
    T3(t, d, l, u);
  }), r.forEachChild(function(l, f) {
    Ds(t, e, n.concat(f), l, o);
  });
}
function E3(t, e, n) {
  var r = e === "", o = {
    dispatch: r ? t.dispatch : function(i, s, a) {
      var c = os(i, s, a), u = c.payload, l = c.options, f = c.type;
      return (!l || !l.root) && (f = e + f), t.dispatch(f, u);
    },
    commit: r ? t.commit : function(i, s, a) {
      var c = os(i, s, a), u = c.payload, l = c.options, f = c.type;
      (!l || !l.root) && (f = e + f), t.commit(f, u, l);
    }
  };
  return Object.defineProperties(o, {
    getters: {
      get: r ? function() {
        return t.getters;
      } : function() {
        return $3(t, e);
      }
    },
    state: {
      get: function() {
        return td(t.state, n);
      }
    }
  }), o;
}
function $3(t, e) {
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
function C3(t, e, n, r) {
  var o = t._mutations[e] || (t._mutations[e] = []);
  o.push(function(s) {
    n.call(t, r.state, s);
  });
}
function I3(t, e, n, r) {
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
    return S3(c) || (c = Promise.resolve(c)), t._devtoolHook ? c.catch(function(u) {
      throw t._devtoolHook.emit("vuex:error", u), u;
    }) : c;
  });
}
function T3(t, e, n, r) {
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
function A3(t) {
  t._vm.$watch(function() {
    return this._data.$$state;
  }, function() {
  }, { deep: !0, sync: !0 });
}
function td(t, e) {
  return e.length ? e.reduce(function(n, r) {
    return n[r];
  }, t) : t;
}
function os(t, e, n) {
  return k3(t) && t.type && (n = e, e = t, t = t.type), { type: t, payload: e, options: n };
}
function Gy(t) {
  He && t === He || (He = t, b3(He));
}
var Wy = Fs(function(t, e) {
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
}), Ky = Fs(function(t, e) {
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
}), yt = Fs(function(t, e) {
  var n = {};
  return Ps(e).forEach(function(r) {
    var o = r.key, i = r.val;
    i = t + i, n[o] = function() {
      if (!(t && !Rs(this.$store, "mapGetters", t)))
        return this.$store.getters[i];
    }, n[o].vuex = !0;
  }), n;
}), Yt = Fs(function(t, e) {
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
}), O3 = function(t) {
  return {
    mapState: Wy.bind(null, t),
    mapGetters: yt.bind(null, t),
    mapMutations: Ky.bind(null, t),
    mapActions: Yt.bind(null, t)
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
var Zy = {
  Store: dt,
  install: Gy,
  version: "3.1.1",
  mapState: Wy,
  mapMutations: Ky,
  mapGetters: yt,
  mapActions: Yt,
  createNamespacedHelpers: O3
}, D3 = 4, P3 = 1e-3, F3 = 1e-7, R3 = 10, eo = 11, bi = 1 / (eo - 1), N3 = typeof Float32Array == "function";
function Jy(t, e) {
  return 1 - 3 * e + 3 * t;
}
function Yy(t, e) {
  return 3 * e - 6 * t;
}
function Xy(t) {
  return 3 * t;
}
function is(t, e, n) {
  return ((Jy(e, n) * t + Yy(e, n)) * t + Xy(e)) * t;
}
function Qy(t, e, n) {
  return 3 * Jy(e, n) * t * t + 2 * Yy(e, n) * t + Xy(e);
}
function M3(t, e, n, r, o) {
  var i, s, a = 0;
  do
    s = e + (n - e) / 2, i = is(s, r, o) - t, i > 0 ? n = s : e = s;
  while (Math.abs(i) > F3 && ++a < R3);
  return s;
}
function L3(t, e, n, r) {
  for (var o = 0; o < D3; ++o) {
    var i = Qy(e, n, r);
    if (i === 0)
      return e;
    var s = is(e, n, r) - t;
    e -= s / i;
  }
  return e;
}
function q3(t, e, n, r) {
  if (!(0 <= t && t <= 1 && 0 <= n && n <= 1))
    throw new Error("bezier x values must be in [0, 1] range");
  var o = N3 ? new Float32Array(eo) : new Array(eo);
  if (t !== e || n !== r)
    for (var i = 0; i < eo; ++i)
      o[i] = is(i * bi, t, n);
  function s(a) {
    for (var c = 0, u = 1, l = eo - 1; u !== l && o[u] <= a; ++u)
      c += bi;
    --u;
    var f = (a - o[u]) / (o[u + 1] - o[u]), d = c + f * bi, h = Qy(d, t, n);
    return h >= P3 ? L3(a, d, t, n) : h === 0 ? d : M3(a, c, c + bi, t, n);
  }
  return function(c) {
    return t === e && n === r ? c : c === 0 ? 0 : c === 1 ? 1 : is(s(c), e, r);
  };
}
function ye(t, e, n, r, o, i, s, a) {
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
      c.render = function(h, w) {
        return u.call(w), l(h, w);
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
const j3 = {
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
      const i = this, s = q3(0.61, 0.29, 0.3, 0.97);
      window.requestAnimationFrame(function a(c) {
        o || (o = c);
        var u = c - o, l = Math.min(u / e, 1);
        i.$refs.asv.scrollTop = n + r * s(l), u < e && window.requestAnimationFrame(a);
      });
    }
  }
};
var B3 = function() {
  var e = this, n = e._self._c;
  return n("div", { ref: "asv", class: ["awesome-scroll-view", "scrollbar", { isHidden: e.isHidden }], on: { scroll: e.onScroll } }, [e._t("default")], 2);
}, z3 = [], H3 = /* @__PURE__ */ ye(
  j3,
  B3,
  z3,
  !1,
  null,
  "020b3906",
  null,
  null
);
const ew = H3.exports, $l = "SCROLL_VIEW", Cl = "SCROLL_VIEW_VOL", tw = "BOOK_VIEW", Il = "THUMB_VIEW", nw = "READER_VIEW", rw = "TOP_BAR", Tl = "MODE_FAST", V3 = "MODE_ORIGIN", U3 = "MODE_CHANGE_SOURCE", ow = "ERROR_NO_ORIGIN", iw = "ID_START", sw = "ID_END", aw = "TYPE_NORMAL", cw = "TYPE_START", uw = "TYPE_END", Ns = "LANG_EN", Ms = "LANG_CN", Ls = "LANG_JP", Al = "STATE_WAITING", to = "STATE_LOADING", Ol = "STATE_ERROR", Dl = "STATE_LOADED", ss = "DIALOG_NORMAL", Cn = "DIALOG_COMPULSIVE", Mt = "DIALOG_OPERATION_PLAIN", lw = "DIALOG_OPERATION_TYPE_NEGATIVE", fw = "DIALOG_OPERATION_TYPE_POSITIVE", dw = "DIALOG_OPERATION_TYPE_WARNING", G3 = "TYPE_PROXY", Pl = "KEYBOARD", hw = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  BOOK_VIEW: tw,
  DIALOG_COMPULSIVE: Cn,
  DIALOG_NORMAL: ss,
  DIALOG_OPERATION_TYPE_NEGATIVE: lw,
  DIALOG_OPERATION_TYPE_PLAIN: Mt,
  DIALOG_OPERATION_TYPE_POSITIVE: fw,
  DIALOG_OPERATION_TYPE_WARNING: dw,
  ERROR_NO_ORIGIN: ow,
  ID_END: sw,
  ID_START: iw,
  KEYBOARD: Pl,
  LANG_CN: Ms,
  LANG_EN: Ns,
  LANG_JP: Ls,
  MODE_CHANGE_SOURCE: U3,
  MODE_FAST: Tl,
  MODE_ORIGIN: V3,
  READER_VIEW: nw,
  SCROLL_VIEW: $l,
  SCROLL_VIEW_VOL: Cl,
  STATE_ERROR: Ol,
  STATE_LOADED: Dl,
  STATE_LOADING: to,
  STATE_WAITING: Al,
  THUMB_VIEW: Il,
  TOP_BAR: rw,
  TYPE_END: uw,
  TYPE_NORMAL: aw,
  TYPE_PROXY: G3,
  TYPE_START: cw
}, Symbol.toStringTag, { value: "Module" }));
const W3 = {
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
    AwesomeScrollView: ew
  },
  computed: {
    ...yt({
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
        if (this.curIndex.updater !== Il)
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
    ...Yt(["setIndex"]),
    select(t) {
      this.setIndex({ val: t, updater: Il });
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
var K3 = function() {
  var e = this, n = e._self._c;
  return n("aside", { staticClass: "thumb-content" }, [n("awesome-scroll-view", { ref: "scrollView", staticClass: "thumb-scroll-view" }, [n("div", { staticClass: "header" }, [n("span", { staticClass: "app-name" }, [e._v("EHUNTER")])]), n("div", { staticClass: "indicator", style: { top: e.px(160 * (e.curIndex.val - e.volFirstIndex)) } }), e._l(e.volThumbs, function(r, o) {
    return n("div", { key: r.id, ref: "thumbContainers", refInFor: !0, staticClass: "thumb-container", on: { click: function(i) {
      e.select(e.index(o));
    } } }, [e.readingMode === 0 && e.showThumbView || e.readingMode === 1 && e.showThumbViewInBook ? [r.mode === 0 ? n("div", { staticClass: "thumb spirit-mode", style: { background: `transparent url(${r.src}) -${r.offset}px 0 no-repeat` } }) : e._e(), r.mode === 1 ? n("div", { staticClass: "thumb img-mode", style: { background: `transparent url(${r.src}) no-repeat`, "background-size": "contain" } }) : e._e()] : e._e(), n("div", { staticClass: "hover-mask" }), n("div", { staticClass: "index" }, [e._v(e._s(e.index(o) + 1))])], 2);
  })], 2)], 1);
}, Z3 = [], J3 = /* @__PURE__ */ ye(
  W3,
  K3,
  Z3,
  !1,
  null,
  "e7ef3538",
  null,
  null
);
const Y3 = J3.exports;
const X3 = {
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
var Q3 = function() {
  var e = this, n = e._self._c;
  return n("transition", { attrs: { name: "slide-fade" } }, [e.active ? n("div", { staticClass: "popover", style: e.customStyle, on: { click: function(r) {
    return e.handleClick(r);
  } } }, [e._t("default")], 2) : e._e()]);
}, eF = [], tF = /* @__PURE__ */ ye(
  X3,
  Q3,
  eF,
  !1,
  null,
  "59db7328",
  null,
  null
);
const pw = tF.exports;
const nF = {
  name: "DropOption",
  props: ["list", "change", "curVal"],
  data() {
    return {
      active: !1
    };
  },
  components: { Popover: pw },
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
var rF = function() {
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
}, oF = [], iF = /* @__PURE__ */ ye(
  nF,
  rF,
  oF,
  !1,
  null,
  "cd2de473",
  null,
  null
);
const sF = iF.exports;
const aF = {
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
var cF = function() {
  var e = this, n = e._self._c;
  return n("div", { ref: "slider", staticClass: "slider", on: { mousedown: e.handleMouseDown, click: e.handleClick } }, [n("div", { staticClass: "track" }), n("div", { staticClass: "fill", style: { width: e.fillScale + "%" } }), n("div", { staticClass: "thumb", style: { left: e.fillScale + "%", width: e.isHolding ? "15px" : void 0, height: e.isHolding ? "15px" : void 0 } })]);
}, uF = [], lF = /* @__PURE__ */ ye(
  aF,
  cF,
  uF,
  !1,
  null,
  "b19d08a7",
  null,
  null
);
const fF = lF.exports;
const dF = {
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
var hF = function() {
  var e = this, n = e._self._c;
  return n("div", { class: ["flat-button", e.mode] }, [n("a", { class: [e.mode, e.type], on: { click: e.handleClick } }, [e._v(e._s(e.label))])]);
}, pF = [], vF = /* @__PURE__ */ ye(
  dF,
  hF,
  pF,
  !1,
  null,
  "49f3eea6",
  null,
  null
);
const nd = vF.exports;
class In {
  constructor(e, n, r, ...o) {
    this.id = (/* @__PURE__ */ new Date()).getTime(), this.type = e, this.title = n, this.text = r, this.operations = o;
  }
}
class xn {
  constructor(e, n, r) {
    this.name = e, this.type = n, this.onClick = r;
  }
}
const gF = {
  name: "PopSlider",
  props: ["active", "min", "max", "step", "init", "isFloat", "close"],
  components: { Popover: pw, Slider: fF, FlatButton: nd },
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
    ...yt(["string"])
  },
  methods: {
    ...Yt([
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
        let t = new In(
          Cn,
          this.string.tips,
          this.string.numberInputTip.replace("{{min}}", this.min).replace("{{max}}", this.max),
          new xn(this.string.confirm, Mt, () => !0)
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
var mF = function() {
  var e = this, n = e._self._c;
  return n("popover", { staticClass: "PopSlider", attrs: { active: e.active, close: e.close } }, [n("div", { staticClass: "content", on: { keydown: e.stopArrowEvent } }, [n("input", { directives: [{ name: "model", rawName: "v-model", value: e.value, expression: "value" }], ref: "inputElem", staticClass: "value", attrs: { type: "number" }, domProps: { value: e.value }, on: { keydown: e.watchKeyboard, input: function(r) {
    r.target.composing || (e.value = r.target.value);
  } } }), n("slider", { staticClass: "slider", attrs: { min: e.min, max: e.max, step: e.step, init: e.init }, on: { change: e.change } }), n("flat-button", { staticClass: "button", attrs: { label: e.string.confirm, type: "positive" }, on: { click: e.handleClick } })], 1)]);
}, _F = [], bF = /* @__PURE__ */ ye(
  gF,
  mF,
  _F,
  !1,
  null,
  "0feb601e",
  null,
  null
);
const yF = bF.exports;
const wF = {
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
var kF = function() {
  var e = this, n = e._self._c;
  return n("div", { staticClass: "switch", on: { click: e.handleClick } }, [n("div", { class: { track: !0, active: e.active } }), n("div", { class: { thumb: !0, active: e.active } })]);
}, SF = [], xF = /* @__PURE__ */ ye(
  wF,
  kF,
  SF,
  !1,
  null,
  "18b37812",
  null,
  null
);
const EF = xF.exports;
const $F = {
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
var CF = function() {
  var e = this, n = e._self._c;
  return n("div", { staticClass: "circle-icon-button", on: { click: e.handleClick } }, [n("svg", { class: { rotate: e.rotate }, attrs: { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" } }, [e.icon === "menu" ? [n("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } }), n("path", { attrs: { d: "M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" } })] : e._e(), e.icon === "close" ? [n("path", { attrs: { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" } }), n("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } })] : e._e(), e.icon === "expand" ? [n("path", { attrs: { fill: "none", d: "M0 0h24v24H0V0z" } }), n("path", { attrs: { d: "M12 5.83L15.17 9l1.41-1.41L12 3 7.41 7.59 8.83 9 12 5.83zm0 12.34L8.83 15l-1.41 1.41L12 21l4.59-4.59L15.17 15 12 18.17z" } })] : e._e()], 2)]);
}, IF = [], TF = /* @__PURE__ */ ye(
  $F,
  CF,
  IF,
  !1,
  null,
  "115df32b",
  null,
  null
);
const AF = TF.exports;
class Gm {
  constructor(e) {
    this.name = "NotFoundError", this.message = `Not Found! Params: ${e}`, this.stack = new Error().stack;
  }
}
class Wm {
  constructor(e) {
    this.name = "ExpiredError", this.message = `Expired! Params: ${e}`, this.stack = new Error().stack;
  }
}
class OF {
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
      return o && this.sync[n] ? new Promise((c, u) => this.sync[n]({ resolve: c, reject: u, syncParams: s })) : Promise.reject(new Gm(JSON.stringify(e)));
    typeof r == "string" && (r = JSON.parse(r), this.enableCache && (this.cache[n] = r));
    let a = (/* @__PURE__ */ new Date()).getTime();
    return r.expires < a ? o && this.sync[n] ? i ? (this.sync[n]({ syncParams: s }), Promise.resolve(r.rawData)) : new Promise((c, u) => this.sync[n]({ resolve: c, reject: u, syncParams: s })) : Promise.reject(new Wm(JSON.stringify(e))) : Promise.resolve(r.rawData);
  }
  _noItemFound(e) {
    let { key: n, id: r, autoSync: o, syncParams: i } = e;
    return this.sync[n] ? o ? new Promise((s, a) => this.sync[n]({ id: r, syncParams: i, resolve: s, reject: a })) : Promise.resolve({ syncId: r }) : Promise.reject(new Gm(JSON.stringify(e)));
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
    return n.expires < u ? i && this.sync[r] ? a ? (this.sync[r]({ id: o, syncParams: c }), Promise.resolve(n.rawData)) : new Promise((l, f) => this.sync[r]({ id: o, resolve: l, reject: f, syncParams: c })) : s ? Promise.resolve({ syncId: o }) : Promise.reject(new Wm(JSON.stringify(e))) : Promise.resolve(n.rawData);
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
class DF {
  logText(e, n) {
    console.log(`%c[${e}] %c${n}`, "color:red", "color:black");
  }
  logObj(e, n, r = !1) {
    this.logText(e, ":"), console.log(r ? JSON.parse(JSON.stringify(n)) : n), this.logText(e, "----------");
  }
}
let jt = new DF();
function PF(t) {
  return {
    async getItem(e) {
      return new Promise((n, r) => {
        jt.logText("Storage", `get ${e}`), t.get(e, (o) => {
          typeof o[e] < "u" ? n(o[e]) : (jt.logText("Storage", `This key--${e} doesn't exist`), n(null));
        });
      });
    },
    async setItem(e, n) {
      return new Promise((r, o) => {
        e ? t.set({
          [e]: n
        }, () => {
          jt.logText("Storage", `chrome saved ${e}`), r();
        }) : jt.logText("Storage", `ERROR: setItem, key is null, ${n}`);
      });
    },
    async removeItem(e) {
      return new Promise((n, r) => {
        t.remove(e, () => {
          jt.logText("Storage", `chrome removed ${e}`), n();
        });
      });
    }
  };
}
class FF extends OF {
  constructor(e = {}) {
    e.storageBackend.constructor.name === "StorageArea" && (e.storageBackend = PF(e.storageBackend)), super(e);
  }
}
if (typeof En > "u")
  var En = { extension: null };
const vw = {
  storage: {
    get sync() {
      return En && En.storage ? En.storage.sync.QUOTA_BYTES ? En.storage.sync : En.storage.local : window.localStorage;
    },
    local: window.localStorage
  },
  getExtension() {
    return En.extension;
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
let xt = new FF({
  size: 10,
  storageBackend: vw.storage.local,
  defaultExpires: null,
  enableCache: !0,
  sync: {}
});
const yi = {
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
  cn: "\n1.Change language/切换语言/言語を変更\n![image-language](https://raw.githubusercontent.com/hanFengSan/eHunter/master/github_image/language.jpg)\n\n1.显示/隐藏顶栏和关闭eHunter\n![image-topbar_close](https://raw.githubusercontent.com/hanFengSan/eHunter/master/github_image/topbar_close.jpg)\n\n2.在页面右上角点击打开eHunter\n![image-open_ehunter](https://raw.githubusercontent.com/hanFengSan/eHunter/master/github_image/open_ehunter.jpg)\n\n3.`滚动`模式下, 支持`A`. `D`, `Left(左)`和`Right(右)`键翻页. \n\n4.`书页`模式下, 支持`A`. `D`, `Left(左)`, `Right(右)`和`Space(空格)`键翻页. 你也可以用鼠标滚轮翻页.\n\n5.`分卷页数`对性能要求较高,请不要设置过高,可能会导致卡顿.\n",
  en: "\n1.Change language/切换语言/言語を変更\n![image-language](https://raw.githubusercontent.com/hanFengSan/eHunter/master/github_image/language.jpg)\n\n1.Show/hide top bar and close the eHunter\n![image-topbar_close](https://raw.githubusercontent.com/hanFengSan/eHunter/master/github_image/topbar_close.jpg)\n\n2.Click the button at the upper right corner of this page to open the eHunter\n![image-open_ehunter](https://raw.githubusercontent.com/hanFengSan/eHunter/master/github_image/open_ehunter.jpg)\n\n3.When the `Mode` is `Scroll`, you can use the keyboard's `A`, `D`, `Left` and `Right` keys to page.\n\n4.When the `Mode` is `Book`, you can use the keyboard's `A`, `D`, `Left`, `Right` and `Space` keys to page. You also can use mouse wheel to page.\n\n5.This is a high performance requirements on `Volume size`. If too big, the program will be slow.\n",
  jp: "\n1.Change language/切换语言/言語を変更\n![image-language](https://raw.githubusercontent.com/hanFengSan/eHunter/master/github_image/language.jpg)\n\n1.トップバーを表示/非表示にしてeHunterを閉じる\n![image-topbar_close](https://raw.githubusercontent.com/hanFengSan/eHunter/master/github_image/topbar_close.jpg)\n\n2.このページの右上隅にあるボタンをクリックしてeHunterを開きます\n![image-open_ehunter](https://raw.githubusercontent.com/hanFengSan/eHunter/master/github_image/open_ehunter.jpg)\n\n3.When the `Mode` is `Scroll`, you can use the keyboard's `A`, `D`, `Left` and `Right` keys to page.\n\n4.When the `Mode` is `Book`, you can use the keyboard's `A`, `D`, `Left`, `Right` and `Space` keys to page. マウスホイールを使用してページを移動することもできます。\n\n5.これは`ボリュームサイズ`の高性能要件です。 大きすぎるとプログラムが遅くなります。\n"
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
class RF {
  constructor() {
    this.cn = {}, this.en = {}, this.jp = {}, this.initString();
  }
  initString() {
    for (let e in yi)
      this.cn[e] = yi[e].cn, this.en[e] = yi[e].en, this.jp[e] = yi[e].jp;
    this.cn.p_instruction = tu.cn, this.en.p_instruction = tu.en, this.jp.p_instruction = tu.jp, this.cn.p_bookInstruction = nu.cn, this.en.p_bookInstruction = nu.en, this.jp.p_bookInstruction = nu.jp, this.cn.p_version = ru.cn, this.en.p_version = ru.en, this.jp.p_version = ru.jp;
  }
}
let Li = new RF();
const gw = "SET_INDEX", mw = "SET_ALBUM_WIDTH", _w = "TOGGLE_THUMB_VIEW", bw = "TOGGLE_SYNC_SCROLL", yw = "TOGGLE_SHOW_TOP_BAR", ww = "SET_LOAD_NUM", kw = "SET_VOLUME_SIZE", Sw = "SET_BOOK_INDEX", xw = "SET_READING_MODE", Ew = "SET_BOOK_SCREEN_ANIMATION", $w = "SET_BOOK_PAGINATION", Cw = "SET_BOOK_DIRECTION", Iw = "SET_BOOK_SCREEN_SIZE", Tw = "TOGGLE_MORE_SETTINGS", Aw = "SET_REVERSE_FLIP", Ow = "SET_AUTO_FLIP", Dw = "SET_AUTO_FLIP_FREQUENCY", Pw = "TOGGLE_THUMB_VIEW_IN_BOOK", Fw = "SET_WHEEL_SENSITIVITY", Rw = "SET_WHEEL_DIRECTION", Nw = "SET_SCROLLED_PAGE_MARGIN", Mw = "SET_ODD_EVEN", Lw = "SET_STRING", qw = "ADD_DIALOG", jw = "REMOVE_DIALOG", NF = {
  string: Li.en
}, MF = {
  string: (t) => t.string
}, LF = {
  setString({ commit: t }, e) {
    t(Lw, { langCode: e });
  }
}, qF = {
  [Lw](t, { langCode: e }) {
    switch (e) {
      case Ms:
        t.string = Li.cn;
        break;
      case Ns:
        t.string = Li.en;
        break;
      case Ls:
        t.string = Li.jp;
        break;
    }
  }
}, jF = {
  state: NF,
  getters: MF,
  actions: LF,
  mutations: qF
}, BF = {
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
}, Bw = {
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
  volFirstIndex: (t) => Bw.curVolume(t) * t.volumeSize,
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
}, zF = {
  setIndex: ({ commit: t }, { val: e, updater: n }) => {
    t(gw, { val: e, updater: n });
  },
  setAlbumWidth: ({ commit: t }, e) => t(mw, { width: e }),
  toggleThumbView: ({ commit: t }, e) => t(_w, { show: e }),
  toggleSyncScroll: ({ commit: t }, e) => t(bw, { isActive: e }),
  toggleTopBar: ({ commit: t }, e) => t(yw, { show: e }),
  setLoadNum: ({ commit: t }, e) => t(ww, { num: e }),
  setVolumeSize: ({ commit: t }, e) => t(kw, { num: e }),
  setBookIndex: ({ commit: t }, e) => t(Sw, { index: e }),
  setReadingMode: ({ commit: t }, e) => t(xw, { mode: e }),
  setBookScreenAnimation: ({ commit: t }, e) => t(Ew, { show: e }),
  setBookPagination: ({ commit: t }, e) => t($w, { show: e }),
  setBookDirection: ({ commit: t }, e) => t(Cw, { mode: e }),
  setBookScreenSize: ({ commit: t }, e) => t(Iw, { num: e }),
  toggleMoreSettings: ({ commit: t }, e) => t(Tw, { show: e }),
  setReverseFlip: ({ commit: t }, e) => t(Aw, { val: e }),
  setAutoFlip: ({ commit: t }, e) => t(Ow, { val: e }),
  setAutoFlipFrequency: ({ commit: t }, e) => t(Dw, { val: e }),
  toggleThumbViewInBook: ({ commit: t }, e) => t(Pw, { val: e }),
  setWheelSensitivity: ({ commit: t }, e) => t(Fw, { val: e }),
  setWheelDirection: ({ commit: t }, e) => t(Rw, { val: e }),
  setScrolledPageMargin: ({ commit: t }, e) => t(Nw, { val: e }),
  setOddEven: ({ commit: t }, e) => t(Mw, { val: e })
}, HF = {
  [gw](t, { val: e, updater: n }) {
    if (t.curIndex.val = e, t.curIndex.updater = n, t.curIndex.val <= t.book.screenSize - 2)
      t.book.bookIndex = 0;
    else {
      let r = t.curIndex.val + 2;
      r % t.book.screenSize === 0 ? t.book.bookIndex = (r - r % t.book.screenSize) / t.book.screenSize - 1 : t.book.bookIndex = (r - r % t.book.screenSize) / t.book.screenSize;
    }
  },
  [mw](t, { width: e }) {
    t.album.width = e;
  },
  [_w](t, { show: e }) {
    t.thumb.thumbView = e;
  },
  [bw](t, { isActive: e }) {
    t.album.toggleSyncScroll = e;
  },
  [yw](t, { show: e }) {
    t.album.showTopBar = e;
  },
  [ww](t, { num: e }) {
    t.album.loadNum = e;
  },
  [kw](t, { num: e }) {
    t.volumeSize = e, t.curIndex.val = 0, t.curIndex.updater = rw;
  },
  [Sw](t, { index: e }) {
    let n = e * t.book.screenSize - 1;
    t.curIndex.val = n < 0 ? 0 : n, t.curIndex.updater = tw;
  },
  [xw](t, { mode: e }) {
    t.readingMode = e;
  },
  [Ew](t, { show: e }) {
    t.book.showBookScreenAnimation = e;
  },
  [$w](t, { show: e }) {
    t.book.showBookPagination = e;
  },
  [Cw](t, { mode: e }) {
    t.book.direction = e;
  },
  [Iw](t, { num: e }) {
    t.book.screenSize = e;
  },
  [Tw](t, { show: e }) {
    t.showMoreSettings = e;
  },
  [Aw](t, { val: e }) {
    t.book.reverseFlip = e;
  },
  [Ow](t, { val: e }) {
    t.book.autoFlip = e;
  },
  [Dw](t, { val: e }) {
    t.book.autoFlipFrequency = e;
  },
  [Pw](t, { val: e }) {
    t.book.showThumbViewInBook = e;
  },
  [Fw](t, { val: e }) {
    t.book.wheelSensitivity = e;
  },
  [Rw](t, { val: e }) {
    t.book.wheelDirection = e;
  },
  [Nw](t, { val: e }) {
    t.album.scrolledPageMargin = e;
  },
  [Mw](t, { val: e }) {
    t.book.oddEven = e;
  }
}, VF = {
  state: BF,
  getters: Bw,
  actions: zF,
  mutations: HF
}, UF = {
  dialogs: []
}, GF = {
  dialogs: (t) => t.dialogs
}, WF = {
  addDialog: ({ commit: t }, e) => t(qw, { dialogBean: e }),
  removeDialog: ({ commit: t }, e) => t(jw, { dialogBean: e })
}, KF = {
  [qw](t, { dialogBean: e }) {
    t.dialogs.push(e);
  },
  [jw](t, { dialogBean: e }) {
    t.dialogs.splice(t.dialogs.indexOf(e), 1);
  }
}, ZF = {
  state: UF,
  getters: GF,
  actions: WF,
  mutations: KF
};
se.use(Zy);
const JF = !1, pe = new Zy.Store({
  modules: {
    String: jF,
    AlbumView: VF,
    Modal: ZF
  },
  strict: JF
});
class YF {
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
    let e = await xt.load({ key: this.storageVersionName });
    if (await xt.save({ key: this.storageVersionName, data: this.version }), e !== this.version) {
      let n = await xt.load({ key: this.storageName }), r = this._getDefaultSettings();
      for (let o in r)
        n.hasOwnProperty(o) || (n[o] = r[o]);
      await xt.save({ key: this.storageName, data: n });
    }
  }
  _initStorage() {
    xt.sync[this.storageName] = (e) => {
      let { resolve: n } = e;
      n && n(this._getDefaultSettings());
    }, xt.sync[this.storageVersionName] = (e) => {
      let { resolve: n } = e;
      if (n)
        return n(this.version);
    };
  }
  async _setSettingItem(e, n) {
    let r = await xt.load({ key: this.storageName });
    r.hasOwnProperty(e) || (r[e] = this._getDefaultSettings()[e]), r[e].val = n, await xt.save({ key: this.storageName, data: r }), r[e].eventName && pe.dispatch(r[e].eventName, n);
  }
  async _getSettingItem(e) {
    let n = await xt.load({ key: this.storageName });
    return n.hasOwnProperty(e) ? n[e].val : this._getDefaultSettings()[e].val;
  }
  async initSettings() {
    let e = await xt.load({ key: this.storageName });
    for (let n in e)
      e[n].eventName && pe.dispatch(e[n].eventName, e[n].val);
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
let J = new YF();
class Km {
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
    }), i = vw.fetch(r, this.fetchSetting ? this.fetchSetting : {
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
class XF {
  constructor(e) {
    let n;
    switch (pe.getters.string.lang) {
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
const QF = {
  replaceKey(t, e) {
    for (let n in e) {
      let r = new RegExp("\\$\\$" + n + "\\$\\$", "g");
      t = t.replace(r, e[n]);
    }
    return t;
  }
};
class eR {
  async showInstruction(e, n) {
    let r = new In(
      n ? Cn : ss,
      pe.getters.string.instructionsAndAbouts,
      QF.replaceKey(pe.getters.string.p_instruction, {
        HOME_PAGE: e.homePage,
        VERSION: e.version
      }),
      new xn(pe.getters.string.confirm, Mt, () => !0)
    );
    pe.dispatch("addDialog", r);
  }
  async showBookInstruction(e) {
    let n = new In(
      e ? Cn : ss,
      pe.getters.string.instructions,
      pe.getters.string.p_bookInstruction,
      new xn(pe.getters.string.confirm, Mt, () => !0)
    );
    pe.dispatch("addDialog", n);
  }
  async checkUpdate(e) {
    let n, r = await J.getUpdateTime();
    Promise.race([
      new Km(e.updateServer1, !0, !1).setCredentials("omit").request(),
      new Km(e.updateServer2, !0, !1).setCredentials("omit").request()
    ]).then((o) => {
      n = new XF(JSON.parse(o));
      let i = n.version !== e.version, s = (/* @__PURE__ */ new Date()).getTime() > n.time, a = (/* @__PURE__ */ new Date()).getTime() - r > n.duration;
      i && s && a && (J.setUpdateTime((/* @__PURE__ */ new Date()).getTime()), this.showUpdateInfo(n));
    }).catch((o) => {
      jt.logObj("InfoService", o);
    });
  }
  showUpdateInfo(e) {
    let n = [];
    n.push(new xn(pe.getters.string.later, Mt, () => !0)), e.operations.forEach((o) => {
      n.push(new xn(o.name, Mt, () => (window.open(o.url, "_blank"), !0)));
    });
    let r = new In(
      Cn,
      e.title,
      e.text,
      ...n
    );
    pe.dispatch("addDialog", r);
  }
  showReloadError(e) {
    let n = new In(
      Cn,
      pe.getters.string.loadingFailed,
      e,
      new xn(pe.getters.string.reload, Mt, () => (window.location.reload(), !0))
    );
    pe.dispatch("addDialog", n);
  }
  // if updated a new version, shows messages
  async checkNewVersion(e) {
    if (await J.getVersion() !== e.version) {
      let n = new In(
        Cn,
        `${pe.getters.string.versionUpdate} v${e.version}`,
        pe.getters.string.p_version,
        new xn(pe.getters.string.confirm, Mt, () => (J.setVersion(e.version), !0))
      );
      pe.dispatch("addDialog", n);
    }
  }
}
let pr = new eR();
const tR = {
  name: "TopBar",
  inject: ["config", "service"],
  components: { DropOption: sF, PopSlider: yF, SimpleSwitch: EF, CircleIconButton: AF },
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
    ...yt([
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
      }, e = ({ title: y, tip: x, show: F, curVal: A, list: T, change: D }) => {
        const H = { title: y, tip: x, show: F, type: "SELECT", list: T, change: D }, L = H.list.find((q) => q.val === A);
        return {
          ...H,
          curValTitle: L.sname || L.name,
          select: (q) => {
            D(H.list[q].val);
          }
        };
      }, n = ({ id: y, title: x, tip: F, show: A, curValTitle: T, list: D, sliderMin: H, sliderMax: L, sliderStep: q, isFloat: b, curVal: _, change: p }) => {
        const P = `show${y}Name`;
        t(P, !1);
        const N = {
          title: x,
          tip: F,
          show: A,
          type: "SLIDER_SELECT",
          curValTitle: T,
          list: D,
          slider: {
            active: this.configurationBoard[P],
            min: H,
            max: L,
            step: q,
            init: _,
            isFloat: b,
            close: () => this.configurationBoard[P] = !1,
            change: p
          }
        };
        return {
          ...N,
          select: (C) => {
            const S = N.list[C].val;
            S == -1 ? this.configurationBoard[P] = !0 : p(S);
          }
        };
      }, r = e({
        title: this.string.readingMode,
        tip: this.string.readingModeTip,
        show: !0,
        curVal: this.readingMode,
        list: [{ name: this.string.scrollMode, val: 0 }, { name: this.string.bookMode, val: 1 }],
        change: (y) => J.setReadingMode(y)
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
        change: (y) => J.setLoadNum(y)
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
        change: (y) => J.setAlbumWidth(y)
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
        change: (y) => J.setVolumeSize(y)
      }), a = {
        title: this.string.thumbView,
        tip: this.string.thumbViewTip,
        show: this.readingMode === 0 && this.service.album.supportThumbView(),
        type: "SWITCH",
        curVal: this.showThumbView,
        change: (y) => J.toggleThumbView(y)
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
        change: (y) => J.setBookScreenSize(y)
      }), u = e({
        title: this.string.bookDirection,
        tip: this.string.bookDirectionTip,
        show: this.readingMode === 1,
        curVal: this.bookDirection,
        list: [{ name: this.string.rtl, sname: "RTL", val: 0 }, { name: this.string.ltr, sname: "LTR", val: 1 }],
        change: (y) => J.setBookDirection(y)
      }), l = {
        title: this.string.pagination,
        tip: this.string.paginationTip,
        show: this.readingMode === 1,
        type: "SWITCH",
        curVal: this.showBookPagination,
        change: (y) => J.setBookPagination(y)
      }, f = {
        title: this.string.reverseFlip,
        tip: this.string.reverseFlipTip,
        show: this.readingMode === 1 && this.showMoreSettings,
        type: "SWITCH",
        curVal: this.reverseFlip,
        change: (y) => J.setReverseFlip(y)
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
        change: (y) => J.setAutoFlipFrequency(y)
      }), w = {
        title: this.string.thumbView,
        tip: this.string.thumbViewTip,
        show: this.readingMode === 1 && this.showMoreSettings,
        type: "SWITCH",
        curVal: this.showThumbViewInBook,
        change: (y) => J.setShowThumbViewInBook(y)
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
        change: (y) => J.setWheelSensitivity(y)
      }), g = {
        title: this.string.wheelDirection,
        tip: this.string.wheelDirectionTip,
        show: this.readingMode === 1 && this.showMoreSettings,
        type: "SWITCH",
        curVal: this.wheelDirection,
        change: (y) => J.setWheelDirection(y)
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
        change: (y) => J.setScrolledPageMargin(y)
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
        w,
        g,
        m,
        v
      ];
    }
  },
  methods: {
    ...Yt(["toggleTopBar", "addDialog", "setAutoFlip", "setOddEven"]),
    async dropOptionChange(t, e) {
      switch (t) {
        case "lang":
          await J.setLang(this.langList[e].val), pr.showInstruction(this.config);
      }
    },
    changeTopBar() {
      J.setShowTopBar(!this.showTopBar);
    },
    closeEHunter() {
      J.toggleEHunter(!1), this.service.eHunter.showEHunterView(!1);
    },
    showInfoDialog() {
      pr.showInstruction(this.config);
    },
    resetCache() {
      localStorage.clear(), window.location.reload();
    },
    toggleMoreSettings(t) {
      J.setShowMoreSettings(!this.showMoreSettings);
    }
  }
};
var nR = function() {
  var e = this, n = e._self._c;
  return n("nav", { staticClass: "top-bar" }, [n("div", { staticClass: "float-content", style: e.floatBtnStyle }, [n("transition", { attrs: { name: "fast-horizontal-fade" } }, [e.showTopBar ? n("circle-icon-button", { ref: "topBarButton", staticClass: "button tips tips-left tips-down", attrs: { icon: "expand", "title-content": e.string.toggleMoreSettings, rotate: e.showMoreSettings }, on: { click: e.toggleMoreSettings } }) : e._e()], 1), n("circle-icon-button", { ref: "topBarButton", staticClass: "button tips tips-left tips-down", attrs: { icon: "menu", "title-content": e.string.toggleTopBar, rotate: e.showTopBar }, on: { click: e.changeTopBar } }), n("circle-icon-button", { staticClass: "button tips tips-left tips-down", attrs: { "title-content": e.string.closeEHunter, icon: "close" }, on: { click: e.closeEHunter } })], 1), n("div", { class: ["inner-content", { hide: !e.showTopBar, "more-settings": e.showMoreSettings }], style: e.topBarStyle }, [e.readSettings ? [e._l(e.configuration, function(r) {
    return [r.show ? n("div", { key: r.title, staticClass: "item" }, [n("span", { staticClass: "label tips tips-down tips-right", attrs: { "title-content": r.tip } }, [e._v(e._s(r.title) + ":")]), r.type === "SELECT" || r.type === "SLIDER_SELECT" ? n("drop-option", { attrs: { list: r.list, "cur-val": r.curValTitle }, on: { change: r.select } }) : e._e(), r.type === "SLIDER_SELECT" ? n("pop-slider", { attrs: { active: r.slider.active, min: r.slider.min, max: r.slider.max, step: r.slider.step, init: r.slider.init, close: r.slider.close, "is-float": r.slider.isFloat }, on: { change: r.slider.change } }) : e._e(), r.type === "SWITCH" ? n("div", { staticClass: "bar-switch" }, [n("simple-switch", { attrs: { active: r.curVal }, on: { change: r.change } })], 1) : e._e()], 1) : e._e()];
  }), n("div", { staticClass: "item less-margin" }, [n("span", { staticClass: "label icon tips tips-down", attrs: { "title-content": "Change language/切换语言/言語を変更" } }, [n("svg", { attrs: { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" } }, [n("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } }), n("path", { attrs: { d: "M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zm6.93 6h-2.95c-.32-1.25-.78-2.45-1.38-3.56 1.84.63 3.37 1.91 4.33 3.56zM12 4.04c.83 1.2 1.48 2.53 1.91 3.96h-3.82c.43-1.43 1.08-2.76 1.91-3.96zM4.26 14C4.1 13.36 4 12.69 4 12s.1-1.36.26-2h3.38c-.08.66-.14 1.32-.14 2 0 .68.06 1.34.14 2H4.26zm.82 2h2.95c.32 1.25.78 2.45 1.38 3.56-1.84-.63-3.37-1.9-4.33-3.56zm2.95-8H5.08c.96-1.66 2.49-2.93 4.33-3.56C8.81 5.55 8.35 6.75 8.03 8zM12 19.96c-.83-1.2-1.48-2.53-1.91-3.96h3.82c-.43 1.43-1.08 2.76-1.91 3.96zM14.34 14H9.66c-.09-.66-.16-1.32-.16-2 0-.68.07-1.35.16-2h4.68c.09.65.16 1.32.16 2 0 .68-.07 1.34-.16 2zm.25 5.56c.6-1.11 1.06-2.31 1.38-3.56h2.95c-.96 1.65-2.49 2.93-4.33 3.56zM16.36 14c.08-.66.14-1.32.14-2 0-.68-.06-1.34-.14-2h3.38c.16.64.26 1.31.26 2s-.1 1.36-.26 2h-3.38z" } })]), e._v(" :")]), n("drop-option", { attrs: { list: e.langList, "cur-val": e.string.lang }, on: { change: (r) => e.dropOptionChange("lang", r) } })], 1), n("div", { staticClass: "item icon-margin" }, [n("a", { staticClass: "label icon tips tips-down clickable", attrs: { "title-content": e.string.resetTip }, on: { click: e.resetCache } }, [n("svg", { staticClass: "reset", attrs: { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24" } }, [n("path", { attrs: { d: "M12 6v3l4-4-4-4v3c-4.42 0-8 3.58-8 8 0 1.57.46 3.03 1.24 4.26L6.7 14.8c-.45-.83-.7-1.79-.7-2.8 0-3.31 2.69-6 6-6zm6.76 1.74L17.3 9.2c.44.84.7 1.79.7 2.8 0 3.31-2.69 6-6 6v-3l-4 4 4 4v-3c4.42 0 8-3.58 8-8 0-1.57-.46-3.03-1.24-4.26z" } }), n("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } })])])]), n("div", { staticClass: "item icon-margin" }, [n("a", { staticClass: "label icon tips tips-down clickable", attrs: { "title-content": e.string.infoTip }, on: { click: e.showInfoDialog } }, [n("svg", { staticClass: "info", attrs: { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" } }, [n("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } }), n("path", { attrs: { d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" } })])])]), n("div", { staticClass: "item" }, [n("a", { staticClass: "label icon tips tips-down clickable", attrs: { "title-content": e.string.githubTip, target: "_blank", href: "https://github.com/hanFengSan/eHunter" } }, [n("svg", { staticClass: "github", attrs: { version: "1.1", viewBox: "0 0 16 16" } }, [n("path", { attrs: { "fill-rule": "evenodd", d: "M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z" } })])])])] : e._e()], 2)]);
}, rR = [], oR = /* @__PURE__ */ ye(
  tR,
  nR,
  rR,
  !1,
  null,
  "c34e8459",
  null,
  null
);
const zw = oR.exports;
const iR = {
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
var sR = function() {
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
}, aR = [], cR = /* @__PURE__ */ ye(
  iR,
  sR,
  aR,
  !1,
  null,
  "e982a924",
  null,
  null
);
const Hw = cR.exports, Vw = {
  timeout(t) {
    return new Promise((e) => setTimeout(e, t));
  }
};
const uR = {
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
  components: { FlatButton: nd },
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
    this.imgPageInfo = JSON.parse(JSON.stringify(this.data)), this.imgPageInfo.isFirstLoad = !0, this.curLoadStatus = Al, this.active && this.getImgSrc(), this.service.album.getThumbInfo(this.index).then(async (t) => {
      this.previewStyle = await this.service.album.getPreviewThumbnailStyle(this.index, this.imgPageInfo, t);
    });
  },
  computed: {
    ...yt(["string"]),
    tags: () => hw,
    loadingInfo() {
      let t = this.reloadTimes ? `[${this.string.reload}-${this.reloadTimes}] ` : "";
      if (this.message)
        return t + this.message;
      switch (this.curLoadStatus) {
        case Ol:
          return t + this.string.loadingImgFailed;
        case Dl:
          return t + this.string.imgLoaded;
        case Al:
          return t + this.string.waiting;
        case to:
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
      if (this.curLoadStatus !== to) {
        let t = await this.service.album.getImgSrc(this.index, Tl);
        if (t instanceof Error) {
          console.Error("getImgSrc", t);
          return;
        }
        this.imgPageInfo.src !== t.src && (this.imgPageInfo = t, this.$emit("update-img-page-info", this.index, t)), this.curLoadStatus = to;
      }
    },
    // refresh img
    async getNewImgSrc(t) {
      this.reloadTimes++, this.message = "", this.imgPageInfo.src = "", this.curLoadStatus = to;
      let e = await this.service.album.getNewImgSrc(this.index, t);
      if (!(e instanceof Error))
        await this.$nextTick(), await Vw.timeout(300), this.imgPageInfo = e, this.$emit("update-img-page-info", this.index, e);
      else
        switch (e.message) {
          case ow:
            this.message = this.string.noOriginalImg;
            break;
          default:
            this.message = this.string.loadingFailed;
        }
    },
    failLoad(t) {
      t.preventDefault(), this.imgPageInfo.src && (this.curLoadStatus = Ol, jt.logText("LOADING", "loading image failed"), this.imgPageInfo.isFirstLoad && (this.imgPageInfo.isFirstLoad = !1, jt.logText("LOADING", "reloading image"), this.getNewImgSrc(Tl)));
    },
    loaded() {
      this.curLoadStatus = Dl;
    },
    onClickBg() {
      this.onClick && this.onClick();
    }
  }
};
var lR = function() {
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
}, fR = [], dR = /* @__PURE__ */ ye(
  uR,
  lR,
  fR,
  !1,
  null,
  "665013c0",
  null,
  null
);
const Uw = dR.exports;
const hR = {
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
    AwesomeScrollView: ew,
    TopBar: zw,
    Pagination: Hw,
    PageView: Uw
  },
  async created() {
    setTimeout(() => this.setIndex({ val: this.curIndex.val, updater: Cl }), 200), document.addEventListener("keydown", this.watchKeyboard);
  },
  destroyed() {
    document.removeEventListener("keydown", this.watchKeyboard);
  },
  computed: {
    ...yt({
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
        this.curIndex.updater !== $l && this.$refs.pageContainers && (this.curIndex.val === this.volFirstIndex ? this.$refs.scrollView.ScrollTo(0, 1e3) : (await this.$nextTick(), this.$refs.scrollView.ScrollTo(
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
        e !== this.curIndex.val && this.setIndex({ val: e, updater: $l });
      }
    }
  },
  methods: {
    ...Yt(["setIndex", "toggleTopBar"]),
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
      this.setIndex({ val: e, updater: Cl });
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
        jt.logText("Album", "preload volume");
      }
    },
    async changeTopBar(t) {
      await J.getShowTopBar() && this.toggleTopBar(t);
    },
    watchKeyboard(t) {
      if (!(t.metaKey || t.ctrlKey))
        switch (t.key) {
          case "ArrowLeft":
          case "a":
            this.centerIndex.val !== 0 && this.setIndex({ val: this.centerIndex.val - 1, updater: Pl });
            break;
          case "ArrowRight":
          case "d":
            this.centerIndex.val !== this.pageCount - 1 && this.setIndex({ val: this.centerIndex.val + 1, updater: Pl });
            break;
          case "Shift":
            J.setShowMoreSettings(!this.showMoreSettings);
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
var pR = function() {
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
}, vR = [], gR = /* @__PURE__ */ ye(
  hR,
  pR,
  vR,
  !1,
  null,
  "93207152",
  null,
  null
);
const mR = gR.exports;
const _R = {
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
  components: { PageView: Uw, Pagination: Hw },
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
    ...yt({
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
    tags: () => hw,
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
          type: aw,
          imgPageInfo: e
        })),
        { id: sw, type: uw, imgPageInfo: { heightOfWidth: 1.45 } }
      ];
      return this.oddEven || t.unshift({ id: iw, type: cw, imgPageInfo: { heightOfWidth: 1.45 } }), t;
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
    ...Yt(["setBookIndex", "setAutoFlip"]),
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
            J.setShowMoreSettings(!this.showMoreSettings);
            break;
          case "Escape":
            J.setShowTopBar(!this.showTopBar);
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
      await J.getFirstOpenBookMode() && (pr.showBookInstruction(!0), J.setFirstOpenBookMode(!1));
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
var bR = function() {
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
}, yR = [], wR = /* @__PURE__ */ ye(
  _R,
  bR,
  yR,
  !1,
  null,
  "fa12adfc",
  null,
  null
);
const kR = wR.exports;
const SR = {
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
  components: { AlbumScrollView: mR, AlbumBookView: kR, TopBar: zw },
  async created() {
    this.setIndex({ val: this.curPageNum - 1, updater: nw });
  },
  computed: {
    ...yt({
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
    ...Yt(["setIndex"]),
    fullscreen() {
      const t = document.querySelector(".vue-container");
      document.webkitCurrentFullScreenElement || document.mozFullScreenElement ? (document.webkitExitFullscreen && document.webkitExitFullscreen(), document.mozCancelFullScreen && document.mozCancelFullScreen()) : (t.mozRequestFullScreen && t.mozRequestFullScreen(), t.webkitRequestFullScreen && t.webkitRequestFullScreen());
    }
  }
};
var xR = function() {
  var e = this, n = e._self._c;
  return n("div", { staticClass: "reader-view" }, [e._e(), n("top-bar", { staticClass: "top-bar" }), n("div", { staticClass: "panel" }, [n("h4", { staticClass: "location" }, [e._v(e._s(e.location))]), n("div", { staticClass: "full-screen tips tips-left", attrs: { "title-content": e.string.fullScreen }, on: { click: e.fullscreen } }, [n("svg", { attrs: { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg" } }, [n("path", { attrs: { d: "M0 0h24v24H0z", fill: "none" } }), n("path", { attrs: { d: "M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z" } })])])]), n("transition", { attrs: { name: "slow-horizontal-fade" } }, [e.readingMode === 0 ? n("album-scroll-view", { staticClass: "content scroll-mode", attrs: { pageCount: e.pageCount, curPageNum: e.curPageNum, title: e.title, imgPageInfos: e.imgPageInfos, albumId: e.albumId } }) : e._e()], 1), n("transition", { attrs: { name: "slow-vertical-fade" } }, [e.readingMode === 1 ? n("album-book-view", { staticClass: "content book-mode", attrs: { pageCount: e.pageCount, curPageNum: e.curPageNum, title: e.title, imgPageInfos: e.imgPageInfos, albumId: e.albumId } }) : e._e()], 1)], 1);
}, ER = [], $R = /* @__PURE__ */ ye(
  SR,
  xR,
  ER,
  !1,
  null,
  "c0c43852",
  null,
  null
);
const CR = $R.exports;
const IR = {
  name: "LoadingView",
  data() {
    return {};
  }
};
var TR = function() {
  var e = this;
  return e._self._c, e._m(0);
}, AR = [function() {
  var t = this, e = t._self._c;
  return e("div", { staticClass: "loading-view" }, [e("div", { staticClass: "loading-animation" }, [e("div", { staticClass: "book" }, [e("div", { staticClass: "book__page" }), e("div", { staticClass: "book__page" }), e("div", { staticClass: "book__page" })]), e("h4", [t._v("Reading")])])]);
}], OR = /* @__PURE__ */ ye(
  IR,
  TR,
  AR,
  !1,
  null,
  "8a38a277",
  null,
  null
);
const DR = OR.exports;
var Y = {};
const PR = "Á", FR = "á", RR = "Ă", NR = "ă", MR = "∾", LR = "∿", qR = "∾̳", jR = "Â", BR = "â", zR = "´", HR = "А", VR = "а", UR = "Æ", GR = "æ", WR = "⁡", KR = "𝔄", ZR = "𝔞", JR = "À", YR = "à", XR = "ℵ", QR = "ℵ", eN = "Α", tN = "α", nN = "Ā", rN = "ā", oN = "⨿", iN = "&", sN = "&", aN = "⩕", cN = "⩓", uN = "∧", lN = "⩜", fN = "⩘", dN = "⩚", hN = "∠", pN = "⦤", vN = "∠", gN = "⦨", mN = "⦩", _N = "⦪", bN = "⦫", yN = "⦬", wN = "⦭", kN = "⦮", SN = "⦯", xN = "∡", EN = "∟", $N = "⊾", CN = "⦝", IN = "∢", TN = "Å", AN = "⍼", ON = "Ą", DN = "ą", PN = "𝔸", FN = "𝕒", RN = "⩯", NN = "≈", MN = "⩰", LN = "≊", qN = "≋", jN = "'", BN = "⁡", zN = "≈", HN = "≊", VN = "Å", UN = "å", GN = "𝒜", WN = "𝒶", KN = "≔", ZN = "*", JN = "≈", YN = "≍", XN = "Ã", QN = "ã", eM = "Ä", tM = "ä", nM = "∳", rM = "⨑", oM = "≌", iM = "϶", sM = "‵", aM = "∽", cM = "⋍", uM = "∖", lM = "⫧", fM = "⊽", dM = "⌅", hM = "⌆", pM = "⌅", vM = "⎵", gM = "⎶", mM = "≌", _M = "Б", bM = "б", yM = "„", wM = "∵", kM = "∵", SM = "∵", xM = "⦰", EM = "϶", $M = "ℬ", CM = "ℬ", IM = "Β", TM = "β", AM = "ℶ", OM = "≬", DM = "𝔅", PM = "𝔟", FM = "⋂", RM = "◯", NM = "⋃", MM = "⨀", LM = "⨁", qM = "⨂", jM = "⨆", BM = "★", zM = "▽", HM = "△", VM = "⨄", UM = "⋁", WM = "⋀", KM = "⤍", ZM = "⧫", JM = "▪", YM = "▴", XM = "▾", QM = "◂", e8 = "▸", t8 = "␣", n8 = "▒", r8 = "░", o8 = "▓", i8 = "█", s8 = "=⃥", a8 = "≡⃥", c8 = "⫭", u8 = "⌐", l8 = "𝔹", f8 = "𝕓", d8 = "⊥", h8 = "⊥", p8 = "⋈", v8 = "⧉", g8 = "┐", m8 = "╕", _8 = "╖", b8 = "╗", y8 = "┌", w8 = "╒", k8 = "╓", S8 = "╔", x8 = "─", E8 = "═", $8 = "┬", C8 = "╤", I8 = "╥", T8 = "╦", A8 = "┴", O8 = "╧", D8 = "╨", P8 = "╩", F8 = "⊟", R8 = "⊞", N8 = "⊠", M8 = "┘", L8 = "╛", q8 = "╜", j8 = "╝", B8 = "└", z8 = "╘", H8 = "╙", V8 = "╚", U8 = "│", G8 = "║", W8 = "┼", K8 = "╪", Z8 = "╫", J8 = "╬", Y8 = "┤", X8 = "╡", Q8 = "╢", eL = "╣", tL = "├", nL = "╞", rL = "╟", oL = "╠", iL = "‵", sL = "˘", aL = "˘", cL = "¦", uL = "𝒷", lL = "ℬ", fL = "⁏", dL = "∽", hL = "⋍", pL = "⧅", vL = "\\", gL = "⟈", mL = "•", _L = "•", bL = "≎", yL = "⪮", wL = "≏", kL = "≎", SL = "≏", xL = "Ć", EL = "ć", $L = "⩄", CL = "⩉", IL = "⩋", TL = "∩", AL = "⋒", OL = "⩇", DL = "⩀", PL = "ⅅ", FL = "∩︀", RL = "⁁", NL = "ˇ", ML = "ℭ", LL = "⩍", qL = "Č", jL = "č", BL = "Ç", zL = "ç", HL = "Ĉ", VL = "ĉ", UL = "∰", GL = "⩌", WL = "⩐", KL = "Ċ", ZL = "ċ", JL = "¸", YL = "¸", XL = "⦲", QL = "¢", e6 = "·", t6 = "·", n6 = "𝔠", r6 = "ℭ", o6 = "Ч", i6 = "ч", s6 = "✓", a6 = "✓", c6 = "Χ", u6 = "χ", l6 = "ˆ", f6 = "≗", d6 = "↺", h6 = "↻", p6 = "⊛", v6 = "⊚", g6 = "⊝", m6 = "⊙", _6 = "®", b6 = "Ⓢ", y6 = "⊖", w6 = "⊕", k6 = "⊗", S6 = "○", x6 = "⧃", E6 = "≗", $6 = "⨐", C6 = "⫯", I6 = "⧂", T6 = "∲", A6 = "”", O6 = "’", D6 = "♣", P6 = "♣", F6 = ":", R6 = "∷", N6 = "⩴", M6 = "≔", L6 = "≔", q6 = ",", j6 = "@", B6 = "∁", z6 = "∘", H6 = "∁", V6 = "ℂ", U6 = "≅", G6 = "⩭", W6 = "≡", K6 = "∮", Z6 = "∯", J6 = "∮", Y6 = "𝕔", X6 = "ℂ", Q6 = "∐", eq = "∐", tq = "©", nq = "©", rq = "℗", oq = "∳", iq = "↵", sq = "✗", aq = "⨯", cq = "𝒞", uq = "𝒸", lq = "⫏", fq = "⫑", dq = "⫐", hq = "⫒", pq = "⋯", vq = "⤸", gq = "⤵", mq = "⋞", _q = "⋟", bq = "↶", yq = "⤽", wq = "⩈", kq = "⩆", Sq = "≍", xq = "∪", Eq = "⋓", $q = "⩊", Cq = "⊍", Iq = "⩅", Tq = "∪︀", Aq = "↷", Oq = "⤼", Dq = "⋞", Pq = "⋟", Fq = "⋎", Rq = "⋏", Nq = "¤", Mq = "↶", Lq = "↷", qq = "⋎", jq = "⋏", Bq = "∲", zq = "∱", Hq = "⌭", Vq = "†", Uq = "‡", Gq = "ℸ", Wq = "↓", Kq = "↡", Zq = "⇓", Jq = "‐", Yq = "⫤", Xq = "⊣", Qq = "⤏", ej = "˝", tj = "Ď", nj = "ď", rj = "Д", oj = "д", ij = "‡", sj = "⇊", aj = "ⅅ", cj = "ⅆ", uj = "⤑", lj = "⩷", fj = "°", dj = "∇", hj = "Δ", pj = "δ", vj = "⦱", gj = "⥿", mj = "𝔇", _j = "𝔡", bj = "⥥", yj = "⇃", wj = "⇂", kj = "´", Sj = "˙", xj = "˝", Ej = "`", $j = "˜", Cj = "⋄", Ij = "⋄", Tj = "⋄", Aj = "♦", Oj = "♦", Dj = "¨", Pj = "ⅆ", Fj = "ϝ", Rj = "⋲", Nj = "÷", Mj = "÷", Lj = "⋇", qj = "⋇", jj = "Ђ", Bj = "ђ", zj = "⌞", Hj = "⌍", Vj = "$", Uj = "𝔻", Gj = "𝕕", Wj = "¨", Kj = "˙", Zj = "⃜", Jj = "≐", Yj = "≑", Xj = "≐", Qj = "∸", e4 = "∔", t4 = "⊡", n4 = "⌆", r4 = "∯", o4 = "¨", i4 = "⇓", s4 = "⇐", a4 = "⇔", c4 = "⫤", u4 = "⟸", l4 = "⟺", f4 = "⟹", d4 = "⇒", h4 = "⊨", p4 = "⇑", v4 = "⇕", g4 = "∥", m4 = "⤓", _4 = "↓", b4 = "↓", y4 = "⇓", w4 = "⇵", k4 = "̑", S4 = "⇊", x4 = "⇃", E4 = "⇂", $4 = "⥐", C4 = "⥞", I4 = "⥖", T4 = "↽", A4 = "⥟", O4 = "⥗", D4 = "⇁", P4 = "↧", F4 = "⊤", R4 = "⤐", N4 = "⌟", M4 = "⌌", L4 = "𝒟", q4 = "𝒹", j4 = "Ѕ", B4 = "ѕ", z4 = "⧶", H4 = "Đ", V4 = "đ", U4 = "⋱", G4 = "▿", W4 = "▾", K4 = "⇵", Z4 = "⥯", J4 = "⦦", Y4 = "Џ", X4 = "џ", Q4 = "⟿", eB = "É", tB = "é", nB = "⩮", rB = "Ě", oB = "ě", iB = "Ê", sB = "ê", aB = "≖", cB = "≕", uB = "Э", lB = "э", fB = "⩷", dB = "Ė", hB = "ė", pB = "≑", vB = "ⅇ", gB = "≒", mB = "𝔈", _B = "𝔢", bB = "⪚", yB = "È", wB = "è", kB = "⪖", SB = "⪘", xB = "⪙", EB = "∈", $B = "⏧", CB = "ℓ", IB = "⪕", TB = "⪗", AB = "Ē", OB = "ē", DB = "∅", PB = "∅", FB = "◻", RB = "∅", NB = "▫", MB = " ", LB = " ", qB = " ", jB = "Ŋ", BB = "ŋ", zB = " ", HB = "Ę", VB = "ę", UB = "𝔼", GB = "𝕖", WB = "⋕", KB = "⧣", ZB = "⩱", JB = "ε", YB = "Ε", XB = "ε", QB = "ϵ", ez = "≖", tz = "≕", nz = "≂", rz = "⪖", oz = "⪕", iz = "⩵", sz = "=", az = "≂", cz = "≟", uz = "⇌", lz = "≡", fz = "⩸", dz = "⧥", hz = "⥱", pz = "≓", vz = "ℯ", gz = "ℰ", mz = "≐", _z = "⩳", bz = "≂", yz = "Η", wz = "η", kz = "Ð", Sz = "ð", xz = "Ë", Ez = "ë", $z = "€", Cz = "!", Iz = "∃", Tz = "∃", Az = "ℰ", Oz = "ⅇ", Dz = "ⅇ", Pz = "≒", Fz = "Ф", Rz = "ф", Nz = "♀", Mz = "ﬃ", Lz = "ﬀ", qz = "ﬄ", jz = "𝔉", Bz = "𝔣", zz = "ﬁ", Hz = "◼", Vz = "▪", Uz = "fj", Gz = "♭", Wz = "ﬂ", Kz = "▱", Zz = "ƒ", Jz = "𝔽", Yz = "𝕗", Xz = "∀", Qz = "∀", e5 = "⋔", t5 = "⫙", n5 = "ℱ", r5 = "⨍", o5 = "½", i5 = "⅓", s5 = "¼", a5 = "⅕", c5 = "⅙", u5 = "⅛", l5 = "⅔", f5 = "⅖", d5 = "¾", h5 = "⅗", p5 = "⅜", v5 = "⅘", g5 = "⅚", m5 = "⅝", _5 = "⅞", b5 = "⁄", y5 = "⌢", w5 = "𝒻", k5 = "ℱ", S5 = "ǵ", x5 = "Γ", E5 = "γ", $5 = "Ϝ", C5 = "ϝ", I5 = "⪆", T5 = "Ğ", A5 = "ğ", O5 = "Ģ", D5 = "Ĝ", P5 = "ĝ", F5 = "Г", R5 = "г", N5 = "Ġ", M5 = "ġ", L5 = "≥", q5 = "≧", j5 = "⪌", B5 = "⋛", z5 = "≥", H5 = "≧", V5 = "⩾", U5 = "⪩", G5 = "⩾", W5 = "⪀", K5 = "⪂", Z5 = "⪄", J5 = "⋛︀", Y5 = "⪔", X5 = "𝔊", Q5 = "𝔤", e7 = "≫", t7 = "⋙", n7 = "⋙", r7 = "ℷ", o7 = "Ѓ", i7 = "ѓ", s7 = "⪥", a7 = "≷", c7 = "⪒", u7 = "⪤", l7 = "⪊", f7 = "⪊", d7 = "⪈", h7 = "≩", p7 = "⪈", v7 = "≩", g7 = "⋧", m7 = "𝔾", _7 = "𝕘", b7 = "`", y7 = "≥", w7 = "⋛", k7 = "≧", S7 = "⪢", x7 = "≷", E7 = "⩾", $7 = "≳", C7 = "𝒢", I7 = "ℊ", T7 = "≳", A7 = "⪎", O7 = "⪐", D7 = "⪧", P7 = "⩺", F7 = ">", R7 = ">", N7 = "≫", M7 = "⋗", L7 = "⦕", q7 = "⩼", j7 = "⪆", B7 = "⥸", z7 = "⋗", H7 = "⋛", V7 = "⪌", U7 = "≷", G7 = "≳", W7 = "≩︀", K7 = "≩︀", Z7 = "ˇ", J7 = " ", Y7 = "½", X7 = "ℋ", Q7 = "Ъ", e9 = "ъ", t9 = "⥈", n9 = "↔", r9 = "⇔", o9 = "↭", i9 = "^", s9 = "ℏ", a9 = "Ĥ", c9 = "ĥ", u9 = "♥", l9 = "♥", f9 = "…", d9 = "⊹", h9 = "𝔥", p9 = "ℌ", v9 = "ℋ", g9 = "⤥", m9 = "⤦", _9 = "⇿", b9 = "∻", y9 = "↩", w9 = "↪", k9 = "𝕙", S9 = "ℍ", x9 = "―", E9 = "─", $9 = "𝒽", C9 = "ℋ", I9 = "ℏ", T9 = "Ħ", A9 = "ħ", O9 = "≎", D9 = "≏", P9 = "⁃", F9 = "‐", R9 = "Í", N9 = "í", M9 = "⁣", L9 = "Î", q9 = "î", j9 = "И", B9 = "и", z9 = "İ", H9 = "Е", V9 = "е", U9 = "¡", G9 = "⇔", W9 = "𝔦", K9 = "ℑ", Z9 = "Ì", J9 = "ì", Y9 = "ⅈ", X9 = "⨌", Q9 = "∭", eH = "⧜", tH = "℩", nH = "Ĳ", rH = "ĳ", oH = "Ī", iH = "ī", sH = "ℑ", aH = "ⅈ", cH = "ℐ", uH = "ℑ", lH = "ı", fH = "ℑ", dH = "⊷", hH = "Ƶ", pH = "⇒", vH = "℅", gH = "∞", mH = "⧝", _H = "ı", bH = "⊺", yH = "∫", wH = "∬", kH = "ℤ", SH = "∫", xH = "⊺", EH = "⋂", $H = "⨗", CH = "⨼", IH = "⁣", TH = "⁢", AH = "Ё", OH = "ё", DH = "Į", PH = "į", FH = "𝕀", RH = "𝕚", NH = "Ι", MH = "ι", LH = "⨼", qH = "¿", jH = "𝒾", BH = "ℐ", zH = "∈", HH = "⋵", VH = "⋹", UH = "⋴", GH = "⋳", WH = "∈", KH = "⁢", ZH = "Ĩ", JH = "ĩ", YH = "І", XH = "і", QH = "Ï", eV = "ï", tV = "Ĵ", nV = "ĵ", rV = "Й", oV = "й", iV = "𝔍", sV = "𝔧", aV = "ȷ", cV = "𝕁", uV = "𝕛", lV = "𝒥", fV = "𝒿", dV = "Ј", hV = "ј", pV = "Є", vV = "є", gV = "Κ", mV = "κ", _V = "ϰ", bV = "Ķ", yV = "ķ", wV = "К", kV = "к", SV = "𝔎", xV = "𝔨", EV = "ĸ", $V = "Х", CV = "х", IV = "Ќ", TV = "ќ", AV = "𝕂", OV = "𝕜", DV = "𝒦", PV = "𝓀", FV = "⇚", RV = "Ĺ", NV = "ĺ", MV = "⦴", LV = "ℒ", qV = "Λ", jV = "λ", BV = "⟨", zV = "⟪", HV = "⦑", VV = "⟨", UV = "⪅", GV = "ℒ", WV = "«", KV = "⇤", ZV = "⤟", JV = "←", YV = "↞", XV = "⇐", QV = "⤝", eU = "↩", tU = "↫", nU = "⤹", rU = "⥳", oU = "↢", iU = "⤙", sU = "⤛", aU = "⪫", cU = "⪭", uU = "⪭︀", lU = "⤌", fU = "⤎", dU = "❲", hU = "{", pU = "[", vU = "⦋", gU = "⦏", mU = "⦍", _U = "Ľ", bU = "ľ", yU = "Ļ", wU = "ļ", kU = "⌈", SU = "{", xU = "Л", EU = "л", $U = "⤶", CU = "“", IU = "„", TU = "⥧", AU = "⥋", OU = "↲", DU = "≤", PU = "≦", FU = "⟨", RU = "⇤", NU = "←", MU = "←", LU = "⇐", qU = "⇆", jU = "↢", BU = "⌈", zU = "⟦", HU = "⥡", VU = "⥙", UU = "⇃", GU = "⌊", WU = "↽", KU = "↼", ZU = "⇇", JU = "↔", YU = "↔", XU = "⇔", QU = "⇆", eG = "⇋", tG = "↭", nG = "⥎", rG = "↤", oG = "⊣", iG = "⥚", sG = "⋋", aG = "⧏", cG = "⊲", uG = "⊴", lG = "⥑", fG = "⥠", dG = "⥘", hG = "↿", pG = "⥒", vG = "↼", gG = "⪋", mG = "⋚", _G = "≤", bG = "≦", yG = "⩽", wG = "⪨", kG = "⩽", SG = "⩿", xG = "⪁", EG = "⪃", $G = "⋚︀", CG = "⪓", IG = "⪅", TG = "⋖", AG = "⋚", OG = "⪋", DG = "⋚", PG = "≦", FG = "≶", RG = "≶", NG = "⪡", MG = "≲", LG = "⩽", qG = "≲", jG = "⥼", BG = "⌊", zG = "𝔏", HG = "𝔩", VG = "≶", UG = "⪑", GG = "⥢", WG = "↽", KG = "↼", ZG = "⥪", JG = "▄", YG = "Љ", XG = "љ", QG = "⇇", eW = "≪", tW = "⋘", nW = "⌞", rW = "⇚", oW = "⥫", iW = "◺", sW = "Ŀ", aW = "ŀ", cW = "⎰", uW = "⎰", lW = "⪉", fW = "⪉", dW = "⪇", hW = "≨", pW = "⪇", vW = "≨", gW = "⋦", mW = "⟬", _W = "⇽", bW = "⟦", yW = "⟵", wW = "⟵", kW = "⟸", SW = "⟷", xW = "⟷", EW = "⟺", $W = "⟼", CW = "⟶", IW = "⟶", TW = "⟹", AW = "↫", OW = "↬", DW = "⦅", PW = "𝕃", FW = "𝕝", RW = "⨭", NW = "⨴", MW = "∗", LW = "_", qW = "↙", jW = "↘", BW = "◊", zW = "◊", HW = "⧫", VW = "(", UW = "⦓", GW = "⇆", WW = "⌟", KW = "⇋", ZW = "⥭", JW = "‎", YW = "⊿", XW = "‹", QW = "𝓁", eK = "ℒ", tK = "↰", nK = "↰", rK = "≲", oK = "⪍", iK = "⪏", sK = "[", aK = "‘", cK = "‚", uK = "Ł", lK = "ł", fK = "⪦", dK = "⩹", hK = "<", pK = "<", vK = "≪", gK = "⋖", mK = "⋋", _K = "⋉", bK = "⥶", yK = "⩻", wK = "◃", kK = "⊴", SK = "◂", xK = "⦖", EK = "⥊", $K = "⥦", CK = "≨︀", IK = "≨︀", TK = "¯", AK = "♂", OK = "✠", DK = "✠", PK = "↦", FK = "↦", RK = "↧", NK = "↤", MK = "↥", LK = "▮", qK = "⨩", jK = "М", BK = "м", zK = "—", HK = "∺", VK = "∡", UK = " ", GK = "ℳ", WK = "𝔐", KK = "𝔪", ZK = "℧", JK = "µ", YK = "*", XK = "⫰", QK = "∣", eZ = "·", tZ = "⊟", nZ = "−", rZ = "∸", oZ = "⨪", iZ = "∓", sZ = "⫛", aZ = "…", cZ = "∓", uZ = "⊧", lZ = "𝕄", fZ = "𝕞", dZ = "∓", hZ = "𝓂", pZ = "ℳ", vZ = "∾", gZ = "Μ", mZ = "μ", _Z = "⊸", bZ = "⊸", yZ = "∇", wZ = "Ń", kZ = "ń", SZ = "∠⃒", xZ = "≉", EZ = "⩰̸", $Z = "≋̸", CZ = "ŉ", IZ = "≉", TZ = "♮", AZ = "ℕ", OZ = "♮", DZ = " ", PZ = "≎̸", FZ = "≏̸", RZ = "⩃", NZ = "Ň", MZ = "ň", LZ = "Ņ", qZ = "ņ", jZ = "≇", BZ = "⩭̸", zZ = "⩂", HZ = "Н", VZ = "н", UZ = "–", GZ = "⤤", WZ = "↗", KZ = "⇗", ZZ = "↗", JZ = "≠", YZ = "≐̸", XZ = "​", QZ = "​", eJ = "​", tJ = "​", nJ = "≢", rJ = "⤨", oJ = "≂̸", iJ = "≫", sJ = "≪", aJ = `
`, cJ = "∄", uJ = "∄", lJ = "𝔑", fJ = "𝔫", dJ = "≧̸", hJ = "≱", pJ = "≱", vJ = "≧̸", gJ = "⩾̸", mJ = "⩾̸", _J = "⋙̸", bJ = "≵", yJ = "≫⃒", wJ = "≯", kJ = "≯", SJ = "≫̸", xJ = "↮", EJ = "⇎", $J = "⫲", CJ = "∋", IJ = "⋼", TJ = "⋺", AJ = "∋", OJ = "Њ", DJ = "њ", PJ = "↚", FJ = "⇍", RJ = "‥", NJ = "≦̸", MJ = "≰", LJ = "↚", qJ = "⇍", jJ = "↮", BJ = "⇎", zJ = "≰", HJ = "≦̸", VJ = "⩽̸", UJ = "⩽̸", GJ = "≮", WJ = "⋘̸", KJ = "≴", ZJ = "≪⃒", JJ = "≮", YJ = "⋪", XJ = "⋬", QJ = "≪̸", eY = "∤", tY = "⁠", nY = " ", rY = "𝕟", oY = "ℕ", iY = "⫬", sY = "¬", aY = "≢", cY = "≭", uY = "∦", lY = "∉", fY = "≠", dY = "≂̸", hY = "∄", pY = "≯", vY = "≱", gY = "≧̸", mY = "≫̸", _Y = "≹", bY = "⩾̸", yY = "≵", wY = "≎̸", kY = "≏̸", SY = "∉", xY = "⋵̸", EY = "⋹̸", $Y = "∉", CY = "⋷", IY = "⋶", TY = "⧏̸", AY = "⋪", OY = "⋬", DY = "≮", PY = "≰", FY = "≸", RY = "≪̸", NY = "⩽̸", MY = "≴", LY = "⪢̸", qY = "⪡̸", jY = "∌", BY = "∌", zY = "⋾", HY = "⋽", VY = "⊀", UY = "⪯̸", GY = "⋠", WY = "∌", KY = "⧐̸", ZY = "⋫", JY = "⋭", YY = "⊏̸", XY = "⋢", QY = "⊐̸", eX = "⋣", tX = "⊂⃒", nX = "⊈", rX = "⊁", oX = "⪰̸", iX = "⋡", sX = "≿̸", aX = "⊃⃒", cX = "⊉", uX = "≁", lX = "≄", fX = "≇", dX = "≉", hX = "∤", pX = "∦", vX = "∦", gX = "⫽⃥", mX = "∂̸", _X = "⨔", bX = "⊀", yX = "⋠", wX = "⊀", kX = "⪯̸", SX = "⪯̸", xX = "⤳̸", EX = "↛", $X = "⇏", CX = "↝̸", IX = "↛", TX = "⇏", AX = "⋫", OX = "⋭", DX = "⊁", PX = "⋡", FX = "⪰̸", RX = "𝒩", NX = "𝓃", MX = "∤", LX = "∦", qX = "≁", jX = "≄", BX = "≄", zX = "∤", HX = "∦", VX = "⋢", UX = "⋣", GX = "⊄", WX = "⫅̸", KX = "⊈", ZX = "⊂⃒", JX = "⊈", YX = "⫅̸", XX = "⊁", QX = "⪰̸", eQ = "⊅", tQ = "⫆̸", nQ = "⊉", rQ = "⊃⃒", oQ = "⊉", iQ = "⫆̸", sQ = "≹", aQ = "Ñ", cQ = "ñ", uQ = "≸", lQ = "⋪", fQ = "⋬", dQ = "⋫", hQ = "⋭", pQ = "Ν", vQ = "ν", gQ = "#", mQ = "№", _Q = " ", bQ = "≍⃒", yQ = "⊬", wQ = "⊭", kQ = "⊮", SQ = "⊯", xQ = "≥⃒", EQ = ">⃒", $Q = "⤄", CQ = "⧞", IQ = "⤂", TQ = "≤⃒", AQ = "<⃒", OQ = "⊴⃒", DQ = "⤃", PQ = "⊵⃒", FQ = "∼⃒", RQ = "⤣", NQ = "↖", MQ = "⇖", LQ = "↖", qQ = "⤧", jQ = "Ó", BQ = "ó", zQ = "⊛", HQ = "Ô", VQ = "ô", UQ = "⊚", GQ = "О", WQ = "о", KQ = "⊝", ZQ = "Ő", JQ = "ő", YQ = "⨸", XQ = "⊙", QQ = "⦼", eee = "Œ", tee = "œ", nee = "⦿", ree = "𝔒", oee = "𝔬", iee = "˛", see = "Ò", aee = "ò", cee = "⧁", uee = "⦵", lee = "Ω", fee = "∮", dee = "↺", hee = "⦾", pee = "⦻", vee = "‾", gee = "⧀", mee = "Ō", _ee = "ō", bee = "Ω", yee = "ω", wee = "Ο", kee = "ο", See = "⦶", xee = "⊖", Eee = "𝕆", $ee = "𝕠", Cee = "⦷", Iee = "“", Tee = "‘", Aee = "⦹", Oee = "⊕", Dee = "↻", Pee = "⩔", Fee = "∨", Ree = "⩝", Nee = "ℴ", Mee = "ℴ", Lee = "ª", qee = "º", jee = "⊶", Bee = "⩖", zee = "⩗", Hee = "⩛", Vee = "Ⓢ", Uee = "𝒪", Gee = "ℴ", Wee = "Ø", Kee = "ø", Zee = "⊘", Jee = "Õ", Yee = "õ", Xee = "⨶", Qee = "⨷", ete = "⊗", tte = "Ö", nte = "ö", rte = "⌽", ote = "‾", ite = "⏞", ste = "⎴", ate = "⏜", cte = "¶", ute = "∥", lte = "∥", fte = "⫳", dte = "⫽", hte = "∂", pte = "∂", vte = "П", gte = "п", mte = "%", _te = ".", bte = "‰", yte = "⊥", wte = "‱", kte = "𝔓", Ste = "𝔭", xte = "Φ", Ete = "φ", $te = "ϕ", Cte = "ℳ", Ite = "☎", Tte = "Π", Ate = "π", Ote = "⋔", Dte = "ϖ", Pte = "ℏ", Fte = "ℎ", Rte = "ℏ", Nte = "⨣", Mte = "⊞", Lte = "⨢", qte = "+", jte = "∔", Bte = "⨥", zte = "⩲", Hte = "±", Vte = "±", Ute = "⨦", Gte = "⨧", Wte = "±", Kte = "ℌ", Zte = "⨕", Jte = "𝕡", Yte = "ℙ", Xte = "£", Qte = "⪷", ene = "⪻", tne = "≺", nne = "≼", rne = "⪷", one = "≺", ine = "≼", sne = "≺", ane = "⪯", cne = "≼", une = "≾", lne = "⪯", fne = "⪹", dne = "⪵", hne = "⋨", pne = "⪯", vne = "⪳", gne = "≾", mne = "′", _ne = "″", bne = "ℙ", yne = "⪹", wne = "⪵", kne = "⋨", Sne = "∏", xne = "∏", Ene = "⌮", $ne = "⌒", Cne = "⌓", Ine = "∝", Tne = "∝", Ane = "∷", One = "∝", Dne = "≾", Pne = "⊰", Fne = "𝒫", Rne = "𝓅", Nne = "Ψ", Mne = "ψ", Lne = " ", qne = "𝔔", jne = "𝔮", Bne = "⨌", zne = "𝕢", Hne = "ℚ", Vne = "⁗", Une = "𝒬", Gne = "𝓆", Wne = "ℍ", Kne = "⨖", Zne = "?", Jne = "≟", Yne = '"', Xne = '"', Qne = "⇛", ere = "∽̱", tre = "Ŕ", nre = "ŕ", rre = "√", ore = "⦳", ire = "⟩", sre = "⟫", are = "⦒", cre = "⦥", ure = "⟩", lre = "»", fre = "⥵", dre = "⇥", hre = "⤠", pre = "⤳", vre = "→", gre = "↠", mre = "⇒", _re = "⤞", bre = "↪", yre = "↬", wre = "⥅", kre = "⥴", Sre = "⤖", xre = "↣", Ere = "↝", $re = "⤚", Cre = "⤜", Ire = "∶", Tre = "ℚ", Are = "⤍", Ore = "⤏", Dre = "⤐", Pre = "❳", Fre = "}", Rre = "]", Nre = "⦌", Mre = "⦎", Lre = "⦐", qre = "Ř", jre = "ř", Bre = "Ŗ", zre = "ŗ", Hre = "⌉", Vre = "}", Ure = "Р", Gre = "р", Wre = "⤷", Kre = "⥩", Zre = "”", Jre = "”", Yre = "↳", Xre = "ℜ", Qre = "ℛ", eoe = "ℜ", toe = "ℝ", noe = "ℜ", roe = "▭", ooe = "®", ioe = "®", soe = "∋", aoe = "⇋", coe = "⥯", uoe = "⥽", loe = "⌋", foe = "𝔯", doe = "ℜ", hoe = "⥤", poe = "⇁", voe = "⇀", goe = "⥬", moe = "Ρ", _oe = "ρ", boe = "ϱ", yoe = "⟩", woe = "⇥", koe = "→", Soe = "→", xoe = "⇒", Eoe = "⇄", $oe = "↣", Coe = "⌉", Ioe = "⟧", Toe = "⥝", Aoe = "⥕", Ooe = "⇂", Doe = "⌋", Poe = "⇁", Foe = "⇀", Roe = "⇄", Noe = "⇌", Moe = "⇉", Loe = "↝", qoe = "↦", joe = "⊢", Boe = "⥛", zoe = "⋌", Hoe = "⧐", Voe = "⊳", Uoe = "⊵", Goe = "⥏", Woe = "⥜", Koe = "⥔", Zoe = "↾", Joe = "⥓", Yoe = "⇀", Xoe = "˚", Qoe = "≓", eie = "⇄", tie = "⇌", nie = "‏", rie = "⎱", oie = "⎱", iie = "⫮", sie = "⟭", aie = "⇾", cie = "⟧", uie = "⦆", lie = "𝕣", fie = "ℝ", die = "⨮", hie = "⨵", pie = "⥰", vie = ")", gie = "⦔", mie = "⨒", _ie = "⇉", bie = "⇛", yie = "›", wie = "𝓇", kie = "ℛ", Sie = "↱", xie = "↱", Eie = "]", $ie = "’", Cie = "’", Iie = "⋌", Tie = "⋊", Aie = "▹", Oie = "⊵", Die = "▸", Pie = "⧎", Fie = "⧴", Rie = "⥨", Nie = "℞", Mie = "Ś", Lie = "ś", qie = "‚", jie = "⪸", Bie = "Š", zie = "š", Hie = "⪼", Vie = "≻", Uie = "≽", Gie = "⪰", Wie = "⪴", Kie = "Ş", Zie = "ş", Jie = "Ŝ", Yie = "ŝ", Xie = "⪺", Qie = "⪶", ese = "⋩", tse = "⨓", nse = "≿", rse = "С", ose = "с", ise = "⊡", sse = "⋅", ase = "⩦", cse = "⤥", use = "↘", lse = "⇘", fse = "↘", dse = "§", hse = ";", pse = "⤩", vse = "∖", gse = "∖", mse = "✶", _se = "𝔖", bse = "𝔰", yse = "⌢", wse = "♯", kse = "Щ", Sse = "щ", xse = "Ш", Ese = "ш", $se = "↓", Cse = "←", Ise = "∣", Tse = "∥", Ase = "→", Ose = "↑", Dse = "­", Pse = "Σ", Fse = "σ", Rse = "ς", Nse = "ς", Mse = "∼", Lse = "⩪", qse = "≃", jse = "≃", Bse = "⪞", zse = "⪠", Hse = "⪝", Vse = "⪟", Use = "≆", Gse = "⨤", Wse = "⥲", Kse = "←", Zse = "∘", Jse = "∖", Yse = "⨳", Xse = "⧤", Qse = "∣", eae = "⌣", tae = "⪪", nae = "⪬", rae = "⪬︀", oae = "Ь", iae = "ь", sae = "⌿", aae = "⧄", cae = "/", uae = "𝕊", lae = "𝕤", fae = "♠", dae = "♠", hae = "∥", pae = "⊓", vae = "⊓︀", gae = "⊔", mae = "⊔︀", _ae = "√", bae = "⊏", yae = "⊑", wae = "⊏", kae = "⊑", Sae = "⊐", xae = "⊒", Eae = "⊐", $ae = "⊒", Cae = "□", Iae = "□", Tae = "⊓", Aae = "⊏", Oae = "⊑", Dae = "⊐", Pae = "⊒", Fae = "⊔", Rae = "▪", Nae = "□", Mae = "▪", Lae = "→", qae = "𝒮", jae = "𝓈", Bae = "∖", zae = "⌣", Hae = "⋆", Vae = "⋆", Uae = "☆", Gae = "★", Wae = "ϵ", Kae = "ϕ", Zae = "¯", Jae = "⊂", Yae = "⋐", Xae = "⪽", Qae = "⫅", ece = "⊆", tce = "⫃", nce = "⫁", rce = "⫋", oce = "⊊", ice = "⪿", sce = "⥹", ace = "⊂", cce = "⋐", uce = "⊆", lce = "⫅", fce = "⊆", dce = "⊊", hce = "⫋", pce = "⫇", vce = "⫕", gce = "⫓", mce = "⪸", _ce = "≻", bce = "≽", yce = "≻", wce = "⪰", kce = "≽", Sce = "≿", xce = "⪰", Ece = "⪺", $ce = "⪶", Cce = "⋩", Ice = "≿", Tce = "∋", Ace = "∑", Oce = "∑", Dce = "♪", Pce = "¹", Fce = "²", Rce = "³", Nce = "⊃", Mce = "⋑", Lce = "⪾", qce = "⫘", jce = "⫆", Bce = "⊇", zce = "⫄", Hce = "⊃", Vce = "⊇", Uce = "⟉", Gce = "⫗", Wce = "⥻", Kce = "⫂", Zce = "⫌", Jce = "⊋", Yce = "⫀", Xce = "⊃", Qce = "⋑", eue = "⊇", tue = "⫆", nue = "⊋", rue = "⫌", oue = "⫈", iue = "⫔", sue = "⫖", aue = "⤦", cue = "↙", uue = "⇙", lue = "↙", fue = "⤪", due = "ß", hue = "	", pue = "⌖", vue = "Τ", gue = "τ", mue = "⎴", _ue = "Ť", bue = "ť", yue = "Ţ", wue = "ţ", kue = "Т", Sue = "т", xue = "⃛", Eue = "⌕", $ue = "𝔗", Cue = "𝔱", Iue = "∴", Tue = "∴", Aue = "∴", Oue = "Θ", Due = "θ", Pue = "ϑ", Fue = "ϑ", Rue = "≈", Nue = "∼", Mue = "  ", Lue = " ", que = " ", jue = "≈", Bue = "∼", zue = "Þ", Hue = "þ", Vue = "˜", Uue = "∼", Gue = "≃", Wue = "≅", Kue = "≈", Zue = "⨱", Jue = "⊠", Yue = "×", Xue = "⨰", Que = "∭", ele = "⤨", tle = "⌶", nle = "⫱", rle = "⊤", ole = "𝕋", ile = "𝕥", sle = "⫚", ale = "⤩", cle = "‴", ule = "™", lle = "™", fle = "▵", dle = "▿", hle = "◃", ple = "⊴", vle = "≜", gle = "▹", mle = "⊵", _le = "◬", ble = "≜", yle = "⨺", wle = "⃛", kle = "⨹", Sle = "⧍", xle = "⨻", Ele = "⏢", $le = "𝒯", Cle = "𝓉", Ile = "Ц", Tle = "ц", Ale = "Ћ", Ole = "ћ", Dle = "Ŧ", Ple = "ŧ", Fle = "≬", Rle = "↞", Nle = "↠", Mle = "Ú", Lle = "ú", qle = "↑", jle = "↟", Ble = "⇑", zle = "⥉", Hle = "Ў", Vle = "ў", Ule = "Ŭ", Gle = "ŭ", Wle = "Û", Kle = "û", Zle = "У", Jle = "у", Yle = "⇅", Xle = "Ű", Qle = "ű", efe = "⥮", tfe = "⥾", nfe = "𝔘", rfe = "𝔲", ofe = "Ù", ife = "ù", sfe = "⥣", afe = "↿", cfe = "↾", ufe = "▀", lfe = "⌜", ffe = "⌜", dfe = "⌏", hfe = "◸", pfe = "Ū", vfe = "ū", gfe = "¨", mfe = "_", _fe = "⏟", bfe = "⎵", yfe = "⏝", wfe = "⋃", kfe = "⊎", Sfe = "Ų", xfe = "ų", Efe = "𝕌", $fe = "𝕦", Cfe = "⤒", Ife = "↑", Tfe = "↑", Afe = "⇑", Ofe = "⇅", Dfe = "↕", Pfe = "↕", Ffe = "⇕", Rfe = "⥮", Nfe = "↿", Mfe = "↾", Lfe = "⊎", qfe = "↖", jfe = "↗", Bfe = "υ", zfe = "ϒ", Hfe = "ϒ", Vfe = "Υ", Ufe = "υ", Gfe = "↥", Wfe = "⊥", Kfe = "⇈", Zfe = "⌝", Jfe = "⌝", Yfe = "⌎", Xfe = "Ů", Qfe = "ů", ede = "◹", tde = "𝒰", nde = "𝓊", rde = "⋰", ode = "Ũ", ide = "ũ", sde = "▵", ade = "▴", cde = "⇈", ude = "Ü", lde = "ü", fde = "⦧", dde = "⦜", hde = "ϵ", pde = "ϰ", vde = "∅", gde = "ϕ", mde = "ϖ", _de = "∝", bde = "↕", yde = "⇕", wde = "ϱ", kde = "ς", Sde = "⊊︀", xde = "⫋︀", Ede = "⊋︀", $de = "⫌︀", Cde = "ϑ", Ide = "⊲", Tde = "⊳", Ade = "⫨", Ode = "⫫", Dde = "⫩", Pde = "В", Fde = "в", Rde = "⊢", Nde = "⊨", Mde = "⊩", Lde = "⊫", qde = "⫦", jde = "⊻", Bde = "∨", zde = "⋁", Hde = "≚", Vde = "⋮", Ude = "|", Gde = "‖", Wde = "|", Kde = "‖", Zde = "∣", Jde = "|", Yde = "❘", Xde = "≀", Qde = " ", ehe = "𝔙", the = "𝔳", nhe = "⊲", rhe = "⊂⃒", ohe = "⊃⃒", ihe = "𝕍", she = "𝕧", ahe = "∝", che = "⊳", uhe = "𝒱", lhe = "𝓋", fhe = "⫋︀", dhe = "⊊︀", hhe = "⫌︀", phe = "⊋︀", vhe = "⊪", ghe = "⦚", mhe = "Ŵ", _he = "ŵ", bhe = "⩟", yhe = "∧", whe = "⋀", khe = "≙", She = "℘", xhe = "𝔚", Ehe = "𝔴", $he = "𝕎", Che = "𝕨", Ihe = "℘", The = "≀", Ahe = "≀", Ohe = "𝒲", Dhe = "𝓌", Phe = "⋂", Fhe = "◯", Rhe = "⋃", Nhe = "▽", Mhe = "𝔛", Lhe = "𝔵", qhe = "⟷", jhe = "⟺", Bhe = "Ξ", zhe = "ξ", Hhe = "⟵", Vhe = "⟸", Uhe = "⟼", Ghe = "⋻", Whe = "⨀", Khe = "𝕏", Zhe = "𝕩", Jhe = "⨁", Yhe = "⨂", Xhe = "⟶", Qhe = "⟹", epe = "𝒳", tpe = "𝓍", npe = "⨆", rpe = "⨄", ope = "△", ipe = "⋁", spe = "⋀", ape = "Ý", cpe = "ý", upe = "Я", lpe = "я", fpe = "Ŷ", dpe = "ŷ", hpe = "Ы", ppe = "ы", vpe = "¥", gpe = "𝔜", mpe = "𝔶", _pe = "Ї", bpe = "ї", ype = "𝕐", wpe = "𝕪", kpe = "𝒴", Spe = "𝓎", xpe = "Ю", Epe = "ю", $pe = "ÿ", Cpe = "Ÿ", Ipe = "Ź", Tpe = "ź", Ape = "Ž", Ope = "ž", Dpe = "З", Ppe = "з", Fpe = "Ż", Rpe = "ż", Npe = "ℨ", Mpe = "​", Lpe = "Ζ", qpe = "ζ", jpe = "𝔷", Bpe = "ℨ", zpe = "Ж", Hpe = "ж", Vpe = "⇝", Upe = "𝕫", Gpe = "ℤ", Wpe = "𝒵", Kpe = "𝓏", Zpe = "‍", Jpe = "‌", Ype = {
  Aacute: PR,
  aacute: FR,
  Abreve: RR,
  abreve: NR,
  ac: MR,
  acd: LR,
  acE: qR,
  Acirc: jR,
  acirc: BR,
  acute: zR,
  Acy: HR,
  acy: VR,
  AElig: UR,
  aelig: GR,
  af: WR,
  Afr: KR,
  afr: ZR,
  Agrave: JR,
  agrave: YR,
  alefsym: XR,
  aleph: QR,
  Alpha: eN,
  alpha: tN,
  Amacr: nN,
  amacr: rN,
  amalg: oN,
  amp: iN,
  AMP: sN,
  andand: aN,
  And: cN,
  and: uN,
  andd: lN,
  andslope: fN,
  andv: dN,
  ang: hN,
  ange: pN,
  angle: vN,
  angmsdaa: gN,
  angmsdab: mN,
  angmsdac: _N,
  angmsdad: bN,
  angmsdae: yN,
  angmsdaf: wN,
  angmsdag: kN,
  angmsdah: SN,
  angmsd: xN,
  angrt: EN,
  angrtvb: $N,
  angrtvbd: CN,
  angsph: IN,
  angst: TN,
  angzarr: AN,
  Aogon: ON,
  aogon: DN,
  Aopf: PN,
  aopf: FN,
  apacir: RN,
  ap: NN,
  apE: MN,
  ape: LN,
  apid: qN,
  apos: jN,
  ApplyFunction: BN,
  approx: zN,
  approxeq: HN,
  Aring: VN,
  aring: UN,
  Ascr: GN,
  ascr: WN,
  Assign: KN,
  ast: ZN,
  asymp: JN,
  asympeq: YN,
  Atilde: XN,
  atilde: QN,
  Auml: eM,
  auml: tM,
  awconint: nM,
  awint: rM,
  backcong: oM,
  backepsilon: iM,
  backprime: sM,
  backsim: aM,
  backsimeq: cM,
  Backslash: uM,
  Barv: lM,
  barvee: fM,
  barwed: dM,
  Barwed: hM,
  barwedge: pM,
  bbrk: vM,
  bbrktbrk: gM,
  bcong: mM,
  Bcy: _M,
  bcy: bM,
  bdquo: yM,
  becaus: wM,
  because: kM,
  Because: SM,
  bemptyv: xM,
  bepsi: EM,
  bernou: $M,
  Bernoullis: CM,
  Beta: IM,
  beta: TM,
  beth: AM,
  between: OM,
  Bfr: DM,
  bfr: PM,
  bigcap: FM,
  bigcirc: RM,
  bigcup: NM,
  bigodot: MM,
  bigoplus: LM,
  bigotimes: qM,
  bigsqcup: jM,
  bigstar: BM,
  bigtriangledown: zM,
  bigtriangleup: HM,
  biguplus: VM,
  bigvee: UM,
  bigwedge: WM,
  bkarow: KM,
  blacklozenge: ZM,
  blacksquare: JM,
  blacktriangle: YM,
  blacktriangledown: XM,
  blacktriangleleft: QM,
  blacktriangleright: e8,
  blank: t8,
  blk12: n8,
  blk14: r8,
  blk34: o8,
  block: i8,
  bne: s8,
  bnequiv: a8,
  bNot: c8,
  bnot: u8,
  Bopf: l8,
  bopf: f8,
  bot: d8,
  bottom: h8,
  bowtie: p8,
  boxbox: v8,
  boxdl: g8,
  boxdL: m8,
  boxDl: _8,
  boxDL: b8,
  boxdr: y8,
  boxdR: w8,
  boxDr: k8,
  boxDR: S8,
  boxh: x8,
  boxH: E8,
  boxhd: $8,
  boxHd: C8,
  boxhD: I8,
  boxHD: T8,
  boxhu: A8,
  boxHu: O8,
  boxhU: D8,
  boxHU: P8,
  boxminus: F8,
  boxplus: R8,
  boxtimes: N8,
  boxul: M8,
  boxuL: L8,
  boxUl: q8,
  boxUL: j8,
  boxur: B8,
  boxuR: z8,
  boxUr: H8,
  boxUR: V8,
  boxv: U8,
  boxV: G8,
  boxvh: W8,
  boxvH: K8,
  boxVh: Z8,
  boxVH: J8,
  boxvl: Y8,
  boxvL: X8,
  boxVl: Q8,
  boxVL: eL,
  boxvr: tL,
  boxvR: nL,
  boxVr: rL,
  boxVR: oL,
  bprime: iL,
  breve: sL,
  Breve: aL,
  brvbar: cL,
  bscr: uL,
  Bscr: lL,
  bsemi: fL,
  bsim: dL,
  bsime: hL,
  bsolb: pL,
  bsol: vL,
  bsolhsub: gL,
  bull: mL,
  bullet: _L,
  bump: bL,
  bumpE: yL,
  bumpe: wL,
  Bumpeq: kL,
  bumpeq: SL,
  Cacute: xL,
  cacute: EL,
  capand: $L,
  capbrcup: CL,
  capcap: IL,
  cap: TL,
  Cap: AL,
  capcup: OL,
  capdot: DL,
  CapitalDifferentialD: PL,
  caps: FL,
  caret: RL,
  caron: NL,
  Cayleys: ML,
  ccaps: LL,
  Ccaron: qL,
  ccaron: jL,
  Ccedil: BL,
  ccedil: zL,
  Ccirc: HL,
  ccirc: VL,
  Cconint: UL,
  ccups: GL,
  ccupssm: WL,
  Cdot: KL,
  cdot: ZL,
  cedil: JL,
  Cedilla: YL,
  cemptyv: XL,
  cent: QL,
  centerdot: e6,
  CenterDot: t6,
  cfr: n6,
  Cfr: r6,
  CHcy: o6,
  chcy: i6,
  check: s6,
  checkmark: a6,
  Chi: c6,
  chi: u6,
  circ: l6,
  circeq: f6,
  circlearrowleft: d6,
  circlearrowright: h6,
  circledast: p6,
  circledcirc: v6,
  circleddash: g6,
  CircleDot: m6,
  circledR: _6,
  circledS: b6,
  CircleMinus: y6,
  CirclePlus: w6,
  CircleTimes: k6,
  cir: S6,
  cirE: x6,
  cire: E6,
  cirfnint: $6,
  cirmid: C6,
  cirscir: I6,
  ClockwiseContourIntegral: T6,
  CloseCurlyDoubleQuote: A6,
  CloseCurlyQuote: O6,
  clubs: D6,
  clubsuit: P6,
  colon: F6,
  Colon: R6,
  Colone: N6,
  colone: M6,
  coloneq: L6,
  comma: q6,
  commat: j6,
  comp: B6,
  compfn: z6,
  complement: H6,
  complexes: V6,
  cong: U6,
  congdot: G6,
  Congruent: W6,
  conint: K6,
  Conint: Z6,
  ContourIntegral: J6,
  copf: Y6,
  Copf: X6,
  coprod: Q6,
  Coproduct: eq,
  copy: tq,
  COPY: nq,
  copysr: rq,
  CounterClockwiseContourIntegral: oq,
  crarr: iq,
  cross: sq,
  Cross: aq,
  Cscr: cq,
  cscr: uq,
  csub: lq,
  csube: fq,
  csup: dq,
  csupe: hq,
  ctdot: pq,
  cudarrl: vq,
  cudarrr: gq,
  cuepr: mq,
  cuesc: _q,
  cularr: bq,
  cularrp: yq,
  cupbrcap: wq,
  cupcap: kq,
  CupCap: Sq,
  cup: xq,
  Cup: Eq,
  cupcup: $q,
  cupdot: Cq,
  cupor: Iq,
  cups: Tq,
  curarr: Aq,
  curarrm: Oq,
  curlyeqprec: Dq,
  curlyeqsucc: Pq,
  curlyvee: Fq,
  curlywedge: Rq,
  curren: Nq,
  curvearrowleft: Mq,
  curvearrowright: Lq,
  cuvee: qq,
  cuwed: jq,
  cwconint: Bq,
  cwint: zq,
  cylcty: Hq,
  dagger: Vq,
  Dagger: Uq,
  daleth: Gq,
  darr: Wq,
  Darr: Kq,
  dArr: Zq,
  dash: Jq,
  Dashv: Yq,
  dashv: Xq,
  dbkarow: Qq,
  dblac: ej,
  Dcaron: tj,
  dcaron: nj,
  Dcy: rj,
  dcy: oj,
  ddagger: ij,
  ddarr: sj,
  DD: aj,
  dd: cj,
  DDotrahd: uj,
  ddotseq: lj,
  deg: fj,
  Del: dj,
  Delta: hj,
  delta: pj,
  demptyv: vj,
  dfisht: gj,
  Dfr: mj,
  dfr: _j,
  dHar: bj,
  dharl: yj,
  dharr: wj,
  DiacriticalAcute: kj,
  DiacriticalDot: Sj,
  DiacriticalDoubleAcute: xj,
  DiacriticalGrave: Ej,
  DiacriticalTilde: $j,
  diam: Cj,
  diamond: Ij,
  Diamond: Tj,
  diamondsuit: Aj,
  diams: Oj,
  die: Dj,
  DifferentialD: Pj,
  digamma: Fj,
  disin: Rj,
  div: Nj,
  divide: Mj,
  divideontimes: Lj,
  divonx: qj,
  DJcy: jj,
  djcy: Bj,
  dlcorn: zj,
  dlcrop: Hj,
  dollar: Vj,
  Dopf: Uj,
  dopf: Gj,
  Dot: Wj,
  dot: Kj,
  DotDot: Zj,
  doteq: Jj,
  doteqdot: Yj,
  DotEqual: Xj,
  dotminus: Qj,
  dotplus: e4,
  dotsquare: t4,
  doublebarwedge: n4,
  DoubleContourIntegral: r4,
  DoubleDot: o4,
  DoubleDownArrow: i4,
  DoubleLeftArrow: s4,
  DoubleLeftRightArrow: a4,
  DoubleLeftTee: c4,
  DoubleLongLeftArrow: u4,
  DoubleLongLeftRightArrow: l4,
  DoubleLongRightArrow: f4,
  DoubleRightArrow: d4,
  DoubleRightTee: h4,
  DoubleUpArrow: p4,
  DoubleUpDownArrow: v4,
  DoubleVerticalBar: g4,
  DownArrowBar: m4,
  downarrow: _4,
  DownArrow: b4,
  Downarrow: y4,
  DownArrowUpArrow: w4,
  DownBreve: k4,
  downdownarrows: S4,
  downharpoonleft: x4,
  downharpoonright: E4,
  DownLeftRightVector: $4,
  DownLeftTeeVector: C4,
  DownLeftVectorBar: I4,
  DownLeftVector: T4,
  DownRightTeeVector: A4,
  DownRightVectorBar: O4,
  DownRightVector: D4,
  DownTeeArrow: P4,
  DownTee: F4,
  drbkarow: R4,
  drcorn: N4,
  drcrop: M4,
  Dscr: L4,
  dscr: q4,
  DScy: j4,
  dscy: B4,
  dsol: z4,
  Dstrok: H4,
  dstrok: V4,
  dtdot: U4,
  dtri: G4,
  dtrif: W4,
  duarr: K4,
  duhar: Z4,
  dwangle: J4,
  DZcy: Y4,
  dzcy: X4,
  dzigrarr: Q4,
  Eacute: eB,
  eacute: tB,
  easter: nB,
  Ecaron: rB,
  ecaron: oB,
  Ecirc: iB,
  ecirc: sB,
  ecir: aB,
  ecolon: cB,
  Ecy: uB,
  ecy: lB,
  eDDot: fB,
  Edot: dB,
  edot: hB,
  eDot: pB,
  ee: vB,
  efDot: gB,
  Efr: mB,
  efr: _B,
  eg: bB,
  Egrave: yB,
  egrave: wB,
  egs: kB,
  egsdot: SB,
  el: xB,
  Element: EB,
  elinters: $B,
  ell: CB,
  els: IB,
  elsdot: TB,
  Emacr: AB,
  emacr: OB,
  empty: DB,
  emptyset: PB,
  EmptySmallSquare: FB,
  emptyv: RB,
  EmptyVerySmallSquare: NB,
  emsp13: MB,
  emsp14: LB,
  emsp: qB,
  ENG: jB,
  eng: BB,
  ensp: zB,
  Eogon: HB,
  eogon: VB,
  Eopf: UB,
  eopf: GB,
  epar: WB,
  eparsl: KB,
  eplus: ZB,
  epsi: JB,
  Epsilon: YB,
  epsilon: XB,
  epsiv: QB,
  eqcirc: ez,
  eqcolon: tz,
  eqsim: nz,
  eqslantgtr: rz,
  eqslantless: oz,
  Equal: iz,
  equals: sz,
  EqualTilde: az,
  equest: cz,
  Equilibrium: uz,
  equiv: lz,
  equivDD: fz,
  eqvparsl: dz,
  erarr: hz,
  erDot: pz,
  escr: vz,
  Escr: gz,
  esdot: mz,
  Esim: _z,
  esim: bz,
  Eta: yz,
  eta: wz,
  ETH: kz,
  eth: Sz,
  Euml: xz,
  euml: Ez,
  euro: $z,
  excl: Cz,
  exist: Iz,
  Exists: Tz,
  expectation: Az,
  exponentiale: Oz,
  ExponentialE: Dz,
  fallingdotseq: Pz,
  Fcy: Fz,
  fcy: Rz,
  female: Nz,
  ffilig: Mz,
  fflig: Lz,
  ffllig: qz,
  Ffr: jz,
  ffr: Bz,
  filig: zz,
  FilledSmallSquare: Hz,
  FilledVerySmallSquare: Vz,
  fjlig: Uz,
  flat: Gz,
  fllig: Wz,
  fltns: Kz,
  fnof: Zz,
  Fopf: Jz,
  fopf: Yz,
  forall: Xz,
  ForAll: Qz,
  fork: e5,
  forkv: t5,
  Fouriertrf: n5,
  fpartint: r5,
  frac12: o5,
  frac13: i5,
  frac14: s5,
  frac15: a5,
  frac16: c5,
  frac18: u5,
  frac23: l5,
  frac25: f5,
  frac34: d5,
  frac35: h5,
  frac38: p5,
  frac45: v5,
  frac56: g5,
  frac58: m5,
  frac78: _5,
  frasl: b5,
  frown: y5,
  fscr: w5,
  Fscr: k5,
  gacute: S5,
  Gamma: x5,
  gamma: E5,
  Gammad: $5,
  gammad: C5,
  gap: I5,
  Gbreve: T5,
  gbreve: A5,
  Gcedil: O5,
  Gcirc: D5,
  gcirc: P5,
  Gcy: F5,
  gcy: R5,
  Gdot: N5,
  gdot: M5,
  ge: L5,
  gE: q5,
  gEl: j5,
  gel: B5,
  geq: z5,
  geqq: H5,
  geqslant: V5,
  gescc: U5,
  ges: G5,
  gesdot: W5,
  gesdoto: K5,
  gesdotol: Z5,
  gesl: J5,
  gesles: Y5,
  Gfr: X5,
  gfr: Q5,
  gg: e7,
  Gg: t7,
  ggg: n7,
  gimel: r7,
  GJcy: o7,
  gjcy: i7,
  gla: s7,
  gl: a7,
  glE: c7,
  glj: u7,
  gnap: l7,
  gnapprox: f7,
  gne: d7,
  gnE: h7,
  gneq: p7,
  gneqq: v7,
  gnsim: g7,
  Gopf: m7,
  gopf: _7,
  grave: b7,
  GreaterEqual: y7,
  GreaterEqualLess: w7,
  GreaterFullEqual: k7,
  GreaterGreater: S7,
  GreaterLess: x7,
  GreaterSlantEqual: E7,
  GreaterTilde: $7,
  Gscr: C7,
  gscr: I7,
  gsim: T7,
  gsime: A7,
  gsiml: O7,
  gtcc: D7,
  gtcir: P7,
  gt: F7,
  GT: R7,
  Gt: N7,
  gtdot: M7,
  gtlPar: L7,
  gtquest: q7,
  gtrapprox: j7,
  gtrarr: B7,
  gtrdot: z7,
  gtreqless: H7,
  gtreqqless: V7,
  gtrless: U7,
  gtrsim: G7,
  gvertneqq: W7,
  gvnE: K7,
  Hacek: Z7,
  hairsp: J7,
  half: Y7,
  hamilt: X7,
  HARDcy: Q7,
  hardcy: e9,
  harrcir: t9,
  harr: n9,
  hArr: r9,
  harrw: o9,
  Hat: i9,
  hbar: s9,
  Hcirc: a9,
  hcirc: c9,
  hearts: u9,
  heartsuit: l9,
  hellip: f9,
  hercon: d9,
  hfr: h9,
  Hfr: p9,
  HilbertSpace: v9,
  hksearow: g9,
  hkswarow: m9,
  hoarr: _9,
  homtht: b9,
  hookleftarrow: y9,
  hookrightarrow: w9,
  hopf: k9,
  Hopf: S9,
  horbar: x9,
  HorizontalLine: E9,
  hscr: $9,
  Hscr: C9,
  hslash: I9,
  Hstrok: T9,
  hstrok: A9,
  HumpDownHump: O9,
  HumpEqual: D9,
  hybull: P9,
  hyphen: F9,
  Iacute: R9,
  iacute: N9,
  ic: M9,
  Icirc: L9,
  icirc: q9,
  Icy: j9,
  icy: B9,
  Idot: z9,
  IEcy: H9,
  iecy: V9,
  iexcl: U9,
  iff: G9,
  ifr: W9,
  Ifr: K9,
  Igrave: Z9,
  igrave: J9,
  ii: Y9,
  iiiint: X9,
  iiint: Q9,
  iinfin: eH,
  iiota: tH,
  IJlig: nH,
  ijlig: rH,
  Imacr: oH,
  imacr: iH,
  image: sH,
  ImaginaryI: aH,
  imagline: cH,
  imagpart: uH,
  imath: lH,
  Im: fH,
  imof: dH,
  imped: hH,
  Implies: pH,
  incare: vH,
  in: "∈",
  infin: gH,
  infintie: mH,
  inodot: _H,
  intcal: bH,
  int: yH,
  Int: wH,
  integers: kH,
  Integral: SH,
  intercal: xH,
  Intersection: EH,
  intlarhk: $H,
  intprod: CH,
  InvisibleComma: IH,
  InvisibleTimes: TH,
  IOcy: AH,
  iocy: OH,
  Iogon: DH,
  iogon: PH,
  Iopf: FH,
  iopf: RH,
  Iota: NH,
  iota: MH,
  iprod: LH,
  iquest: qH,
  iscr: jH,
  Iscr: BH,
  isin: zH,
  isindot: HH,
  isinE: VH,
  isins: UH,
  isinsv: GH,
  isinv: WH,
  it: KH,
  Itilde: ZH,
  itilde: JH,
  Iukcy: YH,
  iukcy: XH,
  Iuml: QH,
  iuml: eV,
  Jcirc: tV,
  jcirc: nV,
  Jcy: rV,
  jcy: oV,
  Jfr: iV,
  jfr: sV,
  jmath: aV,
  Jopf: cV,
  jopf: uV,
  Jscr: lV,
  jscr: fV,
  Jsercy: dV,
  jsercy: hV,
  Jukcy: pV,
  jukcy: vV,
  Kappa: gV,
  kappa: mV,
  kappav: _V,
  Kcedil: bV,
  kcedil: yV,
  Kcy: wV,
  kcy: kV,
  Kfr: SV,
  kfr: xV,
  kgreen: EV,
  KHcy: $V,
  khcy: CV,
  KJcy: IV,
  kjcy: TV,
  Kopf: AV,
  kopf: OV,
  Kscr: DV,
  kscr: PV,
  lAarr: FV,
  Lacute: RV,
  lacute: NV,
  laemptyv: MV,
  lagran: LV,
  Lambda: qV,
  lambda: jV,
  lang: BV,
  Lang: zV,
  langd: HV,
  langle: VV,
  lap: UV,
  Laplacetrf: GV,
  laquo: WV,
  larrb: KV,
  larrbfs: ZV,
  larr: JV,
  Larr: YV,
  lArr: XV,
  larrfs: QV,
  larrhk: eU,
  larrlp: tU,
  larrpl: nU,
  larrsim: rU,
  larrtl: oU,
  latail: iU,
  lAtail: sU,
  lat: aU,
  late: cU,
  lates: uU,
  lbarr: lU,
  lBarr: fU,
  lbbrk: dU,
  lbrace: hU,
  lbrack: pU,
  lbrke: vU,
  lbrksld: gU,
  lbrkslu: mU,
  Lcaron: _U,
  lcaron: bU,
  Lcedil: yU,
  lcedil: wU,
  lceil: kU,
  lcub: SU,
  Lcy: xU,
  lcy: EU,
  ldca: $U,
  ldquo: CU,
  ldquor: IU,
  ldrdhar: TU,
  ldrushar: AU,
  ldsh: OU,
  le: DU,
  lE: PU,
  LeftAngleBracket: FU,
  LeftArrowBar: RU,
  leftarrow: NU,
  LeftArrow: MU,
  Leftarrow: LU,
  LeftArrowRightArrow: qU,
  leftarrowtail: jU,
  LeftCeiling: BU,
  LeftDoubleBracket: zU,
  LeftDownTeeVector: HU,
  LeftDownVectorBar: VU,
  LeftDownVector: UU,
  LeftFloor: GU,
  leftharpoondown: WU,
  leftharpoonup: KU,
  leftleftarrows: ZU,
  leftrightarrow: JU,
  LeftRightArrow: YU,
  Leftrightarrow: XU,
  leftrightarrows: QU,
  leftrightharpoons: eG,
  leftrightsquigarrow: tG,
  LeftRightVector: nG,
  LeftTeeArrow: rG,
  LeftTee: oG,
  LeftTeeVector: iG,
  leftthreetimes: sG,
  LeftTriangleBar: aG,
  LeftTriangle: cG,
  LeftTriangleEqual: uG,
  LeftUpDownVector: lG,
  LeftUpTeeVector: fG,
  LeftUpVectorBar: dG,
  LeftUpVector: hG,
  LeftVectorBar: pG,
  LeftVector: vG,
  lEg: gG,
  leg: mG,
  leq: _G,
  leqq: bG,
  leqslant: yG,
  lescc: wG,
  les: kG,
  lesdot: SG,
  lesdoto: xG,
  lesdotor: EG,
  lesg: $G,
  lesges: CG,
  lessapprox: IG,
  lessdot: TG,
  lesseqgtr: AG,
  lesseqqgtr: OG,
  LessEqualGreater: DG,
  LessFullEqual: PG,
  LessGreater: FG,
  lessgtr: RG,
  LessLess: NG,
  lesssim: MG,
  LessSlantEqual: LG,
  LessTilde: qG,
  lfisht: jG,
  lfloor: BG,
  Lfr: zG,
  lfr: HG,
  lg: VG,
  lgE: UG,
  lHar: GG,
  lhard: WG,
  lharu: KG,
  lharul: ZG,
  lhblk: JG,
  LJcy: YG,
  ljcy: XG,
  llarr: QG,
  ll: eW,
  Ll: tW,
  llcorner: nW,
  Lleftarrow: rW,
  llhard: oW,
  lltri: iW,
  Lmidot: sW,
  lmidot: aW,
  lmoustache: cW,
  lmoust: uW,
  lnap: lW,
  lnapprox: fW,
  lne: dW,
  lnE: hW,
  lneq: pW,
  lneqq: vW,
  lnsim: gW,
  loang: mW,
  loarr: _W,
  lobrk: bW,
  longleftarrow: yW,
  LongLeftArrow: wW,
  Longleftarrow: kW,
  longleftrightarrow: SW,
  LongLeftRightArrow: xW,
  Longleftrightarrow: EW,
  longmapsto: $W,
  longrightarrow: CW,
  LongRightArrow: IW,
  Longrightarrow: TW,
  looparrowleft: AW,
  looparrowright: OW,
  lopar: DW,
  Lopf: PW,
  lopf: FW,
  loplus: RW,
  lotimes: NW,
  lowast: MW,
  lowbar: LW,
  LowerLeftArrow: qW,
  LowerRightArrow: jW,
  loz: BW,
  lozenge: zW,
  lozf: HW,
  lpar: VW,
  lparlt: UW,
  lrarr: GW,
  lrcorner: WW,
  lrhar: KW,
  lrhard: ZW,
  lrm: JW,
  lrtri: YW,
  lsaquo: XW,
  lscr: QW,
  Lscr: eK,
  lsh: tK,
  Lsh: nK,
  lsim: rK,
  lsime: oK,
  lsimg: iK,
  lsqb: sK,
  lsquo: aK,
  lsquor: cK,
  Lstrok: uK,
  lstrok: lK,
  ltcc: fK,
  ltcir: dK,
  lt: hK,
  LT: pK,
  Lt: vK,
  ltdot: gK,
  lthree: mK,
  ltimes: _K,
  ltlarr: bK,
  ltquest: yK,
  ltri: wK,
  ltrie: kK,
  ltrif: SK,
  ltrPar: xK,
  lurdshar: EK,
  luruhar: $K,
  lvertneqq: CK,
  lvnE: IK,
  macr: TK,
  male: AK,
  malt: OK,
  maltese: DK,
  Map: "⤅",
  map: PK,
  mapsto: FK,
  mapstodown: RK,
  mapstoleft: NK,
  mapstoup: MK,
  marker: LK,
  mcomma: qK,
  Mcy: jK,
  mcy: BK,
  mdash: zK,
  mDDot: HK,
  measuredangle: VK,
  MediumSpace: UK,
  Mellintrf: GK,
  Mfr: WK,
  mfr: KK,
  mho: ZK,
  micro: JK,
  midast: YK,
  midcir: XK,
  mid: QK,
  middot: eZ,
  minusb: tZ,
  minus: nZ,
  minusd: rZ,
  minusdu: oZ,
  MinusPlus: iZ,
  mlcp: sZ,
  mldr: aZ,
  mnplus: cZ,
  models: uZ,
  Mopf: lZ,
  mopf: fZ,
  mp: dZ,
  mscr: hZ,
  Mscr: pZ,
  mstpos: vZ,
  Mu: gZ,
  mu: mZ,
  multimap: _Z,
  mumap: bZ,
  nabla: yZ,
  Nacute: wZ,
  nacute: kZ,
  nang: SZ,
  nap: xZ,
  napE: EZ,
  napid: $Z,
  napos: CZ,
  napprox: IZ,
  natural: TZ,
  naturals: AZ,
  natur: OZ,
  nbsp: DZ,
  nbump: PZ,
  nbumpe: FZ,
  ncap: RZ,
  Ncaron: NZ,
  ncaron: MZ,
  Ncedil: LZ,
  ncedil: qZ,
  ncong: jZ,
  ncongdot: BZ,
  ncup: zZ,
  Ncy: HZ,
  ncy: VZ,
  ndash: UZ,
  nearhk: GZ,
  nearr: WZ,
  neArr: KZ,
  nearrow: ZZ,
  ne: JZ,
  nedot: YZ,
  NegativeMediumSpace: XZ,
  NegativeThickSpace: QZ,
  NegativeThinSpace: eJ,
  NegativeVeryThinSpace: tJ,
  nequiv: nJ,
  nesear: rJ,
  nesim: oJ,
  NestedGreaterGreater: iJ,
  NestedLessLess: sJ,
  NewLine: aJ,
  nexist: cJ,
  nexists: uJ,
  Nfr: lJ,
  nfr: fJ,
  ngE: dJ,
  nge: hJ,
  ngeq: pJ,
  ngeqq: vJ,
  ngeqslant: gJ,
  nges: mJ,
  nGg: _J,
  ngsim: bJ,
  nGt: yJ,
  ngt: wJ,
  ngtr: kJ,
  nGtv: SJ,
  nharr: xJ,
  nhArr: EJ,
  nhpar: $J,
  ni: CJ,
  nis: IJ,
  nisd: TJ,
  niv: AJ,
  NJcy: OJ,
  njcy: DJ,
  nlarr: PJ,
  nlArr: FJ,
  nldr: RJ,
  nlE: NJ,
  nle: MJ,
  nleftarrow: LJ,
  nLeftarrow: qJ,
  nleftrightarrow: jJ,
  nLeftrightarrow: BJ,
  nleq: zJ,
  nleqq: HJ,
  nleqslant: VJ,
  nles: UJ,
  nless: GJ,
  nLl: WJ,
  nlsim: KJ,
  nLt: ZJ,
  nlt: JJ,
  nltri: YJ,
  nltrie: XJ,
  nLtv: QJ,
  nmid: eY,
  NoBreak: tY,
  NonBreakingSpace: nY,
  nopf: rY,
  Nopf: oY,
  Not: iY,
  not: sY,
  NotCongruent: aY,
  NotCupCap: cY,
  NotDoubleVerticalBar: uY,
  NotElement: lY,
  NotEqual: fY,
  NotEqualTilde: dY,
  NotExists: hY,
  NotGreater: pY,
  NotGreaterEqual: vY,
  NotGreaterFullEqual: gY,
  NotGreaterGreater: mY,
  NotGreaterLess: _Y,
  NotGreaterSlantEqual: bY,
  NotGreaterTilde: yY,
  NotHumpDownHump: wY,
  NotHumpEqual: kY,
  notin: SY,
  notindot: xY,
  notinE: EY,
  notinva: $Y,
  notinvb: CY,
  notinvc: IY,
  NotLeftTriangleBar: TY,
  NotLeftTriangle: AY,
  NotLeftTriangleEqual: OY,
  NotLess: DY,
  NotLessEqual: PY,
  NotLessGreater: FY,
  NotLessLess: RY,
  NotLessSlantEqual: NY,
  NotLessTilde: MY,
  NotNestedGreaterGreater: LY,
  NotNestedLessLess: qY,
  notni: jY,
  notniva: BY,
  notnivb: zY,
  notnivc: HY,
  NotPrecedes: VY,
  NotPrecedesEqual: UY,
  NotPrecedesSlantEqual: GY,
  NotReverseElement: WY,
  NotRightTriangleBar: KY,
  NotRightTriangle: ZY,
  NotRightTriangleEqual: JY,
  NotSquareSubset: YY,
  NotSquareSubsetEqual: XY,
  NotSquareSuperset: QY,
  NotSquareSupersetEqual: eX,
  NotSubset: tX,
  NotSubsetEqual: nX,
  NotSucceeds: rX,
  NotSucceedsEqual: oX,
  NotSucceedsSlantEqual: iX,
  NotSucceedsTilde: sX,
  NotSuperset: aX,
  NotSupersetEqual: cX,
  NotTilde: uX,
  NotTildeEqual: lX,
  NotTildeFullEqual: fX,
  NotTildeTilde: dX,
  NotVerticalBar: hX,
  nparallel: pX,
  npar: vX,
  nparsl: gX,
  npart: mX,
  npolint: _X,
  npr: bX,
  nprcue: yX,
  nprec: wX,
  npreceq: kX,
  npre: SX,
  nrarrc: xX,
  nrarr: EX,
  nrArr: $X,
  nrarrw: CX,
  nrightarrow: IX,
  nRightarrow: TX,
  nrtri: AX,
  nrtrie: OX,
  nsc: DX,
  nsccue: PX,
  nsce: FX,
  Nscr: RX,
  nscr: NX,
  nshortmid: MX,
  nshortparallel: LX,
  nsim: qX,
  nsime: jX,
  nsimeq: BX,
  nsmid: zX,
  nspar: HX,
  nsqsube: VX,
  nsqsupe: UX,
  nsub: GX,
  nsubE: WX,
  nsube: KX,
  nsubset: ZX,
  nsubseteq: JX,
  nsubseteqq: YX,
  nsucc: XX,
  nsucceq: QX,
  nsup: eQ,
  nsupE: tQ,
  nsupe: nQ,
  nsupset: rQ,
  nsupseteq: oQ,
  nsupseteqq: iQ,
  ntgl: sQ,
  Ntilde: aQ,
  ntilde: cQ,
  ntlg: uQ,
  ntriangleleft: lQ,
  ntrianglelefteq: fQ,
  ntriangleright: dQ,
  ntrianglerighteq: hQ,
  Nu: pQ,
  nu: vQ,
  num: gQ,
  numero: mQ,
  numsp: _Q,
  nvap: bQ,
  nvdash: yQ,
  nvDash: wQ,
  nVdash: kQ,
  nVDash: SQ,
  nvge: xQ,
  nvgt: EQ,
  nvHarr: $Q,
  nvinfin: CQ,
  nvlArr: IQ,
  nvle: TQ,
  nvlt: AQ,
  nvltrie: OQ,
  nvrArr: DQ,
  nvrtrie: PQ,
  nvsim: FQ,
  nwarhk: RQ,
  nwarr: NQ,
  nwArr: MQ,
  nwarrow: LQ,
  nwnear: qQ,
  Oacute: jQ,
  oacute: BQ,
  oast: zQ,
  Ocirc: HQ,
  ocirc: VQ,
  ocir: UQ,
  Ocy: GQ,
  ocy: WQ,
  odash: KQ,
  Odblac: ZQ,
  odblac: JQ,
  odiv: YQ,
  odot: XQ,
  odsold: QQ,
  OElig: eee,
  oelig: tee,
  ofcir: nee,
  Ofr: ree,
  ofr: oee,
  ogon: iee,
  Ograve: see,
  ograve: aee,
  ogt: cee,
  ohbar: uee,
  ohm: lee,
  oint: fee,
  olarr: dee,
  olcir: hee,
  olcross: pee,
  oline: vee,
  olt: gee,
  Omacr: mee,
  omacr: _ee,
  Omega: bee,
  omega: yee,
  Omicron: wee,
  omicron: kee,
  omid: See,
  ominus: xee,
  Oopf: Eee,
  oopf: $ee,
  opar: Cee,
  OpenCurlyDoubleQuote: Iee,
  OpenCurlyQuote: Tee,
  operp: Aee,
  oplus: Oee,
  orarr: Dee,
  Or: Pee,
  or: Fee,
  ord: Ree,
  order: Nee,
  orderof: Mee,
  ordf: Lee,
  ordm: qee,
  origof: jee,
  oror: Bee,
  orslope: zee,
  orv: Hee,
  oS: Vee,
  Oscr: Uee,
  oscr: Gee,
  Oslash: Wee,
  oslash: Kee,
  osol: Zee,
  Otilde: Jee,
  otilde: Yee,
  otimesas: Xee,
  Otimes: Qee,
  otimes: ete,
  Ouml: tte,
  ouml: nte,
  ovbar: rte,
  OverBar: ote,
  OverBrace: ite,
  OverBracket: ste,
  OverParenthesis: ate,
  para: cte,
  parallel: ute,
  par: lte,
  parsim: fte,
  parsl: dte,
  part: hte,
  PartialD: pte,
  Pcy: vte,
  pcy: gte,
  percnt: mte,
  period: _te,
  permil: bte,
  perp: yte,
  pertenk: wte,
  Pfr: kte,
  pfr: Ste,
  Phi: xte,
  phi: Ete,
  phiv: $te,
  phmmat: Cte,
  phone: Ite,
  Pi: Tte,
  pi: Ate,
  pitchfork: Ote,
  piv: Dte,
  planck: Pte,
  planckh: Fte,
  plankv: Rte,
  plusacir: Nte,
  plusb: Mte,
  pluscir: Lte,
  plus: qte,
  plusdo: jte,
  plusdu: Bte,
  pluse: zte,
  PlusMinus: Hte,
  plusmn: Vte,
  plussim: Ute,
  plustwo: Gte,
  pm: Wte,
  Poincareplane: Kte,
  pointint: Zte,
  popf: Jte,
  Popf: Yte,
  pound: Xte,
  prap: Qte,
  Pr: ene,
  pr: tne,
  prcue: nne,
  precapprox: rne,
  prec: one,
  preccurlyeq: ine,
  Precedes: sne,
  PrecedesEqual: ane,
  PrecedesSlantEqual: cne,
  PrecedesTilde: une,
  preceq: lne,
  precnapprox: fne,
  precneqq: dne,
  precnsim: hne,
  pre: pne,
  prE: vne,
  precsim: gne,
  prime: mne,
  Prime: _ne,
  primes: bne,
  prnap: yne,
  prnE: wne,
  prnsim: kne,
  prod: Sne,
  Product: xne,
  profalar: Ene,
  profline: $ne,
  profsurf: Cne,
  prop: Ine,
  Proportional: Tne,
  Proportion: Ane,
  propto: One,
  prsim: Dne,
  prurel: Pne,
  Pscr: Fne,
  pscr: Rne,
  Psi: Nne,
  psi: Mne,
  puncsp: Lne,
  Qfr: qne,
  qfr: jne,
  qint: Bne,
  qopf: zne,
  Qopf: Hne,
  qprime: Vne,
  Qscr: Une,
  qscr: Gne,
  quaternions: Wne,
  quatint: Kne,
  quest: Zne,
  questeq: Jne,
  quot: Yne,
  QUOT: Xne,
  rAarr: Qne,
  race: ere,
  Racute: tre,
  racute: nre,
  radic: rre,
  raemptyv: ore,
  rang: ire,
  Rang: sre,
  rangd: are,
  range: cre,
  rangle: ure,
  raquo: lre,
  rarrap: fre,
  rarrb: dre,
  rarrbfs: hre,
  rarrc: pre,
  rarr: vre,
  Rarr: gre,
  rArr: mre,
  rarrfs: _re,
  rarrhk: bre,
  rarrlp: yre,
  rarrpl: wre,
  rarrsim: kre,
  Rarrtl: Sre,
  rarrtl: xre,
  rarrw: Ere,
  ratail: $re,
  rAtail: Cre,
  ratio: Ire,
  rationals: Tre,
  rbarr: Are,
  rBarr: Ore,
  RBarr: Dre,
  rbbrk: Pre,
  rbrace: Fre,
  rbrack: Rre,
  rbrke: Nre,
  rbrksld: Mre,
  rbrkslu: Lre,
  Rcaron: qre,
  rcaron: jre,
  Rcedil: Bre,
  rcedil: zre,
  rceil: Hre,
  rcub: Vre,
  Rcy: Ure,
  rcy: Gre,
  rdca: Wre,
  rdldhar: Kre,
  rdquo: Zre,
  rdquor: Jre,
  rdsh: Yre,
  real: Xre,
  realine: Qre,
  realpart: eoe,
  reals: toe,
  Re: noe,
  rect: roe,
  reg: ooe,
  REG: ioe,
  ReverseElement: soe,
  ReverseEquilibrium: aoe,
  ReverseUpEquilibrium: coe,
  rfisht: uoe,
  rfloor: loe,
  rfr: foe,
  Rfr: doe,
  rHar: hoe,
  rhard: poe,
  rharu: voe,
  rharul: goe,
  Rho: moe,
  rho: _oe,
  rhov: boe,
  RightAngleBracket: yoe,
  RightArrowBar: woe,
  rightarrow: koe,
  RightArrow: Soe,
  Rightarrow: xoe,
  RightArrowLeftArrow: Eoe,
  rightarrowtail: $oe,
  RightCeiling: Coe,
  RightDoubleBracket: Ioe,
  RightDownTeeVector: Toe,
  RightDownVectorBar: Aoe,
  RightDownVector: Ooe,
  RightFloor: Doe,
  rightharpoondown: Poe,
  rightharpoonup: Foe,
  rightleftarrows: Roe,
  rightleftharpoons: Noe,
  rightrightarrows: Moe,
  rightsquigarrow: Loe,
  RightTeeArrow: qoe,
  RightTee: joe,
  RightTeeVector: Boe,
  rightthreetimes: zoe,
  RightTriangleBar: Hoe,
  RightTriangle: Voe,
  RightTriangleEqual: Uoe,
  RightUpDownVector: Goe,
  RightUpTeeVector: Woe,
  RightUpVectorBar: Koe,
  RightUpVector: Zoe,
  RightVectorBar: Joe,
  RightVector: Yoe,
  ring: Xoe,
  risingdotseq: Qoe,
  rlarr: eie,
  rlhar: tie,
  rlm: nie,
  rmoustache: rie,
  rmoust: oie,
  rnmid: iie,
  roang: sie,
  roarr: aie,
  robrk: cie,
  ropar: uie,
  ropf: lie,
  Ropf: fie,
  roplus: die,
  rotimes: hie,
  RoundImplies: pie,
  rpar: vie,
  rpargt: gie,
  rppolint: mie,
  rrarr: _ie,
  Rrightarrow: bie,
  rsaquo: yie,
  rscr: wie,
  Rscr: kie,
  rsh: Sie,
  Rsh: xie,
  rsqb: Eie,
  rsquo: $ie,
  rsquor: Cie,
  rthree: Iie,
  rtimes: Tie,
  rtri: Aie,
  rtrie: Oie,
  rtrif: Die,
  rtriltri: Pie,
  RuleDelayed: Fie,
  ruluhar: Rie,
  rx: Nie,
  Sacute: Mie,
  sacute: Lie,
  sbquo: qie,
  scap: jie,
  Scaron: Bie,
  scaron: zie,
  Sc: Hie,
  sc: Vie,
  sccue: Uie,
  sce: Gie,
  scE: Wie,
  Scedil: Kie,
  scedil: Zie,
  Scirc: Jie,
  scirc: Yie,
  scnap: Xie,
  scnE: Qie,
  scnsim: ese,
  scpolint: tse,
  scsim: nse,
  Scy: rse,
  scy: ose,
  sdotb: ise,
  sdot: sse,
  sdote: ase,
  searhk: cse,
  searr: use,
  seArr: lse,
  searrow: fse,
  sect: dse,
  semi: hse,
  seswar: pse,
  setminus: vse,
  setmn: gse,
  sext: mse,
  Sfr: _se,
  sfr: bse,
  sfrown: yse,
  sharp: wse,
  SHCHcy: kse,
  shchcy: Sse,
  SHcy: xse,
  shcy: Ese,
  ShortDownArrow: $se,
  ShortLeftArrow: Cse,
  shortmid: Ise,
  shortparallel: Tse,
  ShortRightArrow: Ase,
  ShortUpArrow: Ose,
  shy: Dse,
  Sigma: Pse,
  sigma: Fse,
  sigmaf: Rse,
  sigmav: Nse,
  sim: Mse,
  simdot: Lse,
  sime: qse,
  simeq: jse,
  simg: Bse,
  simgE: zse,
  siml: Hse,
  simlE: Vse,
  simne: Use,
  simplus: Gse,
  simrarr: Wse,
  slarr: Kse,
  SmallCircle: Zse,
  smallsetminus: Jse,
  smashp: Yse,
  smeparsl: Xse,
  smid: Qse,
  smile: eae,
  smt: tae,
  smte: nae,
  smtes: rae,
  SOFTcy: oae,
  softcy: iae,
  solbar: sae,
  solb: aae,
  sol: cae,
  Sopf: uae,
  sopf: lae,
  spades: fae,
  spadesuit: dae,
  spar: hae,
  sqcap: pae,
  sqcaps: vae,
  sqcup: gae,
  sqcups: mae,
  Sqrt: _ae,
  sqsub: bae,
  sqsube: yae,
  sqsubset: wae,
  sqsubseteq: kae,
  sqsup: Sae,
  sqsupe: xae,
  sqsupset: Eae,
  sqsupseteq: $ae,
  square: Cae,
  Square: Iae,
  SquareIntersection: Tae,
  SquareSubset: Aae,
  SquareSubsetEqual: Oae,
  SquareSuperset: Dae,
  SquareSupersetEqual: Pae,
  SquareUnion: Fae,
  squarf: Rae,
  squ: Nae,
  squf: Mae,
  srarr: Lae,
  Sscr: qae,
  sscr: jae,
  ssetmn: Bae,
  ssmile: zae,
  sstarf: Hae,
  Star: Vae,
  star: Uae,
  starf: Gae,
  straightepsilon: Wae,
  straightphi: Kae,
  strns: Zae,
  sub: Jae,
  Sub: Yae,
  subdot: Xae,
  subE: Qae,
  sube: ece,
  subedot: tce,
  submult: nce,
  subnE: rce,
  subne: oce,
  subplus: ice,
  subrarr: sce,
  subset: ace,
  Subset: cce,
  subseteq: uce,
  subseteqq: lce,
  SubsetEqual: fce,
  subsetneq: dce,
  subsetneqq: hce,
  subsim: pce,
  subsub: vce,
  subsup: gce,
  succapprox: mce,
  succ: _ce,
  succcurlyeq: bce,
  Succeeds: yce,
  SucceedsEqual: wce,
  SucceedsSlantEqual: kce,
  SucceedsTilde: Sce,
  succeq: xce,
  succnapprox: Ece,
  succneqq: $ce,
  succnsim: Cce,
  succsim: Ice,
  SuchThat: Tce,
  sum: Ace,
  Sum: Oce,
  sung: Dce,
  sup1: Pce,
  sup2: Fce,
  sup3: Rce,
  sup: Nce,
  Sup: Mce,
  supdot: Lce,
  supdsub: qce,
  supE: jce,
  supe: Bce,
  supedot: zce,
  Superset: Hce,
  SupersetEqual: Vce,
  suphsol: Uce,
  suphsub: Gce,
  suplarr: Wce,
  supmult: Kce,
  supnE: Zce,
  supne: Jce,
  supplus: Yce,
  supset: Xce,
  Supset: Qce,
  supseteq: eue,
  supseteqq: tue,
  supsetneq: nue,
  supsetneqq: rue,
  supsim: oue,
  supsub: iue,
  supsup: sue,
  swarhk: aue,
  swarr: cue,
  swArr: uue,
  swarrow: lue,
  swnwar: fue,
  szlig: due,
  Tab: hue,
  target: pue,
  Tau: vue,
  tau: gue,
  tbrk: mue,
  Tcaron: _ue,
  tcaron: bue,
  Tcedil: yue,
  tcedil: wue,
  Tcy: kue,
  tcy: Sue,
  tdot: xue,
  telrec: Eue,
  Tfr: $ue,
  tfr: Cue,
  there4: Iue,
  therefore: Tue,
  Therefore: Aue,
  Theta: Oue,
  theta: Due,
  thetasym: Pue,
  thetav: Fue,
  thickapprox: Rue,
  thicksim: Nue,
  ThickSpace: Mue,
  ThinSpace: Lue,
  thinsp: que,
  thkap: jue,
  thksim: Bue,
  THORN: zue,
  thorn: Hue,
  tilde: Vue,
  Tilde: Uue,
  TildeEqual: Gue,
  TildeFullEqual: Wue,
  TildeTilde: Kue,
  timesbar: Zue,
  timesb: Jue,
  times: Yue,
  timesd: Xue,
  tint: Que,
  toea: ele,
  topbot: tle,
  topcir: nle,
  top: rle,
  Topf: ole,
  topf: ile,
  topfork: sle,
  tosa: ale,
  tprime: cle,
  trade: ule,
  TRADE: lle,
  triangle: fle,
  triangledown: dle,
  triangleleft: hle,
  trianglelefteq: ple,
  triangleq: vle,
  triangleright: gle,
  trianglerighteq: mle,
  tridot: _le,
  trie: ble,
  triminus: yle,
  TripleDot: wle,
  triplus: kle,
  trisb: Sle,
  tritime: xle,
  trpezium: Ele,
  Tscr: $le,
  tscr: Cle,
  TScy: Ile,
  tscy: Tle,
  TSHcy: Ale,
  tshcy: Ole,
  Tstrok: Dle,
  tstrok: Ple,
  twixt: Fle,
  twoheadleftarrow: Rle,
  twoheadrightarrow: Nle,
  Uacute: Mle,
  uacute: Lle,
  uarr: qle,
  Uarr: jle,
  uArr: Ble,
  Uarrocir: zle,
  Ubrcy: Hle,
  ubrcy: Vle,
  Ubreve: Ule,
  ubreve: Gle,
  Ucirc: Wle,
  ucirc: Kle,
  Ucy: Zle,
  ucy: Jle,
  udarr: Yle,
  Udblac: Xle,
  udblac: Qle,
  udhar: efe,
  ufisht: tfe,
  Ufr: nfe,
  ufr: rfe,
  Ugrave: ofe,
  ugrave: ife,
  uHar: sfe,
  uharl: afe,
  uharr: cfe,
  uhblk: ufe,
  ulcorn: lfe,
  ulcorner: ffe,
  ulcrop: dfe,
  ultri: hfe,
  Umacr: pfe,
  umacr: vfe,
  uml: gfe,
  UnderBar: mfe,
  UnderBrace: _fe,
  UnderBracket: bfe,
  UnderParenthesis: yfe,
  Union: wfe,
  UnionPlus: kfe,
  Uogon: Sfe,
  uogon: xfe,
  Uopf: Efe,
  uopf: $fe,
  UpArrowBar: Cfe,
  uparrow: Ife,
  UpArrow: Tfe,
  Uparrow: Afe,
  UpArrowDownArrow: Ofe,
  updownarrow: Dfe,
  UpDownArrow: Pfe,
  Updownarrow: Ffe,
  UpEquilibrium: Rfe,
  upharpoonleft: Nfe,
  upharpoonright: Mfe,
  uplus: Lfe,
  UpperLeftArrow: qfe,
  UpperRightArrow: jfe,
  upsi: Bfe,
  Upsi: zfe,
  upsih: Hfe,
  Upsilon: Vfe,
  upsilon: Ufe,
  UpTeeArrow: Gfe,
  UpTee: Wfe,
  upuparrows: Kfe,
  urcorn: Zfe,
  urcorner: Jfe,
  urcrop: Yfe,
  Uring: Xfe,
  uring: Qfe,
  urtri: ede,
  Uscr: tde,
  uscr: nde,
  utdot: rde,
  Utilde: ode,
  utilde: ide,
  utri: sde,
  utrif: ade,
  uuarr: cde,
  Uuml: ude,
  uuml: lde,
  uwangle: fde,
  vangrt: dde,
  varepsilon: hde,
  varkappa: pde,
  varnothing: vde,
  varphi: gde,
  varpi: mde,
  varpropto: _de,
  varr: bde,
  vArr: yde,
  varrho: wde,
  varsigma: kde,
  varsubsetneq: Sde,
  varsubsetneqq: xde,
  varsupsetneq: Ede,
  varsupsetneqq: $de,
  vartheta: Cde,
  vartriangleleft: Ide,
  vartriangleright: Tde,
  vBar: Ade,
  Vbar: Ode,
  vBarv: Dde,
  Vcy: Pde,
  vcy: Fde,
  vdash: Rde,
  vDash: Nde,
  Vdash: Mde,
  VDash: Lde,
  Vdashl: qde,
  veebar: jde,
  vee: Bde,
  Vee: zde,
  veeeq: Hde,
  vellip: Vde,
  verbar: Ude,
  Verbar: Gde,
  vert: Wde,
  Vert: Kde,
  VerticalBar: Zde,
  VerticalLine: Jde,
  VerticalSeparator: Yde,
  VerticalTilde: Xde,
  VeryThinSpace: Qde,
  Vfr: ehe,
  vfr: the,
  vltri: nhe,
  vnsub: rhe,
  vnsup: ohe,
  Vopf: ihe,
  vopf: she,
  vprop: ahe,
  vrtri: che,
  Vscr: uhe,
  vscr: lhe,
  vsubnE: fhe,
  vsubne: dhe,
  vsupnE: hhe,
  vsupne: phe,
  Vvdash: vhe,
  vzigzag: ghe,
  Wcirc: mhe,
  wcirc: _he,
  wedbar: bhe,
  wedge: yhe,
  Wedge: whe,
  wedgeq: khe,
  weierp: She,
  Wfr: xhe,
  wfr: Ehe,
  Wopf: $he,
  wopf: Che,
  wp: Ihe,
  wr: The,
  wreath: Ahe,
  Wscr: Ohe,
  wscr: Dhe,
  xcap: Phe,
  xcirc: Fhe,
  xcup: Rhe,
  xdtri: Nhe,
  Xfr: Mhe,
  xfr: Lhe,
  xharr: qhe,
  xhArr: jhe,
  Xi: Bhe,
  xi: zhe,
  xlarr: Hhe,
  xlArr: Vhe,
  xmap: Uhe,
  xnis: Ghe,
  xodot: Whe,
  Xopf: Khe,
  xopf: Zhe,
  xoplus: Jhe,
  xotime: Yhe,
  xrarr: Xhe,
  xrArr: Qhe,
  Xscr: epe,
  xscr: tpe,
  xsqcup: npe,
  xuplus: rpe,
  xutri: ope,
  xvee: ipe,
  xwedge: spe,
  Yacute: ape,
  yacute: cpe,
  YAcy: upe,
  yacy: lpe,
  Ycirc: fpe,
  ycirc: dpe,
  Ycy: hpe,
  ycy: ppe,
  yen: vpe,
  Yfr: gpe,
  yfr: mpe,
  YIcy: _pe,
  yicy: bpe,
  Yopf: ype,
  yopf: wpe,
  Yscr: kpe,
  yscr: Spe,
  YUcy: xpe,
  yucy: Epe,
  yuml: $pe,
  Yuml: Cpe,
  Zacute: Ipe,
  zacute: Tpe,
  Zcaron: Ape,
  zcaron: Ope,
  Zcy: Dpe,
  zcy: Ppe,
  Zdot: Fpe,
  zdot: Rpe,
  zeetrf: Npe,
  ZeroWidthSpace: Mpe,
  Zeta: Lpe,
  zeta: qpe,
  zfr: jpe,
  Zfr: Bpe,
  ZHcy: zpe,
  zhcy: Hpe,
  zigrarr: Vpe,
  zopf: Upe,
  Zopf: Gpe,
  Zscr: Wpe,
  zscr: Kpe,
  zwj: Zpe,
  zwnj: Jpe
};
var Gw = Ype, rd = /[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4E\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDF55-\uDF59]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDF3C-\uDF3E]|\uD806[\uDC3B\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8]|\uD809[\uDC70-\uDC74]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/, Pr = {}, Zm = {};
function Xpe(t) {
  var e, n, r = Zm[t];
  if (r)
    return r;
  for (r = Zm[t] = [], e = 0; e < 128; e++)
    n = String.fromCharCode(e), /^[0-9a-z]$/i.test(n) ? r.push(n) : r.push("%" + ("0" + e.toString(16).toUpperCase()).slice(-2));
  for (e = 0; e < t.length; e++)
    r[t.charCodeAt(e)] = t[e];
  return r;
}
function qs(t, e, n) {
  var r, o, i, s, a, c = "";
  for (typeof e != "string" && (n = e, e = qs.defaultChars), typeof n > "u" && (n = !0), a = Xpe(e), r = 0, o = t.length; r < o; r++) {
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
var Qpe = qs, Jm = {};
function eve(t) {
  var e, n, r = Jm[t];
  if (r)
    return r;
  for (r = Jm[t] = [], e = 0; e < 128; e++)
    n = String.fromCharCode(e), r.push(n);
  for (e = 0; e < t.length; e++)
    n = t.charCodeAt(e), r[n] = "%" + ("0" + n.toString(16).toUpperCase()).slice(-2);
  return r;
}
function js(t, e) {
  var n;
  return typeof e != "string" && (e = js.defaultChars), n = eve(e), t.replace(/(%[a-f0-9]{2})+/gi, function(r) {
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
var tve = js, nve = function(e) {
  var n = "";
  return n += e.protocol || "", n += e.slashes ? "//" : "", n += e.auth ? e.auth + "@" : "", e.hostname && e.hostname.indexOf(":") !== -1 ? n += "[" + e.hostname + "]" : n += e.hostname || "", n += e.port ? ":" + e.port : "", n += e.pathname || "", n += e.search || "", n += e.hash || "", n;
};
function as() {
  this.protocol = null, this.slashes = null, this.auth = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.pathname = null;
}
var rve = /^([a-z0-9.+-]+:)/i, ove = /:[0-9]*$/, ive = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, sve = ["<", ">", '"', "`", " ", "\r", `
`, "	"], ave = ["{", "}", "|", "\\", "^", "`"].concat(sve), cve = ["'"].concat(ave), Ym = ["%", "/", "?", ";", "#"].concat(cve), Xm = ["/", "?", "#"], uve = 255, Qm = /^[+a-z0-9A-Z_-]{0,63}$/, lve = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, e_ = {
  javascript: !0,
  "javascript:": !0
}, t_ = {
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
function fve(t, e) {
  if (t && t instanceof as)
    return t;
  var n = new as();
  return n.parse(t, e), n;
}
as.prototype.parse = function(t, e) {
  var n, r, o, i, s, a = t;
  if (a = a.trim(), !e && t.split("#").length === 1) {
    var c = ive.exec(a);
    if (c)
      return this.pathname = c[1], c[2] && (this.search = c[2]), this;
  }
  var u = rve.exec(a);
  if (u && (u = u[0], o = u.toLowerCase(), this.protocol = u, a = a.substr(u.length)), (e || u || a.match(/^\/\/[^@\/]+@[^@\/]+/)) && (s = a.substr(0, 2) === "//", s && !(u && e_[u]) && (a = a.substr(2), this.slashes = !0)), !e_[u] && (s || u && !t_[u])) {
    var l = -1;
    for (n = 0; n < Xm.length; n++)
      i = a.indexOf(Xm[n]), i !== -1 && (l === -1 || i < l) && (l = i);
    var f, d;
    for (l === -1 ? d = a.lastIndexOf("@") : d = a.lastIndexOf("@", l), d !== -1 && (f = a.slice(0, d), a = a.slice(d + 1), this.auth = f), l = -1, n = 0; n < Ym.length; n++)
      i = a.indexOf(Ym[n]), i !== -1 && (l === -1 || i < l) && (l = i);
    l === -1 && (l = a.length), a[l - 1] === ":" && l--;
    var h = a.slice(0, l);
    a = a.slice(l), this.parseHost(h), this.hostname = this.hostname || "";
    var w = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
    if (!w) {
      var m = this.hostname.split(/\./);
      for (n = 0, r = m.length; n < r; n++) {
        var g = m[n];
        if (g && !g.match(Qm)) {
          for (var v = "", k = 0, y = g.length; k < y; k++)
            g.charCodeAt(k) > 127 ? v += "x" : v += g[k];
          if (!v.match(Qm)) {
            var x = m.slice(0, n), F = m.slice(n + 1), A = g.match(lve);
            A && (x.push(A[1]), F.unshift(A[2])), F.length && (a = F.join(".") + a), this.hostname = x.join(".");
            break;
          }
        }
      }
    }
    this.hostname.length > uve && (this.hostname = ""), w && (this.hostname = this.hostname.substr(1, this.hostname.length - 2));
  }
  var T = a.indexOf("#");
  T !== -1 && (this.hash = a.substr(T), a = a.slice(0, T));
  var D = a.indexOf("?");
  return D !== -1 && (this.search = a.substr(D), a = a.slice(0, D)), a && (this.pathname = a), t_[o] && this.hostname && !this.pathname && (this.pathname = ""), this;
};
as.prototype.parseHost = function(t) {
  var e = ove.exec(t);
  e && (e = e[0], e !== ":" && (this.port = e.substr(1)), t = t.substr(0, t.length - e.length)), t && (this.hostname = t);
};
var dve = fve;
Pr.encode = Qpe;
Pr.decode = tve;
Pr.format = nve;
Pr.parse = dve;
var Sn = {}, ou, n_;
function Ww() {
  return n_ || (n_ = 1, ou = /[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/), ou;
}
var iu, r_;
function Kw() {
  return r_ || (r_ = 1, iu = /[\0-\x1F\x7F-\x9F]/), iu;
}
var su, o_;
function hve() {
  return o_ || (o_ = 1, su = /[\xAD\u0600-\u0605\u061C\u06DD\u070F\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/), su;
}
var au, i_;
function Zw() {
  return i_ || (i_ = 1, au = /[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/), au;
}
var s_;
function pve() {
  return s_ || (s_ = 1, Sn.Any = Ww(), Sn.Cc = Kw(), Sn.Cf = hve(), Sn.P = rd, Sn.Z = Zw()), Sn;
}
(function(t) {
  function e(p) {
    return Object.prototype.toString.call(p);
  }
  function n(p) {
    return e(p) === "[object String]";
  }
  var r = Object.prototype.hasOwnProperty;
  function o(p, P) {
    return r.call(p, P);
  }
  function i(p) {
    var P = Array.prototype.slice.call(arguments, 1);
    return P.forEach(function(N) {
      if (N) {
        if (typeof N != "object")
          throw new TypeError(N + "must be object");
        Object.keys(N).forEach(function(C) {
          p[C] = N[C];
        });
      }
    }), p;
  }
  function s(p, P, N) {
    return [].concat(p.slice(0, P), N, p.slice(P + 1));
  }
  function a(p) {
    return !(p >= 55296 && p <= 57343 || p >= 64976 && p <= 65007 || (p & 65535) === 65535 || (p & 65535) === 65534 || p >= 0 && p <= 8 || p === 11 || p >= 14 && p <= 31 || p >= 127 && p <= 159 || p > 1114111);
  }
  function c(p) {
    if (p > 65535) {
      p -= 65536;
      var P = 55296 + (p >> 10), N = 56320 + (p & 1023);
      return String.fromCharCode(P, N);
    }
    return String.fromCharCode(p);
  }
  var u = /\\([!"#$%&'()*+,\-.\/:;<=>?@[\\\]^_`{|}~])/g, l = /&([a-z#][a-z0-9]{1,31});/gi, f = new RegExp(u.source + "|" + l.source, "gi"), d = /^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))/i, h = Gw;
  function w(p, P) {
    var N = 0;
    return o(h, P) ? h[P] : P.charCodeAt(0) === 35 && d.test(P) && (N = P[1].toLowerCase() === "x" ? parseInt(P.slice(2), 16) : parseInt(P.slice(1), 10), a(N)) ? c(N) : p;
  }
  function m(p) {
    return p.indexOf("\\") < 0 ? p : p.replace(u, "$1");
  }
  function g(p) {
    return p.indexOf("\\") < 0 && p.indexOf("&") < 0 ? p : p.replace(f, function(P, N, C) {
      return N || w(P, C);
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
  function F(p) {
    return v.test(p) ? p.replace(k, x) : p;
  }
  var A = /[.?*+^$[\]\\(){}|-]/g;
  function T(p) {
    return p.replace(A, "\\$&");
  }
  function D(p) {
    switch (p) {
      case 9:
      case 32:
        return !0;
    }
    return !1;
  }
  function H(p) {
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
  var L = rd;
  function q(p) {
    return L.test(p);
  }
  function b(p) {
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
  t.lib = {}, t.lib.mdurl = Pr, t.lib.ucmicro = pve(), t.assign = i, t.isString = n, t.has = o, t.unescapeMd = m, t.unescapeAll = g, t.isValidEntityCode = a, t.fromCodePoint = c, t.escapeHtml = F, t.arrayReplaceAt = s, t.isSpace = D, t.isWhiteSpace = H, t.isMdAsciiPunct = b, t.isPunctChar = q, t.escapeRE = T, t.normalizeReference = _;
})(Y);
var Bs = {}, vve = function(e, n, r) {
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
}, gve = Y.isSpace, a_ = Y.unescapeAll, mve = function(e, n, r) {
  var o, i, s = 0, a = n, c = {
    ok: !1,
    pos: 0,
    lines: 0,
    str: ""
  };
  if (e.charCodeAt(n) === 60) {
    for (n++; n < r; ) {
      if (o = e.charCodeAt(n), o === 10 || gve(o))
        return c;
      if (o === 62)
        return c.pos = n + 1, c.str = a_(e.slice(a + 1, n)), c.ok = !0, c;
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
  return a === n || i !== 0 || (c.str = a_(e.slice(a, n)), c.lines = s, c.pos = n, c.ok = !0), c;
}, _ve = Y.unescapeAll, bve = function(e, n, r) {
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
      return c.pos = n + 1, c.lines = s, c.str = _ve(e.slice(a + 1, n)), c.ok = !0, c;
    o === 10 ? s++ : o === 92 && n + 1 < r && (n++, e.charCodeAt(n) === 10 && s++), n++;
  }
  return c;
};
Bs.parseLinkLabel = vve;
Bs.parseLinkDestination = mve;
Bs.parseLinkTitle = bve;
var yve = Y.assign, wve = Y.unescapeAll, jn = Y.escapeHtml, Pt = {};
Pt.code_inline = function(t, e, n, r, o) {
  var i = t[e];
  return "<code" + o.renderAttrs(i) + ">" + jn(t[e].content) + "</code>";
};
Pt.code_block = function(t, e, n, r, o) {
  var i = t[e];
  return "<pre" + o.renderAttrs(i) + "><code>" + jn(t[e].content) + `</code></pre>
`;
};
Pt.fence = function(t, e, n, r, o) {
  var i = t[e], s = i.info ? wve(i.info).trim() : "", a = "", c, u, l, f;
  return s && (a = s.split(/\s+/g)[0]), n.highlight ? c = n.highlight(i.content, a) || jn(i.content) : c = jn(i.content), c.indexOf("<pre") === 0 ? c + `
` : s ? (u = i.attrIndex("class"), l = i.attrs ? i.attrs.slice() : [], u < 0 ? l.push(["class", n.langPrefix + a]) : l[u][1] += " " + n.langPrefix + a, f = {
    attrs: l
  }, "<pre><code" + o.renderAttrs(f) + ">" + c + `</code></pre>
`) : "<pre><code" + o.renderAttrs(i) + ">" + c + `</code></pre>
`;
};
Pt.image = function(t, e, n, r, o) {
  var i = t[e];
  return i.attrs[i.attrIndex("alt")][1] = o.renderInlineAsText(i.children, n, r), o.renderToken(t, e, n);
};
Pt.hardbreak = function(t, e, n) {
  return n.xhtmlOut ? `<br />
` : `<br>
`;
};
Pt.softbreak = function(t, e, n) {
  return n.breaks ? n.xhtmlOut ? `<br />
` : `<br>
` : `
`;
};
Pt.text = function(t, e) {
  return jn(t[e].content);
};
Pt.html_block = function(t, e) {
  return t[e].content;
};
Pt.html_inline = function(t, e) {
  return t[e].content;
};
function Fr() {
  this.rules = yve({}, Pt);
}
Fr.prototype.renderAttrs = function(e) {
  var n, r, o;
  if (!e.attrs)
    return "";
  for (o = "", n = 0, r = e.attrs.length; n < r; n++)
    o += " " + jn(e.attrs[n][0]) + '="' + jn(e.attrs[n][1]) + '"';
  return o;
};
Fr.prototype.renderToken = function(e, n, r) {
  var o, i = "", s = !1, a = e[n];
  return a.hidden ? "" : (a.block && a.nesting !== -1 && n && e[n - 1].hidden && (i += `
`), i += (a.nesting === -1 ? "</" : "<") + a.tag, i += this.renderAttrs(a), a.nesting === 0 && r.xhtmlOut && (i += " /"), a.block && (s = !0, a.nesting === 1 && n + 1 < e.length && (o = e[n + 1], (o.type === "inline" || o.hidden || o.nesting === -1 && o.tag === a.tag) && (s = !1))), i += s ? `>
` : ">", i);
};
Fr.prototype.renderInline = function(t, e, n) {
  for (var r, o = "", i = this.rules, s = 0, a = t.length; s < a; s++)
    r = t[s].type, typeof i[r] < "u" ? o += i[r](t, s, e, n, this) : o += this.renderToken(t, s, e);
  return o;
};
Fr.prototype.renderInlineAsText = function(t, e, n) {
  for (var r = "", o = 0, i = t.length; o < i; o++)
    t[o].type === "text" ? r += t[o].content : t[o].type === "image" && (r += this.renderInlineAsText(t[o].children, e, n));
  return r;
};
Fr.prototype.render = function(t, e, n) {
  var r, o, i, s = "", a = this.rules;
  for (r = 0, o = t.length; r < o; r++)
    i = t[r].type, i === "inline" ? s += this.renderInline(t[r].children, e, n) : typeof a[i] < "u" ? s += a[t[r].type](t, r, e, n, this) : s += this.renderToken(t, r, e, n);
  return s;
};
var kve = Fr;
function wt() {
  this.__rules__ = [], this.__cache__ = null;
}
wt.prototype.__find__ = function(t) {
  for (var e = 0; e < this.__rules__.length; e++)
    if (this.__rules__[e].name === t)
      return e;
  return -1;
};
wt.prototype.__compile__ = function() {
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
wt.prototype.at = function(t, e, n) {
  var r = this.__find__(t), o = n || {};
  if (r === -1)
    throw new Error("Parser rule not found: " + t);
  this.__rules__[r].fn = e, this.__rules__[r].alt = o.alt || [], this.__cache__ = null;
};
wt.prototype.before = function(t, e, n, r) {
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
wt.prototype.after = function(t, e, n, r) {
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
wt.prototype.push = function(t, e, n) {
  var r = n || {};
  this.__rules__.push({
    name: t,
    enabled: !0,
    fn: e,
    alt: r.alt || []
  }), this.__cache__ = null;
};
wt.prototype.enable = function(t, e) {
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
wt.prototype.enableOnly = function(t, e) {
  Array.isArray(t) || (t = [t]), this.__rules__.forEach(function(n) {
    n.enabled = !1;
  }), this.enable(t, e);
};
wt.prototype.disable = function(t, e) {
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
wt.prototype.getRules = function(t) {
  return this.__cache__ === null && this.__compile__(), this.__cache__[t] || [];
};
var od = wt, Sve = /\r[\n\u0085]?|[\u2424\u2028\u0085]/g, xve = /\u0000/g, Eve = function(e) {
  var n;
  n = e.src.replace(Sve, `
`), n = n.replace(xve, "�"), e.src = n;
}, $ve = function(e) {
  var n;
  e.inlineMode ? (n = new e.Token("inline", "", 0), n.content = e.src, n.map = [0, 1], n.children = [], e.tokens.push(n)) : e.md.block.parse(e.src, e.md, e.env, e.tokens);
}, Cve = function(e) {
  var n = e.tokens, r, o, i;
  for (o = 0, i = n.length; o < i; o++)
    r = n[o], r.type === "inline" && e.md.inline.parse(r.content, e.md, e.env, r.children);
}, Ive = Y.arrayReplaceAt;
function Tve(t) {
  return /^<a[>\s]/i.test(t);
}
function Ave(t) {
  return /^<\/a\s*>/i.test(t);
}
var Ove = function(e) {
  var n, r, o, i, s, a, c, u, l, f, d, h, w, m, g, v, k = e.tokens, y;
  if (e.md.options.linkify) {
    for (r = 0, o = k.length; r < o; r++)
      if (!(k[r].type !== "inline" || !e.md.linkify.pretest(k[r].content)))
        for (i = k[r].children, w = 0, n = i.length - 1; n >= 0; n--) {
          if (a = i[n], a.type === "link_close") {
            for (n--; i[n].level !== a.level && i[n].type !== "link_open"; )
              n--;
            continue;
          }
          if (a.type === "html_inline" && (Tve(a.content) && w > 0 && w--, Ave(a.content) && w++), !(w > 0) && a.type === "text" && e.md.linkify.test(a.content)) {
            for (l = a.content, y = e.md.linkify.match(l), c = [], h = a.level, d = 0, u = 0; u < y.length; u++)
              m = y[u].url, g = e.md.normalizeLink(m), e.md.validateLink(g) && (v = y[u].text, y[u].schema ? y[u].schema === "mailto:" && !/^mailto:/i.test(v) ? v = e.md.normalizeLinkText("mailto:" + v).replace(/^mailto:/, "") : v = e.md.normalizeLinkText(v) : v = e.md.normalizeLinkText("http://" + v).replace(/^http:\/\//, ""), f = y[u].index, f > d && (s = new e.Token("text", "", 0), s.content = l.slice(d, f), s.level = h, c.push(s)), s = new e.Token("link_open", "a", 1), s.attrs = [["href", g]], s.level = h++, s.markup = "linkify", s.info = "auto", c.push(s), s = new e.Token("text", "", 0), s.content = v, s.level = h, c.push(s), s = new e.Token("link_close", "a", -1), s.level = --h, s.markup = "linkify", s.info = "auto", c.push(s), d = y[u].lastIndex);
            d < l.length && (s = new e.Token("text", "", 0), s.content = l.slice(d), s.level = h, c.push(s)), k[r].children = i = Ive(i, n, c);
          }
        }
  }
}, Jw = /\+-|\.\.|\?\?\?\?|!!!!|,,|--/, Dve = /\((c|tm|r|p)\)/i, Pve = /\((c|tm|r|p)\)/ig, Fve = {
  c: "©",
  r: "®",
  p: "§",
  tm: "™"
};
function Rve(t, e) {
  return Fve[e.toLowerCase()];
}
function Nve(t) {
  var e, n, r = 0;
  for (e = t.length - 1; e >= 0; e--)
    n = t[e], n.type === "text" && !r && (n.content = n.content.replace(Pve, Rve)), n.type === "link_open" && n.info === "auto" && r--, n.type === "link_close" && n.info === "auto" && r++;
}
function Mve(t) {
  var e, n, r = 0;
  for (e = t.length - 1; e >= 0; e--)
    n = t[e], n.type === "text" && !r && Jw.test(n.content) && (n.content = n.content.replace(/\+-/g, "±").replace(/\.{2,}/g, "…").replace(/([?!])…/g, "$1..").replace(/([?!]){4,}/g, "$1$1$1").replace(/,{2,}/g, ",").replace(/(^|[^-])---([^-]|$)/mg, "$1—$2").replace(/(^|\s)--(\s|$)/mg, "$1–$2").replace(/(^|[^-\s])--([^-\s]|$)/mg, "$1–$2")), n.type === "link_open" && n.info === "auto" && r--, n.type === "link_close" && n.info === "auto" && r++;
}
var Lve = function(e) {
  var n;
  if (e.md.options.typographer)
    for (n = e.tokens.length - 1; n >= 0; n--)
      e.tokens[n].type === "inline" && (Dve.test(e.tokens[n].content) && Nve(e.tokens[n].children), Jw.test(e.tokens[n].content) && Mve(e.tokens[n].children));
}, c_ = Y.isWhiteSpace, u_ = Y.isPunctChar, l_ = Y.isMdAsciiPunct, qve = /['"]/, f_ = /['"]/g, d_ = "’";
function wi(t, e, n) {
  return t.substr(0, e) + n + t.substr(e + 1);
}
function jve(t, e) {
  var n, r, o, i, s, a, c, u, l, f, d, h, w, m, g, v, k, y, x, F, A;
  for (x = [], n = 0; n < t.length; n++) {
    for (r = t[n], c = t[n].level, k = x.length - 1; k >= 0 && !(x[k].level <= c); k--)
      ;
    if (x.length = k + 1, r.type === "text") {
      o = r.content, s = 0, a = o.length;
      e:
        for (; s < a && (f_.lastIndex = s, i = f_.exec(o), !!i); ) {
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
          if (d = l_(l) || u_(String.fromCharCode(l)), h = l_(f) || u_(String.fromCharCode(f)), w = c_(l), m = c_(f), m ? g = !1 : h && (w || d || (g = !1)), w ? v = !1 : d && (m || h || (v = !1)), f === 34 && i[0] === '"' && l >= 48 && l <= 57 && (v = g = !1), g && v && (g = !1, v = h), !g && !v) {
            y && (r.content = wi(r.content, i.index, d_));
            continue;
          }
          if (v) {
            for (k = x.length - 1; k >= 0 && (u = x[k], !(x[k].level < c)); k--)
              if (u.single === y && x[k].level === c) {
                u = x[k], y ? (F = e.md.options.quotes[2], A = e.md.options.quotes[3]) : (F = e.md.options.quotes[0], A = e.md.options.quotes[1]), r.content = wi(r.content, i.index, A), t[u.token].content = wi(
                  t[u.token].content,
                  u.pos,
                  F
                ), s += A.length - 1, u.token === n && (s += F.length - 1), o = r.content, a = o.length, x.length = k;
                continue e;
              }
          }
          g ? x.push({
            token: n,
            pos: i.index,
            single: y,
            level: c
          }) : v && y && (r.content = wi(r.content, i.index, d_));
        }
    }
  }
}
var Bve = function(e) {
  var n;
  if (e.md.options.typographer)
    for (n = e.tokens.length - 1; n >= 0; n--)
      e.tokens[n].type !== "inline" || !qve.test(e.tokens[n].content) || jve(e.tokens[n].children, e);
};
function Rr(t, e, n) {
  this.type = t, this.tag = e, this.attrs = null, this.map = null, this.nesting = n, this.level = 0, this.children = null, this.content = "", this.markup = "", this.info = "", this.meta = null, this.block = !1, this.hidden = !1;
}
Rr.prototype.attrIndex = function(e) {
  var n, r, o;
  if (!this.attrs)
    return -1;
  for (n = this.attrs, r = 0, o = n.length; r < o; r++)
    if (n[r][0] === e)
      return r;
  return -1;
};
Rr.prototype.attrPush = function(e) {
  this.attrs ? this.attrs.push(e) : this.attrs = [e];
};
Rr.prototype.attrSet = function(e, n) {
  var r = this.attrIndex(e), o = [e, n];
  r < 0 ? this.attrPush(o) : this.attrs[r] = o;
};
Rr.prototype.attrGet = function(e) {
  var n = this.attrIndex(e), r = null;
  return n >= 0 && (r = this.attrs[n][1]), r;
};
Rr.prototype.attrJoin = function(e, n) {
  var r = this.attrIndex(e);
  r < 0 ? this.attrPush([e, n]) : this.attrs[r][1] = this.attrs[r][1] + " " + n;
};
var id = Rr, zve = id;
function Yw(t, e, n) {
  this.src = t, this.env = n, this.tokens = [], this.inlineMode = !1, this.md = e;
}
Yw.prototype.Token = zve;
var Hve = Yw, Vve = od, cu = [
  ["normalize", Eve],
  ["block", $ve],
  ["inline", Cve],
  ["linkify", Ove],
  ["replacements", Lve],
  ["smartquotes", Bve]
];
function sd() {
  this.ruler = new Vve();
  for (var t = 0; t < cu.length; t++)
    this.ruler.push(cu[t][0], cu[t][1]);
}
sd.prototype.process = function(t) {
  var e, n, r;
  for (r = this.ruler.getRules(""), e = 0, n = r.length; e < n; e++)
    r[e](t);
};
sd.prototype.State = Hve;
var Uve = sd, Gve = Y.isSpace;
function uu(t, e) {
  var n = t.bMarks[e] + t.blkIndent, r = t.eMarks[e];
  return t.src.substr(n, r - n);
}
function h_(t) {
  var e = [], n = 0, r = t.length, o, i = 0, s = 0, a = !1, c = 0;
  for (o = t.charCodeAt(n); n < r; )
    o === 96 ? a ? (a = !1, c = n) : i % 2 === 0 && (a = !0, c = n) : o === 124 && i % 2 === 0 && !a && (e.push(t.substring(s, n)), s = n + 1), o === 92 ? i++ : i = 0, n++, n === r && a && (a = !1, n = c + 1), o = t.charCodeAt(n);
  return e.push(t.substring(s)), e;
}
var Wve = function(e, n, r, o) {
  var i, s, a, c, u, l, f, d, h, w, m, g;
  if (n + 2 > r || (u = n + 1, e.sCount[u] < e.blkIndent) || e.sCount[u] - e.blkIndent >= 4 || (a = e.bMarks[u] + e.tShift[u], a >= e.eMarks[u]) || (i = e.src.charCodeAt(a++), i !== 124 && i !== 45 && i !== 58))
    return !1;
  for (; a < e.eMarks[u]; ) {
    if (i = e.src.charCodeAt(a), i !== 124 && i !== 45 && i !== 58 && !Gve(i))
      return !1;
    a++;
  }
  for (s = uu(e, n + 1), l = s.split("|"), h = [], c = 0; c < l.length; c++) {
    if (w = l[c].trim(), !w) {
      if (c === 0 || c === l.length - 1)
        continue;
      return !1;
    }
    if (!/^:?-+:?$/.test(w))
      return !1;
    w.charCodeAt(w.length - 1) === 58 ? h.push(w.charCodeAt(0) === 58 ? "center" : "right") : w.charCodeAt(0) === 58 ? h.push("left") : h.push("");
  }
  if (s = uu(e, n).trim(), s.indexOf("|") === -1 || e.sCount[n] - e.blkIndent >= 4 || (l = h_(s.replace(/^\||\|$/g, "")), f = l.length, f > h.length))
    return !1;
  if (o)
    return !0;
  for (d = e.push("table_open", "table", 1), d.map = m = [n, 0], d = e.push("thead_open", "thead", 1), d.map = [n, n + 1], d = e.push("tr_open", "tr", 1), d.map = [n, n + 1], c = 0; c < l.length; c++)
    d = e.push("th_open", "th", 1), d.map = [n, n + 1], h[c] && (d.attrs = [["style", "text-align:" + h[c]]]), d = e.push("inline", "", 0), d.content = l[c].trim(), d.map = [n, n + 1], d.children = [], d = e.push("th_close", "th", -1);
  for (d = e.push("tr_close", "tr", -1), d = e.push("thead_close", "thead", -1), d = e.push("tbody_open", "tbody", 1), d.map = g = [n + 2, 0], u = n + 2; u < r && !(e.sCount[u] < e.blkIndent || (s = uu(e, u).trim(), s.indexOf("|") === -1) || e.sCount[u] - e.blkIndent >= 4); u++) {
    for (l = h_(s.replace(/^\||\|$/g, "")), d = e.push("tr_open", "tr", 1), c = 0; c < f; c++)
      d = e.push("td_open", "td", 1), h[c] && (d.attrs = [["style", "text-align:" + h[c]]]), d = e.push("inline", "", 0), d.content = l[c] ? l[c].trim() : "", d.children = [], d = e.push("td_close", "td", -1);
    d = e.push("tr_close", "tr", -1);
  }
  return d = e.push("tbody_close", "tbody", -1), d = e.push("table_close", "table", -1), m[1] = g[1] = u, e.line = u, !0;
}, Kve = function(e, n, r) {
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
}, Zve = function(e, n, r, o) {
  var i, s, a, c, u, l, f, d = !1, h = e.bMarks[n] + e.tShift[n], w = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || h + 3 > w || (i = e.src.charCodeAt(h), i !== 126 && i !== 96) || (u = h, h = e.skipChars(h, i), s = h - u, s < 3) || (f = e.src.slice(u, h), a = e.src.slice(h, w), a.indexOf(String.fromCharCode(i)) >= 0))
    return !1;
  if (o)
    return !0;
  for (c = n; c++, !(c >= r || (h = u = e.bMarks[c] + e.tShift[c], w = e.eMarks[c], h < w && e.sCount[c] < e.blkIndent)); )
    if (e.src.charCodeAt(h) === i && !(e.sCount[c] - e.blkIndent >= 4) && (h = e.skipChars(h, i), !(h - u < s) && (h = e.skipSpaces(h), !(h < w)))) {
      d = !0;
      break;
    }
  return s = e.sCount[n], e.line = c + (d ? 1 : 0), l = e.push("fence", "code", 0), l.info = a, l.content = e.getLines(n + 1, c, s, !0), l.markup = f, l.map = [n, e.line], !0;
}, p_ = Y.isSpace, Jve = function(e, n, r, o) {
  var i, s, a, c, u, l, f, d, h, w, m, g, v, k, y, x, F, A, T, D, H = e.lineMax, L = e.bMarks[n] + e.tShift[n], q = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || e.src.charCodeAt(L++) !== 62)
    return !1;
  if (o)
    return !0;
  for (c = h = e.sCount[n] + L - (e.bMarks[n] + e.tShift[n]), e.src.charCodeAt(L) === 32 ? (L++, c++, h++, i = !1, x = !0) : e.src.charCodeAt(L) === 9 ? (x = !0, (e.bsCount[n] + h) % 4 === 3 ? (L++, c++, h++, i = !1) : i = !0) : x = !1, w = [e.bMarks[n]], e.bMarks[n] = L; L < q && (s = e.src.charCodeAt(L), p_(s)); ) {
    s === 9 ? h += 4 - (h + e.bsCount[n] + (i ? 1 : 0)) % 4 : h++;
    L++;
  }
  for (m = [e.bsCount[n]], e.bsCount[n] = e.sCount[n] + 1 + (x ? 1 : 0), l = L >= q, k = [e.sCount[n]], e.sCount[n] = h - c, y = [e.tShift[n]], e.tShift[n] = L - e.bMarks[n], A = e.md.block.ruler.getRules("blockquote"), v = e.parentType, e.parentType = "blockquote", D = !1, d = n + 1; d < r && (e.sCount[d] < e.blkIndent && (D = !0), L = e.bMarks[d] + e.tShift[d], q = e.eMarks[d], !(L >= q)); d++) {
    if (e.src.charCodeAt(L++) === 62 && !D) {
      for (c = h = e.sCount[d] + L - (e.bMarks[d] + e.tShift[d]), e.src.charCodeAt(L) === 32 ? (L++, c++, h++, i = !1, x = !0) : e.src.charCodeAt(L) === 9 ? (x = !0, (e.bsCount[d] + h) % 4 === 3 ? (L++, c++, h++, i = !1) : i = !0) : x = !1, w.push(e.bMarks[d]), e.bMarks[d] = L; L < q && (s = e.src.charCodeAt(L), p_(s)); ) {
        s === 9 ? h += 4 - (h + e.bsCount[d] + (i ? 1 : 0)) % 4 : h++;
        L++;
      }
      l = L >= q, m.push(e.bsCount[d]), e.bsCount[d] = e.sCount[d] + 1 + (x ? 1 : 0), k.push(e.sCount[d]), e.sCount[d] = h - c, y.push(e.tShift[d]), e.tShift[d] = L - e.bMarks[d];
      continue;
    }
    if (l)
      break;
    for (F = !1, a = 0, u = A.length; a < u; a++)
      if (A[a](e, d, r, !0)) {
        F = !0;
        break;
      }
    if (F) {
      e.lineMax = d, e.blkIndent !== 0 && (w.push(e.bMarks[d]), m.push(e.bsCount[d]), y.push(e.tShift[d]), k.push(e.sCount[d]), e.sCount[d] -= e.blkIndent);
      break;
    }
    w.push(e.bMarks[d]), m.push(e.bsCount[d]), y.push(e.tShift[d]), k.push(e.sCount[d]), e.sCount[d] = -1;
  }
  for (g = e.blkIndent, e.blkIndent = 0, T = e.push("blockquote_open", "blockquote", 1), T.markup = ">", T.map = f = [n, 0], e.md.block.tokenize(e, n, d), T = e.push("blockquote_close", "blockquote", -1), T.markup = ">", e.lineMax = H, e.parentType = v, f[1] = e.line, a = 0; a < y.length; a++)
    e.bMarks[a + n] = w[a], e.tShift[a + n] = y[a], e.sCount[a + n] = k[a], e.bsCount[a + n] = m[a];
  return e.blkIndent = g, !0;
}, Yve = Y.isSpace, Xve = function(e, n, r, o) {
  var i, s, a, c, u = e.bMarks[n] + e.tShift[n], l = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || (i = e.src.charCodeAt(u++), i !== 42 && i !== 45 && i !== 95))
    return !1;
  for (s = 1; u < l; ) {
    if (a = e.src.charCodeAt(u++), a !== i && !Yve(a))
      return !1;
    a === i && s++;
  }
  return s < 3 ? !1 : (o || (e.line = n + 1, c = e.push("hr", "hr", 0), c.map = [n, e.line], c.markup = Array(s + 1).join(String.fromCharCode(i))), !0);
}, Xw = Y.isSpace;
function v_(t, e) {
  var n, r, o, i;
  return r = t.bMarks[e] + t.tShift[e], o = t.eMarks[e], n = t.src.charCodeAt(r++), n !== 42 && n !== 45 && n !== 43 || r < o && (i = t.src.charCodeAt(r), !Xw(i)) ? -1 : r;
}
function g_(t, e) {
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
  return o < i && (n = t.src.charCodeAt(o), !Xw(n)) ? -1 : o;
}
function Qve(t, e) {
  var n, r, o = t.level + 2;
  for (n = e + 2, r = t.tokens.length - 2; n < r; n++)
    t.tokens[n].level === o && t.tokens[n].type === "paragraph_open" && (t.tokens[n + 2].hidden = !0, t.tokens[n].hidden = !0, n += 2);
}
var ege = function(e, n, r, o) {
  var i, s, a, c, u, l, f, d, h, w, m, g, v, k, y, x, F, A, T, D, H, L, q, b, _, p, P, N, C = !1, S = !0;
  if (e.sCount[n] - e.blkIndent >= 4)
    return !1;
  if (o && e.parentType === "paragraph" && e.tShift[n] >= e.blkIndent && (C = !0), (q = g_(e, n)) >= 0) {
    if (f = !0, _ = e.bMarks[n] + e.tShift[n], v = Number(e.src.substr(_, q - _ - 1)), C && v !== 1)
      return !1;
  } else if ((q = v_(e, n)) >= 0)
    f = !1;
  else
    return !1;
  if (C && e.skipSpaces(q) >= e.eMarks[n])
    return !1;
  if (g = e.src.charCodeAt(q - 1), o)
    return !0;
  for (m = e.tokens.length, f ? (N = e.push("ordered_list_open", "ol", 1), v !== 1 && (N.attrs = [["start", v]])) : N = e.push("bullet_list_open", "ul", 1), N.map = w = [n, 0], N.markup = String.fromCharCode(g), y = n, b = !1, P = e.md.block.ruler.getRules("list"), T = e.parentType, e.parentType = "list"; y < r; ) {
    for (L = q, k = e.eMarks[y], l = x = e.sCount[y] + q - (e.bMarks[n] + e.tShift[n]); L < k; ) {
      if (i = e.src.charCodeAt(L), i === 9)
        x += 4 - (x + e.bsCount[y]) % 4;
      else if (i === 32)
        x++;
      else
        break;
      L++;
    }
    if (s = L, s >= k ? u = 1 : u = x - l, u > 4 && (u = 1), c = l + u, N = e.push("list_item_open", "li", 1), N.markup = String.fromCharCode(g), N.map = d = [n, 0], F = e.blkIndent, H = e.tight, D = e.tShift[n], A = e.sCount[n], e.blkIndent = c, e.tight = !0, e.tShift[n] = s - e.bMarks[n], e.sCount[n] = x, s >= k && e.isEmpty(n + 1) ? e.line = Math.min(e.line + 2, r) : e.md.block.tokenize(e, n, r, !0), (!e.tight || b) && (S = !1), b = e.line - n > 1 && e.isEmpty(e.line - 1), e.blkIndent = F, e.tShift[n] = D, e.sCount[n] = A, e.tight = H, N = e.push("list_item_close", "li", -1), N.markup = String.fromCharCode(g), y = n = e.line, d[1] = y, s = e.bMarks[n], y >= r || e.sCount[y] < e.blkIndent)
      break;
    for (p = !1, a = 0, h = P.length; a < h; a++)
      if (P[a](e, y, r, !0)) {
        p = !0;
        break;
      }
    if (p)
      break;
    if (f) {
      if (q = g_(e, y), q < 0)
        break;
    } else if (q = v_(e, y), q < 0)
      break;
    if (g !== e.src.charCodeAt(q - 1))
      break;
  }
  return f ? N = e.push("ordered_list_close", "ol", -1) : N = e.push("bullet_list_close", "ul", -1), N.markup = String.fromCharCode(g), w[1] = y, e.line = y, e.parentType = T, S && Qve(e, m), !0;
}, tge = Y.normalizeReference, ki = Y.isSpace, nge = function(e, n, r, o) {
  var i, s, a, c, u, l, f, d, h, w, m, g, v, k, y, x, F = 0, A = e.bMarks[n] + e.tShift[n], T = e.eMarks[n], D = n + 1;
  if (e.sCount[n] - e.blkIndent >= 4 || e.src.charCodeAt(A) !== 91)
    return !1;
  for (; ++A < T; )
    if (e.src.charCodeAt(A) === 93 && e.src.charCodeAt(A - 1) !== 92) {
      if (A + 1 === T || e.src.charCodeAt(A + 1) !== 58)
        return !1;
      break;
    }
  for (c = e.lineMax, y = e.md.block.ruler.getRules("reference"), w = e.parentType, e.parentType = "reference"; D < c && !e.isEmpty(D); D++)
    if (!(e.sCount[D] - e.blkIndent > 3) && !(e.sCount[D] < 0)) {
      for (k = !1, l = 0, f = y.length; l < f; l++)
        if (y[l](e, D, c, !0)) {
          k = !0;
          break;
        }
      if (k)
        break;
    }
  for (v = e.getLines(n, D, e.blkIndent, !1).trim(), T = v.length, A = 1; A < T; A++) {
    if (i = v.charCodeAt(A), i === 91)
      return !1;
    if (i === 93) {
      h = A;
      break;
    } else
      i === 10 ? F++ : i === 92 && (A++, A < T && v.charCodeAt(A) === 10 && F++);
  }
  if (h < 0 || v.charCodeAt(h + 1) !== 58)
    return !1;
  for (A = h + 2; A < T; A++)
    if (i = v.charCodeAt(A), i === 10)
      F++;
    else if (!ki(i))
      break;
  if (m = e.md.helpers.parseLinkDestination(v, A, T), !m.ok || (u = e.md.normalizeLink(m.str), !e.md.validateLink(u)))
    return !1;
  for (A = m.pos, F += m.lines, s = A, a = F, g = A; A < T; A++)
    if (i = v.charCodeAt(A), i === 10)
      F++;
    else if (!ki(i))
      break;
  for (m = e.md.helpers.parseLinkTitle(v, A, T), A < T && g !== A && m.ok ? (x = m.str, A = m.pos, F += m.lines) : (x = "", A = s, F = a); A < T && (i = v.charCodeAt(A), !!ki(i)); )
    A++;
  if (A < T && v.charCodeAt(A) !== 10 && x)
    for (x = "", A = s, F = a; A < T && (i = v.charCodeAt(A), !!ki(i)); )
      A++;
  return A < T && v.charCodeAt(A) !== 10 || (d = tge(v.slice(1, h)), !d) ? !1 : (o || (typeof e.env.references > "u" && (e.env.references = {}), typeof e.env.references[d] > "u" && (e.env.references[d] = { title: x, href: u }), e.parentType = w, e.line = n + F + 1), !0);
}, m_ = Y.isSpace, rge = function(e, n, r, o) {
  var i, s, a, c, u = e.bMarks[n] + e.tShift[n], l = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || (i = e.src.charCodeAt(u), i !== 35 || u >= l))
    return !1;
  for (s = 1, i = e.src.charCodeAt(++u); i === 35 && u < l && s <= 6; )
    s++, i = e.src.charCodeAt(++u);
  return s > 6 || u < l && !m_(i) ? !1 : (o || (l = e.skipSpacesBack(l, u), a = e.skipCharsBack(l, 35, u), a > u && m_(e.src.charCodeAt(a - 1)) && (l = a), e.line = n + 1, c = e.push("heading_open", "h" + String(s), 1), c.markup = "########".slice(0, s), c.map = [n, e.line], c = e.push("inline", "", 0), c.content = e.src.slice(u, l).trim(), c.map = [n, e.line], c.children = [], c = e.push("heading_close", "h" + String(s), -1), c.markup = "########".slice(0, s)), !0);
}, oge = function(e, n, r) {
  var o, i, s, a, c, u, l, f, d, h = n + 1, w, m = e.md.block.ruler.getRules("paragraph");
  if (e.sCount[n] - e.blkIndent >= 4)
    return !1;
  for (w = e.parentType, e.parentType = "paragraph"; h < r && !e.isEmpty(h); h++)
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
  return f ? (o = e.getLines(n, h, e.blkIndent, !1).trim(), e.line = h + 1, c = e.push("heading_open", "h" + String(f), 1), c.markup = String.fromCharCode(d), c.map = [n, e.line], c = e.push("inline", "", 0), c.content = o, c.map = [n, e.line - 1], c.children = [], c = e.push("heading_close", "h" + String(f), -1), c.markup = String.fromCharCode(d), e.parentType = w, !0) : !1;
}, ige = [
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
], zs = {}, sge = "[a-zA-Z_:][a-zA-Z0-9:._-]*", age = "[^\"'=<>`\\x00-\\x20]+", cge = "'[^']*'", uge = '"[^"]*"', lge = "(?:" + age + "|" + cge + "|" + uge + ")", fge = "(?:\\s+" + sge + "(?:\\s*=\\s*" + lge + ")?)", Qw = "<[A-Za-z][A-Za-z0-9\\-]*" + fge + "*\\s*\\/?>", ek = "<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>", dge = "<!---->|<!--(?:-?[^>-])(?:-?[^-])*-->", hge = "<[?].*?[?]>", pge = "<![A-Z]+\\s+[^>]*>", vge = "<!\\[CDATA\\[[\\s\\S]*?\\]\\]>", gge = new RegExp("^(?:" + Qw + "|" + ek + "|" + dge + "|" + hge + "|" + pge + "|" + vge + ")"), mge = new RegExp("^(?:" + Qw + "|" + ek + ")");
zs.HTML_TAG_RE = gge;
zs.HTML_OPEN_CLOSE_TAG_RE = mge;
var _ge = ige, bge = zs.HTML_OPEN_CLOSE_TAG_RE, nr = [
  [/^<(script|pre|style)(?=(\s|>|$))/i, /<\/(script|pre|style)>/i, !0],
  [/^<!--/, /-->/, !0],
  [/^<\?/, /\?>/, !0],
  [/^<![A-Z]/, />/, !0],
  [/^<!\[CDATA\[/, /\]\]>/, !0],
  [new RegExp("^</?(" + _ge.join("|") + ")(?=(\\s|/?>|$))", "i"), /^$/, !0],
  [new RegExp(bge.source + "\\s*$"), /^$/, !1]
], yge = function(e, n, r, o) {
  var i, s, a, c, u = e.bMarks[n] + e.tShift[n], l = e.eMarks[n];
  if (e.sCount[n] - e.blkIndent >= 4 || !e.md.options.html || e.src.charCodeAt(u) !== 60)
    return !1;
  for (c = e.src.slice(u, l), i = 0; i < nr.length && !nr[i][0].test(c); i++)
    ;
  if (i === nr.length)
    return !1;
  if (o)
    return nr[i][2];
  if (s = n + 1, !nr[i][1].test(c)) {
    for (; s < r && !(e.sCount[s] < e.blkIndent); s++)
      if (u = e.bMarks[s] + e.tShift[s], l = e.eMarks[s], c = e.src.slice(u, l), nr[i][1].test(c)) {
        c.length !== 0 && s++;
        break;
      }
  }
  return e.line = s, a = e.push("html_block", "", 0), a.map = [n, s], a.content = e.getLines(n, s, e.blkIndent, !0), !0;
}, wge = function(e, n) {
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
}, tk = id, Hs = Y.isSpace;
function Ft(t, e, n, r) {
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
Ft.prototype.push = function(t, e, n) {
  var r = new tk(t, e, n);
  return r.block = !0, n < 0 && this.level--, r.level = this.level, n > 0 && this.level++, this.tokens.push(r), r;
};
Ft.prototype.isEmpty = function(e) {
  return this.bMarks[e] + this.tShift[e] >= this.eMarks[e];
};
Ft.prototype.skipEmptyLines = function(e) {
  for (var n = this.lineMax; e < n && !(this.bMarks[e] + this.tShift[e] < this.eMarks[e]); e++)
    ;
  return e;
};
Ft.prototype.skipSpaces = function(e) {
  for (var n, r = this.src.length; e < r && (n = this.src.charCodeAt(e), !!Hs(n)); e++)
    ;
  return e;
};
Ft.prototype.skipSpacesBack = function(e, n) {
  if (e <= n)
    return e;
  for (; e > n; )
    if (!Hs(this.src.charCodeAt(--e)))
      return e + 1;
  return e;
};
Ft.prototype.skipChars = function(e, n) {
  for (var r = this.src.length; e < r && this.src.charCodeAt(e) === n; e++)
    ;
  return e;
};
Ft.prototype.skipCharsBack = function(e, n, r) {
  if (e <= r)
    return e;
  for (; e > r; )
    if (n !== this.src.charCodeAt(--e))
      return e + 1;
  return e;
};
Ft.prototype.getLines = function(e, n, r, o) {
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
Ft.prototype.Token = tk;
var kge = Ft, Sge = od, Si = [
  // First 2 params - rule name & source. Secondary array - list of rules,
  // which can be terminated by this one.
  ["table", Wve, ["paragraph", "reference"]],
  ["code", Kve],
  ["fence", Zve, ["paragraph", "reference", "blockquote", "list"]],
  ["blockquote", Jve, ["paragraph", "reference", "blockquote", "list"]],
  ["hr", Xve, ["paragraph", "reference", "blockquote", "list"]],
  ["list", ege, ["paragraph", "reference", "blockquote"]],
  ["reference", nge],
  ["heading", rge, ["paragraph", "reference", "blockquote"]],
  ["lheading", oge],
  ["html_block", yge, ["paragraph", "reference", "blockquote"]],
  ["paragraph", wge]
];
function Vs() {
  this.ruler = new Sge();
  for (var t = 0; t < Si.length; t++)
    this.ruler.push(Si[t][0], Si[t][1], { alt: (Si[t][2] || []).slice() });
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
Vs.prototype.State = kge;
var xge = Vs;
function Ege(t) {
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
var $ge = function(e, n) {
  for (var r = e.pos; r < e.posMax && !Ege(e.src.charCodeAt(r)); )
    r++;
  return r === e.pos ? !1 : (n || (e.pending += e.src.slice(e.pos, r)), e.pos = r, !0);
}, Cge = Y.isSpace, Ige = function(e, n) {
  var r, o, i = e.pos;
  if (e.src.charCodeAt(i) !== 10)
    return !1;
  for (r = e.pending.length - 1, o = e.posMax, n || (r >= 0 && e.pending.charCodeAt(r) === 32 ? r >= 1 && e.pending.charCodeAt(r - 1) === 32 ? (e.pending = e.pending.replace(/ +$/, ""), e.push("hardbreak", "br", 0)) : (e.pending = e.pending.slice(0, -1), e.push("softbreak", "br", 0)) : e.push("softbreak", "br", 0)), i++; i < o && Cge(e.src.charCodeAt(i)); )
    i++;
  return e.pos = i, !0;
}, Tge = Y.isSpace, ad = [];
for (var __ = 0; __ < 256; __++)
  ad.push(0);
"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(t) {
  ad[t.charCodeAt(0)] = 1;
});
var Age = function(e, n) {
  var r, o = e.pos, i = e.posMax;
  if (e.src.charCodeAt(o) !== 92)
    return !1;
  if (o++, o < i) {
    if (r = e.src.charCodeAt(o), r < 256 && ad[r] !== 0)
      return n || (e.pending += e.src[o]), e.pos += 2, !0;
    if (r === 10) {
      for (n || e.push("hardbreak", "br", 0), o++; o < i && (r = e.src.charCodeAt(o), !!Tge(r)); )
        o++;
      return e.pos = o, !0;
    }
  }
  return n || (e.pending += "\\"), e.pos++, !0;
}, Oge = function(e, n) {
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
var Dge = Y.normalizeReference, lu = Y.isSpace, Pge = function(e, n) {
  var r, o, i, s, a, c, u, l, f, d, h = "", w = e.pos, m = e.posMax, g = e.pos, v = !0;
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
    if (c < m && e.src.charCodeAt(c) === 91 ? (g = c + 1, c = e.md.helpers.parseLinkLabel(e, c), c >= 0 ? i = e.src.slice(g, c++) : c = s + 1) : c = s + 1, i || (i = e.src.slice(a, s)), l = e.env.references[Dge(i)], !l)
      return e.pos = w, !1;
    h = l.href, f = l.title;
  }
  return n || (e.pos = a, e.posMax = s, d = e.push("link_open", "a", 1), d.attrs = r = [["href", h]], f && r.push(["title", f]), e.md.inline.tokenize(e), d = e.push("link_close", "a", -1)), e.pos = c, e.posMax = m, !0;
}, Fge = Y.normalizeReference, fu = Y.isSpace, Rge = function(e, n) {
  var r, o, i, s, a, c, u, l, f, d, h, w, m, g = "", v = e.pos, k = e.posMax;
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
    if (u < k && e.src.charCodeAt(u) === 91 ? (m = u + 1, u = e.md.helpers.parseLinkLabel(e, u), u >= 0 ? s = e.src.slice(m, u++) : u = a + 1) : u = a + 1, s || (s = e.src.slice(c, a)), l = e.env.references[Fge(s)], !l)
      return e.pos = v, !1;
    g = l.href, d = l.title;
  }
  return n || (i = e.src.slice(c, a), e.md.inline.parse(
    i,
    e.md,
    e.env,
    w = []
  ), h = e.push("image", "img", 0), h.attrs = r = [["src", g], ["alt", ""]], h.children = w, h.content = i, d && r.push(["title", d])), e.pos = u, e.posMax = k, !0;
}, b_ = /^<([a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)>/, y_ = /^<([a-zA-Z][a-zA-Z0-9+.\-]{1,31}):([^<>\x00-\x20]*)>/, Nge = function(e, n) {
  var r, o, i, s, a, c, u = e.pos;
  return e.src.charCodeAt(u) !== 60 || (r = e.src.slice(u), r.indexOf(">") < 0) ? !1 : y_.test(r) ? (o = r.match(y_), s = o[0].slice(1, -1), a = e.md.normalizeLink(s), e.md.validateLink(a) ? (n || (c = e.push("link_open", "a", 1), c.attrs = [["href", a]], c.markup = "autolink", c.info = "auto", c = e.push("text", "", 0), c.content = e.md.normalizeLinkText(s), c = e.push("link_close", "a", -1), c.markup = "autolink", c.info = "auto"), e.pos += o[0].length, !0) : !1) : b_.test(r) ? (i = r.match(b_), s = i[0].slice(1, -1), a = e.md.normalizeLink("mailto:" + s), e.md.validateLink(a) ? (n || (c = e.push("link_open", "a", 1), c.attrs = [["href", a]], c.markup = "autolink", c.info = "auto", c = e.push("text", "", 0), c.content = e.md.normalizeLinkText(s), c = e.push("link_close", "a", -1), c.markup = "autolink", c.info = "auto"), e.pos += i[0].length, !0) : !1) : !1;
}, Mge = zs.HTML_TAG_RE;
function Lge(t) {
  var e = t | 32;
  return e >= 97 && e <= 122;
}
var qge = function(e, n) {
  var r, o, i, s, a = e.pos;
  return !e.md.options.html || (i = e.posMax, e.src.charCodeAt(a) !== 60 || a + 2 >= i) || (r = e.src.charCodeAt(a + 1), r !== 33 && r !== 63 && r !== 47 && !Lge(r)) || (o = e.src.slice(a).match(Mge), !o) ? !1 : (n || (s = e.push("html_inline", "", 0), s.content = e.src.slice(a, a + o[0].length)), e.pos += o[0].length, !0);
}, w_ = Gw, jge = Y.has, Bge = Y.isValidEntityCode, k_ = Y.fromCodePoint, zge = /^&#((?:x[a-f0-9]{1,8}|[0-9]{1,8}));/i, Hge = /^&([a-z][a-z0-9]{1,31});/i, Vge = function(e, n) {
  var r, o, i, s = e.pos, a = e.posMax;
  if (e.src.charCodeAt(s) !== 38)
    return !1;
  if (s + 1 < a) {
    if (r = e.src.charCodeAt(s + 1), r === 35) {
      if (i = e.src.slice(s).match(zge), i)
        return n || (o = i[1][0].toLowerCase() === "x" ? parseInt(i[1].slice(1), 16) : parseInt(i[1], 10), e.pending += Bge(o) ? k_(o) : k_(65533)), e.pos += i[0].length, !0;
    } else if (i = e.src.slice(s).match(Hge), i && jge(w_, i[1]))
      return n || (e.pending += w_[i[1]]), e.pos += i[0].length, !0;
  }
  return n || (e.pending += "&"), e.pos++, !0;
}, Uge = function(e) {
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
}, Gge = function(e) {
  var n, r, o = 0, i = e.tokens, s = e.tokens.length;
  for (n = r = 0; n < s; n++)
    o += i[n].nesting, i[n].level = o, i[n].type === "text" && n + 1 < s && i[n + 1].type === "text" ? i[n + 1].content = i[n].content + i[n + 1].content : (n !== r && (i[r] = i[n]), r++);
  n !== r && (i.length = r);
}, cd = id, S_ = Y.isWhiteSpace, x_ = Y.isPunctChar, E_ = Y.isMdAsciiPunct;
function To(t, e, n, r) {
  this.src = t, this.env = n, this.md = e, this.tokens = r, this.pos = 0, this.posMax = this.src.length, this.level = 0, this.pending = "", this.pendingLevel = 0, this.cache = {}, this.delimiters = [];
}
To.prototype.pushPending = function() {
  var t = new cd("text", "", 0);
  return t.content = this.pending, t.level = this.pendingLevel, this.tokens.push(t), this.pending = "", t;
};
To.prototype.push = function(t, e, n) {
  this.pending && this.pushPending();
  var r = new cd(t, e, n);
  return n < 0 && this.level--, r.level = this.level, n > 0 && this.level++, this.pendingLevel = this.level, this.tokens.push(r), r;
};
To.prototype.scanDelims = function(t, e) {
  var n = t, r, o, i, s, a, c, u, l, f, d = !0, h = !0, w = this.posMax, m = this.src.charCodeAt(t);
  for (r = t > 0 ? this.src.charCodeAt(t - 1) : 32; n < w && this.src.charCodeAt(n) === m; )
    n++;
  return i = n - t, o = n < w ? this.src.charCodeAt(n) : 32, u = E_(r) || x_(String.fromCharCode(r)), f = E_(o) || x_(String.fromCharCode(o)), c = S_(r), l = S_(o), l ? d = !1 : f && (c || u || (d = !1)), c ? h = !1 : u && (l || f || (h = !1)), e ? (s = d, a = h) : (s = d && (!h || u), a = h && (!d || f)), {
    can_open: s,
    can_close: a,
    length: i
  };
};
To.prototype.Token = cd;
var Wge = To, $_ = od, du = [
  ["text", $ge],
  ["newline", Ige],
  ["escape", Age],
  ["backticks", Oge],
  ["strikethrough", Us.tokenize],
  ["emphasis", Gs.tokenize],
  ["link", Pge],
  ["image", Rge],
  ["autolink", Nge],
  ["html_inline", qge],
  ["entity", Vge]
], hu = [
  ["balance_pairs", Uge],
  ["strikethrough", Us.postProcess],
  ["emphasis", Gs.postProcess],
  ["text_collapse", Gge]
];
function Ao() {
  var t;
  for (this.ruler = new $_(), t = 0; t < du.length; t++)
    this.ruler.push(du[t][0], du[t][1]);
  for (this.ruler2 = new $_(), t = 0; t < hu.length; t++)
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
Ao.prototype.State = Wge;
var Kge = Ao, pu, C_;
function Zge() {
  return C_ || (C_ = 1, pu = function(t) {
    var e = {};
    e.src_Any = Ww().source, e.src_Cc = Kw().source, e.src_Z = Zw().source, e.src_P = rd.source, e.src_ZPCc = [e.src_Z, e.src_P, e.src_Cc].join("|"), e.src_ZCc = [e.src_Z, e.src_Cc].join("|");
    var n = "[><｜]";
    return e.src_pseudo_letter = "(?:(?!" + n + "|" + e.src_ZPCc + ")" + e.src_Any + ")", e.src_ip4 = "(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)", e.src_auth = "(?:(?:(?!" + e.src_ZCc + "|[@/\\[\\]()]).)+@)?", e.src_port = "(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?", e.src_host_terminator = "(?=$|" + n + "|" + e.src_ZPCc + ")(?!-|_|:\\d|\\.-|\\.(?!$|" + e.src_ZPCc + "))", e.src_path = "(?:[/?#](?:(?!" + e.src_ZCc + "|" + n + `|[()[\\]{}.,"'?!\\-]).|\\[(?:(?!` + e.src_ZCc + "|\\]).)*\\]|\\((?:(?!" + e.src_ZCc + "|[)]).)*\\)|\\{(?:(?!" + e.src_ZCc + '|[}]).)*\\}|\\"(?:(?!' + e.src_ZCc + `|["]).)+\\"|\\'(?:(?!` + e.src_ZCc + "|[']).)+\\'|\\'(?=" + e.src_pseudo_letter + "|[-]).|\\.{2,4}[a-zA-Z0-9%/]|\\.(?!" + e.src_ZCc + "|[.]).|" + (t && t["---"] ? "\\-(?!--(?:[^-]|$))(?:-*)|" : "\\-+|") + "\\,(?!" + e.src_ZCc + ").|\\!(?!" + e.src_ZCc + "|[!]).|\\?(?!" + e.src_ZCc + "|[?]).)+|\\/)?", e.src_email_name = '[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*', e.src_xn = "xn--[a-z0-9\\-]{1,59}", e.src_domain_root = // Allow letters & digits (http://test1)
    "(?:" + e.src_xn + "|" + e.src_pseudo_letter + "{1,63})", e.src_domain = "(?:" + e.src_xn + "|(?:" + e.src_pseudo_letter + ")|(?:" + e.src_pseudo_letter + "(?:-|" + e.src_pseudo_letter + "){0,61}" + e.src_pseudo_letter + "))", e.src_host = "(?:(?:(?:(?:" + e.src_domain + ")\\.)*" + e.src_domain + "))", e.tpl_host_fuzzy = "(?:" + e.src_ip4 + "|(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%)))", e.tpl_host_no_ip_fuzzy = "(?:(?:(?:" + e.src_domain + ")\\.)+(?:%TLDS%))", e.src_host_strict = e.src_host + e.src_host_terminator, e.tpl_host_fuzzy_strict = e.tpl_host_fuzzy + e.src_host_terminator, e.src_host_port_strict = e.src_host + e.src_port + e.src_host_terminator, e.tpl_host_port_fuzzy_strict = e.tpl_host_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_port_no_ip_fuzzy_strict = e.tpl_host_no_ip_fuzzy + e.src_port + e.src_host_terminator, e.tpl_host_fuzzy_test = "localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:" + e.src_ZPCc + "|>|$))", e.tpl_email_fuzzy = "(^|" + n + '|"|\\(|' + e.src_ZCc + ")(" + e.src_email_name + "@" + e.tpl_host_fuzzy_strict + ")", e.tpl_link_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_fuzzy_strict + e.src_path + ")", e.tpl_link_no_ip_fuzzy = // Fuzzy link can't be prepended with .:/\- and non punctuation.
    // but can start with > (markdown blockquote)
    "(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|" + e.src_ZPCc + "))((?![$+<=>^`|｜])" + e.tpl_host_port_no_ip_fuzzy_strict + e.src_path + ")", e;
  }), pu;
}
function Fl(t) {
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
function Jge(t) {
  return Ws(t) === "[object String]";
}
function Yge(t) {
  return Ws(t) === "[object Object]";
}
function Xge(t) {
  return Ws(t) === "[object RegExp]";
}
function I_(t) {
  return Ws(t) === "[object Function]";
}
function Qge(t) {
  return t.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
var nk = {
  fuzzyLink: !0,
  fuzzyEmail: !0,
  fuzzyIP: !1
};
function eme(t) {
  return Object.keys(t || {}).reduce(function(e, n) {
    return e || nk.hasOwnProperty(n);
  }, !1);
}
var tme = {
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
}, nme = "a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]", rme = "biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");
function ome(t) {
  t.__index__ = -1, t.__text_cache__ = "";
}
function ime(t) {
  return function(e, n) {
    var r = e.slice(n);
    return t.test(r) ? r.match(t)[0].length : 0;
  };
}
function T_() {
  return function(t, e) {
    e.normalize(t);
  };
}
function cs(t) {
  var e = t.re = Zge()(t.__opts__), n = t.__tlds__.slice();
  t.onCompile(), t.__tlds_replaced__ || n.push(nme), n.push(e.src_xn), e.src_tlds = n.join("|");
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
      if (t.__compiled__[a] = u, Yge(c)) {
        Xge(c.validate) ? u.validate = ime(c.validate) : I_(c.validate) ? u.validate = c.validate : i(a, c), I_(c.normalize) ? u.normalize = c.normalize : c.normalize ? i(a, c) : u.normalize = T_();
        return;
      }
      if (Jge(c)) {
        o.push(a);
        return;
      }
      i(a, c);
    }
  }), o.forEach(function(a) {
    t.__compiled__[t.__schemas__[a]] && (t.__compiled__[a].validate = t.__compiled__[t.__schemas__[a]].validate, t.__compiled__[a].normalize = t.__compiled__[t.__schemas__[a]].normalize);
  }), t.__compiled__[""] = { validate: null, normalize: T_() };
  var s = Object.keys(t.__compiled__).filter(function(a) {
    return a.length > 0 && t.__compiled__[a];
  }).map(Qge).join("|");
  t.re.schema_test = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + s + ")", "i"), t.re.schema_search = RegExp("(^|(?!_)(?:[><｜]|" + e.src_ZPCc + "))(" + s + ")", "ig"), t.re.pretest = RegExp(
    "(" + t.re.schema_test.source + ")|(" + t.re.host_fuzzy_test.source + ")|@",
    "i"
  ), ome(t);
}
function sme(t, e) {
  var n = t.__index__, r = t.__last_index__, o = t.__text_cache__.slice(n, r);
  this.schema = t.__schema__.toLowerCase(), this.index = n + e, this.lastIndex = r + e, this.raw = o, this.text = o, this.url = o;
}
function A_(t, e) {
  var n = new sme(t, e);
  return t.__compiled__[n.schema].normalize(n, t), n;
}
function at(t, e) {
  if (!(this instanceof at))
    return new at(t, e);
  e || eme(t) && (e = t, t = {}), this.__opts__ = Fl({}, nk, e), this.__index__ = -1, this.__last_index__ = -1, this.__schema__ = "", this.__text_cache__ = "", this.__schemas__ = Fl({}, tme, t), this.__compiled__ = {}, this.__tlds__ = rme, this.__tlds_replaced__ = !1, this.re = {}, cs(this);
}
at.prototype.add = function(e, n) {
  return this.__schemas__[e] = n, cs(this), this;
};
at.prototype.set = function(e) {
  return this.__opts__ = Fl(this.__opts__, e), this;
};
at.prototype.test = function(e) {
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
at.prototype.pretest = function(e) {
  return this.re.pretest.test(e);
};
at.prototype.testSchemaAt = function(e, n, r) {
  return this.__compiled__[n.toLowerCase()] ? this.__compiled__[n.toLowerCase()].validate(e, r, this) : 0;
};
at.prototype.match = function(e) {
  var n = 0, r = [];
  this.__index__ >= 0 && this.__text_cache__ === e && (r.push(A_(this, n)), n = this.__last_index__);
  for (var o = n ? e.slice(n) : e; this.test(o); )
    r.push(A_(this, n)), o = o.slice(this.__last_index__), n += this.__last_index__;
  return r.length ? r : null;
};
at.prototype.tlds = function(e, n) {
  return e = Array.isArray(e) ? e : [e], n ? (this.__tlds__ = this.__tlds__.concat(e).sort().filter(function(r, o, i) {
    return r !== i[o - 1];
  }).reverse(), cs(this), this) : (this.__tlds__ = e.slice(), this.__tlds_replaced__ = !0, cs(this), this);
};
at.prototype.normalize = function(e) {
  e.schema || (e.url = "http://" + e.url), e.schema === "mailto:" && !/^mailto:/i.test(e.url) && (e.url = "mailto:" + e.url);
};
at.prototype.onCompile = function() {
};
var ame = at, us = { exports: {} };
/*! https://mths.be/punycode v1.4.1 by @mathias */
us.exports;
(function(t, e) {
  (function(n) {
    var r = e && !e.nodeType && e, o = t && !t.nodeType && t, i = typeof Ks == "object" && Ks;
    (i.global === i || i.window === i || i.self === i) && (n = i);
    var s, a = 2147483647, c = 36, u = 1, l = 26, f = 38, d = 700, h = 72, w = 128, m = "-", g = /^xn--/, v = /[^\x20-\x7E]/, k = /[\x2E\u3002\uFF0E\uFF61]/g, y = {
      overflow: "Overflow: input needs wider integers to process",
      "not-basic": "Illegal input >= 0x80 (not a basic code point)",
      "invalid-input": "Invalid input"
    }, x = c - u, F = Math.floor, A = String.fromCharCode, T;
    function D(E) {
      throw new RangeError(y[E]);
    }
    function H(E, I) {
      for (var M = E.length, B = []; M--; )
        B[M] = I(E[M]);
      return B;
    }
    function L(E, I) {
      var M = E.split("@"), B = "";
      M.length > 1 && (B = M[0] + "@", E = M[1]), E = E.replace(k, ".");
      var V = E.split("."), K = H(V, I).join(".");
      return B + K;
    }
    function q(E) {
      for (var I = [], M = 0, B = E.length, V, K; M < B; )
        V = E.charCodeAt(M++), V >= 55296 && V <= 56319 && M < B ? (K = E.charCodeAt(M++), (K & 64512) == 56320 ? I.push(((V & 1023) << 10) + (K & 1023) + 65536) : (I.push(V), M--)) : I.push(V);
      return I;
    }
    function b(E) {
      return H(E, function(I) {
        var M = "";
        return I > 65535 && (I -= 65536, M += A(I >>> 10 & 1023 | 55296), I = 56320 | I & 1023), M += A(I), M;
      }).join("");
    }
    function _(E) {
      return E - 48 < 10 ? E - 22 : E - 65 < 26 ? E - 65 : E - 97 < 26 ? E - 97 : c;
    }
    function p(E, I) {
      return E + 22 + 75 * (E < 26) - ((I != 0) << 5);
    }
    function P(E, I, M) {
      var B = 0;
      for (E = M ? F(E / d) : E >> 1, E += F(E / I); E > x * l >> 1; B += c)
        E = F(E / x);
      return F(B + (x + 1) * E / (E + f));
    }
    function N(E) {
      var I = [], M = E.length, B, V = 0, K = w, G = h, Q, ue, _e, we, ae, Le, qe, ht, pt;
      for (Q = E.lastIndexOf(m), Q < 0 && (Q = 0), ue = 0; ue < Q; ++ue)
        E.charCodeAt(ue) >= 128 && D("not-basic"), I.push(E.charCodeAt(ue));
      for (_e = Q > 0 ? Q + 1 : 0; _e < M; ) {
        for (we = V, ae = 1, Le = c; _e >= M && D("invalid-input"), qe = _(E.charCodeAt(_e++)), (qe >= c || qe > F((a - V) / ae)) && D("overflow"), V += qe * ae, ht = Le <= G ? u : Le >= G + l ? l : Le - G, !(qe < ht); Le += c)
          pt = c - ht, ae > F(a / pt) && D("overflow"), ae *= pt;
        B = I.length + 1, G = P(V - we, B, we == 0), F(V / B) > a - K && D("overflow"), K += F(V / B), V %= B, I.splice(V++, 0, K);
      }
      return b(I);
    }
    function C(E) {
      var I, M, B, V, K, G, Q, ue, _e, we, ae, Le = [], qe, ht, pt, Xt;
      for (E = q(E), qe = E.length, I = w, M = 0, K = h, G = 0; G < qe; ++G)
        ae = E[G], ae < 128 && Le.push(A(ae));
      for (B = V = Le.length, V && Le.push(m); B < qe; ) {
        for (Q = a, G = 0; G < qe; ++G)
          ae = E[G], ae >= I && ae < Q && (Q = ae);
        for (ht = B + 1, Q - I > F((a - M) / ht) && D("overflow"), M += (Q - I) * ht, I = Q, G = 0; G < qe; ++G)
          if (ae = E[G], ae < I && ++M > a && D("overflow"), ae == I) {
            for (ue = M, _e = c; we = _e <= K ? u : _e >= K + l ? l : _e - K, !(ue < we); _e += c)
              Xt = ue - we, pt = c - we, Le.push(
                A(p(we + Xt % pt, 0))
              ), ue = F(Xt / pt);
            Le.push(A(p(ue, 0))), K = P(M, ht, B == V), M = 0, ++B;
          }
        ++M, ++I;
      }
      return Le.join("");
    }
    function S(E) {
      return L(E, function(I) {
        return g.test(I) ? N(I.slice(4).toLowerCase()) : I;
      });
    }
    function O(E) {
      return L(E, function(I) {
        return v.test(I) ? "xn--" + C(I) : I;
      });
    }
    if (s = {
      /**
       * A string representing the current Punycode.js version number.
       * @memberOf punycode
       * @type String
       */
      version: "1.4.1",
      /**
       * An object of methods to convert from JavaScript's internal character
       * representation (UCS-2) to Unicode code points, and back.
       * @see <https://mathiasbynens.be/notes/javascript-encoding>
       * @memberOf punycode
       * @type Object
       */
      ucs2: {
        decode: q,
        encode: b
      },
      decode: N,
      encode: C,
      toASCII: O,
      toUnicode: S
    }, r && o)
      if (t.exports == r)
        o.exports = s;
      else
        for (T in s)
          s.hasOwnProperty(T) && (r[T] = s[T]);
    else
      n.punycode = s;
  })(Ks);
})(us, us.exports);
var cme = us.exports, ume = {
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
}, lme = {
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
}, fme = {
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
}, ao = Y, dme = Bs, hme = kve, pme = Uve, vme = xge, gme = Kge, mme = ame, vr = Pr, rk = cme, _me = {
  default: ume,
  zero: lme,
  commonmark: fme
}, bme = /^(vbscript|javascript|file|data):/, yme = /^data:image\/(gif|png|jpeg|webp);/;
function wme(t) {
  var e = t.trim().toLowerCase();
  return bme.test(e) ? !!yme.test(e) : !0;
}
var ok = ["http:", "https:", "mailto:"];
function kme(t) {
  var e = vr.parse(t, !0);
  if (e.hostname && (!e.protocol || ok.indexOf(e.protocol) >= 0))
    try {
      e.hostname = rk.toASCII(e.hostname);
    } catch {
    }
  return vr.encode(vr.format(e));
}
function Sme(t) {
  var e = vr.parse(t, !0);
  if (e.hostname && (!e.protocol || ok.indexOf(e.protocol) >= 0))
    try {
      e.hostname = rk.toUnicode(e.hostname);
    } catch {
    }
  return vr.decode(vr.format(e));
}
function ct(t, e) {
  if (!(this instanceof ct))
    return new ct(t, e);
  e || ao.isString(t) || (e = t || {}, t = "default"), this.inline = new gme(), this.block = new vme(), this.core = new pme(), this.renderer = new hme(), this.linkify = new mme(), this.validateLink = wme, this.normalizeLink = kme, this.normalizeLinkText = Sme, this.utils = ao, this.helpers = ao.assign({}, dme), this.options = {}, this.configure(t), e && this.set(e);
}
ct.prototype.set = function(t) {
  return ao.assign(this.options, t), this;
};
ct.prototype.configure = function(t) {
  var e = this, n;
  if (ao.isString(t) && (n = t, t = _me[n], !t))
    throw new Error('Wrong `markdown-it` preset "' + n + '", check name');
  if (!t)
    throw new Error("Wrong `markdown-it` preset, can't be empty");
  return t.options && e.set(t.options), t.components && Object.keys(t.components).forEach(function(r) {
    t.components[r].rules && e[r].ruler.enableOnly(t.components[r].rules), t.components[r].rules2 && e[r].ruler2.enableOnly(t.components[r].rules2);
  }), this;
};
ct.prototype.enable = function(t, e) {
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
ct.prototype.disable = function(t, e) {
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
ct.prototype.use = function(t) {
  var e = [this].concat(Array.prototype.slice.call(arguments, 1));
  return t.apply(t, e), this;
};
ct.prototype.parse = function(t, e) {
  if (typeof t != "string")
    throw new Error("Input data should be a String");
  var n = new this.core.State(t, this, e);
  return this.core.process(n), n.tokens;
};
ct.prototype.render = function(t, e) {
  return e = e || {}, this.renderer.render(this.parse(t, e), this.options, e);
};
ct.prototype.parseInline = function(t, e) {
  var n = new this.core.State(t, this, e);
  return n.inlineMode = !0, this.core.process(n), n.tokens;
};
ct.prototype.renderInline = function(t, e) {
  return e = e || {}, this.renderer.render(this.parseInline(t, e), this.options, e);
};
var xme = ct, Eme = xme;
const $me = /* @__PURE__ */ P_(Eme), Cme = "😀", Ime = "😃", Tme = "😄", Ame = "😁", Ome = "😆", Dme = "😆", Pme = "😅", Fme = "😂", Rme = "🤣", Nme = "☺️", Mme = "😊", Lme = "😇", qme = "🙂", jme = "🙃", Bme = "😉", zme = "😌", Hme = "😍", Vme = "😘", Ume = "😗", Gme = "😙", Wme = "😚", Kme = "😋", Zme = "😜", Jme = "😝", Yme = "😛", Xme = "🤑", Qme = "🤗", e_e = "🤓", t_e = "😎", n_e = "🤡", r_e = "🤠", o_e = "😏", i_e = "😒", s_e = "😞", a_e = "😔", c_e = "😟", u_e = "😕", l_e = "🙁", f_e = "☹️", d_e = "😣", h_e = "😖", p_e = "😫", v_e = "😩", g_e = "😤", m_e = "😠", b_e = "😡", y_e = "😡", w_e = "😶", k_e = "😐", S_e = "😑", x_e = "😯", E_e = "😦", $_e = "😧", C_e = "😮", I_e = "😲", T_e = "😵", A_e = "😳", O_e = "😱", D_e = "😨", P_e = "😰", F_e = "😢", R_e = "😥", N_e = "🤤", M_e = "😭", L_e = "😓", q_e = "😪", j_e = "😴", B_e = "🙄", z_e = "🤔", H_e = "🤥", V_e = "😬", U_e = "🤐", G_e = "🤢", W_e = "🤧", K_e = "😷", Z_e = "🤒", J_e = "🤕", Y_e = "😈", X_e = "👿", Q_e = "👹", ebe = "👺", tbe = "💩", nbe = "💩", rbe = "💩", obe = "👻", ibe = "💀", sbe = "☠️", abe = "👽", cbe = "👾", ube = "🤖", lbe = "🎃", fbe = "😺", dbe = "😸", hbe = "😹", pbe = "😻", vbe = "😼", gbe = "😽", mbe = "🙀", _be = "😿", bbe = "😾", ybe = "👐", wbe = "🙌", kbe = "👏", Sbe = "🙏", xbe = "🤝", Ebe = "👍", $be = "👎", Cbe = "👊", Ibe = "👊", Tbe = "👊", Abe = "✊", Obe = "✊", Dbe = "🤛", Pbe = "🤜", Fbe = "🤞", Rbe = "✌️", Nbe = "🤘", Mbe = "👌", Lbe = "👈", qbe = "👉", jbe = "👆", Bbe = "👇", zbe = "☝️", Hbe = "✋", Vbe = "✋", Ube = "🤚", Gbe = "🖐", Wbe = "🖖", Kbe = "👋", Zbe = "🤙", Jbe = "💪", Ybe = "🖕", Xbe = "🖕", Qbe = "✍️", e0e = "🤳", t0e = "💅", n0e = "💍", r0e = "💄", o0e = "💋", i0e = "👄", s0e = "👅", a0e = "👂", c0e = "👃", u0e = "👣", l0e = "👁", f0e = "👀", d0e = "🗣", h0e = "👤", p0e = "👥", v0e = "👶", g0e = "👦", m0e = "👧", _0e = "👨", b0e = "👩", y0e = "👱‍♀", w0e = "👱", k0e = "👱", S0e = "👴", x0e = "👵", E0e = "👲", $0e = "👳‍♀", C0e = "👳", I0e = "👮‍♀", T0e = "👮", A0e = "👮", O0e = "👷‍♀", D0e = "👷", P0e = "👷", F0e = "💂‍♀", R0e = "💂", N0e = "🕵️‍♀️", M0e = "🕵", L0e = "🕵", q0e = "👩‍⚕", j0e = "👨‍⚕", B0e = "👩‍🌾", z0e = "👨‍🌾", H0e = "👩‍🍳", V0e = "👨‍🍳", U0e = "👩‍🎓", G0e = "👨‍🎓", W0e = "👩‍🎤", K0e = "👨‍🎤", Z0e = "👩‍🏫", J0e = "👨‍🏫", Y0e = "👩‍🏭", X0e = "👨‍🏭", Q0e = "👩‍💻", eye = "👨‍💻", tye = "👩‍💼", nye = "👨‍💼", rye = "👩‍🔧", oye = "👨‍🔧", iye = "👩‍🔬", sye = "👨‍🔬", aye = "👩‍🎨", cye = "👨‍🎨", uye = "👩‍🚒", lye = "👨‍🚒", fye = "👩‍✈", dye = "👨‍✈", hye = "👩‍🚀", pye = "👨‍🚀", vye = "👩‍⚖", gye = "👨‍⚖", mye = "🤶", _ye = "🎅", bye = "👸", yye = "🤴", wye = "👰", kye = "🤵", Sye = "👼", xye = "🤰", Eye = "🙇‍♀", $ye = "🙇", Cye = "🙇", Iye = "💁", Tye = "💁", Aye = "💁", Oye = "💁‍♂", Dye = "💁‍♂", Pye = "🙅", Fye = "🙅", Rye = "🙅", Nye = "🙅‍♂", Mye = "🙅‍♂", Lye = "🙆", qye = "🙆‍♂", jye = "🙋", Bye = "🙋", zye = "🙋‍♂", Hye = "🤦‍♀", Vye = "🤦‍♂", Uye = "🤷‍♀", Gye = "🤷‍♂", Wye = "🙎", Kye = "🙎", Zye = "🙎‍♂", Jye = "🙍", Yye = "🙍", Xye = "🙍‍♂", Qye = "💇", ewe = "💇", twe = "💇‍♂", nwe = "💆", rwe = "💆", owe = "💆‍♂", iwe = "🕴", swe = "💃", awe = "🕺", cwe = "👯", uwe = "👯", lwe = "👯‍♂", fwe = "🚶‍♀", dwe = "🚶", hwe = "🚶", pwe = "🏃‍♀", vwe = "🏃", gwe = "🏃", mwe = "🏃", _we = "👫", bwe = "👭", ywe = "👬", wwe = "💑", kwe = "💑", Swe = "👩‍❤️‍👩", xwe = "👨‍❤️‍👨", Ewe = "💏", $we = "👩‍❤️‍💋‍👩", Cwe = "👨‍❤️‍💋‍👨", Iwe = "👪", Twe = "👪", Awe = "👨‍👩‍👧", Owe = "👨‍👩‍👧‍👦", Dwe = "👨‍👩‍👦‍👦", Pwe = "👨‍👩‍👧‍👧", Fwe = "👩‍👩‍👦", Rwe = "👩‍👩‍👧", Nwe = "👩‍👩‍👧‍👦", Mwe = "👩‍👩‍👦‍👦", Lwe = "👩‍👩‍👧‍👧", qwe = "👨‍👨‍👦", jwe = "👨‍👨‍👧", Bwe = "👨‍👨‍👧‍👦", zwe = "👨‍👨‍👦‍👦", Hwe = "👨‍👨‍👧‍👧", Vwe = "👩‍👦", Uwe = "👩‍👧", Gwe = "👩‍👧‍👦", Wwe = "👩‍👦‍👦", Kwe = "👩‍👧‍👧", Zwe = "👨‍👦", Jwe = "👨‍👧", Ywe = "👨‍👧‍👦", Xwe = "👨‍👦‍👦", Qwe = "👨‍👧‍👧", eke = "👚", tke = "👕", nke = "👕", rke = "👖", oke = "👔", ike = "👗", ske = "👙", ake = "👘", cke = "👠", uke = "👡", lke = "👢", fke = "👞", dke = "👞", hke = "👟", pke = "👒", vke = "🎩", gke = "🎓", mke = "👑", _ke = "⛑", bke = "🎒", yke = "👝", wke = "👛", kke = "👜", Ske = "💼", xke = "👓", Eke = "🕶", $ke = "🌂", Cke = "☂️", Ike = "🐶", Tke = "🐱", Ake = "🐭", Oke = "🐹", Dke = "🐰", Pke = "🦊", Fke = "🐻", Rke = "🐼", Nke = "🐨", Mke = "🐯", Lke = "🦁", qke = "🐮", jke = "🐷", Bke = "🐽", zke = "🐸", Hke = "🐵", Vke = "🙈", Uke = "🙉", Gke = "🙊", Wke = "🐒", Kke = "🐔", Zke = "🐧", Jke = "🐦", Yke = "🐤", Xke = "🐣", Qke = "🐥", e1e = "🦆", t1e = "🦅", n1e = "🦉", r1e = "🦇", o1e = "🐺", i1e = "🐗", s1e = "🐴", a1e = "🦄", c1e = "🐝", u1e = "🐝", l1e = "🐛", f1e = "🦋", d1e = "🐌", h1e = "🐚", p1e = "🐞", v1e = "🐜", g1e = "🕷", m1e = "🕸", _1e = "🐢", b1e = "🐍", y1e = "🦎", w1e = "🦂", k1e = "🦀", S1e = "🦑", x1e = "🐙", E1e = "🦐", $1e = "🐠", C1e = "🐟", I1e = "🐡", T1e = "🐬", A1e = "🐬", O1e = "🦈", D1e = "🐳", P1e = "🐋", F1e = "🐊", R1e = "🐆", N1e = "🐅", M1e = "🐃", L1e = "🐂", q1e = "🐄", j1e = "🦌", B1e = "🐪", z1e = "🐫", H1e = "🐘", V1e = "🦏", U1e = "🦍", G1e = "🐎", W1e = "🐖", K1e = "🐐", Z1e = "🐏", J1e = "🐑", Y1e = "🐕", X1e = "🐩", Q1e = "🐈", eSe = "🐓", tSe = "🦃", nSe = "🕊", rSe = "🐇", oSe = "🐁", iSe = "🐀", sSe = "🐿", aSe = "🐾", cSe = "🐾", uSe = "🐉", lSe = "🐲", fSe = "🌵", dSe = "🎄", hSe = "🌲", pSe = "🌳", vSe = "🌴", gSe = "🌱", mSe = "🌿", _Se = "☘️", bSe = "🍀", ySe = "🎍", wSe = "🎋", kSe = "🍃", SSe = "🍂", xSe = "🍁", ESe = "🍄", $Se = "🌾", CSe = "💐", ISe = "🌷", TSe = "🌹", ASe = "🥀", OSe = "🌻", DSe = "🌼", PSe = "🌸", FSe = "🌺", RSe = "🌎", NSe = "🌍", MSe = "🌏", LSe = "🌕", qSe = "🌖", jSe = "🌗", BSe = "🌘", zSe = "🌑", HSe = "🌒", VSe = "🌓", USe = "🌔", GSe = "🌔", WSe = "🌚", KSe = "🌝", ZSe = "🌞", JSe = "🌛", YSe = "🌜", XSe = "🌙", QSe = "💫", exe = "⭐️", txe = "🌟", nxe = "✨", rxe = "⚡️", oxe = "🔥", ixe = "💥", sxe = "💥", axe = "☄", cxe = "☀️", uxe = "🌤", lxe = "⛅️", fxe = "🌥", dxe = "🌦", hxe = "🌈", pxe = "☁️", vxe = "🌧", gxe = "⛈", mxe = "🌩", _xe = "🌨", bxe = "☃️", yxe = "⛄️", wxe = "❄️", kxe = "🌬", Sxe = "💨", xxe = "🌪", Exe = "🌫", $xe = "🌊", Cxe = "💧", Ixe = "💦", Txe = "☔️", Axe = "🍏", Oxe = "🍎", Dxe = "🍐", Pxe = "🍊", Fxe = "🍊", Rxe = "🍊", Nxe = "🍋", Mxe = "🍌", Lxe = "🍉", qxe = "🍇", jxe = "🍓", Bxe = "🍈", zxe = "🍒", Hxe = "🍑", Vxe = "🍍", Uxe = "🥝", Gxe = "🥑", Wxe = "🍅", Kxe = "🍆", Zxe = "🥒", Jxe = "🥕", Yxe = "🌽", Xxe = "🌶", Qxe = "🥔", eEe = "🍠", tEe = "🌰", nEe = "🥜", rEe = "🍯", oEe = "🥐", iEe = "🍞", sEe = "🥖", aEe = "🧀", cEe = "🥚", uEe = "🍳", lEe = "🥓", fEe = "🥞", dEe = "🍤", hEe = "🍗", pEe = "🍖", vEe = "🍕", gEe = "🌭", mEe = "🍔", _Ee = "🍟", bEe = "🥙", yEe = "🌮", wEe = "🌯", kEe = "🥗", SEe = "🥘", xEe = "🍝", EEe = "🍜", $Ee = "🍲", CEe = "🍥", IEe = "🍣", TEe = "🍱", AEe = "🍛", OEe = "🍚", DEe = "🍙", PEe = "🍘", FEe = "🍢", REe = "🍡", NEe = "🍧", MEe = "🍨", LEe = "🍦", qEe = "🍰", jEe = "🎂", BEe = "🍮", zEe = "🍭", HEe = "🍬", VEe = "🍫", UEe = "🍿", GEe = "🍩", WEe = "🍪", KEe = "🥛", ZEe = "🍼", JEe = "☕️", YEe = "🍵", XEe = "🍶", QEe = "🍺", e$e = "🍻", t$e = "🥂", n$e = "🍷", r$e = "🥃", o$e = "🍸", i$e = "🍹", s$e = "🍾", a$e = "🥄", c$e = "🍴", u$e = "🍽", l$e = "⚽️", f$e = "🏀", d$e = "🏈", h$e = "⚾️", p$e = "🎾", v$e = "🏐", g$e = "🏉", m$e = "🏓", _$e = "🏸", b$e = "🥅", y$e = "🏒", w$e = "🏑", k$e = "🏏", S$e = "⛳️", x$e = "🏹", E$e = "🎣", $$e = "🥊", C$e = "🥋", I$e = "⛸", T$e = "🎿", A$e = "⛷", O$e = "🏂", D$e = "🏋️‍♀️", P$e = "🏋", F$e = "🤺", R$e = "🤼‍♀", N$e = "🤼‍♂", M$e = "🤸‍♀", L$e = "🤸‍♂", q$e = "⛹️‍♀️", j$e = "⛹", B$e = "🤾‍♀", z$e = "🤾‍♂", H$e = "🏌️‍♀️", V$e = "🏌", U$e = "🏄‍♀", G$e = "🏄", W$e = "🏄", K$e = "🏊‍♀", Z$e = "🏊", J$e = "🏊", Y$e = "🤽‍♀", X$e = "🤽‍♂", Q$e = "🚣‍♀", eCe = "🚣", tCe = "🚣", nCe = "🏇", rCe = "🚴‍♀", oCe = "🚴", iCe = "🚴", sCe = "🚵‍♀", aCe = "🚵", cCe = "🚵", uCe = "🎽", lCe = "🏅", fCe = "🎖", dCe = "🏆", hCe = "🏵", pCe = "🎗", vCe = "🎫", gCe = "🎟", mCe = "🎪", _Ce = "🤹‍♀", bCe = "🤹‍♂", yCe = "🎭", wCe = "🎨", kCe = "🎬", SCe = "🎤", xCe = "🎧", ECe = "🎼", $Ce = "🎹", CCe = "🥁", ICe = "🎷", TCe = "🎺", ACe = "🎸", OCe = "🎻", DCe = "🎲", PCe = "🎯", FCe = "🎳", RCe = "🎮", NCe = "🎰", MCe = "🚗", LCe = "🚗", qCe = "🚕", jCe = "🚙", BCe = "🚌", zCe = "🚎", HCe = "🏎", VCe = "🚓", UCe = "🚑", GCe = "🚒", WCe = "🚐", KCe = "🚚", ZCe = "🚛", JCe = "🚜", YCe = "🛴", XCe = "🚲", QCe = "🛵", e2e = "🏍", t2e = "🚨", n2e = "🚔", r2e = "🚍", o2e = "🚘", i2e = "🚖", s2e = "🚡", a2e = "🚠", c2e = "🚟", u2e = "🚃", l2e = "🚋", f2e = "🚞", d2e = "🚝", h2e = "🚄", p2e = "🚅", v2e = "🚈", g2e = "🚂", m2e = "🚆", _2e = "🚇", b2e = "🚊", y2e = "🚉", w2e = "🚁", k2e = "🛩", S2e = "✈️", x2e = "🛫", E2e = "🛬", $2e = "🚀", C2e = "🛰", I2e = "💺", T2e = "🛶", A2e = "⛵️", O2e = "⛵️", D2e = "🛥", P2e = "🚤", F2e = "🛳", R2e = "⛴", N2e = "🚢", M2e = "⚓️", L2e = "🚧", q2e = "⛽️", j2e = "🚏", B2e = "🚦", z2e = "🚥", H2e = "🗺", V2e = "🗿", U2e = "🗽", G2e = "⛲️", W2e = "🗼", K2e = "🏰", Z2e = "🏯", J2e = "🏟", Y2e = "🎡", X2e = "🎢", Q2e = "🎠", eIe = "⛱", tIe = "🏖", nIe = "🏝", rIe = "⛰", oIe = "🏔", iIe = "🗻", sIe = "🌋", aIe = "🏜", cIe = "🏕", uIe = "⛺️", lIe = "🛤", fIe = "🛣", dIe = "🏗", hIe = "🏭", pIe = "🏠", vIe = "🏡", gIe = "🏘", mIe = "🏚", _Ie = "🏢", bIe = "🏬", yIe = "🏣", wIe = "🏤", kIe = "🏥", SIe = "🏦", xIe = "🏨", EIe = "🏪", $Ie = "🏫", CIe = "🏩", IIe = "💒", TIe = "🏛", AIe = "⛪️", OIe = "🕌", DIe = "🕍", PIe = "🕋", FIe = "⛩", RIe = "🗾", NIe = "🎑", MIe = "🏞", LIe = "🌅", qIe = "🌄", jIe = "🌠", BIe = "🎇", zIe = "🎆", HIe = "🌇", VIe = "🌆", UIe = "🏙", GIe = "🌃", WIe = "🌌", KIe = "🌉", ZIe = "🌁", JIe = "⌚️", YIe = "📱", XIe = "📲", QIe = "💻", eTe = "⌨️", tTe = "🖥", nTe = "🖨", rTe = "🖱", oTe = "🖲", iTe = "🕹", sTe = "🗜", aTe = "💽", cTe = "💾", uTe = "💿", lTe = "📀", fTe = "📼", dTe = "📷", hTe = "📸", pTe = "📹", vTe = "🎥", gTe = "📽", mTe = "🎞", _Te = "📞", bTe = "☎️", yTe = "☎️", wTe = "📟", kTe = "📠", STe = "📺", xTe = "📻", ETe = "🎙", $Te = "🎚", CTe = "🎛", ITe = "⏱", TTe = "⏲", ATe = "⏰", OTe = "🕰", DTe = "⌛️", PTe = "⏳", FTe = "📡", RTe = "🔋", NTe = "🔌", MTe = "💡", LTe = "🔦", qTe = "🕯", jTe = "🗑", BTe = "🛢", zTe = "💸", HTe = "💵", VTe = "💴", UTe = "💶", GTe = "💷", WTe = "💰", KTe = "💳", ZTe = "💎", JTe = "⚖️", YTe = "🔧", XTe = "🔨", QTe = "⚒", eAe = "🛠", tAe = "⛏", nAe = "🔩", rAe = "⚙️", oAe = "⛓", iAe = "🔫", sAe = "💣", aAe = "🔪", cAe = "🔪", uAe = "🗡", lAe = "⚔️", fAe = "🛡", dAe = "🚬", hAe = "⚰️", pAe = "⚱️", vAe = "🏺", gAe = "🔮", mAe = "📿", _Ae = "💈", bAe = "⚗️", yAe = "🔭", wAe = "🔬", kAe = "🕳", SAe = "💊", xAe = "💉", EAe = "🌡", $Ae = "🚽", CAe = "🚰", IAe = "🚿", TAe = "🛁", AAe = "🛀", OAe = "🛎", DAe = "🔑", PAe = "🗝", FAe = "🚪", RAe = "🛋", NAe = "🛏", MAe = "🛌", LAe = "🖼", qAe = "🛍", jAe = "🛒", BAe = "🎁", zAe = "🎈", HAe = "🎏", VAe = "🎀", UAe = "🎊", GAe = "🎉", WAe = "🎎", KAe = "🏮", ZAe = "🏮", JAe = "🎐", YAe = "✉️", XAe = "✉️", QAe = "📩", eOe = "📨", tOe = "💌", nOe = "📥", rOe = "📤", oOe = "🏷", iOe = "📪", sOe = "📫", aOe = "📬", cOe = "📭", uOe = "📮", lOe = "📯", fOe = "📜", dOe = "📃", hOe = "📄", pOe = "📑", vOe = "📊", gOe = "📈", mOe = "📉", _Oe = "🗒", bOe = "🗓", yOe = "📆", wOe = "📅", kOe = "📇", SOe = "🗃", xOe = "🗳", EOe = "🗄", $Oe = "📋", COe = "📁", IOe = "📂", TOe = "🗂", AOe = "🗞", OOe = "📰", DOe = "📓", POe = "📔", FOe = "📒", ROe = "📕", NOe = "📗", MOe = "📘", LOe = "📙", qOe = "📚", jOe = "📖", BOe = "📖", zOe = "🔖", HOe = "🔗", VOe = "📎", UOe = "🖇", GOe = "📐", WOe = "📏", KOe = "📌", ZOe = "📍", JOe = "✂️", YOe = "🖊", XOe = "🖋", QOe = "✒️", eDe = "🖌", tDe = "🖍", nDe = "📝", rDe = "📝", oDe = "✏️", iDe = "🔍", sDe = "🔎", aDe = "🔏", cDe = "🔐", uDe = "🔒", lDe = "🔓", fDe = "❤️", dDe = "💛", hDe = "💚", pDe = "💙", vDe = "💜", gDe = "🖤", mDe = "💔", _De = "❣️", bDe = "💕", yDe = "💞", wDe = "💓", kDe = "💗", SDe = "💖", xDe = "💘", EDe = "💝", $De = "💟", CDe = "☮️", IDe = "✝️", TDe = "☪️", ADe = "🕉", ODe = "☸️", DDe = "✡️", PDe = "🔯", FDe = "🕎", RDe = "☯️", NDe = "☦️", MDe = "🛐", LDe = "⛎", qDe = "♈️", jDe = "♉️", BDe = "♊️", zDe = "♋️", HDe = "♌️", VDe = "♍️", UDe = "♎️", GDe = "♏️", WDe = "♐️", KDe = "♑️", ZDe = "♒️", JDe = "♓️", YDe = "🆔", XDe = "⚛️", QDe = "🉑", ePe = "☢️", tPe = "☣️", nPe = "📴", rPe = "📳", oPe = "✴️", iPe = "🆚", sPe = "💮", aPe = "🉐", cPe = "㊙️", uPe = "㊗️", lPe = "🈵", fPe = "🅰️", dPe = "🅱️", hPe = "🆎", pPe = "🆑", vPe = "🅾️", gPe = "🆘", mPe = "❌", _Pe = "⭕️", bPe = "🛑", yPe = "⛔️", wPe = "📛", kPe = "🚫", SPe = "💢", xPe = "♨️", EPe = "🚷", $Pe = "🚯", CPe = "🚳", IPe = "🔞", TPe = "📵", APe = "🚭", OPe = "❗️", DPe = "❗️", PPe = "❕", FPe = "❓", RPe = "❔", NPe = "‼️", MPe = "⁉️", LPe = "🔅", qPe = "🔆", jPe = "〽️", BPe = "⚠️", zPe = "🚸", HPe = "🔱", VPe = "⚜️", UPe = "🔰", GPe = "♻️", WPe = "✅", KPe = "💹", ZPe = "❇️", JPe = "✳️", YPe = "❎", XPe = "🌐", QPe = "💠", e3e = "Ⓜ️", t3e = "🌀", n3e = "💤", r3e = "🏧", o3e = "🚾", i3e = "♿️", s3e = "🅿️", a3e = "🈂️", c3e = "🛂", u3e = "🛃", l3e = "🛄", f3e = "🛅", d3e = "🚹", h3e = "🚺", p3e = "🚼", v3e = "🚻", g3e = "🚮", m3e = "🎦", _3e = "📶", b3e = "🈁", y3e = "🔣", w3e = "ℹ️", k3e = "🔤", S3e = "🔡", x3e = "🔠", E3e = "🆖", $3e = "🆗", C3e = "🆙", I3e = "🆒", T3e = "🆓", A3e = "0️⃣", O3e = "1️⃣", D3e = "2️⃣", P3e = "3️⃣", F3e = "4️⃣", R3e = "5️⃣", N3e = "6️⃣", M3e = "7️⃣", L3e = "8️⃣", q3e = "9️⃣", j3e = "🔟", B3e = "#️⃣", z3e = "*️⃣", H3e = "▶️", V3e = "⏸", U3e = "⏯", G3e = "⏹", W3e = "⏺", K3e = "⏭", Z3e = "⏮", J3e = "⏩", Y3e = "⏪", X3e = "⏫", Q3e = "⏬", eFe = "◀️", tFe = "🔼", nFe = "🔽", rFe = "➡️", oFe = "⬅️", iFe = "⬆️", sFe = "⬇️", aFe = "↗️", cFe = "↘️", uFe = "↙️", lFe = "↖️", fFe = "↕️", dFe = "↔️", hFe = "↪️", pFe = "↩️", vFe = "⤴️", gFe = "⤵️", mFe = "🔀", _Fe = "🔁", bFe = "🔂", yFe = "🔄", wFe = "🔃", kFe = "🎵", SFe = "🎶", xFe = "➕", EFe = "➖", $Fe = "➗", CFe = "✖️", IFe = "💲", TFe = "💱", AFe = "™️", OFe = "©️", DFe = "®️", PFe = "〰️", FFe = "➰", RFe = "➿", NFe = "🔚", MFe = "🔙", LFe = "🔛", qFe = "🔝", jFe = "🔜", BFe = "✔️", zFe = "☑️", HFe = "🔘", VFe = "⚪️", UFe = "⚫️", GFe = "🔴", WFe = "🔵", KFe = "🔺", ZFe = "🔻", JFe = "🔸", YFe = "🔹", XFe = "🔶", QFe = "🔷", eRe = "🔳", tRe = "🔲", nRe = "▪️", rRe = "▫️", oRe = "◾️", iRe = "◽️", sRe = "◼️", aRe = "◻️", cRe = "⬛️", uRe = "⬜️", lRe = "🔈", fRe = "🔇", dRe = "🔉", hRe = "🔊", pRe = "🔔", vRe = "🔕", gRe = "📣", mRe = "📢", _Re = "👁‍🗨", bRe = "💬", yRe = "💭", wRe = "🗯", kRe = "♠️", SRe = "♣️", xRe = "♥️", ERe = "♦️", $Re = "🃏", CRe = "🎴", IRe = "🀄️", TRe = "🕐", ARe = "🕑", ORe = "🕒", DRe = "🕓", PRe = "🕔", FRe = "🕕", RRe = "🕖", NRe = "🕗", MRe = "🕘", LRe = "🕙", qRe = "🕚", jRe = "🕛", BRe = "🕜", zRe = "🕝", HRe = "🕞", VRe = "🕟", URe = "🕠", GRe = "🕡", WRe = "🕢", KRe = "🕣", ZRe = "🕤", JRe = "🕥", YRe = "🕦", XRe = "🕧", QRe = "🏳️", eNe = "🏴", tNe = "🏁", nNe = "🚩", rNe = "🏳️‍🌈", oNe = "🇦🇫", iNe = "🇦🇽", sNe = "🇦🇱", aNe = "🇩🇿", cNe = "🇦🇸", uNe = "🇦🇩", lNe = "🇦🇴", fNe = "🇦🇮", dNe = "🇦🇶", hNe = "🇦🇬", pNe = "🇦🇷", vNe = "🇦🇲", gNe = "🇦🇼", mNe = "🇦🇺", _Ne = "🇦🇹", bNe = "🇦🇿", yNe = "🇧🇸", wNe = "🇧🇭", kNe = "🇧🇩", SNe = "🇧🇧", xNe = "🇧🇾", ENe = "🇧🇪", $Ne = "🇧🇿", CNe = "🇧🇯", INe = "🇧🇲", TNe = "🇧🇹", ANe = "🇧🇴", ONe = "🇧🇶", DNe = "🇧🇦", PNe = "🇧🇼", FNe = "🇧🇷", RNe = "🇮🇴", NNe = "🇻🇬", MNe = "🇧🇳", LNe = "🇧🇬", qNe = "🇧🇫", jNe = "🇧🇮", BNe = "🇨🇻", zNe = "🇰🇭", HNe = "🇨🇲", VNe = "🇨🇦", UNe = "🇮🇨", GNe = "🇰🇾", WNe = "🇨🇫", KNe = "🇹🇩", ZNe = "🇨🇱", JNe = "🇨🇳", YNe = "🇨🇽", XNe = "🇨🇨", QNe = "🇨🇴", eMe = "🇰🇲", tMe = "🇨🇬", nMe = "🇨🇩", rMe = "🇨🇰", oMe = "🇨🇷", iMe = "🇨🇮", sMe = "🇭🇷", aMe = "🇨🇺", cMe = "🇨🇼", uMe = "🇨🇾", lMe = "🇨🇿", fMe = "🇩🇰", dMe = "🇩🇯", hMe = "🇩🇲", pMe = "🇩🇴", vMe = "🇪🇨", gMe = "🇪🇬", mMe = "🇸🇻", _Me = "🇬🇶", bMe = "🇪🇷", yMe = "🇪🇪", wMe = "🇪🇹", kMe = "🇪🇺", SMe = "🇪🇺", xMe = "🇫🇰", EMe = "🇫🇴", $Me = "🇫🇯", CMe = "🇫🇮", IMe = "🇫🇷", TMe = "🇬🇫", AMe = "🇵🇫", OMe = "🇹🇫", DMe = "🇬🇦", PMe = "🇬🇲", FMe = "🇬🇪", RMe = "🇩🇪", NMe = "🇬🇭", MMe = "🇬🇮", LMe = "🇬🇷", qMe = "🇬🇱", jMe = "🇬🇩", BMe = "🇬🇵", zMe = "🇬🇺", HMe = "🇬🇹", VMe = "🇬🇬", UMe = "🇬🇳", GMe = "🇬🇼", WMe = "🇬🇾", KMe = "🇭🇹", ZMe = "🇭🇳", JMe = "🇭🇰", YMe = "🇭🇺", XMe = "🇮🇸", QMe = "🇮🇳", e8e = "🇮🇩", t8e = "🇮🇷", n8e = "🇮🇶", r8e = "🇮🇪", o8e = "🇮🇲", i8e = "🇮🇱", s8e = "🇮🇹", a8e = "🇯🇲", c8e = "🇯🇵", u8e = "🎌", l8e = "🇯🇪", f8e = "🇯🇴", d8e = "🇰🇿", h8e = "🇰🇪", p8e = "🇰🇮", v8e = "🇽🇰", g8e = "🇰🇼", m8e = "🇰🇬", _8e = "🇱🇦", b8e = "🇱🇻", y8e = "🇱🇧", w8e = "🇱🇸", k8e = "🇱🇷", S8e = "🇱🇾", x8e = "🇱🇮", E8e = "🇱🇹", $8e = "🇱🇺", C8e = "🇲🇴", I8e = "🇲🇰", T8e = "🇲🇬", A8e = "🇲🇼", O8e = "🇲🇾", D8e = "🇲🇻", P8e = "🇲🇱", F8e = "🇲🇹", R8e = "🇲🇭", N8e = "🇲🇶", M8e = "🇲🇷", L8e = "🇲🇺", q8e = "🇾🇹", j8e = "🇲🇽", B8e = "🇫🇲", z8e = "🇲🇩", H8e = "🇲🇨", V8e = "🇲🇳", U8e = "🇲🇪", G8e = "🇲🇸", W8e = "🇲🇦", K8e = "🇲🇿", Z8e = "🇲🇲", J8e = "🇳🇦", Y8e = "🇳🇷", X8e = "🇳🇵", Q8e = "🇳🇱", eLe = "🇳🇨", tLe = "🇳🇿", nLe = "🇳🇮", rLe = "🇳🇪", oLe = "🇳🇬", iLe = "🇳🇺", sLe = "🇳🇫", aLe = "🇲🇵", cLe = "🇰🇵", uLe = "🇳🇴", lLe = "🇴🇲", fLe = "🇵🇰", dLe = "🇵🇼", hLe = "🇵🇸", pLe = "🇵🇦", vLe = "🇵🇬", gLe = "🇵🇾", mLe = "🇵🇪", _Le = "🇵🇭", bLe = "🇵🇳", yLe = "🇵🇱", wLe = "🇵🇹", kLe = "🇵🇷", SLe = "🇶🇦", xLe = "🇷🇪", ELe = "🇷🇴", $Le = "🇷🇺", CLe = "🇷🇼", ILe = "🇧🇱", TLe = "🇸🇭", ALe = "🇰🇳", OLe = "🇱🇨", DLe = "🇵🇲", PLe = "🇻🇨", FLe = "🇼🇸", RLe = "🇸🇲", NLe = "🇸🇹", MLe = "🇸🇦", LLe = "🇸🇳", qLe = "🇷🇸", jLe = "🇸🇨", BLe = "🇸🇱", zLe = "🇸🇬", HLe = "🇸🇽", VLe = "🇸🇰", ULe = "🇸🇮", GLe = "🇸🇧", WLe = "🇸🇴", KLe = "🇿🇦", ZLe = "🇬🇸", JLe = "🇰🇷", YLe = "🇸🇸", XLe = "🇪🇸", QLe = "🇱🇰", e6e = "🇸🇩", t6e = "🇸🇷", n6e = "🇸🇿", r6e = "🇸🇪", o6e = "🇨🇭", i6e = "🇸🇾", s6e = "🇹🇼", a6e = "🇹🇯", c6e = "🇹🇿", u6e = "🇹🇭", l6e = "🇹🇱", f6e = "🇹🇬", d6e = "🇹🇰", h6e = "🇹🇴", p6e = "🇹🇹", v6e = "🇹🇳", g6e = "🇹🇷", m6e = "🇹🇲", _6e = "🇹🇨", b6e = "🇹🇻", y6e = "🇺🇬", w6e = "🇺🇦", k6e = "🇦🇪", S6e = "🇬🇧", x6e = "🇬🇧", E6e = "🇺🇸", $6e = "🇻🇮", C6e = "🇺🇾", I6e = "🇺🇿", T6e = "🇻🇺", A6e = "🇻🇦", O6e = "🇻🇪", D6e = "🇻🇳", P6e = "🇼🇫", F6e = "🇪🇭", R6e = "🇾🇪", N6e = "🇿🇲", M6e = "🇿🇼", L6e = {
  100: "💯",
  1234: "🔢",
  grinning: Cme,
  smiley: Ime,
  smile: Tme,
  grin: Ame,
  laughing: Ome,
  satisfied: Dme,
  sweat_smile: Pme,
  joy: Fme,
  rofl: Rme,
  relaxed: Nme,
  blush: Mme,
  innocent: Lme,
  slightly_smiling_face: qme,
  upside_down_face: jme,
  wink: Bme,
  relieved: zme,
  heart_eyes: Hme,
  kissing_heart: Vme,
  kissing: Ume,
  kissing_smiling_eyes: Gme,
  kissing_closed_eyes: Wme,
  yum: Kme,
  stuck_out_tongue_winking_eye: Zme,
  stuck_out_tongue_closed_eyes: Jme,
  stuck_out_tongue: Yme,
  money_mouth_face: Xme,
  hugs: Qme,
  nerd_face: e_e,
  sunglasses: t_e,
  clown_face: n_e,
  cowboy_hat_face: r_e,
  smirk: o_e,
  unamused: i_e,
  disappointed: s_e,
  pensive: a_e,
  worried: c_e,
  confused: u_e,
  slightly_frowning_face: l_e,
  frowning_face: f_e,
  persevere: d_e,
  confounded: h_e,
  tired_face: p_e,
  weary: v_e,
  triumph: g_e,
  angry: m_e,
  rage: b_e,
  pout: y_e,
  no_mouth: w_e,
  neutral_face: k_e,
  expressionless: S_e,
  hushed: x_e,
  frowning: E_e,
  anguished: $_e,
  open_mouth: C_e,
  astonished: I_e,
  dizzy_face: T_e,
  flushed: A_e,
  scream: O_e,
  fearful: D_e,
  cold_sweat: P_e,
  cry: F_e,
  disappointed_relieved: R_e,
  drooling_face: N_e,
  sob: M_e,
  sweat: L_e,
  sleepy: q_e,
  sleeping: j_e,
  roll_eyes: B_e,
  thinking: z_e,
  lying_face: H_e,
  grimacing: V_e,
  zipper_mouth_face: U_e,
  nauseated_face: G_e,
  sneezing_face: W_e,
  mask: K_e,
  face_with_thermometer: Z_e,
  face_with_head_bandage: J_e,
  smiling_imp: Y_e,
  imp: X_e,
  japanese_ogre: Q_e,
  japanese_goblin: ebe,
  hankey: tbe,
  poop: nbe,
  shit: rbe,
  ghost: obe,
  skull: ibe,
  skull_and_crossbones: sbe,
  alien: abe,
  space_invader: cbe,
  robot: ube,
  jack_o_lantern: lbe,
  smiley_cat: fbe,
  smile_cat: dbe,
  joy_cat: hbe,
  heart_eyes_cat: pbe,
  smirk_cat: vbe,
  kissing_cat: gbe,
  scream_cat: mbe,
  crying_cat_face: _be,
  pouting_cat: bbe,
  open_hands: ybe,
  raised_hands: wbe,
  clap: kbe,
  pray: Sbe,
  handshake: xbe,
  "+1": "👍",
  thumbsup: Ebe,
  "-1": "👎",
  thumbsdown: $be,
  fist_oncoming: Cbe,
  facepunch: Ibe,
  punch: Tbe,
  fist_raised: Abe,
  fist: Obe,
  fist_left: Dbe,
  fist_right: Pbe,
  crossed_fingers: Fbe,
  v: Rbe,
  metal: Nbe,
  ok_hand: Mbe,
  point_left: Lbe,
  point_right: qbe,
  point_up_2: jbe,
  point_down: Bbe,
  point_up: zbe,
  hand: Hbe,
  raised_hand: Vbe,
  raised_back_of_hand: Ube,
  raised_hand_with_fingers_splayed: Gbe,
  vulcan_salute: Wbe,
  wave: Kbe,
  call_me_hand: Zbe,
  muscle: Jbe,
  middle_finger: Ybe,
  fu: Xbe,
  writing_hand: Qbe,
  selfie: e0e,
  nail_care: t0e,
  ring: n0e,
  lipstick: r0e,
  kiss: o0e,
  lips: i0e,
  tongue: s0e,
  ear: a0e,
  nose: c0e,
  footprints: u0e,
  eye: l0e,
  eyes: f0e,
  speaking_head: d0e,
  bust_in_silhouette: h0e,
  busts_in_silhouette: p0e,
  baby: v0e,
  boy: g0e,
  girl: m0e,
  man: _0e,
  woman: b0e,
  blonde_woman: y0e,
  blonde_man: w0e,
  person_with_blond_hair: k0e,
  older_man: S0e,
  older_woman: x0e,
  man_with_gua_pi_mao: E0e,
  woman_with_turban: $0e,
  man_with_turban: C0e,
  policewoman: I0e,
  policeman: T0e,
  cop: A0e,
  construction_worker_woman: O0e,
  construction_worker_man: D0e,
  construction_worker: P0e,
  guardswoman: F0e,
  guardsman: R0e,
  female_detective: N0e,
  male_detective: M0e,
  detective: L0e,
  woman_health_worker: q0e,
  man_health_worker: j0e,
  woman_farmer: B0e,
  man_farmer: z0e,
  woman_cook: H0e,
  man_cook: V0e,
  woman_student: U0e,
  man_student: G0e,
  woman_singer: W0e,
  man_singer: K0e,
  woman_teacher: Z0e,
  man_teacher: J0e,
  woman_factory_worker: Y0e,
  man_factory_worker: X0e,
  woman_technologist: Q0e,
  man_technologist: eye,
  woman_office_worker: tye,
  man_office_worker: nye,
  woman_mechanic: rye,
  man_mechanic: oye,
  woman_scientist: iye,
  man_scientist: sye,
  woman_artist: aye,
  man_artist: cye,
  woman_firefighter: uye,
  man_firefighter: lye,
  woman_pilot: fye,
  man_pilot: dye,
  woman_astronaut: hye,
  man_astronaut: pye,
  woman_judge: vye,
  man_judge: gye,
  mrs_claus: mye,
  santa: _ye,
  princess: bye,
  prince: yye,
  bride_with_veil: wye,
  man_in_tuxedo: kye,
  angel: Sye,
  pregnant_woman: xye,
  bowing_woman: Eye,
  bowing_man: $ye,
  bow: Cye,
  tipping_hand_woman: Iye,
  information_desk_person: Tye,
  sassy_woman: Aye,
  tipping_hand_man: Oye,
  sassy_man: Dye,
  no_good_woman: Pye,
  no_good: Fye,
  ng_woman: Rye,
  no_good_man: Nye,
  ng_man: Mye,
  ok_woman: Lye,
  ok_man: qye,
  raising_hand_woman: jye,
  raising_hand: Bye,
  raising_hand_man: zye,
  woman_facepalming: Hye,
  man_facepalming: Vye,
  woman_shrugging: Uye,
  man_shrugging: Gye,
  pouting_woman: Wye,
  person_with_pouting_face: Kye,
  pouting_man: Zye,
  frowning_woman: Jye,
  person_frowning: Yye,
  frowning_man: Xye,
  haircut_woman: Qye,
  haircut: ewe,
  haircut_man: twe,
  massage_woman: nwe,
  massage: rwe,
  massage_man: owe,
  business_suit_levitating: iwe,
  dancer: swe,
  man_dancing: awe,
  dancing_women: cwe,
  dancers: uwe,
  dancing_men: lwe,
  walking_woman: fwe,
  walking_man: dwe,
  walking: hwe,
  running_woman: pwe,
  running_man: vwe,
  runner: gwe,
  running: mwe,
  couple: _we,
  two_women_holding_hands: bwe,
  two_men_holding_hands: ywe,
  couple_with_heart_woman_man: wwe,
  couple_with_heart: kwe,
  couple_with_heart_woman_woman: Swe,
  couple_with_heart_man_man: xwe,
  couplekiss_man_woman: Ewe,
  couplekiss_woman_woman: $we,
  couplekiss_man_man: Cwe,
  family_man_woman_boy: Iwe,
  family: Twe,
  family_man_woman_girl: Awe,
  family_man_woman_girl_boy: Owe,
  family_man_woman_boy_boy: Dwe,
  family_man_woman_girl_girl: Pwe,
  family_woman_woman_boy: Fwe,
  family_woman_woman_girl: Rwe,
  family_woman_woman_girl_boy: Nwe,
  family_woman_woman_boy_boy: Mwe,
  family_woman_woman_girl_girl: Lwe,
  family_man_man_boy: qwe,
  family_man_man_girl: jwe,
  family_man_man_girl_boy: Bwe,
  family_man_man_boy_boy: zwe,
  family_man_man_girl_girl: Hwe,
  family_woman_boy: Vwe,
  family_woman_girl: Uwe,
  family_woman_girl_boy: Gwe,
  family_woman_boy_boy: Wwe,
  family_woman_girl_girl: Kwe,
  family_man_boy: Zwe,
  family_man_girl: Jwe,
  family_man_girl_boy: Ywe,
  family_man_boy_boy: Xwe,
  family_man_girl_girl: Qwe,
  womans_clothes: eke,
  shirt: tke,
  tshirt: nke,
  jeans: rke,
  necktie: oke,
  dress: ike,
  bikini: ske,
  kimono: ake,
  high_heel: cke,
  sandal: uke,
  boot: lke,
  mans_shoe: fke,
  shoe: dke,
  athletic_shoe: hke,
  womans_hat: pke,
  tophat: vke,
  mortar_board: gke,
  crown: mke,
  rescue_worker_helmet: _ke,
  school_satchel: bke,
  pouch: yke,
  purse: wke,
  handbag: kke,
  briefcase: Ske,
  eyeglasses: xke,
  dark_sunglasses: Eke,
  closed_umbrella: $ke,
  open_umbrella: Cke,
  dog: Ike,
  cat: Tke,
  mouse: Ake,
  hamster: Oke,
  rabbit: Dke,
  fox_face: Pke,
  bear: Fke,
  panda_face: Rke,
  koala: Nke,
  tiger: Mke,
  lion: Lke,
  cow: qke,
  pig: jke,
  pig_nose: Bke,
  frog: zke,
  monkey_face: Hke,
  see_no_evil: Vke,
  hear_no_evil: Uke,
  speak_no_evil: Gke,
  monkey: Wke,
  chicken: Kke,
  penguin: Zke,
  bird: Jke,
  baby_chick: Yke,
  hatching_chick: Xke,
  hatched_chick: Qke,
  duck: e1e,
  eagle: t1e,
  owl: n1e,
  bat: r1e,
  wolf: o1e,
  boar: i1e,
  horse: s1e,
  unicorn: a1e,
  bee: c1e,
  honeybee: u1e,
  bug: l1e,
  butterfly: f1e,
  snail: d1e,
  shell: h1e,
  beetle: p1e,
  ant: v1e,
  spider: g1e,
  spider_web: m1e,
  turtle: _1e,
  snake: b1e,
  lizard: y1e,
  scorpion: w1e,
  crab: k1e,
  squid: S1e,
  octopus: x1e,
  shrimp: E1e,
  tropical_fish: $1e,
  fish: C1e,
  blowfish: I1e,
  dolphin: T1e,
  flipper: A1e,
  shark: O1e,
  whale: D1e,
  whale2: P1e,
  crocodile: F1e,
  leopard: R1e,
  tiger2: N1e,
  water_buffalo: M1e,
  ox: L1e,
  cow2: q1e,
  deer: j1e,
  dromedary_camel: B1e,
  camel: z1e,
  elephant: H1e,
  rhinoceros: V1e,
  gorilla: U1e,
  racehorse: G1e,
  pig2: W1e,
  goat: K1e,
  ram: Z1e,
  sheep: J1e,
  dog2: Y1e,
  poodle: X1e,
  cat2: Q1e,
  rooster: eSe,
  turkey: tSe,
  dove: nSe,
  rabbit2: rSe,
  mouse2: oSe,
  rat: iSe,
  chipmunk: sSe,
  feet: aSe,
  paw_prints: cSe,
  dragon: uSe,
  dragon_face: lSe,
  cactus: fSe,
  christmas_tree: dSe,
  evergreen_tree: hSe,
  deciduous_tree: pSe,
  palm_tree: vSe,
  seedling: gSe,
  herb: mSe,
  shamrock: _Se,
  four_leaf_clover: bSe,
  bamboo: ySe,
  tanabata_tree: wSe,
  leaves: kSe,
  fallen_leaf: SSe,
  maple_leaf: xSe,
  mushroom: ESe,
  ear_of_rice: $Se,
  bouquet: CSe,
  tulip: ISe,
  rose: TSe,
  wilted_flower: ASe,
  sunflower: OSe,
  blossom: DSe,
  cherry_blossom: PSe,
  hibiscus: FSe,
  earth_americas: RSe,
  earth_africa: NSe,
  earth_asia: MSe,
  full_moon: LSe,
  waning_gibbous_moon: qSe,
  last_quarter_moon: jSe,
  waning_crescent_moon: BSe,
  new_moon: zSe,
  waxing_crescent_moon: HSe,
  first_quarter_moon: VSe,
  moon: USe,
  waxing_gibbous_moon: GSe,
  new_moon_with_face: WSe,
  full_moon_with_face: KSe,
  sun_with_face: ZSe,
  first_quarter_moon_with_face: JSe,
  last_quarter_moon_with_face: YSe,
  crescent_moon: XSe,
  dizzy: QSe,
  star: exe,
  star2: txe,
  sparkles: nxe,
  zap: rxe,
  fire: oxe,
  boom: ixe,
  collision: sxe,
  comet: axe,
  sunny: cxe,
  sun_behind_small_cloud: uxe,
  partly_sunny: lxe,
  sun_behind_large_cloud: fxe,
  sun_behind_rain_cloud: dxe,
  rainbow: hxe,
  cloud: pxe,
  cloud_with_rain: vxe,
  cloud_with_lightning_and_rain: gxe,
  cloud_with_lightning: mxe,
  cloud_with_snow: _xe,
  snowman_with_snow: bxe,
  snowman: yxe,
  snowflake: wxe,
  wind_face: kxe,
  dash: Sxe,
  tornado: xxe,
  fog: Exe,
  ocean: $xe,
  droplet: Cxe,
  sweat_drops: Ixe,
  umbrella: Txe,
  green_apple: Axe,
  apple: Oxe,
  pear: Dxe,
  tangerine: Pxe,
  orange: Fxe,
  mandarin: Rxe,
  lemon: Nxe,
  banana: Mxe,
  watermelon: Lxe,
  grapes: qxe,
  strawberry: jxe,
  melon: Bxe,
  cherries: zxe,
  peach: Hxe,
  pineapple: Vxe,
  kiwi_fruit: Uxe,
  avocado: Gxe,
  tomato: Wxe,
  eggplant: Kxe,
  cucumber: Zxe,
  carrot: Jxe,
  corn: Yxe,
  hot_pepper: Xxe,
  potato: Qxe,
  sweet_potato: eEe,
  chestnut: tEe,
  peanuts: nEe,
  honey_pot: rEe,
  croissant: oEe,
  bread: iEe,
  baguette_bread: sEe,
  cheese: aEe,
  egg: cEe,
  fried_egg: uEe,
  bacon: lEe,
  pancakes: fEe,
  fried_shrimp: dEe,
  poultry_leg: hEe,
  meat_on_bone: pEe,
  pizza: vEe,
  hotdog: gEe,
  hamburger: mEe,
  fries: _Ee,
  stuffed_flatbread: bEe,
  taco: yEe,
  burrito: wEe,
  green_salad: kEe,
  shallow_pan_of_food: SEe,
  spaghetti: xEe,
  ramen: EEe,
  stew: $Ee,
  fish_cake: CEe,
  sushi: IEe,
  bento: TEe,
  curry: AEe,
  rice: OEe,
  rice_ball: DEe,
  rice_cracker: PEe,
  oden: FEe,
  dango: REe,
  shaved_ice: NEe,
  ice_cream: MEe,
  icecream: LEe,
  cake: qEe,
  birthday: jEe,
  custard: BEe,
  lollipop: zEe,
  candy: HEe,
  chocolate_bar: VEe,
  popcorn: UEe,
  doughnut: GEe,
  cookie: WEe,
  milk_glass: KEe,
  baby_bottle: ZEe,
  coffee: JEe,
  tea: YEe,
  sake: XEe,
  beer: QEe,
  beers: e$e,
  clinking_glasses: t$e,
  wine_glass: n$e,
  tumbler_glass: r$e,
  cocktail: o$e,
  tropical_drink: i$e,
  champagne: s$e,
  spoon: a$e,
  fork_and_knife: c$e,
  plate_with_cutlery: u$e,
  soccer: l$e,
  basketball: f$e,
  football: d$e,
  baseball: h$e,
  tennis: p$e,
  volleyball: v$e,
  rugby_football: g$e,
  "8ball": "🎱",
  ping_pong: m$e,
  badminton: _$e,
  goal_net: b$e,
  ice_hockey: y$e,
  field_hockey: w$e,
  cricket: k$e,
  golf: S$e,
  bow_and_arrow: x$e,
  fishing_pole_and_fish: E$e,
  boxing_glove: $$e,
  martial_arts_uniform: C$e,
  ice_skate: I$e,
  ski: T$e,
  skier: A$e,
  snowboarder: O$e,
  weight_lifting_woman: D$e,
  weight_lifting_man: P$e,
  person_fencing: F$e,
  women_wrestling: R$e,
  men_wrestling: N$e,
  woman_cartwheeling: M$e,
  man_cartwheeling: L$e,
  basketball_woman: q$e,
  basketball_man: j$e,
  woman_playing_handball: B$e,
  man_playing_handball: z$e,
  golfing_woman: H$e,
  golfing_man: V$e,
  surfing_woman: U$e,
  surfing_man: G$e,
  surfer: W$e,
  swimming_woman: K$e,
  swimming_man: Z$e,
  swimmer: J$e,
  woman_playing_water_polo: Y$e,
  man_playing_water_polo: X$e,
  rowing_woman: Q$e,
  rowing_man: eCe,
  rowboat: tCe,
  horse_racing: nCe,
  biking_woman: rCe,
  biking_man: oCe,
  bicyclist: iCe,
  mountain_biking_woman: sCe,
  mountain_biking_man: aCe,
  mountain_bicyclist: cCe,
  running_shirt_with_sash: uCe,
  medal_sports: lCe,
  medal_military: fCe,
  "1st_place_medal": "🥇",
  "2nd_place_medal": "🥈",
  "3rd_place_medal": "🥉",
  trophy: dCe,
  rosette: hCe,
  reminder_ribbon: pCe,
  ticket: vCe,
  tickets: gCe,
  circus_tent: mCe,
  woman_juggling: _Ce,
  man_juggling: bCe,
  performing_arts: yCe,
  art: wCe,
  clapper: kCe,
  microphone: SCe,
  headphones: xCe,
  musical_score: ECe,
  musical_keyboard: $Ce,
  drum: CCe,
  saxophone: ICe,
  trumpet: TCe,
  guitar: ACe,
  violin: OCe,
  game_die: DCe,
  dart: PCe,
  bowling: FCe,
  video_game: RCe,
  slot_machine: NCe,
  car: MCe,
  red_car: LCe,
  taxi: qCe,
  blue_car: jCe,
  bus: BCe,
  trolleybus: zCe,
  racing_car: HCe,
  police_car: VCe,
  ambulance: UCe,
  fire_engine: GCe,
  minibus: WCe,
  truck: KCe,
  articulated_lorry: ZCe,
  tractor: JCe,
  kick_scooter: YCe,
  bike: XCe,
  motor_scooter: QCe,
  motorcycle: e2e,
  rotating_light: t2e,
  oncoming_police_car: n2e,
  oncoming_bus: r2e,
  oncoming_automobile: o2e,
  oncoming_taxi: i2e,
  aerial_tramway: s2e,
  mountain_cableway: a2e,
  suspension_railway: c2e,
  railway_car: u2e,
  train: l2e,
  mountain_railway: f2e,
  monorail: d2e,
  bullettrain_side: h2e,
  bullettrain_front: p2e,
  light_rail: v2e,
  steam_locomotive: g2e,
  train2: m2e,
  metro: _2e,
  tram: b2e,
  station: y2e,
  helicopter: w2e,
  small_airplane: k2e,
  airplane: S2e,
  flight_departure: x2e,
  flight_arrival: E2e,
  rocket: $2e,
  artificial_satellite: C2e,
  seat: I2e,
  canoe: T2e,
  boat: A2e,
  sailboat: O2e,
  motor_boat: D2e,
  speedboat: P2e,
  passenger_ship: F2e,
  ferry: R2e,
  ship: N2e,
  anchor: M2e,
  construction: L2e,
  fuelpump: q2e,
  busstop: j2e,
  vertical_traffic_light: B2e,
  traffic_light: z2e,
  world_map: H2e,
  moyai: V2e,
  statue_of_liberty: U2e,
  fountain: G2e,
  tokyo_tower: W2e,
  european_castle: K2e,
  japanese_castle: Z2e,
  stadium: J2e,
  ferris_wheel: Y2e,
  roller_coaster: X2e,
  carousel_horse: Q2e,
  parasol_on_ground: eIe,
  beach_umbrella: tIe,
  desert_island: nIe,
  mountain: rIe,
  mountain_snow: oIe,
  mount_fuji: iIe,
  volcano: sIe,
  desert: aIe,
  camping: cIe,
  tent: uIe,
  railway_track: lIe,
  motorway: fIe,
  building_construction: dIe,
  factory: hIe,
  house: pIe,
  house_with_garden: vIe,
  houses: gIe,
  derelict_house: mIe,
  office: _Ie,
  department_store: bIe,
  post_office: yIe,
  european_post_office: wIe,
  hospital: kIe,
  bank: SIe,
  hotel: xIe,
  convenience_store: EIe,
  school: $Ie,
  love_hotel: CIe,
  wedding: IIe,
  classical_building: TIe,
  church: AIe,
  mosque: OIe,
  synagogue: DIe,
  kaaba: PIe,
  shinto_shrine: FIe,
  japan: RIe,
  rice_scene: NIe,
  national_park: MIe,
  sunrise: LIe,
  sunrise_over_mountains: qIe,
  stars: jIe,
  sparkler: BIe,
  fireworks: zIe,
  city_sunrise: HIe,
  city_sunset: VIe,
  cityscape: UIe,
  night_with_stars: GIe,
  milky_way: WIe,
  bridge_at_night: KIe,
  foggy: ZIe,
  watch: JIe,
  iphone: YIe,
  calling: XIe,
  computer: QIe,
  keyboard: eTe,
  desktop_computer: tTe,
  printer: nTe,
  computer_mouse: rTe,
  trackball: oTe,
  joystick: iTe,
  clamp: sTe,
  minidisc: aTe,
  floppy_disk: cTe,
  cd: uTe,
  dvd: lTe,
  vhs: fTe,
  camera: dTe,
  camera_flash: hTe,
  video_camera: pTe,
  movie_camera: vTe,
  film_projector: gTe,
  film_strip: mTe,
  telephone_receiver: _Te,
  phone: bTe,
  telephone: yTe,
  pager: wTe,
  fax: kTe,
  tv: STe,
  radio: xTe,
  studio_microphone: ETe,
  level_slider: $Te,
  control_knobs: CTe,
  stopwatch: ITe,
  timer_clock: TTe,
  alarm_clock: ATe,
  mantelpiece_clock: OTe,
  hourglass: DTe,
  hourglass_flowing_sand: PTe,
  satellite: FTe,
  battery: RTe,
  electric_plug: NTe,
  bulb: MTe,
  flashlight: LTe,
  candle: qTe,
  wastebasket: jTe,
  oil_drum: BTe,
  money_with_wings: zTe,
  dollar: HTe,
  yen: VTe,
  euro: UTe,
  pound: GTe,
  moneybag: WTe,
  credit_card: KTe,
  gem: ZTe,
  balance_scale: JTe,
  wrench: YTe,
  hammer: XTe,
  hammer_and_pick: QTe,
  hammer_and_wrench: eAe,
  pick: tAe,
  nut_and_bolt: nAe,
  gear: rAe,
  chains: oAe,
  gun: iAe,
  bomb: sAe,
  hocho: aAe,
  knife: cAe,
  dagger: uAe,
  crossed_swords: lAe,
  shield: fAe,
  smoking: dAe,
  coffin: hAe,
  funeral_urn: pAe,
  amphora: vAe,
  crystal_ball: gAe,
  prayer_beads: mAe,
  barber: _Ae,
  alembic: bAe,
  telescope: yAe,
  microscope: wAe,
  hole: kAe,
  pill: SAe,
  syringe: xAe,
  thermometer: EAe,
  toilet: $Ae,
  potable_water: CAe,
  shower: IAe,
  bathtub: TAe,
  bath: AAe,
  bellhop_bell: OAe,
  key: DAe,
  old_key: PAe,
  door: FAe,
  couch_and_lamp: RAe,
  bed: NAe,
  sleeping_bed: MAe,
  framed_picture: LAe,
  shopping: qAe,
  shopping_cart: jAe,
  gift: BAe,
  balloon: zAe,
  flags: HAe,
  ribbon: VAe,
  confetti_ball: UAe,
  tada: GAe,
  dolls: WAe,
  izakaya_lantern: KAe,
  lantern: ZAe,
  wind_chime: JAe,
  email: YAe,
  envelope: XAe,
  envelope_with_arrow: QAe,
  incoming_envelope: eOe,
  "e-mail": "📧",
  love_letter: tOe,
  inbox_tray: nOe,
  outbox_tray: rOe,
  package: "📦",
  label: oOe,
  mailbox_closed: iOe,
  mailbox: sOe,
  mailbox_with_mail: aOe,
  mailbox_with_no_mail: cOe,
  postbox: uOe,
  postal_horn: lOe,
  scroll: fOe,
  page_with_curl: dOe,
  page_facing_up: hOe,
  bookmark_tabs: pOe,
  bar_chart: vOe,
  chart_with_upwards_trend: gOe,
  chart_with_downwards_trend: mOe,
  spiral_notepad: _Oe,
  spiral_calendar: bOe,
  calendar: yOe,
  date: wOe,
  card_index: kOe,
  card_file_box: SOe,
  ballot_box: xOe,
  file_cabinet: EOe,
  clipboard: $Oe,
  file_folder: COe,
  open_file_folder: IOe,
  card_index_dividers: TOe,
  newspaper_roll: AOe,
  newspaper: OOe,
  notebook: DOe,
  notebook_with_decorative_cover: POe,
  ledger: FOe,
  closed_book: ROe,
  green_book: NOe,
  blue_book: MOe,
  orange_book: LOe,
  books: qOe,
  book: jOe,
  open_book: BOe,
  bookmark: zOe,
  link: HOe,
  paperclip: VOe,
  paperclips: UOe,
  triangular_ruler: GOe,
  straight_ruler: WOe,
  pushpin: KOe,
  round_pushpin: ZOe,
  scissors: JOe,
  pen: YOe,
  fountain_pen: XOe,
  black_nib: QOe,
  paintbrush: eDe,
  crayon: tDe,
  memo: nDe,
  pencil: rDe,
  pencil2: oDe,
  mag: iDe,
  mag_right: sDe,
  lock_with_ink_pen: aDe,
  closed_lock_with_key: cDe,
  lock: uDe,
  unlock: lDe,
  heart: fDe,
  yellow_heart: dDe,
  green_heart: hDe,
  blue_heart: pDe,
  purple_heart: vDe,
  black_heart: gDe,
  broken_heart: mDe,
  heavy_heart_exclamation: _De,
  two_hearts: bDe,
  revolving_hearts: yDe,
  heartbeat: wDe,
  heartpulse: kDe,
  sparkling_heart: SDe,
  cupid: xDe,
  gift_heart: EDe,
  heart_decoration: $De,
  peace_symbol: CDe,
  latin_cross: IDe,
  star_and_crescent: TDe,
  om: ADe,
  wheel_of_dharma: ODe,
  star_of_david: DDe,
  six_pointed_star: PDe,
  menorah: FDe,
  yin_yang: RDe,
  orthodox_cross: NDe,
  place_of_worship: MDe,
  ophiuchus: LDe,
  aries: qDe,
  taurus: jDe,
  gemini: BDe,
  cancer: zDe,
  leo: HDe,
  virgo: VDe,
  libra: UDe,
  scorpius: GDe,
  sagittarius: WDe,
  capricorn: KDe,
  aquarius: ZDe,
  pisces: JDe,
  id: YDe,
  atom_symbol: XDe,
  accept: QDe,
  radioactive: ePe,
  biohazard: tPe,
  mobile_phone_off: nPe,
  vibration_mode: rPe,
  eight_pointed_black_star: oPe,
  vs: iPe,
  white_flower: sPe,
  ideograph_advantage: aPe,
  secret: cPe,
  congratulations: uPe,
  u6e80: lPe,
  a: fPe,
  b: dPe,
  ab: hPe,
  cl: pPe,
  o2: vPe,
  sos: gPe,
  x: mPe,
  o: _Pe,
  stop_sign: bPe,
  no_entry: yPe,
  name_badge: wPe,
  no_entry_sign: kPe,
  anger: SPe,
  hotsprings: xPe,
  no_pedestrians: EPe,
  do_not_litter: $Pe,
  no_bicycles: CPe,
  "non-potable_water": "🚱",
  underage: IPe,
  no_mobile_phones: TPe,
  no_smoking: APe,
  exclamation: OPe,
  heavy_exclamation_mark: DPe,
  grey_exclamation: PPe,
  question: FPe,
  grey_question: RPe,
  bangbang: NPe,
  interrobang: MPe,
  low_brightness: LPe,
  high_brightness: qPe,
  part_alternation_mark: jPe,
  warning: BPe,
  children_crossing: zPe,
  trident: HPe,
  fleur_de_lis: VPe,
  beginner: UPe,
  recycle: GPe,
  white_check_mark: WPe,
  chart: KPe,
  sparkle: ZPe,
  eight_spoked_asterisk: JPe,
  negative_squared_cross_mark: YPe,
  globe_with_meridians: XPe,
  diamond_shape_with_a_dot_inside: QPe,
  m: e3e,
  cyclone: t3e,
  zzz: n3e,
  atm: r3e,
  wc: o3e,
  wheelchair: i3e,
  parking: s3e,
  sa: a3e,
  passport_control: c3e,
  customs: u3e,
  baggage_claim: l3e,
  left_luggage: f3e,
  mens: d3e,
  womens: h3e,
  baby_symbol: p3e,
  restroom: v3e,
  put_litter_in_its_place: g3e,
  cinema: m3e,
  signal_strength: _3e,
  koko: b3e,
  symbols: y3e,
  information_source: w3e,
  abc: k3e,
  abcd: S3e,
  capital_abcd: x3e,
  ng: E3e,
  ok: $3e,
  up: C3e,
  cool: I3e,
  new: "🆕",
  free: T3e,
  zero: A3e,
  one: O3e,
  two: D3e,
  three: P3e,
  four: F3e,
  five: R3e,
  six: N3e,
  seven: M3e,
  eight: L3e,
  nine: q3e,
  keycap_ten: j3e,
  hash: B3e,
  asterisk: z3e,
  arrow_forward: H3e,
  pause_button: V3e,
  play_or_pause_button: U3e,
  stop_button: G3e,
  record_button: W3e,
  next_track_button: K3e,
  previous_track_button: Z3e,
  fast_forward: J3e,
  rewind: Y3e,
  arrow_double_up: X3e,
  arrow_double_down: Q3e,
  arrow_backward: eFe,
  arrow_up_small: tFe,
  arrow_down_small: nFe,
  arrow_right: rFe,
  arrow_left: oFe,
  arrow_up: iFe,
  arrow_down: sFe,
  arrow_upper_right: aFe,
  arrow_lower_right: cFe,
  arrow_lower_left: uFe,
  arrow_upper_left: lFe,
  arrow_up_down: fFe,
  left_right_arrow: dFe,
  arrow_right_hook: hFe,
  leftwards_arrow_with_hook: pFe,
  arrow_heading_up: vFe,
  arrow_heading_down: gFe,
  twisted_rightwards_arrows: mFe,
  repeat: _Fe,
  repeat_one: bFe,
  arrows_counterclockwise: yFe,
  arrows_clockwise: wFe,
  musical_note: kFe,
  notes: SFe,
  heavy_plus_sign: xFe,
  heavy_minus_sign: EFe,
  heavy_division_sign: $Fe,
  heavy_multiplication_x: CFe,
  heavy_dollar_sign: IFe,
  currency_exchange: TFe,
  tm: AFe,
  copyright: OFe,
  registered: DFe,
  wavy_dash: PFe,
  curly_loop: FFe,
  loop: RFe,
  end: NFe,
  back: MFe,
  on: LFe,
  top: qFe,
  soon: jFe,
  heavy_check_mark: BFe,
  ballot_box_with_check: zFe,
  radio_button: HFe,
  white_circle: VFe,
  black_circle: UFe,
  red_circle: GFe,
  large_blue_circle: WFe,
  small_red_triangle: KFe,
  small_red_triangle_down: ZFe,
  small_orange_diamond: JFe,
  small_blue_diamond: YFe,
  large_orange_diamond: XFe,
  large_blue_diamond: QFe,
  white_square_button: eRe,
  black_square_button: tRe,
  black_small_square: nRe,
  white_small_square: rRe,
  black_medium_small_square: oRe,
  white_medium_small_square: iRe,
  black_medium_square: sRe,
  white_medium_square: aRe,
  black_large_square: cRe,
  white_large_square: uRe,
  speaker: lRe,
  mute: fRe,
  sound: dRe,
  loud_sound: hRe,
  bell: pRe,
  no_bell: vRe,
  mega: gRe,
  loudspeaker: mRe,
  eye_speech_bubble: _Re,
  speech_balloon: bRe,
  thought_balloon: yRe,
  right_anger_bubble: wRe,
  spades: kRe,
  clubs: SRe,
  hearts: xRe,
  diamonds: ERe,
  black_joker: $Re,
  flower_playing_cards: CRe,
  mahjong: IRe,
  clock1: TRe,
  clock2: ARe,
  clock3: ORe,
  clock4: DRe,
  clock5: PRe,
  clock6: FRe,
  clock7: RRe,
  clock8: NRe,
  clock9: MRe,
  clock10: LRe,
  clock11: qRe,
  clock12: jRe,
  clock130: BRe,
  clock230: zRe,
  clock330: HRe,
  clock430: VRe,
  clock530: URe,
  clock630: GRe,
  clock730: WRe,
  clock830: KRe,
  clock930: ZRe,
  clock1030: JRe,
  clock1130: YRe,
  clock1230: XRe,
  white_flag: QRe,
  black_flag: eNe,
  checkered_flag: tNe,
  triangular_flag_on_post: nNe,
  rainbow_flag: rNe,
  afghanistan: oNe,
  aland_islands: iNe,
  albania: sNe,
  algeria: aNe,
  american_samoa: cNe,
  andorra: uNe,
  angola: lNe,
  anguilla: fNe,
  antarctica: dNe,
  antigua_barbuda: hNe,
  argentina: pNe,
  armenia: vNe,
  aruba: gNe,
  australia: mNe,
  austria: _Ne,
  azerbaijan: bNe,
  bahamas: yNe,
  bahrain: wNe,
  bangladesh: kNe,
  barbados: SNe,
  belarus: xNe,
  belgium: ENe,
  belize: $Ne,
  benin: CNe,
  bermuda: INe,
  bhutan: TNe,
  bolivia: ANe,
  caribbean_netherlands: ONe,
  bosnia_herzegovina: DNe,
  botswana: PNe,
  brazil: FNe,
  british_indian_ocean_territory: RNe,
  british_virgin_islands: NNe,
  brunei: MNe,
  bulgaria: LNe,
  burkina_faso: qNe,
  burundi: jNe,
  cape_verde: BNe,
  cambodia: zNe,
  cameroon: HNe,
  canada: VNe,
  canary_islands: UNe,
  cayman_islands: GNe,
  central_african_republic: WNe,
  chad: KNe,
  chile: ZNe,
  cn: JNe,
  christmas_island: YNe,
  cocos_islands: XNe,
  colombia: QNe,
  comoros: eMe,
  congo_brazzaville: tMe,
  congo_kinshasa: nMe,
  cook_islands: rMe,
  costa_rica: oMe,
  cote_divoire: iMe,
  croatia: sMe,
  cuba: aMe,
  curacao: cMe,
  cyprus: uMe,
  czech_republic: lMe,
  denmark: fMe,
  djibouti: dMe,
  dominica: hMe,
  dominican_republic: pMe,
  ecuador: vMe,
  egypt: gMe,
  el_salvador: mMe,
  equatorial_guinea: _Me,
  eritrea: bMe,
  estonia: yMe,
  ethiopia: wMe,
  eu: kMe,
  european_union: SMe,
  falkland_islands: xMe,
  faroe_islands: EMe,
  fiji: $Me,
  finland: CMe,
  fr: IMe,
  french_guiana: TMe,
  french_polynesia: AMe,
  french_southern_territories: OMe,
  gabon: DMe,
  gambia: PMe,
  georgia: FMe,
  de: RMe,
  ghana: NMe,
  gibraltar: MMe,
  greece: LMe,
  greenland: qMe,
  grenada: jMe,
  guadeloupe: BMe,
  guam: zMe,
  guatemala: HMe,
  guernsey: VMe,
  guinea: UMe,
  guinea_bissau: GMe,
  guyana: WMe,
  haiti: KMe,
  honduras: ZMe,
  hong_kong: JMe,
  hungary: YMe,
  iceland: XMe,
  india: QMe,
  indonesia: e8e,
  iran: t8e,
  iraq: n8e,
  ireland: r8e,
  isle_of_man: o8e,
  israel: i8e,
  it: s8e,
  jamaica: a8e,
  jp: c8e,
  crossed_flags: u8e,
  jersey: l8e,
  jordan: f8e,
  kazakhstan: d8e,
  kenya: h8e,
  kiribati: p8e,
  kosovo: v8e,
  kuwait: g8e,
  kyrgyzstan: m8e,
  laos: _8e,
  latvia: b8e,
  lebanon: y8e,
  lesotho: w8e,
  liberia: k8e,
  libya: S8e,
  liechtenstein: x8e,
  lithuania: E8e,
  luxembourg: $8e,
  macau: C8e,
  macedonia: I8e,
  madagascar: T8e,
  malawi: A8e,
  malaysia: O8e,
  maldives: D8e,
  mali: P8e,
  malta: F8e,
  marshall_islands: R8e,
  martinique: N8e,
  mauritania: M8e,
  mauritius: L8e,
  mayotte: q8e,
  mexico: j8e,
  micronesia: B8e,
  moldova: z8e,
  monaco: H8e,
  mongolia: V8e,
  montenegro: U8e,
  montserrat: G8e,
  morocco: W8e,
  mozambique: K8e,
  myanmar: Z8e,
  namibia: J8e,
  nauru: Y8e,
  nepal: X8e,
  netherlands: Q8e,
  new_caledonia: eLe,
  new_zealand: tLe,
  nicaragua: nLe,
  niger: rLe,
  nigeria: oLe,
  niue: iLe,
  norfolk_island: sLe,
  northern_mariana_islands: aLe,
  north_korea: cLe,
  norway: uLe,
  oman: lLe,
  pakistan: fLe,
  palau: dLe,
  palestinian_territories: hLe,
  panama: pLe,
  papua_new_guinea: vLe,
  paraguay: gLe,
  peru: mLe,
  philippines: _Le,
  pitcairn_islands: bLe,
  poland: yLe,
  portugal: wLe,
  puerto_rico: kLe,
  qatar: SLe,
  reunion: xLe,
  romania: ELe,
  ru: $Le,
  rwanda: CLe,
  st_barthelemy: ILe,
  st_helena: TLe,
  st_kitts_nevis: ALe,
  st_lucia: OLe,
  st_pierre_miquelon: DLe,
  st_vincent_grenadines: PLe,
  samoa: FLe,
  san_marino: RLe,
  sao_tome_principe: NLe,
  saudi_arabia: MLe,
  senegal: LLe,
  serbia: qLe,
  seychelles: jLe,
  sierra_leone: BLe,
  singapore: zLe,
  sint_maarten: HLe,
  slovakia: VLe,
  slovenia: ULe,
  solomon_islands: GLe,
  somalia: WLe,
  south_africa: KLe,
  south_georgia_south_sandwich_islands: ZLe,
  kr: JLe,
  south_sudan: YLe,
  es: XLe,
  sri_lanka: QLe,
  sudan: e6e,
  suriname: t6e,
  swaziland: n6e,
  sweden: r6e,
  switzerland: o6e,
  syria: i6e,
  taiwan: s6e,
  tajikistan: a6e,
  tanzania: c6e,
  thailand: u6e,
  timor_leste: l6e,
  togo: f6e,
  tokelau: d6e,
  tonga: h6e,
  trinidad_tobago: p6e,
  tunisia: v6e,
  tr: g6e,
  turkmenistan: m6e,
  turks_caicos_islands: _6e,
  tuvalu: b6e,
  uganda: y6e,
  ukraine: w6e,
  united_arab_emirates: k6e,
  gb: S6e,
  uk: x6e,
  us: E6e,
  us_virgin_islands: $6e,
  uruguay: C6e,
  uzbekistan: I6e,
  vanuatu: T6e,
  vatican_city: A6e,
  venezuela: O6e,
  vietnam: D6e,
  wallis_futuna: P6e,
  western_sahara: F6e,
  yemen: R6e,
  zambia: N6e,
  zimbabwe: M6e
};
var q6e = {
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
}, j6e = function(e, n) {
  return e[n].content;
}, B6e = function(e, n, r, o, i) {
  var s = e.utils.arrayReplaceAt, a = e.utils.lib.ucmicro, c = new RegExp([a.Z.source, a.P.source, a.Cc.source].join("|"));
  function u(l, f, d) {
    var h, w = 0, m = [];
    return l.replace(i, function(g, v, k) {
      var y;
      if (r.hasOwnProperty(g)) {
        if (y = r[g], v > 0 && !c.test(k[v - 1]) || v + g.length < k.length && !c.test(k[v + g.length]))
          return;
      } else
        y = g.slice(1, -1);
      v > w && (h = new d("text", "", 0), h.content = l.slice(w, v), m.push(h)), h = new d("emoji", "", 0), h.markup = y, h.content = n[y], m.push(h), w = v + g.length;
    }), w < l.length && (h = new d("text", "", 0), h.content = l.slice(w), m.push(h)), m;
  }
  return function(f) {
    var d, h, w, m, g, v = f.tokens, k = 0;
    for (h = 0, w = v.length; h < w; h++)
      if (v[h].type === "inline")
        for (m = v[h].children, d = m.length - 1; d >= 0; d--)
          g = m[d], (g.type === "link_open" || g.type === "link_close") && g.info === "auto" && (k -= g.nesting), g.type === "text" && k === 0 && o.test(g.content) && (v[h].children = m = s(
            m,
            d,
            u(g.content, g.level, f.Token)
          ));
  };
};
function z6e(t) {
  return t.replace(/[.?*+^$[\]\\(){}|-]/g, "\\$&");
}
var H6e = function(e) {
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
    return z6e(a);
  }).join("|"), i = RegExp(o), s = RegExp(o, "g");
  return {
    defs: n,
    shortcuts: r,
    scanRE: i,
    replaceRE: s
  };
}, V6e = L6e, U6e = q6e, G6e = j6e, W6e = B6e, K6e = H6e, Z6e = function(e, n) {
  var r = {
    defs: V6e,
    shortcuts: U6e,
    enabled: []
  }, o = K6e(e.utils.assign({}, r, n || {}));
  e.renderer.rules.emoji = G6e, e.core.ruler.push("emoji", W6e(e, o.defs, o.shortcuts, o.scanRE, o.replaceRE));
};
const J6e = /* @__PURE__ */ P_(Z6e);
/*! Copyright Twitter Inc. and other contributors. Licensed under MIT */
var Y6e = function() {
  var t = { base: "https://twemoji.maxcdn.com/v/12.1.3/", ext: ".png", size: "72x72", className: "emoji", convert: { fromCodePoint: k, toCodePoint: A }, onerror: function() {
    this.parentNode && this.parentNode.replaceChild(c(this.alt, !1), this);
  }, parse: y, replace: x, test: F }, e = { "&": "&amp;", "<": "&lt;", ">": "&gt;", "'": "&#39;", '"': "&quot;" }, n = /(?:\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c\udffb|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c\udffb|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c\udffb|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb\udffc]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udffd]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d])|(?:\ud83d[\udc68\udc69])(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f)|[#*0-9]\ufe0f?\u20e3|(?:[©®\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a-\udc6d\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5\udeeb\udeec\udef4-\udefa\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd71\udd73-\udd76\udd7a-\udda2\udda5-\uddaa\uddae-\uddb4\uddb7\uddba\uddbc-\uddca\uddd0\uddde-\uddff\ude70-\ude73\ude78-\ude7a\ude80-\ude82\ude90-\ude95]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g, r = /\uFE0F/g, o = String.fromCharCode(8205), i = /[&<>'"]/g, s = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/, a = String.fromCharCode;
  return t;
  function c(T, D) {
    return document.createTextNode(D ? T.replace(r, "") : T);
  }
  function u(T) {
    return T.replace(i, m);
  }
  function l(T, D) {
    return "".concat(D.base, D.size, "/", T, D.ext);
  }
  function f(T, D) {
    for (var H = T.childNodes, L = H.length, q, b; L--; )
      q = H[L], b = q.nodeType, b === 3 ? D.push(q) : b === 1 && !("ownerSVGElement" in q) && !s.test(q.nodeName.toLowerCase()) && f(q, D);
    return D;
  }
  function d(T) {
    return A(T.indexOf(o) < 0 ? T.replace(r, "") : T);
  }
  function h(T, D) {
    for (var H = f(T, []), L = H.length, q, b, _, p, P, N, C, S, O, E, I, M, B; L--; ) {
      for (_ = !1, p = document.createDocumentFragment(), P = H[L], N = P.nodeValue, S = 0; C = n.exec(N); ) {
        if (O = C.index, O !== S && p.appendChild(c(N.slice(S, O), !0)), I = C[0], M = d(I), S = O + I.length, B = D.callback(M, D), M && B) {
          E = new Image(), E.onerror = D.onerror, E.setAttribute("draggable", "false"), q = D.attributes(I, M);
          for (b in q)
            q.hasOwnProperty(b) && b.indexOf("on") !== 0 && !E.hasAttribute(b) && E.setAttribute(b, q[b]);
          E.className = D.className, E.alt = I, E.src = B, _ = !0, p.appendChild(E);
        }
        E || p.appendChild(c(I, !1)), E = null;
      }
      _ && (S < N.length && p.appendChild(c(N.slice(S), !0)), P.parentNode.replaceChild(p, P));
    }
    return T;
  }
  function w(T, D) {
    return x(T, function(H) {
      var L = H, q = d(H), b = D.callback(q, D), _, p;
      if (q && b) {
        L = "<img ".concat('class="', D.className, '" ', 'draggable="false" ', 'alt="', H, '"', ' src="', b, '"'), _ = D.attributes(H, q);
        for (p in _)
          _.hasOwnProperty(p) && p.indexOf("on") !== 0 && L.indexOf(" " + p + "=") === -1 && (L = L.concat(" ", p, '="', u(_[p]), '"'));
        L = L.concat("/>");
      }
      return L;
    });
  }
  function m(T) {
    return e[T];
  }
  function g() {
    return null;
  }
  function v(T) {
    return typeof T == "number" ? T + "x" + T : T;
  }
  function k(T) {
    var D = typeof T == "string" ? parseInt(T, 16) : T;
    return D < 65536 ? a(D) : (D -= 65536, a(55296 + (D >> 10), 56320 + (D & 1023)));
  }
  function y(T, D) {
    return (!D || typeof D == "function") && (D = { callback: D }), (typeof T == "string" ? w : h)(T, { callback: D.callback || l, attributes: typeof D.attributes == "function" ? D.attributes : g, base: typeof D.base == "string" ? D.base : t.base, ext: D.ext || t.ext, size: D.folder || v(D.size || t.size), className: D.className || t.className, onerror: D.onerror || t.onerror });
  }
  function x(T, D) {
    return String(T).replace(n, D);
  }
  function F(T) {
    n.lastIndex = 0;
    var D = n.test(T);
    return n.lastIndex = 0, D;
  }
  function A(T, D) {
    for (var H = [], L = 0, q = 0, b = 0; b < T.length; )
      L = T.charCodeAt(b++), q ? (H.push((65536 + (q - 55296 << 10) + (L - 56320)).toString(16)), q = 0) : 55296 <= L && L <= 56319 ? q = L : H.push(L.toString(16));
    return H.join(D || "-");
  }
}();
class X6e {
  constructor() {
    this.md = new $me(), this.md.use(J6e, []);
    let e = this.md.renderer.rules.link_open || function(n, r, o, i, s) {
      return s.renderToken(n, r, o);
    };
    this.md.renderer.rules.link_open = (n, r, o, i, s) => {
      var a = n[r].attrIndex("target");
      return a < 0 ? n[r].attrPush(["target", "_blank"]) : n[r].attrs[a][1] = "_blank", e(n, r, o, i, s);
    }, this.md.renderer.rules.emoji = (n, r) => Y6e.parse(n[r].content);
  }
  render(e) {
    return this.md.render(e);
  }
}
let Q6e = new X6e();
const eqe = {
  name: "SimpleDialog",
  props: {
    data: {
      type: In
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
  components: { FlatButton: nd },
  data() {
    return {
      MdRenderer: Q6e
    };
  },
  methods: {
    getType(t) {
      switch (t) {
        case Mt:
          return "plain";
        case fw:
          return "positive";
        case lw:
          return "negative";
        case dw:
          return "warning";
      }
    },
    onClick(t) {
      t.onClick() && this.$emit("close");
    },
    close(t) {
      this.data.type === ss && this.$emit("close");
    },
    enter(t) {
      t.key === "Enter" && this.data.operations.length === 1 && (this.data.operations[0].onClick(), this.$emit("close"));
    }
  }
};
var tqe = function() {
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
}, nqe = [], rqe = /* @__PURE__ */ ye(
  eqe,
  tqe,
  nqe,
  !1,
  null,
  "9dd17801",
  null,
  null
);
const oqe = rqe.exports;
const iqe = {
  name: "ModalManager",
  components: { SimpleDialog: oqe },
  data() {
    return {};
  },
  computed: {
    ...yt(["string", "dialogs"])
  },
  methods: {
    ...Yt(["addDialog", "removeDialog"]),
    getDialogStyle(t) {
      return { "z-index": t + 100 };
    }
  }
};
var sqe = function() {
  var e = this, n = e._self._c;
  return n("transition", { attrs: { name: "slow-opacity-fade" } }, [e.dialogs.length ? n("section", { staticClass: "modal-manager" }, [n("transition-group", { attrs: { name: "vertical-list", tag: "p" } }, e._l(e.dialogs, function(r, o) {
    return n("simple-dialog", { key: r.id, staticClass: "dialog", style: e.getDialogStyle(o), attrs: { data: r }, on: { close: function(i) {
      return e.removeDialog(r);
    } } });
  }), 1)], 1) : e._e()]);
}, aqe = [], cqe = /* @__PURE__ */ ye(
  iqe,
  sqe,
  aqe,
  !1,
  null,
  "dc16b416",
  null,
  null
);
const uqe = cqe.exports;
const lqe = {
  name: "InjectedApp",
  inject: ["config", "service", "disableLoading"],
  components: {
    ThumbScrollView: Y3,
    ReaderView: CR,
    ModalManager: uqe,
    LoadingView: DR
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
    ...yt(["showThumbView", "thumbWidth", "readingMode", "showThumbViewInBook", "string"]),
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
      if (await J.getFirstOpen()) {
        let t = navigator.language.toLowerCase();
        t.includes("zh") ? await J.setLang(Ms) : t.includes("jp") && await J.setLang(Ls), pr.showInstruction(this.config, !0), setTimeout(() => J.setFirstOpen(!1), 2e3);
      }
    },
    async checkVersion() {
      await Vw.timeout(5e3), pr.checkUpdate(this.config), pr.checkNewVersion(this.config);
    }
  }
};
var fqe = function() {
  var e = this, n = e._self._c;
  return n("div", { staticClass: "app normalize" }, [e.disableLoading ? e._e() : n("transition", { attrs: { name: "loading-horizontal-fade" } }, [!e.isDone && !e.isFailed ? n("loading-view", { staticClass: "loading-view" }) : e._e()], 1), n("transition", { attrs: { name: "slow-horizontal-fade" } }, [e.isFailed ? n("div", { staticClass: "failed-view" }, [n("h4", [e._v(e._s(e.string.loadingFailedAndRefresh))]), n("article", [n("p", [e._v(e._s(e.string.failedMsg) + ": " + e._s(e.failedMsg))]), n("p", [e._v(e._s(e.string.version) + ": " + e._s(e.config.version))]), n("p", [e._v(e._s(e.string.ContractAuthor) + ": Create issue on " + e._s(e.config.homePage) + " or email " + e._s(e.config.email))])])]) : e._e()]), e.isDone ? [n("transition", { attrs: { name: "slow-horizontal-fade" } }, [e.supportThumbView ? n("thumb-scroll-view", { staticClass: "thumb-column", style: e.thumbStyle, attrs: { thumbInfos: e.thumbInfos, pageCount: e.pageCount } }) : e._e()], 1), n("transition", { attrs: { name: "slow-horizontal-fade" } }, [n("reader-view", { staticClass: "reader-column", attrs: { pageCount: e.pageCount, curPageNum: e.curPageNum, title: e.title, imgPageInfos: e.imgPageInfos, albumId: e.albumId } })], 1)] : e._e(), n("modal-manager", { staticClass: "modal" })], 2);
}, dqe = [], hqe = /* @__PURE__ */ ye(
  lqe,
  fqe,
  dqe,
  !1,
  null,
  null,
  null,
  null
);
const pqe = hqe.exports;
let vu = {}, O_ = {}, D_ = !1;
const vqe = {
  setAlbumService(t) {
    return vu.album = t, this;
  },
  setEHunterService(t) {
    return vu.eHunter = t, this;
  },
  setConfig(t) {
    return O_ = t, this;
  },
  disableLoading(t) {
    return D_ = t, this;
  },
  instance() {
    return {
      components: { app: pqe },
      provide: {
        service: vu,
        config: O_,
        disableLoading: D_
      },
      data() {
        return {};
      },
      template: "<app></app>"
    };
  }
}, gqe = {
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
se.mixin(gqe);
function mqe(t, e, n) {
  if (document.getElementsByClassName(t).length > 0) {
    let r = new se({
      store: pe,
      render: (o) => o(n)
    }).$mount(e);
    return J.initSettings(), r;
  }
}
const ls = {
  launcher: vqe,
  createAppView: mqe,
  SettingService: J
};
class _qe {
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
class bqe {
  getBookScreenCount(e, n) {
    return Math.ceil((e + 2) / n);
  }
  getRealCurIndexInfo(e, n) {
    let r = n.val;
    return r = r >= e ? e - 1 : r, { val: r, updater: n.updater };
  }
}
class yqe extends bqe {
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
class wqe extends _qe {
  isAlbumViewPage() {
    return !0;
  }
  initEHunter() {
    super.initEHunter(), ls.createAppView(
      "vue-container",
      "#app",
      ls.launcher.setAlbumService(new yqe()).setEHunterService({
        showEHunterView: this.showEHunterView
      }).instance()
    );
  }
}
new wqe().init();
//# sourceMappingURL=ehunter.mjs.map
