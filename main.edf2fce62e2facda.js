"use strict";
(self.webpackChunkvolio = self.webpackChunkvolio || []).push([
	["main"], {
		9206: (Ge, re, v) => {
			v.d(re, {
				Nv: () => O,
				jm: () => l,
				p9: () => B
			});
			const l = ["image/*,video/*, audio/*, .xlsx,.xls,.doc, .docx,.ppt, .pptx,.txt,.pdf"],
				O = ["image/png", "image/avif", "image/webp", "image/jpeg", "image/svg+xml", "image/apng", "application/pdf", "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet", "application/vnd.ms-excel", "text/plain", "video/mp4", "video/mp3", "audio/mpeg", "application/msword", "application/vnd.oasis.opendocument.presentation", "application/vnd.openxmlformats-officedocument.presentationml.presentation", "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "video/x-ms-wmv", "video/avi", "video/quicktime", "video/ogg", "video/x-matroska", "video/webm", "video/3gpp", "video/x-ms-asf", "video/vnd.dlna.mpeg-tts"];
			let F = window.location.pathname.split("/")[1];
			const B = ["en", "introduce", "production", "activity", "library", "recruit", "contact"].find(K => K === F) ? "en" : "vi"
		},
		9350: (Ge, re, v) => {
			v.d(re, {
				WX: () => F
			});
			class F {}
		},
		9410: (Ge, re, v) => {
			v.d(re, {
				o4: () => h
			});
			class h {}
		},
		5947: (Ge, re, v) => {
			v.d(re, {
				hU: () => F
			});
			class F {}
		},
		6949: (Ge, re, v) => {
			v.d(re, {
				ny: () => F
			});
			class F {}
		},
		1876: (Ge, re, v) => {
			v.d(re, {
				qC: () => K
			});
			class K {}
		},
		7013: (Ge, re, v) => {
			v.d(re, {
				ci: () => h
			});
			class h {}
		},
		7255: (Ge, re, v) => {
			v.d(re, {
				N: () => l
			});
			class l {}
		},
		6604: (Ge, re, v) => {
			v.d(re, {
				Ng: () => ne
			});
			class ne {}
		},
		5602: (Ge, re, v) => {
			v.d(re, {
				Gq: () => F
			});
			class F {}
		},
		6543: (Ge, re, v) => {
			v.d(re, {
				Z: () => F
			});
			var l = v(8645),
				O = v(5879);
			let F = (() => {
				class h {
					constructor() {
						this.dataRecruit$ = new l.x, this.resultSearch$ = new l.x
					}
					onChangeDataRecruit(K) {
						return this.dataRecruit$.next(K)
					}
					get dataRecruit() {
						return this.dataRecruit$
					}
					onChangeResultSearch(K) {
						return this.resultSearch$.next(K)
					}
					get resultSearch() {
						return this.resultSearch$
					}
					static #e = this.\u0275fac = function(ne) {
						return new(ne || h)
					};
					static #t = this.\u0275prov = O.Yz7({
						token: h,
						factory: h.\u0275fac
					})
				}
				return h
			})()
		},
		2446: (Ge, re, v) => {
			var l = v(6593),
				O = v(9862),
				F = v(8124),
				h = v(5879),
				B = v(6825);

			function ne(y) {
				return new h.vHH(3e3, !1)
			}

			function z(y) {
				switch (y.length) {
					case 0:
						return new B.ZN;
					case 1:
						return y[0];
					default:
						return new B.ZE(y)
				}
			}

			function Se(y, c, s = new Map, f = new Map) {
				const E = [],
					T = [];
				let W = -1,
					q = null;
				if (c.forEach(be => {
						const Fe = be.get("offset"),
							st = Fe == W,
							ut = st && q || new Map;
						be.forEach((Lt, Ft) => {
							let St = Ft,
								Vt = Lt;
							if ("offset" !== Ft) switch (St = y.normalizePropertyName(St, E), Vt) {
								case B.k1:
									Vt = s.get(Ft);
									break;
								case B.l3:
									Vt = f.get(Ft);
									break;
								default:
									Vt = y.normalizeStyleValue(Ft, St, Vt, E)
							}
							ut.set(St, Vt)
						}), st || T.push(ut), q = ut, W = Fe
					}), E.length) throw function Yt(y) {
					return new h.vHH(3502, !1)
				}();
				return T
			}

			function Ze(y, c, s, f) {
				switch (c) {
					case "start":
						y.onStart(() => f(s && nt(s, "start", y)));
						break;
					case "done":
						y.onDone(() => f(s && nt(s, "done", y)));
						break;
					case "destroy":
						y.onDestroy(() => f(s && nt(s, "destroy", y)))
				}
			}

			function nt(y, c, s) {
				const T = mt(y.element, y.triggerName, y.fromState, y.toState, c || y.phaseName, s.totalTime ?? y.totalTime, !!s.disabled),
					W = y._data;
				return null != W && (T._data = W), T
			}

			function mt(y, c, s, f, E = "", T = 0, W) {
				return {
					element: y,
					triggerName: c,
					fromState: s,
					toState: f,
					phaseName: E,
					totalTime: T,
					disabled: !!W
				}
			}

			function _t(y, c, s) {
				let f = y.get(c);
				return f || y.set(c, f = s), f
			}

			function gt(y) {
				const c = y.indexOf(":");
				return [y.substring(1, c), y.slice(c + 1)]
			}
			const Dt = (() => typeof document > "u" ? null : document.documentElement)();

			function an(y) {
				const c = y.parentNode || y.host || null;
				return c === Dt ? null : c
			}
			let Nn = null,
				Vn = !1;

			function V(y, c) {
				for (; c;) {
					if (c === y) return !0;
					c = an(c)
				}
				return !1
			}

			function H(y, c, s) {
				if (s) return Array.from(y.querySelectorAll(c));
				const f = y.querySelector(c);
				return f ? [f] : []
			}
			let He = (() => {
					class y {
						validateStyleProperty(s) {
							return function Zn(y) {
								Nn || (Nn = function N() {
									return typeof document < "u" ? document.body : null
								}() || {}, Vn = !!Nn.style && "WebkitAppearance" in Nn.style);
								let c = !0;
								return Nn.style && ! function tn(y) {
									return "ebkit" == y.substring(1, 6)
								}(y) && (c = y in Nn.style, !c && Vn && (c = "Webkit" + y.charAt(0).toUpperCase() + y.slice(1) in Nn.style)), c
							}(s)
						}
						matchesElement(s, f) {
							return !1
						}
						containsElement(s, f) {
							return V(s, f)
						}
						getParentElement(s) {
							return an(s)
						}
						query(s, f, E) {
							return H(s, f, E)
						}
						computeStyle(s, f, E) {
							return E || ""
						}
						animate(s, f, E, T, W, q = [], be) {
							return new B.ZN(E, T)
						}
						static #e = this.\u0275fac = function(f) {
							return new(f || y)
						};
						static #t = this.\u0275prov = h.Yz7({
							token: y,
							factory: y.\u0275fac
						})
					}
					return y
				})(),
				Ue = (() => {
					class y {
						static #e = this.NOOP = new He
					}
					return y
				})();
			const Xe = 1e3,
				bt = "ng-enter",
				yt = "ng-leave",
				Mt = "ng-trigger",
				Et = ".ng-trigger",
				ln = "ng-animating",
				nn = ".ng-animating";

			function fn(y) {
				if ("number" == typeof y) return y;
				const c = y.match(/^(-?[\.\d]+)(m?s)/);
				return !c || c.length < 2 ? 0 : Ln(parseFloat(c[1]), c[2])
			}

			function Ln(y, c) {
				return "s" === c ? y * Xe : y
			}

			function yn(y, c, s) {
				return y.hasOwnProperty("duration") ? y : function Ui(y, c, s) {
					let E, T = 0,
						W = "";
					if ("string" == typeof y) {
						const q = y.match(/^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i);
						if (null === q) return c.push(ne()), {
							duration: 0,
							delay: 0,
							easing: ""
						};
						E = Ln(parseFloat(q[1]), q[2]);
						const be = q[3];
						null != be && (T = Ln(parseFloat(be), q[4]));
						const Fe = q[5];
						Fe && (W = Fe)
					} else E = y;
					if (!s) {
						let q = !1,
							be = c.length;
						E < 0 && (c.push(function ae() {
							return new h.vHH(3100, !1)
						}()), q = !0), T < 0 && (c.push(function ie() {
							return new h.vHH(3101, !1)
						}()), q = !0), q && c.splice(be, 0, ne())
					}
					return {
						duration: E,
						delay: T,
						easing: W
					}
				}(y, c, s)
			}

			function pn(y, c = {}) {
				return Object.keys(y).forEach(s => {
					c[s] = y[s]
				}), c
			}

			function xn(y) {
				const c = new Map;
				return Object.keys(y).forEach(s => {
					c.set(s, y[s])
				}), c
			}

			function vn(y, c = new Map, s) {
				if (s)
					for (let [f, E] of s) c.set(f, E);
				for (let [f, E] of y) c.set(f, E);
				return c
			}

			function In(y, c, s) {
				c.forEach((f, E) => {
					const T = Ct(E);
					s && !s.has(E) && s.set(E, y.style[T]), y.style[T] = f
				})
			}

			function zn(y, c) {
				c.forEach((s, f) => {
					const E = Ct(f);
					y.style[E] = ""
				})
			}

			function Le(y) {
				return Array.isArray(y) ? 1 == y.length ? y[0] : (0, B.vP)(y) : y
			}
			const I = new RegExp("{{\\s*(.+?)\\s*}}", "g");

			function x(y) {
				let c = [];
				if ("string" == typeof y) {
					let s;
					for (; s = I.exec(y);) c.push(s[1]);
					I.lastIndex = 0
				}
				return c
			}

			function R(y, c, s) {
				const f = y.toString(),
					E = f.replace(I, (T, W) => {
						let q = c[W];
						return null == q && (s.push(function Q(y) {
							return new h.vHH(3003, !1)
						}()), q = ""), q.toString()
					});
				return E == f ? y : E
			}

			function le(y) {
				const c = [];
				let s = y.next();
				for (; !s.done;) c.push(s.value), s = y.next();
				return c
			}
			const Ke = /-+([a-z0-9])/g;

			function Ct(y) {
				return y.replace(Ke, (...c) => c[1].toUpperCase())
			}

			function Z(y, c, s) {
				switch (c.type) {
					case 7:
						return y.visitTrigger(c, s);
					case 0:
						return y.visitState(c, s);
					case 1:
						return y.visitTransition(c, s);
					case 2:
						return y.visitSequence(c, s);
					case 3:
						return y.visitGroup(c, s);
					case 4:
						return y.visitAnimate(c, s);
					case 5:
						return y.visitKeyframes(c, s);
					case 6:
						return y.visitStyle(c, s);
					case 8:
						return y.visitReference(c, s);
					case 9:
						return y.visitAnimateChild(c, s);
					case 10:
						return y.visitAnimateRef(c, s);
					case 11:
						return y.visitQuery(c, s);
					case 12:
						return y.visitStagger(c, s);
					default:
						throw function de(y) {
							return new h.vHH(3004, !1)
						}()
				}
			}

			function _e(y, c) {
				return window.getComputedStyle(y)[c]
			}
			const ot = "*";

			function et(y, c) {
				const s = [];
				return "string" == typeof y ? y.split(/\s*,\s*/).forEach(f => function vt(y, c, s) {
					if (":" == y[0]) {
						const be = function Rt(y, c) {
							switch (y) {
								case ":enter":
									return "void => *";
								case ":leave":
									return "* => void";
								case ":increment":
									return (s, f) => parseFloat(f) > parseFloat(s);
								case ":decrement":
									return (s, f) => parseFloat(f) < parseFloat(s);
								default:
									return c.push(function We(y) {
										return new h.vHH(3016, !1)
									}()), "* => *"
							}
						}(y, s);
						if ("function" == typeof be) return void c.push(be);
						y = be
					}
					const f = y.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
					if (null == f || f.length < 4) return s.push(function Ae(y) {
						return new h.vHH(3015, !1)
					}()), c;
					const E = f[1],
						T = f[2],
						W = f[3];
					c.push(Bn(E, W));
					"<" == T[0] && !(E == ot && W == ot) && c.push(Bn(W, E))
				}(f, s, c)) : s.push(y), s
			}
			const Tn = new Set(["true", "1"]),
				hi = new Set(["false", "0"]);

			function Bn(y, c) {
				const s = Tn.has(y) || hi.has(y),
					f = Tn.has(c) || hi.has(c);
				return (E, T) => {
					let W = y == ot || y == E,
						q = c == ot || c == T;
					return !W && s && "boolean" == typeof E && (W = E ? Tn.has(y) : hi.has(y)), !q && f && "boolean" == typeof T && (q = T ? Tn.has(c) : hi.has(c)), W && q
				}
			}
			const Ri = new RegExp("s*:selfs*,?", "g");

			function ai(y, c, s, f) {
				return new dn(y).build(c, s, f)
			}
			class dn {
				constructor(c) {
					this._driver = c
				}
				build(c, s, f) {
					const E = new Xt(s);
					return this._resetContextStyleTimingState(E), Z(this, Le(c), E)
				}
				_resetContextStyleTimingState(c) {
					c.currentQuerySelector = "", c.collectedStyles = new Map, c.collectedStyles.set("", new Map), c.currentTime = 0
				}
				visitTrigger(c, s) {
					let f = s.queryCount = 0,
						E = s.depCount = 0;
					const T = [],
						W = [];
					return "@" == c.name.charAt(0) && s.errors.push(function xe() {
						return new h.vHH(3006, !1)
					}()), c.definitions.forEach(q => {
						if (this._resetContextStyleTimingState(s), 0 == q.type) {
							const be = q,
								Fe = be.name;
							Fe.toString().split(/\s*,\s*/).forEach(st => {
								be.name = st, T.push(this.visitState(be, s))
							}), be.name = Fe
						} else if (1 == q.type) {
							const be = this.visitTransition(q, s);
							f += be.queryCount, E += be.depCount, W.push(be)
						} else s.errors.push(function Ne() {
							return new h.vHH(3007, !1)
						}())
					}), {
						type: 7,
						name: c.name,
						states: T,
						transitions: W,
						queryCount: f,
						depCount: E,
						options: null
					}
				}
				visitState(c, s) {
					const f = this.visitStyle(c.styles, s),
						E = c.options && c.options.params || null;
					if (f.containsDynamicStyles) {
						const T = new Set,
							W = E || {};
						f.styles.forEach(q => {
							q instanceof Map && q.forEach(be => {
								x(be).forEach(Fe => {
									W.hasOwnProperty(Fe) || T.add(Fe)
								})
							})
						}), T.size && (le(T.values()), s.errors.push(function Ye(y, c) {
							return new h.vHH(3008, !1)
						}()))
					}
					return {
						type: 0,
						name: c.name,
						style: f,
						options: E ? {
							params: E
						} : null
					}
				}
				visitTransition(c, s) {
					s.queryCount = 0, s.depCount = 0;
					const f = Z(this, Le(c.animation), s);
					return {
						type: 1,
						matchers: et(c.expr, s.errors),
						animation: f,
						queryCount: s.queryCount,
						depCount: s.depCount,
						options: $n(c.options)
					}
				}
				visitSequence(c, s) {
					return {
						type: 2,
						steps: c.steps.map(f => Z(this, f, s)),
						options: $n(c.options)
					}
				}
				visitGroup(c, s) {
					const f = s.currentTime;
					let E = 0;
					const T = c.steps.map(W => {
						s.currentTime = f;
						const q = Z(this, W, s);
						return E = Math.max(E, s.currentTime), q
					});
					return s.currentTime = E, {
						type: 3,
						steps: T,
						options: $n(c.options)
					}
				}
				visitAnimate(c, s) {
					const f = function ci(y, c) {
						if (y.hasOwnProperty("duration")) return y;
						if ("number" == typeof y) return Gn(yn(y, c).duration, 0, "");
						const s = y;
						if (s.split(/\s+/).some(T => "{" == T.charAt(0) && "{" == T.charAt(1))) {
							const T = Gn(0, 0, "");
							return T.dynamic = !0, T.strValue = s, T
						}
						const E = yn(s, c);
						return Gn(E.duration, E.delay, E.easing)
					}(c.timings, s.errors);
					s.currentAnimateTimings = f;
					let E, T = c.styles ? c.styles : (0, B.oB)({});
					if (5 == T.type) E = this.visitKeyframes(T, s);
					else {
						let W = c.styles,
							q = !1;
						if (!W) {
							q = !0;
							const Fe = {};
							f.easing && (Fe.easing = f.easing), W = (0, B.oB)(Fe)
						}
						s.currentTime += f.duration + f.delay;
						const be = this.visitStyle(W, s);
						be.isEmptyStep = q, E = be
					}
					return s.currentAnimateTimings = null, {
						type: 4,
						timings: f,
						style: E,
						options: null
					}
				}
				visitStyle(c, s) {
					const f = this._makeStyleAst(c, s);
					return this._validateStyleAst(f, s), f
				}
				_makeStyleAst(c, s) {
					const f = [],
						E = Array.isArray(c.styles) ? c.styles : [c.styles];
					for (let q of E) "string" == typeof q ? q === B.l3 ? f.push(q) : s.errors.push(new h.vHH(3002, !1)) : f.push(xn(q));
					let T = !1,
						W = null;
					return f.forEach(q => {
						if (q instanceof Map && (q.has("easing") && (W = q.get("easing"), q.delete("easing")), !T))
							for (let be of q.values())
								if (be.toString().indexOf("{{") >= 0) {
									T = !0;
									break
								}
					}), {
						type: 6,
						styles: f,
						easing: W,
						offset: c.offset,
						containsDynamicStyles: T,
						options: null
					}
				}
				_validateStyleAst(c, s) {
					const f = s.currentAnimateTimings;
					let E = s.currentTime,
						T = s.currentTime;
					f && T > 0 && (T -= f.duration + f.delay), c.styles.forEach(W => {
						"string" != typeof W && W.forEach((q, be) => {
							const Fe = s.collectedStyles.get(s.currentQuerySelector),
								st = Fe.get(be);
							let ut = !0;
							st && (T != E && T >= st.startTime && E <= st.endTime && (s.errors.push(function lt(y, c, s, f, E) {
								return new h.vHH(3010, !1)
							}()), ut = !1), T = st.startTime), ut && Fe.set(be, {
								startTime: T,
								endTime: E
							}), s.options && function L(y, c, s) {
								const f = c.params || {},
									E = x(y);
								E.length && E.forEach(T => {
									f.hasOwnProperty(T) || s.push(function te(y) {
										return new h.vHH(3001, !1)
									}())
								})
							}(q, s.options, s.errors)
						})
					})
				}
				visitKeyframes(c, s) {
					const f = {
						type: 5,
						styles: [],
						options: null
					};
					if (!s.currentAnimateTimings) return s.errors.push(function qe() {
						return new h.vHH(3011, !1)
					}()), f;
					let T = 0;
					const W = [];
					let q = !1,
						be = !1,
						Fe = 0;
					const st = c.steps.map(di => {
						const fi = this._makeStyleAst(di, s);
						let Bi = null != fi.offset ? fi.offset : function Ni(y) {
								if ("string" == typeof y) return null;
								let c = null;
								if (Array.isArray(y)) y.forEach(s => {
									if (s instanceof Map && s.has("offset")) {
										const f = s;
										c = parseFloat(f.get("offset")), f.delete("offset")
									}
								});
								else if (y instanceof Map && y.has("offset")) {
									const s = y;
									c = parseFloat(s.get("offset")), s.delete("offset")
								}
								return c
							}(fi.styles),
							Ai = 0;
						return null != Bi && (T++, Ai = fi.offset = Bi), be = be || Ai < 0 || Ai > 1, q = q || Ai < Fe, Fe = Ai, W.push(Ai), fi
					});
					be && s.errors.push(function ce() {
						return new h.vHH(3012, !1)
					}()), q && s.errors.push(function $() {
						return new h.vHH(3200, !1)
					}());
					const ut = c.steps.length;
					let Lt = 0;
					T > 0 && T < ut ? s.errors.push(function Ie() {
						return new h.vHH(3202, !1)
					}()) : 0 == T && (Lt = 1 / (ut - 1));
					const Ft = ut - 1,
						St = s.currentTime,
						Vt = s.currentAnimateTimings,
						Sn = Vt.duration;
					return st.forEach((di, fi) => {
						const Bi = Lt > 0 ? fi == Ft ? 1 : Lt * fi : W[fi],
							Ai = Bi * Sn;
						s.currentTime = St + Vt.delay + Ai, Vt.duration = Ai, this._validateStyleAst(di, s), di.offset = Bi, f.styles.push(di)
					}), f
				}
				visitReference(c, s) {
					return {
						type: 8,
						animation: Z(this, Le(c.animation), s),
						options: $n(c.options)
					}
				}
				visitAnimateChild(c, s) {
					return s.depCount++, {
						type: 9,
						options: $n(c.options)
					}
				}
				visitAnimateRef(c, s) {
					return {
						type: 10,
						animation: this.visitReference(c.animation, s),
						options: $n(c.options)
					}
				}
				visitQuery(c, s) {
					const f = s.currentQuerySelector,
						E = c.options || {};
					s.queryCount++, s.currentQuery = c;
					const [T, W] = function Di(y) {
						const c = !!y.split(/\s*,\s*/).find(s => ":self" == s);
						return c && (y = y.replace(Ri, "")), y = y.replace(/@\*/g, Et).replace(/@\w+/g, s => Et + "-" + s.slice(1)).replace(/:animating/g, nn), [y, c]
					}(c.selector);
					s.currentQuerySelector = f.length ? f + " " + T : T, _t(s.collectedStyles, s.currentQuerySelector, new Map);
					const q = Z(this, Le(c.animation), s);
					return s.currentQuery = null, s.currentQuerySelector = f, {
						type: 11,
						selector: T,
						limit: E.limit || 0,
						optional: !!E.optional,
						includeSelf: W,
						animation: q,
						originalSelector: c.selector,
						options: $n(c.options)
					}
				}
				visitStagger(c, s) {
					s.currentQuery || s.errors.push(function he() {
						return new h.vHH(3013, !1)
					}());
					const f = "full" === c.timings ? {
						duration: 0,
						delay: 0,
						easing: "full"
					} : yn(c.timings, s.errors, !0);
					return {
						type: 12,
						animation: Z(this, Le(c.animation), s),
						timings: f,
						options: null
					}
				}
			}
			class Xt {
				constructor(c) {
					this.errors = c, this.queryCount = 0, this.depCount = 0, this.currentTransition = null, this.currentQuery = null, this.currentQuerySelector = null, this.currentAnimateTimings = null, this.currentTime = 0, this.collectedStyles = new Map, this.options = null, this.unsupportedCSSPropertiesFound = new Set
				}
			}

			function $n(y) {
				return y ? (y = pn(y)).params && (y.params = function pi(y) {
					return y ? pn(y) : null
				}(y.params)) : y = {}, y
			}

			function Gn(y, c, s) {
				return {
					duration: y,
					delay: c,
					easing: s
				}
			}

			function Ei(y, c, s, f, E, T, W = null, q = !1) {
				return {
					type: 1,
					element: y,
					keyframes: c,
					preStyleProps: s,
					postStyleProps: f,
					duration: E,
					delay: T,
					totalTime: E + T,
					easing: W,
					subTimeline: q
				}
			}
			class Vi {
				constructor() {
					this._map = new Map
				}
				get(c) {
					return this._map.get(c) || []
				}
				append(c, s) {
					let f = this._map.get(c);
					f || this._map.set(c, f = []), f.push(...s)
				}
				has(c) {
					return this._map.has(c)
				}
				clear() {
					this._map.clear()
				}
			}
			const hs = new RegExp(":enter", "g"),
				ps = new RegExp(":leave", "g");

			function Ko(y, c, s, f, E, T = new Map, W = new Map, q, be, Fe = []) {
				return (new Qr).buildKeyframes(y, c, s, f, E, T, W, q, be, Fe)
			}
			class Qr {
				buildKeyframes(c, s, f, E, T, W, q, be, Fe, st = []) {
					Fe = Fe || new Vi;
					const ut = new mi(c, s, Fe, E, T, st, []);
					ut.options = be;
					const Lt = be.delay ? fn(be.delay) : 0;
					ut.currentTimeline.delayNextStep(Lt), ut.currentTimeline.setStyles([W], null, ut.errors, be), Z(this, f, ut);
					const Ft = ut.timelines.filter(St => St.containsAnimation());
					if (Ft.length && q.size) {
						let St;
						for (let Vt = Ft.length - 1; Vt >= 0; Vt--) {
							const Sn = Ft[Vt];
							if (Sn.element === s) {
								St = Sn;
								break
							}
						}
						St && !St.allowOnlyTimelineStyles() && St.setStyles([q], null, ut.errors, be)
					}
					return Ft.length ? Ft.map(St => St.buildKeyframes()) : [Ei(s, [], [], [], 0, Lt, "", !1)]
				}
				visitTrigger(c, s) {}
				visitState(c, s) {}
				visitTransition(c, s) {}
				visitAnimateChild(c, s) {
					const f = s.subInstructions.get(s.element);
					if (f) {
						const E = s.createSubContext(c.options),
							T = s.currentTimeline.currentTime,
							W = this._visitSubInstructions(f, E, E.options);
						T != W && s.transformIntoNewTimeline(W)
					}
					s.previousNode = c
				}
				visitAnimateRef(c, s) {
					const f = s.createSubContext(c.options);
					f.transformIntoNewTimeline(), this._applyAnimationRefDelays([c.options, c.animation.options], s, f), this.visitReference(c.animation, f), s.transformIntoNewTimeline(f.currentTimeline.currentTime), s.previousNode = c
				}
				_applyAnimationRefDelays(c, s, f) {
					for (const E of c) {
						const T = E?.delay;
						if (T) {
							const W = "number" == typeof T ? T : fn(R(T, E?.params ?? {}, s.errors));
							f.delayNextStep(W)
						}
					}
				}
				_visitSubInstructions(c, s, f) {
					let T = s.currentTimeline.currentTime;
					const W = null != f.duration ? fn(f.duration) : null,
						q = null != f.delay ? fn(f.delay) : null;
					return 0 !== W && c.forEach(be => {
						const Fe = s.appendInstructionToTimeline(be, W, q);
						T = Math.max(T, Fe.duration + Fe.delay)
					}), T
				}
				visitReference(c, s) {
					s.updateOptions(c.options, !0), Z(this, c.animation, s), s.previousNode = c
				}
				visitSequence(c, s) {
					const f = s.subContextCount;
					let E = s;
					const T = c.options;
					if (T && (T.params || T.delay) && (E = s.createSubContext(T), E.transformIntoNewTimeline(), null != T.delay)) {
						6 == E.previousNode.type && (E.currentTimeline.snapshotCurrentStyles(), E.previousNode = Zo);
						const W = fn(T.delay);
						E.delayNextStep(W)
					}
					c.steps.length && (c.steps.forEach(W => Z(this, W, E)), E.currentTimeline.applyStylesToKeyframe(), E.subContextCount > f && E.transformIntoNewTimeline()), s.previousNode = c
				}
				visitGroup(c, s) {
					const f = [];
					let E = s.currentTimeline.currentTime;
					const T = c.options && c.options.delay ? fn(c.options.delay) : 0;
					c.steps.forEach(W => {
						const q = s.createSubContext(c.options);
						T && q.delayNextStep(T), Z(this, W, q), E = Math.max(E, q.currentTimeline.currentTime), f.push(q.currentTimeline)
					}), f.forEach(W => s.currentTimeline.mergeTimelineCollectedStyles(W)), s.transformIntoNewTimeline(E), s.previousNode = c
				}
				_visitTiming(c, s) {
					if (c.dynamic) {
						const f = c.strValue;
						return yn(s.params ? R(f, s.params, s.errors) : f, s.errors)
					}
					return {
						duration: c.duration,
						delay: c.delay,
						easing: c.easing
					}
				}
				visitAnimate(c, s) {
					const f = s.currentAnimateTimings = this._visitTiming(c.timings, s),
						E = s.currentTimeline;
					f.delay && (s.incrementTime(f.delay), E.snapshotCurrentStyles());
					const T = c.style;
					5 == T.type ? this.visitKeyframes(T, s) : (s.incrementTime(f.duration), this.visitStyle(T, s), E.applyStylesToKeyframe()), s.currentAnimateTimings = null, s.previousNode = c
				}
				visitStyle(c, s) {
					const f = s.currentTimeline,
						E = s.currentAnimateTimings;
					!E && f.hasCurrentStyleProperties() && f.forwardFrame();
					const T = E && E.easing || c.easing;
					c.isEmptyStep ? f.applyEmptyStep(T) : f.setStyles(c.styles, T, s.errors, s.options), s.previousNode = c
				}
				visitKeyframes(c, s) {
					const f = s.currentAnimateTimings,
						E = s.currentTimeline.duration,
						T = f.duration,
						q = s.createSubContext().currentTimeline;
					q.easing = f.easing, c.styles.forEach(be => {
						q.forwardTime((be.offset || 0) * T), q.setStyles(be.styles, be.easing, s.errors, s.options), q.applyStylesToKeyframe()
					}), s.currentTimeline.mergeTimelineCollectedStyles(q), s.transformIntoNewTimeline(E + T), s.previousNode = c
				}
				visitQuery(c, s) {
					const f = s.currentTimeline.currentTime,
						E = c.options || {},
						T = E.delay ? fn(E.delay) : 0;
					T && (6 === s.previousNode.type || 0 == f && s.currentTimeline.hasCurrentStyleProperties()) && (s.currentTimeline.snapshotCurrentStyles(), s.previousNode = Zo);
					let W = f;
					const q = s.invokeQuery(c.selector, c.originalSelector, c.limit, c.includeSelf, !!E.optional, s.errors);
					s.currentQueryTotal = q.length;
					let be = null;
					q.forEach((Fe, st) => {
						s.currentQueryIndex = st;
						const ut = s.createSubContext(c.options, Fe);
						T && ut.delayNextStep(T), Fe === s.element && (be = ut.currentTimeline), Z(this, c.animation, ut), ut.currentTimeline.applyStylesToKeyframe(), W = Math.max(W, ut.currentTimeline.currentTime)
					}), s.currentQueryIndex = 0, s.currentQueryTotal = 0, s.transformIntoNewTimeline(W), be && (s.currentTimeline.mergeTimelineCollectedStyles(be), s.currentTimeline.snapshotCurrentStyles()), s.previousNode = c
				}
				visitStagger(c, s) {
					const f = s.parentContext,
						E = s.currentTimeline,
						T = c.timings,
						W = Math.abs(T.duration),
						q = W * (s.currentQueryTotal - 1);
					let be = W * s.currentQueryIndex;
					switch (T.duration < 0 ? "reverse" : T.easing) {
						case "reverse":
							be = q - be;
							break;
						case "full":
							be = f.currentStaggerTime
					}
					const st = s.currentTimeline;
					be && st.delayNextStep(be);
					const ut = st.currentTime;
					Z(this, c.animation, s), s.previousNode = c, f.currentStaggerTime = E.currentTime - ut + (E.startTime - f.currentTimeline.startTime)
				}
			}
			const Zo = {};
			class mi {
				constructor(c, s, f, E, T, W, q, be) {
					this._driver = c, this.element = s, this.subInstructions = f, this._enterClassName = E, this._leaveClassName = T, this.errors = W, this.timelines = q, this.parentContext = null, this.currentAnimateTimings = null, this.previousNode = Zo, this.subContextCount = 0, this.options = {}, this.currentQueryIndex = 0, this.currentQueryTotal = 0, this.currentStaggerTime = 0, this.currentTimeline = be || new Qo(this._driver, s, 0), q.push(this.currentTimeline)
				}
				get params() {
					return this.options.params
				}
				updateOptions(c, s) {
					if (!c) return;
					const f = c;
					let E = this.options;
					null != f.duration && (E.duration = fn(f.duration)), null != f.delay && (E.delay = fn(f.delay));
					const T = f.params;
					if (T) {
						let W = E.params;
						W || (W = this.options.params = {}), Object.keys(T).forEach(q => {
							(!s || !W.hasOwnProperty(q)) && (W[q] = R(T[q], W, this.errors))
						})
					}
				}
				_copyOptions() {
					const c = {};
					if (this.options) {
						const s = this.options.params;
						if (s) {
							const f = c.params = {};
							Object.keys(s).forEach(E => {
								f[E] = s[E]
							})
						}
					}
					return c
				}
				createSubContext(c = null, s, f) {
					const E = s || this.element,
						T = new mi(this._driver, E, this.subInstructions, this._enterClassName, this._leaveClassName, this.errors, this.timelines, this.currentTimeline.fork(E, f || 0));
					return T.previousNode = this.previousNode, T.currentAnimateTimings = this.currentAnimateTimings, T.options = this._copyOptions(), T.updateOptions(c), T.currentQueryIndex = this.currentQueryIndex, T.currentQueryTotal = this.currentQueryTotal, T.parentContext = this, this.subContextCount++, T
				}
				transformIntoNewTimeline(c) {
					return this.previousNode = Zo, this.currentTimeline = this.currentTimeline.fork(this.element, c), this.timelines.push(this.currentTimeline), this.currentTimeline
				}
				appendInstructionToTimeline(c, s, f) {
					const E = {
							duration: s ?? c.duration,
							delay: this.currentTimeline.currentTime + (f ?? 0) + c.delay,
							easing: ""
						},
						T = new Xr(this._driver, c.element, c.keyframes, c.preStyleProps, c.postStyleProps, E, c.stretchStartingKeyframe);
					return this.timelines.push(T), E
				}
				incrementTime(c) {
					this.currentTimeline.forwardTime(this.currentTimeline.duration + c)
				}
				delayNextStep(c) {
					c > 0 && this.currentTimeline.delayNextStep(c)
				}
				invokeQuery(c, s, f, E, T, W) {
					let q = [];
					if (E && q.push(this.element), c.length > 0) {
						c = (c = c.replace(hs, "." + this._enterClassName)).replace(ps, "." + this._leaveClassName);
						let Fe = this._driver.query(this.element, c, 1 != f);
						0 !== f && (Fe = f < 0 ? Fe.slice(Fe.length + f, Fe.length) : Fe.slice(0, f)), q.push(...Fe)
					}
					return !T && 0 == q.length && W.push(function ue(y) {
						return new h.vHH(3014, !1)
					}()), q
				}
			}
			class Qo {
				constructor(c, s, f, E) {
					this._driver = c, this.element = s, this.startTime = f, this._elementTimelineStylesLookup = E, this.duration = 0, this.easing = null, this._previousKeyframe = new Map, this._currentKeyframe = new Map, this._keyframes = new Map, this._styleSummary = new Map, this._localTimelineStyles = new Map, this._pendingStyles = new Map, this._backFill = new Map, this._currentEmptyStepKeyframe = null, this._elementTimelineStylesLookup || (this._elementTimelineStylesLookup = new Map), this._globalTimelineStyles = this._elementTimelineStylesLookup.get(s), this._globalTimelineStyles || (this._globalTimelineStyles = this._localTimelineStyles, this._elementTimelineStylesLookup.set(s, this._localTimelineStyles)), this._loadKeyframe()
				}
				containsAnimation() {
					switch (this._keyframes.size) {
						case 0:
							return !1;
						case 1:
							return this.hasCurrentStyleProperties();
						default:
							return !0
					}
				}
				hasCurrentStyleProperties() {
					return this._currentKeyframe.size > 0
				}
				get currentTime() {
					return this.startTime + this.duration
				}
				delayNextStep(c) {
					const s = 1 === this._keyframes.size && this._pendingStyles.size;
					this.duration || s ? (this.forwardTime(this.currentTime + c), s && this.snapshotCurrentStyles()) : this.startTime += c
				}
				fork(c, s) {
					return this.applyStylesToKeyframe(), new Qo(this._driver, c, s || this.currentTime, this._elementTimelineStylesLookup)
				}
				_loadKeyframe() {
					this._currentKeyframe && (this._previousKeyframe = this._currentKeyframe), this._currentKeyframe = this._keyframes.get(this.duration), this._currentKeyframe || (this._currentKeyframe = new Map, this._keyframes.set(this.duration, this._currentKeyframe))
				}
				forwardFrame() {
					this.duration += 1, this._loadKeyframe()
				}
				forwardTime(c) {
					this.applyStylesToKeyframe(), this.duration = c, this._loadKeyframe()
				}
				_updateStyle(c, s) {
					this._localTimelineStyles.set(c, s), this._globalTimelineStyles.set(c, s), this._styleSummary.set(c, {
						time: this.currentTime,
						value: s
					})
				}
				allowOnlyTimelineStyles() {
					return this._currentEmptyStepKeyframe !== this._currentKeyframe
				}
				applyEmptyStep(c) {
					c && this._previousKeyframe.set("easing", c);
					for (let [s, f] of this._globalTimelineStyles) this._backFill.set(s, f || B.l3), this._currentKeyframe.set(s, B.l3);
					this._currentEmptyStepKeyframe = this._currentKeyframe
				}
				setStyles(c, s, f, E) {
					s && this._previousKeyframe.set("easing", s);
					const T = E && E.params || {},
						W = function Cr(y, c) {
							const s = new Map;
							let f;
							return y.forEach(E => {
								if ("*" === E) {
									f = f || c.keys();
									for (let T of f) s.set(T, B.l3)
								} else vn(E, s)
							}), s
						}(c, this._globalTimelineStyles);
					for (let [q, be] of W) {
						const Fe = R(be, T, f);
						this._pendingStyles.set(q, Fe), this._localTimelineStyles.has(q) || this._backFill.set(q, this._globalTimelineStyles.get(q) ?? B.l3), this._updateStyle(q, Fe)
					}
				}
				applyStylesToKeyframe() {
					0 != this._pendingStyles.size && (this._pendingStyles.forEach((c, s) => {
						this._currentKeyframe.set(s, c)
					}), this._pendingStyles.clear(), this._localTimelineStyles.forEach((c, s) => {
						this._currentKeyframe.has(s) || this._currentKeyframe.set(s, c)
					}))
				}
				snapshotCurrentStyles() {
					for (let [c, s] of this._localTimelineStyles) this._pendingStyles.set(c, s), this._updateStyle(c, s)
				}
				getFinalKeyframe() {
					return this._keyframes.get(this.duration)
				}
				get properties() {
					const c = [];
					for (let s in this._currentKeyframe) c.push(s);
					return c
				}
				mergeTimelineCollectedStyles(c) {
					c._styleSummary.forEach((s, f) => {
						const E = this._styleSummary.get(f);
						(!E || s.time > E.time) && this._updateStyle(f, s.value)
					})
				}
				buildKeyframes() {
					this.applyStylesToKeyframe();
					const c = new Set,
						s = new Set,
						f = 1 === this._keyframes.size && 0 === this.duration;
					let E = [];
					this._keyframes.forEach((q, be) => {
						const Fe = vn(q, new Map, this._backFill);
						Fe.forEach((st, ut) => {
							st === B.k1 ? c.add(ut) : st === B.l3 && s.add(ut)
						}), f || Fe.set("offset", be / this.duration), E.push(Fe)
					});
					const T = c.size ? le(c.values()) : [],
						W = s.size ? le(s.values()) : [];
					if (f) {
						const q = E[0],
							be = new Map(q);
						q.set("offset", 0), be.set("offset", 1), E = [q, be]
					}
					return Ei(this.element, E, T, W, this.duration, this.startTime, this.easing, !1)
				}
			}
			class Xr extends Qo {
				constructor(c, s, f, E, T, W, q = !1) {
					super(c, s, W.delay), this.keyframes = f, this.preStyleProps = E, this.postStyleProps = T, this._stretchStartingKeyframe = q, this.timings = {
						duration: W.duration,
						delay: W.delay,
						easing: W.easing
					}
				}
				containsAnimation() {
					return this.keyframes.length > 1
				}
				buildKeyframes() {
					let c = this.keyframes,
						{
							delay: s,
							duration: f,
							easing: E
						} = this.timings;
					if (this._stretchStartingKeyframe && s) {
						const T = [],
							W = f + s,
							q = s / W,
							be = vn(c[0]);
						be.set("offset", 0), T.push(be);
						const Fe = vn(c[0]);
						Fe.set("offset", No(q)), T.push(Fe);
						const st = c.length - 1;
						for (let ut = 1; ut <= st; ut++) {
							let Lt = vn(c[ut]);
							const Ft = Lt.get("offset");
							Lt.set("offset", No((s + Ft * f) / W)), T.push(Lt)
						}
						f = W, s = 0, E = "", c = T
					}
					return Ei(this.element, c, this.preStyleProps, this.postStyleProps, f, s, E, !0)
				}
			}

			function No(y, c = 3) {
				const s = Math.pow(10, c - 1);
				return Math.round(y * s) / s
			}
			class wr {}
			const Jr = new Set(["width", "height", "minWidth", "minHeight", "maxWidth", "maxHeight", "left", "top", "bottom", "right", "fontSize", "outlineWidth", "outlineOffset", "paddingTop", "paddingLeft", "paddingBottom", "paddingRight", "marginTop", "marginLeft", "marginBottom", "marginRight", "borderRadius", "borderWidth", "borderTopWidth", "borderLeftWidth", "borderRightWidth", "borderBottomWidth", "textIndent", "perspective"]);
			class Xo extends wr {
				normalizePropertyName(c, s) {
					return Ct(c)
				}
				normalizeStyleValue(c, s, f, E) {
					let T = "";
					const W = f.toString().trim();
					if (Jr.has(s) && 0 !== f && "0" !== f)
						if ("number" == typeof f) T = "px";
						else {
							const q = f.match(/^[+-]?[\d\.]+([a-z]*)$/);
							q && 0 == q[1].length && E.push(function ye(y, c) {
								return new h.vHH(3005, !1)
							}())
						} return W + T
				}
			}

			function ko(y, c, s, f, E, T, W, q, be, Fe, st, ut, Lt) {
				return {
					type: 0,
					element: y,
					triggerName: c,
					isRemovalTransition: E,
					fromState: s,
					fromStyles: T,
					toState: f,
					toStyles: W,
					timelines: q,
					queriedElements: be,
					preStyleProps: Fe,
					postStyleProps: st,
					totalTime: ut,
					errors: Lt
				}
			}
			const wi = {};
			class Ht {
				constructor(c, s, f) {
					this._triggerName = c, this.ast = s, this._stateStyles = f
				}
				match(c, s, f, E) {
					return function Qn(y, c, s, f, E) {
						return y.some(T => T(c, s, f, E))
					}(this.ast.matchers, c, s, f, E)
				}
				buildStyles(c, s, f) {
					let E = this._stateStyles.get("*");
					return void 0 !== c && (E = this._stateStyles.get(c?.toString()) || E), E ? E.buildStyles(s, f) : new Map
				}
				build(c, s, f, E, T, W, q, be, Fe, st) {
					const ut = [],
						Lt = this.ast.options && this.ast.options.params || wi,
						St = this.buildStyles(f, q && q.params || wi, ut),
						Vt = be && be.params || wi,
						Sn = this.buildStyles(E, Vt, ut),
						di = new Set,
						fi = new Map,
						Bi = new Map,
						Ai = "void" === E,
						Ts = {
							params: Co(Vt, Lt),
							delay: this.ast.options?.delay
						},
						so = st ? [] : Ko(c, s, this.ast.animation, T, W, St, Sn, Ts, Fe, ut);
					let oi = 0;
					if (so.forEach(Ji => {
							oi = Math.max(Ji.duration + Ji.delay, oi)
						}), ut.length) return ko(s, this._triggerName, f, E, Ai, St, Sn, [], [], fi, Bi, oi, ut);
					so.forEach(Ji => {
						const bo = Ji.element,
							As = _t(fi, bo, new Set);
						Ji.preStyleProps.forEach(mr => As.add(mr));
						const Qs = _t(Bi, bo, new Set);
						Ji.postStyleProps.forEach(mr => Qs.add(mr)), bo !== s && di.add(bo)
					});
					const $o = le(di.values());
					return ko(s, this._triggerName, f, E, Ai, St, Sn, so, $o, fi, Bi, oi)
				}
			}

			function Co(y, c) {
				const s = pn(c);
				for (const f in y) y.hasOwnProperty(f) && null != y[f] && (s[f] = y[f]);
				return s
			}
			class kn {
				constructor(c, s, f) {
					this.styles = c, this.defaultParams = s, this.normalizer = f
				}
				buildStyles(c, s) {
					const f = new Map,
						E = pn(this.defaultParams);
					return Object.keys(c).forEach(T => {
						const W = c[T];
						null !== W && (E[T] = W)
					}), this.styles.styles.forEach(T => {
						"string" != typeof T && T.forEach((W, q) => {
							W && (W = R(W, E, s));
							const be = this.normalizer.normalizePropertyName(q, s);
							W = this.normalizer.normalizeStyleValue(q, be, W, s), f.set(q, W)
						})
					}), f
				}
			}
			class qr {
				constructor(c, s, f) {
					this.name = c, this.ast = s, this._normalizer = f, this.transitionFactories = [], this.states = new Map, s.states.forEach(E => {
						this.states.set(E.name, new kn(E.style, E.options && E.options.params || {}, f))
					}), Jo(this.states, "true", "1"), Jo(this.states, "false", "0"), s.transitions.forEach(E => {
						this.transitionFactories.push(new Ht(c, E, this.states))
					}), this.fallbackTransition = function no(y, c, s) {
						return new Ht(y, {
							type: 1,
							animation: {
								type: 2,
								steps: [],
								options: null
							},
							matchers: [(W, q) => !0],
							options: null,
							queryCount: 0,
							depCount: 0
						}, c)
					}(c, this.states)
				}
				get containsQueries() {
					return this.ast.queryCount > 0
				}
				matchTransition(c, s, f, E) {
					return this.transitionFactories.find(W => W.match(c, s, f, E)) || null
				}
				matchStyles(c, s, f) {
					return this.fallbackTransition.buildStyles(c, s, f)
				}
			}

			function Jo(y, c, s) {
				y.has(c) ? y.has(s) || y.set(s, y.get(c)) : y.has(s) && y.set(c, y.get(s))
			}
			const xr = new Vi;
			class Dn {
				constructor(c, s, f) {
					this.bodyNode = c, this._driver = s, this._normalizer = f, this._animations = new Map, this._playersById = new Map, this.players = []
				}
				register(c, s) {
					const f = [],
						T = ai(this._driver, s, f, []);
					if (f.length) throw function wn(y) {
						return new h.vHH(3503, !1)
					}();
					this._animations.set(c, T)
				}
				_buildPlayer(c, s, f) {
					const E = c.element,
						T = Se(this._normalizer, c.keyframes, s, f);
					return this._driver.animate(E, T, c.duration, c.delay, c.easing, [], !0)
				}
				create(c, s, f = {}) {
					const E = [],
						T = this._animations.get(c);
					let W;
					const q = new Map;
					if (T ? (W = Ko(this._driver, s, T, bt, yt, new Map, new Map, f, xr, E), W.forEach(st => {
							const ut = _t(q, st.element, new Map);
							st.postStyleProps.forEach(Lt => ut.set(Lt, null))
						})) : (E.push(function Un() {
							return new h.vHH(3300, !1)
						}()), W = []), E.length) throw function Qt(y) {
						return new h.vHH(3504, !1)
					}();
					q.forEach((st, ut) => {
						st.forEach((Lt, Ft) => {
							st.set(Ft, this._driver.computeStyle(ut, Ft, B.l3))
						})
					});
					const Fe = z(W.map(st => {
						const ut = q.get(st.element);
						return this._buildPlayer(st, new Map, ut)
					}));
					return this._playersById.set(c, Fe), Fe.onDestroy(() => this.destroy(c)), this.players.push(Fe), Fe
				}
				destroy(c) {
					const s = this._getPlayer(c);
					s.destroy(), this._playersById.delete(c);
					const f = this.players.indexOf(s);
					f >= 0 && this.players.splice(f, 1)
				}
				_getPlayer(c) {
					const s = this._playersById.get(c);
					if (!s) throw function Mn(y) {
						return new h.vHH(3301, !1)
					}();
					return s
				}
				listen(c, s, f, E) {
					const T = mt(s, "", "", "");
					return Ze(this._getPlayer(c), f, T, E), () => {}
				}
				command(c, s, f, E) {
					if ("register" == f) return void this.register(c, E[0]);
					if ("create" == f) return void this.create(c, s, E[0] || {});
					const T = this._getPlayer(c);
					switch (f) {
						case "play":
							T.play();
							break;
						case "pause":
							T.pause();
							break;
						case "reset":
							T.reset();
							break;
						case "restart":
							T.restart();
							break;
						case "finish":
							T.finish();
							break;
						case "init":
							T.init();
							break;
						case "setPosition":
							T.setPosition(parseFloat(E[0]));
							break;
						case "destroy":
							this.destroy(c)
					}
				}
			}
			const at = "ng-animate-queued",
				rn = "ng-animate-disabled",
				ho = [],
				mn = {
					namespaceId: "",
					setForRemoval: !1,
					setForMove: !1,
					hasAnimation: !1,
					removedBeforeQueried: !1
				},
				io = {
					namespaceId: "",
					setForMove: !1,
					setForRemoval: !1,
					hasAnimation: !1,
					removedBeforeQueried: !0
				},
				Xn = "__ng_removed";
			class It {
				get params() {
					return this.options.params
				}
				constructor(c, s = "") {
					this.namespaceId = s;
					const f = c && c.hasOwnProperty("value");
					if (this.value = function Zi(y) {
							return y ?? null
						}(f ? c.value : c), f) {
						const T = pn(c);
						delete T.value, this.options = T
					} else this.options = {};
					this.options.params || (this.options.params = {})
				}
				absorbOptions(c) {
					const s = c.params;
					if (s) {
						const f = this.options.params;
						Object.keys(s).forEach(E => {
							null == f[E] && (f[E] = s[E])
						})
					}
				}
			}
			const ki = "void",
				qo = new It(ki);
			class Fo {
				constructor(c, s, f) {
					this.id = c, this.hostElement = s, this._engine = f, this.players = [], this._triggers = new Map, this._queue = [], this._elementListeners = new Map, this._hostClassName = "ng-tns-" + c, Jn(s, this._hostClassName)
				}
				listen(c, s, f, E) {
					if (!this._triggers.has(s)) throw function Ee(y, c) {
						return new h.vHH(3302, !1)
					}();
					if (null == f || 0 == f.length) throw function we(y) {
						return new h.vHH(3303, !1)
					}();
					if (! function ms(y) {
							return "start" == y || "done" == y
						}(f)) throw function ve(y, c) {
						return new h.vHH(3400, !1)
					}();
					const T = _t(this._elementListeners, c, []),
						W = {
							name: s,
							phase: f,
							callback: E
						};
					T.push(W);
					const q = _t(this._engine.statesByElement, c, new Map);
					return q.has(s) || (Jn(c, Mt), Jn(c, Mt + "-" + s), q.set(s, qo)), () => {
						this._engine.afterFlush(() => {
							const be = T.indexOf(W);
							be >= 0 && T.splice(be, 1), this._triggers.has(s) || q.delete(s)
						})
					}
				}
				register(c, s) {
					return !this._triggers.has(c) && (this._triggers.set(c, s), !0)
				}
				_getTrigger(c) {
					const s = this._triggers.get(c);
					if (!s) throw function Te(y) {
						return new h.vHH(3401, !1)
					}();
					return s
				}
				trigger(c, s, f, E = !0) {
					const T = this._getTrigger(s),
						W = new oo(this.id, s, c);
					let q = this._engine.statesByElement.get(c);
					q || (Jn(c, Mt), Jn(c, Mt + "-" + s), this._engine.statesByElement.set(c, q = new Map));
					let be = q.get(s);
					const Fe = new It(f, this.id);
					if (!(f && f.hasOwnProperty("value")) && be && Fe.absorbOptions(be.options), q.set(s, Fe), be || (be = qo), Fe.value !== ki && be.value === Fe.value) {
						if (! function _i(y, c) {
								const s = Object.keys(y),
									f = Object.keys(c);
								if (s.length != f.length) return !1;
								for (let E = 0; E < s.length; E++) {
									const T = s[E];
									if (!c.hasOwnProperty(T) || y[T] !== c[T]) return !1
								}
								return !0
							}(be.params, Fe.params)) {
							const Vt = [],
								Sn = T.matchStyles(be.value, be.params, Vt),
								di = T.matchStyles(Fe.value, Fe.params, Vt);
							Vt.length ? this._engine.reportError(Vt) : this._engine.afterFlush(() => {
								zn(c, Sn), In(c, di)
							})
						}
						return
					}
					const Lt = _t(this._engine.playersByElement, c, []);
					Lt.forEach(Vt => {
						Vt.namespaceId == this.id && Vt.triggerName == s && Vt.queued && Vt.destroy()
					});
					let Ft = T.matchTransition(be.value, Fe.value, c, Fe.params),
						St = !1;
					if (!Ft) {
						if (!E) return;
						Ft = T.fallbackTransition, St = !0
					}
					return this._engine.totalQueuedPlayers++, this._queue.push({
						element: c,
						triggerName: s,
						transition: Ft,
						fromState: be,
						toState: Fe,
						player: W,
						isFallbackTransition: St
					}), St || (Jn(c, at), W.onStart(() => {
						Bt(c, at)
					})), W.onDone(() => {
						let Vt = this.players.indexOf(W);
						Vt >= 0 && this.players.splice(Vt, 1);
						const Sn = this._engine.playersByElement.get(c);
						if (Sn) {
							let di = Sn.indexOf(W);
							di >= 0 && Sn.splice(di, 1)
						}
					}), this.players.push(W), Lt.push(W), W
				}
				deregister(c) {
					this._triggers.delete(c), this._engine.statesByElement.forEach(s => s.delete(c)), this._elementListeners.forEach((s, f) => {
						this._elementListeners.set(f, s.filter(E => E.name != c))
					})
				}
				clearElementCache(c) {
					this._engine.statesByElement.delete(c), this._elementListeners.delete(c);
					const s = this._engine.playersByElement.get(c);
					s && (s.forEach(f => f.destroy()), this._engine.playersByElement.delete(c))
				}
				_signalRemovalForInnerTriggers(c, s) {
					const f = this._engine.driver.query(c, Et, !0);
					f.forEach(E => {
						if (E[Xn]) return;
						const T = this._engine.fetchNamespacesByElement(E);
						T.size ? T.forEach(W => W.triggerLeaveAnimation(E, s, !1, !0)) : this.clearElementCache(E)
					}), this._engine.afterFlushAnimationsDone(() => f.forEach(E => this.clearElementCache(E)))
				}
				triggerLeaveAnimation(c, s, f, E) {
					const T = this._engine.statesByElement.get(c),
						W = new Map;
					if (T) {
						const q = [];
						if (T.forEach((be, Fe) => {
								if (W.set(Fe, be.value), this._triggers.has(Fe)) {
									const st = this.trigger(c, Fe, ki, E);
									st && q.push(st)
								}
							}), q.length) return this._engine.markElementAsRemoved(this.id, c, !0, s, W), f && z(q).onDone(() => this._engine.processLeaveNode(c)), !0
					}
					return !1
				}
				prepareLeaveAnimationListeners(c) {
					const s = this._elementListeners.get(c),
						f = this._engine.statesByElement.get(c);
					if (s && f) {
						const E = new Set;
						s.forEach(T => {
							const W = T.name;
							if (E.has(W)) return;
							E.add(W);
							const be = this._triggers.get(W).fallbackTransition,
								Fe = f.get(W) || qo,
								st = new It(ki),
								ut = new oo(this.id, W, c);
							this._engine.totalQueuedPlayers++, this._queue.push({
								element: c,
								triggerName: W,
								transition: be,
								fromState: Fe,
								toState: st,
								player: ut,
								isFallbackTransition: !0
							})
						})
					}
				}
				removeNode(c, s) {
					const f = this._engine;
					if (c.childElementCount && this._signalRemovalForInnerTriggers(c, s), this.triggerLeaveAnimation(c, s, !0)) return;
					let E = !1;
					if (f.totalAnimations) {
						const T = f.players.length ? f.playersByQueriedElement.get(c) : [];
						if (T && T.length) E = !0;
						else {
							let W = c;
							for (; W = W.parentNode;)
								if (f.statesByElement.get(W)) {
									E = !0;
									break
								}
						}
					}
					if (this.prepareLeaveAnimationListeners(c), E) f.markElementAsRemoved(this.id, c, !1, s);
					else {
						const T = c[Xn];
						(!T || T === mn) && (f.afterFlush(() => this.clearElementCache(c)), f.destroyInnerAnimations(c), f._onRemovalComplete(c, s))
					}
				}
				insertNode(c, s) {
					Jn(c, this._hostClassName)
				}
				drainQueuedTransitions(c) {
					const s = [];
					return this._queue.forEach(f => {
						const E = f.player;
						if (E.destroyed) return;
						const T = f.element,
							W = this._elementListeners.get(T);
						W && W.forEach(q => {
							if (q.name == f.triggerName) {
								const be = mt(T, f.triggerName, f.fromState.value, f.toState.value);
								be._data = c, Ze(f.player, q.phase, be, q.callback)
							}
						}), E.markedForDestroy ? this._engine.afterFlush(() => {
							E.destroy()
						}) : s.push(f)
					}), this._queue = [], s.sort((f, E) => {
						const T = f.transition.ast.depCount,
							W = E.transition.ast.depCount;
						return 0 == T || 0 == W ? T - W : this._engine.driver.containsElement(f.element, E.element) ? 1 : -1
					})
				}
				destroy(c) {
					this.players.forEach(s => s.destroy()), this._signalRemovalForInnerTriggers(this.hostElement, c)
				}
			}
			class An {
				_onRemovalComplete(c, s) {
					this.onRemovalComplete(c, s)
				}
				constructor(c, s, f) {
					this.bodyNode = c, this.driver = s, this._normalizer = f, this.players = [], this.newHostElements = new Map, this.playersByElement = new Map, this.playersByQueriedElement = new Map, this.statesByElement = new Map, this.disabledNodes = new Set, this.totalAnimations = 0, this.totalQueuedPlayers = 0, this._namespaceLookup = {}, this._namespaceList = [], this._flushFns = [], this._whenQuietFns = [], this.namespacesByHostElement = new Map, this.collectedEnterElements = [], this.collectedLeaveElements = [], this.onRemovalComplete = (E, T) => {}
				}
				get queuedPlayers() {
					const c = [];
					return this._namespaceList.forEach(s => {
						s.players.forEach(f => {
							f.queued && c.push(f)
						})
					}), c
				}
				createNamespace(c, s) {
					const f = new Fo(c, s, this);
					return this.bodyNode && this.driver.containsElement(this.bodyNode, s) ? this._balanceNamespaceList(f, s) : (this.newHostElements.set(s, f), this.collectEnterElement(s)), this._namespaceLookup[c] = f
				}
				_balanceNamespaceList(c, s) {
					const f = this._namespaceList,
						E = this.namespacesByHostElement;
					if (f.length - 1 >= 0) {
						let W = !1,
							q = this.driver.getParentElement(s);
						for (; q;) {
							const be = E.get(q);
							if (be) {
								const Fe = f.indexOf(be);
								f.splice(Fe + 1, 0, c), W = !0;
								break
							}
							q = this.driver.getParentElement(q)
						}
						W || f.unshift(c)
					} else f.push(c);
					return E.set(s, c), c
				}
				register(c, s) {
					let f = this._namespaceLookup[c];
					return f || (f = this.createNamespace(c, s)), f
				}
				registerTrigger(c, s, f) {
					let E = this._namespaceLookup[c];
					E && E.register(s, f) && this.totalAnimations++
				}
				destroy(c, s) {
					c && (this.afterFlush(() => {}), this.afterFlushAnimationsDone(() => {
						const f = this._fetchNamespace(c);
						this.namespacesByHostElement.delete(f.hostElement);
						const E = this._namespaceList.indexOf(f);
						E >= 0 && this._namespaceList.splice(E, 1), f.destroy(s), delete this._namespaceLookup[c]
					}))
				}
				_fetchNamespace(c) {
					return this._namespaceLookup[c]
				}
				fetchNamespacesByElement(c) {
					const s = new Set,
						f = this.statesByElement.get(c);
					if (f)
						for (let E of f.values())
							if (E.namespaceId) {
								const T = this._fetchNamespace(E.namespaceId);
								T && s.add(T)
							} return s
				}
				trigger(c, s, f, E) {
					if (Mo(s)) {
						const T = this._fetchNamespace(c);
						if (T) return T.trigger(s, f, E), !0
					}
					return !1
				}
				insertNode(c, s, f, E) {
					if (!Mo(s)) return;
					const T = s[Xn];
					if (T && T.setForRemoval) {
						T.setForRemoval = !1, T.setForMove = !0;
						const W = this.collectedLeaveElements.indexOf(s);
						W >= 0 && this.collectedLeaveElements.splice(W, 1)
					}
					if (c) {
						const W = this._fetchNamespace(c);
						W && W.insertNode(s, f)
					}
					E && this.collectEnterElement(s)
				}
				collectEnterElement(c) {
					this.collectedEnterElements.push(c)
				}
				markElementAsDisabled(c, s) {
					s ? this.disabledNodes.has(c) || (this.disabledNodes.add(c), Jn(c, rn)) : this.disabledNodes.has(c) && (this.disabledNodes.delete(c), Bt(c, rn))
				}
				removeNode(c, s, f) {
					if (Mo(s)) {
						const E = c ? this._fetchNamespace(c) : null;
						E ? E.removeNode(s, f) : this.markElementAsRemoved(c, s, !1, f);
						const T = this.namespacesByHostElement.get(s);
						T && T.id !== c && T.removeNode(s, f)
					} else this._onRemovalComplete(s, f)
				}
				markElementAsRemoved(c, s, f, E, T) {
					this.collectedLeaveElements.push(s), s[Xn] = {
						namespaceId: c,
						setForRemoval: E,
						hasAnimation: f,
						removedBeforeQueried: !1,
						previousTriggersValues: T
					}
				}
				listen(c, s, f, E, T) {
					return Mo(s) ? this._fetchNamespace(c).listen(s, f, E, T) : () => {}
				}
				_buildInstruction(c, s, f, E, T) {
					return c.transition.build(this.driver, c.element, c.fromState.value, c.toState.value, f, E, c.fromState.options, c.toState.options, s, T)
				}
				destroyInnerAnimations(c) {
					let s = this.driver.query(c, Et, !0);
					s.forEach(f => this.destroyActiveAnimationsForElement(f)), 0 != this.playersByQueriedElement.size && (s = this.driver.query(c, nn, !0), s.forEach(f => this.finishActiveQueriedAnimationOnElement(f)))
				}
				destroyActiveAnimationsForElement(c) {
					const s = this.playersByElement.get(c);
					s && s.forEach(f => {
						f.queued ? f.markedForDestroy = !0 : f.destroy()
					})
				}
				finishActiveQueriedAnimationOnElement(c) {
					const s = this.playersByQueriedElement.get(c);
					s && s.forEach(f => f.finish())
				}
				whenRenderingDone() {
					return new Promise(c => {
						if (this.players.length) return z(this.players).onDone(() => c());
						c()
					})
				}
				processLeaveNode(c) {
					const s = c[Xn];
					if (s && s.setForRemoval) {
						if (c[Xn] = mn, s.namespaceId) {
							this.destroyInnerAnimations(c);
							const f = this._fetchNamespace(s.namespaceId);
							f && f.clearElementCache(c)
						}
						this._onRemovalComplete(c, s.setForRemoval)
					}
					c.classList?.contains(rn) && this.markElementAsDisabled(c, !1), this.driver.query(c, ".ng-animate-disabled", !0).forEach(f => {
						this.markElementAsDisabled(f, !1)
					})
				}
				flush(c = -1) {
					let s = [];
					if (this.newHostElements.size && (this.newHostElements.forEach((f, E) => this._balanceNamespaceList(f, E)), this.newHostElements.clear()), this.totalAnimations && this.collectedEnterElements.length)
						for (let f = 0; f < this.collectedEnterElements.length; f++) Jn(this.collectedEnterElements[f], "ng-star-inserted");
					if (this._namespaceList.length && (this.totalQueuedPlayers || this.collectedLeaveElements.length)) {
						const f = [];
						try {
							s = this._flushAnimations(f, c)
						} finally {
							for (let E = 0; E < f.length; E++) f[E]()
						}
					} else
						for (let f = 0; f < this.collectedLeaveElements.length; f++) this.processLeaveNode(this.collectedLeaveElements[f]);
					if (this.totalQueuedPlayers = 0, this.collectedEnterElements.length = 0, this.collectedLeaveElements.length = 0, this._flushFns.forEach(f => f()), this._flushFns = [], this._whenQuietFns.length) {
						const f = this._whenQuietFns;
						this._whenQuietFns = [], s.length ? z(s).onDone(() => {
							f.forEach(E => E())
						}) : f.forEach(E => E())
					}
				}
				reportError(c) {
					throw function me(y) {
						return new h.vHH(3402, !1)
					}()
				}
				_flushAnimations(c, s) {
					const f = new Vi,
						E = [],
						T = new Map,
						W = [],
						q = new Map,
						be = new Map,
						Fe = new Map,
						st = new Set;
					this.disabledNodes.forEach(pt => {
						st.add(pt);
						const Tt = this.driver.query(pt, ".ng-animate-queued", !0);
						for (let At = 0; At < Tt.length; At++) st.add(Tt[At])
					});
					const ut = this.bodyNode,
						Lt = Array.from(this.statesByElement.keys()),
						Ft = xo(Lt, this.collectedEnterElements),
						St = new Map;
					let Vt = 0;
					Ft.forEach((pt, Tt) => {
						const At = bt + Vt++;
						St.set(Tt, At), pt.forEach(en => Jn(en, At))
					});
					const Sn = [],
						di = new Set,
						fi = new Set;
					for (let pt = 0; pt < this.collectedLeaveElements.length; pt++) {
						const Tt = this.collectedLeaveElements[pt],
							At = Tt[Xn];
						At && At.setForRemoval && (Sn.push(Tt), di.add(Tt), At.hasAnimation ? this.driver.query(Tt, ".ng-star-inserted", !0).forEach(en => di.add(en)) : fi.add(Tt))
					}
					const Bi = new Map,
						Ai = xo(Lt, Array.from(di));
					Ai.forEach((pt, Tt) => {
						const At = yt + Vt++;
						Bi.set(Tt, At), pt.forEach(en => Jn(en, At))
					}), c.push(() => {
						Ft.forEach((pt, Tt) => {
							const At = St.get(Tt);
							pt.forEach(en => Bt(en, At))
						}), Ai.forEach((pt, Tt) => {
							const At = Bi.get(Tt);
							pt.forEach(en => Bt(en, At))
						}), Sn.forEach(pt => {
							this.processLeaveNode(pt)
						})
					});
					const Ts = [],
						so = [];
					for (let pt = this._namespaceList.length - 1; pt >= 0; pt--) this._namespaceList[pt].drainQueuedTransitions(s).forEach(At => {
						const en = At.player,
							ri = At.element;
						if (Ts.push(en), this.collectedEnterElements.length) {
							const vi = ri[Xn];
							if (vi && vi.setForMove) {
								if (vi.previousTriggersValues && vi.previousTriggersValues.has(At.triggerName)) {
									const Vr = vi.previousTriggersValues.get(At.triggerName),
										Hi = this.statesByElement.get(At.element);
									if (Hi && Hi.has(At.triggerName)) {
										const Oo = Hi.get(At.triggerName);
										Oo.value = Vr, Hi.set(At.triggerName, Oo)
									}
								}
								return void en.destroy()
							}
						}
						const qi = !ut || !this.driver.containsElement(ut, ri),
							ji = Bi.get(ri),
							gr = St.get(ri),
							Rn = this._buildInstruction(At, f, gr, ji, qi);
						if (Rn.errors && Rn.errors.length) return void so.push(Rn);
						if (qi) return en.onStart(() => zn(ri, Rn.fromStyles)), en.onDestroy(() => In(ri, Rn.toStyles)), void E.push(en);
						if (At.isFallbackTransition) return en.onStart(() => zn(ri, Rn.fromStyles)), en.onDestroy(() => In(ri, Rn.toStyles)), void E.push(en);
						const Xa = [];
						Rn.timelines.forEach(vi => {
							vi.stretchStartingKeyframe = !0, this.disabledNodes.has(vi.element) || Xa.push(vi)
						}), Rn.timelines = Xa, f.append(ri, Rn.timelines), W.push({
							instruction: Rn,
							player: en,
							element: ri
						}), Rn.queriedElements.forEach(vi => _t(q, vi, []).push(en)), Rn.preStyleProps.forEach((vi, Vr) => {
							if (vi.size) {
								let Hi = be.get(Vr);
								Hi || be.set(Vr, Hi = new Set), vi.forEach((Oo, Ja) => Hi.add(Ja))
							}
						}), Rn.postStyleProps.forEach((vi, Vr) => {
							let Hi = Fe.get(Vr);
							Hi || Fe.set(Vr, Hi = new Set), vi.forEach((Oo, Ja) => Hi.add(Ja))
						})
					});
					if (so.length) {
						const pt = [];
						so.forEach(Tt => {
							pt.push(function Re(y, c) {
								return new h.vHH(3505, !1)
							}())
						}), Ts.forEach(Tt => Tt.destroy()), this.reportError(pt)
					}
					const oi = new Map,
						$o = new Map;
					W.forEach(pt => {
						const Tt = pt.element;
						f.has(Tt) && ($o.set(Tt, Tt), this._beforeAnimationBuild(pt.player.namespaceId, pt.instruction, oi))
					}), E.forEach(pt => {
						const Tt = pt.element;
						this._getPreviousPlayers(Tt, !1, pt.namespaceId, pt.triggerName, null).forEach(en => {
							_t(oi, Tt, []).push(en), en.destroy()
						})
					});
					const Ji = Sn.filter(pt => tr(pt, be, Fe)),
						bo = new Map;
					xi(bo, this.driver, fi, Fe, B.l3).forEach(pt => {
						tr(pt, be, Fe) && Ji.push(pt)
					});
					const Qs = new Map;
					Ft.forEach((pt, Tt) => {
						xi(Qs, this.driver, new Set(pt), be, B.k1)
					}), Ji.forEach(pt => {
						const Tt = bo.get(pt),
							At = Qs.get(pt);
						bo.set(pt, new Map([...Tt?.entries() ?? [], ...At?.entries() ?? []]))
					});
					const mr = [],
						Qa = [],
						Wc = {};
					W.forEach(pt => {
						const {
							element: Tt,
							player: At,
							instruction: en
						} = pt;
						if (f.has(Tt)) {
							if (st.has(Tt)) return At.onDestroy(() => In(Tt, en.toStyles)), At.disabled = !0, At.overrideTotalTime(en.totalTime), void E.push(At);
							let ri = Wc;
							if ($o.size > 1) {
								let ji = Tt;
								const gr = [];
								for (; ji = ji.parentNode;) {
									const Rn = $o.get(ji);
									if (Rn) {
										ri = Rn;
										break
									}
									gr.push(ji)
								}
								gr.forEach(Rn => $o.set(Rn, ri))
							}
							const qi = this._buildAnimation(At.namespaceId, en, oi, T, Qs, bo);
							if (At.setRealPlayer(qi), ri === Wc) mr.push(At);
							else {
								const ji = this.playersByElement.get(ri);
								ji && ji.length && (At.parentPlayer = z(ji)), E.push(At)
							}
						} else zn(Tt, en.fromStyles), At.onDestroy(() => In(Tt, en.toStyles)), Qa.push(At), st.has(Tt) && E.push(At)
					}), Qa.forEach(pt => {
						const Tt = T.get(pt.element);
						if (Tt && Tt.length) {
							const At = z(Tt);
							pt.setRealPlayer(At)
						}
					}), E.forEach(pt => {
						pt.parentPlayer ? pt.syncPlayerEvents(pt.parentPlayer) : pt.destroy()
					});
					for (let pt = 0; pt < Sn.length; pt++) {
						const Tt = Sn[pt],
							At = Tt[Xn];
						if (Bt(Tt, yt), At && At.hasAnimation) continue;
						let en = [];
						if (q.size) {
							let qi = q.get(Tt);
							qi && qi.length && en.push(...qi);
							let ji = this.driver.query(Tt, nn, !0);
							for (let gr = 0; gr < ji.length; gr++) {
								let Rn = q.get(ji[gr]);
								Rn && Rn.length && en.push(...Rn)
							}
						}
						const ri = en.filter(qi => !qi.destroyed);
						ri.length ? es(this, Tt, ri) : this.processLeaveNode(Tt)
					}
					return Sn.length = 0, mr.forEach(pt => {
						this.players.push(pt), pt.onDone(() => {
							pt.destroy();
							const Tt = this.players.indexOf(pt);
							this.players.splice(Tt, 1)
						}), pt.play()
					}), mr
				}
				afterFlush(c) {
					this._flushFns.push(c)
				}
				afterFlushAnimationsDone(c) {
					this._whenQuietFns.push(c)
				}
				_getPreviousPlayers(c, s, f, E, T) {
					let W = [];
					if (s) {
						const q = this.playersByQueriedElement.get(c);
						q && (W = q)
					} else {
						const q = this.playersByElement.get(c);
						if (q) {
							const be = !T || T == ki;
							q.forEach(Fe => {
								Fe.queued || !be && Fe.triggerName != E || W.push(Fe)
							})
						}
					}
					return (f || E) && (W = W.filter(q => !(f && f != q.namespaceId || E && E != q.triggerName))), W
				}
				_beforeAnimationBuild(c, s, f) {
					const T = s.element,
						W = s.isRemovalTransition ? void 0 : c,
						q = s.isRemovalTransition ? void 0 : s.triggerName;
					for (const be of s.timelines) {
						const Fe = be.element,
							st = Fe !== T,
							ut = _t(f, Fe, []);
						this._getPreviousPlayers(Fe, st, W, q, s.toState).forEach(Ft => {
							const St = Ft.getRealPlayer();
							St.beforeDestroy && St.beforeDestroy(), Ft.destroy(), ut.push(Ft)
						})
					}
					zn(T, s.fromStyles)
				}
				_buildAnimation(c, s, f, E, T, W) {
					const q = s.triggerName,
						be = s.element,
						Fe = [],
						st = new Set,
						ut = new Set,
						Lt = s.timelines.map(St => {
							const Vt = St.element;
							st.add(Vt);
							const Sn = Vt[Xn];
							if (Sn && Sn.removedBeforeQueried) return new B.ZN(St.duration, St.delay);
							const di = Vt !== be,
								fi = function Yn(y) {
									const c = [];
									return er(y, c), c
								}((f.get(Vt) || ho).map(oi => oi.getRealPlayer())).filter(oi => !!oi.element && oi.element === Vt),
								Bi = T.get(Vt),
								Ai = W.get(Vt),
								Ts = Se(this._normalizer, St.keyframes, Bi, Ai),
								so = this._buildPlayer(St, Ts, fi);
							if (St.subTimeline && E && ut.add(Vt), di) {
								const oi = new oo(c, q, Vt);
								oi.setRealPlayer(so), Fe.push(oi)
							}
							return so
						});
					Fe.forEach(St => {
						_t(this.playersByQueriedElement, St.element, []).push(St), St.onDone(() => function wo(y, c, s) {
							let f = y.get(c);
							if (f) {
								if (f.length) {
									const E = f.indexOf(s);
									f.splice(E, 1)
								}
								0 == f.length && y.delete(c)
							}
							return f
						}(this.playersByQueriedElement, St.element, St))
					}), st.forEach(St => Jn(St, ln));
					const Ft = z(Lt);
					return Ft.onDestroy(() => {
						st.forEach(St => Bt(St, ln)), In(be, s.toStyles)
					}), ut.forEach(St => {
						_t(E, St, []).push(Ft)
					}), Ft
				}
				_buildPlayer(c, s, f) {
					return s.length > 0 ? this.driver.animate(c.element, s, c.duration, c.delay, c.easing, f) : new B.ZN(c.duration, c.delay)
				}
			}
			class oo {
				constructor(c, s, f) {
					this.namespaceId = c, this.triggerName = s, this.element = f, this._player = new B.ZN, this._containsRealPlayer = !1, this._queuedCallbacks = new Map, this.destroyed = !1, this.parentPlayer = null, this.markedForDestroy = !1, this.disabled = !1, this.queued = !0, this.totalTime = 0
				}
				setRealPlayer(c) {
					this._containsRealPlayer || (this._player = c, this._queuedCallbacks.forEach((s, f) => {
						s.forEach(E => Ze(c, f, void 0, E))
					}), this._queuedCallbacks.clear(), this._containsRealPlayer = !0, this.overrideTotalTime(c.totalTime), this.queued = !1)
				}
				getRealPlayer() {
					return this._player
				}
				overrideTotalTime(c) {
					this.totalTime = c
				}
				syncPlayerEvents(c) {
					const s = this._player;
					s.triggerCallback && c.onStart(() => s.triggerCallback("start")), c.onDone(() => this.finish()), c.onDestroy(() => this.destroy())
				}
				_queueEvent(c, s) {
					_t(this._queuedCallbacks, c, []).push(s)
				}
				onDone(c) {
					this.queued && this._queueEvent("done", c), this._player.onDone(c)
				}
				onStart(c) {
					this.queued && this._queueEvent("start", c), this._player.onStart(c)
				}
				onDestroy(c) {
					this.queued && this._queueEvent("destroy", c), this._player.onDestroy(c)
				}
				init() {
					this._player.init()
				}
				hasStarted() {
					return !this.queued && this._player.hasStarted()
				}
				play() {
					!this.queued && this._player.play()
				}
				pause() {
					!this.queued && this._player.pause()
				}
				restart() {
					!this.queued && this._player.restart()
				}
				finish() {
					this._player.finish()
				}
				destroy() {
					this.destroyed = !0, this._player.destroy()
				}
				reset() {
					!this.queued && this._player.reset()
				}
				setPosition(c) {
					this.queued || this._player.setPosition(c)
				}
				getPosition() {
					return this.queued ? 0 : this._player.getPosition()
				}
				triggerCallback(c) {
					const s = this._player;
					s.triggerCallback && s.triggerCallback(c)
				}
			}

			function Mo(y) {
				return y && 1 === y.nodeType
			}

			function gi(y, c) {
				const s = y.style.display;
				return y.style.display = c ?? "none", s
			}

			function xi(y, c, s, f, E) {
				const T = [];
				s.forEach(be => T.push(gi(be)));
				const W = [];
				f.forEach((be, Fe) => {
					const st = new Map;
					be.forEach(ut => {
						const Lt = c.computeStyle(Fe, ut, E);
						st.set(ut, Lt), (!Lt || 0 == Lt.length) && (Fe[Xn] = io, W.push(Fe))
					}), y.set(Fe, st)
				});
				let q = 0;
				return s.forEach(be => gi(be, T[q++])), W
			}

			function xo(y, c) {
				const s = new Map;
				if (y.forEach(q => s.set(q, [])), 0 == c.length) return s;
				const E = new Set(c),
					T = new Map;

				function W(q) {
					if (!q) return 1;
					let be = T.get(q);
					if (be) return be;
					const Fe = q.parentNode;
					return be = s.has(Fe) ? Fe : E.has(Fe) ? 1 : W(Fe), T.set(q, be), be
				}
				return c.forEach(q => {
					const be = W(q);
					1 !== be && s.get(be).push(q)
				}), s
			}

			function Jn(y, c) {
				y.classList?.add(c)
			}

			function Bt(y, c) {
				y.classList?.remove(c)
			}

			function es(y, c, s) {
				z(s).onDone(() => y.processLeaveNode(c))
			}

			function er(y, c) {
				for (let s = 0; s < y.length; s++) {
					const f = y[s];
					f instanceof B.ZE ? er(f.players, c) : c.push(f)
				}
			}

			function tr(y, c, s) {
				const f = s.get(y);
				if (!f) return !1;
				let E = c.get(y);
				return E ? f.forEach(T => E.add(T)) : c.set(y, f), s.delete(y), !0
			}
			class Qi {
				constructor(c, s, f) {
					this.bodyNode = c, this._driver = s, this._normalizer = f, this._triggerCache = {}, this.onRemovalComplete = (E, T) => {}, this._transitionEngine = new An(c, s, f), this._timelineEngine = new Dn(c, s, f), this._transitionEngine.onRemovalComplete = (E, T) => this.onRemovalComplete(E, T)
				}
				registerTrigger(c, s, f, E, T) {
					const W = c + "-" + E;
					let q = this._triggerCache[W];
					if (!q) {
						const be = [],
							st = ai(this._driver, T, be, []);
						if (be.length) throw function wt(y, c) {
							return new h.vHH(3404, !1)
						}();
						q = function Mr(y, c, s) {
							return new qr(y, c, s)
						}(E, st, this._normalizer), this._triggerCache[W] = q
					}
					this._transitionEngine.registerTrigger(s, E, q)
				}
				register(c, s) {
					this._transitionEngine.register(c, s)
				}
				destroy(c, s) {
					this._transitionEngine.destroy(c, s)
				}
				onInsert(c, s, f, E) {
					this._transitionEngine.insertNode(c, s, f, E)
				}
				onRemove(c, s, f) {
					this._transitionEngine.removeNode(c, s, f)
				}
				disableAnimations(c, s) {
					this._transitionEngine.markElementAsDisabled(c, s)
				}
				process(c, s, f, E) {
					if ("@" == f.charAt(0)) {
						const [T, W] = gt(f);
						this._timelineEngine.command(T, s, W, E)
					} else this._transitionEngine.trigger(c, s, f, E)
				}
				listen(c, s, f, E, T) {
					if ("@" == f.charAt(0)) {
						const [W, q] = gt(f);
						return this._timelineEngine.listen(W, s, q, T)
					}
					return this._transitionEngine.listen(c, s, f, E, T)
				}
				flush(c = -1) {
					this._transitionEngine.flush(c)
				}
				get players() {
					return [...this._transitionEngine.players, ...this._timelineEngine.players]
				}
				whenRenderingDone() {
					return this._transitionEngine.whenRenderingDone()
				}
				afterFlushAnimationsDone(c) {
					this._transitionEngine.afterFlushAnimationsDone(c)
				}
			}
			let Kn = (() => {
				class y {
					static #e = this.initialStylesByElement = new WeakMap;
					constructor(s, f, E) {
						this._element = s, this._startStyles = f, this._endStyles = E, this._state = 0;
						let T = y.initialStylesByElement.get(s);
						T || y.initialStylesByElement.set(s, T = new Map), this._initialStyles = T
					}
					start() {
						this._state < 1 && (this._startStyles && In(this._element, this._startStyles, this._initialStyles), this._state = 1)
					}
					finish() {
						this.start(), this._state < 2 && (In(this._element, this._initialStyles), this._endStyles && (In(this._element, this._endStyles), this._endStyles = null), this._state = 1)
					}
					destroy() {
						this.finish(), this._state < 3 && (y.initialStylesByElement.delete(this._element), this._startStyles && (zn(this._element, this._startStyles), this._endStyles = null), this._endStyles && (zn(this._element, this._endStyles), this._endStyles = null), In(this._element, this._initialStyles), this._state = 3)
					}
				}
				return y
			})();

			function Lo(y) {
				let c = null;
				return y.forEach((s, f) => {
					(function li(y) {
						return "display" === y || "position" === y
					})(f) && (c = c || new Map, c.set(f, s))
				}), c
			}
			class qn {
				constructor(c, s, f, E) {
					this.element = c, this.keyframes = s, this.options = f, this._specialStyles = E, this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._initialized = !1, this._finished = !1, this._started = !1, this._destroyed = !1, this._originalOnDoneFns = [], this._originalOnStartFns = [], this.time = 0, this.parentPlayer = null, this.currentSnapshot = new Map, this._duration = f.duration, this._delay = f.delay || 0, this.time = this._duration + this._delay
				}
				_onFinish() {
					this._finished || (this._finished = !0, this._onDoneFns.forEach(c => c()), this._onDoneFns = [])
				}
				init() {
					this._buildPlayer(), this._preparePlayerBeforeStart()
				}
				_buildPlayer() {
					if (this._initialized) return;
					this._initialized = !0;
					const c = this.keyframes;
					this.domPlayer = this._triggerWebAnimation(this.element, c, this.options), this._finalKeyframe = c.length ? c[c.length - 1] : new Map;
					const s = () => this._onFinish();
					this.domPlayer.addEventListener("finish", s), this.onDestroy(() => {
						this.domPlayer.removeEventListener("finish", s)
					})
				}
				_preparePlayerBeforeStart() {
					this._delay ? this._resetDomPlayerState() : this.domPlayer.pause()
				}
				_convertKeyframesToObject(c) {
					const s = [];
					return c.forEach(f => {
						s.push(Object.fromEntries(f))
					}), s
				}
				_triggerWebAnimation(c, s, f) {
					return c.animate(this._convertKeyframesToObject(s), f)
				}
				onStart(c) {
					this._originalOnStartFns.push(c), this._onStartFns.push(c)
				}
				onDone(c) {
					this._originalOnDoneFns.push(c), this._onDoneFns.push(c)
				}
				onDestroy(c) {
					this._onDestroyFns.push(c)
				}
				play() {
					this._buildPlayer(), this.hasStarted() || (this._onStartFns.forEach(c => c()), this._onStartFns = [], this._started = !0, this._specialStyles && this._specialStyles.start()), this.domPlayer.play()
				}
				pause() {
					this.init(), this.domPlayer.pause()
				}
				finish() {
					this.init(), this._specialStyles && this._specialStyles.finish(), this._onFinish(), this.domPlayer.finish()
				}
				reset() {
					this._resetDomPlayerState(), this._destroyed = !1, this._finished = !1, this._started = !1, this._onStartFns = this._originalOnStartFns, this._onDoneFns = this._originalOnDoneFns
				}
				_resetDomPlayerState() {
					this.domPlayer && this.domPlayer.cancel()
				}
				restart() {
					this.reset(), this.play()
				}
				hasStarted() {
					return this._started
				}
				destroy() {
					this._destroyed || (this._destroyed = !0, this._resetDomPlayerState(), this._onFinish(), this._specialStyles && this._specialStyles.destroy(), this._onDestroyFns.forEach(c => c()), this._onDestroyFns = [])
				}
				setPosition(c) {
					void 0 === this.domPlayer && this.init(), this.domPlayer.currentTime = c * this.time
				}
				getPosition() {
					return +(this.domPlayer.currentTime ?? 0) / this.time
				}
				get totalTime() {
					return this._delay + this._duration
				}
				beforeDestroy() {
					const c = new Map;
					this.hasStarted() && this._finalKeyframe.forEach((f, E) => {
						"offset" !== E && c.set(E, this._finished ? f : _e(this.element, E))
					}), this.currentSnapshot = c
				}
				triggerCallback(c) {
					const s = "start" === c ? this._onStartFns : this._onDoneFns;
					s.forEach(f => f()), s.length = 0
				}
			}
			class po {
				validateStyleProperty(c) {
					return !0
				}
				validateAnimatableStyleProperty(c) {
					return !0
				}
				matchesElement(c, s) {
					return !1
				}
				containsElement(c, s) {
					return V(c, s)
				}
				getParentElement(c) {
					return an(c)
				}
				query(c, s, f) {
					return H(c, s, f)
				}
				computeStyle(c, s, f) {
					return window.getComputedStyle(c)[s]
				}
				animate(c, s, f, E, T, W = []) {
					const be = {
						duration: f,
						delay: E,
						fill: 0 == E ? "both" : "forwards"
					};
					T && (be.easing = T);
					const Fe = new Map,
						st = W.filter(Ft => Ft instanceof qn);
					(function ee(y, c) {
						return 0 === y || 0 === c
					})(f, E) && st.forEach(Ft => {
						Ft.currentSnapshot.forEach((St, Vt) => Fe.set(Vt, St))
					});
					let ut = function si(y) {
						return y.length ? y[0] instanceof Map ? y : y.map(c => xn(c)) : []
					}(s).map(Ft => vn(Ft));
					ut = function k(y, c, s) {
						if (s.size && c.length) {
							let f = c[0],
								E = [];
							if (s.forEach((T, W) => {
									f.has(W) || E.push(W), f.set(W, T)
								}), E.length)
								for (let T = 1; T < c.length; T++) {
									let W = c[T];
									E.forEach(q => W.set(q, _e(y, q)))
								}
						}
						return c
					}(c, ut, Fe);
					const Lt = function nr(y, c) {
						let s = null,
							f = null;
						return Array.isArray(c) && c.length ? (s = Lo(c[0]), c.length > 1 && (f = Lo(c[c.length - 1]))) : c instanceof Map && (s = Lo(c)), s || f ? new Kn(y, s, f) : null
					}(c, ut);
					return new qn(c, ut, be, Lt)
				}
			}
			var gn = v(6814);
			let ir = (() => {
				class y extends B._j {
					constructor(s, f) {
						super(), this._nextAnimationId = 0, this._renderer = s.createRenderer(f.body, {
							id: "0",
							encapsulation: h.ifc.None,
							styles: [],
							data: {
								animation: []
							}
						})
					}
					build(s) {
						const f = this._nextAnimationId.toString();
						this._nextAnimationId++;
						const E = Array.isArray(s) ? (0, B.vP)(s) : s;
						return Bo(this._renderer, null, f, "register", [E]), new Fi(f, this._renderer)
					}
					static #e = this.\u0275fac = function(f) {
						return new(f || y)(h.LFG(h.FYo), h.LFG(gn.K0))
					};
					static #t = this.\u0275prov = h.Yz7({
						token: y,
						factory: y.\u0275fac
					})
				}
				return y
			})();
			class Fi extends B.LC {
				constructor(c, s) {
					super(), this._id = c, this._renderer = s
				}
				create(c, s) {
					return new mo(this._id, c, s || {}, this._renderer)
				}
			}
			class mo {
				constructor(c, s, f, E) {
					this.id = c, this.element = s, this._renderer = E, this.parentPlayer = null, this._started = !1, this.totalTime = 0, this._command("create", f)
				}
				_listen(c, s) {
					return this._renderer.listen(this.element, `@@${this.id}:${c}`, s)
				}
				_command(c, ...s) {
					return Bo(this._renderer, this.element, this.id, c, s)
				}
				onDone(c) {
					this._listen("done", c)
				}
				onStart(c) {
					this._listen("start", c)
				}
				onDestroy(c) {
					this._listen("destroy", c)
				}
				init() {
					this._command("init")
				}
				hasStarted() {
					return this._started
				}
				play() {
					this._command("play"), this._started = !0
				}
				pause() {
					this._command("pause")
				}
				restart() {
					this._command("restart")
				}
				finish() {
					this._command("finish")
				}
				destroy() {
					this._command("destroy")
				}
				reset() {
					this._command("reset"), this._started = !1
				}
				setPosition(c) {
					this._command("setPosition", c)
				}
				getPosition() {
					return this._renderer.engine.players[+this.id]?.getPosition() ?? 0
				}
			}

			function Bo(y, c, s, f, E) {
				return y.setProperty(c, `@@${s}:${f}`, E)
			}
			const gs = "@.disabled";
			let _s = (() => {
				class y {
					constructor(s, f, E) {
						this.delegate = s, this.engine = f, this._zone = E, this._currentId = 0, this._microtaskId = 1, this._animationCallbacksBuffer = [], this._rendererCache = new Map, this._cdRecurDepth = 0, f.onRemovalComplete = (T, W) => {
							const q = W?.parentNode(T);
							q && W.removeChild(q, T)
						}
					}
					createRenderer(s, f) {
						const T = this.delegate.createRenderer(s, f);
						if (!(s && f && f.data && f.data.animation)) {
							let st = this._rendererCache.get(T);
							return st || (st = new ts("", T, this.engine, () => this._rendererCache.delete(T)), this._rendererCache.set(T, st)), st
						}
						const W = f.id,
							q = f.id + "-" + this._currentId;
						this._currentId++, this.engine.register(q, s);
						const be = st => {
							Array.isArray(st) ? st.forEach(be) : this.engine.registerTrigger(W, q, s, st.name, st)
						};
						return f.data.animation.forEach(be), new Fa(this, q, T, this.engine)
					}
					begin() {
						this._cdRecurDepth++, this.delegate.begin && this.delegate.begin()
					}
					_scheduleCountTask() {
						queueMicrotask(() => {
							this._microtaskId++
						})
					}
					scheduleListenerCallback(s, f, E) {
						s >= 0 && s < this._microtaskId ? this._zone.run(() => f(E)) : (0 == this._animationCallbacksBuffer.length && queueMicrotask(() => {
							this._zone.run(() => {
								this._animationCallbacksBuffer.forEach(T => {
									const [W, q] = T;
									W(q)
								}), this._animationCallbacksBuffer = []
							})
						}), this._animationCallbacksBuffer.push([f, E]))
					}
					end() {
						this._cdRecurDepth--, 0 == this._cdRecurDepth && this._zone.runOutsideAngular(() => {
							this._scheduleCountTask(), this.engine.flush(this._microtaskId)
						}), this.delegate.end && this.delegate.end()
					}
					whenRenderingDone() {
						return this.engine.whenRenderingDone()
					}
					static #e = this.\u0275fac = function(f) {
						return new(f || y)(h.LFG(h.FYo), h.LFG(Qi), h.LFG(h.R0b))
					};
					static #t = this.\u0275prov = h.Yz7({
						token: y,
						factory: y.\u0275fac
					})
				}
				return y
			})();
			class ts {
				constructor(c, s, f, E) {
					this.namespaceId = c, this.delegate = s, this.engine = f, this._onDestroy = E
				}
				get data() {
					return this.delegate.data
				}
				destroyNode(c) {
					this.delegate.destroyNode?.(c)
				}
				destroy() {
					this.engine.destroy(this.namespaceId, this.delegate), this.engine.afterFlushAnimationsDone(() => {
						queueMicrotask(() => {
							this.delegate.destroy()
						})
					}), this._onDestroy?.()
				}
				createElement(c, s) {
					return this.delegate.createElement(c, s)
				}
				createComment(c) {
					return this.delegate.createComment(c)
				}
				createText(c) {
					return this.delegate.createText(c)
				}
				appendChild(c, s) {
					this.delegate.appendChild(c, s), this.engine.onInsert(this.namespaceId, s, c, !1)
				}
				insertBefore(c, s, f, E = !0) {
					this.delegate.insertBefore(c, s, f), this.engine.onInsert(this.namespaceId, s, c, E)
				}
				removeChild(c, s, f) {
					this.engine.onRemove(this.namespaceId, s, this.delegate)
				}
				selectRootElement(c, s) {
					return this.delegate.selectRootElement(c, s)
				}
				parentNode(c) {
					return this.delegate.parentNode(c)
				}
				nextSibling(c) {
					return this.delegate.nextSibling(c)
				}
				setAttribute(c, s, f, E) {
					this.delegate.setAttribute(c, s, f, E)
				}
				removeAttribute(c, s, f) {
					this.delegate.removeAttribute(c, s, f)
				}
				addClass(c, s) {
					this.delegate.addClass(c, s)
				}
				removeClass(c, s) {
					this.delegate.removeClass(c, s)
				}
				setStyle(c, s, f, E) {
					this.delegate.setStyle(c, s, f, E)
				}
				removeStyle(c, s, f) {
					this.delegate.removeStyle(c, s, f)
				}
				setProperty(c, s, f) {
					"@" == s.charAt(0) && s == gs ? this.disableAnimations(c, !!f) : this.delegate.setProperty(c, s, f)
				}
				setValue(c, s) {
					this.delegate.setValue(c, s)
				}
				listen(c, s, f) {
					return this.delegate.listen(c, s, f)
				}
				disableAnimations(c, s) {
					this.engine.disableAnimations(c, s)
				}
			}
			class Fa extends ts {
				constructor(c, s, f, E, T) {
					super(s, f, E, T), this.factory = c, this.namespaceId = s
				}
				setProperty(c, s, f) {
					"@" == s.charAt(0) ? "." == s.charAt(1) && s == gs ? this.disableAnimations(c, f = void 0 === f || !!f) : this.engine.process(this.namespaceId, c, s.slice(1), f) : this.delegate.setProperty(c, s, f)
				}
				listen(c, s, f) {
					if ("@" == s.charAt(0)) {
						const E = function La(y) {
							switch (y) {
								case "body":
									return document.body;
								case "document":
									return document;
								case "window":
									return window;
								default:
									return y
							}
						}(c);
						let T = s.slice(1),
							W = "";
						return "@" != T.charAt(0) && ([T, W] = function On(y) {
							const c = y.indexOf(".");
							return [y.substring(0, c), y.slice(c + 1)]
						}(T)), this.engine.listen(this.namespaceId, E, T, W, q => {
							this.factory.scheduleListenerCallback(q._data || -1, f, q)
						})
					}
					return this.delegate.listen(c, s, f)
				}
			}
			const Io = [{
					provide: B._j,
					useClass: ir
				}, {
					provide: wr,
					useFactory: function Us() {
						return new Xo
					}
				}, {
					provide: Qi,
					useClass: (() => {
						class y extends Qi {
							constructor(s, f, E, T) {
								super(s.body, f, E)
							}
							ngOnDestroy() {
								this.flush()
							}
							static #e = this.\u0275fac = function(f) {
								return new(f || y)(h.LFG(gn.K0), h.LFG(Ue), h.LFG(wr), h.LFG(h.z2F))
							};
							static #t = this.\u0275prov = h.Yz7({
								token: y,
								factory: y.\u0275fac
							})
						}
						return y
					})()
				}, {
					provide: h.FYo,
					useFactory: function Sr(y, c, s) {
						return new _s(y, c, s)
					},
					deps: [l.se, Qi, h.R0b]
				}],
				ns = [{
					provide: Ue,
					useFactory: () => new po
				}, {
					provide: h.QbO,
					useValue: "BrowserAnimations"
				}, ...Io],
				bs = [{
					provide: Ue,
					useClass: He
				}, {
					provide: h.QbO,
					useValue: "NoopAnimations"
				}, ...Io];
			let Ba = (() => {
				class y {
					static withConfig(s) {
						return {
							ngModule: y,
							providers: s.disableAnimations ? bs : ns
						}
					}
					static #e = this.\u0275fac = function(f) {
						return new(f || y)
					};
					static #t = this.\u0275mod = h.oAB({
						type: y
					});
					static #n = this.\u0275inj = h.cJS({
						providers: ns,
						imports: [l.b2]
					})
				}
				return y
			})();
			var or = v(7013);
			class Tr {}
			var is = v(7255);
			const Wt_apiUrl = "https://cms.volio.vn/api";
			var hn = v(9206);
			let Es = (() => {
					class y extends or.ci {
						constructor(s) {
							super(), this.HttpClient = s, this.checkPath = hn.p9
						}
						GetAll() {
							return this.HttpClient.get(`${Wt_apiUrl}/footers?populate=deep&locale=${this.checkPath}`)
						}
						static #e = this.\u0275fac = function(f) {
							return new(f || y)(h.LFG(O.eN))
						};
						static #t = this.\u0275prov = h.Yz7({
							token: y,
							factory: y.\u0275fac
						})
					}
					return y
				})(),
				jo = (() => {
					class y extends Tr {
						constructor(s) {
							super(), this.httpClient = s, this.checkPath = hn.p9
						}
						GetAll() {
							return this.httpClient.get(`${Wt_apiUrl}/menus?populate=deep&locale=${this.checkPath}`)
						}
						Get(s) {
							return this.httpClient.get(Wt_apiUrl + "/menus/" + s + "?populate=*")
						}
						Save(s) {
							throw new Error("Method not implemented.")
						}
						static #e = this.\u0275fac = function(f) {
							return new(f || y)(h.LFG(O.eN))
						};
						static #t = this.\u0275prov = h.Yz7({
							token: y,
							factory: y.\u0275fac
						})
					}
					return y
				})(),
				Fn = (() => {
					class y extends is.N {
						constructor(s) {
							super(), this.HttpClient = s, this.checkPath = hn.p9, this.toDay = new gn.uU("en-US").transform(new Date, "YYYY-MM-dd")
						}
						GetSlider() {
							return this.HttpClient.get(Wt_apiUrl + "/slides?populate=deep")
						}
						GetAchievements() {
							return this.HttpClient.get(`${Wt_apiUrl}/achievements?populate=*&locale=${this.checkPath}`)
						}
						GetCompany() {
							return this.HttpClient.get(`${Wt_apiUrl}/companies?populate=populate=Logo,Logo.Image,CompanyIntroduces,CompanyIntroduces.File,CompanyIntroduces.localizations,Productions,Achievements,Achievements.File,Achievements.localizations,localizations&locale=${this.checkPath}`)
						}
						GetCareers() {
							return this.HttpClient.get(`${Wt_apiUrl}/careers?populate=*&locale=${this.checkPath}&filters[$and][0][Limitation][$gte]=${this.toDay}`)
						}
						GetCareerItem(s) {
							return this.HttpClient.get(`${Wt_apiUrl}/careers?filters[$and][0][id][$eq]=${s}&filters[$and][0][Limitation][$gte]=${this.toDay}&populate=*&locale=${this.checkPath}`)
						}
						GetPartners() {
							return this.HttpClient.get(`${Wt_apiUrl}/partner-components?populate=deep&locale=${this.checkPath}`)
						}
						static #e = this.\u0275fac = function(f) {
							return new(f || y)(h.LFG(O.eN))
						};
						static #t = this.\u0275prov = h.Yz7({
							token: y,
							factory: y.\u0275fac
						})
					}
					return y
				})();
			var So = v(6604);
			let Ii = (() => {
				class y extends So.Ng {
					constructor(s) {
						super(), this.HttpClient = s, this.checkPath = hn.p9
					}
					Evolutions() {
						return this.HttpClient.get(`${Wt_apiUrl}/evolutions?populate=deep&locale=${this.checkPath}`)
					}
					CoreValues() {
						return this.HttpClient.get(`${Wt_apiUrl}/core-values?populate=deep&locale=${this.checkPath}`)
					}
					Cultures() {
						return this.HttpClient.get(`${Wt_apiUrl}/cultures?populate=deep&locale=${this.checkPath}`)
					}
					ExecutiveBoards() {
						return this.HttpClient.get(`${Wt_apiUrl}/executive-boards?populate=deep&locale=${this.checkPath}`)
					}
					GetOrientation() {
						return this.HttpClient.get(`${Wt_apiUrl}/orientations?populate=deep&locale=${this.checkPath}&sort=Index:ASC&`)
					}
					GetIntroPage() {
						return this.HttpClient.get(`${Wt_apiUrl}/intro-page?populate=deep&locale=${this.checkPath}`)
					}
					static #e = this.\u0275fac = function(f) {
						return new(f || y)(h.LFG(O.eN))
					};
					static #t = this.\u0275prov = h.Yz7({
						token: y,
						factory: y.\u0275fac
					})
				}
				return y
			})();
			var Ar = v(9350);
			let rr = (() => {
				class y extends Ar.WX {
					constructor(s) {
						super(), this.HttpClient = s, this.checkPath = hn.p9
					}
					Activity() {
						return this.HttpClient.get(`${Wt_apiUrl}/activities?populate=deep&locale=${this.checkPath}`)
					}
					GetActivityPage() {
						return this.HttpClient.get(`${Wt_apiUrl}/activities-page?populate=deep&locale=${this.checkPath}`)
					}
					static #e = this.\u0275fac = function(f) {
						return new(f || y)(h.LFG(O.eN))
					};
					static #t = this.\u0275prov = h.Yz7({
						token: y,
						factory: y.\u0275fac
					})
				}
				return y
			})();
			var sr = v(6949);
			let ar = (() => {
				class y extends sr.ny {
					constructor(s) {
						super(), this.HttpClient = s, this.checkPath = hn.p9
					}
					GetEvents() {
						return this.HttpClient.get(`${Wt_apiUrl}/events?populate=deep&locale=${this.checkPath}&sort=Date:DESC&plugins[i18n][locale]=vi&pagination[limit]=100&pagination[start]=0`)
					}
					GetGalleryPage() {
						return this.HttpClient.get(`${Wt_apiUrl}/gallery-page?populate=deep&locale=${this.checkPath}`)
					}
					static #e = this.\u0275fac = function(f) {
						return new(f || y)(h.LFG(O.eN))
					};
					static #t = this.\u0275prov = h.Yz7({
						token: y,
						factory: y.\u0275fac
					})
				}
				return y
			})();
			class Pr {}
			let os = (() => {
				class y extends Pr {
					constructor(s) {
						super(), this.HttpClient = s, this.checkPath = hn.p9
					}
					GetProduct() {
						return this.HttpClient.get(`${Wt_apiUrl}/products?populate=deep&locale=${this.checkPath}`)
					}
					static #e = this.\u0275fac = function(f) {
						return new(f || y)(h.LFG(O.eN))
					};
					static #t = this.\u0275prov = h.Yz7({
						token: y,
						factory: y.\u0275fac
					})
				}
				return y
			})();
			var Rr = v(5602),
				rs = v(9397);
			const To_apiUrl = "https://cms.volio.vn/api";
			let Cs = (() => {
				class y extends Rr.Gq {
					constructor(s) {
						super(), this.HttpClient = s, this.checkPath = hn.p9
					}
					GetProductions() {
						return this.HttpClient.get(`${To_apiUrl}/productions?populate=Products.ScreenShot,Products.Category,Companies,Banner,Products.localizations,localizations&locale=${this.checkPath}`).pipe((0, rs.b)(f => {
							let E = f.data;
							return E.sort((T, W) => T.id - W.id), sessionStorage.setItem("production", JSON.stringify(E)), sessionStorage.setItem("productionLastTime", (new Date).getTime() + ""), E
						}))
					}
					GetProductPage() {
						return this.HttpClient.get(`${To_apiUrl}/product-page?populate=deep&locale=${this.checkPath}`)
					}
					static #e = this.\u0275fac = function(f) {
						return new(f || y)(h.LFG(O.eN))
					};
					static #t = this.\u0275prov = h.Yz7({
						token: y,
						factory: y.\u0275fac
					})
				}
				return y
			})();
			var Ho = v(1876);
			let cr = (() => {
				class y extends Ho.qC {
					constructor(s) {
						super(), this.HttpClient = s
					}
					PostFile(s) {
						return this.HttpClient.post(Wt_apiUrl + "/upload", s)
					}
					PostRecruitments(s) {
						return this.HttpClient.post(Wt_apiUrl + "/recruitments", {
							data: s
						})
					}
					static #e = this.\u0275fac = function(f) {
						return new(f || y)(h.LFG(O.eN))
					};
					static #t = this.\u0275prov = h.Yz7({
						token: y,
						factory: y.\u0275fac
					})
				}
				return y
			})();
			class lr {}
			let ja = (() => {
				class y extends lr {
					constructor(s) {
						super(), this.HttpClient = s
					}
					getSEOData() {
						return this.HttpClient.get(To_apiUrl + "/seos?populate=deep").pipe((0, rs.b)(f => {
							let E = f.data;
							return sessionStorage.setItem("seos", JSON.stringify(E)), sessionStorage.setItem("seosLastTime", (new Date).getTime() + ""), E
						}))
					}
					static #e = this.\u0275fac = function(f) {
						return new(f || y)(h.LFG(O.eN))
					};
					static #t = this.\u0275prov = h.Yz7({
						token: y,
						factory: y.\u0275fac
					})
				}
				return y
			})();
			class Nr {}
			let ws = (() => {
				class y extends Nr {
					constructor(s) {
						super(), this.HttpClient = s, this.checkPath = hn.p9
					}
					GetAll() {
						return this.HttpClient.get(`${Wt_apiUrl}/headers?populate=deep&locale=${this.checkPath}`)
					}
					static #e = this.\u0275fac = function(f) {
						return new(f || y)(h.LFG(O.eN))
					};
					static #t = this.\u0275prov = h.Yz7({
						token: y,
						factory: y.\u0275fac
					})
				}
				return y
			})();
			var zs = v(9410);
			let Ms = (() => {
				class y extends zs.o4 {
					constructor(s) {
						super(), this.HttpClient = s, this.checkPath = hn.p9
					}
					GetCareerPage() {
						return this.HttpClient.get(`${Wt_apiUrl}/career-page?populate=deep&locale=${this.checkPath}`)
					}
					GetTitleInCareer() {
						return this.HttpClient.get(`${Wt_apiUrl}/title-in-careers?populate=deep&locale=${this.checkPath}`)
					}
					static #e = this.\u0275fac = function(f) {
						return new(f || y)(h.LFG(O.eN))
					};
					static #t = this.\u0275prov = h.Yz7({
						token: y,
						factory: y.\u0275fac
					})
				}
				return y
			})();
			var kr = v(5947);
			let $s = (() => {
				class y extends kr.hU {
					constructor(s) {
						super(), this.HttpClient = s, this.checkPath = hn.p9
					}
					GetContactPage() {
						return this.HttpClient.get(`${Wt_apiUrl}/contact-page?populate=deep&locale=${this.checkPath}`)
					}
					GetTitleInForm() {
						return this.HttpClient.get(`${Wt_apiUrl}/title-in-forms?populate=deep&locale=${this.checkPath}`)
					}
					static #e = this.\u0275fac = function(f) {
						return new(f || y)(h.LFG(O.eN))
					};
					static #t = this.\u0275prov = h.Yz7({
						token: y,
						factory: y.\u0275fac
					})
				}
				return y
			})();
			var ss = v(6543);
			const xs = [{
				provide: Tr,
				useClass: jo
			}, {
				provide: Nr,
				useClass: ws
			}, {
				provide: or.ci,
				useClass: Es
			}, {
				provide: is.N,
				useClass: Fn
			}, {
				provide: So.Ng,
				useClass: Ii
			}, {
				provide: Ar.WX,
				useClass: rr
			}, {
				provide: sr.ny,
				useClass: ar
			}, {
				provide: Pr,
				useClass: os
			}, {
				provide: Rr.Gq,
				useClass: Cs
			}, {
				provide: Ho.qC,
				useClass: cr
			}, {
				provide: lr,
				useClass: ja
			}, {
				provide: zs.o4,
				useClass: Ms
			}, {
				provide: kr.hU,
				useClass: $s
			}, ss.Z];
			let m = sessionStorage.getItem("setLanguage") || "vi";
			const S = [{
					path: "en" === m ? "en" : "",
					pathMatch: "full",
					redirectTo: "en" === m ? "en" : "",
					title: "en" === m ? "Home" : "Trang ch\u1ee7"
				}, {
					path: "",
					loadComponent: () => Promise.all([v.e("default-node_modules_ngx-owl-carousel-o_fesm2022_ngx-owl-carousel-o_mjs"), v.e("src_app_pages_home_home_component_ts")]).then(v.bind(v, 9553)).then(y => y.HomeComponent),
					title: "Trang ch\u1ee7"
				}, {
					path: "gioi-thieu",
					loadComponent: () => Promise.all([v.e("default-node_modules_ngx-owl-carousel-o_fesm2022_ngx-owl-carousel-o_mjs"), v.e("src_app_pages_introduce_introduce_component_ts")]).then(v.bind(v, 4394)).then(y => y.IntroduceComponent),
					title: "Gi\u1edbi Thi\u1ec7u"
				}, {
					path: "san-pham",
					loadComponent: () => v.e("src_app_pages_product_product_component_ts").then(v.bind(v, 6054)).then(y => y.ProductComponent),
					title: "S\u1ea3n ph\u1ea9m"
				}, {
					path: "hoat-dong",
					loadComponent: () => Promise.all([v.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-icon_mjs"), v.e("default-node_modules_ngx-owl-carousel-o_fesm2022_ngx-owl-carousel-o_mjs"), v.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-core-animation_mjs-node_modules_ng--04f2be"), v.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs-node_modules_ng-zorro-antd_fesm2022_n-ad99e3"), v.e("common"), v.e("src_app_pages_activity_activity_component_ts")]).then(v.bind(v, 2196)).then(y => y.ActivityComponent),
					title: "Ho\u1ea1t \u0110\u1ed9ng"
				}, {
					path: "thu-vien",
					loadComponent: () => Promise.all([v.e("default-node_modules_ngx-owl-carousel-o_fesm2022_ngx-owl-carousel-o_mjs"), v.e("common"), v.e("src_app_pages_library_library_component_ts")]).then(v.bind(v, 2259)).then(y => y.LibraryComponent),
					title: "Th\u01b0 vi\u1ec7n"
				}, {
					path: "tuyen-dung",
					loadComponent: () => Promise.all([v.e("default-node_modules_angular_material_fesm2022_icon_mjs-node_modules_angular_material_fesm202-98ea4f"), v.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), v.e("src_app_pages_recruit_recruit_component_ts-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd--7fd5bb")]).then(v.bind(v, 3845)).then(y => y.RecruitComponent),
					title: "Tuy\u1ec3n D\u1ee5ng"
				}, {
					path: "tuyen-dung/:id/:customLink",
					loadComponent: () => Promise.all([v.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-icon_mjs"), v.e("default-node_modules_angular_material_fesm2022_icon_mjs-node_modules_angular_material_fesm202-98ea4f"), v.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-core-animation_mjs-node_modules_ng--04f2be"), v.e("default-node_modules_angular_material_fesm2022_progress-spinner_mjs-node_modules_ng-zorro-ant-ae2976"), v.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs-node_modules_ng-zorro-antd_fesm2022_n-ad99e3"), v.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), v.e("src_app_pages_recruit_components_post-recruit_post-recruit_component_ts")]).then(v.bind(v, 843)).then(y => y.PostRecruitComponent)
				}, {
					path: "lien-he",
					loadComponent: () => Promise.all([v.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-icon_mjs"), v.e("default-node_modules_angular_material_fesm2022_icon_mjs-node_modules_angular_material_fesm202-98ea4f"), v.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-core-animation_mjs-node_modules_ng--04f2be"), v.e("default-node_modules_angular_material_fesm2022_progress-spinner_mjs-node_modules_ng-zorro-ant-ae2976"), v.e("src_app_pages_contact_contact_component_ts")]).then(v.bind(v, 1163)).then(y => y.ContactComponent),
					title: "Li\xean h\u1ec7"
				}, {
					path: "en",
					loadComponent: () => Promise.all([v.e("default-node_modules_ngx-owl-carousel-o_fesm2022_ngx-owl-carousel-o_mjs"), v.e("src_app_pages_home_home_component_ts")]).then(v.bind(v, 9553)).then(y => y.HomeComponent),
					title: "Home"
				}, {
					path: "introduce",
					loadComponent: () => Promise.all([v.e("default-node_modules_ngx-owl-carousel-o_fesm2022_ngx-owl-carousel-o_mjs"), v.e("src_app_pages_introduce_introduce_component_ts")]).then(v.bind(v, 4394)).then(y => y.IntroduceComponent),
					title: "Introduce"
				}, {
					path: "production",
					loadComponent: () => v.e("src_app_pages_product_product_component_ts").then(v.bind(v, 6054)).then(y => y.ProductComponent),
					title: "Production"
				}, {
					path: "activity",
					loadComponent: () => Promise.all([v.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-icon_mjs"), v.e("default-node_modules_ngx-owl-carousel-o_fesm2022_ngx-owl-carousel-o_mjs"), v.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-core-animation_mjs-node_modules_ng--04f2be"), v.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs-node_modules_ng-zorro-antd_fesm2022_n-ad99e3"), v.e("common"), v.e("src_app_pages_activity_activity_component_ts")]).then(v.bind(v, 2196)).then(y => y.ActivityComponent),
					title: "Activity"
				}, {
					path: "library",
					loadComponent: () => Promise.all([v.e("default-node_modules_ngx-owl-carousel-o_fesm2022_ngx-owl-carousel-o_mjs"), v.e("common"), v.e("src_app_pages_library_library_component_ts")]).then(v.bind(v, 2259)).then(y => y.LibraryComponent),
					title: "Library"
				}, {
					path: "recruit",
					loadComponent: () => Promise.all([v.e("default-node_modules_angular_material_fesm2022_icon_mjs-node_modules_angular_material_fesm202-98ea4f"), v.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), v.e("src_app_pages_recruit_recruit_component_ts-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd--7fd5bb")]).then(v.bind(v, 3845)).then(y => y.RecruitComponent),
					title: "Recruit"
				}, {
					path: "recruit/:id/:customLink",
					loadComponent: () => Promise.all([v.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-icon_mjs"), v.e("default-node_modules_angular_material_fesm2022_icon_mjs-node_modules_angular_material_fesm202-98ea4f"), v.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-core-animation_mjs-node_modules_ng--04f2be"), v.e("default-node_modules_angular_material_fesm2022_progress-spinner_mjs-node_modules_ng-zorro-ant-ae2976"), v.e("default-node_modules_angular_cdk_fesm2022_drag-drop_mjs-node_modules_ng-zorro-antd_fesm2022_n-ad99e3"), v.e("default-node_modules_angular_material_fesm2022_autocomplete_mjs"), v.e("src_app_pages_recruit_components_post-recruit_post-recruit_component_ts")]).then(v.bind(v, 843)).then(y => y.PostRecruitComponent)
				}, {
					path: "contact",
					loadComponent: () => Promise.all([v.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-icon_mjs"), v.e("default-node_modules_angular_material_fesm2022_icon_mjs-node_modules_angular_material_fesm202-98ea4f"), v.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-core-animation_mjs-node_modules_ng--04f2be"), v.e("default-node_modules_angular_material_fesm2022_progress-spinner_mjs-node_modules_ng-zorro-ant-ae2976"), v.e("src_app_pages_contact_contact_component_ts")]).then(v.bind(v, 1163)).then(y => y.ContactComponent),
					title: "Contact"
				}, {
					path: "expired",
					loadComponent: () => Promise.all([v.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-icon_mjs"), v.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-result_mjs"), v.e("src_app_pages_expired_expired_component_ts")]).then(v.bind(v, 6608)).then(y => y.ExpiredComponent),
					title: "en" === m ? "Expired Page" : "Trang \u0111\xe3 h\u1ebft h\u1ea1n"
				}, {
					path: "**",
					loadComponent: () => Promise.all([v.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-icon_mjs"), v.e("default-node_modules_ng-zorro-antd_fesm2022_ng-zorro-antd-result_mjs"), v.e("src_app_pages_error_error_component_ts")]).then(v.bind(v, 2629)).then(y => y.ErrorComponent),
					title: "en" === m ? "Error Page" : "L\u1ed7i trang"
				}],
				j = (0, F.ZU)({
					scrollPositionRestoration: "enabled",
					anchorScrolling: "enabled"
				}),
				De = {
					providers: [(0, h.RIp)([l.b2, Ba]), (0, F.bU)(S, j), function ys() {
						return [...ns]
					}(), (0, O.h_)(), (0, l.ly)(), xs, {
						provide: F.wN,
						useClass: class D {
							constructor() {
								this.routeStore = new Map, this.handlers = {}
							}
							shouldDetach(c) {
								return !0
							}
							store(c, s) {
								this.routeStore.set(c.routeConfig.path, s)
							}
							shouldAttach(c) {
								return !!this.routeStore.get(c.routeConfig.path)
							}
							retrieve(c) {
								return this.routeStore.get(c.routeConfig.path)
							}
							shouldReuseRoute(c, s) {
								return c.routeConfig === s.routeConfig
							}
						}
					}]
				};
			var ke = v(103),
				ft = v(2495),
				zt = v(6028),
				cn = v(8645),
				Jt = v(3019),
				Ut = v(7394),
				bn = v(2096),
				sn = v(6410),
				Pn = v(7921),
				Xi = v(4664),
				ei = v(8180),
				zi = v(9773),
				ti = v(2181),
				$i = v(5177),
				ni = v(3680),
				ii = v(8484),
				Gi = v(9388),
				Fr = v(9594),
				_n = v(2831),
				ur = v(9473);
			const Lr = ["mat-menu-item", ""];

			function Si(y, c) {
				1 & y && (h.O4$(), h.TgZ(0, "svg", 3), h._UZ(1, "polygon", 4), h.qZA())
			}
			const Ua = [
					[
						["mat-icon"],
						["", "matMenuItemIcon", ""]
					], "*"
				],
				Va = ["mat-icon, [matMenuItemIcon]", "*"];

			function Br(y, c) {
				if (1 & y) {
					const s = h.EpF();
					h.TgZ(0, "div", 0), h.NdJ("keydown", function(E) {
						h.CHM(s);
						const T = h.oxw();
						return h.KtG(T._handleKeydown(E))
					})("click", function() {
						h.CHM(s);
						const E = h.oxw();
						return h.KtG(E.closed.emit("click"))
					})("@transformMenu.start", function(E) {
						h.CHM(s);
						const T = h.oxw();
						return h.KtG(T._onAnimationStart(E))
					})("@transformMenu.done", function(E) {
						h.CHM(s);
						const T = h.oxw();
						return h.KtG(T._onAnimationDone(E))
					}), h.TgZ(1, "div", 1), h.Hsn(2), h.qZA()()
				}
				if (2 & y) {
					const s = h.oxw();
					h.Q6J("id", s.panelId)("ngClass", s._classList)("@transformMenu", s._panelAnimationState), h.uIk("aria-label", s.ariaLabel || null)("aria-labelledby", s.ariaLabelledby || null)("aria-describedby", s.ariaDescribedby || null)
				}
			}
			const Li = ["*"],
				jr = new h.OlP("MAT_MENU_PANEL"),
				Gs = (0, ni.Kr)((0, ni.Id)(class {}));
			let cs = (() => {
				class y extends Gs {
					constructor(s, f, E, T, W) {
						super(), this._elementRef = s, this._document = f, this._focusMonitor = E, this._parentMenu = T, this._changeDetectorRef = W, this.role = "menuitem", this._hovered = new cn.x, this._focused = new cn.x, this._highlighted = !1, this._triggersSubmenu = !1, T?.addItem?.(this)
					}
					focus(s, f) {
						this._focusMonitor && s ? this._focusMonitor.focusVia(this._getHostElement(), s, f) : this._getHostElement().focus(f), this._focused.next(this)
					}
					ngAfterViewInit() {
						this._focusMonitor && this._focusMonitor.monitor(this._elementRef, !1)
					}
					ngOnDestroy() {
						this._focusMonitor && this._focusMonitor.stopMonitoring(this._elementRef), this._parentMenu && this._parentMenu.removeItem && this._parentMenu.removeItem(this), this._hovered.complete(), this._focused.complete()
					}
					_getTabIndex() {
						return this.disabled ? "-1" : "0"
					}
					_getHostElement() {
						return this._elementRef.nativeElement
					}
					_checkDisabled(s) {
						this.disabled && (s.preventDefault(), s.stopPropagation())
					}
					_handleMouseEnter() {
						this._hovered.next(this)
					}
					getLabel() {
						const s = this._elementRef.nativeElement.cloneNode(!0),
							f = s.querySelectorAll("mat-icon, .material-icons");
						for (let E = 0; E < f.length; E++) f[E].remove();
						return s.textContent?.trim() || ""
					}
					_setHighlighted(s) {
						this._highlighted = s, this._changeDetectorRef?.markForCheck()
					}
					_setTriggersSubmenu(s) {
						this._triggersSubmenu = s, this._changeDetectorRef?.markForCheck()
					}
					_hasFocus() {
						return this._document && this._document.activeElement === this._getHostElement()
					}
					static #e = this.\u0275fac = function(f) {
						return new(f || y)(h.Y36(h.SBq), h.Y36(gn.K0), h.Y36(ke.tE), h.Y36(jr, 8), h.Y36(h.sBO))
					};
					static #t = this.\u0275cmp = h.Xpm({
						type: y,
						selectors: [
							["", "mat-menu-item", ""]
						],
						hostAttrs: [1, "mat-mdc-menu-item", "mat-mdc-focus-indicator"],
						hostVars: 8,
						hostBindings: function(f, E) {
							1 & f && h.NdJ("click", function(W) {
								return E._checkDisabled(W)
							})("mouseenter", function() {
								return E._handleMouseEnter()
							}), 2 & f && (h.uIk("role", E.role)("tabindex", E._getTabIndex())("aria-disabled", E.disabled)("disabled", E.disabled || null), h.ekj("mat-mdc-menu-item-highlighted", E._highlighted)("mat-mdc-menu-item-submenu-trigger", E._triggersSubmenu))
						},
						inputs: {
							disabled: "disabled",
							disableRipple: "disableRipple",
							role: "role"
						},
						exportAs: ["matMenuItem"],
						features: [h.qOj],
						attrs: Lr,
						ngContentSelectors: Va,
						decls: 5,
						vars: 3,
						consts: [
							[1, "mat-mdc-menu-item-text"],
							["matRipple", "", 1, "mat-mdc-menu-ripple", 3, "matRippleDisabled", "matRippleTrigger"],
							["class", "mat-mdc-menu-submenu-icon", "viewBox", "0 0 5 10", "focusable", "false", "aria-hidden", "true", 4, "ngIf"],
							["viewBox", "0 0 5 10", "focusable", "false", "aria-hidden", "true", 1, "mat-mdc-menu-submenu-icon"],
							["points", "0,0 5,5 0,10"]
						],
						template: function(f, E) {
							1 & f && (h.F$t(Ua), h.Hsn(0), h.TgZ(1, "span", 0), h.Hsn(2, 1), h.qZA(), h._UZ(3, "div", 1), h.YNc(4, Si, 2, 0, "svg", 2)), 2 & f && (h.xp6(3), h.Q6J("matRippleDisabled", E.disableRipple || E.disabled)("matRippleTrigger", E._getHostElement()), h.xp6(1), h.Q6J("ngIf", E._triggersSubmenu))
						},
						dependencies: [gn.O5, ni.wG],
						encapsulation: 2,
						changeDetection: 0
					})
				}
				return y
			})();
			const za = new h.OlP("MatMenuContent"),
				Hr = {
					transformMenu: (0, B.X$)("transformMenu", [(0, B.SB)("void", (0, B.oB)({
						opacity: 0,
						transform: "scale(0.8)"
					})), (0, B.eR)("void => enter", (0, B.jt)("120ms cubic-bezier(0, 0, 0.2, 1)", (0, B.oB)({
						opacity: 1,
						transform: "scale(1)"
					}))), (0, B.eR)("* => void", (0, B.jt)("100ms 25ms linear", (0, B.oB)({
						opacity: 0
					})))]),
					fadeInItems: (0, B.X$)("fadeInItems", [(0, B.SB)("showing", (0, B.oB)({
						opacity: 1
					})), (0, B.eR)("void => *", [(0, B.oB)({
						opacity: 0
					}), (0, B.jt)("400ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)")])])
				};
			let Bc = 0;
			const Ws = new h.OlP("mat-menu-default-options", {
				providedIn: "root",
				factory: function jc() {
					return {
						overlapTrigger: !1,
						xPosition: "after",
						yPosition: "below",
						backdropClass: "cdk-overlay-transparent-backdrop"
					}
				}
			});
			let dr = (() => {
					class y {
						get xPosition() {
							return this._xPosition
						}
						set xPosition(s) {
							this._xPosition = s, this.setPositionClasses()
						}
						get yPosition() {
							return this._yPosition
						}
						set yPosition(s) {
							this._yPosition = s, this.setPositionClasses()
						}
						get overlapTrigger() {
							return this._overlapTrigger
						}
						set overlapTrigger(s) {
							this._overlapTrigger = (0, ft.Ig)(s)
						}
						get hasBackdrop() {
							return this._hasBackdrop
						}
						set hasBackdrop(s) {
							this._hasBackdrop = (0, ft.Ig)(s)
						}
						set panelClass(s) {
							const f = this._previousPanelClass;
							f && f.length && f.split(" ").forEach(E => {
								this._classList[E] = !1
							}), this._previousPanelClass = s, s && s.length && (s.split(" ").forEach(E => {
								this._classList[E] = !0
							}), this._elementRef.nativeElement.className = "")
						}
						get classList() {
							return this.panelClass
						}
						set classList(s) {
							this.panelClass = s
						}
						constructor(s, f, E, T) {
							this._elementRef = s, this._ngZone = f, this._changeDetectorRef = T, this._directDescendantItems = new h.n_E, this._classList = {}, this._panelAnimationState = "void", this._animationDone = new cn.x, this.closed = new h.vpe, this.close = this.closed, this.panelId = "mat-menu-panel-" + Bc++, this.overlayPanelClass = E.overlayPanelClass || "", this._xPosition = E.xPosition, this._yPosition = E.yPosition, this.backdropClass = E.backdropClass, this._overlapTrigger = E.overlapTrigger, this._hasBackdrop = E.hasBackdrop
						}
						ngOnInit() {
							this.setPositionClasses()
						}
						ngAfterContentInit() {
							this._updateDirectDescendants(), this._keyManager = new ke.Em(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd(), this._keyManager.tabOut.subscribe(() => this.closed.emit("tab")), this._directDescendantItems.changes.pipe((0, Pn.O)(this._directDescendantItems), (0, Xi.w)(s => (0, Jt.T)(...s.map(f => f._focused)))).subscribe(s => this._keyManager.updateActiveItem(s)), this._directDescendantItems.changes.subscribe(s => {
								const f = this._keyManager;
								if ("enter" === this._panelAnimationState && f.activeItem?._hasFocus()) {
									const E = s.toArray(),
										T = Math.max(0, Math.min(E.length - 1, f.activeItemIndex || 0));
									E[T] && !E[T].disabled ? f.setActiveItem(T) : f.setNextItemActive()
								}
							})
						}
						ngOnDestroy() {
							this._keyManager?.destroy(), this._directDescendantItems.destroy(), this.closed.complete(), this._firstItemFocusSubscription?.unsubscribe()
						}
						_hovered() {
							return this._directDescendantItems.changes.pipe((0, Pn.O)(this._directDescendantItems), (0, Xi.w)(f => (0, Jt.T)(...f.map(E => E._hovered))))
						}
						addItem(s) {}
						removeItem(s) {}
						_handleKeydown(s) {
							const f = s.keyCode,
								E = this._keyManager;
							switch (f) {
								case zt.hY:
									(0, zt.Vb)(s) || (s.preventDefault(), this.closed.emit("keydown"));
									break;
								case zt.oh:
									this.parentMenu && "ltr" === this.direction && this.closed.emit("keydown");
									break;
								case zt.SV:
									this.parentMenu && "rtl" === this.direction && this.closed.emit("keydown");
									break;
								default:
									return (f === zt.LH || f === zt.JH) && E.setFocusOrigin("keyboard"), void E.onKeydown(s)
							}
							s.stopPropagation()
						}
						focusFirstItem(s = "program") {
							this._firstItemFocusSubscription?.unsubscribe(), this._firstItemFocusSubscription = this._ngZone.onStable.pipe((0, ei.q)(1)).subscribe(() => {
								let f = null;
								if (this._directDescendantItems.length && (f = this._directDescendantItems.first._getHostElement().closest('[role="menu"]')), !f || !f.contains(document.activeElement)) {
									const E = this._keyManager;
									E.setFocusOrigin(s).setFirstItemActive(), !E.activeItem && f && f.focus()
								}
							})
						}
						resetActiveItem() {
							this._keyManager.setActiveItem(-1)
						}
						setElevation(s) {
							const f = Math.min(this._baseElevation + s, 24),
								E = `${this._elevationPrefix}${f}`,
								T = Object.keys(this._classList).find(W => W.startsWith(this._elevationPrefix));
							(!T || T === this._previousElevation) && (this._previousElevation && (this._classList[this._previousElevation] = !1), this._classList[E] = !0, this._previousElevation = E)
						}
						setPositionClasses(s = this.xPosition, f = this.yPosition) {
							const E = this._classList;
							E["mat-menu-before"] = "before" === s, E["mat-menu-after"] = "after" === s, E["mat-menu-above"] = "above" === f, E["mat-menu-below"] = "below" === f, this._changeDetectorRef?.markForCheck()
						}
						_startAnimation() {
							this._panelAnimationState = "enter"
						}
						_resetAnimation() {
							this._panelAnimationState = "void"
						}
						_onAnimationDone(s) {
							this._animationDone.next(s), this._isAnimating = !1
						}
						_onAnimationStart(s) {
							this._isAnimating = !0, "enter" === s.toState && 0 === this._keyManager.activeItemIndex && (s.element.scrollTop = 0)
						}
						_updateDirectDescendants() {
							this._allItems.changes.pipe((0, Pn.O)(this._allItems)).subscribe(s => {
								this._directDescendantItems.reset(s.filter(f => f._parentMenu === this)), this._directDescendantItems.notifyOnChanges()
							})
						}
						static #e = this.\u0275fac = function(f) {
							return new(f || y)(h.Y36(h.SBq), h.Y36(h.R0b), h.Y36(Ws), h.Y36(h.sBO))
						};
						static #t = this.\u0275dir = h.lG2({
							type: y,
							contentQueries: function(f, E, T) {
								if (1 & f && (h.Suo(T, za, 5), h.Suo(T, cs, 5), h.Suo(T, cs, 4)), 2 & f) {
									let W;
									h.iGM(W = h.CRH()) && (E.lazyContent = W.first), h.iGM(W = h.CRH()) && (E._allItems = W), h.iGM(W = h.CRH()) && (E.items = W)
								}
							},
							viewQuery: function(f, E) {
								if (1 & f && h.Gf(h.Rgc, 5), 2 & f) {
									let T;
									h.iGM(T = h.CRH()) && (E.templateRef = T.first)
								}
							},
							inputs: {
								backdropClass: "backdropClass",
								ariaLabel: ["aria-label", "ariaLabel"],
								ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
								ariaDescribedby: ["aria-describedby", "ariaDescribedby"],
								xPosition: "xPosition",
								yPosition: "yPosition",
								overlapTrigger: "overlapTrigger",
								hasBackdrop: "hasBackdrop",
								panelClass: ["class", "panelClass"],
								classList: "classList"
							},
							outputs: {
								closed: "closed",
								close: "close"
							}
						})
					}
					return y
				})(),
				Ga = (() => {
					class y extends dr {
						constructor(s, f, E, T) {
							super(s, f, E, T), this._elevationPrefix = "mat-elevation-z", this._baseElevation = 8
						}
						static #e = this.\u0275fac = function(f) {
							return new(f || y)(h.Y36(h.SBq), h.Y36(h.R0b), h.Y36(Ws), h.Y36(h.sBO))
						};
						static #t = this.\u0275cmp = h.Xpm({
							type: y,
							selectors: [
								["mat-menu"]
							],
							hostAttrs: ["ngSkipHydration", ""],
							hostVars: 3,
							hostBindings: function(f, E) {
								2 & f && h.uIk("aria-label", null)("aria-labelledby", null)("aria-describedby", null)
							},
							exportAs: ["matMenu"],
							features: [h._Bn([{
								provide: jr,
								useExisting: y
							}]), h.qOj],
							ngContentSelectors: Li,
							decls: 1,
							vars: 0,
							consts: [
								["tabindex", "-1", "role", "menu", 1, "mat-mdc-menu-panel", "mat-mdc-elevation-specific", 3, "id", "ngClass", "keydown", "click"],
								[1, "mat-mdc-menu-content"]
							],
							template: function(f, E) {
								1 & f && (h.F$t(), h.YNc(0, Br, 3, 6, "ng-template"))
							},
							dependencies: [gn.mk],
							styles: ['mat-menu{display:none}.mat-mdc-menu-content{margin:0;padding:8px 0;list-style-type:none}.mat-mdc-menu-content:focus{outline:none}.mat-mdc-menu-content,.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;white-space:normal;font-family:var(--mat-menu-item-label-text-font);line-height:var(--mat-menu-item-label-text-line-height);font-size:var(--mat-menu-item-label-text-size);letter-spacing:var(--mat-menu-item-label-text-tracking);font-weight:var(--mat-menu-item-label-text-weight)}.mat-mdc-menu-panel{--mat-menu-container-shape:4px;min-width:112px;max-width:280px;overflow:auto;-webkit-overflow-scrolling:touch;box-sizing:border-box;outline:0;border-radius:var(--mat-menu-container-shape);background-color:var(--mat-menu-container-color);will-change:transform,opacity}.mat-mdc-menu-panel.ng-animating{pointer-events:none}.cdk-high-contrast-active .mat-mdc-menu-panel{outline:solid 1px}.mat-mdc-menu-item{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;cursor:pointer;outline:none;border:none;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;width:100%;text-align:left;box-sizing:border-box;color:inherit;font-size:inherit;background:none;text-decoration:none;margin:0;align-items:center;min-height:48px}.mat-mdc-menu-item:focus{outline:none}[dir=rtl] .mat-mdc-menu-item,.mat-mdc-menu-item[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-menu-item::-moz-focus-inner{border:0}.mat-mdc-menu-item,.mat-mdc-menu-item:visited,.mat-mdc-menu-item:link{color:var(--mat-menu-item-label-text-color)}.mat-mdc-menu-item .mat-icon-no-color,.mat-mdc-menu-item .mat-mdc-menu-submenu-icon{color:var(--mat-menu-item-icon-color)}.mat-mdc-menu-item[disabled]{cursor:default;opacity:.38}.mat-mdc-menu-item[disabled]::after{display:block;position:absolute;content:"";top:0;left:0;bottom:0;right:0}.mat-mdc-menu-item .mat-icon{margin-right:16px}[dir=rtl] .mat-mdc-menu-item{text-align:right}[dir=rtl] .mat-mdc-menu-item .mat-icon{margin-right:0;margin-left:16px}.mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:32px}[dir=rtl] .mat-mdc-menu-item.mat-mdc-menu-item-submenu-trigger{padding-right:16px;padding-left:32px}.mat-mdc-menu-item:not([disabled]):hover{background-color:var(--mat-menu-item-hover-state-layer-color)}.mat-mdc-menu-item:not([disabled]).cdk-program-focused,.mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused,.mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted{background-color:var(--mat-menu-item-focus-state-layer-color)}.cdk-high-contrast-active .mat-mdc-menu-item{margin-top:1px}.mat-mdc-menu-submenu-icon{position:absolute;top:50%;right:16px;transform:translateY(-50%);width:5px;height:10px;fill:currentColor}[dir=rtl] .mat-mdc-menu-submenu-icon{right:auto;left:16px;transform:translateY(-50%) scaleX(-1)}.cdk-high-contrast-active .mat-mdc-menu-submenu-icon{fill:CanvasText}.mat-mdc-menu-item .mat-mdc-menu-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}'],
							encapsulation: 2,
							data: {
								animation: [Hr.transformMenu, Hr.fadeInItems]
							},
							changeDetection: 0
						})
					}
					return y
				})();
			const fr = new h.OlP("mat-menu-scroll-strategy"),
				Uc = {
					provide: fr,
					deps: [Fr.aV],
					useFactory: function Hc(y) {
						return () => y.scrollStrategies.reposition()
					}
				},
				Wa = (0, _n.i$)({
					passive: !0
				});
			let Vc = (() => {
					class y {
						get _deprecatedMatMenuTriggerFor() {
							return this.menu
						}
						set _deprecatedMatMenuTriggerFor(s) {
							this.menu = s
						}
						get menu() {
							return this._menu
						}
						set menu(s) {
							s !== this._menu && (this._menu = s, this._menuCloseSubscription.unsubscribe(), s && (this._menuCloseSubscription = s.close.subscribe(f => {
								this._destroyMenu(f), ("click" === f || "tab" === f) && this._parentMaterialMenu && this._parentMaterialMenu.closed.emit(f)
							})), this._menuItemInstance?._setTriggersSubmenu(this.triggersSubmenu()))
						}
						constructor(s, f, E, T, W, q, be, Fe, st) {
							this._overlay = s, this._element = f, this._viewContainerRef = E, this._menuItemInstance = q, this._dir = be, this._focusMonitor = Fe, this._ngZone = st, this._overlayRef = null, this._menuOpen = !1, this._closingActionsSubscription = Ut.w0.EMPTY, this._hoverSubscription = Ut.w0.EMPTY, this._menuCloseSubscription = Ut.w0.EMPTY, this._changeDetectorRef = (0, h.f3M)(h.sBO), this._handleTouchStart = ut => {
								(0, ke.yG)(ut) || (this._openedBy = "touch")
							}, this._openedBy = void 0, this.restoreFocus = !0, this.menuOpened = new h.vpe, this.onMenuOpen = this.menuOpened, this.menuClosed = new h.vpe, this.onMenuClose = this.menuClosed, this._scrollStrategy = T, this._parentMaterialMenu = W instanceof dr ? W : void 0, f.nativeElement.addEventListener("touchstart", this._handleTouchStart, Wa)
						}
						ngAfterContentInit() {
							this._handleHover()
						}
						ngOnDestroy() {
							this._overlayRef && (this._overlayRef.dispose(), this._overlayRef = null), this._element.nativeElement.removeEventListener("touchstart", this._handleTouchStart, Wa), this._menuCloseSubscription.unsubscribe(), this._closingActionsSubscription.unsubscribe(), this._hoverSubscription.unsubscribe()
						}
						get menuOpen() {
							return this._menuOpen
						}
						get dir() {
							return this._dir && "rtl" === this._dir.value ? "rtl" : "ltr"
						}
						triggersSubmenu() {
							return !!(this._menuItemInstance && this._parentMaterialMenu && this.menu)
						}
						toggleMenu() {
							return this._menuOpen ? this.closeMenu() : this.openMenu()
						}
						openMenu() {
							const s = this.menu;
							if (this._menuOpen || !s) return;
							const f = this._createOverlay(s),
								E = f.getConfig(),
								T = E.positionStrategy;
							this._setPosition(s, T), E.hasBackdrop = null == s.hasBackdrop ? !this.triggersSubmenu() : s.hasBackdrop, f.attach(this._getPortal(s)), s.lazyContent && s.lazyContent.attach(this.menuData), this._closingActionsSubscription = this._menuClosingActions().subscribe(() => this.closeMenu()), this._initMenu(s), s instanceof dr && (s._startAnimation(), s._directDescendantItems.changes.pipe((0, zi.R)(s.close)).subscribe(() => {
								T.withLockedPosition(!1).reapplyLastPosition(), T.withLockedPosition(!0)
							}))
						}
						closeMenu() {
							this.menu?.close.emit()
						}
						focus(s, f) {
							this._focusMonitor && s ? this._focusMonitor.focusVia(this._element, s, f) : this._element.nativeElement.focus(f)
						}
						updatePosition() {
							this._overlayRef?.updatePosition()
						}
						_destroyMenu(s) {
							if (!this._overlayRef || !this.menuOpen) return;
							const f = this.menu;
							this._closingActionsSubscription.unsubscribe(), this._overlayRef.detach(), this.restoreFocus && ("keydown" === s || !this._openedBy || !this.triggersSubmenu()) && this.focus(this._openedBy), this._openedBy = void 0, f instanceof dr ? (f._resetAnimation(), f.lazyContent ? f._animationDone.pipe((0, ti.h)(E => "void" === E.toState), (0, ei.q)(1), (0, zi.R)(f.lazyContent._attached)).subscribe({
								next: () => f.lazyContent.detach(),
								complete: () => this._setIsMenuOpen(!1)
							}) : this._setIsMenuOpen(!1)) : (this._setIsMenuOpen(!1), f?.lazyContent?.detach())
						}
						_initMenu(s) {
							s.parentMenu = this.triggersSubmenu() ? this._parentMaterialMenu : void 0, s.direction = this.dir, this._setMenuElevation(s), s.focusFirstItem(this._openedBy || "program"), this._setIsMenuOpen(!0)
						}
						_setMenuElevation(s) {
							if (s.setElevation) {
								let f = 0,
									E = s.parentMenu;
								for (; E;) f++, E = E.parentMenu;
								s.setElevation(f)
							}
						}
						_setIsMenuOpen(s) {
							s !== this._menuOpen && (this._menuOpen = s, this._menuOpen ? this.menuOpened.emit() : this.menuClosed.emit(), this.triggersSubmenu() && this._menuItemInstance._setHighlighted(s), this._changeDetectorRef.markForCheck())
						}
						_createOverlay(s) {
							if (!this._overlayRef) {
								const f = this._getOverlayConfig(s);
								this._subscribeToPositions(s, f.positionStrategy), this._overlayRef = this._overlay.create(f), this._overlayRef.keydownEvents().subscribe()
							}
							return this._overlayRef
						}
						_getOverlayConfig(s) {
							return new Fr.X_({
								positionStrategy: this._overlay.position().flexibleConnectedTo(this._element).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(".mat-menu-panel, .mat-mdc-menu-panel"),
								backdropClass: s.backdropClass || "cdk-overlay-transparent-backdrop",
								panelClass: s.overlayPanelClass,
								scrollStrategy: this._scrollStrategy(),
								direction: this._dir
							})
						}
						_subscribeToPositions(s, f) {
							s.setPositionClasses && f.positionChanges.subscribe(E => {
								const T = "start" === E.connectionPair.overlayX ? "after" : "before",
									W = "top" === E.connectionPair.overlayY ? "below" : "above";
								this._ngZone ? this._ngZone.run(() => s.setPositionClasses(T, W)) : s.setPositionClasses(T, W)
							})
						}
						_setPosition(s, f) {
							let [E, T] = "before" === s.xPosition ? ["end", "start"] : ["start", "end"], [W, q] = "above" === s.yPosition ? ["bottom", "top"] : ["top", "bottom"], [be, Fe] = [W, q], [st, ut] = [E, T], Lt = 0;
							if (this.triggersSubmenu()) {
								if (ut = E = "before" === s.xPosition ? "start" : "end", T = st = "end" === E ? "start" : "end", this._parentMaterialMenu) {
									if (null == this._parentInnerPadding) {
										const Ft = this._parentMaterialMenu.items.first;
										this._parentInnerPadding = Ft ? Ft._getHostElement().offsetTop : 0
									}
									Lt = "bottom" === W ? this._parentInnerPadding : -this._parentInnerPadding
								}
							} else s.overlapTrigger || (be = "top" === W ? "bottom" : "top", Fe = "top" === q ? "bottom" : "top");
							f.withPositions([{
								originX: E,
								originY: be,
								overlayX: st,
								overlayY: W,
								offsetY: Lt
							}, {
								originX: T,
								originY: be,
								overlayX: ut,
								overlayY: W,
								offsetY: Lt
							}, {
								originX: E,
								originY: Fe,
								overlayX: st,
								overlayY: q,
								offsetY: -Lt
							}, {
								originX: T,
								originY: Fe,
								overlayX: ut,
								overlayY: q,
								offsetY: -Lt
							}])
						}
						_menuClosingActions() {
							const s = this._overlayRef.backdropClick(),
								f = this._overlayRef.detachments(),
								E = this._parentMaterialMenu ? this._parentMaterialMenu.closed : (0, bn.of)(),
								T = this._parentMaterialMenu ? this._parentMaterialMenu._hovered().pipe((0, ti.h)(W => W !== this._menuItemInstance), (0, ti.h)(() => this._menuOpen)) : (0, bn.of)();
							return (0, Jt.T)(s, E, T, f)
						}
						_handleMousedown(s) {
							(0, ke.X6)(s) || (this._openedBy = 0 === s.button ? "mouse" : void 0, this.triggersSubmenu() && s.preventDefault())
						}
						_handleKeydown(s) {
							const f = s.keyCode;
							(f === zt.K5 || f === zt.L_) && (this._openedBy = "keyboard"), this.triggersSubmenu() && (f === zt.SV && "ltr" === this.dir || f === zt.oh && "rtl" === this.dir) && (this._openedBy = "keyboard", this.openMenu())
						}
						_handleClick(s) {
							this.triggersSubmenu() ? (s.stopPropagation(), this.openMenu()) : this.toggleMenu()
						}
						_handleHover() {
							!this.triggersSubmenu() || !this._parentMaterialMenu || (this._hoverSubscription = this._parentMaterialMenu._hovered().pipe((0, ti.h)(s => s === this._menuItemInstance && !s.disabled), (0, $i.g)(0, sn.E)).subscribe(() => {
								this._openedBy = "mouse", this.menu instanceof dr && this.menu._isAnimating ? this.menu._animationDone.pipe((0, ei.q)(1), (0, $i.g)(0, sn.E), (0, zi.R)(this._parentMaterialMenu._hovered())).subscribe(() => this.openMenu()) : this.openMenu()
							}))
						}
						_getPortal(s) {
							return (!this._portal || this._portal.templateRef !== s.templateRef) && (this._portal = new ii.UE(s.templateRef, this._viewContainerRef)), this._portal
						}
						static #e = this.\u0275fac = function(f) {
							return new(f || y)(h.Y36(Fr.aV), h.Y36(h.SBq), h.Y36(h.s_b), h.Y36(fr), h.Y36(jr, 8), h.Y36(cs, 10), h.Y36(Gi.Is, 8), h.Y36(ke.tE), h.Y36(h.R0b))
						};
						static #t = this.\u0275dir = h.lG2({
							type: y,
							hostVars: 3,
							hostBindings: function(f, E) {
								1 & f && h.NdJ("click", function(W) {
									return E._handleClick(W)
								})("mousedown", function(W) {
									return E._handleMousedown(W)
								})("keydown", function(W) {
									return E._handleKeydown(W)
								}), 2 & f && h.uIk("aria-haspopup", E.menu ? "menu" : null)("aria-expanded", E.menuOpen)("aria-controls", E.menuOpen ? E.menu.panelId : null)
							},
							inputs: {
								_deprecatedMatMenuTriggerFor: ["mat-menu-trigger-for", "_deprecatedMatMenuTriggerFor"],
								menu: ["matMenuTriggerFor", "menu"],
								menuData: ["matMenuTriggerData", "menuData"],
								restoreFocus: ["matMenuTriggerRestoreFocus", "restoreFocus"]
							},
							outputs: {
								menuOpened: "menuOpened",
								onMenuOpen: "onMenuOpen",
								menuClosed: "menuClosed",
								onMenuClose: "onMenuClose"
							}
						})
					}
					return y
				})(),
				Ve = (() => {
					class y extends Vc {
						static #e = this.\u0275fac = function() {
							let s;
							return function(E) {
								return (s || (s = h.n5z(y)))(E || y)
							}
						}();
						static #t = this.\u0275dir = h.lG2({
							type: y,
							selectors: [
								["", "mat-menu-trigger-for", ""],
								["", "matMenuTriggerFor", ""]
							],
							hostAttrs: [1, "mat-mdc-menu-trigger"],
							exportAs: ["matMenuTrigger"],
							features: [h.qOj]
						})
					}
					return y
				})(),
				qt = (() => {
					class y {
						static #e = this.\u0275fac = function(f) {
							return new(f || y)
						};
						static #t = this.\u0275mod = h.oAB({
							type: y
						});
						static #n = this.\u0275inj = h.cJS({
							providers: [Uc],
							imports: [gn.ez, ni.si, ni.BQ, Fr.U8, ur.ZD, ni.BQ]
						})
					}
					return y
				})();
			var Ys = v(2296);
			const Ya = ["menuMobile"];

			function ui(y, c) {
				if (1 & y && (h.ynx(0), h.TgZ(1, "a", 20), h._UZ(2, "img", 21), h.qZA(), h.BQk()), 2 & y) {
					const s = h.oxw();
					h.xp6(1), h.Q6J("routerLink", "en" === s.checkPath ? "/en" : "")("rel", "en" === s.checkPath ? "nofollow" : "dofollow"), h.xp6(1), h.s9C("src", s.headerLogo.Image.data.attributes.url, h.LSH), h.s9C("width", s.headerLogo.Image.data.attributes.width), h.s9C("height", s.headerLogo.Image.data.attributes.height), h.s9C("alt", s.headerLogo.Alt), h.s9C("title", s.headerLogo.Title)
				}
			}
			const Ks = function() {
					return {
						exact: !1
					}
				},
				Vo = function() {
					return ["is-active"]
				};

			function _o(y, c) {
				if (1 & y && (h.TgZ(0, "a", 25), h._uU(1), h.qZA()), 2 & y) {
					const s = h.oxw().$implicit,
						f = h.oxw();
					h.s9C("routerLink", s.attributes.Link), h.Q6J("routerLinkActiveOptions", h.DdM(5, Ks))("routerLinkActive", h.DdM(6, Vo))("rel", "en" === f.checkPath ? "nofollow" : "dofollow"), h.xp6(1), h.Oqu(s.attributes.Menu)
				}
			}
			const Ur = function() {
				return {
					exact: !0
				}
			};

			function Zs(y, c) {
				if (1 & y && (h.TgZ(0, "a", 25), h._uU(1), h.qZA()), 2 & y) {
					const s = h.oxw().$implicit,
						f = h.oxw();
					h.s9C("routerLink", null == s.attributes ? null : s.attributes.Link), h.Q6J("routerLinkActiveOptions", h.DdM(5, Ur))("routerLinkActive", h.DdM(6, Vo))("rel", "en" === f.checkPath ? "nofollow" : "dofollow"), h.xp6(1), h.hij("", null == s.attributes ? null : s.attributes.Menu, " ")
				}
			}

			function zc(y, c) {
				if (1 & y && (h.TgZ(0, "li", 22), h.YNc(1, _o, 2, 7, "a", 23), h.YNc(2, Zs, 2, 7, "ng-template", null, 24, h.W1O), h.qZA()), 2 & y) {
					const s = c.$implicit,
						f = h.MAs(3);
					h.xp6(1), h.Q6J("ngIf", s.attributes.Link.indexOf("/tuyen-dung") >= 0 || s.attributes.Link.indexOf("/recruit") >= 0)("ngIfElse", f)
				}
			}

			function ru(y, c) {
				if (1 & y) {
					const s = h.EpF();
					h.TgZ(0, "a", 27), h.NdJ("click", function() {
						h.CHM(s);
						const E = h.oxw(2);
						return h.KtG(E.closeTab())
					}), h._uU(1), h.qZA()
				}
				if (2 & y) {
					const s = h.oxw().$implicit,
						f = h.oxw();
					h.s9C("routerLink", s.attributes.Link), h.Q6J("routerLinkActiveOptions", h.DdM(5, Ks))("routerLinkActive", h.DdM(6, Vo))("rel", "en" === f.checkPath ? "nofollow" : "dofollow"), h.xp6(1), h.hij("", s.attributes.Menu, " ")
				}
			}

			function Ka(y, c) {
				if (1 & y) {
					const s = h.EpF();
					h.TgZ(0, "a", 27), h.NdJ("click", function() {
						h.CHM(s);
						const E = h.oxw(2);
						return h.KtG(E.closeTab())
					}), h._uU(1), h.qZA()
				}
				if (2 & y) {
					const s = h.oxw().$implicit,
						f = h.oxw();
					h.s9C("routerLink", null == s.attributes ? null : s.attributes.Link), h.Q6J("routerLinkActiveOptions", h.DdM(5, Ur))("routerLinkActive", h.DdM(6, Vo))("rel", "en" === f.checkPath ? "nofollow" : "dofollow"), h.xp6(1), h.Oqu(null == s.attributes ? null : s.attributes.Menu)
				}
			}

			function Ti(y, c) {
				if (1 & y && (h.TgZ(0, "li", 22), h.YNc(1, ru, 2, 7, "a", 26), h.YNc(2, Ka, 2, 7, "ng-template", null, 24, h.W1O), h.qZA()), 2 & y) {
					const s = c.$implicit,
						f = h.MAs(3);
					h.xp6(1), h.Q6J("ngIf", s.attributes.Link.indexOf("/tuyen-dung") >= 0 || s.attributes.Link.indexOf("/recruit") >= 0)("ngIfElse", f)
				}
			}
			const vo = function(y) {
				return {
					"active-locale": y
				}
			};
			let Za = (() => {
				class y {
					checkScroll() {
						let s = (document.documentElement.scrollTop || document.body.scrollTop) + document.documentElement.offsetHeight;
						this.showScroll = s > this.currentPosition, this.currentPosition = s
					}
					constructor(s, f) {
						this.headerService = s, this.router = f, this.headerData = null, this.headerLogo = null, this.menu = [], this.isSticky = !1, this.showScroll = !1, this.dataLanguage = sessionStorage.getItem("setLanguage") || "vi", this.checkPath = hn.p9
					}
					ngOnInit() {
						let s = JSON.parse(sessionStorage.getItem("dataHeaderPage"));
						s && (this.headerLogo = s.headerLogo, this.menu = s.menu, this.headerData = s.headerData), this.headerService.GetAll().subscribe(f => {
							f && f.data && f.data.length > 0 && (this.headerData = f.data[0]), this.headerData && (this.headerData.attributes.Logo && (this.headerLogo = this.headerData.attributes.Logo), this.headerData.attributes.Menus && (this.menu = this.headerData.attributes.Menus.data)), sessionStorage.setItem("dataHeaderPage", JSON.stringify({
								headerLogo: this.headerLogo,
								menu: this.menu,
								headerData: this.headerData
							}))
						})
					}
					openTabMenu() {
						this.menuMobile && (this.menuMobile.nativeElement.style.left = "0px" === this.menuMobile.nativeElement.style.left ? "-300px" : "0px")
					}
					closeTab() {
						this.menuMobile.nativeElement.style.left = "-300px"
					}
					selectLanguage(s) {
						sessionStorage.clear();
						let f = window.location.pathname;
						const E = this.menu.find(T => T.attributes.Link === f);
						if (s !== this.checkPath)
							if (f.indexOf("/recruit/") >= 0 || f.indexOf("/tuyen-dung/") >= 0) this.router.navigateByUrl("vi" === s ? "/" : "/en"), setTimeout(() => {
								location.reload()
							});
							else {
								if (E) {
									let T = E.attributes?.localizations.data[0].attributes.Link;
									this.router.navigateByUrl(T)
								} else this.router.navigateByUrl("vi" === s ? "/" : "/en");
								setTimeout(() => {
									location.reload()
								})
							} sessionStorage.setItem("setLanguage", s)
					}
					static #e = this.\u0275fac = function(f) {
						return new(f || y)(h.Y36(Nr), h.Y36(F.F0))
					};
					static #t = this.\u0275cmp = h.Xpm({
						type: y,
						selectors: [
							["app-header"]
						],
						viewQuery: function(f, E) {
							if (1 & f && h.Gf(Ya, 5), 2 & f) {
								let T;
								h.iGM(T = h.CRH()) && (E.menuMobile = T.first)
							}
						},
						hostBindings: function(f, E) {
							1 & f && h.NdJ("scroll", function(W) {
								return E.checkScroll(W)
							}, !1, h.Jf7)
						},
						standalone: !0,
						features: [h.jDz],
						decls: 34,
						vars: 12,
						consts: [
							["id", "myHeader", 1, "header", "sticky", 3, "ngClass"],
							["height", "80px", 1, "container-header"],
							[1, "header-container"],
							[1, "header-logo"],
							[4, "ngIf"],
							[1, "list-iteam-2"],
							["id", "nav"],
							["id", "navigation"],
							["class", "nav-item", 4, "ngFor", "ngForOf"],
							[1, "language"],
							["mat-button", "", 3, "matMenuTriggerFor"],
							[1, "material-symbols-outlined"],
							["language", "matMenu"],
							["mat-menu-item", "", 3, "ngClass", "click"],
							[1, "icon-mobile", 3, "click"],
							[1, "menu-mobile"],
							["menuMobile", ""],
							[1, "close-menu-mobile", 3, "click"],
							["id", "nav-mobile"],
							["id", "navigation-mobile"],
							[3, "routerLink", "rel"],
							[3, "src", "width", "height", "alt", "title"],
							[1, "nav-item"],
							["class", "nav-link", 3, "routerLinkActiveOptions", "routerLinkActive", "routerLink", "rel", 4, "ngIf", "ngIfElse"],
							["elseDefault", ""],
							[1, "nav-link", 3, "routerLinkActiveOptions", "routerLinkActive", "routerLink", "rel"],
							["class", "nav-link", 3, "routerLinkActiveOptions", "routerLinkActive", "routerLink", "rel", "click", 4, "ngIf", "ngIfElse"],
							[1, "nav-link", 3, "routerLinkActiveOptions", "routerLinkActive", "routerLink", "rel", "click"]
						],
						template: function(f, E) {
							if (1 & f && (h.ynx(0), h.TgZ(1, "div", 0)(2, "div", 1)(3, "div", 2)(4, "div", 3), h.YNc(5, ui, 3, 7, "ng-container", 4), h.qZA(), h.TgZ(6, "div", 5)(7, "div")(8, "nav", 6)(9, "ul", 7), h.YNc(10, zc, 4, 2, "li", 8), h.qZA()()()(), h.TgZ(11, "div", 9)(12, "button", 10)(13, "span", 11), h._uU(14, " language "), h.qZA()(), h.TgZ(15, "mat-menu", null, 12)(17, "button", 13), h.NdJ("click", function() {
									return E.selectLanguage("vi")
								}), h._uU(18, " Viet nam - Vn "), h.qZA(), h.TgZ(19, "button", 13), h.NdJ("click", function() {
									return E.selectLanguage("en")
								}), h._uU(20, " English- en "), h.qZA()()(), h.TgZ(21, "div", 14), h.NdJ("click", function() {
									return E.openTabMenu()
								}), h.TgZ(22, "span", 11), h._uU(23, " menu "), h.qZA()()()()(), h.BQk(), h.TgZ(24, "div", 15, 16)(26, "div", 17), h.NdJ("click", function() {
									return E.openTabMenu()
								}), h.TgZ(27, "span", 11), h._uU(28, " cancel "), h.qZA(), h.TgZ(29, "p"), h._uU(30), h.qZA()(), h.TgZ(31, "nav", 18)(32, "ul", 19), h.YNc(33, Ti, 4, 2, "li", 8), h.qZA()()()), 2 & f) {
								const T = h.MAs(16);
								h.xp6(1), h.Q6J("ngClass", E.showScroll ? "header-up" : "header-down"), h.xp6(4), h.Q6J("ngIf", !!E.headerLogo && !!E.headerLogo.Image), h.xp6(5), h.Q6J("ngForOf", E.menu), h.xp6(2), h.Q6J("matMenuTriggerFor", T), h.xp6(5), h.Q6J("ngClass", h.VKq(8, vo, "vi" === E.checkPath)), h.xp6(2), h.Q6J("ngClass", h.VKq(10, vo, "en" === E.checkPath)), h.xp6(11), h.hij(" ", null == E.headerData || null == E.headerData.attributes ? null : E.headerData.attributes.CloseMenuMobile, " "), h.xp6(3), h.Q6J("ngForOf", E.menu)
							}
						},
						dependencies: [gn.ez, gn.mk, gn.sg, gn.O5, F.rH, F.Od, qt, Ga, cs, Ve, Ys.ot, Ys.lW],
						styles: [".header-container[_ngcontent-%COMP%]{margin-right:auto;margin-left:auto;display:grid;grid-template-columns:1fr 7fr 1fr}.header-container[_ngcontent-%COMP%]   .icon-mobile[_ngcontent-%COMP%]{cursor:pointer;display:none;text-align:right}.header-container[_ngcontent-%COMP%]   .icon-mobile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{font-size:30px}.header-container[_ngcontent-%COMP%]   .icon-mobile[_ngcontent-%COMP%]:hover, .header-container[_ngcontent-%COMP%]   .icon-mobile[_ngcontent-%COMP%]:active{color:#ffc934}.language[_ngcontent-%COMP%]{display:flex}.language[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{height:100%}.language[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]     span.mat-button-wrapper{font-size:16px;line-height:28px;color:#363636;font-weight:600;opacity:.8}.menu-mobile[_ngcontent-%COMP%]{display:block;position:fixed;top:0;height:100%;width:300px;max-width:100%;padding-bottom:30px;font-size:15px;background-color:#fff;box-shadow:0 8px 40px #0000000f;color:#555;-webkit-user-select:none;user-select:none;z-index:9999;transition:left .3s ease 0s;left:-300px;right:auto;height:100vh;overflow-x:hidden;overflow-y:auto}.menu-mobile[_ngcontent-%COMP%]   .close-menu-mobile[_ngcontent-%COMP%]{display:flex;background-color:#ffc934;padding:20px 10px;align-items:center;cursor:pointer}.menu-mobile[_ngcontent-%COMP%]   .close-menu-mobile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{margin-right:10px}.menu-mobile[_ngcontent-%COMP%]   .close-menu-mobile[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{font-size:18px}.menu-mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{margin:0;padding:0}.menu-mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none}.menu-mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px;text-decoration:none;color:#363636;padding:20px 10px;width:100%;display:block}.menu-mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, .menu-mobile[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%]{color:#ffc934}#nav-mobile[_ngcontent-%COMP%]{background:#fff}.header-logo[_ngcontent-%COMP%]{display:flex;align-items:center}.header-container[_ngcontent-%COMP%]   #nav[_ngcontent-%COMP%]{display:flex;align-items:flex-end}.header-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%]{display:flex;margin:0;padding:0}.header-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{list-style:none;height:80px;line-height:80px;padding:0 26px}.header-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-size:16px;line-height:28px;color:#363636;display:block;width:100%;line-height:80px;opacity:.8;font-weight:600}.header-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ffba34;opacity:1}.header-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li.nav-item[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%]{color:#ffba34;opacity:1}@media (max-width: 1440px){.header-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{padding:0 20px}}@media (max-width: 1200px){.header-container[_ngcontent-%COMP%]   nav[_ngcontent-%COMP%] > ul[_ngcontent-%COMP%] > li[_ngcontent-%COMP%]{padding:0 18px}}.menu-mobile[_ngcontent-%COMP%]{display:none}@media (max-width: 1023px){.container-header[_ngcontent-%COMP%]{padding:10px 15px}.menu-mobile[_ngcontent-%COMP%]{display:block}.header-container[_ngcontent-%COMP%]{grid-template-columns:10fr 1fr 1fr}.header-container[_ngcontent-%COMP%]   .list-iteam-2[_ngcontent-%COMP%]{display:none}.header-container[_ngcontent-%COMP%]   .icon-mobile[_ngcontent-%COMP%]{display:flex;justify-content:flex-end;align-items:center}.header-container[_ngcontent-%COMP%]   .menu-mobile[_ngcontent-%COMP%]{display:block}}  .active-locale span{color:#ffc934}"]
					})
				}
				return y
			})();

			function p(y, c) {
				if (1 & y && (h.ynx(0), h.TgZ(1, "a", 13), h._UZ(2, "img", 14), h.qZA(), h.BQk()), 2 & y) {
					const s = h.oxw();
					h.xp6(1), h.Q6J("routerLink", "en" === s.checkPath ? "/en" : "")("rel", "en" === s.checkPath ? "nofollow" : "dofollow"), h.xp6(1), h.s9C("src", s.footerLogo.Image.data.attributes.url, h.LSH), h.s9C("width", s.footerLogo.Image.data.attributes.width), h.s9C("height", s.footerLogo.Image.data.attributes.height), h.s9C("alt", s.footerLogo.Alt), h.s9C("title", s.footerLogo.Title)
				}
			}
			const _ = function() {
					return {
						exact: !1
					}
				},
				d = function() {
					return ["is-active"]
				};

			function b(y, c) {
				if (1 & y && (h.TgZ(0, "a", 18), h._uU(1), h.qZA()), 2 & y) {
					const s = h.oxw().$implicit,
						f = h.oxw();
					h.s9C("routerLink", s.attributes.Link), h.Q6J("routerLinkActiveOptions", h.DdM(5, _))("routerLinkActive", h.DdM(6, d))("rel", "en" === f.checkPath ? "nofollow" : "dofollow"), h.xp6(1), h.hij(" ", null == s.attributes ? null : s.attributes.Menu, " ")
				}
			}
			const w = function() {
				return {
					exact: !0
				}
			};

			function P(y, c) {
				if (1 & y && (h.TgZ(0, "a", 18), h._uU(1), h.qZA()), 2 & y) {
					const s = h.oxw().$implicit,
						f = h.oxw();
					h.s9C("routerLink", s.attributes.Link), h.Q6J("routerLinkActiveOptions", h.DdM(5, w))("routerLinkActive", h.DdM(6, d))("rel", "en" === f.checkPath ? "nofollow" : "dofollow"), h.xp6(1), h.hij(" ", null == s.attributes ? null : s.attributes.Menu, " ")
				}
			}

			function Y(y, c) {
				if (1 & y && (h.TgZ(0, "li", 15), h.YNc(1, b, 2, 7, "a", 16), h.YNc(2, P, 2, 7, "ng-template", null, 17, h.W1O), h.qZA()), 2 & y) {
					const s = c.$implicit,
						f = h.MAs(3);
					h.xp6(1), h.Q6J("ngIf", s.attributes.Link.indexOf("/tuyen-dung") >= 0 || s.attributes.Link.indexOf("/recruit") >= 0)("ngIfElse", f)
				}
			}

			function Pe(y, c) {
				if (1 & y && (h.TgZ(0, "a", 18), h._uU(1), h.qZA()), 2 & y) {
					const s = h.oxw().$implicit,
						f = h.oxw();
					h.s9C("routerLink", s.attributes.Link), h.Q6J("routerLinkActiveOptions", h.DdM(5, _))("routerLinkActive", h.DdM(6, d))("rel", "en" === f.checkPath ? "nofollow" : "dofollow"), h.xp6(1), h.hij(" ", null == s.attributes ? null : s.attributes.Menu, " ")
				}
			}

			function Me(y, c) {
				if (1 & y && (h.TgZ(0, "a", 18), h._uU(1), h.qZA()), 2 & y) {
					const s = h.oxw().$implicit,
						f = h.oxw();
					h.s9C("routerLink", s.attributes.Link), h.Q6J("routerLinkActiveOptions", h.DdM(5, w))("routerLinkActive", h.DdM(6, d))("rel", "en" === f.checkPath ? "nofollow" : "dofollow"), h.xp6(1), h.hij(" ", s.attributes.Menu, " ")
				}
			}

			function ct(y, c) {
				if (1 & y && (h.TgZ(0, "li", 15), h.YNc(1, Pe, 2, 7, "a", 16), h.YNc(2, Me, 2, 7, "ng-template", null, 17, h.W1O), h.qZA()), 2 & y) {
					const s = c.$implicit,
						f = h.MAs(3);
					h.xp6(1), h.Q6J("ngIf", s.attributes.Link.indexOf("/tuyen-dung") >= 0 || s.attributes.Link.indexOf("/recruit") >= 0)("ngIfElse", f)
				}
			}

			function $t(y, c) {
				if (1 & y && (h.ynx(0), h.TgZ(1, "div", 19)(2, "div", 20)(3, "span", 21), h._uU(4), h.qZA(), h.TgZ(5, "span"), h._uU(6), h.qZA()()(), h.BQk()), 2 & y) {
					const s = h.oxw();
					h.xp6(4), h.Oqu(s.taxInfo.attributes.IconName), h.xp6(2), h.AsE(" ", null == s.footerData.attributes ? null : s.footerData.attributes.TitleTaxInfo, " ", null == s.taxInfo.attributes ? null : s.taxInfo.attributes.Value, "")
				}
			}

			function En(y, c) {
				if (1 & y && (h.ynx(0), h.TgZ(1, "div", 19)(2, "div", 20)(3, "span", 21), h._uU(4), h.qZA(), h.TgZ(5, "a", 22), h._uU(6), h.qZA()()(), h.BQk()), 2 & y) {
					const s = h.oxw();
					h.xp6(4), h.Oqu(s.phoneInfo.attributes.IconName), h.xp6(1), h.MGl("href", "tel:", null == s.phoneInfo.attributes ? null : s.phoneInfo.attributes.Value, "", h.LSH), h.xp6(1), h.Oqu(null == s.phoneInfo.attributes ? null : s.phoneInfo.attributes.Value)
				}
			}

			function Zt(y, c) {
				if (1 & y && (h.ynx(0), h.TgZ(1, "div", 19)(2, "div", 20)(3, "span", 21), h._uU(4), h.qZA(), h.TgZ(5, "a", 22), h._uU(6), h.qZA()()(), h.BQk()), 2 & y) {
					const s = h.oxw();
					h.xp6(4), h.Oqu(null == s.emailInfo || null == s.emailInfo.attributes ? null : s.emailInfo.attributes.IconName), h.xp6(1), h.MGl("href", "mailto:", null == s.emailInfo.attributes ? null : s.emailInfo.attributes.Value, "", h.LSH), h.xp6(1), h.Oqu(null == s.emailInfo.attributes ? null : s.emailInfo.attributes.Value)
				}
			}

			function ro(y, c) {
				if (1 & y && (h.ynx(0), h.TgZ(1, "div", 23)(2, "div", 20)(3, "span", 21), h._uU(4), h.qZA(), h.TgZ(5, "span"), h._uU(6), h.qZA()()(), h.BQk()), 2 & y) {
					const s = h.oxw();
					h.xp6(4), h.hij(" ", s.officeInfo.attributes.IconName, " "), h.xp6(2), h.AsE(" ", null == s.footerData.attributes ? null : s.footerData.attributes.TitleOfficeInfo, " ", null == s.officeInfo.attributes ? null : s.officeInfo.attributes.Value, " ")
				}
			}

			function hr(y, c) {
				if (1 & y && (h.ynx(0), h.TgZ(1, "div", 23)(2, "div", 20)(3, "span", 21), h._uU(4), h.qZA(), h.TgZ(5, "span"), h._uU(6), h.qZA()()(), h.BQk()), 2 & y) {
					const s = h.oxw();
					h.xp6(4), h.hij(" ", s.headOfficeInfo.attributes.IconName, " "), h.xp6(2), h.AsE(" ", null == s.footerData.attributes ? null : s.footerData.attributes.TitleHeadOfficeInfo, " ", null == s.headOfficeInfo.attributes ? null : s.headOfficeInfo.attributes.Value, " ")
				}
			}
			let pr = (() => {
					class y {
						constructor(s, f) {
							this.menuService = s, this.FooterService = f, this.imagePath = "../../../../img/home/log_footer.webp", this.homeURL = "https://volio.group", this.footerData = null, this.footerLogo = null, this.taxInfo = null, this.phoneInfo = null, this.emailInfo = null, this.officeInfo = null, this.headOfficeInfo = null, this.checkPath = hn.p9, this.menuFooter = []
						}
						ngOnInit() {
							this.menuService.GetAll().subscribe(s => {
								this.menuFooter = s.data
							}), this.FooterService.GetAll().subscribe(s => {
								if (s && s.data && s.data.length > 0 && (this.footerData = s.data[0]), this.footerData && (this.footerData.attributes.Logo && (this.footerLogo = this.footerData.attributes.Logo), this.footerData.attributes.ContactInfos))
									for (let f of this.footerData.attributes.ContactInfos.data) switch (f.attributes.Field) {
										case "TaxNumber":
											this.taxInfo = f;
											break;
										case "Phone":
											this.phoneInfo = f;
											break;
										case "Email":
											this.emailInfo = f;
											break;
										case "Office":
											this.officeInfo = f;
											break;
										case "HeadOffice":
											this.headOfficeInfo = f
									}
							})
						}
						static #e = this.\u0275fac = function(f) {
							return new(f || y)(h.Y36(Tr), h.Y36(or.ci))
						};
						static #t = this.\u0275cmp = h.Xpm({
							type: y,
							selectors: [
								["app-footer"]
							],
							standalone: !0,
							features: [h.jDz],
							decls: 24,
							vars: 16,
							consts: [
								["id", "footer", 1, "container-footer"],
								[1, "footer-logo"],
								[4, "ngIf"],
								[1, "list-footer", "item-footer-2", "item-footer"],
								["id", "nav-footer"],
								["id", "list-item-footer-1"],
								["class", "nav-item", 4, "ngFor", "ngForOf"],
								["id", "list-item-footer-2"],
								[1, "item-footer-3", "item-footer"],
								[1, "information-footer", "information"],
								[1, " ", "item-footer"],
								[1, "fb"],
								["src", "https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fvolio.group&tabs=timeline&width=292&height=132&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId", "width", "292", "height", "132", "scrolling", "no", "frameborder", "0", "allowfullscreen", "true", "allow", "autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share", 2, "border", "none", "overflow", "hidden"],
								[3, "routerLink", "rel"],
								[3, "src", "width", "height", "alt", "title"],
								[1, "nav-item"],
								["class", "nav-link", 3, "routerLinkActiveOptions", "routerLink", "routerLinkActive", "rel", 4, "ngIf", "ngIfElse"],
								["elseDefault", ""],
								[1, "nav-link", 3, "routerLinkActiveOptions", "routerLink", "routerLinkActive", "rel"],
								[1, "information-item", "information-item-list"],
								[1, "item"],
								[1, "material-symbols-outlined", "icon-footer"],
								[2, "text-decoration", "none", 3, "href"],
								[1, "information-item", "information"]
							],
							template: function(f, E) {
								1 & f && (h.ynx(0), h.TgZ(1, "div", 0)(2, "div", 1), h.YNc(3, p, 3, 7, "ng-container", 2), h.qZA(), h.TgZ(4, "div", 3)(5, "div")(6, "nav", 4)(7, "ul", 5), h.YNc(8, Y, 4, 2, "li", 6), h.ALo(9, "slice"), h.qZA(), h.TgZ(10, "ul", 7), h.YNc(11, ct, 4, 2, "li", 6), h.ALo(12, "slice"), h.qZA()()()(), h.TgZ(13, "div", 8)(14, "div")(15, "div", 9), h.YNc(16, $t, 7, 3, "ng-container", 2), h.YNc(17, En, 7, 3, "ng-container", 2), h.YNc(18, Zt, 7, 3, "ng-container", 2), h.qZA(), h.YNc(19, ro, 7, 3, "ng-container", 2), h.YNc(20, hr, 7, 3, "ng-container", 2), h.qZA()(), h.TgZ(21, "div", 10)(22, "div", 11), h._UZ(23, "iframe", 12), h.qZA()()(), h.BQk()), 2 & f && (h.xp6(3), h.Q6J("ngIf", !!E.footerLogo && !!E.footerLogo.Image), h.xp6(5), h.Q6J("ngForOf", h.Dn7(9, 8, E.menuFooter, 1, 4)), h.xp6(3), h.Q6J("ngForOf", h.Dn7(12, 12, E.menuFooter, 4, 7)), h.xp6(5), h.Q6J("ngIf", !!E.taxInfo), h.xp6(1), h.Q6J("ngIf", !!E.phoneInfo), h.xp6(1), h.Q6J("ngIf", !!E.emailInfo), h.xp6(1), h.Q6J("ngIf", !!E.officeInfo), h.xp6(1), h.Q6J("ngIf", !!E.headOfficeInfo))
							},
							dependencies: [F.rH, F.Od, gn.ez, gn.sg, gn.O5, gn.OU],
							styles: [".container-footer[_ngcontent-%COMP%]{padding-top:45px;padding-bottom:45px;display:grid;grid-template-columns:2fr 2fr 4fr 2fr;gap:15px}.footer-logo[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center}.footer-logo[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:inherit}.container-footer[_ngcontent-%COMP%]   .item-footer[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center}.container-footer[_ngcontent-%COMP%]   , .container-footer[_ngcontent-%COMP%]     .fb[_ngcontent-%COMP%]{position:relative}.container-footer[_ngcontent-%COMP%]     .fb[_ngcontent-%COMP%]   .share-fb[_ngcontent-%COMP%]{position:absolute;bottom:12px;right:0}.container-footer[_ngcontent-%COMP%]   .list-footer[_ngcontent-%COMP%]{width:100%}.container-footer[_ngcontent-%COMP%]   .list-footer[_ngcontent-%COMP%]   nav#nav-footer[_ngcontent-%COMP%]{display:flex;justify-content:center;border-right:1px solid rgba(54,54,54,.2);border-left:1px solid rgba(54,54,54,.2);padding-right:30px}.container-footer[_ngcontent-%COMP%]   .list-footer[_ngcontent-%COMP%]   nav#nav-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0 0 0 50px}.container-footer[_ngcontent-%COMP%]   .list-footer[_ngcontent-%COMP%]   nav#nav-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:not(:last-child){margin-bottom:20px}.container-footer[_ngcontent-%COMP%]   .list-footer[_ngcontent-%COMP%]   nav#nav-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-weight:500;font-size:14px;line-height:24px;color:#363636;text-decoration:unset}.container-footer[_ngcontent-%COMP%]   .list-footer[_ngcontent-%COMP%]   nav#nav-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.is-active[_ngcontent-%COMP%]{color:#ffc934}.container-footer[_ngcontent-%COMP%]   .list-footer[_ngcontent-%COMP%]   nav#nav-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ffc934}.container-footer[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]:not(:last-child){margin-bottom:20px}.container-footer[_ngcontent-%COMP%]   .information-footer[_ngcontent-%COMP%]{display:flex;align-items:center}.container-footer[_ngcontent-%COMP%]   .information-footer[_ngcontent-%COMP%]   .information-item-list[_ngcontent-%COMP%]:not(:last-child){margin-right:30px}.container-footer[_ngcontent-%COMP%]   .information-footer[_ngcontent-%COMP%]   .information-item-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%], .container-footer[_ngcontent-%COMP%]   .information-footer[_ngcontent-%COMP%]   .information-item-list[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#363636}.container-footer[_ngcontent-%COMP%]   .information-footer[_ngcontent-%COMP%]   .information-item-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ffc934}.container-footer[_ngcontent-%COMP%]   .information-item[_ngcontent-%COMP%]{display:flex}.container-footer[_ngcontent-%COMP%]   .information-item[_ngcontent-%COMP%]   .item[_ngcontent-%COMP%]{display:flex;line-height:24px}.container-footer[_ngcontent-%COMP%]   .information-item[_ngcontent-%COMP%]   span.icon-footer[_ngcontent-%COMP%]{margin-right:10px}@media only screen and (max-width: 1440px){.container-footer[_ngcontent-%COMP%]   .list-footer[_ngcontent-%COMP%]   nav#nav-footer[_ngcontent-%COMP%]{padding-right:15px}.container-footer[_ngcontent-%COMP%]   .list-footer[_ngcontent-%COMP%]   nav#nav-footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:30px}.container-footer[_ngcontent-%COMP%]   .information-footer[_ngcontent-%COMP%]{display:block}.container-footer[_ngcontent-%COMP%]   .information-footer[_ngcontent-%COMP%]   .information-item-list[_ngcontent-%COMP%]{display:inline-block}.container-footer[_ngcontent-%COMP%]   .information-footer[_ngcontent-%COMP%]   .information-item-list[_ngcontent-%COMP%]:last-child{margin-top:20px}}@media only screen and (max-width: 1023px){.container-footer[_ngcontent-%COMP%]{grid-template-columns:2fr 2fr}}@media only screen and (max-width: 576px){.container-footer[_ngcontent-%COMP%]{grid-template-columns:1fr}.container-footer[_ngcontent-%COMP%]   .list-footer[_ngcontent-%COMP%]   nav#nav-footer[_ngcontent-%COMP%]{border-top:1px solid rgba(54,54,54,.2);border-bottom:1px solid rgba(54,54,54,.2);border-right:unset;border-left:unset;padding:30px 0}.container-footer[_ngcontent-%COMP%]   .footer-logo[_ngcontent-%COMP%], .container-footer[_ngcontent-%COMP%]   .item-footer[_ngcontent-%COMP%]{justify-content:center}.container-footer[_ngcontent-%COMP%]   .item-footer[_ngcontent-%COMP%]{margin-top:15px}.container-footer[_ngcontent-%COMP%]   .information[_ngcontent-%COMP%]:not(:last-child){margin-bottom:10px}.container-footer[_ngcontent-%COMP%]   .information-footer[_ngcontent-%COMP%]   .information-item-list[_ngcontent-%COMP%]:last-child{margin-top:10px}}.email-info.information-item-list[_ngcontent-%COMP%]{justify-content:space-between}.email-info.information-item-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:#363636}.email-info.information-item-list[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:#ffc934}"]
						})
					}
					return y
				})(),
				au = (() => {
					class y {
						static #e = this.\u0275fac = function(f) {
							return new(f || y)
						};
						static #t = this.\u0275mod = h.oAB({
							type: y
						});
						static #n = this.\u0275inj = h.cJS({
							imports: [ni.si, ni.BQ, ni.BQ]
						})
					}
					return y
				})();
			const Gc = function(y) {
				return {
					"show-scroll": y
				}
			};
			(0, l.Cg)((() => {
				class y {
					checkScroll() {
						this.showScroll = (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0) >= this.showScrollHeight, this.isSticky = window.pageYOffset > 0
					}
					constructor(s, f, E, T) {
						this.seoService = s, this.meta = f, this.title = E, this.router = T, this.isSticky = !1, this.showScroll = !1, this.showScrollHeight = 300, this.hideScrollHeight = 10
					}
					scrollToTop() {
						! function s() {
							var f = document.documentElement.scrollTop || document.body.scrollTop;
							f > 0 && (window.requestAnimationFrame(s), window.scrollTo(0, f - f / 5))
						}()
					}
					onActive() {
						window.scroll(0, 0)
					}
					ngOnInit() {
						this.seoService.getSEOData().subscribe(s => {
							let f = s.data;
							for (let E of f) "title" == E.attributes.Name || this.meta.addTag("property" === E.attributes.Attribute ? {
								property: E.attributes.Name,
								content: E.attributes && E.attributes.Value
							} : {
								name: E.attributes.Name,
								content: E.attributes.Value
							})
						}), this.router.events.pipe((0, ti.h)(s => s instanceof F.OD)).subscribe(s => {
							if (s) {
								let f = s.url,
									E = this.router.config.find(T => `/${T.path}` === f);
								E && this.title.setTitle(String(E.title))
							}
						})
					}
					ngOnDestroy() {}
					static #e = this.\u0275fac = function(f) {
						return new(f || y)(h.Y36(lr), h.Y36(l.h_), h.Y36(l.Dx), h.Y36(F.F0))
					};
					static #t = this.\u0275cmp = h.Xpm({
						type: y,
						selectors: [
							["app-root"]
						],
						hostBindings: function(f, E) {
							1 & f && h.NdJ("scroll", function() {
								return E.checkScroll()
							}, !1, h.Jf7)
						},
						standalone: !0,
						features: [h.jDz],
						decls: 9,
						vars: 3,
						consts: [
							[1, "scroll-to-top", 3, "ngClass", "click"],
							[1, "material-symbols-outlined"],
							[3, "activate"]
						],
						template: function(f, E) {
							1 & f && (h.TgZ(0, "button", 0), h.NdJ("click", function() {
								return E.onActive()
							}), h.TgZ(1, "span", 1), h._uU(2, " keyboard_double_arrow_up "), h.qZA()(), h.TgZ(3, "header"), h._UZ(4, "app-header"), h.qZA(), h.TgZ(5, "main")(6, "router-outlet", 2), h.NdJ("activate", function() {
								return E.onActive()
							}), h.qZA()(), h.TgZ(7, "footer"), h._UZ(8, "app-footer"), h.qZA()), 2 & f && h.Q6J("ngClass", h.VKq(1, Gc, E.showScroll))
						},
						dependencies: [gn.ez, gn.mk, O.JF, F.lC, Za, pr, au],
						styles: [".scroll-to-top[_ngcontent-%COMP%]{position:fixed;bottom:20px;right:0;opacity:0;transition:all .4s ease-in-out;width:50px;height:50px;line-height:50px;background:black;color:#fff;border:none;cursor:pointer;border-radius:5px;z-index:9998;display:flex;align-items:center;justify-content:center;transform:translate(100px)}.scroll-to-top[_ngcontent-%COMP%]:hover{color:#ffba34}.scroll-to-top[_ngcontent-%COMP%]   span.material-symbols-outlined[_ngcontent-%COMP%]{display:flex;height:100%;align-items:center;justify-content:center}.show-scroll[_ngcontent-%COMP%]{right:30px;opacity:1;transform:translate(0)}"]
					})
				}
				return y
			})(), De).catch(y => console.error(y))
		},
		5619: (Ge, re, v) => {
			v.d(re, {
				X: () => O
			});
			var l = v(8645);
			class O extends l.x {
				constructor(h) {
					super(), this._value = h
				}
				get value() {
					return this.getValue()
				}
				_subscribe(h) {
					const B = super._subscribe(h);
					return !B.closed && h.next(this._value), B
				}
				getValue() {
					const {
						hasError: h,
						thrownError: B,
						_value: K
					} = this;
					if (h) throw B;
					return this._throwIfClosed(), K
				}
				next(h) {
					super.next(this._value = h)
				}
			}
		},
		5592: (Ge, re, v) => {
			v.d(re, {
				y: () => ae
			});
			var l = v(305),
				O = v(7394),
				F = v(4850),
				h = v(8407),
				B = v(2653),
				K = v(4674),
				ne = v(1441);
			let ae = (() => {
				class de {
					constructor(xe) {
						xe && (this._subscribe = xe)
					}
					lift(xe) {
						const Ne = new de;
						return Ne.source = this, Ne.operator = xe, Ne
					}
					subscribe(xe, Ne, Ye) {
						const ge = function Q(de) {
							return de && de instanceof l.Lv || function te(de) {
								return de && (0, K.m)(de.next) && (0, K.m)(de.error) && (0, K.m)(de.complete)
							}(de) && (0, O.Nn)(de)
						}(xe) ? xe : new l.Hp(xe, Ne, Ye);
						return (0, ne.x)(() => {
							const {
								operator: it,
								source: lt
							} = this;
							ge.add(it ? it.call(ge, lt) : lt ? this._subscribe(ge) : this._trySubscribe(ge))
						}), ge
					}
					_trySubscribe(xe) {
						try {
							return this._subscribe(xe)
						} catch (Ne) {
							xe.error(Ne)
						}
					}
					forEach(xe, Ne) {
						return new(Ne = ie(Ne))((Ye, ge) => {
							const it = new l.Hp({
								next: lt => {
									try {
										xe(lt)
									} catch (qe) {
										ge(qe), it.unsubscribe()
									}
								},
								error: ge,
								complete: Ye
							});
							this.subscribe(it)
						})
					}
					_subscribe(xe) {
						var Ne;
						return null === (Ne = this.source) || void 0 === Ne ? void 0 : Ne.subscribe(xe)
					} [F.L]() {
						return this
					}
					pipe(...xe) {
						return (0, h.U)(xe)(this)
					}
					toPromise(xe) {
						return new(xe = ie(xe))((Ne, Ye) => {
							let ge;
							this.subscribe(it => ge = it, it => Ye(it), () => Ne(ge))
						})
					}
				}
				return de.create = ye => new de(ye), de
			})();

			function ie(de) {
				var ye;
				return null !== (ye = de ?? B.config.Promise) && void 0 !== ye ? ye : Promise
			}
		},
		8645: (Ge, re, v) => {
			v.d(re, {
				x: () => ne
			});
			var l = v(5592),
				O = v(7394);
			const h = (0, v(2306).d)(ie => function() {
				ie(this), this.name = "ObjectUnsubscribedError", this.message = "object unsubscribed"
			});
			var B = v(9039),
				K = v(1441);
			let ne = (() => {
				class ie extends l.y {
					constructor() {
						super(), this.closed = !1, this.currentObservers = null, this.observers = [], this.isStopped = !1, this.hasError = !1, this.thrownError = null
					}
					lift(Q) {
						const de = new ae(this, this);
						return de.operator = Q, de
					}
					_throwIfClosed() {
						if (this.closed) throw new h
					}
					next(Q) {
						(0, K.x)(() => {
							if (this._throwIfClosed(), !this.isStopped) {
								this.currentObservers || (this.currentObservers = Array.from(this.observers));
								for (const de of this.currentObservers) de.next(Q)
							}
						})
					}
					error(Q) {
						(0, K.x)(() => {
							if (this._throwIfClosed(), !this.isStopped) {
								this.hasError = this.isStopped = !0, this.thrownError = Q;
								const {
									observers: de
								} = this;
								for (; de.length;) de.shift().error(Q)
							}
						})
					}
					complete() {
						(0, K.x)(() => {
							if (this._throwIfClosed(), !this.isStopped) {
								this.isStopped = !0;
								const {
									observers: Q
								} = this;
								for (; Q.length;) Q.shift().complete()
							}
						})
					}
					unsubscribe() {
						this.isStopped = this.closed = !0, this.observers = this.currentObservers = null
					}
					get observed() {
						var Q;
						return (null === (Q = this.observers) || void 0 === Q ? void 0 : Q.length) > 0
					}
					_trySubscribe(Q) {
						return this._throwIfClosed(), super._trySubscribe(Q)
					}
					_subscribe(Q) {
						return this._throwIfClosed(), this._checkFinalizedStatuses(Q), this._innerSubscribe(Q)
					}
					_innerSubscribe(Q) {
						const {
							hasError: de,
							isStopped: ye,
							observers: xe
						} = this;
						return de || ye ? O.Lc : (this.currentObservers = null, xe.push(Q), new O.w0(() => {
							this.currentObservers = null, (0, B.P)(xe, Q)
						}))
					}
					_checkFinalizedStatuses(Q) {
						const {
							hasError: de,
							thrownError: ye,
							isStopped: xe
						} = this;
						de ? Q.error(ye) : xe && Q.complete()
					}
					asObservable() {
						const Q = new l.y;
						return Q.source = this, Q
					}
				}
				return ie.create = (te, Q) => new ae(te, Q), ie
			})();
			class ae extends ne {
				constructor(te, Q) {
					super(), this.destination = te, this.source = Q
				}
				next(te) {
					var Q, de;
					null === (de = null === (Q = this.destination) || void 0 === Q ? void 0 : Q.next) || void 0 === de || de.call(Q, te)
				}
				error(te) {
					var Q, de;
					null === (de = null === (Q = this.destination) || void 0 === Q ? void 0 : Q.error) || void 0 === de || de.call(Q, te)
				}
				complete() {
					var te, Q;
					null === (Q = null === (te = this.destination) || void 0 === te ? void 0 : te.complete) || void 0 === Q || Q.call(te)
				}
				_subscribe(te) {
					var Q, de;
					return null !== (de = null === (Q = this.source) || void 0 === Q ? void 0 : Q.subscribe(te)) && void 0 !== de ? de : O.Lc
				}
			}
		},
		305: (Ge, re, v) => {
			v.d(re, {
				Hp: () => Ye,
				Lv: () => de
			});
			var l = v(4674),
				O = v(7394),
				F = v(2653),
				h = v(3894),
				B = v(2420);
			const K = ie("C", void 0, void 0);

			function ie(ce, $, Ie) {
				return {
					kind: ce,
					value: $,
					error: Ie
				}
			}
			var te = v(7599),
				Q = v(1441);
			class de extends O.w0 {
				constructor($) {
					super(), this.isStopped = !1, $ ? (this.destination = $, (0, O.Nn)($) && $.add(this)) : this.destination = qe
				}
				static create($, Ie, he) {
					return new Ye($, Ie, he)
				}
				next($) {
					this.isStopped ? lt(function ae(ce) {
						return ie("N", ce, void 0)
					}($), this) : this._next($)
				}
				error($) {
					this.isStopped ? lt(function ne(ce) {
						return ie("E", void 0, ce)
					}($), this) : (this.isStopped = !0, this._error($))
				}
				complete() {
					this.isStopped ? lt(K, this) : (this.isStopped = !0, this._complete())
				}
				unsubscribe() {
					this.closed || (this.isStopped = !0, super.unsubscribe(), this.destination = null)
				}
				_next($) {
					this.destination.next($)
				}
				_error($) {
					try {
						this.destination.error($)
					} finally {
						this.unsubscribe()
					}
				}
				_complete() {
					try {
						this.destination.complete()
					} finally {
						this.unsubscribe()
					}
				}
			}
			const ye = Function.prototype.bind;

			function xe(ce, $) {
				return ye.call(ce, $)
			}
			class Ne {
				constructor($) {
					this.partialObserver = $
				}
				next($) {
					const {
						partialObserver: Ie
					} = this;
					if (Ie.next) try {
						Ie.next($)
					} catch (he) {
						ge(he)
					}
				}
				error($) {
					const {
						partialObserver: Ie
					} = this;
					if (Ie.error) try {
						Ie.error($)
					} catch (he) {
						ge(he)
					} else ge($)
				}
				complete() {
					const {
						partialObserver: $
					} = this;
					if ($.complete) try {
						$.complete()
					} catch (Ie) {
						ge(Ie)
					}
				}
			}
			class Ye extends de {
				constructor($, Ie, he) {
					let ue;
					if (super(), (0, l.m)($) || !$) ue = {
						next: $ ?? void 0,
						error: Ie ?? void 0,
						complete: he ?? void 0
					};
					else {
						let Ae;
						this && F.config.useDeprecatedNextContext ? (Ae = Object.create($), Ae.unsubscribe = () => this.unsubscribe(), ue = {
							next: $.next && xe($.next, Ae),
							error: $.error && xe($.error, Ae),
							complete: $.complete && xe($.complete, Ae)
						}) : ue = $
					}
					this.destination = new Ne(ue)
				}
			}

			function ge(ce) {
				F.config.useDeprecatedSynchronousErrorHandling ? (0, Q.O)(ce) : (0, h.h)(ce)
			}

			function lt(ce, $) {
				const {
					onStoppedNotification: Ie
				} = F.config;
				Ie && te.z.setTimeout(() => Ie(ce, $))
			}
			const qe = {
				closed: !0,
				next: B.Z,
				error: function it(ce) {
					throw ce
				},
				complete: B.Z
			}
		},
		7394: (Ge, re, v) => {
			v.d(re, {
				Lc: () => K,
				w0: () => B,
				Nn: () => ne
			});
			var l = v(4674);
			const F = (0, v(2306).d)(ie => function(Q) {
				ie(this), this.message = Q ? `${Q.length} errors occurred during unsubscription:\n${Q.map((de,ye)=>`${ye+1}) ${de.toString()}`).join("\n  ")}` : "", this.name = "UnsubscriptionError", this.errors = Q
			});
			var h = v(9039);
			class B {
				constructor(te) {
					this.initialTeardown = te, this.closed = !1, this._parentage = null, this._finalizers = null
				}
				unsubscribe() {
					let te;
					if (!this.closed) {
						this.closed = !0;
						const {
							_parentage: Q
						} = this;
						if (Q)
							if (this._parentage = null, Array.isArray(Q))
								for (const xe of Q) xe.remove(this);
							else Q.remove(this);
						const {
							initialTeardown: de
						} = this;
						if ((0, l.m)(de)) try {
							de()
						} catch (xe) {
							te = xe instanceof F ? xe.errors : [xe]
						}
						const {
							_finalizers: ye
						} = this;
						if (ye) {
							this._finalizers = null;
							for (const xe of ye) try {
								ae(xe)
							} catch (Ne) {
								te = te ?? [], Ne instanceof F ? te = [...te, ...Ne.errors] : te.push(Ne)
							}
						}
						if (te) throw new F(te)
					}
				}
				add(te) {
					var Q;
					if (te && te !== this)
						if (this.closed) ae(te);
						else {
							if (te instanceof B) {
								if (te.closed || te._hasParent(this)) return;
								te._addParent(this)
							}(this._finalizers = null !== (Q = this._finalizers) && void 0 !== Q ? Q : []).push(te)
						}
				}
				_hasParent(te) {
					const {
						_parentage: Q
					} = this;
					return Q === te || Array.isArray(Q) && Q.includes(te)
				}
				_addParent(te) {
					const {
						_parentage: Q
					} = this;
					this._parentage = Array.isArray(Q) ? (Q.push(te), Q) : Q ? [Q, te] : te
				}
				_removeParent(te) {
					const {
						_parentage: Q
					} = this;
					Q === te ? this._parentage = null : Array.isArray(Q) && (0, h.P)(Q, te)
				}
				remove(te) {
					const {
						_finalizers: Q
					} = this;
					Q && (0, h.P)(Q, te), te instanceof B && te._removeParent(this)
				}
			}
			B.EMPTY = (() => {
				const ie = new B;
				return ie.closed = !0, ie
			})();
			const K = B.EMPTY;

			function ne(ie) {
				return ie instanceof B || ie && "closed" in ie && (0, l.m)(ie.remove) && (0, l.m)(ie.add) && (0, l.m)(ie.unsubscribe)
			}

			function ae(ie) {
				(0, l.m)(ie) ? ie(): ie.unsubscribe()
			}
		},
		2653: (Ge, re, v) => {
			v.d(re, {
				config: () => l
			});
			const l = {
				onUnhandledError: null,
				onStoppedNotification: null,
				Promise: void 0,
				useDeprecatedSynchronousErrorHandling: !1,
				useDeprecatedNextContext: !1
			}
		},
		2572: (Ge, re, v) => {
			v.d(re, {
				a: () => te
			});
			var l = v(5592),
				O = v(7453),
				F = v(7715),
				h = v(2737),
				B = v(7400),
				K = v(9940),
				ne = v(2714),
				ae = v(8251),
				ie = v(7103);

			function te(...ye) {
				const xe = (0, K.yG)(ye),
					Ne = (0, K.jO)(ye),
					{
						args: Ye,
						keys: ge
					} = (0, O.D)(ye);
				if (0 === Ye.length) return (0, F.D)([], xe);
				const it = new l.y(function Q(ye, xe, Ne = h.y) {
					return Ye => {
						de(xe, () => {
							const {
								length: ge
							} = ye, it = new Array(ge);
							let lt = ge,
								qe = ge;
							for (let ce = 0; ce < ge; ce++) de(xe, () => {
								const $ = (0, F.D)(ye[ce], xe);
								let Ie = !1;
								$.subscribe((0, ae.x)(Ye, he => {
									it[ce] = he, Ie || (Ie = !0, qe--), qe || Ye.next(Ne(it.slice()))
								}, () => {
									--lt || Ye.complete()
								}))
							}, Ye)
						}, Ye)
					}
				}(Ye, xe, ge ? lt => (0, ne.n)(ge, lt) : h.y));
				return Ne ? it.pipe((0, B.Z)(Ne)) : it
			}

			function de(ye, xe, Ne) {
				ye ? (0, ie.f)(Ne, ye, xe) : xe()
			}
		},
		5211: (Ge, re, v) => {
			v.d(re, {
				z: () => B
			});
			var l = v(7537),
				F = v(9940),
				h = v(7715);

			function B(...K) {
				return function O() {
					return (0, l.J)(1)
				}()((0, h.D)(K, (0, F.yG)(K)))
			}
		},
		4911: (Ge, re, v) => {
			v.d(re, {
				P: () => F
			});
			var l = v(5592),
				O = v(4829);

			function F(h) {
				return new l.y(B => {
					(0, O.Xf)(h()).subscribe(B)
				})
			}
		},
		6232: (Ge, re, v) => {
			v.d(re, {
				E: () => O
			});
			const O = new(v(5592).y)(B => B.complete())
		},
		7715: (Ge, re, v) => {
			v.d(re, {
				D: () => he
			});
			var l = v(4829),
				O = v(7103),
				F = v(9360),
				h = v(8251);

			function B(ue, Ae = 0) {
				return (0, F.e)((We, rt) => {
					We.subscribe((0, h.x)(rt, Ot => (0, O.f)(rt, ue, () => rt.next(Ot), Ae), () => (0, O.f)(rt, ue, () => rt.complete(), Ae), Ot => (0, O.f)(rt, ue, () => rt.error(Ot), Ae)))
				})
			}

			function K(ue, Ae = 0) {
				return (0, F.e)((We, rt) => {
					rt.add(ue.schedule(() => We.subscribe(rt), Ae))
				})
			}
			var ie = v(5592),
				Q = v(4971),
				de = v(4674);

			function xe(ue, Ae) {
				if (!ue) throw new Error("Iterable cannot be null");
				return new ie.y(We => {
					(0, O.f)(We, Ae, () => {
						const rt = ue[Symbol.asyncIterator]();
						(0, O.f)(We, Ae, () => {
							rt.next().then(Ot => {
								Ot.done ? We.complete() : We.next(Ot.value)
							})
						}, 0, !0)
					})
				})
			}
			var Ne = v(8382),
				Ye = v(4026),
				ge = v(4266),
				it = v(3664),
				lt = v(5726),
				qe = v(9853),
				ce = v(541);

			function he(ue, Ae) {
				return Ae ? function Ie(ue, Ae) {
					if (null != ue) {
						if ((0, Ne.c)(ue)) return function ne(ue, Ae) {
							return (0, l.Xf)(ue).pipe(K(Ae), B(Ae))
						}(ue, Ae);
						if ((0, ge.z)(ue)) return function te(ue, Ae) {
							return new ie.y(We => {
								let rt = 0;
								return Ae.schedule(function() {
									rt === ue.length ? We.complete() : (We.next(ue[rt++]), We.closed || this.schedule())
								})
							})
						}(ue, Ae);
						if ((0, Ye.t)(ue)) return function ae(ue, Ae) {
							return (0, l.Xf)(ue).pipe(K(Ae), B(Ae))
						}(ue, Ae);
						if ((0, lt.D)(ue)) return xe(ue, Ae);
						if ((0, it.T)(ue)) return function ye(ue, Ae) {
							return new ie.y(We => {
								let rt;
								return (0, O.f)(We, Ae, () => {
									rt = ue[Q.h](), (0, O.f)(We, Ae, () => {
										let Ot, wt;
										try {
											({
												value: Ot,
												done: wt
											} = rt.next())
										} catch (Yt) {
											return void We.error(Yt)
										}
										wt ? We.complete() : We.next(Ot)
									}, 0, !0)
								}), () => (0, de.m)(rt?.return) && rt.return()
							})
						}(ue, Ae);
						if ((0, ce.L)(ue)) return function $(ue, Ae) {
							return xe((0, ce.Q)(ue), Ae)
						}(ue, Ae)
					}
					throw (0, qe.z)(ue)
				}(ue, Ae) : (0, l.Xf)(ue)
			}
		},
		2438: (Ge, re, v) => {
			v.d(re, {
				R: () => te
			});
			var l = v(4829),
				O = v(5592),
				F = v(1631),
				h = v(4266),
				B = v(4674),
				K = v(7400);
			const ne = ["addListener", "removeListener"],
				ae = ["addEventListener", "removeEventListener"],
				ie = ["on", "off"];

			function te(Ne, Ye, ge, it) {
				if ((0, B.m)(ge) && (it = ge, ge = void 0), it) return te(Ne, Ye, ge).pipe((0, K.Z)(it));
				const [lt, qe] = function xe(Ne) {
					return (0, B.m)(Ne.addEventListener) && (0, B.m)(Ne.removeEventListener)
				}(Ne) ? ae.map(ce => $ => Ne[ce](Ye, $, ge)): function de(Ne) {
					return (0, B.m)(Ne.addListener) && (0, B.m)(Ne.removeListener)
				}(Ne) ? ne.map(Q(Ne, Ye)) : function ye(Ne) {
					return (0, B.m)(Ne.on) && (0, B.m)(Ne.off)
				}(Ne) ? ie.map(Q(Ne, Ye)) : [];
				if (!lt && (0, h.z)(Ne)) return (0, F.z)(ce => te(ce, Ye, ge))((0, l.Xf)(Ne));
				if (!lt) throw new TypeError("Invalid event target");
				return new O.y(ce => {
					const $ = (...Ie) => ce.next(1 < Ie.length ? Ie : Ie[0]);
					return lt($), () => qe($)
				})
			}

			function Q(Ne, Ye) {
				return ge => it => Ne[ge](Ye, it)
			}
		},
		4829: (Ge, re, v) => {
			v.d(re, {
				Xf: () => ye
			});
			var l = v(7582),
				O = v(4266),
				F = v(4026),
				h = v(5592),
				B = v(8382),
				K = v(5726),
				ne = v(9853),
				ae = v(3664),
				ie = v(541),
				te = v(4674),
				Q = v(3894),
				de = v(4850);

			function ye(ce) {
				if (ce instanceof h.y) return ce;
				if (null != ce) {
					if ((0, B.c)(ce)) return function xe(ce) {
						return new h.y($ => {
							const Ie = ce[de.L]();
							if ((0, te.m)(Ie.subscribe)) return Ie.subscribe($);
							throw new TypeError("Provided object does not correctly implement Symbol.observable")
						})
					}(ce);
					if ((0, O.z)(ce)) return function Ne(ce) {
						return new h.y($ => {
							for (let Ie = 0; Ie < ce.length && !$.closed; Ie++) $.next(ce[Ie]);
							$.complete()
						})
					}(ce);
					if ((0, F.t)(ce)) return function Ye(ce) {
						return new h.y($ => {
							ce.then(Ie => {
								$.closed || ($.next(Ie), $.complete())
							}, Ie => $.error(Ie)).then(null, Q.h)
						})
					}(ce);
					if ((0, K.D)(ce)) return it(ce);
					if ((0, ae.T)(ce)) return function ge(ce) {
						return new h.y($ => {
							for (const Ie of ce)
								if ($.next(Ie), $.closed) return;
							$.complete()
						})
					}(ce);
					if ((0, ie.L)(ce)) return function lt(ce) {
						return it((0, ie.Q)(ce))
					}(ce)
				}
				throw (0, ne.z)(ce)
			}

			function it(ce) {
				return new h.y($ => {
					(function qe(ce, $) {
						var Ie, he, ue, Ae;
						return (0, l.mG)(this, void 0, void 0, function*() {
							try {
								for (Ie = (0, l.KL)(ce); !(he = yield Ie.next()).done;)
									if ($.next(he.value), $.closed) return
							} catch (We) {
								ue = {
									error: We
								}
							} finally {
								try {
									he && !he.done && (Ae = Ie.return) && (yield Ae.call(Ie))
								} finally {
									if (ue) throw ue.error
								}
							}
							$.complete()
						})
					})(ce, $).catch(Ie => $.error(Ie))
				})
			}
		},
		3019: (Ge, re, v) => {
			v.d(re, {
				T: () => K
			});
			var l = v(7537),
				O = v(4829),
				F = v(6232),
				h = v(9940),
				B = v(7715);

			function K(...ne) {
				const ae = (0, h.yG)(ne),
					ie = (0, h._6)(ne, 1 / 0),
					te = ne;
				return te.length ? 1 === te.length ? (0, O.Xf)(te[0]) : (0, l.J)(ie)((0, B.D)(te, ae)) : F.E
			}
		},
		2096: (Ge, re, v) => {
			v.d(re, {
				of: () => F
			});
			var l = v(9940),
				O = v(7715);

			function F(...h) {
				const B = (0, l.yG)(h);
				return (0, O.D)(h, B)
			}
		},
		8504: (Ge, re, v) => {
			v.d(re, {
				_: () => F
			});
			var l = v(5592),
				O = v(4674);

			function F(h, B) {
				const K = (0, O.m)(h) ? h : () => h,
					ne = ae => ae.error(K());
				return new l.y(B ? ae => B.schedule(ne, 0, ae) : ne)
			}
		},
		4825: (Ge, re, v) => {
			v.d(re, {
				H: () => B
			});
			var l = v(5592),
				O = v(6321),
				F = v(671);

			function B(K = 0, ne, ae = O.P) {
				let ie = -1;
				return null != ne && ((0, F.K)(ne) ? ae = ne : ie = ne), new l.y(te => {
					let Q = function h(K) {
						return K instanceof Date && !isNaN(K)
					}(K) ? +K - ae.now() : K;
					Q < 0 && (Q = 0);
					let de = 0;
					return ae.schedule(function() {
						te.closed || (te.next(de++), 0 <= ie ? this.schedule(void 0, ie) : te.complete())
					}, Q)
				})
			}
		},
		8251: (Ge, re, v) => {
			v.d(re, {
				x: () => O
			});
			var l = v(305);

			function O(h, B, K, ne, ae) {
				return new F(h, B, K, ne, ae)
			}
			class F extends l.Lv {
				constructor(B, K, ne, ae, ie, te) {
					super(B), this.onFinalize = ie, this.shouldUnsubscribe = te, this._next = K ? function(Q) {
						try {
							K(Q)
						} catch (de) {
							B.error(de)
						}
					} : super._next, this._error = ae ? function(Q) {
						try {
							ae(Q)
						} catch (de) {
							B.error(de)
						} finally {
							this.unsubscribe()
						}
					} : super._error, this._complete = ne ? function() {
						try {
							ne()
						} catch (Q) {
							B.error(Q)
						} finally {
							this.unsubscribe()
						}
					} : super._complete
				}
				unsubscribe() {
					var B;
					if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
						const {
							closed: K
						} = this;
						super.unsubscribe(), !K && (null === (B = this.onFinalize) || void 0 === B || B.call(this))
					}
				}
			}
		},
		6306: (Ge, re, v) => {
			v.d(re, {
				K: () => h
			});
			var l = v(4829),
				O = v(8251),
				F = v(9360);

			function h(B) {
				return (0, F.e)((K, ne) => {
					let te, ae = null,
						ie = !1;
					ae = K.subscribe((0, O.x)(ne, void 0, void 0, Q => {
						te = (0, l.Xf)(B(Q, h(B)(K))), ae ? (ae.unsubscribe(), ae = null, te.subscribe(ne)) : ie = !0
					})), ie && (ae.unsubscribe(), ae = null, te.subscribe(ne))
				})
			}
		},
		6328: (Ge, re, v) => {
			v.d(re, {
				b: () => F
			});
			var l = v(1631),
				O = v(4674);

			function F(h, B) {
				return (0, O.m)(B) ? (0, l.z)(h, B, 1) : (0, l.z)(h, 1)
			}
		},
		3572: (Ge, re, v) => {
			v.d(re, {
				d: () => F
			});
			var l = v(9360),
				O = v(8251);

			function F(h) {
				return (0, l.e)((B, K) => {
					let ne = !1;
					B.subscribe((0, O.x)(K, ae => {
						ne = !0, K.next(ae)
					}, () => {
						ne || K.next(h), K.complete()
					}))
				})
			}
		},
		5177: (Ge, re, v) => {
			v.d(re, {
				g: () => ye
			});
			var l = v(6321),
				O = v(5211),
				F = v(8180),
				h = v(9360),
				B = v(8251),
				K = v(2420),
				ae = v(975),
				ie = v(1631),
				te = v(4829);

			function Q(xe, Ne) {
				return Ne ? Ye => (0, O.z)(Ne.pipe((0, F.q)(1), function ne() {
					return (0, h.e)((xe, Ne) => {
						xe.subscribe((0, B.x)(Ne, K.Z))
					})
				}()), Ye.pipe(Q(xe))) : (0, ie.z)((Ye, ge) => (0, te.Xf)(xe(Ye, ge)).pipe((0, F.q)(1), (0, ae.h)(Ye)))
			}
			var de = v(4825);

			function ye(xe, Ne = l.z) {
				const Ye = (0, de.H)(xe, Ne);
				return Q(() => Ye)
			}
		},
		3997: (Ge, re, v) => {
			v.d(re, {
				x: () => h
			});
			var l = v(2737),
				O = v(9360),
				F = v(8251);

			function h(K, ne = l.y) {
				return K = K ?? B, (0, O.e)((ae, ie) => {
					let te, Q = !0;
					ae.subscribe((0, F.x)(ie, de => {
						const ye = ne(de);
						(Q || !K(te, ye)) && (Q = !1, te = ye, ie.next(de))
					}))
				})
			}

			function B(K, ne) {
				return K === ne
			}
		},
		2181: (Ge, re, v) => {
			v.d(re, {
				h: () => F
			});
			var l = v(9360),
				O = v(8251);

			function F(h, B) {
				return (0, l.e)((K, ne) => {
					let ae = 0;
					K.subscribe((0, O.x)(ne, ie => h.call(B, ie, ae++) && ne.next(ie)))
				})
			}
		},
		4716: (Ge, re, v) => {
			v.d(re, {
				x: () => O
			});
			var l = v(9360);

			function O(F) {
				return (0, l.e)((h, B) => {
					try {
						h.subscribe(B)
					} finally {
						B.add(F)
					}
				})
			}
		},
		1374: (Ge, re, v) => {
			v.d(re, {
				P: () => ne
			});
			var l = v(6973),
				O = v(2181),
				F = v(8180),
				h = v(3572),
				B = v(3026),
				K = v(2737);

			function ne(ae, ie) {
				const te = arguments.length >= 2;
				return Q => Q.pipe(ae ? (0, O.h)((de, ye) => ae(de, ye, Q)) : K.y, (0, F.q)(1), te ? (0, h.d)(ie) : (0, B.T)(() => new l.K))
			}
		},
		7398: (Ge, re, v) => {
			v.d(re, {
				U: () => F
			});
			var l = v(9360),
				O = v(8251);

			function F(h, B) {
				return (0, l.e)((K, ne) => {
					let ae = 0;
					K.subscribe((0, O.x)(ne, ie => {
						ne.next(h.call(B, ie, ae++))
					}))
				})
			}
		},
		975: (Ge, re, v) => {
			v.d(re, {
				h: () => O
			});
			var l = v(7398);

			function O(F) {
				return (0, l.U)(() => F)
			}
		},
		7537: (Ge, re, v) => {
			v.d(re, {
				J: () => F
			});
			var l = v(1631),
				O = v(2737);

			function F(h = 1 / 0) {
				return (0, l.z)(O.y, h)
			}
		},
		1631: (Ge, re, v) => {
			v.d(re, {
				z: () => ae
			});
			var l = v(7398),
				O = v(4829),
				F = v(9360),
				h = v(7103),
				B = v(8251),
				ne = v(4674);

			function ae(ie, te, Q = 1 / 0) {
				return (0, ne.m)(te) ? ae((de, ye) => (0, l.U)((xe, Ne) => te(de, xe, ye, Ne))((0, O.Xf)(ie(de, ye))), Q) : ("number" == typeof te && (Q = te), (0, F.e)((de, ye) => function K(ie, te, Q, de, ye, xe, Ne, Ye) {
					const ge = [];
					let it = 0,
						lt = 0,
						qe = !1;
					const ce = () => {
							qe && !ge.length && !it && te.complete()
						},
						$ = he => it < de ? Ie(he) : ge.push(he),
						Ie = he => {
							xe && te.next(he), it++;
							let ue = !1;
							(0, O.Xf)(Q(he, lt++)).subscribe((0, B.x)(te, Ae => {
								ye?.(Ae), xe ? $(Ae) : te.next(Ae)
							}, () => {
								ue = !0
							}, void 0, () => {
								if (ue) try {
									for (it--; ge.length && it < de;) {
										const Ae = ge.shift();
										Ne ? (0, h.f)(te, Ne, () => Ie(Ae)) : Ie(Ae)
									}
									ce()
								} catch (Ae) {
									te.error(Ae)
								}
							}))
						};
					return ie.subscribe((0, B.x)(te, $, () => {
						qe = !0, ce()
					})), () => {
						Ye?.()
					}
				}(de, ye, ie, Q)))
			}
		},
		9732: (Ge, re, v) => {
			v.d(re, {
				U: () => O
			});
			var l = v(8251);

			function O(F, h, B, K, ne) {
				return (ae, ie) => {
					let te = B,
						Q = h,
						de = 0;
					ae.subscribe((0, l.x)(ie, ye => {
						const xe = de++;
						Q = te ? F(Q, ye, xe) : (te = !0, ye), K && ie.next(Q)
					}, ne && (() => {
						te && ie.next(Q), ie.complete()
					})))
				}
			}
		},
		3020: (Ge, re, v) => {
			v.d(re, {
				B: () => B
			});
			var l = v(4829),
				O = v(8645),
				F = v(305),
				h = v(9360);

			function B(ne = {}) {
				const {
					connector: ae = (() => new O.x),
					resetOnError: ie = !0,
					resetOnComplete: te = !0,
					resetOnRefCountZero: Q = !0
				} = ne;
				return de => {
					let ye, xe, Ne, Ye = 0,
						ge = !1,
						it = !1;
					const lt = () => {
							xe?.unsubscribe(), xe = void 0
						},
						qe = () => {
							lt(), ye = Ne = void 0, ge = it = !1
						},
						ce = () => {
							const $ = ye;
							qe(), $?.unsubscribe()
						};
					return (0, h.e)(($, Ie) => {
						Ye++, !it && !ge && lt();
						const he = Ne = Ne ?? ae();
						Ie.add(() => {
							Ye--, 0 === Ye && !it && !ge && (xe = K(ce, Q))
						}), he.subscribe(Ie), !ye && Ye > 0 && (ye = new F.Hp({
							next: ue => he.next(ue),
							error: ue => {
								it = !0, lt(), xe = K(qe, ie, ue), he.error(ue)
							},
							complete: () => {
								ge = !0, lt(), xe = K(qe, te), he.complete()
							}
						}), (0, l.Xf)($).subscribe(ye))
					})(de)
				}
			}

			function K(ne, ae, ...ie) {
				if (!0 === ae) return void ne();
				if (!1 === ae) return;
				const te = new F.Hp({
					next: () => {
						te.unsubscribe(), ne()
					}
				});
				return (0, l.Xf)(ae(...ie)).subscribe(te)
			}
		},
		836: (Ge, re, v) => {
			v.d(re, {
				T: () => O
			});
			var l = v(2181);

			function O(F) {
				return (0, l.h)((h, B) => F <= B)
			}
		},
		7921: (Ge, re, v) => {
			v.d(re, {
				O: () => h
			});
			var l = v(5211),
				O = v(9940),
				F = v(9360);

			function h(...B) {
				const K = (0, O.yG)(B);
				return (0, F.e)((ne, ae) => {
					(K ? (0, l.z)(B, ne, K) : (0, l.z)(B, ne)).subscribe(ae)
				})
			}
		},
		4664: (Ge, re, v) => {
			v.d(re, {
				w: () => h
			});
			var l = v(4829),
				O = v(9360),
				F = v(8251);

			function h(B, K) {
				return (0, O.e)((ne, ae) => {
					let ie = null,
						te = 0,
						Q = !1;
					const de = () => Q && !ie && ae.complete();
					ne.subscribe((0, F.x)(ae, ye => {
						ie?.unsubscribe();
						let xe = 0;
						const Ne = te++;
						(0, l.Xf)(B(ye, Ne)).subscribe(ie = (0, F.x)(ae, Ye => ae.next(K ? K(ye, Ye, Ne, xe++) : Ye), () => {
							ie = null, de()
						}))
					}, () => {
						Q = !0, de()
					}))
				})
			}
		},
		8180: (Ge, re, v) => {
			v.d(re, {
				q: () => h
			});
			var l = v(6232),
				O = v(9360),
				F = v(8251);

			function h(B) {
				return B <= 0 ? () => l.E : (0, O.e)((K, ne) => {
					let ae = 0;
					K.subscribe((0, F.x)(ne, ie => {
						++ae <= B && (ne.next(ie), B <= ae && ne.complete())
					}))
				})
			}
		},
		9773: (Ge, re, v) => {
			v.d(re, {
				R: () => B
			});
			var l = v(9360),
				O = v(8251),
				F = v(4829),
				h = v(2420);

			function B(K) {
				return (0, l.e)((ne, ae) => {
					(0, F.Xf)(K).subscribe((0, O.x)(ae, () => ae.complete(), h.Z)), !ae.closed && ne.subscribe(ae)
				})
			}
		},
		812: (Ge, re, v) => {
			v.d(re, {
				o: () => F
			});
			var l = v(9360),
				O = v(8251);

			function F(h, B = !1) {
				return (0, l.e)((K, ne) => {
					let ae = 0;
					K.subscribe((0, O.x)(ne, ie => {
						const te = h(ie, ae++);
						(te || B) && ne.next(ie), !te && ne.complete()
					}))
				})
			}
		},
		9397: (Ge, re, v) => {
			v.d(re, {
				b: () => B
			});
			var l = v(4674),
				O = v(9360),
				F = v(8251),
				h = v(2737);

			function B(K, ne, ae) {
				const ie = (0, l.m)(K) || ne || ae ? {
					next: K,
					error: ne,
					complete: ae
				} : K;
				return ie ? (0, O.e)((te, Q) => {
					var de;
					null === (de = ie.subscribe) || void 0 === de || de.call(ie);
					let ye = !0;
					te.subscribe((0, F.x)(Q, xe => {
						var Ne;
						null === (Ne = ie.next) || void 0 === Ne || Ne.call(ie, xe), Q.next(xe)
					}, () => {
						var xe;
						ye = !1, null === (xe = ie.complete) || void 0 === xe || xe.call(ie), Q.complete()
					}, xe => {
						var Ne;
						ye = !1, null === (Ne = ie.error) || void 0 === Ne || Ne.call(ie, xe), Q.error(xe)
					}, () => {
						var xe, Ne;
						ye && (null === (xe = ie.unsubscribe) || void 0 === xe || xe.call(ie)), null === (Ne = ie.finalize) || void 0 === Ne || Ne.call(ie)
					}))
				}) : h.y
			}
		},
		3026: (Ge, re, v) => {
			v.d(re, {
				T: () => h
			});
			var l = v(6973),
				O = v(9360),
				F = v(8251);

			function h(K = B) {
				return (0, O.e)((ne, ae) => {
					let ie = !1;
					ne.subscribe((0, F.x)(ae, te => {
						ie = !0, ae.next(te)
					}, () => ie ? ae.complete() : ae.error(K())))
				})
			}

			function B() {
				return new l.K
			}
		},
		1954: (Ge, re, v) => {
			v.d(re, {
				o: () => B
			});
			var l = v(7394);
			class O extends l.w0 {
				constructor(ne, ae) {
					super()
				}
				schedule(ne, ae = 0) {
					return this
				}
			}
			const F = {
				setInterval(K, ne, ...ae) {
					const {
						delegate: ie
					} = F;
					return ie?.setInterval ? ie.setInterval(K, ne, ...ae) : setInterval(K, ne, ...ae)
				},
				clearInterval(K) {
					const {
						delegate: ne
					} = F;
					return (ne?.clearInterval || clearInterval)(K)
				},
				delegate: void 0
			};
			var h = v(9039);
			class B extends O {
				constructor(ne, ae) {
					super(ne, ae), this.scheduler = ne, this.work = ae, this.pending = !1
				}
				schedule(ne, ae = 0) {
					var ie;
					if (this.closed) return this;
					this.state = ne;
					const te = this.id,
						Q = this.scheduler;
					return null != te && (this.id = this.recycleAsyncId(Q, te, ae)), this.pending = !0, this.delay = ae, this.id = null !== (ie = this.id) && void 0 !== ie ? ie : this.requestAsyncId(Q, this.id, ae), this
				}
				requestAsyncId(ne, ae, ie = 0) {
					return F.setInterval(ne.flush.bind(ne, this), ie)
				}
				recycleAsyncId(ne, ae, ie = 0) {
					if (null != ie && this.delay === ie && !1 === this.pending) return ae;
					null != ae && F.clearInterval(ae)
				}
				execute(ne, ae) {
					if (this.closed) return new Error("executing a cancelled action");
					this.pending = !1;
					const ie = this._execute(ne, ae);
					if (ie) return ie;
					!1 === this.pending && null != this.id && (this.id = this.recycleAsyncId(this.scheduler, this.id, null))
				}
				_execute(ne, ae) {
					let te, ie = !1;
					try {
						this.work(ne)
					} catch (Q) {
						ie = !0, te = Q || new Error("Scheduled action threw falsy error")
					}
					if (ie) return this.unsubscribe(), te
				}
				unsubscribe() {
					if (!this.closed) {
						const {
							id: ne,
							scheduler: ae
						} = this, {
							actions: ie
						} = ae;
						this.work = this.state = this.scheduler = null, this.pending = !1, (0, h.P)(ie, this), null != ne && (this.id = this.recycleAsyncId(ae, ne, null)), this.delay = null, super.unsubscribe()
					}
				}
			}
		},
		2631: (Ge, re, v) => {
			v.d(re, {
				v: () => F
			});
			var l = v(4552);
			class O {
				constructor(B, K = O.now) {
					this.schedulerActionCtor = B, this.now = K
				}
				schedule(B, K = 0, ne) {
					return new this.schedulerActionCtor(this, B).schedule(ne, K)
				}
			}
			O.now = l.l.now;
			class F extends O {
				constructor(B, K = O.now) {
					super(B, K), this.actions = [], this._active = !1
				}
				flush(B) {
					const {
						actions: K
					} = this;
					if (this._active) return void K.push(B);
					let ne;
					this._active = !0;
					do {
						if (ne = B.execute(B.state, B.delay)) break
					} while (B = K.shift());
					if (this._active = !1, ne) {
						for (; B = K.shift();) B.unsubscribe();
						throw ne
					}
				}
			}
		},
		927: (Ge, re, v) => {
			v.d(re, {
				Z: () => ne
			});
			var l = v(1954),
				O = v(7394);
			const F = {
				schedule(ie) {
					let te = requestAnimationFrame,
						Q = cancelAnimationFrame;
					const {
						delegate: de
					} = F;
					de && (te = de.requestAnimationFrame, Q = de.cancelAnimationFrame);
					const ye = te(xe => {
						Q = void 0, ie(xe)
					});
					return new O.w0(() => Q?.(ye))
				},
				requestAnimationFrame(...ie) {
					const {
						delegate: te
					} = F;
					return (te?.requestAnimationFrame || requestAnimationFrame)(...ie)
				},
				cancelAnimationFrame(...ie) {
					const {
						delegate: te
					} = F;
					return (te?.cancelAnimationFrame || cancelAnimationFrame)(...ie)
				},
				delegate: void 0
			};
			var B = v(2631);
			const ne = new class K extends B.v {
				flush(te) {
					this._active = !0;
					const Q = this._scheduled;
					this._scheduled = void 0;
					const {
						actions: de
					} = this;
					let ye;
					te = te || de.shift();
					do {
						if (ye = te.execute(te.state, te.delay)) break
					} while ((te = de[0]) && te.id === Q && de.shift());
					if (this._active = !1, ye) {
						for (;
							(te = de[0]) && te.id === Q && de.shift();) te.unsubscribe();
						throw ye
					}
				}
			}(class h extends l.o {
				constructor(te, Q) {
					super(te, Q), this.scheduler = te, this.work = Q
				}
				requestAsyncId(te, Q, de = 0) {
					return null !== de && de > 0 ? super.requestAsyncId(te, Q, de) : (te.actions.push(this), te._scheduled || (te._scheduled = F.requestAnimationFrame(() => te.flush(void 0))))
				}
				recycleAsyncId(te, Q, de = 0) {
					var ye;
					if (null != de ? de > 0 : this.delay > 0) return super.recycleAsyncId(te, Q, de);
					const {
						actions: xe
					} = te;
					null != Q && (null === (ye = xe[xe.length - 1]) || void 0 === ye ? void 0 : ye.id) !== Q && (F.cancelAnimationFrame(Q), te._scheduled = void 0)
				}
			})
		},
		6410: (Ge, re, v) => {
			v.d(re, {
				E: () => xe
			});
			var l = v(1954);
			let F, O = 1;
			const h = {};

			function B(Ye) {
				return Ye in h && (delete h[Ye], !0)
			}
			const K = {
					setImmediate(Ye) {
						const ge = O++;
						return h[ge] = !0, F || (F = Promise.resolve()), F.then(() => B(ge) && Ye()), ge
					},
					clearImmediate(Ye) {
						B(Ye)
					}
				},
				{
					setImmediate: ae,
					clearImmediate: ie
				} = K,
				te = {
					setImmediate(...Ye) {
						const {
							delegate: ge
						} = te;
						return (ge?.setImmediate || ae)(...Ye)
					},
					clearImmediate(Ye) {
						const {
							delegate: ge
						} = te;
						return (ge?.clearImmediate || ie)(Ye)
					},
					delegate: void 0
				};
			var de = v(2631);
			const xe = new class ye extends de.v {
				flush(ge) {
					this._active = !0;
					const it = this._scheduled;
					this._scheduled = void 0;
					const {
						actions: lt
					} = this;
					let qe;
					ge = ge || lt.shift();
					do {
						if (qe = ge.execute(ge.state, ge.delay)) break
					} while ((ge = lt[0]) && ge.id === it && lt.shift());
					if (this._active = !1, qe) {
						for (;
							(ge = lt[0]) && ge.id === it && lt.shift();) ge.unsubscribe();
						throw qe
					}
				}
			}(class Q extends l.o {
				constructor(ge, it) {
					super(ge, it), this.scheduler = ge, this.work = it
				}
				requestAsyncId(ge, it, lt = 0) {
					return null !== lt && lt > 0 ? super.requestAsyncId(ge, it, lt) : (ge.actions.push(this), ge._scheduled || (ge._scheduled = te.setImmediate(ge.flush.bind(ge, void 0))))
				}
				recycleAsyncId(ge, it, lt = 0) {
					var qe;
					if (null != lt ? lt > 0 : this.delay > 0) return super.recycleAsyncId(ge, it, lt);
					const {
						actions: ce
					} = ge;
					null != it && (null === (qe = ce[ce.length - 1]) || void 0 === qe ? void 0 : qe.id) !== it && (te.clearImmediate(it), ge._scheduled === it && (ge._scheduled = void 0))
				}
			})
		},
		6321: (Ge, re, v) => {
			v.d(re, {
				P: () => h,
				z: () => F
			});
			var l = v(1954);
			const F = new(v(2631).v)(l.o),
				h = F
		},
		4552: (Ge, re, v) => {
			v.d(re, {
				l: () => l
			});
			const l = {
				now: () => (l.delegate || Date).now(),
				delegate: void 0
			}
		},
		7599: (Ge, re, v) => {
			v.d(re, {
				z: () => l
			});
			const l = {
				setTimeout(O, F, ...h) {
					const {
						delegate: B
					} = l;
					return B?.setTimeout ? B.setTimeout(O, F, ...h) : setTimeout(O, F, ...h)
				},
				clearTimeout(O) {
					const {
						delegate: F
					} = l;
					return (F?.clearTimeout || clearTimeout)(O)
				},
				delegate: void 0
			}
		},
		4971: (Ge, re, v) => {
			v.d(re, {
				h: () => O
			});
			const O = function l() {
				return "function" == typeof Symbol && Symbol.iterator ? Symbol.iterator : "@@iterator"
			}()
		},
		4850: (Ge, re, v) => {
			v.d(re, {
				L: () => l
			});
			const l = "function" == typeof Symbol && Symbol.observable || "@@observable"
		},
		6973: (Ge, re, v) => {
			v.d(re, {
				K: () => O
			});
			const O = (0, v(2306).d)(F => function() {
				F(this), this.name = "EmptyError", this.message = "no elements in sequence"
			})
		},
		9940: (Ge, re, v) => {
			v.d(re, {
				_6: () => K,
				jO: () => h,
				yG: () => B
			});
			var l = v(4674),
				O = v(671);

			function F(ne) {
				return ne[ne.length - 1]
			}

			function h(ne) {
				return (0, l.m)(F(ne)) ? ne.pop() : void 0
			}

			function B(ne) {
				return (0, O.K)(F(ne)) ? ne.pop() : void 0
			}

			function K(ne, ae) {
				return "number" == typeof F(ne) ? ne.pop() : ae
			}
		},
		7453: (Ge, re, v) => {
			v.d(re, {
				D: () => B
			});
			const {
				isArray: l
			} = Array, {
				getPrototypeOf: O,
				prototype: F,
				keys: h
			} = Object;

			function B(ne) {
				if (1 === ne.length) {
					const ae = ne[0];
					if (l(ae)) return {
						args: ae,
						keys: null
					};
					if (function K(ne) {
							return ne && "object" == typeof ne && O(ne) === F
						}(ae)) {
						const ie = h(ae);
						return {
							args: ie.map(te => ae[te]),
							keys: ie
						}
					}
				}
				return {
					args: ne,
					keys: null
				}
			}
		},
		9039: (Ge, re, v) => {
			function l(O, F) {
				if (O) {
					const h = O.indexOf(F);
					0 <= h && O.splice(h, 1)
				}
			}
			v.d(re, {
				P: () => l
			})
		},
		2306: (Ge, re, v) => {
			function l(O) {
				const h = O(B => {
					Error.call(B), B.stack = (new Error).stack
				});
				return h.prototype = Object.create(Error.prototype), h.prototype.constructor = h, h
			}
			v.d(re, {
				d: () => l
			})
		},
		2714: (Ge, re, v) => {
			function l(O, F) {
				return O.reduce((h, B, K) => (h[B] = F[K], h), {})
			}
			v.d(re, {
				n: () => l
			})
		},
		1441: (Ge, re, v) => {
			v.d(re, {
				O: () => h,
				x: () => F
			});
			var l = v(2653);
			let O = null;

			function F(B) {
				if (l.config.useDeprecatedSynchronousErrorHandling) {
					const K = !O;
					if (K && (O = {
							errorThrown: !1,
							error: null
						}), B(), K) {
						const {
							errorThrown: ne,
							error: ae
						} = O;
						if (O = null, ne) throw ae
					}
				} else B()
			}

			function h(B) {
				l.config.useDeprecatedSynchronousErrorHandling && O && (O.errorThrown = !0, O.error = B)
			}
		},
		7103: (Ge, re, v) => {
			function l(O, F, h, B = 0, K = !1) {
				const ne = F.schedule(function() {
					h(), K ? O.add(this.schedule(null, B)) : this.unsubscribe()
				}, B);
				if (O.add(ne), !K) return ne
			}
			v.d(re, {
				f: () => l
			})
		},
		2737: (Ge, re, v) => {
			function l(O) {
				return O
			}
			v.d(re, {
				y: () => l
			})
		},
		4266: (Ge, re, v) => {
			v.d(re, {
				z: () => l
			});
			const l = O => O && "number" == typeof O.length && "function" != typeof O
		},
		5726: (Ge, re, v) => {
			v.d(re, {
				D: () => O
			});
			var l = v(4674);

			function O(F) {
				return Symbol.asyncIterator && (0, l.m)(F?.[Symbol.asyncIterator])
			}
		},
		4674: (Ge, re, v) => {
			function l(O) {
				return "function" == typeof O
			}
			v.d(re, {
				m: () => l
			})
		},
		8382: (Ge, re, v) => {
			v.d(re, {
				c: () => F
			});
			var l = v(4850),
				O = v(4674);

			function F(h) {
				return (0, O.m)(h[l.L])
			}
		},
		3664: (Ge, re, v) => {
			v.d(re, {
				T: () => F
			});
			var l = v(4971),
				O = v(4674);

			function F(h) {
				return (0, O.m)(h?.[l.h])
			}
		},
		4026: (Ge, re, v) => {
			v.d(re, {
				t: () => O
			});
			var l = v(4674);

			function O(F) {
				return (0, l.m)(F?.then)
			}
		},
		541: (Ge, re, v) => {
			v.d(re, {
				L: () => h,
				Q: () => F
			});
			var l = v(7582),
				O = v(4674);

			function F(B) {
				return (0, l.FC)(this, arguments, function*() {
					const ne = B.getReader();
					try {
						for (;;) {
							const {
								value: ae,
								done: ie
							} = yield(0, l.qq)(ne.read());
							if (ie) return yield(0, l.qq)(void 0);
							yield yield(0, l.qq)(ae)
						}
					} finally {
						ne.releaseLock()
					}
				})
			}

			function h(B) {
				return (0, O.m)(B?.getReader)
			}
		},
		671: (Ge, re, v) => {
			v.d(re, {
				K: () => O
			});
			var l = v(4674);

			function O(F) {
				return F && (0, l.m)(F.schedule)
			}
		},
		9360: (Ge, re, v) => {
			v.d(re, {
				A: () => O,
				e: () => F
			});
			var l = v(4674);

			function O(h) {
				return (0, l.m)(h?.lift)
			}

			function F(h) {
				return B => {
					if (O(B)) return B.lift(function(K) {
						try {
							return h(K, this)
						} catch (ne) {
							this.error(ne)
						}
					});
					throw new TypeError("Unable to lift unknown Observable type")
				}
			}
		},
		7400: (Ge, re, v) => {
			v.d(re, {
				Z: () => h
			});
			var l = v(7398);
			const {
				isArray: O
			} = Array;

			function h(B) {
				return (0, l.U)(K => function F(B, K) {
					return O(K) ? B(...K) : B(K)
				}(B, K))
			}
		},
		2420: (Ge, re, v) => {
			function l() {}
			v.d(re, {
				Z: () => l
			})
		},
		8407: (Ge, re, v) => {
			v.d(re, {
				U: () => F,
				z: () => O
			});
			var l = v(2737);

			function O(...h) {
				return F(h)
			}

			function F(h) {
				return 0 === h.length ? l.y : 1 === h.length ? h[0] : function(K) {
					return h.reduce((ne, ae) => ae(ne), K)
				}
			}
		},
		3894: (Ge, re, v) => {
			v.d(re, {
				h: () => F
			});
			var l = v(2653),
				O = v(7599);

			function F(h) {
				O.z.setTimeout(() => {
					const {
						onUnhandledError: B
					} = l.config;
					if (!B) throw h;
					B(h)
				})
			}
		},
		9853: (Ge, re, v) => {
			function l(O) {
				return new TypeError(`You provided ${null!==O&&"object"==typeof O?"an invalid object":`'${O}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)
			}
			v.d(re, {
				z: () => l
			})
		},
		6825: (Ge, re, v) => {
			v.d(re, {
				EY: () => Ye,
				IO: () => Ne,
				LC: () => O,
				SB: () => ie,
				X$: () => h,
				ZE: () => it,
				ZN: () => ge,
				_j: () => l,
				eR: () => Q,
				jt: () => B,
				k1: () => lt,
				l3: () => F,
				oB: () => ae,
				pV: () => ye,
				ru: () => K,
				vP: () => ne
			});
			class l {}
			class O {}
			const F = "*";

			function h(qe, ce) {
				return {
					type: 7,
					name: qe,
					definitions: ce,
					options: {}
				}
			}

			function B(qe, ce = null) {
				return {
					type: 4,
					styles: ce,
					timings: qe
				}
			}

			function K(qe, ce = null) {
				return {
					type: 3,
					steps: qe,
					options: ce
				}
			}

			function ne(qe, ce = null) {
				return {
					type: 2,
					steps: qe,
					options: ce
				}
			}

			function ae(qe) {
				return {
					type: 6,
					styles: qe,
					offset: null
				}
			}

			function ie(qe, ce, $) {
				return {
					type: 0,
					name: qe,
					styles: ce,
					options: $
				}
			}

			function Q(qe, ce, $ = null) {
				return {
					type: 1,
					expr: qe,
					animation: ce,
					options: $
				}
			}

			function ye(qe = null) {
				return {
					type: 9,
					options: qe
				}
			}

			function Ne(qe, ce, $ = null) {
				return {
					type: 11,
					selector: qe,
					animation: ce,
					options: $
				}
			}

			function Ye(qe, ce) {
				return {
					type: 12,
					timings: qe,
					animation: ce
				}
			}
			class ge {
				constructor(ce = 0, $ = 0) {
					this._onDoneFns = [], this._onStartFns = [], this._onDestroyFns = [], this._originalOnDoneFns = [], this._originalOnStartFns = [], this._started = !1, this._destroyed = !1, this._finished = !1, this._position = 0, this.parentPlayer = null, this.totalTime = ce + $
				}
				_onFinish() {
					this._finished || (this._finished = !0, this._onDoneFns.forEach(ce => ce()), this._onDoneFns = [])
				}
				onStart(ce) {
					this._originalOnStartFns.push(ce), this._onStartFns.push(ce)
				}
				onDone(ce) {
					this._originalOnDoneFns.push(ce), this._onDoneFns.push(ce)
				}
				onDestroy(ce) {
					this._onDestroyFns.push(ce)
				}
				hasStarted() {
					return this._started
				}
				init() {}
				play() {
					this.hasStarted() || (this._onStart(), this.triggerMicrotask()), this._started = !0
				}
				triggerMicrotask() {
					queueMicrotask(() => this._onFinish())
				}
				_onStart() {
					this._onStartFns.forEach(ce => ce()), this._onStartFns = []
				}
				pause() {}
				restart() {}
				finish() {
					this._onFinish()
				}
				destroy() {
					this._destroyed || (this._destroyed = !0, this.hasStarted() || this._onStart(), this.finish(), this._onDestroyFns.forEach(ce => ce()), this._onDestroyFns = [])
				}
				reset() {
					this._started = !1, this._finished = !1, this._onStartFns = this._originalOnStartFns, this._onDoneFns = this._originalOnDoneFns
				}
				setPosition(ce) {
					this._position = this.totalTime ? ce * this.totalTime : 1
				}
				getPosition() {
					return this.totalTime ? this._position / this.totalTime : 1
				}
				triggerCallback(ce) {
					const $ = "start" == ce ? this._onStartFns : this._onDoneFns;
					$.forEach(Ie => Ie()), $.length = 0
				}
			}
			class it {
				constructor(ce) {
					this._onDoneFns = [], this._onStartFns = [], this._finished = !1, this._started = !1, this._destroyed = !1, this._onDestroyFns = [], this.parentPlayer = null, this.totalTime = 0, this.players = ce;
					let $ = 0,
						Ie = 0,
						he = 0;
					const ue = this.players.length;
					0 == ue ? queueMicrotask(() => this._onFinish()) : this.players.forEach(Ae => {
						Ae.onDone(() => {
							++$ == ue && this._onFinish()
						}), Ae.onDestroy(() => {
							++Ie == ue && this._onDestroy()
						}), Ae.onStart(() => {
							++he == ue && this._onStart()
						})
					}), this.totalTime = this.players.reduce((Ae, We) => Math.max(Ae, We.totalTime), 0)
				}
				_onFinish() {
					this._finished || (this._finished = !0, this._onDoneFns.forEach(ce => ce()), this._onDoneFns = [])
				}
				init() {
					this.players.forEach(ce => ce.init())
				}
				onStart(ce) {
					this._onStartFns.push(ce)
				}
				_onStart() {
					this.hasStarted() || (this._started = !0, this._onStartFns.forEach(ce => ce()), this._onStartFns = [])
				}
				onDone(ce) {
					this._onDoneFns.push(ce)
				}
				onDestroy(ce) {
					this._onDestroyFns.push(ce)
				}
				hasStarted() {
					return this._started
				}
				play() {
					this.parentPlayer || this.init(), this._onStart(), this.players.forEach(ce => ce.play())
				}
				pause() {
					this.players.forEach(ce => ce.pause())
				}
				restart() {
					this.players.forEach(ce => ce.restart())
				}
				finish() {
					this._onFinish(), this.players.forEach(ce => ce.finish())
				}
				destroy() {
					this._onDestroy()
				}
				_onDestroy() {
					this._destroyed || (this._destroyed = !0, this._onFinish(), this.players.forEach(ce => ce.destroy()), this._onDestroyFns.forEach(ce => ce()), this._onDestroyFns = [])
				}
				reset() {
					this.players.forEach(ce => ce.reset()), this._destroyed = !1, this._finished = !1, this._started = !1
				}
				setPosition(ce) {
					const $ = ce * this.totalTime;
					this.players.forEach(Ie => {
						const he = Ie.totalTime ? Math.min(1, $ / Ie.totalTime) : 1;
						Ie.setPosition(he)
					})
				}
				getPosition() {
					const ce = this.players.reduce(($, Ie) => null === $ || Ie.totalTime > $.totalTime ? Ie : $, null);
					return null != ce ? ce.getPosition() : 0
				}
				beforeDestroy() {
					this.players.forEach(ce => {
						ce.beforeDestroy && ce.beforeDestroy()
					})
				}
				triggerCallback(ce) {
					const $ = "start" == ce ? this._onStartFns : this._onDoneFns;
					$.forEach(Ie => Ie()), $.length = 0
				}
			}
			const lt = "!"
		},
		103: (Ge, re, v) => {
			v.d(re, {
				s1: () => Ze,
				Em: () => nt,
				tE: () => L,
				qV: () => Ue,
				qm: () => Ke,
				Kd: () => vn,
				Zf: () => Mn,
				X6: () => Et,
				yG: () => ln,
				iD: () => Ee
			});
			var l = v(6814),
				O = v(5879),
				F = v(2831),
				h = v(8645),
				B = v(7394),
				K = v(5619),
				ne = v(2096),
				ae = v(6028),
				ie = v(9397),
				te = v(6321),
				Q = v(9360),
				de = v(8251);

			function ye(se, ee = te.z) {
				return (0, Q.e)((k, Z) => {
					let _e = null,
						$e = null,
						X = null;
					const G = () => {
						if (_e) {
							_e.unsubscribe(), _e = null;
							const Oe = $e;
							$e = null, Z.next(Oe)
						}
					};

					function J() {
						const Oe = X + se,
							Je = ee.now();
						if (Je < Oe) return _e = this.schedule(void 0, Oe - Je), void Z.add(_e);
						G()
					}
					k.subscribe((0, de.x)(Z, Oe => {
						$e = Oe, X = ee.now(), _e || (_e = ee.schedule(J, se), Z.add(_e))
					}, () => {
						G(), Z.complete()
					}, void 0, () => {
						$e = _e = null
					}))
				})
			}
			var xe = v(2181),
				Ne = v(7398),
				Ye = v(8180),
				ge = v(836),
				it = v(3997),
				lt = v(9773),
				qe = v(2495),
				ce = v(2572),
				$ = v(5211),
				Ie = v(5592),
				he = v(7921);
			const Ae = new Set;
			let We, rt = (() => {
				class se {
					constructor(k, Z) {
						this._platform = k, this._nonce = Z, this._matchMedia = this._platform.isBrowser && window.matchMedia ? window.matchMedia.bind(window) : wt
					}
					matchMedia(k) {
						return (this._platform.WEBKIT || this._platform.BLINK) && function Ot(se, ee) {
							if (!Ae.has(se)) try {
								We || (We = document.createElement("style"), ee && (We.nonce = ee), We.setAttribute("type", "text/css"), document.head.appendChild(We)), We.sheet && (We.sheet.insertRule(`@media ${se} {body{ }}`, 0), Ae.add(se))
							} catch (k) {
								console.error(k)
							}
						}(k, this._nonce), this._matchMedia(k)
					}
					static #e = this.\u0275fac = function(Z) {
						return new(Z || se)(O.LFG(F.t4), O.LFG(O.Ojb, 8))
					};
					static #t = this.\u0275prov = O.Yz7({
						token: se,
						factory: se.\u0275fac,
						providedIn: "root"
					})
				}
				return se
			})();

			function wt(se) {
				return {
					matches: "all" === se || "" === se,
					media: se,
					addListener: () => {},
					removeListener: () => {}
				}
			}
			let Yt = (() => {
				class se {
					constructor(k, Z) {
						this._mediaMatcher = k, this._zone = Z, this._queries = new Map, this._destroySubject = new h.x
					}
					ngOnDestroy() {
						this._destroySubject.next(), this._destroySubject.complete()
					}
					isMatched(k) {
						return wn((0, qe.Eq)(k)).some(_e => this._registerQuery(_e).mql.matches)
					}
					observe(k) {
						const _e = wn((0, qe.Eq)(k)).map(X => this._registerQuery(X).observable);
						let $e = (0, ce.a)(_e);
						return $e = (0, $.z)($e.pipe((0, Ye.q)(1)), $e.pipe((0, ge.T)(1), ye(0))), $e.pipe((0, Ne.U)(X => {
							const G = {
								matches: !1,
								breakpoints: {}
							};
							return X.forEach(({
								matches: J,
								query: Oe
							}) => {
								G.matches = G.matches || J, G.breakpoints[Oe] = J
							}), G
						}))
					}
					_registerQuery(k) {
						if (this._queries.has(k)) return this._queries.get(k);
						const Z = this._mediaMatcher.matchMedia(k),
							$e = {
								observable: new Ie.y(X => {
									const G = J => this._zone.run(() => X.next(J));
									return Z.addListener(G), () => {
										Z.removeListener(G)
									}
								}).pipe((0, he.O)(Z), (0, Ne.U)(({
									matches: X
								}) => ({
									query: k,
									matches: X
								})), (0, lt.R)(this._destroySubject)),
								mql: Z
							};
						return this._queries.set(k, $e), $e
					}
					static #e = this.\u0275fac = function(Z) {
						return new(Z || se)(O.LFG(rt), O.LFG(O.R0b))
					};
					static #t = this.\u0275prov = O.Yz7({
						token: se,
						factory: se.\u0275fac,
						providedIn: "root"
					})
				}
				return se
			})();

			function wn(se) {
				return se.map(ee => ee.split(",")).reduce((ee, k) => ee.concat(k)).map(ee => ee.trim())
			}
			const Qt = " ";

			function Mn(se, ee, k) {
				const Z = we(se, ee);
				Z.some(_e => _e.trim() == k.trim()) || (Z.push(k.trim()), se.setAttribute(ee, Z.join(Qt)))
			}

			function Ee(se, ee, k) {
				const _e = we(se, ee).filter($e => $e != k.trim());
				_e.length ? se.setAttribute(ee, _e.join(Qt)) : se.removeAttribute(ee)
			}

			function we(se, ee) {
				return (se.getAttribute(ee) || "").match(/\S+/g) || []
			}
			class Se {
				constructor(ee) {
					this._items = ee, this._activeItemIndex = -1, this._activeItem = null, this._wrap = !1, this._letterKeyStream = new h.x, this._typeaheadSubscription = B.w0.EMPTY, this._vertical = !0, this._allowedModifierKeys = [], this._homeAndEnd = !1, this._pageUpAndDown = {
						enabled: !1,
						delta: 10
					}, this._skipPredicateFn = k => k.disabled, this._pressedLetters = [], this.tabOut = new h.x, this.change = new h.x, ee instanceof O.n_E && (this._itemChangesSubscription = ee.changes.subscribe(k => {
						if (this._activeItem) {
							const _e = k.toArray().indexOf(this._activeItem);
							_e > -1 && _e !== this._activeItemIndex && (this._activeItemIndex = _e)
						}
					}))
				}
				skipPredicate(ee) {
					return this._skipPredicateFn = ee, this
				}
				withWrap(ee = !0) {
					return this._wrap = ee, this
				}
				withVerticalOrientation(ee = !0) {
					return this._vertical = ee, this
				}
				withHorizontalOrientation(ee) {
					return this._horizontal = ee, this
				}
				withAllowedModifierKeys(ee) {
					return this._allowedModifierKeys = ee, this
				}
				withTypeAhead(ee = 200) {
					return this._typeaheadSubscription.unsubscribe(), this._typeaheadSubscription = this._letterKeyStream.pipe((0, ie.b)(k => this._pressedLetters.push(k)), ye(ee), (0, xe.h)(() => this._pressedLetters.length > 0), (0, Ne.U)(() => this._pressedLetters.join(""))).subscribe(k => {
						const Z = this._getItemsArray();
						for (let _e = 1; _e < Z.length + 1; _e++) {
							const $e = (this._activeItemIndex + _e) % Z.length,
								X = Z[$e];
							if (!this._skipPredicateFn(X) && 0 === X.getLabel().toUpperCase().trim().indexOf(k)) {
								this.setActiveItem($e);
								break
							}
						}
						this._pressedLetters = []
					}), this
				}
				cancelTypeahead() {
					return this._pressedLetters = [], this
				}
				withHomeAndEnd(ee = !0) {
					return this._homeAndEnd = ee, this
				}
				withPageUpDown(ee = !0, k = 10) {
					return this._pageUpAndDown = {
						enabled: ee,
						delta: k
					}, this
				}
				setActiveItem(ee) {
					const k = this._activeItem;
					this.updateActiveItem(ee), this._activeItem !== k && this.change.next(this._activeItemIndex)
				}
				onKeydown(ee) {
					const k = ee.keyCode,
						_e = ["altKey", "ctrlKey", "metaKey", "shiftKey"].every($e => !ee[$e] || this._allowedModifierKeys.indexOf($e) > -1);
					switch (k) {
						case ae.Mf:
							return void this.tabOut.next();
						case ae.JH:
							if (this._vertical && _e) {
								this.setNextItemActive();
								break
							}
							return;
						case ae.LH:
							if (this._vertical && _e) {
								this.setPreviousItemActive();
								break
							}
							return;
						case ae.SV:
							if (this._horizontal && _e) {
								"rtl" === this._horizontal ? this.setPreviousItemActive() : this.setNextItemActive();
								break
							}
							return;
						case ae.oh:
							if (this._horizontal && _e) {
								"rtl" === this._horizontal ? this.setNextItemActive() : this.setPreviousItemActive();
								break
							}
							return;
						case ae.Sd:
							if (this._homeAndEnd && _e) {
								this.setFirstItemActive();
								break
							}
							return;
						case ae.uR:
							if (this._homeAndEnd && _e) {
								this.setLastItemActive();
								break
							}
							return;
						case ae.Ku:
							if (this._pageUpAndDown.enabled && _e) {
								const $e = this._activeItemIndex - this._pageUpAndDown.delta;
								this._setActiveItemByIndex($e > 0 ? $e : 0, 1);
								break
							}
							return;
						case ae.VM:
							if (this._pageUpAndDown.enabled && _e) {
								const $e = this._activeItemIndex + this._pageUpAndDown.delta,
									X = this._getItemsArray().length;
								this._setActiveItemByIndex($e < X ? $e : X - 1, -1);
								break
							}
							return;
						default:
							return void((_e || (0, ae.Vb)(ee, "shiftKey")) && (ee.key && 1 === ee.key.length ? this._letterKeyStream.next(ee.key.toLocaleUpperCase()) : (k >= ae.A && k <= ae.Z || k >= ae.xE && k <= ae.aO) && this._letterKeyStream.next(String.fromCharCode(k))))
					}
					this._pressedLetters = [], ee.preventDefault()
				}
				get activeItemIndex() {
					return this._activeItemIndex
				}
				get activeItem() {
					return this._activeItem
				}
				isTyping() {
					return this._pressedLetters.length > 0
				}
				setFirstItemActive() {
					this._setActiveItemByIndex(0, 1)
				}
				setLastItemActive() {
					this._setActiveItemByIndex(this._items.length - 1, -1)
				}
				setNextItemActive() {
					this._activeItemIndex < 0 ? this.setFirstItemActive() : this._setActiveItemByDelta(1)
				}
				setPreviousItemActive() {
					this._activeItemIndex < 0 && this._wrap ? this.setLastItemActive() : this._setActiveItemByDelta(-1)
				}
				updateActiveItem(ee) {
					const k = this._getItemsArray(),
						Z = "number" == typeof ee ? ee : k.indexOf(ee);
					this._activeItem = k[Z] ?? null, this._activeItemIndex = Z
				}
				destroy() {
					this._typeaheadSubscription.unsubscribe(), this._itemChangesSubscription?.unsubscribe(), this._letterKeyStream.complete(), this.tabOut.complete(), this.change.complete(), this._pressedLetters = []
				}
				_setActiveItemByDelta(ee) {
					this._wrap ? this._setActiveInWrapMode(ee) : this._setActiveInDefaultMode(ee)
				}
				_setActiveInWrapMode(ee) {
					const k = this._getItemsArray();
					for (let Z = 1; Z <= k.length; Z++) {
						const _e = (this._activeItemIndex + ee * Z + k.length) % k.length;
						if (!this._skipPredicateFn(k[_e])) return void this.setActiveItem(_e)
					}
				}
				_setActiveInDefaultMode(ee) {
					this._setActiveItemByIndex(this._activeItemIndex + ee, ee)
				}
				_setActiveItemByIndex(ee, k) {
					const Z = this._getItemsArray();
					if (Z[ee]) {
						for (; this._skipPredicateFn(Z[ee]);)
							if (!Z[ee += k]) return;
						this.setActiveItem(ee)
					}
				}
				_getItemsArray() {
					return this._items instanceof O.n_E ? this._items.toArray() : this._items
				}
			}
			class Ze extends Se {
				setActiveItem(ee) {
					this.activeItem && this.activeItem.setInactiveStyles(), super.setActiveItem(ee), this.activeItem && this.activeItem.setActiveStyles()
				}
			}
			class nt extends Se {
				constructor() {
					super(...arguments), this._origin = "program"
				}
				setFocusOrigin(ee) {
					return this._origin = ee, this
				}
				setActiveItem(ee) {
					super.setActiveItem(ee), this.activeItem && this.activeItem.focus(this._origin)
				}
			}
			let _t = (() => {
				class se {
					constructor(k) {
						this._platform = k
					}
					isDisabled(k) {
						return k.hasAttribute("disabled")
					}
					isVisible(k) {
						return function Dt(se) {
							return !!(se.offsetWidth || se.offsetHeight || "function" == typeof se.getClientRects && se.getClientRects().length)
						}(k) && "visible" === getComputedStyle(k).visibility
					}
					isTabbable(k) {
						if (!this._platform.isBrowser) return !1;
						const Z = function gt(se) {
							try {
								return se.frameElement
							} catch {
								return null
							}
						}(function pe(se) {
							return se.ownerDocument && se.ownerDocument.defaultView || window
						}(k));
						if (Z && (-1 === N(Z) || !this.isVisible(Z))) return !1;
						let _e = k.nodeName.toLowerCase(),
							$e = N(k);
						return k.hasAttribute("contenteditable") ? -1 !== $e : !("iframe" === _e || "object" === _e || this._platform.WEBKIT && this._platform.IOS && ! function V(se) {
							let ee = se.nodeName.toLowerCase(),
								k = "input" === ee && se.type;
							return "text" === k || "password" === k || "select" === ee || "textarea" === ee
						}(k)) && ("audio" === _e ? !!k.hasAttribute("controls") && -1 !== $e : "video" === _e ? -1 !== $e && (null !== $e || this._platform.FIREFOX || k.hasAttribute("controls")) : k.tabIndex >= 0)
					}
					isFocusable(k, Z) {
						return function H(se) {
							return ! function tn(se) {
								return function Vn(se) {
									return "input" == se.nodeName.toLowerCase()
								}(se) && "hidden" == se.type
							}(se) && (function an(se) {
								let ee = se.nodeName.toLowerCase();
								return "input" === ee || "select" === ee || "button" === ee || "textarea" === ee
							}(se) || function Nn(se) {
								return function Zn(se) {
									return "a" == se.nodeName.toLowerCase()
								}(se) && se.hasAttribute("href")
							}(se) || se.hasAttribute("contenteditable") || Be(se))
						}(k) && !this.isDisabled(k) && (Z?.ignoreVisibility || this.isVisible(k))
					}
					static #e = this.\u0275fac = function(Z) {
						return new(Z || se)(O.LFG(F.t4))
					};
					static #t = this.\u0275prov = O.Yz7({
						token: se,
						factory: se.\u0275fac,
						providedIn: "root"
					})
				}
				return se
			})();

			function Be(se) {
				if (!se.hasAttribute("tabindex") || void 0 === se.tabIndex) return !1;
				let ee = se.getAttribute("tabindex");
				return !(!ee || isNaN(parseInt(ee, 10)))
			}

			function N(se) {
				if (!Be(se)) return null;
				const ee = parseInt(se.getAttribute("tabindex") || "", 10);
				return isNaN(ee) ? -1 : ee
			}
			class He {
				get enabled() {
					return this._enabled
				}
				set enabled(ee) {
					this._enabled = ee, this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(ee, this._startAnchor), this._toggleAnchorTabIndex(ee, this._endAnchor))
				}
				constructor(ee, k, Z, _e, $e = !1) {
					this._element = ee, this._checker = k, this._ngZone = Z, this._document = _e, this._hasAttached = !1, this.startAnchorListener = () => this.focusLastTabbableElement(), this.endAnchorListener = () => this.focusFirstTabbableElement(), this._enabled = !0, $e || this.attachAnchors()
				}
				destroy() {
					const ee = this._startAnchor,
						k = this._endAnchor;
					ee && (ee.removeEventListener("focus", this.startAnchorListener), ee.remove()), k && (k.removeEventListener("focus", this.endAnchorListener), k.remove()), this._startAnchor = this._endAnchor = null, this._hasAttached = !1
				}
				attachAnchors() {
					return !!this._hasAttached || (this._ngZone.runOutsideAngular(() => {
						this._startAnchor || (this._startAnchor = this._createAnchor(), this._startAnchor.addEventListener("focus", this.startAnchorListener)), this._endAnchor || (this._endAnchor = this._createAnchor(), this._endAnchor.addEventListener("focus", this.endAnchorListener))
					}), this._element.parentNode && (this._element.parentNode.insertBefore(this._startAnchor, this._element), this._element.parentNode.insertBefore(this._endAnchor, this._element.nextSibling), this._hasAttached = !0), this._hasAttached)
				}
				focusInitialElementWhenReady(ee) {
					return new Promise(k => {
						this._executeOnStable(() => k(this.focusInitialElement(ee)))
					})
				}
				focusFirstTabbableElementWhenReady(ee) {
					return new Promise(k => {
						this._executeOnStable(() => k(this.focusFirstTabbableElement(ee)))
					})
				}
				focusLastTabbableElementWhenReady(ee) {
					return new Promise(k => {
						this._executeOnStable(() => k(this.focusLastTabbableElement(ee)))
					})
				}
				_getRegionBoundary(ee) {
					const k = this._element.querySelectorAll(`[cdk-focus-region-${ee}], [cdkFocusRegion${ee}], [cdk-focus-${ee}]`);
					return "start" == ee ? k.length ? k[0] : this._getFirstTabbableElement(this._element) : k.length ? k[k.length - 1] : this._getLastTabbableElement(this._element)
				}
				focusInitialElement(ee) {
					const k = this._element.querySelector("[cdk-focus-initial], [cdkFocusInitial]");
					if (k) {
						if (!this._checker.isFocusable(k)) {
							const Z = this._getFirstTabbableElement(k);
							return Z?.focus(ee), !!Z
						}
						return k.focus(ee), !0
					}
					return this.focusFirstTabbableElement(ee)
				}
				focusFirstTabbableElement(ee) {
					const k = this._getRegionBoundary("start");
					return k && k.focus(ee), !!k
				}
				focusLastTabbableElement(ee) {
					const k = this._getRegionBoundary("end");
					return k && k.focus(ee), !!k
				}
				hasAttached() {
					return this._hasAttached
				}
				_getFirstTabbableElement(ee) {
					if (this._checker.isFocusable(ee) && this._checker.isTabbable(ee)) return ee;
					const k = ee.children;
					for (let Z = 0; Z < k.length; Z++) {
						const _e = k[Z].nodeType === this._document.ELEMENT_NODE ? this._getFirstTabbableElement(k[Z]) : null;
						if (_e) return _e
					}
					return null
				}
				_getLastTabbableElement(ee) {
					if (this._checker.isFocusable(ee) && this._checker.isTabbable(ee)) return ee;
					const k = ee.children;
					for (let Z = k.length - 1; Z >= 0; Z--) {
						const _e = k[Z].nodeType === this._document.ELEMENT_NODE ? this._getLastTabbableElement(k[Z]) : null;
						if (_e) return _e
					}
					return null
				}
				_createAnchor() {
					const ee = this._document.createElement("div");
					return this._toggleAnchorTabIndex(this._enabled, ee), ee.classList.add("cdk-visually-hidden"), ee.classList.add("cdk-focus-trap-anchor"), ee.setAttribute("aria-hidden", "true"), ee
				}
				_toggleAnchorTabIndex(ee, k) {
					ee ? k.setAttribute("tabindex", "0") : k.removeAttribute("tabindex")
				}
				toggleAnchors(ee) {
					this._startAnchor && this._endAnchor && (this._toggleAnchorTabIndex(ee, this._startAnchor), this._toggleAnchorTabIndex(ee, this._endAnchor))
				}
				_executeOnStable(ee) {
					this._ngZone.isStable ? ee() : this._ngZone.onStable.pipe((0, Ye.q)(1)).subscribe(ee)
				}
			}
			let Ue = (() => {
				class se {
					constructor(k, Z, _e) {
						this._checker = k, this._ngZone = Z, this._document = _e
					}
					create(k, Z = !1) {
						return new He(k, this._checker, this._ngZone, this._document, Z)
					}
					static #e = this.\u0275fac = function(Z) {
						return new(Z || se)(O.LFG(_t), O.LFG(O.R0b), O.LFG(l.K0))
					};
					static #t = this.\u0275prov = O.Yz7({
						token: se,
						factory: se.\u0275fac,
						providedIn: "root"
					})
				}
				return se
			})();

			function Et(se) {
				return 0 === se.buttons || 0 === se.detail
			}

			function ln(se) {
				const ee = se.touches && se.touches[0] || se.changedTouches && se.changedTouches[0];
				return !(!ee || -1 !== ee.identifier || null != ee.radiusX && 1 !== ee.radiusX || null != ee.radiusY && 1 !== ee.radiusY)
			}
			const nn = new O.OlP("cdk-input-modality-detector-options"),
				fn = {
					ignoreKeys: [ae.zL, ae.jx, ae.b2, ae.MW, ae.JU]
				},
				yn = (0, F.i$)({
					passive: !0,
					capture: !0
				});
			let Ui = (() => {
				class se {
					get mostRecentModality() {
						return this._modality.value
					}
					constructor(k, Z, _e, $e) {
						this._platform = k, this._mostRecentTarget = null, this._modality = new K.X(null), this._lastTouchMs = 0, this._onKeydown = X => {
							this._options?.ignoreKeys?.some(G => G === X.keyCode) || (this._modality.next("keyboard"), this._mostRecentTarget = (0, F.sA)(X))
						}, this._onMousedown = X => {
							Date.now() - this._lastTouchMs < 650 || (this._modality.next(Et(X) ? "keyboard" : "mouse"), this._mostRecentTarget = (0, F.sA)(X))
						}, this._onTouchstart = X => {
							ln(X) ? this._modality.next("keyboard") : (this._lastTouchMs = Date.now(), this._modality.next("touch"), this._mostRecentTarget = (0, F.sA)(X))
						}, this._options = {
							...fn,
							...$e
						}, this.modalityDetected = this._modality.pipe((0, ge.T)(1)), this.modalityChanged = this.modalityDetected.pipe((0, it.x)()), k.isBrowser && Z.runOutsideAngular(() => {
							_e.addEventListener("keydown", this._onKeydown, yn), _e.addEventListener("mousedown", this._onMousedown, yn), _e.addEventListener("touchstart", this._onTouchstart, yn)
						})
					}
					ngOnDestroy() {
						this._modality.complete(), this._platform.isBrowser && (document.removeEventListener("keydown", this._onKeydown, yn), document.removeEventListener("mousedown", this._onMousedown, yn), document.removeEventListener("touchstart", this._onTouchstart, yn))
					}
					static #e = this.\u0275fac = function(Z) {
						return new(Z || se)(O.LFG(F.t4), O.LFG(O.R0b), O.LFG(l.K0), O.LFG(nn, 8))
					};
					static #t = this.\u0275prov = O.Yz7({
						token: se,
						factory: se.\u0275fac,
						providedIn: "root"
					})
				}
				return se
			})();
			const pn = new O.OlP("liveAnnouncerElement", {
					providedIn: "root",
					factory: function xn() {
						return null
					}
				}),
				si = new O.OlP("LIVE_ANNOUNCER_DEFAULT_OPTIONS");
			let Pi = 0,
				vn = (() => {
					class se {
						constructor(k, Z, _e, $e) {
							this._ngZone = Z, this._defaultOptions = $e, this._document = _e, this._liveElement = k || this._createLiveElement()
						}
						announce(k, ...Z) {
							const _e = this._defaultOptions;
							let $e, X;
							return 1 === Z.length && "number" == typeof Z[0] ? X = Z[0] : [$e, X] = Z, this.clear(), clearTimeout(this._previousTimeout), $e || ($e = _e && _e.politeness ? _e.politeness : "polite"), null == X && _e && (X = _e.duration), this._liveElement.setAttribute("aria-live", $e), this._liveElement.id && this._exposeAnnouncerToModals(this._liveElement.id), this._ngZone.runOutsideAngular(() => (this._currentPromise || (this._currentPromise = new Promise(G => this._currentResolve = G)), clearTimeout(this._previousTimeout), this._previousTimeout = setTimeout(() => {
								this._liveElement.textContent = k, "number" == typeof X && (this._previousTimeout = setTimeout(() => this.clear(), X)), this._currentResolve(), this._currentPromise = this._currentResolve = void 0
							}, 100), this._currentPromise))
						}
						clear() {
							this._liveElement && (this._liveElement.textContent = "")
						}
						ngOnDestroy() {
							clearTimeout(this._previousTimeout), this._liveElement?.remove(), this._liveElement = null, this._currentResolve?.(), this._currentPromise = this._currentResolve = void 0
						}
						_createLiveElement() {
							const k = "cdk-live-announcer-element",
								Z = this._document.getElementsByClassName(k),
								_e = this._document.createElement("div");
							for (let $e = 0; $e < Z.length; $e++) Z[$e].remove();
							return _e.classList.add(k), _e.classList.add("cdk-visually-hidden"), _e.setAttribute("aria-atomic", "true"), _e.setAttribute("aria-live", "polite"), _e.id = "cdk-live-announcer-" + Pi++, this._document.body.appendChild(_e), _e
						}
						_exposeAnnouncerToModals(k) {
							const Z = this._document.querySelectorAll('body > .cdk-overlay-container [aria-modal="true"]');
							for (let _e = 0; _e < Z.length; _e++) {
								const $e = Z[_e],
									X = $e.getAttribute("aria-owns");
								X ? -1 === X.indexOf(k) && $e.setAttribute("aria-owns", X + " " + k) : $e.setAttribute("aria-owns", k)
							}
						}
						static #e = this.\u0275fac = function(Z) {
							return new(Z || se)(O.LFG(pn, 8), O.LFG(O.R0b), O.LFG(l.K0), O.LFG(si, 8))
						};
						static #t = this.\u0275prov = O.Yz7({
							token: se,
							factory: se.\u0275fac,
							providedIn: "root"
						})
					}
					return se
				})();
			const zn = new O.OlP("cdk-focus-monitor-default-options"),
				Le = (0, F.i$)({
					passive: !0,
					capture: !0
				});
			let L = (() => {
				class se {
					constructor(k, Z, _e, $e, X) {
						this._ngZone = k, this._platform = Z, this._inputModalityDetector = _e, this._origin = null, this._windowFocused = !1, this._originFromTouchInteraction = !1, this._elementInfo = new Map, this._monitoredElementCount = 0, this._rootNodeFocusListenerCount = new Map, this._windowFocusListener = () => {
							this._windowFocused = !0, this._windowFocusTimeoutId = window.setTimeout(() => this._windowFocused = !1)
						}, this._stopInputModalityDetector = new h.x, this._rootNodeFocusAndBlurListener = G => {
							for (let Oe = (0, F.sA)(G); Oe; Oe = Oe.parentElement) "focus" === G.type ? this._onFocus(G, Oe) : this._onBlur(G, Oe)
						}, this._document = $e, this._detectionMode = X?.detectionMode || 0
					}
					monitor(k, Z = !1) {
						const _e = (0, qe.fI)(k);
						if (!this._platform.isBrowser || 1 !== _e.nodeType) return (0, ne.of)();
						const $e = (0, F.kV)(_e) || this._getDocument(),
							X = this._elementInfo.get(_e);
						if (X) return Z && (X.checkChildren = !0), X.subject;
						const G = {
							checkChildren: Z,
							subject: new h.x,
							rootNode: $e
						};
						return this._elementInfo.set(_e, G), this._registerGlobalListeners(G), G.subject
					}
					stopMonitoring(k) {
						const Z = (0, qe.fI)(k),
							_e = this._elementInfo.get(Z);
						_e && (_e.subject.complete(), this._setClasses(Z), this._elementInfo.delete(Z), this._removeGlobalListeners(_e))
					}
					focusVia(k, Z, _e) {
						const $e = (0, qe.fI)(k);
						$e === this._getDocument().activeElement ? this._getClosestElementsInfo($e).forEach(([G, J]) => this._originChanged(G, Z, J)) : (this._setOrigin(Z), "function" == typeof $e.focus && $e.focus(_e))
					}
					ngOnDestroy() {
						this._elementInfo.forEach((k, Z) => this.stopMonitoring(Z))
					}
					_getDocument() {
						return this._document || document
					}
					_getWindow() {
						return this._getDocument().defaultView || window
					}
					_getFocusOrigin(k) {
						return this._origin ? this._originFromTouchInteraction ? this._shouldBeAttributedToTouch(k) ? "touch" : "program" : this._origin : this._windowFocused && this._lastFocusOrigin ? this._lastFocusOrigin : k && this._isLastInteractionFromInputLabel(k) ? "mouse" : "program"
					}
					_shouldBeAttributedToTouch(k) {
						return 1 === this._detectionMode || !!k?.contains(this._inputModalityDetector._mostRecentTarget)
					}
					_setClasses(k, Z) {
						k.classList.toggle("cdk-focused", !!Z), k.classList.toggle("cdk-touch-focused", "touch" === Z), k.classList.toggle("cdk-keyboard-focused", "keyboard" === Z), k.classList.toggle("cdk-mouse-focused", "mouse" === Z), k.classList.toggle("cdk-program-focused", "program" === Z)
					}
					_setOrigin(k, Z = !1) {
						this._ngZone.runOutsideAngular(() => {
							this._origin = k, this._originFromTouchInteraction = "touch" === k && Z, 0 === this._detectionMode && (clearTimeout(this._originTimeoutId), this._originTimeoutId = setTimeout(() => this._origin = null, this._originFromTouchInteraction ? 650 : 1))
						})
					}
					_onFocus(k, Z) {
						const _e = this._elementInfo.get(Z),
							$e = (0, F.sA)(k);
						!_e || !_e.checkChildren && Z !== $e || this._originChanged(Z, this._getFocusOrigin($e), _e)
					}
					_onBlur(k, Z) {
						const _e = this._elementInfo.get(Z);
						!_e || _e.checkChildren && k.relatedTarget instanceof Node && Z.contains(k.relatedTarget) || (this._setClasses(Z), this._emitOrigin(_e, null))
					}
					_emitOrigin(k, Z) {
						k.subject.observers.length && this._ngZone.run(() => k.subject.next(Z))
					}
					_registerGlobalListeners(k) {
						if (!this._platform.isBrowser) return;
						const Z = k.rootNode,
							_e = this._rootNodeFocusListenerCount.get(Z) || 0;
						_e || this._ngZone.runOutsideAngular(() => {
							Z.addEventListener("focus", this._rootNodeFocusAndBlurListener, Le), Z.addEventListener("blur", this._rootNodeFocusAndBlurListener, Le)
						}), this._rootNodeFocusListenerCount.set(Z, _e + 1), 1 == ++this._monitoredElementCount && (this._ngZone.runOutsideAngular(() => {
							this._getWindow().addEventListener("focus", this._windowFocusListener)
						}), this._inputModalityDetector.modalityDetected.pipe((0, lt.R)(this._stopInputModalityDetector)).subscribe($e => {
							this._setOrigin($e, !0)
						}))
					}
					_removeGlobalListeners(k) {
						const Z = k.rootNode;
						if (this._rootNodeFocusListenerCount.has(Z)) {
							const _e = this._rootNodeFocusListenerCount.get(Z);
							_e > 1 ? this._rootNodeFocusListenerCount.set(Z, _e - 1) : (Z.removeEventListener("focus", this._rootNodeFocusAndBlurListener, Le), Z.removeEventListener("blur", this._rootNodeFocusAndBlurListener, Le), this._rootNodeFocusListenerCount.delete(Z))
						}--this._monitoredElementCount || (this._getWindow().removeEventListener("focus", this._windowFocusListener), this._stopInputModalityDetector.next(), clearTimeout(this._windowFocusTimeoutId), clearTimeout(this._originTimeoutId))
					}
					_originChanged(k, Z, _e) {
						this._setClasses(k, Z), this._emitOrigin(_e, Z), this._lastFocusOrigin = Z
					}
					_getClosestElementsInfo(k) {
						const Z = [];
						return this._elementInfo.forEach((_e, $e) => {
							($e === k || _e.checkChildren && $e.contains(k)) && Z.push([$e, _e])
						}), Z
					}
					_isLastInteractionFromInputLabel(k) {
						const {
							_mostRecentTarget: Z,
							mostRecentModality: _e
						} = this._inputModalityDetector;
						if ("mouse" !== _e || !Z || Z === k || "INPUT" !== k.nodeName && "TEXTAREA" !== k.nodeName || k.disabled) return !1;
						const $e = k.labels;
						if ($e)
							for (let X = 0; X < $e.length; X++)
								if ($e[X].contains(Z)) return !0;
						return !1
					}
					static #e = this.\u0275fac = function(Z) {
						return new(Z || se)(O.LFG(O.R0b), O.LFG(F.t4), O.LFG(Ui), O.LFG(l.K0, 8), O.LFG(zn, 8))
					};
					static #t = this.\u0275prov = O.Yz7({
						token: se,
						factory: se.\u0275fac,
						providedIn: "root"
					})
				}
				return se
			})();
			const x = "cdk-high-contrast-black-on-white",
				R = "cdk-high-contrast-white-on-black",
				le = "cdk-high-contrast-active";
			let Ke = (() => {
				class se {
					constructor(k, Z) {
						this._platform = k, this._document = Z, this._breakpointSubscription = (0, O.f3M)(Yt).observe("(forced-colors: active)").subscribe(() => {
							this._hasCheckedHighContrastMode && (this._hasCheckedHighContrastMode = !1, this._applyBodyHighContrastModeCssClasses())
						})
					}
					getHighContrastMode() {
						if (!this._platform.isBrowser) return 0;
						const k = this._document.createElement("div");
						k.style.backgroundColor = "rgb(1,2,3)", k.style.position = "absolute", this._document.body.appendChild(k);
						const Z = this._document.defaultView || window,
							_e = Z && Z.getComputedStyle ? Z.getComputedStyle(k) : null,
							$e = (_e && _e.backgroundColor || "").replace(/ /g, "");
						switch (k.remove(), $e) {
							case "rgb(0,0,0)":
							case "rgb(45,50,54)":
							case "rgb(32,32,32)":
								return 2;
							case "rgb(255,255,255)":
							case "rgb(255,250,239)":
								return 1
						}
						return 0
					}
					ngOnDestroy() {
						this._breakpointSubscription.unsubscribe()
					}
					_applyBodyHighContrastModeCssClasses() {
						if (!this._hasCheckedHighContrastMode && this._platform.isBrowser && this._document.body) {
							const k = this._document.body.classList;
							k.remove(le, x, R), this._hasCheckedHighContrastMode = !0;
							const Z = this.getHighContrastMode();
							1 === Z ? k.add(le, x) : 2 === Z && k.add(le, R)
						}
					}
					static #e = this.\u0275fac = function(Z) {
						return new(Z || se)(O.LFG(F.t4), O.LFG(l.K0))
					};
					static #t = this.\u0275prov = O.Yz7({
						token: se,
						factory: se.\u0275fac,
						providedIn: "root"
					})
				}
				return se
			})()
		},
		9388: (Ge, re, v) => {
			v.d(re, {
				Is: () => ne,
				Lv: () => ae,
				vT: () => ie
			});
			var l = v(5879),
				O = v(6814);
			const F = new l.OlP("cdk-dir-doc", {
					providedIn: "root",
					factory: function h() {
						return (0, l.f3M)(O.K0)
					}
				}),
				B = /^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;

			function K(te) {
				const Q = te?.toLowerCase() || "";
				return "auto" === Q && typeof navigator < "u" && navigator?.language ? B.test(navigator.language) ? "rtl" : "ltr" : "rtl" === Q ? "rtl" : "ltr"
			}
			let ne = (() => {
					class te {
						constructor(de) {
							this.value = "ltr", this.change = new l.vpe, de && (this.value = K((de.body ? de.body.dir : null) || (de.documentElement ? de.documentElement.dir : null) || "ltr"))
						}
						ngOnDestroy() {
							this.change.complete()
						}
						static #e = this.\u0275fac = function(ye) {
							return new(ye || te)(l.LFG(F, 8))
						};
						static #t = this.\u0275prov = l.Yz7({
							token: te,
							factory: te.\u0275fac,
							providedIn: "root"
						})
					}
					return te
				})(),
				ae = (() => {
					class te {
						constructor() {
							this._dir = "ltr", this._isInitialized = !1, this.change = new l.vpe
						}
						get dir() {
							return this._dir
						}
						set dir(de) {
							const ye = this._dir;
							this._dir = K(de), this._rawDir = de, ye !== this._dir && this._isInitialized && this.change.emit(this._dir)
						}
						get value() {
							return this.dir
						}
						ngAfterContentInit() {
							this._isInitialized = !0
						}
						ngOnDestroy() {
							this.change.complete()
						}
						static #e = this.\u0275fac = function(ye) {
							return new(ye || te)
						};
						static #t = this.\u0275dir = l.lG2({
							type: te,
							selectors: [
								["", "dir", ""]
							],
							hostVars: 1,
							hostBindings: function(ye, xe) {
								2 & ye && l.uIk("dir", xe._rawDir)
							},
							inputs: {
								dir: "dir"
							},
							outputs: {
								change: "dirChange"
							},
							exportAs: ["dir"],
							features: [l._Bn([{
								provide: ne,
								useExisting: te
							}])]
						})
					}
					return te
				})(),
				ie = (() => {
					class te {
						static #e = this.\u0275fac = function(ye) {
							return new(ye || te)
						};
						static #t = this.\u0275mod = l.oAB({
							type: te
						});
						static #n = this.\u0275inj = l.cJS({})
					}
					return te
				})()
		},
		2495: (Ge, re, v) => {
			v.d(re, {
				Eq: () => B,
				HM: () => K,
				Ig: () => O,
				du: () => ae,
				fI: () => ne,
				su: () => F,
				t6: () => h
			});
			var l = v(5879);

			function O(ie) {
				return null != ie && "false" != `${ie}`
			}

			function F(ie, te = 0) {
				return h(ie) ? Number(ie) : te
			}

			function h(ie) {
				return !isNaN(parseFloat(ie)) && !isNaN(Number(ie))
			}

			function B(ie) {
				return Array.isArray(ie) ? ie : [ie]
			}

			function K(ie) {
				return null == ie ? "" : "string" == typeof ie ? ie : `${ie}px`
			}

			function ne(ie) {
				return ie instanceof l.SBq ? ie.nativeElement : ie
			}

			function ae(ie, te = /\s+/) {
				const Q = [];
				if (null != ie) {
					const de = Array.isArray(ie) ? ie : `${ie}`.split(te);
					for (const ye of de) {
						const xe = `${ye}`.trim();
						xe && Q.push(xe)
					}
				}
				return Q
			}
		},
		6028: (Ge, re, v) => {
			v.d(re, {
				A: () => Te,
				JH: () => qe,
				JU: () => K,
				K5: () => B,
				Ku: () => ye,
				LH: () => it,
				L_: () => de,
				MW: () => Pt,
				Mf: () => F,
				SV: () => lt,
				Sd: () => Ye,
				VM: () => xe,
				Vb: () => $n,
				Z: () => Xe,
				aO: () => Qt,
				b2: () => ci,
				hY: () => Q,
				jx: () => ne,
				oh: () => ge,
				uR: () => Ne,
				xE: () => ue,
				zL: () => ae
			});
			const F = 9,
				B = 13,
				K = 16,
				ne = 17,
				ae = 18,
				Q = 27,
				de = 32,
				ye = 33,
				xe = 34,
				Ne = 35,
				Ye = 36,
				ge = 37,
				it = 38,
				lt = 39,
				qe = 40,
				ue = 48,
				Qt = 57,
				Te = 65,
				Xe = 90,
				Pt = 91,
				ci = 224;

			function $n(Gn, ...Ei) {
				return Ei.length ? Ei.some(Vi => Gn[Vi]) : Gn.altKey || Gn.shiftKey || Gn.ctrlKey || Gn.metaKey
			}
		},
		9594: (Ge, re, v) => {
			v.d(re, {
				Iu: () => Mn,
				U8: () => Vn,
				X_: () => ue,
				Xj: () => Qt,
				YJ: () => Zn,
				aV: () => mt,
				pI: () => an,
				tR: () => Ae,
				xu: () => Dt
			});
			var l = v(9473),
				O = v(6814),
				F = v(5879),
				h = v(2495),
				B = v(2831),
				K = v(2181),
				ne = v(8180),
				ae = v(9773),
				ie = v(812),
				te = v(9388),
				Q = v(8484),
				de = v(8645),
				ye = v(7394),
				xe = v(3019),
				Ne = v(6028);
			const Ye = (0, B.Mq)();
			class ge {
				constructor(N, V) {
					this._viewportRuler = N, this._previousHTMLStyles = {
						top: "",
						left: ""
					}, this._isEnabled = !1, this._document = V
				}
				attach() {}
				enable() {
					if (this._canBeEnabled()) {
						const N = this._document.documentElement;
						this._previousScrollPosition = this._viewportRuler.getViewportScrollPosition(), this._previousHTMLStyles.left = N.style.left || "", this._previousHTMLStyles.top = N.style.top || "", N.style.left = (0, h.HM)(-this._previousScrollPosition.left), N.style.top = (0, h.HM)(-this._previousScrollPosition.top), N.classList.add("cdk-global-scrollblock"), this._isEnabled = !0
					}
				}
				disable() {
					if (this._isEnabled) {
						const N = this._document.documentElement,
							H = N.style,
							pe = this._document.body.style,
							He = H.scrollBehavior || "",
							Ue = pe.scrollBehavior || "";
						this._isEnabled = !1, H.left = this._previousHTMLStyles.left, H.top = this._previousHTMLStyles.top, N.classList.remove("cdk-global-scrollblock"), Ye && (H.scrollBehavior = pe.scrollBehavior = "auto"), window.scroll(this._previousScrollPosition.left, this._previousScrollPosition.top), Ye && (H.scrollBehavior = He, pe.scrollBehavior = Ue)
					}
				}
				_canBeEnabled() {
					if (this._document.documentElement.classList.contains("cdk-global-scrollblock") || this._isEnabled) return !1;
					const V = this._document.body,
						H = this._viewportRuler.getViewportSize();
					return V.scrollHeight > H.height || V.scrollWidth > H.width
				}
			}
			class lt {
				constructor(N, V, H, pe) {
					this._scrollDispatcher = N, this._ngZone = V, this._viewportRuler = H, this._config = pe, this._scrollSubscription = null, this._detach = () => {
						this.disable(), this._overlayRef.hasAttached() && this._ngZone.run(() => this._overlayRef.detach())
					}
				}
				attach(N) {
					this._overlayRef = N
				}
				enable() {
					if (this._scrollSubscription) return;
					const N = this._scrollDispatcher.scrolled(0).pipe((0, K.h)(V => !V || !this._overlayRef.overlayElement.contains(V.getElementRef().nativeElement)));
					this._config && this._config.threshold && this._config.threshold > 1 ? (this._initialScrollPosition = this._viewportRuler.getViewportScrollPosition().top, this._scrollSubscription = N.subscribe(() => {
						const V = this._viewportRuler.getViewportScrollPosition().top;
						Math.abs(V - this._initialScrollPosition) > this._config.threshold ? this._detach() : this._overlayRef.updatePosition()
					})) : this._scrollSubscription = N.subscribe(this._detach)
				}
				disable() {
					this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null)
				}
				detach() {
					this.disable(), this._overlayRef = null
				}
			}
			class qe {
				enable() {}
				disable() {}
				attach() {}
			}

			function ce(Be, N) {
				return N.some(V => Be.bottom < V.top || Be.top > V.bottom || Be.right < V.left || Be.left > V.right)
			}

			function $(Be, N) {
				return N.some(V => Be.top < V.top || Be.bottom > V.bottom || Be.left < V.left || Be.right > V.right)
			}
			class Ie {
				constructor(N, V, H, pe) {
					this._scrollDispatcher = N, this._viewportRuler = V, this._ngZone = H, this._config = pe, this._scrollSubscription = null
				}
				attach(N) {
					this._overlayRef = N
				}
				enable() {
					this._scrollSubscription || (this._scrollSubscription = this._scrollDispatcher.scrolled(this._config ? this._config.scrollThrottle : 0).subscribe(() => {
						if (this._overlayRef.updatePosition(), this._config && this._config.autoClose) {
							const V = this._overlayRef.overlayElement.getBoundingClientRect(),
								{
									width: H,
									height: pe
								} = this._viewportRuler.getViewportSize();
							ce(V, [{
								width: H,
								height: pe,
								bottom: pe,
								right: H,
								top: 0,
								left: 0
							}]) && (this.disable(), this._ngZone.run(() => this._overlayRef.detach()))
						}
					}))
				}
				disable() {
					this._scrollSubscription && (this._scrollSubscription.unsubscribe(), this._scrollSubscription = null)
				}
				detach() {
					this.disable(), this._overlayRef = null
				}
			}
			let he = (() => {
				class Be {
					constructor(V, H, pe, He) {
						this._scrollDispatcher = V, this._viewportRuler = H, this._ngZone = pe, this.noop = () => new qe, this.close = Ue => new lt(this._scrollDispatcher, this._ngZone, this._viewportRuler, Ue), this.block = () => new ge(this._viewportRuler, this._document), this.reposition = Ue => new Ie(this._scrollDispatcher, this._viewportRuler, this._ngZone, Ue), this._document = He
					}
					static #e = this.\u0275fac = function(H) {
						return new(H || Be)(F.LFG(l.mF), F.LFG(l.rL), F.LFG(F.R0b), F.LFG(O.K0))
					};
					static #t = this.\u0275prov = F.Yz7({
						token: Be,
						factory: Be.\u0275fac,
						providedIn: "root"
					})
				}
				return Be
			})();
			class ue {
				constructor(N) {
					if (this.scrollStrategy = new qe, this.panelClass = "", this.hasBackdrop = !1, this.backdropClass = "cdk-overlay-dark-backdrop", this.disposeOnNavigation = !1, N) {
						const V = Object.keys(N);
						for (const H of V) void 0 !== N[H] && (this[H] = N[H])
					}
				}
			}
			class Ae {
				constructor(N, V, H, pe, He) {
					this.offsetX = H, this.offsetY = pe, this.panelClass = He, this.originX = N.originX, this.originY = N.originY, this.overlayX = V.overlayX, this.overlayY = V.overlayY
				}
			}
			class rt {
				constructor(N, V) {
					this.connectionPair = N, this.scrollableViewProperties = V
				}
			}
			let Yt = (() => {
					class Be {
						constructor(V) {
							this._attachedOverlays = [], this._document = V
						}
						ngOnDestroy() {
							this.detach()
						}
						add(V) {
							this.remove(V), this._attachedOverlays.push(V)
						}
						remove(V) {
							const H = this._attachedOverlays.indexOf(V);
							H > -1 && this._attachedOverlays.splice(H, 1), 0 === this._attachedOverlays.length && this.detach()
						}
						static #e = this.\u0275fac = function(H) {
							return new(H || Be)(F.LFG(O.K0))
						};
						static #t = this.\u0275prov = F.Yz7({
							token: Be,
							factory: Be.\u0275fac,
							providedIn: "root"
						})
					}
					return Be
				})(),
				wn = (() => {
					class Be extends Yt {
						constructor(V, H) {
							super(V), this._ngZone = H, this._keydownListener = pe => {
								const He = this._attachedOverlays;
								for (let Ue = He.length - 1; Ue > -1; Ue--)
									if (He[Ue]._keydownEvents.observers.length > 0) {
										const Xe = He[Ue]._keydownEvents;
										this._ngZone ? this._ngZone.run(() => Xe.next(pe)) : Xe.next(pe);
										break
									}
							}
						}
						add(V) {
							super.add(V), this._isAttached || (this._ngZone ? this._ngZone.runOutsideAngular(() => this._document.body.addEventListener("keydown", this._keydownListener)) : this._document.body.addEventListener("keydown", this._keydownListener), this._isAttached = !0)
						}
						detach() {
							this._isAttached && (this._document.body.removeEventListener("keydown", this._keydownListener), this._isAttached = !1)
						}
						static #e = this.\u0275fac = function(H) {
							return new(H || Be)(F.LFG(O.K0), F.LFG(F.R0b, 8))
						};
						static #t = this.\u0275prov = F.Yz7({
							token: Be,
							factory: Be.\u0275fac,
							providedIn: "root"
						})
					}
					return Be
				})(),
				Un = (() => {
					class Be extends Yt {
						constructor(V, H, pe) {
							super(V), this._platform = H, this._ngZone = pe, this._cursorStyleIsSet = !1, this._pointerDownListener = He => {
								this._pointerDownEventTarget = (0, B.sA)(He)
							}, this._clickListener = He => {
								const Ue = (0, B.sA)(He),
									Xe = "click" === He.type && this._pointerDownEventTarget ? this._pointerDownEventTarget : Ue;
								this._pointerDownEventTarget = null;
								const Pt = this._attachedOverlays.slice();
								for (let ht = Pt.length - 1; ht > -1; ht--) {
									const bt = Pt[ht];
									if (bt._outsidePointerEvents.observers.length < 1 || !bt.hasAttached()) continue;
									if (bt.overlayElement.contains(Ue) || bt.overlayElement.contains(Xe)) break;
									const yt = bt._outsidePointerEvents;
									this._ngZone ? this._ngZone.run(() => yt.next(He)) : yt.next(He)
								}
							}
						}
						add(V) {
							if (super.add(V), !this._isAttached) {
								const H = this._document.body;
								this._ngZone ? this._ngZone.runOutsideAngular(() => this._addEventListeners(H)) : this._addEventListeners(H), this._platform.IOS && !this._cursorStyleIsSet && (this._cursorOriginalValue = H.style.cursor, H.style.cursor = "pointer", this._cursorStyleIsSet = !0), this._isAttached = !0
							}
						}
						detach() {
							if (this._isAttached) {
								const V = this._document.body;
								V.removeEventListener("pointerdown", this._pointerDownListener, !0), V.removeEventListener("click", this._clickListener, !0), V.removeEventListener("auxclick", this._clickListener, !0), V.removeEventListener("contextmenu", this._clickListener, !0), this._platform.IOS && this._cursorStyleIsSet && (V.style.cursor = this._cursorOriginalValue, this._cursorStyleIsSet = !1), this._isAttached = !1
							}
						}
						_addEventListeners(V) {
							V.addEventListener("pointerdown", this._pointerDownListener, !0), V.addEventListener("click", this._clickListener, !0), V.addEventListener("auxclick", this._clickListener, !0), V.addEventListener("contextmenu", this._clickListener, !0)
						}
						static #e = this.\u0275fac = function(H) {
							return new(H || Be)(F.LFG(O.K0), F.LFG(B.t4), F.LFG(F.R0b, 8))
						};
						static #t = this.\u0275prov = F.Yz7({
							token: Be,
							factory: Be.\u0275fac,
							providedIn: "root"
						})
					}
					return Be
				})(),
				Qt = (() => {
					class Be {
						constructor(V, H) {
							this._platform = H, this._document = V
						}
						ngOnDestroy() {
							this._containerElement?.remove()
						}
						getContainerElement() {
							return this._containerElement || this._createContainer(), this._containerElement
						}
						_createContainer() {
							const V = "cdk-overlay-container";
							if (this._platform.isBrowser || (0, B.Oy)()) {
								const pe = this._document.querySelectorAll(`.${V}[platform="server"], .${V}[platform="test"]`);
								for (let He = 0; He < pe.length; He++) pe[He].remove()
							}
							const H = this._document.createElement("div");
							H.classList.add(V), (0, B.Oy)() ? H.setAttribute("platform", "test") : this._platform.isBrowser || H.setAttribute("platform", "server"), this._document.body.appendChild(H), this._containerElement = H
						}
						static #e = this.\u0275fac = function(H) {
							return new(H || Be)(F.LFG(O.K0), F.LFG(B.t4))
						};
						static #t = this.\u0275prov = F.Yz7({
							token: Be,
							factory: Be.\u0275fac,
							providedIn: "root"
						})
					}
					return Be
				})();
			class Mn {
				constructor(N, V, H, pe, He, Ue, Xe, Pt, ht, bt = !1) {
					this._portalOutlet = N, this._host = V, this._pane = H, this._config = pe, this._ngZone = He, this._keyboardDispatcher = Ue, this._document = Xe, this._location = Pt, this._outsideClickDispatcher = ht, this._animationsDisabled = bt, this._backdropElement = null, this._backdropClick = new de.x, this._attachments = new de.x, this._detachments = new de.x, this._locationChanges = ye.w0.EMPTY, this._backdropClickHandler = yt => this._backdropClick.next(yt), this._backdropTransitionendHandler = yt => {
						this._disposeBackdrop(yt.target)
					}, this._keydownEvents = new de.x, this._outsidePointerEvents = new de.x, pe.scrollStrategy && (this._scrollStrategy = pe.scrollStrategy, this._scrollStrategy.attach(this)), this._positionStrategy = pe.positionStrategy
				}
				get overlayElement() {
					return this._pane
				}
				get backdropElement() {
					return this._backdropElement
				}
				get hostElement() {
					return this._host
				}
				attach(N) {
					!this._host.parentElement && this._previousHostParent && this._previousHostParent.appendChild(this._host);
					const V = this._portalOutlet.attach(N);
					return this._positionStrategy && this._positionStrategy.attach(this), this._updateStackingOrder(), this._updateElementSize(), this._updateElementDirection(), this._scrollStrategy && this._scrollStrategy.enable(), this._ngZone.onStable.pipe((0, ne.q)(1)).subscribe(() => {
						this.hasAttached() && this.updatePosition()
					}), this._togglePointerEvents(!0), this._config.hasBackdrop && this._attachBackdrop(), this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !0), this._attachments.next(), this._keyboardDispatcher.add(this), this._config.disposeOnNavigation && (this._locationChanges = this._location.subscribe(() => this.dispose())), this._outsideClickDispatcher.add(this), "function" == typeof V?.onDestroy && V.onDestroy(() => {
						this.hasAttached() && this._ngZone.runOutsideAngular(() => Promise.resolve().then(() => this.detach()))
					}), V
				}
				detach() {
					if (!this.hasAttached()) return;
					this.detachBackdrop(), this._togglePointerEvents(!1), this._positionStrategy && this._positionStrategy.detach && this._positionStrategy.detach(), this._scrollStrategy && this._scrollStrategy.disable();
					const N = this._portalOutlet.detach();
					return this._detachments.next(), this._keyboardDispatcher.remove(this), this._detachContentWhenStable(), this._locationChanges.unsubscribe(), this._outsideClickDispatcher.remove(this), N
				}
				dispose() {
					const N = this.hasAttached();
					this._positionStrategy && this._positionStrategy.dispose(), this._disposeScrollStrategy(), this._disposeBackdrop(this._backdropElement), this._locationChanges.unsubscribe(), this._keyboardDispatcher.remove(this), this._portalOutlet.dispose(), this._attachments.complete(), this._backdropClick.complete(), this._keydownEvents.complete(), this._outsidePointerEvents.complete(), this._outsideClickDispatcher.remove(this), this._host?.remove(), this._previousHostParent = this._pane = this._host = null, N && this._detachments.next(), this._detachments.complete()
				}
				hasAttached() {
					return this._portalOutlet.hasAttached()
				}
				backdropClick() {
					return this._backdropClick
				}
				attachments() {
					return this._attachments
				}
				detachments() {
					return this._detachments
				}
				keydownEvents() {
					return this._keydownEvents
				}
				outsidePointerEvents() {
					return this._outsidePointerEvents
				}
				getConfig() {
					return this._config
				}
				updatePosition() {
					this._positionStrategy && this._positionStrategy.apply()
				}
				updatePositionStrategy(N) {
					N !== this._positionStrategy && (this._positionStrategy && this._positionStrategy.dispose(), this._positionStrategy = N, this.hasAttached() && (N.attach(this), this.updatePosition()))
				}
				updateSize(N) {
					this._config = {
						...this._config,
						...N
					}, this._updateElementSize()
				}
				setDirection(N) {
					this._config = {
						...this._config,
						direction: N
					}, this._updateElementDirection()
				}
				addPanelClass(N) {
					this._pane && this._toggleClasses(this._pane, N, !0)
				}
				removePanelClass(N) {
					this._pane && this._toggleClasses(this._pane, N, !1)
				}
				getDirection() {
					const N = this._config.direction;
					return N ? "string" == typeof N ? N : N.value : "ltr"
				}
				updateScrollStrategy(N) {
					N !== this._scrollStrategy && (this._disposeScrollStrategy(), this._scrollStrategy = N, this.hasAttached() && (N.attach(this), N.enable()))
				}
				_updateElementDirection() {
					this._host.setAttribute("dir", this.getDirection())
				}
				_updateElementSize() {
					if (!this._pane) return;
					const N = this._pane.style;
					N.width = (0, h.HM)(this._config.width), N.height = (0, h.HM)(this._config.height), N.minWidth = (0, h.HM)(this._config.minWidth), N.minHeight = (0, h.HM)(this._config.minHeight), N.maxWidth = (0, h.HM)(this._config.maxWidth), N.maxHeight = (0, h.HM)(this._config.maxHeight)
				}
				_togglePointerEvents(N) {
					this._pane.style.pointerEvents = N ? "" : "none"
				}
				_attachBackdrop() {
					const N = "cdk-overlay-backdrop-showing";
					this._backdropElement = this._document.createElement("div"), this._backdropElement.classList.add("cdk-overlay-backdrop"), this._animationsDisabled && this._backdropElement.classList.add("cdk-overlay-backdrop-noop-animation"), this._config.backdropClass && this._toggleClasses(this._backdropElement, this._config.backdropClass, !0), this._host.parentElement.insertBefore(this._backdropElement, this._host), this._backdropElement.addEventListener("click", this._backdropClickHandler), !this._animationsDisabled && typeof requestAnimationFrame < "u" ? this._ngZone.runOutsideAngular(() => {
						requestAnimationFrame(() => {
							this._backdropElement && this._backdropElement.classList.add(N)
						})
					}) : this._backdropElement.classList.add(N)
				}
				_updateStackingOrder() {
					this._host.nextSibling && this._host.parentNode.appendChild(this._host)
				}
				detachBackdrop() {
					const N = this._backdropElement;
					if (N) {
						if (this._animationsDisabled) return void this._disposeBackdrop(N);
						N.classList.remove("cdk-overlay-backdrop-showing"), this._ngZone.runOutsideAngular(() => {
							N.addEventListener("transitionend", this._backdropTransitionendHandler)
						}), N.style.pointerEvents = "none", this._backdropTimeout = this._ngZone.runOutsideAngular(() => setTimeout(() => {
							this._disposeBackdrop(N)
						}, 500))
					}
				}
				_toggleClasses(N, V, H) {
					const pe = (0, h.Eq)(V || []).filter(He => !!He);
					pe.length && (H ? N.classList.add(...pe) : N.classList.remove(...pe))
				}
				_detachContentWhenStable() {
					this._ngZone.runOutsideAngular(() => {
						const N = this._ngZone.onStable.pipe((0, ae.R)((0, xe.T)(this._attachments, this._detachments))).subscribe(() => {
							(!this._pane || !this._host || 0 === this._pane.children.length) && (this._pane && this._config.panelClass && this._toggleClasses(this._pane, this._config.panelClass, !1), this._host && this._host.parentElement && (this._previousHostParent = this._host.parentElement, this._host.remove()), N.unsubscribe())
						})
					})
				}
				_disposeScrollStrategy() {
					const N = this._scrollStrategy;
					N && (N.disable(), N.detach && N.detach())
				}
				_disposeBackdrop(N) {
					N && (N.removeEventListener("click", this._backdropClickHandler), N.removeEventListener("transitionend", this._backdropTransitionendHandler), N.remove(), this._backdropElement === N && (this._backdropElement = null)), this._backdropTimeout && (clearTimeout(this._backdropTimeout), this._backdropTimeout = void 0)
				}
			}
			const Ee = "cdk-overlay-connected-position-bounding-box",
				we = /([A-Za-z%]+)$/;
			class ve {
				get positions() {
					return this._preferredPositions
				}
				constructor(N, V, H, pe, He) {
					this._viewportRuler = V, this._document = H, this._platform = pe, this._overlayContainer = He, this._lastBoundingBoxSize = {
						width: 0,
						height: 0
					}, this._isPushed = !1, this._canPush = !0, this._growAfterOpen = !1, this._hasFlexibleDimensions = !0, this._positionLocked = !1, this._viewportMargin = 0, this._scrollables = [], this._preferredPositions = [], this._positionChanges = new de.x, this._resizeSubscription = ye.w0.EMPTY, this._offsetX = 0, this._offsetY = 0, this._appliedPanelClasses = [], this.positionChanges = this._positionChanges, this.setOrigin(N)
				}
				attach(N) {
					this._validatePositions(), N.hostElement.classList.add(Ee), this._overlayRef = N, this._boundingBox = N.hostElement, this._pane = N.overlayElement, this._isDisposed = !1, this._isInitialRender = !0, this._lastPosition = null, this._resizeSubscription.unsubscribe(), this._resizeSubscription = this._viewportRuler.change().subscribe(() => {
						this._isInitialRender = !0, this.apply()
					})
				}
				apply() {
					if (this._isDisposed || !this._platform.isBrowser) return;
					if (!this._isInitialRender && this._positionLocked && this._lastPosition) return void this.reapplyLastPosition();
					this._clearPanelClasses(), this._resetOverlayElementStyles(), this._resetBoundingBoxStyles(), this._viewportRect = this._getNarrowedViewportRect(), this._originRect = this._getOriginRect(), this._overlayRect = this._pane.getBoundingClientRect(), this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
					const N = this._originRect,
						V = this._overlayRect,
						H = this._viewportRect,
						pe = this._containerRect,
						He = [];
					let Ue;
					for (let Xe of this._preferredPositions) {
						let Pt = this._getOriginPoint(N, pe, Xe),
							ht = this._getOverlayPoint(Pt, V, Xe),
							bt = this._getOverlayFit(ht, V, H, Xe);
						if (bt.isCompletelyWithinViewport) return this._isPushed = !1, void this._applyPosition(Xe, Pt);
						this._canFitWithFlexibleDimensions(bt, ht, H) ? He.push({
							position: Xe,
							origin: Pt,
							overlayRect: V,
							boundingBoxRect: this._calculateBoundingBoxRect(Pt, Xe)
						}) : (!Ue || Ue.overlayFit.visibleArea < bt.visibleArea) && (Ue = {
							overlayFit: bt,
							overlayPoint: ht,
							originPoint: Pt,
							position: Xe,
							overlayRect: V
						})
					}
					if (He.length) {
						let Xe = null,
							Pt = -1;
						for (const ht of He) {
							const bt = ht.boundingBoxRect.width * ht.boundingBoxRect.height * (ht.position.weight || 1);
							bt > Pt && (Pt = bt, Xe = ht)
						}
						return this._isPushed = !1, void this._applyPosition(Xe.position, Xe.origin)
					}
					if (this._canPush) return this._isPushed = !0, void this._applyPosition(Ue.position, Ue.originPoint);
					this._applyPosition(Ue.position, Ue.originPoint)
				}
				detach() {
					this._clearPanelClasses(), this._lastPosition = null, this._previousPushAmount = null, this._resizeSubscription.unsubscribe()
				}
				dispose() {
					this._isDisposed || (this._boundingBox && Te(this._boundingBox.style, {
						top: "",
						left: "",
						right: "",
						bottom: "",
						height: "",
						width: "",
						alignItems: "",
						justifyContent: ""
					}), this._pane && this._resetOverlayElementStyles(), this._overlayRef && this._overlayRef.hostElement.classList.remove(Ee), this.detach(), this._positionChanges.complete(), this._overlayRef = this._boundingBox = null, this._isDisposed = !0)
				}
				reapplyLastPosition() {
					if (this._isDisposed || !this._platform.isBrowser) return;
					const N = this._lastPosition;
					if (N) {
						this._originRect = this._getOriginRect(), this._overlayRect = this._pane.getBoundingClientRect(), this._viewportRect = this._getNarrowedViewportRect(), this._containerRect = this._overlayContainer.getContainerElement().getBoundingClientRect();
						const V = this._getOriginPoint(this._originRect, this._containerRect, N);
						this._applyPosition(N, V)
					} else this.apply()
				}
				withScrollableContainers(N) {
					return this._scrollables = N, this
				}
				withPositions(N) {
					return this._preferredPositions = N, -1 === N.indexOf(this._lastPosition) && (this._lastPosition = null), this._validatePositions(), this
				}
				withViewportMargin(N) {
					return this._viewportMargin = N, this
				}
				withFlexibleDimensions(N = !0) {
					return this._hasFlexibleDimensions = N, this
				}
				withGrowAfterOpen(N = !0) {
					return this._growAfterOpen = N, this
				}
				withPush(N = !0) {
					return this._canPush = N, this
				}
				withLockedPosition(N = !0) {
					return this._positionLocked = N, this
				}
				setOrigin(N) {
					return this._origin = N, this
				}
				withDefaultOffsetX(N) {
					return this._offsetX = N, this
				}
				withDefaultOffsetY(N) {
					return this._offsetY = N, this
				}
				withTransformOriginOn(N) {
					return this._transformOriginSelector = N, this
				}
				_getOriginPoint(N, V, H) {
					let pe, He;
					if ("center" == H.originX) pe = N.left + N.width / 2;
					else {
						const Ue = this._isRtl() ? N.right : N.left,
							Xe = this._isRtl() ? N.left : N.right;
						pe = "start" == H.originX ? Ue : Xe
					}
					return V.left < 0 && (pe -= V.left), He = "center" == H.originY ? N.top + N.height / 2 : "top" == H.originY ? N.top : N.bottom, V.top < 0 && (He -= V.top), {
						x: pe,
						y: He
					}
				}
				_getOverlayPoint(N, V, H) {
					let pe, He;
					return pe = "center" == H.overlayX ? -V.width / 2 : "start" === H.overlayX ? this._isRtl() ? -V.width : 0 : this._isRtl() ? 0 : -V.width, He = "center" == H.overlayY ? -V.height / 2 : "top" == H.overlayY ? 0 : -V.height, {
						x: N.x + pe,
						y: N.y + He
					}
				}
				_getOverlayFit(N, V, H, pe) {
					const He = Ce(V);
					let {
						x: Ue,
						y: Xe
					} = N, Pt = this._getOffset(pe, "x"), ht = this._getOffset(pe, "y");
					Pt && (Ue += Pt), ht && (Xe += ht);
					let Mt = 0 - Xe,
						Et = Xe + He.height - H.height,
						ln = this._subtractOverflows(He.width, 0 - Ue, Ue + He.width - H.width),
						nn = this._subtractOverflows(He.height, Mt, Et),
						fn = ln * nn;
					return {
						visibleArea: fn,
						isCompletelyWithinViewport: He.width * He.height === fn,
						fitsInViewportVertically: nn === He.height,
						fitsInViewportHorizontally: ln == He.width
					}
				}
				_canFitWithFlexibleDimensions(N, V, H) {
					if (this._hasFlexibleDimensions) {
						const pe = H.bottom - V.y,
							He = H.right - V.x,
							Ue = me(this._overlayRef.getConfig().minHeight),
							Xe = me(this._overlayRef.getConfig().minWidth);
						return (N.fitsInViewportVertically || null != Ue && Ue <= pe) && (N.fitsInViewportHorizontally || null != Xe && Xe <= He)
					}
					return !1
				}
				_pushOverlayOnScreen(N, V, H) {
					if (this._previousPushAmount && this._positionLocked) return {
						x: N.x + this._previousPushAmount.x,
						y: N.y + this._previousPushAmount.y
					};
					const pe = Ce(V),
						He = this._viewportRect,
						Ue = Math.max(N.x + pe.width - He.width, 0),
						Xe = Math.max(N.y + pe.height - He.height, 0),
						Pt = Math.max(He.top - H.top - N.y, 0),
						ht = Math.max(He.left - H.left - N.x, 0);
					let bt = 0,
						yt = 0;
					return bt = pe.width <= He.width ? ht || -Ue : N.x < this._viewportMargin ? He.left - H.left - N.x : 0, yt = pe.height <= He.height ? Pt || -Xe : N.y < this._viewportMargin ? He.top - H.top - N.y : 0, this._previousPushAmount = {
						x: bt,
						y: yt
					}, {
						x: N.x + bt,
						y: N.y + yt
					}
				}
				_applyPosition(N, V) {
					if (this._setTransformOrigin(N), this._setOverlayElementStyles(V, N), this._setBoundingBoxStyles(V, N), N.panelClass && this._addPanelClasses(N.panelClass), this._lastPosition = N, this._positionChanges.observers.length) {
						const H = this._getScrollVisibility(),
							pe = new rt(N, H);
						this._positionChanges.next(pe)
					}
					this._isInitialRender = !1
				}
				_setTransformOrigin(N) {
					if (!this._transformOriginSelector) return;
					const V = this._boundingBox.querySelectorAll(this._transformOriginSelector);
					let H, pe = N.overlayY;
					H = "center" === N.overlayX ? "center" : this._isRtl() ? "start" === N.overlayX ? "right" : "left" : "start" === N.overlayX ? "left" : "right";
					for (let He = 0; He < V.length; He++) V[He].style.transformOrigin = `${H} ${pe}`
				}
				_calculateBoundingBoxRect(N, V) {
					const H = this._viewportRect,
						pe = this._isRtl();
					let He, Ue, Xe, bt, yt, Mt;
					if ("top" === V.overlayY) Ue = N.y, He = H.height - Ue + this._viewportMargin;
					else if ("bottom" === V.overlayY) Xe = H.height - N.y + 2 * this._viewportMargin, He = H.height - Xe + this._viewportMargin;
					else {
						const Et = Math.min(H.bottom - N.y + H.top, N.y),
							ln = this._lastBoundingBoxSize.height;
						He = 2 * Et, Ue = N.y - Et, He > ln && !this._isInitialRender && !this._growAfterOpen && (Ue = N.y - ln / 2)
					}
					if ("end" === V.overlayX && !pe || "start" === V.overlayX && pe) Mt = H.width - N.x + this._viewportMargin, bt = N.x - this._viewportMargin;
					else if ("start" === V.overlayX && !pe || "end" === V.overlayX && pe) yt = N.x, bt = H.right - N.x;
					else {
						const Et = Math.min(H.right - N.x + H.left, N.x),
							ln = this._lastBoundingBoxSize.width;
						bt = 2 * Et, yt = N.x - Et, bt > ln && !this._isInitialRender && !this._growAfterOpen && (yt = N.x - ln / 2)
					}
					return {
						top: Ue,
						left: yt,
						bottom: Xe,
						right: Mt,
						width: bt,
						height: He
					}
				}
				_setBoundingBoxStyles(N, V) {
					const H = this._calculateBoundingBoxRect(N, V);
					!this._isInitialRender && !this._growAfterOpen && (H.height = Math.min(H.height, this._lastBoundingBoxSize.height), H.width = Math.min(H.width, this._lastBoundingBoxSize.width));
					const pe = {};
					if (this._hasExactPosition()) pe.top = pe.left = "0", pe.bottom = pe.right = pe.maxHeight = pe.maxWidth = "", pe.width = pe.height = "100%";
					else {
						const He = this._overlayRef.getConfig().maxHeight,
							Ue = this._overlayRef.getConfig().maxWidth;
						pe.height = (0, h.HM)(H.height), pe.top = (0, h.HM)(H.top), pe.bottom = (0, h.HM)(H.bottom), pe.width = (0, h.HM)(H.width), pe.left = (0, h.HM)(H.left), pe.right = (0, h.HM)(H.right), pe.alignItems = "center" === V.overlayX ? "center" : "end" === V.overlayX ? "flex-end" : "flex-start", pe.justifyContent = "center" === V.overlayY ? "center" : "bottom" === V.overlayY ? "flex-end" : "flex-start", He && (pe.maxHeight = (0, h.HM)(He)), Ue && (pe.maxWidth = (0, h.HM)(Ue))
					}
					this._lastBoundingBoxSize = H, Te(this._boundingBox.style, pe)
				}
				_resetBoundingBoxStyles() {
					Te(this._boundingBox.style, {
						top: "0",
						left: "0",
						right: "0",
						bottom: "0",
						height: "",
						width: "",
						alignItems: "",
						justifyContent: ""
					})
				}
				_resetOverlayElementStyles() {
					Te(this._pane.style, {
						top: "",
						left: "",
						bottom: "",
						right: "",
						position: "",
						transform: ""
					})
				}
				_setOverlayElementStyles(N, V) {
					const H = {},
						pe = this._hasExactPosition(),
						He = this._hasFlexibleDimensions,
						Ue = this._overlayRef.getConfig();
					if (pe) {
						const bt = this._viewportRuler.getViewportScrollPosition();
						Te(H, this._getExactOverlayY(V, N, bt)), Te(H, this._getExactOverlayX(V, N, bt))
					} else H.position = "static";
					let Xe = "",
						Pt = this._getOffset(V, "x"),
						ht = this._getOffset(V, "y");
					Pt && (Xe += `translateX(${Pt}px) `), ht && (Xe += `translateY(${ht}px)`), H.transform = Xe.trim(), Ue.maxHeight && (pe ? H.maxHeight = (0, h.HM)(Ue.maxHeight) : He && (H.maxHeight = "")), Ue.maxWidth && (pe ? H.maxWidth = (0, h.HM)(Ue.maxWidth) : He && (H.maxWidth = "")), Te(this._pane.style, H)
				}
				_getExactOverlayY(N, V, H) {
					let pe = {
							top: "",
							bottom: ""
						},
						He = this._getOverlayPoint(V, this._overlayRect, N);
					return this._isPushed && (He = this._pushOverlayOnScreen(He, this._overlayRect, H)), "bottom" === N.overlayY ? pe.bottom = this._document.documentElement.clientHeight - (He.y + this._overlayRect.height) + "px" : pe.top = (0, h.HM)(He.y), pe
				}
				_getExactOverlayX(N, V, H) {
					let Ue, pe = {
							left: "",
							right: ""
						},
						He = this._getOverlayPoint(V, this._overlayRect, N);
					return this._isPushed && (He = this._pushOverlayOnScreen(He, this._overlayRect, H)), Ue = this._isRtl() ? "end" === N.overlayX ? "left" : "right" : "end" === N.overlayX ? "right" : "left", "right" === Ue ? pe.right = this._document.documentElement.clientWidth - (He.x + this._overlayRect.width) + "px" : pe.left = (0, h.HM)(He.x), pe
				}
				_getScrollVisibility() {
					const N = this._getOriginRect(),
						V = this._pane.getBoundingClientRect(),
						H = this._scrollables.map(pe => pe.getElementRef().nativeElement.getBoundingClientRect());
					return {
						isOriginClipped: $(N, H),
						isOriginOutsideView: ce(N, H),
						isOverlayClipped: $(V, H),
						isOverlayOutsideView: ce(V, H)
					}
				}
				_subtractOverflows(N, ...V) {
					return V.reduce((H, pe) => H - Math.max(pe, 0), N)
				}
				_getNarrowedViewportRect() {
					const N = this._document.documentElement.clientWidth,
						V = this._document.documentElement.clientHeight,
						H = this._viewportRuler.getViewportScrollPosition();
					return {
						top: H.top + this._viewportMargin,
						left: H.left + this._viewportMargin,
						right: H.left + N - this._viewportMargin,
						bottom: H.top + V - this._viewportMargin,
						width: N - 2 * this._viewportMargin,
						height: V - 2 * this._viewportMargin
					}
				}
				_isRtl() {
					return "rtl" === this._overlayRef.getDirection()
				}
				_hasExactPosition() {
					return !this._hasFlexibleDimensions || this._isPushed
				}
				_getOffset(N, V) {
					return "x" === V ? null == N.offsetX ? this._offsetX : N.offsetX : null == N.offsetY ? this._offsetY : N.offsetY
				}
				_validatePositions() {}
				_addPanelClasses(N) {
					this._pane && (0, h.Eq)(N).forEach(V => {
						"" !== V && -1 === this._appliedPanelClasses.indexOf(V) && (this._appliedPanelClasses.push(V), this._pane.classList.add(V))
					})
				}
				_clearPanelClasses() {
					this._pane && (this._appliedPanelClasses.forEach(N => {
						this._pane.classList.remove(N)
					}), this._appliedPanelClasses = [])
				}
				_getOriginRect() {
					const N = this._origin;
					if (N instanceof F.SBq) return N.nativeElement.getBoundingClientRect();
					if (N instanceof Element) return N.getBoundingClientRect();
					const V = N.width || 0,
						H = N.height || 0;
					return {
						top: N.y,
						bottom: N.y + H,
						left: N.x,
						right: N.x + V,
						height: H,
						width: V
					}
				}
			}

			function Te(Be, N) {
				for (let V in N) N.hasOwnProperty(V) && (Be[V] = N[V]);
				return Be
			}

			function me(Be) {
				if ("number" != typeof Be && null != Be) {
					const [N, V] = Be.split(we);
					return V && "px" !== V ? null : parseFloat(N)
				}
				return Be || null
			}

			function Ce(Be) {
				return {
					top: Math.floor(Be.top),
					right: Math.floor(Be.right),
					bottom: Math.floor(Be.bottom),
					left: Math.floor(Be.left),
					width: Math.floor(Be.width),
					height: Math.floor(Be.height)
				}
			}
			const z = "cdk-global-overlay-wrapper";
			class Se {
				constructor() {
					this._cssPosition = "static", this._topOffset = "", this._bottomOffset = "", this._alignItems = "", this._xPosition = "", this._xOffset = "", this._width = "", this._height = "", this._isDisposed = !1
				}
				attach(N) {
					const V = N.getConfig();
					this._overlayRef = N, this._width && !V.width && N.updateSize({
						width: this._width
					}), this._height && !V.height && N.updateSize({
						height: this._height
					}), N.hostElement.classList.add(z), this._isDisposed = !1
				}
				top(N = "") {
					return this._bottomOffset = "", this._topOffset = N, this._alignItems = "flex-start", this
				}
				left(N = "") {
					return this._xOffset = N, this._xPosition = "left", this
				}
				bottom(N = "") {
					return this._topOffset = "", this._bottomOffset = N, this._alignItems = "flex-end", this
				}
				right(N = "") {
					return this._xOffset = N, this._xPosition = "right", this
				}
				start(N = "") {
					return this._xOffset = N, this._xPosition = "start", this
				}
				end(N = "") {
					return this._xOffset = N, this._xPosition = "end", this
				}
				width(N = "") {
					return this._overlayRef ? this._overlayRef.updateSize({
						width: N
					}) : this._width = N, this
				}
				height(N = "") {
					return this._overlayRef ? this._overlayRef.updateSize({
						height: N
					}) : this._height = N, this
				}
				centerHorizontally(N = "") {
					return this.left(N), this._xPosition = "center", this
				}
				centerVertically(N = "") {
					return this.top(N), this._alignItems = "center", this
				}
				apply() {
					if (!this._overlayRef || !this._overlayRef.hasAttached()) return;
					const N = this._overlayRef.overlayElement.style,
						V = this._overlayRef.hostElement.style,
						H = this._overlayRef.getConfig(),
						{
							width: pe,
							height: He,
							maxWidth: Ue,
							maxHeight: Xe
						} = H,
						Pt = !("100%" !== pe && "100vw" !== pe || Ue && "100%" !== Ue && "100vw" !== Ue),
						ht = !("100%" !== He && "100vh" !== He || Xe && "100%" !== Xe && "100vh" !== Xe),
						bt = this._xPosition,
						yt = this._xOffset,
						Mt = "rtl" === this._overlayRef.getConfig().direction;
					let Et = "",
						ln = "",
						nn = "";
					Pt ? nn = "flex-start" : "center" === bt ? (nn = "center", Mt ? ln = yt : Et = yt) : Mt ? "left" === bt || "end" === bt ? (nn = "flex-end", Et = yt) : ("right" === bt || "start" === bt) && (nn = "flex-start", ln = yt) : "left" === bt || "start" === bt ? (nn = "flex-start", Et = yt) : ("right" === bt || "end" === bt) && (nn = "flex-end", ln = yt), N.position = this._cssPosition, N.marginLeft = Pt ? "0" : Et, N.marginTop = ht ? "0" : this._topOffset, N.marginBottom = this._bottomOffset, N.marginRight = Pt ? "0" : ln, V.justifyContent = nn, V.alignItems = ht ? "flex-start" : this._alignItems
				}
				dispose() {
					if (this._isDisposed || !this._overlayRef) return;
					const N = this._overlayRef.overlayElement.style,
						V = this._overlayRef.hostElement,
						H = V.style;
					V.classList.remove(z), H.justifyContent = H.alignItems = N.marginTop = N.marginBottom = N.marginLeft = N.marginRight = N.position = "", this._overlayRef = null, this._isDisposed = !0
				}
			}
			let Ze = (() => {
					class Be {
						constructor(V, H, pe, He) {
							this._viewportRuler = V, this._document = H, this._platform = pe, this._overlayContainer = He
						}
						global() {
							return new Se
						}
						flexibleConnectedTo(V) {
							return new ve(V, this._viewportRuler, this._document, this._platform, this._overlayContainer)
						}
						static #e = this.\u0275fac = function(H) {
							return new(H || Be)(F.LFG(l.rL), F.LFG(O.K0), F.LFG(B.t4), F.LFG(Qt))
						};
						static #t = this.\u0275prov = F.Yz7({
							token: Be,
							factory: Be.\u0275fac,
							providedIn: "root"
						})
					}
					return Be
				})(),
				nt = 0,
				mt = (() => {
					class Be {
						constructor(V, H, pe, He, Ue, Xe, Pt, ht, bt, yt, Mt, Et) {
							this.scrollStrategies = V, this._overlayContainer = H, this._componentFactoryResolver = pe, this._positionBuilder = He, this._keyboardDispatcher = Ue, this._injector = Xe, this._ngZone = Pt, this._document = ht, this._directionality = bt, this._location = yt, this._outsideClickDispatcher = Mt, this._animationsModuleType = Et
						}
						create(V) {
							const H = this._createHostElement(),
								pe = this._createPaneElement(H),
								He = this._createPortalOutlet(pe),
								Ue = new ue(V);
							return Ue.direction = Ue.direction || this._directionality.value, new Mn(He, H, pe, Ue, this._ngZone, this._keyboardDispatcher, this._document, this._location, this._outsideClickDispatcher, "NoopAnimations" === this._animationsModuleType)
						}
						position() {
							return this._positionBuilder
						}
						_createPaneElement(V) {
							const H = this._document.createElement("div");
							return H.id = "cdk-overlay-" + nt++, H.classList.add("cdk-overlay-pane"), V.appendChild(H), H
						}
						_createHostElement() {
							const V = this._document.createElement("div");
							return this._overlayContainer.getContainerElement().appendChild(V), V
						}
						_createPortalOutlet(V) {
							return this._appRef || (this._appRef = this._injector.get(F.z2F)), new Q.u0(V, this._componentFactoryResolver, this._appRef, this._injector, this._document)
						}
						static #e = this.\u0275fac = function(H) {
							return new(H || Be)(F.LFG(he), F.LFG(Qt), F.LFG(F._Vd), F.LFG(Ze), F.LFG(wn), F.LFG(F.zs3), F.LFG(F.R0b), F.LFG(O.K0), F.LFG(te.Is), F.LFG(O.Ye), F.LFG(Un), F.LFG(F.QbO, 8))
						};
						static #t = this.\u0275prov = F.Yz7({
							token: Be,
							factory: Be.\u0275fac,
							providedIn: "root"
						})
					}
					return Be
				})();
			const _t = [{
					originX: "start",
					originY: "bottom",
					overlayX: "start",
					overlayY: "top"
				}, {
					originX: "start",
					originY: "top",
					overlayX: "start",
					overlayY: "bottom"
				}, {
					originX: "end",
					originY: "top",
					overlayX: "end",
					overlayY: "bottom"
				}, {
					originX: "end",
					originY: "bottom",
					overlayX: "end",
					overlayY: "top"
				}],
				gt = new F.OlP("cdk-connected-overlay-scroll-strategy");
			let Dt = (() => {
					class Be {
						constructor(V) {
							this.elementRef = V
						}
						static #e = this.\u0275fac = function(H) {
							return new(H || Be)(F.Y36(F.SBq))
						};
						static #t = this.\u0275dir = F.lG2({
							type: Be,
							selectors: [
								["", "cdk-overlay-origin", ""],
								["", "overlay-origin", ""],
								["", "cdkOverlayOrigin", ""]
							],
							exportAs: ["cdkOverlayOrigin"],
							standalone: !0
						})
					}
					return Be
				})(),
				an = (() => {
					class Be {
						get offsetX() {
							return this._offsetX
						}
						set offsetX(V) {
							this._offsetX = V, this._position && this._updatePositionStrategy(this._position)
						}
						get offsetY() {
							return this._offsetY
						}
						set offsetY(V) {
							this._offsetY = V, this._position && this._updatePositionStrategy(this._position)
						}
						get hasBackdrop() {
							return this._hasBackdrop
						}
						set hasBackdrop(V) {
							this._hasBackdrop = (0, h.Ig)(V)
						}
						get lockPosition() {
							return this._lockPosition
						}
						set lockPosition(V) {
							this._lockPosition = (0, h.Ig)(V)
						}
						get flexibleDimensions() {
							return this._flexibleDimensions
						}
						set flexibleDimensions(V) {
							this._flexibleDimensions = (0, h.Ig)(V)
						}
						get growAfterOpen() {
							return this._growAfterOpen
						}
						set growAfterOpen(V) {
							this._growAfterOpen = (0, h.Ig)(V)
						}
						get push() {
							return this._push
						}
						set push(V) {
							this._push = (0, h.Ig)(V)
						}
						constructor(V, H, pe, He, Ue) {
							this._overlay = V, this._dir = Ue, this._hasBackdrop = !1, this._lockPosition = !1, this._growAfterOpen = !1, this._flexibleDimensions = !1, this._push = !1, this._backdropSubscription = ye.w0.EMPTY, this._attachSubscription = ye.w0.EMPTY, this._detachSubscription = ye.w0.EMPTY, this._positionSubscription = ye.w0.EMPTY, this.viewportMargin = 0, this.open = !1, this.disableClose = !1, this.backdropClick = new F.vpe, this.positionChange = new F.vpe, this.attach = new F.vpe, this.detach = new F.vpe, this.overlayKeydown = new F.vpe, this.overlayOutsideClick = new F.vpe, this._templatePortal = new Q.UE(H, pe), this._scrollStrategyFactory = He, this.scrollStrategy = this._scrollStrategyFactory()
						}
						get overlayRef() {
							return this._overlayRef
						}
						get dir() {
							return this._dir ? this._dir.value : "ltr"
						}
						ngOnDestroy() {
							this._attachSubscription.unsubscribe(), this._detachSubscription.unsubscribe(), this._backdropSubscription.unsubscribe(), this._positionSubscription.unsubscribe(), this._overlayRef && this._overlayRef.dispose()
						}
						ngOnChanges(V) {
							this._position && (this._updatePositionStrategy(this._position), this._overlayRef.updateSize({
								width: this.width,
								minWidth: this.minWidth,
								height: this.height,
								minHeight: this.minHeight
							}), V.origin && this.open && this._position.apply()), V.open && (this.open ? this._attachOverlay() : this._detachOverlay())
						}
						_createOverlay() {
							(!this.positions || !this.positions.length) && (this.positions = _t);
							const V = this._overlayRef = this._overlay.create(this._buildConfig());
							this._attachSubscription = V.attachments().subscribe(() => this.attach.emit()), this._detachSubscription = V.detachments().subscribe(() => this.detach.emit()), V.keydownEvents().subscribe(H => {
								this.overlayKeydown.next(H), H.keyCode === Ne.hY && !this.disableClose && !(0, Ne.Vb)(H) && (H.preventDefault(), this._detachOverlay())
							}), this._overlayRef.outsidePointerEvents().subscribe(H => {
								this.overlayOutsideClick.next(H)
							})
						}
						_buildConfig() {
							const V = this._position = this.positionStrategy || this._createPositionStrategy(),
								H = new ue({
									direction: this._dir,
									positionStrategy: V,
									scrollStrategy: this.scrollStrategy,
									hasBackdrop: this.hasBackdrop
								});
							return (this.width || 0 === this.width) && (H.width = this.width), (this.height || 0 === this.height) && (H.height = this.height), (this.minWidth || 0 === this.minWidth) && (H.minWidth = this.minWidth), (this.minHeight || 0 === this.minHeight) && (H.minHeight = this.minHeight), this.backdropClass && (H.backdropClass = this.backdropClass), this.panelClass && (H.panelClass = this.panelClass), H
						}
						_updatePositionStrategy(V) {
							const H = this.positions.map(pe => ({
								originX: pe.originX,
								originY: pe.originY,
								overlayX: pe.overlayX,
								overlayY: pe.overlayY,
								offsetX: pe.offsetX || this.offsetX,
								offsetY: pe.offsetY || this.offsetY,
								panelClass: pe.panelClass || void 0
							}));
							return V.setOrigin(this._getFlexibleConnectedPositionStrategyOrigin()).withPositions(H).withFlexibleDimensions(this.flexibleDimensions).withPush(this.push).withGrowAfterOpen(this.growAfterOpen).withViewportMargin(this.viewportMargin).withLockedPosition(this.lockPosition).withTransformOriginOn(this.transformOriginSelector)
						}
						_createPositionStrategy() {
							const V = this._overlay.position().flexibleConnectedTo(this._getFlexibleConnectedPositionStrategyOrigin());
							return this._updatePositionStrategy(V), V
						}
						_getFlexibleConnectedPositionStrategyOrigin() {
							return this.origin instanceof Dt ? this.origin.elementRef : this.origin
						}
						_attachOverlay() {
							this._overlayRef ? this._overlayRef.getConfig().hasBackdrop = this.hasBackdrop : this._createOverlay(), this._overlayRef.hasAttached() || this._overlayRef.attach(this._templatePortal), this.hasBackdrop ? this._backdropSubscription = this._overlayRef.backdropClick().subscribe(V => {
								this.backdropClick.emit(V)
							}) : this._backdropSubscription.unsubscribe(), this._positionSubscription.unsubscribe(), this.positionChange.observers.length > 0 && (this._positionSubscription = this._position.positionChanges.pipe((0, ie.o)(() => this.positionChange.observers.length > 0)).subscribe(V => {
								this.positionChange.emit(V), 0 === this.positionChange.observers.length && this._positionSubscription.unsubscribe()
							}))
						}
						_detachOverlay() {
							this._overlayRef && this._overlayRef.detach(), this._backdropSubscription.unsubscribe(), this._positionSubscription.unsubscribe()
						}
						static #e = this.\u0275fac = function(H) {
							return new(H || Be)(F.Y36(mt), F.Y36(F.Rgc), F.Y36(F.s_b), F.Y36(gt), F.Y36(te.Is, 8))
						};
						static #t = this.\u0275dir = F.lG2({
							type: Be,
							selectors: [
								["", "cdk-connected-overlay", ""],
								["", "connected-overlay", ""],
								["", "cdkConnectedOverlay", ""]
							],
							inputs: {
								origin: ["cdkConnectedOverlayOrigin", "origin"],
								positions: ["cdkConnectedOverlayPositions", "positions"],
								positionStrategy: ["cdkConnectedOverlayPositionStrategy", "positionStrategy"],
								offsetX: ["cdkConnectedOverlayOffsetX", "offsetX"],
								offsetY: ["cdkConnectedOverlayOffsetY", "offsetY"],
								width: ["cdkConnectedOverlayWidth", "width"],
								height: ["cdkConnectedOverlayHeight", "height"],
								minWidth: ["cdkConnectedOverlayMinWidth", "minWidth"],
								minHeight: ["cdkConnectedOverlayMinHeight", "minHeight"],
								backdropClass: ["cdkConnectedOverlayBackdropClass", "backdropClass"],
								panelClass: ["cdkConnectedOverlayPanelClass", "panelClass"],
								viewportMargin: ["cdkConnectedOverlayViewportMargin", "viewportMargin"],
								scrollStrategy: ["cdkConnectedOverlayScrollStrategy", "scrollStrategy"],
								open: ["cdkConnectedOverlayOpen", "open"],
								disableClose: ["cdkConnectedOverlayDisableClose", "disableClose"],
								transformOriginSelector: ["cdkConnectedOverlayTransformOriginOn", "transformOriginSelector"],
								hasBackdrop: ["cdkConnectedOverlayHasBackdrop", "hasBackdrop"],
								lockPosition: ["cdkConnectedOverlayLockPosition", "lockPosition"],
								flexibleDimensions: ["cdkConnectedOverlayFlexibleDimensions", "flexibleDimensions"],
								growAfterOpen: ["cdkConnectedOverlayGrowAfterOpen", "growAfterOpen"],
								push: ["cdkConnectedOverlayPush", "push"]
							},
							outputs: {
								backdropClick: "backdropClick",
								positionChange: "positionChange",
								attach: "attach",
								detach: "detach",
								overlayKeydown: "overlayKeydown",
								overlayOutsideClick: "overlayOutsideClick"
							},
							exportAs: ["cdkConnectedOverlay"],
							standalone: !0,
							features: [F.TTD]
						})
					}
					return Be
				})();
			const Nn = {
				provide: gt,
				deps: [mt],
				useFactory: function tn(Be) {
					return () => Be.scrollStrategies.reposition()
				}
			};
			let Vn = (() => {
					class Be {
						static #e = this.\u0275fac = function(H) {
							return new(H || Be)
						};
						static #t = this.\u0275mod = F.oAB({
							type: Be
						});
						static #n = this.\u0275inj = F.cJS({
							providers: [mt, Nn],
							imports: [te.vT, Q.eL, l.Cl, l.Cl]
						})
					}
					return Be
				})(),
				Zn = (() => {
					class Be extends Qt {
						constructor(V, H) {
							super(V, H)
						}
						ngOnDestroy() {
							super.ngOnDestroy(), this._fullScreenEventName && this._fullScreenListener && this._document.removeEventListener(this._fullScreenEventName, this._fullScreenListener)
						}
						_createContainer() {
							super._createContainer(), this._adjustParentForFullscreenChange(), this._addFullscreenChangeListener(() => this._adjustParentForFullscreenChange())
						}
						_adjustParentForFullscreenChange() {
							this._containerElement && (this.getFullscreenElement() || this._document.body).appendChild(this._containerElement)
						}
						_addFullscreenChangeListener(V) {
							const H = this._getEventName();
							H && (this._fullScreenListener && this._document.removeEventListener(H, this._fullScreenListener), this._document.addEventListener(H, V), this._fullScreenListener = V)
						}
						_getEventName() {
							if (!this._fullScreenEventName) {
								const V = this._document;
								V.fullscreenEnabled ? this._fullScreenEventName = "fullscreenchange" : V.webkitFullscreenEnabled ? this._fullScreenEventName = "webkitfullscreenchange" : V.mozFullScreenEnabled ? this._fullScreenEventName = "mozfullscreenchange" : V.msFullscreenEnabled && (this._fullScreenEventName = "MSFullscreenChange")
							}
							return this._fullScreenEventName
						}
						getFullscreenElement() {
							const V = this._document;
							return V.fullscreenElement || V.webkitFullscreenElement || V.mozFullScreenElement || V.msFullscreenElement || null
						}
						static #e = this.\u0275fac = function(H) {
							return new(H || Be)(F.LFG(O.K0), F.LFG(B.t4))
						};
						static #t = this.\u0275prov = F.Yz7({
							token: Be,
							factory: Be.\u0275fac,
							providedIn: "root"
						})
					}
					return Be
				})()
		},
		2831: (Ge, re, v) => {
			v.d(re, {
				Mq: () => xe,
				Oy: () => ce,
				i$: () => Q,
				kV: () => it,
				qK: () => ae,
				sA: () => qe,
				t4: () => h,
				ud: () => B
			});
			var l = v(5879),
				O = v(6814);
			let F;
			try {
				F = typeof Intl < "u" && Intl.v8BreakIterator
			} catch {
				F = !1
			}
			let K, h = (() => {
					class $ {
						constructor(he) {
							this._platformId = he, this.isBrowser = this._platformId ? (0, O.NF)(this._platformId) : "object" == typeof document && !!document, this.EDGE = this.isBrowser && /(edge)/i.test(navigator.userAgent), this.TRIDENT = this.isBrowser && /(msie|trident)/i.test(navigator.userAgent), this.BLINK = this.isBrowser && !(!window.chrome && !F) && typeof CSS < "u" && !this.EDGE && !this.TRIDENT, this.WEBKIT = this.isBrowser && /AppleWebKit/i.test(navigator.userAgent) && !this.BLINK && !this.EDGE && !this.TRIDENT, this.IOS = this.isBrowser && /iPad|iPhone|iPod/.test(navigator.userAgent) && !("MSStream" in window), this.FIREFOX = this.isBrowser && /(firefox|minefield)/i.test(navigator.userAgent), this.ANDROID = this.isBrowser && /android/i.test(navigator.userAgent) && !this.TRIDENT, this.SAFARI = this.isBrowser && /safari/i.test(navigator.userAgent) && this.WEBKIT
						}
						static #e = this.\u0275fac = function(ue) {
							return new(ue || $)(l.LFG(l.Lbi))
						};
						static #t = this.\u0275prov = l.Yz7({
							token: $,
							factory: $.\u0275fac,
							providedIn: "root"
						})
					}
					return $
				})(),
				B = (() => {
					class $ {
						static #e = this.\u0275fac = function(ue) {
							return new(ue || $)
						};
						static #t = this.\u0275mod = l.oAB({
							type: $
						});
						static #n = this.\u0275inj = l.cJS({})
					}
					return $
				})();
			const ne = ["color", "button", "checkbox", "date", "datetime-local", "email", "file", "hidden", "image", "month", "number", "password", "radio", "range", "reset", "search", "submit", "tel", "text", "time", "url", "week"];

			function ae() {
				if (K) return K;
				if ("object" != typeof document || !document) return K = new Set(ne), K;
				let $ = document.createElement("input");
				return K = new Set(ne.filter(Ie => ($.setAttribute("type", Ie), $.type === Ie))), K
			}
			let ie, ye, Ye;

			function Q($) {
				return function te() {
					if (null == ie && typeof window < "u") try {
						window.addEventListener("test", null, Object.defineProperty({}, "passive", {
							get: () => ie = !0
						}))
					} finally {
						ie = ie || !1
					}
					return ie
				}() ? $ : !!$.capture
			}

			function xe() {
				if (null == ye) {
					if ("object" != typeof document || !document || "function" != typeof Element || !Element) return ye = !1, ye;
					if ("scrollBehavior" in document.documentElement.style) ye = !0;
					else {
						const $ = Element.prototype.scrollTo;
						ye = !!$ && !/\{\s*\[native code\]\s*\}/.test($.toString())
					}
				}
				return ye
			}

			function it($) {
				if (function ge() {
						if (null == Ye) {
							const $ = typeof document < "u" ? document.head : null;
							Ye = !(!$ || !$.createShadowRoot && !$.attachShadow)
						}
						return Ye
					}()) {
					const Ie = $.getRootNode ? $.getRootNode() : null;
					if (typeof ShadowRoot < "u" && ShadowRoot && Ie instanceof ShadowRoot) return Ie
				}
				return null
			}

			function qe($) {
				return $.composedPath ? $.composedPath()[0] : $.target
			}

			function ce() {
				return typeof __karma__ < "u" && !!__karma__ || typeof jasmine < "u" && !!jasmine || typeof jest < "u" && !!jest || typeof Mocha < "u" && !!Mocha
			}
		},
		8484: (Ge, re, v) => {
			v.d(re, {
				C5: () => te,
				Pl: () => lt,
				UE: () => Q,
				eL: () => ce,
				en: () => ye,
				u0: () => Ne
			});
			var l = v(5879),
				O = v(6814);
			class ie {
				attach(he) {
					return this._attachedHost = he, he.attach(this)
				}
				detach() {
					let he = this._attachedHost;
					null != he && (this._attachedHost = null, he.detach())
				}
				get isAttached() {
					return null != this._attachedHost
				}
				setAttachedHost(he) {
					this._attachedHost = he
				}
			}
			class te extends ie {
				constructor(he, ue, Ae, We, rt) {
					super(), this.component = he, this.viewContainerRef = ue, this.injector = Ae, this.componentFactoryResolver = We, this.projectableNodes = rt
				}
			}
			class Q extends ie {
				constructor(he, ue, Ae, We) {
					super(), this.templateRef = he, this.viewContainerRef = ue, this.context = Ae, this.injector = We
				}
				get origin() {
					return this.templateRef.elementRef
				}
				attach(he, ue = this.context) {
					return this.context = ue, super.attach(he)
				}
				detach() {
					return this.context = void 0, super.detach()
				}
			}
			class de extends ie {
				constructor(he) {
					super(), this.element = he instanceof l.SBq ? he.nativeElement : he
				}
			}
			class ye {
				constructor() {
					this._isDisposed = !1, this.attachDomPortal = null
				}
				hasAttached() {
					return !!this._attachedPortal
				}
				attach(he) {
					return he instanceof te ? (this._attachedPortal = he, this.attachComponentPortal(he)) : he instanceof Q ? (this._attachedPortal = he, this.attachTemplatePortal(he)) : this.attachDomPortal && he instanceof de ? (this._attachedPortal = he, this.attachDomPortal(he)) : void 0
				}
				detach() {
					this._attachedPortal && (this._attachedPortal.setAttachedHost(null), this._attachedPortal = null), this._invokeDisposeFn()
				}
				dispose() {
					this.hasAttached() && this.detach(), this._invokeDisposeFn(), this._isDisposed = !0
				}
				setDisposeFn(he) {
					this._disposeFn = he
				}
				_invokeDisposeFn() {
					this._disposeFn && (this._disposeFn(), this._disposeFn = null)
				}
			}
			class Ne extends ye {
				constructor(he, ue, Ae, We, rt) {
					super(), this.outletElement = he, this._componentFactoryResolver = ue, this._appRef = Ae, this._defaultInjector = We, this.attachDomPortal = Ot => {
						const wt = Ot.element,
							Yt = this._document.createComment("dom-portal");
						wt.parentNode.insertBefore(Yt, wt), this.outletElement.appendChild(wt), this._attachedPortal = Ot, super.setDisposeFn(() => {
							Yt.parentNode && Yt.parentNode.replaceChild(wt, Yt)
						})
					}, this._document = rt
				}
				attachComponentPortal(he) {
					const Ae = (he.componentFactoryResolver || this._componentFactoryResolver).resolveComponentFactory(he.component);
					let We;
					return he.viewContainerRef ? (We = he.viewContainerRef.createComponent(Ae, he.viewContainerRef.length, he.injector || he.viewContainerRef.injector, he.projectableNodes || void 0), this.setDisposeFn(() => We.destroy())) : (We = Ae.create(he.injector || this._defaultInjector || l.zs3.NULL), this._appRef.attachView(We.hostView), this.setDisposeFn(() => {
						this._appRef.viewCount > 0 && this._appRef.detachView(We.hostView), We.destroy()
					})), this.outletElement.appendChild(this._getComponentRootNode(We)), this._attachedPortal = he, We
				}
				attachTemplatePortal(he) {
					let ue = he.viewContainerRef,
						Ae = ue.createEmbeddedView(he.templateRef, he.context, {
							injector: he.injector
						});
					return Ae.rootNodes.forEach(We => this.outletElement.appendChild(We)), Ae.detectChanges(), this.setDisposeFn(() => {
						let We = ue.indexOf(Ae); - 1 !== We && ue.remove(We)
					}), this._attachedPortal = he, Ae
				}
				dispose() {
					super.dispose(), this.outletElement.remove()
				}
				_getComponentRootNode(he) {
					return he.hostView.rootNodes[0]
				}
			}
			let lt = (() => {
					class Ie extends ye {
						constructor(ue, Ae, We) {
							super(), this._componentFactoryResolver = ue, this._viewContainerRef = Ae, this._isInitialized = !1, this.attached = new l.vpe, this.attachDomPortal = rt => {
								const Ot = rt.element,
									wt = this._document.createComment("dom-portal");
								rt.setAttachedHost(this), Ot.parentNode.insertBefore(wt, Ot), this._getRootNode().appendChild(Ot), this._attachedPortal = rt, super.setDisposeFn(() => {
									wt.parentNode && wt.parentNode.replaceChild(Ot, wt)
								})
							}, this._document = We
						}
						get portal() {
							return this._attachedPortal
						}
						set portal(ue) {
							this.hasAttached() && !ue && !this._isInitialized || (this.hasAttached() && super.detach(), ue && super.attach(ue), this._attachedPortal = ue || null)
						}
						get attachedRef() {
							return this._attachedRef
						}
						ngOnInit() {
							this._isInitialized = !0
						}
						ngOnDestroy() {
							super.dispose(), this._attachedRef = this._attachedPortal = null
						}
						attachComponentPortal(ue) {
							ue.setAttachedHost(this);
							const Ae = null != ue.viewContainerRef ? ue.viewContainerRef : this._viewContainerRef,
								rt = (ue.componentFactoryResolver || this._componentFactoryResolver).resolveComponentFactory(ue.component),
								Ot = Ae.createComponent(rt, Ae.length, ue.injector || Ae.injector, ue.projectableNodes || void 0);
							return Ae !== this._viewContainerRef && this._getRootNode().appendChild(Ot.hostView.rootNodes[0]), super.setDisposeFn(() => Ot.destroy()), this._attachedPortal = ue, this._attachedRef = Ot, this.attached.emit(Ot), Ot
						}
						attachTemplatePortal(ue) {
							ue.setAttachedHost(this);
							const Ae = this._viewContainerRef.createEmbeddedView(ue.templateRef, ue.context, {
								injector: ue.injector
							});
							return super.setDisposeFn(() => this._viewContainerRef.clear()), this._attachedPortal = ue, this._attachedRef = Ae, this.attached.emit(Ae), Ae
						}
						_getRootNode() {
							const ue = this._viewContainerRef.element.nativeElement;
							return ue.nodeType === ue.ELEMENT_NODE ? ue : ue.parentNode
						}
						static #e = this.\u0275fac = function(Ae) {
							return new(Ae || Ie)(l.Y36(l._Vd), l.Y36(l.s_b), l.Y36(O.K0))
						};
						static #t = this.\u0275dir = l.lG2({
							type: Ie,
							selectors: [
								["", "cdkPortalOutlet", ""]
							],
							inputs: {
								portal: ["cdkPortalOutlet", "portal"]
							},
							outputs: {
								attached: "attached"
							},
							exportAs: ["cdkPortalOutlet"],
							features: [l.qOj]
						})
					}
					return Ie
				})(),
				ce = (() => {
					class Ie {
						static #e = this.\u0275fac = function(Ae) {
							return new(Ae || Ie)
						};
						static #t = this.\u0275mod = l.oAB({
							type: Ie
						});
						static #n = this.\u0275inj = l.cJS({})
					}
					return Ie
				})()
		},
		9473: (Ge, re, v) => {
			v.d(re, {
				ZD: () => me,
				mF: () => We,
				Cl: () => Ce,
				rL: () => wt
			});
			var l = v(2495),
				O = v(5879),
				F = v(8645),
				h = v(2096),
				B = v(5592),
				K = v(2438),
				ie = (v(927), v(6410), v(6321)),
				te = v(9360),
				Q = v(4829),
				de = v(8251),
				xe = v(4825);

			function Ne(Re, tt = ie.z) {
				return function ye(Re) {
					return (0, te.e)((tt, z) => {
						let Se = !1,
							Ze = null,
							nt = null,
							mt = !1;
						const _t = () => {
								if (nt?.unsubscribe(), nt = null, Se) {
									Se = !1;
									const Dt = Ze;
									Ze = null, z.next(Dt)
								}
								mt && z.complete()
							},
							gt = () => {
								nt = null, mt && z.complete()
							};
						tt.subscribe((0, de.x)(z, Dt => {
							Se = !0, Ze = Dt, nt || (0, Q.Xf)(Re(Dt)).subscribe(nt = (0, de.x)(z, _t, gt))
						}, () => {
							mt = !0, (!Se || !nt || nt.closed) && z.complete()
						}))
					})
				}(() => (0, xe.H)(Re, tt))
			}
			var Ye = v(2181),
				ge = v(2831),
				it = v(6814),
				lt = v(9388);
			let We = (() => {
					class Re {
						constructor(z, Se, Ze) {
							this._ngZone = z, this._platform = Se, this._scrolled = new F.x, this._globalSubscription = null, this._scrolledCount = 0, this.scrollContainers = new Map, this._document = Ze
						}
						register(z) {
							this.scrollContainers.has(z) || this.scrollContainers.set(z, z.elementScrolled().subscribe(() => this._scrolled.next(z)))
						}
						deregister(z) {
							const Se = this.scrollContainers.get(z);
							Se && (Se.unsubscribe(), this.scrollContainers.delete(z))
						}
						scrolled(z = 20) {
							return this._platform.isBrowser ? new B.y(Se => {
								this._globalSubscription || this._addGlobalListener();
								const Ze = z > 0 ? this._scrolled.pipe(Ne(z)).subscribe(Se) : this._scrolled.subscribe(Se);
								return this._scrolledCount++, () => {
									Ze.unsubscribe(), this._scrolledCount--, this._scrolledCount || this._removeGlobalListener()
								}
							}) : (0, h.of)()
						}
						ngOnDestroy() {
							this._removeGlobalListener(), this.scrollContainers.forEach((z, Se) => this.deregister(Se)), this._scrolled.complete()
						}
						ancestorScrolled(z, Se) {
							const Ze = this.getAncestorScrollContainers(z);
							return this.scrolled(Se).pipe((0, Ye.h)(nt => !nt || Ze.indexOf(nt) > -1))
						}
						getAncestorScrollContainers(z) {
							const Se = [];
							return this.scrollContainers.forEach((Ze, nt) => {
								this._scrollableContainsElement(nt, z) && Se.push(nt)
							}), Se
						}
						_getWindow() {
							return this._document.defaultView || window
						}
						_scrollableContainsElement(z, Se) {
							let Ze = (0, l.fI)(Se),
								nt = z.getElementRef().nativeElement;
							do {
								if (Ze == nt) return !0
							} while (Ze = Ze.parentElement);
							return !1
						}
						_addGlobalListener() {
							this._globalSubscription = this._ngZone.runOutsideAngular(() => {
								const z = this._getWindow();
								return (0, K.R)(z.document, "scroll").subscribe(() => this._scrolled.next())
							})
						}
						_removeGlobalListener() {
							this._globalSubscription && (this._globalSubscription.unsubscribe(), this._globalSubscription = null)
						}
						static #e = this.\u0275fac = function(Se) {
							return new(Se || Re)(O.LFG(O.R0b), O.LFG(ge.t4), O.LFG(it.K0, 8))
						};
						static #t = this.\u0275prov = O.Yz7({
							token: Re,
							factory: Re.\u0275fac,
							providedIn: "root"
						})
					}
					return Re
				})(),
				wt = (() => {
					class Re {
						constructor(z, Se, Ze) {
							this._platform = z, this._change = new F.x, this._changeListener = nt => {
								this._change.next(nt)
							}, this._document = Ze, Se.runOutsideAngular(() => {
								if (z.isBrowser) {
									const nt = this._getWindow();
									nt.addEventListener("resize", this._changeListener), nt.addEventListener("orientationchange", this._changeListener)
								}
								this.change().subscribe(() => this._viewportSize = null)
							})
						}
						ngOnDestroy() {
							if (this._platform.isBrowser) {
								const z = this._getWindow();
								z.removeEventListener("resize", this._changeListener), z.removeEventListener("orientationchange", this._changeListener)
							}
							this._change.complete()
						}
						getViewportSize() {
							this._viewportSize || this._updateViewportSize();
							const z = {
								width: this._viewportSize.width,
								height: this._viewportSize.height
							};
							return this._platform.isBrowser || (this._viewportSize = null), z
						}
						getViewportRect() {
							const z = this.getViewportScrollPosition(),
								{
									width: Se,
									height: Ze
								} = this.getViewportSize();
							return {
								top: z.top,
								left: z.left,
								bottom: z.top + Ze,
								right: z.left + Se,
								height: Ze,
								width: Se
							}
						}
						getViewportScrollPosition() {
							if (!this._platform.isBrowser) return {
								top: 0,
								left: 0
							};
							const z = this._document,
								Se = this._getWindow(),
								Ze = z.documentElement,
								nt = Ze.getBoundingClientRect();
							return {
								top: -nt.top || z.body.scrollTop || Se.scrollY || Ze.scrollTop || 0,
								left: -nt.left || z.body.scrollLeft || Se.scrollX || Ze.scrollLeft || 0
							}
						}
						change(z = 20) {
							return z > 0 ? this._change.pipe(Ne(z)) : this._change
						}
						_getWindow() {
							return this._document.defaultView || window
						}
						_updateViewportSize() {
							const z = this._getWindow();
							this._viewportSize = this._platform.isBrowser ? {
								width: z.innerWidth,
								height: z.innerHeight
							} : {
								width: 0,
								height: 0
							}
						}
						static #e = this.\u0275fac = function(Se) {
							return new(Se || Re)(O.LFG(ge.t4), O.LFG(O.R0b), O.LFG(it.K0, 8))
						};
						static #t = this.\u0275prov = O.Yz7({
							token: Re,
							factory: Re.\u0275fac,
							providedIn: "root"
						})
					}
					return Re
				})(),
				me = (() => {
					class Re {
						static #e = this.\u0275fac = function(Se) {
							return new(Se || Re)
						};
						static #t = this.\u0275mod = O.oAB({
							type: Re
						});
						static #n = this.\u0275inj = O.cJS({})
					}
					return Re
				})(),
				Ce = (() => {
					class Re {
						static #e = this.\u0275fac = function(Se) {
							return new(Se || Re)
						};
						static #t = this.\u0275mod = O.oAB({
							type: Re
						});
						static #n = this.\u0275inj = O.cJS({
							imports: [lt.vT, me, lt.vT, me]
						})
					}
					return Re
				})()
		},
		6814: (Ge, re, v) => {
			v.d(re, {
				ED: () => Kr,
				EM: () => oo,
				HT: () => h,
				JF: () => ms,
				K0: () => K,
				Mx: () => Bn,
				NF: () => It,
				Nd: () => no,
				O5: () => ci,
				OU: () => Mi,
				Ov: () => Hs,
				PC: () => Ko,
				PM: () => ki,
				RF: () => Vi,
				S$: () => ye,
				Ye: () => ge,
				Zd: () => Or,
				ax: () => pi,
				bD: () => ho,
				ez: () => Wn,
				mk: () => ai,
				n9: () => Ci,
				p6: () => He,
				q: () => F,
				sg: () => pi,
				tP: () => Qr,
				uU: () => jn,
				w_: () => B
			});
			var l = v(5879);
			let O = null;

			function F() {
				return O
			}

			function h(m) {
				O || (O = m)
			}
			class B {}
			const K = new l.OlP("DocumentToken");
			let ne = (() => {
					class m {
						historyGo(D) {
							throw new Error("Not implemented")
						}
						static #e = this.\u0275fac = function(M) {
							return new(M || m)
						};
						static #t = this.\u0275prov = l.Yz7({
							token: m,
							factory: function() {
								return (0, l.f3M)(ie)
							},
							providedIn: "platform"
						})
					}
					return m
				})(),
				ie = (() => {
					class m extends ne {
						constructor() {
							super(), this._doc = (0, l.f3M)(K), this._location = window.location, this._history = window.history
						}
						getBaseHrefFromDOM() {
							return F().getBaseHref(this._doc)
						}
						onPopState(D) {
							const M = F().getGlobalEventTarget(this._doc, "window");
							return M.addEventListener("popstate", D, !1), () => M.removeEventListener("popstate", D)
						}
						onHashChange(D) {
							const M = F().getGlobalEventTarget(this._doc, "window");
							return M.addEventListener("hashchange", D, !1), () => M.removeEventListener("hashchange", D)
						}
						get href() {
							return this._location.href
						}
						get protocol() {
							return this._location.protocol
						}
						get hostname() {
							return this._location.hostname
						}
						get port() {
							return this._location.port
						}
						get pathname() {
							return this._location.pathname
						}
						get search() {
							return this._location.search
						}
						get hash() {
							return this._location.hash
						}
						set pathname(D) {
							this._location.pathname = D
						}
						pushState(D, M, j) {
							this._history.pushState(D, M, j)
						}
						replaceState(D, M, j) {
							this._history.replaceState(D, M, j)
						}
						forward() {
							this._history.forward()
						}
						back() {
							this._history.back()
						}
						historyGo(D = 0) {
							this._history.go(D)
						}
						getState() {
							return this._history.state
						}
						static #e = this.\u0275fac = function(M) {
							return new(M || m)
						};
						static #t = this.\u0275prov = l.Yz7({
							token: m,
							factory: function() {
								return new m
							},
							providedIn: "platform"
						})
					}
					return m
				})();

			function te(m, S) {
				if (0 == m.length) return S;
				if (0 == S.length) return m;
				let D = 0;
				return m.endsWith("/") && D++, S.startsWith("/") && D++, 2 == D ? m + S.substring(1) : 1 == D ? m + S : m + "/" + S
			}

			function Q(m) {
				const S = m.match(/#|\?|$/),
					D = S && S.index || m.length;
				return m.slice(0, D - ("/" === m[D - 1] ? 1 : 0)) + m.slice(D)
			}

			function de(m) {
				return m && "?" !== m[0] ? "?" + m : m
			}
			let ye = (() => {
				class m {
					historyGo(D) {
						throw new Error("Not implemented")
					}
					static #e = this.\u0275fac = function(M) {
						return new(M || m)
					};
					static #t = this.\u0275prov = l.Yz7({
						token: m,
						factory: function() {
							return (0, l.f3M)(Ne)
						},
						providedIn: "root"
					})
				}
				return m
			})();
			const xe = new l.OlP("appBaseHref");
			let Ne = (() => {
					class m extends ye {
						constructor(D, M) {
							super(), this._platformLocation = D, this._removeListenerFns = [], this._baseHref = M ?? this._platformLocation.getBaseHrefFromDOM() ?? (0, l.f3M)(K).location?.origin ?? ""
						}
						ngOnDestroy() {
							for (; this._removeListenerFns.length;) this._removeListenerFns.pop()()
						}
						onPopState(D) {
							this._removeListenerFns.push(this._platformLocation.onPopState(D), this._platformLocation.onHashChange(D))
						}
						getBaseHref() {
							return this._baseHref
						}
						prepareExternalUrl(D) {
							return te(this._baseHref, D)
						}
						path(D = !1) {
							const M = this._platformLocation.pathname + de(this._platformLocation.search),
								j = this._platformLocation.hash;
							return j && D ? `${M}${j}` : M
						}
						pushState(D, M, j, De) {
							const ke = this.prepareExternalUrl(j + de(De));
							this._platformLocation.pushState(D, M, ke)
						}
						replaceState(D, M, j, De) {
							const ke = this.prepareExternalUrl(j + de(De));
							this._platformLocation.replaceState(D, M, ke)
						}
						forward() {
							this._platformLocation.forward()
						}
						back() {
							this._platformLocation.back()
						}
						getState() {
							return this._platformLocation.getState()
						}
						historyGo(D = 0) {
							this._platformLocation.historyGo?.(D)
						}
						static #e = this.\u0275fac = function(M) {
							return new(M || m)(l.LFG(ne), l.LFG(xe, 8))
						};
						static #t = this.\u0275prov = l.Yz7({
							token: m,
							factory: m.\u0275fac,
							providedIn: "root"
						})
					}
					return m
				})(),
				ge = (() => {
					class m {
						constructor(D) {
							this._subject = new l.vpe, this._urlChangeListeners = [], this._urlChangeSubscription = null, this._locationStrategy = D;
							const M = this._locationStrategy.getBaseHref();
							this._basePath = function ce(m) {
								if (new RegExp("^(https?:)?//").test(m)) {
									const [, D] = m.split(/\/\/[^\/]+/);
									return D
								}
								return m
							}(Q(qe(M))), this._locationStrategy.onPopState(j => {
								this._subject.emit({
									url: this.path(!0),
									pop: !0,
									state: j.state,
									type: j.type
								})
							})
						}
						ngOnDestroy() {
							this._urlChangeSubscription?.unsubscribe(), this._urlChangeListeners = []
						}
						path(D = !1) {
							return this.normalize(this._locationStrategy.path(D))
						}
						getState() {
							return this._locationStrategy.getState()
						}
						isCurrentPathEqualTo(D, M = "") {
							return this.path() == this.normalize(D + de(M))
						}
						normalize(D) {
							return m.stripTrailingSlash(function lt(m, S) {
								if (!m || !S.startsWith(m)) return S;
								const D = S.substring(m.length);
								return "" === D || ["/", ";", "?", "#"].includes(D[0]) ? D : S
							}(this._basePath, qe(D)))
						}
						prepareExternalUrl(D) {
							return D && "/" !== D[0] && (D = "/" + D), this._locationStrategy.prepareExternalUrl(D)
						}
						go(D, M = "", j = null) {
							this._locationStrategy.pushState(j, "", D, M), this._notifyUrlChangeListeners(this.prepareExternalUrl(D + de(M)), j)
						}
						replaceState(D, M = "", j = null) {
							this._locationStrategy.replaceState(j, "", D, M), this._notifyUrlChangeListeners(this.prepareExternalUrl(D + de(M)), j)
						}
						forward() {
							this._locationStrategy.forward()
						}
						back() {
							this._locationStrategy.back()
						}
						historyGo(D = 0) {
							this._locationStrategy.historyGo?.(D)
						}
						onUrlChange(D) {
							return this._urlChangeListeners.push(D), this._urlChangeSubscription || (this._urlChangeSubscription = this.subscribe(M => {
								this._notifyUrlChangeListeners(M.url, M.state)
							})), () => {
								const M = this._urlChangeListeners.indexOf(D);
								this._urlChangeListeners.splice(M, 1), 0 === this._urlChangeListeners.length && (this._urlChangeSubscription?.unsubscribe(), this._urlChangeSubscription = null)
							}
						}
						_notifyUrlChangeListeners(D = "", M) {
							this._urlChangeListeners.forEach(j => j(D, M))
						}
						subscribe(D, M, j) {
							return this._subject.subscribe({
								next: D,
								error: M,
								complete: j
							})
						}
						static #e = this.normalizeQueryParams = de;
						static #t = this.joinWithSlash = te;
						static #n = this.stripTrailingSlash = Q;
						static #i = this.\u0275fac = function(M) {
							return new(M || m)(l.LFG(ye))
						};
						static #o = this.\u0275prov = l.Yz7({
							token: m,
							factory: function() {
								return function it() {
									return new ge((0, l.LFG)(ye))
								}()
							},
							providedIn: "root"
						})
					}
					return m
				})();

			function qe(m) {
				return m.replace(/\/index.html$/, "")
			}
			var ue = function(m) {
					return m[m.Format = 0] = "Format", m[m.Standalone = 1] = "Standalone", m
				}(ue || {}),
				Ae = function(m) {
					return m[m.Narrow = 0] = "Narrow", m[m.Abbreviated = 1] = "Abbreviated", m[m.Wide = 2] = "Wide", m[m.Short = 3] = "Short", m
				}(Ae || {}),
				We = function(m) {
					return m[m.Short = 0] = "Short", m[m.Medium = 1] = "Medium", m[m.Long = 2] = "Long", m[m.Full = 3] = "Full", m
				}(We || {}),
				rt = function(m) {
					return m[m.Decimal = 0] = "Decimal", m[m.Group = 1] = "Group", m[m.List = 2] = "List", m[m.PercentSign = 3] = "PercentSign", m[m.PlusSign = 4] = "PlusSign", m[m.MinusSign = 5] = "MinusSign", m[m.Exponential = 6] = "Exponential", m[m.SuperscriptingExponent = 7] = "SuperscriptingExponent", m[m.PerMille = 8] = "PerMille", m[m.Infinity = 9] = "Infinity", m[m.NaN = 10] = "NaN", m[m.TimeSeparator = 11] = "TimeSeparator", m[m.CurrencyDecimal = 12] = "CurrencyDecimal", m[m.CurrencyGroup = 13] = "CurrencyGroup", m
				}(rt || {});

			function we(m, S) {
				return Dt((0, l.cg1)(m)[l.wAp.DateFormat], S)
			}

			function ve(m, S) {
				return Dt((0, l.cg1)(m)[l.wAp.TimeFormat], S)
			}

			function Te(m, S) {
				return Dt((0, l.cg1)(m)[l.wAp.DateTimeFormat], S)
			}

			function me(m, S) {
				const D = (0, l.cg1)(m),
					M = D[l.wAp.NumberSymbols][S];
				if (typeof M > "u") {
					if (S === rt.CurrencyDecimal) return D[l.wAp.NumberSymbols][rt.Decimal];
					if (S === rt.CurrencyGroup) return D[l.wAp.NumberSymbols][rt.Group]
				}
				return M
			}

			function nt(m) {
				if (!m[l.wAp.ExtraData]) throw new Error(`Missing extra locale data for the locale "${m[l.wAp.LocaleId]}". Use "registerLocaleData" to load new data. See the "I18n guide" on angular.io to know more.`)
			}

			function Dt(m, S) {
				for (let D = S; D > -1; D--)
					if (typeof m[D] < "u") return m[D];
				throw new Error("Locale data API: locale data undefined")
			}

			function an(m) {
				const [S, D] = m.split(":");
				return {
					hours: +S,
					minutes: +D
				}
			}
			const Zn = /^(\d{4,})-?(\d\d)-?(\d\d)(?:T(\d\d)(?::?(\d\d)(?::?(\d\d)(?:\.(\d+))?)?)?(Z|([+-])(\d\d):?(\d\d))?)?$/,
				Be = {},
				N = /((?:[^BEGHLMOSWYZabcdhmswyz']+)|(?:'(?:[^']|'')*')|(?:G{1,5}|y{1,4}|Y{1,4}|M{1,5}|L{1,5}|w{1,2}|W{1}|d{1,2}|E{1,6}|c{1,6}|a{1,5}|b{1,5}|B{1,5}|h{1,2}|H{1,2}|m{1,2}|s{1,2}|S{1,3}|z{1,4}|Z{1,5}|O{1,4}))([\s\S]*)/;
			var V = function(m) {
					return m[m.Short = 0] = "Short", m[m.ShortGMT = 1] = "ShortGMT", m[m.Long = 2] = "Long", m[m.Extended = 3] = "Extended", m
				}(V || {}),
				H = function(m) {
					return m[m.FullYear = 0] = "FullYear", m[m.Month = 1] = "Month", m[m.Date = 2] = "Date", m[m.Hours = 3] = "Hours", m[m.Minutes = 4] = "Minutes", m[m.Seconds = 5] = "Seconds", m[m.FractionalSeconds = 6] = "FractionalSeconds", m[m.Day = 7] = "Day", m
				}(H || {}),
				pe = function(m) {
					return m[m.DayPeriods = 0] = "DayPeriods", m[m.Days = 1] = "Days", m[m.Months = 2] = "Months", m[m.Eras = 3] = "Eras", m
				}(pe || {});

			function He(m, S, D, M) {
				let j = function Le(m) {
					if (I(m)) return m;
					if ("number" == typeof m && !isNaN(m)) return new Date(m);
					if ("string" == typeof m) {
						if (m = m.trim(), /^(\d{4}(-\d{1,2}(-\d{1,2})?)?)$/.test(m)) {
							const [j, De = 1, ke = 1] = m.split("-").map(ft => +ft);
							return Ue(j, De - 1, ke)
						}
						const D = parseFloat(m);
						if (!isNaN(m - D)) return new Date(D);
						let M;
						if (M = m.match(Zn)) return function L(m) {
							const S = new Date(0);
							let D = 0,
								M = 0;
							const j = m[8] ? S.setUTCFullYear : S.setFullYear,
								De = m[8] ? S.setUTCHours : S.setHours;
							m[9] && (D = Number(m[9] + m[10]), M = Number(m[9] + m[11])), j.call(S, Number(m[1]), Number(m[2]) - 1, Number(m[3]));
							const ke = Number(m[4] || 0) - D,
								ft = Number(m[5] || 0) - M,
								zt = Number(m[6] || 0),
								cn = Math.floor(1e3 * parseFloat("0." + (m[7] || 0)));
							return De.call(S, ke, ft, zt, cn), S
						}(M)
					}
					const S = new Date(m);
					if (!I(S)) throw new Error(`Unable to convert "${m}" into a date`);
					return S
				}(m);
				S = Xe(D, S) || S;
				let ft, ke = [];
				for (; S;) {
					if (ft = N.exec(S), !ft) {
						ke.push(S);
						break
					} {
						ke = ke.concat(ft.slice(1));
						const Jt = ke.pop();
						if (!Jt) break;
						S = Jt
					}
				}
				let zt = j.getTimezoneOffset();
				M && (zt = vn(M, zt), j = function zn(m, S, D) {
					const M = D ? -1 : 1,
						j = m.getTimezoneOffset();
					return function In(m, S) {
						return (m = new Date(m.getTime())).setMinutes(m.getMinutes() + S), m
					}(m, M * (vn(S, j) - j))
				}(j, M, !0));
				let cn = "";
				return ke.forEach(Jt => {
					const Ut = function Pi(m) {
						if (si[m]) return si[m];
						let S;
						switch (m) {
							case "G":
							case "GG":
							case "GGG":
								S = Et(pe.Eras, Ae.Abbreviated);
								break;
							case "GGGG":
								S = Et(pe.Eras, Ae.Wide);
								break;
							case "GGGGG":
								S = Et(pe.Eras, Ae.Narrow);
								break;
							case "y":
								S = yt(H.FullYear, 1, 0, !1, !0);
								break;
							case "yy":
								S = yt(H.FullYear, 2, 0, !0, !0);
								break;
							case "yyy":
								S = yt(H.FullYear, 3, 0, !1, !0);
								break;
							case "yyyy":
								S = yt(H.FullYear, 4, 0, !1, !0);
								break;
							case "Y":
								S = xn(1);
								break;
							case "YY":
								S = xn(2, !0);
								break;
							case "YYY":
								S = xn(3);
								break;
							case "YYYY":
								S = xn(4);
								break;
							case "M":
							case "L":
								S = yt(H.Month, 1, 1);
								break;
							case "MM":
							case "LL":
								S = yt(H.Month, 2, 1);
								break;
							case "MMM":
								S = Et(pe.Months, Ae.Abbreviated);
								break;
							case "MMMM":
								S = Et(pe.Months, Ae.Wide);
								break;
							case "MMMMM":
								S = Et(pe.Months, Ae.Narrow);
								break;
							case "LLL":
								S = Et(pe.Months, Ae.Abbreviated, ue.Standalone);
								break;
							case "LLLL":
								S = Et(pe.Months, Ae.Wide, ue.Standalone);
								break;
							case "LLLLL":
								S = Et(pe.Months, Ae.Narrow, ue.Standalone);
								break;
							case "w":
								S = pn(1);
								break;
							case "ww":
								S = pn(2);
								break;
							case "W":
								S = pn(1, !0);
								break;
							case "d":
								S = yt(H.Date, 1);
								break;
							case "dd":
								S = yt(H.Date, 2);
								break;
							case "c":
							case "cc":
								S = yt(H.Day, 1);
								break;
							case "ccc":
								S = Et(pe.Days, Ae.Abbreviated, ue.Standalone);
								break;
							case "cccc":
								S = Et(pe.Days, Ae.Wide, ue.Standalone);
								break;
							case "ccccc":
								S = Et(pe.Days, Ae.Narrow, ue.Standalone);
								break;
							case "cccccc":
								S = Et(pe.Days, Ae.Short, ue.Standalone);
								break;
							case "E":
							case "EE":
							case "EEE":
								S = Et(pe.Days, Ae.Abbreviated);
								break;
							case "EEEE":
								S = Et(pe.Days, Ae.Wide);
								break;
							case "EEEEE":
								S = Et(pe.Days, Ae.Narrow);
								break;
							case "EEEEEE":
								S = Et(pe.Days, Ae.Short);
								break;
							case "a":
							case "aa":
							case "aaa":
								S = Et(pe.DayPeriods, Ae.Abbreviated);
								break;
							case "aaaa":
								S = Et(pe.DayPeriods, Ae.Wide);
								break;
							case "aaaaa":
								S = Et(pe.DayPeriods, Ae.Narrow);
								break;
							case "b":
							case "bb":
							case "bbb":
								S = Et(pe.DayPeriods, Ae.Abbreviated, ue.Standalone, !0);
								break;
							case "bbbb":
								S = Et(pe.DayPeriods, Ae.Wide, ue.Standalone, !0);
								break;
							case "bbbbb":
								S = Et(pe.DayPeriods, Ae.Narrow, ue.Standalone, !0);
								break;
							case "B":
							case "BB":
							case "BBB":
								S = Et(pe.DayPeriods, Ae.Abbreviated, ue.Format, !0);
								break;
							case "BBBB":
								S = Et(pe.DayPeriods, Ae.Wide, ue.Format, !0);
								break;
							case "BBBBB":
								S = Et(pe.DayPeriods, Ae.Narrow, ue.Format, !0);
								break;
							case "h":
								S = yt(H.Hours, 1, -12);
								break;
							case "hh":
								S = yt(H.Hours, 2, -12);
								break;
							case "H":
								S = yt(H.Hours, 1);
								break;
							case "HH":
								S = yt(H.Hours, 2);
								break;
							case "m":
								S = yt(H.Minutes, 1);
								break;
							case "mm":
								S = yt(H.Minutes, 2);
								break;
							case "s":
								S = yt(H.Seconds, 1);
								break;
							case "ss":
								S = yt(H.Seconds, 2);
								break;
							case "S":
								S = yt(H.FractionalSeconds, 1);
								break;
							case "SS":
								S = yt(H.FractionalSeconds, 2);
								break;
							case "SSS":
								S = yt(H.FractionalSeconds, 3);
								break;
							case "Z":
							case "ZZ":
							case "ZZZ":
								S = nn(V.Short);
								break;
							case "ZZZZZ":
								S = nn(V.Extended);
								break;
							case "O":
							case "OO":
							case "OOO":
							case "z":
							case "zz":
							case "zzz":
								S = nn(V.ShortGMT);
								break;
							case "OOOO":
							case "ZZZZ":
							case "zzzz":
								S = nn(V.Long);
								break;
							default:
								return null
						}
						return si[m] = S, S
					}(Jt);
					cn += Ut ? Ut(j, D, zt) : "''" === Jt ? "'" : Jt.replace(/(^'|'$)/g, "").replace(/''/g, "'")
				}), cn
			}

			function Ue(m, S, D) {
				const M = new Date(0);
				return M.setFullYear(m, S, D), M.setHours(0, 0, 0), M
			}

			function Xe(m, S) {
				const D = function wt(m) {
					return (0, l.cg1)(m)[l.wAp.LocaleId]
				}(m);
				if (Be[D] = Be[D] || {}, Be[D][S]) return Be[D][S];
				let M = "";
				switch (S) {
					case "shortDate":
						M = we(m, We.Short);
						break;
					case "mediumDate":
						M = we(m, We.Medium);
						break;
					case "longDate":
						M = we(m, We.Long);
						break;
					case "fullDate":
						M = we(m, We.Full);
						break;
					case "shortTime":
						M = ve(m, We.Short);
						break;
					case "mediumTime":
						M = ve(m, We.Medium);
						break;
					case "longTime":
						M = ve(m, We.Long);
						break;
					case "fullTime":
						M = ve(m, We.Full);
						break;
					case "short":
						const j = Xe(m, "shortTime"),
							De = Xe(m, "shortDate");
						M = Pt(Te(m, We.Short), [j, De]);
						break;
					case "medium":
						const ke = Xe(m, "mediumTime"),
							ft = Xe(m, "mediumDate");
						M = Pt(Te(m, We.Medium), [ke, ft]);
						break;
					case "long":
						const zt = Xe(m, "longTime"),
							cn = Xe(m, "longDate");
						M = Pt(Te(m, We.Long), [zt, cn]);
						break;
					case "full":
						const Jt = Xe(m, "fullTime"),
							Ut = Xe(m, "fullDate");
						M = Pt(Te(m, We.Full), [Jt, Ut])
				}
				return M && (Be[D][S] = M), M
			}

			function Pt(m, S) {
				return S && (m = m.replace(/\{([^}]+)}/g, function(D, M) {
					return null != S && M in S ? S[M] : D
				})), m
			}

			function ht(m, S, D = "-", M, j) {
				let De = "";
				(m < 0 || j && m <= 0) && (j ? m = 1 - m : (m = -m, De = D));
				let ke = String(m);
				for (; ke.length < S;) ke = "0" + ke;
				return M && (ke = ke.slice(ke.length - S)), De + ke
			}

			function yt(m, S, D = 0, M = !1, j = !1) {
				return function(De, ke) {
					let ft = function Mt(m, S) {
						switch (m) {
							case H.FullYear:
								return S.getFullYear();
							case H.Month:
								return S.getMonth();
							case H.Date:
								return S.getDate();
							case H.Hours:
								return S.getHours();
							case H.Minutes:
								return S.getMinutes();
							case H.Seconds:
								return S.getSeconds();
							case H.FractionalSeconds:
								return S.getMilliseconds();
							case H.Day:
								return S.getDay();
							default:
								throw new Error(`Unknown DateType value "${m}".`)
						}
					}(m, De);
					if ((D > 0 || ft > -D) && (ft += D), m === H.Hours) 0 === ft && -12 === D && (ft = 12);
					else if (m === H.FractionalSeconds) return function bt(m, S) {
						return ht(m, 3).substring(0, S)
					}(ft, S);
					const zt = me(ke, rt.MinusSign);
					return ht(ft, S, zt, M, j)
				}
			}

			function Et(m, S, D = ue.Format, M = !1) {
				return function(j, De) {
					return function ln(m, S, D, M, j, De) {
						switch (D) {
							case pe.Months:
								return function Un(m, S, D) {
									const M = (0, l.cg1)(m),
										De = Dt([M[l.wAp.MonthsFormat], M[l.wAp.MonthsStandalone]], S);
									return Dt(De, D)
								}(S, j, M)[m.getMonth()];
							case pe.Days:
								return function wn(m, S, D) {
									const M = (0, l.cg1)(m),
										De = Dt([M[l.wAp.DaysFormat], M[l.wAp.DaysStandalone]], S);
									return Dt(De, D)
								}(S, j, M)[m.getDay()];
							case pe.DayPeriods:
								const ke = m.getHours(),
									ft = m.getMinutes();
								if (De) {
									const cn = function mt(m) {
											const S = (0, l.cg1)(m);
											return nt(S), (S[l.wAp.ExtraData][2] || []).map(M => "string" == typeof M ? an(M) : [an(M[0]), an(M[1])])
										}(S),
										Jt = function _t(m, S, D) {
											const M = (0, l.cg1)(m);
											nt(M);
											const De = Dt([M[l.wAp.ExtraData][0], M[l.wAp.ExtraData][1]], S) || [];
											return Dt(De, D) || []
										}(S, j, M),
										Ut = cn.findIndex(bn => {
											if (Array.isArray(bn)) {
												const [sn, Pn] = bn, Xi = ke >= sn.hours && ft >= sn.minutes, ei = ke < Pn.hours || ke === Pn.hours && ft < Pn.minutes;
												if (sn.hours < Pn.hours) {
													if (Xi && ei) return !0
												} else if (Xi || ei) return !0
											} else if (bn.hours === ke && bn.minutes === ft) return !0;
											return !1
										});
									if (-1 !== Ut) return Jt[Ut]
								}
								return function Yt(m, S, D) {
									const M = (0, l.cg1)(m),
										De = Dt([M[l.wAp.DayPeriodsFormat], M[l.wAp.DayPeriodsStandalone]], S);
									return Dt(De, D)
								}(S, j, M)[ke < 12 ? 0 : 1];
							case pe.Eras:
								return function Qt(m, S) {
									return Dt((0, l.cg1)(m)[l.wAp.Eras], S)
								}(S, M)[m.getFullYear() <= 0 ? 0 : 1];
							default:
								throw new Error(`unexpected translation type ${D}`)
						}
					}(j, De, m, S, D, M)
				}
			}

			function nn(m) {
				return function(S, D, M) {
					const j = -1 * M,
						De = me(D, rt.MinusSign),
						ke = j > 0 ? Math.floor(j / 60) : Math.ceil(j / 60);
					switch (m) {
						case V.Short:
							return (j >= 0 ? "+" : "") + ht(ke, 2, De) + ht(Math.abs(j % 60), 2, De);
						case V.ShortGMT:
							return "GMT" + (j >= 0 ? "+" : "") + ht(ke, 1, De);
						case V.Long:
							return "GMT" + (j >= 0 ? "+" : "") + ht(ke, 2, De) + ":" + ht(Math.abs(j % 60), 2, De);
						case V.Extended:
							return 0 === M ? "Z" : (j >= 0 ? "+" : "") + ht(ke, 2, De) + ":" + ht(Math.abs(j % 60), 2, De);
						default:
							throw new Error(`Unknown zone width "${m}"`)
					}
				}
			}
			const fn = 0,
				Ln = 4;

			function Ui(m) {
				return Ue(m.getFullYear(), m.getMonth(), m.getDate() + (Ln - m.getDay()))
			}

			function pn(m, S = !1) {
				return function(D, M) {
					let j;
					if (S) {
						const De = new Date(D.getFullYear(), D.getMonth(), 1).getDay() - 1,
							ke = D.getDate();
						j = 1 + Math.floor((ke + De) / 7)
					} else {
						const De = Ui(D),
							ke = function yn(m) {
								const S = Ue(m, fn, 1).getDay();
								return Ue(m, 0, 1 + (S <= Ln ? Ln : Ln + 7) - S)
							}(De.getFullYear()),
							ft = De.getTime() - ke.getTime();
						j = 1 + Math.round(ft / 6048e5)
					}
					return ht(j, m, me(M, rt.MinusSign))
				}
			}

			function xn(m, S = !1) {
				return function(D, M) {
					return ht(Ui(D).getFullYear(), m, me(M, rt.MinusSign), S)
				}
			}
			const si = {};

			function vn(m, S) {
				m = m.replace(/:/g, "");
				const D = Date.parse("Jan 01, 1970 00:00:00 " + m) / 6e4;
				return isNaN(D) ? S : D
			}

			function I(m) {
				return m instanceof Date && !isNaN(m.valueOf())
			}

			function Bn(m, S) {
				S = encodeURIComponent(S);
				for (const D of m.split(";")) {
					const M = D.indexOf("="),
						[j, De] = -1 == M ? [D, ""] : [D.slice(0, M), D.slice(M + 1)];
					if (j.trim() === S) return decodeURIComponent(De)
				}
				return null
			}
			const on = /\s+/,
				Ri = [];
			let ai = (() => {
				class m {
					constructor(D, M, j, De) {
						this._iterableDiffers = D, this._keyValueDiffers = M, this._ngEl = j, this._renderer = De, this.initialClasses = Ri, this.stateMap = new Map
					}
					set klass(D) {
						this.initialClasses = null != D ? D.trim().split(on) : Ri
					}
					set ngClass(D) {
						this.rawClass = "string" == typeof D ? D.trim().split(on) : D
					}
					ngDoCheck() {
						for (const M of this.initialClasses) this._updateState(M, !0);
						const D = this.rawClass;
						if (Array.isArray(D) || D instanceof Set)
							for (const M of D) this._updateState(M, !0);
						else if (null != D)
							for (const M of Object.keys(D)) this._updateState(M, !!D[M]);
						this._applyStateDiff()
					}
					_updateState(D, M) {
						const j = this.stateMap.get(D);
						void 0 !== j ? (j.enabled !== M && (j.changed = !0, j.enabled = M), j.touched = !0) : this.stateMap.set(D, {
							enabled: M,
							changed: !0,
							touched: !0
						})
					}
					_applyStateDiff() {
						for (const D of this.stateMap) {
							const M = D[0],
								j = D[1];
							j.changed ? (this._toggleClass(M, j.enabled), j.changed = !1) : j.touched || (j.enabled && this._toggleClass(M, !1), this.stateMap.delete(M)), j.touched = !1
						}
					}
					_toggleClass(D, M) {
						(D = D.trim()).length > 0 && D.split(on).forEach(j => {
							M ? this._renderer.addClass(this._ngEl.nativeElement, j) : this._renderer.removeClass(this._ngEl.nativeElement, j)
						})
					}
					static #e = this.\u0275fac = function(M) {
						return new(M || m)(l.Y36(l.ZZ4), l.Y36(l.aQg), l.Y36(l.SBq), l.Y36(l.Qsj))
					};
					static #t = this.\u0275dir = l.lG2({
						type: m,
						selectors: [
							["", "ngClass", ""]
						],
						inputs: {
							klass: ["class", "klass"],
							ngClass: "ngClass"
						},
						standalone: !0
					})
				}
				return m
			})();
			class Di {
				constructor(S, D, M, j) {
					this.$implicit = S, this.ngForOf = D, this.index = M, this.count = j
				}
				get first() {
					return 0 === this.index
				}
				get last() {
					return this.index === this.count - 1
				}
				get even() {
					return this.index % 2 == 0
				}
				get odd() {
					return !this.even
				}
			}
			let pi = (() => {
				class m {
					set ngForOf(D) {
						this._ngForOf = D, this._ngForOfDirty = !0
					}
					set ngForTrackBy(D) {
						this._trackByFn = D
					}
					get ngForTrackBy() {
						return this._trackByFn
					}
					constructor(D, M, j) {
						this._viewContainer = D, this._template = M, this._differs = j, this._ngForOf = null, this._ngForOfDirty = !0, this._differ = null
					}
					set ngForTemplate(D) {
						D && (this._template = D)
					}
					ngDoCheck() {
						if (this._ngForOfDirty) {
							this._ngForOfDirty = !1;
							const D = this._ngForOf;
							!this._differ && D && (this._differ = this._differs.find(D).create(this.ngForTrackBy))
						}
						if (this._differ) {
							const D = this._differ.diff(this._ngForOf);
							D && this._applyChanges(D)
						}
					}
					_applyChanges(D) {
						const M = this._viewContainer;
						D.forEachOperation((j, De, ke) => {
							if (null == j.previousIndex) M.createEmbeddedView(this._template, new Di(j.item, this._ngForOf, -1, -1), null === ke ? void 0 : ke);
							else if (null == ke) M.remove(null === De ? void 0 : De);
							else if (null !== De) {
								const ft = M.get(De);
								M.move(ft, ke), Xt(ft, j)
							}
						});
						for (let j = 0, De = M.length; j < De; j++) {
							const ft = M.get(j).context;
							ft.index = j, ft.count = De, ft.ngForOf = this._ngForOf
						}
						D.forEachIdentityChange(j => {
							Xt(M.get(j.currentIndex), j)
						})
					}
					static ngTemplateContextGuard(D, M) {
						return !0
					}
					static #e = this.\u0275fac = function(M) {
						return new(M || m)(l.Y36(l.s_b), l.Y36(l.Rgc), l.Y36(l.ZZ4))
					};
					static #t = this.\u0275dir = l.lG2({
						type: m,
						selectors: [
							["", "ngFor", "", "ngForOf", ""]
						],
						inputs: {
							ngForOf: "ngForOf",
							ngForTrackBy: "ngForTrackBy",
							ngForTemplate: "ngForTemplate"
						},
						standalone: !0
					})
				}
				return m
			})();

			function Xt(m, S) {
				m.context.$implicit = S.item
			}
			let ci = (() => {
				class m {
					constructor(D, M) {
						this._viewContainer = D, this._context = new $n, this._thenTemplateRef = null, this._elseTemplateRef = null, this._thenViewRef = null, this._elseViewRef = null, this._thenTemplateRef = M
					}
					set ngIf(D) {
						this._context.$implicit = this._context.ngIf = D, this._updateView()
					}
					set ngIfThen(D) {
						Gn("ngIfThen", D), this._thenTemplateRef = D, this._thenViewRef = null, this._updateView()
					}
					set ngIfElse(D) {
						Gn("ngIfElse", D), this._elseTemplateRef = D, this._elseViewRef = null, this._updateView()
					}
					_updateView() {
						this._context.$implicit ? this._thenViewRef || (this._viewContainer.clear(), this._elseViewRef = null, this._thenTemplateRef && (this._thenViewRef = this._viewContainer.createEmbeddedView(this._thenTemplateRef, this._context))) : this._elseViewRef || (this._viewContainer.clear(), this._thenViewRef = null, this._elseTemplateRef && (this._elseViewRef = this._viewContainer.createEmbeddedView(this._elseTemplateRef, this._context)))
					}
					static ngTemplateContextGuard(D, M) {
						return !0
					}
					static #e = this.\u0275fac = function(M) {
						return new(M || m)(l.Y36(l.s_b), l.Y36(l.Rgc))
					};
					static #t = this.\u0275dir = l.lG2({
						type: m,
						selectors: [
							["", "ngIf", ""]
						],
						inputs: {
							ngIf: "ngIf",
							ngIfThen: "ngIfThen",
							ngIfElse: "ngIfElse"
						},
						standalone: !0
					})
				}
				return m
			})();
			class $n {
				constructor() {
					this.$implicit = null, this.ngIf = null
				}
			}

			function Gn(m, S) {
				if (S && !S.createEmbeddedView) throw new Error(`${m} must be a TemplateRef, but received '${(0,l.AaK)(S)}'.`)
			}
			class Ei {
				constructor(S, D) {
					this._viewContainerRef = S, this._templateRef = D, this._created = !1
				}
				create() {
					this._created = !0, this._viewContainerRef.createEmbeddedView(this._templateRef)
				}
				destroy() {
					this._created = !1, this._viewContainerRef.clear()
				}
				enforceState(S) {
					S && !this._created ? this.create() : !S && this._created && this.destroy()
				}
			}
			let Vi = (() => {
					class m {
						constructor() {
							this._defaultViews = [], this._defaultUsed = !1, this._caseCount = 0, this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1
						}
						set ngSwitch(D) {
							this._ngSwitch = D, 0 === this._caseCount && this._updateDefaultCases(!0)
						}
						_addCase() {
							return this._caseCount++
						}
						_addDefault(D) {
							this._defaultViews.push(D)
						}
						_matchCase(D) {
							const M = D == this._ngSwitch;
							return this._lastCasesMatched = this._lastCasesMatched || M, this._lastCaseCheckIndex++, this._lastCaseCheckIndex === this._caseCount && (this._updateDefaultCases(!this._lastCasesMatched), this._lastCaseCheckIndex = 0, this._lastCasesMatched = !1), M
						}
						_updateDefaultCases(D) {
							if (this._defaultViews.length > 0 && D !== this._defaultUsed) {
								this._defaultUsed = D;
								for (const M of this._defaultViews) M.enforceState(D)
							}
						}
						static #e = this.\u0275fac = function(M) {
							return new(M || m)
						};
						static #t = this.\u0275dir = l.lG2({
							type: m,
							selectors: [
								["", "ngSwitch", ""]
							],
							inputs: {
								ngSwitch: "ngSwitch"
							},
							standalone: !0
						})
					}
					return m
				})(),
				Ci = (() => {
					class m {
						constructor(D, M, j) {
							this.ngSwitch = j, j._addCase(), this._view = new Ei(D, M)
						}
						ngDoCheck() {
							this._view.enforceState(this.ngSwitch._matchCase(this.ngSwitchCase))
						}
						static #e = this.\u0275fac = function(M) {
							return new(M || m)(l.Y36(l.s_b), l.Y36(l.Rgc), l.Y36(Vi, 9))
						};
						static #t = this.\u0275dir = l.lG2({
							type: m,
							selectors: [
								["", "ngSwitchCase", ""]
							],
							inputs: {
								ngSwitchCase: "ngSwitchCase"
							},
							standalone: !0
						})
					}
					return m
				})(),
				Kr = (() => {
					class m {
						constructor(D, M, j) {
							j._addDefault(new Ei(D, M))
						}
						static #e = this.\u0275fac = function(M) {
							return new(M || m)(l.Y36(l.s_b), l.Y36(l.Rgc), l.Y36(Vi, 9))
						};
						static #t = this.\u0275dir = l.lG2({
							type: m,
							selectors: [
								["", "ngSwitchDefault", ""]
							],
							standalone: !0
						})
					}
					return m
				})(),
				Ko = (() => {
					class m {
						constructor(D, M, j) {
							this._ngEl = D, this._differs = M, this._renderer = j, this._ngStyle = null, this._differ = null
						}
						set ngStyle(D) {
							this._ngStyle = D, !this._differ && D && (this._differ = this._differs.find(D).create())
						}
						ngDoCheck() {
							if (this._differ) {
								const D = this._differ.diff(this._ngStyle);
								D && this._applyChanges(D)
							}
						}
						_setStyle(D, M) {
							const [j, De] = D.split("."), ke = -1 === j.indexOf("-") ? void 0 : l.JOm.DashCase;
							null != M ? this._renderer.setStyle(this._ngEl.nativeElement, j, De ? `${M}${De}` : M, ke) : this._renderer.removeStyle(this._ngEl.nativeElement, j, ke)
						}
						_applyChanges(D) {
							D.forEachRemovedItem(M => this._setStyle(M.key, null)), D.forEachAddedItem(M => this._setStyle(M.key, M.currentValue)), D.forEachChangedItem(M => this._setStyle(M.key, M.currentValue))
						}
						static #e = this.\u0275fac = function(M) {
							return new(M || m)(l.Y36(l.SBq), l.Y36(l.aQg), l.Y36(l.Qsj))
						};
						static #t = this.\u0275dir = l.lG2({
							type: m,
							selectors: [
								["", "ngStyle", ""]
							],
							inputs: {
								ngStyle: "ngStyle"
							},
							standalone: !0
						})
					}
					return m
				})(),
				Qr = (() => {
					class m {
						constructor(D) {
							this._viewContainerRef = D, this._viewRef = null, this.ngTemplateOutletContext = null, this.ngTemplateOutlet = null, this.ngTemplateOutletInjector = null
						}
						ngOnChanges(D) {
							if (D.ngTemplateOutlet || D.ngTemplateOutletInjector) {
								const M = this._viewContainerRef;
								if (this._viewRef && M.remove(M.indexOf(this._viewRef)), this.ngTemplateOutlet) {
									const {
										ngTemplateOutlet: j,
										ngTemplateOutletContext: De,
										ngTemplateOutletInjector: ke
									} = this;
									this._viewRef = M.createEmbeddedView(j, De, ke ? {
										injector: ke
									} : void 0)
								} else this._viewRef = null
							} else this._viewRef && D.ngTemplateOutletContext && this.ngTemplateOutletContext && (this._viewRef.context = this.ngTemplateOutletContext)
						}
						static #e = this.\u0275fac = function(M) {
							return new(M || m)(l.Y36(l.s_b))
						};
						static #t = this.\u0275dir = l.lG2({
							type: m,
							selectors: [
								["", "ngTemplateOutlet", ""]
							],
							inputs: {
								ngTemplateOutletContext: "ngTemplateOutletContext",
								ngTemplateOutlet: "ngTemplateOutlet",
								ngTemplateOutletInjector: "ngTemplateOutletInjector"
							},
							standalone: !0,
							features: [l.TTD]
						})
					}
					return m
				})();

			function mi(m, S) {
				return new l.vHH(2100, !1)
			}
			class Qo {
				createSubscription(S, D) {
					return (0, l.rg0)(() => S.subscribe({
						next: D,
						error: M => {
							throw M
						}
					}))
				}
				dispose(S) {
					(0, l.rg0)(() => S.unsubscribe())
				}
			}
			class Xr {
				createSubscription(S, D) {
					return S.then(D, M => {
						throw M
					})
				}
				dispose(S) {}
			}
			const No = new Xr,
				Cr = new Qo;
			let Hs = (() => {
				class m {
					constructor(D) {
						this._latestValue = null, this._subscription = null, this._obj = null, this._strategy = null, this._ref = D
					}
					ngOnDestroy() {
						this._subscription && this._dispose(), this._ref = null
					}
					transform(D) {
						return this._obj ? D !== this._obj ? (this._dispose(), this.transform(D)) : this._latestValue : (D && this._subscribe(D), this._latestValue)
					}
					_subscribe(D) {
						this._obj = D, this._strategy = this._selectStrategy(D), this._subscription = this._strategy.createSubscription(D, M => this._updateLatestValue(D, M))
					}
					_selectStrategy(D) {
						if ((0, l.QGY)(D)) return No;
						if ((0, l.F4k)(D)) return Cr;
						throw mi()
					}
					_dispose() {
						this._strategy.dispose(this._subscription), this._latestValue = null, this._subscription = null, this._obj = null
					}
					_updateLatestValue(D, M) {
						D === this._obj && (this._latestValue = M, this._ref.markForCheck())
					}
					static #e = this.\u0275fac = function(M) {
						return new(M || m)(l.Y36(l.sBO, 16))
					};
					static #t = this.\u0275pipe = l.Yjl({
						name: "async",
						type: m,
						pure: !1,
						standalone: !0
					})
				}
				return m
			})();
			const wi = new l.OlP("DATE_PIPE_DEFAULT_TIMEZONE"),
				Ht = new l.OlP("DATE_PIPE_DEFAULT_OPTIONS");
			let jn = (() => {
					class m {
						constructor(D, M, j) {
							this.locale = D, this.defaultTimezone = M, this.defaultOptions = j
						}
						transform(D, M, j, De) {
							if (null == D || "" === D || D != D) return null;
							try {
								return He(D, M ?? this.defaultOptions?.dateFormat ?? "mediumDate", De || this.locale, j ?? this.defaultOptions?.timezone ?? this.defaultTimezone ?? void 0)
							} catch (ke) {
								throw mi()
							}
						}
						static #e = this.\u0275fac = function(M) {
							return new(M || m)(l.Y36(l.soG, 16), l.Y36(wi, 24), l.Y36(Ht, 24))
						};
						static #t = this.\u0275pipe = l.Yjl({
							name: "date",
							type: m,
							pure: !0,
							standalone: !0
						})
					}
					return m
				})(),
				no = (() => {
					class m {
						constructor(D) {
							this.differs = D, this.keyValues = [], this.compareFn = Jo
						}
						transform(D, M = Jo) {
							if (!D || !(D instanceof Map) && "object" != typeof D) return null;
							this.differ || (this.differ = this.differs.find(D).create());
							const j = this.differ.diff(D),
								De = M !== this.compareFn;
							return j && (this.keyValues = [], j.forEachItem(ke => {
								this.keyValues.push(function qr(m, S) {
									return {
										key: m,
										value: S
									}
								}(ke.key, ke.currentValue))
							})), (j || De) && (this.keyValues.sort(M), this.compareFn = M), this.keyValues
						}
						static #e = this.\u0275fac = function(M) {
							return new(M || m)(l.Y36(l.aQg, 16))
						};
						static #t = this.\u0275pipe = l.Yjl({
							name: "keyvalue",
							type: m,
							pure: !1,
							standalone: !0
						})
					}
					return m
				})();

			function Jo(m, S) {
				const D = m.key,
					M = S.key;
				if (D === M) return 0;
				if (void 0 === D) return 1;
				if (void 0 === M) return -1;
				if (null === D) return 1;
				if (null === M) return -1;
				if ("string" == typeof D && "string" == typeof M) return D < M ? -1 : 1;
				if ("number" == typeof D && "number" == typeof M) return D - M;
				if ("boolean" == typeof D && "boolean" == typeof M) return D < M ? -1 : 1;
				const j = String(D),
					De = String(M);
				return j == De ? 0 : j < De ? -1 : 1
			}
			let Mi = (() => {
					class m {
						transform(D, M, j) {
							if (null == D) return null;
							if (!this.supports(D)) throw mi();
							return D.slice(M, j)
						}
						supports(D) {
							return "string" == typeof D || Array.isArray(D)
						}
						static #e = this.\u0275fac = function(M) {
							return new(M || m)
						};
						static #t = this.\u0275pipe = l.Yjl({
							name: "slice",
							type: m,
							pure: !1,
							standalone: !0
						})
					}
					return m
				})(),
				Wn = (() => {
					class m {
						static #e = this.\u0275fac = function(M) {
							return new(M || m)
						};
						static #t = this.\u0275mod = l.oAB({
							type: m
						});
						static #n = this.\u0275inj = l.cJS({})
					}
					return m
				})();
			const ho = "browser",
				mn = "server";

			function It(m) {
				return m === ho
			}

			function ki(m) {
				return m === mn
			}
			let oo = (() => {
				class m {
					static #e = this.\u0275prov = (0, l.Yz7)({
						token: m,
						providedIn: "root",
						factory: () => new wo((0, l.LFG)(K), window)
					})
				}
				return m
			})();
			class wo {
				constructor(S, D) {
					this.document = S, this.window = D, this.offset = () => [0, 0]
				}
				setOffset(S) {
					this.offset = Array.isArray(S) ? () => S : S
				}
				getScrollPosition() {
					return this.supportsScrolling() ? [this.window.pageXOffset, this.window.pageYOffset] : [0, 0]
				}
				scrollToPosition(S) {
					this.supportsScrolling() && this.window.scrollTo(S[0], S[1])
				}
				scrollToAnchor(S) {
					if (!this.supportsScrolling()) return;
					const D = function Zi(m, S) {
						const D = m.getElementById(S) || m.getElementsByName(S)[0];
						if (D) return D;
						if ("function" == typeof m.createTreeWalker && m.body && "function" == typeof m.body.attachShadow) {
							const M = m.createTreeWalker(m.body, NodeFilter.SHOW_ELEMENT);
							let j = M.currentNode;
							for (; j;) {
								const De = j.shadowRoot;
								if (De) {
									const ke = De.getElementById(S) || De.querySelector(`[name="${S}"]`);
									if (ke) return ke
								}
								j = M.nextNode()
							}
						}
						return null
					}(this.document, S);
					D && (this.scrollToElement(D), D.focus())
				}
				setHistoryScrollRestoration(S) {
					this.supportsScrolling() && (this.window.history.scrollRestoration = S)
				}
				scrollToElement(S) {
					const D = S.getBoundingClientRect(),
						M = D.left + this.window.pageXOffset,
						j = D.top + this.window.pageYOffset,
						De = this.offset();
					this.window.scrollTo(M - De[0], j - De[1])
				}
				supportsScrolling() {
					try {
						return !!this.window && !!this.window.scrollTo && "pageXOffset" in this.window
					} catch {
						return !1
					}
				}
			}
			class ms {}
			const Yn = m => m.src,
				er = new l.OlP("ImageLoader", {
					providedIn: "root",
					factory: () => Yn
				}),
				Ds = new l.OlP("NG_OPTIMIZED_PRELOADED_IMAGES", {
					providedIn: "root",
					factory: () => new Set
				});
			let or = (() => {
				class m {
					constructor() {
						this.preloadedImages = (0, l.f3M)(Ds), this.document = (0, l.f3M)(K)
					}
					createPreloadLinkTag(D, M, j, De) {
						if (this.preloadedImages.has(M)) return;
						this.preloadedImages.add(M);
						const ke = D.createElement("link");
						D.setAttribute(ke, "as", "image"), D.setAttribute(ke, "href", M), D.setAttribute(ke, "rel", "preload"), D.setAttribute(ke, "fetchpriority", "high"), De && D.setAttribute(ke, "imageSizes", De), j && D.setAttribute(ke, "imageSrcset", j), D.appendChild(this.document.head, ke)
					}
					static #e = this.\u0275fac = function(M) {
						return new(M || m)
					};
					static #t = this.\u0275prov = l.Yz7({
						token: m,
						factory: m.\u0275fac,
						providedIn: "root"
					})
				}
				return m
			})();
			const Tr = /^((\s*\d+w\s*(,|$)){1,})$/,
				Es = [1, 2],
				sr = {
					breakpoints: [16, 32, 48, 64, 96, 128, 256, 384, 640, 750, 828, 1080, 1200, 1920, 2048, 3840]
				},
				ar = new l.OlP("ImageConfig", {
					providedIn: "root",
					factory: () => sr
				});
			let Or = (() => {
				class m {
					constructor() {
						this.imageLoader = (0, l.f3M)(er), this.config = function Pr(m) {
							let S = {};
							return m.breakpoints && (S.breakpoints = m.breakpoints.sort((D, M) => D - M)), Object.assign({}, sr, m, S)
						}((0, l.f3M)(ar)), this.renderer = (0, l.f3M)(l.Qsj), this.imgElement = (0, l.f3M)(l.SBq).nativeElement, this.injector = (0, l.f3M)(l.zs3), this.isServer = ki((0, l.f3M)(l.Lbi)), this.preloadLinkCreator = (0, l.f3M)(or), this.lcpObserver = null, this._renderedSrc = null, this.priority = !1, this.disableOptimizedSrcset = !1, this.fill = !1
					}
					ngOnInit() {
						this.setHostAttributes()
					}
					setHostAttributes() {
						this.fill ? this.sizes || (this.sizes = "100vw") : (this.setHostAttribute("width", this.width.toString()), this.setHostAttribute("height", this.height.toString())), this.setHostAttribute("loading", this.getLoadingBehavior()), this.setHostAttribute("fetchpriority", this.getFetchPriority()), this.setHostAttribute("ng-img", "true");
						const D = this.updateSrcAndSrcset();
						this.sizes && this.setHostAttribute("sizes", this.sizes), this.isServer && this.priority && this.preloadLinkCreator.createPreloadLinkTag(this.renderer, this.getRewrittenSrc(), D, this.sizes)
					}
					ngOnChanges(D) {
						if (D.ngSrc && !D.ngSrc.isFirstChange()) {
							const M = this._renderedSrc;
							this.updateSrcAndSrcset(!0);
							const j = this._renderedSrc;
							null !== this.lcpObserver && M && j && M !== j && this.injector.get(l.R0b).runOutsideAngular(() => {
								this.lcpObserver?.updateImage(M, j)
							})
						}
					}
					callImageLoader(D) {
						let M = D;
						return this.loaderParams && (M.loaderParams = this.loaderParams), this.imageLoader(M)
					}
					getLoadingBehavior() {
						return this.priority || void 0 === this.loading ? this.priority ? "eager" : "lazy" : this.loading
					}
					getFetchPriority() {
						return this.priority ? "high" : "auto"
					}
					getRewrittenSrc() {
						return this._renderedSrc || (this._renderedSrc = this.callImageLoader({
							src: this.ngSrc
						})), this._renderedSrc
					}
					getRewrittenSrcset() {
						const D = Tr.test(this.ngSrcset);
						return this.ngSrcset.split(",").filter(j => "" !== j).map(j => {
							j = j.trim();
							const De = D ? parseFloat(j) : parseFloat(j) * this.width;
							return `${this.callImageLoader({src:this.ngSrc,width:De})} ${j}`
						}).join(", ")
					}
					getAutomaticSrcset() {
						return this.sizes ? this.getResponsiveSrcset() : this.getFixedSrcset()
					}
					getResponsiveSrcset() {
						const {
							breakpoints: D
						} = this.config;
						let M = D;
						return "100vw" === this.sizes?.trim() && (M = D.filter(De => De >= 640)), M.map(De => `${this.callImageLoader({src:this.ngSrc,width:De})} ${De}w`).join(", ")
					}
					updateSrcAndSrcset(D = !1) {
						D && (this._renderedSrc = null);
						const M = this.getRewrittenSrc();
						let j;
						return this.setHostAttribute("src", M), this.ngSrcset ? j = this.getRewrittenSrcset() : this.shouldGenerateAutomaticSrcset() && (j = this.getAutomaticSrcset()), j && this.setHostAttribute("srcset", j), j
					}
					getFixedSrcset() {
						return Es.map(M => `${this.callImageLoader({src:this.ngSrc,width:this.width*M})} ${M}x`).join(", ")
					}
					shouldGenerateAutomaticSrcset() {
						let D = !1;
						return this.sizes || (D = this.width > 1920 || this.height > 1080), !this.disableOptimizedSrcset && !this.srcset && this.imageLoader !== Yn && !D
					}
					ngOnDestroy() {}
					setHostAttribute(D, M) {
						this.renderer.setAttribute(this.imgElement, D, M)
					}
					static #e = this.\u0275fac = function(M) {
						return new(M || m)
					};
					static #t = this.\u0275dir = l.lG2({
						type: m,
						selectors: [
							["img", "ngSrc", ""]
						],
						hostVars: 8,
						hostBindings: function(M, j) {
							2 & M && l.Udp("position", j.fill ? "absolute" : null)("width", j.fill ? "100%" : null)("height", j.fill ? "100%" : null)("inset", j.fill ? "0px" : null)
						},
						inputs: {
							ngSrc: ["ngSrc", "ngSrc", xs],
							ngSrcset: "ngSrcset",
							sizes: "sizes",
							width: ["width", "width", l.Cb_],
							height: ["height", "height", l.Cb_],
							loading: "loading",
							priority: ["priority", "priority", l.VuI],
							loaderParams: "loaderParams",
							disableOptimizedSrcset: ["disableOptimizedSrcset", "disableOptimizedSrcset", l.VuI],
							fill: ["fill", "fill", l.VuI],
							src: "src",
							srcset: "srcset"
						},
						standalone: !0,
						features: [l.Xq5, l.TTD]
					})
				}
				return m
			})();

			function xs(m) {
				return "string" == typeof m ? m : (0, l.z3N)(m)
			}
		},
		9862: (Ge, re, v) => {
			v.d(re, {
				JF: () => le,
				WM: () => Ne,
				Zn: () => Mn,
				aW: () => Yt,
				dh: () => $e,
				dt: () => wn,
				eN: () => ve,
				h_: () => si,
				jN: () => xe
			});
			var l = v(5879),
				O = v(2096),
				F = v(7715),
				h = v(5592),
				B = v(6328),
				K = v(2181),
				ne = v(7398),
				ae = v(4716),
				ie = v(4664),
				te = v(9397),
				Q = v(1374),
				de = v(6814);
			class ye {}
			class xe {}
			class Ne {
				constructor(G) {
					this.normalizedNames = new Map, this.lazyUpdate = null, G ? "string" == typeof G ? this.lazyInit = () => {
						this.headers = new Map, G.split("\n").forEach(J => {
							const Oe = J.indexOf(":");
							if (Oe > 0) {
								const Je = J.slice(0, Oe),
									ot = Je.toLowerCase(),
									et = J.slice(Oe + 1).trim();
								this.maybeSetNormalizedName(Je, ot), this.headers.has(ot) ? this.headers.get(ot).push(et) : this.headers.set(ot, [et])
							}
						})
					} : typeof Headers < "u" && G instanceof Headers ? (this.headers = new Map, G.forEach((J, Oe) => {
						this.setHeaderEntries(Oe, J)
					})) : this.lazyInit = () => {
						this.headers = new Map, Object.entries(G).forEach(([J, Oe]) => {
							this.setHeaderEntries(J, Oe)
						})
					} : this.headers = new Map
				}
				has(G) {
					return this.init(), this.headers.has(G.toLowerCase())
				}
				get(G) {
					this.init();
					const J = this.headers.get(G.toLowerCase());
					return J && J.length > 0 ? J[0] : null
				}
				keys() {
					return this.init(), Array.from(this.normalizedNames.values())
				}
				getAll(G) {
					return this.init(), this.headers.get(G.toLowerCase()) || null
				}
				append(G, J) {
					return this.clone({
						name: G,
						value: J,
						op: "a"
					})
				}
				set(G, J) {
					return this.clone({
						name: G,
						value: J,
						op: "s"
					})
				}
				delete(G, J) {
					return this.clone({
						name: G,
						value: J,
						op: "d"
					})
				}
				maybeSetNormalizedName(G, J) {
					this.normalizedNames.has(J) || this.normalizedNames.set(J, G)
				}
				init() {
					this.lazyInit && (this.lazyInit instanceof Ne ? this.copyFrom(this.lazyInit) : this.lazyInit(), this.lazyInit = null, this.lazyUpdate && (this.lazyUpdate.forEach(G => this.applyUpdate(G)), this.lazyUpdate = null))
				}
				copyFrom(G) {
					G.init(), Array.from(G.headers.keys()).forEach(J => {
						this.headers.set(J, G.headers.get(J)), this.normalizedNames.set(J, G.normalizedNames.get(J))
					})
				}
				clone(G) {
					const J = new Ne;
					return J.lazyInit = this.lazyInit && this.lazyInit instanceof Ne ? this.lazyInit : this, J.lazyUpdate = (this.lazyUpdate || []).concat([G]), J
				}
				applyUpdate(G) {
					const J = G.name.toLowerCase();
					switch (G.op) {
						case "a":
						case "s":
							let Oe = G.value;
							if ("string" == typeof Oe && (Oe = [Oe]), 0 === Oe.length) return;
							this.maybeSetNormalizedName(G.name, J);
							const Je = ("a" === G.op ? this.headers.get(J) : void 0) || [];
							Je.push(...Oe), this.headers.set(J, Je);
							break;
						case "d":
							const ot = G.value;
							if (ot) {
								let et = this.headers.get(J);
								if (!et) return;
								et = et.filter(vt => -1 === ot.indexOf(vt)), 0 === et.length ? (this.headers.delete(J), this.normalizedNames.delete(J)) : this.headers.set(J, et)
							} else this.headers.delete(J), this.normalizedNames.delete(J)
					}
				}
				setHeaderEntries(G, J) {
					const Oe = (Array.isArray(J) ? J : [J]).map(ot => ot.toString()),
						Je = G.toLowerCase();
					this.headers.set(Je, Oe), this.maybeSetNormalizedName(G, Je)
				}
				forEach(G) {
					this.init(), Array.from(this.normalizedNames.keys()).forEach(J => G(this.normalizedNames.get(J), this.headers.get(J)))
				}
			}
			class ge {
				encodeKey(G) {
					return ce(G)
				}
				encodeValue(G) {
					return ce(G)
				}
				decodeKey(G) {
					return decodeURIComponent(G)
				}
				decodeValue(G) {
					return decodeURIComponent(G)
				}
			}
			const lt = /%(\d[a-f0-9])/gi,
				qe = {
					40: "@",
					"3A": ":",
					24: "$",
					"2C": ",",
					"3B": ";",
					"3D": "=",
					"3F": "?",
					"2F": "/"
				};

			function ce(X) {
				return encodeURIComponent(X).replace(lt, (G, J) => qe[J] ?? G)
			}

			function $(X) {
				return `${X}`
			}
			class Ie {
				constructor(G = {}) {
					if (this.updates = null, this.cloneFrom = null, this.encoder = G.encoder || new ge, G.fromString) {
						if (G.fromObject) throw new Error("Cannot specify both fromString and fromObject.");
						this.map = function it(X, G) {
							const J = new Map;
							return X.length > 0 && X.replace(/^\?/, "").split("&").forEach(Je => {
								const ot = Je.indexOf("="),
									[et, vt] = -1 == ot ? [G.decodeKey(Je), ""] : [G.decodeKey(Je.slice(0, ot)), G.decodeValue(Je.slice(ot + 1))],
									Rt = J.get(et) || [];
								Rt.push(vt), J.set(et, Rt)
							}), J
						}(G.fromString, this.encoder)
					} else G.fromObject ? (this.map = new Map, Object.keys(G.fromObject).forEach(J => {
						const Oe = G.fromObject[J],
							Je = Array.isArray(Oe) ? Oe.map($) : [$(Oe)];
						this.map.set(J, Je)
					})) : this.map = null
				}
				has(G) {
					return this.init(), this.map.has(G)
				}
				get(G) {
					this.init();
					const J = this.map.get(G);
					return J ? J[0] : null
				}
				getAll(G) {
					return this.init(), this.map.get(G) || null
				}
				keys() {
					return this.init(), Array.from(this.map.keys())
				}
				append(G, J) {
					return this.clone({
						param: G,
						value: J,
						op: "a"
					})
				}
				appendAll(G) {
					const J = [];
					return Object.keys(G).forEach(Oe => {
						const Je = G[Oe];
						Array.isArray(Je) ? Je.forEach(ot => {
							J.push({
								param: Oe,
								value: ot,
								op: "a"
							})
						}) : J.push({
							param: Oe,
							value: Je,
							op: "a"
						})
					}), this.clone(J)
				}
				set(G, J) {
					return this.clone({
						param: G,
						value: J,
						op: "s"
					})
				}
				delete(G, J) {
					return this.clone({
						param: G,
						value: J,
						op: "d"
					})
				}
				toString() {
					return this.init(), this.keys().map(G => {
						const J = this.encoder.encodeKey(G);
						return this.map.get(G).map(Oe => J + "=" + this.encoder.encodeValue(Oe)).join("&")
					}).filter(G => "" !== G).join("&")
				}
				clone(G) {
					const J = new Ie({
						encoder: this.encoder
					});
					return J.cloneFrom = this.cloneFrom || this, J.updates = (this.updates || []).concat(G), J
				}
				init() {
					null === this.map && (this.map = new Map), null !== this.cloneFrom && (this.cloneFrom.init(), this.cloneFrom.keys().forEach(G => this.map.set(G, this.cloneFrom.map.get(G))), this.updates.forEach(G => {
						switch (G.op) {
							case "a":
							case "s":
								const J = ("a" === G.op ? this.map.get(G.param) : void 0) || [];
								J.push($(G.value)), this.map.set(G.param, J);
								break;
							case "d":
								if (void 0 === G.value) {
									this.map.delete(G.param);
									break
								} {
									let Oe = this.map.get(G.param) || [];
									const Je = Oe.indexOf($(G.value)); - 1 !== Je && Oe.splice(Je, 1), Oe.length > 0 ? this.map.set(G.param, Oe) : this.map.delete(G.param)
								}
						}
					}), this.cloneFrom = this.updates = null)
				}
			}
			class ue {
				constructor() {
					this.map = new Map
				}
				set(G, J) {
					return this.map.set(G, J), this
				}
				get(G) {
					return this.map.has(G) || this.map.set(G, G.defaultValue()), this.map.get(G)
				}
				delete(G) {
					return this.map.delete(G), this
				}
				has(G) {
					return this.map.has(G)
				}
				keys() {
					return this.map.keys()
				}
			}

			function We(X) {
				return typeof ArrayBuffer < "u" && X instanceof ArrayBuffer
			}

			function rt(X) {
				return typeof Blob < "u" && X instanceof Blob
			}

			function Ot(X) {
				return typeof FormData < "u" && X instanceof FormData
			}
			class Yt {
				constructor(G, J, Oe, Je) {
					let ot;
					if (this.url = J, this.body = null, this.reportProgress = !1, this.withCredentials = !1, this.responseType = "json", this.method = G.toUpperCase(), function Ae(X) {
							switch (X) {
								case "DELETE":
								case "GET":
								case "HEAD":
								case "OPTIONS":
								case "JSONP":
									return !1;
								default:
									return !0
							}
						}(this.method) || Je ? (this.body = void 0 !== Oe ? Oe : null, ot = Je) : ot = Oe, ot && (this.reportProgress = !!ot.reportProgress, this.withCredentials = !!ot.withCredentials, ot.responseType && (this.responseType = ot.responseType), ot.headers && (this.headers = ot.headers), ot.context && (this.context = ot.context), ot.params && (this.params = ot.params)), this.headers || (this.headers = new Ne), this.context || (this.context = new ue), this.params) {
						const et = this.params.toString();
						if (0 === et.length) this.urlWithParams = J;
						else {
							const vt = J.indexOf("?");
							this.urlWithParams = J + (-1 === vt ? "?" : vt < J.length - 1 ? "&" : "") + et
						}
					} else this.params = new Ie, this.urlWithParams = J
				}
				serializeBody() {
					return null === this.body ? null : We(this.body) || rt(this.body) || Ot(this.body) || function wt(X) {
						return typeof URLSearchParams < "u" && X instanceof URLSearchParams
					}(this.body) || "string" == typeof this.body ? this.body : this.body instanceof Ie ? this.body.toString() : "object" == typeof this.body || "boolean" == typeof this.body || Array.isArray(this.body) ? JSON.stringify(this.body) : this.body.toString()
				}
				detectContentTypeHeader() {
					return null === this.body || Ot(this.body) ? null : rt(this.body) ? this.body.type || null : We(this.body) ? null : "string" == typeof this.body ? "text/plain" : this.body instanceof Ie ? "application/x-www-form-urlencoded;charset=UTF-8" : "object" == typeof this.body || "number" == typeof this.body || "boolean" == typeof this.body ? "application/json" : null
				}
				clone(G = {}) {
					const J = G.method || this.method,
						Oe = G.url || this.url,
						Je = G.responseType || this.responseType,
						ot = void 0 !== G.body ? G.body : this.body,
						et = void 0 !== G.withCredentials ? G.withCredentials : this.withCredentials,
						vt = void 0 !== G.reportProgress ? G.reportProgress : this.reportProgress;
					let Rt = G.headers || this.headers,
						Tn = G.params || this.params;
					const hi = G.context ?? this.context;
					return void 0 !== G.setHeaders && (Rt = Object.keys(G.setHeaders).reduce((Bn, on) => Bn.set(on, G.setHeaders[on]), Rt)), G.setParams && (Tn = Object.keys(G.setParams).reduce((Bn, on) => Bn.set(on, G.setParams[on]), Tn)), new Yt(J, Oe, ot, {
						params: Tn,
						headers: Rt,
						context: hi,
						reportProgress: vt,
						responseType: Je,
						withCredentials: et
					})
				}
			}
			var wn = function(X) {
				return X[X.Sent = 0] = "Sent", X[X.UploadProgress = 1] = "UploadProgress", X[X.ResponseHeader = 2] = "ResponseHeader", X[X.DownloadProgress = 3] = "DownloadProgress", X[X.Response = 4] = "Response", X[X.User = 5] = "User", X
			}(wn || {});
			class Un {
				constructor(G, J = 200, Oe = "OK") {
					this.headers = G.headers || new Ne, this.status = void 0 !== G.status ? G.status : J, this.statusText = G.statusText || Oe, this.url = G.url || null, this.ok = this.status >= 200 && this.status < 300
				}
			}
			class Qt extends Un {
				constructor(G = {}) {
					super(G), this.type = wn.ResponseHeader
				}
				clone(G = {}) {
					return new Qt({
						headers: G.headers || this.headers,
						status: void 0 !== G.status ? G.status : this.status,
						statusText: G.statusText || this.statusText,
						url: G.url || this.url || void 0
					})
				}
			}
			class Mn extends Un {
				constructor(G = {}) {
					super(G), this.type = wn.Response, this.body = void 0 !== G.body ? G.body : null
				}
				clone(G = {}) {
					return new Mn({
						body: void 0 !== G.body ? G.body : this.body,
						headers: G.headers || this.headers,
						status: void 0 !== G.status ? G.status : this.status,
						statusText: G.statusText || this.statusText,
						url: G.url || this.url || void 0
					})
				}
			}
			class Ee extends Un {
				constructor(G) {
					super(G, 0, "Unknown Error"), this.name = "HttpErrorResponse", this.ok = !1, this.message = this.status >= 200 && this.status < 300 ? `Http failure during parsing for ${G.url||"(unknown url)"}` : `Http failure response for ${G.url||"(unknown url)"}: ${G.status} ${G.statusText}`, this.error = G.error || null
				}
			}

			function we(X, G) {
				return {
					body: G,
					headers: X.headers,
					context: X.context,
					observe: X.observe,
					params: X.params,
					reportProgress: X.reportProgress,
					responseType: X.responseType,
					withCredentials: X.withCredentials
				}
			}
			let ve = (() => {
				class X {
					constructor(J) {
						this.handler = J
					}
					request(J, Oe, Je = {}) {
						let ot;
						if (J instanceof Yt) ot = J;
						else {
							let Rt, Tn;
							Rt = Je.headers instanceof Ne ? Je.headers : new Ne(Je.headers), Je.params && (Tn = Je.params instanceof Ie ? Je.params : new Ie({
								fromObject: Je.params
							})), ot = new Yt(J, Oe, void 0 !== Je.body ? Je.body : null, {
								headers: Rt,
								context: Je.context,
								params: Tn,
								reportProgress: Je.reportProgress,
								responseType: Je.responseType || "json",
								withCredentials: Je.withCredentials
							})
						}
						const et = (0, O.of)(ot).pipe((0, B.b)(Rt => this.handler.handle(Rt)));
						if (J instanceof Yt || "events" === Je.observe) return et;
						const vt = et.pipe((0, K.h)(Rt => Rt instanceof Mn));
						switch (Je.observe || "body") {
							case "body":
								switch (ot.responseType) {
									case "arraybuffer":
										return vt.pipe((0, ne.U)(Rt => {
											if (null !== Rt.body && !(Rt.body instanceof ArrayBuffer)) throw new Error("Response is not an ArrayBuffer.");
											return Rt.body
										}));
									case "blob":
										return vt.pipe((0, ne.U)(Rt => {
											if (null !== Rt.body && !(Rt.body instanceof Blob)) throw new Error("Response is not a Blob.");
											return Rt.body
										}));
									case "text":
										return vt.pipe((0, ne.U)(Rt => {
											if (null !== Rt.body && "string" != typeof Rt.body) throw new Error("Response is not a string.");
											return Rt.body
										}));
									default:
										return vt.pipe((0, ne.U)(Rt => Rt.body))
								}
							case "response":
								return vt;
							default:
								throw new Error(`Unreachable: unhandled observe type ${Je.observe}}`)
						}
					}
					delete(J, Oe = {}) {
						return this.request("DELETE", J, Oe)
					}
					get(J, Oe = {}) {
						return this.request("GET", J, Oe)
					}
					head(J, Oe = {}) {
						return this.request("HEAD", J, Oe)
					}
					jsonp(J, Oe) {
						return this.request("JSONP", J, {
							params: (new Ie).append(Oe, "JSONP_CALLBACK"),
							observe: "body",
							responseType: "json"
						})
					}
					options(J, Oe = {}) {
						return this.request("OPTIONS", J, Oe)
					}
					patch(J, Oe, Je = {}) {
						return this.request("PATCH", J, we(Je, Oe))
					}
					post(J, Oe, Je = {}) {
						return this.request("POST", J, we(Je, Oe))
					}
					put(J, Oe, Je = {}) {
						return this.request("PUT", J, we(Je, Oe))
					}
					static #e = this.\u0275fac = function(Oe) {
						return new(Oe || X)(l.LFG(ye))
					};
					static #t = this.\u0275prov = l.Yz7({
						token: X,
						factory: X.\u0275fac
					})
				}
				return X
			})();

			function Ze(X, G) {
				return G(X)
			}

			function nt(X, G) {
				return (J, Oe) => G.intercept(J, {
					handle: Je => X(Je, Oe)
				})
			}
			const _t = new l.OlP(""),
				gt = new l.OlP(""),
				Dt = new l.OlP("");

			function an() {
				let X = null;
				return (G, J) => {
					null === X && (X = ((0, l.f3M)(_t, {
						optional: !0
					}) ?? []).reduceRight(nt, Ze));
					const Oe = (0, l.f3M)(l.HDt),
						Je = Oe.add();
					return X(G, J).pipe((0, ae.x)(() => Oe.remove(Je)))
				}
			}
			let tn = (() => {
				class X extends ye {
					constructor(J, Oe) {
						super(), this.backend = J, this.injector = Oe, this.chain = null, this.pendingTasks = (0, l.f3M)(l.HDt)
					}
					handle(J) {
						if (null === this.chain) {
							const Je = Array.from(new Set([...this.injector.get(gt), ...this.injector.get(Dt, [])]));
							this.chain = Je.reduceRight((ot, et) => function mt(X, G, J) {
								return (Oe, Je) => J.runInContext(() => G(Oe, ot => X(ot, Je)))
							}(ot, et, this.injector), Ze)
						}
						const Oe = this.pendingTasks.add();
						return this.chain(J, Je => this.backend.handle(Je)).pipe((0, ae.x)(() => this.pendingTasks.remove(Oe)))
					}
					static #e = this.\u0275fac = function(Oe) {
						return new(Oe || X)(l.LFG(xe), l.LFG(l.lqb))
					};
					static #t = this.\u0275prov = l.Yz7({
						token: X,
						factory: X.\u0275fac
					})
				}
				return X
			})();
			const Pt = /^\)\]\}',?\n/;
			let bt = (() => {
				class X {
					constructor(J) {
						this.xhrFactory = J
					}
					handle(J) {
						if ("JSONP" === J.method) throw new l.vHH(-2800, !1);
						const Oe = this.xhrFactory;
						return (Oe.\u0275loadImpl ? (0, F.D)(Oe.\u0275loadImpl()) : (0, O.of)(null)).pipe((0, ie.w)(() => new h.y(ot => {
							const et = Oe.build();
							if (et.open(J.method, J.urlWithParams), J.withCredentials && (et.withCredentials = !0), J.headers.forEach((un, dn) => et.setRequestHeader(un, dn.join(","))), J.headers.has("Accept") || et.setRequestHeader("Accept", "application/json, text/plain, */*"), !J.headers.has("Content-Type")) {
								const un = J.detectContentTypeHeader();
								null !== un && et.setRequestHeader("Content-Type", un)
							}
							if (J.responseType) {
								const un = J.responseType.toLowerCase();
								et.responseType = "json" !== un ? un : "text"
							}
							const vt = J.serializeBody();
							let Rt = null;
							const Tn = () => {
									if (null !== Rt) return Rt;
									const un = et.statusText || "OK",
										dn = new Ne(et.getAllResponseHeaders()),
										Di = function ht(X) {
											return "responseURL" in X && X.responseURL ? X.responseURL : /^X-Request-URL:/m.test(X.getAllResponseHeaders()) ? X.getResponseHeader("X-Request-URL") : null
										}(et) || J.url;
									return Rt = new Qt({
										headers: dn,
										status: et.status,
										statusText: un,
										url: Di
									}), Rt
								},
								hi = () => {
									let {
										headers: un,
										status: dn,
										statusText: Di,
										url: pi
									} = Tn(), Xt = null;
									204 !== dn && (Xt = typeof et.response > "u" ? et.responseText : et.response), 0 === dn && (dn = Xt ? 200 : 0);
									let Ni = dn >= 200 && dn < 300;
									if ("json" === J.responseType && "string" == typeof Xt) {
										const ci = Xt;
										Xt = Xt.replace(Pt, "");
										try {
											Xt = "" !== Xt ? JSON.parse(Xt) : null
										} catch ($n) {
											Xt = ci, Ni && (Ni = !1, Xt = {
												error: $n,
												text: Xt
											})
										}
									}
									Ni ? (ot.next(new Mn({
										body: Xt,
										headers: un,
										status: dn,
										statusText: Di,
										url: pi || void 0
									})), ot.complete()) : ot.error(new Ee({
										error: Xt,
										headers: un,
										status: dn,
										statusText: Di,
										url: pi || void 0
									}))
								},
								Bn = un => {
									const {
										url: dn
									} = Tn(), Di = new Ee({
										error: un,
										status: et.status || 0,
										statusText: et.statusText || "Unknown Error",
										url: dn || void 0
									});
									ot.error(Di)
								};
							let on = !1;
							const Ri = un => {
									on || (ot.next(Tn()), on = !0);
									let dn = {
										type: wn.DownloadProgress,
										loaded: un.loaded
									};
									un.lengthComputable && (dn.total = un.total), "text" === J.responseType && et.responseText && (dn.partialText = et.responseText), ot.next(dn)
								},
								ai = un => {
									let dn = {
										type: wn.UploadProgress,
										loaded: un.loaded
									};
									un.lengthComputable && (dn.total = un.total), ot.next(dn)
								};
							return et.addEventListener("load", hi), et.addEventListener("error", Bn), et.addEventListener("timeout", Bn), et.addEventListener("abort", Bn), J.reportProgress && (et.addEventListener("progress", Ri), null !== vt && et.upload && et.upload.addEventListener("progress", ai)), et.send(vt), ot.next({
								type: wn.Sent
							}), () => {
								et.removeEventListener("error", Bn), et.removeEventListener("abort", Bn), et.removeEventListener("load", hi), et.removeEventListener("timeout", Bn), J.reportProgress && (et.removeEventListener("progress", Ri), null !== vt && et.upload && et.upload.removeEventListener("progress", ai)), et.readyState !== et.DONE && et.abort()
							}
						})))
					}
					static #e = this.\u0275fac = function(Oe) {
						return new(Oe || X)(l.LFG(de.JF))
					};
					static #t = this.\u0275prov = l.Yz7({
						token: X,
						factory: X.\u0275fac
					})
				}
				return X
			})();
			const yt = new l.OlP("XSRF_ENABLED"),
				Et = new l.OlP("XSRF_COOKIE_NAME", {
					providedIn: "root",
					factory: () => "XSRF-TOKEN"
				}),
				nn = new l.OlP("XSRF_HEADER_NAME", {
					providedIn: "root",
					factory: () => "X-XSRF-TOKEN"
				});
			class fn {}
			let Ln = (() => {
				class X {
					constructor(J, Oe, Je) {
						this.doc = J, this.platform = Oe, this.cookieName = Je, this.lastCookieString = "", this.lastToken = null, this.parseCount = 0
					}
					getToken() {
						if ("server" === this.platform) return null;
						const J = this.doc.cookie || "";
						return J !== this.lastCookieString && (this.parseCount++, this.lastToken = (0, de.Mx)(J, this.cookieName), this.lastCookieString = J), this.lastToken
					}
					static #e = this.\u0275fac = function(Oe) {
						return new(Oe || X)(l.LFG(de.K0), l.LFG(l.Lbi), l.LFG(Et))
					};
					static #t = this.\u0275prov = l.Yz7({
						token: X,
						factory: X.\u0275fac
					})
				}
				return X
			})();

			function yn(X, G) {
				const J = X.url.toLowerCase();
				if (!(0, l.f3M)(yt) || "GET" === X.method || "HEAD" === X.method || J.startsWith("http://") || J.startsWith("https://")) return G(X);
				const Oe = (0, l.f3M)(fn).getToken(),
					Je = (0, l.f3M)(nn);
				return null != Oe && !X.headers.has(Je) && (X = X.clone({
					headers: X.headers.set(Je, Oe)
				})), G(X)
			}
			var pn = function(X) {
				return X[X.Interceptors = 0] = "Interceptors", X[X.LegacyInterceptors = 1] = "LegacyInterceptors", X[X.CustomXsrfConfiguration = 2] = "CustomXsrfConfiguration", X[X.NoXsrfProtection = 3] = "NoXsrfProtection", X[X.JsonpSupport = 4] = "JsonpSupport", X[X.RequestsMadeViaParent = 5] = "RequestsMadeViaParent", X[X.Fetch = 6] = "Fetch", X
			}(pn || {});

			function si(...X) {
				const G = [ve, bt, tn, {
					provide: ye,
					useExisting: tn
				}, {
					provide: xe,
					useExisting: bt
				}, {
					provide: gt,
					useValue: yn,
					multi: !0
				}, {
					provide: yt,
					useValue: !0
				}, {
					provide: fn,
					useClass: Ln
				}];
				for (const J of X) G.push(...J.\u0275providers);
				return (0, l.MR2)(G)
			}
			const vn = new l.OlP("LEGACY_INTERCEPTOR_FN");

			function In() {
				return function xn(X, G) {
					return {
						\u0275kind: X,
						\u0275providers: G
					}
				}(pn.LegacyInterceptors, [{
					provide: vn,
					useFactory: an
				}, {
					provide: gt,
					useExisting: vn,
					multi: !0
				}])
			}
			let le = (() => {
				class X {
					static #e = this.\u0275fac = function(Oe) {
						return new(Oe || X)
					};
					static #t = this.\u0275mod = l.oAB({
						type: X
					});
					static #n = this.\u0275inj = l.cJS({
						providers: [si(In())]
					})
				}
				return X
			})();
			const Ct = new l.OlP(""),
				se = ["GET", "HEAD"];

			function ee(X, G) {
				const {
					isCacheActive: J
				} = (0, l.f3M)(Ct);
				if (!J || !se.includes(X.method)) return G(X);
				const Oe = (0, l.f3M)(l.kie),
					Je = function Z(X) {
						const {
							params: G,
							method: J,
							responseType: Oe,
							url: Je
						} = X, vt = function _e(X) {
							let G = 0;
							for (const J of X) G = Math.imul(31, G) + J.charCodeAt(0) << 0;
							return G += 2147483648, G.toString()
						}(J + "." + Oe + "." + Je + "?" + G.keys().sort().map(Rt => `${Rt}=${G.getAll(Rt)}`).join("&"));
						return (0, l.Cb6)(vt)
					}(X),
					ot = Oe.get(Je, null);
				if (ot) {
					let et = ot.body;
					switch (ot.responseType) {
						case "arraybuffer":
							et = (new TextEncoder).encode(ot.body).buffer;
							break;
						case "blob":
							et = new Blob([ot.body])
					}
					return (0, O.of)(new Mn({
						body: et,
						headers: new Ne(ot.headers),
						status: ot.status,
						statusText: ot.statusText,
						url: ot.url
					}))
				}
				return G(X).pipe((0, te.b)(et => {
					et instanceof Mn && Oe.set(Je, {
						body: et.body,
						headers: k(et.headers),
						status: et.status,
						statusText: et.statusText,
						url: et.url || "",
						responseType: X.responseType
					})
				}))
			}

			function k(X) {
				const G = {};
				for (const J of X.keys()) {
					const Oe = X.getAll(J);
					null !== Oe && (G[J] = Oe)
				}
				return G
			}

			function $e() {
				return [{
					provide: Ct,
					useFactory: () => ((0, l.f3M)(l.DRi).add("httpcache"), {
						isCacheActive: !0
					})
				}, {
					provide: Dt,
					useValue: ee,
					multi: !0,
					deps: [l.kie, Ct]
				}, {
					provide: l.tb,
					multi: !0,
					useFactory: () => {
						const X = (0, l.f3M)(l.z2F),
							G = (0, l.f3M)(Ct);
						return () => {
							X.isStable.pipe((0, Q.P)(J => J)).toPromise().then(() => {
								G.isCacheActive = !1
							})
						}
					}
				}]
			}
		},
		5879: (Ge, re, v) => {
			v.d(re, {
				$8M: () => uu,
				$WT: () => Co,
				$Z: () => Mp,
				AFp: () => Vh,
				ALo: () => a_,
				AaK: () => ye,
				AsE: () => $d,
				BQk: () => Ll,
				CHM: () => Ys,
				CRH: () => M_,
				Cb6: () => yy,
				Cb_: () => VM,
				DRi: () => $h,
				DdM: () => Xg,
				Dn7: () => u_,
				EGt: () => jM,
				EJc: () => Aw,
				EiD: () => Ah,
				EpF: () => _m,
				F$t: () => Cm,
				F4k: () => vm,
				FYo: () => Qh,
				FiY: () => Qc,
				Gf: () => C_,
				GfV: () => Xh,
				GkF: () => Od,
				Gpc: () => Ye,
				Gre: () => tg,
				HDt: () => Y_,
				Hsn: () => wm,
				Ikx: () => Gd,
				JOm: () => ol,
				JVY: () => $b,
				JZr: () => ce,
				Jf7: () => lp,
				KtG: () => Ya,
				L6k: () => Gb,
				LAX: () => Yb,
				LFG: () => se,
				LSH: () => ku,
				Lbi: () => $u,
				Lck: () => DC,
				MAs: () => pm,
				MGl: () => Bl,
				MMx: () => zg,
				MR2: () => Lu,
				MT6: () => ng,
				NdJ: () => Rd,
				O4$: () => su,
				Ojb: () => by,
				OlP: () => Mt,
				Oqu: () => zd,
				P3R: () => Rh,
				Q6J: () => Sd,
				QGY: () => Pd,
				QbO: () => vy,
				Qsj: () => ky,
				R0b: () => Oi,
				RDi: () => Lb,
				RIp: () => Fh,
				Rgc: () => Pc,
				SBq: () => pc,
				Sil: () => Rw,
				Suo: () => w_,
				TTD: () => bn,
				TgZ: () => Nl,
				Tol: () => jm,
				Udp: () => Hd,
				VKq: () => Jg,
				VuI: () => UM,
				W1O: () => T_,
				WFA: () => Nd,
				WLB: () => qg,
				X6Q: () => hM,
				XFs: () => H,
				Xpm: () => No,
				Xq5: () => Jp,
				Xts: () => lc,
				Y36: () => _a,
				YKP: () => Ug,
				YNc: () => dm,
				Yjl: () => wi,
				Yz7: () => mt,
				Z0I: () => an,
				ZZ4: () => If,
				_Bn: () => Hg,
				_UZ: () => Ad,
				_Vd: () => hc,
				_uU: () => Wm,
				aQg: () => Sf,
				c2e: () => W_,
				cJS: () => gt,
				cQ8: () => Fd,
				cg1: () => Yd,
				d8E: () => Wd,
				dDg: () => tM,
				dqk: () => ht,
				eBb: () => Wb,
				eJc: () => df,
				ekj: () => Ud,
				eoX: () => q_,
				evT: () => up,
				f3M: () => k,
				g9A: () => zh,
				h0i: () => Bs,
				hGG: () => TM,
				hij: () => Ul,
				iGM: () => E_,
				iPO: () => aM,
				ifc: () => ot,
				jDz: () => $g,
				kL8: () => fg,
				kcU: () => Gc,
				kie: () => uc,
				kuF: () => Ie,
				l5B: () => e_,
				lG2: () => ko,
				lcZ: () => c_,
				lqb: () => _r,
				lri: () => X_,
				mCW: () => hl,
				n5z: () => Nf,
				n_E: () => Wl,
				oAB: () => Eo,
				oJD: () => Oh,
				oxw: () => Em,
				pB0: () => Kb,
				q3G: () => Rs,
				qLn: () => us,
				qOj: () => yd,
				qZA: () => kl,
				qbA: () => t_,
				qzn: () => la,
				rWj: () => J_,
				rg0: () => ke,
				s9C: () => kd,
				sBO: () => pM,
				s_b: () => Zl,
				soG: () => Xl,
				tb: () => Df,
				tp0: () => Xc,
				uIk: () => Ed,
				vHH: () => $,
				vpe: () => vr,
				wAp: () => Aa,
				xi3: () => l_,
				xp6: () => Cp,
				ynx: () => Fl,
				z2F: () => Na,
				z3N: () => zr,
				zSh: () => Hu,
				zs3: () => Go
			});
			var l = v(8645),
				O = v(7394),
				F = v(5592),
				h = v(3019),
				B = v(5619),
				K = v(2096),
				ne = v(3020),
				ae = v(4664),
				ie = v(3997),
				te = v(1374);

			function Q(e) {
				for (let t in e)
					if (e[t] === Q) return t;
				throw Error("Could not find renamed property on target object.")
			}

			function de(e, t) {
				for (const n in t) t.hasOwnProperty(n) && !e.hasOwnProperty(n) && (e[n] = t[n])
			}

			function ye(e) {
				if ("string" == typeof e) return e;
				if (Array.isArray(e)) return "[" + e.map(ye).join(", ") + "]";
				if (null == e) return "" + e;
				if (e.overriddenName) return `${e.overriddenName}`;
				if (e.name) return `${e.name}`;
				const t = e.toString();
				if (null == t) return "" + t;
				const n = t.indexOf("\n");
				return -1 === n ? t : t.substring(0, n)
			}

			function xe(e, t) {
				return null == e || "" === e ? null === t ? "" : t : null == t || "" === t ? e : e + " " + t
			}
			const Ne = Q({
				__forward_ref__: Q
			});

			function Ye(e) {
				return e.__forward_ref__ = Ye, e.toString = function() {
					return ye(this())
				}, e
			}

			function ge(e) {
				return it(e) ? e() : e
			}

			function it(e) {
				return "function" == typeof e && e.hasOwnProperty(Ne) && e.__forward_ref__ === Ye
			}

			function lt(e) {
				return e && !!e.\u0275providers
			}
			const ce = "https://g.co/ng/security#xss";
			class $ extends Error {
				constructor(t, n) {
					super(Ie(t, n)), this.code = t
				}
			}

			function Ie(e, t) {
				return `NG0${Math.abs(e)}${t?": "+t:""}`
			}

			function he(e) {
				return "string" == typeof e ? e : null == e ? "" : String(e)
			}

			function Ot(e, t) {
				throw new $(-201, !1)
			}

			function tt(e, t) {
				null == e && function z(e, t, n, i) {
					throw new Error(`ASSERTION ERROR: ${e}` + (null == i ? "" : ` [Expected=> ${n} ${i} ${t} <=Actual]`))
				}(t, e, null, "!=")
			}

			function mt(e) {
				return {
					token: e.token,
					providedIn: e.providedIn || null,
					factory: e.factory,
					value: void 0
				}
			}

			function gt(e) {
				return {
					providers: e.providers || [],
					imports: e.imports || []
				}
			}

			function Dt(e) {
				return tn(e, Zn) || tn(e, N)
			}

			function an(e) {
				return null !== Dt(e)
			}

			function tn(e, t) {
				return e.hasOwnProperty(t) ? e[t] : null
			}

			function Vn(e) {
				return e && (e.hasOwnProperty(Be) || e.hasOwnProperty(V)) ? e[Be] : null
			}
			const Zn = Q({
					\u0275prov: Q
				}),
				Be = Q({
					\u0275inj: Q
				}),
				N = Q({
					ngInjectableDef: Q
				}),
				V = Q({
					ngInjectorDef: Q
				});
			var H = function(e) {
				return e[e.Default = 0] = "Default", e[e.Host = 1] = "Host", e[e.Self = 2] = "Self", e[e.SkipSelf = 4] = "SkipSelf", e[e.Optional = 8] = "Optional", e
			}(H || {});
			let pe;

			function Ue(e) {
				const t = pe;
				return pe = e, t
			}

			function Xe(e, t, n) {
				const i = Dt(e);
				return i && "root" == i.providedIn ? void 0 === i.value ? i.value = i.factory() : i.value : n & H.Optional ? null : void 0 !== t ? t : void Ot(ye(e))
			}
			const ht = globalThis;
			class Mt {
				constructor(t, n) {
					this._desc = t, this.ngMetadataName = "InjectionToken", this.\u0275prov = void 0, "number" == typeof n ? this.__NG_ELEMENT_ID__ = n : void 0 !== n && (this.\u0275prov = mt({
						token: this,
						providedIn: n.providedIn || "root",
						factory: n.factory
					}))
				}
				get multi() {
					return this
				}
				toString() {
					return `InjectionToken ${this._desc}`
				}
			}
			const vn = {},
				In = "__NG_DI_FLAG__",
				zn = "ngTempTokenPath",
				L = /\n/gm,
				x = "__source";
			let R;

			function Ke(e) {
				const t = R;
				return R = e, t
			}

			function Ct(e, t = H.Default) {
				if (void 0 === R) throw new $(-203, !1);
				return null === R ? Xe(e, void 0, t) : R.get(e, t & H.Optional ? null : void 0, t)
			}

			function se(e, t = H.Default) {
				return (function He() {
					return pe
				}() || Ct)(ge(e), t)
			}

			function k(e, t = H.Default) {
				return se(e, Z(t))
			}

			function Z(e) {
				return typeof e > "u" || "number" == typeof e ? e : 0 | (e.optional && 8) | (e.host && 1) | (e.self && 2) | (e.skipSelf && 4)
			}

			function _e(e) {
				const t = [];
				for (let n = 0; n < e.length; n++) {
					const i = ge(e[n]);
					if (Array.isArray(i)) {
						if (0 === i.length) throw new $(900, !1);
						let o, r = H.Default;
						for (let a = 0; a < i.length; a++) {
							const u = i[a],
								g = X(u);
							"number" == typeof g ? -1 === g ? o = u.token : r |= g : o = u
						}
						t.push(se(o, r))
					} else t.push(se(i))
				}
				return t
			}

			function $e(e, t) {
				return e[In] = t, e.prototype[In] = t, e
			}

			function X(e) {
				return e[In]
			}

			function Oe(e) {
				return {
					toString: e
				}.toString()
			}
			var Je = function(e) {
					return e[e.OnPush = 0] = "OnPush", e[e.Default = 1] = "Default", e
				}(Je || {}),
				ot = function(e) {
					return e[e.Emulated = 0] = "Emulated", e[e.None = 2] = "None", e[e.ShadowDom = 3] = "ShadowDom", e
				}(ot || {});
			const et = {},
				vt = [],
				Rt = Q({
					\u0275cmp: Q
				}),
				Tn = Q({
					\u0275dir: Q
				}),
				hi = Q({
					\u0275pipe: Q
				}),
				Bn = Q({
					\u0275mod: Q
				}),
				on = Q({
					\u0275fac: Q
				}),
				Ri = Q({
					__NG_ELEMENT_ID__: Q
				}),
				ai = Q({
					__NG_ENV_ID__: Q
				});

			function un(e, t, n) {
				let i = e.length;
				for (;;) {
					const o = e.indexOf(t, n);
					if (-1 === o) return o;
					if (0 === o || e.charCodeAt(o - 1) <= 32) {
						const r = t.length;
						if (o + r === i || e.charCodeAt(o + r) <= 32) return o
					}
					n = o + 1
				}
			}

			function dn(e, t, n) {
				let i = 0;
				for (; i < n.length;) {
					const o = n[i];
					if ("number" == typeof o) {
						if (0 !== o) break;
						i++;
						const r = n[i++],
							a = n[i++],
							u = n[i++];
						e.setAttribute(t, a, u, r)
					} else {
						const r = o,
							a = n[++i];
						pi(r) ? e.setProperty(t, r, a) : e.setAttribute(t, r, a), i++
					}
				}
				return i
			}

			function Di(e) {
				return 3 === e || 4 === e || 6 === e
			}

			function pi(e) {
				return 64 === e.charCodeAt(0)
			}

			function Xt(e, t) {
				if (null !== t && 0 !== t.length)
					if (null === e || 0 === e.length) e = t.slice();
					else {
						let n = -1;
						for (let i = 0; i < t.length; i++) {
							const o = t[i];
							"number" == typeof o ? n = o : 0 === n || Ni(e, n, o, null, -1 === n || 2 === n ? t[++i] : null)
						}
					} return e
			}

			function Ni(e, t, n, i, o) {
				let r = 0,
					a = e.length;
				if (-1 === t) a = -1;
				else
					for (; r < e.length;) {
						const u = e[r++];
						if ("number" == typeof u) {
							if (u === t) {
								a = -1;
								break
							}
							if (u > t) {
								a = r - 1;
								break
							}
						}
					}
				for (; r < e.length;) {
					const u = e[r];
					if ("number" == typeof u) break;
					if (u === n) {
						if (null === i) return void(null !== o && (e[r + 1] = o));
						if (i === e[r + 1]) return void(e[r + 2] = o)
					}
					r++, null !== i && r++, null !== o && r++
				} - 1 !== a && (e.splice(a, 0, t), r = a + 1), e.splice(r++, 0, n), null !== i && e.splice(r++, 0, i), null !== o && e.splice(r++, 0, o)
			}
			const ci = "ng-template";

			function $n(e, t, n) {
				let i = 0,
					o = !0;
				for (; i < e.length;) {
					let r = e[i++];
					if ("string" == typeof r && o) {
						const a = e[i++];
						if (n && "class" === r && -1 !== un(a.toLowerCase(), t, 0)) return !0
					} else {
						if (1 === r) {
							for (; i < e.length && "string" == typeof(r = e[i++]);)
								if (r.toLowerCase() === t) return !0;
							return !1
						}
						"number" == typeof r && (o = !1)
					}
				}
				return !1
			}

			function Gn(e) {
				return 4 === e.type && e.value !== ci
			}

			function Ei(e, t, n) {
				return t === (4 !== e.type || n ? e.value : ci)
			}

			function Vi(e, t, n) {
				let i = 4;
				const o = e.attrs || [],
					r = function ps(e) {
						for (let t = 0; t < e.length; t++)
							if (Di(e[t])) return t;
						return e.length
					}(o);
				let a = !1;
				for (let u = 0; u < t.length; u++) {
					const g = t[u];
					if ("number" != typeof g) {
						if (!a)
							if (4 & i) {
								if (i = 2 | 1 & i, "" !== g && !Ei(e, g, n) || "" === g && 1 === t.length) {
									if (Ci(i)) return !1;
									a = !0
								}
							} else {
								const C = 8 & i ? g : t[++u];
								if (8 & i && null !== e.attrs) {
									if (!$n(e.attrs, C, n)) {
										if (Ci(i)) return !1;
										a = !0
									}
									continue
								}
								const U = Kr(8 & i ? "class" : g, o, Gn(e), n);
								if (-1 === U) {
									if (Ci(i)) return !1;
									a = !0;
									continue
								}
								if ("" !== C) {
									let oe;
									oe = U > r ? "" : o[U + 1].toLowerCase();
									const fe = 8 & i ? oe : null;
									if (fe && -1 !== un(fe, C, 0) || 2 & i && C !== oe) {
										if (Ci(i)) return !1;
										a = !0
									}
								}
							}
					} else {
						if (!a && !Ci(i) && !Ci(g)) return !1;
						if (a && Ci(g)) continue;
						a = !1, i = g | 1 & i
					}
				}
				return Ci(i) || a
			}

			function Ci(e) {
				return 0 == (1 & e)
			}

			function Kr(e, t, n, i) {
				if (null === t) return -1;
				let o = 0;
				if (i || !n) {
					let r = !1;
					for (; o < t.length;) {
						const a = t[o];
						if (a === e) return o;
						if (3 === a || 6 === a) r = !0;
						else {
							if (1 === a || 2 === a) {
								let u = t[++o];
								for (;
									"string" == typeof u;) u = t[++o];
								continue
							}
							if (4 === a) break;
							if (0 === a) {
								o += 4;
								continue
							}
						}
						o += r ? 1 : 2
					}
					return -1
				}
				return function Ko(e, t) {
					let n = e.indexOf(4);
					if (n > -1)
						for (n++; n < e.length;) {
							const i = e[n];
							if ("number" == typeof i) return -1;
							if (i === t) return n;
							n++
						}
					return -1
				}(t, e)
			}

			function hs(e, t, n = !1) {
				for (let i = 0; i < t.length; i++)
					if (Vi(e, t[i], n)) return !0;
				return !1
			}

			function Qr(e, t) {
				e: for (let n = 0; n < t.length; n++) {
					const i = t[n];
					if (e.length === i.length) {
						for (let o = 0; o < e.length; o++)
							if (e[o] !== i[o]) continue e;
						return !0
					}
				}
				return !1
			}

			function Zo(e, t) {
				return e ? ":not(" + t.trim() + ")" : t
			}

			function mi(e) {
				let t = e[0],
					n = 1,
					i = 2,
					o = "",
					r = !1;
				for (; n < e.length;) {
					let a = e[n];
					if ("string" == typeof a)
						if (2 & i) {
							const u = e[++n];
							o += "[" + a + (u.length > 0 ? '="' + u + '"' : "") + "]"
						} else 8 & i ? o += "." + a : 4 & i && (o += " " + a);
					else "" !== o && !Ci(a) && (t += Zo(r, o), o = ""), i = a, r = r || !Ci(i);
					n++
				}
				return "" !== o && (t += Zo(r, o)), t
			}

			function No(e) {
				return Oe(() => {
					const t = Mr(e),
						n = {
							...t,
							decls: e.decls,
							vars: e.vars,
							template: e.template,
							consts: e.consts || null,
							ngContentSelectors: e.ngContentSelectors,
							onPush: e.changeDetection === Je.OnPush,
							directiveDefs: null,
							pipeDefs: null,
							dependencies: t.standalone && e.dependencies || null,
							getStandaloneInjector: null,
							signals: e.signals ?? !1,
							data: e.data || {},
							encapsulation: e.encapsulation || ot.Emulated,
							styles: e.styles || vt,
							_: null,
							schemas: e.schemas || null,
							tView: null,
							id: ""
						};
					qr(n);
					const i = e.dependencies;
					return n.directiveDefs = no(i, !1), n.pipeDefs = no(i, !0), n.id = function xr(e) {
						let t = 0;
						const n = [e.selectors, e.ngContentSelectors, e.hostVars, e.hostAttrs, e.consts, e.vars, e.decls, e.encapsulation, e.standalone, e.signals, e.exportAs, JSON.stringify(e.inputs), JSON.stringify(e.outputs), Object.getOwnPropertyNames(e.type.prototype), !!e.contentQueries, !!e.viewQuery].join("|");
						for (const o of n) t = Math.imul(31, t) + o.charCodeAt(0) << 0;
						return t += 2147483648, "c" + t
					}(n), n
				})
			}

			function Hs(e) {
				return Ht(e) || jn(e)
			}

			function wr(e) {
				return null !== e
			}

			function Eo(e) {
				return Oe(() => ({
					type: e.type,
					bootstrap: e.bootstrap || vt,
					declarations: e.declarations || vt,
					imports: e.imports || vt,
					exports: e.exports || vt,
					transitiveCompileScopes: null,
					schemas: e.schemas || null,
					id: e.id || null
				}))
			}

			function Xo(e, t) {
				if (null == e) return et;
				const n = {};
				for (const i in e)
					if (e.hasOwnProperty(i)) {
						let o = e[i],
							r = o;
						Array.isArray(o) && (r = o[1], o = o[0]), n[o] = i, t && (t[o] = r)
					} return n
			}

			function ko(e) {
				return Oe(() => {
					const t = Mr(e);
					return qr(t), t
				})
			}

			function wi(e) {
				return {
					type: e.type,
					name: e.name,
					factory: null,
					pure: !1 !== e.pure,
					standalone: !0 === e.standalone,
					onDestroy: e.type.prototype.ngOnDestroy || null
				}
			}

			function Ht(e) {
				return e[Rt] || null
			}

			function jn(e) {
				return e[Tn] || null
			}

			function Qn(e) {
				return e[hi] || null
			}

			function Co(e) {
				const t = Ht(e) || jn(e) || Qn(e);
				return null !== t && t.standalone
			}

			function kn(e, t) {
				const n = e[Bn] || null;
				if (!n && !0 === t) throw new Error(`Type ${ye(e)} does not have '\u0275mod' property.`);
				return n
			}

			function Mr(e) {
				const t = {};
				return {
					type: e.type,
					providersResolver: null,
					factory: null,
					hostBindings: e.hostBindings || null,
					hostVars: e.hostVars || 0,
					hostAttrs: e.hostAttrs || null,
					contentQueries: e.contentQueries || null,
					declaredInputs: t,
					inputTransforms: null,
					inputConfig: e.inputs || et,
					exportAs: e.exportAs || null,
					standalone: !0 === e.standalone,
					signals: !0 === e.signals,
					selectors: e.selectors || vt,
					viewQuery: e.viewQuery || null,
					features: e.features || null,
					setInput: null,
					findHostDirectiveDefs: null,
					hostDirectives: null,
					inputs: Xo(e.inputs, t),
					outputs: Xo(e.outputs)
				}
			}

			function qr(e) {
				e.features?.forEach(t => t(e))
			}

			function no(e, t) {
				if (!e) return null;
				const n = t ? Qn : Hs;
				return () => ("function" == typeof e ? e() : e).map(i => n(i)).filter(wr)
			}
			const Dn = 0,
				at = 1,
				Nt = 2,
				rn = 3,
				Mi = 4,
				fo = 5,
				Wn = 6,
				ho = 7,
				mn = 8,
				io = 9,
				Xn = 10,
				It = 11,
				ki = 12,
				qo = 13,
				Fo = 14,
				An = 15,
				oo = 16,
				wo = 17,
				Zi = 18,
				Mo = 19,
				ms = 20,
				gi = 21,
				xi = 22,
				xo = 23,
				Jn = 24,
				Bt = 25,
				Yn = 1,
				er = 2,
				_i = 7,
				Qi = 9,
				nr = 10,
				Kn = 11;

			function li(e) {
				return Array.isArray(e) && "object" == typeof e[Yn]
			}

			function qn(e) {
				return Array.isArray(e) && !0 === e[Yn]
			}

			function po(e) {
				return 0 != (4 & e.flags)
			}

			function gn(e) {
				return e.componentOffset > -1
			}

			function ir(e) {
				return 1 == (1 & e.flags)
			}

			function Fi(e) {
				return !!e.template
			}

			function mo(e) {
				return 0 != (512 & e[Nt])
			}

			function Wt(e, t) {
				return e.hasOwnProperty(on) ? e[on] : null
			}
			let Fn = null,
				So = !1;

			function Ii(e) {
				const t = Fn;
				return Fn = e, t
			}
			const Ar = {
				version: 0,
				dirty: !1,
				producerNode: void 0,
				producerLastReadVersion: void 0,
				producerIndexOfThis: void 0,
				nextProducerIndex: 0,
				liveConsumerNode: void 0,
				liveConsumerIndexOfThis: void 0,
				consumerAllowSignalWrites: !1,
				consumerIsAlwaysLive: !1,
				producerMustRecompute: () => !1,
				producerRecomputeValue: () => {},
				consumerMarkedDirty: () => {}
			};

			function sr(e) {
				if (!cr(e) || e.dirty) {
					if (!e.producerMustRecompute(e) && !rs(e)) return void(e.dirty = !1);
					e.producerRecomputeValue(e), e.dirty = !1
				}
			}

			function Pr(e) {
				e.dirty = !0,
					function ar(e) {
						if (void 0 === e.liveConsumerNode) return;
						const t = So;
						So = !0;
						try {
							for (const n of e.liveConsumerNode) n.dirty || Pr(n)
						} finally {
							So = t
						}
					}(e), e.consumerMarkedDirty?.(e)
			}

			function os(e) {
				return e && (e.nextProducerIndex = 0), Ii(e)
			}

			function Rr(e, t) {
				if (Ii(t), e && void 0 !== e.producerNode && void 0 !== e.producerIndexOfThis && void 0 !== e.producerLastReadVersion) {
					if (cr(e))
						for (let n = e.nextProducerIndex; n < e.producerNode.length; n++) Ho(e.producerNode[n], e.producerIndexOfThis[n]);
					for (; e.producerNode.length > e.nextProducerIndex;) e.producerNode.pop(), e.producerLastReadVersion.pop(), e.producerIndexOfThis.pop()
				}
			}

			function rs(e) {
				Uo(e);
				for (let t = 0; t < e.producerNode.length; t++) {
					const n = e.producerNode[t],
						i = e.producerLastReadVersion[t];
					if (i !== n.version || (sr(n), i !== n.version)) return !0
				}
				return !1
			}

			function To(e) {
				if (Uo(e), cr(e))
					for (let t = 0; t < e.producerNode.length; t++) Ho(e.producerNode[t], e.producerIndexOfThis[t]);
				e.producerNode.length = e.producerLastReadVersion.length = e.producerIndexOfThis.length = 0, e.liveConsumerNode && (e.liveConsumerNode.length = e.liveConsumerIndexOfThis.length = 0)
			}

			function Ho(e, t) {
				if (function lr(e) {
						e.liveConsumerNode ??= [], e.liveConsumerIndexOfThis ??= []
					}(e), Uo(e), 1 === e.liveConsumerNode.length)
					for (let i = 0; i < e.producerNode.length; i++) Ho(e.producerNode[i], e.producerIndexOfThis[i]);
				const n = e.liveConsumerNode.length - 1;
				if (e.liveConsumerNode[t] = e.liveConsumerNode[n], e.liveConsumerIndexOfThis[t] = e.liveConsumerIndexOfThis[n], e.liveConsumerNode.length--, e.liveConsumerIndexOfThis.length--, t < e.liveConsumerNode.length) {
					const i = e.liveConsumerIndexOfThis[t],
						o = e.liveConsumerNode[t];
					Uo(o), o.producerIndexOfThis[i] = t
				}
			}

			function cr(e) {
				return e.consumerIsAlwaysLive || (e?.liveConsumerNode?.length ?? 0) > 0
			}

			function Uo(e) {
				e.producerNode ??= [], e.producerIndexOfThis ??= [], e.producerLastReadVersion ??= []
			}
			let Ms = null;

			function ke(e) {
				const t = Ii(null);
				try {
					return e()
				} finally {
					Ii(t)
				}
			}
			const zt = () => {},
				cn = (() => ({
					...Ar,
					consumerIsAlwaysLive: !0,
					consumerAllowSignalWrites: !1,
					consumerMarkedDirty: e => {
						e.schedule(e.ref)
					},
					hasRun: !1,
					cleanupFn: zt
				}))();
			class Ut {
				constructor(t, n, i) {
					this.previousValue = t, this.currentValue = n, this.firstChange = i
				}
				isFirstChange() {
					return this.firstChange
				}
			}

			function bn() {
				return sn
			}

			function sn(e) {
				return e.type.prototype.ngOnChanges && (e.setInput = Xi), Pn
			}

			function Pn() {
				const e = zi(this),
					t = e?.current;
				if (t) {
					const n = e.previous;
					if (n === et) e.previous = t;
					else
						for (let i in t) n[i] = t[i];
					e.current = null, this.ngOnChanges(t)
				}
			}

			function Xi(e, t, n, i) {
				const o = this.declaredInputs[n],
					r = zi(e) || function ti(e, t) {
						return e[ei] = t
					}(e, {
						previous: et,
						current: null
					}),
					a = r.current || (r.current = {}),
					u = r.previous,
					g = u[o];
				a[o] = new Ut(g && g.currentValue, t, u === et), e[i] = t
			}
			bn.ngInherit = !0;
			const ei = "__ngSimpleChanges__";

			function zi(e) {
				return e[ei] || null
			}
			const ii = function(e, t, n) {},
				Gi = "svg";

			function _n(e) {
				for (; Array.isArray(e);) e = e[Dn];
				return e
			}

			function Lr(e, t) {
				return _n(t[e])
			}

			function Si(e, t) {
				return _n(t[e.index])
			}

			function Va(e, t) {
				return e.data[t]
			}

			function Br(e, t) {
				return e[t]
			}

			function Li(e, t) {
				const n = t[e];
				return li(n) ? n : n[Dn]
			}

			function Ao(e, t) {
				return null == t ? null : e[t]
			}

			function go(e) {
				e[wo] = 0
			}

			function Fc(e) {
				1024 & e[Nt] || (e[Nt] |= 1024, Lc(e, 1))
			}

			function za(e) {
				1024 & e[Nt] && (e[Nt] &= -1025, Lc(e, -1))
			}

			function Lc(e, t) {
				let n = e[rn];
				if (null === n) return;
				n[fo] += t;
				let i = n;
				for (n = n[rn]; null !== n && (1 === t && 1 === i[fo] || -1 === t && 0 === i[fo]);) n[fo] += t, i = n, n = n[rn]
			}
			const kt = {
				lFrame: hr(null),
				bindingsEnabled: !0,
				skipHydrationRootTNode: null
			};

			function Ga() {
				return kt.bindingsEnabled
			}

			function fr() {
				return null !== kt.skipHydrationRootTNode
			}

			function Ve() {
				return kt.lFrame.lView
			}

			function qt() {
				return kt.lFrame.tView
			}

			function Ys(e) {
				return kt.lFrame.contextLView = e, e[mn]
			}

			function Ya(e) {
				return kt.lFrame.contextLView = null, e
			}

			function ui() {
				let e = Ks();
				for (; null !== e && 64 === e.type;) e = e.parent;
				return e
			}

			function Ks() {
				return kt.lFrame.currentTNode
			}

			function _o(e, t) {
				const n = kt.lFrame;
				n.currentTNode = e, n.isParent = t
			}

			function Ur() {
				return kt.lFrame.isParent
			}

			function Zs() {
				kt.lFrame.isParent = !1
			}

			function Ti() {
				const e = kt.lFrame;
				let t = e.bindingRootIndex;
				return -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
			}

			function vo() {
				return kt.lFrame.bindingIndex
			}

			function p() {
				return kt.lFrame.bindingIndex++
			}

			function _(e) {
				const t = kt.lFrame,
					n = t.bindingIndex;
				return t.bindingIndex = t.bindingIndex + e, n
			}

			function w(e, t) {
				const n = kt.lFrame;
				n.bindingIndex = n.bindingRootIndex = e, Y(t)
			}

			function Y(e) {
				kt.lFrame.currentDirectiveIndex = e
			}

			function Pe(e) {
				const t = kt.lFrame.currentDirectiveIndex;
				return -1 === t ? null : e[t]
			}

			function Me() {
				return kt.lFrame.currentQueryIndex
			}

			function ct(e) {
				kt.lFrame.currentQueryIndex = e
			}

			function $t(e) {
				const t = e[at];
				return 2 === t.type ? t.declTNode : 1 === t.type ? e[Wn] : null
			}

			function En(e, t, n) {
				if (n & H.SkipSelf) {
					let o = t,
						r = e;
					for (; !(o = o.parent, null !== o || n & H.Host || (o = $t(r), null === o || (r = r[Fo], 10 & o.type))););
					if (null === o) return !1;
					t = o, e = r
				}
				const i = kt.lFrame = ro();
				return i.currentTNode = t, i.lView = e, !0
			}

			function Zt(e) {
				const t = ro(),
					n = e[at];
				kt.lFrame = t, t.currentTNode = n.firstChild, t.lView = e, t.tView = n, t.contextLView = e, t.bindingIndex = n.bindingStartIndex, t.inI18n = !1
			}

			function ro() {
				const e = kt.lFrame,
					t = null === e ? null : e.child;
				return null === t ? hr(e) : t
			}

			function hr(e) {
				const t = {
					currentTNode: null,
					isParent: !0,
					lView: null,
					tView: null,
					selectedIndex: -1,
					contextLView: null,
					elementDepthCount: 0,
					currentNamespace: null,
					currentDirectiveIndex: -1,
					bindingRootIndex: -1,
					bindingIndex: -1,
					currentQueryIndex: 0,
					parent: e,
					child: null,
					inI18n: !1
				};
				return null !== e && (e.child = t), t
			}

			function pr() {
				const e = kt.lFrame;
				return kt.lFrame = e.parent, e.currentTNode = null, e.lView = null, e
			}
			const Ss = pr;

			function zo() {
				const e = pr();
				e.isParent = !0, e.tView = null, e.selectedIndex = -1, e.contextLView = null, e.elementDepthCount = 0, e.currentDirectiveIndex = -1, e.currentNamespace = null, e.bindingRootIndex = -1, e.bindingIndex = -1, e.currentQueryIndex = 0
			}

			function Wi() {
				return kt.lFrame.selectedIndex
			}

			function ls(e) {
				kt.lFrame.selectedIndex = e
			}

			function Hn() {
				const e = kt.lFrame;
				return Va(e.tView, e.selectedIndex)
			}

			function su() {
				kt.lFrame.currentNamespace = Gi
			}

			function Gc() {
				! function cu() {
					kt.lFrame.currentNamespace = null
				}()
			}

			function y() {
				return kt.lFrame.currentNamespace
			}
			let c = !0;

			function s() {
				return c
			}

			function f(e) {
				c = e
			}

			function T(e, t) {
				for (let n = t.directiveStart, i = t.directiveEnd; n < i; n++) {
					const r = e.data[n].type.prototype,
						{
							ngAfterContentInit: a,
							ngAfterContentChecked: u,
							ngAfterViewInit: g,
							ngAfterViewChecked: C,
							ngOnDestroy: A
						} = r;
					a && (e.contentHooks ??= []).push(-n, a), u && ((e.contentHooks ??= []).push(n, u), (e.contentCheckHooks ??= []).push(n, u)), g && (e.viewHooks ??= []).push(-n, g), C && ((e.viewHooks ??= []).push(n, C), (e.viewCheckHooks ??= []).push(n, C)), null != A && (e.destroyHooks ??= []).push(n, A)
				}
			}

			function W(e, t, n) {
				Fe(e, t, 3, n)
			}

			function q(e, t, n, i) {
				(3 & e[Nt]) === n && Fe(e, t, n, i)
			}

			function be(e, t) {
				let n = e[Nt];
				(3 & n) === t && (n &= 8191, n += 1, e[Nt] = n)
			}

			function Fe(e, t, n, i) {
				const r = i ?? -1,
					a = t.length - 1;
				let u = 0;
				for (let g = void 0 !== i ? 65535 & e[wo] : 0; g < a; g++)
					if ("number" == typeof t[g + 1]) {
						if (u = t[g], null != i && u >= i) break
					} else t[g] < 0 && (e[wo] += 65536), (u < r || -1 == r) && (ut(e, n, t, g), e[wo] = (4294901760 & e[wo]) + g + 2), g++
			}

			function st(e, t) {
				ii(4, e, t);
				const n = Ii(null);
				try {
					t.call(e)
				} finally {
					Ii(n), ii(5, e, t)
				}
			}

			function ut(e, t, n, i) {
				const o = n[i] < 0,
					r = n[i + 1],
					u = e[o ? -n[i] : n[i]];
				o ? e[Nt] >> 13 < e[wo] >> 16 && (3 & e[Nt]) === t && (e[Nt] += 8192, st(u, r)) : st(u, r)
			}
			const Lt = -1;
			class Ft {
				constructor(t, n, i) {
					this.factory = t, this.resolving = !1, this.canSeeViewProviders = n, this.injectImpl = i
				}
			}

			function so(e) {
				return e !== Lt
			}

			function oi(e) {
				return 32767 & e
			}

			function Ji(e, t) {
				let n = function $o(e) {
						return e >> 16
					}(e),
					i = t;
				for (; n > 0;) i = i[Fo], n--;
				return i
			}
			let bo = !0;

			function As(e) {
				const t = bo;
				return bo = e, t
			}
			const mr = 255,
				Qa = 5;
			let Wc = 0;
			const pt = {};

			function At(e, t) {
				const n = ri(e, t);
				if (-1 !== n) return n;
				const i = t[at];
				i.firstCreatePass && (e.injectorIndex = t.length, en(i.data, e), en(t, null), en(i.blueprint, null));
				const o = qi(e, t),
					r = e.injectorIndex;
				if (so(o)) {
					const a = oi(o),
						u = Ji(o, t),
						g = u[at].data;
					for (let C = 0; C < 8; C++) t[r + C] = u[a + C] | g[a + C]
				}
				return t[r + 8] = o, r
			}

			function en(e, t) {
				e.push(0, 0, 0, 0, 0, 0, 0, 0, t)
			}

			function ri(e, t) {
				return -1 === e.injectorIndex || e.parent && e.parent.injectorIndex === e.injectorIndex || null === t[e.injectorIndex + 8] ? -1 : e.injectorIndex
			}

			function qi(e, t) {
				if (e.parent && -1 !== e.parent.injectorIndex) return e.parent.injectorIndex;
				let n = 0,
					i = null,
					o = t;
				for (; null !== o;) {
					if (i = kf(o), null === i) return Lt;
					if (n++, o = o[Fo], -1 !== i.injectorIndex) return i.injectorIndex | n << 16
				}
				return Lt
			}

			function ji(e, t, n) {
				! function Tt(e, t, n) {
					let i;
					"string" == typeof n ? i = n.charCodeAt(0) || 0 : n.hasOwnProperty(Ri) && (i = n[Ri]), null == i && (i = n[Ri] = Wc++);
					const o = i & mr;
					t.data[e + (o >> Qa)] |= 1 << o
				}(e, t, n)
			}

			function Rn(e, t, n) {
				if (n & H.Optional || void 0 !== e) return e;
				Ot()
			}

			function Xa(e, t, n, i) {
				if (n & H.Optional && void 0 === i && (i = null), !(n & (H.Self | H.Host))) {
					const o = e[io],
						r = Ue(void 0);
					try {
						return o ? o.get(t, i, n & H.Optional) : Xe(t, i, n & H.Optional)
					} finally {
						Ue(r)
					}
				}
				return Rn(i, 0, n)
			}

			function Yc(e, t, n, i = H.Default, o) {
				if (null !== e) {
					if (2048 & t[Nt] && !(i & H.Self)) {
						const a = function Av(e, t, n, i, o) {
							let r = e,
								a = t;
							for (; null !== r && null !== a && 2048 & a[Nt] && !(512 & a[Nt]);) {
								const u = vi(r, a, n, i | H.Self, pt);
								if (u !== pt) return u;
								let g = r.parent;
								if (!g) {
									const C = a[ms];
									if (C) {
										const A = C.get(n, pt, i);
										if (A !== pt) return A
									}
									g = kf(a), a = a[Fo]
								}
								r = g
							}
							return o
						}(e, t, n, i, pt);
						if (a !== pt) return a
					}
					const r = vi(e, t, n, i, pt);
					if (r !== pt) return r
				}
				return Xa(t, n, i, o)
			}

			function vi(e, t, n, i, o) {
				const r = function Ja(e) {
					if ("string" == typeof e) return e.charCodeAt(0) || 0;
					const t = e.hasOwnProperty(Ri) ? e[Ri] : void 0;
					return "number" == typeof t ? t >= 0 ? t & mr : Tv : t
				}(n);
				if ("function" == typeof r) {
					if (!En(t, e, i)) return i & H.Host ? Rn(o, 0, i) : Xa(t, n, i, o);
					try {
						let a;
						if (a = r(i), null != a || i & H.Optional) return a;
						Ot()
					} finally {
						Ss()
					}
				} else if ("number" == typeof r) {
					let a = null,
						u = ri(e, t),
						g = Lt,
						C = i & H.Host ? t[An][Wn] : null;
					for ((-1 === u || i & H.SkipSelf) && (g = -1 === u ? qi(e, t) : t[u + 8], g !== Lt && Rf(i, !1) ? (a = t[at], u = oi(g), t = Ji(g, t)) : u = -1); - 1 !== u;) {
						const A = t[at];
						if (Pf(r, u, A.data)) {
							const U = Vr(u, t, n, a, i, C);
							if (U !== pt) return U
						}
						g = t[u + 8], g !== Lt && Rf(i, t[at].data[u + 8] === C) && Pf(r, u, t) ? (a = A, u = oi(g), t = Ji(g, t)) : u = -1
					}
				}
				return o
			}

			function Vr(e, t, n, i, o, r) {
				const a = t[at],
					u = a.data[e + 8],
					A = Hi(u, a, n, null == i ? gn(u) && bo : i != a && 0 != (3 & u.type), o & H.Host && r === u);
				return null !== A ? Oo(t, a, A, u) : pt
			}

			function Hi(e, t, n, i, o) {
				const r = e.providerIndexes,
					a = t.data,
					u = 1048575 & r,
					g = e.directiveStart,
					A = r >> 20,
					oe = o ? u + A : e.directiveEnd;
				for (let fe = i ? u : u + A; fe < oe; fe++) {
					const je = a[fe];
					if (fe < g && n === je || fe >= g && je.type === n) return fe
				}
				if (o) {
					const fe = a[g];
					if (fe && Fi(fe) && fe.type === n) return g
				}
				return null
			}

			function Oo(e, t, n, i) {
				let o = e[n];
				const r = t.data;
				if (function St(e) {
						return e instanceof Ft
					}(o)) {
					const a = o;
					a.resolving && function Ae(e, t) {
						const n = t ? `. Dependency path: ${t.join(" > ")} > ${e}` : "";
						throw new $(-200, `Circular dependency in DI detected for ${e}${n}`)
					}(function ue(e) {
						return "function" == typeof e ? e.name || e.toString() : "object" == typeof e && null != e && "function" == typeof e.type ? e.type.name || e.type.toString() : he(e)
					}(r[n]));
					const u = As(a.canSeeViewProviders);
					a.resolving = !0;
					const C = a.injectImpl ? Ue(a.injectImpl) : null;
					En(e, i, H.Default);
					try {
						o = e[n] = a.factory(void 0, r, e, i), t.firstCreatePass && n >= i.directiveStart && function E(e, t, n) {
							const {
								ngOnChanges: i,
								ngOnInit: o,
								ngDoCheck: r
							} = t.type.prototype;
							if (i) {
								const a = sn(t);
								(n.preOrderHooks ??= []).push(e, a), (n.preOrderCheckHooks ??= []).push(e, a)
							}
							o && (n.preOrderHooks ??= []).push(0 - e, o), r && ((n.preOrderHooks ??= []).push(e, r), (n.preOrderCheckHooks ??= []).push(e, r))
						}(n, r[n], t)
					} finally {
						null !== C && Ue(C), As(u), a.resolving = !1, Ss()
					}
				}
				return o
			}

			function Pf(e, t, n) {
				return !!(n[t + (e >> Qa)] & 1 << e)
			}

			function Rf(e, t) {
				return !(e & H.Self || e & H.Host && t)
			}
			class eo {
				constructor(t, n) {
					this._tNode = t, this._lView = n
				}
				get(t, n, i) {
					return Yc(this._tNode, this._lView, t, Z(i), n)
				}
			}

			function Tv() {
				return new eo(ui(), Ve())
			}

			function Nf(e) {
				return Oe(() => {
					const t = e.prototype.constructor,
						n = t[on] || lu(t),
						i = Object.prototype;
					let o = Object.getPrototypeOf(e.prototype).constructor;
					for (; o && o !== i;) {
						const r = o[on] || lu(o);
						if (r && r !== n) return r;
						o = Object.getPrototypeOf(o)
					}
					return r => new r
				})
			}

			function lu(e) {
				return it(e) ? () => {
					const t = lu(ge(e));
					return t && t()
				} : Wt(e)
			}

			function kf(e) {
				const t = e[at],
					n = t.type;
				return 2 === n ? t.declTNode : 1 === n ? e[Wn] : null
			}

			function uu(e) {
				return function gr(e, t) {
					if ("class" === t) return e.classes;
					if ("style" === t) return e.styles;
					const n = e.attrs;
					if (n) {
						const i = n.length;
						let o = 0;
						for (; o < i;) {
							const r = n[o];
							if (Di(r)) break;
							if (0 === r) o += 2;
							else if ("number" == typeof r)
								for (o++; o < i && "string" == typeof n[o];) o++;
							else {
								if (r === t) return n[o + 1];
								o += 2
							}
						}
					}
					return null
				}(ui(), e)
			}
			const Js = "__parameters__";

			function ea(e, t, n) {
				return Oe(() => {
					const i = function du(e) {
						return function(...n) {
							if (e) {
								const i = e(...n);
								for (const o in i) this[o] = i[o]
							}
						}
					}(t);

					function o(...r) {
						if (this instanceof o) return i.apply(this, r), this;
						const a = new o(...r);
						return u.annotation = a, u;

						function u(g, C, A) {
							const U = g.hasOwnProperty(Js) ? g[Js] : Object.defineProperty(g, Js, {
								value: []
							})[Js];
							for (; U.length <= A;) U.push(null);
							return (U[A] = U[A] || []).push(a), g
						}
					}
					return n && (o.prototype = Object.create(n.prototype)), o.prototype.ngMetadataName = e, o.annotationCls = o, o
				})
			}

			function na(e, t) {
				e.forEach(n => Array.isArray(n) ? na(n, t) : t(n))
			}

			function Lf(e, t, n) {
				t >= e.length ? e.push(n) : e.splice(t, 0, n)
			}

			function Kc(e, t) {
				return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0]
			}

			function tc(e, t) {
				const n = [];
				for (let i = 0; i < e; i++) n.push(t);
				return n
			}

			function yo(e, t, n) {
				let i = ia(e, t);
				return i >= 0 ? e[1 | i] = n : (i = ~i, function Lv(e, t, n, i) {
					let o = e.length;
					if (o == t) e.push(n, i);
					else if (1 === o) e.push(i, e[0]), e[0] = n;
					else {
						for (o--, e.push(e[o - 1], e[o]); o > t;) e[o] = e[o - 2], o--;
						e[t] = n, e[t + 1] = i
					}
				}(e, i, t, n)), i
			}

			function fu(e, t) {
				const n = ia(e, t);
				if (n >= 0) return e[1 | n]
			}

			function ia(e, t) {
				return function Bf(e, t, n) {
					let i = 0,
						o = e.length >> n;
					for (; o !== i;) {
						const r = i + (o - i >> 1),
							a = e[r << n];
						if (t === a) return r << n;
						a > t ? o = r : i = r + 1
					}
					return ~(o << n)
				}(e, t, 1)
			}
			const Qc = $e(ea("Optional"), 8),
				Xc = $e(ea("SkipSelf"), 4),
				ra = "ngSkipHydration";

			function Kf(e) {
				const t = ra.toLowerCase(),
					n = e.mergedAttrs;
				if (null === n) return !1;
				for (let i = 0; i < n.length; i += 2) {
					const o = n[i];
					if ("number" == typeof o) return !1;
					if ("string" == typeof o && o.toLowerCase() === t) return !0
				}
				return !1
			}

			function Zf(e) {
				return e.hasAttribute(ra)
			}

			function nl(e) {
				return 128 == (128 & e.flags)
			}
			var ol = function(e) {
				return e[e.Important = 1] = "Important", e[e.DashCase = 2] = "DashCase", e
			}(ol || {});
			const ob = /^>|^->|<!--|-->|--!>|<!-$/g,
				rb = /(<|>)/g,
				sb = "\u200b$1\u200b";
			const _u = new Map;
			let ab = 0;
			const bu = "__ngContext__";

			function Yi(e, t) {
				li(t) ? (e[bu] = t[Mo], function lb(e) {
					_u.set(e[Mo], e)
				}(t)) : e[bu] = t
			}
			let yu;

			function Du(e, t) {
				return yu(e, t)
			}

			function oc(e) {
				const t = e[rn];
				return qn(t) ? t[rn] : t
			}

			function oh(e) {
				return sh(e[ki])
			}

			function rh(e) {
				return sh(e[Mi])
			}

			function sh(e) {
				for (; null !== e && !qn(e);) e = e[Mi];
				return e
			}

			function sa(e, t, n, i, o) {
				if (null != i) {
					let r, a = !1;
					qn(i) ? r = i : li(i) && (a = !0, i = i[Dn]);
					const u = _n(i);
					0 === e && null !== n ? null == o ? uh(t, n, u) : Os(t, n, u, o || null, !0) : 1 === e && null !== n ? Os(t, n, u, o || null, !0) : 2 === e ? ul(t, u, a) : 3 === e && t.destroyNode(u), null != r && function Ob(e, t, n, i, o) {
						const r = n[_i];
						r !== _n(n) && sa(t, e, i, r, o);
						for (let u = Kn; u < n.length; u++) {
							const g = n[u];
							sc(g[at], g, e, t, i, r)
						}
					}(t, e, r, n, o)
				}
			}

			function rl(e, t) {
				return e.createText(t)
			}

			function Eu(e, t) {
				return e.createComment(function Qf(e) {
					return e.replace(ob, t => t.replace(rb, sb))
				}(t))
			}

			function sl(e, t, n) {
				return e.createElement(t, n)
			}

			function ch(e, t) {
				const n = e[Qi],
					i = n.indexOf(t);
				za(t), n.splice(i, 1)
			}

			function al(e, t) {
				if (e.length <= Kn) return;
				const n = Kn + t,
					i = e[n];
				if (i) {
					const o = i[oo];
					null !== o && o !== e && ch(o, i), t > 0 && (e[n - 1][Mi] = i[Mi]);
					const r = Kc(e, Kn + t);
					! function yb(e, t) {
						sc(e, t, t[It], 2, null, null), t[Dn] = null, t[Wn] = null
					}(i[at], i);
					const a = r[Zi];
					null !== a && a.detachView(r[at]), i[rn] = null, i[Mi] = null, i[Nt] &= -129
				}
				return i
			}

			function Cu(e, t) {
				if (!(256 & t[Nt])) {
					const n = t[It];
					t[xo] && To(t[xo]), t[Jn] && To(t[Jn]), n.destroyNode && sc(e, t, n, 3, null, null),
						function Cb(e) {
							let t = e[ki];
							if (!t) return wu(e[at], e);
							for (; t;) {
								let n = null;
								if (li(t)) n = t[ki];
								else {
									const i = t[Kn];
									i && (n = i)
								}
								if (!n) {
									for (; t && !t[Mi] && t !== e;) li(t) && wu(t[at], t), t = t[rn];
									null === t && (t = e), li(t) && wu(t[at], t), n = t && t[Mi]
								}
								t = n
							}
						}(t)
				}
			}

			function wu(e, t) {
				if (!(256 & t[Nt])) {
					t[Nt] &= -129, t[Nt] |= 256,
						function Ib(e, t) {
							let n;
							if (null != e && null != (n = e.destroyHooks))
								for (let i = 0; i < n.length; i += 2) {
									const o = t[n[i]];
									if (!(o instanceof Ft)) {
										const r = n[i + 1];
										if (Array.isArray(r))
											for (let a = 0; a < r.length; a += 2) {
												const u = o[r[a]],
													g = r[a + 1];
												ii(4, u, g);
												try {
													g.call(u)
												} finally {
													ii(5, u, g)
												}
											} else {
												ii(4, o, r);
												try {
													r.call(o)
												} finally {
													ii(5, o, r)
												}
											}
									}
								}
						}(e, t),
						function xb(e, t) {
							const n = e.cleanup,
								i = t[ho];
							if (null !== n)
								for (let r = 0; r < n.length - 1; r += 2)
									if ("string" == typeof n[r]) {
										const a = n[r + 3];
										a >= 0 ? i[a]() : i[-a].unsubscribe(), r += 2
									} else n[r].call(i[n[r + 1]]);
							null !== i && (t[ho] = null);
							const o = t[gi];
							if (null !== o) {
								t[gi] = null;
								for (let r = 0; r < o.length; r++)(0, o[r])()
							}
						}(e, t), 1 === t[at].type && t[It].destroy();
					const n = t[oo];
					if (null !== n && qn(t[rn])) {
						n !== t[rn] && ch(n, t);
						const i = t[Zi];
						null !== i && i.detachView(e)
					}! function ub(e) {
						_u.delete(e[Mo])
					}(t)
				}
			}

			function Mu(e, t, n) {
				return function lh(e, t, n) {
					let i = t;
					for (; null !== i && 40 & i.type;) i = (t = i).parent;
					if (null === i) return n[Dn];
					{
						const {
							componentOffset: o
						} = i;
						if (o > -1) {
							const {
								encapsulation: r
							} = e.data[i.directiveStart + o];
							if (r === ot.None || r === ot.Emulated) return null
						}
						return Si(i, n)
					}
				}(e, t.parent, n)
			}

			function Os(e, t, n, i, o) {
				e.insertBefore(t, n, i, o)
			}

			function uh(e, t, n) {
				e.appendChild(t, n)
			}

			function dh(e, t, n, i, o) {
				null !== i ? Os(e, t, n, i, o) : uh(e, t, n)
			}

			function cl(e, t) {
				return e.parentNode(t)
			}

			function fh(e, t, n) {
				return ph(e, t, n)
			}
			let xu, dl, Au, fl, ph = function hh(e, t, n) {
				return 40 & e.type ? Si(e, n) : null
			};

			function ll(e, t, n, i) {
				const o = Mu(e, i, t),
					r = t[It],
					u = fh(i.parent || t[Wn], i, t);
				if (null != o)
					if (Array.isArray(n))
						for (let g = 0; g < n.length; g++) dh(r, o, n[g], u, !1);
					else dh(r, o, n, u, !1);
				void 0 !== xu && xu(r, i, t, n, o)
			}

			function rc(e, t) {
				if (null !== t) {
					const n = t.type;
					if (3 & n) return Si(t, e);
					if (4 & n) return Iu(-1, e[t.index]);
					if (8 & n) {
						const i = t.child;
						if (null !== i) return rc(e, i);
						{
							const o = e[t.index];
							return qn(o) ? Iu(-1, o) : _n(o)
						}
					}
					if (32 & n) return Du(t, e)() || _n(e[t.index]);
					{
						const i = gh(e, t);
						return null !== i ? Array.isArray(i) ? i[0] : rc(oc(e[An]), i) : rc(e, t.next)
					}
				}
				return null
			}

			function gh(e, t) {
				return null !== t ? e[An][Wn].projection[t.projection] : null
			}

			function Iu(e, t) {
				const n = Kn + e + 1;
				if (n < t.length) {
					const i = t[n],
						o = i[at].firstChild;
					if (null !== o) return rc(i, o)
				}
				return t[_i]
			}

			function ul(e, t, n) {
				const i = cl(e, t);
				i && function Sb(e, t, n, i) {
					e.removeChild(t, n, i)
				}(e, i, t, n)
			}

			function _h(e) {
				e.textContent = ""
			}

			function Su(e, t, n, i, o, r, a) {
				for (; null != n;) {
					const u = i[n.index],
						g = n.type;
					if (a && 0 === t && (u && Yi(_n(u), i), n.flags |= 2), 32 != (32 & n.flags))
						if (8 & g) Su(e, t, n.child, i, o, r, !1), sa(t, e, o, u, r);
						else if (32 & g) {
						const C = Du(n, i);
						let A;
						for (; A = C();) sa(t, e, o, A, r);
						sa(t, e, o, u, r)
					} else 16 & g ? vh(e, t, i, n, o, r) : sa(t, e, o, u, r);
					n = a ? n.projectionNext : n.next
				}
			}

			function sc(e, t, n, i, o, r) {
				Su(n, i, e.firstChild, t, o, r, !1)
			}

			function vh(e, t, n, i, o, r) {
				const a = n[An],
					g = a[Wn].projection[i.projection];
				if (Array.isArray(g))
					for (let C = 0; C < g.length; C++) sa(t, e, o, g[C], r);
				else {
					let C = g;
					const A = a[rn];
					nl(i) && (C.flags |= 128), Su(e, t, C, A, o, r, !0)
				}
			}

			function bh(e, t, n) {
				"" === n ? e.removeAttribute(t, "class") : e.setAttribute(t, "class", n)
			}

			function yh(e, t, n) {
				const {
					mergedAttrs: i,
					classes: o,
					styles: r
				} = n;
				null !== i && dn(e, t, i), null !== o && bh(e, t, o), null !== r && function Rb(e, t, n) {
					e.setAttribute(t, "style", n)
				}(e, t, r)
			}

			function aa(e) {
				return function Tu() {
					if (void 0 === dl && (dl = null, ht.trustedTypes)) try {
						dl = ht.trustedTypes.createPolicy("angular", {
							createHTML: e => e,
							createScript: e => e,
							createScriptURL: e => e
						})
					} catch {}
					return dl
				}()?.createHTML(e) || e
			}

			function Lb(e) {
				Au = e
			}

			function ca() {
				if (void 0 !== Au) return Au;
				if (typeof document < "u") return document;
				throw new $(210, !1)
			}

			function Ou() {
				if (void 0 === fl && (fl = null, ht.trustedTypes)) try {
					fl = ht.trustedTypes.createPolicy("angular#unsafe-bypass", {
						createHTML: e => e,
						createScript: e => e,
						createScriptURL: e => e
					})
				} catch {}
				return fl
			}

			function Dh(e) {
				return Ou()?.createHTML(e) || e
			}

			function Ch(e) {
				return Ou()?.createScriptURL(e) || e
			}
			class Ps {
				constructor(t) {
					this.changingThisBreaksApplicationSecurity = t
				}
				toString() {
					return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${ce})`
				}
			}
			class Bb extends Ps {
				getTypeName() {
					return "HTML"
				}
			}
			class jb extends Ps {
				getTypeName() {
					return "Style"
				}
			}
			class Hb extends Ps {
				getTypeName() {
					return "Script"
				}
			}
			class Ub extends Ps {
				getTypeName() {
					return "URL"
				}
			}
			class Vb extends Ps {
				getTypeName() {
					return "ResourceURL"
				}
			}

			function zr(e) {
				return e instanceof Ps ? e.changingThisBreaksApplicationSecurity : e
			}

			function la(e, t) {
				const n = function zb(e) {
					return e instanceof Ps && e.getTypeName() || null
				}(e);
				if (null != n && n !== t) {
					if ("ResourceURL" === n && "URL" === t) return !0;
					throw new Error(`Required a safe ${t}, got a ${n} (see ${ce})`)
				}
				return n === t
			}

			function $b(e) {
				return new Bb(e)
			}

			function Gb(e) {
				return new jb(e)
			}

			function Wb(e) {
				return new Hb(e)
			}

			function Yb(e) {
				return new Ub(e)
			}

			function Kb(e) {
				return new Vb(e)
			}
			class Zb {
				constructor(t) {
					this.inertDocumentHelper = t
				}
				getInertBodyElement(t) {
					t = "<body><remove></remove>" + t;
					try {
						const n = (new window.DOMParser).parseFromString(aa(t), "text/html").body;
						return null === n ? this.inertDocumentHelper.getInertBodyElement(t) : (n.removeChild(n.firstChild), n)
					} catch {
						return null
					}
				}
			}
			class Qb {
				constructor(t) {
					this.defaultDoc = t, this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert")
				}
				getInertBodyElement(t) {
					const n = this.inertDocument.createElement("template");
					return n.innerHTML = aa(t), n
				}
			}
			const Jb = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;

			function hl(e) {
				return (e = String(e)).match(Jb) ? e : "unsafe:" + e
			}

			function $r(e) {
				const t = {};
				for (const n of e.split(",")) t[n] = !0;
				return t
			}

			function ac(...e) {
				const t = {};
				for (const n of e)
					for (const i in n) n.hasOwnProperty(i) && (t[i] = !0);
				return t
			}
			const Mh = $r("area,br,col,hr,img,wbr"),
				xh = $r("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr"),
				Ih = $r("rp,rt"),
				Pu = ac(Mh, ac(xh, $r("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul")), ac(Ih, $r("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video")), ac(Ih, xh)),
				Ru = $r("background,cite,href,itemtype,longdesc,poster,src,xlink:href"),
				Sh = ac(Ru, $r("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width"), $r("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext")),
				qb = $r("script,style,template");
			class ey {
				constructor() {
					this.sanitizedSomething = !1, this.buf = []
				}
				sanitizeChildren(t) {
					let n = t.firstChild,
						i = !0;
					for (; n;)
						if (n.nodeType === Node.ELEMENT_NODE ? i = this.startElement(n) : n.nodeType === Node.TEXT_NODE ? this.chars(n.nodeValue) : this.sanitizedSomething = !0, i && n.firstChild) n = n.firstChild;
						else
							for (; n;) {
								n.nodeType === Node.ELEMENT_NODE && this.endElement(n);
								let o = this.checkClobberedElement(n, n.nextSibling);
								if (o) {
									n = o;
									break
								}
								n = this.checkClobberedElement(n, n.parentNode)
							}
					return this.buf.join("")
				}
				startElement(t) {
					const n = t.nodeName.toLowerCase();
					if (!Pu.hasOwnProperty(n)) return this.sanitizedSomething = !0, !qb.hasOwnProperty(n);
					this.buf.push("<"), this.buf.push(n);
					const i = t.attributes;
					for (let o = 0; o < i.length; o++) {
						const r = i.item(o),
							a = r.name,
							u = a.toLowerCase();
						if (!Sh.hasOwnProperty(u)) {
							this.sanitizedSomething = !0;
							continue
						}
						let g = r.value;
						Ru[u] && (g = hl(g)), this.buf.push(" ", a, '="', Th(g), '"')
					}
					return this.buf.push(">"), !0
				}
				endElement(t) {
					const n = t.nodeName.toLowerCase();
					Pu.hasOwnProperty(n) && !Mh.hasOwnProperty(n) && (this.buf.push("</"), this.buf.push(n), this.buf.push(">"))
				}
				chars(t) {
					this.buf.push(Th(t))
				}
				checkClobberedElement(t, n) {
					if (n && (t.compareDocumentPosition(n) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) throw new Error(`Failed to sanitize html because the element is clobbered: ${t.outerHTML}`);
					return n
				}
			}
			const ty = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g,
				ny = /([^\#-~ |!])/g;

			function Th(e) {
				return e.replace(/&/g, "&amp;").replace(ty, function(t) {
					return "&#" + (1024 * (t.charCodeAt(0) - 55296) + (t.charCodeAt(1) - 56320) + 65536) + ";"
				}).replace(ny, function(t) {
					return "&#" + t.charCodeAt(0) + ";"
				}).replace(/</g, "&lt;").replace(/>/g, "&gt;")
			}
			let pl;

			function Ah(e, t) {
				let n = null;
				try {
					pl = pl || function wh(e) {
						const t = new Qb(e);
						return function Xb() {
							try {
								return !!(new window.DOMParser).parseFromString(aa(""), "text/html")
							} catch {
								return !1
							}
						}() ? new Zb(t) : t
					}(e);
					let i = t ? String(t) : "";
					n = pl.getInertBodyElement(i);
					let o = 5,
						r = i;
					do {
						if (0 === o) throw new Error("Failed to sanitize html because the input is unstable");
						o--, i = r, r = n.innerHTML, n = pl.getInertBodyElement(i)
					} while (i !== r);
					return aa((new ey).sanitizeChildren(Nu(n) || n))
				} finally {
					if (n) {
						const i = Nu(n) || n;
						for (; i.firstChild;) i.removeChild(i.firstChild)
					}
				}
			}

			function Nu(e) {
				return "content" in e && function iy(e) {
					return e.nodeType === Node.ELEMENT_NODE && "TEMPLATE" === e.nodeName
				}(e) ? e.content : null
			}
			var Rs = function(e) {
				return e[e.NONE = 0] = "NONE", e[e.HTML = 1] = "HTML", e[e.STYLE = 2] = "STYLE", e[e.SCRIPT = 3] = "SCRIPT", e[e.URL = 4] = "URL", e[e.RESOURCE_URL = 5] = "RESOURCE_URL", e
			}(Rs || {});

			function Oh(e) {
				const t = cc();
				return t ? Dh(t.sanitize(Rs.HTML, e) || "") : la(e, "HTML") ? Dh(zr(e)) : Ah(ca(), he(e))
			}

			function ku(e) {
				const t = cc();
				return t ? t.sanitize(Rs.URL, e) || "" : la(e, "URL") ? zr(e) : hl(he(e))
			}

			function Ph(e) {
				const t = cc();
				if (t) return Ch(t.sanitize(Rs.RESOURCE_URL, e) || "");
				if (la(e, "ResourceURL")) return Ch(zr(e));
				throw new $(904, !1)
			}

			function Rh(e, t, n) {
				return function cy(e, t) {
					return "src" === t && ("embed" === e || "frame" === e || "iframe" === e || "media" === e || "script" === e) || "href" === t && ("base" === e || "link" === e) ? Ph : ku
				}(t, n)(e)
			}

			function cc() {
				const e = Ve();
				return e && e[Xn].sanitizer
			}
			const lc = new Mt("ENVIRONMENT_INITIALIZER"),
				Nh = new Mt("INJECTOR", -1),
				kh = new Mt("INJECTOR_DEF_TYPES");
			class Fu {
				get(t, n = vn) {
					if (n === vn) {
						const i = new Error(`NullInjectorError: No provider for ${ye(t)}!`);
						throw i.name = "NullInjectorError", i
					}
					return n
				}
			}

			function Lu(e) {
				return {
					\u0275providers: e
				}
			}

			function Fh(...e) {
				return {
					\u0275providers: Lh(0, e),
					\u0275fromNgModule: !0
				}
			}

			function Lh(e, ...t) {
				const n = [],
					i = new Set;
				let o;
				const r = a => {
					n.push(a)
				};
				return na(t, a => {
					const u = a;
					ml(u, r, [], i) && (o ||= [], o.push(u))
				}), void 0 !== o && Bh(o, r), n
			}

			function Bh(e, t) {
				for (let n = 0; n < e.length; n++) {
					const {
						ngModule: i,
						providers: o
					} = e[n];
					Bu(o, r => {
						t(r, i)
					})
				}
			}

			function ml(e, t, n, i) {
				if (!(e = ge(e))) return !1;
				let o = null,
					r = Vn(e);
				const a = !r && Ht(e);
				if (r || a) {
					if (a && !a.standalone) return !1;
					o = e
				} else {
					const g = e.ngModule;
					if (r = Vn(g), !r) return !1;
					o = g
				}
				const u = i.has(o);
				if (a) {
					if (u) return !1;
					if (i.add(o), a.dependencies) {
						const g = "function" == typeof a.dependencies ? a.dependencies() : a.dependencies;
						for (const C of g) ml(C, t, n, i)
					}
				} else {
					if (!r) return !1;
					{
						if (null != r.imports && !u) {
							let C;
							i.add(o);
							try {
								na(r.imports, A => {
									ml(A, t, n, i) && (C ||= [], C.push(A))
								})
							} finally {}
							void 0 !== C && Bh(C, t)
						}
						if (!u) {
							const C = Wt(o) || (() => new o);
							t({
								provide: o,
								useFactory: C,
								deps: vt
							}, o), t({
								provide: kh,
								useValue: o,
								multi: !0
							}, o), t({
								provide: lc,
								useValue: () => se(o),
								multi: !0
							}, o)
						}
						const g = r.providers;
						if (null != g && !u) {
							const C = e;
							Bu(g, A => {
								t(A, C)
							})
						}
					}
				}
				return o !== e && void 0 !== e.providers
			}

			function Bu(e, t) {
				for (let n of e) lt(n) && (n = n.\u0275providers), Array.isArray(n) ? Bu(n, t) : t(n)
			}
			const ly = Q({
				provide: String,
				useValue: Q
			});

			function ju(e) {
				return null !== e && "object" == typeof e && ly in e
			}

			function Ns(e) {
				return "function" == typeof e
			}
			const Hu = new Mt("Set Injector scope."),
				gl = {},
				dy = {};
			let Uu;

			function _l() {
				return void 0 === Uu && (Uu = new Fu), Uu
			}
			class _r {}
			class ua extends _r {
				get destroyed() {
					return this._destroyed
				}
				constructor(t, n, i, o) {
					super(), this.parent = n, this.source = i, this.scopes = o, this.records = new Map, this._ngOnDestroyHooks = new Set, this._onDestroyHooks = [], this._destroyed = !1, zu(t, a => this.processProvider(a)), this.records.set(Nh, da(void 0, this)), o.has("environment") && this.records.set(_r, da(void 0, this));
					const r = this.records.get(Hu);
					null != r && "string" == typeof r.value && this.scopes.add(r.value), this.injectorDefTypes = new Set(this.get(kh.multi, vt, H.Self))
				}
				destroy() {
					this.assertNotDestroyed(), this._destroyed = !0;
					try {
						for (const n of this._ngOnDestroyHooks) n.ngOnDestroy();
						const t = this._onDestroyHooks;
						this._onDestroyHooks = [];
						for (const n of t) n()
					} finally {
						this.records.clear(), this._ngOnDestroyHooks.clear(), this.injectorDefTypes.clear()
					}
				}
				onDestroy(t) {
					return this.assertNotDestroyed(), this._onDestroyHooks.push(t), () => this.removeOnDestroy(t)
				}
				runInContext(t) {
					this.assertNotDestroyed();
					const n = Ke(this),
						i = Ue(void 0);
					try {
						return t()
					} finally {
						Ke(n), Ue(i)
					}
				}
				get(t, n = vn, i = H.Default) {
					if (this.assertNotDestroyed(), t.hasOwnProperty(ai)) return t[ai](this);
					i = Z(i);
					const r = Ke(this),
						a = Ue(void 0);
					try {
						if (!(i & H.SkipSelf)) {
							let g = this.records.get(t);
							if (void 0 === g) {
								const C = function gy(e) {
									return "function" == typeof e || "object" == typeof e && e instanceof Mt
								}(t) && Dt(t);
								g = C && this.injectableDefInScope(C) ? da(Vu(t), gl) : null, this.records.set(t, g)
							}
							if (null != g) return this.hydrate(t, g)
						}
						return (i & H.Self ? _l() : this.parent).get(t, n = i & H.Optional && n === vn ? null : n)
					} catch (u) {
						if ("NullInjectorError" === u.name) {
							if ((u[zn] = u[zn] || []).unshift(ye(t)), r) throw u;
							return function G(e, t, n, i) {
								const o = e[zn];
								throw t[x] && o.unshift(t[x]), e.message = function J(e, t, n, i = null) {
									e = e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1) ? e.slice(2) : e;
									let o = ye(t);
									if (Array.isArray(t)) o = t.map(ye).join(" -> ");
									else if ("object" == typeof t) {
										let r = [];
										for (let a in t)
											if (t.hasOwnProperty(a)) {
												let u = t[a];
												r.push(a + ":" + ("string" == typeof u ? JSON.stringify(u) : ye(u)))
											} o = `{${r.join(", ")}}`
									}
									return `${n}${i?"("+i+")":""}[${o}]: ${e.replace(L,"\n  ")}`
								}("\n" + e.message, o, n, i), e.ngTokenPath = o, e[zn] = null, e
							}(u, t, "R3InjectorError", this.source)
						}
						throw u
					} finally {
						Ue(a), Ke(r)
					}
				}
				resolveInjectorInitializers() {
					const t = Ke(this),
						n = Ue(void 0);
					try {
						const o = this.get(lc.multi, vt, H.Self);
						for (const r of o) r()
					} finally {
						Ke(t), Ue(n)
					}
				}
				toString() {
					const t = [],
						n = this.records;
					for (const i of n.keys()) t.push(ye(i));
					return `R3Injector[${t.join(", ")}]`
				}
				assertNotDestroyed() {
					if (this._destroyed) throw new $(205, !1)
				}
				processProvider(t) {
					let n = Ns(t = ge(t)) ? t : ge(t && t.provide);
					const i = function hy(e) {
						return ju(e) ? da(void 0, e.useValue) : da(Uh(e), gl)
					}(t);
					if (Ns(t) || !0 !== t.multi) this.records.get(n);
					else {
						let o = this.records.get(n);
						o || (o = da(void 0, gl, !0), o.factory = () => _e(o.multi), this.records.set(n, o)), n = t, o.multi.push(t)
					}
					this.records.set(n, i)
				}
				hydrate(t, n) {
					return n.value === gl && (n.value = dy, n.value = n.factory()), "object" == typeof n.value && n.value && function my(e) {
						return null !== e && "object" == typeof e && "function" == typeof e.ngOnDestroy
					}(n.value) && this._ngOnDestroyHooks.add(n.value), n.value
				}
				injectableDefInScope(t) {
					if (!t.providedIn) return !1;
					const n = ge(t.providedIn);
					return "string" == typeof n ? "any" === n || this.scopes.has(n) : this.injectorDefTypes.has(n)
				}
				removeOnDestroy(t) {
					const n = this._onDestroyHooks.indexOf(t); - 1 !== n && this._onDestroyHooks.splice(n, 1)
				}
			}

			function Vu(e) {
				const t = Dt(e),
					n = null !== t ? t.factory : Wt(e);
				if (null !== n) return n;
				if (e instanceof Mt) throw new $(204, !1);
				if (e instanceof Function) return function fy(e) {
					const t = e.length;
					if (t > 0) throw tc(t, "?"), new $(204, !1);
					const n = function Nn(e) {
						return e && (e[Zn] || e[N]) || null
					}(e);
					return null !== n ? () => n.factory(e) : () => new e
				}(e);
				throw new $(204, !1)
			}

			function Uh(e, t, n) {
				let i;
				if (Ns(e)) {
					const o = ge(e);
					return Wt(o) || Vu(o)
				}
				if (ju(e)) i = () => ge(e.useValue);
				else if (function Hh(e) {
						return !(!e || !e.useFactory)
					}(e)) i = () => e.useFactory(..._e(e.deps || []));
				else if (function jh(e) {
						return !(!e || !e.useExisting)
					}(e)) i = () => se(ge(e.useExisting));
				else {
					const o = ge(e && (e.useClass || e.provide));
					if (! function py(e) {
							return !!e.deps
						}(e)) return Wt(o) || Vu(o);
					i = () => new o(..._e(e.deps))
				}
				return i
			}

			function da(e, t, n = !1) {
				return {
					factory: e,
					value: t,
					multi: n ? [] : void 0
				}
			}

			function zu(e, t) {
				for (const n of e) Array.isArray(n) ? zu(n, t) : n && lt(n) ? zu(n.\u0275providers, t) : t(n)
			}
			const Vh = new Mt("AppId", {
					providedIn: "root",
					factory: () => _y
				}),
				_y = "ng",
				zh = new Mt("Platform Initializer"),
				$u = new Mt("Platform ID", {
					providedIn: "platform",
					factory: () => "unknown"
				}),
				vy = new Mt("AnimationModuleType"),
				by = new Mt("CSP nonce", {
					providedIn: "root",
					factory: () => ca().body?.querySelector("[ngCspNonce]")?.getAttribute("ngCspNonce") || null
				}),
				$h = new Mt("", {
					providedIn: "root",
					factory: () => new Set
				});

			function yy(e) {
				return e
			}

			function Dy() {
				const e = new uc;
				return "browser" === k($u) && (e.store = function Ey(e, t) {
					const n = e.getElementById(t + "-state");
					if (n?.textContent) try {
						return JSON.parse(n.textContent)
					} catch (i) {
						console.warn("Exception while restoring TransferState for app " + t, i)
					}
					return {}
				}(ca(), k(Vh))), e
			}
			let uc = (() => {
				class e {
					constructor() {
						this.store = {}, this.onSerializeCallbacks = {}
					}
					static #e = this.\u0275prov = mt({
						token: e,
						providedIn: "root",
						factory: Dy
					});
					get(n, i) {
						return void 0 !== this.store[n] ? this.store[n] : i
					}
					set(n, i) {
						this.store[n] = i
					}
					remove(n) {
						delete this.store[n]
					}
					hasKey(n) {
						return this.store.hasOwnProperty(n)
					}
					get isEmpty() {
						return 0 === Object.keys(this.store).length
					}
					onSerialize(n, i) {
						this.onSerializeCallbacks[n] = i
					}
					toJson() {
						for (const n in this.onSerializeCallbacks)
							if (this.onSerializeCallbacks.hasOwnProperty(n)) try {
								this.store[n] = this.onSerializeCallbacks[n]()
							} catch (i) {
								console.warn("Exception in onSerialize callback: ", i)
							}
						return JSON.stringify(this.store).replace(/</g, "\\u003C")
					}
				}
				return e
			})();
			const Gu = "h",
				Wu = "b";
			var fa = function(e) {
				return e.FirstChild = "f", e.NextSibling = "n", e
			}(fa || {});
			const Yu = "e",
				Ku = "t",
				dc = "c",
				vl = "x",
				ha = "r",
				Zu = "i",
				Qu = "n",
				bl = "d",
				Xu = "__\u0275nghData__",
				fc = "ngh",
				Cy = "nghm";
			let Gh = (e, t, n) => null;

			function wy(e, t, n = !1) {
				let i = e.getAttribute(fc);
				if (null == i) return null;
				const [o, r] = i.split("|");
				if (i = n ? r : o, !i) return null;
				const a = n ? o : r ? `|${r}` : "";
				let u = {};
				if ("" !== i) {
					const C = t.get(uc, null, {
						optional: !0
					});
					null !== C && (u = C.get(Xu, [])[Number(i)])
				}
				const g = {
					data: u,
					firstChild: e.firstChild ?? null
				};
				return n && (g.firstChild = e, yl(g, 0, e.nextSibling)), a ? e.setAttribute(fc, a) : e.removeAttribute(fc), g
			}

			function Ju(e, t, n = !1) {
				return Gh(e, t, n)
			}

			function Wh(e) {
				let t = e._lView;
				return 2 === t[at].type ? null : (mo(t) && (t = t[Bt]), t)
			}

			function yl(e, t, n) {
				e.segmentHeads ??= {}, e.segmentHeads[t] = n
			}

			function qu(e, t) {
				return e.segmentHeads?.[t] ?? null
			}

			function Yh(e, t) {
				return e.data[dc]?.[t] ?? null
			}

			function ed(e, t) {
				const n = Yh(e, t) ?? [];
				let i = 0;
				for (let o of n) i += o[ha] * (o[vl] ?? 1);
				return i
			}

			function Dl(e, t) {
				if (typeof e.disconnectedNodes > "u") {
					const n = e.data[bl];
					e.disconnectedNodes = n ? new Set(n) : null
				}
				return !!e.disconnectedNodes?.has(t)
			}
			class Ay {}
			class Kh {}
			class Py {
				resolveComponentFactory(t) {
					throw function Oy(e) {
						const t = Error(`No component factory found for ${ye(e)}.`);
						return t.ngComponent = e, t
					}(t)
				}
			}
			let hc = (() => {
				class e {
					static #e = this.NULL = new Py
				}
				return e
			})();

			function Ry() {
				return pa(ui(), Ve())
			}

			function pa(e, t) {
				return new pc(Si(e, t))
			}
			let pc = (() => {
				class e {
					constructor(n) {
						this.nativeElement = n
					}
					static #e = this.__NG_ELEMENT_ID__ = Ry
				}
				return e
			})();

			function Ny(e) {
				return e instanceof pc ? e.nativeElement : e
			}
			class Qh {}
			let ky = (() => {
					class e {
						constructor() {
							this.destroyNode = null
						}
						static #e = this.__NG_ELEMENT_ID__ = () => function Fy() {
							const e = Ve(),
								n = Li(ui().index, e);
							return (li(n) ? n : e)[It]
						}()
					}
					return e
				})(),
				Ly = (() => {
					class e {
						static #e = this.\u0275prov = mt({
							token: e,
							providedIn: "root",
							factory: () => null
						})
					}
					return e
				})();
			class Xh {
				constructor(t) {
					this.full = t, this.major = t.split(".")[0], this.minor = t.split(".")[1], this.patch = t.split(".").slice(2).join(".")
				}
			}
			const By = new Xh("16.2.12"),
				td = {};

			function tp(e, t = null, n = null, i) {
				const o = np(e, t, n, i);
				return o.resolveInjectorInitializers(), o
			}

			function np(e, t = null, n = null, i, o = new Set) {
				const r = [n || vt, Fh(e)];
				return i = i || ("object" == typeof e ? void 0 : ye(e)), new ua(r, t || _l(), i || null, o)
			}
			let Go = (() => {
				class e {
					static #e = this.THROW_IF_NOT_FOUND = vn;
					static #t = this.NULL = new Fu;
					static create(n, i) {
						if (Array.isArray(n)) return tp({
							name: ""
						}, i, n, "");
						{
							const o = n.name ?? "";
							return tp({
								name: o
							}, n.parent, n.providers, o)
						}
					}
					static #n = this.\u0275prov = mt({
						token: e,
						providedIn: "any",
						factory: () => se(Nh)
					});
					static #i = this.__NG_ELEMENT_ID__ = -1
				}
				return e
			})();

			function id(e) {
				return e.ngOriginalError
			}
			class us {
				constructor() {
					this._console = console
				}
				handleError(t) {
					const n = this._findOriginalError(t);
					this._console.error("ERROR", t), n && this._console.error("ORIGINAL ERROR", n)
				}
				_findOriginalError(t) {
					let n = t && id(t);
					for (; n && id(n);) n = id(n);
					return n || null
				}
			}

			function rd(e) {
				return t => {
					setTimeout(e, void 0, t)
				}
			}
			const vr = class Gy extends l.x {
				constructor(t = !1) {
					super(), this.__isAsync = t
				}
				emit(t) {
					super.next(t)
				}
				subscribe(t, n, i) {
					let o = t,
						r = n || (() => null),
						a = i;
					if (t && "object" == typeof t) {
						const g = t;
						o = g.next?.bind(g), r = g.error?.bind(g), a = g.complete?.bind(g)
					}
					this.__isAsync && (r = rd(r), o && (o = rd(o)), a && (a = rd(a)));
					const u = super.subscribe({
						next: o,
						error: r,
						complete: a
					});
					return t instanceof O.w0 && t.add(u), u
				}
			};

			function op(...e) {}
			class Oi {
				constructor({
					enableLongStackTrace: t = !1,
					shouldCoalesceEventChangeDetection: n = !1,
					shouldCoalesceRunChangeDetection: i = !1
				}) {
					if (this.hasPendingMacrotasks = !1, this.hasPendingMicrotasks = !1, this.isStable = !0, this.onUnstable = new vr(!1), this.onMicrotaskEmpty = new vr(!1), this.onStable = new vr(!1), this.onError = new vr(!1), typeof Zone > "u") throw new $(908, !1);
					Zone.assertZonePatched();
					const o = this;
					o._nesting = 0, o._outer = o._inner = Zone.current, Zone.TaskTrackingZoneSpec && (o._inner = o._inner.fork(new Zone.TaskTrackingZoneSpec)), t && Zone.longStackTraceZoneSpec && (o._inner = o._inner.fork(Zone.longStackTraceZoneSpec)), o.shouldCoalesceEventChangeDetection = !i && n, o.shouldCoalesceRunChangeDetection = i, o.lastRequestAnimationFrameId = -1, o.nativeRequestAnimationFrame = function Wy() {
							const e = "function" == typeof ht.requestAnimationFrame;
							let t = ht[e ? "requestAnimationFrame" : "setTimeout"],
								n = ht[e ? "cancelAnimationFrame" : "clearTimeout"];
							if (typeof Zone < "u" && t && n) {
								const i = t[Zone.__symbol__("OriginalDelegate")];
								i && (t = i);
								const o = n[Zone.__symbol__("OriginalDelegate")];
								o && (n = o)
							}
							return {
								nativeRequestAnimationFrame: t,
								nativeCancelAnimationFrame: n
							}
						}().nativeRequestAnimationFrame,
						function Zy(e) {
							const t = () => {
								! function Ky(e) {
									e.isCheckStableRunning || -1 !== e.lastRequestAnimationFrameId || (e.lastRequestAnimationFrameId = e.nativeRequestAnimationFrame.call(ht, () => {
										e.fakeTopEventTask || (e.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", () => {
											e.lastRequestAnimationFrameId = -1, ad(e), e.isCheckStableRunning = !0, sd(e), e.isCheckStableRunning = !1
										}, void 0, () => {}, () => {})), e.fakeTopEventTask.invoke()
									}), ad(e))
								}(e)
							};
							e._inner = e._inner.fork({
								name: "angular",
								properties: {
									isAngularZone: !0
								},
								onInvokeTask: (n, i, o, r, a, u) => {
									if (function Xy(e) {
											return !(!Array.isArray(e) || 1 !== e.length) && !0 === e[0].data?.__ignore_ng_zone__
										}(u)) return n.invokeTask(o, r, a, u);
									try {
										return rp(e), n.invokeTask(o, r, a, u)
									} finally {
										(e.shouldCoalesceEventChangeDetection && "eventTask" === r.type || e.shouldCoalesceRunChangeDetection) && t(), sp(e)
									}
								},
								onInvoke: (n, i, o, r, a, u, g) => {
									try {
										return rp(e), n.invoke(o, r, a, u, g)
									} finally {
										e.shouldCoalesceRunChangeDetection && t(), sp(e)
									}
								},
								onHasTask: (n, i, o, r) => {
									n.hasTask(o, r), i === o && ("microTask" == r.change ? (e._hasPendingMicrotasks = r.microTask, ad(e), sd(e)) : "macroTask" == r.change && (e.hasPendingMacrotasks = r.macroTask))
								},
								onHandleError: (n, i, o, r) => (n.handleError(o, r), e.runOutsideAngular(() => e.onError.emit(r)), !1)
							})
						}(o)
				}
				static isInAngularZone() {
					return typeof Zone < "u" && !0 === Zone.current.get("isAngularZone")
				}
				static assertInAngularZone() {
					if (!Oi.isInAngularZone()) throw new $(909, !1)
				}
				static assertNotInAngularZone() {
					if (Oi.isInAngularZone()) throw new $(909, !1)
				}
				run(t, n, i) {
					return this._inner.run(t, n, i)
				}
				runTask(t, n, i, o) {
					const r = this._inner,
						a = r.scheduleEventTask("NgZoneEvent: " + o, t, Yy, op, op);
					try {
						return r.runTask(a, n, i)
					} finally {
						r.cancelTask(a)
					}
				}
				runGuarded(t, n, i) {
					return this._inner.runGuarded(t, n, i)
				}
				runOutsideAngular(t) {
					return this._outer.run(t)
				}
			}
			const Yy = {};

			function sd(e) {
				if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable) try {
					e._nesting++, e.onMicrotaskEmpty.emit(null)
				} finally {
					if (e._nesting--, !e.hasPendingMicrotasks) try {
						e.runOutsideAngular(() => e.onStable.emit(null))
					} finally {
						e.isStable = !0
					}
				}
			}

			function ad(e) {
				e.hasPendingMicrotasks = !!(e._hasPendingMicrotasks || (e.shouldCoalesceEventChangeDetection || e.shouldCoalesceRunChangeDetection) && -1 !== e.lastRequestAnimationFrameId)
			}

			function rp(e) {
				e._nesting++, e.isStable && (e.isStable = !1, e.onUnstable.emit(null))
			}

			function sp(e) {
				e._nesting--, sd(e)
			}
			const ap = new Mt("", {
				providedIn: "root",
				factory: cp
			});

			function cp() {
				const e = k(Oi);
				let t = !0;
				const n = new F.y(o => {
						t = e.isStable && !e.hasPendingMacrotasks && !e.hasPendingMicrotasks, e.runOutsideAngular(() => {
							o.next(t), o.complete()
						})
					}),
					i = new F.y(o => {
						let r;
						e.runOutsideAngular(() => {
							r = e.onStable.subscribe(() => {
								Oi.assertNotInAngularZone(), queueMicrotask(() => {
									!t && !e.hasPendingMacrotasks && !e.hasPendingMicrotasks && (t = !0, o.next(!0))
								})
							})
						});
						const a = e.onUnstable.subscribe(() => {
							Oi.assertInAngularZone(), t && (t = !1, e.runOutsideAngular(() => {
								o.next(!1)
							}))
						});
						return () => {
							r.unsubscribe(), a.unsubscribe()
						}
					});
				return (0, h.T)(n, i.pipe((0, ne.B)()))
			}

			function lp(e) {
				return e.ownerDocument.defaultView
			}

			function up(e) {
				return e.ownerDocument
			}

			function Gr(e) {
				return e instanceof Function ? e() : e
			}

			function ga(e) {
				return "browser" === (e ?? k(Go)).get($u)
			}
			let cd = (() => {
				class e {
					constructor() {
						this.renderDepth = 0, this.handler = null
					}
					begin() {
						this.handler?.validateBegin(), this.renderDepth++
					}
					end() {
						this.renderDepth--, 0 === this.renderDepth && this.handler?.execute()
					}
					ngOnDestroy() {
						this.handler?.destroy(), this.handler = null
					}
					static #e = this.\u0275prov = mt({
						token: e,
						providedIn: "root",
						factory: () => new e
					})
				}
				return e
			})();

			function mc(e) {
				for (; e;) {
					e[Nt] |= 64;
					const t = oc(e);
					if (mo(e) && !t) return e;
					e = t
				}
				return null
			}
			const El = new Mt(""),
				mp = new Mt("", {
					providedIn: "root",
					factory: () => !1
				});
			let Cl = null;

			function bp(e, t) {
				return e[t] ?? Ep()
			}

			function yp(e, t) {
				const n = Ep();
				n.producerNode?.length && (e[t] = Cl, n.lView = e, Cl = Dp())
			}
			const s0 = {
				...Ar,
				consumerIsAlwaysLive: !0,
				consumerMarkedDirty: e => {
					mc(e.lView)
				},
				lView: null
			};

			function Dp() {
				return Object.create(s0)
			}

			function Ep() {
				return Cl ??= Dp(), Cl
			}
			const Gt = {};

			function Cp(e) {
				wp(qt(), Ve(), Wi() + e, !1)
			}

			function wp(e, t, n, i) {
				if (!i)
					if (3 == (3 & t[Nt])) {
						const r = e.preOrderCheckHooks;
						null !== r && W(t, r, n)
					} else {
						const r = e.preOrderHooks;
						null !== r && q(t, r, 0, n)
					} ls(n)
			}

			function _a(e, t = H.Default) {
				const n = Ve();
				return null === n ? se(e, t) : Yc(ui(), n, ge(e), t)
			}

			function Mp() {
				throw new Error("invalid")
			}

			function wl(e, t, n, i, o, r, a, u, g, C, A) {
				const U = t.blueprint.slice();
				return U[Dn] = o, U[Nt] = 140 | i, (null !== C || e && 2048 & e[Nt]) && (U[Nt] |= 2048), go(U), U[rn] = U[Fo] = e, U[mn] = n, U[Xn] = a || e && e[Xn], U[It] = u || e && e[It], U[io] = g || e && e[io] || null, U[Wn] = r, U[Mo] = function cb() {
					return ab++
				}(), U[xi] = A, U[ms] = C, U[An] = 2 == t.type ? e[An] : U, U
			}

			function va(e, t, n, i, o) {
				let r = e.data[t];
				if (null === r) r = function ld(e, t, n, i, o) {
						const r = Ks(),
							a = Ur(),
							g = e.data[t] = function p0(e, t, n, i, o, r) {
								let a = t ? t.injectorIndex : -1,
									u = 0;
								return fr() && (u |= 128), {
									type: n,
									index: i,
									insertBeforeIndex: null,
									injectorIndex: a,
									directiveStart: -1,
									directiveEnd: -1,
									directiveStylingLast: -1,
									componentOffset: -1,
									propertyBindings: null,
									flags: u,
									providerIndexes: 0,
									value: o,
									attrs: r,
									mergedAttrs: null,
									localNames: null,
									initialInputs: void 0,
									inputs: null,
									outputs: null,
									tView: null,
									next: null,
									prev: null,
									projectionNext: null,
									child: null,
									parent: t,
									projection: null,
									styles: null,
									stylesWithoutHost: null,
									residualStyles: void 0,
									classes: null,
									classesWithoutHost: null,
									residualClasses: void 0,
									classBindings: 0,
									styleBindings: 0
								}
							}(0, a ? r : r && r.parent, n, t, i, o);
						return null === e.firstChild && (e.firstChild = g), null !== r && (a ? null == r.child && null !== g.parent && (r.child = g) : null === r.next && (r.next = g, g.prev = r)), g
					}(e, t, n, i, o),
					function d() {
						return kt.lFrame.inI18n
					}() && (r.flags |= 32);
				else if (64 & r.type) {
					r.type = n, r.value = i, r.attrs = o;
					const a = function Vo() {
						const e = kt.lFrame,
							t = e.currentTNode;
						return e.isParent ? t : t.parent
					}();
					r.injectorIndex = null === a ? -1 : a.injectorIndex
				}
				return _o(r, !0), r
			}

			function gc(e, t, n, i) {
				if (0 === n) return -1;
				const o = t.length;
				for (let r = 0; r < n; r++) t.push(i), e.blueprint.push(i), e.data.push(null);
				return o
			}

			function xp(e, t, n, i, o) {
				const r = bp(t, xo),
					a = Wi(),
					u = 2 & i;
				try {
					ls(-1), u && t.length > Bt && wp(e, t, Bt, !1), ii(u ? 2 : 0, o);
					const C = u ? r : null,
						A = os(C);
					try {
						null !== C && (C.dirty = !1), n(i, o)
					} finally {
						Rr(C, A)
					}
				} finally {
					u && null === t[xo] && yp(t, xo), ls(a), ii(u ? 3 : 1, o)
				}
			}

			function ud(e, t, n) {
				if (po(t)) {
					const i = Ii(null);
					try {
						const r = t.directiveEnd;
						for (let a = t.directiveStart; a < r; a++) {
							const u = e.data[a];
							u.contentQueries && u.contentQueries(1, n[a], a)
						}
					} finally {
						Ii(i)
					}
				}
			}

			function dd(e, t, n) {
				Ga() && (function D0(e, t, n, i) {
					const o = n.directiveStart,
						r = n.directiveEnd;
					gn(n) && function S0(e, t, n) {
						const i = Si(t, e),
							o = Ip(n);
						let a = 16;
						n.signals ? a = 4096 : n.onPush && (a = 64);
						const u = Ml(e, wl(e, o, null, a, i, t, null, e[Xn].rendererFactory.createRenderer(i, n), null, null, null));
						e[t.index] = u
					}(t, n, e.data[o + n.componentOffset]), e.firstCreatePass || At(n, t), Yi(i, t);
					const a = n.initialInputs;
					for (let u = o; u < r; u++) {
						const g = e.data[u],
							C = Oo(t, e, u, n);
						Yi(C, t), null !== a && T0(0, u - o, C, g, 0, a), Fi(g) && (Li(n.index, t)[mn] = Oo(t, e, u, n))
					}
				}(e, t, n, Si(n, t)), 64 == (64 & n.flags) && Pp(e, t, n))
			}

			function fd(e, t, n = Si) {
				const i = t.localNames;
				if (null !== i) {
					let o = t.index + 1;
					for (let r = 0; r < i.length; r += 2) {
						const a = i[r + 1],
							u = -1 === a ? n(t, e) : e[a];
						e[o++] = u
					}
				}
			}

			function Ip(e) {
				const t = e.tView;
				return null === t || t.incompleteFirstPass ? e.tView = hd(1, null, e.template, e.decls, e.vars, e.directiveDefs, e.pipeDefs, e.viewQuery, e.schemas, e.consts, e.id) : t
			}

			function hd(e, t, n, i, o, r, a, u, g, C, A) {
				const U = Bt + i,
					oe = U + o,
					fe = function c0(e, t) {
						const n = [];
						for (let i = 0; i < t; i++) n.push(i < e ? null : Gt);
						return n
					}(U, oe),
					je = "function" == typeof C ? C() : C;
				return fe[at] = {
					type: e,
					blueprint: fe,
					template: n,
					queries: null,
					viewQuery: u,
					declTNode: t,
					data: fe.slice().fill(null, U),
					bindingStartIndex: U,
					expandoStartIndex: oe,
					hostBindingOpCodes: null,
					firstCreatePass: !0,
					firstUpdatePass: !0,
					staticViewQueries: !1,
					staticContentQueries: !1,
					preOrderHooks: null,
					preOrderCheckHooks: null,
					contentHooks: null,
					contentCheckHooks: null,
					viewHooks: null,
					viewCheckHooks: null,
					destroyHooks: null,
					cleanup: null,
					contentQueries: null,
					components: null,
					directiveRegistry: "function" == typeof r ? r() : r,
					pipeRegistry: "function" == typeof a ? a() : a,
					firstChild: null,
					schemas: g,
					consts: je,
					incompleteFirstPass: !1,
					ssrId: A
				}
			}
			let Sp = e => null;

			function d0(e) {
				Zf(e) ? _h(e) : function Iy(e) {
					const t = ca(),
						n = t.createNodeIterator(e, NodeFilter.SHOW_COMMENT, {
							acceptNode(r) {
								const a = function xy(e) {
									return e.textContent?.replace(/\s/gm, "")
								}(r);
								return "ngetn" === a || "ngtns" === a ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT
							}
						});
					let i;
					const o = [];
					for (; i = n.nextNode();) o.push(i);
					for (const r of o) "ngetn" === r.textContent ? r.replaceWith(t.createTextNode("")) : r.remove()
				}(e)
			}

			function Tp(e, t, n, i) {
				for (let o in e)
					if (e.hasOwnProperty(o)) {
						n = null === n ? {} : n;
						const r = e[o];
						null === i ? Ap(n, t, o, r) : i.hasOwnProperty(o) && Ap(n, t, i[o], r)
					} return n
			}

			function Ap(e, t, n, i) {
				e.hasOwnProperty(n) ? e[n].push(t, i) : e[n] = [t, i]
			}

			function Do(e, t, n, i, o, r, a, u) {
				const g = Si(t, n);
				let A, C = t.inputs;
				!u && null != C && (A = C[i]) ? (vd(e, n, A, i, o), gn(t) && function _0(e, t) {
					const n = Li(t, e);
					16 & n[Nt] || (n[Nt] |= 64)
				}(n, t.index)) : 3 & t.type && (i = function g0(e) {
					return "class" === e ? "className" : "for" === e ? "htmlFor" : "formaction" === e ? "formAction" : "innerHtml" === e ? "innerHTML" : "readonly" === e ? "readOnly" : "tabindex" === e ? "tabIndex" : e
				}(i), o = null != a ? a(o, t.value || "", i) : o, r.setProperty(g, i, o))
			}

			function pd(e, t, n, i) {
				if (Ga()) {
					const o = null === i ? null : {
							"": -1
						},
						r = function C0(e, t) {
							const n = e.directiveRegistry;
							let i = null,
								o = null;
							if (n)
								for (let r = 0; r < n.length; r++) {
									const a = n[r];
									if (hs(t, a.selectors, !1))
										if (i || (i = []), Fi(a))
											if (null !== a.findHostDirectiveDefs) {
												const u = [];
												o = o || new Map, a.findHostDirectiveDefs(a, u, o), i.unshift(...u, a), md(e, t, u.length)
											} else i.unshift(a), md(e, t, 0);
									else o = o || new Map, a.findHostDirectiveDefs?.(a, i, o), i.push(a)
								}
							return null === i ? null : [i, o]
						}(e, n);
					let a, u;
					null === r ? a = u = null : [a, u] = r, null !== a && Op(e, t, n, a, o, u), o && function w0(e, t, n) {
						if (t) {
							const i = e.localNames = [];
							for (let o = 0; o < t.length; o += 2) {
								const r = n[t[o + 1]];
								if (null == r) throw new $(-301, !1);
								i.push(t[o], r)
							}
						}
					}(n, i, o)
				}
				n.mergedAttrs = Xt(n.mergedAttrs, n.attrs)
			}

			function Op(e, t, n, i, o, r) {
				for (let C = 0; C < i.length; C++) ji(At(n, t), e, i[C].type);
				! function x0(e, t, n) {
					e.flags |= 1, e.directiveStart = t, e.directiveEnd = t + n, e.providerIndexes = t
				}(n, e.data.length, i.length);
				for (let C = 0; C < i.length; C++) {
					const A = i[C];
					A.providersResolver && A.providersResolver(A)
				}
				let a = !1,
					u = !1,
					g = gc(e, t, i.length, null);
				for (let C = 0; C < i.length; C++) {
					const A = i[C];
					n.mergedAttrs = Xt(n.mergedAttrs, A.hostAttrs), I0(e, n, t, g, A), M0(g, A, o), null !== A.contentQueries && (n.flags |= 4), (null !== A.hostBindings || null !== A.hostAttrs || 0 !== A.hostVars) && (n.flags |= 64);
					const U = A.type.prototype;
					!a && (U.ngOnChanges || U.ngOnInit || U.ngDoCheck) && ((e.preOrderHooks ??= []).push(n.index), a = !0), !u && (U.ngOnChanges || U.ngDoCheck) && ((e.preOrderCheckHooks ??= []).push(n.index), u = !0), g++
				}! function m0(e, t, n) {
					const o = t.directiveEnd,
						r = e.data,
						a = t.attrs,
						u = [];
					let g = null,
						C = null;
					for (let A = t.directiveStart; A < o; A++) {
						const U = r[A],
							oe = n ? n.get(U) : null,
							je = oe ? oe.outputs : null;
						g = Tp(U.inputs, A, g, oe ? oe.inputs : null), C = Tp(U.outputs, A, C, je);
						const Qe = null === g || null === a || Gn(t) ? null : A0(g, A, a);
						u.push(Qe)
					}
					null !== g && (g.hasOwnProperty("class") && (t.flags |= 8), g.hasOwnProperty("style") && (t.flags |= 16)), t.initialInputs = u, t.inputs = g, t.outputs = C
				}(e, n, r)
			}

			function Pp(e, t, n) {
				const i = n.directiveStart,
					o = n.directiveEnd,
					r = n.index,
					a = function P() {
						return kt.lFrame.currentDirectiveIndex
					}();
				try {
					ls(r);
					for (let u = i; u < o; u++) {
						const g = e.data[u],
							C = t[u];
						Y(u), (null !== g.hostBindings || 0 !== g.hostVars || null !== g.hostAttrs) && E0(g, C)
					}
				} finally {
					ls(-1), Y(a)
				}
			}

			function E0(e, t) {
				null !== e.hostBindings && e.hostBindings(1, t)
			}

			function md(e, t, n) {
				t.componentOffset = n, (e.components ??= []).push(t.index)
			}

			function M0(e, t, n) {
				if (n) {
					if (t.exportAs)
						for (let i = 0; i < t.exportAs.length; i++) n[t.exportAs[i]] = e;
					Fi(t) && (n[""] = e)
				}
			}

			function I0(e, t, n, i, o) {
				e.data[i] = o;
				const r = o.factory || (o.factory = Wt(o.type)),
					a = new Ft(r, Fi(o), _a);
				e.blueprint[i] = a, n[i] = a,
					function b0(e, t, n, i, o) {
						const r = o.hostBindings;
						if (r) {
							let a = e.hostBindingOpCodes;
							null === a && (a = e.hostBindingOpCodes = []);
							const u = ~t.index;
							(function y0(e) {
								let t = e.length;
								for (; t > 0;) {
									const n = e[--t];
									if ("number" == typeof n && n < 0) return n
								}
								return 0
							})(a) != u && a.push(u), a.push(n, i, r)
						}
					}(e, t, i, gc(e, n, o.hostVars, Gt), o)
			}

			function br(e, t, n, i, o, r) {
				const a = Si(e, t);
				! function gd(e, t, n, i, o, r, a) {
					if (null == r) e.removeAttribute(t, o, n);
					else {
						const u = null == a ? he(r) : a(r, i || "", o);
						e.setAttribute(t, o, u, n)
					}
				}(t[It], a, r, e.value, n, i, o)
			}

			function T0(e, t, n, i, o, r) {
				const a = r[t];
				if (null !== a)
					for (let u = 0; u < a.length;) Rp(i, n, a[u++], a[u++], a[u++])
			}

			function Rp(e, t, n, i, o) {
				const r = Ii(null);
				try {
					const a = e.inputTransforms;
					null !== a && a.hasOwnProperty(i) && (o = a[i].call(t, o)), null !== e.setInput ? e.setInput(t, o, n, i) : t[i] = o
				} finally {
					Ii(r)
				}
			}

			function A0(e, t, n) {
				let i = null,
					o = 0;
				for (; o < n.length;) {
					const r = n[o];
					if (0 !== r)
						if (5 !== r) {
							if ("number" == typeof r) break;
							if (e.hasOwnProperty(r)) {
								null === i && (i = []);
								const a = e[r];
								for (let u = 0; u < a.length; u += 2)
									if (a[u] === t) {
										i.push(r, a[u + 1], n[o + 1]);
										break
									}
							}
							o += 2
						} else o += 2;
					else o += 4
				}
				return i
			}

			function Np(e, t, n, i) {
				return [e, !0, !1, t, null, 0, i, n, null, null, null]
			}

			function kp(e, t) {
				const n = e.contentQueries;
				if (null !== n)
					for (let i = 0; i < n.length; i += 2) {
						const r = n[i + 1];
						if (-1 !== r) {
							const a = e.data[r];
							ct(n[i]), a.contentQueries(2, t[r], r)
						}
					}
			}

			function Ml(e, t) {
				return e[ki] ? e[qo][Mi] = t : e[ki] = t, e[qo] = t, t
			}

			function _d(e, t, n) {
				ct(0);
				const i = Ii(null);
				try {
					t(e, n)
				} finally {
					Ii(i)
				}
			}

			function Fp(e) {
				return e[ho] || (e[ho] = [])
			}

			function Lp(e) {
				return e.cleanup || (e.cleanup = [])
			}

			function Bp(e, t, n) {
				return (null === e || Fi(e)) && (n = function ur(e) {
					for (; Array.isArray(e);) {
						if ("object" == typeof e[Yn]) return e;
						e = e[Dn]
					}
					return null
				}(n[t.index])), n[It]
			}

			function jp(e, t) {
				const n = e[io],
					i = n ? n.get(us, null) : null;
				i && i.handleError(t)
			}

			function vd(e, t, n, i, o) {
				for (let r = 0; r < n.length;) {
					const a = n[r++],
						u = n[r++];
					Rp(e.data[a], t[a], i, u, o)
				}
			}

			function Wr(e, t, n) {
				const i = Lr(t, e);
				! function ah(e, t, n) {
					e.setValue(t, n)
				}(e[It], i, n)
			}

			function O0(e, t) {
				const n = Li(t, e),
					i = n[at];
				! function P0(e, t) {
					for (let n = t.length; n < e.blueprint.length; n++) t.push(e.blueprint[n])
				}(i, n);
				const o = n[Dn];
				null !== o && null === n[xi] && (n[xi] = Ju(o, n[io])), bd(i, n, n[mn])
			}

			function bd(e, t, n) {
				Zt(t);
				try {
					const i = e.viewQuery;
					null !== i && _d(1, i, n);
					const o = e.template;
					null !== o && xp(e, t, o, 1, n), e.firstCreatePass && (e.firstCreatePass = !1), e.staticContentQueries && kp(e, t), e.staticViewQueries && _d(2, e.viewQuery, n);
					const r = e.components;
					null !== r && function R0(e, t) {
						for (let n = 0; n < t.length; n++) O0(e, t[n])
					}(t, r)
				} catch (i) {
					throw e.firstCreatePass && (e.incompleteFirstPass = !0, e.firstCreatePass = !1), i
				} finally {
					t[Nt] &= -5, zo()
				}
			}
			let Hp = (() => {
				class e {
					constructor() {
						this.all = new Set, this.queue = new Map
					}
					create(n, i, o) {
						const r = typeof Zone > "u" ? null : Zone.current,
							a = function ft(e, t, n) {
								const i = Object.create(cn);
								n && (i.consumerAllowSignalWrites = !0), i.fn = e, i.schedule = t;
								const o = a => {
									i.cleanupFn = a
								};
								return i.ref = {
									notify: () => Pr(i),
									run: () => {
										if (i.dirty = !1, i.hasRun && !rs(i)) return;
										i.hasRun = !0;
										const a = os(i);
										try {
											i.cleanupFn(), i.cleanupFn = zt, i.fn(o)
										} finally {
											Rr(i, a)
										}
									},
									cleanup: () => i.cleanupFn()
								}, i.ref
							}(n, C => {
								this.all.has(C) && this.queue.set(C, r)
							}, o);
						let u;
						this.all.add(a), a.notify();
						const g = () => {
							a.cleanup(), u?.(), this.all.delete(a), this.queue.delete(a)
						};
						return u = i?.onDestroy(g), {
							destroy: g
						}
					}
					flush() {
						if (0 !== this.queue.size)
							for (const [n, i] of this.queue) this.queue.delete(n), i ? i.run(() => n.run()) : n.run()
					}
					get isQueueEmpty() {
						return 0 === this.queue.size
					}
					static #e = this.\u0275prov = mt({
						token: e,
						providedIn: "root",
						factory: () => new e
					})
				}
				return e
			})();

			function xl(e, t, n) {
				let i = n ? e.styles : null,
					o = n ? e.classes : null,
					r = 0;
				if (null !== t)
					for (let a = 0; a < t.length; a++) {
						const u = t[a];
						"number" == typeof u ? r = u : 1 == r ? o = xe(o, u) : 2 == r && (i = xe(i, u + ": " + t[++a] + ";"))
					}
				n ? e.styles = i : e.stylesWithoutHost = i, n ? e.classes = o : e.classesWithoutHost = o
			}

			function _c(e, t, n, i, o = !1) {
				for (; null !== n;) {
					const r = t[n.index];
					null !== r && i.push(_n(r)), qn(r) && Up(r, i);
					const a = n.type;
					if (8 & a) _c(e, t, n.child, i);
					else if (32 & a) {
						const u = Du(n, t);
						let g;
						for (; g = u();) i.push(g)
					} else if (16 & a) {
						const u = gh(t, n);
						if (Array.isArray(u)) i.push(...u);
						else {
							const g = oc(t[An]);
							_c(g[at], g, u, i, !0)
						}
					}
					n = o ? n.projectionNext : n.next
				}
				return i
			}

			function Up(e, t) {
				for (let n = Kn; n < e.length; n++) {
					const i = e[n],
						o = i[at].firstChild;
					null !== o && _c(i[at], i, o, t)
				}
				e[_i] !== e[Dn] && t.push(e[_i])
			}

			function Il(e, t, n, i = !0) {
				const o = t[Xn],
					r = o.rendererFactory,
					a = o.afterRenderEventManager;
				r.begin?.(), a?.begin();
				try {
					Vp(e, t, e.template, n)
				} catch (g) {
					throw i && jp(t, g), g
				} finally {
					r.end?.(), o.effectManager?.flush(), a?.end()
				}
			}

			function Vp(e, t, n, i) {
				const o = t[Nt];
				if (256 != (256 & o)) {
					t[Xn].effectManager?.flush(), Zt(t);
					try {
						go(t),
							function Za(e) {
								return kt.lFrame.bindingIndex = e
							}(e.bindingStartIndex), null !== n && xp(e, t, n, 2, i);
						const a = 3 == (3 & o);
						if (a) {
							const C = e.preOrderCheckHooks;
							null !== C && W(t, C, null)
						} else {
							const C = e.preOrderHooks;
							null !== C && q(t, C, 0, null), be(t, 0)
						}
						if (function F0(e) {
								for (let t = oh(e); null !== t; t = rh(t)) {
									if (!t[er]) continue;
									const n = t[Qi];
									for (let i = 0; i < n.length; i++) {
										Fc(n[i])
									}
								}
							}(t), zp(t, 2), null !== e.contentQueries && kp(e, t), a) {
							const C = e.contentCheckHooks;
							null !== C && W(t, C)
						} else {
							const C = e.contentHooks;
							null !== C && q(t, C, 1), be(t, 1)
						}! function a0(e, t) {
							const n = e.hostBindingOpCodes;
							if (null === n) return;
							const i = bp(t, Jn);
							try {
								for (let o = 0; o < n.length; o++) {
									const r = n[o];
									if (r < 0) ls(~r);
									else {
										const a = r,
											u = n[++o],
											g = n[++o];
										w(u, a), i.dirty = !1;
										const C = os(i);
										try {
											g(2, t[a])
										} finally {
											Rr(i, C)
										}
									}
								}
							} finally {
								null === t[Jn] && yp(t, Jn), ls(-1)
							}
						}(e, t);
						const u = e.components;
						null !== u && Gp(t, u, 0);
						const g = e.viewQuery;
						if (null !== g && _d(2, g, i), a) {
							const C = e.viewCheckHooks;
							null !== C && W(t, C)
						} else {
							const C = e.viewHooks;
							null !== C && q(t, C, 2), be(t, 2)
						}!0 === e.firstUpdatePass && (e.firstUpdatePass = !1), t[Nt] &= -73, za(t)
					} finally {
						zo()
					}
				}
			}

			function zp(e, t) {
				for (let n = oh(e); null !== n; n = rh(n))
					for (let i = Kn; i < n.length; i++) $p(n[i], t)
			}

			function L0(e, t, n) {
				$p(Li(t, e), n)
			}

			function $p(e, t) {
				if (! function Gs(e) {
						return 128 == (128 & e[Nt])
					}(e)) return;
				const n = e[at],
					i = e[Nt];
				if (80 & i && 0 === t || 1024 & i || 2 === t) Vp(n, e, n.template, e[mn]);
				else if (e[fo] > 0) {
					zp(e, 1);
					const o = n.components;
					null !== o && Gp(e, o, 1)
				}
			}

			function Gp(e, t, n) {
				for (let i = 0; i < t.length; i++) L0(e, t[i], n)
			}
			class vc {
				get rootNodes() {
					const t = this._lView,
						n = t[at];
					return _c(n, t, n.firstChild, [])
				}
				constructor(t, n) {
					this._lView = t, this._cdRefInjectingView = n, this._appRef = null, this._attachedToViewContainer = !1
				}
				get context() {
					return this._lView[mn]
				}
				set context(t) {
					this._lView[mn] = t
				}
				get destroyed() {
					return 256 == (256 & this._lView[Nt])
				}
				destroy() {
					if (this._appRef) this._appRef.detachView(this);
					else if (this._attachedToViewContainer) {
						const t = this._lView[rn];
						if (qn(t)) {
							const n = t[8],
								i = n ? n.indexOf(this) : -1;
							i > -1 && (al(t, i), Kc(n, i))
						}
						this._attachedToViewContainer = !1
					}
					Cu(this._lView[at], this._lView)
				}
				onDestroy(t) {
					! function $a(e, t) {
						if (256 == (256 & e[Nt])) throw new $(911, !1);
						null === e[gi] && (e[gi] = []), e[gi].push(t)
					}(this._lView, t)
				}
				markForCheck() {
					mc(this._cdRefInjectingView || this._lView)
				}
				detach() {
					this._lView[Nt] &= -129
				}
				reattach() {
					this._lView[Nt] |= 128
				}
				detectChanges() {
					Il(this._lView[at], this._lView, this.context)
				}
				checkNoChanges() {}
				attachToViewContainerRef() {
					if (this._appRef) throw new $(902, !1);
					this._attachedToViewContainer = !0
				}
				detachFromAppRef() {
					this._appRef = null,
						function Eb(e, t) {
							sc(e, t, t[It], 2, null, null)
						}(this._lView[at], this._lView)
				}
				attachToAppRef(t) {
					if (this._attachedToViewContainer) throw new $(902, !1);
					this._appRef = t
				}
			}
			class B0 extends vc {
				constructor(t) {
					super(t), this._view = t
				}
				detectChanges() {
					const t = this._view;
					Il(t[at], t, t[mn], !1)
				}
				checkNoChanges() {}
				get context() {
					return null
				}
			}
			class Wp extends hc {
				constructor(t) {
					super(), this.ngModule = t
				}
				resolveComponentFactory(t) {
					const n = Ht(t);
					return new bc(n, this.ngModule)
				}
			}

			function Yp(e) {
				const t = [];
				for (let n in e) e.hasOwnProperty(n) && t.push({
					propName: e[n],
					templateName: n
				});
				return t
			}
			class H0 {
				constructor(t, n) {
					this.injector = t, this.parentInjector = n
				}
				get(t, n, i) {
					i = Z(i);
					const o = this.injector.get(t, td, i);
					return o !== td || n === td ? o : this.parentInjector.get(t, n, i)
				}
			}
			class bc extends Kh {
				get inputs() {
					const t = this.componentDef,
						n = t.inputTransforms,
						i = Yp(t.inputs);
					if (null !== n)
						for (const o of i) n.hasOwnProperty(o.propName) && (o.transform = n[o.propName]);
					return i
				}
				get outputs() {
					return Yp(this.componentDef.outputs)
				}
				constructor(t, n) {
					super(), this.componentDef = t, this.ngModule = n, this.componentType = t.type, this.selector = function Qo(e) {
						return e.map(mi).join(",")
					}(t.selectors), this.ngContentSelectors = t.ngContentSelectors ? t.ngContentSelectors : [], this.isBoundToModule = !!n
				}
				create(t, n, i, o) {
					let r = (o = o || this.ngModule) instanceof _r ? o : o?.injector;
					r && null !== this.componentDef.getStandaloneInjector && (r = this.componentDef.getStandaloneInjector(r) || r);
					const a = r ? new H0(t, r) : t,
						u = a.get(Qh, null);
					if (null === u) throw new $(407, !1);
					const U = {
							rendererFactory: u,
							sanitizer: a.get(Ly, null),
							effectManager: a.get(Hp, null),
							afterRenderEventManager: a.get(cd, null)
						},
						oe = u.createRenderer(null, this.componentDef),
						fe = this.componentDef.selectors[0][0] || "div",
						je = i ? function l0(e, t, n, i) {
							const r = i.get(mp, !1) || n === ot.ShadowDom,
								a = e.selectRootElement(t, r);
							return function u0(e) {
								Sp(e)
							}(a), a
						}(oe, i, this.componentDef.encapsulation, a) : sl(oe, fe, function j0(e) {
							const t = e.toLowerCase();
							return "svg" === t ? Gi : "math" === t ? "math" : null
						}(fe)),
						xt = this.componentDef.signals ? 4608 : this.componentDef.onPush ? 576 : 528;
					let ze = null;
					null !== je && (ze = Ju(je, a, !0));
					const jt = hd(0, null, null, 1, 0, null, null, null, null, null, null),
						Kt = wl(null, jt, null, xt, null, null, U, oe, a, null, ze);
					let Cn, uo;
					Zt(Kt);
					try {
						const Yr = this.componentDef;
						let ka, Af = null;
						Yr.findHostDirectiveDefs ? (ka = [], Af = new Map, Yr.findHostDirectiveDefs(Yr, ka, Af), ka.push(Yr)) : ka = [Yr];
						const $M = function V0(e, t) {
								const n = e[at],
									i = Bt;
								return e[i] = t, va(n, i, 2, "#host", null)
							}(Kt, je),
							GM = function z0(e, t, n, i, o, r, a) {
								const u = o[at];
								! function $0(e, t, n, i) {
									for (const o of e) t.mergedAttrs = Xt(t.mergedAttrs, o.hostAttrs);
									null !== t.mergedAttrs && (xl(t, t.mergedAttrs, !0), null !== n && yh(i, n, t))
								}(i, e, t, a);
								let g = null;
								null !== t && (g = Ju(t, o[io]));
								const C = r.rendererFactory.createRenderer(t, n);
								let A = 16;
								n.signals ? A = 4096 : n.onPush && (A = 64);
								const U = wl(o, Ip(n), null, A, o[e.index], e, r, C, null, null, g);
								return u.firstCreatePass && md(u, e, i.length - 1), Ml(o, U), o[e.index] = U
							}($M, je, Yr, ka, Kt, U, oe);
						uo = Va(jt, Bt), je && function W0(e, t, n, i) {
							if (i) dn(e, n, ["ng-version", By.full]);
							else {
								const {
									attrs: o,
									classes: r
								} = function Xr(e) {
									const t = [],
										n = [];
									let i = 1,
										o = 2;
									for (; i < e.length;) {
										let r = e[i];
										if ("string" == typeof r) 2 === o ? "" !== r && t.push(r, e[++i]) : 8 === o && n.push(r);
										else {
											if (!Ci(o)) break;
											o = r
										}
										i++
									}
									return {
										attrs: t,
										classes: n
									}
								}(t.selectors[0]);
								o && dn(e, n, o), r && r.length > 0 && bh(e, n, r.join(" "))
							}
						}(oe, Yr, je, i), void 0 !== n && function Y0(e, t, n) {
							const i = e.projection = [];
							for (let o = 0; o < t.length; o++) {
								const r = n[o];
								i.push(null != r ? Array.from(r) : null)
							}
						}(uo, this.ngContentSelectors, n), Cn = function G0(e, t, n, i, o, r) {
							const a = ui(),
								u = o[at],
								g = Si(a, o);
							Op(u, o, a, n, null, i);
							for (let A = 0; A < n.length; A++) Yi(Oo(o, u, a.directiveStart + A, a), o);
							Pp(u, o, a), g && Yi(g, o);
							const C = Oo(o, u, a.directiveStart + a.componentOffset, a);
							if (e[mn] = o[mn] = C, null !== r)
								for (const A of r) A(C, t);
							return ud(u, a, e), C
						}(GM, Yr, ka, Af, Kt, [K0]), bd(jt, Kt, null)
					} finally {
						zo()
					}
					return new U0(this.componentType, Cn, pa(uo, Kt), Kt, uo)
				}
			}
			class U0 extends Ay {
				constructor(t, n, i, o, r) {
					super(), this.location = i, this._rootLView = o, this._tNode = r, this.previousInputValues = null, this.instance = n, this.hostView = this.changeDetectorRef = new B0(o), this.componentType = t
				}
				setInput(t, n) {
					const i = this._tNode.inputs;
					let o;
					if (null !== i && (o = i[t])) {
						if (this.previousInputValues ??= new Map, this.previousInputValues.has(t) && Object.is(this.previousInputValues.get(t), n)) return;
						const r = this._rootLView;
						vd(r[at], r, o, t, n), this.previousInputValues.set(t, n), mc(Li(this._tNode.index, r))
					}
				}
				get injector() {
					return new eo(this._tNode, this._rootLView)
				}
				destroy() {
					this.hostView.destroy()
				}
				onDestroy(t) {
					this.hostView.onDestroy(t)
				}
			}

			function K0() {
				const e = ui();
				T(Ve()[at], e)
			}

			function yd(e) {
				let t = function Kp(e) {
						return Object.getPrototypeOf(e.prototype).constructor
					}(e.type),
					n = !0;
				const i = [e];
				for (; t;) {
					let o;
					if (Fi(e)) o = t.\u0275cmp || t.\u0275dir;
					else {
						if (t.\u0275cmp) throw new $(903, !1);
						o = t.\u0275dir
					}
					if (o) {
						if (n) {
							i.push(o);
							const a = e;
							a.inputs = Sl(e.inputs), a.inputTransforms = Sl(e.inputTransforms), a.declaredInputs = Sl(e.declaredInputs), a.outputs = Sl(e.outputs);
							const u = o.hostBindings;
							u && J0(e, u);
							const g = o.viewQuery,
								C = o.contentQueries;
							if (g && Q0(e, g), C && X0(e, C), de(e.inputs, o.inputs), de(e.declaredInputs, o.declaredInputs), de(e.outputs, o.outputs), null !== o.inputTransforms && (null === a.inputTransforms && (a.inputTransforms = {}), de(a.inputTransforms, o.inputTransforms)), Fi(o) && o.data.animation) {
								const A = e.data;
								A.animation = (A.animation || []).concat(o.data.animation)
							}
						}
						const r = o.features;
						if (r)
							for (let a = 0; a < r.length; a++) {
								const u = r[a];
								u && u.ngInherit && u(e), u === yd && (n = !1)
							}
					}
					t = Object.getPrototypeOf(t)
				}! function Z0(e) {
					let t = 0,
						n = null;
					for (let i = e.length - 1; i >= 0; i--) {
						const o = e[i];
						o.hostVars = t += o.hostVars, o.hostAttrs = Xt(o.hostAttrs, n = Xt(n, o.hostAttrs))
					}
				}(i)
			}

			function Sl(e) {
				return e === et ? {} : e === vt ? [] : e
			}

			function Q0(e, t) {
				const n = e.viewQuery;
				e.viewQuery = n ? (i, o) => {
					t(i, o), n(i, o)
				} : t
			}

			function X0(e, t) {
				const n = e.contentQueries;
				e.contentQueries = n ? (i, o, r) => {
					t(i, o, r), n(i, o, r)
				} : t
			}

			function J0(e, t) {
				const n = e.hostBindings;
				e.hostBindings = n ? (i, o) => {
					t(i, o), n(i, o)
				} : t
			}

			function Jp(e) {
				const t = e.inputConfig,
					n = {};
				for (const i in t)
					if (t.hasOwnProperty(i)) {
						const o = t[i];
						Array.isArray(o) && o[2] && (n[i] = o[2])
					} e.inputTransforms = n
			}

			function Tl(e) {
				return !!Dd(e) && (Array.isArray(e) || !(e instanceof Map) && Symbol.iterator in e)
			}

			function Dd(e) {
				return null !== e && ("function" == typeof e || "object" == typeof e)
			}

			function yr(e, t, n) {
				return e[t] = n
			}

			function yc(e, t) {
				return e[t]
			}

			function Ki(e, t, n) {
				return !Object.is(e[t], n) && (e[t] = n, !0)
			}

			function ks(e, t, n, i) {
				const o = Ki(e, t, n);
				return Ki(e, t + 1, i) || o
			}

			function Al(e, t, n, i, o) {
				const r = ks(e, t, n, i);
				return Ki(e, t + 2, o) || r
			}

			function Ro(e, t, n, i, o, r) {
				const a = ks(e, t, n, i);
				return ks(e, t + 2, o, r) || a
			}

			function Ed(e, t, n, i) {
				const o = Ve();
				return Ki(o, p(), t) && (qt(), br(Hn(), o, e, t, n, i)), Ed
			}

			function ya(e, t, n, i) {
				return Ki(e, p(), n) ? t + he(n) + i : Gt
			}

			function Da(e, t, n, i, o, r) {
				const u = ks(e, vo(), n, o);
				return _(2), u ? t + he(n) + i + he(o) + r : Gt
			}
			const mD = new RegExp(`^(\\d+)*(${Wu}|${Gu})*(.*)`);

			function xd(e) {
				return e.index - Bt
			}

			function Pl(e, t, n, i) {
				let o = null;
				const r = xd(i),
					a = e.data[Qu];
				if (a?.[r]) o = function yD(e, t) {
					const [n, ...i] = function _D(e) {
						const t = e.match(mD),
							[n, i, o, r] = t,
							a = i ? parseInt(i, 10) : o,
							u = [];
						for (const [g, C, A] of r.matchAll(/(f|n)(\d*)/g)) {
							const U = parseInt(A, 10) || 1;
							u.push(C, U)
						}
						return [a, ...u]
					}(e);
					let o;
					return o = n === Gu ? t[An][Dn] : n === Wu ? function dp(e) {
							return e.ownerDocument.body
						}(t[An][Dn]) : _n(t[Number(n) + Bt]),
						function bD(e, t) {
							let n = e;
							for (let i = 0; i < t.length; i += 2) {
								const o = t[i],
									r = t[i + 1];
								for (let a = 0; a < r; a++) switch (o) {
									case fa.FirstChild:
										n = n.firstChild;
										break;
									case fa.NextSibling:
										n = n.nextSibling
								}
							}
							return n
						}(o, i)
				}(a[r], n);
				else if (t.firstChild === i) o = e.firstChild;
				else {
					const u = null === i.prev,
						g = i.prev ?? i.parent;
					if (function vD(e) {
							return !e.prev && 8 === e.parent?.type
						}(i)) o = qu(e, xd(i.parent));
					else {
						let C = Si(g, n);
						if (u) o = C.firstChild;
						else {
							const A = xd(g),
								U = qu(e, A);
							o = 2 === g.type && U ? Rl(ed(e, A) + 1, U) : C.nextSibling
						}
					}
				}
				return o
			}

			function Rl(e, t) {
				let n = t;
				for (let i = 0; i < e; i++) n = n.nextSibling;
				return n
			}

			function dm(e, t, n, i, o, r, a, u) {
				const g = Ve(),
					C = qt(),
					A = e + Bt,
					U = C.firstCreatePass ? function CD(e, t, n, i, o, r, a, u, g) {
						const C = t.consts,
							A = va(t, e, 4, a || null, Ao(C, u));
						pd(t, n, A, Ao(C, g)), T(t, A);
						const U = A.tView = hd(2, A, i, o, r, t.directiveRegistry, t.pipeRegistry, null, t.schemas, C, null);
						return null !== t.queries && (t.queries.template(t, A), U.queries = t.queries.embeddedTView(A)), A
					}(A, C, g, t, n, i, o, r, a) : C.data[A];
				_o(U, !1);
				const oe = fm(C, g, U, e);
				s() && ll(C, g, oe, U), Yi(oe, g), Ml(g, g[A] = Np(oe, g, oe, U)), ir(U) && dd(C, g, U), null != a && fd(g, U, u)
			}
			let fm = hm;

			function hm(e, t, n, i) {
				return f(!0), t[It].createComment("")
			}

			function wD(e, t, n, i) {
				const o = t[xi],
					r = !o || fr() || Dl(o, i);
				if (f(r), r) return hm(0, t);
				const a = o.data[Ku]?.[i] ?? null;
				null !== a && null !== n.tView && null === n.tView.ssrId && (n.tView.ssrId = a);
				const u = Pl(o, e, t, n);
				return yl(o, i, u), Rl(ed(o, i), u)
			}

			function pm(e) {
				return Br(function zc() {
					return kt.lFrame.contextLView
				}(), Bt + e)
			}

			function Sd(e, t, n) {
				const i = Ve();
				return Ki(i, p(), t) && Do(qt(), Hn(), i, e, t, i[It], n, !1), Sd
			}

			function Td(e, t, n, i, o) {
				const a = o ? "class" : "style";
				vd(e, n, t.inputs[a], a, i)
			}

			function Nl(e, t, n, i) {
				const o = Ve(),
					r = qt(),
					a = Bt + e,
					u = o[It],
					g = r.firstCreatePass ? function ID(e, t, n, i, o, r) {
						const a = t.consts,
							g = va(t, e, 2, i, Ao(a, o));
						return pd(t, n, g, Ao(a, r)), null !== g.attrs && xl(g, g.attrs, !1), null !== g.mergedAttrs && xl(g, g.mergedAttrs, !0), null !== t.queries && t.queries.elementStart(t, g), g
					}(a, r, o, t, n, i) : r.data[a],
					C = mm(r, o, g, u, t, e);
				o[a] = C;
				const A = ir(g);
				return _o(g, !0), yh(u, C, g), 32 != (32 & g.flags) && s() && ll(r, o, C, g), 0 === function Ws() {
						return kt.lFrame.elementDepthCount
					}() && Yi(C, o),
					function jc() {
						kt.lFrame.elementDepthCount++
					}(), A && (dd(r, o, g), ud(r, g, o)), null !== i && fd(o, g), Nl
			}

			function kl() {
				let e = ui();
				Ur() ? Zs() : (e = e.parent, _o(e, !1));
				const t = e;
				(function Hc(e) {
					return kt.skipHydrationRootTNode === e
				})(t) && function Vc() {
					kt.skipHydrationRootTNode = null
				}(),
				function dr() {
					kt.lFrame.elementDepthCount--
				}();
				const n = qt();
				return n.firstCreatePass && (T(n, e), po(e) && n.queries.elementEnd(e)), null != t.classesWithoutHost && function fi(e) {
					return 0 != (8 & e.flags)
				}(t) && Td(n, t, Ve(), t.classesWithoutHost, !0), null != t.stylesWithoutHost && function Bi(e) {
					return 0 != (16 & e.flags)
				}(t) && Td(n, t, Ve(), t.stylesWithoutHost, !1), kl
			}

			function Ad(e, t, n, i) {
				return Nl(e, t, n, i), kl(), Ad
			}
			let mm = (e, t, n, i, o, r) => (f(!0), sl(i, o, y()));

			function SD(e, t, n, i, o, r) {
				const a = t[xi],
					u = !a || fr() || Dl(a, r);
				if (f(u), u) return sl(i, o, y());
				const g = Pl(a, e, t, n);
				return Yh(a, r) && yl(a, r, g.nextSibling), a && (Kf(n) || Zf(g)) && gn(n) && (function Wa(e) {
					kt.skipHydrationRootTNode = e
				}(n), _h(g)), g
			}

			function Fl(e, t, n) {
				const i = Ve(),
					o = qt(),
					r = e + Bt,
					a = o.firstCreatePass ? function AD(e, t, n, i, o) {
						const r = t.consts,
							a = Ao(r, i),
							u = va(t, e, 8, "ng-container", a);
						return null !== a && xl(u, a, !0), pd(t, n, u, Ao(r, o)), null !== t.queries && t.queries.elementStart(t, u), u
					}(r, o, i, t, n) : o.data[r];
				_o(a, !0);
				const u = gm(o, i, a, e);
				return i[r] = u, s() && ll(o, i, u, a), Yi(u, i), ir(a) && (dd(o, i, a), ud(o, a, i)), null != n && fd(i, a), Fl
			}

			function Ll() {
				let e = ui();
				const t = qt();
				return Ur() ? Zs() : (e = e.parent, _o(e, !1)), t.firstCreatePass && (T(t, e), po(e) && t.queries.elementEnd(e)), Ll
			}

			function Od(e, t, n) {
				return Fl(e, t, n), Ll(), Od
			}
			let gm = (e, t, n, i) => (f(!0), Eu(t[It], ""));

			function OD(e, t, n, i) {
				let o;
				const r = t[xi],
					a = !r || fr();
				if (f(a), a) return Eu(t[It], "");
				const u = Pl(r, e, t, n),
					g = function Ty(e, t) {
						const n = e.data;
						let i = n[Yu]?.[t] ?? null;
						return null === i && n[dc]?.[t] && (i = ed(e, t)), i
					}(r, i);
				return yl(r, i, u), o = Rl(g, u), o
			}

			function _m() {
				return Ve()
			}

			function Pd(e) {
				return !!e && "function" == typeof e.then
			}

			function vm(e) {
				return !!e && "function" == typeof e.subscribe
			}

			function Rd(e, t, n, i) {
				const o = Ve(),
					r = qt(),
					a = ui();
				return bm(r, o, o[It], a, e, t, i), Rd
			}

			function Nd(e, t) {
				const n = ui(),
					i = Ve(),
					o = qt();
				return bm(o, i, Bp(Pe(o.data), n, i), n, e, t), Nd
			}

			function bm(e, t, n, i, o, r, a) {
				const u = ir(i),
					C = e.firstCreatePass && Lp(e),
					A = t[mn],
					U = Fp(t);
				let oe = !0;
				if (3 & i.type || a) {
					const Qe = Si(i, t),
						dt = a ? a(Qe) : Qe,
						xt = U.length,
						ze = a ? Kt => a(_n(Kt[i.index])) : i.index;
					let jt = null;
					if (!a && u && (jt = function RD(e, t, n, i) {
							const o = e.cleanup;
							if (null != o)
								for (let r = 0; r < o.length - 1; r += 2) {
									const a = o[r];
									if (a === n && o[r + 1] === i) {
										const u = t[ho],
											g = o[r + 2];
										return u.length > g ? u[g] : null
									}
									"string" == typeof a && (r += 2)
								}
							return null
						}(e, t, o, i.index)), null !== jt)(jt.__ngLastListenerFn__ || jt).__ngNextListenerFn__ = r, jt.__ngLastListenerFn__ = r, oe = !1;
					else {
						r = Dm(i, t, A, r, !1);
						const Kt = n.listen(dt, o, r);
						U.push(r, Kt), C && C.push(o, ze, xt, xt + 1)
					}
				} else r = Dm(i, t, A, r, !1);
				const fe = i.outputs;
				let je;
				if (oe && null !== fe && (je = fe[o])) {
					const Qe = je.length;
					if (Qe)
						for (let dt = 0; dt < Qe; dt += 2) {
							const Cn = t[je[dt]][je[dt + 1]].subscribe(r),
								uo = U.length;
							U.push(r, Cn), C && C.push(o, i.index, uo, -(uo + 1))
						}
				}
			}

			function ym(e, t, n, i) {
				try {
					return ii(6, t, n), !1 !== n(i)
				} catch (o) {
					return jp(e, o), !1
				} finally {
					ii(7, t, n)
				}
			}

			function Dm(e, t, n, i, o) {
				return function r(a) {
					if (a === Function) return i;
					mc(e.componentOffset > -1 ? Li(e.index, t) : t);
					let g = ym(t, n, i, a),
						C = r.__ngNextListenerFn__;
					for (; C;) g = ym(t, n, C, a) && g, C = C.__ngNextListenerFn__;
					return o && !1 === g && a.preventDefault(), g
				}
			}

			function Em(e = 1) {
				return function $c(e) {
					return (kt.lFrame.contextLView = function Of(e, t) {
						for (; e > 0;) t = t[Fo], e--;
						return t
					}(e, kt.lFrame.contextLView))[mn]
				}(e)
			}

			function ND(e, t) {
				let n = null;
				const i = function Zr(e) {
					const t = e.attrs;
					if (null != t) {
						const n = t.indexOf(5);
						if (!(1 & n)) return t[n + 1]
					}
					return null
				}(e);
				for (let o = 0; o < t.length; o++) {
					const r = t[o];
					if ("*" !== r) {
						if (null === i ? hs(e, r, !0) : Qr(i, r)) return o
					} else n = o
				}
				return n
			}

			function Cm(e) {
				const t = Ve()[An][Wn];
				if (!t.projection) {
					const i = t.projection = tc(e ? e.length : 1, null),
						o = i.slice();
					let r = t.child;
					for (; null !== r;) {
						const a = e ? ND(r, e) : 0;
						null !== a && (o[a] ? o[a].projectionNext = r : i[a] = r, o[a] = r), r = r.next
					}
				}
			}

			function wm(e, t = 0, n) {
				const i = Ve(),
					o = qt(),
					r = va(o, Bt + e, 16, null, n || null);
				null === r.projection && (r.projection = t), Zs(), (!i[xi] || fr()) && 32 != (32 & r.flags) && function Ab(e, t, n) {
					vh(t[It], 0, t, n, Mu(e, n, t), fh(n.parent || t[Wn], n, t))
				}(o, i, r)
			}

			function kd(e, t, n) {
				return Bl(e, "", t, "", n), kd
			}

			function Bl(e, t, n, i, o) {
				const r = Ve(),
					a = ya(r, t, n, i);
				return a !== Gt && Do(qt(), Hn(), r, e, a, r[It], o, !1), Bl
			}

			function Fd(e, t, n, i, o, r, a, u, g) {
				const C = Ve(),
					A = function Ea(e, t, n, i, o, r, a, u) {
						const C = Al(e, vo(), n, o, a);
						return _(3), C ? t + he(n) + i + he(o) + r + he(a) + u : Gt
					}(C, t, n, i, o, r, a, u);
				return A !== Gt && Do(qt(), Hn(), C, e, A, C[It], g, !1), Fd
			}

			function jl(e, t) {
				return e << 17 | t << 2
			}

			function ds(e) {
				return e >> 17 & 32767
			}

			function Ld(e) {
				return 2 | e
			}

			function Fs(e) {
				return (131068 & e) >> 2
			}

			function Bd(e, t) {
				return -131069 & e | t << 2
			}

			function jd(e) {
				return 1 | e
			}

			function Pm(e, t, n, i, o) {
				const r = e[n + 1],
					a = null === t;
				let u = i ? ds(r) : Fs(r),
					g = !1;
				for (; 0 !== u && (!1 === g || a);) {
					const A = e[u + 1];
					HD(e[u], t) && (g = !0, e[u + 1] = i ? jd(A) : Ld(A)), u = i ? ds(A) : Fs(A)
				}
				g && (e[n + 1] = i ? Ld(r) : jd(r))
			}

			function HD(e, t) {
				return null === e || null == t || (Array.isArray(e) ? e[1] : e) === t || !(!Array.isArray(e) || "string" != typeof t) && ia(e, t) >= 0
			}
			const yi = {
				textEnd: 0,
				key: 0,
				keyEnd: 0,
				value: 0,
				valueEnd: 0
			};

			function Rm(e) {
				return e.substring(yi.key, yi.keyEnd)
			}

			function Nm(e, t) {
				const n = yi.textEnd;
				return n === t ? -1 : (t = yi.keyEnd = function $D(e, t, n) {
					for (; t < n && e.charCodeAt(t) > 32;) t++;
					return t
				}(e, yi.key = t, n), Sa(e, t, n))
			}

			function Sa(e, t, n) {
				for (; t < n && e.charCodeAt(t) <= 32;) t++;
				return t
			}

			function Hd(e, t, n) {
				return Wo(e, t, n, !1), Hd
			}

			function Ud(e, t) {
				return Wo(e, t, null, !0), Ud
			}

			function jm(e) {
				Yo(qD, Er, e, !0)
			}

			function Er(e, t) {
				for (let n = function VD(e) {
						return function Fm(e) {
							yi.key = 0, yi.keyEnd = 0, yi.value = 0, yi.valueEnd = 0, yi.textEnd = e.length
						}(e), Nm(e, Sa(e, 0, yi.textEnd))
					}(t); n >= 0; n = Nm(t, n)) yo(e, Rm(t), !0)
			}

			function Wo(e, t, n, i) {
				const o = Ve(),
					r = qt(),
					a = _(2);
				r.firstUpdatePass && Um(r, e, a, i), t !== Gt && Ki(o, a, t) && zm(r, r.data[Wi()], o, o[It], e, o[a + 1] = function tE(e, t) {
					return null == e || "" === e || ("string" == typeof t ? e += t : "object" == typeof e && (e = ye(zr(e)))), e
				}(t, n), i, a)
			}

			function Yo(e, t, n, i) {
				const o = qt(),
					r = _(2);
				o.firstUpdatePass && Um(o, null, r, i);
				const a = Ve();
				if (n !== Gt && Ki(a, r, n)) {
					const u = o.data[Wi()];
					if (Gm(u, i) && !Hm(o, r)) {
						let g = i ? u.classesWithoutHost : u.stylesWithoutHost;
						null !== g && (n = xe(g, n || "")), Td(o, u, a, n, i)
					} else ! function eE(e, t, n, i, o, r, a, u) {
						o === Gt && (o = vt);
						let g = 0,
							C = 0,
							A = 0 < o.length ? o[0] : null,
							U = 0 < r.length ? r[0] : null;
						for (; null !== A || null !== U;) {
							const oe = g < o.length ? o[g + 1] : void 0,
								fe = C < r.length ? r[C + 1] : void 0;
							let Qe, je = null;
							A === U ? (g += 2, C += 2, oe !== fe && (je = U, Qe = fe)) : null === U || null !== A && A < U ? (g += 2, je = A) : (C += 2, je = U, Qe = fe), null !== je && zm(e, t, n, i, je, Qe, a, u), A = g < o.length ? o[g] : null, U = C < r.length ? r[C] : null
						}
					}(o, u, a, a[It], a[r + 1], a[r + 1] = function JD(e, t, n) {
						if (null == n || "" === n) return vt;
						const i = [],
							o = zr(n);
						if (Array.isArray(o))
							for (let r = 0; r < o.length; r++) e(i, o[r], !0);
						else if ("object" == typeof o)
							for (const r in o) o.hasOwnProperty(r) && e(i, r, o[r]);
						else "string" == typeof o && t(i, o);
						return i
					}(e, t, n), i, r)
				}
			}

			function Hm(e, t) {
				return t >= e.expandoStartIndex
			}

			function Um(e, t, n, i) {
				const o = e.data;
				if (null === o[n + 1]) {
					const r = o[Wi()],
						a = Hm(e, n);
					Gm(r, i) && null === t && !a && (t = !1), t = function KD(e, t, n, i) {
							const o = Pe(e);
							let r = i ? t.residualClasses : t.residualStyles;
							if (null === o) 0 === (i ? t.classBindings : t.styleBindings) && (n = wc(n = Vd(null, e, t, n, i), t.attrs, i), r = null);
							else {
								const a = t.directiveStylingLast;
								if (-1 === a || e[a] !== o)
									if (n = Vd(o, e, t, n, i), null === r) {
										let g = function ZD(e, t, n) {
											const i = n ? t.classBindings : t.styleBindings;
											if (0 !== Fs(i)) return e[ds(i)]
										}(e, t, i);
										void 0 !== g && Array.isArray(g) && (g = Vd(null, e, t, g[1], i), g = wc(g, t.attrs, i), function QD(e, t, n, i) {
											e[ds(n ? t.classBindings : t.styleBindings)] = i
										}(e, t, i, g))
									} else r = function XD(e, t, n) {
										let i;
										const o = t.directiveEnd;
										for (let r = 1 + t.directiveStylingLast; r < o; r++) i = wc(i, e[r].hostAttrs, n);
										return wc(i, t.attrs, n)
									}(e, t, i)
							}
							return void 0 !== r && (i ? t.residualClasses = r : t.residualStyles = r), n
						}(o, r, t, i),
						function BD(e, t, n, i, o, r) {
							let a = r ? t.classBindings : t.styleBindings,
								u = ds(a),
								g = Fs(a);
							e[i] = n;
							let A, C = !1;
							if (Array.isArray(n) ? (A = n[1], (null === A || ia(n, A) > 0) && (C = !0)) : A = n, o)
								if (0 !== g) {
									const oe = ds(e[u + 1]);
									e[i + 1] = jl(oe, u), 0 !== oe && (e[oe + 1] = Bd(e[oe + 1], i)), e[u + 1] = function FD(e, t) {
										return 131071 & e | t << 17
									}(e[u + 1], i)
								} else e[i + 1] = jl(u, 0), 0 !== u && (e[u + 1] = Bd(e[u + 1], i)), u = i;
							else e[i + 1] = jl(g, 0), 0 === u ? u = i : e[g + 1] = Bd(e[g + 1], i), g = i;
							C && (e[i + 1] = Ld(e[i + 1])), Pm(e, A, i, !0), Pm(e, A, i, !1),
								function jD(e, t, n, i, o) {
									const r = o ? e.residualClasses : e.residualStyles;
									null != r && "string" == typeof t && ia(r, t) >= 0 && (n[i + 1] = jd(n[i + 1]))
								}(t, A, e, i, r), a = jl(u, g), r ? t.classBindings = a : t.styleBindings = a
						}(o, r, t, n, a, i)
				}
			}

			function Vd(e, t, n, i, o) {
				let r = null;
				const a = n.directiveEnd;
				let u = n.directiveStylingLast;
				for (-1 === u ? u = n.directiveStart : u++; u < a && (r = t[u], i = wc(i, r.hostAttrs, o), r !== e);) u++;
				return null !== e && (n.directiveStylingLast = u), i
			}

			function wc(e, t, n) {
				const i = n ? 1 : 2;
				let o = -1;
				if (null !== t)
					for (let r = 0; r < t.length; r++) {
						const a = t[r];
						"number" == typeof a ? o = a : o === i && (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]), yo(e, a, !!n || t[++r]))
					}
				return void 0 === e ? null : e
			}

			function qD(e, t, n) {
				const i = String(t);
				"" !== i && !i.includes(" ") && yo(e, i, n)
			}

			function zm(e, t, n, i, o, r, a, u) {
				if (!(3 & t.type)) return;
				const g = e.data,
					C = g[u + 1],
					A = function LD(e) {
						return 1 == (1 & e)
					}(C) ? $m(g, t, n, o, Fs(C), a) : void 0;
				Hl(A) || (Hl(r) || function kD(e) {
					return 2 == (2 & e)
				}(C) && (r = $m(g, null, n, o, u, a)), function Pb(e, t, n, i, o) {
					if (t) o ? e.addClass(n, i) : e.removeClass(n, i);
					else {
						let r = -1 === i.indexOf("-") ? void 0 : ol.DashCase;
						null == o ? e.removeStyle(n, i, r) : ("string" == typeof o && o.endsWith("!important") && (o = o.slice(0, -10), r |= ol.Important), e.setStyle(n, i, o, r))
					}
				}(i, a, Lr(Wi(), n), o, r))
			}

			function $m(e, t, n, i, o, r) {
				const a = null === t;
				let u;
				for (; o > 0;) {
					const g = e[o],
						C = Array.isArray(g),
						A = C ? g[1] : g,
						U = null === A;
					let oe = n[o + 1];
					oe === Gt && (oe = U ? vt : void 0);
					let fe = U ? fu(oe, i) : A === i ? oe : void 0;
					if (C && !Hl(fe) && (fe = fu(g, i)), Hl(fe) && (u = fe, a)) return u;
					const je = e[o + 1];
					o = a ? ds(je) : Fs(je)
				}
				if (null !== t) {
					let g = r ? t.residualClasses : t.residualStyles;
					null != g && (u = fu(g, i))
				}
				return u
			}

			function Hl(e) {
				return void 0 !== e
			}

			function Gm(e, t) {
				return 0 != (e.flags & (t ? 8 : 16))
			}

			function Wm(e, t = "") {
				const n = Ve(),
					i = qt(),
					o = e + Bt,
					r = i.firstCreatePass ? va(i, o, 1, t, null) : i.data[o],
					a = Ym(i, n, r, t, e);
				n[o] = a, s() && ll(i, n, a, r), _o(r, !1)
			}
			let Ym = (e, t, n, i, o) => (f(!0), rl(t[It], i));

			function nE(e, t, n, i, o) {
				const r = t[xi],
					a = !r || fr() || Dl(r, o);
				return f(a), a ? rl(t[It], i) : Pl(r, e, t, n)
			}

			function zd(e) {
				return Ul("", e, ""), zd
			}

			function Ul(e, t, n) {
				const i = Ve(),
					o = ya(i, e, t, n);
				return o !== Gt && Wr(i, Wi(), o), Ul
			}

			function $d(e, t, n, i, o) {
				const r = Ve(),
					a = Da(r, e, t, n, i, o);
				return a !== Gt && Wr(r, Wi(), a), $d
			}

			function tg(e, t, n) {
				Yo(yo, Er, ya(Ve(), e, t, n), !0)
			}

			function ng(e, t, n, i, o) {
				Yo(yo, Er, Da(Ve(), e, t, n, i, o), !0)
			}

			function Gd(e, t, n) {
				const i = Ve();
				return Ki(i, p(), t) && Do(qt(), Hn(), i, e, t, i[It], n, !0), Gd
			}

			function Wd(e, t, n) {
				const i = Ve();
				if (Ki(i, p(), t)) {
					const r = qt(),
						a = Hn();
					Do(r, a, i, e, t, Bp(Pe(r.data), a, i), n, !0)
				}
				return Wd
			}
			const Ls = void 0;
			var DE = ["en", [
					["a", "p"],
					["AM", "PM"], Ls
				],
				[
					["AM", "PM"], Ls, Ls
				],
				[
					["S", "M", "T", "W", "T", "F", "S"],
					["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
					["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
					["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
				], Ls, [
					["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
					["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
					["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
				], Ls, [
					["B", "A"],
					["BC", "AD"],
					["Before Christ", "Anno Domini"]
				], 0, [6, 0],
				["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
				["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
				["{1}, {0}", Ls, "{1} 'at' {0}", Ls],
				[".", ",", ";", "%", "+", "-", "E", "\xd7", "\u2030", "\u221e", "NaN", ":"],
				["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr",
				function yE(e) {
					const n = Math.floor(Math.abs(e)),
						i = e.toString().replace(/^[^.]*\.?/, "").length;
					return 1 === n && 0 === i ? 1 : 5
				}
			];
			let Ta = {};

			function Yd(e) {
				const t = function EE(e) {
					return e.toLowerCase().replace(/_/g, "-")
				}(e);
				let n = hg(t);
				if (n) return n;
				const i = t.split("-")[0];
				if (n = hg(i), n) return n;
				if ("en" === i) return DE;
				throw new $(701, !1)
			}

			function fg(e) {
				return Yd(e)[Aa.PluralCase]
			}

			function hg(e) {
				return e in Ta || (Ta[e] = ht.ng && ht.ng.common && ht.ng.common.locales && ht.ng.common.locales[e]), Ta[e]
			}
			var Aa = function(e) {
				return e[e.LocaleId = 0] = "LocaleId", e[e.DayPeriodsFormat = 1] = "DayPeriodsFormat", e[e.DayPeriodsStandalone = 2] = "DayPeriodsStandalone", e[e.DaysFormat = 3] = "DaysFormat", e[e.DaysStandalone = 4] = "DaysStandalone", e[e.MonthsFormat = 5] = "MonthsFormat", e[e.MonthsStandalone = 6] = "MonthsStandalone", e[e.Eras = 7] = "Eras", e[e.FirstDayOfWeek = 8] = "FirstDayOfWeek", e[e.WeekendRange = 9] = "WeekendRange", e[e.DateFormat = 10] = "DateFormat", e[e.TimeFormat = 11] = "TimeFormat", e[e.DateTimeFormat = 12] = "DateTimeFormat", e[e.NumberSymbols = 13] = "NumberSymbols", e[e.NumberFormats = 14] = "NumberFormats", e[e.CurrencyCode = 15] = "CurrencyCode", e[e.CurrencySymbol = 16] = "CurrencySymbol", e[e.CurrencyName = 17] = "CurrencyName", e[e.Currencies = 18] = "Currencies", e[e.Directionality = 19] = "Directionality", e[e.PluralCase = 20] = "PluralCase", e[e.ExtraData = 21] = "ExtraData", e
			}(Aa || {});
			const Oa = "en-US";
			let pg = Oa;

			function Qd(e, t, n, i, o) {
				if (e = ge(e), Array.isArray(e))
					for (let r = 0; r < e.length; r++) Qd(e[r], t, n, i, o);
				else {
					const r = qt(),
						a = Ve(),
						u = ui();
					let g = Ns(e) ? e : ge(e.provide);
					const C = Uh(e),
						A = 1048575 & u.providerIndexes,
						U = u.directiveStart,
						oe = u.providerIndexes >> 20;
					if (Ns(e) || !e.multi) {
						const fe = new Ft(C, o, _a),
							je = Jd(g, t, o ? A : A + oe, U); - 1 === je ? (ji(At(u, a), r, g), Xd(r, e, t.length), t.push(g), u.directiveStart++, u.directiveEnd++, o && (u.providerIndexes += 1048576), n.push(fe), a.push(fe)) : (n[je] = fe, a[je] = fe)
					} else {
						const fe = Jd(g, t, A + oe, U),
							je = Jd(g, t, A, A + oe),
							dt = je >= 0 && n[je];
						if (o && !dt || !o && !(fe >= 0 && n[fe])) {
							ji(At(u, a), r, g);
							const xt = function yC(e, t, n, i, o) {
								const r = new Ft(e, n, _a);
								return r.multi = [], r.index = t, r.componentProviders = 0, jg(r, o, i && !n), r
							}(o ? bC : vC, n.length, o, i, C);
							!o && dt && (n[je].providerFactory = xt), Xd(r, e, t.length, 0), t.push(g), u.directiveStart++, u.directiveEnd++, o && (u.providerIndexes += 1048576), n.push(xt), a.push(xt)
						} else Xd(r, e, fe > -1 ? fe : je, jg(n[o ? je : fe], C, !o && i));
						!o && i && dt && n[je].componentProviders++
					}
				}
			}

			function Xd(e, t, n, i) {
				const o = Ns(t),
					r = function uy(e) {
						return !!e.useClass
					}(t);
				if (o || r) {
					const g = (r ? ge(t.useClass) : t).prototype.ngOnDestroy;
					if (g) {
						const C = e.destroyHooks || (e.destroyHooks = []);
						if (!o && t.multi) {
							const A = C.indexOf(n); - 1 === A ? C.push(n, [i, g]) : C[A + 1].push(i, g)
						} else C.push(n, g)
					}
				}
			}

			function jg(e, t, n) {
				return n && e.componentProviders++, e.multi.push(t) - 1
			}

			function Jd(e, t, n, i) {
				for (let o = n; o < i; o++)
					if (t[o] === e) return o;
				return -1
			}

			function vC(e, t, n, i) {
				return qd(this.multi, [])
			}

			function bC(e, t, n, i) {
				const o = this.multi;
				let r;
				if (this.providerFactory) {
					const a = this.providerFactory.componentProviders,
						u = Oo(n, n[at], this.providerFactory.index, i);
					r = u.slice(0, a), qd(o, r);
					for (let g = a; g < u.length; g++) r.push(u[g])
				} else r = [], qd(o, r);
				return r
			}

			function qd(e, t) {
				for (let n = 0; n < e.length; n++) t.push((0, e[n])());
				return t
			}

			function Hg(e, t = []) {
				return n => {
					n.providersResolver = (i, o) => function _C(e, t, n) {
						const i = qt();
						if (i.firstCreatePass) {
							const o = Fi(e);
							Qd(n, i.data, i.blueprint, o, !0), Qd(t, i.data, i.blueprint, o, !1)
						}
					}(i, o ? o(e) : e, t)
				}
			}
			class Bs {}
			class Ug {}

			function DC(e, t) {
				return new ef(e, t ?? null, [])
			}
			class ef extends Bs {
				constructor(t, n, i) {
					super(), this._parent = n, this._bootstrapComponents = [], this.destroyCbs = [], this.componentFactoryResolver = new Wp(this);
					const o = kn(t);
					this._bootstrapComponents = Gr(o.bootstrap), this._r3Injector = np(t, n, [{
						provide: Bs,
						useValue: this
					}, {
						provide: hc,
						useValue: this.componentFactoryResolver
					}, ...i], ye(t), new Set(["environment"])), this._r3Injector.resolveInjectorInitializers(), this.instance = this._r3Injector.get(t)
				}
				get injector() {
					return this._r3Injector
				}
				destroy() {
					const t = this._r3Injector;
					!t.destroyed && t.destroy(), this.destroyCbs.forEach(n => n()), this.destroyCbs = null
				}
				onDestroy(t) {
					this.destroyCbs.push(t)
				}
			}
			class tf extends Ug {
				constructor(t) {
					super(), this.moduleType = t
				}
				create(t) {
					return new ef(this.moduleType, t, [])
				}
			}
			class Vg extends Bs {
				constructor(t) {
					super(), this.componentFactoryResolver = new Wp(this), this.instance = null;
					const n = new ua([...t.providers, {
						provide: Bs,
						useValue: this
					}, {
						provide: hc,
						useValue: this.componentFactoryResolver
					}], t.parent || _l(), t.debugName, new Set(["environment"]));
					this.injector = n, t.runEnvironmentInitializers && n.resolveInjectorInitializers()
				}
				destroy() {
					this.injector.destroy()
				}
				onDestroy(t) {
					this.injector.onDestroy(t)
				}
			}

			function zg(e, t, n = null) {
				return new Vg({
					providers: e,
					parent: t,
					debugName: n,
					runEnvironmentInitializers: !0
				}).injector
			}
			let CC = (() => {
				class e {
					constructor(n) {
						this._injector = n, this.cachedInjectors = new Map
					}
					getOrCreateStandaloneInjector(n) {
						if (!n.standalone) return null;
						if (!this.cachedInjectors.has(n)) {
							const i = Lh(0, n.type),
								o = i.length > 0 ? zg([i], this._injector, `Standalone[${n.type.name}]`) : null;
							this.cachedInjectors.set(n, o)
						}
						return this.cachedInjectors.get(n)
					}
					ngOnDestroy() {
						try {
							for (const n of this.cachedInjectors.values()) null !== n && n.destroy()
						} finally {
							this.cachedInjectors.clear()
						}
					}
					static #e = this.\u0275prov = mt({
						token: e,
						providedIn: "environment",
						factory: () => new e(se(_r))
					})
				}
				return e
			})();

			function $g(e) {
				e.getStandaloneInjector = t => t.get(CC).getOrCreateStandaloneInjector(e)
			}

			function Xg(e, t, n) {
				const i = Ti() + e,
					o = Ve();
				return o[i] === Gt ? yr(o, i, n ? t.call(n) : t()) : yc(o, i)
			}

			function Jg(e, t, n, i) {
				return n_(Ve(), Ti(), e, t, n, i)
			}

			function qg(e, t, n, i, o) {
				return i_(Ve(), Ti(), e, t, n, i, o)
			}

			function e_(e, t, n, i, o, r, a) {
				return function r_(e, t, n, i, o, r, a, u, g) {
					const C = t + n;
					return Ro(e, C, o, r, a, u) ? yr(e, C + 4, g ? i.call(g, o, r, a, u) : i(o, r, a, u)) : Ac(e, C + 4)
				}(Ve(), Ti(), e, t, n, i, o, r, a)
			}

			function t_(e, t, n, i, o, r, a, u) {
				const g = Ti() + e,
					C = Ve(),
					A = Ro(C, g, n, i, o, r);
				return Ki(C, g + 4, a) || A ? yr(C, g + 5, u ? t.call(u, n, i, o, r, a) : t(n, i, o, r, a)) : yc(C, g + 5)
			}

			function Ac(e, t) {
				const n = e[t];
				return n === Gt ? void 0 : n
			}

			function n_(e, t, n, i, o, r) {
				const a = t + n;
				return Ki(e, a, o) ? yr(e, a + 1, r ? i.call(r, o) : i(o)) : Ac(e, a + 1)
			}

			function i_(e, t, n, i, o, r, a) {
				const u = t + n;
				return ks(e, u, o, r) ? yr(e, u + 2, a ? i.call(a, o, r) : i(o, r)) : Ac(e, u + 2)
			}

			function a_(e, t) {
				const n = qt();
				let i;
				const o = e + Bt;
				n.firstCreatePass ? (i = function LC(e, t) {
					if (t)
						for (let n = t.length - 1; n >= 0; n--) {
							const i = t[n];
							if (e === i.name) return i
						}
				}(t, n.pipeRegistry), n.data[o] = i, i.onDestroy && (n.destroyHooks ??= []).push(o, i.onDestroy)) : i = n.data[o];
				const r = i.factory || (i.factory = Wt(i.type)),
					u = Ue(_a);
				try {
					const g = As(!1),
						C = r();
					return As(g),
						function xD(e, t, n, i) {
							n >= e.data.length && (e.data[n] = null, e.blueprint[n] = null), t[n] = i
						}(n, Ve(), o, C), C
				} finally {
					Ue(u)
				}
			}

			function c_(e, t, n) {
				const i = e + Bt,
					o = Ve(),
					r = Br(o, i);
				return Oc(o, i) ? n_(o, Ti(), t, r.transform, n, r) : r.transform(n)
			}

			function l_(e, t, n, i) {
				const o = e + Bt,
					r = Ve(),
					a = Br(r, o);
				return Oc(r, o) ? i_(r, Ti(), t, a.transform, n, i, a) : a.transform(n, i)
			}

			function u_(e, t, n, i, o) {
				const r = e + Bt,
					a = Ve(),
					u = Br(a, r);
				return Oc(a, r) ? function o_(e, t, n, i, o, r, a, u) {
					const g = t + n;
					return Al(e, g, o, r, a) ? yr(e, g + 3, u ? i.call(u, o, r, a) : i(o, r, a)) : Ac(e, g + 3)
				}(a, Ti(), t, u.transform, n, i, o, u) : u.transform(n, i, o)
			}

			function Oc(e, t) {
				return e[at].data[t].pure
			}

			function HC() {
				return this._results[Symbol.iterator]()
			}
			class Wl {
				static #e = Symbol.iterator;
				get changes() {
					return this._changes || (this._changes = new vr)
				}
				constructor(t = !1) {
					this._emitDistinctChangesOnly = t, this.dirty = !0, this._results = [], this._changesDetected = !1, this._changes = null, this.length = 0, this.first = void 0, this.last = void 0;
					const n = Wl.prototype;
					n[Symbol.iterator] || (n[Symbol.iterator] = HC)
				}
				get(t) {
					return this._results[t]
				}
				map(t) {
					return this._results.map(t)
				}
				filter(t) {
					return this._results.filter(t)
				}
				find(t) {
					return this._results.find(t)
				}
				reduce(t, n) {
					return this._results.reduce(t, n)
				}
				forEach(t) {
					this._results.forEach(t)
				}
				some(t) {
					return this._results.some(t)
				}
				toArray() {
					return this._results.slice()
				}
				toString() {
					return this._results.toString()
				}
				reset(t, n) {
					const i = this;
					i.dirty = !1;
					const o = function Po(e) {
						return e.flat(Number.POSITIVE_INFINITY)
					}(t);
					(this._changesDetected = ! function kv(e, t, n) {
						if (e.length !== t.length) return !1;
						for (let i = 0; i < e.length; i++) {
							let o = e[i],
								r = t[i];
							if (n && (o = n(o), r = n(r)), r !== o) return !1
						}
						return !0
					}(i._results, o, n)) && (i._results = o, i.length = o.length, i.last = o[this.length - 1], i.first = o[0])
				}
				notifyOnChanges() {
					this._changes && (this._changesDetected || !this._emitDistinctChangesOnly) && this._changes.emit(this)
				}
				setDirty() {
					this.dirty = !0
				}
				destroy() {
					this.changes.complete(), this.changes.unsubscribe()
				}
			}

			function VC(e, t, n, i = !0) {
				const o = t[at];
				if (function wb(e, t, n, i) {
						const o = Kn + i,
							r = n.length;
						i > 0 && (n[o - 1][Mi] = t), i < r - Kn ? (t[Mi] = n[o], Lf(n, Kn + i, t)) : (n.push(t), t[Mi] = null), t[rn] = n;
						const a = t[oo];
						null !== a && n !== a && function Mb(e, t) {
							const n = e[Qi];
							t[An] !== t[rn][rn][An] && (e[er] = !0), null === n ? e[Qi] = [t] : n.push(t)
						}(a, t);
						const u = t[Zi];
						null !== u && u.insertView(e), t[Nt] |= 128
					}(o, t, e, n), i) {
					const r = Iu(n, e),
						a = t[It],
						u = cl(a, e[_i]);
					null !== u && function Db(e, t, n, i, o, r) {
						i[Dn] = o, i[Wn] = t, sc(e, i, n, 1, o, r)
					}(o, e[Wn], a, t, u, r)
				}
			}
			let Pc = (() => {
				class e {
					static #e = this.__NG_ELEMENT_ID__ = GC
				}
				return e
			})();
			const zC = Pc,
				$C = class extends zC {
					constructor(t, n, i) {
						super(), this._declarationLView = t, this._declarationTContainer = n, this.elementRef = i
					}
					get ssrId() {
						return this._declarationTContainer.tView?.ssrId || null
					}
					createEmbeddedView(t, n) {
						return this.createEmbeddedViewImpl(t, n)
					}
					createEmbeddedViewImpl(t, n, i) {
						const o = function UC(e, t, n, i) {
							const o = t.tView,
								u = wl(e, o, n, 4096 & e[Nt] ? 4096 : 16, null, t, null, null, null, i?.injector ?? null, i?.hydrationInfo ?? null);
							u[oo] = e[t.index];
							const C = e[Zi];
							return null !== C && (u[Zi] = C.createEmbeddedView(o)), bd(o, u, n), u
						}(this._declarationLView, this._declarationTContainer, t, {
							injector: n,
							hydrationInfo: i
						});
						return new vc(o)
					}
				};

			function GC() {
				return Yl(ui(), Ve())
			}

			function Yl(e, t) {
				return 4 & e.type ? new $C(t, e, pa(e, t)) : null
			}

			function d_(e) {
				const t = e[nr] ?? [],
					i = e[rn][It];
				for (const o of t) WC(o, i);
				e[nr] = vt
			}

			function WC(e, t) {
				let n = 0,
					i = e.firstChild;
				if (i) {
					const o = e.data[ha];
					for (; n < o;) {
						const r = i.nextSibling;
						ul(t, i, !1), i = r, n++
					}
				}
			}

			function f_(e) {
				d_(e);
				for (let t = Kn; t < e.length; t++) Kl(e[t])
			}

			function Kl(e) {
				const t = e[at];
				for (let n = Bt; n < t.bindingStartIndex; n++) qn(e[n]) ? f_(e[n]) : Array.isArray(e[n]) && Kl(e[n])
			}
			let h_ = (e, t) => null;

			function ZC(e, t) {
				const n = e[nr];
				return t && null !== n && 0 !== n.length ? n[0].data[Zu] === t ? n.shift() : (d_(e), null) : null
			}

			function p_(e, t) {
				return h_(e, t)
			}
			let Zl = (() => {
				class e {
					static #e = this.__NG_ELEMENT_ID__ = XC
				}
				return e
			})();

			function XC() {
				return __(ui(), Ve())
			}
			const JC = Zl,
				m_ = class extends JC {
					constructor(t, n, i) {
						super(), this._lContainer = t, this._hostTNode = n, this._hostLView = i
					}
					get element() {
						return pa(this._hostTNode, this._hostLView)
					}
					get injector() {
						return new eo(this._hostTNode, this._hostLView)
					}
					get parentInjector() {
						const t = qi(this._hostTNode, this._hostLView);
						if (so(t)) {
							const n = Ji(t, this._hostLView),
								i = oi(t);
							return new eo(n[at].data[i + 8], n)
						}
						return new eo(null, this._hostLView)
					}
					clear() {
						for (; this.length > 0;) this.remove(this.length - 1)
					}
					get(t) {
						const n = g_(this._lContainer);
						return null !== n && n[t] || null
					}
					get length() {
						return this._lContainer.length - Kn
					}
					createEmbeddedView(t, n, i) {
						let o, r;
						"number" == typeof i ? o = i : null != i && (o = i.index, r = i.injector);
						const a = p_(this._lContainer, t.ssrId),
							u = t.createEmbeddedViewImpl(n || {}, r, a),
							g = !!a && !nl(this._hostTNode);
						return this.insertImpl(u, o, g), u
					}
					createComponent(t, n, i, o, r) {
						const a = t && ! function ec(e) {
							return "function" == typeof e
						}(t);
						let u;
						if (a) u = n;
						else {
							const Qe = n || {};
							u = Qe.index, i = Qe.injector, o = Qe.projectableNodes, r = Qe.environmentInjector || Qe.ngModuleRef
						}
						const g = a ? t : new bc(Ht(t)),
							C = i || this.parentInjector;
						if (!r && null == g.ngModule) {
							const dt = (a ? C : this.parentInjector).get(_r, null);
							dt && (r = dt)
						}
						const A = Ht(g.componentType ?? {}),
							U = p_(this._lContainer, A?.id ?? null),
							fe = g.create(C, o, U?.firstChild ?? null, r),
							je = !!U && !nl(this._hostTNode);
						return this.insertImpl(fe.hostView, u, je), fe
					}
					insert(t, n) {
						return this.insertImpl(t, n, !1)
					}
					insertImpl(t, n, i) {
						const o = t._lView;
						if (function cs(e) {
								return qn(e[rn])
							}(o)) {
							const g = this.indexOf(t);
							if (-1 !== g) this.detach(g);
							else {
								const C = o[rn],
									A = new m_(C, C[Wn], C[rn]);
								A.detach(A.indexOf(t))
							}
						}
						const a = this._adjustIndex(n),
							u = this._lContainer;
						return VC(u, o, a, !i), t.attachToViewContainerRef(), Lf(rf(u), a, t), t
					}
					move(t, n) {
						return this.insert(t, n)
					}
					indexOf(t) {
						const n = g_(this._lContainer);
						return null !== n ? n.indexOf(t) : -1
					}
					remove(t) {
						const n = this._adjustIndex(t, -1),
							i = al(this._lContainer, n);
						i && (Kc(rf(this._lContainer), n), Cu(i[at], i))
					}
					detach(t) {
						const n = this._adjustIndex(t, -1),
							i = al(this._lContainer, n);
						return i && null != Kc(rf(this._lContainer), n) ? new vc(i) : null
					}
					_adjustIndex(t, n = 0) {
						return t ?? this.length + n
					}
				};

			function g_(e) {
				return e[8]
			}

			function rf(e) {
				return e[8] || (e[8] = [])
			}

			function __(e, t) {
				let n;
				const i = t[e.index];
				return qn(i) ? n = i : (n = Np(i, t, null, e), t[e.index] = n, Ml(t, n)), v_(n, t, e, i), new m_(n, e, t)
			}
			let v_ = b_;

			function b_(e, t, n, i) {
				if (e[_i]) return;
				let o;
				o = 8 & n.type ? _n(i) : function qC(e, t) {
					const n = e[It],
						i = n.createComment(""),
						o = Si(t, e);
					return Os(n, cl(n, o), i, function Tb(e, t) {
						return e.nextSibling(t)
					}(n, o), !1), i
				}(t, n), e[_i] = o
			}

			function ew(e, t, n, i) {
				if (e[_i] && e[nr]) return;
				const o = t[xi],
					r = n.index - Bt,
					a = function il(e) {
						let t = e.parent;
						for (; t;) {
							if (Kf(t)) return !0;
							t = t.parent
						}
						return !1
					}(n) || nl(n);
				if (!o || a || Dl(o, r)) return b_(e, t, n, i);
				const g = qu(o, r),
					C = o.data[dc]?.[r],
					[A, U] = function KC(e, t) {
						const n = [];
						for (const i of t)
							for (let o = 0; o < (i[vl] ?? 1); o++) {
								const r = {
									data: i,
									firstChild: null
								};
								i[ha] > 0 && (r.firstChild = e, e = Rl(i[ha], e)), n.push(r)
							}
						return [e, n]
					}(g, C);
				e[_i] = A, e[nr] = U
			}
			class sf {
				constructor(t) {
					this.queryList = t, this.matches = null
				}
				clone() {
					return new sf(this.queryList)
				}
				setDirty() {
					this.queryList.setDirty()
				}
			}
			class af {
				constructor(t = []) {
					this.queries = t
				}
				createEmbeddedView(t) {
					const n = t.queries;
					if (null !== n) {
						const i = null !== t.contentQueries ? t.contentQueries[0] : n.length,
							o = [];
						for (let r = 0; r < i; r++) {
							const a = n.getByIndex(r);
							o.push(this.queries[a.indexInDeclarationView].clone())
						}
						return new af(o)
					}
					return null
				}
				insertView(t) {
					this.dirtyQueriesWithMatches(t)
				}
				detachView(t) {
					this.dirtyQueriesWithMatches(t)
				}
				dirtyQueriesWithMatches(t) {
					for (let n = 0; n < this.queries.length; n++) null !== S_(t, n).matches && this.queries[n].setDirty()
				}
			}
			class y_ {
				constructor(t, n, i = null) {
					this.predicate = t, this.flags = n, this.read = i
				}
			}
			class cf {
				constructor(t = []) {
					this.queries = t
				}
				elementStart(t, n) {
					for (let i = 0; i < this.queries.length; i++) this.queries[i].elementStart(t, n)
				}
				elementEnd(t) {
					for (let n = 0; n < this.queries.length; n++) this.queries[n].elementEnd(t)
				}
				embeddedTView(t) {
					let n = null;
					for (let i = 0; i < this.length; i++) {
						const o = null !== n ? n.length : 0,
							r = this.getByIndex(i).embeddedTView(t, o);
						r && (r.indexInDeclarationView = i, null !== n ? n.push(r) : n = [r])
					}
					return null !== n ? new cf(n) : null
				}
				template(t, n) {
					for (let i = 0; i < this.queries.length; i++) this.queries[i].template(t, n)
				}
				getByIndex(t) {
					return this.queries[t]
				}
				get length() {
					return this.queries.length
				}
				track(t) {
					this.queries.push(t)
				}
			}
			class lf {
				constructor(t, n = -1) {
					this.metadata = t, this.matches = null, this.indexInDeclarationView = -1, this.crossesNgTemplate = !1, this._appliesToNextNode = !0, this._declarationNodeIndex = n
				}
				elementStart(t, n) {
					this.isApplyingToNode(n) && this.matchTNode(t, n)
				}
				elementEnd(t) {
					this._declarationNodeIndex === t.index && (this._appliesToNextNode = !1)
				}
				template(t, n) {
					this.elementStart(t, n)
				}
				embeddedTView(t, n) {
					return this.isApplyingToNode(t) ? (this.crossesNgTemplate = !0, this.addMatch(-t.index, n), new lf(this.metadata)) : null
				}
				isApplyingToNode(t) {
					if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
						const n = this._declarationNodeIndex;
						let i = t.parent;
						for (; null !== i && 8 & i.type && i.index !== n;) i = i.parent;
						return n === (null !== i ? i.index : -1)
					}
					return this._appliesToNextNode
				}
				matchTNode(t, n) {
					const i = this.metadata.predicate;
					if (Array.isArray(i))
						for (let o = 0; o < i.length; o++) {
							const r = i[o];
							this.matchTNodeWithReadOption(t, n, nw(n, r)), this.matchTNodeWithReadOption(t, n, Hi(n, t, r, !1, !1))
						} else i === Pc ? 4 & n.type && this.matchTNodeWithReadOption(t, n, -1) : this.matchTNodeWithReadOption(t, n, Hi(n, t, i, !1, !1))
				}
				matchTNodeWithReadOption(t, n, i) {
					if (null !== i) {
						const o = this.metadata.read;
						if (null !== o)
							if (o === pc || o === Zl || o === Pc && 4 & n.type) this.addMatch(n.index, -2);
							else {
								const r = Hi(n, t, o, !1, !1);
								null !== r && this.addMatch(n.index, r)
							}
						else this.addMatch(n.index, i)
					}
				}
				addMatch(t, n) {
					null === this.matches ? this.matches = [t, n] : this.matches.push(t, n)
				}
			}

			function nw(e, t) {
				const n = e.localNames;
				if (null !== n)
					for (let i = 0; i < n.length; i += 2)
						if (n[i] === t) return n[i + 1];
				return null
			}

			function ow(e, t, n, i) {
				return -1 === n ? function iw(e, t) {
					return 11 & e.type ? pa(e, t) : 4 & e.type ? Yl(e, t) : null
				}(t, e) : -2 === n ? function rw(e, t, n) {
					return n === pc ? pa(t, e) : n === Pc ? Yl(t, e) : n === Zl ? __(t, e) : void 0
				}(e, t, i) : Oo(e, e[at], n, t)
			}

			function D_(e, t, n, i) {
				const o = t[Zi].queries[i];
				if (null === o.matches) {
					const r = e.data,
						a = n.matches,
						u = [];
					for (let g = 0; g < a.length; g += 2) {
						const C = a[g];
						u.push(C < 0 ? null : ow(t, r[C], a[g + 1], n.metadata.read))
					}
					o.matches = u
				}
				return o.matches
			}

			function uf(e, t, n, i) {
				const o = e.queries.getByIndex(n),
					r = o.matches;
				if (null !== r) {
					const a = D_(e, t, o, n);
					for (let u = 0; u < r.length; u += 2) {
						const g = r[u];
						if (g > 0) i.push(a[u / 2]);
						else {
							const C = r[u + 1],
								A = t[-g];
							for (let U = Kn; U < A.length; U++) {
								const oe = A[U];
								oe[oo] === oe[rn] && uf(oe[at], oe, C, i)
							}
							if (null !== A[Qi]) {
								const U = A[Qi];
								for (let oe = 0; oe < U.length; oe++) {
									const fe = U[oe];
									uf(fe[at], fe, C, i)
								}
							}
						}
					}
				}
				return i
			}

			function E_(e) {
				const t = Ve(),
					n = qt(),
					i = Me();
				ct(i + 1);
				const o = S_(n, i);
				if (e.dirty && function jr(e) {
						return 4 == (4 & e[Nt])
					}(t) === (2 == (2 & o.metadata.flags))) {
					if (null === o.matches) e.reset([]);
					else {
						const r = o.crossesNgTemplate ? uf(n, t, i, []) : D_(n, t, o, i);
						e.reset(r, Ny), e.notifyOnChanges()
					}
					return !0
				}
				return !1
			}

			function C_(e, t, n) {
				const i = qt();
				i.firstCreatePass && (I_(i, new y_(e, t, n), -1), 2 == (2 & t) && (i.staticViewQueries = !0)), x_(i, Ve(), t)
			}

			function w_(e, t, n, i) {
				const o = qt();
				if (o.firstCreatePass) {
					const r = ui();
					I_(o, new y_(t, n, i), r.index),
						function aw(e, t) {
							const n = e.contentQueries || (e.contentQueries = []);
							t !== (n.length ? n[n.length - 1] : -1) && n.push(e.queries.length - 1, t)
						}(o, e), 2 == (2 & n) && (o.staticContentQueries = !0)
				}
				x_(o, Ve(), n)
			}

			function M_() {
				return function sw(e, t) {
					return e[Zi].queries[t].queryList
				}(Ve(), Me())
			}

			function x_(e, t, n) {
				const i = new Wl(4 == (4 & n));
				(function h0(e, t, n, i) {
					const o = Fp(t);
					o.push(n), e.firstCreatePass && Lp(e).push(i, o.length - 1)
				})(e, t, i, i.destroy), null === t[Zi] && (t[Zi] = new af), t[Zi].queries.push(new sf(i))
			}

			function I_(e, t, n) {
				null === e.queries && (e.queries = new cf), e.queries.track(new lf(t, n))
			}

			function S_(e, t) {
				return e.queries.getByIndex(t)
			}

			function T_(e, t) {
				return Yl(e, t)
			}

			function df(e) {
				return !!kn(e)
			}
			const Sw = new Mt("Application Initializer");
			let gf = (() => {
					class e {
						constructor() {
							this.initialized = !1, this.done = !1, this.donePromise = new Promise((n, i) => {
								this.resolve = n, this.reject = i
							}), this.appInits = k(Sw, {
								optional: !0
							}) ?? []
						}
						runInitializers() {
							if (this.initialized) return;
							const n = [];
							for (const o of this.appInits) {
								const r = o();
								if (Pd(r)) n.push(r);
								else if (vm(r)) {
									const a = new Promise((u, g) => {
										r.subscribe({
											complete: u,
											error: g
										})
									});
									n.push(a)
								}
							}
							const i = () => {
								this.done = !0, this.resolve()
							};
							Promise.all(n).then(() => {
								i()
							}).catch(o => {
								this.reject(o)
							}), 0 === n.length && i(), this.initialized = !0
						}
						static #e = this.\u0275fac = function(i) {
							return new(i || e)
						};
						static #t = this.\u0275prov = mt({
							token: e,
							factory: e.\u0275fac,
							providedIn: "root"
						})
					}
					return e
				})(),
				W_ = (() => {
					class e {
						log(n) {
							console.log(n)
						}
						warn(n) {
							console.warn(n)
						}
						static #e = this.\u0275fac = function(i) {
							return new(i || e)
						};
						static #t = this.\u0275prov = mt({
							token: e,
							factory: e.\u0275fac,
							providedIn: "platform"
						})
					}
					return e
				})();
			const Xl = new Mt("LocaleId", {
					providedIn: "root",
					factory: () => k(Xl, H.Optional | H.SkipSelf) || function Tw() {
						return typeof $localize < "u" && $localize.locale || Oa
					}()
				}),
				Aw = new Mt("DefaultCurrencyCode", {
					providedIn: "root",
					factory: () => "USD"
				});
			let Y_ = (() => {
				class e {
					constructor() {
						this.taskId = 0, this.pendingTasks = new Set, this.hasPendingTasks = new B.X(!1)
					}
					add() {
						this.hasPendingTasks.next(!0);
						const n = this.taskId++;
						return this.pendingTasks.add(n), n
					}
					remove(n) {
						this.pendingTasks.delete(n), 0 === this.pendingTasks.size && this.hasPendingTasks.next(!1)
					}
					ngOnDestroy() {
						this.pendingTasks.clear(), this.hasPendingTasks.next(!1)
					}
					static #e = this.\u0275fac = function(i) {
						return new(i || e)
					};
					static #t = this.\u0275prov = mt({
						token: e,
						factory: e.\u0275fac,
						providedIn: "root"
					})
				}
				return e
			})();
			class Pw {
				constructor(t, n) {
					this.ngModuleFactory = t, this.componentFactories = n
				}
			}
			let Rw = (() => {
				class e {
					compileModuleSync(n) {
						return new tf(n)
					}
					compileModuleAsync(n) {
						return Promise.resolve(this.compileModuleSync(n))
					}
					compileModuleAndAllComponentsSync(n) {
						const i = this.compileModuleSync(n),
							r = Gr(kn(n).declarations).reduce((a, u) => {
								const g = Ht(u);
								return g && a.push(new bc(g)), a
							}, []);
						return new Pw(i, r)
					}
					compileModuleAndAllComponentsAsync(n) {
						return Promise.resolve(this.compileModuleAndAllComponentsSync(n))
					}
					clearCache() {}
					clearCacheFor(n) {}
					getModuleId(n) {}
					static #e = this.\u0275fac = function(i) {
						return new(i || e)
					};
					static #t = this.\u0275prov = mt({
						token: e,
						factory: e.\u0275fac,
						providedIn: "root"
					})
				}
				return e
			})();
			const X_ = new Mt(""),
				J_ = new Mt("");
			let bf, tM = (() => {
					class e {
						constructor(n, i, o) {
							this._ngZone = n, this.registry = i, this._pendingCount = 0, this._isZoneStable = !0, this._didWork = !1, this._callbacks = [], this.taskTrackingZone = null, bf || (function nM(e) {
								bf = e
							}(o), o.addToWindow(i)), this._watchAngularEvents(), n.run(() => {
								this.taskTrackingZone = typeof Zone > "u" ? null : Zone.current.get("TaskTrackingZone")
							})
						}
						_watchAngularEvents() {
							this._ngZone.onUnstable.subscribe({
								next: () => {
									this._didWork = !0, this._isZoneStable = !1
								}
							}), this._ngZone.runOutsideAngular(() => {
								this._ngZone.onStable.subscribe({
									next: () => {
										Oi.assertNotInAngularZone(), queueMicrotask(() => {
											this._isZoneStable = !0, this._runCallbacksIfReady()
										})
									}
								})
							})
						}
						increasePendingRequestCount() {
							return this._pendingCount += 1, this._didWork = !0, this._pendingCount
						}
						decreasePendingRequestCount() {
							if (this._pendingCount -= 1, this._pendingCount < 0) throw new Error("pending async requests below zero");
							return this._runCallbacksIfReady(), this._pendingCount
						}
						isStable() {
							return this._isZoneStable && 0 === this._pendingCount && !this._ngZone.hasPendingMacrotasks
						}
						_runCallbacksIfReady() {
							if (this.isStable()) queueMicrotask(() => {
								for (; 0 !== this._callbacks.length;) {
									let n = this._callbacks.pop();
									clearTimeout(n.timeoutId), n.doneCb(this._didWork)
								}
								this._didWork = !1
							});
							else {
								let n = this.getPendingTasks();
								this._callbacks = this._callbacks.filter(i => !i.updateCb || !i.updateCb(n) || (clearTimeout(i.timeoutId), !1)), this._didWork = !0
							}
						}
						getPendingTasks() {
							return this.taskTrackingZone ? this.taskTrackingZone.macroTasks.map(n => ({
								source: n.source,
								creationLocation: n.creationLocation,
								data: n.data
							})) : []
						}
						addCallback(n, i, o) {
							let r = -1;
							i && i > 0 && (r = setTimeout(() => {
								this._callbacks = this._callbacks.filter(a => a.timeoutId !== r), n(this._didWork, this.getPendingTasks())
							}, i)), this._callbacks.push({
								doneCb: n,
								timeoutId: r,
								updateCb: o
							})
						}
						whenStable(n, i, o) {
							if (o && !this.taskTrackingZone) throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');
							this.addCallback(n, i, o), this._runCallbacksIfReady()
						}
						getPendingRequestCount() {
							return this._pendingCount
						}
						registerApplication(n) {
							this.registry.registerApplication(n, this)
						}
						unregisterApplication(n) {
							this.registry.unregisterApplication(n)
						}
						findProviders(n, i, o) {
							return []
						}
						static #e = this.\u0275fac = function(i) {
							return new(i || e)(se(Oi), se(q_), se(J_))
						};
						static #t = this.\u0275prov = mt({
							token: e,
							factory: e.\u0275fac
						})
					}
					return e
				})(),
				q_ = (() => {
					class e {
						constructor() {
							this._applications = new Map
						}
						registerApplication(n, i) {
							this._applications.set(n, i)
						}
						unregisterApplication(n) {
							this._applications.delete(n)
						}
						unregisterAllApplications() {
							this._applications.clear()
						}
						getTestability(n) {
							return this._applications.get(n) || null
						}
						getAllTestabilities() {
							return Array.from(this._applications.values())
						}
						getAllRootElements() {
							return Array.from(this._applications.keys())
						}
						findTestabilityInTree(n, i = !0) {
							return bf?.findTestabilityInTree(this, n, i) ?? null
						}
						static #e = this.\u0275fac = function(i) {
							return new(i || e)
						};
						static #t = this.\u0275prov = mt({
							token: e,
							factory: e.\u0275fac,
							providedIn: "platform"
						})
					}
					return e
				})(),
				fs = null;
			const yf = new Mt("PlatformDestroyListeners"),
				Df = new Mt("appBootstrapListener");

			function aM(e) {
				try {
					const {
						rootComponent: t,
						appProviders: n,
						platformProviders: i
					} = e, o = function sM(e = []) {
						if (fs) return fs;
						const t = function iv(e = [], t) {
							return Go.create({
								name: t,
								providers: [{
									provide: Hu,
									useValue: "platform"
								}, {
									provide: yf,
									useValue: new Set([() => fs = null])
								}, ...e]
							})
						}(e);
						return fs = t,
							function tv() {
								! function $s(e) {
									Ms = e
								}(() => {
									throw new $(600, !1)
								})
							}(),
							function nv(e) {
								e.get(zh, null)?.forEach(n => n())
							}(t), t
					}(i), r = [fM(), ...n || []], u = new Vg({
						providers: r,
						parent: o,
						debugName: "",
						runEnvironmentInitializers: !1
					}).injector, g = u.get(Oi);
					return g.run(() => {
						u.resolveInjectorInitializers();
						const C = u.get(us, null);
						let A;
						g.runOutsideAngular(() => {
							A = g.onError.subscribe({
								next: fe => {
									C.handleError(fe)
								}
							})
						});
						const U = () => u.destroy(),
							oe = o.get(yf);
						return oe.add(U), u.onDestroy(() => {
								A.unsubscribe(), oe.delete(U)
							}),
							function sv(e, t, n) {
								try {
									const i = n();
									return Pd(i) ? i.catch(o => {
										throw t.runOutsideAngular(() => e.handleError(o)), o
									}) : i
								} catch (i) {
									throw t.runOutsideAngular(() => e.handleError(i)), i
								}
							}(C, g, () => {
								const fe = u.get(gf);
								return fe.runInitializers(), fe.donePromise.then(() => {
									! function mg(e) {
										tt(e, "Expected localeId to be defined"), "string" == typeof e && (pg = e.toLowerCase().replace(/_/g, "-"))
									}(u.get(Xl, Oa) || Oa);
									const Qe = u.get(Na);
									return void 0 !== t && Qe.bootstrap(t), Qe
								})
							})
					})
				} catch (t) {
					return Promise.reject(t)
				}
			}
			let Na = (() => {
				class e {
					constructor() {
						this._bootstrapListeners = [], this._runningTick = !1, this._destroyed = !1, this._destroyListeners = [], this._views = [], this.internalErrorHandler = k(lv), this.zoneIsStable = k(ap), this.componentTypes = [], this.components = [], this.isStable = k(Y_).hasPendingTasks.pipe((0, ae.w)(n => n ? (0, K.of)(!1) : this.zoneIsStable), (0, ie.x)(), (0, ne.B)()), this._injector = k(_r)
					}
					get destroyed() {
						return this._destroyed
					}
					get injector() {
						return this._injector
					}
					bootstrap(n, i) {
						const o = n instanceof Kh;
						if (!this._injector.get(gf).done) throw !o && Co(n), new $(405, !1);
						let a;
						a = o ? n : this._injector.get(hc).resolveComponentFactory(n), this.componentTypes.push(a.componentType);
						const u = function oM(e) {
								return e.isBoundToModule
							}(a) ? void 0 : this._injector.get(Bs),
							C = a.create(Go.NULL, [], i || a.selector, u),
							A = C.location.nativeElement,
							U = C.injector.get(X_, null);
						return U?.registerApplication(A), C.onDestroy(() => {
							this.detachView(C.hostView), ql(this.components, C), U?.unregisterApplication(A)
						}), this._loadComponent(C), C
					}
					tick() {
						if (this._runningTick) throw new $(101, !1);
						try {
							this._runningTick = !0;
							for (let n of this._views) n.detectChanges()
						} catch (n) {
							this.internalErrorHandler(n)
						} finally {
							this._runningTick = !1
						}
					}
					attachView(n) {
						const i = n;
						this._views.push(i), i.attachToAppRef(this)
					}
					detachView(n) {
						const i = n;
						ql(this._views, i), i.detachFromAppRef()
					}
					_loadComponent(n) {
						this.attachView(n.hostView), this.tick(), this.components.push(n);
						const i = this._injector.get(Df, []);
						i.push(...this._bootstrapListeners), i.forEach(o => o(n))
					}
					ngOnDestroy() {
						if (!this._destroyed) try {
							this._destroyListeners.forEach(n => n()), this._views.slice().forEach(n => n.destroy())
						} finally {
							this._destroyed = !0, this._views = [], this._bootstrapListeners = [], this._destroyListeners = []
						}
					}
					onDestroy(n) {
						return this._destroyListeners.push(n), () => ql(this._destroyListeners, n)
					}
					destroy() {
						if (this._destroyed) throw new $(406, !1);
						const n = this._injector;
						n.destroy && !n.destroyed && n.destroy()
					}
					get viewCount() {
						return this._views.length
					}
					warnIfDestroyed() {}
					static #e = this.\u0275fac = function(i) {
						return new(i || e)
					};
					static #t = this.\u0275prov = mt({
						token: e,
						factory: e.\u0275fac,
						providedIn: "root"
					})
				}
				return e
			})();

			function ql(e, t) {
				const n = e.indexOf(t);
				n > -1 && e.splice(n, 1)
			}
			const lv = new Mt("", {
				providedIn: "root",
				factory: () => k(us).handleError.bind(void 0)
			});

			function uM() {
				const e = k(Oi),
					t = k(us);
				return n => e.runOutsideAngular(() => t.handleError(n))
			}
			let dM = (() => {
				class e {
					constructor() {
						this.zone = k(Oi), this.applicationRef = k(Na)
					}
					initialize() {
						this._onMicrotaskEmptySubscription || (this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({
							next: () => {
								this.zone.run(() => {
									this.applicationRef.tick()
								})
							}
						}))
					}
					ngOnDestroy() {
						this._onMicrotaskEmptySubscription?.unsubscribe()
					}
					static #e = this.\u0275fac = function(i) {
						return new(i || e)
					};
					static #t = this.\u0275prov = mt({
						token: e,
						factory: e.\u0275fac,
						providedIn: "root"
					})
				}
				return e
			})();

			function uv(e) {
				return [{
					provide: Oi,
					useFactory: e
				}, {
					provide: lc,
					multi: !0,
					useFactory: () => {
						const t = k(dM, {
							optional: !0
						});
						return () => t.initialize()
					}
				}, {
					provide: lv,
					useFactory: uM
				}, {
					provide: ap,
					useFactory: cp
				}]
			}

			function fM(e) {
				return Lu([
					[], uv(() => new Oi(function rv(e) {
						return {
							enableLongStackTrace: !1,
							shouldCoalesceEventChangeDetection: e?.eventCoalescing ?? !1,
							shouldCoalesceRunChangeDetection: e?.runCoalescing ?? !1
						}
					}(e)))
				])
			}

			function hM() {
				return !1
			}
			let pM = (() => {
				class e {
					static #e = this.__NG_ELEMENT_ID__ = mM
				}
				return e
			})();

			function mM(e) {
				return function gM(e, t, n) {
					if (gn(e) && !n) {
						const i = Li(e.index, t);
						return new vc(i, i)
					}
					return 47 & e.type ? new vc(t[An], t) : null
				}(ui(), Ve(), 16 == (16 & e))
			}
			class pv {
				constructor() {}
				supports(t) {
					return Tl(t)
				}
				create(t) {
					return new EM(t)
				}
			}
			const DM = (e, t) => t;
			class EM {
				constructor(t) {
					this.length = 0, this._linkedRecords = null, this._unlinkedRecords = null, this._previousItHead = null, this._itHead = null, this._itTail = null, this._additionsHead = null, this._additionsTail = null, this._movesHead = null, this._movesTail = null, this._removalsHead = null, this._removalsTail = null, this._identityChangesHead = null, this._identityChangesTail = null, this._trackByFn = t || DM
				}
				forEachItem(t) {
					let n;
					for (n = this._itHead; null !== n; n = n._next) t(n)
				}
				forEachOperation(t) {
					let n = this._itHead,
						i = this._removalsHead,
						o = 0,
						r = null;
					for (; n || i;) {
						const a = !i || n && n.currentIndex < gv(i, o, r) ? n : i,
							u = gv(a, o, r),
							g = a.currentIndex;
						if (a === i) o--, i = i._nextRemoved;
						else if (n = n._next, null == a.previousIndex) o++;
						else {
							r || (r = []);
							const C = u - o,
								A = g - o;
							if (C != A) {
								for (let oe = 0; oe < C; oe++) {
									const fe = oe < r.length ? r[oe] : r[oe] = 0,
										je = fe + oe;
									A <= je && je < C && (r[oe] = fe + 1)
								}
								r[a.previousIndex] = A - C
							}
						}
						u !== g && t(a, u, g)
					}
				}
				forEachPreviousItem(t) {
					let n;
					for (n = this._previousItHead; null !== n; n = n._nextPrevious) t(n)
				}
				forEachAddedItem(t) {
					let n;
					for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n)
				}
				forEachMovedItem(t) {
					let n;
					for (n = this._movesHead; null !== n; n = n._nextMoved) t(n)
				}
				forEachRemovedItem(t) {
					let n;
					for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n)
				}
				forEachIdentityChange(t) {
					let n;
					for (n = this._identityChangesHead; null !== n; n = n._nextIdentityChange) t(n)
				}
				diff(t) {
					if (null == t && (t = []), !Tl(t)) throw new $(900, !1);
					return this.check(t) ? this : null
				}
				onDestroy() {}
				check(t) {
					this._reset();
					let o, r, a, n = this._itHead,
						i = !1;
					if (Array.isArray(t)) {
						this.length = t.length;
						for (let u = 0; u < this.length; u++) r = t[u], a = this._trackByFn(u, r), null !== n && Object.is(n.trackById, a) ? (i && (n = this._verifyReinsertion(n, r, a, u)), Object.is(n.item, r) || this._addIdentityChange(n, r)) : (n = this._mismatch(n, r, a, u), i = !0), n = n._next
					} else o = 0,
						function rD(e, t) {
							if (Array.isArray(e))
								for (let n = 0; n < e.length; n++) t(e[n]);
							else {
								const n = e[Symbol.iterator]();
								let i;
								for (; !(i = n.next()).done;) t(i.value)
							}
						}(t, u => {
							a = this._trackByFn(o, u), null !== n && Object.is(n.trackById, a) ? (i && (n = this._verifyReinsertion(n, u, a, o)), Object.is(n.item, u) || this._addIdentityChange(n, u)) : (n = this._mismatch(n, u, a, o), i = !0), n = n._next, o++
						}), this.length = o;
					return this._truncate(n), this.collection = t, this.isDirty
				}
				get isDirty() {
					return null !== this._additionsHead || null !== this._movesHead || null !== this._removalsHead || null !== this._identityChangesHead
				}
				_reset() {
					if (this.isDirty) {
						let t;
						for (t = this._previousItHead = this._itHead; null !== t; t = t._next) t._nextPrevious = t._next;
						for (t = this._additionsHead; null !== t; t = t._nextAdded) t.previousIndex = t.currentIndex;
						for (this._additionsHead = this._additionsTail = null, t = this._movesHead; null !== t; t = t._nextMoved) t.previousIndex = t.currentIndex;
						this._movesHead = this._movesTail = null, this._removalsHead = this._removalsTail = null, this._identityChangesHead = this._identityChangesTail = null
					}
				}
				_mismatch(t, n, i, o) {
					let r;
					return null === t ? r = this._itTail : (r = t._prev, this._remove(t)), null !== (t = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(i, null)) ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._reinsertAfter(t, r, o)) : null !== (t = null === this._linkedRecords ? null : this._linkedRecords.get(i, o)) ? (Object.is(t.item, n) || this._addIdentityChange(t, n), this._moveAfter(t, r, o)) : t = this._addAfter(new CM(n, i), r, o), t
				}
				_verifyReinsertion(t, n, i, o) {
					let r = null === this._unlinkedRecords ? null : this._unlinkedRecords.get(i, null);
					return null !== r ? t = this._reinsertAfter(r, t._prev, o) : t.currentIndex != o && (t.currentIndex = o, this._addToMoves(t, o)), t
				}
				_truncate(t) {
					for (; null !== t;) {
						const n = t._next;
						this._addToRemovals(this._unlink(t)), t = n
					}
					null !== this._unlinkedRecords && this._unlinkedRecords.clear(), null !== this._additionsTail && (this._additionsTail._nextAdded = null), null !== this._movesTail && (this._movesTail._nextMoved = null), null !== this._itTail && (this._itTail._next = null), null !== this._removalsTail && (this._removalsTail._nextRemoved = null), null !== this._identityChangesTail && (this._identityChangesTail._nextIdentityChange = null)
				}
				_reinsertAfter(t, n, i) {
					null !== this._unlinkedRecords && this._unlinkedRecords.remove(t);
					const o = t._prevRemoved,
						r = t._nextRemoved;
					return null === o ? this._removalsHead = r : o._nextRemoved = r, null === r ? this._removalsTail = o : r._prevRemoved = o, this._insertAfter(t, n, i), this._addToMoves(t, i), t
				}
				_moveAfter(t, n, i) {
					return this._unlink(t), this._insertAfter(t, n, i), this._addToMoves(t, i), t
				}
				_addAfter(t, n, i) {
					return this._insertAfter(t, n, i), this._additionsTail = null === this._additionsTail ? this._additionsHead = t : this._additionsTail._nextAdded = t, t
				}
				_insertAfter(t, n, i) {
					const o = null === n ? this._itHead : n._next;
					return t._next = o, t._prev = n, null === o ? this._itTail = t : o._prev = t, null === n ? this._itHead = t : n._next = t, null === this._linkedRecords && (this._linkedRecords = new mv), this._linkedRecords.put(t), t.currentIndex = i, t
				}
				_remove(t) {
					return this._addToRemovals(this._unlink(t))
				}
				_unlink(t) {
					null !== this._linkedRecords && this._linkedRecords.remove(t);
					const n = t._prev,
						i = t._next;
					return null === n ? this._itHead = i : n._next = i, null === i ? this._itTail = n : i._prev = n, t
				}
				_addToMoves(t, n) {
					return t.previousIndex === n || (this._movesTail = null === this._movesTail ? this._movesHead = t : this._movesTail._nextMoved = t), t
				}
				_addToRemovals(t) {
					return null === this._unlinkedRecords && (this._unlinkedRecords = new mv), this._unlinkedRecords.put(t), t.currentIndex = null, t._nextRemoved = null, null === this._removalsTail ? (this._removalsTail = this._removalsHead = t, t._prevRemoved = null) : (t._prevRemoved = this._removalsTail, this._removalsTail = this._removalsTail._nextRemoved = t), t
				}
				_addIdentityChange(t, n) {
					return t.item = n, this._identityChangesTail = null === this._identityChangesTail ? this._identityChangesHead = t : this._identityChangesTail._nextIdentityChange = t, t
				}
			}
			class CM {
				constructor(t, n) {
					this.item = t, this.trackById = n, this.currentIndex = null, this.previousIndex = null, this._nextPrevious = null, this._prev = null, this._next = null, this._prevDup = null, this._nextDup = null, this._prevRemoved = null, this._nextRemoved = null, this._nextAdded = null, this._nextMoved = null, this._nextIdentityChange = null
				}
			}
			class wM {
				constructor() {
					this._head = null, this._tail = null
				}
				add(t) {
					null === this._head ? (this._head = this._tail = t, t._nextDup = null, t._prevDup = null) : (this._tail._nextDup = t, t._prevDup = this._tail, t._nextDup = null, this._tail = t)
				}
				get(t, n) {
					let i;
					for (i = this._head; null !== i; i = i._nextDup)
						if ((null === n || n <= i.currentIndex) && Object.is(i.trackById, t)) return i;
					return null
				}
				remove(t) {
					const n = t._prevDup,
						i = t._nextDup;
					return null === n ? this._head = i : n._nextDup = i, null === i ? this._tail = n : i._prevDup = n, null === this._head
				}
			}
			class mv {
				constructor() {
					this.map = new Map
				}
				put(t) {
					const n = t.trackById;
					let i = this.map.get(n);
					i || (i = new wM, this.map.set(n, i)), i.add(t)
				}
				get(t, n) {
					const o = this.map.get(t);
					return o ? o.get(t, n) : null
				}
				remove(t) {
					const n = t.trackById;
					return this.map.get(n).remove(t) && this.map.delete(n), t
				}
				get isEmpty() {
					return 0 === this.map.size
				}
				clear() {
					this.map.clear()
				}
			}

			function gv(e, t, n) {
				const i = e.previousIndex;
				if (null === i) return i;
				let o = 0;
				return n && i < n.length && (o = n[i]), i + t + o
			}
			class _v {
				constructor() {}
				supports(t) {
					return t instanceof Map || Dd(t)
				}
				create() {
					return new MM
				}
			}
			class MM {
				constructor() {
					this._records = new Map, this._mapHead = null, this._appendAfter = null, this._previousMapHead = null, this._changesHead = null, this._changesTail = null, this._additionsHead = null, this._additionsTail = null, this._removalsHead = null, this._removalsTail = null
				}
				get isDirty() {
					return null !== this._additionsHead || null !== this._changesHead || null !== this._removalsHead
				}
				forEachItem(t) {
					let n;
					for (n = this._mapHead; null !== n; n = n._next) t(n)
				}
				forEachPreviousItem(t) {
					let n;
					for (n = this._previousMapHead; null !== n; n = n._nextPrevious) t(n)
				}
				forEachChangedItem(t) {
					let n;
					for (n = this._changesHead; null !== n; n = n._nextChanged) t(n)
				}
				forEachAddedItem(t) {
					let n;
					for (n = this._additionsHead; null !== n; n = n._nextAdded) t(n)
				}
				forEachRemovedItem(t) {
					let n;
					for (n = this._removalsHead; null !== n; n = n._nextRemoved) t(n)
				}
				diff(t) {
					if (t) {
						if (!(t instanceof Map || Dd(t))) throw new $(900, !1)
					} else t = new Map;
					return this.check(t) ? this : null
				}
				onDestroy() {}
				check(t) {
					this._reset();
					let n = this._mapHead;
					if (this._appendAfter = null, this._forEach(t, (i, o) => {
							if (n && n.key === o) this._maybeAddToChanges(n, i), this._appendAfter = n, n = n._next;
							else {
								const r = this._getOrCreateRecordForKey(o, i);
								n = this._insertBeforeOrAppend(n, r)
							}
						}), n) {
						n._prev && (n._prev._next = null), this._removalsHead = n;
						for (let i = n; null !== i; i = i._nextRemoved) i === this._mapHead && (this._mapHead = null), this._records.delete(i.key), i._nextRemoved = i._next, i.previousValue = i.currentValue, i.currentValue = null, i._prev = null, i._next = null
					}
					return this._changesTail && (this._changesTail._nextChanged = null), this._additionsTail && (this._additionsTail._nextAdded = null), this.isDirty
				}
				_insertBeforeOrAppend(t, n) {
					if (t) {
						const i = t._prev;
						return n._next = t, n._prev = i, t._prev = n, i && (i._next = n), t === this._mapHead && (this._mapHead = n), this._appendAfter = t, t
					}
					return this._appendAfter ? (this._appendAfter._next = n, n._prev = this._appendAfter) : this._mapHead = n, this._appendAfter = n, null
				}
				_getOrCreateRecordForKey(t, n) {
					if (this._records.has(t)) {
						const o = this._records.get(t);
						this._maybeAddToChanges(o, n);
						const r = o._prev,
							a = o._next;
						return r && (r._next = a), a && (a._prev = r), o._next = null, o._prev = null, o
					}
					const i = new xM(t);
					return this._records.set(t, i), i.currentValue = n, this._addToAdditions(i), i
				}
				_reset() {
					if (this.isDirty) {
						let t;
						for (this._previousMapHead = this._mapHead, t = this._previousMapHead; null !== t; t = t._next) t._nextPrevious = t._next;
						for (t = this._changesHead; null !== t; t = t._nextChanged) t.previousValue = t.currentValue;
						for (t = this._additionsHead; null != t; t = t._nextAdded) t.previousValue = t.currentValue;
						this._changesHead = this._changesTail = null, this._additionsHead = this._additionsTail = null, this._removalsHead = null
					}
				}
				_maybeAddToChanges(t, n) {
					Object.is(n, t.currentValue) || (t.previousValue = t.currentValue, t.currentValue = n, this._addToChanges(t))
				}
				_addToAdditions(t) {
					null === this._additionsHead ? this._additionsHead = this._additionsTail = t : (this._additionsTail._nextAdded = t, this._additionsTail = t)
				}
				_addToChanges(t) {
					null === this._changesHead ? this._changesHead = this._changesTail = t : (this._changesTail._nextChanged = t, this._changesTail = t)
				}
				_forEach(t, n) {
					t instanceof Map ? t.forEach(n) : Object.keys(t).forEach(i => n(t[i], i))
				}
			}
			class xM {
				constructor(t) {
					this.key = t, this.previousValue = null, this.currentValue = null, this._nextPrevious = null, this._next = null, this._prev = null, this._nextAdded = null, this._nextRemoved = null, this._nextChanged = null
				}
			}

			function vv() {
				return new If([new pv])
			}
			let If = (() => {
				class e {
					static #e = this.\u0275prov = mt({
						token: e,
						providedIn: "root",
						factory: vv
					});
					constructor(n) {
						this.factories = n
					}
					static create(n, i) {
						if (null != i) {
							const o = i.factories.slice();
							n = n.concat(o)
						}
						return new e(n)
					}
					static extend(n) {
						return {
							provide: e,
							useFactory: i => e.create(n, i || vv()),
							deps: [
								[e, new Xc, new Qc]
							]
						}
					}
					find(n) {
						const i = this.factories.find(o => o.supports(n));
						if (null != i) return i;
						throw new $(901, !1)
					}
				}
				return e
			})();

			function bv() {
				return new Sf([new _v])
			}
			let Sf = (() => {
					class e {
						static #e = this.\u0275prov = mt({
							token: e,
							providedIn: "root",
							factory: bv
						});
						constructor(n) {
							this.factories = n
						}
						static create(n, i) {
							if (i) {
								const o = i.factories.slice();
								n = n.concat(o)
							}
							return new e(n)
						}
						static extend(n) {
							return {
								provide: e,
								useFactory: i => e.create(n, i || bv()),
								deps: [
									[e, new Xc, new Qc]
								]
							}
						}
						find(n) {
							const i = this.factories.find(o => o.supports(n));
							if (i) return i;
							throw new $(901, !1)
						}
					}
					return e
				})(),
				TM = (() => {
					class e {
						constructor(n) {}
						static #e = this.\u0275fac = function(i) {
							return new(i || e)(se(Na))
						};
						static #t = this.\u0275mod = Eo({
							type: e
						});
						static #n = this.\u0275inj = gt({})
					}
					return e
				})(),
				Iv = !1;

			function jM() {
				return Lu([{
					provide: El,
					useFactory: () => {
						let e = !0;
						return ga() && (e = !!k(uc, {
							optional: !0
						})?.get(Xu, null)), e && k($h).add("hydration"), e
					}
				}, {
					provide: lc,
					useValue: () => {
						ga() && k(El) && (function HM() {
							const e = ca();
							let t;
							for (const n of e.body.childNodes)
								if (n.nodeType === Node.COMMENT_NODE && n.textContent?.trim() === Cy) {
									t = n;
									break
								} if (!t) throw new $(-507, !1)
						}(), function LM() {
							Iv || (Iv = !0, function My() {
								Gh = wy
							}(), function TD() {
								mm = SD
							}(), function iE() {
								Ym = nE
							}(), function PD() {
								gm = OD
							}(), function MD() {
								fm = wD
							}(), function tw() {
								v_ = ew
							}(), function QC() {
								h_ = ZC
							}(), function f0() {
								Sp = d0
							}())
						}())
					},
					multi: !0
				}, {
					provide: mp,
					useFactory: () => ga() && k(El)
				}, {
					provide: Df,
					useFactory: () => {
						if (ga() && k(El)) {
							const e = k(Na);
							return k(Go), () => {
								(function BM(e, t) {
									return e.isStable.pipe((0, te.P)(i => i)).toPromise().then(() => {})
								})(e).then(() => {
									Oi.assertInAngularZone(),
										function YC(e) {
											const t = e._views;
											for (const n of t) {
												const i = Wh(n);
												null !== i && null !== i[Dn] && (li(i) ? Kl(i) : (Kl(i[Dn]), f_(i)))
											}
										}(e)
								})
							}
						}
						return () => {}
					},
					multi: !0
				}])
			}

			function UM(e) {
				return "boolean" == typeof e ? e : null != e && "false" !== e
			}

			function VM(e, t = NaN) {
				return isNaN(parseFloat(e)) || isNaN(Number(e)) ? t : Number(e)
			}
		},
		2296: (Ge, re, v) => {
			v.d(re, {
				RK: () => Mn,
				lW: () => ue,
				ot: () => we
			});
			var l = v(2831),
				O = v(5879),
				F = v(103),
				h = v(2495),
				B = v(3680);
			const K = ["mat-button", ""],
				ne = [
					[
						["", 8, "material-icons", 3, "iconPositionEnd", ""],
						["mat-icon", 3, "iconPositionEnd", ""],
						["", "matButtonIcon", "", 3, "iconPositionEnd", ""]
					], "*", [
						["", "iconPositionEnd", "", 8, "material-icons"],
						["mat-icon", "iconPositionEnd", ""],
						["", "matButtonIcon", "", "iconPositionEnd", ""]
					]
				],
				ae = [".material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd])", "*", ".material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd]"],
				xe = ["mat-icon-button", ""],
				Ne = ["*"],
				lt = [{
					selector: "mat-button",
					mdcClasses: ["mdc-button", "mat-mdc-button"]
				}, {
					selector: "mat-flat-button",
					mdcClasses: ["mdc-button", "mdc-button--unelevated", "mat-mdc-unelevated-button"]
				}, {
					selector: "mat-raised-button",
					mdcClasses: ["mdc-button", "mdc-button--raised", "mat-mdc-raised-button"]
				}, {
					selector: "mat-stroked-button",
					mdcClasses: ["mdc-button", "mdc-button--outlined", "mat-mdc-outlined-button"]
				}, {
					selector: "mat-fab",
					mdcClasses: ["mdc-fab", "mat-mdc-fab"]
				}, {
					selector: "mat-mini-fab",
					mdcClasses: ["mdc-fab", "mdc-fab--mini", "mat-mdc-mini-fab"]
				}, {
					selector: "mat-icon-button",
					mdcClasses: ["mdc-icon-button", "mat-mdc-icon-button"]
				}],
				qe = (0, B.pj)((0, B.Id)((0, B.Kr)(class {
					constructor(ve) {
						this._elementRef = ve
					}
				})));
			let ce = (() => {
					class ve extends qe {
						get ripple() {
							return this._rippleLoader?.getRipple(this._elementRef.nativeElement)
						}
						set ripple(me) {
							this._rippleLoader?.attachRipple(this._elementRef.nativeElement, me)
						}
						get disableRipple() {
							return this._disableRipple
						}
						set disableRipple(me) {
							this._disableRipple = (0, h.Ig)(me), this._updateRippleDisabled()
						}
						get disabled() {
							return this._disabled
						}
						set disabled(me) {
							this._disabled = (0, h.Ig)(me), this._updateRippleDisabled()
						}
						constructor(me, Ce, Re, tt) {
							super(me), this._platform = Ce, this._ngZone = Re, this._animationMode = tt, this._focusMonitor = (0, O.f3M)(F.tE), this._rippleLoader = (0, O.f3M)(B.Fq), this._isFab = !1, this._disableRipple = !1, this._disabled = !1, this._rippleLoader?.configureRipple(this._elementRef.nativeElement, {
								className: "mat-mdc-button-ripple"
							});
							const z = me.nativeElement.classList;
							for (const Se of lt) this._hasHostAttributes(Se.selector) && Se.mdcClasses.forEach(Ze => {
								z.add(Ze)
							})
						}
						ngAfterViewInit() {
							this._focusMonitor.monitor(this._elementRef, !0)
						}
						ngOnDestroy() {
							this._focusMonitor.stopMonitoring(this._elementRef), this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)
						}
						focus(me = "program", Ce) {
							me ? this._focusMonitor.focusVia(this._elementRef.nativeElement, me, Ce) : this._elementRef.nativeElement.focus(Ce)
						}
						_hasHostAttributes(...me) {
							return me.some(Ce => this._elementRef.nativeElement.hasAttribute(Ce))
						}
						_updateRippleDisabled() {
							this._rippleLoader?.setDisabled(this._elementRef.nativeElement, this.disableRipple || this.disabled)
						}
						static #e = this.\u0275fac = function(Ce) {
							O.$Z()
						};static #t = this.\u0275dir = O.lG2({
							type: ve,
							features: [O.qOj]
						})
					}
					return ve
				})(),
				ue = (() => {
					class ve extends ce {
						constructor(me, Ce, Re, tt) {
							super(me, Ce, Re, tt)
						}
						static #e = this.\u0275fac = function(Ce) {
							return new(Ce || ve)(O.Y36(O.SBq), O.Y36(l.t4), O.Y36(O.R0b), O.Y36(O.QbO, 8))
						};
						static #t = this.\u0275cmp = O.Xpm({
							type: ve,
							selectors: [
								["button", "mat-button", ""],
								["button", "mat-raised-button", ""],
								["button", "mat-flat-button", ""],
								["button", "mat-stroked-button", ""]
							],
							hostVars: 7,
							hostBindings: function(Ce, Re) {
								2 & Ce && (O.uIk("disabled", Re.disabled || null), O.ekj("_mat-animation-noopable", "NoopAnimations" === Re._animationMode)("mat-unthemed", !Re.color)("mat-mdc-button-base", !0))
							},
							inputs: {
								disabled: "disabled",
								disableRipple: "disableRipple",
								color: "color"
							},
							exportAs: ["matButton"],
							features: [O.qOj],
							attrs: K,
							ngContentSelectors: ae,
							decls: 7,
							vars: 4,
							consts: [
								[1, "mat-mdc-button-persistent-ripple"],
								[1, "mdc-button__label"],
								[1, "mat-mdc-focus-indicator"],
								[1, "mat-mdc-button-touch-target"]
							],
							template: function(Ce, Re) {
								1 & Ce && (O.F$t(ne), O._UZ(0, "span", 0), O.Hsn(1), O.TgZ(2, "span", 1), O.Hsn(3, 1), O.qZA(), O.Hsn(4, 2), O._UZ(5, "span", 2)(6, "span", 3)), 2 & Ce && O.ekj("mdc-button__ripple", !Re._isFab)("mdc-fab__ripple", Re._isFab)
							},
							styles: ['.mdc-touch-target-wrapper{display:inline}.mdc-elevation-overlay{position:absolute;border-radius:inherit;pointer-events:none;opacity:var(--mdc-elevation-overlay-opacity, 0);transition:opacity 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button{position:relative;display:inline-flex;align-items:center;justify-content:center;box-sizing:border-box;min-width:64px;border:none;outline:none;line-height:inherit;user-select:none;-webkit-appearance:none;overflow:visible;vertical-align:middle;background:rgba(0,0,0,0)}.mdc-button .mdc-elevation-overlay{width:100%;height:100%;top:0;left:0}.mdc-button::-moz-focus-inner{padding:0;border:0}.mdc-button:active{outline:none}.mdc-button:hover{cursor:pointer}.mdc-button:disabled{cursor:default;pointer-events:none}.mdc-button[hidden]{display:none}.mdc-button .mdc-button__icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top}[dir=rtl] .mdc-button .mdc-button__icon,.mdc-button .mdc-button__icon[dir=rtl]{margin-left:8px;margin-right:0}.mdc-button .mdc-button__progress-indicator{font-size:0;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;line-height:initial}.mdc-button .mdc-button__label{position:relative}.mdc-button .mdc-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(\n      100% + 4px\n    );width:calc(\n      100% + 4px\n    );display:none}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring{border-color:CanvasText}}.mdc-button .mdc-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-button .mdc-button__focus-ring::after{border-color:CanvasText}}@media screen and (forced-colors: active){.mdc-button.mdc-ripple-upgraded--background-focused .mdc-button__focus-ring,.mdc-button:not(.mdc-ripple-upgraded):focus .mdc-button__focus-ring{display:block}}.mdc-button .mdc-button__touch{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mdc-button__label+.mdc-button__icon{margin-left:8px;margin-right:0}[dir=rtl] .mdc-button__label+.mdc-button__icon,.mdc-button__label+.mdc-button__icon[dir=rtl]{margin-left:0;margin-right:8px}svg.mdc-button__icon{fill:currentColor}.mdc-button--touch{margin-top:6px;margin-bottom:6px}.mdc-button{padding:0 8px 0 8px}.mdc-button--unelevated{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--unelevated.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--unelevated.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--raised{transition:box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);padding:0 16px 0 16px}.mdc-button--raised.mdc-button--icon-trailing{padding:0 12px 0 16px}.mdc-button--raised.mdc-button--icon-leading{padding:0 16px 0 12px}.mdc-button--outlined{border-style:solid;transition:border 280ms cubic-bezier(0.4, 0, 0.2, 1)}.mdc-button--outlined .mdc-button__ripple{border-style:solid;border-color:rgba(0,0,0,0)}.mat-mdc-button{height:var(--mdc-text-button-container-height, 36px);border-radius:var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-button:not(:disabled){color:var(--mdc-text-button-label-text-color, inherit)}.mat-mdc-button:disabled{color:var(--mdc-text-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mat-mdc-button .mdc-button__ripple{border-radius:var(--mdc-text-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-unelevated-button{height:var(--mdc-filled-button-container-height, 36px);border-radius:var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-unelevated-button:not(:disabled){background-color:var(--mdc-filled-button-container-color, transparent)}.mat-mdc-unelevated-button:disabled{background-color:var(--mdc-filled-button-disabled-container-color, rgba(0, 0, 0, 0.12))}.mat-mdc-unelevated-button:not(:disabled){color:var(--mdc-filled-button-label-text-color, inherit)}.mat-mdc-unelevated-button:disabled{color:var(--mdc-filled-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mat-mdc-unelevated-button .mdc-button__ripple{border-radius:var(--mdc-filled-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-raised-button{height:var(--mdc-protected-button-container-height, 36px);border-radius:var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px));box-shadow:var(--mdc-protected-button-container-elevation, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:not(:disabled){background-color:var(--mdc-protected-button-container-color, transparent)}.mat-mdc-raised-button:disabled{background-color:var(--mdc-protected-button-disabled-container-color, rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:not(:disabled){color:var(--mdc-protected-button-label-text-color, inherit)}.mat-mdc-raised-button:disabled{color:var(--mdc-protected-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mat-mdc-raised-button .mdc-button__ripple{border-radius:var(--mdc-protected-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-raised-button.mdc-ripple-upgraded--background-focused,.mat-mdc-raised-button:not(.mdc-ripple-upgraded):focus{box-shadow:var(--mdc-protected-button-focus-container-elevation, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:hover{box-shadow:var(--mdc-protected-button-hover-container-elevation, 0px 2px 4px -1px rgba(0, 0, 0, 0.2), 0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:not(:disabled):active{box-shadow:var(--mdc-protected-button-pressed-container-elevation, 0px 5px 5px -3px rgba(0, 0, 0, 0.2), 0px 8px 10px 1px rgba(0, 0, 0, 0.14), 0px 3px 14px 2px rgba(0, 0, 0, 0.12))}.mat-mdc-raised-button:disabled{box-shadow:var(--mdc-protected-button-disabled-container-elevation, 0px 0px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 0px rgba(0, 0, 0, 0.14), 0px 0px 0px 0px rgba(0, 0, 0, 0.12))}.mat-mdc-outlined-button{height:var(--mdc-outlined-button-container-height, 36px);border-radius:var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px));padding:0 15px 0 15px;border-width:var(--mdc-outlined-button-outline-width, 1px)}.mat-mdc-outlined-button:not(:disabled){color:var(--mdc-outlined-button-label-text-color, inherit)}.mat-mdc-outlined-button:disabled{color:var(--mdc-outlined-button-disabled-label-text-color, rgba(0, 0, 0, 0.38))}.mat-mdc-outlined-button .mdc-button__ripple{border-radius:var(--mdc-outlined-button-container-shape, var(--mdc-shape-small, 4px))}.mat-mdc-outlined-button:not(:disabled){border-color:var(--mdc-outlined-button-outline-color, rgba(0, 0, 0, 0.12))}.mat-mdc-outlined-button:disabled{border-color:var(--mdc-outlined-button-disabled-outline-color, rgba(0, 0, 0, 0.12))}.mat-mdc-outlined-button.mdc-button--icon-trailing{padding:0 11px 0 15px}.mat-mdc-outlined-button.mdc-button--icon-leading{padding:0 15px 0 11px}.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:var(--mdc-outlined-button-outline-width, 1px)}.mat-mdc-outlined-button .mdc-button__touch{left:calc(-1 * var(--mdc-outlined-button-outline-width, 1px));width:calc(100% + 2 * var(--mdc-outlined-button-outline-width, 1px))}.mat-mdc-button,.mat-mdc-unelevated-button,.mat-mdc-raised-button,.mat-mdc-outlined-button{-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple,.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-button .mat-mdc-button-ripple,.mat-mdc-unelevated-button .mat-mdc-button-ripple,.mat-mdc-raised-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0;background-color:var(--mat-mdc-button-persistent-ripple-color)}.mat-mdc-button .mat-ripple-element,.mat-mdc-unelevated-button .mat-ripple-element,.mat-mdc-raised-button .mat-ripple-element,.mat-mdc-outlined-button .mat-ripple-element{background-color:var(--mat-mdc-button-ripple-color)}.mat-mdc-button .mdc-button__label,.mat-mdc-unelevated-button .mdc-button__label,.mat-mdc-raised-button .mdc-button__label,.mat-mdc-outlined-button .mdc-button__label{z-index:1}.mat-mdc-button .mat-mdc-focus-indicator,.mat-mdc-unelevated-button .mat-mdc-focus-indicator,.mat-mdc-raised-button .mat-mdc-focus-indicator,.mat-mdc-outlined-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-unelevated-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-raised-button:focus .mat-mdc-focus-indicator::before,.mat-mdc-outlined-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-button[disabled],.mat-mdc-unelevated-button[disabled],.mat-mdc-raised-button[disabled],.mat-mdc-outlined-button[disabled]{cursor:default;pointer-events:none}.mat-mdc-button .mat-mdc-button-touch-target,.mat-mdc-unelevated-button .mat-mdc-button-touch-target,.mat-mdc-raised-button .mat-mdc-button-touch-target,.mat-mdc-outlined-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:0;right:0;transform:translateY(-50%)}.mat-mdc-button._mat-animation-noopable,.mat-mdc-unelevated-button._mat-animation-noopable,.mat-mdc-raised-button._mat-animation-noopable,.mat-mdc-outlined-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-button>.mat-icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem}[dir=rtl] .mat-mdc-button>.mat-icon,.mat-mdc-button>.mat-icon[dir=rtl]{margin-left:8px;margin-right:0}.mat-mdc-button .mdc-button__label+.mat-icon{margin-left:8px;margin-right:0}[dir=rtl] .mat-mdc-button .mdc-button__label+.mat-icon,.mat-mdc-button .mdc-button__label+.mat-icon[dir=rtl]{margin-left:0;margin-right:8px}.mat-mdc-unelevated-button>.mat-icon,.mat-mdc-raised-button>.mat-icon,.mat-mdc-outlined-button>.mat-icon{margin-left:0;margin-right:8px;display:inline-block;position:relative;vertical-align:top;font-size:1.125rem;height:1.125rem;width:1.125rem;margin-left:-4px;margin-right:8px}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon,[dir=rtl] .mat-mdc-raised-button>.mat-icon,[dir=rtl] .mat-mdc-outlined-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon[dir=rtl],.mat-mdc-raised-button>.mat-icon[dir=rtl],.mat-mdc-outlined-button>.mat-icon[dir=rtl]{margin-left:8px;margin-right:0}[dir=rtl] .mat-mdc-unelevated-button>.mat-icon,[dir=rtl] .mat-mdc-raised-button>.mat-icon,[dir=rtl] .mat-mdc-outlined-button>.mat-icon,.mat-mdc-unelevated-button>.mat-icon[dir=rtl],.mat-mdc-raised-button>.mat-icon[dir=rtl],.mat-mdc-outlined-button>.mat-icon[dir=rtl]{margin-left:8px;margin-right:-4px}.mat-mdc-unelevated-button .mdc-button__label+.mat-icon,.mat-mdc-raised-button .mdc-button__label+.mat-icon,.mat-mdc-outlined-button .mdc-button__label+.mat-icon{margin-left:8px;margin-right:-4px}[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-raised-button .mdc-button__label+.mat-icon,[dir=rtl] .mat-mdc-outlined-button .mdc-button__label+.mat-icon,.mat-mdc-unelevated-button .mdc-button__label+.mat-icon[dir=rtl],.mat-mdc-raised-button .mdc-button__label+.mat-icon[dir=rtl],.mat-mdc-outlined-button .mdc-button__label+.mat-icon[dir=rtl]{margin-left:-4px;margin-right:8px}.mat-mdc-outlined-button .mat-mdc-button-ripple,.mat-mdc-outlined-button .mdc-button__ripple{top:-1px;left:-1px;bottom:-1px;right:-1px;border-width:-1px}.mat-mdc-unelevated-button .mat-mdc-focus-indicator::before,.mat-mdc-raised-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 2px) * -1)}.mat-mdc-outlined-button .mat-mdc-focus-indicator::before{margin:calc(calc(var(--mat-mdc-focus-indicator-border-width, 3px) + 3px) * -1)}', ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}"],
							encapsulation: 2,
							changeDetection: 0
						})
					}
					return ve
				})(),
				Mn = (() => {
					class ve extends ce {
						constructor(me, Ce, Re, tt) {
							super(me, Ce, Re, tt), this._rippleLoader.configureRipple(this._elementRef.nativeElement, {
								centered: !0
							})
						}
						static #e = this.\u0275fac = function(Ce) {
							return new(Ce || ve)(O.Y36(O.SBq), O.Y36(l.t4), O.Y36(O.R0b), O.Y36(O.QbO, 8))
						};
						static #t = this.\u0275cmp = O.Xpm({
							type: ve,
							selectors: [
								["button", "mat-icon-button", ""]
							],
							hostVars: 7,
							hostBindings: function(Ce, Re) {
								2 & Ce && (O.uIk("disabled", Re.disabled || null), O.ekj("_mat-animation-noopable", "NoopAnimations" === Re._animationMode)("mat-unthemed", !Re.color)("mat-mdc-button-base", !0))
							},
							inputs: {
								disabled: "disabled",
								disableRipple: "disableRipple",
								color: "color"
							},
							exportAs: ["matButton"],
							features: [O.qOj],
							attrs: xe,
							ngContentSelectors: Ne,
							decls: 4,
							vars: 0,
							consts: [
								[1, "mat-mdc-button-persistent-ripple", "mdc-icon-button__ripple"],
								[1, "mat-mdc-focus-indicator"],
								[1, "mat-mdc-button-touch-target"]
							],
							template: function(Ce, Re) {
								1 & Ce && (O.F$t(), O._UZ(0, "span", 0), O.Hsn(1), O._UZ(2, "span", 1)(3, "span", 2))
							},
							styles: ['.mdc-icon-button{display:inline-block;position:relative;box-sizing:border-box;border:none;outline:none;background-color:rgba(0,0,0,0);fill:currentColor;color:inherit;text-decoration:none;cursor:pointer;user-select:none;z-index:0;overflow:visible}.mdc-icon-button .mdc-icon-button__touch{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}@media screen and (forced-colors: active){.mdc-icon-button.mdc-ripple-upgraded--background-focused .mdc-icon-button__focus-ring,.mdc-icon-button:not(.mdc-ripple-upgraded):focus .mdc-icon-button__focus-ring{display:block}}.mdc-icon-button:disabled{cursor:default;pointer-events:none}.mdc-icon-button[hidden]{display:none}.mdc-icon-button--display-flex{align-items:center;display:inline-flex;justify-content:center}.mdc-icon-button__focus-ring{pointer-events:none;border:2px solid rgba(0,0,0,0);border-radius:6px;box-sizing:content-box;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:100%;width:100%;display:none}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring{border-color:CanvasText}}.mdc-icon-button__focus-ring::after{content:"";border:2px solid rgba(0,0,0,0);border-radius:8px;display:block;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);height:calc(100% + 4px);width:calc(100% + 4px)}@media screen and (forced-colors: active){.mdc-icon-button__focus-ring::after{border-color:CanvasText}}.mdc-icon-button__icon{display:inline-block}.mdc-icon-button__icon.mdc-icon-button__icon--on{display:none}.mdc-icon-button--on .mdc-icon-button__icon{display:none}.mdc-icon-button--on .mdc-icon-button__icon.mdc-icon-button__icon--on{display:inline-block}.mdc-icon-button__link{height:100%;left:0;outline:none;position:absolute;top:0;width:100%}.mat-mdc-icon-button{height:var(--mdc-icon-button-state-layer-size);width:var(--mdc-icon-button-state-layer-size);color:var(--mdc-icon-button-icon-color);--mdc-icon-button-state-layer-size:48px;--mdc-icon-button-icon-size:24px;--mdc-icon-button-disabled-icon-color:black;--mdc-icon-button-disabled-icon-opacity:0.38}.mat-mdc-icon-button .mdc-button__icon{font-size:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button svg,.mat-mdc-icon-button img{width:var(--mdc-icon-button-icon-size);height:var(--mdc-icon-button-icon-size)}.mat-mdc-icon-button:disabled{opacity:var(--mdc-icon-button-disabled-icon-opacity)}.mat-mdc-icon-button:disabled{color:var(--mdc-icon-button-disabled-icon-color)}.mat-mdc-icon-button{padding:12px;font-size:var(--mdc-icon-button-icon-size);border-radius:50%;flex-shrink:0;text-align:center;-webkit-tap-highlight-color:rgba(0,0,0,0)}.mat-mdc-icon-button svg{vertical-align:baseline}.mat-mdc-icon-button[disabled]{cursor:default;pointer-events:none;opacity:1}.mat-mdc-icon-button .mat-mdc-button-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none;border-radius:inherit}.mat-mdc-icon-button .mat-mdc-button-ripple{overflow:hidden}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before{content:"";opacity:0;background-color:var(--mat-mdc-button-persistent-ripple-color)}.mat-mdc-icon-button .mat-ripple-element{background-color:var(--mat-mdc-button-ripple-color)}.mat-mdc-icon-button .mdc-button__label{z-index:1}.mat-mdc-icon-button .mat-mdc-focus-indicator{top:0;left:0;right:0;bottom:0;position:absolute}.mat-mdc-icon-button:focus .mat-mdc-focus-indicator::before{content:""}.mat-mdc-icon-button .mat-mdc-button-touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}.mat-mdc-icon-button._mat-animation-noopable{transition:none !important;animation:none !important}.mat-mdc-icon-button .mat-mdc-button-persistent-ripple{border-radius:50%}.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before,.mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before{background:rgba(0,0,0,0);opacity:1}', ".cdk-high-contrast-active .mat-mdc-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-unelevated-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-raised-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-outlined-button:not(.mdc-button--outlined),.cdk-high-contrast-active .mat-mdc-icon-button{outline:solid 1px}"],
							encapsulation: 2,
							changeDetection: 0
						})
					}
					return ve
				})(),
				we = (() => {
					class ve {
						static #e = this.\u0275fac = function(Ce) {
							return new(Ce || ve)
						};
						static #t = this.\u0275mod = O.oAB({
							type: ve
						});
						static #n = this.\u0275inj = O.cJS({
							imports: [B.BQ, B.si, B.BQ]
						})
					}
					return ve
				})()
		},
		3680: (Ge, re, v) => {
			v.d(re, {
				rD: () => z,
				K7: () => yt,
				HF: () => Xe,
				BQ: () => Ie,
				ey: () => fn,
				Ng: () => Ui,
				rN: () => ln,
				us: () => Ue,
				wG: () => H,
				Fq: () => zn,
				si: () => pe,
				CB: () => Ln,
				jH: () => yn,
				pj: () => rt,
				Kr: () => Ot,
				Id: () => We,
				FD: () => Yt,
				sb: () => wt
			});
			var l = v(5879),
				O = v(103),
				F = v(9388),
				B = v(6814),
				K = v(2831),
				ne = v(2495),
				ae = v(8645),
				ie = v(6028);
			const de = ["text"];

			function ye(Le, L) {
				if (1 & Le && l._UZ(0, "mat-pseudo-checkbox", 6), 2 & Le) {
					const I = l.oxw();
					l.Q6J("disabled", I.disabled)("state", I.selected ? "checked" : "unchecked")
				}
			}

			function xe(Le, L) {
				if (1 & Le && l._UZ(0, "mat-pseudo-checkbox", 7), 2 & Le) {
					const I = l.oxw();
					l.Q6J("disabled", I.disabled)
				}
			}

			function Ne(Le, L) {
				if (1 & Le && (l.TgZ(0, "span", 8), l._uU(1), l.qZA()), 2 & Le) {
					const I = l.oxw();
					l.xp6(1), l.hij("(", I.group.label, ")")
				}
			}
			const Ye = [
					[
						["mat-icon"]
					], "*"
				],
				ge = ["mat-icon", "*"],
				$ = new l.OlP("mat-sanity-checks", {
					providedIn: "root",
					factory: function ce() {
						return !0
					}
				});
			let Ie = (() => {
				class Le {
					constructor(I, x, R) {
						this._sanityChecks = x, this._document = R, this._hasDoneGlobalChecks = !1, I._applyBodyHighContrastModeCssClasses(), this._hasDoneGlobalChecks || (this._hasDoneGlobalChecks = !0)
					}
					_checkIsEnabled(I) {
						return !(0, K.Oy)() && ("boolean" == typeof this._sanityChecks ? this._sanityChecks : !!this._sanityChecks[I])
					}
					static #e = this.\u0275fac = function(x) {
						return new(x || Le)(l.LFG(O.qm), l.LFG($, 8), l.LFG(B.K0))
					};
					static #t = this.\u0275mod = l.oAB({
						type: Le
					});
					static #n = this.\u0275inj = l.cJS({
						imports: [F.vT, F.vT]
					})
				}
				return Le
			})();

			function We(Le) {
				return class extends Le {
					get disabled() {
						return this._disabled
					}
					set disabled(L) {
						this._disabled = (0, ne.Ig)(L)
					}
					constructor(...L) {
						super(...L), this._disabled = !1
					}
				}
			}

			function rt(Le, L) {
				return class extends Le {
					get color() {
						return this._color
					}
					set color(I) {
						const x = I || this.defaultColor;
						x !== this._color && (this._color && this._elementRef.nativeElement.classList.remove(`mat-${this._color}`), x && this._elementRef.nativeElement.classList.add(`mat-${x}`), this._color = x)
					}
					constructor(...I) {
						super(...I), this.defaultColor = L, this.color = L
					}
				}
			}

			function Ot(Le) {
				return class extends Le {
					get disableRipple() {
						return this._disableRipple
					}
					set disableRipple(L) {
						this._disableRipple = (0, ne.Ig)(L)
					}
					constructor(...L) {
						super(...L), this._disableRipple = !1
					}
				}
			}

			function wt(Le, L = 0) {
				return class extends Le {
					get tabIndex() {
						return this.disabled ? -1 : this._tabIndex
					}
					set tabIndex(I) {
						this._tabIndex = null != I ? (0, ne.su)(I) : this.defaultTabIndex
					}
					constructor(...I) {
						super(...I), this._tabIndex = L, this.defaultTabIndex = L
					}
				}
			}

			function Yt(Le) {
				return class extends Le {
					updateErrorState() {
						const L = this.errorState,
							le = (this.errorStateMatcher || this._defaultErrorStateMatcher).isErrorState(this.ngControl ? this.ngControl.control : null, this._parentFormGroup || this._parentForm);
						le !== L && (this.errorState = le, this.stateChanges.next())
					}
					constructor(...L) {
						super(...L), this.errorState = !1
					}
				}
			}
			let z = (() => {
				class Le {
					isErrorState(I, x) {
						return !!(I && I.invalid && (I.touched || x && x.submitted))
					}
					static #e = this.\u0275fac = function(x) {
						return new(x || Le)
					};
					static #t = this.\u0275prov = l.Yz7({
						token: Le,
						factory: Le.\u0275fac,
						providedIn: "root"
					})
				}
				return Le
			})();
			class _t {
				constructor(L, I, x, R = !1) {
					this._renderer = L, this.element = I, this.config = x, this._animationForciblyDisabledThroughCss = R, this.state = 3
				}
				fadeOut() {
					this._renderer.fadeOutRipple(this)
				}
			}
			const gt = (0, K.i$)({
				passive: !0,
				capture: !0
			});
			class Dt {
				constructor() {
					this._events = new Map, this._delegateEventHandler = L => {
						const I = (0, K.sA)(L);
						I && this._events.get(L.type)?.forEach((x, R) => {
							(R === I || R.contains(I)) && x.forEach(le => le.handleEvent(L))
						})
					}
				}
				addHandler(L, I, x, R) {
					const le = this._events.get(I);
					if (le) {
						const Ke = le.get(x);
						Ke ? Ke.add(R) : le.set(x, new Set([R]))
					} else this._events.set(I, new Map([
						[x, new Set([R])]
					])), L.runOutsideAngular(() => {
						document.addEventListener(I, this._delegateEventHandler, gt)
					})
				}
				removeHandler(L, I, x) {
					const R = this._events.get(L);
					if (!R) return;
					const le = R.get(I);
					le && (le.delete(x), 0 === le.size && R.delete(I), 0 === R.size && (this._events.delete(L), document.removeEventListener(L, this._delegateEventHandler, gt)))
				}
			}
			const an = {
					enterDuration: 225,
					exitDuration: 150
				},
				Nn = (0, K.i$)({
					passive: !0,
					capture: !0
				}),
				Vn = ["mousedown", "touchstart"],
				Zn = ["mouseup", "mouseleave", "touchend", "touchcancel"];
			class Be {
				static #e = this._eventManager = new Dt;
				constructor(L, I, x, R) {
					this._target = L, this._ngZone = I, this._platform = R, this._isPointerDown = !1, this._activeRipples = new Map, this._pointerUpEventsRegistered = !1, R.isBrowser && (this._containerElement = (0, ne.fI)(x))
				}
				fadeInRipple(L, I, x = {}) {
					const R = this._containerRect = this._containerRect || this._containerElement.getBoundingClientRect(),
						le = {
							...an,
							...x.animation
						};
					x.centered && (L = R.left + R.width / 2, I = R.top + R.height / 2);
					const Ke = x.radius || function N(Le, L, I) {
							const x = Math.max(Math.abs(Le - I.left), Math.abs(Le - I.right)),
								R = Math.max(Math.abs(L - I.top), Math.abs(L - I.bottom));
							return Math.sqrt(x * x + R * R)
						}(L, I, R),
						Ct = L - R.left,
						se = I - R.top,
						ee = le.enterDuration,
						k = document.createElement("div");
					k.classList.add("mat-ripple-element"), k.style.left = Ct - Ke + "px", k.style.top = se - Ke + "px", k.style.height = 2 * Ke + "px", k.style.width = 2 * Ke + "px", null != x.color && (k.style.backgroundColor = x.color), k.style.transitionDuration = `${ee}ms`, this._containerElement.appendChild(k);
					const Z = window.getComputedStyle(k),
						$e = Z.transitionDuration,
						X = "none" === Z.transitionProperty || "0s" === $e || "0s, 0s" === $e || 0 === R.width && 0 === R.height,
						G = new _t(this, k, x, X);
					k.style.transform = "scale3d(1, 1, 1)", G.state = 0, x.persistent || (this._mostRecentTransientRipple = G);
					let J = null;
					return !X && (ee || le.exitDuration) && this._ngZone.runOutsideAngular(() => {
						const Oe = () => this._finishRippleTransition(G),
							Je = () => this._destroyRipple(G);
						k.addEventListener("transitionend", Oe), k.addEventListener("transitioncancel", Je), J = {
							onTransitionEnd: Oe,
							onTransitionCancel: Je
						}
					}), this._activeRipples.set(G, J), (X || !ee) && this._finishRippleTransition(G), G
				}
				fadeOutRipple(L) {
					if (2 === L.state || 3 === L.state) return;
					const I = L.element,
						x = {
							...an,
							...L.config.animation
						};
					I.style.transitionDuration = `${x.exitDuration}ms`, I.style.opacity = "0", L.state = 2, (L._animationForciblyDisabledThroughCss || !x.exitDuration) && this._finishRippleTransition(L)
				}
				fadeOutAll() {
					this._getActiveRipples().forEach(L => L.fadeOut())
				}
				fadeOutAllNonPersistent() {
					this._getActiveRipples().forEach(L => {
						L.config.persistent || L.fadeOut()
					})
				}
				setupTriggerEvents(L) {
					const I = (0, ne.fI)(L);
					!this._platform.isBrowser || !I || I === this._triggerElement || (this._removeTriggerEvents(), this._triggerElement = I, Vn.forEach(x => {
						Be._eventManager.addHandler(this._ngZone, x, I, this)
					}))
				}
				handleEvent(L) {
					"mousedown" === L.type ? this._onMousedown(L) : "touchstart" === L.type ? this._onTouchStart(L) : this._onPointerUp(), this._pointerUpEventsRegistered || (this._ngZone.runOutsideAngular(() => {
						Zn.forEach(I => {
							this._triggerElement.addEventListener(I, this, Nn)
						})
					}), this._pointerUpEventsRegistered = !0)
				}
				_finishRippleTransition(L) {
					0 === L.state ? this._startFadeOutTransition(L) : 2 === L.state && this._destroyRipple(L)
				}
				_startFadeOutTransition(L) {
					const I = L === this._mostRecentTransientRipple,
						{
							persistent: x
						} = L.config;
					L.state = 1, !x && (!I || !this._isPointerDown) && L.fadeOut()
				}
				_destroyRipple(L) {
					const I = this._activeRipples.get(L) ?? null;
					this._activeRipples.delete(L), this._activeRipples.size || (this._containerRect = null), L === this._mostRecentTransientRipple && (this._mostRecentTransientRipple = null), L.state = 3, null !== I && (L.element.removeEventListener("transitionend", I.onTransitionEnd), L.element.removeEventListener("transitioncancel", I.onTransitionCancel)), L.element.remove()
				}
				_onMousedown(L) {
					const I = (0, O.X6)(L),
						x = this._lastTouchStartEvent && Date.now() < this._lastTouchStartEvent + 800;
					!this._target.rippleDisabled && !I && !x && (this._isPointerDown = !0, this.fadeInRipple(L.clientX, L.clientY, this._target.rippleConfig))
				}
				_onTouchStart(L) {
					if (!this._target.rippleDisabled && !(0, O.yG)(L)) {
						this._lastTouchStartEvent = Date.now(), this._isPointerDown = !0;
						const I = L.changedTouches;
						if (I)
							for (let x = 0; x < I.length; x++) this.fadeInRipple(I[x].clientX, I[x].clientY, this._target.rippleConfig)
					}
				}
				_onPointerUp() {
					this._isPointerDown && (this._isPointerDown = !1, this._getActiveRipples().forEach(L => {
						!L.config.persistent && (1 === L.state || L.config.terminateOnPointerUp && 0 === L.state) && L.fadeOut()
					}))
				}
				_getActiveRipples() {
					return Array.from(this._activeRipples.keys())
				}
				_removeTriggerEvents() {
					const L = this._triggerElement;
					L && (Vn.forEach(I => Be._eventManager.removeHandler(I, L, this)), this._pointerUpEventsRegistered && Zn.forEach(I => L.removeEventListener(I, this, Nn)))
				}
			}
			const V = new l.OlP("mat-ripple-global-options");
			let H = (() => {
					class Le {
						get disabled() {
							return this._disabled
						}
						set disabled(I) {
							I && this.fadeOutAllNonPersistent(), this._disabled = I, this._setupTriggerEventsIfEnabled()
						}
						get trigger() {
							return this._trigger || this._elementRef.nativeElement
						}
						set trigger(I) {
							this._trigger = I, this._setupTriggerEventsIfEnabled()
						}
						constructor(I, x, R, le, Ke) {
							this._elementRef = I, this._animationMode = Ke, this.radius = 0, this._disabled = !1, this._isInitialized = !1, this._globalOptions = le || {}, this._rippleRenderer = new Be(this, x, I, R)
						}
						ngOnInit() {
							this._isInitialized = !0, this._setupTriggerEventsIfEnabled()
						}
						ngOnDestroy() {
							this._rippleRenderer._removeTriggerEvents()
						}
						fadeOutAll() {
							this._rippleRenderer.fadeOutAll()
						}
						fadeOutAllNonPersistent() {
							this._rippleRenderer.fadeOutAllNonPersistent()
						}
						get rippleConfig() {
							return {
								centered: this.centered,
								radius: this.radius,
								color: this.color,
								animation: {
									...this._globalOptions.animation,
									..."NoopAnimations" === this._animationMode ? {
										enterDuration: 0,
										exitDuration: 0
									} : {},
									...this.animation
								},
								terminateOnPointerUp: this._globalOptions.terminateOnPointerUp
							}
						}
						get rippleDisabled() {
							return this.disabled || !!this._globalOptions.disabled
						}
						_setupTriggerEventsIfEnabled() {
							!this.disabled && this._isInitialized && this._rippleRenderer.setupTriggerEvents(this.trigger)
						}
						launch(I, x = 0, R) {
							return "number" == typeof I ? this._rippleRenderer.fadeInRipple(I, x, {
								...this.rippleConfig,
								...R
							}) : this._rippleRenderer.fadeInRipple(0, 0, {
								...this.rippleConfig,
								...I
							})
						}
						static #e = this.\u0275fac = function(x) {
							return new(x || Le)(l.Y36(l.SBq), l.Y36(l.R0b), l.Y36(K.t4), l.Y36(V, 8), l.Y36(l.QbO, 8))
						};
						static #t = this.\u0275dir = l.lG2({
							type: Le,
							selectors: [
								["", "mat-ripple", ""],
								["", "matRipple", ""]
							],
							hostAttrs: [1, "mat-ripple"],
							hostVars: 2,
							hostBindings: function(x, R) {
								2 & x && l.ekj("mat-ripple-unbounded", R.unbounded)
							},
							inputs: {
								color: ["matRippleColor", "color"],
								unbounded: ["matRippleUnbounded", "unbounded"],
								centered: ["matRippleCentered", "centered"],
								radius: ["matRippleRadius", "radius"],
								animation: ["matRippleAnimation", "animation"],
								disabled: ["matRippleDisabled", "disabled"],
								trigger: ["matRippleTrigger", "trigger"]
							},
							exportAs: ["matRipple"]
						})
					}
					return Le
				})(),
				pe = (() => {
					class Le {
						static #e = this.\u0275fac = function(x) {
							return new(x || Le)
						};
						static #t = this.\u0275mod = l.oAB({
							type: Le
						});
						static #n = this.\u0275inj = l.cJS({
							imports: [Ie, Ie]
						})
					}
					return Le
				})(),
				He = (() => {
					class Le {
						constructor(I) {
							this._animationMode = I, this.state = "unchecked", this.disabled = !1, this.appearance = "full"
						}
						static #e = this.\u0275fac = function(x) {
							return new(x || Le)(l.Y36(l.QbO, 8))
						};
						static #t = this.\u0275cmp = l.Xpm({
							type: Le,
							selectors: [
								["mat-pseudo-checkbox"]
							],
							hostAttrs: [1, "mat-pseudo-checkbox"],
							hostVars: 12,
							hostBindings: function(x, R) {
								2 & x && l.ekj("mat-pseudo-checkbox-indeterminate", "indeterminate" === R.state)("mat-pseudo-checkbox-checked", "checked" === R.state)("mat-pseudo-checkbox-disabled", R.disabled)("mat-pseudo-checkbox-minimal", "minimal" === R.appearance)("mat-pseudo-checkbox-full", "full" === R.appearance)("_mat-animation-noopable", "NoopAnimations" === R._animationMode)
							},
							inputs: {
								state: "state",
								disabled: "disabled",
								appearance: "appearance"
							},
							decls: 0,
							vars: 0,
							template: function(x, R) {},
							styles: ['.mat-pseudo-checkbox{border-radius:2px;cursor:pointer;display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;flex-shrink:0;transition:border-color 90ms cubic-bezier(0, 0, 0.2, 0.1),background-color 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox::after{position:absolute;opacity:0;content:"";border-bottom:2px solid currentColor;transition:opacity 90ms cubic-bezier(0, 0, 0.2, 0.1)}.mat-pseudo-checkbox._mat-animation-noopable{transition:none !important;animation:none !important}.mat-pseudo-checkbox._mat-animation-noopable::after{transition:none}.mat-pseudo-checkbox-disabled{cursor:default}.mat-pseudo-checkbox-indeterminate::after{left:1px;opacity:1;border-radius:2px}.mat-pseudo-checkbox-checked::after{left:1px;border-left:2px solid currentColor;transform:rotate(-45deg);opacity:1;box-sizing:content-box}.mat-pseudo-checkbox-full{border:2px solid}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked,.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate{border-color:rgba(0,0,0,0)}.mat-pseudo-checkbox{width:18px;height:18px}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after{width:14px;height:6px;transform-origin:center;top:-4.2426406871px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after{top:8px;width:16px}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after{width:10px;height:4px;transform-origin:center;top:-2.8284271247px;left:0;bottom:0;right:0;margin:auto}.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after{top:6px;width:12px}'],
							encapsulation: 2,
							changeDetection: 0
						})
					}
					return Le
				})(),
				Ue = (() => {
					class Le {
						static #e = this.\u0275fac = function(x) {
							return new(x || Le)
						};
						static #t = this.\u0275mod = l.oAB({
							type: Le
						});
						static #n = this.\u0275inj = l.cJS({
							imports: [Ie]
						})
					}
					return Le
				})();
			const Xe = new l.OlP("MAT_OPTION_PARENT_COMPONENT"),
				yt = new l.OlP("MatOptgroup");
			let Et = 0;
			class ln {
				constructor(L, I = !1) {
					this.source = L, this.isUserInput = I
				}
			}
			let nn = (() => {
					class Le {
						get multiple() {
							return this._parent && this._parent.multiple
						}
						get selected() {
							return this._selected
						}
						get disabled() {
							return this.group && this.group.disabled || this._disabled
						}
						set disabled(I) {
							this._disabled = (0, ne.Ig)(I)
						}
						get disableRipple() {
							return !(!this._parent || !this._parent.disableRipple)
						}
						get hideSingleSelectionIndicator() {
							return !(!this._parent || !this._parent.hideSingleSelectionIndicator)
						}
						constructor(I, x, R, le) {
							this._element = I, this._changeDetectorRef = x, this._parent = R, this.group = le, this._selected = !1, this._active = !1, this._disabled = !1, this._mostRecentViewValue = "", this.id = "mat-option-" + Et++, this.onSelectionChange = new l.vpe, this._stateChanges = new ae.x
						}
						get active() {
							return this._active
						}
						get viewValue() {
							return (this._text?.nativeElement.textContent || "").trim()
						}
						select(I = !0) {
							this._selected || (this._selected = !0, this._changeDetectorRef.markForCheck(), I && this._emitSelectionChangeEvent())
						}
						deselect(I = !0) {
							this._selected && (this._selected = !1, this._changeDetectorRef.markForCheck(), I && this._emitSelectionChangeEvent())
						}
						focus(I, x) {
							const R = this._getHostElement();
							"function" == typeof R.focus && R.focus(x)
						}
						setActiveStyles() {
							this._active || (this._active = !0, this._changeDetectorRef.markForCheck())
						}
						setInactiveStyles() {
							this._active && (this._active = !1, this._changeDetectorRef.markForCheck())
						}
						getLabel() {
							return this.viewValue
						}
						_handleKeydown(I) {
							(I.keyCode === ie.K5 || I.keyCode === ie.L_) && !(0, ie.Vb)(I) && (this._selectViaInteraction(), I.preventDefault())
						}
						_selectViaInteraction() {
							this.disabled || (this._selected = !this.multiple || !this._selected, this._changeDetectorRef.markForCheck(), this._emitSelectionChangeEvent(!0))
						}
						_getTabIndex() {
							return this.disabled ? "-1" : "0"
						}
						_getHostElement() {
							return this._element.nativeElement
						}
						ngAfterViewChecked() {
							if (this._selected) {
								const I = this.viewValue;
								I !== this._mostRecentViewValue && (this._mostRecentViewValue && this._stateChanges.next(), this._mostRecentViewValue = I)
							}
						}
						ngOnDestroy() {
							this._stateChanges.complete()
						}
						_emitSelectionChangeEvent(I = !1) {
							this.onSelectionChange.emit(new ln(this, I))
						}
						static #e = this.\u0275fac = function(x) {
							l.$Z()
						};
						static #t = this.\u0275dir = l.lG2({
							type: Le,
							viewQuery: function(x, R) {
								if (1 & x && l.Gf(de, 7), 2 & x) {
									let le;
									l.iGM(le = l.CRH()) && (R._text = le.first)
								}
							},
							inputs: {
								value: "value",
								id: "id",
								disabled: "disabled"
							},
							outputs: {
								onSelectionChange: "onSelectionChange"
							}
						})
					}
					return Le
				})(),
				fn = (() => {
					class Le extends nn {
						constructor(I, x, R, le) {
							super(I, x, R, le)
						}
						static #e = this.\u0275fac = function(x) {
							return new(x || Le)(l.Y36(l.SBq), l.Y36(l.sBO), l.Y36(Xe, 8), l.Y36(yt, 8))
						};
						static #t = this.\u0275cmp = l.Xpm({
							type: Le,
							selectors: [
								["mat-option"]
							],
							hostAttrs: ["role", "option", 1, "mat-mdc-option", "mdc-list-item"],
							hostVars: 11,
							hostBindings: function(x, R) {
								1 & x && l.NdJ("click", function() {
									return R._selectViaInteraction()
								})("keydown", function(Ke) {
									return R._handleKeydown(Ke)
								}), 2 & x && (l.Ikx("id", R.id), l.uIk("aria-selected", R.selected)("aria-disabled", R.disabled.toString()), l.ekj("mdc-list-item--selected", R.selected)("mat-mdc-option-multiple", R.multiple)("mat-mdc-option-active", R.active)("mdc-list-item--disabled", R.disabled))
							},
							exportAs: ["matOption"],
							features: [l.qOj],
							ngContentSelectors: ge,
							decls: 8,
							vars: 5,
							consts: [
								["class", "mat-mdc-option-pseudo-checkbox", "aria-hidden", "true", 3, "disabled", "state", 4, "ngIf"],
								[1, "mdc-list-item__primary-text"],
								["text", ""],
								["class", "mat-mdc-option-pseudo-checkbox", "state", "checked", "aria-hidden", "true", "appearance", "minimal", 3, "disabled", 4, "ngIf"],
								["class", "cdk-visually-hidden", 4, "ngIf"],
								["aria-hidden", "true", "mat-ripple", "", 1, "mat-mdc-option-ripple", "mat-mdc-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled"],
								["aria-hidden", "true", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled", "state"],
								["state", "checked", "aria-hidden", "true", "appearance", "minimal", 1, "mat-mdc-option-pseudo-checkbox", 3, "disabled"],
								[1, "cdk-visually-hidden"]
							],
							template: function(x, R) {
								1 & x && (l.F$t(Ye), l.YNc(0, ye, 1, 2, "mat-pseudo-checkbox", 0), l.Hsn(1), l.TgZ(2, "span", 1, 2), l.Hsn(4, 1), l.qZA(), l.YNc(5, xe, 1, 1, "mat-pseudo-checkbox", 3), l.YNc(6, Ne, 2, 1, "span", 4), l._UZ(7, "div", 5)), 2 & x && (l.Q6J("ngIf", R.multiple), l.xp6(5), l.Q6J("ngIf", !R.multiple && R.selected && !R.hideSingleSelectionIndicator), l.xp6(1), l.Q6J("ngIf", R.group && R.group._inert), l.xp6(1), l.Q6J("matRippleTrigger", R._getHostElement())("matRippleDisabled", R.disabled || R.disableRipple))
							},
							dependencies: [H, B.O5, He],
							styles: ['.mat-mdc-option{display:flex;position:relative;align-items:center;justify-content:flex-start;overflow:hidden;padding:0;padding-left:16px;padding-right:16px;-webkit-user-select:none;user-select:none;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);color:var(--mat-option-label-text-color);font-family:var(--mat-option-label-text-font);line-height:var(--mat-option-label-text-line-height);font-size:var(--mat-option-label-text-size);letter-spacing:var(--mat-option-label-text-tracking);font-weight:var(--mat-option-label-text-weight);min-height:48px}.mat-mdc-option:focus{outline:none}[dir=rtl] .mat-mdc-option,.mat-mdc-option[dir=rtl]{padding-left:16px;padding-right:16px}.mat-mdc-option:hover:not(.mdc-list-item--disabled){background-color:var(--mat-option-hover-state-layer-color)}.mat-mdc-option:focus.mdc-list-item,.mat-mdc-option.mat-mdc-option-active.mdc-list-item{background-color:var(--mat-option-focus-state-layer-color)}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled) .mdc-list-item__primary-text{color:var(--mat-option-selected-state-label-text-color)}.mat-mdc-option.mdc-list-item--selected:not(.mdc-list-item--disabled):not(.mat-mdc-option-multiple){background-color:var(--mat-option-selected-state-layer-color)}.mat-mdc-option.mdc-list-item{align-items:center}.mat-mdc-option.mdc-list-item--disabled{cursor:default;pointer-events:none}.mat-mdc-option.mdc-list-item--disabled .mat-mdc-option-pseudo-checkbox,.mat-mdc-option.mdc-list-item--disabled .mdc-list-item__primary-text,.mat-mdc-option.mdc-list-item--disabled>mat-icon{opacity:.38}.mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:32px}[dir=rtl] .mat-mdc-optgroup .mat-mdc-option:not(.mat-mdc-option-multiple){padding-left:16px;padding-right:32px}.mat-mdc-option .mat-icon,.mat-mdc-option .mat-pseudo-checkbox-full{margin-right:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-icon,[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-full{margin-right:0;margin-left:16px}.mat-mdc-option .mat-pseudo-checkbox-minimal{margin-left:16px;flex-shrink:0}[dir=rtl] .mat-mdc-option .mat-pseudo-checkbox-minimal{margin-right:16px;margin-left:0}.mat-mdc-option .mat-mdc-option-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-mdc-option .mdc-list-item__primary-text{white-space:normal;font-size:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;font-family:inherit;text-decoration:inherit;text-transform:inherit;margin-right:auto}[dir=rtl] .mat-mdc-option .mdc-list-item__primary-text{margin-right:0;margin-left:auto}.cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{content:"";position:absolute;top:50%;right:16px;transform:translateY(-50%);width:10px;height:0;border-bottom:solid 10px;border-radius:10px}[dir=rtl] .cdk-high-contrast-active .mat-mdc-option.mdc-list-item--selected:not(.mat-mdc-option-multiple)::after{right:auto;left:16px}.mat-mdc-option-active .mat-mdc-focus-indicator::before{content:""}'],
							encapsulation: 2,
							changeDetection: 0
						})
					}
					return Le
				})();

			function Ln(Le, L, I) {
				if (I.length) {
					let x = L.toArray(),
						R = I.toArray(),
						le = 0;
					for (let Ke = 0; Ke < Le + 1; Ke++) x[Ke].group && x[Ke].group === R[le] && le++;
					return le
				}
				return 0
			}

			function yn(Le, L, I, x) {
				return Le < I ? Le : Le + L > I + x ? Math.max(0, Le - x + L) : I
			}
			let Ui = (() => {
				class Le {
					static #e = this.\u0275fac = function(x) {
						return new(x || Le)
					};
					static #t = this.\u0275mod = l.oAB({
						type: Le
					});
					static #n = this.\u0275inj = l.cJS({
						imports: [pe, B.ez, Ie, Ue]
					})
				}
				return Le
			})();
			const pn = {
					capture: !0
				},
				xn = ["focus", "click", "mouseenter", "touchstart"],
				si = "mat-ripple-loader-uninitialized",
				Pi = "mat-ripple-loader-class-name",
				vn = "mat-ripple-loader-centered",
				In = "mat-ripple-loader-disabled";
			let zn = (() => {
				class Le {
					constructor() {
						this._document = (0, l.f3M)(B.K0, {
							optional: !0
						}), this._animationMode = (0, l.f3M)(l.QbO, {
							optional: !0
						}), this._globalRippleOptions = (0, l.f3M)(V, {
							optional: !0
						}), this._platform = (0, l.f3M)(K.t4), this._ngZone = (0, l.f3M)(l.R0b), this._hosts = new Map, this._onInteraction = I => {
							if (!(I.target instanceof HTMLElement)) return;
							const R = I.target.closest(`[${si}]`);
							R && this._createRipple(R)
						}, this._ngZone.runOutsideAngular(() => {
							for (const I of xn) this._document?.addEventListener(I, this._onInteraction, pn)
						})
					}
					ngOnDestroy() {
						const I = this._hosts.keys();
						for (const x of I) this.destroyRipple(x);
						for (const x of xn) this._document?.removeEventListener(x, this._onInteraction, pn)
					}
					configureRipple(I, x) {
						I.setAttribute(si, ""), (x.className || !I.hasAttribute(Pi)) && I.setAttribute(Pi, x.className || ""), x.centered && I.setAttribute(vn, ""), x.disabled && I.setAttribute(In, "")
					}
					getRipple(I) {
						return this._hosts.get(I) || this._createRipple(I)
					}
					setDisabled(I, x) {
						const R = this._hosts.get(I);
						R ? R.disabled = x : x ? I.setAttribute(In, "") : I.removeAttribute(In)
					}
					_createRipple(I) {
						if (!this._document) return;
						const x = this._hosts.get(I);
						if (x) return x;
						I.querySelector(".mat-ripple")?.remove();
						const R = this._document.createElement("span");
						R.classList.add("mat-ripple", I.getAttribute(Pi)), I.append(R);
						const le = new H(new l.SBq(R), this._ngZone, this._platform, this._globalRippleOptions ? this._globalRippleOptions : void 0, this._animationMode ? this._animationMode : void 0);
						return le._isInitialized = !0, le.trigger = I, le.centered = I.hasAttribute(vn), le.disabled = I.hasAttribute(In), this.attachRipple(I, le), le
					}
					attachRipple(I, x) {
						I.removeAttribute(si), this._hosts.set(I, x)
					}
					destroyRipple(I) {
						const x = this._hosts.get(I);
						x && (x.ngOnDestroy(), this._hosts.delete(I))
					}
					static #e = this.\u0275fac = function(x) {
						return new(x || Le)
					};
					static #t = this.\u0275prov = l.Yz7({
						token: Le,
						factory: Le.\u0275fac,
						providedIn: "root"
					})
				}
				return Le
			})()
		},
		6593: (Ge, re, v) => {
			v.d(re, {
				Cg: () => me,
				Dx: () => Be,
				H7: () => Ln,
				b2: () => an,
				h_: () => Nn,
				ly: () => vn,
				se: () => We
			});
			var l = v(5879),
				O = v(6814),
				F = v(9862);
			class h extends O.w_ {
				constructor() {
					super(...arguments), this.supportsDOMEvents = !0
				}
			}
			class B extends h {
				static makeCurrent() {
					(0, O.HT)(new B)
				}
				onAndCancel(I, x, R) {
					return I.addEventListener(x, R), () => {
						I.removeEventListener(x, R)
					}
				}
				dispatchEvent(I, x) {
					I.dispatchEvent(x)
				}
				remove(I) {
					I.parentNode && I.parentNode.removeChild(I)
				}
				createElement(I, x) {
					return (x = x || this.getDefaultDocument()).createElement(I)
				}
				createHtmlDocument() {
					return document.implementation.createHTMLDocument("fakeTitle")
				}
				getDefaultDocument() {
					return document
				}
				isElementNode(I) {
					return I.nodeType === Node.ELEMENT_NODE
				}
				isShadowRoot(I) {
					return I instanceof DocumentFragment
				}
				getGlobalEventTarget(I, x) {
					return "window" === x ? window : "document" === x ? I : "body" === x ? I.body : null
				}
				getBaseHref(I) {
					const x = function ne() {
						return K = K || document.querySelector("base"), K ? K.getAttribute("href") : null
					}();
					return null == x ? null : function ie(L) {
						ae = ae || document.createElement("a"), ae.setAttribute("href", L);
						const I = ae.pathname;
						return "/" === I.charAt(0) ? I : `/${I}`
					}(x)
				}
				resetBaseElement() {
					K = null
				}
				getUserAgent() {
					return window.navigator.userAgent
				}
				getCookie(I) {
					return (0, O.Mx)(document.cookie, I)
				}
			}
			let ae, K = null,
				Q = (() => {
					class L {
						build() {
							return new XMLHttpRequest
						}
						static #e = this.\u0275fac = function(R) {
							return new(R || L)
						};
						static #t = this.\u0275prov = l.Yz7({
							token: L,
							factory: L.\u0275fac
						})
					}
					return L
				})();
			const de = new l.OlP("EventManagerPlugins");
			let ye = (() => {
				class L {
					constructor(x, R) {
						this._zone = R, this._eventNameToPlugin = new Map, x.forEach(le => {
							le.manager = this
						}), this._plugins = x.slice().reverse()
					}
					addEventListener(x, R, le) {
						return this._findPluginFor(R).addEventListener(x, R, le)
					}
					getZone() {
						return this._zone
					}
					_findPluginFor(x) {
						let R = this._eventNameToPlugin.get(x);
						if (R) return R;
						if (R = this._plugins.find(Ke => Ke.supports(x)), !R) throw new l.vHH(5101, !1);
						return this._eventNameToPlugin.set(x, R), R
					}
					static #e = this.\u0275fac = function(R) {
						return new(R || L)(l.LFG(de), l.LFG(l.R0b))
					};
					static #t = this.\u0275prov = l.Yz7({
						token: L,
						factory: L.\u0275fac
					})
				}
				return L
			})();
			class xe {
				constructor(I) {
					this._doc = I
				}
			}
			const Ne = "ng-app-id";
			let Ye = (() => {
				class L {
					constructor(x, R, le, Ke = {}) {
						this.doc = x, this.appId = R, this.nonce = le, this.platformId = Ke, this.styleRef = new Map, this.hostNodes = new Set, this.styleNodesInDOM = this.collectServerRenderedStyles(), this.platformIsServer = (0, O.PM)(Ke), this.resetHostNodes()
					}
					addStyles(x) {
						for (const R of x) 1 === this.changeUsageCount(R, 1) && this.onStyleAdded(R)
					}
					removeStyles(x) {
						for (const R of x) this.changeUsageCount(R, -1) <= 0 && this.onStyleRemoved(R)
					}
					ngOnDestroy() {
						const x = this.styleNodesInDOM;
						x && (x.forEach(R => R.remove()), x.clear());
						for (const R of this.getAllStyles()) this.onStyleRemoved(R);
						this.resetHostNodes()
					}
					addHost(x) {
						this.hostNodes.add(x);
						for (const R of this.getAllStyles()) this.addStyleToHost(x, R)
					}
					removeHost(x) {
						this.hostNodes.delete(x)
					}
					getAllStyles() {
						return this.styleRef.keys()
					}
					onStyleAdded(x) {
						for (const R of this.hostNodes) this.addStyleToHost(R, x)
					}
					onStyleRemoved(x) {
						const R = this.styleRef;
						R.get(x)?.elements?.forEach(le => le.remove()), R.delete(x)
					}
					collectServerRenderedStyles() {
						const x = this.doc.head?.querySelectorAll(`style[${Ne}="${this.appId}"]`);
						if (x?.length) {
							const R = new Map;
							return x.forEach(le => {
								null != le.textContent && R.set(le.textContent, le)
							}), R
						}
						return null
					}
					changeUsageCount(x, R) {
						const le = this.styleRef;
						if (le.has(x)) {
							const Ke = le.get(x);
							return Ke.usage += R, Ke.usage
						}
						return le.set(x, {
							usage: R,
							elements: []
						}), R
					}
					getStyleElement(x, R) {
						const le = this.styleNodesInDOM,
							Ke = le?.get(R);
						if (Ke?.parentNode === x) return le.delete(R), Ke.removeAttribute(Ne), Ke;
						{
							const Ct = this.doc.createElement("style");
							return this.nonce && Ct.setAttribute("nonce", this.nonce), Ct.textContent = R, this.platformIsServer && Ct.setAttribute(Ne, this.appId), Ct
						}
					}
					addStyleToHost(x, R) {
						const le = this.getStyleElement(x, R);
						x.appendChild(le);
						const Ke = this.styleRef,
							Ct = Ke.get(R)?.elements;
						Ct ? Ct.push(le) : Ke.set(R, {
							elements: [le],
							usage: 1
						})
					}
					resetHostNodes() {
						const x = this.hostNodes;
						x.clear(), x.add(this.doc.head)
					}
					static #e = this.\u0275fac = function(R) {
						return new(R || L)(l.LFG(O.K0), l.LFG(l.AFp), l.LFG(l.Ojb, 8), l.LFG(l.Lbi))
					};
					static #t = this.\u0275prov = l.Yz7({
						token: L,
						factory: L.\u0275fac
					})
				}
				return L
			})();
			const ge = {
					svg: "http://www.w3.org/2000/svg",
					xhtml: "http://www.w3.org/1999/xhtml",
					xlink: "http://www.w3.org/1999/xlink",
					xml: "http://www.w3.org/XML/1998/namespace",
					xmlns: "http://www.w3.org/2000/xmlns/",
					math: "http://www.w3.org/1998/MathML/"
				},
				it = /%COMP%/g,
				Ie = new l.OlP("RemoveStylesOnCompDestroy", {
					providedIn: "root",
					factory: () => !1
				});

			function Ae(L, I) {
				return I.map(x => x.replace(it, L))
			}
			let We = (() => {
				class L {
					constructor(x, R, le, Ke, Ct, se, ee, k = null) {
						this.eventManager = x, this.sharedStylesHost = R, this.appId = le, this.removeStylesOnCompDestroy = Ke, this.doc = Ct, this.platformId = se, this.ngZone = ee, this.nonce = k, this.rendererByCompId = new Map, this.platformIsServer = (0, O.PM)(se), this.defaultRenderer = new rt(x, Ct, ee, this.platformIsServer)
					}
					createRenderer(x, R) {
						if (!x || !R) return this.defaultRenderer;
						this.platformIsServer && R.encapsulation === l.ifc.ShadowDom && (R = {
							...R,
							encapsulation: l.ifc.Emulated
						});
						const le = this.getOrCreateRenderer(x, R);
						return le instanceof Qt ? le.applyToHost(x) : le instanceof Un && le.applyStyles(), le
					}
					getOrCreateRenderer(x, R) {
						const le = this.rendererByCompId;
						let Ke = le.get(R.id);
						if (!Ke) {
							const Ct = this.doc,
								se = this.ngZone,
								ee = this.eventManager,
								k = this.sharedStylesHost,
								Z = this.removeStylesOnCompDestroy,
								_e = this.platformIsServer;
							switch (R.encapsulation) {
								case l.ifc.Emulated:
									Ke = new Qt(ee, k, R, this.appId, Z, Ct, se, _e);
									break;
								case l.ifc.ShadowDom:
									return new wn(ee, k, x, R, Ct, se, this.nonce, _e);
								default:
									Ke = new Un(ee, k, R, Z, Ct, se, _e)
							}
							le.set(R.id, Ke)
						}
						return Ke
					}
					ngOnDestroy() {
						this.rendererByCompId.clear()
					}
					static #e = this.\u0275fac = function(R) {
						return new(R || L)(l.LFG(ye), l.LFG(Ye), l.LFG(l.AFp), l.LFG(Ie), l.LFG(O.K0), l.LFG(l.Lbi), l.LFG(l.R0b), l.LFG(l.Ojb))
					};
					static #t = this.\u0275prov = l.Yz7({
						token: L,
						factory: L.\u0275fac
					})
				}
				return L
			})();
			class rt {
				constructor(I, x, R, le) {
					this.eventManager = I, this.doc = x, this.ngZone = R, this.platformIsServer = le, this.data = Object.create(null), this.destroyNode = null
				}
				destroy() {}
				createElement(I, x) {
					return x ? this.doc.createElementNS(ge[x] || x, I) : this.doc.createElement(I)
				}
				createComment(I) {
					return this.doc.createComment(I)
				}
				createText(I) {
					return this.doc.createTextNode(I)
				}
				appendChild(I, x) {
					(Yt(I) ? I.content : I).appendChild(x)
				}
				insertBefore(I, x, R) {
					I && (Yt(I) ? I.content : I).insertBefore(x, R)
				}
				removeChild(I, x) {
					I && I.removeChild(x)
				}
				selectRootElement(I, x) {
					let R = "string" == typeof I ? this.doc.querySelector(I) : I;
					if (!R) throw new l.vHH(-5104, !1);
					return x || (R.textContent = ""), R
				}
				parentNode(I) {
					return I.parentNode
				}
				nextSibling(I) {
					return I.nextSibling
				}
				setAttribute(I, x, R, le) {
					if (le) {
						x = le + ":" + x;
						const Ke = ge[le];
						Ke ? I.setAttributeNS(Ke, x, R) : I.setAttribute(x, R)
					} else I.setAttribute(x, R)
				}
				removeAttribute(I, x, R) {
					if (R) {
						const le = ge[R];
						le ? I.removeAttributeNS(le, x) : I.removeAttribute(`${R}:${x}`)
					} else I.removeAttribute(x)
				}
				addClass(I, x) {
					I.classList.add(x)
				}
				removeClass(I, x) {
					I.classList.remove(x)
				}
				setStyle(I, x, R, le) {
					le & (l.JOm.DashCase | l.JOm.Important) ? I.style.setProperty(x, R, le & l.JOm.Important ? "important" : "") : I.style[x] = R
				}
				removeStyle(I, x, R) {
					R & l.JOm.DashCase ? I.style.removeProperty(x) : I.style[x] = ""
				}
				setProperty(I, x, R) {
					I[x] = R
				}
				setValue(I, x) {
					I.nodeValue = x
				}
				listen(I, x, R) {
					if ("string" == typeof I && !(I = (0, O.q)().getGlobalEventTarget(this.doc, I))) throw new Error(`Unsupported event target ${I} for event ${x}`);
					return this.eventManager.addEventListener(I, x, this.decoratePreventDefault(R))
				}
				decoratePreventDefault(I) {
					return x => {
						if ("__ngUnwrap__" === x) return I;
						!1 === (this.platformIsServer ? this.ngZone.runGuarded(() => I(x)) : I(x)) && x.preventDefault()
					}
				}
			}

			function Yt(L) {
				return "TEMPLATE" === L.tagName && void 0 !== L.content
			}
			class wn extends rt {
				constructor(I, x, R, le, Ke, Ct, se, ee) {
					super(I, Ke, Ct, ee), this.sharedStylesHost = x, this.hostEl = R, this.shadowRoot = R.attachShadow({
						mode: "open"
					}), this.sharedStylesHost.addHost(this.shadowRoot);
					const k = Ae(le.id, le.styles);
					for (const Z of k) {
						const _e = document.createElement("style");
						se && _e.setAttribute("nonce", se), _e.textContent = Z, this.shadowRoot.appendChild(_e)
					}
				}
				nodeOrShadowRoot(I) {
					return I === this.hostEl ? this.shadowRoot : I
				}
				appendChild(I, x) {
					return super.appendChild(this.nodeOrShadowRoot(I), x)
				}
				insertBefore(I, x, R) {
					return super.insertBefore(this.nodeOrShadowRoot(I), x, R)
				}
				removeChild(I, x) {
					return super.removeChild(this.nodeOrShadowRoot(I), x)
				}
				parentNode(I) {
					return this.nodeOrShadowRoot(super.parentNode(this.nodeOrShadowRoot(I)))
				}
				destroy() {
					this.sharedStylesHost.removeHost(this.shadowRoot)
				}
			}
			class Un extends rt {
				constructor(I, x, R, le, Ke, Ct, se, ee) {
					super(I, Ke, Ct, se), this.sharedStylesHost = x, this.removeStylesOnCompDestroy = le, this.styles = ee ? Ae(ee, R.styles) : R.styles
				}
				applyStyles() {
					this.sharedStylesHost.addStyles(this.styles)
				}
				destroy() {
					this.removeStylesOnCompDestroy && this.sharedStylesHost.removeStyles(this.styles)
				}
			}
			class Qt extends Un {
				constructor(I, x, R, le, Ke, Ct, se, ee) {
					const k = le + "-" + R.id;
					super(I, x, R, Ke, Ct, se, ee, k), this.contentAttr = function he(L) {
						return "_ngcontent-%COMP%".replace(it, L)
					}(k), this.hostAttr = function ue(L) {
						return "_nghost-%COMP%".replace(it, L)
					}(k)
				}
				applyToHost(I) {
					this.applyStyles(), this.setAttribute(I, this.hostAttr, "")
				}
				createElement(I, x) {
					const R = super.createElement(I, x);
					return super.setAttribute(R, this.contentAttr, ""), R
				}
			}
			let Mn = (() => {
				class L extends xe {
					constructor(x) {
						super(x)
					}
					supports(x) {
						return !0
					}
					addEventListener(x, R, le) {
						return x.addEventListener(R, le, !1), () => this.removeEventListener(x, R, le)
					}
					removeEventListener(x, R, le) {
						return x.removeEventListener(R, le)
					}
					static #e = this.\u0275fac = function(R) {
						return new(R || L)(l.LFG(O.K0))
					};
					static #t = this.\u0275prov = l.Yz7({
						token: L,
						factory: L.\u0275fac
					})
				}
				return L
			})();
			const Ee = ["alt", "control", "meta", "shift"],
				we = {
					"\b": "Backspace",
					"\t": "Tab",
					"\x7f": "Delete",
					"\x1b": "Escape",
					Del: "Delete",
					Esc: "Escape",
					Left: "ArrowLeft",
					Right: "ArrowRight",
					Up: "ArrowUp",
					Down: "ArrowDown",
					Menu: "ContextMenu",
					Scroll: "ScrollLock",
					Win: "OS"
				},
				ve = {
					alt: L => L.altKey,
					control: L => L.ctrlKey,
					meta: L => L.metaKey,
					shift: L => L.shiftKey
				};
			let Te = (() => {
				class L extends xe {
					constructor(x) {
						super(x)
					}
					supports(x) {
						return null != L.parseEventName(x)
					}
					addEventListener(x, R, le) {
						const Ke = L.parseEventName(R),
							Ct = L.eventCallback(Ke.fullKey, le, this.manager.getZone());
						return this.manager.getZone().runOutsideAngular(() => (0, O.q)().onAndCancel(x, Ke.domEventName, Ct))
					}
					static parseEventName(x) {
						const R = x.toLowerCase().split("."),
							le = R.shift();
						if (0 === R.length || "keydown" !== le && "keyup" !== le) return null;
						const Ke = L._normalizeKey(R.pop());
						let Ct = "",
							se = R.indexOf("code");
						if (se > -1 && (R.splice(se, 1), Ct = "code."), Ee.forEach(k => {
								const Z = R.indexOf(k);
								Z > -1 && (R.splice(Z, 1), Ct += k + ".")
							}), Ct += Ke, 0 != R.length || 0 === Ke.length) return null;
						const ee = {};
						return ee.domEventName = le, ee.fullKey = Ct, ee
					}
					static matchEventFullKeyCode(x, R) {
						let le = we[x.key] || x.key,
							Ke = "";
						return R.indexOf("code.") > -1 && (le = x.code, Ke = "code."), !(null == le || !le) && (le = le.toLowerCase(), " " === le ? le = "space" : "." === le && (le = "dot"), Ee.forEach(Ct => {
							Ct !== le && (0, ve[Ct])(x) && (Ke += Ct + ".")
						}), Ke += le, Ke === R)
					}
					static eventCallback(x, R, le) {
						return Ke => {
							L.matchEventFullKeyCode(Ke, x) && le.runGuarded(() => R(Ke))
						}
					}
					static _normalizeKey(x) {
						return "esc" === x ? "escape" : x
					}
					static #e = this.\u0275fac = function(R) {
						return new(R || L)(l.LFG(O.K0))
					};
					static #t = this.\u0275prov = l.Yz7({
						token: L,
						factory: L.\u0275fac
					})
				}
				return L
			})();

			function me(L, I) {
				return (0, l.iPO)({
					rootComponent: L,
					...Re(I)
				})
			}

			function Re(L) {
				return {
					appProviders: [...Dt, ...L?.providers ?? []],
					platformProviders: nt
				}
			}
			const nt = [{
					provide: l.Lbi,
					useValue: O.bD
				}, {
					provide: l.g9A,
					useValue: function z() {
						B.makeCurrent()
					},
					multi: !0
				}, {
					provide: O.K0,
					useFactory: function Ze() {
						return (0, l.RDi)(document), document
					},
					deps: []
				}],
				_t = new l.OlP(""),
				gt = [{
					provide: l.rWj,
					useClass: class te {
						addToWindow(I) {
							l.dqk.getAngularTestability = (R, le = !0) => {
								const Ke = I.findTestabilityInTree(R, le);
								if (null == Ke) throw new l.vHH(5103, !1);
								return Ke
							}, l.dqk.getAllAngularTestabilities = () => I.getAllTestabilities(), l.dqk.getAllAngularRootElements = () => I.getAllRootElements(), l.dqk.frameworkStabilizers || (l.dqk.frameworkStabilizers = []), l.dqk.frameworkStabilizers.push(R => {
								const le = l.dqk.getAllAngularTestabilities();
								let Ke = le.length,
									Ct = !1;
								const se = function(ee) {
									Ct = Ct || ee, Ke--, 0 == Ke && R(Ct)
								};
								le.forEach(ee => {
									ee.whenStable(se)
								})
							})
						}
						findTestabilityInTree(I, x, R) {
							return null == x ? null : I.getTestability(x) ?? (R ? (0, O.q)().isShadowRoot(x) ? this.findTestabilityInTree(I, x.host, !0) : this.findTestabilityInTree(I, x.parentElement, !0) : null)
						}
					},
					deps: []
				}, {
					provide: l.lri,
					useClass: l.dDg,
					deps: [l.R0b, l.eoX, l.rWj]
				}, {
					provide: l.dDg,
					useClass: l.dDg,
					deps: [l.R0b, l.eoX, l.rWj]
				}],
				Dt = [{
						provide: l.zSh,
						useValue: "root"
					}, {
						provide: l.qLn,
						useFactory: function Se() {
							return new l.qLn
						},
						deps: []
					}, {
						provide: de,
						useClass: Mn,
						multi: !0,
						deps: [O.K0, l.R0b, l.Lbi]
					}, {
						provide: de,
						useClass: Te,
						multi: !0,
						deps: [O.K0]
					}, We, Ye, ye, {
						provide: l.FYo,
						useExisting: We
					}, {
						provide: O.JF,
						useClass: Q,
						deps: []
					},
					[]
				];
			let an = (() => {
					class L {
						constructor(x) {}
						static withServerTransition(x) {
							return {
								ngModule: L,
								providers: [{
									provide: l.AFp,
									useValue: x.appId
								}]
							}
						}
						static #e = this.\u0275fac = function(R) {
							return new(R || L)(l.LFG(_t, 12))
						};
						static #t = this.\u0275mod = l.oAB({
							type: L
						});
						static #n = this.\u0275inj = l.cJS({
							providers: [...Dt, ...gt],
							imports: [O.ez, l.hGG]
						})
					}
					return L
				})(),
				Nn = (() => {
					class L {
						constructor(x) {
							this._doc = x, this._dom = (0, O.q)()
						}
						addTag(x, R = !1) {
							return x ? this._getOrCreateElement(x, R) : null
						}
						addTags(x, R = !1) {
							return x ? x.reduce((le, Ke) => (Ke && le.push(this._getOrCreateElement(Ke, R)), le), []) : []
						}
						getTag(x) {
							return x && this._doc.querySelector(`meta[${x}]`) || null
						}
						getTags(x) {
							if (!x) return [];
							const R = this._doc.querySelectorAll(`meta[${x}]`);
							return R ? [].slice.call(R) : []
						}
						updateTag(x, R) {
							if (!x) return null;
							R = R || this._parseSelector(x);
							const le = this.getTag(R);
							return le ? this._setMetaElementAttributes(x, le) : this._getOrCreateElement(x, !0)
						}
						removeTag(x) {
							this.removeTagElement(this.getTag(x))
						}
						removeTagElement(x) {
							x && this._dom.remove(x)
						}
						_getOrCreateElement(x, R = !1) {
							if (!R) {
								const Ct = this._parseSelector(x),
									se = this.getTags(Ct).filter(ee => this._containsAttributes(x, ee))[0];
								if (void 0 !== se) return se
							}
							const le = this._dom.createElement("meta");
							return this._setMetaElementAttributes(x, le), this._doc.getElementsByTagName("head")[0].appendChild(le), le
						}
						_setMetaElementAttributes(x, R) {
							return Object.keys(x).forEach(le => R.setAttribute(this._getMetaKeyMap(le), x[le])), R
						}
						_parseSelector(x) {
							const R = x.name ? "name" : "property";
							return `${R}="${x[R]}"`
						}
						_containsAttributes(x, R) {
							return Object.keys(x).every(le => R.getAttribute(this._getMetaKeyMap(le)) === x[le])
						}
						_getMetaKeyMap(x) {
							return Vn[x] || x
						}
						static #e = this.\u0275fac = function(R) {
							return new(R || L)(l.LFG(O.K0))
						};
						static #t = this.\u0275prov = l.Yz7({
							token: L,
							factory: function(R) {
								let le = null;
								return le = R ? new R : function tn() {
									return new Nn((0, l.LFG)(O.K0))
								}(), le
							},
							providedIn: "root"
						})
					}
					return L
				})();
			const Vn = {
				httpEquiv: "http-equiv"
			};
			let Be = (() => {
				class L {
					constructor(x) {
						this._doc = x
					}
					getTitle() {
						return this._doc.title
					}
					setTitle(x) {
						this._doc.title = x || ""
					}
					static #e = this.\u0275fac = function(R) {
						return new(R || L)(l.LFG(O.K0))
					};
					static #t = this.\u0275prov = l.Yz7({
						token: L,
						factory: function(R) {
							let le = null;
							return le = R ? new R : function Zn() {
								return new Be((0, l.LFG)(O.K0))
							}(), le
						},
						providedIn: "root"
					})
				}
				return L
			})();
			typeof window < "u" && window;
			let Ln = (() => {
					class L {
						static #e = this.\u0275fac = function(R) {
							return new(R || L)
						};
						static #t = this.\u0275prov = l.Yz7({
							token: L,
							factory: function(R) {
								let le = null;
								return le = R ? new(R || L) : l.LFG(Ui), le
							},
							providedIn: "root"
						})
					}
					return L
				})(),
				Ui = (() => {
					class L extends Ln {
						constructor(x) {
							super(), this._doc = x
						}
						sanitize(x, R) {
							if (null == R) return null;
							switch (x) {
								case l.q3G.NONE:
									return R;
								case l.q3G.HTML:
									return (0, l.qzn)(R, "HTML") ? (0, l.z3N)(R) : (0, l.EiD)(this._doc, String(R)).toString();
								case l.q3G.STYLE:
									return (0, l.qzn)(R, "Style") ? (0, l.z3N)(R) : R;
								case l.q3G.SCRIPT:
									if ((0, l.qzn)(R, "Script")) return (0, l.z3N)(R);
									throw new l.vHH(5200, !1);
								case l.q3G.URL:
									return (0, l.qzn)(R, "URL") ? (0, l.z3N)(R) : (0, l.mCW)(String(R));
								case l.q3G.RESOURCE_URL:
									if ((0, l.qzn)(R, "ResourceURL")) return (0, l.z3N)(R);
									throw new l.vHH(5201, !1);
								default:
									throw new l.vHH(5202, !1)
							}
						}
						bypassSecurityTrustHtml(x) {
							return (0, l.JVY)(x)
						}
						bypassSecurityTrustStyle(x) {
							return (0, l.L6k)(x)
						}
						bypassSecurityTrustScript(x) {
							return (0, l.eBb)(x)
						}
						bypassSecurityTrustUrl(x) {
							return (0, l.LAX)(x)
						}
						bypassSecurityTrustResourceUrl(x) {
							return (0, l.pB0)(x)
						}
						static #e = this.\u0275fac = function(R) {
							return new(R || L)(l.LFG(O.K0))
						};
						static #t = this.\u0275prov = l.Yz7({
							token: L,
							factory: function(R) {
								let le = null;
								return le = R ? new R : function yn(L) {
									return new Ui(L.get(O.K0))
								}(l.LFG(l.zs3)), le
							},
							providedIn: "root"
						})
					}
					return L
				})();

			function vn(...L) {
				const I = [],
					x = new Set;
				for (const {
						\u0275providers: R,
						\u0275kind: le
					}
					of L) x.add(le), R.length && I.push(R);
				return (0, l.MR2)([
					[], x.has(0) ? [] : (0, l.EGt)(), x.has(1) ? [] : (0, F.dh)(), I
				])
			}
		},
		8124: (Ge, re, v) => {
			v.d(re, {
				gz: () => kn,
				OD: () => Ni,
				wN: () => Jt,
				F0: () => Gi,
				rH: () => ur,
				Od: () => Lr,
				lC: () => rn,
				bU: () => cs,
				ZU: () => $a
			});
			var l = v(5879),
				O = v(5592),
				F = v(4674),
				B = v(7715),
				K = v(2096),
				ne = v(5619),
				ae = v(6973),
				ie = v(2572),
				te = v(5211),
				Q = v(4911),
				de = v(8407),
				ye = v(8504),
				xe = v(6232),
				Ne = v(7394),
				Ye = v(9360),
				ge = v(8251);

			function it() {
				return (0, Ye.e)((p, _) => {
					let d = null;
					p._refCount++;
					const b = (0, ge.x)(_, void 0, void 0, void 0, () => {
						if (!p || p._refCount <= 0 || 0 < --p._refCount) return void(d = null);
						const w = p._connection,
							P = d;
						d = null, w && (!P || w === P) && w.unsubscribe(), _.unsubscribe()
					});
					p.subscribe(b), b.closed || (d = p.connect())
				})
			}
			class lt extends O.y {
				constructor(_, d) {
					super(), this.source = _, this.subjectFactory = d, this._subject = null, this._refCount = 0, this._connection = null, (0, Ye.A)(_) && (this.lift = _.lift)
				}
				_subscribe(_) {
					return this.getSubject().subscribe(_)
				}
				getSubject() {
					const _ = this._subject;
					return (!_ || _.isStopped) && (this._subject = this.subjectFactory()), this._subject
				}
				_teardown() {
					this._refCount = 0;
					const {
						_connection: _
					} = this;
					this._subject = this._connection = null, _?.unsubscribe()
				}
				connect() {
					let _ = this._connection;
					if (!_) {
						_ = this._connection = new Ne.w0;
						const d = this.getSubject();
						_.add(this.source.subscribe((0, ge.x)(d, void 0, () => {
							this._teardown(), d.complete()
						}, b => {
							this._teardown(), d.error(b)
						}, () => this._teardown()))), _.closed && (this._connection = null, _ = Ne.w0.EMPTY)
					}
					return _
				}
				refCount() {
					return it()(this)
				}
			}
			var qe = v(8645),
				ce = v(6814),
				$ = v(7398),
				Ie = v(4664),
				he = v(8180),
				ue = v(7921),
				Ae = v(2181),
				We = v(1631),
				rt = v(1374),
				Ot = v(6328),
				wt = v(9397),
				Yt = v(6306),
				wn = v(9732),
				Qt = v(3572);

			function Mn(p) {
				return p <= 0 ? () => xe.E : (0, Ye.e)((_, d) => {
					let b = [];
					_.subscribe((0, ge.x)(d, w => {
						b.push(w), p < b.length && b.shift()
					}, () => {
						for (const w of b) d.next(w);
						d.complete()
					}, void 0, () => {
						b = null
					}))
				})
			}
			var Ee = v(3026),
				we = v(2737),
				Te = v(975),
				me = v(4716),
				Ce = v(9773),
				Re = v(7537),
				tt = v(6593);
			const z = "primary",
				Se = Symbol("RouteTitle");
			class Ze {
				constructor(_) {
					this.params = _ || {}
				}
				has(_) {
					return Object.prototype.hasOwnProperty.call(this.params, _)
				}
				get(_) {
					if (this.has(_)) {
						const d = this.params[_];
						return Array.isArray(d) ? d[0] : d
					}
					return null
				}
				getAll(_) {
					if (this.has(_)) {
						const d = this.params[_];
						return Array.isArray(d) ? d : [d]
					}
					return []
				}
				get keys() {
					return Object.keys(this.params)
				}
			}

			function nt(p) {
				return new Ze(p)
			}

			function mt(p, _, d) {
				const b = d.path.split("/");
				if (b.length > p.length || "full" === d.pathMatch && (_.hasChildren() || b.length < p.length)) return null;
				const w = {};
				for (let P = 0; P < b.length; P++) {
					const Y = b[P],
						Pe = p[P];
					if (Y.startsWith(":")) w[Y.substring(1)] = Pe;
					else if (Y !== Pe.path) return null
				}
				return {
					consumed: p.slice(0, b.length),
					posParams: w
				}
			}

			function gt(p, _) {
				const d = p ? Object.keys(p) : void 0,
					b = _ ? Object.keys(_) : void 0;
				if (!d || !b || d.length != b.length) return !1;
				let w;
				for (let P = 0; P < d.length; P++)
					if (w = d[P], !Dt(p[w], _[w])) return !1;
				return !0
			}

			function Dt(p, _) {
				if (Array.isArray(p) && Array.isArray(_)) {
					if (p.length !== _.length) return !1;
					const d = [...p].sort(),
						b = [..._].sort();
					return d.every((w, P) => b[P] === w)
				}
				return p === _
			}

			function an(p) {
				return p.length > 0 ? p[p.length - 1] : null
			}

			function tn(p) {
				return function h(p) {
					return !!p && (p instanceof O.y || (0, F.m)(p.lift) && (0, F.m)(p.subscribe))
				}(p) ? p : (0, l.QGY)(p) ? (0, B.D)(Promise.resolve(p)) : (0, K.of)(p)
			}
			const Nn = {
					exact: function N(p, _, d) {
						if (!bt(p.segments, _.segments) || !He(p.segments, _.segments, d) || p.numberOfChildren !== _.numberOfChildren) return !1;
						for (const b in _.children)
							if (!p.children[b] || !N(p.children[b], _.children[b], d)) return !1;
						return !0
					},
					subset: H
				},
				Vn = {
					exact: function Be(p, _) {
						return gt(p, _)
					},
					subset: function V(p, _) {
						return Object.keys(_).length <= Object.keys(p).length && Object.keys(_).every(d => Dt(p[d], _[d]))
					},
					ignored: () => !0
				};

			function Zn(p, _, d) {
				return Nn[d.paths](p.root, _.root, d.matrixParams) && Vn[d.queryParams](p.queryParams, _.queryParams) && !("exact" === d.fragment && p.fragment !== _.fragment)
			}

			function H(p, _, d) {
				return pe(p, _, _.segments, d)
			}

			function pe(p, _, d, b) {
				if (p.segments.length > d.length) {
					const w = p.segments.slice(0, d.length);
					return !(!bt(w, d) || _.hasChildren() || !He(w, d, b))
				}
				if (p.segments.length === d.length) {
					if (!bt(p.segments, d) || !He(p.segments, d, b)) return !1;
					for (const w in _.children)
						if (!p.children[w] || !H(p.children[w], _.children[w], b)) return !1;
					return !0
				} {
					const w = d.slice(0, p.segments.length),
						P = d.slice(p.segments.length);
					return !!(bt(p.segments, w) && He(p.segments, w, b) && p.children[z]) && pe(p.children[z], _, P, b)
				}
			}

			function He(p, _, d) {
				return _.every((b, w) => Vn[d](p[w].parameters, b.parameters))
			}
			class Ue {
				constructor(_ = new Xe([], {}), d = {}, b = null) {
					this.root = _, this.queryParams = d, this.fragment = b
				}
				get queryParamMap() {
					return this._queryParamMap || (this._queryParamMap = nt(this.queryParams)), this._queryParamMap
				}
				toString() {
					return ln.serialize(this)
				}
			}
			class Xe {
				constructor(_, d) {
					this.segments = _, this.children = d, this.parent = null, Object.values(d).forEach(b => b.parent = this)
				}
				hasChildren() {
					return this.numberOfChildren > 0
				}
				get numberOfChildren() {
					return Object.keys(this.children).length
				}
				toString() {
					return nn(this)
				}
			}
			class Pt {
				constructor(_, d) {
					this.path = _, this.parameters = d
				}
				get parameterMap() {
					return this._parameterMap || (this._parameterMap = nt(this.parameters)), this._parameterMap
				}
				toString() {
					return Pi(this)
				}
			}

			function bt(p, _) {
				return p.length === _.length && p.every((d, b) => d.path === _[b].path)
			}
			let Mt = (() => {
				class p {
					static #e = this.\u0275fac = function(b) {
						return new(b || p)
					};
					static #t = this.\u0275prov = l.Yz7({
						token: p,
						factory: function() {
							return new Et
						},
						providedIn: "root"
					})
				}
				return p
			})();
			class Et {
				parse(_) {
					const d = new Ct(_);
					return new Ue(d.parseRootSegment(), d.parseQueryParams(), d.parseFragment())
				}
				serialize(_) {
					const d = `/${fn(_.root,!0)}`,
						b = function In(p) {
							const _ = Object.keys(p).map(d => {
								const b = p[d];
								return Array.isArray(b) ? b.map(w => `${yn(d)}=${yn(w)}`).join("&") : `${yn(d)}=${yn(b)}`
							}).filter(d => !!d);
							return _.length ? `?${_.join("&")}` : ""
						}(_.queryParams);
					return `${d}${b}${"string"==typeof _.fragment?`#${function Ui(p){return encodeURI(p)}(_.fragment)}`:""}`
				}
			}
			const ln = new Et;

			function nn(p) {
				return p.segments.map(_ => Pi(_)).join("/")
			}

			function fn(p, _) {
				if (!p.hasChildren()) return nn(p);
				if (_) {
					const d = p.children[z] ? fn(p.children[z], !1) : "",
						b = [];
					return Object.entries(p.children).forEach(([w, P]) => {
						w !== z && b.push(`${w}:${fn(P,!1)}`)
					}), b.length > 0 ? `${d}(${b.join("//")})` : d
				} {
					const d = function yt(p, _) {
						let d = [];
						return Object.entries(p.children).forEach(([b, w]) => {
							b === z && (d = d.concat(_(w, b)))
						}), Object.entries(p.children).forEach(([b, w]) => {
							b !== z && (d = d.concat(_(w, b)))
						}), d
					}(p, (b, w) => w === z ? [fn(p.children[z], !1)] : [`${w}:${fn(b,!1)}`]);
					return 1 === Object.keys(p.children).length && null != p.children[z] ? `${nn(p)}/${d[0]}` : `${nn(p)}/(${d.join("//")})`
				}
			}

			function Ln(p) {
				return encodeURIComponent(p).replace(/%40/g, "@").replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",")
			}

			function yn(p) {
				return Ln(p).replace(/%3B/gi, ";")
			}

			function pn(p) {
				return Ln(p).replace(/\(/g, "%28").replace(/\)/g, "%29").replace(/%26/gi, "&")
			}

			function xn(p) {
				return decodeURIComponent(p)
			}

			function si(p) {
				return xn(p.replace(/\+/g, "%20"))
			}

			function Pi(p) {
				return `${pn(p.path)}${function vn(p){return Object.keys(p).map(_=>`;${pn(_)}=${pn(p[_])}`).join("")}(p.parameters)}`
			}
			const zn = /^[^\/()?;#]+/;

			function Le(p) {
				const _ = p.match(zn);
				return _ ? _[0] : ""
			}
			const L = /^[^\/()?;=#]+/,
				x = /^[^=?&#]+/,
				le = /^[^&#]+/;
			class Ct {
				constructor(_) {
					this.url = _, this.remaining = _
				}
				parseRootSegment() {
					return this.consumeOptional("/"), "" === this.remaining || this.peekStartsWith("?") || this.peekStartsWith("#") ? new Xe([], {}) : new Xe([], this.parseChildren())
				}
				parseQueryParams() {
					const _ = {};
					if (this.consumeOptional("?"))
						do {
							this.parseQueryParam(_)
						} while (this.consumeOptional("&"));
					return _
				}
				parseFragment() {
					return this.consumeOptional("#") ? decodeURIComponent(this.remaining) : null
				}
				parseChildren() {
					if ("" === this.remaining) return {};
					this.consumeOptional("/");
					const _ = [];
					for (this.peekStartsWith("(") || _.push(this.parseSegment()); this.peekStartsWith("/") && !this.peekStartsWith("//") && !this.peekStartsWith("/(");) this.capture("/"), _.push(this.parseSegment());
					let d = {};
					this.peekStartsWith("/(") && (this.capture("/"), d = this.parseParens(!0));
					let b = {};
					return this.peekStartsWith("(") && (b = this.parseParens(!1)), (_.length > 0 || Object.keys(d).length > 0) && (b[z] = new Xe(_, d)), b
				}
				parseSegment() {
					const _ = Le(this.remaining);
					if ("" === _ && this.peekStartsWith(";")) throw new l.vHH(4009, !1);
					return this.capture(_), new Pt(xn(_), this.parseMatrixParams())
				}
				parseMatrixParams() {
					const _ = {};
					for (; this.consumeOptional(";");) this.parseParam(_);
					return _
				}
				parseParam(_) {
					const d = function I(p) {
						const _ = p.match(L);
						return _ ? _[0] : ""
					}(this.remaining);
					if (!d) return;
					this.capture(d);
					let b = "";
					if (this.consumeOptional("=")) {
						const w = Le(this.remaining);
						w && (b = w, this.capture(b))
					}
					_[xn(d)] = xn(b)
				}
				parseQueryParam(_) {
					const d = function R(p) {
						const _ = p.match(x);
						return _ ? _[0] : ""
					}(this.remaining);
					if (!d) return;
					this.capture(d);
					let b = "";
					if (this.consumeOptional("=")) {
						const Y = function Ke(p) {
							const _ = p.match(le);
							return _ ? _[0] : ""
						}(this.remaining);
						Y && (b = Y, this.capture(b))
					}
					const w = si(d),
						P = si(b);
					if (_.hasOwnProperty(w)) {
						let Y = _[w];
						Array.isArray(Y) || (Y = [Y], _[w] = Y), Y.push(P)
					} else _[w] = P
				}
				parseParens(_) {
					const d = {};
					for (this.capture("("); !this.consumeOptional(")") && this.remaining.length > 0;) {
						const b = Le(this.remaining),
							w = this.remaining[b.length];
						if ("/" !== w && ")" !== w && ";" !== w) throw new l.vHH(4010, !1);
						let P;
						b.indexOf(":") > -1 ? (P = b.slice(0, b.indexOf(":")), this.capture(P), this.capture(":")) : _ && (P = z);
						const Y = this.parseChildren();
						d[P] = 1 === Object.keys(Y).length ? Y[z] : new Xe([], Y), this.consumeOptional("//")
					}
					return d
				}
				peekStartsWith(_) {
					return this.remaining.startsWith(_)
				}
				consumeOptional(_) {
					return !!this.peekStartsWith(_) && (this.remaining = this.remaining.substring(_.length), !0)
				}
				capture(_) {
					if (!this.consumeOptional(_)) throw new l.vHH(4011, !1)
				}
			}

			function se(p) {
				return p.segments.length > 0 ? new Xe([], {
					[z]: p
				}) : p
			}

			function ee(p) {
				const _ = {};
				for (const b of Object.keys(p.children)) {
					const P = ee(p.children[b]);
					if (b === z && 0 === P.segments.length && P.hasChildren())
						for (const [Y, Pe] of Object.entries(P.children)) _[Y] = Pe;
					else(P.segments.length > 0 || P.hasChildren()) && (_[b] = P)
				}
				return function k(p) {
					if (1 === p.numberOfChildren && p.children[z]) {
						const _ = p.children[z];
						return new Xe(p.segments.concat(_.segments), _.children)
					}
					return p
				}(new Xe(p.segments, _))
			}

			function Z(p) {
				return p instanceof Ue
			}

			function $e(p) {
				let _;
				const w = se(function d(P) {
					const Y = {};
					for (const Me of P.children) {
						const ct = d(Me);
						Y[Me.outlet] = ct
					}
					const Pe = new Xe(P.url, Y);
					return P === p && (_ = Pe), Pe
				}(p.root));
				return _ ?? w
			}

			function X(p, _, d, b) {
				let w = p;
				for (; w.parent;) w = w.parent;
				if (0 === _.length) return Oe(w, w, w, d, b);
				const P = function et(p) {
					if ("string" == typeof p[0] && 1 === p.length && "/" === p[0]) return new ot(!0, 0, p);
					let _ = 0,
						d = !1;
					const b = p.reduce((w, P, Y) => {
						if ("object" == typeof P && null != P) {
							if (P.outlets) {
								const Pe = {};
								return Object.entries(P.outlets).forEach(([Me, ct]) => {
									Pe[Me] = "string" == typeof ct ? ct.split("/") : ct
								}), [...w, {
									outlets: Pe
								}]
							}
							if (P.segmentPath) return [...w, P.segmentPath]
						}
						return "string" != typeof P ? [...w, P] : 0 === Y ? (P.split("/").forEach((Pe, Me) => {
							0 == Me && "." === Pe || (0 == Me && "" === Pe ? d = !0 : ".." === Pe ? _++ : "" != Pe && w.push(Pe))
						}), w) : [...w, P]
					}, []);
					return new ot(d, _, b)
				}(_);
				if (P.toRoot()) return Oe(w, w, new Xe([], {}), d, b);
				const Y = function Rt(p, _, d) {
						if (p.isAbsolute) return new vt(_, !0, 0);
						if (!d) return new vt(_, !1, NaN);
						if (null === d.parent) return new vt(d, !0, 0);
						const b = G(p.commands[0]) ? 0 : 1;
						return function Tn(p, _, d) {
							let b = p,
								w = _,
								P = d;
							for (; P > w;) {
								if (P -= w, b = b.parent, !b) throw new l.vHH(4005, !1);
								w = b.segments.length
							}
							return new vt(b, !1, w - P)
						}(d, d.segments.length - 1 + b, p.numberOfDoubleDots)
					}(P, w, p),
					Pe = Y.processChildren ? on(Y.segmentGroup, Y.index, P.commands) : Bn(Y.segmentGroup, Y.index, P.commands);
				return Oe(w, Y.segmentGroup, Pe, d, b)
			}

			function G(p) {
				return "object" == typeof p && null != p && !p.outlets && !p.segmentPath
			}

			function J(p) {
				return "object" == typeof p && null != p && p.outlets
			}

			function Oe(p, _, d, b, w) {
				let Y, P = {};
				b && Object.entries(b).forEach(([Me, ct]) => {
					P[Me] = Array.isArray(ct) ? ct.map($t => `${$t}`) : `${ct}`
				}), Y = p === _ ? d : Je(p, _, d);
				const Pe = se(ee(Y));
				return new Ue(Pe, P, w)
			}

			function Je(p, _, d) {
				const b = {};
				return Object.entries(p.children).forEach(([w, P]) => {
					b[w] = P === _ ? d : Je(P, _, d)
				}), new Xe(p.segments, b)
			}
			class ot {
				constructor(_, d, b) {
					if (this.isAbsolute = _, this.numberOfDoubleDots = d, this.commands = b, _ && b.length > 0 && G(b[0])) throw new l.vHH(4003, !1);
					const w = b.find(J);
					if (w && w !== an(b)) throw new l.vHH(4004, !1)
				}
				toRoot() {
					return this.isAbsolute && 1 === this.commands.length && "/" == this.commands[0]
				}
			}
			class vt {
				constructor(_, d, b) {
					this.segmentGroup = _, this.processChildren = d, this.index = b
				}
			}

			function Bn(p, _, d) {
				if (p || (p = new Xe([], {})), 0 === p.segments.length && p.hasChildren()) return on(p, _, d);
				const b = function Ri(p, _, d) {
						let b = 0,
							w = _;
						const P = {
							match: !1,
							pathIndex: 0,
							commandIndex: 0
						};
						for (; w < p.segments.length;) {
							if (b >= d.length) return P;
							const Y = p.segments[w],
								Pe = d[b];
							if (J(Pe)) break;
							const Me = `${Pe}`,
								ct = b < d.length - 1 ? d[b + 1] : null;
							if (w > 0 && void 0 === Me) break;
							if (Me && ct && "object" == typeof ct && void 0 === ct.outlets) {
								if (!Di(Me, ct, Y)) return P;
								b += 2
							} else {
								if (!Di(Me, {}, Y)) return P;
								b++
							}
							w++
						}
						return {
							match: !0,
							pathIndex: w,
							commandIndex: b
						}
					}(p, _, d),
					w = d.slice(b.commandIndex);
				if (b.match && b.pathIndex < p.segments.length) {
					const P = new Xe(p.segments.slice(0, b.pathIndex), {});
					return P.children[z] = new Xe(p.segments.slice(b.pathIndex), p.children), on(P, 0, w)
				}
				return b.match && 0 === w.length ? new Xe(p.segments, {}) : b.match && !p.hasChildren() ? ai(p, _, d) : b.match ? on(p, 0, w) : ai(p, _, d)
			}

			function on(p, _, d) {
				if (0 === d.length) return new Xe(p.segments, {});
				{
					const b = function hi(p) {
							return J(p[0]) ? p[0].outlets : {
								[z]: p
							}
						}(d),
						w = {};
					if (Object.keys(b).some(P => P !== z) && p.children[z] && 1 === p.numberOfChildren && 0 === p.children[z].segments.length) {
						const P = on(p.children[z], _, d);
						return new Xe(p.segments, P.children)
					}
					return Object.entries(b).forEach(([P, Y]) => {
						"string" == typeof Y && (Y = [Y]), null !== Y && (w[P] = Bn(p.children[P], _, Y))
					}), Object.entries(p.children).forEach(([P, Y]) => {
						void 0 === b[P] && (w[P] = Y)
					}), new Xe(p.segments, w)
				}
			}

			function ai(p, _, d) {
				const b = p.segments.slice(0, _);
				let w = 0;
				for (; w < d.length;) {
					const P = d[w];
					if (J(P)) {
						const Me = un(P.outlets);
						return new Xe(b, Me)
					}
					if (0 === w && G(d[0])) {
						b.push(new Pt(p.segments[_].path, dn(d[0]))), w++;
						continue
					}
					const Y = J(P) ? P.outlets[z] : `${P}`,
						Pe = w < d.length - 1 ? d[w + 1] : null;
					Y && Pe && G(Pe) ? (b.push(new Pt(Y, dn(Pe))), w += 2) : (b.push(new Pt(Y, {})), w++)
				}
				return new Xe(b, {})
			}

			function un(p) {
				const _ = {};
				return Object.entries(p).forEach(([d, b]) => {
					"string" == typeof b && (b = [b]), null !== b && (_[d] = ai(new Xe([], {}), 0, b))
				}), _
			}

			function dn(p) {
				const _ = {};
				return Object.entries(p).forEach(([d, b]) => _[d] = `${b}`), _
			}

			function Di(p, _, d) {
				return p == d.path && gt(_, d.parameters)
			}
			const pi = "imperative";
			class Xt {
				constructor(_, d) {
					this.id = _, this.url = d
				}
			}
			class Ni extends Xt {
				constructor(_, d, b = "imperative", w = null) {
					super(_, d), this.type = 0, this.navigationTrigger = b, this.restoredState = w
				}
				toString() {
					return `NavigationStart(id: ${this.id}, url: '${this.url}')`
				}
			}
			class ci extends Xt {
				constructor(_, d, b) {
					super(_, d), this.urlAfterRedirects = b, this.type = 1
				}
				toString() {
					return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`
				}
			}
			class $n extends Xt {
				constructor(_, d, b, w) {
					super(_, d), this.reason = b, this.code = w, this.type = 2
				}
				toString() {
					return `NavigationCancel(id: ${this.id}, url: '${this.url}')`
				}
			}
			class Gn extends Xt {
				constructor(_, d, b, w) {
					super(_, d), this.reason = b, this.code = w, this.type = 16
				}
			}
			class Ei extends Xt {
				constructor(_, d, b, w) {
					super(_, d), this.error = b, this.target = w, this.type = 3
				}
				toString() {
					return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`
				}
			}
			class Vi extends Xt {
				constructor(_, d, b, w) {
					super(_, d), this.urlAfterRedirects = b, this.state = w, this.type = 4
				}
				toString() {
					return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
				}
			}
			class Ci extends Xt {
				constructor(_, d, b, w) {
					super(_, d), this.urlAfterRedirects = b, this.state = w, this.type = 7
				}
				toString() {
					return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
				}
			}
			class Kr extends Xt {
				constructor(_, d, b, w, P) {
					super(_, d), this.urlAfterRedirects = b, this.state = w, this.shouldActivate = P, this.type = 8
				}
				toString() {
					return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`
				}
			}
			class hs extends Xt {
				constructor(_, d, b, w) {
					super(_, d), this.urlAfterRedirects = b, this.state = w, this.type = 5
				}
				toString() {
					return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
				}
			}
			class Zr extends Xt {
				constructor(_, d, b, w) {
					super(_, d), this.urlAfterRedirects = b, this.state = w, this.type = 6
				}
				toString() {
					return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`
				}
			}
			class ps {
				constructor(_) {
					this.route = _, this.type = 9
				}
				toString() {
					return `RouteConfigLoadStart(path: ${this.route.path})`
				}
			}
			class Ko {
				constructor(_) {
					this.route = _, this.type = 10
				}
				toString() {
					return `RouteConfigLoadEnd(path: ${this.route.path})`
				}
			}
			class Qr {
				constructor(_) {
					this.snapshot = _, this.type = 11
				}
				toString() {
					return `ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
				}
			}
			class Zo {
				constructor(_) {
					this.snapshot = _, this.type = 12
				}
				toString() {
					return `ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
				}
			}
			class mi {
				constructor(_) {
					this.snapshot = _, this.type = 13
				}
				toString() {
					return `ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
				}
			}
			class Qo {
				constructor(_) {
					this.snapshot = _, this.type = 14
				}
				toString() {
					return `ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||""}')`
				}
			}
			class Xr {
				constructor(_, d, b) {
					this.routerEvent = _, this.position = d, this.anchor = b, this.type = 15
				}
				toString() {
					return `Scroll(anchor: '${this.anchor}', position: '${this.position?`${this.position[0]}, ${this.position[1]}`:null}')`
				}
			}
			class No {}
			class Cr {
				constructor(_) {
					this.url = _
				}
			}
			class wr {
				constructor() {
					this.outlet = null, this.route = null, this.injector = null, this.children = new Eo, this.attachRef = null
				}
			}
			let Eo = (() => {
				class p {
					constructor() {
						this.contexts = new Map
					}
					onChildOutletCreated(d, b) {
						const w = this.getOrCreateContext(d);
						w.outlet = b, this.contexts.set(d, w)
					}
					onChildOutletDestroyed(d) {
						const b = this.getContext(d);
						b && (b.outlet = null, b.attachRef = null)
					}
					onOutletDeactivated() {
						const d = this.contexts;
						return this.contexts = new Map, d
					}
					onOutletReAttached(d) {
						this.contexts = d
					}
					getOrCreateContext(d) {
						let b = this.getContext(d);
						return b || (b = new wr, this.contexts.set(d, b)), b
					}
					getContext(d) {
						return this.contexts.get(d) || null
					}
					static #e = this.\u0275fac = function(b) {
						return new(b || p)
					};
					static #t = this.\u0275prov = l.Yz7({
						token: p,
						factory: p.\u0275fac,
						providedIn: "root"
					})
				}
				return p
			})();
			class Jr {
				constructor(_) {
					this._root = _
				}
				get root() {
					return this._root.value
				}
				parent(_) {
					const d = this.pathFromRoot(_);
					return d.length > 1 ? d[d.length - 2] : null
				}
				children(_) {
					const d = Xo(_, this._root);
					return d ? d.children.map(b => b.value) : []
				}
				firstChild(_) {
					const d = Xo(_, this._root);
					return d && d.children.length > 0 ? d.children[0].value : null
				}
				siblings(_) {
					const d = ko(_, this._root);
					return d.length < 2 ? [] : d[d.length - 2].children.map(w => w.value).filter(w => w !== _)
				}
				pathFromRoot(_) {
					return ko(_, this._root).map(d => d.value)
				}
			}

			function Xo(p, _) {
				if (p === _.value) return _;
				for (const d of _.children) {
					const b = Xo(p, d);
					if (b) return b
				}
				return null
			}

			function ko(p, _) {
				if (p === _.value) return [_];
				for (const d of _.children) {
					const b = ko(p, d);
					if (b.length) return b.unshift(_), b
				}
				return []
			}
			class wi {
				constructor(_, d) {
					this.value = _, this.children = d
				}
				toString() {
					return `TreeNode(${this.value})`
				}
			}

			function Ht(p) {
				const _ = {};
				return p && p.children.forEach(d => _[d.value.outlet] = d), _
			}
			class jn extends Jr {
				constructor(_, d) {
					super(_), this.snapshot = d, xr(this, _)
				}
				toString() {
					return this.snapshot.toString()
				}
			}

			function Qn(p, _) {
				const d = function Co(p, _) {
						const Y = new no([], {}, {}, "", {}, z, _, null, {});
						return new Jo("", new wi(Y, []))
					}(0, _),
					b = new ne.X([new Pt("", {})]),
					w = new ne.X({}),
					P = new ne.X({}),
					Y = new ne.X({}),
					Pe = new ne.X(""),
					Me = new kn(b, w, Y, Pe, P, z, _, d.root);
				return Me.snapshot = d.root, new jn(new wi(Me, []), d)
			}
			class kn {
				constructor(_, d, b, w, P, Y, Pe, Me) {
					this.urlSubject = _, this.paramsSubject = d, this.queryParamsSubject = b, this.fragmentSubject = w, this.dataSubject = P, this.outlet = Y, this.component = Pe, this._futureSnapshot = Me, this.title = this.dataSubject?.pipe((0, $.U)(ct => ct[Se])) ?? (0, K.of)(void 0), this.url = _, this.params = d, this.queryParams = b, this.fragment = w, this.data = P
				}
				get routeConfig() {
					return this._futureSnapshot.routeConfig
				}
				get root() {
					return this._routerState.root
				}
				get parent() {
					return this._routerState.parent(this)
				}
				get firstChild() {
					return this._routerState.firstChild(this)
				}
				get children() {
					return this._routerState.children(this)
				}
				get pathFromRoot() {
					return this._routerState.pathFromRoot(this)
				}
				get paramMap() {
					return this._paramMap || (this._paramMap = this.params.pipe((0, $.U)(_ => nt(_)))), this._paramMap
				}
				get queryParamMap() {
					return this._queryParamMap || (this._queryParamMap = this.queryParams.pipe((0, $.U)(_ => nt(_)))), this._queryParamMap
				}
				toString() {
					return this.snapshot ? this.snapshot.toString() : `Future(${this._futureSnapshot})`
				}
			}

			function Mr(p, _ = "emptyOnly") {
				const d = p.pathFromRoot;
				let b = 0;
				if ("always" !== _)
					for (b = d.length - 1; b >= 1;) {
						const w = d[b],
							P = d[b - 1];
						if (w.routeConfig && "" === w.routeConfig.path) b--;
						else {
							if (P.component) break;
							b--
						}
					}
				return function qr(p) {
					return p.reduce((_, d) => ({
						params: {
							..._.params,
							...d.params
						},
						data: {
							..._.data,
							...d.data
						},
						resolve: {
							...d.data,
							..._.resolve,
							...d.routeConfig?.data,
							...d._resolvedData
						}
					}), {
						params: {},
						data: {},
						resolve: {}
					})
				}(d.slice(b))
			}
			class no {
				get title() {
					return this.data?.[Se]
				}
				constructor(_, d, b, w, P, Y, Pe, Me, ct) {
					this.url = _, this.params = d, this.queryParams = b, this.fragment = w, this.data = P, this.outlet = Y, this.component = Pe, this.routeConfig = Me, this._resolve = ct
				}
				get root() {
					return this._routerState.root
				}
				get parent() {
					return this._routerState.parent(this)
				}
				get firstChild() {
					return this._routerState.firstChild(this)
				}
				get children() {
					return this._routerState.children(this)
				}
				get pathFromRoot() {
					return this._routerState.pathFromRoot(this)
				}
				get paramMap() {
					return this._paramMap || (this._paramMap = nt(this.params)), this._paramMap
				}
				get queryParamMap() {
					return this._queryParamMap || (this._queryParamMap = nt(this.queryParams)), this._queryParamMap
				}
				toString() {
					return `Route(url:'${this.url.map(b=>b.toString()).join("/")}', path:'${this.routeConfig?this.routeConfig.path:""}')`
				}
			}
			class Jo extends Jr {
				constructor(_, d) {
					super(d), this.url = _, xr(this, d)
				}
				toString() {
					return Dn(this._root)
				}
			}

			function xr(p, _) {
				_.value._routerState = p, _.children.forEach(d => xr(p, d))
			}

			function Dn(p) {
				const _ = p.children.length > 0 ? ` { ${p.children.map(Dn).join(", ")} } ` : "";
				return `${p.value}${_}`
			}

			function at(p) {
				if (p.snapshot) {
					const _ = p.snapshot,
						d = p._futureSnapshot;
					p.snapshot = d, gt(_.queryParams, d.queryParams) || p.queryParamsSubject.next(d.queryParams), _.fragment !== d.fragment && p.fragmentSubject.next(d.fragment), gt(_.params, d.params) || p.paramsSubject.next(d.params),
						function _t(p, _) {
							if (p.length !== _.length) return !1;
							for (let d = 0; d < p.length; ++d)
								if (!gt(p[d], _[d])) return !1;
							return !0
						}(_.url, d.url) || p.urlSubject.next(d.url), gt(_.data, d.data) || p.dataSubject.next(d.data)
				} else p.snapshot = p._futureSnapshot, p.dataSubject.next(p._futureSnapshot.data)
			}

			function Nt(p, _) {
				const d = gt(p.params, _.params) && function ht(p, _) {
					return bt(p, _) && p.every((d, b) => gt(d.parameters, _[b].parameters))
				}(p.url, _.url);
				return d && !(!p.parent != !_.parent) && (!p.parent || Nt(p.parent, _.parent))
			}
			let rn = (() => {
				class p {
					constructor() {
						this.activated = null, this._activatedRoute = null, this.name = z, this.activateEvents = new l.vpe, this.deactivateEvents = new l.vpe, this.attachEvents = new l.vpe, this.detachEvents = new l.vpe, this.parentContexts = (0, l.f3M)(Eo), this.location = (0, l.f3M)(l.s_b), this.changeDetector = (0, l.f3M)(l.sBO), this.environmentInjector = (0, l.f3M)(l.lqb), this.inputBinder = (0, l.f3M)(fo, {
							optional: !0
						}), this.supportsBindingToComponentInputs = !0
					}
					get activatedComponentRef() {
						return this.activated
					}
					ngOnChanges(d) {
						if (d.name) {
							const {
								firstChange: b,
								previousValue: w
							} = d.name;
							if (b) return;
							this.isTrackedInParentContexts(w) && (this.deactivate(), this.parentContexts.onChildOutletDestroyed(w)), this.initializeOutletWithName()
						}
					}
					ngOnDestroy() {
						this.isTrackedInParentContexts(this.name) && this.parentContexts.onChildOutletDestroyed(this.name), this.inputBinder?.unsubscribeFromRouteData(this)
					}
					isTrackedInParentContexts(d) {
						return this.parentContexts.getContext(d)?.outlet === this
					}
					ngOnInit() {
						this.initializeOutletWithName()
					}
					initializeOutletWithName() {
						if (this.parentContexts.onChildOutletCreated(this.name, this), this.activated) return;
						const d = this.parentContexts.getContext(this.name);
						d?.route && (d.attachRef ? this.attach(d.attachRef, d.route) : this.activateWith(d.route, d.injector))
					}
					get isActivated() {
						return !!this.activated
					}
					get component() {
						if (!this.activated) throw new l.vHH(4012, !1);
						return this.activated.instance
					}
					get activatedRoute() {
						if (!this.activated) throw new l.vHH(4012, !1);
						return this._activatedRoute
					}
					get activatedRouteData() {
						return this._activatedRoute ? this._activatedRoute.snapshot.data : {}
					}
					detach() {
						if (!this.activated) throw new l.vHH(4012, !1);
						this.location.detach();
						const d = this.activated;
						return this.activated = null, this._activatedRoute = null, this.detachEvents.emit(d.instance), d
					}
					attach(d, b) {
						this.activated = d, this._activatedRoute = b, this.location.insert(d.hostView), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.attachEvents.emit(d.instance)
					}
					deactivate() {
						if (this.activated) {
							const d = this.component;
							this.activated.destroy(), this.activated = null, this._activatedRoute = null, this.deactivateEvents.emit(d)
						}
					}
					activateWith(d, b) {
						if (this.isActivated) throw new l.vHH(4013, !1);
						this._activatedRoute = d;
						const w = this.location,
							Y = d.snapshot.component,
							Pe = this.parentContexts.getOrCreateContext(this.name).children,
							Me = new Mi(d, Pe, w.injector);
						this.activated = w.createComponent(Y, {
							index: w.length,
							injector: Me,
							environmentInjector: b ?? this.environmentInjector
						}), this.changeDetector.markForCheck(), this.inputBinder?.bindActivatedRouteToOutletComponent(this), this.activateEvents.emit(this.activated.instance)
					}
					static #e = this.\u0275fac = function(b) {
						return new(b || p)
					};
					static #t = this.\u0275dir = l.lG2({
						type: p,
						selectors: [
							["router-outlet"]
						],
						inputs: {
							name: "name"
						},
						outputs: {
							activateEvents: "activate",
							deactivateEvents: "deactivate",
							attachEvents: "attach",
							detachEvents: "detach"
						},
						exportAs: ["outlet"],
						standalone: !0,
						features: [l.TTD]
					})
				}
				return p
			})();
			class Mi {
				constructor(_, d, b) {
					this.route = _, this.childContexts = d, this.parent = b
				}
				get(_, d) {
					return _ === kn ? this.route : _ === Eo ? this.childContexts : this.parent.get(_, d)
				}
			}
			const fo = new l.OlP("");

			function mn(p, _, d) {
				if (d && p.shouldReuseRoute(_.value, d.value.snapshot)) {
					const b = d.value;
					b._futureSnapshot = _.value;
					const w = function io(p, _, d) {
						return _.children.map(b => {
							for (const w of d.children)
								if (p.shouldReuseRoute(b.value, w.value.snapshot)) return mn(p, b, w);
							return mn(p, b)
						})
					}(p, _, d);
					return new wi(b, w)
				} {
					if (p.shouldAttach(_.value)) {
						const P = p.retrieve(_.value);
						if (null !== P) {
							const Y = P.route;
							return Y.value._futureSnapshot = _.value, Y.children = _.children.map(Pe => mn(p, Pe)), Y
						}
					}
					const b = function Xn(p) {
							return new kn(new ne.X(p.url), new ne.X(p.params), new ne.X(p.queryParams), new ne.X(p.fragment), new ne.X(p.data), p.outlet, p.component, p)
						}(_.value),
						w = _.children.map(P => mn(p, P));
					return new wi(b, w)
				}
			}
			const It = "ngNavigationCancelingError";

			function ki(p, _) {
				const {
					redirectTo: d,
					navigationBehaviorOptions: b
				} = Z(_) ? {
					redirectTo: _,
					navigationBehaviorOptions: void 0
				} : _, w = qo(!1, 0, _);
				return w.url = d, w.navigationBehaviorOptions = b, w
			}

			function qo(p, _, d) {
				const b = new Error("NavigationCancelingError: " + (p || ""));
				return b[It] = !0, b.cancellationCode = _, d && (b.url = d), b
			}

			function An(p) {
				return p && p[It]
			}
			let oo = (() => {
				class p {
					static #e = this.\u0275fac = function(b) {
						return new(b || p)
					};
					static #t = this.\u0275cmp = l.Xpm({
						type: p,
						selectors: [
							["ng-component"]
						],
						standalone: !0,
						features: [l.jDz],
						decls: 1,
						vars: 0,
						template: function(b, w) {
							1 & b && l._UZ(0, "router-outlet")
						},
						dependencies: [rn],
						encapsulation: 2
					})
				}
				return p
			})();

			function es(p) {
				const _ = p.children && p.children.map(es),
					d = _ ? {
						...p,
						children: _
					} : {
						...p
					};
				return !d.component && !d.loadComponent && (_ || d.loadChildren) && d.outlet && d.outlet !== z && (d.component = oo), d
			}

			function Yn(p) {
				return p.outlet || z
			}

			function _i(p) {
				if (!p) return null;
				if (p.routeConfig?._injector) return p.routeConfig._injector;
				for (let _ = p.parent; _; _ = _.parent) {
					const d = _.routeConfig;
					if (d?._loadedInjector) return d._loadedInjector;
					if (d?._injector) return d._injector
				}
				return null
			}
			class nr {
				constructor(_, d, b, w, P) {
					this.routeReuseStrategy = _, this.futureState = d, this.currState = b, this.forwardEvent = w, this.inputBindingEnabled = P
				}
				activate(_) {
					const d = this.futureState._root,
						b = this.currState ? this.currState._root : null;
					this.deactivateChildRoutes(d, b, _), at(this.futureState.root), this.activateChildRoutes(d, b, _)
				}
				deactivateChildRoutes(_, d, b) {
					const w = Ht(d);
					_.children.forEach(P => {
						const Y = P.value.outlet;
						this.deactivateRoutes(P, w[Y], b), delete w[Y]
					}), Object.values(w).forEach(P => {
						this.deactivateRouteAndItsChildren(P, b)
					})
				}
				deactivateRoutes(_, d, b) {
					const w = _.value,
						P = d ? d.value : null;
					if (w === P)
						if (w.component) {
							const Y = b.getContext(w.outlet);
							Y && this.deactivateChildRoutes(_, d, Y.children)
						} else this.deactivateChildRoutes(_, d, b);
					else P && this.deactivateRouteAndItsChildren(d, b)
				}
				deactivateRouteAndItsChildren(_, d) {
					_.value.component && this.routeReuseStrategy.shouldDetach(_.value.snapshot) ? this.detachAndStoreRouteSubtree(_, d) : this.deactivateRouteAndOutlet(_, d)
				}
				detachAndStoreRouteSubtree(_, d) {
					const b = d.getContext(_.value.outlet),
						w = b && _.value.component ? b.children : d,
						P = Ht(_);
					for (const Y of Object.keys(P)) this.deactivateRouteAndItsChildren(P[Y], w);
					if (b && b.outlet) {
						const Y = b.outlet.detach(),
							Pe = b.children.onOutletDeactivated();
						this.routeReuseStrategy.store(_.value.snapshot, {
							componentRef: Y,
							route: _,
							contexts: Pe
						})
					}
				}
				deactivateRouteAndOutlet(_, d) {
					const b = d.getContext(_.value.outlet),
						w = b && _.value.component ? b.children : d,
						P = Ht(_);
					for (const Y of Object.keys(P)) this.deactivateRouteAndItsChildren(P[Y], w);
					b && (b.outlet && (b.outlet.deactivate(), b.children.onOutletDeactivated()), b.attachRef = null, b.route = null)
				}
				activateChildRoutes(_, d, b) {
					const w = Ht(d);
					_.children.forEach(P => {
						this.activateRoutes(P, w[P.value.outlet], b), this.forwardEvent(new Qo(P.value.snapshot))
					}), _.children.length && this.forwardEvent(new Zo(_.value.snapshot))
				}
				activateRoutes(_, d, b) {
					const w = _.value,
						P = d ? d.value : null;
					if (at(w), w === P)
						if (w.component) {
							const Y = b.getOrCreateContext(w.outlet);
							this.activateChildRoutes(_, d, Y.children)
						} else this.activateChildRoutes(_, d, b);
					else if (w.component) {
						const Y = b.getOrCreateContext(w.outlet);
						if (this.routeReuseStrategy.shouldAttach(w.snapshot)) {
							const Pe = this.routeReuseStrategy.retrieve(w.snapshot);
							this.routeReuseStrategy.store(w.snapshot, null), Y.children.onOutletReAttached(Pe.contexts), Y.attachRef = Pe.componentRef, Y.route = Pe.route.value, Y.outlet && Y.outlet.attach(Pe.componentRef, Pe.route.value), at(Pe.route.value), this.activateChildRoutes(_, null, Y.children)
						} else {
							const Pe = _i(w.snapshot);
							Y.attachRef = null, Y.route = w, Y.injector = Pe, Y.outlet && Y.outlet.activateWith(w, Y.injector), this.activateChildRoutes(_, null, Y.children)
						}
					} else this.activateChildRoutes(_, null, b)
				}
			}
			class Kn {
				constructor(_) {
					this.path = _, this.route = this.path[this.path.length - 1]
				}
			}
			class Lo {
				constructor(_, d) {
					this.component = _, this.route = d
				}
			}

			function li(p, _, d) {
				const b = p._root;
				return gn(b, _ ? _._root : null, d, [b.value])
			}

			function po(p, _) {
				const d = Symbol(),
					b = _.get(p, d);
				return b === d ? "function" != typeof p || (0, l.Z0I)(p) ? _.get(p) : p : b
			}

			function gn(p, _, d, b, w = {
				canDeactivateChecks: [],
				canActivateChecks: []
			}) {
				const P = Ht(_);
				return p.children.forEach(Y => {
					(function ir(p, _, d, b, w = {
						canDeactivateChecks: [],
						canActivateChecks: []
					}) {
						const P = p.value,
							Y = _ ? _.value : null,
							Pe = d ? d.getContext(p.value.outlet) : null;
						if (Y && P.routeConfig === Y.routeConfig) {
							const Me = function Fi(p, _, d) {
								if ("function" == typeof d) return d(p, _);
								switch (d) {
									case "pathParamsChange":
										return !bt(p.url, _.url);
									case "pathParamsOrQueryParamsChange":
										return !bt(p.url, _.url) || !gt(p.queryParams, _.queryParams);
									case "always":
										return !0;
									case "paramsOrQueryParamsChange":
										return !Nt(p, _) || !gt(p.queryParams, _.queryParams);
									default:
										return !Nt(p, _)
								}
							}(Y, P, P.routeConfig.runGuardsAndResolvers);
							Me ? w.canActivateChecks.push(new Kn(b)) : (P.data = Y.data, P._resolvedData = Y._resolvedData), gn(p, _, P.component ? Pe ? Pe.children : null : d, b, w), Me && Pe && Pe.outlet && Pe.outlet.isActivated && w.canDeactivateChecks.push(new Lo(Pe.outlet.component, Y))
						} else Y && mo(_, Pe, w), w.canActivateChecks.push(new Kn(b)), gn(p, null, P.component ? Pe ? Pe.children : null : d, b, w)
					})(Y, P[Y.value.outlet], d, b.concat([Y.value]), w), delete P[Y.value.outlet]
				}), Object.entries(P).forEach(([Y, Pe]) => mo(Pe, d.getContext(Y), w)), w
			}

			function mo(p, _, d) {
				const b = Ht(p),
					w = p.value;
				Object.entries(b).forEach(([P, Y]) => {
					mo(Y, w.component ? _ ? _.children.getContext(P) : null : _, d)
				}), d.canDeactivateChecks.push(new Lo(w.component && _ && _.outlet && _.outlet.isActivated ? _.outlet.component : null, w))
			}

			function Bo(p) {
				return "function" == typeof p
			}

			function Us(p) {
				return p instanceof ae.K || "EmptyError" === p?.name
			}
			const Sr = Symbol("INITIAL_VALUE");

			function Io() {
				return (0, Ie.w)(p => (0, ie.a)(p.map(_ => _.pipe((0, he.q)(1), (0, ue.O)(Sr)))).pipe((0, $.U)(_ => {
					for (const d of _)
						if (!0 !== d) {
							if (d === Sr) return Sr;
							if (!1 === d || d instanceof Ue) return d
						} return !0
				}), (0, Ae.h)(_ => _ !== Sr), (0, he.q)(1)))
			}

			function is(p) {
				return (0, de.z)((0, wt.b)(_ => {
					if (Z(_)) throw ki(0, _)
				}), (0, $.U)(_ => !0 === _))
			}
			class hn {
				constructor(_) {
					this.segmentGroup = _ || null
				}
			}
			class Es {
				constructor(_) {
					this.urlTree = _
				}
			}

			function jo(p) {
				return (0, ye._)(new hn(p))
			}

			function Fn(p) {
				return (0, ye._)(new Es(p))
			}
			class Ar {
				constructor(_, d) {
					this.urlSerializer = _, this.urlTree = d
				}
				noMatchError(_) {
					return new l.vHH(4002, !1)
				}
				lineralizeSegments(_, d) {
					let b = [],
						w = d.root;
					for (;;) {
						if (b = b.concat(w.segments), 0 === w.numberOfChildren) return (0, K.of)(b);
						if (w.numberOfChildren > 1 || !w.children[z]) return (0, ye._)(new l.vHH(4e3, !1));
						w = w.children[z]
					}
				}
				applyRedirectCommands(_, d, b) {
					return this.applyRedirectCreateUrlTree(d, this.urlSerializer.parse(d), _, b)
				}
				applyRedirectCreateUrlTree(_, d, b, w) {
					const P = this.createSegmentGroup(_, d.root, b, w);
					return new Ue(P, this.createQueryParams(d.queryParams, this.urlTree.queryParams), d.fragment)
				}
				createQueryParams(_, d) {
					const b = {};
					return Object.entries(_).forEach(([w, P]) => {
						if ("string" == typeof P && P.startsWith(":")) {
							const Pe = P.substring(1);
							b[w] = d[Pe]
						} else b[w] = P
					}), b
				}
				createSegmentGroup(_, d, b, w) {
					const P = this.createSegments(_, d.segments, b, w);
					let Y = {};
					return Object.entries(d.children).forEach(([Pe, Me]) => {
						Y[Pe] = this.createSegmentGroup(_, Me, b, w)
					}), new Xe(P, Y)
				}
				createSegments(_, d, b, w) {
					return d.map(P => P.path.startsWith(":") ? this.findPosParam(_, P, w) : this.findOrReturn(P, b))
				}
				findPosParam(_, d, b) {
					const w = b[d.path.substring(1)];
					if (!w) throw new l.vHH(4001, !1);
					return w
				}
				findOrReturn(_, d) {
					let b = 0;
					for (const w of d) {
						if (w.path === _.path) return d.splice(b), w;
						b++
					}
					return _
				}
			}
			const rr = {
				matched: !1,
				consumedSegments: [],
				remainingSegments: [],
				parameters: {},
				positionalParamSegments: {}
			};

			function sr(p, _, d, b, w) {
				const P = ar(p, _, d);
				return P.matched ? (b = function wo(p, _) {
					return p.providers && !p._injector && (p._injector = (0, l.MMx)(p.providers, _, `Route: ${p.path}`)), p._injector ?? _
				}(_, b), function Wt(p, _, d, b) {
					const w = _.canMatch;
					if (!w || 0 === w.length) return (0, K.of)(!0);
					const P = w.map(Y => {
						const Pe = po(Y, p);
						return tn(function La(p) {
							return p && Bo(p.canMatch)
						}(Pe) ? Pe.canMatch(_, d) : p.runInContext(() => Pe(_, d)))
					});
					return (0, K.of)(P).pipe(Io(), is())
				}(b, _, d).pipe((0, $.U)(Y => !0 === Y ? P : {
					...rr
				}))) : (0, K.of)(P)
			}

			function ar(p, _, d) {
				if ("" === _.path) return "full" === _.pathMatch && (p.hasChildren() || d.length > 0) ? {
					...rr
				} : {
					matched: !0,
					consumedSegments: [],
					remainingSegments: d,
					parameters: {},
					positionalParamSegments: {}
				};
				const w = (_.matcher || mt)(d, p, _);
				if (!w) return {
					...rr
				};
				const P = {};
				Object.entries(w.posParams ?? {}).forEach(([Pe, Me]) => {
					P[Pe] = Me.path
				});
				const Y = w.consumed.length > 0 ? {
					...P,
					...w.consumed[w.consumed.length - 1].parameters
				} : P;
				return {
					matched: !0,
					consumedSegments: w.consumed,
					remainingSegments: d.slice(w.consumed.length),
					parameters: Y,
					positionalParamSegments: w.posParams ?? {}
				}
			}

			function Or(p, _, d, b) {
				return d.length > 0 && function Rr(p, _, d) {
					return d.some(b => To(p, _, b) && Yn(b) !== z)
				}(p, d, b) ? {
					segmentGroup: new Xe(_, os(b, new Xe(d, p.children))),
					slicedSegments: []
				} : 0 === d.length && function rs(p, _, d) {
					return d.some(b => To(p, _, b))
				}(p, d, b) ? {
					segmentGroup: new Xe(p.segments, Pr(p, 0, d, b, p.children)),
					slicedSegments: d
				} : {
					segmentGroup: new Xe(p.segments, p.children),
					slicedSegments: d
				}
			}

			function Pr(p, _, d, b, w) {
				const P = {};
				for (const Y of b)
					if (To(p, d, Y) && !w[Yn(Y)]) {
						const Pe = new Xe([], {});
						P[Yn(Y)] = Pe
					} return {
					...w,
					...P
				}
			}

			function os(p, _) {
				const d = {};
				d[z] = _;
				for (const b of p)
					if ("" === b.path && Yn(b) !== z) {
						const w = new Xe([], {});
						d[Yn(b)] = w
					} return d
			}

			function To(p, _, d) {
				return (!(p.hasChildren() || _.length > 0) || "full" !== d.pathMatch) && "" === d.path
			}
			class Uo {
				constructor(_, d, b, w, P, Y, Pe) {
					this.injector = _, this.configLoader = d, this.rootComponentType = b, this.config = w, this.urlTree = P, this.paramsInheritanceStrategy = Y, this.urlSerializer = Pe, this.allowRedirects = !0, this.applyRedirects = new Ar(this.urlSerializer, this.urlTree)
				}
				noMatchError(_) {
					return new l.vHH(4002, !1)
				}
				recognize() {
					const _ = Or(this.urlTree.root, [], [], this.config).segmentGroup;
					return this.processSegmentGroup(this.injector, this.config, _, z).pipe((0, Yt.K)(d => {
						if (d instanceof Es) return this.allowRedirects = !1, this.urlTree = d.urlTree, this.match(d.urlTree);
						throw d instanceof hn ? this.noMatchError(d) : d
					}), (0, $.U)(d => {
						const b = new no([], Object.freeze({}), Object.freeze({
								...this.urlTree.queryParams
							}), this.urlTree.fragment, {}, z, this.rootComponentType, null, {}),
							w = new wi(b, d),
							P = new Jo("", w),
							Y = function _e(p, _, d = null, b = null) {
								return X($e(p), _, d, b)
							}(b, [], this.urlTree.queryParams, this.urlTree.fragment);
						return Y.queryParams = this.urlTree.queryParams, P.url = this.urlSerializer.serialize(Y), this.inheritParamsAndData(P._root), {
							state: P,
							tree: Y
						}
					}))
				}
				match(_) {
					return this.processSegmentGroup(this.injector, this.config, _.root, z).pipe((0, Yt.K)(b => {
						throw b instanceof hn ? this.noMatchError(b) : b
					}))
				}
				inheritParamsAndData(_) {
					const d = _.value,
						b = Mr(d, this.paramsInheritanceStrategy);
					d.params = Object.freeze(b.params), d.data = Object.freeze(b.data), _.children.forEach(w => this.inheritParamsAndData(w))
				}
				processSegmentGroup(_, d, b, w) {
					return 0 === b.segments.length && b.hasChildren() ? this.processChildren(_, d, b) : this.processSegment(_, d, b, b.segments, w, !0)
				}
				processChildren(_, d, b) {
					const w = [];
					for (const P of Object.keys(b.children)) "primary" === P ? w.unshift(P) : w.push(P);
					return (0, B.D)(w).pipe((0, Ot.b)(P => {
						const Y = b.children[P],
							Pe = function er(p, _) {
								const d = p.filter(b => Yn(b) === _);
								return d.push(...p.filter(b => Yn(b) !== _)), d
							}(d, P);
						return this.processSegmentGroup(_, Pe, Y, P)
					}), function Un(p, _) {
						return (0, Ye.e)((0, wn.U)(p, _, arguments.length >= 2, !0))
					}((P, Y) => (P.push(...Y), P)), (0, Qt.d)(null), function ve(p, _) {
						const d = arguments.length >= 2;
						return b => b.pipe(p ? (0, Ae.h)((w, P) => p(w, P, b)) : we.y, Mn(1), d ? (0, Qt.d)(_) : (0, Ee.T)(() => new ae.K))
					}(), (0, We.z)(P => {
						if (null === P) return jo(b);
						const Y = Ha(P);
						return function lr(p) {
							p.sort((_, d) => _.value.outlet === z ? -1 : d.value.outlet === z ? 1 : _.value.outlet.localeCompare(d.value.outlet))
						}(Y), (0, K.of)(Y)
					}))
				}
				processSegment(_, d, b, w, P, Y) {
					return (0, B.D)(d).pipe((0, Ot.b)(Pe => this.processSegmentAgainstRoute(Pe._injector ?? _, d, Pe, b, w, P, Y).pipe((0, Yt.K)(Me => {
						if (Me instanceof hn) return (0, K.of)(null);
						throw Me
					}))), (0, rt.P)(Pe => !!Pe), (0, Yt.K)(Pe => {
						if (Us(Pe)) return function Ho(p, _, d) {
							return 0 === _.length && !p.children[d]
						}(b, w, P) ? (0, K.of)([]) : jo(b);
						throw Pe
					}))
				}
				processSegmentAgainstRoute(_, d, b, w, P, Y, Pe) {
					return function Cs(p, _, d, b) {
						return !!(Yn(p) === b || b !== z && To(_, d, p)) && ("**" === p.path || ar(_, p, d).matched)
					}(b, w, P, Y) ? void 0 === b.redirectTo ? this.matchSegmentAgainstRoute(_, w, b, P, Y, Pe) : Pe && this.allowRedirects ? this.expandSegmentAgainstRouteUsingRedirect(_, w, d, b, P, Y) : jo(w) : jo(w)
				}
				expandSegmentAgainstRouteUsingRedirect(_, d, b, w, P, Y) {
					return "**" === w.path ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(_, b, w, Y) : this.expandRegularSegmentAgainstRouteUsingRedirect(_, d, b, w, P, Y)
				}
				expandWildCardWithParamsAgainstRouteUsingRedirect(_, d, b, w) {
					const P = this.applyRedirects.applyRedirectCommands([], b.redirectTo, {});
					return b.redirectTo.startsWith("/") ? Fn(P) : this.applyRedirects.lineralizeSegments(b, P).pipe((0, We.z)(Y => {
						const Pe = new Xe(Y, {});
						return this.processSegment(_, d, Pe, Y, w, !1)
					}))
				}
				expandRegularSegmentAgainstRouteUsingRedirect(_, d, b, w, P, Y) {
					const {
						matched: Pe,
						consumedSegments: Me,
						remainingSegments: ct,
						positionalParamSegments: $t
					} = ar(d, w, P);
					if (!Pe) return jo(d);
					const En = this.applyRedirects.applyRedirectCommands(Me, w.redirectTo, $t);
					return w.redirectTo.startsWith("/") ? Fn(En) : this.applyRedirects.lineralizeSegments(w, En).pipe((0, We.z)(Zt => this.processSegment(_, b, d, Zt.concat(ct), Y, !1)))
				}
				matchSegmentAgainstRoute(_, d, b, w, P, Y) {
					let Pe;
					if ("**" === b.path) {
						const Me = w.length > 0 ? an(w).parameters : {},
							ct = new no(w, Me, Object.freeze({
								...this.urlTree.queryParams
							}), this.urlTree.fragment, Nr(b), Yn(b), b.component ?? b._loadedComponent ?? null, b, ws(b));
						Pe = (0, K.of)({
							snapshot: ct,
							consumedSegments: [],
							remainingSegments: []
						}), d.children = {}
					} else Pe = sr(d, b, w, _).pipe((0, $.U)(({
						matched: Me,
						consumedSegments: ct,
						remainingSegments: $t,
						parameters: En
					}) => Me ? {
						snapshot: new no(ct, En, Object.freeze({
							...this.urlTree.queryParams
						}), this.urlTree.fragment, Nr(b), Yn(b), b.component ?? b._loadedComponent ?? null, b, ws(b)),
						consumedSegments: ct,
						remainingSegments: $t
					} : null));
					return Pe.pipe((0, Ie.w)(Me => null === Me ? jo(d) : this.getChildConfig(_ = b._injector ?? _, b, w).pipe((0, Ie.w)(({
						routes: ct
					}) => {
						const $t = b._loadedInjector ?? _,
							{
								snapshot: En,
								consumedSegments: Zt,
								remainingSegments: ro
							} = Me,
							{
								segmentGroup: hr,
								slicedSegments: pr
							} = Or(d, Zt, ro, ct);
						if (0 === pr.length && hr.hasChildren()) return this.processChildren($t, ct, hr).pipe((0, $.U)(zo => null === zo ? null : [new wi(En, zo)]));
						if (0 === ct.length && 0 === pr.length) return (0, K.of)([new wi(En, [])]);
						const Ss = Yn(b) === P;
						return this.processSegment($t, ct, hr, pr, Ss ? z : P, !0).pipe((0, $.U)(zo => [new wi(En, zo)]))
					}))))
				}
				getChildConfig(_, d, b) {
					return d.children ? (0, K.of)({
						routes: d.children,
						injector: _
					}) : d.loadChildren ? void 0 !== d._loadedRoutes ? (0, K.of)({
						routes: d._loadedRoutes,
						injector: d._loadedInjector
					}) : function Tr(p, _, d, b) {
						const w = _.canLoad;
						if (void 0 === w || 0 === w.length) return (0, K.of)(!0);
						const P = w.map(Y => {
							const Pe = po(Y, p);
							return tn(function gs(p) {
								return p && Bo(p.canLoad)
							}(Pe) ? Pe.canLoad(_, d) : p.runInContext(() => Pe(_, d)))
						});
						return (0, K.of)(P).pipe(Io(), is())
					}(_, d, b).pipe((0, We.z)(w => w ? this.configLoader.loadChildren(_, d).pipe((0, wt.b)(P => {
						d._loadedRoutes = P.routes, d._loadedInjector = P.injector
					})) : function Ii(p) {
						return (0, ye._)(qo(!1, 3))
					}())) : (0, K.of)({
						routes: [],
						injector: _
					})
				}
			}

			function ja(p) {
				const _ = p.value.routeConfig;
				return _ && "" === _.path
			}

			function Ha(p) {
				const _ = [],
					d = new Set;
				for (const b of p) {
					if (!ja(b)) {
						_.push(b);
						continue
					}
					const w = _.find(P => b.value.routeConfig === P.value.routeConfig);
					void 0 !== w ? (w.children.push(...b.children), d.add(w)) : _.push(b)
				}
				for (const b of d) {
					const w = Ha(b.children);
					_.push(new wi(b.value, w))
				}
				return _.filter(b => !d.has(b))
			}

			function Nr(p) {
				return p.data || {}
			}

			function ws(p) {
				return p.resolve || {}
			}

			function xs(p) {
				return "string" == typeof p.title || null === p.title
			}

			function m(p) {
				return (0, Ie.w)(_ => {
					const d = p(_);
					return d ? (0, B.D)(d).pipe((0, $.U)(() => _)) : (0, K.of)(_)
				})
			}
			const S = new l.OlP("ROUTES");
			let D = (() => {
				class p {
					constructor() {
						this.componentLoaders = new WeakMap, this.childrenLoaders = new WeakMap, this.compiler = (0, l.f3M)(l.Sil)
					}
					loadComponent(d) {
						if (this.componentLoaders.get(d)) return this.componentLoaders.get(d);
						if (d._loadedComponent) return (0, K.of)(d._loadedComponent);
						this.onLoadStartListener && this.onLoadStartListener(d);
						const b = tn(d.loadComponent()).pipe((0, $.U)(De), (0, wt.b)(P => {
								this.onLoadEndListener && this.onLoadEndListener(d), d._loadedComponent = P
							}), (0, me.x)(() => {
								this.componentLoaders.delete(d)
							})),
							w = new lt(b, () => new qe.x).pipe(it());
						return this.componentLoaders.set(d, w), w
					}
					loadChildren(d, b) {
						if (this.childrenLoaders.get(b)) return this.childrenLoaders.get(b);
						if (b._loadedRoutes) return (0, K.of)({
							routes: b._loadedRoutes,
							injector: b._loadedInjector
						});
						this.onLoadStartListener && this.onLoadStartListener(b);
						const P = function M(p, _, d, b) {
								return tn(p.loadChildren()).pipe((0, $.U)(De), (0, We.z)(w => w instanceof l.YKP || Array.isArray(w) ? (0, K.of)(w) : (0, B.D)(_.compileModuleAsync(w))), (0, $.U)(w => {
									b && b(p);
									let P, Y, Pe = !1;
									return Array.isArray(w) ? (Y = w, !0) : (P = w.create(d).injector, Y = P.get(S, [], {
										optional: !0,
										self: !0
									}).flat()), {
										routes: Y.map(es),
										injector: P
									}
								}))
							}(b, this.compiler, d, this.onLoadEndListener).pipe((0, me.x)(() => {
								this.childrenLoaders.delete(b)
							})),
							Y = new lt(P, () => new qe.x).pipe(it());
						return this.childrenLoaders.set(b, Y), Y
					}
					static #e = this.\u0275fac = function(b) {
						return new(b || p)
					};
					static #t = this.\u0275prov = l.Yz7({
						token: p,
						factory: p.\u0275fac,
						providedIn: "root"
					})
				}
				return p
			})();

			function De(p) {
				return function j(p) {
					return p && "object" == typeof p && "default" in p
				}(p) ? p.default : p
			}
			let ke = (() => {
				class p {
					get hasRequestedNavigation() {
						return 0 !== this.navigationId
					}
					constructor() {
						this.currentNavigation = null, this.currentTransition = null, this.lastSuccessfulNavigation = null, this.events = new qe.x, this.transitionAbortSubject = new qe.x, this.configLoader = (0, l.f3M)(D), this.environmentInjector = (0, l.f3M)(l.lqb), this.urlSerializer = (0, l.f3M)(Mt), this.rootContexts = (0, l.f3M)(Eo), this.inputBindingEnabled = null !== (0, l.f3M)(fo, {
							optional: !0
						}), this.navigationId = 0, this.afterPreactivation = () => (0, K.of)(void 0), this.rootComponentType = null, this.configLoader.onLoadEndListener = w => this.events.next(new Ko(w)), this.configLoader.onLoadStartListener = w => this.events.next(new ps(w))
					}
					complete() {
						this.transitions?.complete()
					}
					handleNavigationRequest(d) {
						const b = ++this.navigationId;
						this.transitions?.next({
							...this.transitions.value,
							...d,
							id: b
						})
					}
					setupNavigations(d, b, w) {
						return this.transitions = new ne.X({
							id: 0,
							currentUrlTree: b,
							currentRawUrl: b,
							currentBrowserUrl: b,
							extractedUrl: d.urlHandlingStrategy.extract(b),
							urlAfterRedirects: d.urlHandlingStrategy.extract(b),
							rawUrl: b,
							extras: {},
							resolve: null,
							reject: null,
							promise: Promise.resolve(!0),
							source: pi,
							restoredState: null,
							currentSnapshot: w.snapshot,
							targetSnapshot: null,
							currentRouterState: w,
							targetRouterState: null,
							guards: {
								canActivateChecks: [],
								canDeactivateChecks: []
							},
							guardsResult: null
						}), this.transitions.pipe((0, Ae.h)(P => 0 !== P.id), (0, $.U)(P => ({
							...P,
							extractedUrl: d.urlHandlingStrategy.extract(P.rawUrl)
						})), (0, Ie.w)(P => {
							this.currentTransition = P;
							let Y = !1,
								Pe = !1;
							return (0, K.of)(P).pipe((0, wt.b)(Me => {
								this.currentNavigation = {
									id: Me.id,
									initialUrl: Me.rawUrl,
									extractedUrl: Me.extractedUrl,
									trigger: Me.source,
									extras: Me.extras,
									previousNavigation: this.lastSuccessfulNavigation ? {
										...this.lastSuccessfulNavigation,
										previousNavigation: null
									} : null
								}
							}), (0, Ie.w)(Me => {
								const ct = Me.currentBrowserUrl.toString(),
									$t = !d.navigated || Me.extractedUrl.toString() !== ct || ct !== Me.currentUrlTree.toString();
								if (!$t && "reload" !== (Me.extras.onSameUrlNavigation ?? d.onSameUrlNavigation)) {
									const Zt = "";
									return this.events.next(new Gn(Me.id, this.urlSerializer.serialize(Me.rawUrl), Zt, 0)), Me.resolve(null), xe.E
								}
								if (d.urlHandlingStrategy.shouldProcessUrl(Me.rawUrl)) return (0, K.of)(Me).pipe((0, Ie.w)(Zt => {
									const ro = this.transitions?.getValue();
									return this.events.next(new Ni(Zt.id, this.urlSerializer.serialize(Zt.extractedUrl), Zt.source, Zt.restoredState)), ro !== this.transitions?.getValue() ? xe.E : Promise.resolve(Zt)
								}), function zs(p, _, d, b, w, P) {
									return (0, We.z)(Y => function cr(p, _, d, b, w, P, Y = "emptyOnly") {
										return new Uo(p, _, d, b, w, Y, P).recognize()
									}(p, _, d, b, Y.extractedUrl, w, P).pipe((0, $.U)(({
										state: Pe,
										tree: Me
									}) => ({
										...Y,
										targetSnapshot: Pe,
										urlAfterRedirects: Me
									}))))
								}(this.environmentInjector, this.configLoader, this.rootComponentType, d.config, this.urlSerializer, d.paramsInheritanceStrategy), (0, wt.b)(Zt => {
									P.targetSnapshot = Zt.targetSnapshot, P.urlAfterRedirects = Zt.urlAfterRedirects, this.currentNavigation = {
										...this.currentNavigation,
										finalUrl: Zt.urlAfterRedirects
									};
									const ro = new Vi(Zt.id, this.urlSerializer.serialize(Zt.extractedUrl), this.urlSerializer.serialize(Zt.urlAfterRedirects), Zt.targetSnapshot);
									this.events.next(ro)
								}));
								if ($t && d.urlHandlingStrategy.shouldProcessUrl(Me.currentRawUrl)) {
									const {
										id: Zt,
										extractedUrl: ro,
										source: hr,
										restoredState: pr,
										extras: Ss
									} = Me, zo = new Ni(Zt, this.urlSerializer.serialize(ro), hr, pr);
									this.events.next(zo);
									const $c = Qn(0, this.rootComponentType).snapshot;
									return this.currentTransition = P = {
										...Me,
										targetSnapshot: $c,
										urlAfterRedirects: ro,
										extras: {
											...Ss,
											skipLocationChange: !1,
											replaceUrl: !1
										}
									}, (0, K.of)(P)
								} {
									const Zt = "";
									return this.events.next(new Gn(Me.id, this.urlSerializer.serialize(Me.extractedUrl), Zt, 1)), Me.resolve(null), xe.E
								}
							}), (0, wt.b)(Me => {
								const ct = new Ci(Me.id, this.urlSerializer.serialize(Me.extractedUrl), this.urlSerializer.serialize(Me.urlAfterRedirects), Me.targetSnapshot);
								this.events.next(ct)
							}), (0, $.U)(Me => (this.currentTransition = P = {
								...Me,
								guards: li(Me.targetSnapshot, Me.currentSnapshot, this.rootContexts)
							}, P)), function ns(p, _) {
								return (0, We.z)(d => {
									const {
										targetSnapshot: b,
										currentSnapshot: w,
										guards: {
											canActivateChecks: P,
											canDeactivateChecks: Y
										}
									} = d;
									return 0 === Y.length && 0 === P.length ? (0, K.of)({
										...d,
										guardsResult: !0
									}) : function bs(p, _, d, b) {
										return (0, B.D)(p).pipe((0, We.z)(w => function Vs(p, _, d, b, w) {
											const P = _ && _.routeConfig ? _.routeConfig.canDeactivate : null;
											if (!P || 0 === P.length) return (0, K.of)(!0);
											const Y = P.map(Pe => {
												const Me = _i(_) ?? w,
													ct = po(Pe, Me);
												return tn(function Fa(p) {
													return p && Bo(p.canDeactivate)
												}(ct) ? ct.canDeactivate(p, _, d, b) : Me.runInContext(() => ct(p, _, d, b))).pipe((0, rt.P)())
											});
											return (0, K.of)(Y).pipe(Io())
										}(w.component, w.route, d, _, b)), (0, rt.P)(w => !0 !== w, !0))
									}(Y, b, w, p).pipe((0, We.z)(Pe => Pe && function Ir(p) {
										return "boolean" == typeof p
									}(Pe) ? function Ba(p, _, d, b) {
										return (0, B.D)(_).pipe((0, Ot.b)(w => (0, te.z)(function kc(p, _) {
											return null !== p && _ && _(new Qr(p)), (0, K.of)(!0)
										}(w.route.parent, b), function ys(p, _) {
											return null !== p && _ && _(new mi(p)), (0, K.of)(!0)
										}(w.route, b), function or(p, _, d) {
											const b = _[_.length - 1],
												P = _.slice(0, _.length - 1).reverse().map(Y => function qn(p) {
													const _ = p.routeConfig ? p.routeConfig.canActivateChild : null;
													return _ && 0 !== _.length ? {
														node: p,
														guards: _
													} : null
												}(Y)).filter(Y => null !== Y).map(Y => (0, Q.P)(() => {
													const Pe = Y.guards.map(Me => {
														const ct = _i(Y.node) ?? d,
															$t = po(Me, ct);
														return tn(function ts(p) {
															return p && Bo(p.canActivateChild)
														}($t) ? $t.canActivateChild(b, p) : ct.runInContext(() => $t(b, p))).pipe((0, rt.P)())
													});
													return (0, K.of)(Pe).pipe(Io())
												}));
											return (0, K.of)(P).pipe(Io())
										}(p, w.path, d), function Ds(p, _, d) {
											const b = _.routeConfig ? _.routeConfig.canActivate : null;
											if (!b || 0 === b.length) return (0, K.of)(!0);
											const w = b.map(P => (0, Q.P)(() => {
												const Y = _i(_) ?? d,
													Pe = po(P, Y);
												return tn(function _s(p) {
													return p && Bo(p.canActivate)
												}(Pe) ? Pe.canActivate(_, p) : Y.runInContext(() => Pe(_, p))).pipe((0, rt.P)())
											}));
											return (0, K.of)(w).pipe(Io())
										}(p, w.route, d))), (0, rt.P)(w => !0 !== w, !0))
									}(b, P, p, _) : (0, K.of)(Pe)), (0, $.U)(Pe => ({
										...d,
										guardsResult: Pe
									})))
								})
							}(this.environmentInjector, Me => this.events.next(Me)), (0, wt.b)(Me => {
								if (P.guardsResult = Me.guardsResult, Z(Me.guardsResult)) throw ki(0, Me.guardsResult);
								const ct = new Kr(Me.id, this.urlSerializer.serialize(Me.extractedUrl), this.urlSerializer.serialize(Me.urlAfterRedirects), Me.targetSnapshot, !!Me.guardsResult);
								this.events.next(ct)
							}), (0, Ae.h)(Me => !!Me.guardsResult || (this.cancelNavigationTransition(Me, "", 3), !1)), m(Me => {
								if (Me.guards.canActivateChecks.length) return (0, K.of)(Me).pipe((0, wt.b)(ct => {
									const $t = new hs(ct.id, this.urlSerializer.serialize(ct.extractedUrl), this.urlSerializer.serialize(ct.urlAfterRedirects), ct.targetSnapshot);
									this.events.next($t)
								}), (0, Ie.w)(ct => {
									let $t = !1;
									return (0, K.of)(ct).pipe(function Ms(p, _) {
										return (0, We.z)(d => {
											const {
												targetSnapshot: b,
												guards: {
													canActivateChecks: w
												}
											} = d;
											if (!w.length) return (0, K.of)(d);
											let P = 0;
											return (0, B.D)(w).pipe((0, Ot.b)(Y => function kr(p, _, d, b) {
												const w = p.routeConfig,
													P = p._resolve;
												return void 0 !== w?.title && !xs(w) && (P[Se] = w.title),
													function $s(p, _, d, b) {
														const w = function ss(p) {
															return [...Object.keys(p), ...Object.getOwnPropertySymbols(p)]
														}(p);
														if (0 === w.length) return (0, K.of)({});
														const P = {};
														return (0, B.D)(w).pipe((0, We.z)(Y => function as(p, _, d, b) {
															const w = _i(_) ?? b,
																P = po(p, w);
															return tn(P.resolve ? P.resolve(_, d) : w.runInContext(() => P(_, d)))
														}(p[Y], _, d, b).pipe((0, rt.P)(), (0, wt.b)(Pe => {
															P[Y] = Pe
														}))), Mn(1), (0, Te.h)(P), (0, Yt.K)(Y => Us(Y) ? xe.E : (0, ye._)(Y)))
													}(P, p, _, b).pipe((0, $.U)(Y => (p._resolvedData = Y, p.data = Mr(p, d).resolve, w && xs(w) && (p.data[Se] = w.title), null)))
											}(Y.route, b, p, _)), (0, wt.b)(() => P++), Mn(1), (0, We.z)(Y => P === w.length ? (0, K.of)(d) : xe.E))
										})
									}(d.paramsInheritanceStrategy, this.environmentInjector), (0, wt.b)({
										next: () => $t = !0,
										complete: () => {
											$t || this.cancelNavigationTransition(ct, "", 2)
										}
									}))
								}), (0, wt.b)(ct => {
									const $t = new Zr(ct.id, this.urlSerializer.serialize(ct.extractedUrl), this.urlSerializer.serialize(ct.urlAfterRedirects), ct.targetSnapshot);
									this.events.next($t)
								}))
							}), m(Me => {
								const ct = $t => {
									const En = [];
									$t.routeConfig?.loadComponent && !$t.routeConfig._loadedComponent && En.push(this.configLoader.loadComponent($t.routeConfig).pipe((0, wt.b)(Zt => {
										$t.component = Zt
									}), (0, $.U)(() => {})));
									for (const Zt of $t.children) En.push(...ct(Zt));
									return En
								};
								return (0, ie.a)(ct(Me.targetSnapshot.root)).pipe((0, Qt.d)(), (0, he.q)(1))
							}), m(() => this.afterPreactivation()), (0, $.U)(Me => {
								const ct = function ho(p, _, d) {
									const b = mn(p, _._root, d ? d._root : void 0);
									return new jn(b, _)
								}(d.routeReuseStrategy, Me.targetSnapshot, Me.currentRouterState);
								return this.currentTransition = P = {
									...Me,
									targetRouterState: ct
								}, P
							}), (0, wt.b)(() => {
								this.events.next(new No)
							}), ((p, _, d, b) => (0, $.U)(w => (new nr(_, w.targetRouterState, w.currentRouterState, d, b).activate(p), w)))(this.rootContexts, d.routeReuseStrategy, Me => this.events.next(Me), this.inputBindingEnabled), (0, he.q)(1), (0, wt.b)({
								next: Me => {
									Y = !0, this.lastSuccessfulNavigation = this.currentNavigation, this.events.next(new ci(Me.id, this.urlSerializer.serialize(Me.extractedUrl), this.urlSerializer.serialize(Me.urlAfterRedirects))), d.titleStrategy?.updateTitle(Me.targetRouterState.snapshot), Me.resolve(!0)
								},
								complete: () => {
									Y = !0
								}
							}), (0, Ce.R)(this.transitionAbortSubject.pipe((0, wt.b)(Me => {
								throw Me
							}))), (0, me.x)(() => {
								Y || Pe || this.cancelNavigationTransition(P, "", 1), this.currentNavigation?.id === P.id && (this.currentNavigation = null)
							}), (0, Yt.K)(Me => {
								if (Pe = !0, An(Me)) this.events.next(new $n(P.id, this.urlSerializer.serialize(P.extractedUrl), Me.message, Me.cancellationCode)),
									function Fo(p) {
										return An(p) && Z(p.url)
									}(Me) ? this.events.next(new Cr(Me.url)) : P.resolve(!1);
								else {
									this.events.next(new Ei(P.id, this.urlSerializer.serialize(P.extractedUrl), Me, P.targetSnapshot ?? void 0));
									try {
										P.resolve(d.errorHandler(Me))
									} catch (ct) {
										P.reject(ct)
									}
								}
								return xe.E
							}))
						}))
					}
					cancelNavigationTransition(d, b, w) {
						const P = new $n(d.id, this.urlSerializer.serialize(d.extractedUrl), b, w);
						this.events.next(P), d.resolve(!1)
					}
					static #e = this.\u0275fac = function(b) {
						return new(b || p)
					};
					static #t = this.\u0275prov = l.Yz7({
						token: p,
						factory: p.\u0275fac,
						providedIn: "root"
					})
				}
				return p
			})();

			function ft(p) {
				return p !== pi
			}
			let zt = (() => {
					class p {
						buildTitle(d) {
							let b, w = d.root;
							for (; void 0 !== w;) b = this.getResolvedTitleForRoute(w) ?? b, w = w.children.find(P => P.outlet === z);
							return b
						}
						getResolvedTitleForRoute(d) {
							return d.data[Se]
						}
						static #e = this.\u0275fac = function(b) {
							return new(b || p)
						};
						static #t = this.\u0275prov = l.Yz7({
							token: p,
							factory: function() {
								return (0, l.f3M)(cn)
							},
							providedIn: "root"
						})
					}
					return p
				})(),
				cn = (() => {
					class p extends zt {
						constructor(d) {
							super(), this.title = d
						}
						updateTitle(d) {
							const b = this.buildTitle(d);
							void 0 !== b && this.title.setTitle(b)
						}
						static #e = this.\u0275fac = function(b) {
							return new(b || p)(l.LFG(tt.Dx))
						};
						static #t = this.\u0275prov = l.Yz7({
							token: p,
							factory: p.\u0275fac,
							providedIn: "root"
						})
					}
					return p
				})(),
				Jt = (() => {
					class p {
						static #e = this.\u0275fac = function(b) {
							return new(b || p)
						};
						static #t = this.\u0275prov = l.Yz7({
							token: p,
							factory: function() {
								return (0, l.f3M)(bn)
							},
							providedIn: "root"
						})
					}
					return p
				})();
			class Ut {
				shouldDetach(_) {
					return !1
				}
				store(_, d) {}
				shouldAttach(_) {
					return !1
				}
				retrieve(_) {
					return null
				}
				shouldReuseRoute(_, d) {
					return _.routeConfig === d.routeConfig
				}
			}
			let bn = (() => {
				class p extends Ut {
					static #e = this.\u0275fac = function() {
						let d;
						return function(w) {
							return (d || (d = l.n5z(p)))(w || p)
						}
					}();
					static #t = this.\u0275prov = l.Yz7({
						token: p,
						factory: p.\u0275fac,
						providedIn: "root"
					})
				}
				return p
			})();
			const sn = new l.OlP("", {
				providedIn: "root",
				factory: () => ({})
			});
			let Pn = (() => {
					class p {
						static #e = this.\u0275fac = function(b) {
							return new(b || p)
						};
						static #t = this.\u0275prov = l.Yz7({
							token: p,
							factory: function() {
								return (0, l.f3M)(Xi)
							},
							providedIn: "root"
						})
					}
					return p
				})(),
				Xi = (() => {
					class p {
						shouldProcessUrl(d) {
							return !0
						}
						extract(d) {
							return d
						}
						merge(d, b) {
							return d
						}
						static #e = this.\u0275fac = function(b) {
							return new(b || p)
						};
						static #t = this.\u0275prov = l.Yz7({
							token: p,
							factory: p.\u0275fac,
							providedIn: "root"
						})
					}
					return p
				})();
			var ei = function(p) {
				return p[p.COMPLETE = 0] = "COMPLETE", p[p.FAILED = 1] = "FAILED", p[p.REDIRECTING = 2] = "REDIRECTING", p
			}(ei || {});

			function ti(p) {
				throw p
			}

			function $i(p, _, d) {
				return _.parse("/")
			}
			const ni = {
					paths: "exact",
					fragment: "ignored",
					matrixParams: "ignored",
					queryParams: "exact"
				},
				ii = {
					paths: "subset",
					fragment: "ignored",
					matrixParams: "ignored",
					queryParams: "subset"
				};
			let Gi = (() => {
				class p {
					get navigationId() {
						return this.navigationTransitions.navigationId
					}
					get browserPageId() {
						return "computed" !== this.canceledNavigationResolution ? this.currentPageId : this.location.getState()?.\u0275routerPageId ?? this.currentPageId
					}
					get events() {
						return this._events
					}
					constructor() {
						this.disposed = !1, this.currentPageId = 0, this.console = (0, l.f3M)(l.c2e), this.isNgZoneEnabled = !1, this._events = new qe.x, this.options = (0, l.f3M)(sn, {
							optional: !0
						}) || {}, this.pendingTasks = (0, l.f3M)(l.HDt), this.errorHandler = this.options.errorHandler || ti, this.malformedUriErrorHandler = this.options.malformedUriErrorHandler || $i, this.navigated = !1, this.lastSuccessfulId = -1, this.urlHandlingStrategy = (0, l.f3M)(Pn), this.routeReuseStrategy = (0, l.f3M)(Jt), this.titleStrategy = (0, l.f3M)(zt), this.onSameUrlNavigation = this.options.onSameUrlNavigation || "ignore", this.paramsInheritanceStrategy = this.options.paramsInheritanceStrategy || "emptyOnly", this.urlUpdateStrategy = this.options.urlUpdateStrategy || "deferred", this.canceledNavigationResolution = this.options.canceledNavigationResolution || "replace", this.config = (0, l.f3M)(S, {
							optional: !0
						})?.flat() ?? [], this.navigationTransitions = (0, l.f3M)(ke), this.urlSerializer = (0, l.f3M)(Mt), this.location = (0, l.f3M)(ce.Ye), this.componentInputBindingEnabled = !!(0, l.f3M)(fo, {
							optional: !0
						}), this.eventsSubscription = new Ne.w0, this.isNgZoneEnabled = (0, l.f3M)(l.R0b) instanceof l.R0b && l.R0b.isInAngularZone(), this.resetConfig(this.config), this.currentUrlTree = new Ue, this.rawUrlTree = this.currentUrlTree, this.browserUrlTree = this.currentUrlTree, this.routerState = Qn(0, null), this.navigationTransitions.setupNavigations(this, this.currentUrlTree, this.routerState).subscribe(d => {
							this.lastSuccessfulId = d.id, this.currentPageId = this.browserPageId
						}, d => {
							this.console.warn(`Unhandled Navigation Error: ${d}`)
						}), this.subscribeToNavigationEvents()
					}
					subscribeToNavigationEvents() {
						const d = this.navigationTransitions.events.subscribe(b => {
							try {
								const {
									currentTransition: w
								} = this.navigationTransitions;
								if (null === w) return void(_n(b) && this._events.next(b));
								if (b instanceof Ni) ft(w.source) && (this.browserUrlTree = w.extractedUrl);
								else if (b instanceof Gn) this.rawUrlTree = w.rawUrl;
								else if (b instanceof Vi) {
									if ("eager" === this.urlUpdateStrategy) {
										if (!w.extras.skipLocationChange) {
											const P = this.urlHandlingStrategy.merge(w.urlAfterRedirects, w.rawUrl);
											this.setBrowserUrl(P, w)
										}
										this.browserUrlTree = w.urlAfterRedirects
									}
								} else if (b instanceof No) this.currentUrlTree = w.urlAfterRedirects, this.rawUrlTree = this.urlHandlingStrategy.merge(w.urlAfterRedirects, w.rawUrl), this.routerState = w.targetRouterState, "deferred" === this.urlUpdateStrategy && (w.extras.skipLocationChange || this.setBrowserUrl(this.rawUrlTree, w), this.browserUrlTree = w.urlAfterRedirects);
								else if (b instanceof $n) 0 !== b.code && 1 !== b.code && (this.navigated = !0), (3 === b.code || 2 === b.code) && this.restoreHistory(w);
								else if (b instanceof Cr) {
									const P = this.urlHandlingStrategy.merge(b.url, w.currentRawUrl),
										Y = {
											skipLocationChange: w.extras.skipLocationChange,
											replaceUrl: "eager" === this.urlUpdateStrategy || ft(w.source)
										};
									this.scheduleNavigation(P, pi, null, Y, {
										resolve: w.resolve,
										reject: w.reject,
										promise: w.promise
									})
								}
								b instanceof Ei && this.restoreHistory(w, !0), b instanceof ci && (this.navigated = !0), _n(b) && this._events.next(b)
							} catch (w) {
								this.navigationTransitions.transitionAbortSubject.next(w)
							}
						});
						this.eventsSubscription.add(d)
					}
					resetRootComponentType(d) {
						this.routerState.root.component = d, this.navigationTransitions.rootComponentType = d
					}
					initialNavigation() {
						if (this.setUpLocationChangeListener(), !this.navigationTransitions.hasRequestedNavigation) {
							const d = this.location.getState();
							this.navigateToSyncWithBrowser(this.location.path(!0), pi, d)
						}
					}
					setUpLocationChangeListener() {
						this.locationSubscription || (this.locationSubscription = this.location.subscribe(d => {
							const b = "popstate" === d.type ? "popstate" : "hashchange";
							"popstate" === b && setTimeout(() => {
								this.navigateToSyncWithBrowser(d.url, b, d.state)
							}, 0)
						}))
					}
					navigateToSyncWithBrowser(d, b, w) {
						const P = {
								replaceUrl: !0
							},
							Y = w?.navigationId ? w : null;
						if (w) {
							const Me = {
								...w
							};
							delete Me.navigationId, delete Me.\u0275routerPageId, 0 !== Object.keys(Me).length && (P.state = Me)
						}
						const Pe = this.parseUrl(d);
						this.scheduleNavigation(Pe, b, Y, P)
					}
					get url() {
						return this.serializeUrl(this.currentUrlTree)
					}
					getCurrentNavigation() {
						return this.navigationTransitions.currentNavigation
					}
					get lastSuccessfulNavigation() {
						return this.navigationTransitions.lastSuccessfulNavigation
					}
					resetConfig(d) {
						this.config = d.map(es), this.navigated = !1, this.lastSuccessfulId = -1
					}
					ngOnDestroy() {
						this.dispose()
					}
					dispose() {
						this.navigationTransitions.complete(), this.locationSubscription && (this.locationSubscription.unsubscribe(), this.locationSubscription = void 0), this.disposed = !0, this.eventsSubscription.unsubscribe()
					}
					createUrlTree(d, b = {}) {
						const {
							relativeTo: w,
							queryParams: P,
							fragment: Y,
							queryParamsHandling: Pe,
							preserveFragment: Me
						} = b, ct = Me ? this.currentUrlTree.fragment : Y;
						let En, $t = null;
						switch (Pe) {
							case "merge":
								$t = {
									...this.currentUrlTree.queryParams,
									...P
								};
								break;
							case "preserve":
								$t = this.currentUrlTree.queryParams;
								break;
							default:
								$t = P || null
						}
						null !== $t && ($t = this.removeEmptyProps($t));
						try {
							En = $e(w ? w.snapshot : this.routerState.snapshot.root)
						} catch {
							("string" != typeof d[0] || !d[0].startsWith("/")) && (d = []), En = this.currentUrlTree.root
						}
						return X(En, d, $t, ct ?? null)
					}
					navigateByUrl(d, b = {
						skipLocationChange: !1
					}) {
						const w = Z(d) ? d : this.parseUrl(d),
							P = this.urlHandlingStrategy.merge(w, this.rawUrlTree);
						return this.scheduleNavigation(P, pi, null, b)
					}
					navigate(d, b = {
						skipLocationChange: !1
					}) {
						return function Fr(p) {
							for (let _ = 0; _ < p.length; _++)
								if (null == p[_]) throw new l.vHH(4008, !1)
						}(d), this.navigateByUrl(this.createUrlTree(d, b), b)
					}
					serializeUrl(d) {
						return this.urlSerializer.serialize(d)
					}
					parseUrl(d) {
						let b;
						try {
							b = this.urlSerializer.parse(d)
						} catch (w) {
							b = this.malformedUriErrorHandler(w, this.urlSerializer, d)
						}
						return b
					}
					isActive(d, b) {
						let w;
						if (w = !0 === b ? {
								...ni
							} : !1 === b ? {
								...ii
							} : b, Z(d)) return Zn(this.currentUrlTree, d, w);
						const P = this.parseUrl(d);
						return Zn(this.currentUrlTree, P, w)
					}
					removeEmptyProps(d) {
						return Object.keys(d).reduce((b, w) => {
							const P = d[w];
							return null != P && (b[w] = P), b
						}, {})
					}
					scheduleNavigation(d, b, w, P, Y) {
						if (this.disposed) return Promise.resolve(!1);
						let Pe, Me, ct;
						Y ? (Pe = Y.resolve, Me = Y.reject, ct = Y.promise) : ct = new Promise((En, Zt) => {
							Pe = En, Me = Zt
						});
						const $t = this.pendingTasks.add();
						return function zi(p, _) {
							p.events.pipe((0, Ae.h)(d => d instanceof ci || d instanceof $n || d instanceof Ei || d instanceof Gn), (0, $.U)(d => d instanceof ci || d instanceof Gn ? ei.COMPLETE : d instanceof $n && (0 === d.code || 1 === d.code) ? ei.REDIRECTING : ei.FAILED), (0, Ae.h)(d => d !== ei.REDIRECTING), (0, he.q)(1)).subscribe(() => {
								_()
							})
						}(this, () => {
							queueMicrotask(() => this.pendingTasks.remove($t))
						}), this.navigationTransitions.handleNavigationRequest({
							source: b,
							restoredState: w,
							currentUrlTree: this.currentUrlTree,
							currentRawUrl: this.currentUrlTree,
							currentBrowserUrl: this.browserUrlTree,
							rawUrl: d,
							extras: P,
							resolve: Pe,
							reject: Me,
							promise: ct,
							currentSnapshot: this.routerState.snapshot,
							currentRouterState: this.routerState
						}), ct.catch(En => Promise.reject(En))
					}
					setBrowserUrl(d, b) {
						const w = this.urlSerializer.serialize(d);
						if (this.location.isCurrentPathEqualTo(w) || b.extras.replaceUrl) {
							const Y = {
								...b.extras.state,
								...this.generateNgRouterState(b.id, this.browserPageId)
							};
							this.location.replaceState(w, "", Y)
						} else {
							const P = {
								...b.extras.state,
								...this.generateNgRouterState(b.id, this.browserPageId + 1)
							};
							this.location.go(w, "", P)
						}
					}
					restoreHistory(d, b = !1) {
						if ("computed" === this.canceledNavigationResolution) {
							const P = this.currentPageId - this.browserPageId;
							0 !== P ? this.location.historyGo(P) : this.currentUrlTree === this.getCurrentNavigation()?.finalUrl && 0 === P && (this.resetState(d), this.browserUrlTree = d.currentUrlTree, this.resetUrlToCurrentUrlTree())
						} else "replace" === this.canceledNavigationResolution && (b && this.resetState(d), this.resetUrlToCurrentUrlTree())
					}
					resetState(d) {
						this.routerState = d.currentRouterState, this.currentUrlTree = d.currentUrlTree, this.rawUrlTree = this.urlHandlingStrategy.merge(this.currentUrlTree, d.rawUrl)
					}
					resetUrlToCurrentUrlTree() {
						this.location.replaceState(this.urlSerializer.serialize(this.rawUrlTree), "", this.generateNgRouterState(this.lastSuccessfulId, this.currentPageId))
					}
					generateNgRouterState(d, b) {
						return "computed" === this.canceledNavigationResolution ? {
							navigationId: d,
							\u0275routerPageId: b
						} : {
							navigationId: d
						}
					}
					static #e = this.\u0275fac = function(b) {
						return new(b || p)
					};
					static #t = this.\u0275prov = l.Yz7({
						token: p,
						factory: p.\u0275fac,
						providedIn: "root"
					})
				}
				return p
			})();

			function _n(p) {
				return !(p instanceof No || p instanceof Cr)
			}
			let ur = (() => {
					class p {
						constructor(d, b, w, P, Y, Pe) {
							this.router = d, this.route = b, this.tabIndexAttribute = w, this.renderer = P, this.el = Y, this.locationStrategy = Pe, this.href = null, this.commands = null, this.onChanges = new qe.x, this.preserveFragment = !1, this.skipLocationChange = !1, this.replaceUrl = !1;
							const Me = Y.nativeElement.tagName?.toLowerCase();
							this.isAnchorElement = "a" === Me || "area" === Me, this.isAnchorElement ? this.subscription = d.events.subscribe(ct => {
								ct instanceof ci && this.updateHref()
							}) : this.setTabIndexIfNotOnNativeEl("0")
						}
						setTabIndexIfNotOnNativeEl(d) {
							null != this.tabIndexAttribute || this.isAnchorElement || this.applyAttributeValue("tabindex", d)
						}
						ngOnChanges(d) {
							this.isAnchorElement && this.updateHref(), this.onChanges.next(this)
						}
						set routerLink(d) {
							null != d ? (this.commands = Array.isArray(d) ? d : [d], this.setTabIndexIfNotOnNativeEl("0")) : (this.commands = null, this.setTabIndexIfNotOnNativeEl(null))
						}
						onClick(d, b, w, P, Y) {
							return !!(null === this.urlTree || this.isAnchorElement && (0 !== d || b || w || P || Y || "string" == typeof this.target && "_self" != this.target)) || (this.router.navigateByUrl(this.urlTree, {
								skipLocationChange: this.skipLocationChange,
								replaceUrl: this.replaceUrl,
								state: this.state
							}), !this.isAnchorElement)
						}
						ngOnDestroy() {
							this.subscription?.unsubscribe()
						}
						updateHref() {
							this.href = null !== this.urlTree && this.locationStrategy ? this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(this.urlTree)) : null;
							const d = null === this.href ? null : (0, l.P3R)(this.href, this.el.nativeElement.tagName.toLowerCase(), "href");
							this.applyAttributeValue("href", d)
						}
						applyAttributeValue(d, b) {
							const w = this.renderer,
								P = this.el.nativeElement;
							null !== b ? w.setAttribute(P, d, b) : w.removeAttribute(P, d)
						}
						get urlTree() {
							return null === this.commands ? null : this.router.createUrlTree(this.commands, {
								relativeTo: void 0 !== this.relativeTo ? this.relativeTo : this.route,
								queryParams: this.queryParams,
								fragment: this.fragment,
								queryParamsHandling: this.queryParamsHandling,
								preserveFragment: this.preserveFragment
							})
						}
						static #e = this.\u0275fac = function(b) {
							return new(b || p)(l.Y36(Gi), l.Y36(kn), l.$8M("tabindex"), l.Y36(l.Qsj), l.Y36(l.SBq), l.Y36(ce.S$))
						};
						static #t = this.\u0275dir = l.lG2({
							type: p,
							selectors: [
								["", "routerLink", ""]
							],
							hostVars: 1,
							hostBindings: function(b, w) {
								1 & b && l.NdJ("click", function(Y) {
									return w.onClick(Y.button, Y.ctrlKey, Y.shiftKey, Y.altKey, Y.metaKey)
								}), 2 & b && l.uIk("target", w.target)
							},
							inputs: {
								target: "target",
								queryParams: "queryParams",
								fragment: "fragment",
								queryParamsHandling: "queryParamsHandling",
								state: "state",
								relativeTo: "relativeTo",
								preserveFragment: ["preserveFragment", "preserveFragment", l.VuI],
								skipLocationChange: ["skipLocationChange", "skipLocationChange", l.VuI],
								replaceUrl: ["replaceUrl", "replaceUrl", l.VuI],
								routerLink: "routerLink"
							},
							standalone: !0,
							features: [l.Xq5, l.TTD]
						})
					}
					return p
				})(),
				Lr = (() => {
					class p {
						get isActive() {
							return this._isActive
						}
						constructor(d, b, w, P, Y) {
							this.router = d, this.element = b, this.renderer = w, this.cdr = P, this.link = Y, this.classes = [], this._isActive = !1, this.routerLinkActiveOptions = {
								exact: !1
							}, this.isActiveChange = new l.vpe, this.routerEventsSubscription = d.events.subscribe(Pe => {
								Pe instanceof ci && this.update()
							})
						}
						ngAfterContentInit() {
							(0, K.of)(this.links.changes, (0, K.of)(null)).pipe((0, Re.J)()).subscribe(d => {
								this.update(), this.subscribeToEachLinkOnChanges()
							})
						}
						subscribeToEachLinkOnChanges() {
							this.linkInputChangesSubscription?.unsubscribe();
							const d = [...this.links.toArray(), this.link].filter(b => !!b).map(b => b.onChanges);
							this.linkInputChangesSubscription = (0, B.D)(d).pipe((0, Re.J)()).subscribe(b => {
								this._isActive !== this.isLinkActive(this.router)(b) && this.update()
							})
						}
						set routerLinkActive(d) {
							const b = Array.isArray(d) ? d : d.split(" ");
							this.classes = b.filter(w => !!w)
						}
						ngOnChanges(d) {
							this.update()
						}
						ngOnDestroy() {
							this.routerEventsSubscription.unsubscribe(), this.linkInputChangesSubscription?.unsubscribe()
						}
						update() {
							!this.links || !this.router.navigated || queueMicrotask(() => {
								const d = this.hasActiveLinks();
								this._isActive !== d && (this._isActive = d, this.cdr.markForCheck(), this.classes.forEach(b => {
									d ? this.renderer.addClass(this.element.nativeElement, b) : this.renderer.removeClass(this.element.nativeElement, b)
								}), d && void 0 !== this.ariaCurrentWhenActive ? this.renderer.setAttribute(this.element.nativeElement, "aria-current", this.ariaCurrentWhenActive.toString()) : this.renderer.removeAttribute(this.element.nativeElement, "aria-current"), this.isActiveChange.emit(d))
							})
						}
						isLinkActive(d) {
							const b = function Si(p) {
								return !!p.paths
							}(this.routerLinkActiveOptions) ? this.routerLinkActiveOptions : this.routerLinkActiveOptions.exact || !1;
							return w => !!w.urlTree && d.isActive(w.urlTree, b)
						}
						hasActiveLinks() {
							const d = this.isLinkActive(this.router);
							return this.link && d(this.link) || this.links.some(d)
						}
						static #e = this.\u0275fac = function(b) {
							return new(b || p)(l.Y36(Gi), l.Y36(l.SBq), l.Y36(l.Qsj), l.Y36(l.sBO), l.Y36(ur, 8))
						};
						static #t = this.\u0275dir = l.lG2({
							type: p,
							selectors: [
								["", "routerLinkActive", ""]
							],
							contentQueries: function(b, w, P) {
								if (1 & b && l.Suo(P, ur, 5), 2 & b) {
									let Y;
									l.iGM(Y = l.CRH()) && (w.links = Y)
								}
							},
							inputs: {
								routerLinkActiveOptions: "routerLinkActiveOptions",
								ariaCurrentWhenActive: "ariaCurrentWhenActive",
								routerLinkActive: "routerLinkActive"
							},
							outputs: {
								isActiveChange: "isActiveChange"
							},
							exportAs: ["routerLinkActive"],
							standalone: !0,
							features: [l.TTD]
						})
					}
					return p
				})();
			const jr = new l.OlP("");
			let Gs = (() => {
				class p {
					constructor(d, b, w, P, Y = {}) {
						this.urlSerializer = d, this.transitions = b, this.viewportScroller = w, this.zone = P, this.options = Y, this.lastId = 0, this.lastSource = "imperative", this.restoredId = 0, this.store = {}, Y.scrollPositionRestoration = Y.scrollPositionRestoration || "disabled", Y.anchorScrolling = Y.anchorScrolling || "disabled"
					}
					init() {
						"disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.setHistoryScrollRestoration("manual"), this.routerEventsSubscription = this.createScrollEvents(), this.scrollEventsSubscription = this.consumeScrollEvents()
					}
					createScrollEvents() {
						return this.transitions.events.subscribe(d => {
							d instanceof Ni ? (this.store[this.lastId] = this.viewportScroller.getScrollPosition(), this.lastSource = d.navigationTrigger, this.restoredId = d.restoredState ? d.restoredState.navigationId : 0) : d instanceof ci ? (this.lastId = d.id, this.scheduleScrollEvent(d, this.urlSerializer.parse(d.urlAfterRedirects).fragment)) : d instanceof Gn && 0 === d.code && (this.lastSource = void 0, this.restoredId = 0, this.scheduleScrollEvent(d, this.urlSerializer.parse(d.url).fragment))
						})
					}
					consumeScrollEvents() {
						return this.transitions.events.subscribe(d => {
							d instanceof Xr && (d.position ? "top" === this.options.scrollPositionRestoration ? this.viewportScroller.scrollToPosition([0, 0]) : "enabled" === this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition(d.position) : d.anchor && "enabled" === this.options.anchorScrolling ? this.viewportScroller.scrollToAnchor(d.anchor) : "disabled" !== this.options.scrollPositionRestoration && this.viewportScroller.scrollToPosition([0, 0]))
						})
					}
					scheduleScrollEvent(d, b) {
						this.zone.runOutsideAngular(() => {
							setTimeout(() => {
								this.zone.run(() => {
									this.transitions.events.next(new Xr(d, "popstate" === this.lastSource ? this.store[this.restoredId] : null, b))
								})
							}, 0)
						})
					}
					ngOnDestroy() {
						this.routerEventsSubscription?.unsubscribe(), this.scrollEventsSubscription?.unsubscribe()
					}
					static #e = this.\u0275fac = function(b) {
						l.$Z()
					};
					static #t = this.\u0275prov = l.Yz7({
						token: p,
						factory: p.\u0275fac
					})
				}
				return p
			})();

			function cs(p, ..._) {
				return (0, l.MR2)([{
						provide: S,
						multi: !0,
						useValue: p
					},
					[], {
						provide: kn,
						useFactory: Ao,
						deps: [Gi]
					}, {
						provide: l.tb,
						multi: !0,
						useFactory: Hr
					},
					_.map(d => d.\u0275providers)
				])
			}

			function Ao(p) {
				return p.routerState.root
			}

			function $a(p = {}) {
				return function go(p, _) {
					return {
						\u0275kind: p,
						\u0275providers: _
					}
				}(4, [{
					provide: jr,
					useFactory: () => {
						const d = (0, l.f3M)(ce.EM),
							b = (0, l.f3M)(l.R0b),
							w = (0, l.f3M)(ke),
							P = (0, l.f3M)(Mt);
						return new Gs(P, w, d, b, p)
					}
				}])
			}

			function Hr() {
				const p = (0, l.f3M)(l.zs3);
				return _ => {
					const d = p.get(l.z2F);
					if (_ !== d.components[0]) return;
					const b = p.get(Gi),
						w = p.get(kt);
					1 === p.get(Is) && b.initialNavigation(), p.get(dr, null, l.XFs.Optional)?.setUpPreloading(), p.get(jr, null, l.XFs.Optional)?.init(), b.resetRootComponentType(d.componentTypes[0]), w.closed || (w.next(), w.complete(), w.unsubscribe())
				}
			}
			const kt = new l.OlP("", {
					factory: () => new qe.x
				}),
				Is = new l.OlP("", {
					providedIn: "root",
					factory: () => 1
				}),
				dr = new l.OlP("")
		},
		7582: (Ge, re, v) => {
			function B(Ee, we, ve, Te) {
				var Re, me = arguments.length,
					Ce = me < 3 ? we : null === Te ? Te = Object.getOwnPropertyDescriptor(we, ve) : Te;
				if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) Ce = Reflect.decorate(Ee, we, ve, Te);
				else
					for (var tt = Ee.length - 1; tt >= 0; tt--)(Re = Ee[tt]) && (Ce = (me < 3 ? Re(Ce) : me > 3 ? Re(we, ve, Ce) : Re(we, ve)) || Ce);
				return me > 3 && Ce && Object.defineProperty(we, ve, Ce), Ce
			}

			function de(Ee, we, ve, Te) {
				return new(ve || (ve = Promise))(function(Ce, Re) {
					function tt(Ze) {
						try {
							Se(Te.next(Ze))
						} catch (nt) {
							Re(nt)
						}
					}

					function z(Ze) {
						try {
							Se(Te.throw(Ze))
						} catch (nt) {
							Re(nt)
						}
					}

					function Se(Ze) {
						Ze.done ? Ce(Ze.value) : function me(Ce) {
							return Ce instanceof ve ? Ce : new ve(function(Re) {
								Re(Ce)
							})
						}(Ze.value).then(tt, z)
					}
					Se((Te = Te.apply(Ee, we || [])).next())
				})
			}

			function ce(Ee) {
				return this instanceof ce ? (this.v = Ee, this) : new ce(Ee)
			}

			function $(Ee, we, ve) {
				if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
				var me, Te = ve.apply(Ee, we || []),
					Ce = [];
				return me = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), tt("next"), tt("throw"), tt("return", function Re(_t) {
					return function(gt) {
						return Promise.resolve(gt).then(_t, nt)
					}
				}), me[Symbol.asyncIterator] = function() {
					return this
				}, me;

				function tt(_t, gt) {
					Te[_t] && (me[_t] = function(Dt) {
						return new Promise(function(an, tn) {
							Ce.push([_t, Dt, an, tn]) > 1 || z(_t, Dt)
						})
					}, gt && (me[_t] = gt(me[_t])))
				}

				function z(_t, gt) {
					try {
						! function Se(_t) {
							_t.value instanceof ce ? Promise.resolve(_t.value.v).then(Ze, nt) : mt(Ce[0][2], _t)
						}(Te[_t](gt))
					} catch (Dt) {
						mt(Ce[0][3], Dt)
					}
				}

				function Ze(_t) {
					z("next", _t)
				}

				function nt(_t) {
					z("throw", _t)
				}

				function mt(_t, gt) {
					_t(gt), Ce.shift(), Ce.length && z(Ce[0][0], Ce[0][1])
				}
			}

			function he(Ee) {
				if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
				var ve, we = Ee[Symbol.asyncIterator];
				return we ? we.call(Ee) : (Ee = function Ye(Ee) {
					var we = "function" == typeof Symbol && Symbol.iterator,
						ve = we && Ee[we],
						Te = 0;
					if (ve) return ve.call(Ee);
					if (Ee && "number" == typeof Ee.length) return {
						next: function() {
							return Ee && Te >= Ee.length && (Ee = void 0), {
								value: Ee && Ee[Te++],
								done: !Ee
							}
						}
					};
					throw new TypeError(we ? "Object is not iterable." : "Symbol.iterator is not defined.")
				}(Ee), ve = {}, Te("next"), Te("throw"), Te("return"), ve[Symbol.asyncIterator] = function() {
					return this
				}, ve);

				function Te(Ce) {
					ve[Ce] = Ee[Ce] && function(Re) {
						return new Promise(function(tt, z) {
							! function me(Ce, Re, tt, z) {
								Promise.resolve(z).then(function(Se) {
									Ce({
										value: Se,
										done: tt
									})
								}, Re)
							}(tt, z, (Re = Ee[Ce](Re)).done, Re.value)
						})
					}
				}
			}
			v.d(re, {
				FC: () => $,
				KL: () => he,
				gn: () => B,
				mG: () => de,
				qq: () => ce
			}), "function" == typeof SuppressedError && SuppressedError
		}
	},
	Ge => {
		Ge(Ge.s = 2446)
	}
]);