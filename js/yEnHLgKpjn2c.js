(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7656],
    {
      // Relevant imports and utilities
      15898: function (e, i, l) {
        "use strict";
        var s = l(85893);
        l(67294);
        var a = l(45697),
          n = l.n(a),
          o = l(94184),
          t = l.n(o),
          r = l(37215),
          c = l.n(r),
          h = l(24298),
          u = l(14273);
  
        function _(e) {
          let { color: i, className: l } = e;
          return (0, s.jsxs)("ul", {
            className: t()(c().socialList, l),
            children: [
              (0, s.jsx)("li", {
                children: (0, s.jsx)(h.Z, {
                  href: u.Z.SOCIALS.instagram,
                  target: "_blank",
                  color: i,
                  icon: "InstagramLogo",
                  type: "circle",
                  className: c().socialIcon,
                }),
              }),
              (0, s.jsx)("li", {
                children: (0, s.jsx)(h.Z, {
                  href: u.Z.SOCIALS.facebook,
                  target: "_blank",
                  color: i,
                  icon: "FacebookLogo",
                  type: "circle",
                  className: c().socialIcon,
                }),
              }),
              (0, s.jsx)("li", {
                children: (0, s.jsx)(h.Z, {
                  href: u.Z.SOCIALS.linkedin,
                  target: "_blank",
                  color: i,
                  icon: "LinkedinLogo",
                  type: "circle",
                  className: c().socialIcon,
                }),
              }),
            ],
          });
        }
        _.propTypes = { color: n().oneOf(["default", "white"]), className: n().string };
        i.Z = _;
      },
  
      // Footer without cookie links
      76929: function (e) {
        e.exports = {
          footer: "Footer_footer__sHNQf",
          logo: "Footer_logo__oM_nI",
          columnTitle: "Footer_columnTitle__iHWt0",
          list: "Footer_list__rSnWR",
          navLink: "Footer_navLink__Px53t",
          copy: "Footer_copy__VBhuL",
          broker: "Footer_broker__P0m4_",
          hq: "Footer_hq__Xqmb6",
        };
      },
  
      72012: function (e, i, l) {
        "use strict";
        l.d(i, {
          Z: function () {
            return b;
          },
        });
        var s = l(85893),
          a = l(45697),
          n = l.n(a),
          o = l(94184),
          t = l.n(o),
          r = l(79389),
          c = l(67294),
          h = l(41664),
          u = l.n(h),
          m = l(24298);
  
        function w(e) {
          let { children: i, seo: l, backgroundColor: a, hideFooter: n = !1 } = e;
          return (0, s.jsxs)(s.Fragment, {
            children: [
              l && (0, s.jsx)(r.Z, { metaTags: l }),
              (0, s.jsx)("main", {
                className: t()("Default_main__oSTWY", { Default_skyBlue__gKq2a: "skyBlue" === a }),
                children: i,
              }),
              !n && (0, s.jsx)(y, {}), // Footer call here
            ],
          });
        }
        w.propTypes = {
          children: n().node,
          seo: n().array,
          backgroundColor: n().string,
          hideFooter: n().bool,
        };
        var b = w;
      },
    },
  ]);
  