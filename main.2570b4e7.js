(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload"))
        return;
    for (const n of document.querySelectorAll('link[rel="modulepreload"]'))
        i(n);
    new MutationObserver(n=>{
        for (const r of n)
            if (r.type === "childList")
                for (const s of r.addedNodes)
                    s.tagName === "LINK" && s.rel === "modulepreload" && i(s)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function e(n) {
        const r = {};
        return n.integrity && (r.integrity = n.integrity),
        n.referrerpolicy && (r.referrerPolicy = n.referrerpolicy),
        n.crossorigin === "use-credentials" ? r.credentials = "include" : n.crossorigin === "anonymous" ? r.credentials = "omit" : r.credentials = "same-origin",
        r
    }
    function i(n) {
        if (n.ep)
            return;
        n.ep = !0;
        const r = e(n);
        fetch(n.href, r)
    }
}
)();
const {HTMLElement: Ve, NodeList: $} = window;
Ve && !Ve.prototype.forEach && (Ve.prototype.forEach = function(o, t) {
    t = t || window,
    o.call(t, this, this, this)
}
);
$ && !$.prototype.forEach && ($.prototype.forEach = function(o, t) {
    t = t || window;
    for (let e = 0; e < this.length; e++)
        o.call(t, this[e], e, this)
}
);
$ && !$.prototype.map && ($.prototype.map = Array.prototype.map);
$ && !$.prototype.find && ($.prototype.find = Array.prototype.find);
$ && !$.prototype.filter && ($.prototype.filter = Array.prototype.filter);
$ && !$.prototype.forEach && ($.prototype.forEach = function(o, t) {
    t = t || window;
    for (let e = 0; e < this.length; e++)
        o.call(t, this[e], e, this)
}
);
function pt(o) {
    if (o === void 0)
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return o
}
function pn(o, t) {
    o.prototype = Object.create(t.prototype),
    o.prototype.constructor = o,
    o.__proto__ = t
}
/*!
 * GSAP 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var it = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: {
        lineHeight: ""
    }
}, te = {
    duration: .5,
    overwrite: !1,
    delay: 0
}, bi, ot = 1e8, M = 1 / ot, ni = Math.PI * 2, Cr = ni / 4, Mr = 0, mn = Math.sqrt, Ar = Math.cos, Lr = Math.sin, Y = function(t) {
    return typeof t == "string"
}, U = function(t) {
    return typeof t == "function"
}, yt = function(t) {
    return typeof t == "number"
}, Ti = function(t) {
    return typeof t > "u"
}, vt = function(t) {
    return typeof t == "object"
}, Z = function(t) {
    return t !== !1
}, gn = function() {
    return typeof window < "u"
}, Se = function(t) {
    return U(t) || Y(t)
}, wn = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {}
, q = Array.isArray, ri = /(?:-?\.?\d|\.)+/gi, yn = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g, Ht = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g, je = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi, vn = /[+-]=-?[.\d]+/, xn = /[^,'"\[\]\s]+/gi, Dr = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i, R, ct, si, Ei, nt = {}, Re = {}, bn, Tn = function(t) {
    return (Re = qt(t, nt)) && ht
}, Pi = function(t, e) {
    return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
}, Fe = function(t, e) {
    return !e && console.warn(t)
}, En = function(t, e) {
    return t && (nt[t] = e) && Re && (Re[t] = e) || nt
}, de = function() {
    return 0
}, Si = {}, Pt = [], oi = {}, Pn, tt = {}, qe = {}, Wi = 30, Ce = [], ki = "", Oi = function(t) {
    var e = t[0], i, n;
    if (vt(e) || U(e) || (t = [t]),
    !(i = (e._gsap || {}).harness)) {
        for (n = Ce.length; n-- && !Ce[n].targetTest(e); )
            ;
        i = Ce[n]
    }
    for (n = t.length; n--; )
        t[n] && (t[n]._gsap || (t[n]._gsap = new $n(t[n],i))) || t.splice(n, 1);
    return t
}, Xt = function(t) {
    return t._gsap || Oi(at(t))[0]._gsap
}, Sn = function(t, e, i) {
    return (i = t[e]) && U(i) ? t[e]() : Ti(i) && t.getAttribute && t.getAttribute(e) || i
}, Q = function(t, e) {
    return (t = t.split(",")).forEach(e) || t
}, z = function(t) {
    return Math.round(t * 1e5) / 1e5 || 0
}, V = function(t) {
    return Math.round(t * 1e7) / 1e7 || 0
}, Zt = function(t, e) {
    var i = e.charAt(0)
      , n = parseFloat(e.substr(2));
    return t = parseFloat(t),
    i === "+" ? t + n : i === "-" ? t - n : i === "*" ? t * n : t / n
}, Rr = function(t, e) {
    for (var i = e.length, n = 0; t.indexOf(e[n]) < 0 && ++n < i; )
        ;
    return n < i
}, ze = function() {
    var t = Pt.length, e = Pt.slice(0), i, n;
    for (oi = {},
    Pt.length = 0,
    i = 0; i < t; i++)
        n = e[i],
        n && n._lazy && (n.render(n._lazy[0], n._lazy[1], !0)._lazy = 0)
}, kn = function(t, e, i, n) {
    Pt.length && ze(),
    t.render(e, i, n),
    Pt.length && ze()
}, On = function(t) {
    var e = parseFloat(t);
    return (e || e === 0) && (t + "").match(xn).length < 2 ? e : Y(t) ? t.trim() : t
}, Cn = function(t) {
    return t
}, lt = function(t, e) {
    for (var i in e)
        i in t || (t[i] = e[i]);
    return t
}, Fr = function(t) {
    return function(e, i) {
        for (var n in i)
            n in e || n === "duration" && t || n === "ease" || (e[n] = i[n])
    }
}, qt = function(t, e) {
    for (var i in e)
        t[i] = e[i];
    return t
}, Ui = function o(t, e) {
    for (var i in e)
        i !== "__proto__" && i !== "constructor" && i !== "prototype" && (t[i] = vt(e[i]) ? o(t[i] || (t[i] = {}), e[i]) : e[i]);
    return t
}, Ie = function(t, e) {
    var i = {}, n;
    for (n in t)
        n in e || (i[n] = t[n]);
    return i
}, he = function(t) {
    var e = t.parent || R
      , i = t.keyframes ? Fr(q(t.keyframes)) : lt;
    if (Z(t.inherit))
        for (; e; )
            i(t, e.vars.defaults),
            e = e.parent || e._dp;
    return t
}, zr = function(t, e) {
    for (var i = t.length, n = i === e.length; n && i-- && t[i] === e[i]; )
        ;
    return i < 0
}, Mn = function(t, e, i, n, r) {
    i === void 0 && (i = "_first"),
    n === void 0 && (n = "_last");
    var s = t[n], a;
    if (r)
        for (a = e[r]; s && s[r] > a; )
            s = s._prev;
    return s ? (e._next = s._next,
    s._next = e) : (e._next = t[i],
    t[i] = e),
    e._next ? e._next._prev = e : t[n] = e,
    e._prev = s,
    e.parent = e._dp = t,
    e
}, Ye = function(t, e, i, n) {
    i === void 0 && (i = "_first"),
    n === void 0 && (n = "_last");
    var r = e._prev
      , s = e._next;
    r ? r._next = s : t[i] === e && (t[i] = s),
    s ? s._prev = r : t[n] === e && (t[n] = r),
    e._next = e._prev = e.parent = null
}, mt = function(t, e) {
    t.parent && (!e || t.parent.autoRemoveChildren) && t.parent.remove(t),
    t._act = 0
}, Vt = function(t, e) {
    if (t && (!e || e._end > t._dur || e._start < 0))
        for (var i = t; i; )
            i._dirty = 1,
            i = i.parent;
    return t
}, Ir = function(t) {
    for (var e = t.parent; e && e.parent; )
        e._dirty = 1,
        e.totalDuration(),
        e = e.parent;
    return t
}, Nr = function o(t) {
    return !t || t._ts && o(t.parent)
}, Yi = function(t) {
    return t._repeat ? ee(t._tTime, t = t.duration() + t._rDelay) * t : 0
}, ee = function(t, e) {
    var i = Math.floor(t /= e);
    return t && i === t ? i - 1 : i
}, Ne = function(t, e) {
    return (t - e._start) * e._ts + (e._ts >= 0 ? 0 : e._dirty ? e.totalDuration() : e._tDur)
}, Xe = function(t) {
    return t._end = V(t._start + (t._tDur / Math.abs(t._ts || t._rts || M) || 0))
}, Ci = function(t, e) {
    var i = t._dp;
    return i && i.smoothChildTiming && t._ts && (t._start = V(i._time - (t._ts > 0 ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)),
    Xe(t),
    i._dirty || Vt(i, t)),
    t
}, An = function(t, e) {
    var i;
    if ((e._time || e._initted && !e._dur) && (i = Ne(t.rawTime(), e),
    (!e._dur || be(0, e.totalDuration(), i) - e._tTime > M) && e.render(i, !0)),
    Vt(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
        if (t._dur < t.duration())
            for (i = t; i._dp; )
                i.rawTime() >= 0 && i.totalTime(i._tTime),
                i = i._dp;
        t._zTime = -M
    }
}, ft = function(t, e, i, n) {
    return e.parent && mt(e),
    e._start = V((yt(i) ? i : i || t !== R ? rt(t, i, e) : t._time) + e._delay),
    e._end = V(e._start + (e.totalDuration() / Math.abs(e.timeScale()) || 0)),
    Mn(t, e, "_first", "_last", t._sort ? "_start" : 0),
    ai(e) || (t._recent = e),
    n || An(t, e),
    t
}, Ln = function(t, e) {
    return (nt.ScrollTrigger || Pi("scrollTrigger", e)) && nt.ScrollTrigger.create(e, t)
}, Dn = function(t, e, i, n) {
    if (Ai(t, e),
    !t._initted)
        return 1;
    if (!i && t._pt && (t._dur && t.vars.lazy !== !1 || !t._dur && t.vars.lazy) && Pn !== et.frame)
        return Pt.push(t),
        t._lazy = [e, n],
        1
}, Br = function o(t) {
    var e = t.parent;
    return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || o(e))
}, ai = function(t) {
    var e = t.data;
    return e === "isFromStart" || e === "isStart"
}, Wr = function(t, e, i, n) {
    var r = t.ratio, s = e < 0 || !e && (!t._start && Br(t) && !(!t._initted && ai(t)) || (t._ts < 0 || t._dp._ts < 0) && !ai(t)) ? 0 : 1, a = t._rDelay, l = 0, u, h, c;
    if (a && t._repeat && (l = be(0, t._tDur, e),
    h = ee(l, a),
    t._yoyo && h & 1 && (s = 1 - s),
    h !== ee(t._tTime, a) && (r = 1 - s,
    t.vars.repeatRefresh && t._initted && t.invalidate())),
    s !== r || n || t._zTime === M || !e && t._zTime) {
        if (!t._initted && Dn(t, e, n, i))
            return;
        for (c = t._zTime,
        t._zTime = e || (i ? M : 0),
        i || (i = e && !c),
        t.ratio = s,
        t._from && (s = 1 - s),
        t._time = 0,
        t._tTime = l,
        u = t._pt; u; )
            u.r(s, u.d),
            u = u._next;
        t._startAt && e < 0 && t._startAt.render(e, !0, !0),
        t._onUpdate && !i && ut(t, "onUpdate"),
        l && t._repeat && !i && t.parent && ut(t, "onRepeat"),
        (e >= t._tDur || e < 0) && t.ratio === s && (s && mt(t, 1),
        i || (ut(t, s ? "onComplete" : "onReverseComplete", !0),
        t._prom && t._prom()))
    } else
        t._zTime || (t._zTime = e)
}, Ur = function(t, e, i) {
    var n;
    if (i > e)
        for (n = t._first; n && n._start <= i; ) {
            if (n.data === "isPause" && n._start > e)
                return n;
            n = n._next
        }
    else
        for (n = t._last; n && n._start >= i; ) {
            if (n.data === "isPause" && n._start < e)
                return n;
            n = n._prev
        }
}, ie = function(t, e, i, n) {
    var r = t._repeat
      , s = V(e) || 0
      , a = t._tTime / t._tDur;
    return a && !n && (t._time *= s / t._dur),
    t._dur = s,
    t._tDur = r ? r < 0 ? 1e10 : V(s * (r + 1) + t._rDelay * r) : s,
    a > 0 && !n ? Ci(t, t._tTime = t._tDur * a) : t.parent && Xe(t),
    i || Vt(t.parent, t),
    t
}, Xi = function(t) {
    return t instanceof K ? Vt(t) : ie(t, t._dur)
}, Yr = {
    _start: 0,
    endTime: de,
    totalDuration: de
}, rt = function o(t, e, i) {
    var n = t.labels, r = t._recent || Yr, s = t.duration() >= ot ? r.endTime(!1) : t._dur, a, l, u;
    return Y(e) && (isNaN(e) || e in n) ? (l = e.charAt(0),
    u = e.substr(-1) === "%",
    a = e.indexOf("="),
    l === "<" || l === ">" ? (a >= 0 && (e = e.replace(/=/, "")),
    (l === "<" ? r._start : r.endTime(r._repeat >= 0)) + (parseFloat(e.substr(1)) || 0) * (u ? (a < 0 ? r : i).totalDuration() / 100 : 1)) : a < 0 ? (e in n || (n[e] = s),
    n[e]) : (l = parseFloat(e.charAt(a - 1) + e.substr(a + 1)),
    u && i && (l = l / 100 * (q(i) ? i[0] : i).totalDuration()),
    a > 1 ? o(t, e.substr(0, a - 1), i) + l : s + l)) : e == null ? s : +e
}, ce = function(t, e, i) {
    var n = yt(e[1]), r = (n ? 2 : 1) + (t < 2 ? 0 : 1), s = e[r], a, l;
    if (n && (s.duration = e[1]),
    s.parent = i,
    t) {
        for (a = s,
        l = i; l && !("immediateRender"in a); )
            a = l.vars.defaults || {},
            l = Z(l.vars.inherit) && l.parent;
        s.immediateRender = Z(a.immediateRender),
        t < 2 ? s.runBackwards = 1 : s.startAt = e[r - 1]
    }
    return new W(e[0],s,e[r + 1])
}, At = function(t, e) {
    return t || t === 0 ? e(t) : e
}, be = function(t, e, i) {
    return i < t ? t : i > e ? e : i
}, j = function(t, e) {
    return !Y(t) || !(e = Dr.exec(t)) ? "" : e[1]
}, Xr = function(t, e, i) {
    return At(i, function(n) {
        return be(t, e, n)
    })
}, ui = [].slice, Rn = function(t, e) {
    return t && vt(t) && "length"in t && (!e && !t.length || t.length - 1 in t && vt(t[0])) && !t.nodeType && t !== ct
}, Vr = function(t, e, i) {
    return i === void 0 && (i = []),
    t.forEach(function(n) {
        var r;
        return Y(n) && !e || Rn(n, 1) ? (r = i).push.apply(r, at(n)) : i.push(n)
    }) || i
}, at = function(t, e, i) {
    return Y(t) && !i && (si || !ne()) ? ui.call((e || Ei).querySelectorAll(t), 0) : q(t) ? Vr(t, i) : Rn(t) ? ui.call(t, 0) : t ? [t] : []
}, jr = function(t) {
    return t = at(t)[0] || Fe("Invalid scope") || {},
    function(e) {
        var i = t.current || t.nativeElement || t;
        return at(e, i.querySelectorAll ? i : i === t ? Fe("Invalid scope") || Ei.createElement("div") : t)
    }
}, Fn = function(t) {
    return t.sort(function() {
        return .5 - Math.random()
    })
}, zn = function(t) {
    if (U(t))
        return t;
    var e = vt(t) ? t : {
        each: t
    }
      , i = jt(e.ease)
      , n = e.from || 0
      , r = parseFloat(e.base) || 0
      , s = {}
      , a = n > 0 && n < 1
      , l = isNaN(n) || a
      , u = e.axis
      , h = n
      , c = n;
    return Y(n) ? h = c = {
        center: .5,
        edges: .5,
        end: 1
    }[n] || 0 : !a && l && (h = n[0],
    c = n[1]),
    function(f, p, m) {
        var d = (m || e).length, g = s[d], w, b, x, T, y, v, P, S, E;
        if (!g) {
            if (E = e.grid === "auto" ? 0 : (e.grid || [1, ot])[1],
            !E) {
                for (P = -ot; P < (P = m[E++].getBoundingClientRect().left) && E < d; )
                    ;
                E--
            }
            for (g = s[d] = [],
            w = l ? Math.min(E, d) * h - .5 : n % E,
            b = E === ot ? 0 : l ? d * c / E - .5 : n / E | 0,
            P = 0,
            S = ot,
            v = 0; v < d; v++)
                x = v % E - w,
                T = b - (v / E | 0),
                g[v] = y = u ? Math.abs(u === "y" ? T : x) : mn(x * x + T * T),
                y > P && (P = y),
                y < S && (S = y);
            n === "random" && Fn(g),
            g.max = P - S,
            g.min = S,
            g.v = d = (parseFloat(e.amount) || parseFloat(e.each) * (E > d ? d - 1 : u ? u === "y" ? d / E : E : Math.max(E, d / E)) || 0) * (n === "edges" ? -1 : 1),
            g.b = d < 0 ? r - d : r,
            g.u = j(e.amount || e.each) || 0,
            i = i && d < 0 ? Vn(i) : i
        }
        return d = (g[f] - g.min) / g.max || 0,
        V(g.b + (i ? i(d) : d) * g.v) + g.u
    }
}, li = function(t) {
    var e = Math.pow(10, ((t + "").split(".")[1] || "").length);
    return function(i) {
        var n = Math.round(parseFloat(i) / t) * t * e;
        return (n - n % 1) / e + (yt(i) ? 0 : j(i))
    }
}, In = function(t, e) {
    var i = q(t), n, r;
    return !i && vt(t) && (n = i = t.radius || ot,
    t.values ? (t = at(t.values),
    (r = !yt(t[0])) && (n *= n)) : t = li(t.increment)),
    At(e, i ? U(t) ? function(s) {
        return r = t(s),
        Math.abs(r - s) <= n ? r : s
    }
    : function(s) {
        for (var a = parseFloat(r ? s.x : s), l = parseFloat(r ? s.y : 0), u = ot, h = 0, c = t.length, f, p; c--; )
            r ? (f = t[c].x - a,
            p = t[c].y - l,
            f = f * f + p * p) : f = Math.abs(t[c] - a),
            f < u && (u = f,
            h = c);
        return h = !n || u <= n ? t[h] : s,
        r || h === s || yt(s) ? h : h + j(s)
    }
    : li(t))
}, Nn = function(t, e, i, n) {
    return At(q(t) ? !e : i === !0 ? !!(i = 0) : !n, function() {
        return q(t) ? t[~~(Math.random() * t.length)] : (i = i || 1e-5) && (n = i < 1 ? Math.pow(10, (i + "").length - 2) : 1) && Math.floor(Math.round((t - i / 2 + Math.random() * (e - t + i * .99)) / i) * i * n) / n
    })
}, qr = function() {
    for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
        e[i] = arguments[i];
    return function(n) {
        return e.reduce(function(r, s) {
            return s(r)
        }, n)
    }
}, $r = function(t, e) {
    return function(i) {
        return t(parseFloat(i)) + (e || j(i))
    }
}, Gr = function(t, e, i) {
    return Wn(t, e, 0, 1, i)
}, Bn = function(t, e, i) {
    return At(i, function(n) {
        return t[~~e(n)]
    })
}, Hr = function o(t, e, i) {
    var n = e - t;
    return q(t) ? Bn(t, o(0, t.length), e) : At(i, function(r) {
        return (n + (r - t) % n) % n + t
    })
}, Kr = function o(t, e, i) {
    var n = e - t
      , r = n * 2;
    return q(t) ? Bn(t, o(0, t.length - 1), e) : At(i, function(s) {
        return s = (r + (s - t) % r) % r || 0,
        t + (s > n ? r - s : s)
    })
}, _e = function(t) {
    for (var e = 0, i = "", n, r, s, a; ~(n = t.indexOf("random(", e)); )
        s = t.indexOf(")", n),
        a = t.charAt(n + 7) === "[",
        r = t.substr(n + 7, s - n - 7).match(a ? xn : ri),
        i += t.substr(e, n - e) + Nn(a ? r : +r[0], a ? 0 : +r[1], +r[2] || 1e-5),
        e = s + 1;
    return i + t.substr(e, t.length - e)
}, Wn = function(t, e, i, n, r) {
    var s = e - t
      , a = n - i;
    return At(r, function(l) {
        return i + ((l - t) / s * a || 0)
    })
}, Zr = function o(t, e, i, n) {
    var r = isNaN(t + e) ? 0 : function(p) {
        return (1 - p) * t + p * e
    }
    ;
    if (!r) {
        var s = Y(t), a = {}, l, u, h, c, f;
        if (i === !0 && (n = 1) && (i = null),
        s)
            t = {
                p: t
            },
            e = {
                p: e
            };
        else if (q(t) && !q(e)) {
            for (h = [],
            c = t.length,
            f = c - 2,
            u = 1; u < c; u++)
                h.push(o(t[u - 1], t[u]));
            c--,
            r = function(m) {
                m *= c;
                var d = Math.min(f, ~~m);
                return h[d](m - d)
            }
            ,
            i = e
        } else
            n || (t = qt(q(t) ? [] : {}, t));
        if (!h) {
            for (l in e)
                Mi.call(a, t, l, "get", e[l]);
            r = function(m) {
                return Ri(m, a) || (s ? t.p : t)
            }
        }
    }
    return At(i, r)
}, Vi = function(t, e, i) {
    var n = t.labels, r = ot, s, a, l;
    for (s in n)
        a = n[s] - e,
        a < 0 == !!i && a && r > (a = Math.abs(a)) && (l = s,
        r = a);
    return l
}, ut = function(t, e, i) {
    var n = t.vars, r = n[e], s, a;
    if (!!r)
        return s = n[e + "Params"],
        a = n.callbackScope || t,
        i && Pt.length && ze(),
        s ? r.apply(a, s) : r.call(a)
}, ue = function(t) {
    return mt(t),
    t.scrollTrigger && t.scrollTrigger.kill(!1),
    t.progress() < 1 && ut(t, "onInterrupt"),
    t
}, Kt, Qr = function(t) {
    t = !t.name && t.default || t;
    var e = t.name
      , i = U(t)
      , n = e && !i && t.init ? function() {
        this._props = []
    }
    : t
      , r = {
        init: de,
        render: Ri,
        add: Mi,
        kill: _s,
        modifier: ds,
        rawVars: 0
    }
      , s = {
        targetTest: 0,
        get: 0,
        getSetter: Di,
        aliases: {},
        register: 0
    };
    if (ne(),
    t !== n) {
        if (tt[e])
            return;
        lt(n, lt(Ie(t, r), s)),
        qt(n.prototype, qt(r, Ie(t, s))),
        tt[n.prop = e] = n,
        t.targetTest && (Ce.push(n),
        Si[e] = 1),
        e = (e === "css" ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
    }
    En(e, n),
    t.register && t.register(ht, n, J)
}, C = 255, le = {
    aqua: [0, C, C],
    lime: [0, C, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, C],
    navy: [0, 0, 128],
    white: [C, C, C],
    olive: [128, 128, 0],
    yellow: [C, C, 0],
    orange: [C, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [C, 0, 0],
    pink: [C, 192, 203],
    cyan: [0, C, C],
    transparent: [C, C, C, 0]
}, $e = function(t, e, i) {
    return t += t < 0 ? 1 : t > 1 ? -1 : 0,
    (t * 6 < 1 ? e + (i - e) * t * 6 : t < .5 ? i : t * 3 < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) * C + .5 | 0
}, Un = function(t, e, i) {
    var n = t ? yt(t) ? [t >> 16, t >> 8 & C, t & C] : 0 : le.black, r, s, a, l, u, h, c, f, p, m;
    if (!n) {
        if (t.substr(-1) === "," && (t = t.substr(0, t.length - 1)),
        le[t])
            n = le[t];
        else if (t.charAt(0) === "#") {
            if (t.length < 6 && (r = t.charAt(1),
            s = t.charAt(2),
            a = t.charAt(3),
            t = "#" + r + r + s + s + a + a + (t.length === 5 ? t.charAt(4) + t.charAt(4) : "")),
            t.length === 9)
                return n = parseInt(t.substr(1, 6), 16),
                [n >> 16, n >> 8 & C, n & C, parseInt(t.substr(7), 16) / 255];
            t = parseInt(t.substr(1), 16),
            n = [t >> 16, t >> 8 & C, t & C]
        } else if (t.substr(0, 3) === "hsl") {
            if (n = m = t.match(ri),
            !e)
                l = +n[0] % 360 / 360,
                u = +n[1] / 100,
                h = +n[2] / 100,
                s = h <= .5 ? h * (u + 1) : h + u - h * u,
                r = h * 2 - s,
                n.length > 3 && (n[3] *= 1),
                n[0] = $e(l + 1 / 3, r, s),
                n[1] = $e(l, r, s),
                n[2] = $e(l - 1 / 3, r, s);
            else if (~t.indexOf("="))
                return n = t.match(yn),
                i && n.length < 4 && (n[3] = 1),
                n
        } else
            n = t.match(ri) || le.transparent;
        n = n.map(Number)
    }
    return e && !m && (r = n[0] / C,
    s = n[1] / C,
    a = n[2] / C,
    c = Math.max(r, s, a),
    f = Math.min(r, s, a),
    h = (c + f) / 2,
    c === f ? l = u = 0 : (p = c - f,
    u = h > .5 ? p / (2 - c - f) : p / (c + f),
    l = c === r ? (s - a) / p + (s < a ? 6 : 0) : c === s ? (a - r) / p + 2 : (r - s) / p + 4,
    l *= 60),
    n[0] = ~~(l + .5),
    n[1] = ~~(u * 100 + .5),
    n[2] = ~~(h * 100 + .5)),
    i && n.length < 4 && (n[3] = 1),
    n
}, Yn = function(t) {
    var e = []
      , i = []
      , n = -1;
    return t.split(St).forEach(function(r) {
        var s = r.match(Ht) || [];
        e.push.apply(e, s),
        i.push(n += s.length + 1)
    }),
    e.c = i,
    e
}, ji = function(t, e, i) {
    var n = "", r = (t + n).match(St), s = e ? "hsla(" : "rgba(", a = 0, l, u, h, c;
    if (!r)
        return t;
    if (r = r.map(function(f) {
        return (f = Un(f, e, 1)) && s + (e ? f[0] + "," + f[1] + "%," + f[2] + "%," + f[3] : f.join(",")) + ")"
    }),
    i && (h = Yn(t),
    l = i.c,
    l.join(n) !== h.c.join(n)))
        for (u = t.replace(St, "1").split(Ht),
        c = u.length - 1; a < c; a++)
            n += u[a] + (~l.indexOf(a) ? r.shift() || s + "0,0,0,0)" : (h.length ? h : r.length ? r : i).shift());
    if (!u)
        for (u = t.split(St),
        c = u.length - 1; a < c; a++)
            n += u[a] + r[a];
    return n + u[c]
}, St = function() {
    var o = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b", t;
    for (t in le)
        o += "|" + t + "\\b";
    return new RegExp(o + ")","gi")
}(), Jr = /hsl[a]?\(/, Xn = function(t) {
    var e = t.join(" "), i;
    if (St.lastIndex = 0,
    St.test(e))
        return i = Jr.test(e),
        t[1] = ji(t[1], i),
        t[0] = ji(t[0], i, Yn(t[1])),
        !0
}, pe, et = function() {
    var o = Date.now, t = 500, e = 33, i = o(), n = i, r = 1e3 / 240, s = r, a = [], l, u, h, c, f, p, m = function d(g) {
        var w = o() - n, b = g === !0, x, T, y, v;
        if (w > t && (i += w - e),
        n += w,
        y = n - i,
        x = y - s,
        (x > 0 || b) && (v = ++c.frame,
        f = y - c.time * 1e3,
        c.time = y = y / 1e3,
        s += x + (x >= r ? 4 : r - x),
        T = 1),
        b || (l = u(d)),
        T)
            for (p = 0; p < a.length; p++)
                a[p](y, f, v, g)
    };
    return c = {
        time: 0,
        frame: 0,
        tick: function() {
            m(!0)
        },
        deltaRatio: function(g) {
            return f / (1e3 / (g || 60))
        },
        wake: function() {
            bn && (!si && gn() && (ct = si = window,
            Ei = ct.document || {},
            nt.gsap = ht,
            (ct.gsapVersions || (ct.gsapVersions = [])).push(ht.version),
            Tn(Re || ct.GreenSockGlobals || !ct.gsap && ct || {}),
            h = ct.requestAnimationFrame),
            l && c.sleep(),
            u = h || function(g) {
                return setTimeout(g, s - c.time * 1e3 + 1 | 0)
            }
            ,
            pe = 1,
            m(2))
        },
        sleep: function() {
            (h ? ct.cancelAnimationFrame : clearTimeout)(l),
            pe = 0,
            u = de
        },
        lagSmoothing: function(g, w) {
            t = g || 1 / M,
            e = Math.min(w, t, 0)
        },
        fps: function(g) {
            r = 1e3 / (g || 240),
            s = c.time * 1e3 + r
        },
        add: function(g, w, b) {
            var x = w ? function(T, y, v, P) {
                g(T, y, v, P),
                c.remove(x)
            }
            : g;
            return c.remove(g),
            a[b ? "unshift" : "push"](x),
            ne(),
            x
        },
        remove: function(g, w) {
            ~(w = a.indexOf(g)) && a.splice(w, 1) && p >= w && p--
        },
        _listeners: a
    },
    c
}(), ne = function() {
    return !pe && et.wake()
}, k = {}, ts = /^[\d.\-M][\d.\-,\s]/, es = /["']/g, is = function(t) {
    for (var e = {}, i = t.substr(1, t.length - 3).split(":"), n = i[0], r = 1, s = i.length, a, l, u; r < s; r++)
        l = i[r],
        a = r !== s - 1 ? l.lastIndexOf(",") : l.length,
        u = l.substr(0, a),
        e[n] = isNaN(u) ? u.replace(es, "").trim() : +u,
        n = l.substr(a + 1).trim();
    return e
}, ns = function(t) {
    var e = t.indexOf("(") + 1
      , i = t.indexOf(")")
      , n = t.indexOf("(", e);
    return t.substring(e, ~n && n < i ? t.indexOf(")", i + 1) : i)
}, rs = function(t) {
    var e = (t + "").split("(")
      , i = k[e[0]];
    return i && e.length > 1 && i.config ? i.config.apply(null, ~t.indexOf("{") ? [is(e[1])] : ns(t).split(",").map(On)) : k._CE && ts.test(t) ? k._CE("", t) : i
}, Vn = function(t) {
    return function(e) {
        return 1 - t(1 - e)
    }
}, jn = function o(t, e) {
    for (var i = t._first, n; i; )
        i instanceof K ? o(i, e) : i.vars.yoyoEase && (!i._yoyo || !i._repeat) && i._yoyo !== e && (i.timeline ? o(i.timeline, e) : (n = i._ease,
        i._ease = i._yEase,
        i._yEase = n,
        i._yoyo = e)),
        i = i._next
}, jt = function(t, e) {
    return t && (U(t) ? t : k[t] || rs(t)) || e
}, $t = function(t, e, i, n) {
    i === void 0 && (i = function(l) {
        return 1 - e(1 - l)
    }
    ),
    n === void 0 && (n = function(l) {
        return l < .5 ? e(l * 2) / 2 : 1 - e((1 - l) * 2) / 2
    }
    );
    var r = {
        easeIn: e,
        easeOut: i,
        easeInOut: n
    }, s;
    return Q(t, function(a) {
        k[a] = nt[a] = r,
        k[s = a.toLowerCase()] = i;
        for (var l in r)
            k[s + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")] = k[a + "." + l] = r[l]
    }),
    r
}, qn = function(t) {
    return function(e) {
        return e < .5 ? (1 - t(1 - e * 2)) / 2 : .5 + t((e - .5) * 2) / 2
    }
}, Ge = function o(t, e, i) {
    var n = e >= 1 ? e : 1
      , r = (i || (t ? .3 : .45)) / (e < 1 ? e : 1)
      , s = r / ni * (Math.asin(1 / n) || 0)
      , a = function(h) {
        return h === 1 ? 1 : n * Math.pow(2, -10 * h) * Lr((h - s) * r) + 1
    }
      , l = t === "out" ? a : t === "in" ? function(u) {
        return 1 - a(1 - u)
    }
    : qn(a);
    return r = ni / r,
    l.config = function(u, h) {
        return o(t, u, h)
    }
    ,
    l
}, He = function o(t, e) {
    e === void 0 && (e = 1.70158);
    var i = function(s) {
        return s ? --s * s * ((e + 1) * s + e) + 1 : 0
    }
      , n = t === "out" ? i : t === "in" ? function(r) {
        return 1 - i(1 - r)
    }
    : qn(i);
    return n.config = function(r) {
        return o(t, r)
    }
    ,
    n
};
Q("Linear,Quad,Cubic,Quart,Quint,Strong", function(o, t) {
    var e = t < 5 ? t + 1 : t;
    $t(o + ",Power" + (e - 1), t ? function(i) {
        return Math.pow(i, e)
    }
    : function(i) {
        return i
    }
    , function(i) {
        return 1 - Math.pow(1 - i, e)
    }, function(i) {
        return i < .5 ? Math.pow(i * 2, e) / 2 : 1 - Math.pow((1 - i) * 2, e) / 2
    })
});
k.Linear.easeNone = k.none = k.Linear.easeIn;
$t("Elastic", Ge("in"), Ge("out"), Ge());
(function(o, t) {
    var e = 1 / t
      , i = 2 * e
      , n = 2.5 * e
      , r = function(a) {
        return a < e ? o * a * a : a < i ? o * Math.pow(a - 1.5 / t, 2) + .75 : a < n ? o * (a -= 2.25 / t) * a + .9375 : o * Math.pow(a - 2.625 / t, 2) + .984375
    };
    $t("Bounce", function(s) {
        return 1 - r(1 - s)
    }, r)
}
)(7.5625, 2.75);
$t("Expo", function(o) {
    return o ? Math.pow(2, 10 * (o - 1)) : 0
});
$t("Circ", function(o) {
    return -(mn(1 - o * o) - 1)
});
$t("Sine", function(o) {
    return o === 1 ? 1 : -Ar(o * Cr) + 1
});
$t("Back", He("in"), He("out"), He());
k.SteppedEase = k.steps = nt.SteppedEase = {
    config: function(t, e) {
        t === void 0 && (t = 1);
        var i = 1 / t
          , n = t + (e ? 0 : 1)
          , r = e ? 1 : 0
          , s = 1 - M;
        return function(a) {
            return ((n * be(0, s, a) | 0) + r) * i
        }
    }
};
te.ease = k["quad.out"];
Q("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(o) {
    return ki += o + "," + o + "Params,"
});
var $n = function(t, e) {
    this.id = Mr++,
    t._gsap = this,
    this.target = t,
    this.harness = e,
    this.get = e ? e.get : Sn,
    this.set = e ? e.getSetter : Di
}
  , me = function() {
    function o(e) {
        this.vars = e,
        this._delay = +e.delay || 0,
        (this._repeat = e.repeat === 1 / 0 ? -2 : e.repeat || 0) && (this._rDelay = e.repeatDelay || 0,
        this._yoyo = !!e.yoyo || !!e.yoyoEase),
        this._ts = 1,
        ie(this, +e.duration, 1, 1),
        this.data = e.data,
        pe || et.wake()
    }
    var t = o.prototype;
    return t.delay = function(i) {
        return i || i === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + i - this._delay),
        this._delay = i,
        this) : this._delay
    }
    ,
    t.duration = function(i) {
        return arguments.length ? this.totalDuration(this._repeat > 0 ? i + (i + this._rDelay) * this._repeat : i) : this.totalDuration() && this._dur
    }
    ,
    t.totalDuration = function(i) {
        return arguments.length ? (this._dirty = 0,
        ie(this, this._repeat < 0 ? i : (i - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
    }
    ,
    t.totalTime = function(i, n) {
        if (ne(),
        !arguments.length)
            return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
            for (Ci(this, i),
            !r._dp || r.parent || An(r, this); r && r.parent; )
                r.parent._time !== r._start + (r._ts >= 0 ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0),
                r = r.parent;
            !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && i < this._tDur || this._ts < 0 && i > 0 || !this._tDur && !i) && ft(this._dp, this, this._start - this._delay)
        }
        return (this._tTime !== i || !this._dur && !n || this._initted && Math.abs(this._zTime) === M || !i && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = i),
        kn(this, i, n)),
        this
    }
    ,
    t.time = function(i, n) {
        return arguments.length ? this.totalTime(Math.min(this.totalDuration(), i + Yi(this)) % (this._dur + this._rDelay) || (i ? this._dur : 0), n) : this._time
    }
    ,
    t.totalProgress = function(i, n) {
        return arguments.length ? this.totalTime(this.totalDuration() * i, n) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
    }
    ,
    t.progress = function(i, n) {
        return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - i : i) + Yi(this), n) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
    }
    ,
    t.iteration = function(i, n) {
        var r = this.duration() + this._rDelay;
        return arguments.length ? this.totalTime(this._time + (i - 1) * r, n) : this._repeat ? ee(this._tTime, r) + 1 : 1
    }
    ,
    t.timeScale = function(i) {
        if (!arguments.length)
            return this._rts === -M ? 0 : this._rts;
        if (this._rts === i)
            return this;
        var n = this.parent && this._ts ? Ne(this.parent._time, this) : this._tTime;
        return this._rts = +i || 0,
        this._ts = this._ps || i === -M ? 0 : this._rts,
        this.totalTime(be(-this._delay, this._tDur, n), !0),
        Xe(this),
        Ir(this)
    }
    ,
    t.paused = function(i) {
        return arguments.length ? (this._ps !== i && (this._ps = i,
        i ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()),
        this._ts = this._act = 0) : (ne(),
        this._ts = this._rts,
        this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== M && (this._tTime -= M)))),
        this) : this._ps
    }
    ,
    t.startTime = function(i) {
        if (arguments.length) {
            this._start = i;
            var n = this.parent || this._dp;
            return n && (n._sort || !this.parent) && ft(n, this, i - this._delay),
            this
        }
        return this._start
    }
    ,
    t.endTime = function(i) {
        return this._start + (Z(i) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
    }
    ,
    t.rawTime = function(i) {
        var n = this.parent || this._dp;
        return n ? i && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ne(n.rawTime(i), this) : this._tTime : this._tTime
    }
    ,
    t.globalTime = function(i) {
        for (var n = this, r = arguments.length ? i : n.rawTime(); n; )
            r = n._start + r / (n._ts || 1),
            n = n._dp;
        return r
    }
    ,
    t.repeat = function(i) {
        return arguments.length ? (this._repeat = i === 1 / 0 ? -2 : i,
        Xi(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
    }
    ,
    t.repeatDelay = function(i) {
        if (arguments.length) {
            var n = this._time;
            return this._rDelay = i,
            Xi(this),
            n ? this.time(n) : this
        }
        return this._rDelay
    }
    ,
    t.yoyo = function(i) {
        return arguments.length ? (this._yoyo = i,
        this) : this._yoyo
    }
    ,
    t.seek = function(i, n) {
        return this.totalTime(rt(this, i), Z(n))
    }
    ,
    t.restart = function(i, n) {
        return this.play().totalTime(i ? -this._delay : 0, Z(n))
    }
    ,
    t.play = function(i, n) {
        return i != null && this.seek(i, n),
        this.reversed(!1).paused(!1)
    }
    ,
    t.reverse = function(i, n) {
        return i != null && this.seek(i || this.totalDuration(), n),
        this.reversed(!0).paused(!1)
    }
    ,
    t.pause = function(i, n) {
        return i != null && this.seek(i, n),
        this.paused(!0)
    }
    ,
    t.resume = function() {
        return this.paused(!1)
    }
    ,
    t.reversed = function(i) {
        return arguments.length ? (!!i !== this.reversed() && this.timeScale(-this._rts || (i ? -M : 0)),
        this) : this._rts < 0
    }
    ,
    t.invalidate = function() {
        return this._initted = this._act = 0,
        this._zTime = -M,
        this
    }
    ,
    t.isActive = function() {
        var i = this.parent || this._dp, n = this._start, r;
        return !!(!i || this._ts && this._initted && i.isActive() && (r = i.rawTime(!0)) >= n && r < this.endTime(!0) - M)
    }
    ,
    t.eventCallback = function(i, n, r) {
        var s = this.vars;
        return arguments.length > 1 ? (n ? (s[i] = n,
        r && (s[i + "Params"] = r),
        i === "onUpdate" && (this._onUpdate = n)) : delete s[i],
        this) : s[i]
    }
    ,
    t.then = function(i) {
        var n = this;
        return new Promise(function(r) {
            var s = U(i) ? i : Cn
              , a = function() {
                var u = n.then;
                n.then = null,
                U(s) && (s = s(n)) && (s.then || s === n) && (n.then = u),
                r(s),
                n.then = u
            };
            n._initted && n.totalProgress() === 1 && n._ts >= 0 || !n._tTime && n._ts < 0 ? a() : n._prom = a
        }
        )
    }
    ,
    t.kill = function() {
        ue(this)
    }
    ,
    o
}();
lt(me.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -M,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var K = function(o) {
    pn(t, o);
    function t(i, n) {
        var r;
        return i === void 0 && (i = {}),
        r = o.call(this, i) || this,
        r.labels = {},
        r.smoothChildTiming = !!i.smoothChildTiming,
        r.autoRemoveChildren = !!i.autoRemoveChildren,
        r._sort = Z(i.sortChildren),
        R && ft(i.parent || R, pt(r), n),
        i.reversed && r.reverse(),
        i.paused && r.paused(!0),
        i.scrollTrigger && Ln(pt(r), i.scrollTrigger),
        r
    }
    var e = t.prototype;
    return e.to = function(n, r, s) {
        return ce(0, arguments, this),
        this
    }
    ,
    e.from = function(n, r, s) {
        return ce(1, arguments, this),
        this
    }
    ,
    e.fromTo = function(n, r, s, a) {
        return ce(2, arguments, this),
        this
    }
    ,
    e.set = function(n, r, s) {
        return r.duration = 0,
        r.parent = this,
        he(r).repeatDelay || (r.repeat = 0),
        r.immediateRender = !!r.immediateRender,
        new W(n,r,rt(this, s),1),
        this
    }
    ,
    e.call = function(n, r, s) {
        return ft(this, W.delayedCall(0, n, r), s)
    }
    ,
    e.staggerTo = function(n, r, s, a, l, u, h) {
        return s.duration = r,
        s.stagger = s.stagger || a,
        s.onComplete = u,
        s.onCompleteParams = h,
        s.parent = this,
        new W(n,s,rt(this, l)),
        this
    }
    ,
    e.staggerFrom = function(n, r, s, a, l, u, h) {
        return s.runBackwards = 1,
        he(s).immediateRender = Z(s.immediateRender),
        this.staggerTo(n, r, s, a, l, u, h)
    }
    ,
    e.staggerFromTo = function(n, r, s, a, l, u, h, c) {
        return a.startAt = s,
        he(a).immediateRender = Z(a.immediateRender),
        this.staggerTo(n, r, a, l, u, h, c)
    }
    ,
    e.render = function(n, r, s) {
        var a = this._time, l = this._dirty ? this.totalDuration() : this._tDur, u = this._dur, h = n <= 0 ? 0 : V(n), c = this._zTime < 0 != n < 0 && (this._initted || !u), f, p, m, d, g, w, b, x, T, y, v, P;
        if (this !== R && h > l && n >= 0 && (h = l),
        h !== this._tTime || s || c) {
            if (a !== this._time && u && (h += this._time - a,
            n += this._time - a),
            f = h,
            T = this._start,
            x = this._ts,
            w = !x,
            c && (u || (a = this._zTime),
            (n || !r) && (this._zTime = n)),
            this._repeat) {
                if (v = this._yoyo,
                g = u + this._rDelay,
                this._repeat < -1 && n < 0)
                    return this.totalTime(g * 100 + n, r, s);
                if (f = V(h % g),
                h === l ? (d = this._repeat,
                f = u) : (d = ~~(h / g),
                d && d === h / g && (f = u,
                d--),
                f > u && (f = u)),
                y = ee(this._tTime, g),
                !a && this._tTime && y !== d && (y = d),
                v && d & 1 && (f = u - f,
                P = 1),
                d !== y && !this._lock) {
                    var S = v && y & 1
                      , E = S === (v && d & 1);
                    if (d < y && (S = !S),
                    a = S ? 0 : u,
                    this._lock = 1,
                    this.render(a || (P ? 0 : V(d * g)), r, !u)._lock = 0,
                    this._tTime = h,
                    !r && this.parent && ut(this, "onRepeat"),
                    this.vars.repeatRefresh && !P && (this.invalidate()._lock = 1),
                    a && a !== this._time || w !== !this._ts || this.vars.onRepeat && !this.parent && !this._act)
                        return this;
                    if (u = this._dur,
                    l = this._tDur,
                    E && (this._lock = 2,
                    a = S ? u : -1e-4,
                    this.render(a, !0),
                    this.vars.repeatRefresh && !P && this.invalidate()),
                    this._lock = 0,
                    !this._ts && !w)
                        return this;
                    jn(this, P)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (b = Ur(this, V(a), V(f)),
            b && (h -= f - (f = b._start))),
            this._tTime = h,
            this._time = f,
            this._act = !x,
            this._initted || (this._onUpdate = this.vars.onUpdate,
            this._initted = 1,
            this._zTime = n,
            a = 0),
            !a && f && !r && (ut(this, "onStart"),
            this._tTime !== h))
                return this;
            if (f >= a && n >= 0)
                for (p = this._first; p; ) {
                    if (m = p._next,
                    (p._act || f >= p._start) && p._ts && b !== p) {
                        if (p.parent !== this)
                            return this.render(n, r, s);
                        if (p.render(p._ts > 0 ? (f - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (f - p._start) * p._ts, r, s),
                        f !== this._time || !this._ts && !w) {
                            b = 0,
                            m && (h += this._zTime = -M);
                            break
                        }
                    }
                    p = m
                }
            else {
                p = this._last;
                for (var O = n < 0 ? n : f; p; ) {
                    if (m = p._prev,
                    (p._act || O <= p._end) && p._ts && b !== p) {
                        if (p.parent !== this)
                            return this.render(n, r, s);
                        if (p.render(p._ts > 0 ? (O - p._start) * p._ts : (p._dirty ? p.totalDuration() : p._tDur) + (O - p._start) * p._ts, r, s),
                        f !== this._time || !this._ts && !w) {
                            b = 0,
                            m && (h += this._zTime = O ? -M : M);
                            break
                        }
                    }
                    p = m
                }
            }
            if (b && !r && (this.pause(),
            b.render(f >= a ? 0 : -M)._zTime = f >= a ? 1 : -1,
            this._ts))
                return this._start = T,
                Xe(this),
                this.render(n, r, s);
            this._onUpdate && !r && ut(this, "onUpdate", !0),
            (h === l && this._tTime >= this.totalDuration() || !h && a) && (T === this._start || Math.abs(x) !== Math.abs(this._ts)) && (this._lock || ((n || !u) && (h === l && this._ts > 0 || !h && this._ts < 0) && mt(this, 1),
            !r && !(n < 0 && !a) && (h || a || !l) && (ut(this, h === l && n >= 0 ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(h < l && this.timeScale() > 0) && this._prom())))
        }
        return this
    }
    ,
    e.add = function(n, r) {
        var s = this;
        if (yt(r) || (r = rt(this, r, n)),
        !(n instanceof me)) {
            if (q(n))
                return n.forEach(function(a) {
                    return s.add(a, r)
                }),
                this;
            if (Y(n))
                return this.addLabel(n, r);
            if (U(n))
                n = W.delayedCall(0, n);
            else
                return this
        }
        return this !== n ? ft(this, n, r) : this
    }
    ,
    e.getChildren = function(n, r, s, a) {
        n === void 0 && (n = !0),
        r === void 0 && (r = !0),
        s === void 0 && (s = !0),
        a === void 0 && (a = -ot);
        for (var l = [], u = this._first; u; )
            u._start >= a && (u instanceof W ? r && l.push(u) : (s && l.push(u),
            n && l.push.apply(l, u.getChildren(!0, r, s)))),
            u = u._next;
        return l
    }
    ,
    e.getById = function(n) {
        for (var r = this.getChildren(1, 1, 1), s = r.length; s--; )
            if (r[s].vars.id === n)
                return r[s]
    }
    ,
    e.remove = function(n) {
        return Y(n) ? this.removeLabel(n) : U(n) ? this.killTweensOf(n) : (Ye(this, n),
        n === this._recent && (this._recent = this._last),
        Vt(this))
    }
    ,
    e.totalTime = function(n, r) {
        return arguments.length ? (this._forcing = 1,
        !this._dp && this._ts && (this._start = V(et.time - (this._ts > 0 ? n / this._ts : (this.totalDuration() - n) / -this._ts))),
        o.prototype.totalTime.call(this, n, r),
        this._forcing = 0,
        this) : this._tTime
    }
    ,
    e.addLabel = function(n, r) {
        return this.labels[n] = rt(this, r),
        this
    }
    ,
    e.removeLabel = function(n) {
        return delete this.labels[n],
        this
    }
    ,
    e.addPause = function(n, r, s) {
        var a = W.delayedCall(0, r || de, s);
        return a.data = "isPause",
        this._hasPause = 1,
        ft(this, a, rt(this, n))
    }
    ,
    e.removePause = function(n) {
        var r = this._first;
        for (n = rt(this, n); r; )
            r._start === n && r.data === "isPause" && mt(r),
            r = r._next
    }
    ,
    e.killTweensOf = function(n, r, s) {
        for (var a = this.getTweensOf(n, s), l = a.length; l--; )
            xt !== a[l] && a[l].kill(n, r);
        return this
    }
    ,
    e.getTweensOf = function(n, r) {
        for (var s = [], a = at(n), l = this._first, u = yt(r), h; l; )
            l instanceof W ? Rr(l._targets, a) && (u ? (!xt || l._initted && l._ts) && l.globalTime(0) <= r && l.globalTime(l.totalDuration()) > r : !r || l.isActive()) && s.push(l) : (h = l.getTweensOf(a, r)).length && s.push.apply(s, h),
            l = l._next;
        return s
    }
    ,
    e.tweenTo = function(n, r) {
        r = r || {};
        var s = this, a = rt(s, n), l = r, u = l.startAt, h = l.onStart, c = l.onStartParams, f = l.immediateRender, p, m = W.to(s, lt({
            ease: r.ease || "none",
            lazy: !1,
            immediateRender: !1,
            time: a,
            overwrite: "auto",
            duration: r.duration || Math.abs((a - (u && "time"in u ? u.time : s._time)) / s.timeScale()) || M,
            onStart: function() {
                if (s.pause(),
                !p) {
                    var g = r.duration || Math.abs((a - (u && "time"in u ? u.time : s._time)) / s.timeScale());
                    m._dur !== g && ie(m, g, 0, 1).render(m._time, !0, !0),
                    p = 1
                }
                h && h.apply(m, c || [])
            }
        }, r));
        return f ? m.render(0) : m
    }
    ,
    e.tweenFromTo = function(n, r, s) {
        return this.tweenTo(r, lt({
            startAt: {
                time: rt(this, n)
            }
        }, s))
    }
    ,
    e.recent = function() {
        return this._recent
    }
    ,
    e.nextLabel = function(n) {
        return n === void 0 && (n = this._time),
        Vi(this, rt(this, n))
    }
    ,
    e.previousLabel = function(n) {
        return n === void 0 && (n = this._time),
        Vi(this, rt(this, n), 1)
    }
    ,
    e.currentLabel = function(n) {
        return arguments.length ? this.seek(n, !0) : this.previousLabel(this._time + M)
    }
    ,
    e.shiftChildren = function(n, r, s) {
        s === void 0 && (s = 0);
        for (var a = this._first, l = this.labels, u; a; )
            a._start >= s && (a._start += n,
            a._end += n),
            a = a._next;
        if (r)
            for (u in l)
                l[u] >= s && (l[u] += n);
        return Vt(this)
    }
    ,
    e.invalidate = function() {
        var n = this._first;
        for (this._lock = 0; n; )
            n.invalidate(),
            n = n._next;
        return o.prototype.invalidate.call(this)
    }
    ,
    e.clear = function(n) {
        n === void 0 && (n = !0);
        for (var r = this._first, s; r; )
            s = r._next,
            this.remove(r),
            r = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0),
        n && (this.labels = {}),
        Vt(this)
    }
    ,
    e.totalDuration = function(n) {
        var r = 0, s = this, a = s._last, l = ot, u, h, c;
        if (arguments.length)
            return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -n : n));
        if (s._dirty) {
            for (c = s.parent; a; )
                u = a._prev,
                a._dirty && a.totalDuration(),
                h = a._start,
                h > l && s._sort && a._ts && !s._lock ? (s._lock = 1,
                ft(s, a, h - a._delay, 1)._lock = 0) : l = h,
                h < 0 && a._ts && (r -= h,
                (!c && !s._dp || c && c.smoothChildTiming) && (s._start += h / s._ts,
                s._time -= h,
                s._tTime -= h),
                s.shiftChildren(-h, !1, -1 / 0),
                l = 0),
                a._end > r && a._ts && (r = a._end),
                a = u;
            ie(s, s === R && s._time > r ? s._time : r, 1, 1),
            s._dirty = 0
        }
        return s._tDur
    }
    ,
    t.updateRoot = function(n) {
        if (R._ts && (kn(R, Ne(n, R)),
        Pn = et.frame),
        et.frame >= Wi) {
            Wi += it.autoSleep || 120;
            var r = R._first;
            if ((!r || !r._ts) && it.autoSleep && et._listeners.length < 2) {
                for (; r && !r._ts; )
                    r = r._next;
                r || et.sleep()
            }
        }
    }
    ,
    t
}(me);
lt(K.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var ss = function(t, e, i, n, r, s, a) {
    var l = new J(this._pt,t,e,0,1,Jn,null,r), u = 0, h = 0, c, f, p, m, d, g, w, b;
    for (l.b = i,
    l.e = n,
    i += "",
    n += "",
    (w = ~n.indexOf("random(")) && (n = _e(n)),
    s && (b = [i, n],
    s(b, t, e),
    i = b[0],
    n = b[1]),
    f = i.match(je) || []; c = je.exec(n); )
        m = c[0],
        d = n.substring(u, c.index),
        p ? p = (p + 1) % 5 : d.substr(-5) === "rgba(" && (p = 1),
        m !== f[h++] && (g = parseFloat(f[h - 1]) || 0,
        l._pt = {
            _next: l._pt,
            p: d || h === 1 ? d : ",",
            s: g,
            c: m.charAt(1) === "=" ? Zt(g, m) - g : parseFloat(m) - g,
            m: p && p < 4 ? Math.round : 0
        },
        u = je.lastIndex);
    return l.c = u < n.length ? n.substring(u, n.length) : "",
    l.fp = a,
    (vn.test(n) || w) && (l.e = 0),
    this._pt = l,
    l
}, Mi = function(t, e, i, n, r, s, a, l, u) {
    U(n) && (n = n(r || 0, t, s));
    var h = t[e], c = i !== "get" ? i : U(h) ? u ? t[e.indexOf("set") || !U(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](u) : t[e]() : h, f = U(h) ? u ? hs : Zn : Li, p;
    if (Y(n) && (~n.indexOf("random(") && (n = _e(n)),
    n.charAt(1) === "=" && (p = Zt(c, n) + (j(c) || 0),
    (p || p === 0) && (n = p))),
    c !== n || hi)
        return !isNaN(c * n) && n !== "" ? (p = new J(this._pt,t,e,+c || 0,n - (c || 0),typeof h == "boolean" ? fs : Qn,0,f),
        u && (p.fp = u),
        a && p.modifier(a, this, t),
        this._pt = p) : (!h && !(e in t) && Pi(e, n),
        ss.call(this, t, e, c, n, f, l || it.stringFilter, u))
}, os = function(t, e, i, n, r) {
    if (U(t) && (t = fe(t, r, e, i, n)),
    !vt(t) || t.style && t.nodeType || q(t) || wn(t))
        return Y(t) ? fe(t, r, e, i, n) : t;
    var s = {}, a;
    for (a in t)
        s[a] = fe(t[a], r, e, i, n);
    return s
}, Gn = function(t, e, i, n, r, s) {
    var a, l, u, h;
    if (tt[t] && (a = new tt[t]).init(r, a.rawVars ? e[t] : os(e[t], n, r, s, i), i, n, s) !== !1 && (i._pt = l = new J(i._pt,r,t,0,1,a.render,a,0,a.priority),
    i !== Kt))
        for (u = i._ptLookup[i._targets.indexOf(r)],
        h = a._props.length; h--; )
            u[a._props[h]] = l;
    return a
}, xt, hi, Ai = function o(t, e) {
    var i = t.vars, n = i.ease, r = i.startAt, s = i.immediateRender, a = i.lazy, l = i.onUpdate, u = i.onUpdateParams, h = i.callbackScope, c = i.runBackwards, f = i.yoyoEase, p = i.keyframes, m = i.autoRevert, d = t._dur, g = t._startAt, w = t._targets, b = t.parent, x = b && b.data === "nested" ? b.parent._targets : w, T = t._overwrite === "auto" && !bi, y = t.timeline, v, P, S, E, O, A, B, I, L, N, F, G, Lt;
    if (y && (!p || !n) && (n = "none"),
    t._ease = jt(n, te.ease),
    t._yEase = f ? Vn(jt(f === !0 ? n : f, te.ease)) : 0,
    f && t._yoyo && !t._repeat && (f = t._yEase,
    t._yEase = t._ease,
    t._ease = f),
    t._from = !y && !!i.runBackwards,
    !y || p && !i.stagger) {
        if (I = w[0] ? Xt(w[0]).harness : 0,
        G = I && i[I.prop],
        v = Ie(i, Si),
        g && (mt(g.render(-1, !0)),
        g._lazy = 0),
        r)
            if (mt(t._startAt = W.set(w, lt({
                data: "isStart",
                overwrite: !1,
                parent: b,
                immediateRender: !0,
                lazy: Z(a),
                startAt: null,
                delay: 0,
                onUpdate: l,
                onUpdateParams: u,
                callbackScope: h,
                stagger: 0
            }, r))),
            e < 0 && !s && !m && t._startAt.render(-1, !0),
            s) {
                if (e > 0 && !m && (t._startAt = 0),
                d && e <= 0) {
                    e && (t._zTime = e);
                    return
                }
            } else
                m === !1 && (t._startAt = 0);
        else if (c && d) {
            if (g)
                !m && (t._startAt = 0);
            else if (e && (s = !1),
            S = lt({
                overwrite: !1,
                data: "isFromStart",
                lazy: s && Z(a),
                immediateRender: s,
                stagger: 0,
                parent: b
            }, v),
            G && (S[I.prop] = G),
            mt(t._startAt = W.set(w, S)),
            e < 0 && t._startAt.render(-1, !0),
            t._zTime = e,
            !s)
                o(t._startAt, M);
            else if (!e)
                return
        }
        for (t._pt = t._ptCache = 0,
        a = d && Z(a) || a && !d,
        P = 0; P < w.length; P++) {
            if (O = w[P],
            B = O._gsap || Oi(w)[P]._gsap,
            t._ptLookup[P] = N = {},
            oi[B.id] && Pt.length && ze(),
            F = x === w ? P : x.indexOf(O),
            I && (L = new I).init(O, G || v, t, F, x) !== !1 && (t._pt = E = new J(t._pt,O,L.name,0,1,L.render,L,0,L.priority),
            L._props.forEach(function(Dt) {
                N[Dt] = E
            }),
            L.priority && (A = 1)),
            !I || G)
                for (S in v)
                    tt[S] && (L = Gn(S, v, t, F, O, x)) ? L.priority && (A = 1) : N[S] = E = Mi.call(t, O, S, "get", v[S], F, x, 0, i.stringFilter);
            t._op && t._op[P] && t.kill(O, t._op[P]),
            T && t._pt && (xt = t,
            R.killTweensOf(O, N, t.globalTime(e)),
            Lt = !t.parent,
            xt = 0),
            t._pt && a && (oi[B.id] = 1)
        }
        A && tr(t),
        t._onInit && t._onInit(t)
    }
    t._onUpdate = l,
    t._initted = (!t._op || t._pt) && !Lt,
    p && e <= 0 && y.render(ot, !0, !0)
}, as = function(t, e, i, n, r, s, a) {
    var l = (t._pt && t._ptCache || (t._ptCache = {}))[e], u, h, c;
    if (!l)
        for (l = t._ptCache[e] = [],
        h = t._ptLookup,
        c = t._targets.length; c--; ) {
            if (u = h[c][e],
            u && u.d && u.d._pt)
                for (u = u.d._pt; u && u.p !== e; )
                    u = u._next;
            if (!u)
                return hi = 1,
                t.vars[e] = "+=0",
                Ai(t, a),
                hi = 0,
                1;
            l.push(u)
        }
    for (c = l.length; c--; )
        u = l[c],
        u.s = (n || n === 0) && !r ? n : u.s + (n || 0) + s * u.c,
        u.c = i - u.s,
        u.e && (u.e = z(i) + j(u.e)),
        u.b && (u.b = u.s + j(u.b))
}, us = function(t, e) {
    var i = t[0] ? Xt(t[0]).harness : 0, n = i && i.aliases, r, s, a, l;
    if (!n)
        return e;
    r = qt({}, e);
    for (s in n)
        if (s in r)
            for (l = n[s].split(","),
            a = l.length; a--; )
                r[l[a]] = r[s];
    return r
}, ls = function(t, e, i, n) {
    var r = e.ease || n || "power1.inOut", s, a;
    if (q(e))
        a = i[t] || (i[t] = []),
        e.forEach(function(l, u) {
            return a.push({
                t: u / (e.length - 1) * 100,
                v: l,
                e: r
            })
        });
    else
        for (s in e)
            a = i[s] || (i[s] = []),
            s === "ease" || a.push({
                t: parseFloat(t),
                v: e[s],
                e: r
            })
}, fe = function(t, e, i, n, r) {
    return U(t) ? t.call(e, i, n, r) : Y(t) && ~t.indexOf("random(") ? _e(t) : t
}, Hn = ki + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert", Kn = {};
Q(Hn + ",id,stagger,delay,duration,paused,scrollTrigger", function(o) {
    return Kn[o] = 1
});
var W = function(o) {
    pn(t, o);
    function t(i, n, r, s) {
        var a;
        typeof n == "number" && (r.duration = n,
        n = r,
        r = null),
        a = o.call(this, s ? n : he(n)) || this;
        var l = a.vars, u = l.duration, h = l.delay, c = l.immediateRender, f = l.stagger, p = l.overwrite, m = l.keyframes, d = l.defaults, g = l.scrollTrigger, w = l.yoyoEase, b = n.parent || R, x = (q(i) || wn(i) ? yt(i[0]) : "length"in n) ? [i] : at(i), T, y, v, P, S, E, O, A;
        if (a._targets = x.length ? Oi(x) : Fe("GSAP target " + i + " not found. https://greensock.com", !it.nullTargetWarn) || [],
        a._ptLookup = [],
        a._overwrite = p,
        m || f || Se(u) || Se(h)) {
            if (n = a.vars,
            T = a.timeline = new K({
                data: "nested",
                defaults: d || {}
            }),
            T.kill(),
            T.parent = T._dp = pt(a),
            T._start = 0,
            f || Se(u) || Se(h)) {
                if (P = x.length,
                O = f && zn(f),
                vt(f))
                    for (S in f)
                        ~Hn.indexOf(S) && (A || (A = {}),
                        A[S] = f[S]);
                for (y = 0; y < P; y++)
                    v = Ie(n, Kn),
                    v.stagger = 0,
                    w && (v.yoyoEase = w),
                    A && qt(v, A),
                    E = x[y],
                    v.duration = +fe(u, pt(a), y, E, x),
                    v.delay = (+fe(h, pt(a), y, E, x) || 0) - a._delay,
                    !f && P === 1 && v.delay && (a._delay = h = v.delay,
                    a._start += h,
                    v.delay = 0),
                    T.to(E, v, O ? O(y, E, x) : 0),
                    T._ease = k.none;
                T.duration() ? u = h = 0 : a.timeline = 0
            } else if (m) {
                he(lt(T.vars.defaults, {
                    ease: "none"
                })),
                T._ease = jt(m.ease || n.ease || "none");
                var B = 0, I, L, N;
                if (q(m))
                    m.forEach(function(F) {
                        return T.to(x, F, ">")
                    });
                else {
                    v = {};
                    for (S in m)
                        S === "ease" || S === "easeEach" || ls(S, m[S], v, m.easeEach);
                    for (S in v)
                        for (I = v[S].sort(function(F, G) {
                            return F.t - G.t
                        }),
                        B = 0,
                        y = 0; y < I.length; y++)
                            L = I[y],
                            N = {
                                ease: L.e,
                                duration: (L.t - (y ? I[y - 1].t : 0)) / 100 * u
                            },
                            N[S] = L.v,
                            T.to(x, N, B),
                            B += N.duration;
                    T.duration() < u && T.to({}, {
                        duration: u - T.duration()
                    })
                }
            }
            u || a.duration(u = T.duration())
        } else
            a.timeline = 0;
        return p === !0 && !bi && (xt = pt(a),
        R.killTweensOf(x),
        xt = 0),
        ft(b, pt(a), r),
        n.reversed && a.reverse(),
        n.paused && a.paused(!0),
        (c || !u && !m && a._start === V(b._time) && Z(c) && Nr(pt(a)) && b.data !== "nested") && (a._tTime = -M,
        a.render(Math.max(0, -h))),
        g && Ln(pt(a), g),
        a
    }
    var e = t.prototype;
    return e.render = function(n, r, s) {
        var a = this._time, l = this._tDur, u = this._dur, h = n > l - M && n >= 0 ? l : n < M ? 0 : n, c, f, p, m, d, g, w, b, x;
        if (!u)
            Wr(this, n, r, s);
        else if (h !== this._tTime || !n || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 != n < 0) {
            if (c = h,
            b = this.timeline,
            this._repeat) {
                if (m = u + this._rDelay,
                this._repeat < -1 && n < 0)
                    return this.totalTime(m * 100 + n, r, s);
                if (c = V(h % m),
                h === l ? (p = this._repeat,
                c = u) : (p = ~~(h / m),
                p && p === h / m && (c = u,
                p--),
                c > u && (c = u)),
                g = this._yoyo && p & 1,
                g && (x = this._yEase,
                c = u - c),
                d = ee(this._tTime, m),
                c === a && !s && this._initted)
                    return this._tTime = h,
                    this;
                p !== d && (b && this._yEase && jn(b, g),
                this.vars.repeatRefresh && !g && !this._lock && (this._lock = s = 1,
                this.render(V(m * p), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (Dn(this, n < 0 ? n : c, s, r))
                    return this._tTime = 0,
                    this;
                if (a !== this._time)
                    return this;
                if (u !== this._dur)
                    return this.render(n, r, s)
            }
            if (this._tTime = h,
            this._time = c,
            !this._act && this._ts && (this._act = 1,
            this._lazy = 0),
            this.ratio = w = (x || this._ease)(c / u),
            this._from && (this.ratio = w = 1 - w),
            c && !a && !r && (ut(this, "onStart"),
            this._tTime !== h))
                return this;
            for (f = this._pt; f; )
                f.r(w, f.d),
                f = f._next;
            b && b.render(n < 0 ? n : !c && g ? -M : b._dur * b._ease(c / this._dur), r, s) || this._startAt && (this._zTime = n),
            this._onUpdate && !r && (n < 0 && this._startAt && this._startAt.render(n, !0, s),
            ut(this, "onUpdate")),
            this._repeat && p !== d && this.vars.onRepeat && !r && this.parent && ut(this, "onRepeat"),
            (h === this._tDur || !h) && this._tTime === h && (n < 0 && this._startAt && !this._onUpdate && this._startAt.render(n, !0, !0),
            (n || !u) && (h === this._tDur && this._ts > 0 || !h && this._ts < 0) && mt(this, 1),
            !r && !(n < 0 && !a) && (h || a) && (ut(this, h === l ? "onComplete" : "onReverseComplete", !0),
            this._prom && !(h < l && this.timeScale() > 0) && this._prom()))
        }
        return this
    }
    ,
    e.targets = function() {
        return this._targets
    }
    ,
    e.invalidate = function() {
        return this._pt = this._op = this._startAt = this._onUpdate = this._lazy = this.ratio = 0,
        this._ptLookup = [],
        this.timeline && this.timeline.invalidate(),
        o.prototype.invalidate.call(this)
    }
    ,
    e.resetTo = function(n, r, s, a) {
        pe || et.wake(),
        this._ts || this.play();
        var l = Math.min(this._dur, (this._dp._time - this._start) * this._ts), u;
        return this._initted || Ai(this, l),
        u = this._ease(l / this._dur),
        as(this, n, r, s, a, u, l) ? this.resetTo(n, r, s, a) : (Ci(this, 0),
        this.parent || Mn(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0),
        this.render(0))
    }
    ,
    e.kill = function(n, r) {
        if (r === void 0 && (r = "all"),
        !n && (!r || r === "all"))
            return this._lazy = this._pt = 0,
            this.parent ? ue(this) : this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(n, r, xt && xt.vars.overwrite !== !0)._first || ue(this),
            this.parent && s !== this.timeline.totalDuration() && ie(this, this._dur * this.timeline._tDur / s, 0, 1),
            this
        }
        var a = this._targets, l = n ? at(n) : a, u = this._ptLookup, h = this._pt, c, f, p, m, d, g, w;
        if ((!r || r === "all") && zr(a, l))
            return r === "all" && (this._pt = 0),
            ue(this);
        for (c = this._op = this._op || [],
        r !== "all" && (Y(r) && (d = {},
        Q(r, function(b) {
            return d[b] = 1
        }),
        r = d),
        r = us(a, r)),
        w = a.length; w--; )
            if (~l.indexOf(a[w])) {
                f = u[w],
                r === "all" ? (c[w] = r,
                m = f,
                p = {}) : (p = c[w] = c[w] || {},
                m = r);
                for (d in m)
                    g = f && f[d],
                    g && ((!("kill"in g.d) || g.d.kill(d) === !0) && Ye(this, g, "_pt"),
                    delete f[d]),
                    p !== "all" && (p[d] = 1)
            }
        return this._initted && !this._pt && h && ue(this),
        this
    }
    ,
    t.to = function(n, r) {
        return new t(n,r,arguments[2])
    }
    ,
    t.from = function(n, r) {
        return ce(1, arguments)
    }
    ,
    t.delayedCall = function(n, r, s, a) {
        return new t(r,0,{
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: n,
            onComplete: r,
            onReverseComplete: r,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: a
        })
    }
    ,
    t.fromTo = function(n, r, s) {
        return ce(2, arguments)
    }
    ,
    t.set = function(n, r) {
        return r.duration = 0,
        r.repeatDelay || (r.repeat = 0),
        new t(n,r)
    }
    ,
    t.killTweensOf = function(n, r, s) {
        return R.killTweensOf(n, r, s)
    }
    ,
    t
}(me);
lt(W.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Q("staggerTo,staggerFrom,staggerFromTo", function(o) {
    W[o] = function() {
        var t = new K
          , e = ui.call(arguments, 0);
        return e.splice(o === "staggerFromTo" ? 5 : 4, 0, 0),
        t[o].apply(t, e)
    }
});
var Li = function(t, e, i) {
    return t[e] = i
}
  , Zn = function(t, e, i) {
    return t[e](i)
}
  , hs = function(t, e, i, n) {
    return t[e](n.fp, i)
}
  , cs = function(t, e, i) {
    return t.setAttribute(e, i)
}
  , Di = function(t, e) {
    return U(t[e]) ? Zn : Ti(t[e]) && t.setAttribute ? cs : Li
}
  , Qn = function(t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e6) / 1e6, e)
}
  , fs = function(t, e) {
    return e.set(e.t, e.p, !!(e.s + e.c * t), e)
}
  , Jn = function(t, e) {
    var i = e._pt
      , n = "";
    if (!t && e.b)
        n = e.b;
    else if (t === 1 && e.e)
        n = e.e;
    else {
        for (; i; )
            n = i.p + (i.m ? i.m(i.s + i.c * t) : Math.round((i.s + i.c * t) * 1e4) / 1e4) + n,
            i = i._next;
        n += e.c
    }
    e.set(e.t, e.p, n, e)
}
  , Ri = function(t, e) {
    for (var i = e._pt; i; )
        i.r(t, i.d),
        i = i._next
}
  , ds = function(t, e, i, n) {
    for (var r = this._pt, s; r; )
        s = r._next,
        r.p === n && r.modifier(t, e, i),
        r = s
}
  , _s = function(t) {
    for (var e = this._pt, i, n; e; )
        n = e._next,
        e.p === t && !e.op || e.op === t ? Ye(this, e, "_pt") : e.dep || (i = 1),
        e = n;
    return !i
}
  , ps = function(t, e, i, n) {
    n.mSet(t, e, n.m.call(n.tween, i, n.mt), n)
}
  , tr = function(t) {
    for (var e = t._pt, i, n, r, s; e; ) {
        for (i = e._next,
        n = r; n && n.pr > e.pr; )
            n = n._next;
        (e._prev = n ? n._prev : s) ? e._prev._next = e : r = e,
        (e._next = n) ? n._prev = e : s = e,
        e = i
    }
    t._pt = r
}
  , J = function() {
    function o(e, i, n, r, s, a, l, u, h) {
        this.t = i,
        this.s = r,
        this.c = s,
        this.p = n,
        this.r = a || Qn,
        this.d = l || this,
        this.set = u || Li,
        this.pr = h || 0,
        this._next = e,
        e && (e._prev = this)
    }
    var t = o.prototype;
    return t.modifier = function(i, n, r) {
        this.mSet = this.mSet || this.set,
        this.set = ps,
        this.m = i,
        this.mt = r,
        this.tween = n
    }
    ,
    o
}();
Q(ki + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(o) {
    return Si[o] = 1
});
nt.TweenMax = nt.TweenLite = W;
nt.TimelineLite = nt.TimelineMax = K;
R = new K({
    sortChildren: !1,
    defaults: te,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
it.stringFilter = Xn;
var Be = {
    registerPlugin: function() {
        for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
        e.forEach(function(n) {
            return Qr(n)
        })
    },
    timeline: function(t) {
        return new K(t)
    },
    getTweensOf: function(t, e) {
        return R.getTweensOf(t, e)
    },
    getProperty: function(t, e, i, n) {
        Y(t) && (t = at(t)[0]);
        var r = Xt(t || {}).get
          , s = i ? Cn : On;
        return i === "native" && (i = ""),
        t && (e ? s((tt[e] && tt[e].get || r)(t, e, i, n)) : function(a, l, u) {
            return s((tt[a] && tt[a].get || r)(t, a, l, u))
        }
        )
    },
    quickSetter: function(t, e, i) {
        if (t = at(t),
        t.length > 1) {
            var n = t.map(function(h) {
                return ht.quickSetter(h, e, i)
            })
              , r = n.length;
            return function(h) {
                for (var c = r; c--; )
                    n[c](h)
            }
        }
        t = t[0] || {};
        var s = tt[e]
          , a = Xt(t)
          , l = a.harness && (a.harness.aliases || {})[e] || e
          , u = s ? function(h) {
            var c = new s;
            Kt._pt = 0,
            c.init(t, i ? h + i : h, Kt, 0, [t]),
            c.render(1, c),
            Kt._pt && Ri(1, Kt)
        }
        : a.set(t, l);
        return s ? u : function(h) {
            return u(t, l, i ? h + i : h, a, 1)
        }
    },
    quickTo: function(t, e, i) {
        var n, r = ht.to(t, qt((n = {},
        n[e] = "+=0.1",
        n.paused = !0,
        n), i || {})), s = function(l, u, h) {
            return r.resetTo(e, l, u, h)
        };
        return s.tween = r,
        s
    },
    isTweening: function(t) {
        return R.getTweensOf(t, !0).length > 0
    },
    defaults: function(t) {
        return t && t.ease && (t.ease = jt(t.ease, te.ease)),
        Ui(te, t || {})
    },
    config: function(t) {
        return Ui(it, t || {})
    },
    registerEffect: function(t) {
        var e = t.name
          , i = t.effect
          , n = t.plugins
          , r = t.defaults
          , s = t.extendTimeline;
        (n || "").split(",").forEach(function(a) {
            return a && !tt[a] && !nt[a] && Fe(e + " effect requires " + a + " plugin.")
        }),
        qe[e] = function(a, l, u) {
            return i(at(a), lt(l || {}, r), u)
        }
        ,
        s && (K.prototype[e] = function(a, l, u) {
            return this.add(qe[e](a, vt(l) ? l : (u = l) && {}, this), u)
        }
        )
    },
    registerEase: function(t, e) {
        k[t] = jt(e)
    },
    parseEase: function(t, e) {
        return arguments.length ? jt(t, e) : k
    },
    getById: function(t) {
        return R.getById(t)
    },
    exportRoot: function(t, e) {
        t === void 0 && (t = {});
        var i = new K(t), n, r;
        for (i.smoothChildTiming = Z(t.smoothChildTiming),
        R.remove(i),
        i._dp = 0,
        i._time = i._tTime = R._time,
        n = R._first; n; )
            r = n._next,
            (e || !(!n._dur && n instanceof W && n.vars.onComplete === n._targets[0])) && ft(i, n, n._start - n._delay),
            n = r;
        return ft(R, i, 0),
        i
    },
    utils: {
        wrap: Hr,
        wrapYoyo: Kr,
        distribute: zn,
        random: Nn,
        snap: In,
        normalize: Gr,
        getUnit: j,
        clamp: Xr,
        splitColor: Un,
        toArray: at,
        selector: jr,
        mapRange: Wn,
        pipe: qr,
        unitize: $r,
        interpolate: Zr,
        shuffle: Fn
    },
    install: Tn,
    effects: qe,
    ticker: et,
    updateRoot: K.updateRoot,
    plugins: tt,
    globalTimeline: R,
    core: {
        PropTween: J,
        globals: En,
        Tween: W,
        Timeline: K,
        Animation: me,
        getCache: Xt,
        _removeLinkedListItem: Ye,
        suppressOverwrites: function(t) {
            return bi = t
        }
    }
};
Q("to,from,fromTo,delayedCall,set,killTweensOf", function(o) {
    return Be[o] = W[o]
});
et.add(K.updateRoot);
Kt = Be.to({}, {
    duration: 0
});
var ms = function(t, e) {
    for (var i = t._pt; i && i.p !== e && i.op !== e && i.fp !== e; )
        i = i._next;
    return i
}
  , gs = function(t, e) {
    var i = t._targets, n, r, s;
    for (n in e)
        for (r = i.length; r--; )
            s = t._ptLookup[r][n],
            s && (s = s.d) && (s._pt && (s = ms(s, n)),
            s && s.modifier && s.modifier(e[n], t, i[r], n))
}
  , Ke = function(t, e) {
    return {
        name: t,
        rawVars: 1,
        init: function(n, r, s) {
            s._onInit = function(a) {
                var l, u;
                if (Y(r) && (l = {},
                Q(r, function(h) {
                    return l[h] = 1
                }),
                r = l),
                e) {
                    l = {};
                    for (u in r)
                        l[u] = e(r[u]);
                    r = l
                }
                gs(a, r)
            }
        }
    }
}
  , ht = Be.registerPlugin({
    name: "attr",
    init: function(t, e, i, n, r) {
        var s, a;
        for (s in e)
            a = this.add(t, "setAttribute", (t.getAttribute(s) || 0) + "", e[s], n, r, 0, 0, s),
            a && (a.op = s),
            this._props.push(s)
    }
}, {
    name: "endArray",
    init: function(t, e) {
        for (var i = e.length; i--; )
            this.add(t, i, t[i] || 0, e[i])
    }
}, Ke("roundProps", li), Ke("modifiers"), Ke("snap", In)) || Be;
W.version = K.version = ht.version = "3.10.4";
bn = 1;
gn() && ne();
k.Power0;
k.Power1;
k.Power2;
k.Power3;
k.Power4;
k.Linear;
k.Quad;
k.Cubic;
k.Quart;
k.Quint;
k.Strong;
k.Elastic;
k.Back;
k.SteppedEase;
k.Bounce;
k.Sine;
k.Expo;
k.Circ;
/*!
 * CSSPlugin 3.10.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var qi, bt, Qt, Fi, Yt, $i, ws = function() {
    return typeof window < "u"
}, Ot = {}, Bt = 180 / Math.PI, Jt = Math.PI / 180, Gt = Math.atan2, Gi = 1e8, er = /([A-Z])/g, ys = /(left|right|width|margin|padding|x)/i, vs = /[\s,\(]\S/, Tt = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity"
}, ir = function(t, e) {
    return e.set(e.t, e.p, Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
}, xs = function(t, e) {
    return e.set(e.t, e.p, t === 1 ? e.e : Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u, e)
}, bs = function(t, e) {
    return e.set(e.t, e.p, t ? Math.round((e.s + e.c * t) * 1e4) / 1e4 + e.u : e.b, e)
}, Ts = function(t, e) {
    var i = e.s + e.c * t;
    e.set(e.t, e.p, ~~(i + (i < 0 ? -.5 : .5)) + e.u, e)
}, nr = function(t, e) {
    return e.set(e.t, e.p, t ? e.e : e.b, e)
}, rr = function(t, e) {
    return e.set(e.t, e.p, t !== 1 ? e.b : e.e, e)
}, Es = function(t, e, i) {
    return t.style[e] = i
}, Ps = function(t, e, i) {
    return t.style.setProperty(e, i)
}, Ss = function(t, e, i) {
    return t._gsap[e] = i
}, ks = function(t, e, i) {
    return t._gsap.scaleX = t._gsap.scaleY = i
}, Os = function(t, e, i, n, r) {
    var s = t._gsap;
    s.scaleX = s.scaleY = i,
    s.renderTransform(r, s)
}, Cs = function(t, e, i, n, r) {
    var s = t._gsap;
    s[e] = i,
    s.renderTransform(r, s)
}, X = "transform", Ct = X + "Origin", sr, ci = function(t, e) {
    var i = bt.createElementNS ? bt.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : bt.createElement(t);
    return i.style ? i : bt.createElement(t)
}, gt = function o(t, e, i) {
    var n = getComputedStyle(t);
    return n[e] || n.getPropertyValue(e.replace(er, "-$1").toLowerCase()) || n.getPropertyValue(e) || !i && o(t, re(e) || e, 1) || ""
}, Hi = "O,Moz,ms,Ms,Webkit".split(","), re = function(t, e, i) {
    var n = e || Yt
      , r = n.style
      , s = 5;
    if (t in r && !i)
        return t;
    for (t = t.charAt(0).toUpperCase() + t.substr(1); s-- && !(Hi[s] + t in r); )
        ;
    return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Hi[s] : "") + t
}, fi = function() {
    ws() && window.document && (qi = window,
    bt = qi.document,
    Qt = bt.documentElement,
    Yt = ci("div") || {
        style: {}
    },
    ci("div"),
    X = re(X),
    Ct = X + "Origin",
    Yt.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0",
    sr = !!re("perspective"),
    Fi = 1)
}, Ze = function o(t) {
    var e = ci("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), i = this.parentNode, n = this.nextSibling, r = this.style.cssText, s;
    if (Qt.appendChild(e),
    e.appendChild(this),
    this.style.display = "block",
    t)
        try {
            s = this.getBBox(),
            this._gsapBBox = this.getBBox,
            this.getBBox = o
        } catch {}
    else
        this._gsapBBox && (s = this._gsapBBox());
    return i && (n ? i.insertBefore(this, n) : i.appendChild(this)),
    Qt.removeChild(e),
    this.style.cssText = r,
    s
}, Ki = function(t, e) {
    for (var i = e.length; i--; )
        if (t.hasAttribute(e[i]))
            return t.getAttribute(e[i])
}, or = function(t) {
    var e;
    try {
        e = t.getBBox()
    } catch {
        e = Ze.call(t, !0)
    }
    return e && (e.width || e.height) || t.getBBox === Ze || (e = Ze.call(t, !0)),
    e && !e.width && !e.x && !e.y ? {
        x: +Ki(t, ["x", "cx", "x1"]) || 0,
        y: +Ki(t, ["y", "cy", "y1"]) || 0,
        width: 0,
        height: 0
    } : e
}, ar = function(t) {
    return !!(t.getCTM && (!t.parentNode || t.ownerSVGElement) && or(t))
}, ge = function(t, e) {
    if (e) {
        var i = t.style;
        e in Ot && e !== Ct && (e = X),
        i.removeProperty ? ((e.substr(0, 2) === "ms" || e.substr(0, 6) === "webkit") && (e = "-" + e),
        i.removeProperty(e.replace(er, "-$1").toLowerCase())) : i.removeAttribute(e)
    }
}, Et = function(t, e, i, n, r, s) {
    var a = new J(t._pt,e,i,0,1,s ? rr : nr);
    return t._pt = a,
    a.b = n,
    a.e = r,
    t._props.push(i),
    a
}, Zi = {
    deg: 1,
    rad: 1,
    turn: 1
}, Mt = function o(t, e, i, n) {
    var r = parseFloat(i) || 0, s = (i + "").trim().substr((r + "").length) || "px", a = Yt.style, l = ys.test(e), u = t.tagName.toLowerCase() === "svg", h = (u ? "client" : "offset") + (l ? "Width" : "Height"), c = 100, f = n === "px", p = n === "%", m, d, g, w;
    return n === s || !r || Zi[n] || Zi[s] ? r : (s !== "px" && !f && (r = o(t, e, i, "px")),
    w = t.getCTM && ar(t),
    (p || s === "%") && (Ot[e] || ~e.indexOf("adius")) ? (m = w ? t.getBBox()[l ? "width" : "height"] : t[h],
    z(p ? r / m * c : r / 100 * m)) : (a[l ? "width" : "height"] = c + (f ? s : n),
    d = ~e.indexOf("adius") || n === "em" && t.appendChild && !u ? t : t.parentNode,
    w && (d = (t.ownerSVGElement || {}).parentNode),
    (!d || d === bt || !d.appendChild) && (d = bt.body),
    g = d._gsap,
    g && p && g.width && l && g.time === et.time ? z(r / g.width * c) : ((p || s === "%") && (a.position = gt(t, "position")),
    d === t && (a.position = "static"),
    d.appendChild(Yt),
    m = Yt[h],
    d.removeChild(Yt),
    a.position = "absolute",
    l && p && (g = Xt(d),
    g.time = et.time,
    g.width = d[h]),
    z(f ? m * r / c : m && r ? c / m * r : 0))))
}, Wt = function(t, e, i, n) {
    var r;
    return Fi || fi(),
    e in Tt && e !== "transform" && (e = Tt[e],
    ~e.indexOf(",") && (e = e.split(",")[0])),
    Ot[e] && e !== "transform" ? (r = ye(t, n),
    r = e !== "transformOrigin" ? r[e] : r.svg ? r.origin : Ue(gt(t, Ct)) + " " + r.zOrigin + "px") : (r = t.style[e],
    (!r || r === "auto" || n || ~(r + "").indexOf("calc(")) && (r = We[e] && We[e](t, e, i) || gt(t, e) || Sn(t, e) || (e === "opacity" ? 1 : 0))),
    i && !~(r + "").trim().indexOf(" ") ? Mt(t, e, r, i) + i : r
}, Ms = function(t, e, i, n) {
    if (!i || i === "none") {
        var r = re(e, t, 1)
          , s = r && gt(t, r, 1);
        s && s !== i ? (e = r,
        i = s) : e === "borderColor" && (i = gt(t, "borderTopColor"))
    }
    var a = new J(this._pt,t.style,e,0,1,Jn), l = 0, u = 0, h, c, f, p, m, d, g, w, b, x, T, y;
    if (a.b = i,
    a.e = n,
    i += "",
    n += "",
    n === "auto" && (t.style[e] = n,
    n = gt(t, e) || n,
    t.style[e] = i),
    h = [i, n],
    Xn(h),
    i = h[0],
    n = h[1],
    f = i.match(Ht) || [],
    y = n.match(Ht) || [],
    y.length) {
        for (; c = Ht.exec(n); )
            g = c[0],
            b = n.substring(l, c.index),
            m ? m = (m + 1) % 5 : (b.substr(-5) === "rgba(" || b.substr(-5) === "hsla(") && (m = 1),
            g !== (d = f[u++] || "") && (p = parseFloat(d) || 0,
            T = d.substr((p + "").length),
            g.charAt(1) === "=" && (g = Zt(p, g) + T),
            w = parseFloat(g),
            x = g.substr((w + "").length),
            l = Ht.lastIndex - x.length,
            x || (x = x || it.units[e] || T,
            l === n.length && (n += x,
            a.e += x)),
            T !== x && (p = Mt(t, e, d, x) || 0),
            a._pt = {
                _next: a._pt,
                p: b || u === 1 ? b : ",",
                s: p,
                c: w - p,
                m: m && m < 4 || e === "zIndex" ? Math.round : 0
            });
        a.c = l < n.length ? n.substring(l, n.length) : ""
    } else
        a.r = e === "display" && n === "none" ? rr : nr;
    return vn.test(n) && (a.e = 0),
    this._pt = a,
    a
}, Qi = {
    top: "0%",
    bottom: "100%",
    left: "0%",
    right: "100%",
    center: "50%"
}, As = function(t) {
    var e = t.split(" ")
      , i = e[0]
      , n = e[1] || "50%";
    return (i === "top" || i === "bottom" || n === "left" || n === "right") && (t = i,
    i = n,
    n = t),
    e[0] = Qi[i] || i,
    e[1] = Qi[n] || n,
    e.join(" ")
}, Ls = function(t, e) {
    if (e.tween && e.tween._time === e.tween._dur) {
        var i = e.t, n = i.style, r = e.u, s = i._gsap, a, l, u;
        if (r === "all" || r === !0)
            n.cssText = "",
            l = 1;
        else
            for (r = r.split(","),
            u = r.length; --u > -1; )
                a = r[u],
                Ot[a] && (l = 1,
                a = a === "transformOrigin" ? Ct : X),
                ge(i, a);
        l && (ge(i, X),
        s && (s.svg && i.removeAttribute("transform"),
        ye(i, 1),
        s.uncache = 1))
    }
}, We = {
    clearProps: function(t, e, i, n, r) {
        if (r.data !== "isFromStart") {
            var s = t._pt = new J(t._pt,e,i,0,0,Ls);
            return s.u = n,
            s.pr = -10,
            s.tween = r,
            t._props.push(i),
            1
        }
    }
}, we = [1, 0, 0, 1, 0, 0], ur = {}, lr = function(t) {
    return t === "matrix(1, 0, 0, 1, 0, 0)" || t === "none" || !t
}, Ji = function(t) {
    var e = gt(t, X);
    return lr(e) ? we : e.substr(7).match(yn).map(z)
}, zi = function(t, e) {
    var i = t._gsap || Xt(t), n = t.style, r = Ji(t), s, a, l, u;
    return i.svg && t.getAttribute("transform") ? (l = t.transform.baseVal.consolidate().matrix,
    r = [l.a, l.b, l.c, l.d, l.e, l.f],
    r.join(",") === "1,0,0,1,0,0" ? we : r) : (r === we && !t.offsetParent && t !== Qt && !i.svg && (l = n.display,
    n.display = "block",
    s = t.parentNode,
    (!s || !t.offsetParent) && (u = 1,
    a = t.nextSibling,
    Qt.appendChild(t)),
    r = Ji(t),
    l ? n.display = l : ge(t, "display"),
    u && (a ? s.insertBefore(t, a) : s ? s.appendChild(t) : Qt.removeChild(t))),
    e && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r)
}, di = function(t, e, i, n, r, s) {
    var a = t._gsap, l = r || zi(t, !0), u = a.xOrigin || 0, h = a.yOrigin || 0, c = a.xOffset || 0, f = a.yOffset || 0, p = l[0], m = l[1], d = l[2], g = l[3], w = l[4], b = l[5], x = e.split(" "), T = parseFloat(x[0]) || 0, y = parseFloat(x[1]) || 0, v, P, S, E;
    i ? l !== we && (P = p * g - m * d) && (S = T * (g / P) + y * (-d / P) + (d * b - g * w) / P,
    E = T * (-m / P) + y * (p / P) - (p * b - m * w) / P,
    T = S,
    y = E) : (v = or(t),
    T = v.x + (~x[0].indexOf("%") ? T / 100 * v.width : T),
    y = v.y + (~(x[1] || x[0]).indexOf("%") ? y / 100 * v.height : y)),
    n || n !== !1 && a.smooth ? (w = T - u,
    b = y - h,
    a.xOffset = c + (w * p + b * d) - w,
    a.yOffset = f + (w * m + b * g) - b) : a.xOffset = a.yOffset = 0,
    a.xOrigin = T,
    a.yOrigin = y,
    a.smooth = !!n,
    a.origin = e,
    a.originIsAbsolute = !!i,
    t.style[Ct] = "0px 0px",
    s && (Et(s, a, "xOrigin", u, T),
    Et(s, a, "yOrigin", h, y),
    Et(s, a, "xOffset", c, a.xOffset),
    Et(s, a, "yOffset", f, a.yOffset)),
    t.setAttribute("data-svg-origin", T + " " + y)
}, ye = function(t, e) {
    var i = t._gsap || new $n(t);
    if ("x"in i && !e && !i.uncache)
        return i;
    var n = t.style, r = i.scaleX < 0, s = "px", a = "deg", l = gt(t, Ct) || "0", u, h, c, f, p, m, d, g, w, b, x, T, y, v, P, S, E, O, A, B, I, L, N, F, G, Lt, Dt, se, Rt, Bi, _t, Ft;
    return u = h = c = m = d = g = w = b = x = 0,
    f = p = 1,
    i.svg = !!(t.getCTM && ar(t)),
    v = zi(t, i.svg),
    i.svg && (F = (!i.uncache || l === "0px 0px") && !e && t.getAttribute("data-svg-origin"),
    di(t, F || l, !!F || i.originIsAbsolute, i.smooth !== !1, v)),
    T = i.xOrigin || 0,
    y = i.yOrigin || 0,
    v !== we && (O = v[0],
    A = v[1],
    B = v[2],
    I = v[3],
    u = L = v[4],
    h = N = v[5],
    v.length === 6 ? (f = Math.sqrt(O * O + A * A),
    p = Math.sqrt(I * I + B * B),
    m = O || A ? Gt(A, O) * Bt : 0,
    w = B || I ? Gt(B, I) * Bt + m : 0,
    w && (p *= Math.abs(Math.cos(w * Jt))),
    i.svg && (u -= T - (T * O + y * B),
    h -= y - (T * A + y * I))) : (Ft = v[6],
    Bi = v[7],
    Dt = v[8],
    se = v[9],
    Rt = v[10],
    _t = v[11],
    u = v[12],
    h = v[13],
    c = v[14],
    P = Gt(Ft, Rt),
    d = P * Bt,
    P && (S = Math.cos(-P),
    E = Math.sin(-P),
    F = L * S + Dt * E,
    G = N * S + se * E,
    Lt = Ft * S + Rt * E,
    Dt = L * -E + Dt * S,
    se = N * -E + se * S,
    Rt = Ft * -E + Rt * S,
    _t = Bi * -E + _t * S,
    L = F,
    N = G,
    Ft = Lt),
    P = Gt(-B, Rt),
    g = P * Bt,
    P && (S = Math.cos(-P),
    E = Math.sin(-P),
    F = O * S - Dt * E,
    G = A * S - se * E,
    Lt = B * S - Rt * E,
    _t = I * E + _t * S,
    O = F,
    A = G,
    B = Lt),
    P = Gt(A, O),
    m = P * Bt,
    P && (S = Math.cos(P),
    E = Math.sin(P),
    F = O * S + A * E,
    G = L * S + N * E,
    A = A * S - O * E,
    N = N * S - L * E,
    O = F,
    L = G),
    d && Math.abs(d) + Math.abs(m) > 359.9 && (d = m = 0,
    g = 180 - g),
    f = z(Math.sqrt(O * O + A * A + B * B)),
    p = z(Math.sqrt(N * N + Ft * Ft)),
    P = Gt(L, N),
    w = Math.abs(P) > 2e-4 ? P * Bt : 0,
    x = _t ? 1 / (_t < 0 ? -_t : _t) : 0),
    i.svg && (F = t.getAttribute("transform"),
    i.forceCSS = t.setAttribute("transform", "") || !lr(gt(t, X)),
    F && t.setAttribute("transform", F))),
    Math.abs(w) > 90 && Math.abs(w) < 270 && (r ? (f *= -1,
    w += m <= 0 ? 180 : -180,
    m += m <= 0 ? 180 : -180) : (p *= -1,
    w += w <= 0 ? 180 : -180)),
    e = e || i.uncache,
    i.x = u - ((i.xPercent = u && (!e && i.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-u) ? -50 : 0))) ? t.offsetWidth * i.xPercent / 100 : 0) + s,
    i.y = h - ((i.yPercent = h && (!e && i.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-h) ? -50 : 0))) ? t.offsetHeight * i.yPercent / 100 : 0) + s,
    i.z = c + s,
    i.scaleX = z(f),
    i.scaleY = z(p),
    i.rotation = z(m) + a,
    i.rotationX = z(d) + a,
    i.rotationY = z(g) + a,
    i.skewX = w + a,
    i.skewY = b + a,
    i.transformPerspective = x + s,
    (i.zOrigin = parseFloat(l.split(" ")[2]) || 0) && (n[Ct] = Ue(l)),
    i.xOffset = i.yOffset = 0,
    i.force3D = it.force3D,
    i.renderTransform = i.svg ? Rs : sr ? hr : Ds,
    i.uncache = 0,
    i
}, Ue = function(t) {
    return (t = t.split(" "))[0] + " " + t[1]
}, Qe = function(t, e, i) {
    var n = j(e);
    return z(parseFloat(e) + parseFloat(Mt(t, "x", i + "px", n))) + n
}, Ds = function(t, e) {
    e.z = "0px",
    e.rotationY = e.rotationX = "0deg",
    e.force3D = 0,
    hr(t, e)
}, zt = "0deg", oe = "0px", It = ") ", hr = function(t, e) {
    var i = e || this
      , n = i.xPercent
      , r = i.yPercent
      , s = i.x
      , a = i.y
      , l = i.z
      , u = i.rotation
      , h = i.rotationY
      , c = i.rotationX
      , f = i.skewX
      , p = i.skewY
      , m = i.scaleX
      , d = i.scaleY
      , g = i.transformPerspective
      , w = i.force3D
      , b = i.target
      , x = i.zOrigin
      , T = ""
      , y = w === "auto" && t && t !== 1 || w === !0;
    if (x && (c !== zt || h !== zt)) {
        var v = parseFloat(h) * Jt, P = Math.sin(v), S = Math.cos(v), E;
        v = parseFloat(c) * Jt,
        E = Math.cos(v),
        s = Qe(b, s, P * E * -x),
        a = Qe(b, a, -Math.sin(v) * -x),
        l = Qe(b, l, S * E * -x + x)
    }
    g !== oe && (T += "perspective(" + g + It),
    (n || r) && (T += "translate(" + n + "%, " + r + "%) "),
    (y || s !== oe || a !== oe || l !== oe) && (T += l !== oe || y ? "translate3d(" + s + ", " + a + ", " + l + ") " : "translate(" + s + ", " + a + It),
    u !== zt && (T += "rotate(" + u + It),
    h !== zt && (T += "rotateY(" + h + It),
    c !== zt && (T += "rotateX(" + c + It),
    (f !== zt || p !== zt) && (T += "skew(" + f + ", " + p + It),
    (m !== 1 || d !== 1) && (T += "scale(" + m + ", " + d + It),
    b.style[X] = T || "translate(0, 0)"
}, Rs = function(t, e) {
    var i = e || this, n = i.xPercent, r = i.yPercent, s = i.x, a = i.y, l = i.rotation, u = i.skewX, h = i.skewY, c = i.scaleX, f = i.scaleY, p = i.target, m = i.xOrigin, d = i.yOrigin, g = i.xOffset, w = i.yOffset, b = i.forceCSS, x = parseFloat(s), T = parseFloat(a), y, v, P, S, E;
    l = parseFloat(l),
    u = parseFloat(u),
    h = parseFloat(h),
    h && (h = parseFloat(h),
    u += h,
    l += h),
    l || u ? (l *= Jt,
    u *= Jt,
    y = Math.cos(l) * c,
    v = Math.sin(l) * c,
    P = Math.sin(l - u) * -f,
    S = Math.cos(l - u) * f,
    u && (h *= Jt,
    E = Math.tan(u - h),
    E = Math.sqrt(1 + E * E),
    P *= E,
    S *= E,
    h && (E = Math.tan(h),
    E = Math.sqrt(1 + E * E),
    y *= E,
    v *= E)),
    y = z(y),
    v = z(v),
    P = z(P),
    S = z(S)) : (y = c,
    S = f,
    v = P = 0),
    (x && !~(s + "").indexOf("px") || T && !~(a + "").indexOf("px")) && (x = Mt(p, "x", s, "px"),
    T = Mt(p, "y", a, "px")),
    (m || d || g || w) && (x = z(x + m - (m * y + d * P) + g),
    T = z(T + d - (m * v + d * S) + w)),
    (n || r) && (E = p.getBBox(),
    x = z(x + n / 100 * E.width),
    T = z(T + r / 100 * E.height)),
    E = "matrix(" + y + "," + v + "," + P + "," + S + "," + x + "," + T + ")",
    p.setAttribute("transform", E),
    b && (p.style[X] = E)
}, Fs = function(t, e, i, n, r) {
    var s = 360, a = Y(r), l = parseFloat(r) * (a && ~r.indexOf("rad") ? Bt : 1), u = l - n, h = n + u + "deg", c, f;
    return a && (c = r.split("_")[1],
    c === "short" && (u %= s,
    u !== u % (s / 2) && (u += u < 0 ? s : -s)),
    c === "cw" && u < 0 ? u = (u + s * Gi) % s - ~~(u / s) * s : c === "ccw" && u > 0 && (u = (u - s * Gi) % s - ~~(u / s) * s)),
    t._pt = f = new J(t._pt,e,i,n,u,xs),
    f.e = h,
    f.u = "deg",
    t._props.push(i),
    f
}, tn = function(t, e) {
    for (var i in e)
        t[i] = e[i];
    return t
}, zs = function(t, e, i) {
    var n = tn({}, i._gsap), r = "perspective,force3D,transformOrigin,svgOrigin", s = i.style, a, l, u, h, c, f, p, m;
    n.svg ? (u = i.getAttribute("transform"),
    i.setAttribute("transform", ""),
    s[X] = e,
    a = ye(i, 1),
    ge(i, X),
    i.setAttribute("transform", u)) : (u = getComputedStyle(i)[X],
    s[X] = e,
    a = ye(i, 1),
    s[X] = u);
    for (l in Ot)
        u = n[l],
        h = a[l],
        u !== h && r.indexOf(l) < 0 && (p = j(u),
        m = j(h),
        c = p !== m ? Mt(i, l, u, m) : parseFloat(u),
        f = parseFloat(h),
        t._pt = new J(t._pt,a,l,c,f - c,ir),
        t._pt.u = m || 0,
        t._props.push(l));
    tn(a, n)
};
Q("padding,margin,Width,Radius", function(o, t) {
    var e = "Top"
      , i = "Right"
      , n = "Bottom"
      , r = "Left"
      , s = (t < 3 ? [e, i, n, r] : [e + r, e + i, n + i, n + r]).map(function(a) {
        return t < 2 ? o + a : "border" + a + o
    });
    We[t > 1 ? "border" + o : o] = function(a, l, u, h, c) {
        var f, p;
        if (arguments.length < 4)
            return f = s.map(function(m) {
                return Wt(a, m, u)
            }),
            p = f.join(" "),
            p.split(f[0]).length === 5 ? f[0] : p;
        f = (h + "").split(" "),
        p = {},
        s.forEach(function(m, d) {
            return p[m] = f[d] = f[d] || f[(d - 1) / 2 | 0]
        }),
        a.init(l, p, c)
    }
});
var cr = {
    name: "css",
    register: fi,
    targetTest: function(t) {
        return t.style && t.nodeType
    },
    init: function(t, e, i, n, r) {
        var s = this._props, a = t.style, l = i.vars.startAt, u, h, c, f, p, m, d, g, w, b, x, T, y, v, P;
        Fi || fi();
        for (d in e)
            if (d !== "autoRound" && (h = e[d],
            !(tt[d] && Gn(d, e, i, n, t, r)))) {
                if (p = typeof h,
                m = We[d],
                p === "function" && (h = h.call(i, n, t, r),
                p = typeof h),
                p === "string" && ~h.indexOf("random(") && (h = _e(h)),
                m)
                    m(this, t, d, h, i) && (P = 1);
                else if (d.substr(0, 2) === "--")
                    u = (getComputedStyle(t).getPropertyValue(d) + "").trim(),
                    h += "",
                    St.lastIndex = 0,
                    St.test(u) || (g = j(u),
                    w = j(h)),
                    w ? g !== w && (u = Mt(t, d, u, w) + w) : g && (h += g),
                    this.add(a, "setProperty", u, h, n, r, 0, 0, d),
                    s.push(d);
                else if (p !== "undefined") {
                    if (l && d in l ? (u = typeof l[d] == "function" ? l[d].call(i, n, t, r) : l[d],
                    Y(u) && ~u.indexOf("random(") && (u = _e(u)),
                    j(u + "") || (u += it.units[d] || j(Wt(t, d)) || ""),
                    (u + "").charAt(1) === "=" && (u = Wt(t, d))) : u = Wt(t, d),
                    f = parseFloat(u),
                    b = p === "string" && h.charAt(1) === "=" && h.substr(0, 2),
                    b && (h = h.substr(2)),
                    c = parseFloat(h),
                    d in Tt && (d === "autoAlpha" && (f === 1 && Wt(t, "visibility") === "hidden" && c && (f = 0),
                    Et(this, a, "visibility", f ? "inherit" : "hidden", c ? "inherit" : "hidden", !c)),
                    d !== "scale" && d !== "transform" && (d = Tt[d],
                    ~d.indexOf(",") && (d = d.split(",")[0]))),
                    x = d in Ot,
                    x) {
                        if (T || (y = t._gsap,
                        y.renderTransform && !e.parseTransform || ye(t, e.parseTransform),
                        v = e.smoothOrigin !== !1 && y.smooth,
                        T = this._pt = new J(this._pt,a,X,0,1,y.renderTransform,y,0,-1),
                        T.dep = 1),
                        d === "scale")
                            this._pt = new J(this._pt,y,"scaleY",y.scaleY,(b ? Zt(y.scaleY, b + c) : c) - y.scaleY || 0),
                            s.push("scaleY", d),
                            d += "X";
                        else if (d === "transformOrigin") {
                            h = As(h),
                            y.svg ? di(t, h, 0, v, 0, this) : (w = parseFloat(h.split(" ")[2]) || 0,
                            w !== y.zOrigin && Et(this, y, "zOrigin", y.zOrigin, w),
                            Et(this, a, d, Ue(u), Ue(h)));
                            continue
                        } else if (d === "svgOrigin") {
                            di(t, h, 1, v, 0, this);
                            continue
                        } else if (d in ur) {
                            Fs(this, y, d, f, b ? Zt(f, b + h) : h);
                            continue
                        } else if (d === "smoothOrigin") {
                            Et(this, y, "smooth", y.smooth, h);
                            continue
                        } else if (d === "force3D") {
                            y[d] = h;
                            continue
                        } else if (d === "transform") {
                            zs(this, h, t);
                            continue
                        }
                    } else
                        d in a || (d = re(d) || d);
                    if (x || (c || c === 0) && (f || f === 0) && !vs.test(h) && d in a)
                        g = (u + "").substr((f + "").length),
                        c || (c = 0),
                        w = j(h) || (d in it.units ? it.units[d] : g),
                        g !== w && (f = Mt(t, d, u, w)),
                        this._pt = new J(this._pt,x ? y : a,d,f,(b ? Zt(f, b + c) : c) - f,!x && (w === "px" || d === "zIndex") && e.autoRound !== !1 ? Ts : ir),
                        this._pt.u = w || 0,
                        g !== w && w !== "%" && (this._pt.b = u,
                        this._pt.r = bs);
                    else if (d in a)
                        Ms.call(this, t, d, u, b ? b + h : h);
                    else if (d in t)
                        this.add(t, d, u || t[d], b ? b + h : h, n, r);
                    else {
                        Pi(d, h);
                        continue
                    }
                    s.push(d)
                }
            }
        P && tr(this)
    },
    get: Wt,
    aliases: Tt,
    getSetter: function(t, e, i) {
        var n = Tt[e];
        return n && n.indexOf(",") < 0 && (e = n),
        e in Ot && e !== Ct && (t._gsap.x || Wt(t, "x")) ? i && $i === i ? e === "scale" ? ks : Ss : ($i = i || {}) && (e === "scale" ? Os : Cs) : t.style && !Ti(t.style[e]) ? Es : ~e.indexOf("-") ? Ps : Di(t, e)
    },
    core: {
        _removeProperty: ge,
        _getMatrix: zi
    }
};
ht.utils.checkPrefix = re;
(function(o, t, e, i) {
    var n = Q(o + "," + t + "," + e, function(r) {
        Ot[r] = 1
    });
    Q(t, function(r) {
        it.units[r] = "deg",
        ur[r] = 1
    }),
    Tt[n[13]] = o + "," + t,
    Q(i, function(r) {
        var s = r.split(":");
        Tt[s[1]] = n[s[0]]
    })
}
)("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Q("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(o) {
    it.units[o] = "px"
});
ht.registerPlugin(cr);
var D = ht.registerPlugin(cr) || ht;
D.core.Tween;
/*!
 * ScrollToPlugin 3.10.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/
var st, fr, wt, dt, kt, dr, _r, pr = function() {
    return typeof window < "u"
}, mr = function() {
    return st || pr() && (st = window.gsap) && st.registerPlugin && st
}, gr = function(t) {
    return typeof t == "string"
}, en = function(t) {
    return typeof t == "function"
}, ve = function(t, e) {
    var i = e === "x" ? "Width" : "Height"
      , n = "scroll" + i
      , r = "client" + i;
    return t === wt || t === dt || t === kt ? Math.max(dt[n], kt[n]) - (wt["inner" + i] || dt[r] || kt[r]) : t[n] - t["offset" + i]
}, xe = function(t, e) {
    var i = "scroll" + (e === "x" ? "Left" : "Top");
    return t === wt && (t.pageXOffset != null ? i = "page" + e.toUpperCase() + "Offset" : t = dt[i] != null ? dt : kt),
    function() {
        return t[i]
    }
}, Is = function(t, e, i, n) {
    if (en(t) && (t = t(e, i, n)),
    typeof t != "object")
        return gr(t) && t !== "max" && t.charAt(1) !== "=" ? {
            x: t,
            y: t
        } : {
            y: t
        };
    if (t.nodeType)
        return {
            y: t,
            x: t
        };
    var r = {}, s;
    for (s in t)
        r[s] = s !== "onAutoKill" && en(t[s]) ? t[s](e, i, n) : t[s];
    return r
}, wr = function(t, e) {
    if (t = dr(t)[0],
    !t || !t.getBoundingClientRect)
        return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
        };
    var i = t.getBoundingClientRect()
      , n = !e || e === wt || e === kt
      , r = n ? {
        top: dt.clientTop - (wt.pageYOffset || dt.scrollTop || kt.scrollTop || 0),
        left: dt.clientLeft - (wt.pageXOffset || dt.scrollLeft || kt.scrollLeft || 0)
    } : e.getBoundingClientRect()
      , s = {
        x: i.left - r.left,
        y: i.top - r.top
    };
    return !n && e && (s.x += xe(e, "x")(),
    s.y += xe(e, "y")()),
    s
}, nn = function(t, e, i, n, r) {
    return !isNaN(t) && typeof t != "object" ? parseFloat(t) - r : gr(t) && t.charAt(1) === "=" ? parseFloat(t.substr(2)) * (t.charAt(0) === "-" ? -1 : 1) + n - r : t === "max" ? ve(e, i) - r : Math.min(ve(e, i), wr(t, e)[i] - r)
}, rn = function() {
    st = mr(),
    pr() && st && document.body && (wt = window,
    kt = document.body,
    dt = document.documentElement,
    dr = st.utils.toArray,
    st.config({
        autoKillThreshold: 7
    }),
    _r = st.config(),
    fr = 1)
}, Te = {
    version: "3.10.4",
    name: "scrollTo",
    rawVars: 1,
    register: function(t) {
        st = t,
        rn()
    },
    init: function(t, e, i, n, r) {
        fr || rn();
        var s = this
          , a = st.getProperty(t, "scrollSnapType");
        s.isWin = t === wt,
        s.target = t,
        s.tween = i,
        e = Is(e, n, t, r),
        s.vars = e,
        s.autoKill = !!e.autoKill,
        s.getX = xe(t, "x"),
        s.getY = xe(t, "y"),
        s.x = s.xPrev = s.getX(),
        s.y = s.yPrev = s.getY(),
        a && a !== "none" && (s.snap = 1,
        s.snapInline = t.style.scrollSnapType,
        t.style.scrollSnapType = "none"),
        e.x != null ? (s.add(s, "x", s.x, nn(e.x, t, "x", s.x, e.offsetX || 0), n, r),
        s._props.push("scrollTo_x")) : s.skipX = 1,
        e.y != null ? (s.add(s, "y", s.y, nn(e.y, t, "y", s.y, e.offsetY || 0), n, r),
        s._props.push("scrollTo_y")) : s.skipY = 1
    },
    render: function(t, e) {
        for (var i = e._pt, n = e.target, r = e.tween, s = e.autoKill, a = e.xPrev, l = e.yPrev, u = e.isWin, h = e.snap, c = e.snapInline, f, p, m, d, g; i; )
            i.r(t, i.d),
            i = i._next;
        f = u || !e.skipX ? e.getX() : a,
        p = u || !e.skipY ? e.getY() : l,
        m = p - l,
        d = f - a,
        g = _r.autoKillThreshold,
        e.x < 0 && (e.x = 0),
        e.y < 0 && (e.y = 0),
        s && (!e.skipX && (d > g || d < -g) && f < ve(n, "x") && (e.skipX = 1),
        !e.skipY && (m > g || m < -g) && p < ve(n, "y") && (e.skipY = 1),
        e.skipX && e.skipY && (r.kill(),
        e.vars.onAutoKill && e.vars.onAutoKill.apply(r, e.vars.onAutoKillParams || []))),
        u ? wt.scrollTo(e.skipX ? f : e.x, e.skipY ? p : e.y) : (e.skipY || (n.scrollTop = e.y),
        e.skipX || (n.scrollLeft = e.x)),
        h && (t === 1 || t === 0) && (p = n.scrollTop,
        f = n.scrollLeft,
        c ? n.style.scrollSnapType = c : n.style.removeProperty("scroll-snap-type"),
        n.scrollTop = p + 1,
        n.scrollLeft = f + 1,
        n.scrollTop = p,
        n.scrollLeft = f),
        e.xPrev = e.x,
        e.yPrev = e.y
    },
    kill: function(t) {
        var e = t === "scrollTo";
        (e || t === "scrollTo_x") && (this.skipX = 1),
        (e || t === "scrollTo_y") && (this.skipY = 1)
    }
};
Te.max = ve;
Te.getOffset = wr;
Te.buildGetter = xe;
mr() && st.registerPlugin(Te);
D.registerPlugin(Te);
window.history.scrollRestoration && (window.history.scrollRestoration = "manual");
window.scrollTo(0, 0);
try {
    self["workbox:window:6.5.2"] && _()
} catch {}
function sn(o, t) {
    return new Promise(function(e) {
        var i = new MessageChannel;
        i.port1.onmessage = function(n) {
            e(n.data)
        }
        ,
        o.postMessage(t, [i.port2])
    }
    )
}
function Ns(o, t) {
    for (var e = 0; e < t.length; e++) {
        var i = t[e];
        i.enumerable = i.enumerable || !1,
        i.configurable = !0,
        "value"in i && (i.writable = !0),
        Object.defineProperty(o, i.key, i)
    }
}
function on(o, t) {
    (t == null || t > o.length) && (t = o.length);
    for (var e = 0, i = new Array(t); e < t; e++)
        i[e] = o[e];
    return i
}
function Bs(o, t) {
    var e;
    if (typeof Symbol > "u" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (e = function(n, r) {
            if (n) {
                if (typeof n == "string")
                    return on(n, r);
                var s = Object.prototype.toString.call(n).slice(8, -1);
                return s === "Object" && n.constructor && (s = n.constructor.name),
                s === "Map" || s === "Set" ? Array.from(n) : s === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(s) ? on(n, r) : void 0
            }
        }(o)) || t && o && typeof o.length == "number") {
            e && (o = e);
            var i = 0;
            return function() {
                return i >= o.length ? {
                    done: !0
                } : {
                    done: !1,
                    value: o[i++]
                }
            }
        }
        throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
    }
    return (e = o[Symbol.iterator]()).next.bind(e)
}
try {
    self["workbox:core:6.5.2"] && _()
} catch {}
var Je = function() {
    var o = this;
    this.promise = new Promise(function(t, e) {
        o.resolve = t,
        o.reject = e
    }
    )
};
function ti(o, t) {
    var e = location.href;
    return new URL(o,e).href === new URL(t,e).href
}
var ae = function(o, t) {
    this.type = o,
    Object.assign(this, t)
};
function ke(o, t, e) {
    return e ? t ? t(o) : o : (o && o.then || (o = Promise.resolve(o)),
    t ? o.then(t) : o)
}
function Ws() {}
var Us = {
    type: "SKIP_WAITING"
};
function an(o, t) {
    if (!t)
        return o && o.then ? o.then(Ws) : Promise.resolve()
}
var Ys = function(o) {
    var t, e;
    function i(a, l) {
        var u, h;
        return l === void 0 && (l = {}),
        (u = o.call(this) || this).nn = {},
        u.tn = 0,
        u.rn = new Je,
        u.en = new Je,
        u.on = new Je,
        u.un = 0,
        u.an = new Set,
        u.cn = function() {
            var c = u.fn
              , f = c.installing;
            u.tn > 0 || !ti(f.scriptURL, u.sn.toString()) || performance.now() > u.un + 6e4 ? (u.vn = f,
            c.removeEventListener("updatefound", u.cn)) : (u.hn = f,
            u.an.add(f),
            u.rn.resolve(f)),
            ++u.tn,
            f.addEventListener("statechange", u.ln)
        }
        ,
        u.ln = function(c) {
            var f = u.fn
              , p = c.target
              , m = p.state
              , d = p === u.vn
              , g = {
                sw: p,
                isExternal: d,
                originalEvent: c
            };
            !d && u.mn && (g.isUpdate = !0),
            u.dispatchEvent(new ae(m,g)),
            m === "installed" ? u.wn = self.setTimeout(function() {
                m === "installed" && f.waiting === p && u.dispatchEvent(new ae("waiting",g))
            }, 200) : m === "activating" && (clearTimeout(u.wn),
            d || u.en.resolve(p))
        }
        ,
        u.dn = function(c) {
            var f = u.hn
              , p = f !== navigator.serviceWorker.controller;
            u.dispatchEvent(new ae("controlling",{
                isExternal: p,
                originalEvent: c,
                sw: f,
                isUpdate: u.mn
            })),
            p || u.on.resolve(f)
        }
        ,
        u.gn = (h = function(c) {
            var f = c.data
              , p = c.ports
              , m = c.source;
            return ke(u.getSW(), function() {
                u.an.has(m) && u.dispatchEvent(new ae("message",{
                    data: f,
                    originalEvent: c,
                    ports: p,
                    sw: m
                }))
            })
        }
        ,
        function() {
            for (var c = [], f = 0; f < arguments.length; f++)
                c[f] = arguments[f];
            try {
                return Promise.resolve(h.apply(this, c))
            } catch (p) {
                return Promise.reject(p)
            }
        }
        ),
        u.sn = a,
        u.nn = l,
        navigator.serviceWorker.addEventListener("message", u.gn),
        u
    }
    e = o,
    (t = i).prototype = Object.create(e.prototype),
    t.prototype.constructor = t,
    t.__proto__ = e;
    var n, r, s = i.prototype;
    return s.register = function(a) {
        var l = (a === void 0 ? {} : a).immediate
          , u = l !== void 0 && l;
        try {
            var h = this;
            return function(c, f) {
                var p = c();
                return p && p.then ? p.then(f) : f(p)
            }(function() {
                if (!u && document.readyState !== "complete")
                    return an(new Promise(function(c) {
                        return window.addEventListener("load", c)
                    }
                    ))
            }, function() {
                return h.mn = Boolean(navigator.serviceWorker.controller),
                h.yn = h.pn(),
                ke(h.bn(), function(c) {
                    h.fn = c,
                    h.yn && (h.hn = h.yn,
                    h.en.resolve(h.yn),
                    h.on.resolve(h.yn),
                    h.yn.addEventListener("statechange", h.ln, {
                        once: !0
                    }));
                    var f = h.fn.waiting;
                    return f && ti(f.scriptURL, h.sn.toString()) && (h.hn = f,
                    Promise.resolve().then(function() {
                        h.dispatchEvent(new ae("waiting",{
                            sw: f,
                            wasWaitingBeforeRegister: !0
                        }))
                    }).then(function() {})),
                    h.hn && (h.rn.resolve(h.hn),
                    h.an.add(h.hn)),
                    h.fn.addEventListener("updatefound", h.cn),
                    navigator.serviceWorker.addEventListener("controllerchange", h.dn),
                    h.fn
                })
            })
        } catch (c) {
            return Promise.reject(c)
        }
    }
    ,
    s.update = function() {
        try {
            return this.fn ? an(this.fn.update()) : void 0
        } catch (a) {
            return Promise.reject(a)
        }
    }
    ,
    s.getSW = function() {
        return this.hn !== void 0 ? Promise.resolve(this.hn) : this.rn.promise
    }
    ,
    s.messageSW = function(a) {
        try {
            return ke(this.getSW(), function(l) {
                return sn(l, a)
            })
        } catch (l) {
            return Promise.reject(l)
        }
    }
    ,
    s.messageSkipWaiting = function() {
        this.fn && this.fn.waiting && sn(this.fn.waiting, Us)
    }
    ,
    s.pn = function() {
        var a = navigator.serviceWorker.controller;
        return a && ti(a.scriptURL, this.sn.toString()) ? a : void 0
    }
    ,
    s.bn = function() {
        try {
            var a = this;
            return function(l, u) {
                try {
                    var h = l()
                } catch (c) {
                    return u(c)
                }
                return h && h.then ? h.then(void 0, u) : h
            }(function() {
                return ke(navigator.serviceWorker.register(a.sn, a.nn), function(l) {
                    return a.un = performance.now(),
                    l
                })
            }, function(l) {
                throw l
            })
        } catch (l) {
            return Promise.reject(l)
        }
    }
    ,
    n = i,
    (r = [{
        key: "active",
        get: function() {
            return this.en.promise
        }
    }, {
        key: "controlling",
        get: function() {
            return this.on.promise
        }
    }]) && Ns(n.prototype, r),
    i
}(function() {
    function o() {
        this.Pn = new Map
    }
    var t = o.prototype;
    return t.addEventListener = function(e, i) {
        this.Sn(e).add(i)
    }
    ,
    t.removeEventListener = function(e, i) {
        this.Sn(e).delete(i)
    }
    ,
    t.dispatchEvent = function(e) {
        e.target = this;
        for (var i, n = Bs(this.Sn(e.type)); !(i = n()).done; )
            (0,
            i.value)(e)
    }
    ,
    t.Sn = function(e) {
        return this.Pn.has(e) || this.Pn.set(e, new Set),
        this.Pn.get(e)
    }
    ,
    o
}());
function Xs(o={}) {
    const {immediate: t=!1, onNeedRefresh: e, onOfflineReady: i, onRegistered: n, onRegisterError: r} = o;
    let s;
    const a = async(l=!0)=>{}
    ;
    return "serviceWorker"in navigator && (s = new Ys("/sw.js",{
        scope: "/",
        type: "classic"
    }),
    s.addEventListener("activated", l=>{
        l.isUpdate ? window.location.reload() : i == null || i()
    }
    ),
    s.register({
        immediate: t
    }).then(l=>{
        n == null || n(l)
    }
    ).catch(l=>{
        r == null || r(l)
    }
    )),
    a
}
"serviceWorker"in navigator && !/localhost/.test(window.location) && Xs();
const Vs = o=>{
    const t = new Set;
    do
        for (const e of Reflect.ownKeys(o))
            t.add([o, e]);
    while ((o = Reflect.getPrototypeOf(o)) && o !== Object.prototype);
    return t
}
;
function yr(o, {include: t, exclude: e}={}) {
    const i = n=>{
        const r = s=>typeof s == "string" ? n === s : s.test(n);
        return t ? t.some(r) : e ? !e.some(r) : !0
    }
    ;
    for (const [n,r] of Vs(o.constructor.prototype)) {
        if (r === "constructor" || !i(r))
            continue;
        const s = Reflect.getOwnPropertyDescriptor(n, r);
        s && typeof s.value == "function" && (o[r] = o[r].bind(o))
    }
    return o
}
let js = ()=>({
    events: {},
    emit(o, ...t) {
        let e = this.events[o] || [];
        for (let i = 0, n = e.length; i < n; i++)
            e[i](...t)
    },
    on(o, t) {
        var e;
        return (e = this.events[o]) != null && e.push(t) || (this.events[o] = [t]),
        ()=>{
            var i;
            this.events[o] = (i = this.events[o]) == null ? void 0 : i.filter(n=>t !== n)
        }
    }
});
class Ee {
    constructor({autoListeners: t=!0, autoMount: e=!0, classes: i, element: n, elements: r, id: s}={}) {
        yr(this),
        this.autoListeners = t,
        this.autoMount = e,
        this.classes = i,
        this.selector = n,
        this.selectors = r,
        this.id = s,
        this.autoMount && this.create()
    }
    create() {
        this.initElement(this.selector),
        this.initElements(this.selectors),
        this.initEmitter(),
        this.autoListeners && this.addEventListeners()
    }
    initElement(t) {
        !t || (t instanceof window.HTMLElement ? this.element = t : this.element = document.querySelector(t))
    }
    initElements(t) {
        this.elements = {};
        for (const e in t) {
            const i = t[e];
            i === window ? this.elements[e] = window : i instanceof window.HTMLElement ? this.elements[e] = i : i instanceof window.NodeList ? this.elements[e] = i : Array.isArray(i) ? this.elements[e] = i : (this.elements[e] = document.querySelectorAll(i),
            this.elements[e].length === 0 ? this.elements[e] = null : this.elements[e].length === 1 && (this.elements[e] = this.elements[e][0]))
        }
    }
    initEmitter() {
        this.emitter = js()
    }
    on(t, e) {
        return this.emitter.on(t, e)
    }
    addEventListeners() {}
    removeEventListeners() {}
    destroy() {
        this.removeEventListeners()
    }
}
class qs {
    constructor() {
        this.isMobile() ? document.documentElement.classList.add("mobile") : document.documentElement.classList.add("desktop")
    }
    isMobile() {
        return "ontouchstart"in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0
    }
    isWebPSupported() {
        if (!this.isWebPChecked) {
            this.isWebPChecked = !0;
            const t = document.createElement("canvas");
            t.getContext && t.getContext("2d") && (this.isWebPCheck = t.toDataURL("image/webp").indexOf("data:image/webp") === 0)
        }
        return this.isWebPCheck
    }
}
const $s = new qs;
class Ii extends Ee {
    constructor({classes: t, datasets: e, element: i, elements: n}) {
        super({
            autoMount: !1,
            classes: t,
            element: i,
            elements: {
                ...n,
                medias: "img, video"
            }
        }),
        this.datasets = e
    }
    create() {
        super.create(),
        this.components = [],
        this.createDatasets(),
        this.createMedias()
    }
    createDatasets() {
        this.datasetsComponents = this.datasets.map(({component: t, selector: e})=>({
            components: this.element.querySelectorAll(e).map(r=>{
                const s = new t({
                    element: r
                });
                return this.components.push(s),
                s
            }
            ),
            selector: e
        }))
    }
    createMedias() {
        this.elements.medias && (this.elements.medias.length || (this.elements.medias = [this.elements.medias]),
        this.elements.medias.forEach(t=>{
            if (!t.getAttribute("src")) {
                let e = t.getAttribute("data-src");
                $s.isWebPSupported() && (e = e.replace(".jpg", ".webp"),
                e = e.replace(".png", ".webp")),
                t.setAttribute("src", e)
            }
        }
        ))
    }
    show(t) {
        return new Promise(async e=>{
            t ? await t.play() : console.warn("Page doesn't have animation in set."),
            e()
        }
        )
    }
    hide(t) {
        return new Promise(async e=>{
            t ? await t.play() : console.warn("Page doesn't have animation out set."),
            e()
        }
        )
    }
    onMouseDown(t) {
        this.components.forEach(e=>{
            var i;
            return (i = e.onMouseDown) == null ? void 0 : i.call(e, t)
        }
        )
    }
    onMouseMove(t) {
        this.components.forEach(e=>{
            var i;
            return (i = e.onMouseMove) == null ? void 0 : i.call(e, t)
        }
        )
    }
    onMouseUp(t) {
        this.components.forEach(e=>{
            var i;
            return (i = e.onMouseUp) == null ? void 0 : i.call(e, t)
        }
        )
    }
    onResize(t) {
        this.components.forEach(e=>{
            var i;
            return (i = e.onResize) == null ? void 0 : i.call(e, t)
        }
        )
    }
    update() {
        this.components.forEach(t=>{
            var e;
            return (e = t.update) == null ? void 0 : e.call(t)
        }
        )
    }
}
class Gs extends Ii {
    constructor(t) {
        super({
            ...t,
            classes: {
                active: "about--active"
            },
            element: ".about",
            elements: {
                close: ".about__close"
            }
        })
    }
    show(t) {
        const e = (t == null ? void 0 : t.selector) === ".home";
        return this.timelineIn = D.timeline(),
        this.timelineIn.set(this.element, {
            autoAlpha: 1,
            delay: e ? .6 : 0
        }),
        this.timelineIn.call(i=>{
            this.element.classList.add(this.classes.active)
        }
        ),
        super.show(this.timelineIn)
    }
    hide() {
        return this.timelineOut = D.timeline(),
        this.timelineOut.to(this.element, {
            autoAlpha: 0,
            duration: .4
        }),
        super.hide(this.timelineOut)
    }
}
const Me = 768
  , Nt = "expo.inOut";
class Hs extends Ii {
    constructor(t) {
        super({
            ...t,
            classes: {
                animating: "home--animating"
            },
            element: ".home",
            elements: {
                media: ".home__media",
                links: ".home__media__element",
                link: ".home__link"
            }
        })
    }
    async show({element: {id: t=null}={}}={}) {
        return this.id = null,
        this.element.classList.add(this.classes.animating),
        await this.onRandomize(),
        this.timelineIn = D.timeline({
            onComplete: e=>{
                this.element.classList.remove(this.classes.animating)
            }
        }),
        this.timelineIn.set(this.element, {
            autoAlpha: 1
        }),
        this.timelineIn.fromTo(this.elements.link, {
            autoAlpha: 0
        }, {
            autoAlpha: 1,
            duration: 1,
            ease: Nt
        }, 0),
        this.elements.links.forEach((e,i)=>{
            if (e.id === t) {
                const n = this.elements.media.getBoundingClientRect();
                this.timelineIn.from(e, {
                    borderRadius: 0,
                    clearProps: "height, width",
                    duration: 1,
                    ease: Nt,
                    height: "100vh",
                    pointerEvents: "none",
                    width: "100vw",
                    x: -n.x - e.offsetLeft,
                    y: -n.y - e.offsetTop,
                    onComplete: r=>{
                        D.set(e, {
                            clearProps: "all"
                        })
                    }
                }, 0)
            } else
                this.timelineIn.fromTo(e, {
                    scale: 0,
                    transition: "none"
                }, {
                    delay: D.utils.random(0, .4, !0),
                    duration: .6,
                    ease: Nt,
                    scale: 1,
                    onComplete: n=>{
                        D.set(e, {
                            clearProps: "all"
                        })
                    }
                }, 0)
        }
        ),
        super.show(this.timelineIn)
    }
    async hide(t) {
        return this.rotation && (this.rotation.kill(),
        this.rotation = null),
        await new Promise(i=>{
            window.requestAnimationFrame(n=>{
                i()
            }
            )
        }
        ),
        t.selector === ".about" && (await this.onRandomize(0),
        await new Promise(i=>{
            D.delayedCall(.6, i)
        }
        )),
        this.timelineOut = D.timeline(),
        this.timelineOut.to(this.elements.link, {
            autoAlpha: 0,
            duration: 1,
            ease: Nt
        }),
        this.elements.links.forEach((i,n)=>{
            if (i.id === this.id) {
                const r = this.elements.media.getBoundingClientRect()
                  , {firstElementChild: s} = i;
                this.timelineOut.to(i, {
                    borderRadius: 0,
                    duration: 1,
                    ease: Nt,
                    height: "100vh",
                    transition: "none",
                    width: "100vw",
                    x: -r.x - i.offsetLeft,
                    y: -r.y - i.offsetTop
                }, 0),
                this.timelineOut.set(s, {
                    autoAlpha: 1,
                    transition: "none"
                }, 0),
                this.timelineOut.to(s, {
                    autoAlpha: 1,
                    duration: 1,
                    ease: Nt,
                    height: window.innerHeight * .9,
                    marginLeft: 0,
                    marginTop: 0,
                    x: window.innerWidth <= Me ? "2rem" : "10rem",
                    y: window.innerHeight * .05
                }, 0)
            } else
                this.timelineOut.to(i, {
                    delay: D.utils.random(0, .4, !0),
                    duration: .6,
                    ease: Nt,
                    transition: "none",
                    scale: 0
                }, 0)
        }
        ),
        this.timelineOut.call(i=>{
            this.id = null
        }
        ),
        super.hide(this.timelineOut)
    }
    onOpen({target: t}) {
        this.id = t.id
    }
    onRandomize(t=D.utils.random(0, 5, 1)) {
        return this.rotation && (this.rotation.kill(),
        this.rotation = null),
        this.rotation = D.delayedCall(2, e=>{
            this.onRandomize()
        }
        ),
        this.element.classList.remove(`home--${this.index}`),
        this.index = t,
        new Promise(e=>{
            this.element.classList.add(`home--${this.index}`),
            window.requestAnimationFrame(i=>{
                e()
            }
            )
        }
        )
    }
    onMouseEnter() {
        this.rotation && (this.rotation.kill(),
        this.rotation = null)
    }
    onMouseLeave() {
        this.rotation && (this.rotation.kill(),
        this.rotation = null),
        this.rotation = D.delayedCall(2, t=>{
            this.onRandomize()
        }
        )
    }
    addEventListeners() {
        super.addEventListeners(),
        this.elements.media.addEventListener("mouseenter", this.onMouseEnter),
        this.elements.media.addEventListener("mouseleave", this.onMouseLeave),
        this.elements.links.forEach(t=>{
            t.addEventListener("click", this.onOpen)
        }
        )
    }
    removeEventListeners() {
        super.removeEventListeners(),
        this.elements.media.removeEventListener("mouseenter", this.onMouseEnter),
        this.elements.media.removeEventListener("mouseleave", this.onMouseLeave),
        this.elements.links.forEach(t=>{
            t.removeEventListener("click", this.onOpen)
        }
        )
    }
}
function Ks(o) {
    return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o
}
var vr = {
    exports: {}
}, un = !1, Ut, _i, pi, Ae, Le, xr, De, mi, gi, wi, br, yi, vi, Tr, Er;
function H() {
    if (!un) {
        un = !0;
        var o = navigator.userAgent
          , t = /(?:MSIE.(\d+\.\d+))|(?:(?:Firefox|GranParadiso|Iceweasel).(\d+\.\d+))|(?:Opera(?:.+Version.|.)(\d+\.\d+))|(?:AppleWebKit.(\d+(?:\.\d+)?))|(?:Trident\/\d+\.\d+.*rv:(\d+\.\d+))/.exec(o)
          , e = /(Mac OS X)|(Windows)|(Linux)/.exec(o);
        if (yi = /\b(iPhone|iP[ao]d)/.exec(o),
        vi = /\b(iP[ao]d)/.exec(o),
        wi = /Android/i.exec(o),
        Tr = /FBAN\/\w+;/i.exec(o),
        Er = /Mobile/i.exec(o),
        br = !!/Win64/.exec(o),
        t) {
            Ut = t[1] ? parseFloat(t[1]) : t[5] ? parseFloat(t[5]) : NaN,
            Ut && document && document.documentMode && (Ut = document.documentMode);
            var i = /(?:Trident\/(\d+.\d+))/.exec(o);
            xr = i ? parseFloat(i[1]) + 4 : Ut,
            _i = t[2] ? parseFloat(t[2]) : NaN,
            pi = t[3] ? parseFloat(t[3]) : NaN,
            Ae = t[4] ? parseFloat(t[4]) : NaN,
            Ae ? (t = /(?:Chrome\/(\d+\.\d+))/.exec(o),
            Le = t && t[1] ? parseFloat(t[1]) : NaN) : Le = NaN
        } else
            Ut = _i = pi = Le = Ae = NaN;
        if (e) {
            if (e[1]) {
                var n = /(?:Mac OS X (\d+(?:[._]\d+)?))/.exec(o);
                De = n ? parseFloat(n[1].replace("_", ".")) : !0
            } else
                De = !1;
            mi = !!e[2],
            gi = !!e[3]
        } else
            De = mi = gi = !1
    }
}
var xi = {
    ie: function() {
        return H() || Ut
    },
    ieCompatibilityMode: function() {
        return H() || xr > Ut
    },
    ie64: function() {
        return xi.ie() && br
    },
    firefox: function() {
        return H() || _i
    },
    opera: function() {
        return H() || pi
    },
    webkit: function() {
        return H() || Ae
    },
    safari: function() {
        return xi.webkit()
    },
    chrome: function() {
        return H() || Le
    },
    windows: function() {
        return H() || mi
    },
    osx: function() {
        return H() || De
    },
    linux: function() {
        return H() || gi
    },
    iphone: function() {
        return H() || yi
    },
    mobile: function() {
        return H() || yi || vi || wi || Er
    },
    nativeApp: function() {
        return H() || Tr
    },
    android: function() {
        return H() || wi
    },
    ipad: function() {
        return H() || vi
    }
}, Zs = xi, Oe = !!(typeof window < "u" && window.document && window.document.createElement), Qs = {
    canUseDOM: Oe,
    canUseWorkers: typeof Worker < "u",
    canUseEventListeners: Oe && !!(window.addEventListener || window.attachEvent),
    canUseViewport: Oe && !!window.screen,
    isInWorker: !Oe
}, Js = Qs, Pr = Js, Sr;
Pr.canUseDOM && (Sr = document.implementation && document.implementation.hasFeature && document.implementation.hasFeature("", "") !== !0);
/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function to(o, t) {
    if (!Pr.canUseDOM || t && !("addEventListener"in document))
        return !1;
    var e = "on" + o
      , i = e in document;
    if (!i) {
        var n = document.createElement("div");
        n.setAttribute(e, "return;"),
        i = typeof n[e] == "function"
    }
    return !i && Sr && o === "wheel" && (i = document.implementation.hasFeature("Events.wheel", "3.0")),
    i
}
var eo = to
  , io = Zs
  , no = eo
  , ln = 10
  , hn = 40
  , cn = 800;
function kr(o) {
    var t = 0
      , e = 0
      , i = 0
      , n = 0;
    return "detail"in o && (e = o.detail),
    "wheelDelta"in o && (e = -o.wheelDelta / 120),
    "wheelDeltaY"in o && (e = -o.wheelDeltaY / 120),
    "wheelDeltaX"in o && (t = -o.wheelDeltaX / 120),
    "axis"in o && o.axis === o.HORIZONTAL_AXIS && (t = e,
    e = 0),
    i = t * ln,
    n = e * ln,
    "deltaY"in o && (n = o.deltaY),
    "deltaX"in o && (i = o.deltaX),
    (i || n) && o.deltaMode && (o.deltaMode == 1 ? (i *= hn,
    n *= hn) : (i *= cn,
    n *= cn)),
    i && !t && (t = i < 1 ? -1 : 1),
    n && !e && (e = n < 1 ? -1 : 1),
    {
        spinX: t,
        spinY: e,
        pixelX: i,
        pixelY: n
    }
}
kr.getEventType = function() {
    return io.firefox() ? "DOMMouseScroll" : no("wheel") ? "wheel" : "mousewheel"
}
;
var ro = kr;
(function(o) {
    o.exports = ro
}
)(vr);
const so = Ks(vr.exports);
var Ni = {
    exports: {}
}
  , fn = typeof document < "u" ? document.createElement("p").style : {}
  , dn = ["O", "ms", "Moz", "Webkit"]
  , ei = /([A-Z])/g
  , ii = {};
function Or(o) {
    if (o = o.replace(/-([a-z])/g, function(n, r) {
        return r.toUpperCase()
    }),
    fn[o] !== void 0)
        return o;
    for (var t = o.charAt(0).toUpperCase() + o.slice(1), e = dn.length; e--; ) {
        var i = dn[e] + t;
        if (fn[i] !== void 0)
            return i
    }
    return o
}
function oo(o) {
    return o in ii ? ii[o] : ii[o] = Or(o)
}
function ao(o) {
    return o = Or(o),
    ei.test(o) && (o = "-" + o.replace(ei, "-$1"),
    ei.lastIndex = 0),
    o.toLowerCase()
}
Ni.exports = oo;
Ni.exports.dash = ao;
const _n = D.utils.clamp;
D.utils.interpolate;
D.utils.random;
function uo(o, t, e, i, n, r=!1, s=!0, a=!0) {
    if (s && o < t)
        return i;
    if (a && o > e)
        return n;
    const u = (o - t) / (e - t) * (n - i) + i;
    return r ? Math.round(u) : u
}
class lo extends Ii {
    constructor(t) {
        super({
            ...t,
            classes: {
                active: "project--active"
            },
            element: ".project",
            elements: {
                close: ".project__close",
                wrapper: ".project__wrapper",
                highlight: ".project__header",
                highlightWrapper: ".project__header__wrapper",
                buttonNext: ".project__button--next",
                buttonNextArrow: ".project__button--next .project__button__arrow",
                buttonPrevious: ".project__button--previous",
                buttonPreviousArrow: ".project__button--previous .project__button__arrow",
                header: ".project__sections__header",
                headerBack: ".project__sections__header__button",
                content: ".project__content",
                sectionsWrapper: ".project__sections",
                sections: ".project__header, .project__sections__section",
                scrollables: ".project__sections__section--scrollable",
                images: "img",
                videos: "video"
            }
        })
    }
    create(t) {
        var e, i;
        super.create(t),
        this.elements.buttonNext.arrow = this.elements.buttonNextArrow,
        this.elements.buttonPrevious.arrow = this.elements.buttonPreviousArrow,
        this.transform = Ni.exports("transform"),
        this.scroll = {
            last: 0,
            current: 0,
            target: 0,
            lerp: .1
        },
        this.x = {
            start: 0,
            end: 0
        },
        this.y = {
            start: 0,
            end: 0
        },
        this.intersectionObserver = new window.IntersectionObserver(n=>{
            n.forEach(({isIntersecting: r, target: s})=>{
                r ? (s.currentTime = 0,
                s.play()) : s.pause()
            }
            )
        }
        ),
        (e = this.elements.videos) == null || e.forEach(n=>{
            this.intersectionObserver.observe(n)
        }
        ),
        (i = this.elements.images) == null || i.forEach(n=>{
            n.onload = this.onResize
        }
        ),
        this.resizeObserver = new window.ResizeObserver(n=>{
            for (const r of n)
                this.onResize()
        }
        ),
        this.resizeObserver.observe(this.elements.wrapper)
    }
    show() {
        return this.isClosed = !1,
        this.timelineIn = D.timeline(),
        this.timelineIn.call(t=>{
            this.element.classList.add(this.classes.active)
        }
        ),
        this.timelineIn.set(this.element, {
            autoAlpha: 1
        }),
        super.show(this.timelineIn)
    }
    hide() {
        return this.timelineOut = D.timeline(),
        this.timelineOut.to([this.elements.close, this.elements.content], {
            autoAlpha: 0,
            duration: .4
        }),
        super.hide(this.timelineOut)
    }
    onButtonMove({layerX: t, layerY: e, target: i}) {
        i.arrow.style[this.transform] = `translate(${t}px, ${e}px)`
    }
    onButtonClick({target: t}) {
        this.onChange(t)
    }
    onClose() {
        this.isClosed || (this.isClosed = !0,
        this.elements.close.click())
    }
    onChange(t, e=!1) {
        var a;
        const i = this.elements.sections.find(l=>{
            const u = this.scroll.current + this.width * .5
              , h = l.offsetLeft
              , c = l.offsetLeft + l.clientWidth;
            return u >= h && u <= c ? l : !1
        }
        )
          , n = Array.from(this.elements.sections).indexOf(i)
          , r = this.elements.sections[n - 1]
          , s = this.elements.sections[n + 1];
        ((a = t == null ? void 0 : t.classList) == null ? void 0 : a.contains("project__button--previous")) || e ? r ? this.onPrevious(r) : this.onClose() : s ? this.onNext(s) : this.onClose()
    }
    onPrevious(t) {
        D.to(this.scroll, {
            duration: 1,
            ease: "expo.out",
            target: t.offsetLeft
        })
    }
    onNext(t) {
        D.to(this.scroll, {
            duration: 1,
            ease: "expo.out",
            target: t.offsetLeft
        })
    }
    onKeyDown({key: t}) {
        t === "ArrowLeft" ? this.onChange(!1, !0) : t === "ArrowRight" ? this.onChange(!1, !1) : t === "Escape" && this.onClose()
    }
    onResize() {
        super.onResize(),
        this.height = window.innerHeight,
        this.width = window.innerWidth,
        this.width > Me ? (this.elements.scrollables && (this.elements.scrollables instanceof window.HTMLElement && (this.elements.scrollables = [this.elements.scrollables]),
        this.elements.scrollables.forEach(t=>{
            const e = t.querySelector(".project__sections__media__item")
              , i = t.querySelector(".project__sections__media__item__image")
              , n = i.clientHeight - e.clientHeight
              , r = 100 * this.height / 1390;
            t.image = i,
            t.imageHeight = n,
            t.style.width = `${n + r * 2 + this.width}px`,
            t.bounds = t.getBoundingClientRect(),
            t.bounds.limit = t.bounds.width - this.width
        }
        )),
        this.elements.header.bounds = this.elements.header.getBoundingClientRect(),
        this.elements.content.bounds = this.elements.content.getBoundingClientRect()) : (this.elements.highlight.bounds = this.elements.highlight.getBoundingClientRect(),
        this.elements.highlightWrapper.bounds = this.elements.highlightWrapper.getBoundingClientRect(),
        this.elements.highlight.style.height = `${this.elements.highlightWrapper.bounds.width + this.height - this.width}px`,
        window.requestAnimationFrame(t=>{
            this.elements.wrapper.bounds = this.elements.wrapper.getBoundingClientRect()
        }
        ))
    }
    onTouchStart({touches: t}) {
        this.isDown = !0;
        const [e] = t;
        this.x.start = e.clientX,
        this.y.start = e.clientY,
        this.scroll.last = this.scroll.current,
        this.isClosableStart = this.scroll.current < 10,
        this.isClosableEnd = this.scroll.current > this.limit - 10
    }
    onTouchMove({changedTouches: t}) {
        if (!this.isDown)
            return;
        const [e] = t;
        this.x.end = e.clientX,
        this.y.end = e.clientY,
        this.width < this.height ? this.distance = (this.y.start - this.y.end) * 3 : this.distance = (this.x.start - this.x.end) * 3,
        this.scroll.target = this.scroll.last + this.distance
    }
    onTouchEnd() {
        this.isDown = !1,
        this.distance < -500 && this.isClosableStart && this.onClose(),
        this.distance > 500 && this.isClosableEnd && this.onClose()
    }
    onWheel(t) {
        const e = so(t)
          , i = this.scroll.current <= .1 + 10 && this.scroll.target <= .1 && e.pixelY < 0
          , n = this.scroll.current >= this.limit - 10 && this.scroll.target >= this.limit && e.pixelY > 0;
        (i || n) && this.onClose(),
        this.scroll.target += e.pixelY
    }
    get limit() {
        var e, i;
        let t = 0;
        return this.width > Me ? t = (((e = this.elements.content.bounds) == null ? void 0 : e.width) || 0) - this.width : t = (((i = this.elements.wrapper.bounds) == null ? void 0 : i.height) || 0) - this.height,
        t
    }
    update() {
        if (super.update(),
        this.scroll.target = D.utils.clamp(0, this.limit, this.scroll.target),
        this.scroll.current = D.utils.interpolate(this.scroll.current, this.scroll.target, this.scroll.lerp),
        this.scroll.current < .01 && (this.scroll.current = 0),
        this.width > Me) {
            this.elements.content.style[this.transform] = `translate3d(-${this.scroll.current}px, 0, 0)`;
            const t = Math.max(this.scroll.current - this.elements.header.bounds.left, 0);
            this.elements.header.style[this.transform] = `translate3d(${t}px, 0, 0)`,
            this.elements.scrollables && this.elements.scrollables.forEach(e=>{
                const i = _n(0, e.bounds.limit, this.scroll.current - e.bounds.left)
                  , n = uo(i, 0, e.bounds.limit, 0, e.imageHeight);
                e.firstElementChild.style[this.transform] = `translateX(${i}px)`,
                e.image.style[this.transform] = `translateY(-${n}px)`
            }
            )
        } else {
            this.elements.content.style[this.transform] = `translate3d(0, -${this.scroll.current}px, 0)`;
            const t = _n(0, this.elements.highlightWrapper.bounds.width - this.width, this.scroll.current);
            this.elements.highlight.style[this.transform] = `translateY(${t}px)`,
            this.elements.highlightWrapper.style[this.transform] = `translateX(-${t}px)`
        }
    }
    addEventListeners() {
        super.addEventListeners(),
        window.addEventListener("keydown", this.onKeyDown),
        window.addEventListener("mousewheel", this.onWheel),
        window.addEventListener("wheel", this.onWheel),
        window.addEventListener("touchstart", this.onTouchStart),
        window.addEventListener("touchmove", this.onTouchMove),
        window.addEventListener("touchend", this.onTouchEnd),
        this.elements.buttonPrevious.addEventListener("mousemove", this.onButtonMove),
        this.elements.buttonPrevious.addEventListener("click", this.onButtonClick),
        this.elements.buttonNext.addEventListener("mousemove", this.onButtonMove),
        this.elements.buttonNext.addEventListener("click", this.onButtonClick)
    }
    removeEventListeners() {
        super.removeEventListeners(),
        window.removeEventListener("keydown", this.onKeyDown),
        window.removeEventListener("mousewheel", this.onWheel),
        window.removeEventListener("wheel", this.onWheel),
        window.removeEventListener("touchstart", this.onTouchStart),
        window.removeEventListener("touchmove", this.onTouchMove),
        window.removeEventListener("touchend", this.onTouchEnd),
        this.elements.buttonPrevious.removeEventListener("mousemove", this.onButtonMove),
        this.elements.buttonPrevious.removeEventListener("click", this.onButtonClick),
        this.elements.buttonNext.removeEventListener("mousemove", this.onButtonMove),
        this.elements.buttonNext.removeEventListener("click", this.onButtonClick)
    }
}
class ho extends Ee {
    constructor({element: t}) {
        super({
            element: t,
            elements: {}
        }),
        this.createObserver()
    }
    createObserver() {
        this.observer = new window.IntersectionObserver(t=>{
            t.forEach(e=>{
                e.isIntersecting ? this.element.setAttribute("data-description-active", "") : this.element.removeAttribute("data-description-active")
            }
            )
        }
        ).observe(this.element)
    }
}
class co extends Ee {
    constructor({element: t}) {
        super({
            element: t,
            elements: {}
        }),
        this.createObserver()
    }
    createObserver() {
        this.observer = new window.IntersectionObserver(t=>{
            t.forEach(e=>{
                e.isIntersecting ? this.element.setAttribute("data-media-active", "") : this.element.removeAttribute("data-media-active")
            }
            )
        }
        ).observe(this.element)
    }
}
class fo extends Ee {
    constructor({element: t}) {
        super({
            element: t,
            elements: {}
        }),
        this.createObserver()
    }
    createObserver() {
        this.observer = new window.IntersectionObserver(t=>{
            t.forEach(e=>{
                e.isIntersecting ? this.element.setAttribute("data-title-active", "") : this.element.removeAttribute("data-title-active")
            }
            )
        }
        ).observe(this.element)
    }
}
class _o extends Ee {
    constructor({element: t}) {
        super({
            element: t
        })
    }
    onMouseEnter(t) {
        t.preventDefault()
    }
    onMouseLeave(t) {
        t.preventDefault()
    }
    onClick(t) {
        t.preventDefault(),
        this.emitter.emit("click", this.element)
    }
    addEventListeners() {
        const t = this.element.classList.contains("skip")
          , e = this.element.href.indexOf(window.location.origin) > -1
          , i = this.element.href.indexOf("mailto") === -1
          , n = this.element.href.indexOf("tel") === -1;
        t || (e ? (this.element.onclick = this.onClick,
        this.element.onmouseenter = this.onMouseEnter,
        this.element.onmouseleave = this.onMouseLeave) : i && n && (this.element.rel = "noopener",
        this.element.target = "_blank"))
    }
    removeEventListeners() {
        this.element.onclick = null
    }
}
class po {
    constructor() {
        this.onFetch("/sprites.svg")
    }
    async onFetch(t) {
        const i = await (await window.fetch(t)).text();
        this.createSprite(i)
    }
    createSprite(t) {
        const e = document.createElement("div");
        e.innerHTML = t,
        e.style.left = "-999999px",
        e.style.opacity = 0,
        e.style.position = "absolute",
        e.style.top = 0,
        document.body.appendChild(e)
    }
}
class mo {
    constructor() {
        yr(this),
        document.documentElement.style.setProperty("--100vh", `${window.innerHeight}px`),
        this.initContainer()
    }
    initContainer() {
        this.content = document.querySelector(".app"),
        this.template = this.content.getAttribute("data-template"),
        this.template || console.warn("The attribute `data-template` in `.app` element is required for the application to run properly.")
    }
    initCache() {
        this.cache = {}
    }
    initMouse() {
        this.mouse = {
            start: {
                x: 0,
                y: 0
            },
            end: {
                x: 0,
                y: 0
            }
        }
    }
    initComponents(t) {
        this.components = t.map(({component: e})=>new e({})),
        this.preloader = this.components.find(e=>e.id === "preloader")
    }
    initDatasets(t) {
        this.datasets = t
    }
    initRoutes(t) {
        this.routes = t,
        this.pages = {},
        t.forEach(({component: e, template: i})=>{
            this.pages[i] = new e({
                datasets: this.datasets
            })
        }
        ),
        this.page = this.pages[this.template],
        this.page.create(),
        this.preloader ? this.preloader.on("complete", e=>{
            this.onResize(),
            this.page.show()
        }
        ) : this.page.show()
    }
    initLinks() {
        this.links && this.links.forEach(t=>t.destroy()),
        this.links = document.querySelectorAll("a"),
        this.links = this.links.map(t=>{
            const e = new _o({
                element: t
            });
            return e.on("click", this.onLinkClick),
            e
        }
        )
    }
    initSprites() {
        this.sprites = new po
    }
    init() {
        this.initCache(),
        this.initMouse(),
        this.initLinks(),
        this.initSprites(),
        this.onResize(),
        this.addEventListeners(),
        this.update()
    }
    async onLinkClick({href: t, pushState: e=!0}) {
        if (this.isFetching)
            return;
        this.isFetching = !0,
        t = t.replace(window.location.origin, "");
        let i;
        if (this.cache[t] || (i = await window.fetch(t)),
        i) {
            const n = await i.text();
            this.cache[t] = n
        }
        this.onPageRequested({
            href: t,
            response: this.cache[t],
            pushState: e
        })
    }
    async onPageRequested({href: t, response: e, pushState: i}) {
        var u, h;
        const n = document.createElement("div");
        n.innerHTML = e;
        const r = n.querySelector(".app")
          , s = r.getAttribute("data-template")
          , a = document.createElement("div");
        a.innerHTML = r.innerHTML,
        this.content.setAttribute("data-template", s),
        this.content.appendChild(a.firstElementChild),
        this.initLinks(),
        window.scrollTo(0, 0);
        const l = this.page;
        this.page = this.pages[s],
        this.page.create(),
        (h = (u = this.page).onResize) == null || h.call(u),
        s === "project" || this.template === "project" ? (await l.hide(this.page),
        this.page.show(l)) : (this.page.show(l),
        await l.hide(this.page)),
        this.template = s,
        window.requestAnimationFrame(c=>{
            window.requestAnimationFrame(f=>{
                var p, m;
                (m = (p = this.page).onResize) == null || m.call(p),
                this.content.removeChild(this.content.firstElementChild),
                this.isFetching = !1,
                i && window.history.pushState({}, document.title, t),
                this.components.forEach(d=>{
                    var g;
                    (g = d.onNavigate) == null || g.call(d)
                }
                )
            }
            )
        }
        )
    }
    onPopState() {
        this.onLinkClick({
            href: window.location.href,
            pushState: !1
        })
    }
    onMouseDown(t) {
        var e, i;
        t.touches ? this.mouse.start = {
            x: t.touches[0].clientX,
            y: t.touches[0].clientY
        } : this.mouse.start = {
            x: t.clientX,
            y: t.clientY
        },
        this.components.forEach(n=>{
            var r;
            return (r = n.onMouseDown) == null ? void 0 : r.call(n, {
                originalEvent: t,
                mouse: this.mouse
            })
        }
        ),
        (i = (e = this.page).onMouseDown) == null || i.call(e, {
            originalEvent: t,
            mouse: this.mouse
        })
    }
    onMouseMove(t) {
        var e, i;
        t.touches ? this.mouse.end = {
            x: t.touches[0].clientX,
            y: t.touches[0].clientY
        } : this.mouse.end = {
            x: t.clientX,
            y: t.clientY
        },
        this.mouse.distance = {
            x: this.mouse.start.x - this.mouse.end.x,
            y: this.mouse.start.y - this.mouse.end.y
        },
        this.components.forEach(n=>{
            var r;
            return (r = n.onMouseMove) == null ? void 0 : r.call(n, {
                originalEvent: t,
                mouse: this.mouse
            })
        }
        ),
        (i = (e = this.page).onMouseMove) == null || i.call(e, {
            originalEvent: t,
            mouse: this.mouse
        })
    }
    onMouseUp(t) {
        var e, i;
        this.components.forEach(n=>{
            var r;
            return (r = n.onMouseUp) == null ? void 0 : r.call(n, {
                originalEvent: t,
                mouse: this.mouse
            })
        }
        ),
        (i = (e = this.page).onMouseUp) == null || i.call(e, {
            originalEvent: t,
            mouse: this.mouse
        })
    }
    onResize() {
        var t, e;
        window.INNER_SIZES = {
            height: window.innerHeight,
            width: window.innerWidth
        },
        window.OUTER_SIZES = {
            height: window.outerHeight,
            width: window.outerWidth
        },
        document.documentElement.style.setProperty("--100vh", `${window.INNER_SIZES.height}px`),
        this.components.forEach(i=>{
            var n;
            return (n = i.onResize) == null ? void 0 : n.call(i)
        }
        ),
        (e = (t = this.page).onResize) == null || e.call(t)
    }
    addEventListeners() {
        window.addEventListener("mousedown", this.onMouseDown),
        window.addEventListener("mousemove", this.onMouseMove),
        window.addEventListener("mouseup", this.onMouseUp),
        window.addEventListener("touchstart", this.onMouseDown),
        window.addEventListener("touchmove", this.onMouseMove),
        window.addEventListener("touchup", this.onMouseUp),
        window.addEventListener("resize", this.onResize),
        window.addEventListener("popstate", this.onPopState)
    }
    update() {
        var t, e;
        (e = (t = this.page) == null ? void 0 : t.update) == null || e.call(t),
        this.components.forEach(i=>{
            var n;
            return (n = i.update) == null ? void 0 : n.call(i)
        }
        ),
        this.frame = window.requestAnimationFrame(this.update)
    }
}
const Pe = new mo
  , go = [];
Pe.initComponents(go);
const wo = [{
    component: fo,
    selector: "[data-title]"
}, {
    component: ho,
    selector: "[data-description]"
}, {
    component: co,
    selector: "[data-media]"
}];
Pe.initDatasets(wo);
const yo = [{
    component: Gs,
    template: "about"
}, {
    component: Hs,
    template: "home"
}, {
    component: lo,
    template: "project"
}];
Pe.initRoutes(yo);
Pe.init();
window.App = Pe;
window.requestAnimationFrame(async o=>{
    await document.fonts.ready,
    document.body.classList.add("loaded")
}
);
