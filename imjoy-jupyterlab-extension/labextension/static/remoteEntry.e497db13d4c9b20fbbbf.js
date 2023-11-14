var _JUPYTERLAB;
(() => {
  'use strict';
  var e,
    r,
    t,
    n,
    o,
    a,
    i,
    l,
    u,
    s,
    f,
    d,
    c,
    p,
    h,
    v = {
      670: (e, r, t) => {
        var n = {
            './index': () =>
              Promise.all([t.e(942), t.e(754)]).then(() => () => t(754)),
            './extension': () =>
              Promise.all([t.e(942), t.e(754)]).then(() => () => t(754)),
            './style': () => t.e(747).then(() => () => t(747))
          },
          o = (e, r) => (
            (t.R = r),
            (r = t.o(n, e)
              ? n[e]()
              : Promise.resolve().then(() => {
                  throw new Error(
                    'Module "' + e + '" does not exist in container.'
                  );
                })),
            (t.R = void 0),
            r
          ),
          a = (e, r) => {
            if (t.S) {
              var n = t.S.default,
                o = 'default';
              if (n && n !== e)
                throw new Error(
                  'Container initialization failed as it has already been initialized with a different share scope'
                );
              return (t.S[o] = e), t.I(o, r);
            }
          };
        t.d(r, { get: () => o, init: () => a });
      }
    },
    b = {};
  function m(e) {
    var r = b[e];
    if (void 0 !== r) return r.exports;
    var t = (b[e] = { id: e, exports: {} });
    return v[e](t, t.exports, m), t.exports;
  }
  (m.m = v),
    (m.c = b),
    (m.n = e => {
      var r = e && e.__esModule ? () => e.default : () => e;
      return m.d(r, { a: r }), r;
    }),
    (m.d = (e, r) => {
      for (var t in r)
        m.o(r, t) &&
          !m.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
    (m.f = {}),
    (m.e = e =>
      Promise.all(Object.keys(m.f).reduce((r, t) => (m.f[t](e, r), r), []))),
    (m.u = e =>
      e +
      '.' +
      {
        747: '08ecd031b9c0861222d4',
        754: 'c64924bf041548ec3401',
        942: 'c4b692e5941010f31829'
      }[e] +
      '.js?v=' +
      {
        747: '08ecd031b9c0861222d4',
        754: 'c64924bf041548ec3401',
        942: 'c4b692e5941010f31829'
      }[e]),
    (m.g = (function () {
      if ('object' == typeof globalThis) return globalThis;
      try {
        return this || new Function('return this')();
      } catch (e) {
        if ('object' == typeof window) return window;
      }
    })()),
    (m.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
    (e = {}),
    (r = 'imjoy-jupyterlab-extension:'),
    (m.l = (t, n, o, a) => {
      if (e[t]) e[t].push(n);
      else {
        var i, l;
        if (void 0 !== o)
          for (
            var u = document.getElementsByTagName('script'), s = 0;
            s < u.length;
            s++
          ) {
            var f = u[s];
            if (
              f.getAttribute('src') == t ||
              f.getAttribute('data-webpack') == r + o
            ) {
              i = f;
              break;
            }
          }
        i ||
          ((l = !0),
          ((i = document.createElement('script')).charset = 'utf-8'),
          (i.timeout = 120),
          m.nc && i.setAttribute('nonce', m.nc),
          i.setAttribute('data-webpack', r + o),
          (i.src = t)),
          (e[t] = [n]);
        var d = (r, n) => {
            (i.onerror = i.onload = null), clearTimeout(c);
            var o = e[t];
            if (
              (delete e[t],
              i.parentNode && i.parentNode.removeChild(i),
              o && o.forEach(e => e(n)),
              r)
            )
              return r(n);
          },
          c = setTimeout(
            d.bind(null, void 0, { type: 'timeout', target: i }),
            12e4
          );
        (i.onerror = d.bind(null, i.onerror)),
          (i.onload = d.bind(null, i.onload)),
          l && document.head.appendChild(i);
      }
    }),
    (m.r = e => {
      'undefined' != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }),
        Object.defineProperty(e, '__esModule', { value: !0 });
    }),
    (() => {
      m.S = {};
      var e = {},
        r = {};
      m.I = (t, n) => {
        n || (n = []);
        var o = r[t];
        if ((o || (o = r[t] = {}), !(n.indexOf(o) >= 0))) {
          if ((n.push(o), e[t])) return e[t];
          m.o(m.S, t) || (m.S[t] = {});
          var a = m.S[t],
            i = 'imjoy-jupyterlab-extension',
            l = [];
          return (
            'default' === t &&
              ((e, r, t, n) => {
                var o = (a[e] = a[e] || {}),
                  l = o[r];
                (!l || (!l.loaded && (1 != !l.eager ? n : i > l.from))) &&
                  (o[r] = {
                    get: () =>
                      Promise.all([m.e(942), m.e(754)]).then(
                        () => () => m(754)
                      ),
                    from: i,
                    eager: !1
                  });
              })('imjoy-jupyterlab-extension', '0.1.13'),
            (e[t] = l.length ? Promise.all(l).then(() => (e[t] = 1)) : 1)
          );
        }
      };
    })(),
    (() => {
      var e;
      m.g.importScripts && (e = m.g.location + '');
      var r = m.g.document;
      if (!e && r && (r.currentScript && (e = r.currentScript.src), !e)) {
        var t = r.getElementsByTagName('script');
        t.length && (e = t[t.length - 1].src);
      }
      if (!e)
        throw new Error(
          'Automatic publicPath is not supported in this browser'
        );
      (e = e
        .replace(/#.*$/, '')
        .replace(/\?.*$/, '')
        .replace(/\/[^\/]+$/, '/')),
        (m.p = e);
    })(),
    (t = e => {
      var r = e => e.split('.').map(e => (+e == e ? +e : e)),
        t = /^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(e),
        n = t[1] ? r(t[1]) : [];
      return (
        t[2] && (n.length++, n.push.apply(n, r(t[2]))),
        t[3] && (n.push([]), n.push.apply(n, r(t[3]))),
        n
      );
    }),
    (n = (e, r) => {
      (e = t(e)), (r = t(r));
      for (var n = 0; ; ) {
        if (n >= e.length) return n < r.length && 'u' != (typeof r[n])[0];
        var o = e[n],
          a = (typeof o)[0];
        if (n >= r.length) return 'u' == a;
        var i = r[n],
          l = (typeof i)[0];
        if (a != l) return ('o' == a && 'n' == l) || 's' == l || 'u' == a;
        if ('o' != a && 'u' != a && o != i) return o < i;
        n++;
      }
    }),
    (o = e => {
      var r = e[0],
        t = '';
      if (1 === e.length) return '*';
      if (r + 0.5) {
        t +=
          0 == r
            ? '>='
            : -1 == r
              ? '<'
              : 1 == r
                ? '^'
                : 2 == r
                  ? '~'
                  : r > 0
                    ? '='
                    : '!=';
        for (var n = 1, a = 1; a < e.length; a++)
          n--,
            (t +=
              'u' == (typeof (l = e[a]))[0]
                ? '-'
                : (n > 0 ? '.' : '') + ((n = 2), l));
        return t;
      }
      var i = [];
      for (a = 1; a < e.length; a++) {
        var l = e[a];
        i.push(
          0 === l
            ? 'not(' + u() + ')'
            : 1 === l
              ? '(' + u() + ' || ' + u() + ')'
              : 2 === l
                ? i.pop() + ' ' + i.pop()
                : o(l)
        );
      }
      return u();
      function u() {
        return i.pop().replace(/^\((.+)\)$/, '$1');
      }
    }),
    (a = (e, r) => {
      if (0 in e) {
        r = t(r);
        var n = e[0],
          o = n < 0;
        o && (n = -n - 1);
        for (var i = 0, l = 1, u = !0; ; l++, i++) {
          var s,
            f,
            d = l < e.length ? (typeof e[l])[0] : '';
          if (i >= r.length || 'o' == (f = (typeof (s = r[i]))[0]))
            return !u || ('u' == d ? l > n && !o : ('' == d) != o);
          if ('u' == f) {
            if (!u || 'u' != d) return !1;
          } else if (u)
            if (d == f)
              if (l <= n) {
                if (s != e[l]) return !1;
              } else {
                if (o ? s > e[l] : s < e[l]) return !1;
                s != e[l] && (u = !1);
              }
            else if ('s' != d && 'n' != d) {
              if (o || l <= n) return !1;
              (u = !1), l--;
            } else {
              if (l <= n || f < d != o) return !1;
              u = !1;
            }
          else 's' != d && 'n' != d && ((u = !1), l--);
        }
      }
      var c = [],
        p = c.pop.bind(c);
      for (i = 1; i < e.length; i++) {
        var h = e[i];
        c.push(1 == h ? p() | p() : 2 == h ? p() & p() : h ? a(h, r) : !p());
      }
      return !!p();
    }),
    (i = (e, r) => {
      var t = m.S[e];
      if (!t || !m.o(t, r))
        throw new Error(
          'Shared module ' + r + " doesn't exist in shared scope " + e
        );
      return t;
    }),
    (l = (e, r) => {
      var t = e[r];
      return Object.keys(t).reduce(
        (e, r) => (!e || (!t[e].loaded && n(e, r)) ? r : e),
        0
      );
    }),
    (u = (e, r, t, n) =>
      'Unsatisfied version ' +
      t +
      ' from ' +
      (t && e[r][t].from) +
      ' of shared singleton module ' +
      r +
      ' (required ' +
      o(n) +
      ')'),
    (s = (e, r, t, n) => {
      var o = l(e, t);
      return (
        a(n, o) ||
          ('undefined' != typeof console &&
            console.warn &&
            console.warn(u(e, t, o, n))),
        f(e[t][o])
      );
    }),
    (f = e => ((e.loaded = 1), e.get())),
    (d = (e =>
      function (r, t, n, o) {
        var a = m.I(r);
        return a && a.then
          ? a.then(e.bind(e, r, m.S[r], t, n, o))
          : e(r, m.S[r], t, n);
      })((e, r, t, n) => (i(e, t), s(r, 0, t, n)))),
    (c = {}),
    (p = {
      322: () => d('default', '@jupyterlab/filebrowser', [1, 3, 6, 6]),
      502: () => d('default', '@jupyterlab/translation', [1, 3, 6, 6]),
      543: () => d('default', '@jupyterlab/coreutils', [1, 5, 6, 6]),
      777: () => d('default', '@jupyterlab/apputils', [1, 3, 6, 6]),
      923: () => d('default', '@lumino/disposable', [1, 1, 10, 0])
    }),
    (h = { 754: [322, 502, 543, 777, 923] }),
    (m.f.consumes = (e, r) => {
      m.o(h, e) &&
        h[e].forEach(e => {
          if (m.o(c, e)) return r.push(c[e]);
          var t = r => {
              (c[e] = 0),
                (m.m[e] = t => {
                  delete m.c[e], (t.exports = r());
                });
            },
            n = r => {
              delete c[e],
                (m.m[e] = t => {
                  throw (delete m.c[e], r);
                });
            };
          try {
            var o = p[e]();
            o.then ? r.push((c[e] = o.then(t).catch(n))) : t(o);
          } catch (e) {
            n(e);
          }
        });
    }),
    (() => {
      var e = { 245: 0 };
      m.f.j = (r, t) => {
        var n = m.o(e, r) ? e[r] : void 0;
        if (0 !== n)
          if (n) t.push(n[2]);
          else {
            var o = new Promise((t, o) => (n = e[r] = [t, o]));
            t.push((n[2] = o));
            var a = m.p + m.u(r),
              i = new Error();
            m.l(
              a,
              t => {
                if (m.o(e, r) && (0 !== (n = e[r]) && (e[r] = void 0), n)) {
                  var o = t && ('load' === t.type ? 'missing' : t.type),
                    a = t && t.target && t.target.src;
                  (i.message =
                    'Loading chunk ' + r + ' failed.\n(' + o + ': ' + a + ')'),
                    (i.name = 'ChunkLoadError'),
                    (i.type = o),
                    (i.request = a),
                    n[1](i);
                }
              },
              'chunk-' + r,
              r
            );
          }
      };
      var r = (r, t) => {
          var n,
            o,
            [a, i, l] = t,
            u = 0;
          if (a.some(r => 0 !== e[r])) {
            for (n in i) m.o(i, n) && (m.m[n] = i[n]);
            l && l(m);
          }
          for (r && r(t); u < a.length; u++)
            (o = a[u]), m.o(e, o) && e[o] && e[o][0](), (e[a[u]] = 0);
        },
        t = (self.webpackChunkimjoy_jupyterlab_extension =
          self.webpackChunkimjoy_jupyterlab_extension || []);
      t.forEach(r.bind(null, 0)), (t.push = r.bind(null, t.push.bind(t)));
    })();
  var y = m(670);
  (_JUPYTERLAB = void 0 === _JUPYTERLAB ? {} : _JUPYTERLAB)[
    'imjoy-jupyterlab-extension'
  ] = y;
})();
